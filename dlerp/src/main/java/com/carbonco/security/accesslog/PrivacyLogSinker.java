package com.carbonco.security.accesslog;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.goodcen.cenerp.config.SystemEnvironmentVariables;
import com.goodcen.common.model.CENCallableMap;
import com.goodcen.common.service.CENCommonService;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;

@Component
public class PrivacyLogSinker {

	@Autowired
	private SystemEnvironmentVariables systemEnvironmentVariables;
	
	@Resource(name = "cenCommonService")
	private CENCommonService cenCommonService;
	
	public void saveLog(String header, PlatformData platformData, NexacroResult result, String ip)  {
		// DZ::LOG_ENABLE != Y
		if (!systemEnvironmentVariables.isEnable() || header == null) {
			return;
		}
		
		AccessLog log = new AccessLog(header);
		String svcService = "";
		if (log.getService().equals("savesel")) {
			svcService = "save";
		} else {
			svcService = log.getService();
		}	
		
		// DZ::LOG_TYPE
		if (!systemEnvironmentVariables.getTypes().contains(log.getService())) {
			return;
		}

		// DZ::LOG_EXCLUDE_SC_XXXX
		if (systemEnvironmentVariables.getExcludeScreens().contains(log.getForm())) {
			return;
		}
		
		int countOfDataSet = platformData.getDataSetCount();
		DataSet dsProc = null;
		List<DataSet> list = new ArrayList<>();
		for (int i = 0; i < countOfDataSet; i++) {
			DataSet ds = platformData.getDataSet(i);
			if (ds.getName().equals("dsProc")) {
				dsProc = ds;
			} else {
				list.add(ds);
			}
		}
		
		Map<String, String> mapOfResultCount= new HashMap<>();
		if (!log.getService().equals("save")) {
			for (int i = 0; i < result.getPlatformData().getDataSetCount(); i++) {
				DataSet ds = result.getPlatformData().getDataSet(i);
				mapOfResultCount.put(ds.getName().substring(0, ds.getName().length() - 1), ds.getRowCount() + "");
			}
		}
		
		List<String> countOfResult = new ArrayList<>();
		List<String> spList = new ArrayList<>();
		for (DataSet ds : list) {
			String spName = getSpName(dsProc, ds.getName());
			// DZ::LOG_EXCLUDE_SP_XXXX
			if (systemEnvironmentVariables.getExcludeSpNames().contains(spName)) {
				continue;
			}
			
			countOfResult.add(mapOfResultCount.get(ds.getName()));
			List<String> params = new ArrayList<>();
			for (int i = 0; i < ds.getColumnCount(); i++) {
				String param = "@" + ds.getColumn(i).getName() + "='" + ds.getString(0, ds.getColumn(i).getName()) + "'";
				params.add(param);
			}

			spList.add(String.format("EXEC %s %s; ", spName, String.join(", ", params)));
		}
		
		if (spList.isEmpty()) {
			return;
		}
		
		try {
			CENCallableMap paramMap = new CENCallableMap();
			paramMap.put("ID_FORM", log.getForm());
			paramMap.put("ID_USER", log.getUser());
			paramMap.put("CD_DEPT", log.getDept());
			paramMap.put("CD_MODULE", log.getModule());
			paramMap.put("TY_WORK", svcService);
			paramMap.put("CT_WORK", !svcService.equals("save") ? String.join(",", countOfResult) : "");
			paramMap.put("DS_WORK", String.join("", spList));
			paramMap.put("DS_IP", ip);
			
			cenCommonService.save("DZZPR_TRAN_LOG_INSERT", paramMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	private String getSpName(DataSet ds, String alias) {
		for (int i = 0; i < ds.getRowCount(); i++) {
			if (ds.getString(i, 0).equals(alias)) {
				return ds.getString(i, 1);
			}
		}
		
		return "";
	}

}
