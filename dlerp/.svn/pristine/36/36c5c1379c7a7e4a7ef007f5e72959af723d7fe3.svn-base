package com.goodcen.cenerp.security.jwt;

import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.goodcen.cenerp.model.CENUserB2BVO;
import com.goodcen.cenerp.model.CENUserVO;
import com.goodcen.common.security.user.CENUserDetails;
import com.goodcen.common.security.user.CENUserDetailsService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
@Component
public class CENJwtTokenProvider {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(CENJwtTokenProvider.class);
	
	@Value("${jwt.key:SECreT_KeY!@21}")
	private String secretKey;

    // 토큰 유효시간 60분
	@Value("${server.servlet.session.timeout:3600}")
    private long tokenValidTime;

	@Resource
    private CENUserDetailsService userDetailsService;

    // 객체 초기화, secretKey를 Base64로 인코딩
    @PostConstruct
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    // JWT 토큰 생성
    public String createToken(String userPk, List<String> roles) {
    	return createToken(userPk, roles, false);
    }
    public String createToken(String userPk, List<String> roles, Boolean isRefresh) {
        Claims claims = Jwts.claims().setSubject(userPk); 
        // claim : JWT payload 에 저장되는 정보단위
        claims.put("roles", roles); // 정보는 key / value 쌍으로 저장
        Date now = new Date();
        Date expire = new Date(now.getTime() + (tokenValidTime * 1000L));
        String token = Jwts.builder()
                .setClaims(claims) // 정보 저장
                .setIssuedAt(now) // 토큰 발행 시간 정보
                .setExpiration(expire) // set Expire Time
                .signWith(SignatureAlgorithm.HS256, secretKey)
                // 사용할 암호화 알고리즘과
                // signature에 들어갈 secret값 세팅
                .compact();
        
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        if (isRefresh) {
        	LOGGER.debug("<<================== REFRESH TOKEN =======================");
        } else {
        	LOGGER.debug("<<================== CREATE TOKEN =======================");
        }
        LOGGER.debug("  PK: " + userPk);
        LOGGER.debug("  TOKEN: " + token);
        LOGGER.debug("  ISSUED: " + format.format(now));
        LOGGER.debug("  EXPIRE: " + format.format(expire));
        LOGGER.debug(" ======================================================>>");
        
        return token;        
    }

    // JWT 토큰에서 인증 정보 조회
    public Authentication getAuthentication(String token) {
    	String strUserPk = this.getUserPk(token);
    	String[] userInfo = strUserPk.split("=");
    	CENUserDetails userDetails = new CENUserDetails(userInfo[0], userInfo[0], false, null);
    	if (userInfo[0].startsWith("B2B")) {
			CENUserB2BVO user = new CENUserB2BVO(); 
	    	user.setID_USER(userInfo[0]);
	    	user.setCD_VENDOR(userInfo[1]);
	    	user.setCD_CORP(userInfo[2]);
	    	user.setCD_DEPT(userInfo[3]);
	    	userDetails.setCENUserVO(user);
    	} else {
    		CENUserVO user = new CENUserVO();
	    	user.setID_USER(userInfo[0]);
	    	user.setCD_CORP(userInfo[1]);
	    	user.setCD_DEPT(userInfo[2]);
	    	userDetails.setCENUserVO(user);
    	}
        return new UsernamePasswordAuthenticationToken(userDetails, "", AuthorityUtils.NO_AUTHORITIES);//userDetails.getAuthorities());
    }

    // 토큰에서 회원 정보 추출
    public String getUserPk(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    // Request의 Header에서 token 값을 가져옴. "X-AUTH-TOKEN" : "TOKEN값'
    public String resolveToken(HttpServletRequest request) {
        return request.getHeader("X-AUTH-TOKEN");
    }

    // 토큰의 유효성 + 만료일자 확인
    public boolean validateToken(String jwtToken) {
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwtToken);
            return !claims.getBody().getExpiration().before(new Date());
        } catch (Exception e) {
            return false;
        }
    }
}
