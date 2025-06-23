package com.goodcen.framework.nexacro.exception;

import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileUploadBase.SizeLimitExceededException;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.servlet.ModelAndView;

@ControllerAdvice
public class CENNexacroFileExceptionAdvice {
	
	@ExceptionHandler(MaxUploadSizeExceededException.class)
	public ModelAndView handleFileSizeException(MaxUploadSizeExceededException e, HttpServletRequest request,
			HttpServletResponse response) {
		
		long maxSize = e.getMaxUploadSize();
		if (e.getCause() != null) {
			Throwable parentEx = e.getCause();
			if (parentEx != null && parentEx instanceof SizeLimitExceededException) {
				maxSize = ((SizeLimitExceededException) parentEx).getPermittedSize();
			}
		}

		ModelAndView view = new ModelAndView();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("ErrorCode", -7000);
		map.put("ErrorMsg", "maxsize:" + maxSize);

		view.addObject("error", map);
		view.setViewName("error/error_nx");

		return view;
	}
	

	@ExceptionHandler(FileNotFoundException.class)
	public ModelAndView handleFileNotFoundException(FileNotFoundException e, HttpServletRequest request, HttpServletResponse response) {

		ModelAndView view = new ModelAndView();
		
		String msg = e.getMessage();
		if(StringUtils.isBlank(msg)) msg = "존재하지 않는 파일입니다.";
		view.addObject("msg", msg);
		view.setViewName("error/alert");

		//response.setStatus(HttpServletResponse.SC_NOT_FOUND);		
		return view;
		
	}
}
