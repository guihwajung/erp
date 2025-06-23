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
            this.set_titletext("분양수입관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHMPR_COST_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DHMPR_COST_BUNYANG_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DHMPR_COST_PROGRATE_SELECT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DHMPR_COST_DIVIDE_SELECT</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DHMPR_COST_CALC_SELECT</Col></Row><Row><Col id=\"SP\">DHMPR_COST_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"SP\">DHMPR_COST_UPDATE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"SP\">DHMPR_COST_DELETE</Col><Col id=\"TARGET\">delete</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHMPR_COST_BUNYANG_CREATE</Col></Row><Row><Col id=\"TARGET\">update2</Col><Col id=\"SP\">DHMPR_COST_BUNYANG_UPDATE</Col></Row><Row><Col id=\"SP\">DHMPR_COST_CALC_CDTRADE</Col><Col id=\"TARGET\">selectCdSlip</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHMPR_COST_CALC_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHMPR_COST_CALC_CANCELSLIP</Col></Row><Row><Col id=\"TARGET\">sitedelete</Col><Col id=\"SP\">DHAPR_COST_ALL_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList5", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2Sub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCdSlip", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_MAGAM","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","ctclYM_MAGAM:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta01:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCDSLIP","ctclYM_MAGAM:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCD_SLIP","staCDSLIP:0.0","10.0","152","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_enable("false");
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
            obj.set_text("총공사예정원가");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("분양현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","10","5",null,null,"5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ew-resize");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","31",null,null,"divSplitter:5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGrid2Sub","divSplitter:5","31",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staGridTitle2","divSplitter:6","4",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("4");
            obj.set_text("진행율 계산을 위한 총공사예정원가 배분");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staGridTitle1","5","4","49.69%","22",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("3");
            obj.set_text("분양현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("작업진행율 계산");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("배분(공사원가,용지비)");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid4","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("매출액 계산");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid5","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_MAGAM.form.TextBox","value","dsSearch","YM_MAGAM");
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
        this.registerScript("DHM_COST.xfdl", function() {
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

        	this.ccfCD_CORP.setFocus();
        	//작업년월(현재월)
        	this.ctclYM_MAGAM.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        	//법인코드 세션에 코드로 셋팅
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
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
            this.btnBunYangDelete = this.gfnFormButtonAdd("BunYangDelete", "fnBunYangDelete"); 	//자체공사 삭제 버튼
        	this.btnBunYangCreate = this.gfnFormButtonAdd("BunYangCreate", "fnBunYangCreate"); 	//자체공사 계산 버튼
        	this.btnSearchSlip    = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 		//전표조회 버튼
        	this.btnIssueSlip     = this.gfnFormButtonAdd("IssueSlip" , "fnIssueSlip"); 		//전표발행 버튼
        	this.btnCancelSlip    = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 		//전표취소 버튼
        	this.btnOpenAcnt      = this.gfnFormButtonAdd("OpenAcnt", "fnOpenAcnt");			//계정코드별 명세서
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid  = this.divData.form.tabData.tab1.form.objGrid;
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;
        	this.dxGrid2Sub = this.divData.form.tabData.tab2.form.objGrid2Sub;
        	this.dxGrid3 = this.divData.form.tabData.tab3.form.objGrid3;
        	this.dxGrid4 = this.divData.form.tabData.tab4.form.objGrid4;
        	this.dxGrid5 = this.divData.form.tabData.tab5.form.objGrid5;
        	this.ccfCD_CORP  = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_SITE  = this.divSearch.form.ccfCD_SITE;
        	this.ctclYM_MAGAM = this.divSearch.form.ctclYM_MAGAM;

        	this.edtCD_SLIP = this.divSearch.form.edtCD_SLIP;
        	this.tabData = this.divData.form.tabData;

        	this.postTabIndex = 0;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_SITE.CodeFindName = "DHX_CFACNTUNIT_BUN";
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid	, this.dsList	 , "DH", "DHM_COST");
        	this.gfnGridInit(this.dxGrid2	, this.dsList2	 , "DH", "DHM_COST_BUNYANG");
        	this.gfnGridInit(this.dxGrid2Sub, this.dsList2Sub, "DH", "DHM_COST_BAEBUN");
        	this.gfnGridInit(this.dxGrid3	, this.dsList3	 , "DH", "DHM_COST_PROGRATE");
        	this.gfnGridInit(this.dxGrid4	, this.dsList4	 , "DH", "DHM_COST_DIVIDE");
        	this.gfnGridInit(this.dxGrid5	, this.dsList5	 , "DH", "DHM_COST_CALC");

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	//******************* TAb1 총공사예정원가 ***********************//
        	//합계 용지비 제외 처리
        	this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "AM_COST"), "text", "expr:dataset.getCaseSum('CD_CODE !=\"99\"', 'AM_COST')");
        	this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "DS_CODE"), "text", "합계");
        	this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "DS_CODE"), "textAlign", "center");

        	//******************* TAb2 분양현황 ***********************//
        	//분양현황 그리드 소계에 합계 텍스트 처리
        	this.dxGrid2.setCellProperty("body", this.dxGrid2.getBindCellIndex("body", "GUBUN2"), "subsumtext", "합계");
        	//분양현황 그리드 구분 병합
        	this.dxGrid2.mergeContentsCell("head", 0, 1, 0, 2, 1, false);

        	//진행률 그리드 총계 포맷 처리
        	var colSZ_BUILDING = this.dxGrid2Sub.getBindCellIndex("body", "SZ_BUILDING");
        	this.dxGrid2Sub.setCellProperty("body", colSZ_BUILDING, "maskeditformat", "expr:F_TYPE == 'M' ? '#,##0.0000' : F_TYPE == 'R' ? '#,##0.0000000' : '#,###'");

        	//진행률 그리드 아파트 포맷 처리
        	var colSZ_BUILDING_APART = this.dxGrid2Sub.getBindCellIndex("body", "SZ_BUILDING_APART");
        	this.dxGrid2Sub.setCellProperty("body", colSZ_BUILDING_APART, "maskeditformat", "expr:F_TYPE == 'M' ? '#,##0.0000' : F_TYPE == 'R' ? '#,##0.0000000' : '#,###'");

        	//진행률 그리드 상가 포맷 처리
        	var colSZ_BUILDING_SHOP = this.dxGrid2Sub.getBindCellIndex("body", "SZ_BUILDING_SHOP");
        	this.dxGrid2Sub.setCellProperty("body", colSZ_BUILDING_SHOP, "maskeditformat", "expr:F_TYPE == 'M' ? '#,##0.0000' : F_TYPE == 'R' ? '#,##0.0000000' : '#,###'");

        	//******************* TAb3 작업진행율계산 ***********************//
        	//작업진행율계산 탭 그리드
        	this.dxGrid3.setCellProperty("body", this.dxGrid3.getBindCellIndex("body", "TY_GUBUN"), "subsumtext", "소계");
        	//this.dxGrid3.setCellProperty("body", this.dxGrid3.getBindCellIndex("body", "RT_PROC"), "subsumtext", "expr:comp.parent.parent.parent.parent.parent.parent.fnSetRtProcSubSum(dataset, rowidx)");

        	this.dxGrid3.setCellProperty("summ", this.dxGrid3.getBindCellIndex("body", "RT_PROC"), "maskeditformat", "");
        	this.dxGrid3.setCellProperty("summ", this.dxGrid3.getBindCellIndex("body", "TY_GUBUN"), "text", "합계");
        	this.dxGrid3.setCellProperty("summ", this.dxGrid3.getBindCellIndex("body", "TY_GUBUN"), "textAlign", "center");

        	//******************* TAb4 배분(공사원가,용지) ***********************//
        	//그리드 구분 병합
        	this.dxGrid4.mergeContentsCell("head", 0, 1, 0, 2, 1, false);
        	this.dxGrid4.setCellProperty("body", this.dxGrid4.getBindCellIndex("body", "GUBUN2"), "subsumtext", "합계");

        	//******************* TAb5 매출액의 계산 ***********************//
        	this.dxGrid5.mergeContentsCell("head", 0, 1, 0, 3, 1, false);
        	this.dxGrid5.setCellProperty("body", this.dxGrid5.getBindCellIndex("body", "GUBUN3"), "subsumtext", "합계");
        	//this.dxGrid5.mergeCell(2, 3, 0, 2);
        	//this.dxGrid5.mergeContentsCell("body", 0, 2, 2, 3, 2, false);
        };

        //작업진행율계산 탭 그리드 진행율 소계 계산
        this.fnSetRtProcSubSum = function (objDs, row)
        {
        	var rtProcSubSum = "";
        	if(objDs.getColumn(row, "SRT") == "1"){
        		var amSum  = nexacro.toNumber(objDs.getColumn(row, "AM_SUM"),0);	//합계
        		var amCost = nexacro.toNumber(objDs.getColumn(row, "AM_COST"),0);	//총공사예정비
        		var rtCalc = nexacro.Decimal(nexacro.round(((amSum/amCost)*100),4));

        		var intRtProcSubSum = 0;
        		if(!rtCalc.isInfinity()){
        			intRtProcSubSum = rtCalc.toFixed(4);
        		}

        		//rtProcSubSum = intRtProcSubSum.toString() + "%";
        		rtProcSubSum = intRtProcSubSum;
        	}

        	return rtProcSubSum;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_MAGAM", "string");

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("CD_CORP", "string");
        	this.dsSelect2.addColumn("CD_SITE", "string");
        	this.dsSelect2.addColumn("DT_WORK", "string");
        	this.dsSelect2.addColumn("TY_TYPE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YM_MAGAM", "string");
        	this.dsInsert.addColumn("CD_CORP" , "string");
        	this.dsInsert.addColumn("CD_SITE" , "string");
        	this.dsInsert.addColumn("CD_CODE" , "string");
        	this.dsInsert.addColumn("DS_CODE" , "string");
        	this.dsInsert.addColumn("AM_COST" , "BIGDECIMAL");
        	this.dsInsert.addColumn("ID_USER" , "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YM_MAGAM", "string");
        	this.dsUpdate.addColumn("CD_CORP" , "string");
        	this.dsUpdate.addColumn("CD_SITE" , "string");
        	this.dsUpdate.addColumn("CD_CODE" , "string");
        	this.dsUpdate.addColumn("DS_CODE" , "string");
        	this.dsUpdate.addColumn("AM_COST" , "BIGDECIMAL");
        	this.dsUpdate.addColumn("ID_USER" , "string");

        	this.dsUpdate2 = new Dataset();
        	this.dsUpdate2.addColumn("CD_CORP" 		, "string");
        	this.dsUpdate2.addColumn("YM_MAGAM"		, "string");
        	this.dsUpdate2.addColumn("CD_SITE" 		, "string");
        	this.dsUpdate2.addColumn("YN_BUNYANG" 	, "string");
        	this.dsUpdate2.addColumn("TY_GUBUN" 	, "string");
        	this.dsUpdate2.addColumn("SZ_BUILDING"  , "BIGDECIMAL");
        	this.dsUpdate2.addColumn("SZ_LAND" 		, "BIGDECIMAL");
        	this.dsUpdate2.addColumn("AM_BUNYANG" 	, "BIGDECIMAL");
        	this.dsUpdate2.addColumn("ID_USER" 		, "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YM_MAGAM", "string");
        	this.dsDelete.addColumn("CD_CORP" , "string");
        	this.dsDelete.addColumn("CD_SITE" , "string");
        	this.dsDelete.addColumn("CD_CODE" , "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("YM_MAGAM", "string");
        	this.dsCreate.addColumn("CD_SITE" , "string");
        	this.dsCreate.addColumn("PROC_YN" , "string");
        	this.dsCreate.addColumn("ID_USER" , "string");

        	this.dsSiteDelete = new Dataset();
        	this.dsSiteDelete.addColumn("YM_MAGAM", "string");
        	this.dsSiteDelete.addColumn("CD_SITE" , "string");

        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");			//법인코드
        	this.dsIssueSlip.addColumn("CD_SITE_BH", "string");			//발행부서
        	this.dsIssueSlip.addColumn("CD_SITE", "string");			//현장코드
        	this.dsIssueSlip.addColumn("YM_MAGAM", "string");			//작업년월
        	this.dsIssueSlip.addColumn("ID_TRANS", "string");			//사용자 아이디

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_TRADE", "string");		//전표번호
        	this.dsCancelSlip.addColumn("YM_WORK", "string");			//작업년월
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP"	, this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_SITE"	, this.ccfCD_SITE.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YM_MAGAM"	, this.ctclYM_MAGAM.form.TextBox.value);

        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			this.gfnGridBeforeSelect(this.dxGrid);
        			inData   = "select=dsSelect selectCdSlip=dsSelect";
        			outData  = "dsList=select0 dsCdSlip=selectCdSlip0";

        			break;
        		case 1:
        			this.gfnGridBeforeSelect(this.dxGrid2);
        			this.gfnGridBeforeSelect(this.dxGrid2Sub);

        			inData   = "select2=dsSelect selectCdSlip=dsSelect";
        			outData  = "dsList2=select20 dsList2Sub=select21 dsCdSlip=selectCdSlip0";

        			break;
        		case 2:
        			this.gfnGridBeforeSelect(this.dxGrid3);

        			inData   = "select3=dsSelect selectCdSlip=dsSelect";
        			outData  = "dsList3=select30 dsCdSlip=selectCdSlip0";

        			break;
        		case 3:
        			this.gfnGridBeforeSelect(this.dxGrid4);

        			inData   = "select4=dsSelect selectCdSlip=dsSelect";
        			outData  = "dsList4=select40 dsCdSlip=selectCdSlip0";

        			break;
        		case 4:
        			this.gfnGridBeforeSelect(this.dxGrid5);

        			inData   = "select5=dsSelect selectCdSlip=dsSelect";
        			outData  = "dsList5=select50 dsCdSlip=selectCdSlip0";

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
        	//전표번호가 있을경우 리턴
        	if(!this.gfnIsNull(this.dsCdSlip.getColumn(0,"CD_TRADE"))) return;

        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			var nRow = 0;
        			// 그리드 데이터에 용지비가 없을경우 추가 처리
        			if(this.dsList.findRow("CD_CODE", "99") == -1){
        				nRow = this.gfnGridAdd(this.dxGrid);
        				this.dsList.setColumn(nRow, "CD_CORP"	, this.ccfCD_CORP.form.CDTextBox.value);
        				this.dsList.setColumn(nRow, "CD_SITE"	, this.ccfCD_SITE.form.CDTextBox.value);
        				this.dsList.setColumn(nRow, "YM_MAGAM"	, this.ctclYM_MAGAM.form.TextBox.value);
        				this.dsList.setColumn(nRow, "CD_CODE"   , "99");
        				this.dsList.setColumn(nRow, "DS_CODE"   , "용지비");
        			}

        			nRow = this.gfnGridAdd(this.dxGrid);
        			this.dsList.setColumn(nRow, "CD_CORP"	, this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsList.setColumn(nRow, "CD_SITE"	, this.ccfCD_SITE.form.CDTextBox.value);
        			this.dsList.setColumn(nRow, "YM_MAGAM"	, this.ctclYM_MAGAM.form.TextBox.value);

        			break;
        	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//전표번호가 있을경우 리턴
        	if(!this.gfnIsNull(this.dsCdSlip.getColumn(0,"CD_TRADE"))) return;

        	switch(this.divData.form.tabData.tabindex) {
        		case 0:

        			if(this.dsList.getColumn(this.dsList.rowposition, "CD_CODE") == "99"){
        				this.gfnAlert("용지비 코드는 삭제할수 없습니다.");
        				return;
        			}
        			this.gfnGridDel(this.dxGrid);
        			break;
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	var objDs;
        	var objGrid;
        	var inData = "";
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			var fRow = this.dsList.findRow("CD_CODE", "99");
        			if(fRow == -1){
        				this.gfnAlert("용지비 코드는 필수입니다.용지비 코드를 추가하세요.");
        				return;
        			}
        			var amCost = nexacro.toNumber(this.dsList.getColumn(fRow, "AM_COST"),0);
        			if(amCost == 0){
        				this.gfnAlert("용지비 금액은 필수입니다.");
        				return;
        			}

        			this.dxGrid.updateToDataset();
        			objDs = this.dsList;
        			objGrid = this.dxGrid;
        			inData  = "insert=dsInsert update=dsUpdate delete=dsDelete";
        			break;
        		case 1:
        			this.dxGrid2.updateToDataset();
        			objDs = this.dsList2;
        			objGrid = this.dxGrid2;
        			inData  = "update2=dsUpdate2";
        			break;
        		case 2:
        		case 3:
        		case 4:
        			return;
        			break;
        	}

        	if (!this.gfnGridValidate(objGrid)) return;

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	this.dsUpdate2.clearData();

        	for (var i = 0; i < objDs.rowcount; i++) {
        		var flag = this.gfnGetFlag(objDs, i);

        		//총공사예정원가 탭
        		if(this.divData.form.tabData.tabindex == 0){
        			switch(flag) {
        				case "I":
        					var nrow = this.dsInsert.addRow();
        					this.dsInsert.setColumn(nrow, "CD_CORP"			, objDs.getColumn(i, "CD_CORP"));    	//법인코드
        					this.dsInsert.setColumn(nrow, "YM_MAGAM"		, objDs.getColumn(i, "YM_MAGAM"));		//마감일자
        					this.dsInsert.setColumn(nrow, "CD_SITE"			, objDs.getColumn(i, "CD_SITE"));		//현장코드
        					this.dsInsert.setColumn(nrow, "CD_CODE"			, objDs.getColumn(i, "CD_CODE"));  		//코드
        					this.dsInsert.setColumn(nrow, "DS_CODE"			, objDs.getColumn(i, "DS_CODE"));  		//코드명
        					this.dsInsert.setColumn(nrow, "AM_COST"			, objDs.getColumn(i, "AM_COST"));  		//금액
        					this.dsInsert.setColumn(nrow, "ID_USER"			, this.AuthClient.ID_USER);
        					break;

        				case "U":
        					var nrow = this.dsUpdate.addRow();
        					this.dsUpdate.setColumn(nrow, "CD_CORP"			, objDs.getColumn(i, "CD_CORP"));    	//법인코드
        					this.dsUpdate.setColumn(nrow, "YM_MAGAM"		, objDs.getColumn(i, "YM_MAGAM"));		//마감일자
        					this.dsUpdate.setColumn(nrow, "CD_SITE"			, objDs.getColumn(i, "CD_SITE"));		//현장코드
        					this.dsUpdate.setColumn(nrow, "CD_CODE"			, objDs.getColumn(i, "CD_CODE"));  		//코드
        					this.dsUpdate.setColumn(nrow, "DS_CODE"			, objDs.getColumn(i, "DS_CODE"));  		//코드명
        					this.dsUpdate.setColumn(nrow, "AM_COST"			, objDs.getColumn(i, "AM_COST"));  		//금액
        					this.dsUpdate.setColumn(nrow, "ID_USER"			, this.AuthClient.ID_USER);
        					break;

        				case "D":
        					var nrow = this.dsDelete.addRow();
        					this.dsDelete.setColumn(nrow, "CD_CORP"	, objDs.getColumn(i, "CD_CORP"));
        					this.dsDelete.setColumn(nrow, "YM_MAGAM", objDs.getColumn(i, "YM_MAGAM"));
        					this.dsDelete.setColumn(nrow, "CD_SITE" , objDs.getColumn(i, "CD_SITE"));
        					this.dsDelete.setColumn(nrow, "CD_CODE" , objDs.getColumn(i, "CD_CODE"));

        					break;
        			}
        		}else{
        			switch(flag) {
        				case "U":
        					var nrow = this.dsUpdate2.addRow();
        					this.dsUpdate2.setColumn(nrow, "CD_CORP"			, objDs.getColumn(i, "CD_CORP"));   		//법인코드
        					this.dsUpdate2.setColumn(nrow, "YM_MAGAM"			, objDs.getColumn(i, "YM_MAGAM"));  		//마감년월
        					this.dsUpdate2.setColumn(nrow, "CD_SITE"			, objDs.getColumn(i, "CD_SITE"));			//현장코드
        					this.dsUpdate2.setColumn(nrow, "YN_BUNYANG"			, objDs.getColumn(i, "YN_BUNYANG"));		//분양구분
        					this.dsUpdate2.setColumn(nrow, "TY_GUBUN"			, objDs.getColumn(i, "TY_GUBUN"));			//아파트구분
        					this.dsUpdate2.setColumn(nrow, "SZ_BUILDING"		, objDs.getColumn(i, "SZ_BUILDING"));		//건물면적
        					this.dsUpdate2.setColumn(nrow, "SZ_LAND"			, objDs.getColumn(i, "SZ_LAND"));			//토지면적
        					this.dsUpdate2.setColumn(nrow, "AM_BUNYANG"			, objDs.getColumn(i, "AM_BUNYANG"));		//분양금액
        					this.dsUpdate2.setColumn(nrow, "ID_USER"			, this.AuthClient.ID_USER);
        				break;
        			}
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0 && this.dsUpdate2.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	//var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        			tabText = this.tabData.tab1.text;
        			this.gfnExcelExport(this.dxGrid, tabText, tabText);
        			break;
        		case 1:
        			tabText = this.tabData.tab2.text;

        			var arrGrid = [], arrSheetName = [];
        			arrGrid[0] = this.dxGrid2;
        			arrGrid[1] = this.dxGrid2Sub;

        			arrSheetName[0] = this.divData.form.tabData.tab2.form.staGridTitle1.text;
        			arrSheetName[1] = this.divData.form.tabData.tab2.form.staGridTitle2.text;

        			this.gfnExcelExportMulti(arrGrid,  arrSheetName, tabText);
        			break;
        		case 2:
        			tabText = this.tabData.tab3.text;
        			this.gfnExcelExport(this.dxGrid3, tabText, tabText);
        			break;
        		case 3:
        			tabText = this.tabData.tab4.text;
        			this.gfnExcelExport(this.dxGrid4, tabText, tabText);
        			break;
        		case 4:
        			tabText = this.tabData.tab5.text;
        			this.gfnExcelExport(this.dxGrid5, tabText, tabText);
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

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		validate = false;
        	}

        	if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.text)) {
        		this.gfnAlert("현장코드가 입력되지 않았습니다.");
        		this.ccfCD_SITE.form.CDTextBox.setFocus();
        		validate = false;
        	}

        	if (this.gfnIsNull(this.ctclYM_MAGAM.form.TextBox.value)) {
        		this.gfnAlert("작업년월이 입력되지 않았습니다.");
        		this.ctclYM_MAGAM.form.TextBox.setFocus();
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
        		//this.gfnSetEnable(this.btnBunYangCreate, false);
        		//전표번호가 있을경우
        		if(this.dsCdSlip.rowcount > 0){
        			this.edtCD_SLIP.set_value(this.dsCdSlip.getColumn(0, "CD_TRADE"));

        			//전표번호가 없을경우 버튼 처리
        			if(this.gfnIsNull(this.dsCdSlip.getColumn(0, "CD_TRADE"))){
        				this.gfnSetEnable(this.btnBunYangDelete, true);
        				this.gfnSetEnable(this.btnBunYangCreate, true);
        				this.gfnSetEnable(this.btnSearchSlip, false);
        				this.gfnSetEnable(this.btnIssueSlip, true);
        				this.gfnSetEnable(this.btnCancelSlip, false);

        				this.dxGrid.info = "N";
        				this.dxGrid2.info = "N";
        			}else{
        				this.gfnSetEnable(this.btnBunYangDelete, false);
        				this.gfnSetEnable(this.btnBunYangCreate, false);
        				this.gfnSetEnable(this.btnSearchSlip, true);
        				this.gfnSetEnable(this.btnIssueSlip, false);
        				this.gfnSetEnable(this.btnCancelSlip, true);

        				this.dxGrid.info = "Y";
        				this.dxGrid2.info = "Y";
        			}
        		}

        		switch(this.divData.form.tabData.tabindex) {
        			case 0:
        				this.gfnGridAfterSelect(this.dxGrid);
        				break;
        			case 1:
        				this.gfnGridAfterSelect(this.dxGrid2);
        				this.gfnGridAfterSelect(this.dxGrid2Sub);

        				break;
        			case 2:
        				this.gfnGridAfterSelect(this.dxGrid3);
        				break;
        			case 3:
        				this.gfnGridAfterSelect(this.dxGrid4);
        				break;
        			case 4:

        				this.dxGrid5.set_enableredraw(false);

        				var startApt  = -1, endApt  = -1;
        				var startShop = -1, endShop = -1;
        				for(var i=0;i<this.dsList5.rowcount;i++){
        					if(this.dsList5.getRowLevel(i) == 0){	//소계셀 제외
        						if(this.dsList5.getColumn(i, "SRT") == "2"){	//매출원가(아파트)
        							if(startApt == -1) startApt = i;
        							endApt = i;
        						}else if(this.dsList5.getColumn(i, "SRT") == "3"){	//매출원가(상가)
        							if(startShop == -1) startShop = i;
        							endShop = i;
        						}else{	//매출액 or 매출이익
        							this.dxGrid5.mergeCell(2, 3, i, i);
        						}
        					}
        				}

        				if(startApt > -1)  this.dxGrid5.mergeCell(2, 2, startApt, endApt);
        				if(startShop > -1) this.dxGrid5.mergeCell(2, 2, startShop, endShop);
        				this.dxGrid5.set_enableredraw(true);

        				this.gfnGridAfterSelect(this.dxGrid5);

        				break;
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "create") {
        		if (errorCode == 0) {
        			this.gfnAlert("처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "sitedelete") {
        		if (errorCode == 0) {
        			this.gfnAlert("처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "issueSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "cancelSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소 되었습니다.");
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
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	if (id == "ccfCD_SITE") {
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "TY_GUBUN", "04");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_SITE.form.fnCodeFindClear();
        		break;
        	}
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
        		this.gfnGridClear(this.dxGrid2Sub);
        		this.gfnGridClear(this.dxGrid3);
        		this.gfnGridClear(this.dxGrid4);
        		this.gfnGridClear(this.dxGrid5);
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
        			case 2:
        				objDs = this.dsList3;
        				break;
        			case 3:
        				objDs = this.dsList4;
        				break;
        			case 4:
        				objDs = this.dsList5;
        				break;
        		}

        		this.postTabIndex = e.postindex;

        		var fRow = objDs.findRowExprNF( this.ucFlag+" == 'I' || "+this.ucFlag+ " == 'U' || "+this.ucFlag+ " == 'D'");

        		if(fRow > -1){
        			this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "tabData_canchange_callback");
        			return false;
        		}
        	}
        };

        this.tabData_canchange_callback = function(strId, val)
        {
        	var preTabIndex = this.divData.form.tabData.tabindex;

        	var objDs;
        	switch(preTabIndex) {
        		case 0:
        			objDs = this.dsList;
        			break;
        		case 1:
        			objDs = this.dsList2;
        			break;
        		case 2:
        			objDs = this.dsList3;
        			break;
        		case 3:
        			objDs = this.dsList4;
        			break;
        		case 4:
        			objDs = this.dsList5;
        			break;
        	}

        	if(val == true) {
        		this.divData.form.tabData.set_enableevent(false);
        		this.divData.form.tabData.set_tabindex(this.postTabIndex);	//탭변경
        		this.divData.form.tabData.set_enableevent(true);

        		objDs.reset();	//데이터셋 리셋
        		this.gfnSetFormStatus(this, "Q");
        	}
        }

        this.divData_tabData_tab2_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_tabData_tab2_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.tabData.tab2.form.divSplitter.set_left(e.clientx);
        		this.divData.form.tabData.tab2.form.resetScroll();
        	}
        };


        //분양현황 생성 처리
        this.fnBunYangCreate = function (obj,e)
        {

        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_SITE.form.CDTextBox.value))) {
        		this.gfnAlert("현장코드는 필수입니다.");
        		this.ccfCD_SITE.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclYM_MAGAM.form.TextBox.value)){
        		this.gfnAlert("마감월은 필수입니다.");
        		this.ctclYM_MAGAM.form.TextBox.setFocus();
        		return;
        	}

        	this.gfnConfirm("영업시스템에서 분양현황을 다시 가져오시겠습니까?", "fnBunYangCreate_callback");

        };

        //분양현황 삭제 처리
        this.fnBunYangDelete = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_SITE.form.CDTextBox.value))) {
        		this.gfnAlert("현장코드는 필수입니다.");
        		this.ccfCD_SITE.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclYM_MAGAM.form.TextBox.value)){
        		this.gfnAlert("마감월은 필수입니다.");
        		this.ctclYM_MAGAM.form.TextBox.setFocus();
        		return;
        	}
        	var strMsg = this.ctclYM_MAGAM.form.TextBox.value.substr(0,4) + "년 " + this.ctclYM_MAGAM.form.TextBox.value.substr(4,2) + "월";
        	this.gfnConfirm(strMsg + " 기초정보를 삭제 하시겠습니까?", "fnBunYangDelete_callback");
        };

        //분양현황 생성 Confirm 콜백
        this.fnBunYangCreate_callback = function(strId, val)
        {
        	var prcYn = "N";

        	if(val == true) prcYn = "Y";

        	this.dsCreate.clearData();
        	var nRow = this.dsCreate.addRow();

        	//처리할 데이터 담기
        	this.dsCreate.setColumn(nRow, "CD_SITE" 	, this.ccfCD_SITE.form.CDTextBox.value);	//현장코드
        	this.dsCreate.setColumn(nRow, "YM_MAGAM" 	, this.ctclYM_MAGAM.form.TextBox.value);	//마감년월
        	this.dsCreate.setColumn(nRow, "PROC_YN" 	, prcYn);									//분양시스템에서 가져올것인지 여부
        	this.dsCreate.setColumn(nRow, "ID_USER"     , this.AuthClient.ID_USER);					//작업자 아이디

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
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
        };

        //분양현황 삭제 Confirm 콜백
        this.fnBunYangDelete_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsSiteDelete.clearData();
        		var nRow = this.dsSiteDelete.addRow();

        		//처리할 데이터 담기
        		this.dsSiteDelete.setColumn(nRow, "YM_MAGAM" 	, this.ctclYM_MAGAM.form.TextBox.value);	//마감년월
        		this.dsSiteDelete.setColumn(nRow, "CD_SITE" 	, this.ccfCD_SITE.form.CDTextBox.value);	//현장코드

        		var strSvcId    = "sitedelete";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "sitedelete=dsSiteDelete";
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

        this.divData_tabData_onchanged = function(obj,e)
        {
        	this.FormBtns.Select.click();
        };


        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_SITE.form.CDTextBox.value))) {
        		this.gfnAlert("현장코드는 필수입니다.");
        		this.ccfCD_SITE.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclYM_MAGAM.form.TextBox.value)){
        		this.gfnAlert("마감월은 필수입니다.");
        		this.ctclYM_MAGAM.form.TextBox.setFocus();
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
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"		, this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "CD_SITE_BH" 	, this.AuthClient.CD_DEPT);
        		this.dsIssueSlip.setColumn(nRow, "CD_SITE" 		, this.ccfCD_SITE.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "YM_MAGAM" 	, this.ctclYM_MAGAM.form.TextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "ID_TRANS" 	, this.AuthClient.ID_USER);

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
        	if (this.gfnIsNull(this.gfnTrim(this.dsCdSlip.getColumn(0, "CD_TRADE")))) {
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

        		var cdTrade = this.dsCdSlip.getColumn(0, "CD_TRADE");

        		//처리할 데이터 담기
        		this.dsCancelSlip.setColumn(nRow, "CD_TRADE"  , cdTrade);
        		this.dsCancelSlip.setColumn(nRow, "YM_WORK"		, this.ctclYM_MAGAM.form.TextBox.value);

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
        this.fnSearchSlip = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.dsCdSlip.getColumn(0, "CD_TRADE")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnTrim(this.dsCdSlip.getColumn(0, "CD_TRADE"));
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        //계정코드별 명세서
        this.fnOpenAcnt = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_SITE.form.CDTextBox.value))) {
        		this.gfnAlert("현장코드는 필수입니다.");
        		this.ccfCD_SITE.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclYM_MAGAM.form.TextBox.value)){
        		this.gfnAlert("마감월은 필수입니다.");
        		this.ctclYM_MAGAM.form.TextBox.setFocus();
        		return;
        	}

        	var ymMagam = this.ctclYM_MAGAM.form.TextBox.value;

        	var param = {};
        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
         	param.CD_DEPT_ACNT = this.ccfCD_SITE.form.CDTextBox.value;
         	param.DS_DEPT_ACNT = this.ccfCD_SITE.form.DSTextBox.value;
        	param.CD_ACCOUNT = "211411,211412,211414,111511,111512,111514,111515,211431,211439,115121,115122,211412";
        	param.DS_ACCOUNT = "분양선수금-아파트,분양선수금-상가,분양선수금(진행률),분양미수금-아파트,분양미수금-상가,분양미수금(진행률-아파트),분양미수금(진행률-상가),선수금-기타,선수금(진행률),미완성주택-아파트,미완성주택-상가,분양선수금-상가";
        	param.DT_MAGAM = this.gfnAddMonth(ymMagam.substr(0, 4) + "1201", -12);
        	param.DT_MAGAM2 = this.gfnAddMonth(ymMagam.substr(0, 4) + "1231", -12);

        	this.gfnFormOpen("DHE", "DHE_ACCOUNTSELECT_MULTI", "", param);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("canchange",this.divData_tabData_canchange,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab2.addEventHandler("ondragmove",this.divData_tabData_tab2_ondragmove,this);
            this.divData.form.tabData.tab2.form.divSplitter.addEventHandler("ondrag",this.divData_tabData_tab2_divSplitter_ondrag,this);
        };
        this.loadIncludeScript("DHM_COST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
