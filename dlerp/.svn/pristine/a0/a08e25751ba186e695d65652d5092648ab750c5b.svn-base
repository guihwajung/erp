package com.goodcen.framework.nexacro.service.impl;

import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;

import javax.annotation.Resource;
import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import com.goodcen.common.database.mapper.CENMapper;
import com.goodcen.common.nexacro.repository.CENNexacroRepository;
import com.goodcen.common.nexacro.service.CENNexacroService;
import com.goodcen.framework.nexacro.mapper.CENNexacroMapper;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.PlatformData;

@Service("cenNexacroService")
public class CENNexacroServiceImpl implements CENNexacroService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(CENNexacroServiceImpl.class);

	@Autowired
	private DataSource dataSource;
	
	@Autowired
	private PlatformTransactionManager transactionManager;

	@Resource
	private CENNexacroMapper cenNexacroMapper;

//	@Resource
//	private CENOracleNexacroMapper cenOracleNexacroMapper;

	public CENMapper getNexacroMapper() {
		// SQL
		return cenNexacroMapper;
		
		// ORACLE, TIBERO
//		return cenOracleNexacroMapper;
	}
	
	@Override
	public NexacroResult searchNexa(PlatformData platformData) throws Exception {
		return CENNexacroRepository.getSearchData(dataSource, getNexacroMapper(), platformData);
	}

	@Override
	public NexacroResult searchNexa(PlatformData platformData, Boolean useOnlyCursor) throws Exception {
		return CENNexacroRepository.getSearchData(dataSource, getNexacroMapper(), platformData, useOnlyCursor);
	}
	
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	@Override
	public NexacroResult saveNexa(PlatformData platformData) throws Exception {
		return CENNexacroRepository.getSaveData(dataSource, getNexacroMapper(), platformData);
	}

	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	@Override
	public NexacroResult saveselNexa(PlatformData platformData) throws Exception {
		return CENNexacroRepository.getSearchData(dataSource, getNexacroMapper(), platformData);
	}

	@Override
	public NexacroResult setAuthUser(PlatformData platformData, Map<String, String> user) throws Exception {
		return CENNexacroRepository.setAuthUserData(dataSource, platformData, user);
	}


	@Override
	public CompletableFuture<NexacroResult> searchNexaAsync(PlatformData platformData, Executor threadPoolTaskExecutor) throws Exception {

		return CompletableFuture.supplyAsync(() -> {
			try {
				return CENNexacroRepository.getSearchData(dataSource, getNexacroMapper(), platformData);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				LOGGER.error(e.getMessage(), e.getCause());
			}
			return null;
		}, threadPoolTaskExecutor);
		
	}

	@Override
	public CompletableFuture<NexacroResult> saveNexaAsync(PlatformData platformData, Executor threadPoolTaskExecutor) throws Exception {

		return CompletableFuture.supplyAsync(() -> {
			TransactionDefinition txDef = new DefaultTransactionDefinition();
		    TransactionStatus txStatus = transactionManager.getTransaction(txDef);
			try {
				NexacroResult result = CENNexacroRepository.getSaveData(dataSource, getNexacroMapper(), platformData);
				transactionManager.commit(txStatus);
				return result;
			} catch (Exception e) {
				transactionManager.rollback(txStatus);
				LOGGER.error(e.getMessage(), e.getCause());
			}
			return null;
		}, threadPoolTaskExecutor);
		
	}
}
