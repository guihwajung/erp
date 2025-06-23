package com.goodcen.framework.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.annotations.UpdateProvider;
import org.apache.ibatis.mapping.StatementType;
import org.springframework.dao.DataAccessException;

import com.goodcen.common.database.mapper.CENCommonProvider;
import com.goodcen.common.database.mapper.CENMapper;
import com.goodcen.common.model.CENCallableMap;

@Mapper
public interface CENCommonMapper extends CENMapper {

//	/**
//	 * 조회
//	 * @param param
//	 * @return
//	 * @throws DataAccessException
//	 */
//	@ResultType(Map.class)
//	@SelectProvider(type=CENCommonProvider.class, method="getQueryForSelect")
//	public List<Map<String, Object>> executeForSelect(CENCallableMap paramMap) throws DataAccessException;

	/**
	 * 조회 Select
	 * @param param
	 * @return
	 * @throws DataAccessException
	 */
	@ResultMap(value= {"output11,output12,output13,output14,output15,output16,output17,output18,output19"})
	@SelectProvider(type=CENCommonProvider.class, method="execute")
	public List<?> select(CENCallableMap paramMap) throws DataAccessException;
	
	/**
	 * 저장
	 * @param param
	 * @throws DataAccessException
	 */
	@Options(statementType=StatementType.CALLABLE)
	@UpdateProvider(type=CENCommonProvider.class, method="execute")
	public int save(CENCallableMap paramMap) throws DataAccessException;

}
