package com.goodcen.cenerp.security.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.util.StringUtils;

import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.Variable;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;

/**
 * 
 * 
 * 
 * @filename CENLoginFailureHandler.java
 * @author   kim
 * @since    2018. 10. 19.
 * @version  1.0
 * @see 
 *
 * <pre>
 *  == 개정이력(Modification Information) ==
 *   
 *   수정일      수정자           수정내용
 *  -------    --------    ---------------------------
 *   2018. 10. 19.  kim          최초 생성
 * 
 * </pre>
 */
public class CENLoginFailureHandler implements AuthenticationFailureHandler, InitializingBean{
	
	private static final Logger LOGGER = LoggerFactory.getLogger(CENLoginFailureHandler.class);
	
	private boolean redirect;
    private String failureUrl;

    public boolean isRedirect() {
		return redirect;
	}
	public void setRedirect(boolean redirect) {
		this.redirect = redirect;
	}
	public String getFailureUrl() {
		return failureUrl;
	}
	public void setFailureUrl(String failureUrl) {
		this.failureUrl = failureUrl;
	}
	
	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException ex)
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		LOGGER.debug("########################### CENLoginFailureHandler.onAuthenticationFailure ###########################");
	
		if (!StringUtils.isEmpty(getFailureUrl())){
			if (redirect) {
	            response.sendRedirect(failureUrl);
	        } else {
	            request.getRequestDispatcher(failureUrl).forward(request, response);
	        }
		} else {
			response.setStatus(HttpStatus.OK.value());
			
			try {
				HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
				PlatformData data = new PlatformData();
				data.addVariable(new Variable("ErrorCode", 3, -1000));
				data.addVariable(new Variable("ErrorMsg", 2, ex.getMessage()));
				platformResponse.setData(data);
				platformResponse.sendData();
			} catch (PlatformException e) {
				// TODO Auto-generated catch block
				LOGGER.error(e.getMessage(), e.getCause());
			}
		}
	}
	
	@Override
	public void afterPropertiesSet() throws Exception {
		// TODO Auto-generated method stub
		if (StringUtils.isEmpty(getFailureUrl())){
			//throw new IllegalArgumentException(" Property 'failureUrl' is required");
		}
	}

}
