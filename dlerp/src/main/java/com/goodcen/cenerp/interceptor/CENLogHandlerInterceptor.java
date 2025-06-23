package com.goodcen.cenerp.interceptor;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.goodcen.cenerp.service.CENLogService;
import com.goodcen.common.util.CENWebUtils;

public class CENLogHandlerInterceptor extends HandlerInterceptorAdapter {

	private static final Logger LOGGER = LoggerFactory.getLogger(CENLogHandlerInterceptor.class);

	@Autowired
	private CENLogService cenLogService;

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			@Nullable ModelAndView modelAndView) throws Exception {
		if (request.getHeader("GC_LOG_INFO") != null) {
			try {
				String log = request.getHeader("GC_LOG_INFO");
				String ip_user = CENWebUtils.getIp(request);
				String[] spl_log = log.split(";");

				HashMap<String, String> map = new HashMap<String, String>();
				for (String v : spl_log) {
					String[] spl_v = v.split("=");
					String name = spl_v[0];
					String val = "";
					if (spl_v.length > 1) {
						val = spl_v[1];
					}
					map.put(name, val);
				}
				map.put("IP_USER", ip_user);

				cenLogService.insert(map);
			} catch (Exception ex) {
				LOGGER.error(ex.getMessage());
			}
		}
	}
}
