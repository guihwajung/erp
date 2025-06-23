package com.goodcen.cenerp.web;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.nio.file.Files;
import java.security.cert.CertPathValidator;
import java.security.cert.CertificateException;
import java.security.spec.AlgorithmParameterSpec;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Base64.Decoder;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.UncategorizedSQLException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.goodcen.cenerp.model.CENUserB2BVO;
import com.goodcen.cenerp.security.jwt.CENJwtTokenProvider;
import com.goodcen.cenerp.util.CENUtils;
import com.goodcen.common.model.CENCallableMap;
import com.goodcen.common.model.CENOptions.CENProcData;
import com.goodcen.common.nexacro.service.CENNexacroService;
import com.goodcen.common.security.util.CENAuthenticationHelper;
import com.goodcen.common.service.CENCommonService;
import com.goodcen.common.util.CENWebUtils;
import com.goodcen.common.util.CENZipUtils;
import com.goodcen.framework.pki.properties.PkiSetting;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;

import tradesign.crypto.cert.validator.ExtendedPKIXParameters;
import tradesign.crypto.cert.validator.PKIXCertPath;
import tradesign.crypto.provider.JeTS;
import tradesign.pki.asn1.ASN1Exception;
import tradesign.pki.asn1.AlgorithmID;
import tradesign.pki.pkcs.PKCSException;
import tradesign.pki.pkix.EnvelopedData;
import tradesign.pki.pkix.Login;
import tradesign.pki.pkix.SignedData;
import tradesign.pki.pkix.X509Certificate;
import tradesign.pki.util.JetsUtil;
import tradesign.pki.x509.X509ExtensionException;

/**
 * 
 * @filename HDCB2BController.java
 * @author mango
 * @since 2019. 09. 23.
 * @version 1.0
 * @see
 *
 *      <pre>
 *  == 개정이력(Modification Information) ==
 *   
 *   수정일              수정자                                    수정내용
 *  ------   --------   ---------------------------
 *  2019. 09. 23.	mango          최초 생성
 * 
 *      </pre>
 */
@Controller("cenB2BController")
public class CENB2BController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CENB2BController.class);

//	@Autowired
//	private Environment env;

	@Autowired
	private PkiSetting pkiSetting;

	@Autowired
	private CENJwtTokenProvider cenJwtTokenProvider;

	@Resource(name = "cenCommonService")
	private CENCommonService cenCommonService;

	@Resource(name = "cenNexacroService")
	private CENNexacroService cenNexacroService;

	@RequestMapping(value = "/pki/login.do", method = RequestMethod.POST)
	public NexacroResult loginB2B(PlatformData platformData, HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();

		if (platformData != null && platformData.getDataSetCount() > 0) {
			DataSet dataSet = platformData.getDataSet(0);

			String id = CENWebUtils.Decrypt(dataSet.getString(0, "ID_USER"));
			String pwd = CENWebUtils.Decrypt(dataSet.getString(0, "ID_PASSWORD"));

			String loginSP = "DZZPR_XUSER_SELECT";
			CENCallableMap param = new CENCallableMap();
			param.setString("ID_USER", id);
			param.setString("ID_PASSWORD", pwd);

			List<Map<String, Object>> list = loginProc(result, request, loginSP, param, pwd);
			if (list != null && list.size() > 0)
				result.addDataSet("output0", list);

		}

		return result;

	}

	/**
	 * 세션 조회
	 * 
	 * @param platformData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/pki/loginInfo.do", method = RequestMethod.POST)
	public NexacroResult getLoginInfo(HttpServletRequest request, HttpServletResponse response, HttpSession session, PlatformData platformData, Authentication auth)
			throws Exception {
		NexacroResult result = new NexacroResult();

		if (CENAuthenticationHelper.isAuthenticated(request)) {

			Map<String, String> userMap = CENUtils.getUserMap(auth);
			
			String loginSP = "DZZPR_XUSER_SELECT";
			CENCallableMap param = new CENCallableMap();
			param.setString("ID_USER", userMap.get("CD_VENDOR"));
			param.setString("ID_PASSWORD", "\r\n" + "#SESSIONLOGIN#" + "\r\n");

			List<Map<String, Object>> list = loginProc(result, request, loginSP, param, "");
			if (list != null && list.size() > 0)
				result.addDataSet("output0", list);

		} 
		
		return result;
	}

	/**
	 * 사업자번호 입력후 공동인증서 로그인
	 * @param platformData
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/pki/logincertssn.do", method = RequestMethod.POST)
	public NexacroResult loginCertSSN(PlatformData platformData, HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();

		if (platformData != null && platformData.getDataSetCount() > 0) {
			DataSet dataSet = platformData.getDataSet(0);

			String id = CENWebUtils.Decrypt(dataSet.getString(0, "NO_SJC"));

			String loginSP = "DZZPR_XCERTSSN_LOGIN";
			CENCallableMap param = new CENCallableMap();
			param.setString("NO_SJC", id);

			List<Map<String, Object>> list = loginProc(result, request, loginSP, param, "");
			if (list != null && list.size() > 0)
				result.addDataSet("output0", list);

		}

		return result;

	}

	/**
	 * 등록된 공동인증서 로그인
	 * @param request
	 * @param platformData
	 * @return
	 */
	@RequestMapping(value = "/pki/logincert.do", method = RequestMethod.POST)
	public NexacroResult loginCert(HttpServletRequest request, PlatformData platformData) {
		NexacroResult result = new NexacroResult();

		try {
			DataSet dsCert = platformData.getDataSet("input");

			if (dsCert.getRowCount() > 0) {

				String encoded = dsCert.getString(0, "CERT");
				// Login 메세지 파싱
				Login login1 = new Login(JetsUtil.base64ToBytes(encoded));

				// 복호화하기 위한 인증서, 개인키, 패스워드 설정.
				login1.setupCipher(JeTS.getServerkmCert(0), JeTS.getServerkmPriKey(0), JeTS.getServerKmKeyPassword(0));

				// 로그인요청메시지 검증 및 파싱
				// loginData 를 만드는데 사용된 인증서의 유효성 검증여부(true: 검증, false: 검증안함)
				login1.parseLoginData(true);

				// String ssnumber = new String(login1.getSsn());

				X509Certificate[] certs = login1.getSignerCerts();

				X509Certificate cert = certs[0];
				// boolean ret = cert.VerifyIDN(ssnumber, login1.getRandom());
				//
				// String idconfirm="";
				// if (ret)
				// idconfirm="신원확인 성공";
				// else
				// idconfirm="신원확인 실패";
				String subjectDN = cert.getSubjectDNStr();
				String noSerial = cert.getSerialNumber().toString();

				String loginSP = "DZZPR_XCERTLOGIN_SELECT";
				CENCallableMap param = new CENCallableMap();
				param.setString("DN_CERT", subjectDN);
				param.setString("NO_SERIAL", noSerial);

				List<Map<String, Object>> list = loginProc(result, request, loginSP, param, subjectDN);
				if (list != null && list.size() > 0) {
					result.addDataSet("output0", list);
				}
			}
		} catch (Exception ex) {
			result.setErrorCode(-9000);
			result.setErrorMsg(ex.getMessage());
		}

		return result;
	}

	private List<Map<String, Object>> loginProc(NexacroResult result, HttpServletRequest request, String selectSP, CENCallableMap param,
			String pwd) throws Exception {

		List<List<Map<String, Object>>> array = (List<List<Map<String, Object>>>) cenCommonService.search(selectSP,
				param);

		List<Map<String, Object>> list = null;
		if (array != null && array.size() > 0) {
			list = array.get(0);
		}
		if (list != null && list.size() > 0) {

			Map<String, Object> map = list.get(0);

			map.put("NO_IP", CENWebUtils.getIp(request));

			CENUserB2BVO user = new CENUserB2BVO();
			user.setID_USER(String.valueOf(map.get("ID_USER")));
			user.setCD_VENDOR(String.valueOf(map.get("CD_VENDOR")));
			user.setCD_CORP(String.valueOf(map.get("CD_CORP")));
			user.setCD_DEPT(String.valueOf(map.get("CD_DEPT")));

			String token = cenJwtTokenProvider.createToken(user.getID_USER()+"="+user.getCD_VENDOR()+"="+user.getCD_CORP()+"="+user.getCD_DEPT(), new ArrayList<String>());
			result.addVariable("gcToken", token);
			
			Authentication authentication = cenJwtTokenProvider.getAuthentication(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            
//			CENUserDetails principal = new CENUserDetails(user.getCD_VENDOR(), pwd, true, user);
//			UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(principal, null,
//					AuthorityUtils.NO_AUTHORITIES);
//
//			SecurityContext securityContext = SecurityContextHolder.getContext(); // new
//																					// SecurityContextImpl();
//			securityContext.setAuthentication(authRequest);
//			request.getSession().setAttribute(HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY,
//					securityContext);

		}
		return list;
	}

	@RequestMapping(value = "/pki/loginfind.do", method = RequestMethod.POST)
	public NexacroResult loginFind(HttpServletRequest request, PlatformData platformData) {
		NexacroResult result = new NexacroResult();

		try {
			DataSet dsCert = platformData.getDataSet("input");

			if (dsCert.getRowCount() > 0) {

				String encoded = dsCert.getString(0, "CERT");
				String tyGubun = dsCert.getString(0, "TY_GUBUN");
				String noSjc = dsCert.getString(0, "NO_SJC");
				// Login 메세지 파싱
				Login login1 = new Login(JetsUtil.base64ToBytes(encoded));

				// 복호화하기 위한 인증서, 개인키, 패스워드 설정.
				login1.setupCipher(JeTS.getServerkmCert(0), JeTS.getServerkmPriKey(0), JeTS.getServerKmKeyPassword(0));

				// 로그인요청메시지 검증 및 파싱
				// loginData 를 만드는데 사용된 인증서의 유효성 검증여부(true: 검증, false: 검증안함)
				login1.parseLoginData(true);

				String ssnumber = new String(login1.getSsn());

				X509Certificate[] certs = login1.getSignerCerts();

				X509Certificate cert = certs[0];
				boolean ret = cert.VerifyIDN(ssnumber, login1.getRandom());
				if (ret) {

					String findSP = "DZZPR_XPASSWORDRESET_SELECT";
					if (tyGubun.equals("1")) {
						findSP = "DZZPR_XIDFIND_SELECT";
					}
					CENCallableMap param = new CENCallableMap();
					param.setString("CD_VENDOR", noSjc);

					List<List<Map<String, Object>>> array = (List<List<Map<String, Object>>>) cenCommonService
							.search(findSP, param);

					List<Map<String, Object>> list = null;
					if (array != null && array.size() > 0) {
						list = array.get(0);
					}

					if (list != null && list.size() > 0) {
						result.addDataSet("output0", list);
					}
				} else {
					result.setErrorCode(-9000);
					result.setErrorMsg("신원확인 검증에 실패했습니다.");
				}

			}
		} catch (Exception ex) {
			result.setErrorCode(-9000);
			result.setErrorMsg(ex.getMessage());
		}

		return result;
	}

	/*
	 * 서버 공개키 가져오기
	 */
	@RequestMapping(value = "/pki/kmcert.do", method = RequestMethod.POST)
	public NexacroResult getKmCert(PlatformData platformData) {
		NexacroResult result = new NexacroResult();

		try {
			DataSet dsCert = platformData.getDataSet("input");
			if (dsCert.getRowCount() > 0) {
				// String kmcert = JeTS.getPemKmCert();
				String kmcert = JeTS.getPemKmCert(dsCert.getInt(0, "IDX"));

				DataSet ds = new DataSet();
				ds.setName("output0");
				ds.addColumn("KMCERT", DataTypes.STRING);

				int row = ds.newRow();
				ds.set(row, "KMCERT", kmcert);
				result.addDataSet(ds);
			}
		} catch (Exception ex) {
			result.setErrorCode(-9000);
			result.setErrorMsg(ex.getMessage());
		}

		return result;
	}
	
	/*
	 * 개봉
	 */
	@RequestMapping(value = "/pki/openbid.do", method = RequestMethod.POST)
	public NexacroResult openBidData(PlatformData platformData) throws Exception {
		NexacroResult result = new NexacroResult();

		try {
			DataSet ds = platformData.getDataSet("input");

			if (ds.getRowCount() > 0) {
				String noBid = ds.getString(0, "NO_BID");

				String selectSP = "DCBPR_BIDMAGAM_DECRIPT_SELECT";
				CENCallableMap paramMap = new CENCallableMap();
				paramMap.put("NO_BID", noBid);

				List<List<Map<String, Object>>> array = (List<List<Map<String, Object>>>) cenCommonService
						.search(selectSP, paramMap);

				List<Map<String, Object>> list = null;
				if (array != null && array.size() > 0) {
					list = array.get(0);
				}

				if (list.size() > 0) {
					String keyval = "";
					Cipher cipher = null;
					Decoder decoder = Base64.getDecoder();

					DataSet dsUpdate = new DataSet();
					DataSet dsMagam = new DataSet();
					DataSet dsRanking = new DataSet();
					
					dsUpdate.setName("update");
					dsUpdate.addColumn("NO_BID", DataTypes.STRING);
					dsUpdate.addColumn("NO_PR", DataTypes.STRING);
					dsUpdate.addColumn("CD_COST", DataTypes.STRING);
					dsUpdate.addColumn("CD_VENDOR", DataTypes.STRING);
					dsUpdate.addColumn("UP_TT_HADO", DataTypes.BIG_DECIMAL);
					dsUpdate.addColumn("AM_TT_HADO", DataTypes.BIG_DECIMAL);
					dsUpdate.addColumn("UP_MATERIAL", DataTypes.BIG_DECIMAL);
					dsUpdate.addColumn("AM_MATERIAL", DataTypes.BIG_DECIMAL);
					dsUpdate.addColumn("UP_LABOR", DataTypes.BIG_DECIMAL);
					dsUpdate.addColumn("AM_LABOR", DataTypes.BIG_DECIMAL);
					dsUpdate.addColumn("UP_EQUIP", DataTypes.BIG_DECIMAL);
					dsUpdate.addColumn("AM_EQUIP", DataTypes.BIG_DECIMAL);
					dsUpdate.addColumn("UP_COST", DataTypes.BIG_DECIMAL);
					dsUpdate.addColumn("AM_COST", DataTypes.BIG_DECIMAL);

					dsMagam.setName("magam");
					dsMagam.addColumn("NO_BID", DataTypes.STRING);
					dsMagam.addColumn("TY_GUBUN", DataTypes.STRING);

					dsRanking.setName("ranking");
					dsRanking.addColumn("NO_BID", DataTypes.STRING);

					int nrow = dsMagam.newRow();
					dsMagam.set(nrow, "NO_BID", noBid);
					dsMagam.set(nrow, "TY_GUBUN", "개봉");

					nrow = dsRanking.newRow();
					dsRanking.set(nrow, "NO_BID", noBid);

					for (int i = 0; i < list.size(); i++) {
						Map<String, Object> map = list.get(i);
						int kidx = 0;
						if(map.containsKey("NO_CORP_IDX")) {
							kidx = (int)map.get("NO_CORP_IDX");
						}
						int oldkidx = kidx + 1;
						
						if (keyval.equals(map.get("DS_KEYVAL")) == false) {
							keyval = (String) map.get("DS_KEYVAL");
							if (StringUtils.isBlank(keyval))
								continue;

							try {
								cipher = decryptKey(kidx, keyval);
							} catch (Exception exc) {
								// 현재 인증서로 실패시 구인증서 사용
								cipher = decryptKey(oldkidx, keyval);							
							}
						}

						if (StringUtils.isBlank(keyval))
							continue;

						
						String noPr = (String) map.get("NO_PR");
						String cdCost = (String) map.get("CD_COST");
						String cdVendor = (String) map.get("CD_VENDOR");
						
						BigDecimal upTTHado =  decryptData(cipher, decoder, (String) map.get("UP_TT_HADO_ENC"));
						BigDecimal amTTHado = decryptData(cipher, decoder, (String) map.get("AM_TT_HADO_ENC"));
						BigDecimal upMaterial = decryptData(cipher, decoder, (String) map.get("UP_MATERIAL_ENC"));
						BigDecimal amMaterial = decryptData(cipher, decoder, (String) map.get("AM_MATERIAL_ENC"));
						BigDecimal upLabor = decryptData(cipher, decoder, (String) map.get("UP_LABOR_ENC"));
						BigDecimal amLabor = decryptData(cipher, decoder, (String) map.get("AM_LABOR_ENC"));
						BigDecimal upEquip = decryptData(cipher, decoder, (String) map.get("UP_EQUIP_ENC"));
						BigDecimal amEquip = decryptData(cipher, decoder, (String) map.get("AM_EQUIP_ENC"));
						BigDecimal upCost = decryptData(cipher, decoder, (String) map.get("UP_COST_ENC"));
						BigDecimal amCost = decryptData(cipher, decoder, (String) map.get("AM_COST_ENC"));

						// update
						nrow = dsUpdate.newRow();
						dsUpdate.set(nrow, "NO_BID", noBid);
						dsUpdate.set(nrow, "NO_PR", noPr);
						dsUpdate.set(nrow, "CD_COST", cdCost);
						dsUpdate.set(nrow, "CD_VENDOR", cdVendor);
						dsUpdate.set(nrow, "UP_TT_HADO", upTTHado);
						dsUpdate.set(nrow, "AM_TT_HADO", amTTHado);
						dsUpdate.set(nrow, "UP_MATERIAL", upMaterial);
						dsUpdate.set(nrow, "AM_MATERIAL", amMaterial);
						dsUpdate.set(nrow, "UP_LABOR", upLabor);
						dsUpdate.set(nrow, "AM_LABOR", amLabor);
						dsUpdate.set(nrow, "UP_EQUIP", upEquip);
						dsUpdate.set(nrow, "AM_EQUIP", amEquip);
						dsUpdate.set(nrow, "UP_COST", upCost);
						dsUpdate.set(nrow, "AM_COST", amCost);

					}

					DataSet dsProc = new DataSet("dsProc");
					dsProc.addColumn("TARGET", DataTypes.STRING);
					dsProc.addColumn("SP", DataTypes.STRING);

					int newRow = dsProc.newRow();
					dsProc.set(newRow, "TARGET", "update");
					dsProc.set(newRow, "SP", "DCBPR_BIDMAGAM_DECRIPT_UPDATE");
					newRow = dsProc.newRow();
					dsProc.set(newRow, "TARGET", "magam");
					dsProc.set(newRow, "SP", "DCBPR_BIDMAGAM_UPDATE");
					newRow = dsProc.newRow();
					dsProc.set(newRow, "TARGET", "ranking");
					dsProc.set(newRow, "SP", "DCBPR_BIDRANKING_UPDATE");

					platformData.addDataSet(dsProc);
					platformData.addDataSet(dsUpdate);
					platformData.addDataSet(dsMagam);
					platformData.addDataSet(dsRanking);
					result = cenNexacroService.saveNexa(platformData);
				}
			}
		} catch (Exception ex) {
			result.setErrorCode(-9000);
			result.setErrorMsg(ex.getMessage());
		}

		return result;
	}

	/*
	 * 키 복호화
	 */
	private Cipher decryptKey(int kidx, String keyval) throws Exception {
		EnvelopedData ed = new EnvelopedData(keyval.getBytes());
		ed.setupCipher(JeTS.getServerkmCert(kidx), JeTS.getServerkmPriKey(kidx),
				JeTS.getServerKmKeyPassword(kidx));
		String secret = new String(ed.getContent());
		byte[] decodeSecret = JetsUtil.decodeBase64(secret.getBytes("UTF8"));
		String decKey = new String(decodeSecret, "UTF8");
		byte[] byteDecKey = CENWebUtils.hexStringToByteArray(decKey);

		SecretKey sk = new SecretKeySpec(byteDecKey, "AES");
		AlgorithmParameterSpec paramSpec = new IvParameterSpec(byteDecKey);
		Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
		cipher.init(Cipher.DECRYPT_MODE, sk, paramSpec);
		return cipher;
	}

	/*
	 * 데이터 복호화
	 */
	private BigDecimal decryptData(Cipher cipher, Decoder decoder, String encData) throws Exception {
		BigDecimal bd = BigDecimal.ZERO;
		if (!StringUtils.isBlank(encData)) {
			byte[] decData = cipher.doFinal(decoder.decode(encData));
			String strDecData = new String(decData);
			if (!StringUtils.isBlank(strDecData)) {
				bd = new BigDecimal(strDecData);
			}
		}
		return bd;
	}

	/*
	 * 본사서명
	 */
	@RequestMapping(value = "/pki/sign.do", method = RequestMethod.POST)
	public NexacroResult signedData(HttpServletRequest request, PlatformData platformData) throws Exception {
		NexacroResult result = new NexacroResult();

		try {
			DataSet ds = platformData.getDataSet("input");

			if (ds.getRowCount() > 0) {

				for (int i = 0; i < ds.getRowCount(); i++) {

					String strVal = ds.getString(i, "DS_HASHVAL");
					
					// 계약서생성시 hash값이 생성안되는 경우가 있기 때문에 hash값이 null 이면 
					// 화면에서 체크후 /file/hashFile.do 호출후 처리하거나
					// 본사서명 서비스단에서 hashFile 서비스를 처리하는 방법으로 개선필요. 
					
					int kidx = 0;
					if(ds.containsColumn("NO_CORP_IDX")) {
						kidx = ds.getInt(i, "NO_CORP_IDX");
					}

					X509Certificate signCert = new X509Certificate(JeTS.getServerSignCert(kidx));

					Date expireDate = signCert.getNotAfter();
					if (expireDate.compareTo(new Date()) < 0) {
						throw new Exception("서버인증서가 만료되었습니다.");
					}
					
					SignedData sd = new SignedData(strVal.getBytes(), true);

					// 전자서명할 인증서와 키/비밀번호 설정
					sd.setIncludeIssuerCert(false);					
					// sd.setIncludeSigningTime(true); 기본값 false

//					EncPrivateKeyInfo sk = new EncPrivateKeyInfo(JeTS.getServerSignPriKey(kidx));
//					PrivateKey privKey = sk.decrypt(JeTS.getServerSignKeyPassword(kidx).toCharArray());
//					sd.setsignCert(JeTS.getServerSignCert(kidx), privKey);
					sd.setsignCert(JeTS.getServerSignCert(kidx), JeTS.getServerSignPriKey(kidx), JeTS.getServerSignKeyPassword(kidx));
					
					byte[] sdData = sd.sign(AlgorithmID.sha256);

//					sdData = sdTmp.removeContent();
//					SignedData sdTmp = new SignedData(sdData);

					ds.set(i, "DS_SIGNVAL", JetsUtil.toBase64String(sdData));
					ds.set(i, "DN_CERTORGNAME", signCert.getIssuerDNStr());
					ds.set(i, "DN_SIGNNAME", signCert.getSubjectDNStr());
				}

				ds.setName("output0");
				result.addDataSet(ds);
			}
		} catch (Exception ex) {
			LOGGER.error(ex.getMessage(), ex.getCause());
			result.setErrorCode(-9000);
			result.setErrorMsg(ex.getMessage());
		}

		return result;

	}
	
	/*
	 * 서명 검증
	 */
	@RequestMapping(value = "/pki/verify.do", method = RequestMethod.POST)
	public NexacroResult verifySignedData(HttpServletRequest request, PlatformData platformData) {
		NexacroResult result = new NexacroResult();

		try {
			DataSet ds = platformData.getDataSet("input");

			if (ds.getRowCount() > 0) {

				for (int i = 0; i < ds.getRowCount(); i++) {
					String encSignVal = ds.getString(i, "DS_SIGNVAL");
					String strVal = ds.getString(i, "DS_VAL");

					SignedData sd = new SignedData(encSignVal.getBytes());

					X509Certificate[] certs = sd.verify(true, strVal.getBytes());

					// 인증서 검증 및 DN 정보 출력
					for (int c = 0; c < certs.length; c++) {
						PKIXCertPath cp = new PKIXCertPath(certs[c], "PkiPath");
						ExtendedPKIXParameters cpp = new ExtendedPKIXParameters(JeTS.getTAnchorSet());
						CertPathValidator cpvi = CertPathValidator.getInstance("PKIX", "JeTS");
						// PKIXCertPathValidatorResult cpvr = (PKIXCertPathValidatorResult)
						cpvi.validate(cp, cpp);
						// System.out.println("검증성공:" + certs[c].getSubjectDNStr());
					}

					byte[] content = sd.getContent();
					if (content != null) {
						String strSignVal = new String(content);
						if (strSignVal.equals(strVal)) {
							ds.set(i, "DS_VERIFY", true);
						}
					}
				}
			}
		} catch (Exception ex) {
			result.setErrorCode(-9000);
			result.setErrorMsg(ex.getMessage());
		}

		return result;
	}

	/*
	 * WAS 재시작 없이 서버인증서 교체시 reload 호출 필요
	 */
	@RequestMapping(value = "/pki/reloadCert.do")
	public NexacroResult reloadCert(HttpServletRequest request, PlatformData platformData, Authentication auth) {
		NexacroResult result = new NexacroResult();

		if (!CENAuthenticationHelper.isAuthenticated(request)) {
			result.setErrorCode(-9999);
			result.setErrorMsg("Please use after login.");
		} else {
			try {
				this.reloadCertProc();
			} catch (Exception e) {
				result.setErrorCode(-9000);
				result.setErrorMsg(e.getMessage());
			}
		}
		
		return result;
	}

	private void reloadCertProc() throws X509ExtensionException, CertificateException, IOException, ASN1Exception, PKCSException {
		
//		String beforePemCert = JeTS.getPemKmCert();
//		String afterPemCert = "";
		String location = pkiSetting.getLocation();
		if (location != null && !StringUtils.isBlank(location)) {
			File file = new File(location);
			if (file.exists()) {
				JeTS.reInstallProvider(location);					
//				afterPemCert = JeTS.getPemKmCert();
			}
		}
	}

	/*
	 * 서버인증서 초기셋팅
	 */
	@RequestMapping(value = "/pki/initCert.do")
	public NexacroResult initCert(HttpServletRequest request, PlatformData platformData, Authentication auth)
			throws IOException, ServletException {

		NexacroResult result = new NexacroResult();

		if (!CENAuthenticationHelper.isAuthenticated(request)) {
			result.setErrorCode(-9999);
			result.setErrorMsg("Please use after login.");
		} else {
			
			CENCallableMap selMap = new CENCallableMap();
			selMap.put("DS_SAUP", "");
			
			try {
				List<List<Map<String, Object>>> list = (List<List<Map<String, Object>>>) cenCommonService
						.search("DZZPR_SERVERCERT_SELECT", selMap);
				if (list.size() > 0) {

					List<CENProcData> listProcData = new ArrayList<CENProcData>();
					Map<String, List<CENCallableMap>> targetMaps = new HashMap<String, List<CENCallableMap>>();
					
					List<CENCallableMap> listParamMap = new ArrayList<CENCallableMap>();
					List<Map<String, Object>> item = list.get(0);
					for (int i = 0; i < item.size(); i++) {
						Map<String, Object> map = item.get(i);
						if (map.get("NO_IDX") != null) {

							X509Certificate serverKmCert = new X509Certificate(
									JeTS.getServerkmCert(((BigDecimal) map.get("NO_IDX")).intValue()));

							String issueDN = serverKmCert.getIssuerDNStr();
							String subjectDN = serverKmCert.getSubjectDNStr();
							BigInteger serialNumber = serverKmCert.getSerialNumber();
							Date startDate = serverKmCert.getNotBefore();
							Date expireDate = serverKmCert.getNotAfter();
							String pemCert = JetsUtil.toPem(serverKmCert);

							CENCallableMap paramMap = new CENCallableMap();
							paramMap.put("NO_SAUP", map.get("NO_SAUP"));
							paramMap.put("YN_OLD", map.get("YN_OLD"));
							paramMap.put("DS_ISSUEDN", issueDN);
							paramMap.put("DS_SUBJECTDN", subjectDN);
							paramMap.put("NO_SERIAL", serialNumber.toString());
							paramMap.put("DT_START", startDate);
							paramMap.put("DT_END", expireDate);
							paramMap.put("DS_PEM", pemCert.replace("\r\n", ""));
							paramMap.put("ID_USER", "SYSTEM");
							listParamMap.add(paramMap);
						}
					}
					
					CENProcData procData = new CENProcData();
					procData.SP = "DZZPR_SERVERCERT_SAVE";
					procData.TARGET = "save";					
					listProcData.add(procData);					
					targetMaps.put(procData.TARGET, listParamMap);
					
					cenCommonService.save(listProcData, targetMaps);
				}
			} catch (Exception e) {
				result.setErrorCode(-1);
				result.setErrorMsg(e.getMessage());
			}
		}

		return result;
	}
	
	/*
	 * 서버인증서 업로드 적용
	 */
	@RequestMapping(value = "/pki/saveCert.do")
	public ModelAndView saveCert(MultipartHttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {

		ModelAndView view = new ModelAndView();

		PlatformData resData = new PlatformData();
		VariableList resVarList = resData.getVariableList();

		
		if (!CENAuthenticationHelper.isAuthenticated(request)) {
			resVarList.add("ErrorCode", -9999);
			resVarList.add("ErrorMsg", "Please use after login.");
		} else {

			if (StringUtils.isBlank(pkiSetting.getLocation())) {
				resVarList.add("ErrorCode", -9000);
				resVarList.add("ErrorMsg", "not setting pki.");

			} else {
				int step = 0;
				
				try {
					String no_saup = request.getParameter("NO_SAUP");
					String no_idx = request.getParameter("NO_IDX");
					String ds_path = request.getParameter("DS_PATH");
					String id_user = request.getParameter("ID_USER");

					String contextRealPath = pkiSetting.getLocation().replace("/", File.separator);
					contextRealPath = contextRealPath.substring(0, contextRealPath.lastIndexOf(File.separator));
					contextRealPath = contextRealPath + File.separator + "ServerCert";
					Iterator<String> iterator = request.getFileNames();

					// Iterator iterator = parts.iterator();
					String certPath = contextRealPath + File.separator + ds_path;
					String certOldPath = contextRealPath + File.separator + ds_path + "_old";
					String tmpPath = contextRealPath + File.separator + "Temp";
					String tmpCertPath = tmpPath + File.separator + ds_path;

					File tmpfile = new File(tmpPath);
					if (!tmpfile.exists()) {
						tmpfile.mkdirs();
					}

					File tmpCertfile = new File(tmpCertPath);
					if (tmpCertfile.exists()) {
						FileUtils.deleteDirectory(tmpCertfile);
					}
					
					if (iterator.hasNext()) {
						String fileid = iterator.next();
						MultipartFile item = request.getFile(fileid);

						if (item.getName() != null) {
							String fileName = item.getOriginalFilename();
							fileName = FilenameUtils.getName(fileName);
							if (!FilenameUtils.getExtension(fileName).toLowerCase().equals("zip")) {
								step = 0;
								throw new Exception("zip 파일이 아닙니다.");
							}
							
							File zipfile = new File(tmpPath + File.separator, fileName);
							item.transferTo(zipfile);
							step = 1;

							CENZipUtils.decompress(zipfile.getAbsolutePath(), tmpCertPath);
							step = 2;
							
							// 인증서 파일 체크
							File fileKmCert = new File(tmpCertPath + File.separator + "kmCert.der");
							File fileKmPri = new File(tmpCertPath + File.separator + "kmPri.key");
							File fileSignCert = new File(tmpCertPath + File.separator + "signCert.der");
							File fileSignPri = new File(tmpCertPath + File.separator + "signPri.key");
							
							if(fileKmCert.exists() && fileKmPri.exists() && fileSignCert.exists() && fileSignPri.exists()) {
								X509Certificate signCert = new X509Certificate(Files.readAllBytes(fileSignCert.toPath()));
								X509Certificate kmCert = new X509Certificate(Files.readAllBytes(fileKmCert.toPath()));
								
								String issueDN = signCert.getIssuerDNStr();
								String subjectDN = signCert.getSubjectDNStr();
								BigInteger serialNumber = signCert.getSerialNumber();
								Date startDate = signCert.getNotBefore();
								Date expireDate = signCert.getNotAfter();
								String pemCert = JetsUtil.toPem(kmCert);
								
								// 기존 인증서랑 체크
								X509Certificate serverSignCert = new X509Certificate(JeTS.getServerSignCert(Integer.parseInt(no_idx)));
								if(serverSignCert.getSerialNumber().equals(serialNumber)) {
									step = 0;
									throw new Exception("기존 인증서와 동일한 인증서입니다.");
								}
								
								// expireDate 체크
								if (expireDate.compareTo(new Date()) < 0) {
									step = 0;
									throw new Exception("만료된 인증서입니다.");
								}

								step = 3;
								
								CENCallableMap paramMap =new CENCallableMap();
								paramMap.put("NO_SAUP", no_saup);
								paramMap.put("YN_OLD", "N");
								paramMap.put("DS_ISSUEDN", issueDN);
								paramMap.put("DS_SUBJECTDN", subjectDN);
								paramMap.put("NO_SERIAL", serialNumber.toString());
								paramMap.put("DT_START", startDate);
								paramMap.put("DT_END", expireDate);
								paramMap.put("DS_PEM", pemCert.replace("\r\n", ""));
								paramMap.put("ID_USER", id_user);
								cenCommonService.save("DZZPR_SERVERCERT_SAVE", paramMap);
								step = 4;
								
								// 기존 인증서 구인증서 폴더로 복사
								File certfile = new File(certPath);
								if(certfile.exists()) {
									File certOldfile = new File(certOldPath);
									if(!certOldfile.exists()) {
										certOldfile.mkdir();
									}
									
									FileUtils.copyDirectory(certfile, certOldfile, true);
								}
								step = 5;
								
								// 신규 인증서 복사
								FileUtils.copyDirectory(tmpCertfile, certfile, true);
								step = 6;
								
								this.reloadCertProc();
								step = 7;

								resVarList.add("ErrorCode", 0);
								resVarList.add("ErrorMsg", "SUCCESS");
							} else {
								step = 0;
								throw new Exception("서버인증서 파일이 없습니다.\r\n(kmCer.der, kmPri.key, signCert.der, signPri.key)");
							}
						}
					}

				} catch (MaxUploadSizeExceededException ex) {
					throw ex;
				} catch (UncategorizedSQLException e) {
					String errMsg = e.getMessage();
					resVarList.add("ErrorCode", -8000);
					resVarList.add("ErrorMsg", errMsg);
					LOGGER.info(e.getMessage(), e.getCause());
				} catch (Exception e) {
					String errMsg = e.getMessage();
					switch (step) {
						case 1:
							errMsg = "zip파일 압축해제 실패.";
							break;
						case 2:
							errMsg = "인증서 정보 확인 오류.";
							break;
						case 3:
							errMsg = "인증서 정보 저장 실패.";
							break;
						case 4:
							errMsg = "기존 인증서 구인증서로 복사 실패.";
							break;
						case 5:
							errMsg = "신규 인증서 복사 실패.";
							break;
						case 6:
							errMsg = "인증서 재로딩 실패.";
							break;
					}
					resVarList.add("ErrorCode", -9000);
					resVarList.add("ErrorMsg", errMsg);
					LOGGER.info(e.getMessage(), e.getCause());
				} catch (Throwable e) {
					resVarList.add("ErrorCode", -1);
					resVarList.add("ErrorMsg", e.getMessage());
					LOGGER.info(e.getMessage(), e.getCause());
				}
			}
		}

		view.addObject("data", resData);
		view.setViewName("file/saveFile");

		return view;
	}

	@GetMapping(value = "/pki/testdeckey.do")
	public ResponseEntity<String> testDecryptKey() {
		String keyval = "MIIB4gYJKoZIhvcNAQcDoIIB0zCCAc8CAQAxggFzMIIBbwIBADBXME8xCzAJBgNVBAYTAktSMRIwEAYDVQQKDAlDcm9zc0NlcnQxFTATBgNVBAsMDEFjY3JlZGl0ZWRDQTEVMBMGA1UEAwwMQ3Jvc3NDZXJ0Q0EzAgQBZHzFMA0GCSqGSIb3DQEBAQUABIIBAHfeM30NNNlZN1x4/s7u+Y60TDxhy849FpND39gg9Y9Mgq8VnAbQU65EzXfqyfXgdn4LLt5gC/Op9r/+M0b81uT8d7N9p8eyoPJuMI8gWtksRPiCSGbnUvOBMiyhxFqMuTp4y+LbHgiESvHowaU0gJyWkDTuWm4g2JKfxd7y9+Y/r9SG2+04tCOkBFpXawWJkob0TI+8xUQEXgagR3OdSEFxbSz5PHY8jY3wK8GokyNCLDkvxnkAHqQLnwmd43T067jN1o6c6bJ+2Ulk30zEOITikNOKO0XW9XblkT9vYwUail2922PTR2OYWchL/lxk6XKvZHTSHy7iHNhXFdtcC5UwUwYJKoZIhvcNAQcBMBQGCCqGSIb3DQMHBAiY7yht/6xG34AwECYc88qV89v3TFMiV6bX4ZRSZoQMcGRdRq+9hbEnpN3KTTeba/awhb2iNhjPKEPH";

		try {
			Cipher cipher = decryptKey(0, keyval);
		} catch (Exception e) {
			// 구인증서
			try {
				Cipher cipher = decryptKey(1, keyval);
			} catch (Exception e1) {
				return ResponseEntity.ok(e1.getMessage());
			}
		}
		
		return ResponseEntity.ok("TEST");
	}

	@GetMapping(value = "/pki/testsign.do")
	public ResponseEntity<String> testSign() {
		String strVal = "testdata";
		int kidx = 0;
		
		try {
			X509Certificate signCert = new X509Certificate(JeTS.getServerSignCert(kidx));
			
			SignedData sd = new SignedData(strVal.getBytes(), true);
	
			// 전자서명할 인증서와 키/비밀번호 설정
			sd.setIncludeIssuerCert(false);					
			// sd.setIncludeSigningTime(true); 기본값 false
	
//			EncPrivateKeyInfo sk = new EncPrivateKeyInfo(JeTS.getServerSignPriKey(kidx));
//			PrivateKey privKey = sk.decrypt(JeTS.getServerSignKeyPassword(kidx).toCharArray());
//			sd.setsignCert(JeTS.getServerSignCert(kidx), privKey);
			sd.setsignCert(JeTS.getServerSignCert(kidx), JeTS.getServerSignPriKey(kidx), JeTS.getServerSignKeyPassword(kidx));
			
			byte[] sdData = sd.sign(AlgorithmID.sha256);
	
			return ResponseEntity.ok(JetsUtil.toBase64String(sdData));
	//		sdData = sdTmp.removeContent();
	//		SignedData sdTmp = new SignedData(sdData);
		} catch (Exception e) {
			return ResponseEntity.ok(e.getMessage());
		}
	}

	@GetMapping(value = "/pki/testverify.do")
	public ResponseEntity<String> testverify() {
		String encSignVal = "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";
		String strVal = "testdata";

		try {
			SignedData sd = new SignedData(encSignVal.getBytes());
	
			X509Certificate[] certs = sd.verify(true, strVal.getBytes());
	
			// 인증서 검증 및 DN 정보 출력
			for (int c = 0; c < certs.length; c++) {
				PKIXCertPath cp = new PKIXCertPath(certs[c], "PkiPath");
				ExtendedPKIXParameters cpp = new ExtendedPKIXParameters(JeTS.getTAnchorSet());
				CertPathValidator cpvi = CertPathValidator.getInstance("PKIX", "JeTS");
				// PKIXCertPathValidatorResult cpvr = (PKIXCertPathValidatorResult)
				 cpvi.validate(cp, cpp);
				// System.out.println("검증성공:" + certs[c].getSubjectDNStr());
			}
			
			byte[] content = sd.getContent();
			if (content != null) {
				String strSignVal = new String(content);
				if (strSignVal.equals(strVal)) {
					return ResponseEntity.ok("OK");
				}
			}
		} catch (Exception e) {
			return ResponseEntity.ok(e.getMessage());
		}
		return ResponseEntity.ok("FAIL");
	}
	
//
//	/*
//	 * 테스트
//	 */
//	@RequestMapping(value = "/pki/signtest.do", method = RequestMethod.GET)
//	public String signedDataTest() throws Exception {
//		String result = "";
//
//		try {
//
//			String strVal = "테스트/1234";
//
//			SignedData sd = new SignedData(strVal.getBytes("x-windows-949"), true);
//
//			// 전자서명할 인증서와 키/비밀번호 설정
//			sd.setIncludeIssuerCert(false);
//			// sd.setIncludeSigningTime(true); 기본값 false
//			sd.setsignCert(JeTS.getServerSignCert(0), JeTS.getServerSignPriKey(0), JeTS.getServerSignKeyPassword(0));
//
//			byte[] sdData = sd.sign(AlgorithmID.sha256);
//
//			String strSignVal = JetsUtil.toBase64String(sdData);
//
//			int a = 0;
//			a += 1;
//
//		} catch (Exception ex) {
//
//			LOGGER.debug(ex.getMessage(), ex.getCause());
//		}
//
//		return result;
//
//	}
//
//	@RequestMapping(value = "/pki/verifytest.do", method = RequestMethod.GET)
//	public String verifySignedDataTest() {
//		String result = "";
//		try {
//
//			String encSignVal = "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";
//			String strVal = "ecba2c6e768fffca30ad2f0bc5510f773668bafdd8ccb1c01b29dbb37217b161";
//
//			SignedData sd = new SignedData(encSignVal.getBytes());
//
//			X509Certificate[] certs = sd.verify(false, strVal.getBytes("EUC-KR"));
//
//			// 인증서 검증 및 DN 정보 출력
//			for (int c = 0; c < certs.length; c++) {
//				PKIXCertPath cp = new PKIXCertPath(certs[c], "PkiPath");
//				ExtendedPKIXParameters cpp = new ExtendedPKIXParameters(JeTS.getTAnchorSet());
//				CertPathValidator cpvi = CertPathValidator.getInstance("PKIX", "JeTS");
//				PKIXCertPathValidatorResult cpvr = (PKIXCertPathValidatorResult) cpvi.validate(cp, cpp);
//				//System.out.println("검증성공:" + certs[c].getSubjectDNStr());
//			}
//
//			byte[] content = sd.getContent();
//			if (content != null) {
//				String strSignVal = new String(content, "EUC-KR");
//				if (strSignVal.equals(strVal)) {
//					result = "true";
//				}
//			}
//
//		} catch (Exception ex) {
//			LOGGER.debug(ex.getMessage(), ex.getCause());
//		}
//		return result;
//
//	}
//
//	public void envelopedData() throws Exception {
//		String msg = "";
//		EnvelopedData ed = new EnvelopedData(msg.getBytes());
//		ed.setupCipher(JeTS.getServerkmCert(0), JeTS.getServerkmPriKey(0), JeTS.getServerKmKeyPassword(0));
//		String envData = new String(ed.envelop());
//
//	}
//
//	@RequestMapping(value = "/pki/decrypt.do", method = RequestMethod.GET)
//	public void decryptEnvelopedData() throws Exception {
//		String msg = "MIIB4gYJKoZIhvcNAQcDoIIB0zCCAc8CAQAxggFzMIIBbwIBADBXME8xCzAJBgNVBAYTAktSMRIwEAYDVQQKDAlUcmFkZVNpZ24xFTATBgNVBAsMDEFjY3JlZGl0ZWRDQTEVMBMGA1UEAwwMVHJhZGVTaWduQ0EzAgRZwe12MA0GCSqGSIb3DQEBAQUABIIBAFaZOYPKDhPyXBYzp5OJKPQ0Kq9AJEKPhLBJjCKDimh/XRz81PAdM7ctuV9xLEaLsCK9AYsHvQn7LsfFrxa3TapgjJIpczwbcpylD0f9WQoD858Aa5idBtASGHyzH8owezlrpIosaem70On50yQX38SOzVlrRqEKemSRlZIuUSSL8Pw+W6Ui6f+qmMH7uWzQrCYejXmgYfmjw877Ga0p6jO4V3cZuy9KifW/xaQZ48DfC0knNXUie/UeMMIuDLV0WFEewJth0hjLlrhBNN5yOVgdLtzBGpa2G33kSsj2m6gx7tlgmUQlO6bpO89tIle1m+eW9/umtJUeZJm9fHDGCVgwUwYJKoZIhvcNAQcBMBQGCCqGSIb3DQMHBAgunkyZzniBk4AwyTNMNCoiAkVPgj2StTEpfEYUN45i+19+3eGK9YfRqLNB3YQSGYb/9PaHJraWg9DI";
//		EnvelopedData ed = new EnvelopedData(msg.getBytes());
//		ed.setupCipher(JeTS.getServerkmCert(0), JeTS.getServerkmPriKey(0), JeTS.getServerKmKeyPassword(0));
//		String secret = new String(ed.getContent());
//		byte[] decodeSecret = JetsUtil.decodeBase64(secret.getBytes("UTF8"));
//		String decKey = new String(decodeSecret, "UTF8");
//		byte[] byteDecKey = CENWebUtils.hexStringToByteArray(decKey);
////		String orgKey = new String(byteDecKey, "UTF8");
//
////		byte[] key = new BigInteger(stringToHex(orgKey),16).toByteArray();
////		byte[] iv = new BigInteger(stringToHex(orgKey),16).toByteArray();
//		
////		String hexText = new BigInteger(byteDecKey).toString(16);
////		System.out.println("key:" + new String(hexText));
////		String hexText2 = new BigInteger(byteDecKey).toString(16);
////		System.out.println("iv:" + new String(hexText2));
//		
//		String test = "N5DRgFor2Y73LTItzyNnhA==";
//		SecretKey sk = new SecretKeySpec(byteDecKey, "AES");
//		AlgorithmParameterSpec paramSpec = new IvParameterSpec(byteDecKey);
//		Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
//
//		cipher.init(Cipher.DECRYPT_MODE, sk, paramSpec);
//		Decoder decoder = Base64.getDecoder();
//		byte[] decData = cipher.doFinal(decoder.decode(test));
//		LOGGER.debug(new String(decData));
//	}

}
