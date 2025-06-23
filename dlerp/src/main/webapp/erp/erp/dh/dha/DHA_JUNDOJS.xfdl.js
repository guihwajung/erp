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
            this.set_titletext("전도금정산");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_JUNDOJS_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DHAPR_JUNDOJS_SAVE</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHAPR_JUNDOJS_AUTOSLIP_ISSUE</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHAPR_JUNDOJS_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">selectTax</Col><Col id=\"SP\">DHXPR_TAX_INFO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BUDGET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"GR_DEPT_ACNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_DEPT\"/><Col id=\"YM_WORK\"/><Col id=\"YN_BUDGET\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTax", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCORP","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta01:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_BUDGET","ctclYM_WORK:10","10.0","17","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("chk00");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtGR_DEPT_ACNT","chkYN_BUDGET:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_visible("false");
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

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.chkYN_BUDGET","value","dsSearch","YN_BUDGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtGR_DEPT_ACNT","value","dsSearch","GR_DEPT_ACNT");
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
        this.registerScript("DHA_JUNDOJS.xfdl", function() {
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
        	this.btnTaxView     = this.gfnFormButtonAdd("TaxView" , "fnTaxView");		//세금계산서 보기
        	this.btnStateSettle = this.gfnFormButtonAdd("StateSettle", "fnStateSettle"); 	//전도금정산 버튼
        	this.btnAppDoc = this.gfnFormButtonAdd("AppDoc", "fnAppDoc"); 					//결재문서 버튼
        	this.btnStateIssue = this.gfnFormButtonAdd("StateIssue", "fnIssueSlip"); 		//전표발행 버튼
        	this.btnStateCancel = this.gfnFormButtonAdd("StateCancel", "fnCancelSlip"); 	//전표취소 버튼
        	this.btnStateSearch = this.gfnFormButtonAdd("StateSearch", "fnStateSearch");	//전표조회 버튼
        	this.btnApply = this.gfnFormButtonAdd("Apply", "fnApply");
        };

        /************************************************************************
        * 변수 선언
        ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCORP = this.divSearch.form.ccfCORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
        * 이벤트 설정
        ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_JUNDOJS");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	this.dsList.addEventHandler("onrowposchanged", this.dsList_Rowposchanged, this);
        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);

        	this.ccfCORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//this.ccfCD_DEPT.CodeFindName = "DHX_CFDEPT_02";
        	this.ccfCD_DEPT.CodeFindName = "DHX_CFACNTUNIT";   //DHX_CFDEPT_02
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ctclYM_WORK.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        	//법인코드 세션에 코드로 셋팅
        	this.ccfCORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	if(this.FormInfo.GR_SEARCH >= 7){
        		this.ccfCD_DEPT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        		this.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		// this.ccfCD_DEPT.AfterCDTextChanged
        		this.ccfCD_DEPT.form.fnCodeFindLoad();
        	}
        }

        /************************************************************************
        * 파라미터 설정
        ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_BE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	/*this.dsSelect.addColumn("ID_TRANS", "string");*/

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("NO_SLIPKEY", "int");
        	this.dsSave.addColumn("CD_DEPT_BE", "string");
        	this.dsSave.addColumn("CD_DEPT_BH", "string");
        	this.dsSave.addColumn("DT_ACCOUNT", "string");
        	this.dsSave.addColumn("CD_ACCOUNT", "string");
        	this.dsSave.addColumn("CD_SEMOK", "string");
        	this.dsSave.addColumn("DS_SEMOK", "string");
        	this.dsSave.addColumn("TY_PAY", "string");
        	this.dsSave.addColumn("TY_VENDOR", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("DS_VENDOR", "string");
        	this.dsSave.addColumn("DS_REM", "string");
        	this.dsSave.addColumn("TY_ISSUE", "string");
        	this.dsSave.addColumn("AM_SUPPLY", "bigdecimal");
        	this.dsSave.addColumn("AM_SUPPLY2", "bigdecimal");
        	this.dsSave.addColumn("AM_ETC", "bigdecimal");
        	this.dsSave.addColumn("AM_VAT", "bigdecimal");
        	this.dsSave.addColumn("CD_PROOF", "string");
        	this.dsSave.addColumn("CD_GONGJONG1", "string");
        	this.dsSave.addColumn("DS_GONGJONG1", "string");
        	this.dsSave.addColumn("ID_TRANS", "string");
        	this.dsSave.addColumn("URL_PROOF", "string");
        	this.dsSave.addColumn("NO_ACCOUNT", "string");
        	this.dsSave.addColumn("DT_REQ", "string");
        	this.dsSave.addColumn("ISSUE_ID", "string");
        	this.dsSave.addColumn("CD_VENDOR_MIBUL", "string");
        	this.dsSave.addColumn("CD_CAR", "string");
        	this.dsSave.addColumn("TY_VATBGJE", "string");
        	this.dsSave.addColumn("DT_PROOF", "string");


        	//전표발행용 데이터셋
        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_DEPT_BE", "string");
        	this.dsIssueSlip.addColumn("NO_SLIPKEY", "string");
        	this.dsIssueSlip.addColumn("ID_USER", "string");
        	this.dsIssueSlip.addColumn("CD_DEPT", "string");
        	this.dsIssueSlip.addColumn("CD_CORP", "string");

        	//전표취소용 데이터셋
        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_SLIP", "string");

        	//세금계산서 조회용 데이터셋
        	this.dsSelectTax = new Dataset();
        	this.dsSelectTax.addColumn("ISSUE_ID"  , "string");
        	this.dsSelectTax.addColumn("TY_SALEBUY", "string");

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
        	this.dsSelect.setColumn(0, "CD_DEPT_BE", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));

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
        	//CD_DEPT
        	//TY_PAY	지급구분
        	//기집행으로만


        	// 02	본사지급
         	this.dsList.setColumn(nRow, "TY_PAY", "02");

        // 	var sGrDeptAcnt = this.dsSearch.getColumn(0, "GR_DEPT_ACNT");
        // 	if(sGrDeptAcnt == "본사"){
        // 		this.dsList.setColumn(nRow, "TY_PAY", "01");
        // 	}
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
        	//if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnGridValidate(this.dxGrid)) return;
        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        		case "I":
        		case "U":
        		case "D":
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        			this.dsSave.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSave.setColumn(nrow, "NO_SLIPKEY", this.dsList.getColumn(i, "NO_SLIPKEY"));
        			this.dsSave.setColumn(nrow, "CD_DEPT_BE", this.dsSearch.getColumn(0, "CD_DEPT"));
        			this.dsSave.setColumn(nrow, "CD_DEPT_BH", this.dsSearch.getColumn(0, "CD_DEPT"));
        			this.dsSave.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(i, "DT_ACCOUNT"));
        			this.dsSave.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        			this.dsSave.setColumn(nrow, "CD_SEMOK", this.dsList.getColumn(i, "CD_SEMOK"));
        			this.dsSave.setColumn(nrow, "DS_SEMOK", this.dsList.getColumn(i, "DS_SEMOK"));
        			this.dsSave.setColumn(nrow, "TY_PAY", this.dsList.getColumn(i, "TY_PAY"));
        			this.dsSave.setColumn(nrow, "TY_VENDOR", this.dsList.getColumn(i, "TY_VENDOR"));
        			this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        			this.dsSave.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        			this.dsSave.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        			this.dsSave.setColumn(nrow, "TY_ISSUE", this.dsList.getColumn(i, "TY_ISSUE"));
        			this.dsSave.setColumn(nrow, "AM_SUPPLY", this.dsList.getColumn(i, "AM_SUPPLY"));
        			this.dsSave.setColumn(nrow, "AM_SUPPLY2", this.dsList.getColumn(i, "AM_SUPPLY2"));
        			this.dsSave.setColumn(nrow, "AM_ETC", this.dsList.getColumn(i, "AM_ETC"));
        			this.dsSave.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        			this.dsSave.setColumn(nrow, "CD_PROOF", this.dsList.getColumn(i, "CD_PROOF"));
        			this.dsSave.setColumn(nrow, "CD_GONGJONG1", this.dsList.getColumn(i, "CD_GONGJONG1"));
        			this.dsSave.setColumn(nrow, "DS_GONGJONG1", this.dsList.getColumn(i, "DS_GONGJONG1"));
        			this.dsSave.setColumn(nrow, "ID_TRANS", this.dsList.getColumn(i, "ID_TRANS"));
        			this.dsSave.setColumn(nrow, "URL_PROOF", this.dsList.getColumn(i, "URL_PROOF"));
        			this.dsSave.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        			this.dsSave.setColumn(nrow, "DT_REQ", this.dsList.getColumn(i, "DT_REQ"));
        			this.dsSave.setColumn(nrow, "ISSUE_ID", this.dsList.getColumn(i, "ISSUE_ID"));
        			this.dsSave.setColumn(nrow, "CD_VENDOR_MIBUL", this.dsList.getColumn(i, "CD_VENDOR_MIBUL"));
        			this.dsSave.setColumn(nrow, "CD_CAR", this.dsList.getColumn(i, "CD_CAR"));
        			this.dsSave.setColumn(nrow, "TY_VATBGJE", this.dsList.getColumn(i, "TY_VATBGJE"));
        			this.dsSave.setColumn(nrow, "DT_PROOF", this.dsList.getColumn(i, "DT_PROOF"));


        			break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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
        		this.ccfCORP.form.CDTextBox.setFocus();
        		this.gfnAlert("법인코드를 입력하세요!");
        		return false;
        	}

        	if (this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 필수입력 값입니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclYM_WORK.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        		}
        		this.gfnAlert("회계년월은 필수입력 값입니다.");
        		return false;
        	}
        	return true;
        };

        this.fnGridValidate = function(objGrid) {
        	var objDs = objGrid.getBindDataset();

        	var msg = "";
        	for (var i = 0; i < objDs.rowcount; i++) {
        		var flag = this.gfnGetFlag(objDs, i);
        		switch(flag) {
        			case "I":
        			case "U":
        				var arrRequired = objGrid.usRequired;
        				for(var j = 0; j < arrRequired.length; j++) {
        					var spl_req = arrRequired[j].split(';');
        					var colnm = spl_req[0];
        					var header = spl_req[1];
        					if (this.gfnIsNull(objDs.getColumn(i, colnm))) {
        						msg += (i + 1) + "열: [" + header + "] 필수입력값입니다.\n";
        					}
        				}

        				var YN_BUDGET = this.dsSearch.getColumn(0,"YN_BUDGET")	// 예산부서여부
        				var CD_SEMOK = objDs.getColumn(i,"CD_SEMOK")	// 세목
        				if(YN_BUDGET == "Y" && this.gfnIsNull(CD_SEMOK)){
        					msg += (i + 1) + "열 예산부서일 경우 [세목코드]는 필수입니다. \n";
        				}

        // 				var TY_PAY = objDs.getColumn(i,"TY_PAY")	// 지급구분
        // 				var CD_VENDOR_MIBUL = objDs.getColumn(i,"CD_VENDOR_MIBUL")	// 지급거래처코드
        // 				if(TY_PAY == "02" && this.gfnIsNull(CD_VENDOR_MIBUL)){
        // 					msg += (i + 1) + "열 개인정산 미집행일 경우 [지급거래처코드]는 필수입니다. \n";
        // 				}

        				// 증빙코드 13번 선택하면 불공제 사유 필수
        				var CD_PROOF = objDs.getColumn(i,"CD_PROOF")	// 증빙코드
        				var TY_VATBGJE = objDs.getColumn(i,"TY_VATBGJE")	// 불공제사유
        				if(CD_PROOF == "13" && this.gfnIsNull(TY_VATBGJE)){
        					msg += (i + 1) + "열: 세금계산서(불공제)일 경우 [불공제사유]는 필수입니다. \n";
        				}

        				var CD_CAR = objDs.getColumn(i,"CD_CAR")	// 차량번호
        				var CK_ETC1_MO = objDs.getColumn(i, "CK_ETC1_MO");
        				if(CK_ETC1_MO == "M" && this.gfnIsNull(CD_CAR)){
        					msg += (i + 1) + "열: [차량번호]는 필수입니다. \n";
        				}

        				break;
        		}

        	}// for

        	if(this.gfnIsNull(msg)) {
        		return true;
        	}
        	else {
        		var arrError = [msg];
        		this.gfnAlert("msg.err.validator", arrError);
        		return false;
        	}
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

        	case "selectTax" :
        		if (errorCode == 0) {
        			if(this.dsTax.rowcount > 0){
        				var url = this.gfnGetConfig("DH" , "TAX_URL");
        				url = url+"Tax/TaxView.jsp?";
        				url += "invseq="+this.dsTax.getColumn(0, "INV_SEQ");
        				url += "&status="+this.dsTax.getColumn(0, "STATUS");
        				url += "&burks=" +this.dsTax.getColumn(0, "BUKRS");

        				window.open(url, "_blank", "width=790,height=600,menubar=no,scrollbars=no,resizable=no,status=no");
        			}else{
        				this.gfnAlert("세금계산서 정보가 없습니다.");
        			}
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
        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCORP":	//법인코드
        			//this.ccfCD_DEPT.form.fnCodeFindClear();
        		break;
        		case "ccfCD_DEPT":	//법인코드
        			var sYnBudget = "N";
        			var sGrDeptAcnt = "";
        			if(arr.length > 0) {
        				sYnBudget = arr[0]["YN_BUDGET"];
        				sGrDeptAcnt = arr[0]["GR_DEPT_ACNT"];
        			}

        			this.dsSearch.setColumn(0, "YN_BUDGET", sYnBudget);
        			this.dsSearch.setColumn(0, "GR_DEPT_ACNT", sGrDeptAcnt);

        			var nWidth = (sYnBudget == "Y") ? 80 : 0 ;
        			var sTextDecoration = (sYnBudget == "Y") ? "underline" : "";
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body","CD_SEMOK"),"size",nWidth);
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body","DS_SEMOK"),"size",nWidth);
        			this.dxGrid.setCellProperty("head", this.gfnGetHeadRowCellIndex(this.dxGrid, 1, "CD_SEMOK"), "textDecoration", sTextDecoration);

        		break;
        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	if (id == "ccfCORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}else if (id == "ccfCD_DEPT") {
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);

        // 		if (this.gfnIsNull(this.ccfCORP.form.CDTextBox.value)) {
        // 			//this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 			this.gfnAlert("법인코드를 입력하세요!");
        // 			return false;
        // 		}
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCORP.form.CDTextBox.value);
        	}
        	return true;
        }

        /************************************************************************
        * 그리드 이벤트
        ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	var cdDept = this.dsSearch.getColumn(0, "CD_DEPT");
        	var TyVendor = this.dsList.getColumn(this.dsList.rowposition, "TY_VENDOR");
        	var TyVendorMibul = this.dsList.getColumn(this.dsList.rowposition, "TY_VENDOR_MIBUL");
        	var cdPay = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	var cdPayMibul = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR_MIBUL");
        	var cdAccount = this.dsList.getColumn(this.dsList.rowposition, "CD_ACCOUNT");
        	var sYrAcnt = this.dsList.getColumn(this.dsList.rowposition, "DT_ACCOUNT");
        	var sYm_work = this.dsSearch.getColumn(0,"YM_WORK");
        	var cdProject = "DD0001";

        	switch(id) {
        		case "DHX_CFEBILLBUY_ESERO":	//전자세금계산서
        			dsUserParam.setColumn(nrow, "CD_CORP"   , cdCorp);
        			dsUserParam.setColumn(nrow, "TY_SALEBUY", "I");	//매입만
        		break;
        		case "DHX_CFALLVENDOR_CODEFIND":		//거래처코드
        		case "DHX_CFALLVENDOR_CODEFIND_MIBUL":	//지급거래처코드
        			dsUserParam.setColumn(nrow, "CD_CORP" , cdCorp);
        		break;
        		case "DHX_CFACNTSITE":	// 계정코드
        			dsUserParam.setColumn(nrow, "CD_DEPT_BE" , cdDept);
        		break;
        		case "DZX_CFCODE_COM":	// 증빙코드
        			dsUserParam.setColumn(nrow, "CD_SYSTEM" , "DH");
        			dsUserParam.setColumn(nrow, "CD_TYPE" , "V10");
        		break;
        		case "DFX_CFACCOUNTMATCH":	// 계좌번호
        			if(this.gfnIsNull(cdPay)){
        				this.gfnAlert("거래처를 입력해주세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "TY_VENDOR" , TyVendor);
        			dsUserParam.setColumn(nrow, "CD_PAY" , cdPay);
        		break;
        		case "DWX_CFCOST_TUJA":	// 식별코드
        			dsUserParam.setColumn(nrow, "YM_WORK" , sYm_work);/*2022-08-02 박현선 회계년월추가*/
        			dsUserParam.setColumn(nrow, "CD_SITE" , cdDept);
        		break;
        		case "DHX_CFSEMOK_BY_MULTI":	// 세목
        			if (this.gfnIsNull(sYrAcnt)) {
        				//this.gfnAlert("거래시작일자를 먼저 입력하세요.");
        				this.gfnAlert("회계일자를 먼저 입력하세요.");
        				return false;
        			}

        			if (this.gfnIsNull(cdDept)) {
        				this.gfnAlert("부서코드를 먼저 입력하세요.");
        				return false;
        			}

        			if (this.gfnIsNull(cdAccount)) {
        				this.gfnAlert("계정코드를 먼저 입력하세요.");
        				return false;
        			}

        			var nStart = cdAccount.length -2;
        			var cdBimok = cdAccount.substr( nStart, 2 );

        			dsUserParam.setColumn(nrow, "YR_ACCOUNT", sYrAcnt.substring(0, 4));
        			dsUserParam.setColumn(nrow, "CD_DEPTOFFICER", cdDept);
        			dsUserParam.setColumn(nrow, "CD_PROJECT", cdProject);
        			dsUserParam.setColumn(nrow, "CD_BIMOK", cdBimok);
        		break;

        		case "DHX_CAR":	// 차량코드
        			if (this.gfnIsNull(cdCorp)) {
        				this.gfnAlert("법인코드를 먼저 입력하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		break;
        	}

        	return true;
        }


        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	var rowPos = this.dsList.rowposition;
        	switch(id) {
        			case "DHX_CFEBILLBUY_ESERO":	//전자세금계산서번호
        			if (arrData.length > 0) {
        				this.dsList.set_enableevent(false);

        				this.dsList.setColumn(rowPos, "DT_ACCOUNT"	, nexacro.replaceAll(this.gfnNvl(arrData[0]["ISSUE_DATE"],""),"-",""));	//회계일자
        				this.dsList.setColumn(rowPos, "DT_PROOF"	, nexacro.replaceAll(this.gfnNvl(arrData[0]["ISSUE_DATE"],""),"-",""));	//회계일자
        				this.dsList.setColumn(rowPos, "CD_VENDOR" 	, arrData[0]["CD_VENDOR"]);		//거래처코드
        				this.dsList.setColumn(rowPos, "DS_VENDOR" 	, arrData[0]["DS_VENDOR"]);		//거래처명
        				this.dsList.setColumn(rowPos, "TY_VENDOR" 	, arrData[0]["TY_VENDOR"]);		//거래처구분

        				trace("공급가액->" + arrData[0]["CHARGETOTAL"]);
        				trace("부가세->" + arrData[0]["TAXTOTAL"]);

        				this.dsList.setColumn(rowPos, "TY_CRDR"	  	, arrData[0]["TY_CRDR"]);		//차대구분
        				this.dsList.setColumn(rowPos, "TY_SALEBUY"	, arrData[0]["TY_SALEBUY"]);	//거래구분
        				this.dsList.setColumn(rowPos, "AM_SUPPLY"	, arrData[0]["CHARGETOTAL"]);	//공급가액
        				this.dsList.setColumn(rowPos, "AM_VAT"		, arrData[0]["TAXTOTAL"]);		//부가세
        				this.dsList.setColumn(rowPos, "TY_ISSUE"	, "E");		//발행구분(전자발행)

        				this.dsList.setColumn(rowPos, "DS_REM"		, arrData[0]["GOOD_NAME"]);		//적요(품명)

        				this.dsList.setColumn(rowPos, "DT_PROOF"    , nexacro.replaceAll(this.gfnNvl(arrData[0]["ISSUE_DATE"],""),"-",""));		//부가세 증빙일자

        				//trace("TAXTOTAL :: "+arrData[0]["TAXTOTAL"]);


        				var amSupply = nexacro.toNumber(this.dsList.getColumn(rowPos, "AM_SUPPLY"),0);
        				var amSupply2 = nexacro.toNumber(this.dsList.getColumn(rowPos, "AM_SUPPLY2"),0);
        				var amEtc = nexacro.toNumber(this.dsList.getColumn(rowPos, "AM_ETC"),0);
        				var amVat = nexacro.toNumber(this.dsList.getColumn(rowPos, "AM_VAT"),0);
        				var nAmVat = amSupply + amSupply2 + amEtc + amVat;
        				this.dsList.setColumn(rowPos, "AM_ACCOUNT", nAmVat);

        				this.dsList.set_enableevent(true);

        				var colCD_ACCOUNT = this.dxGrid.getBindCellIndex("body", "CD_ACCOUNT");
        				this.dxGrid.setCellPos(colCD_ACCOUNT);
        				this.dxGrid.showEditor(true);
        			}
        			break;

        			case "DHX_CFACNTSITE":
        				var CK_ETC1_MO = (arrData.length > 0) ? arrData[0]["CK_ETC1_MO"] : "";
        				var sTextDecoration = (CK_ETC1_MO == "M") ? "underline" : "";
        				this.dxGrid.setCellProperty("head", this.gfnGetHeadCellIndex(this.dxGrid, "CD_CAR"), "textDecoration", sTextDecoration);
        			break;
        	}
        };

        // 셀 수정가능 여부 (반드시 EnterCell에서 처리할것)
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var objDs = obj.getBindDataset();
        	if(colnm == "CHK" || colnm == "URL_PROOF"){
        		return true;
        	}

        	var CD_SLIP = objDs.getColumn(row, "CD_SLIP");
        	if(!this.gfnIsNull(CD_SLIP)){
        		return false;
        	}

        // 	var sGrDeptAcnt = this.dsSearch.getColumn(0, "GR_DEPT_ACNT");
        // 	if(colnm == "TY_PAY" && sGrDeptAcnt == "본사") {
        // 		return false;
        // 	}

        	// 공통 > Setting > 그리드정보 에서 셋팅한 내용대로
        	var nGrdSpcRow = this.dsGridSpec.findRow( "DS_FIELD", colnm);
        	var YN_READONLY = this.dsGridSpec.getColumn(nGrdSpcRow, "YN_READONLY");
        	var AT_READONLY = this.dsGridSpec.getColumn(nGrdSpcRow, "AT_READONLY");
        	if(YN_READONLY == "Y") return false;
        	if(YN_READONLY =="U" && (this.gfnIsNull(rowFlag) || rowFlag == "U")){	// flag 가 U 이거나 빈값
        		return false;
        	}
        	return true;
        }

        //그리드 로우변경 이벤트
        this.dsList_Rowposchanged = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	if(e.oldrow > -1 && e.oldrow != e.newrow ){
        		var CK_ETC1_MO = this.dsList.getColumn(e.newrow, "CK_ETC1_MO");
        		var sTextDecoration = (CK_ETC1_MO == "M") ? "underline" : "";
        		this.dxGrid.setCellProperty("head", this.gfnGetHeadCellIndex(this.dxGrid, "CD_CAR"), "textDecoration", sTextDecoration);
        	}
        };

        //그리드 값변경 이벤트
        this.dsList_ColumnChanged = function(obj, e){
        	if (e.columnid == "CD_ACCOUNT") {
        		if(this.gfnIsNull(e.newvalue)){
        			this.dxGrid.setCellProperty("head", this.gfnGetHeadCellIndex(this.dxGrid, "CD_CAR"), "textDecoration", "");
        		}
        	}
        	if (e.columnid == "DT_ACCOUNT") {
        		if(e.newvalue != e.oldvalue){
        			var DT_PROOF = this.dsList.getColumn(this.dsList.rowposition, "DT_PROOF");
        			var DT_ACCOUNT = e.newvalue;
        			var DS_REM = this.dsList.getColumn(this.dsList.rowposition, "DS_REM");
        			var DS_ALERT_MSG = (DT_ACCOUNT.substring(0, 6) != DT_PROOF.substring(0, 6)) ? "[증빙월차이] " : "";

        			trace("증빌일자->" + DT_PROOF + "/ 회계일자->" + DT_ACCOUNT);
        			if(DS_REM.substring(0, 8) == "[증빙월차이] "){
        				DS_REM = DS_REM.substring(8, DS_REM.toString().length);
        			}
        			this.dsList.setColumn(this.dsList.rowposition, "DS_REM", DS_ALERT_MSG + DS_REM);
        		}

        		if(this.gfnIsNull(e.newvalue)){
        			this.dxGrid.setCellProperty("head", this.gfnGetHeadCellIndex(this.dxGrid, "CD_CAR"), "textDecoration", "");
        		}
        	}

        }

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
        		/*NO_SLIPKEY --출금등록번호 --HIDDEN		*/
        		var NO_SLIPKEY = objDs.getColumn(e.row, "NO_SLIPKEY");
        		var CD_SLIP = objDs.getColumn(e.row, "CD_SLIP");
        		var fileManager = {};
        		fileManager.CD_GUBUN = "DH02";
        		fileManager.CD_DIR = [objDs.getColumn(e.row, "NO_SLIPKEY")];
        		fileManager.IS_READONLY = this.gfnIsNull(CD_SLIP) ? false : true;
        		//fileManager.IS_READONLY = false;

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
        //세금계산서 보기
        this.fnTaxView = function (obj,e){

        	var issueId   = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "ISSUE_ID"));
        	var tySalebuy = "I";
        	if(this.gfnIsNull(issueId)){
        		this.gfnAlert("전자세금계산서번호는 필수입니다.");
        		return;
        	}

        	//세금계산서 정보 조회
        	this.fnSelectTax(issueId, tySalebuy);
        };

        //세금계산서 정보 조회
        this.fnSelectTax = function (issueId, tySalebuy)
        {
        	this.dsSelectTax.clearData();
        	var nRow = this.dsSelectTax.addRow();

        	this.dsSelectTax.setColumn(nRow, "ISSUE_ID"  , issueId);		//세금계산서번호
        	this.dsSelectTax.setColumn(nRow, "TY_SALEBUY", tySalebuy);		//매입/매출구분

        	var strSvcId    = "selectTax";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectTax=dsSelectTax";
        	var outData     = "dsTax=selectTax0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        //전도금정산
        this.fnStateSettle = function (obj,e)
        {
        };
        //결재문서
        this.fnAppDoc = function (obj,e)
        {
        };

        //전표발행
        this.fnIssueSlip = function (obj,e){

        	if(this.dsList.getCaseCount("CHK == '1' && "+ this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("체크된 항목이 없습니다.");
        		return;
        	}

        	if(this.dsList.findRowExpr("CHK == 1 && !dataset.parent.gfnIsNull(CD_SLIP) && nx_flag != '#'") > -1){
        		this.gfnAlert("전표발행된 항목이 체크되어 있습니다.");
        		return;
        	}

        	var nChkRow = this.dsList.findRow( "CHK", "1" );
        	var sTyPay = this.dsList.getColumn(nChkRow, "TY_PAY");	// 지급구분
        	for(var i = 0 ; i < this.dsList.rowcount; i++){
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			if(sTyPay != this.dsList.getColumn(i, "TY_PAY")){
        				this.gfnAlert("동일한 지급구분을 선택하십시오")
        				return false;
        			}
        		}
        	}

        	this.gfnConfirm("전표 발행하시겠습니까?", "fnIssueSlip_callback");
        };

        //전표취소
        this.fnCancelSlip = function (obj,e)
        {
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
        this.fnStateSearch = function (obj,e){

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

        // 전표발행
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
        				strNoSlipKey += (sDelimiter + this.dsList.getColumn(r, "NO_SLIPKEY"));
        				nLoopcnt++;

        				sTyPay = this.dsList.getColumn(r, "TY_PAY");	// 지급구분
        			}
        		}

        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_BE", this.dsSearch.getColumn(0, "CD_DEPT"));
        		this.dsIssueSlip.setColumn(nRow, "NO_SLIPKEY" , strNoSlipKey);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        		this.dsIssueSlip.setColumn(nRow, "TY_PAY", sTyPay);
        		this.dsIssueSlip.setColumn(nRow, "ID_USER"   , this.AuthClient.ID_USER);

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

        //승인/승인취소 처리
        this.fnApply = function (obj,e)
        {
        	var param = {};
        	param.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");

        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");

        	this.gfnFormOpenNonAuth("DFB", "DFB_ACCOUNT", "", param);
        };

        this.dsList_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		var nAmVat = 0; // 합계
        		var nRow = e.row;
        		switch(e.columnid) {
        			case "AM_SUPPLY":	// 공급가
        			case "AM_SUPPLY2":	// 전력기금
        			case "AM_ETC":		// 잡이익/손실
        			case "AM_VAT":		// 부가세
        				//AM_ACCOUNT	합계

        				var amSupply = nexacro.toNumber(obj.getColumn(nRow, "AM_SUPPLY"),0);
        				var amSupply2 = nexacro.toNumber(obj.getColumn(nRow, "AM_SUPPLY2"),0);
        				var amEtc = nexacro.toNumber(obj.getColumn(nRow, "AM_ETC"),0);
        				var amVat = nexacro.toNumber(obj.getColumn(nRow, "AM_VAT"),0);
        				nAmVat = amSupply + amSupply2 + amEtc + amVat;
        				obj.setColumn(nRow, "AM_ACCOUNT", nAmVat);

        				break;
        		}
        	}
        };

        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	var cdSlip = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"));
        	if (!this.gfnIsNull(cdSlip)) {
        		var param = {};
        		param.IUD_FLAG = "S";
        		param.CD_TRADE = cdSlip;
        		this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_JUNDOJS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
