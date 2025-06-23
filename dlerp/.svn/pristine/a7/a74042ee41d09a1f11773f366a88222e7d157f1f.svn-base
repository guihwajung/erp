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
            this.set_titletext("리스임대주택 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_LEASE_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DHAPR_LEASE_SELECT</Col></Row><Row><Col id=\"SP\">DHAPR_LEASE_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"SP\">DHAPR_LEASE_UPDATE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"SP\">DHAPR_LEASE_DELETE</Col><Col id=\"TARGET\">delete</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHAPR_LEASE_CREATE</Col></Row><Row><Col id=\"TARGET\">calc</Col><Col id=\"SP\">DHAPR_LEASE_CALC</Col></Row><Row><Col id=\"TARGET\">issueSlipSale</Col><Col id=\"SP\">DHAPR_LEASE_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlipSale</Col><Col id=\"SP\">DHAPR_LEASE_CANCELSLIP</Col></Row><Row><Col id=\"TARGET\">issueSlipCalc</Col><Col id=\"SP\">DHAPR_LEASE_CALC_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlipCalc</Col><Col id=\"SP\">DHAPR_LEASE_CALC_CANCELSLIP</Col></Row><Row><Col id=\"TARGET\">selectSale</Col><Col id=\"SP\">DHAPR_DL_AMSALE_SELECT</Col></Row><Row><Col id=\"TARGET\">calcCancel</Col><Col id=\"SP\">DHAPR_LEASE_CALC_CALCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSale", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDEPT","ctclDT_WORK:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfDEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사업지");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCORP","sta01:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("주택");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("토지");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfDEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_WORK.form.TextBox","value","dsSearch","DT_WORK");
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
        this.registerScript("DHA_LEASE.xfdl", function() {
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

        	this.ccfCORP.setFocus();
        	//작업년월(현재월)
        	this.ctclDT_WORK.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        	//법인코드 세션에 코드로 셋팅
        	this.ccfCORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDataCreate = this.gfnFormButtonAdd("DataCreate", "fnProcCall"); 	//자료생성 버튼
        	this.btnDataCalc   = this.gfnFormButtonAdd("DataCalc", "fnProcCall"); 		//감가상각 버튼
        	this.btnCalcCancel 	= this.gfnFormButtonAdd("CalcCancel", "fnCalcCancel"); 		//감가상각취소 버튼
        	this.btnIssueSlipSale  = this.gfnFormButtonAdd("IssueSlipSale", "fnIssueSlip"); 	//매출 전표발행
        	this.btnCancelSlipSale = this.gfnFormButtonAdd("CancelSlipSale", "fnCancelSlip"); 	//매출 전표취소

        	this.btnIssueSlipCalc  = this.gfnFormButtonAdd("IssueSlipCalc", "fnIssueSlip"); 	//감가 전표발행
        	this.btnCancelSlipCalc = this.gfnFormButtonAdd("CancelSlipCalc", "fnCancelSlip"); 	//감가 전표취소
        	this.btnSearchSlip     = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 		//전표조회
        	this.btnSearchSale 	   = this.gfnFormButtonAdd("SearchSale", "fnSearchSale"); 		//매출조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.tabData.tab1.form.objGrid;
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;
        	this.ccfCORP = this.divSearch.form.ccfCORP;
        	this.ccfDEPT = this.divSearch.form.ccfDEPT;
        	this.ctclDT_WORK = this.divSearch.form.ctclDT_WORK;

        	this.vProcType = "CREATE";
        	this.vSlipType = "SALE";
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDEPT.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfDEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_LEASE_BUIDING");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DH", "DHA_LEASE_LAND");

        	//변경전 이벤트
        	this.dsList.addEventHandler("cancolumnchange", this.dsList_CanColumnChange, this);
        	this.dsList2.addEventHandler("cancolumnchange", this.dsList_CanColumnChange, this);

        	//번경후 이벤트
        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);
        	this.dsList2.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);

        	//그리드 코드파인더 이벤트
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid2.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("DT_WORK", "string");
        	this.dsSelect.addColumn("TY_TYPE", "string");

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("CD_CORP", "string");
        	this.dsSelect2.addColumn("CD_DEPT", "string");
        	this.dsSelect2.addColumn("DT_WORK", "string");
        	this.dsSelect2.addColumn("TY_TYPE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("DT_WORK", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("TY_TYPE", "string");
        	this.dsInsert.addColumn("NO_SIZE", "string");
        	this.dsInsert.addColumn("NO_HOUSE", "BIGDECIMAL");
        	this.dsInsert.addColumn("YM_COMPLETION", "BIGDECIMAL");
        	this.dsInsert.addColumn("YR_LIFE", "BIGDECIMAL");
        	this.dsInsert.addColumn("RT_DEP", "float");
        	this.dsInsert.addColumn("AM_DEC_BAL", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_DEC_SUM", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_BASE", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_MI_BAL", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_BL", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_HOUSE_DEC_SUM", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_HOUSE_EVA", "BIGDECIMAL");
        	this.dsInsert.addColumn("NO_SALES_HOUSE", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_SALES_BL", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_SALES_DEC_SUM", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_SALES_EVA", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_UP", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_DOWN", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_SUM", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_UP_REPAY", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_DOWN_REPAY", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_SUM_REPAY", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_MI_REPAY", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_SALE", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_OPTION", "BIGDECIMAL");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("DT_WORK", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("TY_TYPE", "string");
        	this.dsUpdate.addColumn("NO_SIZE", "string");
        	this.dsUpdate.addColumn("NO_HOUSE", "BIGDECIMAL");
        	this.dsUpdate.addColumn("YM_COMPLETION", "BIGDECIMAL");
        	this.dsUpdate.addColumn("YR_LIFE", "BIGDECIMAL");
        	this.dsUpdate.addColumn("RT_DEP", "float");
        	this.dsUpdate.addColumn("AM_DEC_BAL", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_DEC_SUM", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_BASE", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_MI_BAL", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_BL", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_HOUSE_DEC_SUM", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_HOUSE_EVA", "BIGDECIMAL");
        	this.dsUpdate.addColumn("NO_SALES_HOUSE", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_SALES_BL", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_SALES_DEC_SUM", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_SALES_EVA", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_UP", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_DOWN", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_SUM", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_UP_REPAY", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_DOWN_REPAY", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_SUM_REPAY", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_MI_REPAY", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_SALE", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_OPTION", "BIGDECIMAL");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("DT_WORK", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("CD_DEPT", "string");
        	this.dsDelete.addColumn("TY_TYPE", "string");
        	this.dsDelete.addColumn("NO_SIZE", "string");

        	this.dsPrcCall = new Dataset();
        	this.dsPrcCall.addColumn("YM_WORK", "string");
        	this.dsPrcCall.addColumn("CD_CORP", "string");
        	this.dsPrcCall.addColumn("ID_USER", "string");

        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");			//법인코드
        	this.dsIssueSlip.addColumn("CD_DEPT", "string");			//현장코드
        	this.dsIssueSlip.addColumn("DT_WORK", "string");			//작업년월
        	this.dsIssueSlip.addColumn("CD_SITE_BH", "string");			//발행부서
        	this.dsIssueSlip.addColumn("ID_TRANS", "string");			//사용자 아이디

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_DEPT", "string");			//현장코드
        	this.dsCancelSlip.addColumn("DT_WORK", "string");			//작업년월
        	this.dsCancelSlip.addColumn("CD_CORP", "string");			//법인코드

        	this.dsSelectSale = new Dataset();

        	this.dsSelectSale.addColumn("CD_CORP" , "string");		//법인코드
        	this.dsSelectSale.addColumn("CD_ACNTUNIT" , "string");	//사업지
        	this.dsSelectSale.addColumn("DT_WORK" , "string");		//작업년월
        	this.dsSelectSale.addColumn("TY_GUBUN", "string");		//조회구분(1:완성주택, 2:건물, 3:리스, 4:임대)
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	var strSvcId    = "";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			this.gfnGridBeforeSelect(this.dxGrid);

        			this.dsSelect.clearData();
        			this.dsSelect.addRow();
        			this.dsSelect.setColumn(0, "TY_TYPE"	, "B");
        			this.dsSelect.setColumn(0, "CD_CORP"	, this.ccfCORP.form.CDTextBox.text);
        			this.dsSelect.setColumn(0, "CD_DEPT"	, this.ccfDEPT.form.CDTextBox.text);
        			this.dsSelect.setColumn(0, "DT_WORK"	, this.ctclDT_WORK.form.TextBox.value);

        			strSvcId    = "select";
        			inData      = "select=dsSelect";
        			outData     = "dsList=select0";

        			break;
        		case 1:
        			this.gfnGridBeforeSelect(this.dxGrid2);

        			this.dsSelect2.clearData();
        			this.dsSelect2.addRow();
        			this.dsSelect2.setColumn(0, "TY_TYPE"	, "L");
        			this.dsSelect2.setColumn(0, "CD_CORP"	, this.ccfCORP.form.CDTextBox.text);
        			this.dsSelect2.setColumn(0, "CD_DEPT"	, this.ccfDEPT.form.CDTextBox.text);
        			this.dsSelect2.setColumn(0, "DT_WORK"	, this.ctclDT_WORK.form.TextBox.value);

        			strSvcId    = "select";
        			inData      = "select2=dsSelect2";
        			outData     = "dsList2=select20";

        			break;
        	}

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
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
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        			break;
        		case 1:
        			var nrow = this.gfnGridAdd(this.dxGrid2); // top (default), bottom, current
        			break;
        	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			if(!this.gfnGridIsRow(this.dxGrid)) return;

        			//전표발행된 데이터면 행삭제 불가
        			if(!this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))) || !this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE_R")))){
        				this.gfnAlert("전표발행된 데이터는 삭제할수 없습니다.");
        				return;
        			}

        			this.gfnGridDel(this.dxGrid);
        			break;
        		case 1:
        			if(!this.gfnGridIsRow(this.dxGrid2)) return;

        			//전표발행된 데이터면 행삭제 불가
        			if(!this.gfnIsNull(this.gfnTrim(this.dsList2.getColumn(this.dsList2.rowposition, "CD_TRADE")))){
        				this.gfnAlert("전표발행된 데이터는 삭제할수 없습니다.");
        				return;
        			}

        			this.gfnGridDel(this.dxGrid2);
        			break;
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	var objDs;
        	var ty_type;
        	var objGrid;
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			this.dxGrid.updateToDataset();
        			objDs = this.dsList;
        			ty_type = "B";
        			objGrid = this.dxGrid;
        			break;
        		case 1:
        			this.dxGrid2.updateToDataset();
        			objDs = this.dsList2;
        			ty_type = "L";
        			objGrid = this.dxGrid2;
        			break;
        	}

        	if (!this.gfnGridValidate(objGrid)) return;

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < objDs.rowcount; i++) {
        		var flag = this.gfnGetFlag(objDs, i);

        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CORP"			, this.ccfCORP.form.CDTextBox.value);    	//법인코드
        				this.dsInsert.setColumn(nrow, "DT_WORK"			, this.ctclDT_WORK.form.TextBox.value);		//작업년월
        				this.dsInsert.setColumn(nrow, "CD_DEPT"			, objDs.getColumn(i, "CD_DEPT"));			//사업지코드
        				this.dsInsert.setColumn(nrow, "TY_TYPE"			, ty_type);         						//주택(B)/토지구분(L)
        				this.dsInsert.setColumn(nrow, "NO_SIZE"			, objDs.getColumn(i, "NO_SIZE"));  			//평형
        				this.dsInsert.setColumn(nrow, "NO_HOUSE"		, objDs.getColumn(i, "NO_HOUSE"));  		//세대수
        				this.dsInsert.setColumn(nrow, "YM_COMPLETION"	, objDs.getColumn(i, "YM_COMPLETION"));  	//준공일자
        				this.dsInsert.setColumn(nrow, "YR_LIFE"			, objDs.getColumn(i, "YR_LIFE"));  			//내용년수
        				this.dsInsert.setColumn(nrow, "RT_DEP"			, objDs.getColumn(i, "RT_DEP"));  			//상각율
        				this.dsInsert.setColumn(nrow, "AM_DEC_BAL"		, objDs.getColumn(i, "AM_DEC_BAL"));  		//전기말미상가잔액
        				this.dsInsert.setColumn(nrow, "AM_DEC_SUM"		, objDs.getColumn(i, "AM_DEC_SUM"));  		//전기말상각누계액
        				this.dsInsert.setColumn(nrow, "AM_BASE"			, objDs.getColumn(i, "AM_BASE"));  			//기초잔액
        				this.dsInsert.setColumn(nrow, "AM_UP"			, objDs.getColumn(i, "AM_UP"));  			//당기증가
        				this.dsInsert.setColumn(nrow, "AM_DOWN"			, objDs.getColumn(i, "AM_DOWN"));  			//당기감소
        				this.dsInsert.setColumn(nrow, "AM_SUM"			, objDs.getColumn(i, "AM_SUM"));  			//기말잔액
        				this.dsInsert.setColumn(nrow, "AM_UP_REPAY"		, objDs.getColumn(i, "AM_UP_REPAY"));  		//당기상각액(감가상각누계액)
        				this.dsInsert.setColumn(nrow, "AM_DOWN_REPAY"	, objDs.getColumn(i, "AM_DOWN_REPAY"));  	//당기감소(감가상각누계액)
        				this.dsInsert.setColumn(nrow, "AM_SUM_REPAY"	, objDs.getColumn(i, "AM_SUM_REPAY"));  	//상각누계액(감가상각누계액)
        				this.dsInsert.setColumn(nrow, "AM_MI_REPAY"		, objDs.getColumn(i, "AM_MI_REPAY"));  		//당기말미상각잔액(감가상각누계액)
        				this.dsInsert.setColumn(nrow, "AM_MI_BAL"		, objDs.getColumn(i, "AM_MI_BAL"));  		//미안식액
        				this.dsInsert.setColumn(nrow, "AM_BL"			, objDs.getColumn(i, "AM_BL"));  			//건물
        				this.dsInsert.setColumn(nrow, "AM_HOUSE_DEC_SUM", objDs.getColumn(i, "AM_HOUSE_DEC_SUM"));  //상각누계액
        				this.dsInsert.setColumn(nrow, "AM_HOUSE_EVA"	, objDs.getColumn(i, "AM_HOUSE_EVA"));  	//평가차익
        				this.dsInsert.setColumn(nrow, "NO_SALES_HOUSE"	, objDs.getColumn(i, "NO_SALES_HOUSE")); 	//세대수(분양)
        				this.dsInsert.setColumn(nrow, "AM_SALES_BL"		, objDs.getColumn(i, "AM_SALES_BL")); 		//건물(분양)
        				this.dsInsert.setColumn(nrow, "AM_SALES_DEC_SUM", objDs.getColumn(i, "AM_SALES_DEC_SUM")); 	//상가누계액(분양)
        				this.dsInsert.setColumn(nrow, "AM_SALES_EVA"	, objDs.getColumn(i, "AM_SALES_EVA")); 		//평가차익(분양)
        				this.dsInsert.setColumn(nrow, "AM_SALE"			, objDs.getColumn(i, "AM_SALE")); 			//매출액
        				this.dsInsert.setColumn(nrow, "AM_OPTION"		, objDs.getColumn(i, "AM_OPTION")); 		//옵션매출액
        				this.dsInsert.setColumn(nrow, "ID_USER"			, this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP"			, objDs.getColumn(i, "CD_CORP"));   		//법인코드
        				this.dsUpdate.setColumn(nrow, "DT_WORK"			, objDs.getColumn(i, "DT_WORK"));  			//작업년월
        				this.dsUpdate.setColumn(nrow, "CD_DEPT"			, objDs.getColumn(i, "CD_DEPT"));			//사업지코드
        				this.dsUpdate.setColumn(nrow, "TY_TYPE"			, ty_type);         						//주택(B)/토지구분(L)
        				this.dsUpdate.setColumn(nrow, "NO_SIZE"			, objDs.getColumn(i, "NO_SIZE"));  			//평형
        				this.dsUpdate.setColumn(nrow, "NO_HOUSE"		, objDs.getColumn(i, "NO_HOUSE"));  		//세대수
        				this.dsUpdate.setColumn(nrow, "YM_COMPLETION"	, objDs.getColumn(i, "YM_COMPLETION"));  	//준공일자
        				this.dsUpdate.setColumn(nrow, "YR_LIFE"			, objDs.getColumn(i, "YR_LIFE"));  			//내용년수
        				this.dsUpdate.setColumn(nrow, "RT_DEP"			, objDs.getColumn(i, "RT_DEP"));  			//상각율
        				this.dsUpdate.setColumn(nrow, "AM_DEC_BAL"		, objDs.getColumn(i, "AM_DEC_BAL"));  		//전기말미상가잔액
        				this.dsUpdate.setColumn(nrow, "AM_DEC_SUM"		, objDs.getColumn(i, "AM_DEC_SUM"));  		//전기말상각누계액
        				this.dsUpdate.setColumn(nrow, "AM_BASE"			, objDs.getColumn(i, "AM_BASE"));  			//기초잔액
        				this.dsUpdate.setColumn(nrow, "AM_UP"			, objDs.getColumn(i, "AM_UP"));  			//당기증가
        				this.dsUpdate.setColumn(nrow, "AM_DOWN"			, objDs.getColumn(i, "AM_DOWN"));  			//당기감소
        				this.dsUpdate.setColumn(nrow, "AM_SUM"			, objDs.getColumn(i, "AM_SUM"));  			//기말잔액
        				this.dsUpdate.setColumn(nrow, "AM_UP_REPAY"		, objDs.getColumn(i, "AM_UP_REPAY"));  		//당기상각액(감가상각누계액)
        				this.dsUpdate.setColumn(nrow, "AM_DOWN_REPAY"	, objDs.getColumn(i, "AM_DOWN_REPAY"));  	//당기감소(감가상각누계액)
        				this.dsUpdate.setColumn(nrow, "AM_SUM_REPAY"	, objDs.getColumn(i, "AM_SUM_REPAY"));  	//상각누계액(감가상각누계액)
        				this.dsUpdate.setColumn(nrow, "AM_MI_REPAY"		, objDs.getColumn(i, "AM_MI_REPAY"));  		//당기말미상각잔액(감가상각누계액)
        				this.dsUpdate.setColumn(nrow, "AM_MI_BAL"		, objDs.getColumn(i, "AM_MI_BAL"));  		//미안식액
        				this.dsUpdate.setColumn(nrow, "AM_BL"			, objDs.getColumn(i, "AM_BL"));  			//건물
        				this.dsUpdate.setColumn(nrow, "AM_HOUSE_DEC_SUM", objDs.getColumn(i, "AM_HOUSE_DEC_SUM"));  //상각누계액
        				this.dsUpdate.setColumn(nrow, "AM_HOUSE_EVA"	, objDs.getColumn(i, "AM_HOUSE_EVA"));  	//평가차익
        				this.dsUpdate.setColumn(nrow, "NO_SALES_HOUSE"	, objDs.getColumn(i, "NO_SALES_HOUSE")); 	//세대수(분양)
        				this.dsUpdate.setColumn(nrow, "AM_SALES_BL"		, objDs.getColumn(i, "AM_SALES_BL")); 		//건물(분양)
        				this.dsUpdate.setColumn(nrow, "AM_SALES_DEC_SUM", objDs.getColumn(i, "AM_SALES_DEC_SUM")); 	//상가누계액(분양)
        				this.dsUpdate.setColumn(nrow, "AM_SALES_EVA"	, objDs.getColumn(i, "AM_SALES_EVA")); 		//평가차익(분양)
        				this.dsUpdate.setColumn(nrow, "AM_SALE"			, objDs.getColumn(i, "AM_SALE")); 			//매출액
        				this.dsUpdate.setColumn(nrow, "AM_OPTION"		, objDs.getColumn(i, "AM_OPTION")); 		//옵션매출액
        				this.dsUpdate.setColumn(nrow, "ID_USER"			, this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP", objDs.getColumn(i, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "DT_WORK", objDs.getColumn(i, "DT_WORK"));
        				this.dsDelete.setColumn(nrow, "CD_DEPT", objDs.getColumn(i, "CD_DEPT"));
        				this.dsDelete.setColumn(nrow, "NO_SIZE", objDs.getColumn(i, "NO_SIZE"));
        				this.dsDelete.setColumn(nrow, "TY_TYPE", ty_type);

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
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			this.gfnExcelExport(this.dxGrid);
        			break;
        		case 1:
        			this.gfnExcelExport(this.dxGrid2);
        			break;
        	}
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
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.ccfCORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCORP.form.CDTextBox.setFocus();
        		validate = false;
        	}

        	if (this.gfnIsNull(this.ctclDT_WORK.form.TextBox.value)) {
        		this.gfnAlert("작업년월이 입력되지 않았습니다.");
        		this.ctclDT_WORK.form.TextBox.setFocus();
        		validate = false;
        	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {

        	if (svcID == "select") {
        		var tabIdx = this.divData.form.tabData.tabindex;
        		var objDs, objGrid;
        		switch(tabIdx) {
        			case 0:
        				objDs = this.dsList;
        				objGrid = this.dxGrid;
        				break;
        			case 1:
        				objDs = this.dsList2;
        				objGrid = this.dxGrid2;
        				break;
        		}

        		//버튼 처리
        		this.fnBtnEnable(objDs);

        		this.gfnGridAfterSelect(objGrid);

        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "create") {
        		if (errorCode == 0) {
        			this.gfnAlert("생성되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "calc") {
        		if (errorCode == 0) {
        			this.gfnAlert("처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "issueSlipSale" || svcID == "issueSlipCalc") {
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "cancelSlipSale" || svcID == "cancelSlipCalc") {
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "selectSale"){
        		if (errorCode == 0) {
        			trace("매출조회완료");
        			this.fnSetGridData();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "calcCancel") {
        		if (errorCode == 0) {
        			this.gfnAlert("취소 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	if (id == "ccfDEPT") {
        		if(this.gfnIsNull(this.ccfCORP.form.CDTextBox.value)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}

        		//dsUserParam.setColumn(nrow, "VALUE", this.ccfDEPT.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "0000000");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "02");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	switch(id) {
        		case "ccfCORP":	//법인코드
        			this.ccfDEPT.form.fnCodeFindClear();
        		break;
        	}
        }

        //그리드 코드파인드
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "DHX_CFACNTUNIT") {	//현장
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, this.ccfCORP.form.CDTextBox.value);	//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "02");					//현장/본사여부
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);
        	}
        };

        //탭변경전 이벤트
        this.divData_tabData_canchange = function(obj,e)
        {
        	if(e.postindex != e.preindex){
        		var objDs;
        		switch(e.preindex) {
        			case 0:
        				objDs = this.dsList;
        				break;
        			case 1:
        				objDs = this.dsList2;
        				break;
        		}

        		var fRow = objDs.findRowExprNF( this.ucFlag+" != '#' && !dataset.parent.gfnIsNull(" + this.ucFlag + ")");
        		if(fRow > -1){
        			this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "tabData_canchange_callback");
        			return false;
        		}
        	}
        };

        this.tabData_canchange_callback = function(strId, val)
        {
        	var preTabIndex = this.divData.form.tabData.tabindex;
        	var postTabIndex = 0;

        	var objDs;
        	switch(preTabIndex) {
        		case 0:
        			objDs = this.dsList;
        			postTabIndex = 1;
        			break;
        		case 1:
        			objDs = this.dsList2;
        			postTabIndex = 0;
        			break;
        	}

        	if(val == true) {
        		this.divData.form.tabData.set_enableevent(false);
        		this.divData.form.tabData.set_tabindex(postTabIndex);	//탭변경
        		this.divData.form.tabData.set_enableevent(true);

        		objDs.reset();	//데이터셋 리셋
        	}
        }

        this.divData_tabData_onchanged = function(obj,e)
        {
        	// 탭 변경시 조회처리시
        	//if(e.preindex != e.postindex) {
        		//this.fnSelect();
        		this.FormBtns.Select.click();
        	//}
        };

        this.dsList_CanColumnChange = function(obj,e)
        {
        	if(e.columnid == "NO_HOUSE" || e.columnid == "NO_SALES_HOUSE"){
        		var no_House = (e.columnid == "NO_HOUSE" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "NO_HOUSE"),0));
        		var no_sales_House = (e.columnid == "NO_SALES_HOUSE" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "NO_SALES_HOUSE"),0));

        		if(no_House < no_sales_House){
        			this.gfnAlert("분양세대수는 사업지의 세대수보다 클수 없습니다.");
        			return false;
        		}
        	}
        };


        this.dsList_ColumnChanged = function(obj,e)
        {
        	//총 세대수는 조정못하게 막고 세대수(분양)을 수기조정할 경우 잔여세대수 재계산 - cha
        	if(e.columnid == "AM_DEC_BAL"   || e.columnid == "AM_DEC_SUM" ||  e.columnid == "AM_BASE" || e.columnid == "NO_HOUSE" ||
        	   e.columnid == "AM_HOUSE_DEC_SUM" || e.columnid == "AM_HOUSE_EVA" ||   e.columnid == "AM_MI_BAL" || e.columnid == "AM_BL"){
        		//세대수
        		var no_House = (e.columnid == "NO_HOUSE" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "NO_HOUSE"),0));
        		//전기말누계액
        		var am_dec_sum = (e.columnid == "AM_DEC_SUM" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_DEC_SUM"),0));
        		//전기말미상각잔액
        		var am_dec_bal = (e.columnid == "AM_DEC_BAL" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_DEC_BAL"),0));
        		//미인식액
        		var am_mi_bal = (e.columnid == "AM_MI_BAL" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_MI_BAL"),0));
        		//세대수(분양)
        		var no_sales_House = (e.columnid == "NO_SALES_HOUSE" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "NO_SALES_HOUSE"),0));


        		//기초잔액 = 전기말미상각잔액 / 전기말누계액
        		var am_base = am_dec_bal + am_dec_sum;

        		obj.setColumn(e.row, "AM_BASE", am_base);		//기초잔액

        		//건물 = 기초잔액 / 세대수
        		var am_bl = nexacro.Decimal(am_base / no_House).trunc();
        		obj.setColumn(e.row, "AM_BL", am_bl);		//건물

        		//상각누계액 = 전기말누계액 / 세대수
        		var am_house_dec_sum = nexacro.Decimal(am_dec_sum / no_House).trunc();
        		obj.setColumn(e.row, "AM_HOUSE_DEC_SUM", am_house_dec_sum);		//상각누계액

        		//평가차익 = 미인식액 / 세대수
        		var am_house_eva =  nexacro.Decimal(am_mi_bal / no_House).trunc();
        		obj.setColumn(e.row, "AM_HOUSE_EVA", am_house_eva);		//평가차익


        		//건물(분양) = 건물 * 세대수(분양)
        		var am_sales_bl = nexacro.round(am_bl * no_sales_House);
        		obj.setColumn(e.row, "AM_SALES_BL", am_sales_bl);		//건물(분양)

        		//상각누계액(분양) = 상각누계액 * 세대수(분양)
        		var am_sales_dec_sum = nexacro.round(am_house_dec_sum * no_sales_House);
        		obj.setColumn(e.row, "AM_SALES_DEC_SUM", am_sales_dec_sum);		//상각누계액(분양)

        		//평가차익(분양) = 평가차익 * 세대수(분양)
        		var am_sales_eva = nexacro.round(am_house_eva * no_sales_House);
        		obj.setColumn(e.row, "AM_SALES_EVA", am_sales_eva);		//평가차익(분양)

        		var amUp = nexacro.toNumber(obj.getColumn(e.row, "AM_UP"),0);
        		var amDown = nexacro.toNumber(obj.getColumn(e.row, "AM_DOWN"),0);
        		var amSum  = (am_base + amUp) - amDown;
        		obj.setColumn(e.row, "AM_SUM", amSum);	//기말잔액


        		var amDecSum = nexacro.toNumber(obj.getColumn(e.row, "AM_DEC_SUM"),0);	//전기말누계엑
        		var amUpRepay   = nexacro.toNumber(obj.getColumn(e.row, "AM_UP_REPAY"),0);		//당기상각액
        		var amDownRepay = nexacro.toNumber(obj.getColumn(e.row, "AM_DOWN_REPAY"),0);	//당기감소
        		var amSumRepay  = (amDecSum + amUpRepay) - amDownRepay;

        		obj.setColumn(e.row, "AM_SUM_REPAY", amSumRepay);	//상각누계액(감가상각누계액)

        		obj.setColumn(e.row, "AM_MI_REPAY", amSum - amSumRepay);	//당기말미상각잔액(감가상각누계액)

        	}
        	//세대수(분양)
        	if(e.columnid == "NO_SALES_HOUSE"){
        		var no_sales_House = nexacro.toNumber(e.newvalue,0);
        		var am_bl = nexacro.toNumber(obj.getColumn(e.row, "AM_BL"),0);
        		var am_house_dec_sum = nexacro.toNumber(obj.getColumn(e.row, "AM_HOUSE_DEC_SUM"),0);
        		var am_house_eva = nexacro.toNumber(obj.getColumn(e.row, "AM_HOUSE_EVA"),0);

        		//잔여세대수
        		var no_sales_bal = nexacro.toNumber(obj.getColumn(e.row, "NO_HOUSE_BAL"),0);

        		var amUp = nexacro.toNumber(obj.getColumn(e.row, "AM_UP"),0);

        		var am_base = nexacro.toNumber(obj.getColumn(e.row, "AM_BASE"),0);


        		//건물(분양) = 건물 * 세대수(분양)
        		var am_sales_bl = nexacro.round(am_bl * no_sales_House);
        		obj.setColumn(e.row, "AM_SALES_BL", am_sales_bl);		//건물(분양)

        		//상각누계액(분양) = 상각누계액 * 세대수(분양)
        		var am_sales_dec_sum = nexacro.round(am_house_dec_sum * no_sales_House);
        		obj.setColumn(e.row, "AM_SALES_DEC_SUM", am_sales_dec_sum);		//상각누계액(분양)

        		//평가차익(분양) = 평가차익 * 세대수(분양)
        		var am_sales_eva = nexacro.round(am_house_eva * no_sales_House);
        		obj.setColumn(e.row, "AM_SALES_EVA", am_sales_eva);		//평가차익(분양)

        		var amEnd = nexacro.toNumber(obj.getColumn(e.row, "AM_END"),0);	//전기말
        		var amUp  = nexacro.toNumber(obj.getColumn(e.row, "AM_UP"),0);	//당기증가

        		//년간누계 조회시 오리지널 값
        		var cntYearHouse = nexacro.toNumber(obj.getOrgColumn(e.row, "CNT_YEARHOUSE"),0);
        		var no_sales_org = nexacro.toNumber(obj.getOrgColumn(e.row, "NO_SALES_HOUSE"),0);
        		var no_House = nexacro.toNumber(obj.getColumn(e.row, "NO_HOUSE"),0);	//세대수

        		obj.setColumn(e.row, "CNT_YEARHOUSE", (cntYearHouse-no_sales_org) + no_sales_House);		//년간누계
        		obj.setColumn(e.row, "NO_HOUSE_BAL", no_House-((cntYearHouse-no_sales_org) + no_sales_House));	//잔여세대수

        		//var amDown = nexacro.round((am_base / no_House)*no_sales_House);
        		var amDown = nexacro.toNumber(obj.getOrgColumn(e.row, "AM_DOWN"),0);	//당기감소
        		amDown = nexacro.round(amDown+am_sales_bl);	// 당기감소 원래 금액 + 건물(분양)
        		obj.setColumn(e.row, "AM_DOWN", amDown);	//당기감소

        		var amSum  = (am_base + amUp) - amDown;

        		//기말잔액
        		obj.setColumn(e.row, "AM_SUM", amSum);

        		//감가상각누계액 당기감소
        		var amDownRepay = nexacro.toNumber(obj.getOrgColumn(e.row, "AM_DOWN_REPAY"),0);	//당기감소
        		obj.setColumn(e.row, "AM_DOWN_REPAY", amDownRepay + am_sales_dec_sum);

        		//감가상각누계액 상각누계액
        		var amDecSum = nexacro.toNumber(obj.getColumn(e.row, "AM_DEC_SUM"),0);	//전기말누계엑
        		var amUpRepay   = nexacro.toNumber(obj.getColumn(e.row, "AM_UP_REPAY"),0);		//당기상각액
        		amDownRepay = nexacro.toNumber(obj.getColumn(e.row, "AM_DOWN_REPAY"),0);	//당기감소
        		obj.setColumn(e.row, "AM_SUM_REPAY", amDecSum - amUpRepay - amDownRepay);

        		//당기말미상각잔액
        		obj.setColumn(e.row, "AM_MI_REPAY", amSum - nexacro.toNumber(obj.getColumn(e.row, "AM_SUM_REPAY"),0));	//(감가상각누계액)


        		//잔여세대 = 잔여세대수 - 세대수(분양)
        		//obj.setColumn(e.row, "NO_HOUSE_BAL", no_sales_bal - no_sales_House);		//잔여세대
        	}

        	//당기증가,당기감소
        	if(e.columnid == "AM_UP" || e.columnid == "AM_DOWN"){
        		var amUp   = (e.columnid == "AM_UP" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_UP"),0));		//당기증가
        		var amDown = (e.columnid == "AM_DOWN" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_DOWN"),0));	//당기감소
        		var amBase = nexacro.toNumber(obj.getColumn(e.row, "AM_BASE"),0);	//기초잔액
        		var amSumRepay  = nexacro.toNumber(obj.getColumn(e.row, "AM_SUM_REPAY"),0);	//상각누계액(감가상각누계액)

        		var amSum  = (amBase + amUp) - amDown;

        		obj.setColumn(e.row, "AM_SUM", amSum);	//기말잔액

        		obj.setColumn(e.row, "AM_MI_REPAY", amSum - amSumRepay);	//당기말미상각잔액(감가상각누계액)
        	}

        	//당기상각액(감가상각누계액),당기감소(감가상각누계액)
        	if(e.columnid == "AM_UP_REPAY" || e.columnid == "AM_DOWN_REPAY"){
        		var amUpRepay   = (e.columnid == "AM_UP_REPAY" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_UP_REPAY"),0));		//당기상각액
        		var amDownRepay = (e.columnid == "AM_DOWN_REPAY" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_DOWN_REPAY"),0));	//당기감소
        		var amDecSum = nexacro.toNumber(obj.getColumn(e.row, "AM_DEC_SUM"),0);	//전기말누계엑
        		var amSum    = nexacro.toNumber(obj.getColumn(e.row, "AM_SUM"),0);	//기말잔액
        		var amSumRepay  = (amDecSum + amUpRepay) - amDownRepay;

        		obj.setColumn(e.row, "AM_SUM_REPAY", amSumRepay);	//상각누계액(감가상각누계액)

        		obj.setColumn(e.row, "AM_MI_REPAY", amSum - amSumRepay);	//당기말미상각잔액(감가상각누계액)
        	}

        };


        //자료생성/감가상각 처리
        this.fnProcCall = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclDT_WORK.form.TextBox.value)){
        		this.gfnAlert("작업년월은 필수입니다.");
        		this.ctclDT_WORK.form.TextBox.setFocus();
        		return;
        	}

        	this.vProcType = "CREATE";
        	var confMsg = "작업년월 데이터는 초기화됩니다. 생성 하시겠습니까?";
        	if(obj.name == "btnExt_DataCalc"){
        		this.vProcType = "CALC";
        		confMsg  = "처리하시겠습니까?";
        	}

        	this.gfnConfirm(confMsg, "procCall_callback");
        };

        this.procCall_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsPrcCall.clearData();
        		var nRow = this.dsPrcCall.addRow();

        		//처리할 데이터 담기
        		this.dsPrcCall.setColumn(nRow, "CD_CORP"  , this.ccfCORP.form.CDTextBox.value);
        		this.dsPrcCall.setColumn(nRow, "YM_WORK"  , this.ctclDT_WORK.form.TextBox.value);
        		this.dsPrcCall.setColumn(nRow, "ID_USER"  , this.AuthClient.ID_USER);

        		var strSvcId    = "create";
        		var inData      = "create=dsPrcCall";
        		if(this.vProcType == "CALC"){
        			strSvcId    = "calc";
        			inData      = "calc=dsPrcCall";
        		}

        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
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

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	if(this.divData.form.tabData.tabindex == 1) {
        		return;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.ccfCORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCorp.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(this.ctclDT_WORK.form.TextBox.value))){
        		this.gfnAlert("작업년월은 필수입니다.");
        		this.ctclYM_WORK.form.TextBox.setFocus();
        		return;
        	}

        	this.vSlipType = "SALE";
        	if(obj.name == "btnExt_IssueSlipCalc"){
        		this.vSlipType = "CALC";
        	}

        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");

        };

        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"		, this.ccfCORP.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT"		, this.gfnNvl(this.ccfDEPT.form.CDTextBox.value,""));
        		this.dsIssueSlip.setColumn(nRow, "DT_WORK"		, this.ctclDT_WORK.form.TextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "CD_SITE_BH" 	, this.AuthClient.CD_DEPT);
        		this.dsIssueSlip.setColumn(nRow, "ID_TRANS" 	, this.AuthClient.ID_USER);

        		var strSvcId    = "issueSlipSale";
        		var inData      = "issueSlipSale=dsIssueSlip";
        		if(this.vSlipType == "CALC"){
        			strSvcId    = "issueSlipCalc";
        			inData      = "issueSlipCalc=dsIssueSlip";
        		}

        		//var strSvcId    = "issueSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		//var inData      = "issueSlip=dsIssueSlip";
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
        	var objDs;
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			objDs = this.dsList;
        			break;
        		case 1:
        			return;
        			break;
        	}

        // 	if (this.gfnIsNull(this.gfnTrim(this.ccfCORP.form.CDTextBox.value))) {
        // 		this.gfnAlert("법인코드는 필수입니다.");
        // 		this.ccfCorp.form.CDTextBox.setFocus();
        // 		return;
        // 	}

        	if(this.gfnIsNull(this.gfnTrim(this.ctclDT_WORK.form.TextBox.value))){
        		this.gfnAlert("작업년월은 필수입니다.");
        		this.ctclYM_WORK.form.TextBox.setFocus();
        		return;
        	}

        	this.vSlipType = "SALE";
        	if(obj.name == "btnExt_CancelSlipCalc"){
        		this.vSlipType = "CALC";
        	}

        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");

        };

        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();

        		var objDs;
        		switch(this.divData.form.tabData.tabindex) {
        			case 0:
        				objDs = this.dsList;
        				break;
        			case 1:
        				return;
        				break;
        		}

        		//처리할 데이터 담기
        		this.dsCancelSlip.setColumn(nRow, "CD_DEPT"		, this.gfnNvl(this.ccfDEPT.form.CDTextBox.value,""));
        		this.dsCancelSlip.setColumn(nRow, "DT_WORK"		, this.ctclDT_WORK.form.TextBox.value);
        		this.dsCancelSlip.setColumn(nRow, "CD_CORP"		, this.ccfCORP.form.CDTextBox.value);

        		var strSvcId    = "cancelSlipSale";
        		var inData      = "cancelSlipSale=dsCancelSlip";
        		if(this.vSlipType == "CALC"){
        			strSvcId    = "cancelSlipCalc";
        			inData      = "cancelSlipCalc=dsCancelSlip";
        		}

        		//var strSvcId    = "cancelSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		//var inData      = "cancelSlip=dsCancelSlip";
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
        this.fnSearchSlip = function (obj,e)
        {
        	var objDs;
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			objDs = this.dsList;
        			break;
        		case 1:
        			return;
        			break;
        	}

        	//CD_TRADE = 전표번호(매출), CD_TRADE_R = 전표번호(감가)
        	var cdTrade = this.divData.form.tabData.tab1.form.objGrid.getCellProperty("body",this.divData.form.tabData.tab1.form.objGrid.getCellPos(),"text").replace("bind:","");

        	if((cdTrade != "CD_TRADE" && cdTrade != "CD_TRADE_R") ||
        		this.gfnIsNull(objDs.getColumn(objDs.rowposition, cdTrade)))
        	{
        		this.gfnAlert("조회할 매출전표 또는 감가전표를 선택하세요");
        		return false;
        	}

         	var param = {};
         	param.IUD_FLAG = "S";
         	param.CD_TRADE = this.gfnTrim(objDs.getColumn(objDs.rowposition, cdTrade));
         	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        //버튼 처리
        this.fnBtnEnable = function (objDs)
        {
        	var totCnt = 0, totSlipCnt = 0;
        	var totSlipCalc = 0, totSlipSale = 0 ;
        	for(var i=0;i<objDs.rowcount;i++){
        		if(objDs.getColumn(i, this.ucFlag) != "#"){	//필터로우 제외
        			if(objDs.getRowLevel(i) == 0){	//소계 제외
        				if(!this.gfnIsNull(objDs.getColumn(i, "CD_TRADE")) || !this.gfnIsNull(objDs.getColumn(i, "CD_TRADE_R"))){
        					totSlipCnt++;		//전체 전표 발행건수
        				}
        				if(!this.gfnIsNull(objDs.getColumn(i, "CD_TRADE"))){
        					//if(nexacro.toNumber(objDs.getColumn(i, "NO_SALES_HOUSE"),0) > 0){
        						totSlipSale++;		//매출 전표 발행 건수
        					//}
        				}
        				if(!this.gfnIsNull(objDs.getColumn(i, "CD_TRADE_R"))){
        					//if(nexacro.toNumber(objDs.getColumn(i, "NO_SALES_HOUSE"),0) == 0){
        						totSlipCalc++;		//감가 전표 발행 건수
        					//}
        				}
        				totCnt++;	//데이터 전체 건수
        			}
        		}
        	}

        	trace("## totCnt :: "+totCnt);
        	trace("## totSlipCnt :: "+totSlipCnt);
        	trace("## 매출 전표 발행 건수 :: "+totSlipSale);
        	trace("## 감가 전표 발행 건수 :: "+totSlipCalc);

        	//주택탭일경우 버튼 처리
        	if(this.divData.form.tabData.tabindex == 0){
        		if(totSlipCnt > 0){	//전표가 발행 되었을 경우
        			this.gfnSetEnable(this.btnSearchSale, false);		//매출조회
        			this.gfnSetEnable(this.btnDataCreate, false);		//자료생성
        			this.gfnSetEnable(this.btnDataCalc, true);			//감가상각
        			this.gfnSetEnable(this.btnSearchSlip, true);		//전표조회

        			if(totSlipSale == totCnt && totSlipCalc == totCnt){	//매출/감가전표가 모두 발행되었을경우
        				this.dxGrid.info = "Y";
        				this.dxGrid2.info = "Y";

        				this.gfnSetEnable(this.btnIssueSlipSale, false);	//매출전표발행
        				this.gfnSetEnable(this.btnCancelSlipSale, false);	//매출전표취소
        				this.gfnSetEnable(this.btnIssueSlipCalc, false);	//감가전표발행
        				this.gfnSetEnable(this.btnCancelSlipCalc, true);	//감가전표취소
        			}else{
        				this.dxGrid.info = "N";
        				this.dxGrid2.info = "N";

        				if(totSlipCalc > 0){	//감가전표 발행이 되었을경우
        					this.gfnSetEnable(this.btnIssueSlipSale, false);	//매출전표발행
        					this.gfnSetEnable(this.btnCancelSlipSale, false);	//매출전표취소
        					this.gfnSetEnable(this.btnDataCalc, false);			//감가상각
        					this.gfnSetEnable(this.btnIssueSlipCalc, false);	//감가전표발행
        					this.gfnSetEnable(this.btnCancelSlipCalc, true);	//감가전표취소
        				}else if(totSlipSale > 0){	//매출전표 발행이 되었을경우
        					this.gfnSetEnable(this.btnIssueSlipSale, false);	//매출전표발행
        					this.gfnSetEnable(this.btnCancelSlipSale, true);	//매출전표취소
        					this.gfnSetEnable(this.btnIssueSlipCalc, true);		//감가전표발행
        					this.gfnSetEnable(this.btnCancelSlipCalc, false);	//감가전표취소
        				}
        			}

        // 				//매출데이터만 전표 발행되었을경우
        // 				if(totSlipSale > 0 && totSlipCalc == 0){
        // 					this.gfnSetEnable(this.btnSearchSlip, true);		//전표조회
        // 					this.gfnSetEnable(this.btnIssueSlipSale, false);	//매출전표발행
        // 					this.gfnSetEnable(this.btnCancelSlipSale, true);	//매출전표취소
        // 					this.gfnSetEnable(this.btnIssueSlipCalc, true);	//감가전표발행
        // 					this.gfnSetEnable(this.btnCancelSlipCalc, false);	//감가전표취소
        // 				}
        // 				//감가데이터만 전표 발행되었을경우
        // 				if(totSlipSale == 0 && totSlipCalc > 0){
        // 					this.gfnSetEnable(this.btnSearchSlip, true);		//전표조회
        // 					this.gfnSetEnable(this.btnIssueSlipSale, true);		//매출전표발행
        // 					this.gfnSetEnable(this.btnCancelSlipSale, false);	//매출전표취소
        // 					this.gfnSetEnable(this.btnIssueSlipCalc, false);	//감가전표발행
        // 					this.gfnSetEnable(this.btnCancelSlipCalc, true);	//감가전표취소
        // 				}
        	//		}
        		}else{
        			//그리드 활성
        			this.dxGrid.info = "N";
        			this.dxGrid2.info = "N";

        			this.gfnSetEnable(this.btnDataCreate, true);
        			this.gfnSetEnable(this.btnDataCalc, true);
        			this.gfnSetEnable(this.btnIssueSlipSale, true);
        			this.gfnSetEnable(this.btnCancelSlipSale, false);
        			this.gfnSetEnable(this.btnIssueSlipCalc, true);
        			this.gfnSetEnable(this.btnCancelSlipCalc, false);
        			this.gfnSetEnable(this.btnSearchSlip, false);
        			//this.gfnSetEnable(this.btnSearchSale, true);

        			if(totCnt == 0) {
        				this.gfnSetEnable(this.btnSearchSale, false);
        				this.gfnSetEnable(this.btnIssueSlipSale, false);
        				this.gfnSetEnable(this.btnIssueSlipCalc, false);
        			}else{
        				this.gfnSetEnable(this.btnSearchSale, true);
        				this.gfnSetEnable(this.btnIssueSlipSale, true);
        				this.gfnSetEnable(this.btnIssueSlipCalc, true);
        			}
        		}
        	}else{
        		this.gfnSetEnable(this.btnDataCreate, true);
        		this.gfnSetEnable(this.btnDataCalc, false);
        		this.gfnSetEnable(this.btnIssueSlipSale, false);
        		this.gfnSetEnable(this.btnCancelSlipSale, false);
        		this.gfnSetEnable(this.btnIssueSlipCalc, false);
        		this.gfnSetEnable(this.btnCancelSlipCalc, false);
        		this.gfnSetEnable(this.btnSearchSlip, false);
        		this.gfnSetEnable(this.btnSearchSale, false);
        	}
        };

        //매출 조회
        this.fnSearchSale = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(this.ctclDT_WORK.form.TextBox.value))){
        		this.gfnAlert("작업년월은 필수입니다.");
        		this.ctclDT_WORK.form.TextBox.setFocus();
        		return;
        	}

        	this.dsSelectSale.clearData();
        	var nRow = this.dsSelectSale.addRow();
        	this.dsSelectSale.setColumn(nRow, "CD_CORP"  , this.ccfCORP.form.CDTextBox.value);
        	this.dsSelectSale.setColumn(nRow, "CD_ACNTUNIT"  , this.ccfDEPT.form.CDTextBox.value);
        	this.dsSelectSale.setColumn(nRow, "DT_WORK"  , this.ctclDT_WORK.form.TextBox.value);
        	this.dsSelectSale.setColumn(nRow, "TY_GUBUN" , "3");	//3:리스

        	var strSvcId    = "selectSale";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectSale=dsSelectSale";
        	var outData     = "dsSale=selectSale0";
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

        //매출데이터 그리드에 셋팅
        this.fnSetGridData = function ()
        {

        	var objDs;
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			objDs = this.dsList;
        			break;
        		case 1:
        			objDs = this.dsList2;
        			break;
        	}

        	objDs.set_enableevent(false);

        	var dataCnt = 0;
        	trace("dsSale" + this.dsSale.saveXML());
        	for(var i=0; i<this.dsSale.rowcount; i++){

        		var cdAcntunit = this.gfnTrim(this.dsSale.getColumn(i, "CD_ACNTUNIT"));						//사업지코드
        		//var noSize = this.gfnTrim(this.dsSale.getColumn(i, "NO_SIZE"));								//평형
        		var noSize = nexacro.toNumber(this.dsSale.getColumn(i, "NO_SIZE"),0);							//평형
        		//var dtReceipt = this.gfnTrim(this.dsSale.getColumn(i, "DT_RECEIPT"));						//매출일자
        		var amBunYangGet = nexacro.toNumber(this.dsSale.getColumn(i, "AM_BUNYANGGET"),0);			//분양금
        		var amBunYangGetOpt = nexacro.toNumber(this.dsSale.getColumn(i, "AM_BUNYANGGET_OPT"),0);	//옵션금액
        		var cntSize = nexacro.toNumber(this.dsSale.getColumn(i, "CNT_SIZE"),0);						//세대수

        		//매출데이터와 같은 사업지,동,호 데이터를 찾아서 데이터를 셋팅
        		for(var d=0;d<objDs.rowcount;d++){
        			if(this.gfnTrim(objDs.getColumn(d, "CD_DEPT")) == cdAcntunit && this.gfnTrim(objDs.getColumn(d, "NO_SIZE")) == noSize){
        				//var amDown = nexacro.toNumber(objDs.getColumn(d, "AM_SUM"),0);
        				//var amSum  = (nexacro.toNumber(objDs.getColumn(d, "AM_BASE"),0) + nexacro.toNumber(objDs.getColumn(d, "AM_UP"),0)) - amDown;
        				var cntBal = (nexacro.toNumber(objDs.getColumn(d, "NO_HOUSE_BAL"),0)) - cntSize;
        				var no_House = nexacro.toNumber(objDs.getColumn(d, "NO_HOUSE"),0);	//세대수

        				var amUp  = nexacro.toNumber(objDs.getColumn(d, "AM_UP"),0);	//당기증가
        				var am_base = nexacro.toNumber(objDs.getColumn(d, "AM_BASE"),0);	//기초잔액

        				objDs.setColumn(d, this.nx_flag	, "U");						//상태값(수정)
        				objDs.setColumn(d, "AM_SALE"		, amBunYangGet);		//본계약 매출액
        				objDs.setColumn(d, "AM_OPTION"  	, amBunYangGetOpt);		//옵션 매출액
        				objDs.setColumn(d, "NO_SALES_HOUSE"	, cntSize);				//세대수
        				objDs.setColumn(d, "NO_HOUSE_BAL"	, cntBal);				//잔여세대수

        				//분양금액계산
        				this.fnAmHouseCalc(d, objDs, cntSize);

        				//년간누계 조회시 오리지널 값
        				var cntYearHouse = nexacro.toNumber(objDs.getOrgColumn(d, "CNT_YEARHOUSE"),0);
        				var noSalesOrg = nexacro.toNumber(objDs.getOrgColumn(d, "NO_SALES_HOUSE"),0);

        				objDs.setColumn(d, "CNT_YEARHOUSE", ((cntYearHouse-noSalesOrg) + cntSize));		//년간누계
        				objDs.setColumn(d, "NO_HOUSE_BAL", no_House-((cntYearHouse-noSalesOrg) + cntSize));	//잔여세대수

        				var am_sales_bl = nexacro.toNumber(objDs.getColumn(d, "AM_SALES_BL"),0);	//건물(분양)
        				var amDown = nexacro.toNumber(objDs.getOrgColumn(d, "AM_DOWN"),0);	//당기감소
        				amDown = nexacro.round(amDown+am_sales_bl);	// 당기감소 원래 금액 + 건물(분양)
        				objDs.setColumn(d, "AM_DOWN", amDown);	//당기감소

        				var amSum  = (am_base + amUp) - amDown;
        				//기말잔액
        				objDs.setColumn(d, "AM_SUM", amSum);

        				var am_sales_dec_sum = nexacro.toNumber(objDs.getColumn(d, "AM_SALES_DEC_SUM"),0);	//상각누계액(분양)
        				var amDownRepay = nexacro.toNumber(objDs.getOrgColumn(d, "AM_DOWN_REPAY"),0);	//당기감소
        				//감가상각누계액 당기감소
        				objDs.setColumn(d, "AM_DOWN_REPAY", amDownRepay + am_sales_dec_sum);

        				//감가상각누계액 상각누계액
        				var amDecSum = nexacro.toNumber(objDs.getColumn(d, "AM_DEC_SUM"),0);	//전기말누계엑
        				var amUpRepay   = nexacro.toNumber(objDs.getColumn(d, "AM_UP_REPAY"),0);		//당기상각액
        				amDownRepay = nexacro.toNumber(objDs.getColumn(d, "AM_DOWN_REPAY"),0);	//당기감소
        				objDs.setColumn(d, "AM_SUM_REPAY", amDecSum - amUpRepay - amDownRepay);

        				//당기말미상각잔액
        				objDs.setColumn(d, "AM_MI_REPAY", amSum - nexacro.toNumber(objDs.getColumn(d, "AM_SUM_REPAY"),0));	//(감가상각누계액)

        				dataCnt++;
        				this.gfnSetFormStatus(this, "U");
        			}
        		}
        	}

        	objDs.set_enableevent(true);

        	if(dataCnt == 0){
        		this.gfnAlert("조회된 데이터가 없습니다.");
        	}else{
        		this.gfnAlert(dataCnt + "건 처리 되었습니다.");
        	}
        };

        this.fnAmHouseCalc = function (row, objDs, no_sales_House)
        {
        	var am_bl = nexacro.toNumber(objDs.getColumn(row, "AM_BL"),0);
        	var am_house_dec_sum = nexacro.toNumber(objDs.getColumn(row, "AM_HOUSE_DEC_SUM"),0);
        	var am_house_eva = nexacro.toNumber(objDs.getColumn(row, "AM_HOUSE_EVA"),0);
        	var amUp = nexacro.toNumber(objDs.getColumn(row, "AM_UP"),0);
        	var am_base = nexacro.toNumber(objDs.getColumn(row, "AM_BASE"),0);

        	//건물(분양) = 건물 * 세대수(분양)
        	var am_sales_bl = nexacro.round(am_bl * no_sales_House);
        	objDs.setColumn(row, "AM_SALES_BL", am_sales_bl);		//건물(분양)

        	//상각누계액(분양) = 상각누계액 * 세대수(분양)
        	var am_sales_dec_sum = nexacro.round(am_house_dec_sum * no_sales_House);
        	objDs.setColumn(row, "AM_SALES_DEC_SUM", am_sales_dec_sum);		//상각누계액(분양)

        	//평가차익(분양) = 평가차익 * 세대수(분양)
        	var am_sales_eva = nexacro.round(am_house_eva * no_sales_House);
        	objDs.setColumn(row, "AM_SALES_EVA", am_sales_eva);		//평가차익(분양)

        	var amSum  = (am_base + amUp) - am_sales_bl;

        	//당기감소
        	objDs.setColumn(row, "AM_DOWN",am_sales_bl);
        	//기말잔액
        	objDs.setColumn(row, "AM_SUM", amSum);
        	//감가상각누계액 당기감소
        	objDs.setColumn(row, "AM_DOWN_REPAY", am_sales_dec_sum);
        	//당기말미상각잔액
        	objDs.setColumn(row, "AM_MI_REPAY", amSum - nexacro.toNumber(objDs.getColumn(row, "AM_SUM_REPAY"),0));	//(감가상각누계액)
        };

        this.fnGrid_oncelldblclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm == "CD_TRADE" || colnm == "CD_TRADE_R"){
        		if(!this.gfnGridIsRow(obj)) {return false;}			//필터로우 제외
        		if(objDs.getRowLevel(e.row) > 0) {return false;}	//소계제외

        		var cdTrade = this.gfnTrim(objDs.getColumn(objDs.rowposition, colnm)).replace(/-/gi, "");

        		if (this.gfnIsNull(cdTrade)) {
        			this.gfnAlert("전표번호는 필수입니다.");
        			return;
        		}

        		var param = {};
        		param.CD_TRADE = cdTrade;

        		this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        	}
        };


        //감가상각취소 처리
        this.fnCalcCancel = function (obj,e)
        {

        	if (this.gfnIsNull(this.gfnTrim(this.ccfCORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(this.ctclDT_WORK.form.TextBox.value))){
        		this.gfnAlert("작업년월은 필수입니다.");
        		this.ctclDT_WORK.form.TextBox.setFocus();
        		return;
        	}

        	this.gfnConfirm("감가상각취소 하시겠습니까?", "fnCalcCancel_callback");

        };

        this.fnCalcCancel_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsPrcCall.clearData();
        		var nRow = this.dsPrcCall.addRow();

        		//처리할 데이터 담기
        		this.dsPrcCall.setColumn(nRow, "CD_CORP"  , this.ccfCORP.form.CDTextBox.value);
        		this.dsPrcCall.setColumn(nRow, "YM_WORK"  , this.ctclDT_WORK.form.TextBox.value);
        		this.dsPrcCall.setColumn(nRow, "ID_USER"  , this.AuthClient.ID_USER);

        		var strSvcId    = "calcCancel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "calcCancel=dsPrcCall";
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
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.addEventHandler("canchange",this.divData_tabData_canchange,this);
            this.divData.form.tabData.tab1.form.objGrid.addEventHandler("oncelldblclick",this.fnGrid_oncelldblclick,this);
            this.divData.form.tabData.tab2.form.objGrid2.addEventHandler("oncelldblclick",this.fnGrid_oncelldblclick,this);
        };
        this.loadIncludeScript("DHA_LEASE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
