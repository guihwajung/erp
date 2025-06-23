package com.goodcen.cenerp.web;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.Base64.Encoder;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.goodcen.common.model.CENCallableMap;
import com.goodcen.common.model.CENOptions.CENProcData;
import com.goodcen.common.service.CENCommonService;
import com.goodcen.common.util.CENWebUtils;
import com.goodcen.common.util.GifDecoder;
import com.goodcen.common.util.GifDecoder.GifImage;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.ColumnHeader;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;

import net.coobird.thumbnailator.Thumbnails;


@Controller("cenFileController")
public class CENFileController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CENFileController.class);
	
	@Resource(name="multipartPath")
	private String multipartPath;

	@Resource(name = "cenCommonService")
	private CENCommonService cenCommonService;
	
	private static final String[] filterImg = { "png", "jpg", "jpeg", "gif", "bmp", "tif", "tiff" };

	@RequestMapping(value = "/file/downloadFile.do", method = {RequestMethod.POST, RequestMethod.GET})
	public ResponseEntity<InputStreamResource> downloadFile(HttpServletRequest request, HttpServletResponse response)
			throws IOException {

		String contextRealPath = multipartPath;

		String savePath = request.getParameter("path");
		String name = request.getParameter("fileName");
		String realname = request.getParameter("realName");	// 옵션-물리적파일명이 다른경우 오리지날파일명으로 다운로드
		String filename = java.net.URLDecoder.decode(name, "utf-8");
		
		String filePath = contextRealPath + savePath.replace("/", File.separator).replace("\\", File.separator)
				+ File.separator + filename;
		File fileDownload = new File(filePath);

		String userAgent = request.getHeader("User-Agent");
		String isRuntime = "N";

		LOGGER.debug("filePath: " + filePath + ", userAgent: " + userAgent);

		if (userAgent.indexOf("nexacro") > -1) {
			// nexacrobrowser여부
			isRuntime = "Y";
		}
		
		if (realname != null && StringUtils.isNotBlank(realname)) {
			name = realname;
			filename = java.net.URLDecoder.decode(realname, "utf-8");
		}

		ResponseEntity<InputStreamResource> entity = null;
		HttpHeaders headers = new HttpHeaders();
		if (fileDownload.isFile()) {
			headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
			response.setContentType("application/octet-stream;charset=utf-8");
		
			if (isRuntime != null && isRuntime.equals("N")) {
				// IE일경우
				if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
					String convName = java.net.URLEncoder.encode(filename, "UTF-8").replaceAll("\\+", "%20");
					response.setHeader("Content-Disposition", "attachment;filename =\"" + convName + "\";");
				} else {
					// 그외의 경우
					response.setHeader("Content-Disposition",
							"attachment; filename = \"" + new String(name.getBytes("utf-8"), "ISO8859_1") + "\"");
				}
				response.setHeader("Content-Transfer-Encoding", "binary");
				response.setHeader("Content-Length", "" + String.valueOf(fileDownload.length()));
				response.setHeader("Pargma", "no-cache");
				response.setHeader("Expires", "-1");

			} else {
				response.setHeader("Content-Disposition",
						"attachment; filename = \"" + new String(name.getBytes("utf-8"), "ISO8859_1") + "\"");
				response.setHeader("Content-Transfer-Encoding", "binary");
				response.setHeader("Content-Length", "" + String.valueOf(fileDownload.length()));
			}

			try {
				FileSystemResource fsresource = new FileSystemResource(fileDownload);
				InputStreamResource resource = new InputStreamResource(fsresource.getInputStream());

				entity = new ResponseEntity<InputStreamResource>(resource, headers, HttpStatus.OK);
			} catch (Exception e) {
				// LOGGER.debug(e.getMessage(), e.getCause());
				entity = new ResponseEntity<InputStreamResource>(HttpStatus.BAD_REQUEST);
			} finally {
			}

		} else {
			throw new FileNotFoundException();
		}
		return entity;
	}

	/**
	 * 파일저장
	 * 
	 * @param
	 * @return
	 * @throws ServletException
	 * @throws IOException
	 */

	@RequestMapping(value = "/file/saveFile.do", method = RequestMethod.POST)
	public ModelAndView saveFile(MultipartHttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {

		ModelAndView view = new ModelAndView();

		PlatformData resData = new PlatformData();
		VariableList resVarList = resData.getVariableList();

		saveFileProc(request, resData, resVarList);
		
		view.addObject("data", resData);
		view.setViewName("file/saveFile");

		return view;
	}

	private void saveFileProc(MultipartHttpServletRequest request, PlatformData resData, VariableList resVarList) {
		try {
			String contextRealPath = multipartPath;
			Iterator<String> iterator = request.getFileNames();

			String path = request.getParameter("path");
			String chgname = request.getParameter("fileName");		// 옵션-물리적파일명 다르게 저장
			String overwrite = request.getParameter("overwrite");	// 옵션-덮어쓰기여부 (기본동작 덮어쓰기)
			String filePath = path.replace("/", File.separator).replace("\\", File.separator) + File.separator;
			filePath = contextRealPath + filePath.replace("\\\\", "\\").replace("//", "/");

			File file = new File(filePath);
			if (!file.exists()) {
				file.mkdirs();
			}
			
			String[] listNames = null;
			if (chgname != null && StringUtils.isNotBlank(chgname)) {
				listNames = chgname.split("/");	// 멀티업로드시 구분을 위함
			}

			DataSet ds = new DataSet("ds_output");
			ds.addColumn(new ColumnHeader("fileid", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("fileimg", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("filename", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("orgname", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("filesize", DataTypes.INT));
			ds.addColumn(new ColumnHeader("filehash", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("tranfilesize", DataTypes.INT));
			ds.addColumn(new ColumnHeader("prog", DataTypes.INT));

			while (iterator.hasNext()) {
				String fileid = iterator.next();
				MultipartFile item = request.getFile(fileid);

				if (item.getName() != null) {
					String fileName = item.getOriginalFilename(); // getFileName(item);
					long fileSize = item.getSize();

					fileName = FilenameUtils.getName(fileName);
					String orgName = fileName;
					// 물리적파일명을  다르게 저장할 경우 
					if (listNames != null) {
						for (String s : listNames){
							String[] cs = s.split(":"); // 오리지날파일명:물리적파일명
							if (cs[0].equals(fileName)) {
								fileName = cs[1];
							}
						}
					}
					
					String baseName = FilenameUtils.getBaseName(fileName);
					String fileExt = FilenameUtils.getExtension(fileName);
					
					file = new File(filePath + File.separator, fileName);
					
					if (overwrite != null && overwrite.equals("N")) {
						int f = 1;
						while(file.exists()) {
							fileName = baseName + "_" + (f++) + "." + fileExt;
							file = new File(filePath + File.separator, fileName);						
						}
					}

					item.transferTo(file);

					String fileHash = CENWebUtils.getFileHashSHA256(file.getPath());

					LOGGER.info(
							"saveFile name: " + fileName + ", size: " + Long.toString(fileSize) + ", hash:" + fileHash);

					int row = ds.newRow();
					ds.set(row, "fileid", fileid);
					ds.set(row, "filename", fileName);
					ds.set(row, "orgname", orgName);
					ds.set(row, "filesize", fileSize);
					ds.set(row, "filehash", fileHash);
					ds.set(row, "prog", 0);

					// Thumbnail 생성		
					try {
						fileExt = fileExt.toLowerCase();
						if (Arrays.stream(filterImg).anyMatch(fileExt::equals)) {
							String thumbPath = filePath + File.separator + "thumb" + File.separator + fileName + ".jpg";
							if (fileExt.equals("gif")) {
								FileInputStream data = new FileInputStream(file);
								GifImage gif = GifDecoder.read(data);
								if (gif.getFrameCount() > 0) {
									Thumbnails.of(gif.getFrame(0)).size(300, 270).outputFormat("jpg").toFile(thumbPath);
								}
							} else {
								Thumbnails.of(file).size(300, 270).outputFormat("jpg").toFile(thumbPath);
							}
						}
					} catch (Exception et) {
						LOGGER.error(et.getMessage(), et.getCause());						
					}
				}
			}
			
			

			resData.addDataSet(ds);
			resVarList.add("ErrorCode", 0);
			resVarList.add("ErrorMsg", "SUCCESS");

		} 
		catch (MaxUploadSizeExceededException ex) {
			throw ex;
		}
		catch (Exception e) {
			// LOGGER.debug(e.getMessage(), e.getCause());
			resVarList.add("ErrorCode", -1);
			resVarList.add("ErrorMsg", e);
			LOGGER.info(e.getMessage(), e.getCause());
		}
	}
	
	@RequestMapping(value = "/file/saveAllFile.do", method = RequestMethod.POST)
	public ModelAndView saveAllFile(MultipartHttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {

		ModelAndView view = new ModelAndView();

		PlatformData resData = new PlatformData();
		VariableList resVarList = resData.getVariableList();

		saveFileAllProc(request, resData, resVarList);
		
		view.addObject("data", resData);
		view.setViewName("file/saveFile");

		return view;
	}

	private void saveFileAllProc(MultipartHttpServletRequest request, PlatformData resData, VariableList resVarList) {
		try {
			String contextRealPath = multipartPath;
			Iterator<String> iterator = request.getFileNames();

			String path = request.getParameter("path");
			String chgname = request.getParameter("fileName");		// 옵션-물리적파일명 다르게 저장
			String overwrite = request.getParameter("overwrite");	// 옵션-덮어쓰기여부 (기본동작 덮어쓰기)
	        String finddirs = request.getParameter("finddir");       // 옵션-사번 dir 찾을 문자열 
	        
	        String[] finddir = null;
			if (finddirs != null && StringUtils.isNotBlank(finddirs)) {
				finddir = finddirs.split(";");	// start, end  구분 
			}
			
			String basefilePath = path.replace("/", File.separator).replace("\\", File.separator) + File.separator;
			basefilePath = contextRealPath + basefilePath.replace("\\\\", "\\").replace("//", "/");

			
			String[] listNames = null;
			if (chgname != null && StringUtils.isNotBlank(chgname)) {
				listNames = chgname.split("/");	  //멀티업로드시 구분을 위함
			}

			DataSet ds = new DataSet("ds_output");
			ds.addColumn(new ColumnHeader("fileid", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("fileimg", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("filename", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("orgname", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("filesize", DataTypes.INT));
			ds.addColumn(new ColumnHeader("filehash", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("filepath", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("spath", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("tranfilesize", DataTypes.INT));
			ds.addColumn(new ColumnHeader("prog", DataTypes.INT));

			while (iterator.hasNext()) {				
				String fileid = iterator.next();
				MultipartFile item = request.getFile(fileid);				
						
		        
				if (item.getName() != null) {
					String fileName = item.getOriginalFilename(); // getFileName(item);
					
					long fileSize = item.getSize();

					fileName = FilenameUtils.getName(fileName);
					
					int startDir = fileName.indexOf(finddir[0]);
					int endDir = fileName.indexOf(finddir[1] , startDir);		
					
					if (startDir == -1 || endDir == -1) {
						resVarList.add("ErrorCode", -1);
						resVarList.add("ErrorMsg", "파일명에서 사번을 찾을수 없습니다.");
						return;						
					}
					String spath = fileName.substring(startDir, endDir);
					String filePath = basefilePath + spath ;
					
					File file = new File(filePath);
					if (!file.exists()) {
						file.mkdirs();
					}		

					
					String orgName = fileName;
					// 물리적파일명을  다르게 저장할 경우 
					if (listNames != null) {
						for (String s : listNames){
							String[] cs = s.split(":"); // 오리지날파일명:물리적파일명
							if (cs[0].equals(fileName)) {
								fileName = cs[1];
							}
						}
					}
					
					String baseName = FilenameUtils.getBaseName(fileName);
					String fileExt = FilenameUtils.getExtension(fileName);
					
					file = new File(filePath + File.separator, fileName);
					
					if (overwrite != null && overwrite.equals("N")) {
						int f = 1;
						while(file.exists()) {
							fileName = baseName + "_" + (f++) + "." + fileExt;
							file = new File(filePath + File.separator, fileName);						
						}
					}

					item.transferTo(file);

					String fileHash = CENWebUtils.getFileHashSHA256(file.getPath());

					LOGGER.info(
							"saveAllFile name: " + fileName + ", size: " + Long.toString(fileSize) + ", hash:" + fileHash);

					int row = ds.newRow();
					ds.set(row, "fileid", fileid);
					ds.set(row, "filename", fileName);
					ds.set(row, "orgname", orgName);
					ds.set(row, "filesize", fileSize);
					ds.set(row, "filehash", fileHash);
					ds.set(row, "filepath", path + spath);
					ds.set(row, "spath", spath);
					ds.set(row, "prog", 0);

					// Thumbnail 생성		
					try {
						fileExt = fileExt.toLowerCase();
						if (Arrays.stream(filterImg).anyMatch(fileExt::equals)) {
							String thumbPath = filePath + File.separator + "thumb" + File.separator + fileName + ".jpg";
							if (fileExt.equals("gif")) {
								FileInputStream data = new FileInputStream(file);
								GifImage gif = GifDecoder.read(data);
								if (gif.getFrameCount() > 0) {
									Thumbnails.of(gif.getFrame(0)).size(300, 270).outputFormat("jpg").toFile(thumbPath);
								}
							} else {
								Thumbnails.of(file).size(300, 270).outputFormat("jpg").toFile(thumbPath);
							}
						}
					} catch (Exception et) {
						LOGGER.error(et.getMessage(), et.getCause());						
					}
				}
			}
					

			resData.addDataSet(ds);
			resVarList.add("ErrorCode", 0);
			resVarList.add("ErrorMsg", "SUCCESS");

		} 
		catch (MaxUploadSizeExceededException ex) {
			throw ex;
		}
		catch (Exception e) {
			// LOGGER.debug(e.getMessage(), e.getCause());
			resVarList.add("ErrorCode", -1);
			resVarList.add("ErrorMsg", e);
			LOGGER.info(e.getMessage(), e.getCause());
		}
	}

	@RequestMapping(value = "/file/deleteFile.do", method = RequestMethod.POST)
	public NexacroResult deleteFile(HttpServletRequest request, PlatformData platformData) throws Exception {
		NexacroResult result = new NexacroResult();

		String returnString = "";
		boolean succ = deleteFileProc(platformData, returnString);
		if (succ) {
			result.setErrorCode(0);
			result.setErrorMsg("SUCC");
		} else {
			result.setErrorCode(-1);
			result.setErrorMsg(returnString);
		}	

		return result;
	}

	private boolean deleteFileProc(PlatformData platformData, String rtnData) {

		String returnString = rtnData;
		DataSetList inDL = new DataSetList(); // input dataset list
		inDL = platformData.getDataSetList(); // dataset list

		DataSet inDS = inDL.get("input"); // Dataset

		String contextRealPath = multipartPath;
		boolean succ = true;

		for (int i = 0; i < inDS.getRowCount(); i++) {
			// String fileRealNm = in_ds.getString(i, "name");
			String fileRealNm = inDS.getString(i, "filename");
			String fileExt = FilenameUtils.getExtension(fileRealNm);
			String path = inDS.getString(i, "filepath").replace("\\", File.separator).replace("/", File.separator);
			String savePath = contextRealPath + path;

			if (!fileRealNm.equals("")) {
				if (returnString.length() > 0) {
					returnString += "\r\n";
				}

				try {
					File f = new File(savePath + File.separator, fileRealNm);
					if (f.exists()) {
						if (f.delete()) {
							LOGGER.info("deleteFile name: " + fileRealNm + ", path: " + savePath);
						} else {
							succ = false;
						}
					} else {
						// 파일이 없으면 성공으로 본다.
						succ = true;
					}
					
					// Thumbnail 삭제
					if (Arrays.stream(filterImg).anyMatch(fileExt::equals)) {
						String thumbPath = savePath + File.separator + "thumb" + File.separator + fileRealNm + ".jpg";
						File fileThumb = new File(thumbPath);
						if (fileThumb.exists()) {
							fileThumb.delete();
						}
					}
				} catch (Exception e) {
					succ = false;
					returnString += "'" + fileRealNm + "' " + e.getMessage();
					LOGGER.error(e.getMessage(), e.getCause());
				}
			}
		}
		return succ;
	}

	@RequestMapping(value = "/file/imageFile.do", method = RequestMethod.POST)
	public NexacroResult imageFile(HttpServletRequest request, PlatformData platformData) throws IOException {
		NexacroResult result = new NexacroResult();

		DataSetList in_dl = new DataSetList(); // input dataset list
		in_dl = platformData.getDataSetList(); // dataset list

		DataSet in_ds = in_dl.get("input"); // Dataset

		String contextRealPath = multipartPath;
		String returnString = "";
		boolean succ = true;

		for (int i = 0; i < in_ds.getRowCount(); i++) {
			// String fileRealNm = in_ds.getString(i, "name");
			String fileRealNm = in_ds.getString(i, "filename");
			String path = in_ds.getString(i, "filepath").replace("\\", File.separator).replace("/", File.separator);
			String savePath = contextRealPath + path;

			if (!fileRealNm.equals("")) {
				FileInputStream inputStream = null;
				ByteArrayOutputStream byteOutStream = null;
				try {
					File f = new File(savePath + File.separator, fileRealNm);
					if (f.exists()) {
						LOGGER.info("imageFile name: " + fileRealNm + ", path: " + savePath);
						
						inputStream = new FileInputStream(f);
						byteOutStream = new ByteArrayOutputStream();

						int len = 0;
						byte[] buf = new byte[1024];
						while ((len = inputStream.read(buf)) != -1) {
							byteOutStream.write(buf, 0, len);
						}

						byte[] fileArray = byteOutStream.toByteArray();

						inputStream.close();
						byteOutStream.close();

						Encoder encoder = Base64.getEncoder();
						String base64String = new String(encoder.encode(fileArray));

						String fileExt = FilenameUtils.getExtension(fileRealNm).toLowerCase();
						String type = "jpeg";
						if (fileExt.equals("png") || fileExt.equals("gif")) {
							type = fileExt;
						}
						String changeString = "data:image/" + type + ";base64," + base64String;

						in_ds.set(i, "filereturn", changeString);
						// returnString = changeString;
					}

				} catch (Exception e) {
					succ = false;
					returnString = "'" + fileRealNm + "' " + e;
				}
			}
		}

		if (succ) {
			// platformData.
			result.setErrorCode(0);
			result.addDataSet(in_ds);
			// result.addVariable("image", returnString);
			// result.setErrorMsg("SUCC");
		} else {
			result.setErrorCode(-1);
			result.setErrorMsg(returnString);
		}		

		return result;
	}

	/*
	 * 파일매니저 파일복사
	 */
	@RequestMapping(value = "/file/copyFile.do", method = RequestMethod.POST)
	public NexacroResult copyFile(HttpServletRequest request, PlatformData platformData) throws Exception {
		NexacroResult result = new NexacroResult();

		DataSetList inDL = new DataSetList(); // input dataset list
		inDL = platformData.getDataSetList(); // dataset list

		DataSet inDS = inDL.get("input"); // Dataset

		String contextRealPath = multipartPath;

		try {
			String infoSP = "DZUPR_FILEMANAGER_SELECT";
			String fileSP = "DZZPR_FILEMANAGER_SELECT";
			String copySP = "DZZPR_FILEMANAGER_COPY";

			for (int i = 0; i < inDS.getRowCount(); i++) {
				// String fileRealNm = in_ds.getString(i, "name");
				String strCdGUBUN = inDS.getString(i, "CD_GUBUN");
				String strCdREF1 = inDS.getString(i, "CD_REF1");
				String strCdREF2 = inDS.getString(i, "CD_REF2");
				String strCdREF3 = inDS.getString(i, "CD_REF3");
				String strCdREF4 = inDS.getString(i, "CD_REF4");
				String strCdREF5 = inDS.getString(i, "CD_REF5");
				String strNewCdGUBUN = inDS.getString(i, "NEW_CD_GUBUN");
				String strNewCdREF1 = inDS.getString(i, "NEW_CD_REF1");
				String strNewCdREF2 = inDS.getString(i, "NEW_CD_REF2");
				String strNewCdREF3 = inDS.getString(i, "NEW_CD_REF3");
				String strNewCdREF4 = inDS.getString(i, "NEW_CD_REF4");
				String strNewCdREF5 = inDS.getString(i, "NEW_CD_REF5");

				CENCallableMap paramMap2 = new CENCallableMap();
				paramMap2.put("CD_GUBUN", strNewCdGUBUN);

				CENCallableMap paramMap = new CENCallableMap();
				paramMap.put("CD_GUBUN", strCdGUBUN);
				paramMap.put("CD_REF1", strCdREF1);
				paramMap.put("CD_REF2", strCdREF2);
				paramMap.put("CD_REF3", strCdREF3);
				paramMap.put("CD_REF4", strCdREF4);
				paramMap.put("CD_REF5", strCdREF5);
				paramMap.put("YN_DESC", "");

				String newDsPath = "";

				List<List<Map<String, Object>>> resultList2 = (List<List<Map<String, Object>>>) cenCommonService
						.search(infoSP, paramMap2);

				if (resultList2.size() > 0) {
					List<Map<String, Object>> rds2 = resultList2.get(0);
					if (rds2.size() > 0) {
						newDsPath = rds2.get(0).get("DS_PATH").toString().replace("\\", File.separator).replace("/",
								File.separator);
					}
				}
				if (StringUtils.isBlank(newDsPath)) {
					throw new Exception("대상 파일관리 데이터가 없습니다.");
				}

				List<String> arrNewDsPATH = new ArrayList<String>();
				if (StringUtils.isNotBlank(strNewCdREF1)) {
					arrNewDsPATH.add(strNewCdREF1);
				}
				if (StringUtils.isNotBlank(strNewCdREF2)) {
					arrNewDsPATH.add(strNewCdREF2);
				}
				if (StringUtils.isNotBlank(strNewCdREF3)) {
					arrNewDsPATH.add(strNewCdREF3);
				}
				if (StringUtils.isNotBlank(strNewCdREF4)) {
					arrNewDsPATH.add(strNewCdREF4);
				}
				if (StringUtils.isNotBlank(strNewCdREF5)) {
					arrNewDsPATH.add(strNewCdREF5);
				}
				String strNewDsPATH = newDsPath + String.join(File.separator, arrNewDsPATH);

				CENCallableMap copyMap = new CENCallableMap();
				copyMap.put("CD_GUBUN", strCdGUBUN);
				copyMap.put("CD_REF1", strCdREF1);
				copyMap.put("CD_REF2", strCdREF2);
				copyMap.put("CD_REF3", strCdREF3);
				copyMap.put("CD_REF4", strCdREF4);
				copyMap.put("CD_REF5", strCdREF5);
				copyMap.put("NEW_CD_GUBUN", strNewCdGUBUN);
				copyMap.put("NEW_CD_REF1", strNewCdREF1);
				copyMap.put("NEW_CD_REF2", strNewCdREF2);
				copyMap.put("NEW_CD_REF3", strNewCdREF3);
				copyMap.put("NEW_CD_REF4", strNewCdREF4);
				copyMap.put("NEW_CD_REF5", strNewCdREF5);
				copyMap.put("NEW_DS_PATH", strNewDsPATH);

				List<List<Map<String, Object>>> resultList = (List<List<Map<String, Object>>>) cenCommonService
						.search(fileSP, paramMap);
				if (resultList.size() > 0) {
					List<Map<String, Object>> rds = resultList.get(0);
					for (int k = 0; k < rds.size(); k++) {
						String dsPath = rds.get(k).get("DS_PATH").toString().replace("\\", File.separator)
								.replace("/", File.separator);
						String nmFile = rds.get(k).get("NM_FILE").toString();
						String orgPath = contextRealPath + dsPath;
						String copyPath = contextRealPath + strNewDsPATH;
						File f = new File(orgPath + File.separator, nmFile);
						File f2 = new File(copyPath + File.separator, nmFile);
						if (f.exists()) {
							FileUtils.copyFile(f, f2);
							LOGGER.info("copyFile name: " + nmFile + ", origin: " + orgPath + ", dest: " + copyPath);
						}
					}

					cenCommonService.save(copySP, copyMap);
				} else {
					throw new Exception("복사할 파일 목록이 없습니다.");
				}
			}

			result.setErrorCode(0);
			result.setErrorMsg("SUCC");

		} catch (Exception exc) {
			result.setErrorCode(-9000);
			result.setErrorMsg(exc.getMessage());
		}
		
		return result;
	}

	/*
	 * 물리적 파일 복제
	 */
	@RequestMapping(value = "/file/cloneFile.do", method = RequestMethod.POST)
	public NexacroResult cloneFile(HttpServletRequest request, PlatformData platformData) throws Exception {
		NexacroResult result = new NexacroResult();

		DataSetList inDL = new DataSetList(); // input dataset list
		inDL = platformData.getDataSetList(); // dataset list

		DataSet inDS = inDL.get("input"); // Dataset

		String contextRealPath = multipartPath;
		String returnString = "";
		boolean succ = true;

		for (int i = 0; i < inDS.getRowCount(); i++) {
			// String fileRealNm = inDS.getString(i, "name");
			String fileRealNm = inDS.getString(i, "filename");
			String path = inDS.getString(i, "filepath").replace("\\", File.separator).replace("/", File.separator);
			String copyPath = inDS.getString(i, "copypath").replace("\\", File.separator).replace("/",
					File.separator);
			String fileNewNm = inDS.getString(i, "copyname");
			if (StringUtils.isBlank(fileNewNm)) {
				fileNewNm = fileRealNm;
			}

			String savePath = contextRealPath + path;
			String targetPath = contextRealPath + copyPath;
			// System.out.println("filedelete==>" + fileRealNm);

			if (!fileRealNm.equals("")) {
				if (returnString.length() > 0) {
					returnString += "\r\n";
				}

				try {
					File f = new File(savePath + File.separator, fileRealNm);
					File f2 = new File(targetPath + File.separator, fileNewNm);
					if (f.exists()) {
						FileUtils.copyFile(f, f2);
						LOGGER.info("cloneFile name: " + fileRealNm + ", origin: " + savePath + ", dest: " + targetPath);
					} else {
						// System.out.println("File not available Or
						// Deleted");
						// 파일이 없으면 성공으로 본다.
						succ = true;
					}
				} catch (Exception e) {
					succ = false;
					returnString += "'" + fileRealNm + "' " + e.getMessage();
				}
			}
		}

		if (succ) {
			result.setErrorCode(0);
			result.setErrorMsg("SUCC");
		} else {
			result.setErrorCode(-1);
			result.setErrorMsg(returnString);
		}

		return result;
	}

	/**
	 * 계약서 송부시 Hash값 업데이트 - 파일업로드시 Hash값이 안들어가는 경우가 있기 때문에 송부 시점에 호출해서 업데이트 한다.
	 * 
	 * @param request
	 * @param platformData
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/file/hashFile.do", method = RequestMethod.POST)
	public NexacroResult hashFile(HttpServletRequest request, PlatformData platformData) throws Exception {
		NexacroResult result = new NexacroResult();

		DataSetList in_dl = new DataSetList(); // input dataset list
		in_dl = platformData.getDataSetList(); // dataset list

		DataSet in_ds = in_dl.get("input"); // Dataset

		String contextRealPath = multipartPath;

		if (in_ds.getRowCount() > 0) {
			for (int i = 0; i < in_ds.getRowCount(); i++) {
				int addFileNo = in_ds.getInt(i, "ADDFILE_NO");

				CENCallableMap paramMap = new CENCallableMap();
				paramMap.put("ADDFILE_NO", addFileNo);

				List<List<Map<String, Object>>> resultList = (List<List<Map<String, Object>>>) cenCommonService
						.search("DZZPR_ADDFILE_SELECT", paramMap);

				if (resultList.size() > 0) {

					List<CENProcData> listProcData = new ArrayList<CENProcData>();
					CENProcData procData = new CENProcData();
					procData.SP = "DZZPR_ADDFILE_HASH";
					procData.TARGET = "save";					
					listProcData.add(procData);					

					Map<String, List<CENCallableMap>> targetMaps = new HashMap<String, List<CENCallableMap>>();
					List<CENCallableMap> listParamMap = new ArrayList<CENCallableMap>();
					
					List<Map<String, Object>> rds = resultList.get(0);
					for (int k = 0; k < rds.size(); k++) {
						int seqNo = (int) rds.get(k).get("SEQNO");
						String fileRealNm = (String) rds.get(k).get("FILE_NM");
						String path = rds.get(k).get("PATH_NM").toString().replace("\\", File.separator)
								.replace("/", File.separator);
						String savePath = contextRealPath + path;
						String fileHashOld = (String) rds.get(k).get("FILE_HASH");

						if (!fileRealNm.equals("")) {
								File f = new File(savePath + File.separator, fileRealNm);
								if (f.exists()) {
									String fileHash = CENWebUtils.getFileHashSHA256(f.getPath());
									
									if (StringUtils.isNotBlank(fileHash) && !fileHash.equals(fileHashOld)) {
										CENCallableMap paramMap2 = new CENCallableMap();
										paramMap2.put("ADDFILE_NO", addFileNo);
										paramMap2.put("SEQNO", seqNo);
										paramMap2.put("FILE_HASH", fileHash);
										listParamMap.add(paramMap2);
										
										LOGGER.info("hashFile name: " + fileRealNm + ", path: " + savePath);
									}									
								}

						}
					}
					
					targetMaps.put(procData.TARGET, listParamMap);
					
					cenCommonService.save(listProcData, targetMaps);
				}
			}
			
			result.setErrorCode(0);
		}

		return result;
	}

	@RequestMapping(value = "/file/downloadTxtFile.do", method = RequestMethod.POST)
	public void downloadContents(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(name = "filename", required = true) String filename,
			@RequestParam(name = "content", required = true) String content) throws IOException {

		response.setHeader("Content-Disposition",
				"attachment; filename=" + java.net.URLEncoder.encode(filename, "EUC-KR"));
		response.setContentType("text/plain;charset=EUC-KR");
		response.setCharacterEncoding("EUC-KR");
		response.getOutputStream().write(content.getBytes("EUC-KR"));
	}

	@RequestMapping(value = "/file/downloadText.do", method = RequestMethod.POST)
	public ResponseEntity<InputStreamResource> downloadText(HttpServletRequest request, HttpServletResponse response)
			throws IOException {

		String encoding = request.getParameter("fileEncoding") == null ? "EUC-KR"
				: request.getParameter("fileEncoding");
		String name = request.getParameter("fileName"); // tomcat8.0 보안정책으로 인해 화면에서 encoding해서 넘겨진값
		String filename = java.net.URLDecoder.decode(name, encoding); // file search를 위해 다시 decoding
		String filecont = request.getParameter("fileCont");

		byte contByte[] = filecont.getBytes(encoding);
		long contSize = contByte.length;
		InputStream is = new ByteArrayInputStream(contByte);

		String userAgent = request.getHeader("User-Agent");
		String isRuntime = "N";

		if (userAgent.indexOf("nexacro") > -1) {
			// nexacrobrowser여부
			isRuntime = "Y";
		}

		ResponseEntity<InputStreamResource> entity = null;
		HttpHeaders headers = new HttpHeaders();

		response.setContentType("application/octet-stream;charset=" + encoding);

		if (isRuntime != null && isRuntime.equals("N")) {
			// IE일경우
			if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
				String convName = java.net.URLEncoder.encode(filename, encoding).replaceAll("\\+", "%20");
				response.setHeader("Content-Disposition", "attachment;filename =\"" + convName + "\";");
			} else {
				// 그외의 경우
				response.setHeader("Content-Disposition",
						"attachment; filename = \"" + new String(name.getBytes(encoding), "ISO8859_1") + "\"");
			}
			response.setHeader("Content-Transfer-Encoding", "binary");
			response.setHeader("Content-Length", "" + String.valueOf(contSize));
			response.setHeader("Pargma", "no-cache");
			response.setHeader("Expires", "-1");

		} else {
			response.setHeader("Content-Disposition",
					"attachment; filename = \"" + new String(name.getBytes(encoding), "ISO8859_1") + "\"");
			response.setHeader("Content-Transfer-Encoding", "binary");
			response.setHeader("Content-Length", "" + String.valueOf(contSize));
			// response.setHeader("Content-Disposition", "attachment; filename = \"" +
			// filename + "\"");
		}

		try {
			InputStreamResource resource = new InputStreamResource(is);
			entity = new ResponseEntity<InputStreamResource>(resource, headers, HttpStatus.OK);
		} catch (Exception e) {
			entity = new ResponseEntity<InputStreamResource>(HttpStatus.BAD_REQUEST);
		} finally {
			is.close();
		}

		return entity;
	}

	/**
	 * 파일저장 - 인사정보 사원이미지 파일명 변경 저장
	 * 
	 * @param
	 * @return
	 * @throws ServletException
	 * @throws IOException
	 */
	@RequestMapping(value = "/file/saveEmpImg.do", method = RequestMethod.POST)
	public ModelAndView saveEmpImg(MultipartHttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {

		ModelAndView view = new ModelAndView();

		PlatformData resData = new PlatformData();
		VariableList resVarList = resData.getVariableList();

		String contextRealPath = multipartPath;
		Iterator<String> iterator = request.getFileNames();

		String[] path = request.getParameter("path").split("\\|");// path 와 id_person
		String filePath = contextRealPath + path[0].replace("\\", File.separator) + File.separator;
		filePath = filePath.replace("\\\\", "\\").replace("//", "/");
		;

		File file = new File(filePath);
		if (file.exists() == false) {
			file.mkdirs();
		}

		DataSet ds = new DataSet("ds_output");
		ds.addColumn(new ColumnHeader("fileid", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("fileimg", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("filename", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("filesize", DataTypes.INT));
		ds.addColumn(new ColumnHeader("filehash", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("tranfilesize", DataTypes.INT));
		ds.addColumn(new ColumnHeader("prog", DataTypes.INT));

		try {
			while (iterator.hasNext()) {
				String fileid = iterator.next();
				MultipartFile item = request.getFile(fileid);

				if (item.getName() != null) {
					String fileName = item.getOriginalFilename();
					long fileSize = item.getSize();

					// 이름변경
					String fileExt = (fileName.substring(fileName.lastIndexOf(".") + 1)).toLowerCase();
					String fileReName = path[1] + "." + fileExt;
					File fileIdPerson = new File(filePath + File.separator, fileReName);

					item.transferTo(fileIdPerson);

					String fileHash = CENWebUtils.getFileHashSHA256(fileIdPerson.getPath());

					int row = ds.newRow();
					ds.set(row, "fileid", fileid);
					ds.set(row, "filename", fileReName);
					ds.set(row, "filesize", fileSize);
					ds.set(row, "filehash", fileHash);
					ds.set(row, "prog", 0);
				}
			}

			resData.addDataSet(ds);
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

	@RequestMapping(value = "/file/fileApproved.do", method = RequestMethod.POST)
	public NexacroResult fileApproved(HttpServletRequest request, PlatformData platformData) throws IOException {
		NexacroResult result = new NexacroResult();

		DataSetList in_dl = new DataSetList(); // input dataset list
		in_dl = platformData.getDataSetList(); // dataset list

		DataSet in_ds = in_dl.get("input"); // Dataset

		String contextRealPath = multipartPath;
		String returnString = "";
		boolean succ = true;

		for (int i = 0; i < in_ds.getRowCount(); i++) {
			String reqFileRealNm = in_ds.getString(i, "TEMP_PIC");
			String baseFileRealNm = in_ds.getString(i, "BASE_PIC");

			String pathReq = in_ds.getString(i, "DS_FILE_PATH").replace("\\", File.separator).replace("/",
					File.separator); // 신청한 파일
			String pathBaseInfo = in_ds.getString(i, "DS_FILE_PATH_BASEINFO").replace("\\", File.separator)
					.replace("/", File.separator); // 인사정보 사진 경로

			String reqPath = contextRealPath + pathReq;
			String basePath = contextRealPath + pathBaseInfo;

			if (!reqFileRealNm.equals("")) {
				FileInputStream inputStream = null;
				FileOutputStream outStream = null;
				try {
					File reqFile = new File(reqPath + File.separator, reqFileRealNm);
					File baseToFile = new File(basePath + File.separator, reqFileRealNm);

					if (reqFile.exists()) {
						// 기존 인사 사진은 삭제
						if (baseFileRealNm != null) {
							File baseFile = new File(basePath + File.separator, baseFileRealNm);

							if (baseFile.exists()) {
								baseFile.delete();
							}
						}

						inputStream = new FileInputStream(reqFile);
						outStream = new FileOutputStream(baseToFile);

						int availableLen = inputStream.available();
						byte[] buf = new byte[availableLen];
						inputStream.read(buf);
						outStream.write(buf);

						inputStream.close();
						outStream.close();

					}

				} catch (Exception e) {
					succ = false;
					returnString = "'" + reqFileRealNm + "' " + e;
				}
			}
		}

		if (succ) {
			result.setErrorCode(0);
			result.addDataSet(in_ds);
		} else {
			result.setErrorCode(-1);
			result.setErrorMsg(returnString);
		}

		return result;
	}

	@RequestMapping(value = "/file/previewFile.do", method = RequestMethod.POST)
	public ModelAndView previewFile(HttpServletRequest request, HttpServletResponse response) {

		ModelAndView view = new ModelAndView();

		String contextRealPath = multipartPath;
		FileInputStream inputStream = null;
		ByteArrayOutputStream byteOutStream = null;
		try {
			String filePath = contextRealPath + request.getParameter("filePath")
					+ File.separator +  request.getParameter("fileName");
			File f = new File(filePath);
			if (f.exists()) {
				LOGGER.info("previewFile: " + filePath);
				inputStream = new FileInputStream(f);
				byteOutStream = new ByteArrayOutputStream();

				int len = 0;
				byte[] buf = new byte[1024];
				while ((len = inputStream.read(buf)) != -1) {
					byteOutStream.write(buf, 0, len);
				}

				byte[] fileArray = byteOutStream.toByteArray();

				inputStream.close();
				byteOutStream.close();

				Encoder encoder = Base64.getEncoder();
				String base64String = new String(encoder.encode(fileArray));

				view.addObject("filedata", base64String);
			}

		} catch (Exception e) {
		}		
		
		view.setViewName("file/previewFile");

		return view;
	}
	@RequestMapping(value = "/file/viewImage.do", method = RequestMethod.POST)
	public ModelAndView viewImage(HttpServletRequest request, HttpServletResponse response) {

		ModelAndView view = new ModelAndView();

		String contextRealPath = multipartPath;
		FileInputStream inputStream = null;
		ByteArrayOutputStream byteOutStream = null;
		try {
			String path = request.getParameter("filePath"); 
			String fileName = request.getParameter("fileName");
			String filePath = contextRealPath + path + File.separator +  fileName;
			File f = new File(filePath);
			if (f.exists()) {
				LOGGER.info("viewImage: " + filePath);
				inputStream = new FileInputStream(f);
				byteOutStream = new ByteArrayOutputStream();

				int len = 0;
				byte[] buf = new byte[1024];
				while ((len = inputStream.read(buf)) != -1) {
					byteOutStream.write(buf, 0, len);
				}

				byte[] fileArray = byteOutStream.toByteArray();

				inputStream.close();
				byteOutStream.close();

				Encoder encoder = Base64.getEncoder();
				String base64String = new String(encoder.encode(fileArray));
				String fileExt = FilenameUtils.getExtension(fileName).toLowerCase();
				String type = "jpeg";
				if (fileExt.equals("png") || fileExt.equals("gif")) {
					type = fileExt;
				}
				String changeString = "data:image/" + type + ";base64," + base64String;

				view.addObject("imgdata", changeString);
			}

		} catch (Exception e) {
		}		
		
		view.setViewName("file/viewImage");

		return view;
	}
}
