package com.goodcen.cenerp.web;

import java.io.IOException;
import java.util.ArrayList;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.goodcen.cenerp.security.jwt.CENJwtTokenProvider;
import com.goodcen.common.security.user.CENUserDetailsService;
import com.goodcen.common.service.CENCommonService;

@Controller("cenApprovalController")
public class CENApprovalController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(CENApprovalController.class);

	@Value("${web.root:/}")
	private String webRoot;

	@Value("${tax.url}")
	private String taxUrl;
	
	@Autowired
	private CENJwtTokenProvider cenJwtTokenProvider;

	@Resource
    private CENUserDetailsService userDetailsService;

	
	@Resource(name="cenCommonService")
	private CENCommonService cenCommonService;
	
	@RequestMapping(value = "/api/approval/files.do", method = RequestMethod.GET)
	public void getApprovalAttachementFiles(
			HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value = "PARAM") String param
	) throws Exception {
		String urlParam = param.replaceAll(":", "=").replaceAll(",", "&");

		if (!urlParam.contains("CD_MODULE")) {
			urlParam = "CD_MODULE=cmm&" + urlParam;
		}
		if (!urlParam.contains("formname")) {
			urlParam = "formname=cmm/cmmFileManager.xfdl&" + urlParam;
		} else {
			urlParam = urlParam.replaceAll("formname=", "formname=erp/");
		}
		
		try {
			response.sendRedirect(webRoot + "quickview.html?" + urlParam);
			return;
		} catch (IOException e) {
			LOGGER.error(e.getMessage());
		}

		return;
	}

	@RequestMapping(value = "/api/approval/tax.do", method = RequestMethod.GET)
	public void getApprovalTax(
			HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value = "PARAM") String param
	) throws Exception {
		ArrayList<String> arrParam = new ArrayList<String>();
		String[] params = param.split(",");
		for (int i = 0; i < params.length; i++) {
			arrParam.add(params[i].replace(":", "="));
		}
		
		String sParam = String.join("&", arrParam);
		String urlParam = "?" + sParam;
		
		try {
			response.sendRedirect(taxUrl + urlParam);
			return;
		} catch (IOException e) {
			LOGGER.error(e.getMessage());
		}

		return;
	}
}
