package com.goodcen.framework.config;

import javax.sql.DataSource;

import org.apache.commons.lang3.StringUtils;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.lookup.JndiDataSourceLookup;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * 
 * @filename DataSourceContext.java
 * @author kim
 * @since 2018. 11. 22.
 * @version 1.0
 * @see
 *
 *      <pre>
 *  == 개정이력(Modification Information) ==
 *   
 *   수정일              수정자                                    수정내용
 *  ------   --------   ---------------------------
 *  2018. 11. 22.	kim          최초 생성
 * 
 *      </pre>
 */
@Configuration
@ConditionalOnProperty(prefix = "spring.datasource.sub", name = {"jdbc-url"})
@EnableTransactionManagement
@MapperScan(basePackages = { "com.goodcen.cenerp.mapper.sub" }, sqlSessionFactoryRef = "subSqlSessionFactory")
public class DatabaseSubConfiguration {

	@Value("${spring.datasource.sub.jndi-name:}")
	private String subJndiName;

	@Value("${spring.datasource.sub.mybatis.type-aliases-package:${mybatis.type-aliases-package}}")
	private String myBatisTypeAliasesPackage;
	
	@Value("${spring.datasource.sub.mybatis.mapper-locations:${mybatis.mapper-locations}}")
	private String myBatisMapperLocations;
	
	@Value("${spring.datasource.sub.mybatis.config-location:${mybatis.config-location}}")
	private String myBatisConfigLocation;

	@Bean(name="subDataSource")
	@ConfigurationProperties(prefix = "spring.datasource.sub")
	public DataSource subDataSource() {
		if (StringUtils.isBlank(subJndiName)) {
			return DataSourceBuilder.create().build();
		} else {
			JndiDataSourceLookup lookup = new JndiDataSourceLookup();
			return lookup.getDataSource(subJndiName);
		}
	}

	@Bean(name="subTransactionManager")
	public DataSourceTransactionManager subTransactionManager(@Qualifier("subDataSource") DataSource dataSource) {
		return new DataSourceTransactionManager(dataSource);
	}

	@Bean(name="subSqlSessionFactory")
	public SqlSessionFactory subSqlSessionFactory(@Qualifier("subDataSource") DataSource dataSource) throws Exception {
		SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
		sqlSessionFactoryBean.setDataSource(dataSource);
		PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
		sqlSessionFactoryBean.setTypeAliasesPackage(myBatisTypeAliasesPackage);
		sqlSessionFactoryBean.setMapperLocations(resolver.getResources(myBatisMapperLocations));
		sqlSessionFactoryBean.setConfigLocation(resolver.getResource(myBatisConfigLocation));
		return sqlSessionFactoryBean.getObject();
	}

	@Bean(name = "subSqlSessionTemplate")	
	public SqlSessionTemplate subSqlSessionTemplate(@Qualifier("subSqlSessionFactory") SqlSessionFactory sqlSessionFactory) {
		return new SqlSessionTemplate(sqlSessionFactory);
	}

}