<%@ page contentType="text/html;charset=utf-8" %>
<!DOCTYPE html>
<html style="height:100%">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<script src="${context}/oz80/ozhviewer/jquery-2.0.3.min.js"></script>
<link rel="stylesheet" href="${context}/oz80/ozhviewer/jquery-ui.css" type="text/css"/>
<script src="${context}/oz80/ozhviewer/jquery-ui.min.js"></script>
<link rel="stylesheet" href="${context}/oz80/ozhviewer/ui.dynatree.css?ver=2" type="text/css"/>
<script type="text/javascript" src="${context}/oz80/ozhviewer/jquery.dynatree.js" charset="utf-8"></script>
<script type="text/javascript" src="${context}/oz80/ozhviewer/OZJSViewer.js?ver=2" charset="utf-8"></script>
<!-- If you want to run the HTML5SVG viewer please change the OZJSViewer.js to OZJSSVGViewer.js.
<script type="text/javascript" src="/ozrviewer/OZJSSVGViewer.js" charset="utf-8"></script>
-->
</head>
<body style="width:98%;height:98%">
<div id="OZViewer" style="width:98%;height:98%"></div>
<script type="text/javascript" >
	function SetOZParamters_OZViewer(){
		var oz;
		oz = document.getElementById("OZViewer");
		oz.sendToActionScript("connection.servlet","${context}/oz80/server");
		oz.sendToActionScript("connection.reportname","${reportname}");
		oz.sendToActionScript("connection.pcount","${pcount}");
		<% if (request.getAttribute("params") != null) { %>
		oz.sendToActionScript("connection.args1","jsonparam=${params}");
		<% } %>
		<% if (request.getAttribute("args") != null) { %>
		oz.sendToActionScript("connection.args2","jsondata=${args}");
		<% } %>
		oz.sendToActionScript("print.mode","false");		
		return true;
	}
	start_ozjs("OZViewer","${context}/oz80/ozhviewer/");
</script>
</body>
</html>
