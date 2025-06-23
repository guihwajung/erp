(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DHV_BUYTAXRATE");
            this.set_titletext("현장안분비율관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSummary", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSingle", this);
            obj._setContents("<ColumnInfo><Column id=\"ISSUESUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAPERF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAPERSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NOISSUESUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BLANKF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BLANKSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTALSUM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_INVOICELIST_SELECT</Col></Row><Row><Col id=\"TARGET\">summary</Col><Col id=\"SP\">DHVPR_INVOICELIST_SUMMARY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VATPROOF\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ISSUE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ISSUE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCFLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_VATPROOF", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">세금계산서</Col></Row><Row><Col id=\"CD_CODE\">B</Col><Col id=\"DS_CODE\">계산서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_ISSUE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">발행</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미발행</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VENDOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\"/></Row><Row><Col id=\"CD_CODE\">F</Col><Col id=\"DS_CODE\">일반거래처</Col></Row><Row><Col id=\"CD_CODE\">B</Col><Col id=\"DS_CODE\">금융거래처</Col></Row><Row><Col id=\"CD_CODE\">P</Col><Col id=\"DS_CODE\">개인거래처</Col></Row><Row><Col id=\"CD_CODE\">X</Col><Col id=\"DS_CODE\">기타거래처</Col></Row><Row><Col id=\"CD_CODE\">R</Col><Col id=\"DS_CODE\">관계사</Col></Row><Row><Col id=\"CD_CODE\">D</Col><Col id=\"DS_CODE\">부서</Col></Row><Row><Col id=\"CD_CODE\">S</Col><Col id=\"DS_CODE\">사번</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ISSUE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">P</Col><Col id=\"DS_CODE\">종이</Col></Row><Row><Col id=\"CD_CODE\">B</Col><Col id=\"DS_CODE\">백지</Col></Row><Row><Col id=\"CD_CODE\">E</Col><Col id=\"DS_CODE\">전자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPROCFLAG", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">발행</Col></Row><Row><Col id=\"CD_CODE\">50</Col><Col id=\"DS_CODE\">개봉</Col></Row><Row><Col id=\"CD_CODE\">60</Col><Col id=\"DS_CODE\">반려</Col></Row><Row><Col id=\"CD_CODE\">80</Col><Col id=\"DS_CODE\">완료</Col></Row><Row><Col id=\"CD_CODE\">81</Col><Col id=\"DS_CODE\">폐기요청</Col></Row><Row><Col id=\"CD_CODE\">88</Col><Col id=\"DS_CODE\">강제승인</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SELFACNT","sta00:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SELFACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("증빙구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_VATPROOF","sta01:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_VATPROOF");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ccboCD_VATPROOF:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("증빙기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FR","sta02:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","ctclDT_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_WORK:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","ctclDT_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("발행여부");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_ISSUE","sta03:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_ISSUE");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("회계단위");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","sta04:0.0","sta00:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT_BY_SELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta05","ccfCD_DEPT_ACNT:0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_VENDOR","sta05:0.0","sta00:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_VENDOR");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","ccboTY_VENDOR:0.0","sta00:10.0","315","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta06","ccfCD_VENDOR:0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("발행구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_ISSUE","sta06:0.0","sta00:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_ISSUE");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboPROCFLAG","ccboTY_ISSUE:0.0","sta00:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsPROCFLAG");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","200",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDetail","0",null,null,"190","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","80","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","0","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("발행");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","0","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("개봉");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","0","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("완료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","0","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("강제승인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","0","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("반려");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","0","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("폐기요청");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","0","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","0","80","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_background("#cccccc");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","0","80","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("종합정보");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","0","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg00","0","sta00:-1","80","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg01","staBg00:-1","sta01:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg02","staBg01:-1","sta02:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg03","staBg02:-1","sta03:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg04","staBg03:-1","sta04:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg05","staBg04:-1","sta05:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg06","staBg05:-1","sta06:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg07","staBg06:-1","sta07:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta11","staBg07:-1","sta08:-1","80","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_background("#cccccc");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta12","sta11:-1","sta09:-1","80","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("발행");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg08","sta12:-1","sta10:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta13","0","staBg00:-1","80","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("종이");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg09","sta13:-1","staBg01:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg10","staBg09:-1","staBg02:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg11","staBg10:-1","staBg03:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg12","staBg11:-1","staBg04:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg13","staBg12:-1","staBg05:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg14","staBg13:-1","staBg06:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg15","staBg14:-1","staBg07:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta14","staBg15:-1","sta11:-1","80","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_background("#cccccc");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta12:-1","80","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_text("미발행");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg16","sta15:-1","staBg08:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta16","0","sta13:-1","80","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_text("백지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg17","sta16:-1","staBg09:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg18","staBg17:-1","staBg10:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg19","staBg18:-1","staBg11:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg20","staBg19:-1","staBg12:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg21","staBg20:-1","staBg13:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg22","staBg21:-1","staBg14:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg23","staBg22:-1","staBg15:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta17","staBg23:-1","sta14:-1","80","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("41");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_background("#cccccc");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta18","sta17:-1","sta15:-1","80","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("42");
            obj.set_text("발행");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg24","sta18:-1","staBg16:-1","100","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtIssueSum","sta12:4","sta10:3","90","20",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtPaperF","staBg09:4","staBg02:3","90","20",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtPaperSum","staBg14:4","staBg07:3","90","20",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("46");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtNoIssueSum","935","staBg08:3","90","20",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("47");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtBlankF","staBg17:4","staBg10:3","90","20",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtBlankSum","staBg22:4","staBg15:3","90","20",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtTotalSum","sta18:4","staBg16:3","90","20",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("50");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SELFACNT.form.CDTextBox","value","dsSearch","CD_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SELFACNT.form.DSTextBox","value","dsSearch","DS_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboCD_VATPROOF","value","dsSearch","CD_VATPROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_FR","value","dsSearch","DT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboYN_ISSUE","value","dsSearch","YN_ISSUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_DEPT_ACNT.form.DSTextBox","value","dsSearch","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccboTY_VENDOR","value","dsSearch","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_VENDOR.form.DSTextBox","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccboTY_ISSUE","value","dsSearch","TY_ISSUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ccboPROCFLAG","value","dsSearch","PROCFLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.txtIssueSum","value","dsSingle","ISSUESUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.txtPaperF","value","dsSingle","PAPERF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.txtPaperSum","value","dsSingle","PAPERSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDetail.form.txtNoIssueSum","value","dsSingle","NOISSUESUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDetail.form.txtBlankF","value","dsSingle","BLANKF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divDetail.form.txtBlankSum","value","dsSingle","BLANKSUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divDetail.form.txtTotalSum","value","dsSingle","TOTALSUM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_EBILL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWA_SILHENG_onload = function(obj,e)
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

        	this.dsSearch.setColumn(0, "DT_FR", this.gfnGetDate().substr(0, 6)+"01");
        	this.dsSearch.setColumn(0, "DT_TO", this.gfnGetDate());
        	this.dsSearch.setColumn(0, "CD_VATPROOF", "%");
        	this.dsSearch.setColumn(0, "YN_ISSUE", "%");
        	this.dsSearch.setColumn(0, "TY_VENDOR", "");
        	this.dsSearch.setColumn(0, "TY_ISSUE", "%");
        	this.dsSearch.setColumn(0, "PROCFLAG", "%");
        	this.dsSearch.setColumn(0, "CD_SELFACNT", this.UserInfo.CD_DEPT_SELFACNT);
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SELFACNT")))
        		this.ccfCD_SELFACNT.form.fnCodeFindLoad();

        	this.NoSjc = "";
        };

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
        	this.btnIssueBill = this.gfnFormButtonAdd("IssueBill", "fnIssueBill");
        	this.btnVatDetail = this.gfnFormButtonAdd("VatDetail", "fnVatDetail");
        	this.btnSlipDetail = this.gfnFormButtonAdd("SlipDetail", "fnSlipDetail");
        	this.btnBillDetail = this.gfnFormButtonAdd("BillDetail", "fnBillDetail");
        	this.btnBillHistory = this.gfnFormButtonAdd("BillHistory", "fnBillHistory");
        	this.btnLogisBill = this.gfnFormButtonAdd("LogisBill", "fnLogisBill");
        	this.btnSelectBill = this.gfnFormButtonAdd("SelectBill", "fnSelectBill");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SELFACNT = this.divSearch.form.ccfCD_SELFACNT;
        	this.ccboCD_VATPROOF = this.divSearch.form.ccboCD_VATPROOF;
        	this.ctclDT_FR = this.divSearch.form.ctclDT_FR;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;
        	this.ccboYN_ISSUE = this.divSearch.form.ccboYN_ISSUE;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ccboTY_VENDOR = this.divSearch.form.ccboTY_VENDOR;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.ccboTY_ISSUE = this.divSearch.form.ccboTY_ISSUE;
        	this.ccboPROCFLAG = this.divSearch.form.ccboPROCFLAG;
        	this.sta06 = this.divSearch.form.sta06;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_EBILL");

        	this.ccfCD_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SELFACNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("CD_VATPROOF", "string");
        	this.dsSelect.addColumn("DT_FR", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("YN_ISSUE", "string");
        	this.dsSelect.addColumn("TY_ISSUE", "string");
        	this.dsSelect.addColumn("PROCFLAG", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_SELFACNT"));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "CD_VATPROOF", this.dsSearch.getColumn(0, "CD_VATPROOF"));
        	this.dsSelect.setColumn(0, "DT_FR", this.dsSearch.getColumn(0, "DT_FR"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "YN_ISSUE", this.dsSearch.getColumn(0, "YN_ISSUE"));
        	this.dsSelect.setColumn(0, "TY_ISSUE", this.dsSearch.getColumn(0, "TY_ISSUE"));
        	this.dsSelect.setColumn(0, "PROCFLAG", this.dsSearch.getColumn(0, "PROCFLAG"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

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

        this.fnSelectSummary = function() {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_SELFACNT"));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "CD_VATPROOF", this.dsSearch.getColumn(0, "CD_VATPROOF"));
        	this.dsSelect.setColumn(0, "DT_FR", this.dsSearch.getColumn(0, "DT_FR"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "YN_ISSUE", this.dsSearch.getColumn(0, "YN_ISSUE"));
        	this.dsSelect.setColumn(0, "TY_ISSUE", this.dsSearch.getColumn(0, "TY_ISSUE"));
        	this.dsSelect.setColumn(0, "PROCFLAG", this.dsSearch.getColumn(0, "PROCFLAG"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

        	var strSvcId    = "summary";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "summary=dsSelect";
        	var outData     = "dsSummary=summary0";
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
        this.fnValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SELFACNT"))) {
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SELFACNT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}
        	else if (!this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FR")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))) {
        		if (this.dsSearch.getColumn(0, "DT_FR").substr(0, 4) != this.dsSearch.getColumn(0, "DT_TO").substr(0, 4)) {
        			this.fnVaidateCallback = function() {
        				this.ctclDT_FR.setFocus();
        			}
        			this.gfnAlert("회계일자의 범위는 같은 회기중으로 입력하셔야 합니다.","fnVaidateCallback");
        			return false;
        		}
        		if (nexacro.toNumber(this.dsSearch.getColumn(0, "DT_FR")) > nexacro.toNumber(this.dsSearch.getColumn(0, "DT_TO"))) {
        			this.fnVaidateCallback = function() {
        				this.ctclDT_FR.setFocus();
        			}
        			this.gfnAlert("조회시작일이 조회종료일보다 클 수 없습니다.","fnVaidateCallback");
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
        		this.gfnGridAfterSelect(this.dxGrid);

        		if (this.dsList.rowcount > 0) {
        			this.btnVatDetail.set_enable(true);
        			this.btnSlipDetail.set_enable(true);
        		}

        		if (this.dsList.rowcount > 0) {
        			this.fnSelectSummary();
        		}
        	}
        	else if (svcID == "summary") {
        		if (this.dsSummary.rowcount > 0) {
        			var flag10 = 0;
        			var flag50 = 0;
        			var flag60 = 0;
        			var flag80 = 0;
        			var flag81 = 0;
        			var flag88 = 0;

        			this.dsSingle.clearData();
        			this.dsSingle.addRow();
        			for (var i=0; i<this.dsSummary.rowcount; i++) {
        				if (this.dsSummary.getColumn(i, "YN_ISSUE") == "N") {
        					this.dsSingle.setColumn(0, "NOISSUESUM", this.dsSummary.getColumn(i, "CT_ISSUE"));
        				}
        				else {
        					switch (this.dsSummary.getColumn(i, "TY_ISSUE")) {
        						case "B":
        							this.dsSingle.setColumn(0, "BLANKF", this.dsSummary.getColumn(i, "CT_ISSUE"));
        							this.dsSingle.setColumn(0, "BLANKSUM", this.dsSummary.getColumn(i, "CT_ISSUE"));
        							break;
        						case "P":
        							this.dsSingle.setColumn(0, "PAPERF", this.dsSummary.getColumn(i, "CT_ISSUE"));
        							this.dsSingle.setColumn(0, "PAPERSUM", this.dsSummary.getColumn(i, "CT_ISSUE"));
        							break;
        						default:
        							switch (this.dsSummary.getColumn(i, "PROCFLAG")) {
        								case "10":
        									flag10 = this.dsSummary.getColumn(i, "CT_ISSUE");
        									break;
        								case "50":
        									flag50 = this.dsSummary.getColumn(i, "CT_ISSUE");
        									break;
        								case "60":
        									flag60 = this.dsSummary.getColumn(i, "CT_ISSUE");
        									break;
        								case "80":
        									flag80 = this.dsSummary.getColumn(i, "CT_ISSUE");
        									break;
        								case "81":
        									flag81 = this.dsSummary.getColumn(i, "CT_ISSUE");
        									break;
        								case "88":
        									flag88 = this.dsSummary.getColumn(i, "CT_ISSUE");
        									break;
        							}
        							break;
        					}
        				}
        			}

        			this.dsSingle.setColumn(0, "ISSUESUM", (flag10 + flag60 + flag80 + flag81 + flag88) + this.dsSingle.getColumn(0, "BLANKSUM") + this.dsSingle.getColumn(0, "PAPERSUM"));
        			this.dsSingle.setColumn(0, "TOTALSUM", this.dsSingle.getColumn(0, "ISSUESUM") + this.dsSingle.getColumn(0, "NOISSUESUM"));
        		}
        	}

        	else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "execute") {
        		if (errorCode == 0) {
        			this.fnExecute_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("자료이관 작업이 완료되었습니다.", "fnExecute_callback");
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SELFACNT") {
        		dsUserParam.setColumn(nrow, "LV_DEPT", "");
        	}
        	else if (id == "ccfCD_DEPT_ACNT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_SELFACNT"));
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "");
        	}
        	else if (id == "ccfCD_VENDOR") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR", this.dsSearch.getColumn(0, "TY_VENDOR"));
        		dsUserParam.setColumn(nrow, "CD_DEPT_REF", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        		dsUserParam.setColumn(nrow, "ORIGENTTAX", "");
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if (id == "ccfCD_SELFACNT") {
        		this.dsSearch.setColumn(0, "CD_DEPT_ACNT", "");
        		this.dsSearch.setColumn(0, "DS_DEPT_ACNT", "");

        		if (arr.length > 0) {
        			this.NoSjc = arr[0]["NO_SJC"];
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e) {
        	if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		if (this.dsList.getColumn(e.row, "YN_ISSUE") == "미발행" && this.dsList.getColumn(e.row, "YN_ISSUE") == "정발행")
        			this.btnIssueBill.set_enable(true);
        		else
        			this.btnIssueBill.set_enable(false);

        		if (this.dsList.getColumn(e.row, "YN_ISSUE") != "미발행")
        			this.btnBillDetail.set_enable(true);
        		else
        			this.btnBillDetail.set_enable(false);

        		if (this.dsList.getColumn(e.row, "TY_DEL") == "삭제")
        			this.btnBillHistory.set_enable(true);
        		else
        			this.btnBillHistory.set_enable(false);

        		obj.oldrow = -1;
        	}

        };

        this.dxGrid_oncelldblclick = function(obj,e) {
        	this.fnVatOpen("S"
        				, nexacro.replaceAll(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"), "-", "")
        				, this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "NO_VAT"))
        				, "Y");
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.dsSingle.clearData();

        		switch(e.columnid) {
        			case "YN_ISSUE":
        				if (e.newvalue == "Y") {
        					this.ccboTY_ISSUE.set_visible(true);
        					this.ccboPROCFLAG.set_visible(true);
        					this.sta06.set_visible(true);
        					this.dsSearch.setColumn(0, "TY_ISSUE", "P");
        				}
        				else {
        					this.ccboTY_ISSUE.set_visible(false);
        					this.ccboPROCFLAG.set_visible(false);
        					this.sta06.set_visible(false);
        				}
        				break;
        		}

        		this.btnIssueBill.set_enable(false);
        		this.btnVatDetail.set_enable(false);
        		this.btnSlipDetail.set_enable(false);
        		this.btnBillDetail.set_enable(false);
        		this.btnBillHistory.set_enable(false);

        	}
        };

        //종이발행
        this.fnIssueBill = function(obj,e) {
        	if (this.dsList.rowcount == 0)
        		this.fnDetailOpen("B");
        	else
        		this.fnDetailOpen("I");
        };

        //부가세 상세조회
        this.fnVatDetail = function(obj,e) {
        	this.fnVatOpen("S"
        				, nexacro.replaceAll(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"), "-", "")
        				, this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "NO_VAT"))
        				, "Y");
        };

        //전표조회
        this.fnSlipDetail = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	var param = {};
        	param.CD_TRADE = nexacro.replaceAll(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"), "-", "").substr(0, 20);
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };

        //상세정보
        this.fnBillDetail = function(obj,e) {
        	this.fnDetailOpen("S");
        };

        //삭제내역조회
        this.fnBillHistory = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	var param = {};
        	param.NO_VAT = this.dsList.getColumn(this.dsList.rowposition, "NO_VAT");
        	param.CD_SLIP = this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_EBILL_HIST", "", param);
        };

        //LogisBill
        this.fnLogisBill = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	var url = "http://www.logisbill.com/swf/New_Link_Controller.jsp?CMD=L&JOB=T&FLOW=S&EDI_ID=&S_NO=6098166870&S_NO_R=&S_ID="
        			+ this.dsList.getColumn(this.dsList.rowposition, "ID_LOGISBILL") + "&S_PW="
        			+ this.dsList.getColumn(this.dsList.rowposition, "PASS_LOGISBILL") + "&R_NO=6098166870&R_NO_R=&TAX_NO=&NAME=&MAIL=s";
        	window.open(url);
        };

        //전자세금계산서조회
        this.fnSelectBill = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	var url = "http://www.logisbill.com/swf/New_Link_Controller.jsp?CMD=V&JOB=T&FLOW=S&EDI_ID=&S_NO=&S_NO_R=&S_ID="
        			+ this.dsList.getColumn(this.dsList.rowposition, "ID_LOGISBILL") + "&S_PW="
        			+ this.dsList.getColumn(this.dsList.rowposition, "PASS_LOGISBILL") + "&R_NO=6098166870&R_NO_R=&TAX_NO="
        			+ this.dsList.getColumn(this.dsList.rowposition, "NO_VAT") + "000&NAME=&MAIL=";
        	window.open(url);
        };


        this.fnDetailOpen = function(iudFlag) {
        	var r = this.dsList.rowposition;

        	var param = {};
        	param.IUD_FLAG = iudFlag;
        	param.CD_SELFACNT = this.dsSearch.getColumn(0, "CD_SELFACNT");
        	param.DS_SELFACNT = this.dsSearch.getColumn(0, "DS_SELFACNT");
        	param.NO_SJC = this.NoSjc;
        	param.YY_MAGAM = this.dsSearch.getColumn(0, "DT_FR").substr(0, 4);

        	if (this.dsList.getColumn(r, "TY_ISSUE") == "백지")
        		param.YN_BLANK = "백지발행";
        	else {
        		param.YN_BLANK = "정상발행";
        		param.DT_PROOF = this.dsList.getColumn(r, "TY_ISSUE");
        	}

        	param.YN_RECEIPT = this.gfnIsNull(this.dsList.getColumn(r, "YN_RECEIPT")) ? "영수" : this.dsList.getColumn(r, "YN_RECEIPT");

        	param.CD_VENDOR = this.dsList.getColumn(r, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(r, "DS_VENDOR");
        	param.AM_SUPPLY = this.dsList.getColumn(r, "AM_SUPPLY");
        	param.AM_VAT = this.dsList.getColumn(r, "AM_VAT");
        	param.DS_REM = this.dsList.getColumn(r, "DS_REM");
        	param.NO_VAT = this.dsList.getColumn(r, "NO_VAT");

        	if (iudFlag != "S") {
        		param.TAXNO = this.dsList.getColumn(r, "CD_VATPROOF");	// == "세금계산서" ? "A" : "B";
        		param.NO_SEQ = "";
        	}
        	else {
        		param.NO_GUN = this.dsList.getColumn(r, "NO_GUN");
        		param.NO_SEQ = this.dsList.getColumn(r, "NO_SEQ");
        	}
        	param.CD_DEPT_ACNT = this.dsList.getColumn(r, "CD_DEPT_ACNT");
        	param.DS_DEPT_ACNT = this.dsList.getColumn(r, "DS_DEPT_ACNT");

        	param.TY_VENDOR = this.dsList.getColumn(r, "TY_VENDOR") == "" ? "F" : this.dsList.getColumn(r, "TY_VENDOR");
        	param.TY_VATPROOF = this.dsList.getColumn(r, "CD_VATPROOF");
        	param.CD_SLIP = this.dsList.getColumn(r, "CD_SLIP");
        	param.INVDATE = this.dsList.getColumn(r, "INVDATE");
        	param.INVSEQ = this.dsList.getColumn(r, "INVSEQ");
        	param.DS_TAXDAMDANG = this.dsList.getColumn(r, "DS_TAXDAMDANG");
        	param.ID_TAXEMAIL = this.dsList.getColumn(r, "ID_TAXEMAIL");
        	param.TY_ISSUE = this.dsList.getColumn(r, "TY_ISSUE");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_PBILLDETAIL2", "", param);
        }

        this.fnVatOpen = function(iudFlag, noSlip, noVat, ynDirect) {
        	var param = {};
        	param.IUD_FLAG = iudFlag;
        	param.NO_VAT = noVat;
        	param.CD_SLIP = noSlip;
        	param.TY_SALEBUY = "O";
        	param.YN_DIRECT = ynDirect;
        	param.CD_CORP = this.AuthClient.CD_CORP;
        	param.VAT_MENU = "Y";
        	param.CD_DEPT = "";
        	param.DS_DEPT = "";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_ISSUEVATDLG", "", param);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_EBILL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
