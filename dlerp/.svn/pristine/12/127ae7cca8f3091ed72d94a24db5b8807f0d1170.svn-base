package com.goodcen.cenerp.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.goodcen.cenerp.mapper.sub.CENSubMapper;
import com.goodcen.cenerp.service.CENSubService;
import com.goodcen.framework.config.DatabaseSubConfiguration;

@Service
@ConditionalOnBean({DatabaseSubConfiguration.class})
public class CENSubServiceImpl implements CENSubService {
	@Autowired
	private CENSubMapper cenSubMapper;

	@Override
	public List<?> KakaoMsgSelect() throws Exception {
		// TODO Auto-generated method stub
		return cenSubMapper.KakaoMsgSelect();
	}

	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	@Override
	public int KakaoMsgInsert(List<Map> listMap) throws Exception {
		// TODO Auto-generated method stub
		int cnt = 0;
		for (Map map : listMap) {
			cnt += cenSubMapper.KakaoMsgInsert(map);
		}
		return cnt;
	}

	@Override
	public List<?> SmsMsgSelect() throws Exception {
		// TODO Auto-generated method stub
		return cenSubMapper.SmsMsgSelect();
	}

	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	@Override
	public int SmsMsgInsert(List<Map> listMap) throws Exception {
		// TODO Auto-generated method stub
		int cnt = 0;
		for (Map map : listMap) {
			cnt += cenSubMapper.SmsMsgInsert(map);
		}
		return cnt;
	}


	@Override
	public List<?> MailMsgSelect() throws Exception {
		// TODO Auto-generated method stub
		return cenSubMapper.MailMsgSelect();
	}

	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	@Override
	public int MailMsgInsert(List<Map> listMap) throws Exception {
		// TODO Auto-generated method stub
		int cnt = 0;
		for (Map map : listMap) {
			cnt += cenSubMapper.MailMsgInsert(map);
		}
		return cnt;
	}


}
