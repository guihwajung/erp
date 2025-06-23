(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAC_DAILY_LIST");
            this.set_titletext("근태현황 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DACPR_DAILYLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">dsAuthForm</Col><Col id=\"SP\">DZZPR_DOTNET_AUTHORITYFORM_SELECT_NEW</Col></Row></Rows>");
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
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_REPORT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REPORT","staDT_REPORT:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_DEPT","ctclDT_REPORT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조직분류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_DEPT","staTY_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfTY_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_DAILY_LIST.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.fnReset();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ctclDT_REPORT = this.divSearch.form.ctclDT_REPORT;	// 일자
        	this.ccfTY_DEPT = this.divSearch.form.ccfTY_DEPT;		// 조직분류
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;		// 부서

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAC_DAILY_LIST");

        	this.ccfCD_DEPT.CodeFindName = "DAX_DAILYLIST_CODE";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_REPORT", "string"); //일자
        	this.dsSelect.addColumn("TY_DEPT", "string");  	//조직분류
        	this.dsSelect.addColumn("CD_DEPT", "string");  	//부서
        	this.dsSelect.addColumn("GR_SEARCH", "string"); //로그인 권한
        	this.dsSelect.addColumn("GR_DEPT", "string");  	//로그인 부서
        	this.dsSelect.addColumn("GR_USER", "string");  	//로그인 ID

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "DT_REPORT", this.ctclDT_REPORT.value); //일자
        	this.dsSelect.setColumn(0, "TY_DEPT", this.ccfTY_DEPT.form.CDTextBox.value);  //조직분류
        	this.dsSelect.setColumn(0, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);  	//부서
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH); //로그인 권한
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);  	//로그인 부서
        	this.dsSelect.setColumn(0, "GR_USER", this.AuthClient.ID_USER);  	//로그인 ID


        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

        /*
         *	리셋 버튼
         */
        this.fnReset = function() {

        	//일자
        	this.ctclDT_REPORT.set_value(this.gfnGetDate());

        	//this.divSearch.form.ctclDT_REPORT.set_value("");
        	this.ccfTY_DEPT.form.CDTextBox.set_value("");
        	this.ccfTY_DEPT.form.DSTextBox.set_value("");
        	this.ccfCD_DEPT.form.CDTextBox.set_value("");
        	this.ccfCD_DEPT.form.DSTextBox.set_value("");
        	/*
        	if(this.FormInfo.GR_SEARCH == "7" || this.FormInfo.GR_SEARCH == "9"){
        		if(this.gfnNvl(this.AuthClient.CD_DEPT_MST)){
        			this.ccfCD_DEPT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT_MST);
        			this.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT_MST);
        		}
        		else {
        			this.ccfCD_DEPT.form.CDTextBox.set_value((this.AuthClient.CD_DEPT).substring(1,6));
        			this.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		}

        		this.ccfCD_DEPT.set_enable(false);
        	}
        	*/

        	//조회
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.ctclDT_REPORT.value)) {
        		validate = false;
        		this.fnAlertCallback = function() {
        			this.ctclDT_REPORT.setFocus();
        		}
        		this.gfnAlert("일자를 입력하세요.", "fnAlertCallback");
        		return validate;
        	}

        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, args) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSetButton();
        	} else if (svcID == "authform") {
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

        			var json = this.gfnArgsToJson(args);
        			if (json.type == "popup" || json.type == "dialog") {
        				if(this.objForm.TY_MENU == "Dialog") {
        					json.type = "dialog";
        				}
        				this.objForm.CD_MODULE = json.cd_module;
        				this.objForm.ID_FORM = json.id_form;
        				this.objForm.POP_WIDTH = this.gfnIsNull(json.width) ? 0: nexacro.toNumber(json.width);
        				this.objForm.POP_HEIGHT = this.gfnIsNull(json.height) ? 0: nexacro.toNumber(json.height);
        				this.objForm.POP_CALLBACK = this.gfnIsNull(json.callback) ? "": json.callback;
        				this.objForm.POP_ARGS = json;

        				this.gfnCallPopup(this.objForm, json.type);
        			}
        			else if (json.type == "ext") {
        				// 외부 다이렉트 화면 접근
        				var func = this.objApp.gvMainFrame.form.lookupFunc(json.callback);
        				if (func != null) {
        					func.call(this.objForm);
        				}
        			}
        			else {
        				this.gfnCallNew(this.objForm);
        			}
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id) {
        		case "ccfTY_DEPT":	//조직분류
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "DA");
        		break;

        		case "ccfCD_DEPT":	//부서
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "ID_LOGIN", this.AuthClient.ID_USER);
        			break;

        		default:
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData ) {

        	var arr = codeFindData;

        	switch(id){
        		case "ccfCD_DEPT" :
        			 //trace("arr : "+arr[0]["CD_DEPTMST"]);
        			//this.ccfCD_DEPT.form.CDTextBox.set_value(arr[0]["CD_DEPT_MST"]);
        			//this.ccfCD_DEPT.form.DSTextBox.set_value(arr[0]["DS_DEPT_MST"]);
        		break;
        	}

        	this.fnSearchInit();
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.divData_objGrid_oncelldblclick = function(obj,e)
        {

        	var YN_APPROVAL = this.gfnNvl(this.dsList.getColumn(e.row, "YN_APPROVAL"), "N");

        	if(YN_APPROVAL == "N" && this.FormInfo.GR_SEARCH != "1"){
        		return false;
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(e.row, "DT_REPORT"))){
        		return false;
        	}

         	var param = {};

        	param.DT_REPORT=this.dsList.getColumn(this.dsList.rowposition, "DT_REPORT");
        	param.CD_DEPT=this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        	param.TY_DEPT=this.ccfTY_DEPT.form.CDTextBox.value;
        	param.GR_SEARCH=this.FormInfo.GR_SEARCH;
        	param.GR_DEPT=this.AuthClient.CD_DEPT;
        	param.GR_USER=this.AuthClient.ID_USER;

        	//this.fnMenuOpen(this.FormInfo.CD_MODULE, "DAC_DAILY_LISTDETAIL", "인원현황관리", param);
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAC_DAILY_LISTDETAIL", "fnPopupCallback", param);
        };

        //팝업 콜백
        this.fnPopupCallback = function(strId, val) {
        	// 인원현황관리
        	if(strId.indexOf("DAC_DAILY_LISTDETAIL") > 0) {
        		trace("팝업콜백");
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnMenuOpen = function(cd_module, id_form, nm_form, objArg) {
        	var authArg = "";

        	var id_win = cd_module + "#" + id_form;
        	var winid = this.objApp.gdsOpenMenu.lookup("ID_WIN", id_win, "ID_WIN");

        	if (!this.gfnIsNull(winid))
        	{
        		if (this.objApp.gvFormLimit == 1 && this.objApp.gvMdiFrame.form.isActiveFrame(winid) == true)
        		{
        			return false;
        		}
        		else if (this.objApp.gvFormLimit > 1 && this.objApp.gvFormLimit <= this.objApp.gvMdiFrame.form.isActiveFrameCount(winid)) {
        			this.objApp.gvMdiFrame.form.isActiveFrame(winid);
        			alert(this.objApp.gvFormLimit + "개 초과하여 같은 화면을 열수 없습니다");
        			return false;
        		}
        	}

        	//열린메뉴 체크( application.gvMax = 15)
        	if( this.objApp.gvMax <= this.objApp.gdsOpenMenu.getRowCount() ){

        		this.gfnAlert(this.objApp.gvMax +"개 초과하여 화면을 열수 없습니다");
        		return false;
        	}

        	this.objForm = {
        		CD_MODULE: cd_module,
        		ID_FORM: id_form,
        		NM_FORM: nm_form,
        		DS_FORM: "",
        		ID_GROUP: "",
        		GR_SEARCH: "",
        		TY_AUTH: "",
        		CD_ROLE: "",
        		Args : objArg
        	};

        	// 인증정보
        	this.fnAuthForm(this, cd_module, id_form, authArg);
        };

        this.fnAuthForm = function(objForm, cd_module, id_form, strArg)
        {
        	if(strArg == null) strArg = "";
        	this.objForm.CUR_FORM = objForm;

        	var dsUser = this.objApp.gdsUserInfo;
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
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "dsAuthForm=_dsParamAuthForm dsBtnInfo=_dsParamBtnInfo";
        	var outData     = "dsAuthForm=dsAuthForm0 dsBtnInfo=dsBtnInfo0"; //"dsList=dsLogin1 dsList2=dsLogin2";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_REPORT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
        };
        this.loadIncludeScript("DAC_DAILY_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
