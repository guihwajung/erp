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
            this.set_titletext("자체공사관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectBunInfo1</Col><Col id=\"SP\">DHMPR_BUNINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">saveBunInfo1</Col><Col id=\"SP\">DHMPR_PLAN_SAVE</Col></Row><Row><Col id=\"TARGET\">selectBunInfo2</Col><Col id=\"SP\">DHMPR_PLAN2_SELECT</Col></Row><Row><Col id=\"TARGET\">saveBunInfo2</Col><Col id=\"SP\">DHMPR_PLAN2_SAVE</Col></Row><Row><Col id=\"TARGET\">selectBunCostMng1</Col><Col id=\"SP\">DHMPR_BUNCOSTMNG_SELECT</Col></Row><Row><Col id=\"TARGET\">selectProgCost1</Col><Col id=\"SP\">DHMPR_PROGCOST_SELECT</Col></Row><Row><Col id=\"TARGET\">selectAreaCost1</Col><Col id=\"SP\">DHMPR_BUNCOSTMNG_AREA_SELECT</Col></Row><Row><Col id=\"TARGET\">selectProgArea1</Col><Col id=\"SP\">DHMPR_PROGAREA_SELECT</Col></Row><Row><Col id=\"TARGET\">selectProgArea2</Col><Col id=\"SP\">DHMPR_PROGRATE_SELECT</Col></Row><Row><Col id=\"TARGET\">issueslip</Col><Col id=\"SP\">DHMPR_ALL_AUTOSLIP_ISSUE</Col></Row><Row><Col id=\"TARGET\">cancelslip</Col><Col id=\"SP\">DHMPR_ALL_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHMPR_CREATE_ALL</Col></Row><Row><Col id=\"TARGET\">selectSelling</Col><Col id=\"SP\">DHMPR_SELLING_SELECT</Col></Row><Row><Col id=\"TARGET\">selectBunInfoCopy</Col><Col id=\"SP\">DHMPR_BUNINFO_COPY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"YM_ACCOUNT\"/><Col id=\"CD_SITE\"/><Col id=\"DS_SITE\"/><Col id=\"TY_GUBUN\"/><Col id=\"DS_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBunInfoList1", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_BUNYANG_RATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_BUILDING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_TOT\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGSA_DOGUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUILDING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUNYANG_BUILDING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MIBUNYANG_BLDG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUNYANG_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MIBUNYANG_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_TOTAL_LAND_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_BUNYANG_LAND_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_MIBUNYANG_LAND_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_TOTAL_BUILDING_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_BUNYANG_BUILDING_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_MIBUNYANG_BLDG_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_GONGSA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_GONGSA_ADJ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_GONGSA_TAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PLAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PLAN_ADJ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PLAN_TAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LAND_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LAND_ADJ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LAND_TAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_PROFIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_PROFIT_ADJ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_PROFIT_TAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_CONTRCT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_CONTRCT_ADJ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_CONTRCT_TAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_COST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_COST_ADJ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC_COST_TAR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YM_COST\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TOTAL_SAEDAE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_HAJA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_HAJA\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBunInfoList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBunCostMngList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgCostList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAreaCostList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgAreaList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgAreaList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSellingList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","278","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFDHM_SITE1");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_ACCOUNT","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACCOUNT","staYM_ACCOUNT:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ctclYM_ACCOUNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("용지구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_GUBUN","staTY_GUBUN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFAREAGUBUN");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("분양현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divDataBunInfo","4","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("0");
            obj.set_text("분양금액");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta01","0","sta00:10","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("3");
            obj.set_text("세대수");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","sta00:10","170","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta00:10","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("5");
            obj.set_text("분양율  (%)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","sta00:10","170","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta20","sta04:-1","sta00:10","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("5");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta21","sta20:-1","sta00:10","170","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta05","0","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("7");
            obj.set_text("총분양금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","sta02:-1","170","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("9");
            obj.set_text("기분양금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta04:-1","170","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta04:-1","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("11");
            obj.set_text("미분양금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","sta04:-1","170","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta11","0","sta05:20",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("13");
            obj.set_text("분양면적");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta11:10","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("14");
            obj.set_text("총분양면적");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","sta11:10","170","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta14","sta13:-1","sta11:10","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("16");
            obj.set_text("기분양면적");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta11:10","170","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta16","sta15:-1","sta11:10","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("18");
            obj.set_text("미분양면적");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","sta11:10","170","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta18","0","sta12:20",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("20");
            obj.set_text("실행예산");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new MaskEdit("txtNO_TOTAL_SAEDAE","sta01:5","sta02:-25","160","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("27");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_BUNYANG_RATE","sta03:5","sta04:-25","160","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("34");
            obj.set_format("#,##0");
            obj.set_enable("false");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACDATE","sta20:5","sta04:-25","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("26");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUILDING","sta05:5","sta06:-25","160","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("28");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUNYANG_BUILDING","sta07:5","sta08:-25","160","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("29");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MIBUNYANG_BLDG","sta09:5","sta10:-25","160","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("30");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new MaskEdit("txtSZ_TOTAL_BUILDING_AREA","sta12:5","sta13:-25","160","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("31");
            obj.set_format("#,##0.0000");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new MaskEdit("txtSZ_BUNYANG_BUILDING_AREA","sta14:5","sta15:-25","160","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("32");
            obj.set_format("#,##0.0000");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new MaskEdit("txtSZ_MIBUNYANG_BLDG_AREA","sta16:5","sta17:-25","160","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("33");
            obj.set_format("#,##0.0000");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Grid("objGridBunInfo1","0","sta18:1",null,"0","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Grid("objGridBunInfo2","0","objGridBunInfo1:5",null,null,"0","77",null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta47","0","objGridBunInfo2:10",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("21");
            obj.set_text("실행예산");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta48","0","sta47:10","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("22");
            obj.set_text("비율(%)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta49","sta48:-1","sta47:10","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta50","sta49:-1","sta47:10","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("24");
            obj.set_text("금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Static("sta51","sta50:-1","sta47:10","185","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_HAJA","sta48:5","sta49:-25","173","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("34");
            obj.set_format("#,##0.00000");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_HAJA","sta50:5","sta51:-25","173","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("35");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Button("btnSelling","760","5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("36");
            obj.set_text("분양율조회");
            obj.set_enable("false");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Button("btnBunInfoDel",null,"sta12:20","60","20","10",null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("37");
            obj.set_text("삭제");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Button("btnBunInfoAdd",null,"sta12:20","60","20","btnBunInfoDel:5",null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBunInfo.form);
            obj.set_taborder("38");
            obj.set_text("입력");
            this.divData.form.tabData.tab1.form.divDataBunInfo.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("분양원가");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGridBunCostMng1","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("작업진행율");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGridProgCost1","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("용지및선급공사관리");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGridAreaCost1","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("미완성주택관리");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staGridProgArea1","4","0","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("78");
            obj.set_text("미성(완성)주택 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGridProgArea1","0","staGridProgArea1:5",null,null,"0","127",null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Static("staGridProgArea2","4","objGridProgArea1:5","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("78");
            obj.set_text("분양율 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGridProgArea2","0","staGridProgArea2:5",null,"92","0",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
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

            obj = new BindItem("item5","divData.form.tabData.tab1.form.divDataBunInfo.form.txtNO_TOTAL_SAEDAE","value","dsBunInfoList1","NO_TOTAL_SAEDAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab1.form.divDataBunInfo.form.ctclYM_ACDATE.form.TextBox","value","dsBunInfoList1","YM_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab1.form.divDataBunInfo.form.txtAM_BUILDING","value","dsBunInfoList1","AM_BUILDING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab1.form.divDataBunInfo.form.txtAM_BUNYANG_BUILDING","value","dsBunInfoList1","AM_BUNYANG_BUILDING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab1.form.divDataBunInfo.form.txtAM_MIBUNYANG_BLDG","value","dsBunInfoList1","AM_MIBUNYANG_BLDG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab1.form.divDataBunInfo.form.txtSZ_TOTAL_BUILDING_AREA","value","dsBunInfoList1","SZ_TOTAL_BUILDING_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab1.form.divDataBunInfo.form.txtSZ_BUNYANG_BUILDING_AREA","value","dsBunInfoList1","SZ_BUNYANG_BUILDING_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab1.form.divDataBunInfo.form.txtSZ_MIBUNYANG_BLDG_AREA","value","dsBunInfoList1","SZ_MIBUNYANG_BLDG_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab1.form.divDataBunInfo.form.txtRT_HAJA","value","dsBunInfoList1","RT_HAJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab1.form.divDataBunInfo.form.txtAM_HAJA","value","dsBunInfoList1","AM_HAJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab1.form.divDataBunInfo.form.txtRT_BUNYANG_RATE","value","dsBunInfoList1","RT_BUNYANG_RATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
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
        this.registerScript("DHM_PROC.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.postTabIndex = 0;
        // 분양현황관리,분양원가관리,작업진행율관리,용지및선급공사관리,미성(완성)주택관리
        this.aTabName = ["BunInfo", "BunCostMng", "ProgCost", "AreaCost", "ProgArea"];

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

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	this.dsSearch.setColumn(0, "YM_ACCOUNT", this.gfnGetDate().substr(0, 6));
        	this.dsSearch.setColumn(0, "TY_GUBUN", "A");
        	this.ccfTY_GUBUN.form.fnCodeFindLoad();


        	this.btnDataCreate.set_enable(false);
        	this.btnSelling.set_enable(false);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCopyBunInfo = this.gfnFormButtonAdd("CopyBunInfo", "fnCopyBunInfoData");	// 전월자료복사
        	this.btnDataCreate = this.gfnFormButtonAdd("DataCreate", "fnDataCreate");		// 자료생성
        	this.btnIssueSlip = this.gfnFormButtonAdd("IssueSlip", "fnIssueSlip");
        	this.btnCancelSlip = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip");
        	this.btnViewSlip = this.gfnFormButtonAdd("ViewSlip", "fnViewSlip");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclYM_ACCOUNT = this.divSearch.form.ctclYM_ACCOUNT;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfTY_GUBUN = this.divSearch.form.ccfTY_GUBUN;

        	this.tabData = this.divData.form.tabData;

        	this.btnSelling	= this.divData.form.tabData.tab1.form.divDataBunInfo.form.btnSelling;

        	// 그리드변수 세팅
         	//this.dxGridBunInfo1 	= this.divData.form.tabData.tab1.form.objGridBunInfo1;  	// 0 분양현황관리 BunInfo
        	this.dxGridBunInfo1 	= this.divData.form.tabData.tab1.form.divDataBunInfo.form.objGridBunInfo1;  	// 0 분양현황관리 BunInfo
        	this.dxGridBunInfo2 	= this.divData.form.tabData.tab1.form.divDataBunInfo.form.objGridBunInfo2;  	// 0 분양현황관리 BunInfo
         	this.dxGridBunCostMng1 	= this.divData.form.tabData.tab2.form.objGridBunCostMng1;	// 1 분양원가 BunCostMng
         	this.dxGridProgCost1 = this.divData.form.tabData.tab3.form.objGridProgCost1; 		// 2 작업진행율관리
         	this.dxGridAreaCost1 = this.divData.form.tabData.tab4.form.objGridAreaCost1; 		// 3 용지및선급공사관리
         	this.dxGridProgArea1 = this.divData.form.tabData.tab5.form.objGridProgArea1; 		// 4 미성(완성)주택관리
         	this.dxGridProgArea2 = this.divData.form.tabData.tab5.form.objGridProgArea2; 		// 4 미성(완성)주택관리
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHM_BUNCOSTMNG");

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 세팅
        	this.fnSetGridCellProperty(0);	// 로딩시 분양현황 먼저
        }

        // 그리드 세팅
        this.fnSetGridCellProperty = function (nTabIdx){
        	var objJson = this.fnGetTabInfo(nTabIdx);
        	var objDS1 = objJson.objDsList1;
        	var objDS2 = objJson.objDsList2;
        	var objGrd1 = objJson.objGrid1;
        	var objGrd2 = objJson.objGrid2;

        	this.btnDataCreate.set_enable(false);
        	this.btnSelling.set_enable(false);

        	switch(nTabIdx){
        	case 0:	// 1 분양현황
        		this.gfnGridInit(objGrd1, objDS1, "DH", "DHM_BUNINFO");
        		this.gfnGridInit(objGrd2, objDS2, "DH", "DHM_PROC_BUDGET");
        		//this.gfnGridInit(objGrd1, objDS1, "DA", "DAA_ADDRESS");
        		//this.gfnGridInit(objGrd2, objDS2, "DA", "DAA_ADDRESS_ASK");

        		//objGrd1.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";  // 코드파인더 연동
        		//objGrd1.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        		break;
        	case 1:	// 2 분양원가
        		this.gfnGridInit(objGrd1, objDS1, "DH", "DHM_BUNCOSTMNG");
        		break;
        	case 2:	// 3 작업진행율
         		this.gfnGridInit(objGrd1, objDS1, "DH", "DHM_PROGCOST");
        // 		this.gfnGridInit(objGrd2, objDS2, "DA", "DAAPR_SCHOOL_ASK");
        //
        // 		objGrd2.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";  // 코드파인더 연동
        // 		objGrd2.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        		break;
        	case 3:	// 4 용지및선급공사관리
         		this.gfnGridInit(objGrd1, objDS1, "DH", "DHM_AREACOST");
        // 		this.gfnGridInit(objGrd2, objDS2, "DA", "DAAPR_SCHOOL_ASK");
        //
        // 		objGrd2.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";  // 코드파인더 연동
        // 		objGrd2.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        		break;
        	case 4:	// 5 미완성주택관리
         		this.gfnGridInit(objGrd1, objDS1, "DH", "DHM_PROGAREA");
         		this.gfnGridInit(objGrd2, objDS2, "DH", "DHM_PROGRATE");
        //
        // 		objGrd2.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";  // 코드파인더 연동
        // 		objGrd2.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        		break;

        	}
        }

        this.fnCurrentGrid = function (){
        	var tabIdx = this.tabData.tabindex;
        	return this.fnGetTabInfo(tabIdx);
        }

        this.fnGetTabInfo = function (nIdx){
        	var objGrid1, objGrid2, objDsList1, objDsList2, objDsSave;
        	switch(nIdx){
        		case 0:	// 분양현황관리
        			objGrid1 = this.dxGridBunInfo1;
        			objGrid2 = this.dxGridBunInfo2;
        			objDsList1 = this.dsBunInfoList1;
        			objDsList2 = this.dsBunInfoList2;
        			objDsSave = this.dsBunInfoSave;
        			break;
        		case 1:	// 분양원가관리
        			objGrid1 = this.dxGridBunCostMng1;
        			objDsList1 = this.dsBunCostMngList1;
        			objDsSave = this.dsBunCostMngInsert;
        			break;
        		case 2:	// 작업진행율관리
        			objGrid1 = this.dxGridProgCost1;
        			//objGrid2 = this.dxGridProgCost2;
        			objDsList1 = this.dsProgCostList1;
        			//objDsList2 = this.dsProgCostList2;
        			objDsSave = this.dsProgCostSave;
        			break;
        		case 3:	// 용지 및 선급공사관리
        			objGrid1 = this.dxGridAreaCost1;
        			//objGrid2 = this.dxGridAreaCost2;
        			objDsList1 = this.dsAreaCostList1;
        			//objDsList2 = this.dsAreaCostList2;
        			objDsSave = this.dsAreaCostSave;
        			break;
        		case 4:	// 미성(완성)주택관리
        			objGrid1 = this.dxGridProgArea1;
        			objGrid2 = this.dxGridProgArea2;
        			objDsList1 = this.dsProgAreaList1;
        			objDsList2 = this.dsProgAreaList2;
        			objDsSave = this.dsProgAreaSave;
        			break;
        	}
        	var objJson = {};
        	objJson.objGrid1 = objGrid1;
        	objJson.objGrid2 = objGrid2;
        	objJson.objDsList1 = objDsList1;
        	objJson.objDsList2 = objDsList2;
        	objJson.objDsSave = objDsSave;
        	return objJson;
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("YM_ACCOUNT", "string");

        	// 자료생성
        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsCreate.addColumn("TY_GUBUN", "string");
        	this.dsCreate.addColumn("YM_ACCOUNT", "string");
        	this.dsCreate.addColumn("ID_TRANS", "string");

        	/*************** 분양현황관리 ***************/
        	this.dsBunInfoSave1 = new Dataset();
        	this.dsBunInfoSave1.addColumn("TY_SAVE", "string");
        	this.dsBunInfoSave1.addColumn("CD_DEPT_ACNT", "string");
        	this.dsBunInfoSave1.addColumn("TY_GUBUN", "string");
        	this.dsBunInfoSave1.addColumn("YM_ACCOUNT", "string");
        	this.dsBunInfoSave1.addColumn("AM_BUILDING", "bigdecimal");
        	this.dsBunInfoSave1.addColumn("AM_BUNYANG_BUILDING", "bigdecimal");
        	this.dsBunInfoSave1.addColumn("AM_LAND", "bigdecimal");
        	this.dsBunInfoSave1.addColumn("AM_BUNYANG_LAND", "bigdecimal");
        	this.dsBunInfoSave1.addColumn("SZ_TOTAL_LAND_AREA", "bigdecimal");
        	this.dsBunInfoSave1.addColumn("SZ_BUNYANG_LAND_AREA", "bigdecimal");
        	this.dsBunInfoSave1.addColumn("SZ_TOTAL_BUILDING_AREA", "bigdecimal");
        	this.dsBunInfoSave1.addColumn("SZ_BUNYANG_BUILDING_AREA", "bigdecimal");
        	this.dsBunInfoSave1.addColumn("RT_BUNYANG_RATE", "bigdecimal");
        	this.dsBunInfoSave1.addColumn("NO_TOTAL_SAEDAE", "bigdecimal");
        	this.dsBunInfoSave1.addColumn("ID_TRANS", "string");
        	this.dsBunInfoSave1.addColumn("AM_GONGSA_DOGUB", "bigdecimal");
        	this.dsBunInfoSave1.addColumn("RT_HAJA", "bigdecimal");
        	this.dsBunInfoSave1.addColumn("AM_HAJA", "bigdecimal");

        	this.dsBunInfoSave2 = new Dataset();
        	this.dsBunInfoSave2.addColumn("TY_SAVE", "string");
        	this.dsBunInfoSave2.addColumn("CD_DEPT_ACNT", "string");
        	this.dsBunInfoSave2.addColumn("TY_GUBUN", "string");
        	this.dsBunInfoSave2.addColumn("YM_ACCOUNT", "string");
        	this.dsBunInfoSave2.addColumn("CD_CODE", "string");
        	this.dsBunInfoSave2.addColumn("DS_CODE", "string");
        	this.dsBunInfoSave2.addColumn("AM_BUDGET", "bigdecimal");
        	this.dsBunInfoSave2.addColumn("ID_SABUN", "string");

        	/*************** 분양원가관리 ***************/
        	this.dsBunCostMngSave = new Dataset();
        	this.dsBunCostMngSave.addColumn("CD_DEPT_ACNT", "string");
        	this.dsBunCostMngSave.addColumn("TY_GUBUN", "string");
        	this.dsBunCostMngSave.addColumn("YM_ACCOUNT", "string");
        	this.dsBunCostMngSave.addColumn("ID_TRANS", "string");

        	/*************** 작업진행율관리 ***************/
        	this.dsProgCostSave = new Dataset();
        	this.dsProgCostSave.addColumn("CD_DEPT_ACNT", "string");
        	this.dsProgCostSave.addColumn("TY_GUBUN", "string");
        	this.dsProgCostSave.addColumn("YM_ACCOUNT", "string");

        	/*************** 용지 및 선급공사관리 ***************/
        	this.dsAreaCostSave = new Dataset();
        	this.dsAreaCostSave.addColumn("CD_DEPT_ACNT", "string");
        	this.dsAreaCostSave.addColumn("TY_GUBUN", "string");
        	this.dsAreaCostSave.addColumn("YM_ACCOUNT", "string");
        	this.dsAreaCostSave.addColumn("ID_TRANS", "string");

        	/*************** 미성(완성)주택관리 ***************/
        	this.dsProgAreaSave = new Dataset();
        	this.dsProgAreaSave.addColumn("CD_DEPT_ACNT", "string");
        	this.dsProgAreaSave.addColumn("TY_GUBUN", "string");
        	this.dsProgAreaSave.addColumn("YM_ACCOUNT", "string");
        	this.dsProgAreaSave.addColumn("ID_TRANS", "string");

        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");
        	this.dsIssueSlip.addColumn("CD_DEPT_ACNT", "string");
        	this.dsIssueSlip.addColumn("TY_GUBUN", "string");
        	this.dsIssueSlip.addColumn("YM_ACCOUNT", "string");
        	this.dsIssueSlip.addColumn("ID_TRANS", "string");

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_CORP", "string");
        	this.dsCancelSlip.addColumn("CD_DEPT_ACNT", "string");
        	this.dsCancelSlip.addColumn("TY_GUBUN", "string");
        	this.dsCancelSlip.addColumn("YM_ACCOUNT", "string");
        	this.dsCancelSlip.addColumn("CD_TRADE", "string");

        	this.dsSelling = new Dataset();
        	this.dsSelling.addColumn("CD_SITE", "string");
        	this.dsSelling.addColumn("YM_WORK", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	var nTabIdx = this.tabData.tabindex;
        	var sTabNm = this.aTabName[nTabIdx];

        	if (!this.fnSelectValidation()) return;

        	var objJson = this.fnCurrentGrid();

        	this.gfnGridBeforeSelect(objJson.objGrid1);

        	var objDs1 = objJson.objDsList1;
        	var objDs2 = objJson.objDsList2;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));

        	var strInData = "select" + sTabNm + "1=dsSelect";
        	var strOutData = objDs1.name + "=select" + sTabNm + "10";
        	if(nTabIdx == 0 || nTabIdx == 4){
        		strInData = "select" + sTabNm + "1=dsSelect select" + sTabNm + "2=dsSelect";
        		strOutData = objDs1.name + "=select" + sTabNm + "10 " + objDs2.name + "=select" + sTabNm +"20";
        	}

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = strInData;
        	var outData     = strOutData;
        // 	var inData      = "select=dsSelect";
        // 	var outData     = "dsList=select0";
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

        this.fnAdd = function() {
        	var nTabIdx = this.tabData.tabindex;
        	if(nTabIdx == 0){
        		if(this.dsBunInfoList1.rowcount == 0){
        			var nrow = this.gfnGridAdd(this.dxGridBunInfo1);
        			this.dsBunInfoList1.setColumn(nrow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        		}
        	}
        }

        this.fnDel = function() {
        }

        this.fnSave = function() {
        	var nTabIdx = this.tabData.tabindex;
        	var objJson = this.fnCurrentGrid();
        	var sTabNm = this.aTabName[nTabIdx];
        	if(nTabIdx == 0){
        		this.fnBunInfoSave();
        	}
        }

        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
        	var objJson = this.fnCurrentGrid();
        	this.gfnExcelExport(objJson.objGrid1);
        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		validate = false;
        	}
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_ACCOUNT"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_ACCOUNT.form.TextBox.setFocus();
        		}
        		this.gfnAlert("회계년월은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		validate = false;
        	}
        	return validate;
        }

        this.fnSaveValidate = function() {
        	var strMsg = "";

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		strMsg += "현장코드는 반드시 입력 하셔야 합니다.\n";
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_ACCOUNT"))) {
        		strMsg += "회계년월은 반드시 입력 하셔야 합니다.\n";
        	}

        	if (strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}else{
        		return true;
        	}
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	var objJson = this.fnCurrentGrid();
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(objJson.objGrid1);
        // 		if ( objJson.objDsList1.rowcount > 0) {
        // 			this.btnDataCreate.set_enable(false);
        // 		}else {
        			this.btnDataCreate.set_enable(true);
        			this.btnSelling.set_enable(true);
        //		}
        	}
        	else if(svcID == "save" ||  svcID == "saveBunInfo") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "issueslip" || svcID == "cancelslip") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "create" ||svcID == "copyBunInfo") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "selling") {
        		if (errorCode == 0) {
        			trace(this.dsSellingList.saveXML());

        			if(this.dsSellingList.rowcount == 0) return;

        			var nrow = this.dsBunInfoList1.rowposition;
        			if(this.dsBunInfoList1.rowcount == 0){
        				nrow = this.gfnGridAdd(this.dxGridBunInfo1);
        				this.dsBunInfoList1.setColumn(nrow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        			}

        			// 세대수
        			this.dsBunInfoList1.setColumn(nrow, "NO_TOTAL_SAEDAE", this.dsSellingList.getColumn(0, "NO_SADAE_ALL"));
        			// 총분양금액
        			this.dsBunInfoList1.setColumn(nrow, "AM_BUILDING", this.dsSellingList.getColumn(0, "AM_SELLING_ALL"));
        			// 기분양금액
        			this.dsBunInfoList1.setColumn(nrow, "AM_BUNYANG_BUILDING", this.dsSellingList.getColumn(0, "AM_SELLING_CONT"));
        			// 총면적
        			this.dsBunInfoList1.setColumn(nrow, "SZ_TOTAL_BUILDING_AREA", this.dsSellingList.getColumn(0, "NO_SIZE_ALL"));
        			// 기분양면적
        			this.dsBunInfoList1.setColumn(nrow, "SZ_BUNYANG_BUILDING_AREA", this.dsSellingList.getColumn(0, "NO_SIZE_CONT"));

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
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	switch(id) {
        		case "ccfCD_CORP":
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        			break;
        		case "ccfCD_SITE":
        			if(this.gfnIsNull(sCdCorp)){
        				this.gfnAlert("법인코드를 선택하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_CORP", sCdCorp);
        			break;
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_SITE.form.fnCodeFindClear();
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnIssueSlip = function(obj,e) {
        // 	var bSlipInsert = false;
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		if (nexacro.toNumber(this.dsList.getColumn(i, "AM_MONTH_COST")) != 0) {
        // 			bSlipInsert = true;
        // 			break;
        // 		}
        // 	}
        //
        // 	if (!bSlipInsert) {
        // 		this.gfnAlert("원가 대체 금액이 없습니다.");
        // 		return;
        // 	}

        	if (!this.fnSelectValidation()){
        		return false;
        	}

        	this.gfnConfirm("전표를 발행하시겠습니까?", "fnIssueSlip_callback");
        }

        this.fnIssueSlip_callback = function(strId, val)  {
        	if (!val) return;

        	this.dsIssueSlip.clearData();
        	var nrow = this.dsIssueSlip.addRow();
        	this.dsIssueSlip.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsIssueSlip.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsIssueSlip.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsIssueSlip.setColumn(nrow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	this.dsIssueSlip.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);

        	var strSvcId    = "issueslip";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "issueslip=dsIssueSlip";
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

        this.fnCancelSlip = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) return;

        	if (!this.fnSelectValidation()){
        		return false;
        	}

        	var objJson = this.fnCurrentGrid();
        	var objDS1 = objJson.objDsList1;

        	if (!this.gfnGridIsRow(objJson.objGrid1)) return;
        	var cdTrade = this.gfnTrim(objDS1.getColumn(objDS1.rowposition, "CD_TRADE"));
        	if (this.gfnIsNull(cdTrade)) {
        		this.gfnAlert("발행된 전표가 존재하지 않습니다.");
        		return;
        	}

        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");
        }

        this.fnCancelSlip_callback = function(strId, val)  {
        	if (!val) return;

        	var objJson = this.fnCurrentGrid();
        	var objDS1 = objJson.objDsList1;

        	if (!this.gfnGridIsRow(objJson.objGrid1)) return;
        	var cdTrade = this.gfnTrim(objDS1.getColumn(objDS1.rowposition, "CD_TRADE"));

        	this.dsCancelSlip.clearData();
        	var nrow = this.dsCancelSlip.addRow();
        	this.dsCancelSlip.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsCancelSlip.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCancelSlip.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsCancelSlip.setColumn(nrow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	//this.dsCancelSlip.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        	this.dsCancelSlip.setColumn(nrow, "CD_TRADE", cdTrade);

        	var strSvcId    = "cancelslip";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cancelslip=dsCancelSlip";
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

        this.fnViewSlip = function(obj,e) {

        	var nTabIdx = this.tabData.tabindex;
        	if(nTabIdx == 4){	// 미완성주택관리에서만 조회
        		var objJson = this.fnCurrentGrid();
        		var objDS1 = objJson.objDsList1;

        		if (!this.gfnGridIsRow(objJson.objGrid1)) return;
        		var cdTrade = this.gfnTrim(objDS1.getColumn(objDS1.rowposition, "CD_TRADE"));

        		if (this.gfnIsNull(cdTrade)) {
        			this.gfnAlert("발행된 전표가 존재하지 않습니다.");
        			return;
        		}

        		var param = {};
        		param.IUD_FLAG = "S";
        		param.CD_TRADE = cdTrade;
        		param.strYN_JUNDO_START = "";

        		this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		var nTabIdx = this.tabData.tabindex;
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		//this.gfnGridClear(this.dxGrid);
        		var objJson = this.fnCurrentGrid();
        		this.gfnGridClear(objJson.objGrid1);
        		if(nTabIdx == 0 || nTabIdx == 4){
        			this.gfnGridClear(objJson.objGrid2);
        		}

        		if(nTabIdx == 0){
        			this.btnSelling.set_enable(false);
        		}
        		this.btnDataCreate.set_enable(false);
        	}
        };

        // 분양현황 저장(tab1)
        this.fnBunInfoSave = function() {
        	if (!this.gfnGridValidate(this.dxGridBunInfo1)) return;

        	this.dxGridBunInfo2.updateToDataset();

        	this.dsBunInfoSave1.clearData();
        	this.dsBunInfoSave2.clearData();

        	for (var i = 0; i < this.dsBunInfoList1.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsBunInfoList1, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsBunInfoSave1.addRow();
        				this.dsBunInfoSave1.setColumn(nrow, "TY_SAVE", flag);
        				this.dsBunInfoSave1.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsBunInfoSave1.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        				this.dsBunInfoSave1.setColumn(nrow, "YM_ACCOUNT", this.dsBunInfoList1.getColumn(i, "YM_ACCOUNT"));
        				this.dsBunInfoSave1.setColumn(nrow, "AM_BUILDING", this.dsBunInfoList1.getColumn(i, "AM_BUILDING"));
        				this.dsBunInfoSave1.setColumn(nrow, "AM_BUNYANG_BUILDING", this.dsBunInfoList1.getColumn(i, "AM_BUNYANG_BUILDING"));
        				this.dsBunInfoSave1.setColumn(nrow, "AM_LAND", this.dsBunInfoList1.getColumn(i, "AM_LAND"));
        				this.dsBunInfoSave1.setColumn(nrow, "AM_BUNYANG_LAND", this.dsBunInfoList1.getColumn(i, "AM_BUNYANG_LAND"));
        				this.dsBunInfoSave1.setColumn(nrow, "SZ_TOTAL_LAND_AREA", this.dsBunInfoList1.getColumn(i, "SZ_TOTAL_LAND_AREA"));
        				this.dsBunInfoSave1.setColumn(nrow, "SZ_BUNYANG_LAND_AREA", this.dsBunInfoList1.getColumn(i, "SZ_BUNYANG_LAND_AREA"));
        				this.dsBunInfoSave1.setColumn(nrow, "SZ_TOTAL_BUILDING_AREA", this.dsBunInfoList1.getColumn(i, "SZ_TOTAL_BUILDING_AREA"));
        				this.dsBunInfoSave1.setColumn(nrow, "SZ_BUNYANG_BUILDING_AREA", this.dsBunInfoList1.getColumn(i, "SZ_BUNYANG_BUILDING_AREA"));
        				this.dsBunInfoSave1.setColumn(nrow, "RT_BUNYANG_RATE", this.dsBunInfoList1.getColumn(i, "RT_BUNYANG_RATE"));
        				this.dsBunInfoSave1.setColumn(nrow, "NO_TOTAL_SAEDAE", this.dsBunInfoList1.getColumn(i, "NO_TOTAL_SAEDAE"));
        				this.dsBunInfoSave1.setColumn(nrow, "RT_HAJA", this.dsBunInfoList1.getColumn(i, "RT_HAJA"));
        				this.dsBunInfoSave1.setColumn(nrow, "AM_HAJA", this.dsBunInfoList1.getColumn(i, "AM_HAJA"));
        				this.dsBunInfoSave1.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        				this.dsBunInfoSave1.setColumn(nrow, "AM_GONGSA_DOGUB", this.dsBunInfoList1.getColumn(i, "AM_GONGSA_DOGUB"));

        				break;
        		}
        	}

        	for (var i = 0; i < this.dsBunInfoList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsBunInfoList2, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsBunInfoSave2.addRow();
        				this.dsBunInfoSave2.setColumn(nrow, "TY_SAVE", flag);
        				this.dsBunInfoSave2.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsBunInfoSave2.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        				this.dsBunInfoSave2.setColumn(nrow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        				this.dsBunInfoSave2.setColumn(nrow, "CD_CODE", this.dsBunInfoList2.getColumn(i, "CD_CODE"));
        				this.dsBunInfoSave2.setColumn(nrow, "DS_CODE", this.dsBunInfoList2.getColumn(i, "DS_CODE"));
        				this.dsBunInfoSave2.setColumn(nrow, "AM_BUDGET", this.dsBunInfoList2.getColumn(i, "AM_BUDGET"));
        				this.dsBunInfoSave2.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	if (this.dsBunInfoSave1.rowcount == 0 && this.dsBunInfoSave2.rowcount == 0) return;

        	var strSvcId    = "saveBunInfo";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveBunInfo1=dsBunInfoSave1 saveBunInfo2=dsBunInfoSave2";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };



        // 전월자료생성
        this.fnCopyBunInfoData = function(obj,e) {
        	if (!this.fnSelectValidation()){
        		return false;
        	}
        	this.gfnConfirm("전월자료 생성하시겠습니까?", "fnCopyBunInfoData_callback");
        }

        this.fnCopyBunInfoData_callback = function(strId, val)  {
        	if (!val) return;

        	this.dsCreate.clearData();
        	var nrow = this.dsCreate.addRow();
        	this.dsCreate.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCreate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsCreate.setColumn(nrow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	this.dsCreate.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);

        	var strSvcId    = "copyBunInfo";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData 		= "selectBunInfoCopy=dsCreate";
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

        // 자료생성
        this.fnDataCreate = function(obj,e) {

        	this.gfnConfirm("기초 자료 생성하시겠습니까?", "fnDataCreate_callback");
        }

        this.fnDataCreate_callback = function(strId, val)  {
        	if (!val) return;

        	if (!this.fnSelectValidation()){
        		return false;
        	}

        	this.dsCreate.clearData();
        	var nrow = this.dsCreate.addRow();
        	this.dsCreate.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCreate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsCreate.setColumn(nrow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	this.dsCreate.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData 		= "create=dsCreate";
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
        };

        this.divData_tabData_onchanged = function(obj,e)
        {
        	var nTabIdx = this.divData.form.tabData.tabindex;

        	// 그리드 셋팅
        	this.fnSetGridCellProperty(nTabIdx);
        	if (!this.fnSelectValidation()){
        		return false;
        	}
        	this.FormBtns.Select.click();
        };

        this.dsBunInfoList1_onvaluechanged = function(obj,e)
        {
        if (e.oldvalue != e.newvalue) {
        		//this.gfnSetFormStatus(this, "U");

        		this.dsBunInfoList1.set_enableevent(false);
        		switch (e.columnid) {
        			case "RT_HAJA":
        				var amBuilding = nexacro.toNumber(this.gfnNvl(this.dsBunInfoList1.getColumn(e.row, "AM_BUILDING"), 0));
        				var rtHaja = nexacro.toNumber(this.gfnNvl(this.dsBunInfoList1.getColumn(e.row, "RT_HAJA"), 0));
        				this.dsBunInfoList1.setColumn(e.row, "AM_HAJA", nexacro.round(amBuilding * (rtHaja / 100), 0));
        				break;
        			case "AM_BUILDING":
        				var amBuilding = nexacro.toNumber(this.gfnNvl(this.dsBunInfoList1.getColumn(e.row, "AM_BUILDING"), 0));
        				var rtHaja = nexacro.toNumber(this.gfnNvl(this.dsBunInfoList1.getColumn(e.row, "RT_HAJA"), 0));
        				this.dsBunInfoList1.setColumn(e.row, "AM_HAJA", nexacro.round(amBuilding * (rtHaja / 100), 0));

        				//var amBuilding = nexacro.toNumber(this.dsBunInfoList1.getColumn(e.row, "AM_BUILDING"));
        				var amBunyangBuilding = nexacro.toNumber(this.gfnNvl(this.dsBunInfoList1.getColumn(e.row, "AM_BUNYANG_BUILDING"), 0));
        				this.dsBunInfoList1.setColumn(e.row, "AM_MIBUNYANG_BLDG", amBuilding - amBunyangBuilding);

        				// 분양율 = (기분양금액 AM_BUNYANG_BUILDING / 총분양금액AM_BUILDING )
        				var rtBunyangRate = (amBuilding > 0) ? (( amBunyangBuilding / amBuilding ) * 100) : 0;
        				trace("분양율->" +  amBunyangBuilding + "/" + amBuilding + "* 100 " +"=" + rtBunyangRate);
        				//this.dsBunInfoList1.setColumn(e.row, "RT_BUNYANG_RATE", rtBunyangRate.toFixed(2));
        				this.dsBunInfoList1.setColumn(e.row, "RT_BUNYANG_RATE", rtBunyangRate.toFixed());

        				break;
        			case "AM_BUNYANG_BUILDING":
        				var amBuilding = nexacro.toNumber(this.gfnNvl(this.dsBunInfoList1.getColumn(e.row, "AM_BUILDING"), 0));
        				var amBunyangBuilding = nexacro.toNumber(this.gfnNvl(this.dsBunInfoList1.getColumn(e.row, "AM_BUNYANG_BUILDING"), 0));
        				this.dsBunInfoList1.setColumn(e.row, "AM_MIBUNYANG_BLDG", amBuilding - amBunyangBuilding);

        				// 분양율 = (기분양금액 AM_BUNYANG_BUILDING / 총분양금액AM_BUILDING )
        				var rtBunyangRate = (amBuilding > 0) ? ( amBunyangBuilding / amBuilding ) : 0;
        				this.dsBunInfoList1.setColumn(e.row, "RT_BUNYANG_RATE", rtBunyangRate.toFixed(2));

        				break;
        			case "SZ_TOTAL_BUILDING_AREA":
        			case "SZ_BUNYANG_BUILDING_AREA":
        				var szTotal = nexacro.toNumber(this.gfnNvl(this.dsBunInfoList1.getColumn(e.row, "SZ_TOTAL_BUILDING_AREA"), 0));
        				var szBunyang = nexacro.toNumber(this.gfnNvl(this.dsBunInfoList1.getColumn(e.row, "SZ_BUNYANG_BUILDING_AREA"), 0));
        				this.dsBunInfoList1.setColumn(e.row, "SZ_MIBUNYANG_BLDG_AREA", szTotal - szBunyang);
        				break;
        			case "SZ_TOTAL_BUILDING_AREA":
        			case "SZ_BUNYANG_BUILDING_AREA":
        				break;
        		}
        		this.dsBunInfoList1.set_enableevent(true);
        	}
        };

        this.divData_tabData_tab1_divDataBunInfo_btnBunInfoAdd_onclick = function(obj,e)
        {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridAdd(this.dxGridBunInfo2);
        	//this.btnSave.set_enable(true);
        	//this.btnDel.set_enable(true);
        	//this.btnExcel.set_enable(false);
        };

        this.divData_tabData_tab1_divDataBunInfo_btnBunInfoDel_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGridBunInfo2);
        };

        this.divData_tabData_canchange = function(obj,e)
        {
        	var tabIdx = this.divData.form.tabData.tabindex;
        	var objJson = this.fnGetTabInfo(e.preindex);
        	var objDS1 = objJson.objDsList1;
        	var objDS2 = objJson.objDsList2;
        	this.postTabIndex = e.postindex;

        	if(e.postindex != e.preindex){
        		var fRow1 = objDS1.findRowExprNF( this.ucFlag+" != '#' && !dataset.parent.gfnIsNull(" + this.ucFlag + ")");
        		if(fRow1 > -1){
        			this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "tabData_canchange_callback");
        			return false;
        		}
        		if(tabIdx == 0){
        			var fRow2 = objDS2.findRowExprNF( this.ucFlag+" != '#' && !dataset.parent.gfnIsNull(" + this.ucFlag + ")");
        			if(fRow2 > -1){
        				this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "tabData_canchange_callback");
        				return false;
        			}
        		}
        	}
        };

        this.tabData_canchange_callback = function(strId, val){
        	if(val == true) {
         		this.divData.form.tabData.set_enableevent(false);
         		this.divData.form.tabData.set_tabindex(this.postTabIndex);	//탭변경
         		this.divData.form.tabData.set_enableevent(true);

         		// 그리드 셋팅
         		this.fnSetGridCellProperty(this.postTabIndex);
         		this.FormBtns.Select.click();
        	}
        }
        // 분양율조회
        this.divData_tabData_tab1_divDataBunInfo_btnSelling_onclick = function(obj,e)
        {

        	var nTabIdx = this.tabData.tabindex;
        	if(nTabIdx != 0) return;
        	if (!this.fnSaveValidate()){
        		return false;
        	}

        	this.dsSelling.clearData();
        	this.dsSelling.addRow();

        	this.dsSelling.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelling.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_ACCOUNT"));

        	var strSvcId    = "selling";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData 		= "selectSelling=dsSelling";
        	var outData     = "dsSellingList=selectSelling0";
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
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.addEventHandler("canchange",this.divData_tabData_canchange,this);
            this.divData.form.tabData.tab1.form.divDataBunInfo.form.btnSelling.addEventHandler("onclick",this.divData_tabData_tab1_divDataBunInfo_btnSelling_onclick,this);
            this.divData.form.tabData.tab1.form.divDataBunInfo.form.btnBunInfoDel.addEventHandler("onclick",this.divData_tabData_tab1_divDataBunInfo_btnBunInfoDel_onclick,this);
            this.divData.form.tabData.tab1.form.divDataBunInfo.form.btnBunInfoAdd.addEventHandler("onclick",this.divData_tabData_tab1_divDataBunInfo_btnBunInfoAdd_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsBunInfoList1.addEventHandler("onvaluechanged",this.dsBunInfoList1_onvaluechanged,this);
        };
        this.loadIncludeScript("DHM_PROC.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
