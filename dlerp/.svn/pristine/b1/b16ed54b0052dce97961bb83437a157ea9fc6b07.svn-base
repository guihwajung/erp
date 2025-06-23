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
            this.set_titletext("계약-주택최초계약관리");
            this.set_scrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,920);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectBase</Col><Col id=\"SP\">DODPR_ARCH_FIELD_TO_PROJ_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"SP\">DODPR_ARCH_CONT_INFO_SELECT</Col><Col id=\"TARGET\">select0</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DODPR_ARCH_CONT_MERGE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DODPR_ARCH_CONT_CO_CONTRCT_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DODPR_ARCH_CONT_CONCERN_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DOAPR_ARCH_PROJ_SELECT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DODPR_ARCH_PROJ_ALL</Col></Row><Row><Col id=\"TARGET\">selectCharge</Col><Col id=\"SP\">DOAPR_PROJ_YNCHARGE_SELECT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DODPR_CONT_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ENF", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBase", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NO_CHG_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NM_CHG_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONST_ST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONST_ED\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TXF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUP_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TXF_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_ADV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ADV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONT_GRNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_REG_SEAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CND_COLT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REQTM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_WITHINDAYS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_TERM1\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TERM1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_TERM2\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TERM2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_RM_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"ID_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BONBU\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BONBU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUMUN\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BUMUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SAUP_CNTR\" type=\"STRING\" size=\"256\"/><Column id=\"NM_SAUP_CNTR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SCALE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_AREA_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_TMP_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_DELAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_RM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MOV_EXP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ASSO_EXP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COLT_FUND\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_TAX_NA\" type=\"STRING\" size=\"256\"/><Column id=\"YN_NEW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LOC", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseRst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInitSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NO_CHG_CONT\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_REQTM", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_TERM1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_TERM2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_COLT_FUND", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList5", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList6", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBase2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BIZ_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BIZ_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIZ_MHOD\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIZ_MHOD\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PRDCT\" type=\"STRING\" size=\"256\"/><Column id=\"NM_PRDCT\" type=\"STRING\" size=\"256\"/><Column id=\"NM_PROV\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ACQ\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ACQ\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ENF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ENF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_NM_ENF\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ENF_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACQ\" type=\"STRING\" size=\"256\"/><Column id=\"NM_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LAND_CLS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LOCAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CITY_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PUB_NOTICE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_USE_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ROAD_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONT_LIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_AREA_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND_OVR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND_OVR_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_LAND_OVR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_ARCH_TOP\" type=\"INT\" size=\"256\"/><Column id=\"NO_ARCH_BOTTM\" type=\"INT\" size=\"256\"/><Column id=\"NO_ARCH_UNDR\" type=\"INT\" size=\"256\"/><Column id=\"SZ_ARCH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_ARCH_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_ARCH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_SHOP_TOP\" type=\"INT\" size=\"256\"/><Column id=\"SZ_SHOP_BOTTM\" type=\"INT\" size=\"256\"/><Column id=\"SZ_SHOP_UNDR\" type=\"INT\" size=\"256\"/><Column id=\"SZ_SHOP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_SHOP_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_SHOP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BIZ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_LAND_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PERMIT_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_COST_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FILE_ATTCH\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FIELD_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CLS\" type=\"STRING\" size=\"256\"/><Column id=\"AM_OCAPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BCAPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OCAPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"RT_BCAPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"RT_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DI\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AI\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FI\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SCALE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTBIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AMBIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRcvYNCharge", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"YN_EXISTS\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_PERMIT_STAT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LAND_STAT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTOT", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_TOT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_PROJ","0.0","staCD_PROJ:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PROJ","ctxtCD_PROJ:0.0","staCD_PROJ:10.0","500","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
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

            obj = new Static("staTab1Title","5","0",null,"22","35",null,null,null,null,null,this.divData.form.tabData.tab1.form);
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
            obj.set_taborder("7");
            obj.set_text("사업유형");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD","5","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("15");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00","124","27","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","124","56","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNM_PROV","643","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj.set_text("계약일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta18","762","27","510","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNM_ENF","643","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("10");
            obj.set_text("계약수행방식");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT","5","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("20");
            obj.set_text("착공일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta09","124","114","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ","643","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("23");
            obj.set_text("준공일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta10","762","56","510","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta12","762","114","510","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS","5","172","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("34");
            obj.set_text("계약 공급가(과세)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ACC","5","259","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("40");
            obj.set_text("계약 부가세");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04","124","172","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta05","124","259","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LOCAL","643","172","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("37");
            obj.set_text("당사 공급가(과세)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CITY_PLAN","643","259","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("43");
            obj.set_text("당사 부가세");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_PUB_NOTICE","5","201","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("46");
            obj.set_text("계약 공급가(면세)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06","124","201","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_USE_STAT","643","201","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("49");
            obj.set_text("당사 공급가(면세)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta07","762","172","510","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta08","762","259","510","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta13","762","201","510","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT","5","288","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("52");
            obj.set_text("계약 총금액");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta14","124","288","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CONT_LIMIT","643","288","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("55");
            obj.set_text("당사 총금액");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta15","762","288","510","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD00","5","143","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("26");
            obj.set_text("과세율");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta16","124","143","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ENF_DEPT00","643","143","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("30");
            obj.set_text("당사 지분율");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta17","762","143","510","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta03","453","317","191","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT00","5","317","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("58");
            obj.set_text("선수금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta19","124","317","211","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ00","643","317","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("64");
            obj.set_text("선수금율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta20","1081","317","191","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta21","762","317","201","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS00","5","346","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("72");
            obj.set_text("수금조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ACC00","5","375","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("78");
            obj.set_text("관리사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta22","124","346","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta23","124","375","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LOCAL00","643","346","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("75");
            obj.set_text("사용인감");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CITY_PLAN00","643","375","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("81");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_PUB_NOTICE00","5","404","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("84");
            obj.set_text("이주비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta24","124","404","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_USE_STAT00","643","404","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("87");
            obj.set_text("조합운영비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta25","762","346","510","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta26","762","375","510","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta27","762","404","510","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT00","5","433","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("90");
            obj.set_text("공사대금회수기준");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta28","124","433","211","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CONT_LIMIT00","643","433","120","59",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("96");
            obj.set_text("지급방식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta29","762","433","510","59",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD01","334","317","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("61");
            obj.set_text("계약보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ENF_DEPT01","962","317","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("68");
            obj.set_text("지체보상율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT01","5","462","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("104");
            obj.set_text("지급시기");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02","124","462","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTab1Title02","5","497",null,"22","35",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("109");
            obj.set_text("공사개요");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ_STAT00","5","525","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("110");
            obj.set_text("공사규모");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ00","5","554","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("113");
            obj.set_text("대지면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta11","124","525","1148","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta30","124","554","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNM_ENF00","643","554","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("119");
            obj.set_text("연면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta32","762","554","510","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTab1Title03","5","590",null,"22","35",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("125");
            obj.set_text("계약정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ_STAT01","5","617","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("126");
            obj.set_text("공사분야");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta33","124","617","1148","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("127");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta31","124","85","1148","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfDS_REGION","229","90","406","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("18");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_LOC","staTY_BIZ_MHOD:3","90","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("17");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_LOC");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR2","642","90","624","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("19");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ02","5","646","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("129");
            obj.set_text("현장코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta36","124","646","1148","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("130");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT","staCD_BIZ_STAT:3","32","510","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ","staNM_PROV:3","32","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT00","staTY_BIZ:3","61","510","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboTY_CONT","staNM_ENF:3","62","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_CONT");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_Pre","965","60","60","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("13");
            obj.set_text("가계약");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("Y");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_Pre00","cchkYN_Pre:10","60","74","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("14");
            obj.set_text("Main여부");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("Y");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ00","staTY_PRDCT:3","119","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ01","staDT_ACQ:3","119","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH","staTY_BIZ_MHOD00:3","148","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("28");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH00","staDS_ENF_DEPT00:3","148","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("32");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND","staDS_LAND_CLS:3","177","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("36");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND00","staDS_ACC:3","265","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("42");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND01","staDS_PUB_NOTICE:3","206","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("48");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TOT","staDS_ROAD_STAT:3","293","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("54");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TOT_OUR","staDS_CONT_LIMIT:3","293","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("57");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND04","staDS_USE_STAT:3","206","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("51");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND05","staDS_CITY_PLAN:3","265","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("45");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND06","staDS_LOCAL:3","177","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("39");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND08","staTY_BIZ_MHOD01:4","322","181","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("63");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09","staTY_PRDCT00:3","322","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("60");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND10","staDT_ACQ00:3","322","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("66");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND11","staDS_ENF_DEPT01:3","321","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("70");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT01","staDS_LOCAL00:3","351","500","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("77");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT02","staDS_ACC00:3","380","510","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("80");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT03","staDS_CITY_PLAN00:3","380","500","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("83");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND12","staDS_PUB_NOTICE00:3","409","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("86");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND13","staDS_USE_STAT00:3","409","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("89");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_COLT_FUND","staDS_ROAD_STAT00:3","438","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("92");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_COLT_FUND");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta37","454","433","190","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_REQTM","458","438","180","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("95");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_REQTM");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT02","335","433","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("93");
            obj.set_text("청구시기");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_TERM1","staDS_CONT_LIMIT00:3","439","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("98");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_TERM1");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_TERM2","staDS_CONT_LIMIT00:3","466","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("101");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_TERM2");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH01","965","439","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("99");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH02","965","466","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("102");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent05","staDS_ROAD_STAT01:4","467","70","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("106");
            obj.set_text("청구일로부터");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent00","248","467","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("108");
            obj.set_text("일");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND14","204","468","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("107");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT04","staCD_BIZ_STAT00:3","530","510","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("112");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH03","424","559","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("115");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfCD_BONBU","staCD_BIZ_STAT01:3","622","406","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_16");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("128");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_FIELD","228","651","500","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("132");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_FIELD","staTY_BIZ02:3","651","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("131");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent01","622","559","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("116");
            obj.set_text("평");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH05","128","559","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("117");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent02","327","559","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("118");
            obj.set_text("m²");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent03","966","557","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("124");
            obj.set_text("m²");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH04","767","558","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("123");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent04","1252","557","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("122");
            obj.set_text("평");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH06","1054","558","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("121");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent06","1029","439","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("100");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent07","1029","465","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("103");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent08","189","148","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("29");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent09","827","148","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("33");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10","829","322","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("67");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent11","1148","321","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("71");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT05","128","351","510","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("74");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta27_00","124","675","1148","149",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("134");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staID_FILE_ATTCH","5","675","120","149",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("133");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("divFile","127","675","1130","150",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("135");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_TAX_NA","219","146","74","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("136");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_text("영세");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_value("N");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00","267","148","372","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("137");
            obj.set_text("(영세율은 차수계약,변경계약,청구내역이 생성되면 변경 불가.)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00_00_01","977","177","78","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("138");
            obj.set_text("(세금계산서)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00_00_00_00","977","206","78","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("139");
            obj.set_text("(계산서)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00_00","339","177","78","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("140");
            obj.set_text("(세금계산서)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00_00_00","339","206","78","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("141");
            obj.set_text("(계산서)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_SUPTXF","5","230","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("142");
            obj.set_text("계약 공급가(소계)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta34","124","230","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("143");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_SUPTXF_OUR","643","230","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("144");
            obj.set_text("당사 공급가(소계)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta35","762","230","510","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("145");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SUPTXF","128","235","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("146");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SUPTXF_OUR","766","235","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("147");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("공동도급사");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"3","60","24","5",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj.set_text("등록");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGrdtab2","5","30",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("관계사");
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
            obj.set_text("프로젝트 기본정보");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("div01","0","0",null,"525","0",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("4");
            obj.set_visible("false");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","2",null,"22","9",null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트 개요");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ_STAT","5","27","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("검토상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ","5","56","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("2");
            obj.set_text("사업유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD","5","85","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("3");
            obj.set_text("사업방식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta00","120","27","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta01","120","56","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta02","120","85","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staNM_PROV","635","27","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("7");
            obj.set_text("정보제공자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta18","750","27","527","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staNM_ENF","635","56","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("9");
            obj.set_text("사업시행사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_ENF_DEPT","635","85","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("10");
            obj.set_text("사업시행담당부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_PROV","755","32","305","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT","5","114","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("12");
            obj.set_text("상품분류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta09","120","114","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ","635","114","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("14");
            obj.set_text("정보입수일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta10","750","56","527","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_ENF","755","61","305","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("16");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta11","750","85","527","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ENF_DEPT","755","90","516","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("18");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta12","750","114","212","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ","755","116","106","25",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta03","120","143","1157","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staCD_LOC","5","143","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("22");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS","5","172","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("23");
            obj.set_text("지목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta04","120","172","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_LOCAL","635","172","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("25");
            obj.set_text("지역지구");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta07","750","172","527","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LOCAL","755","177","516","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("27");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS","126","176","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("28");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR2","638","148","633","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("29");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS00","126","32","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("30");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS01","126","61","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("31");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS02","126","90","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("32");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS03","126","118","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("33");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS04","350","148","281","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("34");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS05","126","148","92","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("35");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_PROV00","1067","32","204","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("36");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_PROV01","1067","61","204","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("37");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS06","229","148","112","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("38");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ00","961","114","119","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("39");
            obj.set_text("시공사선정일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta29","1079","114","198","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_COST_SEL","1087","116","106","25",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("41");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00_00_00_00_00_01_00_00","719","298","559","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00_00_00_00_00_01_00","719","269","559","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00","243","298","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00_00","362","269","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta26_00","123","335","1155","40",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT","4","240","240","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("47");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta26","123","413","1155","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_FI","4","413","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("49");
            obj.set_text("금융자문사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new TextArea("txtDS_FI","129","417","247","22",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("50");
            obj.set_maxlength("1000");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00","120","201","201","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BIZ1","126","206","186","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("52");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staAM_BIZ1","5","201","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("53");
            obj.set_text("사업비(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staAM_CONST1","320","201","117","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("54");
            obj.set_text("공사비(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta22_00","436","201","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST1","442","206","189","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("56");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staAM_LAND1","635","201","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("57");
            obj.set_text("토지비(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta19_00","750","201","204","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND1","756","206","191","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("59");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staAM_AREA1","953","201","117","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("60");
            obj.set_text("평단가금액(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta24_00","1069","201","208","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_AREA1","1075","206","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("62");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT00","243","240","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("63");
            obj.set_text("자기자본");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT00_00","362","240","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("64");
            obj.set_text("타인자본");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT00_00_00","481","240","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("65");
            obj.set_text("기타(분양금 등)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staAM_TOT","600","240","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("66");
            obj.set_text("계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT00_00_00_00_00","719","240","559","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("67");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staMoneyState","4","269","120","59",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("68");
            obj.set_text("자금조달");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staAM_OCAPITAL","123","269","121","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("69");
            obj.set_text("금액(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staRT_OCAPITAL","123","298","121","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("70");
            obj.set_text("비율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_SCALE","4","335","120","40",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("71");
            obj.set_text("사업규모");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new TextArea("txtDS_SCALE","129","339","1142","32",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("72");
            obj.set_maxlength("1000");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00","243","269","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_OCAPITAL","249","274","106","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("74");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_OCAPITAL","249","303","106","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("75");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0.00");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BCAPITAL","368","274","106","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("76");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00_00_00","362","298","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_BCAPITAL","368","303","106","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("78");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0.00");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00_00_00_00","481","269","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ETC","487","274","106","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("80");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00_00_00_00_00","481","298","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ETC","487","303","106","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("82");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0.00");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00_00_00_00_00_00","600","298","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_TOT","606","303","106","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("84");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0.00");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00_00_00_00_00_01","600","269","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TOT","606","274","106","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("86");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_AMBIGO","725","274","547","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("87");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_RTBIGO","725","303","547","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("88");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_RM1","4","374","120","40",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("89");
            obj.set_text("사업조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta26_00_00","123","374","1155","40",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RM1","129","378","1142","32",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("91");
            obj.set_maxlength("1000");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta26_01","123","442","1155","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new TextArea("txtDS_AI","129","446","247","22",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("93");
            obj.set_maxlength("1000");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_AI","4","442","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("94");
            obj.set_text("회계자문사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("sta26_01_00","123","471","1155","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new TextArea("txtDS_DI","129","475","247","22",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("96");
            obj.set_maxlength("1000");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_DI","4","471","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div01.form);
            obj.set_taborder("97");
            obj.set_text("설계용역사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div01.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,"525","0",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta23_00","749","321","527","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta23_00_00","749","350","527","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","2",null,"22","9",null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("2");
            obj.set_text("프로젝트 개요");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ_STAT","5","27","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("검토상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ","5","56","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("사업유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD","5","85","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("5");
            obj.set_text("사업방식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00","120","27","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta01","120","56","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta02","120","85","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staNM_PROV","635","27","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("정보제공자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta18","750","27","527","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staNM_ENF","635","56","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("11");
            obj.set_text("사업시행사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_ENF_DEPT","635","85","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("사업시행담당부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_PROV","755","32","305","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT","5","114","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("14");
            obj.set_text("상품분류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta09","120","114","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ","635","114","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("16");
            obj.set_text("정보입수일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta10","750","56","527","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_ENF","755","61","305","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("18");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta11","750","85","527","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ENF_DEPT","755","90","516","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("20");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta12","750","114","212","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ","755","116","106","25",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta03","120","143","1157","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_LOC","5","143","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("24");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staTab1Title00","4","220",null,"22","10",null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("25");
            obj.set_text("");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS","5","172","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("26");
            obj.set_text("지목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_ACC","5","201","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("27");
            obj.set_text("접근성");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta04","120","172","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta05","120","201","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_LOCAL","635","172","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("30");
            obj.set_text("지역지구");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_CITY_PLAN","635","201","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("31");
            obj.set_text("도시계획");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_PUB_NOTICE","5","230","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("32");
            obj.set_text("공시지가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta06","120","230","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_USE_STAT","635","230","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("34");
            obj.set_text("이용상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta07","750","172","527","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LOCAL","755","177","516","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("36");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta08","750","201","527","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CITY_PLAN","755","206","516","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("38");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta13","750","230","527","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT","5","259","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("40");
            obj.set_text("도로현황");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta14","120","259","516","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_CONT_LIMIT","635","259","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("42");
            obj.set_text("건축제한");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta15","750","259","527","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ROAD_STAT","126","263","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("44");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CONT_LIMIT","755","263","516","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("45");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_USE_STAT","755","235","516","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("46");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ACC","126","206","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("47");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS","126","176","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("48");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PUB_NOTICE","126","235","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("49");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR2","638","148","633","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("50");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS00","126","32","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("51");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS01","126","61","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("52");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS02","126","90","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("53");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS03","126","118","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("54");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS04","350","148","280","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("55");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS05","126","148","92","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("56");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_PROV00","1067","32","204","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("57");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_PROV01","1067","61","204","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("58");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS06","229","148","112","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("59");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ00","961","114","119","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("60");
            obj.set_text("시공사선정일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta29","1079","114","198","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_COST_SEL","1087","116","106","25",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("62");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_LAND_STAT00","5","321","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("63");
            obj.set_text("대지면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staTab1Title01","5","295",null,"22","15",null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("64");
            obj.set_text("건축 개요");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_PERMIT_STAT00","5","350","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("65");
            obj.set_text("지상연면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ01","5","379","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_text("건축면적");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_BIZ","5","408","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("67");
            obj.set_text("사업비(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_LAND_STAT","5","437","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("68");
            obj.set_text("토지작업현황");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_RM","5","466","116","39",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("69");
            obj.set_text("사업조건/규모");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta21","120","321","515","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta23","120","350","515","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta16","120","379","515","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_CONST","323","408","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("73");
            obj.set_text("공사비(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta25","120","437","515","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta17","120","408","204","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BIZ","126","413","189","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("76");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta22","438","408","197","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta26","120","466","1156","39",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_PERMIT_STAT","634","437","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("79");
            obj.set_text("인허가상황");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_LAND","634","408","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("80");
            obj.set_text("토지비(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staAR_SITE01","634","379","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("81");
            obj.set_text("상가면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_PERMIT_STAT00_00_00","634","350","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("82");
            obj.set_text("지하연면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_PERMIT_STAT00_00","634","321","116","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("83");
            obj.set_text("전체연면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta20","749","379","527","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta19","749","408","198","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND","755","413","185","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("86");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta28","749","437","527","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Combo("ccboCD_PERMIT_STAT","755","442","186","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("88");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_PERMIT_STAT");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_M00_00","825","326","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("89");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_M00_00_00","825","355","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("90");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_M","825","384","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("91");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent12","918","385","16","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("92");
            obj.set_text("m²");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent19_00_00","918","357","16","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("93");
            obj.set_text("m²");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent19_00","918","327","16","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("94");
            obj.set_text("m²");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP00_00","986","326","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("95");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP00_00_00","986","355","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("96");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP","986","384","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("97");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent18_00","1080","328","16","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("98");
            obj.set_text("평");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent18_00_00","1080","357","16","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("99");
            obj.set_text("평");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent11","1080","385","16","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("100");
            obj.set_text("평");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_AREA","946","408","128","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("101");
            obj.set_text("평단가금액(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta24","1073","408","203","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_SHOP","1156","384","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("103");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent14","1106","385","36","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("104");
            obj.set_text("건폐율");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent15","1248","385","16","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("105");
            obj.set_text("%");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_ARCH_M00","185","326","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("106");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_M00","185","355","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("107");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_ARCH_M","185","384","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("108");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent03","280","385","16","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("109");
            obj.set_text("m²");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent19","280","357","16","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("110");
            obj.set_text("m²");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent17","280","328","16","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("111");
            obj.set_text("m²");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_ARCH00","348","326","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("112");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent16","441","328","16","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("113");
            obj.set_text("평");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP00","348","355","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("114");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent18","441","357","16","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("115");
            obj.set_text("평");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_ARCH","348","384","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("116");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent05","441","385","16","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("117");
            obj.set_text("평");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent20","468","355","36","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("118");
            obj.set_text("용적율");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent07","469","385","36","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("119");
            obj.set_text("건폐율");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_SHOP00","518","355","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("120");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH","518","384","86","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("121");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent21","610","357","16","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("122");
            obj.set_text("%");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent04","610","385","16","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("123");
            obj.set_text("%");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Combo("ccboCD_LAND_STAT","126","442","186","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("124");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_LAND_STAT");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RM","126","470","1141","31",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("125");
            obj.set_readonly("true");
            obj.set_maxlength("1000");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST","445","413","182","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("126");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_AREA","1078","413","189","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("127");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent09","776","385","36","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form.div00.form);
            obj.set_taborder("128");
            obj.set_text("연면적");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab4.form.div00.addChild(obj.name, obj);

            obj = new Static("sta27","123","529","1153","149",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staID_FILE_ATTCH","4","529","120","149",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("2");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Div("divFile","123","527","1145","150",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("프로젝트 약정,공동도급사,관계사");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTab2Title1","5","0",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            obj.set_text("약정");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_visible("true");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGrdtab4","5","30",null,"200","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGrdtab5","5","259",null,"200","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Static("staTab2Title00","5","231",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("3");
            obj.set_text("공동도급");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_visible("true");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGrdtab6","5","505",null,"200","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("4");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Static("staTab2Title01","5","475",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("5");
            obj.set_text("관계사");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_visible("true");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.tabData.tab1.form.ctxtNM_CHG_CONT","value","dsBase","NM_CHG_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.tabData.tab1.form.ctclDT_ACQ","value","dsBase","DT_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tabData.tab1.form.ctclDT_ACQ00","value","dsBase","DT_CONST_ST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tabData.tab1.form.ctclDT_ACQ01","value","dsBase","DT_CONST_ED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tabData.tab1.form.ctxtAM_LAND","value","dsBase","AM_SUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tabData.tab1.form.ctxtAM_LAND00","value","dsBase","AM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab1.form.ctxtAM_LAND01","value","dsBase","AM_TXF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab1.form.ctxtRT_ARCH00","value","dsBase","RT_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab1.form.ctxtAM_LAND06","value","dsBase","AM_SUP_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab1.form.ctxtAM_LAND05","value","dsBase","AM_VAT_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab1.form.ctxtAM_LAND04","value","dsBase","AM_TXF_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab1.form.ctxtAM_LAND10","value","dsBase","RT_ADV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab1.form.ctxtAM_LAND09","value","dsBase","AM_ADV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tabData.tab1.form.ctxtAM_LAND08","value","dsBase","AM_CONT_GRNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tabData.tab1.form.ctxtNM_CHG_CONT01","value","dsBase","NO_REG_SEAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.tabData.tab1.form.ccboCD_REQTM","value","dsBase","CD_REQTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tabData.tab1.form.ctxtAM_LAND14","value","dsBase","NO_WITHINDAYS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tabData.tab1.form.ccboCD_TERM1","value","dsBase","CD_TERM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.tabData.tab1.form.ctxtRT_ARCH01","value","dsBase","RT_TERM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.tabData.tab1.form.ccboCD_TERM2","value","dsBase","CD_TERM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.tabData.tab1.form.ctxtRT_ARCH02","value","dsBase","RT_TERM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.tabData.tab1.form.ctxtNM_CHG_CONT03","value","dsBase","DS_RM_CHG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divSearch.form.ctxtCD_PROJ","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divSearch.form.ctxtDS_PROJ","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tabData.tab1.form.ctxtCD_FIELD","value","dsBase2","CD_FIELD_NEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tabData.tab1.form.ctxtDS_FIELD","value","dsBase2","DS_FIELD_NEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tabData.tab1.form.ccfCD_BONBU.form.CDTextBox","value","dsBase","CD_BONBU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.tabData.tab1.form.ccfCD_BONBU.form.DSTextBox","value","dsBase","NM_BONBU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab1.form.ctxtNM_CHG_CONT04","value","dsBase","DS_SCALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab1.form.ctxtRT_ARCH03","value","dsBase","SZ_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.tabData.tab1.form.ctxtNM_CHG_CONT02","value","dsBase","DS_RM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab1.form.ctxtAM_LAND12","value","dsBase","AM_MOV_EXP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.tabData.tab1.form.ctxtAM_LAND13","value","dsBase","AM_ASSO_EXP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.tabData.tab1.form.cchkYN_Pre","value","dsBase","YN_TMP_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.tabData.tab1.form.cchkYN_Pre00","value","dsBase","YN_MAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.tabData.tab1.form.ccboCD_LOC","value","dsBase","CD_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.tabData.tab1.form.ctxtDS_ADDR2","value","dsBase","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.tabData.tab1.form.ccfDS_REGION.form.CDTextBox","value","dsBase","CD_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.tabData.tab1.form.ccfDS_REGION.form.DSTextBox","value","dsBase","DS_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.tabData.tab1.form.ccboTY_CONT","value","dsBase","TY_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.tabData.tab1.form.ctxtNM_CHG_CONT00","value","dsSearch","NM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.tabData.tab1.form.ccboCD_COLT_FUND","value","dsBase","CD_COLT_FUND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.tabData.tab1.form.ctxtRT_ARCH05","value","dsBase","SZ_AREA_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.tabData.tab1.form.ctxtRT_ARCH04","value","dsBase","SZ_LAND_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.tabData.tab1.form.ctxtRT_ARCH06","value","dsBase","SZ_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.tabData.tab1.form.ctxtAM_LAND11","value","dsBase","RT_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.tabData.tab1.form.ctxtRT_ARCH","value","dsBase","RT_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.tabData.tab1.form.ccfTY_BIZ_MHOD.form.CDTextBox","value","dsBase","TY_BIZ_MHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.tabData.tab1.form.ccfTY_BIZ_MHOD.form.DSTextBox","value","dsBase","NM_BIZ_MHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divData.form.tabData.tab1.form.ctxtSZ_ARCH_M","value","dsBase","SZ_ARCH_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","divData.form.tabData.tab1.form.ctxtSZ_ARCH00","value","dsBase","SZ_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","divData.form.tabData.tab1.form.ctxtSZ_ARCH_M00","value","dsBase","SZ_AREA_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","divData.form.tabData.tab1.form.ctxtSZ_SHOP_TOP","value","dsBase","SZ_SHOP_TOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","divData.form.tabData.tab1.form.ctxtSZ_SHOP_BOTTM","value","dsBase","SZ_SHOP_BOTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","divData.form.tabData.tab1.form.ctxtSZ_SHOP_M","value","dsBase","SZ_SHOP_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","divData.form.tabData.tab1.form.ctxtSZ_SHOP_UNDR","value","dsBase","SZ_SHOP_UNDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","divData.form.tabData.tab1.form.ctxtSZ_SHOP00","value","dsBase","SZ_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","divData.form.tabData.tab1.form.ctxtSZ_SHOP_M00","value","dsBase","SZ_LAND_OVR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","divData.form.tabData.tab1.form.ctxtRT_SHOP00","value","dsBase","RT_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","ctxtNM_PROV00","value","dsBase","NM_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab1.form.ctxtNM_CHG_CONT05","value","dsBase","DS_CND_COLT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.tabData.tab1.form.chkYN_TAX_NA","value","dsBase","YN_TAX_NA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_M00_00_00","value","dsBase","SZ_LAND_UNDR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_M00","value","dsBase","SZ_LAND_OVR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_M00_00","value","dsBase","SZ_LAND_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP00_00_00","value","dsBase","SZ_LAND_UNDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_TOP","value","dsBase","SZ_SHOP_TOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_BOTTM","value","dsBase","SZ_SHOP_BOTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_M","value","dsBase","SZ_SHOP_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_UNDR","value","dsBase","SZ_SHOP_UNDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP00","value","dsBase","SZ_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP00_00","value","dsBase","SZ_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","divData.form.tabData.tab1.form.div00.form.ctxtRT_SHOP00","value","dsBase","RT_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","divData.form.tabData.tab1.form.div00.form.ctxtSZ_ARCH_M00","value","dsBase","SZ_AREA_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","divData.form.tabData.tab1.form.div00.form.ctxtSZ_ARCH_M","value","dsBase","SZ_ARCH_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","divData.form.tabData.tab1.form.div00.form.ctxtSZ_ARCH00","value","dsBase","SZ_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.tabData.tab4.form.div00.form.ctxtNM_PROV","value","dsBase2","NM_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab4.form.ctxtNM_PROV00","value","dsBase2","NM_ACQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab4.form.ctxtNM_PROV01","value","dsBase2","TY_NM_ENF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.tabData.tab4.form.div00.form.ctxtNM_ENF","value","dsBase2","NM_ENF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.tabData.tab4.form.div00.form.ctxtDS_ENF_DEPT","value","dsBase2","DS_ENF_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.tabData.tab4.form.div00.form.ctclDT_ACQ","value","dsBase2","DT_ACQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab4.form.div00.form.ctxtDS_LOCAL","value","dsBase2","DS_LOCAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.tabData.tab4.form.div00.form.ctxtDS_CITY_PLAN","value","dsBase2","DS_CITY_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.tabData.tab4.form.div00.form.ctxtDS_ROAD_STAT","value","dsBase2","DS_ROAD_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.tabData.tab4.form.div00.form.ctxtDS_CONT_LIMIT","value","dsBase2","DS_CONT_LIMIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.tabData.tab4.form.div00.form.ctxtDS_USE_STAT","value","dsBase2","DS_USE_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.tabData.tab4.form.div00.form.ctxtDS_ACC","value","dsBase2","DS_ACC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divData.form.tabData.tab4.form.div00.form.ctxtDS_LAND_CLS","value","dsBase2","DS_LAND_CLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.tabData.tab4.form.ctxtDS_LAND_CLS00","value","dsBase2","DS_BIZ_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divData.form.tabData.tab4.form.ctxtDS_LAND_CLS01","value","dsBase2","NM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.tabData.tab4.form.ctxtDS_LAND_CLS02","value","dsBase2","NM_BIZ_MHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.tabData.tab4.form.ctxtDS_LAND_CLS03","value","dsBase2","NM_PRDCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divData.form.tabData.tab4.form.ctxtDS_LAND_CLS04","value","dsBase2","DS_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divData.form.tabData.tab4.form.ctxtDS_LAND_CLS05","value","dsBase2","NM_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divData.form.tabData.tab4.form.ctxtDS_LAND_CLS06","value","dsBase2","CD_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divData.form.tabData.tab4.form.div00.form.ctxtDS_PUB_NOTICE","value","dsBase2","DS_PUB_NOTICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divData.form.tabData.tab4.form.div00.form.ctxtDS_ADDR2","value","dsBase2","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divData.form.tabData.tab4.form.div00.form.ctxtDS_LAND_CLS00","value","dsBase2","DS_BIZ_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divData.form.tabData.tab4.form.div00.form.ctxtDS_LAND_CLS01","value","dsBase2","NM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divData.form.tabData.tab4.form.div00.form.ctxtDS_LAND_CLS02","value","dsBase2","NM_BIZ_MHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divData.form.tabData.tab4.form.div00.form.ctxtDS_LAND_CLS03","value","dsBase2","NM_PRDCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divData.form.tabData.tab4.form.div00.form.ctxtDS_LAND_CLS04","value","dsBase2","DS_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divData.form.tabData.tab4.form.div00.form.ctxtDS_LAND_CLS05","value","dsBase2","NM_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divData.form.tabData.tab4.form.div00.form.ctxtNM_PROV00","value","dsBase2","NM_ACQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","divData.form.tabData.tab4.form.div00.form.ctxtNM_PROV01","value","dsBase2","TY_NM_ENF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","divData.form.tabData.tab4.form.div00.form.ctxtDS_LAND_CLS06","value","dsBase2","CD_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","divData.form.tabData.tab4.form.div00.form.ctclDT_COST_SEL","value","dsBase2","DT_COST_SEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","divData.form.tabData.tab4.form.div00.form.ctxtAM_BIZ","value","dsBase2","AM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","divData.form.tabData.tab4.form.div00.form.ctxtAM_LAND","value","dsBase2","AM_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","divData.form.tabData.tab4.form.div00.form.ccboCD_PERMIT_STAT","value","dsBase2","CD_PERMIT_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","divData.form.tabData.tab4.form.div00.form.ctxtSZ_SHOP_M00_00","value","dsBase2","SZ_LAND_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","divData.form.tabData.tab4.form.ctxtSZ_SHOP_M00_00_00","value","dsBase2","SZ_LAND_UNDR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","divData.form.tabData.tab4.form.div00.form.ctxtSZ_SHOP_M00_00_00","value","dsBase2","SZ_LAND_UNDR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","divData.form.tabData.tab4.form.ctxtSZ_SHOP_M00_00","value","dsBase2","SZ_LAND_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","divData.form.tabData.tab4.form.div00.form.ctxtSZ_SHOP_M","value","dsBase2","SZ_SHOP_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","divData.form.tabData.tab4.form.ctxtSZ_SHOP_M00","value","dsBase2","SZ_LAND_OVR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","divData.form.tabData.tab4.form.div00.form.ctxtSZ_SHOP00_00","value","dsBase2","SZ_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item118","divData.form.tabData.tab4.form.ctxtSZ_SHOP00_00_00","value","dsBase2","SZ_LAND_UNDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item119","divData.form.tabData.tab4.form.div00.form.ctxtSZ_SHOP00_00_00","value","dsBase2","SZ_LAND_UNDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item120","divData.form.tabData.tab4.form.ctxtSZ_SHOP_M","value","dsBase2","SZ_SHOP_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item121","divData.form.tabData.tab4.form.ctxtSZ_SHOP00_00","value","dsBase2","SZ_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","divData.form.tabData.tab4.form.div00.form.ctxtSZ_SHOP","value","dsBase2","SZ_SHOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","divData.form.tabData.tab4.form.ctxtSZ_SHOP00","value","dsBase2","SZ_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item124","divData.form.tabData.tab4.form.div00.form.ctxtRT_SHOP","value","dsBase2","RT_SHOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item125","divData.form.tabData.tab4.form.ctxtRT_SHOP00","value","dsBase2","RT_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item126","divData.form.tabData.tab4.form.div00.form.ctxtSZ_ARCH_M00","value","dsBase2","SZ_AREA_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item127","divData.form.tabData.tab4.form.div00.form.ctxtSZ_SHOP_M00","value","dsBase2","SZ_LAND_OVR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item128","divData.form.tabData.tab4.form.ctxtSZ_ARCH_M00","value","dsBase2","SZ_AREA_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item129","divData.form.tabData.tab4.form.div00.form.ctxtSZ_ARCH_M","value","dsBase2","SZ_ARCH_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item130","divData.form.tabData.tab4.form.div00.form.ctxtSZ_ARCH00","value","dsBase2","SZ_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item131","divData.form.tabData.tab4.form.div00.form.ctxtSZ_SHOP00","value","dsBase2","SZ_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item132","divData.form.tabData.tab4.form.ctxtSZ_ARCH_M","value","dsBase2","SZ_ARCH_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item133","divData.form.tabData.tab4.form.ctxtSZ_ARCH00","value","dsBase2","SZ_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item134","divData.form.tabData.tab4.form.div00.form.ctxtSZ_ARCH","value","dsBase2","SZ_ARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item135","divData.form.tabData.tab4.form.div00.form.ctxtRT_SHOP00","value","dsBase2","RT_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item136","divData.form.tabData.tab4.form.div00.form.ctxtRT_ARCH","value","dsBase2","RT_ARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item137","divData.form.tabData.tab4.form.div00.form.ccboCD_LAND_STAT","value","dsBase2","CD_LAND_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item138","divData.form.tabData.tab4.form.div00.form.txtDS_RM","value","dsBase2","DS_RM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item139","divData.form.tabData.tab4.form.div00.form.ctxtAM_CONST","value","dsBase2","AM_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item140","divData.form.tabData.tab4.form.div00.form.ctxtAM_AREA","value","dsBase2","AM_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item141","divData.form.tabData.tab4.form.div00_00.form.ctxtNM_PROV","value","dsBase2","NM_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item142","divData.form.tabData.tab4.form.div00_00.form.ctxtNM_ENF","value","dsBase2","NM_ENF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item143","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_ENF_DEPT","value","dsBase2","DS_ENF_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item144","divData.form.tabData.tab4.form.div00_00.form.ctclDT_ACQ","value","dsBase2","DT_ACQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item145","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_LOCAL","value","dsBase2","DS_LOCAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item146","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_CITY_PLAN","value","dsBase2","DS_CITY_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item147","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_ROAD_STAT","value","dsBase2","DS_ROAD_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item148","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_CONT_LIMIT","value","dsBase2","DS_CONT_LIMIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item149","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_USE_STAT","value","dsBase2","DS_USE_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item150","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_ACC","value","dsBase2","DS_ACC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item151","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_LAND_CLS","value","dsBase2","DS_LAND_CLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item152","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_PUB_NOTICE","value","dsBase2","DS_PUB_NOTICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item153","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_ADDR2","value","dsBase2","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item154","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_LAND_CLS00","value","dsBase2","DS_BIZ_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item155","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_LAND_CLS01","value","dsBase2","NM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item156","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_LAND_CLS02","value","dsBase2","NM_BIZ_MHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item157","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_LAND_CLS03","value","dsBase2","NM_PRDCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item158","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_LAND_CLS04","value","dsBase2","DS_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item159","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_LAND_CLS05","value","dsBase2","NM_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item160","divData.form.tabData.tab4.form.div00_00.form.ctxtNM_PROV00","value","dsBase2","NM_ACQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item161","divData.form.tabData.tab4.form.div00_00.form.ctxtNM_PROV01","value","dsBase2","TY_NM_ENF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item162","divData.form.tabData.tab4.form.div00_00.form.ctxtDS_LAND_CLS06","value","dsBase2","CD_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item163","divData.form.tabData.tab4.form.div00_00.form.ctclDT_COST_SEL","value","dsBase2","DT_COST_SEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item164","divData.form.tabData.tab4.form.div00_00.form.ctxtAM_BIZ","value","dsBase2","AM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item165","divData.form.tabData.tab4.form.div00_00.form.ctxtAM_LAND","value","dsBase2","AM_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item166","divData.form.tabData.tab4.form.div00_00.form.ccboCD_PERMIT_STAT","value","dsBase2","CD_PERMIT_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item167","divData.form.tabData.tab4.form.div00_00.form.ctxtSZ_SHOP_M00_00","value","dsBase2","SZ_LAND_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item168","divData.form.tabData.tab4.form.div00_00.form.ctxtSZ_SHOP_M00_00_00","value","dsBase2","SZ_LAND_UNDR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item169","divData.form.tabData.tab4.form.div00_00.form.ctxtSZ_SHOP_M","value","dsBase2","SZ_SHOP_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item170","divData.form.tabData.tab4.form.div00_00.form.ctxtSZ_SHOP00_00","value","dsBase2","SZ_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item171","divData.form.tabData.tab4.form.div00_00.form.ctxtSZ_SHOP00_00_00","value","dsBase2","SZ_LAND_UNDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item172","divData.form.tabData.tab4.form.div00_00.form.ctxtSZ_SHOP","value","dsBase2","SZ_SHOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item173","divData.form.tabData.tab4.form.div00_00.form.ctxtRT_SHOP","value","dsBase2","RT_SHOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item174","divData.form.tabData.tab4.form.div00_00.form.ctxtSZ_ARCH_M00","value","dsBase2","SZ_AREA_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item175","divData.form.tabData.tab4.form.div00_00.form.ctxtSZ_SHOP_M00","value","dsBase2","SZ_LAND_OVR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item176","divData.form.tabData.tab4.form.div00_00.form.ctxtSZ_ARCH_M","value","dsBase2","SZ_ARCH_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item177","divData.form.tabData.tab4.form.div00_00.form.ctxtSZ_ARCH00","value","dsBase2","SZ_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item178","divData.form.tabData.tab4.form.div00_00.form.ctxtSZ_SHOP00","value","dsBase2","SZ_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item179","divData.form.tabData.tab4.form.div00_00.form.ctxtSZ_ARCH","value","dsBase2","SZ_ARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item180","divData.form.tabData.tab4.form.div00_00.form.ctxtRT_SHOP00","value","dsBase2","RT_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item181","divData.form.tabData.tab4.form.div00_00.form.ctxtRT_ARCH","value","dsBase2","RT_ARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item182","divData.form.tabData.tab4.form.div00_00.form.ccboCD_LAND_STAT","value","dsBase2","CD_LAND_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item183","divData.form.tabData.tab4.form.div00_00.form.txtDS_RM","value","dsBase2","DS_RM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item184","divData.form.tabData.tab4.form.div00_00.form.ctxtAM_CONST","value","dsBase2","AM_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item185","divData.form.tabData.tab4.form.div00_00.form.ctxtAM_AREA","value","dsBase2","AM_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item186","divData.form.tabData.tab4.form.div01.form.txtDS_FI","value","dsBase2","DS_FI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item187","divData.form.tabData.tab4.form.div01.form.txtDS_SCALE","value","dsBase2","DS_SCALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item188","divData.form.tabData.tab4.form.div01.form.ctxtAM_OCAPITAL","value","dsBase2","AM_OCAPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item189","divData.form.tabData.tab4.form.div01.form.ctxtRT_OCAPITAL","value","dsBase2","RT_OCAPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item190","divData.form.tabData.tab4.form.div01.form.ctxtAM_BCAPITAL","value","dsBase2","AM_BCAPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item191","divData.form.tabData.tab4.form.div01.form.ctxtRT_BCAPITAL","value","dsBase2","RT_BCAPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item192","divData.form.tabData.tab4.form.div01.form.ctxtAM_ETC","value","dsBase2","AM_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item193","divData.form.tabData.tab4.form.div01.form.ctxtRT_ETC","value","dsBase2","RT_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item194","divData.form.tabData.tab4.form.div01.form.ctxtRT_TOT","value","dsTOT","RT_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item195","divData.form.tabData.tab4.form.div01.form.ctxtAM_TOT","value","dsTOT","AM_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item196","divData.form.tabData.tab4.form.div01.form.ctxtDS_AMBIGO","value","dsBase2","DS_AMBIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item197","divData.form.tabData.tab4.form.div01.form.ctxtDS_RTBIGO","value","dsBase2","DS_RTBIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item198","divData.form.tabData.tab4.form.div01.form.txtDS_RM1","value","dsBase2","DS_RM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item199","divData.form.tabData.tab4.form.div01.form.txtDS_AI","value","dsBase2","DS_AI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item200","divData.form.tabData.tab4.form.div01.form.txtDS_DI","value","dsBase2","DS_DI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item201","divData.form.tabData.tab4.form.div01.form.ctxtAM_BIZ1","value","dsBase2","AM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item202","divData.form.tabData.tab4.form.div01.form.ctxtAM_CONST1","value","dsBase2","AM_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item203","divData.form.tabData.tab4.form.div01.form.ctxtAM_LAND1","value","dsBase2","AM_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item204","divData.form.tabData.tab4.form.div01.form.ctxtAM_AREA1","value","dsBase2","AM_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item205","divData.form.tabData.tab4.form.div01.form.ctxtDS_LAND_CLS00","value","dsBase2","DS_BIZ_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item206","divData.form.tabData.tab4.form.div01.form.ctxtNM_PROV","value","dsBase2","NM_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item207","divData.form.tabData.tab4.form.div01.form.ctxtDS_LAND_CLS01","value","dsBase2","NM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item208","divData.form.tabData.tab4.form.div01.form.ctxtNM_ENF","value","dsBase2","NM_ENF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item209","divData.form.tabData.tab4.form.div01.form.ctxtDS_LAND_CLS02","value","dsBase2","NM_BIZ_MHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item210","divData.form.tabData.tab4.form.div01.form.ctxtDS_ENF_DEPT","value","dsBase2","DS_ENF_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item211","divData.form.tabData.tab4.form.div01.form.ctxtDS_LAND_CLS03","value","dsBase2","NM_PRDCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item212","divData.form.tabData.tab4.form.div01.form.ctclDT_ACQ","value","dsBase2","DT_ACQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item213","divData.form.tabData.tab4.form.div01.form.ctclDT_COST_SEL","value","dsBase2","DT_COST_SEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item214","divData.form.tabData.tab4.form.div01.form.ctxtDS_LAND_CLS05","value","dsBase2","NM_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item215","divData.form.tabData.tab4.form.div01.form.ctxtDS_LAND_CLS06","value","dsBase2","CD_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item216","divData.form.tabData.tab4.form.div01.form.ctxtDS_LAND_CLS04","value","dsBase2","DS_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item217","divData.form.tabData.tab4.form.div01.form.ctxtDS_ADDR2","value","dsBase2","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item218","divData.form.tabData.tab4.form.div01.form.ctxtDS_LAND_CLS","value","dsBase2","DS_LAND_CLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item219","divData.form.tabData.tab4.form.div01.form.ctxtDS_LOCAL","value","dsBase2","DS_LOCAL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmFileManager.xfdl");
        };
        
        // User Script
        this.registerScript("DOD_ARCH_CONT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var swichInit = false;

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	//this.fnSetButton();
        	this.fnSetExtendButton();

        	this.fnSetVariable();
        	this.fnSetParameter();
        	this.fnSetEvent();
        	this.fnSetCombo();

        	this.dsBase.clearData();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_FIELD)){
        		//편집
        		this.dsInitSearch.setColumn(0, "CD_FIELD", this.getOwnerFrame().CD_FIELD);
        		this.dsInitSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_CONT);
        		this.dsInitSearch.setColumn(0, "NO_CHG_CONT", this.getOwnerFrame().NO_CHG_CONT);
        		this.swichInit = false;
        		this.fnInitSelect();
        	} else {
        		//신규
        		this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        		this.dsSearch.setColumn(0, "DS_PROJ", this.getOwnerFrame().DS_PROJ);
        		this.dsSearch.setColumn(0, "TY_BIZ", this.getOwnerFrame().TY_BIZ);
        		this.dsSearch.setColumn(0, "NM_BIZ", this.getOwnerFrame().NM_BIZ);
        		this.swichInit = false;
        		this.divData.form.tabData.set_tabindex(3);
        		this.fnSelect();
        		this.fnAdd();
        		/*폼상태는 입력 모드*/
        		this.gfnSetFormStatus(this, "I");
        	}
        	this.fnSetButton();
        };

        this.fnSwichView = function() {
            var swichSel = this.dsBase2.getColumn(0, "CD_CLS");

        	if(swichSel == "SA00202"){
        	    this.divData.form.tabData.tab4.form.div01.set_visible(false);
        		this.divData.form.tabData.tab4.form.div00.set_visible(true);
        	}else{
        	    this.divData.form.tabData.tab4.form.div01.set_visible(true);
        		this.divData.form.tabData.tab4.form.div00.set_visible(false);
        	}
        }

        this.fnAM_TOT = function(obj){
        	var AM_OCAPITAL = obj.getColumn(0, "AM_OCAPITAL");
        	var AM_BCAPITAL = obj.getColumn(0, "AM_BCAPITAL");
        	var AM_ETC = obj.getColumn(0, "AM_ETC");

        	var AM_TOT = AM_OCAPITAL + AM_BCAPITAL + AM_ETC;

        	this.dsTOT.set_enableevent(false);
        	this.dsTOT.setColumn(0, "AM_TOT", AM_TOT);
        	this.dsTOT.set_enableevent(true);
        };

        this.fnRT_TOT = function(obj){
        	var RT_OCAPITAL = obj.getColumn(0, "RT_OCAPITAL");
        	var RT_BCAPITAL = obj.getColumn(0, "RT_BCAPITAL");
        	var RT_ETC = obj.getColumn(0, "RT_ETC");

        	var RT_TOT = RT_OCAPITAL + RT_BCAPITAL + RT_ETC;

        	this.dsTOT.set_enableevent(false);
        	this.dsTOT.setColumn(0, "RT_TOT", RT_TOT);
        	this.dsTOT.set_enableevent(true);
        };

        /************************************************************************
         * 담당자 여부 검사
         ************************************************************************/
         this.fnGetYNCharge = function(){

        	this.dsReqYNCharge = new Dataset();
        	this.dsReqYNCharge.addColumn("CD_PROJ", "string");
        	this.dsReqYNCharge.addColumn("ID_USER", "string");

        	this.dsReqYNCharge.addRow();
        	this.dsReqYNCharge.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsReqYNCharge.setColumn(0, "ID_USER", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));

        	var strSvcId    = "selectCharge";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        		inData      = "selectCharge=dsReqYNCharge";
        		outData     = "dsRcvYNCharge=selectCharge0";
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

        	//본부코드 못바꾸게 막음
        	//this.ccfCD_BONBU.set_enable(false);

        	trace("this.FormInfo.TY_AUTH : " + this.FormInfo.TY_AUTH);
        	if(this.FormInfo.TY_AUTH == "R") {
        		this.FormBtns.Select.set_enable(true);
        		return;
        	}

        	var frmStatus = this.gfnGetFormStatus(this);
        	trace("FormStatus : " + frmStatus);
        	switch(frmStatus) {
        	case "I":
        		this.FormBtns.Select.set_enable(false);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(false);
        		//계약수행방식
        		this.divData.form.tabData.tab1.form.ccboTY_CONT.set_readonly(false);
        		//현장명
        		this.divData.form.tabData.tab1.form.ctxtCD_FIELD.set_readonly(false);
        		this.divData.form.tabData.tab1.form.ctxtDS_FIELD.set_readonly(false);
        		/*Tab제어*/
        		this.divData.form.tabData.tab2.set_enable(false);
        		this.divData.form.tabData.tab3.set_enable(false);
        		this.divData.form.tabData.tab4.set_enable(true);
        		this.divData.form.tabData.tab5.set_enable(true);

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
        		this.divData.form.tabData.tab2.set_enable(true);
        		this.divData.form.tabData.tab3.set_enable(true);
        		this.divData.form.tabData.tab4.set_enable(true);
        		this.divData.form.tabData.tab5.set_enable(true);
        		//계약수행방식
        		this.divData.form.tabData.tab1.form.ccboTY_CONT.set_readonly(true);
        		//현장명
        		this.divData.form.tabData.tab1.form.ctxtCD_FIELD.set_readonly(true);
        		this.divData.form.tabData.tab1.form.ctxtDS_FIELD.set_readonly(true);
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
        	this.ARCH_TY_PROJ = "SA00102";

        	this.ccfDS_REGION = this.divData.form.tabData.tab1.form.ccfDS_REGION;
        	this.ccfCD_BONBU = this.divData.form.tabData.tab1.form.ccfCD_BONBU;
        	this.ccfCD_BUMUN = this.divData.form.tabData.tab1.form.ccfCD_BUMUN;
        	this.ccfSAUP_CNTR = this.divData.form.tabData.tab1.form.ccfSAUP_CNTR;

        	this.ctxtCD_FIELD = this.divData.form.tabData.tab1.form.ctxtCD_FIELD;
        	this.ctxtDS_FIELD = this.divData.form.tabData.tab1.form.ctxtDS_FIELD;


        	this.ccfDS_REGION.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";        //우편번호
        	this.ccfCD_BONBU.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";      //검토상태


        	//공동도급사
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrdtab2;

        	//관계사
        	this.dxGrid3 = this.divData.form.tabData.tab3.form.objGrdtab3;

        	//프로젝트 약정
        	this.dxGrid4 = this.divData.form.tabData.tab5.form.objGrdtab4;
        	//프로젝트 공동도급사
        	this.dxGrid5 = this.divData.form.tabData.tab5.form.objGrdtab5;
        	//프로젝트 관계사
        	this.dxGrid6 = this.divData.form.tabData.tab5.form.objGrdtab6;

        	this.serverTime = "";
        	this.gfnGetServerTime("serverTime");

        	this.serverTimeStr = this.gfnGetDigit(this.serverTime.substring(0, 10));
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DO", "DOD_ARCH_CONT_CO_CONTRCT");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DO", "DOD_ARCH_CONT_CONCERN");

        	this.gfnGridInit(this.dxGrid4, this.dsList4, "DO", "DOA_ARCH_PROV_CONT");
        	this.gfnGridInit(this.dxGrid5, this.dsList5, "DO", "DOA_ARCH_CO_CONTRCT");
        	this.gfnGridInit(this.dxGrid6, this.dsList6, "DO", "DOA_ARCH_CONCERN");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();

        	this.dsSave.addColumn("CD_PROJ", "STRING");
        	this.dsSave.addColumn("CD_FIELD", "STRING");
        	this.dsSave.addColumn("NO_CONT", "INT");
        	this.dsSave.addColumn("NO_CHG_CONT", "INT");
        	this.dsSave.addColumn("NM_CHG_CONT", "STRING");
        	this.dsSave.addColumn("DT_CONT", "STRING");
        	this.dsSave.addColumn("DT_CONST_ST", "STRING");
        	this.dsSave.addColumn("DT_CONST_ED", "STRING");
        	this.dsSave.addColumn("AM_SUP", "BIGDECIMAL");
        	this.dsSave.addColumn("AM_TXF", "BIGDECIMAL");
        	this.dsSave.addColumn("AM_VAT", "BIGDECIMAL");
        	this.dsSave.addColumn("RT_OUR", "BIGDECIMAL");
        	this.dsSave.addColumn("AM_SUP_OUR", "BIGDECIMAL");
        	this.dsSave.addColumn("AM_TXF_OUR", "BIGDECIMAL");
        	this.dsSave.addColumn("AM_VAT_OUR", "BIGDECIMAL");
        	this.dsSave.addColumn("RT_ADV", "BIGDECIMAL");
        	this.dsSave.addColumn("AM_ADV", "BIGDECIMAL");
        	this.dsSave.addColumn("AM_CONT_GRNT", "BIGDECIMAL");
        	this.dsSave.addColumn("NO_REG_SEAL", "STRING");
        	this.dsSave.addColumn("DS_CND_COLT", "STRING");
        	this.dsSave.addColumn("CD_REQTM", "STRING");
        	this.dsSave.addColumn("NO_WITHINDAYS", "BIGDECIMAL");
        	this.dsSave.addColumn("CD_TERM1", "STRING");
        	this.dsSave.addColumn("RT_TERM1", "BIGDECIMAL");
        	this.dsSave.addColumn("CD_TERM2", "STRING");
        	this.dsSave.addColumn("RT_TERM2", "BIGDECIMAL");
        	this.dsSave.addColumn("DS_RM_CHG", "STRING");
        	this.dsSave.addColumn("ID_ADD", "STRING");
        	this.dsSave.addColumn("DS_FIELD", "STRING");
        	this.dsSave.addColumn("CD_BONBU", "STRING");
        	this.dsSave.addColumn("NM_BONBU", "STRING");
        	this.dsSave.addColumn("CD_BUMUN", "STRING");
        	this.dsSave.addColumn("NM_BUMUN", "STRING");
        	this.dsSave.addColumn("CD_SAUP_CNTR", "STRING");
        	this.dsSave.addColumn("NM_SAUP_CNTR", "STRING");
        	this.dsSave.addColumn("DS_SCALE", "STRING");
        	this.dsSave.addColumn("SZ_AREA", "BIGDECIMAL");
        	this.dsSave.addColumn("SZ_AREA_M", "BIGDECIMAL");
        	this.dsSave.addColumn("SZ_LAND", "BIGDECIMAL");
        	this.dsSave.addColumn("SZ_LAND_M", "BIGDECIMAL");
        	this.dsSave.addColumn("YN_TMP_CONT", "STRING");
        	this.dsSave.addColumn("RT_DELAY", "BIGDECIMAL");
        	this.dsSave.addColumn("DS_RM", "STRING");
        	this.dsSave.addColumn("AM_MOV_EXP", "BIGDECIMAL");
        	this.dsSave.addColumn("AM_ASSO_EXP", "BIGDECIMAL");
        	this.dsSave.addColumn("YN_MAIN", "STRING");
        	this.dsSave.addColumn("TY_BIZ", "STRING");
        	this.dsSave.addColumn("NM_BIZ", "STRING");
        	this.dsSave.addColumn("CD_LOC", "STRING");
        	this.dsSave.addColumn("CD_ZIP", "STRING");
        	this.dsSave.addColumn("DS_ADDR1", "STRING");
        	this.dsSave.addColumn("DS_ADDR2", "STRING");
        	this.dsSave.addColumn("TY_CONT", "STRING");
        	this.dsSave.addColumn("CD_COLT_FUND", "STRING");
        	this.dsSave.addColumn("RT_TAX", "BIGDECIMAL");
        	this.dsSave.addColumn("YN_TAX_NA", "STRING");
        	this.dsSave.addColumn("YN_NEW", "STRING");

        	this.dsSave.addColumn("OUT_CD_FIELD", "STRING");
        	this.dsSave.addColumn("OUT_NO_CONT", "INT");
        	this.dsSave.addColumn("OUT_NO_CHG_CONT", "INT");

        	this.dsSelectBase = new Dataset();
        	this.dsSelectBase.addColumn("CD_FIELD", "STRING");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "STRING");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_FIELD", "string");
        	this.dsDelete.addColumn("NO_CONT", "int");
        	this.dsDelete.addColumn("NO_CHG_CONT", "int");

        }

        /************************************************************************
         * 콤보 이벤트 설정
         ************************************************************************/
        this.fnSetCombo = function() {
        	//dsTY_CONT -- 계약수행방식 DO, 10
        	//dsCD_COLT_FUND -- 공사대금회수기준 DO, 18
        	//dsCD_REQTM -- 청구시기 DO, 19
        	//dsCD_TERM1 -- 지급방식1 DO, 20
        	//dsCD_TERM2 -- 지급방식2 DO, 20
        	//dsCD_LOC -- 지역 DO, 02
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "STRING");
        	this.dsCombo.addColumn("CD_TYPE", "STRING");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(0, "CD_TYPE", "10");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(1, "CD_TYPE", "18");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(2, "CD_TYPE", "19");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(3, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(3, "CD_TYPE", "20");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(4, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(4, "CD_TYPE", "20");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(5, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(5, "CD_TYPE", "02");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(6, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(6, "CD_TYPE", "08");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(7, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(7, "CD_TYPE", "07");


        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_CONT=combo0 dsCD_COLT_FUND=combo1 dsCD_REQTM=combo2 dsCD_TERM1=combo3 dsCD_TERM2=combo4 dsCD_LOC=combo5 dsCD_LAND_STAT=combo6 dsCD_PERMIT_STAT=combo7";
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

        this.fnCodeFinder_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(arr.length > 0)
        	{
        		switch(id)
        		{
        			//우편번호
        			case "ccfDS_REGION":
        				//this.dsBase.setColumn(0, "CD_ZIP", arr[0].ZIPCODE);
        				//this.dsBase.setColumn(0, "DS_ADDR1", arr[0].ADDRESS);
        			break;
        		}
        	}
        }

        this.fnSaveValidate = function(){
        	if(this.gfnIsNull(this.dsSave.getColumn(0, "NM_CHG_CONT"))){
        		this.gfnAlert("계약명을 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSave.getColumn(0, "TY_CONT"))){
        		this.gfnAlert("계약수행방식을 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSave.getColumn(0, "DT_CONT"))){
        		this.gfnAlert("계약일자를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSave.getColumn(0, "DT_CONST_ST"))){
        		this.gfnAlert("착공일자를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSave.getColumn(0, "DT_CONST_ED"))){
        		this.gfnAlert("준공일자를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSave.getColumn(0, "RT_TAX"))){
        		this.gfnAlert("과세율을 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSave.getColumn(0, "RT_OUR"))){
        		this.gfnAlert("당사지분율을 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSave.getColumn(0, "AM_SUP"))){
        		this.gfnAlert("계약 공급가를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSave.getColumn(0, "AM_VAT"))){
        		this.gfnAlert("계약 부가세를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSave.getColumn(0, "AM_TXF"))){
        		this.gfnAlert("계약 비과세를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSave.getColumn(0, "AM_SUP_OUR"))){
        		this.gfnAlert("당사 공급가를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSave.getColumn(0, "AM_VAT_OUR"))){
        		this.gfnAlert("당사 부가세를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSave.getColumn(0, "AM_TXF_OUR"))){
        		this.gfnAlert("당사 비과세를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSave.getColumn(0, "CD_BONBU"))){
        		this.gfnAlert("사업본부를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSave.getColumn(0, "CD_FIELD"))){
        		this.gfnAlert("현장코드를 입력해주세요.");
        		return false;
        	}

        	if(this.dsSave.getColumn(0, "CD_FIELD").length > 20){
        		this.gfnAlert("현장코드를 20자리 이내로 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSave.getColumn(0, "DS_FIELD"))){
        		this.gfnAlert("현장코드명을 입력해주세요.");
        		return false;
        	}

        	return true;
        }

        this.fnInitSelect = function(){
        	this.dsSelectBase.clearData();
        	this.dsSelectBase.addRow();
        	this.dsSelectBase.setColumn(0, "CD_FIELD", this.dsInitSearch.getColumn(0, "CD_FIELD"));

        	var strSvcId    = "initSelect";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectBase=dsSelectBase";
        	var outData     = "dsSearch=selectBase0";
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

        /************************************************************************
         * 트렌젝션 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function(obj,e){

        	var tIdx = this.divData.form.tabData.tabindex;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));

        	var strSvcId    = "select"+tIdx;

        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";

        	if(tIdx == 0){
        		inData      = "select0=dsInitSearch";
        		outData     = "dsBase=select00";
        	} else if(tIdx == 1){
        		inData      = "select1=dsInitSearch";
        		outData     = "dsList2=select10";
        	} else if(tIdx == 2){
        		inData      = "select2=dsInitSearch";
        		outData     = "dsList3=select20";
        	} else if(tIdx == 3){
        		inData      = "select3=dsSelect";
        		outData     = "dsBase2=select30";
        	} else if(tIdx == 4){
        		inData      = "select4=dsSelect";
        		outData     = "dsList4=select40 dsList5=select41 dsList6=select42";
        	}

        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        // trace("inData>>", inData);
        // trace("outData>>", outData);

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnSave = function(obj,e){
        	this.dsSave.clearData();
        	this.dsSave.addRow();
        	this.dsSave.copyRow(0, this.dsBase, 0);
        	this.dsSave.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSave.setColumn(0, "CD_FIELD", this.dsBase2.getColumn(0, "CD_FIELD_NEW"));
        	this.dsSave.setColumn(0, "DS_FIELD", this.dsBase2.getColumn(0, "DS_FIELD_NEW"));
        	this.dsSave.setColumn(0, "ID_ADD",  this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
        	this.dsSave.setColumn(0, "NM_CHG_CONT", this.dsBase.getColumn(0, "NM_CHG_CONT"));
        	this.dsSave.setColumn(0, "OUT_CD_FIELD", "");
        	this.dsSave.setColumn(0, "OUT_NO_CONT", "");
        	this.dsSave.setColumn(0, "OUT_NO_CHG_CONT", "");

        	if(!this.fnSaveValidate()) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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

        }

        this.fnDel = function(obj,e){
        	this.gfnConfirm("삭제하시겠습니까?","fnDel_callback");
        }

        this.fnDel_callback = function(strId, val) {
        	if(val == true)	{
        		if(this.gfnIsNull(this.dsInitSearch.getColumn(0, "CD_FIELD"))) return;
        		//if(this.gfnIsNull(this.dsInitSearch.getColumn(0, "NO_CONT"))) return;
        		//if(this.gfnIsNull(this.dsInitSearch.getColumn(0, "NO_CHG_CONT"))) return;

        		this.dsDelete.clearData();
        		this.dsDelete.addRow();
        		this.dsDelete.setColumn(0, "CD_FIELD", this.dsInitSearch.getColumn(0, "CD_FIELD"));
        		this.dsDelete.setColumn(0, "NO_CONT", this.dsInitSearch.getColumn(0, "NO_CONT"));
        		this.dsDelete.setColumn(0, "NO_CHG_CONT", this.dsInitSearch.getColumn(0, "NO_CHG_CONT"));

        		//trace("dsDelete", this.dsDelete.saveXML());

        		var strSvcId    = "delete";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "delete=dsDelete";
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
        }

        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	this.dsBase.clearData();

        	var nRow = this.dsBase.addRow();

        	this.dsBase.set_enableevent(false);
        	this.dsBase.setColumn(nRow, "DT_CONT", this.serverTimeStr);
        	//this.dsBase.setColumn(nRow, "DT_CONST_ST", this.serverTimeStr);
        	//this.dsBase.setColumn(nRow, "DT_CONST_ED", this.serverTimeStr);


        	this.dsBase.setColumn(nRow, "RT_TAX", 0);
        	this.dsBase.setColumn(nRow, "AM_SUP", 0);
        	this.dsBase.setColumn(nRow, "AM_VAT", 0);
        	this.dsBase.setColumn(nRow, "AM_TXF", 0);
        	this.dsBase.setColumn(nRow, "RT_OUR", 0);
        	this.dsBase.setColumn(nRow, "AM_SUP_OUR", 0);
        	this.dsBase.setColumn(nRow, "AM_VAT_OUR", 0);
        	this.dsBase.setColumn(nRow, "AM_TXF_OUR", 0);
        	this.dsBase.setColumn(nRow, "YN_TAX_NA", "N");

        	this.dsBase.setColumn(nRow, "YN_TMP_CONT", "N");
        	this.dsBase.setColumn(nRow, "YN_MAIN", "Y");
        	this.dsBase.setColumn(nRow, "DS_FIELD", this.dsSearch.getColumn(0, "DS_PROJ"));
        	this.dsBase.setColumn(nRow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_PROJ") + "01");
        	this.dsBase.setColumn(0, "CD_LOC", this.getOwnerFrame().CD_LOC);
        	this.dsBase.setColumn(0, "CD_ZIP", this.getOwnerFrame().CD_ZIP);
        	this.dsBase.setColumn(0, "DS_ADDR1", this.getOwnerFrame().DS_ADDR1);
        	this.dsBase.setColumn(0, "DS_ADDR2", this.getOwnerFrame().DS_ADDR2);
        // 	this.dsBase.setColumn(0, "CD_BONBU", this.getOwnerFrame().CD_BONBU); //2022.03.04
        // 	this.dsBase.setColumn(0, "NM_BONBU", this.getOwnerFrame().NM_BONBU);
        	this.dsBase.setColumn(nRow, "YN_NEW", "Y");

        	this.dsBase.set_enableevent(true);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	trace(svcID);
        	if (errorCode == 0) {
        		if(svcID == "initSelect"){
        			//조회
        			this.fnSelect();
        		} else if(svcID == "combo"){
        			this.dsBase.set_enableevent(false);

        			this.dsCD_LAND_STAT.insertRow(0);
        			this.dsCD_LAND_STAT.setColumn(0, "CD_CODE", "");
        			this.dsCD_LAND_STAT.setColumn(0, "DS_CODE", "");

        			this.dsCD_PERMIT_STAT.insertRow(0);
        			this.dsCD_PERMIT_STAT.setColumn(0, "CD_CODE", "");
        			this.dsCD_PERMIT_STAT.setColumn(0, "DS_CODE", "");

        			this.dsBase.set_enableevent(true);

        		} else if(svcID == "select0"){

        			var _sup, _vat, _txf
        			  , _supOur, _vatOur, _txfOur= 0;
        			_sup = this.dsBase.getColumn(0, "AM_SUP");
        			_vat = this.dsBase.getColumn(0, "AM_VAT");
        			_txf = this.dsBase.getColumn(0, "AM_TXF");

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT.set_value(_sup+_vat+_txf);

        			_supOur = this.dsBase.getColumn(0, "AM_SUP_OUR");
        			_vatOur = this.dsBase.getColumn(0, "AM_VAT_OUR");
        			_txfOur = this.dsBase.getColumn(0, "AM_TXF_OUR");

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF_OUR.set_value(_supOur+_txfOur);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT_OUR.set_value(_supOur+_vatOur+_txfOur);

        			if(this.dsBase.getColumn(0, "YN_TAX_NA") == "Y"){
        				this.divData.form.tabData.tab1.form.ctxtRT_ARCH.set_readonly(true);
        				this.divData.form.tabData.tab1.form.ctxtAM_LAND00.set_readonly(true);
        				this.divData.form.tabData.tab1.form.ctxtAM_LAND05.set_readonly(true);
        			} else {
        				this.divData.form.tabData.tab1.form.ctxtRT_ARCH.set_readonly(false);
        				this.divData.form.tabData.tab1.form.ctxtAM_LAND00.set_readonly(false);
        				this.divData.form.tabData.tab1.form.ctxtAM_LAND05.set_readonly(false);
        			}

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

        			this.gfnSetFormStatus(this, "");
        			this.fnSetButton();

        			if(this.swichInit == false){
        			  this.divData.form.tabData.set_tabindex(3);
        			  this.fnSelect();
        			}
        		} else if(svcID == "select3"){
        				this.divData.form.tabData.tab4.form.divFile.form.set_enable(true);
        				// 첨부파일
        				//var cd_site = this.ccfCD_SITE.form.CDTextBox.value;
        				var fileManager = {};
        				fileManager.CD_GUBUN = "DOA1";
        				fileManager.CD_DIR = [ this.dsBase2.getColumn(0, "CD_PROJ") ];
        				fileManager.CD_REF1 = this.dsBase2.getColumn(0, "CD_PROJ");
        				fileManager.IS_READONLY = true;
        				// div FileManager 셋팅
        				this.divData.form.tabData.tab4.form.divFile.form.setFileManager(fileManager);

        				if(this.swichInit == false){
        			       this.divData.form.tabData.set_tabindex(0);
        				   this.swichInit = true;

        				   this.dsBase.setColumn(0, "CD_BONBU", this.dsBase2.getColumn(0, "CD_BONBU"));
        				   this.dsBase.setColumn(0, "NM_BONBU", this.dsBase2.getColumn(0, "NM_BONBU"));
        			    }

        				this.fnSwichView();
        				this.fnAM_TOT(this.dsBase2);
        				this.fnRT_TOT(this.dsBase2);

        		} else if(svcID == "save"){
        			this.dsInitSearch.setColumn(0, "CD_FIELD", this.dsBaseRst.getColumn(0, "OUT_CD_FIELD"));
        			this.dsInitSearch.setColumn(0, "NO_CONT", this.dsBaseRst.getColumn(0, "OUT_NO_CONT"));
        			this.dsInitSearch.setColumn(0, "NO_CHG_CONT", this.dsBaseRst.getColumn(0, "OUT_NO_CHG_CONT"));

        			this.FormBtns.Select.click();
        		} else if(svcID == "delete"){
        			this.fnDeleteAfter = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("삭제되었습니다.", "fnDeleteAfter");
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
        				//_vat = _sup*0.1;

        				//과세율
        				_rtour = obj.getColumn(0, "RT_TAX");
        				_vat = nexacro.round(_sup * (_rtour / 100));
        			}
        			_txf = obj.getColumn(0, "AM_TXF");

        			this.dsBase.set_enableevent(false);
        			obj.setColumn(0, "AM_VAT",_vat);
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
        				_vat = obj.getColumn(0, "AM_VAT");
        			}
        			_txf = obj.getColumn(0, "AM_TXF");


        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT.set_value(_sup+_vat+_txf);

        			//당사지분율
        			_rtour = obj.getColumn(0, "RT_OUR");

        			_sup = obj.getColumn(0, "AM_SUP_OUR");
        			if(this.dsBase.getColumn(0, "YN_TAX_NA") != "Y"){
        				_vat = nexacro.round(obj.getColumn(0, "AM_VAT") * (_rtour / 100));
        			}
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
        				_vat = obj.getColumn(0, "AM_VAT");
        			}
        			_txf = obj.getColumn(0, "AM_TXF");


        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT.set_value(_sup+_vat+_txf);

        			//당사지분율
        			_rtour = obj.getColumn(0, "RT_OUR");

        			_sup = obj.getColumn(0, "AM_SUP_OUR");
        			if(this.dsBase.getColumn(0, "YN_TAX_NA") != "Y"){
        				_vat = obj.getColumn(0, "AM_VAT_OUR");
        			}
        			_txf = nexacro.round(obj.getColumn(0, "AM_TXF") * (_rtour / 100));

        			this.dsBase.set_enableevent(false);
        			obj.setColumn(0, "AM_TXF_OUR",_txf);
        			this.dsBase.set_enableevent(true);

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF_OUR.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT_OUR.set_value(_sup+_vat+_txf);
        		} else if(e.columnid == "RT_TAX"){
        			//과세율
        			_rtour = obj.getColumn(0, "RT_TAX");

        			_vat = nexacro.round(obj.getColumn(0, "AM_SUP") * (_rtour / 100));
        			_sup = obj.getColumn(0, "AM_SUP");
        			_txf = obj.getColumn(0, "AM_TXF");

        			//this.dsBase.set_enableevent(false);
        			obj.setColumn(0, "AM_VAT",_vat);
        			//this.dsBase.set_enableevent(true);

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT.set_value(_sup+_vat+_txf);
        		} else if(e.columnid == "RT_OUR"){
        			//당사지분율
        			_rtour = obj.getColumn(0, "RT_OUR");

        			_sup = nexacro.round(obj.getColumn(0, "AM_SUP") * (_rtour / 100));
        			if(this.dsBase.getColumn(0, "YN_TAX_NA") != "Y"){
        				_vat = nexacro.round(obj.getColumn(0, "AM_VAT") * (_rtour / 100));
        			}
        			_txf = nexacro.round(obj.getColumn(0, "AM_TXF") * (_rtour / 100));

        			this.dsBase.set_enableevent(false);
        			obj.setColumn(0, "AM_SUP_OUR",_sup);
        			obj.setColumn(0, "AM_VAT_OUR",_vat);
        			obj.setColumn(0, "AM_TXF_OUR",_txf);
        			this.dsBase.set_enableevent(true);

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF_OUR.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT_OUR.set_value(_sup+_vat+_txf);

        		}else if(e.columnid == "AM_SUP_OUR"){
        			//당사도급액
        			_sup = obj.getColumn(0, "AM_SUP_OUR");
        			if(this.dsBase.getColumn(0, "YN_TAX_NA") != "Y"){
        				_vat = nexacro.round(_sup * 0.1);
        			}
        			_txf = obj.getColumn(0, "AM_TXF_OUR");

        			this.dsBase.set_enableevent(false);
        			if(this.dsBase.getColumn(0, "YN_TAX_NA") != "Y"){
        				obj.setColumn(0, "AM_VAT_OUR",_vat);
        			}
        			this.dsBase.set_enableevent(true);

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF_OUR.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT_OUR.set_value(_sup+_vat+_txf);
        		} else if(e.columnid == "AM_VAT_OUR" || e.columnid == "AM_TXF_OUR"){
        			//당사도급액
        			_sup = obj.getColumn(0, "AM_SUP_OUR");
        			if(this.dsBase.getColumn(0, "YN_TAX_NA") != "Y"){
        				_vat = obj.getColumn(0, "AM_VAT_OUR");
        			}
        			_txf = obj.getColumn(0, "AM_TXF_OUR");

        			this.divData.form.tabData.tab1.form.ctxtAM_SUPTXF_OUR.set_value(_sup+_txf);
        			this.divData.form.tabData.tab1.form.ctxtAM_TOT_OUR.set_value(_sup+_vat+_txf);
        		} else if(e.columnid == "SZ_AREA_M"){
        			obj.setColumn(0, "SZ_AREA", nexacro.round(e.newvalue / 3.3058,2));
        		} else if(e.columnid == "SZ_LAND_M"){
        			obj.setColumn(0, "SZ_LAND", nexacro.round(e.newvalue / 3.3058,2));
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
        			//if(this.dsBase.getColumn(0, "YN_TAX_NA") != "Y"){
        			//	_vat = _sup*0.1;
        			//}
        			_txf = obj.getColumn(0, "AM_TXF");

        			//this.dsBase.set_enableevent(false);
        			//obj.setColumn(0, "AM_VAT",_vat);
        			//this.dsBase.set_enableevent(true);


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

        this.divData_tabData_onchanged = function(obj,e){
        	switch(obj.tabindex) {
        		case 0:
        			this.fnSetButton();
        			break;
        		case 1:
        		case 2:
        		case 3:
        		case 4:
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
        		case 1:
        			//수주 > 주택 > 공통 > 공동도급사 관리
        			popStr = "DOZ_CO_CONTRCT";
        			_width = 1220;
        		break;
        		case 2:
        			//수주 > 주택 > 공통 > 관계사 관리
        			popStr = "DOZ_CONTRCT_CONCERN";
        			_width = 850;
        		break;
        	}

        	var param = {
        		CD_FIELD : this.dsBase.getColumn(0, "CD_FIELD")
        	  , DS_FIELD : this.dsBase.getColumn(0, "DS_FIELD")
        	  , NO_CONT : this.dsBase.getColumn(0, "NO_CONT")
        	  , NO_CHG_CONT : this.dsBase.getColumn(0, "NO_CHG_CONT")
        	  , TY_PROJ : this.ARCH_TY_PROJ
        	}

        	this.gfnFormOpen("DOZ", popStr, "fnDialogCallback", param, _width, 600);
        };


        this.dsBase2_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.dsBase.set_enableevent(false);
        		switch(e.columnid) {
        			case "AM_OCAPITAL":	//자기자본
        				this.fnAM_TOT(obj);
        				break;
        			case "AM_BCAPITAL":	//타인자본
        				this.fnAM_TOT(obj);
        				break;
        			case "AM_ETC":	    //기타(분양금등)
        				this.fnAM_TOT(obj);
        				break;
        			case "RT_OCAPITAL":	//자기자본율
        			    this.fnRT_TOT(obj);
        				break;
        			case "RT_BCAPITAL":	//타인자본율
        			    this.fnRT_TOT(obj);
        				break;
        			case "RT_ETC":	    //기타율(분양금등)
        			    this.fnRT_TOT(obj);
        				break;
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab1.form.ctclDT_ACQ.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab1.form.cchkYN_Pre.addEventHandler("onchanged",this.divSearch_cchkYN_Pre_onchanged,this);
            this.divData.form.tabData.tab1.form.cchkYN_Pre00.addEventHandler("onchanged",this.divSearch_cchkYN_Pre_onchanged,this);
            this.divData.form.tabData.tab1.form.ctclDT_ACQ00.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab1.form.ctclDT_ACQ01.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab2.form.btnReg.addEventHandler("onclick",this.divData_tabData_btnReg_onclick,this);
            this.divData.form.tabData.tab3.form.btnReg.addEventHandler("onclick",this.divData_tabData_btnReg_onclick,this);
            this.divData.form.tabData.tab4.form.div01.form.ctclDT_ACQ.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab4.form.div01.form.ctclDT_COST_SEL.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab4.form.div01.form.staDS_ROAD_STAT.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab4.form.div01.form.txtDS_FI.addEventHandler("onchanged",this.divData_tabData_tab1_txtDS_RM_onchanged,this);
            this.divData.form.tabData.tab4.form.div01.form.staDS_ROAD_STAT00.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab4.form.div01.form.staDS_ROAD_STAT00_00.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab4.form.div01.form.staDS_ROAD_STAT00_00_00.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab4.form.div01.form.staAM_TOT.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab4.form.div01.form.staDS_ROAD_STAT00_00_00_00_00.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab4.form.div01.form.staMoneyState.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab4.form.div01.form.staAM_OCAPITAL.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab4.form.div01.form.staRT_OCAPITAL.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab4.form.div01.form.txtDS_SCALE.addEventHandler("onchanged",this.divData_tabData_tab1_txtDS_RM_onchanged,this);
            this.divData.form.tabData.tab4.form.div01.form.txtDS_RM1.addEventHandler("onchanged",this.divData_tabData_tab1_txtDS_RM_onchanged,this);
            this.divData.form.tabData.tab4.form.div01.form.txtDS_AI.addEventHandler("onchanged",this.divData_tabData_tab1_txtDS_RM_onchanged,this);
            this.divData.form.tabData.tab4.form.div01.form.txtDS_DI.addEventHandler("onchanged",this.divData_tabData_tab1_txtDS_RM_onchanged,this);
            this.divData.form.tabData.tab4.form.div00.form.ctclDT_ACQ.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab4.form.div00.form.ctclDT_COST_SEL.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab4.form.div00.form.staCD_LAND_STAT.addEventHandler("onclick",this.divData_tabData_tab1_staCD_LAND_STAT_onclick,this);
            this.divData.form.tabData.tab4.form.div00.form.staCD_PERMIT_STAT00_00_00.addEventHandler("onclick",this.divData_tabData_tab1_staCD_PERMIT_STAT00_00_00_onclick,this);
            this.divData.form.tabData.tab4.form.div00.form.ccboCD_LAND_STAT.addEventHandler("onitemchanged",this.divData_tabData_tab1_ccboCD_LAND_STAT_onitemchanged,this);
            this.divData.form.tabData.tab4.form.div00.form.txtDS_RM.addEventHandler("onchanged",this.divData_tabData_tab1_txtDS_RM_onchanged,this);
            this.divData.form.tabData.tab4.form.div00.form.staPercent09.addEventHandler("onclick",this.divData_tabData_tab1_staPercent09_onclick,this);
            this.dsBase.addEventHandler("onvaluechanged",this.dsBase_onvaluechanged,this);
            this.dsBase2.addEventHandler("onvaluechanged",this.dsBase2_onvaluechanged,this);
        };
        this.loadIncludeScript("DOD_ARCH_CONT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
