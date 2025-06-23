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
            this.set_titletext("출장보고서 상세");
            this.getSetter("maxwidth").set("1156");
            this.getSetter("maxheight").set("950");
            if (Form == this.constructor)
            {
                this._setFormPosition(1113,875);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRptProof", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_STDMNEY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">USD</Col><Col id=\"DS_CODE\">USD</Col></Row><Row><Col id=\"CD_CODE\">KRW</Col><Col id=\"DS_CODE\">KRW</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_BZTP_RPT_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_BZTP_RPT_DETAIL_SAVE</Col></Row><Row><Col id=\"TARGET\">update_rtp_detail</Col><Col id=\"SP\">DABPR_BZTP_RPT_DETAIL_UPDATE</Col></Row><Row><Col id=\"TARGET\">select_rpt_proof</Col><Col id=\"SP\">DABPR_BZTP_RPT_PROOF_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"SN_BZTPSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BZTP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN_APL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HANME_APL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BZTP_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BZTP_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_AREA_BZTP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AREA_BZTP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN_BZTP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME_BZTP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EMPTYPE_BZTP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMPTYPE_BZTP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WRITE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_STDEXRT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ADVPGLD\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BZTP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NOTICE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"UNIT_STDMNEY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_IOUTBRUFLGTNOT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RAILNOT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SHIPNOT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FLGTNOT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CARNOT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LDGGNOT\" type=\"STRING\" size=\"256\"/><Column id=\"DY_LDGGDR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CRMNNOT\" type=\"STRING\" size=\"256\"/><Column id=\"DY_CRMNNOTDR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ETCNOT\" type=\"STRING\" size=\"256\"/><Column id=\"DY_ETCDR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_COMMNOT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_VISAPBCNCMMS\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INSRCOST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ETCADTNCOST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TCHMCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RMK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RESON\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0","1113","130",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_T","0","5","90","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("출장정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","sta_TITLE_T:10","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_bg","staCD_CORP:-1","staCD_CORP:-30","292","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","staCD_CORP:-24","280","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBZTP_AREA","0","staCD_CORP:-1","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("출장지역");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBZTP_AREA_bg","staBZTP_AREA:-1","staBZTP_AREA:-30","292","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfBZTP_AREA","staBZTP_AREA:5","staBZTP_AREA:-25","280","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WRITE","0","staBZTP_AREA:-1","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WRITE_bg","staDT_WRITE:-1","staDT_WRITE:-30","292","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("tclDT_WRITE","staDT_WRITE:5","staDT_WRITE:-25","105","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_APL","staCD_CORP_bg:-1","staCD_CORP_bg:-30","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("신청자");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_APL_bg","staID_SABUN_APL:-1","staID_SABUN_APL:-30","292","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN_APL","staID_SABUN_APL:5","staID_SABUN_APL:-25","280","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_BZTP","staBZTP_AREA_bg:-1","staID_SABUN_APL:-1","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("출장자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_BZTP_bg","staID_SABUN_BZTP:-1","staID_SABUN_BZTP:-30","292","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN_BZTP","staID_SABUN_BZTP:5","staID_SABUN_BZTP:-25","280","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAM_STDEXRT","staDT_WRITE_bg:-1","staID_SABUN_BZTP:-1","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAM_STDEXRT_bg","staAM_STDEXRT:-1","staAM_STDEXRT:-30","292","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_BZTP","staID_SABUN_APL_bg:-1","staID_SABUN_APL_bg:-30","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("출장일");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_BZTP_bg","staDT_BZTP:-1","staDT_BZTP:-30","292","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("tclDT_BZTP_FROM","staDT_BZTP:5","staDT_BZTP:-25","105","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_BZTP_range","tclDT_BZTP_FROM:10","tclDT_BZTP_FROM:-25","10","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("~");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("tclDT_BZTP_TO","staDT_BZTP_range:10","staDT_BZTP:-25","105","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_EMPTYPE_BZTP","staID_SABUN_BZTP_bg:-1","staID_SABUN_BZTP_bg:-30","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("출장직급");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_EMPTYPE_BZTP_bg","staCD_EMPTYPE_BZTP:-1","staCD_EMPTYPE_BZTP:-30","292","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_EMPTYPE_BZTP","staCD_EMPTYPE_BZTP:5","staCD_EMPTYPE_BZTP:-25","280","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_STDMNEY","staAM_STDEXRT_bg:-1","staAM_STDEXRT_bg:-30","80","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_STDMNEY_bg","staCD_STDMNEY:-1","staCD_STDMNEY:-30","292","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","1","divSearch:1","1112","744",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_L","0","10","90","18",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("출장보고서");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCost","sta_TITLE_L:0","10","0","18",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_TITLE_B");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNotice","staCost:0","10","400","18",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_color("#ff0000");
            obj.set_cssclass("sta_TITLE_B");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnReportDetail",null,"4","80","30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("210");
            obj.set_text("세부내역");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnNotice",null,"4","80","30","btnReportDetail:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("210");
            obj.set_text("주의사항");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDownloadExcel",null,"4","100","30","btnNotice:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("210");
            obj.set_text("엑셀다운로드");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTYPE","0","sta_TITLE_L:10","203","69",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTOTAL_COST_EST_USD","staTYPE:-1","staTYPE:-40","145","40",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("USD");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTOTAL_COST_EST_KRW","staTOTAL_COST_EST_USD:-1","staTOTAL_COST_EST_USD:-40","145","40",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("KRW");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTOTAL_COST_EST","staTYPE:-1","staTYPE:-69","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("금회출장예산");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCOST_EXEC","staTOTAL_COST_EST:-1","staTOTAL_COST_EST:-30","478","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("집행금액(KRW)");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCOST_EXEC_REQ","staTOTAL_COST_EST_KRW:-1","staTOTAL_COST_EST_KRW:-40","160","40",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("신청금액");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCOST_EXEC_REQ_EX","staCOST_EXEC_REQ:-1","staCOST_EXEC_REQ:-40","160","40",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("130");
            obj.set_text("신청제외금액\r\n(법인카드 등)");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCOST_EXEC_SUBTOTAL","staCOST_EXEC_REQ_EX:-1","staCOST_EXEC_REQ_EX:-40","160","40",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("169");
            obj.set_text("소계");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ADVPGLD","staCOST_EXEC:-1","staCOST_EXEC:-30","145","69",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("예산대비\r\n집행율(%)");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_IOUTBRUFLGTNOT","0","staTYPE:-1","203","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("입출국항공료");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_IOUTBRUFLGTNOT_EST_USD_bg","staAM_IOUTBRUFLGTNOT:-1","staAM_IOUTBRUFLGTNOT:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_IOUTBRUFLGTNOT_EST_KRW_bg","staAM_IOUTBRUFLGTNOT_EST_USD_bg:-1","staAM_IOUTBRUFLGTNOT_EST_USD_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("mskAM_IOUTBRUFLGTNOT_EXEC_REQ_bg","staAM_IOUTBRUFLGTNOT_EST_KRW_bg:-1","staAM_IOUTBRUFLGTNOT_EST_KRW_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_IOUTBRUFLGTNOT_EXEC_REQ_EX_bg","mskAM_IOUTBRUFLGTNOT_EXEC_REQ_bg:-1","mskAM_IOUTBRUFLGTNOT_EXEC_REQ_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_IOUTBRUFLGTNOT_SUBTOTAL_bg","staAM_IOUTBRUFLGTNOT_EXEC_REQ_EX_bg:-1","staAM_IOUTBRUFLGTNOT_EXEC_REQ_EX_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("170");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_IOUTBRUFLGTNOT_EXEC_RATIO_bg","staAM_IOUTBRUFLGTNOT_SUBTOTAL_bg:-1","staAM_IOUTBRUFLGTNOT_SUBTOTAL_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_IOUTBRUFLGTNOT_EST_USD","staAM_IOUTBRUFLGTNOT_EST_USD_bg:-140","staAM_IOUTBRUFLGTNOT_EST_USD_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("84");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_IOUTBRUFLGTNOT_EST_KRW","staAM_IOUTBRUFLGTNOT_EST_KRW_bg:-140","staAM_IOUTBRUFLGTNOT_EST_KRW_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("85");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_IOUTBRUFLGTNOT_EXEC_REQ","mskAM_IOUTBRUFLGTNOT_EXEC_REQ_bg:-155","mskAM_IOUTBRUFLGTNOT_EXEC_REQ_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("83");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_IOUTBRUFLGTNOT_EXEC_REQ_EX","staAM_IOUTBRUFLGTNOT_EXEC_REQ_EX_bg:-155","staAM_IOUTBRUFLGTNOT_EXEC_REQ_EX_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("131");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_IOUTBRUFLGTNOT_SUBTOTAL","staAM_IOUTBRUFLGTNOT_SUBTOTAL_bg:-155","staAM_IOUTBRUFLGTNOT_SUBTOTAL_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("171");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_IOUTBRUFLGTNOT_EXEC_RATIO","staAM_IOUTBRUFLGTNOT_EXEC_RATIO_bg:-140","staAM_IOUTBRUFLGTNOT_EXEC_RATIO_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("86");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TRANS","0","staAM_IOUTBRUFLGTNOT:-1","79","116",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("교통비");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_RAILNOT","staAM_TRANS:-1","staAM_TRANS:-116","125","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("철도비");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_RAILNOT_EST_USD_bg","staAM_RAILNOT:-1","staAM_RAILNOT:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_RAILNOT_EST_KRW_bg","staAM_RAILNOT_EST_USD_bg:-1","staAM_RAILNOT_EST_USD_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_RAILNOT_EXEC_REQ_bg","staAM_RAILNOT_EST_KRW_bg:-1","staAM_RAILNOT_EST_KRW_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_RAILNOT_EXEC_REQ_EX_bg","staAM_RAILNOT_EXEC_REQ_bg:-1","staAM_RAILNOT_EXEC_REQ_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_RAILNOT_SUBTOTAL_bg","staAM_RAILNOT_EXEC_REQ_EX_bg:-1","staAM_RAILNOT_EXEC_REQ_EX_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("172");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_RAILNOT_EXEC_RATIO_bg","staAM_RAILNOT_SUBTOTAL_bg:-1","staAM_RAILNOT_SUBTOTAL_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_RAILNOT_EST_USD","staAM_RAILNOT_EST_USD_bg:-140","staAM_RAILNOT_EST_USD_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("88");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_RAILNOT_EST_KRW","staAM_RAILNOT_EST_KRW_bg:-140","staAM_RAILNOT_EST_KRW_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("89");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_RAILNOT_EXEC_REQ","staAM_RAILNOT_EXEC_REQ_bg:-155","staAM_RAILNOT_EXEC_REQ_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("87");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_RAILNOT_EXEC_REQ_EX","staAM_RAILNOT_EXEC_REQ_EX_bg:-155","staAM_RAILNOT_EXEC_REQ_EX_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("136");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_RAILNOT_SUBTOTAL","staAM_RAILNOT_SUBTOTAL_bg:-155","staAM_RAILNOT_SUBTOTAL_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("173");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_RAILNOT_EXEC_RATIO","staAM_RAILNOT_EXEC_RATIO_bg:-140","staAM_RAILNOT_EXEC_RATIO_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("90");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SHIPNOT","staAM_TRANS:-1","staAM_TRANS:-87","125","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("선박비");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SHIPNOT_EST_USD_bg","staAM_SHIPNOT:-1","staAM_SHIPNOT:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SHIPNOT_EST_KRW_bg","staAM_SHIPNOT_EST_USD_bg:-1","staAM_SHIPNOT_EST_USD_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SHIPNOT_EXEC_REQ_bg","staAM_SHIPNOT_EST_KRW_bg:-1","staAM_SHIPNOT_EST_KRW_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SHIPNOT_EXEC_REQ_EX_bg","staAM_SHIPNOT_EXEC_REQ_bg:-1","staAM_SHIPNOT_EXEC_REQ_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SHIPNOT_SUBTOTAL_bg","staAM_SHIPNOT_EXEC_REQ_EX_bg:-1","staAM_SHIPNOT_EXEC_REQ_EX_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("174");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SHIPNOT_EXEC_RATIO_bg","staAM_SHIPNOT_SUBTOTAL_bg:-1","staAM_SHIPNOT_SUBTOTAL_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SHIPNOT_EST_USD","staAM_SHIPNOT_EST_USD_bg:-140","staAM_SHIPNOT_EST_USD_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("92");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SHIPNOT_EST_KRW","staAM_SHIPNOT_EST_KRW_bg:-140","staAM_SHIPNOT_EST_KRW_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("93");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SHIPNOT_EXEC_REQ","staAM_SHIPNOT_EXEC_REQ_bg:-155","staAM_SHIPNOT_EXEC_REQ_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("91");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SHIPNOT_EXEC_REQ_EX","staAM_SHIPNOT_EXEC_REQ_EX_bg:-155","staAM_SHIPNOT_EXEC_REQ_EX_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("140");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SHIPNOT_SUBTOTAL","staAM_SHIPNOT_SUBTOTAL_bg:-155","staAM_SHIPNOT_SUBTOTAL_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("175");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SHIPNOT_EXEC_RATIO","staAM_SHIPNOT_EXEC_RATIO_bg:-140","staAM_SHIPNOT_EXEC_RATIO_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("94");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_FLGTNOT","staAM_TRANS:-1","staAM_TRANS:-58","125","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("항공비");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_FLGTNOT_EST_USD_bg","staAM_FLGTNOT:-1","staAM_FLGTNOT:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_FLGTNOT_EST_KRW_bg","staAM_FLGTNOT_EST_USD_bg:-1","staAM_FLGTNOT_EST_USD_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_FLGTNOT_EXEC_REQ_bg","staAM_FLGTNOT_EST_KRW_bg:-1","staAM_FLGTNOT_EST_KRW_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_FLGTNOT_EXEC_REQ_EX_bg","staAM_FLGTNOT_EXEC_REQ_bg:-1","staAM_FLGTNOT_EXEC_REQ_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("143");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_FLGTNOT_SUBTOTAL_bg","staAM_FLGTNOT_EXEC_REQ_EX_bg:-1","staAM_FLGTNOT_EXEC_REQ_EX_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("176");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_FLGTNOT_EXEC_RATIO_bg","staAM_FLGTNOT_SUBTOTAL_bg:-1","staAM_FLGTNOT_SUBTOTAL_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_FLGTNOT_EST_USD","staAM_FLGTNOT_EST_USD_bg:-140","staAM_FLGTNOT_EST_USD_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("96");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_FLGTNOT_EST_KRW","staAM_FLGTNOT_EST_KRW_bg:-140","staAM_FLGTNOT_EST_KRW_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("97");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_FLGTNOT_EXEC_REQ","staAM_FLGTNOT_EXEC_REQ_bg:-155","staAM_FLGTNOT_EXEC_REQ_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("95");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_FLGTNOT_EXEC_REQ_EX","staAM_FLGTNOT_EXEC_REQ_EX_bg:-155","staAM_FLGTNOT_EXEC_REQ_EX_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("144");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_FLGTNOT_SUBTOTAL","staAM_FLGTNOT_SUBTOTAL_bg:-155","staAM_FLGTNOT_SUBTOTAL_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("177");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_FLGTNOT_EXEC_RATIO","staAM_FLGTNOT_EXEC_RATIO_bg:-140","staAM_FLGTNOT_EXEC_RATIO_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("98");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CARNOT","staAM_TRANS:-1","staAM_TRANS:-29","125","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("자동차비");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CARNOT_EST_USD_bg","staAM_CARNOT:-1","staAM_CARNOT:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CARNOT_EST_KRW_bg","staAM_CARNOT_EST_USD_bg:-1","staAM_CARNOT_EST_USD_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CARNOT_EXEC_REQ_bg","staAM_CARNOT_EST_KRW_bg:-1","staAM_CARNOT_EST_KRW_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CARNOT_EXEC_REQ_EX_bg","staAM_CARNOT_EXEC_REQ_bg:-1","staAM_CARNOT_EXEC_REQ_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CARNOT_SUBTOTAL_bg","staAM_CARNOT_EXEC_REQ_EX_bg:-1","staAM_CARNOT_EXEC_REQ_EX_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("178");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CARNOT_EXEC_RATIO_bg","staAM_CARNOT_SUBTOTAL_bg:-1","staAM_CARNOT_SUBTOTAL_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CARNOT_EST_USD","staAM_CARNOT_EST_USD_bg:-140","staAM_CARNOT_EST_USD_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("100");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CARNOT_EST_KRW","staAM_CARNOT_EST_KRW_bg:-140","staAM_CARNOT_EST_KRW_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("101");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CARNOT_EXEC_REQ","staAM_CARNOT_EXEC_REQ_bg:-155","staAM_CARNOT_EXEC_REQ_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("99");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CARNOT_EXEC_REQ_EX","staAM_CARNOT_EXEC_REQ_EX_bg:-155","staAM_CARNOT_EXEC_REQ_EX_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("148");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CARNOT_SUBTOTAL","staAM_CARNOT_SUBTOTAL_bg:-155","staAM_CARNOT_SUBTOTAL_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("179");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CARNOT_EXEC_RATIO","staAM_CARNOT_EXEC_RATIO_bg:-140","staAM_CARNOT_EXEC_RATIO_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("102");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_LDGGNOT","0","staAM_TRANS:-1","203","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("숙박비");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_LDGGNOT_EST_USD_bg","staAM_LDGGNOT:-1","staAM_LDGGNOT:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_LDGGNOT_EST_KRW_bg","staAM_LDGGNOT_EST_USD_bg:-1","staAM_LDGGNOT_EST_USD_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_LDGGNOT_EXEC_REQ_bg","staAM_LDGGNOT_EST_KRW_bg:-1","staAM_LDGGNOT_EST_KRW_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_LDGGNOT_EXEC_REQ_EX_bg","staAM_LDGGNOT_EXEC_REQ_bg:-1","staAM_LDGGNOT_EXEC_REQ_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("150");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_LDGGNOT_SUBTOTAL_bg","staAM_LDGGNOT_EXEC_REQ_EX_bg:-1","staAM_LDGGNOT_EXEC_REQ_EX_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("180");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_LDGGNOT_EXEC_RATIO_bg","staAM_LDGGNOT_SUBTOTAL_bg:-1","staAM_LDGGNOT_SUBTOTAL_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LDGGNOT_EST_USD","staAM_LDGGNOT_EST_USD_bg:-140","staAM_LDGGNOT_EST_USD_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("104");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LDGGNOT_EST_KRW","staAM_LDGGNOT_EST_KRW_bg:-140","staAM_LDGGNOT_EST_KRW_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("105");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LDGGNOT_EXEC_REQ","staAM_LDGGNOT_EXEC_REQ_bg:-155","staAM_LDGGNOT_EXEC_REQ_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("103");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LDGGNOT_EXEC_REQ_EX","staAM_LDGGNOT_EXEC_REQ_EX_bg:-155","staAM_LDGGNOT_EXEC_REQ_EX_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("152");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LDGGNOT_SUBTOTAL","staAM_LDGGNOT_SUBTOTAL_bg:-155","staAM_LDGGNOT_SUBTOTAL_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("181");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LDGGNOT_EXEC_RATIO","staAM_LDGGNOT_EXEC_RATIO_bg:-140","staAM_LDGGNOT_EXEC_RATIO_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("106");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CRMNNOT","0","staAM_LDGGNOT:-1","203","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("식비");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CRMNNOT_EST_USD_bg","staAM_CRMNNOT:-1","staAM_CRMNNOT:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CRMNNOT_EST_KRW_bg","staAM_CRMNNOT_EST_USD_bg:-1","staAM_CRMNNOT_EST_USD_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CRMNNOT_EXEC_REQ_bg","staAM_CRMNNOT_EST_KRW_bg:-1","staAM_CRMNNOT_EST_KRW_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CRMNNOT_EXEC_REQ_EX_bg","staAM_CRMNNOT_EXEC_REQ_bg:-1","staAM_CRMNNOT_EXEC_REQ_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CRMNNOT_SUBTOTAL_bg","staAM_CRMNNOT_EXEC_REQ_EX_bg:-1","staAM_CRMNNOT_EXEC_REQ_EX_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("182");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CRMNNOT_EXEC_RATIO_bg","staAM_CRMNNOT_SUBTOTAL_bg:-1","staAM_CRMNNOT_SUBTOTAL_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CRMNNOT_EST_USD","staAM_CRMNNOT_EST_USD_bg:-140","staAM_CRMNNOT_EST_USD_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("108");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CRMNNOT_EST_KRW","staAM_CRMNNOT_EST_KRW_bg:-140","staAM_CRMNNOT_EST_KRW_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("109");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CRMNNOT_EXEC_REQ","staAM_CRMNNOT_EXEC_REQ_bg:-155","staAM_CRMNNOT_EXEC_REQ_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("107");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CRMNNOT_EXEC_REQ_EX","staAM_CRMNNOT_EXEC_REQ_EX_bg:-155","staAM_CRMNNOT_EXEC_REQ_EX_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("154");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CRMNNOT_SUBTOTAL","staAM_CRMNNOT_SUBTOTAL_bg:-155","staAM_CRMNNOT_SUBTOTAL_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("183");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CRMNNOT_EXEC_RATIO","staAM_CRMNNOT_EXEC_RATIO_bg:-140","staAM_CRMNNOT_EXEC_RATIO_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("110");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ETCNOT","0","staAM_CRMNNOT:-1","203","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("잡비");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ETCNOT_EST_USD_bg","staAM_ETCNOT:-1","staAM_ETCNOT:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ETCNOT_EST_KRW_bg","staAM_ETCNOT_EST_USD_bg:-1","staAM_ETCNOT_EST_USD_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ETCNOT_EXEC_REQ_bg","staAM_ETCNOT_EST_KRW_bg:-1","staAM_ETCNOT_EST_KRW_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ETCNOT_EXEC_REQ_EX_bg","staAM_ETCNOT_EXEC_REQ_bg:-1","staAM_ETCNOT_EXEC_REQ_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("155");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ETCNOT_SUBTOTAL_bg","staAM_ETCNOT_EXEC_REQ_EX_bg:-1","staAM_ETCNOT_EXEC_REQ_EX_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("184");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ETCNOT_EXEC_RATIO_bg","staAM_ETCNOT_SUBTOTAL_bg:-1","staAM_ETCNOT_SUBTOTAL_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETCNOT_EST_USD","staAM_ETCNOT_EST_USD_bg:-140","staAM_ETCNOT_EST_USD_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("112");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETCNOT_EST_KRW","staAM_ETCNOT_EST_KRW_bg:-140","staAM_ETCNOT_EST_KRW_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("113");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETCNOT_EXEC_REQ","staAM_ETCNOT_EXEC_REQ_bg:-155","staAM_ETCNOT_EXEC_REQ_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("111");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETCNOT_EXEC_REQ_EX","staAM_ETCNOT_EXEC_REQ_EX_bg:-155","staAM_ETCNOT_EXEC_REQ_EX_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("156");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETCNOT_SUBTOTAL","staAM_ETCNOT_SUBTOTAL_bg:-155","staAM_ETCNOT_SUBTOTAL_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("185");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETCNOT_EXEC_RATIO","staAM_ETCNOT_EXEC_RATIO_bg:-140","staAM_ETCNOT_EXEC_RATIO_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("114");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ETC","0","staAM_ETCNOT:-1","79","116",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_COMMNOT","staAM_ETC:-1","staAM_ETC:-116","125","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("통신비(로밍)");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_COMMNOT_EST_USD_bg","staAM_COMMNOT:-1","staAM_COMMNOT:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_COMMNOT_EST_KRW_bg","staAM_COMMNOT_EST_USD_bg:-1","staAM_COMMNOT_EST_USD_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_COMMNOT_EXEC_REQ_bg","staAM_COMMNOT_EST_KRW_bg:-1","staAM_COMMNOT_EST_KRW_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_COMMNOT_EXEC_REQ_EX_bg","staAM_COMMNOT_EXEC_REQ_bg:-1","staAM_COMMNOT_EXEC_REQ_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("157");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_COMMNOT_SUBTOTAL_bg","staAM_COMMNOT_EXEC_REQ_EX_bg:-1","staAM_COMMNOT_EXEC_REQ_EX_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("186");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_COMMNOT_EXEC_RATIO_bg","staAM_COMMNOT_SUBTOTAL_bg:-1","staAM_COMMNOT_SUBTOTAL_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_COMMNOT_EST_USD","staAM_COMMNOT_EST_USD_bg:-140","staAM_COMMNOT_EST_USD_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("116");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_COMMNOT_EST_KRW","staAM_COMMNOT_EST_KRW_bg:-140","staAM_COMMNOT_EST_KRW_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("117");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_COMMNOT_EXEC_REQ","staAM_COMMNOT_EXEC_REQ_bg:-155","staAM_COMMNOT_EXEC_REQ_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("115");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_COMMNOT_EXEC_REQ_EX","staAM_COMMNOT_EXEC_REQ_EX_bg:-155","staAM_COMMNOT_EXEC_REQ_EX_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("158");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_COMMNOT_SUBTOTAL","staAM_COMMNOT_SUBTOTAL_bg:-155","staAM_COMMNOT_SUBTOTAL_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("187");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_COMMNOT_EXEC_RATIO","staAM_COMMNOT_EXEC_RATIO_bg:-140","staAM_COMMNOT_EXEC_RATIO_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("118");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_VISAPBCNCMMS","staAM_ETC:-1","staAM_ETC:-87","125","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("Visa 발급수수료");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_VISAPBCNCMMS_EST_USD_bg","staAM_VISAPBCNCMMS:-1","staAM_VISAPBCNCMMS:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_VISAPBCNCMMS_EST_KRW_bg","staAM_VISAPBCNCMMS_EST_USD_bg:-1","staAM_VISAPBCNCMMS_EST_USD_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_VISAPBCNCMMS_EXEC_REQ_bg","staAM_VISAPBCNCMMS_EST_KRW_bg:-1","staAM_VISAPBCNCMMS_EST_KRW_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_VISAPBCNCMMS_EXEC_REQ_EX_bg","staAM_VISAPBCNCMMS_EXEC_REQ_bg:-1","staAM_VISAPBCNCMMS_EXEC_REQ_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("159");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_VISAPBCNCMMS_SUBTOTAL_bg","staAM_VISAPBCNCMMS_EXEC_REQ_EX_bg:-1","staAM_VISAPBCNCMMS_EXEC_REQ_EX_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("188");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_VISAPBCNCMMS_EXEC_RATIO_bg","staAM_VISAPBCNCMMS_SUBTOTAL_bg:-1","staAM_VISAPBCNCMMS_SUBTOTAL_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_VISAPBCNCMMS_EST_USD","staAM_VISAPBCNCMMS_EST_USD_bg:-140","staAM_VISAPBCNCMMS_EST_USD_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("120");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_VISAPBCNCMMS_EST_KRW","staAM_VISAPBCNCMMS_EST_KRW_bg:-140","staAM_VISAPBCNCMMS_EST_KRW_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("121");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_VISAPBCNCMMS_EXEC_REQ","staAM_VISAPBCNCMMS_EXEC_REQ_bg:-155","staAM_VISAPBCNCMMS_EXEC_REQ_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("119");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_VISAPBCNCMMS_EXEC_REQ_EX","staAM_VISAPBCNCMMS_EXEC_REQ_EX_bg:-155","staAM_VISAPBCNCMMS_EXEC_REQ_EX_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("160");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_VISAPBCNCMMS_SUBTOTAL","staAM_VISAPBCNCMMS_SUBTOTAL_bg:-155","staAM_VISAPBCNCMMS_SUBTOTAL_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("189");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_VISAPBCNCMMS_EXEC_RATIO","staAM_VISAPBCNCMMS_EXEC_RATIO_bg:-140","staAM_VISAPBCNCMMS_EXEC_RATIO_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("122");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_INSRCOST","staAM_ETC:-1","staAM_ETC:-58","125","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("추가비용1");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_INSRCOST_EST_USD_bg","staAM_INSRCOST:-1","staAM_INSRCOST:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_INSRCOST_EST_KRW_bg","staAM_INSRCOST_EST_USD_bg:-1","staAM_INSRCOST_EST_USD_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_INSRCOST_EXEC_REQ_bg","staAM_INSRCOST_EST_KRW_bg:-1","staAM_INSRCOST_EST_KRW_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_INSRCOST_EXEC_REQ_EX_bg","staAM_INSRCOST_EXEC_REQ_bg:-1","staAM_INSRCOST_EXEC_REQ_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("161");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_INSRCOST_SUBTOTAL_bg","staAM_INSRCOST_EXEC_REQ_EX_bg:-1","staAM_INSRCOST_EXEC_REQ_EX_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("190");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_INSRCOST_EXEC_RATIO_bg","staAM_INSRCOST_SUBTOTAL_bg:-1","staAM_INSRCOST_SUBTOTAL_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INSRCOST_EST_USD","staAM_INSRCOST_EST_USD_bg:-140","staAM_INSRCOST_EST_USD_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("124");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INSRCOST_EST_KRW","staAM_INSRCOST_EST_KRW_bg:-140","staAM_INSRCOST_EST_KRW_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("125");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INSRCOST_EXEC_REQ","staAM_INSRCOST_EXEC_REQ_bg:-155","staAM_INSRCOST_EXEC_REQ_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("123");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INSRCOST_EXEC_REQ_EX","staAM_INSRCOST_EXEC_REQ_EX_bg:-155","staAM_INSRCOST_EXEC_REQ_EX_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("162");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INSRCOST_SUBTOTAL","staAM_INSRCOST_SUBTOTAL_bg:-155","staAM_INSRCOST_SUBTOTAL_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("191");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INSRCOST_EXEC_RATIO","staAM_INSRCOST_EXEC_RATIO_bg:-140","staAM_INSRCOST_EXEC_RATIO_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("126");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ETCADTNCOST","staAM_ETC:-1","staAM_ETC:-29","125","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("추가비용2");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ETCADTNCOST_EST_USD_bg","staAM_ETCADTNCOST:-1","staAM_ETCADTNCOST:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ETCADTNCOST_EST_KRW_bg","staAM_ETCADTNCOST_EST_USD_bg:-1","staAM_ETCADTNCOST_EST_USD_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ETCADTNCOST_EXEC_REQ_bg","staAM_ETCADTNCOST_EST_KRW_bg:-1","staAM_ETCADTNCOST_EST_KRW_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ETCADTNCOST_EXEC_REQ_EX_bg","staAM_ETCADTNCOST_EXEC_REQ_bg:-1","staAM_ETCADTNCOST_EXEC_REQ_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("163");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ETCADTNCOST_SUBTOTAL_bg","staAM_ETCADTNCOST_EXEC_REQ_EX_bg:-1","staAM_ETCADTNCOST_EXEC_REQ_EX_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("192");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ETCADTNCOST_EXEC_RATIO_bg","staAM_ETCADTNCOST_SUBTOTAL_bg:-1","staAM_ETCADTNCOST_SUBTOTAL_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETCADTNCOST_EST_USD","staAM_ETCADTNCOST_EST_USD_bg:-140","staAM_ETCADTNCOST_EST_USD_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("128");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETCADTNCOST_EST_KRW","staAM_ETCADTNCOST_EST_KRW_bg:-140","staAM_ETCADTNCOST_EST_KRW_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("132");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETCADTNCOST_EXEC_REQ","staAM_ETCADTNCOST_EXEC_REQ_bg:-155","staAM_ETCADTNCOST_EXEC_REQ_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("127");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETCADTNCOST_EXEC_REQ_EX","staAM_ETCADTNCOST_EXEC_REQ_EX_bg:-155","staAM_ETCADTNCOST_EXEC_REQ_EX_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("164");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETCADTNCOST_SUBTOTAL","staAM_ETCADTNCOST_SUBTOTAL_bg:-155","staAM_ETCADTNCOST_SUBTOTAL_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("193");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETCADTNCOST_EXEC_RATIO","staAM_ETCADTNCOST_EXEC_RATIO_bg:-140","staAM_ETCADTNCOST_EXEC_RATIO_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("134");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTOTAL","0","staAM_ETC:-1","203","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTOTAL_EST_USD_bg","staTOTAL:-1","staTOTAL:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTOTAL_EST_KRW_bg","staTOTAL_EST_USD_bg:-1","staTOTAL_EST_USD_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTOTAL_EXEC_REQ_bg","staTOTAL_EST_KRW_bg:-1","staTOTAL_EST_KRW_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTOTAL_EXEC_REQ_EX_bg","staTOTAL_EXEC_REQ_bg:-1","staTOTAL_EXEC_REQ_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("165");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTOTAL_SUBTOTAL_bg","staTOTAL_EXEC_REQ_EX_bg:-1","staTOTAL_EXEC_REQ_EX_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("194");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTOTAL_EXEC_RATIO_bg","staTOTAL_SUBTOTAL_bg:-1","staTOTAL_SUBTOTAL_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskTOTAL_EST_USD","staTOTAL_EST_USD_bg:-140","staTOTAL_EST_USD_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("137");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskTOTAL_EST_KRW","staTOTAL_EST_KRW_bg:-140","staTOTAL_EST_KRW_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("139");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskTOTAL_EXEC_REQ","staTOTAL_EXEC_REQ_bg:-155","staTOTAL_EXEC_REQ_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("135");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskTOTAL_EXEC_REQ_EX","staTOTAL_EXEC_REQ_EX_bg:-155","staTOTAL_EXEC_REQ_EX_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("166");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskTOTAL_SUBTOTAL","staTOTAL_SUBTOTAL_bg:-155","staTOTAL_SUBTOTAL_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("195");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskTOTAL_EXEC_RATIO","staTOTAL_EXEC_RATIO_bg:-140","staTOTAL_EXEC_RATIO_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("141");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TCHMCOST","0","staTOTAL:-1","203","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("[별도계정] 교제비");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TCHMCOST_EST_USD_bg","staAM_TCHMCOST:-1","staAM_TCHMCOST:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TCHMCOST_EST_KRW_bg","staAM_TCHMCOST_EST_USD_bg:-1","staAM_TCHMCOST_EST_USD_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TCHMCOST_EXEC_REQ_bg","staAM_TCHMCOST_EST_KRW_bg:-1","staAM_TCHMCOST_EST_KRW_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TCHMCOST_EXEC_REQ_EX_bg","staAM_TCHMCOST_EXEC_REQ_bg:-1","staAM_TCHMCOST_EXEC_REQ_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("167");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TCHMCOST_SUBTOTAL_bg","staAM_TCHMCOST_EXEC_REQ_EX_bg:-1","staAM_TCHMCOST_EXEC_REQ_EX_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("196");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TCHMCOST_EXEC_RATIO_bg","staAM_TCHMCOST_SUBTOTAL_bg:-1","staAM_TCHMCOST_SUBTOTAL_bg:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TCHMCOST_EST_USD","staAM_TCHMCOST_EST_USD_bg:-140","staAM_TCHMCOST_EST_USD_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("145");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TCHMCOST_EST_KRW","staAM_TCHMCOST_EST_KRW_bg:-140","staAM_TCHMCOST_EST_KRW_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("147");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TCHMCOST_EXEC_REQ","staAM_TCHMCOST_EXEC_REQ_bg:-155","staAM_TCHMCOST_EXEC_REQ_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("142");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TCHMCOST_EXEC_REQ_EX","staAM_TCHMCOST_EXEC_REQ_EX_bg:-155","staAM_TCHMCOST_EXEC_REQ_EX_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("168");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TCHMCOST_SUBTOTAL","staAM_TCHMCOST_SUBTOTAL_bg:-155","staAM_TCHMCOST_SUBTOTAL_bg:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("197");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TCHMCOST_EXEC_RATIO","staAM_TCHMCOST_EXEC_RATIO_bg:-140","staAM_TCHMCOST_EXEC_RATIO_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("149");
            obj.set_format("###,##0.#0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_REQ","0","staAM_TCHMCOST:-1","203","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("199");
            obj.set_text("신청금액(원)");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_REQ_bg","staAM_REQ:-1","staAM_REQ:-30","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("200");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_REQ","staAM_REQ_bg:-284","staAM_REQ_bg:-25","279","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("203");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ADVPGLD_KRW","staAM_REQ_bg:-1","staAM_REQ_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("205");
            obj.set_text("가불금(원)");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ADVPGLD_KRW_bg","staAM_ADVPGLD_KRW:-1","staAM_ADVPGLD_KRW:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("201");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ADVPGLD_KRW","staAM_ADVPGLD_KRW_bg:-140","staAM_ADVPGLD_KRW_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("204");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TOTAL","staAM_ADVPGLD_KRW_bg:-1","staAM_ADVPGLD_KRW_bg:-30","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("207");
            obj.set_text("최종정산금(원)");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TOTAL_bg","staAM_TOTAL:-1","staAM_TOTAL:-30","145","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("202");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TOTAL","staAM_TOTAL_bg:-140","staAM_TOTAL_bg:-25","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("208");
            obj.set_format("###,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_RMK","0","staAM_REQ:-1","203","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_RMK_bg","staDS_RMK:-1","staDS_RMK:-90","910","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RMK","staDS_RMK_bg:-905","staDS_RMK_bg:-85","900","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("151");
            obj.set_wordWrap("char");
            obj.set_maxlength("300");
            obj.set_scrolltype("vertical");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_RESON","0","staDS_RMK:-1","203","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("198");
            obj.set_text("예산 초과 사유");
            obj.set_cssclass("sta_WF_tablelabelN");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_RESON_bg","staDS_RESON:-1","staDS_RESON:-80","910","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RESON","staDS_RESON_bg:-905","staDS_RESON_bg:-75","900","70",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("151");
            obj.set_wordWrap("char");
            obj.set_maxlength("300");
            obj.set_scrolltype("vertical");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","489","staDS_RESON:9","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.ccfBZTP_AREA.form.CDTextBox","value","dsSearch","CD_AREA_BZTP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfBZTP_AREA.form.DSTextBox","value","dsSearch","DS_AREA_BZTP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.tclDT_WRITE","value","dsSearch","DT_WRITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN_APL.form.CDTextBox","value","dsSearch","ID_SABUN_APL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfID_SABUN_APL.form.DSTextBox","value","dsSearch","DS_HANME_APL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfID_SABUN_BZTP.form.CDTextBox","value","dsSearch","ID_SABUN_BZTP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfID_SABUN_BZTP.form.DSTextBox","value","dsSearch","DS_HNAME_BZTP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.tclDT_BZTP_FROM","value","dsSearch","DT_BZTP_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.tclDT_BZTP_TO","value","dsSearch","DT_BZTP_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ccfCD_EMPTYPE_BZTP.form.CDTextBox","value","dsSearch","CD_EMPTYPE_BZTP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.ccfCD_EMPTYPE_BZTP.form.DSTextBox","value","dsSearch","DS_EMPTYPE_BZTP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_BZTP_RPT_OVERSEAS_DLG.xfdl", function() {
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
        	this.staNotice = this.divData.form.staNotice;				// 주의사항
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 출장보고 상세 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("SN_BZTPSEQ", "string");
        	this.dsSelect.addColumn("ID_SABUN_BZTP", "string");
        	this.dsSelect.addColumn("TY_BZTP", "string");

        	// 출장보고 상세 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("SN_BZTPSEQ", "string");
        	this.dsSave.addColumn("ID_PERSON_BZTP", "int");
        	this.dsSave.addColumn("ID_SABUN_BZTP", "string");
        	this.dsSave.addColumn("TY_BZTP", "string");
        	this.dsSave.addColumn("DT_WRITE", "string");
        	this.dsSave.addColumn("DS_RMK", "string");
        	this.dsSave.addColumn("DS_RESON", "string");
        	this.dsSave.addColumn("AM_IOUTBRUFLGTNOT_APLT", "bigdecimal");
        	this.dsSave.addColumn("AM_RAILNOT_APLT", "bigdecimal");
        	this.dsSave.addColumn("AM_SHIPNOT_APLT", "bigdecimal");
        	this.dsSave.addColumn("AM_FLGTNOT_APLT", "bigdecimal");
        	this.dsSave.addColumn("AM_CARNOT_APLT", "bigdecimal");
        	this.dsSave.addColumn("AM_LDGGNOT_APLT", "bigdecimal");
        	this.dsSave.addColumn("AM_CRMNNOT_APLT", "bigdecimal");
        	this.dsSave.addColumn("AM_ETCNOT_APLT", "bigdecimal");
        	this.dsSave.addColumn("AM_COMMNOT_APLT", "bigdecimal");
        	this.dsSave.addColumn("AM_VISAPBCNCMMS_APLT", "bigdecimal");
        	this.dsSave.addColumn("AM_INSRCOST_APLT", "bigdecimal");
        	this.dsSave.addColumn("AM_ETCADTNCOST_APLT", "bigdecimal");
        	this.dsSave.addColumn("AM_TCHMCOST_APLT", "bigdecimal");
        	this.dsSave.addColumn("AM_IOUTBRUFLGTNOT_APLTXCLS", "bigdecimal");
        	this.dsSave.addColumn("AM_RAILNOT_APLTXCLS", "bigdecimal");
        	this.dsSave.addColumn("AM_SHIPNOT_APLTXCLS", "bigdecimal");
        	this.dsSave.addColumn("AM_FLGTNOT_APLTXCLS", "bigdecimal");
        	this.dsSave.addColumn("AM_CARNOT_APLTXCLS", "bigdecimal");
        	this.dsSave.addColumn("AM_LDGGNOT_APLTXCLS", "bigdecimal");
        	this.dsSave.addColumn("AM_CRMNNOT_APLTXCLS", "bigdecimal");
        	this.dsSave.addColumn("AM_ETCNOT_APLTXCLS", "bigdecimal");
        	this.dsSave.addColumn("AM_COMMNOT_APLTXCLS", "bigdecimal");
        	this.dsSave.addColumn("AM_VISAPBCNCMMS_APLTXCLS", "bigdecimal");
        	this.dsSave.addColumn("AM_INSRCOST_APLTXCLS", "bigdecimal");
        	this.dsSave.addColumn("AM_ETCADTNCOST_APLTXCLS", "bigdecimal");
        	this.dsSave.addColumn("AM_TCHMCOST_APLTXCLS", "bigdecimal");
        	this.dsSave.addColumn("AM_IOUTBRUFLGTNOT_EXEC_SBTT", "bigdecimal");
        	this.dsSave.addColumn("AM_RAILNOT_EXEC_SBTT", "bigdecimal");
        	this.dsSave.addColumn("AM_SHIPNOT_EXEC_SBTT", "bigdecimal");
        	this.dsSave.addColumn("AM_FLGTNOT_EXEC_SBTT", "bigdecimal");
        	this.dsSave.addColumn("AM_CARNOT_EXEC_SBTT", "bigdecimal");
        	this.dsSave.addColumn("AM_LDGGNOT_EXEC_SBTT", "bigdecimal");
        	this.dsSave.addColumn("AM_CRMNNOT_EXEC_SBTT", "bigdecimal");
        	this.dsSave.addColumn("AM_ETCNOT_EXEC_SBTT", "bigdecimal");
        	this.dsSave.addColumn("AM_COMMNOT_EXEC_SBTT", "bigdecimal");
        	this.dsSave.addColumn("AM_VISAPBCNCMMS_EXEC_SBTT", "bigdecimal");
        	this.dsSave.addColumn("AM_INSRCOST_EXEC_SBTT", "bigdecimal");
        	this.dsSave.addColumn("AM_ETCADTNCOST_EXEC_SBTT", "bigdecimal");
        	this.dsSave.addColumn("AM_TCHMCOST_EXEC_SBTT", "bigdecimal");
        	this.dsSave.addColumn("AM_IOUTBRUFLGTNOT_EXECRT", "bigdecimal");
        	this.dsSave.addColumn("AM_RAILNOT_EXECRT", "bigdecimal");
        	this.dsSave.addColumn("AM_SHIPNOT_EXECRT", "bigdecimal");
        	this.dsSave.addColumn("AM_FLGTNOT_EXECRT", "bigdecimal");
        	this.dsSave.addColumn("AM_CARNOT_EXECRT", "bigdecimal");
        	this.dsSave.addColumn("AM_LDGGNOT_EXECRT", "bigdecimal");
        	this.dsSave.addColumn("AM_CRMNNOT_EXECRT", "bigdecimal");
        	this.dsSave.addColumn("AM_ETCNOT_EXECRT", "bigdecimal");
        	this.dsSave.addColumn("AM_COMMNOT_EXECRT", "bigdecimal");
        	this.dsSave.addColumn("AM_VISAPBCNCMMS_EXECRT", "bigdecimal");
        	this.dsSave.addColumn("AM_INSRCOST_EXECRT", "bigdecimal");
        	this.dsSave.addColumn("AM_ETCADTNCOST_EXECRT", "bigdecimal");
        	this.dsSave.addColumn("AM_TCHMCOST_EXECRT", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_APLT", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_APLTXCLS", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_EXEC_SBTT", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_EXECRT", "bigdecimal");
        	this.dsSave.addColumn("AM_FNALSOAGLD", "bigdecimal");

        	// 상세내역을 기준으로 출장보고서 신청/신청제외 금액 업데이트
        	this.dsUpdateRptDetail = new Dataset();
        	this.dsUpdateRptDetail.addColumn("CD_CORP", "string");
        	this.dsUpdateRptDetail.addColumn("SN_BZTPSEQ", "string");
        	this.dsUpdateRptDetail.addColumn("ID_SABUN_BZTP", "string");
        	this.dsUpdateRptDetail.addColumn("TY_BZTP", "string");

        	// 출장비용증빙 조회
        	this.dsSelectRptProof = new Dataset();
        	this.dsSelectRptProof.addColumn("CD_CORP", "string");
        	this.dsSelectRptProof.addColumn("SN_BZTPSEQ", "string");
        	this.dsSelectRptProof.addColumn("ID_SABUN_BZTP", "string");
        	this.dsSelectRptProof.addColumn("TY_BZTP", "string");
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
        	if (this.getOwnerFrame().READ_ONLY == true) {
        		// 집행금액(KRW) 신청금액
        		this.divData.form.mskAM_IOUTBRUFLGTNOT_EXEC_REQ.set_enable(false);
        		this.divData.form.mskAM_RAILNOT_EXEC_REQ.set_enable(false);
        		this.divData.form.mskAM_SHIPNOT_EXEC_REQ.set_enable(false);
        		this.divData.form.mskAM_FLGTNOT_EXEC_REQ.set_enable(false);
        		this.divData.form.mskAM_CARNOT_EXEC_REQ.set_enable(false);
        		this.divData.form.mskAM_LDGGNOT_EXEC_REQ.set_enable(false);
        		this.divData.form.mskAM_CRMNNOT_EXEC_REQ.set_enable(false);
        		this.divData.form.mskAM_ETCNOT_EXEC_REQ.set_enable(false);
        		this.divData.form.mskAM_COMMNOT_EXEC_REQ.set_enable(false);
        		this.divData.form.mskAM_VISAPBCNCMMS_EXEC_REQ.set_enable(false);
        		this.divData.form.mskAM_INSRCOST_EXEC_REQ.set_enable(false);
        		this.divData.form.mskAM_ETCADTNCOST_EXEC_REQ.set_enable(false);
        		this.divData.form.mskAM_TCHMCOST_EXEC_REQ.set_enable(false);
        		// 집행금액(KRW) 신청제외금액(법인카드 등)
        		this.divData.form.mskAM_IOUTBRUFLGTNOT_EXEC_REQ_EX.set_enable(false);
        		this.divData.form.mskAM_RAILNOT_EXEC_REQ_EX.set_enable(false);
        		this.divData.form.mskAM_SHIPNOT_EXEC_REQ_EX.set_enable(false);
        		this.divData.form.mskAM_FLGTNOT_EXEC_REQ_EX.set_enable(false);
        		this.divData.form.mskAM_CARNOT_EXEC_REQ_EX.set_enable(false);
        		this.divData.form.mskAM_LDGGNOT_EXEC_REQ_EX.set_enable(false);
        		this.divData.form.mskAM_CRMNNOT_EXEC_REQ_EX.set_enable(false);
        		this.divData.form.mskAM_ETCNOT_EXEC_REQ_EX.set_enable(false);
        		this.divData.form.mskAM_COMMNOT_EXEC_REQ_EX.set_enable(false);
        		this.divData.form.mskAM_VISAPBCNCMMS_EXEC_REQ_EX.set_enable(false);
        		this.divData.form.mskAM_INSRCOST_EXEC_REQ_EX.set_enable(false);
        		this.divData.form.mskAM_ETCADTNCOST_EXEC_REQ_EX.set_enable(false);
        		this.divData.form.mskAM_TCHMCOST_EXEC_REQ_EX.set_enable(false);
        		// 비고
        		this.divData.form.txtDS_RMK.set_enable(false);
        		this.divData.form.txtDS_RESON.set_enable(false);

        		this.divData.form.divBtns.form.btnOK.set_enable(false);		// 저장 버튼
        	}
        	this.dsSearch.setColumn(0, "CD_CORP"        , this.getOwnerFrame().CD_CORP);			// 법인
        	this.dsSearch.setColumn(0, "DS_CORP"        , this.getOwnerFrame().DS_CORP);
        	this.dsSearch.setColumn(0, "SN_BZTPSEQ"     , this.getOwnerFrame().SN_BZTPSEQ);			// 출장순번
        	this.dsSearch.setColumn(0, "TY_BZTP"        , this.getOwnerFrame().TY_BZTP);			// 유형
        	this.dsSearch.setColumn(0, "ID_SABUN_APL"   , this.getOwnerFrame().ID_SABUN_APL);		// 신청자
        	this.dsSearch.setColumn(0, "DS_HANME_APL"   , this.getOwnerFrame().DS_HANME_APL);
        	this.dsSearch.setColumn(0, "DT_BZTP_FROM"   , this.getOwnerFrame().DT_BZTP_FROM);		// 출장일(FROM)
        	this.dsSearch.setColumn(0, "DT_BZTP_TO"     , this.getOwnerFrame().DT_BZTP_TO);			// 출장일(TO)
        	this.dsSearch.setColumn(0, "CD_AREA_BZTP"   , this.getOwnerFrame().CD_AREA_BZTP);		// 출장지역
        	this.dsSearch.setColumn(0, "DS_AREA_BZTP"   , this.getOwnerFrame().DS_AREA_BZTP);
        	this.dsSearch.setColumn(0, "ID_SABUN_BZTP"  , this.getOwnerFrame().ID_SABUN_BZTP);		// 출장자
        	this.dsSearch.setColumn(0, "DS_HNAME_BZTP"  , this.getOwnerFrame().DS_HNAME_BZTP);
        	this.dsSearch.setColumn(0, "CD_EMPTYPE_BZTP", this.getOwnerFrame().CD_EMPTYPE_BZTP);	// 출장직급
        	this.dsSearch.setColumn(0, "DS_EMPTYPE_BZTP", this.getOwnerFrame().DS_EMPTYPE_BZTP);
        	this.dsSearch.setColumn(0, "DT_WRITE"       , this.getOwnerFrame().DT_WRITE);			// 작성일
        	this.dsSearch.setColumn(0, "AM_STDEXRT"     , this.getOwnerFrame().AM_STDEXRT);			// 기준환율
        	this.dsSearch.setColumn(0, "AM_ADVPGLD"     , this.getOwnerFrame().AM_ADVPGLD);			// 가불금

        	this.dsSearch.setColumn(0, "DT_BZTP",         this.gfnGetDiffDate(this.getOwnerFrame().DT_BZTP_FROM, this.getOwnerFrame().DT_BZTP_TO) + 1);	// 출장기간
        	this.dsSearch.setColumn(0, "DS_NOTICE",       this.getOwnerFrame().DS_NOTICE);			// 주의사항

        	this.divData.form.mskAM_ADVPGLD_KRW.set_value(this.getOwnerFrame().AM_ADVPGLD);

        	this.fnSelect();
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "SN_BZTPSEQ"   , this.dsSearch.getColumn(0, "SN_BZTPSEQ"));
        	this.dsSelect.setColumn(0, "ID_SABUN_BZTP", this.dsSearch.getColumn(0, "ID_SABUN_BZTP"));
        	this.dsSelect.setColumn(0, "TY_BZTP"      , "R");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
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

        /*
         * 추가 버튼
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
        // 	if (this.dsSearch.getColumn(0, "DT_BZTP") > 30) { // 출장일수 30일 초과 체크 (30일 초과일수에 대한 숙박비,식비,잡비는 10분의 7로 지급함)
        // 		this.gfnConfirm("출장일수가 " + this.gfnAppendComma(this.dsSearch.getColumn(0, "DT_BZTP")) + "일로\n30일 초과일수에 대한 숙박비, 식비, 잡비는 10분의 7로 산정됩니다.\n진행하시겠습니까?", function(strId, val) {
        // 			if (val == false) {
        // 				return;
        // 			}
        // 			this.fnSaveCallback();
        // 		});
        // 	} else {
        	this.fnSaveCallback();
        /*	}*/
        }
        this.fnSaveCallback = function() {
        	var TY_WRK        = this.dsList.getColumn(0, "TY_WRK");
            var CD_CORP       = this.dsSearch.getColumn(0, "CD_CORP");
            var SN_BZTPSEQ    = this.dsSearch.getColumn(0, "SN_BZTPSEQ");
            var ID_SABUN_BZTP = this.dsSearch.getColumn(0, "ID_SABUN_BZTP");
            var TY_BZTP       = this.dsSearch.getColumn(0, "TY_BZTP");			// 보고유형
        	var DT_WRITE      = this.dsSearch.getColumn(0, "DT_WRITE");			// 작성일자
        	var DS_RMK		  = this.divData.form.txtDS_RMK.value;				// 비고
        	var DS_RESON	  = this.divData.form.txtDS_RESON.value;			// 예산 초과 사유

        	// 집행금액(KRW) 신청금액
        	var AM_IOUTBRUFLGTNOT_APLT = this.divData.form.mskAM_IOUTBRUFLGTNOT_EXEC_REQ.value;	// 입출국항공료
        	var AM_RAILNOT_APLT        = this.divData.form.mskAM_RAILNOT_EXEC_REQ.value;		// 철도비
        	var AM_SHIPNOT_APLT        = this.divData.form.mskAM_SHIPNOT_EXEC_REQ.value;		// 선박비
        	var AM_FLGTNOT_APLT        = this.divData.form.mskAM_FLGTNOT_EXEC_REQ.value;		// 항공비
        	var AM_CARNOT_APLT         = this.divData.form.mskAM_CARNOT_EXEC_REQ.value;			// 자동차비
        	var AM_LDGGNOT_APLT        = this.divData.form.mskAM_LDGGNOT_EXEC_REQ.value;		// 숙박비
        	var AM_CRMNNOT_APLT        = this.divData.form.mskAM_CRMNNOT_EXEC_REQ.value;		// 식비
        	var AM_ETCNOT_APLT         = this.divData.form.mskAM_ETCNOT_EXEC_REQ.value;			// 잡비
        	var AM_COMMNOT_APLT        = this.divData.form.mskAM_COMMNOT_EXEC_REQ.value;		// 통신비
        	var AM_VISAPBCNCMMS_APLT   = this.divData.form.mskAM_VISAPBCNCMMS_EXEC_REQ.value;	// 비자발급수수료
        	var AM_INSRCOST_APLT       = this.divData.form.mskAM_INSRCOST_EXEC_REQ.value;		// 보험료
        	var AM_ETCADTNCOST_APLT    = this.divData.form.mskAM_ETCADTNCOST_EXEC_REQ.value;	// 추가비용
        	var AM_TCHMCOST_APLT       = this.divData.form.mskAM_TCHMCOST_EXEC_REQ.value;		// 교제비

        	// 집행금액(KRW) 신청금액제외
        	var AM_IOUTBRUFLGTNOT_APLTXCLS = this.divData.form.mskAM_IOUTBRUFLGTNOT_EXEC_REQ_EX.value;	// 입출국항공료
        	var AM_RAILNOT_APLTXCLS        = this.divData.form.mskAM_RAILNOT_EXEC_REQ_EX.value;			// 철도비
        	var AM_SHIPNOT_APLTXCLS        = this.divData.form.mskAM_SHIPNOT_EXEC_REQ_EX.value;			// 선박비
        	var AM_FLGTNOT_APLTXCLS        = this.divData.form.mskAM_FLGTNOT_EXEC_REQ_EX.value;			// 항공비
        	var AM_CARNOT_APLTXCLS         = this.divData.form.mskAM_CARNOT_EXEC_REQ_EX.value;			// 자동차비
        	var AM_LDGGNOT_APLTXCLS        = this.divData.form.mskAM_LDGGNOT_EXEC_REQ_EX.value;			// 숙박비
        	var AM_CRMNNOT_APLTXCLS        = this.divData.form.mskAM_CRMNNOT_EXEC_REQ_EX.value;			// 식비
        	var AM_ETCNOT_APLTXCLS         = this.divData.form.mskAM_ETCNOT_EXEC_REQ_EX.value;			// 잡비
        	var AM_COMMNOT_APLTXCLS        = this.divData.form.mskAM_COMMNOT_EXEC_REQ_EX.value;			// 통신비
        	var AM_VISAPBCNCMMS_APLTXCLS   = this.divData.form.mskAM_VISAPBCNCMMS_EXEC_REQ_EX.value;	// 비자발급수수료
        	var AM_INSRCOST_APLTXCLS       = this.divData.form.mskAM_INSRCOST_EXEC_REQ_EX.value;		// 보험료
        	var AM_ETCADTNCOST_APLTXCLS    = this.divData.form.mskAM_ETCADTNCOST_EXEC_REQ_EX.value;		// 추가비용
        	var AM_TCHMCOST_APLTXCLS       = this.divData.form.mskAM_TCHMCOST_EXEC_REQ_EX.value;		// 교제비

        	// 집행금액(KRW) 소계
        	var AM_IOUTBRUFLGTNOT_EXEC_SBTT = this.divData.form.mskAM_IOUTBRUFLGTNOT_SUBTOTAL.value;	// 입출국항공료
        	var AM_RAILNOT_EXEC_SBTT        = this.divData.form.mskAM_RAILNOT_SUBTOTAL.value;			// 철도비
        	var AM_SHIPNOT_EXEC_SBTT        = this.divData.form.mskAM_SHIPNOT_SUBTOTAL.value;			// 선박비
        	var AM_FLGTNOT_EXEC_SBTT        = this.divData.form.mskAM_FLGTNOT_SUBTOTAL.value;			// 항공비
        	var AM_CARNOT_EXEC_SBTT         = this.divData.form.mskAM_CARNOT_SUBTOTAL.value;			// 자동차비
        	var AM_LDGGNOT_EXEC_SBTT        = this.divData.form.mskAM_LDGGNOT_SUBTOTAL.value;			// 숙박비
        	var AM_CRMNNOT_EXEC_SBTT        = this.divData.form.mskAM_CRMNNOT_SUBTOTAL.value;			// 식비
        	var AM_ETCNOT_EXEC_SBTT         = this.divData.form.mskAM_ETCNOT_SUBTOTAL.value;			// 잡비
        	var AM_COMMNOT_EXEC_SBTT        = this.divData.form.mskAM_COMMNOT_SUBTOTAL.value;			// 통신비
        	var AM_VISAPBCNCMMS_EXEC_SBTT   = this.divData.form.mskAM_VISAPBCNCMMS_SUBTOTAL.value;		// 비자발급수수료
        	var AM_INSRCOST_EXEC_SBTT       = this.divData.form.mskAM_INSRCOST_SUBTOTAL.value;			// 보험료
        	var AM_ETCADTNCOST_EXEC_SBTT    = this.divData.form.mskAM_ETCADTNCOST_SUBTOTAL.value;		// 추가비용
        	var AM_TCHMCOST_EXEC_SBTT       = this.divData.form.mskAM_TCHMCOST_SUBTOTAL.value;			// 교제비

        	// 예산대비집행율(%)
        	var AM_IOUTBRUFLGTNOT_EXECRT = this.divData.form.mskAM_IOUTBRUFLGTNOT_EXEC_RATIO.value;	// 입출국항공료
        	var AM_RAILNOT_EXECRT        = this.divData.form.mskAM_RAILNOT_EXEC_RATIO.value;		// 철도비
        	var AM_SHIPNOT_EXECRT        = this.divData.form.mskAM_SHIPNOT_EXEC_RATIO.value;		// 선박비
        	var AM_FLGTNOT_EXECRT        = this.divData.form.mskAM_FLGTNOT_EXEC_RATIO.value;		// 항공비
        	var AM_CARNOT_EXECRT         = this.divData.form.mskAM_CARNOT_EXEC_RATIO.value;			// 자동차비
        	var AM_LDGGNOT_EXECRT        = this.divData.form.mskAM_LDGGNOT_EXEC_RATIO.value;		// 숙박비
        	var AM_CRMNNOT_EXECRT        = this.divData.form.mskAM_CRMNNOT_EXEC_RATIO.value;		// 식비
        	var AM_ETCNOT_EXECRT         = this.divData.form.mskAM_ETCNOT_EXEC_RATIO.value;			// 잡비
        	var AM_COMMNOT_EXECRT        = this.divData.form.mskAM_COMMNOT_EXEC_RATIO.value;		// 통신비
        	var AM_VISAPBCNCMMS_EXECRT   = this.divData.form.mskAM_VISAPBCNCMMS_EXEC_RATIO.value;	// 비자발급수수료
        	var AM_INSRCOST_EXECRT       = this.divData.form.mskAM_INSRCOST_EXEC_RATIO.value;		// 보험료
        	var AM_ETCADTNCOST_EXECRT    = this.divData.form.mskAM_ETCADTNCOST_EXEC_RATIO.value;	// 추가비용
        	var AM_TCHMCOST_EXECRT       = this.divData.form.mskAM_TCHMCOST_EXEC_RATIO.value;		// 교제비

        	// 합계
        	var AM_TT_APLT      = this.divData.form.mskTOTAL_EXEC_REQ.value;	// 집행금액(KRW) 신청금액
        	var AM_TT_APLTXCLS  = this.divData.form.mskTOTAL_EXEC_REQ_EX.value;	// 집행금액(KRW) 신청제외금액
        	var AM_TT_EXEC_SBTT = this.divData.form.mskTOTAL_SUBTOTAL.value;	// 집행금액(KRW) 소계
        	var AM_TT_EXECRT    = this.divData.form.mskTOTAL_EXEC_RATIO.value;	// 예상대비집행율

        	// 최종정산금
        	var AM_FNALSOAGLD = this.divData.form.mskAM_TOTAL.value;	// 최종정산금

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "TY_WRK",        TY_WRK == undefined ? "I" : TY_WRK);
        	this.dsSave.setColumn(nrow, "CD_CORP",       CD_CORP);
        	this.dsSave.setColumn(nrow, "SN_BZTPSEQ",    SN_BZTPSEQ);
        	this.dsSave.setColumn(nrow, "ID_SABUN_BZTP", ID_SABUN_BZTP);
        	this.dsSave.setColumn(nrow, "TY_BZTP",       TY_BZTP);
        	this.dsSave.setColumn(nrow, "DT_WRITE",      DT_WRITE);
        	this.dsSave.setColumn(nrow, "DS_RMK",        DS_RMK);
        	this.dsSave.setColumn(nrow, "DS_RESON",    	 DS_RESON);
        	// 집행금액(KRW) 신청금액
        	this.dsSave.setColumn(nrow, "AM_IOUTBRUFLGTNOT_APLT", AM_IOUTBRUFLGTNOT_APLT);	// 입출국항공료
        	this.dsSave.setColumn(nrow, "AM_RAILNOT_APLT",        AM_RAILNOT_APLT);			// 철도비
        	this.dsSave.setColumn(nrow, "AM_SHIPNOT_APLT",        AM_SHIPNOT_APLT);			// 선박비
        	this.dsSave.setColumn(nrow, "AM_FLGTNOT_APLT",        AM_FLGTNOT_APLT);			// 항공비
        	this.dsSave.setColumn(nrow, "AM_CARNOT_APLT",         AM_CARNOT_APLT);			// 자동차비
        	this.dsSave.setColumn(nrow, "AM_LDGGNOT_APLT",        AM_LDGGNOT_APLT);			// 숙박비
        	this.dsSave.setColumn(nrow, "AM_CRMNNOT_APLT",        AM_CRMNNOT_APLT);			// 식비
        	this.dsSave.setColumn(nrow, "AM_ETCNOT_APLT",         AM_ETCNOT_APLT);			// 잡비
        	this.dsSave.setColumn(nrow, "AM_COMMNOT_APLT",        AM_COMMNOT_APLT);			// 통신비
        	this.dsSave.setColumn(nrow, "AM_VISAPBCNCMMS_APLT",   AM_VISAPBCNCMMS_APLT);	// 비자발급수수료
        	this.dsSave.setColumn(nrow, "AM_INSRCOST_APLT",       AM_INSRCOST_APLT);		// 보험료
        	this.dsSave.setColumn(nrow, "AM_ETCADTNCOST_APLT",    AM_ETCADTNCOST_APLT);		// 추가비용
        	this.dsSave.setColumn(nrow, "AM_TCHMCOST_APLT",       AM_TCHMCOST_APLT);		// 교제비
        	// 집행금액(KRW) 신청금액제외
        	this.dsSave.setColumn(nrow, "AM_IOUTBRUFLGTNOT_APLTXCLS", AM_IOUTBRUFLGTNOT_APLTXCLS);
        	this.dsSave.setColumn(nrow, "AM_RAILNOT_APLTXCLS",        AM_RAILNOT_APLTXCLS);
        	this.dsSave.setColumn(nrow, "AM_SHIPNOT_APLTXCLS",        AM_SHIPNOT_APLTXCLS);
        	this.dsSave.setColumn(nrow, "AM_FLGTNOT_APLTXCLS",        AM_FLGTNOT_APLTXCLS);
        	this.dsSave.setColumn(nrow, "AM_CARNOT_APLTXCLS",         AM_CARNOT_APLTXCLS);
        	this.dsSave.setColumn(nrow, "AM_LDGGNOT_APLTXCLS",        AM_LDGGNOT_APLTXCLS);
        	this.dsSave.setColumn(nrow, "AM_CRMNNOT_APLTXCLS",        AM_CRMNNOT_APLTXCLS);
        	this.dsSave.setColumn(nrow, "AM_ETCNOT_APLTXCLS",         AM_ETCNOT_APLTXCLS);
        	this.dsSave.setColumn(nrow, "AM_COMMNOT_APLTXCLS",        AM_COMMNOT_APLTXCLS);
        	this.dsSave.setColumn(nrow, "AM_VISAPBCNCMMS_APLTXCLS",   AM_VISAPBCNCMMS_APLTXCLS);
        	this.dsSave.setColumn(nrow, "AM_INSRCOST_APLTXCLS",       AM_INSRCOST_APLTXCLS);
        	this.dsSave.setColumn(nrow, "AM_ETCADTNCOST_APLTXCLS",    AM_ETCADTNCOST_APLTXCLS);
        	this.dsSave.setColumn(nrow, "AM_TCHMCOST_APLTXCLS",       AM_TCHMCOST_APLTXCLS);
        	// 집행금액(KRW) 소계
        	this.dsSave.setColumn(nrow, "AM_IOUTBRUFLGTNOT_EXEC_SBTT", AM_IOUTBRUFLGTNOT_EXEC_SBTT);
        	this.dsSave.setColumn(nrow, "AM_RAILNOT_EXEC_SBTT",        AM_RAILNOT_EXEC_SBTT);
        	this.dsSave.setColumn(nrow, "AM_SHIPNOT_EXEC_SBTT",        AM_SHIPNOT_EXEC_SBTT);
        	this.dsSave.setColumn(nrow, "AM_FLGTNOT_EXEC_SBTT",        AM_FLGTNOT_EXEC_SBTT);
        	this.dsSave.setColumn(nrow, "AM_CARNOT_EXEC_SBTT",         AM_CARNOT_EXEC_SBTT);
        	this.dsSave.setColumn(nrow, "AM_LDGGNOT_EXEC_SBTT",        AM_LDGGNOT_EXEC_SBTT);
        	this.dsSave.setColumn(nrow, "AM_CRMNNOT_EXEC_SBTT",        AM_CRMNNOT_EXEC_SBTT);
        	this.dsSave.setColumn(nrow, "AM_ETCNOT_EXEC_SBTT",         AM_ETCNOT_EXEC_SBTT);
        	this.dsSave.setColumn(nrow, "AM_COMMNOT_EXEC_SBTT",        AM_COMMNOT_EXEC_SBTT);
        	this.dsSave.setColumn(nrow, "AM_VISAPBCNCMMS_EXEC_SBTT",   AM_VISAPBCNCMMS_EXEC_SBTT);
        	this.dsSave.setColumn(nrow, "AM_INSRCOST_EXEC_SBTT",       AM_INSRCOST_EXEC_SBTT);
        	this.dsSave.setColumn(nrow, "AM_ETCADTNCOST_EXEC_SBTT",	   AM_ETCADTNCOST_EXEC_SBTT);
        	this.dsSave.setColumn(nrow, "AM_TCHMCOST_EXEC_SBTT",       AM_TCHMCOST_EXEC_SBTT);
        	// 예산대비집행율(%)
        	this.dsSave.setColumn(nrow, "AM_IOUTBRUFLGTNOT_EXECRT", AM_IOUTBRUFLGTNOT_EXECRT);
        	this.dsSave.setColumn(nrow, "AM_RAILNOT_EXECRT",        AM_RAILNOT_EXECRT);
        	this.dsSave.setColumn(nrow, "AM_SHIPNOT_EXECRT",        AM_SHIPNOT_EXECRT);
        	this.dsSave.setColumn(nrow, "AM_FLGTNOT_EXECRT",        AM_FLGTNOT_EXECRT);
        	this.dsSave.setColumn(nrow, "AM_CARNOT_EXECRT",         AM_CARNOT_EXECRT);
        	this.dsSave.setColumn(nrow, "AM_LDGGNOT_EXECRT",        AM_LDGGNOT_EXECRT);
        	this.dsSave.setColumn(nrow, "AM_CRMNNOT_EXECRT",        AM_CRMNNOT_EXECRT);
        	this.dsSave.setColumn(nrow, "AM_ETCNOT_EXECRT",         AM_ETCNOT_EXECRT);
        	this.dsSave.setColumn(nrow, "AM_COMMNOT_EXECRT",        AM_COMMNOT_EXECRT);
        	this.dsSave.setColumn(nrow, "AM_VISAPBCNCMMS_EXECRT",   AM_VISAPBCNCMMS_EXECRT);
        	this.dsSave.setColumn(nrow, "AM_INSRCOST_EXECRT",       AM_INSRCOST_EXECRT);
        	this.dsSave.setColumn(nrow, "AM_ETCADTNCOST_EXECRT",    AM_ETCADTNCOST_EXECRT);
        	this.dsSave.setColumn(nrow, "AM_TCHMCOST_EXECRT",       AM_TCHMCOST_EXECRT);
        	// 합계
        	this.dsSave.setColumn(nrow, "AM_TT_APLT",      AM_TT_APLT);
        	this.dsSave.setColumn(nrow, "AM_TT_APLTXCLS",  AM_TT_APLTXCLS);
        	this.dsSave.setColumn(nrow, "AM_TT_EXEC_SBTT", AM_TT_EXEC_SBTT);
        	this.dsSave.setColumn(nrow, "AM_TT_EXECRT",    AM_TT_EXECRT);
        	// 최종정산금
        	this.dsSave.setColumn(nrow, "AM_FNALSOAGLD", AM_FNALSOAGLD);

        	if (!this.fnSaveValid()) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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

        /*
         * 엑셀 버튼
         */
        this.fnExcel = function() {

        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function() {
        	return true;
        }

        this.fnSaveValid = function() {
        	this.dsSelectRptProof.clearData();
        	this.dsSelectRptProof.addRow();
        	this.dsSelectRptProof.setColumn(0, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectRptProof.setColumn(0, "SN_BZTPSEQ"   , this.dsSearch.getColumn(0, "SN_BZTPSEQ"));
        	this.dsSelectRptProof.setColumn(0, "ID_SABUN_BZTP", this.dsSearch.getColumn(0, "ID_SABUN_BZTP"));
        	this.dsSelectRptProof.setColumn(0, "TY_BZTP"      , this.dsSearch.getColumn(0, "TY_BZTP"));

        	var strSvcId    = "select_rpt_proof";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_rpt_proof=dsSelectRptProof";
        	var outData     = "dsListRptProof=select_rpt_proof0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,	// 통신방법 정의 [생략가능]
        						false);

        	for (var i = 0; i < this.dsListRptProof.rowcount; i++) {
        		var CD_PMT_TYPE = this.dsListRptProof.getColumn(i, "CD_PMT_TYPE");
        		var CNT_FILE = this.dsListRptProof.getColumn(i, "CNT_FILE");

        		var DT_PMT = this.dsListRptProof.getColumn(i, "DT_PMT");
        		var msg = "\n" +
        		          "  - 결제일: " + DT_PMT.substring(0, 4) + "년 " + DT_PMT.substring(4, 6) + "월 " + DT_PMT.substring(6, 8) + "일\n" +
        		          "  - 국가: " + this.dsListRptProof.getColumn(i, "DS_PMT_NTN") + "\n" +
        				  "  - 대구분: " + this.dsListRptProof.getColumn(i, "DS_PMT_TYPE") + "\n" +
        				  "  - 지불수단: " + this.dsListRptProof.getColumn(i, "DS_PMT_MEAN") + "\n" +
        				  "  - 집행화폐: " + this.dsListRptProof.getColumn(i, "CD_PMT_MNEY") + "\n" +
        				  "  - 집행화: " + this.gfnAppendComma(this.dsListRptProof.getColumn(i, "AM_PMT")) + "\n" +
        				  "  - 집행금액(KRW): " + this.gfnAppendComma(this.dsListRptProof.getColumn(i, "AM_PMT_KRW"));
        		if (CD_PMT_TYPE == "B701" && CNT_FILE == "증빙(0)") {
        			this.gfnAlert("입출국항공료의 증빙자료가 누락되었습니다." + msg)
        			return;
        		}
        		if (CD_PMT_TYPE == "B702" && CNT_FILE == "증빙(0)") {
        			this.gfnAlert("교통비-철도비의 증빙자료가 누락되었습니다." + msg)
        			return;
        		}
        		if (CD_PMT_TYPE == "B703" && CNT_FILE == "증빙(0)") {
        			this.gfnAlert("교통비-선박비의 증빙자료가 누락되었습니다." + msg)
        			return;
        		}
        		if (CD_PMT_TYPE == "B704" && CNT_FILE == "증빙(0)") {
        			this.gfnAlert("교통비-항공비의 증빙자료가 누락되었습니다." + msg)
        			return;
        		}
        		if (CD_PMT_TYPE == "B705" && CNT_FILE == "증빙(0)") {
        			this.gfnAlert("교통비-자동차비의 증빙자료가 누락되었습니다." + msg)
        			return;
        		}
        		if (CD_PMT_TYPE == "B706" && CNT_FILE == "증빙(0)") {
        			this.gfnAlert("숙박비의 증빙자료가 누락되었습니다." + msg)
        			return;
        		}
        		if (CD_PMT_TYPE == "B707" && CNT_FILE == "증빙(0)") {
        			this.gfnAlert("식비의 증빙자료가 누락되었습니다." + msg)
        			return;
        		}
        		if (CD_PMT_TYPE == "B709" && CNT_FILE == "증빙(0)") {
        			this.gfnAlert("기타-통신비(로밍)의 증빙자료가 누락되었습니다." + msg)
        			return;
        		}
        		if (CD_PMT_TYPE == "B710" && CNT_FILE == "증빙(0)") {
        			this.gfnAlert("기타-Visa 발급수수료의 증빙자료가 누락되었습니다." + msg)
        			return;
        		}
        		if (CD_PMT_TYPE == "B711" && CNT_FILE == "증빙(0)") {
        			this.gfnAlert("기타-추가비용1의 증빙자료가 누락되었습니다." + msg)
        			return;
        		}
        		if (CD_PMT_TYPE == "B712" && CNT_FILE == "증빙(0)") {
        			this.gfnAlert("기타-추가비용2의 증빙자료가 누락되었습니다." + msg)
        			return;
        		}
        		if ((CD_PMT_TYPE == "B713" || CD_PMT_TYPE == "B714" || CD_PMT_TYPE == "B715" || CD_PMT_TYPE == "B716")  && CNT_FILE == "증빙(0)") {
        			this.gfnAlert("교제비[별도계정]의 증빙자료가 누락되었습니다." + msg)
        			return;
        		}
        	}

        	return true;
        }

        this.validObject = function(baseObjName) {
        	if (this.findObject(baseObjName + "_EXEC_REQ").value > 0) {
        		if (this.findObject(baseObjName + "_BTN").text == "증빙(0)") {
        			return false;
        		}
        	}
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 확인버튼
        this.btnOK_onclick = function(obj, e) {
        	this.gfnConfirm("저장하시겠습니까?", "fnOKCallback");
        }

        // 취소버튼
        this.btnCANCLE_onclick = function(obj, e) {
        	this.getParentContext().close(false);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "select") {
        		this.divData.form.txtDS_RMK.set_value(this.dsList.getColumn(0, "DS_RMK"));				// 비고
        		this.divData.form.txtDS_RESON.set_value(this.dsList.getColumn(0, "DS_RESON"));			// 예산 초과 사유

        		// 예산
        		this.divData.form.mskAM_IOUTBRUFLGTNOT_EST_USD.set_value(this.dsList.getColumn(0, "AM_IOUTBRUFLGTNOT_BDGT_USD"));	// 입출국항공료
        		this.divData.form.mskAM_IOUTBRUFLGTNOT_EST_KRW.set_value(this.dsList.getColumn(0, "AM_IOUTBRUFLGTNOT_BDGT_KRW"));
        		this.divData.form.mskAM_RAILNOT_EST_USD.set_value(this.dsList.getColumn(0, "AM_RAILNOT_BDGT_USD"));					// 철도비
        		this.divData.form.mskAM_RAILNOT_EST_KRW.set_value(this.dsList.getColumn(0, "AM_RAILNOT_BDGT_KRW"));
        		this.divData.form.mskAM_SHIPNOT_EST_USD.set_value(this.dsList.getColumn(0, "AM_SHIPNOT_BDGT_USD"));					// 선박비
        		this.divData.form.mskAM_SHIPNOT_EST_KRW.set_value(this.dsList.getColumn(0, "AM_SHIPNOT_BDGT_KRW"));
        		this.divData.form.mskAM_FLGTNOT_EST_USD.set_value(this.dsList.getColumn(0, "AM_FLGTNOT_BDGT_USD"));					// 항공비
        		this.divData.form.mskAM_FLGTNOT_EST_KRW.set_value(this.dsList.getColumn(0, "AM_FLGTNOT_BDGT_KRW"));
        		this.divData.form.mskAM_CARNOT_EST_USD.set_value(this.dsList.getColumn(0, "AM_CARNOT_BDGT_USD"));					// 자동차비
        		this.divData.form.mskAM_CARNOT_EST_KRW.set_value(this.dsList.getColumn(0, "AM_CARNOT_BDGT_KRW"));
        		this.divData.form.mskAM_LDGGNOT_EST_USD.set_value(this.dsList.getColumn(0, "AM_LDGGNOT_BDGT_USD"));					// 숙박비
        		this.divData.form.mskAM_LDGGNOT_EST_KRW.set_value(this.dsList.getColumn(0, "AM_LDGGNOT_BDGT_KRW"));
        		this.divData.form.mskAM_CRMNNOT_EST_USD.set_value(this.dsList.getColumn(0, "AM_CRMNNOT_BDGT_USD"));					// 식비
        		this.divData.form.mskAM_CRMNNOT_EST_KRW.set_value(this.dsList.getColumn(0, "AM_CRMNNOT_BDGT_KRW"));
        		this.divData.form.mskAM_ETCNOT_EST_USD.set_value(this.dsList.getColumn(0, "AM_ETCNOT_BDGT_USD"));					// 잡비
        		this.divData.form.mskAM_ETCNOT_EST_KRW.set_value(this.dsList.getColumn(0, "AM_ETCNOT_BDGT_KRW"));
        		this.divData.form.mskAM_COMMNOT_EST_USD.set_value(this.dsList.getColumn(0, "AM_COMMNOT_BDGT_USD"));					// 통신비
        		this.divData.form.mskAM_COMMNOT_EST_KRW.set_value(this.dsList.getColumn(0, "AM_COMMNOT_BDGT_KRW"));
        		this.divData.form.mskAM_VISAPBCNCMMS_EST_USD.set_value(this.dsList.getColumn(0, "AM_VISAPBCNCMMS_BDGT_USD"));		// 비자발급수수료
        		this.divData.form.mskAM_VISAPBCNCMMS_EST_KRW.set_value(this.dsList.getColumn(0, "AM_VISAPBCNCMMS_BDGT_KRW"));
        		this.divData.form.mskAM_INSRCOST_EST_USD.set_value(this.dsList.getColumn(0, "AM_INSRCOST_BDGT_USD"));				// 보험비용
        		this.divData.form.mskAM_INSRCOST_EST_KRW.set_value(this.dsList.getColumn(0, "AM_INSRCOST_BDGT_KRW"));
        		this.divData.form.mskAM_ETCADTNCOST_EST_USD.set_value(this.dsList.getColumn(0, "AM_ETCADTNCOST_BDGT_USD"));			// 기타추가비용
        		this.divData.form.mskAM_ETCADTNCOST_EST_KRW.set_value(this.dsList.getColumn(0, "AM_ETCADTNCOST_BDGT_KRW"));
        		this.divData.form.mskAM_TCHMCOST_EST_USD.set_value(this.dsList.getColumn(0, "AM_TCHMCOST_BDGT_USD"));				// 교제비용
        		this.divData.form.mskAM_TCHMCOST_EST_KRW.set_value(this.dsList.getColumn(0, "AM_TCHMCOST_BDGT_KRW"));
        		this.divData.form.mskTOTAL_EST_USD.set_value(this.dsList.getColumn(0, "AM_TT_BDGT_USD"));							// 합계
        		this.divData.form.mskTOTAL_EST_KRW.set_value(this.dsList.getColumn(0, "AM_TT_BDGT_KRW"));

        		// 신청금액
        		this.divData.form.mskAM_IOUTBRUFLGTNOT_EXEC_REQ.set_value(this.dsList.getColumn(0, "AM_IOUTBRUFLGTNOT_APLT"));	// 입출국항공료
        		this.divData.form.mskAM_RAILNOT_EXEC_REQ.set_value(this.dsList.getColumn(0, "AM_RAILNOT_APLT"));				// 철도비
        		this.divData.form.mskAM_SHIPNOT_EXEC_REQ.set_value(this.dsList.getColumn(0, "AM_SHIPNOT_APLT"));				// 선박비
        		this.divData.form.mskAM_FLGTNOT_EXEC_REQ.set_value(this.dsList.getColumn(0, "AM_FLGTNOT_APLT"));				// 항공비
        		this.divData.form.mskAM_CARNOT_EXEC_REQ.set_value(this.dsList.getColumn(0, "AM_CARNOT_APLT"));					// 자동차비
        		this.divData.form.mskAM_LDGGNOT_EXEC_REQ.set_value(this.dsList.getColumn(0, "AM_LDGGNOT_APLT"));				// 숙박비
        		this.divData.form.mskAM_CRMNNOT_EXEC_REQ.set_value(this.dsList.getColumn(0, "AM_CRMNNOT_APLT"));				// 식비
        		this.divData.form.mskAM_ETCNOT_EXEC_REQ.set_value(this.dsList.getColumn(0, "AM_ETCNOT_APLT"));					// 잡비
        		this.divData.form.mskAM_COMMNOT_EXEC_REQ.set_value(this.dsList.getColumn(0, "AM_COMMNOT_APLT"));				// 통신비
        		this.divData.form.mskAM_VISAPBCNCMMS_EXEC_REQ.set_value(this.dsList.getColumn(0, "AM_VISAPBCNCMMS_APLT"));		// 비자발급수수료
        		this.divData.form.mskAM_INSRCOST_EXEC_REQ.set_value(this.dsList.getColumn(0, "AM_INSRCOST_APLT"));				// 보험비용
        		this.divData.form.mskAM_ETCADTNCOST_EXEC_REQ.set_value(this.dsList.getColumn(0, "AM_ETCADTNCOST_APLT"));		// 기타추가비용
        		this.divData.form.mskAM_TCHMCOST_EXEC_REQ.set_value(this.dsList.getColumn(0, "AM_TCHMCOST_APLT"));				// 교제비용

        		// 신청금액제외
        		this.divData.form.mskAM_IOUTBRUFLGTNOT_EXEC_REQ_EX.set_value(this.dsList.getColumn(0, "AM_IOUTBRUFLGTNOT_APLTXCLS"));	// 입출국항공료
        		this.divData.form.mskAM_RAILNOT_EXEC_REQ_EX.set_value(this.dsList.getColumn(0, "AM_RAILNOT_APLTXCLS"));					// 철도비
        		this.divData.form.mskAM_SHIPNOT_EXEC_REQ_EX.set_value(this.dsList.getColumn(0, "AM_SHIPNOT_APLTXCLS"));					// 선박비
        		this.divData.form.mskAM_FLGTNOT_EXEC_REQ_EX.set_value(this.dsList.getColumn(0, "AM_FLGTNOT_APLTXCLS"));					// 항공비
        		this.divData.form.mskAM_CARNOT_EXEC_REQ_EX.set_value(this.dsList.getColumn(0, "AM_CARNOT_APLTXCLS"));					// 자동차비
        		this.divData.form.mskAM_LDGGNOT_EXEC_REQ_EX.set_value(this.dsList.getColumn(0, "AM_LDGGNOT_APLTXCLS"));					// 숙박비
        		this.divData.form.mskAM_CRMNNOT_EXEC_REQ_EX.set_value(this.dsList.getColumn(0, "AM_CRMNNOT_APLTXCLS"));					// 식비
        		this.divData.form.mskAM_ETCNOT_EXEC_REQ_EX.set_value(this.dsList.getColumn(0, "AM_ETCNOT_APLTXCLS"));					// 잡비
        		this.divData.form.mskAM_COMMNOT_EXEC_REQ_EX.set_value(this.dsList.getColumn(0, "AM_COMMNOT_APLTXCLS"));					// 통신비
        		this.divData.form.mskAM_VISAPBCNCMMS_EXEC_REQ_EX.set_value(this.dsList.getColumn(0, "AM_VISAPBCNCMMS_APLTXCLS"));		// 비자발급수수료
        		this.divData.form.mskAM_INSRCOST_EXEC_REQ_EX.set_value(this.dsList.getColumn(0, "AM_INSRCOST_APLTXCLS"));				// 보험비용
        		this.divData.form.mskAM_ETCADTNCOST_EXEC_REQ_EX.set_value(this.dsList.getColumn(0, "AM_ETCADTNCOST_APLTXCLS"));			// 기타추가비용
        		this.divData.form.mskAM_TCHMCOST_EXEC_REQ_EX.set_value(this.dsList.getColumn(0, "AM_TCHMCOST_APLTXCLS"));				// 교제비용

        		// 신청금액합계
        		this.divData.form.mskAM_REQ.set_value(this.dsList.getColumn(0, "mskAM_REQ"));

        		//this.staDS_CAUTION_TXT.set_text(this.dsList.getColumn(0, "DS_RULE"));

        		this.setObject("mskAM_IOUTBRUFLGTNOT");
        		this.setObject("mskAM_RAILNOT");
        		this.setObject("mskAM_SHIPNOT");
        		this.setObject("mskAM_FLGTNOT");
        		this.setObject("mskAM_CARNOT");
        		this.setObject("mskAM_LDGGNOT");
        		this.setObject("mskAM_CRMNNOT");
        		this.setObject("mskAM_ETCNOT");
        		this.setObject("mskAM_COMMNOT");
        		this.setObject("mskAM_VISAPBCNCMMS");
        		this.setObject("mskAM_INSRCOST");
        		this.setObject("mskAM_ETCADTNCOST");
        		this.setObject("mskAM_TCHMCOST");

        		var DT_BZTP = this.dsSearch.getColumn(0, "DT_BZTP");		// 출장일수
        		var DS_NOTICE = this.dsSearch.getColumn(0, "DS_NOTICE");	// 주의사항
        		if (DT_BZTP > 30)
        		{
        			this.staNotice.set_text(DS_NOTICE);	//"※ 30일 초과일수에 대한 숙박비,식비,잡비는 10분의 7로 지급합니다.");
        		}
        	} else if (svcID == "save") {
        		this.fnWorkAfter = function() {
        			this.getParentContext().close(true);
        		}
        		this.gfnAlert("저장이 완료되었습니다.", "fnWorkAfter");
        	} else if (svcID == "update_rtp_detail") {
        		this.fnSelect();
        	}
        }

        this.setObject = function(baseObjName) {
        	if (this.findObject(baseObjName + "_EST_KRW").value == 0) {
        		if (baseObjName != "mskAM_LDGGNOT" && baseObjName != "mskAM_CRMNNOT" && baseObjName != "mskAM_ETCNOT") {
        			this.findObject(baseObjName + "_EXEC_REQ").set_enable(false);
        			this.findObject(baseObjName + "_EXEC_REQ_EX").set_enable(false);
        			this.findObject(baseObjName + "_EXEC_REQ_EX").set_enable(false);
        			//this.findObject(baseObjName + "_BTN").set_enable(false);
        		}
        	}

        	// 신청금액/신척금액(제외)
        	var EXEC_REQ = this.findObject(baseObjName + "_EXEC_REQ").value == undefined ? 0 : this.findObject(baseObjName + "_EXEC_REQ").value;
        	var EXEC_REQ_EX = this.findObject(baseObjName + "_EXEC_REQ_EX").value == undefined ? 0 : this.findObject(baseObjName + "_EXEC_REQ_EX").value;
        	// 소계
        	this.findObject(baseObjName + "_SUBTOTAL").set_value(parseInt(EXEC_REQ) + parseInt(EXEC_REQ_EX));
        	// 예산대비집행률(%)
        	var EST_KRW = this.findObject(baseObjName + "_EST_KRW").value;
        	var SUBTOTAL = this.findObject(baseObjName + "_SUBTOTAL").value
        	//var RATIO = parseInt(SUBTOTAL) / parseInt(EST_KRW) * 100;
        	var RATIO = isFinite(parseInt(SUBTOTAL) / parseInt(EST_KRW) * 100) ? parseInt(SUBTOTAL) / parseInt(EST_KRW) * 100 : 0.0;
        	this.findObject(baseObjName + "_EXEC_RATIO").set_value(RATIO);

        	if (RATIO > 100) {
        		this.fnChangeBackground(baseObjName);
        	}

        	// 합계
        	this.fnSetTotal();
        }

        this.fnChangeBackground = function(baseObjName) {
        	this.findObject(baseObjName + "_EST_USD").set_color('red');
        	this.findObject(baseObjName + "_EST_KRW").set_color('red');
        	this.findObject(baseObjName + "_EXEC_REQ").set_color('red');
        	this.findObject(baseObjName + "_EXEC_REQ_EX").set_color('red');
        	this.findObject(baseObjName + "_SUBTOTAL").set_color('red');
        	this.findObject(baseObjName + "_EXEC_RATIO").set_color('red');
        }

        // 확인버튼 콜백
        this.fnOKCallback = function(strId, val) {
        	if (val) {
        		this.fnSave();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        this.fnGridAfterEdit = function(obj,e) {

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 집행금액(KRW) 신청금액
        this.divDataCOST1_onchanged = function(obj, e) {
        	var baseObjName = e.fromobject.id.replace("_EXEC_REQ", "");
        	// 신청금액/신척금액(제외)
        	var EXEC_REQ = this.findObject(baseObjName + "_EXEC_REQ").value | 0;
        	var EXEC_REQ_EX = this.findObject(baseObjName + "_EXEC_REQ_EX").value | 0;
        	// 소계
        	this.findObject(baseObjName + "_SUBTOTAL").set_value(parseInt(EXEC_REQ) + parseInt(EXEC_REQ_EX));
        	// 예산대비집행률(%)
        	var EST_KRW = this.findObject(baseObjName + "_EST_KRW").value;
        	var SUBTOTAL = this.findObject(baseObjName + "_SUBTOTAL").value
        	var RATIO = isFinite(parseInt(SUBTOTAL) / parseInt(EST_KRW) * 100) ? parseInt(SUBTOTAL) / parseInt(EST_KRW) * 100 : 0.0;
        	this.findObject(baseObjName + "_EXEC_RATIO").set_value(RATIO);
        	//this.findObject(baseObjName + "_EXEC_RATIO").set_value(parseInt(SUBTOTAL) / parseInt(EST_KRW) * 100);

        	// 합계
        	this.fnSetTotal();

        	// 검증
        	if (parseInt(EXEC_REQ) + parseInt(EXEC_REQ_EX) > parseInt(EST_KRW)) {
        		if (baseObjName == "mskAM_LDGGNOT" || baseObjName == "mskAM_CRMNNOT"|| baseObjName == "mskAM_ETCNOT") {
        			this.gfnAlert("집행금액의 합(신청금액 + 신청제외금액)이\n금회출장예산보다 큽니다.");
        			this.findObject(baseObjName + "_EXEC_REQ").set_value(e.prevalue);
        			this.findObject(baseObjName + "_SUBTOTAL").set_value(parseInt(this.findObject(baseObjName + "_SUBTOTAL").value) - parseInt(e.postvalue));
        			this.findObject(baseObjName + "_EXEC_RATIO").set_value(parseInt(this.findObject(baseObjName + "_SUBTOTAL").value) / parseInt(EST_KRW) * 100);
        			this.findObject(baseObjName + "_EXEC_REQ").setFocus();
        			return;
        		}
        	}
        }

        // 집행금액(KRW) 신청금액(제외)
        this.divDataCOST2_onchanged = function(obj, e) {
        	var baseObjName = e.fromobject.id.replace("_EXEC_REQ_EX", "");
        	// 신청금액/신척금액(제외)
        	var EXEC_REQ = this.findObject(baseObjName + "_EXEC_REQ").value | 0;
        	var EXEC_REQ_EX = this.findObject(baseObjName + "_EXEC_REQ_EX").value | 0;
        	// 소계
        	this.findObject(baseObjName + "_SUBTOTAL").set_value(parseInt(EXEC_REQ) + parseInt(EXEC_REQ_EX));
        	if (parseInt(EXEC_REQ) + parseInt(EXEC_REQ_EX) > parseInt(EST_KRW)) {
        		this.gfnAlert("집행금액의 합(신청금액 + 신청제외금액)이\n금회출장예산보다 큽니다.");
        		return;
        	}
        	// 예산대비집행률(%)
        	var EST_KRW = this.findObject(baseObjName + "_EST_KRW").value | 0;
        	var SUBTOTAL = this.findObject(baseObjName + "_SUBTOTAL").value | 0;
        	var RATIO = isFinite(parseInt(SUBTOTAL) / parseInt(EST_KRW) * 100) ? parseInt(SUBTOTAL) / parseInt(EST_KRW) * 100 : 0.0;
        	this.findObject(baseObjName + "_EXEC_RATIO").set_value(RATIO);
        	//this.findObject(baseObjName + "_EXEC_RATIO").set_value(parseInt(SUBTOTAL) / parseInt(EST_KRW) * 100);

        	// 합계
        	this.fnSetTotal();

        	// 검증
        	if (parseInt(EXEC_REQ) + parseInt(EXEC_REQ_EX) > parseInt(EST_KRW)) {
        		if (baseObjName == "mskAM_LDGGNOT" || baseObjName == "mskAM_CRMNNOT"|| baseObjName == "mskAM_ETCNOT") {
        			this.gfnAlert("집행금액의 합(신청금액 + 신청제외금액)이\n금회출장예산보다 큽니다.");
        			this.findObject(baseObjName + "_EXEC_REQ_EX").set_value(0);
        			this.findObject(baseObjName + "_SUBTOTAL").set_value(parseInt(this.findObject(baseObjName + "_EXEC_REQ").value));
        			this.findObject(baseObjName + "_EXEC_RATIO").set_value(parseInt(this.findObject(baseObjName + "_SUBTOTAL").value) / parseInt(EST_KRW) * 100);
        			this.findObject(baseObjName + "_EXEC_REQ_EX").setFocus();
        			return;
        		}
        	}
        }

        // 주의사항버튼 클릭
        this.btnNotice_onclick = function(obj, e) {
        	var param = {};
        	param.GUBUN       	= "RPT";
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_BZTP_PLAN_RULE_DLG","",param);
        }

        // 상세내역버튼 클릭
        this.btnReportDetail_onclick = function(obj, e) {
        	var param = {};
        	param.CD_CORP       = this.dsSearch.getColumn(0, "CD_CORP");		// 법인코드
         	param.DS_CORP       = this.dsSearch.getColumn(0, "DS_CORP");		// 법인이름
         	param.SN_BZTPSEQ    = this.dsSearch.getColumn(0, "SN_BZTPSEQ");		// 출장순번
         	param.ID_SABUN_BZTP = this.dsSearch.getColumn(0, "ID_SABUN_BZTP");	// 출장자사번
         	param.DS_HNAME_BZTP = this.dsSearch.getColumn(0, "DS_HNAME_BZTP");	// 출장자이름
         	param.TY_BZTP       = this.dsSearch.getColumn(0, "TY_BZTP");		// 계획보고 유형
        	param.DT_BZTP_FROM  = this.dsSearch.getColumn(0, "DT_BZTP_FROM");	// 출장시작일
        	param.DT_BZTP_TO    = this.dsSearch.getColumn(0, "DT_BZTP_TO");		// 출장종료일

        	param.AM_IOUTBRUFLGTNOT_EST_KRW = parseInt(this.divData.form.mskAM_IOUTBRUFLGTNOT_EST_KRW.value);	// 입출국항공료
        	param.AM_RAILNOT_EST_KRW        = parseInt(this.divData.form.mskAM_RAILNOT_EST_KRW.value);			// 철도비
        	param.AM_SHIPNOT_EST_KRW        = parseInt(this.divData.form.mskAM_SHIPNOT_EST_KRW.value);			// 선박비
        	param.AM_FLGTNOT_EST_KRW        = parseInt(this.divData.form.mskAM_FLGTNOT_EST_KRW.value);			// 항공비
        	param.AM_CARNOT_EST_KRW         = parseInt(this.divData.form.mskAM_CARNOT_EST_KRW.value);			// 자동차비
        	param.AM_LDGGNOT_EST_KRW        = parseInt(this.divData.form.mskAM_LDGGNOT_EST_KRW.value);			// 숙박비
        	param.AM_CRMNNOT_EST_KRW        = parseInt(this.divData.form.mskAM_CRMNNOT_EST_KRW.value);			// 식비
        	param.AM_ETCNOT_EST_KRW         = parseInt(this.divData.form.mskAM_ETCNOT_EST_KRW.value);			// 잡비
        	param.AM_COMMNOT_EST_KRW        = parseInt(this.divData.form.mskAM_COMMNOT_EST_KRW.value);			// 통신비(로밍)
        	param.AM_VISAPBCNCMMS_EST_KRW   = parseInt(this.divData.form.mskAM_VISAPBCNCMMS_EST_KRW.value);		// Visa 발급수수료
        	param.AM_INSRCOST_EST_KRW       = parseInt(this.divData.form.mskAM_INSRCOST_EST_KRW.value);			// 추가비용1
        	param.AM_ETCADTNCOST_EST_KRW    = parseInt(this.divData.form.mskAM_ETCADTNCOST_EST_KRW.value);		// 추가비용2
        	param.AM_TCHMCOST_EST_KRW       = parseInt(this.divData.form.mskAM_TCHMCOST_EST_KRW.value);			// 교제비

        	param.LOCATION = "OVERSEAS";
        	if (this.getOwnerFrame().READ_ONLY) {
        		param.READONLY = "true";
        	} else {
        		param.READONLY = "false";
        	}

        	param.DS_RULE    = this.dsList.getColumn(0, "DS_RULE");		// 주의사항

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_BZTP_RPT_DETAIL", "fnReportDetail_onclick_callback", param, 1500, 850);
        }

        // 상세내역버튼 클릭 콜백
        this.fnReportDetail_onclick_callback = function(strId) {
        	// 상세내역 반영
        	this.dsUpdateRptDetail.clearData();
        	var nrow = this.dsUpdateRptDetail.addRow();
        	this.dsUpdateRptDetail.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsUpdateRptDetail.setColumn(nrow, "SN_BZTPSEQ"   , this.dsSearch.getColumn(0, "SN_BZTPSEQ"));
        	this.dsUpdateRptDetail.setColumn(nrow, "ID_SABUN_BZTP", this.dsSearch.getColumn(0, "ID_SABUN_BZTP"));
        	this.dsUpdateRptDetail.setColumn(nrow, "TY_BZTP"      , this.dsSearch.getColumn(0, "TY_BZTP"));

        	if (this.dsUpdateRptDetail.rowcount == 0) return;

        	var strSvcId    = "update_rtp_detail";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update_rtp_detail=dsUpdateRptDetail";
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

        // 첨부파일 버튼 - 출장보고서 첨부파일(입출국항공료)
        this.btnAM_IOUTBRUFLGTNOT_EXEC_RATIO_onclick = function(obj, e) {
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DA71";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0, "SN_BZTPSEQ")];
        	fileManager.CD_REF = [this.dsSearch.getColumn(0, "SN_BZTPSEQ")];
        	fileManager.IS_READONLY = this.getOwnerFrame().READ_ONLY;

        	this.gfnFileManager(fileManager, "btnAM_IOUTBRUFLGTNOT_EXEC_RATIO_Callback");
        }

        this.btnAM_IOUTBRUFLGTNOT_EXEC_RATIO_Callback = function(strID, val) {
        	this.divData.form.mskAM_IOUTBRUFLGTNOT_BTN.set_text("증빙(" + val.Cnt + ")");
        }

        // 엑셀다운로드 버튼 클릭 이벤트
        this.btnDownloadExcel_onclick = function(obj, e) {

        }

        /************************************************************************
         * 기타 함수
         ************************************************************************/
        this.fnSetTotal = function(base) {
        	base = base || 1

        	// 집행금액(KRW) 신청금액
        	var list = ["mskAM_IOUTBRUFLGTNOT_EXEC_REQ", "mskAM_RAILNOT_EXEC_REQ", "mskAM_SHIPNOT_EXEC_REQ",
        				"mskAM_FLGTNOT_EXEC_REQ", "mskAM_CARNOT_EXEC_REQ",
        				"mskAM_LDGGNOT_EXEC_REQ", "mskAM_CRMNNOT_EXEC_REQ", "mskAM_ETCNOT_EXEC_REQ",
        				"mskAM_COMMNOT_EXEC_REQ", "mskAM_VISAPBCNCMMS_EXEC_REQ", "mskAM_INSRCOST_EXEC_REQ", "mskAM_ETCADTNCOST_EXEC_REQ"];
        	this.sumTotal("mskTOTAL_EXEC_REQ", list, obj);

        	list = ["mskAM_IOUTBRUFLGTNOT_EXEC_REQ", "mskAM_RAILNOT_EXEC_REQ", "mskAM_SHIPNOT_EXEC_REQ",
        			"mskAM_FLGTNOT_EXEC_REQ", "mskAM_CARNOT_EXEC_REQ",
        			"mskAM_LDGGNOT_EXEC_REQ", "mskAM_CRMNNOT_EXEC_REQ", "mskAM_ETCNOT_EXEC_REQ",
        			"mskAM_COMMNOT_EXEC_REQ", "mskAM_VISAPBCNCMMS_EXEC_REQ", "mskAM_INSRCOST_EXEC_REQ", "mskAM_ETCADTNCOST_EXEC_REQ","mskAM_TCHMCOST_EXEC_REQ"];
        	this.sumTotal("mskAM_REQ", list, obj);

        	// 집행금액(KRW) 신청금액(제외)
        	list = ["mskAM_IOUTBRUFLGTNOT_EXEC_REQ_EX", "mskAM_RAILNOT_EXEC_REQ_EX", "mskAM_SHIPNOT_EXEC_REQ_EX",
        			"mskAM_FLGTNOT_EXEC_REQ_EX", "mskAM_CARNOT_EXEC_REQ_EX",
        			"mskAM_LDGGNOT_EXEC_REQ_EX", "mskAM_CRMNNOT_EXEC_REQ_EX", "mskAM_ETCNOT_EXEC_REQ_EX",
        			"mskAM_COMMNOT_EXEC_REQ_EX", "mskAM_VISAPBCNCMMS_EXEC_REQ_EX", "mskAM_INSRCOST_EXEC_REQ_EX", "mskAM_ETCADTNCOST_EXEC_REQ_EX"];
        	this.sumTotal("mskTOTAL_EXEC_REQ_EX", list, obj);

        	// 집행금액(KRW) 소계
        	list = ["mskAM_IOUTBRUFLGTNOT_SUBTOTAL", "mskAM_RAILNOT_SUBTOTAL", "mskAM_SHIPNOT_SUBTOTAL",
        			"mskAM_FLGTNOT_SUBTOTAL", "mskAM_CARNOT_SUBTOTAL",
        			"mskAM_LDGGNOT_SUBTOTAL", "mskAM_CRMNNOT_SUBTOTAL", "mskAM_ETCNOT_SUBTOTAL",
        			"mskAM_COMMNOT_SUBTOTAL", "mskAM_VISAPBCNCMMS_SUBTOTAL", "mskAM_INSRCOST_SUBTOTAL", "mskAM_ETCADTNCOST_SUBTOTAL"];
        	this.sumTotal("mskTOTAL_SUBTOTAL", list, obj);

        	// 예산대비집행률(%)
        	var TOTAL_SUBTOTAL = parseInt(this.findObject("mskTOTAL_SUBTOTAL").value == undefined ? 0 : this.findObject("mskTOTAL_SUBTOTAL").value);
        	var TOTAL_EST_KRW = parseInt(this.findObject("mskTOTAL_EST_KRW").value == undefined ? 0 : this.findObject("mskTOTAL_EST_KRW").value);
        	this.findObject("mskTOTAL_EXEC_RATIO").set_value(TOTAL_SUBTOTAL / TOTAL_EST_KRW * 100);

        	// 최종정산금(원)
        	var AM_REQ = parseInt(this.findObject("mskAM_REQ").value == undefined ? 0 : this.findObject("mskAM_REQ").value);
        	var AM_ADVPGLD_KRW = parseInt(this.findObject("mskAM_ADVPGLD_KRW").value == undefined ? 0 : this.findObject("mskAM_ADVPGLD_KRW").value);
        	// this.findObject("mskAM_TOTAL").set_value(AM_REQ - AM_ADVPGLD_KRW); // 가불금 제외처리 20240322
        	if (this.dsSearch.getColumn(0, "DT_WRITE")<"20240326")			// 작성일자
        	{
        		this.findObject("mskAM_TOTAL").set_value(AM_REQ - AM_ADVPGLD_KRW);
        	} else {
        		this.findObject("mskAM_TOTAL").set_value(AM_REQ);
        	}
        }

        // 합계 업데이트
        this.sumTotal = function(totalObj, list, obj) {
        	var sum = 0.0;
        	for (var i = 0; i < list.length; i++) {
        		var temp = list[i].split(",")
        		if (temp.length == 1) {
        			var v = parseFloat(this.findObject(temp[0]).value);
        			sum += isNaN(v) ? 0.0 : v;
        		} else if (temp.length == 3) {
        			var v1 = parseFloat(this.findObject(temp[0]).value);
        			var v2 = parseFloat(this.findObject(temp[1]).value);
        			var v = parseFloat(eval(v1 + temp[2] + v2));
        			sum += isNaN(v) ? 0.0 : v;
        		} else if (temp.length == 4) {
        			var v1 = parseFloat(this.findObject(temp[0]).value);
        			var v2 = parseFloat(this.findObject(temp[1]).value);
        			var v = parseFloat(eval(v1 + temp[3] + v2 + temp[3] + temp[2]));
        			sum += isNaN(v) ? 0.0 : v;
        		}
        	}
        	this.findObject(totalObj).set_value(sum);
        }

        // 객체탐색
        this.findObject = function(name) {
        	for (var i = 0; i < this.divData.form.components.length; i++) {
        		if (this.divData.form.components[i].name == name) {
        			return this.divData.form.components[i];
        		}
        	}
        	return null;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnReportDetail.addEventHandler("onclick",this.btnReportDetail_onclick,this);
            this.divData.form.btnNotice.addEventHandler("onclick",this.btnNotice_onclick,this);
            this.divData.form.btnDownloadExcel.addEventHandler("onclick",this.btnDownloadExcel_onclick,this);
            this.divData.form.staCOST_EXEC_REQ_EX.addEventHandler("onclick",this.divData_staCOST_EXEC_REQ00_onclick,this);
            this.divData.form.staCOST_EXEC_SUBTOTAL.addEventHandler("onclick",this.divData_staCOST_EXEC_SUBTOTAL_onclick,this);
            this.divData.form.mskAM_IOUTBRUFLGTNOT_EXEC_REQ.addEventHandler("onchanged",this.divDataCOST1_onchanged,this);
            this.divData.form.mskAM_IOUTBRUFLGTNOT_EXEC_REQ_EX.addEventHandler("onchanged",this.divDataCOST2_onchanged,this);
            this.divData.form.staAM_RAILNOT.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.mskAM_RAILNOT_EXEC_REQ.addEventHandler("onchanged",this.divDataCOST1_onchanged,this);
            this.divData.form.mskAM_RAILNOT_EXEC_REQ_EX.addEventHandler("onchanged",this.divDataCOST2_onchanged,this);
            this.divData.form.staAM_SHIPNOT.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.mskAM_SHIPNOT_EXEC_REQ.addEventHandler("onchanged",this.divDataCOST1_onchanged,this);
            this.divData.form.mskAM_SHIPNOT_EXEC_REQ_EX.addEventHandler("onchanged",this.divDataCOST2_onchanged,this);
            this.divData.form.staAM_FLGTNOT.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.mskAM_FLGTNOT_EXEC_REQ.addEventHandler("onchanged",this.divDataCOST1_onchanged,this);
            this.divData.form.mskAM_FLGTNOT_EXEC_REQ_EX.addEventHandler("onchanged",this.divDataCOST2_onchanged,this);
            this.divData.form.staAM_CARNOT.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.mskAM_CARNOT_EXEC_REQ.addEventHandler("onchanged",this.divDataCOST1_onchanged,this);
            this.divData.form.mskAM_CARNOT_EXEC_REQ_EX.addEventHandler("onchanged",this.divDataCOST2_onchanged,this);
            this.divData.form.staAM_LDGGNOT.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.mskAM_LDGGNOT_EXEC_REQ.addEventHandler("onchanged",this.divDataCOST1_onchanged,this);
            this.divData.form.mskAM_LDGGNOT_EXEC_REQ_EX.addEventHandler("onchanged",this.divDataCOST2_onchanged,this);
            this.divData.form.staAM_CRMNNOT.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.staAM_CRMNNOT_EXEC_REQ_EX_bg.addEventHandler("onclick",this.divData_staAM_CRMNNOT_COST_bg00_onclick,this);
            this.divData.form.mskAM_CRMNNOT_EXEC_REQ.addEventHandler("onchanged",this.divDataCOST1_onchanged,this);
            this.divData.form.mskAM_CRMNNOT_EXEC_REQ_EX.addEventHandler("onchanged",this.divDataCOST2_onchanged,this);
            this.divData.form.staAM_ETCNOT.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.staAM_ETCNOT_EXEC_REQ_bg.addEventHandler("onclick",this.divData_staAM_ETCNOT_COST_bg_onclick,this);
            this.divData.form.staAM_ETCNOT_EXEC_REQ_EX_bg.addEventHandler("onclick",this.divData_staAM_ETCNOT_COST_bg_onclick,this);
            this.divData.form.mskAM_ETCNOT_EXEC_REQ.addEventHandler("onchanged",this.divDataCOST1_onchanged,this);
            this.divData.form.mskAM_ETCNOT_EXEC_REQ_EX.addEventHandler("onchanged",this.divDataCOST2_onchanged,this);
            this.divData.form.staAM_ETC.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.staAM_COMMNOT.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.staAM_COMMNOT_EXEC_REQ_bg.addEventHandler("onclick",this.divData_staAM_COMMNOT_COST_bg_onclick,this);
            this.divData.form.staAM_COMMNOT_EXEC_REQ_EX_bg.addEventHandler("onclick",this.divData_staAM_COMMNOT_COST_bg_onclick,this);
            this.divData.form.mskAM_COMMNOT_EXEC_REQ.addEventHandler("onchanged",this.divDataCOST1_onchanged,this);
            this.divData.form.mskAM_COMMNOT_EXEC_REQ_EX.addEventHandler("onchanged",this.divDataCOST2_onchanged,this);
            this.divData.form.staAM_VISAPBCNCMMS.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.mskAM_VISAPBCNCMMS_EXEC_REQ.addEventHandler("onchanged",this.divDataCOST1_onchanged,this);
            this.divData.form.mskAM_VISAPBCNCMMS_EXEC_REQ_EX.addEventHandler("onchanged",this.divDataCOST2_onchanged,this);
            this.divData.form.staAM_INSRCOST.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.staAM_INSRCOST_EXEC_REQ_EX_bg.addEventHandler("onclick",this.divData_staAM_INSRCOST_COST_bg00_onclick,this);
            this.divData.form.mskAM_INSRCOST_EXEC_REQ.addEventHandler("onchanged",this.divDataCOST1_onchanged,this);
            this.divData.form.mskAM_INSRCOST_EXEC_REQ_EX.addEventHandler("onchanged",this.divDataCOST2_onchanged,this);
            this.divData.form.staAM_ETCADTNCOST.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.mskAM_ETCADTNCOST_EXEC_REQ.addEventHandler("onchanged",this.divDataCOST1_onchanged,this);
            this.divData.form.mskAM_ETCADTNCOST_EXEC_REQ_EX.addEventHandler("onchanged",this.divDataCOST2_onchanged,this);
            this.divData.form.staTOTAL.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.mskTOTAL_EXEC_REQ.addEventHandler("onchanged",this.divDataCOST1_onchanged,this);
            this.divData.form.mskTOTAL_EXEC_REQ_EX.addEventHandler("onchanged",this.divDataCOST2_onchanged,this);
            this.divData.form.staAM_TCHMCOST.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.mskAM_TCHMCOST_EXEC_REQ.addEventHandler("onchanged",this.divDataCOST1_onchanged,this);
            this.divData.form.mskAM_TCHMCOST_EXEC_REQ_EX.addEventHandler("onchanged",this.divDataCOST2_onchanged,this);
            this.divData.form.staAM_REQ.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.staAM_ADVPGLD_KRW.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.staAM_TOTAL.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.staDS_RMK.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.staDS_RMK_bg.addEventHandler("onclick",this.divData_staDS_RMK_bg_onclick,this);
            this.divData.form.staDS_RESON.addEventHandler("onclick",this.divData_staCD_CORP00_00_onclick,this);
            this.divData.form.staDS_RESON_bg.addEventHandler("onclick",this.divData_staDS_RMK_bg_onclick,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
        };
        this.loadIncludeScript("DAB_BZTP_RPT_OVERSEAS_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
