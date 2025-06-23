package com.goodcen.cenerp.config;

import org.apache.catalina.Context;
import org.apache.catalina.webresources.StandardRoot;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConditionalOnClass(TomcatServletWebServerFactory.class)
public class TomcatConfiguration {

	/**
	 * Spring Boot Embedded Tomcat 설정
	 *
	 * @return a TomcatServletWebServerFactory
	 */
	@Bean
	public TomcatServletWebServerFactory servletContainer() {
		TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory() {
			@Override
			protected void postProcessContext(Context context) {
				final int maxCacheSize = 40 * 1024;
				StandardRoot standardRoot = new StandardRoot(context);
				standardRoot.setCacheMaxSize(maxCacheSize);
				context.setResources(standardRoot);
			}
		};
		return tomcat;
	}
	
}