package com.goodcen.cenerp.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller("cenErrorController")
public class CENErrorController {

//	private static final Logger LOGGER = LoggerFactory.getLogger(CENErrorController.class);

//	@Autowired
//	private MessageSource messageSource;
	
	/**
	 * 에러처리
	 * @param
	 * @return
	 */
	@RequestMapping(value="/error/error.do")
	public ModelAndView getError(HttpServletRequest request, HttpServletResponse response) {
		
		ModelAndView view = new ModelAndView();
		String msg = "error"; // messageSource.getMessage("errors.http.error", null, Locale.getDefault());

		if (request.getHeader("Nexacro") != null){
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("ErrorCode", -1);
			map.put("ErrorMsg", msg);
			view.addObject("error", map);			
			view.setViewName("error/error_nx");
			
		} else {
			view.addObject("msg", msg);
			view.setViewName("error/error");
			
		}
		return view;
	}
	
	@RequestMapping(value="/error/error2.do")
	public ModelAndView getError2(HttpServletRequest request, HttpServletResponse response) {
		
		ModelAndView view = new ModelAndView();
		String msg = "error"; // messageSource.getMessage("errors.http.error", null, Locale.getDefault());

		if (request.getHeader("Nexacro") != null){
			Map<String, Object> map = new HashMap<String, Object>();
			
			map.put("ErrorCode", -9999);
			map.put("ErrorMsg", msg);
			
			view.addObject("error", map);			
			view.setViewName("error/error_nx");
		} else {
			view.addObject("msg", msg);
			view.setViewName("error/error");
			
		}
		return view;
	}	

	@RequestMapping(value="/error/errorx.do", method = RequestMethod.GET)
	public ModelAndView getExpire(HttpServletRequest request, HttpServletResponse response) throws IOException {

		ModelAndView view = new ModelAndView();
		if (request.getHeader("Nexacro") != null){
			Map<String, Object> map = new HashMap<String, Object>();
			
			map.put("ErrorCode", -9999);
			map.put("ErrorMsg", "error");
			
			view.addObject("error", map);			
			view.setViewName("error/error_nx");

		} else {
			view.setViewName("error/redirect");
		}
		
		return view;
	}
	
}
