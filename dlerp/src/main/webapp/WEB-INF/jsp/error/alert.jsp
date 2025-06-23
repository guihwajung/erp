<%@ page contentType="text/html;charset=utf-8" %>
<html>
<head>
	<title>Page Error</title>
</head>
<body>
	<script type="text/javascript">
		var msg = '${msg}';
		if(parent != null && parent.nexacro != null) {
			parent.nexacro.getApplication().gvWorkFrame.getActiveFrame().form.divWork.form.gfnAlert(msg);
		} else {
			alert(msg);
		}
	</script>
</body>
</html>