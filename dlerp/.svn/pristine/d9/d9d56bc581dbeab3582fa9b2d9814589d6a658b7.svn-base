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
            this.set_titletext("예산변경관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DIQPR_DIVERT_MASTER_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DIQPR_DIVERT_MASTER_SAVE</Col></Row><Row><Col id=\"TARGET\">selectDtl</Col><Col id=\"SP\">DIQPR_DIVERT_DTL_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_CODE_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">aprv_execute</Col><Col id=\"SP\">DIQPR_DIVERT_BUDGET_APRV_EXECUTE</Col></Row><Row><Col id=\"TARGET\">appChk</Col><Col id=\"SP\">DIQPR_APP_DI02_CHK</Col></Row><Row><Col id=\"TARGET\">appChk2</Col><Col id=\"SP\">DIQPR_APP_DI02_CHK</Col></Row><Row><Col id=\"TARGET\">appSelect</Col><Col id=\"SP\">DIQPR_APP_DI01_SELECT</Col></Row><Row><Col id=\"TARGET\">appSelect2</Col><Col id=\"SP\">DIQPR_APP_DI02_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_BUDGET\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DIVERT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListDtl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppList", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_BUDGET\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_MST\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUDGET\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CAUSE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppList2", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_BUDGET","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("예산년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cctclYR_BUDGET","staYR_BUDGET:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_DIVERT","cctclYR_BUDGET:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("전용여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_DIVERT","staYN_DIVERT:0.0","10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboYN_DIVERT_innerdataset = new nexacro.NormalDataset("divSearch_form_cboYN_DIVERT_innerdataset", obj);
            divSearch_form_cboYN_DIVERT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">전용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">추가</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboYN_DIVERT_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","cboYN_DIVERT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","240","24.0",null,null,null,"353",null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DIX_ACNTUNIT_AUTH");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","240","24.0",null,null,null,"353",null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFIDSABUN");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_TITLE","ccfID_SABUN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사유");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_TITLE","staDS_TITLE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","50%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ns-resize");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cctclYR_BUDGET.form.TextBox","value","dsSearch","YR_BUDGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtDS_TITLE","value","dsSearch","DS_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboYN_DIVERT","value","dsSearch","YN_DIVERT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.addIncludeScript("DIQ_DIVERT_MASTER.xfdl","lib::libCommon.xjs");
        this.registerScript("DIQ_DIVERT_MASTER.xfdl", function() {
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YR_BUDGET", today.substr(0,4));

        // 	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        // 		this.ccfCD_DEPT.set_enable(false);
        // 	}

        	var grSearch = nexacro.toNumber(this.FormInfo.GR_SEARCH);
        	var idGroup = this.FormInfo.ID_GROUP;	// 사용자그룹코드 : 2 부서/현장 3본부 4전사
        	trace("FormInfo.IdGroup->" + idGroup);
        	var bGroupChk = (idGroup == 2 || idGroup == 3 || idGroup == 4) ? true : false;
        	if(grSearch >= 7 || grSearch == 3 || bGroupChk){
        		this.dsSearch.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        		this.dsSearch.setColumn(0, "DS_DEPT", this.AuthClient.DS_DEPT);
        		//this.divSearch.form.staCD_DEPT.set_textDecoration("underline");
        		this.divSearch.form.staCD_DEPT.set_cssclass("sta_WF_SchLabelE");
        		//this.divSearch.form.staCD_DEPT.set_cssclass("sta_WF_SchLabel");
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDivertBudgetNew = this.gfnFormButtonAdd("DivertBudgetNew", "fnDivertBudgetNew");	// 예산전용_신규
        	this.btnDivertBudget = this.gfnFormButtonAdd("DivertBudget", "fnDivertBudget");				// 예산전용_변경(상세)
        	//this.btnAddBudget = this.gfnFormButtonAdd("AddBudget", "fnAddBudget");			// 예산추가
        	//this.btnApp = this.gfnFormButtonAdd("btnApp", "fnAPP");								// 전자결재상신

        	this.btnAprv     = this.gfnFormButtonAdd("btnAprv"    , "fnAprv");			// 결재상신 버튼
        	this.btnDocQ     = this.gfnFormButtonAdd("btnDocQ"    , "fnAprvDocQ");		// 결재문서조회 버튼
        	this.btnInit     = this.gfnFormButtonAdd("btnInit"    , "fnAprvInit");		// 결재상태초기화 버튼

        	var IdGroup = nexacro.toNumber(this.FormInfo.ID_GROUP);
        	if(IdGroup == 1){
        		this.btnExcelU = this.gfnFormButtonAdd("btnExcelU", "fnExcelU");				// 추가엑셀업로드
        	}

        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter);
        };

        // 전자결재 버튼
        this.fnUpdateStatusExtendButton = function() {
        	var nrow = this.dsList.rowposition;

         	this.btnAprv.set_enable(this.dsList.getColumn(nrow, "BTN_APRV") == "Y");
         	this.btnDocQ.set_enable(this.dsList.getColumn(nrow, "BTN_DOC_Q") == "Y");
         	this.btnInit.set_enable(this.dsList.getColumn(nrow, "BTN_INIT") == "Y");
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.cctclYR_BUDGET = this.divSearch.form.cctclYR_BUDGET;
        	this.edtDS_TITLE = this.divSearch.form.edtDS_TITLE;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	//this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfID_SABUN.CodeFindName = "DZX_CFUSERBYCORP";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//this.ccfCD_DEPT.CodeFindName = "DEX_CFACNTUNIT";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DI", "DIQ_DIVERT_MASTER");
        	this.gfnGridInit(this.dxGridSub, this.dsListDtl, "DI", "DIQ_DIVERT_DETAIL");

        	//this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	//this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	//this.dxGridSub.selecttype = "row";

        	// 체크박스 비활성화
        	/*
        		AP_STATUS : 전자결재 상태 (A11)
        		00	결재전	01	임시저장	02	결재중
        		04	반려	05	결재완료	06	상신취소
        	*/

        	// 전자결재상태 ST_APRV 공통코드 DZ - DZ_APRV
        	// 1임시저장	2결재상신	3결재중	4결재완료	5반려	6상신취소	7작성취소

        	var objGrid = this.dxGrid;
        	//objGrid.setCellProperty("body", objGrid.getBindCellIndex("body", "CHK"), "edittype", "expr: (ST_APRV==2||ST_APRV==3||ST_APRV==4)? 'none':'checkbox'");
        	//objGrid.setCellProperty("body", objGrid.getBindCellIndex("body", "CHK"), "edittype", "expr: (AP_STATUS==00||AP_STATUS==04||AP_STATUS==06)? 'checkbox':'none'");
         	objGrid.setCellProperty("body", objGrid.getBindCellIndex("body", "CD_DEPT"), "expandshow", "expr:(nx_flag=='#' || nx_flag=='I'|| DTL_CNT == 0) ? 'show':'hide'");	// 발행부서(돋보기버튼)
         	objGrid.setCellProperty("body", objGrid.getBindCellIndex("body", "CD_DEPT"), "edittype", "expr:(nx_flag=='#' || nx_flag=='I'|| DTL_CNT == 0) ? 'text':'none'");		// 발행부서
        	objGrid.setCellProperty("body", objGrid.getBindCellIndex( "body", "YN_DIVERT"), "edittype", "expr:(nx_flag=='#' || nx_flag=='I' || DTL_CNT == 0) ? 'combo':'none'");

        	//this.dxGridSub.selecttype = "row";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_BUDGET", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("DS_TITLE", "string");
        	this.dsSelect.addColumn("YN_DIVERT", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("YR_BUDGET", "string");
        	this.dsSave.addColumn("SEQ_MST", "int");
        	this.dsSave.addColumn("YN_DIVERT", "string");
        	this.dsSave.addColumn("DS_TITLE", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("SEQ_MST", "int");

        	this.dsAppParam = new Dataset();
        	this.dsAppParam.addColumn("YR_BUDGET", "string");
        	this.dsAppParam.addColumn("SEQ_MST", "string");
        	this.dsAppParam.addColumn("URL", "string");

        	// 결재
        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("TY_WRK", "string");
        	this.dsApproval.addColumn("YR_BUDGET", "string");
        	this.dsApproval.addColumn("SEQ_MST", "int");
        	this.dsApproval.addColumn("ID_APRV", "string");
        	this.dsApproval.addColumn("NO_APRV", "int");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsListDtl.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "YR_BUDGET", this.dsSearch.getColumn(0, "YR_BUDGET"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "DS_TITLE", this.dsSearch.getColumn(0, "DS_TITLE"));
        	this.dsSelect.setColumn(0, "YN_DIVERT", this.dsSearch.getColumn(0, "YN_DIVERT"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

        	this.dsList.set_enableevent(false);
        	this.dsList.set_enableevent(true);

        	this.dsList.setColumn(nrow, "YR_BUDGET", this.dsSearch.getColumn(0, "YR_BUDGET"));
        	this.dsList.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	this.dsList.setColumn(nrow, "YN_DIVERT", "Y");
        	this.dsList.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        /*
        	AP_STATUS : 전자결재 상태 (A11)
        	00	결재전	01	임시저장	02	결재중
        	04	반려	05	결재완료	06	상신취소
        */
        // 	var AP_STATUS = this.dsList.getColumn(this.dsList.rowposition, "AP_STATUS");
        // 	if(AP_STATUS == "02" || AP_STATUS == "05"){
        // 		this.gfnAlert("결재중/결재완료 데이터는 삭제가 불가능합니다.");
        // 		return false;
        // 	}
        //

        	// 전자결재상태 ST_APRV 공통코드 DZ - DZ_APRV
        	// 1임시저장	2결재상신	3결재중	4결재완료	5반려	6상신취소	7작성취소
        	var ST_APRV = this.dsList.getColumn(this.dsList.rowposition, "ST_APRV");
        	if(ST_APRV == "1" || ST_APRV == "2" || ST_APRV == "3" || ST_APRV == "4"){
        		this.gfnAlert("결재상신/결재중/결재완료 데이터는 삭제가 불가능합니다.");
        		return false;
        	}

        	var DTL_CNT = this.dsList.getColumn(this.dsList.rowposition, "DTL_CNT");
        	var ChkMsg = (DTL_CNT == 0) ? "" : "등록된 예산변경 데이터 " + DTL_CNT +"건이 모두 삭제됩니다. 그래도 ";
        	this.gfnConfirm( ChkMsg + "삭제하시겠습니까?", function(sSvcId, val) {
        		if (val) {
        			this.gfnGridDel(this.dxGrid);
        		}
        	});
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

         	// 그리드 필수항목 체크
        	//if (!this.fnGridValidate(this.dxGrid)) return;
         	if (!this.gfnGridValidate(this.dxGrid)) return;

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
        				this.dsSave.setColumn(nrow, "YR_BUDGET", this.dsList.getColumn(i, "YR_BUDGET"));
        				this.dsSave.setColumn(nrow, "SEQ_MST", this.dsList.getColumn(i, "SEQ_MST"));
        				this.dsSave.setColumn(nrow, "YN_DIVERT", this.dsList.getColumn(i, "YN_DIVERT"));
        				this.dsSave.setColumn(nrow, "DS_TITLE", this.dsList.getColumn(i, "DS_TITLE"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;
        	//this.gfnAlert('msg.save.nochange');

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      ="save=dsSave";
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


        /************************************************************************
         * 서브 버튼 이벤트 (조회, 입력, 수정, 삭제)
         ************************************************************************/
        /*
          *	조회 버튼
          */
        this.fnSelectSub = function(){

        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "SEQ_MST", this.dsList.getColumn(this.dsList.rowposition, "SEQ_MST"));

        	var strSvcId    = "selectDtl";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectDtl=dsSelectSub";
        	var outData     = "dsListDtl=selectDtl0";
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

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnAppValidate = function() {
        	var validate = true;

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			this.gfnAlert("저장 후 지명품의를 진행해주십시오.");
        			return false;
        		}
        	}
        	return validate;
        };

        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var YR_BUDGET = this.dsSearch.getColumn(0, "YR_BUDGET");
        	var CD_DEPT = this.dsSearch.getColumn(0, "CD_DEPT");
        	if(this.gfnIsNull(YR_BUDGET)){
        		this.gfnAlert("예산년도는 필수입력 입니다.", function() {
        			this.cctclYR_BUDGET.form.TextBox.setFocus();
        		});
        		return false;
        	}

        	var grSearch = nexacro.toNumber(this.FormInfo.GR_SEARCH);
        	var idGroup = this.FormInfo.ID_GROUP;	// 사용자그룹코드 : 2 부서/현장 3본부 4전사
        	var bGroupChk = (idGroup == 2 || idGroup == 3 || idGroup == 4) ? true : false;
        	if(grSearch >= 7 || grSearch == 3 || bGroupChk){
        		if(this.gfnIsNull(CD_DEPT)){
        			this.gfnAlert("부서코드는 필수입력 입니다.", function() {
        				this.ccfCD_DEPT.form.CDTextBox.setFocus();
        			});
        			return false;
        		}
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

        	if (errorCode != 0){
        		this.gfnAlert(errorMsg);
        	}

        	this.fnUpdateStatusExtendButton();

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}else if (svcID == "selectDtl") {
        		this.gfnGridAfterSelect(this.dxGridSub);

        		// 전용여부 YN_DIVERT : 변경예산(Y) / 추가예산(N)
        		var YN_DIVERT = this.dsList.getColumn(this.dsList.rowposition, "YN_DIVERT");
        		this.fnSetGridWidth(YN_DIVERT);

        	}else if (svcID == "save") {
        		this.FormBtns.Select.click();

        	} else if (svcID == "APRV" || svcID == "APRVCNC") {
        		this.gfnOpenAppr(function() {
        			this.FormBtns.Select.click();
        		});
        	} else if (svcID == "APRVINIT") {
        		this.FormBtns.Select.click();

        	}else if(svcID == "appChk") {
        		if (errorCode == 0) {
        			this.fnAppSelect();
        		}else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "appSelect") {
        		if (errorCode == 0) {
        			this.fnAppOpen();
        		}else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "appChk2") {
        		if (errorCode == 0) {
        			this.fnAppSelect2();
        		}else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "appSelect2") {
        		if (errorCode == 0) {
        			this.fnAppOpen2();
        		}else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfID_SABUN") {
        		//dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_CORP", "");
        	}

        	if (id == "ccfCD_DEPT") {
        		var id_sabun = this.AuthClient.ID_USER;
        		var gr_search = this.FormInfo.GR_SEARCH;
        		var cd_dept = this.AuthClient.CD_DEPT;
        		//alert(id_sabun + " , " + gr_search);

        		dsUserParam.setColumn(nrow, "YR_BUDGET", this.dsSearch.getColumn(0, "YR_BUDGET"));
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", gr_search);
        		dsUserParam.setColumn(nrow, "ID_SABUN", id_sabun);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "TY_DEPTGUBUN", "");	// TY_GUBUN : B본사 / H현장 / S수주영업비
        	}

        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
        ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.FormBtns.SubSelect.click();

        		for(var i=0; i < this.dsList.rowcount; i++){
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(i, "CHK", 0);
        			this.dsList.set_enableevent(true);
        		}
        		obj.oldrow = -1;
        	}
        	this.fnUpdateStatusExtendButton();
        };

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        // 	if (id == "DWX_HADO_ACCOUNT") {
        // 		dsUserParam.setColumn(nrow, "CD_SITE", this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        // 	}
        	switch(id) {
        		case "DZX_CFUSERBYCORP":
        			dsUserParam.setColumn(nrow, "CD_CORP", "");
        		break;

        		case "DIX_ACNTUNIT_AUTH":
        			var id_sabun = this.AuthClient.ID_USER;
        			var gr_search = this.FormInfo.GR_SEARCH;
        			var cd_dept = this.AuthClient.CD_DEPT;
        			//alert(id_sabun + " , " + gr_search);

        			dsUserParam.setColumn(nrow, "YR_BUDGET", this.dsSearch.getColumn(0, "YR_BUDGET"));
        			dsUserParam.setColumn(nrow, "YN_USE", "Y");
        			dsUserParam.setColumn(nrow, "GR_SEARCH", gr_search);
        			dsUserParam.setColumn(nrow, "ID_SABUN", id_sabun);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "");
        			dsUserParam.setColumn(nrow, "TY_DEPTGUBUN", "");	// TY_GUBUN : B본사 / H현장 / S수주영업비
        		break;
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	var rowPos = this.dsList.rowposition;

        	switch(id) {
        		case "DEX_CFBASEINFO":
        			//var EMAIL = (arrData.length > 0) ? arrData[0]["EMAIL"] : "";
        			//this.dsList.setColumn(rowPos, "ID_RECEIVE_MAIL", EMAIL);
        		break;

        	}
        };

        this.divData_divDataRight_objGridSub_oncelldblclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var row = this.dsListDtl.rowposition;

        	var tyGubun = this.dsListDtl.getColumn(row, "TY_GUBUN");
        	var seqDtl = this.dsListDtl.getColumn(row, "SEQ_DTL");

        	// 구분 TY_GUBUN : (1변경,2전용,3추가)
        	if ( tyGubun == "3"){
        		// 예산추가
        		this.fnAddBudgetPop(seqDtl);
        	}else{
        		// 예산변경
        		this.fnDivertBudgetPop(seqDtl, tyGubun);
        	}
        };

        this.fnSetGridWidth = function(YN_DIVERT){

        	// 공통 > Setting > 그리드정보에서 셋팅한 내용대로
         	var objGrid = this.dxGridSub;
        	var strDsField = "";
        	var strNoWidth = 0;
        	var strFilterExpr = "NO_WIDTH != 0 && DS_HEADER1 == 'TO' && DS_FIELD !='' ";
         	this.dsGridSpec.filter(strFilterExpr);
         	for (var i = 0; i < this.dsGridSpec.rowcount; i++) {
         		strDsField = this.dsGridSpec.getColumn(i, "DS_FIELD");
        		strNoWidth = this.dsGridSpec.getColumn(i, "NO_WIDTH");

        		// 전용여부 YN_DIVERT : 변경예산(Y) / 추가예산(N)
        		strNoWidth = ( YN_DIVERT == "N") ? 0 : strNoWidth;
        		objGrid.setFormatColProperty(objGrid.getBindCellIndex("body", strDsField), "size", strNoWidth);	//구분
        	}
         	this.dsGridSpec.filter("");
        }


        // 한개의 체크박스만 체크
        this.dsList_cancolumnchange = function(obj,e)
        {
        	this.dsList.set_enableevent(false);
        	for(var i = 0; i < this.dsList.rowcount;i++)
        	{

        		if(this.dsList.getColumn(i, this.ucFlag) == "#"){
        			continue;
        		}

        		if(i == e.row){
        			this.dsList.setColumn(i, "CHK", 1);
        		}else{
        			this.dsList.setColumn(i, "CHK", 0);
        		}
        	}
        	this.dsList.set_enableevent(true);
        };

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
         // 예산변경_수정
         this.fnDivertBudget = function(obj, e){
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var row = this.dsListDtl.rowposition;
        	var tyGubun = this.dsListDtl.getColumn(row, "TY_GUBUN");
        	var seqDtl = this.dsListDtl.getColumn(row, "SEQ_DTL");
        	if(this.gfnIsNull(seqDtl)) return;

        	// 구분 TY_GUBUN : (1변경,2전용,3추가)
        	if ( tyGubun == "3"){
        		// 예산추가
        		this.fnAddBudgetPop(seqDtl);
        	}else{
        		// 예산변경
        		this.fnDivertBudgetPop(seqDtl, tyGubun);
        	}
        }

         // 예산변경_신규
         this.fnDivertBudgetNew = function(obj, e){
        	var rowMst = this.dsList.rowposition;
        	var SEQ_MST = this.dsList.getColumn(rowMst, "SEQ_MST");
        	var seqDtl;

        	if(this.gfnIsNull(SEQ_MST)) return;

        	/*
        		AP_STATUS : 전자결재 상태 (A11)
        		00	결재전	01	임시저장	02	결재중
        		04	반려	05	결재완료	06	상신취소
        	*/
        // 	var AP_STATUS = this.dsList.getColumn(this.dsList.rowposition, "AP_STATUS");
        // 	if(AP_STATUS == "02" || AP_STATUS == "05"){
        // 		this.gfnAlert("결재중/결재완료 데이터는 입력이 불가능합니다.");
        // 		return false;
        // 	}

        	// 전자결재상태 ST_APRV 공통코드 DZ - DZ_APRV
        	// 1임시저장	2결재상신	3결재중	4결재완료	5반려	6상신취소	7작성취소
        	var ST_APRV = this.dsList.getColumn(this.dsList.rowposition, "ST_APRV");
        	if(ST_APRV == "1" || ST_APRV == "2" || ST_APRV == "3" || ST_APRV == "4"){
        		this.gfnAlert("결재상신/결재중/결재완료 데이터는 입력이 불가능합니다.");
        		return false;
        	}

        	// 전용여부 YN_DIVERT : 변경예산(Y) / 추가예산(N)
        	var YN_DIVERT = this.dsList.getColumn(rowMst, "YN_DIVERT");
        	if ( YN_DIVERT == "N"){
        		// 예산추가 (DIQ_ADDITION)
        		this.fnAddBudgetPop(seqDtl);
        	}else{
        		// 예산변경 (DIQ_BUDGETTOBUDGET)
        		var tyGubun = "2";	// 구분 TY_GUBUN : (1변경,2전용,3추가) 신규등록일때 default값 전용으로
        		this.fnDivertBudgetPop(seqDtl, tyGubun);
        	}
        }


        // // 예산추가
        // this.fnAddBudget = function(obj:nexacro.Button, e:nexacro.ClickEventInfo){
        //
        // 	var SEQ_MST = this.dsList.getColumn(this.dsList.rowposition, "SEQ_MST");
        // 	if(this.gfnIsNull(SEQ_MST)) return;
        //
        // 	this.fnAddBudgetPop();
        // 	// DIQ_ADDITION
        // }

        // 예산변경
        this.fnDivertBudgetPop = function(seqDtl, tyGubun){

        	var rowMst = this.dsList.rowposition;
        	var rowDtl = this.dsListDtl.rowposition;
        	var param = {};

        	// 전용여부 YN_DIVERT : 변경예산(Y) / 추가예산(N)
        	var YN_DIVERT = this.dsList.getColumn(rowMst, "YN_DIVERT");
        	if(YN_DIVERT == "N") return;

        	param.SEQ_MST = this.dsList.getColumn(rowMst, "SEQ_MST");
        	param.SEQ_DTL = seqDtl;
        	param.TY_GUBUN = tyGubun;
        	param.GR_SEARCH = this.FormInfo.GR_SEARCH;
        	//param.ID_USER = this.dsSearch.getColumn(0, "ID_SABUN");
        	param.ID_USER = this.AuthClient.ID_USER;
        	param.YN_READONLY = "N";	// 전자결재 상세 조회시 Y값

        	this.gfnFormOpen("DHQ", "DIQ_BUDGETTOBUDGET", "fnPopupCallback", param, "1210", "790");
        }

        // 예산추가
        this.fnAddBudgetPop = function(seqDtl){
        	var row = this.dsList.rowposition;
        	var param = {};

        	// 전용여부 YN_DIVERT : 변경예산(Y) / 추가예산(N)
        	var YN_DIVERT = this.dsList.getColumn(row, "YN_DIVERT");
        	if(YN_DIVERT == "Y") return;

        	param.SEQ_MST = this.dsList.getColumn(row, "SEQ_MST");
        	param.YR_BUDGET = this.dsList.getColumn(row, "YR_BUDGET");
        	param.CD_DEPT = this.dsList.getColumn(row, "CD_DEPT");
        	param.DS_DEPT = this.dsList.getColumn(row, "DS_DEPT");
        	param.CD_COST = this.dsList.getColumn(row, "CD_COST");
        	param.DS_TITLE = this.dsList.getColumn(row, "DS_TITLE");
        	param.YN_READONLY = "N";	// 전자결재 상세 조회시 Y값

        	param.GR_SEARCH = this.FormInfo.GR_SEARCH;
        	//param.ID_USER = this.dsSearch.getColumn(0, "ID_SABUN");
        	param.ID_USER = this.AuthClient.ID_USER;

        	param.SEQ_DTL = seqDtl;
        	param.TY_GUBUN = "3";

        	this.gfnFormOpen("DHQ", "DIQ_ADDITION", "fnPopupCallback", param, "1210", "490");
        }

        this.fnPopupCallback = function(svcID, val) {
        // 	if (svcID.indexOf("DIQ_BUDGETTOBUDGET") > -1) {
         		if (val) {
         			this.FormBtns.Select.click();
         		}
        // 	}
        }

        //추가엑셀업로드
        this.fnExcelU = function(obj, e){
        	var rowMst = this.dsList.rowposition;
        	var SEQ_MST = this.dsList.getColumn(rowMst, "SEQ_MST");
        	var YN_DIVERT = this.dsList.getColumn(rowMst, "YN_DIVERT");

        	if(this.gfnIsNull(SEQ_MST)) return;
        	/*
        		AP_STATUS : 전자결재 상태 (A11)
        		00	결재전	01	임시저장	02	결재중
        		04	반려	05	결재완료	06	상신취소
        	*/
        // 	var AP_STATUS = this.dsList.getColumn(this.dsList.rowposition, "AP_STATUS");
        // 	if(AP_STATUS == "02" || AP_STATUS == "05"){
        // 		this.gfnAlert("결재중/결재완료 데이터는 입력이 불가능합니다.");
        // 		return false;
        // 	}

        	// 전자결재상태 ST_APRV 공통코드 DZ - DZ_APRV
        	// 1임시저장	2결재상신	3결재중	4결재완료	5반려	6상신취소	7작성취소
        	var ST_APRV = this.dsList.getColumn(this.dsList.rowposition, "ST_APRV");
        	if(ST_APRV == "1" || ST_APRV == "2" || ST_APRV == "3" || ST_APRV == "4"){
        		this.gfnAlert("결재상신/결재중/결재완료 데이터는 입력이 불가능합니다.");
        		return false;
        	}

        	var param = {};
        	param.YR_BUDGET = this.dsSearch.getColumn(0, "YR_BUDGET");
        	param.SEQ_MST = this.dsList.getColumn(rowMst, "SEQ_MST");
        	param.CD_DEPT = this.dsList.getColumn(rowMst, "CD_DEPT");

        	if(YN_DIVERT == "N") {
        		this.gfnFormOpen("DHQ", "DIQ_DIVERT_MASTER_EXCEL", "fnPopupCallback", param);
        	}else{
        		this.gfnAlert("전용예산 데이터는 입력이 불가능합니다.");
        	}
        }

        /************************************************************************
         * 전자결재
         ************************************************************************/
         // 결재상신 버튼
        this.fnAprv = function(obj, e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) return;
        	var chkRow = this.dsList.findRow("CHK","1");
        	if(chkRow < 0){
        		this.gfnAlert("선택된 행이 없습니다.");
        		return false;
        	}
        	var YN_DIVERT = this.dsList.getColumn(chkRow, "YN_DIVERT");
        	var YR_BUDGET = this.dsList.getColumn(chkRow, "YR_BUDGET");
        	var SEQ_MST = this.dsList.getColumn(chkRow, "SEQ_MST");
        	var CD_CORP = this.dsList.getColumn(chkRow, "CD_CORP");


        	// 전용여부 YN_DIVERT : 변경예산(Y) / 추가예산(N)
        	var YN_DIVERT = this.dsList.getColumn(chkRow, "YN_DIVERT");
        	var TI_DOC_TXT = (YN_DIVERT == "Y") ? "예산 전용" : "예산 추가";
        	TI_DOC_TXT = TI_DOC_TXT + " 결재 (" + SEQ_MST + ")";

        	this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        		if (isOk == false) {
        			return;
        		}

        		var initParam = {
        			CD_CORP: CD_CORP,
        			ID_AP_TYPE: "DIQ01",
        			TY_WRK: "APRV",
        			ID_APRV: this.AuthClient.ID_SABUN,
        			TT_DOC: TI_DOC_TXT,
        			//TT_DOC: "예산변경 결재 (" + YR_BUDGET + "-" + SEQ_MST + ")",
        			CD_CORP_SUFFIX : this.gfnGetConfig("DZ" , "CD_CORP_SUFFIX"),
        		}
        		this.gfnAprv(initParam, "fnAprvCallback", "APRV");
        	});

        }

        // 결재문서조회 버튼
        this.fnAprvDocQ = function(obj, e) {
        	var cd_corp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	var no_aprv = this.dsList.getColumn(this.dsList.rowposition, "NO_APRV");
        	var no_doc = this.dsList.getColumn(this.dsList.rowposition, "NO_DOC");
        	if(this.gfnIsNull(no_aprv) || this.gfnIsNull(no_doc)){
        		return;
        	}

        	var oParams = {
        		CD_CORP: cd_corp,
        		NO_APRV: no_aprv,
        	}
        	this.gfnAprvDoc(oParams, this.fnAprvDocQCallback);
        }

        this.fnAprvDocQCallback = function() {
        	console.log('fnAprvDocQCallback');
        	//alert('fnAprvDocQCallback');
        }

        // 결재상태초기화 버튼
        this.fnAprvInit = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;
        	var chkRow = this.dsList.findRow("CHK","1");
        	if(chkRow < 0){
        		this.gfnAlert("선택된 행이 없습니다.");
        		return false;
        	}

        	//this.gfnConfirm(this.fnAprvMsg(obj), "fnAprvCallback", "APRVINIT");
        	this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        		if (isOk == false) {
        			return;
        		}
        		this.fnAprvCallback("APRVINIT", isOk);
        	});
        }

        this.fnAprvMsg = function(obj) {
        	var chkRow = this.dsList.findRow("CHK","1");
        	var YN_DIVERT = this.dsList.getColumn(chkRow, "YN_DIVERT");
        	var YR_BUDGET = this.dsList.getColumn(chkRow, "YR_BUDGET");
        	var SEQ_MST = this.dsList.getColumn(chkRow, "SEQ_MST");

        	var msg = YR_BUDGET + "년 (" + SEQ_MST + ") \n";
        	msg += "예산변경에 대하여 " + obj.text + " 하시겠습니까?";

        	return msg;
        }

        // 결재상신 버튼 콜백
        // 결재상태초기화 버튼 콜백
        this.fnAprvCallback = function(strId, val) {
        	var chkRow = this.dsList.findRow("CHK","1");
        	var YR_BUDGET = this.dsList.getColumn(chkRow, "YR_BUDGET");
        	var SEQ_MST = this.dsList.getColumn(chkRow, "SEQ_MST");

        	this.dsApproval.clearData();
        	this.dsApproval.addRow();

        	this.dsApproval.setColumn(0, "TY_WRK",  strId);
        	this.dsApproval.setColumn(0, "YR_BUDGET",  YR_BUDGET);
        	this.dsApproval.setColumn(0, "SEQ_MST",  SEQ_MST);
        	this.dsApproval.setColumn(0, "ID_APRV", this.AuthClient.ID_SABUN);
        	if (strId == "APRV") {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsAprvOut.getColumn(0, "NO_APRV"));
        	} else {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsList.getColumn(chkRow, "NO_APRV"));
        	}

        	var strSvcId    = strId;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "aprv_execute=dsApproval";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "TY_ISSUE"){
        		if(e.newvalue != e.oldvalue){
        		}
        	}
        };

        /*
         *	splitter
         */
        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        // 전자결재상신 버튼 (사용안함)
        this.fnAPP = function(obj,e) {
        	var oldYN_DIVERT = "";
        	var cnt = 1;
        	var excel = "";

        	if(!this.fnAppValidate()) return false;

        	/*for(var i=0; i < this.dsList.rowcount; i++){
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			var AP_STATUS = this.dsList.getColumn(this.dsList.rowposition, "AP_STATUS");
        			if(AP_STATUS == "01" || AP_STATUS == "02" || AP_STATUS == "05"){
        				this.gfnAlert("임시저장/결재중/결재완료 데이터는 상신할 수 없습니다.");
        				return false;
        			}
        		}
        	}*/


        	for(var i=0; i < this.dsList.rowcount; i++){

        		var chkRow = this.dsList.findRow("CHK","1");
        		if(chkRow < 0){
        			this.gfnAlert("선택된 행이 없습니다.");
        			return false;
        		}

        		if(this.dsList.getColumn(i, "CHK") == "1"){

                 /* if(cnt == 1){
        				oldYN_DIVERT = this.dsList.getColumn(i,"YN_DIVERT");
        			}
        			var newYN_DIVERT = this.dsList.getColumn(i, "YN_DIVERT");

        			if(oldYN_DIVERT != newYN_DIVERT ){
        				this.gfnAlert("전용여부가 다른 경우 함께 상신할 수 없습니다.");
        				return false;

        			}

        			if(cnt == 1){
        				excel = this.dsList.getColumn(i, "YN_EXCEL");
        			}
        			var new_excel = this.dsList.getColumn(i, "YN_EXCEL");

        			if(excel != new_excel) {
        				this.gfnAlert("엑셀업로드 값이 같은 항목만 함께 상신할 수 있습니다.");
        				return false;
        			} */


        			/*
        				AP_STATUS : 전자결재 상태 (A11)
        				00	결재전	01	임시저장	02	결재중
        				04	반려	05	결재완료	06	상신취소
        			*/

        			var AP_STATUS = this.dsList.getColumn(i, "AP_STATUS");
        			if(AP_STATUS == "01" || AP_STATUS == "02" || AP_STATUS == "05"){
        				this.gfnAlert("임시저장/결재중/결재완료 데이터는 상신할 수 없습니다.");
        				return false;
        			}

        			//cnt = cnt + 1;
        		}
        	}

        	var YN_DIVERT = this.dsList.getColumn(this.dsList.rowposition, "YN_DIVERT");
        	if(YN_DIVERT == "Y"){

        		var msg = "전자결재(전용)을 진행하시겠습니까?";
        		this.gfnConfirm(msg, "fnApp_callback", "");
        	}else {

        		var msg = "전자결재(추가)를 진행하시겠습니까?";
        		this.gfnConfirm(msg, "fnApp_callback2", "");
        	}
        }

        this.fnApp_callback = function(strId, val)
        {

        	if(val == true)
        	{
        		var yr_budget = "";
        		var seq_mst   = "";


        			for(var i=0;i < this.dsList.rowcount;i++){
        				if(this.dsList.getColumn(i, "CHK") == "1"){
        					if(seq_mst != ""){
        						seq_mst += ",";
        					}
        					seq_mst += this.dsList.getColumn(i, "SEQ_MST");
        					yr_budget = this.dsList.getColumn(i, "YR_BUDGET");
        				}
        			}

        					this.dsAppParam.clearData();
        					var nrow = this.dsAppParam.addRow();

        					this.dsAppParam.setColumn(nrow, "YR_BUDGET", this.dsList.getColumn(i, "YR_BUDGET"));
        					this.dsAppParam.setColumn(nrow, "SEQ_MST", this.dsList.getColumn(i, "SEQ_MST"));

        					if (this.dsAppParam.rowcount == 0) return;

        					var strSvcId    = "appChk";
        					var strSvcType  = "save";
        					var inProc		= "_dsProc";
        					var inData      = "appChk=dsAppParam";
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
        }

        this.fnAppSelect = function()
        {

        	var url = this.gfnGetServerUrl();

        	trace("주소:"+url);

        	if(url == "http://localhost:8080")
        	{
        		url += "/erp";
        	}

        	var yr_budget = "";
        	var seq_mst   = "";

        			for(var i=0;i < this.dsList.rowcount;i++){
        				if(this.dsList.getColumn(i, "CHK") == "1"){
        					if(seq_mst != ""){
        						seq_mst += ",";
        					}
        					seq_mst += this.dsList.getColumn(i, "SEQ_MST");
        					yr_budget = this.dsList.getColumn(i, "YR_BUDGET");
        				}
        			}

        			this.dsAppParam.clearData();
        			var nrow = this.dsAppParam.addRow();

        			this.dsAppParam.setColumn(nrow, "YR_BUDGET", yr_budget);
        			this.dsAppParam.setColumn(nrow, "SEQ_MST", seq_mst);
        			this.dsAppParam.setColumn(nrow, "URL", url);
        			//this.dsAppParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			//this.dsAppParam.setColumn(nrow, "ID_USER",  this.getOwnerFrame().ID_USER);

        			if (this.dsAppParam.rowcount == 0) return;

        			var strSvcId    = "appSelect";
        			var strSvcType  = "select";
        			var inProc		= "_dsProc";
        			var inData      = "appSelect=dsAppParam";
        			var outData     = "dsAppList=appSelect0";
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

        this.fnAppOpen = function()
        {

        	if(this.dsAppList.rowcount > 0)
        	{
        		var sDEPT_ACNT = this.dsAppList.getColumn(0, "DEPT_ACNT");
        		var sYR_BUDGET = this.dsAppParam.getColumn(0, "YR_BUDGET");
        		var sSEQ_MST = this.dsAppParam.getColumn(0, "SEQ_MST");


        		var sApType = "";
        		var sTitle = "";
        		var sRef03 = "";

        		sApType = "DI01";
        		sTitle = sDEPT_ACNT+" 예산전용 신청서"
        		sRef03 = "DI";


        		var sRef01  = sYR_BUDGET;
        		var sRef02  = sSEQ_MST;
        		var sRef04  = "";
        		var oParam  = this.gfnDataSetToJson(this.dsAppList, this.dsAppList.rowposition)

        		this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, sRef04, oParam, "fnAprvDialogCallback");

        	}
        }

        this.fnApp_callback2 = function(strId, val) {

        	if(val == true) {
        		for(var i =0; i < this.dsList.rowcount; i++){
        			if(this.dsList.getColumn(i , "CHK") == "1"){
        				this.dsAppParam.clearData();
        				var nrow = this.dsAppParam.addRow();

        				this.dsAppParam.setColumn(nrow, "YR_BUDGET", this.dsList.getColumn(i, "YR_BUDGET"));
        				this.dsAppParam.setColumn(nrow, "SEQ_MST", this.dsList.getColumn(i, "SEQ_MST"));

        				if (this.dsAppParam.rowcount == 0) return;

        				var strSvcId    = "appChk2";
        				var strSvcType  = "save";
        				var inProc		= "_dsProc";
        				var inData      = "appChk2=dsAppParam";
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

        		}
        	}
        }

        this.fnAppSelect2 = function(){

        	var url = this.gfnGetServerUrl();

        	if(url == "http://localhost:8080")
        	{
        		url += "/erp";
        	}

        	var yr_budget = "";
        	var seq_mst   = "";

        			for(var i=0; i < this.dsList.rowcount; i++){
        				if(this.dsList.getColumn(i, "CHK") == "1"){
        					if(seq_mst != ""){
        						seq_mst += ",";
        					}
        					seq_mst += this.dsList.getColumn(i, "SEQ_MST");
        					yr_budget = this.dsList.getColumn(i, "YR_BUDGET");
        				}
        			}

        			this.dsAppParam.clearData();
        			var nrow = this.dsAppParam.addRow();

        			this.dsAppParam.setColumn(nrow, "YR_BUDGET", yr_budget);
        			this.dsAppParam.setColumn(nrow, "SEQ_MST", seq_mst);
        			this.dsAppParam.setColumn(nrow, "URL", url);

        			if (this.dsAppParam.rowcount == 0) return;

        			var strSvcId    = "appSelect2";
        			var strSvcType  = "select";
        			var inProc		= "_dsProc";
        			var inData      = "appSelect2=dsAppParam";
        			var outData     = "dsAppList2=appSelect20";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcType , 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc); // 통신방법 정의 [생략가능]


        	trace(this.dsAppList2.saveXML());
        }

        this.fnAppOpen2 = function(){

        	if(this.dsAppList2.rowcount > 0) {
        		var sDS_DEPT_ACNT = this.dsAppList2.getColumn(0, "DS_DEPT_ACNT");
        		var sYR_BUDGET = this.dsAppList2.getColumn(0, "YR_BUDGET");
        		var sSEQ_MST = this.dsAppList2.getColumn(0, "SEQ_MST");

        		var sApType = "";
        		var sTitle = "";
        		var sRef03 = "";

        		sApType = "DI02";
        		sTitle = sDS_DEPT_ACNT + "예산변경신청서";
        		sRef03 = "DI";

        		var sRef01  = sYR_BUDGET;
        		var sRef02  = sSEQ_MST;
        		var sRef04  = "";
        		var oParam  = this.gfnDataSetToJson(this.dsAppList2, this.dsAppList2.rowposition)

        		this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, sRef04, oParam, "fnAprvDialogCallback");
        	}
        }

        this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataBottom.form.objGridSub.addEventHandler("oncelldblclick",this.divData_divDataRight_objGridSub_oncelldblclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsListDtl.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsAppList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsAppList2.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DIQ_DIVERT_MASTER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
