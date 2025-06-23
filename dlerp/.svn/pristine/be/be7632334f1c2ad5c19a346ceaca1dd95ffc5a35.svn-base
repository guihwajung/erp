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
            this.set_titletext("급여일반정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1270,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PIC\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OCCUPATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADOPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DISPATCHORG\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DISPATCH\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DISPATCH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BEFPAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BEFPAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ANNUAL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HANDICAP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OLD\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ANNUITY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MONAVG_ANNUITY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_WIFE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RETIREMULTI\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HEALTH\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MONAVG_HEALTH\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HIRE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_KID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHILD\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRESTART\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RETIREPENSION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PARENT\" type=\"STRING\" size=\"256\"/><Column id=\"NM_OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPLY_PROVATION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PROVATION_TO\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAXRDT2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BANK3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT3\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SENDIFIMS\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BEFRETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OVERSEA\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OVERSEA\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OLDMEDICAL\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OLDMEDICAL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PROVATION\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PROVATION\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RESEARCH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_CONCURRENT_SELECT </Col></Row><Row><Col id=\"TARGET\">selectSingle</Col><Col id=\"SP\">DAUPR_BASEINFO_SELECT</Col></Row><Row><Col id=\"SP\">DAUPR_BASEINFO_UPDATE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"TARGET\">fileDirInfo</Col><Col id=\"SP\">DZUPR_FILEMANAGER_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"ID_SABUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RETIREPENSION", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">연금없음</Col><Col id=\"CODE\">N</Col></Row><Row><Col id=\"CODE\">DC</Col><Col id=\"VALUE\">DC</Col></Row><Row><Col id=\"CODE\">DB</Col><Col id=\"VALUE\">DB</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRT_TAXRDT2", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">100</Col><Col id=\"VALUE\">100</Col></Row><Row><Col id=\"CODE\">80</Col><Col id=\"VALUE\">80</Col></Row><Row><Col id=\"CODE\">120</Col><Col id=\"VALUE\">120</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileDirInfoParam", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileDirInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_CORP:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtID_PERSON","ccfID_SABUN:10","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta100","3","divSearch:10",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("인사정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","sta100:0",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPIC","3","9","158","175",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_stretch("fixaspectratio");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","imgPIC:10","9","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg","staID_SABUN:-1","staID_SABUN:-30","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtID_SABUN","staID_SABUN:5","staID_SABUN:-25","168","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EMPTYPE","imgPIC:10","staID_SABUN:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EMPTYPE_bg","staDS_EMPTYPE:-1","staID_SABUN_bg:-1","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMPTYPE","staDS_EMPTYPE:5","staDS_EMPTYPE:-25","168","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT","imgPIC:10","staDS_EMPTYPE:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT_bg","staDS_DEPT:-1","staDS_DEPT:-30","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_DEPT","staDS_DEPT:5","staDS_DEPT:-25","168","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_POSITION","imgPIC:10","staDS_DEPT:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_POSITION_bg","staDS_POSITION:-1","staDS_POSITION:-30","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_POSITION","staDS_POSITION:5","staDS_POSITION:-25","168","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_JOIN","imgPIC:10","staDS_POSITION:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("입사일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_JOIN_bg","staDT_JOIN:-1","staDT_JOIN:-30","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDT_JOIN","staDT_JOIN:5","staDT_JOIN:-25","168","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DISPATCHORG","imgPIC:10","staDT_JOIN:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_text("파견부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DISPATCHORG_bg","staCD_DISPATCHORG:-1","staCD_DISPATCHORG:-30","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_DISPATCHORG","staCD_DISPATCHORG:5","staCD_DISPATCHORG:-25","168","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME","staID_SABUN_bg:-1","9","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME_bg","staDS_HNAME:-1","staDS_HNAME:-30","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_HNAME","staDS_HNAME:5","staDS_HNAME:-25","168","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_JOBTYPE","staDS_EMPTYPE_bg:-1","staDS_EMPTYPE_bg:-30","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_JOBTYPE_bg","staDS_JOBTYPE:-1","staDS_JOBTYPE:-30","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_JOBTYPE","staDS_JOBTYPE:5","staDS_JOBTYPE:-25","168","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_OCCUPATION","staDS_DEPT_bg:-1","staDS_DEPT_bg:-30","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_OCCUPATION_bg","staDS_OCCUPATION:-1","staDS_OCCUPATION:-30","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_OCCUPATION","staDS_OCCUPATION:5","staDS_OCCUPATION:-25","168","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_PAYSTEP","staDS_POSITION_bg:-1","staDS_POSITION_bg:-30","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("근속연차");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_PAYSTEP_bg","staCD_PAYSTEP:-1","staCD_PAYSTEP:-30","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_PAYSTEP","staCD_PAYSTEP:5","staCD_PAYSTEP:-25","168","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_JOIN_GROUP","staDT_JOIN_bg:-1","staDT_JOIN_bg:-30","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("그룹입사일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_GROUPJOIN_bg","staDT_JOIN_GROUP:-1","staDT_JOIN_GROUP:-30","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDT_JOIN_GROUP","staDT_JOIN_GROUP:5","staDT_JOIN_GROUP:-25","168","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staFR_DISPATCH","staCD_DISPATCHORG_bg:-1","staCD_DISPATCHORG_bg:-30","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_text("파견기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staFR_DISPATCH_bg","staFR_DISPATCH:-1","staFR_DISPATCH:-30","453","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtFR_DISPATCH","staFR_DISPATCH:5","staFR_DISPATCH:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO","edtFR_DISPATCH:0","staFR_DISPATCH:-25","30","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTO_DISPATCH","staDT_ORD_TO:0","staFR_DISPATCH:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_RETIRE","staDS_HNAME_bg:-1","staDS_HNAME_bg:-30","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("근무구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_RETIRE_bg","staDS_RETIRE:-1","staDS_RETIRE:-30","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_RETIRE","staDS_RETIRE:5","staDS_RETIRE:-25","168","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CORP","staDS_JOBTYPE_bg:-1","staDS_JOBTYPE_bg:-30","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("소속법인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CORP_bg","staDS_CORP:-1","staDS_CORP:-30","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_CORP","staDS_CORP:5","staDS_CORP:-25","168","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DUTY","staDS_OCCUPATION_bg:-1","staDS_OCCUPATION_bg:-30","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("직무");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DUTY_bg","staCD_DUTY:-1","staCD_DUTY:-30","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_DUTY","staCD_DUTY:5","staCD_DUTY:-25","168","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ADOPTYPE","staCD_PAYSTEP_bg:-1","staCD_PAYSTEP_bg:-30","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("채용구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ADOPTYPE_bg","staDS_ADOPTYPE:-1","staDS_ADOPTYPE:-30","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ADOPTYPE","staDS_ADOPTYPE:5","staDS_ADOPTYPE:-25","168","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRE","staDT_GROUPJOIN_bg:-1","staDT_GROUPJOIN_bg:-30","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_text("퇴사일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta16","staDT_RETIRE:-1","staDT_RETIRE:-30","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDT_RETIRE","staDT_RETIRE:5","staDT_RETIRE:-25","168","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData2","0","divData:10",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData2.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData2.addChild(obj.name, obj);

            obj = new Static("sta200","3","divData2:40",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("급여기본사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData3","0","divData2:10",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYN_ANNUAL","0","60","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("0");
            obj.set_text("연봉구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_ANNUAL_bg","staYN_ANNUAL:-1","staYN_ANNUAL:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_ANNUAL","staYN_ANNUAL:5","65","130","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("2");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData3_form_rdoYN_ANNUAL_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_ANNUAL_innerdataset", obj);
            divData3_form_rdoYN_ANNUAL_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">연봉제</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_ANNUAL_innerdataset);
            obj.set_text("Y");
            obj.set_index("0");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_WIFE","0","staYN_ANNUAL:-1","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("12");
            obj.set_text("배우자공제");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("rdoYN_WIFE_bg","staYN_WIFE:-1","staYN_WIFE:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_WIFE","staYN_WIFE:5","staYN_WIFE:-25","100","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("14");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData3_form_rdoYN_WIFE_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_WIFE_innerdataset", obj);
            divData3_form_rdoYN_WIFE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_WIFE_innerdataset);
            obj.set_text("Y");
            obj.set_index("0");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_KID","0","staYN_WIFE:-1","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("36");
            obj.set_text("부양자\r\n(8세미만/8세이상)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_KID_bg","staNO_KID:-1","staNO_KID:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("edtNO_KID","staNO_KID:5","staNO_KID:-25","49","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("38");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_CHILD","edtNO_KID:0","staNO_KID:-30","30","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("65");
            obj.set_text("/");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_AC");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("edtNO_CHILD","staNO_CHILD:0","staNO_KID:-25","49","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("102");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_PARENT","0","staNO_KID:-1","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("48");
            obj.set_text("부양자(60)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_PARENT_bg","staNO_PARENT:-1","staNO_PARENT:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("edtNO_PARENT","staNO_PARENT:5","staNO_PARENT:-25","49","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("50");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_OLD","0","staNO_PARENT:-1","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("62");
            obj.set_text("경로우대/장애인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_OLD_bg","staNO_OLD:-1","staNO_OLD:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("edtNO_OLD","staNO_OLD:5","staNO_OLD:-25","49","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("64");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_HANDICAP","edtNO_OLD:0","staNO_OLD:-30","30","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("65");
            obj.set_text("/");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_AC");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("edtNO_HANDICAP","staNO_HANDICAP:0","staNO_OLD:-25","49","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("66");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_PROVATION","0","staNO_OLD:-1","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("80");
            obj.set_text("수습적용여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_PROVATION_bg","staYN_PROVATION:-1","staYN_PROVATION:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_PROVATION","staYN_PROVATION:5","staYN_PROVATION:-25","102","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("79");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData3_form_rdoYN_PROVATION_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_PROVATION_innerdataset", obj);
            divData3_form_rdoYN_PROVATION_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_PROVATION_innerdataset);
            obj.set_text("Y");
            obj.set_index("0");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_SALARY","staYN_ANNUAL_bg:-1","staYN_ANNUAL_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("급여적용여부");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_SALARY_bg","staYN_SALARY:-1","staYN_SALARY:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text(" ");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SALARY","staYN_SALARY:5","staYN_SALARY:-25","100","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("5");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData3_form_rdoYN_SALARY_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_SALARY_innerdataset", obj);
            divData3_form_rdoYN_SALARY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_SALARY_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_OVERSEA","rdoYN_WIFE_bg:-1","rdoYN_WIFE_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("해외근무여부");
            obj.set_textDecoration("none");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_OVERSEA_bg","staYN_OVERSEA:-1","staYN_OVERSEA:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text(" ");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_OVERSEA","staYN_OVERSEA:5","staYN_OVERSEA:-25","100","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("29");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData3_form_rdoYN_OVERSEA_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_OVERSEA_innerdataset", obj);
            divData3_form_rdoYN_OVERSEA_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_OVERSEA_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staRT_OVERSEA","staNO_KID_bg:-1","staNO_KID_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("해외근무비율");
            obj.set_textDecoration("none");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staRT_OVERSEA_bg","staRT_OVERSEA:-1","staRT_OVERSEA:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text(" ");
            this.divData3.addChild(obj.name, obj);

            obj = new Combo("cboRT_OVERSEA","staRT_OVERSEA:5","staRT_OVERSEA:-25","129","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("41");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData3_form_cboRT_OVERSEA_innerdataset = new nexacro.NormalDataset("divData3_form_cboRT_OVERSEA_innerdataset", obj);
            divData3_form_cboRT_OVERSEA_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\"/><Col id=\"codecolumn\"/></Row><Row><Col id=\"datacolumn\">70%</Col><Col id=\"codecolumn\">70</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_cboRT_OVERSEA_innerdataset);
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRESTART","staNO_PARENT_bg:-1","staNO_PARENT_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("51");
            obj.set_text("퇴직금기산일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRESTART_bg","staDT_RETIRESTART:-1","staDT_RETIRESTART:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text(" ");
            this.divData3.addChild(obj.name, obj);

            obj = new Calendar("calDT_RETIRESTART","staDT_RETIRESTART:5","staDT_RETIRESTART:-25","129","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("53");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_RETIREMULTI","staNO_OLD_bg:-1","staNO_OLD_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("67");
            obj.set_text("퇴직금배율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNO_RETIREMULTI_bg","staNO_RETIREMULTI:-1","staNO_RETIREMULTI:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("edtNO_RETIREMULTI","staNO_RETIREMULTI:5","staNO_RETIREMULTI:-25","49","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("69");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staRT_PROVATION","staYN_PROVATION_bg:-1","staYN_PROVATION_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("수습적용비율");
            obj.set_textDecoration("none");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staRT_PROVATION_bg","staRT_PROVATION:-1","staRT_PROVATION:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text(" ");
            this.divData3.addChild(obj.name, obj);

            obj = new Combo("cboRT_PROVATION","staRT_PROVATION:5","staRT_PROVATION:-25","129","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("85");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData3_form_cboRT_PROVATION_innerdataset = new nexacro.NormalDataset("divData3_form_cboRT_PROVATION_innerdataset", obj);
            divData3_form_cboRT_PROVATION_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">70</Col><Col id=\"datacolumn\">70</Col></Row><Row><Col id=\"datacolumn\">80</Col><Col id=\"codecolumn\">80</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_cboRT_PROVATION_innerdataset);
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_ANNUITY","staYN_SALARY_bg:-1","staYN_SALARY_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("6");
            obj.set_text("국민연금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_ANNUITY_bg","staYN_ANNUITY:-1","staYN_ANNUITY:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_ANNUITY","staYN_ANNUITY:5","staYN_ANNUITY:-25","100","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("8");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData3_form_rdoYN_ANNUITY_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_ANNUITY_innerdataset", obj);
            divData3_form_rdoYN_ANNUITY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_ANNUITY_innerdataset);
            obj.set_text("Y");
            obj.set_index("0");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_HEALTH","staYN_OVERSEA_bg:-1","staYN_OVERSEA_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("18");
            obj.set_text("건강보험");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_HEALTH_bg","staYN_HEALTH:-1","staYN_HEALTH:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_HEALTH","staYN_HEALTH:5","staYN_HEALTH:-25","100","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("20");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData3_form_rdoYN_HEALTH_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_HEALTH_innerdataset", obj);
            divData3_form_rdoYN_HEALTH_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_HEALTH_innerdataset);
            obj.set_text("Y");
            obj.set_index("0");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_HIRE","staRT_OVERSEA_bg:-1","staRT_OVERSEA_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("30");
            obj.set_text("고용보험");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_HIRE_bg","staYN_HIRE:-1","staYN_HIRE:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_HIRE","staYN_HIRE:5","staYN_HIRE:-25","100","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("32");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData3_form_rdoYN_HIRE_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_HIRE_innerdataset", obj);
            divData3_form_rdoYN_HIRE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_HIRE_innerdataset);
            obj.set_text("Y");
            obj.set_index("0");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_OLDMEDICAL","staDT_RETIRESTART_bg:-1","staDT_RETIRESTART_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("42");
            obj.set_text("노인요양할인대상");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_OLDMEDICAL_bg","staYN_OLDMEDICAL:-1","staYN_OLDMEDICAL:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_OLDMEDICAL","staYN_OLDMEDICAL:5","staYN_OLDMEDICAL:-25","100","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("44");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData3_form_rdoYN_OLDMEDICAL_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_OLDMEDICAL_innerdataset", obj);
            divData3_form_rdoYN_OLDMEDICAL_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">Y</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">N</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_OLDMEDICAL_innerdataset);
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staRT_OLDMEDICAL","staNO_RETIREMULTI_bg:-1","staNO_RETIREMULTI_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("54");
            obj.set_text("노인요양할인비율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staRT_OLDMEDICAL_bg","staRT_OLDMEDICAL:-1","staRT_OLDMEDICAL:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Combo("cboRT_OLDMEDICAL","staRT_OLDMEDICAL:5","staRT_OLDMEDICAL:-25","129","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("56");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData3_form_cboRT_OLDMEDICAL_innerdataset = new nexacro.NormalDataset("divData3_form_cboRT_OLDMEDICAL_innerdataset", obj);
            divData3_form_cboRT_OLDMEDICAL_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\"/></Row><Row><Col id=\"datacolumn\">30%</Col><Col id=\"codecolumn\">30</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_cboRT_OLDMEDICAL_innerdataset);
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staDT_PROVATION_TO","staRT_PROVATION_bg:-1","staRT_PROVATION_bg:-30","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("91");
            obj.set_text("수습종료일 ");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staDT_PROVATION_TO_bg","staDT_PROVATION_TO:-1","staDT_PROVATION_TO:-30","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Calendar("calDT_PROVATION_TO","staDT_PROVATION_TO:5","staDT_PROVATION_TO:-25","129","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("92");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_MONAVG_ANNUITY","staYN_ANNUITY_bg:-1","staYN_ANNUITY_bg:-30","170","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("9");
            obj.set_text("국민연금보수월액/증번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_MONAVG_ANNUITY_bg","staAM_MONAVG_ANNUITY:-1","staAM_MONAVG_ANNUITY:-30","250","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_MONAVG_ANNUITY","staAM_MONAVG_ANNUITY:5","staAM_MONAVG_ANNUITY:-25","135","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("11");
            obj.set_format("#,###");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("edtNO_ANNUITY","edtAM_MONAVG_ANNUITY:5","staAM_MONAVG_ANNUITY:-25","100","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("103");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_MONAVG_HEALTH","staYN_HEALTH_bg:-1","staYN_HEALTH_bg:-30","170","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("21");
            obj.set_text("건강보험보수월액/증번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_MONAVG_HEALTH_bg","staAM_MONAVG_HEALTH:-1","staAM_MONAVG_HEALTH:-30","250","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_MONAVG_HEALTH","staAM_MONAVG_HEALTH:5","staAM_MONAVG_HEALTH:-25","135","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("23");
            obj.set_format("#,###");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("edtNO_HEALTH","edtAM_MONAVG_HEALTH:5","staAM_MONAVG_HEALTH:-25","100","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("104");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staRT_TAXRDT2","staYN_HIRE_bg:-1","staYN_HIRE_bg:-30","170","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("33");
            obj.set_text("소득세율비율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staRT_TAXRDT2_bg","staRT_TAXRDT2:-1","staRT_TAXRDT2:-30","250","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Combo("cboRT_TAXRDT2","staRT_TAXRDT2:5","staRT_TAXRDT2:-25","105","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData3_form_cboRT_TAXRDT2_innerdataset = new nexacro.NormalDataset("divData3_form_cboRT_TAXRDT2_innerdataset", obj);
            divData3_form_cboRT_TAXRDT2_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\"/></Row><Row><Col id=\"datacolumn\">100%</Col><Col id=\"codecolumn\">100</Col></Row><Row><Col id=\"datacolumn\">80%</Col><Col id=\"codecolumn\">80</Col></Row><Row><Col id=\"datacolumn\">120%</Col><Col id=\"codecolumn\">120</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_cboRT_TAXRDT2_innerdataset);
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staCD_BANK","staYN_OLDMEDICAL_bg:-1","staYN_OLDMEDICAL_bg:-30","170","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("45");
            obj.set_text("송금은행");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_enable("true");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staCD_BANK_bg","staCD_BANK:-1","staCD_BANK:-30","250","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Div("cfCD_BANK","staCD_BANK:5","staCD_BANK:-25","240","20",null,null,null,null,null,null,this.divData3.form);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("47");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DFX_CFBANKCODE");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT","staRT_OLDMEDICAL_bg:-1","staRT_OLDMEDICAL_bg:-30","170","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("57");
            obj.set_text("송금구좌/예금주");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT_bg","staCD_ACCOUNT:-1","staCD_ACCOUNT:-30","250","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("edtCD_ACCOUNT","staCD_ACCOUNT:5","staCD_ACCOUNT:-25","105","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("59");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staNM_OWNER","edtCD_ACCOUNT:0","staCD_ACCOUNT:-27","30","23",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("60");
            obj.set_text("/");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_AC");
            this.divData3.addChild(obj.name, obj);

            obj = new Edit("edtNM_OWNER","staNM_OWNER:0","staCD_ACCOUNT:-25","105","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("61");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staTY_RETIREPENSION","staDT_PROVATION_TO_bg:-1","staDT_PROVATION_TO_bg:-30","170","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("70");
            obj.set_text("퇴직연금/은행");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staTY_RETIREPENSION_bg","staTY_RETIREPENSION:-1","staTY_RETIREPENSION:-30","250","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Combo("cboTY_RETIREPENSION","staTY_RETIREPENSION:5","staTY_RETIREPENSION:-25","105","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("72");
            obj.set_innerdataset("dsTY_RETIREPENSION");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_RESEARCH","0","234","130","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("80");
            obj.set_text("연구개발비여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData3.addChild(obj.name, obj);

            obj = new Static("staYN_RESEARCH_bg","129","234","140","30",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData3.addChild(obj.name, obj);

            obj = new Radio("rdoYN_RESEARCH","135","240","102","20",null,null,null,null,null,null,this.divData3.form);
            obj.set_taborder("82");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData3_form_rdoYN_RESEARCH_innerdataset = new nexacro.NormalDataset("divData3_form_rdoYN_RESEARCH_innerdataset", obj);
            divData3_form_rdoYN_RESEARCH_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData3_form_rdoYN_RESEARCH_innerdataset);
            obj.set_text("N");
            obj.set_value("N");
            obj.set_index("1");
            this.divData3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtID_SABUN","value","dsDetail","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtDS_HNAME","value","dsDetail","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtDS_RETIRE","value","dsDetail","DS_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtDS_EMPTYPE","value","dsDetail","DS_EMPTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtDS_JOBTYPE","value","dsDetail","DS_JOBTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtDS_CORP","value","dsDetail","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtDS_DEPT","value","dsDetail","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtDS_OCCUPATION","value","dsDetail","DS_OCCUPATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtDS_DUTY","value","dsDetail","DS_DUTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.edtDS_POSITION","value","dsDetail","DS_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.edtDS_PAYSTEP","value","dsDetail","DS_PAYSTEP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.edtDS_ADOPTYPE","value","dsDetail","DS_ADOPTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.edtDT_JOIN","value","dsDetail","DT_JOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.edtDT_JOIN_GROUP","value","dsDetail","DT_JOIN_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.edtDT_RETIRE","value","dsDetail","DT_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.edtDS_DISPATCHORG","value","dsDetail","DS_DISPATCHORG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.edtFR_DISPATCH","value","dsDetail","DS_BEFPAYSTEP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData3.form.rdoYN_ANNUAL","value","dsDetail","YN_ANNUAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData3.form.edtNO_HANDICAP","value","dsDetail","NO_HANDICAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData3.form.edtNO_OLD","value","dsDetail","NO_OLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData3.form.rdoYN_ANNUITY","value","dsDetail","YN_ANNUITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData3.form.rdoYN_WIFE","value","dsDetail","YN_WIFE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData3.form.edtNO_RETIREMULTI","value","dsDetail","NO_RETIREMULTI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData3.form.rdoYN_HEALTH","value","dsDetail","YN_HEALTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData3.form.rdoYN_HIRE","value","dsDetail","YN_HIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData3.form.cfCD_BANK.form.CDTextBox","value","dsDetail","CD_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData3.form.cfCD_BANK.form.DSTextBox","value","dsDetail","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData3.form.edtNO_KID","value","dsDetail","NO_KID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData3.form.cboTY_RETIREPENSION","value","dsDetail","TY_RETIREPENSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData3.form.edtCD_ACCOUNT","value","dsDetail","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData3.form.edtNO_PARENT","value","dsDetail","NO_PARENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData3.form.edtNM_OWNER","value","dsDetail","NM_OWNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData3.form.rdoYN_OVERSEA","value","dsDetail","YN_OVERSEA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData3.form.cboRT_OVERSEA","value","dsDetail","RT_OVERSEA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData3.form.rdoYN_OLDMEDICAL","value","dsDetail","YN_OLDMEDICAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData3.form.cboRT_OLDMEDICAL","value","dsDetail","RT_OLDMEDICAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData3.form.cboRT_TAXRDT2","value","dsDetail","RT_TAXRDT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData3.form.calDT_RETIRESTART","value","dsDetail","DT_RETIRESTART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData3.form.edtAM_MONAVG_ANNUITY","value","dsDetail","AM_MONAVG_ANNUITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData3.form.edtAM_MONAVG_HEALTH","value","dsDetail","AM_MONAVG_HEALTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData3.form.rdoYN_SALARY","value","dsDetail","YN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divSearch.form.txtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.edtTO_DISPATCH","value","dsDetail","DS_BEFPAYSTEP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData3.form.rdoYN_PROVATION","value","dsDetail","YN_PROVATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData3.form.cboRT_PROVATION","value","dsDetail","RT_PROVATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData3.form.calDT_PROVATION_TO","value","dsDetail","DT_PROVATION_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData3.form.edtNO_CHILD","value","dsDetail","NO_CHILD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData3.form.edtNO_ANNUITY","value","dsDetail","NO_ANNUITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData3.form.edtNO_HEALTH","value","dsDetail","NO_HEALTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData3.form.rdoYN_RESEARCH","value","dsDetail","YN_RESEARCH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_BASEINFO.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.filepath = ""; //"/DA/BASEINFO/";

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
        	//this.fnSetCombo();

        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_USER);
        	this.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);
        	this.txtID_PERSON.set_value(this.AuthClient.ID_PERSON);

        	this.fnSetEnable();

        	this.filepath = this.fnGetfilepath("DA00");

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        // 	this.FormBtns.Select.set_enable(false);
        // 	this.FormBtns.Add.set_enable(true);
         	/*this.FormBtns.Save.set_enable(false);*/
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
           //this.btnCnstAgent  = this.gfnFormButtonAdd("CnstAgent", "fnCnstAgent", "현장대리인");
        	this.btnFixedAllow = this.gfnFormButtonAdd("FixedAllow", "fnFixedAllow");
        	this.btnFixedSubst = this.gfnFormButtonAdd("FixedSubst", "fnFixedSubst");
        };


         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
        this.fnCnstAgent = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	// 현장대리인
        	var param = {};
        	//this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWZ_CNST_AGENT", "", param);
        	//this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWZ_CNST_AGENT", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        	this.gfnFormOpenNonAuth("DWZ", "DWZ_CNST_AGENT", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        }
        */

        this.fnFixedAllow = function(obj,e) {
        	// 고정수당
        	var param = {};

        	param.ID_SABUN = this.ccfID_SABUN.form.CDTextBox.value;
        	param.DS_HNAME = this.ccfID_SABUN.form.DSTextBox.value;

        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_FIXEDALLOW", "", param);

        }

        this.fnFixedSubst = function(obj,e) {
        	// 고정공제
        	var param = {};

        	param.ID_SABUN = this.ccfID_SABUN.form.CDTextBox.value;
        	param.DS_HNAME = this.ccfID_SABUN.form.DSTextBox.value;

        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_FIXEDSUBST", "", param);

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.txtID_PERSON = this.divSearch.form.txtID_PERSON;

        	this.dxGrid = this.divData2.form.objGrid;

        	/* 저장 싱글폼 변수*/
        	this.rdoYN_ANNUAL = this.divData3.form.rdoYN_ANNUAL;
        	this.rdoYN_SALARY = this.divData3.form.rdoYN_SALARY;
        	this.rdoYN_WIFE = this.divData3.form.rdoYN_WIFE;
        	//this.rdoYN_JKSUBST = this.divData3.form.rdoYN_JKSUBST;
        	this.edtNO_CHILD = this.divData3.form.edtNO_CHILD;
        	this.edtNO_PARENT = this.divData3.form.edtNO_PARENT;
        	this.edtNO_OLD = this.divData3.form.edtNO_OLD;
        	//this.rdoYN_BONUS = this.divData3.form.rdoYN_BONUS;
        	this.rdoYN_PROVATION = this.divData3.form.rdoYN_PROVATION;
        	this.edtNO_HANDICAP = this.divData3.form.edtNO_HANDICAP;
        	this.edtNO_RETIREMULTI = this.divData3.form.edtNO_RETIREMULTI;
        	this.ctclDT_RETIRESTART = this.divData3.form.ctclDT_RETIRESTART;
        	//this.rdoYN_TAXRDT = this.divData3.form.rdoYN_TAXRDT;
        	//this.cboRT_TAXRDT = this.divData3.form.cboRT_TAXRDT;
        	this.ctclDT_PROVATION_TO = this.divData3.form.ctclDT_PROVATION_TO;
        	this.rdoYN_ANNUITY = this.divData3.form.rdoYN_ANNUITY;
        	this.rdoYN_HEALTH = this.divData3.form.rdoYN_HEALTH;
        	this.rdoYN_HIRE = this.divData3.form.rdoYN_HIRE;
        	this.cboTY_RETIREPENSION = this.divData3.form.cboTY_RETIREPENSION;
        	//this.cboTY_TAXRDT = this.divData3.form.cboTY_TAXRDT;
        // 	this.ctclFR_TAXRDT = this.divData3.form.ctclFR_TAXRDT;
        // 	this.ctclTO_TAXRDT = this.divData3.form.ctclTO_TAXRDT;
        	this.cboRT_TAXRDT2 = this.divData3.form.cboRT_TAXRDT2;
        	this.edtAM_MONAVG_ANNUITY = this.divData3.form.edtAM_MONAVG_ANNUITY;
        	this.edtAM_MONAVG_HEALTH = this.divData3.form.edtAM_MONAVG_HEALTH;
        	this.cfCD_BANK = this.divData3.form.cfCD_BANK.form.CDTextBox;
        	this.edtCD_ACCOUNT = this.divData3.form.edtCD_ACCOUNT;
        	this.edtNM_OWNER = this.divData3.form.edtNM_OWNER;
        	//this.cfCD_RETIRBANK = this.divData3.form.cfCD_RETIRBANK.form.CDTextBox;
        	//this.cfCD_RETIRBANK = this.divData3.form.cfCD_RETIRBANK;
        	this.rdoYN_OVERSEA = this.divData3.form.rdoYN_OVERSEA;
        	this.edtNO_ANNUITY = this.divData3.form.edtNO_ANNUITY;
        	this.edtNO_HEALTH = this.divData3.form.edtNO_HEALTH;
        	this.rdoYN_RESEARCH = this.divData3.form.rdoYN_RESEARCH;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_BASEINFO");

        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP_CODEFIND";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "codefind_AfterCDTextChanged";


        	this.edtNO_CHILD.set_inputtype("number");
        	this.edtNO_PARENT.set_inputtype("number");
        	this.edtNO_OLD.set_inputtype("number");
        	this.edtNO_HANDICAP.set_inputtype("number");
        	this.edtNO_RETIREMULTI.set_inputtype("number");
        	this.edtNO_CHILD.set_inputtype("number");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("YN_ANNUAL", "string");
        	this.dsUpdate.addColumn("YN_WIFE", "string");
        	this.dsUpdate.addColumn("YN_JKSUBST", "string");
        	this.dsUpdate.addColumn("NO_KID", "int");
        	this.dsUpdate.addColumn("NO_CHILD", "int");
        	this.dsUpdate.addColumn("NO_PARENT", "int");
        	this.dsUpdate.addColumn("NO_OLD", "int");
        	this.dsUpdate.addColumn("NO_HANDICAP", "int");
        	this.dsUpdate.addColumn("YN_SALARY", "string");
        	this.dsUpdate.addColumn("YN_BONUS", "string");
        	this.dsUpdate.addColumn("YN_OVERSEA", "string");
        	this.dsUpdate.addColumn("RT_OVERSEA", "int");
        	this.dsUpdate.addColumn("DT_RETIRESTART", "string");
        	this.dsUpdate.addColumn("NO_RETIREMULTI", "int");
        	this.dsUpdate.addColumn("YN_ANNUITY", "string");
        	this.dsUpdate.addColumn("YN_HEALTH", "string");
        	this.dsUpdate.addColumn("YN_HIRE", "string");
        	this.dsUpdate.addColumn("YN_OLDMEDICAL", "string");
        	this.dsUpdate.addColumn("RT_OLDMEDICAL", "int");
        	this.dsUpdate.addColumn("TY_RETIREPENSION", "string");
        	this.dsUpdate.addColumn("QN_RETIREPENSION", "int");
        	this.dsUpdate.addColumn("CD_RETIRBANK", "string");
        	this.dsUpdate.addColumn("CD_RETIRACCOUNT", "string");
        	this.dsUpdate.addColumn("AM_MONAVG_ANNUITY", "bigdecimal");
        	this.dsUpdate.addColumn("NO_ANNUITY", "string");
        	this.dsUpdate.addColumn("AM_MONAVG_HEALTH", "bigdecimal");
        	this.dsUpdate.addColumn("NO_HEALTH", "string");
        	this.dsUpdate.addColumn("RT_TAXRDT2", "int");
        	this.dsUpdate.addColumn("CD_BANK", "string");
        	this.dsUpdate.addColumn("CD_ACCOUNT", "string");
        	this.dsUpdate.addColumn("NM_OWNER", "string");
        	this.dsUpdate.addColumn("YN_FAMILYEVENT", "string");
        	this.dsUpdate.addColumn("YN_TAXRDT", "string");
        	this.dsUpdate.addColumn("TY_TAXRDT", "string");
        	this.dsUpdate.addColumn("RT_TAXRDT", "int");
        	this.dsUpdate.addColumn("FR_TAXRDT", "string");
        	this.dsUpdate.addColumn("TO_TAXRDT", "string");
        	this.dsUpdate.addColumn("YN_PROVATION", "string");
        	this.dsUpdate.addColumn("RT_PROVATION", "int");
        	this.dsUpdate.addColumn("DT_PROVATION_TO", "string");
        	this.dsUpdate.addColumn("YN_SENDIFIMS", "string");
        	this.dsUpdate.addColumn("YN_BEFRETIRE", "string");
        	this.dsUpdate.addColumn("YN_CAR", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("IP_ADDR", "string");
        	this.dsUpdate.addColumn("GR_SEARCH", "string");
        	this.dsUpdate.addColumn("GR_CORP", "string");
        	this.dsUpdate.addColumn("YN_RESEARCH", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function(val) {
        	if(val === undefined) {
        		if(!this.fnValidate()) return;
        	}

        	this.gfnGridBeforeSelect(this.dxGrid);
        	//this.gfnSetFormStatus(this);

        	var id_sabun = this.dsSearch.getColumn(0, "ID_SABUN"); //this.divSearch.form.ccfID_SABUN.value;
        	var id_person = this.dsSearch.getColumn(0, "ID_PERSON"); //this.divSearch.form.ccfID_SABUN.value;
        	var cd_corp = this.dsSearch.getColumn(0, "CD_CORP"); //this.divSearch.form.ccfID_SABUN.value;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "ID_PERSON", id_person);
        	this.dsSelect.setColumn(0, "CD_CORP", cd_corp);
        	this.dsSelect.setColumn(0, "ID_SABUN", id_sabun);

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

        this.fnSelectDetail = function() {
        	//if (this.dsList.rowcount == 0) return;

        	//this.gfnSetFormStatus(this);

        	var cd_corp = this.dsSearch.getColumn(0, "CD_CORP"); //this.divSearch.form.ccfCD_CORP.value;
        	var id_sabun = this.dsSearch.getColumn(0, "ID_SABUN"); //this.divSearch.form.ccfID_SABUN.value;
        	var id_person = this.dsSearch.getColumn(0, "ID_PERSON"); //this.divSearch.form.ccfID_SABUN.value;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", cd_corp);
        	this.dsSelect.setColumn(0, "ID_SABUN", id_sabun);
        	this.dsSelect.setColumn(0, "ID_PERSON", id_person);

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "selectSingle=dsSelect";
         	var outData     = "dsDetail=selectSingle0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	/*
        	var nRow = this.gfnGridAdd(this.dxGrid);
        	this.gfnSetFormStatus(this, "I");

        	this.cfCD_CORP.form.CDTextBox.set_enable(true);
        	this.cfCD_CORP.form.BtnSearch.set_enable(true);
        	this.cfCD_CORP.form.DSTextBox.set_enable(true);

        	this.cfCD_BANK.form.CDTextBox.set_enable(true);
        	this.cfCD_BANK.form.BtnSearch.set_enable(true);
        	this.cfCD_BANK.form.DSTextBox.set_enable(true);

        	this.cfCD_ADDR.form.CDTextBox.set_enable(true);
        	this.cfCD_ADDR.form.BtnSearch.set_enable(true);
        	this.cfCD_ADDR.form.DSTextBox.set_enable(true);
        	*/
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	/*
        	this.gfnGridDel(this.dxGrid);
        	this.gfnSetFormStatus(this, "D");
        	*/
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	this.dsUpdate.clearData();

        	var flag = this.gfnGetFormStatus(this);

        	switch(flag) {
        		case "I":
        		case "U":
        			if (!this.fnDataValidate()) return;

        			var nrow = this.dsUpdate.addRow();

        			this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsDetail.getColumn(0, "CD_CORP"));
        			this.dsUpdate.setColumn(nrow, "ID_SABUN", this.dsDetail.getColumn(0, "ID_SABUN"));
        			this.dsUpdate.setColumn(nrow, "YN_ANNUAL", this.dsDetail.getColumn(0, "YN_ANNUAL"));
        			this.dsUpdate.setColumn(nrow, "YN_WIFE", this.dsDetail.getColumn(0, "YN_WIFE"));
        			this.dsUpdate.setColumn(nrow, "YN_JKSUBST", "N");	//this.dsDetail.getColumn(0, "YN_JKSUBST"));
        			this.dsUpdate.setColumn(nrow, "NO_KID", this.dsDetail.getColumn(0, "NO_KID"));
        			this.dsUpdate.setColumn(nrow, "NO_CHILD", this.dsDetail.getColumn(0, "NO_CHILD"));
        			this.dsUpdate.setColumn(nrow, "NO_PARENT", this.dsDetail.getColumn(0, "NO_PARENT"));
        			this.dsUpdate.setColumn(nrow, "NO_OLD", this.dsDetail.getColumn(0, "NO_OLD"));
        			this.dsUpdate.setColumn(nrow, "NO_HANDICAP", this.dsDetail.getColumn(0, "NO_HANDICAP"));
        			this.dsUpdate.setColumn(nrow, "YN_SALARY", this.dsDetail.getColumn(0, "YN_SALARY"));
        			this.dsUpdate.setColumn(nrow, "YN_BONUS", "N");	//this.dsDetail.getColumn(0, "YN_BONUS"));
        			this.dsUpdate.setColumn(nrow, "YN_OVERSEA", this.dsDetail.getColumn(0, "YN_OVERSEA"));
        			this.dsUpdate.setColumn(nrow, "RT_OVERSEA", this.dsDetail.getColumn(0, "RT_OVERSEA"));
        			this.dsUpdate.setColumn(nrow, "DT_RETIRESTART", this.dsDetail.getColumn(0, "DT_RETIRESTART"));
        			this.dsUpdate.setColumn(nrow, "NO_RETIREMULTI", this.dsDetail.getColumn(0, "NO_RETIREMULTI"));
        			this.dsUpdate.setColumn(nrow, "YN_ANNUITY", this.dsDetail.getColumn(0, "YN_ANNUITY"));
        			this.dsUpdate.setColumn(nrow, "YN_HEALTH", this.dsDetail.getColumn(0, "YN_HEALTH"));
        			this.dsUpdate.setColumn(nrow, "YN_HIRE", this.dsDetail.getColumn(0, "YN_HIRE"));
        			this.dsUpdate.setColumn(nrow, "YN_OLDMEDICAL", this.dsDetail.getColumn(0, "YN_OLDMEDICAL"));
        			this.dsUpdate.setColumn(nrow, "RT_OLDMEDICAL", this.dsDetail.getColumn(0, "RT_OLDMEDICAL"));
        			this.dsUpdate.setColumn(nrow, "TY_RETIREPENSION", this.dsDetail.getColumn(0, "TY_RETIREPENSION"));
        			this.dsUpdate.setColumn(nrow, "QN_RETIREPENSION", "");		//this.dsDetail.getColumn(0, "QN_RETIREPENSION"));
        			this.dsUpdate.setColumn(nrow, "CD_RETIRBANK", "");		//this.dsDetail.getColumn(0, "CD_RETIRBANK"));
        			this.dsUpdate.setColumn(nrow, "CD_RETIRACCOUNT", "");		//this.dsDetail.getColumn(0, "CD_RETIRACCOUNT"));
        			this.dsUpdate.setColumn(nrow, "AM_MONAVG_ANNUITY", this.dsDetail.getColumn(0, "AM_MONAVG_ANNUITY"));
        			this.dsUpdate.setColumn(nrow, "NO_ANNUITY", this.dsDetail.getColumn(0, "NO_ANNUITY"));
        			this.dsUpdate.setColumn(nrow, "AM_MONAVG_HEALTH", this.dsDetail.getColumn(0, "AM_MONAVG_HEALTH"));
        			this.dsUpdate.setColumn(nrow, "NO_HEALTH", this.dsDetail.getColumn(0, "NO_HEALTH"));
        			this.dsUpdate.setColumn(nrow, "RT_TAXRDT2", this.dsDetail.getColumn(0, "RT_TAXRDT2"));
        			this.dsUpdate.setColumn(nrow, "CD_BANK", this.dsDetail.getColumn(0, "CD_BANK"));
        			this.dsUpdate.setColumn(nrow, "CD_ACCOUNT", this.dsDetail.getColumn(0, "CD_ACCOUNT"));
        			this.dsUpdate.setColumn(nrow, "NM_OWNER", this.dsDetail.getColumn(0, "NM_OWNER"));
        			this.dsUpdate.setColumn(nrow, "YN_FAMILYEVENT", this.dsDetail.getColumn(0, "YN_FAMILYEVENT"));
        			this.dsUpdate.setColumn(nrow, "YN_TAXRDT", "N");	//this.dsDetail.getColumn(0, "YN_TAXRDT"));
        			this.dsUpdate.setColumn(nrow, "TY_TAXRDT", "");		//this.dsDetail.getColumn(0, "TY_TAXRDT"));
        			this.dsUpdate.setColumn(nrow, "RT_TAXRDT", "");		//this.dsDetail.getColumn(0, "RT_TAXRDT"));
        			this.dsUpdate.setColumn(nrow, "FR_TAXRDT", "");		//this.dsDetail.getColumn(0, "FR_TAXRDT"));
        			this.dsUpdate.setColumn(nrow, "TO_TAXRDT", "");		//this.dsDetail.getColumn(0, "TO_TAXRDT"));
        			this.dsUpdate.setColumn(nrow, "YN_PROVATION", this.dsDetail.getColumn(0, "YN_PROVATION"));
        			this.dsUpdate.setColumn(nrow, "RT_PROVATION", this.dsDetail.getColumn(0, "RT_PROVATION"));
        			this.dsUpdate.setColumn(nrow, "DT_PROVATION_TO", this.dsDetail.getColumn(0, "DT_PROVATION_TO"));
        			this.dsUpdate.setColumn(nrow, "YN_SENDIFIMS", this.dsDetail.getColumn(0, "YN_SENDIFIMS"));
        			this.dsUpdate.setColumn(nrow, "YN_BEFRETIRE", this.dsDetail.getColumn(0, "YN_BEFRETIRE"));
        			this.dsUpdate.setColumn(nrow, "YN_CAR", "N");	//this.dsDetail.getColumn(0, "YN_CAR"));
        			this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsUpdate.setColumn(nrow, "IP_ADDR", this.AuthClient.NO_IP);
        			this.dsUpdate.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			this.dsUpdate.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        			this.dsUpdate.setColumn(nrow, "YN_RESEARCH", this.dsDetail.getColumn(0, "YN_RESEARCH"));
        			break;

        		case "D":
        			break;

        		default:

        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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

        /*
         *	초기화 버튼
         */
        this.fnReset  = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	//법인 셋팅
        	this.divSearch.form.ccfCD_CORP.form.CDTextBox.set_value("");
        	this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value("");
        	this.divSearch.form.ccfID_SABUN.form.CDTextBox.set_value("");
        	this.divSearch.form.ccfID_SABUN.form.DSTextBox.set_value("");
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();

        		this.gfnAlert("소속법인을 입력하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)) {
        		this.ccfID_SABUN.form.CDTextBox.setFocus();

        		this.gfnAlert("성명을 입력하세요.");
        		return false;
        	}

        	return true;
        };

        this.fnImageView = function() {
        	if (this.gfnIsNull(this.dsDetail.getColumn(0, "PIC"))) { return false; }

        	this.dsImageFile.clearData();
        	this.dsImageFile.addRow();

        	var key = this.dsDetail.getColumn(0, "ID_PERSON");

        	//this.dsImageFile.setColumn(0, "filepath", this.filepath + key);
        	this.dsImageFile.setColumn(0, "filepath", this.filepath );
        	this.dsImageFile.setColumn(0, "filename", this.dsDetail.getColumn(0, "PIC"));

        	/*alert(this.filepath + key);*/
        	// 서버 이미지파일 base64 로 받아오기
        	var strSvcId    = "PIC";
        	var strSvcType  = "file/imageFile";
        	var inProc		= "";
        	var inData      = "input=dsImageFile";
        	var outData     = "dsImageFile=input";
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
        };

        // 사진 DIR 정보
        this.fnGetfilepath = function(dirCd) {

        	this.dsFileDirInfoParam.clearData();
        	this.dsFileDirInfoParam.addRow();

        	this.dsFileDirInfoParam.setColumn(0, "CD_GUBUN", dirCd);

        	var strSvcId    = "fileDirInfo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "fileDirInfo=dsFileDirInfoParam";
        	var outData     = "dsFileDirInfo=fileDirInfo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,
        						false); 		// 통신방법 정의 [생략가능]

        	return this.dsFileDirInfo.getColumn(0, "DS_PATH");
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		//this.gfnSetFormStatus(this);
        		this.fnSelectDetail();

        	} else if (svcID == "save") {

        		//this.gfnAlert("작업이 완료되었습니다.");

        		this.FormBtns.Select.click();
        		//this.gfnSetFormStatus(this);
        	} else if (svcID == "detail") {
        		this.fnImageView();

        		this.gfnSetFormStatus(this, "Q");
        		//this.gfnSetFormStatus(this, "U");

        		// 싱글폼 활성화 or 비활성화 처리
        		this.fnSetEnable();

        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);

        		// 급여 적용여부가 Y 이면 송금은행 / 송금구좌 /예금주  필수
        		// 급여 적용여부가 N 이면 송금은행 / 송금구좌 /예금주  빈값으로 입력가능
        		/*
        		if(this.dsDetail.getColumn(0,"YN_SALARY") == "Y"){
        			this.divData3.form.staCD_BANK.set_textDecoration("underline");
        			this.divData3.form.staCD_ACCOUNT.set_textDecoration("underline");
        		}else{
        			this.divData3.form.staCD_BANK.set_textDecoration("");
        			this.divData3.form.staCD_ACCOUNT.set_textDecoration("");
        		}
        		*/
        	} else if (svcID == "PIC") {
        		this.divData.form.imgPIC.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        	}

        	this.fnSetButton();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.codefind_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if (id == "ccfCD_CORP") {
        		this.ccfID_SABUN.form.fnCodeFindClear();
        		this.txtID_PERSON.set_value("");
        	}else if(id == "ccfID_SABUN"){
        		//ID_PERSON 값 바인딩
        		var id_person = "";
        		var cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
        		var ds_corp = this.ccfCD_CORP.form.DSTextBox.value;
        		if(arr.length > 0) {
        			id_person = arr[0]["ID_PERSON"]
        			cd_corp = arr[0]["CD_CORP"]
        			ds_corp = arr[0]["DS_CORP"]
        		}
        		this.txtID_PERSON.set_value(id_person);
        		this.ccfCD_CORP.form.CDTextBox.set_value(cd_corp);
        		this.ccfCD_CORP.form.DSTextBox.set_value(ds_corp);

        		this.FormBtns.Select.click();
        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if(id == "ccfID_SABUN"){
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        			this.gfnAlert("소속법인을 먼저 선택하세요!");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분
        	}


        	return true;
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_AfterEdit = function(obj,e) {
        	if(e.columnid == "CODEFIND") {
        		if(e.oldvalue != e.newvalue) {
        			this.dsList.setColumn(this.dsList.rowposition, "CODEFIND2" ,"");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_CODEFIND2" ,"");
        		}
        	}
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || e.pretext != e.posttext) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnDataValidate = function(){
        	var msg = "은(는) 필수입력 입니다.";

        	var flag = this.gfnGetFormStatus(this);

        	if (flag == "I" || flag == "U") {
        		if(this.gfnIsNull(this.dsDetail.getColumn(0,"YN_ANNUAL"))){
        			this.gfnAlert("연봉제여부" + msg);
        			//this.rdoYN_ANNUAL.setFocus();
        			return false;
        		}
        		if(this.gfnIsNull(this.dsDetail.getColumn(0,"YN_WIFE"))){
        			this.gfnAlert("배우자공제" + msg);
        			//this.rdoYN_ANNUAL.setFocus();
        			return false;
        		}
        // 		if(this.gfnIsNull(this.dsDetail.getColumn(0,"YN_JKSUBST"))){
        // 			this.gfnAlert("노조비 공제" + msg);
        // 			//this.rdoYN_ANNUAL.setFocus();
        // 			return false;
        // 		}
        		if(this.gfnIsNull(this.dsDetail.getColumn(0,"YN_SALARY"))){
        			this.gfnAlert("급여적용여부" + msg);
        			//this.rdoYN_ANNUAL.setFocus();
        			return false;
        		}
        		//2021.10.27 필수체크 막음
        // 		if(this.gfnIsNull(this.dsDetail.getColumn(0,"YN_BONUS"))){
        // 			this.gfnAlert("복지수당여부" + msg);
        // 			//this.rdoYN_ANNUAL.setFocus();
        // 			return false;
        // 		}
        		if(this.gfnIsNull(this.dsDetail.getColumn(0,"CD_BANK"))){
        			this.gfnAlert("송금은행" + msg);
        			//this.rdoYN_ANNUAL.setFocus();
        			return false;
        		}
        		if(this.gfnIsNull(this.dsDetail.getColumn(0,"CD_ACCOUNT")) || this.gfnIsNull(this.dsDetail.getColumn(0,"NM_OWNER"))){
        			this.gfnAlert("송금구좌/예금주" + msg);
        			//this.rdoYN_ANNUAL.setFocus();
        			return false;
        		}


        		/*
        		if(this.gfnIsNull(this.gfnTrim(this.rdoYN_SALARY.value))){
        			this.gfnAlert("급여적용여부" + msg);
        			this.rdoYN_SALARY.setFocus();
        			return false;
        		}

        		if(this.gfnIsNull(this.gfnTrim(this.rdoYN_WIFE.value))){
        			this.gfnAlert("배우자공제" + msg);
        			this.rdoYN_WIFE.setFocus();
        			return false;
        		}


        		if(this.gfnIsNull(this.gfnTrim(this.rdoYN_JKSUBST.value))){
        			this.gfnAlert("사우회공제대상여부" + msg);
        			this.rdoYN_JKSUBST.setFocus();
        			return false;
        		}

        // 		if(this.gfnIsNull(this.gfnTrim(this.ctclDT_RETIRESTART.value))){
        // 			this.gfnAlert("퇴직금기산일" + msg);
        // 			this.ctclDT_RETIRESTART.setFocus();
        // 			return false;
        // 		}

        		if(this.gfnIsNull(this.gfnTrim(this.rdoYN_ANNUITY.value))){
        			this.gfnAlert("국민연금" + msg);
        			this.rdoYN_ANNUITY.setFocus();
        			return false;
        		}

        		if(this.gfnIsNull(this.gfnTrim(this.rdoYN_HEALTH.value))){
        			this.gfnAlert("건강보험" + msg);
        			this.rdoYN_HEALTH.setFocus();
        			return false;
        		}

        		if(this.gfnIsNull(this.gfnTrim(this.rdoYN_HIRE.value))){
        			this.gfnAlert("고용보험" + msg);
        			this.rdoYN_HIRE.setFocus();
        			return false;
        		}

        		// 급여 적용여부가 Y 이면 송금은행 / 송금구좌 /예금주  필수
        		// 급여 적용여부가 N 이면 송금은행 / 송금구좌 /예금주  빈값으로 입력가능
        		if(this.divData3.form.rdoYN_SALARY.value == "Y"){
        			if(this.gfnIsNull(this.divData3.form.cfCD_BANK.form.CDTextBox.value)){
        				this.fnValidateCallback = function() {
        					this.divData3.form.cfCD_BANK.form.CDTextBox.setFocus();
        				};
        				this.gfnAlert("송금 은행을 입력하세요.","fnValidateCallback");
        				return false;
        			}else if(this.gfnIsNull(this.divData3.form.edtCD_ACCOUNT.value)){
        				this.fnValidateCallback = function(){
        					this.divData3.form.edtCD_ACCOUNT.setFocus();
        				};
        				this.gfnAlert("송금 구좌를 입력하세요.","fnValidateCallback");
        				return false;
        			}else if(this.gfnIsNull(this.divData3.form.edtNM_OWNER.value)){
        				this.fnValidateCallback = function(){
        					this.divData3.form.edtNM_OWNER.setFocus();
        				};
        				this.gfnAlert("예금주를 입력하세요.","fnValidateCallback");
        				return false;
        			}
        		}
        		*/

        // 		if(this.gfnIsNull(this.gfnTrim(this.cfCD_RETIRBANK.value))){
        // 			this.gfnAlert("퇴직연금은행" + msg);
        // 			this.cfCD_RETIRBANK.setFocus();
        // 			return false;
        // 		}
        	}

        	return true;
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.dsDetail.clearData();
        		//this.dsDetail.addRow();

        		this.divData.form.imgPIC.set_image(null);

        		if (e.columnid == "CD_CORP") {

        		} else if (e.columnid == "ID_SABUN") {
        		    if(e.newvalue == ""){
        				this.dsList.clearData();
        				this.dsDetail.clearData();
        				this.dsImageFile.clearData();
        			}else{
        				//this.fnSelect(false);
        			}
        		}
        	}

        };

        /*
        this.divData3_rdoYN_SALARY_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
        {
        	// 급여 적용여부가 Y 이면 송금은행 / 송금구좌 /예금주  필수
        	// 급여 적용여부가 N 이면 송금은행 / 송금구좌 /예금주  빈값으로 입력가능
        	if(obj.value == "Y"){
        		this.divData3.form.staCD_BANK.set_textDecoration("underline");
        		this.divData3.form.staCD_ACCOUNT.set_textDecoration("underline");
        	}else{
        		this.divData3.form.staCD_BANK.set_textDecoration("");
        		this.divData3.form.staCD_ACCOUNT.set_textDecoration("");
        	}
        };
        */

        //청년세액감면 유형 콤보 조회
        // this.fnSetCombo = function() {
        //    this.dsCombo = new Dataset();
        //    this.dsCombo.addColumn("TY_SEL", "string");
        //    this.dsCombo.addColumn("CD_PREFIX", "string");
        //    this.dsCombo.addColumn("CD_UPPREFIX", "string");
        //
        //    this.dsCombo.addRow();
        //    this.dsCombo.setColumn(0, "TY_SEL", "A");
        //    this.dsCombo.setColumn(0, "CD_PREFIX", "RT");
        //    this.dsCombo.setColumn(0, "CD_UPPREFIX", "");
        //
        // 	var strSvcId    = "combo";
        // 	var strSvcType  = "select";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "combo=dsCombo";
        // 	var outData     = "dsTY_TAXRDT=combo0";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        // };

        this.dsDetail_oncolumnchanged = function(obj,e)
        {
        	// 입력 상태가 아니라면 Update 상태로 변경.
        	var status = this.gfnGetFormStatus(this);
        	if(status == "Q" && status != "I")
        	{
        		this.gfnSetFormStatus(this, "U");
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        	}
        };

        this.dsDetail_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		//this.fnSetEnable();
        		// 청년세액감면여부
        // 		if(this.dsDetail.getColumn(0,"YN_TAXRDT") == "Y"){
        // 			this.divData3.form.cboTY_TAXRDT.set_enable(true);
        // 			this.divData3.form.cboRT_TAXRDT.set_enable(true);
        // 			this.divData3.form.calFR_TAXRDT.set_enable(true);
        // 			this.divData3.form.calTO_TAXRDT.set_enable(true);
        // 		}else{
        // 			this.dsDetail.setColumn(0, "TY_TAXRDT", "");
        // 			this.dsDetail.setColumn(0, "RT_TAXRDT", "");
        // 			this.dsDetail.setColumn(0, "FR_TAXRDT", "");
        // 			this.dsDetail.setColumn(0, "TO_TAXRDT", "");
        //
        // 			this.divData3.form.cboTY_TAXRDT.set_enable(false);
        // 			this.divData3.form.cboRT_TAXRDT.set_enable(false);
        // 			this.divData3.form.calFR_TAXRDT.set_enable(false);
        // 			this.divData3.form.calTO_TAXRDT.set_enable(false);
        // 		}

        		// 수습적용여부
        		if(this.dsDetail.getColumn(0,"YN_PROVATION") == "Y"){
        			this.divData3.form.cboRT_PROVATION.set_enable(true);
        			this.divData3.form.calDT_PROVATION_TO.set_enable(true);
        		}else{
        			this.dsDetail.setColumn(0, "RT_PROVATION", "");
        			this.dsDetail.setColumn(0, "DT_PROVATION_TO", "");

        			this.divData3.form.cboRT_PROVATION.set_enable(false);
        			this.divData3.form.calDT_PROVATION_TO.set_enable(false);
        		}

        		// 해외근무자여부
        		if(this.dsDetail.getColumn(0,"YN_OVERSEA") == "Y"){
        			this.divData3.form.cboRT_OVERSEA.set_enable(true);
        		}else{
        			this.dsDetail.setColumn(0, "RT_OVERSEA", "");

        			this.divData3.form.cboRT_OVERSEA.set_enable(false);
        		}

        		// 노인요양할인대상
        		if(this.dsDetail.getColumn(0,"YN_OLDMEDICAL") == "Y"){
        			this.divData3.form.cboRT_OLDMEDICAL.set_enable(true);
        		}else{
        			this.dsDetail.setColumn(0, "RT_OLDMEDICAL", "");

        			this.divData3.form.cboRT_OLDMEDICAL.set_enable(false);
        		}

        		// 퇴직연금
        // 		if(this.dsDetail.getColumn(0,"TY_RETIREPENSION") != "N"){	//== "Y"){
        // 			this.divData3.form.cfCD_RETIRBANK.set_enable(true);
        // 			this.divData3.form.edtCD_RETIRACCOUNT.set_enable(true);
        // 		}else{
        // 			this.dsDetail.setColumn(0, "CD_RETIRBANK", "");
        // 			this.dsDetail.setColumn(0, "DS_RETIRBANK", "");
        // 			this.dsDetail.setColumn(0, "CD_RETIRACCOUNT", "");
        //
        // 			this.divData3.form.cfCD_RETIRBANK.set_enable(false);
        // 			this.divData3.form.edtCD_RETIRACCOUNT.set_enable(false);
        // 		}

        		// 국민연금보수월액/증번호
        		if(this.dsDetail.getColumn(0, "YN_ANNUITY") == "Y"){
        			this.edtAM_MONAVG_ANNUITY.set_enable(true);
        			this.edtNO_ANNUITY.set_enable(true);
        		}else{
        			this.dsDetail.setColumn(0, "AM_MONAVG_ANNUITY", "");
        			this.dsDetail.setColumn(0, "NO_ANNUITY", "");
        			this.edtAM_MONAVG_ANNUITY.set_enable(false);
        			this.edtNO_ANNUITY.set_enable(false);
        		}

        		// 건강보험보수월액/증번호
        		if(this.dsDetail.getColumn(0, "YN_HEALTH") == "Y"){
        			this.edtAM_MONAVG_HEALTH.set_enable(true);
        			this.edtNO_HEALTH.set_enable(true);
        		}else{
        			this.dsDetail.setColumn(0, "AM_MONAVG_HEALTH", "");
        			this.dsDetail.setColumn(0, "NO_HEALTH", "");
        			this.edtAM_MONAVG_HEALTH.set_enable(false);
        			this.edtNO_HEALTH.set_enable(false);
        		}
        	}
        };


        // 싱글폼 활성화 or 비활성화 처리
        this.fnSetEnable = function() {
        // 	if(this.dsDetail.rowcount < 1){
        // 		this.divData3.form.cfCD_RETIRBANK.set_enable(false);
        // 		return;
        // 	}else{
        // 		this.divData3.form.cfCD_RETIRBANK.set_enable(true);
        // 	}

        	// 청년세액감면여부
        // 	if(this.dsDetail.getColumn(0,"YN_TAXRDT") == "Y"){
        // 		this.divData3.form.cboTY_TAXRDT.set_enable(true);
        // 		this.divData3.form.cboRT_TAXRDT.set_enable(true);
        // 		this.divData3.form.calFR_TAXRDT.set_enable(true);
        // 		this.divData3.form.calTO_TAXRDT.set_enable(true);
        // 	}else{
        // 		this.divData3.form.cboTY_TAXRDT.set_enable(false);
        // 		this.divData3.form.cboRT_TAXRDT.set_enable(false);
        // 		this.divData3.form.calFR_TAXRDT.set_enable(false);
        // 		this.divData3.form.calTO_TAXRDT.set_enable(false);
        // 	}

        	// 수습적용여부
        	if(this.dsDetail.getColumn(0,"YN_PROVATION") == "Y"){
        		this.divData3.form.cboRT_PROVATION.set_enable(true);
        		this.divData3.form.calDT_PROVATION_TO.set_enable(true);
        	}else{
        		this.divData3.form.cboRT_PROVATION.set_enable(false);
        		this.divData3.form.calDT_PROVATION_TO.set_enable(false);
        	}

        	// 해외근무자여부
        	if(this.dsDetail.getColumn(0,"YN_OVERSEA") == "Y"){
        		this.divData3.form.cboRT_OVERSEA.set_enable(true);
        	}else{
        		this.divData3.form.cboRT_OVERSEA.set_enable(false);
        	}

        	// 노인요양할인대상
        	if(this.dsDetail.getColumn(0,"YN_OLDMEDICAL") == "Y"){
        		this.divData3.form.cboRT_OLDMEDICAL.set_enable(true);
        	}else{
        		this.divData3.form.cboRT_OLDMEDICAL.set_enable(false);
        	}

        	// 퇴직연금
        // 	if(this.dsDetail.getColumn(0,"TY_RETIREPENSION") != "N"){	//== "Y"){
        // 		this.divData3.form.cfCD_RETIRBANK.set_enable(true);
        // 		this.divData3.form.edtCD_RETIRACCOUNT.set_enable(true);
        // 	}else{
        // 		this.divData3.form.cfCD_RETIRBANK.set_enable(false);
        // 		this.divData3.form.edtCD_RETIRACCOUNT.set_enable(false);
        // 	}

        	// 국민연금보수월액/증번호
        	if(this.dsDetail.getColumn(0, "YN_ANNUITY") == "Y"){
        		this.edtAM_MONAVG_ANNUITY.set_enable(true);
        		this.edtNO_ANNUITY.set_enable(true);
        	}else{
        		this.edtAM_MONAVG_ANNUITY.set_enable(false);
        		this.edtNO_ANNUITY.set_enable(false);
        	}

        	// 건강보험보수월액/증번호
        	if(this.dsDetail.getColumn(0, "YN_HEALTH") == "Y"){
        		this.edtAM_MONAVG_HEALTH.set_enable(true);
        		this.edtNO_HEALTH.set_enable(true);
        	}else{
        		this.edtAM_MONAVG_HEALTH.set_enable(false);
        		this.edtNO_HEALTH.set_enable(false);
        	}

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsDetail.addEventHandler("oncolumnchanged",this.dsDetail_oncolumnchanged,this);
            this.dsDetail.addEventHandler("onvaluechanged",this.dsDetail_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_BASEINFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
