package com.goodcen.cenerp.deploy;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.goodcen.common.model.CENCallableMap;
import com.goodcen.common.service.CENCommonService;
import com.goodcen.common.util.CENWebUtils;

@RestController("gcDeployB2BController")
public class CENDeployB2BController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CENDeployB2BController.class);

	@Autowired
	private Environment env;
	
	@Resource(name="cenCommonService")
	private CENCommonService cenCommonService;
	
	@PostMapping(value="/deploy_b2b/log.do", consumes="application/x-www-form-urlencoded")
	public Object deployLog(HttpServletRequest request, HttpServletResponse response, @RequestParam("auth") String auth, @RequestParam("filename") String filename) throws Exception {
		try {
			if (env.getProperty("com.goodcen.deploy.log.enabled", Boolean.class)) {
				String ip = CENWebUtils.getIp(request);
				
		        CENCallableMap map = new CENCallableMap();
				map.put("ID_USER", CENWebUtils.Decrypt(auth, "_goodcen_"));
				map.put("DS_FILE", filename);
				map.put("DS_IP", ip);
				
				cenCommonService.save("DXXPR_DEPLOY_LOG_INSERT", map);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			LOGGER.error(e.getMessage(), e.getCause());
		}
		
		return null;
	}
	
	/**
	 * 파일다운로드
	 * @param file
	 * @return
	 * @throws IOException
	 */
	@PostMapping(value="/deploy_b2b/download.do", consumes="application/x-www-form-urlencoded")
	public ResponseEntity<InputStreamResource> deployDownload(HttpServletResponse response, @RequestParam("file") String file) throws IOException {
		String contextRealPath = env.getProperty("com.goodcen.path.deploy.b2b");
		File fileDownload = new File(contextRealPath + file.replace("\\", File.separator));
		
		ResponseEntity<InputStreamResource> entity = null;
		HttpHeaders headers = new HttpHeaders();
		if(fileDownload.isFile()){
			headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
			headers.setContentDispositionFormData("attachment", fileDownload.getName());
			headers.setContentLength(fileDownload.length());
			headers.setPragma("no-cache");
			headers.setExpires(-1);
			headers.add("Content-Transfer-Encoding", "binary");		
			response.setContentType(MediaType.APPLICATION_OCTET_STREAM_VALUE);
		    try {
		    	FileSystemResource fsresource = new FileSystemResource(fileDownload);
		    	InputStreamResource resource = new InputStreamResource(fsresource.getInputStream());
		    	
		    	entity = new ResponseEntity<InputStreamResource>(resource, headers, HttpStatus.OK);
		    } catch (Exception e) {
		        //LOGGER.debug(e.getMessage(), e.getCause());
		    	entity = new ResponseEntity<InputStreamResource>(HttpStatus.BAD_REQUEST);
		    } finally {
			}
		    
		}
		return entity;
	}
	
	/**
	 * 파일저장
	 * @param
	 * @return
	 */
	@PostMapping(value="/deploy_b2b/upload.do")
	public ResponseEntity<String> deployUpload(HttpServletRequest request, @RequestParam("path") String path, @RequestParam("id") String id) {
		String contextRealPath = env.getProperty("com.goodcen.path.deploy.b2b");
		MultipartHttpServletRequest multipartHttpServletRequest = (MultipartHttpServletRequest)request;
	    Iterator<String> iterator = multipartHttpServletRequest.getFileNames();
	    MultipartFile multipartFile = null;
	    String originalFileName = null;
        String storedFileName = null;
        path = path.replace("\\", File.separator) + File.separator;
        String filePath = contextRealPath + path;
        File file = new File(filePath);
        if(file.exists() == false){
        	file.mkdirs();
        }
        
	    while(iterator.hasNext()){
	        multipartFile = multipartHttpServletRequest.getFile(iterator.next());
	        if(multipartFile.isEmpty() == false){
	        	try {
		            originalFileName = multipartFile.getOriginalFilename();
	                storedFileName = originalFileName;//CommonUtils.getRandomString() + originalFileExtension;
		            		
	                file = new File(filePath + storedFileName);
	                try (InputStream is = multipartFile.getInputStream()) {
	                	FileUtils.copyInputStreamToFile(is, file);
	                	file.setReadable(true, false);
	                	file.setWritable(true, false);
	                	file.setExecutable(true, false);
	                }
	                //multipartFile.transferTo(file);
	                
	                String ip = CENWebUtils.getIp(request);
	                LOGGER.info(path + originalFileName + " (" + id + ":" + ip + ")");
	                
		            return ResponseEntity.ok(storedFileName);
	        	} catch (Exception e) {
	                //LOGGER.debug(e.getMessage(), e.getCause());
	                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage()); 
	            }	        	
	        }	    	
	    }

	    return null;
	}

}
