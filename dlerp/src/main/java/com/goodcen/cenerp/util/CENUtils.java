package com.goodcen.cenerp.util;

import java.util.Calendar;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.security.core.Authentication;

import com.goodcen.cenerp.model.CENUserB2BVO;
import com.goodcen.cenerp.model.CENUserVO;
import com.goodcen.common.model.CENOptions.CENProcData;
import com.goodcen.common.nexacro.repository.CENNexacroRepository;
import com.goodcen.common.security.user.CENUserDetails;
import com.goodcen.common.security.util.CENAuthenticationHelper;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.PlatformData;

public class CENUtils {

	/**
	 * 유효성 검증
	 * @param request
	 * @param platformData
	 * @param auth
	 * @return
	 */
	public static Boolean checkIdentity(HttpServletRequest request, PlatformData platformData, Authentication auth) {

		Boolean isIdentity = true;

		// 클라이언트 시간 체크 (+-10분)
		if (platformData.getVariable("SENDTIME") == null) {
			isIdentity = false;
		} else {
			Long sendTime = platformData.getVariable("SENDTIME").getLong();
			Calendar calendar = Calendar.getInstance();
			calendar.setTimeInMillis(sendTime);
			Calendar stCalendar = Calendar.getInstance();
			Calendar edCalendar = Calendar.getInstance();
			stCalendar.add(Calendar.MINUTE, -10);
			edCalendar.add(Calendar.MINUTE, 10);
			if (calendar.compareTo(stCalendar) < 0 || calendar.compareTo(edCalendar) > 0) {
				isIdentity = false;
			}
		}
		if (CENAuthenticationHelper.isAuthenticated(request)) {
			// 다중 아이디 방지
			if (platformData.getVariable("IDENTITY") != null) {
				String strIdentity = platformData.getVariable("IDENTITY").getString();
				if (StringUtils.isBlank(strIdentity)) {
					isIdentity = false;
				} else if (!strIdentity.equalsIgnoreCase(((CENUserDetails) auth.getPrincipal()).getUsername())) {
					isIdentity = false;
				}
			}
		} else {
			isIdentity = false;
		}

		return isIdentity;
	}
	

	/**
	 * 사용자 맵
	 * @param auth
	 * @return
	 */
	public static Map<String, String> getUserMap(Authentication auth) {
		CENUserDetails details = (CENUserDetails) auth.getPrincipal();
		if (details.getCENUserVO() instanceof CENUserB2BVO) {
			CENUserB2BVO userVO = (CENUserB2BVO) details.getCENUserVO();
			return userVO.getMap();
		} else {
			CENUserVO userVO = (CENUserVO) details.getCENUserVO();
			return userVO.getMap();
		}
	}

	/**
	 * 사용자정보 세션으로 셋팅 ID_USER, CD_CORP, CD_DEPT, CD_VENDOR
	 * @param platformData
	 * @param user
	 * @throws Exception
	 */
	public static void withDataUseAuth(PlatformData platformData, Map<String, String> user) throws Exception {

		if (platformData.getDataSet("dsProc") != null) {
			Map<String, CENProcData> procMap = CENNexacroRepository.getProcedureData(platformData.getDataSet("dsProc"));

			if (procMap.size() > 0) {

				DataSetList list = platformData.getDataSetList();
				if (list != null && list.size() > 0) {
					String authID_USER = user.get("ID_USER");
					String authCD_CORP = user.get("CD_CORP");
					String authCD_DEPT = user.get("CD_DEPT");
					String authCD_VENDOR = user.get("CD_VENDOR");
					
					for (int i = 0; i < list.size(); i++) {
						DataSet ds = list.get(i);

						String target = ds.getName();
						if (procMap.containsKey(target)) {

							ds.setChangeStructureWithData(true);
							for (int j = 0; j < ds.getRowCount(); j++) {
								if (ds.containsColumn("AUTH_ID_USER")) {
									if(!ds.containsColumn("ID_USER")) {
										ds.addColumn("ID_USER", DataTypes.STRING);
										ds.removeColumn("AUTH_ID_USER");
									}
									ds.set(j, "ID_USER", authID_USER);
								}
								if (ds.containsColumn("AUTH_CD_CORP")) {
									if(!ds.containsColumn("CD_CORP")) {
										ds.addColumn("CD_CORP", DataTypes.STRING);
										ds.removeColumn("AUTH_CD_CORP");
									}
									ds.set(j, "CD_CORP", authCD_CORP);
								}
								if (ds.containsColumn("AUTH_CD_DEPT")) {
									if(!ds.containsColumn("CD_DEPT")) {
										ds.addColumn("CD_DEPT", DataTypes.STRING);
										ds.removeColumn("AUTH_CD_DEPT");
									}
									ds.set(j, "CD_DEPT", authCD_DEPT);
								}
								if (ds.containsColumn("AUTH_CD_VENDOR")) {
									if(!ds.containsColumn("CD_VENDOR")) {
										ds.addColumn("CD_VENDOR", DataTypes.STRING);
										ds.removeColumn("AUTH_CD_VENDOR");
									}
									ds.set(j, "CD_VENDOR", authCD_VENDOR);
								}
							}
							ds.setChangeStructureWithData(false);
						
						}
					}
				}

			} 
		}
	}
}
