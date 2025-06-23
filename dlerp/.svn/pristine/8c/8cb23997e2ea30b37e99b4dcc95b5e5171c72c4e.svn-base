if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::nexacro17");
        this.set_key("nexacro17");
        this.set_httpretry("0");
        this.set_filesecurelevel("all");
        this.set_networksecurelevel("all");
        this.set_tracemode("append");
    };
    env.on_initEvent = function ()
    {
        // add event handler
        this.addEventHandler("onerror",this.Environment_onerror,this);
    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "210806", "0");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "0");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "0");
        nexacro._addService("CustomPatch", "js", "./nexacro17lib/component/CustomPatch/", "session", null, "", "0", "0");
        nexacro._addService("extPrototype", "js", "./nexacro17lib/component/extPrototype/", "session", null, "", "0", "0");
        nexacro._addService("lib", "js", "./lib/", "session", null, "", "0", "0");
        nexacro._addService("frame", "form", "./frame/", "session", null, "", "0", "0");
        nexacro._addService("cmm", "form", "./cmm/", "session", null, "", "0", "0");
        nexacro._addService("svcUrl", "JSP", "http://localhost:8080", "none", null, "", "0", "0");
        nexacro._addService("dzz", "form", "./erp/dz/dzz/", "dynamic", null, "", "0", "0");
        nexacro._addService("dz", "form", "./erp/dz/", "dynamic", null, "", "0", "0");
        nexacro._addService("da", "form", "./erp/da/", "dynamic", null, "", "0", "0");
        nexacro._addService("db", "form", "./erp/db/", "dynamic", null, "", "0", "0");
        nexacro._addService("dc", "form", "./erp/dc/", "dynamic", null, "", "0", "0");
        nexacro._addService("df", "form", "./erp/df/", "dynamic", null, "", "0", "0");
        nexacro._addService("dh", "form", "./erp/dh/", "dynamic", null, "", "0", "0");
        nexacro._addService("di", "form", "./erp/di/", "dynamic", null, "", "0", "0");
        nexacro._addService("dl", "form", "./erp/dl/", "dynamic", null, "", "0", "0");
        nexacro._addService("dm", "form", "./erp/dm/", "dynamic", null, "", "0", "0");
        nexacro._addService("do", "form", "./erp/do/", "dynamic", null, "", "0", "0");
        nexacro._addService("dq", "form", "./erp/dq/", "dynamic", null, "", "0", "0");
        nexacro._addService("dr", "form", "./erp/dr/", "dynamic", null, "", "0", "0");
        nexacro._addService("ds", "form", "./erp/ds/", "dynamic", null, "", "0", "0");
        nexacro._addService("du", "form", "./erp/du/", "dynamic", null, "", "0", "0");
        nexacro._addService("dv", "form", "./erp/dv/", "dynamic", null, "", "0", "0");
        nexacro._addService("dw", "form", "./erp/dw/", "dynamic", null, "", "0", "0");
        nexacro._addService("dy", "form", "./erp/dy/", "dynamic", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacro17lib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"Sketch", "classname":"nexacro.Sketch", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables
        nexacro.setEnvironmentVariable("evRunMode", "0");
        nexacro.setEnvironmentVariable("evUserId", "");
        nexacro.setEnvironmentVariable("evUserNm", "");
        nexacro.setEnvironmentVariable("evTraceMode", "true");
        nexacro.setEnvironmentVariable("evMessagePopup", "true");
        nexacro.setEnvironmentVariable("evQuikView", "N");
        nexacro.setEnvironmentVariable("evKey", "2343454e455250232343454e45525023");
        nexacro.setEnvironmentVariable("evContextPath", "");
        nexacro.setEnvironmentVariable("evCompanyName", "CARBONCO");
        // Cookies

        // HTTP Header
        nexacro.setHTTPHeaderVariable("Nexacro", "17");
    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
    // User Script
    env.registerScript("environment.xml", function() {
    /**
     * @description 통신오류 알림
    */
    this.Environment_onerror = function(obj,e)
    {
    	//trace("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Environment_onerror!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    	//trace("e.statuscode : " + e.statuscode);
    	//trace("e.errormsg : " + e.errormsg);

    	// 스크립트 에러
    	if (e.statuscode == 0) {
    		//alert(e.statuscode + "\n"+e.errormsg);
    	}
    	else if (e.statuscode == 404) {
    		alert(e.statuscode+"\n"+"Page Not Found"+"\n"+e.errormsg);
    	}
    	else if (e.statuscode == 408) {
    		alert(e.statuscode+"\n"+"Request Timeout" + "\n"+e.errormsg);
    	}
    	else if (e.statuscode == 500) {
    		alert(e.statuscode+"\n"+"Internal Server Error" + "\n"+e.errormsg);
    	}
    	else if (e.statuscode == 503) {
    		alert(e.statuscode+"\n"+"The service is unavailable" + "\n"+e.errormsg);
    	}
    	else if (e.statuscode == 12029) {
    		alert(e.statuscode+"\n"+"A connection with the server could not be established" + "\n"+e.errormsg);
    	}
    	// 미등록 오류 발생
    	else {
    		alert(e.statuscode + "\n" + e.errormsg);
    	}
    };

    });
					
    env = null;
}
