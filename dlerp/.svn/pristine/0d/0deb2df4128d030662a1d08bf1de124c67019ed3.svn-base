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
            this.set_titletext("조건별 인사정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_QUERYPERS_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TYDEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ADOPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADOPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_OCCUPATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OCCUPATION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"FR_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"TO_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"FR_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"TO_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"FR_GROUPJOIN\" type=\"STRING\" size=\"256\"/><Column id=\"TO_GROUPJOIN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FAMILYPLACE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SCHOOL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SCHOOL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UNIVERSITY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MAJOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MAJOR\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TEMPORARY\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TEMPORARY\" type=\"STRING\" size=\"256\"/><Column id=\"FR_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_AGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_GENDER", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">W</Col><Col id=\"VALUE\">여성</Col></Row><Row><Col id=\"CODE\">M</Col><Col id=\"VALUE\">남성</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RETIRE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">재직</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">휴직</Col></Row><Row><Col id=\"CD_CODE\">99</Col><Col id=\"DS_CODE\">재직+휴직</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">퇴직</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"348","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","staTITLE:5","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_bg","staCD_CORP:-1","staCD_CORP:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","staCD_CORP:-25","230","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME","0","staCD_CORP:-1","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME_bg","staDS_HNAME:-1","staDS_HNAME:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_HNAME","staDS_HNAME:5","staDS_HNAME:-25","150","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION","0","staDS_HNAME:-1","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION_bg","staCD_POSITION:-1","staCD_POSITION:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_POSITION","staCD_POSITION:5","staCD_POSITION:-25","230","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("21");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFR_JOIN","0","staCD_POSITION:-1","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFR_JOIN_bg","staFR_JOIN:-1","staFR_JOIN:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_JOIN","staFR_JOIN:5","staFR_JOIN:-25","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_headformat("yyyy.MM");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTO_JOIN","ctclFR_JOIN:0","staFR_JOIN:-25","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("91");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_JOIN","staTO_JOIN:0","staFR_JOIN:-25","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFR_BIRTH","0","staFR_JOIN:-1","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFR_BIRTH_bg","staFR_BIRTH:-1","staFR_BIRTH:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_BIRTH","staFR_BIRTH:5","staFR_BIRTH:-25","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTO_BIRTH","ctclFR_BIRTH:0","staFR_BIRTH:-25","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_BIRTH","staTO_BIRTH:0","staFR_BIRTH:-25","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_FAMILYPLACE","0","staFR_BIRTH:-1","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("52");
            obj.set_text("본적");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_FAMILYPLACE_bg","staDS_FAMILYPLACE:-1","staDS_FAMILYPLACE:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_FAMILYPLACE","staDS_FAMILYPLACE:5","staDS_FAMILYPLACE:-25","230","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("54");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_EMPTYPE","staCD_CORP_bg:-1","staCD_CORP_bg:-30","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("직원구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_EMPTYPE_bg","staCD_EMPTYPE:-1","staCD_EMPTYPE:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_EMPTYPE","staCD_EMPTYPE:5","staCD_EMPTYPE:-25","230","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","staDS_HNAME_bg:-1","staDS_HNAME_bg:-30","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg","staID_SABUN:-1","staID_SABUN:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:5","staID_SABUN:-25","230","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ADOPTYPE","staCD_POSITION_bg:-1","staCD_POSITION_bg:-30","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("채용구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ADOPTYPE_bg","staCD_ADOPTYPE:-1","staCD_ADOPTYPE:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ADOPTYPE","staCD_ADOPTYPE:5","staCD_ADOPTYPE:-25","230","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("24");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","staFR_JOIN_bg:-1","staFR_JOIN_bg:-30","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_bg","staCD_DEPT:-1","staCD_DEPT:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:5","staCD_DEPT:-25","230","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("33");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFR_GROUPJOIN","staFR_BIRTH_bg:-1","staFR_BIRTH_bg:-30","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_text("그룹입사");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFR_GROUPJOIN_bg","staFR_GROUPJOIN:-1","staFR_GROUPJOIN:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_GROUPJOIN","staFR_GROUPJOIN:5","staFR_GROUPJOIN:-25","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTO_GROUPJOIN","ctclFR_GROUPJOIN:0","staFR_GROUPJOIN:-25","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_GROUPJOIN","staTO_GROUPJOIN:0","staFR_GROUPJOIN:-25","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("46");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ADDRESS","staDS_FAMILYPLACE_bg:-1","staDS_FAMILYPLACE_bg:-30","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("55");
            obj.set_text("주소구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ADDRESS_bg","staCD_ADDRESS:-1","staCD_ADDRESS:-30","259","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ADDRESS","staCD_ADDRESS:5","staCD_ADDRESS:-25","230","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("57");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_DEPT","staCD_EMPTYPE_bg:-1","staCD_EMPTYPE_bg:-30","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("본사/현장구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_DEPT_bg","staTY_DEPT:-1","staTY_DEPT:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_DEPT","staTY_DEPT:5","staTY_DEPT:-25","230","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_JOBTYPE","staID_SABUN_bg:-1","staID_SABUN_bg:-30","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_JOBTYPE_bg","staCD_JOBTYPE:-1","staCD_JOBTYPE:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_JOBTYPE","staCD_JOBTYPE:5","staCD_JOBTYPE:-25","230","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("18");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_OCCUPATION","staCD_ADOPTYPE_bg:-1","staCD_ADOPTYPE_bg:-30","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_OCCUPATION_bg","staCD_OCCUPATION:-1","staCD_OCCUPATION:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_OCCUPATION","staCD_OCCUPATION:5","staCD_OCCUPATION:-25","230","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("27");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DUTY","staCD_DEPT_bg:-1","staCD_DEPT_bg:-30","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("직무");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DUTY_bg","staCD_DUTY:-1","staCD_DUTY:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DUTY","staCD_DUTY:5","staCD_DUTY:-25","230","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("36");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_GENDER","staFR_GROUPJOIN_bg:-1","staFR_GROUPJOIN_bg:-30","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("47");
            obj.set_text("성별/재직여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_GENDER_bg","staYN_GENDER:-1","staYN_GENDER:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_GENDER","staYN_GENDER:5","staYN_GENDER:-25","99","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("49");
            obj.set_innerdataset("dsYN_GENDER");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("");
            obj.set_value("%");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_RETIRE_bg","cboYN_GENDER:10","staYN_GENDER:-32","21","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("50");
            obj.set_text("/");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_RETIRE","staTY_RETIRE_bg:0","staYN_GENDER:-25","99","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("51");
            obj.set_innerdataset("dsTY_RETIRE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            obj.set_value("%");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PAYSTEP","staID_SABUN_bg:-1","staCD_ADDRESS_bg:-30","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("58");
            obj.set_text("근속연차");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PAYSTEP_bg","staCD_PAYSTEP:-1","staCD_PAYSTEP:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PAYSTEP","staCD_PAYSTEP:5","staCD_PAYSTEP:-25","230","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("60");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTITLE01","0","staDS_FAMILYPLACE:5","100%","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("61");
            obj.set_text("학력정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SCHOOL","0","staTITLE01:5","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("62");
            obj.set_text("학교구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SCHOOL_bg","staCD_SCHOOL:-1","staCD_SCHOOL:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SCHOOL","staCD_SCHOOL:5","staCD_SCHOOL:-25","230","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("64");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_UNIVERSITY","staCD_SCHOOL_bg:-1","staCD_SCHOOL_bg:-30","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("65");
            obj.set_text("학교명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_UNIVERSITY_bg","staDS_UNIVERSITY:-1","staDS_UNIVERSITY:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_UNIVERSITY","staDS_UNIVERSITY:688","staTITLE01:-42","250","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("89");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_MAJOR","staDS_UNIVERSITY_bg:-1","staDS_UNIVERSITY_bg:-30","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("68");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_MAJOR_t","staCD_MAJOR:-1","staCD_MAJOR:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_MAJOR","staCD_MAJOR:311","staTITLE01:-13","250","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("90");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTITLE02","0","staCD_SCHOOL:5","100%","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("71");
            obj.set_text("휴직/퇴직일 및 기타사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFR_TEMPORARY","0","staTITLE02:5","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("72");
            obj.set_text("휴직일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFR_TEMPORARY_bg","staFR_TEMPORARY:-1","staFR_TEMPORARY:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_TEMPORARY","staFR_TEMPORARY:5","staFR_TEMPORARY:-25","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("74");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTO_TEMPORARY","ctclFR_TEMPORARY:0","staFR_TEMPORARY:-25","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("75");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_TEMPORARY","staTO_TEMPORARY:0","staFR_TEMPORARY:-25","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("76");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFR_RETIRE","staFR_TEMPORARY_bg:-1","staFR_TEMPORARY_bg:-30","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("77");
            obj.set_text("퇴직일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFR_RETIRE_bg","staFR_RETIRE:-1","staFR_RETIRE:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_RETIRE","staFR_RETIRE:5","staFR_RETIRE:-25","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("79");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTO_RETIRE","ctclFR_RETIRE:0","staFR_RETIRE:-25","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("80");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_RETIRE","staTO_RETIRE:0","staFR_RETIRE:-25","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("81");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFR_AGE","staFR_RETIRE_bg:-1","staFR_RETIRE_bg:-30","120","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("82");
            obj.set_text("연령");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFR_AGE_bg","staFR_AGE:-1","staFR_AGE:-30","240","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtFR_AGE","staFR_AGE:5","staFR_AGE:-25","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("84");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            obj.set_inputtype("normal,number");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTO_AGE","txtFR_AGE:0","staFR_AGE:-25","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("85");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtTO_AGE","staTO_AGE:0","staFR_AGE:-25","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("86");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_SCHOOL","1195","168","150","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("88");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_UNIVERSITY","staDS_UNIVERSITY:5","staDS_UNIVERSITY:-25","230","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("67");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_MAJOR","staCD_MAJOR:5","staCD_MAJOR:-25","230","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("70");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_EMPTYPE.form.CDTextBox","value","dsSearch","CD_EMPTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_EMPTYPE.form.DSTextBox","value","dsSearch","DS_EMPTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfTY_DEPT.form.CDTextBox","value","dsSearch","TY_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfTY_DEPT.form.DSTextBox","value","dsSearch","DS_TYDEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.txtDS_HNAME","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_JOBTYPE.form.CDTextBox","value","dsSearch","CD_JOBTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_JOBTYPE.form.DSTextBox","value","dsSearch","DS_JOBTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccfCD_POSITION.form.CDTextBox","value","dsSearch","CD_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ccfCD_POSITION.form.DSTextBox","value","dsSearch","DS_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.ccfCD_ADOPTYPE.form.CDTextBox","value","dsSearch","CD_ADOPTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.ccfCD_ADOPTYPE.form.DSTextBox","value","dsSearch","DS_ADOPTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.ccfCD_OCCUPATION.form.CDTextBox","value","dsSearch","CD_OCCUPATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.ccfCD_OCCUPATION.form.DSTextBox","value","dsSearch","DS_OCCUPATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.ctclFR_JOIN","value","dsSearch","FR_JOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.ctclTO_JOIN","value","dsSearch","TO_JOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSearch.form.cboYN_GENDER","value","dsSearch","YN_GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divSearch.form.ctclFR_BIRTH","value","dsSearch","FR_BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divSearch.form.ctclTO_BIRTH","value","dsSearch","TO_BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divSearch.form.ctclFR_GROUPJOIN","value","dsSearch","FR_GROUPJOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divSearch.form.ctclTO_GROUPJOIN","value","dsSearch","TO_GROUPJOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divSearch.form.cboTY_RETIRE","value","dsSearch","TY_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divSearch.form.txtDS_FAMILYPLACE","value","dsSearch","DS_FAMILYPLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divSearch.form.ccfCD_ADDRESS.form.CDTextBox","value","dsSearch","CD_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divSearch.form.ccfCD_ADDRESS.form.DSTextBox","value","dsSearch","DS_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divSearch.form.ccfCD_DUTY.form.CDTextBox","value","dsSearch","CD_DUTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divSearch.form.ccfCD_DUTY.form.DSTextBox","value","dsSearch","DS_DUTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divSearch.form.ccfCD_SCHOOL.form.CDTextBox","value","dsSearch","CD_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divSearch.form.ccfCD_SCHOOL.form.DSTextBox","value","dsSearch","DS_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divSearch.form.txtDS_UNIVERSITY","value","dsSearch","DS_SCHOOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divSearch.form.txtCD_MAJOR","value","dsSearch","DS_MAJOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divSearch.form.ctclFR_TEMPORARY","value","dsSearch","FR_TEMPORARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divSearch.form.ctclTO_TEMPORARY","value","dsSearch","TO_TEMPORARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divSearch.form.ctclFR_RETIRE","value","dsSearch","FR_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divSearch.form.ctclTO_RETIRE","value","dsSearch","TO_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divSearch.form.txtTO_AGE","value","dsSearch","TO_AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divSearch.form.txtFR_AGE","value","dsSearch","FR_AGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_QUERYPERS.xfdl", function() {
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
        	//this.fnSetCombo(); // 휴퇴여부 안됨

        	//조회 권한에 따른 제어
        	this.fnTyAuth();

        	this.dsSearch.setColumn(0, "TY_RETIRE", "99"); // 재직+휴직

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Save.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnFormButtonIn = this.gfnFormButtonAdd("searchCancel", "fnSearchCancel", "조건초기화");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_EMPTYPE = this.divSearch.form.ccfCD_EMPTYPE;
        	this.ccfTY_DEPT = this.divSearch.form.ccfTY_DEPT;

        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.ccfCD_JOBTYPE = this.divSearch.form.ccfCD_JOBTYPE;
        	this.ccfCD_POSITION = this.divSearch.form.ccfCD_POSITION;
        	this.ccfCD_DUTY = this.divSearch.form.ccfCD_DUTY;
        	this.ccfCD_ADOPTYPE = this.divSearch.form.ccfCD_ADOPTYPE;
        	this.ccfCD_OCCUPATION = this.divSearch.form.ccfCD_OCCUPATION;

        	this.ctclFR_JOIN = this.divSearch.form.ctclFR_JOIN;
        	this.ctclTO_JOIN = this.divSearch.form.ctclTO_JOIN;

        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;

        	this.ctclFR_BIRTH = this.divSearch.form.ctclFR_BIRTH;
        	this.ctclTO_BIRTH = this.divSearch.form.ctclTO_BIRTH;

        	this.ctclFR_GROUPJOIN = this.divSearch.form.ctclFR_GROUPJOIN;
        	this.ctclTO_GROUPJOIN = this.divSearch.form.ctclTO_GROUPJOIN;

        	this.ccfCD_ADDRESS = this.divSearch.form.ccfCD_ADDRESS;
        	this.ccfCD_PAYSTEP = this.divSearch.form.ccfCD_PAYSTEP;
         	this.ccfCD_SCHOOL = this.divSearch.form.ccfCD_SCHOOL;
        // 	this.ccfDS_UNIVERSITY = this.divSearch.form.ccfDS_UNIVERSITY;
        // 	this.ccfCD_MAJOR = this.divSearch.form.ccfCD_MAJOR;

        //	this.txtCD_SCHOOL = this.divSearch.form.txtCD_SCHOOL;
        	this.txtDS_UNIVERSITY = this.divSearch.form.txtDS_UNIVERSITY;
        	this.txtCD_MAJOR = this.divSearch.form.txtCD_MAJOR;

        	this.ctclFR_TEMPORARY = this.divSearch.form.ctclFR_TEMPORARY;
        	this.ctclTO_TEMPORARY = this.divSearch.form.ctclTO_TEMPORARY;

        	this.ctclFR_RETIRE = this.divSearch.form.ctclFR_RETIRE;
        	this.ctclTO_RETIRE = this.divSearch.form.ctclTO_RETIRE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";
        	this.ccfCD_EMPTYPE.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfTY_DEPT.CodeFindName = "DAX_CFCOMMONCODE";

        	//this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO";
        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL";

        	this.ccfCD_JOBTYPE.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_POSITION.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_DUTY.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_ADOPTYPE.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_OCCUPATION.CodeFindName = "DAX_CFCOMMONCODE";

        	//this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT_MST1";
        	this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT";

        	this.ccfCD_ADDRESS.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_PAYSTEP.CodeFindName = "DAX_CFPAYSTEPSUB";

         	this.ccfCD_SCHOOL.CodeFindName = "DAX_CFCOMMONCODE";
        // 	this.ccfDS_UNIVERSITY.CodeFindName = "DAX_CFCOMMONCODE";
        // 	this.ccfCD_MAJOR.CodeFindName = "DAX_CFCOMMONCODE";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_EMPTYPE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfTY_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_JOBTYPE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_POSITION.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_ADOPTYPE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_OCCUPATION.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_ADDRESS.AfterCDTextChanged = "fnAfterCDTextChanged";
         	this.ccfCD_SCHOOL.AfterCDTextChanged = "fnAfterCDTextChanged";
        // 	this.ccfDS_UNIVERSITY.AfterCDTextChanged = "fnAfterCDTextChanged";
        // 	this.ccfCD_MAJOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_EMPTYPE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfTY_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_JOBTYPE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_POSITION.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DUTY.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ADOPTYPE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_OCCUPATION.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ADDRESS.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
         	this.ccfCD_SCHOOL.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        // 	this.ccfDS_UNIVERSITY.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        // 	this.ccfCD_MAJOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        // 		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_QUERYPERS");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_EMPTYPE", "string");
        	this.dsSelect.addColumn("TY_DEPT", "string");
        	this.dsSelect.addColumn("DS_HNAME", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("CD_JOBTYPE", "string");
        	this.dsSelect.addColumn("CD_POSITION", "string");
        	this.dsSelect.addColumn("CD_DUTY", "string");
        	this.dsSelect.addColumn("CD_LEVEL", "string");
        	this.dsSelect.addColumn("CD_ADOPTYPE", "string");
        	this.dsSelect.addColumn("CD_OCCUPATION", "string");
        	this.dsSelect.addColumn("FR_JOIN", "string");
        	this.dsSelect.addColumn("TO_JOIN", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("YN_GENDER", "string");
        	this.dsSelect.addColumn("FR_BIRTH", "string");
        	this.dsSelect.addColumn("TO_BIRTH", "string");
        	this.dsSelect.addColumn("FR_GROUPJOIN", "string");
        	this.dsSelect.addColumn("TO_GROUPJOIN", "string");
        	this.dsSelect.addColumn("TY_RETIRE", "string");
        	this.dsSelect.addColumn("DS_FAMILYPLACE", "string");
        	this.dsSelect.addColumn("CD_ADDRESS", "string");
        	this.dsSelect.addColumn("CD_PAYSTEP", "string");
        //	this.dsSelect.addColumn("CD_SCHOOL", "string");
        //	this.dsSelect.addColumn("DS_UNIVERSITY", "string");
        //	this.dsSelect.addColumn("CD_MAJOR", "string");
        	this.dsSelect.addColumn("DS_SCHOOL", "string");
        	this.dsSelect.addColumn("DS_MAJOR", "string");
        	this.dsSelect.addColumn("FR_TEMPORARY", "string");
        	this.dsSelect.addColumn("TO_TEMPORARY", "string");
        	this.dsSelect.addColumn("FR_RETIRE", "string");
        	this.dsSelect.addColumn("TO_RETIRE", "string");
        	this.dsSelect.addColumn("FR_AGE", "string");
        	this.dsSelect.addColumn("TO_AGE", "string");
        	this.dsSelect.addColumn("ID_LOGIN", "string");
        	this.dsSelect.addColumn("IP_ADDR", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");

        }

        //조회 권한에 따른 제어
        this.fnTyAuth = function(){

        	if(this.FormInfo.GR_SEARCH == 1){
        		//조회조건 모두 활성화
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	}
        	else if(this.FormInfo.GR_SEARCH == 7){
        		//법인 : 로그인법인 비활성화
        		//부서 : 로그인부서 비활성화
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_DEPT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        		this.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.ccfCD_CORP.set_enable(false);
        		this.ccfCD_DEPT.set_enable(false);
        	}
        	else if(this.FormInfo.GR_SEARCH == 9){
        		//법인 : 로그인법인 비활성화
        		//부서 : 로그인부서 비활성화
        		//사번 : 로그인ID   비활성화
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_DEPT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        		this.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_USER);
        		this.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);
        		this.ccfCD_CORP.set_enable(false);
        		this.ccfCD_DEPT.set_enable(false);
        		this.ccfID_SABUN.set_enable(false);

        	}else{
        		//2,3,5
        		//법인 : 로그인법인 비활성화
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.set_enable(false);
        	}
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        // 	var FR_AGE = this.gfnNvl(this.dsSearch.getColumn(0, "FR_AGE"), "0");	// 연령
        // 	var TO_AGE = this.gfnNvl(this.dsSearch.getColumn(0, "TO_AGE"), "200");	// 연령

        	this.dsSelect.setColumn(0, "CD_CORP", this.gfnNvl(this.dsSearch.getColumn(0, "CD_CORP"), ""));
        	this.dsSelect.setColumn(0, "CD_EMPTYPE", this.gfnNvl(this.dsSearch.getColumn(0, "CD_EMPTYPE"), ""));
        	this.dsSelect.setColumn(0, "TY_DEPT", this.gfnNvl(this.dsSearch.getColumn(0, "TY_DEPT"), ""));
        	this.dsSelect.setColumn(0, "DS_HNAME", this.gfnNvl(this.dsSearch.getColumn(0, "DS_HNAME"), ""));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.gfnNvl(this.dsSearch.getColumn(0, "ID_SABUN"), ""));
        	this.dsSelect.setColumn(0, "CD_JOBTYPE", this.gfnNvl(this.dsSearch.getColumn(0, "CD_JOBTYPE"), ""));
        	this.dsSelect.setColumn(0, "CD_PAYSTEP", this.gfnNvl(this.dsSearch.getColumn(0, "CD_PAYSTEP"), ""));

        	this.dsSelect.setColumn(0, "CD_POSITION", this.gfnNvl(this.dsSearch.getColumn(0, "CD_POSITION"), ""));
        	this.dsSelect.setColumn(0, "CD_ADOPTYPE", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ADOPTYPE"), ""));
        	this.dsSelect.setColumn(0, "CD_OCCUPATION", this.gfnNvl(this.dsSearch.getColumn(0, "CD_OCCUPATION"), ""));
        	this.dsSelect.setColumn(0, "FR_JOIN", this.gfnNvl(this.dsSearch.getColumn(0, "FR_JOIN"), ""));
        	this.dsSelect.setColumn(0, "TO_JOIN", this.gfnNvl(this.dsSearch.getColumn(0, "TO_JOIN"), ""));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.gfnNvl(this.dsSearch.getColumn(0, "CD_DEPT"), ""));
        	this.dsSelect.setColumn(0, "YN_GENDER", this.gfnNvl(this.dsSearch.getColumn(0, "YN_GENDER"), ""));

        	this.dsSelect.setColumn(0, "FR_BIRTH", this.gfnNvl(this.dsSearch.getColumn(0, "FR_BIRTH"), ""));
        	this.dsSelect.setColumn(0, "TO_BIRTH", this.gfnNvl(this.dsSearch.getColumn(0, "TO_BIRTH"), ""));
        	this.dsSelect.setColumn(0, "FR_GROUPJOIN", this.gfnNvl(this.dsSearch.getColumn(0, "FR_GROUPJOIN"), ""));
        	this.dsSelect.setColumn(0, "TO_GROUPJOIN", this.gfnNvl(this.dsSearch.getColumn(0, "TO_GROUPJOIN"), ""));

        	this.dsSelect.setColumn(0, "TY_RETIRE", this.gfnNvl(this.dsSearch.getColumn(0, "TY_RETIRE"), ""));
        	this.dsSelect.setColumn(0, "DS_FAMILYPLACE", this.gfnNvl(this.dsSearch.getColumn(0, "DS_FAMILYPLACE"), ""));
        	this.dsSelect.setColumn(0, "CD_ADDRESS", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ADDRESS"), ""));

        	this.dsSelect.setColumn(0, "CD_DUTY", this.gfnNvl(this.dsSearch.getColumn(0, "CD_DUTY"), ""));
        	this.dsSelect.setColumn(0, "CD_LEVEL", this.gfnNvl(this.dsSearch.getColumn(0, "CD_LEVEL"), ""));

        	this.dsSelect.setColumn(0, "DS_SCHOOL", this.gfnNvl(this.dsSearch.getColumn(0, "DS_SCHOOL"), ""));
        	this.dsSelect.setColumn(0, "DS_MAJOR", this.gfnNvl(this.dsSearch.getColumn(0, "DS_MAJOR"), ""));

        	this.dsSelect.setColumn(0, "FR_TEMPORARY", this.gfnNvl(this.dsSearch.getColumn(0, "FR_TEMPORARY"), ""));
        	this.dsSelect.setColumn(0, "TO_TEMPORARY", this.gfnNvl(this.dsSearch.getColumn(0, "TO_TEMPORARY"), ""));
        	this.dsSelect.setColumn(0, "FR_RETIRE", this.gfnNvl(this.dsSearch.getColumn(0, "FR_RETIRE"), ""));
        	this.dsSelect.setColumn(0, "TO_RETIRE", this.gfnNvl(this.dsSearch.getColumn(0, "TO_RETIRE"), ""));

        	this.dsSelect.setColumn(0, "FR_AGE", this.gfnNvl(this.dsSearch.getColumn(0, "FR_AGE"), 0));
        	this.dsSelect.setColumn(0, "TO_AGE", this.gfnNvl(this.dsSearch.getColumn(0, "TO_AGE"), 200));

        	this.dsSelect.setColumn(0, "ID_LOGIN", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "IP_ADDR", this.AuthClient.NO_IP);
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
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

        }
        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         *	저장 버튼
         */
        //this.fnSave = function() {
        //
        //}

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
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
        	//this.dsSearch.clearData();
        	//this.dsSearch.addRow();

        	this.ccfCD_CORP.form.DSTextBox.set_value('');
        	this.ccfCD_CORP.form.CDTextBox.set_value('');
        	this.ccfCD_EMPTYPE.form.DSTextBox.set_value('');
        	this.ccfCD_EMPTYPE.form.CDTextBox.set_value('');
        	this.ccfTY_DEPT.form.DSTextBox.set_value('');
        	this.ccfTY_DEPT.form.CDTextBox.set_value('');
        	this.divSearch.form.txtDS_HNAME.set_value('');
        	this.ccfID_SABUN.form.DSTextBox.set_value('');
        	this.ccfID_SABUN.form.CDTextBox.set_value('');
        	this.ccfCD_JOBTYPE.form.DSTextBox.set_value('');
        	this.ccfCD_JOBTYPE.form.CDTextBox.set_value('');
        	this.ccfCD_POSITION.form.DSTextBox.set_value('');
        	this.ccfCD_POSITION.form.CDTextBox.set_value('');
        	this.ccfCD_DUTY.form.DSTextBox.set_value('');
        	this.ccfCD_DUTY.form.CDTextBox.set_value('');
        	this.ccfCD_ADOPTYPE.form.CDTextBox.set_value('');
        	this.ccfCD_ADOPTYPE.form.DSTextBox.set_value('');

        	this.ccfCD_OCCUPATION.form.CDTextBox.set_value('');
        	this.ccfCD_OCCUPATION.form.DSTextBox.set_value('');

        	this.ctclFR_JOIN.set_value('');
        	this.ctclTO_JOIN.set_value('');

        	this.ccfCD_DEPT.form.CDTextBox.set_value('');
        	this.ccfCD_DEPT.form.DSTextBox.set_value('');

        	this.divSearch.form.cboYN_GENDER.set_value('%');

        	this.ctclFR_BIRTH.set_value('');
        	this.ctclTO_BIRTH.set_value('');
        	this.ctclFR_GROUPJOIN.set_value('');
        	this.ctclTO_GROUPJOIN.set_value('');

        	this.divSearch.form.cboTY_RETIRE.set_value('%');
        	this.divSearch.form.txtDS_FAMILYPLACE.set_value('');
        	this.ccfCD_ADDRESS.form.CDTextBox.set_value('');
        	this.ccfCD_ADDRESS.form.DSTextBox.set_value('');

        	this.ccfCD_PAYSTEP.form.CDTextBox.set_value('');
        	this.ccfCD_PAYSTEP.form.DSTextBox.set_value('');

         	this.ccfCD_SCHOOL.form.CDTextBox.set_value('');
         	this.ccfCD_SCHOOL.form.DSTextBox.set_value('');
        // 	this.ccfDS_UNIVERSITY.form.CDTextBox.set_value('');
        // 	this.ccfDS_UNIVERSITY.form.DSTextBox.set_value('');
        // 	this.ccfCD_MAJOR.form.CDTextBox.set_value('');
        // 	this.ccfCD_MAJOR.form.DSTextBox.set_value('');

        //	this.divSearch.form.txtCD_SCHOOL.set_value('');
        	this.divSearch.form.txtDS_UNIVERSITY.set_value('');
        	this.divSearch.form.txtCD_MAJOR.set_value('');

        	this.ctclFR_TEMPORARY.set_value('');
        	this.ctclTO_TEMPORARY.set_value('');
        	this.ctclFR_RETIRE.set_value('');
        	this.ctclTO_RETIRE.set_value('');

        	this.divSearch.form.txtFR_AGE.set_value('');
        	this.divSearch.form.txtTO_AGE.set_value('');

        	this.fnSearchInit();
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {

        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        // 		this.gfnAlert("법인코드를 입력 하세요.");
        // 		this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		return false;
        // 	}

        	if ( !this.gfnIsNull(this.ctclFR_JOIN.value) && !this.gfnIsNull(this.ctclTO_JOIN.value) ) {
        		if ( this.ctclFR_JOIN.value > this.ctclTO_JOIN.value ) {
        			this.gfnAlert("입사일자가 잘못 입력 되었습니다..");
        			this.ctclFR_JOIN.setFocus();
        			return false;
        		}
        	}

        	if ( !this.gfnIsNull(this.ctclFR_BIRTH.value) && !this.gfnIsNull(this.ctclTO_BIRTH.value) ) {
        		if ( this.ctclFR_BIRTH.value > this.ctclTO_BIRTH.value ) {
        			this.gfnAlert("생년월일이 잘못 입력 되었습니다..");
        			this.ctclFR_BIRTH.setFocus();
        			return false;
        		}
        	}

        	if ( !this.gfnIsNull(this.ctclFR_GROUPJOIN.value) && !this.gfnIsNull(this.ctclTO_GROUPJOIN.value) ) {
        		if ( this.ctclFR_GROUPJOIN.value > this.ctclTO_GROUPJOIN.value ) {
        			this.gfnAlert("그룹일자가 잘못 입력 되었습니다..");
        			this.ctclFR_GROUPJOIN.setFocus();
        			return false;
        		}
        	}

        	if ( !this.gfnIsNull(this.ctclFR_TEMPORARY.value) && !this.gfnIsNull(this.ctclTO_TEMPORARY.value) ) {
        		if ( this.ctclFR_TEMPORARY.value > this.ctclTO_TEMPORARY.value ) {
        			this.gfnAlert("휴직일이 잘못 입력 되었습니다..");
        			this.ctclFR_TEMPORARY.setFocus();
        			return false;
        		}
        	}

        	if ( !this.gfnIsNull(this.ctclFR_RETIRE.value) && !this.gfnIsNull(this.ctclTO_RETIRE.value) ) {
        		if ( this.ctclFR_RETIRE.value > this.ctclTO_RETIRE.value ) {
        			this.gfnAlert("퇴직일이 잘못 입력 되었습니다..");
        			this.ctclFR_RETIRE.setFocus();
        			return false;
        		}
        	}

        	if ( !this.gfnIsNull(this.divSearch.form.txtFR_AGE.value) && !this.gfnIsNull(this.divSearch.form.txtTO_AGE.value) ) {
        		if ( this.divSearch.form.txtFR_AGE.value > this.divSearch.form.txtTO_AGE.value ) {
        			this.gfnAlert("연령이 잘못 입력 되었습니다..");
        			this.divSearch.form.txtFR_AGE.setFocus();
        			return false;
        		}
        	}

        	return true;
        };

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "A");
        	this.dsCombo.setColumn(0, "CD_TYPE", "AE");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_RETIRE=combo0";
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

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	this.fnSetButton();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_EMPTYPE") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'EA');
        	}

        	if (id == "ccfTY_DEPT") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'DA');
        	}

        	if (id == "ccfCD_DEPT") {	// 부서
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        			this.fnAlertAfter = function(){
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("소속법인을 선택하세요", "fnAlertAfter");
        			return;
        		}

        		// @TY_GUBUN	공통
        		// @CN_ROW
        		// @VALUE
        		// @MIN_VALUE
        		dsUserParam.setColumn(nrow, "GR_SEARCH",  this.FormInfo.GR_SEARCH);	// 사용자 권한
        		dsUserParam.setColumn(nrow, "CD_DEPT",  this.AuthClient.CD_DEPT);	// 로그인부서
        		dsUserParam.setColumn(nrow, "CD_CORP",  this.ccfCD_CORP.form.CDTextBox.value);	// 조회조건에 있는 소속법인
        		dsUserParam.setColumn(nrow, "YN_CURRENT",  "");
        	}

        	if (id == "ccfID_SABUN") {
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        			this.fnAlertAfter = function(){
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("소속법인을 선택하세요", "fnAlertAfter");
        			return;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP",  this.ccfCD_CORP.form.CDTextBox.value);	// 조회조건에 있는 소속법인
        		dsUserParam.setColumn(nrow, "GR_SEARCH",  this.FormInfo.GR_SEARCH);	// 사용자 권한
        		dsUserParam.setColumn(nrow, "CD_DEPT",  this.AuthClient.CD_DEPT);	// 로그인부서
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");	// 법인무관(Y: 법인에 관계없이 직원검색 N:조건의 법인의 임직원만 검색)
        		//dsUserParam.setColumn(nrow, "TY_RETIRE", "");	// 01 재직 02 휴직 04 퇴직 % :전체
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "");	// 01 재직 02 휴직 04 퇴직 % :전체
        		// this.divSearch.form.cboTY_RETIRE.value
        		/*
        			@CD_DEPT	= 로그인부서
        			@CD_CORP	= 조회조건에 있는 소속법인
        			@GR_SEARCH 	= 사용자 권한
        			@YN_CORP	= 'Y'
        			@TY_RETIRE	= '%'
        		*/
        	}

        	if (id == "ccfCD_JOBTYPE") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'EB');
        	}

        	if (id == "ccfCD_POSITION") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'ED');
        	}

        	if (id == "ccfCD_ADOPTYPE") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'AD');
        	}

        	if (id == "ccfCD_OCCUPATION") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'EC');
        	}

        	if (id == "ccfCD_DUTY") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'EF');
        	}

        	if (id == "ccfCD_ADDRESS") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'AA');
        	}

        	if (id == "ccfCD_SCHOOL") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'SA');
        	}

        	if (id == "ccfDS_UNIVERSITY") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'SD');
        	}

        	if (id == "ccfCD_MAJOR") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'SE');
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchCancel = function(obj,e) {
        	// 검색조건 초기화

        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_EMPTYPE.form.DSTextBox.set_value('');
        	this.ccfCD_EMPTYPE.form.CDTextBox.set_value('');
        	this.ccfTY_DEPT.form.DSTextBox.set_value('');
        	this.ccfTY_DEPT.form.CDTextBox.set_value('');
        	this.divSearch.form.txtDS_HNAME.set_value('');
        	this.ccfID_SABUN.form.DSTextBox.set_value('');
        	this.ccfID_SABUN.form.CDTextBox.set_value('');
        	this.ccfCD_JOBTYPE.form.DSTextBox.set_value('');
        	this.ccfCD_JOBTYPE.form.CDTextBox.set_value('');
        	this.ccfCD_POSITION.form.DSTextBox.set_value('');
        	this.ccfCD_POSITION.form.CDTextBox.set_value('');
        	this.ccfCD_DUTY.form.DSTextBox.set_value('');
        	this.ccfCD_DUTY.form.CDTextBox.set_value('');
        	this.ccfCD_ADOPTYPE.form.CDTextBox.set_value('');
        	this.ccfCD_ADOPTYPE.form.CDTextBox.set_value('');
        	this.ccfCD_OCCUPATION.form.CDTextBox.set_value('');
        	this.ccfCD_OCCUPATION.form.CDTextBox.set_value('');

        	this.ctclFR_JOIN.set_value('');
        	this.ctclTO_JOIN.set_value('');

        	this.ccfCD_DEPT.form.CDTextBox.set_value('');
        	this.ccfCD_DEPT.form.CDTextBox.set_value('');
        	this.divSearch.form.cboYN_GENDER.set_value('%');

        	this.ctclFR_BIRTH.set_value('');
        	this.ctclTO_BIRTH.set_value('');
        	this.ctclFR_GROUPJOIN.set_value('');
        	this.ctclTO_GROUPJOIN.set_value('');

        	this.divSearch.form.cboTY_RETIRE.set_value('%');
        	this.divSearch.form.txtDS_FAMILYPLACE.set_value('');
        	this.ccfCD_ADDRESS.form.CDTextBox.set_value('');
        	this.ccfCD_ADDRESS.form.CDTextBox.set_value('');
        	this.ccfCD_PAYSTEP.form.CDTextBox.set_value('');
        	this.ccfCD_PAYSTEP.form.CDTextBox.set_value('');

         	this.ccfCD_SCHOOL.form.CDTextBox.set_value('');
         	this.ccfCD_SCHOOL.form.DSTextBox.set_value('');
        // 	this.ccfDS_UNIVERSITY.form.CDTextBox.set_value('');
        // 	this.ccfDS_UNIVERSITY.form.DSTextBox.set_value('');
        // 	this.ccfCD_MAJOR.form.CDTextBox.set_value('');
        // 	this.ccfCD_MAJOR.form.DSTextBox.set_value('');
        //	this.divSearch.form.txtCD_SCHOOL.set_value('');
        	this.divSearch.form.txtDS_UNIVERSITY.set_value('');
        	this.divSearch.form.txtCD_MAJOR.set_value('');

        	this.ctclFR_TEMPORARY.set_value('');
        	this.ctclTO_TEMPORARY.set_value('');
        	this.ctclFR_RETIRE.set_value('');
        	this.ctclTO_RETIRE.set_value('');

        	this.divSearch.form.txtFR_AGE.set_value('');
        	this.divSearch.form.txtTO_AGE.set_value('');


        	this.fnSearchInit();
        }

        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        	}

        	//this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value('');
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclFR_JOIN.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclTO_JOIN.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclFR_BIRTH.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclTO_BIRTH.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclFR_GROUPJOIN.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclTO_GROUPJOIN.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.cboYN_GENDER.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboTY_RETIRE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclFR_TEMPORARY.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclTO_TEMPORARY.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclFR_RETIRE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclTO_RETIRE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_QUERYPERS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
