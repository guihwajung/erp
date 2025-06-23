package com.goodcen.cenerp.web;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.annotation.Resource;
import javax.net.ssl.SSLContext;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLContexts;
import org.apache.http.conn.ssl.TrustStrategy;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.BasicHttpClientConnectionManager;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.goodcen.common.model.CENCallableMap;
import com.goodcen.common.service.CENCommonService;

@SuppressWarnings("deprecation")
@Controller("cenApprovalGwController")
public class CENApprovalGwController {
	
	private static final String GW_PID_REQUEST_XML = 
			"<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n"
			+ "<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\r\n"
			+ "  <soap:Body>\r\n"
			+ "    <SetLegacyInstance xmlns=\"http://tempuri.org/\">\r\n"
			+ "      <sKeys>${KEYS}</sKeys>\r\n"
			+ "      <sFormId>${FORM_ID}</sFormId>\r\n"
			+ "      <sUserID>${USER_ID}</sUserID>\r\n"
			+ "      <sDeptID></sDeptID>\r\n"
			+ "      <sSubject>${SUBJECT}</sSubject>\r\n"
			+ "    </SetLegacyInstance>\r\n"
			+ "  </soap:Body>\r\n"
			+ "</soap:Envelope>\r\n";

	@Resource(name="cenCommonService")
	private CENCommonService cenCommonService;
	
	@Value("${approval.gw.url.pid}")
	private String approvalGwUrlPid;

	@Value("${approval.gw.url.piid}")
	private String approvalGwUrlPiid;

	@Value("${approval.gw.url.open}")
	private String approvalGwUrlOpen;
	
	@RequestMapping(value = "/api/approval/pid.do", method = RequestMethod.GET)
	@ResponseBody
	public ApprovalResponse getApprovalPid(
			@RequestParam(value = "CD_CORP") String cdCorp,
			@RequestParam(value = "NO_APRV") int noAprv,
			@RequestParam(value = "CD_CORP_SUFFIX") String cdCorpSuffix) {
		ApprovalResponse response = new ApprovalResponse();
		
		try {
			CENCallableMap paramMap = new CENCallableMap();
			paramMap.put("CD_CORP", cdCorp);
			paramMap.put("NO_APRV", noAprv);
			paramMap.put("CD_CORP_SUFFIX", cdCorpSuffix);

			// GW 연동을 위한 파라메터 준비
			Map<String, Object> result = getResult(paramMap);
			String idAprvSchf = (String) result.get("ID_APRV_SCHF");	// 결재상신자
			String ttDoc = (String) result.get("TT_DOC");				// 결재문서제목
			String idGwDoc = (String) result.get("ID_GW_DOC");			// GW문서ID

			// GW 연동을 위한 XML 준비
			String key = cdCorp + "|" + noAprv + "|" + cdCorpSuffix;
			String requestXml = GW_PID_REQUEST_XML.replaceAll("\\$\\{KEYS\\}", key);
			requestXml = requestXml.replaceAll("\\$\\{FORM_ID\\}", idGwDoc);
			requestXml = requestXml.replaceAll("\\$\\{USER_ID\\}", idAprvSchf.startsWith("CBN") ? idAprvSchf : "CBN" + idAprvSchf);
			requestXml = requestXml.replaceAll("\\$\\{SUBJECT\\}", ttDoc);

			// GW 연동을 위한 HTTP Client 준비
			TrustStrategy acceptingTrustStrategy = (cert, authType) -> true;
		    SSLContext sslContext = SSLContexts.custom().loadTrustMaterial(null, acceptingTrustStrategy).build();
		    SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(sslContext, NoopHostnameVerifier.INSTANCE);
		    
		    Registry<ConnectionSocketFactory> socketFactoryRegistry = RegistryBuilder.<ConnectionSocketFactory>create()
		    		.register("https", sslsf)
		    		.register("http", new PlainConnectionSocketFactory())
		    		.build();

		    BasicHttpClientConnectionManager connectionManager = new BasicHttpClientConnectionManager(socketFactoryRegistry);

			CloseableHttpClient client = HttpClients.custom()
					.setSSLSocketFactory(sslsf)
					.setConnectionManager(connectionManager)
					.build();

			// GW 연동
			HttpPost request = new HttpPost(approvalGwUrlPid);
			request.addHeader("Content-Type", "text/xml;charset=UTF-8");
			request.setEntity(new StringEntity(requestXml, "UTF-8"));
			
			CloseableHttpResponse httpResponse = client.execute(request);
			String responseString = EntityUtils.toString(httpResponse.getEntity());
		    
			// GW 연동 결과 파싱
			Pattern pattern = Pattern.compile("(?<=&lt;PID&gt;).*?(?=&lt;/PID&gt;)");
			Matcher matcher = pattern.matcher(responseString);
			String pid = "";
			if (matcher.find()) {
				pid = matcher.group();
			}
			
			// GW 연동 결과 저장
			paramMap.put("ID_GW_APRV", pid);
			cenCommonService.save("DZZPR_APRV_INIT_UPDATE", paramMap);
			
			String tyGwDoc = (String) result.get("TY_GW_DOC");
			int height = 900;
			int width;
			if (tyGwDoc.equals("V")) {
				width = 820;
			} else {
				width = 1270;
			}
			
			return new ApprovalResponse(approvalGwUrlOpen + pid, idGwDoc, key, height, width);
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		return response;
	}
	
	@RequestMapping(value = "/api/approval/piid.do", method = RequestMethod.GET)
	@ResponseBody
	public ApprovalResponse getApprovalPiid(
			@RequestParam(value = "CD_CORP") String cdCorp,
			@RequestParam(value = "NO_APRV") int noAprv) {
		ApprovalResponse response = new ApprovalResponse();
		
		try {
			CENCallableMap paramMap = new CENCallableMap();
			paramMap.put("CD_CORP", cdCorp);
			paramMap.put("NO_APRV", noAprv);

			// GW 연동 결과 저장
			List<List<Map<String, Object>>> resultList =
					(List<List<Map<String, Object>>>) cenCommonService.search("DZZPR_APRV_INIT_SELECT", paramMap);

			String noDoc = (String) resultList.get(0).get(0).get("NO_DOC");
			String tyGwDoc = (String) resultList.get(0).get(0).get("TY_GW_DOC");
			int height = 900;
			int width;
			if (tyGwDoc.equals("V")) {
				width = 820;
			} else {
				width = 1270;
			}
			
			return new ApprovalResponse(approvalGwUrlPiid + noDoc, height, width);
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		return response;
	}
	
	
	private Map<String, Object> getResult(CENCallableMap paramMap) throws Exception {
		List<List<Map<String, Object>>> resultListList =
				(List<List<Map<String, Object>>>) cenCommonService.search("DZZPR_APRV_INIT_SELECT", paramMap);
		
		List<Map<String, Object>> resultList = null;
		if (resultListList != null && resultListList.size() > 0) {
			resultList = resultListList.get(0);
		}
		
		Map<String, Object> result = null;
		if (resultList != null && resultList.size() > 0) {
			result = resultList.get(0);
		}
		
		if (result == null || result.isEmpty()) {
			return Collections.EMPTY_MAP;
		}
		
		return result;
	}
	
	public class ApprovalResponse {
		
		private String url;
		private String form;
		private String key;

		private int height;
		private int width;
		
		private ApprovalResponse() {
			
		}
		
		public ApprovalResponse(String url, int height, int width) {
			this(url, null, null, height, width);
		}
		
		public ApprovalResponse(String url, String form, String key, int height, int width) {
			this.url = url;
			this.form = form;
			this.key = key;
			this.height = height;
			this.width = width;
		}

		public String getUrl() {
			return url;
		}

		public void setUrl(String url) {
			this.url = url;
		}

		public String getForm() {
			return form;
		}

		public void setForm(String form) {
			this.form = form;
		}

		public String getKey() {
			return key;
		}

		public void setKey(String key) {
			this.key = key;
		}

		public int getHeight() {
			return height;
		}

		public void setHeight(int height) {
			this.height = height;
		}

		public int getWidth() {
			return width;
		}

		public void setWidth(int width) {
			this.width = width;
		}
		
	}

}
