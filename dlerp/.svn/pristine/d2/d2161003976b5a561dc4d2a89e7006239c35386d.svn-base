package com.carbonco.ws.erp.deploy.model;

import java.util.ArrayList;
import java.util.List;

public class RevisionResponse {
	
	private int revision;
	private String user;
	private String datetime;
	
	private String comment;
	private List<Item> items;
	
	private RevisionResponse() {
		
	}
	
	public RevisionResponse(int revision, String user, String datetime) {
		this(revision, user, datetime, null);
	}
	
	public RevisionResponse(int revision, String user, String datetime, List<Item> items) {
		this.revision = revision;
		this.user = user;
		this.datetime = datetime;
		this.items = items;
	}
	
	public int getRevision() {
		return revision;
	}

	public String getUser() {
		return user;
	}

	public String getDatetime() {
		return datetime;
	}

	public List<Item> getItems() {
		return items;
	}
	
	public void addItem(Item item) {
		if (items == null) {
			items = new ArrayList<>();
		}
		
		if (item != null) {
			items.add(item);
		}
	}
	
	public void setComment(String comment) {
		this.comment = comment;
	}
	
	public static class Item {

		private String status;
		private String path;
		private String name;
		
		private Item() {
			
		}
		
		public Item(String status, String path, String name) {
			this.status = status;
			this.path = path;
			this.name = name;
		}

		public String getStatus() {
			return status;
		}

		public String getPath() {
			return path;
		}
		
		public String getName() {
			return name;
		}
		
	}
	
}

