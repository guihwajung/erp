package com.carbonco.ws.erp.deploy.util;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

public class StreamGobbler {
	
	private InputStream inputStream;
	
	public StreamGobbler(InputStream inputStream) {
		this.inputStream = inputStream;
	}
	
	public String getResult() {
		try {
			StringBuffer sb = new StringBuffer();
			BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
			String line = "";
			System.out.println("reader: [" + reader + "]");
			while ((line = reader.readLine()) != null) {
				sb.append(line);
				System.out.println("  ==> [" + line + "]");
				sb.append("\n");
			}

			return sb.toString();
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return "";
	}
	
}
