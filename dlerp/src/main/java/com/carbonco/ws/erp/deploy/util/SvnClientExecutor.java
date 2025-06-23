package com.carbonco.ws.erp.deploy.util;

import java.io.File;

public class SvnClientExecutor {
	
	private static boolean isWindows = System.getProperty("os.name").toLowerCase().startsWith("windows");
	
	private static String CBCERP = "https://erp-app01-dev.carbonco.co.kr:6432/svn/cbcerp/trunk/dlcbcerp/src/main/webapp/erp";
	private static String ECOERP = "https://erp-app01-dev.carbonco.co.kr:6432/svn/ecoerp/trunk/dlecoerp/src/main/webapp/erp";
	private static String DLERP = "https://erp-app01-dev.carbonco.co.kr:6432/svn/dlerp/trunk/dlerp/src/main/webapp/erp";
	
	
	private static String getUrl(String repository) throws Exception {
		switch (repository) {
		case "dlcbcerp":
			return CBCERP;

		case "dlecoerp":
			return ECOERP;
		
		case "dlerp":
			return DLERP;
		default:
			throw new Exception("there is no repository: " + repository);
		}
	}
	
	
	public static String getRevision(String repository) {
		try {
			String command = "svn log -v " + getUrl(repository) + " --username DLCBC03 --password dlcbc03";
			System.out.println("command: " + command + " isWindows: [" + isWindows + "]");
			Process process = null;
			if (isWindows) {
				process = Runtime.getRuntime().exec(new String[] {"cmd.exe", "/c", command}, null, null);
			} else {
				process = Runtime.getRuntime().exec(new String[] {"sh", "-c", command}, null, null);
			}
			
			return new StreamGobbler(process.getInputStream()).getResult();
		} catch(Exception e) {
			System.out.println(e);
		}
		
		return "";
	}
	
	public static String update(String path) {
		try {
			Process process = null;
			if (isWindows) {
				process = Runtime.getRuntime().exec(new String[] {"cmd.exe", "/c", "svn update"}, null, new File(path));
			} else {
				process = Runtime.getRuntime().exec(new String[] {"sh", "-c", "svn update"}, null, new File(path));
			}

			return new StreamGobbler(process.getInputStream()).getResult();
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return "";
	}

	public static String log(String path) {
		try {
			Process process = null;
			if (isWindows) {
				process = Runtime.getRuntime().exec(new String[] {"cmd.exe", "/c", "svn log"}, null, new File(path));
			} else {
				process = Runtime.getRuntime().exec(new String[] {"sh", "-c", "svn log"}, null, new File(path));
			}

			return new StreamGobbler(process.getInputStream()).getResult();
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return "";
	}

	public static String logVerbose(String path, int revision) {
		try {
			Process process = null;
			if (isWindows) {
				process = Runtime.getRuntime().exec(new String[] {"cmd.exe", "/c", "svn log -r " + revision + " -v"}, null, new File(path));
			} else {
				process = Runtime.getRuntime().exec(new String[] {"sh", "-c", "svn log -r " + revision + " -v"}, null, new File(path));
			}

			return new StreamGobbler(process.getInputStream()).getResult();
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return "";
	}

}
