package com.goodcen.cenerp.mybatis;

import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.Map;

import org.apache.commons.beanutils.PropertyUtils;
import org.apache.commons.lang3.ObjectUtils;
import org.apache.ibatis.executor.parameter.ParameterHandler;
import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.mapping.ParameterMapping;
import org.apache.ibatis.mapping.SqlSource;
import org.apache.ibatis.parsing.XNode;
import org.apache.ibatis.scripting.xmltags.XMLLanguageDriver;
import org.apache.ibatis.session.Configuration;
import org.apache.ibatis.type.JdbcType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import com.goodcen.common.security.user.CENUserDetails;

/**
 * 
 * 
 * 
 * 
 * @filename CENMybatisLanguageDriver.java
 * @author   kim
 * @since    2018. 10. 22.
 * @version  1.0
 * @see 
 *
 * <pre>
 *  == 개정이력(Modification Information) ==
 *   
 *   수정일              수정자                                    수정내용
 *  ------   --------   ---------------------------
 *  2018. 10. 22.	kim          최초 생성
 * 
 * </pre>
 */
public class CENMybatisLanguageDriver extends XMLLanguageDriver {

	private static final Logger LOGGER = LoggerFactory.getLogger(CENMybatisLanguageDriver.class);

	@Override
	public ParameterHandler createParameterHandler(MappedStatement mappedStatement, Object parameterObject, BoundSql boundSql) {
//		addDebuggingComment(boundSql);
		if (!mappedStatement.getId().contains("CENLogMapper")) { 
			addDebuggingParameter(boundSql, parameterObject);
		}
		return super.createParameterHandler(mappedStatement, parameterObject, boundSql);
	}

	@Override
	public SqlSource createSqlSource(Configuration configuration, XNode script, Class<?> parameterType) {
		return super.createSqlSource(configuration, script, parameterType);
	}

	@Override
	public SqlSource createSqlSource(Configuration configuration, String script, Class<?> parameterType) {
		return super.createSqlSource(configuration, script, parameterType);
	}

	@SuppressWarnings("rawtypes")
	private void addDebuggingParameter(BoundSql boundSql, Object parameterObject){
		// 쿼리문을 가져온다(이 상태에서의 쿼리는 값이 들어갈 부분에 ?가 있다)
		String sql = boundSql.getSql();

		SecurityContext context = SecurityContextHolder.getContext();
		Authentication authentication = context.getAuthentication();
		String user = "";
		if (authentication == null || authentication.equals(null) || authentication.getPrincipal().equals("anonymousUser")) {
			user = "guest";
		} else {
			CENUserDetails details = (CENUserDetails) authentication.getPrincipal();
			user = details.getUsername();
		}
		
		if (parameterObject == null) {              
			// 파라미터가 아무것도 없을 경우
			sql = sql.replaceFirst("\\?", "null");
		} else {
			if (parameterObject instanceof Integer || parameterObject instanceof Long || parameterObject instanceof Float || parameterObject instanceof Double) {
				// 해당 파라미터의 클래스가 Integer, Long, Float, Double 클래스일 경우
				sql = sql.replaceFirst("\\?", parameterObject.toString());
			} else if(parameterObject instanceof String) {  
				// 해당 파라미터의 클래스가 String 일 경우(이 경우는 앞뒤에 '(홑따옴표)를 붙여야해서 별도 처리
				sql = sql.replaceFirst("\\?", "'" + parameterObject + "'");
			} else if(parameterObject instanceof Map) {     
				// 해당 파라미터가 Map 일 경우
				
				/*
				 * 쿼리의 ?와 매핑되는 실제 값들의 정보가 들어있는 ParameterMapping 객체가 들어간 List 객체로 return이 된다.
				 * 이때 List 객체의 0번째 순서에 있는 ParameterMapping 객체가 쿼리의 첫번째 ?와 매핑이 된다
				 * 이런 식으로 쿼리의 ?과 ParameterMapping 객체들을 Mapping 한다
				 */
				int cnt = 1;
				for(ParameterMapping mapping : boundSql.getParameterMappings()){
					// 파라미터로 넘긴 Map의 key 값이 들어오게 된다
					String propValue = mapping.getProperty(); 
					if (propValue.contains("PASSWORD")) {
						sql = sql.replaceFirst("\\?", "'####'");
						continue;
					}
					
					if (mapping.getJdbcType() == JdbcType.CURSOR) {
						sql = sql.replaceFirst("\\?", ":CV_" + (cnt++));
						continue;
					}
					
					// 넘겨받은 key 값을 이용해 실제 값을 꺼낸다
					Object value = ((Map) parameterObject).get(propValue);
					
					if (!ObjectUtils.allNotNull(value)) {
						sql = sql.replaceFirst("\\?", "NULL");
					} else if(value instanceof String) {
						// SQL의 ? 대신에 실제 값을 넣는다. 이때 String 일 경우는 '를 붙여야 하기땜에 별도 처리
						sql = sql.replaceFirst("\\?", "'" + value.toString().replace("$", "\\$").replace("#", "\\#") + "'");
					} else {
						sql = sql.replaceFirst("\\?", value.toString());
					}

				}
			}else{                  
				// 해당 파라미터가 사용자 정의 클래스일 경우
				// 이런 식으로 쿼리의 ?과 ParameterMapping 객체들을 Mapping 한다
				List<ParameterMapping> paramMapping = boundSql.getParameterMappings();

				try {
					for(ParameterMapping mapping : paramMapping){
						// 해당 파라미터로 넘겨받은 사용자 정의 클래스 객체의 멤버변수명
						String propValue = mapping.getProperty();
						
						if (PropertyUtils.isReadable(parameterObject, propValue)) {
							// 해당 파라미터로 넘겨받은 사용자 정의 클래스 객체의 멤버변수의 타입
							Class<?> javaType = mapping.getJavaType();   
							Object value = PropertyUtils.getProperty(parameterObject, propValue);
							
							if(String.class == javaType){               // SQL의 ? 대신에 실제 값을 넣는다. 이때 String 일 경우는 '를 붙여야 하기땜에 별도 처리
								sql = sql.replaceFirst("\\?", "'" + value + "'");
							}else{
								sql = sql.replaceFirst("\\?", value.toString());
							}
						}
					}
				} catch (InvocationTargetException | NoSuchMethodException e) {
					LOGGER.error(e.getMessage(), e);
				} catch (IllegalArgumentException | IllegalAccessException e) {
					LOGGER.error(e.getMessage(), e);
				}
			}
			
			sql = "user: " + user + ", sql: " + sql;
			
			LOGGER.info(sql);
		}
	}
	
//	private void addDebuggingComment(BoundSql boundSql) {
//		try {
//			Field sqlField = BoundSql.class.getDeclaredField("sql");
//			sqlField.setAccessible(true);
//
//			String sql = (String) sqlField.get(boundSql);
//			List<ParameterMapping> parameterMappings = boundSql.getParameterMappings();
//			sql = addParameterComment(sql, parameterMappings);
//
//			if (LOGGER.isDebugEnabled()) {
//				LOGGER.debug(sql);
//			}
//
//			sqlField.set(boundSql, sql);
//		} catch (Exception e){
//			e.printStackTrace();
//		}
//	}

//	private String addParameterComment(String sql, List<ParameterMapping> parameters) {
//		StringBuilder sqlInternalStringBuilder = new StringBuilder(sql);
//
//		int paramReverseIndex = parameters.size() - 1;
//		for (int idx = sql.length() - 1; idx > 0; idx--) {
//			char c = sql.charAt(idx);
//			if (c == '?') {
//				String commentedString = toCommentString(parameters.get(paramReverseIndex).getProperty());
//
//				sqlInternalStringBuilder.insert(idx + 1, commentedString);
//				paramReverseIndex = paramReverseIndex - 1;
//			}
//		}
//
//		return sqlInternalStringBuilder.toString();
//	}

//	private String toCommentString(String comment) {
//		return " /*" + comment + "*/ ";
//	}

}
