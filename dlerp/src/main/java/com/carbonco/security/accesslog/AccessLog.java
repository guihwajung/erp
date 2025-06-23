package com.carbonco.security.accesslog;

public class AccessLog {

	private String system;
	private String form;
	private String module;
	private String service;
	private String user;
	private String corp;
	private String dept;
	private String target;
	
	public AccessLog(String log) {
		String[] items = log.split(";");
		for (String item : items) {
			if (item.startsWith("TY_SYSTEM=")) {
				system = item.split("=")[1];
			} else if (item.startsWith("ID_FORM=")) {
				form = item.split("=")[1];
			} else if (item.startsWith("CD_MODULE=")) {
				module = item.split("=")[1];
			} else if (item.startsWith("DS_SERVICE=")) {
				service = item.split("=")[1];
			} else if (item.startsWith("ID_USER=")) {
				user = item.split("=")[1];
			} else if (item.startsWith("CD_CORP=")) {
				corp = item.split("=")[1];
			} else if (item.startsWith("CD_DEPT=")) {
				dept = item.split("=")[1];
			} else if (item.startsWith("DS_TARGET=")) {
				target = item.split("=")[1];
			}
		}
	}

	public String getSystem() {
		return system;
	}

	public String getForm() {
		return form;
	}
	
	public String getModule() {
		return module;
	}

	public String getService() {
		return service;
	}

	public String getUser() {
		return user;
	}

	public String getCorp() {
		return corp;
	}

	public String getDept() {
		return dept;
	}

	public String getTarget() {
		return target;
	}

	@Override
	public String toString() {
		return "AccessLog [system=" + system + ", form=" + form + ", service=" + service + ", user=" + user + ", corp="
				+ corp + ", dept=" + dept + ", target=" + target + "]";
	}
	
}

