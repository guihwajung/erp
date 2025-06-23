package com.goodcen.cenerp.interceptor;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.goodcen.cenerp.model.CENUserB2BVO;
import com.goodcen.cenerp.model.CENUserVO;
import com.goodcen.cenerp.service.CENLogService;
import com.goodcen.common.security.user.CENUserDetails;
import com.goodcen.common.util.CENWebUtils;

public class CENLoginHandlerInterceptor extends HandlerInterceptorAdapter {

	private static final Logger LOGGER = LoggerFactory.getLogger(CENLoginHandlerInterceptor.class);

	@Autowired
	private CENLogService cenLogService;

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			@Nullable ModelAndView modelAndView) throws Exception {
		try {
			Authentication auth = SecurityContextHolder.getContext().getAuthentication();
			CENUserDetails userDetails = (CENUserDetails) auth.getPrincipal();
			String ip_user = CENWebUtils.getIp(request);
			
			HashMap<String, String> map = new HashMap<String, String>(); 
			if (userDetails.getCENUserVO() instanceof CENUserB2BVO) {
				CENUserB2BVO user = (CENUserB2BVO)userDetails.getCENUserVO();
				map.put("TY_SYSTEM", "B2B");
				map.put("ID_USER", user.getCD_VENDOR());
				map.put("CD_CORP", user.getCD_CORP());
			} else {
				CENUserVO user = (CENUserVO)userDetails.getCENUserVO();
				map.put("TY_SYSTEM", "ERP");
				map.put("ID_USER", user.getID_USER());
				map.put("CD_DEPT", user.getCD_DEPT());
				map.put("CD_CORP", user.getCD_CORP());
			}
			map.put("DS_SERVICE", "login");
			map.put("IP_USER", ip_user);
			cenLogService.insert(map);
		} catch (Exception ex) {
			LOGGER.error(ex.getMessage());
		}
	}
}
