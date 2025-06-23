(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PWDCHG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"MM_PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CURRENT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_INIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID_USER\">ERP1</Col><Col id=\"CD_CORP\">01</Col><Col id=\"DS_CORP\">주식회사 굿센</Col><Col id=\"CD_DEPT\">A0200601</Col><Col id=\"DS_DEPT\">경영기획팀</Col><Col id=\"DT_PWDCHG\">20190410</Col><Col id=\"TY_PASSWORD\">Y</Col><Col id=\"MM_PASSWORD\">9000</Col><Col id=\"DT_CURRENT\">20200430</Col><Col id=\"YN_INIT\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsParamAuthForm", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsParamBtnInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthForm", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtnInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZZ_POPUP_TEST.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.objForm = {};

        this.form_onload = function(obj,e)
        {
        	//this.objApp = this.gfnGetApplication();
        	//this.objApp.gdsUserInfo.copyData(this.dsLogin);

        // 	// -- 필수 -------------------//
         	this.gfnFormOnLoad(this);
        	//this.gfn_Overrides_FormInfo(this);
        	//this.gfnFormInfo(this);
        // 	// ---------------------------//

        	this.fnInit();
        	this.fnFormSetting();

        // 	this.fnSetButton();
        // 	this.fnSetExtendButton();
        // 	this.fnSetVariable();
        // 	this.fnSetEvent();
        // 	this.fnSetParameter();
        };

        this.fnInit = function()
        {
        	var urlPath = window.location.protocol + "//" + window.location.host;
        	if (system.navigatorname == "nexacro")
        	{
        		var xadl = nexacro.getProjectPath();
        		if (xadl.indexOf("file://") == -1) {
        			urlPath = xadl.substring(0, xadl.lastIndexOf("erp")).replace("/erp/", "");
        		}
        	}

        	var objEnv = nexacro.getEnvironment();
        	var objSrv = objEnv.services["svcUrl"];
        	objSrv.set_url(urlPath);

        	nexacro.setEnvironmentVariable("evSiteCd", "03");
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	//this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZZ_SAMPLE0");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "authform") {
        		if (this.dsAuthForm.rowcount > 0) {
        			// 폼 정보
        			this.objForm.CD_MODULE = this.dsAuthForm.getColumn(0, "CD_MODULE");
        			this.objForm.ID_FORM = this.dsAuthForm.getColumn(0, "ID_FORM");
        			this.objForm.NM_FORM = this.dsAuthForm.getColumn(0, "NM_FORM");
        			this.objForm.ID_GROUP = this.dsAuthForm.getColumn(0, "ID_GROUP");
        			this.objForm.GR_SEARCH = this.dsAuthForm.getColumn(0, "GR_SEARCH");
        			this.objForm.TY_AUTH = this.dsAuthForm.getColumn(0, "TY_AUTH");
        			this.objForm.DS_FORM = this.dsAuthForm.getColumn(0, "DS_FORM");
        			this.objForm.CD_ROLE = this.dsAuthForm.getColumn(0, "CD_ROLE");
        			this.objForm.TY_MENU = this.dsAuthForm.getColumn(0, "TY_MENU");
        			this.objForm.DS_PARAM = this.dsAuthForm.getColumn(0, "DS_PARAM");

        			// 버튼 정보
        			this.objForm.BtnInfo = [];
        			for(var i = 0; i < this.dsBtnInfo.rowcount; i++) {
        				var json = {};
        				json.ID_BUTTON = this.dsBtnInfo.getColumn(i, "ID_BUTTON");
        				json.DS_BUTTON = this.dsBtnInfo.getColumn(i, "DS_BUTTON");
        				json.TY_BUTTON = this.dsBtnInfo.getColumn(i, "TY_BUTTON");
        				json.RM_BUTTON = this.dsBtnInfo.getColumn(i, "RM_BUTTON");
        				json.YN_VISIBLE = this.dsBtnInfo.getColumn(i, "YN_VISIBLE");
        				json.YN_ENABLED = this.dsBtnInfo.getColumn(i, "YN_ENABLED");
        				json.YN_QUERYX = this.dsBtnInfo.getColumn(i, "YN_QUERYX");
        				json.YN_UPDATEBLOCK = this.dsBtnInfo.getColumn(i, "YN_UPDATEBLOCK");
        				json.SN_ORDER = this.dsBtnInfo.getColumn(i, "SN_ORDER");
        				this.objForm.BtnInfo.push(json);
        			}

        			var json = this.gfnArgsToJson(strArg);
        			if (json.type == "popup" || json.type == "dialog") {
        				if(this.objForm.TY_MENU == "Dialog") {
        					json.type = "dialog";
        				}

        				this.objForm.CD_MODULE = json.cd_module;
        				this.objForm.ID_FORM = json.id_form;
        				this.objForm.POP_WIDTH = this.gfnIsNull(json.width) ?  window.innerWidth: nexacro.toNumber(json.width);
        				this.objForm.POP_HEIGHT = this.gfnIsNull(json.height) ? window.innerHeight-10: nexacro.toNumber(json.height);
        				this.objForm.POP_CALLBACK = this.gfnIsNull(json.callback) ? "": json.callback;
        				this.objForm.POP_ARGS = json;

        				this.gfnCallPopup(this.objForm, json.type);
        			}
        // 			else if (json.type == "ext") {
        // 				// 외부 다이렉트 화면 접근
        // 				var func = this.objApp.gvMainFrame.form.lookupFunc(json.callback);
        // 				if (func != null) {
        // 					func.call(this.objForm);
        // 				}
        // 			}
        // 			else {
        // 				this.gfnCallNew(this.objForm);
        // 			}
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnFormSetting = function()
        {
        	var url = window.location.href;
        	var start = url.indexOf("?");

        	url = url.substring(start+1, url.length);

        	var cd_module = "";
        	var id_form = "";

        	var args = [];
        	while(true)
        	{
        		var check = false;
        		var temp_url;

        		if(url.indexOf("&",0) > 0)
        		{
        			temp_url = url.substring(0, url.indexOf("&",0));
        			url = url.substring(url.indexOf("&",0)+1, url.length);
        		}
        		else
        		{
        			temp_url = url.substring(0, url.length);
        			check = true;
        		}

        		if(temp_url.toUpperCase().substring(0, temp_url.indexOf("=",0)) == "CD_MODULE")
        		{
        			var temp = temp_url.substring(0, temp_url.indexOf("=",0)).toLowerCase();
        			cd_module = temp_url.substring(temp_url.indexOf("=",0)+1, temp_url.length);
        			temp_url = temp + "=" + cd_module;
        		}
        		else if(temp_url.toUpperCase().substring(0, temp_url.indexOf("=",0)) == "ID_FORM")
        		{
        			var temp = temp_url.substring(0, temp_url.indexOf("=",0)).toLowerCase();
        			id_form = temp_url.substring(temp_url.indexOf("=",0)+1, temp_url.length).toLowerCase();
        			temp_url = temp + "=" + id_form;
        		}

        		args.push(temp_url);

        		if(check == true) break;
        	}

        	var authArg = [];
        	args.push("type=popup");
        	args.push("POPUPTYPE=READONLY");
        	authArg = args.join(' ');

        	var objArg = [];

        	this.objForm = {
        		CD_MODULE: cd_module,
        		ID_FORM: id_form,
        		NM_FORM: "테스트",
        		DS_FORM: "",
        		ID_GROUP: "",
        		GR_SEARCH: "",
        		TY_AUTH: "",
        		CD_ROLE: "",
        		Args : objArg
        	};

        	this.fnAuthForm(this, cd_module.toUpperCase(), id_form.toUpperCase(), authArg);
        }

        this.fnAuthForm = function(objForm, cd_module, id_form, strArg)
        {
        	if(strArg == null) strArg = "";
        	this.objForm.CUR_FORM = objForm;


        	var dsUser = this.dsLogin;
        	//this.objApp.gdsUserInfo;
        	this._dsParamAuthForm.clearData();
        	this._dsParamAuthForm.addRow();
        	this._dsParamAuthForm.setColumn(0, "ID_USER", dsUser.getColumn(0, "ID_USER"));
        	this._dsParamAuthForm.setColumn(0, "CD_DEPT", dsUser.getColumn(0, "CD_DEPT"));
        	this._dsParamAuthForm.setColumn(0, "CD_CORP", dsUser.getColumn(0, "CD_CORP"));
        	this._dsParamAuthForm.setColumn(0, "ID_FORM", id_form);
        	this._dsParamAuthForm.setColumn(0, "CD_MODULE", cd_module);

        	this._dsParamBtnInfo.clearData();
        	this._dsParamBtnInfo.addRow();
        	this._dsParamBtnInfo.setColumn(0, "CD_CORP", dsUser.getColumn(0, "CD_CORP"));
        	this._dsParamBtnInfo.setColumn(0, "CD_DEPT", dsUser.getColumn(0, "CD_DEPT"));
        	this._dsParamBtnInfo.setColumn(0, "ID_SABUN", dsUser.getColumn(0, "ID_USER"));
        	this._dsParamBtnInfo.setColumn(0, "CD_MODULE", cd_module);
        	this._dsParamBtnInfo.setColumn(0, "ID_FORM", id_form);

        	var strSvcId    = "authform";
        	var strSvcType  = "/public/authform";
        	var inProc		= null;
        	var inData      = "dsAuthForm=_dsParamAuthForm dsBtnInfo=_dsParamBtnInfo";
        	var outData     = "dsAuthForm=dsAuthForm0 dsBtnInfo=dsBtnInfo0";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZZ_POPUP_TEST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
