package com.goodcen.cenerp.web;

import java.sql.Connection;
import java.util.HashMap;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.DataSourceUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth/*")
public class CENServerController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CENServerController.class);

	@Autowired
	private DataSource dataSource;
	
	@GetMapping(value = "/serverinfo1")
	public HashMap<String, Object> getServerInfo1() {
		HashMap<String, Object> hashMap = new HashMap<String, Object>();
	    
        hashMap.put("status", "ok");
        
        return hashMap;
	}
	
	@GetMapping(value = "/serverinfo2")
	public HashMap<String, Object> getServerInfo2() {
		HashMap<String, Object> hashMap = new HashMap<String, Object>();

		try (Connection db = DataSourceUtils.getConnection(dataSource)) {
			hashMap.put("status", "ok");
		} catch (Exception ex) {
			hashMap.put("status", "fail");
		} 
		
        return hashMap;
	}
}
