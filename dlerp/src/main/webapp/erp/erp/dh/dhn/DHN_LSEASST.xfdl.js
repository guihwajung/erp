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
            this.set_titletext("리스계약관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_LSEASST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DHNPR_LSEASST_SAVE</Col></Row><Row><Col id=\"TARGET\">select_m</Col><Col id=\"SP\">DHZPR_SRNMSG_SELECT</Col></Row><Row><Col id=\"TARGET\">save_e</Col><Col id=\"SP\">DHNPR_LSEASST_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LSECLS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LSECLS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_LSEASST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LSEASST\" type=\"STRING\" size=\"256\"/><Column id=\"YN_LAST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CNTRC", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_STATS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_LCNSASST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">예</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_END", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">예</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CARTP", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsgList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_MIDTRMN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">예</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("0");
            obj.set_text("법인코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("FitToContents").set("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staACNTUNIT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfACNTUNIT","staACNTUNIT:0.0","10.0","259","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("FitToContents").set("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLSECLS","ccfACNTUNIT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("자산분류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfLSECLS","staLSECLS:0.0","10.0","240","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFLSECLS");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("FitToContents").set("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLSEASST","ccfLSECLS:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("자산번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfLSEASST","staLSEASST:0.0","10.0","259","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFLSEASST");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("FitToContents").set("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_LAST","ccfLSEASST:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("최종차수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_LAST","staYN_LAST:0.0","10.0","28","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter",null,"0","13",null,"650","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_background("url(\'theme://images/slt_WF_SplitterV.png\') no-repeat center center");
            obj.set_cursor("ew-resize");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:6","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:6","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Tab("tab1","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("33");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.divData.form.divDataRight.form.tab1);
            obj.set_text("자산정보");
            this.divData.form.divDataRight.form.tab1.addChild(obj.name, obj);

            obj = new Static("staBgCD_DEPT","124","199",null,"34","1",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgCD_VENDOR","124","232",null,"34","1",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgDT_LSECNTRC","124","265",null,"34","1",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgDT_LSE","124","298",null,"34","1",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgAM_LSE","124","331",null,"34","1",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgAM_DMNY","124","364","209","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgCD_ACCOUNT_ASST","124","430","209","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgTY_CNTRC","124","463",null,"34","1",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgDS_RMKS","124","397",null,"34","1",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgCD_ACCOUNT_PAY","124","496","209","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","0",null,"35","423",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staDS_LSEASST","0","35","135","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("자산번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgNO_LSEASST","134","35",null,"34","0",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCD_LSECLS","0","68","135","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("자산분류코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtNO_LSEASST","staDS_LSEASST:4","40","100","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("borderBG");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtNO_CHNG","edtNO_LSEASST:3","40","40","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("79");
            obj.set_readonly("true");
            obj.set_cssclass("borderBG");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtDS_LSEASST","edtNO_CHNG:3","40",null,"24","4",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("4");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgCD_LSECLS","134","68","200","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Div("cfCD_LSECLS","staCD_LSECLS:4","73","191","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("7");
            obj.getSetter("CodeFindName").set("DHX_CFLSECLS");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("");
            obj.set_text("");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCD_LSECLSDTLS","333","68","130","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("세부분류코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgCD_LSECLSDTLS","462","68",null,"34","0",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Div("cfCD_LSECLSDTLS","staCD_LSECLSDTLS:4","73",null,"24","4",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("10");
            obj.getSetter("CodeFindName").set("DHX_CFLSECLS");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("");
            obj.set_text("");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCD_TRADE_ASST","0","101","135","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgCD_TRADE_ASST","134","101",null,"34","0",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtCD_TRADE_ASST","staCD_TRADE_ASST:4","106","198","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            obj.set_cssclass("borderBG");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","165",null,"35","423",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("취득정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0","199","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Div("cfCD_DEPT","staCD_DEPT:4","204","350","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.getSetter("CDTextWidth").set("73");
            obj.set_taborder("17");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("");
            obj.set_text("");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","232","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("임대거래처");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR","staCD_VENDOR:4","237","350","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.getSetter("CDTextWidth").set("73");
            obj.set_taborder("20");
            obj.getSetter("CodeFindName").set("DHX_CFVENDOR");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("");
            obj.set_text("");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staDT_LSECNTRC","0","265","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calDT_LSECNTRC","staDT_LSECNTRC:4","270","100","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staDT_LSEFR","0","298","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("임대기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calDT_LSEFR","staDT_LSEFR:4","303","100","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staDT_LSE1","calDT_LSEFR:0","303","20","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calDT_LSETO","staDT_LSE1:0","303","100","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staEdNO_MCNT","calDT_LSETO:5","303","31","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("(기간)");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtNO_MCNT","staEdNO_MCNT:15","303","35","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staEdNO_MCNT1","edtNO_MCNT:5","303","35","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("개월 )");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staAM_LSEMLY","0","331","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("임대료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staEdtAM_LSETOT","staAM_LSEMLY:5","336","33","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_text("(총액)");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staEdtAM_LSEYLY","311","336","33","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_text("(연간)");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staEdtAM_LSEMLY","462","336","33","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_text("(월간)");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staAM_DMNY","0","364","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_text("보증금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staRT_INTRT","332","364","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_text("이자율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgRT_INTRT","456","364",null,"34","1",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtRT_INTRT","staRT_INTRT:4","369","80","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("45");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staEdRT_INTRT","edtRT_INTRT:3","369","10","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("46");
            obj.set_text("%");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT_ASST","0","430","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("47");
            obj.set_text("자산계정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Div("cfCD_ACCOUNT_ASST","staCD_ACCOUNT_ASST:4","435","190","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.getSetter("CDTextWidth").set("65");
            obj.set_taborder("49");
            obj.getSetter("CodeFindName").set("DHX_CFLSEASSTACNT");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT_CST","332","430","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("50");
            obj.set_text("비용계정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgCD_ACCOUNT_CST","456","430",null,"34","1",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Div("cfCD_ACCOUNT_CST","staCD_ACCOUNT_CST:4","435",null,"24","4",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("52");
            obj.getSetter("CodeFindName").set("DHX_CFLSECSTACNT");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staTY_CNTRC","0","496","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("56");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboTY_CNTRC","staTY_CNTRC:4","501","93","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("58");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_CNTRC");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Div("cfNO_CNTRC","cboTY_CNTRC:3","501",null,"24","4",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.getSetter("CDTextWidth").set("73");
            obj.set_taborder("59");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFLSECONT");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staDS_RMKS","0","397","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("60");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtDS_RMKS","staDS_RMKS:4","402",null,"24","4",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("62");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","488",null,"35","423",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("63");
            obj.set_text("내역정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staTY_STATS","0","589","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("64");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgTY_STATS","124","589","175","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staYN_LCNSASST","0","523","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("67");
            obj.set_text("사용권자산");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgYN_LCNSASST","124","523","200","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboTY_STATS","128",null,"93","24",null,"21",null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("66");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_STATS");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboYN_LCNSASST","129","528","93","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("69");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsYN_LCNSASST");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staDT_MIDTRMN","0","556","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("70");
            obj.set_text("중도해지일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgDT_MIDTRMN","124","556","200","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calDT_MIDTRMN","129","561","110","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("72");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staYN_END","308","523","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("73");
            obj.set_text("종료여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgYN_END","432","523","210","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboYN_END","437","528","93","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("75");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsYN_END");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_LSETOT","staEdtAM_LSETOT:5","336","120","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_maskchar("_");
            obj.set_format("#,#");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_LSEYLY","staEdtAM_LSEYLY:5","336","100","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_maskchar("_");
            obj.set_format("#,#");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_LSEMLY","staEdtAM_LSEMLY:5","336","100","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("39");
            obj.set_maskchar("_");
            obj.set_format("#,#");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_DMNY","staAM_DMNY:4","369","190","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("42");
            obj.set_maskchar("_");
            obj.set_format("#,#");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT_PAY","0","463","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("53");
            obj.set_text("지급계정코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Div("cfCD_ACCOUNT_PAY","staCD_ACCOUNT_PAY:4","467","190","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.getSetter("CDTextWidth").set("65");
            obj.set_taborder("55");
            obj.getSetter("CodeFindName").set("DHX_CFAUTOSLIPJOURNAL");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staEdNO_MCNTMLY","staEdNO_MCNT1:5","304","55","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("80");
            obj.set_text("(월간계산)");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("edtNO_MCNTMLY","staEdNO_MCNTMLY:5","304","50","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("81");
            obj.set_maskchar("_");
            obj.set_format("#,#.#");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staEdNO_MCNTMLY1","edtNO_MCNTMLY:5","303","25","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("82");
            obj.set_text("개월");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staYN_MIDTRMN","308","556","125","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("76");
            obj.set_text("중도해지여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staBgYN_MIDTRMN","432","556","210","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboYN_MIDTRMN","437","561","93","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("78");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsYN_MIDTRMN");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnAttachFile","240","271","83","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage1.form);
            obj.set_taborder("83");
            obj.set_text("첨부파일관리");
            obj.set_enable("true");
            this.divData.form.divDataRight.form.tab1.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.divData.form.divDataRight.form.tab1);
            obj.set_text("자산부가정보");
            this.divData.form.divDataRight.form.tab1.addChild(obj.name, obj);

            obj = new Static("staBgNO_ZIP","139","35",null,"34","0",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tab1.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staBgNO_ZIP00","139","68",null,"34","0",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.tab1.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staBgNO_CAR","472","101",null,"34","0",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.tab1.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","0",null,"35","423",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("추가관리사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.tab1.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staNO_ZIP","0","35","140","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage2.addChild(obj.name, obj);

            obj = new Div("cfNO_ZIP","staNO_ZIP:4","40",null,"24","4",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage2.form);
            obj.getSetter("CDTextWidth").set("73");
            obj.set_taborder("3");
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("");
            obj.set_text("");
            this.divData.form.divDataRight.form.tab1.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staDS_ADDRDTLS","0","68","140","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("상세주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edtDS_ADDRDTLS","staDS_ADDRDTLS:4","73",null,"24","4",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage2.form);
            obj.set_taborder("6");
            this.divData.form.divDataRight.form.tab1.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staCD_CARTP","0","101","140","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("차종");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staBgCD_CARTP","139","101","205","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.tab1.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cboCD_CARTP","staCD_CARTP:4","106","195","24",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_CARTP");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.form.divDataRight.form.tab1.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staNO_CAR","343","101","130","34",null,null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.tab1.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edtNO_CAR","staNO_CAR:4","106",null,"24","4",null,null,null,null,null,this.divData.form.divDataRight.form.tab1.Tabpage2.form);
            obj.set_taborder("12");
            this.divData.form.divDataRight.form.tab1.Tabpage2.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.ccfACNTUNIT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfACNTUNIT.form.DSTextBox","value","dsSearch","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfLSECLS.form.CDTextBox","value","dsSearch","CD_LSECLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfLSECLS.form.DSTextBox","value","dsSearch","DS_LSECLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfLSEASST.form.CDTextBox","value","dsSearch","NO_LSEASST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfLSEASST.form.DSTextBox","value","dsSearch","DS_LSEASST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.tab1.Tabpage1.form.edtNO_LSEASST","value","dsList","NO_LSEASST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.tab1.Tabpage1.form.edtDS_LSEASST","value","dsList","DS_LSEASST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.tab1.Tabpage1.form.cfCD_LSECLS.form.CDTextBox","value","dsList","CD_LSECLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.tab1.Tabpage1.form.cfCD_LSECLS.form.DSTextBox","value","dsList","DS_LSECLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.tab1.Tabpage1.form.cfCD_LSECLSDTLS.form.CDTextBox","value","dsList","CD_LSECLSDTLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.tab1.Tabpage1.form.cfCD_LSECLSDTLS.form.DSTextBox","value","dsList","DS_LSECLSDTLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.tab1.Tabpage1.form.edtCD_TRADE_ASST","value","dsList","CD_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.tab1.Tabpage1.form.cfCD_DEPT.form.CDTextBox","value","dsList","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.tab1.Tabpage1.form.cfCD_DEPT.form.DSTextBox","value","dsList","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataRight.form.tab1.Tabpage1.form.cfCD_VENDOR.form.CDTextBox","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataRight.form.tab1.Tabpage1.form.cfCD_VENDOR.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataRight.form.tab1.Tabpage1.form.calDT_LSECNTRC","value","dsList","DT_LSECNTRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataRight.form.tab1.Tabpage1.form.calDT_LSEFR","value","dsList","DT_LSEFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.tab1.Tabpage1.form.calDT_LSETO","value","dsList","DT_LSETO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.tab1.Tabpage1.form.edtNO_MCNT","value","dsList","NO_MCNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataRight.form.tab1.Tabpage1.form.edtRT_INTRT","value","dsList","RT_INTRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataRight.form.tab1.Tabpage1.form.cfCD_ACCOUNT_ASST.form.CDTextBox","value","dsList","CD_ACCOUNT_ASST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataRight.form.tab1.Tabpage1.form.cfCD_ACCOUNT_ASST.form.DSTextBox","value","dsList","DS_ACCOUNT_ASST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataRight.form.tab1.Tabpage1.form.cfCD_ACCOUNT_CST.form.CDTextBox","value","dsList","CD_ACCOUNT_CST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataRight.form.tab1.Tabpage1.form.cfCD_ACCOUNT_CST.form.DSTextBox","value","dsList","DS_ACCOUNT_CST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataRight.form.tab1.Tabpage1.form.cboTY_CNTRC","value","dsList","TY_CNTRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataRight.form.tab1.Tabpage1.form.cfNO_CNTRC.form.CDTextBox","value","dsList","NO_CNTRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divDataRight.form.tab1.Tabpage1.form.cfNO_CNTRC.form.DSTextBox","value","dsList","DS_CNTRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divDataRight.form.tab1.Tabpage1.form.edtDS_RMKS","value","dsList","DS_RMKS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divDataRight.form.tab1.Tabpage1.form.cboTY_STATS","value","dsList","TY_STATS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.divDataRight.form.tab1.Tabpage1.form.cboYN_LCNSASST","value","dsList","YN_LCNSASST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divDataRight.form.tab1.Tabpage1.form.calDT_MIDTRMN","value","dsList","DT_MIDTRMN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.divDataRight.form.tab1.Tabpage1.form.cboYN_END","value","dsList","YN_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.divDataRight.form.tab1.Tabpage2.form.cfNO_ZIP.form.CDTextBox","value","dsList","NO_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.divDataRight.form.tab1.Tabpage2.form.cfNO_ZIP.form.DSTextBox","value","dsList","DS_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.divDataRight.form.tab1.Tabpage2.form.edtDS_ADDRDTLS","value","dsList","DS_ADDRDTLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.divDataRight.form.tab1.Tabpage2.form.cboCD_CARTP","value","dsList","CD_CARTP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.divDataRight.form.tab1.Tabpage2.form.edtNO_CAR","value","dsList","NO_CAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.divDataRight.form.tab1.Tabpage1.form.edtAM_LSETOT","value","dsList","AM_LSETOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.tab1.Tabpage1.form.edtAM_LSEYLY","value","dsList","AM_LSEYLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataRight.form.tab1.Tabpage1.form.edtAM_LSEMLY","value","dsList","AM_LSEMLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataRight.form.tab1.Tabpage1.form.edtAM_DMNY","value","dsList","AM_DMNY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataRight.form.tab1.Tabpage1.form.edtNO_CHNG","value","dsList","NO_CHNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.divDataRight.form.tab1.Tabpage1.form.cfCD_ACCOUNT_PAY.form.CDTextBox","value","dsList","CD_ACCOUNT_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.divDataRight.form.tab1.Tabpage1.form.cfCD_ACCOUNT_PAY.form.DSTextBox","value","dsList","DS_ACCOUNT_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divSearch.form.cchkYN_LAST","value","dsSearch","YN_LAST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.divDataRight.form.tab1.Tabpage1.form.edtNO_MCNTMLY","value","dsList","NO_MCNTMLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.divDataRight.form.tab1.Tabpage1.form.cboYN_MIDTRMN","value","dsList","YN_MIDTRMN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHN_LSEASST.xfdl", function() {
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
        	this.gfnSetAllEnable(this.divDataRightTab1, false);
        	this.divData.form.divDataRight.form.tab1.Tabpage1.form.btnAttachFile.set_enable(true);

        	//타화면에서 호출되었을 경우
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP || this.getOwnerFrame().CD_DEPT || this.getOwnerFrame().CD_LSECLS || this.getOwnerFrame().NO_LSEASST)){

        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);

        		this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.getOwnerFrame().CD_DEPT);
        		this.dsSearch.setColumn(0, "DS_DEPT_ACNT", this.getOwnerFrame().DS_DEPT);

        		this.dsSearch.setColumn(0, "CD_LSECLS", this.getOwnerFrame().CD_LSECLS);
        		this.dsSearch.setColumn(0, "DS_LSECLS", this.getOwnerFrame().DS_LSECLS);

        		this.dsSearch.setColumn(0, "NO_LSEASST", this.getOwnerFrame().NO_LSEASST);
        		this.dsSearch.setColumn(0, "DS_LSEASST", this.getOwnerFrame().DS_LSEASST);

        		this.dsSearch.setColumn(0, "YN_LAST", true);

        		this.FormBtns.Select.click();
        	}else{
        		this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        		this.dsSearch.setColumn(0, "YN_LAST", true);
        	}

        	//법인코드 포커스
        	this.ccfCD_CORP.form.CDTextBox.setFocus();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnAttachFile 		= this.gfnFormButtonAdd("btnAttachFile"	 	, "fnAttachFile"); 		// 첨부파일관리
        	this.btnLseMlyPayDtls 	= this.gfnFormButtonAdd("btnLseMlyPayDtls"	, "fnLseMlyPayDtls"); 	// 월납부내역관리
        	this.btnLseClsngDtls 	= this.gfnFormButtonAdd("btnLseClsngDtls"	, "fnLseClsngDtls"); 	// 결산내역관리
        	this.btnVldtReq 		= this.gfnFormButtonAdd("btnVldtReq"		, "fnVldtReq"); 		// 검증요청/취소
        	this.btnVldtCnf 		= this.gfnFormButtonAdd("btnVldtCnf"		, "fnVldtCnf"); 		// 검증확인/취소
        	this.btnSlipIssueAsst 	= this.gfnFormButtonAdd("btnSlipIssueAsst"	, "fnSlipIssueAsst"); 	// 전표발행(자산설정)
        	this.btnSlipSearchAsst	= this.gfnFormButtonAdd("btnSlipSearchAsst"	, "fnSlipSearchAsst"); 	// 전표조회(자산설정)
        	this.btnSlipCancelAsst	= this.gfnFormButtonAdd("btnSlipCancelAsst"	, "fnSlipCancelAsst"); 	// 전표취소(자산설정)
        	this.btnLseChng			= this.gfnFormButtonAdd("btnLseChng"		, "fnLseChng"); 		// 변경계약생성
        	this.btnMidTrmn			= this.gfnFormButtonAdd("btnMidTrmn"		, "fnMidTrmn"); 		// 중도해지
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridHeader = this.divData.form.divDataLeft.form.objGridHeader;

        	//검색조건
        	this.ccfCD_CORP  = this.divSearch.form.ccfCD_CORP;  	//법인코드
        	this.ccfACNTUNIT = this.divSearch.form.ccfACNTUNIT; 	//귀속부서
        	this.ccfLSECLS	 = this.divSearch.form.ccfLSECLS;		//자산분류
        	this.ccfLSEASST	 = this.divSearch.form.ccfLSEASST;		//자산번호

        	//상세DIV, tab1
        	this.divDataRightTab1 = this.divData.form.divDataRight.form.tab1.Tabpage1.form;
        	this.divDataRightTab2 = this.divData.form.divDataRight.form.tab1.Tabpage2.form;

        	this.cboTY_CNTRC = this.divDataRightTab1.cboTY_CNTRC;
        	this.cboCD_CARTP = this.divDataRightTab2.cboCD_CARTP;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.dxGrid.AfterInit = "fnGrid_AfterInit";	// AfterInit 은 반드시 gfnGridInit 전에 선언.
        	//this.dxGridHeader.AfterInit = "fnGridHeader_AfterInit";	// AfterInit 은 반드시 gfnGridInit 전에 선언.

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHN_LSEASST");
        	//this.gfnGridInit(this.dxGridHeader, this.dsList, "DH", "DHN_LSEASSTHEADER");

        	this.ccfCD_CORP.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";
        	this.ccfACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfLSECLS.BeforeUserDataSetParam 	= "fnBeforeUserDataSetParam";
        	this.ccfLSEASST.BeforeUserDataSetParam 	= "fnBeforeUserDataSetParam";

        	this.divDataRightTab1.cfCD_LSECLS.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divDataRightTab1.cfCD_LSECLSDTLS.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divDataRightTab1.cfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divDataRightTab1.cfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divDataRightTab1.cfCD_ACCOUNT_ASST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divDataRightTab1.cfCD_ACCOUNT_CST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divDataRightTab1.cfCD_ACCOUNT_PAY.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divDataRightTab1.cfNO_CNTRC.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divDataRightTab2.cfNO_ZIP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.divDataRightTab1.cfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("CD_LSECLS", "string");
        	this.dsSelect.addColumn("NO_LSEASST", "string");
        	this.dsSelect.addColumn("YN_LAST", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("NO_LSEASST", "string");
        	this.dsSave.addColumn("NO_CHNG", "string");
        	this.dsSave.addColumn("DS_LSEASST", "string");
        	this.dsSave.addColumn("CD_LSECLS", "string");
        	this.dsSave.addColumn("CD_LSECLSDTLS", "string");
        	this.dsSave.addColumn("CD_TRADE_ASST", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("DT_LSECNTRC", "string");
        	this.dsSave.addColumn("DT_LSEFR", "string");
        	this.dsSave.addColumn("DT_LSETO", "string");
        	this.dsSave.addColumn("NO_MCNT", "int");
        	this.dsSave.addColumn("NO_MCNTMLY", "bigdecimal");
        	this.dsSave.addColumn("AM_LSETOT", "bigdecimal");
        	this.dsSave.addColumn("AM_LSEYLY", "bigdecimal");
        	this.dsSave.addColumn("AM_LSEMLY", "bigdecimal");
        	this.dsSave.addColumn("AM_DMNY", "bigdecimal");
        	this.dsSave.addColumn("RT_INTRT", "bigdecimal");
        	this.dsSave.addColumn("CD_ACCOUNT_ASST", "string");
        	this.dsSave.addColumn("CD_ACCOUNT_CST", "string");
        	this.dsSave.addColumn("CD_ACCOUNT_PAY", "string");
        	this.dsSave.addColumn("TY_CNTRC", "string");
        	this.dsSave.addColumn("NO_CNTRC", "string");
        	this.dsSave.addColumn("DS_CNTRC", "string");
        	this.dsSave.addColumn("DS_RMKS", "string");
        	this.dsSave.addColumn("TY_STATS", "string");
        	this.dsSave.addColumn("YN_LCNSASST", "string");
        	this.dsSave.addColumn("YN_MIDTRMN", "string");
        	this.dsSave.addColumn("DT_MIDTRMN", "string");
        	this.dsSave.addColumn("YN_END", "string");
        	this.dsSave.addColumn("NO_ZIP", "string");
        	this.dsSave.addColumn("DS_ADDR", "string");
        	this.dsSave.addColumn("DS_ADDRDTLS", "string");
        	this.dsSave.addColumn("CD_CARTP", "string");
        	this.dsSave.addColumn("NO_CAR", "string");

        	this.dsSrcMsg = new Dataset();
        	this.dsSrcMsg.addColumn("TY_WRK", "string");
        	this.dsSrcMsg.addColumn("CD_SYSTEM", "string");
        	this.dsSrcMsg.addColumn("CD_TYPE", "string");

        	this.dsSaveExecute = new Dataset();
        	this.dsSaveExecute.addColumn("TY_WRK", "string");
        	this.dsSaveExecute.addColumn("ID_USER", "string");
        	this.dsSaveExecute.addColumn("CD_CORP", "string");
        	this.dsSaveExecute.addColumn("NO_LSEASST", "string");
        	this.dsSaveExecute.addColumn("NO_CHNG", "string");
        	this.dsSaveExecute.addColumn("CD_DEPT", "string");
        	this.dsSaveExecute.addColumn("CD_TRADE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnSetAllEnable(this.divDataRightTab1, true);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_WRK" 			, "Q");
        	this.dsSelect.setColumn(0, "CD_CORP"			, this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_DEPT" 			, this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "CD_LSECLS" 			, this.dsSearch.getColumn(0, "CD_LSECLS"));
        	this.dsSelect.setColumn(0, "NO_LSEASST" 		, this.dsSearch.getColumn(0, "NO_LSEASST"));
        	this.dsSelect.setColumn(0, "YN_LAST"			, this.dsSearch.getColumn(0, "YN_LAST") == "true" ? "Y" : "");

        	var strSvcId    = "select";
        	var strSvcType  = "select";
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nRow = this.gfnGridAdd(this.dxGrid, "current_bottom", true);

        	this.dsList.set_enableevent(false);

        	this.dsList.setColumn(nRow, "CD_CORP"	  		, this.dsSearch.getColumn(0, "CD_CORP"));	//법인코드
        	this.dsList.setColumn(nRow, "TY_STATS"	  		, "00");									//회계팀검증
        	this.dsList.setColumn(nRow, "CD_LSECLS"	  		, this.dsSearch.getColumn(0, "CD_LSECLS"));	//자산분류코드
        	this.dsList.setColumn(nRow, "DS_LSECLS"	  		, this.dsSearch.getColumn(0, "DS_LSECLS"));	//자산분류명
        	this.dsList.setColumn(nRow, "CD_DEPT"	  		, this.AuthClient.CD_DEPT_ACNT);			//귀속부서코드
        	this.dsList.setColumn(nRow, "DS_DEPT"	  		, this.AuthClient.DS_DEPT_ACNT);			//귀속부서명
        	this.dsList.setColumn(nRow, "YN_LCNSASST"	  	, "");										//사용권자산
        	this.dsList.setColumn(nRow, "DT_MIDTRMN"	  	, "");										//중도해지일자
        	this.dsList.setColumn(nRow, "YN_END"	  		, "N");										//종료여부
        	this.dsList.setColumn(nRow, "NO_CHNG"	  		, "000");									//변경차수

        	this.dsList.set_enableevent(true);

        	//상세내역 활성처리
        	this.gfnSetAllEnable(this.divDataRightTab1, true);
        	this.gfnSetAllEnable(this.divDataRightTab2, true);

        	this.cboTY_CNTRC.set_index(0);
        	this.cboCD_CARTP.set_index(0);

        	this.dsList.set_rowposition(nRow);
        	this.dxGrid.setCellPos(2);
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
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	//if (!this.gfnGridValidate(this.dxGridHeader)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "NO_LSEASST", this.dsList.getColumn(i, "NO_LSEASST"));
        				this.dsSave.setColumn(nrow, "NO_CHNG", this.dsList.getColumn(i, "NO_CHNG"));
        				this.dsSave.setColumn(nrow, "DS_LSEASST", this.dsList.getColumn(i, "DS_LSEASST"));
        				this.dsSave.setColumn(nrow, "CD_LSECLS", this.dsList.getColumn(i, "CD_LSECLS"));
        				this.dsSave.setColumn(nrow, "CD_LSECLSDTLS", this.dsList.getColumn(i, "CD_LSECLSDTLS"));
        				this.dsSave.setColumn(nrow, "CD_TRADE_ASST", this.dsList.getColumn(i, "CD_TRADE_ASST"));
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "DT_LSECNTRC", this.dsList.getColumn(i, "DT_LSECNTRC"));
        				this.dsSave.setColumn(nrow, "DT_LSEFR", this.dsList.getColumn(i, "DT_LSEFR"));
        				this.dsSave.setColumn(nrow, "DT_LSETO", this.dsList.getColumn(i, "DT_LSETO"));
        				this.dsSave.setColumn(nrow, "NO_MCNT", this.dsList.getColumn(i, "NO_MCNT"));
        				this.dsSave.setColumn(nrow, "NO_MCNTMLY", this.dsList.getColumn(i, "NO_MCNTMLY"));
        				this.dsSave.setColumn(nrow, "AM_LSETOT", this.dsList.getColumn(i, "AM_LSETOT"));
        				this.dsSave.setColumn(nrow, "AM_LSEYLY", this.dsList.getColumn(i, "AM_LSEYLY"));
        				this.dsSave.setColumn(nrow, "AM_LSEMLY", this.dsList.getColumn(i, "AM_LSEMLY"));
        				this.dsSave.setColumn(nrow, "AM_DMNY", this.dsList.getColumn(i, "AM_DMNY"));
        				this.dsSave.setColumn(nrow, "RT_INTRT", this.dsList.getColumn(i, "RT_INTRT"));
        				this.dsSave.setColumn(nrow, "CD_ACCOUNT_ASST", this.dsList.getColumn(i, "CD_ACCOUNT_ASST"));
        				this.dsSave.setColumn(nrow, "CD_ACCOUNT_CST", this.dsList.getColumn(i, "CD_ACCOUNT_CST"));
        				this.dsSave.setColumn(nrow, "CD_ACCOUNT_PAY", this.dsList.getColumn(i, "CD_ACCOUNT_PAY"));
        				this.dsSave.setColumn(nrow, "TY_CNTRC", this.dsList.getColumn(i, "TY_CNTRC"));
        				this.dsSave.setColumn(nrow, "NO_CNTRC", this.dsList.getColumn(i, "NO_CNTRC"));
        				this.dsSave.setColumn(nrow, "DS_CNTRC", this.dsList.getColumn(i, "DS_CNTRC"));
        				this.dsSave.setColumn(nrow, "DS_RMKS", this.dsList.getColumn(i, "DS_RMKS"));
        				this.dsSave.setColumn(nrow, "TY_STATS", this.dsList.getColumn(i, "TY_STATS"));
        				this.dsSave.setColumn(nrow, "YN_LCNSASST", this.dsList.getColumn(i, "YN_LCNSASST"));
        				this.dsSave.setColumn(nrow, "YN_MIDTRMN", this.dsList.getColumn(i, "YN_MIDTRMN"));
        				this.dsSave.setColumn(nrow, "DT_MIDTRMN", this.dsList.getColumn(i, "DT_MIDTRMN"));
        				this.dsSave.setColumn(nrow, "YN_END", this.dsList.getColumn(i, "YN_END"));
        				this.dsSave.setColumn(nrow, "NO_ZIP", this.dsList.getColumn(i, "NO_ZIP"));
        				this.dsSave.setColumn(nrow, "DS_ADDR", this.dsList.getColumn(i, "DS_ADDR"));
        				this.dsSave.setColumn(nrow, "DS_ADDRDTLS", this.dsList.getColumn(i, "DS_ADDRDTLS"));
        				this.dsSave.setColumn(nrow, "CD_CARTP", this.dsList.getColumn(i, "CD_CARTP"));
        				this.dsSave.setColumn(nrow, "NO_CAR", this.dsList.getColumn(i, "NO_CAR"));
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
         *	메세지 처리(검증요청)
         */
         this.fnSetMsg = function(msgFlag) {

        	this.dsSrcMsg.clearData();
        	this.dsSrcMsg.addRow();

        	if(msgFlag == 1) {
        		// 검증요청/취소(확인메세지) : 요청(N006), 요청취소(N007)
        		this.dsSrcMsg.setColumn(0, "TY_WRK" 		, this.dsList.getColumn(this.dsList.rowposition, "MSG_VLDTREQ"));
        	}
        	if(msgFlag == 2) {
        		// 검증확인/취소(확인메세지) : 요청(N008), 요청취소(N009)
        		this.dsSrcMsg.setColumn(0, "TY_WRK" 		, this.dsList.getColumn(this.dsList.rowposition, "MSG_VLDTCNF"));
        	}
        	if(msgFlag == 3) {
        		this.dsSrcMsg.setColumn(0, "TY_WRK" 		, "N010");
        	}
        	if(msgFlag == 4) {
        		this.dsSrcMsg.setColumn(0, "TY_WRK" 		, "N011");
        	}
        	if(msgFlag == 5) {
        		this.dsSrcMsg.setColumn(0, "TY_WRK" 		, "N035");
        	}
        	if(msgFlag == 6) {
        		this.dsSrcMsg.setColumn(0, "TY_WRK" 		, "N050");
        	}

        	this.dsSrcMsg.setColumn(0, "CD_SYSTEM"		, "DH");
        	this.dsSrcMsg.setColumn(0, "CD_TYPE" 		, "Z99");

        	var strSvcId    = "select_m";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_m=dsSrcMsg";
        	var outData     = "dsMsgList=select_m0";
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

        // 처리
        this.fn_execute = function(exeFlag) {

        	this.dsSaveExecute.clearData();
        	this.dsSaveExecute.addRow();

        	if(exeFlag == 1) {
        		this.dsSaveExecute.setColumn(0, "TY_WRK" 			, this.dsList.getColumn(this.dsList.rowposition, "CHK_VLDTREQ"));
        	}
        	if(exeFlag == 2) {
        		this.dsSaveExecute.setColumn(0, "TY_WRK" 			, this.dsList.getColumn(this.dsList.rowposition, "CHK_VLDTCNF"));
        	}
        	if(exeFlag == 3) {
        		this.dsSaveExecute.setColumn(0, "TY_WRK" 			, "SLPPUBASST");
        		this.dsSaveExecute.setColumn(0, "CD_DEPT" 			, this.AuthClient.CD_DEPT_ACNT);
        		this.dsSaveExecute.setColumn(0, "CD_TRADE" 			, this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE_ASST"));
        	}
        	if(exeFlag == 4) {
        		this.dsSaveExecute.setColumn(0, "TY_WRK" 			, "SLPCNCASST");
        		this.dsSaveExecute.setColumn(0, "CD_DEPT" 			, this.AuthClient.CD_DEPT_ACNT);
        		this.dsSaveExecute.setColumn(0, "CD_TRADE" 			, this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE_ASST"));
        	}
        	if(exeFlag == 5) {
        		this.dsSaveExecute.setColumn(0, "TY_WRK" 			, "LSECHNG");
        	}
        	if(exeFlag == 6) {
        		this.dsSaveExecute.setColumn(0, "TY_WRK" 			, "MIDTRMN");
        	}

        	this.dsSaveExecute.setColumn(0, "ID_U"			, this.AuthClient.ID_USER);
        	this.dsSaveExecute.setColumn(0, "CD_CORP" 			, this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSaveExecute.setColumn(0, "NO_LSEASST" 		, this.dsList.getColumn(this.dsList.rowposition, "NO_LSEASST"));
        	this.dsSaveExecute.setColumn(0, "NO_CHNG" 			, this.dsList.getColumn(this.dsList.rowposition, "NO_CHNG"));

        	var strSvcId    = "save_e";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_e=dsSaveExecute";
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
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */

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
        // 		this.gfnSetAllEnable(this.divDataRightTab1, (this.dsList.getColumn(this.dsList.rowposition, "YN_EDIT") == "N") ? false : true);
        // 		this.gfnSetAllEnable(this.divDataRightTab2, (this.dsList.getColumn(this.dsList.rowposition, "YN_EDIT") == "N") ? false : true);
        		this.gfnSetAllReadonly(this.divDataRightTab1, (this.dsList.getColumn(this.dsList.rowposition, "YN_EDIT") == "N") ? true : false, true);
        		this.gfnSetAllReadonly(this.divDataRightTab2, (this.dsList.getColumn(this.dsList.rowposition, "YN_EDIT") == "N") ? true : false, true);
        		this.fnBtnCheckAll();
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "select_m") {
        		if(this.dsMsgList.rowcount > 0){
        			var msgCnfr = this.dsMsgList.getColumn(0, "MSG_CNFR");
        			msgCnfr = msgCnfr.replace("@CD_DEPT", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"));
        			msgCnfr = msgCnfr.replace("@DS_DEPT", this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT"));
        			msgCnfr = msgCnfr.replace("@NO_LSEASST", this.dsList.getColumn(this.dsList.rowposition, "NO_LSEASST"));
        			msgCnfr = msgCnfr.replace("@DS_LSEASST", this.dsList.getColumn(this.dsList.rowposition, "DS_LSEASST"));
        			var msgCd = this.dsMsgList.getColumn(0, "MSG_CODE");
        			if(msgCd == "N035" || msgCd == "N050") {
        				msgCnfr = msgCnfr.replace("@NO_CHNG", this.dsList.getColumn(this.dsList.rowposition, "NO_CHNG"));
        			}

        			this.gfnConfirm(msgCnfr, "dsMsgList_canrowposchange_callback", msgCd);
        		}

        	} else if(svcID == "save_e") {
        		if(errorCode != 0) {
        			this.gfnAlert(errorMsg);
        		} else {
        			this.gfnAlert(this.dsMsgList.getColumn(0, "MSG_CMPL"), "fnCallback_Callback", "");
        		}
        	}
        };

        this.fnCallback_Callback = function(svcID, errorCode, errorMsg) {
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	switch(id) {
        		case "ccfCD_CORP" : 		//법인코드(조회조건)
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		break;

        		case "ccfACNTUNIT": 		//귀속부서(조회조건)
        		case "cfCD_DEPT": 			//귀속부서(싱글폼)
        			if(this.gfnIsNull(cdCorp)){
        				this.gfnAlert("법인코드를 선택하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        			dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		break;

        		case "ccfLSECLS": 			//자산분류(조회조건)
        			dsUserParam.setColumn(nrow, "CD_CORP" 		, this.dsSearch.getColumn(0, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "TY_LSECLS" 	, "C");
        			dsUserParam.setColumn(nrow, "CD_LSECLS"  	, "");
        		break;

        		case "ccfLSEASST": 			//자산번호(조회조건)
        			dsUserParam.setColumn(nrow, "CD_CORP" 		, this.dsSearch.getColumn(0, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "CD_DEPT" 		, this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        			dsUserParam.setColumn(nrow, "CD_LSECLS"  	, this.dsSearch.getColumn(0, "CD_LSECLS"));
        			dsUserParam.setColumn(nrow, "NO_LSEASST"  	, this.dsSearch.getColumn(0, "NO_LSEASST"));
        		break;

        		case "cfCD_LSECLS": 		//자산분류코드(싱글폼)
        			dsUserParam.setColumn(nrow, "CD_CORP" 		, this.dsSearch.getColumn(0, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "TY_LSECLS" 	, "C");
        			dsUserParam.setColumn(nrow, "CD_LSECLS"  	, "");
        		break;

        		case "cfCD_LSECLSDTLS": 	//세부분류코드(싱글폼)
        			dsUserParam.setColumn(nrow, "CD_CORP" 		, this.dsSearch.getColumn(0, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "TY_LSECLS" 	, "D");
        			dsUserParam.setColumn(nrow, "CD_LSECLS"  	, this.dsList.getColumn(this.dsList.rowposition, "CD_LSECLS"));
        		break;

        		case "cfCD_VENDOR": 		//임대거래처(싱글폼)
        			dsUserParam.setColumn(nrow, "CD_CORP" 		, this.dsSearch.getColumn(0, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "TY_VENDOR" 	, "F");
        			dsUserParam.setColumn(nrow, "YN_USE"  		, "Y");
        		break;

        		case "cfCD_ACCOUNT_ASST": 	//자산계정(싱글폼)
        			dsUserParam.setColumn(nrow, "CD_CORP" 		, this.dsSearch.getColumn(0, "CD_CORP"));
        		break;

        		case "cfCD_ACCOUNT_CST": 	//비용계정(싱글폼)
        			dsUserParam.setColumn(nrow, "CD_CORP" 		, this.dsSearch.getColumn(0, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "CD_DEPT" 		, this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"));
        		break;

        		case "cfCD_ACCOUNT_PAY": 	//지급계정(싱글폼)
        			dsUserParam.setColumn(nrow, "CD_CORP" 		, this.dsSearch.getColumn(0, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "CD_AUTOSLIP"   , "DHN0034");
        			dsUserParam.setColumn(nrow, "TY_CRDR"   	, "C");
        		break;

        		case "cfNO_CNTRC": 			//계약번호(싱글폼)
        			dsUserParam.setColumn(nrow, "CD_CORP" 		, this.dsSearch.getColumn(0, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "CD_DEPT" 		, this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"));
        		break;

        		case "cfNO_ZIP": 			//주소(싱글폼)
        			dsUserParam.setColumn(nrow, "CD_CORP" 		, this.dsSearch.getColumn(0, "CD_CORP"));
        		break;
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if(arr.length > 0) {
        		this.dsList.setColumn(this.dsList.rowposition, "CD_VENDOR", arr[0]["CD_VENDOR"]);
        		this.dsList.setColumn(this.dsList.rowposition, "DS_VENDOR", arr[0]["DS_VENDOR"]);
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_AfterInit = function(obj) {
        	// 그리드 셋팅 기준으로 해당 Div내의 Static 텍스트, 필수값 셋팅.
        	// (static 컨트롤 id가 sta컬럼명 으로 지정되어야 함)
        	this.gfnGridRequiredMark(obj, this.divData.form.divDataRight.form.tab1.Tabpage1);
        	this.gfnGridRequiredMark(obj, this.divData.form.divDataRight.form.tab1.Tabpage2);
        };
         this.fnGridHeader_AfterInit = function(obj) {
        	// 그리드 셋팅 기준으로 해당 Div내의 Static 텍스트, 필수값 셋팅.
        	// (static 컨트롤 id가 sta컬럼명 으로 지정되어야 함)
        	this.gfnGridRequiredMark(obj, this.divData.form.divDataRight.form.tab1.Tabpage1);
        	this.gfnGridRequiredMark(obj, this.divData.form.divDataRight.form.tab1.Tabpage2);
        };

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row) || (obj.oldrow == -1 && e.oldrow != e.row)) {
        		//this.gfnSetAllEnable(this.divDataRightTab1, (this.dsList.getColumn(this.dsList.rowposition, "YN_EDIT") == "N") ? false : true);
        		//this.gfnSetAllEnable(this.divDataRightTab2, (this.dsList.getColumn(this.dsList.rowposition, "YN_EDIT") == "N") ? false : true);
        		this.gfnSetAllReadonly(this.divDataRightTab1, (this.dsList.getColumn(this.dsList.rowposition, "YN_EDIT") == "N") ? true : false, true);
        		this.gfnSetAllReadonly(this.divDataRightTab2, (this.dsList.getColumn(this.dsList.rowposition, "YN_EDIT") == "N") ? true : false, true);
        		this.fnBtnCheckAll();
        		obj.oldrow = -1;
           }
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //콤보박스 셋팅
        this.fnSetCombo = function() {

        	var arrComms = [];
        	arrComms.push({col: "TY_CNTRC"			, code: "DHN04"  	, yn_all: "C"});		//계약번호구분(싱글폼)
        	arrComms.push({col: "TY_STATS"			, code: "DHN05"  	, yn_all: "C"});		//회계팀검증(싱글폼)
        	//arrComms.push({col: "YN_LCNSASST"		, code: "DH90"  	, yn_all: "C"});		//사용권자산(싱글폼)
        	//arrComms.push({col: "YN_END"			, code: "DH90"  	, yn_all: "C"});		//종료여부(싱글폼)
        	arrComms.push({col: "CD_CARTP"			, code: "DHN07"  	, yn_all: "C"});		//차종(싱글폼)
        	//arrComms.push({col: "YN_MIDTRMN"		, code: "DH90"  	, yn_all: "C"});		//중도해지여부(싱글폼)

        	this.gfnLoadCommonCode(arrComms, false);
        };

        // 스플리터 함수
        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.divData_divDataRight_tab1_Tabpage1_cboTY_CNTRC_onitemchanged = function(obj,e)
        {
        	var ty_cntrc = obj.value;
        	if(ty_cntrc == "CONT") {
        		this.divDataRightTab1.cfNO_CNTRC.CodeFindName = "DHX_CFLSECONT";
        	}
        	if(ty_cntrc == "DMNY") {
        		this.divDataRightTab1.cfNO_CNTRC.CodeFindName = "DHX_CFLSEDMNY";
        	}
        };

        // 임대시작일시 변경 시
        this.divData_divDataRight_tab1_Tabpage1_calDT_LSEFR_onchanged = function(obj,e)
        {
        	this.fnCalcAmount('DT');
        };

        // 임대종료일시 변경 시
        this.divData_divDataRight_tab1_Tabpage1_calDT_LSETO_onchanged = function(obj,e)
        {
        	this.fnCalcAmount('DT');
        };

        // 월간계산 변경 시
        this.divData_divDataRight_tab1_Tabpage1_edtNO_MCNTMLY_onchanged = function(obj,e)
        {
        	this.fnCalcAmount('MCNT');
        };

        // 임대료(총액) 변경 시
        this.divData_divDataRight_tab1_Tabpage1_edtAM_LSETOT_onchanged = function(obj,e)
        {
        	this.fnCalcAmount('AMT');
        };

        /************************************************************************
        * 임대료 계산 처리
        ************************************************************************/
        this.fnCalcAmount = function(gubun)
        {
        	var dateFr = this.dsList.getColumn(this.dsList.rowposition, "DT_LSEFR");	// 임대기간(FROM)
        	var dateTo = this.dsList.getColumn(this.dsList.rowposition, "DT_LSETO");	// 임대기간(TO)
        	var noMcnt = 0;
        	var noMcntMly = 0.0;
        	var noMcntMlyDay = 0.0;
        	var lseTot = 0;
        	var lseYly = 0;
        	var lseMly = 0;

        	// 리스기간(개월수)
        	if (!this.gfnIsNull(dateFr) && !this.gfnIsNull(dateTo) && gubun == "DT") {
        		var dateTransFr = new Date(dateFr.substr(0,4), dateFr.substr(4,2)-1, dateFr.substr(6,2));
        		var dateTransTo = new Date(dateTo.substr(0,4), dateTo.substr(4,2)-1, dateTo.substr(6,2));
        		noMcnt = parseInt((dateTransTo.getFullYear() * 12 + dateTransTo.getMonth()) - (dateTransFr.getFullYear() * 12 + dateTransFr.getMonth())) + 1;
        		this.dsList.setColumn(this.dsList.rowposition, "NO_MCNT", noMcnt);
        		noMcntMlyDay = Math.floor(dateTransTo.valueOf()/(24*60*60*1000) - dateTransFr.valueOf()/(24*60*60*1000));
        		noMcntMly = (noMcntMlyDay / 365) * 12;
        		this.dsList.setColumn(this.dsList.rowposition, "NO_MCNTMLY", noMcntMly);
        	}

        	noMcnt = this.dsList.getColumn(this.dsList.rowposition, "NO_MCNT"); 	// 리스기간
        	noMcntMly = this.dsList.getColumn(this.dsList.rowposition, "NO_MCNTMLY"); 	// 리스기간(임대료(월간))
        	lseTot = this.dsList.getColumn(this.dsList.rowposition, "AM_LSETOT");	// 임대료(총액)

        	if(noMcnt != 0 && lseTot != 0) {
        		lseYly = (lseTot*12)/noMcnt; //임대료(연간)
        		lseMly = lseTot/noMcnt; //임대료(월간)

        // 		if(noMcntMly != 0) {
        // 			lseMly = Math.floor(lseTot/noMcntMly); //임대료(월간)
        // 			lseYly = lseMly * 12; //임대료(연간)
        // 		}

        		this.dsList.setColumn(this.dsList.rowposition, "AM_LSEYLY", lseYly);
        		this.dsList.setColumn(this.dsList.rowposition, "AM_LSEMLY", lseMly);
        	}
        }

        this.fnGrid_FlagCheck = function()
        {
        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);

        	if(flag == "I")
        		return false;

        	return true;
        }

        this.dsMsgList_canrowposchange_callback = function(strId, val) {

        	if(val) {
        		if(strId == "N006" || strId == "N007") {
        			this.fn_execute(1);
        		}
        		if(strId == "N008" || strId == "N009") {
        			this.fn_execute(2);
        		}
        		if(strId == "N010") {
        			this.fn_execute(3);
        		}
        		if(strId == "N011") {
        			this.fn_execute(4);
        		}
        		if(strId == "N035") {
        			this.fn_execute(5);
        		}
        		if(strId == "N050") {
        			this.fn_execute(6);
        		}
        	}

        }
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 첨부파일관리
        this.fnAttachFile = function (obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DHN1";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"CD_CORP"),
        					this.dsList.getColumn(this.dsList.rowposition, "NO_LSEASST"), this.dsList.getColumn(this.dsList.rowposition, "NO_CHNG")];

        	if(this.dsList.getColumn(this.dsList.rowposition, "YN_EDIT") == "Y") {
        		fileManager.IS_READONLY = false;
        	} else {
        		fileManager.IS_READONLY = true;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        // 월납부내역관리
        this.fnLseMlyPayDtls = function (obj,e) {
        	var objDs = this.dxGrid.getBindDataset();
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};
        	param.CD_CORP = objDs.getColumn(objDs.rowposition, "CD_CORP");
        	param.DS_CORP = objDs.getColumn(objDs.rowposition, "DS_CORP");
        	param.CD_DEPT = objDs.getColumn(objDs.rowposition, "CD_DEPT");
        	param.DS_DEPT = objDs.getColumn(objDs.rowposition, "DS_DEPT");
        	param.NO_LSEASST = objDs.getColumn(objDs.rowposition, "NO_LSEASST");
        	param.NO_CHNG = objDs.getColumn(objDs.rowposition, "NO_CHNG");
        	param.DS_LSEASST = objDs.getColumn(objDs.rowposition, "DS_LSEASST");

        	this.gfnFormOpen("DHN", "DHN_LSEMLYPAYDTLS", "", param);
        };

        // 결산내역관리
        this.fnLseClsngDtls = function (obj,e) {
        	var objDs = this.dxGrid.getBindDataset();
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}
        	/*
        	var param = {};
        	param.CD_CORP = objDs.getColumn(objDs.rowposition, "CD_CORP");
        	param.DS_CORP = objDs.getColumn(objDs.rowposition, "DS_CORP");
        	param.CD_DEPT = objDs.getColumn(objDs.rowposition, "CD_DEPT");
        	param.DS_DEPT = objDs.getColumn(objDs.rowposition, "DS_DEPT");
        	param.NO_LSEASST = objDs.getColumn(objDs.rowposition, "NO_LSEASST");
        	param.NO_CHNG = objDs.getColumn(objDs.rowposition, "NO_CHNG");
        	param.DS_LSEASST = objDs.getColumn(objDs.rowposition, "DS_LSEASST");
        	*/
        	var pos = this.dsList.rowposition;
        	var param = {};
        	param.CD_CORP    = this.dsSearch.getColumn(0, "CD_CORP");		// 법인코드(조회조건)
        	param.DS_CORP    = this.dsSearch.getColumn(0, "DS_CORP");		// 법인명(조회조건)
        	param.CD_DEPT    = this.dsList.getColumn(pos, "CD_DEPT");		// 그리드 선택 ROW 귀속부서코드(CD_DEPT)
        	param.DS_DEPT    = this.dsList.getColumn(pos, "DS_DEPT");		// 그리드 선택 ROW 귀속부서명(DS_DEPT)
        	param.NO_LSEASST = this.dsList.getColumn(pos, "NO_LSEASST");	// 그리드 선택 ROW 자산번호(NO_LSEASST)
        	param.DS_LSEASST = this.dsList.getColumn(pos, "DS_LSEASST");	// 그리드 선택 ROW 자산명(DS_LSEASST)
        	param.NO_CHNG    = this.dsList.getColumn(pos, "NO_CHNG");		// 그리드 선택 ROW 변경차수(NO_CHNG)

        	this.gfnFormOpen("DHN", "DHN_LSECLSNGDTLS", "", param);
        };

        // 검증요청/취소
        this.fnVldtReq = function (obj,e) {
        	if(this.dsList.rowcount == 0) return false;

        	this.fnSetMsg(1);
        };

        // 검증확인/취소
        this.fnVldtCnf = function (obj,e) {
        	if(this.dsList.rowcount == 0) return false;

        	this.fnSetMsg(2);
        };

        //전표발행(자산설정)
        this.fnSlipIssueAsst = function (obj,e) {
        	if(this.dsList.rowcount == 0) return false;

        	this.fnSetMsg(3);
        };

        // 전표조회(자산설정)
        this.fnSlipSearchAsst = function (obj,e) {
        	var objDs = this.dxGrid.getBindDataset();
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};
        	param.CD_CORP = objDs.getColumn(objDs.rowposition, "CD_CORP");
        	param.DS_CORP = objDs.getColumn(objDs.rowposition, "DS_CORP");
        	param.CD_TRADE_ASST = objDs.getColumn(objDs.rowposition, "CD_TRADE_ASST");

        	this.gfnFormOpen("DHN", "", "", param);
        };

        //전표취소(자산설정)
        this.fnSlipCancelAsst = function (obj,e) {
        	if(this.dsList.rowcount == 0) return false;

        	this.fnSetMsg(4);
        };

        //변경계약생성
        this.fnLseChng = function (obj,e) {
        	if(this.dsList.rowcount == 0) return false;

        	this.fnSetMsg(5);
        };

        //중도해지
        this.fnMidTrmn = function (obj,e) {
        	if(this.dsList.rowcount == 0) return false;

        	this.fnSetMsg(6);
        };
        /************************************************************************
        * 확장버튼 그리드컬럼 설정관련
        ************************************************************************/
        this.fnBtnCheckAll = function()
        {

        	this.divData.form.divDataRight.form.tab1.Tabpage1.form.btnAttachFile.set_enable(true);
        	//this.gfnBtnCheck(this.btnAttachFile, this.dsList);		// 첨부파일관리
        	this.gfnBtnCheck(this.btnLseMlyPayDtls, this.dsList);	// 월납부내역관리
        	this.gfnBtnCheck(this.btnLseClsngDtls, this.dsList);	// 결산내역관리
        	this.gfnBtnCheck(this.btnVldtReq, this.dsList);			// 검증요청/취소
        	this.gfnBtnCheck(this.btnVldtCnf, this.dsList);			// 검증확인/취소
        	this.gfnBtnCheck(this.btnSlipIssueAsst, this.dsList);	// 전표발행(자산설정)
        	this.gfnBtnCheck(this.btnSlipSearchAsst, this.dsList);	// 전표조회(자산설정)
        	this.gfnBtnCheck(this.btnSlipCancelAsst, this.dsList);	// 전표취소(자산설정)
        	this.gfnBtnCheck(this.btnLseChng, this.dsList);			// 변경계약생성
        	this.gfnBtnCheck(this.btnMidTrmn, this.dsList);			// 중도해지
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divSearch.form.staLSEASST.addEventHandler("onclick",this.divSearch_staLSEASST_onclick,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.tab1.addEventHandler("onchanged",this.divData_divDataRight_tab1_onchanged,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staTitle01.addEventHandler("onclick",this.divData_divDataRight_staTitle01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staDS_LSEASST.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staCD_LSECLS.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staCD_LSECLSDTLS.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staCD_TRADE_ASST.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staTitle02.addEventHandler("onclick",this.divData_divDataRight_staTitle01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staCD_DEPT.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staCD_VENDOR.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staDT_LSECNTRC.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staDT_LSEFR.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.calDT_LSEFR.addEventHandler("onchanged",this.divData_divDataRight_tab1_Tabpage1_calDT_LSEFR_onchanged,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.calDT_LSETO.addEventHandler("onchanged",this.divData_divDataRight_tab1_Tabpage1_calDT_LSETO_onchanged,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staAM_LSEMLY.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staAM_DMNY.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staRT_INTRT.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staCD_ACCOUNT_ASST.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staCD_ACCOUNT_CST.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staTY_CNTRC.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.cboTY_CNTRC.addEventHandler("onitemchanged",this.divData_divDataRight_tab1_Tabpage1_cboTY_CNTRC_onitemchanged,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staDS_RMKS.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staTitle03.addEventHandler("onclick",this.divData_divDataRight_staTitle01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staTY_STATS.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staYN_LCNSASST.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staDT_MIDTRMN.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staYN_END.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.edtAM_LSETOT.addEventHandler("onchanged",this.divData_divDataRight_tab1_Tabpage1_edtAM_LSETOT_onchanged,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staCD_ACCOUNT_PAY.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.edtNO_MCNTMLY.addEventHandler("onchanged",this.divData_divDataRight_tab1_Tabpage1_edtNO_MCNTMLY_onchanged,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.staYN_MIDTRMN.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage1.form.btnAttachFile.addEventHandler("onclick",this.fnAttachFile,this);
            this.divData.form.divDataRight.form.tab1.Tabpage2.form.staTitle01.addEventHandler("onclick",this.divData_divDataRight_staTitle01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage2.form.staNO_ZIP.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage2.form.staDS_ADDRDTLS.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage2.form.staCD_CARTP.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tab1.Tabpage2.form.staNO_CAR.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHN_LSEASST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
