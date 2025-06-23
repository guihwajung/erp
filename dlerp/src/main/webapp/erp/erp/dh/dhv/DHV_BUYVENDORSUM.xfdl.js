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
            this.set_titletext("세금계산서/계산서조회(거래처별)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_VENDORSUM_SELECT</Col></Row><Row><Col id=\"TARGET\">detail</Col><Col id=\"SP\">DHVPR_VENDORSUMDETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DHXPR_VAT_TY_VATPROOF</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALEBUY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">I</Col><Col id=\"DS_CODE\">매입</Col></Row><Row><Col id=\"CD_CODE\">O</Col><Col id=\"DS_CODE\">매출</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VATPROOF", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ISSUE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">E</Col><Col id=\"DS_CODE\">전자발행</Col></Row><Row><Col id=\"CD_CODE\">P</Col><Col id=\"DS_CODE\">일반발행</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VATBGJE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_VATAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VATPROOF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VATBGJE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ISSUE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_VENDOR\">A</Col><Col id=\"TY_VATPROOF\"/><Col id=\"TY_VATBGJE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_SELFACNT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_SELFACNT","staCD_DEPT_SELFACNT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_START_TO","ccfCD_DEPT_SELFACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("증빙기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_START","staDT_START_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_START:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_END","sta_range:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_ISSUE","ctclDT_END:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("발행구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_ISSUE","staTY_ISSUE:0.0","10.0","94","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_innerdataset("dsTY_ISSUE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("거래처");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","staCD_CORP:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SALEBUY","ccfCD_VENDOR:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoTY_SALEBUY","staTY_SALEBUY:0.0","staCD_CORP:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsTY_SALEBUY");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_VATPROOF","crdoTY_SALEBUY:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("증빙선택");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_VATPROOF","staTY_VATPROOF:0.0","staCD_CORP:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","70%",null,"5","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ns-resize");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitleSub","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("상세내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","staTitleSub:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("3");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT_SELFACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_END","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfTY_VATPROOF.form.CDTextBox","value","dsSearch","TY_VATPROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.crdoTY_SALEBUY","value","dsSearch","TY_SALEBUY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccboTY_ISSUE","value","dsSearch","TY_ISSUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_BUYVENDORSUM.xfdl", function() {
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
        	/*this.fnSetCombo();*/
        	//this.fnSetCombo1();

        	var today = this.gfnGetDate();

        	this.dsSearch.setColumn(0, "DT_START", this.gfnGetFirstDate(today));
        	this.dsSearch.setColumn(0, "DT_END", today);

        	this.ccboTY_ISSUE.set_index(0);
        	this.crdoTY_SALEBUY.set_index(0);

        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        	this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.UserInfo.CD_DEPT_SELFACNT);
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT")))
        		this.divSearch.form.ccfCD_DEPT_SELFACNT.form.fnCodeFindLoad();
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드
        	this.ccfCD_DEPT_SELFACNT = this.divSearch.form.ccfCD_DEPT_SELFACNT;
        	this.ctclDT_START = this.divSearch.form.ctclDT_START;
        	this.ctclDT_END = this.divSearch.form.ctclDT_END;
        	this.crdoTY_SALEBUY = this.divSearch.form.crdoTY_SALEBUY;
        	this.ccboTY_ISSUE = this.divSearch.form.ccboTY_ISSUE;
        	//this.ccboTY_VATPROOF = this.divSearch.form.ccboTY_VATPROOF;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	//this.ccboTY_VATBGJE = this.divSearch.form.ccboTY_VATBGJE;


        	this.ccfTY_VATPROOF = this.divSearch.form.ccfTY_VATPROOF;

        	//그리드
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };

        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetExtendButton = function() {

        	this.btnDetailVat = this.gfnFormButtonAdd("btnDetailVat", "fnDetailVat");
         	this.btnSlipDetail = this.gfnFormButtonAdd("btnSlipDetail", "fnSlipDetail");
        };

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("DT_START", "string");
        	this.dsSelect.addColumn("DT_END", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("YN_VATAPPR", "string");
        	//this.dsSelect.addColumn("TY_VATPROOF", "string");

        	this.dsSelect.addColumn("CD_PROOF", "string");
        	//this.dsSelect.addColumn("TY_VATBGJE", "string");
        	this.dsSelect.addColumn("TY_SALEBUY", "string");
        	this.dsSelect.addColumn("TY_ISSUE", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelectSub.addColumn("DT_START", "string");
        	this.dsSelectSub.addColumn("DT_END", "string");
        	this.dsSelectSub.addColumn("CD_VENDOR", "string");
        	this.dsSelectSub.addColumn("YN_VATAPPR", "string");
        	//this.dsSelectSub.addColumn("TY_VATPROOF", "string");
        	//this.dsSelectSub.addColumn("TY_VATBGJE", "string");
        	this.dsSelectSub.addColumn("TY_SALEBUY", "string");
        	this.dsSelectSub.addColumn("TY_ISSUE", "string");

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("PARAM", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
        }

        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_BUYVENDORSUM");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHV_BUYVENDORSUM_01");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.gfnGridColumnColor(this.dxGrid, "CD_VENDOR","BACK_Soke", "CD_VENDOR == '합계'", true);

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_DEPT_SELFACNT.CodeFindName = "DHX_CFSELFACNT_MULTI"; //"DHX_CFSELFACNT";
        	this.ccfCD_DEPT_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfTY_VATPROOF.CodeFindName = "DHX_COMMON_CODEFIND_SELECT_MULTI";
        	this.ccfTY_VATPROOF.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfTY_VATPROOF.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_VENDOR.CodeFindName = "DHX_CFALLVENDOR_CODEFIND";	//DHX_CFVENDOR_BY_TYVENDOR
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        }

        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		this.btnDetailVat.set_enable(true);
        		this.btnSlipDetail.set_enable(true);

        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "detail") {
        		if(this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR") == "합계")
        		{
        			this.btnDetailVat.set_enable(false);
        			this.btnSlipDetail.set_enable(false);
        		}
        		else
        		{
        			this.btnDetailVat.set_enable(true);
        			this.btnSlipDetail.set_enable(true);
        		}
        	}

        // 	if(svcID == "combo") {
        // 		this.dsTY_VATPROOF.insertRow(0);
        // 		this.dsTY_VATPROOF.setColumn(0, "CD_CODE", "");
        // 		this.dsTY_VATPROOF.setColumn(0, "DS_CODE", "전체");
        // 		//this.ccboTY_VATPROOF.set_index(0);
        // 	}
        //
        // 	else if(svcID == "combo1") {
        // 		this.dsTY_VATBGJE.insertRow(0);
        // 		this.dsTY_VATBGJE.setColumn(0, "CD_CODE", "");
        // 		this.dsTY_VATBGJE.setColumn(0, "DS_CODE", "전체");
        // 		this.ccboTY_VATBGJE.set_index(0);
        // 	}

        }

        this.fnSelectValidation = function() {
        	var validate = true;

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT"))) {
        		this.ccfCD_DEPT_SELFACNT.form.CDTextBox.setFocus();
        		this.gfnAlert("세무단위를 입력하세요.");
        		validate = false;
        	}
        // 	else if(this.dsSearch.getColumn(0, "TY_VENDOR") != "A" && this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR")))
        // 	{
        // 		this.ccfCD_VENDOR.form.CDTextBox.setFocus();
        // 		this.gfnAlert("거래처를 입력하세요.");
        // 		validate = false;
        // 	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_START"))){
        		this.gfnAlert("증빙기간(시작일)은 필수입니다.");
        		this.ctclDT_START.setFocus();
        		validate = false;
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_END"))){
        		this.gfnAlert("증빙기간(종료일)은 필수입니다.");
        		this.ctclDT_END.setFocus();
        		validate = false;
        	}
        	else if(this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_START"), this.dsSearch.getColumn(0, "DT_END")) <= -1){
        		this.gfnAlert("증빙기간의 시작일은 종료일보다 작아야 합니다.");
        		this.ctclDT_START.setFocus();
        		validate = false;
        	}
        	else if(this.dsSearch.getColumn(0, "DT_START").substr(0, 4) != this.dsSearch.getColumn(0, "DT_END").substr(0, 4)) {
        		this.gfnAlert("증빙기간의 범위는 같은 기간중으로 입력하셔야 합니다.");
        		this.ctclDT_START.setFocus();
        		validate = false;
        	}

        	return validate;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "DT_START", this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSelect.setColumn(0, "DT_END", this.dsSearch.getColumn(0, "DT_END"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "YN_VATAPPR", "Y");
        	this.dsSelect.setColumn(0, "CD_PROOF", this.dsSearch.getColumn(0, "TY_VATPROOF"));
        	//this.dsSelect.setColumn(0, "TY_VATPROOF", this.dsSearch.getColumn(0, "TY_VATPROOF"));
        	//this.dsSelect.setColumn(0, "TY_VATBGJE", this.dsSearch.getColumn(0, "TY_VATBGJE"));
        	this.dsSelect.setColumn(0, "TY_SALEBUY", this.dsSearch.getColumn(0, "TY_SALEBUY"));
        	this.dsSelect.setColumn(0, "TY_ISSUE", this.dsSearch.getColumn(0, "TY_ISSUE"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

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

        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom");
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
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {
        	if (this.dsList.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelectSub.setColumn(0, "DT_START", this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSelectSub.setColumn(0, "DT_END", this.dsSearch.getColumn(0, "DT_END"));
        	this.dsSelectSub.setColumn(0, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
        	this.dsSelectSub.setColumn(0, "YN_VATAPPR", "Y");
        	//this.dsSelectSub.setColumn(0, "TY_VATPROOF", this.dsSearch.getColumn(0, "TY_VATPROOF"));
        	//this.dsSelectSub.setColumn(0, "TY_VATBGJE", this.dsSearch.getColumn(0, "TY_VATBGJE"));
        	this.dsSelectSub.setColumn(0, "TY_SALEBUY", this.dsSearch.getColumn(0, "TY_SALEBUY"));
        	this.dsSelectSub.setColumn(0, "TY_ISSUE", this.dsSearch.getColumn(0, "TY_ISSUE"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "detail=dsSelectSub";
        	var outData     = "dsListSub=detail0";
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

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_CORP"){	// 법인코드
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}else if(id == "ccfCD_DEPT_SELFACNT"){	// 세무단위
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		//dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVCD_DEPT_ACNT);
        	}else if(id == "ccfCD_VENDOR") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요!", "fnVaidateCallback");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        //		dsUserParam.setColumn(nrow, "TY_VENDOR", this.dsSearch.getColumn(0, "TY_VENDOR"));
        //        dsUserParam.setColumn(nrow, "CD_DEPT_REF", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        //        dsUserParam.setColumn(nrow, "ORIGENTTAX", "");

        	}


        	if(id== "ccfTY_VATPROOF") {
        		var tySaleBuy = this.dsSearch.getColumn(0, "TY_SALEBUY")
        		//var tySaleBuy = this.ccfTY_SALEBUY.value;	//거래구분
        		var cdType = (tySaleBuy == "I")? "V10" : "V11";
        		dsUserParam.setColumn(nrow, "CD_SYSTEM"	, "DH");		//시스템코드
        		dsUserParam.setColumn(nrow, "CD_TYPE"	, cdType);		//공통분류코드
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.ccfCD_DEPT_SELFACNT.form.fnCodeFindClear();
        			break;

        		case "ccfCD_VENDOR":	//거래처코드
        			//TY_VENDOR
        			if (arrData.length > 0) {
        				trace("TY_VENDOR->" + arrData[0]["TY_VENDOR"]);
        			}

        			break;

        		case "ccfTY_VATPROOF":	//거래처코드
        			if (arrData.length > 0) {
        				var strCdCode = "";
        				var strDsCode = "";
        				for(var r = 0; r < arrData.length; r++) {
        					strCdCode += arrData[r]["CD_CODE"]+",";
        					strDsCode += arrData[r]["DS_CODE"]+",";
        				}

        				strCdCode = strCdCode.substr(0,strCdCode.length-1);
        				strDsCode = strDsCode.substr(0,strDsCode.length-1);

        				this.ccfTY_VATPROOF.form.CDTextBox.set_value(strCdCode);
        				this.ccfTY_VATPROOF.form.DSTextBox.set_value(strDsCode);

        			}

        			break;

        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e) {
            if ((obj.oldrow > -1 && obj.oldrow == e.row) || (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };

        this.divData_divDataBottom_objGridSub_oncelldblclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGridSub)) { return false; }

        	if(this.btnDetailVat.enable == false) return false;

        	var nrow = this.dsListSub.rowposition;

        	var cd_slip = this.gfnNvl(this.dsListSub.getColumn(nrow, "CD_SLIP"),"").trim();
        	var no_vat = this.dsListSub.getColumn(nrow, "NO_VAT");

        	this.fnVatOpen("S", cd_slip, no_vat, "");
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	매입/매출 변경시 증빙구분 설정
         */
        this.fnSetCombo = function() {
        	this.dsCombo.clearData();

        	this.dsCombo.addRow();

        	if (this.crdoTY_SALEBUY.value == "") {
        		this.dsCombo.setColumn(0, "PARAM", "매입세금계산서");
        	} else {
        		var TY_GUBUN = this.crdoTY_SALEBUY.text + "세금계산서";
        		this.dsCombo.setColumn(0, "PARAM", TY_GUBUN);
        	}

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_VATPROOF=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        /*
         *	증빙구분 변경시 세부증빙 설정
         */
        this.fnSetCombo1 = function() {
        	this.dsCombo.clearData();
        	//this.dsTY_VATBGJE.clearData();

        	if (this.dsSearch.getColumn(0, "TY_VATPROOF") == "") {
        		this.dsTY_VATBGJE.clearData();
        	} else {
        		this.dsCombo.addRow();
        		this.dsCombo.setColumn(0, "PARAM", this.dsSearch.getColumn(0, "TY_VATPROOF").trim());
        	}

        	var strSvcId    = "combo1";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_VATBGJE=combo0";
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

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);

        // 		if(e.columnid == "TY_SALEBUY")
        // 		{
        // 			this.fnSetCombo();
        // 		}
        // 		else if(e.columnid == "TY_VATPROOF")
        // 		{
        // 			this.fnSetCombo1();
        // 		}

        // 		if(e.columnid == "TY_VENDOR")
        // 		{
        // 			if(e.newvalue != "A")
        // 			{
        // 				this.divSearch.form.staCD_VENDOR.set_textDecoration("underline");
        // 				this.ccfCD_VENDOR.set_enable(true);
        // 			}
        // 			else
        // 			{
        // 				this.divSearch.form.staCD_VENDOR.set_textDecoration("none");
        // 				this.ccfCD_VENDOR.set_enable(false);
        // 			}
        // 			this.ccfCD_VENDOR.form.fnCodeFindClear();
        // 		}
        	}
        };


        // 부가세 상세조회
        this.fnDetailVat = function()
        {
        	if(!this.gfnGridIsRow(this.dxGridSub)){
        		this.gfnAlert("하단 그리드의 데이터를 선택하세요.");
        		return;
        	}

        	var nrow = this.dsListSub.rowposition;

        	var cd_slip = this.gfnNvl(this.dsListSub.getColumn(nrow, "CD_SLIP"),"").trim();
        	var no_vat = this.dsListSub.getColumn(nrow, "NO_VAT");

        	this.fnVatOpen("S", cd_slip, no_vat, "");
        }

        this.fnVatOpen = function(iud_flag, no_slip, no_vat, yn_direct)
        {
        	var param = {};

        	param.IUD_FLAG = iud_flag;
        	param.NO_VAT = no_vat;
        	param.CD_SLIP = no_slip;
        	param.CD_CORP = this.AuthClient.CD_CORP;
        	param.TY_SALEBUY = "O";
        	param.YN_DIRECT = yn_direct;
        	param.VAT_MENU = "Y";
        	param.CD_DEPT = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_DEPT_ACNT");
        	param.DS_DEPT = this.dsListSub.getColumn(this.dsListSub.rowposition, "DS_DEPT_ACNT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_ISSUEVATDLG", "fnVatOpenCallback", param);
        }

        this.fnVatOpenCallback = function(strId, val)
        {
        	if(val != false)
        	{
        		var json = JSON.parse(val);
        		if(json.blsSave == true)
        		{
        			this.FormBtns.Select.click();
        		}
        	}
        }

        // 전표조회
        this.fnSlipDetail = function()
        {
        	if(!this.gfnGridIsRow(this.dxGridSub)){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	var param = {};

        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnNvl(this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SLIP"),"").replace("-","");
        	param.YN_JUNDO_START = "";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "fnSlipDetailCallback", param);
        }


        this.fnSlipDetailCallback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_DEPT_SELFACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staDT_START_TO.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_VENDOR.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staTY_VATPROOF.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataTop.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divDataBottom.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divDataBottom.form.objGridSub.addEventHandler("oncelldblclick",this.divData_divDataBottom_objGridSub_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_BUYVENDORSUM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
