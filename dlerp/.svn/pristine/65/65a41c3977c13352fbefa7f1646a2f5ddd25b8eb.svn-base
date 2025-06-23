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
            this.set_titletext("감가상각전표발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTable", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_ASSETDEPSLIP_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHNPR_ASSETDEP_AUTOSLIP_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHNPR_ASSETDEP_AUTOSLIP_DELETE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHNPR_ASSETDEPSLIP_CREATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHNPR_ASSETDEPSLIP_DELETE</Col></Row><Row><Col id=\"TARGET\">e_create</Col><Col id=\"SP\">DHNPR_ASSETDEPSLIP_CREATE</Col></Row><Row><Col id=\"TARGET\">e_delete</Col><Col id=\"SP\">DHNPR_ASSETDEPSLIP_DELETE</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHNPR_ASSETDEP_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHNPR_ASSETDEP_AUTOSLIP_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACASSET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACASSET\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_FROM\"/><Col id=\"YM_TO\"/><Col id=\"CD_CORP\"/><Col id=\"CD_ACASSET\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYM","0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("감가상각월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_FROM","staYM:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CONS01","ctclYM_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_TO","staTY_CONS01:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","staYM:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","staYM:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACASSET","ccfCD_CORP:0.0","staYM:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("자산코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACASSET","staCD_ACASSET:0.0","staYM:10.0","290","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFASSETINFO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:5",null,null,"0","5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","10",null,null,"0","15",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYM_FROM.form.TextBox","value","dsSearch","YM_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_TO.form.TextBox","value","dsSearch","YM_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_ACASSET.form.CDTextBox","value","dsSearch","CD_ACASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_ACASSET.form.DSTextBox","value","dsSearch","DS_ACASSET");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHN_ASSETDEPSLIP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.fnSetCombo();
        };

        this.fnSetExtendButton = function() {

        	this.btnSiteCreate = this.gfnFormButtonAdd("SiteCreate", "fnSiteCreate"); 	// 기초자료생성
        	this.btnSiteDelete = this.gfnFormButtonAdd("SiteDelete", "fnSiteDelete"); 	// 기초자료삭제
        	this.btnIssueSlip  = this.gfnFormButtonAdd("IssueSlip" , "fnIssueSlip"); 	// 전표발행
        	this.btnCancelSlip = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 	// 전표취소
        	this.btnDetailSlip = this.gfnFormButtonAdd("DetailSlip", "fnDetailSlip");	// 전표상세조회

        	this.gfnSetEnable(this.btnSiteCreate, true);
        	this.gfnSetEnable(this.btnSiteDelete, false);
        	this.gfnSetEnable(this.btnIssueSlip , false);
        	this.gfnSetEnable(this.btnCancelSlip, true);
        	this.gfnSetEnable(this.btnDetailSlip, false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//조회
        	this.ctclYM_FROM   = this.divSearch.form.ctclYM_FROM;
        	this.ctclYM_TO     = this.divSearch.form.ctclYM_TO;
        	this.ccfCD_CORP    = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_ACASSET = this.divSearch.form.ccfCD_ACASSET;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetButton = function() {

        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_FROM"      , "string");
        	this.dsSelect.addColumn("YM_TO"        , "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT" , "string");
        	this.dsSelect.addColumn("CD_ACASSET"   , "string");
        	this.dsSelect.addColumn("CD_CORP"      , "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YM_FROM"      , "string");
        	this.dsInsert.addColumn("YM_TO"        , "string");
        	this.dsInsert.addColumn("CD_ACASSET"   , "string");
        	this.dsInsert.addColumn("CD_DEPT_ACNT" , "string");
        	this.dsInsert.addColumn("AM_ASSETDEP"  , "bigdecimal");
        	this.dsInsert.addColumn("CD_DEPT_BH"   , "string");
        	this.dsInsert.addColumn("ID_INSERT"    , "string");
        	this.dsInsert.addColumn("CD_CORP"      , "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YM_FROM"     , "string");
        	this.dsDelete.addColumn("YM_TO"       , "string");
        	this.dsDelete.addColumn("CD_TRADE"    , "string");
        	this.dsDelete.addColumn("ID_INSERT"   , "string");

        	this.dsExcute = new Dataset();
        	this.dsExcute.addColumn("YM_FROM"     , "string");
        	this.dsExcute.addColumn("YM_TO"       , "string");
        	this.dsExcute.addColumn("ID_TRANS"    , "string");
        	this.dsExcute.addColumn("CD_CORP"     , "string");

        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP"  , "string");			// 법인코드
        	this.dsIssueSlip.addColumn("DT_FROM"  , "string");			// 회계년월(from)
        	this.dsIssueSlip.addColumn("DT_TO"    , "string");			// 회계년월(to)
        	this.dsIssueSlip.addColumn("ID_TRANS" , "string");			// 사용자 아이디

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_TRADE", "string");			// 전표번호
        }

        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHN_ASSETDEPSLIP");

        	this.ccfCD_CORP.BeforeUserDataSetParam    = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged        = "fnAfterCDTextChanged";

        	this.ccfCD_ACASSET.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACASSET.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	this.dxGrid.EnterCell     = "fnGrid_EnterCell";
        	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

        	// 검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	// 그리드 셀 클릭 이벤트
        	this.dxGrid.addEventHandler("oncellclick", this.oncellclickEventHandler, this);

        	this.dsSearch.setColumn(0, "YM_FROM", this.gfnGetDate().substr(0,6));
        	this.dsSearch.setColumn(0, "YM_TO"  , this.gfnGetDate().substr(0,6));

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        }

        this.fnSearchInit = function(id) {
        	this.gfnSetFormStatus(this);
        };

        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.FormBtns.Save.set_enable(false);

        		if(this.dsList.rowcount > 0) {
        			this.gfnSetEnable(this.btnSiteCreate, true);
        			this.gfnSetEnable(this.btnCancelSlip, true);
        			this.gfnSetEnable(this.btnDetailSlip, false);
        		}else{
        			this.gfnSetEnable(this.btnSiteCreate, true);
        			this.gfnSetEnable(this.btnSiteDelete, false);
        			this.gfnSetEnable(this.btnIssueSlip , false);
        			this.gfnSetEnable(this.btnCancelSlip, false);
        			this.gfnSetEnable(this.btnDetailSlip, false);
        		}
        	}

        	if(svcID == "issueSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	if(svcID == "cancelSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	if(svcID == "e_create"){
        		if (errorCode == 0) {
        			this.gfnAlert("생성 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	if(svcID == "e_delete"){
        		if (errorCode == 0) {
        			this.gfnAlert("삭제 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnSelectValidate = function() {

        	//if(this.gfnIsNull(this.ctclYM_FROM.form.TextBox.value) || this.gfnIsNull(this.ctclYM_TO.form.TextBox.value)) {
        	if(this.gfnIsNull(this.ctclYM_FROM.form.TextBox.value)) {
        		this.gfnAlert("감가상각년월을 입력하세요!");
        		return false;
        	}

        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드를 입력하세요!");
        		return false;
        	}

        	return true;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "YM_FROM"     , this.dsSearch.getColumn(0, "YM_FROM"));
        	//this.dsSelect.setColumn(0, "YM_TO"       , this.dsSearch.getColumn(0, "YM_TO"));
        	this.dsSelect.setColumn(0, "YM_TO"       , this.dsSearch.getColumn(0, "YM_FROM"));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", "");
        	this.dsSelect.setColumn(0, "CD_ACASSET"  , this.dsSearch.getColumn(0, "CD_ACASSET"));
        	this.dsSelect.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnAdd = function() {
        }

        this.fnDel = function() {
        }

        this.fnSave = function() {
        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	//법인코드
        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		//dsUserParam.setColumn(nrow, "LEVLV_DEPT_ACNT", this.UserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "LEVCD_DEPT_ACNT", this.UserInfo.LEVCD_DEPT_ACNT);
        	}

        	//자산코드
        	if(id == "ccfCD_ACASSET") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {
        		case "ccfCD_CORP":
        			this.ccfCD_ACASSET.form.fnCodeFindClear();
        			break;
        	}

        	// 버튼 초기화.
        	this.gfnSetEnable(this.btnSiteCreate, true);
        	this.gfnSetEnable(this.btnSiteDelete, false);
        	this.gfnSetEnable(this.btnIssueSlip , false);
        	this.gfnSetEnable(this.btnCancelSlip, false);
        	this.gfnSetEnable(this.btnDetailSlip, false);
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSetCombo = function() { };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.oncellclickEventHandler = function(obj,e) {

        	var cdTrade = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");

        	// 전표번호가 있을 경우 [전표상세조회]버튼 활성화.
        	if(this.gfnIsNull(cdTrade)) {
        		this.gfnSetEnable(this.btnDetailSlip, false);
        	} else {
        		this.gfnSetEnable(this.btnDetailSlip, true);
        	}
        }

        this.fnGrid_EnterCell = function(obj, row, cell) {

        	if(cell != 1) return false;

        	return true;
        }

        this.dsSearch_Valuechanged = function(obj,e) {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        this.fnGrid_AfterAllCheck = function(obj, cell, check) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        }

        this.fnSiteCreateCallback = function(strId, val) {

        	if(val == false) return;

        	this.dsExcute.clearData();
        	this.dsExcute.addRow();

        	this.dsExcute.setColumn(0, "YM_FROM"   , this.dsSearch.getColumn(0, "YM_FROM"));
        	//this.dsExcute.setColumn(0, "YM_TO"     , this.dsSearch.getColumn(0, "YM_TO"));
        	this.dsExcute.setColumn(0, "YM_TO"     , this.dsSearch.getColumn(0, "YM_FROM"));

        	this.dsExcute.setColumn(0, "CD_ACASSET", this.dsList.getColumn(this.dsList.rowposition, "CD_ACASSET"));
        	this.dsExcute.setColumn(0, "CD_DEPT"   , this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"));
        	this.dsExcute.setColumn(0, "AM_DEPMON" , this.dsList.getColumn(this.dsList.rowposition, "AM_DEPMON"));
        	this.dsExcute.setColumn(0, "CD_DEPT"   , this.UserInfo.CD_DEPT);
        	this.dsExcute.setColumn(0, "ID_INSERT" , this.AuthClient.ID_USER);
        	this.dsExcute.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));

        	var strSvcId    = "e_create";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "e_create=dsExcute";
        	var outData     = "dsResult=e_create0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        }

        this.fnSiteCreate = function(obj,e) {

        	//if(this.gfnIsNull(this.ctclYM_FROM.form.TextBox.value) || this.gfnIsNull(this.ctclYM_TO.form.TextBox.value)) {
        	if(this.gfnIsNull(this.ctclYM_FROM.form.TextBox.value)) {
        		this.gfnAlert("감가상각년월을 입력하세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드를 입력하세요.");
        		return false;
        	}

        //  	if(this.gfnGetDiffDate(this.ctclYM_FROM.form.TextBox.value+"01", this.ctclYM_TO.form.TextBox.value+"01") <= -1){
        //  		this.gfnAlert("회계년월의 시작일은 종료일보다 작아야 합니다.");
        //  		return false;
        //  	}

        	this.gfnConfirm("부서/현장 전체에 대해서 자료를 생성합니다.", "fnSiteCreateCallback");
        }

        this.fnSiteDeleteCallback = function(strId, val) {

        	if(val == false) return;

        	this.dsExcute.clearData();
        	this.dsExcute.addRow();

        	this.dsExcute.setColumn(0, "YM_FROM"     , this.dsSearch.getColumn(0, "YM_FROM"));
        	//this.dsExcute.setColumn(0, "YM_TO"       , this.dsSearch.getColumn(0, "YM_TO"));
        	this.dsExcute.setColumn(0, "YM_TO"       , this.dsSearch.getColumn(0, "YM_FROM"));
        	this.dsExcute.setColumn(0, "CD_ACASSET"  , this.dsList.getColumn(this.dsList.rowposition, "CD_ACASSET"));
        	this.dsExcute.setColumn(0, "CD_DEPT_ACNT", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"));
        	this.dsExcute.setColumn(0, "AM_ASSETDEP" , this.dsList.getColumn(this.dsList.rowposition, "AM_DEPMON"));
        	this.dsExcute.setColumn(0, "CD_DEPT_BH"  , this.UserInfo.CD_DEPT);
        	this.dsExcute.setColumn(0, "ID_INSERT"   , this.AuthClient.ID_USER);
        	this.dsExcute.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));

        	var strSvcId    = "e_delete";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "e_delete=dsExcute";
        	var outData     = "dsResult=e_delete0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        }

        this.fnSiteDelete = function(obj,e) {
        	this.gfnConfirm("기존에 생성된 기초자료를 삭제하시겠습니까?", "fnSiteDeleteCallback");
        }

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	//if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_FROM")) || this.gfnIsNull(this.dsSearch.getColumn(0, "YM_TO"))) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_FROM"))) {
        		this.gfnAlert("감가상각년월은 필수입니다.");
        		this.ctclYM_FROM.form.TextBox.setFocus();
        		return;
        	}

        //  	if(this.gfnGetDiffDate(this.dsSearch.getColumn(0, "YM_FROM") + "01", this.dsSearch.getColumn(0, "YM_TO") +"01") <= -1){
        //  		this.gfnAlert("회계년월의 시작일은 종료일보다 작아야 합니다.");
        //  		this.ctclYM_FROM.form.TextBox.setFocus();
        //  		return false;
        //  	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if (!this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(1, "CD_TRADE")))) {
        		this.gfnAlert("이미 전표 발행되었습니다.");
        		return;
        	}

        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");

        };

        this.fnIssueSlip_callback = function(strId, val)
        {

        	if(val == true) {
        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP" , this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsIssueSlip.setColumn(nRow, "DT_FROM" , this.dsSearch.getColumn(0, "YM_FROM"));
        		this.dsIssueSlip.setColumn(nRow, "DT_TO"   , this.dsSearch.getColumn(0, "YM_FROM"));
        		//this.dsIssueSlip.setColumn(nRow, "DT_TO"   , this.dsSearch.getColumn(0, "YM_TO"));
        		this.dsIssueSlip.setColumn(nRow, "ID_TRANS", this.AuthClient.ID_USER);

        		var strSvcId    = "issueSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "issueSlip=dsIssueSlip";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        //전표취소 처리
        this.fnCancelSlip = function (obj,e)
        {
        // 	var i = 1, len = this.dsList.rowcount, cnt = 0;
        //
        // 	for(i; i < len; ++i) {
        // 		var item  = this.dsList.getColumn(i, "chk");		// 체크박스.
        // 		var trade = this.dsList.getColumn(i, "CD_TRADE");	// 전표번호.
        //
        // 		if(item == "1" && !this.gfnIsNull(trade)) cnt++;
        // 	}
        // 	if(cnt > 0) this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");
        // 	else this.gfnAlert("체크 및 전표번호는 필수입니다.");
        //
        //
        	var cdSlip = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));


        	if(this.gfnIsNull(cdSlip)){
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");

        };

        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {

        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();

        		var cdSlip = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));

        		//처리할 데이터 담기
        		this.dsCancelSlip.setColumn(nRow, "YM_FROM"  , this.dsSearch.getColumn(0, "YM_FROM"));
        		this.dsCancelSlip.setColumn(nRow, "YM_TO"  , this.dsSearch.getColumn(0, "YM_FROM"));
        		//this.dsCancelSlip.setColumn(nRow, "YM_TO"    , this.dsSearch.getColumn(0, "YM_TO"));
        		this.dsCancelSlip.setColumn(nRow, "CD_TRADE" , cdSlip);
        		this.dsCancelSlip.setColumn(nRow, "ID_INSERT", this.AuthClient.ID_USER);

        		var strSvcId    = "cancelSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "cancelSlip=dsCancelSlip";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        //전표 조회
        this.fnDetailSlip = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "fnPopupCallBack", param);

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staCD_ACASSET.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_ACASSET.addEventHandler("onclick",this.Common_onclick,this);
        };
        this.loadIncludeScript("DHN_ASSETDEPSLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
