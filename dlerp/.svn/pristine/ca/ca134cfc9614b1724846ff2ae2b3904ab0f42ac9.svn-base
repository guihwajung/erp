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
            this.set_titletext("하도급승인원(전자결재)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_TAXFREE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_APPROVE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_HQAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_E_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTPRO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTVAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DIRECT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INDIRECT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_PRECONTRACT_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCBPR_PRECONTRACT_UPDATE</Col></Row><Row><Col id=\"TARGET\">select_d1</Col><Col id=\"SP\">DCBPR_PRECONTRACT_INDIRECT_BID_SELECT</Col></Row><Row><Col id=\"TARGET\">select_d2</Col><Col id=\"SP\">DCBPR_PRECONTRACT_LABOR_CHG_SELECT</Col></Row><Row><Col id=\"TARGET\">insert_d2</Col><Col id=\"SP\">DCBPR_PRECONTRACT_LABOR_CHG_INSERT</Col></Row><Row><Col id=\"TARGET\">delete_d2</Col><Col id=\"SP\">DCBPR_PRECONTRACT_LABOR_CHG_DELETE</Col></Row><Row><Col id=\"TARGET\">update_d2</Col><Col id=\"SP\">DCBPR_PRECONTRACT_LABOR_CHG_UPDATE</Col></Row><Row><Col id=\"TARGET\">select_d3</Col><Col id=\"SP\">DCBPR_PRECONTRACT_INDIRECT_UNBID_SELECT</Col></Row><Row><Col id=\"TARGET\">update_d3</Col><Col id=\"SP\">DCBPR_PRECONTRACT_INDIRECT_UNBID_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete_d3</Col><Col id=\"SP\">DCBPR_PRECONTRACT_INDIRECT_UNBID_DELETE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">request</Col><Col id=\"SP\">DCBPR_PRECONTRACT_APPROVE_REQUEST</Col></Row><Row><Col id=\"TARGET\">request_cancel</Col><Col id=\"SP\">DCBPR_PRECONTRACT_APPROVE_REQUEST_CANCEL</Col></Row><Row><Col id=\"SP\">DCBPR_ESTIMATION_FINISH</Col><Col id=\"TARGET\">finish</Col></Row><Row><Col id=\"SP\">DCCPR_CONTRACT_CANCEL</Col><Col id=\"TARGET\">finish_cancel</Col></Row><Row><Col id=\"TARGET\">calc</Col><Col id=\"SP\">DCBPR_INDIRECT_PRECONTRACT_CALCULATE</Col></Row><Row><Col id=\"TARGET\">appr_select</Col><Col id=\"SP\">DZRPR_AP_STATE_SELECT</Col></Row><Row><Col id=\"TARGET\">aplines</Col><Col id=\"SP\">DZRPR_APPLINES_SELECT</Col></Row><Row><Col id=\"TARGET\">execAppr</Col><Col id=\"SP\">DZZPR_APPROVAL_CALLBACK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"YN_LINK\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_BID\"/><Col id=\"YN_LINK\"/><Col id=\"ID_AP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_E_CONT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">과세</Col><Col id=\"DS_CODE\">과세</Col></Row><Row><Col id=\"CD_CODE\">면세</Col><Col id=\"DS_CODE\">면세</Col></Row><Row><Col id=\"CD_CODE\">공존</Col><Col id=\"DS_CODE\">공존</Col></Row></Rows>");
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
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("AfterCDTextChanged").set("ccfCD_SITE_AfterCDTextChanged");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_BID","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_BID","staNO_BID:0.0","10.0","200","24.0",null,null,null,"300",null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFPRECONTRACT");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("FitToContents").set("true");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataApprLeft","0","0","700","79",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_background("");
            obj.set_border("1px solid #c9c6c3");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staApprNm","0","4",null,null,"0","0",null,null,null,null,this.divData.form.divDataApprLeft.form);
            obj.set_taborder("0");
            obj.set_text("하도급승인원 품의서");
            obj.set_textDecoration("none");
            obj.set_background("");
            obj.set_font("normal 20pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.divData.form.divDataApprLeft.addChild(obj.name, obj);

            obj = new Div("divDataAppr","divDataApprLeft:10","0",null,"80","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridAppr","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataAppr.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataAppr.addChild(obj.name, obj);

            obj = new Div("divData01","0","divDataAppr:10",null,"180","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_PR","0","0","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staNO_BID","0","staNO_PR:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","staNO_BID:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","staCD_SITE:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("낙찰회사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staCD_LICCOST","0","staCD_VENDOR:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("하도공종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_FROM_TO","0","staCD_LICCOST:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("공사기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg1","staNO_PR:-1","0","300","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg2","staNO_BID:-1","staBg1:-1","300","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg3","staCD_SITE:-1","staBg2:-1","300","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg4","staCD_VENDOR:-1","staBg3:-1","300","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg5","staCD_LICCOST:-1","staBg4:-1","300","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg6","staDT_FROM_TO:-1","staBg5:-1","300","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtNO_PR","staNO_PR:5","5","100","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtDS_PR","edtNO_PR:5","5","185","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtNO_BID","staNO_BID:5","edtNO_PR:9","100","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtDS_SUBCON","edtNO_BID:5","edtDS_PR:9","185","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staCD_SITE:5","edtNO_BID:9","100","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","edtCD_SITE:5","edtNO_BID:9","185","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtCD_VENDOR","staCD_VENDOR:5","edtCD_SITE:9","100","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR","edtCD_VENDOR:5","edtCD_SITE:9","185","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtCD_LICCOST","staCD_LICCOST:5","edtCD_VENDOR:9","100","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtDS_LICCOST","edtCD_LICCOST:5","edtCD_VENDOR:9","185","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM_TO:5","edtCD_LICCOST:9","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_FROM:5","edtCD_LICCOST:9","10","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("~");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta_range:5","edtCD_LICCOST:9","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staAM_TT_DOKUB","staBg1:-1","0","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("도급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staAM_TT_SILHENG","staBg2:-1","staAM_TT_DOKUB:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("예산금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staAM_TT_APPROVE","staBg3:-1","staAM_TT_SILHENG:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("승인금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_HQAPPR","staBg4:-1","staAM_TT_APPROVE:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("승인일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staNO_CONT","staBg5:-1","staDT_HQAPPR:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("P/O NO");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staRT_TAXFREE","staBg6:-1","staNO_CONT:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("면세율/과세율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg7","staAM_TT_DOKUB:-1","0","300","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg8","staAM_TT_SILHENG:-1","staBg7:-1","300","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg9","staAM_TT_APPROVE:-1","staBg8:-1","300","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg10","staDT_HQAPPR:-1","staBg9:-1","300","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg11","staNO_CONT:-1","staBg10:-1","300","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg12","staRT_TAXFREE:-1","staBg11:-1","300","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TT_DOKUB","staAM_TT_DOKUB:5","5","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("#,0");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TT_SILHENG","staAM_TT_SILHENG:5","edtAM_TT_DOKUB:9","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("#,0");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TT_APPROVE","staAM_TT_APPROVE:5","edtAM_TT_SILHENG:9","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("#,0");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtRT_TT_APPROVE","edtAM_TT_APPROVE:5","edtAM_TT_SILHENG:9","60","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("0.00");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staPERCENT01","edtRT_TT_APPROVE:5","edtAM_TT_SILHENG:9","20","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("%");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_HQAPPR","staDT_HQAPPR:5","edtAM_TT_APPROVE:9","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtNO_CONT","staNO_CONT:5","ctclDT_HQAPPR:9","150","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("ccboYN_E_CONT","edtNO_CONT:5","ctclDT_HQAPPR:9","130","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_E_CONT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtRT_TAXFREE","staRT_TAXFREE:5","ccboYN_E_CONT:9","100","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("0.00");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staPERCENT","edtRT_TAXFREE:5","ccboYN_E_CONT:9","20","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("%");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtRT_TAX","staPERCENT:30","edtNO_CONT:9","100","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("0.00");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staPERCENT02","edtRT_TAX:5","edtNO_CONT:9","20","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("%");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staAM_CONT","staBg7:-1","0","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("계약금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staAM_CONTPRO","staBg8:-1","staAM_TT_DOKUB:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staAM_CONTVAT","staBg9:-1","staAM_TT_SILHENG:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staAM_DIRECT","staBg10:-1","staAM_TT_APPROVE:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("직접비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staAM_INDIRECT","staBg11:-1","staDT_HQAPPR:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("간접비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTY_TAX","staBg12:-1","staNO_CONT:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("과세구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg13","staAM_CONT:-1","0","210","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg14","staAM_CONTPRO:-1","staBg13:-1","210","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg15","staAM_CONTVAT:-1","staBg14:-1","210","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg16","staAM_DIRECT:-1","staBg15:-1","210","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg17","staAM_INDIRECT:-1","staBg16:-1","210","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBg18","staTY_TAX:-1","staBg17:-1","210","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_CONT","staAM_CONT:5","5","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("#,0");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_CONTPRO","staAM_CONTPRO:5","edtAM_CONT:9","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("#,0");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_CONTVAT","staAM_CONTVAT:5","edtAM_CONTPRO:9","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("#,0");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_DIRECT","staAM_DIRECT:5","edtAM_CONTVAT:9","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("#,0");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_INDIRECT","staAM_INDIRECT:5","edtAM_DIRECT:9","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("#,0");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Radio("crdoTY_TAX","staTY_TAX:5","edtAM_INDIRECT:9","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_TAX");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("divData02","0","divData01:5",null,"160","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("0");
            obj.set_text("낙찰회사 입찰내역 집계표");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Grid("objGrid01","0","staTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("divData03","0","divData02:5",null,"120","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("0");
            obj.set_text("※인건비 변경적용");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Grid("objGrid02","0","staTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","17","25","5",null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_visible("false");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","17","25","btnDelete:5",null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_visible("false");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Button("btnInsert",null,"0","17","25","btnSave:5",null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("3");
            obj.set_text("입력");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_visible("false");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Div("divData04","0","divData03:5",null,"220","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("0");
            obj.set_text("간접비 계상분");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("staMsg","300","0","300","30",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("1");
            obj.set_text("※ 퇴직공제부금 제외");
            obj.set_color("blue");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Grid("objGrid03","0","staTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Button("btnCalculate",null,"0","17","25","5",null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("3");
            obj.set_text("재계산");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","17","25","btnCalculate:5",null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","17","25","btnDelete:5",null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_BID.form.CDTextBox","value","dsSearch","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divData01.form.edtNO_BID","value","dsList","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divData01.form.edtDS_SUBCON","value","dsList","DS_SUBCON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divData01.form.edtNO_PR","value","dsList","NO_PR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divData01.form.edtDS_PR","value","dsList","DS_PR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divData01.form.edtCD_SITE","value","dsList","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divData01.form.edtDS_SITE","value","dsList","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData01.form.edtCD_VENDOR","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divData01.form.edtDS_VENDOR","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divData01.form.edtCD_LICCOST","value","dsList","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divData01.form.edtDS_LICCOST","value","dsList","DS_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divData01.form.ctclDT_FROM","value","dsList","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divData01.form.ctclDT_TO","value","dsList","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData01.form.edtRT_TAXFREE","value","dsList","RT_TAXFREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divData01.form.edtAM_TT_DOKUB","value","dsList","AM_TT_DOKUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divData01.form.edtAM_TT_SILHENG","value","dsList","AM_TT_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divData01.form.edtAM_TT_APPROVE","value","dsList","AM_TT_APPROVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divData01.form.ctclDT_HQAPPR","value","dsList","DT_HQAPPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divData01.form.edtNO_CONT","value","dsList","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divData01.form.ccboYN_E_CONT","value","dsList","YN_E_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divData01.form.edtRT_TAX","value","dsList","RT_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divData01.form.edtAM_CONT","value","dsList","AM_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divData01.form.edtAM_CONTPRO","value","dsList","AM_CONTPRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divData01.form.edtAM_CONTVAT","value","dsList","AM_CONTVAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divData01.form.edtAM_DIRECT","value","dsList","AM_DIRECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divData01.form.edtAM_INDIRECT","value","dsList","AM_INDIRECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divData01.form.crdoTY_TAX","value","dsList","TY_TAX");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_PRECONTRACT_APPROVAL.xfdl", function() {
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

        	this.fnDivDataBtnSetEnable(false);

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().PARAM01) && !this.gfnIsNull(this.getOwnerFrame().PARAM02)) {

        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().PARAM01);
        		this.divSearch.form.ccfCD_SITE.form.fnCodeFindLoad();
        		this.dsSearch.setColumn(0, "NO_BID", this.getOwnerFrame().PARAM02);
        		this.divSearch.form.ccfNO_BID.form.fnCodeFindLoad();
        		this.dsSearch.setColumn(0, "YN_LINK", this.getOwnerFrame().YN_LINK);	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다
        		this.dsSearch.setColumn(0, "ID_AP", this.getOwnerFrame().ID_AP);		// 전자결재문서번호

        		this.ccfCD_SITE.form.fnFitToContents();
        		this.ccfNO_BID.form.fnFitToContents();

        		// 결재상태값 조회 후 그리드 조회한다
        		this.fnApprSel();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnEstimation = this.gfnFormButtonAdd("btnEstimation", "fnEstimation");
        	this.btnAttach = this.gfnFormButtonAdd("btnAttach", "fnAttach");
        	this.btnAprvCmpl = this.gfnFormButtonAdd("btnAprvCmpl", "fnAprvCmpl");
        	this.btnAprvCnc = this.gfnFormButtonAdd("btnAprvCnc", "fnAprvCnc");
        	this.btnAprvInf = this.gfnFormButtonAdd("btnAprvInf", "fnAprvInf");
        	this.btnAprvSang = this.gfnFormButtonAdd("btnAprvSang", "fnAprvSang");
        	this.btnApCnl = this.gfnFormButtonAdd("btnApCnl", "fnApCnl");
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_BID = this.divSearch.form.ccfNO_BID;

        	this.btnInsert_02 = this.divData.form.divData03.form.btnInsert;
        	this.btnDelete_02 = this.divData.form.divData03.form.btnDelete;
        	this.btnSave_02 = this.divData.form.divData03.form.btnSave;

        	this.btnCalculate_03 = this.divData.form.divData04.form.btnCalculate;
        	this.btnDelete_03 = this.divData.form.divData04.form.btnDelete;
        	this.btnSave_03 = this.divData.form.divData04.form.btnSave;

        	this.dxGrid = this.divData.form.divData02.form.objGrid01;
        	this.dxGrid2 = this.divData.form.divData03.form.objGrid02;
        	this.dxGrid3 = this.divData.form.divData04.form.objGrid03;

        	// 결재관련
        	this.dxGridAppr = this.divData.form.divDataAppr.form.objGridAppr;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList1, "DC", "DCB_PRECONTRACT_BID_APP");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DC", "DCB_PRECONTRACT_LABOR_APP");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DC", "DCB_PRECONTRACT_UNBID_APP");

        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_BID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 결재관련
        	this.gfnGridInit(this.dxGridAppr, this.dsListAplines, "DZ", "DZR_APLINES_01");
        	this.dxGridAppr.set_extendsizetype("none");
        	this.dxGridAppr.set_scrollbartype("none default");	// 가로 스크롤이 생기지 않게 셋팅
        	var colDS_NOTE = this.dxGridAppr.getBindCellIndex("body", "DS_NOTE");
        	this.dxGridAppr.setCellProperty("body", colDS_NOTE, "tooltiptext", "expr:DS_NOTE==''?'':DS_NOTE" );	// 의견컬럼 툴팁추가
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_CONT", "string");

        	this.dsDetail = new Dataset();
        	this.dsDetail.addColumn("NO_CONT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("NO_BID", "string");
        	this.dsUpdate.addColumn("YN_E_CONT", "string");
        	this.dsUpdate.addColumn("TY_TAX", "string");
        	this.dsUpdate.addColumn("RT_TAX", "bigdecimal");
        	this.dsUpdate.addColumn("RT_TAXFREE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_CONTVAT", "bigdecimal");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("NO_BID", "string");

        	this.dsInsert_d2 = new Dataset();
        	this.dsInsert_d2.addColumn("CD_SITE", "string");
        	this.dsInsert_d2.addColumn("NO_BID", "string");
        	this.dsInsert_d2.addColumn("AM_LABOR_CHG", "bigdecimal");
        	this.dsInsert_d2.addColumn("DS_REASON", "string");

        	this.dsUpdate_d2 = new Dataset();
        	this.dsUpdate_d2.addColumn("CD_SITE", "string");
        	this.dsUpdate_d2.addColumn("NO_BID", "string");
        	this.dsUpdate_d2.addColumn("NO_ID", "bigdecimal");
        	this.dsUpdate_d2.addColumn("AM_LABOR_CHG", "bigdecimal");
        	this.dsUpdate_d2.addColumn("DS_REASON", "string");

        	this.dsDelete_d2 = new Dataset();
        	this.dsDelete_d2.addColumn("CD_SITE", "string");
        	this.dsDelete_d2.addColumn("NO_BID", "string");
        	this.dsDelete_d2.addColumn("NO_ID", "bigdecimal");

        	this.dsUpdate_d3 = new Dataset();
        	this.dsUpdate_d3.addColumn("CD_SITE", "string");
        	this.dsUpdate_d3.addColumn("NO_BID", "string");
        	this.dsUpdate_d3.addColumn("NO_ID", "bigdecimal");
        	this.dsUpdate_d3.addColumn("RT1_CHG", "bigdecimal");
        	this.dsUpdate_d3.addColumn("RT2_CHG", "bigdecimal");
        	this.dsUpdate_d3.addColumn("RT3_CHG", "bigdecimal");
        	this.dsUpdate_d3.addColumn("RT4_CHG", "bigdecimal");
        	this.dsUpdate_d3.addColumn("AM_INDIRECT_USER", "bigdecimal");
        	this.dsUpdate_d3.addColumn("YN_USE", "string");
        	this.dsUpdate_d3.addColumn("CHG_DS_REASON", "string");

        	this.dsDelete_d3 = new Dataset();
        	this.dsDelete_d3.addColumn("CD_SITE", "string");
        	this.dsDelete_d3.addColumn("NO_BID", "string");
        	this.dsDelete_d3.addColumn("NO_ID", "bigdecimal");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_SITE", "string");
        	this.dsCreate.addColumn("NO_BID", "string");
        	this.dsCreate.addColumn("ID_USER", "string");

        	this.dsRequest = new Dataset();
        	this.dsRequest.addColumn("CD_SITE", "string");
        	this.dsRequest.addColumn("NO_CONT", "string");
        	this.dsRequest.addColumn("ID_USER", "string");

        	this.dsRequestCancel = new Dataset();
        	this.dsRequestCancel.addColumn("CD_SITE", "string");
        	this.dsRequestCancel.addColumn("NO_CONT", "string");
        	this.dsRequestCancel.addColumn("ID_USER", "string");

        	this.dsFinish = new Dataset();
        	this.dsFinish.addColumn("CD_SITE", "string");
        	this.dsFinish.addColumn("NO_CONT", "string");

        	this.dsFinishCancel = new Dataset();
        	this.dsFinishCancel.addColumn("NO_CONT", "string");
        	this.dsFinishCancel.addColumn("SN_SEQ", "string");
        	this.dsFinishCancel.addColumn("DS_CANCELREASON", "string");

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
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnGridBeforeSelect(this.dxGrid2);
        	this.gfnGridBeforeSelect(this.dxGrid3);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_BID"));

        	this.dsDetail.clearData();
        	this.dsDetail.addRow();

        	this.dsDetail.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_BID"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select_d1=dsDetail select_d2=dsDetail select_d3=dsDetail";
        	var outData     = "dsList=select0 dsList1=select_d10 dsList2=select_d20 dsList3=select_d30";
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
        //
        // this.fnDetail1 = function() {
        // 	if (!this.fnSelectValidate()) return false;
        //
        // 	this.gfnGridBeforeSelect(this.dxGrid);
        //
        // 	this.dsDetail.clearData();
        // 	this.dsDetail.addRow();
        //
        // 	this.dsDetail.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_BID"));
        //
        // 	var strSvcId    = "select_d1";
        // 	var strSvcType  = "grid";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "select_d1=dsDetail";
        // 	var outData     = "dsList1=select_d10";
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
        // }
        // this.fnDetail2 = function() {
        // 	if (!this.fnSelectValidate()) return false;
        //
        // 	this.gfnGridBeforeSelect(this.dxGrid2);
        //
        // 	this.dsDetail.clearData();
        // 	this.dsDetail.addRow();
        //
        // 	this.dsDetail.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_BID"));
        //
        // 	var strSvcId    = "select_d2";
        // 	var strSvcType  = "grid";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "select_d2=dsDetail";
        // 	var outData     = "dsList2=select_d20";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        // }
        // this.fnDetail3 = function() {
        // 	if (!this.fnSelectValidate()) return false;
        //
        // 	this.gfnGridBeforeSelect(this.dxGrid3);
        //
        // 	this.dsDetail.clearData();
        // 	this.dsDetail.addRow();
        //
        // 	this.dsDetail.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_BID"));
        //
        // 	var strSvcId    = "select_d3";
        // 	var strSvcType  = "grid";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "select_d3=dsDetail";
        // 	var outData     = "dsList3=select_d30";
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
        // }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        	//this.gfnConfirm("삭제하시겠습니까?", "fnDel_callback");
        }
        //
        //
        // this.fnDel_callback = function(strId, val) {
        // 	if(val == true) {
        //
        // 		this.dsDelete.clearData();
        // 		var nrow = this.dsDelete.addRow();
        // 		this.dsDelete.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 		this.dsDelete.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        //
        // 		if (this.dsDelete.rowcount == 0) return;
        //
        // 		var strSvcId    = "delete";
        // 		var strSvcType  = "save";
        // 		var inProc		= "_dsProc";
        // 		var inData      = "delete=dsDelete";
        // 		var outData     = "";
        // 		var strArg      = "";
        // 		var callBackFnc = "fnCallback";
        //
        // 		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 							strSvcType , 	// transaction을 요청할 구분
        // 							inProc,			// Procedure 정보 Dataset 이름
        // 							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 							callBackFnc); // 통신방법 정의 [생략가능]
        // 	}
        // }
        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();

        	this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        	this.dsUpdate.setColumn(nrow, "NO_BID", this.dsList.getColumn(0, "NO_BID"));
        	this.dsUpdate.setColumn(nrow, "YN_E_CONT", this.dsList.getColumn(0, "YN_E_CONT"));
        	this.dsUpdate.setColumn(nrow, "TY_TAX", this.dsList.getColumn(0, "TY_TAX"));
        	this.dsUpdate.setColumn(nrow, "RT_TAX", this.dsList.getColumn(0, "RT_TAX"));
        	this.dsUpdate.setColumn(nrow, "RT_TAXFREE", this.dsList.getColumn(0, "RT_TAXFREE"));
        	this.dsUpdate.setColumn(nrow, "AM_CONTVAT", this.dsList.getColumn(0, "AM_CONTVAT"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        this.fnDetail2Save = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid2)) return;

        	this.dxGrid2.updateToDataset();

        	this.dsInsert_d2.clearData();
        	this.dsUpdate_d2.clearData();
        	this.dsDelete_d2.clearData();

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert_d2.addRow();
        				this.dsInsert_d2.setColumn(nrow, "CD_SITE", this.dsList2.getColumn(i, "CD_SITE"));
        				this.dsInsert_d2.setColumn(nrow, "NO_BID", this.dsList2.getColumn(i, "NO_BID"));
        				this.dsInsert_d2.setColumn(nrow, "AM_LABOR_CHG", this.dsList2.getColumn(i, "AM_LABOR_CHG"));
        				this.dsInsert_d2.setColumn(nrow, "DS_REASON", this.dsList2.getColumn(i, "DS_REASON"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate_d2.addRow();
        				this.dsUpdate_d2.setColumn(nrow, "CD_SITE", this.dsList2.getColumn(i, "CD_SITE"));
        				this.dsUpdate_d2.setColumn(nrow, "NO_BID", this.dsList2.getColumn(i, "NO_BID"));
        				this.dsUpdate_d2.setColumn(nrow, "NO_ID", this.dsList2.getColumn(i, "NO_ID"));
        				this.dsUpdate_d2.setColumn(nrow, "AM_LABOR_CHG", this.dsList2.getColumn(i, "AM_LABOR_CHG"));
        				this.dsUpdate_d2.setColumn(nrow, "DS_REASON", this.dsList2.getColumn(i, "DS_REASON"));
        				break;

        			case "D":
        				var nrow = this.dsDelete_d2.addRow();
        				this.dsDelete_d2.setColumn(nrow, "CD_SITE", this.dsList2.getColumn(i, "CD_SITE"));
        				this.dsDelete_d2.setColumn(nrow, "NO_BID", this.dsList2.getColumn(i, "NO_BID"));
        				this.dsDelete_d2.setColumn(nrow, "NO_ID", this.dsList2.getColumn(i, "NO_ID"));
        				break;
        		}
        	}

        	if (this.dsInsert_d2.rowcount == 0 && this.dsUpdate_d2.rowcount == 0 && this.dsDelete_d2.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert_d2=dsInsert_d2 update_d2=dsUpdate_d2 delete_d2=dsDelete_d2";
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

        this.fnDetail3Save = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid3)) return;

        	this.dxGrid3.updateToDataset();

        	this.dsUpdate_d3.clearData();
        	this.dsDelete_d3.clearData();

        	for (var i = 0; i < this.dsList3.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList3, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate_d3.addRow();
        				this.dsUpdate_d3.setColumn(nrow, "CD_SITE", this.dsList3.getColumn(i, "CD_SITE"));
        				this.dsUpdate_d3.setColumn(nrow, "CD_SITE", this.dsList3.getColumn(i, "CD_SITE"));
        				this.dsUpdate_d3.setColumn(nrow, "NO_BID", this.dsList3.getColumn(i, "NO_BID"));
        				this.dsUpdate_d3.setColumn(nrow, "NO_ID", this.dsList3.getColumn(i, "NO_ID"));
        				this.dsUpdate_d3.setColumn(nrow, "RT1_CHG", this.dsList3.getColumn(i, "RT1_CHG"));
        				this.dsUpdate_d3.setColumn(nrow, "RT2_CHG", this.dsList3.getColumn(i, "RT2_CHG"));
        				this.dsUpdate_d3.setColumn(nrow, "RT3_CHG", this.dsList3.getColumn(i, "RT3_CHG"));
        				this.dsUpdate_d3.setColumn(nrow, "RT4_CHG", this.dsList3.getColumn(i, "RT4_CHG"));
        				this.dsUpdate_d3.setColumn(nrow, "AM_INDIRECT_USER", this.dsList3.getColumn(i, "AM_INDIRECT_USER"));
        				this.dsUpdate_d3.setColumn(nrow, "YN_USE", this.dsList3.getColumn(i, "YN_USE"));
        				this.dsUpdate_d3.setColumn(nrow, "CHG_DS_REASON", this.dsList3.getColumn(i, "CHG_DS_REASON"));
        				break;

        			case "D":
        				var nrow = this.dsDelete_d3.addRow();
        				this.dsDelete_d3.setColumn(nrow, "CD_SITE", this.dsList3.getColumn(i, "CD_SITE"));
        				this.dsDelete_d3.setColumn(nrow, "NO_BID", this.dsList3.getColumn(i, "NO_BID"));
        				this.dsDelete_d3.setColumn(nrow, "NO_ID", this.dsList3.getColumn(i, "NO_ID"));
        				break;
        		}
        	}

        	if (this.dsUpdate_d3.rowcount == 0 && this.dsDelete_d3.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update_d3=dsUpdate_d3 delete_d3=dsDelete_d3";
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		//Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_BID"))) {
        		validate = false;
        		//Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfNO_BID.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("계약번호를 입력하세요.", "fnVaidateCallback");
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
        		if(this.dsList.rowcount < 1) return;

        		// 확장버튼 활성화 or 비활성화 처리
        		this.fnBtnEnable();	// 결재관련

        		this.gfnGridAfterSelect(this.dxGrid);
        		this.gfnGridAfterSelect(this.dxGrid2);
        		this.gfnGridAfterSelect(this.dxGrid3);
        // 		this.fnDetail1();
        // 		this.fnDetail2();
        // 		this.fnDetail3();

        		// 결재선 조회
        		this.fnSelectAppr();

        		var silheng = this.dsList.getColumn(0, "AM_TT_SILHENG");
        		var approve = this.dsList.getColumn(0, "AM_TT_APPROVE");
        		this.divData.form.divData01.form.edtRT_TT_APPROVE.set_value(approve / silheng * 100);

        		if(this.dsList.getColumn(0, "TY_TAX") == "공존")
        		{
        			this.divData.form.divData01.form.edtRT_TAX.set_enable(true);
        			this.divData.form.divData01.form.edtRT_TAXFREE.set_enable(true);
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "delete") {
        	if (errorCode == 0) {
        		this.fnDel_callback = function()
        		{
        			this.getParentContext().close();
        		}

        		this.gfnAlert("정상적으로 삭제처리되었습니다.", "", "", "fnDel_callback");
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        	}
        	else if(svcID == "create")
        	{
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        // 	else if(svcID == "select_d2")
        // 	{
        // 		if (errorCode == 0) {
        // 			this.btnInsert_02.set_enable(true);
        // 			this.btnDelete_02.set_enable(true);
        // 			this.btnSave_02.set_enable(true);
        // 		} else {
        // 			this.gfnAlert(errorMsg);
        // 		}
        // 	}
        // 	else if(svcID == "select_d3")
        // 	{
        // 		if (errorCode == 0) {
        // 			this.btnCalculate_03.set_enable(true);
        // 			this.btnDelete_03.set_enable(true);
        // 			this.btnSave_03.set_enable(true);
        // 		} else {
        // 			this.gfnAlert(errorMsg);
        // 		}
        // 	}
        	else if(svcID == "request")
        	{
        		if (errorCode == 0) {
        			this.fnRequest_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("승인요청이 정상처리되었습니다.", "fnRequest_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}	else if(svcID == "request_cancel")
        	{
        		if (errorCode == 0) {
        			this.fnRequestCancel_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("승인요청취소가 정상처리되었습니다.", "fnRequestCancel_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "finish")
        	{
        		if (errorCode == 0) {
        			this.fnFinish_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("계약(PO)생성이 정상처리되었습니다.", "fnFinish_callback");

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "finish_cancel")
        	{
        		if (errorCode == 0) {
        			this.fnFinishCancel_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("계약(PO)생성취소가 정상처리되었습니다.", "fnFinishCancel_callback");

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "cal")
        	{
        		if (errorCode == 0) {
        			this.fnDetail3();
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

            if (id == "ccfNO_BID") {
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
        		// 검색조건을 변경하지 않기때문에 주석처리함(실행시키면 계약번호를 지워서 조회시 걸림)
        		//this.ccfNO_BID.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         /*
         *	EPS 파라미터 공통 조회
         */
        this.fnSelectEPS = function(lv_app) {

        	this.dsEPS = new Dataset();

        	this._dsProcEPS = new Dataset();
        	this._dsProcEPS.addColumn("TARGET", "string");
        	this._dsProcEPS.addColumn("SP", "string");

        	this._dsProcEPS.addRow();
        	this._dsProcEPS.setColumn(0, "TARGET", "eps");
        	this._dsProcEPS.setColumn(0, "SP", "DZZPR_EPS_BID_SAP_MIDDLE_POPUP_SELECT");

        	this.dsSelectEPS = new Dataset();
        	this.dsSelectEPS.addColumn("NO_BID", "string");		// ERP발주(입찰)번호
        	this.dsSelectEPS.addColumn("YN_UNION", "string");	// 통합입찰여부
        	this.dsSelectEPS.addColumn("ID_USER", "string");

        	this.dsSelectEPS.addRow();

        	this.dsSelectEPS.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSelectEPS.setColumn(0, "YN_UNION", "N");
        	this.dsSelectEPS.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "eps";
        	var strSvcType  = "select";
        	var inProc		= "_dsProcEPS";
        	var inData      = "eps=dsSelectEPS";
        	var outData     = "dsEPS=eps0";
        	var strArg      = "P_APP=" + lv_app;
        	var callBackFnc = "fnCallbackEPS";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        this.fnCallbackEPS = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (errorCode!=0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	var url = "";
        	if (svcID == "eps") {
        		url = "/buyer/bid/pop/bid_sap_middle_pop.do";
        	}
        	else if (svcID == "eps2") {
        		url = "/buyer/bid/open_su_nosave.do";
        	}

        	if(this.dsEPS.rowcount > 0) {
        		var arr_param = [];

        		arr_param.push(strArg);
        		for(var c = 0; c < this.dsEPS.colinfos.length; c++) {
        			var colid = this.dsEPS.colinfos[c].name;
        			var val = this.dsEPS.getColumn(0, colid);
        			if(val==null) val="";
        			arr_param.push(colid + "=" + val);
        		}

        		this.gfnOpenEPS(url, arr_param.join('&'));
        	}
        };


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.dsList.clearData();
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);
        		this.gfnGridClear(this.dxGrid3);
        		this.fnDivDataBtnSetEnable(false);

        		if(e.columnid == "CD_SITE")
        		{
        			//this.dsSearch.setColumn(0, "NO_BID", "");
        			//this.divSearch.form.ccfNO_BID.form.DSTextBox.set_value("");
        		}
        	}
        };

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "13");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsYN_E_CONT=combo0";
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

        // 낙찰사입찰내역
        this.fnEstimation = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_BID = this.dsList.getColumn(0, "NO_BID");
        	param.DS_SUBCON = this.dsList.getColumn(0, "DS_SUBCON");
        	param.NO_PR = this.dsList.getColumn(0, "NO_PR");
        	param.DS_PR = this.dsList.getColumn(0, "DS_PR");

        	this.gfnFormOpen("DCB", "DCB_ESTIMATIONVENDORSAV_RFQ", "", param);
        }

        //낙찰사첨부파일
        this.fnAttach = function(obj,e) {
           if (!this.fnSelectValidate()) return false;

           this.fnSelectEPS("BA");
        }


        //승인요청
        this.fnGWReq = function(obj, e) {
            this.gfnConfirm("승인요청을 하시겠습니까?", "fnGWReq_Callback");
        }

        this.fnGWReq_Callback = function(strId, val) {
        		if (val == false) {
        			return false;
        		}
                this.dsRequest.clearData();
                this.dsRequest.addRow();

        		this.dsRequest.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsRequest.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_BID"));
        		this.dsRequest.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

                var strSvcId = "request";
                var strSvcType = "save";
                var inProc = "_dsProc";
        		var inData  = "request=dsRequest";
                var outData = "";
                var strArg = "";
                var callBackFnc = "fnCallback";

                this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                    strSvcType, // transaction을 요청할 구분
                    inProc, // Procedure 정보 Dataset 이름
                    inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                    outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                    strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                    callBackFnc); // 통신방법 정의 [생략가능]

        }

        //승인요청취소
        this.fnGWReqCancel = function(obj, e) {
            this.gfnConfirm("승인요청을 취소하시겠습니까?", "fnGWReqCancel_Callback");
        }

        this.fnGWReqCancel_Callback = function(strId, val) {
        		if (val == false) {
        			return false;
        		}
                this.dsRequestCancel.clearData();
                this.dsRequestCancel.addRow();

        		this.dsRequestCancel.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsRequestCancel.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_BID"));
        		this.dsRequestCancel.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

                var strSvcId = "request_cancel";
                var strSvcType = "save";
                var inProc = "_dsProc";
        		var inData  = "request_cancel=dsRequestCancel";
                var outData = "";
                var strArg = "";
                var callBackFnc = "fnCallback";

                this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                    strSvcType, // transaction을 요청할 구분
                    inProc, // Procedure 정보 Dataset 이름
                    inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                    outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                    strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                    callBackFnc); // 통신방법 정의 [생략가능]

        }


        //계약(PO)생성
        this.fnFinish = function(obj, e) {
            this.gfnConfirm("계약(PO)생성을 진행하시겠습니까?", "fnFinish_Callback");
        }

        this.fnFinish_Callback = function(strId, val) {
        		if (val == false) {
        			return false;
        		}
                this.dsFinish.clearData();
                this.dsFinish.addRow();

        		this.dsFinish.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsFinish.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_BID"));

                var strSvcId = "finish";
                var strSvcType = "save";
                var inProc = "_dsProc";
        		var inData  = "finish=dsFinish";
                var outData = "";
                var strArg = "";
                var callBackFnc = "fnCallback";

                this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                    strSvcType, // transaction을 요청할 구분
                    inProc, // Procedure 정보 Dataset 이름
                    inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                    outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                    strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                    callBackFnc); // 통신방법 정의 [생략가능]

        }

        //계약(PO)생성 취소
        this.fnFinishCancel = function(obj, e) {
            this.gfnConfirm("계약(PO)생성을 취소하시겠습니까?", "fnFinishCancel_Callback");
        }

        this.fnFinishCancel_Callback = function(strId, val) {
        	if (val == false) {
        		return false;
        	}
        	this.dsFinishCancel.clearData();
        	this.dsFinishCancel.addRow();

        	this.dsFinishCancel.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsFinishCancel.setColumn(0, "SN_SEQ", "001");
        	this.dsFinishCancel.setColumn(0, "DS_CANCELREASON", "");

        	var strSvcId = "finish_cancel";
        	var strSvcType = "save";
        	var inProc = "_dsProc";
        	var inData  = "finish_cancel=dsFinishCancel";
        	var outData = "";
        	var strArg = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
        		strSvcType, // transaction을 요청할 구분
        		inProc, // Procedure 정보 Dataset 이름
        		inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
        		callBackFnc); // 통신방법 정의 [생략가능]

        }


        this.fnContract = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.NO_CONT = this.dsList.getColumn(0, "NO_CONT");
        	param.SN_SEQ = "001";

        	this.gfnFormOpen("DCC", "DCC_CONTRACT", "", param, 950, 750);
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(this.dsList.rowcount < 1) return;

        	if(e.oldvalue != e.newvalue)
        	{
        		this.gfnSetFormStatus(this, "U");

        		if(e.columnid == "TY_TAX")
        		{
        			switch(e.newvalue)
        			{
        				case "과세" :
        					this.dsList.setColumn(0, "RT_TAX", 100);
        					//this.dsList.setColumn(0, "RT_TAXFREE", 0);
        					this.divData.form.divData01.form.edtRT_TAX.set_enable(false);
        					this.divData.form.divData01.form.edtRT_TAXFREE.set_enable(false);
        					break;
        				case "면세" :
        					this.dsList.setColumn(0, "RT_TAX", 0);
        					//this.dsList.setColumn(0, "RT_TAXFREE", 100);
        					this.divData.form.divData01.form.edtRT_TAX.set_enable(false);
        					this.divData.form.divData01.form.edtRT_TAXFREE.set_enable(false);
        					break;
        				case "공존" :
        					this.divData.form.divData01.form.edtRT_TAX.set_enable(true);
        					this.divData.form.divData01.form.edtRT_TAXFREE.set_enable(true);
        					break;
        			}
        		}
        		else if(e.columnid == "RT_TAX")
        		{
        			if(e.newvalue > 100)
        			{
        				this.gfnAlert("100 이하의 숫자로 입력해주십시오.");
        				this.dsList.setColumn(0, "RT_TAX", e.oldvalue);
        				return;
        			}
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(0, "RT_TAXFREE", 100 - e.newvalue);
        			this.dsList.setColumn(0, "AM_CONTVAT", this.dsList.getColumn(0, "AM_CONTPRO") * e.newvalue / 1000);
        			this.dsList.set_enableevent(true);
        		}
        		else if(e.columnid == "RT_TAXFREE")
        		{
        			if(e.newvalue > 100)
        			{
        				this.gfnAlert("100 이하의 숫자로 입력해주십시오.");
        				this.dsList.setColumn(0, "RT_TAXFREE", e.oldvalue);
        				return;
        			}

        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(0, "RT_TAX", 100 - e.newvalue);
        			this.dsList.setColumn(0, "AM_CONTVAT", this.dsList.getColumn(0, "AM_CONTPRO") * (100 - e.newvalue) / 1000);
        			this.dsList.set_enableevent(true);
        		}
        	}
        };

        // 인건비 변경적용 그리드의 입력 버튼.
        this.divData_divData03_btnInsert_onclick = function(obj,e)
        {
        	var nrow = this.gfnGridAdd(this.dxGrid2);
        	this.dsList2.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsList2.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        };

        // 인건비 변경적용 그리드의 저장 버튼.
        this.divData_divData03_btnSave_onclick = function(obj,e)
        {
        	this.fnDetail2Save();
        };

        // 인건비 변경적용 그리드의 삭제 버튼.
        this.divData_divData03_btnDelete_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGrid2);
        };

        // 간접비 계상분의 저장 버튼.
        this.divData_divData04_btnSave_onclick = function(obj,e)
        {
        	this.fnDetail3Save();
        };

        // 간접비 계상분의 삭제 버튼.
        this.divData_divData04_btnDelete_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGrid3);
        };

        // 간접비 계상분의 재계산 버튼.
        this.divData_divData04_btnCalculate_onclick = function(obj,e)
        {
        	this.dsCal = new Dataset();
        	this.dsCal.addColumn("NO_BID", "string");

        	var nrow = this.dsCal.addRow();
        	this.dsCal.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));

        	var strSvcId = "cal";
        	var strSvcType = "save";
        	var inProc = "_dsProc";
        	var inData  = "calc=dsCal";
        	var outData = "";
        	var strArg = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
        						strSvcType, // transaction을 요청할 구분
        						inProc, // Procedure 정보 Dataset 이름
        						inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, // 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnDivDataBtnSetEnable = function(value)
        {
        	this.btnInsert_02.set_enable(value);
        	this.btnDelete_02.set_enable(value);
        	this.btnSave_02.set_enable(value);

        	this.btnCalculate_03.set_enable(value);
        	this.btnDelete_03.set_enable(value);
        	this.btnSave_03.set_enable(value);
        }


        //*** 아래는 결재관련 소스 ***//

         // 승인 버튼 클릭 이벤트
         this.fnAprvCmpl = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_BID");
        	param.V_PARAM03 = "";
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
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_BID");
        	param.V_PARAM03 = "";
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
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_BID");
        	param.V_PARAM03 = "";
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
        	//var nRow = this.dsList.rowposition;

        	param.ID_AP_TYPE = "DC01";
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_BID");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.DS_TITLE =  "하도급승인원";

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
        	this.dsExecAppr.setColumn(0, "V_PARAM02", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsExecAppr.setColumn(0, "V_PARAM03", "");
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
            this.divData.form.divData03.form.btnDelete.addEventHandler("onclick",this.divData_divData03_btnDelete_onclick,this);
            this.divData.form.divData03.form.btnSave.addEventHandler("onclick",this.divData_divData03_btnSave_onclick,this);
            this.divData.form.divData03.form.btnInsert.addEventHandler("onclick",this.divData_divData03_btnInsert_onclick,this);
            this.divData.form.divData04.form.btnCalculate.addEventHandler("onclick",this.divData_divData04_btnCalculate_onclick,this);
            this.divData.form.divData04.form.btnDelete.addEventHandler("onclick",this.divData_divData04_btnDelete_onclick,this);
            this.divData.form.divData04.form.btnSave.addEventHandler("onclick",this.divData_divData04_btnSave_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_PRECONTRACT_APPROVAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
