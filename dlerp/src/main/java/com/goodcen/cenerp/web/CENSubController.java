package com.goodcen.cenerp.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.goodcen.cenerp.service.CENSubService;
import com.goodcen.cenerp.util.CENUtils;
import com.goodcen.framework.config.DatabaseSubConfiguration;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;

@Controller("cenMsgController")
@ConditionalOnBean({DatabaseSubConfiguration.class})
public class CENSubController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CENSubController.class);

	@Resource
	private CENSubService cenSubService;

	@RequestMapping(value = "/service/selectKakao.do", method = RequestMethod.POST)
	public NexacroResult getSelectKakao(HttpServletRequest request, PlatformData platformData, Authentication auth)
			throws Exception {
		NexacroResult result = new NexacroResult();

		Boolean isIdentity = CENUtils.checkIdentity(request, platformData, auth);

		if (isIdentity) {
			List<?> list = cenSubService.KakaoMsgSelect();
			result.addDataSet("message", list);
		} else {
			result.setErrorCode(-9999);
			result.setErrorMsg("Please use after login.");
		}

		return result;
	}

	@RequestMapping(value = "/service/sendKakao.do", method = RequestMethod.POST)
	public NexacroResult getSendKakao(HttpServletRequest request, PlatformData platformData, Authentication auth)
			throws Exception {
		NexacroResult result = new NexacroResult();

		Boolean isIdentity = CENUtils.checkIdentity(request, platformData, auth);

		if (isIdentity) {
			if (platformData.getDataSetCount() > 0 || platformData.getDataSet(0).getRowCount() == 0) {
				DataSet dsMsg = platformData.getDataSet(0);

				List<Map> listMap = new ArrayList<Map>();
				for (int i = 0; i < dsMsg.getRowCount(); i++) {
					HashMap<String, String> map = new HashMap<String, String>();
					map.put("CALL_FROM", dsMsg.getString(i, "CALL_FROM")); 			// 회신번호
					map.put("RECIPIEN_TO", dsMsg.getString(i, "RECIPIEN_TO")); 		// 수신자번호
					map.put("KAKAO_BODY", dsMsg.getString(i, "KAKAO_BODY")); 		// 메시지
					map.put("MSG_TYPE", dsMsg.getString(i, "MSG_TYPE")); 			// 1-알림톡, 2-친구톡
					map.put("SENDER_KEY", dsMsg.getString(i, "SENDER_KEY")); 		// 1-한진중공업, 3-한진중공업건설, 4-한진중공업조선, 5-해모로
					map.put("TEMPLATE_CODE", dsMsg.getString(i, "TEMPLATE_CODE")); 	// 알림톡 템플릿(사전 등록 필요, 미등록 알림톡)
					map.put("CREATE_ID", auth.getName()); 							// CREATE_ID
					map.put("ETC1", dsMsg.getString(i, "ETC1")); 					// 프로그램 ID
					map.put("ETC2", dsMsg.getString(i, "ETC2")); 					// 프로젝트코드
					map.put("ETC3", dsMsg.getString(i, "ETC3")); 					// 계약번호
					listMap.add(map);
				}
				cenSubService.KakaoMsgInsert(listMap);
				
			} else {
				result.setErrorCode(-9000);
				result.setErrorMsg("전송할 메세지 내역이 없습니다.");				
			}
		} else {
			result.setErrorCode(-9999);
			result.setErrorMsg("Please use after login.");
		}

		return result;
	}
	

	@RequestMapping(value = "/service/selectSMS.do", method = RequestMethod.POST)
	public NexacroResult getSelectSMS(HttpServletRequest request, PlatformData platformData, Authentication auth)
			throws Exception {
		NexacroResult result = new NexacroResult();

		Boolean isIdentity = CENUtils.checkIdentity(request, platformData, auth);

		if (isIdentity) {
			List<?> list = cenSubService.SmsMsgSelect();
			result.addDataSet("message", list);
		} else {
			result.setErrorCode(-9999);
			result.setErrorMsg("Please use after login.");
		}

		return result;
	}

	@RequestMapping(value = "/service/sendSMS.do", method = RequestMethod.POST)
	public NexacroResult getSendSMS(HttpServletRequest request, PlatformData platformData, Authentication auth)
			throws Exception {
		NexacroResult result = new NexacroResult();

		Boolean isIdentity = CENUtils.checkIdentity(request, platformData, auth);

		if (isIdentity) {
			if (platformData.getDataSetCount() > 0 || platformData.getDataSet(0).getRowCount() == 0) {
				DataSet dsMsg = platformData.getDataSet(0);

				List<Map> listMap = new ArrayList<Map>();
				for (int i = 0; i < dsMsg.getRowCount(); i++) {
					HashMap<String, String> map = new HashMap<String, String>();
					map.put("SMS_FROM", dsMsg.getString(i, "SMS_FROM"));
					map.put("SMS_TO", dsMsg.getString(i, "SMS_TO"));
					map.put("SMS_BODY", dsMsg.getString(i, "SMS_BODY"));
					listMap.add(map);
				}
				cenSubService.SmsMsgInsert(listMap);
				
			} else {
				result.setErrorCode(-9000);
				result.setErrorMsg("전송할 메세지 내역이 없습니다.");				
			}
		} else {
			result.setErrorCode(-9999);
			result.setErrorMsg("Please use after login.");
		}

		return result;
	}
	

	@RequestMapping(value = "/service/selectMail.do", method = RequestMethod.POST)
	public NexacroResult getSelectMail(HttpServletRequest request, PlatformData platformData, Authentication auth)
			throws Exception {
		NexacroResult result = new NexacroResult();

		Boolean isIdentity = CENUtils.checkIdentity(request, platformData, auth);

		if (isIdentity) {
			List<?> list = cenSubService.MailMsgSelect();
			result.addDataSet("message", list);
		} else {
			result.setErrorCode(-9999);
			result.setErrorMsg("Please use after login.");
		}

		return result;
	}

	@RequestMapping(value = "/service/sendMail.do", method = RequestMethod.POST)
	public NexacroResult getSendMail(HttpServletRequest request, PlatformData platformData, Authentication auth)
			throws Exception {
		NexacroResult result = new NexacroResult();

		Boolean isIdentity = CENUtils.checkIdentity(request, platformData, auth);

		if (isIdentity) {
			if (platformData.getDataSetCount() > 0 || platformData.getDataSet(0).getRowCount() == 0) {
				DataSet dsMsg = platformData.getDataSet(0);

				List<Map> listMap = new ArrayList<Map>();
				for (int i = 0; i < dsMsg.getRowCount(); i++) {
					HashMap<String, String> map = new HashMap<String, String>();
					map.put("ADDR_FROM", dsMsg.getString(i, "ADDR_FROM"));
					map.put("ADDR_TO", dsMsg.getString(i, "ADDR_TO"));
					map.put("MAIL_SUBJECT", dsMsg.getString(i, "MAIL_SUBJECT"));
					map.put("MAIL_BODY", dsMsg.getString(i, "MAIL_BODY"));
					listMap.add(map);
				}
				cenSubService.MailMsgInsert(listMap);
				
			} else {
				result.setErrorCode(-9000);
				result.setErrorMsg("전송할 메세지 내역이 없습니다.");				
			}
		} else {
			result.setErrorCode(-9999);
			result.setErrorMsg("Please use after login.");
		}

		return result;
	}
}
