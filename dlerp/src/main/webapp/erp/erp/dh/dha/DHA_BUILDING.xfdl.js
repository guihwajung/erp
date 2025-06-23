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
            this.set_titletext("건물(아파트,상가)관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_BUILDING_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_BUILDING_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_BUILDING_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_BUILDING_DELETE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHAPR_BUILDING_CREATE</Col></Row><Row><Col id=\"TARGET\">calc</Col><Col id=\"SP\">DHAPR_BUILDING_CALC</Col></Row><Row><Col id=\"TARGET\">issueSlipSale</Col><Col id=\"SP\">DHAPR_BUILDING_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlipSale</Col><Col id=\"SP\">DHAPR_BUILDING_CANCELSLIP</Col></Row><Row><Col id=\"TARGET\">issueSlipCalc</Col><Col id=\"SP\">DHAPR_BUILDING_CALC_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlipCalc</Col><Col id=\"SP\">DHAPR_BUILDING_CALC_CANCELSLIP</Col></Row><Row><Col id=\"TARGET\">selectSale</Col><Col id=\"SP\">DHAPR_DL_AMSALE_SELECT</Col></Row><Row><Col id=\"TARGET\">calcCancel</Col><Col id=\"SP\">DHAPR_BUILDING_CALC_CALCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc1", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_BUILDING_BEFOR_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_BUILDING_BEFOR_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_BUILDING_BEFOR_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_BUILDING_BEFOR_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_FR\" type=\"STRING\" size=\"256\"/><Column id=\"YM_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_DEPT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSale", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCorp","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCorp:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("사업지");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDept","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_ASSET","ccfDept:0.0","10.0","134","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("보유자산여부");
            obj.set_truevalue("S");
            obj.set_falsevalue("A");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoDATE_TYPE","ccfDept:0.0","10.0","171","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            var divSearch_form_rdoDATE_TYPE_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoDATE_TYPE_innerdataset", obj);
            divSearch_form_rdoDATE_TYPE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">작업년월</Col><Col id=\"codecolumn\">D</Col></Row><Row><Col id=\"datacolumn\">매출일자</Col><Col id=\"codecolumn\">S</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoDATE_TYPE_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_FR","rdoDATE_TYPE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTXT","ctclYM_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_TO","staTXT:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Tab("tabData","0","36",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.tabData);
            obj.set_text("아파트");
            this.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid","5","5",null,null,"5","5",null,null,null,null,this.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_autofittype("none");
            obj._setContents("");
            this.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.tabData);
            obj.set_text("아파트(분할전)");
            this.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","5",null,null,"5","5",null,null,null,null,this.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.tabData);
            obj.set_text("상가");
            this.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","5","5",null,null,"5","5",null,null,null,null,this.tabData.tab3.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.tabData);
            obj.set_text("상가(분할전)");
            this.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid4","5","5",null,null,"5","5",null,null,null,null,this.tabData.tab4.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.tabData.tab4.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ccfDept.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCorp.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.rdoDATE_TYPE","value","dsSearch","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctclYM_FR.form.TextBox","value","dsSearch","YM_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclYM_TO.form.TextBox","value","dsSearch","YM_TO");
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
        this.registerScript("DHA_BUILDING.xfdl", function() {
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

        	// 법인코드에 포커스추가
        	this.ccfCorp.form.CDTextBox.setFocus();

        	// 분할전탭 임시숨김처리
        	this.tabData.tab2.set_tabbuttonheight(1);
        	this.tabData.tab2.set_tabbuttonwidth(1);
        	this.tabData.tab4.set_tabbuttonheight(1);
        	this.tabData.tab4.set_tabbuttonwidth(1);


        	if (this.gfnIsNull(this.ccfCorp.form.CDTextBox.value)) {
        		this.ccfCorp.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCorp.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	var toDay = this.gfnGetDate().substring(0,6);
        	this.ctclYM_FR.form.TextBox.set_value(toDay);
        	this.ctclYM_TO.form.TextBox.set_value(toDay);

        	this.divSearch.form.chkYN_ASSET.set_value("A");		//보유자산 체크

        	this.rdoDATE_TYPE.set_value("D");
        	this.staTXT.set_visible(false);
        	this.ctclYM_TO.set_visible(false);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {

        };
        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDataCreate 	= this.gfnFormButtonAdd("DataCreate", "fnProcCall"); 	//자료생성 버튼
        	this.btnDataCalc 	= this.gfnFormButtonAdd("DataCalc", "fnProcCall"); 		//감가상각 버튼

        	this.btnCalcCancel 	= this.gfnFormButtonAdd("CalcCancel", "fnCalcCancel"); 		//감가상각취소 버튼

        	this.btnIssueSlipSale  = this.gfnFormButtonAdd("IssueSlipSale", "fnIssueSlip"); 	//매출 전표발행
        	this.btnCancelSlipSale = this.gfnFormButtonAdd("CancelSlipSale", "fnCancelSlip"); 	//매출 전표취소

        	this.btnIssueSlipCalc  = this.gfnFormButtonAdd("IssueSlipCalc", "fnIssueSlip"); 	//감가 전표발행
        	this.btnCancelSlipCalc = this.gfnFormButtonAdd("CancelSlipCalc", "fnCancelSlip"); 	//감가 전표취소
        	this.btnSearchSlip     = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 		//전표조회
        	this.btnSearchSale     = this.gfnFormButtonAdd("SearchSale", "fnSearchSale"); 		//매출조회

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCorp = this.divSearch.form.ccfCorp;
        	this.ccfDept = this.divSearch.form.ccfDept;
        	this.grSearch = this.FormInfo.GR_SEARCH;
        	this.dxGrid  = this.tabData.tab1.form.objGrid;
        	this.dxGrid2 = this.tabData.tab2.form.objGrid2;
        	this.dxGrid3 = this.tabData.tab3.form.objGrid3;
        	this.dxGrid4 = this.tabData.tab4.form.objGrid4;
        	this.chkYN_ASSET = this.divSearch.form.chkYN_ASSET;

        	this.rdoDATE_TYPE = this.divSearch.form.rdoDATE_TYPE;
        	this.ctclYM_FR = this.divSearch.form.ctclYM_FR;
        	this.ctclYM_TO = this.divSearch.form.ctclYM_TO;
        	this.staTXT = this.divSearch.form.staTXT;

        	this.vProcType = "CREATE";
        	this.vSlipType = "SALE";
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCorp.CodeFindName = "DHX_CFCORP";
        	this.ccfCorp.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCorp.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDept.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfDept.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_BUILDING");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.gfnGridInit(this.dxGrid2, this.dsList1, "DH", "DHA_BUILDING_BEFOR");
        	this.dxGrid2.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.gfnGridInit(this.dxGrid3, this.dsList2, "DH", "DHA_BUILDING_SHOP");
        	this.dxGrid3.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.gfnGridInit(this.dxGrid4, this.dsList3, "DH", "DHA_BUILDING_SHOP_BEFOR");
        	this.dxGrid4.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";

        	var colDS_DEPT = this.dxGrid.getBindCellIndex("body", "DS_DEPT");
        	this.dxGrid.setCellProperty("body", colDS_DEPT, "subsumtext", "소계");
        	this.dxGrid.setCellProperty("summ", colDS_DEPT, "textAlign", "center");
        	this.dxGrid.setCellProperty("summ", colDS_DEPT, "text", "총계");

        	var colDS_DEPT2 = this.dxGrid2.getBindCellIndex("body", "DS_DEPT");
        	this.dxGrid2.setCellProperty("body", colDS_DEPT2, "subsumtext", "소계");
        	this.dxGrid2.setCellProperty("summ", colDS_DEPT2, "textAlign", "center");
        	this.dxGrid2.setCellProperty("summ", colDS_DEPT2, "text", "총계");

        	var colDS_DEPT3 = this.dxGrid3.getBindCellIndex("body", "DS_DEPT");
        	this.dxGrid3.setCellProperty("body", colDS_DEPT3, "subsumtext", "소계");
        	this.dxGrid3.setCellProperty("summ", colDS_DEPT3, "textAlign", "center");
        	this.dxGrid3.setCellProperty("summ", colDS_DEPT3, "text", "총계");

        	var colDS_DEPT4 = this.dxGrid4.getBindCellIndex("body", "DS_DEPT");
        	this.dxGrid4.setCellProperty("body", colDS_DEPT4, "subsumtext", "소계");
        	this.dxGrid4.setCellProperty("summ", colDS_DEPT4, "textAlign", "center");
        	this.dxGrid4.setCellProperty("summ", colDS_DEPT4, "text", "총계");

        	// ToDo
        	// 권한체크 - 해당부서내역만 조회가능
        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 2) {
        		this.ccfCorp.set_enable(false);
        	}

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP" , "string");
        	this.dsSelect.addColumn("CD_DEPT" , "string");
        	this.dsSelect.addColumn("TY_TYPE" , "string");
        	this.dsSelect.addColumn("YN_ASSET", "string");
        	this.dsSelect.addColumn("DATE_TYPE", "string");
        	this.dsSelect.addColumn("YM_FR", "string");
        	this.dsSelect.addColumn("YM_TO", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YM_WORK", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("TY_TYPE", "string");
        	this.dsInsert.addColumn("YM_COMPLETION", "string");
        	this.dsInsert.addColumn("NO_SIZE", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("YR_LIFE", "int");
        	this.dsInsert.addColumn("RT_DEP", "double");
        	this.dsInsert.addColumn("AM_BUILDING", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LAND", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_DEC_SUM", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_DEC_BAL", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_BUILDING_UP", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_BUILDING_DOWN", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_DEC", "int");
        	this.dsInsert.addColumn("AM_DEC_DOWN", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LAND_UP", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LAND_DOWN", "BIGDECIMAL");
        	this.dsInsert.addColumn("YM_SALES", "string");
        	this.dsInsert.addColumn("YN_INST", "string");
        	this.dsInsert.addColumn("YM_REASE", "string");
        	this.dsInsert.addColumn("AM_SALE", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_OPTION", "BIGDECIMAL");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YM_WORK", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("TY_TYPE", "string");
        	this.dsUpdate.addColumn("YM_COMPLETION", "string");
        	this.dsUpdate.addColumn("NO_SIZE", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("YR_LIFE", "int");
        	this.dsUpdate.addColumn("RT_DEP", "double");
        	this.dsUpdate.addColumn("AM_BUILDING", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_LAND", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_DEC_SUM", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_DEC_BAL", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_BUILDING_UP", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_BUILDING_DOWN", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_DEC", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_DEC_DOWN", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_LAND_UP", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_LAND_DOWN", "BIGDECIMAL");
        	this.dsUpdate.addColumn("YM_SALES", "string");
        	this.dsUpdate.addColumn("YN_INST", "string");
        	this.dsUpdate.addColumn("YM_REASE", "string");
        	this.dsUpdate.addColumn("AM_SALE", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_OPTION", "BIGDECIMAL");
        	this.dsUpdate.addColumn("ID_INSERT", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");


        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YM_WORK", "string");
        	this.dsDelete.addColumn("CD_DEPT", "string");
        	this.dsDelete.addColumn("TY_TYPE", "string");
        	this.dsDelete.addColumn("NO_DONG", "string");
        	this.dsDelete.addColumn("NO_HO", "string");
        	this.dsDelete.addColumn("ID_INSERT", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");

        	this.dsPrcCall = new Dataset();
        	this.dsPrcCall.addColumn("YM_WORK", "string");
        	this.dsPrcCall.addColumn("CD_CORP", "string");
        	this.dsPrcCall.addColumn("TY_TYPE", "string");
        	this.dsPrcCall.addColumn("ID_USER", "string");

        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");			//법인코드
        	this.dsIssueSlip.addColumn("CD_DEPT", "string");			//현장코드
        	this.dsIssueSlip.addColumn("YM_WORK", "string");			//작업년월
        	this.dsIssueSlip.addColumn("CD_SITE_BH", "string");			//발행부서
        	this.dsIssueSlip.addColumn("ID_TRANS", "string");			//사용자 아이디

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_DEPT", "string");			//현장코드
        	this.dsCancelSlip.addColumn("YM_WORK", "string");			//작업년월

        	this.dsSelectSale = new Dataset();
        	this.dsSelectSale.addColumn("CD_CORP" , "string");		//법인코드
        	this.dsSelectSale.addColumn("DT_WORK" , "string");		//작업년월
        	this.dsSelectSale.addColumn("TY_GUBUN", "string");		//조회구분(1:완성주택, 2:건물, 3:리스, 4:임대)
        	this.dsSelectSale.addColumn("APT_ST_GU", "string");		//조회구분(1:아파트, 2:상가)
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	var ty_type;
        	switch(this.tabData.tabindex) {
        		case 0:
        			this.gfnGridBeforeSelect(this.dxGrid);
        			this.ty_type = "A";
        			var inProc		= "_dsProc";
        			var outData     = "dsList=select0";
        			break;
        		case 1:
        			this.gfnGridBeforeSelect(this.dxGrid2);
        			this.ty_type = "A";
        			var inProc		= "_dsProc1";
        			var outData     = "dsList1=select0";
        			break;
        		case 2:
        			this.gfnGridBeforeSelect(this.dxGrid3);
        			this.ty_type = "S";
        			var inProc		= "_dsProc";
        			var outData     = "dsList2=select0";
        			break;
        		case 3:
        			this.gfnGridBeforeSelect(this.dxGrid4);
        			this.ty_type = "S";
        			var inProc		= "_dsProc1";
        			var outData     = "dsList3=select0";
        			break;
        	}

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_TYPE"	, this.ty_type);
        	this.dsSelect.setColumn(0, "CD_CORP"	, this.ccfCorp.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "DATE_TYPE"  , this.rdoDATE_TYPE.value);
        	this.dsSelect.setColumn(0, "YM_FR"      , this.ctclYM_FR.form.TextBox.value);
        	this.dsSelect.setColumn(0, "YM_TO"     , (this.rdoDATE_TYPE.value == "S" ? this.ctclYM_TO.form.TextBox.value : ""));
        	this.dsSelect.setColumn(0, "CD_DEPT"	, this.ccfDept.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "YN_ASSET"   , this.chkYN_ASSET.value);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inData      = "select=dsSelect";
        	//var outData     = "dsList=select0";
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
        	switch(this.tabData.tabindex) {
        		case 0:
        			var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        			break;
        		case 1:
        			var nrow = this.gfnGridAdd(this.dxGrid2); // top (default), bottom, current
        			break;
        		case 2:
        			var nrow = this.gfnGridAdd(this.dxGrid3); // top (default), bottom, current
        			break;
        		case 3:
        			var nrow = this.gfnGridAdd(this.dxGrid4); // top (default), bottom, current
        			break;
        	}

        	//trace(this.btn1.forceEnabled);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var objDs, objGrid;
        	switch(this.tabData.tabindex) {
        		case 0:
        			objDs = this.dsList;
        			objGrid = this.dxGrid;
        			break;
        		case 1:
        			objDs = this.dsList1;
        			objGrid = this.dxGrid2;
        			break;
        		case 2:
        			objDs = this.dsList2;
        			objGrid = this.dxGrid3;
        			break;
        		case 3:
        			objDs = this.dsList3;
        			objGrid = this.dxGrid4;
        			break;
        	}

        	if(!this.gfnGridIsRow(objGrid)) return;

        	//전표발행된 데이터면 행삭제 불가
        	if(!this.gfnIsNull(this.gfnTrim(objDs.getColumn(objDs.rowposition, "CD_TRADE")))){
        		this.gfnAlert("전표발행된 데이터는 삭제할수 없습니다.");
        		return;
        	}

        	//전표발행된 데이터면 행삭제 불가
        	if(!this.gfnIsNull(objDs.getColumn(objDs.rowposition, "YM_SALES"))){
        		this.gfnAlert("매출 데이터는 삭제할수 없습니다.");
        		return;
        	}

        	this.gfnGridDel(objGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	var dsall;
        	var _ty_type;
        	var objGrid;
        	switch(this.tabData.tabindex) {
        		case 0:
        			this.dxGrid.updateToDataset();
        			this.dsall = "dsList";
        			this._ty_type = "A";
        			var inProc		= "_dsProc";
        			objGrid = this.dxGrid;
        			break;
        		case 1:
        			this.dxGrid2.updateToDataset();
        			this.dsall = "dsList1";
        			this._ty_type = "A";
        			var inProc		= "_dsProc1";
        			objGrid = this.dxGrid2;
        			break;
        		case 2:
        			this.dxGrid3.updateToDataset();
        			this.dsall = "dsList2";
        			this._ty_type = "S";
        			var inProc		= "_dsProc";
        			objGrid = this.dxGrid3;
        			break;
        		case 3:
        			this.dxGrid4.updateToDataset();
        			this.dsall = "dsList3";
        			this._ty_type = "S";
        			var inProc		= "_dsProc1";
        			objGrid = this.dxGrid4;
        			break;
        	}

        	if (!this.gfnGridValidate(objGrid)) return;
        	if (!this.fnDataValidate()) return;

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.objects[this.dsall].rowcount; i++) {
        		var flag = this.gfnGetFlag(this.objects[this.dsall], i);

        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "YM_WORK", this.ctclYM_FR.form.TextBox.value);
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.ccfCorp.form.CDTextBox.value);
        				this.dsInsert.setColumn(nrow, "CD_DEPT", this.objects[this.dsall].getColumn(i, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "TY_TYPE", this._ty_type);
        				this.dsInsert.setColumn(nrow, "YM_COMPLETION", this.objects[this.dsall].getColumn(i, "YM_COMPLETION"));
        				this.dsInsert.setColumn(nrow, "NO_SIZE", this.objects[this.dsall].getColumn(i, "NO_SIZE"));
        				this.dsInsert.setColumn(nrow, "NO_DONG", this.objects[this.dsall].getColumn(i, "NO_DONG"));
        				this.dsInsert.setColumn(nrow, "NO_HO", this.objects[this.dsall].getColumn(i, "NO_HO"));
        				this.dsInsert.setColumn(nrow, "YR_LIFE", this.objects[this.dsall].getColumn(i, "YR_LIFE"));
        				this.dsInsert.setColumn(nrow, "RT_DEP", this.objects[this.dsall].getColumn(i, "RT_DEP"));
        				this.dsInsert.setColumn(nrow, "AM_BUILDING", this.objects[this.dsall].getColumn(i, "AM_BUILDING"));
        				this.dsInsert.setColumn(nrow, "AM_LAND", this.objects[this.dsall].getColumn(i, "AM_LAND"));
        				this.dsInsert.setColumn(nrow, "AM_DEC_SUM", this.objects[this.dsall].getColumn(i, "AM_DEC_SUM"));
        				this.dsInsert.setColumn(nrow, "AM_DEC_BAL", this.objects[this.dsall].getColumn(i, "AM_DEC_BAL"));
        				this.dsInsert.setColumn(nrow, "AM_BUILDING_UP", this.objects[this.dsall].getColumn(i, "AM_BUILDING_UP"));
        				this.dsInsert.setColumn(nrow, "AM_BUILDING_DOWN", this.objects[this.dsall].getColumn(i, "AM_BUILDING_DOWN"));
        				this.dsInsert.setColumn(nrow, "AM_DEC", this.objects[this.dsall].getColumn(i, "AM_DEC"));
        				this.dsInsert.setColumn(nrow, "AM_DEC_DOWN", this.objects[this.dsall].getColumn(i, "AM_DEC_DOWN"));
        				this.dsInsert.setColumn(nrow, "AM_LAND_UP", this.objects[this.dsall].getColumn(i, "AM_LAND_UP"));
        				this.dsInsert.setColumn(nrow, "AM_LAND_DOWN", this.objects[this.dsall].getColumn(i, "AM_LAND_DOWN"));
        				this.dsInsert.setColumn(nrow, "YM_SALES", this.objects[this.dsall].getColumn(i, "YM_SALES"));
        				this.dsInsert.setColumn(nrow, "YN_INST", this.objects[this.dsall].getColumn(i, "YN_INST"));
        				this.dsInsert.setColumn(nrow, "YM_REASE", this.objects[this.dsall].getColumn(i, "YM_REASE"));
        				this.dsInsert.setColumn(nrow, "AM_SALE", this.objects[this.dsall].getColumn(i, "AM_SALE"));
        				this.dsInsert.setColumn(nrow, "AM_OPTION", this.objects[this.dsall].getColumn(i, "AM_OPTION"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "YM_WORK", this.objects[this.dsall].getColumn(i, "YM_WORK"));
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.ccfCorp.form.CDTextBox.value);
        				this.dsUpdate.setColumn(nrow, "CD_DEPT", this.objects[this.dsall].getColumn(i, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "TY_TYPE", this._ty_type);
        				this.dsUpdate.setColumn(nrow, "YM_COMPLETION", this.objects[this.dsall].getColumn(i, "YM_COMPLETION"));
        				this.dsUpdate.setColumn(nrow, "NO_SIZE", this.objects[this.dsall].getColumn(i, "NO_SIZE"));
        				this.dsUpdate.setColumn(nrow, "NO_DONG", this.objects[this.dsall].getColumn(i, "NO_DONG"));
        				this.dsUpdate.setColumn(nrow, "NO_HO", this.objects[this.dsall].getColumn(i, "NO_HO"));
        				this.dsUpdate.setColumn(nrow, "YR_LIFE", this.objects[this.dsall].getColumn(i, "YR_LIFE"));
        				this.dsUpdate.setColumn(nrow, "RT_DEP", this.objects[this.dsall].getColumn(i, "RT_DEP"));
        				this.dsUpdate.setColumn(nrow, "AM_BUILDING", this.objects[this.dsall].getColumn(i, "AM_BUILDING"));
        				this.dsUpdate.setColumn(nrow, "AM_LAND", this.objects[this.dsall].getColumn(i, "AM_LAND"));
        				this.dsUpdate.setColumn(nrow, "AM_DEC_SUM", this.objects[this.dsall].getColumn(i, "AM_DEC_SUM"));
        				this.dsUpdate.setColumn(nrow, "AM_DEC_BAL", this.objects[this.dsall].getColumn(i, "AM_DEC_BAL"));
        				this.dsUpdate.setColumn(nrow, "AM_BUILDING_UP", this.objects[this.dsall].getColumn(i, "AM_BUILDING_UP"));
        				this.dsUpdate.setColumn(nrow, "AM_BUILDING_DOWN", this.objects[this.dsall].getColumn(i, "AM_BUILDING_DOWN"));
        				this.dsUpdate.setColumn(nrow, "AM_DEC", this.objects[this.dsall].getColumn(i, "AM_DEC"));
        				this.dsUpdate.setColumn(nrow, "AM_DEC_DOWN", this.objects[this.dsall].getColumn(i, "AM_DEC_DOWN"));
        				this.dsUpdate.setColumn(nrow, "AM_LAND_UP", this.objects[this.dsall].getColumn(i, "AM_LAND_UP"));
        				this.dsUpdate.setColumn(nrow, "AM_LAND_DOWN", this.objects[this.dsall].getColumn(i, "AM_LAND_DOWN"));
        				this.dsUpdate.setColumn(nrow, "YM_SALES", this.objects[this.dsall].getColumn(i, "YM_SALES"));
        				this.dsUpdate.setColumn(nrow, "YN_INST", this.objects[this.dsall].getColumn(i, "YN_INST"));
        				this.dsUpdate.setColumn(nrow, "YM_REASE", this.objects[this.dsall].getColumn(i, "YM_REASE"));
        				this.dsUpdate.setColumn(nrow, "AM_SALE", this.objects[this.dsall].getColumn(i, "AM_SALE"));
        				this.dsUpdate.setColumn(nrow, "AM_OPTION", this.objects[this.dsall].getColumn(i, "AM_OPTION"));
        				this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "YM_WORK", this.ctclYM_FR.form.TextBox.value);
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.ccfCorp.form.CDTextBox.value);
        				this.dsDelete.setColumn(nrow, "CD_DEPT", this.objects[this.dsall].getColumn(i, "CD_DEPT"));
        				this.dsDelete.setColumn(nrow, "TY_TYPE", this._ty_type);
        				this.dsDelete.setColumn(nrow, "NO_DONG", this.objects[this.dsall].getColumn(i, "NO_DONG"));
        				this.dsDelete.setColumn(nrow, "NO_HO", this.objects[this.dsall].getColumn(i, "NO_HO"));
        				this.dsDelete.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	//var inProc		= "_dsProc";
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
        	switch(this.tabData.tabindex) {
        		case 0:
        			this.gfnExcelExport(this.dxGrid);
        			break;
        		case 1:
        			this.gfnExcelExport(this.dxGrid2);
        			break;
        		case 2:
        			this.gfnExcelExport(this.dxGrid3);
        			break;
        		case 3:
        			this.gfnExcelExport(this.dxGrid4);
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
        	if (this.gfnIsNull(this.ccfCorp.form.CDTextBox.text)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCorp.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드는 필수입니다.");
        	}


        	if(this.rdoDATE_TYPE.value == "S"){
        		if(this.gfnIsNull(this.ctclYM_FR.form.TextBox.value)){
        			this.gfnAlert("매출일자(시작일)은 필수입니다.");
        			this.ctclYM_FR.form.TextBox.setFocus();
        			validate = false;
        		}

        		if(this.gfnIsNull(this.ctclYM_TO.form.TextBox.value)){
        			this.gfnAlert("매출일자(종료일)은 필수입니다.");
        			this.ctclYM_TO.form.TextBox.setFocus();
        			validate = false;
        		}

        		if(this.gfnGetDiffDate(this.ctclYM_FR.form.TextBox.value + "01", this.ctclYM_TO.form.TextBox.value + "01") <= -1){
        			this.gfnAlert("매출일자의 시작일은 종료일보다 작아야 합니다.");
        			this.ctclYM_FR.form.TextBox.setFocus();
        			validate = false;
        		}
        	}else{
        		if(this.gfnIsNull(this.ctclYM_FR.form.TextBox.value)){
        			this.gfnAlert("작업년월은 필수입니다.");
        			this.ctclYM_FR.form.TextBox.setFocus();
        			validate = false;
        		}
        	}

        	return validate;
        };

        this.fnDataValidate = function(){
        	var objDs, objGrid;
        	switch(this.tabData.tabindex) {
        		case 0:
        			objDs = this.dsList;
        			objGrid = this.dxGrid;
        			break;
        		case 1:
        			objDs = this.dsList1;
        			objGrid = this.dxGrid2;
        			break;
        		case 2:
        			objDs = this.dsList2;
        			objGrid = this.dxGrid3;
        			break;
        		case 3:
        			objDs = this.dsList3;
        			objGrid = this.dxGrid4;
        			break;
        	}

        	for(var i=0;i<objDs.rowcount;i++){
        		if(this.gfnGetFlag(objDs, i) == "I" || this.gfnGetFlag(objDs, i) == "U"){
        			var amBuildingDown = nexacro.toNumber(objDs.getColumn(i, "AM_LAND_DOWN"),0);	//당기감소
        			var amEndBal       = nexacro.toNumber(objDs.getColumn(i, "AM_LAND_BAL"),0);		//기말잔액
        			if(amBuildingDown > 0 && amEndBal == 0){
        				if(this.gfnIsNull(objDs.getColumn(i, "YN_INST"))){
        					this.gfnAlert("사업지["+objDs.getColumn(i, "DS_DEPT")+"] 매출구분은 필수입력입니다.");
        					return false;
        				}

        				if(this.gfnIsNull(objDs.getColumn(i, "YM_SALES")) && this.gfnIsNull(objDs.getColumn(i, "YM_REASE"))){
        					this.gfnAlert("사업지["+objDs.getColumn(i, "DS_DEPT")+"] 매출일자 또는 임대개시일은 필수입력입니다.");
        					return false;
        				}
        			}
        		}
        	}

        	return true;
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		var tabIdx = this.tabData.tabindex;
        		var objDs, objGrid;
        		switch(tabIdx) {
        			case 0:
        				objDs = this.dsList;
        				objGrid = this.dxGrid;
        				break;
        			case 1:
        				objDs = this.dsList1;
        				objGrid = this.dxGrid2;
        				break;
        			case 2:
        				objDs = this.dsList2;
        				objGrid = this.dxGrid3;
        				break;
        			case 3:
        				objDs = this.dsList3;
        				objGrid = this.dxGrid4;
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
        	if (id == "ccfCorp") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	if (id == "ccfDept") {
        		var cdCorp = this.ccfCorp.form.CDTextBox.text;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "02");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {
        		case "ccfCorp":	//법인코드
        			this.ccfDept.form.fnCodeFindClear();
        		break;
        	}
        }

        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id) {
        	case "DHX_CFACNTUNIT": // 귀속부서코드
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "0000000");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorp.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "02");
        		break;
        	default:
        	}

        	return true;
        }


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        // this.ccfDept_AfterCDTextChanged = function(id) {
        // 	if(e.oldvalue != e.newvalue) {
        // 		this.gfnSetFormStatus(this);	// 폼상태 초기화
        // 		this.gfnGridClear(this.dxGrid);
        // 		this.gfnGridClear(this.dxGrid2);
        // 		this.gfnGridClear(this.dxGrid3);
        // 		this.gfnGridClear(this.dxGrid4);
        // 	}
        // };


        this.ccfCorp_AfterCDTextChanged = function(id) {
        // 	var arr = this.ccfCorp.form.SelectedData;
        //
        // 	if (arr.length > 0) {
        // 		var cd_system = arr[0]["CD_SYSTEM"];
        // 		var ds_system = arr[0]["DS_SYSTEM"];
        // 		var cd_module = arr[0]["CD_MODULE"];
        // 		var ds_module = arr[0]["DS_MODULE"];
        // 	}
        };

        this.fnDetail = function(obj,e) {
        }

        this.fnDetailCallback = function(strId, val) {
        };

        this.divData_tabData_onchanged = function(obj,e)
        {
        	//this.fnSelect();
        	this.FormBtns.Select.click();
        };

        this.dsList_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "YM_SALES" || e.columnid == "YM_REASE"){	//매출일자/임대개시일
        		if(!this.gfnIsNull(this.ctclYM_FR.value) && !this.gfnIsNull(e.newvalue)){
        			if(e.newvalue.substr(0,6) != this.ctclYM_FR.value){
        				this.gfnAlert("작업년월과 같은 년월만 입력가능합니다.");
        				return false;
        			}
        		}
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	//건물-기말잔액 합
        	if(e.columnid == "AM_BUILDING" || e.columnid == "AM_BUILDING_UP" || e.columnid == "AM_BUILDING_DOWN") {
        		var am_building_sum = (nexacro.toNumber(this.gfnNvl(obj.getColumn(e.row, "AM_BUILDING"),0),0) +
        							  nexacro.toNumber(this.gfnNvl(obj.getColumn(e.row, "AM_BUILDING_UP"),0),0)) -
        							  nexacro.toNumber(this.gfnNvl(obj.getColumn(e.row, "AM_BUILDING_DOWN"),0),0);
        		obj.setColumn(e.row, "AM_BUILDING_BAL", am_building_sum);
        	}
        	//감가상각누계액-상각누계액 합
        	if(e.columnid == "AM_DEC_SUM" || e.columnid == "AM_DEC" || e.columnid == "AM_DEC_DOWN") {
        		var am_dec_sum = (nexacro.toNumber(this.gfnNvl(obj.getColumn(e.row, "AM_DEC_SUM"),0),0) +
        					     nexacro.toNumber(this.gfnNvl(obj.getColumn(e.row, "AM_DEC"),0),0)) -
        						 nexacro.toNumber(this.gfnNvl(obj.getColumn(e.row, "AM_DEC_DOWN"),0),0);
        		obj.setColumn(e.row, "AM_DEP_SUM", am_dec_sum);
        	}
        	//감가상각누계액-당기말미상각잔액 합
        	if(e.columnid == "AM_BUILDING_BAL" || e.columnid == "AM_DEC" || e.columnid == "AM_DEC_DOWN") {
        		var am_dec_sum = nexacro.toNumber(this.gfnNvl(obj.getColumn(e.row, "AM_BUILDING_BAL"),0),0) -
        						 nexacro.toNumber(this.gfnNvl(obj.getColumn(e.row, "AM_DEP_SUM"),0),0);
        		obj.setColumn(e.row, "AM_DEP_BAL", am_dec_sum);
        	}
        	//토지-기말잔액 합
        	if(e.columnid == "AM_LAND" || e.columnid == "AM_LAND_UP" || e.columnid == "AM_LAND_DOWN") {
        		var am_land_sum = (nexacro.toNumber(this.gfnNvl(obj.getColumn(e.row, "AM_LAND"),0),0) +
        					      nexacro.toNumber(this.gfnNvl(obj.getColumn(e.row, "AM_LAND_UP"),0),0)) -
        						  nexacro.toNumber(this.gfnNvl(obj.getColumn(e.row, "AM_LAND_DOWN"),0),0);
        		obj.setColumn(e.row, "AM_LAND_BAL", am_land_sum);
        	}

        };

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);
        		this.gfnGridClear(this.dxGrid3);
        		this.gfnGridClear(this.dxGrid4);
        	}
        };

        //자료생성/감가상각 처리
        this.fnProcCall = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCorp.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCorp.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclYM_FR.form.TextBox.value)){
        		this.gfnAlert("작업년월은 필수입니다.");
        		this.ctclYM_FR.form.TextBox.setFocus();
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
        		var tyType = "";
        		switch(this.tabData.tabindex) {
        			case 0:
        			case 1:
        				tyType = "A";
        				break;
        			case 2:
        			case 3:
        				tyType = "S";
        				break;
        		}

        		this.dsPrcCall.clearData();
        		var nRow = this.dsPrcCall.addRow();

        		//처리할 데이터 담기
        		this.dsPrcCall.setColumn(nRow, "CD_CORP"  , this.ccfCorp.form.CDTextBox.value);
        		this.dsPrcCall.setColumn(nRow, "YM_WORK"  , this.ctclYM_FR.form.TextBox.value);
        		this.dsPrcCall.setColumn(nRow, "TY_TYPE"  , tyType);
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
        	if(this.tabData.tabindex == 1 || this.tabData.tabindex == 3) {
        		return;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.ccfCorp.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCorp.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(this.ctclYM_FR.form.TextBox.value))){
        		this.gfnAlert("작업년월은 필수입니다.");
        		this.ctclYM_FR.form.TextBox.setFocus();
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
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"		, this.ccfCorp.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT"		, this.gfnNvl(this.ccfDept.form.CDTextBox.value,""));
        		this.dsIssueSlip.setColumn(nRow, "YM_WORK"		, this.ctclYM_FR.form.TextBox.value);
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
        // 	if (this.gfnIsNull(this.gfnTrim(this.ccfDept.form.CDTextBox.value))) {
        // 		this.gfnAlert("사업지코드는 필수입니다.");
        // 		this.ccfDept.form.CDTextBox.setFocus();
        // 		return;
        // 	}

        	if(this.gfnIsNull(this.gfnTrim(this.ctclYM_FR.form.TextBox.value))){
        		this.gfnAlert("작업년월은 필수입니다.");
        		this.ctclYM_FR.form.TextBox.setFocus();
        		return;
        	}

        	var objDs;
        	switch(this.tabData.tabindex) {
        		case 0:
        			objDs = this.dsList;
        			break;
        		case 1:
        			return;
        			break;
        		case 2:
        			objDs = this.dsList2;
        			break;
        		case 3:
        			return;
        			break;
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
        		switch(this.tabData.tabindex) {
        			case 0:
        				objDs = this.dsList;
        				break;
        			case 1:
        				return;
        				break;
        			case 2:
        				objDs = this.dsList2;
        				break;
        			case 3:
        				return;
        				break;
        		}

        		//처리할 데이터 담기
        		this.dsCancelSlip.setColumn(nRow, "CD_DEPT"		, this.gfnNvl(this.ccfDept.form.CDTextBox.value,""));
        		this.dsCancelSlip.setColumn(nRow, "YM_WORK"		, this.ctclYM_FR.form.TextBox.value);

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
        	switch(this.tabData.tabindex) {
        		case 0:
        			objDs = this.dsList;
        			break;
        		case 1:
        			return;
        			break;
        		case 2:
        			objDs = this.dsList2;
        			break;
        		case 3:
        			return;
        			break;
        	}

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
        this.fnBtnEnable = function (objDs)
        {
        	var totCnt = 0, totSlipCnt = 0;
        	var totSlipCalc = 0, totSlipSale = 0 ;
        	for(var i=0;i<objDs.rowcount;i++){
        		if(objDs.getColumn(i, this.ucFlag) != "#"){	//필터로우 제외
        			if(objDs.getRowLevel(i) == 0){	//소계 제외
        				if(!this.gfnIsNull(objDs.getColumn(i, "CD_TRADE"))){
        					totSlipCnt++;		//전체 전표 발행건수

        					if(!this.gfnIsNull(objDs.getColumn(i, "YM_SALES"))){
        						totSlipSale++;		//매출 건수
        					}else{
        						totSlipCalc++;		//감가 건수
        					}
        				}
        				totCnt++;	//데이터 전체 건수
        			}
        		}
        	}

        	trace("## totCnt :: "+totCnt);
        	trace("## totSlipCnt :: "+totSlipCnt);
        	trace("## 매출 전표 발행 건수 :: "+totSlipSale);
        	trace("## 감가 전표 발행 건수 :: "+totSlipCalc);

        	if(totSlipCnt > 0){	//전표가 발행 되었을 경우
        		//그리드 비활성
        		this.dxGrid.info = "Y";
        		this.dxGrid2.info = "Y";
        		this.dxGrid3.info = "Y";
        		this.dxGrid4.info = "Y";

        		this.gfnSetEnable(this.btnSearchSale, false);		//매출조회
        		this.gfnSetEnable(this.btnDataCreate, false);		//자료생성
        		this.gfnSetEnable(this.btnDataCalc, true);			//감가상각

        		if(totCnt == totSlipCnt){	//전표가 전부 발행되었을경우
        			this.gfnSetEnable(this.btnSearchSlip, true);		//전표조회
        			this.gfnSetEnable(this.btnIssueSlipSale, false);	//매출전표발행
        			this.gfnSetEnable(this.btnCancelSlipSale, true);	//매출전표취소
        			this.gfnSetEnable(this.btnIssueSlipCalc, false);	//감가전표발행
        			this.gfnSetEnable(this.btnCancelSlipCalc, true);	//감가전표취소
        		}else{
        			//매출데이터만 전표 발행되었을경우
        			if(totSlipSale > 0 && totSlipCalc == 0){
        				this.gfnSetEnable(this.btnSearchSlip, true);		//전표조회
        				this.gfnSetEnable(this.btnIssueSlipSale, false);	//매출전표발행
        				this.gfnSetEnable(this.btnCancelSlipSale, true);	//매출전표취소
        				this.gfnSetEnable(this.btnIssueSlipCalc, true);	//감가전표발행
        				this.gfnSetEnable(this.btnCancelSlipCalc, false);	//감가전표취소
        			}
        			//감가데이터만 전표 발행되었을경우
        			if(totSlipSale == 0 && totSlipCalc > 0){
        				this.gfnSetEnable(this.btnSearchSlip, true);		//전표조회
        				this.gfnSetEnable(this.btnIssueSlipSale, true);		//매출전표발행
        				this.gfnSetEnable(this.btnCancelSlipSale, false);	//매출전표취소
        				this.gfnSetEnable(this.btnIssueSlipCalc, false);	//감가전표발행
        				this.gfnSetEnable(this.btnCancelSlipCalc, true);	//감가전표취소
        			}
        		}
        	}else{
        		//그리드 활성
        		this.dxGrid.info = "N";
        		this.dxGrid2.info = "N";
        		this.dxGrid3.info = "N";
        		this.dxGrid4.info = "N";

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

        };

        //매출 조회
        this.fnSearchSale = function (obj,e)
        {
        	if(this.tabData.tabindex == 1 || this.tabData.tabindex == 3) {
        		return;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.ccfCorp.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCorp.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(this.ctclYM_FR.form.TextBox.value))){
        		this.gfnAlert("작업년월은 필수입니다.");
        		this.ctclYM_FR.form.TextBox.setFocus();
        		return;
        	}

        	var aptStGu = "1";
        	if(this.tabData.tabindex == 2){
        		aptStGu = "2";
        	}

        	this.dsSelectSale.clearData();
        	var nRow = this.dsSelectSale.addRow();
        	this.dsSelectSale.setColumn(nRow, "CD_CORP"  , this.ccfCorp.form.CDTextBox.value);
        	this.dsSelectSale.setColumn(nRow, "DT_WORK"  , this.ctclYM_FR.form.TextBox.value);
        	this.dsSelectSale.setColumn(nRow, "TY_GUBUN" , "2");		//2:건물
        	this.dsSelectSale.setColumn(nRow, "APT_ST_GU", aptStGu);	//조회구분(1:아파트, 2:상가)


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
        	switch(this.tabData.tabindex) {
        		case 0:
        			objDs = this.dsList;
        			break;
        		case 2:
        			objDs = this.dsList2;
        			break;
        	}

        	objDs.set_enableevent(false);

        	var dataCnt = 0;
        	for(var i=0;i<this.dsSale.rowcount;i++){
        		var cdAcntunit = this.gfnTrim(this.dsSale.getColumn(i, "CD_ACNTUNIT"));						//사업지코드
        		var noDong = this.gfnTrim(this.dsSale.getColumn(i, "NO_DONG"));								//동
        		var noHo   = this.gfnTrim(this.dsSale.getColumn(i, "NO_HO"));								//호
        		var dtReceipt = this.gfnTrim(this.dsSale.getColumn(i, "DT_RECEIPT"));						//매출일자
        		var amBunYangGet = nexacro.toNumber(this.dsSale.getColumn(i, "AM_BUNYANGGET"),0);			//분양금
        		var amBunYangGetOpt = nexacro.toNumber(this.dsSale.getColumn(i, "AM_BUNYANGGET_OPT"),0);	//옵션금액
        		var cdYN_INST = this.gfnTrim(this.dsSale.getColumn(i, "YN_HALBU"));							//매출구분

        		//매출데이터와 같은 사업지,동,호 데이터를 찾아서 데이터를 셋팅
        		for(var d=0;d<objDs.rowcount;d++){
        			if(this.gfnTrim(objDs.getColumn(d, "CD_DEPT")) == cdAcntunit &&
        			   this.gfnTrim(objDs.getColumn(d, "NO_DONG")) == noDong &&
        			   this.gfnTrim(objDs.getColumn(d, "NO_HO"))   == noHo){

        				var amBuidingDown = nexacro.toNumber(objDs.getColumn(d, "AM_BUILDING_BAL"),0);
        				var amLandDown = nexacro.toNumber(objDs.getColumn(d, "AM_LAND_BAL"),0);
        				var amDecDown = nexacro.toNumber(objDs.getColumn(d, "AM_DEC_IWOL"),0);

        				var amBuidingBal = (nexacro.toNumber(this.gfnNvl(objDs.getColumn(d, "AM_BUILDING"),0),0) +
        								  nexacro.toNumber(this.gfnNvl(objDs.getColumn(d, "AM_BUILDING_UP"),0),0)) - amBuidingDown;

        				var amLandBal = (nexacro.toNumber(this.gfnNvl(objDs.getColumn(d, "AM_LAND"),0),0) +
        								  nexacro.toNumber(this.gfnNvl(objDs.getColumn(d, "AM_LAND_UP"),0),0)) - amLandDown;

        				objDs.setColumn(d, this.nx_flag	        , "U");					//상태값(수정)
        				objDs.setColumn(d, "YM_SALES"			, dtReceipt);			//매출일자
        				objDs.setColumn(d, "YN_INST"		 	, cdYN_INST);			//매출구분
        				objDs.setColumn(d, "AM_SALE"		 	, amBunYangGet);		//본계약 매출액
        				objDs.setColumn(d, "AM_OPTION"		 	, amBunYangGetOpt);		//옵션 매출액
        				objDs.setColumn(d, "AM_BUILDING_DOWN"	, amBuidingDown);		//건물(당기감소)
        				objDs.setColumn(d, "AM_BUILDING_BAL"	, amBuidingBal);		//건물(기말잔액)
        				objDs.setColumn(d, "AM_LAND_DOWN"		, amLandDown);			//토지(당기감소)
        				objDs.setColumn(d, "AM_LAND_BAL"		, amLandBal);			//토지(기말잔액)
        				objDs.setColumn(d, "AM_DEC_DOWN"		, amDecDown);			//감가상각누계액(당기감소)
        				objDs.setColumn(d, "AM_DEP_SUM"			, 0);					//감가상각누계액(상각누계액)
        				objDs.setColumn(d, "AM_DEP_BAL"			, 0);					//감가상각누계액(당기말미상각잔액)

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

        this.divSearch_rdoDATE_TYPE_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "S"){
        		this.staTXT.set_visible(true);
        		this.ctclYM_TO.set_visible(true);
        	}else{
        		this.staTXT.set_visible(false);
        		this.ctclYM_TO.set_visible(false);
        	}
        };

        this.fnGrid_oncelldblclick = function(obj,e)
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
        	if(this.tabData.tabindex == 1 || this.tabData.tabindex == 3) {
        		return;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.ccfCorp.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCorp.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(this.ctclYM_FR.form.TextBox.value))){
        		this.gfnAlert("작업년월은 필수입니다.");
        		this.ctclYM_FR.form.TextBox.setFocus();
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
        		this.dsPrcCall.setColumn(nRow, "CD_CORP"  , this.ccfCorp.form.CDTextBox.value);
        		this.dsPrcCall.setColumn(nRow, "YM_WORK"  , this.ctclYM_FR.form.TextBox.value);
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
            this.divSearch.form.rdoDATE_TYPE.addEventHandler("onitemchanged",this.divSearch_rdoDATE_TYPE_onitemchanged,this);
            this.divSearch.form.staTXT.addEventHandler("onclick",this.Common_onclick,this);
            this.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.tabData.tab1.form.objGrid.addEventHandler("oncelldblclick",this.fnGrid_oncelldblclick,this);
            this.tabData.tab2.form.objGrid2.addEventHandler("oncelldblclick",this.fnGrid_oncelldblclick,this);
            this.tabData.tab3.form.objGrid3.addEventHandler("oncelldblclick",this.fnGrid_oncelldblclick,this);
            this.tabData.tab4.form.objGrid4.addEventHandler("oncelldblclick",this.fnGrid_oncelldblclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsList1.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList1.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsList2.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList2.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsList3.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList3.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("DHA_BUILDING.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
