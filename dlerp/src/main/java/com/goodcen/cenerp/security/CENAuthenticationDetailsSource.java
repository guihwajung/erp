package com.goodcen.cenerp.security;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationDetailsSource;

import com.goodcen.common.security.user.CENUserDetails;
import com.goodcen.common.util.CENWebUtils;
import com.nexacro.uiadapter17.spring.core.util.CharsetUtil;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.PlatformType;

/**
 * 
 * 
 * 
 * @filename CENAuthenticationDetailsSource.java
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
public class CENAuthenticationDetailsSource implements AuthenticationDetailsSource<HttpServletRequest, CENUserDetails> {

	private static final Logger LOGGER = LoggerFactory.getLogger(CENAuthenticationDetailsSource.class);

	@Override
	public CENUserDetails buildDetails(HttpServletRequest request) {
		// TODO Auto-generated method stub
		LOGGER.debug(
				"########################### CENAuthenticationDetailsSource.buildDetails ###########################");

		try {

			HttpPlatformRequest platformRequest = new HttpPlatformRequest(request);
			platformRequest.setCharset(CharsetUtil.getCharsetOfRequest(request, "UTF-8"));
			platformRequest.setContentType(PlatformType.CONTENT_TYPE_SSV);
			platformRequest.receiveData();
			PlatformData platformData = platformRequest.getData();

//			if (platformData != null) {
//				LOGGER.debug(platformData.saveXml());
//			}

			if (platformData != null && platformData.getDataSetCount() > 0) {
				DataSet dataSet = platformData.getDataSet(0);
				
				String username = CENWebUtils.Decrypt(dataSet.getString(0, "ID_USER"));
				String password = CENWebUtils.Decrypt(dataSet.getString(0, "ID_PASSWORD"));
				
				return new CENUserDetails(username, password, false, null);
			} else {
				LOGGER.debug("login data is null.");	
			}
		} catch (Exception e) {
			LOGGER.error(e.getMessage(), e.getCause());
		}

		return null;
	}
}
