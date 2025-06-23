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
            this.set_titletext("변경계약품의서(본사)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUNSITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAMESITE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SILHENGPREV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTPROPREV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTVATPREV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTPRO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTVAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FR_WORKPREV\" type=\"STRING\" size=\"256\"/><Column id=\"TO_WORKPREV\" type=\"STRING\" size=\"256\"/><Column id=\"FR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"TO_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYPRO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PREPAYVAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_COSMI\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GTS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GTS\" type=\"STRING\" size=\"256\"/><Column id=\"GW_STATUS1_ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"GW_STATUS1_VIEW_ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS1_ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS1_CANCEL_ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BTN1_ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DOKUBPREV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCCPR_REQCHGCONTRACT_BONSA_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCCPR_REQCHGCONTRACT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCCPR_REQCHGCONTRACT_DELETE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DCCPR_REQCHGCONTRACT_INSERT</Col></Row><Row><Col id=\"TARGET\">exec1</Col><Col id=\"SP\">DCCPR_REQCHGCONTRACT_COMPLETE_UPDATE</Col></Row><Row><Col id=\"TARGET\">appr_select</Col><Col id=\"SP\">DZRPR_AP_STATE_SELECT</Col></Row><Row><Col id=\"TARGET\">aplines</Col><Col id=\"SP\">DZRPR_APPLINES_SELECT</Col></Row><Row><Col id=\"SP\">DZZPR_APPROVAL_CALLBACK</Col><Col id=\"TARGET\">execAppr</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YN_LINK\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_CONT\"/><Col id=\"YN_LINK\"/><Col id=\"ID_AP\"/><Col id=\"SN_SEQ\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAppr", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAplines", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
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
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("FitToContents").set("true");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_STATUS","ccfNO_CONT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("발주의뢰");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_STATUS","staDS_STATUS:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.getSetter("FitToContents").set("true");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataApprLeft","0","0","700","79",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_background("");
            obj.set_border("1px solid #c9c6c3");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staApprNm","0","4",null,null,"0","0",null,null,null,null,this.divData.form.divDataApprLeft.form);
            obj.set_taborder("0");
            obj.set_text("변경승인(본사) 품의서");
            obj.set_textDecoration("none");
            obj.set_background("");
            obj.set_font("normal 20pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.divData.form.divDataApprLeft.addChild(obj.name, obj);

            obj = new Div("divDataAppr","divDataApprLeft:10","0",null,"80","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridAppr","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataAppr.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataAppr.addChild(obj.name, obj);

            obj = new Div("divData","0","divDataAppr:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","1","0","776","25",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("0");
            obj.set_text("변경계약의뢰");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","staTitle:5","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("1");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_VENDOR","staCD_VENDOR:-1","staTitle:5","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staSN_SEQ","staBgCD_VENDOR:-1","30","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("3");
            obj.set_text("계약차수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgSN_SEQ","staSN_SEQ:-1","30","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staTY_CONT","0","staCD_VENDOR:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("5");
            obj.set_text("변경구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_CONT","staTY_CONT:-1","staCD_VENDOR:-1","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","staBgTY_CONT:-1","staSN_SEQ:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("7");
            obj.set_text("의뢰일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_REQUEST","staDT_REQUEST:-1","staSN_SEQ:-1","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DOKUBPREV","0","staTY_CONT:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("12");
            obj.set_text("당초도급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_DOKUBPREV","staAM_DOKUBPREV:-1","staTY_CONT:-1","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SILHENGPREV","0","staAM_DOKUBPREV:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("14");
            obj.set_text("당초예산금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_SILHENGPREV","staAM_SILHENGPREV:-1","staAM_DOKUBPREV:-1","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DOKUB","staBgAM_DOKUBPREV:-1","staDT_REQUEST:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("16");
            obj.set_text("변경도급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_DOKUB","staAM_DOKUB:-1","staBgDT_REQUEST:-1","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SILHENG","staBgAM_SILHENGPREV:-1","staAM_DOKUB:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("18");
            obj.set_text("변경예산금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_SILHENG","staAM_SILHENG:-1","staAM_DOKUB:-1","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTPROPREV","0","staAM_SILHENGPREV:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("13");
            obj.set_text("당초계약공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_CONTPROPREV","staAM_CONTPROPREV:-1","staAM_SILHENGPREV:-1","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTPRO","staBgAM_CONTPROPREV:-1","staAM_SILHENG:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("15");
            obj.set_text("변경공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_CONTPRO","staAM_CONTPRO:-1","staAM_SILHENG:-1","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTVATPREV","0","staAM_CONTPROPREV:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("17");
            obj.set_text("당초계약부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_CONTVATPREV","staAM_CONTVATPREV:-1","staAM_CONTPROPREV:-1","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTVAT","staBgAM_CONTVATPREV:-1","staAM_CONTPRO:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("19");
            obj.set_text("변경부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_CONTVAT","staAM_CONTVAT:-1","staAM_CONTPRO:-1","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staDT_WORKPREV","0","staAM_CONTVATPREV:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("21");
            obj.set_text("당초공사기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_WORKPREV","staDT_WORKPREV:-1","staBgAM_CONTVATPREV:-1","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","staBgDT_WORKPREV:-1","staAM_CONTVAT:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("23");
            obj.set_text("변경공사기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_WORK","staDT_WORK:-1","staAM_CONTVAT:-1","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PREPAYPRO","0","staDT_WORKPREV:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("25");
            obj.set_text("선급금공급가액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_PREPAYPRO","staAM_PREPAYPRO:-1","staDT_WORKPREV:-1","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PREPAYVAT","staBgAM_PREPAYPRO:-1","staDT_WORK:-1","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("27");
            obj.set_text("선급금부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_PREPAYVAT","staAM_PREPAYVAT:-1","staDT_WORK:-1","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REASON","0","staDT_WORKPREV:-1","120","87",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("29");
            obj.set_text("변경사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_REASON","staDS_REASON:-1","staDT_WORKPREV:-1","658","87",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Edit("txtSN_SEQ","staSN_SEQ:5","staTitle:9","50","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("31");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_VENDOR","staCD_VENDOR:5","staTitle:9","80","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","txtCD_VENDOR:3","staTitle:9","171","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_CONT","staTY_CONT:5","txtCD_VENDOR:9","110","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("34");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_CONT");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQUEST","staDT_REQUEST:5","txtSN_SEQ:9","105","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("35");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DOKUBPREV","staAM_DOKUBPREV:5","cboTY_CONT:9","183","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_format("9,999");
            obj.set_taborder("41");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DOKUBPREV_WON","txtAM_DOKUBPREV:5","staTY_CONT:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("42");
            obj.set_text("원");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SILHENGPREV","staAM_SILHENGPREV:5","txtAM_DOKUBPREV:9","183","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_format("9,999");
            obj.set_taborder("43");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SILHENGPREV_WON","txtAM_SILHENGPREV:5","staAM_DOKUBPREV:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("44");
            obj.set_text("원");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DOKUB","staAM_DOKUB:5","ctclDT_REQUEST:9","183","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("45");
            obj.set_format("9,999");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DOKUB_WON","txtAM_DOKUB:5","staDT_REQUEST:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("46");
            obj.set_text("원");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SILHENG","staAM_SILHENG:5","txtAM_DOKUB:9","183","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("47");
            obj.set_format("9,999");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SILHENG_WON","txtAM_SILHENG:5","staAM_DOKUB:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("48");
            obj.set_text("원");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTPROPREV","staAM_CONTPROPREV:5","txtAM_SILHENGPREV:9","183","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_format("9,999");
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTPROPREV_WON","txtAM_CONTPROPREV:5","staAM_SILHENGPREV:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("41");
            obj.set_text("원");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTPRO","staAM_CONTPRO:5","txtAM_SILHENG:9","183","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_format("9,999");
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTPRO_WON","txtAM_CONTPRO:5","staAM_SILHENG:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("43");
            obj.set_text("원");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTVATPREV","staAM_CONTVATPREV:5","txtAM_CONTPROPREV:9","183","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_format("9,999");
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTVATPREV_WON","txtAM_CONTVATPREV:5","staAM_CONTPROPREV:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("45");
            obj.set_text("원");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTVAT","staAM_CONTVAT:5","txtAM_CONTPRO:9","183","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("46");
            obj.set_format("9,999");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTVAT_WON","txtAM_CONTVAT:5","staAM_CONTPRO:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("47");
            obj.set_text("원");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_WORKPREV","staDT_WORKPREV:5","txtAM_CONTVATPREV:9","105","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("48");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staDASH00","ctclFR_WORKPREV:5","staAM_CONTVATPREV:2","12","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("49");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_WORKPREV","staDASH00:5","txtAM_CONTVATPREV:9","105","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("50");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Calendar("tclFR_WORK","staDT_WORK:5","txtAM_CONTVAT:9","105","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staDASH01","tclFR_WORK:5","txtAM_CONTVAT:9","12","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("52");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Calendar("tclTO_WORK","staDASH01:5","txtAM_CONTVAT:9","105","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("53");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PREPAYPRO","staAM_PREPAYPRO:5","ctclFR_WORKPREV:9","183","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_format("9,999");
            obj.set_taborder("54");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PREPAYPRO_WON","txtAM_PREPAYPRO:5","staDT_WORKPREV:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("55");
            obj.set_text("원");
            obj.set_visible("false");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PREPAYVAT","staAM_PREPAYVAT:5","tclFR_WORK:9","183","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_format("9,999");
            obj.set_taborder("56");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PREPAYVAT_WON","txtAM_PREPAYVAT:5","staDT_WORK:1","27","23",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("57");
            obj.set_text("원");
            obj.set_visible("false");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REASON","staDS_REASON:5","staDT_WORKPREV:5","645","75",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("58");
            obj.set_readonly("true");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("sta72","119","staDS_REASON:20","270","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("sta70","sta72:-1","staDS_REASON:20","122","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("59");
            obj.set_text("본사담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("sta71","sta70:-1","staDS_REASON:20","268","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Static("sta73","0","staDS_REASON:20","120","30",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.set_taborder("62");
            obj.set_text("현장담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_fittocontents("none");
            obj.set_textAlign("left");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Div("ccfSABUNSITE","125","staDS_REASON:25","260","20",null,null,null,null,null,null,this.divData.form.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("63");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divData.addChild(obj.name, obj);

            obj = new Div("ccfBONSA","sta70:5","staDS_REASON:25","255","20",null,null,null,"300",null,null,this.divData.form.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("64");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("FitToContents").set("true");
            obj.set_enable("false");
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

            obj = new BindItem("item10","divData.form.divData.form.txtAM_PREPAYPRO","value","dsList","AM_PREPAYPRO");
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

            obj = new BindItem("item18","divData.form.divData.form.txtAM_PREPAYVAT","value","dsList","AM_PREPAYVAT");
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

            obj = new BindItem("item23","divData.form.divData.form.txtAM_DOKUBPREV","value","dsList","AM_DOKUBPREV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divData.form.txtAM_DOKUB","value","dsList","AM_DOKUB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCC_REQCHGCONTRACT_BONSA_APPROVAL.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().PARAM01) && !this.gfnIsNull(this.getOwnerFrame().PARAM02))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().PARAM01);
        		this.divSearch.form.ccfCD_SITE.form.fnCodeFindLoad();

        		this.dsSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().PARAM02);
        		this.divSearch.form.ccfNO_CONT.form.fnCodeFindLoad();

        		this.dsSearch.setColumn(0, "SN_SEQ", this.getOwnerFrame().PARAM03);

        		this.dsSearch.setColumn(0, "YN_LINK", this.getOwnerFrame().YN_LINK);	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다
        		this.dsSearch.setColumn(0, "ID_AP", this.getOwnerFrame().ID_AP);		// 전자결재문서번호

        		// 결재상태값 조회 후 그리드 조회한다
        		this.fnApprSel();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Save.set_enable(true);
        	//this.FormBtns.Add.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAprvCmpl = this.gfnFormButtonAdd("btnAprvCmpl", "fnAprvCmpl");
        	this.btnAprvCnc = this.gfnFormButtonAdd("btnAprvCnc", "fnAprvCnc");
        	this.btnAprvInf = this.gfnFormButtonAdd("btnAprvInf", "fnAprvInf");
        	this.btnAprvSang = this.gfnFormButtonAdd("btnAprvSang", "fnAprvSang");
        	this.btnApCnl = this.gfnFormButtonAdd("btnApCnl", "fnApCnl");
        	this.btnUPrice = this.gfnFormButtonAdd("btnUPrice", "fnUPrice");
        	this.btnAttachFile = this.gfnFormButtonAdd("btnAttachFile", "fnAttachFile");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_CONT = this.divSearch.form.ccfNO_CONT;

        	// 결재관련
        	this.dxGridAppr = this.divData.form.divDataAppr.form.objGridAppr;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_CONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 결재관련
        	this.gfnGridInit(this.dxGridAppr, this.dsListAplines, "DZ", "DZR_APLINES_01");
        	this.dxGridAppr.set_extendsizetype("none");
        	this.dxGridAppr.set_scrollbartype("none default");	// 가로 스크롤이 생기지 않게 셋팅
        	var colDS_NOTE = this.dxGridAppr.getBindCellIndex("body", "DS_NOTE");
        	this.dxGridAppr.setCellProperty("body", colDS_NOTE, "tooltiptext", "expr:DS_NOTE==''?'':DS_NOTE" );	// 의견컬럼 툴팁추가
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
        	this.dsUpdate.addColumn("ID_USER", "string");

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

        	// 결재관련
        	this.dsExecAppr = new Dataset();
        	this.dsExecAppr.addColumn("ID_AP", "string");
        	this.dsExecAppr.addColumn("V_PARAM01", "string");
        	this.dsExecAppr.addColumn("V_PARAM02", "string");
        	this.dsExecAppr.addColumn("V_PARAM03", "string");
        	this.dsExecAppr.addColumn("V_PARAM04", "string");
        	this.dsExecAppr.addColumn("ST_APPR", "string");
        	this.dsExecAppr.addColumn("ID_USER", "string");

        	// 결재관련 상태
        	this.dsSelectAppr = new Dataset();
        	this.dsSelectAppr.addColumn("ID_AP", "string");
        	this.dsSelectAppr.addColumn("ID_USER", "string");

        	// 결재선 그리드
        	this.dsAplines = new Dataset();
        	this.dsAplines.addColumn("ID_AP", "string");

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
        	this.dsSelect.setColumn(0, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
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
        						callBackFnc); // 통신방법 정의 [생략가능]
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
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
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

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		// 확장버튼 활성화 or 비활성화 처리
        		this.fnBtnEnable();	// 결재관련

        		// 결재선 조회
        		this.fnSelectAppr();
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
        		else if(svcID == "exec1") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "aplines") {
        		if(this.dsListAplines.rowcount > 0) {
        			this.dxGridAppr.setRealRowSize(0, 24);
        		}
        	}
        	else if (svcID == "apprsel") {	// 결재관련
        		// 링크 통해서 화면이 오픈되었을 경우에 this.fnExec() 실행한다
        		if(this.dsSearch.getColumn(0, "YN_LINK") != "N"){
        			if(this.dsListAppr.rowcount < 1){
        				this.fnApprselnullCallback = function() {
        					this.getParentContext().close(true);
        					return;
        				}
        				this.gfnAlert("품의서를 열수없습니다.", "fnApprselnullCallback");
        			}

        			if(this.dsListAppr.getColumn(0,"ST_APPR") == "05"){
        				this.fnApprselCallback = function() {
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert("결재가 취소되었습니다.", "fnApprselCallback");
        			}else{
        				this.fnExecAppr();
        			}
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}
        	else if(svcID == "execAppr") {	// 결재관련
        		if (errorCode == 0) {
        			// 화면 로드시에 링크 통해서 화면이 오픈되었을경우에만 처리후에 조회한다
        			this.FormBtns.Select.click();
        		} else {
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
        		//this.ccfNO_CONT.form.fnCodeFindClear();
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

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "20");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_CONT=combo0";
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
        	if(value == true)
        	{
        		this.FormBtns.Select.click();
        	}
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

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");	// 폼상태 초기화
        	}
        };

        this.divData_divData_ctclTO_WORKPREV_onchanged = function(obj,e)
        {

        };


         // 첨부파일 버튼
         this.fnAttachFile = function(obj,e) {
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


        //*** 아래는 결재관련 소스 ***//

         // 승인 버튼 클릭 이벤트
         this.fnAprvCmpl = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_CONT");
        	param.V_PARAM03 = this.dsSearch.getColumn(0, "SN_SEQ");
        	param.V_PARAM04 = "";
        	param.ST_APPR = "03";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 430, 210);
        }

         // 반려 버튼 클릭 이벤트
         this.fnAprvCnc = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_CONT");
        	param.V_PARAM03 = this.dsSearch.getColumn(0, "SN_SEQ");
        	param.V_PARAM04 = "";
        	param.ST_APPR = "04";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 430, 210);
        }

         // 결재취소 버튼 클릭 이벤트
         this.fnApCnl = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_CONT");
        	param.V_PARAM03 = this.dsSearch.getColumn(0, "SN_SEQ");
        	param.V_PARAM04 = "";
        	param.ST_APPR = "05";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 430, 210);
        }


        this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		this.getParentContext().close(true);
        	}
        };

         // 결재정보 버튼 클릭 이벤트
         this.fnAprvInf = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsListAppr.getColumn(0, "ID_AP");

        	this.gfnFormOpenNonAuth("DZR", "DZR_APLINES", "", param, 830, 400);
        }


        // 결제상신
         this.fnAprvSang = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	var nRow = this.dsList.rowposition;

        	param.ID_AP_TYPE = "DC03";
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_CONT");
        	param.V_PARAM03 = this.dsSearch.getColumn(0, "SN_SEQ");
        	param.V_PARAM04 = "";
        	param.DS_TITLE =  "변경승인(본사) 품의서";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_REQUEST", "fnDialogCallback", param, 900, 650);
         }

         this.fnDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value == true){
        		this.getParentContext().close(true);
        	}
        };

        // 결재상태값 조회
        this.fnApprSel = function() {
        	this.dsSelectAppr.clearData();
        	this.dsSelectAppr.addRow();

        	this.dsSelectAppr.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsSelectAppr.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "apprsel";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "appr_select=dsSelectAppr";
        	var outData     = "dsListAppr=appr_select0";
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

        // 확장버튼 활성화 or 비활성화처리
        this.fnBtnEnable = function() {
        	if(this.gfnIsNull(this.dsListAppr.getColumn(0, "ID_AP"))){	// 결재번호
        		this.btnAprvCmpl.set_enable(false);		// 승인(03)
        		this.btnAprvCnc.set_enable(false);		// 반려(04)
        		this.btnApCnl.set_enable(false);		// 결제취소(05)
        		this.btnAprvInf.set_enable(false);		// 결제정보
        		this.btnAprvSang.set_enable(true);		// 결제상신
        	}else{
        		if(this.dsListAppr.getColumn(0, "ST_APPR") == "01"){	// 결재상태
        			if(this.dsListAppr.getColumn(0, "YN_USER") == "Y"){
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        				}

        				this.btnAprvCnc.set_enable(false);
        				this.btnApCnl.set_enable(true);
        			}else{
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        					this.btnAprvCnc.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        					this.btnAprvCnc.set_enable(false);
        				}

        				this.btnApCnl.set_enable(false);
        			}

        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(false);
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "02"){
        			if(this.dsListAppr.getColumn(0, "YN_USER") == "Y"){
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        				}

        				this.btnAprvCnc.set_enable(false);
        				this.btnApCnl.set_enable(false);
        			}else{
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        					this.btnAprvCnc.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        					this.btnAprvCnc.set_enable(false);
        				}

        				this.btnApCnl.set_enable(false);
        			}

        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(false);
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "03"){
        			this.btnAprvCmpl.set_enable(false);
        			this.btnAprvCnc.set_enable(false);
        			this.btnApCnl.set_enable(false);
        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(false);
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "04"){
        			this.btnAprvCmpl.set_enable(false);
        			this.btnAprvCnc.set_enable(false);
        			this.btnApCnl.set_enable(false);
        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(true);
        			this.btnAprvSang.set_text("재상신");	// 반려 상태일때는 결재상신 버튼이 재상신으로 셋팅한다
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "05"){
        			this.btnAprvCmpl.set_enable(false);
        			this.btnAprvCnc.set_enable(false);
        			this.btnApCnl.set_enable(false);
        			this.btnAprvInf.set_enable(false);
        			this.btnAprvSang.set_enable(true);
        		}
        	}
        }


        /*
         *	결재완료 or 취소 처리
         */
        this.fnExecAppr = function() {

        	this.dsExecAppr.clearData();

        	this.dsExecAppr.addRow();

        	this.dsExecAppr.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsExecAppr.setColumn(0, "V_PARAM01", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExecAppr.setColumn(0, "V_PARAM02", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsExecAppr.setColumn(0, "V_PARAM03", this.dsSearch.getColumn(0, "SN_SEQ"));
        	this.dsExecAppr.setColumn(0, "V_PARAM04", "");
        	this.dsExecAppr.setColumn(0, "ST_APPR", "02");
        	this.dsExecAppr.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsExecAppr.rowcount == 0) return;

        	var strSvcId    = "execAppr";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execAppr=dsExecAppr";
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
          *	결재선그리드 조회
          */
        this.fnSelectAppr = function() {
        	this.dsAplines.clearData();
        	this.dsAplines.addRow();

        	this.dsAplines.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));

        	var strSvcId    = "aplines";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "aplines=dsAplines";
        	var outData     = "dsListAplines=aplines0";
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



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divData.form.staAM_CONTVATPREV.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DCC_REQCHGCONTRACT_BONSA_APPROVAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
