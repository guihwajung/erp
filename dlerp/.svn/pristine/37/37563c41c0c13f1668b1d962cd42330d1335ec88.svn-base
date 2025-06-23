(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAR_VOLUNTEER_DLG");
            this.set_titletext("지원서 업로드");
            this.getSetter("maxwidth").set("370");
            this.getSetter("maxheight").set("250");
            if (Form == this.constructor)
            {
                this._setFormPosition(340,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_RESULT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MEMBERFEE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ALLOW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"RECRUIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"C1\" type=\"STRING\" size=\"256\"/><Column id=\"C2\" type=\"STRING\" size=\"256\"/><Column id=\"C3\" type=\"STRING\" size=\"256\"/><Column id=\"C4\" type=\"STRING\" size=\"256\"/><Column id=\"C5\" type=\"STRING\" size=\"256\"/><Column id=\"C6\" type=\"STRING\" size=\"256\"/><Column id=\"C7\" type=\"STRING\" size=\"256\"/><Column id=\"C8\" type=\"STRING\" size=\"256\"/><Column id=\"C9\" type=\"STRING\" size=\"256\"/><Column id=\"C10\" type=\"STRING\" size=\"256\"/><Column id=\"C11\" type=\"STRING\" size=\"256\"/><Column id=\"C12\" type=\"STRING\" size=\"256\"/><Column id=\"C13\" type=\"STRING\" size=\"256\"/><Column id=\"C14\" type=\"STRING\" size=\"256\"/><Column id=\"C15\" type=\"STRING\" size=\"256\"/><Column id=\"C16\" type=\"STRING\" size=\"256\"/><Column id=\"C17\" type=\"STRING\" size=\"256\"/><Column id=\"C18\" type=\"STRING\" size=\"256\"/><Column id=\"C19\" type=\"STRING\" size=\"256\"/><Column id=\"C20\" type=\"STRING\" size=\"256\"/><Column id=\"C21\" type=\"STRING\" size=\"256\"/><Column id=\"C22\" type=\"STRING\" size=\"256\"/><Column id=\"C23\" type=\"STRING\" size=\"256\"/><Column id=\"C24\" type=\"STRING\" size=\"256\"/><Column id=\"C25\" type=\"STRING\" size=\"256\"/><Column id=\"C26\" type=\"STRING\" size=\"256\"/><Column id=\"C27\" type=\"STRING\" size=\"256\"/><Column id=\"C28\" type=\"STRING\" size=\"256\"/><Column id=\"C29\" type=\"STRING\" size=\"256\"/><Column id=\"C30\" type=\"STRING\" size=\"256\"/><Column id=\"C31\" type=\"STRING\" size=\"256\"/><Column id=\"C32\" type=\"STRING\" size=\"256\"/><Column id=\"C33\" type=\"STRING\" size=\"256\"/><Column id=\"C34\" type=\"STRING\" size=\"256\"/><Column id=\"C35\" type=\"STRING\" size=\"256\"/><Column id=\"C36\" type=\"STRING\" size=\"256\"/><Column id=\"C37\" type=\"STRING\" size=\"256\"/><Column id=\"C38\" type=\"STRING\" size=\"256\"/><Column id=\"C39\" type=\"STRING\" size=\"256\"/><Column id=\"C40\" type=\"STRING\" size=\"256\"/><Column id=\"C41\" type=\"STRING\" size=\"256\"/><Column id=\"C42\" type=\"STRING\" size=\"256\"/><Column id=\"C43\" type=\"STRING\" size=\"256\"/><Column id=\"C44\" type=\"STRING\" size=\"256\"/><Column id=\"C45\" type=\"STRING\" size=\"256\"/><Column id=\"C46\" type=\"STRING\" size=\"256\"/><Column id=\"C47\" type=\"STRING\" size=\"256\"/><Column id=\"C48\" type=\"STRING\" size=\"256\"/><Column id=\"C49\" type=\"STRING\" size=\"256\"/><Column id=\"C50\" type=\"STRING\" size=\"256\"/><Column id=\"C51\" type=\"STRING\" size=\"256\"/><Column id=\"C52\" type=\"STRING\" size=\"256\"/><Column id=\"C53\" type=\"STRING\" size=\"256\"/><Column id=\"C54\" type=\"STRING\" size=\"256\"/><Column id=\"C55\" type=\"STRING\" size=\"256\"/><Column id=\"C56\" type=\"STRING\" size=\"256\"/><Column id=\"C57\" type=\"STRING\" size=\"256\"/><Column id=\"C58\" type=\"STRING\" size=\"256\"/><Column id=\"C59\" type=\"STRING\" size=\"256\"/><Column id=\"C60\" type=\"STRING\" size=\"256\"/><Column id=\"C61\" type=\"STRING\" size=\"256\"/><Column id=\"C62\" type=\"STRING\" size=\"256\"/><Column id=\"C63\" type=\"STRING\" size=\"256\"/><Column id=\"C64\" type=\"STRING\" size=\"256\"/><Column id=\"C65\" type=\"STRING\" size=\"256\"/><Column id=\"C66\" type=\"STRING\" size=\"256\"/><Column id=\"C67\" type=\"STRING\" size=\"256\"/><Column id=\"C68\" type=\"STRING\" size=\"256\"/><Column id=\"C69\" type=\"STRING\" size=\"256\"/><Column id=\"C70\" type=\"STRING\" size=\"256\"/><Column id=\"C71\" type=\"STRING\" size=\"256\"/><Column id=\"C72\" type=\"STRING\" size=\"256\"/><Column id=\"C73\" type=\"STRING\" size=\"256\"/><Column id=\"C74\" type=\"STRING\" size=\"256\"/><Column id=\"C75\" type=\"STRING\" size=\"256\"/><Column id=\"C76\" type=\"STRING\" size=\"256\"/><Column id=\"C77\" type=\"STRING\" size=\"256\"/><Column id=\"C78\" type=\"STRING\" size=\"256\"/><Column id=\"C79\" type=\"STRING\" size=\"256\"/><Column id=\"C80\" type=\"STRING\" size=\"256\"/><Column id=\"C81\" type=\"STRING\" size=\"256\"/><Column id=\"C82\" type=\"STRING\" size=\"256\"/><Column id=\"C83\" type=\"STRING\" size=\"256\"/><Column id=\"C84\" type=\"STRING\" size=\"256\"/><Column id=\"C85\" type=\"STRING\" size=\"256\"/><Column id=\"C86\" type=\"STRING\" size=\"256\"/><Column id=\"C87\" type=\"STRING\" size=\"256\"/><Column id=\"C88\" type=\"STRING\" size=\"256\"/><Column id=\"C89\" type=\"STRING\" size=\"256\"/><Column id=\"C90\" type=\"STRING\" size=\"256\"/><Column id=\"C91\" type=\"STRING\" size=\"256\"/><Column id=\"C92\" type=\"STRING\" size=\"256\"/><Column id=\"C93\" type=\"STRING\" size=\"256\"/><Column id=\"C94\" type=\"STRING\" size=\"256\"/><Column id=\"C95\" type=\"STRING\" size=\"256\"/><Column id=\"C96\" type=\"STRING\" size=\"256\"/><Column id=\"C97\" type=\"STRING\" size=\"256\"/><Column id=\"C98\" type=\"STRING\" size=\"256\"/><Column id=\"C99\" type=\"STRING\" size=\"256\"/><Column id=\"C100\" type=\"STRING\" size=\"256\"/><Column id=\"C101\" type=\"STRING\" size=\"256\"/><Column id=\"C102\" type=\"STRING\" size=\"256\"/><Column id=\"C103\" type=\"STRING\" size=\"256\"/><Column id=\"C104\" type=\"STRING\" size=\"256\"/><Column id=\"C105\" type=\"STRING\" size=\"256\"/><Column id=\"C106\" type=\"STRING\" size=\"256\"/><Column id=\"C107\" type=\"STRING\" size=\"256\"/><Column id=\"C108\" type=\"STRING\" size=\"256\"/><Column id=\"C109\" type=\"STRING\" size=\"256\"/><Column id=\"C110\" type=\"STRING\" size=\"256\"/><Column id=\"C111\" type=\"STRING\" size=\"256\"/><Column id=\"C112\" type=\"STRING\" size=\"256\"/><Column id=\"C113\" type=\"STRING\" size=\"256\"/><Column id=\"C114\" type=\"STRING\" size=\"256\"/><Column id=\"C115\" type=\"STRING\" size=\"256\"/><Column id=\"C116\" type=\"STRING\" size=\"256\"/><Column id=\"C117\" type=\"STRING\" size=\"256\"/><Column id=\"C118\" type=\"STRING\" size=\"256\"/><Column id=\"C119\" type=\"STRING\" size=\"256\"/><Column id=\"C120\" type=\"STRING\" size=\"256\"/><Column id=\"C121\" type=\"STRING\" size=\"256\"/><Column id=\"C122\" type=\"STRING\" size=\"256\"/><Column id=\"C123\" type=\"STRING\" size=\"256\"/><Column id=\"C124\" type=\"STRING\" size=\"256\"/><Column id=\"C125\" type=\"STRING\" size=\"256\"/><Column id=\"C126\" type=\"STRING\" size=\"256\"/><Column id=\"C127\" type=\"STRING\" size=\"256\"/><Column id=\"C128\" type=\"STRING\" size=\"256\"/><Column id=\"C129\" type=\"STRING\" size=\"256\"/><Column id=\"C130\" type=\"STRING\" size=\"256\"/><Column id=\"C131\" type=\"STRING\" size=\"256\"/><Column id=\"C132\" type=\"STRING\" size=\"256\"/><Column id=\"C133\" type=\"STRING\" size=\"256\"/><Column id=\"C134\" type=\"STRING\" size=\"256\"/><Column id=\"C135\" type=\"STRING\" size=\"256\"/><Column id=\"C136\" type=\"STRING\" size=\"256\"/><Column id=\"C137\" type=\"STRING\" size=\"256\"/><Column id=\"C138\" type=\"STRING\" size=\"256\"/><Column id=\"C139\" type=\"STRING\" size=\"256\"/><Column id=\"C140\" type=\"STRING\" size=\"256\"/><Column id=\"C141\" type=\"STRING\" size=\"256\"/><Column id=\"C142\" type=\"STRING\" size=\"256\"/><Column id=\"C143\" type=\"STRING\" size=\"256\"/><Column id=\"C144\" type=\"STRING\" size=\"256\"/><Column id=\"C145\" type=\"STRING\" size=\"256\"/><Column id=\"C146\" type=\"STRING\" size=\"256\"/><Column id=\"C147\" type=\"STRING\" size=\"256\"/><Column id=\"C148\" type=\"STRING\" size=\"256\"/><Column id=\"C149\" type=\"STRING\" size=\"256\"/><Column id=\"C150\" type=\"STRING\" size=\"256\"/><Column id=\"C151\" type=\"STRING\" size=\"256\"/><Column id=\"C152\" type=\"STRING\" size=\"256\"/><Column id=\"C153\" type=\"STRING\" size=\"256\"/><Column id=\"C154\" type=\"STRING\" size=\"256\"/><Column id=\"C155\" type=\"STRING\" size=\"256\"/><Column id=\"C156\" type=\"STRING\" size=\"256\"/><Column id=\"C157\" type=\"STRING\" size=\"256\"/><Column id=\"C158\" type=\"STRING\" size=\"256\"/><Column id=\"C159\" type=\"STRING\" size=\"256\"/><Column id=\"C160\" type=\"STRING\" size=\"256\"/><Column id=\"C161\" type=\"STRING\" size=\"256\"/><Column id=\"C162\" type=\"STRING\" size=\"256\"/><Column id=\"C163\" type=\"STRING\" size=\"256\"/><Column id=\"C164\" type=\"STRING\" size=\"256\"/><Column id=\"C165\" type=\"STRING\" size=\"256\"/><Column id=\"C166\" type=\"STRING\" size=\"256\"/><Column id=\"C167\" type=\"STRING\" size=\"256\"/><Column id=\"C168\" type=\"STRING\" size=\"256\"/><Column id=\"C169\" type=\"STRING\" size=\"256\"/><Column id=\"C170\" type=\"STRING\" size=\"256\"/><Column id=\"C171\" type=\"STRING\" size=\"256\"/><Column id=\"C172\" type=\"STRING\" size=\"256\"/><Column id=\"C173\" type=\"STRING\" size=\"256\"/><Column id=\"C174\" type=\"STRING\" size=\"256\"/><Column id=\"C175\" type=\"STRING\" size=\"256\"/><Column id=\"C176\" type=\"STRING\" size=\"256\"/><Column id=\"C177\" type=\"STRING\" size=\"256\"/><Column id=\"C178\" type=\"STRING\" size=\"256\"/><Column id=\"C179\" type=\"STRING\" size=\"256\"/><Column id=\"C180\" type=\"STRING\" size=\"256\"/><Column id=\"C181\" type=\"STRING\" size=\"256\"/><Column id=\"C182\" type=\"STRING\" size=\"256\"/><Column id=\"C183\" type=\"STRING\" size=\"256\"/><Column id=\"C184\" type=\"STRING\" size=\"256\"/><Column id=\"C185\" type=\"STRING\" size=\"256\"/><Column id=\"C186\" type=\"STRING\" size=\"256\"/><Column id=\"C187\" type=\"STRING\" size=\"256\"/><Column id=\"C188\" type=\"STRING\" size=\"256\"/><Column id=\"C189\" type=\"STRING\" size=\"256\"/><Column id=\"C190\" type=\"STRING\" size=\"256\"/><Column id=\"C191\" type=\"STRING\" size=\"256\"/><Column id=\"C192\" type=\"STRING\" size=\"256\"/><Column id=\"C193\" type=\"STRING\" size=\"256\"/><Column id=\"C194\" type=\"STRING\" size=\"256\"/><Column id=\"C195\" type=\"STRING\" size=\"256\"/><Column id=\"C196\" type=\"STRING\" size=\"256\"/><Column id=\"C197\" type=\"STRING\" size=\"256\"/><Column id=\"C198\" type=\"STRING\" size=\"256\"/><Column id=\"C199\" type=\"STRING\" size=\"256\"/><Column id=\"C200\" type=\"STRING\" size=\"256\"/><Column id=\"C201\" type=\"STRING\" size=\"256\"/><Column id=\"C202\" type=\"STRING\" size=\"256\"/><Column id=\"C203\" type=\"STRING\" size=\"256\"/><Column id=\"C204\" type=\"STRING\" size=\"256\"/><Column id=\"C205\" type=\"STRING\" size=\"256\"/><Column id=\"C206\" type=\"STRING\" size=\"256\"/><Column id=\"C207\" type=\"STRING\" size=\"256\"/><Column id=\"C208\" type=\"STRING\" size=\"256\"/><Column id=\"C209\" type=\"STRING\" size=\"256\"/><Column id=\"C210\" type=\"STRING\" size=\"256\"/><Column id=\"C211\" type=\"STRING\" size=\"256\"/><Column id=\"C212\" type=\"STRING\" size=\"256\"/><Column id=\"C213\" type=\"STRING\" size=\"256\"/><Column id=\"C214\" type=\"STRING\" size=\"256\"/><Column id=\"C215\" type=\"STRING\" size=\"256\"/><Column id=\"C216\" type=\"STRING\" size=\"256\"/><Column id=\"C217\" type=\"STRING\" size=\"256\"/><Column id=\"C218\" type=\"STRING\" size=\"256\"/><Column id=\"C219\" type=\"STRING\" size=\"256\"/><Column id=\"C220\" type=\"STRING\" size=\"256\"/><Column id=\"C221\" type=\"STRING\" size=\"256\"/><Column id=\"C222\" type=\"STRING\" size=\"256\"/><Column id=\"C223\" type=\"STRING\" size=\"256\"/><Column id=\"C224\" type=\"STRING\" size=\"256\"/><Column id=\"C225\" type=\"STRING\" size=\"256\"/><Column id=\"C226\" type=\"STRING\" size=\"256\"/><Column id=\"C227\" type=\"STRING\" size=\"256\"/><Column id=\"C228\" type=\"STRING\" size=\"256\"/><Column id=\"C229\" type=\"STRING\" size=\"256\"/><Column id=\"C230\" type=\"STRING\" size=\"256\"/><Column id=\"C231\" type=\"STRING\" size=\"256\"/><Column id=\"C232\" type=\"STRING\" size=\"256\"/><Column id=\"C233\" type=\"STRING\" size=\"256\"/><Column id=\"C234\" type=\"STRING\" size=\"256\"/><Column id=\"C235\" type=\"STRING\" size=\"256\"/><Column id=\"C236\" type=\"STRING\" size=\"256\"/><Column id=\"C237\" type=\"STRING\" size=\"256\"/><Column id=\"C238\" type=\"STRING\" size=\"256\"/><Column id=\"C239\" type=\"STRING\" size=\"256\"/><Column id=\"C240\" type=\"STRING\" size=\"256\"/><Column id=\"C241\" type=\"STRING\" size=\"256\"/><Column id=\"C242\" type=\"STRING\" size=\"256\"/><Column id=\"C243\" type=\"STRING\" size=\"256\"/><Column id=\"C244\" type=\"STRING\" size=\"256\"/><Column id=\"C245\" type=\"STRING\" size=\"256\"/><Column id=\"C246\" type=\"STRING\" size=\"256\"/><Column id=\"C247\" type=\"STRING\" size=\"256\"/><Column id=\"C248\" type=\"STRING\" size=\"256\"/><Column id=\"C249\" type=\"STRING\" size=\"256\"/><Column id=\"C250\" type=\"STRING\" size=\"256\"/><Column id=\"C251\" type=\"STRING\" size=\"256\"/><Column id=\"C252\" type=\"STRING\" size=\"256\"/><Column id=\"C253\" type=\"STRING\" size=\"256\"/><Column id=\"C254\" type=\"STRING\" size=\"256\"/><Column id=\"C255\" type=\"STRING\" size=\"256\"/><Column id=\"C256\" type=\"STRING\" size=\"256\"/><Column id=\"C257\" type=\"STRING\" size=\"256\"/><Column id=\"C258\" type=\"STRING\" size=\"256\"/><Column id=\"C259\" type=\"STRING\" size=\"256\"/><Column id=\"C260\" type=\"STRING\" size=\"256\"/><Column id=\"C261\" type=\"STRING\" size=\"256\"/><Column id=\"C262\" type=\"STRING\" size=\"256\"/><Column id=\"C263\" type=\"STRING\" size=\"256\"/><Column id=\"C264\" type=\"STRING\" size=\"256\"/><Column id=\"C265\" type=\"STRING\" size=\"256\"/><Column id=\"C266\" type=\"STRING\" size=\"256\"/><Column id=\"C267\" type=\"STRING\" size=\"256\"/><Column id=\"C268\" type=\"STRING\" size=\"256\"/><Column id=\"C269\" type=\"STRING\" size=\"256\"/><Column id=\"C270\" type=\"STRING\" size=\"256\"/><Column id=\"C271\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SAVE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10","336","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("지원서 업로드");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","2","114","334","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","190","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","100","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("업로드");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staNO_NOTICE","10","45","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("채용공고");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","86","45","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfNO_NOTICE","92","50","240","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_RECRUIT_NOTICE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_RESULT","10","74","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("결과구분");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_RESULT2","86","74","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDS_RESULT","92","79","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsDS_RESULT");
            obj.set_visible("false");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExcel","15","170","851","175",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsListExcel");
            obj.set_autosizingtype("col");
            obj.set_scrollbartype("auto");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"RECRUIT_ID\"/><Cell col=\"1\" text=\"C1\"/><Cell col=\"2\" text=\"C2\"/><Cell col=\"3\" text=\"C3\"/><Cell col=\"4\" text=\"C4\"/><Cell col=\"5\" text=\"C5\"/><Cell col=\"6\" text=\"C6\"/><Cell col=\"7\" text=\"C7\"/><Cell col=\"8\" text=\"C8\"/><Cell col=\"9\" text=\"C9\"/><Cell col=\"10\" text=\"C10\"/><Cell col=\"11\" text=\"C11\"/><Cell col=\"12\" text=\"C12\"/><Cell col=\"13\" text=\"C13\"/><Cell col=\"14\" text=\"C14\"/><Cell col=\"15\" text=\"C15\"/><Cell col=\"16\" text=\"C16\"/><Cell col=\"17\" text=\"C17\"/><Cell col=\"18\" text=\"C18\"/><Cell col=\"19\" text=\"C19\"/><Cell col=\"20\" text=\"C20\"/><Cell col=\"21\" text=\"C21\"/><Cell col=\"22\" text=\"C22\"/><Cell col=\"23\" text=\"C23\"/><Cell col=\"24\" text=\"C24\"/><Cell col=\"25\" text=\"C25\"/><Cell col=\"26\" text=\"C26\"/><Cell col=\"27\" text=\"C27\"/><Cell col=\"28\" text=\"C28\"/><Cell col=\"29\" text=\"C29\"/><Cell col=\"30\" text=\"C30\"/><Cell col=\"31\" text=\"C31\"/><Cell col=\"32\" text=\"C32\"/><Cell col=\"33\" text=\"C33\"/><Cell col=\"34\" text=\"C34\"/><Cell col=\"35\" text=\"C35\"/><Cell col=\"36\" text=\"C36\"/><Cell col=\"37\" text=\"C37\"/><Cell col=\"38\" text=\"C38\"/><Cell col=\"39\" text=\"C39\"/><Cell col=\"40\" text=\"C40\"/><Cell col=\"41\" text=\"C41\"/><Cell col=\"42\" text=\"C42\"/><Cell col=\"43\" text=\"C43\"/><Cell col=\"44\" text=\"C44\"/><Cell col=\"45\" text=\"C45\"/><Cell col=\"46\" text=\"C46\"/><Cell col=\"47\" text=\"C47\"/><Cell col=\"48\" text=\"C48\"/><Cell col=\"49\" text=\"C49\"/><Cell col=\"50\" text=\"C50\"/><Cell col=\"51\" text=\"C51\"/><Cell col=\"52\" text=\"C52\"/><Cell col=\"53\" text=\"C53\"/><Cell col=\"54\" text=\"C54\"/><Cell col=\"55\" text=\"C55\"/><Cell col=\"56\" text=\"C56\"/><Cell col=\"57\" text=\"C57\"/><Cell col=\"58\" text=\"C58\"/><Cell col=\"59\" text=\"C59\"/><Cell col=\"60\" text=\"C60\"/><Cell col=\"61\" text=\"C61\"/><Cell col=\"62\" text=\"C62\"/><Cell col=\"63\" text=\"C63\"/><Cell col=\"64\" text=\"C64\"/><Cell col=\"65\" text=\"C65\"/><Cell col=\"66\" text=\"C66\"/><Cell col=\"67\" text=\"C67\"/><Cell col=\"68\" text=\"C68\"/><Cell col=\"69\" text=\"C69\"/><Cell col=\"70\" text=\"C70\"/><Cell col=\"71\" text=\"C71\"/><Cell col=\"72\" text=\"C72\"/><Cell col=\"73\" text=\"C73\"/><Cell col=\"74\" text=\"C74\"/><Cell col=\"75\" text=\"C75\"/><Cell col=\"76\" text=\"C76\"/><Cell col=\"77\" text=\"C77\"/><Cell col=\"78\" text=\"C78\"/><Cell col=\"79\" text=\"C79\"/><Cell col=\"80\" text=\"C80\"/><Cell col=\"81\" text=\"C81\"/><Cell col=\"82\" text=\"C82\"/><Cell col=\"83\" text=\"C83\"/><Cell col=\"84\" text=\"C84\"/><Cell col=\"85\" text=\"C85\"/><Cell col=\"86\" text=\"C86\"/><Cell col=\"87\" text=\"C87\"/><Cell col=\"88\" text=\"C88\"/><Cell col=\"89\" text=\"C89\"/><Cell col=\"90\" text=\"C90\"/><Cell col=\"91\" text=\"C91\"/><Cell col=\"92\" text=\"C92\"/><Cell col=\"93\" text=\"C93\"/><Cell col=\"94\" text=\"C94\"/><Cell col=\"95\" text=\"C95\"/><Cell col=\"96\" text=\"C96\"/><Cell col=\"97\" text=\"C97\"/><Cell col=\"98\" text=\"C98\"/><Cell col=\"99\" text=\"C99\"/><Cell col=\"100\" text=\"C100\"/><Cell col=\"101\" text=\"C101\"/><Cell col=\"102\" text=\"C102\"/><Cell col=\"103\" text=\"C103\"/><Cell col=\"104\" text=\"C104\"/><Cell col=\"105\" text=\"C105\"/><Cell col=\"106\" text=\"C106\"/><Cell col=\"107\" text=\"C107\"/><Cell col=\"108\" text=\"C108\"/><Cell col=\"109\" text=\"C109\"/><Cell col=\"110\" text=\"C110\"/><Cell col=\"111\" text=\"C111\"/><Cell col=\"112\" text=\"C112\"/><Cell col=\"113\" text=\"C113\"/><Cell col=\"114\" text=\"C114\"/><Cell col=\"115\" text=\"C115\"/><Cell col=\"116\" text=\"C116\"/><Cell col=\"117\" text=\"C117\"/><Cell col=\"118\" text=\"C118\"/><Cell col=\"119\" text=\"C119\"/><Cell col=\"120\" text=\"C120\"/><Cell col=\"121\" text=\"C121\"/><Cell col=\"122\" text=\"C122\"/><Cell col=\"123\" text=\"C123\"/><Cell col=\"124\" text=\"C124\"/><Cell col=\"125\" text=\"C125\"/><Cell col=\"126\" text=\"C126\"/><Cell col=\"127\" text=\"C127\"/><Cell col=\"128\" text=\"C128\"/><Cell col=\"129\" text=\"C129\"/><Cell col=\"130\" text=\"C130\"/><Cell col=\"131\" text=\"C131\"/><Cell col=\"132\" text=\"C132\"/><Cell col=\"133\" text=\"C133\"/><Cell col=\"134\" text=\"C134\"/><Cell col=\"135\" text=\"C135\"/><Cell col=\"136\" text=\"C136\"/><Cell col=\"137\" text=\"C137\"/><Cell col=\"138\" text=\"C138\"/><Cell col=\"139\" text=\"C139\"/><Cell col=\"140\" text=\"C140\"/><Cell col=\"141\" text=\"C141\"/><Cell col=\"142\" text=\"C142\"/><Cell col=\"143\" text=\"C143\"/><Cell col=\"144\" text=\"C144\"/><Cell col=\"145\" text=\"C145\"/><Cell col=\"146\" text=\"C146\"/><Cell col=\"147\" text=\"C147\"/><Cell col=\"148\" text=\"C148\"/><Cell col=\"149\" text=\"C149\"/><Cell col=\"150\" text=\"C150\"/><Cell col=\"151\" text=\"C151\"/><Cell col=\"152\" text=\"C152\"/><Cell col=\"153\" text=\"C153\"/><Cell col=\"154\" text=\"C154\"/><Cell col=\"155\" text=\"C155\"/><Cell col=\"156\" text=\"C156\"/><Cell col=\"157\" text=\"C157\"/><Cell col=\"158\" text=\"C158\"/><Cell col=\"159\" text=\"C159\"/><Cell col=\"160\" text=\"C160\"/><Cell col=\"161\" text=\"C161\"/><Cell col=\"162\" text=\"C162\"/><Cell col=\"163\" text=\"C163\"/><Cell col=\"164\" text=\"C164\"/><Cell col=\"165\" text=\"C165\"/><Cell col=\"166\" text=\"C166\"/><Cell col=\"167\" text=\"C167\"/><Cell col=\"168\" text=\"C168\"/><Cell col=\"169\" text=\"C169\"/><Cell col=\"170\" text=\"C170\"/><Cell col=\"171\" text=\"C171\"/><Cell col=\"172\" text=\"C172\"/><Cell col=\"173\" text=\"C173\"/><Cell col=\"174\" text=\"C174\"/><Cell col=\"175\" text=\"C175\"/><Cell col=\"176\" text=\"C176\"/><Cell col=\"177\" text=\"C177\"/><Cell col=\"178\" text=\"C178\"/><Cell col=\"179\" text=\"C179\"/><Cell col=\"180\" text=\"C180\"/><Cell col=\"181\" text=\"C181\"/><Cell col=\"182\" text=\"C182\"/><Cell col=\"183\" text=\"C183\"/><Cell col=\"184\" text=\"C184\"/><Cell col=\"185\" text=\"C185\"/><Cell col=\"186\" text=\"C186\"/><Cell col=\"187\" text=\"C187\"/><Cell col=\"188\" text=\"C188\"/><Cell col=\"189\" text=\"C189\"/><Cell col=\"190\" text=\"C190\"/><Cell col=\"191\" text=\"C191\"/><Cell col=\"192\" text=\"C192\"/><Cell col=\"193\" text=\"C193\"/><Cell col=\"194\" text=\"C194\"/><Cell col=\"195\" text=\"C195\"/><Cell col=\"196\" text=\"C196\"/><Cell col=\"197\" text=\"C197\"/><Cell col=\"198\" text=\"C198\"/><Cell col=\"199\" text=\"C199\"/><Cell col=\"200\" text=\"C200\"/><Cell col=\"201\" text=\"C201\"/><Cell col=\"202\" text=\"C202\"/><Cell col=\"203\" text=\"C203\"/><Cell col=\"204\" text=\"C204\"/><Cell col=\"205\" text=\"C205\"/><Cell col=\"206\" text=\"C206\"/><Cell col=\"207\" text=\"C207\"/><Cell col=\"208\" text=\"C208\"/><Cell col=\"209\" text=\"C209\"/><Cell col=\"210\" text=\"C210\"/><Cell col=\"211\" text=\"C211\"/><Cell col=\"212\" text=\"C212\"/><Cell col=\"213\" text=\"C213\"/><Cell col=\"214\" text=\"C214\"/><Cell col=\"215\" text=\"C215\"/><Cell col=\"216\" text=\"C216\"/><Cell col=\"217\" text=\"C217\"/><Cell col=\"218\" text=\"C218\"/><Cell col=\"219\" text=\"C219\"/><Cell col=\"220\" text=\"C220\"/><Cell col=\"221\" text=\"C221\"/><Cell col=\"222\" text=\"C222\"/><Cell col=\"223\" text=\"C223\"/><Cell col=\"224\" text=\"C224\"/><Cell col=\"225\" text=\"C225\"/><Cell col=\"226\" text=\"C226\"/><Cell col=\"227\" text=\"C227\"/><Cell col=\"228\" text=\"C228\"/><Cell col=\"229\" text=\"C229\"/><Cell col=\"230\" text=\"C230\"/><Cell col=\"231\" text=\"C231\"/><Cell col=\"232\" text=\"C232\"/><Cell col=\"233\" text=\"C233\"/><Cell col=\"234\" text=\"C234\"/><Cell col=\"235\" text=\"C235\"/><Cell col=\"236\" text=\"C236\"/><Cell col=\"237\" text=\"C237\"/><Cell col=\"238\" text=\"C238\"/><Cell col=\"239\" text=\"C239\"/><Cell col=\"240\" text=\"C240\"/><Cell col=\"241\" text=\"C241\"/><Cell col=\"242\" text=\"C242\"/><Cell col=\"243\" text=\"C243\"/><Cell col=\"244\" text=\"C244\"/><Cell col=\"245\" text=\"C245\"/><Cell col=\"246\" text=\"C246\"/><Cell col=\"247\" text=\"C247\"/><Cell col=\"248\" text=\"C248\"/><Cell col=\"249\" text=\"C249\"/><Cell col=\"250\" text=\"C250\"/><Cell col=\"251\" text=\"C251\"/><Cell col=\"252\" text=\"C252\"/><Cell col=\"253\" text=\"C253\"/><Cell col=\"254\" text=\"C254\"/><Cell col=\"255\" text=\"C255\"/><Cell col=\"256\" text=\"C256\"/><Cell col=\"257\" text=\"C257\"/><Cell col=\"258\" text=\"C258\"/><Cell col=\"259\" text=\"C259\"/><Cell col=\"260\" text=\"C260\"/><Cell col=\"261\" text=\"C261\"/><Cell col=\"262\" text=\"C262\"/><Cell col=\"263\" text=\"C263\"/><Cell col=\"264\" text=\"C264\"/><Cell col=\"265\" text=\"C265\"/><Cell col=\"266\" text=\"C266\"/><Cell col=\"267\" text=\"C267\"/><Cell col=\"268\" text=\"C268\"/><Cell col=\"269\" text=\"C269\"/><Cell col=\"270\" text=\"C270\"/><Cell col=\"271\" text=\"C271\"/><Cell col=\"272\" text=\"TY_SAVE\"/></Band><Band id=\"body\"><Cell text=\"bind:RECRUIT_ID\"/><Cell col=\"1\" text=\"bind:C1\"/><Cell col=\"2\" text=\"bind:C2\"/><Cell col=\"3\" text=\"bind:C3\"/><Cell col=\"4\" text=\"bind:C4\"/><Cell col=\"5\" text=\"bind:C5\"/><Cell col=\"6\" text=\"bind:C6\"/><Cell col=\"7\" text=\"bind:C7\"/><Cell col=\"8\" text=\"bind:C8\"/><Cell col=\"9\" text=\"bind:C9\"/><Cell col=\"10\" text=\"bind:C10\"/><Cell col=\"11\" text=\"bind:C11\"/><Cell col=\"12\" text=\"bind:C12\"/><Cell col=\"13\" text=\"bind:C13\"/><Cell col=\"14\" text=\"bind:C14\"/><Cell col=\"15\" text=\"bind:C15\"/><Cell col=\"16\" text=\"bind:C16\"/><Cell col=\"17\" text=\"bind:C17\"/><Cell col=\"18\" text=\"bind:C18\"/><Cell col=\"19\" text=\"bind:C19\"/><Cell col=\"20\" text=\"bind:C20\"/><Cell col=\"21\" text=\"bind:C21\"/><Cell col=\"22\" text=\"bind:C22\"/><Cell col=\"23\" text=\"bind:C23\"/><Cell col=\"24\" text=\"bind:C24\"/><Cell col=\"25\" text=\"bind:C25\"/><Cell col=\"26\" text=\"bind:C26\"/><Cell col=\"27\" text=\"bind:C27\"/><Cell col=\"28\" text=\"bind:C28\"/><Cell col=\"29\" text=\"bind:C29\"/><Cell col=\"30\" text=\"bind:C30\"/><Cell col=\"31\" text=\"bind:C31\"/><Cell col=\"32\" text=\"bind:C32\"/><Cell col=\"33\" text=\"bind:C33\"/><Cell col=\"34\" text=\"bind:C34\"/><Cell col=\"35\" text=\"bind:C35\"/><Cell col=\"36\" text=\"bind:C36\"/><Cell col=\"37\" text=\"bind:C37\"/><Cell col=\"38\" text=\"bind:C38\"/><Cell col=\"39\" text=\"bind:C39\"/><Cell col=\"40\" text=\"bind:C40\"/><Cell col=\"41\" text=\"bind:C41\"/><Cell col=\"42\" text=\"bind:C42\"/><Cell col=\"43\" text=\"bind:C43\"/><Cell col=\"44\" text=\"bind:C44\"/><Cell col=\"45\" text=\"bind:C45\"/><Cell col=\"46\" text=\"bind:C46\"/><Cell col=\"47\" text=\"bind:C47\"/><Cell col=\"48\" text=\"bind:C48\"/><Cell col=\"49\" text=\"bind:C49\"/><Cell col=\"50\" text=\"bind:C50\"/><Cell col=\"51\" text=\"bind:C51\"/><Cell col=\"52\" text=\"bind:C52\"/><Cell col=\"53\" text=\"bind:C53\"/><Cell col=\"54\" text=\"bind:C54\"/><Cell col=\"55\" text=\"bind:C55\"/><Cell col=\"56\" text=\"bind:C56\"/><Cell col=\"57\" text=\"bind:C57\"/><Cell col=\"58\" text=\"bind:C58\"/><Cell col=\"59\" text=\"bind:C59\"/><Cell col=\"60\" text=\"bind:C60\"/><Cell col=\"61\" text=\"bind:C61\"/><Cell col=\"62\" text=\"bind:C62\"/><Cell col=\"63\" text=\"bind:C63\"/><Cell col=\"64\" text=\"bind:C64\"/><Cell col=\"65\" text=\"bind:C65\"/><Cell col=\"66\" text=\"bind:C66\"/><Cell col=\"67\" text=\"bind:C67\"/><Cell col=\"68\" text=\"bind:C68\"/><Cell col=\"69\" text=\"bind:C69\"/><Cell col=\"70\" text=\"bind:C70\"/><Cell col=\"71\" text=\"bind:C71\"/><Cell col=\"72\" text=\"bind:C72\"/><Cell col=\"73\" text=\"bind:C73\"/><Cell col=\"74\" text=\"bind:C74\"/><Cell col=\"75\" text=\"bind:C75\"/><Cell col=\"76\" text=\"bind:C76\"/><Cell col=\"77\" text=\"bind:C77\"/><Cell col=\"78\" text=\"bind:C78\"/><Cell col=\"79\" text=\"bind:C79\"/><Cell col=\"80\" text=\"bind:C80\"/><Cell col=\"81\" text=\"bind:C81\"/><Cell col=\"82\" text=\"bind:C82\"/><Cell col=\"83\" text=\"bind:C83\"/><Cell col=\"84\" text=\"bind:C84\"/><Cell col=\"85\" text=\"bind:C85\"/><Cell col=\"86\" text=\"bind:C86\"/><Cell col=\"87\" text=\"bind:C87\"/><Cell col=\"88\" text=\"bind:C88\"/><Cell col=\"89\" text=\"bind:C89\"/><Cell col=\"90\" text=\"bind:C90\"/><Cell col=\"91\" text=\"bind:C91\"/><Cell col=\"92\" text=\"bind:C92\"/><Cell col=\"93\" text=\"bind:C93\"/><Cell col=\"94\" text=\"bind:C94\"/><Cell col=\"95\" text=\"bind:C95\"/><Cell col=\"96\" text=\"bind:C96\"/><Cell col=\"97\" text=\"bind:C97\"/><Cell col=\"98\" text=\"bind:C98\"/><Cell col=\"99\" text=\"bind:C99\"/><Cell col=\"100\" text=\"bind:C100\"/><Cell col=\"101\" text=\"bind:C101\"/><Cell col=\"102\" text=\"bind:C102\"/><Cell col=\"103\" text=\"bind:C103\"/><Cell col=\"104\" text=\"bind:C104\"/><Cell col=\"105\" text=\"bind:C105\"/><Cell col=\"106\" text=\"bind:C106\"/><Cell col=\"107\" text=\"bind:C107\"/><Cell col=\"108\" text=\"bind:C108\"/><Cell col=\"109\" text=\"bind:C109\"/><Cell col=\"110\" text=\"bind:C110\"/><Cell col=\"111\" text=\"bind:C111\"/><Cell col=\"112\" text=\"bind:C112\"/><Cell col=\"113\" text=\"bind:C113\"/><Cell col=\"114\" text=\"bind:C114\"/><Cell col=\"115\" text=\"bind:C115\"/><Cell col=\"116\" text=\"bind:C116\"/><Cell col=\"117\" text=\"bind:C117\"/><Cell col=\"118\" text=\"bind:C118\"/><Cell col=\"119\" text=\"bind:C119\"/><Cell col=\"120\" text=\"bind:C120\"/><Cell col=\"121\" text=\"bind:C121\"/><Cell col=\"122\" text=\"bind:C122\"/><Cell col=\"123\" text=\"bind:C123\"/><Cell col=\"124\" text=\"bind:C124\"/><Cell col=\"125\" text=\"bind:C125\"/><Cell col=\"126\" text=\"bind:C126\"/><Cell col=\"127\" text=\"bind:C127\"/><Cell col=\"128\" text=\"bind:C128\"/><Cell col=\"129\" text=\"bind:C129\"/><Cell col=\"130\" text=\"bind:C130\"/><Cell col=\"131\" text=\"bind:C131\"/><Cell col=\"132\" text=\"bind:C132\"/><Cell col=\"133\" text=\"bind:C133\"/><Cell col=\"134\" text=\"bind:C134\"/><Cell col=\"135\" text=\"bind:C135\"/><Cell col=\"136\" text=\"bind:C136\"/><Cell col=\"137\" text=\"bind:C137\"/><Cell col=\"138\" text=\"bind:C138\"/><Cell col=\"139\" text=\"bind:C139\"/><Cell col=\"140\" text=\"bind:C140\"/><Cell col=\"141\" text=\"bind:C141\"/><Cell col=\"142\" text=\"bind:C142\"/><Cell col=\"143\" text=\"bind:C143\"/><Cell col=\"144\" text=\"bind:C144\"/><Cell col=\"145\" text=\"bind:C145\"/><Cell col=\"146\" text=\"bind:C146\"/><Cell col=\"147\" text=\"bind:C147\"/><Cell col=\"148\" text=\"bind:C148\"/><Cell col=\"149\" text=\"bind:C149\"/><Cell col=\"150\" text=\"bind:C150\"/><Cell col=\"151\" text=\"bind:C151\"/><Cell col=\"152\" text=\"bind:C152\"/><Cell col=\"153\" text=\"bind:C153\"/><Cell col=\"154\" text=\"bind:C154\"/><Cell col=\"155\" text=\"bind:C155\"/><Cell col=\"156\" text=\"bind:C156\"/><Cell col=\"157\" text=\"bind:C157\"/><Cell col=\"158\" text=\"bind:C158\"/><Cell col=\"159\" text=\"bind:C159\"/><Cell col=\"160\" text=\"bind:C160\"/><Cell col=\"161\" text=\"bind:C161\"/><Cell col=\"162\" text=\"bind:C162\"/><Cell col=\"163\" text=\"bind:C163\"/><Cell col=\"164\" text=\"bind:C164\"/><Cell col=\"165\" text=\"bind:C165\"/><Cell col=\"166\" text=\"bind:C166\"/><Cell col=\"167\" text=\"bind:C167\"/><Cell col=\"168\" text=\"bind:C168\"/><Cell col=\"169\" text=\"bind:C169\"/><Cell col=\"170\" text=\"bind:C170\"/><Cell col=\"171\" text=\"bind:C171\"/><Cell col=\"172\" text=\"bind:C172\"/><Cell col=\"173\" text=\"bind:C173\"/><Cell col=\"174\" text=\"bind:C174\"/><Cell col=\"175\" text=\"bind:C175\"/><Cell col=\"176\" text=\"bind:C176\"/><Cell col=\"177\" text=\"bind:C177\"/><Cell col=\"178\" text=\"bind:C178\"/><Cell col=\"179\" text=\"bind:C179\"/><Cell col=\"180\" text=\"bind:C180\"/><Cell col=\"181\" text=\"bind:C181\"/><Cell col=\"182\" text=\"bind:C182\"/><Cell col=\"183\" text=\"bind:C183\"/><Cell col=\"184\" text=\"bind:C184\"/><Cell col=\"185\" text=\"bind:C185\"/><Cell col=\"186\" text=\"bind:C186\"/><Cell col=\"187\" text=\"bind:C187\"/><Cell col=\"188\" text=\"bind:C188\"/><Cell col=\"189\" text=\"bind:C189\"/><Cell col=\"190\" text=\"bind:C190\"/><Cell col=\"191\" text=\"bind:C191\"/><Cell col=\"192\" text=\"bind:C192\"/><Cell col=\"193\" text=\"bind:C193\"/><Cell col=\"194\" text=\"bind:C194\"/><Cell col=\"195\" text=\"bind:C195\"/><Cell col=\"196\" text=\"bind:C196\"/><Cell col=\"197\" text=\"bind:C197\"/><Cell col=\"198\" text=\"bind:C198\"/><Cell col=\"199\" text=\"bind:C199\"/><Cell col=\"200\" text=\"bind:C200\"/><Cell col=\"201\" text=\"bind:C201\"/><Cell col=\"202\" text=\"bind:C202\"/><Cell col=\"203\" text=\"bind:C203\"/><Cell col=\"204\" text=\"bind:C204\"/><Cell col=\"205\" text=\"bind:C205\"/><Cell col=\"206\" text=\"bind:C206\"/><Cell col=\"207\" text=\"bind:C207\"/><Cell col=\"208\" text=\"bind:C208\"/><Cell col=\"209\" text=\"bind:C209\"/><Cell col=\"210\" text=\"bind:C210\"/><Cell col=\"211\" text=\"bind:C211\"/><Cell col=\"212\" text=\"bind:C212\"/><Cell col=\"213\" text=\"bind:C213\"/><Cell col=\"214\" text=\"bind:C214\"/><Cell col=\"215\" text=\"bind:C215\"/><Cell col=\"216\" text=\"bind:C216\"/><Cell col=\"217\" text=\"bind:C217\"/><Cell col=\"218\" text=\"bind:C218\"/><Cell col=\"219\" text=\"bind:C219\"/><Cell col=\"220\" text=\"bind:C220\"/><Cell col=\"221\" text=\"bind:C221\"/><Cell col=\"222\" text=\"bind:C222\"/><Cell col=\"223\" text=\"bind:C223\"/><Cell col=\"224\" text=\"bind:C224\"/><Cell col=\"225\" text=\"bind:C225\"/><Cell col=\"226\" text=\"bind:C226\"/><Cell col=\"227\" text=\"bind:C227\"/><Cell col=\"228\" text=\"bind:C228\"/><Cell col=\"229\" text=\"bind:C229\"/><Cell col=\"230\" text=\"bind:C230\"/><Cell col=\"231\" text=\"bind:C231\"/><Cell col=\"232\" text=\"bind:C232\"/><Cell col=\"233\" text=\"bind:C233\"/><Cell col=\"234\" text=\"bind:C234\"/><Cell col=\"235\" text=\"bind:C235\"/><Cell col=\"236\" text=\"bind:C236\"/><Cell col=\"237\" text=\"bind:C237\"/><Cell col=\"238\" text=\"bind:C238\"/><Cell col=\"239\" text=\"bind:C239\"/><Cell col=\"240\" text=\"bind:C240\"/><Cell col=\"241\" text=\"bind:C241\"/><Cell col=\"242\" text=\"bind:C242\"/><Cell col=\"243\" text=\"bind:C243\"/><Cell col=\"244\" text=\"bind:C244\"/><Cell col=\"245\" text=\"bind:C245\"/><Cell col=\"246\" text=\"bind:C246\"/><Cell col=\"247\" text=\"bind:C247\"/><Cell col=\"248\" text=\"bind:C248\"/><Cell col=\"249\" text=\"bind:C249\"/><Cell col=\"250\" text=\"bind:C250\"/><Cell col=\"251\" text=\"bind:C251\"/><Cell col=\"252\" text=\"bind:C252\"/><Cell col=\"253\" text=\"bind:C253\"/><Cell col=\"254\" text=\"bind:C254\"/><Cell col=\"255\" text=\"bind:C255\"/><Cell col=\"256\" text=\"bind:C256\"/><Cell col=\"257\" text=\"bind:C257\"/><Cell col=\"258\" text=\"bind:C258\"/><Cell col=\"259\" text=\"bind:C259\"/><Cell col=\"260\" text=\"bind:C260\"/><Cell col=\"261\" text=\"bind:C261\"/><Cell col=\"262\" text=\"bind:C262\"/><Cell col=\"263\" text=\"bind:C263\"/><Cell col=\"264\" text=\"bind:C264\"/><Cell col=\"265\" text=\"bind:C265\"/><Cell col=\"266\" text=\"bind:C266\"/><Cell col=\"267\" text=\"bind:C267\"/><Cell col=\"268\" text=\"bind:C268\"/><Cell col=\"269\" text=\"bind:C269\"/><Cell col=\"270\" text=\"bind:C270\"/><Cell col=\"271\" text=\"bind:C271\"/><Cell col=\"272\" text=\"bind:TY_SAVE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cboDS_RESULT","value","dsSearch","DS_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAR_VOLUNTEER_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        	// this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.grSearch = this.FormInfo.GR_SEARCH;			// 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;			// 그룹코드

        	this.dxGridExcel = this.grdExcel;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_NOTICE.form.CDTextBox.set_value(this.getOwnerFrame().NO_NOTICE);
            this.ccfNO_NOTICE.form.DSTextBox.set_value(this.getOwnerFrame().DS_NOTICE);
        	this.staTITLE.set_text( this.getOwnerFrame().FORM_TITLE);

        	var formType = this.getOwnerFrame().FORM_ID;	// DAR_VOLUNTEER_FINAL
        	if(this.getOwnerFrame().FORM_ID == "DAR_VOLUNTEER_FINAL"){
        		this.cboDS_RESULT.set_visible(true);
        		this.staDS_RESULT.set_visible(true);
        		this.staDS_RESULT2.set_visible(true);
        		this.fnSetCombo();
        		this.cboDS_RESULT.set_value("%");
        	}
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	// 채용공고
        	if (this.gfnIsNull(this.ccfNO_NOTICE.form.CDTextBox.value)) {
        		this.gfnAlert("채용공고 코드를 입력하세요.");
        		this.ccfNO_NOTICE.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.getOwnerFrame().FORM_ID == "DAR_VOLUNTEER_FINAL"){
        		if (this.cboDS_RESULT.value == "%") {
        			this.gfnAlert("결과구분 코드를 선택하세요.");
        			this.cboDS_RESULT.setFocus();
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
        	if (svcID == "select") {
        		//this.gfnGridAfterSelect(this.dxGrid);
        	}
        // 	else if(svcID == "save") {
        // 		if (errorCode == 0) {
        // 			this.FormBtns.Select.click();
        // 		} else {
        // 			this.gfnAlert(errorMsg);
        // 		}
        // 	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfNO_NOTICE": // 법인코드
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        //진행상태 콤보 조회
        this.fnSetCombo = function() {

           this.dsCombo = new Dataset();
           this.dsCombo.addColumn("TY_SEL", "string");
           this.dsCombo.addColumn("CD_PREFIX", "string");
           this.dsCombo.addColumn("CD_UPPREFIX", "string");

           this.dsCombo.addRow();
           this.dsCombo.setColumn(0, "TY_SEL", "P");
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

        this.btnOK_onclick = function(obj,e)
        {
        	if (!this.fnSelectValidate()) return false;

        	var json = {};

        	var DS_RESULT = "";
        	if(this.getOwnerFrame().FORM_ID == "DAR_VOLUNTEER_FINAL") DS_RESULT = this.cboDS_RESULT.value;

        	json.NO_NOTICE = this.ccfNO_NOTICE.form.CDTextBox.value;
        	json.DS_RESULT = DS_RESULT;
        	//this.getParentContext().close(JSON.stringify(json));

        	this.fnExcelImport ();

        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        // 지원서 엑셀 업로드
        this.fnExcelImport = function(){
        // this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	this.dsListExcel.clearData();
        	this.gfnExcelImport("dsListExcel","","A2","fnExcelImportCallback","import",this);	// sheet1
        }

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        	// 	if (dsSheet.rowcount > 1) {
        	// 		trace(dsSheet.getColumn(1, "sheetname"));
        	// 	}

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	for (var i=0; i< this.dsListExcel.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGridExcel, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	trace("1111111111111" + dsOut.saveCSV());

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);
        	//this.dsListExcel.copyData(dsOut);


        /*
        	this.dsListExcel.set_enableevent(false);
        	for (var i=0; i<dsOut.rowcount; i++) {
        		var nrow = this.dsListExcel.addRow();
        		this.dsListExcel.setColumn(nrow, this.ucFlag, "I");

        	// 양식이 일치하는 경우 copyRow
        	this.dsListExcel.copyRow(nrow, dsOut, i);

        	// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
           //this.dsList.setColumn(nrow, "CD_SYSTEM", dsOut.getColumn(i, "Column1"));
           //this.dsList.setColumn(nrow, "CD_TYPE", dsOut.getColumn(i, "Column2"));
        	}

        	this.dsListExcel.set_enableevent(true);

        	this.gfnSetFormStatus(this, "I");
        */
        	trace("END!!!!");
        	var DS_RESULT = "";
        	if(this.getOwnerFrame().FORM_ID == "DAR_VOLUNTEER_FINAL") DS_RESULT = this.cboDS_RESULT.value;

        	var json = {};
        	json.DS_EXCEL =  dsOut.saveCSV();
        	json.NO_NOTICE = this.ccfNO_NOTICE.form.CDTextBox.value;
        	json.DS_RESULT = DS_RESULT;

        	this.getParentContext().close(JSON.stringify(json));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.cboDS_RESULT.addEventHandler("onitemchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DAR_VOLUNTEER_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
