package com.goodcen.framework.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.ResultType;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.annotations.UpdateProvider;
import org.apache.ibatis.mapping.StatementType;
import org.springframework.dao.DataAccessException;

import com.goodcen.common.database.mapper.CENCommonProvider;
import com.goodcen.common.database.mapper.CENMapper;
import com.goodcen.common.model.CENCallableMap;

@Mapper
public interface CENOracleCommonMapper extends CENMapper { 

	/**
	 * Oracle 조회
	 * @param param
	 * @return
	 * @throws DataAccessException
	 */
	@Options(statementType=StatementType.CALLABLE)
	@ResultType(Map.class)
	@SelectProvider(type=CENCommonProvider.class, method="execute")
	public List<?> select(CENCallableMap paramMap) throws DataAccessException;
	
	/**
	 * Oracle 저장
	 * @param param
	 * @throws DataAccessException
	 */
	@Options(statementType=StatementType.CALLABLE)
	@UpdateProvider(type=CENCommonProvider.class, method="execute")
	public int save(CENCallableMap paramMap) throws DataAccessException;
	
}