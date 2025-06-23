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
            this.set_titletext("임대아파트 분양원가");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_LEASE_COST_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_LEASE_COST_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_LEASE_COST_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_LEASE_COST_DELETE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHAPR_LEASE_COST_CREATE</Col></Row><Row><Col id=\"TARGET\">calc</Col><Col id=\"SP\">DHAPR_LEASE_COST_CALC</Col></Row><Row><Col id=\"SP\">DHAPR_LEASE_COST_DEPT_SELECT</Col><Col id=\"TARGET\">select_dept</Col></Row><Row><Col id=\"TARGET\">select_asset</Col><Col id=\"SP\">DHAPR_LEASE_COST_ASSET_SELECT</Col></Row><Row><Col id=\"TARGET\">issueSlipSale</Col><Col id=\"SP\">DHAPR_LEASE_COST_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlipSale</Col><Col id=\"SP\">DHAPR_LEASE_COST_CANCELSLIP</Col></Row><Row><Col id=\"TARGET\">issueSlipCalc</Col><Col id=\"SP\">DHAPR_LEASE_COST_CALC_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlipCalc</Col><Col id=\"SP\">DHAPR_LEASE_COST_CALC_CANCELSLIP</Col></Row><Row><Col id=\"TARGET\">selectSale</Col><Col id=\"SP\">DHAPR_DL_AMSALE_SELECT</Col></Row><Row><Col id=\"TARGET\">calcCancel</Col><Col id=\"SP\">DHAPR_LEASE_COST_CALC_CALCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_DEPT\"/><Col id=\"DT_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_COMPLETION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HOUSE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAssetInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ASSET\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BUILDING\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LAND\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSale", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00","0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","rdo00:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCORP","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사업지");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDEPT","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfDEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("작업월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalMM.xfdl");
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

            obj = new BindItem("item2","divSearch.form.ccfDEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclDT_WORK.form.TextBox","value","dsSearch","DT_WORK");
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
        this.registerScript("DHA_LEASE_COST.xfdl", function() {
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

        	//this.btnIssueSlipCalc  = this.gfnFormButtonAdd("IssueSlipCalc", "fnIssueSlip"); 	//감가 전표발행
        	//this.btnCancelSlipCalc = this.gfnFormButtonAdd("CancelSlipCalc", "fnCancelSlip"); 	//감가 전표취소
        	this.btnSearchSlip     = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 		//전표조회
        	this.btnSearchSale 	   = this.gfnFormButtonAdd("SearchSale", "fnSearchSale"); 		//매출조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCORP = this.divSearch.form.ccfCORP;
        	this.ccfDEPT = this.divSearch.form.ccfDEPT;
        	this.ctclDT_WORK = this.divSearch.form.ctclDT_WORK;
        	this.dxGrid = this.divData.form.objGrid;

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
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_LEASE_COST");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);
        	//this.dxGrid.set_selecttype("cell");

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

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("CD_CORP", "string");
        	this.dsSelect2.addColumn("CD_DEPT", "string");
        	this.dsSelect2.addColumn("DT_WORK", "string");
        	this.dsSelect2.addColumn("CD_ASSET", "string");
        	this.dsSelect2.addColumn("NO_SIZE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("DT_WORK", "string");
        	this.dsInsert.addColumn("NO_SIZE", "string");
        	this.dsInsert.addColumn("CD_ASSET", "string");
        	this.dsInsert.addColumn("YM_COMPLETION", "string");
        	this.dsInsert.addColumn("RT_END", "float");
        	this.dsInsert.addColumn("NO_HOUSE", "BIGDECIMAL");
        	this.dsInsert.addColumn("TY_LEA", "string");
        	this.dsInsert.addColumn("AM_BUILDING_END", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_BUILDING_UP", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_BUILDING_DOWN", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_BUILDING", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LAND_END", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LAND_UP", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LAND_DOWN", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LAND", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_DEC", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_BUILDING_COST", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LAND_COST", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_DEC_COST", "BIGDECIMAL");
        	this.dsInsert.addColumn("NO_SALES", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_BUILDING_HOUSE", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LAND_HOUSE", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_DEC_HOUSE", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_SALE", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_OPTION", "BIGDECIMAL");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("DT_WORK", "string");
        	this.dsUpdate.addColumn("NO_SIZE", "string");
        	this.dsUpdate.addColumn("CD_ASSET", "string");
        	this.dsUpdate.addColumn("YM_COMPLETION", "string");
        	this.dsUpdate.addColumn("RT_END", "float");
        	this.dsUpdate.addColumn("NO_HOUSE", "BIGDECIMAL");
        	this.dsUpdate.addColumn("TY_LEA", "string");
        	this.dsUpdate.addColumn("AM_BUILDING_END", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_BUILDING_UP", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_BUILDING_DOWN", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_BUILDING", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_LAND_END", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_LAND_UP", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_LAND_DOWN", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_LAND", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_DEC_UP", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_DEC_DOWN", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_DEC", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_BUILDING_COST", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_LAND_COST", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_DEC_COST", "BIGDECIMAL");
        	this.dsUpdate.addColumn("NO_SALES", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_BUILDING_HOUSE", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_LAND_HOUSE", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_DEC_HOUSE", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_SALE", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_OPTION", "BIGDECIMAL");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("CD_DEPT", "string");
        	this.dsDelete.addColumn("DT_WORK", "string");
        	this.dsDelete.addColumn("NO_SIZE", "string");

        	//자료생성/감가상각용 데이터셋
        	this.dsPrcCall = new Dataset();
        	this.dsPrcCall.addColumn("CD_CORP", "string");
        	this.dsPrcCall.addColumn("CD_DEPT", "string");
        	this.dsPrcCall.addColumn("DT_WORK", "string");
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

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP"	, this.ccfCORP.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "CD_DEPT"	, this.ccfDEPT.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "DT_WORK"	, this.ctclDT_WORK.form.TextBox.value);

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nRow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.setColumn(nRow, "CD_CORP", this.ccfCORP.form.CDTextBox.text);
        	this.dsList.setColumn(nRow, "DT_WORK", this.ctclDT_WORK.form.TextBox.value);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	//전표발행된 데이터면 행삭제 불가
        	if(!this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE")))){
        		this.gfnAlert("전표발행된 데이터는 삭제할수 없습니다.");
        		return;
        	}

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
        				this.dsInsert.setColumn(nrow, "CD_CORP"  			, this.dsList.getColumn(i, "CD_CORP"));				//법인코드
        				this.dsInsert.setColumn(nrow, "CD_DEPT"  			, this.dsList.getColumn(i, "CD_DEPT"));				//부서코드
        				this.dsInsert.setColumn(nrow, "DT_WORK"  			, this.dsList.getColumn(i, "DT_WORK"));				//작업년월
        				this.dsInsert.setColumn(nrow, "NO_SIZE"  			, this.dsList.getColumn(i, "NO_SIZE"));				//평형
        				this.dsInsert.setColumn(nrow, "YM_COMPLETION"  		, this.dsList.getColumn(i, "YM_COMPLETION"));		//준공일자
        				this.dsInsert.setColumn(nrow, "CD_ASSET"  			, this.dsList.getColumn(i, "CD_ASSET"));			//자산코드
        				this.dsInsert.setColumn(nrow, "RT_END"  			, this.dsList.getColumn(i, "RT_END"));				//상각율
        				this.dsInsert.setColumn(nrow, "NO_HOUSE"  			, this.dsList.getColumn(i, "NO_HOUSE"));			//세대수
        				this.dsInsert.setColumn(nrow, "TY_LEA"  			, this.dsList.getColumn(i, "TY_LEA"));				//구분
        				this.dsInsert.setColumn(nrow, "AM_BUILDING_END"  	, this.dsList.getColumn(i, "AM_BUILDING_END"));		//건물(전기말)
        				this.dsInsert.setColumn(nrow, "AM_BUILDING_UP"  	, this.dsList.getColumn(i, "AM_BUILDING_UP"));		//건물(당기증가)
        				this.dsInsert.setColumn(nrow, "AM_BUILDING_DOWN"  	, this.dsList.getColumn(i, "AM_BUILDING_DOWN"));	//건물(당기감소)
        				this.dsInsert.setColumn(nrow, "AM_BUILDING"  		, this.dsList.getColumn(i, "AM_BUILDING"));			//건물(당기말)
        				this.dsInsert.setColumn(nrow, "AM_LAND_END"  		, this.dsList.getColumn(i, "AM_LAND_END"));			//토지(전기말)
        				this.dsInsert.setColumn(nrow, "AM_LAND_UP"  		, this.dsList.getColumn(i, "AM_LAND_UP"));			//토지(당기증가)
        				this.dsInsert.setColumn(nrow, "AM_LAND_DOWN"  		, this.dsList.getColumn(i, "AM_LAND_DOWN"));		//토지(당기감소)
        				this.dsInsert.setColumn(nrow, "AM_LAND"  			, this.dsList.getColumn(i, "AM_LAND"));				//토지(당기말)
        				this.dsInsert.setColumn(nrow, "AM_DEC"  			, this.dsList.getColumn(i, "AM_DEC"));				//평형
        				this.dsInsert.setColumn(nrow, "AM_BUILDING_COST" 	, this.dsList.getColumn(i, "AM_BUILDING_COST"));	//분양원가건물(세대별)
        				this.dsInsert.setColumn(nrow, "AM_LAND_COST"  		, this.dsList.getColumn(i, "AM_LAND_COST"));		//분양원가토지(세대별)
        				this.dsInsert.setColumn(nrow, "AM_DEC_COST"  		, this.dsList.getColumn(i, "AM_DEC_COST"));			//분양원가상각누계약(세대별)
        				this.dsInsert.setColumn(nrow, "NO_SALES"  			, this.dsList.getColumn(i, "NO_SALES"));			//분양세대수
        				this.dsInsert.setColumn(nrow, "AM_BUILDING_HOUSE"  	, this.dsList.getColumn(i, "AM_BUILDING_HOUSE"));	//분양건물가
        				this.dsInsert.setColumn(nrow, "AM_LAND_HOUSE" 	 	, this.dsList.getColumn(i, "AM_LAND_HOUSE"));		//분양토지가
        				this.dsInsert.setColumn(nrow, "AM_DEC_HOUSE"  		, this.dsList.getColumn(i, "AM_DEC_HOUSE"));		//분양상각누계액
        				this.dsInsert.setColumn(nrow, "AM_SALE"				, this.dsList.getColumn(i, "AM_SALE")); 			//매출액
        				this.dsInsert.setColumn(nrow, "AM_OPTION"			, this.dsList.getColumn(i, "AM_OPTION")); 		//옵션매출액
        				this.dsInsert.setColumn(nrow, "ID_USER"  			, this.AuthClient.ID_USER);							//사용자 아이디
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP"  			, this.dsList.getColumn(i, "CD_CORP"));				//법인코드
        				this.dsUpdate.setColumn(nrow, "CD_DEPT"  			, this.dsList.getColumn(i, "CD_DEPT"));				//부서코드
        				this.dsUpdate.setColumn(nrow, "DT_WORK"  			, this.dsList.getColumn(i, "DT_WORK"));				//작업년월
        				this.dsUpdate.setColumn(nrow, "NO_SIZE"  			, this.dsList.getColumn(i, "NO_SIZE"));				//평형
        				this.dsUpdate.setColumn(nrow, "YM_COMPLETION"  		, this.dsList.getColumn(i, "YM_COMPLETION"));		//준공일자
        				this.dsUpdate.setColumn(nrow, "CD_ASSET"  			, this.dsList.getColumn(i, "CD_ASSET"));			//자산코드
        				this.dsUpdate.setColumn(nrow, "RT_END"  			, this.dsList.getColumn(i, "RT_END"));				//상각율
        				this.dsUpdate.setColumn(nrow, "NO_HOUSE"  			, this.dsList.getColumn(i, "NO_HOUSE"));			//세대수
        				this.dsUpdate.setColumn(nrow, "TY_LEA"  			, this.dsList.getColumn(i, "TY_LEA"));				//구분
        				this.dsUpdate.setColumn(nrow, "AM_BUILDING_END"  	, this.dsList.getColumn(i, "AM_BUILDING_END"));		//건물(전기말)
        				this.dsUpdate.setColumn(nrow, "AM_BUILDING_UP"  	, this.dsList.getColumn(i, "AM_BUILDING_UP"));		//건물(당기증가)
        				this.dsUpdate.setColumn(nrow, "AM_BUILDING_DOWN"  	, this.dsList.getColumn(i, "AM_BUILDING_DOWN"));	//건물(당기감소)
        				this.dsUpdate.setColumn(nrow, "AM_BUILDING"  		, this.dsList.getColumn(i, "AM_BUILDING"));			//건물(당기말)
        				this.dsUpdate.setColumn(nrow, "AM_LAND_END"  		, this.dsList.getColumn(i, "AM_LAND_END"));			//토지(전기말)
        				this.dsUpdate.setColumn(nrow, "AM_LAND_UP"  		, this.dsList.getColumn(i, "AM_LAND_UP"));			//토지(당기증가)
        				this.dsUpdate.setColumn(nrow, "AM_LAND_DOWN"  		, this.dsList.getColumn(i, "AM_LAND_DOWN"));		//토지(당기감소)
        				this.dsUpdate.setColumn(nrow, "AM_LAND"  			, this.dsList.getColumn(i, "AM_LAND"));				//토지(당기말)
        				this.dsUpdate.setColumn(nrow, "AM_DEC_UP"  			, this.dsList.getColumn(i, "AM_DEC_UP"));			//감가상각(당기증가)
        				this.dsUpdate.setColumn(nrow, "AM_DEC_DOWN"  		, this.dsList.getColumn(i, "AM_DEC_DOWN"));			//감가상각(당기감소)
        				this.dsUpdate.setColumn(nrow, "AM_DEC"  			, this.dsList.getColumn(i, "AM_DEC"));				//평형
        				this.dsUpdate.setColumn(nrow, "AM_BUILDING_COST" 	, this.dsList.getColumn(i, "AM_BUILDING_COST"));	//분양원가건물(세대별)
        				this.dsUpdate.setColumn(nrow, "AM_LAND_COST"  		, this.dsList.getColumn(i, "AM_LAND_COST"));		//분양원가토지(세대별)
        				this.dsUpdate.setColumn(nrow, "AM_DEC_COST"  		, this.dsList.getColumn(i, "AM_DEC_COST"));			//분양원가상각누계약(세대별)
        				this.dsUpdate.setColumn(nrow, "NO_SALES"  			, this.dsList.getColumn(i, "NO_SALES"));			//분양세대수
        				this.dsUpdate.setColumn(nrow, "AM_BUILDING_HOUSE"   , this.dsList.getColumn(i, "AM_BUILDING_HOUSE"));	//분양건물가
        				this.dsUpdate.setColumn(nrow, "AM_LAND_HOUSE"   	, this.dsList.getColumn(i, "AM_LAND_HOUSE"));		//분양토지가
        				this.dsUpdate.setColumn(nrow, "AM_DEC_HOUSE"   		, this.dsList.getColumn(i, "AM_DEC_HOUSE"));		//분양상각누계액
        				this.dsUpdate.setColumn(nrow, "AM_SALE"				, this.dsList.getColumn(i, "AM_SALE")); 			//매출액
        				this.dsUpdate.setColumn(nrow, "AM_OPTION"			, this.dsList.getColumn(i, "AM_OPTION")); 		//옵션매출액
        				this.dsUpdate.setColumn(nrow, "ID_USER"  			, this.AuthClient.ID_USER);							//사용자 아이디
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP"  , this.dsList.getColumn(i, "CD_CORP"));		//법인코드
        				this.dsDelete.setColumn(nrow, "CD_DEPT"  , this.dsList.getColumn(i, "CD_DEPT"));		//부서코드
        				this.dsDelete.setColumn(nrow, "DT_WORK"  , this.dsList.getColumn(i, "DT_WORK"));		//작업년월
        				this.dsDelete.setColumn(nrow, "NO_SIZE"  , this.dsList.getColumn(i, "NO_SIZE"));				//평형
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
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.ccfCORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCORP.form.CDTextBox.setFocus();
        		validate = false;
        	}

        // 	if (this.gfnIsNull(this.gfnTrim(this.ccfDEPT.form.CDTextBox.value))) {
        // 		this.gfnAlert("사업지가 입력되지 않았습니다.");
        // 		this.ccfDEPT.form.CDTextBox.setFocus();
        // 		return;
        // 	}

        	if (this.gfnIsNull(this.ctclDT_WORK.form.TextBox.value)) {
        		this.gfnAlert("작업월이 입력되지 않았습니다.");
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
        	switch(svcID) {
        		case "select":
        			//버튼 처리
        			this.fnBtnEnable();
        			this.gfnGridAfterSelect(this.dxGrid);
        		break;
        		case "save":
        			if (errorCode == 0) {
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "create":
        			if (errorCode == 0) {
        				this.gfnAlert("생성되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "calc":
        			if (errorCode == 0) {
        				this.gfnAlert("처리되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "issueSlipSale" :
        			if (errorCode == 0) {
        				this.gfnAlert("전표가 발행 되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "issueSlipCalc" :
        			if (errorCode == 0) {
        				this.gfnAlert("전표가 발행 되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "cancelSlipSale" :
        			if (errorCode == 0) {
        				this.gfnAlert("전표가 취소 되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "cancelSlipCalc" :
        			if (errorCode == 0) {
        				this.gfnAlert("전표가 취소 되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "deptInfoSelect":
        			if (errorCode == 0) {
        				if(this.dsDeptInfo.rowcount > 0){
        					var tmCompletion = this.dsDeptInfo.getColumn(0, "YM_COMPLETION");
        					var noHouse      = this.dsDeptInfo.getColumn(0, "NO_HOUSE");
        					this.dsList.setColumn(this.dsList.rowposition, "YM_COMPLETION", tmCompletion);	//준공일자
        					this.dsList.setColumn(this.dsList.rowposition, "NO_HOUSE", noHouse);			//세대수
        				}
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "assetInfoSelect":
        			if (errorCode == 0) {
        				if(this.dsAssetInfo.rowcount > 0){
        					var amBuilding = this.dsAssetInfo.getColumn(0, "AM_BUILDING");
        					var amLand     = this.dsAssetInfo.getColumn(0, "AM_LAND");
        					var amDec      = this.dsAssetInfo.getColumn(0, "AM_DEC");

        					this.dsList.setColumn(this.dsList.rowposition, "AM_BUILDING", amBuilding);	//건물(당기말)
        					this.dsList.setColumn(this.dsList.rowposition, "AM_LAND", amLand);			//토지(당기말)
        					this.dsList.setColumn(this.dsList.rowposition, "AM_DEC", amDec);			//상각누계액(당기말)
        				}
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "selectSale":
        			if (errorCode == 0) {
        				this.fnSetGridData();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "calcCancel":
        			if (errorCode == 0) {
        				this.gfnAlert("취소 되었습니다.");
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	if (id == "ccfDEPT") {	//사업지
        		var cdCorp = this.ccfCORP.form.CDTextBox.text;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");				//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");				//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);			//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");				//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");				//현장/본사여부
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	var cdDept = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        	switch(id) {
        		case "DHX_CFACNTUNIT":	//사업지
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "0000000");				//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		break;
        		case "DHX_CFASSETINFO":	//자산코드
        			if(this.gfnIsNull(cdDept)){
        				this.gfnAlert("사업지코드를 먼저 선택하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_CORP" , cdCorp);
        			dsUserParam.setColumn(nrow, "YN_CORP" , "Y");
        		break;
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	switch(id) {
        		case "DHX_CFACNTUNIT":	//사업지

        			//영업데이터 조회
        			this.fnDeptInfoSelect();
        			this.dsList.setColumn(this.dsList.rowposition, "CD_ASSET", "");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_ASSET", "");
        			this.dsList.setColumn(this.dsList.rowposition, "AM_BUILDING", "0");		//건물(당기말)
        			this.dsList.setColumn(this.dsList.rowposition, "AM_LAND", "0");			//토지(당기말)
        			this.dsList.setColumn(this.dsList.rowposition, "AM_DEC", "0");			//상각누계액(당기말)
        		break;
        		case "DHX_CFASSETINFO":	//자산코드

        			//자산데이터 조회
        			this.fnAssetInfoSelect();
        		break;
        	}
        };

        //그리드 값변경 이벤트
        this.dsList_ColumnChanged = function(obj, e)
        {
        	//세대수
        	var no_House = (e.columnid == "NO_HOUSE" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "NO_HOUSE"),0));

        	//건물(당기말)
        	var am_Building = (e.columnid == "AM_BUILDING" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_BUILDING"),0));
        	//토지(당기말)
        	var am_land = (e.columnid == "AM_LAND" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_LAND"),0));
        	//상각누계액(당기말)
        	var am_dec = (e.columnid == "AM_DEC" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_DEC"),0));

        	var no_Sales = (e.columnid == "NO_SALES" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "NO_SALES"),0));
        	var am_building_cost = (e.columnid == "AM_BUILDING_COST" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_BUILDING_COST"),0));
        	var am_land_cost = (e.columnid == "AM_LAND_COST" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_LAND_COST"),0));
        	var am_dec_cost = (e.columnid == "AM_DEC_COST" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_DEC_COST"),0));
        	var am_building_house = (e.columnid == "AM_BUILDING_HOUSE" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_BUILDING_HOUSE"),0));
        	var am_land_house = (e.columnid == "AM_LAND_HOUSE" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_LAND_HOUSE"),0));
        	var am_dec_house = (e.columnid == "AM_DEC_HOUSE" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_DEC_HOUSE"),0));

        	//세대수, 건물(당기말), 토지(당기말), 상각누계액(당기말)
        /*	if(e.columnid == "NO_HOUSE" || e.columnid == "AM_BUILDING" || e.columnid == "AM_LAND" || e.columnid == "AM_DEC"){
        		//세대별 금액 계산
        		this.fnAmCostCalc(e.row, no_House, obj.getColumn(e.row, "AM_BUILDING"), obj.getColumn(e.row, "AM_LAND"), obj.getColumn(e.row, "AM_DEC"));
        		//분양금액 계산
        		this.fnAmHouseCalc(e.row, no_Sales, obj.getColumn(e.row, "AM_BUILDING_COST"), obj.getColumn(e.row, "AM_LAND_COST"), obj.getColumn(e.row, "AM_DEC_COST"));
        		//계
        		this.fnAmSumCalc(e.row, obj.getColumn(e.row, "AM_BUILDING_HOUSE") , obj.getColumn(e.row, "AM_LAND_HOUSE") , obj.getColumn(e.row, "AM_DEC_HOUSE"));
        	}
        */
        	// 건물(세대별), 토지(세대별), 상각누계액(세대별), 분양세대수
        //	if(e.columnid == "NO_SALES" || e.columnid == "AM_BUILDING_COST" || e.columnid == "AM_LAND_COST" || e.columnid == "AM_DEC_COST"){
        	if(e.columnid == "NO_SALES"){	//분양세대수
        		//분양금액 계산
        		this.fnAmHouseCalc(e.row, no_Sales, obj.getColumn(e.row, "AM_BUILDING_COST"), obj.getColumn(e.row, "AM_LAND_COST"), obj.getColumn(e.row, "AM_DEC_COST"));

        		//합계 금액 계산
        		this.fnAmSumCalc(e.row, obj.getColumn(e.row, "AM_BUILDING_HOUSE") , obj.getColumn(e.row, "AM_LAND_HOUSE") , obj.getColumn(e.row, "AM_DEC_HOUSE"));

        		//년간누계 조회시 오리지널 값
        		var cntYearHouse = nexacro.toNumber(obj.getOrgColumn(e.row, "CNT_YEARHOUSE"),0);
        		var noSalesOrg = nexacro.toNumber(obj.getOrgColumn(e.row, "NO_SALES"),0);

        		this.dsList.setColumn(e.row, "CNT_YEARHOUSE", (cntYearHouse-noSalesOrg) + no_Sales);		//년간누계
        		this.dsList.setColumn(e.row, "NO_BAL", no_House-((cntYearHouse-noSalesOrg) + no_Sales));	//잔여세대수

        		var amBuildingEnd  = nexacro.toNumber(obj.getColumn(e.row, "AM_BUILDING_END"),0);	//건물 전기말
        		var amLandEnd  = nexacro.toNumber(obj.getColumn(e.row, "AM_LAND_END"),0);			//토지 전기말

        		var amBuildingUp  = nexacro.toNumber(obj.getColumn(e.row, "AM_BUILDING_UP"),0);		//건물 당기증가
        		var amLandUp  = nexacro.toNumber(obj.getColumn(e.row, "AM_LAND_UP"),0);				//토지 당기증가

        		var amBuildingDown = nexacro.toNumber(obj.getOrgColumn(e.row, "AM_BUILDING_DOWN"),0);	//당기감소
        		amBuildingDown += nexacro.round((amBuildingEnd / no_House)*no_Sales);
        		var amLandDown = nexacro.toNumber(obj.getOrgColumn(e.row, "AM_LAND_DOWN"),0);	//당기감소
        		amLandDown += nexacro.round((amLandEnd / no_House)*no_Sales);
        		obj.setColumn(e.row, "AM_BUILDING_DOWN", amBuildingDown);	//건물 당기감소
        		obj.setColumn(e.row, "AM_LAND_DOWN", amLandDown);			//토지 당기감소

        		//건물 당기말 금액 계산
        		this.fnAmDecCalc("AM_BUILDING", e.row, amBuildingEnd , amBuildingUp , amBuildingDown);
        		//토지 당기말 금액 계산
        		this.fnAmDecCalc("AM_LAND", e.row, amLandEnd , amLandUp , amLandDown);
        	}

        	// 분양(건물가), 분양(토지가), 분양(상각누계액)
        /*	if(e.columnid == "AM_BUILDING_HOUSE" || e.columnid == "AM_LAND_HOUSE" || e.columnid == "AM_DEC_HOUSE"){

        		//합계 금액 계산
        		this.fnAmSumCalc(e.row, obj.getColumn(e.row, "AM_BUILDING_HOUSE") , obj.getColumn(e.row, "AM_LAND_HOUSE") , obj.getColumn(e.row, "AM_DEC_HOUSE"));
        	}*/

        	// 건물(당기증가), 건물(당기감소)
        	//if(e.columnid == "AM_BUILDING_END" || e.columnid == "AM_BUILDING_UP" || e.columnid == "AM_BUILDING_DOWN"){
        	if(e.columnid == "AM_BUILDING_UP" || e.columnid == "AM_BUILDING_DOWN"){
        		var amEnd  = (e.columnid == "AM_BUILDING_END"  ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_BUILDING_END"),0));
        		var amUp   = (e.columnid == "AM_BUILDING_UP"   ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_BUILDING_UP"),0));
        		var amDown = (e.columnid == "AM_BUILDING_DOWN" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_BUILDING_DOWN"),0));

        		//당기말 금액 계산
        		this.fnAmDecCalc("AM_BUILDING", e.row, amEnd , amUp , amDown);
        	}

        	// 토지(당기증가), 토지(당기감소)
        	//if(e.columnid == "AM_LAND_END" || e.columnid == "AM_LAND_UP" || e.columnid == "AM_LAND_DOWN"){
        	if(e.columnid == "AM_LAND_UP" || e.columnid == "AM_LAND_DOWN"){
        		var amEnd  = (e.columnid == "AM_LAND_END"  ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_LAND_END"),0));
        		var amUp   = (e.columnid == "AM_LAND_UP"   ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_LAND_UP"),0));
        		var amDown = (e.columnid == "AM_LAND_DOWN" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "AM_LAND_DOWN"),0));

        		//당기말 금액 계산
        		this.fnAmDecCalc("AM_LAND", e.row, amEnd , amUp , amDown);
        	}
        };

        //당기말 금액 계산
        this.fnAmDecCalc = function (col, row, am_end , am_up , am_down)
        {
        	var am_dec = (am_end + am_up) - am_down;

        	this.dsList.setColumn(row, col, am_dec);		//당기말
        };

        //세대별 금액 계산
        this.fnAmCostCalc = function (row, no_House, am_Building, am_land, am_dec)
        {
        	//분양원가건물(세대별) = 건물(당기말) / 세대수
        	var am_building_cost = nexacro.Decimal(nexacro.toNumber(am_Building,0) / nexacro.toNumber(no_House,0)).trunc();
        	this.dsList.setColumn(row, "AM_BUILDING_COST", am_building_cost);	//분양원가건물(세대별)

        	//분양원가토지(세대별) = 토지(당기말) / 세대수
        	var am_land_cost = nexacro.Decimal(nexacro.toNumber(am_land,0) / nexacro.toNumber(no_House,0)).trunc();
        	this.dsList.setColumn(row, "AM_LAND_COST", am_land_cost);	//분양원가토지(세대별)

        	//분양원가상각누계액(세대별) = 상각누계액(당기말) / 세대수
        	var am_dec_cost = nexacro.Decimal(nexacro.toNumber(am_dec,0)  / nexacro.toNumber(no_House,0) ).trunc();
        	this.dsList.setColumn(row, "AM_DEC_COST", am_dec_cost);	//분양원가상각누계액(세대별)
        }

        //분양금액 계산
        this.fnAmHouseCalc = function (row, no_Sales, am_building_cost, am_land_cost, am_dec_cost)
        {
        	var amBuildingEnd  = nexacro.toNumber(this.dsList.getColumn(row, "AM_BUILDING_END"),0);
        	var amBuildingUp   = nexacro.toNumber(this.dsList.getColumn(row, "AM_BUILDING_UP"),0);

        	var amLandEnd  = nexacro.toNumber(this.dsList.getColumn(row, "AM_LAND_END"),0);
        	var amLandUp   = nexacro.toNumber(this.dsList.getColumn(row, "AM_LAND_UP"),0);

        	var amDecEnd  = nexacro.toNumber(this.dsList.getColumn(row, "AM_DEC_END"),0);
        	var amDecUp   = nexacro.toNumber(this.dsList.getColumn(row, "AM_DEC_UP"),0);


        	//건물(분양) = 건물가(세대당 원가)  * 세대수
        	var am_building_house = nexacro.round(nexacro.toNumber(am_building_cost,0) * nexacro.toNumber(no_Sales,0));
        	this.dsList.setColumn(row, "AM_BUILDING_HOUSE", am_building_house);		//건물(분양)

        	//토지(분양) = 토지가(세대당 원가)  * 세대수
        	var am_land_house = nexacro.round(nexacro.toNumber(am_land_cost,0) * nexacro.toNumber(no_Sales,0));
        	this.dsList.setColumn(row, "AM_LAND_HOUSE", am_land_house);		//토지(분양)

        	//분양상각누계액 = 분양원가상각누계액(세대별) * 세대수
        	var am_dec_house = nexacro.round(nexacro.toNumber(am_dec_cost,0) * nexacro.toNumber(no_Sales,0));
        	this.dsList.setColumn(row, "AM_DEC_HOUSE", am_dec_house);		//분양상각누계액

        	//감가상각(당기감소)
        	//var amDec     = (amDecEnd + amDecUp) - am_dec_house;
        	this.dsList.setColumn(row, "AM_DEC_DOWN", am_dec_house + nexacro.toNumber(this.dsList.getOrgColumn(row, "AM_DEC_DOWN"),0));	//감가상각(당기감소) + 원금액

        	//감가상각(상각누계액)
        	var amDec = nexacro.toNumber(this.dsList.getColumn(row, "AM_DEC_DOWN"),0); // 감가상각 당기감소
        	amDec     = amDecEnd - amDec + amDecUp;                                    // 감가상각 전기말 - 감가상각 당기감소 + 감가상각 당기삼각비
        	this.dsList.setColumn(row, "AM_DEC"		, amDec);			               //감가상각(상각누계액)

        	var amBuilding     = (amBuildingEnd + amBuildingUp) - am_building_house;
        	this.dsList.setColumn(row, "AM_BUILDING_DOWN", am_building_house);	//건물 당기감소
        	this.dsList.setColumn(row, "AM_BUILDING"	 , amBuilding);			//건물 당기말

        	var amLand 	   = (amLandEnd + amLandUp) - am_land_house;
        	this.dsList.setColumn(row, "AM_LAND_DOWN"	 , am_land_house);		//토지 당기감소
        	this.dsList.setColumn(row, "AM_LAND"	 	 , amLand);				//토지 당기말
        };

        //합계 금액 계산
        this.fnAmSumCalc = function (row, am_building_house , am_land_house , am_dec_house)
        {
        	var am_tot = am_building_house - am_dec_house + am_land_house;

        	this.dsList.setColumn(row, "AM_TOT", am_tot);		//계
        };



        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        //영업정보 조회
        this.fnDeptInfoSelect = function ()
        {
        	this.dsSelect2.clearData();
        	var nRow = this.dsSelect2.addRow();
        	this.dsSelect2.setColumn(nRow, "CD_CORP"  , this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsSelect2.setColumn(nRow, "CD_DEPT"  , this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"));
        	this.dsSelect2.setColumn(nRow, "DT_WORK"  , this.dsList.getColumn(this.dsList.rowposition, "DT_WORK"));

        	var strSvcId    = "deptInfoSelect";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_dept=dsSelect2";
        	var outData     = "dsDeptInfo=select_dept0";
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

        //자산정보 조회
        this.fnAssetInfoSelect = function ()
        {
        	this.dsSelect2.clearData();
        	var nRow = this.dsSelect2.addRow();
        	this.dsSelect2.setColumn(nRow, "CD_CORP"  , this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsSelect2.setColumn(nRow, "CD_DEPT"  , this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"));
        	this.dsSelect2.setColumn(nRow, "DT_WORK"  , this.dsList.getColumn(this.dsList.rowposition, "DT_WORK"));
        	this.dsSelect2.setColumn(nRow, "NO_SIZE"  , this.dsList.getColumn(this.dsList.rowposition, "NO_SIZE"));
        	this.dsSelect2.setColumn(nRow, "CD_ASSET" , this.dsList.getColumn(this.dsList.rowposition, "CD_ASSET"));

        	var strSvcId    = "assetInfoSelect";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_asset=dsSelect2";
        	var outData     = "dsAssetInfo=select_asset0";
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


        //자료생성/감가상각 처리
        this.fnProcCall = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclDT_WORK.form.TextBox.value)){
        		this.gfnAlert("작업월은 필수입니다.");
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
        		this.dsPrcCall.setColumn(nRow, "CD_DEPT"  , this.gfnNvl(this.ccfDEPT.form.CDTextBox.value,""));
        		this.dsPrcCall.setColumn(nRow, "DT_WORK"  , this.ctclDT_WORK.form.TextBox.value);
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
        	objDs = this.dsList;

        	if (this.gfnIsNull(this.gfnTrim(objDs.getColumn(objDs.rowposition, "CD_TRADE")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnTrim(objDs.getColumn(objDs.rowposition, "CD_TRADE"));
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        //버튼 처리
        this.fnBtnEnable = function ()
        {
        	var totCnt = 0, totSlipCnt = 0;
        	var totSlipCalc = 0, totSlipSale = 0 ;
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, this.ucFlag) != "#"){	//필터로우 제외
        			if(this.dsList.getRowLevel(i) == 0){	//소계 제외
        				if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_TRADE")) || !this.gfnIsNull(this.dsList.getColumn(i, "CD_TRADE_R"))){
        					totSlipCnt++;		//전체 전표 발행건수
        				}
        				if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_TRADE"))){
        					//if(nexacro.toNumber(objDs.getColumn(i, "NO_SALES"),0) > 0){
        						totSlipSale++;		//매출 전표 발행 건수
        					//}
        				}
        				if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_TRADE_R"))){
        					//if(nexacro.toNumber(objDs.getColumn(i, "NO_SALES"),0) == 0){
        						totSlipCalc++;		//감가 전표 발행 건수
        					//}
        				}
        				totCnt++;	//데이터 전체 건수
        			}
        		}
        	}

        	if(totSlipCnt > 0){	//전표가 발행 되었을 경우
        		//그리드 비활성
        		this.dxGrid.info = "Y";

        		this.gfnSetEnable(this.btnSearchSale, false);		//매출조회
        		this.gfnSetEnable(this.btnDataCreate, false);		//자료생성
        		this.gfnSetEnable(this.btnDataCalc, true);			//감가상각
        		this.gfnSetEnable(this.btnSearchSlip, true);		//전표조회

        		if(totSlipSale == totCnt && totSlipCalc == totCnt){	//매출/감가전표가 모두 발행되었을경우
        			cthis.dxGrid.info = "Y";

        			this.gfnSetEnable(this.btnIssueSlipSale, false);	//매출전표발행
        			this.gfnSetEnable(this.btnCancelSlipSale, false);	//매출전표취소
        			//this.gfnSetEnable(this.btnIssueSlipCalc, false);	//감가전표발행
        			//this.gfnSetEnable(this.btnCancelSlipCalc, true);	//감가전표취소
        		}else{
        			this.dxGrid.info = "N";

        			if(totSlipCalc > 0){	//감가전표 발행이 되었을경우
        				this.gfnSetEnable(this.btnIssueSlipSale, false);	//매출전표발행
        				this.gfnSetEnable(this.btnCancelSlipSale, false);	//매출전표취소
        				//this.gfnSetEnable(this.btnIssueSlipCalc, false);	//감가전표발행
        				//this.gfnSetEnable(this.btnCancelSlipCalc, true);	//감가전표취소
        			}else if(totSlipSale > 0){	//매출전표 발행이 되었을경우
        				this.gfnSetEnable(this.btnIssueSlipSale, false);	//매출전표발행
        				this.gfnSetEnable(this.btnCancelSlipSale, true);	//매출전표취소
        				//this.gfnSetEnable(this.btnIssueSlipCalc, true);	//감가전표발행
        				//this.gfnSetEnable(this.btnCancelSlipCalc, false);	//감가전표취소
        			}
        		}
        	}else{
        		//그리드 활성
        		this.dxGrid.info = "N";

        		this.gfnSetEnable(this.btnDataCreate, true);
        		this.gfnSetEnable(this.btnDataCalc, true);
        		this.gfnSetEnable(this.btnIssueSlipSale, true);
        		this.gfnSetEnable(this.btnCancelSlipSale, false);
        		//this.gfnSetEnable(this.btnIssueSlipCalc, true);
        		//this.gfnSetEnable(this.btnCancelSlipCalc, false);
        		this.gfnSetEnable(this.btnSearchSlip, false);
        		//this.gfnSetEnable(this.btnSearchSale, true);

        		if(totCnt == 0) {
        			this.gfnSetEnable(this.btnSearchSale, false);
        			this.gfnSetEnable(this.btnIssueSlipSale, false);
        			//this.gfnSetEnable(this.btnIssueSlipCalc, false);
        		}else{
        			this.gfnSetEnable(this.btnSearchSale, true);
        			this.gfnSetEnable(this.btnIssueSlipSale, true);
        			//this.gfnSetEnable(this.btnIssueSlipCalc, true);
        		}
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
        	this.dsSelectSale.setColumn(nRow, "DT_WORK"  , this.ctclDT_WORK.form.TextBox.value);
        	this.dsSelectSale.setColumn(nRow, "TY_GUBUN" , "4");	//4:임대

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
        	var objDs = this.dsList;

        	objDs.set_enableevent(false);
        	var dataCnt = 0;

        	for(var i=0;i<this.dsSale.rowcount;i++){
        		var cdAcntunit = this.gfnTrim(this.dsSale.getColumn(i, "CD_ACNTUNIT"));						//사업지코드
        		//var noSize = this.gfnTrim(this.dsSale.getColumn(i, "NO_SIZE"));							//평형
        		var noSize = nexacro.toNumber(this.dsSale.getColumn(i, "NO_SIZE"),0);						//평형
        		var amBunYangGet = nexacro.toNumber(this.dsSale.getColumn(i, "AM_BUNYANGGET"),0);			//분양금
        		var amBunYangGetOpt = nexacro.toNumber(this.dsSale.getColumn(i, "AM_BUNYANGGET_OPT"),0);	//옵션금액
        		var cntSize = nexacro.toNumber(this.dsSale.getColumn(i, "CNT_SIZE"),0);						//세대수


        		//매출데이터와 같은 사업지,동,호 데이터를 찾아서 데이터를 셋팅
        		for(var d=0;d<objDs.rowcount;d++){
        			if(this.gfnTrim(objDs.getColumn(d, "CD_DEPT")) == cdAcntunit && this.gfnTrim(objDs.getColumn(d, "NO_SIZE")) == noSize){

        				//var amBuidingDown = nexacro.toNumber(objDs.getColumn(d, "AM_BUILDING"),0);
        				//var amLandDown    = nexacro.toNumber(objDs.getColumn(d, "AM_LAND"),0);
        				var no_House      = nexacro.toNumber(objDs.getColumn(d, "NO_HOUSE"),0);		//세대수

        				var am_building_cost = nexacro.toNumber(objDs.getColumn(d, "AM_BUILDING_COST"),0);
        				var am_land_cost = nexacro.toNumber(objDs.getColumn(d, "AM_LAND_COST"),0);
        				var am_dec_cost = nexacro.toNumber(objDs.getColumn(d, "AM_DEC_COST"),0);


        				objDs.setColumn(d, this.nx_flag			, "U");					//상태값(수정)
        				objDs.setColumn(d, "AM_SALE"			, amBunYangGet);		//본계약 매출액
        				objDs.setColumn(d, "AM_OPTION"  		, amBunYangGetOpt);		//옵션 매출액
        				//objDs.setColumn(d, "AM_BUILDING_DOWN"	, amBuidingDown);		//건물(당기감소)-(기말잔액을 당기감소에 담기)
        				//objDs.setColumn(d, "AM_LAND_DOWN"		, amLandDown);			//토지(당기감소)-(기말잔액을 당기감소에 담기)
        				objDs.setColumn(d, "NO_SALES"			, cntSize);				//분양 세대수

        				//당기말 금액 계산
        				//this.fnAmDecCalc("AM_BUILDING", d, nexacro.toNumber(objDs.getColumn(d, "AM_BUILDING_END"),0) , nexacro.toNumber(objDs.getColumn(d, "AM_BUILDING_UP"),0) , amBuidingDown);
        				//this.fnAmDecCalc("AM_LAND", d, nexacro.toNumber(objDs.getColumn(d, "AM_LAND_END"),0) , nexacro.toNumber(objDs.getColumn(d, "AM_LAND_UP"),0) , amLandDown);

        				//분양금액계산
        				this.fnAmHouseCalc(d, cntSize, am_building_cost, am_land_cost, am_dec_cost);

        				//계
        				this.fnAmSumCalc(d, objDs.getColumn(d, "AM_BUILDING_HOUSE") , objDs.getColumn(d, "AM_LAND_HOUSE") , objDs.getColumn(d, "AM_DEC_HOUSE"));

        				//년간누계 조회시 오리지널 값
        				var cntYearHouse = nexacro.toNumber(objDs.getOrgColumn(d, "CNT_YEARHOUSE"),0);
        				var noSalesOrg = nexacro.toNumber(objDs.getOrgColumn(d, "NO_SALES"),0);

        				objDs.setColumn(d, "CNT_YEARHOUSE", ((cntYearHouse-noSalesOrg) + cntSize));		//년간누계
        				objDs.setColumn(d, "NO_BAL", no_House-((cntYearHouse-noSalesOrg) + cntSize));	//잔여세대수

        				var amBuildingEnd  = nexacro.toNumber(objDs.getColumn(d, "AM_BUILDING_END"),0);	//건물 전기말
        				var amLandEnd  = nexacro.toNumber(objDs.getColumn(d, "AM_LAND_END"),0);			//토지 전기말

        				var amBuildingUp  = nexacro.toNumber(objDs.getColumn(d, "AM_BUILDING_UP"),0);		//건물 당기증가
        				var amLandUp  = nexacro.toNumber(objDs.getColumn(d, "AM_LAND_UP"),0);				//토지 당기증가

        				var amBuildingDown = nexacro.toNumber(objDs.getOrgColumn(d, "AM_BUILDING_DOWN"),0);	//당기감소
        				amBuildingDown += nexacro.round((amBuildingEnd / no_House)*cntSize);	// (건물(전기말) / 세대수)*분양수
        				var amLandDown = nexacro.toNumber(objDs.getOrgColumn(d, "AM_LAND_DOWN"),0);	//당기감소
        				amLandDown += nexacro.round((amLandEnd / no_House)*cntSize);			// (토지(전기말) / 세대수)*분양수
        				objDs.setColumn(d, "AM_BUILDING_DOWN", amBuildingDown);	//건물 당기감소
        				objDs.setColumn(d, "AM_LAND_DOWN", amLandDown);			//토지 당기감소

        				//건물 당기말 금액 계산
        				this.fnAmDecCalc("AM_BUILDING", d, amBuildingEnd , amBuildingUp , amBuildingDown);
        				//토지 당기말 금액 계산
        				this.fnAmDecCalc("AM_LAND", d, amLandEnd , amLandUp , amLandDown);

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

        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm == "CD_TRADE"){
        		if(!this.gfnGridIsRow(obj)) {return false;}			//필터로우 제외
        		if(objDs.getRowLevel(e.row) > 0) {return false;}	//소계제외

        		var cdTrade = this.gfnTrim(objDs.getColumn(objDs.rowposition, "CD_TRADE")).replace(/-/gi, "");

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
        		this.gfnAlert("작업월은 필수입니다.");
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
        		this.dsPrcCall.setColumn(nRow, "DT_WORK"  , this.ctclDT_WORK.form.TextBox.value);
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
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
        };
        this.loadIncludeScript("DHA_LEASE_COST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
