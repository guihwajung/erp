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
            this.set_titletext("주택-프로젝트관리");
            this.set_scrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(1304,820);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOAPR_ARCH_PROJ_MERGE</Col></Row><Row><Col id=\"TARGET\">select0</Col><Col id=\"SP\">DOAPR_ARCH_PROJ_SELECT</Col></Row><Row><Col id=\"TARGET\">save1</Col><Col id=\"SP\">DOAPR_ARCH_PROJ_DELETE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DOAPR_SOC_PROJ_ANALISYS_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DOAPR_SOC_PROJ_AGREE_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DOAPR_ARCH_PROV_CONT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DOAPR_ARCH_CO_CONTRCT</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DOAPR_ARCH_CONCERN</Col></Row><Row><Col id=\"TARGET\">select6</Col><Col id=\"SP\">DOAPR_ARCH_CHARGE</Col></Row><Row><Col id=\"TARGET\">selectCharge</Col><Col id=\"SP\">DOAPR_PROJ_YNCHARGE_SELECT</Col></Row><Row><Col id=\"TARGET\">updateHqCreate</Col><Col id=\"SP\">DOZPR_HQ_CODE_CREATE</Col></Row><Row><Col id=\"TARGET\">select6_auth</Col><Col id=\"SP\">DOAPR_PROJ_AUTH</Col></Row><Row><Col id=\"TARGET\">delete3</Col><Col id=\"SP\">DOAPR_SOC_PROJ_AGREE_DELETE</Col></Row><Row><Col id=\"TARGET\">delete1</Col><Col id=\"SP\">DOAPR_SOC_PROJ_ANALISYS_DELETE</Col></Row><Row><Col id=\"TARGET\">select7</Col><Col id=\"SP\">DOAPR_SOC_PROJ_JV_SELECT</Col></Row><Row><Col id=\"TARGET\">select9</Col><Col id=\"SP\">DOAPR_SOC_PROJ_AGREE_LOAN_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select10</Col><Col id=\"SP\">DOAPR_SOC_PROJ_AGREE_ASSU_LIST_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ACQ1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ENF", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_PERMIT_STAT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LAND_STAT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBase", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BIZ_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BIZ_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIZ_MHOD\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIZ_MHOD\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PRDCT\" type=\"STRING\" size=\"256\"/><Column id=\"NM_PRDCT\" type=\"STRING\" size=\"256\"/><Column id=\"NM_PROV\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ACQ\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ENF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ENF\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ENF_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LAND_CLS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LOCAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CITY_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PUB_NOTICE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_USE_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ROAD_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONT_LIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_AREA_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND_OVR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND_OVR_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND_UNDR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND_UNDR_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_LAND_OVR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_ARCH_TOP\" type=\"INT\" size=\"256\"/><Column id=\"NO_ARCH_BOTTM\" type=\"INT\" size=\"256\"/><Column id=\"NO_ARCH_UNDR\" type=\"INT\" size=\"256\"/><Column id=\"SZ_ARCH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_ARCH_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_ARCH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_SHOP_TOP\" type=\"INT\" size=\"256\"/><Column id=\"SZ_SHOP_BOTTM\" type=\"INT\" size=\"256\"/><Column id=\"SZ_SHOP_UNDR\" type=\"INT\" size=\"256\"/><Column id=\"SZ_SHOP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_SHOP_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_SHOP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BIZ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_LAND_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PERMIT_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_COST_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FILE_ATTCH\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NO_CHG_CONT\" type=\"INT\" size=\"256\"/><Column id=\"OUT_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CLS\" type=\"STRING\" size=\"256\"/><Column id=\"AM_OCAPITAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BCAPITAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_AMBIGO\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OCAPITAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_BCAPITAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_ETC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_RTBIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SCALE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FI\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AI\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SZ_AREA\">0</Col><Col id=\"SZ_AREA_M\">0</Col><Col id=\"SZ_LAND_OVR\">0</Col><Col id=\"SZ_LAND_OVR_M\">0</Col><Col id=\"SZ_LAND_UNDR\">0</Col><Col id=\"SZ_LAND_UNDR_M\">0</Col><Col id=\"SZ_LAND\">0</Col><Col id=\"SZ_LAND_M\">0</Col><Col id=\"RT_LAND_OVR\">0</Col><Col id=\"SZ_ARCH\">0</Col><Col id=\"SZ_ARCH_M\">0</Col><Col id=\"RT_ARCH\">0</Col><Col id=\"SZ_SHOP_TOP\">0</Col><Col id=\"SZ_SHOP_BOTTM\">0</Col><Col id=\"SZ_SHOP_UNDR\">0</Col><Col id=\"SZ_SHOP\">0</Col><Col id=\"SZ_SHOP_M\">0</Col><Col id=\"RT_SHOP\">0</Col><Col id=\"AM_BIZ\">0</Col><Col id=\"AM_CONST\">0</Col><Col id=\"AM_LAND\">0</Col><Col id=\"AM_AREA\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LOC", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsBaseRst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRcvYNCharge", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"YN_EXISTS\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_SAUP", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"YN_EXISTS\" type=\"STRING\" size=\"30\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">관리</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미관리</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList5_Auth", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_CD_CLS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDelTab", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DT_STD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONSOR\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList6", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList7", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList8", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList9", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList10", this);
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

            obj = new Static("staCD_PROJ","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
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
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCD_SAUP",null,"staCD_PROJ:10.0","68","24.0","213",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00",null,"10.0","92.0","24.0","edtCD_SAUP:3",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사업비프로젝트코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_SAUP",null,"staCD_PROJ:10.0","200","24.0","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
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

            obj = new Div("div00","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("147");
            obj.set_text("div00");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","0",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트 개요");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ_STAT","5","55","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("검토상태");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ","5","84","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("사업유형");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD","5","113","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("15");
            obj.set_text("사업방식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00","124","55","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta01","124","84","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta02","124","113","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staNM_PROV","643","55","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("정보제공자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta18","762","55","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staNM_ENF","643","84","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("11");
            obj.set_text("사업시행사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_ENF_DEPT","643","113","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("18");
            obj.set_text("사업시행담당부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfCD_BIZ_STAT","130","60","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_06");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfTY_BIZ","130","89","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_03");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_PROV","768","60","309","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("6");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfTY_BIZ_MHOD","130","118","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_04");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT","5","142","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("21");
            obj.set_text("상품분류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta09","124","142","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ","643","142","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("24");
            obj.set_text("정보입수일자");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfTY_PRDCT","130","147","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_41");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("23");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Combo("ccboTY_ACQ1","1088","60","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_ACQ1");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta10","762","84","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_ENF","768","89","309","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("13");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Combo("ccboTY_ENF","1088","89","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("14");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_ENF");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta11","762","113","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ENF_DEPT","768","118","509","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("20");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta12","762","142","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ","768","144","110","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta03","124","171","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_LOC","5","171","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("30");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS","5","200","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("35");
            obj.set_text("지목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_ACC","5","229","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("41");
            obj.set_text("접근성");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta04","124","200","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta05","124","201","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_LOCAL","643","200","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("38");
            obj.set_text("지역지구");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_CITY_PLAN","643","229","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("44");
            obj.set_text("도시계획");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_PUB_NOTICE","5","258","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("101");
            obj.set_text("공시지가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta06","124","258","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_USE_STAT","643","258","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("49");
            obj.set_text("이용상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta07","762","200","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LOCAL","768","205","509","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("40");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta08","762","229","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CITY_PLAN","768","234","509","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("46");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta13","762","258","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT","5","287","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("52");
            obj.set_text("도로현황");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta14","124","287","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_CONT_LIMIT","643","287","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("55");
            obj.set_text("건축제한");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta15","762","287","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ROAD_STAT","130","292","509","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("54");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CONT_LIMIT","768","292","509","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("57");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_USE_STAT","768","263","509","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("51");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staTab1Title01","5","320",null,"22","35",null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("58");
            obj.set_text("건축 개요");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ACC","130","234","509","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("43");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS","130","206","509","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("37");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PUB_NOTICE","130","263","509","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("48");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ01","5","408","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_text("건축면적");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_BIZ","5","437","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("99");
            obj.set_text("사업비(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta16","124","408","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta17","124","437","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("121");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staAR_SITE01","643","408","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("86");
            obj.set_text("상가면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_LAND","643","437","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("106");
            obj.set_text("토지비(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta19","762","437","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_CONST","323","437","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("103");
            obj.set_text("공사비(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta20","762","408","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta22","442","437","202","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staAM_AREA","961","437","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("109");
            obj.set_text("평단가금액(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta24","1080","437","202","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta25","124","466","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_LAND_STAT","5","466","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("112");
            obj.set_text("토지작업현황");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta26","124","495","1158","39",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staDS_RM","5","495","120","39",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("118");
            obj.set_text("사업조건/규모");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_PERMIT_STAT","643","466","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("115");
            obj.set_text("인허가상황");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta28","762","466","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RM","130","500","1145","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("120");
            obj.set_maxlength("1000");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Combo("ccboCD_PERMIT_STAT","768","471","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("117");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_PERMIT_STAT");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_ARCH_TOP","1100","374","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("76");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_ARCH_BOTTM","1262","374","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("77");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_ARCH_UNDR","1433","374","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("78");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_ARCH","348","413","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("81");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_ARCH_M","185","413","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("79");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ARCH","518","413","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("84");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_TOP","1740","374","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("88");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP","986","413","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("94");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_BOTTM","1901","374","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("89");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_M","825","413","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("92");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_SHOP","1156","413","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("97");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_UNDR","2071","374","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("90");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Combo("ccboCD_LAND_STAT","130","471","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("114");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_LAND_STAT");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BIZ","130","442","189","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("102");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND","staAM_LAND:5","442","189","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("108");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST","448","442","189","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("105");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_AREA","staAM_AREA:3","442","193","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("111");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfDS_REGION","229","176","406","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("33");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Combo("ccboCD_LOC","130","176","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("32");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_LOC");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR2","642","176","634","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("34");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent03","280","414","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("80");
            obj.set_text("m²");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent04","610","414","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("85");
            obj.set_text("%");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent05","441","414","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("82");
            obj.set_text("평");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent07","469","414","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("83");
            obj.set_text("건폐율");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent09","776","414","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("91");
            obj.set_text("연면적");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent11","1080","414","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("95");
            obj.set_text("평");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent12","918","414","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("93");
            obj.set_text("m²");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent14","1106","414","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("96");
            obj.set_text("건폐율");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent15","1248","414","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("98");
            obj.set_text("%");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_LAND_STAT00","5","350","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("59");
            obj.set_text("대지면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta21","124","350","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_PERMIT_STAT00","5","379","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("65");
            obj.set_text("지상연면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta23","124","379","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_ARCH00","348","355","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("63");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent16","441","357","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("64");
            obj.set_text("평");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_ARCH_M00","185","355","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("61");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent17","280","357","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("62");
            obj.set_text("m²");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP00","348","384","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("69");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent18","441","386","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("70");
            obj.set_text("평");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_M00","185","384","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("67");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent19","280","386","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("68");
            obj.set_text("m²");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent20","468","384","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("71");
            obj.set_text("용적율");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_SHOP00","518","384","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("72");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent21","610","386","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("73");
            obj.set_text("%");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ00","961","142","123","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("27");
            obj.set_text("시공사선정일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta29","1082","142","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_COST_SEL","1088","144","110","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_PERMIT_STAT00_00","643","350","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("122");
            obj.set_text("전체연면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta23_00","762","350","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP00_00","986","355","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("124");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent18_00","1080","357","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("125");
            obj.set_text("평");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_M00_00","825","355","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("126");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent19_00","918","352","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("127");
            obj.set_text("m²");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_PERMIT_STAT00_00_00","643","379","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("128");
            obj.set_text("지하연면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta23_00_00","762","379","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP00_00_00","986","384","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("130");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent18_00_00","1080","386","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("131");
            obj.set_text("평");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_M00_00_00","825","384","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("132");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.0000");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staPercent19_00_00","918","386","20","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("133");
            obj.set_text("m²");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","5","26","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("134");
            obj.set_text("법인코드");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_1","124","26","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","129","31","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.set_taborder("100");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_2","549","26","214","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Combo("ccboYN_SAUP","704","31","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("138");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_SAUP");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_SAUP","835","26","123","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("139");
            obj.set_text("사업관리부서");
            obj.set_textAlign("left");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_3","954","26","328","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Div("ccfCD_SAUP","959","31","318","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.getSetter("CodeFindName").set("DOS_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("141");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staYN_SAUP","710","-3","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("136");
            obj.set_text("사업관리여부");
            obj.set_textAlign("left");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("staCD_CLS","430","26","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("142");
            obj.set_text("공사분야");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Combo("ccboCD_CLS","554","31","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("143");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsDS_CD_CLS");
            obj.set_index("-1");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Div("div01","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_SAUP","835","26","123","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("56");
            obj.set_text("사업관리부서");
            obj.set_textAlign("left");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00_00_00_00_00_01_00_00","720","324","562","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00_00_00_00_00_01_00","720","295","562","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00","244","324","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00_00","363","295","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta26_00","124","361","1158","40",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","0",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트 개요");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ_STAT","5","55","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("검토상태");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ","5","84","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("8");
            obj.set_text("사업유형");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD","5","113","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("15");
            obj.set_text("사업방식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta00","124","55","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta01","124","84","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta02","124","113","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staNM_PROV","643","55","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("4");
            obj.set_text("정보제공자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta18","762","55","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staNM_ENF","643","84","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("11");
            obj.set_text("사업시행사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_ENF_DEPT","643","113","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("18");
            obj.set_text("사업시행담당부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Div("ccfCD_BIZ_STAT","130","60","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_06");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Div("ccfTY_BIZ","130","89","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_03");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_PROV","768","60","309","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("6");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Div("ccfTY_BIZ_MHOD","130","118","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_04");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT","5","142","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("21");
            obj.set_text("상품분류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta09","124","142","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ","643","142","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("24");
            obj.set_text("정보입수일자");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Div("ccfTY_PRDCT","130","147","505","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_41");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("23");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Combo("ccboTY_ACQ1","1088","60","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_ACQ1");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta10","762","84","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_ENF","768","89","309","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("13");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Combo("ccboTY_ENF","1088","89","190","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("14");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_ENF");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta11","762","113","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ENF_DEPT","768","118","509","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("20");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta12","762","142","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ","768","144","110","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta03","124","171","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staCD_LOC","5","171","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("30");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS","5","200","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("35");
            obj.set_text("지목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta04","124","200","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta05","124","201","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_LOCAL","643","200","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("38");
            obj.set_text("지역지구");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta07","762","200","520","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LOCAL","768","205","509","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("40");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT","5","266","240","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("42");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LAND_CLS","130","206","509","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("37");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta26","124","439","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_FI","5","439","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("48");
            obj.set_text("금융자문사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new TextArea("txtDS_FI","130","443","250","22",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("50");
            obj.set_maxlength("1000");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_ARCH_UNDR","1433","374","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_TOP","1740","374","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("44");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_BOTTM","1901","374","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("45");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_SHOP_UNDR","2071","374","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("46");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Div("ccfDS_REGION","229","176","406","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("33");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Combo("ccboCD_LOC","130","176","96","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("32");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_LOC");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR2","642","176","634","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("34");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ00","961","142","123","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("27");
            obj.set_text("시공사선정일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta29","1082","142","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_COST_SEL","1088","144","110","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","5","26","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("51");
            obj.set_text("법인코드");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta00_1","124","26","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","129","31","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.set_taborder("47");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta00_2","549","26","214","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Combo("ccboYN_SAUP","704","31","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("55");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_SAUP");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta00_3","954","26","328","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Div("ccfCD_SAUP","959","31","318","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.getSetter("CodeFindName").set("DOS_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("58");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("true");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staYN_SAUP","710","-3","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("53");
            obj.set_text("사업관리여부");
            obj.set_textAlign("left");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staCD_CLS","430","26","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("59");
            obj.set_text("공사분야");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Combo("ccboCD_CLS","554","31","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("60");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsDS_CD_CLS");
            obj.set_index("-1");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00","124","229","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BIZ1","130","234","189","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("62");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staAM_BIZ1","5","229","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("63");
            obj.set_text("사업비(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staAM_CONST1","323","229","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("64");
            obj.set_text("공사비(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta22_00","442","229","202","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST1","448","234","189","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("66");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staAM_LAND1","643","229","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("67");
            obj.set_text("토지비(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta19_00","762","229","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND1","768","234","189","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("69");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staAM_AREA1","961","229","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("70");
            obj.set_text("평단가금액(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta24_00","1080","229","202","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_AREA1","1084","234","193","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("72");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT00","244","266","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("73");
            obj.set_text("자기자본");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT00_00","363","266","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("74");
            obj.set_text("타인자본");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT00_00_00","482","266","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("75");
            obj.set_text("기타(분양금 등)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staAM_TOT","601","266","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("76");
            obj.set_text("계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT00_00_00_00_00","720","266","562","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("77");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staMoneyState","5","295","120","59",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("78");
            obj.set_text("자금조달");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staAM_OCAPITAL","124","295","121","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("79");
            obj.set_text("금액(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staRT_OCAPITAL","124","324","121","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("80");
            obj.set_text("비율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_SCALE","5","361","120","40",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("81");
            obj.set_text("사업규모");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new TextArea("txtDS_SCALE","130","365","1145","32",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("82");
            obj.set_maxlength("1000");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00","244","295","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_OCAPITAL","250","300","109","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("85");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_OCAPITAL","250","329","109","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("86");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0.00");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BCAPITAL","369","300","109","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("88");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00_00_00","363","324","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_BCAPITAL","369","329","109","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("91");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0.00");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00_00_00_00","482","295","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ETC","488","300","109","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("93");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00_00_00_00_00","482","324","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ETC","488","329","109","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("95");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0.00");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00_00_00_00_00_00","601","324","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_TOT","607","329","109","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("97");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0.00");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00_00_00_00_00_00_00_01","601","295","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TOT","607","300","109","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("99");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_AMBIGO","726","300","550","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("102");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_RTBIGO","726","329","550","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("103");
            obj.set_value("");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_RM1","5","400","120","40",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("104");
            obj.set_text("사업조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta26_00_00","124","400","1158","40",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RM1","130","404","1145","32",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("106");
            obj.set_maxlength("1000");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta26_01","124","468","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new TextArea("txtDS_AI","130","472","250","22",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("108");
            obj.set_maxlength("1000");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_AI","5","468","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("109");
            obj.set_text("회계자문사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta26_01_00","124","497","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new TextArea("txtDS_DI","130","501","250","22",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("111");
            obj.set_maxlength("1000");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staDS_DI","5","497","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("112");
            obj.set_text("설계용역사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("staID_FILE_ATTCH","5","545","120","149",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta27","124","545","1158","149",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("divFile","125","552","1154","136",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab6",this.divData.form.tabData);
            obj.set_text("사업성분석");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTab1Title01","5","297",null,"24","21",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("6");
            obj.set_text("참여사");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00","4","7",null,"24","13",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("7");
            obj.set_text("사업성 분석");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Button("btnDelAnalysis",null,"5","50","24","19",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Button("btnRegAnalysis",null,"5","50","24","78",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Button("btnUpdAnalysis",null,"5","50","24","134",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("2");
            obj.set_text("편집");
            obj.set_visible("false");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Grid("objGrdtab6","5","37",null,"250","19",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("3");
            obj._setContents("");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Button("btnRegJvFirm",null,"297","88","24","21",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("4");
            obj.set_text("참여사구성");
            obj.set_enable("false");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Grid("objGrdtab7","5","327",null,"250","19",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("5");
            obj._setContents("");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("약정");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTab2Title1","5","0",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("34");
            obj.set_text("계약금액");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_visible("true");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGrdtab2","5","37",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnUpd",null,"5","50","24","85",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj.set_text("편집");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"5","70","24","5",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("3");
            obj.set_text("등록");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab7",this.divData.form.tabData);
            obj.set_text("금융약정");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTab1Title01","5","35","82","22",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("0");
            obj.set_text("금융약정");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Grid("objGrdtab8","5","62","360","541",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staTab1Title","370","36","82","22",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("2");
            obj.set_text("차입현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Grid("objGrdtab9","370","62",null,"301","19",null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("3");
            obj._setContents("");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Button("btnUpdAgree",null,"5","50","24","160",null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("4");
            obj.set_text("편집");
            obj.set_visible("false");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Button("btnRegAgree",null,"5","50","24","78",null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("5");
            obj.set_text("등록");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Button("btnDelAgree",null,"5","50","24","19",null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staTab1Title00","370","372","82","22",null,null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("7");
            obj.set_text("보증현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Grid("objGrdtab10","370","398",null,"205","19",null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("8");
            obj._setContents("");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("공동도급사");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrdtab3","5","33",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"5","70","24","5",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("등록/변경");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("관계사");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrdtab4","5","37",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"5","70","24","5",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj.set_text("등록/변경");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("담당자 / 열람부서");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTitle00","10","10",null,"24","24",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("2");
            obj.set_text("담당자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGrdtab5","5","staTitle00:10",null,"265","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"10","70","24","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("1");
            obj.set_text("등록/변경");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Static("staTitle01","10","objGrdtab5:10",null,"24","24",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("3");
            obj.set_text("열람부서");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGrdtab5_Auth","5","staTitle01:10",null,"265","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("4");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Button("btnReg_Auth",null,"objGrdtab5:10","70",null,"9","objGrdtab5_Auth:10",null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("5");
            obj.set_text("등록/변경");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Static("sta00_00",null,"0","410","20","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("＊ 사업비프로젝트코드생성 : 사업비 회계 처리를 위한 프로젝트 코드 생성 ");
            obj.set_color("#2d33fa");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.tabData.tab1.form.div00.form.ctclDT_ACQ","value","dsBase","DT_ACQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.tabData.tab1.form.div00.form.ccfDS_REGION.form.CDTextBox","value","dsData","DS_REGION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtCD_PROJ","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtDS_PROJ","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tabData.tab1.form.div00.form.ctxtNM_PROV","value","dsBase","NM_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tabData.tab1.form.div00.form.ccboTY_ACQ1","value","dsBase","TY_ACQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab1.form.div00.form.ctxtNM_ENF","value","dsBase","NM_ENF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab1.form.div00.form.ccboTY_ENF","value","dsBase","TY_ENF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab1.form.div00.form.ctxtDS_ENF_DEPT","value","dsBase","DS_ENF_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab1.form.div00.form.ccboCD_LOC","value","dsBase","CD_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab1.form.div00.form.ctxtDS_ADDR2","value","dsBase","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab1.form.div00.form.ctxtDS_LAND_CLS","value","dsBase","DS_LAND_CLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab1.form.div00.form.ctxtDS_LOCAL","value","dsBase","DS_LOCAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tabData.tab1.form.div00.form.ctxtDS_ACC","value","dsBase","DS_ACC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tabData.tab1.form.div00.form.ctxtDS_CITY_PLAN","value","dsBase","DS_CITY_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab1.form.div00.form.ctxtDS_PUB_NOTICE","value","dsBase","DS_PUB_NOTICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.tabData.tab1.form.div00.form.ctxtDS_USE_STAT","value","dsBase","DS_USE_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tabData.tab1.form.div00.form.ctxtDS_ROAD_STAT","value","dsBase","DS_ROAD_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tabData.tab1.form.div00.form.ctxtDS_CONT_LIMIT","value","dsBase","DS_CONT_LIMIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.tabData.tab1.form.div00.form.ctxtNO_ARCH_TOP","value","dsBase","NO_ARCH_TOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.tabData.tab1.form.div00.form.ctxtNO_ARCH_BOTTM","value","dsBase","NO_ARCH_BOTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.tabData.tab1.form.div00.form.ctxtNO_ARCH_UNDR","value","dsBase","NO_ARCH_UNDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_TOP","value","dsBase","SZ_SHOP_TOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.tabData.tab1.form.div00.form.ctxtRT_ARCH","value","dsBase","RT_ARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.tabData.tab1.form.div00.form.ctxtSZ_ARCH_M","value","dsBase","SZ_ARCH_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tabData.tab1.form.div00.form.ctxtSZ_ARCH","value","dsBase","SZ_ARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_BOTTM","value","dsBase","SZ_SHOP_BOTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP","value","dsBase","SZ_SHOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_M","value","dsBase","SZ_SHOP_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_UNDR","value","dsBase","SZ_SHOP_UNDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.tabData.tab1.form.div00.form.ctxtRT_SHOP","value","dsBase","RT_SHOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab1.form.div00.form.ctxtAM_BIZ","value","dsBase","AM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab1.form.div00.form.ctxtAM_LAND","value","dsBase","AM_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab1.form.div00.form.ccboCD_LAND_STAT","value","dsBase","CD_LAND_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab1.form.div00.form.txtDS_RM","value","dsBase","DS_RM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.tabData.tab1.form.div00.form.ccboCD_PERMIT_STAT","value","dsBase","CD_PERMIT_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.tabData.tab1.form.div00.form.ctxtAM_AREA","value","dsBase","AM_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab1.form.div00.form.ctxtAM_CONST","value","dsBase","AM_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.tabData.tab1.form.div00.form.ccfCD_BIZ_STAT.form.CDTextBox","value","dsBase","CD_BIZ_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.tabData.tab1.form.div00.form.ccfTY_BIZ.form.CDTextBox","value","dsBase","TY_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.tabData.tab1.form.div00.form.ccfTY_BIZ_MHOD.form.CDTextBox","value","dsBase","TY_BIZ_MHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.tabData.tab1.form.div00.form.ccfCD_BIZ_STAT.form.DSTextBox","value","dsBase","DS_BIZ_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.tabData.tab1.form.div00.form.ccfTY_BIZ.form.DSTextBox","value","dsBase","NM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.tabData.tab1.form.div00.form.ccfTY_BIZ_MHOD.form.DSTextBox","value","dsBase","NM_BIZ_MHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.tabData.tab1.form.div00.form.ccfTY_PRDCT.form.CDTextBox","value","dsBase","TY_PRDCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.tabData.tab1.form.div00.form.ccfTY_PRDCT.form.DSTextBox","value","dsBase","NM_PRDCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.tabData.tab1.form.div00.form.ctxtSZ_ARCH00","value","dsBase","SZ_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.tabData.tab1.form.div00.form.ctxtSZ_ARCH_M00","value","dsBase","SZ_AREA_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP00","value","dsBase","SZ_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_M00","value","dsBase","SZ_LAND_OVR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.tabData.tab1.form.div00.form.ctxtRT_SHOP00","value","dsBase","RT_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.tabData.tab1.form.div00.form.ctclDT_COST_SEL","value","dsBase","DT_COST_SEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP00_00","value","dsBase","SZ_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_M00_00","value","dsBase","SZ_LAND_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP00_00_00","value","dsBase","SZ_LAND_UNDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.tabData.tab1.form.div00.form.ctxtSZ_SHOP_M00_00_00","value","dsBase","SZ_LAND_UNDR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab1.form.div00.form.ccfCD_CORP.form.CDTextBox","value","dsBase","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.tabData.tab1.form.div00.form.ccfCD_SAUP.form.CDTextBox","value","dsBase","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.tabData.tab1.form.div00.form.ccboYN_SAUP","value","dsBase","YN_SAUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.tabData.tab1.form.div00.form.ccfCD_CORP.form.DSTextBox","value","dsBase","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.tabData.tab1.form.div00.form.ccfCD_SAUP.form.DSTextBox","value","dsBase","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.tabData.tab1.form.div00.form.ccboCD_CLS","value","dsBase","CD_CLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","divData.form.tabData.tab1.form.div01.form.ctclDT_ACQ","value","dsBase","DT_ACQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.tabData.tab1.form.div01.form.ccfDS_REGION.form.CDTextBox","value","dsData","DS_REGION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divSearch.form.ctxtCD_PROJ","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divSearch.form.ctxtDS_PROJ","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.tabData.tab1.form.div01.form.ctxtNM_PROV","value","dsBase","NM_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divData.form.tabData.tab1.form.div01.form.ccboTY_ACQ1","value","dsBase","TY_ACQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.tabData.tab1.form.div01.form.ctxtNM_ENF","value","dsBase","NM_ENF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.tabData.tab1.form.div01.form.ccboTY_ENF","value","dsBase","TY_ENF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divData.form.tabData.tab1.form.div01.form.ctxtDS_ENF_DEPT","value","dsBase","DS_ENF_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divData.form.tabData.tab1.form.div01.form.ccboCD_LOC","value","dsBase","CD_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divData.form.tabData.tab1.form.div01.form.ctxtDS_ADDR2","value","dsBase","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divData.form.tabData.tab1.form.div01.form.ctxtDS_LAND_CLS","value","dsBase","DS_LAND_CLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divData.form.tabData.tab1.form.div01.form.ctxtDS_LOCAL","value","dsBase","DS_LOCAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divData.form.tabData.tab1.form.div01.form.ctxtDS_ACC","value","dsBase","DS_ACC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divData.form.tabData.tab1.form.div01.form.ctxtDS_CITY_PLAN","value","dsBase","DS_CITY_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divData.form.tabData.tab1.form.div01.form.ctxtDS_PUB_NOTICE","value","dsBase","DS_PUB_NOTICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divData.form.tabData.tab1.form.div01.form.ctxtDS_USE_STAT","value","dsBase","DS_USE_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divData.form.tabData.tab1.form.div01.form.ctxtDS_ROAD_STAT","value","dsBase","DS_ROAD_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divData.form.tabData.tab1.form.div01.form.ctxtDS_CONT_LIMIT","value","dsBase","DS_CONT_LIMIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divData.form.tabData.tab1.form.div01.form.ctxtNO_ARCH_TOP","value","dsBase","NO_ARCH_TOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divData.form.tabData.tab1.form.div01.form.ctxtNO_ARCH_BOTTM","value","dsBase","NO_ARCH_BOTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divData.form.tabData.tab1.form.div01.form.ctxtNO_ARCH_UNDR","value","dsBase","NO_ARCH_UNDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","divData.form.tabData.tab1.form.div01.form.ctxtSZ_SHOP_TOP","value","dsBase","SZ_SHOP_TOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","divData.form.tabData.tab1.form.div01.form.ctxtRT_ARCH","value","dsBase","RT_ARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","divData.form.tabData.tab1.form.div01.form.ctxtSZ_ARCH_M","value","dsBase","SZ_ARCH_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","divData.form.tabData.tab1.form.div01.form.ctxtSZ_ARCH","value","dsBase","SZ_ARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","divData.form.tabData.tab1.form.div01.form.ctxtSZ_SHOP_BOTTM","value","dsBase","SZ_SHOP_BOTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","divData.form.tabData.tab1.form.div01.form.ctxtSZ_SHOP","value","dsBase","SZ_SHOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","divData.form.tabData.tab1.form.div01.form.ctxtSZ_SHOP_M","value","dsBase","SZ_SHOP_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","divData.form.tabData.tab1.form.div01.form.ctxtSZ_SHOP_UNDR","value","dsBase","SZ_SHOP_UNDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","divData.form.tabData.tab1.form.div01.form.ctxtRT_SHOP","value","dsBase","RT_SHOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","divData.form.tabData.tab1.form.div01.form.ctxtAM_BIZ","value","dsBase","AM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","divData.form.tabData.tab1.form.div01.form.ctxtAM_LAND","value","dsBase","AM_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","divData.form.tabData.tab1.form.div01.form.ccboCD_LAND_STAT","value","dsBase","CD_LAND_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","divData.form.tabData.tab1.form.div01.form.txtDS_RM","value","dsBase","DS_RM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divData.form.tabData.tab1.form.div01.form.ccboCD_PERMIT_STAT","value","dsBase","CD_PERMIT_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","divData.form.tabData.tab1.form.div01.form.ctxtAM_AREA","value","dsBase","AM_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","divData.form.tabData.tab1.form.div01.form.ctxtAM_CONST","value","dsBase","AM_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","divData.form.tabData.tab1.form.div01.form.ccfCD_BIZ_STAT.form.CDTextBox","value","dsBase","CD_BIZ_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","divData.form.tabData.tab1.form.div01.form.ccfTY_BIZ.form.CDTextBox","value","dsBase","TY_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","divData.form.tabData.tab1.form.div01.form.ccfTY_BIZ_MHOD.form.CDTextBox","value","dsBase","TY_BIZ_MHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","divData.form.tabData.tab1.form.div01.form.ccfCD_BIZ_STAT.form.DSTextBox","value","dsBase","DS_BIZ_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","divData.form.tabData.tab1.form.div01.form.ccfTY_BIZ.form.DSTextBox","value","dsBase","NM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","divData.form.tabData.tab1.form.div01.form.ccfTY_BIZ_MHOD.form.DSTextBox","value","dsBase","NM_BIZ_MHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","divData.form.tabData.tab1.form.div01.form.ccfTY_PRDCT.form.CDTextBox","value","dsBase","TY_PRDCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","divData.form.tabData.tab1.form.div01.form.ccfTY_PRDCT.form.DSTextBox","value","dsBase","NM_PRDCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","divData.form.tabData.tab1.form.div01.form.ctxtSZ_ARCH00","value","dsBase","SZ_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","divData.form.tabData.tab1.form.div01.form.ctxtSZ_ARCH_M00","value","dsBase","SZ_AREA_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","divData.form.tabData.tab1.form.div01.form.ctxtSZ_SHOP00","value","dsBase","SZ_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","divData.form.tabData.tab1.form.div01.form.ctxtSZ_SHOP_M00","value","dsBase","SZ_LAND_OVR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","divData.form.tabData.tab1.form.div01.form.ctxtRT_SHOP00","value","dsBase","RT_LAND_OVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","divData.form.tabData.tab1.form.div01.form.ctclDT_COST_SEL","value","dsBase","DT_COST_SEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","divData.form.tabData.tab1.form.div01.form.ctxtSZ_SHOP00_00","value","dsBase","SZ_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","divData.form.tabData.tab1.form.div01.form.ctxtSZ_SHOP_M00_00","value","dsBase","SZ_LAND_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","divData.form.tabData.tab1.form.div01.form.ctxtSZ_SHOP00_00_00","value","dsBase","SZ_LAND_UNDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","divData.form.tabData.tab1.form.div01.form.ctxtSZ_SHOP_M00_00_00","value","dsBase","SZ_LAND_UNDR_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","divData.form.tabData.tab1.form.div01.form.ccfCD_CORP.form.CDTextBox","value","dsBase","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item118","divData.form.tabData.tab1.form.div01.form.ccfCD_SAUP.form.CDTextBox","value","dsBase","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item119","divData.form.tabData.tab1.form.div01.form.ccboYN_SAUP","value","dsBase","YN_SAUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item120","divData.form.tabData.tab1.form.div01.form.ccfCD_CORP.form.DSTextBox","value","dsBase","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item121","divData.form.tabData.tab1.form.div01.form.ccfCD_SAUP.form.DSTextBox","value","dsBase","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","divData.form.tabData.tab1.form.div01.form.ccboCD_CLS","value","dsBase","CD_CLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item124","divData.form.tabData.tab1.form.div01.form.ctxtAM_OCAPITAL","value","dsBase","AM_OCAPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item125","divData.form.tabData.tab1.form.div01.form.ctxtAM_BCAPITAL","value","dsBase","AM_BCAPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item126","divData.form.tabData.tab1.form.div01.form.ctxtAM_ETC","value","dsBase","AM_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item128","divData.form.tabData.tab1.form.div01.form.ctxtDS_AMBIGO","value","dsBase","DS_AMBIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item129","divData.form.tabData.tab1.form.div01.form.ctxtRT_OCAPITAL","value","dsBase","RT_OCAPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item127","divData.form.tabData.tab1.form.div01.form.ctxtRT_BCAPITAL","value","dsBase","RT_BCAPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item131","divData.form.tabData.tab1.form.div01.form.ctxtRT_ETC","value","dsBase","RT_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item133","divData.form.tabData.tab1.form.div01.form.ctxtDS_RTBIGO","value","dsBase","DS_RTBIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item134","divData.form.tabData.tab1.form.div01.form.txtDS_SCALE","value","dsBase","DS_SCALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item135","divData.form.tabData.tab1.form.div01.form.txtDS_RM1","value","dsBase","DS_RM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item136","divData.form.tabData.tab1.form.div01.form.txtDS_FI","value","dsBase","DS_FI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item137","divData.form.tabData.tab1.form.div01.form.txtDS_AI","value","dsBase","DS_AI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item138","divData.form.tabData.tab1.form.div01.form.txtDS_DI","value","dsBase","DS_DI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item130","divData.form.tabData.tab1.form.div01.form.ctxtAM_TOT","value","dsTOT","AM_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item132","divData.form.tabData.tab1.form.div01.form.ctxtRT_TOT","value","dsTOT","RT_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item139","edtDS_SAUP","value","dsBase","DS_SAUP");
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
        this.registerScript("DOA_ARCH_PROJ.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.serverTime = "";

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
         	// ---------------------------//
        	this.fnSetExtendButton();

        	this.fnSetVariable();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.fnSetCombo();

        	// 파일관리자 - 조회전에는 disable
        	this.divData.form.tabData.tab1.form.divFile.form.set_enable(false);

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_PROJ))
        	{
        		this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        		this.FormBtns.Select.click();
        	} else {
        		/*폼상태는 입력 모드*/
        		this.gfnSetFormStatus(this, "I");
        		this.fnAdd();
        	}
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
        	this.dsReqYNCharge.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "selectCharge";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var	inData      = "selectCharge=dsReqYNCharge";
        	var	outData     = "dsRcvYNCharge=selectCharge0";
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
        	this.FormBtns.Excel.set_enable(false);
        	this.FormBtns.Print.set_enable(false);

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
        		this.divData.form.tabData.tab2.set_enable(false);
        		this.divData.form.tabData.tab3.set_enable(false);
        		this.divData.form.tabData.tab4.set_enable(false);
        		this.divData.form.tabData.tab5.set_enable(false);
        		this.divData.form.tabData.tab6.set_enable(false);
        		this.divData.form.tabData.tab7.set_enable(false);

        		this.btnContCreate.set_enable(false);
        		this.btnHqCreate.set_enable(false);
        		break;
        	case "U":
        		this.FormBtns.Select.set_enable(true);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(true);

        		this.btnContCreate.set_enable(false);
        		this.btnHqCreate.set_enable(false);
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
        		this.divData.form.tabData.tab6.set_enable(true);
        		this.divData.form.tabData.tab7.set_enable(true);

        		this.btnContCreate.set_enable(true);
        		this.btnHqCreate.set_enable(true);
        	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
            this.btnVendor = this.gfnFormButtonAdd("btnVendor", "fnVendor");
        	this.btnContCreate = this.gfnFormButtonAdd("btnContCreate", "fnContCreate");
        	this.btnHqCreate = this.gfnFormButtonAdd("btnHqCreate", "fnHqCreate");
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ARCH_TY_PROJ = "SA00102";

        	this.ccfCD_BIZ_STAT = this.divData.form.tabData.tab1.form.div00.form.ccfCD_BIZ_STAT;
        	this.ccfTY_BIZ = this.divData.form.tabData.tab1.form.div00.form.ccfTY_BIZ;
        	this.ccfTY_BIZ_MHOD = this.divData.form.tabData.tab1.form.div00.form.ccfTY_BIZ_MHOD;
        	this.ccfTY_PRDCT = this.divData.form.tabData.tab1.form.div00.form.ccfTY_PRDCT;
        	this.ccfDS_REGION = this.divData.form.tabData.tab1.form.div00.form.ccfDS_REGION;
        	this.ccfCD_CORP =  this.divData.form.tabData.tab1.form.div00.form.ccfCD_CORP;
        	this.ccfCD_SAUP =  this.divData.form.tabData.tab1.form.div00.form.ccfCD_SAUP;

        	this.ccfCD_BIZ_STAT1 = this.divData.form.tabData.tab1.form.div01.form.ccfCD_BIZ_STAT;
        	this.ccfTY_BIZ1 = this.divData.form.tabData.tab1.form.div01.form.ccfTY_BIZ;
        	this.ccfTY_BIZ_MHOD1 = this.divData.form.tabData.tab1.form.div01.form.ccfTY_BIZ_MHOD;
        	this.ccfTY_PRDCT1 = this.divData.form.tabData.tab1.form.div01.form.ccfTY_PRDCT;
        	this.ccfDS_REGION1 = this.divData.form.tabData.tab1.form.div01.form.ccfDS_REGION;
        	this.ccfCD_CORP1 =  this.divData.form.tabData.tab1.form.div01.form.ccfCD_CORP;
        	this.ccfCD_SAUP1 =  this.divData.form.tabData.tab1.form.div01.form.ccfCD_SAUP;
        	this.edtCD_SAUP = this.divSearch.form.edtCD_SAUP;
        	this.edtDS_SAUP = this.divSearch.form.edtDS_SAUP;

        	this.ccfCD_BIZ_STAT.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";      //검토상태
        	this.ccfTY_BIZ.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";           //사업유형
        	this.ccfTY_BIZ_MHOD.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";      //사업방식
        	this.ccfTY_PRDCT.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";      //상품분류
        	this.ccfDS_REGION.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";        //우편번호

        	this.ccfCD_BIZ_STAT1.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";      //검토상태
        	this.ccfTY_BIZ1.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";           //사업유형
        	this.ccfTY_BIZ_MHOD1.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";      //사업방식
        	this.ccfTY_PRDCT1.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";      //상품분류
        	this.ccfDS_REGION1.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";        //우편번호

        	//약정
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrdtab2;
        	//공동도급사
        	this.dxGrid3 = this.divData.form.tabData.tab3.form.objGrdtab3;
        	//관계사
        	this.dxGrid4 = this.divData.form.tabData.tab4.form.objGrdtab4;
        	//담당자
        	this.dxGrid5 = this.divData.form.tabData.tab5.form.objGrdtab5;
        	//열람부서
        	this.dxGrid5_Auth = this.divData.form.tabData.tab5.form.objGrdtab5_Auth;
        	//사업성 분석TAB 그리드
        	this.dxGrid6 = this.divData.form.tabData.tab6.form.objGrdtab6;
        	this.dxGrid7 = this.divData.form.tabData.tab6.form.objGrdtab7;
            //금융약정TAB 그리드
        	this.dxGrid8 = this.divData.form.tabData.tab7.form.objGrdtab8;
        	this.dxGrid9 = this.divData.form.tabData.tab7.form.objGrdtab9;
        	this.dxGrid10 = this.divData.form.tabData.tab7.form.objGrdtab10;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DO", "DOA_ARCH_PROV_CONT");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DO", "DOA_ARCH_CO_CONTRCT");
        	this.gfnGridInit(this.dxGrid4, this.dsList4, "DO", "DOA_ARCH_CONCERN");
        	this.gfnGridInit(this.dxGrid5, this.dsList5, "DO", "DOA_ARCH_CHARGE");

        	this.gfnGridInit(this.dxGrid5_Auth, this.dsList5_Auth, "DO", "DOZ_PROJ_AUTH");

        	//사업성 분석TAB 그리드
        	this.gfnGridInit(this.dxGrid6, this.dsList6, "DO", "DOC_SOC_ANALYSIS_LIST");
        	this.gfnGridInit(this.dxGrid7, this.dsList7, "DO", "DOC_SOC_JV_LIST");

        	//금융약정TAB 그리드
        	this.gfnGridInit(this.dxGrid8, this.dsList8, "DO", "DOC_SOC_AGREE_LIST");
        	this.gfnGridInit(this.dxGrid9, this.dsList9, "DO", "DOC_SOC_AGREE_LOAN_LIST");
        	this.gfnGridInit(this.dxGrid10, this.dsList10, "DO", "DOC_SOC_AGREE_ASSU_LIST");

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SAUP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP1.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SAUP1.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsBase.set_enableevent(false);
        	this.dsBase.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	//this.dsBase.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsBase.set_enableevent(true);

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "string");

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("CD_PROJ", "string");
        	this.dsSelect1.addColumn("YN_READ", "string");

        	this.dsHqCreate = new Dataset();
        	this.dsHqCreate.addColumn("CD_PROJ", "string");
        	this.dsHqCreate.addColumn("DS_SAUP", "string");
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	  if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	  } else if(id == "ccfCD_SAUP"){
        	    dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_PROJ", this.divSearch.form.ctxtCD_PROJ.value);
        	  } else if(id == "ccfCD_SAUP1"){
        	    dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_PROJ", this.divSearch.form.ctxtCD_PROJ.value);
        	  } else if(id == "ccfCD_CORP1"){
        	    dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	  }
        	return true;
         }

        /************************************************************************
         * 콤보 이벤트 설정
         ************************************************************************/
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(0, "CD_TYPE", "14");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(1, "CD_TYPE", "15");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(2, "CD_TYPE", "02");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(3, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(3, "CD_TYPE", "08");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(4, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(4, "CD_TYPE", "07");

        	this.dsCombo.addRow();	// 공사분야
        	this.dsCombo.setColumn(5, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(5, "CD_TYPE", "24");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_ACQ1=combo0 dsTY_ENF=combo1 dsCD_LOC=combo2 dsCD_LAND_STAT=combo3 dsCD_PERMIT_STAT=combo4 dsDS_CD_CLS=combo5";
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
        				this.dsBase.setColumn(0, "CD_ZIP", arr[0].ZIPCODE);
        				this.dsBase.setColumn(0, "DS_ADDR1", arr[0].ADDRESS);
        			break;

        			//우편번호
        			case "ccfDS_REGION1":
        				this.dsBase.setColumn(0, "CD_ZIP", arr[0].ZIPCODE);
        				this.dsBase.setColumn(0, "DS_ADDR1", arr[0].ADDRESS);
        			break;
        		}
        	}
        }

        this.fnSaveValidate = function(){
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "DS_PROJ"))){
        		this.gfnAlert("프로젝트 명을 입력하세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "CD_BIZ_STAT"))){
        		this.gfnAlert("검토상태를 입력하세요.");
        		return false;
        	}

        	/*
        	if(this.gfnIsNull(this.dsBase.getColumn(0, "NM_PROV"))){
        		this.gfnAlert("정보제공자를 입력하세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "TY_ACQ"))){
        		this.gfnAlert("정보제공자 유형을 선택하세요.");
        		return false;
        	}
        	*/

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "TY_BIZ"))){
        		this.gfnAlert("사업유형을 입력하세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "DT_ACQ"))){
        		this.gfnAlert("정보입수일자를 입력하세요.");
        		return false;
        	}
        	if(this.gfnIsNull(this.dsBase.getColumn(0, "CD_CORP"))){
        		this.gfnAlert("법인코드를 입력하세요.");
        		return false;
        	}
        // 	if(this.gfnIsNull(this.dsBase.getColumn(0, "YN_SAUP"))){
        // 		this.gfnAlert("사업관리여부를 선택하세요.");
        // 		return false;
        // 	}
        	if(this.gfnIsNull(this.dsBase.getColumn(0, "CD_DEPT"))){
        		this.gfnAlert("사업관리부서를 입력하세요.");
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 트렌젝션 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function(obj,e){
        	var tIdx = this.divData.form.tabData.tabindex;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));

        	this.dsSelect1.clearData();
        	this.dsSelect1.addRow();
        	this.dsSelect1.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSelect1.setColumn(0, "YN_READ", "Y");

        	var strSvcId    = "select"+tIdx;
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";
        	if(tIdx == 0){
        		inData      = "select0=dsSelect";
        		outData     = "dsBase=select00";
        	} else if (tIdx == 1){
        		inData      = "select1=dsSelect1";
        		outData     = "dsList6=select10";
        		this.dsList6.clearData();
        		this.dsList7.clearData();
        	} else if (tIdx == 2){
        		inData      = "select2=dsSelect";
        		outData     = "dsList2=select20";
        	} else if (tIdx == 3){
        		inData      = "select3=dsSelect";
        		outData     = "dsList8=select30";
        		this.dsList8.clearData();
        		this.dsList9.clearData();
        		this.dsList10.clearData();
        	} else if (tIdx == 4){
        		inData      = "select4=dsSelect";
        		outData     = "dsList3=select40";
        	} else if (tIdx == 5){
        		inData      = "select5=dsSelect";
        		outData     = "dsList4=select50";
        	} else if (tIdx == 6){
        		inData      = "select6=dsSelect";
        		outData     = "dsList5=select60";
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

        this.fnSelect_Auth = function(){
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));

        	var strSvcId    = "select6_auth";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select6_auth=dsSelect";
        	var outData     = "dsList5_Auth=select6_auth0";
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

        this.fnSave = function(obj,e){
        	if(!this.fnSaveValidate()) return;

        	this.dsBase.set_enableevent(false);
        	this.dsBase.setColumn(0, "DS_PROJ", this.dsSearch.getColumn(0, "DS_PROJ") );
        	this.dsBase.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	//this.dsBase.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsBase.set_enableevent(true);
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
        }

        this.fnDel = function(obj,e){
        	this.gfnConfirm("삭제 하시겠습니까?", function(strId, val){
        		if(val == true) {
        			var strSvcId    = "delete";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "save1=dsBase";
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
        }

        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

        	this.gfnGetServerTime("serverTime");
        	this.dsBase.set_enableevent(false);
        	this.dsBase.setColumn(0, "CD_BIZ_STAT", "01");
        	this.dsBase.setColumn(0, "DS_BIZ_STAT", "접수");
        	this.dsBase.setColumn(0, "DT_ACQ", nexacro.replaceAll(this.serverTime.substr(0,10),"-",""));
        	this.dsBase.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsBase.set_enableevent(true);
        	this.ccfCD_SAUP.form.fnCodeFindLoad();
        	this.fnSwichView();

        }

        this.fnSwichView = function() {
            var swichSel = this.dsBase.getColumn(0, "CD_CLS");

        	if(swichSel == "SA00202"){
        	    this.divData.form.tabData.tab1.form.div01.set_visible(false);
        		this.divData.form.tabData.tab1.form.div00.set_visible(true);
        	}else{
        	    this.divData.form.tabData.tab1.form.div01.set_visible(true);
        		this.divData.form.tabData.tab1.form.div00.set_visible(false);
        	}
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	if (errorCode == 0) {
        		if (svcID == "combo")
        		{
        			this.dsTY_ENF.insertRow(0);
        			this.dsTY_ENF.setColumn(0, "CD_CODE", "");
        			this.dsTY_ENF.setColumn(0, "DS_CODE", "");

        			this.dsCD_LAND_STAT.insertRow(0);
        			this.dsCD_LAND_STAT.setColumn(0, "CD_CODE", "");
        			this.dsCD_LAND_STAT.setColumn(0, "DS_CODE", "");

        			this.dsCD_PERMIT_STAT.insertRow(0);
        			this.dsCD_PERMIT_STAT.setColumn(0, "CD_CODE", "");
        			this.dsCD_PERMIT_STAT.setColumn(0, "DS_CODE", "");

        			if(this.gfnIsNull(this.getOwnerFrame().CD_PROJ)){
        				this.divData.form.tabData.tab1.form.div00.form.ccboCD_CLS.set_index(1);
        				this.divData.form.tabData.tab1.form.div01.form.ccboCD_CLS.set_index(1);
        			}

        		} else if(svcID == "save") {
        			this.dsSearch.setColumn(0, "CD_PROJ", this.dsBaseRst.getColumn(0, "OUT_DATA"));
        			this.FormBtns.Select.click();
        		} else if(svcID == "select0") {
        			//TAB1 조회
        			this.divData.form.tabData.tab1.form.divFile.form.set_enable(true);
        			// 첨부파일
        			if(!this.gfnIsNull(this.dsBase.getColumn(0, "CD_PROJ"))){
        				var fileManager = {};
        				fileManager.CD_GUBUN = "DOA1";
        				fileManager.CD_DIR = [ this.dsBase.getColumn(0, "CD_PROJ") ];
        				fileManager.CD_REF1 = this.dsBase.getColumn(0, "CD_PROJ");

        				if(this.FormInfo.TY_AUTH == "R") {
        					fileManager.IS_READONLY = true;
        				} else {
        					fileManager.IS_READONLY = false;
        				}
        				// div FileManager 셋팅
        				this.divData.form.tabData.tab1.form.divFile.form.setFileManager(fileManager);
        			}
        			this.dsSearch.setColumn(0, "DS_PROJ", this.dsBase.getColumn(0, "DS_PROJ"));

        			this.edtCD_SAUP.set_value(this.dsBase.getColumn(0, "CD_SAUP"));
        			this.edtDS_SAUP.set_value(this.dsBase.getColumn(0, "DS_SAUP"));

        			if(!this.gfnIsNull(this.dsBase.getColumn(0, "CD_SAUP"))){
        				this.edtDS_SAUP.set_readonly(true);
        			}else{
        				this.edtDS_SAUP.set_readonly(false);
        			}

        			this.divData.form.tabData.tab1.form.div00.form.ccfDS_REGION.form.CDTextBox.set_value(this.dsBase.getColumn(0, "CD_ZIP"));
        			this.divData.form.tabData.tab1.form.div00.form.ccfDS_REGION.form.DSTextBox.set_value(this.dsBase.getColumn(0, "DS_ADDR1"));

        			this.divData.form.tabData.tab1.form.div01.form.ccfDS_REGION.form.CDTextBox.set_value(this.dsBase.getColumn(0, "CD_ZIP"));
        			this.divData.form.tabData.tab1.form.div01.form.ccfDS_REGION.form.DSTextBox.set_value(this.dsBase.getColumn(0, "DS_ADDR1"));

        			this.gfnSetFormStatus(this, "");
        			this.fnSetButton();
        			this.fnSwichView();
        			this.fnAM_TOT(this.dsBase);
        			this.fnRT_TOT(this.dsBase);
        		} else if(svcID == "delete"){
        			this.getParentContext().close();
        		} else if(svcID == "selectCharge"){

        		}
        		else if(svcID == "select6"){
        			this.fnSelect_Auth();
        		}
        		else if(svcID == "select6_auth"){
        		}
        		else if(svcID == "select3"){
        			this.dxGrid8.selecttype = "row";
        			this.dxGrid8.selectRow(this.dxGrid8.getDatasetRow(0));
        		}
        		else if(svcID == "select1"){
        			this.dxGrid6.selecttype = "row";
        			this.dxGrid6.selectRow(this.dxGrid6.getDatasetRow(1));
        		}
        		else if(svcID == "selectJvFirm"){
        			if(this.dsList6.rowposition > -1){
        				this.divData.form.tabData.tab6.form.btnRegJvFirm.set_enable(true);
        			}else{
        				this.divData.form.tabData.tab6.form.btnRegJvFirm.set_enable(false);
        			}
        		}else if(svcID =="hqCreate") {
        			this.FormBtns.Select.click();
        		}
        	} else {
        		this.gfnAlert(errorMsg);
        	}

        };

        this.dsBase_onvaluechanged = function(obj,e){
        	var _val;
        	var _div;
        	var _rt_arch; //건폐율
        	var _rt_land_over; //용적율

        	if(e.oldvalue != e.newvalue) {
        		this.dsBase.set_enableevent(false);
        		switch(e.columnid) {
        			case "SZ_AREA_M":		//대지면적 면적
         				_val = e.newvalue / 3.3058;
        				obj.setColumn(0, "SZ_AREA", nexacro.round(_val,2));
        				//건축면적 - 건폐율	건축면적 / 대지면적 * 100
        				_rt_arch = obj.getColumn(0, "SZ_AREA_M") == 0 ? 0 : (obj.getColumn(0, "SZ_ARCH_M") / obj.getColumn(0, "SZ_AREA_M")) * 100;
        				obj.setColumn(0, "RT_ARCH", nexacro.round(_rt_arch,2));
        				//상가면적 - 건폐율	상가면적 / 대지면적 * 100
        				_rt_arch = obj.getColumn(0, "SZ_AREA_M") == 0 ? 0 : (obj.getColumn(0, "SZ_SHOP_M") / obj.getColumn(0, "SZ_AREA_M")) * 100;
        				obj.setColumn(0, "RT_SHOP", nexacro.round(_rt_arch,2));
        				//용적율	지상연면적 / 대지면적 * 100
        				_rt_land_over = obj.getColumn(0, "SZ_AREA_M") == 0 ? 0 : (obj.getColumn(0, "SZ_LAND_OVR_M") / obj.getColumn(0, "SZ_AREA_M")) * 100;
        				obj.setColumn(0, "RT_LAND_OVR", nexacro.round(_rt_land_over,2));
        				break;
        			case "SZ_LAND_OVR_M":	//지상연면적
         				_val = e.newvalue  / 3.3058;
        				obj.setColumn(0, "SZ_LAND_OVR", nexacro.round(_val,2));
        				//용적율	지상연면적 / 대지면적 * 100
        				_rt_land_over = obj.getColumn(0, "SZ_AREA_M") == 0 ? 0 : (obj.getColumn(0, "SZ_LAND_OVR_M") / obj.getColumn(0, "SZ_AREA_M")) * 100;
        				obj.setColumn(0, "RT_LAND_OVR", nexacro.round(_rt_land_over,2));
        				//전체연면적
        				_val = obj.getColumn(0, "SZ_LAND_OVR_M") + obj.getColumn(0, "SZ_LAND_UNDR_M");
        				obj.setColumn(0, "SZ_LAND_M", _val);
        				obj.setColumn(0, "SZ_LAND", nexacro.round(_val / 3.3058,2));
        				break;
        			case "SZ_LAND_UNDR_M":	//지하연면적
         				_val = e.newvalue  / 3.3058 ;
        				obj.setColumn(0, "SZ_LAND_UNDR", nexacro.round(_val,2));
        				//전체연면적
        				_val = obj.getColumn(0, "SZ_LAND_OVR_M") + obj.getColumn(0, "SZ_LAND_UNDR_M");
        				obj.setColumn(0, "SZ_LAND_M", _val);
        				obj.setColumn(0, "SZ_LAND", nexacro.round(_val  / 3.3058,2));
        				break;
        			case "SZ_ARCH_M":	//건축면적-연면적
         				_val = e.newvalue  / 3.3058;
        				obj.setColumn(0, "SZ_ARCH", _val);
        				//건축면적 - 건폐율	건축면적 / 대지면적 * 100
        				_rt_arch = obj.getColumn(0, "SZ_AREA_M") == 0 ? 0 : (obj.getColumn(0, "SZ_ARCH_M") / obj.getColumn(0, "SZ_AREA_M")) * 100;
        				obj.setColumn(0, "RT_ARCH", nexacro.round(_rt_arch,2));
        				//상가면적 - 건폐율	상가면적 / 대지면적 * 100
        				_rt_arch = obj.getColumn(0, "SZ_AREA_M") == 0 ? 0 : (obj.getColumn(0, "SZ_SHOP_M") / obj.getColumn(0, "SZ_AREA_M")) * 100;
        				obj.setColumn(0, "RT_SHOP", nexacro.round( _rt_arch,2));
        				break;
        			case "SZ_SHOP_M":	//상가면적
         				_val = e.newvalue  / 3.3058;
        				obj.setColumn(0, "SZ_SHOP", _val);
        				//상가면적 - 건폐율	상가면적 / 대지면적 * 100
        				_rt_arch = obj.getColumn(0, "SZ_AREA_M") == 0 ? 0 : (obj.getColumn(0, "SZ_SHOP_M") / obj.getColumn(0, "SZ_AREA_M")) * 100;
        				obj.setColumn(0, "RT_SHOP", nexacro.round(_rt_arch,2));
        				break;
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
        			case "CD_CLS":	//공사분야
         				this.fnSwichView();
        				break;
        		}
        		this.dsBase.set_enableevent(true);

        		if(this.gfnGetFormStatus(this) == "I"){
        			this.gfnSetFormStatus(this, "I");
        		}else{
        			this.gfnSetFormStatus(this, "U");
        		}
        		this.fnSetButton();
        	}
        };

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

        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
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

        this.divData_tabData_btnReg_onclick = function(obj,e){
        	var tIdx = this.divData.form.tabData.tabindex;

        	var popStr = "";
        	var _width = 0;
        	switch(tIdx) {
        		case 4:
        			//수주 > 주택 > 공통 > 공동도급사 관리
        			popStr = "DOZ_PROJ_CO_CONTRCT";
        			_width = 770;
        		break;
        		case 5:
        			//수주 > 주택 > 공통 > 관계사 관리
        			popStr = "DOZ_PROJ_CONCERN";
        			_width = 850;
        		break;
        		case 6:
        			//수주 > 주택 > 공통 > 담당자 관리
        			popStr = "DOZ_PROJ_CHARGE";
        			_width = 600;
        		break;
        	}

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsBase.getColumn(0, "DS_PROJ")
        	  , TY_PROJ : this.ARCH_TY_PROJ
        	}

        	this.gfnFormOpen("DOZ", popStr, "fnDialogCallback", param, 770, 600);
        };

        this.divData_tabData_btnReg_Auth_onclick = function(obj,e)
        {
        	popStr = "DOZ_PROJ_AUTH";
        	_width = 600;
        	_height = 600;
        	_popType = "DOZ";

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsBase.getColumn(0, "DS_PROJ")
        	  , TY_VENDOR : ""
        	  }

        	this.gfnFormOpen(_popType, popStr, "fnDialogCallback", param, _width, _height);
        };

        this.fnDialogCallback = function(svcID, value) {
        	this.fnSelect();
        };

        this.fnContCreate = function(){
        	var param = {
        		CD_PROJ  : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ  : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , TY_BIZ   : this.dsBase.getColumn(0, "TY_BIZ")
        	  , NM_BIZ   : this.dsBase.getColumn(0, "NM_BIZ")
        	  , CD_LOC	 : this.dsBase.getColumn(0, "CD_LOC")
        	  , CD_ZIP	 : this.dsBase.getColumn(0, "CD_ZIP")
        	  , DS_ADDR1 : this.dsBase.getColumn(0, "DS_ADDR1")
        	  , DS_ADDR2 : this.dsBase.getColumn(0, "DS_ADDR2")
        	  , CD_FIELD : this.dsBase.getColumn(0, "CD_FIELD")
        	  , NO_CONT : this.dsBase.getColumn(0, "NO_CONT")
        	  , NO_CHG_CONT : this.dsBase.getColumn(0, "NO_CHG_CONT")
        	  , CD_BONBU : "A0600000"
        	  , NM_BONBU : "주택"
        	}
        	this.gfnFormOpen("DOD", "DOD_ARCH_CONT", "fnDialogCallback", param, 1330, 840);
        }

        this.fnHqCreateValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.edtDS_SAUP.value)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtDS_SAUP.setFocus();
        		}
        		this.gfnAlert("사업비프로젝트명을 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	};

        	return validate;
        }

        this.fnHqCreate = function(){
        	this.gfnConfirm("사업비 프로젝트 코드생성을 하시겠습니까?", function(strId, val){
        		if(val == true) {
        			if (!this.fnHqCreateValidate()) return false;

        			this.dsHqCreate.clearData();
        			this.dsHqCreate.addRow();

        			this.dsHqCreate.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        			this.dsHqCreate.setColumn(0, "DS_SAUP", this.edtDS_SAUP.value);

        			var strSvcId    = "hqCreate";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData 		= "updateHqCreate=dsHqCreate";
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
        	});
        }

        this.divData_tabData_tab2_btnReg_onclick = function(obj,e){
        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , NO_PROV_CONT : 0
        	}

        	this.gfnFormOpen("DOA", "DOA_ARCH_PROV_CONT", "fnDialogCallback", param, 1180, 800);
        };

        this.divData_tabData_tab2_btnUpd_onclick = function(obj,e){
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid2)) { return false; }

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , NO_PROV_CONT : this.dsList2.getColumn(this.dsList2.rowposition, "NO_PROV_CONT")
        	}

        	this.gfnFormOpen("DOA", "DOA_ARCH_PROV_CONT", "fnDialogCallback", param, 1180, 800);
        };

        this.divData_tabData_tab2_objGrdtab2_oncelldblclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid2)) { return false; }

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , NO_PROV_CONT : this.dsList2.getColumn(this.dsList2.rowposition, "NO_PROV_CONT")
        	}

        	this.gfnFormOpen("DOA", "DOA_ARCH_PROV_CONT", "fnDialogCallback", param, 1180, 800);
        };

        this.fnVendor = function(){
            var param = {};
            this.gfnFormOpen("DHZ", "DHZ_VENDORALL", "fnDialogCallback", param, 980, 720);
        }

        // 사업성분석 등록 버튼
        this.divData_tabData_tab2_btnRegAnalysis_onclick = function(obj,e){
        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , ANALISYS_GUBUN : "I"
        	}

        	this.gfnFormOpen("DOC", "DOC_SOC_ANALYSIS", "fnDialogCallback", param, 780, 510);
        };

        // 사업성분석 편집버튼
        this.divData_tabData_tab2_btnUpdAnalysis_onclick = function(obj,e){
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid6)) { return false; }

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , DT_STD : this.dsList6.getColumn(this.dsList6.rowposition, "DT_STD")
        	  , ANALISYS_GUBUN : "U"
        	}

        	this.gfnFormOpen("DOC", "DOC_SOC_ANALYSIS", "fnDialogCallback", param, 780, 510);
        };

        // 참여사구성 버튼
        this.divData_tabData_tab2_btnRegJvFirm_onclick = function(obj,e){
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid6)) { return false; }
        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , DT_STD : this.dsList6.getColumn(this.dsList6.rowposition, "DT_STD")
        	}

        	this.gfnFormOpen("DOC", "DOC_SOC_JV", "fnDialogCallback", param, 835, 540);
        };

        // 사업성분석 삭제
        this.divData_tabData_tab2_btnDelAnalysis_onclick = function(obj,e){
        	// 선택된 row가 있을 경우에만 삭제
        	if (!this.gfnGridIsRow(this.dxGrid6)) { return false; }

        	this.gfnConfirm("사업성분석 삭제 하시겠습니까?", function(strId, val){
        		if(val == true) {

        			this.dsDelTab.clearData();
        			this.dsDelTab.addRow();

        			this.dsDelTab.setColumn(0, "CD_PROJ", this.dsList6.getColumn(this.dsList6.rowposition, "CD_PROJ"));
        			this.dsDelTab.setColumn(0, "DT_STD", this.dsList6.getColumn(this.dsList6.rowposition, "DT_STD"));
        			this.dsDelTab.setColumn(0, "NO_CONSOR", 0);

        			var strSvcId    = "delete1";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "delete1=dsDelTab";
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

        // 금융약정 등록 버튼
        this.divData_tabData_tab4_btnRegAgree_onclick = function(obj,e){
        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , AGREE_GUBUN : "I"
        	}

        	this.gfnFormOpen("DOC", "DOC_SOC_AGREE", "fnDialogCallback", param, 1050, 850);

        };

        // 금융약정 편집 버튼
        this.divData_tabData_tab4_btnUpdAgree_onclick = function(obj,e){
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid8)) { return false; }

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , DT_STD : this.dsList8.getColumn(this.dsList8.rowposition, "DT_STD")
        	  , DS_STD : this.dsList8.getColumn(this.dsList8.rowposition, "DS_STD")
        	  , AGREE_GUBUN : "U"
        	}

        	this.gfnFormOpen("DOC", "DOC_SOC_AGREE", "fnDialogCallback", param, 1050, 850);

        };

        // 금융약정 삭제
        this.divData_tabData_tab4_btnDelAgree_onclick = function(obj,e){
        	// 선택된 row가 있을 경우에만 삭제
        	if (!this.gfnGridIsRow(this.dxGrid8)) { return false; }

        	this.gfnConfirm("삭제 하시겠습니까?", function(strId, val){
        		if(val == true) {

        			this.dsDelTab.clearData();
        			this.dsDelTab.addRow();

        			this.dsDelTab.setColumn(0, "CD_PROJ", this.dsList8.getColumn(this.dsList8.rowposition, "CD_PROJ"));
        			this.dsDelTab.setColumn(0, "DT_STD", this.dsList8.getColumn(this.dsList8.rowposition, "DT_STD"));
        			this.dsDelTab.setColumn(0, "NO_CONSOR", 0);

        			var strSvcId    = "delete3";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "delete3=dsDelTab";
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
        	});
        };

        this.divData_tabData_tab2_objGrdtab1_oncelldblclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid6)) { return false; }

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , DT_STD : this.dsList6.getColumn(this.dsList6.rowposition, "DT_STD")
        	  , ANALISYS_GUBUN : "U"
        	}

        	this.gfnFormOpen("DOC", "DOC_SOC_ANALYSIS", "fnDialogCallback", param, 780, 510);
        };

        this.divData_tabData_tab2_objGrdtab1_onselectchanged = function(obj,e)
        {
        	if(e.row<0) return;
        	this.fnJvFirmSelect();
        };

        /************************************************************************
         * 사업성 분석 상세 조회 이벤트
         ************************************************************************/
        this.fnJvFirmSelect = function(){

        	this.dsJvFirmSelect = new Dataset();
        	this.dsJvFirmSelect.addColumn("CD_PROJ", "string");
        	this.dsJvFirmSelect.addColumn("DT_STD", "string");
        	this.dsJvFirmSelect.addColumn("YN_READ", "string");

        	this.dsJvFirmSelect.addRow();
        	this.dsJvFirmSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsJvFirmSelect.setColumn(0, "DT_STD", this.dsList6.getColumn(this.dsList6.rowposition, "DT_STD"));
        	this.dsJvFirmSelect.setColumn(0, "YN_READ", "Y");

        	var strSvcId    = "selectJvFirm";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select7=dsJvFirmSelect";
        	var outData     = "dsList7=select70";
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
        this.divData_tabData_tab4_objGrdtab5_oncelldblclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid8)) { return false; }

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , DT_STD : this.dsList8.getColumn(this.dsList8.rowposition, "DT_STD")
        	  , DS_STD : this.dsList8.getColumn(this.dsList8.rowposition, "DS_STD")
        	  , AGREE_GUBUN : "U"
        	}

        	this.gfnFormOpen("DOC", "DOC_SOC_AGREE", "fnDialogCallback", param, 1050, 850);
        };

        this.divData_tabData_tab4_objGrdtab5_onselectchanged = function(obj,e)
        {
        	if(e.row<0) return;
        	this.fnAgreeDetailSelect();
        };

        /************************************************************************
         * 금융약정 상세 조회 이벤트
         ************************************************************************/
        this.fnAgreeDetailSelect = function(){

        	this.dsAgreeSelect = new Dataset();
        	this.dsAgreeSelect.addColumn("CD_PROJ", "string");
        	this.dsAgreeSelect.addColumn("DT_STD", "string");
        	this.dsAgreeSelect.addColumn("YN_READ", "string");

        	this.dsAgreeSelect.addRow();
        	this.dsAgreeSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsAgreeSelect.setColumn(0, "DT_STD", this.dsList8.getColumn(this.dsList8.rowposition, "DT_STD"));
        	this.dsAgreeSelect.setColumn(0, "YN_READ", "Y");

        	var strSvcId    = "selectAgree";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var	inData      = "select9=dsAgreeSelect select10=dsAgreeSelect";
        	var	outData     = "dsList9=select90 dsList10=select100";
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
            this.divData.form.tabData.tab1.form.div00.form.sta00.addEventHandler("onclick",this.divData_tabData_tab1_sta00_onclick,this);
            this.divData.form.tabData.tab1.form.div00.form.ctclDT_ACQ.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab1.form.div00.form.staDS_ACC.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ACC_onclick,this);
            this.divData.form.tabData.tab1.form.div00.form.staDS_ROAD_STAT.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab1.form.div00.form.staCD_LAND_STAT.addEventHandler("onclick",this.divData_tabData_tab1_staCD_LAND_STAT_onclick,this);
            this.divData.form.tabData.tab1.form.div00.form.txtDS_RM.addEventHandler("onchanged",this.divData_tabData_tab1_txtDS_RM_onchanged,this);
            this.divData.form.tabData.tab1.form.div00.form.ccboCD_LAND_STAT.addEventHandler("onitemchanged",this.divData_tabData_tab1_ccboCD_LAND_STAT_onitemchanged,this);
            this.divData.form.tabData.tab1.form.div00.form.staPercent09.addEventHandler("onclick",this.divData_tabData_tab1_staPercent09_onclick,this);
            this.divData.form.tabData.tab1.form.div00.form.ctclDT_COST_SEL.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab1.form.div00.form.staCD_PERMIT_STAT00_00_00.addEventHandler("onclick",this.divData_tabData_tab1_staCD_PERMIT_STAT00_00_00_onclick,this);
            this.divData.form.tabData.tab1.form.div01.form.sta00.addEventHandler("onclick",this.divData_tabData_tab1_sta00_onclick,this);
            this.divData.form.tabData.tab1.form.div01.form.ctclDT_ACQ.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab1.form.div01.form.staDS_ROAD_STAT.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab1.form.div01.form.txtDS_FI.addEventHandler("onchanged",this.divData_tabData_tab1_txtDS_RM_onchanged,this);
            this.divData.form.tabData.tab1.form.div01.form.ctclDT_COST_SEL.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.tab1.form.div01.form.staDS_ROAD_STAT00.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab1.form.div01.form.staDS_ROAD_STAT00_00.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab1.form.div01.form.staDS_ROAD_STAT00_00_00.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab1.form.div01.form.staAM_TOT.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab1.form.div01.form.staDS_ROAD_STAT00_00_00_00_00.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab1.form.div01.form.staMoneyState.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab1.form.div01.form.staAM_OCAPITAL.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab1.form.div01.form.staRT_OCAPITAL.addEventHandler("onclick",this.divData_tabData_tab1_staDS_ROAD_STAT_onclick,this);
            this.divData.form.tabData.tab1.form.div01.form.txtDS_SCALE.addEventHandler("onchanged",this.divData_tabData_tab1_txtDS_RM_onchanged,this);
            this.divData.form.tabData.tab1.form.div01.form.txtDS_RM1.addEventHandler("onchanged",this.divData_tabData_tab1_txtDS_RM_onchanged,this);
            this.divData.form.tabData.tab1.form.div01.form.txtDS_AI.addEventHandler("onchanged",this.divData_tabData_tab1_txtDS_RM_onchanged,this);
            this.divData.form.tabData.tab1.form.div01.form.txtDS_DI.addEventHandler("onchanged",this.divData_tabData_tab1_txtDS_RM_onchanged,this);
            this.divData.form.tabData.tab1.form.staID_FILE_ATTCH.addEventHandler("onclick",this.divData_tabData_tab1_staID_FILE_ATTCH_onclick,this);
            this.divData.form.tabData.tab6.form.staTab1Title01_00.addEventHandler("onclick",this.divData_tabData_tab6_staTab1Title01_00_onclick,this);
            this.divData.form.tabData.tab6.form.btnDelAnalysis.addEventHandler("onclick",this.divData_tabData_tab2_btnDelAnalysis_onclick,this);
            this.divData.form.tabData.tab6.form.btnRegAnalysis.addEventHandler("onclick",this.divData_tabData_tab2_btnRegAnalysis_onclick,this);
            this.divData.form.tabData.tab6.form.btnUpdAnalysis.addEventHandler("onclick",this.divData_tabData_tab2_btnUpdAnalysis_onclick,this);
            this.divData.form.tabData.tab6.form.objGrdtab6.addEventHandler("onselectchanged",this.divData_tabData_tab2_objGrdtab1_onselectchanged,this);
            this.divData.form.tabData.tab6.form.objGrdtab6.addEventHandler("oncelldblclick",this.divData_tabData_tab2_objGrdtab1_oncelldblclick,this);
            this.divData.form.tabData.tab6.form.btnRegJvFirm.addEventHandler("onclick",this.divData_tabData_tab2_btnRegJvFirm_onclick,this);
            this.divData.form.tabData.tab2.form.objGrdtab2.addEventHandler("oncelldblclick",this.divData_tabData_tab2_objGrdtab2_oncelldblclick,this);
            this.divData.form.tabData.tab2.form.btnUpd.addEventHandler("onclick",this.divData_tabData_tab2_btnUpd_onclick,this);
            this.divData.form.tabData.tab2.form.btnReg.addEventHandler("onclick",this.divData_tabData_tab2_btnReg_onclick,this);
            this.divData.form.tabData.tab7.form.objGrdtab8.addEventHandler("onselectchanged",this.divData_tabData_tab4_objGrdtab5_onselectchanged,this);
            this.divData.form.tabData.tab7.form.objGrdtab8.addEventHandler("oncelldblclick",this.divData_tabData_tab4_objGrdtab5_oncelldblclick,this);
            this.divData.form.tabData.tab7.form.btnUpdAgree.addEventHandler("onclick",this.divData_tabData_tab4_btnUpdAgree_onclick,this);
            this.divData.form.tabData.tab7.form.btnRegAgree.addEventHandler("onclick",this.divData_tabData_tab4_btnRegAgree_onclick,this);
            this.divData.form.tabData.tab7.form.btnDelAgree.addEventHandler("onclick",this.divData_tabData_tab4_btnDelAgree_onclick,this);
            this.divData.form.tabData.tab3.form.btnReg.addEventHandler("onclick",this.divData_tabData_btnReg_onclick,this);
            this.divData.form.tabData.tab4.form.btnReg.addEventHandler("onclick",this.divData_tabData_btnReg_onclick,this);
            this.divData.form.tabData.tab5.form.btnReg.addEventHandler("onclick",this.divData_tabData_btnReg_onclick,this);
            this.divData.form.tabData.tab5.form.btnReg_Auth.addEventHandler("onclick",this.divData_tabData_btnReg_Auth_onclick,this);
            this.dsBase.addEventHandler("onvaluechanged",this.dsBase_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOA_ARCH_PROJ.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
