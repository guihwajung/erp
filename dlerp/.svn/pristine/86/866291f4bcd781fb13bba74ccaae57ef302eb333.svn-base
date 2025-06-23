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
            this.set_titletext("개인비용정산");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_JUNDO_SABUN_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_JUNDO_SABUN_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_JUNDO_SABUN_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_JUNDO_SABUN_DELETE</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHAPR_JUNDO_SABUN_AUTOSLIP_ISSUE</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHAPR_JUNDO_SABUN_AUTOSLIP_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DT_YYYYMM\"/><Col id=\"ID_SABUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCORP","sta00:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ctclYM_WORK:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfID_SABUN","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","DT_YYYYMM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_JUNDO_SABUN.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        };

        /************************************************************************
        * 버튼 설정 : 화면(Tab) 전환시 마다 호출
        * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
        ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        }

        /************************************************************************
        * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
        ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnPaySangsin = this.gfnFormButtonAdd("PaySangsin", "fnPaySangsin"); 		//결재상신 버튼
        	this.btnPayDoc = this.gfnFormButtonAdd("PayDoc", "fnPayDoc"); 					//결재문서 버튼
        	this.btnStateIssue = this.gfnFormButtonAdd("StateIssue", "fnIssueSlip"); 		//전표발행 버튼
        	this.btnStateCancel = this.gfnFormButtonAdd("StateCancel", "fnCancelSlip"); 	//전표취소 버튼
        	this.btnStateSearch = this.gfnFormButtonAdd("StateSearch", "fnStateSearch");	//전표조회 버튼
        };

        /************************************************************************
        * 변수 선언
        ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCORP = this.divSearch.form.ccfCORP;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
        * 이벤트 설정
        ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_JUNDO_SABUN");
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";

        	this.ccfCORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfID_SABUN.CodeFindName = "DHX_CFIDSABUN";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";


        	this.ctclYM_WORK.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        	//법인코드 세션에 코드로 셋팅
        	this.ccfCORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	if(this.FormInfo.GR_SEARCH >= 7){
        		this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_USER);
        		this.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);
        		this.ccfID_SABUN.form.set_readonly(true);
        	}
        }

        /************************************************************************
        * 파라미터 설정
        ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_YYYYMM", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("ID_SABUN", "string");
        	this.dsInsert.addColumn("DT_YYYYMM", "string");
        	this.dsInsert.addColumn("DT_ACCOUNT", "string");
        	this.dsInsert.addColumn("CD_ACCOUNT", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("DS_REM", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("NO_KM", "int");
        	this.dsInsert.addColumn("NO_LITER", "int");
        	this.dsInsert.addColumn("AM_COST", "int");
        	this.dsInsert.addColumn("AM_SUPPLY", "bigdecimal");
        	this.dsInsert.addColumn("AM_VAT", "bigdecimal");
        	this.dsInsert.addColumn("AM_TOTAL", "bigdecimal");
        	this.dsInsert.addColumn("URL_PROOF", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_PROOF", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("DT_REQ", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("DT_YYYYMM", "string");
        	this.dsUpdate.addColumn("DT_ACCOUNT", "string");
        	this.dsUpdate.addColumn("CD_ACCOUNT", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("DS_REM", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("NO_KM", "int");
        	this.dsUpdate.addColumn("NO_LITER", "int");
        	this.dsUpdate.addColumn("AM_COST", "int");
        	this.dsUpdate.addColumn("AM_SUPPLY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_VAT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_TOTAL", "bigdecimal");
        	this.dsUpdate.addColumn("URL_PROOF", "string");
        	this.dsUpdate.addColumn("CD_PROOF", "string");
        	this.dsUpdate.addColumn("ID_INSERT", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "bigdecimal");
        	this.dsUpdate.addColumn("DT_REQ", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_SEQ", "bigdecimal");

        	//전표발행용 데이터셋
        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("DT_YYYYMM", "string");
        	this.dsIssueSlip.addColumn("NO_SEQ", "string");
        	this.dsIssueSlip.addColumn("ID_USER", "string");
        	this.dsIssueSlip.addColumn("CD_CORP", "string");

        	//전표취소용 데이터셋
        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_SLIP", "string");
        }

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
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_YYYYMM", this.dsSearch.getColumn(0, "DT_YYYYMM"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));

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
        }

        /*
        *	입력 버튼
        */
        this.fnAdd = function() {
        	var nRow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nRow,  "DS_CORP", this.dsSearch.getColumn(0, "DS_CORP"));
        	this.dsList.setColumn(nRow,  "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsList.setColumn(nRow,  "DT_YYYYMM", this.dsSearch.getColumn(0, "DT_YYYYMM"));
        }

        /*
        *	삭제 버튼
        */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
        *	저장 버튼
        */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	this.dxGrid.updateToDataset();
        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        		case "I":
        			var nrow = this.dsInsert.addRow();
        			this.dsInsert.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        			this.dsInsert.setColumn(nrow, "DT_YYYYMM", this.dsList.getColumn(i, "DT_YYYYMM"));
        			this.dsInsert.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(i, "DT_ACCOUNT"));
        			this.dsInsert.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        			this.dsInsert.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        			this.dsInsert.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        			this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        			this.dsInsert.setColumn(nrow, "NO_KM", this.dsList.getColumn(i, "NO_KM"));
        			this.dsInsert.setColumn(nrow, "NO_LITER", this.dsList.getColumn(i, "NO_LITER"));
        			this.dsInsert.setColumn(nrow, "AM_COST", this.dsList.getColumn(i, "AM_COST"));
        			this.dsInsert.setColumn(nrow, "AM_SUPPLY", this.dsList.getColumn(i, "AM_SUPPLY"));
        			this.dsInsert.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        			this.dsInsert.setColumn(nrow, "AM_TOTAL", this.dsList.getColumn(i, "AM_TOTAL"));
        			this.dsInsert.setColumn(nrow, "URL_PROOF", this.dsList.getColumn(i, "URL_PROOF"));
        			this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        			this.dsInsert.setColumn(nrow, "CD_PROOF", this.dsList.getColumn(i, "CD_PROOF"));
        			this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        			this.dsInsert.setColumn(nrow, "DT_REQ", this.dsList.getColumn(i, "DT_REQ"));
        			break;
        		case "U":
        			var nrow = this.dsUpdate.addRow();
        			this.dsUpdate.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        			this.dsUpdate.setColumn(nrow, "DT_YYYYMM", this.dsList.getColumn(i, "DT_YYYYMM"));
        			this.dsUpdate.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(i, "DT_ACCOUNT"));
        			this.dsUpdate.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        			this.dsUpdate.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        			this.dsUpdate.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        			this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        			this.dsUpdate.setColumn(nrow, "NO_KM", this.dsList.getColumn(i, "NO_KM"));
        			this.dsUpdate.setColumn(nrow, "NO_LITER", this.dsList.getColumn(i, "NO_LITER"));
        			this.dsUpdate.setColumn(nrow, "AM_COST", this.dsList.getColumn(i, "AM_COST"));
        			this.dsUpdate.setColumn(nrow, "AM_SUPPLY", this.dsList.getColumn(i, "AM_SUPPLY"));
        			this.dsUpdate.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        			this.dsUpdate.setColumn(nrow, "AM_TOTAL", this.dsList.getColumn(i, "AM_TOTAL"));
        			this.dsUpdate.setColumn(nrow, "URL_PROOF", this.dsList.getColumn(i, "URL_PROOF"));
        			this.dsUpdate.setColumn(nrow, "CD_PROOF", this.dsList.getColumn(i, "CD_PROOF"));
        			this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        			this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        			this.dsUpdate.setColumn(nrow, "DT_REQ", this.dsList.getColumn(i, "DT_REQ"));
        			break;
        		case "D":
        			var nrow = this.dsDelete.addRow();
        			this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        			break;
        		}
        	}
        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        		strSvcType , 	// transaction을 요청할 구분
        		inProc,			// Procedure 정보 Dataset 이름
        		inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        		callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
        *	엑셀 버튼
        */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
        *	출력 버튼
        */
        this.fnPrint = function() {
        }

        /************************************************************************
        * Validate
        ************************************************************************/
        /*
        *	조회 Validate
        */
        this.fnValidate = function() {
        	if (this.gfnIsNull(this.ccfCORP.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfCORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드는 필수입력 값입니다.");
        		return false;
        	}else if (this.gfnIsNull(this.ctclYM_WORK.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        		}
        		this.gfnAlert("회계년월은 필수입력 값입니다.");
        		return false;
        	}
        	return true;
        };

        /************************************************************************
        * 콜백 이벤트
        ************************************************************************/
        /*
        *	콜백 처리
        */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID) {
        	case "select" :
        		this.gfnGridAfterSelect(this.dxGrid);
        		break;
        	case "save" :
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        		break;
        	case "issueSlip" :
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "cancelSlip" :
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	}
        }

        /************************************************************************
        * 코드파인드 이벤트
        ************************************************************************/
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//법인코드
        	if(id == "ccfCORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if(id == "ccfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	}

        	return true;
        }

        /************************************************************************
        * 그리드 이벤트
        ************************************************************************/
         this.fnGrid_BeforuserDataSetParam=function(id, dsUserParam, nrow){

        	var cdDept = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        	if(id == "DHX_CFIDSABUN"){
        		dsUserParam.setColumn(nrow, "YN_OFFICER", "");
        		dsUserParam.setColumn(nrow,  "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	}else if(id == "DHX_CFNVENDOR_CODEFIND"){
        		dsUserParam.setColumn(nrow,  "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow,  "TY_ACCOUNT", "");
        		dsUserParam.setColumn(nrow,  "CD_ACCOUNT", "");
        	}else if(id == "DZX_CFCODE_COM"){
        		dsUserParam.setColumn(nrow, "CD_SYSTEM" , "DH");
        		dsUserParam.setColumn(nrow, "CD_TYPE" , "V10");
        	}else if(id == "DHX_CFACNTSITE"){	// 계정코드
        		if ( !this.gfnIsNull(cdDept) ) {
        			dsUserParam.setColumn(nrow, "CD_DEPT_BE" , cdDept);
        		} else {
        			this.gfnAlert("부서를 먼저 입력하세요.");
        			return false;
        		}
        	}
        	return true;
        }

        // 셀 값 변경 후 이벤트
        this.fnGrid_AfterEdit = function(obj,e) {
        	switch (e.columnid) {
        		case "DT_ACCOUNT":
        			//입력된 날자로부터 근무요일 구함
        			var nDay = this.gfnGetDay(e.newvalue);
        			var dayArray = ["일", "월", "화", "수", "목", "금", "토"];	//0 = 일요일 ~ 6 = 토요일
        			this.dsList.setColumn(e.row, "DS_WEEK", dayArray[nDay]);
        		break;
        	}
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		switch (e.columnid) {
        				case "DT_ACCOUNT":
        					//입력된 날자로부터 근무요일 구함
        					var nDay = this.gfnGetDay(e.newvalue);
        					var dayArray = ["일", "월", "화", "수", "목", "금", "토"];	//0 = 일요일 ~ 6 = 토요일
        					this.dsList.setColumn(e.row, "DS_WEEK", dayArray[nDay]);
        				break;

        				case "NO_KM":		// 유류대	운행거리
        					var noKm = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "NO_KM"), 0));
        					var noLiter = 0;
        					var amCost = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_COST"), 0));
        					if(noKm > 0){
        						noLiter = noKm/10;
        					}
        					this.dsList.setColumn(e.row, "NO_LITER", noLiter);	// 유류대	소요량

        				break;


        				case "NO_LITER":	// 유류대	소요량
        				case "AM_COST":		// 유류대	단가
        					var noLiter = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "NO_LITER"), 0));
        					var amCost = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_COST"), 0));
        					this.dsList.setColumn(e.row, "AM_SUPPLY", noLiter * amCost);	// 지출액	공급가액 = (소요량 * 단가)
        				break;

        				case "AM_SUPPLY":
        				case "AM_VAT":
        					var amSupply = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_SUPPLY"), 0));
        					var amVat = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_VAT"), 0));
        					this.dsList.setColumn(e.row, "AM_TOTAL", amSupply + amVat);	// 지출	합계 = (공급가액+부가세)
        		/*
        		NO_KM	유류대	운행거리
        		NO_LITER	유류대	소요량
        		AM_COST	유류대	단가
        		AM_SUPPLY	지출액	공급가액
        		AM_VAT	지출액	부가세
        		AM_TOTAL	지출액	합계
        		*/

        				break;
        		}


        	}
        };

        // 첨부파일
        this.fnGrid_ExpandUp = function(obj, e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	var objDs = obj.getBindDataset();
        	var sCdDir = "";

        	if(colnm == "URL_PROOF") {	// 증빙첨부
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        		if(this.gfnGetFlag(objDs, e.row) == "I"){
        			this.gfnAlert("저장 후 파일첨부 진행.");
        			return false;
        		}

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DH07";
        		//fileManager.CD_DIR = [objDs.getColumn(e.row, "DT_YYYYMM"), objDs.getColumn(e.row, "ID_SABUN")];
        		fileManager.CD_DIR = [objDs.getColumn(e.row, "NO_SEQ")];
        		fileManager.IS_READONLY = false;

        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        }

        this.fnFileCallback = function(strID, val) {
        	var objDs = this.dxGrid.getBindDataset();
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 파일개수를 다시 셋팅
        	objDs.set_enableevent(false);
        	if(val.Cnt == 0) {
        		//objDs.setColumn(objDs.rowposition, "URL_PROOF", "첨부");
        	}
        	objDs.setColumn(objDs.rowposition, "URL_PROOF", "첨부(" + val.Cnt + ")");
        	//objDs.setColumn(objDs.rowposition, "FILE_CNT", val.Cnt );
        	objDs.set_enableevent(true);
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

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        /************************************************************************
        * 기타 버튼 이벤트
        ************************************************************************/
        //결재상신
        this.fnPaySangsin = function (obj,e)
        {
        };
        //결재문서
        this.fnPayDoc = function (obj,e)
        {
        };

        //전표발행
        this.fnIssueSlip = function (obj,e)
        {
        	if(this.dsList.getCaseCount("CHK == '1' && "+ this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("체크된 항목이 없습니다.");
        		return;
        	}

        	if(this.dsList.findRowExpr("CHK == 1 && !dataset.parent.gfnIsNull(CD_SLIP) && nx_flag != '#'") > -1){
        		this.gfnAlert("전표발행된 항목이 체크되어 있습니다.");
        		return;
        	}

        	this.gfnConfirm("전표 발행하시겠습니까?", "fnIssueSlip_callback");
        };

        //전표취소
        this.fnCancelSlip = function (obj,e){

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("체크된 항목이 없습니다.");
        		return;
        	}

        	if(this.dsList.findRowExpr("CHK == 1 && dataset.parent.gfnIsNull(CD_SLIP) && nx_flag != '#'") > -1){
        		this.gfnAlert("전표발행되지않은 항목이 체크되어 있습니다.");
        		return;
        	}

        	this.gfnConfirm("전표 취소하시겠습니까?", "fnCancelSlip_callback");
        };

        //전표조회
        this.fnStateSearch = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var cdSlip = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"));
        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = cdSlip;
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        };

        this.fnPopupCallBack = function(strId, val) {
        	this.FormBtns.Select.click();
        }

        // 전표발행 처리
        this.fnIssueSlip_callback = function(strId, val)
        {
         	if(val == true) {

        		var strNoSlipKey = "";
        		var sDelimiter = "";
        		var nLoopcnt = 0;
        		var sTyPay = "";
        		for(var r = 0; r < this.dsList.rowcount; r++) {
        			if(this.dsList.getColumn(r, this.ucFlag) != '#' && this.dsList.getColumn(r, "CHK") == 1){
        				sDelimiter = ( nLoopcnt == 0) ? "" : ";";
        				strNoSlipKey += (sDelimiter + this.dsList.getColumn(r, "NO_SEQ"));
        				nLoopcnt++;
        			}
        		}

        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "DT_YYYYMM", this.dsSearch.getColumn(0, "DT_YYYYMM"));
        		this.dsIssueSlip.setColumn(nRow, "NO_SEQ" , strNoSlipKey);
        		this.dsIssueSlip.setColumn(nRow, "ID_USER"   , this.AuthClient.ID_USER);
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

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

        // 전표취소 처리
        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		var strNoSlipKey = "";
        		var sDelimiter = "";
        		var nLoopcnt = 0;
        		for(var r = 0; r < this.dsList.rowcount; r++) {
        			if(this.dsList.getColumn(r, this.ucFlag) != '#' && this.dsList.getColumn(r, "CHK") == 1){
        				sDelimiter = ( nLoopcnt == 0) ? "" : ";";
        				strNoSlipKey += ( sDelimiter + this.dsList.getColumn(r, "CD_SLIP") );
        				nLoopcnt++;
        			}
        		}

        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();
        		this.dsCancelSlip.setColumn(nRow, "CD_SLIP", strNoSlipKey);

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_JUNDO_SABUN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
