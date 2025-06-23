package com.goodcen.cenerp.config;

import java.util.List;

public class SystemEnvironmentVariables {
	
	private boolean enable;
	private List<String> excludeSpNames;
	private List<String> excludeScreens;
	private String reportUrl;
	private List<String> types;
	
	public SystemEnvironmentVariables(
			boolean enable,
			List<String> excludeSpNames,
			List<String> excludeScreens,
			String reportUrl,
			List<String> types
	) {
		this.enable = enable;
		this.excludeSpNames = excludeSpNames;
		this.excludeScreens = excludeScreens;
		this.reportUrl = reportUrl;
		this.types = types;
	}

	public boolean isEnable() {
		return enable;
	}

	public List<String> getExcludeSpNames() {
		return excludeSpNames;
	}
	
	public List<String> getExcludeScreens() {
		return excludeScreens;
	}

	public String getReportUrl() {
		return reportUrl;
	}

	public List<String> getTypes() {
		return types;
	}

	@Override
	public String toString() {
		return "SystemEnvironmentVariables [enable=" + enable + ", excludeSpNames=" + excludeSpNames
				+ ", excludeScreens=" + excludeScreens + ", reportUrl=" + reportUrl + ", types=" + types + "]";
	}
	
}
