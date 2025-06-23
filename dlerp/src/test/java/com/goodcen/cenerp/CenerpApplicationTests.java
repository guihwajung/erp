package com.goodcen.cenerp;
 
import javax.annotation.Resource;
 
import org.jasypt.encryption.StringEncryptor;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
 
@SpringBootTest
@TestPropertySource(properties = {
		"spring.profiles.active=default",
})
class CenerpApplicationTests {
 
	@Resource(name="jasyptStringEncryptor")
	private StringEncryptor stringEncryptor;
	@Test
	void contextLoads() {
		GetEncryptInfo();
	}
	 
	 
	public void GetEncryptInfo() {
		// jwt.key
		String key_enc = stringEncryptor.encrypt("#WFM@GoodcenERP@#");
		System.out.println("key = ENC(" + key_enc + ")");
		 
		// id
		String id_enc = stringEncryptor.encrypt("azureadmin");
		System.out.println("id = ENC(" + id_enc + ")");
		 
		// pw
		String pw_enc = stringEncryptor.encrypt("qwer1234!@#$");
		System.out.println("pw = ENC(" + pw_enc + ")");
		 
		// 테스트용 복호화
		String id_des = stringEncryptor.decrypt(id_enc);
		String pw_des = stringEncryptor.decrypt(pw_enc);
		System.out.println("id = " + id_des + ", pw = " + pw_des);
	}
}