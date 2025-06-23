package com.goodcen.cenerp.web;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
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

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.poifs.crypt.HashAlgorithm;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
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
import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;

@Controller("cenRtfController")
public class CENRtfController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CENRtfController.class);

	@Resource(name="multipartPath")
	private String multipartPath;
	
	@Resource(name="cenCommonService")
	private CENCommonService cenCommonService;	

	@RequestMapping(value = "/file/autoform.do", method = RequestMethod.POST)
	public NexacroResult autoForm(HttpServletRequest request, PlatformData platformData) throws Exception {
		NexacroResult result = new NexacroResult();

		String contextRealPath = multipartPath;

		if (platformData.getDataSet("dsAutoForm") != null) {
			DataSet ds = platformData.getDataSet("dsAutoForm");

			if (ds.getRowCount() > 0) {
				
				for (int j = 0; j < ds.getRowCount(); j++) {
					CENCallableMap paramMap = new CENCallableMap();
					paramMap.put("TY_WORK", ds.getString(j, "TY_WORK"));
					paramMap.put("ATTR01", 	ds.getString(j, "ATTR01"));
					paramMap.put("ATTR02", 	ds.getString(j, "ATTR02"));
					paramMap.put("ATTR03", 	ds.getString(j, "ATTR03"));
					paramMap.put("ATTR04", 	ds.getString(j, "ATTR04"));
					paramMap.put("ATTR05", 	ds.getString(j, "ATTR05"));
					paramMap.put("ATTR06", 	ds.getString(j, "ATTR06"));
					paramMap.put("ID_USER", ds.getString(j, "ID_USER"));

					@SuppressWarnings("unchecked")
					List<List<Map<String, Object>>> resultList = (List<List<Map<String, Object>>>)cenCommonService.search("DZZPR_AUTOFORM_SELECT", paramMap);
					
					if (resultList.size() > 0) {
						String attr01 = "", attr02 = "", attr03 = "", attr04 = "", attr05 = "";
						
						List<Map<String, Object>> rds = resultList.get(0);
						
						for (int i = 0; i < rds.size(); i++) {
							int addfileno = ((BigDecimal)rds.get(i).get("ADDFILE_NO")).intValue();
							
							String filename = (String) rds.get(i).get("FILE_NM");
							String path_nm = (String) rds.get(i).get("PATH_NM");
							
							attr01 = CENStringUtils.valueOf(rds.get(i).get("ATTR01"));
							attr02 = CENStringUtils.valueOf(rds.get(i).get("ATTR02"));
							attr03 = CENStringUtils.valueOf(rds.get(i).get("ATTR03"));
							attr04 = CENStringUtils.valueOf(rds.get(i).get("ATTR04"));
							attr05 = CENStringUtils.valueOf(rds.get(i).get("ATTR05"));

							String filepath = path_nm.replace("/", File.separator);
							String fullpath = contextRealPath + filepath + File.separator;
							
							Boolean bSuccess = false;
							String filehash = "";
							int filesize = 0;

							File file = new File(fullpath);
							if (file.exists() == false) {
								file.mkdirs();
							}
							
							
							// 양식 복사
							String form_file_nm = (String) rds.get(i).get("FORM_FILE_NM");
							String form_path_nm = (String) rds.get(i).get("FORM_PATH_NM");
							String formFilePath = contextRealPath + form_path_nm.replace("/", File.separator) + File.separator
									+ form_file_nm;

							File inFile = new File(formFilePath);
							if (inFile.exists() == false) {
								throw new NexacroException("양식파일이 존재하지 않습니다.");
							}

							String file_ext = FilenameUtils.getExtension(form_file_nm);
							if (StringUtils.isNotBlank(file_ext)) {
								filename += "." + FilenameUtils.getExtension(form_file_nm);
							}
							
							File outFile = new File(fullpath + filename);
							FileCopyUtils.copy(inFile, outFile);
							

							if (resultList.size() > 1) {
								if(resultList.get(1) == null || resultList.get(1).size() == 0) {
									throw new NexacroException("양식파일의 변경 내역이 없습니다.");
								}
//									List<Map<String, Object>> rds2 = resultList.get(1);
//									Map tranMap = getTranListToMap(rds2,"DS_PATTERN","DS_REPLACE");
								Map<String,Object> tranMap = resultList.get(1).get(0);
								
								try {
									WordReplacer docs = new WordReplacer(outFile);
									docs.replaceWordsInFile(tranMap);
									// 보호모드 적용
									XWPFDocument xwpfdoc = docs.getModdedXWPFDoc();
									xwpfdoc.enforceReadonlyProtection("epc2021!@", HashAlgorithm.md5);
									docs.saveAndGetModdedFile(outFile);
									bSuccess = true;
									
								} catch (IOException e) {
									bSuccess = false;
								} finally {
									try {
										filesize = (int) FileUtils.sizeOf(outFile);
										filehash = CENWebUtils.getFileHashSHA256(fullpath + filename);
									} catch (IOException e) {
									}
								}
							}

							if (bSuccess) {

								CENCallableMap paramMap2 = new CENCallableMap();

								paramMap2.put("TY_SAVE", "I");
								paramMap2.put("ADDFILE_NO", addfileno);
								paramMap2.put("SEQNO", 0);
								paramMap2.put("FILE_NM", filename);
								paramMap2.put("PATH_NM", path_nm);
								paramMap2.put("FILE_SIZ", filesize);
								paramMap2.put("ATTR01", attr01);
								paramMap2.put("ATTR02", attr02);
								paramMap2.put("ATTR03", attr03);
								paramMap2.put("ATTR04", attr04);
								paramMap2.put("ATTR05", attr05);
								paramMap2.put("FILE_HASH", filehash);
								paramMap2.put("ID_USER", paramMap.get("ID_USER"));
								paramMap2.put("SEQNO_OUT", 0);

								cenCommonService.save("DZZPR_ADDFILE_D_SAVE", paramMap2);
							}
						}
						cenCommonService.save("DZZPR_ADDFILE_AFTER_UPDATE", paramMap);
					}
				}
			}
		}
		
		return result;
	}
	
//	private Map getTranListToMap(List<Map<String, Object>> list, String cdCode, String dsCode) {
//		Map<String,String> map = new HashMap<String,String>();
//		
//		int listCnt = list.size();
//		for(int i = 0; i < listCnt; i++) {
//			map.put((String)list.get(i).get(cdCode), (String)list.get(i).get(dsCode));
//		}
//		
//		return map;
//	}

	@RequestMapping(value = "/file/rtfdown.do")
	public ResponseEntity<InputStreamResource> rtfDownload(HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		ResponseEntity<InputStreamResource> entity = null;
		CENCallableMap paramMap = new CENCallableMap();
		String sql = "";

		String ty_form = request.getParameter("TY_FORM");
		if (ty_form != null && ty_form.equals("REPLACE")) {
			String ty_work = request.getParameter("TY_WORK");
			String attr01 = request.getParameter("ATTR01");
			String attr02 = request.getParameter("ATTR02");
			String attr03 = request.getParameter("ATTR03");
			String attr04 = request.getParameter("ATTR04");
			String attr05 = request.getParameter("ATTR05");
			String attr06 = request.getParameter("ATTR06");
			String id_user = request.getParameter("ID_USER");

			sql = "DZZPR_FORM_FILE_REPLACE_DOWNLOAD";
			paramMap.put("TY_WORK", ty_work);
			paramMap.put("ATTR01", attr01);
			paramMap.put("ATTR02", attr02);
			paramMap.put("ATTR03", attr03);
			paramMap.put("ATTR04", attr04);
			paramMap.put("ATTR05", attr05);
			paramMap.put("ATTR06", attr06);
			paramMap.put("ID_USER", id_user);
		} else {
			String form_file_no = request.getParameter("FORM_FILE_NO");

			sql = "DZZPR_FORM_FILE_DOWNLOAD";
			paramMap.put("FORM_FILE_NO", Integer.parseInt(form_file_no));
		}
		paramMap.setStoredProcedureSQL(sql);

		@SuppressWarnings("unchecked")
		List<List<Map<String, Object>>> resultList = (List<List<Map<String, Object>>>) cenCommonService.search(sql, paramMap);
		if (resultList.size() > 0) {
			List<Map<String, Object>> rds = resultList.get(0);
			if (rds.size() > 0) {
				String filename = "";
				String filesize = "";
				InputStream inputStream = null;
				ByteArrayOutputStream b = null;
				String contextRealPath = multipartPath;
				
				try {
					if (rds.get(0).get("ADDFILE_NO") == null) {
						filename = (String) rds.get(0).get("DS_FILENAME");
						String rtf = (String) rds.get(0).get("CONTENT");
						inputStream = new ByteArrayInputStream(rtf.getBytes(StandardCharsets.UTF_8));
						filesize = String.valueOf(rtf.length());					
					} else {
						filename = (String) rds.get(0).get("DS_FILENAME");
						String file_nm = (String) rds.get(0).get("FILE_NM");
						String path_nm = (String) rds.get(0).get("PATH_NM");
						String filePath = contextRealPath + path_nm.replace("/", File.separator) + File.separator
								+ file_nm;
						File fileDownload = new File(filePath);
	
						if (!fileDownload.exists() && !fileDownload.isFile()) {
							throw new FileNotFoundException("양식파일이 존재하지 않습니다.");
						}
						
						String file_ext = FilenameUtils.getExtension(file_nm);
						if (StringUtils.isNotBlank(file_ext)) {
							filename += "." + FilenameUtils.getExtension(file_nm);
						}
						
						if (resultList.size() > 1) {
							if(resultList.get(1) == null || resultList.get(1).size() == 0) {
								throw new FileNotFoundException("양식파일의 변경 내역이 없습니다.");
							}
							Map<String,Object> tranMap = resultList.get(1).get(0);
							
							WordReplacer docs = new WordReplacer(fileDownload);
							docs.replaceWordsInFile(tranMap);
							XWPFDocument xwpfdoc =  docs.getModdedXWPFDoc();
							
							b = new ByteArrayOutputStream();
							xwpfdoc.write(b);
							
							filesize = String.valueOf(b.size());
							inputStream = new ByteArrayInputStream(b.toByteArray());
						}
						else {
							filesize = String.valueOf(fileDownload.length());
		
							FileSystemResource fsresource = new FileSystemResource(fileDownload);
							inputStream = fsresource.getInputStream();
						}
					}
				} catch (Exception e) {
					throw new Exception(e);
				} finally {
					//if(inputStream != null) inputStream.close();
					if(b != null) b.close();
				}

				String userAgent = request.getHeader("User-Agent");
				String isRuntime = "N";

				if (userAgent.indexOf("nexacro") > -1) {
					// nexacrobrowser여부
					isRuntime = "Y";
				}

				HttpHeaders headers = new HttpHeaders();
				response.setContentType("application/octet;charset=utf-8");
				if (isRuntime != null && isRuntime.equals("N")) {
					// IE일경우
					if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
						String convName = URLEncoder.encode(filename, "UTF-8").replaceAll("\\+", "%20");
						response.setHeader("Content-Disposition", "attachment;filename =\"" + convName + "\";");
					} else {
						// 그외의 경우
						response.setHeader("Content-Disposition", "attachment; filename = \""
								+ URLEncoder.encode(filename, "UTF-8") + "\"");
					}
					response.setHeader("Content-Transfer-Encoding", "binary");
					response.setHeader("Content-Length", filesize);
					response.setHeader("Pargma", "no-cache");
					response.setHeader("Expires", "-1");

				} else {
					response.setHeader("Content-Disposition",
							"attachment; filename = \"" + URLEncoder.encode(filename, "UTF-8") + "\"");
					response.setHeader("Content-Transfer-Encoding", "binary");
					response.setHeader("Content-Length", filesize);
				}

				try {
					InputStreamResource inputStreamResource = new InputStreamResource(inputStream);
					entity = new ResponseEntity<InputStreamResource>(inputStreamResource, headers, HttpStatus.OK);
				} catch (Exception e) {
					// LOGGER.debug(e.getMessage(), e.getCause());
					entity = new ResponseEntity<InputStreamResource>(HttpStatus.BAD_REQUEST);
				} finally {
				}
			}
		}
		return entity;
	}

	@RequestMapping(value = "/file/rtfup.do")
	public ModelAndView rtfUpload(MultipartHttpServletRequest request, HttpServletResponse response) {

		ModelAndView view = new ModelAndView();

		PlatformData resData = new PlatformData();
		VariableList resVarList = resData.getVariableList();

		String form_file_no = request.getParameter("FORM_FILE_NO");
		String id_user = request.getParameter("ID_USER");
		String ty_file = request.getParameter("TY_FILE");

		// MultipartHttpServletRequest multipartHttpServletRequest =
		// (MultipartHttpServletRequest)request;
		Iterator<String> iterator = request.getFileNames();

		try {
			while (iterator.hasNext()) {
				String fileid = iterator.next();
				MultipartFile item = request.getFile(fileid);

				if (item.getName() != null) {
					// String fileName = item.getOriginalFilename(); //
					// getFileName(item);
					// long fileSize = item.getSize();
					//
					if (ty_file.equals("RTF")) {
						String content = new String(item.getBytes());

						CENCallableMap paramMap2 = new CENCallableMap();
						paramMap2.put("FORM_FILE_NO", Integer.parseInt(form_file_no));
						paramMap2.put("CONTENT", content);
						paramMap2.put("ID_USER", id_user);

						cenCommonService.save("DZZPR_FORM_FILE_UPLOAD", paramMap2);
					} else {

						String contextRealPath = multipartPath;

						// ADDFILE_NO 채번
						CENCallableMap paramMap = new CENCallableMap();
						paramMap.put("TY_SAVE", "I");
						paramMap.put("ADDFILE_NO", 0);
						paramMap.put("FILE_GUBUN", "FORM");
						paramMap.put("ID_USER", id_user);
						
						cenCommonService.save("DZZPR_ADDFILE_M_SAVE", paramMap);
						
						int addfile_no = 0;
						if (((LinkedHashMap<?,?>)((List<?>)paramMap.get("ORA_OUTPUT0")).get(0)).get("ADDFILE_NO_OUT") != null) {
							addfile_no = ((BigDecimal)((LinkedHashMap<?,?>)((List<?>)paramMap.get("ORA_OUTPUT0")).get(0)).get("ADDFILE_NO_OUT")).intValue();
						}
						if (addfile_no == 0) {
							throw new Exception("파일채번에 실패했습니다.");
						}

						String path = "/FORM/" + Integer.toString(addfile_no);

						String filePath = path.replace("/", File.separator) + File.separator;
						filePath = contextRealPath + filePath;
						File file = new File(filePath);
						if (file.exists() == false) {
							file.mkdirs();
						}
						String fileName = item.getOriginalFilename(); // getFileName(item);
						long fileSize = item.getSize();
						LOGGER.debug(fileName);

						fileName = FilenameUtils.getName(fileName);
						file = new File(filePath + File.separator, fileName);

						item.transferTo(file);

						String fileHash = CENWebUtils.getFileHashSHA256(file.getPath());

						CENCallableMap paramMap2 = new CENCallableMap();
						paramMap2.put("FORM_FILE_NO", Integer.parseInt(form_file_no));
						paramMap2.put("ADDFILE_NO", addfile_no);
						paramMap2.put("FILE_NM", fileName);
						paramMap2.put("PATH_NM", path);
						paramMap2.put("FILE_SIZ", (int) fileSize);
						paramMap2.put("FILE_HASH", fileHash);
						paramMap2.put("ID_USER", id_user);

						cenCommonService.save("DZZPR_FORM_ADDFILE_UPLOAD", paramMap2);
					}

				}
			}

			resVarList.add("ErrorCode", 0);
			resVarList.add("ErrorMsg", "SUCCESS");

		} catch (Exception e) {
			// LOGGER.debug(e.getMessage(), e.getCause());
			resVarList.add("ErrorCode", -1);
			resVarList.add("ErrorMsg", e);
			LOGGER.debug(e.getMessage(), e.getCause());
		} finally {
			// LOGGER.debug("################ Deploy End ################");
		}
		
		view.addObject("data", resData);
		view.setViewName("file/saveFile");

		return view;
	}

	/*
	 * @RequestMapping(value="/file/rtfFile.do") public
	 * ResponseEntity<InputStreamResource> rtfFile(HttpServletRequest request,
	 * HttpServletResponse response) throws IOException { String contextRealPath
	 * = env.getProperty("spring.servlet.multipart.location");
	 * 
	 * // 양식 관리번호로 파일경로 가져오기 String id_rtf = request.getParameter("ID_RTF");
	 * String params = request.getParameter("PARAMS");
	 * 
	 * ObjectMapper mapper = new ObjectMapper(); Map<String, String> map =
	 * mapper.readValue(params, Map.class);
	 * 
	 * String savePath = "DZ\\Sample"; String name = "AE_PROOF_DOC_A.rtf";
	 * //tomcat8.0 보안정책으로 인해 화면에서 encoding해서 넘겨진값 String filename =
	 * java.net.URLDecoder.decode(name, "utf-8"); //file search를 위해 다시 decoding
	 * 
	 * //file생성 String filePath = contextRealPath + savePath.replace("\\",
	 * File.separator) + File.separator + filename; File fileDownload = new
	 * File(filePath);
	 * 
	 * String userAgent = request.getHeader("User-Agent"); String isRuntime =
	 * "N";
	 * 
	 * if (userAgent.indexOf("nexacro") > -1) { //nexacrobrowser여부 isRuntime =
	 * "Y"; }
	 * 
	 * ResponseEntity<InputStreamResource> entity = null;
	 * if(fileDownload.isFile()){ String text = new
	 * String(Files.readAllBytes(Paths.get(filePath)));
	 * 
	 * for ( String key : map.keySet() ) { text = text.replace(key.replace("{",
	 * "\\{").replace("}", "\\}"), stringToHex(map.get(key))); }
	 * 
	 * HttpHeaders headers = new HttpHeaders();
	 * response.setContentType("application/octet;charset=utf-8"); if(isRuntime
	 * != null && isRuntime.equals("N")) { //IE일경우 if (userAgent.indexOf("MSIE")
	 * > -1 ||userAgent.indexOf("Trident") > -1 ) { String convName =
	 * java.net.URLEncoder.encode(filename,"UTF-8").replaceAll("\\+", "%20");
	 * response.setHeader("Content-Disposition", "attachment;filename =\"" +
	 * convName + "\";"); } else { //그외의 경우
	 * response.setHeader("Content-Disposition", "attachment; filename = \"" +
	 * new String(name.getBytes("utf-8"), "ISO8859_1") + "\""); }
	 * response.setHeader("Content-Transfer-Encoding", "binary");
	 * response.setHeader("Content-Length", "" + String.valueOf(text.length()));
	 * response.setHeader("Pargma", "no-cache"); response.setHeader("Expires",
	 * "-1");
	 * 
	 * } else { response.setHeader("Content-Disposition",
	 * "attachment; filename = \"" + new String(name.getBytes("utf-8"),
	 * "ISO8859_1") + "\""); response.setHeader("Content-Transfer-Encoding",
	 * "binary"); response.setHeader("Content-Length", "" +
	 * String.valueOf(text.length())); }
	 * 
	 * try { InputStream inputStream = new
	 * ByteArrayInputStream(text.getBytes(StandardCharsets.UTF_8));
	 * InputStreamResource inputStreamResource = new
	 * InputStreamResource(inputStream); entity = new
	 * ResponseEntity<InputStreamResource>(inputStreamResource, headers,
	 * HttpStatus.OK); } catch (Exception e) { //LOGGER.debug(e.getMessage(),
	 * e.getCause()); entity = new
	 * ResponseEntity<InputStreamResource>(HttpStatus.BAD_REQUEST); } finally {
	 * }
	 * 
	 * } return entity; } public static String stringToHex(String s) throws
	 * UnsupportedEncodingException { s = new String(s.getBytes("CP949"),
	 * "8859_1"); String result = "";
	 * 
	 * for (int i = 0; i < s.length(); i++) { result += String.format("\\'%02x",
	 * (int) s.charAt(i)); }
	 * 
	 * return result; }
	 * 
	 */

}