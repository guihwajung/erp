package com.goodcen.cenerp.web;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.goodcen.common.document.ExcelUtils;
import com.goodcen.common.nexacro.service.CENNexacroService;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro.uiadapter17.spring.core.data.convert.ConvertDefinition;
import com.nexacro.uiadapter17.spring.core.data.support.DataSetToListConverter;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.PlatformData;

@Controller
public class CENExcelController {

	@Resource(name="multipartPath")
	private String multipartPath;

	@Resource(name = "cenNexacroService")
	private CENNexacroService cenNexacroService;

	/**
	 * 대량 데이터 엑셀 다운로드 (SP 조회 데이터로 별도 처리)
	 * 넥사크로 gfnExcelExportBig 함수 사용
	 * @param request
	 * @param response
	 * @param platformData
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/file/excelExport.do", method = RequestMethod.POST)
	public NexacroResult excelExport(HttpServletRequest request, HttpServletResponse response,
			PlatformData platformData) throws Exception {

		NexacroResult result = new NexacroResult();

		try {
			String contextRealPath = multipartPath;

			DataSet dsInfos = platformData.getDataSet("exinfo");
			String sheetName = dsInfos.getString(0, "SHEETNAME");
			String fileName = contextRealPath + "\\" + dsInfos.getString(0, "FILENAME");
			
			ExcelUtils excel = new ExcelUtils(sheetName, 100);

			// 헤더
			DataSet dsHeads = platformData.getDataSet("headinfo");
			List<Map<String, Object>> listHead = new ArrayList<>();
			for(int r = 0; r < dsHeads.getRowCount(); r++) {
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("COLUMN", dsHeads.getString(r, "COLUMN"));
				map.put("TEXT", dsHeads.getString(r, "TEXT"));
				map.put("SIZE", dsHeads.getInt(r, "SIZE") * 35);
				map.put("ALIGN", dsHeads.getString(r, "ALIGN"));
				map.put("COLS", dsHeads.getInt(r, "COLS"));
				map.put("COLSPAN", dsHeads.getInt(r, "COLSPAN"));
				map.put("ROWS", dsHeads.getInt(r, "ROWS"));
				map.put("ROWSPAN", dsHeads.getInt(r, "ROWSPAN"));
				map.put("FORMAT", dsHeads.getString(r, "FORMAT"));
				map.put("TYPE", dsHeads.getString(r, "TYPE"));
				listHead.add(map);
			}

			// 해당아이템 조회
			ObjectMapper mapper = new ObjectMapper();
			DataSetToListConverter converter = new DataSetToListConverter();
			ConvertDefinition definition = new ConvertDefinition("list");
			definition.setGenericType(Map.class);

			NexacroResult nr = cenNexacroService.searchNexa(platformData);
			DataSetList dsList = nr.getPlatformData().getDataSetList();
			//for (int k = 0; k < dsList.size(); k++) {
			if(dsList.size() > 0) {
				List<Map<String, Object>> list = converter.convert(dsList.get(0), definition);
//				if (k > 0) {
//					excel.addSheet("sheet" + (k + 1));
//				}
				excel.write(excel, listHead, list);
			}			

			String filePath = contextRealPath + "excel/";

			// 엑셀 파일 생성
			String returnfileName = excel.finish(fileName, filePath);

			result.setErrorCode(0);
			result.setErrorMsg(returnfileName);
		} catch (IOException e) {
			result.setErrorCode(-9000);
			result.setErrorMsg("엑셀다운로드에 실패했습니다.");
		}
		return result;
	}
	/**
	 * 특정 엑셀 파일수정 ()
	 * 
	 * @param request
	 * @param response
	 * @param platformData
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/file/ExcelFileUpdater.do", method = RequestMethod.POST)
	public NexacroResult excelFileUpdater(HttpServletRequest request, PlatformData platformData) throws Exception {

		NexacroResult result = new NexacroResult();

		try {
			String contextRealPath = multipartPath;
			
			
			String encoding = request.getParameter("fileEncoding") == null ? "EUC-KR"
					: request.getParameter("fileEncoding");
			
			DataSet dsInfos = platformData.getDataSet("exinfo");
			//String FilePath = contextRealPath + dsInfos.getString(0, "FILEPATH").replace("\\", File.separator).replace("/", File.separator);
			String path = dsInfos.getString(0, "FILEPATH");  
			String name = dsInfos.getString(0, "FILENAME");    // tomcat8.0 보안정책으로 인해 화면에서 encoding해서 넘겨진값		
			String filename = java.net.URLDecoder.decode(path + name, encoding);
			
			// 2. 파일 객체 생성
//			File file = new File(contextRealPath + filename);
			
			FileInputStream file = new FileInputStream(contextRealPath + filename);		
			
			XSSFWorkbook workbook = new XSSFWorkbook(file);
			XSSFSheet sheet = workbook.getSheetAt(1);
			
						
			// 파일 입력 자료 조회 
			DataSet datainfo = platformData.getDataSet("datainfo");
			
			XSSFRow row = sheet.getRow(4);			
            if(row == null){
            	row = sheet.createRow(4);
            }
            // 엑셀 파일 update 
            for(int r = 0; r < datainfo.getRowCount(); r++) {
            	XSSFRow newrow = sheet.getRow(5+r);			
                if(row == null){
                	newrow = sheet.createRow(5+r);
                }
	            for(int k = 0; k < datainfo.getColumnCount(); k++) {	            	
					XSSFCell newcell = newrow.getCell(k);		
					XSSFCell cell = row.getCell(k);	
		            if(newcell == null){
		            	newcell = newrow.createCell(k);
		            }
		            //cell.setCellValue("12345678");
//		            String value="";
//		            String cValue = datainfo.getString(r, k) + "";
//		            switch (cell.getCellType()){
//                    case XSSFCell.CELL_TYPE_FORMULA:
//                        value=cell.getCellFormula();                       
//                        break;
//                    case XSSFCell.CELL_TYPE_NUMERIC:
//                        value=cell.getNumericCellValue()+"";
//                        break;
//                    case XSSFCell.CELL_TYPE_STRING:
//                        value=cell.getStringCellValue()+"";
//                        break;
//                    case XSSFCell.CELL_TYPE_BLANK:
//                        value=cell.getBooleanCellValue()+"";
//                        break;
//                    case XSSFCell.CELL_TYPE_BOOLEAN:
//                        value=cell.getErrorCellValue()+"";
//                        break;
//                    }
//		            		            
//		            System.out.println(r+"번 행 : "+k+"번 열 값은: "+value + " ,수정값은 :" + cValue);
		            if(k != 7 && k != 8) {
		            	newcell.setCellValue(datainfo.getString(r, k));		            	
		            } 
		            CellStyle bodyCellStyle = cell.getCellStyle();
		            newcell.setCellStyle(bodyCellStyle);
				}
            }
            
            file.close();    
            
            try {
	            FileOutputStream outFile =new FileOutputStream(new File(contextRealPath + filename));
	            
	            workbook.write(outFile);
	            
	            if (workbook != null) workbook.close();
				if (outFile != null) outFile.close();
				if (file != null) file.close();
            }
            catch (IOException e) {
            	e.printStackTrace();            	
            }
			
			result.setErrorCode(0);
			result.setErrorMsg(dsInfos.getString(0, "FILENAME"));
		} catch (IOException e) {
			result.setErrorCode(-9000);
			result.setErrorMsg("엑셀 파일 수정에 실패했습니다.");
		}
		return result;
	}
}
