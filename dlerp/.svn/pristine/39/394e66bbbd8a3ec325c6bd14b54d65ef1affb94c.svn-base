package com.goodcen.cenerp.web;

import java.io.BufferedWriter;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.goodcen.common.document.WordReplacer;
import com.goodcen.common.model.CENCallableMap;
import com.goodcen.common.service.CENCommonService;
import com.goodcen.common.util.CENStringUtils;
import com.goodcen.common.util.CENWebUtils;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;

@Controller("CENOldContFileController.java")
public class CENOldContFileController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CENRtfController.class);

	@Resource(name="multipartPath")
	private String multipartPath;
	
	@Resource(name="cenCommonService")
	private CENCommonService cenCommonService;	

	@RequestMapping(value = "/file/oldFile.do", method = RequestMethod.POST)
	public NexacroResult autoForm(HttpServletRequest request, PlatformData platformData) throws Exception {
		NexacroResult result = new NexacroResult();

		String contextRealPath = multipartPath;

		if (platformData.getDataSet("dsAutoForm") != null) {
			DataSet ds = platformData.getDataSet("dsAutoForm");

			if (ds.getRowCount() > 0) {
				
				for (int j = 0; j < ds.getRowCount(); j++) {
					CENCallableMap paramMap = new CENCallableMap();
					paramMap.put("ATTR01", 	ds.getString(j, "ATTR01"));
					paramMap.put("ATTR02", 	ds.getString(j, "ATTR02"));

					@SuppressWarnings("unchecked")
					List<List<Map<String, Object>>> resultList = (List<List<Map<String, Object>>>)cenCommonService.search("DCCPR_CONTRACT_OLD_CONTENT_SELECT", paramMap);
					
					if (resultList.size() > 0) {
						List<Map<String, Object>> rds = resultList.get(0);
						
						for (int i = 0; i < rds.size(); i++) {
							String filename = (String) rds.get(i).get("FILE_NM");
							String path_nm = (String) rds.get(i).get("PATH_NM");
							String filepath = path_nm.replace("/", File.separator);
							String fullpath = contextRealPath + filepath + File.separator;

							filename += "." + FilenameUtils.getExtension(".html");
							
							File file = new File(fullpath);
							if (file.exists() == false) {
								file.mkdirs();
							}
							
							file = new File(fullpath + File.separator, filename);
							
							BufferedWriter writer;
							try {
								writer = new BufferedWriter(new FileWriter(file));
								writer.write((String) rds.get(i).get("CONTENT"));
								writer.flush(); // 버퍼의 남은 데이터를 모두 쓰기 writer.close(); // 스트림 종료
								writer.close();
							} catch (IOException e) {
							    e.printStackTrace();
							}finally{
							   
							}
						}
					}
				}
			}
		}
		return result;
	}
}