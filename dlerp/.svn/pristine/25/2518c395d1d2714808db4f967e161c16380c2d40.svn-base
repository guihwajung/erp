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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectBase</Col><Col id=\"SP\">DODPR_CIVL_FIELD_TO_PROJ_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"SP\">DODPR_CIVL_CONT_INFO_SELECT</Col><Col id=\"TARGET\">select0</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DODPR_CIVL_CONT_MERGE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DODPR_ARCH_CONT_CO_CONTRCT_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DODPR_ARCH_CONT_CONCERN_SELECT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DODPR_ARCH_PROJ_ALL</Col></Row><Row><Col id=\"TARGET\">selectProjInfo</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_SELECT</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_FIELD_EXPL_SELECT</Col></Row><Row><Col id=\"SP\">DOAPR_CIVL_PROJ_BID_RLT_SELECT</Col><Col id=\"TARGET\">select6</Col></Row><Row><Col id=\"TARGET\">select7</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_CO_BID_SELECT</Col></Row><Row><Col id=\"TARGET\">select8</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_CO_CONTRCT_BID_SELECT</Col></Row><Row><Col id=\"SP\">DOAPR_CIVL_PROJ_DSN_CONSOR_MST_SELECT</Col><Col id=\"TARGET\">select9</Col></Row><Row><Col id=\"TARGET\">selectCharge</Col><Col id=\"SP\">DOAPR_PROJ_YNCHARGE_SELECT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DODPR_CONT_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBase", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NO_CHG_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NM_CHG_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONST_ST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONST_ED\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TXF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUP_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TXF_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_ADV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ADV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONT_GRNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_REG_SEAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CND_COLT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REQTM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_WITHINDAYS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_TERM1\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TERM1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_TERM2\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TERM2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_RM_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"ID_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BONBU\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BONBU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUMUN\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BUMUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SAUP_CNTR\" type=\"STRING\" size=\"256\"/><Column id=\"NM_SAUP_CNTR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COLT_FUND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NH_BOND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UR_BOND\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_TAX_NA\" type=\"STRING\" size=\"256\"/><Column id=\"YN_NEW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_TAX_NA\">N</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CV_GO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CV_GO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CLS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CLS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CLS_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CLS_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PRC_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PRC_BID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BIZ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_RM_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BID_PUB\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PQ\" type=\"STRING\" size=\"256\"/><Column id=\"HM_PQ\" type=\"STRING\" size=\"256\"/><Column id=\"H_PQ\" type=\"STRING\" size=\"256\"/><Column id=\"M_PQ\" type=\"STRING\" size=\"256\"/><Column id=\"FM_PQ\" type=\"STRING\" size=\"256\"/><Column id=\"DT_AGREE\" type=\"STRING\" size=\"256\"/><Column id=\"HM_AGREE\" type=\"STRING\" size=\"256\"/><Column id=\"H_AGREE\" type=\"STRING\" size=\"256\"/><Column id=\"M_AGREE\" type=\"STRING\" size=\"256\"/><Column id=\"FM_AGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SITE_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"HM_SITE_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"H_SITE_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"M_SITE_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"FM_SITE_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BID_REG\" type=\"STRING\" size=\"256\"/><Column id=\"HM_BID_REG\" type=\"STRING\" size=\"256\"/><Column id=\"H_BID_REG\" type=\"STRING\" size=\"256\"/><Column id=\"M_BID_REG\" type=\"STRING\" size=\"256\"/><Column id=\"FM_BID_REG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BID\" type=\"STRING\" size=\"256\"/><Column id=\"HM_BID\" type=\"STRING\" size=\"256\"/><Column id=\"H_BID\" type=\"STRING\" size=\"256\"/><Column id=\"M_BID\" type=\"STRING\" size=\"256\"/><Column id=\"FM_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BID_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"HM_BID_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"H_BID_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"M_BID_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"FM_BID_OPEN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REVIEW\" type=\"STRING\" size=\"256\"/><Column id=\"HM_REVIEW\" type=\"STRING\" size=\"256\"/><Column id=\"H_REVIEW\" type=\"STRING\" size=\"256\"/><Column id=\"M_REVIEW\" type=\"STRING\" size=\"256\"/><Column id=\"FM_REVIEW\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BID_WIN\" type=\"STRING\" size=\"256\"/><Column id=\"HM_BID_WIN\" type=\"STRING\" size=\"256\"/><Column id=\"H_BID_WIN\" type=\"STRING\" size=\"256\"/><Column id=\"M_BID_WIN\" type=\"STRING\" size=\"256\"/><Column id=\"FM_BID_WIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SC_COMPL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID_LIC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID_CO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EXPL_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ESTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ID_USER_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_USER_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FILE_ATTCH\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RM_OP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FIELD_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD_NEW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail1", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_USER_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_INCU_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EXCP_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MAT_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RM_SP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FILE_ATTCH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BID_RECOG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DESIGN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FIX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FIX_SUP\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FIX_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ESTM_CAL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ESTM_SUP\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ESTM_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BID_CAL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BID_SUP\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BID_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID_CO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FCT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ESTM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INIT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_INIT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_BID\" type=\"STRING\" size=\"256\"/><Column id=\"RT_SC\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BID_OUR\" type=\"STRING\" size=\"256\"/><Column id=\"RT_BID_OUR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID_RLT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BID_RLT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONT_SCHD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ENTY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ENTY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OPNI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList7", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList8", this);
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

            obj = new Static("sta23","433","375","211","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta11","124","375","208","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta35","762","85","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_CLS_CONST","324","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("17");
            obj.set_text("상품분류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta38","443","85","201","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","0",null,"22","19",null,null,null,null,null,this.divData.form.tabData.tab1.form);
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

            obj = new Static("staCD_CV_GO","5","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("7");
            obj.set_text("공공/민간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD","5","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("23");
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

            obj = new Static("sta18","762","27","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNM_ENF","643","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("10");
            obj.set_text("계약수행방식");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT","5","143","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("28");
            obj.set_text("착공일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta09","124","143","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ","643","143","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("31");
            obj.set_text("준공일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta10","762","56","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta12","762","143","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS","5","201","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("42");
            obj.set_text("계약 공급가(과세)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ACC","5","288","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("48");
            obj.set_text("계약 부가세");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04","124","201","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta05","124","288","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LOCAL","643","201","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("45");
            obj.set_text("당사 공급가(과세)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CITY_PLAN","643","288","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("51");
            obj.set_text("당사 부가세");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_PUB_NOTICE","5","230","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("54");
            obj.set_text("계약 공급가(면세)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06","124","230","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_USE_STAT","643","230","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("57");
            obj.set_text("당사 공급가(면세)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta07","762","201","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta08","762","288","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta13","762","230","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT","5","317","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("60");
            obj.set_text("계약 총금액");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta14","124","317","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CONT_LIMIT","643","317","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("63");
            obj.set_text("당사 총금액");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta15","762","317","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD00","5","172","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("34");
            obj.set_text("과세율");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta16","124","172","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ENF_DEPT00","643","172","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("38");
            obj.set_text("당사 지분율");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta17","762","172","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta03","433","346","211","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT00","5","346","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("66");
            obj.set_text("선수금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta19","124","346","208","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ00","643","346","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("72");
            obj.set_text("선수금율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta21","762","346","201","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS00","643","375","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("82");
            obj.set_text("수금조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta22","762","375","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_LOCAL00","962","346","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("85");
            obj.set_text("사용인감");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CITY_PLAN00","5","404","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("88");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta25","1081","346","201","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta26","124","404","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT00","5","433","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("91");
            obj.set_text("공사대금회수기준");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta28","124","433","208","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CONT_LIMIT00","643","433","120","59",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("97");
            obj.set_text("지급방식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta29","762","433","520","59",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD01","331","346","103","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("69");
            obj.set_text("계약보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT01","5","462","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("105");
            obj.set_text("지급시기");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02","124","462","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTab1Title03","5","498",null,"22","20",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("109");
            obj.set_text("공사 현장정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ_STAT01","5","525","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("110");
            obj.set_text("공사분야");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta33","124","525","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta31","124","114","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfDS_REGION","229","119","406","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("26");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_LOC","staTY_BIZ_MHOD:3","119","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("25");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_LOC");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR2","642","119","634","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("27");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ02","5","554","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("113");
            obj.set_text("현장코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta36","124","554","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("114");
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

            obj = new Edit("ctxtCD_CV_GO","staCD_CV_GO:3","61","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
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

            obj = new CheckBox("cchkYN_Pre00","965","60","74","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("13");
            obj.set_text("Main여부");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("Y");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ00","staTY_PRDCT:3","148","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ01","staDT_ACQ:3","148","110","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("33");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH","staTY_BIZ_MHOD00:3","177","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("36");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH00","staDS_ENF_DEPT00:3","177","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("40");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND","staDS_LAND_CLS:3","206","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("44");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND00","staDS_ACC:3","294","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("50");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND01","staDS_PUB_NOTICE:3","235","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("56");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TOT","staDS_ROAD_STAT:3","322","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("62");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TOT_OUR","staDS_CONT_LIMIT:3","322","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("65");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND04","staDS_USE_STAT:3","235","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("59");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND05","staDS_CITY_PLAN:3","294","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("53");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND06","staDS_LOCAL:3","206","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("47");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND08","staTY_BIZ_MHOD01:3","350","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("71");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09","staTY_PRDCT00:3","351","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("68");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND10","staDT_ACQ00:3","351","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("74");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT01","staDS_LOCAL00:3","351","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("87");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT03","staDS_CITY_PLAN00:3","409","1147","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("90");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_COLT_FUND","staDS_ROAD_STAT00:3","438","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("93");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_COLT_FUND");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta37","433","433","211","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_REQTM","438","438","199","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("96");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_REQTM");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT02","332","433","102","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("94");
            obj.set_text("청구시기");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_TERM1","staDS_CONT_LIMIT00:3","439","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("99");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_TERM1");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_TERM2","staDS_CONT_LIMIT00:3","466","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("102");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_TERM2");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH01","965","439","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("100");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH02","965","466","60","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("103");
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

            obj = new Div("ccfCD_BONBU","staCD_BIZ_STAT01:3","530","406","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_16");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("112");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_FIELD","228","559","500","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("117");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_FIELD","staTY_BIZ02:3","559","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("116");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent06","1029","439","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("101");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent07","1029","465","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("104");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent08","189","177","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("37");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent09","827","177","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("41");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10","829","351","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("75");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_CLS","5","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("14");
            obj.set_text("공사분야");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta34","124","85","201","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNM_ENF01","643","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("20");
            obj.set_text("발주방식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_CLS","128","90","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("16");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_CLS_CONST","447","90","188","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("19");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT07","767","90","188","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("22");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CND_COLT","765","380","510","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("84");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD02","5","375","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("76");
            obj.set_text("국민주택채권");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CND_COLT00","128","380","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("78");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD03","331","375","103","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("79");
            obj.set_text("도시철도채권");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CND_COLT01","437","380","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("81");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staID_FILE_ATTCH","5","583","120","149",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("118");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta27_00","124","583","1158","149",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("divFile","118","579","1145","150",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("119");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_TAX_NA","219","176","50","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("121");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_text("영세");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_value("N");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00","271","177","368","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("122");
            obj.set_text("(영세율은 차수계약,변경계약,청구내역이 생성되면 변경 불가.)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00_00","339","206","78","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("123");
            obj.set_text("(세금계산서)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00_00_00","339","235","78","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("124");
            obj.set_text("(계산서)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00_00_01","977","207","78","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("125");
            obj.set_text("(세금계산서)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent10_00_00_00_00","977","235","78","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("126");
            obj.set_text("(계산서)");
            obj.set_color("#2c4bfb");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_SUPTXF","5","259","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("127");
            obj.set_text("계약 공급가(소계)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta20","124","259","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_SUPTXF_OUR","643","259","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("129");
            obj.set_text("당사 공급가(소계)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta24","762","259","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("132");
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

            obj = new MaskEdit("ctxtAM_SUPTXF_OUR","766","265","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
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

            obj = new Static("staTab1Title00","4","220",null,"22","6",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDS_RM_CONST","5","143","120","90",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            obj.set_text("공사개요");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
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
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta05","974","56","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","0",null,"22","19",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("6");
            obj.set_text("프로젝트 개요");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staCD_CV_GO","5","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("7");
            obj.set_text("공공/민간");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTY_ORD","5","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("8");
            obj.set_text("발주방식");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staCD_LOC","5","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("9");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta01","124","56","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta02","124","85","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
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

            obj = new Static("staCD_PRC_BID","430","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("14");
            obj.set_text("입찰추진");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_CONST","5","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("15");
            obj.set_text("관급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta09","124","114","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staAM_BIZ","430","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("17");
            obj.set_text("추정가격");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta10","549","56","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta12","549","114","733","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta03","124","143","1158","90",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTab1Title01","5","236",null,"22","49",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("21");
            obj.set_text("입찰정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTab1Title02","4","369",null,"22","20",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("22");
            obj.set_text("");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDT_BID_PUB","5","262","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_text("입찰공고일");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDT_PQ","5","291","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("24");
            obj.set_text("실적/PQ마감");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta16","124","262","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta17","124","291","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDS_BID_LIC","430","262","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("27");
            obj.set_text("입찰자격 면허");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDT_AGREE","5","320","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("28");
            obj.set_text("공동협정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta19","124","320","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDS_BID_CONST","430","291","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("30");
            obj.set_text("입찰자격 실적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta20","549","262","733","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta22","549","291","733","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDS_BID_CO","430","320","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("33");
            obj.set_text("입찰자격 공동도급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta24","549","320","733","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta25","124","349","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDT_SITE_EXPL","5","349","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("36");
            obj.set_text("현장설명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta27","124","552","1158","149",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staID_FILE_ATTCH","5","552","120","149",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("38");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDS_EXPL_AREA","430","349","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("39");
            obj.set_text("현설장소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta28","549","349","733","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staPercent16","1065","60","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("41");
            obj.set_text("개월");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDT_BID","430","378","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("42");
            obj.set_text("입찰일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06","549","378","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDS_SITE_EXPL","430","407","120","59",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("44");
            obj.set_text("의견");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta07","549","407","733","59",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDT_BID_WIN","5","436","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("46");
            obj.set_text("낙찰일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta08","124","436","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDT_SC_COMPL","5","465","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("48");
            obj.set_text("준공예정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta11","124","465","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staID_USER_EXPL","430","465","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("50");
            obj.set_text("현설의뢰자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta15","549","465","733","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta00","124","27","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Combo("ccboCD_LOC","129","90","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("53");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_LOC");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Div("divFile","124","554","1145","150",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("54");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_TERM","978","60","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("55");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BIZ","129","120","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("56");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM","554","119","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("57");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST","718","119","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("58");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new TextArea("txtDS_SITE_EXPL","554","411","723","51",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("59");
            obj.set_maxlength("1000");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RM_CONST","129","148","1148","80",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("60");
            obj.set_maxlength("1000");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_BID_LIC","554","267","723","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("61");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_BID_CONST","554","296","723","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("62");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_BID_CO","554","325","723","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("63");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_EXPL_AREA","554","354","723","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("64");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR2","688","90","584","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("65");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PQ","129","296","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("66");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_editformat("yyyyMMdd HH:mm");
            obj.set_autoselect("true");
            obj.set_value("20200101000000000");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_AGREE","129","325","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("67");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_editformat("yyyyMMdd HH:mm");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SITE_EXPL","129","354","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("68");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_editformat("yyyyMMdd HH:mm");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BID","554","383","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("69");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_editformat("yyyyMMdd HH:mm");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BID_WIN","129","441","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("70");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_editformat("yyyyMMdd HH:mm");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SC_COMPL","129","470","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("71");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BID_PUB","129","267","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("72");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_CV_GO","129","32","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("73");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT07","229","61","188","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("74");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT00","129","61","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("75");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_CLS","554","32","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("76");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_CLS_CONST","1062","32","188","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("77");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_CLS_CONST00","978","32","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("78");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PRC_BID","554","61","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("79");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT01","554","470","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("80");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT02","654","470","188","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("81");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT03","265","90","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("82");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_CHG_CONT04","365","90","319","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("83");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDT_BID00","855","378","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("84");
            obj.set_text("개찰일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06_00","974","378","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BID_OPEN","979","383","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("86");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_editformat("yyyyMMdd HH:mm");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta25_00","124","378","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDT_SITE_EXPL00","5","378","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("88");
            obj.set_text("입찰등록");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BID_REG","129","383","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("89");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_editformat("yyyyMMdd HH:mm");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staPercent16_00","852","119","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("90");
            obj.set_text("(VAT)");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staDT_BID01","5","407","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("91");
            obj.set_text("심의일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("sta06_01","124","407","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REVIEW","129","412","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("92");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_editformat("yyyyMMdd HH:mm");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_readonly("true");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab6",this.divData.form.tabData);
            obj.set_text("프로젝트 현설결과");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("sta03","124","75","1158","90",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new TextArea("txtDS_EXPL","129","80","1148","80",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("7");
            obj.set_maxlength("1000");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("sta06","124","251","1158","90",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("staDT_SITE_EXPL","5","17","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("0");
            obj.set_text("현장설명회 일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("sta02","124","17","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("staID_USER_EXPL","5","46","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("2");
            obj.set_text("현설참가자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("sta00","124","46","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("staDS_EXPL","5","75","120","90",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("6");
            obj.set_text("공사개요");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("staDS_INCU_CONST","5","164","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("9");
            obj.set_text("포함공사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("sta01","124","164","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("staDS_EXCP_CONST","5","193","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("12");
            obj.set_text("제외공사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("sta04","124","193","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("staDS_MAT_PAY","5","222","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("15");
            obj.set_text("지급자재");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("sta05","124","222","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("staDS_RM_SP","5","251","120","90",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("18");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RM_SP","129","256","1148","80",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("19");
            obj.set_maxlength("1000");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("staID_FILE_ATTCH","5","340","120","149",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("21");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("sta27","124","340","1158","149",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Edit("ctxtID_USER_EXPL","129","51","111","20",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_USER_EXPL","244","51","183","20",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_INCU_CONST","129","169","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_EXCP_CONST","129","198","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_MAT_PAY","129","227","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("16");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Div("divFile","119","334","1145","150",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("22");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SITE_EXPL","129","22","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_editformat("yyyyMMdd HH:mm");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_readonly("true");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Tabpage("tab7",this.divData.form.tabData);
            obj.set_text("프로젝트 입찰결과");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("sta00","124","17","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staAM_DESIGN","430","17","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("1");
            obj.set_text("설계금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta18","549","17","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staTY_BID_RLT","855","17","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("3");
            obj.set_text("입찰결과");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta04","974","17","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staDT_FIX","5","46","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("5");
            obj.set_text("수주확정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta01","124","46","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staAM_FIX_SUP","430","46","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("7");
            obj.set_text("수주확정 공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta02","549","46","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staAM_FIX_VAT","855","46","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("9");
            obj.set_text("수주확정 부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta03","974","46","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staAM_ESTM_CAL","5","75","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("11");
            obj.set_text("예정가격");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta05","124","75","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staCD_CLS01","430","75","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("13");
            obj.set_text("예정가격 공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta06","549","75","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staCD_CLS_CONST01","855","75","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("15");
            obj.set_text("예정가격 부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta07","974","75","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staAM_BID_CAL","5","104","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("17");
            obj.set_text("낙찰가격");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta08","124","104","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staAM_BID_SUP","430","104","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("19");
            obj.set_text("낙찰가격 공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta09","549","104","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staAM_BID_VAT","855","104","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("21");
            obj.set_text("낙찰가격 부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta10","974","104","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staNO_BID_CO","5","133","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("23");
            obj.set_text("입찰참여사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta11","124","133","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staNO_FCT","430","133","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("25");
            obj.set_text("난이도계수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta12","549","133","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staTY_ENTY","855","133","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("27");
            obj.set_text("참가방법");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta13","974","133","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staAM_ESTM","5","162","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("29");
            obj.set_text("추정가격");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta14","124","162","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staRT_BID","713","191","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("31");
            obj.set_text("낙찰사 투찰율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta15","832","191","166","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staAM_INIT","5","191","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("33");
            obj.set_text("기초금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta17","124","191","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staRT_INIT","430","191","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("35");
            obj.set_text("기초금액 사정율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta19","549","191","165","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staRT_SC","997","191","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("37");
            obj.set_text("추첨예가 사정율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta20","1116","191","166","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staAM_BID_OUR","5","220","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("39");
            obj.set_text("당사투찰가격");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta21","124","220","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staRT_BID_OUR","430","220","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("41");
            obj.set_text("당사투찰율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta22","549","220","733","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staDS_OPNI","5","249","120","90",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("43");
            obj.set_text("의견");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta24","124","249","1158","90",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","349","100","22",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("45");
            obj.set_text("투찰사 목록");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staTab1Title00","652","349","140","22",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("46");
            obj.set_text("낙찰 공동도급사");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta16","274","138","41","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("47");
            obj.set_text("(개사)");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta23","639","196","41","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("48");
            obj.set_text("%");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta25","639","225","41","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("49");
            obj.set_text("%");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta26","922","196","41","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("50");
            obj.set_text("%");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta27","1206","196","41","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("51");
            obj.set_text("%");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staDT_BID_RECOG","5","17","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("52");
            obj.set_text("수주인식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DESIGN","554","22","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("53");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDT_FIX","129","51","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("54");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("####-##-##");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_FIX_SUP","554","51","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("55");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_FIX_VAT","979","51","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("56");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM_SUP","554","80","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("57");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BID_SUP","554","109","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("58");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM_CAL","129","80","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("59");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BID_CAL","129","109","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("60");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM_VAT","979","80","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("61");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BID_VAT","979","109","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("62");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM","129","167","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("63");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_INIT","129","196","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("64");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BID_OUR","129","225","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("65");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_FCT","554","138","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("66");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#.###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext("0");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_INIT","554","196","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("67");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#.###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_BID","837","196","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("68");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#.###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_SC","1121","196","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("69");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#.###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_BID_OUR","554","225","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("70");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#.###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_BID_CO","129","138","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("71");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext(" ");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDT_BID_RECOG","129","22","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("72");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("####-##-##");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_limitbymask("none");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new TextArea("txtDS_OPNI","129","254","1148","80",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("73");
            obj.set_maxlength("1000");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Grid("objGrdtab4_1","5","378","630","170",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("74");
            obj._setContents("");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Grid("objGrdtab4_2","652","378","630","170",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("75");
            obj._setContents("");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Div("divFile","5","549","1277","150",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("76");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_BID_RLT","979","22","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("77");
            obj.set_readonly("true");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_ENTY","979","138","140","20",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("78");
            obj.set_readonly("true");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("프로젝트 설계심의,공동도급사,관계사");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTab2Title1","5","0",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            obj.set_text("설계심의");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_visible("true");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGrdtab5","5","319",null,"160","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Static("staTab2Title00","5","291",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("2");
            obj.set_text("공동도급");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_visible("true");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGrdtab6","5","515",null,"160","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("3");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Static("staTab2Title01","5","485",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("4");
            obj.set_text("관계사");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_visible("true");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGrdtab4","5","123",null,"160","19",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("5");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Static("sta03","124","27","1158","90",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Static("staDS_RM_OP","5","27","120","90",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("6");
            obj.set_text("의견");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RM_OP","129","32","1148","80",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("7");
            obj.set_maxlength("1000");
            obj.set_enable("true");
            obj.set_readonly("true");
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

            obj = new BindItem("item30","divData.form.tabData.tab1.form.ctxtNM_CHG_CONT07","value","dsProjInfo","DS_ORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab1.form.ctxtCD_CLS_CONST","value","dsProjInfo","DS_CLS_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab1.form.ctxtCD_CLS","value","dsProjInfo","DS_CLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab1.form.ctxtCD_CV_GO","value","dsProjInfo","DS_CV_GO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab1.form.ctxtDS_CND_COLT00","value","dsBase","DS_NH_BOND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.tabData.tab1.form.ctxtDS_CND_COLT01","value","dsBase","DS_UR_BOND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab4.form.ccboCD_LOC","value","dsProjInfo","CD_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.tabData.tab4.form.ctxtNO_TERM","value","dsProjInfo","NO_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divData.form.tabData.tab4.form.ctxtAM_BIZ","value","dsProjInfo","AM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divData.form.tabData.tab4.form.ctxtAM_ESTM","value","dsProjInfo","AM_ESTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divData.form.tabData.tab4.form.ctxtAM_CONST","value","dsProjInfo","AM_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divData.form.tabData.tab4.form.txtDS_SITE_EXPL","value","dsProjInfo","DS_SITE_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divData.form.tabData.tab4.form.txtDS_RM_CONST","value","dsProjInfo","DS_RM_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divData.form.tabData.tab4.form.ctxtDS_BID_LIC","value","dsProjInfo","DS_BID_LIC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divData.form.tabData.tab4.form.ctxtDS_BID_CONST","value","dsProjInfo","DS_BID_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divData.form.tabData.tab4.form.ctxtDS_BID_CO","value","dsProjInfo","DS_BID_CO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divData.form.tabData.tab4.form.ctxtDS_EXPL_AREA","value","dsProjInfo","DS_EXPL_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","divData.form.tabData.tab4.form.ctxtDS_ADDR2","value","dsProjInfo","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","divData.form.tabData.tab4.form.ctclDT_PQ","value","dsProjInfo","FM_PQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","divData.form.tabData.tab4.form.ctclDT_AGREE","value","dsProjInfo","FM_AGREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","divData.form.tabData.tab4.form.ctclDT_SITE_EXPL","value","dsProjInfo","FM_SITE_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divData.form.tabData.tab4.form.ctclDT_BID","value","dsProjInfo","FM_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","divData.form.tabData.tab4.form.ctclDT_BID_WIN","value","dsProjInfo","FM_BID_WIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","divData.form.tabData.tab4.form.ctclDT_SC_COMPL","value","dsProjInfo","DT_SC_COMPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","divData.form.tabData.tab4.form.ctclDT_BID_PUB","value","dsProjInfo","DT_BID_PUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.tabData.tab4.form.ctxtCD_CV_GO","value","dsProjInfo","DS_CV_GO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab4.form.ctxtNM_CHG_CONT07","value","dsProjInfo","DS_ORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.tabData.tab4.form.ctxtNM_CHG_CONT00","value","dsProjInfo","TY_ORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.tabData.tab4.form.ctxtCD_CLS","value","dsProjInfo","DS_CLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.tabData.tab4.form.ctxtCD_CLS_CONST","value","dsProjInfo","DS_CLS_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.tabData.tab4.form.ctxtCD_CLS_CONST00","value","dsProjInfo","CD_CLS_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.tabData.tab4.form.ctxtDS_PRC_BID","value","dsProjInfo","DS_PRC_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.tabData.tab4.form.ctxtNM_CHG_CONT01","value","dsProjInfo","ID_USER_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.tabData.tab4.form.ctxtNM_CHG_CONT02","value","dsProjInfo","DS_USER_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.tabData.tab4.form.ctxtNM_CHG_CONT03","value","dsProjInfo","CD_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.tabData.tab4.form.ctxtNM_CHG_CONT04","value","dsProjInfo","DS_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.tabData.tab6.form.ctxtID_USER_EXPL","value","dsDetail1","ID_USER_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.tabData.tab6.form.ctxtDS_USER_EXPL","value","dsDetail1","DS_USER_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.tabData.tab6.form.txtDS_EXPL","value","dsDetail1","DS_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.tabData.tab6.form.ctxtDS_INCU_CONST","value","dsDetail1","DS_INCU_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.tabData.tab6.form.ctxtDS_EXCP_CONST","value","dsDetail1","DS_EXCP_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divData.form.tabData.tab6.form.ctxtDS_MAT_PAY","value","dsDetail1","DS_MAT_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.tabData.tab6.form.txtDS_RM_SP","value","dsDetail1","DS_RM_SP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divData.form.tabData.tab7.form.ctxtAM_DESIGN","value","dsDetail2","AM_DESIGN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.tabData.tab7.form.ctxtDT_FIX","value","dsDetail2","DT_FIX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divData.form.tabData.tab7.form.ctxtAM_FIX_SUP","value","dsDetail2","AM_FIX_SUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","divData.form.tabData.tab7.form.ctxtAM_FIX_VAT","value","dsDetail2","AM_FIX_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","divData.form.tabData.tab7.form.ctxtAM_ESTM_SUP","value","dsDetail2","AM_ESTM_SUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","divData.form.tabData.tab7.form.ctxtAM_BID_SUP","value","dsDetail2","AM_BID_SUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","divData.form.tabData.tab7.form.ctxtAM_ESTM_CAL","value","dsDetail2","AM_ESTM_CAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","divData.form.tabData.tab7.form.ctxtAM_BID_CAL","value","dsDetail2","AM_BID_CAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","divData.form.tabData.tab7.form.ctxtAM_ESTM_VAT","value","dsDetail2","AM_ESTM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","divData.form.tabData.tab7.form.ctxtAM_BID_VAT","value","dsDetail2","AM_BID_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","divData.form.tabData.tab4.form.ctxtAM_ESTM_SUP","value","dsDetail2","AM_ESTM_SUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","divData.form.tabData.tab4.form.ctxtAM_ESTM_VAT","value","dsDetail2","AM_ESTM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","divData.form.tabData.tab7.form.ctxtAM_ESTM","value","dsDetail2","AM_ESTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","divData.form.tabData.tab4.form.ctxtAM_ESTM_CAL","value","dsDetail2","AM_ESTM_CAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","divData.form.tabData.tab7.form.ctxtAM_INIT","value","dsDetail2","AM_INIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","divData.form.tabData.tab7.form.ctxtAM_BID_OUR","value","dsDetail2","AM_BID_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","divData.form.tabData.tab7.form.ctxtNO_FCT","value","dsDetail2","NO_FCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","divData.form.tabData.tab7.form.ctxtRT_INIT","value","dsDetail2","RT_INIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","divData.form.tabData.tab4.form.ctxtRT_BID_OUR","value","dsDetail2","RT_BID_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","divData.form.tabData.tab7.form.ctxtRT_BID","value","dsDetail2","RT_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","divData.form.tabData.tab7.form.ctxtRT_SC","value","dsDetail2","RT_SC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item118","divData.form.tabData.tab7.form.ctxtRT_BID_OUR","value","dsDetail2","RT_BID_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item119","divData.form.tabData.tab7.form.ctxtNO_BID_CO","value","dsDetail2","NO_BID_CO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item120","divData.form.tabData.tab7.form.ctxtDT_BID_RECOG","value","dsDetail2","DT_BID_RECOG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item121","divData.form.tabData.tab7.form.txtDS_OPNI","value","dsDetail2","DS_OPNI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","divData.form.tabData.tab7.form.ctxtTY_BID_RLT","value","dsDetail2","DS_BID_RLT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","divData.form.tabData.tab7.form.ctxtTY_ENTY","value","dsDetail2","DS_ENTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item124","divData.form.tabData.tab5.form.txtDS_RM_OP","value","dsProjInfo","DS_RM_OP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divData.form.tabData.tab4.form.ctclDT_BID_OPEN","value","dsProjInfo","FM_BID_OPEN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divData.form.tabData.tab4.form.ctclDT_BID_REG","value","dsProjInfo","FM_BID_REG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divData.form.tabData.tab4.form.ctclDT_REVIEW","value","dsProjInfo","FM_REVIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item125","divData.form.tabData.tab1.form.cchkYN_Pre00","value","dsBase","YN_MAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item126","divData.form.tabData.tab6.form.ctclDT_SITE_EXPL","value","dsProjInfo","FM_SITE_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.tabData.tab1.form.chkYN_TAX_NA","value","dsBase","YN_TAX_NA");
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
        this.registerScript("DOD_CIVL_CONT.xfdl", function() {
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
        // 	this.FormBtns.Excel.set_enable(false);
        // 	this.FormBtns.Print.set_enable(false);

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


        	this.ccfDS_REGION.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";        //우편번호
        	this.ccfCD_BONBU.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";      //검토상태

        	//공동도급사
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrdtab2;
        	//관계사
        	this.dxGrid3 = this.divData.form.tabData.tab3.form.objGrdtab3;

        	//투찰사 목록
        	this.dxGrid7 = this.divData.form.tabData.tab7.form.objGrdtab4_1;
        	//낙찰 공동도급사 목록
        	this.dxGrid8 = this.divData.form.tabData.tab7.form.objGrdtab4_2;

        	//프로젝트 설계심의
        	this.dxGrid4 = this.divData.form.tabData.tab5.form.objGrdtab4;
        	//프로젝트 공동도급사
        	this.dxGrid5 = this.divData.form.tabData.tab5.form.objGrdtab5;
        	//프로젝트 관계사
        	this.dxGrid6 = this.divData.form.tabData.tab5.form.objGrdtab6;

        	this.dxGrid7.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid8.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.serverTime = "";
        	this.gfnGetServerTime("serverTime");

        	this.serverTimeStr = this.gfnGetDigit(this.serverTime.substring(0, 10));
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	dsUserParam.setColumn(nrow, "CD_CORP", "");
        	dsUserParam.setColumn(nrow, "CD_SITE", "");
        	dsUserParam.setColumn(nrow, "TY_VENDOR", "CIVL");
        	return true;
         }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DO", "DOD_ARCH_CONT_CO_CONTRCT");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DO", "DOD_ARCH_CONT_CONCERN");

        	this.gfnGridInit(this.dxGrid7, this.dsList7, "DO", "DOA_CO_BID");
        	this.gfnGridInit(this.dxGrid8, this.dsList8, "DO", "DOA_CO_CONTRCT_BID");

        	this.gfnGridInit(this.dxGrid4, this.dsList4, "DO", "DOA_CIVL_PROJ_DSN_CONSOR");
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
        		inData      = "selectProjInfo=dsSelect";
        		outData     = "dsProjInfo=selectProjInfo0";
        	} else if(tIdx == 4){
        		inData      = "select5=dsSelect";
        		outData     = "dsDetail1=select50";
        	} else if(tIdx == 5){

        		this.dsSelect3 = new Dataset();

        		this.dsSelect3.addColumn("CD_PROJ", "string");
        		this.dsSelect3.addColumn("YN_READ", "string");

        		this.dsSelect3.addRow();

        		this.dsSelect3.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        		this.dsSelect3.setColumn(0, "YN_READ", "Y");

        		inData      = "select6=dsSelect select7=dsSelect3 select8=dsSelect3";
        		outData     = "dsDetail2=select60 dsList7=select70 dsList8=select80";

        	} else if(tIdx == 6){
        		inData      = "selectProjInfo=dsSelect select9=dsSelect select4=dsSelect";
        		outData     = "dsProjInfo=selectProjInfo0 dsList4=select90 dsList5=select41 dsList6=select42";
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
        		} else if(svcID == "select3"){
        				this.divData.form.tabData.tab4.form.divFile.form.set_enable(true);
        				// 첨부파일
        				//var cd_site = this.ccfCD_SITE.form.CDTextBox.value;
        				var fileManager = {};
        				fileManager.CD_GUBUN = "DOC1";
        				fileManager.CD_DIR = [ this.dsProjInfo.getColumn(0, "CD_PROJ") ];
        				fileManager.CD_REF1 = this.dsProjInfo.getColumn(0, "CD_PROJ");
        				fileManager.IS_READONLY = true;
        				// div FileManager 셋팅
        				this.divData.form.tabData.tab4.form.divFile.form.setFileManager(fileManager);
        		} else if(svcID == "select4"){
        				this.divData.form.tabData.tab6.form.divFile.form.set_enable(true);
        				// 첨부파일
        				//var cd_site = this.ccfCD_SITE.form.CDTextBox.value;
        				var fileManager = {};
        				fileManager.CD_GUBUN = "DOC2";
        				fileManager.CD_DIR = [ this.dsProjInfo.getColumn(0, "CD_PROJ") ];
        				fileManager.CD_REF1 = this.dsProjInfo.getColumn(0, "CD_PROJ");
        				fileManager.IS_READONLY = true;
        				// div FileManager 셋팅
        				this.divData.form.tabData.tab6.form.divFile.form.setFileManager(fileManager);
        		} else if(svcID == "select5"){
        			if(this.dsDetail2.rowcount > 0){

        				// 예정가격 계산.
        				var AM_ESTM_SUP = this.dsDetail2.getColumn(0, "AM_ESTM_SUP");
        				var AM_ESTM_VAT = this.dsDetail2.getColumn(0, "AM_ESTM_VAT");
        				// 낙찰가격 계산.
        				var AM_BID_SUP = this.dsDetail2.getColumn(0, "AM_BID_SUP");
        				var AM_BID_VAT = this.dsDetail2.getColumn(0, "AM_BID_VAT");

        				this.dsDetail2.setColumn(0, "AM_ESTM_CAL", AM_ESTM_SUP + AM_ESTM_VAT);
        				this.dsDetail2.setColumn(0, "AM_BID_CAL", AM_BID_SUP + AM_BID_VAT);

        				this.divData.form.tabData.tab7.form.divFile.form.set_enable(true);
        				// 첨부파일
        				//var cd_site = this.ccfCD_SITE.form.CDTextBox.value;
        				var fileManager = {};
        				fileManager.CD_GUBUN = "DOC3";
        				fileManager.CD_DIR = [ this.dsProjInfo.getColumn(0, "CD_PROJ") ];
        				fileManager.CD_REF1 = this.dsProjInfo.getColumn(0, "CD_PROJ");
        				fileManager.IS_READONLY = true;
        				// div FileManager 셋팅
        				this.divData.form.tabData.tab7.form.divFile.form.setFileManager(fileManager);
        			}

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
        				_vat = obj.getColumn(0, "AM_VAT");
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
        				_vat = obj.getColumn(0, "AM_VAT");
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
        			_vat = nexacro.round(_sup * 0.1);
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
            this.dsBase.addEventHandler("onvaluechanged",this.dsBase_onvaluechanged,this);
        };
        this.loadIncludeScript("DOD_CIVL_CONT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
