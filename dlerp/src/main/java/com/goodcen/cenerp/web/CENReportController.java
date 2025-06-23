package com.goodcen.cenerp.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.carbonco.security.accesslog.PrivacyLogSinker;
import com.fasterxml.jackson.core.io.JsonStringEncoder;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.goodcen.common.nexacro.service.CENNexacroService;
import com.goodcen.common.service.CENCommonService;
import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro.uiadapter17.spring.core.data.convert.ConvertDefinition;
import com.nexacro.uiadapter17.spring.core.data.support.DataSetToListConverter;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.PlatformData;

@Controller("cenReportController")
public class CENReportController {

	@Value("${spring.profiles.active}")
	private String activeProfile;
	
	@Resource(name="cenCommonService")
	private CENCommonService cenCommonService;

	@Resource(name = "cenNexacroService")
	private CENNexacroService cenNexacroService;
	
	@Autowired
	private PrivacyLogSinker privacyLogSinker;
	
	/**
	 * 레포트 ODI방식
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/report/ozviewer.do", method=RequestMethod.POST)
	public ModelAndView getOZ(HttpServletRequest request) {
		ModelAndView view = new ModelAndView();

		if (activeProfile.equals("default") || activeProfile.equals("dev")) {
			view.setViewName("report/dozviewer");
		}
		
		try {
			if (request.getParameter("reportpath") != null) {
				
				PlatformData platformParam = new PlatformData();
				if (request.getParameter("formparams") != null) {
					platformParam.loadXml(request.getParameter("formparams"));
				}
				PlatformData platformOdi = new PlatformData();
				if (request.getParameter("odiparams") != null) {
					platformOdi.loadXml(request.getParameter("odiparams"));
				}				
				
				view.addObject("reportname", request.getParameter("reportpath"));
				view.addObject("odinames", request.getParameter("odinames"));
				view.addObject("context", request.getParameter("context"));	
				
				List<String> listParam = new ArrayList<String>();
				if(platformParam.getDataSetCount() > 0) {
					DataSet ds = platformParam.getDataSet(0);
					for(int r = 0; r < ds.getRowCount(); r++) {
						listParam.add(ds.getString(r, "PARAM") + "=" + ds.getString(r, "VALUE"));
					}
				}

				Map<String, List<String>> mapOdi = new HashMap<String, List<String>>();
				if	(platformOdi.getDataSetCount() > 0) {
					DataSet ds = platformOdi.getDataSet(0);
					String odiname = "";
					for(int r = 0; r < ds.getRowCount(); r++) {
						odiname = ds.getString(r, "ODI_NAME");
						if(!mapOdi.containsKey(odiname)) {
							mapOdi.put(odiname, new ArrayList<String>());
						}
						List<String> item = mapOdi.get(odiname);
						item.add(ds.getString(r, "PARAM") + "=" + ds.getString(r, "VALUE"));						
					}
				}

				ObjectMapper mapper = new ObjectMapper();
				view.addObject("formparams", mapper.writeValueAsString(listParam));
				view.addObject("odiparams", mapper.writeValueAsString(mapOdi));
				
			}
		}
		catch(Exception exc) {
			view.addObject("msg", "wrong report data");
			view.setViewName("error/error");
		}
		return view;
	}
	
	/**
	 * 레포트 JSON방식
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/report/viewer.do", method=RequestMethod.POST)
	public ModelAndView getOZ_json(HttpServletRequest request) {
		ModelAndView view = new ModelAndView();

//		if (activeProfile.equals("default") || activeProfile.equals("dev")) {
//			view.setViewName("report/dviewer");
//		}
		
		try {
			if (request.getParameter("args") != null && request.getParameter("reportpath") != null) {
				
				PlatformData platformParam = new PlatformData();
				if (request.getParameter("params") != null && StringUtils.isNotBlank(request.getParameter("params"))) {
					platformParam.loadXml(request.getParameter("params"));
					for (int i = 0; i < 10; i++) {
						if (request.getParameter("params" + (i + 1)) != null) {
							platformParam.loadXml(request.getParameter("params" + (i + 1)));
						}
					}
				}
				
				PlatformData platformData = new PlatformData();
				platformData.loadXml(request.getParameter("args"));
				
				NexacroResult result = cenNexacroService.searchNexa(platformData);
				if (result.getErrorCode() < 0) {
					throw new Exception("wrong procedure data");					
				}
				
				privacyLogSinker.saveLog(request.getParameter("log"), platformData, result, getIp(request));
				
				view.addObject("reportname", request.getParameter("reportpath"));
				view.addObject("pcount", (result.getPlatformData().getDataSetCount()>0?1:0)+1);

				ObjectMapper mapper = new ObjectMapper();
				// com.fasterxml.jackson 2.9.10 사용시
				//JsonStringEncoder encoder = BufferRecyclers.getBufferRecycler();
				JsonStringEncoder encoder = new JsonStringEncoder();
				
				DataSetToListConverter converter = new DataSetToListConverter();
				ConvertDefinition definition = new ConvertDefinition("list");
				definition.setGenericType(Map.class);
				
				String jsonparam = "";
				for (int i = 0; i < platformParam.getDataSetCount(); i++) {
					if (platformParam.getDataSet(i).containsColumn("DataSetRowType")) {
						platformParam.getDataSet(i).removeColumn("DataSetRowType");
					}
					Object listParam = converter.convert(platformParam.getDataSet(i), definition);
					jsonparam += (i == 0 ? "" : ",") + "\\\"PARAM" + (i == 0 ? "" : "" + i) + "\\\":" + String.valueOf(encoder.quoteAsString(mapper.writeValueAsString(listParam)));
				}
				view.addObject("params", "{" + jsonparam + "}");
				
				DataSetList dsList = result.getPlatformData().getDataSetList();
				String json = "";
				if(dsList.size() > 0) {
					int i = 1;
					for(int k = 0; k < dsList.size(); k++) {						 
						List<Map<String, Object>> listParam = converter.convert(dsList.get(k), definition);
						for(Map<String, Object> map : listParam) {
							map.remove("DataSetRowType");
						}
	
						if (!json.equals("")){
							json += ",";
						}
						json += "\\\"Data" + i + "\\\":" + String.valueOf(encoder.quoteAsString(mapper.writeValueAsString(listParam))) + "";
						i++;
					}
					view.addObject("args", "{" + json + "}");
				}
		
				view.addObject("context", request.getParameter("context"));
			}
		}
		catch(Exception exc) {
			view.addObject("msg", "wrong report data");
			view.setViewName("error/error");
		}
		return view;
	}

	/**
	 * 레포트 JSON 데이터 가져오기
	 * @param request
	 * @param platformData
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/report/json.do", method=RequestMethod.POST)
	public NexacroResult getOZJson(HttpServletRequest request, PlatformData platformData) throws Exception {

		NexacroResult jsonData = new NexacroResult();
		
		try {
			NexacroResult result = cenNexacroService.searchNexa(platformData);
			if (result.getErrorCode() < 0) {
				throw new Exception("wrong procedure data");					
			}
			
			ObjectMapper mapper = new ObjectMapper();
			DataSetToListConverter converter = new DataSetToListConverter();
			ConvertDefinition definition = new ConvertDefinition("list");
			definition.setGenericType(Map.class);
			
			DataSetList dsList = result.getPlatformData().getDataSetList();
			String json = "";
			if(dsList.size() > 0) {
				int i = 1;
				for(int k = 0; k < dsList.size(); k++) {
					List<Map<String, Object>> listParam = converter.convert(dsList.get(k), definition);
					for(Map<String, Object> map : listParam) {
						map.remove("DataSetRowType");
					}
	
					if (!json.equals("")){
						json += ",";
					}
					json += "\\\"Data" + i + "\\\":" + mapper.writeValueAsString(listParam).replace("\\\"", "\\\\\\\"") + "";
					i++;
				}
			}
			jsonData.setErrorMsg("{" + json + "}");
			jsonData.setErrorCode(0);
		}
		catch(Exception exc) {
			jsonData.setErrorMsg("wrong report data");
			jsonData.setErrorCode(NexacroException.DEFAULT_ERROR_CODE);
		}
		
		return jsonData;
	}

	private String getIp(HttpServletRequest request) {
		String ip = request.getHeader("X-Real-IP");
		if (ip == null) {
			ip = request.getRemoteAddr();
		}

		return ip;
	}
	
}

