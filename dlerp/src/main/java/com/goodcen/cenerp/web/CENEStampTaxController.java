package com.goodcen.cenerp.web;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URLEncoder;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.http.ProtocolException;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ktnet.ets.hub.common.property.EtsConstants;
import com.ktnet.ets.hub.common.util.JsonUtil;
import com.ktnet.ets.hub.exception.EtsConfigurationException;
import com.ktnet.ets.hub.exception.ValidationException;
import com.ktnet.ets.hub.inf.manager.EtsHubManager;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;

@Controller("cenEStampTaxController")
public class CENEStampTaxController {
	//private static final Logger LOGGER = LoggerFactory.getLogger(CENEStampTaxController.class);
	
	@RequestMapping(value = {"pki/dcc_stamp_reqno.do"}, method = RequestMethod.POST)
	public NexacroResult reqno(PlatformData platformData, HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();
		
		if (platformData.getDataSet(IN_DATASET) == null) return result;
		
		DataSet dataSet = platformData.getDataSet(IN_DATASET);
		
		// 1단계 : 신규 발급신청번호 요청 진행
	    Map<String, String> resultMap = getNewIssueReqNo(dataSet.getString(0, CONTRACT_NO));
	    
	    // 2단계 : 구매요청서 URL 호출 진행
        if (resultMap.get("resultCode").equals("900")) {
        	
        	Map<String, String> resulturl = new HashMap<String, String>();	
            StringBuilder sb = new StringBuilder();
            
        	sb	.append(resultMap.get(REVENUE_URL))
        		.append(setArgumentKey(TOOL_MANAGE_NO,0))
        		.append(resultMap.get(TOOL_MANAGE_NO))
        		.append(setArgumentKey(TOOL_BIZ_NO,1))
        		.append(resultMap.get(TOOL_BIZ_NO))
        		.append(setArgumentKey(ISSUE_BIZ_NO,1))
        		.append(dataSet.getString(0, ISSUE_BIZ_NO))
        		.append(setArgumentKey(ISSUE_DIV_CODE,1))
        		.append(resultMap.get(ISSUE_DIV_CODE))
        		.append(setArgumentKey(ISSUE_REQ_CODE,1))
        		.append(resultMap.get(ISSUE_REQ_CODE))
        		.append(setArgumentKey(CONTRACT_TITLE,1))
        		.append(URLEncoder.encode(dataSet.getString(0, CONTRACT_TITLE), CONTRACT_CHARSET))
        		.append(setArgumentKey(CONTRACT_DATE,1))
        		.append(dataSet.getString(0, CONTRACT_DATE))
        		.append(setArgumentKey(CONTRACT_NO,1))
        		.append(dataSet.getString(0, CONTRACT_NO))
        		.append(setArgumentKey(CONTRACT_SEQ,1))
        		.append(dataSet.getString(0,CONTRACT_SEQ).substring(dataSet.getString(0,CONTRACT_SEQ).length()-CONTRACT_SEQ_LEN))
        		.append(setArgumentKey(CONTRACT_PARTIES,1))
        		.append(URLEncoder.encode(dataSet.getString(0, CONTRACT_PARTIES) == null ? StringUtils.EMPTY :dataSet.getString(0, CONTRACT_PARTIES), CONTRACT_CHARSET))
        		.append(setArgumentKey(CONTRACT_AMOUNT,1))
        		.append(dataSet.getString(0, CONTRACT_AMOUNT))
        		.append(setArgumentKey(CONTRACT_TYPE,1))
        		.append(CONTRACT_TYPE_VAL)
        		.append(setArgumentKey(MOBILE_NUMBER,1))
        		.append(dataSet.getString(0, MOBILE_NUMBER))
        		.append(setArgumentKey(EMAIL,1))
        		.append(dataSet.getString(0, EMAIL))
        		.append(setArgumentKey(ISSUE_AMOUNT,1))
        		.append(dataSet.getString(0, ISSUE_AMOUNT))
        		.append(setArgumentKey(IN_AMT_DISABLE,1))
        		.append(dataSet.getString(0, IN_AMT_DISABLE));
        	
        	resulturl.put("surl", sb.toString());
            result.addDataSet("output", resulturl); 
        }
	        
		return result;
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = {"/dcc_stamp_paylist.do","pki/dcc_stamp_paylist.do"}, method = RequestMethod.POST)
	public NexacroResult paylist(PlatformData platformData, HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();
		
		if(platformData.getDataSet(IN_DATASET) == null) return result;
		 
		DataSet dataSet = platformData.getDataSet(IN_DATASET);
		EtsHubManager etsHubManager = new EtsHubManager(getEtsPath());
		EtsConstants etsConstants 	= new EtsConstants();
		StringBuilder etsPamentUrl	= new StringBuilder();
		
		etsConstants.loadConfigFile(getEtsPath());
		etsPamentUrl
			.append(etsConstants.etsHubServerUrl)
			.append("/common/popup/getReceiptDatailPopup.do?issueReqNo=");
		
		Map<String, String> taxParamMap = new HashMap<String, String>();
		taxParamMap.put(CONTRACT_TYPE, CONTRACT_TYPE_VAL);//거래(계약)종류코드 - 과세종류코드
        taxParamMap.put(CONTRACT_AMOUNT, dataSet.getString(0, CONTRACT_AMOUNT));  
        
        Map<String, String> paramMap = new HashMap<String, String>();
        Map<String, String> amountMap	= etsHubManager.getIssueTaxAmount(taxParamMap);
        ArrayList<Map<String, Object>> resultList = new ArrayList<>();
        
        int taxAmount	= Integer.parseInt(amountMap.get(TAX_AMOUNT) == CHAR_EMPTY ? CHAR_ZERO : amountMap.get(TAX_AMOUNT));//계약금액에 따른 인지세 금액
        int taxNoSeq	= Integer.parseInt(dataSet.getString(0,CONTRACT_SEQ));
        int rtnSum 		= 0;
        
        for(int c = 0; c <= taxNoSeq; ++c) {
			paramMap.put(CONTRACT_NO,	dataSet.getString(0,CONTRACT_NO));	//계약번호
			paramMap.put(CONTRACT_SEQ, 	(c < 10 ? CHAR_ZERO : CHAR_EMPTY) + c);	//계약번호차수
			
			Map<String, String> resultMap = etsHubManager.getIssueCfrmPayList(paramMap);
			
			ArrayList<Map<String, Object>> chkList = JsonUtil.toObject(resultMap.get("resultList"), ArrayList.class);
			
			int rtnCnt = chkList.size();
			
			for(int i = 0; i < rtnCnt; i++) {
				rtnSum += Integer.parseInt((String)(((Map<?,?>)chkList.get(i)).get(PAYMENT_AMOUNT)));
				chkList.get(i).put(CONTRACT_SEQ, CHAR_ZERO + paramMap.get(CONTRACT_SEQ));
				chkList.get(i).put(PAYMENT_URL, 
						(etsPamentUrl.toString().indexOf("qa") > -1 ? 
								etsPamentUrl.toString().replaceAll("-hub", CHAR_EMPTY) : 
									etsPamentUrl.toString().replaceAll("hub.", "www.")) + 
						((Map<String, Object>)chkList.get(i)).get(ISSUE_REQ_CODE));
			}
			resultList.addAll(chkList);
        }
        
		paramMap.put(TAX_AMOUNT, Integer.toString(taxAmount));	//인시세부가금액
		paramMap.put(TAX_TOTAL,  Integer.toString(rtnSum));	//총결제금액
		 
		result.addDataSet("output0", resultList);
		result.addDataSet("output1", paramMap);
			 
		return result;
	}
	
	@RequestMapping(value = {"/dcc_stamp_suip.do","pki/dcc_stamp_suip.do"}, method = RequestMethod.POST)
	public NexacroResult suip(PlatformData platformData, HttpServletRequest request) {
		if(platformData.getDataSet(IN_DATASET) == null) return null;
		
		NexacroResult result = new NexacroResult();
		Map<String, String> paramMap = new HashMap<String, String>();
		
		DataSet dataSet = platformData.getDataSet(IN_DATASET);
		
		StringBuilder origin_sb = new StringBuilder();
		
		try {
			origin_sb
				.append(getFilePath())
				.append(File.separator)
				.append(dataSet.getString(0, ORIGIN_FILE_PATH))
				.append(File.separator)
				.append(dataSet.getString(0, ORIGIN_FILE_NAME));
			
			StringBuilder target_sb = new StringBuilder();
			target_sb
				.append(getFilePath())
				.append(File.separator)
				.append(dataSet.getString(0, ORIGIN_FILE_PATH))
				.append(File.separator)
				.append(dataSet.getString(0, ORIGIN_FILE_NAME)
							.toLowerCase()
							.replace(ORIGIN_FILE_KIND, STAMP_FILE_REPLACE));
			
			File origin = new File(
							origin_sb
								.toString()
								.replaceAll(FILE_SEPARATOR_TO, 
										Matcher.quoteReplacement(File.separator))
								.replaceAll(FILE_SEPARATOR_TO, 
										Matcher.quoteReplacement(File.separator))
							);
			
			File target = new File(
							target_sb
								.toString()
								.replaceAll(FILE_SEPARATOR_TO,
										Matcher.quoteReplacement(File.separator))
								.replaceAll(FILE_SEPARATOR_TO, 
										Matcher.quoteReplacement(File.separator))
							);
			
			boolean succ = copyFile(origin,target);
			
			if(succ) {
				paramMap.put(CONTRACT_NO, 			dataSet.getString(0, CONTRACT_NO));
		        paramMap.put(CONTRACT_TITLE, 		dataSet.getString(0, CONTRACT_TITLE));//거래(계약)명
		        paramMap.put(CONTRACT_DATE, 		dataSet.getString(0, CONTRACT_DATE));//거래(계약)체결일
		        paramMap.put(CONTRACT_TYPE, 		CONTRACT_TYPE_VAL);//거래(계약) 타입
		        paramMap.put(CONTRACT_AMOUNT, 		dataSet.getString(0, CONTRACT_AMOUNT));//거래(계약)금액
				paramMap.put(ORIGIN_FILE_PATH, 		origin.getPath());//전자수입인지 발급 전자문서 파일 경로
		        paramMap.put(STAMP_FILE_PATH, 		target.getPath());
		        
		        EtsHubManager etsHubManager = new EtsHubManager(getEtsPath());
		        result.addDataSet("output0", etsHubManager.stampIssueChange(paramMap));
			} else {
				result.setErrorCode(-9000);
				result.setErrorMsg("수입인지 발급처리 중 오류가 발행했습니다!");
			}
		} catch(Exception ex){
			result.setErrorCode(-9000);
			result.setErrorMsg("수입인지 발급처리 중 오류가 발행했습니다!");
		}
					
		return result;
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = {"/dcc_stamp_check.do","pki/dcc_stamp_check.do"}, method = RequestMethod.POST)
	public NexacroResult chkinji(PlatformData platformData, HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();
		
		if(platformData.getDataSet(IN_DATASET) == null) return result;
		DataSet dataSet = platformData.getDataSet(IN_DATASET);
		
		EtsHubManager etsHubManager = new EtsHubManager(getEtsPath());
		
		Map<String, String> taxParamMap = new HashMap<String, String>();
		taxParamMap.put(CONTRACT_TYPE, CONTRACT_TYPE_VAL);//거래(계약)종류코드 - 과세종류코드
        taxParamMap.put(CONTRACT_AMOUNT, dataSet.getString(0, CONTRACT_AMOUNT));  
        
        Map<String, String> paramMap 	= new HashMap<String, String>();
        Map<String, String> resultdata 	= new HashMap<String, String>();
        Map<String, String> amountMap	= etsHubManager.getIssueTaxAmount(taxParamMap);
        int taxAmount	= Integer.parseInt(amountMap.get(TAX_AMOUNT) == CHAR_EMPTY ? CHAR_ZERO : amountMap.get(TAX_AMOUNT));//계약금액에 따른 인지세 금액
        int taxNoSeq	= Integer.parseInt(dataSet.getString(0,CONTRACT_SEQ));
        int rtnSum 		= 0;
        
        for(int c = (dataSet.getString(0, AMOUNT_TYPE).equals("AMT") ? taxNoSeq : 0); c <= taxNoSeq; ++c) {
        	paramMap.put(CONTRACT_NO, dataSet.getString(0, CONTRACT_NO));	//계약번호
    		paramMap.put(CONTRACT_SEQ, (c < 10 ? CHAR_ZERO : CHAR_EMPTY) +	c);	//계약번호차수
            
            Map<String, String> resultMap = etsHubManager.getIssueCfrmPayList(paramMap); //납부내역 조회하기
            ArrayList<Map<String,Object>> resultList = JsonUtil.toObject(resultMap.get("resultList"), ArrayList.class);
            
            int cnt = resultList.size();
            for(int i = 0 ; i < cnt ; i++){
            	if(	dataSet.getString(0, AMOUNT_TYPE).equals("AMT") && 
            		!dataSet.getString(0, ISSUE_BIZ_NO).equals(((Map<String,Object>)resultList.get(i)).get(ISSUE_BIZ_NO))) continue;
            	rtnSum += Integer.parseInt((String)((Map<String,Object>)resultList.get(i)).get(PAYMENT_AMOUNT));		   
            }
        }
        
        resultdata.put(	"injimsg", (taxAmount > rtnSum) ? 
	        				"인지세가 완납되지 않았습니다.\r\n구매요청서로 추가 결제 해주세요." : 
	        				"인지세가 완납되었습니다 발급을 진행하세요.");
        
   	 	resultdata.put(	"injiflg", (taxAmount > rtnSum) ? 
	   	 					"N" : 
	   	 					"Y");
   	 	
   	 	resultdata.put(TAX_AMOUNT, 		Integer.toString(taxAmount));	//인시세부가금액
        resultdata.put(PAYMENT_AMOUNT, 	Integer.toString(rtnSum));
        
        result.addDataSet("output", resultdata);
		
		return result;
	}
	
	@RequestMapping(value = {"/dcc_stamp_viewer.do","pki/dcc_stamp_viewer.do"}, method = {RequestMethod.GET, RequestMethod.POST})
	public void getPdfViewer(HttpServletRequest request, HttpServletResponse response) {
		
		FileInputStream fis 		= null;
		BufferedOutputStream bos 	= null;
		StringBuilder target_sb 	= new StringBuilder();
		
		try {
			target_sb
				.append(getFilePath())
				.append(File.separator)
				.append(request.getParameter(ORIGIN_FILE_PATH))
				.append(File.separator)
				.append(request.getParameter(ORIGIN_FILE_NAME)
							.toLowerCase()
							.replace(ORIGIN_FILE_KIND, STAMP_FILE_REPLACE));
			
			File pdfFile = new File(
					target_sb
						.toString()
						.replaceAll(FILE_SEPARATOR_TO,
								Matcher.quoteReplacement(File.separator))
						.replaceAll(FILE_SEPARATOR_TO, 
								Matcher.quoteReplacement(File.separator))
					);
			
			response.setContentType("application/pdf");
			response.flushBuffer();
			
			fis = new FileInputStream(pdfFile);
			byte[] buf = new byte[fis.available()]; //버퍼설정
			
			int readCount = fis.read(buf);
			bos = new BufferedOutputStream(response.getOutputStream());
			bos.write(buf, 0, readCount);
			bos.flush();
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (fis != null) fis.close();
				if (bos != null) bos.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	/*************************************************************************************************************************************/
	@Autowired
	private Environment env;
	
	private static final String SP_ACTIVE 			= System.getProperty("spring.profiles.active");
	private static final String SP_ACTIVE_DEFAULT 	= "default";
	private static final String STAMP_FILE_PATH 	= "stampPdfPath";
	private static final String ORIGIN_FILE_PATH 	= "contractFilePath";
	private static final String ORIGIN_FILE_NAME 	= "contractFileName";
	private static final String ORIGIN_FILE_KIND 	= ".pdf";
	private static final String STAMP_FILE_REPLACE 	= "_STAMP.pdf";
	private static final String FILE_SEPARATOR_TO	= "(\\\\{1,})|[/]+";
	private static final String IN_DATASET			= "dsInji";
	private static final String CHAR_EMPTY			= "";
	private static final String CHAR_ZERO			= "0";
	private static final int 	CONTRACT_SEQ_LEN	= 2;
	private static final String CONTRACT_CHARSET	= "UTF-8";
	private static final String REVENUE_URL			= "purchaseUrl";
	private static final String CONTRACT_NO			= "contractNo";
	private static final String CONTRACT_SEQ		= "contractNoSeq";
	private static final String TOOL_MANAGE_NO		= "infToolMngNo";
	private static final String TOOL_BIZ_NO			= "infToolBizNo";
	private static final String ISSUE_BIZ_NO		= "issueBizNo";
	private static final String ISSUE_DIV_CODE		= "issueDivisionCode";
	private static final String ISSUE_REQ_CODE		= "issueReqNo";
	private static final String CONTRACT_TITLE		= "contractTitle";
	private static final String CONTRACT_DATE		= "contractDate";
	private static final String CONTRACT_PARTIES	= "contractParties";
	private static final String CONTRACT_AMOUNT		= "contractAmount";
	private static final String CONTRACT_TYPE		= "contractType";
	private static final String CONTRACT_TYPE_VAL	= "030";
	private static final String MOBILE_NUMBER		= "mobileNumber";
	private static final String EMAIL				= "email";
	private static final String ISSUE_AMOUNT		= "issueAmount";
	private static final String IN_AMT_DISABLE		= "inAmtDisable";
	private static final String TAX_AMOUNT			= "taxAmount";
	private static final String TAX_TOTAL			= "taxTotal";
	private static final String PAYMENT_AMOUNT		= "paymentAmount";
	private static final String AMOUNT_TYPE			= "getAmountType";
	private static final String PAYMENT_URL			= "paymentConfirmUrl";
	
	private static final String[] ARGUMENT_TYPE		= {"?","&","="};
	
	private String getFilePath() {
		return env.getProperty("spring.servlet.multipart.location");
	}
	
	private String getEtsPath() {
		String[] etsFileNm = {
				"ets",
				SP_ACTIVE == null ? SP_ACTIVE_DEFAULT : SP_ACTIVE,
				"config.properties"};
		
		return	new StringBuilder()
					.append(env.getProperty("ets.location"))
					.append(Matcher.quoteReplacement(File.separator))
					.append(StringUtils.join(etsFileNm,"-"))
					.toString();
	}
	
	private String setArgumentKey(String key, int tp) {
		return new StringBuilder().append(ARGUMENT_TYPE[tp]).append(key).append(ARGUMENT_TYPE[ARGUMENT_TYPE.length-1]).toString();
	}
	
	private Map<String, String> getNewIssueReqNo(String contractNo)
			throws EtsConfigurationException, ValidationException, IOException, URISyntaxException, ProtocolException, NoSuchAlgorithmException, KeyStoreException, KeyManagementException {
        Map<String, String> paramMap = new HashMap<String, String>();
        paramMap.put(CONTRACT_NO, contractNo);//계약번호
        EtsHubManager etsHubManager = new EtsHubManager(getEtsPath());
        return etsHubManager.getIssueReqNumber(paramMap);
    }
	
	private boolean copyFile(File originF, File targetF){
		FileInputStream fis = null;
		FileOutputStream fos = null;
		boolean rtn = true;
		try {
			fis = new FileInputStream(originF);
			fos = new FileOutputStream(targetF) ;
			byte[] b = new byte[4096];
			int cnt = 0;
			while((cnt=fis.read(b)) != -1){
				fos.write(b, 0, cnt);
			}
		} catch (Exception e) {
			e.printStackTrace();
			rtn = false;
		} finally{
			try {
				if(fis != null) fis.close();
				if(fos != null) fos.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return rtn;
	}
}
