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
                this._setFormPosition(1304,820);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectBase</Col><Col id=\"SP\">DODPR_SOC_FIELD_TO_PROJ_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"SP\">DODPR_SOC_CONT_INFO_SELECT</Col><Col id=\"TARGET\">select0</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DODPR_SOC_CONT_MERGE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DODPR_ARCH_CONT_CO_CONTRCT_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DODPR_ARCH_CONT_CONCERN_SELECT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DODPR_ARCH_PROJ_ALL</Col></Row><Row><Col id=\"TARGET\">selectProjInfo</Col><Col id=\"SP\">DOAPR_SOC_PROJ_SELECT</Col></Row><Row><Col id=\"TARGET\">select51</Col><Col id=\"SP\">DOAPR_SOC_PROJ_ANALISYS_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select52</Col><Col id=\"SP\">DOAPR_SOC_PROJ_JV_SELECT</Col></Row><Row><Col id=\"SP\">DOAPR_SOC_PROJ_CONSOR_LIST_SELECT</Col><Col id=\"TARGET\">select61</Col></Row><Row><Col id=\"TARGET\">select62</Col><Col id=\"SP\">DOAPR_SOC_PROJ_CONSOR_FIRM_SELECT</Col></Row><Row><Col id=\"TARGET\">selectCharge</Col><Col id=\"SP\">DOAPR_PROJ_YNCHARGE_SELECT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DODPR_CONT_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBase", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NO_CHG_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NM_CHG_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONST_ST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONST_ED\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TXF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUP_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TXF_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_ADV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ADV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONT_GRNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_REG_SEAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CND_COLT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REQTM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_WITHINDAYS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_TERM1\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TERM1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_TERM2\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TERM2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_RM_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"ID_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BONBU\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BONBU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUMUN\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BUMUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SAUP_CNTR\" type=\"STRING\" size=\"256\"/><Column id=\"NM_SAUP_CNTR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COLT_FUND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NH_BOND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UR_BOND\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_TAX_NA\" type=\"STRING\" size=\"256\"/><Column id=\"YN_NEW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LOC", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsProjInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CLS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CLS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CLS_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CLS_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PUSH_MHD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PUSH_MHD\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PUSH_AHD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PUSH_AHD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TERM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ODR_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"YM_CONT_SCHD\" type=\"STRING\" size=\"256\"/><Column id=\"YM_OP_ST\" type=\"STRING\" size=\"256\"/><Column id=\"YM_OP_ED\" type=\"STRING\" size=\"256\"/><Column id=\"YM_CONST_ST\" type=\"STRING\" size=\"256\"/><Column id=\"YM_CONST_ED\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_TERM_OP\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BIZ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_IVST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_SCALE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FI\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AI\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DI\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FIELD_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD_NEW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList7", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList8", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList12", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRcvYNCharge", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"YN_EXISTS\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
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

            obj = new Static("sta16","124","172","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta23","432","375","212","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta11","124","375","207","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta35","762","85","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_CLS_CONST","330","85","103","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("117");
            obj.set_text("상품분류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta38","432","85","212","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ_STAT","5","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_text("계약명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_BIZ","5","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("104");
            obj.set_text("사업유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD","5","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("10");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00","124","27","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","124","56","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNM_PROV","643","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_text("계약일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta18","762","27","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNM_ENF","643","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_text("계약수행방식");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT","5","143","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("15");
            obj.set_text("착공일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta09","124","143","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ","643","143","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("18");
            obj.set_text("준공일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta10","762","56","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta12","762","143","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS","5","201","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("29");
            obj.set_text("계약 공급가(과세)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ACC","5","288","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("35");
            obj.set_text("계약 부가세");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04","124","201","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta05","124","288","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LOCAL","643","201","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("32");
            obj.set_text("당사 공급가(과세)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CITY_PLAN","643","288","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("38");
            obj.set_text("당사 부가세");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_PUB_NOTICE","5","230","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("41");
            obj.set_text("계약 공급가(면세)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06","124","230","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_USE_STAT","643","230","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("44");
            obj.set_text("당사 공급가(면세)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta07","762","201","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta08","762","288","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta13","762","230","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT","5","317","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("107");
            obj.set_text("계약 총금액");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta14","124","317","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CONT_LIMIT","643","317","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("109");
            obj.set_text("당사 총금액");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta15","762","317","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD00","5","172","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("21");
            obj.set_text("과세율");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ENF_DEPT00","643","172","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("25");
            obj.set_text("당사 지분율");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta17","762","172","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta03","762","346","209","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT00","5","346","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("47");
            obj.set_text("선수금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta19","124","346","207","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS00","643","375","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("62");
            obj.set_text("수금조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta22","762","375","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LOCAL00","970","346","109","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("65");
            obj.set_text("사용인감");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CITY_PLAN00","5","404","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("68");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta25","1078","346","204","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta26","124","404","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT00","5","433","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("70");
            obj.set_text("공사대금회수기준");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta28","124","433","202","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CONT_LIMIT00","643","433","120","59",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("76");
            obj.set_text("지급방식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta29","762","433","520","59",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD01","643","346","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("53");
            obj.set_text("계약보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT01","5","462","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("84");
            obj.set_text("지급시기");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02","124","462","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTab1Title03","5","498",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("112");
            obj.set_text("공사 현장정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ_STAT01","5","525","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("89");
            obj.set_text("공사분야");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta33","124","525","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta31","124","114","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfDS_REGION","229","119","406","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_LOC","staTY_BIZ_MHOD:3","119","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_LOC");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR2","642","119","634","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("14");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ02","5","554","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("92");
            obj.set_text("현장코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta36","124","554","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT","staCD_BIZ_STAT:3","32","510","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ","staNM_PROV:3","32","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_BIZ","staDS_BIZ:3","61","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("39");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboTY_CONT","staNM_ENF:3","62","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_CONT");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_Pre00","965","60","74","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("9");
            obj.set_text("Main여부");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("Y");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ00","staTY_PRDCT:3","148","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ01","staDT_ACQ:3","148","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH","staTY_BIZ_MHOD00:3","177","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("23");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH00","staDS_ENF_DEPT00:3","177","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("27");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND","staDS_LAND_CLS:3","206","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("31");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND00","staDS_ACC:3","294","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("37");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND01","staDS_PUB_NOTICE:3","235","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TOT","staDS_ROAD_STAT:3","322","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("102");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TOT_OUR","staDS_CONT_LIMIT:3","322","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("103");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND04","staDS_USE_STAT:3","235","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("46");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND05","staDS_CITY_PLAN:3","294","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("40");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND06","staDS_LOCAL:3","206","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("34");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND08","staTY_BIZ_MHOD01:3","351","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("55");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09","staTY_PRDCT00:3","351","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("49");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT01","staDS_LOCAL00:3","351","194","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("67");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT03","staDS_CITY_PLAN00:3","409","1147","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("69");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_COLT_FUND","staDS_ROAD_STAT00:3","438","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("72");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_COLT_FUND");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta37","444","433","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_REQTM","448","438","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("75");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_REQTM");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT02","325","433","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_text("청구시기");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_TERM1","staDS_CONT_LIMIT00:3","439","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("78");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_TERM1");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_TERM2","staDS_CONT_LIMIT00:3","466","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("81");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_TERM2");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH01","965","439","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("79");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH02","965","466","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("82");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent05","staDS_ROAD_STAT01:4","467","70","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("86");
            obj.set_text("청구일로부터");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent00","248","467","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("88");
            obj.set_text("일");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND14","204","468","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("87");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfCD_BONBU","staCD_BIZ_STAT01:3","530","406","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_16");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("91");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_FIELD","228","559","500","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("95");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_FIELD","staTY_BIZ02:3","559","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("94");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent06","1029","439","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("80");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent07","1029","465","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("83");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent08","189","177","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("24");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent09","827","177","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("28");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_CLS","5","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("113");
            obj.set_text("공사분야");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta34","124","85","207","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_PUSH_MHD","643","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("115");
            obj.set_text("추진방식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_CLS","128","90","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("99");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_CLS_CONST","437","90","201","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("100");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_PUSH_MHD","767","90","188","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("101");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CND_COLT","766","380","509","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("64");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD02","5","375","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("56");
            obj.set_text("국민주택채권");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CND_COLT00","128","380","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("58");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD03","330","375","103","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("59");
            obj.set_text("도시철도채권");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CND_COLT01","436","380","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("61");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staID_FILE_ATTCH","5","583","120","149",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("96");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta27_00","124","583","1158","149",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("divFile","118","579","1145","150",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("97");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ00","330","346","103","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("119");
            obj.set_text("선수금율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta21","432","346","212","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND10","staDT_ACQ00:3","351","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("51");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10","501","350","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("52");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00","262","177","373","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("120");
            obj.set_text("(영세율은 차수계약,변경계약,청구내역이 생성되면 변경 불가.)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_TAX_NA","214","175","50","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("121");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_text("영세");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_value("N");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00_00_01","977","206","78","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("122");
            obj.set_text("(세금계산서)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00_00_00_00","977","235","78","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("123");
            obj.set_text("(계산서)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00_00","339","206","78","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("124");
            obj.set_text("(세금계산서)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00_00_00","339","235","78","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("125");
            obj.set_text("(계산서)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_SUPTXF","5","259","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("126");
            obj.set_text("계약 공급가(소계)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta20","124","259","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("127");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_SUPTXF_OUR","643","259","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("128");
            obj.set_text("당사 공급가(소계)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta24","762","259","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SUPTXF","128","264","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("130");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SUPTXF_OUR","766","264","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("131");
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

            obj = new Static("sta07_00","124","375","1158","59",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta28_00","549","288","733","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staCD_CLS_CONST","855","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("2");
            obj.set_text("상품분류");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta04","974","27","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staNO_TERM","855","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("4");
            obj.set_text("공사기간");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta05","974","56","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","0",null,"22","19",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("6");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTY_PUSH_MHD","5","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("7");
            obj.set_text("추진방식");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staCD_LOC","5","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("8");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta00","124","27","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta01","124","56","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta02","124","114","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staCD_CLS","430","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("12");
            obj.set_text("공사분야");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta18","549","27","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTY_PUSH_AHD","430","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("14");
            obj.set_text("추진구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta10","549","56","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTab1Title01","5","146",null,"22","49",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("16");
            obj.set_text("프로젝트 개요");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staYM_CONT_SCHD","5","172","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_text("수주예정");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staYM_OP_ST","5","201","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("18");
            obj.set_text("운영시작");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta16","124","172","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta17","124","201","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_CONT","430","172","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("21");
            obj.set_text("수주예상금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staYM_OP_ED","5","230","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("22");
            obj.set_text("운영종료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta19","124","230","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staNO_TERM_OP","430","201","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("24");
            obj.set_text("운영기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta20","549","172","733","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta22","549","201","733","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_BIZ","430","230","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("27");
            obj.set_text("총사업비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta24","549","230","733","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta25","124","259","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staYM_CONST_ST","5","259","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("30");
            obj.set_text("착공예정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta27","124","520","1158","149",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staID_FILE_ATTCH","5","520","120","149",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("32");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_IVST","430","259","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("33");
            obj.set_text("총투자비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta28","549","259","733","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staPercent16","1065","60","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("35");
            obj.set_text("개월");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staYM_CONST_ED","5","288","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("36");
            obj.set_text("준공예정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06","124","288","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDS_SCALE","5","317","120","59",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("38");
            obj.set_text("사업규모");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta07","124","317","1158","59",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDS_FI","5","433","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("40");
            obj.set_text("금융자문사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta14","124","433","1157","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDS_AI","5","462","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("42");
            obj.set_text("회계자문사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta21","124","462","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDS_DI","5","491","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("44");
            obj.set_text("설계용역사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta23","124","491","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta05_00","974","85","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staPercent16_00","1065","89","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("47");
            obj.set_text("%");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staRT_OUR","855","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("48");
            obj.set_text("당사지분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta10_00","549","85","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDS_ODR_DEPT","430","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("50");
            obj.set_text("주무부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta01_00","124","85","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staCD_ODR","5","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("52");
            obj.set_text("주무관청");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_CONST","430","288","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("53");
            obj.set_text("총공사비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDS_RM","5","375","120","59",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("54");
            obj.set_text("현안사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staPercent16_01","693","206","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("55");
            obj.set_text("(년)");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staPercent16_01_00","692","234","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("56");
            obj.set_text("억원");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staPercent16_01_00_00","693","263","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("57");
            obj.set_text("억원");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staPercent16_01_00_00_00","693","292","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("58");
            obj.set_text("억원");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ","5","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("59");
            obj.set_text("사업유형");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR2","687","119","584","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("60");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_TERM_OP","554","206","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("61");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_AI","129","468","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("62");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_FI","129","438","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("63");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_DI","129","496","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("64");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ODR_DEPT","554","90","188","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("65");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_TERM","979","60","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("66");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_OUR","979","89","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("67");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_format("0.##");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BIZ","554","235","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("68");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_IVST","554","264","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("69");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST","554","293","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("70");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONT","554","177","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("71");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Div("divFile","124","522","1145","150",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("72");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Div("ctclYM_OP_ST","129","206","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("73");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Div("ctclYM_OP_ED","129","235","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("74");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Div("ctclYM_CONST_ST","129","264","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("75");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Div("ctclYM_CONST_ED","129","293","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("76");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Div("ctclYM_CONT_SCHD","129","177","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("77");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RM","129","379","1148","51",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("78");
            obj.set_maxlength("1000");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new TextArea("txtDS_SCALE","129","321","1148","51",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("79");
            obj.set_maxlength("1000");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Combo("ccboCD_LOC","129","119","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("80");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_LOC");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_PUSH_MHD","129","61","188","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("81");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ODR","129","90","188","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("82");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PUSH_AHD","554","61","188","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("83");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_PUSH_MHD00","129","32","188","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("84");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PUSH_AHD00","554","32","188","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("85");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PUSH_AHD01","979","32","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("86");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_ZIP","265","119","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("87");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR1","365","119","319","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("88");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab6",this.divData.form.tabData);
            obj.set_text("프로젝트 사업성분석");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrdtab1_1","5","17",null,"250","19",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("staTab1Title01","5","277",null,"24","1233",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("1");
            obj.set_text("참여사");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Grid("objGrdtab1_2","5","307",null,"250","19",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Tabpage("tab7",this.divData.form.tabData);
            obj.set_text("프로젝트 경쟁컨소시엄");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divFile","5","549","1277","150",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Grid("objGrdtab4_1","5","17",null,"250","19",null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staTab1Title01","5","277",null,"24","1153",null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("2");
            obj.set_text("컨소시엄 참여사");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Grid("objGrdtab4_2","5","307",null,"250","19",null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("3");
            obj._setContents("");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("프로젝트 공동도급사,관계사");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTab2Title1","5","0",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            obj.set_text("공동도급");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_visible("true");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGrdtab5","5","27",null,"160","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGrdtab6","5","225",null,"160","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Static("staTab2Title01","5","195",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("3");
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

            obj = new BindItem("item25","divData.form.tabData.tab1.form.ctxtCD_FIELD","value","dsProjInfo","CD_FIELD_NEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tabData.tab1.form.ctxtDS_FIELD","value","dsProjInfo","DS_FIELD_NEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tabData.tab1.form.ccfCD_BONBU.form.CDTextBox","value","dsBase","CD_BONBU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.tabData.tab1.form.ccfCD_BONBU.form.DSTextBox","value","dsBase","NM_BONBU");
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

            obj = new BindItem("item41","divData.form.tabData.tab1.form.ccboCD_COLT_FUND","value","dsBase","CD_COLT_FUND");
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

            obj = new BindItem("item15","divData.form.tabData.tab1.form.ctxtDS_CND_COLT","value","dsBase","DS_CND_COLT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.tabData.tab1.form.ctxtTY_PUSH_MHD","value","dsProjInfo","DS_PUSH_MHD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab1.form.ctxtCD_CLS_CONST","value","dsProjInfo","DS_CLS_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab1.form.ctxtCD_CLS","value","dsProjInfo","DS_CLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab1.form.ctxtDS_BIZ","value","dsProjInfo","DS_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab1.form.ctxtDS_CND_COLT00","value","dsBase","DS_NH_BOND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.tabData.tab1.form.ctxtDS_CND_COLT01","value","dsBase","DS_UR_BOND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","divData.form.tabData.tab4.form.ctxtRT_BID_OUR","value","dsDetail2","RT_BID_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.tabData.tab4.form.ctxtDS_ADDR2","value","dsProjInfo","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.tabData.tab4.form.ctxtNO_TERM_OP","value","dsProjInfo","NO_TERM_OP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab4.form.ctxtDS_AI","value","dsProjInfo","DS_AI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.tabData.tab4.form.ctxtDS_FI","value","dsProjInfo","DS_FI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.tabData.tab4.form.ctxtDS_DI","value","dsProjInfo","DS_DI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.tabData.tab4.form.ctxtDS_ODR_DEPT","value","dsProjInfo","DS_ODR_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.tabData.tab4.form.ctxtNO_TERM","value","dsProjInfo","NO_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab4.form.ctxtRT_OUR","value","dsProjInfo","RT_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.tabData.tab4.form.ctxtAM_BIZ","value","dsProjInfo","AM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.tabData.tab4.form.ctxtAM_IVST","value","dsProjInfo","AM_IVST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.tabData.tab4.form.ctxtAM_CONST","value","dsProjInfo","AM_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.tabData.tab4.form.ctxtAM_CONT","value","dsProjInfo","AM_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divData.form.tabData.tab4.form.ctclYM_OP_ST.form.TextBox","value","dsProjInfo","YM_OP_ST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divData.form.tabData.tab4.form.ctclYM_OP_ED.form.TextBox","value","dsProjInfo","YM_OP_ED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divData.form.tabData.tab4.form.ctclYM_CONST_ST.form.TextBox","value","dsProjInfo","YM_CONST_ST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divData.form.tabData.tab4.form.ctclYM_CONST_ED.form.TextBox","value","dsProjInfo","YM_CONST_ED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","divData.form.tabData.tab4.form.ctclYM_CONT_SCHD.form.TextBox","value","dsProjInfo","YM_CONT_SCHD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","divData.form.tabData.tab4.form.txtDS_RM","value","dsProjInfo","DS_RM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","divData.form.tabData.tab4.form.txtDS_SCALE","value","dsProjInfo","DS_SCALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divData.form.tabData.tab4.form.ccboCD_LOC","value","dsProjInfo","CD_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divData.form.tabData.tab4.form.ctxtTY_PUSH_MHD","value","dsProjInfo","DS_PUSH_MHD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divData.form.tabData.tab4.form.ctxtDS_ODR","value","dsProjInfo","DS_ODR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divData.form.tabData.tab4.form.ctxtDS_PUSH_AHD","value","dsProjInfo","DS_PUSH_AHD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divData.form.tabData.tab4.form.ctxtTY_PUSH_MHD00","value","dsProjInfo","DS_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","divData.form.tabData.tab4.form.ctxtDS_PUSH_AHD00","value","dsProjInfo","DS_CLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divData.form.tabData.tab4.form.ctxtDS_PUSH_AHD01","value","dsProjInfo","DS_CLS_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divData.form.tabData.tab4.form.ctxtCD_ZIP","value","dsProjInfo","CD_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divData.form.tabData.tab4.form.ctxtDS_ADDR1","value","dsProjInfo","DS_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.tabData.tab1.form.cchkYN_Pre00","value","dsBase","YN_MAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab1.form.ctxtAM_LAND10","value","dsBase","RT_ADV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.tabData.tab1.form.chkYN_TAX_NA","value","dsBase","YN_TAX_NA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmFileManager.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DOD_SOC_CONT.xfdl", function() {
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
        	this.fnSetCombo();

        	this.dsBase.clearData();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_FIELD)){
        		//편집
        		this.dsInitSearch.setColumn(0, "CD_FIELD", this.getOwnerFrame().CD_FIELD);
        		this.dsInitSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_CONT);
        		this.dsInitSearch.setColumn(0, "NO_CHG_CONT", this.getOwnerFrame().NO_CHG_CONT);
        		this.fnInitSelect();
        	} else {
        		//신규
        		this.dsBase.set_enableevent(false);
        		this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        		this.dsSearch.setColumn(0, "DS_PROJ", this.getOwnerFrame().DS_PROJ);
        		this.dsBase.set_enableevent(true);
        		this.fnAdd();
        		this.divData.form.tabData.tab2.set_enable(false);
        		this.divData.form.tabData.tab3.set_enable(false);
        		/*폼상태는 입력 모드*/
        		this.gfnSetFormStatus(this, "I");
        	}

        	// 프로젝트 기본정보 조회
        	this.fnInitProjectInfo();

        	this.fnSetButton();


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
        	this.ARCH_TY_PROJ = "SA00101";

        	this.ccfDS_REGION = this.divData.form.tabData.tab1.form.ccfDS_REGION;
        	this.ccfCD_BONBU = this.divData.form.tabData.tab1.form.ccfCD_BONBU;
        	this.ccfCD_BUMUN = this.divData.form.tabData.tab1.form.ccfCD_BUMUN;
        	this.ccfSAUP_CNTR = this.divData.form.tabData.tab1.form.ccfSAUP_CNTR;

        	this.ctxtCD_FIELD = this.divData.form.tabData.tab1.form.ctxtCD_FIELD;
        	this.ctxtDS_FIELD = this.divData.form.tabData.tab1.form.ctxtDS_FIELD;
        	this.ccfCD_ODR = this.divData.form.tabData.tab1.form.ccfCD_ODR;


        	this.ccfDS_REGION.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";        //우편번호
        	this.ccfCD_BONBU.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";      //검토상태

        	//공동도급사
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrdtab2;
        	//관계사
        	this.dxGrid3 = this.divData.form.tabData.tab3.form.objGrdtab3;

        	//사업성분석
        	this.dxGrid1_1 = this.divData.form.tabData.tab6.form.objGrdtab1_1;
        	this.dxGrid1_2 = this.divData.form.tabData.tab6.form.objGrdtab1_2;

        	//경쟁컨소시엄
        	this.dxGrid7 = this.divData.form.tabData.tab7.form.objGrdtab4_1;
        	this.dxGrid8 = this.divData.form.tabData.tab7.form.objGrdtab4_2;

        	//프로젝트 공동도급사
        	this.dxGrid5 = this.divData.form.tabData.tab5.form.objGrdtab5;
        	//프로젝트 관계사
        	this.dxGrid6 = this.divData.form.tabData.tab5.form.objGrdtab6;

        	//this.dxGrid1_2.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid8.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.ccfCD_ODR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.serverTime = "";
        	this.gfnGetServerTime("serverTime");

        	this.serverTimeStr = this.gfnGetDigit(this.serverTime.substring(0, 10));
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	if (id == "ccfCD_ODR") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_SITE", "");
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "");
        	}
        	return true;
         }
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	dsUserParam.setColumn(nrow, "CD_CORP", "");
        	dsUserParam.setColumn(nrow, "CD_SITE", "");
        	dsUserParam.setColumn(nrow, "TY_VENDOR", "");
        	return true;
         }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DO", "DOD_ARCH_CONT_CO_CONTRCT");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DO", "DOD_ARCH_CONT_CONCERN");

        	this.gfnGridInit(this.dxGrid1_1, this.dsList11, "DO", "DOC_SOC_ANALYSIS_LIST");
        	this.gfnGridInit(this.dxGrid1_2, this.dsList12, "DO", "DOC_SOC_JV_LIST");

        	this.gfnGridInit(this.dxGrid7, this.dsList7, "DO", "DOC_SOC_CONSOR_LIST");
        	this.gfnGridInit(this.dxGrid8, this.dsList8, "DO", "DOC_SOC_CONSOR_FIRM_LIST");

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
        	this.dsSave.addColumn("YN_MAIN", "STRING");
        	this.dsSave.addColumn("TY_BIZ", "STRING");
        	this.dsSave.addColumn("NM_BIZ", "STRING");
        	this.dsSave.addColumn("CD_LOC", "STRING");
        	this.dsSave.addColumn("CD_ZIP", "STRING");
        	this.dsSave.addColumn("DS_ADDR1", "STRING");
        	this.dsSave.addColumn("DS_ADDR2", "STRING");
        	this.dsSave.addColumn("TY_CONT", "STRING");
        	this.dsSave.addColumn("CD_COLT_FUND", "STRING");
        	this.dsSave.addColumn("DS_NH_BOND", "STRING");
        	this.dsSave.addColumn("DS_UR_BOND", "STRING");
        	this.dsSave.addColumn("RT_TAX", "BIGDECIMAL");
        	this.dsSave.addColumn("YN_TAX_NA", "STRING");
        	this.dsSave.addColumn("YN_NEW", "STRING");

        	this.dsSave.addColumn("OUT_CD_FIELD", "STRING");
        	this.dsSave.addColumn("OUT_NO_CONT", "INT");
        	this.dsSave.addColumn("OUT_NO_CHG_CONT", "INT");

        	this.dsSelectBase = new Dataset();
        	this.dsSelectBase.addColumn("CD_FIELD", "STRING");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "string");

        	this.dsSelect51 = new Dataset();
        	this.dsSelect51.addColumn("CD_PROJ", "string");
        	this.dsSelect51.addColumn("YN_READ", "string");

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


        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_CONT=combo0 dsCD_COLT_FUND=combo1 dsCD_REQTM=combo2 dsCD_TERM1=combo3 dsCD_TERM2=combo4 dsCD_LOC=combo5";
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
        						callBackFnc,
        						false); // 통신방법 정의 [생략가능]
        }

        this.fnInitProjectInfo = function(){

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));

        	var strSvcId    = "selectProjInfo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectProjInfo=dsSelect";
        	var outData     = "dsProjInfo=selectProjInfo0";
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

        	var strSvcId    = "select"+tIdx;

        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));

        	this.dsSelect51.clearData();
        	this.dsSelect51.addRow();
        	this.dsSelect51.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSelect51.setColumn(0, "YN_READ", "Y");

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
        		inData      = "selectProjInfo=dsSelect";
        		outData     = "dsProjInfo=selectProjInfo0";
        	} else if(tIdx == 4){
        		inData      = "select51=dsSelect51";
        		outData     = "dsList11=select510";
        	} else if(tIdx == 5){
        		inData      = "select61=dsSelect";
        		outData     = "dsList7=select610";
        	} else if(tIdx == 6){
        		inData      = "select4=dsSelect";
        		outData     = "dsList5=select41 dsList6=select42";
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
        }

        this.fnSave = function(obj,e){
        	this.dsSave.clearData();
        	this.dsSave.addRow();
        	this.dsSave.copyRow(0, this.dsBase, 0);
        	this.dsSave.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSave.setColumn(0, "CD_FIELD", this.dsProjInfo.getColumn(0, "CD_FIELD_NEW"));
        	this.dsSave.setColumn(0, "DS_FIELD", this.dsProjInfo.getColumn(0, "DS_FIELD_NEW"));
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

        	this.dsBase.setColumn(nRow, "YN_TMP_CONT", "N");
        	this.dsBase.setColumn(nRow, "YN_MAIN", "Y");
        	this.dsBase.setColumn(nRow, "YN_TAX_NA", "N");
        	this.dsBase.setColumn(nRow, "DS_FIELD", this.dsSearch.getColumn(0, "DS_PROJ"));
        	this.dsBase.setColumn(nRow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_PROJ") + "01");
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
        	if (errorCode == 0) {
        		if(svcID == "initSelect"){
        			//조회
        			this.fnSelect();
        		} else if(svcID == "selectProjInfo"){

        			// 프로젝트 기본정보 SET
        			if(this.gfnIsNull(this.getOwnerFrame().CD_FIELD)){
        				this.dsBase.set_enableevent(false);
        				this.dsBase.setColumn(0, "CD_LOC", this.dsProjInfo.getColumn(0, "CD_LOC"));
        				this.dsBase.setColumn(0, "CD_ZIP", this.dsProjInfo.getColumn(0, "CD_ZIP"));
        				this.dsBase.setColumn(0, "DS_ADDR1", this.dsProjInfo.getColumn(0, "DS_ADDR1"));
        				this.dsBase.setColumn(0, "DS_ADDR2", this.dsProjInfo.getColumn(0, "DS_ADDR2"));

        				this.dsBase.setColumn(0, "CD_BONBU", this.dsProjInfo.getColumn(0, "CD_BONBU"));
        				this.dsBase.setColumn(0, "NM_BONBU", this.dsProjInfo.getColumn(0, "NM_BONBU"));
        				this.dsBase.set_enableevent(true);
        			}
        		} else if(svcID == "combo"){
        			this.dsBase.set_enableevent(false);
        			//this.divData.form.tabData.tab1.form.ccboTY_CONT.set_index(0);
        			//this.divData.form.tabData.tab1.form.ccboCD_LOC.set_index(0);
        			//this.divData.form.tabData.tab1.form.ccboCD_COLT_FUND.set_index(0);
        			//this.divData.form.tabData.tab1.form.ccboCD_REQTM.set_index(0);
        			//this.divData.form.tabData.tab1.form.ccboCD_TERM1.set_index(0);
        			//this.divData.form.tabData.tab1.form.ccboCD_TERM2.set_index(0);
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
        			fileManager.CD_DIR = [ this.getOwnerFrame().CD_FIELD.toString() , this.getOwnerFrame().NO_CONT.toString() , this.getOwnerFrame().NO_CHG_CONT.toString()];


        			fileManager.CD_REF1 =this.getOwnerFrame().CD_FIELD.toString();
        			fileManager.CD_REF2 = this.getOwnerFrame().NO_CONT.toString();
        			fileManager.CD_REF3 = this.getOwnerFrame().NO_CHG_CONT.toString();
        			if(this.FormInfo.TY_AUTH == "R") {
        				fileManager.IS_READONLY = true;
        			} else {
        				fileManager.IS_READONLY = false;
        			}
        			// div FileManager 셋팅
        			this.divData.form.tabData.tab1.form.divFile.form.setFileManager(fileManager);


        			this.gfnSetFormStatus(this, "");
        			this.fnSetButton();
        		} else if(svcID == "select3"){
        				this.divData.form.tabData.tab4.form.divFile.form.set_enable(true);
        				// 첨부파일
        				//var cd_site = this.ccfCD_SITE.form.CDTextBox.value;
        				var fileManager = {};
        				fileManager.CD_GUBUN = "DOS1";
        				fileManager.CD_DIR = [ this.dsProjInfo.getColumn(0, "CD_PROJ") ];
        				fileManager.CD_REF1 = this.dsProjInfo.getColumn(0, "CD_PROJ");
        				fileManager.IS_READONLY = true;
        				// div FileManager 셋팅
        				this.divData.form.tabData.tab4.form.divFile.form.setFileManager(fileManager);
        		} else if(svcID == "select4"){
        			this.fnJvFirmSelect("INIT");
        		} else if(svcID == "selectJvFirm"){
        			this.dxGrid1_1.selecttype = "row";
        			this.dxGrid1_1.selectRow(this.dxGrid1_1.getDatasetRow(1));
        		} else if(svcID == "select5"){
        			this.fnConsorFirmSelect("INIT");
        		} else if(svcID == "selectConsorFirm"){
        			this.dxGrid7.selecttype = "row";
        			this.dxGrid7.selectRow(this.dxGrid7.getDatasetRow(1));
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
        				//_vat = nexacro.round(_sup * 0.1);
        				//과세율
        				_rtour = obj.getColumn(0, "RT_TAX");
        				_vat = nexacro.round(_sup * (_rtour / 100));
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
        			//if(this.dsBase.getColumn(0, "YN_TAX_NA") != "Y"){
        			//	_vat = nexacro.round(_sup * 0.1);
        			//}
        			_txf = obj.getColumn(0, "AM_TXF");

        			//this.dsBase.set_enableevent(false);
        			//obj.setColumn(0, "AM_VAT", _vat);
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
        		case 5:
        		case 6:
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

        this.divData_tabData_tab6_objGrdtab1_1_oncellclick = function(obj,e)
        {
        	var colIdx = obj.getCellProperty("Body", e.col, "col");

        	this.fnJvFirmSelect();
        };

        /************************************************************************
         * 사업성 분석 상세 조회 이벤트
         ************************************************************************/
        this.fnJvFirmSelect = function(INIT){

        	this.dsJvFirmSelect = new Dataset();
        	this.dsJvFirmSelect.addColumn("CD_PROJ", "string");
        	this.dsJvFirmSelect.addColumn("DT_STD", "string");
        	this.dsJvFirmSelect.addColumn("YN_READ", "string");

        	this.dsJvFirmSelect.addRow();
        	this.dsJvFirmSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsJvFirmSelect.setColumn(0, "DT_STD", INIT == "INIT" ? this.dsList11.getColumn(1, "DT_STD") : this.dsList11.getColumn(this.dsList11.rowposition, "DT_STD"));
        	this.dsJvFirmSelect.setColumn(0, "YN_READ", "Y");

        	var strSvcId    = "selectJvFirm";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select52=dsJvFirmSelect";
        	var outData     = "dsList12=select520";
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

        this.divData_tabData_tab7_objGrdtab4_1_oncellclick = function(obj,e)
        {
        	var colIdx = obj.getCellProperty("Body", e.col, "col");

        	this.fnConsorFirmSelect();
        };

        /************************************************************************
         * 경쟁컨소시엄 상세 조회 이벤트
         ************************************************************************/
        this.fnConsorFirmSelect = function(INIT){

        	this.dsConsorFirmSelect = new Dataset();
        	this.dsConsorFirmSelect.addColumn("CD_PROJ", "string");
        	this.dsConsorFirmSelect.addColumn("NO_CONSOR", "string");
        	this.dsConsorFirmSelect.addColumn("YN_READ", "string");

        	this.dsConsorFirmSelect.addRow();
        	this.dsConsorFirmSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsConsorFirmSelect.setColumn(0, "NO_CONSOR", INIT == "INIT" ? this.dsList7.getColumn(1, "NO_CONSOR") : this.dsList7.getColumn(this.dsList7.rowposition, "NO_CONSOR"));
        	this.dsConsorFirmSelect.setColumn(0, "YN_READ", "Y");


        	var strSvcId    = "selectConsorFirm";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select62=dsConsorFirmSelect";
        	var outData     = "dsList8=select620";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab1.form.ctclDT_ACQ.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab1.form.cchkYN_Pre00.addEventHandler("onchanged",this.divSearch_cchkYN_Pre_onchanged,this);
            this.divData.form.tabData.tab1.form.ctclDT_ACQ00.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab1.form.ctclDT_ACQ01.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab2.form.btnReg.addEventHandler("onclick",this.divData_tabData_btnReg_onclick,this);
            this.divData.form.tabData.tab3.form.btnReg.addEventHandler("onclick",this.divData_tabData_btnReg_onclick,this);
            this.divData.form.tabData.tab6.form.objGrdtab1_1.addEventHandler("oncellclick",this.divData_tabData_tab6_objGrdtab1_1_oncellclick,this);
            this.divData.form.tabData.tab7.form.objGrdtab4_1.addEventHandler("oncellclick",this.divData_tabData_tab7_objGrdtab4_1_oncellclick,this);
            this.dsBase.addEventHandler("onvaluechanged",this.dsBase_onvaluechanged,this);
        };
        this.loadIncludeScript("DOD_SOC_CONT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
