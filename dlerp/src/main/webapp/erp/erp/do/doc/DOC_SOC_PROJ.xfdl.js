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
                this._setFormPosition(1290,880);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">save0</Col><Col id=\"SP\">DOAPR_SOC_PROJ_MERGE</Col></Row><Row><Col id=\"TARGET\">select0</Col><Col id=\"SP\">DOAPR_SOC_PROJ_SELECT</Col></Row><Row><Col id=\"TARGET\">delete0</Col><Col id=\"SP\">DOAPR_SOC_PROJ_DELETE</Col></Row><Row><Col id=\"TARGET\">select11</Col><Col id=\"SP\">DOAPR_SOC_PROJ_ANALISYS_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select12</Col><Col id=\"SP\">DOAPR_SOC_PROJ_JV_SELECT</Col></Row><Row><Col id=\"TARGET\">select21</Col><Col id=\"SP\">DOAPR_SOC_PROJ_CONSOR_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select22</Col><Col id=\"SP\">DOAPR_SOC_PROJ_CONSOR_FIRM_SELECT</Col></Row><Row><Col id=\"SP\">DOAPR_SOC_PROJ_AGREE_LIST_SELECT</Col><Col id=\"TARGET\">select31</Col></Row><Row><Col id=\"TARGET\">select32</Col><Col id=\"SP\">DOAPR_SOC_PROJ_AGREE_LOAN_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select33</Col><Col id=\"SP\">DOAPR_SOC_PROJ_AGREE_ASSU_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DOAPR_ARCH_CO_CONTRCT</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DOAPR_ARCH_CONCERN</Col></Row><Row><Col id=\"TARGET\">select6</Col><Col id=\"SP\">DOAPR_ARCH_CHARGE</Col></Row><Row><Col id=\"TARGET\">delete1</Col><Col id=\"SP\">DOAPR_SOC_PROJ_ANALISYS_DELETE</Col></Row><Row><Col id=\"TARGET\">delete2</Col><Col id=\"SP\">DOAPR_SOC_PROJ_CONSOR_DELETE</Col></Row><Row><Col id=\"TARGET\">delete3</Col><Col id=\"SP\">DOAPR_SOC_PROJ_AGREE_DELETE</Col></Row><Row><Col id=\"TARGET\">selectCharge</Col><Col id=\"SP\">DOAPR_PROJ_YNCHARGE_SELECT</Col></Row><Row><Col id=\"TARGET\">updateHqCreate</Col><Col id=\"SP\">DOZPR_HQ_CODE_CREATE</Col></Row><Row><Col id=\"TARGET\">select7</Col><Col id=\"SP\">DOAPR_PROJ_AUTH</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBase", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CLS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CLS_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CLS_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PUSH_MHD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PUSH_MHD\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PUSH_AHD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PUSH_AHD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TERM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ODR_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"YM_CONT_SCHD\" type=\"STRING\" size=\"256\"/><Column id=\"YM_OP_ST\" type=\"STRING\" size=\"256\"/><Column id=\"YM_OP_ED\" type=\"STRING\" size=\"256\"/><Column id=\"YM_CONST_ST\" type=\"STRING\" size=\"256\"/><Column id=\"YM_CONST_ED\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_TERM_OP\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BIZ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_IVST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_SCALE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FI\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AI\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DI\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GWLINK1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GWLINK2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GWLINK3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GWLINK4\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAUP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseRst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_BIZ", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CLS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PUSH_AHD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LOC", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">DS_PROJ</Col><Col id=\"DS_FIELD\">프로젝트명</Col></Row><Row><Col id=\"CD_FIELD\">TY_BIZ</Col><Col id=\"DS_FIELD\">사업유형</Col></Row><Row><Col id=\"CD_FIELD\">CD_CLS</Col><Col id=\"DS_FIELD\">공사분야</Col></Row><Row><Col id=\"CD_FIELD\">CD_CLS_CONST</Col><Col id=\"DS_FIELD\">상품분류</Col></Row><Row><Col id=\"CD_FIELD\">TY_PUSH_MHD</Col><Col id=\"DS_FIELD\">추진방식</Col></Row><Row><Col id=\"CD_FIELD\">NO_TERM</Col><Col id=\"DS_FIELD\">공사기간</Col></Row><Row><Col id=\"CD_FIELD\">CD_ODR</Col><Col id=\"DS_FIELD\">주무관청</Col></Row><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인코드</Col></Row><Row><Col id=\"CD_FIELD\">CD_DEPT</Col><Col id=\"DS_FIELD\">사업관리부서</Col></Row></Rows>");
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


            obj = new Dataset("dsList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList5", this);
            obj._setContents("");
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


            obj = new Dataset("dsDelTab", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DT_STD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONSOR\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRcvYNCharge", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"YN_EXISTS\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_SAUP", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"YN_EXISTS\" type=\"STRING\" size=\"30\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">관리</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미관리</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList10_Auth", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
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
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_SAUP",null,"staCD_PROJ:10.0","200","24.0","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCD_SAUP",null,"staCD_PROJ:10.0","68","24.0","edtDS_SAUP:3",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00",null,"10.0","92.0","24.0","edtCD_SAUP:3",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사업비프로젝트코드");
            obj.set_cssclass("sta_WF_SchLabel");
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

            obj = new Static("sta07_00","124","404","1158","59",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta28_00","374","317","907","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_CLS_CONST","855","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("58");
            obj.set_text("상품분류");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta04","974","56","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_TERM","855","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("60");
            obj.set_text("공사기간");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta05","974","85","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","0",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("28");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ","5","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("29");
            obj.set_text("사업유형");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_PUSH_MHD","5","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("30");
            obj.set_text("추진방식");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_LOC","5","143","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("31");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00","124","56","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","124","85","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02","124","143","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_CLS","430","56","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("35");
            obj.set_text("공사분야");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta18","549","56","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_PUSH_AHD","430","85","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("37");
            obj.set_text("추진구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfCD_CLS_CONST","979","61","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_41");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_CLS","554","61","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_CLS");
            obj.set_index("-1");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta10","549","85","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTab1Title01","5","175",null,"22","35",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("39");
            obj.set_text("프로젝트 개요");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staYM_CONT_SCHD","5","201","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_text("수주예정");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staYM_OP_ST","5","230","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("41");
            obj.set_text("운영시작");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta16","124","201","132","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta17","124","230","132","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_CONT","255","201","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_text("수주예상금액");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staYM_OP_ED","5","259","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("45");
            obj.set_text("운영종료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta19","124","259","132","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_TERM_OP","255","230","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("47");
            obj.set_text("운영기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta20","374","201","215","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta22","374","230","215","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_BIZ","255","259","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("50");
            obj.set_text("총사업비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta24","374","259","215","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta25","124","288","132","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staYM_CONST_ST","5","288","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("53");
            obj.set_text("착공예정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta27","124","549","1158","149",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staID_FILE_ATTCH","5","549","120","149",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("55");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_IVST","255","288","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("56");
            obj.set_text("총투자비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta28","374","288","215","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_TERM","978","90","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfDS_LOC","264","148","420","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR2","687","148","590","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("11");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("divFile","124","551","1145","150",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("27");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent16","1065","90","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("62");
            obj.set_text("개월");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboTY_BIZ","129","61","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_BIZ");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_LOC","129","148","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_LOC");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staYM_CONST_ED","5","317","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("63");
            obj.set_text("준공예정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta06","124","317","132","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_SCALE","5","346","120","59",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("65");
            obj.set_text("사업규모");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta07","124","346","1158","59",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_FI","5","462","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("67");
            obj.set_text("금융자문사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta14","124","462","1157","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_AI","5","491","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("69");
            obj.set_text("회계자문사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta21","124","491","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_DI","5","520","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("71");
            obj.set_text("설계용역사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta23","124","520","1158","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_TERM_OP","379","235","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("15");
            obj.set_value("");
            obj.set_textAlign("right");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new TextArea("txtDS_SCALE","129","350","1148","51",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("22");
            obj.set_maxlength("1000");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_AI","129","496","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("25");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_FI","129","467","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("24");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_DI","129","525","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("26");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta05_00","974","114","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent16_00","1065","119","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("74");
            obj.set_text("%");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_OUR","978","119","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_format("0.##");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staRT_OUR","855","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("75");
            obj.set_text("당사지분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta10_00","549","114","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_ODR_DEPT","430","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("77");
            obj.set_text("주무부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01_00","124","114","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_ODR","5","114","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("79");
            obj.set_text("주무관청");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_CONST","255","317","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("80");
            obj.set_text("총공사비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_RM","5","404","120","59",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("82");
            obj.set_text("현안사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RM","129","408","1148","51",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("23");
            obj.set_maxlength("1000");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboTY_PUSH_AHD","555","90","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_PUSH_AHD");
            obj.set_index("-1");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfTY_PUSH_MHD","129","90","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_37");
            obj.getSetter("CDTextWidth").set("132");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfCD_ODR","129","119","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DOX_CFVENDOR_DH");
            obj.getSetter("CDTextWidth").set("132");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ODR_DEPT","554","119","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("7");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent16_01","518","234","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("84");
            obj.set_text("(년)");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ctclYM_CONT_SCHD","129","206","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ctclYM_OP_ST","129","235","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ctclYM_OP_ED","129","264","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ctclYM_CONST_ST","129","293","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("18");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ctclYM_CONST_ED","129","322","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("20");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BIZ","379","264","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("17");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_IVST","379","293","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("19");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONST","379","322","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("21");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONT","379","206","200","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent16_01_00","517","263","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("85");
            obj.set_text("억원");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent16_01_00_00","518","292","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("86");
            obj.set_text("억원");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staPercent16_01_00_00_00","518","321","40","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("87");
            obj.set_text("억원");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_CONT00","589","201","130","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("88");
            obj.set_text("결재문서 (참여검토)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_TERM_OP00","589","230","130","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("89");
            obj.set_text("결재문서 (확정추진)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_BIZ00","589","259","130","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("90");
            obj.set_text("결재문서 (확정)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_IVST00","589","288","130","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("91");
            obj.set_text("결재문서 (종결)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta22_00","718","230","563","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_GWLINK2","725","235","508","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("92");
            obj.set_value("");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta22_00_00","718","201","563","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_GWLINK1","725","206","508","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("94");
            obj.set_value("");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta22_00_01","718","288","563","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_GWLINK4","725","293","508","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("97");
            obj.set_value("");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta22_00_00_00","718","259","563","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_GWLINK3","725","264","508","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("99");
            obj.set_value("");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnDS_GWLINK1","1235","205","43","23",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("100");
            obj.set_text("보기");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnDS_GWLINK2","1235","234","43","23",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("101");
            obj.set_text("보기");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnDS_GWLINK3","1235","263","43","23",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("102");
            obj.set_text("보기");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnDS_GWLINK4","1235","292","43","23",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("103");
            obj.set_text("보기");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","5","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("104");
            obj.set_text("법인코드");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_1","124","27","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","129","32","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CDTextWidth").set("132");
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.set_taborder("106");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staYN_SAUP","430","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("107");
            obj.set_text("사업관리여부");
            obj.set_textAlign("left");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_2","549","27","307","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboYN_SAUP","554","32","132","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("109");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_SAUP");
            obj.set_visible("false");
            obj.set_index("-1");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCD_SAUP","855","27","120","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("110");
            obj.set_text("사업관리부서");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00_3","974","27","308","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfCD_SAUP","979","32","298","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DOS_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("112");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("사업성분석");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTab1Title01","5","297",null,"24","7",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("5");
            obj.set_text("참여사");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00","4","7",null,"24","-1",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("7");
            obj.set_text("사업성 분석");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnUpdAnalysis",null,"5","50","24","120",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj.set_text("편집");
            obj.set_visible("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnRegAnalysis",null,"5","50","24","64",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGrdtab1","5","37",null,"250","5",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGrdtab2","5","327",null,"250","5",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("3");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnRegJvFirm",null,"297","88","24","7",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("4");
            obj.set_text("참여사구성");
            obj.set_enable("false");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnDelAnalysis",null,"5","50","24","5",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("경쟁컨소시엄");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00","6","7",null,"24","5",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("7");
            obj.set_text("컨소시엄 ");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staTab1Title01","5","297",null,"24","6",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("3");
            obj.set_text("컨소시엄 참여사");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Button("btnRegConsor",null,"5","50","24","65",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj.set_text("등록");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Button("btnUpdConsor",null,"5","50","24","125",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("편집");
            obj.set_visible("false");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Grid("objGrdtab3","5","37",null,"250","5",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Grid("objGrdtab4","5","327",null,"250","5",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("4");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Button("btnRegConsorFirm",null,"297","132","24","5",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("5");
            obj.set_text("컨소시엄 참여사 구성");
            obj.set_enable("false");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Button("btnDelConsor",null,"5","50","24","5",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("금융약정");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Button("btnRegAgree",null,"5","50","24","64",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            obj.set_text("등록");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Button("btnUpdAgree",null,"5","50","24","146",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj.set_text("편집");
            obj.set_visible("false");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Grid("objGrdtab5","5","62","360","541",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTab1Title","370","36","82","22",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("3");
            obj.set_text("차입현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Grid("objGrdtab6","370","62",null,"301","5",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("4");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTab1Title00","370","objGrdtab6:9","82","22",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("6");
            obj.set_text("보증현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Grid("objGrdtab7","370","staTab1Title00:4",null,"205","5",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("5");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Button("btnDelAgree",null,"5","50","24","5",null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staTab1Title01","5","35","82","22",null,null,null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("8");
            obj.set_text("금융약정");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("공동도급사");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrdtab8","5","37",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"5","50","24","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Tabpage("tab6",this.divData.form.tabData);
            obj.set_text("관계사");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrdtab9","5","37",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"5","50","24","5",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Tabpage("tab7",this.divData.form.tabData);
            obj.set_text("담당자 / 열람부서");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTitle00","10","10",null,"24","5",null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("1");
            obj.set_text("담당자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Grid("objGrdtab10","5","44",null,"265","5",null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"10","50",null,"10","objGrdtab10:10",null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("2");
            obj.set_text("등록");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("staTitle01","10","319",null,"24","10",null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("3");
            obj.set_text("열람부서");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Grid("objGrdtab10_Auth","5","353",null,"265","5",null,null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("5");
            obj._setContents("");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Button("btnReg00","staTitle01:-50","objGrdtab10:10","50",null,null,"objGrdtab10_Auth:10",null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("4");
            obj.set_text("등록");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Static("sta00",null,"0","410","20","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("＊ 사업비프로젝트코드생성 : 사업비 회계 처리를 위한 프로젝트 코드 생성 ");
            obj.set_color("#2d33fa");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_PROJ","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_PROJ","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tabData.tab1.form.ccboTY_BIZ","value","dsBase","TY_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tabData.tab1.form.ccboCD_CLS","value","dsBase","CD_CLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tabData.tab1.form.ccfCD_CLS_CONST.form.CDTextBox","value","dsBase","CD_CLS_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tabData.tab1.form.ccfTY_PUSH_MHD.form.CDTextBox","value","dsBase","TY_PUSH_MHD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab1.form.ccfTY_PUSH_MHD.form.DSTextBox","value","dsBase","DS_PUSH_MHD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab1.form.ccboTY_PUSH_AHD","value","dsBase","TY_PUSH_AHD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab1.form.ctxtNO_TERM","value","dsBase","NO_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab1.form.ccfCD_ODR.form.CDTextBox","value","dsBase","CD_ODR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab1.form.ccfCD_ODR.form.DSTextBox","value","dsBase","DS_ODR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab1.form.ctxtDS_ADDR2","value","dsBase","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab1.form.ccfDS_LOC.form.CDTextBox","value","dsBase","CD_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tabData.tab1.form.ccfDS_LOC.form.DSTextBox","value","dsBase","DS_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tabData.tab1.form.ctclYM_CONT_SCHD.form.TextBox","value","dsBase","YM_CONT_SCHD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab1.form.ctclYM_OP_ST.form.TextBox","value","dsBase","YM_OP_ST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.tabData.tab1.form.ctclYM_OP_ED.form.TextBox","value","dsBase","YM_OP_ED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tabData.tab1.form.ctclYM_CONST_ST.form.TextBox","value","dsBase","YM_CONST_ST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tabData.tab1.form.ctclYM_CONST_ED.form.TextBox","value","dsBase","YM_CONST_ED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.tabData.tab1.form.ctxtAM_CONT","value","dsBase","AM_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.tabData.tab1.form.ctxtNO_TERM_OP","value","dsBase","NO_TERM_OP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.tabData.tab1.form.ctxtAM_BIZ","value","dsBase","AM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.tabData.tab1.form.ctxtAM_IVST","value","dsBase","AM_IVST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.tabData.tab1.form.ctxtAM_CONST","value","dsBase","AM_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.tabData.tab1.form.txtDS_SCALE","value","dsBase","DS_SCALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tabData.tab1.form.txtDS_RM","value","dsBase","DS_RM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tabData.tab1.form.ctxtDS_FI","value","dsBase","DS_FI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tabData.tab1.form.ctxtDS_AI","value","dsBase","DS_AI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.tabData.tab1.form.ctxtDS_DI","value","dsBase","DS_DI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.tabData.tab1.form.ctxtRT_OUR","value","dsBase","RT_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.tabData.tab1.form.ctxtDS_ODR_DEPT","value","dsBase","DS_ODR_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab1.form.ccboCD_LOC","value","dsBase","CD_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab1.form.ccfCD_CLS_CONST.form.DSTextBox","value","dsBase","DS_CLS_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab1.form.ctxtDS_GWLINK2","value","dsBase","DS_GWLINK2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab1.form.ctxtDS_GWLINK1","value","dsBase","DS_GWLINK1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.tabData.tab1.form.ctxtDS_GWLINK4","value","dsBase","DS_GWLINK4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.tabData.tab1.form.ctxtDS_GWLINK3","value","dsBase","DS_GWLINK3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab1.form.ccfCD_CORP.form.CDTextBox","value","dsBase","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.tabData.tab1.form.ccfCD_SAUP.form.CDTextBox","value","dsBase","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.tabData.tab1.form.ccboYN_SAUP","value","dsBase","YN_SAUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.tabData.tab1.form.ccfCD_CORP.form.DSTextBox","value","dsBase","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.tabData.tab1.form.ccfCD_SAUP.form.DSTextBox","value","dsBase","DS_DEPT");
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
        this.registerScript("DOC_SOC_PROJ.xfdl", function() {
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

        	// 파일관리자 - 조회전에는 disable
        	this.divData.form.tabData.tab1.form.divFile.form.set_enable(false);

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_PROJ))
        	{
        		this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        		this.dsSearch.setColumn(0, "DS_PROJ", this.getOwnerFrame().DS_PROJ);
        		this.fnSelect();
        	} else {
        		this.gfnSetFormStatus(this, "I");
        		this.dsBase.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        		this.divData.form.tabData.tab1.form.ccfCD_SAUP.form.fnCodeFindLoad();
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

        	if(this.FormInfo.TY_AUTH == "R") {
        		this.FormBtns.Select.set_enable(true);
        		this.divData.form.tabData.tab2.form.btnRegAnalysis.set_enable(false);
        		this.divData.form.tabData.tab2.form.btnDelAnalysis.set_enable(false);

        		this.divData.form.tabData.tab3.form.btnRegConsor.set_enable(false);
        		this.divData.form.tabData.tab3.form.btnDelConsor.set_enable(false);

        		this.divData.form.tabData.tab4.form.btnRegAgree.set_enable(false);
        		this.divData.form.tabData.tab4.form.btnDelAgree.set_enable(false);


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

        		this.btnCreate.set_enable(false);
        		this.btnHqCreate.set_enable(false);
        		break;
        	case "U":
        		this.FormBtns.Select.set_enable(true);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(true);

        		this.btnCreate.set_enable(false);
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
        		this.btnCreate.set_enable(true);
        		this.btnHqCreate.set_enable(true);
        	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
            this.btnVendor = this.gfnFormButtonAdd("btnVendor", "fnVendor");
        	this.btnCreate = this.gfnFormButtonAdd("btnContCreate", "fnContCreate");
        	this.btnHqCreate = this.gfnFormButtonAdd("btnHqCreate", "fnHqCreate");
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.dsDelete = new Dataset();

        	this.dsDelete.addColumn("TY_WRK","string");
        	this.dsDelete.addColumn("CD_PROJ","string");
        	this.dsDelete.addColumn("NO_CONSOR","string");
        	this.dsDelete.addRow();

        	this.CD_CORP = this.AuthClient.CD_CORP;

         	this.ccfCD_CLS_CONST = this.divData.form.tabData.tab1.form.ccfCD_CLS_CONST;
        	this.ccfTY_PUSH_MHD = this.divData.form.tabData.tab1.form.ccfTY_PUSH_MHD;
        	this.ccfDS_LOC = this.divData.form.tabData.tab1.form.ccfDS_LOC;
        	this.ccfCD_ODR = this.divData.form.tabData.tab1.form.ccfCD_ODR;
        	this.ccfCD_CORP =  this.divData.form.tabData.tab1.form.ccfCD_CORP;
        	this.ccfCD_SAUP =  this.divData.form.tabData.tab1.form.ccfCD_SAUP;
         	this.edtCD_SAUP = this.divSearch.form.edtCD_SAUP;
        	this.edtDS_SAUP = this.divSearch.form.edtDS_SAUP;

         	this.ccfCD_CLS_CONST.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";	// 상품분류
        	this.ccfTY_PUSH_MHD.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";		// 추진방식
        	this.ccfDS_LOC.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";			// 지역

        	//사업성분석

        	this.dxGrid1 = this.divData.form.tabData.tab2.form.objGrdtab1;
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrdtab2;

        	//경쟁컨소시엄
        	this.dxGrid3 = this.divData.form.tabData.tab3.form.objGrdtab3;
        	this.dxGrid4 = this.divData.form.tabData.tab3.form.objGrdtab4;

        	//금융약정 목록
        	this.dxGrid5 = this.divData.form.tabData.tab4.form.objGrdtab5;
        	//차입현환 목록
        	this.dxGrid6 = this.divData.form.tabData.tab4.form.objGrdtab6;
        	//보증현황 목록
        	this.dxGrid7 = this.divData.form.tabData.tab4.form.objGrdtab7;


        	//공동도급사 목록
        	this.dxGrid8 = this.divData.form.tabData.tab5.form.objGrdtab8;
        	//관계사 목록
        	this.dxGrid9 = this.divData.form.tabData.tab6.form.objGrdtab9;
        	//담당자 목록
        	this.dxGrid10 = this.divData.form.tabData.tab7.form.objGrdtab10;
        	//열람부서
        	this.dxGrid10_Auth = this.divData.form.tabData.tab7.form.objGrdtab10_Auth;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//사업성 분석TAB 그리드
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DO", "DOC_SOC_ANALYSIS_LIST");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DO", "DOC_SOC_JV_LIST");

        	//경쟁 컨소시엄TAB 그리드
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DO", "DOC_SOC_CONSOR_LIST");
        	this.gfnGridInit(this.dxGrid4, this.dsList4, "DO", "DOC_SOC_CONSOR_FIRM_LIST");

        	//금융약정TAB 그리드
        	this.gfnGridInit(this.dxGrid5, this.dsList5, "DO", "DOC_SOC_AGREE_LIST");
        	this.gfnGridInit(this.dxGrid6, this.dsList6, "DO", "DOC_SOC_AGREE_LOAN_LIST");
        	this.gfnGridInit(this.dxGrid7, this.dsList7, "DO", "DOC_SOC_AGREE_ASSU_LIST");

        	//공동도급사TAB 그리드
         	this.gfnGridInit(this.dxGrid8, this.dsList8, "DO", "DOA_ARCH_CO_CONTRCT");
         	//관계사TAB 그리드
        	this.gfnGridInit(this.dxGrid9, this.dsList9, "DO", "DOA_ARCH_CONCERN");
         	//담당자TAB 그리드
        	this.gfnGridInit(this.dxGrid10, this.dsList10, "DO", "DOA_ARCH_CHARGE");
        	this.gfnGridInit(this.dxGrid10_Auth, this.dsList10_Auth, "DO", "DOZ_PROJ_AUTH");

        	this.dxGrid2.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid4.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.ccfCD_ODR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SAUP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	if (id == "ccfCD_ODR") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_SITE", "");
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "");
        	} else if(id == "ccfCD_CORP"){
        	  dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	} else if(id =="ccfCD_SAUP") {
        	   dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	   dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	   dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	   dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	   dsUserParam.setColumn(nrow, "CD_PROJ", this.divSearch.form.ctxtCD_PROJ.value);
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
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsBase.set_enableevent(false);
        	this.dsBase.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
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
         * 콤보 이벤트 설정
         ************************************************************************/
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();	// 사업유형
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(0, "CD_TYPE", "35");

        	this.dsCombo.addRow();	// 공사분야
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(1, "CD_TYPE", "24");

        	this.dsCombo.addRow();	// 추진구분
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(2, "CD_TYPE", "36");

        	this.dsCombo.addRow();	// 지역
        	this.dsCombo.setColumn(3, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(3, "CD_TYPE", "02");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_BIZ=combo0 dsCD_CLS=combo1 dsTY_PUSH_AHD=combo2 dsCD_LOC=combo3";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc ); // 통신방법 정의 [생략가능]
        }

        this.fnCodeFinder_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(arr.length > 0)
        	{
        		switch(id)
        		{
        			//우편번호
        			case "ccfDS_LOC":
        				this.dsBase.setColumn(0, "CD_ZIP", arr[0].ZIPCODE);
        				this.dsBase.setColumn(0, "DS_ADDR1", arr[0].ADDRESS);
        			break;
        		}
        	}
        }

        /************************************************************************
         * 트렌젝션 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function(obj,e){
        	var tIdx = this.divData.form.tabData.tabindex;

        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));

        	this.dsSelect1.addRow();
        	this.dsSelect1.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSelect1.setColumn(0, "YN_READ", "Y");

        	var strSvcId    = "select"+tIdx;
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";
        	var async       = true;

        	if(tIdx == 0){
        		inData      = "select0=dsSelect";
        		outData     = "dsBase=select00";
        	} else if (tIdx == 1){
        		inData      = "select11=dsSelect1";
        		outData     = "dsList1=select110";
        		async		= false;
        		this.dsList1.clearData();
        		this.dsList2.clearData();
        	} else if (tIdx == 2){
        		inData      = "select21=dsSelect";
        		outData     = "dsList3=select210";
        		async		= false;
        		this.dsList3.clearData();
        		this.dsList4.clearData();
        	} else if (tIdx == 3){
        		inData      = "select31=dsSelect";
        		outData     = "dsList5=select310";
        		this.dsList5.clearData();
        		this.dsList6.clearData();
        		this.dsList7.clearData();
        	} else if (tIdx == 4){
        		inData      = "select4=dsSelect";
        		outData     = "dsList8=select40";
        	} else if (tIdx == 5){
        		inData      = "select5=dsSelect";
        		outData     = "dsList9=select50";
        	} else if (tIdx == 6){
        		inData      = "select6=dsSelect";
        		outData     = "dsList10=select60";
        	}
        	var strArg      = "";
        	var callBackFnc = "fnCallback";


        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,async); // 통신방법 정의 [생략가능]
        }

        this.fnSelect_Auth = function(){
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));

        	var strSvcId    = "select7";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select7=dsSelect";
        	var outData     = "dsList10_Auth=select70";
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

        	var tIdx = this.divData.form.tabData.tabindex;
        	this.dsBase.setColumn(0, "DS_PROJ", this.dsSearch.getColumn(0, "DS_PROJ") );

        	if(!this.gfnDataValidate(this.dsBase, this.dsRequired))return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save" + tIdx + "=dsBase";
        	var outData     = "dsBaseRst=save" + tIdx;
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

        this.fnDel = function(obj,e){

        	var tIdx = this.divData.form.tabData.tabindex;

        	this.gfnConfirm("삭제 하시겠습니까?", function(strId, val){
        		if(val == true) {
        			var strSvcId    = "delete";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData 		= "delete" + tIdx + "=dsBase";
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
        	this.dsJvFirmSelect.setColumn(0, "DT_STD", this.dsList1.getColumn(this.dsList1.rowposition, "DT_STD"));
        	this.dsJvFirmSelect.setColumn(0, "YN_READ", "Y");

        	var strSvcId    = "selectJvFirm";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select12=dsJvFirmSelect";
        	var outData     = "dsList2=select120";
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
         * 경쟁컨소시엄 상세 조회 이벤트
         ************************************************************************/
        this.fnConsorFirmSelect = function(){

        	this.dsConsorFirmSelect = new Dataset();
        	this.dsConsorFirmSelect.addColumn("CD_PROJ", "string");
        	this.dsConsorFirmSelect.addColumn("NO_CONSOR", "string");
        	this.dsConsorFirmSelect.addColumn("YN_READ", "string");

        	this.dsConsorFirmSelect.addRow();
        	this.dsConsorFirmSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsConsorFirmSelect.setColumn(0, "NO_CONSOR", this.dsList3.getColumn(this.dsList3.rowposition, "NO_CONSOR"));
        	this.dsConsorFirmSelect.setColumn(0, "YN_READ", "Y");

        	var strSvcId    = "selectJvFirm";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select22=dsConsorFirmSelect";
        	var outData     = "dsList4=select220";
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
         * 금융약정 상세 조회 이벤트
         ************************************************************************/
        this.fnAgreeDetailSelect = function(){

        	this.dsAgreeSelect = new Dataset();
        	this.dsAgreeSelect.addColumn("CD_PROJ", "string");
        	this.dsAgreeSelect.addColumn("DT_STD", "string");
        	this.dsAgreeSelect.addColumn("YN_READ", "string");

        	this.dsAgreeSelect.addRow();
        	this.dsAgreeSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsAgreeSelect.setColumn(0, "DT_STD", this.dsList5.getColumn(this.dsList5.rowposition, "DT_STD"));
        	this.dsAgreeSelect.setColumn(0, "YN_READ", "Y");

        	var strSvcId    = "selectAgree";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        		inData      = "select32=dsAgreeSelect select33=dsAgreeSelect";
        		outData     = "dsList6=select320 dsList7=select330";
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
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	var tIdx = this.divData.form.tabData.tabindex;
        	if (errorCode == 0) {
        		if(tIdx == 0){
        			if(svcID == "select0") {
        				this.divData.form.tabData.tab1.form.divFile.form.set_enable(true);
        				// 첨부파일
        				//var cd_site = this.ccfCD_SITE.form.CDTextBox.value;
        				if(!this.gfnIsNull(this.dsBase.getColumn(0, "CD_PROJ"))){
        					var fileManager = {};
        					fileManager.CD_GUBUN = "DOS1";
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

        				this.edtCD_SAUP.set_value(this.dsBase.getColumn(0, "CD_SAUP"));
        				this.edtDS_SAUP.set_value(this.dsBase.getColumn(0, "DS_SAUP"));

        				if(!this.gfnIsNull(this.dsBase.getColumn(0, "CD_SAUP"))){
        					this.edtDS_SAUP.set_readonly(true);
        				}else{
        					this.edtDS_SAUP.set_readonly(false);
        				}

        				//TAB1 조회
        				this.gfnSetFormStatus(this, "");
        				this.fnSetButton();
        			} else if(svcID == "delete"){
        				this.getParentContext().close(true);
        			} else if (svcID == "combo") {

        				this.dsTY_PUSH_AHD.insertRow(0);
        				this.dsTY_PUSH_AHD.setColumn(0, "CD_CODE", "");
        				this.dsTY_PUSH_AHD.setColumn(0, "DS_CODE", "");

        				if(this.gfnIsNull(this.getOwnerFrame().CD_PROJ)){
        					this.divData.form.tabData.tab1.form.ccboTY_BIZ.set_index(0);
        					this.divData.form.tabData.tab1.form.ccboCD_CLS.set_index(0);
        					this.divData.form.tabData.tab1.form.ccboTY_PUSH_AHD.set_index(0);
        				}
        			} else if(svcID == "save") {
        				this.dsSearch.setColumn(0, "CD_PROJ", this.dsBaseRst.getColumn(0, "OUT_DATA"))
        				this.FormBtns.Select.click();
        			}else if(svcID =="hqCreate") {
        				this.FormBtns.Select.click();
        			}
        		} else if(tIdx == 1){
        			if(svcID == "select1"){
        				this.dxGrid1.selecttype = "row";
        				this.dxGrid1.selectRow(this.dxGrid1.getDatasetRow(1));
        			} else if(svcID == "delete1"){
        				this.FormBtns.Select.click();
        			}
        		} else if(tIdx == 2){
        			if(svcID == "select2"){
        				this.dxGrid3.selecttype = "row";
        				this.dxGrid3.selectRow(this.dxGrid3.getDatasetRow(1));
        			}  else if(svcID == "delete2"){
        				this.FormBtns.Select.click();
        			}
        		} else if(tIdx == 3){
        			if(svcID == "select3"){
        				this.dxGrid5.selecttype = "row";
        				this.dxGrid5.selectRow(this.dxGrid5.getDatasetRow(0));
        			}  else if(svcID == "delete3"){
        				this.FormBtns.Select.click();
        			}
        		} else if(tIdx == 4){
        			if(svcID == "select4"){
        			}
        		} else if(tIdx == 5){
        			if(svcID == "select5"){
        			}
        		} else if(tIdx == 6){
        			if(svcID == "select6"){
        				this.fnSelect_Auth();
        			}else if(svcID == "select7"){
        			}else{
        			}
        		} else{
        		}

        	} else {
        		this.gfnAlert(errorMsg);
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsBase_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		if(this.gfnGetFormStatus(this) == "I"){
        			this.gfnSetFormStatus(this, "I");
        		}else{
        			this.gfnSetFormStatus(this, "U");
        		}
        		this.fnSetButton();

        // 		if(e.columnid == "CD_CLS"){
        // 			var codeFindNm = "";
        // 			this.divData.form.tabData.tab1.form.ccfCD_CLS_CONST.set_enable(true);
        // 			if(e.newvalue == "SA00201"){	// 토목
        // 				codeFindNm = "CF_CODE_DO_27";
        // 			} else if(e.newvalue == "SA00202"){	// 공사
        // 				codeFindNm = "CF_CODE_DO_28";
        // 			} else if(e.newvalue == "SA00203"){	// 플랜트
        // 				codeFindNm = "CF_CODE_DO_29";
        // 			} else{
        // 				this.divData.form.tabData.tab1.form.ccfCD_CLS_CONST.set_enable(false);
        // 			}
        // 			//상품분류 코드 초기화
        // 			this.divData.form.tabData.tab1.form.ccfCD_CLS_CONST.form.CDTextBox.set_value("");
        // 			this.divData.form.tabData.tab1.form.ccfCD_CLS_CONST.form.DSTextBox.set_value("");
        // 			this.divData.form.tabData.tab1.form.ccfCD_CLS_CONST.CodeFindName =  codeFindNm;
        // 		}
        	}
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

        this.fnBtnDisplay = function(flag){
        	if(flag == "ANALISYS"){
        		if(this.dsList1.rowposition > -1){
        			this.divData.form.tabData.tab2.form.btnRegJvFirm.set_enable(true);
        		}else{
        			this.divData.form.tabData.tab2.form.btnRegJvFirm.set_enable(false);
        		}
        	}else if(flag == "CONSOR"){
        		if(this.dsList3.rowposition > -1){
        			this.divData.form.tabData.tab3.form.btnRegConsorFirm.set_enable(true);
        		}else{
        			this.divData.form.tabData.tab3.form.btnRegConsorFirm.set_enable(false);
        		}
        	}else if(flag == "AGREE"){

        	}
        };

        this.divData_tabData_btnReg_onclick = function(obj,e){
        	var tIdx = this.divData.form.tabData.tabindex;

        	var popStr = "";
        	var _width = 0;
        	switch(tIdx) {
        		case 0:
        		case 1:
        		case 2:
        		case 3:
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
        	  , TY_VENDOR : ""
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
        	if(svcID.indexOf("DOC_SOC_JV") > 0){
        		this.fnJvFirmSelect();
        	} else if(svcID.indexOf("DOC_SOC_CONSOR_FIRM") > 0){
        		this.fnConsorFirmSelect();
        	} else if(svcID.indexOf("DOC_SOC_ANALYSIS") > 0){
        		if(!this.gfnIsNull(value)){
        			this.fnSelect();
        			var nRow = this.dsList1.findRow( "DT_STD", value);
        			if(nRow>0){
        					this.dxGrid1.selectRow(this.dxGrid1.getDatasetRow(nRow));
        			}
        		}
        	} else if(svcID.indexOf("DOC_SOC_CONSOR") > 0){
        		if(!this.gfnIsNull(value)){
        			this.fnSelect();
        			var nRow = this.dsList3.findRow( "NO_CONSOR", value);
        			if(nRow>0){
        					this.dxGrid3.selectRow(this.dxGrid3.getDatasetRow(nRow));
        			}
        		}
        	}else{
        		this.fnSelect();
        	}
        };

        this.fnContCreate = function(){
        	var param = {
        		CD_PROJ  : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ  : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , CD_FIELD : this.dsBase.getColumn(0, "CD_FIELD")
        	  , NO_CONT : this.dsBase.getColumn(0, "NO_CONT")
        	  , NO_CHG_CONT : this.dsBase.getColumn(0, "NO_CHG_CONT")
        	}
        	this.gfnFormOpen("DOD", "DOD_SOC_CONT", "fnDialogCallback", param, 1320, 880);
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
        	if (!this.gfnGridIsRow(this.dxGrid1)) { return false; }

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , DT_STD : this.dsList1.getColumn(this.dsList1.rowposition, "DT_STD")
        	  , ANALISYS_GUBUN : "U"
        	}

        	this.gfnFormOpen("DOC", "DOC_SOC_ANALYSIS", "fnDialogCallback", param, 780, 510);
        };

        // 참여사구성 버튼
        this.divData_tabData_tab2_btnRegJvFirm_onclick = function(obj,e){
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid1)) { return false; }
        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , DT_STD : this.dsList1.getColumn(this.dsList1.rowposition, "DT_STD")
        	}

        	this.gfnFormOpen("DOC", "DOC_SOC_JV", "fnDialogCallback", param, 835, 540);
        };


        // 컨소시엄 등록 버튼
        this.divData_tabData_tab3_btnRegConsor_onclick = function(obj,e){
        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , CONSOR_GUBUN : "I"
        	}

        	this.gfnFormOpen("DOC", "DOC_SOC_CONSOR", "fnDialogCallback", param, 780, 450);
        };

        // 컨소시엄 편집 버튼
        this.divData_tabData_tab3_btnUpdConsor_onclick = function(obj,e){
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid3)) { return false; }

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , NO_CONSOR : this.dsList3.getColumn(this.dsList3.rowposition, "NO_CONSOR")
        	  , CONSOR_GUBUN : "U"
        	}

        	this.gfnFormOpen("DOC", "DOC_SOC_CONSOR", "fnDialogCallback", param, 780, 450);

        };

        // 컨소시엄 참여사 구성 버튼
        this.divData_tabData_tab3_btnRegConsorFirm_onclick = function(obj,e){
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid3)) { return false; }

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , NO_CONSOR : this.dsList3.getColumn(this.dsList3.rowposition, "NO_CONSOR")
        	}

        	this.gfnFormOpen("DOC", "DOC_SOC_CONSOR_FIRM", "fnDialogCallback", param, 835, 540);
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
        	if (!this.gfnGridIsRow(this.dxGrid5)) { return false; }

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , DT_STD : this.dsList5.getColumn(this.dsList5.rowposition, "DT_STD")
        	  , DS_STD : this.dsList5.getColumn(this.dsList5.rowposition, "DS_STD")
        	  , AGREE_GUBUN : "U"
        	}

        	this.gfnFormOpen("DOC", "DOC_SOC_AGREE", "fnDialogCallback", param, 1050, 850);

        };

        this.divData_tabData_tab2_objGrdtab1_onselectchanged = function(obj,e){
        	if(e.row<0) return;
        	this.fnJvFirmSelect();
        	this.fnBtnDisplay("ANALISYS");
        };

        this.divData_tabData_tab3_objGrdtab3_onselectchanged = function(obj,e){
        	if(e.row<0) return;
        	this.fnConsorFirmSelect();
        	this.fnBtnDisplay("CONSOR");
        };

        this.divData_tabData_tab4_objGrdtab5_onselectchanged = function(obj,e){
        	if(e.row<0) return;
        	this.fnAgreeDetailSelect();
        };

        // 사업성분석 삭제
        this.divData_tabData_tab2_btnDelAnalysis_onclick = function(obj,e){
        	// 선택된 row가 있을 경우에만 삭제
        	if (!this.gfnGridIsRow(this.dxGrid1)) { return false; }

        	this.gfnConfirm("사업성분석 삭제 하시겠습니까?", function(strId, val){
        		if(val == true) {

        			this.dsDelTab.clearData();
        			this.dsDelTab.addRow();

        			this.dsDelTab.setColumn(0, "CD_PROJ", this.dsList1.getColumn(this.dsList1.rowposition, "CD_PROJ"));
        			this.dsDelTab.setColumn(0, "DT_STD", this.dsList1.getColumn(this.dsList1.rowposition, "DT_STD"));
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

        // 경쟁컨소시엄 삭제
        this.divData_tabData_tab3_btnDelConsor_onclick = function(obj,e){
        	// 선택된 row가 있을 경우에만 삭제
        	if (!this.gfnGridIsRow(this.dxGrid3)) { return false; }

        	this.gfnConfirm("삭제 하시겠습니까?", function(strId, val){
        		if(val == true) {

        			this.dsDelTab.clearData();
        			this.dsDelTab.addRow();

        			this.dsDelTab.setColumn(0, "CD_PROJ", this.dsList3.getColumn(this.dsList3.rowposition, "CD_PROJ"));
        			this.dsDelTab.setColumn(0, "DT_STD", "");
        			this.dsDelTab.setColumn(0, "NO_CONSOR", this.dsList3.getColumn(this.dsList3.rowposition, "NO_CONSOR"));

        			var strSvcId    = "delete2";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "delete2=dsDelTab";
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

        // 금융약정 삭제
        this.divData_tabData_tab4_btnDelAgree_onclick = function(obj,e){
        	// 선택된 row가 있을 경우에만 삭제
        	if (!this.gfnGridIsRow(this.dxGrid5)) { return false; }

        	this.gfnConfirm("삭제 하시겠습니까?", function(strId, val){
        		if(val == true) {

        			this.dsDelTab.clearData();
        			this.dsDelTab.addRow();

        			this.dsDelTab.setColumn(0, "CD_PROJ", this.dsList5.getColumn(this.dsList5.rowposition, "CD_PROJ"));
        			this.dsDelTab.setColumn(0, "DT_STD", this.dsList5.getColumn(this.dsList5.rowposition, "DT_STD"));
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
        	if (!this.gfnGridIsRow(this.dxGrid1)) { return false; }

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , DT_STD : this.dsList1.getColumn(this.dsList1.rowposition, "DT_STD")
        	  , ANALISYS_GUBUN : "U"
        	}

        	this.gfnFormOpen("DOC", "DOC_SOC_ANALYSIS", "fnDialogCallback", param, 780, 510);
        };

        this.divData_tabData_tab3_objGrdtab3_oncelldblclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid3)) { return false; }

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , NO_CONSOR : this.dsList3.getColumn(this.dsList3.rowposition, "NO_CONSOR")
        	  , CONSOR_GUBUN : "U"
        	}

        	this.gfnFormOpen("DOC", "DOC_SOC_CONSOR", "fnDialogCallback", param, 780, 450);
        };

        this.divData_tabData_tab4_objGrdtab5_oncelldblclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid5)) { return false; }

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , DT_STD : this.dsList5.getColumn(this.dsList5.rowposition, "DT_STD")
        	  , DS_STD : this.dsList5.getColumn(this.dsList5.rowposition, "DS_STD")
        	  , AGREE_GUBUN : "U"
        	}

        	this.gfnFormOpen("DOC", "DOC_SOC_AGREE", "fnDialogCallback", param, 1050, 850);
        };

        this.divData_tabData_tab3_staTab1Title01_00_onclick = function(obj,e)
        {

        };

        this.fnVendor = function(){
            var param = {};
            this.gfnFormOpen("DHZ", "DHZ_VENDORALL", "fnDialogCallback", param, 980, 720);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctxtDS_PROJ.addEventHandler("onchanged",this.divSearch_ctxtDS_PROJ_onchanged,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab1.form.staAM_CONT00.addEventHandler("onclick",this.divData_tabData_tab1_staAM_CONT00_onclick,this);
            this.divData.form.tabData.tab1.form.staNO_TERM_OP00.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TERM_OP00_onclick,this);
            this.divData.form.tabData.tab1.form.ctxtDS_GWLINK2.addEventHandler("onchanged",this.divData_tabData_tab1_ctxtDS_GWLINK2_onchanged,this);
            this.divData.form.tabData.tab1.form.btnDS_GWLINK1.addEventHandler("onclick",this.divData_tabData_tab1_btnDS_GWLINK_onclick,this);
            this.divData.form.tabData.tab1.form.btnDS_GWLINK2.addEventHandler("onclick",this.divData_tabData_tab1_btnDS_GWLINK_onclick,this);
            this.divData.form.tabData.tab1.form.btnDS_GWLINK3.addEventHandler("onclick",this.divData_tabData_tab1_btnDS_GWLINK_onclick,this);
            this.divData.form.tabData.tab1.form.btnDS_GWLINK4.addEventHandler("onclick",this.divData_tabData_tab1_btnDS_GWLINK_onclick,this);
            this.divData.form.tabData.tab2.form.btnUpdAnalysis.addEventHandler("onclick",this.divData_tabData_tab2_btnUpdAnalysis_onclick,this);
            this.divData.form.tabData.tab2.form.btnRegAnalysis.addEventHandler("onclick",this.divData_tabData_tab2_btnRegAnalysis_onclick,this);
            this.divData.form.tabData.tab2.form.objGrdtab1.addEventHandler("onselectchanged",this.divData_tabData_tab2_objGrdtab1_onselectchanged,this);
            this.divData.form.tabData.tab2.form.objGrdtab1.addEventHandler("oncelldblclick",this.divData_tabData_tab2_objGrdtab1_oncelldblclick,this);
            this.divData.form.tabData.tab2.form.btnRegJvFirm.addEventHandler("onclick",this.divData_tabData_tab2_btnRegJvFirm_onclick,this);
            this.divData.form.tabData.tab2.form.btnDelAnalysis.addEventHandler("onclick",this.divData_tabData_tab2_btnDelAnalysis_onclick,this);
            this.divData.form.tabData.tab3.form.staTab1Title01_00.addEventHandler("onclick",this.divData_tabData_tab3_staTab1Title01_00_onclick,this);
            this.divData.form.tabData.tab3.form.btnRegConsor.addEventHandler("onclick",this.divData_tabData_tab3_btnRegConsor_onclick,this);
            this.divData.form.tabData.tab3.form.btnUpdConsor.addEventHandler("onclick",this.divData_tabData_tab3_btnUpdConsor_onclick,this);
            this.divData.form.tabData.tab3.form.objGrdtab3.addEventHandler("onselectchanged",this.divData_tabData_tab3_objGrdtab3_onselectchanged,this);
            this.divData.form.tabData.tab3.form.objGrdtab3.addEventHandler("oncelldblclick",this.divData_tabData_tab3_objGrdtab3_oncelldblclick,this);
            this.divData.form.tabData.tab3.form.btnRegConsorFirm.addEventHandler("onclick",this.divData_tabData_tab3_btnRegConsorFirm_onclick,this);
            this.divData.form.tabData.tab3.form.btnDelConsor.addEventHandler("onclick",this.divData_tabData_tab3_btnDelConsor_onclick,this);
            this.divData.form.tabData.tab4.form.btnRegAgree.addEventHandler("onclick",this.divData_tabData_tab4_btnRegAgree_onclick,this);
            this.divData.form.tabData.tab4.form.btnUpdAgree.addEventHandler("onclick",this.divData_tabData_tab4_btnUpdAgree_onclick,this);
            this.divData.form.tabData.tab4.form.objGrdtab5.addEventHandler("onselectchanged",this.divData_tabData_tab4_objGrdtab5_onselectchanged,this);
            this.divData.form.tabData.tab4.form.objGrdtab5.addEventHandler("oncelldblclick",this.divData_tabData_tab4_objGrdtab5_oncelldblclick,this);
            this.divData.form.tabData.tab4.form.btnDelAgree.addEventHandler("onclick",this.divData_tabData_tab4_btnDelAgree_onclick,this);
            this.divData.form.tabData.tab5.form.btnReg.addEventHandler("onclick",this.divData_tabData_btnReg_onclick,this);
            this.divData.form.tabData.tab6.form.btnReg.addEventHandler("onclick",this.divData_tabData_btnReg_onclick,this);
            this.divData.form.tabData.tab7.form.btnReg.addEventHandler("onclick",this.divData_tabData_btnReg_onclick,this);
            this.divData.form.tabData.tab7.form.btnReg00.addEventHandler("onclick",this.divData_tabData_btnReg_Auth_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsBase.addEventHandler("onvaluechanged",this.dsBase_onvaluechanged,this);
        };
        this.loadIncludeScript("DOC_SOC_PROJ.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
