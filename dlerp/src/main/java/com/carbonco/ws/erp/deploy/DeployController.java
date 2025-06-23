package com.carbonco.ws.erp.deploy;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.carbonco.ws.erp.deploy.model.RevisionResponse;
import com.carbonco.ws.erp.deploy.util.SvnClientExecutor;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.goodcen.common.service.CENCommonService;

@Controller("deployController")
public class DeployController {
	
	@Resource(name = "cenCommonService")
	private CENCommonService cenCommmonService;
	
	@RequestMapping(value = "/ws/deploy/revision.do", method = RequestMethod.PUT)
	public ResponseEntity<String> revision(@RequestBody Revision revision) {
		String contents = SvnClientExecutor.getRevision(revision.getRepository());
		System.out.println(revision.toString() + " contents:[" + contents + "]");

		List<RevisionResponse> response = parseContents(contents);
		
		ObjectMapper mapper = new ObjectMapper();
		String json = "{}";
		try {
			json = mapper.writeValueAsString(response);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		
		return new ResponseEntity<String>(json, HttpStatus.OK);
	}
	
	static private class Revision {
		
		private String repository;
		
		public Revision() {
			
		}
		
		public String getRepository() {
			return repository;
		}

		@Override
		public String toString() {
			return "Revision [repository=" + repository + "]";
		}
		
	}
	
	private List<RevisionResponse> parseContents(String contents) {
		List<RevisionResponse> response = new ArrayList<>();

		String[] revisions = contents.split("------------------------------------------------------------------------\n");
		for (int i = 0; i < revisions.length; i++) {
			RevisionResponse resp = null;
			String revision = revisions[i];
			if (revision.startsWith("r")) {
				String[] lines = revisions[i].split("\n");

				String rev = lines[0].split("\\|")[0].trim().replace("r", "");
				String user = lines[0].split("\\|")[1].trim();
				String datetime = String.join("", lines[0].split("\\|")[2].trim().split("\\+0900")[0]).replaceAll("-", "").replaceAll(":", "").replaceAll(" ", "");
				
				resp = new RevisionResponse(Integer.parseInt(rev), user, datetime);
				
				for (int j = 2; j < lines.length; j++) {
					String[] array = lines[j].trim().split(" ");
					if (array.length == 1) {
						continue;
					} else if (array.length == 2 && 
							  (array[0].equals("A") || array[0].equals("C") || array[0].equals("D") || array[0].equals("M") || array[0].equals("G"))) {
						String status = lines[j].trim().split(" ")[0];
						String fullpath = lines[j].trim().split(" ")[1];
						String path = fullpath.substring(0, fullpath.lastIndexOf("/"));
						String name = fullpath.substring(fullpath.lastIndexOf("/") + 1);

						resp.addItem(new RevisionResponse.Item(status, path, name));
					} else {
						String comment = lines[j].trim();

						resp.setComment(comment);
					}
				}
				response.add(resp);
			}
		}

		return response;
	}

}
