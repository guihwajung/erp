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
            this.set_titletext("New Form");
            this.set_stepshowtype("action");
            this.set_scrolltype("vertical");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListGoalBgvdprsn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListGoalRsltFdbkSummary", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListGoalRsltFdbkGrade", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListGoalHistory", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRtngStd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select_goal_bgvdprsn</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_BGVDPRSN_SELECT</Col></Row><Row><Col id=\"TARGET\">select_rslt_peedback_summary</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_ESTT_SUMMARY_SELECT</Col></Row><Row><Col id=\"TARGET\">select_rslt_peedback_grd</Col><Col id=\"SP\">DAJPR_RTNG_RSLT_FDBK_SELECT</Col></Row><Row><Col id=\"TARGET\">save_rslt_peedback_grd</Col><Col id=\"SP\">DAJPR_RTNG_RSLT_FDBK_SAVE</Col></Row><Row><Col id=\"TARGET\">complete_rslt_peedback</Col><Col id=\"SP\">DAJPR_RTNG_RSLT_FDBK_COMLETE</Col></Row><Row><Col id=\"TARGET\">select_goal_history</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_HISTORY_SELECT</Col></Row><Row><Col id=\"TARGET\">select_rtng_std</Col><Col id=\"SP\">DAXPR_RTNG_STD_CODEFIND</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PTCP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN_RTNG_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_RTNG","ccfCD_CORP:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("평가회차");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_RTNG","staID_RTNG:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFRTNG_STD");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCD_RTNG_ASBLNEXT","ccfID_RTNG:5","10.0","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_APL","edtCD_RTNG_ASBLNEXT:0","10.0","79","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN_APL:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","450","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("#c9c9c9");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("피평가자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSplitter2","0","105","100%","5",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_background("#c9c9c9");
            obj.set_cursor("ns-resize");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter2:5",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divSummary","0","10",null,"90","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_formscrolltype("none");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN","0","0","100","59",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("2");
            obj.set_text("평가대상자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN","0","staBGVDPRSN:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("3");
            obj.set_text("평가자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_B","0","staITVWPRSN:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("3");
            obj.set_text("평가자B");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_ID_SABUN","staBGVDPRSN:-1","0","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("1");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_ID_SABUN_bg","staBGVDPRSN_ID_SABUN:-1","staBGVDPRSN_ID_SABUN:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_EMPTYPE","staBGVDPRSN:-1","staBGVDPRSN_ID_SABUN:-1","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("1");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_EMPTYPE_bg","staBGVDPRSN_DS_EMPTYPE:-1","staBGVDPRSN_DS_EMPTYPE:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_ID_SABUN","staITVWPRSN:-1","staBGVDPRSN_DS_EMPTYPE:-1","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("1");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_ID_SABUN_bg","staITVWPRSN_ID_SABUN:-1","staITVWPRSN_ID_SABUN:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_ID_SABUN_B","staITVWPRSN_B:-1","staITVWPRSN_ID_SABUN:-1","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("1");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_ID_SABUN_B_bg","staITVWPRSN_ID_SABUN_B:-1","staITVWPRSN_ID_SABUN_B:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_HNAME","staBGVDPRSN_ID_SABUN_bg:-1","staBGVDPRSN_ID_SABUN_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("10");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_HNAME_bg","staBGVDPRSN_DS_HNAME:-1","staBGVDPRSN_DS_HNAME:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_DEPT","staBGVDPRSN_DS_EMPTYPE_bg:-1","staBGVDPRSN_DS_EMPTYPE_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("12");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_DEPT_bg","staBGVDPRSN_DS_DEPT:-1","staBGVDPRSN_DS_DEPT:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_DS_HNAME","staITVWPRSN_ID_SABUN_bg:-1","staITVWPRSN_ID_SABUN_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("14");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_DS_HNAME_bg","staITVWPRSN_DS_HNAME:-1","staITVWPRSN_DS_HNAME:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_DS_HNAME_B","staITVWPRSN_ID_SABUN_B_bg:-1","staITVWPRSN_ID_SABUN_B_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("16");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_DS_HNAME_B_bg","staITVWPRSN_DS_HNAME_B:-1","staITVWPRSN_DS_HNAME_B:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_POSITION","staBGVDPRSN_DS_HNAME_bg:-1","staBGVDPRSN_DS_HNAME_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("18");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_POSITION_bg","staBGVDPRSN_DS_POSITION:-1","staBGVDPRSN_DS_POSITION:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_DUTY","staBGVDPRSN_DS_DEPT_bg:-1","staBGVDPRSN_DS_DEPT_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("20");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_DUTY_bg","staBGVDPRSN_DS_DUTY:-1","staBGVDPRSN_DS_DUTY:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_DS_DUTY","staITVWPRSN_DS_HNAME_bg:-1","staITVWPRSN_DS_HNAME_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("22");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_DS_DUTY_bg","staITVWPRSN_DS_DUTY:-1","staITVWPRSN_DS_DUTY:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_DS_DUTY_B","staITVWPRSN_DS_HNAME_B_bg:-1","staITVWPRSN_DS_HNAME_B_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("24");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_DS_DUTY_B_bg","staITVWPRSN_DS_DUTY_B:-1","staITVWPRSN_DS_DUTY_B:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_STAT_RTNG","staITVWPRSN_DS_DUTY_bg:-1","staITVWPRSN_DS_DUTY_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("26");
            obj.set_text("평가상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_STAT_RTNG_bg","staITVWPRSN_STAT_RTNG:-1","staITVWPRSN_STAT_RTNG:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_STAT_RTNG_B","staITVWPRSN_DS_DUTY_B_bg:-1","staITVWPRSN_DS_DUTY_B_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("28");
            obj.set_text("평가상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_STAT_RTNG_B_bg","staITVWPRSN_STAT_RTNG_B:-1","staITVWPRSN_STAT_RTNG_B:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter2:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","0","15","150","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("최종 인사평가 등급");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("txtGRADE","sta02:-1","5","150","43",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("center");
            obj.set_color("blue");
            obj.set_font("bold 13px/normal \"Dotum\"");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divAdditional2","0","sta02:30",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta05","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form);
            obj.set_taborder("0");
            obj.set_text("성과 Coaching 및 역량개발 의견");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta05:10","150","100",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form);
            obj.set_taborder("1");
            obj.set_text("성과 Coaching*");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.addChild(obj.name, obj);

            obj = new TextArea("txtDS_COACHING","sta06:-1","sta06:-100",null,"100","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.addChild(obj.name, obj);

            obj = new Static("sta07","0","sta06:-1","150","100",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form);
            obj.set_taborder("3");
            obj.set_text("역량개발 의견*");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.addChild(obj.name, obj);

            obj = new TextArea("txtDS_OPINION","sta07:-1","sta07:-100",null,"100","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.addChild(obj.name, obj);

            obj = new Tab("tabData","0","sta05:10",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form);
            obj.set_taborder("0");
            obj.set_tabindex("5");
            obj.set_visible("false");
            obj.set_tabposition("top");
            obj.set_tabjustify("false");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData);
            obj.set_text("평가자A");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.addChild(obj.name, obj);

            obj = new Static("sta06_A","0","5","150","100",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("성과 Coaching*");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab1.addChild(obj.name, obj);

            obj = new TextArea("txtDS_COACHING_A","sta06_A:-1","sta06_A:-100",null,"100","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta07_A","0","sta06_A:-1","150","100",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_text("역량개발 의견*");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab1.addChild(obj.name, obj);

            obj = new TextArea("txtDS_OPINION_A","sta07_A:-1","sta07_A:-100",null,"100","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData);
            obj.set_text("평가자B");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.addChild(obj.name, obj);

            obj = new Static("sta06_B","0","5","150","100",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("성과 Coaching*");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab2.addChild(obj.name, obj);

            obj = new TextArea("txtDS_COACHING_B","sta06_B:-1","sta06_B:-100",null,"100","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta07_B","0","sta06_B:-1","150","100",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab2.form);
            obj.set_taborder("3");
            obj.set_text("역량개발 의견*");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab2.addChild(obj.name, obj);

            obj = new TextArea("txtDS_OPINION_B","sta07_B:-1","sta07_B:-100",null,"100","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab2.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"32","80","27","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form);
            obj.set_taborder("6");
            obj.set_text("임시저장");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.ccfID_RTNG.form.CDTextBox","value","dsSearch","ID_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_RTNG.form.DSTextBox","value","dsSearch","DS_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtCD_RTNG_ASBLNEXT","value","dsSearch","DS_RTNG_ASBLNEXT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAJ_RTNG_RSLT_FDBK.xfdl", function() {
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
        	this.btnD  = this.gfnFormButtonAdd("DELETE" , "");	// 삭제 버튼
        	this.btnI  = this.gfnFormButtonAdd("INSERT" , "");	// 입력 버튼
        	this.btnS  = this.gfnFormButtonAdd("SAVE" , "");	// 저장 버튼
        	this.btnHistoryGoalEstabl = this.gfnFormButtonAdd("btnHistoryGoalEstabl", "fnHistoryGoalEstabl");	// 업무목표이력 - 수립 버튼
        	this.btnHistoryGoalCheck  = this.gfnFormButtonAdd("btnHistoryGoalCheck" , "fnHistoryGoalCheck");	// 업무목표이력 - 중간점검 버튼
        	this.btnHistoryGoalSelf   = this.gfnFormButtonAdd("btnHistoryGoalSelf"  , "fnHistoryGoalSelf");		// 업무목표이력 - 자기기술 버튼
        	this.btnComplete 		  = this.gfnFormButtonAdd("btnComplete"			, "fnInterviewComplete");	// 평가완료 버튼
        	this.btnFinish 	 		  = this.gfnFormButtonAdd("btnFinish"  			, "fnFinish");				// 일괄평가완료 버튼

        	// 확장버튼 숨김 처리 후 위치조정
        	//this.fnButtonPosition();
        	this.btnComplete.set_visible(false);		// 면담완료 버튼
        	this.btnFinish.set_visible(false);
        	//this.btnComplete.set_right(80);	// 185
        	this.divTopBtn.form.btnGroup_업무목표이력.set_right(0);
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid    = this.divData.form.divDataLeft.form.objGrid;

        	// 검색영역
        	this.ccfCD_CORP  = this.divSearch.form.ccfCD_CORP;
        	this.ctclYR_RTNG = this.divSearch.form.ctclYR_RTNG;
        	this.ccfID_RTNG  = this.divSearch.form.ccfID_RTNG;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        	// 대상자
        	this.staBGVDPRSN_ID_SABUN_bg    = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_ID_SABUN_bg;		// 사번
        	this.staBGVDPRSN_DS_HNAME_bg    = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_HNAME_bg;		// 성명
        	this.staBGVDPRSN_DS_POSITION_bg = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_POSITION_bg;	// 직급
        	this.staBGVDPRSN_DS_EMPTYPE_bg  = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_EMPTYPE_bg; 	// 직종
        	this.staBGVDPRSN_DS_DEPT_bg     = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_DEPT_bg;		// 평가조직
        	this.staBGVDPRSN_DS_DUTY_bg     = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_DUTY_bg;		// 직책

        	// 면담자
        	this.staITVWPRSN    = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN;		// 평가자A
        	this.staITVWPRSN_B  = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_B;	// 평가자B

        	this.staITVWPRSN_ID_SABUN_bg    = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_ID_SABUN_bg;		// 사번
        	this.staITVWPRSN_DS_HNAME_bg    = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_DS_HNAME_bg;		// 성명
        	//this.staITVWPRSN_DS_POSITION_bg = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_DS_POSITION_bg;	// 직급
        	//this.staITVWPRSN_DS_EMPTYPE_bg  = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_DS_EMPTYPE_bg; 	// 직종
        	//this.staITVWPRSN_DS_DEPT_bg     = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_DS_DEPT_bg;		// 평가조직
        	this.staITVWPRSN_DS_DUTY_bg     = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_DS_DUTY_bg;		// 직책
        	this.staITVWPRSN_STAT_RTNG   	= this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_STAT_RTNG;		// 평가상태
        	this.staITVWPRSN_STAT_RTNG_bg   = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_STAT_RTNG_bg;		// 평가상태

        	this.staITVWPRSN_ID_SABUN_B    	= this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_ID_SABUN_B;		// 사번
        	this.staITVWPRSN_ID_SABUN_B_bg  = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_ID_SABUN_B_bg;	// 사번
        	this.staITVWPRSN_DS_HNAME_B     = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_DS_HNAME_B;		// 성명
        	this.staITVWPRSN_DS_HNAME_B_bg  = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_DS_HNAME_B_bg;	// 성명
        	this.staITVWPRSN_DS_DUTY_B      = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_DS_DUTY_B;		// 직책
        	this.staITVWPRSN_DS_DUTY_B_bg   = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_DS_DUTY_B_bg;		// 직책
        	this.staITVWPRSN_STAT_RTNG_B    = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_STAT_RTNG_B;		// 평가상태
        	this.staITVWPRSN_STAT_RTNG_B_bg = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_STAT_RTNG_B_bg;	// 평가상태

        	// 버튼
        	this.btnSave     		= this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.btnSave;			// 임시저장 버튼

        	// 등급
        	this.txtGRADE = this.divData.form.divDataRight.form.divDataBottom.form.txtGRADE;
        	//this.divAdditional = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional;

        	// 피드백
        	this.divAdditional2 = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2;
        	this.txtDS_COACHING = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.txtDS_COACHING;
        	this.txtDS_OPINION = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.txtDS_OPINION;
        	this.txtDS_COACHING_A = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab1.form.txtDS_COACHING_A;
        	this.txtDS_OPINION_A = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab1.form.txtDS_OPINION_A;
        	this.txtDS_COACHING_B = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab2.form.txtDS_COACHING_B;
        	this.txtDS_OPINION_B = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab2.form.txtDS_OPINION_B;
        	this.tabData = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData;

        	// 스플릿터
        	this.divSplitter = this.divData.form.divSplitter;
        	this.divSplitter2 = this.divData.form.divDataRight.form.divSplitter2;

        	this.divDataTop = this.divData.form.divDataRight.form.divDataTop;
        	this.divSummary = this.divData.form.divDataRight.form.divDataTop.form.divSummary;
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsListGoalBgvdprsn, "DA", "DAJ_RTNG_GOAL_BGVDPRSN");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGridAfterCDTextChanged";

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_RTNG.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 평가기준
        	this.ccfID_RTNG.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 성명
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 인사평가 대상자 조회
        	this.dsSelectGoalBgcdprsn = new Dataset();
        	this.dsSelectGoalBgcdprsn.addColumn("CD_CORP", "string");
        	this.dsSelectGoalBgcdprsn.addColumn("ID_RTNG", "string");
        	this.dsSelectGoalBgcdprsn.addColumn("TY_PTCP", "string");
        	this.dsSelectGoalBgcdprsn.addColumn("ID_SABUN", "string");

         	// 인사평가 요약 조회
        	this.dsSelectRsltPeedbackSummary = new Dataset();
        	this.dsSelectRsltPeedbackSummary.addColumn("CD_CORP", "string");
        	this.dsSelectRsltPeedbackSummary.addColumn("ID_RTNG", "string");
        	this.dsSelectRsltPeedbackSummary.addColumn("ID_SABUN_BGVD", "string");
        	this.dsSelectRsltPeedbackSummary.addColumn("ID_SABUN_ITVW", "string");
        	this.dsSelectRsltPeedbackSummary.addColumn("TY_PTCP", "string");

        	// 인사평가 등급 조회
        	this.dsSelectRsltPeedbackGrade = new Dataset();
        	this.dsSelectRsltPeedbackGrade.addColumn("CD_CORP", "string");
        	this.dsSelectRsltPeedbackGrade.addColumn("ID_RTNG", "string");
        	this.dsSelectRsltPeedbackGrade.addColumn("SEQ_BGVDPRSN", "int");

        	// 인사평가 피드백 저장
        	this.dsSaveGoalInterviewer = new Dataset();
        	this.dsSaveGoalInterviewer.addColumn("TY_WRK", "string");
        	this.dsSaveGoalInterviewer.addColumn("CD_CORP", "string");
        	this.dsSaveGoalInterviewer.addColumn("ID_RTNG", "string");
        	this.dsSaveGoalInterviewer.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSaveGoalInterviewer.addColumn("SEQ_ITVWPRSN", "int");
        	this.dsSaveGoalInterviewer.addColumn("DS_COACHING", "string");
        	this.dsSaveGoalInterviewer.addColumn("DS_OPINION", "string");
        	this.dsSaveGoalInterviewer.addColumn("ID_USER", "string");

         	// 업무목표 자기기술 면담 완료
        	this.dsComplateRsltPeedback = new Dataset();
        	this.dsComplateRsltPeedback.addColumn("CD_CORP", "string");
        	this.dsComplateRsltPeedback.addColumn("ID_RTNG", "string");
        	this.dsComplateRsltPeedback.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsComplateRsltPeedback.addColumn("SEQ_ITVWPRSN", "int");
        	this.dsComplateRsltPeedback.addColumn("ID_USER", "string");

        	// 업무목표 자기기술 히스토리 조회
        	this.dsSelectGoalHistory = new Dataset();
        	this.dsSelectGoalHistory.addColumn("CD_CORP", "string");
        	this.dsSelectGoalHistory.addColumn("ID_RTNG", "string");

        	// 평가회차 조회
        	this.dsSelectRtngStd = new Dataset();
        	this.dsSelectRtngStd.addColumn("TY_GUBUN", "string");
        	this.dsSelectRtngStd.addColumn("CN_ROW", "int");
        	this.dsSelectRtngStd.addColumn("VALUE", "string");
        	this.dsSelectRtngStd.addColumn("MIN_VALUE", "string");
        	this.dsSelectRtngStd.addColumn("CD_CORP", "string");
        	this.dsSelectRtngStd.addColumn("YR_RTNG", "string");
        	this.dsSelectRtngStd.addColumn("ID_SABUN", "string");
        	this.dsSelectRtngStd.addColumn("CD_RTNG_TYPE", "string");
        	this.dsSelectRtngStd.addColumn("ID_SCREEN", "string");
        	this.dsSelectRtngStd.addColumn("CD_ROLE", "string");
        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	// 법인
        	this.dsSearch.setColumn(0, "CD_CORP",  this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP",  this.AuthClient.DS_CORP);
        	// 성명
        	this.dsSearch.setColumn(0, "ID_SABUN", this.AuthClient.ID_SABUN);
        	this.dsSearch.setColumn(0, "DS_HNAME", this.AuthClient.DS_HNAME);

        	if (this.getOwnerFrame().READ_ONLY) {
        		this.dsSearch.setColumn(0, "CD_CORP",  this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP",  this.getOwnerFrame().DS_CORP);
        		this.dsSearch.setColumn(0, "ID_SABUN",  this.getOwnerFrame().ID_SABUN);
        		this.dsSearch.setColumn(0, "DS_HNAME",  this.getOwnerFrame().DS_HNAME);
        		this.dsSearch.setColumn(0, "TY_PTCP",  this.getOwnerFrame().TY_PTCP);
        		this.dsSearch.setColumn(0, "ID_RTNG",  this.getOwnerFrame().ID_RTNG);
        		this.dsSearch.setColumn(0, "DS_RTNG",  this.getOwnerFrame().DS_RTNG);

        		this.ccfID_RTNG.set_enable(false);
        		this.divSplitter.set_left(0);
        		this.divData_ondragmove(null, {
        			userdata: "splitter",
        			clientx: 0,
        		});
        		this.divSplitter2.set_top(105);
        		this.divSummary.set_height(90);
        		this.divData_ondragmove2(null, {
        			userdata: "splitter2",
        			clientx: 0,
        		});

        		this.FormBtns.Select.click();
        	}

        	// 평가자2명인 경우(승인자/면담자)
        	var ID_SABUN_ITVW;
        	var SummaryRowcount = 0;

        	this.divSplitter.set_left(0);
        	this.divData_ondragmove(null, {
        		userdata: "splitter",
        		clientx: 0,
        	});

        	this.checkTarget();
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        /*
         *	조회 버튼
         */
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelectGoalBgcdprsn.clearData();
        	this.dsSelectGoalBgcdprsn.addRow();
        	this.dsSelectGoalBgcdprsn.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectGoalBgcdprsn.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSelectGoalBgcdprsn.setColumn(0, "TY_PTCP", this.dsSearch.getColumn(0, "TY_PTCP"));
        	this.dsSelectGoalBgcdprsn.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));

        	this.dsSelectGoalHistory.clearData();
        	this.dsSelectGoalHistory.addRow();
        	this.dsSelectGoalHistory.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectGoalHistory.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));

        	var strSvcId    = "select_goal_bgvdprsn";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_goal_bgvdprsn=dsSelectGoalBgcdprsn select_goal_history=dsSelectGoalHistory";
        	var outData     = "dsListGoalBgvdprsn=select_goal_bgvdprsn0 dsListGoalHistory=select_goal_history0";
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
        this.fnSave = function() {

        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
        	//this.fnExcelExportTest(this.dxGridSubExcl, "업무목표자기기술", "업무목표자기기술");
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {

        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnExcelExportTest = function(objGridExcel, sSheetName, sFileName)
        {

        }

        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	// 인사평가(평가결과피드백) 대상자 조회
        	if (svcID == "select_goal_bgvdprsn") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnClearSummary();

        	}
        	// 인사평가(평가결과피드백) 등급 조회
        	else if (svcID == "select_rslt_peedback_grd") {

        		// 대상자
        		this.staBGVDPRSN_ID_SABUN_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(0, "ID_SABUN_BGVD"));			// 사번
        		this.staBGVDPRSN_DS_HNAME_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_HNAME_BGVD"));			// 성명
        		this.staBGVDPRSN_DS_POSITION_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_POSITION_BGVD"));	// 직급
        		this.staBGVDPRSN_DS_EMPTYPE_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_EMPTYPE_BGVD"));		// 직종
        		this.staBGVDPRSN_DS_DEPT_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_DEPT_BGVD"));			// 평가조직
        		this.staBGVDPRSN_DS_DUTY_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_DUTY_BGVD"));			// 직책

        		// 면담자
        		this.staITVWPRSN_ID_SABUN_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(0, "ID_SABUN_ITVW"));		// 사번
        		this.staITVWPRSN_DS_HNAME_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_HNAME_ITVW"));		// 성명
        		//this.staITVWPRSN_DS_POSITION_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_POSITION_ITVW"));	// 직급
        		//this.staITVWPRSN_DS_EMPTYPE_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_EMPTYPE_ITVW")); 	// 직종
        		//this.staITVWPRSN_DS_DEPT_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_DEPT_ITVW"));			// 평가조직
        		this.staITVWPRSN_DS_DUTY_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_DUTY_ITVW"));			// 직책
        		this.staITVWPRSN_STAT_RTNG_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_STAT_RTNG"));			// 평가상태

        		this.staITVWPRSN_ID_SABUN_B_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(1, "ID_SABUN_ITVW"));		// 사번
        		this.staITVWPRSN_DS_HNAME_B_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(1, "DS_HNAME_ITVW"));		// 성명
        		this.staITVWPRSN_DS_DUTY_B_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(1, "DS_DUTY_ITVW"));		// 직책
        		this.staITVWPRSN_STAT_RTNG_B_bg.set_text(this.dsListGoalRsltFdbkSummary.getColumn(1, "DS_STAT_RTNG"));		// 평가상태

        		// 평가자2명인 경우(승인자/면담자)
        		this.ID_SABUN_ITVW  = this.dsListGoalRsltFdbkSummary.getColumn(0, "ID_SABUN_ITVW");
        		if ((this.dsSearch.getColumn(0, "ID_SABUN") == this.ID_SABUN_ITVW) || (this.dsSearch.getColumn(0, "TY_PTCP") == "B"))
        		{
        			this.SummaryRowcount = 0;
        		}
        		else
        		{
        			this.SummaryRowcount = 1;
        		}

        		// 버튼 상태 변경
        		this.fnCheckExtensionButtonStatus();

        		// 버튼 활성화
        		this.fnEnableButton();

        		// 인사평가 최종 등급
        		this.txtGRADE.set_text(this.dsListGoalRsltFdbkGrade.getColumn(0, "DS_GRADE"));

        		// 면담자 피드백
        		this.txtDS_COACHING.set_value(this.dsListGoalRsltFdbkSummary.getColumn(this.dsListGoalRsltFdbkSummary.rowposition, "DS_COACHING"));
        		this.txtDS_OPINION.set_value(this.dsListGoalRsltFdbkSummary.getColumn(this.dsListGoalRsltFdbkSummary.rowposition, "DS_OPINION"));

        		this.txtDS_COACHING_A.set_value(this.dsListGoalRsltFdbkSummary.getColumn(this.dsListGoalRsltFdbkSummary.rowposition, "DS_COACHING_A"));
        		this.txtDS_OPINION_A.set_value(this.dsListGoalRsltFdbkSummary.getColumn(this.dsListGoalRsltFdbkSummary.rowposition, "DS_OPINION_A"));
        		this.txtDS_COACHING_B.set_value(this.dsListGoalRsltFdbkSummary.getColumn(this.dsListGoalRsltFdbkSummary.rowposition, "DS_COACHING_B"));
        		this.txtDS_OPINION_B.set_value(this.dsListGoalRsltFdbkSummary.getColumn(this.dsListGoalRsltFdbkSummary.rowposition, "DS_OPINION_B"));

        	}
        	// 인사평가(평가결과피드백) 저장
        	else if (svcID == "save_rslt_peedback_grd") {
        		//this.fnSelectRsltPeedbackGrade();
        		this.FormBtns.Select.click();
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.btnSave.set_enable(false);
        	}
        	// 인사평가(평가결과피드백) 완료
        	else if (svcID == "complete_rslt_peedback") {
        		this.fnSelectRsltPeedbackGrade();
        		this.FormBtns.Select.click();
        	}
        	// 평가대상자 존재 여부에 따른 화면 제어
        	else if (svcID == "select_rtng_std") {
        		trace(" select_rtng_std=>" + this.dsListRtngStd.saveXML());
        		if (this.dsListRtngStd.rowcount == 0) {
        			this.gfnAlert("평가등급 결정이 진행 중입니다.\n확인 버튼을 누르면 평가결과피드백 화면이 닫힙니다.", "", "", function() {
        				this.getParentContext().close();
        			});
        		} else if (this.dsListRtngStd.getColumn(0, "CD_MAGAM") == "") {
        			this.gfnAlert("평가등급 결정이 진행 중입니다.\n확인 버튼을 누르면 평가결과피드백 화면이 닫힙니다.", "", "", function() {
        				this.getParentContext().close();
        			});
        		} else if (this.dsListRtngStd.getColumn(0, "CD_MAGAM") == "FDBK" && this.dsListRtngStd.getColumn(0, "STAT_RTNG") != "55") {
        			this.gfnAlert("평가결과피드백이 진행 중입니다.\n확인 버튼을 누르면 평가결과피드백 화면이 닫힙니다.", "", "", function() {
        				this.getParentContext().close();
        			});
        // 		} else if (this.dsListRtngStd.getColumn(0, "CD_MAGAM") == "RREU") {	// 평가결과업로드
        // 			this.gfnAlert("평가결과피드백이 진행 중입니다.\n확인 버튼을 누르면 평가결과피드백 화면이 닫힙니다.", "", "", function() {
        // 				this.getParentContext().close();
        // 			});
        		} else {
        			if (this.dsListRtngStd.rowcount == 1) {
        				this.dsSearch.setColumn(0, "ID_RTNG", this.dsListRtngStd.getColumn(0, "CD_RTNG"));
        				this.dsSearch.setColumn(0, "DS_RTNG", this.dsListRtngStd.getColumn(0, "DS_RTNG"));
        				this.dsSearch.setColumn(0, "TY_PTCP", this.dsListRtngStd.getColumn(0, "TY_PTCP"));
        				this.dsSearch.setColumn(0, "CD_RTNG_ASBLNEXT", this.dsListRtngStd.getColumn(0, "CD_RTNG_ASBLNEXT"));
        				this.dsSearch.setColumn(0, "DS_RTNG_ASBLNEXT", this.dsListRtngStd.getColumn(0, "DS_RTNG_ASBLNEXT"));

        				if (this.dsListRtngStd.getColumn(0, "TY_PTCP") == "B") {
        					this.divSplitter.set_left(0);
        					this.divData_ondragmove(null, {
        						userdata: "splitter",
        						clientx: 0,
        					});
        				}

        				if (this.dsListRtngStd.getColumn(0, "TY_PTCP") == "R" || this.dsListRtngStd.getColumn(0, "TY_PTCP") == "M") {
        					this.divSplitter.set_left(0);
        					this.divData_ondragmove(null, {
        						userdata: "splitter",
        						clientx: 450,	//320,
        					});
        				}

        				this.FormBtns.Select.click();
        			}
        		}
        	}
        }

        this.fnCheckExtensionButtonStatus = function() {
        	// 피평가자의 종합상태
        	var STATUS_RTNG  = this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "STATUS_RTNG");
        	// 평가자2명인 경우(승인자/면담자)
        	var YN_APPLY  = this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "YN_APPLY");
        	var CL_ITVWPRSN  = this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN");

        	if (STATUS_RTNG == "52" || STATUS_RTNG == "CPLT4") {
        		this.btnSave.set_enable(false); // true
        	}

        	this.txtDS_COACHING.set_visible(true);
        	this.txtDS_OPINION.set_visible(true);
        	this.tabData.set_visible(false);
        	//this.divAdditional.set_bottom(120);	//158
        	//this.divAdditional.set_top("sta02:10");
        	this.divAdditional2.set_top("sta02:30");
        	this.divSplitter2.set_top(105);
        	this.divSummary.set_height(90);
        	this.divData_ondragmove2(null, {
        		userdata: "splitter2",
        		clientx: 0,
        	});

        	if ((YN_APPLY == "Y" || CL_ITVWPRSN == "01") || ( YN_APPLY == "Y" && CL_ITVWPRSN == "00")) {
        		this.txtDS_COACHING.set_visible(false);
        		this.txtDS_OPINION.set_visible(false);
        		this.tabData.set_visible(true);
        		if (YN_APPLY == "Y") {
        			this.tabData.set_tabindex(0);
        		} else if (CL_ITVWPRSN == "01") {
        			this.tabData.set_tabindex(1);
        		}
        		//this.dxGridSub.set_bottom(278);	//158
        		//this.divAdditional.set_bottom(158);	//158
        		//this.divAdditional.set_top("sta02:10");
        		this.divAdditional2.set_top("sta02:30");

        		this.divSplitter2.set_top(135);
        		this.divSummary.set_height(120);
        		this.divData_ondragmove2(null, {
        			userdata: "splitter2",
        			clientx: 0,
        		});
        		this.staITVWPRSN.set_text("평가자A");
        		this.staITVWPRSN_B.set_visible(true);
        		this.staITVWPRSN_ID_SABUN_B.set_visible(true);
        		this.staITVWPRSN_ID_SABUN_B_bg.set_visible(true);
        		this.staITVWPRSN_DS_HNAME_B.set_visible(true);
        		this.staITVWPRSN_DS_HNAME_B_bg.set_visible(true);
        		this.staITVWPRSN_DS_DUTY_B.set_visible(true);
        		this.staITVWPRSN_DS_DUTY_B_bg.set_visible(true);

        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "B") {	// 피평가자
        			this.staITVWPRSN_STAT_RTNG.set_visible(false);
        			this.staITVWPRSN_STAT_RTNG_bg.set_visible(false);
        			this.staITVWPRSN_STAT_RTNG_B.set_visible(false);
        			this.staITVWPRSN_STAT_RTNG_B_bg.set_visible(false);
        		} else {
        			this.staITVWPRSN_STAT_RTNG.set_visible(true);
        			this.staITVWPRSN_STAT_RTNG_bg.set_visible(true);
        			this.staITVWPRSN_STAT_RTNG_B.set_visible(true);
        			this.staITVWPRSN_STAT_RTNG_B_bg.set_visible(true);
        		}

        		this.btnSave.set_top(30);
        	} else {
        		this.divSplitter2.set_top(105);
        		this.divSummary.set_height(90);
        		this.divData_ondragmove2(null, {
        			userdata: "splitter2",
        			clientx: 0,
        		});
        		this.staITVWPRSN.set_text("평가자");
        		this.staITVWPRSN_B.set_visible(false);
        		this.staITVWPRSN_ID_SABUN_B.set_visible(false);
        		this.staITVWPRSN_ID_SABUN_B_bg.set_visible(false);
        		this.staITVWPRSN_DS_HNAME_B.set_visible(false);
        		this.staITVWPRSN_DS_HNAME_B_bg.set_visible(false);
        		this.staITVWPRSN_DS_DUTY_B.set_visible(false);
        		this.staITVWPRSN_DS_DUTY_B_bg.set_visible(false);

        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "B") {	// 피평가자
        			this.staITVWPRSN_STAT_RTNG.set_visible(false);
        			this.staITVWPRSN_STAT_RTNG_bg.set_visible(false);
        			this.staITVWPRSN_STAT_RTNG_B.set_visible(false);
        			this.staITVWPRSN_STAT_RTNG_B_bg.set_visible(false);
        		} else {
        			this.staITVWPRSN_STAT_RTNG.set_visible(true);
        			this.staITVWPRSN_STAT_RTNG_bg.set_visible(true);
        			this.staITVWPRSN_STAT_RTNG_B.set_visible(false);
        			this.staITVWPRSN_STAT_RTNG_B_bg.set_visible(false);
        		}

        		this.btnSave.set_top(0);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        	} else if (id == "ccfID_RTNG") {
        		dsUserParam.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YR_RTNG"     , "");
        		dsUserParam.setColumn(nrow, "ID_SABUN"    , this.dsSearch.getColumn(0, "ID_SABUN"));
        		dsUserParam.setColumn(nrow, "CD_RTNG_TYPE", "JA13");
        		dsUserParam.setColumn(nrow, "ID_SCREEN"   , "DAJ_RTNG_RSLT_FDBK");
        		dsUserParam.setColumn(nrow, "CD_ROLE"     , this.AuthClient.CD_ROLE);
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (codeFindData[0] == undefined) {
        		return;
        	}

        	if (id == "ccfID_RTNG") {
        		var TY_PTCP = codeFindData[0]["TY_PTCP"];
        		this.dsSearch.setColumn(0, "TY_PTCP", codeFindData[0]["TY_PTCP"]);
        		this.dsSearch.setColumn(0, "CD_RTNG_ASBLNEXT", codeFindData[0]["CD_RTNG_ASBLNEXT"]);
        		this.dsSearch.setColumn(0, "DS_RTNG_ASBLNEXT", codeFindData[0]["DS_RTNG_ASBLNEXT"]);
        		this.dsSearch.setColumn(0, "CNTN_RTNG_ID", codeFindData[0]["CNTN_RTNG_ID"]);

        		if (TY_PTCP == "B") {
        			this.divSplitter.set_left(0);
        			this.divData_ondragmove(null, {
        				userdata: "splitter",
        				clientx: 0,
        			});
        		}

        		if (TY_PTCP == "R" || TY_PTCP == "M") {
        			this.divSplitter.set_left(0);
        			this.divData_ondragmove(null, {
        				userdata: "splitter",
        				clientx: 450,	//320,
        			});
        		}
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch (id) {
        	// 피평가자
        	case "DAX_CFBASEINFO_ALL":
        		dsUserParam.setColumn(nrow, "CD_CORP",   this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT",   this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP",   "N"); //법인무관(Y: 법인에 관계없이 직원검색 N:조건의 법인의 임직원만 검색)
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");	// 01 재직 02 휴직 04 퇴직 % :전체
        		break;
        	}

        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {
        	switch (id) {
        	case "DAX_CFBASEINFO_ALL":
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DT_GROUPJOIN", codeFindData[0]["DT_GROUPJOIN"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DT_JOIN"     , codeFindData[0]["DT_JOIN"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_CD_DEPT"     , codeFindData[0]["CD_DEPT"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DS_DEPT"     , codeFindData[0]["DS_DEPT"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_CD_POSITION" , codeFindData[0]["CD_POSITION"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DS_POSITION" , codeFindData[0]["DS_POSITION"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_CD_JOBTYPE"  , codeFindData[0]["CD_JOBTYPE"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DS_JOBTYPE"  , codeFindData[0]["DS_JOBTYPE"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_CD_EMPTYPE"  , codeFindData[0]["CD_EMPTYPE"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DS_EMPTYPE"  , codeFindData[0]["DS_EMPTYPE"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_CD_PAYSTEP"  , codeFindData[0]["CD_PAYSTEP"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DS_PAYSTEP"  , codeFindData[0]["DS_PAYSTEP"]);

        		break;
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj, e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.fnClearSummary();
        	}
        }

        this.divData_ondragmove = function(obj, e) {
        	if (e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        }

        this.divData_divSplitter_ondrag = function(obj, e) {
        	e.set_userdata("splitter");
        	return true;
        }

        this.divData_ondragmove2 = function(obj, e) {
        	if (e.userdata == "splitter2") {
        		this.divData.form.divDataRight.form.divSplitter2.set_top(e.clienty);
        		this.divData.form.divDataRight.form.resetScroll();
        	}
        }

        this.divData_divSplitter2_ondrag = function(obj, e) {
        	e.set_userdata("splitter2");
        	return true;
        }

        this.fnButtonPosition = function() {
        	var arrBtns = [];
        	for (var i = this.BtnsInfo.length - 1; i >= 0; i--) {
        		if (this.BtnsInfo[i].COMP_BUTTON.visible)
        			arrBtns.push(this.BtnsInfo[i].COMP_BUTTON);
        	}
        	var r = 0;
        	for(var i = 0; i <= arrBtns.length - 1; i++) {
        		var btn = arrBtns[i];
        		if (i == 0)
        			btn.set_right(0);
        		else {
        			btn.set_right(r + 4);
        		}

        		r = btn.right + btn.width;
        	}
        }

        this.fnEnableButton = function() {
        	if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "STAT_RTNG") == "PSNL"
        		|| this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "STAT_RTNG") == "CPLT4") { // 1차평가 중, 완료
        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "B") {	// 피평가자

        			this.btnHistoryGoalEstabl.set_visible(false);
        			this.btnHistoryGoalCheck.set_visible(false);
        			this.btnHistoryGoalSelf.set_visible(false);
        			this.btnComplete.set_visible(false);
        			this.btnFinish.set_visible(false);		// 전체평가완료

        			this.btnHistoryGoalEstabl.set_enable(true);
        			this.btnHistoryGoalCheck.set_enable(true);
        			this.btnHistoryGoalSelf.set_enable(true);
        			this.btnComplete.set_enable(false);		//
        			this.btnFinish.set_enable(false);		// 전체평가완료

        			// 확장버튼 숨김 처리 후 위치조정
        			this.fnButtonPosition();
        			this.btnHistoryGoalEstabl.set_visible(true);	// 이력조회
        			this.btnHistoryGoalCheck.set_visible(true);		// 이력조회
        			this.btnHistoryGoalSelf.set_visible(true);		// 이력조회
        			this.divTopBtn.form.btnGroup_업무목표이력.set_right(0);

        			this.btnSave.set_enable(false); // true
        			this.btnSave.set_visible(false);

        			this.txtGRADE.set_enable(false);

        			this.txtDS_COACHING.set_enable(false);
        			this.txtDS_OPINION.set_enable(false);

        			this.txtDS_COACHING_A.set_enable(false);
        			this.txtDS_OPINION_A.set_enable(false);
        			this.txtDS_COACHING_B.set_enable(false);
        			this.txtDS_OPINION_B.set_enable(false);

        		}

        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "R") {	// 평가자
        			this.btnHistoryGoalCheck.set_visible(false);
        			this.btnHistoryGoalEstabl.set_visible(false);
        			this.btnHistoryGoalSelf.set_visible(false);
        			this.btnComplete.set_visible(true);
        			this.btnFinish.set_visible(true);				// 전체평가완료

        			this.btnHistoryGoalEstabl.set_enable(true);
        			this.btnHistoryGoalCheck.set_enable(true);
        			this.btnHistoryGoalSelf.set_enable(true);
        			this.btnComplete.set_enable(false);				//
        			this.btnFinish.set_enable(false);				// 전체평가완료

        			// 평가자2명인 경우(승인자/면담자)
        			if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "YN_APPLY") != "Y") {
        			    if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {	// 평가자B
        					this.btnComplete.set_visible(false);			// 개인면담완료
        					this.btnFinish.set_visible(false);				// 전체평가완료
        				}
        			}

        			// 확장버튼 숨김 처리 후 위치조정
        			this.fnButtonPosition();
        			this.btnHistoryGoalEstabl.set_visible(true);	// 이력조회
        			this.btnHistoryGoalCheck.set_visible(true);		// 이력조회
        			this.btnHistoryGoalSelf.set_visible(true);		// 이력조회
        			this.divTopBtn.form.btnGroup_업무목표이력.set_right(184);
        			if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "YN_APPLY") != "Y") {
        				if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {
        					this.divTopBtn.form.btnGroup_업무목표이력.set_right(0);	// 91 0
        				}
        			}

        			this.btnSave.set_enable(false);
        			this.btnSave.set_visible(false);

        			this.txtGRADE.set_enable(false);

        			this.txtDS_COACHING.set_enable(false);
        			this.txtDS_OPINION.set_enable(false);

        			this.txtDS_COACHING_A.set_enable(false);
        			this.txtDS_OPINION_A.set_enable(false);
        			this.txtDS_COACHING_B.set_enable(false);
        			this.txtDS_OPINION_B.set_enable(false);
        		}
        	} else if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "STAT_RTNG") == "UPLD"
        		|| this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "STAT_RTNG") == "FDBK") { // 평가피드백 전, 중
        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "B") {	// 피평가자

        			this.btnHistoryGoalEstabl.set_visible(false);
        			this.btnHistoryGoalCheck.set_visible(false);
        			this.btnHistoryGoalSelf.set_visible(false);
        			this.btnComplete.set_visible(false);
        			this.btnFinish.set_visible(false);				// 전체평가완료

        			this.btnHistoryGoalEstabl.set_enable(true);
        			this.btnHistoryGoalCheck.set_enable(true);
        			this.btnHistoryGoalSelf.set_enable(true);
        			this.btnComplete.set_enable(false);				//
        			this.btnFinish.set_enable(false);				// 전체평가완료

        			// 확장버튼 숨김 처리 후 위치조정
        			this.fnButtonPosition();
        			this.btnHistoryGoalEstabl.set_visible(true);	// 이력조회
        			this.btnHistoryGoalCheck.set_visible(true);		// 이력조회
        			this.btnHistoryGoalSelf.set_visible(true);		// 이력조회
        			this.divTopBtn.form.btnGroup_업무목표이력.set_right(0);

        			this.btnSave.set_enable(false); // true
        			this.btnSave.set_visible(false);

        			this.txtGRADE.set_enable(false);

        			this.txtDS_COACHING.set_enable(false);
        			this.txtDS_OPINION.set_enable(false);

        			this.txtDS_COACHING_A.set_enable(false);
        			this.txtDS_OPINION_A.set_enable(false);
        			this.txtDS_COACHING_B.set_enable(false);
        			this.txtDS_OPINION_B.set_enable(false);
        		}

        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "R") {	// 평가자
        			this.btnHistoryGoalEstabl.set_visible(false);
        			this.btnHistoryGoalCheck.set_visible(false);
        			this.btnHistoryGoalSelf.set_visible(false);
        			this.btnComplete.set_visible(true);
        			this.btnFinish.set_visible(true);				// 전체평가완료

        			this.btnHistoryGoalEstabl.set_enable(true);
        			this.btnHistoryGoalCheck.set_enable(true);
        			this.btnHistoryGoalSelf.set_enable(true);
        			this.btnComplete.set_enable(true);				// 성과면담완료
        			this.btnFinish.set_enable(true);				// 전체평가완료

        			this.txtDS_COACHING.set_enable(true);
        			this.txtDS_OPINION.set_enable(true);

        			this.txtDS_COACHING_A.set_enable(false);
        			this.txtDS_OPINION_A.set_enable(false);
        			this.txtDS_COACHING_B.set_enable(false);
        			this.txtDS_OPINION_B.set_enable(false);

        			// 평가자2명인 경우(승인자/면담자)
        			if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "YN_APPLY") == "Y") {
        				this.txtDS_COACHING.set_enable(false);
        				this.txtDS_OPINION.set_enable(false);

        				this.txtDS_COACHING_A.set_enable(true);
        				this.txtDS_OPINION_A.set_enable(true);
        				this.txtDS_COACHING_B.set_enable(false);
        				this.txtDS_OPINION_B.set_enable(false);

        			} else{
        				if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {
        					this.btnComplete.set_enable(false);
        					this.btnComplete.set_visible(false);
        					this.btnFinish.set_visible(false);				// 전체면담완료

        					this.txtDS_COACHING.set_enable(false);
        					this.txtDS_OPINION.set_enable(false);

        					this.txtDS_COACHING_A.set_enable(false);
        					this.txtDS_OPINION_A.set_enable(false);
        					this.txtDS_COACHING_B.set_enable(true);
        					this.txtDS_OPINION_B.set_enable(true);
        				}
        			}

        			// 확장버튼 숨김 처리 후 위치조정
        			this.fnButtonPosition();
        			this.btnHistoryGoalEstabl.set_visible(true);	// 이력조회
        			this.btnHistoryGoalCheck.set_visible(true);		// 이력조회
        			this.btnHistoryGoalSelf.set_visible(true);		// 이력조회
        			this.divTopBtn.form.btnGroup_업무목표이력.set_right(184);
        			if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "YN_APPLY") != "Y") {
        				if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {
        					this.divTopBtn.form.btnGroup_업무목표이력.set_right(0);	// 91 0
        				}
        			}

        			this.btnSave.set_enable(false);
        			this.btnSave.set_visible(true);

        			this.txtGRADE.set_enable(false);
        		}
        	} else if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "STAT_RTNG") == "CPLT5") {	// 평가완료
        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "B") {	// 피평가자
        			this.btnHistoryGoalEstabl.set_visible(false);
        			this.btnHistoryGoalCheck.set_visible(false);
        			this.btnHistoryGoalSelf.set_visible(false);
        			this.btnComplete.set_visible(false);
        			this.btnFinish.set_visible(false);				// 전체평가완료

        			this.btnHistoryGoalEstabl.set_enable(true);
        			this.btnHistoryGoalCheck.set_enable(true);
        			this.btnHistoryGoalSelf.set_enable(true);
        			this.btnComplete.set_enable(false);				//
         			this.btnFinish.set_enable(false);				// 전체평가완료

        			// 확장버튼 숨김 처리 후 위치조정
        			this.fnButtonPosition();
        			this.btnHistoryGoalEstabl.set_visible(true);	// 이력조회
        			this.btnHistoryGoalCheck.set_visible(true);		// 이력조회
        			this.btnHistoryGoalSelf.set_visible(true);		// 이력조회
        			this.divTopBtn.form.btnGroup_업무목표이력.set_right(0);

        			this.btnSave.set_enable(false);
        			this.btnSave.set_visible(false);

        			this.txtGRADE.set_enable(false);

        			this.txtDS_COACHING.set_enable(false);
        			this.txtDS_OPINION.set_enable(false);

        			this.txtDS_COACHING_A.set_enable(false);
        			this.txtDS_OPINION_A.set_enable(false);
        			this.txtDS_COACHING_B.set_enable(false);
        			this.txtDS_OPINION_B.set_enable(false);
        		}

        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "R") {	// 평가자
        			this.btnHistoryGoalEstabl.set_visible(false);
        			this.btnHistoryGoalCheck.set_visible(false);
        			this.btnHistoryGoalSelf.set_visible(false);
        			this.btnComplete.set_visible(true);
        			this.btnFinish.set_visible(true);				// 전체평가완료

        			this.btnHistoryGoalEstabl.set_enable(true);
        			this.btnHistoryGoalCheck.set_enable(true);
        			this.btnHistoryGoalSelf.set_enable(true);
        			this.btnComplete.set_enable(false);				//
        			this.btnFinish.set_enable(true);				// 전체평가완료

        			this.txtDS_COACHING.set_enable(true);
        			this.txtDS_OPINION.set_enable(true);

        			this.txtDS_COACHING_A.set_enable(false);
        			this.txtDS_OPINION_A.set_enable(false);
        			this.txtDS_COACHING_B.set_enable(false);
        			this.txtDS_OPINION_B.set_enable(false);

        			// 평가자2명인 경우(승인자/면담자)
        			if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "YN_APPLY") != "Y") {
        			if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {	// 평가자B
        					this.btnComplete.set_visible(false);			//
        					this.btnFinish.set_visible(false);				// 전체면담완료
        				}
        			}

        			// 확장버튼 숨김 처리 후 위치조정
        			this.fnButtonPosition();
        			this.btnHistoryGoalEstabl.set_visible(true);	// 이력조회
        			this.btnHistoryGoalCheck.set_visible(true);		// 이력조회
        			this.btnHistoryGoalSelf.set_visible(true);		// 이력조회
        			this.divTopBtn.form.btnGroup_업무목표이력.set_right(184);
        			if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "YN_APPLY") != "Y") {
        				if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {
        					this.divTopBtn.form.btnGroup_업무목표이력.set_right(0);	// 91 0
        				}
        			}

        			this.btnSave.set_enable(false);
        			this.btnSave.set_visible(true);

        			this.txtGRADE.set_enable(false);

        			this.txtDS_COACHING.set_enable(false);
        			this.txtDS_OPINION.set_enable(false);

        			this.txtDS_COACHING_A.set_enable(false);
        			this.txtDS_OPINION_A.set_enable(false);
        			this.txtDS_COACHING_B.set_enable(false);
        			this.txtDS_OPINION_B.set_enable(false);
        		}
        	} else {
        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "B") {	// 피평가자
        			this.btnHistoryGoalEstabl.set_visible(false);
        			this.btnHistoryGoalCheck.set_visible(false);
        			this.btnHistoryGoalSelf.set_visible(false);
        			this.btnComplete.set_visible(false);
        			this.btnFinish.set_visible(false);				// 전체평가완료

        			this.btnHistoryGoalEstabl.set_enable(true);
        			this.btnHistoryGoalCheck.set_enable(true);
        			this.btnHistoryGoalSelf.set_enable(true);
        			this.btnComplete.set_enable(false);				//
         			this.btnFinish.set_enable(false);				// 전체평가완료

        			// 확장버튼 숨김 처리 후 위치조정
        			this.fnButtonPosition();
        			this.btnHistoryGoalEstabl.set_visible(true);	// 이력조회
        			this.btnHistoryGoalCheck.set_visible(true);		// 이력조회
        			this.btnHistoryGoalSelf.set_visible(true);		// 이력조회
        			this.divTopBtn.form.btnGroup_업무목표이력.set_right(0);

        			this.btnSave.set_enable(false);
        			this.btnSave.set_visible(false);

        			this.txtGRADE.set_enable(false);

        			this.txtDS_COACHING.set_enable(false);
        			this.txtDS_OPINION.set_enable(false);

        			this.txtDS_COACHING_A.set_enable(false);
        			this.txtDS_OPINION_A.set_enable(false);
        			this.txtDS_COACHING_B.set_enable(false);
        			this.txtDS_OPINION_B.set_enable(false);
        		}

        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "R") {	// 평가자
        			this.btnHistoryGoalEstabl.set_visible(false);
        			this.btnHistoryGoalCheck.set_visible(false);
        			this.btnHistoryGoalSelf.set_visible(false);
        			this.btnComplete.set_visible(true);
        			this.btnFinish.set_visible(true);				// 전체평가완료

        			this.btnHistoryGoalEstabl.set_enable(true);
        			this.btnHistoryGoalCheck.set_enable(true);
        			this.btnHistoryGoalSelf.set_enable(true);
        			this.btnComplete.set_enable(false);				//
        			this.btnFinish.set_enable(false);				// 전체평가완료

        			this.txtDS_COACHING.set_enable(true);
        			this.txtDS_OPINION.set_enable(true);

        			this.txtDS_COACHING_A.set_enable(false);
        			this.txtDS_OPINION_A.set_enable(false);
        			this.txtDS_COACHING_B.set_enable(false);
        			this.txtDS_OPINION_B.set_enable(false);

        			// 평가자2명인 경우(승인자/면담자)
        			if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "YN_APPLY") != "Y") {
        			if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {	// 평가자B
        					this.btnComplete.set_visible(false);			//
        					this.btnFinish.set_visible(false);				// 전체면담완료
        				}
        			}

        			// 확장버튼 숨김 처리 후 위치조정
        			this.fnButtonPosition();
        			this.btnHistoryGoalEstabl.set_visible(true);	// 이력조회
        			this.btnHistoryGoalCheck.set_visible(true);		// 이력조회
        			this.btnHistoryGoalSelf.set_visible(true);		// 이력조회
        			this.divTopBtn.form.btnGroup_업무목표이력.set_right(184);
        			if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "YN_APPLY") != "Y") {
        				if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {
        					this.divTopBtn.form.btnGroup_업무목표이력.set_right(0);	// 91 0
        				}
        			}

        			this.btnSave.set_enable(false);
        			this.btnSave.set_visible(true);

        			this.txtGRADE.set_enable(false);

        			this.txtDS_COACHING.set_enable(false);
        			this.txtDS_OPINION.set_enable(false);

        			this.txtDS_COACHING_A.set_enable(false);
        			this.txtDS_OPINION_A.set_enable(false);
        			this.txtDS_COACHING_B.set_enable(false);
        			this.txtDS_OPINION_B.set_enable(false);
        		}
        	}

        	if (this.getOwnerFrame().READ_ONLY) {
        		this.btnHistoryGoalEstabl.set_enable(false);
        		this.btnHistoryGoalCheck.set_enable(false);
        		this.btnHistoryGoalSelf.set_enable(false);
        	}

        // 	this.dsListGoalBgvdprsn.set_enableevent(false);
        // 	this.dsListGoalBgvdprsn.filter("STATUS_RTNG != 'CPLT1'");
        // 	if (this.dsListGoalBgvdprsn.rowcount == 0) {
        // 		this.btnFinish.set_enable(false);		// 전체면담완료
        // 	}
        // 	this.dsListGoalBgvdprsn.filter("");
        // 	this.dsListGoalBgvdprsn.set_enableevent(true);

        	var chk1 = false;
        	var cnt = 0;
        	for (var i = 0; i < this.dsListGoalBgvdprsn.rowcount; i++) {
        		if (this.dsListGoalBgvdprsn.getColumn(i, "STATUS_RTNG") == "UPLD"
        			|| this.dsListGoalBgvdprsn.getColumn(i, "STATUS_RTNG") == "FDBK")
        		{
        			this.btnFinish.set_enable(true);		// 전체평가완료
        		} else {
        			this.btnFinish.set_enable(false);		// 전체평가완료
        		}
        	}
        }

        this.fnSelectRsltPeedbackGrade = function() {

        	// 인사평가(평가결과피드백) 요약 정보
        	this.dsSelectRsltPeedbackSummary.clearData();
        	this.dsSelectRsltPeedbackSummary.addRow();
        	this.dsSelectRsltPeedbackSummary.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectRsltPeedbackSummary.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));
        	if (this.dsSearch.getColumn(0, "TY_PTCP") == "B") {
        		this.dsSelectRsltPeedbackSummary.setColumn(0, "ID_SABUN_BGVD", this.dsSearch.getColumn(0, "ID_SABUN"));
        		this.dsSelectRsltPeedbackSummary.setColumn(0, "ID_SABUN_ITVW", this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "ID_ITVWPRSN"));
        	}
        	if (this.dsSearch.getColumn(0, "TY_PTCP") == "R") {
        		this.dsSelectRsltPeedbackSummary.setColumn(0, "ID_SABUN_BGVD", this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "ID_SABUN"));
        		this.dsSelectRsltPeedbackSummary.setColumn(0, "ID_SABUN_ITVW", this.dsSearch.getColumn(0, "ID_SABUN"));
        	}
        	this.dsSelectRsltPeedbackSummary.setColumn(0, "TY_PTCP", this.dsSearch.getColumn(0, "TY_PTCP"));

        	// 인사평가(평가결과피드백) 인사평가 등급
        	this.dsSelectRsltPeedbackGrade.clearData();
        	this.dsSelectRsltPeedbackGrade.addRow()
        	this.dsSelectRsltPeedbackGrade.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectRsltPeedbackGrade.setColumn(0, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSelectRsltPeedbackGrade.setColumn(0, "SEQ_BGVDPRSN", this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "SEQ_BGVDPRSN"));

        	var strSvcId    = "select_rslt_peedback_grd";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_rslt_peedback_summary=dsSelectRsltPeedbackSummary select_rslt_peedback_grd=dsSelectRsltPeedbackGrade";
        	var outData     = "dsListGoalRsltFdbkSummary=select_rslt_peedback_summary0 dsListGoalRsltFdbkGrade=select_rslt_peedback_grd0";
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

        // 임시저장 버튼 클릭 이벤트
        this.btnSave_onclick = function(obj,e) {

        	if (this.dsSearch.getColumn(0, "TY_PTCP") != "B")	// 평가자
        	{
        		this.dsSaveGoalInterviewer.clearData();
        		var nrow = this.dsSaveGoalInterviewer.addRow();
        		this.dsSaveGoalInterviewer.setColumn(nrow, "TY_WRK"      , "M");
        		this.dsSaveGoalInterviewer.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsSaveGoalInterviewer.setColumn(nrow, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        		this.dsSaveGoalInterviewer.setColumn(nrow, "SEQ_BGVDPRSN", this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "SEQ_BGVDPRSN"));
        		this.dsSaveGoalInterviewer.setColumn(nrow, "SEQ_ITVWPRSN", this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "SEQ_ITVWPRSN"));

        		// 평가자2명인 경우(승인자/면담자)
        		if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "YN_APPLY") == "Y") {
        			this.dsSaveGoalInterviewer.setColumn(nrow, "DS_COACHING"     , this.txtDS_COACHING_A.text);
        			this.dsSaveGoalInterviewer.setColumn(nrow, "DS_OPINION"     , this.txtDS_OPINION_A.text);
        		} else if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {
        			this.dsSaveGoalInterviewer.setColumn(nrow, "DS_COACHING"     , this.txtDS_COACHING_B.text);
        			this.dsSaveGoalInterviewer.setColumn(nrow, "DS_OPINION"     , this.txtDS_OPINION_B.text);
        		} else {
        			this.dsSaveGoalInterviewer.setColumn(nrow, "DS_COACHING"     , this.txtDS_COACHING.text);
        			this.dsSaveGoalInterviewer.setColumn(nrow, "DS_OPINION"     , this.txtDS_OPINION.text);
        		}
        		this.dsSaveGoalInterviewer.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);
        	}

        	var strSvcId    = "save_rslt_peedback_grd";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_rslt_peedback_grd=dsSaveGoalInterviewer";
        	var outData     = "";
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


        this.fnClearSummary = function() {
        	// 업무목표 성과면담중
        	this.staITVWPRSN_ID_SABUN_bg.set_text("");		// 사번
        	this.staITVWPRSN_DS_HNAME_bg.set_text("");		// 성명
        	this.staITVWPRSN_DS_DUTY_bg.set_text("");		// 직책

        	this.staITVWPRSN_ID_SABUN_B_bg.set_text("");		// 사번
        	this.staITVWPRSN_DS_HNAME_B_bg.set_text("");		// 성명
        	this.staITVWPRSN_DS_DUTY_B_bg.set_text("");		// 직책

        	// 업무목표 면담완료
        	this.staITVWPRSN_ID_SABUN_bg.set_text("");		// 사번
        	this.staITVWPRSN_DS_HNAME_bg.set_text("");		// 성명
        	this.staITVWPRSN_DS_DUTY_bg.set_text("");		// 직책

        	this.staITVWPRSN_ID_SABUN_B_bg.set_text("");		// 사번
        	this.staITVWPRSN_DS_HNAME_B_bg.set_text("");		// 성명
        	this.staITVWPRSN_DS_DUTY_B_bg.set_text("");		// 직책
        }

        // 대상자 그리드 클릭 이벤트
        this.fnGridCellPosChanged = function(obj, e) {
        	if (e.row != -1 && e.oldrow != e.row) {
        		this.fnSelectRsltPeedbackGrade();
        	}
        }

        this.fnHistoryGoalEstabl = function() {
        	if (this.dsListGoalRsltFdbkSummary.getColumn(0, "YN_GOAL_CPLT") == "N") {
        		this.gfnAlert("업무목표 수립이 완료되지 않았습니다.");
        		return;
        	}
        	var param = {};
        	param.READ_ONLY = true;
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	this.dsListGoalHistory.filter("CD_RTNG_TYPE == 'JA10'");
        	param.ID_RTNG = this.dsListGoalHistory.getColumn(0, "ID_RTNG");
        	param.DS_RTNG = this.dsListGoalHistory.getColumn(0, "DS_RTNG");
        	param.DS_RTNG_ASBLNEXT = this.dsSearch.getColumn(0, "DS_RTNG_ASBLNEXT");
        	this.dsListGoalHistory.filter("");
        	param.TY_PTCP = 'B';
        	param.ID_SABUN = this.dsListGoalRsltFdbkSummary.getColumn(0, "ID_SABUN_BGVD");
        	param.DS_HNAME = this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_HNAME_BGVD");

        	if (param.ID_RTNG == "" || param.ID_RTNG == undefined) {
        		this.gfnAlert("업무목표 수립 대상자가 아닙니다.");
        		return;
        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAJ_RTNG_GOAL_ESTT", "", param);
        }

        this.fnHistoryGoalCheck = function() {
        	if (this.dsListGoalRsltFdbkSummary.getColumn(0, "YN_CHK_CPLT") == "N") {
        		this.gfnAlert("업무목표 중간점검이 완료되지 않았습니다.");
        		return;
        	}
        	var param = {};
        	param.READ_ONLY = true;
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	this.dsListGoalHistory.filter("CD_RTNG_TYPE == 'JA11'");
        	param.ID_RTNG = this.dsListGoalHistory.getColumn(0, "ID_RTNG");
        	param.DS_RTNG = this.dsListGoalHistory.getColumn(0, "DS_RTNG");
        	param.DS_RTNG_ASBLNEXT = this.dsSearch.getColumn(0, "DS_RTNG_ASBLNEXT");
        	this.dsListGoalHistory.filter("");
        	param.TY_PTCP = 'B';
        	param.ID_SABUN = this.dsListGoalRsltFdbkSummary.getColumn(0, "ID_SABUN_BGVD");
        	param.DS_HNAME = this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_HNAME_BGVD");

        	if (param.ID_RTNG == "" || param.ID_RTNG == undefined) {
        		this.gfnAlert("업무목표 중간점검 대상자가 아닙니다.");
        		return;
        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAJ_RTNG_GOAL_CHCK", "", param);
        }

        this.fnHistoryGoalSelf = function() {
        	if (this.dsListGoalRsltFdbkSummary.getColumn(0, "YN_SELF_CPLT") == "N") {
        		this.gfnAlert("성과 자기기술이 완료되지 않았습니다.");
        		return;
        	}
        	var param = {};
        	param.READ_ONLY = true;
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	this.dsListGoalHistory.filter("CD_RTNG_TYPE == 'JA12'");
        	param.ID_RTNG = this.dsListGoalHistory.getColumn(0, "ID_RTNG");
        	param.DS_RTNG = this.dsListGoalHistory.getColumn(0, "DS_RTNG");
        	param.DS_RTNG_ASBLNEXT = this.dsSearch.getColumn(0, "DS_RTNG_ASBLNEXT");
        	this.dsListGoalHistory.filter("");
        	param.TY_PTCP = 'B';
        	param.ID_SABUN = this.dsListGoalRsltFdbkSummary.getColumn(0, "ID_SABUN_BGVD");
        	param.DS_HNAME = this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_HNAME_BGVD");

        	if (param.ID_RTNG == "" || param.ID_RTNG == undefined) {
        		this.gfnAlert("성과 자기기술 대상자가 아닙니다.");
        		return;
        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAJ_RTNG_GOAL_SELF_DESC", "", param);
        }

        this.fnInterviewComplete = function(obj,e) {
        	var chk = false;
        	var chk2 = false;
        	var status = this.gfnGetFormStatus(this);
        	if(status == "U"){
        		this.gfnAlert("성과 Coaching 및 역량개발 의견 내용이\n임시저장되지 않았습니다.");
        		return;
        	}

        	// 평가자2명인 경우(승인자/면담자)
        	if (this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "YN_APPLY") == "Y") {
        		if (this.txtDS_COACHING_A.text.length == 0 || this.txtDS_OPINION_A.text.length == 0)
        		{
        			chk = true;
        		}

        		if (this.txtDS_COACHING_B.text.length == 0 || this.txtDS_OPINION_B.text.length == 0)
        		{
        			chk2 = true;
        		}
        	} else {
        		if (this.txtDS_COACHING.text.length == 0 || this.txtDS_OPINION.text.length == 0)
        		{
        			chk = true;
        		}
        	}

        	if (chk == true)
        	{
        		this.gfnAlert("성과 Coaching 및 역량개발 의견이\n등록되지 않아 평가완료를 할 수 없습니다.\n\n"
        					  + this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_HNAME_BGVD") + ' '
        					  + this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_POSITION_BGVD")
        					  + "의 \n성과 Coaching 및 역량개발 의견을 등록해주세요.");	//, function(strId, val) {
        			//if (val == false) {
        				return;
        			//}

        			//this.fnInterviewComplete_callback();
        		//})
        	} else if (chk2 == true)
        	{
        		this.gfnAlert(this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_HNAME_BGVD") + ' '
        					  + this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_POSITION_BGVD")
        					  + "의 \n평가자B("
        					  + this.dsListGoalRsltFdbkSummary.getColumn(1, "DS_HNAME_ITVW") + ' '
        					  + (this.dsListGoalRsltFdbkSummary.getColumn(1, "DS_DUTY_ITVW") == "" ? "님":this.dsListGoalRsltFdbkSummary.getColumn(1, "DS_DUTY_ITVW"))
        					  + ") 성과 Coaching 및 역량개발 의견이\n등록되지 않아 평가완료를 할 수 없습니다.\n\n"
        					  + "평가자B("
        					  + this.dsListGoalRsltFdbkSummary.getColumn(1, "DS_HNAME_ITVW") + ' '
        					  + (this.dsListGoalRsltFdbkSummary.getColumn(1, "DS_DUTY_ITVW") == "" ? "님":this.dsListGoalRsltFdbkSummary.getColumn(1, "DS_DUTY_ITVW"))
        					  + ") 성과 Coaching 및 역량개발 의견을\n등록해주세요.");	//, function(strId, val) {
        			//if (val == false) {
        				return;
        			//}

        			//this.fnInterviewComplete_callback();
        		//})
        	} else {
        		this.gfnConfirm(this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_HNAME_BGVD") + ' '
        					  + this.dsListGoalRsltFdbkSummary.getColumn(0, "DS_POSITION_BGVD")
        					  + "의 \n평가결과피드백을 완료하시겠습니까?", function(strId, val) {
        			if (val == false) {
        				return;
        			}

        			this.fnInterviewComplete_callback();
        		})
        	}
        }

        this.fnInterviewComplete_callback = function() {

        	this.dsComplateRsltPeedback.clearData();
        	this.dsComplateRsltPeedback.addRow();
        	this.dsComplateRsltPeedback.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsComplateRsltPeedback.setColumn(0, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsComplateRsltPeedback.setColumn(0, "SEQ_BGVDPRSN", this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "SEQ_BGVDPRSN"));
        	this.dsComplateRsltPeedback.setColumn(0, "SEQ_ITVWPRSN", this.dsListGoalRsltFdbkSummary.getColumn(this.SummaryRowcount, "SEQ_ITVWPRSN"));
        	this.dsComplateRsltPeedback.setColumn(0, "ID_USER"     , this.AuthClient.ID_USER);

        	if (this.dsComplateRsltPeedback.rowcount == 0) return;

        	var strSvcId    = "complete_rslt_peedback";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "complete_rslt_peedback=dsComplateRsltPeedback";
        	var outData     = "";
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

        this.fnFinish = function(obj,e) {

        	var status = this.gfnGetFormStatus(this);
        	if(status == "U"){
        		this.gfnAlert("성과 Coaching 및 역량개발 의견 내용이\n임시저장되지 않았습니다.");
        		return;
        	}

        	var chk1 = false;
        	var chk2 = false;
        	var target1 = "";
        	var target2 = "";
        	var cnt = 0;
        	for (var i = 0; i < this.dsListGoalBgvdprsn.rowcount; i++) {
        		if (this.dsListGoalBgvdprsn.getColumn(i, "DS_OUTC") == "" || this.dsListGoalBgvdprsn.getColumn(i, "DS_ABLTDEVOPNN") == "")
        		{
        			cnt += 1;
        			target1 += (cnt == 1 ? '' : ((cnt == 5 || cnt == 9 || cnt == 13 || cnt == 17) ? ', \n' : ', ')) + this.dsListGoalBgvdprsn.getColumn(i, "DS_HNAME") + ' ' + this.dsListGoalBgvdprsn.getColumn(i, "DS_POSITION");
        			chk1 = true;
        		}
        	}

        	if (chk1 == true)
        	{
        		this.gfnAlert("성과 Coaching 및 역량개발 의견이\n등록되지 않아 평가완료를 할 수 없습니다.\n\n"
        					  + target1
        					  + "의 \n성과 Coaching 및 역량개발 의견을 등록해주세요.");	//, function(strId, val) {
        			//if (val == false) {
        				return;
        			//}

        			//this.fnFinish_callback();
        		//})
        	}
        	else
        	{
        		this.gfnConfirm("피평가자 전체 대상자의\n평가결과피드백을 전체평가완료하시겠습니까?", function(strId, val) {
        			if (val == false) {
        				return;
        			}

        			this.fnFinish_callback();
        		})
        	}
        }

        this.fnFinish_callback = function() {

        	this.dsComplateRsltPeedback.clearData();
        	for (var i = 0; i < this.dsListGoalBgvdprsn.rowcount; i++) {
        		var nrow = this.dsComplateRsltPeedback.addRow();
        		this.dsComplateRsltPeedback.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsComplateRsltPeedback.setColumn(nrow, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        		this.dsComplateRsltPeedback.setColumn(nrow, "SEQ_BGVDPRSN", this.dsListGoalBgvdprsn.getColumn(i, "SEQ_BGVDPRSN"));
        		this.dsComplateRsltPeedback.setColumn(nrow, "SEQ_ITVWPRSN", 0);
        		this.dsComplateRsltPeedback.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);
        	}
        	if (this.dsComplateRsltPeedback.rowcount == 0) return;

        	var strSvcId    = "complete_rslt_peedback";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "complete_rslt_peedback=dsComplateRsltPeedback";
        	var outData     = "";
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

        this.fnGridValidate = function(objGrid) {
        	var objDs = objGrid.getBindDataset();

        	var msg = "";
        	var nGridCol, nGridRow = -1;
        	for (var i = 0; i < objDs.rowcount; i++) {
        		var arrRequired = objGrid.usRequired;
        		for(var j = 0; j < arrRequired.length; j++) {
        			var spl_req = arrRequired[j].split(';');
        			var colnm = spl_req[0];
        			var header = spl_req[1];
        			if (this.gfnIsNull(objDs.getColumn(i, colnm))) {
        				msg += (i + 1) + "행: [" + header + "] 필수입력값입니다.\n";

        				if (nGridRow == -1)
        				{
        					nGridRow = i;
        					nGridCol = objGrid.getBindCellIndex( 'body', colnm );
        				}
        			}
        		}
        	}

        	if(this.gfnIsNull(msg)) {
        		return true;
        	}
        	else {
        		var arrError = [msg];
        		this.gfnAlert("msg.err.validator", arrError, 'alert_validator', function(){
        			objGrid.setFocus();
        			objGrid.setCellPos(nGridCol, nGridRow);
        			objGrid.selectCell( nGridRow, nGridCol, true );
        		});
        		return false;
        	}
        }
        // 평가자 성과 Coaching 및 역량개발 의견
        this.divDataBottom_txtDS_FDBK_oninput = function(obj,e)
        {
        	this.btnSave.set_enable(true);
        	this.btnComplete.set_enable(false);
        	this.btnFinish.set_enable(false);
        };

        this.checkTarget = function() {
        	this.dsSelectRtngStd.clearData();
        	this.dsSelectRtngStd.addRow();
        	this.dsSelectRtngStd.setColumn(0, "TY_GUBUN" , "1");
        	this.dsSelectRtngStd.setColumn(0, "CN_ROW" , 1000000);
        	this.dsSelectRtngStd.setColumn(0, "VALUE" , "");
        	this.dsSelectRtngStd.setColumn(0, "MIN_VALUE" , "");
        	this.dsSelectRtngStd.setColumn(0, "CD_CORP" , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectRtngStd.setColumn(0, "YR_RTNG" , "");
        	this.dsSelectRtngStd.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelectRtngStd.setColumn(0, "CD_RTNG_TYPE", "JA13");
        	this.dsSelectRtngStd.setColumn(0, "ID_SCREEN", "DAJ_RTNG_RSLT_FDBK");
        	this.dsSelectRtngStd.setColumn(0, "CD_ROLE", this.AuthClient.CD_ROLE);

        	var strSvcId    = "select_rtng_std";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_rtng_std=dsSelectRtngStd";
        	var outData     = "dsListRtngStd=select_rtng_std0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataLeft.form.objGrid.addEventHandler("oncellposchanged",this.fnGridCellPosChanged,this);
            this.divData.form.divDataRight.addEventHandler("ondragmove",this.divData_ondragmove2,this);
            this.divData.form.divDataRight.form.divSplitter2.addEventHandler("ondrag",this.divData_divSplitter2_ondrag,this);
            this.divData.form.divDataRight.form.divDataTop.addEventHandler("ondragmove",this.divData_ondragmove2,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN.addEventHandler("onclick",this.divData_divDataRight_divDataTop_divSummary_staRTNGPRSN_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_B.addEventHandler("onclick",this.divData_divDataRight_divDataTop_divSummary_staRTNGPRSN_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_ID_SABUN.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_EMPTYPE.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_EMPTYPE_bg.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staBGVDPRSN_DS_EMPTYPE_bg_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_ID_SABUN.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_ID_SABUN_B.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_HNAME.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_DEPT.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_DS_HNAME.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_DS_HNAME_B.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_POSITION.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_DUTY.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_DS_DUTY.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_DS_DUTY_B.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_STAT_RTNG.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staITVWPRSN_STAT_RTNG_B.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.sta06.addEventHandler("onclick",this.divData_divDataRight_divDataTop_divSummary_staRTNGPRSN_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.txtDS_COACHING.addEventHandler("oninput",this.divDataBottom_txtDS_FDBK_oninput,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.sta07.addEventHandler("onclick",this.divData_divDataRight_divDataTop_divSummary_staRTNGPRSN_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.txtDS_OPINION.addEventHandler("oninput",this.divDataBottom_txtDS_FDBK_oninput,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab1.form.sta06_A.addEventHandler("onclick",this.divData_divDataRight_divDataTop_divSummary_staRTNGPRSN_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab1.form.txtDS_COACHING_A.addEventHandler("oninput",this.divDataBottom_txtDS_FDBK_oninput,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab1.form.sta07_A.addEventHandler("onclick",this.divData_divDataRight_divDataTop_divSummary_staRTNGPRSN_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab1.form.txtDS_OPINION_A.addEventHandler("oninput",this.divDataBottom_txtDS_FDBK_oninput,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab2.form.sta06_B.addEventHandler("onclick",this.divData_divDataRight_divDataTop_divSummary_staRTNGPRSN_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab2.form.txtDS_COACHING_B.addEventHandler("oninput",this.divDataBottom_txtDS_FDBK_oninput,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab2.form.sta07_B.addEventHandler("onclick",this.divData_divDataRight_divDataTop_divSummary_staRTNGPRSN_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.tabData.tab2.form.txtDS_OPINION_B.addEventHandler("oninput",this.divDataBottom_txtDS_FDBK_oninput,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional2.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_RTNG_RSLT_FDBK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
