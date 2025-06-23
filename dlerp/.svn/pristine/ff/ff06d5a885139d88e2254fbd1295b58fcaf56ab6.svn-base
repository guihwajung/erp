(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameQuickView");
            this.set_titletext("New Form");
            this.set_background("lightblue");
            this.set_visible("false");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,40);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">login</Col><Col id=\"SP\">DZZPR_USERID_LOGIN_NEW</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","10","8","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("ID_USER");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","sta00:0","8","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","edt00:20","8","75","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("CD_CORP");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00","sta00_00:0","8","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","edt00_00:20","8","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("CD_DEPT");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_01","sta00_01:0","8","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSet","edt00_01:30","8","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("CHANGE");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME","685","8","95","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,40,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt00","value","dsUser","ID_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt00_00","value","dsUser","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt00_01","value","dsUser","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameQuickView.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.gcToken = "";

        this.frameQuickView_onload = function(obj,e) {
        	this.dsUser.setColumn(0, "ID_USER", "ERP1");
        	this.dsUser.setColumn(0, "CD_CORP", "01");
        	this.dsUser.setColumn(0, "CD_DEPT", "HQ0005");
        };

        this.SetQuickViewUser = function(url) {
        	if (url==null) url = "";

        	if (url.indexOf("tk=") > -1) {
        		this.dsUser.clearData();

        		var strSvcId    = "loginInfo";
        		var strSvcType  = "loginInfo";

        		var inProc		= "";
        		var inData      = "dsLogin=dsUser";
        		var outData     = "dsUserInfo=output0 dsDeptList=output1";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        // 		if (system.navigatorname != "nexacro") {
        // 			var param = this.gfnGetUrlParam(location.href);
        // 			if (param.tk != null) {
        // 				strArg = "tk=" + param.tk;
        // 			}
        // 		}

        		this.gfnTransaction(strSvcId,				// transaction을 구분하기 위한 svc id값
        							strSvcType, 			// trabsaction을 요청할 구분
        							inProc,					// Procedure 정보 Dataset 이름
        							inData, 				// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData, 				// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 				// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc, false); 	// 통신방법 정의 [생략가능]

        	//} else if (url.indexOf("localhost") > -1) {
        	} else {
        		nexacro.setEnvironmentVariable("evQuikViewLocal", "Y");

        		var strSvcId    = "loginInfo";
        		var strSvcType  = "select";

        		var inProc		= "_dsProc";
        		var inData      = "login=dsUser";
        		var outData     = "dsUserInfo=login0 dsDeptList=login1";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction(strSvcId,				// transaction을 구분하기 위한 svc id값
        							strSvcType, 			// trabsaction을 요청할 구분
        							inProc,					// Procedure 정보 Dataset 이름
        							inData, 				// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData, 				// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 				// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc, false); 	// 통신방법 정의 [생략가능]
        	}
        }

        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	switch (svcID) {
        	case "loginInfo":
        		if (this.dsUserInfo.rowcount > 0 ) {
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
        			nexacro.setEnvironmentVariable("evUserId", id_user);
        			nexacro.setEnvironmentVariable("evUserNm", this.objApp.gdsUserInfo.getColumn(0,"DS_HNAME"));

        			var dec_key = nexacro.getEnvironmentVariable("evKey");
        			var key = CryptoJS.enc.Hex.parse(dec_key.toString());
        			//var encId = nexacro.base64Encode(CryptoJS.AES.encrypt(id_user, key, {iv:key}).toString());
        			//nexacro.setCookieVariable("tk-"+encId, CryptoJS.AES.encrypt(this.gcToken, key, {iv:key}).toString());
        			sessionStorage.setItem("tk", CryptoJS.AES.encrypt(this.gcToken, key, {iv:key}).toString());

        			window.history.pushState("erp","", "?v=1");

        			return;
        		} else {
        			this.gfnAlert("해당하는 사용자가 없습니다.");
        		}
        		break;
        	}
        };

        this.btnSet_onclick = function(obj,e) {
        	var url;
        	if(system.navigatorname == "nexacro") {
        		url = nexacro.getApplication().xadl;
        	} else {
        		url = window.location.href;
        	}
        	this.SetQuickViewUser(url);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frameQuickView_onload,this);
            this.btnSet.addEventHandler("onclick",this.btnSet_onclick,this);
        };
        this.loadIncludeScript("frameQuickView.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
