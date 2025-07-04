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
            this.set_titletext("전표발행");
            this.getSetter("maxwidth").set("485");
            this.getSetter("maxheight").set("480");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUPPORT\" type=\"FLOAT\" size=\"256\"/><Column id=\"ID_ISSUE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PROOF\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROOF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUPPLY\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_VAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"VAT_RATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"TY_VATBGJE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUM\" type=\"FLOAT\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_EDU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"RT_EXCH\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DABPR_EDU_REQ_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectExc</Col><Col id=\"SP\">DHXPR_CURRENCY_EXCHAGE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CURR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtEx", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROOF_bg","109","231",null,"30","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_REM_bg00_00_00_01","109","116",null,"30","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAM_SUM_bg","109","318",null,"30","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAM_VAT","0","289","110","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("부가세액");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_REM","0","staAM_VAT:-175","110","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("적요");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_REM_bg","staDS_REM:-1","145",null,"30","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAM_SUPPLY","0","260","110","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("공급가액");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAM_VAT_bg","staAM_VAT:-1","289",null,"30","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PROOF","0","231","110","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("증빙선택");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAM_SUPPLY_bg","staAM_SUPPLY:-1","260",null,"30","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_ISSUE","0","202","110","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("전자세금계산서");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_ACCOUNT_bg","staCD_PROOF:-1","173",null,"30","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ACCOUNT","0","29","110","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("회계일자");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelTE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ACCOUNT_bg","staDT_ACCOUNT:-1","29",null,"30","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","0","58","110","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("자금집행일자");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ACCOUNT_bg00","staDT_REQUEST:-1","58",null,"30","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAM_ACCOUNT","0","staDT_REQUEST:-1","110","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("교육지원금액");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAM_SUPPORT_bg","staAM_ACCOUNT:-1","87",null,"30","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_ISSUE_bg","staID_ISSUE:-1","202",null,"30","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTITLE","2","0","200","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("전표발행");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("tclDT_ACCOUNT","staDT_ACCOUNT:5","staDT_ACCOUNT:-25","105","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_REM","staDS_REM:5","staDS_REM:-25",null,"20","5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divBtns","160",null,"130","27",null,"0",null,null,null,null,this.divSearch.form);
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","27",null,null,null,null,null,null,this.divSearch.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divSearch.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","27",null,null,null,null,null,null,this.divSearch.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divSearch.form.divBtns.addChild(obj.name, obj);

            obj = new Calendar("tclDT_REQUEST","115","63","105","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SUPPORT","190","92","120","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_format("###,###,###,###,###,##0");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_ISSUE","115","207","231","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("205");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROOF","115","236",null,"20","5",null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("35");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SUPPLY","115","265","120","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_format("###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_VAT","115","294","120","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_format("###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAM_SUM","0","318","110","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("회계금액");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SUM","115","323","120","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_format("###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PROOF00","0","116","110","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("거래처");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","115","121",null,"20","5",null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PROOF01","0","173","110","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("집행계좌");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_ACCOUNT","115","179",null,"20","5",null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("33");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_CURR","115","92","73","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_CURR");
            obj.set_enable("false");
            obj.set_text("KRW");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.tclDT_ACCOUNT","value","dsSearch","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtDS_REM","value","dsSearch","DS_REM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.tclDT_REQUEST","value","dsSearch","DT_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_ISSUE.form.CDTextBox","value","dsSearch","ID_ISSUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_PROOF.form.CDTextBox","value","dsSearch","CD_PROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_PROOF.form.DSTextBox","value","dsSearch","DS_PROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.mskAM_SUPPLY","value","dsSearch","AM_SUPPLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.mskAM_VAT","value","dsSearch","AM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.mskAM_SUM","value","dsSearch","AM_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_VENDOR.form.DSTextBox","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccfNO_ACCOUNT.form.CDTextBox","value","dsSearch","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ccfNO_ACCOUNT.form.DSTextBox","value","dsSearch","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.mskAM_SUPPORT","value","dsSearch","AM_SUPPORT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.cboCD_CURR","value","dsList","CD_CURR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_EDU_SLIP_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj, e) {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnInit();
        }

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.tclDT_ACCOUNT = this.divSearch.form.tclDT_ACCOUNT;	// 회계일자
        	this.tclDT_REQUEST = this.divSearch.form.tclDT_REQUEST;	// 자금집행일자
        	this.edtDS_REM     = this.divSearch.form.edtDS_REM;		// 적요
        	this.mskAM_SUM	   = this.divSearch.form.mskAM_SUM;		// 회계금액
        	this.ccfID_ISSUE   = this.divSearch.form.ccfID_ISSUE;	// 전자세금계산서
        	this.ccfCD_PROOF   = this.divSearch.form.ccfCD_PROOF;	// 증빙구분
        	this.mskAM_SUPPLY  = this.divSearch.form.mskAM_SUPPLY;	// 공급가액
        	this.mskAM_VAT     = this.divSearch.form.mskAM_VAT;		// 부가세액
        	this.ccfCD_VENDOR  = this.divSearch.form.ccfCD_VENDOR;	// 거래처
        	this.ccfNO_ACCOUNT = this.divSearch.form.ccfNO_ACCOUNT;
        	this.cboCD_CURR    = this.divSearch.form.cboCD_CURR;
        	this.staAM_VAT     = this.divSearch.form.staAM_VAT;
        	this.staAM_SUPPLY  = this.divSearch.form.staAM_SUPPLY;

        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
            // 증빙선택
        	this.ccfCD_PROOF.CodeFindName = "DHX_COMMON_CODEFIND_SELECT";
        	this.ccfCD_PROOF.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_PROOF.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//전자세금계산서번호
        	this.ccfID_ISSUE.CodeFindName = "DHX_CFEBILLBUY_ESERO";
        	this.ccfID_ISSUE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_ISSUE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_VENDOR.CodeFindName = "DHX_CFALLVENDOR_CODEFIND"
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfNO_ACCOUNT.CodeFindName = "DFX_CFACCOUNTMATCH"
        	this.ccfNO_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsCombo1 = new Dataset();
        	this.dsCombo1.addColumn("CD_SYSTEM", "string");
        	this.dsCombo1.addColumn("CD_TYPE", "string");

            this.dsCombo1.addRow();
        	this.dsCombo1.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo1.setColumn(0, "CD_TYPE", "40");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo1";
        	var outData     = "dsCD_CURR=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	this.dsSearch.setColumn(0, "DT_ACCOUNT", this.getOwnerFrame().DT_ACCOUNT);
        	this.dsSearch.setColumn(0, "DT_REQUEST", this.getOwnerFrame().DT_ACCOUNT);
        	this.dsSearch.setColumn(0, "DS_REM"    , this.getOwnerFrame().DS_EDUCATION);
        	this.dsSearch.setColumn(0, "AM_SUPPORT", this.getOwnerFrame().AM_SUPPORT);
        	this.dsSearch.setColumn(0, "AM_SUPPLY" , this.getOwnerFrame().AM_SUPPLY);
        	this.dsSearch.setColumn(0, "AM_VAT"    , this.getOwnerFrame().AM_VAT);
        	this.dsSearch.setColumn(0, "CD_PROOF"  , this.getOwnerFrame().CD_PROOF);
        	this.dsSearch.setColumn(0, "CD_VENDOR" , this.getOwnerFrame().CD_VENDOR);
        	this.dsSearch.setColumn(0, "DS_VENDOR" , this.getOwnerFrame().DS_VENDOR);
        	this.dsSearch.setColumn(0, "CD_CORP"   , this.getOwnerFrame().CD_CORP);
        	this.dsSearch.setColumn(0, "NO_ACCOUNT", this.getOwnerFrame().NO_ACCOUNT);
        	this.dsSearch.setColumn(0, "DS_ACCOUNT", this.getOwnerFrame().DS_ACCOUNT);
        	this.dsSearch.setColumn(0, "TY_PAY"	   , this.getOwnerFrame().TY_PAY);
        	this.dsSearch.setColumn(0, "AM_SUM"	   , this.getOwnerFrame().AM_SUPPLY);
        	this.dsSearch.setColumn(0, "NO_EDU"	   , this.getOwnerFrame().NO_EDU);
        	this.dsSearch.setColumn(0, "CD_CURR"   , this.getOwnerFrame().CD_CURR);

        	if (this.getOwnerFrame().TY_PAY == "4" )
        	{
        		this.ccfID_ISSUE.set_enable(false);
        		this.ccfCD_PROOF.set_enable(false);
        		this.mskAM_SUPPLY.set_enable(false);
        		this.mskAM_VAT.set_enable(false);
        		this.staAM_SUPPLY.set_cssclass("sta_WF_tablelabel");
        		this.staAM_VAT.set_cssclass("sta_WF_tablelabel");
        		this.dsSearch.setColumn(0, "CD_PROOF"  ,"23");
        		this.ccfCD_PROOF.form.fnCodeFindLoad();

        	} else if (this.getOwnerFrame().CD_CURR != "KRW"){
        		this.ccfID_ISSUE.set_enable(false);
        		this.ccfCD_PROOF.set_enable(false);
        		this.mskAM_SUPPLY.set_enable(false);
        		this.mskAM_VAT.set_enable(false);
        		this.staAM_SUPPLY.set_cssclass("sta_WF_tablelabel");
        		this.staAM_VAT.set_cssclass("sta_WF_tablelabel");
        		this.dsSearch.setColumn(0, "CD_PROOF"  ,"24");
        		this.ccfCD_PROOF.form.fnCodeFindLoad();
        	}

        	this.dsSearch.setColumn(0, "DT_ACCOUNT" , this.gfnGetDate());

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function() {
        	var strMsg = "";

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_ACCOUNT"))) {
        		strMsg += "※회계일자가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "DS_REM"))) {
        		strMsg += "※적요가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_REQUEST"))) {
        		strMsg += "※자금집행일자가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "AM_SUM"))) {
        		strMsg += "※회계금액이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_PROOF"))) {
        		strMsg += "※증빙구분이 입력되지 않았습니다.\n";
        	}

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "ID_ISSUE"))) {

        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_PROOF"))|| (this.dsSearch.getColumn(0, "CD_PROOF")>="16" && this.dsSearch.getColumn(0, "CD_PROOF")<="25" )) {
        			strMsg += "※전자세금계산서는 세금계산서 증빙코드를 선택해야 합니다..\n";
        		}

        		if(this.dsSearch.getColumn(0, "AM_SUPPLY")==0) {
        			strMsg += "※공급가액이 입력되지 않았습니다.\n";
        		}
        	}

        	if(this.dsSearch.getColumn(0, "AM_SUM")==0) {
        			strMsg += "※전표발행 회계금액이 입력되지 않았습니다.\n";
        		}

        	if( this.dsSearch.getColumn(0, "CD_CURR")=="KRW" && !this.dsSearch.getColumn(0, "AM_SUPPORT") == this.dsSearch.getColumn(0, "AM_SUM")) {
        		strMsg += "※ 교육비용이 전표발행금액과 일치하지 않습니다.\n";
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");

        	if(this.gfnIsNull(sCdCorp)) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}

        	if(id == "ccfCD_VENDOR") {

        		//dsUserParam.setColumn(nrow, "TY_VENDOR", "F");
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        	}

        	if(id == "ccfNO_ACCOUNT") {

        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR"))) {
        			this.gfnAlert("거래처를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_PAY", this.dsSearch.getColumn(0, "CD_VENDOR"));
        		dsUserParam.setColumn(nrow, "CD_CORP" , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "TY_CASH" , "C");
        	}

        	if(id == "ccfCD_PROOF") {	// 증빙선택(매입)
        		dsUserParam.setColumn(nrow, "CD_SYSTEM"	, "DH");				// 시스템코드
        		dsUserParam.setColumn(nrow, "CD_TYPE"	, "V10");				// 공통분류코드
        		dsUserParam.setColumn(nrow, "DS_ETC1"	, "VAT");
        	}

        	if(id == "ccfID_ISSUE") {	//
        		dsUserParam.setColumn(nrow, "CD_CORP"   , sCdCorp);
        		dsUserParam.setColumn(nrow, "TY_SALEBUY", "I");					//매입매출구분
        		dsUserParam.setColumn(nrow, "VALUE" ,  "");	// 검색조건
        		//dsUserParam.setColumn(nrow, "VALUE" ,  this.dsSearch.getColumn(0, "CD_VENDOR"));	// 검색조건
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "cfCD_VENDOR") {
        // 		var sTyVendor = "";
        // 		if(arr.length > 0) {
        // 			sTyVendor = arr[0]["TY_VENDOR"];
        // 		}
        		this.dsSearch.setColumn(0, "NO_ACCOUNT", "");
        		this.dsSearch.setColumn(0, "DS_ACCOUNT", "");
        		this.dsSearch.setColumn(0, "ID_ISSUE", "");
        		this.dsSearch.setColumn(0, "CD_PROOF", "");
        		this.dsSearch.setColumn(0, "DS_PROOF", "");
        		this.dsSearch.setColumn(0, "TY_VATBGJE", "");
        	}

        	if(id == "ccfCD_PROOF") {	// 증빙선택
        		var vatRate = 0;
        		var cdProof = "";
        		if(arr.length > 0) {
        			var vatRate = nexacro.toNumber(arr[0]["DS_ETC2"],0);					//부가세율
        			this.dsSearch.setColumn(0, "VAT_RATE", vatRate);
        			cdProof = arr[0]["CD_CODE"];
        		}

        		var amSupply = nexacro.toNumber(this.dsSearch.getColumn(0, "AM_SUPPLY"),0);	// 공급가액
        		var amExtra = nexacro.toNumber(this.dsSearch.getColumn(0, "AM_EXTRA") ,0);	// 부대비용

        		//부가세
        		var amVat = (vatRate == 0 ? 0 : nexacro.floor(amSupply / vatRate));
        		this.dsSearch.setColumn(0, "AM_VAT", amVat);
        		this.dsSearch.setColumn(0, "AM_SUM", amSupply+amExtra+amVat);	// 합계

        		var sCssClass  = (cdProof == "13") ? "sta_WF_tablelabelE" : "sta_WF_tablelabel";
        		this.staAM_VAT.set_cssclass(sCssClass);
        		vatRate == 0 ? this.mskAM_VAT.set_enable(false) : this.mskAM_VAT.set_enable(true);

        	}

        	if(id == "ccfID_ISSUE") {	//전자세금계산서번호
        		if (arr.length > 0) {

        			if (this.dsSearch.getColumn(0, "CD_VENDOR") != arr[0]["CD_VENDOR"])
        			{
        				this.gfnAlert("교육신청 자료와 거래처가 다릅니다. 선택할 수 없습니다. ");
        				this.ccfID_ISSUE.form.CDTextBox.setFocus();
        				return false
        			}

        			this.dsSearch.setColumn(0, "CD_VENDOR"	, arr[0]["CD_VENDOR"]);	// 거래처코드
        			this.dsSearch.setColumn(0, "DS_VENDOR"	, arr[0]["DS_VENDOR"]);	// 거래처명
        			this.dsSearch.setColumn(0, "AM_SUM"		, arr[0]["AM_TOTAL"]);
        			this.dsSearch.setColumn(0, "AM_SUPPLY"	, arr[0]["CHARGETOTAL"]);	// 공급가액
        			this.dsSearch.setColumn(0, "AM_VAT"		, arr[0]["TAXTOTAL"]);	// 부가세
        			this.dsSearch.setColumn(0, "CD_PROOF"	, arr[0]["CD_PROOF"]);	// 부가세
        			this.dsSearch.setColumn(0, "DS_PROOF"	, arr[0]["DS_PROOF"]);	// 부가세

        			this.dsSearch.setColumn(0, "DT_ACCOUNT"	, nexacro.replaceAll(this.gfnNvl(arr[0]["ISSUE_DATE"],""),"-",""));	// 회계일자

        		}
        		var bEnable = (arr.length > 0) ? false : true;

        		this.tclDT_ACCOUNT.set_enable(bEnable);	// 회계일자
        		this.mskAM_SUPPLY.set_enable(bEnable);	// 공급가액
        		this.mskAM_VAT.set_enable(bEnable);		// 부가세액
        	}
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 확인버튼
        this.btnOK_onclick = function(obj, e) {
        	if (!this.fnSelectValid()) return;
        	this.gfnConfirm("전표를 발행하시겠습니까?", "fnOKCallback");
        }

        this.fnOKCallback = function(svcID, val) {

        	// 전표발행
        	if (val)
        	{
        		this.dsIssueSlip = new Dataset();
        		this.dsIssueSlip.addColumn("CD_CORP", "string");
        		this.dsIssueSlip.addColumn("NO_EDU", "string");
        		this.dsIssueSlip.addColumn("DT_ACCOUNT", "string");
        		this.dsIssueSlip.addColumn("DT_REQUEST", "string");
        		this.dsIssueSlip.addColumn("NO_ACCOUNT", "string");
        		this.dsIssueSlip.addColumn("CD_VENDOR", "string");
        		this.dsIssueSlip.addColumn("DS_REM", "string");
        		this.dsIssueSlip.addColumn("ID_ISSUE", "string");
        		this.dsIssueSlip.addColumn("CD_PROOF", "string");
        		this.dsIssueSlip.addColumn("AM_SUPPLY", "bigint");
        		this.dsIssueSlip.addColumn("AM_VAT", "bigint");
        		this.dsIssueSlip.addColumn("AM_SUM", "bigint");
        		this.dsIssueSlip.addColumn("CD_DEPT_BH", "string");
        		this.dsIssueSlip.addColumn("ID_USER", "string");

        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"		, this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsIssueSlip.setColumn(nRow, "NO_EDU" 		, this.dsSearch.getColumn(0, "NO_EDU"));
        		this.dsIssueSlip.setColumn(nRow, "DT_ACCOUNT" 	, this.dsSearch.getColumn(0, "DT_ACCOUNT"));
        		this.dsIssueSlip.setColumn(nRow, "DT_REQUEST" 	, this.dsSearch.getColumn(0, "DT_REQUEST"));
        		this.dsIssueSlip.setColumn(nRow, "NO_ACCOUNT" 	, this.dsSearch.getColumn(0, "NO_ACCOUNT"));
        		this.dsIssueSlip.setColumn(nRow, "CD_VENDOR" 	, this.dsSearch.getColumn(0, "CD_VENDOR"));
        		this.dsIssueSlip.setColumn(nRow, "DS_REM" 		, this.dsSearch.getColumn(0, "DS_REM"));
        		this.dsIssueSlip.setColumn(nRow, "ID_ISSUE" 	, this.dsSearch.getColumn(0, "ID_ISSUE"));
        		this.dsIssueSlip.setColumn(nRow, "CD_PROOF" 	, this.dsSearch.getColumn(0, "CD_PROOF"));
        		this.dsIssueSlip.setColumn(nRow, "AM_SUPPLY" 	, this.dsSearch.getColumn(0, "AM_SUPPLY"));
        		this.dsIssueSlip.setColumn(nRow, "AM_VAT" 		, this.dsSearch.getColumn(0, "AM_VAT"));
        		this.dsIssueSlip.setColumn(nRow, "AM_SUM" 		, this.dsSearch.getColumn(0, "AM_SUM"));
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_BH"  	, this.AuthClient.CD_DEPT);
        		this.dsIssueSlip.setColumn(nRow, "ID_USER"  	, this.AuthClient.ID_USER);

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
        }

        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if (svcID == "issueSlip") {
        		if (errorCode == 0) {
        			this.getParentContext().close(true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID =="combo"){
        		if (errorCode == 0) {
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID =="selectExc"){
        		if (errorCode == 0) {
        			if (this.dsRtEx.rowcount > 0)
        			{
        				var rtExchange = this.dsRtEx.getColumn(0, "RT_KRW_EXCH");

        				//trace("selectExc rtExchage=>" + rtExchange);

        				var amContKrw = nexacro.toNumber(this.dsSearch.getColumn(0, "AM_SUPPORT" )) * rtExchange;

        				this.dsSearch.setColumn(0, "AM_SUPPLY", this.fnGetTrunc(amContKrw, 1));
        				this.dsSearch.setColumn(0, "AM_SUM"	  , this.fnGetTrunc(amContKrw, 1));
        				this.dsSearch.setColumn(0, "RT_EXCH"  , this.dsRtEx.getColumn(0, "RT_KRW_EXCH"));
        				this.dsSearch.setColumn(0, "CD_PROOF"  ,"24");
        				this.ccfCD_PROOF.form.fnCodeFindLoad();
        			} else {
        				this.dsSearch.setColumn(0, "RT_EXCH"  , 0);
        				this.dsSearch.setColumn(0, "AM_SUPPLY", 0);
        				this.dsSearch.setColumn(0, "AM_SUM"	  , 0);
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	}
        }

        // 취소버튼
        this.btnCANCLE_onclick = function(obj, e) {

        	this.getParentContext().close(false);
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if (e.oldvalue != e.newvalue) {
        		if (e.columnid == "DT_ACCOUNT" && !this.gfnIsNull(e.newvalue))
        		{
        			if (this.dsSearch.getColumn(0, "CD_CURR") != "KRW")
        			{
        				 trace(" dsSearch_onvaluechanged=>" + e.newvalue);
        				this.fnSetRtExchange();
        			}
        			var dtRequest = this.fnGetDtRequest( e.newvalue > this.gfnGetDate() ? e.newvalue : this.gfnGetDate());
        			this.dsSearch.setColumn(0, "DT_REQUEST" , dtRequest);
        		}else if (e.columnid == "AM_SUPPLY" || e.columnid == "AM_VAT") {

        			var amSum = this.dsSearch.getColumn(0, "AM_SUPPLY") + this.dsSearch.getColumn(0, "AM_VAT") ;
        			this.dsSearch.setColumn(0, "AM_SUM", amSum);
        		}
        	}
        };

        // 자금집행일 금요일로 셋팅
        this.fnGetDtRequest = function (vDate)
        {
        	var vReturn = "";
        	var day = this.gfnGetDay(vDate);

        	switch(day) {
        	case  0 :
        		vReturn = this.gfnAddDate(vDate , 5);
        		break;
        	case 1 :
        		vReturn = this.gfnAddDate(vDate , 4);
        		break;
        	case 2 :
        		vReturn = this.gfnAddDate(vDate , 3);
        		break;
        	case 3 :
        		vReturn = this.gfnAddDate(vDate , 2);
        		break;
        	case 4 :
        		vReturn = this.gfnAddDate(vDate , 1);
        		break;
        	case 5 :
        		vReturn = this.gfnAddDate(vDate , 7);
        		break;
        	case 6 :
        		vReturn = this.gfnAddDate(vDate , 6);
        		break;
        	default:
        	}

        	return vReturn

        };




        // 환율 가져오기
        this.fnSetRtExchange = function ()
        {

        	this.dsExchange = new Dataset();
        	this.dsExchange.addColumn("TY_GUBUN", "string");
        	this.dsExchange.addColumn("CN_ROW", "int");
        	this.dsExchange.addColumn("VALUE", "string");
        	this.dsExchange.addColumn("MIN_VALUE", "string");
        	this.dsExchange.addColumn("DT_BASE", "string");
        	this.dsExchange.addColumn("CD_LOCAL_CURR", "string");
        	this.dsExchange.addColumn("CD_EXEC_CURR", "string");

        	this.dsExchange.addRow();
        	this.dsExchange.setColumn(0, "TY_GUBUN", "");
        	this.dsExchange.setColumn(0, "CN_ROW", 0);
        	this.dsExchange.setColumn(0, "VALUE", "");
        	this.dsExchange.setColumn(0, "MIN_VALUE", "");
        	this.dsExchange.setColumn(0, "DT_BASE", this.dsSearch.getColumn(0, "DT_ACCOUNT"));
        	this.dsExchange.setColumn(0, "CD_LOCAL_CURR", "KRW");
        	this.dsExchange.setColumn(0, "CD_EXEC_CURR", this.dsSearch.getColumn(0, "CD_CURR"));

        	var strSvcId    = "selectExc";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectExc=dsExchange";
        	var outData     = "dsRtEx=selectExc0";
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


        // 절사 처리
        this.fnGetTrunc = function(amVal, vCnt){
        	var returnVal = this.gfnNvl(amVal, 0);
        	if(returnVal > 0){
        		returnVal = Math.floor(amVal/vCnt) * vCnt;
        	}
        	return returnVal;
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divSearch.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divSearch.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_EDU_SLIP_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
