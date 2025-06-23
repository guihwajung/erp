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
            this.set_titletext("최종합격자등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DARPR_RECRUIT_FINAL_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DARPR_RECRUIT_FINAL_SAVE</Col></Row><Row><Col id=\"TARGET\">excel</Col><Col id=\"SP\">DARPR_RECRUIT_FINAL_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_NOTICE\" type=\"STRING\" size=\"256\"/><Column id=\"C6\" type=\"STRING\" size=\"256\"/><Column id=\"C33\" type=\"STRING\" size=\"256\"/><Column id=\"C7\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NOTICE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"RECRUIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"C1\" type=\"STRING\" size=\"256\"/><Column id=\"C2\" type=\"STRING\" size=\"256\"/><Column id=\"C3\" type=\"STRING\" size=\"256\"/><Column id=\"C4\" type=\"STRING\" size=\"256\"/><Column id=\"C5\" type=\"STRING\" size=\"256\"/><Column id=\"C6\" type=\"STRING\" size=\"256\"/><Column id=\"C7\" type=\"STRING\" size=\"256\"/><Column id=\"C8\" type=\"STRING\" size=\"256\"/><Column id=\"C9\" type=\"STRING\" size=\"256\"/><Column id=\"C10\" type=\"STRING\" size=\"256\"/><Column id=\"C11\" type=\"STRING\" size=\"256\"/><Column id=\"C12\" type=\"STRING\" size=\"256\"/><Column id=\"C13\" type=\"STRING\" size=\"256\"/><Column id=\"C14\" type=\"STRING\" size=\"256\"/><Column id=\"C15\" type=\"STRING\" size=\"256\"/><Column id=\"C16\" type=\"STRING\" size=\"256\"/><Column id=\"C17\" type=\"STRING\" size=\"256\"/><Column id=\"C18\" type=\"STRING\" size=\"256\"/><Column id=\"C19\" type=\"STRING\" size=\"256\"/><Column id=\"C20\" type=\"STRING\" size=\"256\"/><Column id=\"C21\" type=\"STRING\" size=\"256\"/><Column id=\"C22\" type=\"STRING\" size=\"256\"/><Column id=\"C23\" type=\"STRING\" size=\"256\"/><Column id=\"C24\" type=\"STRING\" size=\"256\"/><Column id=\"C25\" type=\"STRING\" size=\"256\"/><Column id=\"C26\" type=\"STRING\" size=\"256\"/><Column id=\"C27\" type=\"STRING\" size=\"256\"/><Column id=\"C28\" type=\"STRING\" size=\"256\"/><Column id=\"C29\" type=\"STRING\" size=\"256\"/><Column id=\"C30\" type=\"STRING\" size=\"256\"/><Column id=\"C31\" type=\"STRING\" size=\"256\"/><Column id=\"C32\" type=\"STRING\" size=\"256\"/><Column id=\"C33\" type=\"STRING\" size=\"256\"/><Column id=\"C34\" type=\"STRING\" size=\"256\"/><Column id=\"C35\" type=\"STRING\" size=\"256\"/><Column id=\"C36\" type=\"STRING\" size=\"256\"/><Column id=\"C37\" type=\"STRING\" size=\"256\"/><Column id=\"C38\" type=\"STRING\" size=\"256\"/><Column id=\"C39\" type=\"STRING\" size=\"256\"/><Column id=\"C40\" type=\"STRING\" size=\"256\"/><Column id=\"C41\" type=\"STRING\" size=\"256\"/><Column id=\"C42\" type=\"STRING\" size=\"256\"/><Column id=\"C43\" type=\"STRING\" size=\"256\"/><Column id=\"C44\" type=\"STRING\" size=\"256\"/><Column id=\"C45\" type=\"STRING\" size=\"256\"/><Column id=\"C46\" type=\"STRING\" size=\"256\"/><Column id=\"C47\" type=\"STRING\" size=\"256\"/><Column id=\"C48\" type=\"STRING\" size=\"256\"/><Column id=\"C49\" type=\"STRING\" size=\"256\"/><Column id=\"C50\" type=\"STRING\" size=\"256\"/><Column id=\"C51\" type=\"STRING\" size=\"256\"/><Column id=\"C52\" type=\"STRING\" size=\"256\"/><Column id=\"C53\" type=\"STRING\" size=\"256\"/><Column id=\"C54\" type=\"STRING\" size=\"256\"/><Column id=\"C55\" type=\"STRING\" size=\"256\"/><Column id=\"C56\" type=\"STRING\" size=\"256\"/><Column id=\"C57\" type=\"STRING\" size=\"256\"/><Column id=\"C58\" type=\"STRING\" size=\"256\"/><Column id=\"C59\" type=\"STRING\" size=\"256\"/><Column id=\"C60\" type=\"STRING\" size=\"256\"/><Column id=\"C61\" type=\"STRING\" size=\"256\"/><Column id=\"C62\" type=\"STRING\" size=\"256\"/><Column id=\"C63\" type=\"STRING\" size=\"256\"/><Column id=\"C64\" type=\"STRING\" size=\"256\"/><Column id=\"C65\" type=\"STRING\" size=\"256\"/><Column id=\"C66\" type=\"STRING\" size=\"256\"/><Column id=\"C67\" type=\"STRING\" size=\"256\"/><Column id=\"C68\" type=\"STRING\" size=\"256\"/><Column id=\"C69\" type=\"STRING\" size=\"256\"/><Column id=\"C70\" type=\"STRING\" size=\"256\"/><Column id=\"C71\" type=\"STRING\" size=\"256\"/><Column id=\"C72\" type=\"STRING\" size=\"256\"/><Column id=\"C73\" type=\"STRING\" size=\"256\"/><Column id=\"C74\" type=\"STRING\" size=\"256\"/><Column id=\"C75\" type=\"STRING\" size=\"256\"/><Column id=\"C76\" type=\"STRING\" size=\"256\"/><Column id=\"C77\" type=\"STRING\" size=\"256\"/><Column id=\"C78\" type=\"STRING\" size=\"256\"/><Column id=\"C79\" type=\"STRING\" size=\"256\"/><Column id=\"C80\" type=\"STRING\" size=\"256\"/><Column id=\"C81\" type=\"STRING\" size=\"256\"/><Column id=\"C82\" type=\"STRING\" size=\"256\"/><Column id=\"C83\" type=\"STRING\" size=\"256\"/><Column id=\"C84\" type=\"STRING\" size=\"256\"/><Column id=\"C85\" type=\"STRING\" size=\"256\"/><Column id=\"C86\" type=\"STRING\" size=\"256\"/><Column id=\"C87\" type=\"STRING\" size=\"256\"/><Column id=\"C88\" type=\"STRING\" size=\"256\"/><Column id=\"C89\" type=\"STRING\" size=\"256\"/><Column id=\"C90\" type=\"STRING\" size=\"256\"/><Column id=\"C91\" type=\"STRING\" size=\"256\"/><Column id=\"C92\" type=\"STRING\" size=\"256\"/><Column id=\"C93\" type=\"STRING\" size=\"256\"/><Column id=\"C94\" type=\"STRING\" size=\"256\"/><Column id=\"C95\" type=\"STRING\" size=\"256\"/><Column id=\"C96\" type=\"STRING\" size=\"256\"/><Column id=\"C97\" type=\"STRING\" size=\"256\"/><Column id=\"C98\" type=\"STRING\" size=\"256\"/><Column id=\"C99\" type=\"STRING\" size=\"256\"/><Column id=\"C100\" type=\"STRING\" size=\"256\"/><Column id=\"C101\" type=\"STRING\" size=\"256\"/><Column id=\"C102\" type=\"STRING\" size=\"256\"/><Column id=\"C103\" type=\"STRING\" size=\"256\"/><Column id=\"C104\" type=\"STRING\" size=\"256\"/><Column id=\"C105\" type=\"STRING\" size=\"256\"/><Column id=\"C106\" type=\"STRING\" size=\"256\"/><Column id=\"C107\" type=\"STRING\" size=\"256\"/><Column id=\"C108\" type=\"STRING\" size=\"256\"/><Column id=\"C109\" type=\"STRING\" size=\"256\"/><Column id=\"C110\" type=\"STRING\" size=\"256\"/><Column id=\"C111\" type=\"STRING\" size=\"256\"/><Column id=\"C112\" type=\"STRING\" size=\"256\"/><Column id=\"C113\" type=\"STRING\" size=\"256\"/><Column id=\"C114\" type=\"STRING\" size=\"256\"/><Column id=\"C115\" type=\"STRING\" size=\"256\"/><Column id=\"C116\" type=\"STRING\" size=\"256\"/><Column id=\"C117\" type=\"STRING\" size=\"256\"/><Column id=\"C118\" type=\"STRING\" size=\"256\"/><Column id=\"C119\" type=\"STRING\" size=\"256\"/><Column id=\"C120\" type=\"STRING\" size=\"256\"/><Column id=\"C121\" type=\"STRING\" size=\"256\"/><Column id=\"C122\" type=\"STRING\" size=\"256\"/><Column id=\"C123\" type=\"STRING\" size=\"256\"/><Column id=\"C124\" type=\"STRING\" size=\"256\"/><Column id=\"C125\" type=\"STRING\" size=\"256\"/><Column id=\"C126\" type=\"STRING\" size=\"256\"/><Column id=\"C127\" type=\"STRING\" size=\"256\"/><Column id=\"C128\" type=\"STRING\" size=\"256\"/><Column id=\"C129\" type=\"STRING\" size=\"256\"/><Column id=\"C130\" type=\"STRING\" size=\"256\"/><Column id=\"C131\" type=\"STRING\" size=\"256\"/><Column id=\"C132\" type=\"STRING\" size=\"256\"/><Column id=\"C133\" type=\"STRING\" size=\"256\"/><Column id=\"C134\" type=\"STRING\" size=\"256\"/><Column id=\"C135\" type=\"STRING\" size=\"256\"/><Column id=\"C136\" type=\"STRING\" size=\"256\"/><Column id=\"C137\" type=\"STRING\" size=\"256\"/><Column id=\"C138\" type=\"STRING\" size=\"256\"/><Column id=\"C139\" type=\"STRING\" size=\"256\"/><Column id=\"C140\" type=\"STRING\" size=\"256\"/><Column id=\"C141\" type=\"STRING\" size=\"256\"/><Column id=\"C142\" type=\"STRING\" size=\"256\"/><Column id=\"C143\" type=\"STRING\" size=\"256\"/><Column id=\"C144\" type=\"STRING\" size=\"256\"/><Column id=\"C145\" type=\"STRING\" size=\"256\"/><Column id=\"C146\" type=\"STRING\" size=\"256\"/><Column id=\"C147\" type=\"STRING\" size=\"256\"/><Column id=\"C148\" type=\"STRING\" size=\"256\"/><Column id=\"C149\" type=\"STRING\" size=\"256\"/><Column id=\"C150\" type=\"STRING\" size=\"256\"/><Column id=\"C151\" type=\"STRING\" size=\"256\"/><Column id=\"C152\" type=\"STRING\" size=\"256\"/><Column id=\"C153\" type=\"STRING\" size=\"256\"/><Column id=\"C154\" type=\"STRING\" size=\"256\"/><Column id=\"C155\" type=\"STRING\" size=\"256\"/><Column id=\"C156\" type=\"STRING\" size=\"256\"/><Column id=\"C157\" type=\"STRING\" size=\"256\"/><Column id=\"C158\" type=\"STRING\" size=\"256\"/><Column id=\"C159\" type=\"STRING\" size=\"256\"/><Column id=\"C160\" type=\"STRING\" size=\"256\"/><Column id=\"C161\" type=\"STRING\" size=\"256\"/><Column id=\"C162\" type=\"STRING\" size=\"256\"/><Column id=\"C163\" type=\"STRING\" size=\"256\"/><Column id=\"C164\" type=\"STRING\" size=\"256\"/><Column id=\"C165\" type=\"STRING\" size=\"256\"/><Column id=\"C166\" type=\"STRING\" size=\"256\"/><Column id=\"C167\" type=\"STRING\" size=\"256\"/><Column id=\"C168\" type=\"STRING\" size=\"256\"/><Column id=\"C169\" type=\"STRING\" size=\"256\"/><Column id=\"C170\" type=\"STRING\" size=\"256\"/><Column id=\"C171\" type=\"STRING\" size=\"256\"/><Column id=\"C172\" type=\"STRING\" size=\"256\"/><Column id=\"C173\" type=\"STRING\" size=\"256\"/><Column id=\"C174\" type=\"STRING\" size=\"256\"/><Column id=\"C175\" type=\"STRING\" size=\"256\"/><Column id=\"C176\" type=\"STRING\" size=\"256\"/><Column id=\"C177\" type=\"STRING\" size=\"256\"/><Column id=\"C178\" type=\"STRING\" size=\"256\"/><Column id=\"C179\" type=\"STRING\" size=\"256\"/><Column id=\"C180\" type=\"STRING\" size=\"256\"/><Column id=\"C181\" type=\"STRING\" size=\"256\"/><Column id=\"C182\" type=\"STRING\" size=\"256\"/><Column id=\"C183\" type=\"STRING\" size=\"256\"/><Column id=\"C184\" type=\"STRING\" size=\"256\"/><Column id=\"C185\" type=\"STRING\" size=\"256\"/><Column id=\"C186\" type=\"STRING\" size=\"256\"/><Column id=\"C187\" type=\"STRING\" size=\"256\"/><Column id=\"C188\" type=\"STRING\" size=\"256\"/><Column id=\"C189\" type=\"STRING\" size=\"256\"/><Column id=\"C190\" type=\"STRING\" size=\"256\"/><Column id=\"C191\" type=\"STRING\" size=\"256\"/><Column id=\"C192\" type=\"STRING\" size=\"256\"/><Column id=\"C193\" type=\"STRING\" size=\"256\"/><Column id=\"C194\" type=\"STRING\" size=\"256\"/><Column id=\"C195\" type=\"STRING\" size=\"256\"/><Column id=\"C196\" type=\"STRING\" size=\"256\"/><Column id=\"C197\" type=\"STRING\" size=\"256\"/><Column id=\"C198\" type=\"STRING\" size=\"256\"/><Column id=\"C199\" type=\"STRING\" size=\"256\"/><Column id=\"C200\" type=\"STRING\" size=\"256\"/><Column id=\"C201\" type=\"STRING\" size=\"256\"/><Column id=\"C202\" type=\"STRING\" size=\"256\"/><Column id=\"C203\" type=\"STRING\" size=\"256\"/><Column id=\"C204\" type=\"STRING\" size=\"256\"/><Column id=\"C205\" type=\"STRING\" size=\"256\"/><Column id=\"C206\" type=\"STRING\" size=\"256\"/><Column id=\"C207\" type=\"STRING\" size=\"256\"/><Column id=\"C208\" type=\"STRING\" size=\"256\"/><Column id=\"C209\" type=\"STRING\" size=\"256\"/><Column id=\"C210\" type=\"STRING\" size=\"256\"/><Column id=\"C211\" type=\"STRING\" size=\"256\"/><Column id=\"C212\" type=\"STRING\" size=\"256\"/><Column id=\"C213\" type=\"STRING\" size=\"256\"/><Column id=\"C214\" type=\"STRING\" size=\"256\"/><Column id=\"C215\" type=\"STRING\" size=\"256\"/><Column id=\"C216\" type=\"STRING\" size=\"256\"/><Column id=\"C217\" type=\"STRING\" size=\"256\"/><Column id=\"C218\" type=\"STRING\" size=\"256\"/><Column id=\"C219\" type=\"STRING\" size=\"256\"/><Column id=\"C220\" type=\"STRING\" size=\"256\"/><Column id=\"C221\" type=\"STRING\" size=\"256\"/><Column id=\"C222\" type=\"STRING\" size=\"256\"/><Column id=\"C223\" type=\"STRING\" size=\"256\"/><Column id=\"C224\" type=\"STRING\" size=\"256\"/><Column id=\"C225\" type=\"STRING\" size=\"256\"/><Column id=\"C226\" type=\"STRING\" size=\"256\"/><Column id=\"C227\" type=\"STRING\" size=\"256\"/><Column id=\"C228\" type=\"STRING\" size=\"256\"/><Column id=\"C229\" type=\"STRING\" size=\"256\"/><Column id=\"C230\" type=\"STRING\" size=\"256\"/><Column id=\"C231\" type=\"STRING\" size=\"256\"/><Column id=\"C232\" type=\"STRING\" size=\"256\"/><Column id=\"C233\" type=\"STRING\" size=\"256\"/><Column id=\"C234\" type=\"STRING\" size=\"256\"/><Column id=\"C235\" type=\"STRING\" size=\"256\"/><Column id=\"C236\" type=\"STRING\" size=\"256\"/><Column id=\"C237\" type=\"STRING\" size=\"256\"/><Column id=\"C238\" type=\"STRING\" size=\"256\"/><Column id=\"C239\" type=\"STRING\" size=\"256\"/><Column id=\"C240\" type=\"STRING\" size=\"256\"/><Column id=\"C241\" type=\"STRING\" size=\"256\"/><Column id=\"C242\" type=\"STRING\" size=\"256\"/><Column id=\"C243\" type=\"STRING\" size=\"256\"/><Column id=\"C244\" type=\"STRING\" size=\"256\"/><Column id=\"C245\" type=\"STRING\" size=\"256\"/><Column id=\"C246\" type=\"STRING\" size=\"256\"/><Column id=\"C247\" type=\"STRING\" size=\"256\"/><Column id=\"C248\" type=\"STRING\" size=\"256\"/><Column id=\"C249\" type=\"STRING\" size=\"256\"/><Column id=\"C250\" type=\"STRING\" size=\"256\"/><Column id=\"C251\" type=\"STRING\" size=\"256\"/><Column id=\"C252\" type=\"STRING\" size=\"256\"/><Column id=\"C253\" type=\"STRING\" size=\"256\"/><Column id=\"C254\" type=\"STRING\" size=\"256\"/><Column id=\"C255\" type=\"STRING\" size=\"256\"/><Column id=\"C256\" type=\"STRING\" size=\"256\"/><Column id=\"C257\" type=\"STRING\" size=\"256\"/><Column id=\"C258\" type=\"STRING\" size=\"256\"/><Column id=\"C259\" type=\"STRING\" size=\"256\"/><Column id=\"C260\" type=\"STRING\" size=\"256\"/><Column id=\"C261\" type=\"STRING\" size=\"256\"/><Column id=\"C262\" type=\"STRING\" size=\"256\"/><Column id=\"C263\" type=\"STRING\" size=\"256\"/><Column id=\"C264\" type=\"STRING\" size=\"256\"/><Column id=\"C265\" type=\"STRING\" size=\"256\"/><Column id=\"C266\" type=\"STRING\" size=\"256\"/><Column id=\"C267\" type=\"STRING\" size=\"256\"/><Column id=\"C268\" type=\"STRING\" size=\"256\"/><Column id=\"C269\" type=\"STRING\" size=\"256\"/><Column id=\"C270\" type=\"STRING\" size=\"256\"/><Column id=\"C271\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_RESULT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MEMBERFEE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ALLOW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_NOTICE","staDS_NOTICE:0.0","10.0","235","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_C6","ccfNO_NOTICE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("모집분야");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_C6","staDS_C6:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_C33","txtDS_C6:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("staDS_RESULT","txtDS_C7:0.0","staDS_NOTICE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("최종결과");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDS_RESULT","staDS_RESULT:0.0","staDS_NOTICE:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsDS_RESULT");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","15%","100.00%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0","100%","100%",null,"divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","40.47%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("결과등록");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta06","86","56","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNEW_DS_RESULT","0","56","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("결과구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","27","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_text("법인");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta00","86","27","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Combo("cboNEW_DS_RESULT","92","61","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsDS_RESULT");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("1");
            obj.set_index("-1");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","92","33","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnOK","296","1","60","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_text("적용");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfNO_NOTICE.form.CDTextBox","value","dsSearch","NO_NOTICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.txtDS_C6","value","dsSearch","C6");
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

            obj = new BindItem("item6","divSearch.form.cboDS_RESULT","value","dsSearch","DS_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.ccfCD_CORP.form.CDTextBox","value","dsData","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.cboNEW_DS_RESULT","value","dsData","DS_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.ccfCD_CORP.form.DSTextBox","value","dsData","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAR_VOLUNTEER_FINAL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.gNO_NOTICE;	// 채용공고값 (엑셀업로드시 사용)
        this.gDS_RESULT;	// 결과구분값 (엑셀업로드시 사용)

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

        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        // 	this.FormBtns.Save.set_enable(true);
         	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnItem1 = this.gfnFormButtonAdd("btnExcelUpload", "fnExcelUpload");		// 결과등록
        	this.btnItem2 = this.gfnFormButtonAdd("btnRecruitOrder", "fnRecruitOrder");		// 채용발행
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.dxGrid = this.divData.form.divDataBottom.form.objGrid;
        	//this.dxGridExcel = this.divData.form.divDataBottom.form.grdExcel;
        	//this.dxGrid = this.divData.form.objGrid;
        	//this.dxGridExcel = this.divData.form.grdExcel;

        	this.ccfNO_NOTICE = this.divSearch.form.ccfNO_NOTICE;	// 채용공고
        	this.txtDS_C6 = this.divSearch.form.txtDS_C6;			// 모집분야
        	this.txtDS_C33 = this.divSearch.form.txtDS_C33;			// 응시현황
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;		// 접수기간
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;
        	this.txtDS_C7 = this.divSearch.form.txtDS_C7;			// 경력구분
        	this.cboDS_RESULT = this.divSearch.form.cboDS_RESULT;	// 최종결과

        	this.ccfCD_CORP = this.divData.form.divDataTop.form.ccfCD_CORP;
        	this.cboNEW_DS_RESULT = this.divData.form.divDataTop.form.cboNEW_DS_RESULT;
        	//this.ccfCD_CORP
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAR_VOLUNTEER_FINAL");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 채용공고 코드파인드
        	this.ccfNO_NOTICE.CodeFindName = "DAX_RECRUIT_NOTICE";
        	this.ccfNO_NOTICE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";
        	this.cboDS_RESULT.set_value("%");
        	this.cboNEW_DS_RESULT.set_value("%");

        	//날짜 from ~ to 셋팅 ( 매월1일 ~ 매월 말일 )
        	var today = this.gfnGetDate().substring(0,6);
        	var endDay = this.gfnGetLastDate(today);
        	this.divSearch.form.ctclDT_FROM.set_value(today+"01");
        	this.divSearch.form.ctclDT_TO.set_value(endDay);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_NOTICE", "string");
        	this.dsSelect.addColumn("C6", "string");
        	this.dsSelect.addColumn("C33", "string");
        	this.dsSelect.addColumn("C7", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("DS_RESULT", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("RECRUIT_ID", "string");
        	this.dsSave.addColumn("DS_RESULT", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_USER", "string");

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
        	this.dsSelect.setColumn(0, "C6", this.dsSearch.getColumn(0, "C6"));
        	this.dsSelect.setColumn(0, "C33", this.dsSearch.getColumn(0, "C33"));
        	this.dsSelect.setColumn(0, "C7", this.dsSearch.getColumn(0, "C7"));
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "DS_RESULT", this.dsSearch.getColumn(0, "DS_RESULT"));

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
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "RECRUIT_ID", this.dsList.getColumn(i, "RECRUIT_ID"));
        				this.dsSave.setColumn(nrow, "DS_RESULT", this.dsList.getColumn(i, "DS_RESULT"));	// 최종결과
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));		// 채용법인
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
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

        	this.cboDS_RESULT.set_value("%");
        	this.cboNEW_DS_RESULT.set_value("%");

        	//날짜 from ~ to 셋팅 ( 매월1일 ~ 매월 말일 )
        	var today = this.gfnGetDate().substring(0,6);
        	var endDay = this.gfnGetLastDate(today);
        	this.divSearch.form.ctclDT_FROM.set_value(today+"01");
        	this.divSearch.form.ctclDT_TO.set_value(endDay);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	if (this.gfnIsNull(this.ccfNO_NOTICE.form.CDTextBox.text)) {
        		this.fnVaidateCallback = function() {
        			this.ccfNO_NOTICE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("채용공고를 입력하세요.", "fnVaidateCallback");
        		return false;
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
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	/*
        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			break;
        		default:
        	}
        	*/
        	this.fnSearchInit();
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow)
        {
        	switch(id) {
        		//구분
        		case "DAX_CFCOMMONCODE":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");
        		break;

        		case "ccfCD_CORP": // 법인코드
        		break;

        		case "DAX_CFBASEINFO_ALL":
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        		break;

        		default:
        	}

        	return true;
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
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

        //진행상태 콤보 조회
        this.fnSetCombo = function() {

           this.dsCombo = new Dataset();
           this.dsCombo.addColumn("TY_SEL", "string");
           this.dsCombo.addColumn("CD_PREFIX", "string");
           this.dsCombo.addColumn("CD_UPPREFIX", "string");

           this.dsCombo.addRow();
           this.dsCombo.setColumn(0, "TY_SEL", "A");
           this.dsCombo.setColumn(0, "CD_PREFIX", "DR");
           this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsDS_RESULT=combo0";
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


        // 채용발행
        this.fnRecruitOrder = function(obj, e){
        	//if(this.dsList.rowposition < 0)return;
        	var param = {};
        	this.gfnFormOpen("DAR", "DAR_RECRUIT_ORDER", "fnRecruitOrder_callback", param);
        };

        this.fnRecruitOrder_callback = function() {
        }

        // 결과 등록( 채용공고 값 선택 팝업)
        this.fnExcelUpload = function(obj, e){
        	gNO_NOTICE = "";
        	gDS_RESULT = "";

        	var param = {};
        	param.NO_NOTICE = this.dsSearch.getColumn(0, "NO_NOTICE");
        	param.DS_NOTICE = this.dsSearch.getColumn(0, "DS_NOTICE");
        	param.FORM_ID = "DAR_VOLUNTEER_FINAL";
        	param.FORM_TITLE = "결과등록";

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DAR_VOLUNTEER_DLG", "fnExcelUploadCallback", param);
        };

        this.fnExcelUploadCallback = function(svcID, value) {
        	if(value) {
        		var json = JSON.parse(value);
        		var val = json.DS_EXCEL;
        		this.dsListExcel.clearData();
        		this.dsListExcel.loadCSV(val);
        		gNO_NOTICE = json.NO_NOTICE;
        		gDS_RESULT = json.DS_RESULT;

        		this.fnInsert();
        		//this.fnExcelImport();
        	}
        }

        this.fnInsert = function(){
        	//this.dxGridExcel.updateToDataset();

        	if (this.dsListExcel.rowcount == 0) return;

        	this.dsListExcel.addColumn("TY_SAVE", "string");
        	this.dsListExcel.addColumn("DS_RESULT", "string");

        	// 채용공고값 세팅
        	for (var i = 0; i < this.dsListExcel.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListExcel, i);

        		//this.dsListExcel.setColumn(i, "C1", gNO_NOTICE);	--엑셀에 넣은값으로 들어가게함
        		this.dsListExcel.setColumn(i, "DS_RESULT", gDS_RESULT);
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

        this.btnOK_onclick = function(obj,e) {

        	var chkCnt = this.dsList.getCaseCount("CHK == 1");
        	if(chkCnt == 0) {
        		this.gfnAlert("체크된 행이 없습니다.");
        		return;
        	}

        	var NEW_DS_RESULT = this.dsData.getColumn(0, "DS_RESULT");	// 최종결과
        	var NEW_CD_CORP = this.dsData.getColumn(0, "CD_CORP");		// 법인코드
        	var NEW_DS_CORP = this.dsData.getColumn(0, "DS_CORP");		// 법인코드

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == 1) {
        			this.dsList.setColumn(i, "DS_RESULT", NEW_DS_RESULT);
        			this.dsList.setColumn(i, "CD_CORP", NEW_CD_CORP);
        			this.dsList.setColumn(i, "DS_CORP", NEW_DS_CORP);
        		}
        	}
        }

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_ondragmove = function(obj,e)
        {
        	this.divData.form.divSplitter.set_top(e.clienty);
        	this.divData.form.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_FROM.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.cboDS_RESULT.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataTop.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAR_VOLUNTEER_FINAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
