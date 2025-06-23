package com.goodcen.cenerp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.goodcen.cenerp.security.jwt.CENJwtAuthenticationFilter;
import com.goodcen.cenerp.security.jwt.CENJwtTokenProvider;
import com.goodcen.common.security.CENAuthenticationEntryPoint;
import com.goodcen.common.security.handler.CENAccessDeniedHandler;
import com.goodcen.common.security.handler.CENLogoutSuccessHandler;


/**
 * 
 * 
 * 
 * @filename SecurityConfig.java
 * @author   kim
 * @since    2018. 10. 19.
 * @version  1.0
 * @see 
 *
 * <pre>
 *  == 개정이력(Modification Information) ==
 *   
 *   수정일      수정자           수정내용
 *  -------    --------    ---------------------------
 *   2018. 10. 19.  kim          최초 생성
 * 
 * </pre>
 */
@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	private static final String[] PUBLIC_URL_PATTERN = {
			"/api/**", 
			"/approval/**", 
			"/ws/**", 
			"/erp/**", 
			"/b2b/**", 
			"/buyer/**", 
			"/pki/**", 
			"/auth/**", 
			"/error/**", 
			"/oz80/**", 
			"/file/**", 
			"/report/**", 
			"/pdfviewer/**", 
			"/deploy/**", 
			"/deploy_b2b/**", 
			"/*.do"
	};

	@Value("${spring.profiles.active}")
	private String activeProfile;
	
	@Autowired
    private CENJwtTokenProvider cenJwtTokenProvider;
    
	@Override 
	protected void configure(HttpSecurity http) throws Exception {

//		final String logoutProcURL = "/auth/logout.do";
		
		/* security:http */	
		http
		.csrf()
		.disable()
		.authorizeRequests()
		.antMatchers(PUBLIC_URL_PATTERN).permitAll()
		.anyRequest().authenticated()
		//.antMatchers("/**").permitAll()
		.and()

		.headers().frameOptions().sameOrigin()
		.and()
		
		.httpBasic()
		.authenticationEntryPoint(authenticationEntryPoint())//비인증제어		
		.and()
		
		.exceptionHandling()
		.accessDeniedHandler(accessDeniedHandler())
		.and()
		
		/* security:session-management */
		// jwt 사용. 세션 처리 안함
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and()
		
		
		.formLogin()
		.loginPage("/")
		.permitAll()
		.and()
		
		/* security:logout */
//		.logout() 
//		.logoutUrl(logoutProcURL)
//		.logoutSuccessHandler(logoutSuccessHandler())
//		.and()
		
		.addFilterBefore(new CENJwtAuthenticationFilter(cenJwtTokenProvider), UsernamePasswordAuthenticationFilter.class);
		
	}
	
//	@Override
//	public void configure(WebSecurity web) throws Exception {
//		web.ignoring().antMatchers(PUBLIC_URL_PATTERN);
//	}
	
	@Bean
	public CENLogoutSuccessHandler logoutSuccessHandler() {
		return new CENLogoutSuccessHandler();
	}
	
	@Bean
	public CENAuthenticationEntryPoint authenticationEntryPoint() {
		CENAuthenticationEntryPoint cenAuthenticationEntryPoint = new CENAuthenticationEntryPoint();
		cenAuthenticationEntryPoint.setRedirect(true);
		cenAuthenticationEntryPoint.setErrorPage("/error/error2.do");
		
		return cenAuthenticationEntryPoint;
	}
	
	@Bean
	public CENAccessDeniedHandler accessDeniedHandler() {
		CENAccessDeniedHandler cenAccessDeniedHandler = new CENAccessDeniedHandler();
		cenAccessDeniedHandler.setRedirect(true);
		cenAccessDeniedHandler.setErrorPage("/error/error2.do");
		
		return cenAccessDeniedHandler;
	}

}
