package com.carbonco.ws.erp.approval;

import java.io.StringWriter;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import com.goodcen.common.model.CENCallableMap;
import com.goodcen.common.service.CENCommonService;

@Controller("approvalController")
public class ApprovalController {

	@Resource(name="cenCommonService")
	private CENCommonService cenCommonService;

	@RequestMapping(value = "/ws/approval/select", method = RequestMethod.GET)
	public ResponseEntity<String> select(String corp, String aprv) throws Exception {
		System.out.println("[ApprovalDocument] [corp:" + corp + "] [aprv:" + aprv + "]");
		
		if (corp == null || corp.equals("")) {
			throw new RuntimeException("corp parameter must be not empty");
		}

		if (aprv == null || aprv.equals("")) {
			throw new RuntimeException("aprv parameter must be not empty");
		}
		
		CENCallableMap paramMap = new CENCallableMap();
		paramMap.put("CD_CORP", corp);
		paramMap.put("NO_APRV", Integer.parseInt(aprv));
		
		// 결재문서 생성 SP 실행
		List<List<Map<String, Object>>> resultList =
				(List<List<Map<String, Object>>>) cenCommonService.search("DZZPR_APRV_VIEW_SELECT", paramMap);
		
		return new ResponseEntity<String>(createXmlDocument(resultList), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/ws/approval/update", method = RequestMethod.GET)
	public ResponseEntity<String> update(String corp, String aprv, String status, String user, String doc) throws Exception {
		System.out.println("[ApprovalStatus] [corp:" + corp + "][aprv:" + aprv + "][status:" + status +"][user:" + user + "][doc:" + doc + "]");
		
		if (corp == null || corp.equals("")) {
			throw new RuntimeException("corp parameter must be not empty");
		}

		if (aprv == null || aprv.equals("")) {
			throw new RuntimeException("aprv parameter must be not empty");
		}
		
		if (status == null || status.equals("")) {
			throw new RuntimeException("status parameter must be not empty");
		}

		if (user != null && user.startsWith("CBN")) {
			user = user.replace("CBN", "");
		}
		
		CENCallableMap paramMap = new CENCallableMap(); 
		paramMap.put("CD_CORP", corp);
		paramMap.put("NO_APRV", Integer.parseInt(aprv));
		paramMap.put("ST_APRV", status);
		paramMap.put("ID_APRV", user);
		paramMap.put("NO_DOC", doc);
		
		// 결재문서 상태 업데이트 SP 실행
		List<List<Map<String, Object>>> resultList =
				(List<List<Map<String, Object>>>) cenCommonService.save("DZZPR_APRV_STAT_UPDATE", paramMap);
		
		return new ResponseEntity<String>("OK", HttpStatus.OK);
	}

	
	private String createXmlDocument(List<List<Map<String, Object>>> data) throws Exception {
		// 첨부파일 요청 URL 정보 추가
		CENCallableMap paramMap = new CENCallableMap();
		paramMap.put("CD_SYSTEM", "DZ");
		paramMap.put("CD_CODE", "ATTF_URL");
		List<List<Map<String, Object>>> resultList =
				(List<List<Map<String, Object>>>) cenCommonService.search("DZZPR_CONFIGMGR_SELECT2", paramMap);
		
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		DocumentBuilder builder = factory.newDocumentBuilder();
		Document document = builder.newDocument();
		
		Element root = document.createElement("NewDataSet");
		document.appendChild(root);
		
		for (int i = 0; i < data.size(); i++) {
			Element tableElement = document.createElement("table_" + (i + 1));
			root.appendChild(tableElement);
			
			List<Map<String, Object>> items = data.get(i);
			for (int j = 0; j < items.size(); j++) {
				Element itemElement = document.createElement("item");
				tableElement.appendChild(itemElement);
				
				Map<String, Object> item = items.get(j);
				for (Map.Entry<String, Object> entry : item.entrySet()) {
				    Element keyElement = document.createElement(entry.getKey());
				    keyElement.appendChild(document.createTextNode(entry.getValue() != null ? entry.getValue().toString() : ""));
				    itemElement.appendChild(keyElement);
				}
				Element keyElement = document.createElement("ATTACHED_FILE_HOST_URL");
				keyElement.appendChild(document.createTextNode((String) resultList.get(0).get(0).get("CD_VALUE")));
				itemElement.appendChild(keyElement);
			}
		}
		
		// XML 객체를 문자열로 변환
		TransformerFactory tf = TransformerFactory.newInstance();
		Transformer transformer = tf.newTransformer();
		transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "yes");
		StringWriter writer = new StringWriter();
		transformer.transform(new DOMSource(document), new StreamResult(writer));
		String output = writer.getBuffer().toString().replaceAll("&amp;", "&");

        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + output;
	}
	
}
