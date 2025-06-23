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
            this.set_titletext("분양현황관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1340,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_BUNYANG_RATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_BUILDING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_TOT\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGSA_DOGUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUILDING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUNYANG_BUILDING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MIBUNYANG_BLDG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUNYANG_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MIBUNYANG_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_TOTAL_LAND_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_BUNYANG_LAND_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_MIBUNYANG_LAND_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_TOTAL_BUILDING_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_BUNYANG_BUILDING_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_MIBUNYANG_BLDG_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_GONGSA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_GONGSA_ADJ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_GONGSA_TAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PLAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PLAN_ADJ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PLAN_TAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LAND_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LAND_ADJ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LAND_TAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_PROFIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_PROFIT_ADJ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_PROFIT_TAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_CONTRCT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_CONTRCT_ADJ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_CONTRCT_TAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_COST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_COST_ADJ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_COST_TAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YM_COST\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TOTAL_SAEDAE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_HAJA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_HAJA\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHMPR_BUNINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHMPR_PLAN_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHMPR_PLAN_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHMPR_PLAN_DELETE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DHMPR_SITEDATA_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_ACCOUNT\"/><Col id=\"CD_SITE\"/><Col id=\"DS_SITE\"/><Col id=\"TY_GUBUN\"/><Col id=\"DS_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACCOUNT","sta00:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta01:0.0","sta00:10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFDHM_SITE1");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ccfCD_SITE:0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("용지구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_GUBUN","sta02:0.0","sta00:10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFAREAGUBUN");
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","20%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("분양금액");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta01","0","sta00:10","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","sta00:10","170","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta00:10","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("세대수");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","sta00:10","458","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta05","0","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_text("총분양금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","sta02:-1","170","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_text("기분양금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta04:-1","170","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta04:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_text("미분양금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","sta04:-1","170","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta11","0","sta05:20",null,"22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_text("분양면적");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta11:10","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_text("총분양면적");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","sta11:10","170","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta14","sta13:-1","sta11:10","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_text("기분양면적");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta11:10","170","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta16","sta15:-1","sta11:10","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_text("미분양면적");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","sta11:10","170","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta18","0","sta12:20",null,"22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_text("실행예산");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta19","0","sta18:10","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta20","sta19:-1","sta18:10","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_text("집계금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta21","sta20:-1","sta18:10","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("21");
            obj.set_text("조정금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta22","sta21:-1","sta18:10","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("22");
            obj.set_text("대상금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta23","0","sta19:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("23");
            obj.set_text("공사비");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta24","sta23:-1","sta20:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta25","sta24:-1","sta21:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta26","sta25:-1","sta22:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta27","0","sta23:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("27");
            obj.set_text("사업비");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta28","sta27:-1","sta24:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta29","sta28:-1","sta25:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta30","sta29:-1","sta26:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta31","0","sta27:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("31");
            obj.set_text("용지비");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta32","sta31:-1","sta28:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta33","sta32:-1","sta29:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta34","sta33:-1","sta30:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta35","0","sta31:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("35");
            obj.set_text("기타(이익금)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta36","sta35:-1","sta32:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta37","sta36:-1","sta33:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta38","sta37:-1","sta34:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta39","0","sta35:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("39");
            obj.set_text("기타(별도게약)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta40","sta39:-1","sta36:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta41","sta40:-1","sta37:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta42","sta41:-1","sta38:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta43","0","sta39:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("43");
            obj.set_text("기타(비용)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta44","sta43:-1","sta40:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta45","sta44:-1","sta41:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta46","sta45:-1","sta42:-1","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta47","0","sta43:20",null,"22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("47");
            obj.set_text("실행예산");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta48","0","sta47:10","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("48");
            obj.set_text("비율(%)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta49","sta48:-1","sta47:10","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta50","sta49:-1","sta47:10","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("50");
            obj.set_text("금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta51","sta50:-1","sta47:10","185","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACDATE","sta01:5","sta02:-25","80","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("52");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtNO_TOTAL_SAEDAE","sta03:5","sta04:-25","160","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("53");
            obj.set_format("#,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUILDING","sta05:5","sta06:-25","160","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("54");
            obj.set_format("#,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUNYANG_BUILDING","sta07:5","sta08:-25","160","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("55");
            obj.set_format("#,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MIBUNYANG_BLDG","sta09:5","sta10:-25","160","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("56");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtSZ_TOTAL_BUILDING_AREA","sta12:5","sta13:-25","160","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("57");
            obj.set_format("#,##0.0000");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtSZ_BUNYANG_BUILDING_AREA","sta14:5","sta15:-25","160","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("58");
            obj.set_format("#,##0.0000");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtSZ_MIBUNYANG_BLDG_AREA","sta16:5","sta17:-25","160","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("59");
            obj.set_format("#,##0.0000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_GONGSA","sta23:5","sta24:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("60");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_GONGSA_ADJ","sta24:5","sta25:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("61");
            obj.set_format("#,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_GONGSA_TAR","sta25:5","sta26:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("62");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PLAN","sta27:5","sta28:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("63");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PLAN_ADJ","sta28:5","sta29:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("64");
            obj.set_format("#,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PLAN_TAR","sta29:5","sta30:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("65");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LAND_SUM","sta31:5","sta32:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("66");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LAND_ADJ","sta32:5","sta33:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("67");
            obj.set_format("#,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LAND_TAR","sta33:5","sta34:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("68");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETC_PROFIT","sta35:5","sta36:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("69");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETC_PROFIT_ADJ","sta36:5","sta37:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("70");
            obj.set_format("#,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETC_PROFIT_TAR","sta37:5","sta38:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("71");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETC_CONTRCT","sta39:5","sta40:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("72");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETC_CONTRCT_ADJ","sta40:5","sta41:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("73");
            obj.set_format("#,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETC_CONTRCT_TAR","sta41:5","sta42:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("74");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETC_COST","sta43:5","sta44:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("75");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETC_COST_ADJ","sta44:5","sta45:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("76");
            obj.set_format("#,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETC_COST_TAR","sta45:5","sta46:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("77");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_HAJA","sta48:5","sta49:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("78");
            obj.set_format("#,##0.00000");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_HAJA","sta50:5","sta51:-25","173","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("79");
            obj.set_format("#,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnCopy","760","5","100","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("80");
            obj.set_text("전월자료복사");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYM_ACCOUNT.form.TextBox","value","dsSearch","YM_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfTY_GUBUN.form.CDTextBox","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfTY_GUBUN.form.DSTextBox","value","dsSearch","DS_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.ctclYM_ACDATE.form.TextBox","value","dsList","YM_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.txtNO_TOTAL_SAEDAE","value","dsList","NO_TOTAL_SAEDAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.txtAM_BUILDING","value","dsList","AM_BUILDING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.txtAM_BUNYANG_BUILDING","value","dsList","AM_BUNYANG_BUILDING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.txtAM_MIBUNYANG_BLDG","value","dsList","AM_MIBUNYANG_BLDG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.txtSZ_TOTAL_BUILDING_AREA","value","dsList","SZ_TOTAL_BUILDING_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.txtSZ_BUNYANG_BUILDING_AREA","value","dsList","SZ_BUNYANG_BUILDING_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.txtSZ_MIBUNYANG_BLDG_AREA","value","dsList","SZ_MIBUNYANG_BLDG_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.txtAM_GONGSA","value","dsList","AM_GONGSA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.txtAM_GONGSA_ADJ","value","dsList","AM_GONGSA_ADJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.txtAM_GONGSA_TAR","value","dsList","AM_GONGSA_TAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.txtAM_PLAN","value","dsList","AM_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataRight.form.txtAM_PLAN_ADJ","value","dsList","AM_PLAN_ADJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataRight.form.txtAM_PLAN_TAR","value","dsList","AM_PLAN_TAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataRight.form.txtAM_LAND_SUM","value","dsList","AM_LAND_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataRight.form.txtAM_LAND_ADJ","value","dsList","AM_LAND_ADJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.txtAM_LAND_TAR","value","dsList","AM_LAND_TAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.txtAM_ETC_PROFIT","value","dsList","AM_ETC_PROFIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.txtAM_ETC_PROFIT_ADJ","value","dsList","AM_ETC_PROFIT_ADJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataRight.form.txtAM_ETC_PROFIT_TAR","value","dsList","AM_ETC_PROFIT_TAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataRight.form.txtAM_ETC_CONTRCT","value","dsList","AM_ETC_CONTRCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataRight.form.txtAM_ETC_CONTRCT_ADJ","value","dsList","AM_ETC_CONTRCT_ADJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataRight.form.txtAM_ETC_CONTRCT_TAR","value","dsList","AM_ETC_CONTRCT_TAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataRight.form.txtAM_ETC_COST","value","dsList","AM_ETC_COST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataRight.form.txtAM_ETC_COST_ADJ","value","dsList","AM_ETC_COST_ADJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataRight.form.txtAM_ETC_COST_TAR","value","dsList","AM_ETC_COST_TAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataRight.form.txtRT_HAJA","value","dsList","RT_HAJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataRight.form.txtAM_HAJA","value","dsList","AM_HAJA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHM_BUNINFO.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.YN_READONLY = false;

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

        	this.dsSearch.setColumn(0, "YM_ACCOUNT", this.gfnGetDate().substr(0, 6));
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnGetData = this.gfnFormButtonAdd("GetData", "fnGetData");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;

        	this.ctclYM_ACCOUNT = this.divSearch.form.ctclYM_ACCOUNT;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfTY_GUBUN = this.divSearch.form.ccfTY_GUBUN;

        	this.btnCopy = this.divData.form.divDataRight.form.btnCopy;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHM_BUNINFO");

        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("YM_ACCOUNT", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_DEPT_ACNT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("YM_ACCOUNT", "string");
        	this.dsInsert.addColumn("AM_GONGSA", "bigdecimal");
        	this.dsInsert.addColumn("AM_GONGSA_ADJ", "bigdecimal");
        	this.dsInsert.addColumn("AM_GONGSA_TAR", "bigdecimal");
        	this.dsInsert.addColumn("AM_PLAN", "bigdecimal");
        	this.dsInsert.addColumn("AM_PLAN_ADJ", "bigdecimal");
        	this.dsInsert.addColumn("AM_PLAN_TAR", "bigdecimal");
        	this.dsInsert.addColumn("AM_LAND_SUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_LAND_ADJ", "bigdecimal");
        	this.dsInsert.addColumn("AM_LAND_TAR", "bigdecimal");
        	this.dsInsert.addColumn("AM_ETC_PROFIT", "bigdecimal");
        	this.dsInsert.addColumn("AM_ETC_PROFIT_ADJ", "bigdecimal");
        	this.dsInsert.addColumn("AM_ETC_PROFIT_TAR", "bigdecimal");
        	this.dsInsert.addColumn("AM_ETC_CONTRCT", "bigdecimal");
        	this.dsInsert.addColumn("AM_ETC_CONTRCT_ADJ", "bigdecimal");
        	this.dsInsert.addColumn("AM_ETC_CONTRCT_TAR", "bigdecimal");
        	this.dsInsert.addColumn("AM_ETC_COST", "bigdecimal");
        	this.dsInsert.addColumn("AM_ETC_COST_ADJ", "bigdecimal");
        	this.dsInsert.addColumn("AM_ETC_COST_TAR", "bigdecimal");
        	this.dsInsert.addColumn("RT_HAJA", "bigdecimal");
        	this.dsInsert.addColumn("AM_HAJA", "bigdecimal");
        	this.dsInsert.addColumn("AM_BUILDING", "bigdecimal");
        	this.dsInsert.addColumn("AM_BUNYANG_BUILDING", "bigdecimal");
        	this.dsInsert.addColumn("AM_LAND", "bigdecimal");
        	this.dsInsert.addColumn("AM_BUNYANG_LAND", "bigdecimal");
        	this.dsInsert.addColumn("SZ_TOTAL_LAND_AREA", "bigdecimal");
        	this.dsInsert.addColumn("SZ_BUNYANG_LAND_AREA", "bigdecimal");
        	this.dsInsert.addColumn("SZ_TOTAL_BUILDING_AREA", "bigdecimal");
        	this.dsInsert.addColumn("SZ_BUNYANG_BUILDING_AREA", "bigdecimal");
        	this.dsInsert.addColumn("RT_BUNYANG_RATE", "bigdecimal");
        	this.dsInsert.addColumn("NO_TOTAL_SAEDAE", "bigdecimal");
        	this.dsInsert.addColumn("ID_TRANS", "string");
        	this.dsInsert.addColumn("AM_GONGSA_DOGUB", "bigdecimal");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("YM_ACCOUNT", "string");
        	this.dsUpdate.addColumn("AM_GONGSA", "bigdecimal");
        	this.dsUpdate.addColumn("AM_GONGSA_ADJ", "bigdecimal");
        	this.dsUpdate.addColumn("AM_GONGSA_TAR", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PLAN", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PLAN_ADJ", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PLAN_TAR", "bigdecimal");
        	this.dsUpdate.addColumn("AM_LAND_SUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_LAND_ADJ", "bigdecimal");
        	this.dsUpdate.addColumn("AM_LAND_TAR", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ETC_PROFIT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ETC_PROFIT_ADJ", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ETC_PROFIT_TAR", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ETC_CONTRCT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ETC_CONTRCT_ADJ", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ETC_CONTRCT_TAR", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ETC_COST", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ETC_COST_ADJ", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ETC_COST_TAR", "bigdecimal");
        	this.dsUpdate.addColumn("RT_HAJA", "bigdecimal");
        	this.dsUpdate.addColumn("AM_HAJA", "bigdecimal");
        	this.dsUpdate.addColumn("AM_BUILDING", "bigdecimal");
        	this.dsUpdate.addColumn("AM_BUNYANG_BUILDING", "bigdecimal");
        	this.dsUpdate.addColumn("AM_LAND", "bigdecimal");
        	this.dsUpdate.addColumn("AM_BUNYANG_LAND", "bigdecimal");
        	this.dsUpdate.addColumn("SZ_TOTAL_LAND_AREA", "bigdecimal");
        	this.dsUpdate.addColumn("SZ_BUNYANG_LAND_AREA", "bigdecimal");
        	this.dsUpdate.addColumn("SZ_TOTAL_BUILDING_AREA", "bigdecimal");
        	this.dsUpdate.addColumn("SZ_BUNYANG_BUILDING_AREA", "bigdecimal");
        	this.dsUpdate.addColumn("RT_BUNYANG_RATE", "bigdecimal");
        	this.dsUpdate.addColumn("NO_TOTAL_SAEDAE", "bigdecimal");
        	this.dsUpdate.addColumn("ID_TRANS", "string");
        	this.dsUpdate.addColumn("AM_GONGSA_DOGUB", "bigdecimal");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_DEPT_ACNT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("YM_ACCOUNT", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("CD_SITE", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid);
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

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        				this.dsInsert.setColumn(nrow, "YM_ACCOUNT", this.dsList.getColumn(i, "YM_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "AM_GONGSA", this.dsList.getColumn(i, "AM_GONGSA"));
        				this.dsInsert.setColumn(nrow, "AM_GONGSA_ADJ", this.dsList.getColumn(i, "AM_GONGSA_ADJ"));
        				this.dsInsert.setColumn(nrow, "AM_GONGSA_TAR", this.dsList.getColumn(i, "AM_GONGSA_TAR"));
        				this.dsInsert.setColumn(nrow, "AM_PLAN", this.dsList.getColumn(i, "AM_PLAN"));
        				this.dsInsert.setColumn(nrow, "AM_PLAN_ADJ", this.dsList.getColumn(i, "AM_PLAN_ADJ"));
        				this.dsInsert.setColumn(nrow, "AM_PLAN_TAR", this.dsList.getColumn(i, "AM_PLAN_TAR"));
        				this.dsInsert.setColumn(nrow, "AM_LAND_SUM", this.dsList.getColumn(i, "AM_LAND_SUM"));
        				this.dsInsert.setColumn(nrow, "AM_LAND_ADJ", this.dsList.getColumn(i, "AM_LAND_ADJ"));
        				this.dsInsert.setColumn(nrow, "AM_LAND_TAR", this.dsList.getColumn(i, "AM_LAND_TAR"));
        				this.dsInsert.setColumn(nrow, "AM_ETC_PROFIT", this.dsList.getColumn(i, "AM_ETC_PROFIT"));
        				this.dsInsert.setColumn(nrow, "AM_ETC_PROFIT_ADJ", this.dsList.getColumn(i, "AM_ETC_PROFIT_ADJ"));
        				this.dsInsert.setColumn(nrow, "AM_ETC_PROFIT_TAR", this.dsList.getColumn(i, "AM_ETC_PROFIT_TAR"));
        				this.dsInsert.setColumn(nrow, "AM_ETC_CONTRCT", this.dsList.getColumn(i, "AM_ETC_CONTRCT"));
        				this.dsInsert.setColumn(nrow, "AM_ETC_CONTRCT_ADJ", this.dsList.getColumn(i, "AM_ETC_CONTRCT_ADJ"));
        				this.dsInsert.setColumn(nrow, "AM_ETC_CONTRCT_TAR", this.dsList.getColumn(i, "AM_ETC_CONTRCT_TAR"));
        				this.dsInsert.setColumn(nrow, "AM_ETC_COST", this.dsList.getColumn(i, "AM_ETC_COST"));
        				this.dsInsert.setColumn(nrow, "AM_ETC_COST_ADJ", this.dsList.getColumn(i, "AM_ETC_COST_ADJ"));
        				this.dsInsert.setColumn(nrow, "AM_ETC_COST_TAR", this.dsList.getColumn(i, "AM_ETC_COST_TAR"));
        				this.dsInsert.setColumn(nrow, "RT_HAJA", this.dsList.getColumn(i, "RT_HAJA"));
        				this.dsInsert.setColumn(nrow, "AM_HAJA", this.dsList.getColumn(i, "AM_HAJA"));
        				this.dsInsert.setColumn(nrow, "AM_BUILDING", this.dsList.getColumn(i, "AM_BUILDING"));
        				this.dsInsert.setColumn(nrow, "AM_BUNYANG_BUILDING", this.dsList.getColumn(i, "AM_BUNYANG_BUILDING"));
        				this.dsInsert.setColumn(nrow, "AM_LAND", this.dsList.getColumn(i, "AM_LAND"));
        				this.dsInsert.setColumn(nrow, "AM_BUNYANG_LAND", this.dsList.getColumn(i, "AM_BUNYANG_LAND"));
        				this.dsInsert.setColumn(nrow, "SZ_TOTAL_LAND_AREA", this.dsList.getColumn(i, "SZ_TOTAL_LAND_AREA"));
        				this.dsInsert.setColumn(nrow, "SZ_BUNYANG_LAND_AREA", this.dsList.getColumn(i, "SZ_BUNYANG_LAND_AREA"));
        				this.dsInsert.setColumn(nrow, "SZ_TOTAL_BUILDING_AREA", this.dsList.getColumn(i, "SZ_TOTAL_BUILDING_AREA"));
        				this.dsInsert.setColumn(nrow, "SZ_BUNYANG_BUILDING_AREA", this.dsList.getColumn(i, "SZ_BUNYANG_BUILDING_AREA"));
        				this.dsInsert.setColumn(nrow, "RT_BUNYANG_RATE", this.dsList.getColumn(i, "RT_BUNYANG_RATE"));
        				this.dsInsert.setColumn(nrow, "NO_TOTAL_SAEDAE", this.dsList.getColumn(i, "NO_TOTAL_SAEDAE"));
        				this.dsInsert.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "AM_GONGSA_DOGUB", this.dsList.getColumn(i, "AM_GONGSA_DOGUB"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "YM_ACCOUNT", this.dsList.getColumn(i, "YM_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "AM_GONGSA", this.dsList.getColumn(i, "AM_GONGSA"));
        				this.dsUpdate.setColumn(nrow, "AM_GONGSA_ADJ", this.dsList.getColumn(i, "AM_GONGSA_ADJ"));
        				this.dsUpdate.setColumn(nrow, "AM_GONGSA_TAR", this.dsList.getColumn(i, "AM_GONGSA_TAR"));
        				this.dsUpdate.setColumn(nrow, "AM_PLAN", this.dsList.getColumn(i, "AM_PLAN"));
        				this.dsUpdate.setColumn(nrow, "AM_PLAN_ADJ", this.dsList.getColumn(i, "AM_PLAN_ADJ"));
        				this.dsUpdate.setColumn(nrow, "AM_PLAN_TAR", this.dsList.getColumn(i, "AM_PLAN_TAR"));
        				this.dsUpdate.setColumn(nrow, "AM_LAND_SUM", this.dsList.getColumn(i, "AM_LAND_SUM"));
        				this.dsUpdate.setColumn(nrow, "AM_LAND_ADJ", this.dsList.getColumn(i, "AM_LAND_ADJ"));
        				this.dsUpdate.setColumn(nrow, "AM_LAND_TAR", this.dsList.getColumn(i, "AM_LAND_TAR"));
        				this.dsUpdate.setColumn(nrow, "AM_ETC_PROFIT", this.dsList.getColumn(i, "AM_ETC_PROFIT"));
        				this.dsUpdate.setColumn(nrow, "AM_ETC_PROFIT_ADJ", this.dsList.getColumn(i, "AM_ETC_PROFIT_ADJ"));
        				this.dsUpdate.setColumn(nrow, "AM_ETC_PROFIT_TAR", this.dsList.getColumn(i, "AM_ETC_PROFIT_TAR"));
        				this.dsUpdate.setColumn(nrow, "AM_ETC_CONTRCT", this.dsList.getColumn(i, "AM_ETC_CONTRCT"));
        				this.dsUpdate.setColumn(nrow, "AM_ETC_CONTRCT_ADJ", this.dsList.getColumn(i, "AM_ETC_CONTRCT_ADJ"));
        				this.dsUpdate.setColumn(nrow, "AM_ETC_CONTRCT_TAR", this.dsList.getColumn(i, "AM_ETC_CONTRCT_TAR"));
        				this.dsUpdate.setColumn(nrow, "AM_ETC_COST", this.dsList.getColumn(i, "AM_ETC_COST"));
        				this.dsUpdate.setColumn(nrow, "AM_ETC_COST_ADJ", this.dsList.getColumn(i, "AM_ETC_COST_ADJ"));
        				this.dsUpdate.setColumn(nrow, "AM_ETC_COST_TAR", this.dsList.getColumn(i, "AM_ETC_COST_TAR"));
        				this.dsUpdate.setColumn(nrow, "RT_HAJA", this.dsList.getColumn(i, "RT_HAJA"));
        				this.dsUpdate.setColumn(nrow, "AM_HAJA", this.dsList.getColumn(i, "AM_HAJA"));
        				this.dsUpdate.setColumn(nrow, "AM_BUILDING", this.dsList.getColumn(i, "AM_BUILDING"));
        				this.dsUpdate.setColumn(nrow, "AM_BUNYANG_BUILDING", this.dsList.getColumn(i, "AM_BUNYANG_BUILDING"));
        				this.dsUpdate.setColumn(nrow, "AM_LAND", this.dsList.getColumn(i, "AM_LAND"));
        				this.dsUpdate.setColumn(nrow, "AM_BUNYANG_LAND", this.dsList.getColumn(i, "AM_BUNYANG_LAND"));
        				this.dsUpdate.setColumn(nrow, "SZ_TOTAL_LAND_AREA", this.dsList.getColumn(i, "SZ_TOTAL_LAND_AREA"));
        				this.dsUpdate.setColumn(nrow, "SZ_BUNYANG_LAND_AREA", this.dsList.getColumn(i, "SZ_BUNYANG_LAND_AREA"));
        				this.dsUpdate.setColumn(nrow, "SZ_TOTAL_BUILDING_AREA", this.dsList.getColumn(i, "SZ_TOTAL_BUILDING_AREA"));
        				this.dsUpdate.setColumn(nrow, "SZ_BUNYANG_BUILDING_AREA", this.dsList.getColumn(i, "SZ_BUNYANG_BUILDING_AREA"));
        				this.dsUpdate.setColumn(nrow, "RT_BUNYANG_RATE", this.dsList.getColumn(i, "RT_BUNYANG_RATE"));
        				this.dsUpdate.setColumn(nrow, "NO_TOTAL_SAEDAE", this.dsList.getColumn(i, "NO_TOTAL_SAEDAE"));
        				this.dsUpdate.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "AM_GONGSA_DOGUB", this.dsList.getColumn(i, "AM_GONGSA_DOGUB"));

        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        				this.dsDelete.setColumn(nrow, "YM_ACCOUNT", this.dsList.getColumn(i, "YM_ACCOUNT"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "TY_GUBUN"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfTY_GUBUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("용지구분은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		validate = false;
        	}
        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "execute") {
        		if (this.dsResult.rowcount == 0) {
        			this.gfnAlert("수주 또는 공사 시스템에 현장정보가 없습니다.");
        		}
        		else {
        			var row = this.dsList.rowposition;
        			this.dsList.setColumn(row, "AM_BUILDING", this.dsResult.getColumn(0, "AM_BUNYANG"));
        			this.dsList.setColumn(row, "AM_GONGSA", this.dsResult.getColumn(0, "AM_GONGSA"));
        			this.dsList.setColumn(row, "AM_PLAN", this.dsResult.getColumn(0, "AM_SAUPBI"));
        			this.dsList.setColumn(row, "AM_LAND_SUM", this.dsResult.getColumn(0, "AM_LAND"));
        			this.dsList.setColumn(row, "AM_ETC_PROFIT", this.dsResult.getColumn(0, "AM_ETC_PROFIT"));
        			this.dsList.setColumn(row, "AM_ETC_CONTRCT", this.dsResult.getColumn(0, "AM_OPTION"));
        			this.dsList.setColumn(row, "AM_ETC_COST", this.dsResult.getColumn(0, "AM_ETC_PROFIT"));
        		}
        	}
        	else if (svcID == "copy") {
        		if (this.dsList2.rowcount > 0) {
        			var row = this.dsList.rowposition;
        			this.dsList.setColumn(row, "NO_TOTAL_SAEDAE", this.dsList2.getColumn(0, "NO_TOTAL_SAEDAE"));
        			this.dsList.setColumn(row, "AM_BUILDING", this.dsList2.getColumn(0, "AM_BUILDING"));
        			this.dsList.setColumn(row, "AM_BUNYANG_LAND", this.dsList2.getColumn(0, "AM_BUNYANG_LAND"));
        			this.dsList.setColumn(row, "AM_LAND", this.dsList2.getColumn(0, "AM_LAND"));
        			this.dsList.setColumn(row, "AM_MIBUNYANG_LAND", this.dsList2.getColumn(0, "AM_MIBUNYANG_LAND"));
        			this.dsList.setColumn(row, "AM_MIBUNYANG_BLDG", this.dsList2.getColumn(0, "AM_MIBUNYANG_BLDG"));
        			this.dsList.setColumn(row, "AM_BUNYANG_BUILDING", this.dsList2.getColumn(0, "AM_BUNYANG_BUILDING"));
        			this.dsList.setColumn(row, "AM_GONGSA_DOGUB", this.dsList2.getColumn(0, "AM_GONGSA_DOGUB"));
        			this.dsList.setColumn(row, "SZ_MIBUNYANG_BLDG_AREA", this.dsList2.getColumn(0, "SZ_MIBUNYANG_BLDG_AREA"));
        			this.dsList.setColumn(row, "SZ_BUNYANG_LAND_AREA", this.dsList2.getColumn(0, "SZ_BUNYANG_LAND_AREA"));
        			this.dsList.setColumn(row, "SZ_TOTAL_LAND_AREA", this.dsList2.getColumn(0, "SZ_TOTAL_LAND_AREA"));
        			this.dsList.setColumn(row, "SZ_MIBUNYANG_BLDG_AREA", this.dsList2.getColumn(0, "SZ_MIBUNYANG_BLDG_AREA"));
        			this.dsList.setColumn(row, "SZ_BUNYANG_BUILDING_AREA", this.dsList2.getColumn(0, "SZ_BUNYANG_BUILDING_AREA"));
        			this.dsList.setColumn(row, "SZ_TOTAL_BUILDING_AREA", this.dsList2.getColumn(0, "SZ_TOTAL_BUILDING_AREA"));
        			this.dsList.setColumn(row, "AM_GONGSA", this.dsList2.getColumn(0, "AM_GONGSA_TAR"));
        			this.dsList.setColumn(row, "AM_GONGSA_ADJ", 0);
        			this.dsList.setColumn(row, "AM_GONGSA_TAR", this.dsList2.getColumn(0, "AM_GONGSA_TAR"));
        			this.dsList.setColumn(row, "AM_PLAN", this.dsList2.getColumn(0, "AM_PLAN_TAR"));
        			this.dsList.setColumn(row, "AM_PLAN_AJD", 0);
        			this.dsList.setColumn(row, "AM_PLAN_TAR", this.dsList2.getColumn(0, "AM_PLAN_TAR"));
        			this.dsList.setColumn(row, "AM_LAND_SUM", this.dsList2.getColumn(0, "AM_LAND_TAR"));
        			this.dsList.setColumn(row, "AM_LAND_ADJ", 0);
        			this.dsList.setColumn(row, "AM_LAND_TAR", this.dsList2.getColumn(0, "AM_LAND_TAR"));
        			this.dsList.setColumn(row, "AM_ETC_PROFIT", this.dsList2.getColumn(0, "AM_ETC_PROFIT_TAR"));
        			this.dsList.setColumn(row, "AM_ETC_PROFIT_ADJ", 0);
        			this.dsList.setColumn(row, "AM_ETC_PROFIT_TAR", this.dsList2.getColumn(0, "AM_ETC_PROFIT_TAR"));
        			this.dsList.setColumn(row, "AM_ETC_CONTRCT", this.dsList2.getColumn(0, "AM_ETC_CONTRCT_TAR"));
        			this.dsList.setColumn(row, "AM_ETC_CONTRCT_ADJ", 0);
        			this.dsList.setColumn(row, "AM_ETC_CONTRCT_TAR", this.dsList2.getColumn(0, "AM_ETC_CONTRCT_TAR"));
        			this.dsList.setColumn(row, "AM_ETC_COST", this.dsList2.getColumn(0, "AM_ETC_COST_TAR"));
        			this.dsList.setColumn(row, "AM_ETC_COST_ADJ", 0);
        			this.dsList.setColumn(row, "AM_ETC_COST_TAR", this.dsList2.getColumn(0, "AM_ETC_COST_TAR"));
        			this.dsList.setColumn(row, "RT_HAJA", this.dsList2.getColumn(0, "RT_HAJA"));
        			this.dsList.setColumn(row, "AM_HAJA", this.dsList2.getColumn(0, "AM_HAJA"));
        			this.dsList.setColumn(row, "RT_BUNYANG_RATE", this.dsList2.getColumn(0, "RT_BUNYANG_RATE"));
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        this.dsList_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		//this.gfnSetFormStatus(this, "U");

        		this.dsList.set_enableevent(false);
        		switch (e.columnid) {
        			case "RT_HAJA":
        				var amBuilding = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_BUILDING"), 0));
        				var rtHaja = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "RT_HAJA"), 0));
        				this.dsList.setColumn(e.row, "AM_HAJA", nexacro.round(amBuilding * (rtHaja / 100), 0));
        				break;
        			case "AM_BUILDING":
        				var amBuilding = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_BUILDING"), 0));
        				var rtHaja = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "RT_HAJA"), 0));
        				this.dsList.setColumn(e.row, "AM_HAJA", nexacro.round(amBuilding * (rtHaja / 100), 0));

        				//var amBuilding = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_BUILDING"));
        				var amBunyangBuilding = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_BUNYANG_BUILDING"), 0));
        				this.dsList.setColumn(e.row, "AM_MIBUNYANG_BLDG", amBuilding - amBunyangBuilding);
        				break;
        			case "AM_BUNYANG_BUILDING":
        				var amBuilding = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_BUILDING"), 0));
        				var amBunyangBuilding = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_BUNYANG_BUILDING"), 0));
        				this.dsList.setColumn(e.row, "AM_MIBUNYANG_BLDG", amBuilding - amBunyangBuilding);
        				break;
        			case "SZ_TOTAL_BUILDING_AREA":
        			case "SZ_BUNYANG_BUILDING_AREA":
        				var szTotal = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "SZ_TOTAL_BUILDING_AREA"), 0));
        				var szBunyang = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "SZ_BUNYANG_BUILDING_AREA"), 0));
        				this.dsList.setColumn(e.row, "SZ_MIBUNYANG_BLDG_AREA", szTotal - szBunyang);
        				break;
        			case "AM_GONGSA":
        			case "AM_GONGSA_ADJ":
        				var amGonsa = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_GONGSA"), 0));
        				var amGongsaAdj = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_GONGSA_ADJ"), 0));
        				this.dsList.setColumn(e.row, "AM_GONGSA_TAR", amGonsa + amGongsaAdj);
        				break;
        			case "AM_PLAN":
        			case "AM_PLAN_ADJ":
        				var amPlan = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_PLAN"), 0));
        				var amPlanAdj = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_PLAN_ADJ"), 0));
        				this.dsList.setColumn(e.row, "AM_PLAN_TAR", amPlan + amPlanAdj);
        				break;
        			case "AM_LAND_SUM":
        			case "AM_LAND_ADJ":
        				var amLand = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_LAND_SUM"), 0));
        				var amLandAdj = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_LAND_ADJ"), 0));
        				this.dsList.setColumn(e.row, "AM_LAND_TAR", amLand + amLandAdj);
        				break;
        			case "AM_ETC_PROFIT":
        			case "AM_ETC_PROFIT_ADJ":
        				var amEtc = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_ETC_PROFIT"), 0));
        				var amEtcAdj = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_ETC_PROFIT_ADJ"), 0));
        				this.dsList.setColumn(e.row, "AM_ETC_PROFIT_TAR", amEtc + amEtcAdj);
        				break;
        			case "AM_ETC_CONTRCT":
        			case "AM_ETC_CONTRCT_ADJ":
        				var amEtc = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_ETC_CONTRCT"), 0));
        				var amEtcAdj = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_ETC_CONTRCT_ADJ"), 0));
        				this.dsList.setColumn(e.row, "AM_ETC_CONTRCT_TAR", amEtc + amEtcAdj);
        				break;
        			case "AM_ETC_COST":
        			case "AM_ETC_COST_ADJ":
        				var amEtc = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_ETC_COST"), 0));
        				var amEtcAdj = nexacro.toNumber(this.gfnNvl(this.dsList.getColumn(e.row, "AM_ETC_COST_ADJ"), 0));
        				this.dsList.setColumn(e.row, "AM_ETC_COST_TAR", amEtc + amEtcAdj);
        				break;
        		}
        		this.dsList.set_enableevent(true);
        	}
        };

        this.fnGetData = function(obj,e) {
        	if (!this.fnSelectValidate()) return;

        	if (this.dsList.rowcount <= 0) {
        		this.gfnAlert("회계년월과 분양율을 선택하세요.");
        		return;
        	}

        	this.dsExecute.clearData();
        	this.dsExecute.addRow();
        	this.dsExecute.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	var strSvcId    = "execute";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
         	var inData      = "execute=dsExecute";
         	var outData     = "dsResult=execute0";
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

        this.divData_divDataRight_btnCopy_onclick = function(obj,e) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_ACCOUNT"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_ACCOUNT.form.TextBox.setFocus();
        		}
        		this.gfnAlert("회계년월은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		return;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		return;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "TY_GUBUN"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfTY_GUBUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("용지구분은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		return;
        	}

        	var strYM = this.gfnAddMonth(this.dsList.getColumn(this.dsList.rowposition, "YM_ACCOUNT") + "01", -1).substr(0, 6);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "YM_ACCOUNT", strYM);

        	var strSvcId    = "copy";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList2=select0";
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
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.addEventHandler("ondragmove",this.divDataRight_ondragmove,this);
            this.divData.form.divDataRight.form.btnCopy.addEventHandler("onclick",this.divData_divDataRight_btnCopy_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHM_BUNINFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
