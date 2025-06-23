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


            obj = new Dataset("dsListGoalEstablishSummary", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListGoalEstablish", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRtngStd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_RTNGPRSN_SELECT</Col></Row><Row><Col id=\"TARGET\">select_summary</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_SUMMARY_SELECT</Col></Row><Row><Col id=\"TARGET\">select_goal_bgvdprsn</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_BGVDPRSN_SELECT</Col></Row><Row><Col id=\"TARGET\">select_goal_estt_summary</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_ESTT_SUMMARY_SELECT</Col></Row><Row><Col id=\"TARGET\">select_goal_estt</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_ESTT_SELECT</Col></Row><Row><Col id=\"TARGET\">select_goal_estt_excel</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_ESTT_EXCEL_SELECT</Col></Row><Row><Col id=\"TARGET\">save_goal_estt</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_ESTT_SAVE</Col></Row><Row><Col id=\"TARGET\">submit_goal_estt</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_ESTT_SUBMIT</Col></Row><Row><Col id=\"TARGET\">save_goal_invw</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_ITVW_PRSN_SAVE</Col></Row><Row><Col id=\"TARGET\">select_goal_invw</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_ITVW_PRSN_SELECT</Col></Row><Row><Col id=\"TARGET\">request_goal_estt_modify</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_ESTT_MODIFY_REQUEST</Col></Row><Row><Col id=\"TARGET\">complete_goal_estt_interview_apply</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_ESTT_INTERVIEW_APPLY</Col></Row><Row><Col id=\"TARGET\">complete_goal_estt_interview</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_ESTT_INTERVIEW_COMPLETE</Col></Row><Row><Col id=\"TARGET\">select_rtng_std</Col><Col id=\"SP\">DAXPR_RTNG_STD_CODEFIND</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PTCP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN_RTNG_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelTitle", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelTitle2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelTitle3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelTitle4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("");
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

            obj = new Div("divSplitter","320","0","5","100%",null,null,null,null,null,null,this.divData.form);
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

            obj = new Div("divSplitter2","0","90","100%","5",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_background("#c9c9c9");
            obj.set_cursor("ns-resize");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter2:5",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_formscrolltype("none");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divStatus","0","0",null,"50","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staStatusEstablish","0","5","190","40",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divStatus.form);
            obj.set_taborder("0");
            obj.set_text("목표수립중");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Malgun Gothic\"");
            obj.set_background("#edecef");
            this.divData.form.divDataRight.form.divDataTop.form.divStatus.addChild(obj.name, obj);

            obj = new Static("staStatusInterview","staStatusEstablish:5","5","190","40",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divStatus.form);
            obj.set_taborder("1");
            obj.set_text("면담진행중");
            obj.set_textAlign("center");
            obj.set_background("#edecef");
            obj.set_font("bold 14px/normal \"Malgun Gothic\"");
            this.divData.form.divDataRight.form.divDataTop.form.divStatus.addChild(obj.name, obj);

            obj = new Static("staStatusApply","staStatusInterview:5","5","190","40",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divStatus.form);
            obj.set_taborder("2");
            obj.set_text("평가자피드백완료");
            obj.set_textAlign("center");
            obj.set_background("#edecef");
            obj.set_font("bold 14px/normal \"Malgun Gothic\"");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divStatus.addChild(obj.name, obj);

            obj = new Static("staStatusCompleted","staStatusApply:5","5","190","40",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divStatus.form);
            obj.set_taborder("3");
            obj.set_text("목표수립최종완료");
            obj.set_textAlign("center");
            obj.set_background("#edecef");
            obj.set_font("bold 14px/normal \"Malgun Gothic\"");
            this.divData.form.divDataRight.form.divDataTop.form.divStatus.addChild(obj.name, obj);

            obj = new Div("divSummaryBtns","0","divStatus:-40",null,"27","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divSummary","0","53",null,"60","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN","0","0","100","59",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("2");
            obj.set_text("피평가자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN","0","0","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
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
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_ID_SABUN_bg","staBGVDPRSN_ID_SABUN:-1","staBGVDPRSN_ID_SABUN:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_EMPTYPE","staBGVDPRSN:-1","staBGVDPRSN_ID_SABUN:-1","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("1");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_EMPTYPE_bg","staBGVDPRSN_DS_EMPTYPE:-1","staBGVDPRSN_DS_EMPTYPE:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_ID_SABUN","staITVWPRSN:-1","0","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("1");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_ID_SABUN_bg","staITVWPRSN_ID_SABUN:-1","staITVWPRSN_ID_SABUN:-30","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
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

            obj = new Static("staITVWPRSN_ID_SABUN_B_bg","staITVWPRSN_ID_SABUN_B:-1","staITVWPRSN_ID_SABUN_B:-30","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
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
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_HNAME_bg","staBGVDPRSN_DS_HNAME:-1","staBGVDPRSN_DS_HNAME:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_DEPT","staBGVDPRSN_DS_EMPTYPE_bg:-1","staBGVDPRSN_DS_EMPTYPE_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("12");
            obj.set_text("평가조직");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_DEPT_bg","staBGVDPRSN_DS_DEPT:-1","staBGVDPRSN_DS_DEPT:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_DS_HNAME","staITVWPRSN_ID_SABUN_bg:-1","staITVWPRSN_ID_SABUN_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("14");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_DS_HNAME_bg","staITVWPRSN_DS_HNAME:-1","staITVWPRSN_DS_HNAME:-30","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
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

            obj = new Static("staITVWPRSN_DS_HNAME_B_bg","staITVWPRSN_DS_HNAME_B:-1","staITVWPRSN_DS_HNAME_B:-30","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
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
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_POSITION_bg","staBGVDPRSN_DS_POSITION:-1","staBGVDPRSN_DS_POSITION:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_DUTY","staBGVDPRSN_DS_DEPT_bg:-1","staBGVDPRSN_DS_DEPT_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("20");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_DUTY_bg","staBGVDPRSN_DS_DUTY:-1","staBGVDPRSN_DS_DUTY:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_DS_DUTY","staITVWPRSN_DS_HNAME_bg:-1","staITVWPRSN_DS_HNAME_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("22");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_DS_DUTY_bg","staITVWPRSN_DS_DUTY:-1","staITVWPRSN_DS_DUTY:-30","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
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

            obj = new Static("staITVWPRSN_DS_DUTY_B_bg","staITVWPRSN_DS_DUTY_B:-1","staITVWPRSN_DS_DUTY_B:-30","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
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
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_STAT_RTNG_bg","staITVWPRSN_STAT_RTNG:-1","staITVWPRSN_STAT_RTNG:-30","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_STAT_RTNG_B","staITVWPRSN_DS_DUTY_B_bg:-1","staITVWPRSN_DS_DUTY_B_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("28");
            obj.set_text("평가상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staITVWPRSN_STAT_RTNG_B_bg","staITVWPRSN_STAT_RTNG_B:-1","staITVWPRSN_STAT_RTNG_B:-30","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Button("btnGoal_Estt_Itvw","staITVWPRSN_STAT_RTNG_bg:8","staITVWPRSN_STAT_RTNG_bg:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("0");
            obj.set_text("보직자 업무목표 조회");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter2:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_text("업무목표");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnDetail","80","0","90","27",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("5");
            obj.set_text("확대보기");
            obj.set_cssclass("btn_WF_action");
            obj.set_visible("true");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta00","100","2","300","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_text("※ 컬럼 드래그로 순서 변경가능");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnNotice",null,"0","90","27","330",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("작성 가이드");
            obj.set_cssclass("btn_WF_action");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnTarget",null,"0","110","27","215",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("전사 목표 체계");
            obj.set_cssclass("btn_WF_action");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","27","150",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnRemove",null,"0","60","27","85",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("3");
            obj.set_text(" 삭제");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","80","27","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_text("임시저장");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","120",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("3");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSubExcl","0","sta02:10",null,null,"0","120",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("3");
            obj.set_autosizingtype("none");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridTitle","0","10",null,null,"0","120",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_font("normal 10pt/normal \"Malgun Gothic\"");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridTitle2","0","10",null,null,"0","120",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("2");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridTitle3","0","10",null,null,"0","120",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("3");
            obj.set_autosizingtype("none");
            obj.set_visible("false");
            obj.set_font("normal 10pt/normal \"Malgun Gothic\"");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridTitle4","0","10",null,null,"0","120",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("4");
            obj.set_autosizingtype("none");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divAdditional","0","objGridSub:10",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta03","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form);
            obj.set_taborder("0");
            obj.set_text("평가자 피드백 총평");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.addChild(obj.name, obj);

            obj = new TextArea("txtDS_FDBK","0","sta03:10",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.addChild(obj.name, obj);

            obj = new Tab("tabData","0","sta03:10",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.tabData);
            obj.set_text("평가자A");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.tabData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_FDBK_A","0","5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.tabData);
            obj.set_text("평가자B");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.tabData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_FDBK_B","0","5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("Static00","210","165","500","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px dotted");
            this.addChild(obj.name, obj);
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
        this.registerScript("DAJ_RTNG_GOAL_ESTT.xfdl", function() {
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
        	this.btnRequest  = this.gfnFormButtonAdd("btnRequest" , "fnRequest");	// 수정요청 버튼
        	this.btnSubmit   = this.gfnFormButtonAdd("btnSubmit"  , "fnSubmit");	// 제출 버튼
        	this.btnApply 	 = this.gfnFormButtonAdd("btnApply"	  , "fnApply");		// 피드백완료 버튼(평가자2명인 경우)
        	this.btnComplete = this.gfnFormButtonAdd("btnComplete", "fnComplete");	// 개인면담완료 버튼
        	this.btnFinish 	 = this.gfnFormButtonAdd("btnFinish"  , "fnFinish");	// 일괄면담완료 버튼

        	this.btnRequest.set_visible(false);
        	this.btnApply.set_visible(false);
        	this.btnComplete.set_visible(false);
        	this.btnFinish.set_visible(false);

        	// 확장버튼 숨김 처리 후 위치조정
        	this.fnButtonPosition();
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid    = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.divDataBottom.form.objGridSub;
        	this.dxGridSubExcl = this.divData.form.divDataRight.form.divDataBottom.form.objGridSubExcl;

        	this.dxGridTitle = this.divData.form.divDataRight.form.divDataBottom.form.objGridTitle;
        	this.dxGridTitle2 = this.divData.form.divDataRight.form.divDataBottom.form.objGridTitle2;
        	this.dxGridTitle3 = this.divData.form.divDataRight.form.divDataBottom.form.objGridTitle3;
        	this.dxGridTitle4 = this.divData.form.divDataRight.form.divDataBottom.form.objGridTitle4;

        	// 검색영역
        	this.ccfCD_CORP  = this.divSearch.form.ccfCD_CORP;
        	this.ctclYR_RTNG = this.divSearch.form.ctclYR_RTNG;
        	this.ccfID_RTNG  = this.divSearch.form.ccfID_RTNG;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        	// 상태표현
        	this.staStatusEstablish = this.divData.form.divDataRight.form.divDataTop.form.divStatus.form.staStatusEstablish;	// 목표수립
        	this.staStatusInterview = this.divData.form.divDataRight.form.divDataTop.form.divStatus.form.staStatusInterview;	// 목표면담중
        	this.staStatusApply 	= this.divData.form.divDataRight.form.divDataTop.form.divStatus.form.staStatusApply;		// 피드백완료(평가자2명인경우)
        	this.staStatusCompleted = this.divData.form.divDataRight.form.divDataTop.form.divStatus.form.staStatusCompleted;	// 목표면담완료
        	this.staStatusCompleted.set_left(390);

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
        	this.btnGoal_Estt_Itvw  = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.btnGoal_Estt_Itvw;	// 보직자 업무목표 조회 버튼
        	this.btnDetail   		= this.divData.form.divDataRight.form.divDataBottom.form.btnDetail;			// 상세내역보기 버튼
        	this.btnNotice   		= this.divData.form.divDataRight.form.divDataBottom.form.btnNotice;			// 주의사항 버튼
        	this.btnTarget   		= this.divData.form.divDataRight.form.divDataBottom.form.btnTarget;			// 전사 목표 체계 버튼
        	this.btnSave   			= this.divData.form.divDataRight.form.divDataBottom.form.btnSave;			// 임시저장 버튼
        	this.btnAdd    			= this.divData.form.divDataRight.form.divDataBottom.form.btnAdd;			// 추가 버튼
        	this.btnRemove 			= this.divData.form.divDataRight.form.divDataBottom.form.btnRemove;			// 삭제 버튼

        	// 피드백
        	this.divAdditional = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional;
        	this.txtDS_FDBK = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.txtDS_FDBK;
        	this.txtDS_FDBK_A = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.tabData.tab1.form.txtDS_FDBK_A;
        	this.txtDS_FDBK_B = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.tabData.tab2.form.txtDS_FDBK_B;
        	this.tabData = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.tabData;


        	// 스플릿터
        	this.divSplitter = this.divData.form.divSplitter;
        	this.divSplitter2 = this.divData.form.divDataRight.form.divSplitter2;

        	this.sta00 = this.divData.form.divDataRight.form.divDataBottom.form.sta00;		// 안내문구
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsListGoalBgvdprsn, "DA", "DAJ_RTNG_GOAL_BGVDPRSN");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        	this.gfnGridInit(this.dxGridSub, this.dsListGoalEstablish, "DA", "DAJ_RTNG_GOAL_ESTT");
        	this.gfnGridInit(this.dxGridSubExcl, this.dsExcel, "DA", "DAJ_RTNG_GOAL_ESTT_EXCL");
        	this.gfnGridInit(this.dxGridTitle, this.dsExcelTitle, "DA", "DAJ_EXCL"); //엑셀타이틀
         	this.gfnGridInit(this.dxGridTitle2, this.dsExcelTitle2, "DA", "DAJ_EXCL2"); //엑셀타이틀
         	this.gfnGridInit(this.dxGridTitle3, this.dsExcelTitle3, "DA", "DAJ_EXCL3"); //엑셀타이틀
         	this.gfnGridInit(this.dxGridTitle4, this.dsExcelTitle4, "DA", "DAJ_EXCL4"); //엑셀타이틀

        	this.dxGridTitle.deleteContentsCol("head",0);
        	this.dxGridTitle2.deleteContentsCol("head",0);
        	this.dxGridTitle3.deleteContentsCol("head",0);
        	this.dxGridTitle4.deleteContentsCol("head",0);
        	this.dxGridSubExcl.deleteContentsCol("head",0);

        	this.dxGridSub.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGridSub.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        	this.dxGridSub.EnterCell = "fnGridEnterCell";
        	this.dxGridSub.AfterEdit = "fnGridAfterEdit";
        	this.dxGridSub.setFormatRowProperty(0, "size", 30);
        	this.dxGridSub.setFormatRowProperty(1, "size", 38);
        	//this.dxGridSub.addEventHandler("ondrag", this.dxGridSub_ondrag, this);
        	//this.dxGridSub.addEventHandler("ondrop", this.dxGridSub_ondrop, this);

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_RTNG.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 평가기준
        	this.ccfID_RTNG.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 성명
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	//tooltiptext
        	var colDS_GOAL_WRK = this.dxGridSub.getBindCellIndex("body", "DS_GOAL_WRK");
        	var colDS_EXEC_PLN_HGHYR = this.dxGridSub.getBindCellIndex("body", "DS_EXEC_PLN_HGHYR");
        	var colDS_EXEC_PLN_LOWHYR = this.dxGridSub.getBindCellIndex("body", "DS_EXEC_PLN_LOWHYR");
        	var colDS_GOAL_LVL_MIN = this.dxGridSub.getBindCellIndex("body", "DS_GOAL_LVL_MIN");
        	var colDS_GOAL_LVL_MAX = this.dxGridSub.getBindCellIndex("body", "DS_GOAL_LVL_MAX");
        	var colDS_MNPT_ADMN = this.dxGridSub.getBindCellIndex("body", "DS_MNPT_ADMN");
        	var colNO_WGTV = this.dxGridSub.getBindCellIndex("body", "NO_WGTV");
        	var colDS_RMK = this.dxGridSub.getBindCellIndex("body", "DS_RMK");
        	this.dxGridSub.setCellProperty("body",colDS_GOAL_WRK,"tooltiptext","bind:TTP_DS_GOAL_WRK");
        	this.dxGridSub.setCellProperty("body",colDS_EXEC_PLN_HGHYR,"tooltiptext","bind:TTP_DS_EXEC_PLN_HGHYR");
        	this.dxGridSub.setCellProperty("body",colDS_EXEC_PLN_LOWHYR,"tooltiptext","bind:TTP_DS_EXEC_PLN_LOWHYR");
        	this.dxGridSub.setCellProperty("body",colDS_GOAL_LVL_MIN,"tooltiptext","bind:TTP_DS_GOAL_LVL_MIN");
        	this.dxGridSub.setCellProperty("body",colDS_GOAL_LVL_MAX,"tooltiptext","bind:TTP_DS_GOAL_LVL_MAX");
        	this.dxGridSub.setCellProperty("body",colDS_MNPT_ADMN,"tooltiptext","bind:TTP_DS_MNPT_ADMN");
        	this.dxGridSub.setCellProperty("body",colNO_WGTV,"tooltiptext","bind:TTP_NO_WGTV");
        	this.dxGridSub.setCellProperty("body",colDS_RMK,"tooltiptext","bind:TTP_DS_RMK");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 업무목표수립 대상자 조회
        	this.dsSelectGoalBgcdprsn = new Dataset();
        	this.dsSelectGoalBgcdprsn.addColumn("CD_CORP", "string");
        	this.dsSelectGoalBgcdprsn.addColumn("ID_RTNG", "string");
        	this.dsSelectGoalBgcdprsn.addColumn("TY_PTCP", "string");
        	this.dsSelectGoalBgcdprsn.addColumn("ID_SABUN", "string");

        	// 업무목표수립 요약 조회
        	this.dsSelectGoaleEsttSummary = new Dataset();
        	this.dsSelectGoaleEsttSummary.addColumn("CD_CORP", "string");
        	this.dsSelectGoaleEsttSummary.addColumn("ID_RTNG", "string");
        	this.dsSelectGoaleEsttSummary.addColumn("ID_SABUN_BGVD", "string");
        	this.dsSelectGoaleEsttSummary.addColumn("ID_SABUN_ITVW", "string");
        	this.dsSelectGoaleEsttSummary.addColumn("TY_PTCP", "string");

        	// 업무목표수립 조회
        	this.dsSelectGoalEstablish = new Dataset();
        	this.dsSelectGoalEstablish.addColumn("CD_CORP", "string");
        	this.dsSelectGoalEstablish.addColumn("ID_RTNG", "string");
        	this.dsSelectGoalEstablish.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSelectGoalEstablish.addColumn("ID_ITVWPRSN", "string");
        	this.dsSelectGoalEstablish.addColumn("TY_PTCP", "string");

        	// 업무목표수립 저장
        	this.dsSaveGoalEstablish = new Dataset();
        	this.dsSaveGoalEstablish.addColumn("TY_WRK", "string");
        	this.dsSaveGoalEstablish.addColumn("CD_CORP", "string");
        	this.dsSaveGoalEstablish.addColumn("ID_RTNG", "string");
        	this.dsSaveGoalEstablish.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSaveGoalEstablish.addColumn("SEQ_GOAL", "int");
        	this.dsSaveGoalEstablish.addColumn("NO_COL", "int");
        	this.dsSaveGoalEstablish.addColumn("DS_GOAL_WRK", "string");
        	this.dsSaveGoalEstablish.addColumn("DS_EXEC_PLN_HGHYR", "string");
        	this.dsSaveGoalEstablish.addColumn("DS_EXEC_PLN_LOWHYR", "string");
        	this.dsSaveGoalEstablish.addColumn("DS_GOAL_LVL_MIN", "string");
        	this.dsSaveGoalEstablish.addColumn("DS_GOAL_LVL_MAX", "string");
        	this.dsSaveGoalEstablish.addColumn("DS_MNPT_ADMN", "string");
        	this.dsSaveGoalEstablish.addColumn("NO_WGTV", "string");
        	this.dsSaveGoalEstablish.addColumn("DS_RMK", "string");
        	this.dsSaveGoalEstablish.addColumn("DS_FDBK", "string");
        	this.dsSaveGoalEstablish.addColumn("ID_USER", "string");
        	this.dsSaveGoalEstablish.addColumn("TY_PTCP", "string");

        	// 업무목표수립 제출
        	this.dsSaveGoalEstablishSubmit = new Dataset();
        	this.dsSaveGoalEstablishSubmit.addColumn("CD_CORP", "string");
        	this.dsSaveGoalEstablishSubmit.addColumn("ID_RTNG", "string");
        	this.dsSaveGoalEstablishSubmit.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSaveGoalEstablishSubmit.addColumn("ID_USER", "string");

        	// 업무목표수립 피드백 저장
        	this.dsSaveGoalInterviewer = new Dataset();
        	this.dsSaveGoalInterviewer.addColumn("TY_WRK", "string");
        	this.dsSaveGoalInterviewer.addColumn("CD_CORP", "string");
        	this.dsSaveGoalInterviewer.addColumn("ID_RTNG", "string");
        	this.dsSaveGoalInterviewer.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSaveGoalInterviewer.addColumn("SEQ_ITVWPRSN", "int");
        	this.dsSaveGoalInterviewer.addColumn("CL_ITVWPRSN", "string");
        	this.dsSaveGoalInterviewer.addColumn("ID_ITVWPRSN", "string");
        	this.dsSaveGoalInterviewer.addColumn("STAT_RTNG", "string");
        	this.dsSaveGoalInterviewer.addColumn("DS_FDBK", "string");
        	this.dsSaveGoalInterviewer.addColumn("ID_USER", "string");

        	// 업무목표수립 수정 요청
        	this.dsSaveGoalEstablishModifyRequest = new Dataset();
        	this.dsSaveGoalEstablishModifyRequest.addColumn("CD_CORP", "string");
        	this.dsSaveGoalEstablishModifyRequest.addColumn("ID_RTNG", "string");
        	this.dsSaveGoalEstablishModifyRequest.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSaveGoalEstablishModifyRequest.addColumn("ID_USER", "string");

        	// 업무목표수립 면담 완료
        	this.dsSaveGoalEstablishInterviewComplete = new Dataset();
        	this.dsSaveGoalEstablishInterviewComplete.addColumn("CD_CORP", "string");
        	this.dsSaveGoalEstablishInterviewComplete.addColumn("ID_RTNG", "string");
        	this.dsSaveGoalEstablishInterviewComplete.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSaveGoalEstablishInterviewComplete.addColumn("SEQ_ITVWPRSN", "int");
        	this.dsSaveGoalEstablishInterviewComplete.addColumn("ID_USER", "string");

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
        		this.dsSearch.setColumn(0, "DS_RTNG_ASBLNEXT",  this.getOwnerFrame().DS_RTNG_ASBLNEXT);

        		this.ccfID_RTNG.set_enable(false);
        		this.divSplitter.set_left(0);
        		this.divData_ondragmove(null, {
        			userdata: "splitter",
        			clientx: 0,
        		});
        		this.divSplitter2.set_top(50);
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

        // 	if(this.FormInfo.GR_SEARCH == 1) {
        //  		this.ccfID_SABUN.set_enable(true);
        // 	}
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

        	var strSvcId    = "select_goal_bgvdprsn";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_goal_bgvdprsn=dsSelectGoalBgcdprsn";
        	var outData     = "dsListGoalBgvdprsn=select_goal_bgvdprsn0";
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
        	//this.gfnExcelExport(this.dxGridSub);
        	this.fnExcelExportTest(this.dxGridSubExcl, "업무목표수립", "업무목표수립");
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
        	var objDs = objGridExcel.getBindDataset();
        	if(objGridExcel.yn_filter == "Y") {
        		objDs.set_enableevent(false);
        		objDs.deleteRow(0);
        		objDs.set_enableevent(true);
        	}

        	this.setWaitCursor(true);

        	var objGrid_excel = objGridExcel;

        	var regExp = /[?*:\/\[\]]/g;  				//(엑셀에서 지원하지않는 모든 문자)

        	//fileName nullcheck
        	sFileName = this.gfnIsNull(sFileName) ? this.gfnGetArgument("NM_FORM")+"_"+this.gfnGetDate() : sFileName;
        	//sheetName nullcheck
        	sSheetName = this.gfnIsNull(sSheetName) ? "sheet1" : sSheetName;

        	sFileName = sFileName.replace(regExp,"");	//파일명에 특수문자 제거
        	sSheetName = sSheetName.replace(regExp,""); //시트명에 특수문자 제거

        	//sheetName 30이상일경우 기본시트명
        	if( String(sSheetName).length > 30 ){
        		sSheetName =  "sheet1";
        	}

        	var _contextPath = nexacro.getEnvironmentVariable("evContextPath");
        	if (!this.gfnIsNull(_contextPath)) {
        		_contextPath = _contextPath.substr(1, _contextPath.length - 1);
        		svcUrl = "svcUrl::" + _contextPath + "XExportImport.do";
        	}

        	this.objExport = null;
        	this.objExport = new ExcelExportObject();

        	this.objExport.objgrid = objGrid_excel;
        	//this.objExport.set_exporttype(nexacro.ExportTypes.EXCEL2007); //eykim
        	this.objExport.set_exporturl(svcUrl);

         	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.dxGridTitle, sSheetName+"!A1","nohead","allrecord","nosuppress","allstyle","none","","both");
         	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.dxGridTitle2, sSheetName+"!A2","nohead","allrecord","nosuppress","allstyle","none","","both");

         	//this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.dxGridTitle3, sSheetName+"!A5","nohead","allrecord","nosuppress","allstyle","none","","both");
        	var rowCnt2 = this.dsExcelTitle2.rowcount;
        	rowCnt2 = 3 + rowCnt2;
        	var rowCnt3 = rowCnt2 + 1;
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.dxGridTitle3, sSheetName+"!A"+rowCnt2);
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, sSheetName+"!A"+rowCnt3);
        	//this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, sSheetName+"!A1","allband","allrecord","suppress","allstyle","none","","both");

        	var rowCnt4 = this.dsExcel.rowcount;
        	rowCnt4 = rowCnt3 + rowCnt4 + 1;
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.dxGridTitle4, sSheetName+"!A"+rowCnt4);


        	this.objExport.set_exportfilename(sFileName);

         	this.objExport.set_exporteventtype("itemrecord");
         	this.objExport.set_exportuitype("none");
         	this.objExport.set_exportmessageprocess("");
        	this.objExport.addEventHandler("onsuccess", this.gfnExportOnsuccess, this);
        	this.objExport.addEventHandler("onerror", this.gfnExportOnerror, this);

        	var result = this.objExport.exportData();
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
        	// 업무목표수립 대상자 조회
        	if (svcID == "select_goal_bgvdprsn") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnClearSummary();
        		this.gfnGridClear(this.dxGridSub);
        		this.gfnGridClear(this.dxGridSubExcl);
        		this.gfnGridClear(this.dxGridTitle);
        		this.gfnGridClear(this.dxGridTitle2);
        		this.gfnGridClear(this.dxGridTitle3);
        		this.gfnGridClear(this.dxGridTitle4);

        		if (this.dsListGoalBgvdprsn.rowcount == 0) {
        			this.btnSubmit.set_enable(false);
        		}
        	}
        	// 업무목표수립 조회
        	else if (svcID == "select_goal_estt") {
        		var items = ['DS_GOAL_WRK', 'DS_EXEC_PLN_HGHYR', 'DS_EXEC_PLN_LOWHYR', 'DS_GOAL_LVL_MIN', 'DS_GOAL_LVL_MAX', 'DS_MNPT_ADMN', 'DS_FDBK'];
        		var list = [];
        		for (var i = 0; i < this.dsListGoalEstablish.rowcount; i++) {
        			var max = 0;
        			for (var j = 0; j < items.length; j++) {
        				var item = this.dsListGoalEstablish.getColumn(i, items[j]);
        				var line = item.split("\n").length;
        				if (line > max) {
        					max = line;
        				}
        			}
        			list.push(max);
        		}

        // 		for (var i = 0; i < list.length; i++) {
        // 			if (list[i] == 2) {
        // 				this.dxGridSub.setRealRowSize(i, 40);
        // 			} else if (list[i] == 3 ) {
        // 				this.dxGridSub.setRealRowSize(i, 55);
        // 			} else if (list[i] == 4) {
        // 				this.dxGridSub.setRealRowSize(i, 70);
        // 			} else if (list[i] == 5) {
        // 				this.dxGridSub.setRealRowSize(i, 85);
        // 			} else if (list[i] > 5) {
        // 				this.dxGridSub.setRealRowSize(i, 100);
        // 			}
        // 		}
        		for (var i = 0; i < list.length; i++) {
        			this.dxGridTitle3.setRealRowSize(i, 40);
        		}

        		//this.dxGridTitle3.mergeContentsCell("body",0,2,0,5,2,false);

        		//this.dxGrid.set_autofittype("col");
        		this.dxGridSub.set_autofittype("col");	// col
        		this.dxGridSub.set_autosizingtype("row");
        		this.dxGridTitle3.set_autofittype("col");	// col
        		this.dxGridTitle3.set_autosizingtype("row");
        // 		this.dxGridTitle4.set_autofittype("col");	// col
        // 		this.dxGridTitle4.set_autosizingtype("row");
        		this.dxGridSubExcl.set_autofittype("col");	// col
        		this.dxGridSubExcl.set_autosizingtype("row");

        		// 대상자
        		this.staBGVDPRSN_ID_SABUN_bg.set_text(this.dsListGoalEstablishSummary.getColumn(0, "ID_SABUN_BGVD"));		// 사번
        		this.staBGVDPRSN_DS_HNAME_bg.set_text(this.dsListGoalEstablishSummary.getColumn(0, "DS_HNAME_BGVD"));		// 성명
        		this.staBGVDPRSN_DS_POSITION_bg.set_text(this.dsListGoalEstablishSummary.getColumn(0, "DS_POSITION_BGVD"));	// 직급
        		this.staBGVDPRSN_DS_EMPTYPE_bg.set_text(this.dsListGoalEstablishSummary.getColumn(0, "DS_EMPTYPE_BGVD"));	// 직종
        		this.staBGVDPRSN_DS_DEPT_bg.set_text(this.dsListGoalEstablishSummary.getColumn(0, "DS_DEPT_BGVD"));			// 평가조직
        		this.staBGVDPRSN_DS_DUTY_bg.set_text(this.dsListGoalEstablishSummary.getColumn(0, "DS_DUTY_BGVD"));			// 직책

        		// 면담자
        		this.staITVWPRSN_ID_SABUN_bg.set_text(this.dsListGoalEstablishSummary.getColumn(0, "ID_SABUN_ITVW"));		// 사번
        		this.staITVWPRSN_DS_HNAME_bg.set_text(this.dsListGoalEstablishSummary.getColumn(0, "DS_HNAME_ITVW"));		// 성명
        		//this.staITVWPRSN_DS_POSITION_bg.set_text(this.dsListGoalEstablishSummary.getColumn(0, "DS_POSITION_ITVW"));	// 직급
        		//this.staITVWPRSN_DS_EMPTYPE_bg.set_text(this.dsListGoalEstablishSummary.getColumn(0, "DS_EMPTYPE_ITVW")); 	// 직종
        		//this.staITVWPRSN_DS_DEPT_bg.set_text(this.dsListGoalEstablishSummary.getColumn(0, "DS_DEPT_ITVW"));			// 평가조직
        		this.staITVWPRSN_DS_DUTY_bg.set_text(this.dsListGoalEstablishSummary.getColumn(0, "DS_DUTY_ITVW"));			// 직책
        		this.staITVWPRSN_STAT_RTNG_bg.set_text(this.dsListGoalEstablishSummary.getColumn(0, "DS_STAT_RTNG"));			// 평가상태

        		this.staITVWPRSN_ID_SABUN_B_bg.set_text(this.dsListGoalEstablishSummary.getColumn(1, "ID_SABUN_ITVW"));		// 사번
        		this.staITVWPRSN_DS_HNAME_B_bg.set_text(this.dsListGoalEstablishSummary.getColumn(1, "DS_HNAME_ITVW"));		// 성명
        		this.staITVWPRSN_DS_DUTY_B_bg.set_text(this.dsListGoalEstablishSummary.getColumn(1, "DS_DUTY_ITVW"));		// 직책
        		this.staITVWPRSN_STAT_RTNG_B_bg.set_text(this.dsListGoalEstablishSummary.getColumn(1, "DS_STAT_RTNG"));		// 평가상태

        		// 평가자2명인 경우(승인자/면담자)
        		this.ID_SABUN_ITVW  = this.dsListGoalEstablishSummary.getColumn(0, "ID_SABUN_ITVW");
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

        		// 피드백
        		this.txtDS_FDBK.set_value(this.dsListGoalEstablishSummary.getColumn(this.dsListGoalEstablishSummary.rowposition, "DS_FDBK"));
        		this.txtDS_FDBK_A.set_value(this.dsListGoalEstablishSummary.getColumn(this.dsListGoalEstablishSummary.rowposition, "DS_FDBK_A"));
        		this.txtDS_FDBK_B.set_value(this.dsListGoalEstablishSummary.getColumn(this.dsListGoalEstablishSummary.rowposition, "DS_FDBK_B"));

        		if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "STAT_RTNG") == "ESTT" && this.dsSearch.getColumn(0, "TY_PTCP") == "B") {
        			var nrow = this.dsListGoalEstablish.rowcount;
        			this.dxGridSub.setCellPos(0, nrow-1);
        		}

        	}
        	// 업무목표수립 저장
        	else if (svcID == "save_goal_estt") {
        		this.fnSelectGoalEstablish();
         		this.gfnSetFormStatus(this);	// 폼상태 초기화
         		this.btnSave.set_enable(false);
        //		this.FormBtns.Select.click();
        	}
        	// 업무목표수립 제출
        	else if (svcID == "submit_goal_estt") {
        //		this.fnSelectGoalEstablish();
        		this.FormBtns.Select.click();
        	}
        	// 업무목표수립 수정 요청
        	else if (svcID == "request_goal_estt_modify") {
        //		this.fnSelectGoalEstablish();
        		this.FormBtns.Select.click();
        	}
        	// 업무목표수립 면담 완료
        	else if (svcID == "complete_goal_estt_interview") {
        //		this.fnSelectGoalEstablish();
        		this.FormBtns.Select.click();
        	}
        	// 업무목표수립 면담 최종피드백완료(평가자2명인경우)
        	else if (svcID == "complete_goal_estt_interview_apply") {
        //		this.fnSelectGoalEstablish();
        		this.FormBtns.Select.click();
        	}
        	// 평가대상자 존재 여부에 따른 화면 제어
        	else if (svcID == "select_rtng_std") {

        // 		var ds_param = this.FormInfo.DS_PARAM;
        // 		var seq = 0;
        //
        // 		if(this.FormInfo.DS_PARAM == "B") seq = 0;	// 피평가자
        // 		if(this.FormInfo.DS_PARAM == "R") seq = 1;	// 평가자

        		if (this.dsListRtngStd.rowcount == 1) {
        			this.dsSearch.setColumn(0, "ID_RTNG", this.dsListRtngStd.getColumn(0, "CD_RTNG"));
        			this.dsSearch.setColumn(0, "DS_RTNG", this.dsListRtngStd.getColumn(0, "DS_RTNG"));
        			this.dsSearch.setColumn(0, "TY_PTCP", this.dsListRtngStd.getColumn(0, "TY_PTCP"));
        			this.dsSearch.setColumn(0, "CD_RTNG_ASBLNEXT", this.dsListRtngStd.getColumn(0, "CD_RTNG_ASBLNEXT"));
        			this.dsSearch.setColumn(0, "DS_RTNG_ASBLNEXT", this.dsListRtngStd.getColumn(0, "DS_RTNG_ASBLNEXT"));
        			this.FormBtns.Select.click();
        		}
        	}
        }

        this.fnCheckExtensionButtonStatus = function() {
        	// 피평가자의 종합상태
        	var STATUS_RTNG  = this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "STATUS_RTNG");
        	// 평가자2명인 경우(승인자/면담자)
        	var YN_APPLY  = this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "YN_APPLY");
        	var CL_ITVWPRSN  = this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN");
        	this.staStatusApply.set_visible(false);
        	this.staStatusCompleted.set_left(390); // 585

         	// 목표수립
        	var YN_GOAL_ESTT  = this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "YN_GOAL_ESTT");
        	this.staStatusEstablish.set_background("#edecef");
        	this.staStatusEstablish.set_color("black");

        	//if (YN_GOAL_ESTT == "Y") {
        	if (STATUS_RTNG == "20" || STATUS_RTNG == "ESTT") {
        		this.staStatusEstablish.set_background("lightgray");
        		this.staStatusEstablish.set_color("red");
        		this.staStatusInterview.set_background("#edecef");
        		this.staStatusInterview.set_color("black");
        		this.staStatusCompleted.set_background("#edecef");
        		this.staStatusCompleted.set_color("black");

        		this.btnGoal_Estt_Itvw.set_enable(true);
        		this.btnDetail.set_enable(true);
        		this.btnNotice.set_enable(true);
        		this.btnTarget.set_enable(true);
        		this.btnSave.set_enable(false); // true
        		this.btnAdd.set_enable(true);
        		this.btnRemove.set_enable(true);

        		// 피드백 단계 빼기
        // 		if (YN_APPLY == "Y" || CL_ITVWPRSN == "01") {
        // 			this.staStatusApply.set_visible(true);
        // 			this.staStatusApply.set_background("#edecef");
        // 			this.staStatusApply.set_color("black");
        // 			this.staStatusCompleted.set_left(585); // 390
        // 		}
        	}

        	// 목표면담중
        	var YN_GOAL_ITVW = this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "YN_GOAL_ITVW");
        	this.staStatusInterview.set_background("#edecef");
        	this.staStatusInterview.set_color("black");
        	//if (YN_GOAL_ITVW == "Y") {
        	if (STATUS_RTNG == "ITVW") {
        		this.staStatusEstablish.set_background("#edecef");
        		this.staStatusEstablish.set_color("black");
        		this.staStatusInterview.set_background("lightgray");
        		this.staStatusInterview.set_color("red");
        		this.staStatusCompleted.set_background("#edecef");
        		this.staStatusCompleted.set_color("black");

        		// 피드백 단계 빼기
        // 		if (YN_APPLY == "Y" || CL_ITVWPRSN == "01") {
        // 			this.staStatusApply.set_visible(true);
        // 			this.staStatusApply.set_background("#edecef");
        // 			this.staStatusApply.set_color("black");
        // 			this.staStatusCompleted.set_left(585); // 390
        // 		}
        	}

        	// 승인대기(평가자 2명인 경우)
        	this.staStatusApply.set_background("#edecef");
        	this.staStatusApply.set_color("black");
        	if (STATUS_RTNG == "APPL") {
        		this.staStatusEstablish.set_background("#edecef");
        		this.staStatusEstablish.set_color("black");
        		this.staStatusInterview.set_background("#edecef");
        		this.staStatusInterview.set_color("black");
        		this.staStatusCompleted.set_background("#edecef");
        		this.staStatusCompleted.set_color("black");
        		this.staStatusApply.set_background("lightgray");
        		this.staStatusApply.set_color("red");

        		// 피드백 단계 빼기
        // 		if (YN_APPLY == "Y" || CL_ITVWPRSN == "01") {
        // 			this.staStatusApply.set_visible(true);
        // 			//this.staStatusApply.set_background("#edecef");
        // 			//this.staStatusApply.set_color("black");
        // 			this.staStatusCompleted.set_left(585); // 390
        // 		}
        	}

        	// 목표면담완료
        	var YN_GOAL_CPLT = this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "YN_GOAL_CPLT");
        	this.staStatusCompleted.set_background("#edecef");
        	this.staStatusCompleted.set_color("black");
        	//if (YN_GOAL_CPLT == "Y") {
        	if (STATUS_RTNG == "CPLT1") {
        		this.staStatusEstablish.set_background("#edecef");
        		this.staStatusEstablish.set_color("black");
        		this.staStatusInterview.set_background("#edecef");
        		this.staStatusInterview.set_color("black");
        		this.staStatusCompleted.set_background("lightgray");
        		this.staStatusCompleted.set_color("red");

        		// 피드백 단계 빼기
        // 		if (YN_APPLY == "Y" || CL_ITVWPRSN == "01") {
        // 			this.staStatusApply.set_visible(true);
        // 			this.staStatusApply.set_background("#edecef");
        // 			this.staStatusApply.set_color("black");
        // 			this.staStatusCompleted.set_left(585); // 390
        // 		}
        	}

        	this.txtDS_FDBK.set_visible(true);
        	this.tabData.set_visible(false);
        	this.dxGridSub.set_bottom(120);
        	this.divAdditional.set_top("objGridSub:10");
        	this.divSplitter2.set_top(50);
        	this.divData_ondragmove2(null, {
        		userdata: "splitter2",
        		clientx: 0,
        	});

        	if ((YN_APPLY == "Y" || CL_ITVWPRSN == "01") || ( YN_APPLY == "Y" && CL_ITVWPRSN == "00")) {
        		this.txtDS_FDBK.set_visible(false);
        		this.tabData.set_visible(true);
        		if (YN_APPLY == "Y") {
        			this.tabData.set_tabindex(0);
        		} else if (CL_ITVWPRSN == "01") {
        			this.tabData.set_tabindex(1);
        		}
        		this.dxGridSub.set_bottom(158);
        		this.divAdditional.set_top("objGridSub:10");

        		this.divSplitter2.set_top(120);
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
        		this.staITVWPRSN_STAT_RTNG_B.set_visible(true);
        		this.staITVWPRSN_STAT_RTNG_B_bg.set_visible(true);
        	} else {
        		this.divSplitter2.set_top(90);
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
        		this.staITVWPRSN_STAT_RTNG_B.set_visible(false);
        		this.staITVWPRSN_STAT_RTNG_B_bg.set_visible(false);
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
        		dsUserParam.setColumn(nrow, "CD_RTNG_TYPE", "JA10");
        		dsUserParam.setColumn(nrow, "ID_SCREEN"   , "DAJ_RTNG_GOAL_ESTT");
        		dsUserParam.setColumn(nrow, "CD_ROLE"     , this.AuthClient.CD_ROLE);
        	} else if (id == "ccfID_SABUN") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			this.gfnAlert("법인을 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP"	, this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"	, this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	, this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP"	, "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE"	, "%");   // 재직구분
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
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
        				clientx: 320,
        			});
        		}
        		this.sta00.set_visible(false);
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

        this.fnGridEnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub, cell);

        	this.fnEnableButton();
        }


        this.fnGridAfterEdit = function(obj, e) {
        console.log('fnGridAfterEdit', e);
        	if (e.columnid == "NO_COL") {	// 순번
        		if (e.oldvalue != e.newvalue) {
        			var oldRow = e.row;
        			var oldNO_COL = e.oldvalue;
        			var newNO_COL = e.newvalue;
        			var newRow = oldRow;
        			for (var i = 0; i < obj.rowcount; i++) {
        				if (oldRow == i) continue;
        				var no_col = obj.getColumn(i, "NO_COL");
        				if (no_col == newNO_COL && newNO_COL == 1) {
        					newRow = 0;
        					break;
        				} else if (no_col < newNO_COL) {
        					newRow = i + (oldNO_COL > newNO_COL ? 1 : 0);
        				}
        			}
        			if (newRow >= obj.rowcount) newRow -= 1;

        			obj.moveRow(oldRow, newRow);
        			this.dxGridSub.setCellPos(0, newRow);

        			var no_col = newNO_COL;
        			this.dsListGoalEstablish.set_enableevent(false);
        			for (var i = newRow; i < this.dsListGoalEstablish.rowcount; i++) {
        				var flag = this.gfnGetFlag(this.dsListGoalEstablish, i);
        				var oldNO_COL = this.dsListGoalEstablish.getColumn(i, "NO_COL");
        				if (no_col != oldNO_COL) {
        					if (flag != "I" && flag != "D") {
        						this.dsListGoalEstablish.setColumn(i, this.ucFlag, "U");
        					}
        					this.dsListGoalEstablish.setColumn(i, "NO_COL", no_col);
        				}
        				no_col++;
        			}
        			this.dsListGoalEstablish.set_enableevent(true);
        		}
        	}
        	//this.btnSave.set_enable(true);
        	this.gfnSetFormStatus(this, "U");
        }

        this.getNextNoCol = function() {
        	var MAX = 0;
        	for (var i = 0; i < this.dsListGoalEstablish.rowcount; i++) {
        		if (this.dsListGoalEstablish.getColumn(i, "NO_COL") > MAX) {
        			MAX = this.dsListGoalEstablish.getColumn(i, "NO_COL");
        		}
        	}
        	return MAX + 1;
        }

        /************************************************************************
         * 로우 drag&drop 순번 정렬
         ************************************************************************/
        this.form_ondragmove = function(obj,e)
        {
        	this.DragTextMove(obj, e);
        };

        this.dxGridSub_ondrag = function(obj, e)
        {
        	if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "STAT_RTNG") != "ESTT") {
        		return false;
        	}

        	if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "STAT_RTNG") == "ESTT" && this.dsSearch.getColumn(0, "TY_PTCP") != "B") {
        		return false;
        	}

        	if(e.row < 0 || obj._showEditing)
        	{
        		return false;
        	}

        //	this.dxGridSub.set_selecttype("cell");

        	sTextDragData = [];
        	sTextDragData.push(obj.getCellValue(e.row, obj.getBindCellIndex("body", "NO_COL")));
        	sTextDragData.push(obj.getCellValue(e.row, obj.getBindCellIndex("body", "DS_GOAL_WRK")));

        	var cell_rect = obj.getCellRect(e.row, e.cell);
        	this.Static00.set_left(cell_rect.left);
        	this.Static00.set_top(cell_rect.top);
        	//this.Static00.set_width(cell_rect.width);
        	this.Static00.set_height(cell_rect.height);
        	this.Static00.set_text(sTextDragData.join("     "));
        	this.Static00.set_tooltiptext(e.row);

        	// 드래그가 민감해서 시간차 보이기
        	this.gfnSetTimer(this, function() {
        		if(this.IsDrag == true) {
        			this.Static00.set_visible(true);
        		}
        	}, 300);
        	return true;
        };

        this.DragTextMove = function(obj, e)
        {
        	this.IsDrag = true;
            //if( this.Static00.visible == true )
            {
        		if(e.fromobject.name == "objGridSub" || e.fromobject.name == "Static00") {
        			this.Static00.move(e.clientx+5, e.clienty-5);
        		}
            }
        };

        this.dxGridSub_ondrop = function(obj,e)
        {
        //	this.dxGridSub.set_selecttype("multiarea");
        	trace("multiarea");
        	this.IsDrag = false;
        	if( this.Static00.visible == true )
        	{
        		this.Static00.set_visible(false);
        		if(e.row < 0) return false;
        		var dragRow = this.Static00.tooltiptext;
        		var objDs = obj.getBindDataset();
        		var oldRow = dragRow;
        		var newRow = e.row;
        		var minRow = 0;
        		if (dragRow > e.row) {
        			minRow = newRow;
        		} else {
        			minRow = oldRow;
        		}
        		var no_col = nexacro.toNumber(obj.getCellValue(minRow, obj.getBindCellIndex("body", "NO_COL")));

        		objDs.moveRow(oldRow, newRow);
        		for(var i = minRow; i < obj.rowcount; i++) {
        			objDs.setColumn(i, "NO_COL", no_col++);
        		}
        	}
        };

        this.form_ondrop = function(obj,e)
        {
        	this.IsDrag = false;
        	this.Static00.set_visible(false);
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj, e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        		this.gfnGridClear(this.dxGridSubExcl);
        		this.gfnGridClear(this.dxGridTitle);
        		this.gfnGridClear(this.dxGridTitle2);
        		this.gfnGridClear(this.dxGridTitle3);
        		this.gfnGridClear(this.dxGridTitle4);
        		this.fnClearSummary();

        		this.btnDetail.set_enable(false);
        		//this.btnNotice.set_enable(true);
        		this.btnTarget.set_enable(false);
        		this.btnSave.set_enable(false);
        		this.btnAdd.set_enable(false);
        		this.btnRemove.set_enable(false);

        		if( e.columnid == "ID_RTNG" ) {
        			if (e.newvalue == "") {
        				this.dsSearch.setColumn(0,"TY_PTCP","");
        				this.dsSearch.setColumn(0,"CD_RTNG_ASBLNEXT","");
        				this.dsSearch.setColumn(0,"DS_RTNG_ASBLNEXT","");
        				this.dsSearch.setColumn(0,"CNTN_RTNG_ID","");
        			}
        		}
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
        	// 작성중
        	if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "STAT_RTNG") == "ESTT") {
        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "B") {	// 피평가자
        			this.btnRequest.set_visible(false);		// 수정요청
        			this.btnSubmit.set_visible(true);		// 제출
        			this.btnApply.set_visible(false);		// 피드백완료
        			this.btnComplete.set_visible(false);	// 개인면담완료
        			this.btnFinish.set_visible(false);		// 전체면담완료

        			this.btnRequest.set_enable(false);		// 수정요청
        			this.btnSubmit.set_enable(true);		// 제출
        			this.btnApply.set_enable(false);		// 피드백완료
        			this.btnComplete.set_enable(false);		// 개인면담완료
        			this.btnFinish.set_enable(false);		// 전체면담완료

        			// 확장버튼 숨김 처리 후 위치조정
        			this.fnButtonPosition();

        			this.btnGoal_Estt_Itvw.set_visible(true);
        			this.btnNotice.set_visible(true);
        			this.btnTarget.set_visible(true);
        			this.btnAdd.set_visible(true);
        			this.btnRemove.set_visible(true);
        			this.btnSave.set_visible(true);

        			this.btnGoal_Estt_Itvw.set_enable(true);
        			this.btnDetail.set_enable(true);
        			this.btnNotice.set_enable(true);
        			this.btnTarget.set_enable(true);
        			this.btnAdd.set_enable(true);
        			this.btnRemove.set_enable(true);
        			this.btnSave.set_enable(false); // true

        			this.txtDS_FDBK.set_enable(false);
        			this.txtDS_FDBK_A.set_enable(false);
        			this.txtDS_FDBK_B.set_enable(false);

        			this.sta00.set_visible(false);	//(true);

        			var list = ['NO_COL', 'DS_GOAL_WRK', 'DS_EXEC_PLN_HGHYR', 'DS_EXEC_PLN_LOWHYR', 'DS_GOAL_LVL_MIN', 'DS_GOAL_LVL_MAX', 'DS_MNPT_ADMN'];
        			for (var i = 0; i < list.length; i++) {
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "cssclass", "");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "edittype", "text");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "expandshow", "show");
        			}

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "NO_WGTV"), "cssclass", "");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "NO_WGTV"), "edittype", "text");

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_RMK"), "cssclass", "");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_RMK"), "edittype", "text");	//"combo");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_RMK"), "expandshow", "show");

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_FDBK"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_FDBK"), "edittype", "none");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_FDBK"), "expandshow", "show");	//"show"

        			this.dsListGoalEstablish.set_enableevent(false);
        			for (var i = 0; i < this.dsListGoalEstablish.rowcount; i++) {
        				this.dsListGoalEstablish.setColumn(i, "MULTILINE_READONLY", "Y");
        				this.dsListGoalEstablish.setColumn(i, "MULTILINE_EXCLUDE_COLUMNS", "DS_GOAL_WRK,DS_EXEC_PLN_HGHYR,DS_EXEC_PLN_LOWHYR,DS_GOAL_LVL_MIN,DS_GOAL_LVL_MAX,DS_RMK,DS_MNPT_ADMN");
        			}
        			this.dsListGoalEstablish.set_enableevent(true);
        		}

        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "R") {	// 평가자
        			this.btnRequest.set_visible(true);		// 수정요청
        			this.btnSubmit.set_visible(false);		// 제출
        			this.btnApply.set_visible(false);		// 피드백완료
        			this.btnComplete.set_visible(true);		// 개인면담완료
        			this.btnFinish.set_visible(true);		// 전체면담완료

        			this.btnRequest.set_enable(false);		// 수정요청
        			this.btnSubmit.set_enable(false);		// 제출
        			this.btnApply.set_enable(false);		// 피드백완료
        			this.btnComplete.set_enable(false);		// 개인면담완료
        			this.btnFinish.set_enable(false);		// 전체면담완료

        			// 평가자2명인 경우(승인자/면담자)
        			if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "YN_APPLY") != "Y") {
        				if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {	// 평가자B
        					this.btnRequest.set_visible(false);		// 수정요청
        					this.btnApply.set_visible(true);		// 피드백완료
        					this.btnComplete.set_visible(false);	// 면담완료
        					this.btnFinish.set_visible(false);		// 전체면담완료
        				}
        			}

        			// 확장버튼 숨김 처리 후 위치조정
        			this.fnButtonPosition();

        			this.btnGoal_Estt_Itvw.set_visible(false);
        			this.btnNotice.set_visible(false);
        			this.btnTarget.set_visible(false);
        			this.btnAdd.set_visible(false);
        			this.btnRemove.set_visible(false);
        			this.btnSave.set_visible(true);

        			this.btnGoal_Estt_Itvw.set_enable(false);
        			this.btnDetail.set_enable(true);
        			this.btnNotice.set_enable(false);
        			this.btnTarget.set_enable(false);
        			this.btnAdd.set_enable(false);
        			this.btnRemove.set_enable(false);
        			this.btnSave.set_enable(false);

        			this.txtDS_FDBK.set_enable(false);
        			this.txtDS_FDBK_A.set_enable(false);
        			this.txtDS_FDBK_B.set_enable(false);

        			this.sta00.set_visible(false);

        			var list = ['NO_COL', 'DS_GOAL_WRK', 'DS_EXEC_PLN_HGHYR', 'DS_EXEC_PLN_LOWHYR', 'DS_GOAL_LVL_MIN', 'DS_GOAL_LVL_MAX', 'DS_MNPT_ADMN'];
        			for (var i = 0; i < list.length; i++) {
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "cssclass", "BACK_ReadOnly");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "edittype", "none");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "expandshow", "show");	//"show" hide
        			}

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "NO_WGTV"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "NO_WGTV"), "edittype", "none");

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_RMK"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_RMK"), "edittype", "none");

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_FDBK"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_FDBK"), "edittype", "none");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_FDBK"), "expandshow", "show");	//"show"

        			this.dsListGoalEstablish.set_enableevent(false);
        			for (var i = 0; i < this.dsListGoalEstablish.rowcount; i++) {
        				this.dsListGoalEstablish.setColumn(i, "MULTILINE_READONLY", "Y");
        				this.dsListGoalEstablish.setColumn(i, "MULTILINE_EXCLUDE_COLUMNS", "");
        			}
        			this.dsListGoalEstablish.set_enableevent(true);
        		}
        	}
        	// 면담진행중
        	if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "STAT_RTNG") == "ITVW") {
        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "B") {
        			this.btnRequest.set_visible(false);		// 수정요청
        			this.btnSubmit.set_visible(true);		// 제출
        			this.btnApply.set_visible(false);		// 피드백완료
        			this.btnComplete.set_visible(false);	// 개인면담완료
        			this.btnFinish.set_visible(false);		// 전체면담완료

        			this.btnRequest.set_enable(false);		// 수정요청
        			this.btnSubmit.set_enable(false);		// 제출
        			this.btnApply.set_enable(false);		// 피드백완료
        			this.btnComplete.set_enable(false);		// 개인면담완료
        			this.btnFinish.set_enable(false);		// 전체면담완료

        			// 확장버튼 숨김 처리 후 위치조정
        			this.fnButtonPosition();

        			this.btnGoal_Estt_Itvw.set_visible(true);
        			this.btnNotice.set_visible(true);
        			this.btnTarget.set_visible(true);
        			this.btnAdd.set_visible(true);
        			this.btnRemove.set_visible(true);
        			this.btnSave.set_visible(true);

        			this.btnGoal_Estt_Itvw.set_enable(true);
        			this.btnDetail.set_enable(true);
        			this.btnNotice.set_enable(true);
        			this.btnTarget.set_enable(true);
        			this.btnAdd.set_enable(false);
        			this.btnRemove.set_enable(false);
        			this.btnSave.set_enable(false);

        			this.txtDS_FDBK.set_enable(false);
        			this.txtDS_FDBK_A.set_enable(false);
        			this.txtDS_FDBK_B.set_enable(false);

        			this.sta00.set_visible(false);

        			var list = ['NO_COL', 'DS_GOAL_WRK', 'DS_EXEC_PLN_HGHYR', 'DS_EXEC_PLN_LOWHYR', 'DS_GOAL_LVL_MIN', 'DS_GOAL_LVL_MAX', 'DS_MNPT_ADMN'];
        			for (var i = 0; i < list.length; i++) {
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "cssclass", "BACK_ReadOnly");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "edittype", "none");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "expandshow", "show");	//"show"
        			}

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "NO_WGTV"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "NO_WGTV"), "edittype", "none");

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_RMK"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_RMK"), "edittype", "none");

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_FDBK"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_FDBK"), "edittype", "none");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_FDBK"), "expandshow", "show");	//"show"

        			this.dsListGoalEstablish.set_enableevent(false);
        			for (var i = 0; i < this.dsListGoalEstablish.rowcount; i++) {
        				this.dsListGoalEstablish.setColumn(i, "MULTILINE_READONLY", "Y");
        				this.dsListGoalEstablish.setColumn(i, "MULTILINE_EXCLUDE_COLUMNS", "");
        			}
        			this.dsListGoalEstablish.set_enableevent(true);
        		}

        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "R") {	// 평가자
        			this.btnRequest.set_visible(true);		// 수정요청
        			this.btnSubmit.set_visible(false);		// 제출
        			this.btnApply.set_visible(false);		// 피드백완료
        			this.btnComplete.set_visible(true);		// 개인면담완료
        			this.btnFinish.set_visible(true);		// 전체면담완료

        			this.btnRequest.set_enable(true);		// 수정요청
        			this.btnSubmit.set_enable(false);		// 제출
        			this.btnApply.set_enable(false);		// 피드백완료
        			this.btnComplete.set_enable(true);		// 개인면담완료
        			this.btnFinish.set_enable(true);		// 전체면담완료

        			this.txtDS_FDBK.set_enable(true);
        			this.txtDS_FDBK_A.set_enable(false);
        			this.txtDS_FDBK_B.set_enable(false);
        			// 평가자2명인 경우(승인자/면담자)
        			if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "YN_APPLY") == "Y") {
        				this.txtDS_FDBK.set_enable(false);
        				this.txtDS_FDBK_A.set_enable(true);
        				this.txtDS_FDBK_B.set_enable(false);
        			} else{
        				if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {
        					this.btnApply.set_visible(true);		// 피드백완료
        					this.btnApply.set_enable(true);			// 피드백완료
        					this.btnComplete.set_visible(false);	// 면담완료
        					this.btnComplete.set_enable(false);		// 면담완료
        					this.btnFinish.set_visible(false);
        					this.btnRequest.set_visible(false);
        					this.txtDS_FDBK.set_enable(false);
        					this.txtDS_FDBK_A.set_enable(false);
        					this.txtDS_FDBK_B.set_enable(true);
        				}
        			}

        			// 확장버튼 숨김 처리 후 위치조정
        			this.fnButtonPosition();

        			this.btnGoal_Estt_Itvw.set_visible(false);
        			this.btnNotice.set_visible(false);
        			this.btnTarget.set_visible(false);
        			this.btnAdd.set_visible(false);
        			this.btnRemove.set_visible(false);
        			this.btnSave.set_visible(true);

        			this.btnGoal_Estt_Itvw.set_enable(false);
        			this.btnDetail.set_enable(true);
        			this.btnNotice.set_enable(false);
        			this.btnTarget.set_enable(false);
        			this.btnAdd.set_enable(false);
        			this.btnRemove.set_enable(false);
        			this.btnSave.set_enable(false); // true

        			this.sta00.set_visible(false);

        			var list = ['NO_COL', 'DS_GOAL_WRK', 'DS_EXEC_PLN_HGHYR', 'DS_EXEC_PLN_LOWHYR', 'DS_GOAL_LVL_MIN', 'DS_GOAL_LVL_MAX', 'DS_MNPT_ADMN'];
        			for (var i = 0; i < list.length; i++) {
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "cssclass", "BACK_ReadOnly");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "edittype", "none");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "expandshow", "show");	//"show"
        			}

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "NO_WGTV"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "NO_WGTV"), "edittype", "none");

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_RMK"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_RMK"), "edittype", "none");

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_FDBK"), "cssclass", "");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_FDBK"), "edittype", "text");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_FDBK"), "expandshow", "show");

        			if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_FDBK"), "cssclass", "BACK_ReadOnly");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_FDBK"), "edittype", "none");
        			}

        			this.dsListGoalEstablish.set_enableevent(false);
        			for (var i = 0; i < this.dsListGoalEstablish.rowcount; i++) {
        				this.dsListGoalEstablish.setColumn(i, "MULTILINE_READONLY", "Y");
        				this.dsListGoalEstablish.setColumn(i, "MULTILINE_EXCLUDE_COLUMNS", "DS_FDBK");

        				if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {
        					this.dsListGoalEstablish.setColumn(i, "MULTILINE_EXCLUDE_COLUMNS", "");
        				}
        			}
        			this.dsListGoalEstablish.set_enableevent(true);
        		}
        	}

        	// 평가자 피드백 완료(APPL)
        	if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "STAT_RTNG") == "APPL") {
        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "B") {
        			this.btnRequest.set_visible(false);		// 수정요청
        			this.btnSubmit.set_visible(true);		// 제출
        			this.btnApply.set_visible(false);		// 피드백완료
        			this.btnComplete.set_visible(false);	// 개인면담완료
        			this.btnFinish.set_visible(false);		// 전체면담완료

        			this.btnRequest.set_enable(false);		// 수정요청
        			this.btnSubmit.set_enable(false);		// 제출
        			this.btnApply.set_enable(false);		// 피드백완료
        			this.btnComplete.set_enable(false);		// 개인면담완료
        			this.btnFinish.set_enable(false);		// 전체면담완료

        			// 확장버튼 숨김 처리 후 위치조정
        			this.fnButtonPosition();

        			this.btnGoal_Estt_Itvw.set_visible(true);
        			this.btnNotice.set_visible(true);
        			this.btnTarget.set_visible(true);
        			this.btnAdd.set_visible(true);
        			this.btnRemove.set_visible(true);
        			this.btnSave.set_visible(true);

        			this.btnGoal_Estt_Itvw.set_enable(true);
        			this.btnDetail.set_enable(true);
        			this.btnNotice.set_enable(true);
        			this.btnTarget.set_enable(true);
        			this.btnAdd.set_enable(false);
        			this.btnRemove.set_enable(false);
        			this.btnSave.set_enable(false);

        			this.sta00.set_visible(false);

        			var list = ['NO_COL', 'DS_GOAL_WRK', 'DS_EXEC_PLN_HGHYR', 'DS_EXEC_PLN_LOWHYR', 'DS_GOAL_LVL_MIN', 'DS_GOAL_LVL_MAX', 'DS_MNPT_ADMN', 'DS_FDBK'];
        			for (var i = 0; i < list.length; i++) {
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "cssclass", "BACK_ReadOnly");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "edittype", "none");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "expandshow", "show");	//"show"
        			}

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", 'NO_WGTV'), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", 'NO_WGTV'), "edittype", "none");

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", 'DS_RMK'), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", 'DS_RMK'), "edittype", "none");

        			this.dsListGoalEstablish.set_enableevent(false);
        			for (var i = 0; i < this.dsListGoalEstablish.rowcount; i++) {
        				this.dsListGoalEstablish.setColumn(i, "MULTILINE_READONLY", "Y");
        				this.dsListGoalEstablish.setColumn(i, "MULTILINE_EXCLUDE_COLUMNS", "");
        			}
        			this.dsListGoalEstablish.set_enableevent(true);
        		}

        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "R") {
        			this.btnRequest.set_visible(true);		// 수정요청
        			this.btnSubmit.set_visible(false);		// 제출
        			this.btnApply.set_visible(false);		// 피드백완료
        			this.btnComplete.set_visible(true);		// 개인면담완료
        			this.btnFinish.set_visible(true);		// 전체면담완료

        			this.btnRequest.set_enable(true);		// 수정요청
        			this.btnSubmit.set_enable(false);		// 제출
        			this.btnApply.set_enable(false);		// 피드백완료
        			this.btnComplete.set_enable(false);		// 개인면담완료
        			this.btnFinish.set_enable(true);		// 전체면담완료

        			// 평가자2명인 경우(승인자/면담자)
        			if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "YN_APPLY") != "Y") {
        				if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {	// 평가자B
        					this.btnRequest.set_visible(false);		// 수정요청
        					this.btnApply.set_visible(true);		// 피드백완료
        					this.btnApply.set_enable(false);		// 피드백완료
        					this.btnComplete.set_visible(false);	// 면담완료
        					this.btnComplete.set_enable(false);		// 면담완료
        					this.btnFinish.set_visible(false);		// 전체면담완료
        				}
        			}

        			// 확장버튼 숨김 처리 후 위치조정
        			this.fnButtonPosition();

        			this.btnGoal_Estt_Itvw.set_visible(false);
        			this.btnNotice.set_visible(false);
        			this.btnTarget.set_visible(false);
        			this.btnAdd.set_visible(false);
        			this.btnRemove.set_visible(false);
        			this.btnSave.set_visible(true);

        			this.btnGoal_Estt_Itvw.set_enable(false);
        			this.btnDetail.set_enable(true);
        			this.btnNotice.set_enable(false);
        			this.btnTarget.set_enable(false);
        			this.btnAdd.set_enable(false);
        			this.btnRemove.set_enable(false);
        			this.btnSave.set_enable(false);

        			this.txtDS_FDBK.set_enable(false);
        			this.txtDS_FDBK_A.set_enable(false);
        			this.txtDS_FDBK_B.set_enable(false);

        			this.sta00.set_visible(false);

        			var list = ['NO_COL', 'DS_GOAL_WRK', 'DS_EXEC_PLN_HGHYR', 'DS_EXEC_PLN_LOWHYR', 'DS_GOAL_LVL_MIN', 'DS_GOAL_LVL_MAX', 'DS_MNPT_ADMN', 'DS_FDBK'];
        			for (var i = 0; i < list.length; i++) {
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "cssclass", "BACK_ReadOnly");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "edittype", "none");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "expandshow", "show");	//"show"
        			}

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", 'NO_WGTV'), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", 'NO_WGTV'), "edittype", "none");

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", 'DS_RMK'), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", 'DS_RMK'), "edittype", "none");

        			this.dsListGoalEstablish.set_enableevent(false);
        			for (var i = 0; i < this.dsListGoalEstablish.rowcount; i++) {
        				this.dsListGoalEstablish.setColumn(i, "MULTILINE_READONLY", "Y");
        				this.dsListGoalEstablish.setColumn(i, "MULTILINE_EXCLUDE_COLUMNS", "");
        			}
        			this.dsListGoalEstablish.set_enableevent(true);
        		}
        	}

        	// 면담완료
        	if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "STAT_RTNG") == "CPLT1"
        		|| this.getOwnerFrame().READ_ONLY) {
        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "B") {
        			this.btnRequest.set_visible(false);		// 수정요청
        			this.btnSubmit.set_visible(true);		// 제출
        			this.btnApply.set_visible(false);		// 피드백완료
        			this.btnComplete.set_visible(false);	// 개인면담완료
        			this.btnFinish.set_visible(false);		// 전체면담완료

        			this.btnRequest.set_enable(false);		// 수정요청
        			this.btnSubmit.set_enable(false);		// 제출
        			this.btnApply.set_enable(false);		// 피드백완료
        			this.btnComplete.set_enable(false);		// 개인면담완료
        			this.btnFinish.set_enable(false);		// 전체면담완료

        			// 확장버튼 숨김 처리 후 위치조정
        			this.fnButtonPosition();

        			this.btnGoal_Estt_Itvw.set_visible(true);
        			this.btnNotice.set_visible(true);
        			this.btnTarget.set_visible(true);
        			this.btnAdd.set_visible(true);
        			this.btnRemove.set_visible(true);
        			this.btnSave.set_visible(true);

        			this.btnGoal_Estt_Itvw.set_enable(true);
        			this.btnDetail.set_enable(true);
        			this.btnNotice.set_enable(true);
        			this.btnTarget.set_enable(true);
        			this.btnAdd.set_enable(false);
        			this.btnRemove.set_enable(false);
        			this.btnSave.set_enable(false);

        			this.sta00.set_visible(false);

        			this.txtDS_FDBK.set_enable(false);
        			this.txtDS_FDBK_A.set_enable(false);
        			this.txtDS_FDBK_B.set_enable(false);

        			var list = ['NO_COL', 'DS_GOAL_WRK', 'DS_EXEC_PLN_HGHYR', 'DS_EXEC_PLN_LOWHYR', 'DS_GOAL_LVL_MIN', 'DS_GOAL_LVL_MAX', 'DS_MNPT_ADMN', 'DS_FDBK'];
        			for (var i = 0; i < list.length; i++) {
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "cssclass", "BACK_ReadOnly");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "edittype", "none");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "expandshow", "show");	//"show"
        			}

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", 'NO_WGTV'), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", 'NO_WGTV'), "edittype", "none");

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", 'DS_RMK'), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", 'DS_RMK'), "edittype", "none");

        			this.dsListGoalEstablish.set_enableevent(false);
        			for (var i = 0; i < this.dsListGoalEstablish.rowcount; i++) {
        				this.dsListGoalEstablish.setColumn(i, "MULTILINE_READONLY", "Y");
        				this.dsListGoalEstablish.setColumn(i, "MULTILINE_EXCLUDE_COLUMNS", "");
        			}
        			this.dsListGoalEstablish.set_enableevent(true);
        		}

        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "R") {
        			this.btnRequest.set_visible(true);		// 수정요청
        			this.btnSubmit.set_visible(false);		// 제출
        			this.btnApply.set_visible(false);		// 피드백완료
        			this.btnComplete.set_visible(true);		// 개인면담완료
        			this.btnFinish.set_visible(true);		// 전체면담완료

        			this.btnRequest.set_enable(false);		// 수정요청
        			this.btnSubmit.set_enable(false);		// 제출
        			this.btnApply.set_enable(false);		// 피드백완료
        			this.btnComplete.set_enable(false);		// 개인면담완료
        			this.btnFinish.set_enable(true);		// 전체면담완료

        			// 평가자2명인 경우(승인자/면담자)
        			if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "YN_APPLY") != "Y") {
        				if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {	// 평가자B
        					this.btnRequest.set_visible(false);		// 수정요청
        					this.btnApply.set_visible(true);		// 피드백완료
        					this.btnComplete.set_visible(false);	// 개인면담완료
        					this.btnFinish.set_visible(false);		// 전체면담완료
        				}
        			}

        			// 확장버튼 숨김 처리 후 위치조정
        			this.fnButtonPosition();

        			this.btnGoal_Estt_Itvw.set_visible(false);
        			this.btnNotice.set_visible(false);
        			this.btnTarget.set_visible(false);
        			this.btnAdd.set_visible(false);
        			this.btnRemove.set_visible(false);
        			this.btnSave.set_visible(true);

        			this.btnGoal_Estt_Itvw.set_enable(false);
        			this.btnDetail.set_enable(true);
        			this.btnNotice.set_enable(false);
        			this.btnTarget.set_enable(false);
        			this.btnAdd.set_enable(false);
        			this.btnRemove.set_enable(false);
        			this.btnSave.set_enable(false);

        			this.txtDS_FDBK.set_enable(false);
        			this.txtDS_FDBK_A.set_enable(false);
        			this.txtDS_FDBK_B.set_enable(false);

        			this.sta00.set_visible(false);

        			var list = ['NO_COL', 'DS_GOAL_WRK', 'DS_EXEC_PLN_HGHYR', 'DS_EXEC_PLN_LOWHYR', 'DS_GOAL_LVL_MIN', 'DS_GOAL_LVL_MAX', 'DS_MNPT_ADMN', 'DS_FDBK'];
        			for (var i = 0; i < list.length; i++) {
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "cssclass", "BACK_ReadOnly");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "edittype", "none");
        				this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", list[i]), "expandshow", "show");	//"show"
        			}

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", 'NO_WGTV'), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", 'NO_WGTV'), "edittype", "none");

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", 'DS_RMK'), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", 'DS_RMK'), "edittype", "none");

        			this.dsListGoalEstablish.set_enableevent(false);
        			for (var i = 0; i < this.dsListGoalEstablish.rowcount; i++) {
        				this.dsListGoalEstablish.setColumn(i, "MULTILINE_READONLY", "Y");
        				this.dsListGoalEstablish.setColumn(i, "MULTILINE_EXCLUDE_COLUMNS", "");
        			}
        			this.dsListGoalEstablish.set_enableevent(true);
        		}
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
        		if (this.dsListGoalBgvdprsn.getColumn(i, "STATUS_RTNG") != "CPLT1")
        		{
        			this.btnFinish.set_enable(true);		// 전체평가완료
        		} else {
        			this.btnFinish.set_enable(false);		// 전체평가완료
        		}
        	}
        }

        this.fnSelectGoalEstablish = function() {
        	this.gfnGridBeforeSelect(this.dxGridSub);
        	this.gfnGridBeforeSelect(this.dxGridSubExcl);
        	this.gfnGridBeforeSelect(this.dxGridTitle);
        	this.gfnGridBeforeSelect(this.dxGridTitle2);
        	this.gfnGridBeforeSelect(this.dxGridTitle3);
        	this.gfnGridBeforeSelect(this.dxGridTitle4);

        	// 업무목표수립 요약 정보
        	this.dsSelectGoaleEsttSummary.clearData();
        	this.dsSelectGoaleEsttSummary.addRow();
        	this.dsSelectGoaleEsttSummary.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectGoaleEsttSummary.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));
        	if (this.dsSearch.getColumn(0, "TY_PTCP") == "B") {
        		this.dsSelectGoaleEsttSummary.setColumn(0, "ID_SABUN_BGVD", this.dsSearch.getColumn(0, "ID_SABUN"));
        		this.dsSelectGoaleEsttSummary.setColumn(0, "ID_SABUN_ITVW", this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "ID_ITVWPRSN"));
        	}
        	if (this.dsSearch.getColumn(0, "TY_PTCP") == "R" || this.dsSearch.getColumn(0, "TY_PTCP") == "M") {
        		this.dsSelectGoaleEsttSummary.setColumn(0, "ID_SABUN_BGVD", this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "ID_SABUN"));
        		this.dsSelectGoaleEsttSummary.setColumn(0, "ID_SABUN_ITVW", this.dsSearch.getColumn(0, "ID_SABUN"));
        	}
        	this.dsSelectGoaleEsttSummary.setColumn(0, "TY_PTCP", this.dsSearch.getColumn(0, "TY_PTCP"));

        	// 업무목표수립 조회
        	this.dsSelectGoalEstablish.clearData();
        	this.dsSelectGoalEstablish.addRow();
        	this.dsSelectGoalEstablish.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectGoalEstablish.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSelectGoalEstablish.setColumn(0, "SEQ_BGVDPRSN", this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "SEQ_BGVDPRSN"));
        	this.dsSelectGoalEstablish.setColumn(0, "ID_ITVWPRSN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelectGoalEstablish.setColumn(0, "TY_PTCP", this.dsSearch.getColumn(0, "TY_PTCP"));

        	var strSvcId    = "select_goal_estt";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_goal_estt_summary=dsSelectGoaleEsttSummary select_goal_estt=dsSelectGoalEstablish select_goal_estt_excel=dsSelectGoaleEsttSummary";
        	var outData     = "dsListGoalEstablishSummary=select_goal_estt_summary0 dsListGoalEstablish=select_goal_estt0 dsExcelTitle=select_goal_estt_excel0 dsExcelTitle2=select_goal_estt_excel1 dsExcelTitle3=select_goal_estt_excel2 dsExcel=select_goal_estt_excel3 dsExcelTitle4=select_goal_estt_excel4";
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

        // 세부내역보기 조회
        this.btnDetail_onclick = function(obj,e) {
        	var param = {};
        	param.READ_ONLY = this.getOwnerFrame().READ_ONLY;	//true;
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	param.ID_RTNG = this.dsSearch.getColumn(0, "ID_RTNG");
        	param.DS_RTNG = this.dsSearch.getColumn(0, "DS_RTNG");
        	param.CD_RTNG_TYPE = 'JA10';	// 업무목표수립
        	param.CD_RTNG_ASBLNEXT = this.dsSearch.getColumn(0, "CD_RTNG_ASBLNEXT");
        	param.DS_RTNG_ASBLNEXT = this.dsSearch.getColumn(0, "DS_RTNG_ASBLNEXT");
        	param.CNTN_RTNG_ID = this.dsSearch.getColumn(0, "CNTN_RTNG_ID");
        	param.TY_PTCP = this.dsSearch.getColumn(0, "TY_PTCP");
        	param.ID_SABUN = this.dsListGoalEstablishSummary.getColumn(0, "ID_SABUN_BGVD");
        	param.DS_HNAME = this.dsListGoalEstablishSummary.getColumn(0, "DS_HNAME_BGVD");
        	param.SEQ_BGVDPRSN = this.dsListGoalEstablishSummary.getColumn(0, "SEQ_BGVDPRSN");
        	param.STATUS_RTNG = this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "STATUS_RTNG");
        	param.CL_ITVWPRSN = this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN");

        	var Width = this.objApp.mainframe.width;	//this.parent.parent.parent.width;
        	var height = this.objApp.mainframe.height-25;	//this.parent.parent.parent.height;
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAJ_RTNG_GOAL_ESTT_DETAIL_DLG", "fnDetailCallback", param, Width, height);
        }

        // 세부내역보기 콜백
        this.fnDetailCallback = function() {
        // 	if (this.dsSearch.getColumn(0, "TY_PTCP") == "B")	// 피평가자
        // 	{
        // 		this.FormBtns.Select.click();
        // 	}
        	this.FormBtns.Select.click();
        }

        // 보직자 업무목표 조회
        this.btnGoal_Estt_Itvw_onclick = function(obj,e) {
        	var param = {};
        	param.READ_ONLY = true;
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	param.ID_RTNG = this.dsSearch.getColumn(0, "ID_RTNG");
        	param.DS_RTNG = this.dsSearch.getColumn(0, "DS_RTNG");
        	param.TY_PTCP = 'B';
        	param.ID_SABUN = this.dsListGoalEstablishSummary.getColumn(0, "ID_SABUN_ITVW");
        	param.DS_HNAME = this.dsListGoalEstablishSummary.getColumn(0, "DS_HNAME_ITVW");
        	param.SEQ_BGVDPRSN = this.dsListGoalEstablishSummary.getColumn(0, "SEQ_ITVWPRSN_BGVDPRSN");
        	param.CD_RTNG_TYPE = 'JA10';

        	var Width = this.objApp.mainframe.width;		//this.parent.parent.parent.width;
        	var height = this.objApp.mainframe.height-25;	//this.parent.parent.parent.height;
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAJ_RTNG_GOAL_ESTT_DLG", "", param, Width, height);
        }

        // 작성 가이드 클릭
        this.btnNotice_onclick = function(obj, e) {
        // 	var param = {};
        // 	param.GUBUN       	= "GOAL";
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAJ_RTNG_GOAL_RULE_DLG","",param);

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DAJ1";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0, "CD_CORP"),this.dsSearch.getColumn(0, "ID_RTNG")];
        	// 권한설정
        	if (this.FormInfo.TY_AUTH == "F") {
        		fileManager.IS_READONLY = false;
        	} else {
        		fileManager.IS_READONLY = true;
        	}
        	this.gfnFileManager(fileManager, "fnFileCallback");
        }

        // 전사 목표 체계 클릭
        this.btnTarget_onclick = function(obj, e) {
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DAJ2";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0, "CD_CORP"),this.dsSearch.getColumn(0, "ID_RTNG")];
        	// 권한설정
        	if (this.FormInfo.TY_AUTH == "F") {
        		fileManager.IS_READONLY = false;
        	} else {
        		fileManager.IS_READONLY = true;
        	}
        	this.gfnFileManager(fileManager, "fnFileCallback");
        }

        // 임시저장 버튼 클릭 이벤트
        this.btnSave_onclick = function(obj,e) {
        	this.dxGridSub.updateToDataset();
        	this.dsSaveGoalEstablish.clearData();

        	for (var i = 0; i < this.dsListGoalEstablish.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListGoalEstablish, i);
        		switch (flag) {
        		case "I":
        		case "U":
        		case "D":
        			var nrow = this.dsSaveGoalEstablish.addRow();

        			this.dsSaveGoalEstablish.setColumn(nrow, "TY_WRK"            , flag);
        			this.dsSaveGoalEstablish.setColumn(nrow, "CD_CORP"           , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSaveGoalEstablish.setColumn(nrow, "ID_RTNG"           , this.dsSearch.getColumn(0, "ID_RTNG"));
        			this.dsSaveGoalEstablish.setColumn(nrow, "SEQ_BGVDPRSN"      , this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "SEQ_BGVDPRSN"));
        			this.dsSaveGoalEstablish.setColumn(nrow, "SEQ_GOAL"          , this.dsListGoalEstablish.getColumn(i, "SEQ_GOAL"));
        			this.dsSaveGoalEstablish.setColumn(nrow, "NO_COL"            , this.dsListGoalEstablish.getColumn(i, "NO_COL"));
        			this.dsSaveGoalEstablish.setColumn(nrow, "DS_GOAL_WRK"       , this.gfnNvl(this.dsListGoalEstablish.getColumn(i, "DS_GOAL_WRK"), "").replace(/\v/g,"\n"));
        			this.dsSaveGoalEstablish.setColumn(nrow, "DS_EXEC_PLN_HGHYR" , this.gfnNvl(this.dsListGoalEstablish.getColumn(i, "DS_EXEC_PLN_HGHYR"), "").replace(/\v/g,"\n"));
        			this.dsSaveGoalEstablish.setColumn(nrow, "DS_EXEC_PLN_LOWHYR", this.gfnNvl(this.dsListGoalEstablish.getColumn(i, "DS_EXEC_PLN_LOWHYR"), "").replace(/\v/g,"\n") );
        			this.dsSaveGoalEstablish.setColumn(nrow, "DS_GOAL_LVL_MIN"   , this.gfnNvl(this.dsListGoalEstablish.getColumn(i, "DS_GOAL_LVL_MIN"), "").replace(/\v/g,"\n") );
        			this.dsSaveGoalEstablish.setColumn(nrow, "DS_GOAL_LVL_MAX"   , this.gfnNvl(this.dsListGoalEstablish.getColumn(i, "DS_GOAL_LVL_MAX"), "").replace(/\v/g,"\n") );
        			this.dsSaveGoalEstablish.setColumn(nrow, "DS_MNPT_ADMN"      , this.gfnNvl(this.dsListGoalEstablish.getColumn(i, "DS_MNPT_ADMN"), "").replace(/\v/g,"\n") );
        			this.dsSaveGoalEstablish.setColumn(nrow, "NO_WGTV"           , this.dsListGoalEstablish.getColumn(i, "NO_WGTV"));
        			this.dsSaveGoalEstablish.setColumn(nrow, "DS_RMK"            , this.dsListGoalEstablish.getColumn(i, "DS_RMK"));
        			this.dsSaveGoalEstablish.setColumn(nrow, "DS_FDBK"           , this.gfnNvl(this.dsListGoalEstablish.getColumn(i, "DS_FDBK"), "").replace(/\v/g,"\n") );
        			this.dsSaveGoalEstablish.setColumn(nrow, "ID_USER"           , this.AuthClient.ID_USER);
        			this.dsSaveGoalEstablish.setColumn(nrow, "TY_PTCP"			 , this.dsSearch.getColumn(0, "TY_PTCP"));

        			break;
        		}
        	}

        	if (this.dsSearch.getColumn(0, "TY_PTCP") == "R")	// 평가자
        	{
        		this.dsSaveGoalInterviewer.clearData();
        		var nrow = this.dsSaveGoalInterviewer.addRow();
        		this.dsSaveGoalInterviewer.setColumn(nrow, "TY_WRK"      , "M");
        		this.dsSaveGoalInterviewer.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsSaveGoalInterviewer.setColumn(nrow, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        		this.dsSaveGoalInterviewer.setColumn(nrow, "SEQ_BGVDPRSN", this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "SEQ_BGVDPRSN"));
        		this.dsSaveGoalInterviewer.setColumn(nrow, "SEQ_ITVWPRSN", this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "SEQ_ITVWPRSN"));
        		this.dsSaveGoalInterviewer.setColumn(nrow, "CL_ITVWPRSN" , this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN"));

        		// 평가자2명인 경우(승인자/면담자)
        		if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "YN_APPLY") == "Y") {
        			this.dsSaveGoalInterviewer.setColumn(nrow, "DS_FDBK"     , this.txtDS_FDBK_A.text);
        		} else if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {
        			this.dsSaveGoalInterviewer.setColumn(nrow, "DS_FDBK"     , this.txtDS_FDBK_B.text);
        		} else {
        			this.dsSaveGoalInterviewer.setColumn(nrow, "DS_FDBK"     , this.txtDS_FDBK.text);
        		}
        		this.dsSaveGoalInterviewer.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);
        	}

        	var strSvcId    = "save_goal_estt";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_goal_estt=dsSaveGoalEstablish save_goal_invw=dsSaveGoalInterviewer";
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

        // 추가 버튼 클릭 이벤트
        this.btnAdd_onclick = function(obj,e) {

        	var nrow = this.dsListGoalEstablish.rowcount;

        	if(this.dsListGoalEstablish.rowcount == 0) {
        		var nrow = this.gfnGridAdd(this.dxGridSub, "bottom");
        		this.dsListGoalEstablish.setColumn(nrow, "NO_COL", 1);
        	}
        	else if(this.dsListGoalEstablish.rowposition >= 0 && this.dsListGoalEstablish.rowposition == nrow-1) {
        		var NextCol = this.getNextNoCol();
        		var nrow = this.gfnGridAdd(this.dxGridSub, "bottom");
        		this.dsListGoalEstablish.set_enableevent(false);
        		this.dsListGoalEstablish.setColumn(nrow, "NO_COL", NextCol);
        		this.dsListGoalEstablish.set_enableevent(true);
        	}
        	else {
        		var curNO_COL = this.dsListGoalEstablish.getColumn(this.dsListGoalEstablish.rowposition, "NO_COL");
        		var nrow = this.gfnGridAdd(this.dxGridSub, "current");

        		this.dsListGoalEstablish.set_enableevent(false);
        		this.dsListGoalEstablish.setColumn(nrow, "NO_COL", curNO_COL);

        		for(var i = nrow+1; i < this.dsListGoalEstablish.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsListGoalEstablish, i);
        			if(flag != "I" && flag != "D") {
        				this.dsListGoalEstablish.setColumn(i, this.ucFlag, "U");
        			}
        			this.dsListGoalEstablish.setColumn(i, "NO_COL", ++curNO_COL);
        		}
        		this.dsListGoalEstablish.set_enableevent(true);
        	}
        	this.gfnSetFormStatus(this, "I");
        	this.btnDetail.set_enable(false);
        	this.btnSave.set_enable(true);
        }

        // 삭제 버튼 클릭 이벤트
        this.btnRemove_onclick = function(obj,e) {
        	this.dsListGoalEstablish.set_enableevent(false);

        	this.gfnGridDel(this.dxGridSub);
        	this.dsListGoalEstablish.set_enableevent(true);
        	this.gfnSetFormStatus(this, "D");
        	this.btnDetail.set_enable(false);
        	this.btnSave.set_enable(true);

        	var rowPos = this.dsListGoalEstablish.rowposition;
        	var colDS_GOAL_WRK = this.dxGridSub.getBindCellIndex("body", "DS_GOAL_WRK");
        	this.dxGridSub.setCellPos(colDS_GOAL_WRK, rowPos);

        }

        // 제출 버튼 클릭이벤트
        this.fnSubmit = function(obj, e) {
        	// 그리드 필수항목 체크
        	if (!this.fnGridValidate(this.dxGridSub)) return;

        // 	var sPopupCallBack = "fnSubmit_callback";
        //     var options = {
        //         title: "제출",
        //         resizable: true
        //     }
        //     this.gfnOpenPopup("Confirm", "cmm::cmmConfirm.xfdl", "업무목표수립을 제출하시겠습니까?", sPopupCallBack, options);

        	this.gfnConfirm("업무목표수립을 제출하시겠습니까?", function(strId, val) {
        		if (val == false) {
        			return;
        		}

        		this.fnSubmit_callback();
        	})
        }

        this.fnSubmit_callback = function() {
        	var cnt = 0;
        	for (var i = 0; i < this.dsListGoalEstablish.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListGoalEstablish, i);
        		switch (flag) {
        		case "I":
        		case "U":
        		case "D":
        			cnt++;
        			break;
        		}
        	}

        	if (cnt > 0) {
        		this.gfnAlert("저장되지 않은 업무목표가 존재합니다");
        		return;
        	}

        	var total = 0;
        	for (var i = 0; i < this.dsListGoalEstablish.rowcount; i++) {
        		total += Number(this.dsListGoalEstablish.getColumn(i, "NO_WGTV"));
        	}

        	if (total != 100) {
        		this.gfnAlert("모든 업무목표의 가중치 합은 100이어야 합니다");
        		return;
        	}

        	this.dxGridSub.updateToDataset();
        	this.dsSaveGoalEstablishSubmit.clearData();
        	this.dsSaveGoalEstablishSubmit.addRow();
        	this.dsSaveGoalEstablishSubmit.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSaveGoalEstablishSubmit.setColumn(0, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSaveGoalEstablishSubmit.setColumn(0, "SEQ_BGVDPRSN", this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "SEQ_BGVDPRSN"));
        	this.dsSaveGoalEstablishSubmit.setColumn(0, "ID_USER"     , this.AuthClient.ID_USER);

        	if (this.dsSaveGoalEstablishSubmit.rowcount == 0) return;

        	var strSvcId    = "submit_goal_estt";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "submit_goal_estt=dsSaveGoalEstablishSubmit";
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
        	// 목표수립
        	this.staStatusEstablish.set_background("#edecef");
        	this.staStatusEstablish.set_color("black");
        	this.staStatusInterview.set_background("#edecef");
        	this.staStatusInterview.set_color("black");
        	this.staStatusCompleted.set_background("#edecef");
        	this.staStatusCompleted.set_color("black");

        	// 목표면담중
        	this.staITVWPRSN_ID_SABUN_bg.set_text("");		// 사번
        	this.staITVWPRSN_DS_HNAME_bg.set_text("");		// 성명
        	//this.staITVWPRSN_DS_POSITION_bg.set_text("");	// 직급
        	//this.staITVWPRSN_DS_EMPTYPE_bg.set_text("");	// 직종
        	//this.staITVWPRSN_DS_DEPT_bg.set_text("");		// 평가조직
        	this.staITVWPRSN_DS_DUTY_bg.set_text("");		// 직책

        	this.staITVWPRSN_ID_SABUN_B_bg.set_text("");		// 사번
        	this.staITVWPRSN_DS_HNAME_B_bg.set_text("");		// 성명
        	this.staITVWPRSN_DS_DUTY_B_bg.set_text("");		// 직책

        	// 목표면담완료
        	this.staITVWPRSN_ID_SABUN_bg.set_text("");		// 사번
        	this.staITVWPRSN_DS_HNAME_bg.set_text("");		// 성명
        	//this.staITVWPRSN_DS_POSITION_bg.set_text("");	// 직급
        	//this.staITVWPRSN_DS_EMPTYPE_bg.set_text(""); 	// 직종
        	//this.staITVWPRSN_DS_DEPT_bg.set_text("");		// 평가조직
        	this.staITVWPRSN_DS_DUTY_bg.set_text("");		// 직책

        	this.staITVWPRSN_ID_SABUN_B_bg.set_text("");		// 사번
        	this.staITVWPRSN_DS_HNAME_B_bg.set_text("");		// 성명
        	this.staITVWPRSN_DS_DUTY_B_bg.set_text("");		// 직책
        }

        // 대상자 그리드 클릭 이벤트
        this.fnGridCellPosChanged = function(obj, e) {
        	if (e.row != -1 && e.oldrow != e.row) {
        		this.fnSelectGoalEstablish();
        	}
        }

        this.fnRequest = function(obj,e) {
        	var cnt = 0;
        	for (var i = 0; i < this.dsListGoalEstablish.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListGoalEstablish, i);
        		switch (flag) {
        		case "I":
        		case "U":
        		case "D":
        			cnt++;
        			break;
        		}
        	}

        	if (cnt > 0) {
        		this.gfnAlert("저장되지 않은 업무목표가 존재합니다");
        		return;
        	}

        	var status = this.gfnGetFormStatus(this);
        	if(status == "U"){
        		this.gfnAlert("면담자 피드백 내용이 임시저장되지 않았습니다");
        		return;
        	}

        	this.gfnConfirm(this.dsListGoalEstablishSummary.getColumn(0, "DS_HNAME_BGVD") + ' '
        				  + this.dsListGoalEstablishSummary.getColumn(0, "DS_POSITION_BGVD")
        				  + "의 \n업무목표수립 수정을 요청하시겠습니까?", function(strId, val) {
        		if (val == false) {
        			return;
        		}

        		this.fnRequest_callback();
        	})
        }

        this.fnRequest_callback = function() {
        // 	var cnt = 0;
        // 	for (var i = 0; i < this.dsListGoalEstablish.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsListGoalEstablish, i);
        // 		switch (flag) {
        // 		case "I":
        // 		case "U":
        // 		case "D":
        // 			cnt++;
        // 			break;
        // 		}
        // 	}
        //
        // 	if (cnt > 0) {
        // 		this.gfnAlert("저장되지 않은 업무목표가 존재합니다");
        // 		return;
        // 	}

        // 	var status = this.gfnGetFormStatus(this);
        // 	if(status == "U"){
        // 		this.gfnAlert("면담자 피드백 내용이 임시저장되지 않았습니다");
        // 		return;
        // 	}
        	this.dxGridSub.updateToDataset();
        	this.dsSaveGoalEstablishModifyRequest.clearData();
        	this.dsSaveGoalEstablishModifyRequest.addRow();
        	this.dsSaveGoalEstablishModifyRequest.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSaveGoalEstablishModifyRequest.setColumn(0, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSaveGoalEstablishModifyRequest.setColumn(0, "SEQ_BGVDPRSN", this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "SEQ_BGVDPRSN"));
        	this.dsSaveGoalEstablishModifyRequest.setColumn(0, "ID_USER"     , this.AuthClient.ID_USER);

        	if (this.dsSaveGoalEstablishModifyRequest.rowcount == 0) return;

        	var strSvcId    = "request_goal_estt_modify";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "request_goal_estt_modify=dsSaveGoalEstablishModifyRequest";
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

        this.fnApply = function(obj,e) {
        	var chk = false;
        // 	var status = this.gfnGetFormStatus(this);
        // 	if(status == "U"){
        // 		this.gfnAlert("면담자 피드백 내용이 임시저장되지 않았습니다");
        // 		return;
        // 	}

        	// 평가자2명인 경우(승인자/면담자)
        	if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "YN_APPLY") == "Y") {
        		if (this.txtDS_FDBK_A.text.length == 0)
        		{
        			chk = true;
        		}
        	} else if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {
        		if (this.txtDS_FDBK_B.text.length == 0)
        		{
        			chk = true;
        		}
        	} else {
        		if (this.txtDS_FDBK.text.length == 0)
        		{
        			chk = true;
        		}
        	}

        	if (chk == true)
        	{
        		this.gfnConfirm("피드백 총평이 입력되지 않았습니다.\n"
        					  + this.dsListGoalEstablishSummary.getColumn(0, "DS_HNAME_BGVD") + ' '
        					  + this.dsListGoalEstablishSummary.getColumn(0, "DS_POSITION_BGVD")
        					  + "의 \n업무목표수립 면담을 완료하시겠습니까?", function(strId, val) {
        			if (val == false) {
        				return;
        			}

        			this.fnApply_callback();
        		})
        	} else {
        		this.gfnConfirm(this.dsListGoalEstablishSummary.getColumn(0, "DS_HNAME_BGVD") + ' '
        					  + this.dsListGoalEstablishSummary.getColumn(0, "DS_POSITION_BGVD")
        					  + "의 \n업무목표수립 면담을 완료하시겠습니까?", function(strId, val) {
        			if (val == false) {
        				return;
        			}

        			this.fnApply_callback();
        		})
        	}
        }

        this.fnApply_callback = function() {

        	this.dsSaveGoalInterviewer.clearData();
        	var nrow = this.dsSaveGoalInterviewer.addRow();
        	this.dsSaveGoalInterviewer.setColumn(nrow, "TY_WRK"      , "M");
        	this.dsSaveGoalInterviewer.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSaveGoalInterviewer.setColumn(nrow, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSaveGoalInterviewer.setColumn(nrow, "SEQ_BGVDPRSN", this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "SEQ_BGVDPRSN"));
        	this.dsSaveGoalInterviewer.setColumn(nrow, "SEQ_ITVWPRSN", this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "SEQ_ITVWPRSN"));
        	this.dsSaveGoalInterviewer.setColumn(nrow, "CL_ITVWPRSN" , this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN"));

        	// 평가자2명인 경우(승인자/면담자)
        	if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "YN_APPLY") == "Y") {
        		this.dsSaveGoalInterviewer.setColumn(nrow, "DS_FDBK"     , this.txtDS_FDBK_A.text);
        	} else if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {
        		this.dsSaveGoalInterviewer.setColumn(nrow, "DS_FDBK"     , this.txtDS_FDBK_B.text);
        	} else {
        		this.dsSaveGoalInterviewer.setColumn(nrow, "DS_FDBK"     , this.txtDS_FDBK.text);
        	}
        	this.dsSaveGoalInterviewer.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);

        	this.dxGridSub.updateToDataset();
        	this.dsSaveGoalEstablishInterviewComplete.clearData();
        	this.dsSaveGoalEstablishInterviewComplete.addRow();
        	this.dsSaveGoalEstablishInterviewComplete.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSaveGoalEstablishInterviewComplete.setColumn(0, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSaveGoalEstablishInterviewComplete.setColumn(0, "SEQ_BGVDPRSN", this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "SEQ_BGVDPRSN"));
        	this.dsSaveGoalEstablishInterviewComplete.setColumn(0, "SEQ_ITVWPRSN", this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "SEQ_ITVWPRSN"));
        	this.dsSaveGoalEstablishInterviewComplete.setColumn(0, "ID_USER"     , this.AuthClient.ID_USER);

        	if (this.dsSaveGoalEstablishInterviewComplete.rowcount == 0) return;

        	var strSvcId    = "complete_goal_estt_interview_apply";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_goal_invw=dsSaveGoalInterviewer complete_goal_estt_interview_apply=dsSaveGoalEstablishInterviewComplete";
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

        this.fnComplete = function(obj,e) {
        	var chk = false;
        	if (this.dsListGoalEstablishSummary.getColumn(1, "STAT_RTNG") == "ITVW") {
        		this.gfnConfirm(this.dsListGoalEstablishSummary.getColumn(0, "DS_HNAME_BGVD") + ' '
        					  + this.dsListGoalEstablishSummary.getColumn(0, "DS_POSITION_BGVD")
        					  + "의 \n평가자B("
        					  + this.dsListGoalEstablishSummary.getColumn(1, "DS_HNAME_ITVW") + ' '
        					  + this.dsListGoalEstablishSummary.getColumn(1, "DS_DUTY_ITVW")
        					  + ") 면담이 완료되지 않았습니다. \n\n업무목표수립 개인면담을 최종완료하시겠습니까?", function(strId, val) {
        			if (val == false) {
        				return;
        			}

        			this.fnComplete_callback();
        		})
        	} else {
        		// 평가자2명인 경우(승인자/면담자)
        		if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "YN_APPLY") == "Y") {
        			if (this.txtDS_FDBK_A.text.length == 0)
        			{
        				chk = true;
        			}
        		} else if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {
        			if (this.txtDS_FDBK_B.text.length == 0)
        			{
        				chk = true;
        			}
        		} else {
        			if (this.txtDS_FDBK.text.length == 0)
        			{
        				chk = true;
        			}
        		}

        		if (chk == true)
        		{
        			this.gfnConfirm("피드백 총평이 입력되지 않았습니다.\n\n"
        						  + this.dsListGoalEstablishSummary.getColumn(0, "DS_HNAME_BGVD") + ' '
        						  + this.dsListGoalEstablishSummary.getColumn(0, "DS_POSITION_BGVD")
        						  + "의 \n업무목표수립 개인면담을 최종완료하시겠습니까?", function(strId, val) {
        				if (val == false) {
        					return;
        				}

        				this.fnComplete_callback();
        			})
        		} else {
        			this.gfnConfirm(this.dsListGoalEstablishSummary.getColumn(0, "DS_HNAME_BGVD") + ' '
        						  + this.dsListGoalEstablishSummary.getColumn(0, "DS_POSITION_BGVD")
        						  + "의 \n업무목표수립 개인면담을 최종완료하시겠습니까?", function(strId, val) {
        				if (val == false) {
        					return;
        				}

        				this.fnComplete_callback();
        			})
        		}
        	}
        }

        this.fnComplete_callback = function() {
        	var cnt = 0;
        	for (var i = 0; i < this.dsListGoalEstablish.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListGoalEstablish, i);
        		switch (flag) {
        		case "I":
        		case "U":
        		case "D":
        			cnt++;
        			break;
        		}
        	}

        	if (cnt > 0) {
        		this.gfnAlert("저장되지 않은 업무목표가 존재합니다");
        		return;
        	}

        // 	var status = this.gfnGetFormStatus(this);
        // 	if(status == "U"){
        // 		this.gfnAlert("면담자 피드백 내용이 임시저장되지 않았습니다");
        // 		return;
        // 	}

        	this.dsSaveGoalInterviewer.clearData();
        	var nrow = this.dsSaveGoalInterviewer.addRow();
        	this.dsSaveGoalInterviewer.setColumn(nrow, "TY_WRK"      , "M");
        	this.dsSaveGoalInterviewer.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSaveGoalInterviewer.setColumn(nrow, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSaveGoalInterviewer.setColumn(nrow, "SEQ_BGVDPRSN", this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "SEQ_BGVDPRSN"));
        	this.dsSaveGoalInterviewer.setColumn(nrow, "SEQ_ITVWPRSN", this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "SEQ_ITVWPRSN"));
        	this.dsSaveGoalInterviewer.setColumn(nrow, "CL_ITVWPRSN" , this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN"));

        	// 평가자2명인 경우(승인자/면담자)
        	if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "YN_APPLY") == "Y") {
        		this.dsSaveGoalInterviewer.setColumn(nrow, "DS_FDBK"     , this.txtDS_FDBK_A.text);
        	} else if (this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "CL_ITVWPRSN") == "01") {
        		this.dsSaveGoalInterviewer.setColumn(nrow, "DS_FDBK"     , this.txtDS_FDBK_B.text);
        	} else {
        		this.dsSaveGoalInterviewer.setColumn(nrow, "DS_FDBK"     , this.txtDS_FDBK.text);
        	}
        	this.dsSaveGoalInterviewer.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);

        	this.dxGridSub.updateToDataset();
        	this.dsSaveGoalEstablishInterviewComplete.clearData();
        	this.dsSaveGoalEstablishInterviewComplete.addRow();
        	this.dsSaveGoalEstablishInterviewComplete.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSaveGoalEstablishInterviewComplete.setColumn(0, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSaveGoalEstablishInterviewComplete.setColumn(0, "SEQ_BGVDPRSN", this.dsListGoalBgvdprsn.getColumn(this.dsListGoalBgvdprsn.rowposition, "SEQ_BGVDPRSN"));
        	this.dsSaveGoalEstablishInterviewComplete.setColumn(0, "SEQ_ITVWPRSN", this.dsListGoalEstablishSummary.getColumn(this.SummaryRowcount, "SEQ_ITVWPRSN"));
        	this.dsSaveGoalEstablishInterviewComplete.setColumn(0, "ID_USER"     , this.AuthClient.ID_USER);

        	if (this.dsSaveGoalEstablishInterviewComplete.rowcount == 0) return;

        	var strSvcId    = "complete_goal_estt_interview";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_goal_invw=dsSaveGoalInterviewer complete_goal_estt_interview=dsSaveGoalEstablishInterviewComplete";
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
        	var chk1 = false;
        	var chk2 = false;
        	var target1 = "";
        	var target2 = "";
        	var cnt = 0;
        	for (var i = 0; i < this.dsListGoalBgvdprsn.rowcount; i++) {
        		if (this.dsListGoalBgvdprsn.getColumn(i, "STATUS_RTNG") == 20 || this.dsListGoalBgvdprsn.getColumn(i, "STATUS_RTNG") == "ESTT")
        		{
        			cnt += 1;
        			target1 += (cnt == 1 ? '' : ((cnt == 5 || cnt == 9 || cnt == 13 || cnt == 17) ? ', \n' : ', ')) + this.dsListGoalBgvdprsn.getColumn(i, "DS_HNAME") + ' ' + this.dsListGoalBgvdprsn.getColumn(i, "DS_POSITION");
        			chk1 = true;
        		}

        		if (this.dsListGoalBgvdprsn.getColumn(i, "DS_FDBK") == "")
        		{
        			target2 += this.dsListGoalBgvdprsn.getColumn(i, "DS_HNAME") + ' ' + this.dsListGoalBgvdprsn.getColumn(i, "DS_POSITION") + ' ';
        			chk2 = true;
        		}
        	}

        	if (chk1 == true)
        	{
        		this.gfnAlert(target1
        					+ "의 \n목표수립이 아직 작성 중이므로\n전체면담완료를 할 수 없습니다.");
        		return;
        	}
        	else if (chk2 == true)
        	{
        		this.gfnConfirm(target2
        					  + "의 \n평가자 피드백 총평이 입력되지 않았습니다."
        					  + "\n\n목표수립 피평가자 전체 대상자의 \n업무목표수립 면담을 최종완료하시겠습니까?", function(strId, val) {
        			if (val == false) {
        				return;
        			}

        			this.fnFinish_callback();
        		})
        	}
        	else
        	{
        		this.gfnConfirm("목표수립 피평가자 전체 대상자의 \n업무목표수립 면담을 최종완료하시겠습니까?", function(strId, val) {
        			if (val == false) {
        				return;
        			}

        			this.fnFinish_callback();
        		})
        	}
        }

        this.fnFinish_callback = function() {

        	var status = this.gfnGetFormStatus(this);
        	if(status == "U"){
        		this.gfnAlert("면담자 피드백 내용이 임시저장되지 않았습니다");
        		return;
        	}

        	this.dxGridSub.updateToDataset();
        	this.dsSaveGoalEstablishInterviewComplete.clearData();
        	for (var i = 0; i < this.dsListGoalBgvdprsn.rowcount; i++) {
        		var nrow = this.dsSaveGoalEstablishInterviewComplete.addRow();
        		this.dsSaveGoalEstablishInterviewComplete.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsSaveGoalEstablishInterviewComplete.setColumn(nrow, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        		this.dsSaveGoalEstablishInterviewComplete.setColumn(nrow, "SEQ_BGVDPRSN", this.dsListGoalBgvdprsn.getColumn(i, "SEQ_BGVDPRSN"));
        		this.dsSaveGoalEstablishInterviewComplete.setColumn(nrow, "SEQ_ITVWPRSN", 0);
        		this.dsSaveGoalEstablishInterviewComplete.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);
        	}
        	if (this.dsSaveGoalEstablishInterviewComplete.rowcount == 0) return;

        	var strSvcId    = "complete_goal_estt_interview";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "complete_goal_estt_interview=dsSaveGoalEstablishInterviewComplete";
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
        // 평가자 피드백 총평 A
        this.divDataBottom_txtDS_FDBK_oninput = function(obj,e)
        {
        	this.btnSave.set_enable(true);
        };
        // 평가자 피드백 총평 A
        this.divDataBottom_txtDS_FDBK_A_oninput = function(obj,e)
        {
        	this.btnSave.set_enable(true);
        };
        // 평가자 피드백 총평 B
        this.divDataBottom_txtDS_FDBK_B_oninput = function(obj,e)
        {
        	this.btnSave.set_enable(true);
        };

        this.dsListGoalEstablish_onvaluechanged = function(obj,e)
        {
        	var status = this.gfnGetFormStatus(this);
        	if(status == "U")
        	{
        		this.btnDetail.set_enable(false);
        		this.btnSave.set_enable(true);
        	} else {
        		this.btnDetail.set_enable(true);
        		this.btnSave.set_enable(false);
        	}

        // 	if(e.oldvalue != e.newvalue) {
        // 		this.btnSave.set_enable(true);
        // 	}
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
        	this.dsSelectRtngStd.setColumn(0, "CD_RTNG_TYPE", "JA10");
        	this.dsSelectRtngStd.setColumn(0, "ID_SCREEN", "DAJ_RTNG_GOAL_ESTT");
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
            this.addEventHandler("ondragmove",this.form_ondragmove,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
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
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.btnGoal_Estt_Itvw.addEventHandler("onclick",this.btnGoal_Estt_Itvw_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.btnDetail.addEventHandler("onclick",this.btnDetail_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.btnNotice.addEventHandler("onclick",this.btnNotice_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.btnTarget.addEventHandler("onclick",this.btnTarget_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.btnRemove.addEventHandler("onclick",this.btnRemove_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.txtDS_FDBK.addEventHandler("oninput",this.divDataBottom_txtDS_FDBK_oninput,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.tabData.tab1.form.txtDS_FDBK_A.addEventHandler("oninput",this.divDataBottom_txtDS_FDBK_A_oninput,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.tabData.tab2.form.txtDS_FDBK_B.addEventHandler("oninput",this.divDataBottom_txtDS_FDBK_A_oninput,this);
            this.dsListGoalEstablish.addEventHandler("onvaluechanged",this.dsListGoalEstablish_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_RTNG_GOAL_ESTT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
