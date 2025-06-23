(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_SALARYBASE");
            this.set_titletext("급여기초정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBase", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OCCUPATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ANNUAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DISPATCHORG\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DISPATCH\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DISPATCH\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DISPATCH1\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DISPATCH1\" type=\"STRING\" size=\"256\"/><Column id=\"YN_WIFE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHILD\" type=\"INT\" size=\"256\"/><Column id=\"NO_PARENT\" type=\"INT\" size=\"256\"/><Column id=\"NO_OLD\" type=\"INT\" size=\"256\"/><Column id=\"NO_HANDICAP\" type=\"INT\" size=\"256\"/><Column id=\"YN_HEALTH\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OVERSEA\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ANNUITY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HIRE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BANK2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BANK3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT3\" type=\"STRING\" size=\"256\"/><Column id=\"NM_OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"AM_NETPAYSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"RT_COMPANY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_PERSON\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_TAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CLS_A\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_P\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SALARY1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SALARY2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SALARY3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MONAVG_ANNUITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MONAVG_HEALTH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_EMPTYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JOBTYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADOPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JOBTYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GROUPJOIN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPLY_PROVATION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PROVATION_TO\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAXRDT2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_BEFPAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_FAMILYEVENT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BONUS\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RETIREMULTI\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRESTART\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OVERSEA\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OLDMEDICAL\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OLDMEDICAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RETIREPENSION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_KID\" type=\"STRING\" size=\"256\"/><Column id=\"YN_JKSUBST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_SALARYORDER_SELECT</Col></Row><Row><Col id=\"TARGET\">selectBase</Col><Col id=\"SP\">DAUPR_SALARYBASE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">S</Col><Col id=\"VALUE\">급여</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"VALUE\">상여</Col></Row><Row><Col id=\"CODE\">X</Col><Col id=\"VALUE\">성과급</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSN_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1</Col></Row><Row><Col id=\"VALUE\">2</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">4</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">5</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"VALUE\">6</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"VALUE\">7</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"VALUE\">8</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"VALUE\">9</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"VALUE\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RETIREPENSION", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">연금없음</Col></Row><Row><Col id=\"CODE\">DC</Col><Col id=\"VALUE\">DC</Col></Row><Row><Col id=\"CODE\">DB</Col><Col id=\"VALUE\">DB</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_SALARY","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("지급년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_SALARY","staYM_SALARY:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","ctclYM_SALARY:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("지급구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_SALARY","staTY_SALARY:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_readonly("false");
            obj.set_text("급여");
            obj.set_value("S");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboSN_SALARY","ccboTY_SALARY:5","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsSN_SALARY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_readonly("false");
            obj.set_text("급여");
            obj.set_value("1");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ccboSN_SALARY:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_CORP:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","516","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("인사정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","staTITLE:0","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg","staID_SABUN:-1","staID_SABUN:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtID_SABUN","staID_SABUN:5","staID_SABUN:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_EMPTYPE","0","staID_SABUN:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_EMPTYPE_bg","staCD_EMPTYPE:-1","staCD_EMPTYPE:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMPTYPE","staCD_EMPTYPE:5","staCD_EMPTYPE:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT","0","staCD_EMPTYPE:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT_bg","staDS_DEPT:-1","staDS_DEPT:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT","staDS_DEPT:5","staDS_DEPT:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_POSITION","0","staDS_DEPT:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_POSITION_bg","staDS_POSITION:-1","staDS_POSITION:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_POSITION","staDS_POSITION:5","staDS_POSITION:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_JOIN","0","staDS_POSITION:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("입사일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_JOIN_bg","staDT_JOIN:-1","staDT_JOIN:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_JOIN","staDT_JOIN:5","staDT_JOIN:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME","staID_SABUN_bg:-1","staID_SABUN_bg:-30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME_bg","staDS_HNAME:-1","staDS_HNAME:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_HNAME","staDS_HNAME:5","staDS_HNAME:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_JOB_TYPE","staCD_EMPTYPE_bg:-1","staCD_EMPTYPE_bg:-30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_JOB_TYPE_bg","staDS_JOB_TYPE:-1","staDS_JOB_TYPE:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_JOB_TYPE","staDS_JOB_TYPE:5","staDS_JOB_TYPE:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_OCCUPATION","staDS_DEPT_bg:-1","staDS_DEPT_bg:-30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_OCCUPATION_bg","staDS_OCCUPATION:-1","staDS_OCCUPATION:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_OCCUPATION","staDS_OCCUPATION:5","staDS_OCCUPATION:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_PAYSTEP","staDS_POSITION_bg:-1","staDS_POSITION_bg:-30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("급호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_PAYSTEP_bg","staCD_PAYSTEP:-1","staCD_PAYSTEP:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_PAYSTEP","staCD_PAYSTEP:5","staCD_PAYSTEP:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_GROUPJOIN","staDT_JOIN_bg:-1","staDT_JOIN_bg:-30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_text("그룹입사일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_GROUPJOIN_bg","staDT_GROUPJOIN:-1","staDT_GROUPJOIN:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_GROUPJOIN","staDT_GROUPJOIN:5","staDT_GROUPJOIN:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_WORK","staDS_HNAME_bg:-1","staDS_HNAME_bg:-30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("근무구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_WORK_bg","staTY_WORK:-1","staTY_WORK:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtTY_WORK","staTY_WORK:5","staTY_WORK:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CORP","staDS_JOB_TYPE_bg:-1","staDS_JOB_TYPE_bg:-30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_text("소속법인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CORP_bg","staDS_CORP:-1","staDS_CORP:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CORP","staDS_CORP:5","staDS_CORP:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DUTY","staDS_OCCUPATION_bg:-1","staDS_OCCUPATION_bg:-30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_text("직무");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DUTY_bg","staDS_DUTY:-1","staDS_DUTY:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DUTY","staDS_DUTY:5","staDS_DUTY:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ADOPTYPE","staCD_PAYSTEP_bg:-1","staCD_PAYSTEP_bg:-30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_text("채용구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ADOPTYPE_bg","staDS_ADOPTYPE:-1","staDS_ADOPTYPE:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_ADOPTYPE","staDS_ADOPTYPE:5","staDS_ADOPTYPE:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRE","staDT_GROUPJOIN_bg:-1","staDT_GROUPJOIN_bg:-30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_text("퇴사일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRE_bg","staDT_RETIRE:-1","staDT_RETIRE:-30","398","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_RETIRE","staDT_RETIRE:5","staDT_RETIRE:-24","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DISPATCHORG","staTY_WORK_bg:-1","staTY_WORK_bg:-30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("파견부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DISPATCHORG_bg","staDS_DISPATCHORG:-1","staDS_DISPATCHORG:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DISPATCHORG","staDS_DISPATCHORG:5","staDS_DISPATCHORG:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_BEFPAYSTEP","staDS_CORP_bg:-1","staDS_CORP_bg:-30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_text("전급호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_BEFPAYSTEP_bg","staDS_BEFPAYSTEP:-1","staDS_BEFPAYSTEP:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_BEFPAYSTEP","staDS_BEFPAYSTEP:5","staDS_BEFPAYSTEP:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_APPLY_PROVATION","staDS_DUTY_bg:-1","staDS_DUTY_bg:-30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_text("수습적용여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_APPLY_PROVATION_bg","staYN_APPLY_PROVATION:-1","staYN_APPLY_PROVATION:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_APPLY_PROVATION","staYN_APPLY_PROVATION:5","staYN_APPLY_PROVATION:-25","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var divData_form_rdoYN_APPLY_PROVATION_innerdataset = new nexacro.NormalDataset("divData_form_rdoYN_APPLY_PROVATION_innerdataset", obj);
            divData_form_rdoYN_APPLY_PROVATION_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoYN_APPLY_PROVATION_innerdataset);
            obj.set_text("Y");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PROVATION_TO","staDS_ADOPTYPE_bg:-1","staDS_ADOPTYPE_bg:-30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_text("수습종료일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PROVATION_TO_bg","staDT_PROVATION_TO:-1","staDT_PROVATION_TO:-30","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_PROVATION_TO","staDT_PROVATION_TO:5","staDT_PROVATION_TO:-25","139","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","divData:0","516","30",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("급여발령사항");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData2","0","staTITLE00:5",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData2.form);
            obj.set_taborder("19");
            obj._setContents("");
            this.divData2.addChild(obj.name, obj);

            obj = new Static("staTITLE01","0","divData2:10","516","30",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("급여기본사항");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData3","0","staTITLE01:5",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYN_SALARYMNG","0","0","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("35");
            obj.set_text("호봉제여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_SALARYMNG_bg","staYN_SALARYMNG:-1","staYN_SALARYMNG:-30","135","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SALARYMNG","staYN_SALARYMNG:5","staYN_SALARYMNG:-26","130","24",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var divData3_form_rdoYN_SALARYMNG_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_SALARYMNG_innerdataset", obj);
            divData3_form_rdoYN_SALARYMNG_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">연봉제</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">호봉제</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_SALARYMNG_innerdataset);
            obj.set_text("Y");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_WIFE","0","staYN_SALARYMNG:-1","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("0");
            obj.set_text("배우자공제");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_WIFE_bg","staYN_WIFE:-1","staYN_WIFE:-30","135","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_WIFE","staYN_WIFE:5","staYN_WIFE:-26","70","24",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("38");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var divData3_form_rdoYN_WIFE_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_WIFE_innerdataset", obj);
            divData3_form_rdoYN_WIFE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_WIFE_innerdataset);
            obj.set_text("Y");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_FAMILYEVENT","0","staYN_WIFE:-1","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_text("노조비 공제");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_FAMILYEVENT_bg","staYN_FAMILYEVENT:-1","staYN_FAMILYEVENT:-30","135","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_FAMILYEVENT","staYN_FAMILYEVENT:5","staYN_FAMILYEVENT:-26","70","24",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("39");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            obj.set_visible("true");
            var divData3_form_rdoYN_FAMILYEVENT_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_FAMILYEVENT_innerdataset", obj);
            divData3_form_rdoYN_FAMILYEVENT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_FAMILYEVENT_innerdataset);
            obj.set_text("Y");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_KID","0","staYN_FAMILYEVENT:-1","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("4");
            obj.set_text("부양자\r\n(6세이하/6세이상)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_KID_bg","staNO_KID:-1","staNO_KID:-30","135","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("edtNO_KID","staNO_KID:6","staNO_KID:-25","47","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_CHILD","edtNO_KID:0","staNO_KID:-27","29","23",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("8");
            obj.set_text("/");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_AC");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("edtNO_CHILD","staNO_CHILD:0","staNO_KID:-25","47","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("75");
            obj.set_readonly("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_PARENT","0","staNO_KID:-1","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("6");
            obj.set_text("부양자(60)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_PARENT_bg","staNO_PARENT:-1","staNO_PARENT:-30","135","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("txtNO_PARENT","staNO_PARENT:5","staNO_PARENT:-25","124","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_OLD","0","staNO_PARENT:-1","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("48");
            obj.set_text("경로우대자/장애인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_OLD_bg","staNO_OLD:-1","staNO_OLD:-30","135","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("txtNO_OLD","staNO_OLD:5","staNO_OLD:-25","47","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_HANDICAP","txtNO_OLD:0","staNO_OLD:-27","29","23",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("8");
            obj.set_text("/");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_AC");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("txtNO_HANDICAP","staNO_HANDICAP:0","staNO_OLD:-25","47","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_SALARY","staYN_SALARYMNG_bg:-1","staYN_SALARYMNG_bg:-30","105","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("52");
            obj.set_text("급여적용여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_SALARY_bg","staYN_SALARY:-1","staYN_SALARY:-30","111","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SALARY","staYN_SALARY:5","staYN_SALARY:-26","70","24",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("54");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var divData3_form_rdoYN_SALARY_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_SALARY_innerdataset", obj);
            divData3_form_rdoYN_SALARY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_SALARY_innerdataset);
            obj.set_text("Y");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_BONUS","staYN_WIFE_bg:-1","staYN_WIFE_bg:-30","105","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("14");
            obj.set_text("복지수당여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_BONUS_bg","staYN_BONUS:-1","staYN_BONUS:-30","111","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_BONUS","staYN_BONUS:5","staYN_BONUS:-26","70","24",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("55");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var divData3_form_rdoYN_BONUS_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_BONUS_innerdataset", obj);
            divData3_form_rdoYN_BONUS_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_BONUS_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_OVERSEA","staYN_FAMILYEVENT_bg:-1","staYN_FAMILYEVENT_bg:-30","105","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("해외근무여부");
            obj.set_textDecoration("none");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_OVERSEA_bg","staYN_OVERSEA:-1","staYN_OVERSEA:-30","111","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text(" ");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_OVERSEA","staYN_OVERSEA:5","staYN_OVERSEA:-26","70","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("59");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var divData3_form_rdoYN_OVERSEA_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_OVERSEA_innerdataset", obj);
            divData3_form_rdoYN_OVERSEA_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_OVERSEA_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staRT_OVERSEA","staNO_KID_bg:-1","staNO_KID_bg:-30","105","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("해외근무비율");
            obj.set_textDecoration("none");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staRT_OVERSEA_bg","staRT_OVERSEA:-1","staRT_OVERSEA:-30","111","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text(" ");
            this.divData3.addChild(obj.name, obj);

            obj = new Combo("cboRT_OVERSEA","staRT_OVERSEA:5","staRT_OVERSEA:-25","100","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("62");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var divData3_form_cboRT_OVERSEA_innerdataset = new nexacro.NormalDataset("divData3_form_cboRT_OVERSEA_innerdataset", obj);
            divData3_form_cboRT_OVERSEA_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row/><Row><Col id=\"datacolumn\">70%</Col><Col id=\"codecolumn\">70</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_cboRT_OVERSEA_innerdataset);
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRESTART","staNO_PARENT_bg:-1","staNO_PARENT_bg:-30","105","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("12");
            obj.set_text("퇴직금기산일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRESTART_bg","staDT_RETIRESTART:-1","staDT_RETIRESTART:-30","111","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_RETIRESTART","staDT_RETIRESTART:5","staDT_RETIRESTART:-25","100","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("57");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_RETIREMULTI","staNO_OLD_bg:-1","staNO_OLD_bg:-30","105","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("47");
            obj.set_text("퇴직금배율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_RETIREMULTI_bg","staNO_RETIREMULTI:-1","staNO_RETIREMULTI:-30","111","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("edtNO_RETIREMULTI","staNO_RETIREMULTI:5","staNO_RETIREMULTI:-25","100","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("56");
            obj.set_readonly("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_ANNUITY","staYN_SALARY_bg:-1","staYN_SALARY_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("8");
            obj.set_text("국민연금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_ANNUITY_bg","staYN_ANNUITY:-1","staYN_ANNUITY:-30","111","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_ANNUITY","staYN_ANNUITY:5","staYN_ANNUITY:-26","70","24",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var divData3_form_rdoYN_ANNUITY_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_ANNUITY_innerdataset", obj);
            divData3_form_rdoYN_ANNUITY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_ANNUITY_innerdataset);
            obj.set_text("Y");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_HEALTH","staYN_BONUS_bg:-1","staYN_BONUS_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("16");
            obj.set_text("건강보험");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_HEALTH_bg","staYN_HEALTH:-1","staYN_HEALTH:-30","111","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_HEALTH","staYN_HEALTH:5","staYN_HEALTH:-26","70","24",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("41");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var divData3_form_rdoYN_HEALTH_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_HEALTH_innerdataset", obj);
            divData3_form_rdoYN_HEALTH_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_HEALTH_innerdataset);
            obj.set_text("Y");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_HIRE","staYN_OVERSEA_bg:-1","staYN_OVERSEA_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("20");
            obj.set_text("고용보험");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_HIRE_bg","staYN_HIRE:-1","staYN_HIRE:-30","111","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_HIRE","staYN_HIRE:5","staYN_HIRE:-26","70","24",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("42");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var divData3_form_rdoYN_HIRE_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_HIRE_innerdataset", obj);
            divData3_form_rdoYN_HIRE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_HIRE_innerdataset);
            obj.set_text("Y");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_OLDMEDICAL","staRT_OVERSEA_bg:-1","staRT_OVERSEA_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("64");
            obj.set_text("노인요양 할인대상");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_OLDMEDICAL_bg","staYN_OLDMEDICAL:-1","staYN_OLDMEDICAL:-30","111","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_OLDMEDICAL","staYN_OLDMEDICAL:5","staYN_OLDMEDICAL:-26","70","24",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("65");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var divData3_form_rdoYN_OLDMEDICAL_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_OLDMEDICAL_innerdataset", obj);
            divData3_form_rdoYN_OLDMEDICAL_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">Y</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">N</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_OLDMEDICAL_innerdataset);
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staRT_OLDMEDICAL","staDT_RETIRESTART_bg:-1","staDT_RETIRESTART_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("67");
            obj.set_text("노인요양 할인비율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staRT_OLDMEDICAL_bg","staRT_OLDMEDICAL:-1","staRT_OLDMEDICAL:-30","111","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Combo("cboRT_OLDMEDICAL","staRT_OLDMEDICAL:5","staRT_OLDMEDICAL:-25","100","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("69");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var divData3_form_cboRT_OLDMEDICAL_innerdataset = new nexacro.NormalDataset("divData3_form_cboRT_OLDMEDICAL_innerdataset", obj);
            divData3_form_cboRT_OLDMEDICAL_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row/><Row><Col id=\"datacolumn\">30%</Col><Col id=\"codecolumn\">30</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_cboRT_OLDMEDICAL_innerdataset);
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staTY_RETIREPENSION","staNO_RETIREMULTI_bg:-1","staNO_RETIREMULTI_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("70");
            obj.set_text("퇴직연금/은행");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staTY_RETIREPENSION_bg","staTY_RETIREPENSION:-1","staTY_RETIREPENSION:-30","466","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Combo("cboTY_RETIREPENSION","staTY_RETIREPENSION:5","staTY_RETIREPENSION:-25","100","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("71");
            obj.set_innerdataset("dsTY_RETIREPENSION");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_readonly("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Div("cfCD_BANK","cboTY_RETIREPENSION:5","staTY_RETIREPENSION:-25","350","20",null,null,null,null,null,null,this.divData3.form);
            obj.getSetter("CodeFindName").set("DSX_CFBANK_CODE");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("72");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_MONAVG_ANNUITY","staYN_ANNUITY_bg:-1","staYN_ANNUITY_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("10");
            obj.set_text("국민연금보수월액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_MONAVG_ANNUITY_bg","staAM_MONAVG_ANNUITY:-1","staAM_MONAVG_ANNUITY:-30","227","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MONAVG_ANNUITY","staAM_MONAVG_ANNUITY:5","staAM_MONAVG_ANNUITY:-25","194","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("32");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_MONAVG_ANNUITY_won","txtAM_MONAVG_ANNUITY:5","staAM_MONAVG_ANNUITY:-27","20","24",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("45");
            obj.set_text("원");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_MONAVG_HEALTH","staYN_HEALTH_bg:-1","staYN_HEALTH_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("18");
            obj.set_text("건강보험보수월액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_MONAVG_HEALTH_bg","staAM_MONAVG_HEALTH:-1","staAM_MONAVG_HEALTH:-30","227","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MONAVG_HEALTH","staAM_MONAVG_HEALTH:5","staAM_MONAVG_HEALTH:-25","194","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("33");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_MONAVG_HEALTH_won","txtAM_MONAVG_HEALTH:5","staAM_MONAVG_HEALTH:-27","20","24",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("46");
            obj.set_text("원");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staRT_TAXRDT","staYN_HIRE_bg:-1","staYN_HIRE_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("22");
            obj.set_text("소득세액비율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staRT_TAXRDT_bg","staRT_TAXRDT:-1","staRT_TAXRDT:-30","227","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Combo("ccboRT_TAXRDT","staRT_TAXRDT:5","staRT_TAXRDT:-25","80","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("44");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var divData3_form_ccboRT_TAXRDT_innerdataset = new nexacro.NormalDataset("divData3_form_ccboRT_TAXRDT_innerdataset", obj);
            divData3_form_ccboRT_TAXRDT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">80</Col><Col id=\"datacolumn\">80</Col></Row><Row><Col id=\"codecolumn\">120</Col><Col id=\"datacolumn\">120</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_ccboRT_TAXRDT_innerdataset);
            obj.set_text("100");
            obj.set_value("100");
            obj.set_index("0");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staCD_BANK","staYN_OLDMEDICAL_bg:-1","staYN_OLDMEDICAL_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("24");
            obj.set_text("송금은행");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staCD_BANK_bg","staCD_BANK:-1","staCD_BANK:-30","227","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Div("ccfCD_BANK","staCD_BANK:5","staCD_BANK:-25","216","20",null,null,null,null,null,null,this.divData3.form);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("43");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBANKCODE");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("false");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT","staRT_OLDMEDICAL_bg:-1","staRT_OLDMEDICAL_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("26");
            obj.set_text("송금구좌/예금주");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT_bg","staCD_ACCOUNT:-1","staCD_ACCOUNT:-30","227","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("txtCD_ACCOUNT","staCD_ACCOUNT:5","staCD_ACCOUNT:-25","115","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNM_OWNER","txtCD_ACCOUNT:0","staCD_ACCOUNT:-27","29","24",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("74");
            obj.set_text("/");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_AC");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("txtNM_OWNER","staNM_OWNER:0","staCD_ACCOUNT:-25","72","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staTITLE02","0","divData3:0","516","30",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("기타사항");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData4","0","staTITLE02:5",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staRT_COMPANY","0","0","140","30",null,null,null,null,null,null,this.divData4.form);
            obj.set_taborder("55");
            obj.set_text("회사지급율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData4.addChild(obj.name, obj);

            obj = new Static("staRT_COMPANY_bg","staRT_COMPANY:-1","staRT_COMPANY:-30","135","30",null,null,null,null,null,null,this.divData4.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData4.addChild(obj.name, obj);

            obj = new Edit("txtRT_COMPANY","staRT_COMPANY:5","staRT_COMPANY:-25","123","20",null,null,null,null,null,null,this.divData4.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.divData4.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYM_SALARY.form.TextBox","value","dsSearch","YM_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboTY_SALARY","value","dsSearch","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboSN_SALARY","value","dsSearch","SN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtID_SABUN","value","dsBase","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtDS_HNAME","value","dsBase","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtTY_WORK","value","dsBase","DS_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtDS_DISPATCHORG","value","dsBase","DS_DISPATCHORG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtDS_EMPTYPE","value","dsBase","DS_EMPTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.txtDS_JOB_TYPE","value","dsBase","DS_JOBTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.txtDS_CORP","value","dsBase","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.txtDS_DEPT","value","dsBase","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.txtDS_OCCUPATION","value","dsBase","DS_OCCUPATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.txtDS_DUTY","value","dsBase","DS_DUTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.rdoYN_APPLY_PROVATION","value","dsBase","YN_APPLY_PROVATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.txtDS_POSITION","value","dsBase","DS_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.txtCD_PAYSTEP","value","dsBase","DS_PAYSTEP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.txtDS_ADOPTYPE","value","dsBase","DS_ADOPTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.txtDT_PROVATION_TO","value","dsBase","DT_PROVATION_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.txtDT_JOIN","value","dsBase","DT_JOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.txtDT_GROUPJOIN","value","dsBase","DT_GROUPJOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.txtDT_RETIRE","value","dsBase","DT_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.ccfDS_BANK","value","dsBase","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData4.form.txtRT_COMPANY","value","dsBase","RT_COMPANY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.txtDS_BEFPAYSTEP","value","dsBase","CD_BEFPAYSTEP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData3.form.edtNO_KID","value","dsBase","NO_KID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData3.form.txtNO_OLD","value","dsBase","NO_OLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData3.form.txtNO_PARENT","value","dsBase","NO_PARENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData3.form.txtNM_OWNER","value","dsBase","NM_OWNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData3.form.txtAM_MONAVG_ANNUITY","value","dsBase","AM_MONAVG_ANNUITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData3.form.txtAM_MONAVG_HEALTH","value","dsBase","AM_MONAVG_HEALTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData3.form.txtCD_ACCOUNT","value","dsBase","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData3.form.rdoYN_SALARYMNG","value","dsBase","YN_ANNUAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData3.form.rdoYN_WIFE","value","dsBase","YN_WIFE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData3.form.rdoYN_FAMILYEVENT","value","dsBase","YN_JKSUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData3.form.rdoYN_ANNUITY","value","dsBase","YN_ANNUITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData3.form.rdoYN_HEALTH","value","dsBase","YN_HEALTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData3.form.rdoYN_HIRE","value","dsBase","YN_HIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData3.form.ccfCD_BANK.form.CDTextBox","value","dsBase","CD_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData3.form.ccfCD_BANK.form.DSTextBox","value","dsBase","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData3.form.ccboRT_TAXRDT","value","dsBase","RT_TAXRDT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData3.form.txtNO_HANDICAP","value","dsBase","NO_HANDICAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.rdoYN_SALARYMNG","value","dsBase","YN_ANNUAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData3.form.rdoYN_SALARY","value","dsBase","YN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData3.form.rdoYN_BONUS","value","dsBase","YN_BONUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData3.form.edtNO_RETIREMULTI","value","dsBase","NO_RETIREMULTI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData3.form.ctclDT_RETIRESTART","value","dsBase","DT_RETIRESTART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData3.form.rdoYN_OVERSEA","value","dsBase","YN_OVERSEA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData3.form.cboRT_OVERSEA","value","dsBase","RT_OVERSEA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData3.form.rdoYN_OLDMEDICAL","value","dsBase","YN_OLDMEDICAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData3.form.cboRT_OLDMEDICAL","value","dsBase","RT_OLDMEDICAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData3.form.cboTY_RETIREPENSION","value","dsBase","TY_RETIREPENSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData3.form.cfCD_BANK.form.CDTextBox","value","dsBase","CD_BANK2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData3.form.cfCD_BANK.form.DSTextBox","value","dsBase","DS_BANK2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData3.form.edtNO_CHILD","value","dsBase","NO_CHILD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
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
        this.registerScript("DAU_SALARYBASE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e) {
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
        	this.fnInit();
        }

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

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid = this.divData2.form.objGrid;

        	// 검색영역
        	this.ctclYM_SALARY = this.divSearch.form.ctclYM_SALARY;		// 지급년월
        	this.ccboTY_SALARY = this.divSearch.form.ccboTY_SALARY;		// 지급구분
        	this.ccboSN_SALARY = this.divSearch.form.ccboSN_SALARY;
        	this.ccfCD_CORP    = this.divSearch.form.ccfCD_CORP;		// 법인
        	this.ccfID_SABUN   = this.divSearch.form.ccfID_SABUN;		// 성명
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드영역
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_SALARYORDER");

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam  = 'fnBeforeUserDataSetParam';	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged      = 'fnAfterCDTextChanged';
        	this.ccfID_SABUN.BeforeUserDataSetParam = 'fnBeforeUserDataSetParam';	// 성명
        	this.ccfID_SABUN.AfterCDTextChanged     = 'fnAfterCDTextChanged';
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_SALARY", "string");
        	this.dsSelect.addColumn("YM_SALARY", "string");
        	this.dsSelect.addColumn("SN_SALARY", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        }

        /************************************************************************
         * 콤보 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	var frame = this.getOwnerFrame();
        	if (!this.gfnIsNull(frame.ID_SABUN) && !this.gfnIsNull(frame.DS_HNAME)) {
        		this.dsSearch.setColumn(0, "YM_SALARY", frame.YM_SALARY);	// 지급년월
        		this.dsSearch.setColumn(0, "TY_SALARY", frame.TY_SALARY);	// 지급구분
        		this.dsSearch.setColumn(0, "SN_SALARY", frame.SN_SALARY);
        		this.dsSearch.setColumn(0, "CD_CORP", frame.CD_CORP);		// 법인
        		this.dsSearch.setColumn(0, "DS_CORP", frame.DS_CORP);
        		this.dsSearch.setColumn(0, "ID_SABUN", frame.ID_SABUN);		// 성명
        		this.dsSearch.setColumn(0, "DS_HNAME", frame.DS_HNAME);

        		this.FormBtns.Select.click();
        	} else {
        		this.dsSearch.setColumn(0, "YM_SALARY", this.gfnGetDate().substring(0, 6)); // 지급년월
        		this.dsSearch.setColumn(0, "TY_SALARY", "S");								// 지급구분
        		this.dsSearch.setColumn(0, "SN_SALARY", "1");
        		this.fnSetCodeFinder(this.ccfCD_CORP, this.AuthClient.CD_CORP);				// 법인
        		this.fnSetCodeFinder(this.ccfID_SABUN, this.AuthClient.ID_SABUN);			// 성명
        	}
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_SALARY", this.dsSearch.getColumn(0, "TY_SALARY"));
        	this.dsSelect.setColumn(0, "YM_SALARY", this.dsSearch.getColumn(0, "YM_SALARY"));
        	this.dsSelect.setColumn(0, "SN_SALARY", this.dsSearch.getColumn(0, "SN_SALARY"));
        	this.dsSelect.setColumn(0, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_SABUN" , this.dsSearch.getColumn(0, "ID_SABUN"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect selectBase=dsSelect";
        	var outData     = "dsList=select0 dsBase=selectBase0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /*
         * 입력 버튼
         */
        this.fnAdd = function() {

        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         * 저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         * 엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {
        	return true;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function() {
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		if (this.dsList.rowcount != 0) {
        			this.gfnGridAfterSelect(this.dxGrid);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch (id) {
        	case "ccfCD_CORP":	// 법인코드
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		break;

        	case "ccfID_SABUN":	// 사번
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.fnBeforeUserCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , "%");
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        		break;
         	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if (id == "ccfCD_CORP") {
        		this.fnResetCodeFinder(this.ccfID_SABUN, this.dsSearch, ["ID_SABUN", "DS_HNAME"]);
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.dsBase.clearData();
        	}
        }

        /************************************************************************
         * 기타 함수
         ************************************************************************/
        // 코드파인더 설정
        this.fnSetCodeFinder = function(obj, value) {
        	obj.form.CDTextBox.set_value(value);
        	obj.form.fnCodeFindLoad();
        }

        // 코드파인더 초기화
        this.fnResetCodeFinder = function(obj, dataset, columns) {
        	obj.form.fnCodeFindClear();
        	for (var i = 0; i < columns.length; i++) {
        		dataset.setColumn(0, columns[i], "");
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_SALARYBASE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
