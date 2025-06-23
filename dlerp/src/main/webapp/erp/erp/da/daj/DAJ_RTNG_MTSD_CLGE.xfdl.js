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
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListTemp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSummary", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListCtrn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRtngStd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAdditional", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_BEGN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_END\" type=\"STRING\" size=\"256\"/><Column id=\"CTN_WRK\" type=\"INT\" size=\"256\"/><Column id=\"SPNT\" type=\"STRING\" size=\"256\"/><Column id=\"SPLM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_RTNGPRSN_SELECT</Col></Row><Row><Col id=\"TARGET\">select_summary</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_SUMMARY_SELECT</Col></Row><Row><Col id=\"TARGET\">select_clge</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_SELECT</Col></Row><Row><Col id=\"TARGET\">select_ctrn</Col><Col id=\"SP\">DAJPR_RTNG_CTRN_SELECT</Col></Row><Row><Col id=\"TARGET\">save_clge</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_SAVE</Col></Row><Row><Col id=\"TARGET\">complete_clge</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_COMPLETE</Col></Row><Row><Col id=\"TARGET\">select_clge_additional</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_ADDITIONAL_SELECT</Col></Row><Row><Col id=\"TARGET\">save_clge_additional</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_ADDITIONAL_SAVE</Col></Row><Row><Col id=\"TARGET\">select_rtng_std</Col><Col id=\"SP\">DAXPR_RTNG_STD_CODEFIND</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PTCP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
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

            obj = new Div("divSplitter","30%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("#c9c9c9");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("동료다면평가");
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

            obj = new Div("divSplitter2","0","185","100%","5",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_background("#c9c9c9");
            obj.set_cursor("ns-resize");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter2:5",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divStatus","0","0",null,"50","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staStatusOpen","0","5","190","40",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divStatus.form);
            obj.set_taborder("2");
            obj.set_text("평가오픈");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Malgun Gothic\"");
            obj.set_background("#edecef");
            this.divData.form.divDataRight.form.divDataTop.form.divStatus.addChild(obj.name, obj);

            obj = new Static("staStatusEvaluating","staStatusOpen:5","5","190","40",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divStatus.form);
            obj.set_taborder("0");
            obj.set_text("평가중");
            obj.set_textAlign("center");
            obj.set_background("#edecef");
            obj.set_font("bold 14px/normal \"Malgun Gothic\"");
            this.divData.form.divDataRight.form.divDataTop.form.divStatus.addChild(obj.name, obj);

            obj = new Static("staStatusCompleted","staStatusEvaluating:5","5","190","40",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divStatus.form);
            obj.set_taborder("1");
            obj.set_text("평가완료");
            obj.set_textAlign("center");
            obj.set_background("#edecef");
            obj.set_font("bold 14px/normal \"Malgun Gothic\"");
            this.divData.form.divDataRight.form.divDataTop.form.divStatus.addChild(obj.name, obj);

            obj = new Div("divSummaryBtns","0","divStatus:-40",null,"27","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","80","27","85",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.form);
            obj.set_taborder("1");
            obj.set_text("임시저장");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.addChild(obj.name, obj);

            obj = new Button("btnSubmit",null,"0","80","27","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.form);
            obj.set_taborder("0");
            obj.set_text("평가완료");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.addChild(obj.name, obj);

            obj = new Button("btnReject",null,"0","80","27","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.form);
            obj.set_taborder("2");
            obj.set_text("평가거절");
            obj.set_visible("false");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.addChild(obj.name, obj);

            obj = new Div("divSummary","0","55",null,"120","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN","0","0","100","59",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("2");
            obj.set_text("평가대상자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staRTNGPRSN","0","staBGVDPRSN:-1","100","59",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("3");
            obj.set_text("다면평가자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_ID_SABUN","staBGVDPRSN:-1","0","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("1");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_ID_SABUN_bg","staBGVDPRSN_ID_SABUN:-1","staBGVDPRSN_ID_SABUN:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_EMPTYPE","staBGVDPRSN:-1","staBGVDPRSN_ID_SABUN:-1","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("1");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_EMPTYPE_bg","staBGVDPRSN_DS_EMPTYPE:-1","staBGVDPRSN_DS_EMPTYPE:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staRTNGPRSN_ID_SABUN","staRTNGPRSN:-1","staBGVDPRSN_DS_EMPTYPE:-1","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("1");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staRTNGPRSN_ID_SABUN_bg","staRTNGPRSN_ID_SABUN:-1","staRTNGPRSN_ID_SABUN:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staRTNGPRSN_DS_EMPTYPE","staRTNGPRSN:-1","staRTNGPRSN_ID_SABUN:-1","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("1");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staRTNGPRSN_DS_EMPTYPE_bg","staRTNGPRSN_DS_EMPTYPE:-1","staRTNGPRSN_DS_EMPTYPE:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_HNAME","staBGVDPRSN_ID_SABUN_bg:-1","staBGVDPRSN_ID_SABUN_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("10");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_HNAME_bg","staBGVDPRSN_DS_HNAME:-1","staBGVDPRSN_DS_HNAME:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_DEPT","staBGVDPRSN_DS_EMPTYPE_bg:-1","staBGVDPRSN_DS_EMPTYPE_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("12");
            obj.set_text("평가조직");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_DEPT_bg","staBGVDPRSN_DS_DEPT:-1","staBGVDPRSN_DS_DEPT:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staRTNGPRSN_DS_HNAME","staRTNGPRSN_ID_SABUN_bg:-1","staRTNGPRSN_ID_SABUN_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("14");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staRTNGPRSN_DS_HNAME_bg","staRTNGPRSN_DS_HNAME:-1","staRTNGPRSN_DS_HNAME:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staRTNGPRSN_DS_DEPT","staRTNGPRSN_DS_EMPTYPE_bg:-1","staRTNGPRSN_DS_EMPTYPE_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("16");
            obj.set_text("평가조직");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staRTNGPRSN_DS_DEPT_bg","staRTNGPRSN_DS_DEPT:-1","staRTNGPRSN_DS_DEPT:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_POSITION","staBGVDPRSN_DS_HNAME_bg:-1","staBGVDPRSN_DS_HNAME_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("18");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_POSITION_bg","staBGVDPRSN_DS_POSITION:-1","staBGVDPRSN_DS_POSITION:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_DUTY","staBGVDPRSN_DS_DEPT_bg:-1","staBGVDPRSN_DS_DEPT_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("20");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN_DS_DUTY_bg","staBGVDPRSN_DS_DUTY:-1","staBGVDPRSN_DS_DUTY:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staRTNGPRSN_DS_POSITION","staRTNGPRSN_DS_HNAME_bg:-1","staRTNGPRSN_DS_HNAME_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("22");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staRTNGPRSN_DS_POSITION_bg","staRTNGPRSN_DS_POSITION:-1","staRTNGPRSN_DS_POSITION:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staRTNGPRSN_DS_DUTY","staRTNGPRSN_DS_DEPT_bg:-1","staRTNGPRSN_DS_DEPT_bg:-30","80","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("24");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staRTNGPRSN_DS_DUTY_bg","staRTNGPRSN_DS_DUTY:-1","staRTNGPRSN_DS_DUTY:-30","150","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter2:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("동료다면평가 역량");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","215",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divAdditional","0","objGridSub:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta03","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form);
            obj.set_taborder("0");
            obj.set_text("나는 계속해서 이 직원과 한 팀이 되어 일하고 싶다");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta03:5","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form);
            obj.set_taborder("0");
            obj.set_text("그렇지 않다 <---------------------------------------------------------------------------------------------------------------------------------------> 그렇다");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.addChild(obj.name, obj);

            obj = new Radio("rdoCTN_WRK","0","sta04:5","830","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divDataRight_form_divDataBottom_form_divAdditional_form_rdoCTN_WRK_innerdataset = new nexacro.NormalDataset("divData_form_divDataRight_form_divDataBottom_form_divAdditional_form_rdoCTN_WRK_innerdataset", obj);
            divData_form_divDataRight_form_divDataBottom_form_divAdditional_form_rdoCTN_WRK_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">0</Col><Col id=\"codecolumn\">0</Col></Row><Row><Col id=\"datacolumn\">1</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">2</Col><Col id=\"codecolumn\">2</Col></Row><Row><Col id=\"datacolumn\">3</Col><Col id=\"codecolumn\">3</Col></Row><Row><Col id=\"datacolumn\">4</Col><Col id=\"codecolumn\">4</Col></Row><Row><Col id=\"datacolumn\">5</Col><Col id=\"codecolumn\">5</Col></Row><Row><Col id=\"datacolumn\">6</Col><Col id=\"codecolumn\">6</Col></Row><Row><Col id=\"datacolumn\">7</Col><Col id=\"codecolumn\">7</Col></Row><Row><Col id=\"datacolumn\">8</Col><Col id=\"codecolumn\">8</Col></Row><Row><Col id=\"datacolumn\">9</Col><Col id=\"codecolumn\">9</Col></Row><Row><Col id=\"datacolumn\">10</Col><Col id=\"codecolumn\">10</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divDataRight_form_divDataBottom_form_divAdditional_form_rdoCTN_WRK_innerdataset);
            obj.set_text("매월");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.addChild(obj.name, obj);

            obj = new Static("staSPNT","0","87","250","60",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form);
            obj.set_taborder("4");
            obj.set_text("1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.addChild(obj.name, obj);

            obj = new TextArea("txtSPNT","staSPNT:-1","staSPNT:-60",null,"60","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form);
            obj.set_taborder("2");
            obj.set_maxlength("2000");
            obj.set_rtl("");
            obj.set_wordWrap("char");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.addChild(obj.name, obj);

            obj = new Static("staSPLM","0","staSPNT:-1","250","60",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form);
            obj.set_taborder("5");
            obj.set_text("2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.addChild(obj.name, obj);

            obj = new TextArea("txtSPLM","staSPLM:-1","staSPLM:-60",null,"60","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form);
            obj.set_taborder("3");
            obj.set_maxlength("2000");
            obj.set_wordWrap("char");
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.addChild(obj.name, obj);
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

            obj = new BindItem("item6","divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.rdoCTN_WRK","value","dsListAdditional","CTN_WRK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.txtSPNT","value","dsListAdditional","SPNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.txtSPLM","value","dsListAdditional","SPLM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.edtCD_RTNG_ASBLNEXT","value","dsSearch","DS_RTNG_ASBLNEXT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAJ_RTNG_MTSD_CLGE.xfdl", function() {
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
        	this.dxGrid    = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.divDataBottom.form.objGridSub;

        	// 검색영역
        	this.ccfCD_CORP  = this.divSearch.form.ccfCD_CORP;
        	this.ctclYR_RTNG = this.divSearch.form.ctclYR_RTNG;
        	this.ccfID_RTNG  = this.divSearch.form.ccfID_RTNG;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        	// 상태표현
        	this.staStatusOpen       = this.divData.form.divDataRight.form.divDataTop.form.divStatus.form.staStatusOpen;		// 평가오픈
        	this.staStatusEvaluating = this.divData.form.divDataRight.form.divDataTop.form.divStatus.form.staStatusEvaluating;	// 평가중
        	this.staStatusCompleted  = this.divData.form.divDataRight.form.divDataTop.form.divStatus.form.staStatusCompleted;	// 평가완료

        	// 평가대상자
        	this.staBGVDPRSN_ID_SABUN_bg    = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_ID_SABUN_bg;		// 사번
        	this.staBGVDPRSN_DS_HNAME_bg    = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_HNAME_bg;		// 성명
        	this.staBGVDPRSN_DS_POSITION_bg = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_POSITION_bg;	// 직급
        	this.staBGVDPRSN_DS_EMPTYPE_bg  = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_EMPTYPE_bg; 	// 직종
        	this.staBGVDPRSN_DS_DEPT_bg     = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_DEPT_bg;		// 평가조직
        	this.staBGVDPRSN_DS_DUTY_bg     = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_DUTY_bg;		// 직책

        	// 평가자(검토자)
        	this.staRTNGPRSN_ID_SABUN_bg    = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staRTNGPRSN_ID_SABUN_bg;		// 사번
        	this.staRTNGPRSN_DS_HNAME_bg    = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staRTNGPRSN_DS_HNAME_bg;		// 성명
        	this.staRTNGPRSN_DS_POSITION_bg = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staRTNGPRSN_DS_POSITION_bg;	// 직급
        	this.staRTNGPRSN_DS_EMPTYPE_bg  = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staRTNGPRSN_DS_EMPTYPE_bg; 	// 직종
        	this.staRTNGPRSN_DS_DEPT_bg     = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staRTNGPRSN_DS_DEPT_bg;		// 평가조직
        	this.staRTNGPRSN_DS_DUTY_bg     = this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staRTNGPRSN_DS_DUTY_bg;		// 직책

        	// 평가 버튼
        	this.btnSave   = this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.form.btnSave;	// 임시저장 버튼
        	this.btnSubmit = this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.form.btnSubmit;	// 평가완료 버튼
        	this.btnReject = this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.form.btnReject;	// 평가거절 버튼

        	// 강점/보완
        	this.rdoCTN_WRK = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.rdoCTN_WRK;		// 계속근무 점수
        	this.staSPNT    = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.staSPNT;		// 강점
        	this.txtSPNT    = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.txtSPNT;
        	this.staSPLM    = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.staSPLM;		// 보완
        	this.txtSPLM    = this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.txtSPLM;
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_RTNG_MTSD_CLGE_POOL_BGVDPRSN");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAJ_RTNG_MTSD_CLGE");
        	this.dxGridSub.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGridSub.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        	this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "DS_ITEM_DFNT"), "displaytype", "decoratetext");

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
        	// 동료다면평가 피평가자 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_PTCP", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_RTNG", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");

        	// 동료다면평가 역량 요약 조회
        	this.dsSelectSummary = new Dataset();
        	this.dsSelectSummary.addColumn("CD_CORP", "string");
        	this.dsSelectSummary.addColumn("ID_RTNG", "string");
        	this.dsSelectSummary.addColumn("ID_SABUN_BGVD", "string");
        	this.dsSelectSummary.addColumn("ID_SABUN_RTNG", "string");

        	// 동료다면평가 역량 평가항목 조회
        	this.dsSelectClge = new Dataset();
        	this.dsSelectClge.addColumn("CD_CORP", "string");
        	this.dsSelectClge.addColumn("ID_RTNG", "string");
        	this.dsSelectClge.addColumn("ID_SABUN_BGVD", "string");
        	this.dsSelectClge.addColumn("ID_SABUN_RTNG", "string");

        	// 동료다면평가 역량 평가척도 콤보 조회
        	this.dsSelectCtrn = new Dataset();
        	this.dsSelectCtrn.addColumn("CD_CORP", "string");
        	this.dsSelectCtrn.addColumn("ID_RTNG", "string");

        	// 동료다면평가 역량 평가척도 저장
        	this.dsSaveClge = new Dataset();
        	this.dsSaveClge.addColumn("CD_CORP", "string");
        	this.dsSaveClge.addColumn("ID_RTNG", "string");
        	this.dsSaveClge.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSaveClge.addColumn("SEQ_CLGE_POOL", "int");
        	this.dsSaveClge.addColumn("SEQ_ITEM", "int");
        	this.dsSaveClge.addColumn("CD_CTRN", "string");
        	this.dsSaveClge.addColumn("ID_SABUN", "string");

        	// 동료다면평가 역량 평가완료
        	this.dsCompleteClge = new Dataset();
        	this.dsCompleteClge.addColumn("CD_CORP", "string");
        	this.dsCompleteClge.addColumn("ID_RTNG", "string");
        	this.dsCompleteClge.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsCompleteClge.addColumn("SEQ_CLGE_POOL", "int");
        	this.dsCompleteClge.addColumn("ID_SABUN", "string");

        	// 동료다면평가 역량 추가 평가항목 조회
        	this.dsSelectAdditional = new Dataset();
        	this.dsSelectAdditional.addColumn("CD_CORP", "string");
        	this.dsSelectAdditional.addColumn("ID_RTNG", "string");
        	this.dsSelectAdditional.addColumn("ID_SABUN_BGVD", "string");
        	this.dsSelectAdditional.addColumn("ID_SABUN_RTNG", "string");

        	// 동료다면평가 역량 추가 평가항목 저장
        	this.dsSaveClgeAdditional = new Dataset();
        	this.dsSaveClgeAdditional.addColumn("CD_CORP", "string");
        	this.dsSaveClgeAdditional.addColumn("ID_RTNG", "string");
        	this.dsSaveClgeAdditional.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSaveClgeAdditional.addColumn("SEQ_CLGE_POOL", "int");
        	this.dsSaveClgeAdditional.addColumn("CTN_WRK", "int");
        	this.dsSaveClgeAdditional.addColumn("SPNT", "string");
        	this.dsSaveClgeAdditional.addColumn("SPLM", "string");
        	this.dsSaveClgeAdditional.addColumn("ID_SABUN", "string");

        	// 리더십평가회차 조회
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

        	// 동료다면평가 추가 역량평가
        	this.staSPNT.set_text("1. 가장 큰 강점은 무엇이며<br/>   그렇게 생각하는 이유는 무엇입니까?");
        	this.staSPLM.set_text("2. 가장 보완해야 할 점은 무엇이며<br/>   그렇게 생각하는 이유는 무엇입니까?");

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

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_PTCP" , this.dsSearch.getColumn(0, "TY_PTCP"));
        	this.dsSelect.setColumn(0, "CD_CORP" , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_RTNG" , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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

        this.fnSelectSub = function() {
        	this.gfnGridBeforeSelect(this.dxGridSub);

        	// 평가대상자/평가자 요약 정보
        	this.dsSelectSummary.clearData();
        	this.dsSelectSummary.addRow();
        	this.dsSelectSummary.setColumn(0, "CD_CORP" , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectSummary.setColumn(0, "ID_RTNG" , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSelectSummary.setColumn(0, "ID_SABUN_BGVD", this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"));
        	this.dsSelectSummary.setColumn(0, "ID_SABUN_RTNG", this.dsSearch.getColumn(0, "ID_SABUN"));

        	// 동료다면평가 역량 평가항목 조회
        	this.dsSelectClge.clearData();
        	this.dsSelectClge.addRow();
        	this.dsSelectClge.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectClge.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSelectClge.setColumn(0, "ID_SABUN_BGVD", this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"));
        	this.dsSelectClge.setColumn(0, "ID_SABUN_RTNG", this.dsSearch.getColumn(0, "ID_SABUN"));

        	// 동료다면평가 역량 평가척도 조회
        	this.dsSelectCtrn.clearData();
        	this.dsSelectCtrn.addRow();
        	this.dsSelectCtrn.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectCtrn.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));

        	// 동료다면평가 역량 추가 평가항목 조회
        	this.dsSelectAdditional.clearData();
        	this.dsSelectAdditional.addRow();
        	this.dsSelectAdditional.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectAdditional.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSelectAdditional.setColumn(0, "ID_SABUN_BGVD", this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"));
        	this.dsSelectAdditional.setColumn(0, "ID_SABUN_RTNG", this.dsSearch.getColumn(0, "ID_SABUN"));

        	var strSvcId    = "select_clge";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_clge=dsSelectClge select_summary=dsSelectSummary select_ctrn=dsSelectCtrn select_clge_additional=dsSelectAdditional";
        	var outData     = "dsListSub=select_clge0 dsListSummary=select_summary0 dsListCtrn=select_ctrn0 dsListAdditional=select_clge_additional0";
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
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {

        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

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
        	// 동료 POOL 제출/검토
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnClearSummary();
        		this.gfnGridClear(this.dxGridSub);
        	}
        	// 동료다면평가 요약, 역량 질문지 및 평가척도 조회
        	else if (svcID == "select_clge") {
        		// 평가대상자
        		this.staBGVDPRSN_ID_SABUN_bg.set_text(this.dsListSummary.getColumn(0, "ID_SABUN_BGVD"));		// 사번
         		this.staBGVDPRSN_DS_HNAME_bg.set_text(this.dsListSummary.getColumn(0, "DS_HNAME_BGVD"));		// 성명
        		this.staBGVDPRSN_DS_POSITION_bg.set_text(this.dsListSummary.getColumn(0, "DS_POSITION_BGVD"));	// 직급
        		this.staBGVDPRSN_DS_EMPTYPE_bg.set_text(this.dsListSummary.getColumn(0, "DS_EMPTYPE_BGVD"));	// 직종
        		this.staBGVDPRSN_DS_DEPT_bg.set_text(this.dsListSummary.getColumn(0, "DS_DEPT_BGVD"));			// 평가조직
        		this.staBGVDPRSN_DS_DUTY_bg.set_text(this.dsListSummary.getColumn(0, "DS_DUTY_BGVD"));			// 직책

        		// 평가자(검토자)
        		this.staRTNGPRSN_ID_SABUN_bg.set_text(this.dsListSummary.getColumn(0, "ID_SABUN_RTNG"));		// 사번
        		this.staRTNGPRSN_DS_HNAME_bg.set_text(this.dsListSummary.getColumn(0, "DS_HNAME_RTNG"));		// 성명
        		this.staRTNGPRSN_DS_POSITION_bg.set_text(this.dsListSummary.getColumn(0, "DS_POSITION_RTNG"));	// 직급
        		this.staRTNGPRSN_DS_EMPTYPE_bg.set_text(this.dsListSummary.getColumn(0, "DS_EMPTYPE_RTNG")); 	// 직종
        		this.staRTNGPRSN_DS_DEPT_bg.set_text(this.dsListSummary.getColumn(0, "DS_DEPT_RTNG"));			// 평가조직
        		this.staRTNGPRSN_DS_DUTY_bg.set_text(this.dsListSummary.getColumn(0, "DS_DUTY_RTNG"));			// 직책

        		// 버튼 상태 변경
        		this.fnCheckExtensionButtonStatus();

        		// 동료다면평가 역량 높이 조정
        		this.fnSetGridSubHeight();

        		// 그리드 답변 콤보 설정
        		var colCD_CTRN = this.dxGridSub.getBindCellIndex("body", "CD_CTRN");
        		this.dxGridSub.setCellProperty("body", colCD_CTRN, "combocodecol", "CD_CTRN");
        		this.dxGridSub.setCellProperty("body", colCD_CTRN, "combodatacol", "DS_CTRN_USE");
        		this.dxGridSub.setCellProperty("body", colCD_CTRN, "combodataset", "dsListCtrn");
        		this.dxGridSub.setCellProperty("body", colCD_CTRN, "edittype", "combo");

        		this.rdoCTN_WRK.set_value(this.dsListAdditional.getColumn(0, "CTN_WRK"));	// 계속근무 점수
        		this.txtSPNT.set_value(this.dsListAdditional.getColumn(0, "SPNT"));			// 강점
        		this.txtSPLM.set_value(this.dsListAdditional.getColumn(0, "SPLM"));			// 보완
        	}
        	// 동료다면평가 평가척도 저장
        	else if (svcID == "save_clge") {
        		this.fnSelectSub();
        		this.FormBtns.Select.click();
        	}
        	// 동료다면평가 완료
        	else if (svcID == "complete_clge") {
        		this.fnSelectSub();
        		this.FormBtns.Select.click();
        	}
        	// 평가대상자 존재 여부에 따른 화면 제어
        	else if (svcID == "select_rtng_std") {
        		if (this.dsListRtngStd.rowcount != 0) {
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
        	// 평가완료 버튼 활성화
        	var CD_CTRN_ALL = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		if (this.dsListSub.getColumn(i, "CD_CTRN") == undefined) {
        			CD_CTRN_ALL = false;
        			break;
        		}
        	}

        	if (this.dsListAdditional.getColumn(0, "SPNT").length == 0 ||	// 강점
        		this.dsListAdditional.getColumn(0, "SPLM").length == 0		// 보완
        	) {
        		CD_CTRN_ALL = false;
        	}

        	if (CD_CTRN_ALL) {
        		this.btnSubmit.set_enable(true);
        	} else {
        		this.btnSubmit.set_enable(false);
        	}

        	// 추가 질문 활성화
        	this.rdoCTN_WRK.set_enable(true);
        	this.txtSPNT.set_enable(true);
        	this.txtSPLM.set_enable(true);

        	// 평가오픈
        	var YN_OPN  = this.dsListSummary.getColumn(0, "YN_OPN");
        	this.staStatusOpen.set_background("#edecef");
        	this.staStatusOpen.set_color("black");
        	if (YN_OPN == "Y") {
        		this.staStatusOpen.set_background("lightgray");
        		this.staStatusOpen.set_color("red");
        		this.staStatusEvaluating.set_background("#edecef");
        		this.staStatusEvaluating.set_color("black");
        		this.staStatusCompleted.set_background("#edecef");
        		this.staStatusCompleted.set_color("black");

        		this.btnSave.set_enable(true);
        	}

        	// 평가중
        	var YN_RTNG = this.dsListSummary.getColumn(0, "YN_RTNG");
        	this.staStatusEvaluating.set_background("#edecef");
        	this.staStatusEvaluating.set_color("black");
        	if (YN_RTNG == "Y") {
        		this.staStatusOpen.set_background("#edecef");
        		this.staStatusOpen.set_color("black");
        		this.staStatusEvaluating.set_background("lightgray");
        		this.staStatusEvaluating.set_color("red");
        		this.staStatusCompleted.set_background("#edecef");
        		this.staStatusCompleted.set_color("black");
        	}

        	// 평가완료
        	var YN_CPLT = this.dsListSummary.getColumn(0, "YN_CPLT");
        	this.staStatusCompleted.set_background("#edecef");
        	this.staStatusCompleted.set_color("black");
        	if (YN_CPLT == "Y") {
        		this.staStatusOpen.set_background("#edecef");
        		this.staStatusOpen.set_color("black");
        		this.staStatusEvaluating.set_background("#edecef");
        		this.staStatusEvaluating.set_color("black");
        		this.staStatusCompleted.set_background("lightgray");
        		this.staStatusCompleted.set_color("red");

        		this.btnSave.set_enable(false);
        		this.btnSubmit.set_enable(false);
        		this.rdoCTN_WRK.set_enable(false);
        		this.txtSPNT.set_enable(false);
        		this.txtSPLM.set_enable(false);
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
        		dsUserParam.setColumn(nrow, "CD_RTNG_TYPE", "JA01");
        		dsUserParam.setColumn(nrow, "ID_SCREEN"   , "DAJ_RTNG_MTSD_CLGE");
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
        		this.gfnGridClear(this.dxGridSub);
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

        this.fnClearSummary = function() {
        	// 평가상태
        	this.staStatusOpen.set_background("#edecef");
        	this.staStatusOpen.set_color("black");
        	this.staStatusEvaluating.set_background("#edecef");
        	this.staStatusEvaluating.set_color("black");
        	this.staStatusCompleted.set_background("#edecef");
        	this.staStatusCompleted.set_color("black");

        	// 평가대상자
        	this.staBGVDPRSN_ID_SABUN_bg.set_text("");		// 사번
        	this.staBGVDPRSN_DS_HNAME_bg.set_text("");		// 성명
        	this.staBGVDPRSN_DS_POSITION_bg.set_text("");	// 직급
        	this.staBGVDPRSN_DS_EMPTYPE_bg.set_text("");	// 직종
        	this.staBGVDPRSN_DS_DEPT_bg.set_text("");		// 평가조직
        	this.staBGVDPRSN_DS_DUTY_bg.set_text("");		// 직책

        	// 평가자(검토자)
        	this.staRTNGPRSN_ID_SABUN_bg.set_text("");		// 사번
        	this.staRTNGPRSN_DS_HNAME_bg.set_text("");		// 성명
        	this.staRTNGPRSN_DS_POSITION_bg.set_text("");	// 직급
        	this.staRTNGPRSN_DS_EMPTYPE_bg.set_text(""); 	// 직종
        	this.staRTNGPRSN_DS_DEPT_bg.set_text("");		// 평가조직
        	this.staRTNGPRSN_DS_DUTY_bg.set_text("");		// 직책

        	// 추가 항목
        	this.rdoCTN_WRK.set_value(0);	// 계속근무 점수
        	this.txtSPNT.set_value("");		// 강점
        	this.txtSPLM.set_value("");		// 보완
        }

        // 임시저장버튼 클릭이벤트
        this.btnSave_onclick = function(obj, e) {
        	var msg = "동료다면평가를 임시저장하시겠습니까?";
        	this.gfnConfirm(msg, function(strId, val) {
        		if (val == false) {
        			return;
        		}

        		if (this.rdoCTN_WRK.value == 0) {
        			this.gfnConfirm("'나는 계속해서 이 직원과 한 팀이 되어 일하고 싶다.'문항의 응답이\n디폴트 값인 0으로 확인됩니다. 이대로 두시겠습니까?\n다시 한 번 생각해서 체크해 주십시오.", function(strId, val) {
        				if (val == false) {
        					return;
        				}

        				this.btnSave_onclick_callback();
        			})
        		} else {
        			this.btnSave_onclick_callback();
        		}
        	})
        }

        this.btnSave_onclick_callback = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();
        	this.dsSaveClge.clearData();
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch (flag) {
        		case "U":
        			var nrow = this.dsSaveClge.addRow();
        			this.dsSaveClge.setColumn(nrow, "CD_CORP"      , this.dsListSub.getColumn(i, "CD_CORP"));
        			this.dsSaveClge.setColumn(nrow, "ID_RTNG"      , this.dsListSub.getColumn(i, "ID_RTNG"));
        			this.dsSaveClge.setColumn(nrow, "SEQ_BGVDPRSN" , this.dsListSummary.getColumn(0, "SEQ_BGVDPRSN"));
        			this.dsSaveClge.setColumn(nrow, "SEQ_CLGE_POOL", this.dsListSummary.getColumn(0, "SEQ_CLGE_POOL"));
        			this.dsSaveClge.setColumn(nrow, "SEQ_ITEM"     , this.dsListSub.getColumn(i, "SEQ_ITEM"));
        			this.dsSaveClge.setColumn(nrow, "CD_CTRN"      , this.dsListSub.getColumn(i, "CD_CTRN"));
        			this.dsSaveClge.setColumn(nrow, "ID_SABUN"     , this.AuthClient.ID_USER);
        			break;
        		}
        	}

        	this.dsSaveClgeAdditional.clearData();
        	var nrow = this.dsSaveClgeAdditional.addRow();
        	this.dsSaveClgeAdditional.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSaveClgeAdditional.setColumn(nrow, "ID_RTNG"      , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSaveClgeAdditional.setColumn(nrow, "SEQ_BGVDPRSN" , this.dsListSummary.getColumn(0, "SEQ_BGVDPRSN"));
        	this.dsSaveClgeAdditional.setColumn(nrow, "SEQ_CLGE_POOL", this.dsListSummary.getColumn(0, "SEQ_CLGE_POOL"));
        	this.dsSaveClgeAdditional.setColumn(nrow, "CTN_WRK"      , this.rdoCTN_WRK.value);
        	this.dsSaveClgeAdditional.setColumn(nrow, "SPNT"         , this.txtSPNT.value);
        	this.dsSaveClgeAdditional.setColumn(nrow, "SPLM"         , this.txtSPLM.value);
        	this.dsSaveClgeAdditional.setColumn(nrow, "ID_SABUN"     , this.AuthClient.ID_USER);

        	var inDataText = "";
        	if (this.dsSaveClge.rowcount > 0) {
        		inDataText += "save_clge=dsSaveClge"
        	}
        	if (this.dsSaveClgeAdditional.rowcount > 0) {
        		if (inDataText.length > 0) {
        			inDataText += " "
        		}
        		inDataText += "save_clge_additional=dsSaveClgeAdditional"
        	}

        	var strSvcId    = "save_clge";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = inDataText;
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

        // 평가완료버튼 클릭이벤트
        this.btnSubmit_onclick = function(obj, e) {
        	this.gfnConfirm("동료다면평가를 제출하시겠습니까?", function(strId, val) {
        		if (val == false) {
        			return;
        		}

        // 		if (this.rdoCTN_WRK.value == 0) {
        // 			//this.gfnConfirm("'나는 계속새서 이 직원과 한 팀이 되어 일하고 싶다' 항목을\n'0' 선택하였습니다. 맞습니까?", function(strId, val) {
        // 			this.gfnConfirm("디폴트 값인 0으로 확인됩니다. 이대로 두시겠습니까?\n다시 한 번 생각해서 체크해 주십시오.", function(strId, val) {
        // 				if (val == false) {
        // 					return;
        // 				}
        //
        // 				this.btnSubmit_onclick_callback();
        // 			})
        // 		} else {
        // 			this.btnSubmit_onclick_callback();
        // 		}

        		this.btnSubmit_onclick_callback();
        	})
        }

        this.btnSubmit_onclick_callback = function() {
        	this.dxGridSub.updateToDataset();
        	this.dsCompleteClge.clearData();
        	var nrow = this.dsCompleteClge.addRow();
        	this.dsCompleteClge.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsCompleteClge.setColumn(nrow, "ID_RTNG"      , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsCompleteClge.setColumn(nrow, "SEQ_BGVDPRSN" , this.dsListSummary.getColumn(0, "SEQ_BGVDPRSN"));
        	this.dsCompleteClge.setColumn(nrow, "SEQ_CLGE_POOL", this.dsListSummary.getColumn(0, "SEQ_CLGE_POOL"));
        	this.dsCompleteClge.setColumn(nrow, "ID_SABUN"     , this.AuthClient.ID_USER);

        	if (this.dsCompleteClge.rowcount == 0) return;

        	var strSvcId    = "complete_clge";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "complete_clge=dsCompleteClge";
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

        // 선정완료버튼 클릭이벤트
        this.btnSelection_onclick = function(obj, e) {
        	var msg = "다면평가를 위한 동료 POOL의 상태를\n선정완료로 변경하시겠습니까?";
        	this.gfnConfirm(msg, function(strId, val) {
        		if (val == false) {
        			return;
        		}
        		this.dxGridSub.updateToDataset();
        		this.dsPoolSelection.clearData();
        		var nrow = this.dsPoolSelection.addRow();
        		this.dsPoolSelection.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsPoolSelection.setColumn(nrow, "ID_RTNG"      , this.dsSearch.getColumn(0, "ID_RTNG"));
        		this.dsPoolSelection.setColumn(nrow, "SEQ_BGVDPRSN" , this.dsList.getColumn(this.dsList.rowposition, "SEQ_BGVDPRSN"));
        		this.dsPoolSelection.setColumn(nrow, "ID_USER"      , this.AuthClient.ID_USER);

        		if (this.dsPoolSelection.rowcount == 0) return;

        		var strSvcId    = "pool_selection";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "pool_selection=dsPoolSelection";
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
        	})
        }

        // 동료다면평가 그리드 클릭 이벤트
        this.fnGridCellPosChanged = function(obj, e) {
        	if (e.row != -1 && e.oldrow != e.row) {
        		this.fnSelectSub();
        	}
        }

        this.fnSetGridSubHeight = function() {
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var text = this.dsListSub.getColumn(i, "DS_ITEM_DFNT");
        		if (text == undefined || text == "") {
        			this.dxGridSub.setRealRowSize(i, 30);
        			continue;
        		}

        		var arr = text.split("<br/>")
        		if (arr.length > 1) {
        			var height = (arr.length * 17) + 10;
        			this.dxGridSub.setRealRowSize(i, height);
        		}
        	}
        }

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
        	this.dsSelectRtngStd.setColumn(0, "CD_RTNG_TYPE", "JA01");
        	this.dsSelectRtngStd.setColumn(0, "ID_SCREEN", "DAJ_RTNG_MTSD_CLGE");
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
            this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.form.btnSubmit.addEventHandler("onclick",this.btnSubmit_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.form.btnReject.addEventHandler("onclick",this.btnSubmit_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staRTNGPRSN.addEventHandler("onclick",this.divData_divDataRight_divDataTop_divSummary_staRTNGPRSN_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_ID_SABUN.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_EMPTYPE.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_EMPTYPE_bg.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staBGVDPRSN_DS_EMPTYPE_bg_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staRTNGPRSN_ID_SABUN.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staRTNGPRSN_DS_EMPTYPE.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_HNAME.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_DEPT.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staRTNGPRSN_DS_HNAME.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staRTNGPRSN_DS_DEPT.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_POSITION.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staBGVDPRSN_DS_DUTY.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staRTNGPRSN_DS_POSITION.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.form.staRTNGPRSN_DS_DUTY.addEventHandler("onclick",this.divData_divDataRight_divDataTop_staCD_CORP_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.staSPNT.addEventHandler("onclick",this.divData_divDataRight_divDataTop_divSummary_staRTNGPRSN_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.txtSPNT.addEventHandler("onchanged",this.divData_divDataRight_divAdditional_txtSPNT_onchanged,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.staSPLM.addEventHandler("onclick",this.divData_divDataRight_divDataTop_divSummary_staRTNGPRSN_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.divAdditional.form.txtSPLM.addEventHandler("onchanged",this.divData_divDataRight_divAdditional_txtSPLM_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_RTNG_MTSD_CLGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
