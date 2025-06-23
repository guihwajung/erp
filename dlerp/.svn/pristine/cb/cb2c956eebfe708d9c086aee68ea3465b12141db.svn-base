package com.goodcen.framework.config;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import javax.sql.DataSource;

import org.apache.commons.lang3.StringUtils;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.Resource;
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
@EnableTransactionManagement
@MapperScan(basePackages = { "com.goodcen.framework.mapper", "com.goodcen.cenerp.mapper.common" }, sqlSessionFactoryRef = "sqlSessionFactory")
public class DatabaseConfiguration {

	@Bean
	@Primary
    @ConfigurationProperties(prefix = "spring.datasource")
    public DataSourceProperties dataSourceProp() {
        return new DataSourceProperties();
    }
	 
	@Value("${spring.datasource.jndi-name:}")
	private String jndiName;

	@Value("${mybatis.type-aliases-package}")
	private String myBatisTypeAliasesPackage;
	
	@Value("${mybatis.mapper-locations}")
	private String myBatisMapperLocations;
	
	@Value("${mybatis.config-location}")
	private String myBatisConfigLocation;
	
	@Bean
	@Primary
    @ConfigurationProperties(prefix = "spring.datasource")
	public DataSource dataSource() throws SQLException {
		if (StringUtils.isBlank(jndiName)) {
			return DataSourceBuilder.create().build();
		} else {
			JndiDataSourceLookup lookup = new JndiDataSourceLookup();
			return lookup.getDataSource(jndiName);
		}
	}
	
	@Bean
	@Primary
	public DataSourceTransactionManager transactionManager(@Qualifier("dataSource") DataSource dataSource) {
		return new DataSourceTransactionManager(dataSource);
	}

	@Bean
	@Primary
	public SqlSessionFactory sqlSessionFactory(@Qualifier("dataSource") DataSource dataSource) throws Exception {
		SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
		sqlSessionFactoryBean.setDataSource(dataSource);
		PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        List<Resource> resources = new ArrayList<>();
		Arrays.stream(myBatisMapperLocations.split(",")).forEach(v->{
            try {
                Collections.addAll(resources, resolver.getResources(v));
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        });
		sqlSessionFactoryBean.setTypeAliasesPackage(myBatisTypeAliasesPackage);		
		sqlSessionFactoryBean.setMapperLocations(resources.toArray(new Resource[0]));
		sqlSessionFactoryBean.setConfigLocation(resolver.getResource(myBatisConfigLocation));
		return sqlSessionFactoryBean.getObject();
	}

	@Bean
	@Primary
	public SqlSessionTemplate sqlSessionTemplate(@Qualifier("sqlSessionFactory") SqlSessionFactory sqlSessionFactory) {
		return new SqlSessionTemplate(sqlSessionFactory);
	}

}