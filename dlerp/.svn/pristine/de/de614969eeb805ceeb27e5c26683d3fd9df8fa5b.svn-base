package com.goodcen.cenerp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages= {"com.goodcen.framework", "com.goodcen.cenerp", "com.carbonco.ws.erp", "com.carbonco.security.accesslog"})
public class CenerpApplication {
	
	public static void main(String[] args) {
		String profile = System.getProperty("spring.profiles.active");
		if (profile == null) {
			System.setProperty("spring.profiles.active", "default");
		}

		SpringApplication.run(CenerpApplication.class, args);
	}
	
}
