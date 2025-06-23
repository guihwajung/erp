package com.goodcen.framework.nexacro.mapper;

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
public interface CENNexacroMapper extends CENMapper {

	/**
	 * 조회
	 * @param param
	 * @return
	 * @throws DataAccessException
	 */
	@ResultMap(value= {"output1,output2,output3,output4,output5,output6,output7,output8,output9"})
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
