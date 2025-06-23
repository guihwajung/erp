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
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSummary", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRtngStd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_POOL_BGVDPRSN_SELECT</Col></Row><Row><Col id=\"TARGET\">select_summary</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_POOL_SUMMARY_SELECT</Col></Row><Row><Col id=\"TARGET\">select_pool</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_POOL_SELECT</Col></Row><Row><Col id=\"TARGET\">save_pool</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_POOL_SAVE</Col></Row><Row><Col id=\"TARGET\">pool_selection</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_POOL_SELECTION</Col></Row><Row><Col id=\"TARGET\">pool_selection_chk</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_POOL_SELECTION_CHK</Col></Row><Row><Col id=\"TARGET\">pool_submit</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_POOL_SUBMIT</Col></Row><Row><Col id=\"TARGET\">pool_confirm</Col><Col id=\"SP\">DAJPR_RTNG_MTSD_CLGE_POOL_CONFIRM</Col></Row><Row><Col id=\"TARGET\">select_rtng_std</Col><Col id=\"SP\">DAXPR_RTNG_STD_CODEFIND</Col></Row></Rows>");
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

            obj = new Div("divSplitter","25%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("#c9c9c9");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("동료Pool 제출/검토");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"190","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divStatus","0","0",null,"50","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staStatusNotStarted","2","5","190","40",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divStatus.form);
            obj.set_taborder("2");
            obj.set_text("미작성");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Malgun Gothic\"");
            obj.set_background("#edecef");
            this.divData.form.divDataRight.form.divDataTop.form.divStatus.addChild(obj.name, obj);

            obj = new Static("staStatusWriting","staStatusNotStarted:5","5","190","40",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divStatus.form);
            obj.set_taborder("2");
            obj.set_text("작성중");
            obj.set_textAlign("center");
            obj.set_background("#edecef");
            obj.set_font("bold 14px/normal \"Malgun Gothic\"");
            this.divData.form.divDataRight.form.divDataTop.form.divStatus.addChild(obj.name, obj);

            obj = new Static("staStatusSubmitted","staStatusWriting:5","5","190","40",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divStatus.form);
            obj.set_taborder("2");
            obj.set_text("제출완료");
            obj.set_textAlign("center");
            obj.set_background("#edecef");
            obj.set_font("bold 14px/normal \"Malgun Gothic\"");
            this.divData.form.divDataRight.form.divDataTop.form.divStatus.addChild(obj.name, obj);

            obj = new Static("staStatusSelected","staStatusSubmitted:5","5","190","40",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divStatus.form);
            obj.set_taborder("3");
            obj.set_text("선정완료");
            obj.set_textAlign("center");
            obj.set_background("#edecef");
            obj.set_font("bold 14px/normal \"Malgun Gothic\"");
            this.divData.form.divDataRight.form.divDataTop.form.divStatus.addChild(obj.name, obj);

            obj = new Static("staStatusConfirmed","staStatusSelected:5","5","190","40",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divStatus.form);
            obj.set_taborder("4");
            obj.set_text("검토완료");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Malgun Gothic\"");
            obj.set_background("#edecef");
            this.divData.form.divDataRight.form.divDataTop.form.divStatus.addChild(obj.name, obj);

            obj = new Div("divSummary","0","divStatus:10",null,"130","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_opacity("1");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBGVDPRSN","0","0","95","59",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("2");
            obj.set_text("평가대상자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.form.divDataTop.form.divSummary.addChild(obj.name, obj);

            obj = new Static("staRTNGPRSN","0","staBGVDPRSN:-1","95","59",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummary.form);
            obj.set_taborder("3");
            obj.set_text("검토자\r\n(면담자)");
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

            obj = new Div("divSummaryBtns","0","divStatus:10",null,"27","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnSubmit",null,"0","80","27","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.form);
            obj.set_taborder("1");
            obj.set_text("제출완료");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.addChild(obj.name, obj);

            obj = new Button("btnReview",null,"0","80","27","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.form);
            obj.set_taborder("0");
            obj.set_text("검토완료");
            obj.set_visible("false");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.addChild(obj.name, obj);

            obj = new Static("sta02","0","divDataTop:0","200","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("다면평가자(동료Pool) 작성");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:0","divDataTop:0","800","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("※ 최소 6명 ~ 최대 10명으로 제출 → 보직자 6명 확정");
            obj.set_cssclass("sta_TITLE_B");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divPoolBtns","0","sta02:-25",null,"27","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","60","27","130",null,null,null,null,null,this.divData.form.divDataRight.form.divPoolBtns.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divPoolBtns.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","27","65",null,null,null,null,null,this.divData.form.divDataRight.form.divPoolBtns.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divPoolBtns.addChild(obj.name, obj);

            obj = new Button("btnRemove",null,"0","60","27","0",null,null,null,null,null,this.divData.form.divDataRight.form.divPoolBtns.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divPoolBtns.addChild(obj.name, obj);

            obj = new Button("btnSelection",null,"0","80","27","0",null,null,null,null,null,this.divData.form.divDataRight.form.divPoolBtns.form);
            obj.set_taborder("3");
            obj.set_text("선정완료");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divPoolBtns.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","divPoolBtns:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
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
        this.registerScript("DAJ_RTNG_MTSD_CLGE_POOL_ADMIN.xfdl", function() {
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
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;

        	// 검색영역
        	this.ccfCD_CORP  = this.divSearch.form.ccfCD_CORP;
        	this.ctclYR_RTNG = this.divSearch.form.ctclYR_RTNG;
        	this.ccfID_RTNG  = this.divSearch.form.ccfID_RTNG;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        	// 요약영역
        	// 상태표현
        	this.staStatusNotStarted = this.divData.form.divDataRight.form.divDataTop.form.divStatus.form.staStatusNotStarted;	// 미작성
        	this.staStatusWriting    = this.divData.form.divDataRight.form.divDataTop.form.divStatus.form.staStatusWriting;		// 작성중
        	this.staStatusSubmitted  = this.divData.form.divDataRight.form.divDataTop.form.divStatus.form.staStatusSubmitted;	// 제출완료
        	this.staStatusSelected   = this.divData.form.divDataRight.form.divDataTop.form.divStatus.form.staStatusSelected;	// 선정완료
        	this.staStatusConfirmed  = this.divData.form.divDataRight.form.divDataTop.form.divStatus.form.staStatusConfirmed;	// 검토완료
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

        	this.btnSubmit = this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.form.btnSubmit;	// 제출완료 버튼
        	this.btnReview = this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.form.btnReview;	// 검토완료 버튼

        	// 다면평가 동료 POOL
        	this.btnSave      = this.divData.form.divDataRight.form.divPoolBtns.form.btnSave;		// 저장 버튼
        	this.btnAdd       = this.divData.form.divDataRight.form.divPoolBtns.form.btnAdd;		// 추가 버튼
        	this.btnRemove    = this.divData.form.divDataRight.form.divPoolBtns.form.btnRemove;		// 삭제 버튼
        	this.btnSelection = this.divData.form.divDataRight.form.divPoolBtns.form.btnSelection;	// 선정완료 버튼
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_RTNG_MTSD_CLGE_POOL_BGVDPRSN");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAJ_RTNG_MTSD_CLGE_POOL");
        	this.dxGridSub.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGridSub.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        	this.dxGridSub.AfterEdit 			  = "fnGridAfterEdit";				// 셀 변경 후 이벤트

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
        	// 동료 POOL 제출/검토 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_PTCP", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_RTNG", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");

        	// 동료 POOL 요약
        	this.dsSelectSummary = new Dataset();
        	this.dsSelectSummary.addColumn("CD_CORP", "string");
        	this.dsSelectSummary.addColumn("ID_RTNG", "string");
        	this.dsSelectSummary.addColumn("ID_SABUN", "string");

        	// 다면평가 동료 POOL 조회
        	this.dsSelectPool = new Dataset();
        	this.dsSelectPool.addColumn("CD_CORP", "string");
        	this.dsSelectPool.addColumn("ID_RTNG", "string");
        	this.dsSelectPool.addColumn("SEQ_BGVDPRSN", "int");

        	// 다면평가 동료 POOL 저장
        	this.dsSavePool = new Dataset();
        	this.dsSavePool.addColumn("TY_WRK", "string");
        	this.dsSavePool.addColumn("CD_CORP", "string");
        	this.dsSavePool.addColumn("ID_RTNG", "string");
        	this.dsSavePool.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSavePool.addColumn("SEQ_CLGE_POOL", "int");
        	this.dsSavePool.addColumn("SEQ_RTNGPRSN", "int");
        	this.dsSavePool.addColumn("CL_RTNGPRSN", "string");
        	this.dsSavePool.addColumn("ID_CLGE", "string");
        	this.dsSavePool.addColumn("ID_USER", "string");
        	this.dsSavePool.addColumn("RESN", "string");
        	this.dsSavePool.addColumn("TY_PTCP", "string");
        	this.dsSavePool.addColumn("CHK", "string");
        	this.dsSavePool.addColumn("ID_SCREEN", "string");

        	// 다면평가 동료 POOL 제출
        	this.dsPoolSubmit = new Dataset();
        	this.dsPoolSubmit.addColumn("CD_CORP", "string");
        	this.dsPoolSubmit.addColumn("ID_RTNG", "string");
        	this.dsPoolSubmit.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsPoolSubmit.addColumn("ID_USER", "string");

        	// 다면평가 동료 POOL 선정
        	this.dsPoolSelection = new Dataset();
        	this.dsPoolSelection.addColumn("CD_CORP", "string");
        	this.dsPoolSelection.addColumn("ID_RTNG", "string");
        	this.dsPoolSelection.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsPoolSelection.addColumn("SEQ_CLGE_POOL", "int");
        	this.dsPoolSelection.addColumn("ID_USER", "string");
        	this.dsPoolSelection.addColumn("CHK", "string");
        	this.dsPoolSelection.addColumn("RESN", "string");

        	// 다면평가 동료 POOL 선정후 변경사항 체크 메일 발송
        	this.dsPoolSelectionChk = new Dataset();
        	this.dsPoolSelectionChk.addColumn("CD_CORP", "string");
        	this.dsPoolSelectionChk.addColumn("ID_RTNG", "string");
        	this.dsPoolSelectionChk.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsPoolSelectionChk.addColumn("ID_USER", "string");

        	// 다면평가 동료 POOL 검토
        	this.dsPoolConfirm = new Dataset();
        	this.dsPoolConfirm.addColumn("CD_CORP", "string");
        	this.dsPoolConfirm.addColumn("ID_RTNG", "string");
        	this.dsPoolConfirm.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsPoolConfirm.addColumn("SEQ_CLGE_POOL", "int");
        	this.dsPoolConfirm.addColumn("ID_USER", "string");
        	this.dsPoolConfirm.addColumn("ID_SCREEN", "string");
        	this.dsPoolConfirm.addColumn("CHK", "string");
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

        	if(this.FormInfo.GR_SEARCH == 1) {
         		this.ccfID_SABUN.set_enable(true);
        	}
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

        	// 평가대상자/평가자(검토자) 요약 정보
        	this.dsSelectSummary.clearData();
        	this.dsSelectSummary.addRow();
        	this.dsSelectSummary.setColumn(0, "CD_CORP" , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectSummary.setColumn(0, "ID_RTNG" , this.dsSearch.getColumn(0, "ID_RTNG"));
        	if (this.dsSearch.getColumn(0, "TY_PTCP") == "B") {
        		this.dsSelectSummary.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	} else if (this.dsSearch.getColumn(0, "TY_PTCP") == "V") {
        		this.dsSelectSummary.setColumn(0, "ID_SABUN", this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"));
        	}

        	// 다면평가 동료 POOL
        	this.dsSelectPool.clearData();
        	this.dsSelectPool.addRow();
        	this.dsSelectPool.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectPool.setColumn(0, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSelectPool.setColumn(0, "SEQ_BGVDPRSN", this.dsList.getColumn(this.dsList.rowposition, "SEQ_BGVDPRSN"));

        	var strSvcId    = "select_pool";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_pool=dsSelectPool select_summary=dsSelectSummary";
        	var outData     = "dsListSub=select_pool0 dsListSummary=select_summary0";
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
        	// 다면평가 동료 POOL 조회
        	else if (svcID == "select_pool") {
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
        	}
        	// 다면평가 동료 POOL 저장
        	else if (svcID == "save_pool") {
        		this.fnSelectSub();
        		//this.fnCheckExtensionButtonStatus();
        	}
        	// 다면평가 동료 POOL 제출완료
        	else if (svcID == "pool_submit") {
        		this.fnSelectSub();
        		this.FormBtns.Select.click();
        	}
        	// 다면평가 동료 POOL 선정완료
        	else if (svcID == "pool_selection") {
        		this.fnSelectSub();
        		this.FormBtns.Select.click();
        	}
        	// 다면평가 동료 POOL 검토완료
        	else if (svcID == "pool_confirm") {
        		this.fnSelectSub();
        		this.FormBtns.Select.click();
        	}
        }

        this.fnCheckExtensionButtonStatus = function() {
        	var TY_PTCP = this.dsSearch.getColumn(0, "TY_PTCP");
        	var YN_SBMS = this.dsListSummary.getColumn(0, "YN_SBMS");	// 제출완료
        	var YN_CHOC = this.dsListSummary.getColumn(0, "YN_CHOC");	// 선정완료
        	var YN_IVGT = this.dsListSummary.getColumn(0, "YN_IVGT");	// 검토완료

        	this.staStatusNotStarted.set_background("#edecef");
        	this.staStatusWriting.set_background("#edecef");
        	this.staStatusSubmitted.set_background("#edecef");
        	this.staStatusSelected.set_background("#edecef");
        	this.staStatusConfirmed.set_background("#edecef");

        	this.staStatusNotStarted.set_color("black");
        	this.staStatusWriting.set_color("black");
        	this.staStatusSubmitted.set_color("black");
        	this.staStatusSelected.set_color("black");
        	this.staStatusConfirmed.set_color("black");

        	if (this.dsListSub.rowcount == 0) {
        		this.staStatusNotStarted.set_background("lightgray");
        		this.staStatusNotStarted.set_color("red");

        		this.staStatusWriting.set_background("#edecef");
        		this.staStatusWriting.set_color("black");
        		this.staStatusSubmitted.set_background("#edecef");
        		this.staStatusSubmitted.set_color("black");
        		this.staStatusSelected.set_background("#edecef");
        		this.staStatusSelected.set_color("black");
        		this.staStatusConfirmed.set_background("#edecef");
        		this.staStatusConfirmed.set_color("black");
        	} else if (this.dsListSub.rowcount > 0) {
        		this.staStatusNotStarted.set_background("#edecef");
        		this.staStatusNotStarted.set_color("black");
        		this.staStatusWriting.set_background("lightgray");
        		this.staStatusWriting.set_color("red");
        		this.staStatusSubmitted.set_background("#edecef");
        		this.staStatusSubmitted.set_color("black");
        		this.staStatusSelected.set_background("#edecef");
        		this.staStatusSelected.set_color("black");
        		this.staStatusConfirmed.set_background("#edecef");
        		this.staStatusConfirmed.set_color("black");
        	}

        	if (YN_SBMS == "Y") {
        		this.staStatusNotStarted.set_background("#edecef");
        		this.staStatusNotStarted.set_color("black");
        		this.staStatusWriting.set_background("#edecef");
        		this.staStatusWriting.set_color("black");
        		this.staStatusSubmitted.set_background("lightgray");
        		this.staStatusSubmitted.set_color("red");
        		this.staStatusSelected.set_background("#edecef");
        		this.staStatusSelected.set_color("black");
        		this.staStatusConfirmed.set_background("#edecef");
        		this.staStatusConfirmed.set_color("black");
        	}

        	if (YN_CHOC == "Y") {
        		this.staStatusNotStarted.set_background("#edecef");
        		this.staStatusNotStarted.set_color("black");
        		this.staStatusWriting.set_background("#edecef");
        		this.staStatusWriting.set_color("black");
        		this.staStatusSubmitted.set_background("#edecef");
        		this.staStatusSubmitted.set_color("black");
        		this.staStatusSelected.set_background("lightgray");
        		this.staStatusSelected.set_color("red");
        		this.staStatusConfirmed.set_background("#edecef");
        		this.staStatusConfirmed.set_color("black");
        	}

        	if (YN_IVGT == "Y") {
        		this.staStatusNotStarted.set_background("#edecef");
        		this.staStatusNotStarted.set_color("black");
        		this.staStatusWriting.set_background("#edecef");
        		this.staStatusWriting.set_color("black");
        		this.staStatusSubmitted.set_background("#edecef");
        		this.staStatusSubmitted.set_color("black");
        		this.staStatusSelected.set_background("#edecef");
        		this.staStatusSelected.set_color("black");
        		this.staStatusConfirmed.set_background("lightgray");
        		this.staStatusConfirmed.set_color("red");
        	}

        	// 피평가자
        	if (TY_PTCP == "B") {
        		if (YN_SBMS == "Y") {
        			this.btnSave.set_enable(false);
        			this.btnAdd.set_enable(false);
        			this.btnRemove.set_enable(false);
        			this.btnSubmit.set_enable(false);

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CL_RTNGPRSN"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CL_RTNGPRSN"), "edittype", "none");

        		} else {
        			if (this.dsListSub.rowcount == 0) {
        				this.btnAdd.set_enable(true);
        			} else {
        				this.btnAdd.set_enable(true);
        				this.btnRemove.set_enable(true);
        				this.btnSubmit.set_enable(true);
        			}
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CL_RTNGPRSN"), "cssclass", "");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CL_RTNGPRSN"), "edittype", "combo");
        		}
        		this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CHK"), "cssclass", "BACK_ReadOnly");
        		this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CHK"), "edittype", "none");
        		this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "RESN"), "cssclass", "BACK_ReadOnly");
        		this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "RESN"), "edittype", "none");

        		this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "RTNG_ID_CPNYDUTY"), "edittype", "expr:dataset.getColumn(currow, 'SBMS_YN') == 'Y' ? 'none' : 'text'");
        	}
        	// 검토자
        	else if (TY_PTCP == "V") {
        		if (YN_SBMS == "N" && YN_CHOC == "N"
        			&& YN_IVGT == "N") {
        			this.btnSave.set_enable(false);
        			this.btnAdd.set_enable(false);
        			this.btnRemove.set_enable(false);
        			this.btnSelection.set_enable(false);
        			this.btnReview.set_enable(false);

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CHK"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CHK"), "edittype", "none");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CL_RTNGPRSN"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CL_RTNGPRSN"), "edittype", "none");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "RESN"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "RESN"), "edittype", "none");
        		} else if (YN_SBMS == "N" && YN_CHOC == "Y"
        			&& YN_IVGT == "N") {
        			this.btnSave.set_enable(false);
        			this.btnAdd.set_enable(false);
        			this.btnRemove.set_enable(false);
        			this.btnSelection.set_enable(false);
        			this.btnReview.set_enable(false);

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CHK"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CHK"), "edittype", "none");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CL_RTNGPRSN"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CL_RTNGPRSN"), "edittype", "none");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "RESN"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "RESN"), "edittype", "none");
        		} else if (YN_SBMS == "Y" && YN_CHOC == "N" && YN_IVGT == "N") {
        // 			this.btnSave.set_enable(false);
        // 			this.btnAdd.set_enable(true);
        // 			this.btnRemove.set_enable(true);
        // 			this.btnSelection.set_enable(true);
        // 			this.btnReview.set_enable(false);
        // 			//this.btnSelection.set_enable(false);
        // 			//this.btnReview.set_enable(true);

        			this.btnSave.set_enable(false);
        // 			this.btnAdd.set_enable(false);
        // 			this.btnRemove.set_enable(false);
        // 			this.btnSelection.set_enable(false);
        			this.btnAdd.set_enable(true);
        			this.btnRemove.set_enable(true);
        			this.btnSelection.set_enable(true);
        			this.btnReview.set_enable(true);

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CHK"), "cssclass", "");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CHK"), "edittype", "checkbox");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CL_RTNGPRSN"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CL_RTNGPRSN"), "edittype", "none");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "RESN"), "cssclass", "");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "RESN"), "edittype", "text");
        		} else if (YN_SBMS == "Y" && YN_CHOC == "Y" && YN_IVGT == "N") {
        			this.btnSave.set_enable(false);
        // 			this.btnAdd.set_enable(false);
        // 			this.btnRemove.set_enable(false);
        // 			this.btnSelection.set_enable(false);
        			this.btnAdd.set_enable(true);
        			this.btnRemove.set_enable(true);
        			this.btnSelection.set_enable(true);
        			this.btnReview.set_enable(true);

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CHK"), "cssclass", "");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CHK"), "edittype", "checkbox");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CL_RTNGPRSN"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CL_RTNGPRSN"), "edittype", "none");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "RESN"), "cssclass", "");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "RESN"), "edittype", "text");
        		} else if (YN_SBMS == "Y" && YN_CHOC == "Y"
        			&& YN_IVGT == "Y") {
        			this.btnSave.set_enable(false);
        			this.btnAdd.set_enable(false);
        			this.btnRemove.set_enable(false);
        			this.btnSelection.set_enable(false);
        			this.btnReview.set_enable(false);

        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CHK"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CHK"), "edittype", "none");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CL_RTNGPRSN"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CL_RTNGPRSN"), "edittype", "none");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "RESN"), "cssclass", "BACK_ReadOnly");
        			this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "RESN"), "edittype", "none");
        		}

        		//this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "RTNG_ID_CPNYDUTY"), "edittype", "expr:dataset.getColumn(currow, 'CHOC_YN') == 'Y' ? 'none' : 'text'");
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
        		dsUserParam.setColumn(nrow, "ID_SCREEN"   , "DAJ_RTNG_MTSD_CLGE_POOL");
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
        	var arr = codeFindData;
        	if (codeFindData[0] == undefined) {
        		return;
        	}

        	if (id == "ccfID_RTNG") {
        		var TY_PTCP = codeFindData[0]["TY_PTCP"];
        		this.dsSearch.setColumn(0, "TY_PTCP", codeFindData[0]["TY_PTCP"]);
        		this.dsSearch.setColumn(0, "CD_RTNG_ASBLNEXT", codeFindData[0]["CD_RTNG_ASBLNEXT"]);
        		this.dsSearch.setColumn(0, "DS_RTNG_ASBLNEXT", codeFindData[0]["DS_RTNG_ASBLNEXT"]);

        		// 다면평가 동료 POOL 버튼
        		if (TY_PTCP == "B") {
         			this.btnSave.set_right(130);
         			this.btnAdd.set_right(65);
        			this.btnRemove.set_right(0);
        			this.btnRemove.set_visible(true);
        			this.btnSelection.set_visible(false);
        			this.btnReview.set_visible(false);
        			this.btnSubmit.set_visible(true);
        		} else if (TY_PTCP == "V") {
        //  			this.btnSave.set_right(215);
        //  			this.btnAdd.set_right(150);
        // 			this.btnRemove.set_right(85);
        // 			this.btnSelection.set_visible(true);

         			this.btnSave.set_right(150);
         			this.btnAdd.set_right(85);
        			this.btnRemove.set_visible(false);
        			this.btnSelection.set_visible(true);
        			this.btnReview.set_visible(true);
        			this.btnSubmit.set_visible(false);
        		}
        	} else if (id == "ccfID_SABUN") {
        		if (arr.length > 0) {
        			this.ccfID_RTNG.form.fnCodeFindClear();
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (this.dsSearch.getColumn(0, "TY_PTCP") == "B" && this.dsListSub.getColumn(0, "SBMS_YN") == "Y") {
        		return false;
        	}

        // 	if (this.dsSearch.getColumn(0, "TY_PTCP") == "V" && this.dsListSub.getColumn(0, "CHOC_YN") == "Y") {
        // 		return false;
        // 	}

        	switch (id) {
        	// 피평가자
        	case "DAX_CFBASEINFO_ALL":
        		dsUserParam.setColumn(nrow, "CD_CORP",   this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT",   "");	//this.AuthClient.CD_DEPT);
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
        this.fnGridAfterEdit = function(obj,e) {
        	var nrow = this.dsListSub.rowposition;
        	var flag = this.dsListSub.getColumn(nrow, this.ucFlag);
        	if( e.columnid == "CL_RTNGPRSN" || e.columnid == "RESN") {
        		if (e.oldvalue != e.newvalue) {
        			if (flag != "I" && flag != "D") {
        				//this.dsListSub.setColumn(nrow, this.ucFlag, "U");
        				this.btnSave.set_enable(true);
        			}
        		}
        	}

        // 	if( e.columnid == "CHK") {
        // 		if (e.oldvalue != e.newvalue) {
        // 			if (flag != "I" && flag != "D") {
        // 				this.dsListSub.setColumn(nrow, this.ucFlag, "U");
        // 			}
        // 		}
        // 	}
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

        this.fnClearSummary = function() {
        	// 평가상태
        	this.staStatusNotStarted.set_background("#edecef");
        	this.staStatusWriting.set_background("#edecef");
        	this.staStatusSubmitted.set_background("#edecef");
        	this.staStatusSelected.set_background("#edecef");
        	this.staStatusConfirmed.set_background("#edecef");

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
        }

        // 저장버튼 클릭이벤트
        this.btnSave_onclick = function(obj, e) {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();
        	this.dsSavePool.clearData();
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        		case "I":
        		case "U":
        		case "D":
        			var nrow = this.dsSavePool.addRow();
        			this.dsSavePool.setColumn(nrow, "TY_WRK"       , flag);
        			this.dsSavePool.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSavePool.setColumn(nrow, "ID_RTNG"      , this.dsSearch.getColumn(0, "ID_RTNG"));
        			this.dsSavePool.setColumn(nrow, "SEQ_BGVDPRSN" , this.dsList.getColumn(this.dsList.rowposition, "SEQ_BGVDPRSN"));
        			this.dsSavePool.setColumn(nrow, "SEQ_CLGE_POOL", this.dsListSub.getColumn(i, "SEQ_CLGE_POOL"));
        			this.dsSavePool.setColumn(nrow, "SEQ_RTNGPRSN" , this.dsListSummary.getColumn(0, "SEQ_RTNGPRSN"));
        			this.dsSavePool.setColumn(nrow, "CL_RTNGPRSN"  , this.dsListSub.getColumn(i, "CL_RTNGPRSN"));
        			this.dsSavePool.setColumn(nrow, "ID_CLGE"      , this.dsListSub.getColumn(i, "RTNG_ID_CPNYDUTY"));
        			this.dsSavePool.setColumn(nrow, "ID_USER"      , this.AuthClient.ID_USER);
        			this.dsSavePool.setColumn(nrow, "RESN"         , this.dsListSub.getColumn(i, "RESN"));
        			this.dsSavePool.setColumn(nrow, "TY_PTCP"      , this.dsSearch.getColumn(0, "TY_PTCP"));
        			this.dsSavePool.setColumn(nrow, "CHK"		   , this.dsListSub.getColumn(i, "CHK"));
        			this.dsSavePool.setColumn(nrow, "ID_SCREEN"	   , "DAJ_RTNG_MTSD_CLGE_POOL");
        			break;
        		}
        	}

        	if (this.dsSavePool.rowcount == 0) return;

        	var strSvcId    = "save_pool";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_pool=dsSavePool";
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

        // 추가버튼 클릭이벤트
        this.btnAdd_onclick = function(obj, e) {
        	this.gfnGridAdd(this.dxGridSub);
        	//this.gfnGridAdd(this.dxGridSub, "bottom");
        	this.btnSave.set_enable(true);
        	this.btnRemove.set_enable(true);
        	this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CL_RTNGPRSN"), "cssclass", "");
        	this.dxGridSub.setCellProperty("body", this.dxGridSub.getBindCellIndex("body", "CL_RTNGPRSN"), "edittype", "combo");
        }

        // 삭제버튼 클릭이벤트
        this.btnRemove_onclick = function(obj, e) {
        	this.gfnGridDel(this.dxGridSub);
        	this.btnSave.set_enable(true);
        }


        // 제출완료버튼 클릭이벤트
        this.btnSubmit_onclick = function(obj, e) {
        	var cnt = 0;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch (flag) {
        		case "I":
        		case "U":
        		case "D":
        			cnt++;
        			break;
        		}
        	}

        	if (cnt > 0) {
        		this.gfnAlert("저장되지 않은 동료POOL이 존재합니다");
        		return;
        	}

        	var msg = "다면평가를 위한 동료 POOL을 제출하시겠습니까?";
        	this.gfnConfirm(msg, function(strId, val) {
        		if (val == false) {
        			return;
        		}

        		this.dxGridSub.updateToDataset();
        		this.dsPoolSubmit.clearData();
        		var nrow = this.dsPoolSubmit.addRow();
        		this.dsPoolSubmit.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsPoolSubmit.setColumn(nrow, "ID_RTNG"      , this.dsSearch.getColumn(0, "ID_RTNG"));
        		this.dsPoolSubmit.setColumn(nrow, "SEQ_BGVDPRSN" , this.dsList.getColumn(this.dsList.rowposition, "SEQ_BGVDPRSN"));
        		this.dsPoolSubmit.setColumn(nrow, "SEQ_RTNGPRSN" , this.dsListSummary.getColumn(0, "SEQ_RTNGPRSN"));
        		this.dsPoolSubmit.setColumn(nrow, "ID_USER"      , this.AuthClient.ID_USER);

        		if (this.dsPoolSubmit.rowcount == 0) return;

        		var strSvcId    = "pool_submit";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "pool_submit=dsPoolSubmit";
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

        // 선정완료버튼 클릭이벤트
        this.btnSelection_onclick = function(obj, e) {
        	var cnt = 0;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch (flag) {
        		case "I":
        		case "U":
        		case "D":
        			cnt++;
        			break;
        		}
        	}

        	if (cnt > 0) {
        		this.gfnAlert("저장되지 않은 동료POOL이 존재합니다");
        		return;
        	}
        // 	this.dsListSub.set_enableevent(false);
        // 	this.dsListSub.filter("CHK == 1");
        // 	if (this.dsListSub.rowcount == 0) {
        // 		this.gfnAlert("선정 대상 POOL을 선택하십시오.");
        // 		this.dsListSub.filter("");
        // 		this.dsListSub.set_enableevent(true);
        // 		return;
        // 	}
        // 	this.dsListSub.filter("");
        // 	this.dsListSub.set_enableevent(true);

        	var msg = "다면평가를 위한 동료 POOL의 상태를\n선정완료로 변경하시겠습니까?";
        	this.gfnConfirm(msg, function(strId, val) {
        		if (val == false) {
        			return;
        		}
        		this.dxGridSub.updateToDataset();
        		this.dsPoolSelection.clearData();
        		for (var i = 0; i < this.dsListSub.rowcount; i++) {
        			var nrow = this.dsPoolSelection.addRow();
        			this.dsPoolSelection.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsPoolSelection.setColumn(nrow, "ID_RTNG"      , this.dsSearch.getColumn(0, "ID_RTNG"));
        			this.dsPoolSelection.setColumn(nrow, "SEQ_BGVDPRSN" , this.dsList.getColumn(this.dsList.rowposition, "SEQ_BGVDPRSN"));
        			this.dsPoolSelection.setColumn(nrow, "SEQ_CLGE_POOL", this.dsListSub.getColumn(i, "SEQ_CLGE_POOL"));
        			this.dsPoolSelection.setColumn(nrow, "ID_USER"      , this.AuthClient.ID_USER);
        			this.dsPoolSelection.setColumn(nrow, "CHK"			, this.dsListSub.getColumn(i, "CHK"));
        			this.dsPoolSelection.setColumn(nrow, "RESN"         , this.dsListSub.getColumn(i, "RESN"));

        // 			var flag = this.gfnGetFlag(this.dsListSub, i);
        // 			switch(flag) {
        // 				case "U":
        // 					var nrow = this.dsPoolSelection.addRow();
        // 					this.dsPoolSelection.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        // 					this.dsPoolSelection.setColumn(nrow, "ID_RTNG"      , this.dsSearch.getColumn(0, "ID_RTNG"));
        // 					this.dsPoolSelection.setColumn(nrow, "SEQ_BGVDPRSN" , this.dsList.getColumn(this.dsList.rowposition, "SEQ_BGVDPRSN"));
        // 					this.dsPoolSelection.setColumn(nrow, "SEQ_CLGE_POOL", this.dsListSub.getColumn(i, "SEQ_CLGE_POOL"));
        // 					this.dsPoolSelection.setColumn(nrow, "ID_USER"      , this.AuthClient.ID_USER);
        // 					this.dsPoolSelection.setColumn(nrow, "CHK"			, this.dsListSub.getColumn(i, "CHK"));
        // 					break;
        // 			}
        		}

        		this.dsPoolSelectionChk.clearData();
        		var nrow = this.dsPoolSelectionChk.addRow();
        		this.dsPoolSelectionChk.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsPoolSelectionChk.setColumn(nrow, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        		this.dsPoolSelectionChk.setColumn(nrow, "SEQ_BGVDPRSN", this.dsList.getColumn(this.dsList.rowposition, "SEQ_BGVDPRSN"));
        		this.dsPoolSelectionChk.setColumn(nrow, "ID_USER"	  , this.AuthClient.ID_USER);

        		if (this.dsPoolSelection.rowcount == 0) return;

        		var strSvcId    = "pool_selection";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "pool_selection=dsPoolSelection pool_selection_chk=dsPoolSelectionChk";
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

        // 검토완료버튼 클릭이벤트
        this.btnConfirm_onclick = function(obj, e) {
        	var cnt = 0;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch (flag) {
        		case "I":
        		case "U":
        		case "D":
        			cnt++;
        			break;
        		}
        	}

        	if (cnt > 0) {
        		this.gfnAlert("저장되지 않은 동료POOL이 존재합니다");
        		return;
        	}

        	var msg = "다면평가를 위한 동료 POOL의 상태를\n검토완료로 변경하시겠습니까?";
        	this.gfnConfirm(msg, function(strId, val) {
        		if (val == false) {
        			return;
        		}

        		this.dxGridSub.updateToDataset();
        		this.dsPoolConfirm.clearData();
        		for (var i = 0; i < this.dsListSub.rowcount; i++) {
        			var nrow = this.dsPoolConfirm.addRow();
        			this.dsPoolConfirm.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsPoolConfirm.setColumn(nrow, "ID_RTNG"      , this.dsSearch.getColumn(0, "ID_RTNG"));
        			this.dsPoolConfirm.setColumn(nrow, "SEQ_BGVDPRSN" , this.dsList.getColumn(this.dsList.rowposition, "SEQ_BGVDPRSN"));
        			//this.dsPoolConfirm.setColumn(nrow, "SEQ_RTNGPRSN" , this.dsListSummary.getColumn(0, "SEQ_RTNGPRSN"));
        			this.dsPoolConfirm.setColumn(nrow, "SEQ_CLGE_POOL", this.dsListSub.getColumn(i, "SEQ_CLGE_POOL"));
        			this.dsPoolConfirm.setColumn(nrow, "ID_USER"      , this.AuthClient.ID_USER);
        			this.dsPoolConfirm.setColumn(nrow, "ID_SCREEN"    , "DAJ_RTNG_MTSD_CLGE_POOL");
        			this.dsPoolConfirm.setColumn(nrow, "CHK"		  , this.dsListSub.getColumn(i, "CHK"));
        		}
        		if (this.dsPoolConfirm.rowcount == 0) return;

        		var strSvcId    = "pool_confirm";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "pool_confirm=dsPoolConfirm";
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

        // 동료 POOL 제출/검토 그리드 클릭 이벤트
        this.fnGridCellPosChanged = function(obj, e) {
        	if (e.row != -1 && e.oldrow != e.row) {
        		this.fnSelectSub();
        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataLeft.form.objGrid.addEventHandler("oncellposchanged",this.fnGridCellPosChanged,this);
            this.divData.form.divDataRight.form.divDataTop.form.divStatus.form.staStatusNotStarted.addEventHandler("onclick",this.divData_divDataRight_divDataTop_divStatus_staStatusNotStarted_onclick,this);
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
            this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.form.btnSubmit.addEventHandler("onclick",this.btnSubmit_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.divSummaryBtns.form.btnReview.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.divData.form.divDataRight.form.divPoolBtns.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divData.form.divDataRight.form.divPoolBtns.form.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.divData.form.divDataRight.form.divPoolBtns.form.btnRemove.addEventHandler("onclick",this.btnRemove_onclick,this);
            this.divData.form.divDataRight.form.divPoolBtns.form.btnSelection.addEventHandler("onclick",this.btnSelection_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_RTNG_MTSD_CLGE_POOL_ADMIN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
