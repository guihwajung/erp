package com.goodcen.cenerp.security.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.GenericFilterBean;

import com.goodcen.common.security.util.CENAuthenticationHelper;

@Service
public class CENJwtAuthenticationFilter extends GenericFilterBean {
	
	private final CENJwtTokenProvider jwtTokenProvider;
	
	public CENJwtAuthenticationFilter(CENJwtTokenProvider jwtTokenProvider) {
		this.jwtTokenProvider = jwtTokenProvider;
	}
	
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
    	HttpServletRequest httpRequest = (HttpServletRequest)request;
    	//if (httpRequest.getRequestURI().endsWith(".do") && !CENAuthenticationHelper.isAuthenticated(httpRequest)) {
	        // 헤더에서 JWT 받아옴
	        String token = jwtTokenProvider.resolveToken(httpRequest);
	        
	        // 유효한 토큰인지 확인
	        if (token != null && jwtTokenProvider.validateToken(token)) {        
	            // 토큰이 유효하면 토큰으로부터 유저 정보를 받아옴
	            Authentication authentication = jwtTokenProvider.getAuthentication(token);
	            // SecurityContext 에 Authentication 객체를 저장
	            SecurityContextHolder.getContext().setAuthentication(authentication);
	        }
		//}
        chain.doFilter(request, response);
    }
}
