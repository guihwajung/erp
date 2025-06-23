package com.goodcen.framework.config;

import java.util.Properties;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.handler.SimpleUrlHandlerMapping;
import org.springframework.web.servlet.mvc.ServletWrappingController;

import com.goodcen.common.nexacro.exception.CENNexacroMappingExceptionResolver;
import com.nexacro.uiadapter17.spring.core.view.NexacroFileView;
import com.nexacro.uiadapter17.spring.core.view.NexacroView;
import com.nexacro17.xeni.services.GridExportImportServlet;

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
@MapperScan(basePackages = {"com.goodcen.framework.nexacro.mapper"})
public class NexacroServletConfiguration {

//	private static final Logger LOGGER = LoggerFactory.getLogger(NexacroServletConfiguration.class);
	
	@Autowired
	private MessageSource messageSource;
	
	/**
	 * 넥사크로 엑셀 URL 맵핑
	 * 
	 * @return
	 */
	@Bean
	public SimpleUrlHandlerMapping simpleUrlHandlerMapping() {
		Properties urlProperties = new Properties();
		urlProperties.setProperty("/XExportImport.do", "servletWrappingController");

		SimpleUrlHandlerMapping mapping = new SimpleUrlHandlerMapping();
		mapping.setOrder(Integer.MAX_VALUE - 2);
		mapping.setMappings(urlProperties);
		return mapping;
	}

	/**
	 * 넥사크로 엑셀Import/Export
	 * 
	 * @return
	 */
	@Bean
	public ServletWrappingController servletWrappingController() {
		ServletWrappingController controller = new ServletWrappingController();
		controller.setServletClass(GridExportImportServlet.class);
		return controller;
	}

	/**
	 * 넥사크로 View
	 * 
	 * @return
	 */
	@Bean
	public NexacroView nexacroView() {
		return new NexacroView();
	}

	/**
	 * 넥사크로 FileView
	 * 
	 * @return
	 */
	@Bean
	public NexacroFileView nexacroFileView() {
		NexacroFileView fileView = new NexacroFileView();
		fileView.setDefaultCharset("UTF-8");
		fileView.setDefaultContentType("PlatformXml");
		return fileView;
	}

	/**
	 * 넥사크로 Exception 처리
	 * 
	 * @return
	 */
	@Bean
	public CENNexacroMappingExceptionResolver nexacroMappingExceptionResolver() {
		CENNexacroMappingExceptionResolver nexacroResolver = new CENNexacroMappingExceptionResolver();
		nexacroResolver.setView(nexacroView());
		nexacroResolver.setShouldLogStackTrace(false);
		nexacroResolver.setShouldSendStackTrace(false);
		nexacroResolver.setDefaultErrorMsg("errors.default");
		nexacroResolver.setMessageSource(messageSource);
		return nexacroResolver;
	}

}
