package com.goodcen.cenerp.security.handler;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.util.StringUtils;

import com.goodcen.cenerp.model.CENDeptVO;
import com.goodcen.common.security.user.CENUserDetails;
import com.nexacro.uiadapter17.spring.core.data.convert.ConvertDefinition;
import com.nexacro.uiadapter17.spring.core.data.convert.NexacroConvertException;
import com.nexacro.uiadapter17.spring.core.data.support.ListToDataSetConverter;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;

/**
 * 
 * 
 * 
 * @filename CENLoginSuccessHandler.java
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
public class CENLoginSuccessHandler implements AuthenticationSuccessHandler, InitializingBean{
	
	private static final Logger LOGGER = LoggerFactory.getLogger(CENLoginSuccessHandler.class);

	private boolean redirect;
    private String defaultSuccessUrl;

    public boolean isRedirect() {
		return redirect;
	}
	public void setRedirect(boolean redirect) {
		this.redirect = redirect;
	}
	public String getDefaultSuccessUrl() {
		return defaultSuccessUrl;
	}
	public void setDefaultSuccessUrl(String defaultSuccessUrl) {
		this.defaultSuccessUrl = defaultSuccessUrl;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication auth)
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		LOGGER.debug("########################### CENLoginSuccessHandler.onAuthenticationSuccess ###########################");
		
		if (!StringUtils.isEmpty(defaultSuccessUrl)) {
			if (redirect) {
				response.sendRedirect(defaultSuccessUrl);
			} else {
				request.getRequestDispatcher(defaultSuccessUrl).forward(request, response);
			}
		} else {
			HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
			PlatformData data = new PlatformData();
			DataSet ds = new DataSet("output0");
			CENUserDetails userDetails = (CENUserDetails) auth.getPrincipal();
			List<CENDeptVO> list = (List<CENDeptVO>) userDetails.getCENUserVO();
			ListToDataSetConverter converter = new ListToDataSetConverter();
			ConvertDefinition definition = new ConvertDefinition(ds.getName());
			definition.setGenericType(Map.class);
			
			try {
				data.addDataSet(converter.convert(list, definition));
				platformResponse.setContentType(PlatformType.CONTENT_TYPE_SSV);				
				platformResponse.setData(data);
				platformResponse.sendData();
			} catch (PlatformException | NexacroConvertException e) {
				// TODO Auto-generated catch block
				LOGGER.error(e.getMessage(), e.getCause());
			}
		}
	}
	
	@Override
	public void afterPropertiesSet() throws Exception {
		// TODO Auto-generated method stub
//		if (StringUtils.isEmpty(getDefaultSuccessUrl())){
			//throw new IllegalArgumentException(" Property 'defaultSuccessUrl' is required");
//		}
	}
}
