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
            this.set_titletext("지원자등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DARPR_RECRUIT_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DARPR_RECRUIT_LIST_SAVE</Col></Row><Row><Col id=\"TARGET\">excel</Col><Col id=\"SP\">DARPR_RECRUIT_LIST_SAVE</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DARPR_RECRUIT_LIST_PRINT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_NOTICE\" type=\"STRING\" size=\"256\"/><Column id=\"C6\" type=\"STRING\" size=\"256\"/><Column id=\"C9\" type=\"STRING\" size=\"256\"/><Column id=\"C33\" type=\"STRING\" size=\"256\"/><Column id=\"C7\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NOTICE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"RECRUIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"C1\" type=\"STRING\" size=\"256\"/><Column id=\"C2\" type=\"STRING\" size=\"256\"/><Column id=\"C3\" type=\"STRING\" size=\"256\"/><Column id=\"C4\" type=\"STRING\" size=\"256\"/><Column id=\"C5\" type=\"STRING\" size=\"256\"/><Column id=\"C6\" type=\"STRING\" size=\"256\"/><Column id=\"C7\" type=\"STRING\" size=\"256\"/><Column id=\"C8\" type=\"STRING\" size=\"256\"/><Column id=\"C9\" type=\"STRING\" size=\"256\"/><Column id=\"C10\" type=\"STRING\" size=\"256\"/><Column id=\"C11\" type=\"STRING\" size=\"256\"/><Column id=\"C12\" type=\"STRING\" size=\"256\"/><Column id=\"C13\" type=\"STRING\" size=\"256\"/><Column id=\"C14\" type=\"STRING\" size=\"256\"/><Column id=\"C15\" type=\"STRING\" size=\"256\"/><Column id=\"C16\" type=\"STRING\" size=\"256\"/><Column id=\"C17\" type=\"STRING\" size=\"256\"/><Column id=\"C18\" type=\"STRING\" size=\"256\"/><Column id=\"C19\" type=\"STRING\" size=\"256\"/><Column id=\"C20\" type=\"STRING\" size=\"256\"/><Column id=\"C21\" type=\"STRING\" size=\"256\"/><Column id=\"C22\" type=\"STRING\" size=\"256\"/><Column id=\"C23\" type=\"STRING\" size=\"256\"/><Column id=\"C24\" type=\"STRING\" size=\"256\"/><Column id=\"C25\" type=\"STRING\" size=\"256\"/><Column id=\"C26\" type=\"STRING\" size=\"256\"/><Column id=\"C27\" type=\"STRING\" size=\"256\"/><Column id=\"C28\" type=\"STRING\" size=\"256\"/><Column id=\"C29\" type=\"STRING\" size=\"256\"/><Column id=\"C30\" type=\"STRING\" size=\"256\"/><Column id=\"C31\" type=\"STRING\" size=\"256\"/><Column id=\"C32\" type=\"STRING\" size=\"256\"/><Column id=\"C33\" type=\"STRING\" size=\"256\"/><Column id=\"C34\" type=\"STRING\" size=\"256\"/><Column id=\"C35\" type=\"STRING\" size=\"256\"/><Column id=\"C36\" type=\"STRING\" size=\"256\"/><Column id=\"C37\" type=\"STRING\" size=\"256\"/><Column id=\"C38\" type=\"STRING\" size=\"256\"/><Column id=\"C39\" type=\"STRING\" size=\"256\"/><Column id=\"C40\" type=\"STRING\" size=\"256\"/><Column id=\"C41\" type=\"STRING\" size=\"256\"/><Column id=\"C42\" type=\"STRING\" size=\"256\"/><Column id=\"C43\" type=\"STRING\" size=\"256\"/><Column id=\"C44\" type=\"STRING\" size=\"256\"/><Column id=\"C45\" type=\"STRING\" size=\"256\"/><Column id=\"C46\" type=\"STRING\" size=\"256\"/><Column id=\"C47\" type=\"STRING\" size=\"256\"/><Column id=\"C48\" type=\"STRING\" size=\"256\"/><Column id=\"C49\" type=\"STRING\" size=\"256\"/><Column id=\"C50\" type=\"STRING\" size=\"256\"/><Column id=\"C51\" type=\"STRING\" size=\"256\"/><Column id=\"C52\" type=\"STRING\" size=\"256\"/><Column id=\"C53\" type=\"STRING\" size=\"256\"/><Column id=\"C54\" type=\"STRING\" size=\"256\"/><Column id=\"C55\" type=\"STRING\" size=\"256\"/><Column id=\"C56\" type=\"STRING\" size=\"256\"/><Column id=\"C57\" type=\"STRING\" size=\"256\"/><Column id=\"C58\" type=\"STRING\" size=\"256\"/><Column id=\"C59\" type=\"STRING\" size=\"256\"/><Column id=\"C60\" type=\"STRING\" size=\"256\"/><Column id=\"C61\" type=\"STRING\" size=\"256\"/><Column id=\"C62\" type=\"STRING\" size=\"256\"/><Column id=\"C63\" type=\"STRING\" size=\"256\"/><Column id=\"C64\" type=\"STRING\" size=\"256\"/><Column id=\"C65\" type=\"STRING\" size=\"256\"/><Column id=\"C66\" type=\"STRING\" size=\"256\"/><Column id=\"C67\" type=\"STRING\" size=\"256\"/><Column id=\"C68\" type=\"STRING\" size=\"256\"/><Column id=\"C69\" type=\"STRING\" size=\"256\"/><Column id=\"C70\" type=\"STRING\" size=\"256\"/><Column id=\"C71\" type=\"STRING\" size=\"256\"/><Column id=\"C72\" type=\"STRING\" size=\"256\"/><Column id=\"C73\" type=\"STRING\" size=\"256\"/><Column id=\"C74\" type=\"STRING\" size=\"256\"/><Column id=\"C75\" type=\"STRING\" size=\"256\"/><Column id=\"C76\" type=\"STRING\" size=\"256\"/><Column id=\"C77\" type=\"STRING\" size=\"256\"/><Column id=\"C78\" type=\"STRING\" size=\"256\"/><Column id=\"C79\" type=\"STRING\" size=\"256\"/><Column id=\"C80\" type=\"STRING\" size=\"256\"/><Column id=\"C81\" type=\"STRING\" size=\"256\"/><Column id=\"C82\" type=\"STRING\" size=\"256\"/><Column id=\"C83\" type=\"STRING\" size=\"256\"/><Column id=\"C84\" type=\"STRING\" size=\"256\"/><Column id=\"C85\" type=\"STRING\" size=\"256\"/><Column id=\"C86\" type=\"STRING\" size=\"256\"/><Column id=\"C87\" type=\"STRING\" size=\"256\"/><Column id=\"C88\" type=\"STRING\" size=\"256\"/><Column id=\"C89\" type=\"STRING\" size=\"256\"/><Column id=\"C90\" type=\"STRING\" size=\"256\"/><Column id=\"C91\" type=\"STRING\" size=\"256\"/><Column id=\"C92\" type=\"STRING\" size=\"256\"/><Column id=\"C93\" type=\"STRING\" size=\"256\"/><Column id=\"C94\" type=\"STRING\" size=\"256\"/><Column id=\"C95\" type=\"STRING\" size=\"256\"/><Column id=\"C96\" type=\"STRING\" size=\"256\"/><Column id=\"C97\" type=\"STRING\" size=\"256\"/><Column id=\"C98\" type=\"STRING\" size=\"256\"/><Column id=\"C99\" type=\"STRING\" size=\"256\"/><Column id=\"C100\" type=\"STRING\" size=\"256\"/><Column id=\"C101\" type=\"STRING\" size=\"256\"/><Column id=\"C102\" type=\"STRING\" size=\"256\"/><Column id=\"C103\" type=\"STRING\" size=\"256\"/><Column id=\"C104\" type=\"STRING\" size=\"256\"/><Column id=\"C105\" type=\"STRING\" size=\"256\"/><Column id=\"C106\" type=\"STRING\" size=\"256\"/><Column id=\"C107\" type=\"STRING\" size=\"256\"/><Column id=\"C108\" type=\"STRING\" size=\"256\"/><Column id=\"C109\" type=\"STRING\" size=\"256\"/><Column id=\"C110\" type=\"STRING\" size=\"256\"/><Column id=\"C111\" type=\"STRING\" size=\"256\"/><Column id=\"C112\" type=\"STRING\" size=\"256\"/><Column id=\"C113\" type=\"STRING\" size=\"256\"/><Column id=\"C114\" type=\"STRING\" size=\"256\"/><Column id=\"C115\" type=\"STRING\" size=\"256\"/><Column id=\"C116\" type=\"STRING\" size=\"256\"/><Column id=\"C117\" type=\"STRING\" size=\"256\"/><Column id=\"C118\" type=\"STRING\" size=\"256\"/><Column id=\"C119\" type=\"STRING\" size=\"256\"/><Column id=\"C120\" type=\"STRING\" size=\"256\"/><Column id=\"C121\" type=\"STRING\" size=\"256\"/><Column id=\"C122\" type=\"STRING\" size=\"256\"/><Column id=\"C123\" type=\"STRING\" size=\"256\"/><Column id=\"C124\" type=\"STRING\" size=\"256\"/><Column id=\"C125\" type=\"STRING\" size=\"256\"/><Column id=\"C126\" type=\"STRING\" size=\"256\"/><Column id=\"C127\" type=\"STRING\" size=\"256\"/><Column id=\"C128\" type=\"STRING\" size=\"256\"/><Column id=\"C129\" type=\"STRING\" size=\"256\"/><Column id=\"C130\" type=\"STRING\" size=\"256\"/><Column id=\"C131\" type=\"STRING\" size=\"256\"/><Column id=\"C132\" type=\"STRING\" size=\"256\"/><Column id=\"C133\" type=\"STRING\" size=\"256\"/><Column id=\"C134\" type=\"STRING\" size=\"256\"/><Column id=\"C135\" type=\"STRING\" size=\"256\"/><Column id=\"C136\" type=\"STRING\" size=\"256\"/><Column id=\"C137\" type=\"STRING\" size=\"256\"/><Column id=\"C138\" type=\"STRING\" size=\"256\"/><Column id=\"C139\" type=\"STRING\" size=\"256\"/><Column id=\"C140\" type=\"STRING\" size=\"256\"/><Column id=\"C141\" type=\"STRING\" size=\"256\"/><Column id=\"C142\" type=\"STRING\" size=\"256\"/><Column id=\"C143\" type=\"STRING\" size=\"256\"/><Column id=\"C144\" type=\"STRING\" size=\"256\"/><Column id=\"C145\" type=\"STRING\" size=\"256\"/><Column id=\"C146\" type=\"STRING\" size=\"256\"/><Column id=\"C147\" type=\"STRING\" size=\"256\"/><Column id=\"C148\" type=\"STRING\" size=\"256\"/><Column id=\"C149\" type=\"STRING\" size=\"256\"/><Column id=\"C150\" type=\"STRING\" size=\"256\"/><Column id=\"C151\" type=\"STRING\" size=\"256\"/><Column id=\"C152\" type=\"STRING\" size=\"256\"/><Column id=\"C153\" type=\"STRING\" size=\"256\"/><Column id=\"C154\" type=\"STRING\" size=\"256\"/><Column id=\"C155\" type=\"STRING\" size=\"256\"/><Column id=\"C156\" type=\"STRING\" size=\"256\"/><Column id=\"C157\" type=\"STRING\" size=\"256\"/><Column id=\"C158\" type=\"STRING\" size=\"256\"/><Column id=\"C159\" type=\"STRING\" size=\"256\"/><Column id=\"C160\" type=\"STRING\" size=\"256\"/><Column id=\"C161\" type=\"STRING\" size=\"256\"/><Column id=\"C162\" type=\"STRING\" size=\"256\"/><Column id=\"C163\" type=\"STRING\" size=\"256\"/><Column id=\"C164\" type=\"STRING\" size=\"256\"/><Column id=\"C165\" type=\"STRING\" size=\"256\"/><Column id=\"C166\" type=\"STRING\" size=\"256\"/><Column id=\"C167\" type=\"STRING\" size=\"256\"/><Column id=\"C168\" type=\"STRING\" size=\"256\"/><Column id=\"C169\" type=\"STRING\" size=\"256\"/><Column id=\"C170\" type=\"STRING\" size=\"256\"/><Column id=\"C171\" type=\"STRING\" size=\"256\"/><Column id=\"C172\" type=\"STRING\" size=\"256\"/><Column id=\"C173\" type=\"STRING\" size=\"256\"/><Column id=\"C174\" type=\"STRING\" size=\"256\"/><Column id=\"C175\" type=\"STRING\" size=\"256\"/><Column id=\"C176\" type=\"STRING\" size=\"256\"/><Column id=\"C177\" type=\"STRING\" size=\"256\"/><Column id=\"C178\" type=\"STRING\" size=\"256\"/><Column id=\"C179\" type=\"STRING\" size=\"256\"/><Column id=\"C180\" type=\"STRING\" size=\"256\"/><Column id=\"C181\" type=\"STRING\" size=\"256\"/><Column id=\"C182\" type=\"STRING\" size=\"256\"/><Column id=\"C183\" type=\"STRING\" size=\"256\"/><Column id=\"C184\" type=\"STRING\" size=\"256\"/><Column id=\"C185\" type=\"STRING\" size=\"256\"/><Column id=\"C186\" type=\"STRING\" size=\"256\"/><Column id=\"C187\" type=\"STRING\" size=\"256\"/><Column id=\"C188\" type=\"STRING\" size=\"256\"/><Column id=\"C189\" type=\"STRING\" size=\"256\"/><Column id=\"C190\" type=\"STRING\" size=\"256\"/><Column id=\"C191\" type=\"STRING\" size=\"256\"/><Column id=\"C192\" type=\"STRING\" size=\"256\"/><Column id=\"C193\" type=\"STRING\" size=\"256\"/><Column id=\"C194\" type=\"STRING\" size=\"256\"/><Column id=\"C195\" type=\"STRING\" size=\"256\"/><Column id=\"C196\" type=\"STRING\" size=\"256\"/><Column id=\"C197\" type=\"STRING\" size=\"256\"/><Column id=\"C198\" type=\"STRING\" size=\"256\"/><Column id=\"C199\" type=\"STRING\" size=\"256\"/><Column id=\"C200\" type=\"STRING\" size=\"256\"/><Column id=\"C201\" type=\"STRING\" size=\"256\"/><Column id=\"C202\" type=\"STRING\" size=\"256\"/><Column id=\"C203\" type=\"STRING\" size=\"256\"/><Column id=\"C204\" type=\"STRING\" size=\"256\"/><Column id=\"C205\" type=\"STRING\" size=\"256\"/><Column id=\"C206\" type=\"STRING\" size=\"256\"/><Column id=\"C207\" type=\"STRING\" size=\"256\"/><Column id=\"C208\" type=\"STRING\" size=\"256\"/><Column id=\"C209\" type=\"STRING\" size=\"256\"/><Column id=\"C210\" type=\"STRING\" size=\"256\"/><Column id=\"C211\" type=\"STRING\" size=\"256\"/><Column id=\"C212\" type=\"STRING\" size=\"256\"/><Column id=\"C213\" type=\"STRING\" size=\"256\"/><Column id=\"C214\" type=\"STRING\" size=\"256\"/><Column id=\"C215\" type=\"STRING\" size=\"256\"/><Column id=\"C216\" type=\"STRING\" size=\"256\"/><Column id=\"C217\" type=\"STRING\" size=\"256\"/><Column id=\"C218\" type=\"STRING\" size=\"256\"/><Column id=\"C219\" type=\"STRING\" size=\"256\"/><Column id=\"C220\" type=\"STRING\" size=\"256\"/><Column id=\"C221\" type=\"STRING\" size=\"256\"/><Column id=\"C222\" type=\"STRING\" size=\"256\"/><Column id=\"C223\" type=\"STRING\" size=\"256\"/><Column id=\"C224\" type=\"STRING\" size=\"256\"/><Column id=\"C225\" type=\"STRING\" size=\"256\"/><Column id=\"C226\" type=\"STRING\" size=\"256\"/><Column id=\"C227\" type=\"STRING\" size=\"256\"/><Column id=\"C228\" type=\"STRING\" size=\"256\"/><Column id=\"C229\" type=\"STRING\" size=\"256\"/><Column id=\"C230\" type=\"STRING\" size=\"256\"/><Column id=\"C231\" type=\"STRING\" size=\"256\"/><Column id=\"C232\" type=\"STRING\" size=\"256\"/><Column id=\"C233\" type=\"STRING\" size=\"256\"/><Column id=\"C234\" type=\"STRING\" size=\"256\"/><Column id=\"C235\" type=\"STRING\" size=\"256\"/><Column id=\"C236\" type=\"STRING\" size=\"256\"/><Column id=\"C237\" type=\"STRING\" size=\"256\"/><Column id=\"C238\" type=\"STRING\" size=\"256\"/><Column id=\"C239\" type=\"STRING\" size=\"256\"/><Column id=\"C240\" type=\"STRING\" size=\"256\"/><Column id=\"C241\" type=\"STRING\" size=\"256\"/><Column id=\"C242\" type=\"STRING\" size=\"256\"/><Column id=\"C243\" type=\"STRING\" size=\"256\"/><Column id=\"C244\" type=\"STRING\" size=\"256\"/><Column id=\"C245\" type=\"STRING\" size=\"256\"/><Column id=\"C246\" type=\"STRING\" size=\"256\"/><Column id=\"C247\" type=\"STRING\" size=\"256\"/><Column id=\"C248\" type=\"STRING\" size=\"256\"/><Column id=\"C249\" type=\"STRING\" size=\"256\"/><Column id=\"C250\" type=\"STRING\" size=\"256\"/><Column id=\"C251\" type=\"STRING\" size=\"256\"/><Column id=\"C252\" type=\"STRING\" size=\"256\"/><Column id=\"C253\" type=\"STRING\" size=\"256\"/><Column id=\"C254\" type=\"STRING\" size=\"256\"/><Column id=\"C255\" type=\"STRING\" size=\"256\"/><Column id=\"C256\" type=\"STRING\" size=\"256\"/><Column id=\"C257\" type=\"STRING\" size=\"256\"/><Column id=\"C258\" type=\"STRING\" size=\"256\"/><Column id=\"C259\" type=\"STRING\" size=\"256\"/><Column id=\"C260\" type=\"STRING\" size=\"256\"/><Column id=\"C261\" type=\"STRING\" size=\"256\"/><Column id=\"C262\" type=\"STRING\" size=\"256\"/><Column id=\"C263\" type=\"STRING\" size=\"256\"/><Column id=\"C264\" type=\"STRING\" size=\"256\"/><Column id=\"C265\" type=\"STRING\" size=\"256\"/><Column id=\"C266\" type=\"STRING\" size=\"256\"/><Column id=\"C267\" type=\"STRING\" size=\"256\"/><Column id=\"C268\" type=\"STRING\" size=\"256\"/><Column id=\"C269\" type=\"STRING\" size=\"256\"/><Column id=\"C270\" type=\"STRING\" size=\"256\"/><Column id=\"C271\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_NOTICE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("채용공고");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_NOTICE","staDS_NOTICE:0.0","10.0","235","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_C9","ccfNO_NOTICE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("모집분야");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_C9","staDS_C9:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_C33","txtDS_C9:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("응시현황");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_C33","staDS_C33:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","0.0","staDS_NOTICE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("접수기간");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0.0","staDS_NOTICE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TO","ctclDT_FROM:0.0","staDS_NOTICE:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_TO:0.0","staDS_NOTICE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_C7","ctclDT_TO:0.0","staDS_NOTICE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("경력구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_C7","staDS_C7:0.0","staDS_NOTICE:10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
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
            obj = new BindItem("item0","divSearch.form.ccfNO_NOTICE.form.CDTextBox","value","dsSearch","NO_NOTICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.txtDS_C9","value","dsSearch","C9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.txtDS_C33","value","dsSearch","C33");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.txtDS_C7","value","dsSearch","C7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfNO_NOTICE.form.DSTextBox","value","dsSearch","DS_NOTICE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAR_VOLUNTEER.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.gNO_NOTICE;	// 채용공고값 (엑셀업로드시 사용)

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

        	this.fnReset();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnItem = this.gfnFormButtonAdd("btnRecruitNotice", "fnRecruitNotice");	// 채용공고
        	this.btnItem = this.gfnFormButtonAdd("btnExcelUpload", "fnExcelUpload");		// 지원서등록
        	this.btnItem = this.gfnFormButtonAdd("btnReport", "fnReport");					// 접수현황출력
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        	//this.dxGridExcel = this.divData.form.grdExcel;

        	this.ccfNO_NOTICE = this.divSearch.form.ccfNO_NOTICE;	// 채용공고
        	this.txtDS_C9 = this.divSearch.form.txtDS_C9;			// 모집분야
        	this.txtDS_C33 = this.divSearch.form.txtDS_C33;			// 응시현황
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;		// 접수기간
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;
        	this.txtDS_C7 = this.divSearch.form.txtDS_C7;			// 경력구분

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAR_VOLUNTEER");

        	// 채용공고 코드파인드
        	this.ccfNO_NOTICE.CodeFindName = "DAX_RECRUIT_NOTICE";
        	this.ccfNO_NOTICE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//날짜 from ~ to 셋팅 ( 매월1일 ~ 매월 말일 )
        	var today = this.gfnGetDate().substring(0,6);
        	var endDay = this.gfnGetLastDate(today);
        	//this.divSearch.form.ctclDT_FROM.set_value(today+"01");
        	//this.divSearch.form.ctclDT_TO.set_value(endDay);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_NOTICE", "string");
        	this.dsSelect.addColumn("C6", "string");
        	this.dsSelect.addColumn("C9", "string");
        	this.dsSelect.addColumn("C33", "string");
        	this.dsSelect.addColumn("C7", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("RECRUIT_ID", "string");
        	this.dsSave.addColumn("C1", "string");
        	this.dsSave.addColumn("C6", "string");
        	this.dsSave.addColumn("C9", "string");
        	this.dsSave.addColumn("C7", "string");
        	this.dsSave.addColumn("C33", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("DS_HNAME", "string");
        	this.dsReport.addColumn("DT_BASE", "string");
        	this.dsReport.addColumn("NO_NOTICE", "string");
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
        	this.dsSelect.setColumn(0, "NO_NOTICE", this.dsSearch.getColumn(0, "NO_NOTICE"));
        	this.dsSelect.setColumn(0, "C9", this.dsSearch.getColumn(0, "C9"));
        	this.dsSelect.setColumn(0, "C33", this.dsSearch.getColumn(0, "C33"));
        	this.dsSelect.setColumn(0, "C7", this.dsSearch.getColumn(0, "C7"));
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));

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
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "RECRUIT_ID", this.dsList.getColumn(i, "RECRUIT_ID"));
        				this.dsSave.setColumn(nrow, "C9", this.dsList.getColumn(i, "A3"));	// 응시구분
        				this.dsSave.setColumn(nrow, "C7", this.dsList.getColumn(i, "A4"));	// 경력구분
        				this.dsSave.setColumn(nrow, "C33", this.dsList.getColumn(i, "A5"));	// 응시현황
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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

        /*
         *	초기화 버튼
         */
        this.fnReset  = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	//날짜 from ~ to 셋팅 ( 매월1일 ~ 매월 말일 )
        	var today = this.gfnGetDate().substring(0,6);
        	var endDay = this.gfnGetLastDate(today);
        	//this.divSearch.form.ctclDT_FROM.set_value(today+"01");
        	//this.divSearch.form.ctclDT_TO.set_value(endDay);

        	this.FormBtns.Select.click();
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
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
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "excel") {
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	this.fnSetButton();
        }

        /************************************************************************
        * 코드파인드 이벤트
        ************************************************************************/
        this.fnAfterCDTextChanged = function(id) {
        	this.fnSearchInit();
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
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        	}
        };

        // 채용공고등록
        this.fnRecruitNotice = function(obj, e){
        	//if(this.dsList.rowposition < 0) return;
        	var param = {};
        	//param.CD_JUDGEKIND = this.dsList.getColumn(this.dsList.rowposition, "CD_JUDGEKIND");
        	this.gfnFormOpen("DAR", "DAR_RECRUIT", "fnRecruit_callback", param);

        };

        // 지원자 등록( 채용공고 값 선택 팝업)
        this.fnExcelUpload = function(obj, e){
        	gNO_NOTICE = "";

        	var param = {};
        	param.NO_NOTICE = this.dsSearch.getColumn(0, "NO_NOTICE");
        	param.DS_NOTICE = this.dsSearch.getColumn(0, "DS_NOTICE");
        	param.FORM_ID = "DAR_VOLUNTEER";
        	param.FORM_TITLE = "지원자 업로드";

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DAR_VOLUNTEER_DLG", "fnExcelUploadCallback", param);
        };

        this.fnExcelUploadCallback = function(svcID, value) {
        	if(value) {
        		var json = JSON.parse(value);
        		var val = json.DS_EXCEL;
        		this.dsListExcel.clearData();
        		this.dsListExcel.loadCSV(val);
        		//gNO_NOTICE = json.NO_NOTICE;
        		//this.fnExcelImport();
        		this.fnInsert();
        	}
        }

        this.fnInsert = function(){
        	//this.dxGridExcel.updateToDataset();

        	if (this.dsListExcel.rowcount == 0) return;

        	this.dsListExcel.addColumn("TY_SAVE", "string");

        	// 채용공고값 세팅
        	for (var i = 0; i < this.dsListExcel.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListExcel, i);

        		//this.dsListExcel.setColumn(i, "C1", gNO_NOTICE);	--엑셀에 넣은값으로 들어가게함
        		this.dsListExcel.setColumn(i, "TY_SAVE", "I");
        	}

        	var strSvcId    = "excel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "excel=dsListExcel";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        // 접수현황 출력
        this.fnReport = function(obj, e){
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.DT_BASE = this.dsSearch.getColumn(0, "DT_FROM");
        	param.NO_NOTICE = this.dsSearch.getColumn(0, "NO_NOTICE");
        	param.DS_NOTICE = this.dsSearch.getColumn(0, "DS_NOTICE");

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DAR_VOLUNTEER_PRINT_DLG", "fnReportCallback", param, 360, 400);
        };

        this.fnReportCallback = function(svcID, value) {
        	if(value) {

        		var json = JSON.parse(value);
        		this.dsReport.clearData();
        		var nrow = this.dsReport.addRow();
        		this.dsReport.setColumn(nrow, "DS_HNAME", this.AuthClient.DS_HNAME);
        		this.dsReport.setColumn(nrow, "DT_BASE", json.DT_BASE);
        		this.dsReport.setColumn(nrow, "NO_NOTICE", json.NO_NOTICE);

        		if (this.dsReport.rowcount == 0) return;
        		// DARPR_RECRUIT_LIST_PRINT
        		var inProc		= "_dsProc";
        		//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        		var inParam 	= "";						// 필요없는 경우 생략
        		var inData      = "report=dsReport";
        		var reportpath  = "/da/dar/DAR_RECRUIT_LIST_PRINT.ozr";

        		gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_FROM.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAR_VOLUNTEER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
