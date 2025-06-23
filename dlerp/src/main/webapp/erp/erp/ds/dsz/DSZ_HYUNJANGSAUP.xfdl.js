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
            this.set_titletext("현장사업내역관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITECHA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GONGSA\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GONGSA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_GEYAK\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_JAERYO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_GONGSAFR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GONGSATO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SILCHAKGONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JUNGONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SAUPSTART\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GOYONGEND\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SAUPJANG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SANJAE\" type=\"STRING\" size=\"256\"/><Column id=\"AT_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BALJU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BALJUADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SINGO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SAMUSO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAMUSO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BONBU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BONBU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UPJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SITESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GOYONG\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SANJAE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GONGDONG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SANJAE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_WOIJU\" type=\"STRING\" size=\"256\"/><Column id=\"TY_NOMU\" type=\"STRING\" size=\"256\"/><Column id=\"RT_JIBUN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DANGSADOGUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_SIGONG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SIGONG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_BUMUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BALJU\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SUGUB\" type=\"STRING\" size=\"256\"/><Column id=\"TY_HAJA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_WORK_PERMISSION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MANAGER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SINGO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TY_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RETIRE_DEDUCT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_KOOKMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GUNGANG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEOIJIK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEDUCT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_FERP_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSGPR_HYUNJANGSAUPLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_CODE_LIST_SELECT</Col></Row><Row><Col id=\"SP\">DSGPR_HYUNJANGSAUPLIST_SAVE</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DSGPR_HYUNJANGSAUPLIST_SAVE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DSGPR_HYUNJANGSAUPLIST_SAVE</Col></Row><Row><Col id=\"TARGET\">addInit</Col><Col id=\"SP\">DSGPR_HYUNJANGSAUPLIST_NEW</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SITESTATE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">계속</Col><Col id=\"VALUE\">계속</Col></Row><Row><Col id=\"CODE\">종료</Col><Col id=\"VALUE\">종료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SUGUB", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">원수급</Col><Col id=\"VALUE\">원수급</Col></Row><Row><Col id=\"CODE\">하수급</Col><Col id=\"VALUE\">하수급</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_RADIO", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">적용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">미적용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_HAJA", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_BALJU", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GONGDONG", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">DS_SITECHA</Col><Col id=\"DS_FIELD\">현장명</Col></Row><Row><Col id=\"CD_FIELD\">DS_GONGSA</Col><Col id=\"DS_FIELD\">공사명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_JOIN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"VALUE\">본사불</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">현장불</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelect", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListInit", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"INT\" size=\"256\"/><Column id=\"DS_SITECHA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GONGSA\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GONGSA\" type=\"INT\" size=\"256\"/><Column id=\"AM_GEYAK\" type=\"INT\" size=\"256\"/><Column id=\"AM_JAERYO\" type=\"INT\" size=\"256\"/><Column id=\"AM_DANGSADOGUB\" type=\"INT\" size=\"256\"/><Column id=\"CD_BUMUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GONGSAFR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GONGSATO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SILCHAKGONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JUNGONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SAUPSTART\" type=\"STRING\" size=\"256\"/><Column id=\"RT_SIGONG\" type=\"INT\" size=\"256\"/><Column id=\"AM_SIGONG\" type=\"INT\" size=\"256\"/><Column id=\"NO_SAUPJANG\" type=\"STRING\" size=\"256\"/><Column id=\"AT_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BALJU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BALJUADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BALJU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UPJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MANAGER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SINGO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_KOOKMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GUNGANG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SITESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SUGUB\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GONGDONG\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GOYONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GOYONGEND\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SANJAE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SANJAE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RETIRE_DEDUCT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEDUCT\" type=\"INT\" size=\"256\"/><Column id=\"RT_JIBUN\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DSX_CFCORP");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","800","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("공사정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData01","0","32",null,"205","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","0","0",null,"30","0",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta12","0","29",null,"30","0",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta13","0","58",null,"30","0",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta14","0","87",null,"30","0",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta15","0","116",null,"30","0",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta16","0","145",null,"30","0",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta17","0","174",null,"30","0",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj.set_text("현장명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta02","0","29","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("공사명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta03","0","58","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("2");
            obj.set_text("총공사금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta04","0","87","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("3");
            obj.set_text("계약금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta05","0","116","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("4");
            obj.set_text("재료환산액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta06","0","145","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("5");
            obj.set_text("당사도급");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta07","0","174","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_text("사업구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta21","492","0","118","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("14");
            obj.set_text("공사기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta22","492","29","118","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("15");
            obj.set_text("실착공일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta23","492","58","118","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("16");
            obj.set_text("준공예정일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta24","492","87","118","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("17");
            obj.set_text("사업개시일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta26","492","116","118","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("18");
            obj.set_text("시공지분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta27","492","145","118","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("19");
            obj.set_text("시공금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_SITECHA","125","5","257","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("25");
            obj.set_autoselect("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_GONGSA","125","34","257","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("26");
            obj.set_autoselect("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_GONGSA","125","63","165","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("40");
            obj.set_format("9,999");
            obj.set_autoselect("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_GEYAK","125","92","165","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("27");
            obj.set_format("9,999");
            obj.set_autoselect("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_JAERYO","125","121","165","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("28");
            obj.set_format("9,999");
            obj.set_autoselect("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DANGSADOGUB","125","150","165","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("29");
            obj.set_format("9,999");
            obj.set_autoselect("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_GONGSAFR","615","5","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_GONGSA_range","725","5","10","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("23");
            obj.set_text("~");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_GONGSATO","740","5","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_SILCHAKGONG","615","34","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("21");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_JUNGONG","615","63","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_SAUPSTART","615","92","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("31");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_SIGONG","615","121","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("32");
            obj.set_format("9,999.99");
            obj.set_autoselect("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SIGONG","615","150","125","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("33");
            obj.set_format("9,999");
            obj.set_autoselect("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta00","295","92","20","19",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("34");
            obj.set_text("원");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta08","295","121","20","19",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("35");
            obj.set_text("원");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta09","295","63","20","19",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("36");
            obj.set_text("원");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta10","295","151","20","19",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("37");
            obj.set_text("원");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta18","745","150","20","19",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("38");
            obj.set_text("원");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta19","725","121","20","19",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("39");
            obj.set_text("%");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboTY_HAJA","125","179","125","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsTY_HAJA");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_autoselect("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta02","0","247","800","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현장정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData02","0","279",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta211","0","0",null,"30","0",null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta212","0","29",null,"30","0",null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta213","0","58",null,"30","0",null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta214","0","87",null,"30","0",null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta215","0","116",null,"30","0",null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta216","0","145",null,"30","0",null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta217","0","174",null,"30","0",null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta218","0","203",null,"30","0",null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta219","0","232",null,"30","0",null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta239","0","261",null,"30","0",null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta240","0","290",null,"30","0",null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta201","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("0");
            obj.set_text("사업장관리번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta202","0","29","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("소재지");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta203","0","58","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("6");
            obj.set_text("TEL / FAX");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta204","0","87","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("7");
            obj.set_text("발주자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta205","0","116","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("8");
            obj.set_text("발주자주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta206","0","145","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("9");
            obj.set_text("발주자구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta207","0","174","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("10");
            obj.set_text("업종구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta208","0","203","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("11");
            obj.set_text("사업종류");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta209","0","232","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("12");
            obj.set_text("현장소장 / 대리인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta229","0","261","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("31");
            obj.set_text("국민연금관리번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta230","0","290","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("33");
            obj.set_text("건강보험관리번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta221","492","0","118","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("22");
            obj.set_text("현장분류");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta222","492","29","118","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("24");
            obj.set_text("현장상태");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta223","492","58","118","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("25");
            obj.set_text("수급형태");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta224","492","87","118","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("26");
            obj.set_text("공동도급구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta225","492","116","118","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("27");
            obj.set_text("고용보험적용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta25","492","145","118","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("23");
            obj.set_text("고용보험소멸일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta226","492","174","118","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("28");
            obj.set_text("산재보험적용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta227","492","203","118","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("29");
            obj.set_text("산재보험개시번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta228","492","232","118","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("30");
            obj.set_text("퇴직공제부금적용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta241","492","261","118","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("32");
            obj.set_text("퇴직공제부금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtNO_SAUPJANG","125","5","125","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("36");
            obj.set_autoselect("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtDS_MANAGER_NAME","125","237","125","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("37");
            obj.set_autoselect("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtDS_SINGO_NAME","253","237","125","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("39");
            obj.set_autoselect("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtAT_SITE","125","34","257","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("40");
            obj.set_autoselect("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL","125","63","125","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("41");
            obj.set_autoselect("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtNO_FAX","255","63","125","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("42");
            obj.set_autoselect("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtDS_BALJU","125","93","257","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("43");
            obj.set_autoselect("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtDS_BALJUADDR","125","121","257","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("44");
            obj.set_autoselect("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("cfCD_UPJONG","125","178","257","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("DSX_CFUPJONG_CODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("cfCD_SAUP","125","208","257","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("DSX_CFSAUP_CODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("45");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Combo("cboTY_BALJU","125","150","125","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("46");
            obj.set_innerdataset("dsTY_BALJU");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_autoselect("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Combo("cboTY_GONGDONG","615","92","125","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("47");
            obj.set_innerdataset("dsTY_GONGDONG");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_autoselect("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("cfTY_SITE","615","5","257","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("DSX_CFSITETYPE_CODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("48");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_JIBUN","615","295","65","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("50");
            obj.set_format("9,999.99");
            obj.set_autoselect("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta19","685","295","20","19",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("49");
            obj.set_text("%");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Radio("rdoTY_SITESTATE","615","34","200","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_SITESTATE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Radio("rdoTY_SUGUB","615","61","200","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_SUGUB");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Radio("rdoYN_GOYONG","615","121","200","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsYN_RADIO");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Calendar("tclDT_GOYONGEND","615","150","105","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("38");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SANJAE","615","179","200","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("51");
            obj.set_innerdataset("dsYN_RADIO");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta00","492","290","118","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("52");
            obj.set_text("지분율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtNO_KOOKMIN","125","266","257","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("53");
            obj.set_autoselect("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtNO_GUNGANG","125","295","257","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("54");
            obj.set_autoselect("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtNO_SANJAE","615","208","257","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("55");
            obj.set_autoselect("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Radio("rdoYN_RETIRE_DEDUCT","615","239","200","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("56");
            obj.set_innerdataset("dsYN_RADIO");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_DEDUCT","615","266","125","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("57");
            obj.set_format("9,999");
            obj.set_autoselect("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta242","0","319",null,"30","0",null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta243","0","319","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("59");
            obj.set_text("국민연금공단");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta244","492","319","118","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("60");
            obj.set_text("공단계좌");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta245","892","319","118","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("61");
            obj.set_text("검증상태");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtDS_KOOKMIN_YESU","125","324","257","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("62");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtNO_KOOKMIN_YESU","615","324","257","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("63");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new CheckBox("chkKOOKMIN_YESU_CHECK","sta245:10","324","150","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("64");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta246","0","348",null,"30","0",null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta247","0","348","120","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("66");
            obj.set_text("건강보험공단");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta248","492","348","118","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("67");
            obj.set_text("공단계좌");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtNO_HEALTH_YESU","615","353","257","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("68");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta249","892","348","118","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("69");
            obj.set_text("검증상태");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new CheckBox("chkHEALTH_YESU_CHECK","sta249:10","353","150","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("70");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtDS_HEALTH_YESU","125","353","257","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("71");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divData01.form.txtDS_SITECHA","value","dsList","DS_SITECHA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divData01.form.txtDS_GONGSA","value","dsList","DS_GONGSA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divData01.form.txtAM_GEYAK","value","dsList","AM_GEYAK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divData01.form.txtAM_JAERYO","value","dsList","AM_JAERYO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData01.form.txtAM_DANGSADOGUB","value","dsList","AM_DANGSADOGUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divData01.form.cboTY_HAJA","value","dsList","TY_HAJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divData01.form.tclDT_GONGSAFR","value","dsList","DT_GONGSAFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divData01.form.tclDT_GONGSATO","value","dsList","DT_GONGSATO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divData01.form.tclDT_SILCHAKGONG","value","dsList","DT_SILCHAKGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divData01.form.tclDT_JUNGONG","value","dsList","DT_JUNGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData01.form.tclDT_SAUPSTART","value","dsList","DT_SAUPSTART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divData02.form.tclDT_GOYONGEND","value","dsList","DT_GOYONGEND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divData02.form.txtNO_SAUPJANG","value","dsList","NO_SAUPJANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divData02.form.txtAT_SITE","value","dsList","AT_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divData01.form.txtAM_GONGSA","value","dsList","AM_GONGSA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divData01.form.txtRT_SIGONG","value","dsList","RT_SIGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divData01.form.txtAM_SIGONG","value","dsList","AM_SIGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divData02.form.txtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divData02.form.txtNO_FAX","value","dsList","NO_FAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divData02.form.txtDS_BALJU","value","dsList","DS_BALJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divData02.form.txtDS_BALJUADDR","value","dsList","DS_BALJUADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divData02.form.cboTY_BALJU","value","dsList","TY_BALJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divData02.form.cfCD_UPJONG.form.CDTextBox","value","dsList","CD_UPJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divData02.form.cfCD_SAUP.form.CDTextBox","value","dsList","CD_SAUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divData02.form.cfTY_SITE.form.CDTextBox","value","dsList","TY_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divData02.form.rdoTY_SUGUB","value","dsList","TY_SUGUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divData02.form.cboTY_GONGDONG","value","dsList","TY_GONGDONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divData02.form.rdoYN_GOYONG","value","dsList","YN_GOYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divData02.form.rdoYN_SANJAE","value","dsList","YN_SANJAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divData02.form.txtRT_JIBUN","value","dsList","RT_JIBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divData02.form.txtDS_MANAGER_NAME","value","dsList","DS_MANAGER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divData02.form.txtDS_SINGO_NAME","value","dsList","DS_SINGO_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divData02.form.rdoTY_SITESTATE","value","dsList","TY_SITESTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divData02.form.cfCD_UPJONG.form.DSTextBox","value","dsList","DS_UPJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divData02.form.cfCD_SAUP.form.DSTextBox","value","dsList","DS_SAUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.divData02.form.cfTY_SITE.form.DSTextBox","value","dsList","DS_SITETYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.divData02.form.txtNO_KOOKMIN","value","dsList","NO_KOOKMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.divData02.form.txtNO_GUNGANG","value","dsList","NO_GUNGANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divData02.form.txtNO_SANJAE","value","dsList","NO_SANJAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.divData02.form.rdoYN_RETIRE_DEDUCT","value","dsList","YN_RETIRE_DEDUCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divData02.form.mskAM_DEDUCT","value","dsList","AM_DEDUCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.divData02.form.txtDS_KOOKMIN_YESU","value","dsList","DS_KOOKMIN_YESU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.divData02.form.txtNO_KOOKMIN_YESU","value","dsList","NO_KOOKMIN_YESU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.divData02.form.txtNO_HEALTH_YESU","value","dsList","NO_HEALTH_YESU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.divData02.form.txtDS_HEALTH_YESU","value","dsList","DS_HEALTH_YESU");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DSZ_HYUNJANGSAUP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

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

        	// 법인코드 및 법인명 기본세팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
            this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	var cd_site = "";
        	var ds_site = "";
        	if(!this.gfnIsNull(this.objApp.DW_SPACE98)) {
        		cd_site = this.objApp.DW_SPACE98;
        		ds_site = this.objApp.DW_SPACE99;
        	} else {
        		cd_site = this.AuthClient.CD_SITE;
        		ds_site = this.AuthClient.DS_SITE;
        	}
        	this.ccfCD_SITE.form.CDTextBox.set_value(cd_site);
            this.ccfCD_SITE.form.DSTextBox.set_value(ds_site);


        	// GR_SEARCH가 2보다 크면.. 법인코드 disable
        	// GR_SEARCH가 7또는 9 인경우 부서코드 disable
        	//trace("GR_SEARCH", this.FormInfo.GR_SEARCH);
        	if( this.FormInfo.GR_SEARCH  >= "2"){
        		this.divSearch.form.ccfCD_CORP.set_enable(false);
        	}

        	if(this.FormInfo.GR_SEARCH == "7" || this.FormInfo.GR_SEARCH == "9"){
        		this.divSearch.form.ccfCD_SITE.set_enable(false);
        	}

        	this.FormBtns.Select.click();

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
        	this.Apply_KOOKMIN = this.gfnFormButtonAdd("Apply_KOOKMIN", "fnApply_KOOKMIN"); //국민연금공단 계좌정보 등록
        	this.Apply_HEALTH = this.gfnFormButtonAdd("Apply_HEALTH", "fnApply_HEALTH"); //건강보험공단 계좌정보 등록
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.chkKOOKMIN_YESU_CHECK = this.divData.form.divData02.form.chkKOOKMIN_YESU_CHECK;
        	this.chkHEALTH_YESU_CHECK = this.divData.form.divData02.form.chkHEALTH_YESU_CHECK;
        	//this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_WBS");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsAddInit = new Dataset();
        	this.dsAddInit.addColumn("CD_CORP", "string");
        	this.dsAddInit.addColumn("CD_SITE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("TY_SAVE", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("DS_SITECHA", "string");
        	this.dsInsert.addColumn("DS_GONGSA", "string");
        	this.dsInsert.addColumn("AM_GONGSA", "bigdecimal");
        	this.dsInsert.addColumn("AM_GEYAK", "bigdecimal");
        	this.dsInsert.addColumn("AM_JAERYO", "bigdecimal");
        	this.dsInsert.addColumn("DT_GONGSAFR", "string");
        	this.dsInsert.addColumn("DT_GONGSATO", "string");
        	this.dsInsert.addColumn("DT_SILCHAKGONG", "string");
        	this.dsInsert.addColumn("DT_JUNGONG", "string");
        	this.dsInsert.addColumn("DT_SAUPSTART", "string");
        	this.dsInsert.addColumn("DT_GOYONGEND", "string");
        	this.dsInsert.addColumn("NO_SAUPJANG", "string");
        	this.dsInsert.addColumn("NO_SANJAE", "string");
        	this.dsInsert.addColumn("AT_SITE", "string");
        	this.dsInsert.addColumn("NO_TEL", "string");
        	this.dsInsert.addColumn("NO_FAX", "string");
        	this.dsInsert.addColumn("DS_BALJU", "string");
        	this.dsInsert.addColumn("DS_BALJUADDR", "string");
        	this.dsInsert.addColumn("DT_SINGO", "string");
        	this.dsInsert.addColumn("NO_SAMUSO", "string");
        	this.dsInsert.addColumn("CD_BONBU", "string");
        	this.dsInsert.addColumn("CD_UPJONG", "string");
        	this.dsInsert.addColumn("CD_SAUP", "string");
        	this.dsInsert.addColumn("CD_COST", "string");
        	this.dsInsert.addColumn("TY_SITE", "string");
        	this.dsInsert.addColumn("TY_SITESTATE", "string");
        	this.dsInsert.addColumn("YN_GOYONG", "string");
        	this.dsInsert.addColumn("YN_SANJAE", "string");
        	this.dsInsert.addColumn("TY_GONGDONG", "string");
        	this.dsInsert.addColumn("TY_SANJAE", "string");
        	this.dsInsert.addColumn("TY_WOIJU", "string");
        	this.dsInsert.addColumn("TY_NOMU", "string");
        	this.dsInsert.addColumn("RT_JIBUN", "bigdecimal");
        	this.dsInsert.addColumn("AM_DANGSADOGUB", "bigdecimal");
        	this.dsInsert.addColumn("RT_SIGONG", "bigdecimal");
        	this.dsInsert.addColumn("AM_SIGONG", "bigdecimal");
        	this.dsInsert.addColumn("CD_BUMUN", "string");
        	this.dsInsert.addColumn("TY_BALJU", "string");
        	this.dsInsert.addColumn("TY_SUGUB", "string");
        	this.dsInsert.addColumn("TY_HAJA", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("NO_WORK_PERMISSION", "string");
        	this.dsInsert.addColumn("DS_MANAGER_NAME", "string");
        	this.dsInsert.addColumn("DS_SINGO_NAME", "string");
        	this.dsInsert.addColumn("TY_JOIN", "string");
        	this.dsInsert.addColumn("YN_RETIRE_DEDUCT", "string");
        	this.dsInsert.addColumn("NO_KOOKMIN", "string");
        	this.dsInsert.addColumn("NO_GUNGANG", "string");
        	this.dsInsert.addColumn("NO_TEOIJIK", "string");
        	this.dsInsert.addColumn("AM_DEDUCT", "bigdecimal");
        	this.dsInsert.addColumn("CD_KOOKMIN_YESU", "string");
        	this.dsInsert.addColumn("DS_KOOKMIN_YESU", "string");
        	this.dsInsert.addColumn("CD_HEALTH_YESU", "string");
        	this.dsInsert.addColumn("DS_HEALTH_YESU", "string");
        	this.dsInsert.addColumn("NO_KOOKMIN_YESU", "string");
        	this.dsInsert.addColumn("NO_HEALTH_YESU", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("GR_SEARCH", "string");
        	this.dsInsert.addColumn("GR_CORP", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("TY_SAVE", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("DS_SITECHA", "string");
        	this.dsUpdate.addColumn("DS_GONGSA", "string");
        	this.dsUpdate.addColumn("AM_GONGSA", "bigdecimal");
        	this.dsUpdate.addColumn("AM_GEYAK", "bigdecimal");
        	this.dsUpdate.addColumn("AM_JAERYO", "bigdecimal");
        	this.dsUpdate.addColumn("DT_GONGSAFR", "string");
        	this.dsUpdate.addColumn("DT_GONGSATO", "string");
        	this.dsUpdate.addColumn("DT_SILCHAKGONG", "string");
        	this.dsUpdate.addColumn("DT_JUNGONG", "string");
        	this.dsUpdate.addColumn("DT_SAUPSTART", "string");
        	this.dsUpdate.addColumn("DT_GOYONGEND", "string");
        	this.dsUpdate.addColumn("NO_SAUPJANG", "string");
        	this.dsUpdate.addColumn("NO_SANJAE", "string");
        	this.dsUpdate.addColumn("AT_SITE", "string");
        	this.dsUpdate.addColumn("NO_TEL", "string");
        	this.dsUpdate.addColumn("NO_FAX", "string");
        	this.dsUpdate.addColumn("DS_BALJU", "string");
        	this.dsUpdate.addColumn("DS_BALJUADDR", "string");
        	this.dsUpdate.addColumn("DT_SINGO", "string");
        	this.dsUpdate.addColumn("NO_SAMUSO", "string");
        	this.dsUpdate.addColumn("CD_BONBU", "string");
        	this.dsUpdate.addColumn("CD_UPJONG", "string");
        	this.dsUpdate.addColumn("CD_SAUP", "string");
        	this.dsUpdate.addColumn("CD_COST", "string");
        	this.dsUpdate.addColumn("TY_SITE", "string");
        	this.dsUpdate.addColumn("TY_SITESTATE", "string");
        	this.dsUpdate.addColumn("YN_GOYONG", "string");
        	this.dsUpdate.addColumn("YN_SANJAE", "string");
        	this.dsUpdate.addColumn("TY_GONGDONG", "string");
        	this.dsUpdate.addColumn("TY_SANJAE", "string");
        	this.dsUpdate.addColumn("TY_WOIJU", "string");
        	this.dsUpdate.addColumn("TY_NOMU", "string");
        	this.dsUpdate.addColumn("RT_JIBUN", "bigdecimal");
        	this.dsUpdate.addColumn("AM_DANGSADOGUB", "bigdecimal");
        	this.dsUpdate.addColumn("RT_SIGONG", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SIGONG", "bigdecimal");
        	this.dsUpdate.addColumn("CD_BUMUN", "string");
        	this.dsUpdate.addColumn("TY_BALJU", "string");
        	this.dsUpdate.addColumn("TY_SUGUB", "string");
        	this.dsUpdate.addColumn("TY_HAJA", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("NO_WORK_PERMISSION", "string");
        	this.dsUpdate.addColumn("DS_MANAGER_NAME", "string");
        	this.dsUpdate.addColumn("DS_SINGO_NAME", "string");
        	this.dsUpdate.addColumn("TY_JOIN", "string");
        	this.dsUpdate.addColumn("YN_RETIRE_DEDUCT", "string");
        	this.dsUpdate.addColumn("NO_KOOKMIN", "string");
        	this.dsUpdate.addColumn("NO_GUNGANG", "string");
        	this.dsUpdate.addColumn("NO_TEOIJIK", "string");
        	this.dsUpdate.addColumn("AM_DEDUCT", "bigdecimal");
        	this.dsUpdate.addColumn("CD_KOOKMIN_YESU", "string");
        	this.dsUpdate.addColumn("DS_KOOKMIN_YESU", "string");
        	this.dsUpdate.addColumn("CD_HEALTH_YESU", "string");
        	this.dsUpdate.addColumn("DS_HEALTH_YESU", "string");
        	this.dsUpdate.addColumn("NO_KOOKMIN_YESU", "string");
        	this.dsUpdate.addColumn("NO_HEALTH_YESU", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("GR_SEARCH", "string");
        	this.dsUpdate.addColumn("GR_CORP", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("TY_SAVE", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP")); //법인코드
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE")); //현장코드

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
        	if(this.dsList.rowcount == 0){
        // 		this.dsList.addRow();
        // 		this.gfnSetFormStatus(this, "I");
        //
        // 		var sCD_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.value;
        // 		this.dsList.setColumn(0, "DS_SITECHA", sCD_SITE);
        // 		this.dsList.setColumn(0, "DS_GONGSA", sCD_SITE);

        		this.fnAddInit();
        	}else{
        		var nRowType = this.dsList.getRowType(0);
        		if(nRowType == Dataset.ROWTYPE_INSERT){
        			this.dsList.clearData();
        			this.fnAddInit();
        		}else{
        			return;
        		}
        	}
        }

        /*
          *	행추가 초기화 데이타
          */
        this.fnAddInit = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsAddInit.clearData();
        	this.dsAddInit.addRow();

        	this.dsAddInit.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsAddInit.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	var strSvcId    = "addInit";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "addInit=dsAddInit";
        	var outData     = "dsListInit=addInit0";
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

        this.fnAddInitCallback = function(){
        	this.dsList.addRow();
        	this.gfnSetFormStatus(this, "I");

        	if(this.dsListInit.rowcount == 0){
        		//alert("기초데이타가없습니다");
        		trace("기초데이타가없습니다.");
        		var sCD_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.value;
        		this.dsList.setColumn(0, "DS_SITECHA", sCD_SITE);
        		this.dsList.setColumn(0, "DS_GONGSA", sCD_SITE);
        	}else{
        		this.dsList.setColumn(0, "CD_CORP", this.dsListInit.getColumn(0, "CD_CORP"));
        		this.dsList.setColumn(0, "CD_SITE", this.dsListInit.getColumn(0, "CD_SITE"));
        		this.dsList.setColumn(0, "NO_CHASU", this.dsListInit.getColumn(0, "NO_CHASU"));
        		this.dsList.setColumn(0, "DS_SITECHA", this.dsListInit.getColumn(0, "DS_SITECHA"));
        		this.dsList.setColumn(0, "DS_GONGSA", this.dsListInit.getColumn(0, "DS_GONGSA"));
        		this.dsList.setColumn(0, "AM_GONGSA", this.dsListInit.getColumn(0, "AM_GONGSA"));
        		this.dsList.setColumn(0, "AM_GEYAK", this.dsListInit.getColumn(0, "AM_GEYAK"));
        		this.dsList.setColumn(0, "AM_JAERYO", this.dsListInit.getColumn(0, "AM_JAERYO"));
        		this.dsList.setColumn(0, "AM_DANGSADOGUB", this.dsListInit.getColumn(0, "AM_DANGSADOGUB"));
        		this.dsList.setColumn(0, "TY_HAJA", this.dsListInit.getColumn(0, "CD_BUMUN"));
        		this.dsList.setColumn(0, "DT_GONGSAFR", this.dsListInit.getColumn(0, "DT_GONGSAFR"));
        		this.dsList.setColumn(0, "DT_GONGSATO", this.dsListInit.getColumn(0, "DT_GONGSATO"));
        		this.dsList.setColumn(0, "DT_SILCHAKGONG", this.dsListInit.getColumn(0, "DT_SILCHAKGONG"));
        		this.dsList.setColumn(0, "DT_JUNGONG", this.dsListInit.getColumn(0, "DT_JUNGONG"));
        		this.dsList.setColumn(0, "DT_SAUPSTART", this.dsListInit.getColumn(0, "DT_SAUPSTART"));
        		this.dsList.setColumn(0, "RT_SIGONG", this.dsListInit.getColumn(0, "RT_SIGONG"));
        		this.dsList.setColumn(0, "AM_SIGONG", this.dsListInit.getColumn(0, "AM_SIGONG"));
        		this.dsList.setColumn(0, "NO_SAUPJANG", this.dsListInit.getColumn(0, "NO_SAUPJANG"));
        		this.dsList.setColumn(0, "AT_SITE", this.dsListInit.getColumn(0, "AT_SITE"));
        		this.dsList.setColumn(0, "NO_TEL", this.dsListInit.getColumn(0, "NO_TEL"));
        		this.dsList.setColumn(0, "NO_FAX", this.dsListInit.getColumn(0, "NO_FAX"));
        		this.dsList.setColumn(0, "DS_BALJU", this.dsListInit.getColumn(0, "DS_BALJU"));
        		this.dsList.setColumn(0, "DS_BALJUADDR", this.dsListInit.getColumn(0, "DS_BALJUADDR"));
        		this.dsList.setColumn(0, "TY_BALJU", this.dsListInit.getColumn(0, "TY_BALJU"));
        		this.dsList.setColumn(0, "CD_UPJONG", this.dsListInit.getColumn(0, "CD_UPJONG"));
        		this.dsList.setColumn(0, "DS_UPJONG", this.dsListInit.getColumn(0, "DS_UPJONG"));
        		this.dsList.setColumn(0, "CD_SAUP", this.dsListInit.getColumn(0, "CD_SAUP"));
        		this.dsList.setColumn(0, "DS_SAUP", this.dsListInit.getColumn(0, "DS_SAUP"));
        		this.dsList.setColumn(0, "DS_MANAGER_NAME", this.dsListInit.getColumn(0, "DS_MANAGER_NAME"));
        		this.dsList.setColumn(0, "DS_SINGO_NAME", this.dsListInit.getColumn(0, "DS_SINGO_NAME"));
        		this.dsList.setColumn(0, "NO_KOOKMIN", this.dsListInit.getColumn(0, "NO_KOOKMIN"));
        		this.dsList.setColumn(0, "NO_GUNGANG", this.dsListInit.getColumn(0, "NO_GUNGANG"));
        		this.dsList.setColumn(0, "TY_SITE", this.dsListInit.getColumn(0, "TY_SITE"));
        		this.dsList.setColumn(0, "DS_SITETYPE", this.dsListInit.getColumn(0, "DS_SITETYPE"));
        		this.dsList.setColumn(0, "TY_SITESTATE", this.dsListInit.getColumn(0, "TY_SITESTATE"));
        		this.dsList.setColumn(0, "TY_SUGUB", this.dsListInit.getColumn(0, "TY_SUGUB"));
        		this.dsList.setColumn(0, "TY_GONGDONG", this.dsListInit.getColumn(0, "TY_GONGDONG"));
        		this.dsList.setColumn(0, "YN_GOYONG", this.dsListInit.getColumn(0, "YN_GOYONG"));
        		this.dsList.setColumn(0, "DT_GOYONGEND", this.dsListInit.getColumn(0, "DT_GOYONGEND"));
        		this.dsList.setColumn(0, "YN_SANJAE", this.dsListInit.getColumn(0, "YN_SANJAE"));
        		this.dsList.setColumn(0, "NO_SANJAE", this.dsListInit.getColumn(0, "NO_SANJAE"));
        		this.dsList.setColumn(0, "YN_RETIRE_DEDUCT", this.dsListInit.getColumn(0, "YN_RETIRE_DEDUCT"));
        		this.dsList.setColumn(0, "AM_DEDUCT", this.dsListInit.getColumn(0, "AM_DEDUCT"));
        		this.dsList.setColumn(0, "RT_JIBUN", this.dsListInit.getColumn(0, "RT_JIBUN"));
        	}
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
        	// 싱글폼(Dataset) 필수입력 체크
        	if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return;

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	var flag = this.gfnGetFormStatus(this);

        	trace("flag", flag);

        	if(flag == "I") {
        		var nrow = this.dsInsert.addRow();

        		this.dsInsert.setColumn(nrow, "TY_SAVE", "I");

        		this.dsInsert.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsInsert.setColumn(nrow, "NO_CHASU", "0");

        		this.dsInsert.setColumn(nrow, "DS_SITECHA", this.dsList.getColumn(0, "DS_SITECHA"));
        		this.dsInsert.setColumn(nrow, "DS_GONGSA", this.dsList.getColumn(0, "DS_GONGSA"));
        		this.dsInsert.setColumn(nrow, "AM_GONGSA",this.dsList.getColumn(0, "AM_GONGSA"));
        		this.dsInsert.setColumn(nrow, "AM_GEYAK", this.dsList.getColumn(0, "AM_GEYAK"));
        		this.dsInsert.setColumn(nrow, "AM_JAERYO", this.dsList.getColumn(0, "AM_JAERYO"));
        		this.dsInsert.setColumn(nrow, "DT_GONGSAFR", this.dsList.getColumn(0, "DT_GONGSAFR"));
        		this.dsInsert.setColumn(nrow, "DT_GONGSATO", this.dsList.getColumn(0, "DT_GONGSATO"));
        		this.dsInsert.setColumn(nrow, "DT_SILCHAKGONG", this.dsList.getColumn(0, "DT_SILCHAKGONG"));
        		this.dsInsert.setColumn(nrow, "DT_JUNGONG", this.dsList.getColumn(0, "DT_JUNGONG"));
        		this.dsInsert.setColumn(nrow, "DT_SAUPSTART", this.dsList.getColumn(0, "DT_SAUPSTART"));
        		this.dsInsert.setColumn(nrow, "DT_GOYONGEND", this.dsList.getColumn(0, "DT_GOYONGEND"));
        		this.dsInsert.setColumn(nrow, "NO_SAUPJANG", this.dsList.getColumn(0, "NO_SAUPJANG"));
        		this.dsInsert.setColumn(nrow, "NO_SANJAE", this.dsList.getColumn(0, "NO_SANJAE"));
        		this.dsInsert.setColumn(nrow, "AT_SITE", this.dsList.getColumn(0, "AT_SITE"));
        		this.dsInsert.setColumn(nrow, "NO_TEL", this.dsList.getColumn(0, "NO_TEL"));
        		this.dsInsert.setColumn(nrow, "NO_FAX", this.dsList.getColumn(0, "NO_FAX"));
        		this.dsInsert.setColumn(nrow, "DS_BALJU", this.dsList.getColumn(0, "DS_BALJU"));
        		this.dsInsert.setColumn(nrow, "DS_BALJUADDR", this.dsList.getColumn(0, "DS_BALJUADDR"));
        		this.dsInsert.setColumn(nrow, "DT_SINGO", this.dsList.getColumn(0, "DT_SINGO"));
        		this.dsInsert.setColumn(nrow, "NO_SAMUSO", this.dsList.getColumn(0, "NO_SAMUSO"));
        		this.dsInsert.setColumn(nrow, "CD_BONBU", this.dsList.getColumn(0, "CD_BONBU"));
        		this.dsInsert.setColumn(nrow, "CD_UPJONG", this.dsList.getColumn(0, "CD_UPJONG"));
        		this.dsInsert.setColumn(nrow, "CD_SAUP", this.dsList.getColumn(0, "CD_SAUP"));
        		this.dsInsert.setColumn(nrow, "CD_COST", this.dsList.getColumn(0, "CD_COST"));
        		this.dsInsert.setColumn(nrow, "TY_SITE", this.dsList.getColumn(0, "TY_SITE"));
        		this.dsInsert.setColumn(nrow, "TY_SITESTATE", this.dsList.getColumn(0, "TY_SITESTATE"));
        		this.dsInsert.setColumn(nrow, "YN_GOYONG", this.dsList.getColumn(0, "YN_GOYONG"));
        		this.dsInsert.setColumn(nrow, "YN_SANJAE", this.dsList.getColumn(0, "YN_SANJAE"));
        		this.dsInsert.setColumn(nrow, "TY_GONGDONG", this.dsList.getColumn(0, "TY_GONGDONG"));
        		this.dsInsert.setColumn(nrow, "TY_SANJAE", this.dsList.getColumn(0, "TY_SANJAE"));
        		this.dsInsert.setColumn(nrow, "TY_WOIJU", this.dsList.getColumn(0, "TY_WOIJU"));
        		this.dsInsert.setColumn(nrow, "TY_NOMU", this.dsList.getColumn(0, "TY_NOMU"));
        		this.dsInsert.setColumn(nrow, "RT_JIBUN", this.dsList.getColumn(0, "RT_JIBUN"));
        		this.dsInsert.setColumn(nrow, "AM_DANGSADOGUB", this.dsList.getColumn(0, "AM_DANGSADOGUB"));
        		this.dsInsert.setColumn(nrow, "RT_SIGONG", this.dsList.getColumn(0, "RT_SIGONG"));
        		this.dsInsert.setColumn(nrow, "AM_SIGONG", this.dsList.getColumn(0, "AM_SIGONG"));
        		this.dsInsert.setColumn(nrow, "CD_BUMUN", this.dsList.getColumn(0, "CD_BUMUN"));
        		this.dsInsert.setColumn(nrow, "TY_BALJU", this.dsList.getColumn(0, "TY_BALJU"));
        		this.dsInsert.setColumn(nrow, "TY_SUGUB", this.dsList.getColumn(0, "TY_SUGUB"));
        		this.dsInsert.setColumn(nrow, "TY_HAJA", this.dsList.getColumn(0, "TY_HAJA"));
        		this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        		this.dsInsert.setColumn(nrow, "NO_WORK_PERMISSION", this.dsList.getColumn(0, "NO_WORK_PERMISSION"));
        		this.dsInsert.setColumn(nrow, "DS_MANAGER_NAME", this.dsList.getColumn(0, "DS_MANAGER_NAME"));
        		this.dsInsert.setColumn(nrow, "DS_SINGO_NAME", this.dsList.getColumn(0, "DS_SINGO_NAME"));
        		this.dsInsert.setColumn(nrow, "TY_JOIN", this.dsList.getColumn(0, "TY_JOIN"));
        		this.dsInsert.setColumn(nrow, "YN_RETIRE_DEDUCT", this.dsList.getColumn(0, "YN_RETIRE_DEDUCT"));
        		this.dsInsert.setColumn(nrow, "NO_KOOKMIN", this.dsList.getColumn(0, "NO_KOOKMIN"));
        		this.dsInsert.setColumn(nrow, "NO_GUNGANG", this.dsList.getColumn(0, "NO_GUNGANG"));
        		this.dsInsert.setColumn(nrow, "NO_TEOIJIK", this.dsList.getColumn(0, "NO_TEOIJIK"));
        		this.dsInsert.setColumn(nrow, "AM_DEDUCT", this.dsList.getColumn(0, "AM_DEDUCT"));
        		this.dsInsert.setColumn(nrow, "CD_KOOKMIN_YESU", this.dsList.getColumn(0, "CD_KOOKMIN_YESU"));
        		this.dsInsert.setColumn(nrow, "DS_KOOKMIN_YESU", this.dsList.getColumn(0, "DS_KOOKMIN_YESU"));
        		this.dsInsert.setColumn(nrow, "CD_HEALTH_YESU", this.dsList.getColumn(0, "CD_HEALTH_YESU"));
        		this.dsInsert.setColumn(nrow, "DS_HEALTH_YESU", this.dsList.getColumn(0, "DS_HEALTH_YESU"));
        		this.dsInsert.setColumn(nrow, "NO_KOOKMIN_YESU", this.dsList.getColumn(0, "NO_KOOKMIN_YESU"));
        		this.dsInsert.setColumn(nrow, "NO_HEALTH_YESU", this.dsList.getColumn(0, "NO_HEALTH_YESU"));
        		this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsInsert.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		this.dsInsert.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        		//this.dsInsert.setColumn(nrow, "CD_FERP_DEPT", this.dsList.getColumn(0, "CD_FERP_DEPT"));
        	}
        	else if(flag == "U") {

        		var nrow = this.dsUpdate.addRow();

        		this.dsUpdate.setColumn(nrow, "TY_SAVE", "U");

        		this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        		this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(0, "NO_CHASU"));

        		this.dsUpdate.setColumn(nrow, "DS_SITECHA", this.dsList.getColumn(0, "DS_SITECHA"));
        		this.dsUpdate.setColumn(nrow, "DS_GONGSA", this.dsList.getColumn(0, "DS_GONGSA"));
        		this.dsUpdate.setColumn(nrow, "AM_GONGSA",this.dsList.getColumn(0, "AM_GONGSA"));
        		this.dsUpdate.setColumn(nrow, "AM_GEYAK", this.dsList.getColumn(0, "AM_GEYAK"));
        		this.dsUpdate.setColumn(nrow, "AM_JAERYO", this.dsList.getColumn(0, "AM_JAERYO"));
        		this.dsUpdate.setColumn(nrow, "DT_GONGSAFR", this.dsList.getColumn(0, "DT_GONGSAFR"));
        		this.dsUpdate.setColumn(nrow, "DT_GONGSATO", this.dsList.getColumn(0, "DT_GONGSATO"));
        		this.dsUpdate.setColumn(nrow, "DT_SILCHAKGONG", this.dsList.getColumn(0, "DT_SILCHAKGONG"));
        		this.dsUpdate.setColumn(nrow, "DT_JUNGONG", this.dsList.getColumn(0, "DT_JUNGONG"));
        		this.dsUpdate.setColumn(nrow, "DT_SAUPSTART", this.dsList.getColumn(0, "DT_SAUPSTART"));
        		this.dsUpdate.setColumn(nrow, "DT_GOYONGEND", this.dsList.getColumn(0, "DT_GOYONGEND"));
        		this.dsUpdate.setColumn(nrow, "NO_SAUPJANG", this.dsList.getColumn(0, "NO_SAUPJANG"));
        		this.dsUpdate.setColumn(nrow, "NO_SANJAE", this.dsList.getColumn(0, "NO_SANJAE"));
        		this.dsUpdate.setColumn(nrow, "AT_SITE", this.dsList.getColumn(0, "AT_SITE"));
        		this.dsUpdate.setColumn(nrow, "NO_TEL", this.dsList.getColumn(0, "NO_TEL"));
        		this.dsUpdate.setColumn(nrow, "NO_FAX", this.dsList.getColumn(0, "NO_FAX"));
        		this.dsUpdate.setColumn(nrow, "DS_BALJU", this.dsList.getColumn(0, "DS_BALJU"));
        		this.dsUpdate.setColumn(nrow, "DS_BALJUADDR", this.dsList.getColumn(0, "DS_BALJUADDR"));
        		this.dsUpdate.setColumn(nrow, "DT_SINGO", this.dsList.getColumn(0, "DT_SINGO"));
        		this.dsUpdate.setColumn(nrow, "NO_SAMUSO", this.dsList.getColumn(0, "NO_SAMUSO"));
        		this.dsUpdate.setColumn(nrow, "CD_BONBU", this.dsList.getColumn(0, "CD_BONBU"));
        		this.dsUpdate.setColumn(nrow, "CD_UPJONG", this.dsList.getColumn(0, "CD_UPJONG"));
        		this.dsUpdate.setColumn(nrow, "CD_SAUP", this.dsList.getColumn(0, "CD_SAUP"));
        		this.dsUpdate.setColumn(nrow, "CD_COST", this.dsList.getColumn(0, "CD_COST"));
        		this.dsUpdate.setColumn(nrow, "TY_SITE", this.dsList.getColumn(0, "TY_SITE"));
        		this.dsUpdate.setColumn(nrow, "TY_SITESTATE", this.dsList.getColumn(0, "TY_SITESTATE"));
        		this.dsUpdate.setColumn(nrow, "YN_GOYONG", this.dsList.getColumn(0, "YN_GOYONG"));
        		this.dsUpdate.setColumn(nrow, "YN_SANJAE", this.dsList.getColumn(0, "YN_SANJAE"));
        		this.dsUpdate.setColumn(nrow, "TY_GONGDONG", this.dsList.getColumn(0, "TY_GONGDONG"));
        		this.dsUpdate.setColumn(nrow, "TY_SANJAE", this.dsList.getColumn(0, "TY_SANJAE"));
        		this.dsUpdate.setColumn(nrow, "TY_WOIJU", this.dsList.getColumn(0, "TY_WOIJU"));
        		this.dsUpdate.setColumn(nrow, "TY_NOMU", this.dsList.getColumn(0, "TY_NOMU"));
        		this.dsUpdate.setColumn(nrow, "RT_JIBUN", this.dsList.getColumn(0, "RT_JIBUN"));
        		this.dsUpdate.setColumn(nrow, "AM_DANGSADOGUB", this.dsList.getColumn(0, "AM_DANGSADOGUB"));
        		this.dsUpdate.setColumn(nrow, "RT_SIGONG", this.dsList.getColumn(0, "RT_SIGONG"));
        		this.dsUpdate.setColumn(nrow, "AM_SIGONG", this.dsList.getColumn(0, "AM_SIGONG"));
        		this.dsUpdate.setColumn(nrow, "CD_BUMUN", this.dsList.getColumn(0, "CD_BUMUN"));
        		this.dsUpdate.setColumn(nrow, "TY_BALJU", this.dsList.getColumn(0, "TY_BALJU"));
        		this.dsUpdate.setColumn(nrow, "TY_SUGUB", this.dsList.getColumn(0, "TY_SUGUB"));
        		this.dsUpdate.setColumn(nrow, "TY_HAJA", this.dsList.getColumn(0, "TY_HAJA"));
        		this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        		this.dsUpdate.setColumn(nrow, "NO_WORK_PERMISSION", this.dsList.getColumn(0, "NO_WORK_PERMISSION"));
        		this.dsUpdate.setColumn(nrow, "DS_MANAGER_NAME", this.dsList.getColumn(0, "DS_MANAGER_NAME"));
        		this.dsUpdate.setColumn(nrow, "DS_SINGO_NAME", this.dsList.getColumn(0, "DS_SINGO_NAME"));
        		this.dsUpdate.setColumn(nrow, "TY_JOIN", this.dsList.getColumn(0, "TY_JOIN"));
        		this.dsUpdate.setColumn(nrow, "YN_RETIRE_DEDUCT", this.dsList.getColumn(0, "YN_RETIRE_DEDUCT"));
        		this.dsUpdate.setColumn(nrow, "NO_KOOKMIN", this.dsList.getColumn(0, "NO_KOOKMIN"));
        		this.dsUpdate.setColumn(nrow, "NO_GUNGANG", this.dsList.getColumn(0, "NO_GUNGANG"));
        		this.dsUpdate.setColumn(nrow, "NO_TEOIJIK", this.dsList.getColumn(0, "NO_TEOIJIK"));
        		this.dsUpdate.setColumn(nrow, "AM_DEDUCT", this.dsList.getColumn(0, "AM_DEDUCT"));
        		this.dsUpdate.setColumn(nrow, "CD_KOOKMIN_YESU", this.dsList.getColumn(0, "CD_KOOKMIN_YESU"));
        		this.dsUpdate.setColumn(nrow, "DS_KOOKMIN_YESU", this.dsList.getColumn(0, "DS_KOOKMIN_YESU"));
        		this.dsUpdate.setColumn(nrow, "CD_HEALTH_YESU", this.dsList.getColumn(0, "CD_HEALTH_YESU"));
        		this.dsUpdate.setColumn(nrow, "DS_HEALTH_YESU", this.dsList.getColumn(0, "DS_HEALTH_YESU"));
        		this.dsUpdate.setColumn(nrow, "NO_KOOKMIN_YESU", this.dsList.getColumn(0, "NO_KOOKMIN_YESU"));
        		this.dsUpdate.setColumn(nrow, "NO_HEALTH_YESU", this.dsList.getColumn(0, "NO_HEALTH_YESU"));
        		this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		//this.dsUpdate.setColumn(nrow, "CD_FERP_DEPT", this.dsList.getColumn(0, "CD_FERP_DEPT"));
        	}
        	else if(flag == "D") {
        		var nrow = this.dsDelete.addRow();

        		this.dsDelete.setColumn(nrow, "TY_SAVE", "D");
        		this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsDelete.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        		this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(0, "NO_CHASU"));
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

        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnApply_KOOKMIN = function() {
        	var param = {};
        	param.CD_VENDOR = this.dsList.getColumn(0, "CD_KOOKMIN_YESU");
        	param.DS_VENDOR = this.dsList.getColumn(0, "DS_KOOKMIN_YESU");

        	this.gfnFormOpenNonAuth("DFB", "DFB_ACCOUNT", "", param);
        }

        this.fnApply_HEALTH = function() {
        	var param = {};
        	param.CD_VENDOR = this.dsList.getColumn(0, "CD_HEALTH_YESU");
        	param.DS_VENDOR = this.dsList.getColumn(0, "DS_HEALTH_YESU");

        	this.gfnFormOpenNonAuth("DFB", "DFB_ACCOUNT", "", param);
        }
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CORP"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        	}
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
        	if(svcID == "addInit") {
        		this.fnAddInitCallback()
        	}
        	else if (svcID == "select") {
        		if(this.dsList.rowcount > 0) {
        			var chkKookminStatus = this.dsList.getColumn(0, "NO_KOOKMIN_YESU_CHECK");
        			var chkHealthStatus = this.dsList.getColumn(0, "NO_HEALTH_YESU_CHECK");

        			switch(chkKookminStatus){
        				case 0:
        					this.chkKOOKMIN_YESU_CHECK.set_value(false);
        				break;
        				case 1:
        					this.chkKOOKMIN_YESU_CHECK.set_value(true);
        				break;
        			}

        			switch(chkHealthStatus){
        				case 0:
        					this.chkHEALTH_YESU_CHECK.set_value(false);
        				break;
        				case 1:
        					this.chkHEALTH_YESU_CHECK.set_value(true);
        				break;
        			}

        // 			// 등록여부 체크 N 이면 Insert모드
        // 			if(this.dsList.getColumn(0, "YN_REGIST") == "N") {
        // 				this.gfnSetFormStatus(this, "I");
        // 			}
        		}
        		else {
        // 			//데이터가 0건이면 Insert모드
        // 			this.dsList.addRow();
        // 			this.gfnSetFormStatus(this, "I");
        		}

        // 		// 사용자그룹이 원가운영팀(2)인 경우 수정 가능하도록 처리.
        // 		if(this.FormInfo.ID_GROUP == 2)	{
        // 			this.divData.form.divData02.form.rdoTY_JOIN.set_readonly(false);
        // 			//this.gfnSetAllReadonly(this.divData.form, false);
        // 		}else{
        // 			this.divData.form.divData02.form.rdoTY_JOIN.set_readonly(true);
        // 			//this.gfnSetAllReadonly(this.divData.form, true);
        // 		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnSaveAfter = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("저장되었습니다", "fnSaveAfter");
        			//this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
         		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
         		dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	}
        	else if (id == "ccfCD_SITE") {
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인을 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "TY_DEPT", "D");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	// 현장코드
        	}

        	return true;
        }

        // this.fnAfterCDTextChanged = function(id, codeFindData) {
        // 	var arr = codeFindData;
        //
        // 	if (id == "ccfCD_CORP") { // 법인코드
        // 		this.ccfCD_SITE.form.fnCodeFindClear();
        // 	}
        // 	else if (id == "ccfCD_SITE") {
        // 		;
        // 	}
        // };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.dsList.clearData();	// 싱글폼데이터 초기화
        	}
        };


        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		if(this.gfnGetFormStatus(this) != "I") {
        			this.gfnSetFormStatus(this, "U");	// 폼상태 업데이트
        		}
        	}
        };


        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DS");
        	this.dsCombo.setColumn(0, "CD_TYPE", "10");

        	// 같은 SP 다중건 조회는 row 추가해서
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DS");
        	this.dsCombo.setColumn(1, "CD_TYPE", "12");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DS");
        	this.dsCombo.setColumn(2, "CD_TYPE", "13");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_HAJA=combo0 dsTY_BALJU=combo1 dsTY_GONGDONG=combo2";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
         		//this.divData.form.divData01.form.cboTY_HAJA.set_index(0);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divData01.form.sta01.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta21.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData02.form.sta201.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData02.form.sta221.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSZ_HYUNJANGSAUP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
