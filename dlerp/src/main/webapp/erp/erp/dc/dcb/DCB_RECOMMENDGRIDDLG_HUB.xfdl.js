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
            this.set_titletext("참여업체선정(HUB)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCXPR_VENDOR_RECOMMEND_HDC_HUB</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCBPR_RECOMMEND_ETC_REQ_LIST_HUB_INSERT</Col></Row><Row><Col id=\"TARGET\">combo1</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DCXPR_LICCOST_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo3</Col><Col id=\"SP\">DCXPR_LICENSE_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo4</Col><Col id=\"SP\">DCXPR_CREDIT_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo5</Col><Col id=\"SP\">DCXPR_CASH_FLOW_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo6</Col><Col id=\"SP\">DCXPR_RM_GRADE_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">bid_info</Col><Col id=\"SP\">DCBPR_BID_INFO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"string\" size=\"256\"/><Column id=\"NO_BID\" type=\"string\" size=\"256\"/><Column id=\"NO_SJC\" type=\"string\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"string\" size=\"256\"/><Column id=\"DS_PRESIDENT\" type=\"string\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"string\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"string\" size=\"256\"/><Column id=\"CD_LICENSE1\" type=\"string\" size=\"256\"/><Column id=\"CD_LICENSE2\" type=\"string\" size=\"256\"/><Column id=\"CD_LICENSE3\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_00\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_01\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_02\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_03\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_04\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_05\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_06\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_07\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_08\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_09\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_10\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_11\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_12\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_13\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_14\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_15\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_16\" type=\"string\" size=\"256\"/><Column id=\"CD_REGIO_24\" type=\"string\" size=\"256\"/><Column id=\"CREDIT_GRADE\" type=\"string\" size=\"256\"/><Column id=\"CASH_FLOW_GRADE\" type=\"string\" size=\"256\"/><Column id=\"RM_GRADE\" type=\"string\" size=\"256\"/><Column id=\"CONS_ABL_AMT\" type=\"bigdecimal\" size=\"256\"/><Column id=\"WNTY_RANK_RATE\" type=\"bigdecimal\" size=\"256\"/><Column id=\"YN_REGIST\" type=\"string\" size=\"256\"/><Column id=\"YN_VENDOR_CODE\" type=\"string\" size=\"256\"/><Column id=\"SCORE\" type=\"bigdecimal\" size=\"256\"/><Column id=\"YN_CASH_RELEASE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RM_RELEASE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_REGIO_00\">00</Col><Col id=\"WNTY_RANK_RATE\">100</Col><Col id=\"YN_REGIST\">Y</Col><Col id=\"CD_REGIO_01\"/><Col id=\"CD_REGIO_02\"/><Col id=\"CD_REGIO_03\"/><Col id=\"CD_REGIO_04\"/><Col id=\"CD_REGIO_05\"/><Col id=\"CD_REGIO_06\"/><Col id=\"CD_REGIO_07\"/><Col id=\"CD_REGIO_08\"/><Col id=\"CD_REGIO_09\"/><Col id=\"CD_REGIO_10\"/><Col id=\"CD_REGIO_11\"/><Col id=\"CD_REGIO_12\"/><Col id=\"CD_REGIO_13\"/><Col id=\"CD_REGIO_14\"/><Col id=\"CD_REGIO_15\"/><Col id=\"CD_REGIO_16\"/><Col id=\"CD_REGIO_24\"/><Col id=\"YN_CASH_RELEASE\"/><Col id=\"YN_RM_RELEASE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_COSTCLASS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LICCOST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LICENSE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCREDIT_GRADE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCASH_FLOW_GRADE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRM_GRADE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_REGIST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">등록회사제외</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">등록회사만</Col></Row><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBidInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_BID","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_BID","staNO_BID:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFORDERPLAN_01");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","staDS_VENDOR:0.0","ccfCD_SITE:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_PRESIDENT","txtDS_VENDOR:0.0","ccfCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_PREGIDENT","staDS_PRESIDENT:0.0","staNO_BID:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_SJC","0.0","staDS_VENDOR:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtNO_SJC","staNO_SJC:0.0","txtDS_VENDOR:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_COSTCLASS","txtNO_SJC:0.0","staDS_VENDOR:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("부문");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_COSTCLASS","staCD_COSTCLASS:0.0","txtDS_VENDOR:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_COSTCLASS");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_LICCOST","cboCD_COSTCLASS:0.0","staDS_VENDOR:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("공종코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_LICCOST","staCD_LICCOST:0.0","txtDS_VENDOR:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_LICCOST");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM08","0.0","staNO_SJC:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("보유면허");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM09","staCD_SYSTEM08:0.0","txtNO_SJC:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("1.");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_LICENSE1","staCD_SYSTEM09:0.0","txtNO_SJC:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_LICENSE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM10","cboCD_LICENSE1:0.0","staCD_LICCOST:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("2.");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_LICENSE2","staCD_SYSTEM10:0.0","cboCD_LICCOST:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_LICENSE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM11","cboCD_LICENSE2:0.0","cboCD_LICCOST:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("3.");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_LICENSE3","staCD_SYSTEM11:0.0","staCD_LICCOST:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_LICENSE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_REGIO","0.0","staCD_SYSTEM08:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("실적위치");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_00","staCD_REGIO:0.0","cboCD_LICENSE1:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("전체");
            obj.set_truevalue("00");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_01","chkCD_REGIO_00:0.0","cboCD_LICENSE2:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("서울");
            obj.set_truevalue("01");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_02","chkCD_REGIO_01:0.0","cboCD_LICENSE2:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("부산");
            obj.set_truevalue("02");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_03","chkCD_REGIO_02:0.0","cboCD_LICENSE3:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("인천");
            obj.set_truevalue("03");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_04","chkCD_REGIO_03:0.0","cboCD_LICENSE3:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("광주");
            obj.set_truevalue("04");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_05","chkCD_REGIO_04:0.0","cboCD_LICENSE3:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("대구");
            obj.set_truevalue("05");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_06","chkCD_REGIO_05:0.0","cboCD_LICENSE3:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("대전");
            obj.set_truevalue("06");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_07","chkCD_REGIO_06:0.0","cboCD_LICENSE3:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("울산");
            obj.set_truevalue("07");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_08","chkCD_REGIO_07:0.0","cboCD_LICENSE3:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("강원");
            obj.set_truevalue("08");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_09","staCD_REGIO:0.0","chkCD_REGIO_00:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("경기");
            obj.set_truevalue("09");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_10","chkCD_REGIO_09:0.0","chkCD_REGIO_01:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("경남");
            obj.set_truevalue("10");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_11","chkCD_REGIO_10:0.0","chkCD_REGIO_02:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("경북");
            obj.set_truevalue("11");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_12","chkCD_REGIO_11:0.0","chkCD_REGIO_03:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("전남");
            obj.set_truevalue("12");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_13","chkCD_REGIO_12:0.0","chkCD_REGIO_04:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("전북");
            obj.set_truevalue("13");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_14","chkCD_REGIO_13:0.0","chkCD_REGIO_05:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("제주");
            obj.set_truevalue("14");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_15","chkCD_REGIO_14:0.0","chkCD_REGIO_06:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("충남");
            obj.set_truevalue("15");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_16","chkCD_REGIO_15:0.0","chkCD_REGIO_07:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("충북");
            obj.set_truevalue("16");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkCD_REGIO_24","chkCD_REGIO_16:0.0","chkCD_REGIO_08:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("세종");
            obj.set_truevalue("24");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCREDIT_GRADE","0.0","chkCD_REGIO_09:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("신용등급");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCREDIT_GRADE","staCREDIT_GRADE:0.0","chkCD_REGIO_09:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCREDIT_GRADE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM15","cboCREDIT_GRADE:0.0","chkCD_REGIO_10:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_text("이상");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCASH_FLOW_GRADE","staCD_SYSTEM15:0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_text("현금흐름등급");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCASH_FLOW_GRADE","staCASH_FLOW_GRADE:0.0","chkCD_REGIO_11:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCASH_FLOW_GRADE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM17","cboCASH_FLOW_GRADE:0.0","chkCD_REGIO_11:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_text("이상");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRM_GRADE","staCD_SYSTEM17:0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("46");
            obj.set_text("RM등급");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboRM_GRADE","staRM_GRADE:0.0","staCD_SITE:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("47");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsRM_GRADE");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_EXCPT","staCD_SYSTEM17:80","chkPART12:7","150","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("53");
            obj.set_text("신평사 RM 6.7등급 제외");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM18","0.0","staCREDIT_GRADE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("48");
            obj.set_text("시공능력평가액");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CON_ABILITY","staCD_SYSTEM18:0.0","cboCREDIT_GRADE:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("49");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM19","txtAM_CON_ABILITY:0.0","staCD_SYSTEM15:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("50");
            obj.set_text("이상(백만원)");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM20","staCD_SYSTEM19:0.0","staCASH_FLOW_GRADE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("51");
            obj.set_text("시공능력순위");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("txtRK_CON_ABILITY","staCD_SYSTEM20:0.0","cboCASH_FLOW_GRADE:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("52");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM21","txtRK_CON_ABILITY:0.0","cboCASH_FLOW_GRADE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("53");
            obj.set_text("% 이내");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_REGIST","staCD_SYSTEM17:0.0","cboCASH_FLOW_GRADE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("54");
            obj.set_text("등록회사");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_REGIST","staYN_REGIST:0.0","cboCASH_FLOW_GRADE:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("55");
            obj.set_innerdataset("dsYN_REGIST");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_VENDOR_CODE","cboYN_REGIST:0.0","cboCASH_FLOW_GRADE:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("거래처코드 유무");
            obj.set_truevalue("Y");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM22","0.0","staCD_SYSTEM18:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("58");
            obj.set_text("평가점수");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("txtSC_EVAL","staCD_SYSTEM22:0.0","txtAM_CON_ABILITY:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("59");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM23","txtSC_EVAL:0.0","staCD_SYSTEM19:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("60");
            obj.set_text("점이상 [가산점(최대10점)제외 점수]");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","ccfNO_BID:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("61");
            obj.set_text("조회");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM00","cboRM_GRADE:0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("61");
            obj.set_text("이상");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSave","btnSearch:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("62");
            obj.set_text("추가");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnClose","btnSave:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("63");
            obj.set_text("닫기");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_CASH_RELEASE","staCD_SYSTEM00:0.0","staCD_SITE:10.0","199","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("64");
            obj.set_text("현금흐름 D 이하 추천제한 해제");
            obj.set_truevalue("Y");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_RM_RELEASE","chkYN_VENDOR_CODE:0.0","staCD_SITE:10.0","199","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("65");
            obj.set_text("RM등급5 이하 추천제한 해제");
            obj.set_truevalue("Y");
            obj.set_visible("true");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_BID.form.CDTextBox","value","dsSearch","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.txtDS_VENDOR","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.txtDS_PREGIDENT","value","dsSearch","DS_PRESIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.txtNO_SJC","value","dsSearch","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboCD_COSTCLASS","value","dsSearch","CD_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboCD_LICCOST","value","dsSearch","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboCD_LICENSE1","value","dsSearch","CD_LICENSE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboCD_LICENSE2","value","dsSearch","CD_LICENSE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.cboCD_LICENSE3","value","dsSearch","CD_LICENSE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.chkCD_REGIO_00","value","dsSearch","CD_REGIO_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.chkCD_REGIO_01","value","dsSearch","CD_REGIO_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.chkCD_REGIO_02","value","dsSearch","CD_REGIO_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.chkCD_REGIO_03","value","dsSearch","CD_REGIO_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.chkCD_REGIO_04","value","dsSearch","CD_REGIO_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.chkCD_REGIO_05","value","dsSearch","CD_REGIO_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.chkCD_REGIO_06","value","dsSearch","CD_REGIO_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.chkCD_REGIO_07","value","dsSearch","CD_REGIO_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.chkCD_REGIO_08","value","dsSearch","CD_REGIO_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.chkCD_REGIO_09","value","dsSearch","CD_REGIO_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.chkCD_REGIO_10","value","dsSearch","CD_REGIO_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSearch.form.chkCD_REGIO_11","value","dsSearch","CD_REGIO_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divSearch.form.chkCD_REGIO_12","value","dsSearch","CD_REGIO_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divSearch.form.chkCD_REGIO_13","value","dsSearch","CD_REGIO_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divSearch.form.chkCD_REGIO_14","value","dsSearch","CD_REGIO_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divSearch.form.chkCD_REGIO_15","value","dsSearch","CD_REGIO_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divSearch.form.chkCD_REGIO_16","value","dsSearch","CD_REGIO_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divSearch.form.chkCD_REGIO_24","value","dsSearch","CD_REGIO_24");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divSearch.form.cboCREDIT_GRADE","value","dsSearch","CREDIT_GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divSearch.form.cboCASH_FLOW_GRADE","value","dsSearch","CASH_FLOW_GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divSearch.form.cboRM_GRADE","value","dsSearch","RM_GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divSearch.form.txtAM_CON_ABILITY","value","dsSearch","CONS_ABL_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divSearch.form.txtRK_CON_ABILITY","value","dsSearch","WNTY_RANK_RATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divSearch.form.cboYN_REGIST","value","dsSearch","YN_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divSearch.form.chkYN_VENDOR_CODE","value","dsSearch","YN_VENDOR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divSearch.form.txtSC_EVAL","value","dsSearch","SCORE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divSearch.form.chkYN_CASH_RELEASE","value","dsSearch","YN_CASH_RELEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divSearch.form.chkYN_RM_RELEASE","value","dsSearch","YN_RM_RELEASE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_RECOMMENDGRIDDLG_HUB.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        // 부문, 공종을 최초 조회할때를 체크를 위한 전역변수.
        this._FIRST = true;

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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().NO_BID)) {

        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        		// 코드파인드의 명칭부분은 직접 접근해서 셋팅
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		if(!this.gfnIsNull(this.getOwnerFrame().DS_SUBCON)) {
        			this.ccfNO_BID.form.DSTextBox.set_value(this.getOwnerFrame().DS_SUBCON);
        		}

        		this.ccfCD_SITE.form.fnFitToContents();
        		this.ccfNO_BID.form.fnFitToContents();

        		this.fnSelectBidInfo();
        	}
        	else
        	{
        		this._FIRST = false;
        	}
        	//this.divSearch.form.chkCD_REGIO_00.set_truevalue("00");
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        // 	this.btn1 = this.gfnFormButtonAdd("btnHUBlLink", "fnHUBlLink");
        // 	this.btn2 = this.gfnFormButtonAdd("btnReq", "fnReq");
        // 	this.btn3 = this.gfnFormButtonAdd("btnReqCancel", "fnReqCancel");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_BID = this.divSearch.form.ccfNO_BID;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_BID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCB_RECOMMEND_HDC_DC");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_BID", "string");
        	this.dsSelect.addColumn("NO_SJC", "string");
        	this.dsSelect.addColumn("DS_VENDOR", "string");
        	this.dsSelect.addColumn("DS_PRESIDENT", "string");
        	this.dsSelect.addColumn("CD_COSTCLASS", "string");
        	this.dsSelect.addColumn("CD_LICCOST", "string");
        	this.dsSelect.addColumn("CD_LICENSE1", "string");
        	this.dsSelect.addColumn("CD_LICENSE2", "string");
        	this.dsSelect.addColumn("CD_LICENSE3", "string");
        	this.dsSelect.addColumn("CD_REGIO_00", "string");
        	this.dsSelect.addColumn("CD_REGIO_01", "string");
        	this.dsSelect.addColumn("CD_REGIO_02", "string");
        	this.dsSelect.addColumn("CD_REGIO_03", "string");
        	this.dsSelect.addColumn("CD_REGIO_04", "string");
        	this.dsSelect.addColumn("CD_REGIO_05", "string");
        	this.dsSelect.addColumn("CD_REGIO_06", "string");
        	this.dsSelect.addColumn("CD_REGIO_07", "string");
        	this.dsSelect.addColumn("CD_REGIO_08", "string");
        	this.dsSelect.addColumn("CD_REGIO_09", "string");
        	this.dsSelect.addColumn("CD_REGIO_10", "string");
        	this.dsSelect.addColumn("CD_REGIO_11", "string");
        	this.dsSelect.addColumn("CD_REGIO_12", "string");
        	this.dsSelect.addColumn("CD_REGIO_13", "string");
        	this.dsSelect.addColumn("CD_REGIO_14", "string");
        	this.dsSelect.addColumn("CD_REGIO_15", "string");
        	this.dsSelect.addColumn("CD_REGIO_16", "string");
        	this.dsSelect.addColumn("CD_REGIO_24", "string");
        	this.dsSelect.addColumn("CREDIT_GRADE", "string");
        	this.dsSelect.addColumn("CASH_FLOW_GRADE", "string");
        	this.dsSelect.addColumn("RM_GRADE", "string");
        	this.dsSelect.addColumn("CONS_ABL_AMT", "bigdecimal");
        	this.dsSelect.addColumn("WNTY_RANK_RATE", "bigdecimal");
        	this.dsSelect.addColumn("YN_REGIST", "string");
        	this.dsSelect.addColumn("YN_VENDOR_CODE", "string");
        	this.dsSelect.addColumn("SCORE", "int");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("NO_SJC", "string");
        	this.dsInsert.addColumn("NO_BID", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("YN_CASH_RELEASE", "string");
        	this.dsInsert.addColumn("YN_RM_RELEASE", "string");

        	this.dsSelectInfo = new Dataset();
        	this.dsSelectInfo.addColumn("NO_BID", "string");
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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSelect.setColumn(0, "NO_SJC", this.dsSearch.getColumn(0, "NO_SJC"));
        	this.dsSelect.setColumn(0, "DS_VENDOR", this.dsSearch.getColumn(0, "DS_VENDOR"));
        	this.dsSelect.setColumn(0, "DS_PRESIDENT", this.dsSearch.getColumn(0, "DS_PRESIDENT"));
        	this.dsSelect.setColumn(0, "CD_COSTCLASS", this.dsSearch.getColumn(0, "CD_COSTCLASS"));
        	this.dsSelect.setColumn(0, "CD_LICCOST", this.dsSearch.getColumn(0, "CD_LICCOST"));
        	this.dsSelect.setColumn(0, "CD_LICENSE1", this.dsSearch.getColumn(0, "CD_LICENSE1"));
        	this.dsSelect.setColumn(0, "CD_LICENSE2", this.dsSearch.getColumn(0, "CD_LICENSE2"));
        	this.dsSelect.setColumn(0, "CD_LICENSE3", this.dsSearch.getColumn(0, "CD_LICENSE3"));
        	this.dsSelect.setColumn(0, "CD_REGIO_00", this.dsSearch.getColumn(0, "CD_REGIO_00"));
        	this.dsSelect.setColumn(0, "CD_REGIO_01", this.dsSearch.getColumn(0, "CD_REGIO_01"));
        	this.dsSelect.setColumn(0, "CD_REGIO_02", this.dsSearch.getColumn(0, "CD_REGIO_02"));
        	this.dsSelect.setColumn(0, "CD_REGIO_03", this.dsSearch.getColumn(0, "CD_REGIO_03"));
        	this.dsSelect.setColumn(0, "CD_REGIO_04", this.dsSearch.getColumn(0, "CD_REGIO_04"));
        	this.dsSelect.setColumn(0, "CD_REGIO_05", this.dsSearch.getColumn(0, "CD_REGIO_05"));
        	this.dsSelect.setColumn(0, "CD_REGIO_06", this.dsSearch.getColumn(0, "CD_REGIO_06"));
        	this.dsSelect.setColumn(0, "CD_REGIO_07", this.dsSearch.getColumn(0, "CD_REGIO_07"));
        	this.dsSelect.setColumn(0, "CD_REGIO_08", this.dsSearch.getColumn(0, "CD_REGIO_08"));
        	this.dsSelect.setColumn(0, "CD_REGIO_09", this.dsSearch.getColumn(0, "CD_REGIO_09"));
        	this.dsSelect.setColumn(0, "CD_REGIO_10", this.dsSearch.getColumn(0, "CD_REGIO_10"));
        	this.dsSelect.setColumn(0, "CD_REGIO_11", this.dsSearch.getColumn(0, "CD_REGIO_11"));
        	this.dsSelect.setColumn(0, "CD_REGIO_12", this.dsSearch.getColumn(0, "CD_REGIO_12"));
        	this.dsSelect.setColumn(0, "CD_REGIO_13", this.dsSearch.getColumn(0, "CD_REGIO_13"));
        	this.dsSelect.setColumn(0, "CD_REGIO_14", this.dsSearch.getColumn(0, "CD_REGIO_14"));
        	this.dsSelect.setColumn(0, "CD_REGIO_15", this.dsSearch.getColumn(0, "CD_REGIO_15"));
        	this.dsSelect.setColumn(0, "CD_REGIO_16", this.dsSearch.getColumn(0, "CD_REGIO_16"));
        	this.dsSelect.setColumn(0, "CD_REGIO_24", this.dsSearch.getColumn(0, "CD_REGIO_24"));
        	this.dsSelect.setColumn(0, "CREDIT_GRADE", this.dsSearch.getColumn(0, "CREDIT_GRADE"));
        	this.dsSelect.setColumn(0, "CASH_FLOW_GRADE", this.dsSearch.getColumn(0, "CASH_FLOW_GRADE"));
        	this.dsSelect.setColumn(0, "RM_GRADE", this.dsSearch.getColumn(0, "RM_GRADE"));
        	this.dsSelect.setColumn(0, "CONS_ABL_AMT", this.dsSearch.getColumn(0, "CONS_ABL_AMT"));
        	this.dsSelect.setColumn(0, "WNTY_RANK_RATE", this.dsSearch.getColumn(0, "WNTY_RANK_RATE"));
        	this.dsSelect.setColumn(0, "YN_REGIST", this.dsSearch.getColumn(0, "YN_REGIST"));
        	this.dsSelect.setColumn(0, "YN_VENDOR_CODE", this.dsSearch.getColumn(0, "YN_VENDOR_CODE"));
        	this.dsSelect.setColumn(0, "SCORE", this.dsSearch.getColumn(0, "SCORE"));

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
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	this.dsInsert.clearData();

        	var row = -1;

        	while(1)
        	{
        		row = this.dsList.findRow("YN_CHECK", "1", row+1);

        		if(row < 0) break;
        		var nrow = this.dsInsert.addRow();
        		this.dsInsert.setColumn(nrow, "NO_SJC", this.dsList.getColumn(row, "NO_SJC"));
        		this.dsInsert.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        		this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsInsert.setColumn(nrow, "YN_CASH_RELEASE", this.dsSearch.getColumn(0, "YN_CASH_RELEASE"));
        		this.dsInsert.setColumn(nrow, "YN_RM_RELEASE", this.dsSearch.getColumn(0, "YN_RM_RELEASE"));
        	};

        	if (this.dsInsert.rowcount == 0) return;


        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsInsert";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

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

        // 	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_LICENSE1")))
        // 	{
        // 		validate = false;
        //
        // 		this.gfnAlert("보유면허 1. 은 반드시 입력하십시오.");
        // 	}

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
        		if(errorCode == 0)
        		{
        			// 저장버튼 명칭을 추가로 바꾸고 화면닫기 기능 제거
        			this._closeReturn = true;
        			//this.getParentContext().close(true);
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo") {
        		if (errorCode == 0) {
        			// 초기 선택값은 아래 3가지 방법으로 가능
        			this.dsCD_COSTCLASS.insertRow(0);
        			this.dsCD_COSTCLASS.setColumn(0, "CD_CODE", "");
        			this.dsCD_COSTCLASS.setColumn(0, "DS_CODE", "전체");

        			if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_COSTCLASS")))
        			{
        				this.divSearch.form.cboCD_COSTCLASS.set_index(0);
        			}

         			this.divSearch.form.cboCD_LICENSE1.set_index(0);
        			this.divSearch.form.cboCD_LICENSE2.set_index(0);
        			this.divSearch.form.cboCD_LICENSE3.set_index(0);

         			this.divSearch.form.cboCREDIT_GRADE.set_index(0);

         			this.divSearch.form.cboCASH_FLOW_GRADE.set_index(0);

        			this.divSearch.form.cboRM_GRADE.set_index(0);
        		}
        	}
        	else if(svcID == "combo1") {
        		if (errorCode == 0) {
        			this.dsCD_LICCOST.insertRow(0);
        			this.dsCD_LICCOST.setColumn(0, "CD_CODE", "");
        			this.dsCD_LICCOST.setColumn(0, "DS_CODE", "선택");

        			if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_LICCOST")))
        			{
        				this.divSearch.form.cboCD_LICCOST.set_index(0);
        			}
        			else
        			{
        				// 가끔 bid_info 조회 후 콤보박스에 없는 값들이 존재.
        				if(this.dsCD_LICCOST.findRow("CD_CODE", this.dsSearch.getColumn(0, "CD_LICCOST")) < 0)
        				{
        					this.divSearch.form.cboCD_LICCOST.set_index(0);
        				}
        			}
        		}
        	}
        	else if(svcID == "bid_info")
        	{
        		if(this.dsBidInfo.rowcount > 0)
        		{
        			this.dsSearch.setColumn(0, "CD_COSTCLASS", this.dsBidInfo.getColumn(0, "CD_COSTCLASS"));
        			this.dsSearch.setColumn(0, "CD_LICCOST", this.dsBidInfo.getColumn(0, "CD_LICCOST"));
        			this._FIRST = false;
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        // 	if (id == "ccfCD_SITE") {
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 	}else
        	if(id == "ccfNO_BID"){
        		if(this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.value)){
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}else{
        			dsUserParam.setColumn(nrow, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.value);
        		}
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 입찰번호 초기화
        		this.ccfNO_BID.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSetCombo = function() {

        	this.dsCombo1 = new Dataset();
        	this.dsCombo1.addColumn("CD_SYSTEM", "string");
        	this.dsCombo1.addColumn("CD_TYPE", "string");

        	this.dsCombo1.addRow();
        	this.dsCombo1.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo1.setColumn(0, "CD_TYPE", "C01");

        	this.dsCombo2 = new Dataset();

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo1=dsCombo1 combo3=dsCombo2 combo4=dsCombo2 combo5=dsCombo2 combo6=dsCombo2";
        	var outData     = "dsCD_COSTCLASS=combo10 dsCD_LICENSE=combo30 dsCREDIT_GRADE=combo40 dsCASH_FLOW_GRADE=combo50 dsRM_GRADE=combo60";
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

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "CD_LICENSE1" || e.columnid == "CD_LICENSE2"|| e.columnid == "CD_LICENSE3"){
        			if(e.newvalue != ""){
        				var delrow = this.dsCD_LICENSE.findRow("CD_CODE", e.oldvalue);

        				if(delrow > 0){
        					this.dsCD_LICENSE.deleteRow(delrow);
        				}
        				var dsrow = this.dsCD_LICENSE.findRow("CD_CODE", e.newvalue);
        				var dsname = this.dsCD_LICENSE.getColumn(dsrow, "DS_CODE");
        				var nrow = this.dsCD_LICENSE.addRow();
        				this.dsCD_LICENSE.setColumn(nrow, "CD_CODE", e.newvalue);
        				this.dsCD_LICENSE.setColumn(nrow, "DS_CODE", dsname);
        			}
        		}
        		else if(e.columnid == "CD_REGIO_00")
        		{
        			if(e.oldvalue.padLeft(2,"0") == "00")
        			{
        				this.dsSearch.set_enableevent(false);
        				this.divSearch.form.chkCD_REGIO_00.set_value("00");
        				//this.dsSearch.setColumn(0, "CD_REGIO_00", "00");
        				this.dsSearch.set_enableevent(true);
        			}
        			else
        			{
        				this.dsSearch.set_enableevent(false);
        				this.fnAllRegioChkboxFalse();
        				this.dsSearch.set_enableevent(true);
        			}
        		}
        		else if(e.columnid == "CD_REGIO_01" || e.columnid == "CD_REGIO_02" || e.columnid == "CD_REGIO_03" || e.columnid == "CD_REGIO_04"
        			 || e.columnid == "CD_REGIO_05" || e.columnid == "CD_REGIO_06" || e.columnid == "CD_REGIO_07" || e.columnid == "CD_REGIO_08"
        			 || e.columnid == "CD_REGIO_09" || e.columnid == "CD_REGIO_10" || e.columnid == "CD_REGIO_11" || e.columnid == "CD_REGIO_12"
        			 || e.columnid == "CD_REGIO_13" || e.columnid == "CD_REGIO_14" || e.columnid == "CD_REGIO_15" || e.columnid == "CD_REGIO_16"
        			 || e.columnid == "CD_REGIO_24"
        			 )
        		{
        			if(this.dsSearch.getColumn(0, "CD_REGIO_00").padLeft(2,"0") == "00" && e.newvalue != "")
        			{
        				this.dsSearch.set_enableevent(false);
        				this.dsSearch.setColumn(0, "CD_REGIO_00", "");
        				this.dsSearch.set_enableevent(true);
        			}
        		}
        		else if(e.columnid == "CD_COSTCLASS")
        		{
        			this.fnSetCombo1();

        			if(this._FIRST == false)
        			{
        				this.dsSearch.setColumn(0, "CD_LICCOST", "");
        			}
        		}
        	}
        };

        this.fnAllRegioChkboxFalse = function()
        {
        	this.dsSearch.setColumn(0, "CD_REGIO_01", "");
        	this.dsSearch.setColumn(0, "CD_REGIO_02", "");
        	this.dsSearch.setColumn(0, "CD_REGIO_03", "");
        	this.dsSearch.setColumn(0, "CD_REGIO_04", "");
        	this.dsSearch.setColumn(0, "CD_REGIO_05", "");
        	this.dsSearch.setColumn(0, "CD_REGIO_06", "");
        	this.dsSearch.setColumn(0, "CD_REGIO_07", "");
        	this.dsSearch.setColumn(0, "CD_REGIO_08", "");
        	this.dsSearch.setColumn(0, "CD_REGIO_09", "");
        	this.dsSearch.setColumn(0, "CD_REGIO_10", "");
        	this.dsSearch.setColumn(0, "CD_REGIO_11", "");
        	this.dsSearch.setColumn(0, "CD_REGIO_12", "");
        	this.dsSearch.setColumn(0, "CD_REGIO_13", "");
        	this.dsSearch.setColumn(0, "CD_REGIO_14", "");
        	this.dsSearch.setColumn(0, "CD_REGIO_15", "");
        	this.dsSearch.setColumn(0, "CD_REGIO_16", "");
        	this.dsSearch.setColumn(0, "CD_REGIO_24", "");
        }

        this.fnSetCombo1 = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_BUMUN", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_BUMUN", this.dsSearch.getColumn(0, "CD_COSTCLASS"));

        	var strSvcId    = "combo1";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo2=dsCombo";
        	var outData     = "dsCD_LICCOST=combo20";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnSelectBidInfo = function()
        {
        	this.dsSelectInfo.clearData();
        	this.dsSelectInfo.addRow();

        	this.dsSelectInfo.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));

        	var strSvcId    = "bid_info";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "bid_info=dsSelectInfo";
        	var outData     = "dsBidInfo=bid_info0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.divSearch_btnClose_onclick = function(obj,e)
        {
        	if(this._closeReturn == true) {
        		this.getParentContext().close(true);
        	} else {
        		this.getParentContext().close();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.fnSelect,this);
            this.divSearch.form.btnSave.addEventHandler("onclick",this.fnSave,this);
            this.divSearch.form.btnClose.addEventHandler("onclick",this.divSearch_btnClose_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_RECOMMENDGRIDDLG_HUB.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
