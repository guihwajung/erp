<%--@ page contentType="text/html;charset=utf-8"--%>
<%@ page language="java"%>
 
<%@ page import="com.nexacro17.xapi.data.*"%> 
<%@ page import="com.nexacro17.xapi.tx.*"%> 

<%
PlatformData resData = (PlatformData)request.getAttribute("data");
HttpPlatformResponse res = new HttpPlatformResponse(response);
res.setContentType(PlatformType.CONTENT_TYPE_XML); 
res.setCharset("UTF-8"); 
res.setData(resData);
res.sendData();
%>