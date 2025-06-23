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
            this.set_titletext("채권채무상계");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHCPR_CLMOB_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DHCPR_CLMOB_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_BH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT_BOND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT_BOND\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR_BOND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR_BOND\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM_BOND\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO_BOND\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT_DEBT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT_DEBT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR_DEBT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR_DEBT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM_DEBT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO_DEBT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("3");
            obj.set_text("법인코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0","10","280","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("AutoSet").set("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BE","464","10","300","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT_SELECT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BH","ccfCD_DEPT_BE:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("발행부서");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BH","staCD_DEPT_BH:0","10","280","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT_SELECT");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BE","ccfCD_CORP:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","34.38%","51.43%","400","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cursor("ns-resize");
            obj.set_edge("url(\'theme://images/slt_WF_SplitterH.png\') 2px 0px");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staGrdTitleSub","0","0","130","35",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("대변미결 계정현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","staGrdTitleSub:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT_DEBT",null,"5","92","24","929",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("계정코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("cfCD_ACCOUNT_DEBT",null,"5","259","24","670",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFACNT_AP");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR_DEBT",null,"5","79","24","591",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR_DEBT",null,"5","259","24","332",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFVENDOR");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staDT_FROM_DEBT",null,"5","92","24","240",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("10");
            obj.set_text("전기일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Calendar("tclDT_FROM_DEBT",null,"5","110","24","130",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta05",null,"5","20","24","110",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staDT_TO_DEBT","tclDT_FROM_DEBT:14","5","10","24",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("7");
            obj.set_text("전기일자");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Calendar("tclDT_TO_DEBT",null,"5","110","24","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:6",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staGrdTitle","0","0","130","35",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("차변미결 계정현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staGrdTitle:0",null,null,"0","1",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT_BOND",null,"5","92","24","929",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("계정코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfCD_ACCOUNT_BOND",null,"5","259","24","670",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFACNT_AR");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR_BOND",null,"5","79","24","591",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR_BOND",null,"5","259","24","332",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFVENDOR");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_FROM_BOND",null,"5","92","24","240",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_text("전기일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("tclDT_FROM_BOND",null,"5","110","24","130",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta05",null,"5","20","24","110",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_TO_BOND","tclDT_FROM_BOND:14","5","10","24",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_text("전기일자");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("tclDT_TO_BOND",null,"5","110","24","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT_BH.form.CDTextBox","value","dsSearch","CD_DEPT_BH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT_BH.form.DSTextBox","value","dsSearch","DS_DEPT_BH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPT_BE.form.CDTextBox","value","dsSearch","CD_DEPT_BE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT_BE.form.DSTextBox","value","dsSearch","DS_DEPT_BE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.cfCD_ACCOUNT_BOND.form.CDTextBox","value","dsSearch","CD_ACCOUNT_BOND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.cfCD_ACCOUNT_BOND.form.DSTextBox","value","dsSearch","DS_ACCOUNT_BOND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.cfCD_VENDOR_BOND.form.CDTextBox","value","dsSearch","CD_VENDOR_BOND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.cfCD_VENDOR_BOND.form.DSTextBox","value","dsSearch","DS_VENDOR_BOND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.tclDT_TO_BOND","value","dsSearch","DT_TO_BOND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.tclDT_FROM_BOND","value","dsSearch","DT_FROM_BOND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataBottom.form.cfCD_ACCOUNT_DEBT.form.CDTextBox","value","dsSearch","CD_ACCOUNT_DEBT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataBottom.form.cfCD_ACCOUNT_DEBT.form.DSTextBox","value","dsSearch","DS_ACCOUNT_DEBT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataBottom.form.cfCD_VENDOR_DEBT.form.CDTextBox","value","dsSearch","CD_VENDOR_DEBT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataBottom.form.cfCD_VENDOR_DEBT.form.DSTextBox","value","dsSearch","DS_VENDOR_DEBT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataBottom.form.tclDT_TO_DEBT","value","dsSearch","DT_TO_DEBT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataBottom.form.tclDT_FROM_DEBT","value","dsSearch","DT_FROM_DEBT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHC_CLMOB_SELECT.xfdl", function() {
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

        	var toDay    = this.gfnGetDate();
        	var addMonth = this.gfnAddMonth(toDay, -1);

        	this.dsSearch.set_enableevent(false);
        	this.dsSearch.setColumn(0, "CD_CORP"	 	, this.AuthClient.CD_CORP);			//법인코드
        	this.dsSearch.setColumn(0, "DS_CORP"	 	, this.AuthClient.DS_CORP);			//법인코드명
        	this.dsSearch.setColumn(0, "CD_DEPT_BE"	 	, this.AuthClient.CD_DEPT_ACNT);	//발행부서
        	this.dsSearch.setColumn(0, "DS_DEPT_BE"	 	, this.AuthClient.DS_DEPT_ACNT);	//발행부서명
        	this.dsSearch.setColumn(0, "DT_FROM_BOND" 	 , addMonth.substring(0, 6)+"01");	//차변 전기일자(전월1일)
        	this.dsSearch.setColumn(0, "DT_TO_BOND"	 	 , toDay);							//차변 전기일자(현재일자)
        	this.dsSearch.setColumn(0, "DT_FROM_DEBT" 	 , addMonth.substring(0, 6)+"01");	//대변 전기일자(전월1일)
        	this.dsSearch.setColumn(0, "DT_TO_DEBT"	 	 , toDay);							//대변 전기일자(현재일자)
        	this.dsSearch.set_enableevent(true);

        	this.ccfCD_CORP.form.CDTextBox.setFocus();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnBondSearch  = this.gfnFormButtonAdd("BondSearch" , "fnBondSearch");  	//차번조회
        	this.btnDebtSearch  = this.gfnFormButtonAdd("DebtSearch" , "fnDebtSearch");		//대변조회
        	this.btnSlipPub     = this.gfnFormButtonAdd("SlipPub"	 , "fnSlipPub");		//상계전표발행
        	this.btnSlipSearchD = this.gfnFormButtonAdd("SlipSearchD", "fnSlipSearch");		//차변전표조회
        	this.btnSlipSearchC = this.gfnFormButtonAdd("SlipSearchC", "fnSlipSearch");		//대변전표조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.gfnSetElements();

        	this.staGrdTitle    = this.divData.form.divDataTop.form.staGrdTitle;
        	this.staGrdTitleSub = this.divData.form.divDataBottom.form.staGrdTitleSub;

        	this.dxGrid    = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_DEPT_BE.BeforeUserDataSetParam 	  = "fnBeforeUserDataSetParam";	//귀속부서
         	this.ccfCD_DEPT_BH.BeforeUserDataSetParam 	  = "fnBeforeUserDataSetParam";	//발행부서
         	this.cfCD_ACCOUNT_BOND.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	//계정코드(차변)
        	this.cfCD_VENDOR_BOND.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	//거래처(차변)
         	this.cfCD_ACCOUNT_DEBT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	//계정코드(대변)
        	this.cfCD_VENDOR_DEBT.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	//거래처(대변)

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid   , this.dsList   , "DH", "DHC_CLMOB_BOND_SELECT");
        	//this.dxGrid.set_selecttype("cell");
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";
        	this.dxGrid.addEventHandler("oncelldblclick" , this.fnGrid_OnCelldblclick, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHC_CLMOB_DEBT_SELECT");
        	//this.dxGridSub.set_selecttype("cell");
        	this.dxGridSub.AfterEdit = "fnGrid_AfterEdit";
        	this.dxGridSub.AfterAllCheck = "fnGrid_AfterAllCheck";
        	this.dxGridSub.addEventHandler("oncelldblclick" , this.fnGrid_OnCelldblclick, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"	, "string");
        	this.dsSelect.addColumn("CD_ACCOUNT", "string");
        	this.dsSelect.addColumn("CD_DEPT_BE", "string");
        	this.dsSelect.addColumn("CD_DEPT_BH", "string");
        	this.dsSelect.addColumn("CD_VENDOR"	, "string");
        	this.dsSelect.addColumn("DT_FROM"	, "string");
        	this.dsSelect.addColumn("DT_TO"		, "string");
        	this.dsSelect.addColumn("TY_MIGEUL"	, "string");

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("CD_CORP"	 , "string");
        	this.dsSelect2.addColumn("CD_ACCOUNT", "string");
        	this.dsSelect2.addColumn("CD_DEPT_BE", "string");
        	this.dsSelect2.addColumn("CD_DEPT_BH", "string");
        	this.dsSelect2.addColumn("CD_VENDOR" , "string");
        	this.dsSelect2.addColumn("DT_FROM"	 , "string");
        	this.dsSelect2.addColumn("DT_TO"	 , "string");
        	this.dsSelect2.addColumn("TY_MIGEUL" , "string");

        	this.dsResult = new Dataset();
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function(tyMigeul) {
        	if (!this.fnSelectValidate(tyMigeul)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelect.clearData();
        	this.dsSelect2.clearData();

        	var inData = "", outData = "";
        	if(this.gfnIsNull(tyMigeul)){
        		var nRow = this.dsSelect.addRow();
        		this.dsSelect.setColumn(0, "CD_CORP"	 , this.dsSearch.getColumn(0, "CD_CORP"));          // 법인코드
        		this.dsSelect.setColumn(0, "CD_DEPT_BH"  , this.dsSearch.getColumn(0, "CD_DEPT_BH"));  		// 발행부서
        		this.dsSelect.setColumn(0, "CD_DEPT_BE"	 , this.dsSearch.getColumn(0, "CD_DEPT_BE"));  		// 귀속부서
        		this.dsSelect.setColumn(0, "CD_ACCOUNT"	 , this.dsSearch.getColumn(0, "CD_ACCOUNT_BOND"));  // 계정코드
        		this.dsSelect.setColumn(0, "CD_VENDOR"	 , this.dsSearch.getColumn(0, "CD_VENDOR_BOND"));   // 거래처
        		this.dsSelect.setColumn(0, "DT_FROM"	 , this.dsSearch.getColumn(0, "DT_FROM_BOND"));		// 회계일자(시작)
        		this.dsSelect.setColumn(0, "DT_TO"		 , this.dsSearch.getColumn(0, "DT_TO_BOND"));		// 회계일자(종료)
        		this.dsSelect.setColumn(0, "TY_MIGEUL"   , "C");											// 미결구분(C:채권)

        		var nRow = this.dsSelect2.addRow();
        		this.dsSelect2.setColumn(0, "CD_CORP"	 , this.dsSearch.getColumn(0, "CD_CORP"));          // 법인코드
        		this.dsSelect2.setColumn(0, "CD_DEPT_BH" , this.dsSearch.getColumn(0, "CD_DEPT_BH"));  		// 발행부서
        		this.dsSelect2.setColumn(0, "CD_DEPT_BE" , this.dsSearch.getColumn(0, "CD_DEPT_BE"));  		// 귀속부서
        		this.dsSelect2.setColumn(0, "CD_ACCOUNT" , this.dsSearch.getColumn(0, "CD_ACCOUNT_DEBT"));  // 계정코드
        		this.dsSelect2.setColumn(0, "CD_VENDOR"	 , this.dsSearch.getColumn(0, "CD_VENDOR_DEBT"));   // 거래처
        		this.dsSelect2.setColumn(0, "DT_FROM"	 , this.dsSearch.getColumn(0, "DT_FROM_DEBT"));		// 회계일자(시작)
        		this.dsSelect2.setColumn(0, "DT_TO"		 , this.dsSearch.getColumn(0, "DT_TO_DEBT"));		// 회계일자(종료)
        		this.dsSelect2.setColumn(0, "TY_MIGEUL"  , "K");											// 미결구분(K:채무)

        		inData  = "select=dsSelect select2=dsSelect2";
        		outData = "dsList=select0 dsListSub=select20";
        	}else{
        		var nRow = this.dsSelect.addRow();
        		this.dsSelect.setColumn(0, "CD_CORP"	 , this.dsSearch.getColumn(0, "CD_CORP"));          	// 법인코드
        		this.dsSelect.setColumn(0, "CD_DEPT_BH"  , this.dsSearch.getColumn(0, "CD_DEPT_BH"));  			// 발행부서
        		this.dsSelect.setColumn(0, "CD_DEPT_BE"	 , this.dsSearch.getColumn(0, "CD_DEPT_BE"));  			// 귀속부서
        		this.dsSelect.setColumn(0, "CD_ACCOUNT"	 , this.dsSearch.getColumn(0, "CD_ACCOUNT_"+(tyMigeul == "C"?"BOND":"DEBT")));  // 계정코드
        		this.dsSelect.setColumn(0, "CD_VENDOR"	 , this.dsSearch.getColumn(0, "CD_VENDOR_"+(tyMigeul == "C"?"BOND":"DEBT")));   // 거래처
        		this.dsSelect.setColumn(0, "DT_FROM"	 , this.dsSearch.getColumn(0, "DT_FROM_"+(tyMigeul == "C"?"BOND":"DEBT")));		// 회계일자(시작)
        		this.dsSelect.setColumn(0, "DT_TO"		 , this.dsSearch.getColumn(0, "DT_TO_"+(tyMigeul == "C"?"BOND":"DEBT")));		// 회계일자(종료)
        		this.dsSelect.setColumn(0, "TY_MIGEUL"   , tyMigeul);

        		inData  = "select=dsSelect";
        		outData = (tyMigeul == "C" ? "dsList" : "dsListSub")+"=select0";
        	}

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	var arrGrid = [], arrSheetName = [];
        	arrGrid[0] = this.dxGrid;
        	arrGrid[1] = this.dxGridSub;

        	arrSheetName[0] = this.staGrdTitle.text;
        	arrSheetName[1] = this.staGrdTitleSub.text;

        	this.gfnExcelExportMulti(arrGrid, arrSheetName, this.FormInfo.NM_FORM);
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
        this.fnSelectValidate = function(tyMigeul) {
        	if(!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	if(this.gfnIsNull(tyMigeul)){
        		if(!this.gfnSearchValidate(this.divData.form.divDataTop, this.dsSearch)) return false;
        		if(!this.gfnSearchValidate(this.divData.form.divDataBottom, this.dsSearch)) return false;
        		if(!this.fnDateValidate("BOND")) return false;
        		if(!this.fnDateValidate("DEBT")) return false;
        	}else{
        		if(tyMigeul == "C"){	//차변
        			if(!this.gfnSearchValidate(this.divData.form.divDataTop, this.dsSearch)) return false;
        			if(!this.fnDateValidate("BOND")) return false;
        		}else{
        			if(!this.gfnSearchValidate(this.divData.form.divDataBottom, this.dsSearch)) return false;
        			if(!this.fnDateValidate("DEBT")) return false;
        		}
        	}

        	return true;
        };

        this.fnDateValidate = function (colType){
        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM_"+colType)) || !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO_"+colType))){
        		if(this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_FROM_"+colType), this.dsSearch.getColumn(0, "DT_TO_"+colType)) <= -1){
        			this.gfnAlert("전기일자의 시작일은 종료일보다 작아야 합니다.");
        			var divComp = this.divData.form.divDataTop.form;
        			if(colType == "DEBT"){
        				divComp = this.divData.form.divDataBottom.form;
        			}

        			this.gfnLookup(divComp, "tclDT_FROM_"+colType).setFocus();

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
        	if(svcID == "select"){
        		this.gfnGridAfterSelect(this.dxGrid);

         		if(this.dsList.rowcount > 0 || this.dsListSub.rowcount > 0){
         			this.gfnSetEnable(this.FormBtns.Excel, true);
         		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        		this.gfnAlert("법인코드를 먼저 선택하세요.", function (){
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		});
        		return false;
        	}
        	switch(id) {
        	case "ccfCD_DEPT_BE" :	//귀속부서
        	case "ccfCD_DEPT_BH" :	//발행부서
        		dsUserParam.setColumn(nrow, "CD_CORP"	  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "ID_USER"	  , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_DEPT_ACNT", this.AuthClient.CD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "CD_DIV"	  , "S");
        		dsUserParam.setColumn(nrow, "REF_01"	  , "");
        		dsUserParam.setColumn(nrow, "REF_02"	  , "");
        		dsUserParam.setColumn(nrow, "REF_03"	  , "");
        		dsUserParam.setColumn(nrow, "REF_04"	  , "");
        		dsUserParam.setColumn(nrow, "REF_05"	  , "");
        		break;
        	case "cfCD_ACCOUNT_BOND" :	//계정코드
        	case "cfCD_ACCOUNT_DEBT" :

        		dsUserParam.setColumn(nrow, "CD_CORP"	  , this.dsSearch.getColumn(0, "CD_CORP"));
        		break;
        	case "cfCD_VENDOR_BOND" :	//거래처
        	case "cfCD_VENDOR_DEBT" :
        		dsUserParam.setColumn(nrow, "CD_CORP"	  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "TY_VENDOR"   , "");
        		dsUserParam.setColumn(nrow, "YN_USE"  	  , "Y");
        		break;
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        //헤더 전체체크 이벤트
        this.fnGrid_AfterAllCheck = function(obj, cell, isChecked)
        {
        	var objDs = this.dsList;
        	if(obj.name == "objGridSub"){
        		objDs = this.dsListSub;
        	}

        	objDs.set_enableevent(false);
        	for(var i = 0; i < objDs.rowcount; i++){

        		var amRemain = (isChecked ? nexacro.toNumber(objDs.getColumn(i, "AM_REMAIN_UNBOUND"),0) : 0);
        		//잔액을 반제금액에 넣기
        		objDs.setColumn(i, "AM_REMAIN", amRemain);
        		//금액 계산
        		this.fnRemainCalc(objDs, amRemain, i);

        	}
        	objDs.set_enableevent(true);
        };

        this.fnGrid_AfterEdit = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		if(e.columnid == "CHK"){	//선택
        			var amRemain = (e.newvalue == 1 ? nexacro.toNumber(obj.getColumn(e.row, "AM_REMAIN_UNBOUND"),0) : 0);

        			obj.set_enableevent(false);
        			//잔액을 반제금액에 넣기
        			obj.setColumn(e.row, "AM_REMAIN" , amRemain);
        			//금액 계산
        			this.fnRemainCalc(obj, amRemain, e.row);
        			obj.set_enableevent(true);
        		}else if(e.columnid == "AM_REMAIN"){	//반제금액
        			obj.set_enableevent(false);
        			//금액 계산
        			this.fnRemainCalc(obj, nexacro.toNumber(e.newvalue,0), e.row);

        			//체크박스 체크 처리
        			obj.setColumn(e.row, "CHK", (amRemain != 0 ? 1 : 0));
        			obj.set_enableevent(true);
        		}
        	}
        }

        //금액 계산
        this.fnRemainCalc = function (objDs, amRemain, row)
        {
        	var tyCrdr = objDs.getColumn(row, "TY_CRDR");
        	var amDr = (tyCrdr == "D" ? amRemain : 0);
        	var amCr = (tyCrdr == "C" ? amRemain : 0);

        	objDs.setColumn(row, "AM_DR" , amDr);	//차변금액
        	objDs.setColumn(row, "AM_CR" , amCr);	//대변금액

        	var amAccount = nexacro.toNumber(objDs.getColumn(row, "AM_ACCOUNT"),0);	//발생금액
        	var amJungSan = nexacro.toNumber(objDs.getColumn(row, "AM_JUNGSAN"),0);	//정산금액
        	objDs.setColumn(row, "AM_REMAIN_UNBOUND", amAccount-amJungSan-amRemain);	//잔액
        };

        //그리드 더블클릭 이벤트
        this.fnGrid_OnCelldblclick = function(obj,e){
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm != "AM_REMAIN"){
        		if(obj.name == "objGrid"){
        			this.btnSlipSearchD.click();
        		}else{
        			this.btnSlipSearchC.click();
        		}
        	}
        };

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.divData_ondragmove = function(obj,e){
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e){
        	e.set_userdata("splitter");
        	return true;
        };

        //검색조건 변경 이벤트
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {

        		if((e.columnid).indexOf("BOND") > -1){
        			this.gfnGridClear(this.dxGrid);
        		}else if((e.columnid).indexOf("DEBT") > -1){
        			this.gfnGridClear(this.dxGridSub);
        		}else{
        			this.gfnGridClear(this.dxGrid);
        			this.gfnGridClear(this.dxGridSub);

        			if(e.columnid == "CD_CORP"){
        				this.cfCD_ACCOUNT_BOND.form.fnCodeFindClear(false);
        				this.cfCD_VENDOR_BOND.form.fnCodeFindClear(false);
        				this.cfCD_ACCOUNT_DEBT.form.fnCodeFindClear(false);
        				this.cfCD_VENDOR_DEBT.form.fnCodeFindClear(false);
        				this.ccfCD_DEPT_BE.form.fnCodeFindClear(false);
        				this.ccfCD_DEPT_BH.form.fnCodeFindClear(false);
        			}
        		}
        	}
        };

        //차변조회
        this.fnBondSearch = function (obj,e){
        	this.fnSelect("C");
        }

        //대변조회
        this.fnDebtSearch = function (obj,e){
        	this.fnSelect("K");
        }

        //데이터 체크
        this.fnCheckData = function (){
        	var chkCnt = 0;
        	var strRowMsg = "";
        	var amReMainC = 0, amReMainK = 0;
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK") == 1 && this.dsList.getColumn(i, this.ucFlag) != "#"){
        			if(nexacro.toNumber(this.dsList.getColumn(i, "AM_REMAIN"),0) == 0){
        				strRowMsg += "차변미결 " + (i + 1) + "행 : [반제금액]을 입력하세요.\n";
        			}

        			if(0 > nexacro.toNumber(this.dsList.getColumn(i, "AM_REMAIN_UNBOUND"),0)){
        				strRowMsg += "차변미결 " + (i + 1) + "행 : [잔액]은 정산금액보다 작거나 같아야 합니다.\n";
        			}

        			amReMainC += nexacro.toNumber(this.dsList.getColumn(i, "AM_REMAIN"),0);
        			chkCnt++;
        		}
        	}

        	for(var i=0;i<this.dsListSub.rowcount;i++){
        		if(this.dsListSub.getColumn(i, "CHK") == 1 && this.dsListSub.getColumn(i, this.ucFlag) != "#"){
        			if(nexacro.toNumber(this.dsListSub.getColumn(i, "AM_REMAIN")) == 0){
        				strRowMsg += "대변미결 " + (i + 1) + "행 : [반제금액]을 입력하세요.\n";
        			}

        			if(0 > nexacro.toNumber(this.dsListSub.getColumn(i, "AM_REMAIN_UNBOUND"),0)){
        				strRowMsg += "대변미결 " + (i + 1) + "행 : [잔액]은 정산금액보다 작거나 같아야 합니다.\n";
        			}
        			amReMainK += nexacro.toNumber(this.dsListSub.getColumn(i, "AM_REMAIN"),0);
        			chkCnt++;
        		}
        	}

        	if(chkCnt == 0){
        		this.gfnAlert("선택된 데이터가 없습니다.");
        		return false;
        	}

        	if(!this.gfnIsNull(strRowMsg)){
        		this.gfnAlert(strRowMsg);
        		return false;
        	}

        	if(amReMainC == 0){
        		this.gfnAlert("차변 데이터를 선택하세요.");
        		return false;
        	}else if(amReMainK == 0){
        		this.gfnAlert("대변 데이터를 선택하세요.");
        		return false;
        	}

        /*
        	if(amReMainC != amReMainK){
        		this.gfnAlert("반제금액 밸런스가 맞지 않습니다.");
        		return false;
        	}
        */

        	return true;
        };

        //상계전표발행
        this.fnSlipPub = function (obj,e){
        	if(!this.fnCheckData()) return;

        	this.gfnConfirm("전표발행 하시겠습니까?", function (strId, val){
        		if(val){

        			this.dsResult.set_enableevent(false);

        			//차변 데이터 컬럼/데이터 복사
        			this.dsResult.copyData(this.dsList, true);

        			this.dsResult.clearData();

        			for(var i =0;i<this.dsList.getRowCount();i++){
        				if(this.dsList.getColumn(i, this.ucFlag) != "#"){
        					if(this.dsList.getColumn(i, "CHK") == 1 && this.dsList.getRowLevel(i) == 0){
        						var nRow = this.dsResult.addRow();

        						this.dsResult.copyRow(nRow, this.dsList, i);
        						this.dsResult.setColumn(nRow, this.ucFlag, "I");

        					}
        				}
        			}

        			//대변 데이터 복사
        			for(var i =0;i<this.dsListSub.getRowCount();i++){
        				if(this.dsListSub.getColumn(i, this.ucFlag) != "#"){
        					if(this.dsListSub.getColumn(i, "CHK") == 1 && this.dsListSub.getRowLevel(i) == 0){
        						var nRow = this.dsResult.addRow();
        						this.dsResult.copyRow(nRow, this.dsListSub, i);
        						this.dsResult.setColumn(nRow, this.ucFlag, "I");
        					}
        				}
        			}

        			this.dsResult.set_enableevent(true);

        			if(this.dsResult.rowcount == 0) return;

        			var param = {};
        			param.dsResult = this.dsResult.saveXML();
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP_STD", "fnIssueSlipCallbak", param);
        		}
        	});

        }

        //전표발행 팝업 콜백
        this.fnIssueSlipCallbak = function (strID, val){
        	if(!this.gfnIsNull(val)){
        		var json = JSON.parse(val);

        		if(json.IsChange){
        			this.FormBtns.Select.click();
        		}
        	}
        };

        //전표조회
        this.fnSlipSearch = function (obj,e){
        	var objGrid = this.dxGrid;
        	if((obj.name).indexOf("SlipSearchC") > -1){	//대변 전표조회
        		objGrid = this.dxGridSub;
        	}

        	if(!this.gfnGridIsRow(objGrid)) return;

        	var objDs = objGrid.getBindDataset();

        	if(this.gfnIsNull(objDs.getColumn(objDs.rowposition, "CD_TRADE"))){
        		return;
        	}

        	var param = {};
        	param.CD_CORP  = this.dsSearch.getColumn(0, "CD_CORP");
        	param.CD_TRADE = objDs.getColumn(objDs.rowposition, "CD_TRADE");

        	this.gfnPopIssueSlip(param);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHC_CLMOB_SELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
