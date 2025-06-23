package com.goodcen.cenerp.web;

import java.io.IOException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Base64.Encoder;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.goodcen.cenerp.model.CENDeptVO;
import com.goodcen.cenerp.security.jwt.CENJwtTokenProvider;
import com.goodcen.common.model.CENCallableMap;
import com.goodcen.common.security.user.CENUserDetails;
import com.goodcen.common.security.user.CENUserDetailsService;
import com.goodcen.common.service.CENCommonService;
import com.goodcen.common.util.CENStringUtils;
import com.goodcen.common.util.CENWebUtils;

@Controller("cenSSOController")
public class CENSSOController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(CENSSOController.class);

	@Value("${web.root:/}")
	private String webRoot;
	
	@Autowired
	private CENJwtTokenProvider cenJwtTokenProvider;

	@Resource
    private CENUserDetailsService userDetailsService;

	@Resource(name = "cenCommonService")
	private CENCommonService cenCommonService;
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/link.do", method = RequestMethod.GET)
	public void getLinkSSO(HttpServletRequest request, HttpServletResponse response, HttpSession session, @RequestParam(value="key") String key) throws IOException {
		try {
			String password = "\r\n" + "#$SSO_LoGiN$#" + "\r\n";
			CENUserDetails userDetails = userDetailsService.loadUserByUsername(key + "=" + password);
			
			List<CENDeptVO> list = (List<CENDeptVO>) userDetails.getCENUserVO();
			if (list.size() > 0) {
				CENCallableMap pmap = new CENCallableMap();
				pmap.put("ID_USER", key);
				List<List<Map<String, Object>>> listForm = (List<List<Map<String, Object>>>) cenCommonService.search("DZZPR_USERID_SSO_FORM", pmap);
				
				CENDeptVO user = list.get(0);
				String token = cenJwtTokenProvider.createToken(user.getID_USER() + "=" + user.getCD_CORP() + "=" + user.getCD_DEPT(), new ArrayList<String>());
//				String encId = new String(Base64.getEncoder().encode(CENWebUtils.Encrypt(user.getID_USER()).getBytes()));
				
//				String ckName = "tk-" + encId;
//				Cookie ck = new Cookie(ckName, CENWebUtils.Encrypt(token));
//				ck.setPath("/");
//				ck.setMaxAge(120);
//				response.addCookie(ck);
				
				session.setAttribute("tk", CENWebUtils.Encrypt(token));
				session.setMaxInactiveInterval(60);
				
				String urlParam = "";
				ArrayList<String> arrParam = new ArrayList<String>();
				Map<String, String[]> paramMaps = request.getParameterMap();
				for (String mapKey:paramMaps.keySet()) {
					if (mapKey.equals("key")) continue;
					
					if (mapKey.equals("formname")) {
						urlParam += "&" + mapKey + "=" + paramMaps.get(mapKey)[0]; 
					} else {
						arrParam.add(mapKey + "=" + paramMaps.get(mapKey)[0]);
					}
				}
				
				if (listForm != null && listForm.size() > 0) {
					List<Map<String, Object>> forms = listForm.get(0);
					if (forms.size() > 0) {
						Map<String, Object> formMap = forms.get(0);
						String cd_module = CENStringUtils.valueOf(formMap.get("CD_MODULE")).toUpperCase();
						String id_form = CENStringUtils.valueOf(formMap.get("ID_FORM")).toUpperCase();
						
						if (StringUtils.isNotBlank(cd_module) && StringUtils.isNotBlank(id_form)) {
							String cd_system = id_form.substring(0, 2).toLowerCase();
							String frm_module = id_form.substring(0, 3).toLowerCase();
							urlParam += "&formname=" + cd_system + "::" + frm_module + "/" + id_form + ".xfdl";
							urlParam += "&CD_MODULE=" + cd_module;
						}
					}
				}
				
				if (arrParam.size() > 0) {
					String sParam = String.join("&", arrParam);
					Encoder encoder = Base64.getEncoder();
					String base64String = new String(encoder.encode(sParam.getBytes("UTF-8")));
					urlParam += "&param=" + URLEncoder.encode(base64String, "UTF-8");
				}
				
				response.sendRedirect(webRoot + "quickview.html?tk=" + urlParam);
				return;
			}
		} catch (Exception exc) {
			LOGGER.error(key + ":" + exc.getMessage());
		}
		
		response.sendRedirect(webRoot);		
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/auth/loginSSO.do", method = RequestMethod.POST)
	public void getLoginSSO(HttpServletRequest request, HttpServletResponse response, HttpSession session, @RequestParam(value="key")String key) throws IOException {
		try {
			String password = "\r\n" + "#$SSO_LoGiN$#" + "\r\n";
			CENUserDetails userDetails = userDetailsService.loadUserByUsername(key + "=" + password);
			
			List<CENDeptVO> list = (List<CENDeptVO>) userDetails.getCENUserVO();
			if (list.size() > 0) {
				CENDeptVO user = list.get(0);
				String token = cenJwtTokenProvider.createToken(user.getID_USER() + "=" + user.getCD_CORP() + "=" + user.getCD_DEPT(), new ArrayList<String>());
//				String encId = new String(Base64.getEncoder().encode(CENWebUtils.Encrypt(username).getBytes()));
				
//				String ckName = "tk-" + encId;
//				Cookie ck = new Cookie(ckName, CENWebUtils.Encrypt(token));
//				ck.setPath("/");
//				ck.setMaxAge(120);
//				response.addCookie(ck);
				
				session.setAttribute("tk", CENWebUtils.Encrypt(token));
				session.setMaxInactiveInterval(60);
				
				String urlParam = "";
				ArrayList<String> arrParam = new ArrayList<String>();
				Map<String, String[]> paramMaps = request.getParameterMap();
				Boolean isLink = false;
				for (String mapKey:paramMaps.keySet()) {
					if (mapKey.equals("userid")) continue;
					if (mapKey.equals("formname") || mapKey.equals("CD_MODULE")) {
						urlParam += "&" + mapKey + "=" + paramMaps.get(mapKey)[0]; 
						isLink = true;
					} else {
						arrParam.add(mapKey + "=" + paramMaps.get(mapKey)[0]);
					}
				}
				
				if (isLink) {
					if (arrParam.size() > 0) {
						String sParam = String.join("&", arrParam);
						Encoder encoder = Base64.getEncoder();
						String base64String = new String(encoder.encode(sParam.getBytes("UTF-8")));
						urlParam += "&param=" + URLEncoder.encode(base64String, "UTF-8");
					}
				
					response.sendRedirect(webRoot + "quickview.html?tk=" + urlParam);
				} else {
					response.sendRedirect(webRoot + "?tk=");
				}

				return;
			}
		} catch (Exception exc) {
			LOGGER.error(key + ":" + exc.getMessage());
		}
		
		response.sendRedirect(webRoot);		
	}

}
