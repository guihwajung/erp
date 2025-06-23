package com.carbonco.ws.erp.deploy.model;

public class RevisionRequest {
	
	private String schema;
	private String address;
	private String path;
	
	private String user;
	
	private RevisionRequest() {
		
	}
	
	public RevisionRequest(String schema, String address, String path, String user) {
		this.schema = schema;
		this.address = address;
		this.path = path;
		this.user = user;
	}

	public String getSchema() {
		return schema;
	}

	public String getAddress() {
		return address;
	}

	public String getPath() {
		return path;
	}

	public String getUser() {
		return user;
	}

	@Override
	public String toString() {
		return schema + "//" + address + "/deploy/revision";
	}

}
