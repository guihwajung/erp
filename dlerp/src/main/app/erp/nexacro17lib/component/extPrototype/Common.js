var pForm = nexacro.Form.prototype;

if (system.navigatorname != "nexacro DesignMode" && system.navigatorname != "nexacro"){
	history.pushState(null, null, location.href);
	window.onpopstate = function () {
		history.go(1);
	};
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
      var subjectString = this.toString();
      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
  };
}

if (typeof Object.keys !== "function") {
	(function() {
		var hasOwn = Object.prototype.hasOwnProperty;
		Object.keys = Object_keys;
		function Object_keys(obj) {
			var keys = [], name;
			for (name in obj) {
				if (hasOwn.call(obj, name)) {
					keys.push(name);
				}
			}
			return keys;
		}
	})();
}

Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";
    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
}
String.prototype.string = function(len) {
    var s = '', i = 0;
    while (i++ < len) {
        s += this;
    } return s;
}
String.prototype.zf = function(len) {
    return "0".string(len - this.length) + this;
}
Number.prototype.zf = function(len) {
    return this.toString().zf(len);
}

// array 검색 (index 리턴)
Array.prototype.search = function(val) {
    var len = this.length;

    for (var i = 0; i < len; i++) {
        if (this[i] == val) return i;
    }

    return -1;
}

// array 중복 제거
Array.prototype.unique = function() {
    var a = {};
    for (var i = 0; i < this.length; i++) {
        if (typeof a[this[i]] == "undefined") {
            a[this[i]] = 1;
        }

    }
    this.length = 0;
    for (var i in a)
        this[this.length] = i;
    return this;
}

function getDisplayTheme() 
{
	if (window.sessionStorage) 
	{
		var sTheme = sessionStorage.getItem("ID_THEME");
		if (sTheme != null) 
		{
			if(sTheme.indexOf('hdcdvp')>-1) {
				sTheme = "red";
				sessionStorage.setItem("ID_THEME", sTheme);
			}
			return sTheme;
		}
		else
		{
			sessionStorage.setItem("ID_THEME", "red");
		}
	}
	
	return "red";
}

function setDisplayTheme(idTheme) 
{
	var sTheme = getDisplayTheme();
 	
	if (idTheme != sTheme)
	{
		if (idTheme != null && idTheme != undefined)
		{
			sessionStorage.setItem("ID_THEME", idTheme);
			location.reload();
			return false;
		}
	} 	
	
	return true;
}

/*
 *	OZ 리포트 오픈
 */ 
function gfnOpenReportOZ(form, reportpath, odiNames, inFormParam, inOdiParam, winName){
	if(winName == null) winName = "_report";
	var loadParam = new nexacro.TransactionItem("/", form, "report", inFormParam, "", "", 0, true, "", 0);
	var loadOdi = new nexacro.TransactionItem("/", form, "report", inOdiParam, "", "", 0, true, "", 0);
	
    var url = "/report/ozviewer.do";
	var _contextPath = nexacro.getEnvironmentVariable("evContextPath");
	if (_contextPath != null && _contextPath != "") {
		url = _contextPath + url;
	}
	
	var loc;
	if(system.navigatorname == "nexacro") { 
		loc = nexacro.getApplication().xadl;
	} else {
		loc = window.location.href;
	}
	
    var win = window.open('about:blank',winName,'width='+window.innerWidth+',height='+window.innerHeight+',resizable=yes');  
    
	var formEL = document.createElement("form");
    var element1 = document.createElement("input"); 
    var element2 = document.createElement("input");  
    var element3 = document.createElement("input");  
    var element4 = document.createElement("input");  
	
    formEL.method = "POST";
    formEL.action = url;   
	formEL.target = winName;
	formEL.style.display = "none";

	element1.value=reportpath;
	element1.name="reportpath";
	formEL.appendChild(element1);

    element2.value=odiNames;
    element2.name="odinames";
    formEL.appendChild(element2); 
	
    element3.value=loadParam._sendData;
    element3.name="formparams";
    formEL.appendChild(element3); 
	
	element4.value=loadOdi._sendData;
    element4.name="odiparams";
    formEL.appendChild(element4); 
	
	document.documentElement.appendChild(formEL);
    //document.body.appendChild(formEL);
	
    formEL.submit();
}

function gfnOpenReport(form, reportpath, inProc, inParam, inData, isSap, winName){
	if(isSap == null) isSap = false;
	if(inData == null) inData = "";
	if(inData == "") {
		inData = "dsProc=" + inProc;
	} else {
		inData += " dsProc=" + inProc;
	}
	if(winName == null) winName = "_report";
	var loadItem = new nexacro.TransactionItem("/", form, "report", inData, "", "", 0, true, "", 0);
	
    var url = "/report/viewer.do";
	var _contextPath = nexacro.getEnvironmentVariable("evContextPath");
	if (_contextPath != null && _contextPath != "") {
		_contextPath = _contextPath.substring(0, _contextPath.length - 1);
		url = _contextPath + url;
		reportpath = _contextPath + reportpath;
	}
	
	var loc;
	if(system.navigatorname == "nexacro") { 
		loc = nexacro.getApplication().xadl;
	} else {
		loc = window.location.href;
	}
	
    var win = window.open('about:blank',winName,'width='+window.innerWidth+',height='+window.innerHeight+',resizable=yes');  
    
	var formEL = document.createElement("form");
    var element1 = document.createElement("input");
    var element2 = document.createElement("input");
    var element4 = document.createElement("input");
    var element5 = document.createElement("input");
    var element6 = document.createElement("input");
	
    formEL.method = "POST";
    formEL.action = url;   
	formEL.target = winName;
	formEL.style.display = "none";

	element1.value=reportpath;
	element1.name="reportpath";
	formEL.appendChild(element1);

    element2.value=loadItem._sendData;
    element2.name="args";
    formEL.appendChild(element2); 
	
	const inParams = inParam.split(" ");
	if (inParams.length > 0) {
		var loadParam = new nexacro.TransactionItem("/", form, "report", inParams[0], "", "", 0, true, "", 0);
		var element3 = document.createElement("input");
		element3.value = loadParam._sendData;
		element3.name = "params";
		formEL.appendChild(element3); 
		
		for (var i = 1; i < inParams.length; i++) {
			var tempLoadParam = new nexacro.TransactionItem("/", form, "report", inParams[i], "", "", 0, true, "", 0);
			var tempElement = document.createElement("input");
			tempElement.value = tempLoadParam._sendData;
			tempElement.name ="params" + i;
			formEL.appendChild(tempElement);
			console.log('inParams[i]', inParams[i]);
		}
	}
	
    element4.value=(isSap == true ? "Y":"N");
    element4.name="sap";
    formEL.appendChild(element4); 
	
    element5.value=_contextPath;
    element5.name="context";
    formEL.appendChild(element5); 
	
	var dsUser = form.gfnGetApplication().gdsUserInfo;
	var id_form = form.FormInfo.ID_FORM;
	var cd_module = form.FormInfo.CD_MODULE;
	var id_user = dsUser.getColumn(0, "ID_USER");
	var cd_corp = dsUser.getColumn(0, "CD_CORP");
	var cd_dept = dsUser.getColumn(0, "CD_DEPT");
	
    element6.value = "TY_SYSTEM=ERP;ID_FORM="+id_form+";CD_MODULE="+cd_module+";DS_SERVICE=print"+";ID_USER="+id_user+";CD_CORP="+cd_corp+";CD_DEPT="+cd_dept+";DS_TARGET=print";
    element6.name = "log";
    formEL.appendChild(element6);
	
	document.documentElement.appendChild(formEL);
    //document.body.appendChild(formEL);
	
    formEL.submit();
}

pForm.gfnGetReportData = function(objForm, reportpath, inProc, inParam, inData) {

	var strSvcId    = "reportdata";
	var strSvcType  = "report/json";
	var outData     = "";
	var strArg      = "";
	var callBackFnc = "_fnReportDataCallback";
	
	objForm._fnReportDataCallback = function(svcID, errorCode, errorMsg) {
		if(errorCode == 0) {
			this.gfnAlert(errorMsg);
		}
	};
	
	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
						strSvcType , 	// transaction을 요청할 구분
						inProc,			// Procedure 정보 Dataset 이름
						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
						callBackFnc); 	// 통신방법 정의 [생략가능]
};
pForm.gfnAutoForm = function(callback) {
	var objApp = this.gfnGetApplication();
	if(objApp.gdsAutoForm.rowcount == 0) {
		this.gfnAlert("데이터가 없습니다.");
		return;
	}
	
	var strSvcId    = "autoform";
	var strSvcType  = "file/autoform";
	var inProc      = "";
	var inData      = "dsAutoForm=gdsAutoForm";
	var outData     = "";
	var strArg      = "";
	var callBackFnc = "_gfnAutoFormCallback";
	if(!this.gfnIsNull(callback)) {
		callBackFnc = callback;
	}
   
	this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
						strSvcType ,    // transaction을 요청할 구분
						inProc,         // Procedure 정보 Dataset 이름
						inData ,        // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
						outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
						strArg,         // 입력값으로 보낼 arguments, strFormData="20120607"
						callBackFnc); // 통신방법 정의 [생략가능]
};

pForm._gfnAutoFormCallback = function(svcID, errorCode, errorMsg, strArg)
{
	if(errorCode != 0) {
		this.gfnAlert(errorMsg);
	}
// 	else {
// 		this.gfnAlert("완료 되었습니다.");
// 	}
}
