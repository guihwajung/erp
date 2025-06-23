package com.goodcen.cenerp.service.impl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.goodcen.cenerp.mapper.common.CENLogMapper;
import com.goodcen.cenerp.service.CENLogService;

@Service
public class CENLogServiceImpl implements CENLogService {
	@Autowired
	private CENLogMapper cenLogMapper;

	//@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	@Override
	public int insert(Map map) throws Exception {
		return cenLogMapper.insert(map);
	}

}
