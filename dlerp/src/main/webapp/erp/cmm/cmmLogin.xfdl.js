(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmAlert");
            this.set_titletext("");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PWDCHG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"MM_PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CURRENT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_INIT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divLogin","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"30","0",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_text("로그인");
            obj.getSetter("uWord").set("popup.notice");
            obj.set_cssclass("sta_POP_Title");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("sta00","0","30","320","181",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_LOGIN_Bg");
            this.addChild(obj.name, obj);

            obj = new Edit("edId","39","49","240","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("edi_LOGIN_ID");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edPw","39","96","240","41",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("edi_LOGIN_PW");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogin","38","151","242","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_LOGIN_Login");
            obj.set_text("LOGIN");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",320,210,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmLogin.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this._userInfo = {};

        this.form_onload = function(obj,e) {
        	console.log(this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));

        	this.edId.set_value(this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
        	this.edPw.setFocus();

        	this._userInfo.ID_USER = this.objApp.gdsUserInfo.getColumn(0, "ID_USER");
        	this._userInfo.CD_CORP = this.objApp.gdsUserInfo.getColumn(0, "CD_CORP");
        	this._userInfo.CD_DEPT = this.objApp.gdsUserInfo.getColumn(0, "CD_DEPT");
        };

        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	var dec_key = nexacro.getEnvironmentVariable("evKey");
        	var key = CryptoJS.enc.Hex.parse(dec_key.toString());

        	switch(svcID) {
        	case "login":
        		this.dsLogin.clearData();
        		this.objApp.gdsUserInfo.clearData();
        		this.objApp.gdsDeptInfo.clearData();

        		if (this.dsDeptList.rowcount > 0 ) {
        			nexacro.setHTTPHeaderVariable("X-AUTH-TOKEN", this.gcToken);
        			nexacro.setEnvironmentVariable("LAST-DATE-TOKEN", new Date());

        			if (this.dsDeptList.rowcount == 1 ) {
        				var nRow = this.dsLogin.addRow();
        				this.dsLogin.setColumn(nRow , "ID_USER", CryptoJS.AES.encrypt(this.dsDeptList.getColumn(this.dsDeptList.rowposition, "ID_USER"), key, {iv:key}).toString());
        				this.dsLogin.setColumn(nRow , "CD_CORP", CryptoJS.AES.encrypt(this.dsDeptList.getColumn(this.dsDeptList.rowposition, "CD_CORP"), key, {iv:key}).toString());
        				this.dsLogin.setColumn(nRow , "CD_DEPT", CryptoJS.AES.encrypt(this.dsDeptList.getColumn(this.dsDeptList.rowposition, "CD_DEPT"), key, {iv:key}).toString());

        				this.fnUserInfo();
        			} else {
        				for (var i = 0; i < this.dsDeptList.rowcount; i++) {
        					if (this.dsDeptList.getColumn(i, "ID_USER") == this._userInfo.ID_USER
        						&& this.dsDeptList.getColumn(i, "CD_CORP") == this._userInfo.CD_CORP
        						&& this.dsDeptList.getColumn(i, "CD_DEPT") == this._userInfo.CD_DEPT) {
        						this.dsLogin.setColumn(nRow , "ID_USER", CryptoJS.AES.encrypt(this.dsDeptList.getColumn(i, "ID_USER"), key, {iv:key}).toString());
        						this.dsLogin.setColumn(nRow , "CD_CORP", CryptoJS.AES.encrypt(this.dsDeptList.getColumn(i, "CD_CORP"), key, {iv:key}).toString());
        						this.dsLogin.setColumn(nRow , "CD_DEPT", CryptoJS.AES.encrypt(this.dsDeptList.getColumn(i, "CD_DEPT"), key, {iv:key}).toString());
        						this.fnUserInfo();
        						break;
        					}
        				}
        			}
        			return;
        		}

        		alert("로그인에 실패하였습니다.");
        		break;

        	case "loginInfo":
        		if (this.dsUserInfo.rowcount == 1 ) {
        			nexacro.setHTTPHeaderVariable("X-AUTH-TOKEN", this.gcToken);
        			nexacro.setEnvironmentVariable("LAST-DATE-TOKEN", new Date());

        			// 사용자 정보 글로벌데이타셋에 저장
        			this.objApp.gdsUserInfo.copyData(this.dsUserInfo);
        			this.objApp.gdsDeptInfo.copyData(this.dsDeptList);

        			var userInfo = this.objApp.gvUserInfo;
        			for(var i = 0; i < this.dsUserInfo.colinfos.length; i++) {
        				var col = this.dsUserInfo.colinfos[i].name;
        				userInfo[col] = this.dsUserInfo.getColumn(0, col);
        			}

        			this.dsUserInfo.clearData();
        			this.dsDeptList.clearData();

        			//gloval variable 세팅
        			var id_user = this.objApp.gdsUserInfo.getColumn(0,"ID_USER");
        			nexacro.setHTTPHeaderVariable("X-AUTH-USER", CryptoJS.AES.encrypt("[ERP] " + id_user, key, {iv:key}).toString());
        			nexacro.setEnvironmentVariable("evUserId", id_user);
        			nexacro.setEnvironmentVariable("evUserNm", this.objApp.gdsUserInfo.getColumn(0,"DS_HNAME"));

        			sessionStorage.setItem("tk", CryptoJS.AES.encrypt(this.gcToken, key, {iv:key}).toString());

        			this.close(true);

        			return;
        		}
        		break;
        	}
        };

        this.fnLogin = function() {
        	var id = this.edId.text;
        	var pw = this.edPw.text;

        	if (this.gfnIsNull(id)) {
        		this.fnVaidateCallback = function() {
        			this.edId.setFocus();
        		}
        		this.gfnAlert("아이디를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}
        	if (this.gfnIsNull(pw)) {
        		this.fnVaidateCallback = function() {
        			this.edPw.setFocus();
        		}
        		this.gfnAlert("비밀번호를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	this.gcToken = "";
        	nexacro.removeHTTPHeaderVariable("X-AUTH-TOKEN");
        	sessionStorage.removeItem("tk");

        	var dec_key = nexacro.getEnvironmentVariable("evKey");
        	var key = CryptoJS.enc.Hex.parse(dec_key.toString());

        	this.dsSearch = new Dataset();
        	this.dsSearch.addColumn("ID_USER", "string");
        	this.dsSearch.addColumn("ID_PASSWORD", "string");

        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "ID_USER", CryptoJS.AES.encrypt(id, key, {iv:key}).toString());
        	this.dsSearch.setColumn(0, "ID_PASSWORD", CryptoJS.AES.encrypt(pw, key, {iv:key}).toString());

        	var strSvcId    = "login";
        	var strSvcType  = "login";

        	var inProc		= "";
        	var inData      = "dsLogin=dsSearch";
        	var outData     = "dsDeptList=output0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        };

        this.fnUserInfo = function(rowIndex) {
        	var strSvcId    = "loginInfo";
        	var strSvcType  = "loginInfo";

        	var inProc		= "";
        	var inData      = "dsLogin=dsLogin";
        	var outData     = "dsUserInfo=output0 dsDeptList=output1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	if (system.navigatorname != "nexacro") {
        // 		var param = this.gfnGetUrlParam(location.href);
        // 		if (param.tk != null) {
        // 			strArg = "tk=" + param.tk;
        // 		}
        		if (sessionStorage.getItem("tk") != null) {
        			var dec_key = nexacro.getEnvironmentVariable("evKey");
        			var key = CryptoJS.enc.Hex.parse(dec_key.toString());
        			nexacro.setHTTPHeaderVariable("X-AUTH-TOKEN", CryptoJS.AES.decrypt(sessionStorage.getItem("tk"), key, {iv:key}).toString(CryptoJS.enc.Utf8));
        		}
        	}

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        this.divLogin_btnLogin_onclick = function(obj,e) {
        	this.fnLogin();
        };

        this.divLogin_onkeyup = function(obj,e) {
        	if (e.keycode == 13) {
        		var id = this.edId.text
        		var pw = this.edPw.text;
        		if (!this.gfnIsNull(id) && !this.gfnIsNull(pw)) {
        			this.fnLogin();
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edId.addEventHandler("onkeyup",this.divLogin_onkeyup,this);
            this.edPw.addEventHandler("onkeyup",this.divLogin_onkeyup,this);
            this.btnLogin.addEventHandler("onclick",this.divLogin_btnLogin_onclick,this);
        };
        this.loadIncludeScript("cmmLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
