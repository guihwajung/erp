package com.goodcen.cenerp.service.impl;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.goodcen.cenerp.model.CENDeptVO;
import com.goodcen.common.model.CENCallableMap;
import com.goodcen.common.security.user.CENUserDetails;
import com.goodcen.common.security.user.CENUserDetailsService;
import com.goodcen.common.service.CENCommonService;
import com.goodcen.common.util.CENStringUtils;

@Service("cenUserDetailsService")
public class CENUserDetailsServiceImpl implements CENUserDetailsService {

	private static final Logger LOGGER = LoggerFactory.getLogger(CENUserDetailsServiceImpl.class);
	
	@Resource(name = "cenCommonService")
	private CENCommonService cenCommonService;

	@Override
	public CENUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		if (!StringUtils.isEmpty(username)) {
			String id = "";
			String pwd = "";
			String[] idPwd = username.split("=");

			if (idPwd.length == 2) {
				id = idPwd[0];
				pwd = idPwd[1];
			}

			CENCallableMap param = new CENCallableMap();

			String loginSP = "DZZPR_USERID_SELECT";
			String ssoPass = "\r\n" + "#$SSO_LoGiN$#" + "\r\n"; 
			String adPass = "\r\n" + "#$ID_LoGiN$#" + "\r\n"; 
			if(pwd.equals(ssoPass)) {
				loginSP = "DZZPR_USERID_SSO_SELECT";
			}

			// param.setStoredProcedureSQL("{ CALL " + loginSP + "(@ID_USER=#{ID_USER},
			// @ID_PASSWORD=#{ID_PASSWORD})}");
			param.setString("ID_USER", id);
			param.setString("ID_PASSWORD", pwd);
			if(pwd.equals(adPass)) {
				param.setString("YN_EXTERNAL", "N");
			}

			List<List<Map<String, Object>>> array = null;
			try {
				array = (List<List<Map<String, Object>>>) cenCommonService.search(loginSP, param);
			} 
			catch (Exception e) {
				String errMsg = e.getMessage();
				throw new UsernameNotFoundException(errMsg, e.getCause());
			}

			if (array != null && array.size() > 0) {
				List<Map<String, Object>> list = array.get(0);

				if (list.size() > 0) {					
					List<CENDeptVO> deptList = new ArrayList<CENDeptVO>();
					for (int i = 0; i < list.size(); i++) {
						Map<String, Object> map = list.get(i);
						CENDeptVO deptVO = new CENDeptVO();
						deptVO.setID_USER(CENStringUtils.valueOf(map.get("ID_USER")));
						deptVO.setCD_CORP(CENStringUtils.valueOf(map.get("CD_CORP")));
						deptVO.setDS_CORP(CENStringUtils.valueOf(map.get("DS_CORP")));
						deptVO.setCD_DEPT(CENStringUtils.valueOf(map.get("CD_DEPT")));
						deptVO.setDS_DEPT(CENStringUtils.valueOf(map.get("DS_DEPT")));
						deptList.add(deptVO);
					}

					return new CENUserDetails(id, pwd, true, deptList);
				}
			}
		}

		return null;
	}

}

