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
            this.set_titletext("총괄현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_enableevent("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_WORKDOCU01_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DBWPR_VISIT_SAVE</Col></Row><Row><Col id=\"SP\">DBSPR_WORKDOCU_SELECT</Col><Col id=\"TARGET\">report</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CTM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"YN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CUNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DETAIL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_HAJAJS\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"CD_CTM\"/><Col id=\"CD_ACT\"/><Col id=\"FR_DATE\"/><Col id=\"TO_DATE\"/><Col id=\"YN\"/><Col id=\"CD_JOB\"/><Col id=\"DS_DONG\"/><Col id=\"DS_CUNG\"/><Col id=\"DS_HO\"/><Col id=\"CD_DETAIL_TYPE\"/><Col id=\"TY_HAJAJS\"/><Col id=\"TY_DATE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_YN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">전체</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">완료</Col><Col id=\"DS_CODE\">완료</Col></Row><Row><Col id=\"DS_CODE\">미완료</Col><Col id=\"CD_CODE\">미완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_HAJAJS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelTitle", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_ROW1\" type=\"string\" size=\"32\"/><Column id=\"DS_ROW2\" type=\"string\" size=\"32\"/><Column id=\"DS_ROW3\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DS_ROW1\">세종더샵예미지L4블록 금성백조예미지</Col><Col id=\"DS_ROW2\">작업지시서</Col><Col id=\"DS_ROW3\">세종시 시청대로 598(수루배마을 6단지) T 044-868-6725 F 044-868-6726</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_DATE","ccfCD_SITE:0.0","10.0","83","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var divSearch_form_ccboTY_DATE_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboTY_DATE_innerdataset", obj);
            divSearch_form_ccboTY_DATE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">접수일자</Col><Col id=\"codecolumn\">접수일자</Col></Row><Row><Col id=\"datacolumn\">완료일자</Col><Col id=\"codecolumn\">완료일자</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboTY_DATE_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","ccboTY_DATE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclDT_TO:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK","0.0","ccfCD_SITE:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("공종");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACT","staTY_JAJIK:0.0","ccfCD_SITE:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFACT_ALL");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK00","ccfCD_ACT:0.0","ccfCD_SITE:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("상세부위");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDETAIL_PART","staTY_JAJIK00:0.0","ccfCD_SITE:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFDETAILPART");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP01","ccfDETAIL_PART:0.0","ccfCD_SITE:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_JOB","staCD_CORP01:0.0","ccfCD_SITE:10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFJOB");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK01","ccfCD_JOB:0.0","ccfCD_SITE:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("작업코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK02","staTY_JAJIK01:0.0","ccfCD_SITE:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("동");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DONG","staTY_JAJIK02:0.0","ccfCD_SITE:10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFASDONGHO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK03","ccfCD_DONG:0.0","ccfCD_SITE:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_HO","staTY_JAJIK03:0.0","ccfCD_SITE:10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFASDONGHO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CTM","staCD_CORP01:0.0","ccfCD_SITE:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFHADO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_UMGB00","ccfCD_CTM:0.0","ccfCD_SITE:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("출력조건");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_YN","staTY_UMGB00:0.0","ccfCD_SITE:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsTY_YN");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCN_ROW","ccboTY_YN:0.0","ccfCD_SITE:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("조회건수:");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_HAJAJS","staCN_ROW:0.0","ccfCD_SITE:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsTY_HAJAJS");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","130",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridTitle","0","-14",null,null,"1020","504",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_font("normal 18pt/normal \"Arial\"");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridTitle2","290","-14",null,null,"730","504",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridTitle3","580","-14",null,null,"440","504",null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","FR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_TO","value","dsSearch","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_ACT.form.CDTextBox","value","dsSearch","CD_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfDETAIL_PART.form.CDTextBox","value","dsSearch","CD_DETAIL_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccboTY_DATE","value","dsSearch","TY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.ccfCD_JOB.form.CDTextBox","value","dsSearch","CD_JOB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.ccfCD_DONG.form.CDTextBox","value","dsSearch","DS_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.ccfCD_HO.form.CDTextBox","value","dsSearch","DS_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CTM.form.CDTextBox","value","dsSearch","CD_CTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboTY_YN","value","dsSearch","YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccboTY_HAJAJS","value","dsSearch","TY_HAJAJS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_WORKDOCU.xfdl", function() {
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

        	this.ccboTY_DATE.set_index(0);
        	this.ccboTY_YN.set_index(2);

        	if(this.FormInfo.GR_SEARCH >= 7){
        		this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_DEPT);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.ccfCD_SITE.set_enable(false);
        	}else{
        		// 타화면에서 오픈시 넘어오는 파라미터 처리
        		if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE)) {
        			this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        			this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        			this.dsSearch.setColumn(0, "CD_CTM", this.getOwnerFrame().CD_CTM);
        			this.divSearch.form.ccfCD_CTM.form.DSTextBox.set_value(this.getOwnerFrame().DS_CTM);
        			this.dsSearch.setColumn(0, "CD_ACT", this.getOwnerFrame().CD_ACT);
        			this.divSearch.form.ccfCD_ACT.form.DSTextBox.set_value(this.getOwnerFrame().DS_ACT);
        			this.dsSearch.setColumn(0, "FR_DATE", this.getOwnerFrame().DT_FR);
        			this.dsSearch.setColumn(0, "TO_DATE", this.getOwnerFrame().DT_TO);
        			this.dsSearch.setColumn(0, "DS_DONG", this.getOwnerFrame().CD_DONG);
        			this.dsSearch.setColumn(0, "DS_HO", this.getOwnerFrame().CD_HO);
        			this.dsSearch.setColumn(0, "CD_JOB", this.getOwnerFrame().CD_JOB);
        			this.ccboTY_YN.set_index(0);
        			this.FormBtns.Select.click();
        		}else{
        			//var toDay = this.gfnGetDate();
        			//this.dsSearch.setColumn(0, "FR_DATE", toDay);
        			//this.dsSearch.setColumn(0, "TO_DATE", toDay);
        		}
        	}
        	this.fnSetCombo();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnWorkPrint = this.gfnFormButtonAdd("btnWorkPrint", "fnWorkPrint");
        	this.btnRmNy = this.gfnFormButtonAdd("btnRmNy", "fnRmNy");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_ACT = this.divSearch.form.ccfCD_ACT;
        	this.ccfDETAIL_PART = this.divSearch.form.ccfDETAIL_PART;
        	this.ccfCD_CTM = this.divSearch.form.ccfCD_CTM;
        	this.ccfCD_JOB = this.divSearch.form.ccfCD_JOB;
        	this.ccfCD_DONG = this.divSearch.form.ccfCD_DONG;
        	this.ccfCD_HO = this.divSearch.form.ccfCD_HO;
        	this.ccboTY_YN = this.divSearch.form.ccboTY_YN;
        	this.ccboTY_HAJAJS = this.divSearch.form.ccboTY_HAJAJS;
        	this.ccboTY_DATE = this.divSearch.form.ccboTY_DATE;
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;

        	this.staCN_ROW = this.divSearch.form.staCN_ROW;

        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGridTitle = this.divData.form.objGridTitle;
        	this.dxGridTitle2 = this.divData.form.objGridTitle2;
        	this.dxGridTitle3 = this.divData.form.objGridTitle3;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_ACT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_ACT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CTM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_JOB.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DONG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_HO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_WORKDOCU");
        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경
        	this.gfnGridInit(this.dxGridTitle, this.dsExcelTitle, "DB", "DBS_WORKDOCU_EXL"); //엑셀타이틀
        	this.gfnGridInit(this.dxGridTitle2, this.dsExcelTitle, "DB", "DBS_WORKDOCU_EXL2"); //엑셀타이틀
        	this.gfnGridInit(this.dxGridTitle3, this.dsExcelTitle, "DB", "DBS_WORKDOCU_EXL3"); //엑셀타이틀

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_CTM", "string");
        	this.dsSelect.addColumn("CD_ACT", "string");
        	this.dsSelect.addColumn("FR_DATE", "string");
        	this.dsSelect.addColumn("TO_DATE", "string");
        	this.dsSelect.addColumn("YN", "string");
        	this.dsSelect.addColumn("CD_JOB", "string");
        	this.dsSelect.addColumn("DS_DONG", "string");
        	this.dsSelect.addColumn("DS_CUNG", "string");
        	this.dsSelect.addColumn("DS_HO", "string");
        	this.dsSelect.addColumn("CD_DETAIL_TYPE", "string");
        	this.dsSelect.addColumn("TY_HAJAJS", "string");
        	this.dsSelect.addColumn("TY_DIV", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("CD_JOB", "string");
        	this.dsUpdate.addColumn("DT_VISITPLAN", "string");
        	this.dsUpdate.addColumn("DT_VISITTIME", "string");
        	this.dsUpdate.addColumn("RM_CUSTOMER", "string");
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

        	this.dsList.clearData();
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	var cdHo = "";
        	var cdCung = "";
        	var frDate = nexacro.replaceAll(this.dsSearch.getColumn(0, "FR_DATE"), "-", "");
        	var toDate = nexacro.replaceAll(this.dsSearch.getColumn(0, "TO_DATE"), "-", "");

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DS_HO")) && this.dsSearch.getColumn(0, "DS_HO") != "공용"){
        		cdCung = this.dsSearch.getColumn(0, "DS_HO").substr(0, 2); //층을 넣어둔다.
                cdHo = "0" + this.dsSearch.getColumn(0, "DS_HO").substr(2, 2); //호를 넣어 둔다.
        	}else if(this.dsSearch.getColumn(0, "DS_HO") == "공용"){
        		cdCung = "00";
                cdHo = "000";
        	}

        	if(this.gfnIsNull(frDate)){
        		frDate = "00000000";
        	}
        	if(this.gfnIsNull(toDate)){
        		toDate = "99999999";
        	}

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "CD_CTM", this.dsSearch.getColumn(0, "CD_CTM"));
        	this.dsSelect.setColumn(0, "CD_ACT", this.dsSearch.getColumn(0, "CD_ACT"));
        	this.dsSelect.setColumn(0, "FR_DATE", frDate);
        	this.dsSelect.setColumn(0, "TO_DATE", toDate);
        	this.dsSelect.setColumn(0, "YN", this.dsSearch.getColumn(0, "YN"));
        	this.dsSelect.setColumn(0, "CD_JOB", this.dsSearch.getColumn(0, "CD_JOB"));
        	this.dsSelect.setColumn(0, "DS_DONG", "");
        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DS_DONG"))) this.dsSelect.setColumn(0, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        	this.dsSelect.setColumn(0, "DS_CUNG", cdCung);
        	this.dsSelect.setColumn(0, "DS_HO", cdHo);
        	this.dsSelect.setColumn(0, "CD_DETAIL_TYPE", this.dsSearch.getColumn(0, "CD_DETAIL_TYPE"));
        	this.dsSelect.setColumn(0, "TY_HAJAJS", this.dsSearch.getColumn(0, "TY_HAJAJS"));
        	this.dsSelect.setColumn(0, "TY_DIV", this.dsSearch.getColumn(0, "TY_DATE"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsExcelTitle=select1";
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


        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "CD_JOB", this.dsList.getColumn(i, "CD_JOB"));
        				this.dsUpdate.setColumn(nrow, "DT_VISITPLAN", nexacro.replaceAll(this.dsList.getColumn(i, "DT_VISITPLAN"), "-", ""));
        				this.dsUpdate.setColumn(nrow, "DT_VISITTIME", this.dsList.getColumn(i, "DT_VISITTIME"));
        				this.dsUpdate.setColumn(nrow, "RM_CUSTOMER", this.dsList.getColumn(i, "RM_CUSTOMER"));
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsUpdate";
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
        	this.dxGrid.EXCEL_DEL_HIDDEN = false;
        	//this.gfnExcelExport(this.dxGrid);
        	this.fnExcelExportTest(this.dxGrid, "작업지시서", this.dsExcelTitle.getColumn(0, "TITLE"));
        }

        this.fnExcelExportTest = function(objGrid, sSheetName, sFileName)
        {
        	var objDs = objGrid.getBindDataset();
        	if(objGrid.yn_filter == "Y") {
        		objDs.set_enableevent(false);
        		objDs.deleteRow(0);
        		objDs.set_enableevent(true);
        	}

        	this.setWaitCursor(true);

        	var objGrid_excel = objGrid;

        	var regExp = /[?*:\/\[\]]/g;              //(엑셀에서 지원하지않는 모든 문자)

        	//fileName nullcheck
        	sFileName = this.gfnIsNull(sFileName) ? this.gfnGetArgument("NM_FORM")+"_"+this.gfnGetDate() : sFileName;
        	//sheetName nullcheck
        	sSheetName = this.gfnIsNull(sSheetName) ? "sheet1" : sSheetName;

        	sFileName = sFileName.replace(regExp,"");   //파일명에 특수문자 제거
        	sSheetName = sSheetName.replace(regExp,""); //시트명에 특수문자 제거

        	//sheetName 30이상일경우 기본시트명
        	if( String(sSheetName).length > 30 ){
        		sSheetName =  "sheet1";
        	}

        	var svcUrl = "svcUrl::XExportImport.do";
        	this.objExport = null;
        	this.objExport = new ExcelExportObject();

        	this.objExport.objgrid = objGrid_excel;
        	this.objExport.set_exporttype(nexacro.ExportTypes.EXCEL2007); //eykim
        	this.objExport.set_exporturl(svcUrl);
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.dxGridTitle, sSheetName+"!O1","nohead","allrecord","nosuppress","allstyle","none","","both");
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.dxGridTitle2, sSheetName+"!O2","nohead","allrecord","nosuppress","allstyle","none","","both");
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.dxGridTitle3, sSheetName+"!O3","nohead","allrecord","nosuppress","allstyle","none","","both");
        	//this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.dxGridTitle, sSheetName+"!A4","nohead","allrecord","suppress","allstyle","none","","both");
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, sSheetName+"!A5","allband","allrecord","suppress","allstyle","none","","both");


        	this.objExport.set_exportfilename(sFileName);

            this.objExport.set_exporteventtype("itemrecord");
            this.objExport.set_exportuitype("none");
            this.objExport.set_exportmessageprocess("");
        	this.objExport.addEventHandler("onsuccess", this.gfnExportOnsuccess, this);
        	this.objExport.addEventHandler("onerror", this.gfnExportOnerror, this);

        	var result = this.objExport.exportData();
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;
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
        		this.gfnGridAfterSelect(this.dxGrid);
        		trace("dsExcelTitle>>>" + this.dsExcelTitle.saveXML());
        		//if(this.dsList.rowcount > 0){
        		if(this.gfnGetFormStatus(this) == "X") {
        			this.staCN_ROW.set_text("조회건수: 0");
        		}else{
        			this.staCN_ROW.set_text("조회건수: " + (this.dsList.rowcount-1).toString());	// 필터로우를 row카운트에 포함시키기때문에 -1 해준다
        		}
        		this.divSearch.form.resetScroll();

        	} else if (svcID == "combo") {
        		this.dsTY_HAJAJS.insertRow(0);
        		this.dsTY_HAJAJS.setColumn(0,"CD_CODE","");
        		this.dsTY_HAJAJS.setColumn(0,"DS_CODE","전체");
        		this.ccboTY_HAJAJS.set_index(0);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
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

        	if(id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", this.AuthClient.CD_DEPT);
        	}

        	if(id == "ccfCD_CTM") {
        		var CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        		if(this.gfnIsNull(CD_SITE)){
        			this.gfnAlert("현장코드를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}

        	if(id == "ccfCD_ACT") {
        		var CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        		if(this.gfnIsNull(CD_SITE)){
        			this.gfnAlert("현장코드를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	if(id == "ccfCD_JOB") {
        		var CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        		if(this.gfnIsNull(CD_SITE)){
        			this.gfnAlert("현장코드를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "TY_UMGB", "");
        	}
        	if(id == "ccfCD_DONG") {
        		var CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        		if(this.gfnIsNull(CD_SITE)){
        			this.gfnAlert("현장코드를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "TY_TYPE", "DONG");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE1", "");
        		dsUserParam.setColumn(nrow, "VALUE2", "");
        	}
        	if(id == "ccfCD_HO") {
        		var CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        		if(this.gfnIsNull(CD_SITE)){
        			this.gfnAlert("현장코드를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "TY_TYPE", "HO");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE1", this.dsSearch.getColumn(0, "DS_DONG"));
        		dsUserParam.setColumn(nrow, "VALUE2", "");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	if(id == "ccfCD_SITE") {
        		this.ccfCD_ACT.form.fnCodeFindClear();
        		this.ccfCD_CTM.form.fnCodeFindClear();
        		this.ccfCD_JOB.form.fnCodeFindClear();
        		this.ccfCD_DONG.form.fnCodeFindClear();
        		this.ccfCD_HO.form.fnCodeFindClear();
        	}else if(id == "ccfCD_ACT") {
        		this.ccfCD_CTM.form.fnCodeFindClear();
        		this.dsSearch.setColumn(0, "CD_CTM", arrData[0]["CD_CTM"]);
        		this.ccfCD_CTM.form.DSTextBox.set_value(arrData[0]["DS_CTM"]);
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		this.staCN_ROW.set_text("조회건수:");
        		this.divSearch.form.resetScroll();
        	}
        };



        // 작업지시서출력 버튼 클릭시 팝업화면 호출
        // this.fnWorkPrint = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	// 선택된 row가 있을 경우에만 팝업을 띄움
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        //
        // 	var param = {};
        //
        // 	//param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        //     //param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        //
        // 	// 화면 오픈.
        // 	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        // 	// 타 모듈 화면 호출시 지정할것.
        //
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_WORKDOCUPRINT", "fnWorkPrintCallback", param);
        // }

        /*
         *	출력 버튼
         */
        this.fnWorkPrint = function(obj,e) {
        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_SITE", "string");
        	this.dsReport.addColumn("CD_CTM", "string");
        	this.dsReport.addColumn("CD_ACT", "string");
        	this.dsReport.addColumn("FR_DATE", "string");
        	this.dsReport.addColumn("TO_DATE", "string");
        	this.dsReport.addColumn("YN", "string");
        	this.dsReport.addColumn("CD_JOB", "string");
        	this.dsReport.addColumn("DS_DONG", "string");
        	this.dsReport.addColumn("DS_CUNG", "string");
        	this.dsReport.addColumn("DS_HO", "string");
        	this.dsReport.addColumn("CD_DETAIL_TYPE", "string");
        	this.dsReport.addColumn("CD_JOB_STR", "string");

        	this.dsReport.clearData();
        	this.dsReport.addRow();

        	var cdHo = "";
        	var cdCung = "";
        	var frDate = nexacro.replaceAll(this.dsSearch.getColumn(0, "FR_DATE"), "-", "");
        	var toDate = nexacro.replaceAll(this.dsSearch.getColumn(0, "TO_DATE"), "-", "");

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DS_HO")) && this.dsSearch.getColumn(0, "DS_HO") != "공용"){
        		cdCung = this.dsSearch.getColumn(0, "DS_HO").substr(0, 2); //층을 넣어둔다.
                cdHo = "0" + this.dsSearch.getColumn(0, "DS_HO").substr(2, 2); //호를 넣어 둔다.
        	}else if(this.dsSearch.getColumn(0, "DS_HO") == "공용"){
        		cdCung = "00";
                cdHo = "000";
        	}

        	if(this.gfnIsNull(frDate)){
        		frDate = "00000000";
        	}
        	if(this.gfnIsNull(toDate)){
        		toDate = "99999999";
        	}

        	var cdJobStr = "";
        	var nChkRowCnt = this.dsList.getCaseCount( "CHK == 1" );
        	trace("nChkRowCnt>>>" + nChkRowCnt);

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		var chk = this.dsList.getColumn(i, "CHK");
        		if(chk == 1) {
        			cdJobStr += (this.dsList.getColumn(i, "CD_JOB") + ",");
        			trace("cdJobStr>>>" + cdJobStr.substr(0, cdJobStr.length -1));
        		}
        	}

        	this.dsReport.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsReport.setColumn(0, "CD_CTM", this.dsSearch.getColumn(0, "CD_CTM"));
        	this.dsReport.setColumn(0, "CD_ACT", this.dsSearch.getColumn(0, "CD_ACT"));
        	this.dsReport.setColumn(0, "FR_DATE", frDate);
        	this.dsReport.setColumn(0, "TO_DATE", toDate);
        	this.dsReport.setColumn(0, "YN", this.dsSearch.getColumn(0, "YN"));
        	this.dsReport.setColumn(0, "CD_JOB", this.dsSearch.getColumn(0, "CD_JOB"));
        	this.dsReport.setColumn(0, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        	this.dsReport.setColumn(0, "DS_CUNG", cdCung);
        	this.dsReport.setColumn(0, "DS_HO", cdHo);
        	this.dsReport.setColumn(0, "CD_DETAIL_TYPE", this.dsSearch.getColumn(0, "CD_DETAIL_TYPE"));
        	this.dsReport.setColumn(0, "CD_JOB_STR", cdJobStr.substr(0, cdJobStr.length -1));

        	this.dsReport1 = new Dataset();
        	this.dsReport1.addColumn("CNT", "string");

        	this.dsReport1.clearData();
        	this.dsReport1.addRow();

        	this.dsReport1.setColumn(0, "CNT", nChkRowCnt);

        	var strSvcId    = "report";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "report=dsReport";
        	var outData     = "dsList2=report0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        	var inProc		= "_dsProc";
        	var inParam 	= "params=dsReport1";	// 조회SP이외 사용할 정보
        	//var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report=dsReport";
        	var reportpath  = "/db/dbs/DBS_WORKDOCUPRINTRPT.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };

        this.fnWorkPrintCallback =  function(svcID, val) {
        	if(val == true) {
        		//this.FormBtns.Select.click();
        	}
        };


        // 하자내용변경 버튼 클릭시 팝업화면 호출
        this.fnRmNy = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	//if (this.dsListSub.rowcount < 1) { return false; }

        	var param = {};
        	var nRow = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
            param.CD_JOB = this.dsList.getColumn(nRow, "CD_JOB");
        	param.RM_NY = this.dsList.getColumn(nRow, "RM_TY");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_RMNY_DLG", "fnRmNyCallback", param);
        }

        this.fnRmNyCallback =  function(svcID, val) {
        	if(val == true) {
        		this.FormBtns.Select.click();
        	}
        };




        /*
         *	콤보박스 값 설정
         */
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DB");
        	this.dsCombo.setColumn(0, "CD_TYPE", "K1");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_HAJAJS=combo0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_SITE.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_ACT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfDETAIL_PART.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_JOB.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_DONG.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_HO.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_CTM.addEventHandler("onclick",this.Common_onclick,this);
        };
        this.loadIncludeScript("DBS_WORKDOCU.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
