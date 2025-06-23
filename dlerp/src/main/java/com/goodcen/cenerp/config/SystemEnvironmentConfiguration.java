package com.goodcen.cenerp.config;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.annotation.Resource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.goodcen.common.model.CENCallableMap;
import com.goodcen.common.service.CENCommonService;

@Configuration
public class SystemEnvironmentConfiguration {

	@Resource(name = "cenCommonService")
	private CENCommonService cenCommonService;

	@Bean
	public SystemEnvironmentVariables systemEnvironmentVariables() {
		boolean enable = false;
		List<String> excludeSpNames = null;
		List<String> excludeScreens = null;
		String reportUrl = null;
		List<String> types = null;

		try {
			CENCallableMap paramMap = new CENCallableMap();
			paramMap.put("CD_SYSTEM", "DZ");
			paramMap.put("CD_CODE", "LOG_ENABLE");
			List<List<Map<String, Object>>> resultList = (List<List<Map<String, Object>>>) cenCommonService.search("DZZPR_CONFIGMGR_SELECT2", paramMap);
			
			enable = resultList.get(0).stream()
					.map(m -> m.get("CD_VALUE"))
					.anyMatch( v -> v.equals("Y") || v.equals("y"));

			paramMap = new CENCallableMap();
			paramMap.put("CD_SYSTEM", "DZ");
			paramMap.put("CD_CODE", "LOG_EXCLUDE_SP_");
			resultList = (List<List<Map<String, Object>>>) cenCommonService.search("DZZPR_CONFIGMGR_SELECT2", paramMap);
			
			excludeSpNames = resultList.get(0).stream()
					.map(m -> (String) m.get("CD_VALUE"))
					.collect(Collectors.toList());

			paramMap = new CENCallableMap();
			paramMap.put("CD_SYSTEM", "DZ");
			paramMap.put("CD_CODE", "LOG_EXCLUDE_SC_");
			resultList = (List<List<Map<String, Object>>>) cenCommonService.search("DZZPR_CONFIGMGR_SELECT2", paramMap);
			
			excludeScreens = resultList.get(0).stream()
					.map(m -> (String) m.get("CD_VALUE"))
					.collect(Collectors.toList());

			paramMap = new CENCallableMap();
			paramMap.put("CD_SYSTEM", "DZ");
			paramMap.put("CD_CODE", "LOG_REPORT_URL");
			resultList = (List<List<Map<String, Object>>>) cenCommonService.search("DZZPR_CONFIGMGR_SELECT2", paramMap);
			
			reportUrl = resultList.get(0).stream()
					.map(m -> (String) m.get("CD_VALUE"))
					.findFirst()
					.orElse("");

			paramMap = new CENCallableMap();
			paramMap.put("CD_SYSTEM", "DZ");
			paramMap.put("CD_CODE", "LOG_TYPE");
			resultList = (List<List<Map<String, Object>>>) cenCommonService.search("DZZPR_CONFIGMGR_SELECT2", paramMap);
			
			types = Stream.of(
					resultList.get(0).stream()
						.map(m -> (String) m.get("CD_VALUE"))
						.findFirst()
						.orElse("")
						.split(",")
					).collect(Collectors.toList());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return new SystemEnvironmentVariables(enable, excludeSpNames, excludeScreens, reportUrl, types);
	}

}
