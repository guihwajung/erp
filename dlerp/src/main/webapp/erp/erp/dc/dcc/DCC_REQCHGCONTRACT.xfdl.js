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
                this._setFormPosition(1020,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUNSITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAMESITE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SILHENGPREV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTPROPREV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTVATPREV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTPRO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTVAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FR_WORKPREV\" type=\"STRING\" size=\"256\"/><Column id=\"TO_WORKPREV\" type=\"STRING\" size=\"256\"/><Column id=\"FR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"TO_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYPRO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PREPAYVAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_COSMI\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GTS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GTS\" type=\"STRING\" size=\"256\"/><Column id=\"GW_STATUS1_ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"GW_STATUS1_VIEW_ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS1_ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS1_CANCEL_ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BTN1_ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REQ\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DOKUBPREV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ELAPPRGS\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BTN_AGREE_APP\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCCPR_REQCHGCONTRACT_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCCPR_REQCHGCONTRACT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCCPR_REQCHGCONTRACT_DELETE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo1</Col><Col id=\"SP\">DZZPR_MDM_DETAIL_SELECT_WITH_USER</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DCCPR_REQCHGCONTRACT_INSERT</Col></Row><Row><Col id=\"TARGET\">exec1</Col><Col id=\"SP\">DCCPR_REQCHGCONTRACT_COMPLETE_UPDATE</Col></Row><Row><Col id=\"TARGET\">appChk</Col><Col id=\"SP\">DCBPR_APP_DC08_CHK</Col></Row><Row><Col id=\"TARGET\">appSelect</Col><Col id=\"SP\">DCBPR_APP_DC08_SELECT</Col></Row><Row><Col id=\"TARGET\">appAgreeChk</Col><Col id=\"SP\">DCCPR_APP_DC10_CHK</Col></Row><Row><Col id=\"TARGET\">appAgreeSelect</Col><Col id=\"SP\">DCCPR_APP_DC10_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"RT_JIBUN\" type=\"INT\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FROMTO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HQRECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HQAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REQUEST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_GONGSA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_PYEONG\" type=\"INT\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SPECCONST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RFQ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_SITE\" type=\"INT\" size=\"256\"/><Column id=\"AM_BASIC\" type=\"INT\" size=\"256\"/><Column id=\"YN_PUBLISH_BID\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ATTACH_ILSIK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HASU\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EXFILE_SEPARATE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNION_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNION_BID_CONNECT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_UNION_BID\" type=\"STRING\" size=\"256\"/><Column id=\"YN_UNION_BID_ING\" type=\"STRING\" size=\"256\"/><Column id=\"CT_GONGU\" type=\"INT\" size=\"256\"/><Column id=\"NUM_GONGU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE4\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITEALL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ID_MANAGER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NM_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MANAGERTEL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SITESABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NM_SITESABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SITETEL\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIDREMARK\" type=\"STRING\" size=\"256\"/><Column id=\"RM_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"ONOFF_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"AT_SITEEXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN_GONGO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM_GONGO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID_SUCCESS\" type=\"STRING\" size=\"256\"/><Column id=\"ONOFF\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BIDCOORDI\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIDCOORDI\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BIDCOORDITEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_BIDCOORDI\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BIDDAM1TEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BIDDAM2\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIDDAM2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BIDDAM2TEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_BIDDAM2\" type=\"STRING\" size=\"256\"/><Column id=\"ID_QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"NM_QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_QUESTIONTEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"NM_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"NM_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"GW_STATUS1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS1\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIDSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BIDSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CT_HOUSEHOLDS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_CONTGUARANTEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_ASGUARANTEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_ASFROMTO\" type=\"STRING\" size=\"256\"/><Column id=\"CT_JICHAE\" type=\"INT\" size=\"256\"/><Column id=\"TY_RETIRE_BUGEUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgreeAppList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgreeStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">합의요청</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">합의반려</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">합의완료</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">임의합의요청</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">임의합의반려</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">임의합의완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppMsg", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("FitToContents").set("true");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_CONT","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_CONT","staNO_CONT:0.0","10.0","200","24.0",null,null,null,"300",null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFCONTRACT_01");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("FitToContents").set("true");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_STATUS","ccfNO_CONT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("발주의뢰");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_STATUS","staDS_STATUS:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.getSetter("FitToContents").set("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","1","0","776","25",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("0");
            obj.set_text("변경계약의뢰");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_REQ","740","4","100","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("1");
            obj.set_text("승인요청");
            obj.set_readonly("true");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_APPROVE","880","4","110","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("2");
            obj.set_text("본사승인");
            obj.set_readonly("true");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("3");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_VENDOR","staCD_VENDOR:-1","staTitle:5","380","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staSN_SEQ","staBgCD_VENDOR:-1","30","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("5");
            obj.set_text("계약차수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgSN_SEQ","staSN_SEQ:-1","30","380","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staTY_CONT","0","staCD_VENDOR:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("7");
            obj.set_text("변경구분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_CONT","staTY_CONT:-1","staCD_VENDOR:-1","380","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","staBgTY_CONT:-1","staSN_SEQ:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("9");
            obj.set_text("의뢰일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_REQUEST","staDT_REQUEST:-1","staSN_SEQ:-1","380","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DOKUBPREV","0","staTY_CONT:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("11");
            obj.set_text("당초도급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_DOKUBPREV","staAM_DOKUBPREV:-1","staTY_CONT:-1","380","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SILHENGPREV","0","staAM_DOKUBPREV:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("13");
            obj.set_text("당초예산금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_SILHENGPREV","staAM_SILHENGPREV:-1","staAM_DOKUBPREV:-1","380","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DOKUB","staBgAM_DOKUBPREV:-1","staDT_REQUEST:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("15");
            obj.set_text("변경도급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_DOKUB","staAM_DOKUB:-1","staBgDT_REQUEST:-1","380","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SILHENG","staBgAM_SILHENGPREV:-1","staAM_DOKUB:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("17");
            obj.set_text("변경예산금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_SILHENG","staAM_SILHENG:-1","staAM_DOKUB:-1","380","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTPROPREV","0","staAM_SILHENGPREV:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("19");
            obj.set_text("당초계약공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_CONTPROPREV","staAM_CONTPROPREV:-1","staAM_SILHENGPREV:-1","380","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTPRO","staBgAM_CONTPROPREV:-1","staAM_SILHENG:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("21");
            obj.set_text("변경공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_CONTPRO","staAM_CONTPRO:-1","staAM_SILHENG:-1","380","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTVATPREV","0","staAM_CONTPROPREV:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("23");
            obj.set_text("당초계약부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_CONTVATPREV","staAM_CONTVATPREV:-1","staAM_CONTPROPREV:-1","380","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTVAT","staBgAM_CONTVATPREV:-1","staAM_CONTPRO:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("25");
            obj.set_text("변경부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_CONTVAT","staAM_CONTVAT:-1","staAM_CONTPRO:-1","380","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staDT_WORKPREV","0","staAM_CONTVATPREV:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("27");
            obj.set_text("당초공사기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_WORKPREV","staDT_WORKPREV:-1","staBgAM_CONTVATPREV:-1","380","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","staBgDT_WORKPREV:-1","staAM_CONTVAT:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("29");
            obj.set_text("변경공사기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_WORK","staDT_WORK:-1","staAM_CONTVAT:-1","380","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REASON","0","staDT_WORKPREV:-1","120","116",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("31");
            obj.set_text("변경사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_REASON","staDS_REASON:-1","staDT_WORKPREV:-1","878","116",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staRM_BIGO","0","staDS_REASON:-1","120","87",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("33");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgRM_BIGO","staRM_BIGO:-1","staDS_REASON:-1","878","87",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Edit("txtSN_SEQ","staSN_SEQ:5","staTitle:9","50","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("35");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_VENDOR","staCD_VENDOR:5","staTitle:9","100","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("36");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","txtCD_VENDOR:3","staTitle:9","267","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("37");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_CONT","staTY_CONT:5","txtCD_VENDOR:9","110","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("38");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_CONT");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQUEST","staDT_REQUEST:5","txtSN_SEQ:9","105","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("39");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DOKUBPREV","staAM_DOKUBPREV:5","cboTY_CONT:9","273","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_format("9,999");
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DOKUBPREV_WON","txtAM_DOKUBPREV:5","staTY_CONT:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("41");
            obj.set_text("원");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SILHENGPREV","staAM_SILHENGPREV:5","txtAM_DOKUBPREV:9","273","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_format("9,999");
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SILHENGPREV_WON","txtAM_SILHENGPREV:5","staAM_DOKUBPREV:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("43");
            obj.set_text("원");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DOKUB","staAM_DOKUB:5","ctclDT_REQUEST:9","273","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("44");
            obj.set_format("9,999");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DOKUB_WON","txtAM_DOKUB:5","staDT_REQUEST:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("45");
            obj.set_text("원");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SILHENG","staAM_SILHENG:5","txtAM_DOKUB:9","273","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("46");
            obj.set_format("9,999");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SILHENG_WON","txtAM_SILHENG:5","staAM_DOKUB:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("47");
            obj.set_text("원");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTPROPREV","staAM_CONTPROPREV:5","txtAM_SILHENGPREV:9","273","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_format("9,999");
            obj.set_taborder("48");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTPROPREV_WON","txtAM_CONTPROPREV:5","staAM_SILHENGPREV:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("49");
            obj.set_text("원");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTPRO","staAM_CONTPRO:5","txtAM_SILHENG:9","273","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_format("9,999");
            obj.set_taborder("50");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTPRO_WON","txtAM_CONTPRO:5","staAM_SILHENG:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("51");
            obj.set_text("원");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTVATPREV","staAM_CONTVATPREV:5","txtAM_CONTPROPREV:9","273","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_format("9,999");
            obj.set_taborder("52");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTVATPREV_WON","txtAM_CONTVATPREV:5","staAM_CONTPROPREV:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("53");
            obj.set_text("원");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTVAT","staAM_CONTVAT:5","txtAM_CONTPRO:9","273","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("54");
            obj.set_format("9,999");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTVAT_WON","txtAM_CONTVAT:5","staAM_CONTPRO:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("55");
            obj.set_text("원");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_WORKPREV","staDT_WORKPREV:5","txtAM_CONTVATPREV:9","105","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("56");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staDASH00","ctclFR_WORKPREV:5","staAM_CONTVATPREV:2","12","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("57");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_WORKPREV","staDASH00:5","txtAM_CONTVATPREV:9","105","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("58");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Calendar("tclFR_WORK","staDT_WORK:5","txtAM_CONTVAT:9","105","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("59");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staDASH01","tclFR_WORK:5","txtAM_CONTVAT:9","12","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("60");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Calendar("tclTO_WORK","staDASH01:5","txtAM_CONTVAT:9","105","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("61");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REASON","staDS_REASON:5","staDT_WORKPREV:5","865","104",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("62");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new TextArea("txtRM_BIGO","staRM_BIGO:5","txtDS_REASON:11","865","75",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("63");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("sta72","119","staRM_BIGO:20","380","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("sta73","0","staRM_BIGO:20","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("65");
            obj.set_text("현장담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_fittocontents("none");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("sta70","sta72:-1","staRM_BIGO:20","122","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("66");
            obj.set_text("본사담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("sta71","sta70:-1","staRM_BIGO:20","380","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Div("ccfSABUNSITE","125","txtRM_BIGO:31","370","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("68");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Div("ccfBONSA","sta70:5","txtRM_BIGO:31","370","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("69");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_GONGSA_ABS","157","3","105","22",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("70");
            obj.set_text("공사담당부재");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_GONGMU_ABS","277","3","105","22",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("71");
            obj.set_text("공무담당부재");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.form.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divData.form.divData.form.txtCD_VENDOR","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divData.form.txtDS_VENDOR","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divData.form.txtAM_SILHENGPREV","value","dsList","AM_SILHENGPREV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData.form.txtAM_CONTPROPREV","value","dsList","AM_CONTPROPREV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divData.form.txtAM_CONTVATPREV","value","dsList","AM_CONTVATPREV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divData.form.ctclFR_WORKPREV","value","dsList","FR_WORKPREV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divData.form.ctclTO_WORKPREV","value","dsList","TO_WORKPREV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divData.form.txtDS_REASON","value","dsList","DS_REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData.form.ctclDT_REQUEST","value","dsList","DT_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divData.form.txtAM_SILHENG","value","dsList","AM_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divData.form.txtAM_CONTPRO","value","dsList","AM_CONTPRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divData.form.txtAM_CONTVAT","value","dsList","AM_CONTVAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divData.form.tclFR_WORK","value","dsList","FR_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divData.form.tclTO_WORK","value","dsList","TO_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divData.form.ccfSABUNSITE","value","dsList","ID_SABUNSITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divData.form.ccfBONSA","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_CONT.form.CDTextBox","value","dsSearch","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divData.form.cboTY_CONT","value","dsList","TY_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divData.form.txtSN_SEQ","value","dsList","SN_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divSearch.form.ctxtDS_STATUS","value","dsList","DS_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divData.form.txtRM_BIGO","value","dsList","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divData.form.cchkYN_REQ","value","dsList","YN_REQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divData.form.cchkYN_APPROVE","value","dsList","YN_APPROVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divData.form.txtAM_DOKUBPREV","value","dsList","AM_DOKUBPREV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divData.form.txtAM_DOKUB","value","dsList","AM_DOKUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divData.form.chkYN_GONGSA_ABS","value","dsList","YN_GONGSA_ABS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divData.form.chkYN_GONGMU_ABS","value","dsList","YN_GONGMU_ABS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.addIncludeScript("DCC_REQCHGCONTRACT.xfdl","lib::libCommon.xjs");
        this.registerScript("DCC_REQCHGCONTRACT.xfdl", function() {
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
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


        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_BID))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);

        		this.dsSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_BID);
        		this.divSearch.form.ccfNO_CONT.form.DSTextBox.set_value(this.getOwnerFrame().DS_SUBCON);

        		this.divSearch.form.ccfCD_SITE.form.fnFitToContents();
        		this.divSearch.form.ccfNO_CONT.form.fnFitToContents();

        		//this.dsSearch.setColumn(0, "ID_DAM", this.AuthClient.ID_USER);
        	    //this.divSearch.form.ccfID_DAM.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);

        		this.FormBtns.Select.click();
        	}

        	if(!this.gfnIsNull(this.getOwnerFrame().DS_PARAM))
        	{
        		if(this.getOwnerFrame().DS_PARAM == "MM")
        		{
        			this.btnAgreement.set_enable(false);
        			this.btnAgreeApp.set_enable(false);
        			this.divData.form.divData.form.chkYN_GONGSA_ABS.set_visible(false);
        			this.divData.form.divData.form.chkYN_GONGMU_ABS.set_visible(false);
        		}
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Save.set_enable(true);
        	//this.FormBtns.Add.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnCreate", "fnCreate");
        	this.btn2 = this.gfnFormButtonAdd("btnDetail", "fnDetail");
        	this.btn3 = this.gfnFormButtonAdd("btnUPrice", "fnUPrice");
        	this.btn4 = this.gfnFormButtonAdd("btnReq", "fnReq");
        	this.btn5 = this.gfnFormButtonAdd("btnReqCancel", "fnReqCancel");
        	this.btn6 = this.gfnFormButtonAdd("btnIndirect", "fnIndirect");

        	// this.btnAttachFile = this.gfnFormButtonAdd("btnAttachFile", "fnAttachFile");

        	this.btnPRAttach = this.gfnFormButtonAdd("btnPRAttach", "fnPRAttach");
        	this.btnPRAttach1 = this.gfnFormButtonAdd("btnPRAttach1", "fnPRAttach1");

        	this.btnVendorAddChg = this.gfnFormButtonAdd("btnVendorAddChg", "fnVendorAddChg");

        	this.btnAPP = this.gfnFormButtonAdd("btnApp", "fnAPP");
        	this.btnAgreeApp = this.gfnFormButtonAdd("btnAgreeApp", "fnAgreeApp");
        	this.btnAgreement = this.gfnFormButtonAdd("btnAgreement", "fnAgreement");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_CONT = this.divSearch.form.ccfNO_CONT;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_CONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_CONT", "string");
        	this.dsSelect.addColumn("SN_SEQ", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("NO_CONT", "string");
        	this.dsUpdate.addColumn("TY_CONT", "string");
        	this.dsUpdate.addColumn("DS_REASON", "string");
        	this.dsUpdate.addColumn("ID_SABUNSITE", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("AM_CONTVAT", "bigdecimal");
        	this.dsUpdate.addColumn("FR_WORK", "string");
        	this.dsUpdate.addColumn("TO_WORK", "string");
        	this.dsUpdate.addColumn("AM_PREPAYPRO", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PREPAYVAT", "bigdecimal");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("YN_GONGSA_ABS", "string");
        	this.dsUpdate.addColumn("YN_GONGMU_ABS", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("NO_CONT", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("NO_CONT", "string");
        	this.dsExec.addColumn("ID_USER", "string");

        	this.dsExec1 = new Dataset();
        	this.dsExec1.addColumn("CD_SITE", "string");
        	this.dsExec1.addColumn("NO_HADOCONT", "string");
        	this.dsExec1.addColumn("SN_SEQ", "string")
        	this.dsExec1.addColumn("TY_ORDER", "string")

        	this.dsAppParam = new Dataset();
        	this.dsAppParam.addColumn("CD_SITE", "string");
        	this.dsAppParam.addColumn("NO_CONT", "string");
        	this.dsAppParam.addColumn("SN_SEQ", "string");
        	this.dsAppParam.addColumn("URL", "string");

        	this.dsAgreeAppParam = new Dataset();
        	this.dsAgreeAppParam.addColumn("CD_SITE", "string");
        	this.dsAgreeAppParam.addColumn("NO_HADOCONT", "string");
        	this.dsAgreeAppParam.addColumn("SN_SEQ", "string");
        	this.dsAgreeAppParam.addColumn("CD_VENDOR", "string");
        	this.dsAgreeAppParam.addColumn("DOC_APP", "string");
        	this.dsAgreeAppParam.addColumn("ID_USER", "string");
        }


        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsSelect.setColumn(0, "SN_SEQ", "");
        	this.dsSelect.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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
        						callBackFnc, false); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        }

        /*
         *	저장 버튼
        */
        this.fnSave = function() {
        	if (!this.fnSelectValidate()) return false;
        	if (!this.fnSaveValidate() && this.gfnGetFormStatus(this) != "D") return false;

        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	if(this.dsList.rowcount > 0) {
        		if(this.gfnGetFormStatus(this) == "U") {
        			var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        				this.dsUpdate.setColumn(nrow, "TY_CONT", this.dsList.getColumn(0, "TY_CONT"));
        				this.dsUpdate.setColumn(nrow, "DS_REASON", this.dsList.getColumn(0, "DS_REASON"));
        				this.dsUpdate.setColumn(nrow, "ID_SABUNSITE", this.dsList.getColumn(0, "ID_SABUNSITE"));
        				this.dsUpdate.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        				this.dsUpdate.setColumn(nrow, "AM_CONTVAT", this.dsList.getColumn(0, "AM_CONTVAT"));
        				this.dsUpdate.setColumn(nrow, "FR_WORK", this.dsList.getColumn(0, "FR_WORK"));
        				this.dsUpdate.setColumn(nrow, "TO_WORK", this.dsList.getColumn(0, "TO_WORK"));
        				this.dsUpdate.setColumn(nrow, "AM_PREPAYPRO", this.dsList.getColumn(0, "AM_PREPAYPRO"));
        				this.dsUpdate.setColumn(nrow, "AM_PREPAYVAT", this.dsList.getColumn(0, "AM_PREPAYVAT"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(0, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "YN_GONGSA_ABS", this.dsList.getColumn(0, "YN_GONGSA_ABS"));
        				this.dsUpdate.setColumn(nrow, "YN_GONGMU_ABS", this.dsList.getColumn(0, "YN_GONGMU_ABS"));
        		}
        		else if(this.gfnGetFormStatus(this) == "D") {
        			var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        				this.dsDelete.setColumn(nrow, "NO_CONT", this.dsList.getColumn(0, "NO_CONT"));
        		}
        	}

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate delete=dsDelete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        	this.gfnConfirm("삭제하시겠습니까?","fnDel_callback");
        }


        this.fnDel_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.gfnSetFormStatus(this, "D");
        		this.fnSave();
        	}

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
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");

        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_CONT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_CONT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("계약번호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsList.getColumn(0,"TY_CONT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData.form.divData.form.cboTY_CONT.setFocus();
        		}
        		this.gfnAlert("변경구분은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		//this.gfnGridAfterSelect(this.dxGrid);
        		if(this.dsList.rowcount < 1){
        			this.gfnSetFormStatus(this);
        		}
        		this.fnBtnCheckAll();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec1")
        	{
        		if (errorCode == 0)
        		{

        			this.fnExec1_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}
        			var json = this.gfnArgsToJson(strArg);
        			strArg = json.gubun;

        			var msg = "";

        			if(strArg == "Y") msg = "변경계약의뢰가 정상 처리되었습니다.";
        			else if(strArg == "N") msg = "변경계약의뢰취소가 정상 처리되었습니다.";

        			this.gfnAlert(msg, "fnExec1_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "appChk")
        	{
        		if (errorCode == 0)
        		{
        			this.fnAppSelect();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "appSelect") {
        		if (errorCode == 0)
        		{
        			this.fnCallback_appSelectCallback = function()
        			{
        				this.fnAppOpen();
        			}

        			var msgRow = this.dsAppMsg.findRow("CD_CODE", "01");
        			this.gfnAlert(this.dsAppMsg.getColumn(msgRow,"DS_ETC1"), "fnCallback_appSelectCallback");

        			//this.fnAppOpen();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "appAgreeChk")
        	{
        		if (errorCode == 0)
        		{
        			this.fnAgreeAppSelect();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "appAgreeSelect") {
        		if (errorCode == 0)
        		{
        			this.fnAgreeAppOpen();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfNO_CONT") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 입력해주세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 초기화
        		this.ccfNO_CONT.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo1 = new Dataset();
        	this.dsCombo1.addColumn("CD_SYSTEM", "string");
        	this.dsCombo1.addColumn("CD_MASTER", "string");
        	this.dsCombo1.addColumn("ID_USER", "string");
        	this.dsCombo1.addColumn("CD_DEPT", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "08");

        	this.dsCombo1.addRow();
        	this.dsCombo1.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo1.setColumn(0, "CD_MASTER", "C61");
        	this.dsCombo1.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsCombo1.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo combo1=dsCombo1";
        	var outData     = "dsTY_CONT=combo0 dsAppMsg=combo11";
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
        		/*
        		this.dsTY_JAJIK.insertRow(0);
        		this.dsTY_JAJIK.setColumn(0, "CD_CODE", "");
        		this.dsTY_JAJIK.setColumn(0, "DS_CODE", "전체");
        		*/
         		//this.divData.form.divData01.form.cboTY_HAJA.set_index(0);

        		this.dsTY_CONT.deleteRow(this.dsTY_CONT.findRow("CD_CODE","01"));
        	}
        };

        /*
         *	1 차수생성
         */
        this.fnExec = function() {

        	this.dsExec.clearData();
        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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


        this.fnCreate = function(obj, e){

        	this.gfnConfirm("차수를 생성하시겠습니까?", "fnCreate_callback");

        };

        this.fnCreate_callback = function(strId, val)
        {
        	if(val == true) {
        		this.fnExec();
        	}
        }


        /*
         *	2 변경계약의뢰
         */
        this.fnExec1 = function() {

        	this.dsExec1.clearData();
        	this.dsExec1.addRow();

        	this.dsExec1.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec1.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsExec1.setColumn(0, "SN_SEQ", this.dsList.getColumn(0, "SN_SEQ"));
        	this.dsExec1.setColumn(0, "TY_ORDER", "완료");

        	if (this.dsExec1.rowcount == 0) return;

        	var strSvcId    = "exec1";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec1=dsExec1";
        	var outData     = "";
        	var strArg      = "gubun=Y";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        //변경계약의뢰 2
        this.fnReq = function(obj, e){

        	this.gfnConfirm("변경계약 의뢰 하시겠습니까?", "fnReq_callback");

        };

        this.fnReq_callback = function(strId, val)
        {
        	if(val == true) {
        		this.fnExec1();
        	}
        }

        /*
         *	3 변경계약의뢰취소
         */
        this.fnExec2 = function() {

        	this.dsExec1.clearData();
        	this.dsExec1.addRow();

        	this.dsExec1.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec1.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsExec1.setColumn(0, "SN_SEQ", this.dsList.getColumn(0, "SN_SEQ"));
        	this.dsExec1.setColumn(0, "TY_ORDER", "취소");

        	if (this.dsExec1.rowcount == 0) return;

        	var strSvcId    = "exec1";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec1=dsExec1";
        	var outData     = "";
        	var strArg      = "gubun=N";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }


        //변경계약의뢰취소 2-1
        this.fnReqCancel = function(obj, e){


        	this.gfnConfirm("변경계약 취소 하시겠습니까?", "fnReqCancel_callback");

        };

        this.fnReqCancel_callback = function(strId, val)
        {
        	if(val == true) {
        		this.fnExec2();
        	}
        }


        //변경내역작성
        this.fnDetail = function(obj, e){

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.NO_HADOCONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.DS_HADOCONT = this.ccfNO_CONT.form.DSTextBox.value;

        	this.gfnFormOpen("DWA", "DWA_SILHENGTOHADO", "fnDetail_callback", param);

        };

        this.fnDetail_callback = function(svcID, value)
        {
        	this.FormBtns.Select.click();
        }

        //변경단가확정
        this.fnUPrice = function(obj, e){

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.NO_HADOCONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.DS_HADOCONT = this.ccfNO_CONT.form.DSTextBox.value;
        	param.SN_SEQ = this.dsList.getColumn(0, "SN_SEQ");

        	//this.gfnAlert("추후 개발 예정");

        	this.gfnFormOpen("DWA", "DWA_HDSILHENGCOMP", "fnUPrice_callback", param);
        };

        this.fnUPrice_callback = function(svcID, value)
        {
        	if(value == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        //변경내역작성
        this.fnIndirect = function(obj, e){

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.DS_CONT = this.ccfNO_CONT.form.DSTextBox.value;
        	param.SN_SEQ = this.dsList.getColumn(0, "SN_SEQ");

        	this.gfnFormOpen("DCC", "DCC_REQCHGCONTRACT_INDIRECT", "fnUPrice_callback", param);

        };

        /*
        this.fnAPP = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	if (this.dsList.rowcount < 1) { return false; }
        	if(!this.fnSaveValidate()) return false;

        	var param = {};
        	//var nRow = this.dsList.rowposition;

        	param.PARAM01 = this.dsSearch.getColumn(0,"CD_SITE");
        	param.PARAM02 = this.dsSearch.getColumn(0, "NO_CONT");
        	param.PARAM03 = this.dsList.getColumn(0, "SN_SEQ");
        	param.ID_AP = this.dsList.getColumn(0, "NO_ELAPDOC");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_REQCHGCONTRACT_APPROVAL", "fnAprvDialogCallback", param);

        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };
        */

        /*

         // 첨부파일 버튼
         this.fnAttachFile = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (this.dsList.rowcount < 1) { return false; }

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC65";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"NO_CONT"), this.dsList.getColumn(0, "SN_SEQ")];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        };
        */

        this.fnVendorAddChg = function(obj,e)
        {
        	if (this.dsList.rowcount < 1) {
        		this.gfnAlert("조회 후 진행해주세요.");
        		return false;
        	}

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.DS_SUBCON = this.divSearch.form.ccfNO_CONT.form.DSTextBox.text;
        	param.SN_SEQ = this.dsList.getColumn(0, "SN_SEQ");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMA_POVENDORADD_CHG", "fnVendorAddChg_callback", param);
        }

        this.fnVendorAddChg_callback = function(strID, val)
        {
        	this.FormBtns.Select.click();
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");	// 폼상태 초기화
        	}
        };

        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btn1, this.dsList);
        	this.gfnBtnCheck(this.btn2, this.dsList);
        	this.gfnBtnCheck(this.btn3, this.dsList);
        	this.gfnBtnCheck(this.btn4, this.dsList);
        	this.gfnBtnCheck(this.btn5, this.dsList);
        	this.gfnBtnCheck(this.btn6, this.dsList);
        	this.gfnBtnCheck(this.btnAPP, this.dsList);

        	if(this.getOwnerFrame().DS_PARAM == "MM")
        	{
        		this.btnAgreement.set_enable(false);
        		this.btnAgreeApp.set_enable(false);
        	}
        }

        this.fnAPP = function(obj,e) {
        	if (this.dsList.rowcount == 0) return false;
        	if(!this.fnSaveValidate()) return;

        	var msg = "";
        	var strTY_CONT = this.dsList.getColumn(0, "TY_CONT");

        	if(strTY_CONT == "05")
        	{
        		msg = "정산품의를 진행하시겠습니까?";;
        	}else
        	{
        		msg = "변경품의를 진행하시겠습니까?";;
        	}

        	this.gfnConfirm(msg, "fnApp_callback", "");
        }

        this.fnApp_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsAppParam.clearData();
        		var nrow = this.dsAppParam.addRow();

        		this.dsAppParam.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        		this.dsAppParam.setColumn(nrow, "NO_CONT", this.dsList.getColumn(0, "NO_CONT"));
        		this.dsAppParam.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(0, "SN_SEQ"));

        		if (this.dsAppParam.rowcount == 0) return;

        		var strSvcId    = "appChk";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "appChk=dsAppParam";
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
        }

        this.fnAppSelect = function()
        {
        	var url = this.gfnGetServerUrl();

        	if(url == "http://localhost:8080")
        	{
        		url += "/erp";
        	}

        	this.dsAppParam.setColumn(0, "URL", url);

        	var strSvcId    = "appSelect";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "appSelect=dsAppParam";
        	var outData     = "dsAppList=appSelect0";
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

        this.fnAppOpen = function()
        {
        	if(this.dsAppList.rowcount > 0)
        	{
        		var sApType = "";
        		var sTitle = "";

        		var strTY_CONT = this.dsList.getColumn(0, "TY_CONT");
        		var strCD_SYSTEM = this.dsList.getColumn(0, "CD_SYSTEM");

        		var ds_site = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        		var ds_cont = this.divSearch.form.ccfNO_CONT.form.DSTextBox.text;

        		if(strTY_CONT == "05")
        		{
        			sTitle = "[정산계약의뢰";

        		}else
        		{
        			sTitle = "[변경계약의뢰";
        		}

        		console.log(strCD_SYSTEM);

        		if(strCD_SYSTEM == "DC")
        		{
        			sApType = "DC08";
        			sTitle += "/외주]" + ds_site + "/" + ds_cont;
        		}
        		else
        		{
        			sApType = "DM08";
        			sTitle += "/자재]" + ds_site + "/" + ds_cont;
        		}

        		var sRef01  = this.dsAppParam.getColumn(0, "CD_SITE");
        		var sRef02  = this.dsAppParam.getColumn(0, "NO_CONT");
        		var sRef03  = this.dsAppParam.getColumn(0, "SN_SEQ");
        		var sRef04  = "";
        		var oParam  = this.gfnDataSetToJson(this.dsAppList, this.dsAppList.rowposition)

        		console.info("================ oParam");
        		console.info(oParam);

        		this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, sRef04, oParam, "fnAprvDialogCallback");
        	}
        }

        this.fnPRAttach = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC49";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"NO_CONT"), this.dsList.getColumn(0, "SN_SEQ")];
        	fileManager.IS_READONLY = false;
        	this.gfnFileManager(fileManager, "fnFileCallback");
        }

        this.fnPRAttach1 = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC50";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"NO_CONT"), this.dsList.getColumn(0, "SN_SEQ")];
        	fileManager.IS_READONLY = false;
        	this.gfnFileManager(fileManager, "fnFileCallback");
        }

        // 합의요청 버튼 이벤트
        this.fnAgreement = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	var param = {};
        	param.CD_SITE 			= this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE 			= this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_HADOCONT 		= this.dsSearch.getColumn(0, "NO_CONT");
        	param.DS_HADOCONT 		= this.divSearch.form.ccfNO_CONT.form.DSTextBox.text;
        	param.SN_SEQ 			= this.dsList.getColumn(0, "SN_SEQ");
        	param.CD_VENDOR 		= this.dsList.getColumn(0, "CD_VENDOR");
        	param.DS_VENDOR 		= this.dsList.getColumn(0, "DS_VENDOR");
        	param.AM_TT_DOKUB 		= this.dsList.getColumn(0, "AM_DOKUB");
        	param.AM_TT_SILHENG 	= this.dsList.getColumn(0, "AM_SILHENG");
        	param.AM_TT_HADO 		= this.dsList.getColumn(0, "AM_CONTPRO");
        	param.AM_TT_HADO_VAT 	= this.dsList.getColumn(0, "AM_CONTVAT");
        	param.DT_KONGSA_FROM 	= this.dsList.getColumn(0, "FR_WORK");
        	param.DT_KONGSA_TO 		= this.dsList.getColumn(0, "TO_WORK");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_REQCHGCONTRACT_AGREEMENT", "fnAgreement_callback", param, 1000, 580);
        }

        this.fnAgreement_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }


        this.fnAgreeApp = function(obj,e) {
        	if (this.dsList.rowcount = 0) return false;
        	if(!this.fnSaveValidate()) return;

        	var msg = "임의합의를 진행하시겠습니까?";

        	this.gfnConfirm(msg, "fnAgreeApp_callback");
        }

        this.fnAgreeApp_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsAgreeAppParam.clearData();
        		var nrow = this.dsAgreeAppParam.addRow();

        		this.dsAgreeAppParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsAgreeAppParam.setColumn(nrow, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_CONT"));
        		this.dsAgreeAppParam.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(0, "SN_SEQ"));
        		this.dsAgreeAppParam.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        		this.dsAgreeAppParam.setColumn(nrow, "DOC_APP", "DC10");
        		this.dsAgreeAppParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsAgreeAppParam.rowcount == 0) return;

        		var strSvcId    = "appAgreeChk";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "appAgreeChk=dsAgreeAppParam";
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
        }


        this.fnAgreeAppSelect = function()
        {
        	var strSvcId    = "appAgreeSelect";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "appAgreeSelect=dsAgreeAppParam";
        	var outData     = "dsAgreeAppList=appAgreeSelect0";
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


        this.fnAgreeAppOpen = function()
        {
        	if(this.dsAgreeAppList.rowcount > 0)
        	{
        		var ds_site = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        		var ds_cont = this.divSearch.form.ccfNO_CONT.form.DSTextBox.text;

        		var sApType = "DC10";
        		var sTitle = "[임의합의/외주]" + ds_site + "/" + ds_cont;

        		//var strTY_CONT = this.dsList.getColumn(0, "TY_CONT");
        		//var strCD_SYSTEM = this.dsList.getColumn(0, "CD_SYSTEM");

        		var sRef01  = this.dsAgreeAppParam.getColumn(0, "CD_SITE");
        		var sRef02  = this.dsAgreeAppParam.getColumn(0, "NO_HADOCONT");
        		var sRef03  = this.dsAgreeAppParam.getColumn(0, "SN_SEQ");
        		var sRef04  = this.dsAgreeAppParam.getColumn(0, "CD_VENDOR");
        		var oParam  = this.gfnDataSetToJson(this.dsAgreeAppList, this.dsAgreeAppList.rowposition)

        		console.info("================ oParam");
        		console.info(oParam);

        		this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, sRef04, oParam, "fnAprvDialogCallback");
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divData.form.staAM_CONTVATPREV.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsAppList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsAgreeAppList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DCC_REQCHGCONTRACT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
