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
            this.set_titletext("작업현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_IPJUWORKSTATE_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DBXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo3</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBSPR_BS_WORKEND_INIT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CUNG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CTM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CTM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GBN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_WI\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WI\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_VISITPLAN_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_VISITPLAN_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GBN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">0</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">완료</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">미완료</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">재접수</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SEARCH", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">0</Col><Col id=\"DS_CODE\">동호정보</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">협력업체</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">작업코드</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("68");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GBN","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_GBN","staTY_GBN:0.0","10.0","119","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_GBN");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT","0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_FROM","staDT:0.0","staCD_SITE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","calDT_FROM:0.0","staCD_SITE:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_TO","sta00:0.0","staCD_SITE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_VISITPLAN","calDT_TO:0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("완료일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_VISITPLAN_FROM","staDT_VISITPLAN:0.0","staCD_SITE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","calDT_VISITPLAN_FROM:0.0","staCD_SITE:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_VISITPLAN_TO","sta01:0.0","staCD_SITE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_WI","calDT_VISITPLAN_TO:0.0","staCD_SITE:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFCOMM");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACT","ccfCD_WI:0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("공종");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACT","staCD_ACT:0.0","staCD_SITE:10.0","359","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFACT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SEARCH","ccfCD_ACT:0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("검색구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_SEARCH","staTY_SEARCH:0.0","staCD_SITE:10.0","91","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_innerdataset("dsTY_SEARCH");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divDongho","cboTY_SEARCH:0.0","staCD_SITE:10.0",null,"24.0","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_DONG","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form.divDongho.form);
            obj.set_taborder("18");
            obj.set_text("동");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.form.divDongho.addChild(obj.name, obj);

            obj = new Div("ccfDS_DONG","staDS_DONG:0.0","10.0","93","24.0",null,null,null,null,null,null,this.divSearch.form.divDongho.form);
            obj.getSetter("CodeFindName").set("DBX_CFASDONGHO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.form.divDongho.addChild(obj.name, obj);

            obj = new Static("staDS_HO","ccfDS_DONG:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form.divDongho.form);
            obj.set_taborder("19");
            obj.set_text("호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.form.divDongho.addChild(obj.name, obj);

            obj = new Div("ccfDS_HO","staDS_HO:0.0","10.0","93","24.0",null,null,null,null,null,null,this.divSearch.form.divDongho.form);
            obj.getSetter("CodeFindName").set("DBX_CFASDONGHO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.form.divDongho.addChild(obj.name, obj);

            obj = new Div("divVendor","cboTY_SEARCH:0.0","staCD_SITE:10.0",null,"24.0","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CTM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form.divVendor.form);
            obj.set_taborder("18");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.form.divVendor.addChild(obj.name, obj);

            obj = new Div("ccfCD_CTM","staCD_CTM:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form.divVendor.form);
            obj.getSetter("CodeFindName").set("DBX_CFHADO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.form.divVendor.addChild(obj.name, obj);

            obj = new Div("divCdJob","cboTY_SEARCH:0.0","staCD_SITE:10.0",null,"24.0","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_JOB","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form.divCdJob.form);
            obj.set_taborder("18");
            obj.set_text("작업코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.form.divCdJob.addChild(obj.name, obj);

            obj = new Div("ccfCD_JOB","staCD_JOB:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form.divCdJob.form);
            obj.getSetter("CodeFindName").set("DBX_CFJOB");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.form.divCdJob.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboTY_GBN","value","dsSearch","TY_GBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.calDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.calDT_VISITPLAN_FROM","value","dsSearch","DT_VISITPLAN_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.calDT_VISITPLAN_TO","value","dsSearch","DT_VISITPLAN_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_WI.form.CDTextBox","value","dsSearch","CD_WI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_WI.form.DSTextBox","value","dsSearch","DS_WI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_ACT.form.CDTextBox","value","dsSearch","CD_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_ACT.form.DSTextBox","value","dsSearch","DS_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccfCD_CTM.form.CDTextBox","value","dsSearch","CD_CTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ccfCD_CTM.form.DSTextBox","value","dsSearch","DS_CTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.cboTY_SEARCH","value","dsSearch","TY_SEARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.divDongho.form.ccfDS_DONG.form.CDTextBox","value","dsSearch","CD_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.divDongho.form.ccfDS_DONG.form.DSTextBox","value","dsSearch","DS_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.divDongho.form.ccfDS_HO.form.CDTextBox","value","dsSearch","CD_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.divDongho.form.ccfDS_HO.form.DSTextBox","value","dsSearch","DS_HO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_IPJUWORKSTATE.xfdl", function() {
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

        	if(this.FormInfo.GR_SEARCH >= 7){
        		this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_DEPT);
        		this.ccfCD_SITE.form.fnCodeFindLoad();
        		this.ccfCD_SITE.set_enable(false);
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {};

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {

        	this.btnWorkBtn1 = this.gfnFormButtonAdd("WorkBtn1", "fnWorkBtn1");  // 하자접수
        	this.btnWorkBtn2 = this.gfnFormButtonAdd("WorkBtn2", "fnWorkBtn2");  // 작업지시서출력
        	this.btnWorkBtn3 = this.gfnFormButtonAdd("WorkBtn3", "fnWorkBtn3");  // 작업완료입력
        	this.btnWorkBtn4 = this.gfnFormButtonAdd("WorkBtn4", "fnWorkBtn4");  // 세대별작업현황
        	this.btnWorkBtn5 = this.gfnFormButtonAdd("WorkBtn5", "fnWorkBtn5");  // 점검전후 사진보기
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_SITE           = this.divSearch.form.ccfCD_SITE;      				// 현황코드
        	this.cboTY_SEARCH         = this.divSearch.form.cboTY_COMPLETE;                 // 구분  -> 전체(0),승인(3),완료(2),미완료(1)
        	this.calDT_FROM           = this.divSearch.form.calDT_FROM;                     // 접수일자 FROM
        	this.calDT_TO             = this.divSearch.form.calDT_TO;                       // 접수일자 TO
        	this.calDT_VISITPLAN_FROM = this.divSearch.form.calDT_VISITPLAN_FROM;           // 작업완료일자 FROM
        	this.calDT_VISITPLAN_TO   = this.divSearch.form.calDT_VISITPLAN_TO;             // 작업완료일자 TO
        	this.ccfCD_WI             = this.divSearch.form.ccfCD_WI;                       // 유형코드
        	this.ccfCD_UH             = this.divSearch.form.ccfCD_UH;                       // 유형코드
        	this.ccfCD_ACT            = this.divSearch.form.ccfCD_ACT;                      // 공종코드
        	this.ccfDS_DONG           = this.divSearch.form.divDongho.form.ccfDS_DONG;      // 동코드
        	this.ccfDS_HO             = this.divSearch.form.divDongho.form.ccfDS_HO;        // 호코드
        	this.ccfCD_CTM            = this.divSearch.form.divVendor.form.ccfCD_CTM;       // 협력업체코드
        	this.ccfCD_JOB            = this.divSearch.form.divCdJob.form.ccfCD_JOB;        // 작업코드

        	this.divDongho            = this.divSearch.form.divDongho;
        	this.divVendor            = this.divSearch.form.divVendor;
        	this.divCdJob             = this.divSearch.form.divCdJob;

        	this.dxGrid               = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";       // 현장코드
        	this.ccfCD_SITE.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	this.dsSearch.setColumn(0, "CD_SITE", this.UserInfo.DB_SPACE01);
        	this.dsSearch.setColumn(0, "DS_SITE", this.UserInfo.DB_SPACE02);

        	this.ccfCD_WI.BeforeUserDataSetParam   = "fnBeforeUserDataSetParam";       // 유형
        	this.ccfCD_WI.AfterCDTextChanged       = "fnAfterCDTextChanged";

        	this.ccfCD_ACT.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";       // 공종
        	this.ccfCD_ACT.AfterCDTextChanged      = "fnAfterCDTextChanged";

        	this.ccfDS_DONG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";       // 동코드
        	this.ccfDS_DONG.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	this.ccfDS_HO.BeforeUserDataSetParam   = "fnBeforeUserDataSetParam";       // 호코드
        	this.ccfDS_HO.AfterCDTextChanged       = "fnAfterCDTextChanged";

        	this.ccfCD_CTM.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";       // 협력업체코드
        	this.ccfCD_CTM.AfterCDTextChanged      = "fnAfterCDTextChanged";

        	this.ccfCD_JOB.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";       // 작업코드
        	this.ccfCD_JOB.AfterCDTextChanged      = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_IPJUWORKSTATE");

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);

        	// 구분
        	this.dsSearch.setColumn(0, "TY_GBN", "0");

        	// 검색구분
        	this.dsSearch.setColumn(0, "TY_SEARCH", "0");

        	// 접수일자
        	this.dsSearch.setColumn(0, "DT_FROM", this.gfnGetFirstDate(this.gfnGetDate()));
        	this.dsSearch.setColumn(0, "DT_TO"  , this.gfnGetDate());
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE"         	, "string");  // 현장코드
        	this.dsSelect.addColumn("TY_SEARCH"      	, "string");     // 검색구분
        	this.dsSelect.addColumn("DS_DONG"			, "string");  // 동
        	this.dsSelect.addColumn("DS_CUNG"			, "string");  // 층
        	this.dsSelect.addColumn("DS_HO"  			, "string");  // 호
        	this.dsSelect.addColumn("CD_CTM" 			, "string");  // 협력업체
        	this.dsSelect.addColumn("CD_JOB"   			, "string");  // 작업코드
        	this.dsSelect.addColumn("TY_GBN"   			, "string");     // 구분
        	this.dsSelect.addColumn("CD_WI"         	, "string");  // 유형
        	this.dsSelect.addColumn("CD_UH"  			, "string");  // 유형코드(?)
        	this.dsSelect.addColumn("CD_ACT" 			, "string");  // 공종코드
        	this.dsSelect.addColumn("DT_FROM"   		, "string");  // 접수일자 FROM
        	this.dsSelect.addColumn("DT_TO"     		, "string");  // 접수일자 TO
        	this.dsSelect.addColumn("DT_VISITPLAN_FROM"	, "string");  // 작업완료일자 FROM
        	this.dsSelect.addColumn("DT_VISITPLAN_TO"   , "string");  // 작업완료일자 TO
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

        	var v_chun = "", v_ho = "";

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_HO")) && this.dsSearch.getColumn(0, "CD_HO") != "공용") {
        		v_chun = this.dsSearch.getColumn(0, "CD_HO").substr(0, 2);
        		v_ho   = "0" + this.dsSearch.getColumn(0, "CD_HO").substr(2, 2);
        	}

        	if(this.dsSearch.getColumn(0, "CD_HO") == "공용") {
        		v_chun = "00";
        		v_ho   = "000";
        	}

        	this.dsSelect.setColumn(0, "CD_SITE"  		  , this.dsSearch.getColumn(0, "CD_SITE"));          	// 현장코드
        	this.dsSelect.setColumn(0, "TY_SEARCH"		  , this.dsSearch.getColumn(0, "TY_SEARCH"));       	// 구분
        	this.dsSelect.setColumn(0, "DS_DONG"  		  , this.dsSearch.getColumn(0, "DS_DONG"));         	// 동
        	this.dsSelect.setColumn(0, "DS_CUNG"  		  , v_chun);          									// 층
        	this.dsSelect.setColumn(0, "DS_HO"            , v_ho);            									// 호
        	this.dsSelect.setColumn(0, "CD_CTM"			  , this.dsSearch.getColumn(0, "CD_CTM"));				// 협력업체
        	this.dsSelect.setColumn(0, "CD_JOB"			  , this.dsSearch.getColumn(0, "CD_JOB"));  			// 작업코드
        	this.dsSelect.setColumn(0, "TY_GBN"			  , this.dsSearch.getColumn(0, "TY_GBN"));            	// 구분
        	this.dsSelect.setColumn(0, "CD_WI" 			  , this.dsSearch.getColumn(0, "CD_WI"));           	// 유형
        	this.dsSelect.setColumn(0, "CD_UH" 			  , "");          										// 유형(?)
        	this.dsSelect.setColumn(0, "CD_ACT"			  , this.dsSearch.getColumn(0, "CD_ACT"));              // 공종코드
        	this.dsSelect.setColumn(0, "CD_CTM"			  , this.dsSearch.getColumn(0, "CD_CTM"));           	// 협력업체
        	this.dsSelect.setColumn(0, "DT_VISITPLAN_FROM", this.dsSearch.getColumn(0, "DT_VISITPLAN_FROM"));   // 완료일자 FROM
        	this.dsSelect.setColumn(0, "DT_VISITPLAN_TO"  , this.dsSearch.getColumn(0, "DT_VISITPLAN_TO"));     // 완료일자 TO
        	this.dsSelect.setColumn(0, "DT_FROM"		  , this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO"  		  , this.dsSearch.getColumn(0, "DT_TO"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {};

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		this.gfnAlert("현장코드는 필수입니다.");
        		this.ccfCD_SITE.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) || this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))) {
        		this.gfnAlert("접수일자는 필수입니다.");
        		this.calDT_FROM.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_FROM"), this.dsSearch.getColumn(0, "DT_TO")) < 0) {
        		this.gfnAlert("접수일자 시작일이 접수 종료일보다 클 수 없습니다.");
        		this.calDT_FROM.setFocus();
        		return false;
        	}

        	// ?? 완료일자는 필수가 아님.

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DT_VISITPLAN_FROM")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_VISITPLAN_TO"))) {
        		if(this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_VISITPLAN_FROM"), this.dsSearch.getColumn(0, "DT_VISITPLAN_TO")) < 0) {
        			this.gfnAlert("완료일자 시작일이 접수 종료일보다 클 수 없습니다.");
        			this.DT_VISITPLAN_FROM.setFocus();
        			return false;
        		}
        	}

        	if(this.dsSearch.getColumn(0, "TY_SEARCH") == '1') {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CTM"))) {
        			this.gfnAlert("협력업체는 필수입니다.");
        			this.ccfCD_CTM.setFocus();
        			return false;
        		}
        	}

        	if(this.dsSearch.getColumn(0, "TY_SEARCH") == '2') {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_JOB"))) {
        			this.gfnAlert("작업코드는 필수입니다.");
        			this.ccfCD_JOB.setFocus();
        			return false;
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
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        };

        /*
         *	첨부파일 콜백 처리
         */
        this.fnFileCallback = function() {
        };

        /*
         *	하자내용변경 팝업 콜백 처리
         */
        this.fnRmNyPopupCallback = function(strId, val) {
        	if(val.isUpdate) {
        		this.FormBtns.Select.click();
        	}
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 현장코드
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", this.AuthClient.CD_DEPT);
        	}

        	// 유형
        	if (id == "ccfCD_WI") {
        		dsUserParam.setColumn(nrow, "CD_GUBUN"   , "S1");
        	}

        	// 공종
        	if (id == "ccfCD_ACT") {
        		dsUserParam.setColumn(nrow, "CD_GUBUN"   , "S5");
        	}

        	// 동
        	if (id == "ccfDS_DONG") {

        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        			this.gfnAlert("현장코드는 필수입니다.");
        			this.ccfCD_SITE.setFocus();
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "TY_TYPE"    , "DONG");
        		dsUserParam.setColumn(nrow, "CD_SITE"    , this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE1"     , "");
        		dsUserParam.setColumn(nrow, "VALUE2"     , "");
        	}

        	// 호
        	if (id == "ccfDS_HO") {

        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        			this.gfnAlert("현장코드는 필수입니다.");
        			this.ccfCD_SITE.setFocus();
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "TY_TYPE"    , "HO");
        		dsUserParam.setColumn(nrow, "CD_SITE"    , this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE1"     , this.dsSearch.getColumn(0, "DS_DONG"));
        		dsUserParam.setColumn(nrow, "VALUE2"     , "");
        	}

        	// 협력업체
        	if(id == "ccfCD_CTM" ){

        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        			this.gfnAlert("현장코드는 필수입니다.");
        			this.ccfCD_SITE.setFocus();
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}

        	// 작업코드
        	if(id == "ccfCD_JOB" ){

        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        			this.gfnAlert("현장코드는 필수입니다.");
        			this.ccfCD_SITE.setFocus();
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "TY_UMGB", this.dsSearch.getColumn(0, "CD_SITE"));
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	if (id == "ccfCD_SITE") {
        		if(arr.length > 0) {
        			this.UserInfo.DB_SPACE01 = this.dsSearch.getColumn(0, "CD_SITE");
        			this.UserInfo.DB_SPACE02 = this.dsSearch.getColumn(0, "DS_SITE");
        		}
        	}
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         * 하자접수 버튼 이벤트
         */
        this.fnWorkBtn1 = function(obj,e) {

        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.dsSearch.getColumn(0, "DS_SITE");
        	param.DS_DONG = this.dsList.getColumn(this.dsList.rowposition, "DS_DONG");
        	param.DS_HO   = this.dsList.getColumn(this.dsList.rowposition, "DS_HO");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_IPJUASRECEIPTTO", "", param);
        };

        /*
         * 작업지시서출력 버튼 이벤트
         */
         this.fnWorkBtn2 = function(obj,e) {

        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.dsSearch.getColumn(0, "DS_SITE");
        	param.CD_CTM  = this.dsList.getColumn(this.dsList.rowposition, "CD_CTM");
        	param.DS_CTM  = this.dsList.getColumn(this.dsList.rowposition, "DS_CTM");
        	param.CD_ACT  = this.dsList.getColumn(this.dsList.rowposition, "CD_ACT");
        	param.DS_ACT  = this.dsList.getColumn(this.dsList.rowposition, "DS_ACT");
        	param.DT_FR   = this.dsSearch.getColumn(0, "DT_FROM");
        	param.DT_TO   = this.dsSearch.getColumn(0, "DT_TO");
        	param.CD_JOB  = "";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_WORKDOCU", "", param);
        };


        /*
         * 작업완료입력 버튼 이벤트
         */
        this.fnWorkBtn3 = function(obj,e) {

        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.CD_SITE   = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE   = this.dsSearch.getColumn(0, "DS_SITE");
        	param.CD_CTM    = this.dsList.getColumn(this.dsList.rowposition, "CD_CTM");
        	param.DS_CTM    = this.dsList.getColumn(this.dsList.rowposition, "DS_CTM");
        	param.CD_JOB    = this.dsList.getColumn(this.dsList.rowposition, "CD_JOB");
        	param.CD_DONG   = this.dsList.getColumn(this.dsList.rowposition, "CD_DONG");
        	param.CD_HO     = this.dsList.getColumn(this.dsList.rowposition, "CD_CUNGHO");
        	param.cmbGr     = "전체";
        	param.cmbSearch = this.dsList.getColumn(this.dsList.rowposition, "TY_SEARCH");
        	param.cmbGubun  = this.dsTY_GBN.getColumn(this.dsList.getColumn(this.dsList.rowposition, "TY_GBN"), "DS_CODE");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_WORKEND", "", param);
        };

        /*
         * 세대별작업현황 버튼 이벤트
         */
        this.fnWorkBtn4 = function(obj,e) {

        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.CF_CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.CF_DS_SITE = this.dsSearch.getColumn(0, "DS_SITE");
        	param.CF_DS_DONG = this.dsList.getColumn(this.dsList.rowposition, "DS_DONG");
        	param.CF_DS_HO   = this.dsList.getColumn(this.dsList.rowposition, "DS_HO");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_WORKHOUSE", "", param);
        };

        /*
         * 점검전후/완료사인 사진보기 버튼 이벤트
         */
        this.fnWorkBtn5 = function(obj,e) {

        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.CD_JOB  = this.dsList.getColumn(this.dsList.rowposition, "CD_JOB");
        	param.TY_UMGB = this.dsList.getColumn(this.dsList.rowposition, "TY_UMGB");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_WORKPICPOPUP", "", param);
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.row > -1 && e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if ( e.columnid == "DS_DONG" ){
        			this.ccfDS_HO.form.fnCodeFindClear();
        		}

        		if(e.columnid == "TY_SEARCH") {
        			this.fnSearchSetter();
        		}
        	}
        };

        /*
        *	조회조건 검색조건 별로 세팅.
        */
        this.fnSearchSetter = function() {

        	var tySearch = this.dsSearch.getColumn(0, "TY_SEARCH");

        	this.divDongho.set_visible(tySearch == "0" ? true : false); // 동호정보
        	this.divVendor.set_visible(tySearch == "1" ? true : false); // 협력업체
        	this.divCdJob.set_visible( tySearch == "2" ? true : false); // 작업코드

        	// 초기화.
        	this.dsSearch.setColumn(0, "CD_DONG", "");
        	this.dsSearch.setColumn(0, "DS_DONG", "");
        	this.dsSearch.setColumn(0, "CD_HO"  , "");
        	this.dsSearch.setColumn(0, "DS_HO"  , "");
        	this.dsSearch.setColumn(0, "CD_CTM" , "");
        	this.dsSearch.setColumn(0, "DS_CTM" , "");
        	this.dsSearch.setColumn(0, "CD_JOB" , "");
        	this.dsSearch.setColumn(0, "DS_JOB" , "");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DBS_IPJUWORKSTATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
