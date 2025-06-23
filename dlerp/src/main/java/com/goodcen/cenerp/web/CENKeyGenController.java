package com.goodcen.cenerp.web;

import java.security.MessageDigest;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;

import blowfishj.BlowfishEasy;

/**
 * 
 * @filename CENKSRMController.java
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
 *  2021. 06. 21.	kjiwon         한진중공업 키 생성
 * 
 *      </pre>
 */
@Controller("cenKeyGenController")
public class CENKeyGenController {

	private static final String KEY = "pINrlspYeE"; // 한진중공업 KEY(건설)
	//private static final String KEY = "pINrly312B"; // 한진중공업 KEY(조선)
	
	/*
	 * siteKey
	 */
	@RequestMapping(value = "/auth/ksrm.do", method = RequestMethod.POST)
	public NexacroResult getSiteKey(HttpServletRequest request, PlatformData platformData) throws Exception {
		NexacroResult result = new NexacroResult();

		try {
	        SimpleDateFormat encdDateFormat = new SimpleDateFormat("ddHHmmss"); 
	        Calendar encdCalendar = Calendar.getInstance();                 
	        String encdtoday  =  "";     //fKey구성에쓰일 시간값
	        encdtoday = encdDateFormat.format(encdCalendar.getTime()); 

	        BlowfishEasy bfes = new BlowfishEasy(KEY.toCharArray());
	        String finalkey = bfes.encryptString(encdtoday);
	        
	        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
	        Map<String, Object> map = new HashMap<String, Object>();
	        map.put("siteKey", finalkey);
	        list.add(map);
	        
	        result.addDataSet("output0", list);
		} catch (Exception ex) {
			result.setErrorCode(-9000);
			result.setErrorMsg(ex.getMessage());
		}

		return result;
	}
	
}
