package com.goodcen.cenerp.mapper.common;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CENLogMapper {
	int insert(Map map);
}
