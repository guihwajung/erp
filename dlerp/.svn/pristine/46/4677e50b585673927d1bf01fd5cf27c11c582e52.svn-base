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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_AFTERWORKSTATE_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DBSPR_WORKEND_INIT</Col></Row><Row><Col id=\"SP\">DBSPR_AS_PRINT</Col><Col id=\"TARGET\">report</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CUNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CTM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GBN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_WI\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_HAJA\" type=\"STRING\" size=\"256\"/><Column id=\"METHOD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUNSO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_HAJAJS\" type=\"STRING\" size=\"256\"/><Column id=\"DT_VISITPLAN_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_VISITPLAN_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"TY_SEARCH\"/><Col id=\"DS_DONG\"/><Col id=\"DS_CUNG\"/><Col id=\"DS_HO\"/><Col id=\"CD_CTM\"/><Col id=\"CD_JOB\"/><Col id=\"TY_GBN\"/><Col id=\"CD_WI\"/><Col id=\"CD_ACT\"/><Col id=\"DT_FROM\"/><Col id=\"DT_TO\"/><Col id=\"TY_HAJA\"/><Col id=\"METHOD\"/><Col id=\"CD_BUNSO\"/><Col id=\"TY_HAJAJS\"/><Col id=\"DT_VISITPLAN_FROM\"/><Col id=\"DT_VISITPLAN_TO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">0</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">완료</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">미완료</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">재접수</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMETHOD", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">0</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">고객센터</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">AS팀</Col></Row><Row><Col id=\"DS_CODE\">PDA</Col><Col id=\"CD_CODE\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_HAJA", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1년차</Col></Row><Row><Col id=\"DS_CODE\">2년차</Col><Col id=\"CD_CODE\">2</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">3년차</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">4년차</Col></Row><Row><Col id=\"CD_CODE\">5</Col><Col id=\"DS_CODE\">5년차</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10년차</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSEARCH", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">0</Col><Col id=\"DS_CODE\">동호정보</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">협력업체</Col></Row><Row><Col id=\"DS_CODE\">작업코드</Col><Col id=\"CD_CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_HAJAJS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("센터코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_BUNSO","staTY_JAJIK:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFBUNSO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_UMGB00","0.0","ccfCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboGUBUN","staTY_UMGB00:0.0","ccfCD_SITE:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsGUBUN");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSearchDong","ccboGUBUN:0.0","ccfCD_SITE:10.0","649","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK02","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("0");
            obj.set_text("동");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Div("ccfCD_DONG","staTY_JAJIK02:0.0","10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.getSetter("CodeFindName").set("DBX_CFASDONGHO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK03","ccfCD_DONG:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("2");
            obj.set_text("호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Div("ccfCD_HO","staTY_JAJIK03:0.0","10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.getSetter("CodeFindName").set("DBX_CFASDONGHO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Static("staCN_ROW","ccfCD_HO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("4");
            obj.set_text("조회건수:");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Combo("ccboTY_HAJAJS","staCN_ROW:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_HAJAJS");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK00","ccboTY_HAJAJS:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("6");
            obj.set_text("접수구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Button("btnfileimg","ccfCD_BUNSO:0.0","10.0","179","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("점검전후/완료사인 사진보기");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_UMGB02","0.0","ccfCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("접수처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboMETHOD","staTY_UMGB02:0.0","ccfCD_SITE:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsMETHOD");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSearchCtm","ccboMETHOD:0.0","ccfCD_SITE:10.0","279","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK02","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchCtm.form);
            obj.set_taborder("0");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.form.divSearchCtm.addChild(obj.name, obj);

            obj = new Div("ccfCD_CTM","staTY_JAJIK02:0.0","10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchCtm.form);
            obj.getSetter("CodeFindName").set("DBX_CFHADO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.form.divSearchCtm.addChild(obj.name, obj);

            obj = new Div("divSearchJob","divSearchCtm:0.0","ccfCD_SITE:10.0","229","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK02","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchJob.form);
            obj.set_taborder("0");
            obj.set_text("작업코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.form.divSearchJob.addChild(obj.name, obj);

            obj = new Div("ccfCD_JOB","staTY_JAJIK02:0.0","10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchJob.form);
            obj.getSetter("CodeFindName").set("DBX_CFJOB");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.form.divSearchJob.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","divSearchJob:0.0","ccfCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("유형");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_WI","staCD_CORP00:0.0","ccfCD_SITE:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFCOMM");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK00","ccfCD_WI:0.0","ccfCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboSEARCH","staTY_JAJIK00:0.0","ccfCD_SITE:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsSEARCH");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK02","ccboSEARCH:0.0","ccfCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("공종");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACT","staTY_JAJIK02:0.0","ccfCD_SITE:10.0","465","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFACT_ALL");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","ccfCD_ACT:0.0","ccfCD_SITE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclDT_FROM:0.0","ccfCD_SITE:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta00:0.0","ccfCD_SITE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT","ctclDT_TO:0.0","ccfCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_VISITPLAN_FROM","staDT:0.0","ccfCD_SITE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ctclDT_VISITPLAN_FROM:0.0","ccfCD_SITE:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_VISITPLAN_TO","sta01:0.0","ccfCD_SITE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT00","ctclDT_VISITPLAN_TO:0.0","ccfCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("완료일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_UMGB01","staDT00:0.0","ccfCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("년차");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_HAJA","staTY_UMGB01:0.0","ccfCD_SITE:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_innerdataset("dsTY_HAJA");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_visible("false");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","160",null,null,"0","0",null,null,null,null,this);
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

            obj = new BindItem("item4","divSearch.form.ccfCD_BUNSO.form.CDTextBox","value","dsSearch","CD_BUNSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboGUBUN","value","dsSearch","TY_GBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboMETHOD","value","dsSearch","METHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.divSearchDong.form.ccfCD_DONG.form.CDTextBox","value","dsSearch","DS_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.divSearchDong.form.ccfCD_HO.form.CDTextBox","value","dsSearch","DS_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.divSearchCtm.form.ccfCD_CTM.form.CDTextBox","value","dsSearch","CD_CTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.divSearchJob.form.ccfCD_JOB.form.CDTextBox","value","dsSearch","CD_JOB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_WI.form.CDTextBox","value","dsSearch","CD_WI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ccfCD_ACT.form.CDTextBox","value","dsSearch","CD_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ctclDT_VISITPLAN_TO","value","dsSearch","DT_VISITPLAN_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.ctclDT_VISITPLAN_FROM","value","dsSearch","DT_VISITPLAN_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.divSearchDong.form.ccboTY_HAJAJS","value","dsSearch","TY_HAJAJS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.ccboTY_HAJA","value","dsSearch","TY_HAJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.ccboSEARCH","value","dsSearch","TY_SEARCH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_AFTERWORKSTATE.xfdl", function() {
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

        	this.ccboGUBUN.set_index(0);
        	this.ccboMETHOD.set_index(0);
        	this.ccboTY_HAJA.set_index(0);
        	this.ccboSEARCH.set_index(0);

        	if(this.FormInfo.GR_SEARCH >= 7){
        		this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_DEPT);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.ccfCD_SITE.set_enable(false);
        	}else{
        		var toDay = this.gfnGetDate();
        		this.dsSearch.setColumn(0, "DT_FROM", this.gfnGetFirstDate(toDay));
        		this.dsSearch.setColumn(0, "DT_TO", toDay);
        	}

        	this.fnSearchGb();

        	this.fnButtonEnable();

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
        	this.btnJobHistory = this.gfnFormButtonAdd("btnJobHistory", "fnJobHistory");
        	this.btnJobPrint = this.gfnFormButtonAdd("btnJobPrint", "fnJobPrint");
        	this.btnJobEnd = this.gfnFormButtonAdd("btnJobEnd", "fnJobEnd");
        	this.btnWarnAdd = this.gfnFormButtonAdd("btnWarnAdd", "fnWarnAdd");
        	this.btnAsPrint = this.gfnFormButtonAdd("btnAsPrint", "fnAsPrint");

        	if(this.FormInfo.ID_GROUP == "0" || this.FormInfo.ID_GROUP == "2"){
        		this.btnInit = this.gfnFormButtonAdd("btnInit", "fnInit");
        	}

        	this.btnFile = this.gfnFormButtonAdd("btnFile", "fnFile");
        	this.btnRmNy = this.gfnFormButtonAdd("btnRmNy", "fnRmNy");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_BUNSO = this.divSearch.form.ccfCD_BUNSO;
        	this.ccfCD_WI = this.divSearch.form.ccfCD_WI;
        	this.ccfCD_ACT = this.divSearch.form.ccfCD_ACT;
        	this.ccboGUBUN = this.divSearch.form.ccboGUBUN;
        	this.ccboMETHOD = this.divSearch.form.ccboMETHOD;
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;
        	this.ctclDT_VISITPLAN_FROM = this.divSearch.form.ctclDT_VISITPLAN_FROM;
        	this.ctclDT_VISITPLAN_TO = this.divSearch.form.ctclDT_VISITPLAN_TO;
        	this.ccboTY_HAJA = this.divSearch.form.ccboTY_HAJA;
        	this.ccboSEARCH = this.divSearch.form.ccboSEARCH;
        	this.ccfCD_JOB = this.divSearch.form.divSearchJob.form.ccfCD_JOB;
        	this.ccfCD_CTM = this.divSearch.form.divSearchCtm.form.ccfCD_CTM;
        	this.ccfCD_DONG = this.divSearch.form.divSearchDong.form.ccfCD_DONG;
        	this.ccfCD_HO = this.divSearch.form.divSearchDong.form.ccfCD_HO;
        	this.ccboTY_HAJAJS = this.divSearch.form.divSearchDong.form.ccboTY_HAJAJS;
        	this.staCN_ROW = this.divSearch.form.divSearchDong.form.staCN_ROW;

        	this.btnfileimg = this.divSearch.form.btnfileimg;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//this.ccfCD_ACT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//this.ccfCD_BUNSO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_WI.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_ACT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CTM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_JOB.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DONG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_HO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_AFTERWORKSTATE");
        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);

        	// 그리드 글자색 변경
        	var colNO_MI_DAY = this.dxGrid.getBindCellIndex("body", "NO_MI_DAY");
        	this.dxGrid.setCellProperty( "body", colNO_MI_DAY, "cssclass", "expr:dataset.getColumn(currow, 'NO_MI_DAY')>30 && dataset.getColumn(currow, 'NO_MI_DAY')<=70 ?'blue':(dataset.getColumn(currow, 'NO_MI_DAY')>70 ?'red':'black')" );

        	// 툴팁추가
        	var colRM_NY = this.dxGrid.getBindCellIndex("body", "RM_NY");
        	this.dxGrid.setCellProperty("body", colRM_NY, "tooltiptext", "expr:RM_NY==''?'':RM_NY" );
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("TY_SEARCH", "int");
        	this.dsSelect.addColumn("DS_DONG", "string");
        	this.dsSelect.addColumn("DS_CUNG", "string");
        	this.dsSelect.addColumn("DS_HO", "string");
        	this.dsSelect.addColumn("CD_CTM", "string");
        	this.dsSelect.addColumn("CD_JOB", "string");
        	this.dsSelect.addColumn("TY_GBN", "int");
        	this.dsSelect.addColumn("CD_WI", "string");
        	this.dsSelect.addColumn("CD_UH", "string");
        	this.dsSelect.addColumn("CD_ACT", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("TY_HAJA", "string");
        	this.dsSelect.addColumn("TY_APPLY", "string");
        	this.dsSelect.addColumn("CD_BUNSO", "string");
        	this.dsSelect.addColumn("TY_HAJAJS", "string");
        	this.dsSelect.addColumn("DT_VISITPLAN_FROM", "string");
        	this.dsSelect.addColumn("DT_VISITPLAN_TO", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("CD_JOB", "string");
        	this.dsExec.addColumn("TY_UMGB", "string");
        	this.dsExec.addColumn("ID_UPDATE", "string");
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

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DS_HO")) && this.dsSearch.getColumn(0, "DS_HO") != "공용"){
        		cdCung = this.dsSearch.getColumn(0, "DS_HO").substr(0, 2); //층을 넣어둔다.
                cdHo = "0" + this.dsSearch.getColumn(0, "DS_HO").substr(2, 2); //호를 넣어 둔다.
        	}else if(this.dsSearch.getColumn(0, "DS_HO") == "공용"){
        		cdCung = "00";
                cdHo = "000";
        	}

        	var tyApply = "";

        	if( this.ccboMETHOD.index != 0){
        		tyApply = this.ccboMETHOD.index - 1;
        	}

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "TY_SEARCH", this.dsSearch.getColumn(0, "TY_SEARCH"));
        	this.dsSelect.setColumn(0, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        	this.dsSelect.setColumn(0, "DS_CUNG", cdCung);
        	this.dsSelect.setColumn(0, "DS_HO", cdHo);
        	this.dsSelect.setColumn(0, "CD_CTM", this.dsSearch.getColumn(0, "CD_CTM"));
        	this.dsSelect.setColumn(0, "CD_JOB", this.dsSearch.getColumn(0, "CD_JOB"));
        	this.dsSelect.setColumn(0, "TY_GBN", this.dsSearch.getColumn(0, "TY_GBN"));
        	this.dsSelect.setColumn(0, "CD_WI", this.dsSearch.getColumn(0, "CD_WI"));
        	this.dsSelect.setColumn(0, "CD_UH", "");
        	this.dsSelect.setColumn(0, "CD_ACT", this.dsSearch.getColumn(0, "CD_ACT"));
        	this.dsSelect.setColumn(0, "DT_FROM", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_FROM"), "-", ""));
        	this.dsSelect.setColumn(0, "DT_TO", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));
        	this.dsSelect.setColumn(0, "TY_HAJA", this.dsSearch.getColumn(0, "TY_HAJA"));
        	this.dsSelect.setColumn(0, "TY_APPLY", tyApply);
        	this.dsSelect.setColumn(0, "CD_BUNSO", this.dsSearch.getColumn(0, "CD_BUNSO"));
        	this.dsSelect.setColumn(0, "TY_HAJAJS", this.dsSearch.getColumn(0, "TY_HAJAJS"));
        	this.dsSelect.setColumn(0, "DT_VISITPLAN_FROM", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_VISITPLAN_FROM"), "-", ""));
        	this.dsSelect.setColumn(0, "DT_VISITPLAN_TO", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_VISITPLAN_TO"), "-", ""));

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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	if(this.dsSearch.getColumn(0, "TY_SEARCH") == "1"){
        		if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CTM"))) {
        			validate = false;
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.ccfCD_CTM.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("협력업체는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		}
        	}else if(this.dsSearch.getColumn(0, "TY_SEARCH") == "2"){
        		if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_JOB"))) {
        			validate = false;
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.ccfCD_JOB.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("작업코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		}
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

        		//if(this.dsList.rowcount > 0){
        		if(this.gfnGetFormStatus(this) == "X") {
        			this.staCN_ROW.set_text("조회건수: 0");

        			//this.btnfileDocu.set_enable(false);
        			//this.btnfileSign.set_enable(false);
        		}else{
        			this.staCN_ROW.set_text("조회건수: " + (this.dsList.rowcount-1).toString());	// 필터로우를 row카운트에 포함시키기때문에 -1 해준다

        			//this.btnfileDocu.set_enable(true);
        			//this.btnfileSign.set_enable(true);
        		}
        		this.divSearch.form.divSearchDong.form.resetScroll();

        		this.fnButtonEnable();

        	} else if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.fnExecMsg_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("미완료 처리되었습니다.", "fnExecMsg_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "combo") {
        		this.dsTY_HAJAJS.insertRow(0);
        		this.dsTY_HAJAJS.setColumn(0,"CD_CODE","");
        		this.dsTY_HAJAJS.setColumn(0,"DS_CODE","전체");
        		this.ccboTY_HAJAJS.set_index(0);
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

        	if(id == "ccfCD_WI") {
        		dsUserParam.setColumn(nrow, "CD_GUBUN", "S1");
        	}

        	if(id == "ccfCD_ACT") {
        		dsUserParam.setColumn(nrow, "CD_GUBUN", "S5");
        	}
        	if(id == "ccfCD_JOB") {
        		var CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        		if(this.gfnIsNull(CD_SITE)){
        			this.gfnAlert("현장코드를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "TY_UMGB", "002");
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
        		this.dsSearch.setColumn(0, "DT_FROM", arrData[0]["MIN_DT_JEOBSU"]);

        		this.ccfCD_ACT.form.fnCodeFindClear();
        		this.ccfCD_CTM.form.fnCodeFindClear();
        		this.ccfCD_JOB.form.fnCodeFindClear();
        		this.ccfCD_DONG.form.fnCodeFindClear();
        		this.ccfCD_HO.form.fnCodeFindClear();
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

        		if(e.columnid == "TY_SEARCH"){
        			this.fnSearchGb();
        		}

        		this.fnButtonEnable();
        	}
        };

        // 검색조건콤보 변경시 이벤트
        this.fnSearchGb = function() {
        	if(this.dsSearch.getColumn(0, "TY_SEARCH") == "0"){
        		this.divSearch.form.divSearchDong.set_visible(true);
        		this.divSearch.form.divSearchJob.set_visible(false);
        		this.divSearch.form.divSearchCtm.set_visible(false);

        		this.dsSearch.setColumn(0, "CD_JOB", "");
        		this.dsSearch.setColumn(0, "CD_CTM", "");
        	}else if(this.dsSearch.getColumn(0, "TY_SEARCH") == "1"){
        		this.divSearch.form.divSearchDong.set_visible(false);
        		this.divSearch.form.divSearchJob.set_visible(false);
        		this.divSearch.form.divSearchCtm.set_visible(true);

        		this.dsSearch.setColumn(0, "DS_DONG", "");
        		this.dsSearch.setColumn(0, "DS_HO", "");
        		this.dsSearch.setColumn(0, "CD_JOB", "");
        	}else if(this.dsSearch.getColumn(0, "TY_SEARCH") == "2"){
        		this.divSearch.form.divSearchDong.set_visible(false);
        		this.divSearch.form.divSearchJob.set_visible(true);
        		this.divSearch.form.divSearchCtm.set_visible(false);

        		this.dsSearch.setColumn(0, "DS_DONG", "");
        		this.dsSearch.setColumn(0, "DS_HO", "");
        		this.dsSearch.setColumn(0, "CD_CTM", "");
        	}
        };

        // 확장버튼 활성화 or 비활성화 처리
        this.fnButtonEnable = function() {
        	this.btnJobHistory.set_enable(false);
        	this.btnJobPrint.set_enable(false);
        	this.btnJobEnd.set_enable(false);
        	this.btnWarnAdd.set_enable(false);
        	this.btnAsPrint.set_enable(false);
        	this.btnInit.set_enable(false);
        	this.btnFile.set_enable(false);
        	this.btnRmNy.set_enable(false);

        	if(this.gfnGetFormStatus(this) == "Q") {
        		this.btnJobHistory.set_enable(true);
        		this.btnJobPrint.set_enable(true);
        		this.btnJobEnd.set_enable(true);
        		this.btnWarnAdd.set_enable(true);
        		this.btnAsPrint.set_enable(true);
        		this.btnInit.set_enable(true);
        		this.btnFile.set_enable(true);
        		this.btnRmNy.set_enable(true);
        	}else if(this.gfnGetFormStatus(this) == "X"){
        		this.btnWarnAdd.set_enable(true);
        	}
        };



        // 하자접수 버튼 클릭시 팝업화면 호출
        this.fnWarnAdd = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
            param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;

        	if(this.dsList.rowcount > 0){
        		var cdDong = this.dsList.getColumn(this.dsList.rowposition, "DS_DONG");
        		var cdHo = this.dsList.getColumn(this.dsList.rowposition, "DS_CUNGHO");

        		if(cdDong.length == 1){
        			cdDong = this.dsSearch.getColumn(0, "DS_DONG");
        		}
        		if(cdHo == "공용"){
        			cdHo = "공용";
        		}else if(cdHo.length == 1){
        			cdHo = this.dsSearch.getColumn(0, "DS_HO");
        		}

        		param.CD_DONG = cdDong;
        		param.CD_HO = cdHo;
        	}else{
        		param.CD_DONG = "";
        		param.CD_HO = "";
        	}

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_AFTERASRECEIPTTO", "", param);
        }


        // 작업지시서출력 버튼 클릭시 팝업화면 호출
        this.fnJobPrint = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
            param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.CD_CTM = "";
        	param.DS_CTM = "";
        	param.CD_ACT = "";
        	param.DS_ACT = "";
        	param.DT_FR = this.dsSearch.getColumn(0, "DT_FROM");
        	param.DT_TO = this.dsSearch.getColumn(0, "DT_TO");
        	param.CD_JOB = "";
        	param.CD_DONG = this.dsList.getColumn(this.dsList.rowposition, "DS_DONG");
        	param.CD_HO = this.dsList.getColumn(this.dsList.rowposition, "DS_CUNGHO");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_WORKDOCU", "", param);
        }

        // 작업완료입력 버튼 클릭시 팝업화면 호출
        this.fnJobEnd = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.CD_BUNSO = this.dsSearch.getColumn(0, "CD_BUNSO");
            param.DS_BUNSO = this.ccfCD_BUNSO.form.DSTextBox.value;
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
            param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.CD_CTM = this.dsList.getColumn(this.dsList.rowposition, "CD_CTM");
        	param.DS_CTM = this.dsList.getColumn(this.dsList.rowposition, "DS_CTM");
        	param.CD_JOB = this.dsSearch.getColumn(0, "CD_JOB");
        	param.CD_DONG = this.dsSearch.getColumn(0, "DS_DONG");
        	param.CD_HO = this.dsSearch.getColumn(0, "DS_HO");
        	param.cmbSearch = this.dsSearch.getColumn(0, "TY_SEARCH");
        	param.cmbGubun = this.ccboGUBUN.getSelectedText();
        	param.cmbGr = "000";

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_WORKEND", "fnJobEndCallback", param);
        }

        this.fnJobEndCallback =  function(svcID, val) {
        	//if(val == true) {
        	this.FormBtns.Select.click();
        	//}
        };


        // 완료확인서출력 버튼 클릭시 팝업화면 호출
        this.fnAsPrint = function(obj,e) {

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_SITE", "string");
        	this.dsReport.addColumn("NO_JOB", "string");
        	this.dsReport.addColumn("GUBUN", "string");

        	this.dsReport.clearData();
        	this.dsReport.addRow();

        	this.dsReport.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsReport.setColumn(0, "NO_JOB", this.dsList.getColumn(this.dsList.rowposition, "CD_JOB"));
        	this.dsReport.setColumn(0, "GUBUN", "N");

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
        	//var inParam 	= "params=dsReport1";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report=dsReport";
        	var reportpath  = "/db/dbs/DBS_WORKDONE.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);

        }


        // 세대별작업현황 버튼 클릭시 팝업화면 호출
        this.fnJobHistory = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.CF_CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
            param.CF_DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.CF_DS_DONG = this.dsList.getColumn(this.dsList.rowposition, "DS_DONG");
        	param.CF_DS_HO = this.dsList.getColumn(this.dsList.rowposition, "DS_CUNGHO");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen("DBU", "DBS_WORKHOUSE", "", param);
        }


        // 하자완료초기화 버튼 클릭시 팝업화면 호출
        this.fnInit = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(0, "CD_JOB", this.dsList.getColumn(this.dsList.rowposition, "CD_JOB"));
        	this.dsExec.setColumn(0, "TY_UMGB", this.dsList.getColumn(this.dsList.rowposition, "TY_UMGB"));
        	this.dsExec.setColumn(0, "ID_UPDATE", this.AuthClient.ID_USER);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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


        // 첨부파일 버튼 클릭시 팝업화면 호출
        this.fnFile = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nRow = this.dsList.rowposition;
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DB99";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"CD_SITE"), this.dsList.getColumn(nRow, "CD_JOB")];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수
        	/*
        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_ATTACH", "첨부");
        	} else {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_ATTACH", "첨부(" + val.Cnt + ")");
        	}
        	this.dsList.set_enableevent(true);
        	*/
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
        	param.RM_NY = this.dsList.getColumn(nRow, "RM_NY");

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



        // 점검전후/완료사인 사진보기 클릭 이벤트
        this.divSearch_btnfileimg_onclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
            param.CD_JOB = this.dsList.getColumn(this.dsList.rowposition, "CD_JOB");
        	param.TY_UMGB = this.dsList.getColumn(this.dsList.rowposition, "TY_UMGB");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_WORKPICPOPUP", "", param);
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
            this.divSearch.form.ccfCD_BUNSO.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.divSearchDong.form.ccfCD_DONG.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.divSearchDong.form.ccfCD_HO.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.btnfileimg.addEventHandler("onclick",this.divSearch_btnfileimg_onclick,this);
            this.divSearch.form.divSearchCtm.form.ccfCD_CTM.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.divSearchJob.form.ccfCD_JOB.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_WI.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_ACT.addEventHandler("onclick",this.Common_onclick,this);
        };
        this.loadIncludeScript("DBS_AFTERWORKSTATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
