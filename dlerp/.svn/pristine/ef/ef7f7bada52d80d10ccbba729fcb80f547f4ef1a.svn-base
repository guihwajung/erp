package com.goodcen.cenerp.web;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.time.DateFormatUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.carbonco.security.accesslog.AccessLog;
import com.carbonco.security.accesslog.PrivacyLogSinker;
import com.goodcen.cenerp.config.SystemEnvironmentVariables;
import com.goodcen.cenerp.model.CENDeptVO;
import com.goodcen.cenerp.model.CENUserVO;
import com.goodcen.cenerp.security.jwt.CENJwtTokenProvider;
import com.goodcen.cenerp.util.CENUtils;
import com.goodcen.cenerp.web.password.ResetUserPassword;
import com.goodcen.cenerp.web.password.ResetUserPasswordAuthContainer;
import com.goodcen.common.model.CENCallableMap;
import com.goodcen.common.nexacro.model.CENNexacroMap;
import com.goodcen.common.nexacro.service.CENNexacroService;
import com.goodcen.common.security.user.CENUserDetails;
import com.goodcen.common.security.user.CENUserDetailsService;
import com.goodcen.common.security.util.CENAuthenticationHelper;
import com.goodcen.common.service.CENCommonService;
import com.goodcen.common.util.CENWebUtils;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro.uiadapter17.spring.core.data.convert.ConvertDefinition;
import com.nexacro.uiadapter17.spring.core.data.support.ListToDataSetConverter;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.PlatformData;
import org.jasypt.encryption.StringEncryptor;
@Controller("cenCommonController")
public class CENCommonController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CENCommonController.class);

	@Autowired
	private CENJwtTokenProvider cenJwtTokenProvider;

	@Resource
	private CENUserDetailsService userDetailsService;

	@Resource(name = "cenCommonService")
	private CENCommonService cenCommonService;

	@Resource(name = "cenNexacroService")
	private CENNexacroService cenNexacroService;

	@Value("${logout.redirect}")
	private String logoutRedirect;
	
	@Autowired
	private ResetUserPasswordAuthContainer authContainer;
	
	@Autowired
	private PrivacyLogSinker privacyLogSinker;
	
	/**
	 * 로그인 (token 생성)
	 * 
	 * @param request
	 * @param platformData
	 * @return
	 */
	@RequestMapping(value = "/auth/login.do", method = RequestMethod.POST)
	public NexacroResult getLogin(HttpServletRequest request, PlatformData platformData) {
		NexacroResult result = new NexacroResult();
		result.setErrorCode(-1000);
		// GetEncryptInfo();
		try {
			if (platformData != null && platformData.getDataSetCount() > 0) {
				DataSet dataSet = platformData.getDataSet(0);

				String username = CENWebUtils.Decrypt(dataSet.getString(0, "ID_USER"));
				String password = CENWebUtils.Decrypt(dataSet.getString(0, "ID_PASSWORD"));

				CENUserDetails userDetails = userDetailsService.loadUserByUsername(username + "=" + password);

				if (userDetails != null) {
					DataSet ds = new DataSet("output0");
					List<CENDeptVO> list = (List<CENDeptVO>) userDetails.getCENUserVO();
					ListToDataSetConverter converter = new ListToDataSetConverter();
					ConvertDefinition definition = new ConvertDefinition(ds.getName());
					definition.setGenericType(Map.class);

					result.addDataSet(converter.convert(list, definition));

					if (list.size() > 0) {
						CENDeptVO user = list.get(0);
						String token = cenJwtTokenProvider.createToken(
								user.getID_USER() + "=" + user.getCD_CORP() + "=" + user.getCD_DEPT(),
								new ArrayList<String>());
						result.addVariable("gcToken", token);
					}

					result.setErrorCode(0);
					return result;
				}
			}
		} catch (Exception e) {
			String errMsg = e.getMessage();
			LOGGER.error(errMsg, e.getCause());

			if (errMsg.startsWith("E:")) {
				errMsg = errMsg.substring(2);
				result.setErrorCode(-8000);
			}
			result.setErrorMsg(errMsg);
		}

		return result;
	} 
	
	@Resource(name="jasyptStringEncryptor")
	private StringEncryptor stringEncryptor;
	
	public void GetEncryptInfo() {
		// jwt.key
		String key_enc = stringEncryptor.encrypt("#WFM@GoodcenERP@#");
		System.out.println("key = ENC(" + key_enc + ")");
		 
		// id
		String id_enc = stringEncryptor.encrypt("dlcbcerp_dev");
		System.out.println("id = ENC(" + id_enc + ")");
		 
		// pw
		String pw_enc = stringEncryptor.encrypt("ERPdev1234#$");
		System.out.println("pw = ENC(" + pw_enc + ")");
		 
		// 테스트용 복호화
		String id_des = stringEncryptor.decrypt(id_enc);
		String pw_des = stringEncryptor.decrypt(pw_enc);
		System.out.println("id = " + id_des + ", pw = " + pw_des);
	}

	/**
	 * 사용자 휴대폰번호 로딩
	 * 
	 * @param request
	 * @param platformData
	 * @return
	 */
	@RequestMapping(value = "/auth/user.do", method = RequestMethod.POST)
	public NexacroResult getUser(HttpServletRequest request, PlatformData platformData) {
		NexacroResult result = new NexacroResult();
		result.setErrorCode(-1000);

		try {
			if (platformData != null && platformData.getDataSetCount() > 0) {
				DataSet dataSet = platformData.getDataSet(0);

				String username = CENWebUtils.Decrypt(dataSet.getString(0, "ID_SABUN"));
				String mobile = CENWebUtils.Decrypt(dataSet.getString(0, "MOBILE"));
				
				CENCallableMap paramMap = new CENCallableMap();
				paramMap.put("ID_SABUN", username);
				paramMap.put("MOBILE", mobile);
				
				List<List<Map<String, Object>>> list = (List<List<Map<String, Object>>>) cenCommonService.search("DZZPR_USER_MOBILE_SELECT", paramMap);
				if (list != null && list.size() > 0) {
					result.addDataSet("output0", list.get(0));
				}
				
				result.setErrorCode(0);

				return result;
			}
		} catch (Exception e) {
			String errMsg = e.getMessage();
			LOGGER.error(errMsg, e.getCause());

			if (errMsg.startsWith("E:")) {
				errMsg = errMsg.substring(2);
				result.setErrorCode(-10000);
			}
			result.setErrorMsg(errMsg);
		}

		return result;
	}
	
	/**
	 * 사용자 패스워드 인증번호 발송
	 * 
	 * @param request
	 * @param platformData
	 * @return
	 */
	@RequestMapping(value = "/auth/authenticate.do", method = RequestMethod.POST)
	public NexacroResult getAuthenticate(HttpServletRequest request, PlatformData platformData) {
		NexacroResult result = new NexacroResult();
		result.setErrorCode(-1000);

		try {
			if (platformData != null && platformData.getDataSetCount() > 0) {
				DataSet dataSet = platformData.getDataSet(0);

				String id = CENWebUtils.Decrypt(dataSet.getString(0, "ID_SABUN"));
				String name = CENWebUtils.Decrypt(dataSet.getString(0, "DS_HNAME"));
				String mobile = CENWebUtils.Decrypt(dataSet.getString(0, "MOBILE"));
				
				ResetUserPassword userPassword = new ResetUserPassword(id, name, mobile);
				authContainer.put(userPassword);

				CENCallableMap paramMap = new CENCallableMap();
				paramMap.put("MOBILE", mobile);
				paramMap.put("AUTH", userPassword.getAuthNumber());
				paramMap.put("USER", id);
				
				cenCommonService.save("DZZPR_USER_PASSWORD_AUTH_SMS_SEND", paramMap);

				result.setErrorCode(0);

				return result;
			}
		} catch (Exception e) {
			String errMsg = e.getMessage();
			LOGGER.error(errMsg, e.getCause());

			if (errMsg.startsWith("E:")) {
				errMsg = errMsg.substring(2);
				result.setErrorCode(-10010);
			}
			result.setErrorMsg(errMsg);
		}

		return result;
	}

	/**
	 * 사용자 패스워드 변경
	 * 
	 * @param request
	 * @param platformData
	 * @return
	 */
	@RequestMapping(value = "/auth/password.do", method = RequestMethod.POST)
	public NexacroResult getPassword(HttpServletRequest request, PlatformData platformData) {
		NexacroResult result = new NexacroResult();
		result.setErrorCode(-1000);

		try {
			if (platformData != null && platformData.getDataSetCount() > 0) {
				DataSet dataSet = platformData.getDataSet(0);

				String id = CENWebUtils.Decrypt(dataSet.getString(0, "ID_SABUN"));
				String name = CENWebUtils.Decrypt(dataSet.getString(0, "DS_HNAME"));
				String mobile = CENWebUtils.Decrypt(dataSet.getString(0, "MOBILE"));
				String auth = CENWebUtils.Decrypt(dataSet.getString(0, "AUTH"));
				
				ResetUserPassword userPassword = authContainer.get(auth);
				if (userPassword != null) {
					if (!userPassword.getId().equals(id) ||
						!userPassword.getName().equals(name) ||
						!userPassword.getMobile().equals(mobile)) {
						result.setErrorCode(-10010);
						return result;
					}
					
					String newPassword = userPassword.newRandomPassword();

					CENCallableMap paramMap = new CENCallableMap();
					paramMap.put("ID_USER", userPassword.getId());
					paramMap.put("CD_CORP", "");
					paramMap.put("ID_PASSWORD", newPassword);
					paramMap.put("NO_CURRNETPWD", "");
					cenCommonService.save("DZZPR_USERREGISTRATION_UPDATEPWDCHG", paramMap);
					
					paramMap = new CENCallableMap();
					paramMap.put("ID_SABUN", userPassword.getId());
					paramMap.put("DS_HNAME", userPassword.getName());
					paramMap.put("MOBILE", userPassword.getMobile());
					paramMap.put("PASSWORD", newPassword);
					cenCommonService.save("DZZPR_USER_NEW_PASSWORD_SMS_SEND", paramMap);

					result.setErrorCode(0);
				} else {
					result.setErrorCode(-10010);
				}

				return result;
			}
		} catch (Exception e) {
			String errMsg = e.getMessage();
			LOGGER.error(errMsg, e.getCause());

			if (errMsg.startsWith("E:")) {
				errMsg = errMsg.substring(2);
				result.setErrorCode(-10020);
			}
			result.setErrorMsg(errMsg);
		}

		return result;
	}

	/**
	 * 유저정보 조회
	 * 
	 * @param platformData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/auth/loginInfo.do", method = RequestMethod.POST)
	public NexacroResult getLoginInfo(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			PlatformData platformData, Authentication auth) throws Exception {
		NexacroResult result = new NexacroResult();

		if (!CENAuthenticationHelper.isAuthenticated(request) && session.getAttribute("tk") != null) {
			try {
				String token = CENWebUtils.Decrypt(session.getAttribute("tk").toString());
				if (token != null && cenJwtTokenProvider.validateToken(token)) {
					// 토큰이 유효하면 토큰으로부터 유저 정보를 받아옴
					auth = cenJwtTokenProvider.getAuthentication(token);
					// SecurityContext 에 Authentication 객체를 저장
					SecurityContextHolder.getContext().setAuthentication(auth);
					session.removeAttribute("tk");
				}
			} catch (Exception exc) {
			}
		}

		if (CENAuthenticationHelper.isAuthenticated(request)) {
//			if (platformData.getDataSetCount() != 1 || platformData.getDataSet(0).getRowCount() != 1) {
//				throw new Exception("no service");
//			}

			CENUserDetails details = (CENUserDetails) auth.getPrincipal();

			DataSetList dsList = platformData.getDataSetList();

			String selectSP = "DZZPR_USERID_LOGIN_NEW";
			CENCallableMap paramMap = new CENNexacroMap();

			Boolean bList = false;
			if (dsList != null && dsList.size() > 0) {
				DataSet ds = dsList.get(0);
				if (ds.getRowCount() > 0) {
					ds.set(0, "ID_USER", CENWebUtils.Decrypt(ds.getString(0, "ID_USER")));
					ds.set(0, "CD_CORP", CENWebUtils.Decrypt(ds.getString(0, "CD_CORP")));
					ds.set(0, "CD_DEPT", CENWebUtils.Decrypt(ds.getString(0, "CD_DEPT")));
					paramMap = new CENNexacroMap(ds, 0);
					if (!paramMap.containsKey("IP_USER")) {
						paramMap.put("IP_USER", CENWebUtils.getIp(request));
					}
					bList = true;
				}
			}

			if (bList == false && details.getCENUserVO() instanceof CENUserVO) {
				CENUserVO user = (CENUserVO) details.getCENUserVO();
				paramMap.clear();
				paramMap.put("ID_USER", user.getID_USER());
				paramMap.put("CD_DEPT", user.getCD_DEPT());
				paramMap.put("CD_CORP", user.getCD_CORP());
				paramMap.put("IP_USER", CENWebUtils.getIp(request));
				bList = true;
			}

			if (bList == true) {
				List<List<Map<String, Object>>> list = (List<List<Map<String, Object>>>) cenCommonService
						.search(selectSP, paramMap);
				if (list != null && list.size() > 0) {
					result.addDataSet("output0", list.get(0));

					if (list.size() > 1) {
						result.addDataSet("output1", list.get(1));
					}
				}
			}

			Map<String, Object> maps = result.getDataSets();

			if (maps != null && maps.containsKey("output0")) {

				List<Map<String, Object>> outlist = (List<Map<String, Object>>) maps.get("output0");

				if (outlist != null && outlist.size() > 0) {
					Map<String, Object> map = outlist.get(0);
					map.put("NO_IP", CENWebUtils.getIp(request));

					CENUserVO user = new CENUserVO();
					user.setID_USER(String.valueOf(map.get("ID_USER")));
					user.setCD_CORP(String.valueOf(map.get("CD_CORP")));
					user.setCD_DEPT(String.valueOf(map.get("CD_DEPT")));
					details.setCENUserVO(user);

					String token = cenJwtTokenProvider.createToken(
							user.getID_USER() + "=" + user.getCD_CORP() + "=" + user.getCD_DEPT(),
							new ArrayList<String>());
					result.addVariable("gcToken", token);
					// session.setAttribute("token", token);
				}
			}

		} else {
//			result.setErrorCode(-9999);
//			result.setErrorMsg("Please use after login.");
		}

		return result;
	}

	/**
	 * 로그아웃 (token 쿠키 삭제 처리)
	 * 
	 * @param request
	 * @param response
	 * @param paramId
	 * @throws IOException
	 */
	@RequestMapping(value = "/auth/logout.do", method = RequestMethod.GET)
	public void getLogout(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		CENCookieUtils.deleteCookie(request, response, "tk-" + paramId);
//		String referer = request.getHeader("referer");
//		if (referer.contains("/erp/")) {
//			response.sendRedirect("/erp/");
//		} else if (referer.contains("/b2b/")) {
//			response.sendRedirect("/b2b/");
//		} else if (referer.contains("/buyer/")) {
//			response.sendRedirect("/buyer/");
//		} else {
//			response.sendRedirect("/");
//		}

		response.sendRedirect(logoutRedirect);
	}

	/**
	 * 조회
	 * 
	 * @param platformData
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/service/select.do", method = RequestMethod.POST)
	public NexacroResult getSelect(HttpServletRequest request, PlatformData platformData, Authentication auth)
			throws Exception {
		NexacroResult result = new NexacroResult();

		Boolean isIdentity = CENUtils.checkIdentity(request, platformData, auth);

		if (isIdentity) {
			Map<String, String> userMap = CENUtils.getUserMap(auth);

			// AUTH_CD_CORP, AUTH_CD_DETP, AUTH_ID_USER, AUTH_CD_VENDOR 세션정보로 처리
//			CENUtils.withDataUseAuth(platformData, userMap);
			cenNexacroService.setAuthUser(platformData, userMap);
			result = cenNexacroService.searchNexa(platformData);
			
			privacyLogSinker.saveLog(request.getHeader("Gc_log_info"), platformData, result, getIp(request));
			
//			FormInfo formInfo = FormInfo.parse(platformData);
//			if (formInfo != null) {
//				Parser spInfo = Parser.parse(platformData, result);
//				System.out.println();
//			}
//			
//			System.out.println();
			
//			for (int i = 0; i < platformData.getVariableList().valueList().size(); i++) {
//				StringBuffer sb = new StringBuffer();
//				
//				// 조회방법
//				String method = platformData.getDataSetList()
//				
//				// 조회조건
//
//				// 조회결과
//				if (id != null && !id.equals("") && name != null && !name.equals("")) {
//					for (int j = 0; j < result.getPlatformData().getDataSetList().size(); j++) {
//						DataSet dataSet = result.getPlatformData().getDataSetList().get(j);
//						
//						System.out.println();
//					}
//				}
//				
//				System.out.println();
//			}

			// token 연장
			if (platformData.getVariable("refresh") != null) {
				String token = "";
				if (String.valueOf(userMap.get("ID_USER")).startsWith("B2B")) {
					token = cenJwtTokenProvider.createToken(String.valueOf(userMap.get("ID_USER")) + "="
							+ String.valueOf(userMap.get("CD_VENDOR")) + "=" + String.valueOf(userMap.get("CD_CORP"))
							+ "=" + String.valueOf(userMap.get("CD_DEPT")), new ArrayList<String>());
				} else {
					token = cenJwtTokenProvider.createToken(String.valueOf(userMap.get("ID_USER")) + "="
							+ String.valueOf(userMap.get("CD_CORP")) + "=" + String.valueOf(userMap.get("CD_DEPT")),
							new ArrayList<String>(), true);
				}
				result.addVariable("rfToken", token);
			}
		} else {
			result.setErrorCode(-9999);
			result.setErrorMsg("Please use after login.");
		}

		return result;
	}
	
//	void saveLog(String header, PlatformData platformData, NexacroResult result)  {
//		// DZ::LOG_ENABLE != Y
//		if (!systemEnvironmentVariables.isEnable() || header == null) {
//			return;
//		}
//		
//		AccessLog log = new AccessLog(header);
//		
//		// DZ::LOG_TYPE
//		if (!systemEnvironmentVariables.getTypes().contains(log.getService())) {
//			return;
//		}
//
//		// DZ::LOG_EXCLUDE_SC_XXXX
//		if (systemEnvironmentVariables.getExcludeScreens().contains(log.getForm())) {
//			return;
//		}
//		
//		int countOfDataSet = platformData.getDataSetCount();
//		DataSet dsProc = null;
//		List<DataSet> list = new ArrayList<>();
//		for (int i = 0; i < countOfDataSet; i++) {
//			DataSet ds = platformData.getDataSet(i);
//			if (ds.getName().equals("dsProc")) {
//				dsProc = ds;
//			} else {
//				list.add(ds);
//			}
//		}
//		
//		Map<String, String> mapOfResultCount= new HashMap<>();
//		if (!log.getService().equals("save")) {
//			for (int i = 0; i < result.getPlatformData().getDataSetCount(); i++) {
//				DataSet ds = result.getPlatformData().getDataSet(i);
//				mapOfResultCount.put(ds.getName().substring(0, ds.getName().length() - 1), ds.getRowCount() + "");
//			}
//		}
//		
//		List<String> countOfResult = new ArrayList<>();
//		List<String> spList = new ArrayList<>();
//		for (DataSet ds : list) {
//			String spName = getSpName(dsProc, ds.getName());
//			// DZ::LOG_EXCLUDE_SP_XXXX
//			if (systemEnvironmentVariables.getExcludeSpNames().contains(spName)) {
//				continue;
//			}
//			
//			countOfResult.add(mapOfResultCount.get(ds.getName()));
//			List<String> params = new ArrayList<>();
//			for (int i = 0; i < ds.getColumnCount(); i++) {
//				String param = "@" + ds.getColumn(i).getName() + "='" + ds.getString(0, ds.getColumn(i).getName()) + "'";
//				params.add(param);
//			}
//
//			spList.add(String.format("EXEC %s %s; ", spName, String.join(", ", params)));
//		}
//		
//		try {
//			CENCallableMap paramMap = new CENCallableMap();
//			paramMap.put("ID_FORM", log.getForm());
//			paramMap.put("ID_USER", log.getUser());
//			paramMap.put("CD_DEPT", log.getDept());
//			paramMap.put("CD_MODULE", log.getModule());
//			paramMap.put("TY_WORK", log.getService());
//			paramMap.put("CT_WORK", !log.getService().equals("save") ? String.join(",", countOfResult) : "");
//			paramMap.put("DS_WORK", String.join("", spList));
//			
//			cenCommonService.save("DZZPR_TRAN_LOG_INSERT", paramMap);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
	
//	private String getSpName(DataSet ds, String alias) {
//		for (int i = 0; i < ds.getRowCount(); i++) {
//			if (ds.getString(i, 0).equals(alias)) {
//				return ds.getString(i, 1);
//			}
//		}
//		
//		return "";
//	}
	
	/**
	 * 저장
	 * 
	 * @param platformData
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/service/save.do", method = RequestMethod.POST)
	public NexacroResult getSave(HttpServletRequest request, PlatformData platformData, Authentication auth)
			throws Exception {
		NexacroResult result = new NexacroResult();

		Boolean isIdentity = CENUtils.checkIdentity(request, platformData, auth);
		if (isIdentity) {
			Map<String, String> userMap = CENUtils.getUserMap(auth);

			// AUTH_CD_CORP, AUTH_CD_DETP, AUTH_ID_USER, AUTH_CD_VENDOR 세션정보로 처리
//			CENUtils.withDataUseAuth(platformData, userMap);
			cenNexacroService.setAuthUser(platformData, userMap);
			result = cenNexacroService.saveNexa(platformData);
			
			privacyLogSinker.saveLog(request.getHeader("Gc_log_info"), platformData, result, getIp(request));
		} else {
			result.setErrorCode(-9999);
			result.setErrorMsg("Please use after login.");
		}

		return result;
	}

	/**
	 * 조회 in 저장
	 * 
	 * @param request
	 * @param platformData
	 * @param auth
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/service/savesel.do", method = RequestMethod.POST)
	public NexacroResult getSaveSelect(HttpServletRequest request, PlatformData platformData, Authentication auth)
			throws Exception {
		NexacroResult result = new NexacroResult();

		Boolean isIdentity = CENUtils.checkIdentity(request, platformData, auth);

		if (isIdentity) {
			Map<String, String> userMap = CENUtils.getUserMap(auth);

			// AUTH_CD_CORP, AUTH_CD_DETP, AUTH_ID_USER, AUTH_CD_VENDOR 세션정보로 처리
//			CENUtils.withDataUseAuth(platformData, userMap);
			cenNexacroService.setAuthUser(platformData, userMap);
			result = cenNexacroService.saveselNexa(platformData);
			
			privacyLogSinker.saveLog(request.getHeader("Gc_log_info"), platformData, result, getIp(request));
		} else {
			result.setErrorCode(-9999);
			result.setErrorMsg("Please use after login.");
		}

		return result;
	}

	/**
	 * 조회 (권한없이)
	 * 
	 * @param platformData
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/auth/select.do", method = RequestMethod.POST)
	public NexacroResult getAuthSelect(HttpServletRequest request, PlatformData platformData) throws Exception {
		NexacroResult result = cenNexacroService.searchNexa(platformData);
		return result;
	}

	/**
	 * 저장 (권한없이)
	 * 
	 * @param platformData
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/auth/save.do", method = RequestMethod.POST)
	public NexacroResult getAuthSave(HttpServletRequest request, PlatformData platformData) throws Exception {
		NexacroResult result = cenNexacroService.saveNexa(platformData);
		return result;
	}

	/**
	 * 조회 in 저장 (권한없이)
	 * 
	 * @param request
	 * @param platformData
	 * @param auth
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/auth/savesel.do", method = RequestMethod.POST)
	public NexacroResult getAuthSaveSelect(HttpServletRequest request, PlatformData platformData) throws Exception {
		NexacroResult result = cenNexacroService.saveselNexa(platformData);
		return result;
	}

	/**
	 * 서버시간 조회
	 * 
	 * @param platformData
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/auth/getServerTime.do")
	public NexacroResult getServerTime() throws Exception {
		NexacroResult result = new NexacroResult();
		result.addVariable("serverTime", DateFormatUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss"));
		return result;
	}

	/**
	 * 서버IP 조회
	 * 
	 * @return
	 */
	@RequestMapping(value = "/auth/getServerIP.do")
	public NexacroResult getServerIP() {
		NexacroResult result = new NexacroResult();

		String ip = null;
		try {
			ip = InetAddress.getLocalHost().getHostAddress();
		} catch (UnknownHostException e) {
			ip = "";
		}
		result.addVariable("serverIP", ip);

		return result;
	}

	/**
	 * DZZPR_EXECUTE_COMMAND 대체 서비스
	 * 
	 * @param platformData
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/service/combo.do", method = RequestMethod.POST)
	public NexacroResult getCombo(HttpServletRequest request, PlatformData platformData, Authentication auth)
			throws Exception {
		NexacroResult result = new NexacroResult();

		Boolean isIdentity = CENUtils.checkIdentity(request, platformData, auth);

		
		if (isIdentity) {

			if (platformData.getDataSet("dsProc") != null) {
				DataSet dsProc = platformData.getDataSet("dsProc");
				if (dsProc.getRowCount() > 0) {
					String target = dsProc.getString(0, "TARGET");
					String sp = dsProc.getString(0, "SP");

					if (sp.startsWith("DZZPR_EXECUTE_COMMAND")) {
						DataSetList newList = new DataSetList();
						DataSetList list = platformData.getDataSetList();
						if (list != null && list.size() > 0) {

							dsProc.clearData();
							for (int i = 0; i < list.size(); i++) {
								DataSet ds = list.get(i);

								if (target.equals(ds.getName())) {
									for (int j = 0; j < ds.getRowCount(); j++) {
										String ds_command = ds.getString(j, "DS_COMMAND");
										ds_command = ds_command.replaceFirst(" ", "|");
										ds_command = ds_command.replaceFirst(" ", "|");
										String[] spl_cmd = ds_command.split("\\|");
										String cmd_sp = "";
										if (spl_cmd.length > 1) {
											cmd_sp = spl_cmd[1].replace("[", "").replace("]", "").trim();
										}
										if (spl_cmd.length > 2) {
											String[] spl_param = spl_cmd[2].split("\\,");
											DataSet dsParam = new DataSet();
											dsParam.setName("select" + j);
											for (int c = 0; c < spl_param.length; c++) {
												dsParam.addColumn("COL" + String.valueOf(c), DataTypes.STRING);
											}
											int nrow = dsParam.newRow();
											for (int c = 0; c < spl_param.length; c++) {
												String param = spl_param[c].trim();
												dsParam.set(nrow, "COL" + String.valueOf(c), param.replaceAll("'", ""));
											}
											newList.add(dsParam);
										}

										int nrow = dsProc.newRow();
										dsProc.set(nrow, "TARGET", "select" + j);
										dsProc.set(nrow, "SP", cmd_sp);
									}
								}
							}
							newList.add(dsProc);
						}

						platformData.setDataSetList(newList);
					}

				}

				result = cenNexacroService.searchNexa(platformData, true);
			}

		} else {
			result.setErrorCode(-9999);
			result.setErrorMsg("Please use after login.");
		}

		return result;
	}
	
	private String getIp(HttpServletRequest request) {
		String ip = request.getHeader("X-Real-IP");
		if (ip == null) {
			ip = request.getRemoteAddr();
		}

		return ip;
	}
	
}
