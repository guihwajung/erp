package com.goodcen.cenerp.web.password;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Random;

public class ResetUserPassword {
	
	private Date date;
	private String authNumber;
	
	private String id;
	private String name;
	private String mobile;
	
	private ResetUserPassword() {
		
	}

	public ResetUserPassword(String id, String name, String mobile) {
		this.date = new Date();
		this.authNumber = generateRandomNumber();
		this.id = id;
		this.name = name;
		this.mobile = mobile;
	}
	
	public boolean isOver(int seconds) {
		Date now = new Date();
		if ((now.getTime() / 1000) - (date.getTime() / 1000) > seconds) {
			return true;
		}
		return false;
	}
	
	public String newRandomPassword() {
		SimpleDateFormat sdf = new SimpleDateFormat("MMMM", Locale.ENGLISH);
		String strMonth = sdf.format(new Date()).toUpperCase();
				
		int min = 65;	// ASCII 'A'
		int max = 90;	// ASCII 'Z'
				
		return strMonth.substring(0, 3) + generateRandomNumber() + (char)(new Random().nextInt(max - min + 1) + min);
	}
	
	private String generateRandomNumber() {
		Random random = new Random(new Date().getTime());
		
		StringBuilder sb = new StringBuilder();
		sb.append(String.format("%02d", random.nextInt(100)));
		sb.append(String.format("%02d", random.nextInt(100)));
		sb.append(String.format("%02d", random.nextInt(100)));
		
		return sb.toString();
	}
	
	public String getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}
	
	public String getMobile() {
		return mobile;
	}
	
	public String getAuthNumber() {
		return authNumber;
	}
	
}
