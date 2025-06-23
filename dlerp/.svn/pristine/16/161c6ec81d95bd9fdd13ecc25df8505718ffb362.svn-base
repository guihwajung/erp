package com.goodcen.cenerp.config;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import org.jasypt.encryption.StringEncryptor;
import org.jasypt.encryption.pbe.PooledPBEStringEncryptor;
import org.jasypt.encryption.pbe.config.SimpleStringPBEConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.core.annotation.Order;
import org.springframework.core.env.AbstractEnvironment;
import org.springframework.core.env.Environment;
import org.springframework.core.env.MapPropertySource;
import org.springframework.core.env.PropertySource;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.multipart.support.MultipartFilter;

import com.goodcen.common.framework.properties.JasyptSetting;
import com.goodcen.common.framework.view.GoodcenView;
import com.goodcen.common.servlet.CENServletContextListener;
import com.goodcen.common.servlet.CENServletRequestListener;

/**
 * 
 * @filename CenServletConfiguration.java
 * @author kim
 * @since 2018. 12. 19.
 * @version 1.0
 * @see
 * 
 *      <pre>
 *  == 개정이력(Modification Information) ==
 *   
 *   수정일      수정자           수정내용
 *  -------    --------    ---------------------------
 *   2018. 12. 19.  kim          최초 생성
 * 
 *      </pre>
 */
@Configuration
public class ServletConfiguration {

	private static final Logger LOGGER = LoggerFactory.getLogger(ServletConfiguration.class);

	@Autowired
	private Environment env;
	
	@Value("${spring.profiles.active}")
	private String activeProfile;
	
	@Value("${spring.servlet.multipart.max-file-size:1048576}")
	private long maxUploadSize;
	
	@Value("${spring.servlet.multipart.max-request-size:10485760}")
	private long maxRequestSize;
	
	@Value("${spring.servlet.multipart.file-size-threshold:0}")
	private int fileSizeThreshold;
	
	@Value("${spring.servlet.multipart.resolve-lazily:true}")
	private boolean resolveLazily;
	
	@Bean
	public ServletContextInitializer contextInitializer() {
		return new ServletContextInitializer() {
 
			@Override
			public void onStartup(ServletContext servletContext) throws ServletException {
				Map<String, Object> map = new HashMap<String, Object>();
				for (Iterator<PropertySource<?>> it = ((AbstractEnvironment) env).getPropertySources().iterator(); it.hasNext(); ) {
		            PropertySource<?> propertySource = it.next();
		            if (propertySource instanceof MapPropertySource && propertySource.getName().startsWith("applicationConfig")) {
		                map.putAll(((MapPropertySource) propertySource).getSource());
		            }
				}
				for (String key : map.keySet()) {
					if (key.startsWith("server.servlet.context-parameters.")) {
						servletContext.setInitParameter(key.replace("server.servlet.context-parameters.", ""), env.getProperty(key));
					}
				}
				
				LOGGER.info("################ Server Information ###################");
				LOGGER.info("* SpringVersion : " + org.springframework.core.SpringVersion.getVersion());
				LOGGER.info("* Profile : " + activeProfile);
				LOGGER.info("* ContextPath : " + servletContext.getContextPath());
				LOGGER.info("* ServerInfo : " + servletContext.getServerInfo());
				LOGGER.info("* VirtualServerName : " + servletContext.getVirtualServerName());
				LOGGER.info("* ServletContextName : " + servletContext.getServletContextName());
				LOGGER.info("* Locale : " + LocaleContextHolder.getLocale());
				LOGGER.info("#######################################################");
			}
		};
	}
	
	@Bean
	public GoodcenView goodcenView() {
//		return new GoodcenView(activeProfile);
		return new GoodcenView("default");
	}
	
	@Bean
	public CENServletContextListener cenServletContextListener() {
	   return new CENServletContextListener();
	}
	
	@Bean
	public CENServletRequestListener cenServletRequestListener() {
	   return new CENServletRequestListener();
	}
	
	@Bean
    @Order(1)
    public FilterRegistrationBean<MultipartFilter> filterRegistrationBean() {
        FilterRegistrationBean<MultipartFilter> registration = new FilterRegistrationBean<>();
        registration.setFilter(new MultipartFilter());
        registration.addUrlPatterns("/*");
        registration.setOrder(1);
        return registration;
    }

	@Bean(name = MultipartFilter.DEFAULT_MULTIPART_RESOLVER_BEAN_NAME)
    public CommonsMultipartResolver multipartResolver() {
        CommonsMultipartResolver resolver = new CommonsMultipartResolver();
        resolver.setDefaultEncoding("utf-8");
        resolver.setMaxUploadSize(maxRequestSize);
        resolver.setMaxUploadSizePerFile(maxUploadSize);
        resolver.setMaxInMemorySize(fileSizeThreshold);
        resolver.setResolveLazily(resolveLazily);
        return resolver;
    }

	@Bean(name = "jasyptStringEncryptor")
	public StringEncryptor stringEncryptor() {
	    PooledPBEStringEncryptor encryptor = new PooledPBEStringEncryptor();
	    SimpleStringPBEConfig config = new SimpleStringPBEConfig();
	    config.setPassword(JasyptSetting.getPassword());
	    config.setAlgorithm("PBEWithMD5AndDES");
	    config.setPoolSize(1);
	    encryptor.setConfig(config);
	    return encryptor;
	}

	@Bean(name = "multipartPath")
	public String multipartPath() {
		String contextRealPath = env.getProperty("spring.servlet.multipart.location");
		return contextRealPath;
	}

	/**
	 * XSS 공격 필터
	 * 
	 * @return
	 */
//	@Bean
//    public FilterRegistrationBean<XssEscapeServletFilter> xssFilter() {
//        FilterRegistrationBean<XssEscapeServletFilter> filterRegistration = new FilterRegistrationBean<>();
//        filterRegistration.setFilter(new XssEscapeServletFilter());
//        filterRegistration.setOrder(1);
//        filterRegistration.addUrlPatterns("/*");
//
//        return filterRegistration;
//    }

}
