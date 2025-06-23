package com.goodcen.cenerp.mapper.chained.chained1;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CENChainedMapper1 {
	int insert(Map map);	
}
