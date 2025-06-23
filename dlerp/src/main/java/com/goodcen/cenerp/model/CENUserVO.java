package com.goodcen.cenerp.model;

import java.util.HashMap;
import java.util.Map;

import com.goodcen.common.model.CENBaseVO;

public class CENUserVO extends CENBaseVO{

	/**
	 * 
	 */
	private static final long serialVersionUID = 5004694700251242165L;
	
	private String idUSER = "";
	private String cdCORP = "";
	private String cdDEPT = "";
	
	public String getID_USER() {
		return idUSER;
	}
	public void setID_USER(String iDUSER) {
		idUSER = iDUSER;
	}
	public String getCD_CORP() {
		return cdCORP;
	}
	public void setCD_CORP(String cDCORP) {
		cdCORP = cDCORP;
	}
	public String getCD_DEPT() {
		return cdDEPT;
	}
	public void setCD_DEPT(String cDDEPT) {
		cdDEPT = cDDEPT;
	}
	@Override
	public String toString() {
		return "CENUserVO [ID_USER=" + idUSER + ",CD_CORP=" + cdCORP + ",CD_DEPT=" + cdDEPT + "]";
	}
	
	public Map<String, String> getMap() {
		Map<String, String> user = new HashMap<String, String>();
		user.put("ID_USER", this.getID_USER());
		user.put("CD_CORP", this.getCD_CORP());
		user.put("CD_DEPT", this.getCD_DEPT());
		return user;
	}
}
