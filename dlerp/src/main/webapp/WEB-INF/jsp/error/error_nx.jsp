<%@ page contentType="text/html;charset=utf-8" %>
<%@ page language="java"%>

<%@ page import="java.util.HashMap" %>
<%@ page import="java.util.Map" %>
<%@ page import="com.nexacro17.xapi.data.PlatformData" %>
<%@ page import="com.nexacro17.xapi.data.Variable" %>
<%@ page import="com.nexacro17.xapi.tx.HttpPlatformResponse" %>

<% 
	PlatformData data = new PlatformData();

	Map<String, Object> map = (Map<String, Object>)request.getAttribute("error");
	data.addVariable(new Variable("ErrorCode", 3, map.get("ErrorCode")));
	data.addVariable(new Variable("ErrorMsg", 2, map.get("ErrorMsg")));
	
	HttpPlatformResponse platformResponse = new HttpPlatformResponse(response); 
	platformResponse.setData(data);
	platformResponse.sendData();
	
%>