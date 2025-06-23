package com.carbonco.ws.erp.fcrypt;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.goodcen.cenerp.web.CENFileController;
import com.goodcen.common.model.CENCallableMap;
import com.goodcen.common.nexacro.service.CENNexacroService;
import com.goodcen.common.service.CENCommonService;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;

import gov.nts.crypto.FCrypt;

@Controller("fileCryptController")
public class FileCryptController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(CENFileController.class);
	
	@Resource(name="multipartPath")
	private String multipartPath;

	@Resource(name = "cenCommonService")
	private CENCommonService cenCommonService;
	
	@Resource(name = "cenNexacroService")
	private CENNexacroService cenNexacroService;
	
	@RequestMapping(value = "/file/NTSCrypt.do", method = {RequestMethod.POST, RequestMethod.GET})
	public NexacroResult NTSCrypt(HttpServletRequest request, PlatformData platformData) throws Exception {
		
		NexacroResult result = new NexacroResult();
		//String returnString = "";
		
		String contextRealPath = multipartPath;
		
		DataSet dsInfos = platformData.getDataSet("fileinfo");
		String strPlainFilePath = contextRealPath + dsInfos.getString(0, "FILEPATH").replace("\\", File.separator).replace("/", File.separator);
		String name = dsInfos.getString(0, "FILENAME");    // tomcat8.0 보안정책으로 인해 화면에서 encoding해서 넘겨진값		
		
		DataSet dataInfo = platformData.getDataSet("datainfo");
		String corp = dataInfo.getString(0, "CD_CORP");
		String id = dataInfo.getString(0, "NO_ID");
		String spname = dataInfo.getString(0, "_SP");
		
		//저장할 data 가져오기 
		CENCallableMap paramMap = new CENCallableMap();
		paramMap.put("CD_CORP", corp);
		paramMap.put("NO_ID", id);
		
		List<List<Map<String, Object>>> resultList =
				(List<List<Map<String, Object>>>) cenCommonService.search(spname, paramMap);
		
		String data="";		
		
		for (int i = 0; i < resultList.get(0).size(); i++) {
			data = data + resultList.get(0).get(i).get("ROWDATA");
			if(i == resultList.get(0).size() -1){
				;
			}else{
				data = data + "\n";
			}
		}

		//파일저장 
		String encoding = request.getParameter("fileEncoding") == null ? "EUC-KR"
				: request.getParameter("fileEncoding");
		String filename = java.net.URLDecoder.decode(name, encoding); // file search를 위해 다시 decoding
		String strEncFileName ="enc_"+ filename;
			
		//String strFullFileName = "C:\\Goodcen\\File\\Carbonco\\NTS\\" + filename;
		String strFullFileName = strPlainFilePath.replace("/", "\\") + "\\" + filename;
		
		LOGGER.info("NTSCrypt filename: " + filename + ", strFullFileName: " + strFullFileName);
		
		try {
			File file = new File(strFullFileName);
			FileOutputStream fileOutputStream = new FileOutputStream(file, false);
			OutputStreamWriter fw = new OutputStreamWriter(fileOutputStream, encoding);
			BufferedWriter out = new BufferedWriter(fw);
			
			out.write(data);
			out.flush();	
			out.close();
		
		} catch (FileNotFoundException e) {
			 e.printStackTrace();
			 result.setErrorCode(-9000);
			 result.setErrorMsg("파일생성에 실패했습니다.");
		}		
	
		//파일암호화 	   
	    //String strEncFilePathName ="C:\\Goodcen\\File\\Carbonco\\NTS" + strEncFileName;   // 암호화될 파일명
	    String strEncFilePathName =strPlainFilePath.replace("/", "\\") + "\\" + strEncFileName;   // 암호화될 파일명
	    String strPassword = dsInfos.getString(0, "PASSWORD");        // 암호화 비밀번호
	    
	    LOGGER.info("NTSCrypt contextRealPath: " + contextRealPath + ", strEncFilePathName: " + strEncFilePathName);
	    
		try
	    {
	      // 비밀번호로 파일암호화
	      int nReturn = FCrypt.DSFC_EncryptFile(strFullFileName, strEncFilePathName, strPassword, 0);	
	      //System.out.println("nReturn : " + nReturn);
	      
	      result.setErrorCode(nReturn);
		  result.setErrorMsg(strEncFileName);		  
	    }
	    catch (Exception e) {
	      //e.printStackTrace();
	      result.setErrorCode(-9000);
		  result.setErrorMsg("파일암호화에 실패했습니다.");
		  LOGGER.info(e.getMessage(), e.getCause());
	    } 			
			
		return result;
		
	  }
	
}
