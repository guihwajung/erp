package com.goodcen.cenerp.config;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.goodcen.cenerp.interceptor.CENLogHandlerInterceptor;
import com.goodcen.cenerp.interceptor.CENLoginHandlerInterceptor;
import com.goodcen.common.nexacro.interceptor.CENNexacroInterceptor;
import com.nexacro.uiadapter17.spring.core.resolve.NexacroHandlerMethodReturnValueHandler;
import com.nexacro.uiadapter17.spring.core.resolve.NexacroMethodArgumentResolver;
import com.nexacro.uiadapter17.spring.core.view.NexacroFileView;
import com.nexacro.uiadapter17.spring.core.view.NexacroView;

/**
 * 
 * @filename RootConfiguration.java
 * @author kim
 * @since 2018. 12. 19.
 * @version 1.0
 * @see <pre>
 *  == 개정이력(Modification Information) ==
 *   
 *   수정일      수정자           수정내용
 *  -------    --------    ---------------------------
 *   2018. 12. 19.  kim          최초 생성
 * 
 * </pre>
 */
@Configuration
public class RootConfiguration implements WebMvcConfigurer {
	@Autowired
	private NexacroView nexacroView;
	
	@Autowired
	private NexacroFileView nexacroFileView;
	
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("forward:/index.html");
		registry.addViewController("/erp/").setViewName("forward:/erp/index.html");
		registry.addViewController("/b2b/").setViewName("forward:/b2b/index.html");
		registry.addViewController("/buyer/").setViewName("forward:/buyer/index.html");
		registry.setOrder(Ordered.HIGHEST_PRECEDENCE);
		WebMvcConfigurer.super.addViewControllers(registry);
	}
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		// webapp path 사용
		registry.addResourceHandler("/**").addResourceLocations("/");
	}

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		//넥사크로 인터셉터
		registry.addInterceptor(new CENNexacroInterceptor());
		
		//로그 인터셉터
		List<String> URL_PATTERNS = Arrays.asList("/service/**/*", "/auth/**/*", "/pki/**/*");
        registry.addInterceptor(cenLogHandlerInterceptor())
        	.addPathPatterns(URL_PATTERNS)
        		.excludePathPatterns("/service/combo.do")
	        	.excludePathPatterns("/auth/login.do")
	        	.excludePathPatterns("/auth/loginInfo.do")
	        	.excludePathPatterns("/auth/logout.do")
            	.excludePathPatterns("/auth/getServerTime.do")
            	.excludePathPatterns("/pki/login.do")
            	.excludePathPatterns("/pki/loginInfo.do")
            	.excludePathPatterns("/pki/logincertssn.do")
            	.excludePathPatterns("/pki/logincert.do")
            	.excludePathPatterns("/pki/kmcert.do")
            	;
        
        registry.addInterceptor(cenLoginHandlerInterceptor())
	    	.addPathPatterns("/auth/loginInfo.do")
	    	.addPathPatterns("/pki/login.do")
	    	.addPathPatterns("/pki/logincertssn.do")
	    	.addPathPatterns("/pki/logincert.do")
	    	;
	}
	
	@Bean
	public CENLogHandlerInterceptor cenLogHandlerInterceptor() {
		return new CENLogHandlerInterceptor();
	}
	
	@Bean
	public CENLoginHandlerInterceptor cenLoginHandlerInterceptor() {
		return new CENLoginHandlerInterceptor();
	}
	
	@Override
	public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
		//넥사크로 객체 인자 추가
		argumentResolvers.add(new NexacroMethodArgumentResolver());
	}
	
	@Override
	public void addReturnValueHandlers(List<HandlerMethodReturnValueHandler> returnValueHandlers) {
		//넥사크로 객체 리턴
		NexacroHandlerMethodReturnValueHandler handler = new NexacroHandlerMethodReturnValueHandler();
		handler.setView(nexacroView);
		handler.setFileView(nexacroFileView);
		returnValueHandlers.add(handler);
	}

}
