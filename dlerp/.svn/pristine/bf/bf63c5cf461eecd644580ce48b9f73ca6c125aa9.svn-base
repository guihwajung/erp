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
            this.set_titletext("소득자료집계출력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_DEFRAYMENTTOTAL_SEARCH_MASTER</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DHVPR_DEFRAYMENTTOTAL_SEARCH_DETAIL</Col></Row><Row><Col id=\"SP\">DHVPR_DEFRAYMENTTOTAL_SEARCH_CORP</Col><Col id=\"TARGET\">select_corp</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_INCOMETYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INCOMETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPUTE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPUTE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PRINTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_DEPT_SELFACNT\"/><Col id=\"CD_DEPT_ACNT\"/><Col id=\"TY_INCOMETYPE\"/><Col id=\"YM_IMPUTE_FROM\"/><Col id=\"YM_IMPUTE_TO\"/><Col id=\"DT_PRINTDATE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListCorp", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAEPYO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_SELFACNT","ccfCD_CORP:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_SELFACNT","staCD_DEPT_SELFACNT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BH","ccfCD_DEPT_SELFACNT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("회계단위");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_BH:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_IMPUTE_FROM","0.0","staCD_CORP:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("귀속연월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPUTE_FROM","staYM_IMPUTE_FROM:0.0","staCD_CORP:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_IMPUTE_FROM00","ctclYM_IMPUTE_FROM:0.0","staCD_CORP:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPUTE_TO","staYM_IMPUTE_FROM00:0.0","staCD_CORP:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_INCOMETYPE","ccfCD_CORP:0.0","staCD_CORP:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("지급구분");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_INCOMETYPE","staTY_INCOMETYPE:0.0","staCD_CORP:10.0","95","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_INCOMETYPE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_PRINTDATE","ccfCD_DEPT_SELFACNT:0.0","staCD_CORP:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("제출연월일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PRINTDATE","staDT_PRINTDATE:0.0","staCD_CORP:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"463","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","-5",null,null,"0","377",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("징수의무자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtYN_RESIDENT","816","58","95","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtYN_RESIDENT1","statxtYN_RESIDENT:-1","58","202","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtCD_INCOMECLASS1","615","29","202","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtYN_NATION","statxtCD_INCOMECLASS1:-1","29","95","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_text("법인명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtYN_NATION1","statxtYN_NATION:-1","29","202","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtYN_RESIDENT","statxtYN_RESIDENT:5","63","190","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtYN_NATION","statxtYN_NATION:5","34","190","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE1","99","58","423","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtDS_ADDR","168","63","347","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtCD_BUSINESSTYPE","621","34","190","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtCD_INCOMECLASS","521","29","95","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtNO_ZIP","105","63","60","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN1","99","29","423","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtNO_JUMIN","105","34","410","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE","0","58","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN","0","29","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtCD_INCOMECLASS00","statxtNO_ZIP_CODE1:-1","58","95","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtCD_INCOMECLASS01","statxtCD_INCOMECLASS00:-1","58","202","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtCD_BUSINESSTYPE00","statxtCD_INCOMECLASS00:5","63","190","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta01","0","divDataTop:7","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("제출내용");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:4",null,null,"0","1",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:15",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("소득자별 집계내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","divData.form.divDataTop.form.divDataTop.form.edtYN_RESIDENT","value","dsListCorp","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.divDataTop.form.edtYN_NATION","value","dsListCorp","DS_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.divDataTop.form.edtDS_ADDR","value","dsListCorp","DS_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.divDataTop.form.edtCD_BUSINESSTYPE","value","dsListCorp","NO_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.divDataTop.form.edtNO_ZIP","value","dsListCorp","NO_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataTop.form.divDataTop.form.edtNO_JUMIN","value","dsListCorp","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.divDataTop.form.edtCD_BUSINESSTYPE00","value","dsListCorp","DS_DAEPYO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctclYM_IMPUTE_TO.form.TextBox","value","dsSearch","YM_IMPUTE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_IMPUTE_FROM.form.TextBox","value","dsSearch","YM_IMPUTE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT_SELFACNT.form.CDTextBox","value","dsSearch","CD_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboTY_INCOMETYPE","value","dsSearch","TY_INCOMETYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclDT_PRINTDATE","value","dsSearch","DT_PRINTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
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
        this.registerScript("DHV_DEFRAYMENTTOTAL_SEARCH.xfdl", function() {
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
        	this.fnSetCombo();

        	var toDay = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YM_IMPUTE_FROM", toDay.substr(0,6));
        	this.dsSearch.setColumn(0, "YM_IMPUTE_TO", toDay.substr(0,6));
        	this.dsSearch.setColumn(0, "DT_PRINTDATE", toDay);

        	// 법인코드세션
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	// 세무단위 초기값 설정
        	this.dsSearch.setColumn(0, "CD_DEPT_SELFACNT", this.UserInfo.CD_DEPT_SELFACNT);
        	this.divSearch.form.ccfCD_DEPT_SELFACNT.form.fnCodeFindLoad();

        	this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.AuthClient.CD_DEPT);
        	this.divSearch.form.ccfCD_DEPT_ACNT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
         	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Save.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnIssueSlip = this.gfnFormButtonAdd("IssueSlip", "fnIssueSlip");  //전표조회
        	//this.btn2 = this.gfnFormButtonAdd("ApplyCancel", "fnApply");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드
        	this.ccfCD_DEPT_SELFACNT = this.divSearch.form.ccfCD_DEPT_SELFACNT;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ctclYM_IMPUTE_FROM = this.divSearch.form.ctclYM_IMPUTE_FROM;
        	this.ctclYM_IMPUTE_TO = this.divSearch.form.ctclYM_IMPUTE_TO;
        	this.cboTY_INCOMETYPE = this.divSearch.form.cboTY_INCOMETYPE;
        	this.ctclDT_PRINTDATE = this.divSearch.form.ctclDT_PRINTDATE;

        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_SELFACNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_DEFRAYMENTTOTAL_SEARCH_01");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHV_DEFRAYMENTTOTAL_SEARCH_02");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelectCorp = new Dataset();
        	this.dsSelectCorp.addColumn("CD_DEPT_SELFACNT", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("TY_INCOMETYPE", "string");
        	this.dsSelect.addColumn("YM_IMPUTE_FROM", "string");
        	this.dsSelect.addColumn("YM_IMPUTE_TO", "string");
        	this.dsSelect.addColumn("DT_PRINTDATE", "string");
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

        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "TY_INCOMETYPE", this.dsSearch.getColumn(0, "TY_INCOMETYPE"));
        	this.dsSelect.setColumn(0, "YM_IMPUTE_FROM", this.dsSearch.getColumn(0, "YM_IMPUTE_FROM"));
        	this.dsSelect.setColumn(0, "YM_IMPUTE_TO", this.dsSearch.getColumn(0, "YM_IMPUTE_TO"));
        	this.dsSelect.setColumn(0, "DT_PRINTDATE", this.dsSearch.getColumn(0, "DT_PRINTDATE"));

        	this.dsSelectCorp.clearData();
        	this.dsSelectCorp.addRow();

        	this.dsSelectCorp.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select_corp=dsSelectCorp";
        	var outData     = "dsList=select0 dsListCorp=select_corp0";
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_DEPT_SELFACNT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT_SELFACNT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_IMPUTE_FROM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_IMPUTE_FROM.form.TextBox.setFocus();
        		}
        		this.gfnAlert("귀속연월은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_IMPUTE_TO"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_IMPUTE_TO.form.TextBox.setFocus();
        		}
        		this.gfnAlert("귀속연월은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        		this.fnSetButton();
        		this.gfnGridAfterSelect(this.dxGrid);

        	} else if (svcID == "selectSub") {
        		if (this.dsList.rowcount < 1) {
        			this.fnSetButton();
        			this.dsListSub.clearData();
        		}
        		this.fnSetButton();
        		this.gfnGridAfterSelect(this.dxGridSub);
        	} else if (svcID == "combo") {
        		//  조회조건(완료여부)
        		var iRow = this.dsTY_INCOMETYPE.insertRow(0);
        		this.dsTY_INCOMETYPE.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_INCOMETYPE.setColumn(iRow, "DS_CODE", "전체");
        	}
        }


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;

        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if(id == "ccfCD_DEPT_SELFACNT") {
        		if (this.gfnIsNull(cdCorp)) {
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		//dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVCD_DEPT_SELFACNT);
        	}

        	if(id == "ccfCD_DEPT_ACNT") {

        		if (!this.gfnIsNull(cdCorp)) {
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        // 		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        // 		dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        // 		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		}else{
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
        // 		var CD_DEPT_SELFACNT = this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT");
        // 		if(this.gfnIsNull(CD_DEPT_SELFACNT)){
        // 			this.gfnAlert("세무단위를 먼저 선택하세요.");
        // 			return false;
        // 		}
        //
        // 		dsUserParam.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));
        // 		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", this.UserInfo.LEVCD_DEPT_SELFACNT);
        	}

        	return true;
        };


        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	switch(id) {

        	case "ccfCD_CORP": // 법인코드
        		this.ccfCD_DEPT_SELFACNT.form.fnCodeFindClear();
        		this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();

        		break;
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	//trace("obj.oldrow->" + obj.oldrow);
        	//trace("obj.oldrow->" + e.row);

           // if ((obj.oldrow > -1 && obj.oldrow == e.row) || (obj.oldrow == -1 && e.oldrow != e.row)) {
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		this.FormBtns.SubSelect.click();
        		//obj.oldrow = -1;
        	//}
        };


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(0, "CD_TYPE", "V22");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_INCOMETYPE=combo0";
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

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {

        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.dsListSub.clearData();
        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_SELFACNT"));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "TY_INCOMETYPE", this.dsList.getColumn(this.dsList.rowposition, "TY_INCOMETYPE"));
        	this.dsSelect.setColumn(0, "YM_IMPUTE_FROM", this.dsList.getColumn(this.dsList.rowposition, "YM_IMPUTE_FROM"));
        	this.dsSelect.setColumn(0, "YM_IMPUTE_TO", this.dsList.getColumn(this.dsList.rowposition, "YM_IMPUTE_TO"));
        	this.dsSelect.setColumn(0, "DT_PRINTDATE", this.dsSearch.getColumn(0, "DT_PRINTDATE"));

        	var strSvcId    = "selectSub";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelect";
         	var outData     = "dsListSub=d_select0";
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


        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staCD_DEPT_SELFACNT.addEventHandler("onclick",this.divSearch_staCD_CORP_onclick,this);
            this.divSearch.form.ccfCD_DEPT_SELFACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_DEPT_ACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staYM_IMPUTE_FROM00.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.cboTY_INCOMETYPE.addEventHandler("onitemchanged",this.divSearch_cboTYPE_onitemchanged,this);
            this.divData.form.divDataTop.form.objGrid.addEventHandler("oncelldblclick",this.divData_divDataTop_objGrid_oncelldblclick,this);
            this.divData.form.divDataBottom.form.objGridSub.addEventHandler("oncelldblclick",this.divData_divDataTop_objGridsub_oncelldblclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsListCorp.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("DHV_DEFRAYMENTTOTAL_SEARCH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
