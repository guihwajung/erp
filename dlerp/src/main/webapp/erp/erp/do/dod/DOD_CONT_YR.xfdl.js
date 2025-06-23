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
            this.set_titletext("계약-차수계약관리");
            this.set_scrolltype("both");
            this.set_enable("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1297,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectBase</Col><Col id=\"SP\">DODPR_CONT_YR_BASE_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">select0</Col><Col id=\"SP\">DODPR_CONT_YR_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DODPR_CONTRCT_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DODPR_ARCH_CONT_CO_CONTRCT_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DODPR_ARCH_CONT_CONCERN_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DODPR_CONT_YR_MERGE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DODPR_CONT_YR_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBase", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NO_CHG_CONT\" type=\"INT\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NM_CHG_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"NM_TY_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONST_ST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONST_ED\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TXF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUP_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TXF_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_ADV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ADV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONT_GRNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_REG_SEAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CND_COLT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RM_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"ID_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_NO_CONT\" type=\"INT\" size=\"256\"/><Column id=\"OUT_NO_CHG_CONT\" type=\"INT\" size=\"256\"/><Column id=\"YN_TAX_NA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseRst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInitSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHG_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInitBase", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHG_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BONBU\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"NM_TY_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONST_ST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONST_ED\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OUR\" type=\"STRING\" size=\"256\"/><Column id=\"RT_ADV\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REG_SEAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CND_COLT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_TAX_NA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchOfTab2", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BONBU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MAIN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_FIELD","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_FIELD","0.0","staCD_FIELD:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_FIELD","ctxtCD_FIELD:0.0","staCD_FIELD:10.0","500","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_FIELD00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사업부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_PROJ00","0.0","staCD_FIELD:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","50",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("기본정보");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","0",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_text("계약기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ_STAT","5","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("계약명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ","5","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("49");
            obj.set_text("사업유형/분야");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00","124","27","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","124","56","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNM_PROV","643","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("57");
            obj.set_text("계약일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta18","762","27","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNM_ENF","643","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("58");
            obj.set_text("계약수행방식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT","5","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_text("착공일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta09","124","85","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ","643","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("9");
            obj.set_text("준공일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta10","762","56","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta12","762","85","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS","5","143","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("18");
            obj.set_text("계약 공급가(과세)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ACC","5","230","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("24");
            obj.set_text("계약 부가세");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04","124","143","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta05","124","230","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LOCAL","643","143","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("21");
            obj.set_text("당사 공급가(과세)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CITY_PLAN","643","230","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("27");
            obj.set_text("당사 부가세");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_PUB_NOTICE","5","172","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("30");
            obj.set_text("계약 공급가(면세)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06","124","172","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_USE_STAT","643","172","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("33");
            obj.set_text("당사 공급가(면세)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta07","762","143","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta08","762","230","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta13","762","172","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT","5","259","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("60");
            obj.set_text("계약 총금액");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta14","124","259","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CONT_LIMIT","643","259","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("62");
            obj.set_text("당사 총금액");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta15","762","259","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD00","5","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("12");
            obj.set_text("과세율");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta16","124","114","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ENF_DEPT00","643","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("15");
            obj.set_text("당사 지분율");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta17","762","114","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta03","124","317","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT00","5","288","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("36");
            obj.set_text("선수금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta19","124","288","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ00","643","288","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("39");
            obj.set_text("선수금율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta21","762","288","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS00","5","346","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("48");
            obj.set_text("수금조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta22","124","346","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LOCAL00","643","317","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("45");
            obj.set_text("사용인감");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CITY_PLAN00","643","346","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("51");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta25","762","317","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta26","762","346","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD01","5","317","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("42");
            obj.set_text("계약보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT","staCD_BIZ_STAT:3","32","421","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ","staNM_PROV:3","32","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT00","staTY_BIZ:3","61","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("66");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ00","staTY_PRDCT:3","90","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ01","staDT_ACQ:3","90","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH","staTY_BIZ_MHOD00:3","119","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH00","staDS_ENF_DEPT00:3","119","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("17");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND","staDS_LAND_CLS:3","148","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("20");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND00","staDS_ACC:3","236","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("26");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND01","staDS_PUB_NOTICE:3","177","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("32");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TOT","staDS_ROAD_STAT:3","264","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("67");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TOT_OUR","staDS_CONT_LIMIT:3","264","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("68");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND04","staDS_USE_STAT:3","177","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("35");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND05","staDS_CITY_PLAN:3","236","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("29");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND06","staDS_LOCAL:3","148","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("23");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND08","staTY_BIZ_MHOD01:3","321","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("44");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09","staTY_PRDCT00:3","293","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("38");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND10","staDT_ACQ00:3","293","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("41");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT01","staDS_LOCAL00:3","322","510","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("47");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT03","staDS_CITY_PLAN00:3","351","510","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("53");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT05","staNM_ENF:3","61","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("69");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT04","551","32","30","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("70");
            obj.set_value("");
            obj.set_readonly("true");
            obj.getSetter("onclick").set("divData_tabData_tab1_ctxtNM_CHG_CONT04_onclick");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT06","596","32","30","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("71");
            obj.set_readonly("true");
            obj.set_text("99");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT07","staDS_LAND_CLS00:3","351","510","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("50");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02","581","33","16","18",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("72");
            obj.set_text("차");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02_00","628","33","16","18",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_text("회");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staID_FILE_ATTCH","5","374","120","149",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("54");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta27_00","124","374","1158","149",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("divFile","118","371","1145","150",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("55");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_TAX_NA","219","117","74","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("74");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_text("영세");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_value("N");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00_00","339","148","78","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("75");
            obj.set_text("(세금계산서)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00_00_00","339","177","78","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("76");
            obj.set_text("(계산서)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00_00_01","977","148","78","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("77");
            obj.set_text("(세금계산서)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00_00_00_00","977","177","78","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("78");
            obj.set_text("(계산서)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_MAIN","1031","59","74","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("79");
            obj.set_text("Main여부");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("Y");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_SUPTXF","5","201","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("80");
            obj.set_text("계약 공급가(소계)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta34","124","201","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_SUPTXF_OUR","643","201","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("82");
            obj.set_text("당사 공급가(소계)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta35","762","201","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SUPTXF","128","206","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("84");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SUPTXF_OUR","766","206","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("85");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("계약내역");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrdtab2","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("공동도급사");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrdtab3","5","30",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"3","60","24","5",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("관계사");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrdtab4","5","30",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"3","60","24","5",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_FIELD","value","dsInitBase","CD_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_FIELD","value","dsInitBase","DS_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtCD_PROJ00","value","dsInitBase","DS_BONBU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tabData.tab1.form.ctxtNM_CHG_CONT00","value","dsBase","NM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tabData.tab1.form.ctxtNM_CHG_CONT05","value","dsBase","NM_TY_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab1.form.ctxtNM_CHG_CONT04","value","dsBase","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab1.form.ctxtNM_CHG_CONT06","value","dsBase","NO_CHG_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab1.form.ctxtNM_CHG_CONT","value","dsBase","NM_CHG_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab1.form.ctclDT_ACQ","value","dsBase","DT_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab1.form.ctclDT_ACQ00","value","dsBase","DT_CONST_ST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tabData.tab1.form.ctclDT_ACQ01","value","dsBase","DT_CONST_ED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tabData.tab1.form.ctxtRT_ARCH","value","dsBase","RT_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab1.form.ctxtAM_LAND","value","dsBase","AM_SUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.tabData.tab1.form.ctxtAM_LAND00","value","dsBase","AM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tabData.tab1.form.ctxtAM_LAND01","value","dsBase","AM_TXF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tabData.tab1.form.ctxtAM_LAND09","value","dsBase","AM_ADV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.tabData.tab1.form.ctxtAM_LAND08","value","dsBase","AM_CONT_GRNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.tabData.tab1.form.ctxtRT_ARCH00","value","dsBase","RT_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.tabData.tab1.form.ctxtAM_LAND06","value","dsBase","AM_SUP_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.tabData.tab1.form.ctxtAM_LAND06","accessibilityaction","dsBase","AM_VAT_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.tabData.tab1.form.ctxtAM_LAND04","value","dsBase","AM_TXF_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tabData.tab1.form.ctxtAM_LAND10","value","dsBase","RT_ADV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tabData.tab1.form.ctxtNM_CHG_CONT01","value","dsBase","NO_REG_SEAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tabData.tab1.form.ctxtNM_CHG_CONT03","value","dsBase","DS_RM_CHG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.tabData.tab1.form.ctxtAM_LAND05","value","dsBase","AM_VAT_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.tabData.tab1.form.ctxtNM_CHG_CONT07","value","dsBase","DS_CND_COLT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab1.form.chkYN_TAX_NA","value","dsBase","YN_TAX_NA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tabData.tab1.form.cchkYN_MAIN","value","dsBase","YN_MAIN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmFileManager.xfdl");
        };
        
        // User Script
        this.registerScript("DOD_CONT_YR.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e){
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetExtendButton();

        	this.fnSetVariable();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	if(this.getOwnerFrame().TYPE == "Y"){
        		//생성
        		this.dsInitSearch.setColumn(0, "CD_FIELD", this.getOwnerFrame().CD_FIELD);
        		this.dsInitSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_CONT);
        		this.dsInitSearch.setColumn(0, "TYPE", this.getOwnerFrame().TYPE);
        		this.fnInitSelect();
        		this.fnAdd();
        		this.gfnSetFormStatus(this, "I");
        	} else {
        		//편집
        		this.dsInitSearch.setColumn(0, "CD_FIELD", this.getOwnerFrame().CD_FIELD);
        		this.dsInitSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_CONT);
        		this.dsInitSearch.setColumn(0, "NO_CHG_CONT", this.getOwnerFrame().NO_CHG_CONT);

        		this.fnInitSelect();
        		this.FormBtns.Select.click();
        	}
        	this.TY_PROJ = this.dsInitBase.getColumn(0,"TY_PROJ");
        	this.fnSetButton();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	//this.FormBtns.Excel.set_enable(false);
        	//this.FormBtns.Print.set_enable(false);

        	if(this.FormInfo.TY_AUTH == "R") {
        		this.FormBtns.Select.set_enable(true);
        		return;
        	}

        	var frmStatus = this.gfnGetFormStatus(this);
        	switch(frmStatus) {
        	case "I":
        		this.FormBtns.Select.set_enable(false);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(false);
        		/*Tab제어*/
        		this.divData.form.tabData.tab3.set_enable(false);
        		this.divData.form.tabData.tab4.set_enable(false);
        		break;
        	case "U":
        		this.FormBtns.Select.set_enable(true);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(true);
        		break;
        	case "D":
        		break;
        	default: /*기본(조회완료)*/
        		this.FormBtns.Select.set_enable(true);
        		this.FormBtns.Save.set_enable(false);
        		this.FormBtns.Del.set_enable(true);
        		/*Tab제어*/
        		this.divData.form.tabData.tab3.set_enable(true);
        		this.divData.form.tabData.tab4.set_enable(true);
        	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.TY_PROJ = "";

        	this.serverTime = "";
        	this.gfnGetServerTime("serverTime");

        	this.serverTimeStr = this.gfnGetDigit(this.serverTime.substring(0, 10));

        	//계약내역
        	this.dxGrid1 = this.divData.form.tabData.tab2.form.objGrdtab2;
        	//공동도급사
        	this.dxGrid2 = this.divData.form.tabData.tab3.form.objGrdtab3;
        	//관계사
        	this.dxGrid3 = this.divData.form.tabData.tab4.form.objGrdtab4;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DO", "DOD_CONT_YR_LIST","NM_CHG_CONT","NO_LVL");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DO", "DOD_ARCH_CONT_CO_CONTRCT");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DO", "DOD_ARCH_CONT_CONCERN");

        	var colNM_CHG_CONT = this.dxGrid1.getBindCellIndex("body", "NM_CHG_CONT");
        	var colDS_TY_CONT = this.dxGrid1.getBindCellIndex("body", "DS_TY_CONT");
        	var colNO_ORD = this.dxGrid1.getBindCellIndex("body", "NO_ORD");
        	var colNO_CONT = this.dxGrid1.getBindCellIndex("body", "NO_CONT");
        	var colNO_CHG_CONT = this.dxGrid1.getBindCellIndex("body", "NO_CHG_CONT");
        	var colYN_MAIN = this.dxGrid1.getBindCellIndex("body", "YN_MAIN");
        	var colDS_CD_BONBU = this.dxGrid1.getBindCellIndex("body", "DS_CD_BONBU");
        	var colDS_CD_LOC = this.dxGrid1.getBindCellIndex("body", "DS_CD_LOC");
        	var colRT_OUR = this.dxGrid1.getBindCellIndex("body", "RT_OUR");
        	var colRT_TAX = this.dxGrid1.getBindCellIndex("body", "RT_TAX");
        	var colDT_CONT = this.dxGrid1.getBindCellIndex("body", "DT_CONT");
        	var colDT_CONST_SD = this.dxGrid1.getBindCellIndex("body", "DT_CONST_SD");
        	var colDT_CONST_ED = this.dxGrid1.getBindCellIndex("body", "DT_CONST_ED");
        	var colAM_SUP = this.dxGrid1.getBindCellIndex("body", "AM_SUP");
        	var colAM_VAT = this.dxGrid1.getBindCellIndex("body", "AM_VAT");
        	var colAM_TXF = this.dxGrid1.getBindCellIndex("body", "AM_TXF");
        	var colAM_TOT = this.dxGrid1.getBindCellIndex("body", "AM_TOT");
        	var colAM_CHG = this.dxGrid1.getBindCellIndex("body", "AM_CHG");
        	var colAM_SUP_OUR = this.dxGrid1.getBindCellIndex("body", "AM_SUP_OUR");
        	var colAM_VAT_OUR = this.dxGrid1.getBindCellIndex("body", "AM_VAT_OUR");
        	var colAM_TXF_OUR = this.dxGrid1.getBindCellIndex("body", "AM_TXF_OUR");
        	var colAM_TOT_OUR = this.dxGrid1.getBindCellIndex("body", "AM_TOT_OUR");
        	var colAM_CHG_OUR = this.dxGrid1.getBindCellIndex("body", "AM_CHG_OUR");


        	this.dxGrid1.setCellProperty("body", colNM_CHG_CONT, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colDS_TY_CONT, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colNO_ORD, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colNO_CONT, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colNO_CHG_CONT, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colYN_MAIN, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colDS_CD_BONBU, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colDS_CD_LOC, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colRT_OUR, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colRT_TAX, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colDT_CONT, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colDT_CONST_SD, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colDT_CONST_ED, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colAM_SUP, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colAM_VAT, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colAM_TXF, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colAM_TOT, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colAM_CHG, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colAM_SUP_OUR, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");

        	this.dxGrid1.setCellProperty("body", colAM_VAT_OUR, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colAM_TXF_OUR, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colAM_TOT_OUR, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");
        	this.dxGrid1.setCellProperty("body", colAM_CHG_OUR, "cssclass", "expr: TY_CONT == 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : TY_CONT != 'SA07502' && NO_LVL == '0' ? 'BACK_GangJo' : ''");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_FIELD", "string");
        	this.dsSelect.addColumn("NO_CONT", "string");
        	this.dsSelect.addColumn("NO_CHG_CONT", "string");
        };

        this.fnInitSelect = function(){
        	var strSvcId    = "selectBase";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectBase=dsInitSearch";
        	var outData     = "dsInitBase=selectBase0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        };

        /************************************************************************
         * 트렌젝션 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function(obj,e){
        	var tIdx = this.divData.form.tabData.tabindex;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_FIELD", this.dsInitSearch.getColumn(0, "CD_FIELD"));
        	this.dsSelect.setColumn(0, "NO_CONT", this.dsInitSearch.getColumn(0, "NO_CONT"));
        	this.dsSelect.setColumn(0, "NO_CHG_CONT", this.dsInitSearch.getColumn(0, "NO_CHG_CONT"));

        	var strSvcId    = "select"+tIdx;
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";
        	if(tIdx == 0){
        		inData      = "select0=dsSelect";
        		outData     = "dsBase=select00";
        	} else if(tIdx == 1){
        		this.dsSearchOfTab2.setColumn(0, "CD_FIELD", this.dsInitSearch.getColumn(0, "CD_FIELD"));

        		inData      = "select1=dsSearchOfTab2";
        		outData     = "dsList1=select10";
        	} else if(tIdx == 2){
        		inData      = "select2=dsSelect";
        		outData     = "dsList2=select20";
        	} else if(tIdx == 3){
        		inData      = "select3=dsSelect";
        		outData     = "dsList3=select30";
        	}
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

        this.fnSave = function(obj,e){
        	if(!this.fnSaveValidate()) return;

        	this.dsBase.setColumn(0, "ID_ADD", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsBase";
        	var outData     = "dsBaseRst=save";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        };

        this.fnAdd = function(obj,e){
        	var nRow = this.dsBase.addRow();

        	this.dsBase.set_enableevent(false);
        	this.dsBase.setColumn(nRow, "CD_FIELD", this.getOwnerFrame().CD_FIELD);
        	this.dsBase.setColumn(nRow, "NO_CONT", this.dsInitBase.getColumn(0,"NO_CONT"));
        	this.dsBase.setColumn(nRow, "NO_CHG_CONT", this.dsInitBase.getColumn(0,"NO_CHG_CONT"));

        	this.dsBase.setColumn(nRow, "TYPE", this.getOwnerFrame().TYPE);
        	this.dsBase.setColumn(nRow, "DT_CONT", this.serverTimeStr);
        	this.dsBase.setColumn(nRow, "NM_BIZ", this.dsInitBase.getColumn(0,"NM_BIZ"));
        	this.dsBase.setColumn(nRow, "NM_TY_CONT", this.dsInitBase.getColumn(0,"NM_TY_CONT"));
        	this.dsBase.setColumn(nRow, "YN_MAIN", this.dsInitBase.getColumn(0,"YN_MAIN"));

        	this.dsBase.setColumn(nRow, "DT_CONST_ST", this.dsInitBase.getColumn(0,"DT_CONST_ST"));
        	this.dsBase.setColumn(nRow, "DT_CONST_ED", this.dsInitBase.getColumn(0,"DT_CONST_ED"));
        	this.dsBase.setColumn(nRow, "RT_TAX", this.dsInitBase.getColumn(0,"RT_TAX"));
        	this.dsBase.setColumn(nRow, "RT_OUR", this.dsInitBase.getColumn(0,"RT_OUR"));
        	this.dsBase.setColumn(nRow, "RT_ADV", this.dsInitBase.getColumn(0,"RT_ADV"));
        	this.dsBase.setColumn(nRow, "NO_REG_SEAL", this.dsInitBase.getColumn(0,"NO_REG_SEAL"));
        	this.dsBase.setColumn(nRow, "DS_CND_COLT", this.dsInitBase.getColumn(0,"DS_CND_COLT"));

        	this.dsBase.setColumn(nRow, "AM_SUP", 0);
        	this.dsBase.setColumn(nRow, "AM_VAT", 0);
        	this.dsBase.setColumn(nRow, "AM_TXF", 0);
        	this.dsBase.setColumn(nRow, "AM_SUP_OUR", 0);
        	this.dsBase.setColumn(nRow, "AM_VAT_OUR", 0);
        	this.dsBase.setColumn(nRow, "AM_TXF_OUR", 0);
        	this.dsBase.setColumn(nRow, "YN_TAX_NA", this.dsInitBase.getColumn(0,"YN_TAX_NA"));

        	this.dsBase.set_enableevent(true);
        };

        this.fnDel = function(obj,e){
        	this.gfnConfirm("삭제 하시겠습니까?", function(strId, val){
        		if(val == true) {
        			var strSvcId    = "delete";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "delete=dsBase";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcType , 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc,false); // 통신방법 정의 [생략가능]
        		}
        	});
        };


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	if (errorCode == 0) {
        		if(svcID == "selectBase"){

        			if(this.dsInitBase.getColumn(0, "YN_TAX_NA") == "Y"){
        				this.divData.form.tabData.tab1.form.ctxtRT_ARCH.set_readonly(true);
        				this.divData.form.tabData.tab1.form.ctxtAM_LAND00.set_readonly(true);
        				this.divData.form.tabData.tab1.form.ctxtAM_LAND05.set_readonly(true);
        			} else {
        				this.divData.form.tabData.tab1.form.ctxtRT_ARCH.set_readonly(false);
        				this.divData.form.tabData.tab1.form.ctxtAM_LAND00.set_readonly(false);
        				this.divData.form.tabData.tab1.form.ctxtAM_LAND05.set_readonly(false);
        			}
        		} else if(svcID == "select0"){
        			if(this.dsBase.getRowCount() == 0){
        				this.fnAdd();
        			} else {
        				var _sup, _vat, _txf
        				  , _supOur, _vatOur, _txfOur= 0;
        				_sup = nexacro.toNumber(this.dsBase.getColumn(0, "AM_SUP"), 0);
        				_vat = nexacro.toNumber(this.dsBase.getColumn(0, "AM_VAT"), 0);
        				_txf = nexacro.toNumber(this.dsBase.getColumn(0, "AM_TXF"), 0);

        				this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF.set_value(_sup+_txf);
        				this.divData.form.tabData.tab1.form.ctxtAM_TOT.set_value(_sup+_vat+_txf);

        				_supOur = nexacro.toNumber(this.dsBase.getColumn(0, "AM_SUP_OUR"), 0);
        				_vatOur = nexacro.toNumber(this.dsBase.getColumn(0, "AM_VAT_OUR"), 0);
        				_txfOur = nexacro.toNumber(this.dsBase.getColumn(0, "AM_TXF_OUR"), 0);

        				this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF_OUR.set_value(_supOur+_txfOur);
        				this.divData.form.tabData.tab1.form.ctxtAM_TOT_OUR.set_value(_supOur+_vatOur+_txfOur);


        				this.divData.form.tabData.tab1.form.divFile.form.set_enable(true);
        				// 첨부파일
        				//var cd_site = this.ccfCD_SITE.form.CDTextBox.value;
        				var fileManager = {};
        				fileManager.CD_GUBUN = "DOF1";
        				fileManager.CD_DIR = [ this.dsBase.getColumn(0, "CD_FIELD"), this.dsBase.getColumn(0, "NO_CONT"),this.dsBase.getColumn(0, "NO_CHG_CONT")];

        				fileManager.CD_REF1 = this.dsBase.getColumn(0, "CD_FIELD");
        				fileManager.CD_REF2 = this.dsBase.getColumn(0, "NO_CONT");
        				fileManager.CD_REF3 = this.dsBase.getColumn(0, "NO_CHG_CONT");
        				if(this.FormInfo.TY_AUTH == "R") {
        					fileManager.IS_READONLY = true;
        				} else {
        					fileManager.IS_READONLY = false;
        				}
        				// div FileManager 셋팅
        				this.divData.form.tabData.tab1.form.divFile.form.setFileManager(fileManager);
        			}

        			if(this.dsBase.getColumn(0, "YN_TAX_NA") == "Y"){
        				this.divData.form.tabData.tab1.form.ctxtRT_ARCH.set_readonly(true);
        				this.divData.form.tabData.tab1.form.ctxtAM_LAND00.set_readonly(true);
        				this.divData.form.tabData.tab1.form.ctxtAM_LAND05.set_readonly(true);
        			} else {
        				this.divData.form.tabData.tab1.form.ctxtRT_ARCH.set_readonly(false);
        				this.divData.form.tabData.tab1.form.ctxtAM_LAND00.set_readonly(false);
        				this.divData.form.tabData.tab1.form.ctxtAM_LAND05.set_readonly(false);
        			}

        			this.gfnSetFormStatus(this, "");
        			this.fnSetButton();
        		} else if(svcID == "save"){
        			this.dsInitSearch.setColumn(0, "CD_FIELD", this.dsBaseRst.getColumn(0, "OUT_CD_FIELD"));
        			this.dsInitSearch.setColumn(0, "NO_CONT", this.dsBaseRst.getColumn(0, "OUT_NO_CONT"));
        			this.dsInitSearch.setColumn(0, "NO_CHG_CONT", this.dsBaseRst.getColumn(0, "OUT_NO_CHG_CONT"));
        			this.FormBtns.Select.click();
        		} else if(svcID == "select1"){
        			this.gfnGridAfterSelect(this.dxGrid1);
        			this._gfnGridTreeOpen(this.dxGrid1, 2);
        		} else if(svcID == "delete"){
        			this.getParentContext().close();
        		}
        	} else {
        		this.gfnAlert(errorMsg);
        	}

        };

        this.dsBase_onvaluechanged = function(obj,e){
        	var _sup = 0, _vat = 0, _txf = 0, _rtour = 0;

        	if(e.oldvalue != e.newvalue) {
        		if(e.columnid == "AM_SUP"){
        			_sup = obj.getColumn(0, "AM_SUP");
        			if(this.dsBase.getColumn(0, "YN_TAX_NA") != "Y"){
        				_vat = nexacro.round(_sup * 0.1);
        			}
        			_txf = obj.getColumn(0, "AM_TXF");

        			this.dsBase.set_enableevent(false);
        			obj.setColumn(0, "AM_VAT", _vat);
        			this.dsBase.set_enableevent(true);

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT.set_value(_sup+_vat+_txf);

        			//당사지분율
        			_rtour = obj.getColumn(0, "RT_OUR");

        			_sup = nexacro.round(obj.getColumn(0, "AM_SUP") * (_rtour / 100));
        			_vat = nexacro.round(obj.getColumn(0, "AM_VAT") * (_rtour / 100));
        			_txf = obj.getColumn(0, "AM_TXF_OUR");

        			this.dsBase.set_enableevent(false);
        			obj.setColumn(0, "AM_SUP_OUR",_sup);
        			obj.setColumn(0, "AM_VAT_OUR",_vat);
        			obj.setColumn(0, "AM_TXF_OUR",_txf);
        			this.dsBase.set_enableevent(true);

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF_OUR.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT_OUR.set_value(_sup+_vat+_txf);
        		} else if(e.columnid == "AM_VAT"){
        			//계약도급액
        			_sup = obj.getColumn(0, "AM_SUP");
        			if(this.dsBase.getColumn(0, "YN_TAX_NA") != "Y"){
        				_vat = nexacro.round(_sup * 0.1);
        			}
        			_txf = obj.getColumn(0, "AM_TXF");

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT.set_value(_sup+_vat+_txf);

        			//당사지분율
        			_rtour = obj.getColumn(0, "RT_OUR");

        			_sup =obj.getColumn(0, "AM_SUP_OUR") ;
        			_vat = nexacro.round(obj.getColumn(0, "AM_VAT") * (_rtour / 100));
        			_txf = obj.getColumn(0, "AM_TXF_OUR");

        			this.dsBase.set_enableevent(false);
        			obj.setColumn(0, "AM_VAT_OUR",_vat);
        			this.dsBase.set_enableevent(true);

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF_OUR.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT_OUR.set_value(_sup+_vat+_txf);

        		} else if(e.columnid == "AM_TXF"){
        			//계약도급액
        			_sup = obj.getColumn(0, "AM_SUP");
        			if(this.dsBase.getColumn(0, "YN_TAX_NA") != "Y"){
        				_vat = nexacro.round(_sup * 0.1);
        			}
        			_txf = obj.getColumn(0, "AM_TXF");

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT.set_value(_sup+_vat+_txf);

        			//당사지분율
        			_rtour = obj.getColumn(0, "RT_OUR");

        			_sup = obj.getColumn(0, "AM_SUP_OUR");
        			_vat = obj.getColumn(0, "AM_VAT_OUR");
        			_txf = nexacro.round(obj.getColumn(0, "AM_TXF") * (_rtour / 100));

        			this.dsBase.set_enableevent(false);
        			obj.setColumn(0, "AM_TXF_OUR",_txf);
        			this.dsBase.set_enableevent(true);

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF_OUR.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT_OUR.set_value(_sup+_vat+_txf);
        		} else if(e.columnid == "RT_OUR"){
        			//당사지분율
        			_rtour = obj.getColumn(0, "RT_OUR");

        			_sup = nexacro.round(obj.getColumn(0, "AM_SUP") * (_rtour / 100));
        			_vat = nexacro.round(obj.getColumn(0, "AM_VAT") * (_rtour / 100));
        			_txf = nexacro.round(obj.getColumn(0, "AM_TXF") * (_rtour / 100));

        			this.dsBase.set_enableevent(false);
        			obj.setColumn(0, "AM_SUP_OUR",_sup);
        			obj.setColumn(0, "AM_VAT_OUR",_vat);
        			obj.setColumn(0, "AM_TXF_OUR",_txf);

        			this.dsBase.set_enableevent(true);

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF_OUR.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT_OUR.set_value(_sup+_vat+_txf);

        		} else if(e.columnid == "AM_SUP_OUR"){

        			_sup = obj.getColumn(0, "AM_SUP_OUR");
        			if(this.dsBase.getColumn(0, "YN_TAX_NA") != "Y"){
        				_vat = nexacro.round(_sup * 0.1);
        			}
        			_txf = obj.getColumn(0, "AM_TXF_OUR");

        			this.dsBase.set_enableevent(false);
        			obj.setColumn(0, "AM_VAT_OUR",_vat);
        			this.dsBase.set_enableevent(true);

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF_OUR.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT_OUR.set_value(_sup+_vat+_txf);

        		} else if(e.columnid == "AM_VAT_OUR" || e.columnid == "AM_TXF_OUR"){
        			//당사도급액
        			_sup = obj.getColumn(0, "AM_SUP_OUR");
        			_vat = obj.getColumn(0, "AM_VAT_OUR");
        			_txf = obj.getColumn(0, "AM_TXF_OUR");

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF_OUR.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT_OUR.set_value(_sup+_vat+_txf);

        		} else if(e.columnid == "YN_TAX_NA"){
        			if(obj.getColumn(0, "YN_TAX_NA") == "Y"){
        				this.divData.form.tabData.tab1.form.ctxtRT_ARCH.set_readonly(true);
        				obj.setColumn(0, "RT_TAX",0);
        				this.divData.form.tabData.tab1.form.ctxtAM_LAND00.set_readonly(true);
        				obj.setColumn(0, "AM_VAT",0);
        				this.divData.form.tabData.tab1.form.ctxtAM_LAND05.set_readonly(true);
        			} else {
        				this.divData.form.tabData.tab1.form.ctxtRT_ARCH.set_readonly(false);
        				this.divData.form.tabData.tab1.form.ctxtAM_LAND00.set_readonly(false);
        				this.divData.form.tabData.tab1.form.ctxtAM_LAND05.set_readonly(false);
        			}

        			_sup = obj.getColumn(0, "AM_SUP");
        			if(this.dsBase.getColumn(0, "YN_TAX_NA") != "Y"){
        				_vat = nexacro.round(_sup * 0.1);
        			}
        			_txf = obj.getColumn(0, "AM_TXF");

        			this.dsBase.set_enableevent(false);
        			obj.setColumn(0, "AM_VAT", _vat);
        			this.dsBase.set_enableevent(true);

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT.set_value(_sup+_vat+_txf);

        			//당사지분율
        			_rtour = obj.getColumn(0, "RT_OUR");

        			_sup = nexacro.round(obj.getColumn(0, "AM_SUP") * (_rtour / 100));
        			_vat = nexacro.round(obj.getColumn(0, "AM_VAT") * (_rtour / 100));
        			_txf = obj.getColumn(0, "AM_TXF_OUR");

        			this.dsBase.set_enableevent(false);
        			obj.setColumn(0, "AM_SUP_OUR",_sup);
        			obj.setColumn(0, "AM_VAT_OUR",_vat);
        			obj.setColumn(0, "AM_TXF_OUR",_txf);
        			this.dsBase.set_enableevent(true);

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF_OUR.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT_OUR.set_value(_sup+_vat+_txf);
        		}

        		if(this.gfnGetFormStatus(this) == "I"){
        			this.gfnSetFormStatus(this, "I");
        		}else{
        			this.gfnSetFormStatus(this, "U");
        		}
        		this.fnSetButton();
        	}
        };

        this.fnSaveValidate = function(){
        	if(this.gfnIsNull(this.dsBase.getColumn(0, "NM_CHG_CONT"))){
        		this.gfnAlert("계약명을 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "DT_CONT"))){
        		this.gfnAlert("계약일자를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "DT_CONST_ST"))){
        		this.gfnAlert("착공일자를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "DT_CONST_ED"))){
        		this.gfnAlert("준공일자를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "RT_TAX"))){
        		this.gfnAlert("과세율을 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "RT_OUR"))){
        		this.gfnAlert("당사지분율을 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "AM_SUP"))){
        		this.gfnAlert("계약 공급가를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "AM_VAT"))){
        		this.gfnAlert("계약 부가세를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "AM_TXF"))){
        		this.gfnAlert("계약 비과세를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "AM_SUP_OUR"))){
        		this.gfnAlert("당사 공급가를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "AM_VAT_OUR"))){
        		this.gfnAlert("당사 부가세를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "AM_TXF_OUR"))){
        		this.gfnAlert("당사 비과세를 입력해주세요.");
        		return false;
        	}


        	return true;
        }

        this.divData_tabData_onchanged = function(obj,e){
        	switch(obj.tabindex) {
        		case 0:
        			this.fnSetButton();
        		break;
        		case 1:
        		case 2:
        		case 3:
        			this.fnSelect();
        			this.FormBtns.Select.set_enable(false);
        			this.FormBtns.Save.set_enable(false);
        			this.FormBtns.Del.set_enable(false);
        		break;

        	}
        };

        this.fnDialogCallback = function(svcID, value) {
        	this.fnSelect();
        };

        this.divData_tabData_btnReg_onclick = function(obj,e){
        	var tIdx = this.divData.form.tabData.tabindex;

        	var popStr = "";
        	var _width = 0;
        	switch(tIdx) {
        		case 2:
        			//수주 > 주택 > 공통 > 공동도급사 관리
        			popStr = "DOZ_CO_CONTRCT";
        			_width = 1220;
        		break;
        		case 3:
        			//수주 > 주택 > 공통 > 관계사 관리
        			popStr = "DOZ_CONTRCT_CONCERN";
        			_width = 850;
        		break;
        	}


        	var param = {
        		CD_FIELD : this.dsBase.getColumn(0, "CD_FIELD")
        	  , DS_FIELD : this.dsInitBase.getColumn(0, "DS_FIELD")
        	  , NO_CONT : this.dsBase.getColumn(0, "NO_CONT")
        	  , NO_CHG_CONT : this.dsBase.getColumn(0, "NO_CHG_CONT")
        	  , TY_PROJ : this.TY_PROJ
        	}

        	this.gfnFormOpen("DOZ", popStr, "fnDialogCallback", param, _width, 600);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab1.form.ctclDT_ACQ.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab1.form.ctclDT_ACQ00.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab1.form.ctclDT_ACQ01.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab1.form.cchkYN_MAIN.addEventHandler("onchanged",this.divSearch_cchkYN_Pre_onchanged,this);
            this.divData.form.tabData.tab3.form.btnReg.addEventHandler("onclick",this.divData_tabData_btnReg_onclick,this);
            this.divData.form.tabData.tab4.form.btnReg.addEventHandler("onclick",this.divData_tabData_btnReg_onclick,this);
            this.dsBase.addEventHandler("onvaluechanged",this.dsBase_onvaluechanged,this);
        };
        this.loadIncludeScript("DOD_CONT_YR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
