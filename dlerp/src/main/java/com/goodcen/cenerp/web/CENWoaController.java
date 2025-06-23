package com.goodcen.cenerp.web;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import javax.annotation.Resource;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.goodcen.common.service.CENCommonService;

@Controller("cenWoaController")
public class CENWoaController {

	@Resource(name = "cenCommonService")
	private CENCommonService cenCommonService;

	@RequestMapping(value = "/api/account.do", method = RequestMethod.GET)
	@ResponseBody
	public String getAccountName(
			@RequestParam("url") String url,
			@RequestParam("param1") String param1,
			@RequestParam("param2") String param2,
			@RequestParam("type") String type,
			@RequestParam("amt") String amt) {
		try {
			CloseableHttpClient httpClient = HttpClients.createDefault();
			String lastChar = url.substring(url.length() - 1);
			if (!lastChar.equals("/")) {
				url += "/";
			}
			
	        HttpGet httpGet = new HttpGet(url + param1 + "/" + param2 + "?type=" + type + "&amt=" + amt);
	        CloseableHttpResponse httpResponse = httpClient.execute(httpGet);
	 
	        BufferedReader reader = new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent()));
	 
	        String inputLine;
	        StringBuffer response = new StringBuffer();
	        while ((inputLine = reader.readLine()) != null) {
	            response.append(inputLine);
	        }
	        reader.close();
	 
	        httpClient.close();
	        
			return response.toString();
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		return "";
	}
	
}
