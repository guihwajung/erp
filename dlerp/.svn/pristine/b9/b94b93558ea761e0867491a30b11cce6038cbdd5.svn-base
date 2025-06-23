package com.goodcen.framework.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.goodcen.common.database.mapper.CENMapper;
import com.goodcen.common.model.CENCallableMap;
import com.goodcen.common.model.CENOptions.CENProcData;
import com.goodcen.common.repository.CENCommonRepository;
import com.goodcen.common.security.user.CENUserDetails;
import com.goodcen.common.service.CENCommonService;
import com.goodcen.framework.mapper.CENCommonMapper;

@Service("cenCommonService")
public class CENCommonServiceImpl implements CENCommonService {

	@Autowired
	private DataSource dataSource;

	@Resource
	private CENCommonMapper cenCommonMapper;

//	@Resource
//	private CENOracleCommonMapper cenOracleCommonMapper;

	public CENMapper getCommonMapper() {
		// SQL
		return cenCommonMapper;
		
		// ORACLE, TIBERO
//		return cenOracleCommonMapper;
	}

	@Override
	public List<?> search(String spName, CENCallableMap paramMap, String... schemaName) throws Exception {
		return CENCommonRepository.getSearchData(dataSource, getCommonMapper(), spName, paramMap, schemaName);
	}

	@Override
	public Map<String, List<?>> search(List<CENProcData> procDatas, Map<String, List<CENCallableMap>> targetMaps) throws Exception {
		return CENCommonRepository.getSearchData(dataSource, getCommonMapper(), procDatas, targetMaps);
	}
	
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	@Override
	public List<?> save(String spName, CENCallableMap paramMap, String... schemaName) throws Exception {
		return CENCommonRepository.getSaveData(dataSource, getCommonMapper(), spName, paramMap, schemaName);
	}

	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	@Override
	public Map<String, List<?>>  save(List<CENProcData> procDatas, Map<String, List<CENCallableMap>> targetMaps) throws Exception {
		return CENCommonRepository.getSaveData(dataSource, getCommonMapper(), procDatas, targetMaps);
	}

}

