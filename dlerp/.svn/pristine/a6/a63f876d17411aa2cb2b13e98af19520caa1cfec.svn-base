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
            this.set_titletext("하도급승인원");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_TAXFREE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_APPROVE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_HQAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_E_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTPRO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTVAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DIRECT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INDIRECT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REQ\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPROVE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_PRECONTRACT_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCBPR_PRECONTRACT_UPDATE</Col></Row><Row><Col id=\"TARGET\">select_d1</Col><Col id=\"SP\">DCBPR_PRECONTRACT_INDIRECT_BID_SELECT</Col></Row><Row><Col id=\"TARGET\">select_d2</Col><Col id=\"SP\">DCBPR_PRECONTRACT_LABOR_CHG_SELECT</Col></Row><Row><Col id=\"TARGET\">insert_d2</Col><Col id=\"SP\">DCBPR_PRECONTRACT_LABOR_CHG_INSERT</Col></Row><Row><Col id=\"TARGET\">delete_d2</Col><Col id=\"SP\">DCBPR_PRECONTRACT_LABOR_CHG_DELETE</Col></Row><Row><Col id=\"TARGET\">update_d2</Col><Col id=\"SP\">DCBPR_PRECONTRACT_LABOR_CHG_UPDATE</Col></Row><Row><Col id=\"TARGET\">select_d3</Col><Col id=\"SP\">DCBPR_PRECONTRACT_INDIRECT_UNBID_SELECT</Col></Row><Row><Col id=\"TARGET\">update_d3</Col><Col id=\"SP\">DCBPR_PRECONTRACT_INDIRECT_UNBID_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete_d3</Col><Col id=\"SP\">DCBPR_PRECONTRACT_INDIRECT_UNBID_DELETE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">request</Col><Col id=\"SP\">DCBPR_PRECONTRACT_APPROVE_REQUEST</Col></Row><Row><Col id=\"TARGET\">request_cancel</Col><Col id=\"SP\">DCBPR_PRECONTRACT_APPROVE_REQUEST_CANCEL</Col></Row><Row><Col id=\"SP\">DCBPR_ESTIMATION_FINISH</Col><Col id=\"TARGET\">finish</Col></Row><Row><Col id=\"SP\">DCCPR_CONTRACT_CANCEL</Col><Col id=\"TARGET\">finish_cancel</Col></Row><Row><Col id=\"TARGET\">calc</Col><Col id=\"SP\">DCBPR_INDIRECT_PRECONTRACT_CALCULATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData01","0","0",null,"180","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
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
            obj.set_enable("false");
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
            obj.set_enable("false");
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
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TT_SILHENG","staAM_TT_SILHENG:5","edtAM_TT_DOKUB:9","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("#,0");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TT_APPROVE","staAM_TT_APPROVE:5","edtAM_TT_SILHENG:9","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("#,0");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtRT_TT_APPROVE","edtAM_TT_APPROVE:5","edtAM_TT_SILHENG:9","60","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("0.00");
            obj.set_enable("false");
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
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("edtNO_CONT","staNO_CONT:5","ctclDT_HQAPPR:9","150","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("ccboYN_E_CONT","edtNO_CONT:5","ctclDT_HQAPPR:9","130","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_E_CONT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtRT_TAXFREE","staRT_TAXFREE:5","ccboYN_E_CONT:9","100","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_format("0.00");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staPERCENT","edtRT_TAXFREE:5","ccboYN_E_CONT:9","20","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("%");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtRT_TAX","staPERCENT:30","edtNO_CONT:9","100","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_format("0.00");
            obj.set_enable("false");
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
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_CONTPRO","staAM_CONTPRO:5","edtAM_CONT:9","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("#,0");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_CONTVAT","staAM_CONTVAT:5","edtAM_CONTPRO:9","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_format("#,0");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_DIRECT","staAM_DIRECT:5","edtAM_CONTVAT:9","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("#,0");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_INDIRECT","staAM_INDIRECT:5","edtAM_DIRECT:9","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("#,0");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Radio("crdoTY_TAX","staTY_TAX:5","edtAM_INDIRECT:9","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_TAX");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("divData02","0","divData01:5",null,"200","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("0");
            obj.set_text("낙찰회사 입찰내역 집계표");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_REQ","300","4","100","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("승인요청");
            obj.set_readonly("true");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_APPROVE","500","4","150","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_text("승인완료(PO생성)");
            obj.set_readonly("true");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Grid("objGrid01","0","staTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("3");
            obj._setContents("");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("divData04","0","divData02:5",null,"260","0",null,null,null,null,null,this.divData.form);
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
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","17","25","btnCalculate:5",null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","17","25","btnCalculate:5",null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Button("btnCfequip_rt",null,"0","17","25","btnSave:5",null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("3");
            obj.set_text("건설기계대여금요율");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Div("ccfCFEQUIP_RT","btnCfequip_rt:-200","4","200","20",null,null,null,"300",null,null,this.divData.form.divData04.form);
            obj.getSetter("CodeFindName").set("DCX_CFEQUIP_RT");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("FitToContents").set("true");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Div("divData03","0","divData04:5",null,"120","0",null,null,null,null,null,this.divData.form);
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
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","17","25","btnDelete:5",null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Button("btnInsert",null,"0","17","25","btnSave:5",null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("3");
            obj.set_text("입력");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            this.divData.form.divData03.addChild(obj.name, obj);
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

            obj = new BindItem("item28","divData.form.divData02.form.cchkYN_REQ","value","dsList","YN_REQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divData02.form.cchkYN_APPROVE","value","dsList","YN_APPROVE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_PRECONTRACT.xfdl", function() {
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
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_BID)) {

        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        		// 코드파인드의 명칭부분은 직접 접근해서 셋팅

        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		if(!this.gfnIsNull(this.getOwnerFrame().DS_SUBCON)) {
        			this.divSearch.form.ccfNO_BID.form.DSTextBox.set_value(this.getOwnerFrame().DS_SUBCON);
        		}

        		this.ccfCD_SITE.form.fnFitToContents();
        		this.ccfNO_BID.form.fnFitToContents();

        		this.FormBtns.Select.click();
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
        	//this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate");
        	this.btnEstimation = this.gfnFormButtonAdd("btnEstimation", "fnEstimation");
        	this.btnAttach = this.gfnFormButtonAdd("btnAttach", "fnAttach");
        	this.btnGWReq = this.gfnFormButtonAdd("btnGWReq", "fnGWReq");
        	this.btnGWReqCancel = this.gfnFormButtonAdd("btnGWReqCancel", "fnGWReqCancel");
        	this.btnFinish = this.gfnFormButtonAdd("btnFinish", "fnFinish");
        	this.btnFinishCancel = this.gfnFormButtonAdd("btnFinishCancel", "fnFinishCancel");
        	this.btnContract = this.gfnFormButtonAdd("btnContract", "fnContract");
        	this.btnAttachEtc = this.gfnFormButtonAdd("btnAttachEtc", "fnAttachEtc");
        	this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP");

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
        	this.btnCfequip_rt = this.divData.form.divData04.form.btnCfequip_rt;

        	this.ccfCFEQUIP_RT = this.divData.form.divData04.form.ccfCFEQUIP_RT;

        	this.dxGrid = this.divData.form.divData02.form.objGrid01;
        	this.dxGrid2 = this.divData.form.divData03.form.objGrid02;
        	this.dxGrid3 = this.divData.form.divData04.form.objGrid03;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList1, "DC", "DCB_PRECONTRACT_BID");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DC", "DCB_PRECONTRACT_LABOR");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DC", "DCB_PRECONTRACT_UNBID");

        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCFEQUIP_RT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_BID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	var colAM_INDIRECT_USER = this.dxGrid3.getBindCellIndex("body", "AM_INDIRECT_USER");
        	this.dxGrid3.setCellProperty("summ", colAM_INDIRECT_USER, "text", "expr:dataset.getCaseSum(\"YN_USE=='Y'\",\"AM_INDIRECT_USER\")");

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
        	this.dsUpdate.addColumn("NO_CONT", "string");
        	this.dsUpdate.addColumn("YN_E_CONT", "string");
        	this.dsUpdate.addColumn("TY_TAX", "string");
        	this.dsUpdate.addColumn("RT_TAX", "bigdecimal");
        	this.dsUpdate.addColumn("RT_TAXFREE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_CONTVAT", "bigdecimal");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("NO_CONT", "string");
        	this.dsDelete.addColumn("NO_PR", "string");

        	this.dsInsert_d2 = new Dataset();
        	this.dsInsert_d2.addColumn("CD_SITE", "string");
        	this.dsInsert_d2.addColumn("NO_CONT", "string");
        	this.dsInsert_d2.addColumn("AM_LABOR_CHG", "bigdecimal");
        	this.dsInsert_d2.addColumn("DS_REASON", "string");

        	this.dsUpdate_d2 = new Dataset();
        	this.dsUpdate_d2.addColumn("CD_SITE", "string");
        	this.dsUpdate_d2.addColumn("NO_CONT", "string");
        	this.dsUpdate_d2.addColumn("NO_ID", "bigdecimal");
        	this.dsUpdate_d2.addColumn("AM_LABOR_CHG", "bigdecimal");
        	this.dsUpdate_d2.addColumn("DS_REASON", "string");

        	this.dsDelete_d2 = new Dataset();
        	this.dsDelete_d2.addColumn("CD_SITE", "string");
        	this.dsDelete_d2.addColumn("NO_CONT", "string");
        	this.dsDelete_d2.addColumn("NO_ID", "bigdecimal");


        	this.dsUpdate_d3 = new Dataset();
        	this.dsUpdate_d3.addColumn("CD_SITE", "string");
        	this.dsUpdate_d3.addColumn("NO_CONT", "string");
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
        	this.dsDelete_d3.addColumn("NO_CONT", "string");
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
        	this.dsUpdate.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_BID"));
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
        				this.dsInsert_d2.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_BID"));
        				this.dsInsert_d2.setColumn(nrow, "AM_LABOR_CHG", this.dsList2.getColumn(i, "AM_LABOR_CHG"));
        				this.dsInsert_d2.setColumn(nrow, "DS_REASON", this.dsList2.getColumn(i, "DS_REASON"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate_d2.addRow();
        				this.dsUpdate_d2.setColumn(nrow, "CD_SITE", this.dsList2.getColumn(i, "CD_SITE"));
        				this.dsUpdate_d2.setColumn(nrow, "NO_CONT", this.dsList2.getColumn(i, "NO_CONT"));
        				this.dsUpdate_d2.setColumn(nrow, "NO_ID", this.dsList2.getColumn(i, "NO_ID"));
        				this.dsUpdate_d2.setColumn(nrow, "AM_LABOR_CHG", this.dsList2.getColumn(i, "AM_LABOR_CHG"));
        				this.dsUpdate_d2.setColumn(nrow, "DS_REASON", this.dsList2.getColumn(i, "DS_REASON"));
        				break;

        			case "D":
        				var nrow = this.dsDelete_d2.addRow();
        				this.dsDelete_d2.setColumn(nrow, "CD_SITE", this.dsList2.getColumn(i, "CD_SITE"));
        				this.dsDelete_d2.setColumn(nrow, "NO_CONT", this.dsList2.getColumn(i, "NO_CONT"));
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
        				this.dsUpdate_d3.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_BID"));
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
        				this.dsDelete_d3.setColumn(nrow, "NO_CONT", this.dsList3.getColumn(i, "NO_CONT"));
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

        		// 조회 후 확장버튼 활성화 처리
        		this.fnExBtnSetEnable(true);
        		this.fnDivDataBtnSetEnable(true);

        		this.gfnGridAfterSelect(this.dxGrid);
        		this.gfnGridAfterSelect(this.dxGrid2);
        		this.gfnGridAfterSelect(this.dxGrid3);

        // 		this.fnDetail1();
        // 		this.fnDetail2();
        // 		this.fnDetail3();

        		var silheng = this.dsList.getColumn(0, "AM_TT_SILHENG");
        		var approve = this.dsList.getColumn(0, "AM_TT_APPROVE");
        		this.divData.form.divData01.form.edtRT_TT_APPROVE.set_value(approve / silheng * 100);

        		if(this.dsList.getColumn(0, "TY_TAX") == "공존")
        		{
        			this.divData.form.divData01.form.edtRT_TAX.set_enable(true);
        			this.divData.form.divData01.form.edtRT_TAXFREE.set_enable(true);
        		}


        // 		if(this.dsList2.rowcount > 0)
        // 		{
        // 			this.btnInsert_02.set_enable(true);
        // 			this.btnDelete_02.set_enable(true);
        // 			this.btnSave_02.set_enable(true);
        // 		}
        //
        // 		if(this.dsList3.rowcount > 0)
        // 		{
        // 			this.btnCalculate_03.set_enable(true);
        // 			this.btnDelete_03.set_enable(true);
        // 			this.btnSave_03.set_enable(true);
        // 		}

        		this.fnBtnCheckAll();
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
        		// 현장코드 변경시 입찰번호 초기화
        		this.ccfNO_BID.form.fnCodeFindClear();
        	}
        	else if(id == "ccfCFEQUIP_RT")
        	{
        	  var arr = codeFindData;

        		  if(arr.length > 0)
        		  {
        			 for(var i = 0 ; i < this.dsList3.rowcount; i++)
        			 {
        				if(this.dsList3.getColumn(i, "CD_CBS") == "A0210006")
        				{
        					this.dsList3.setColumn(i, "RT1_CHG", arr[0]["RT_IND_EQUIP"]);
        				}
        			 }
        		  }
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
        			this.dsSearch.setColumn(0, "NO_BID", "");
        			this.divSearch.form.ccfNO_BID.form.DSTextBox.set_value("");
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
        //
        // //하도급승인원생성
        // this.fnCreate = function(obj: nexacro.Button, e: nexacro.ClickEventInfo) {
        //     this.gfnConfirm("하도급승인원생성을 하시겠습니까?", "fnCreate_Callback");
        // }
        //
        // this.fnCreate_Callback = function(strId, val) {
        // 		if (val == false) {
        // 			return false;
        // 		}
        //         this.dsCreate.clearData();
        //         this.dsCreate.addRow();
        //
        // 		this.dsCreate.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 		this.dsCreate.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        // 		this.dsCreate.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        //
        //         var strSvcId = "create";
        //         var strSvcType = "save";
        //         var inProc = "_dsProc";
        //         var inData = "create=dsCreate";
        //         var outData = "";
        //         var strArg = "";
        //         var callBackFnc = "fnCallback";
        //
        //         this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
        //             strSvcType, // transaction을 요청할 구분
        //             inProc, // Procedure 정보 Dataset 이름
        //             inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        //             outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        //             strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
        //             callBackFnc); // 통신방법 정의 [생략가능]
        //
        // }

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

        	var param = {};
        	param.NO_BID = this.dsList.getColumn(0, "NO_BID");
        	param.DS_SUBCON = this.dsList.getColumn(0, "DS_SUBCON");
        	param.CD_VENDOR = this.dsList.getColumn(0, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(0, "DS_VENDOR");
        	param.NO_PR = this.dsList.getColumn(0, "NO_PR");
        //	param.ADDFILE_NO = this.dsList.getColumn(this.dsList.rowposition, "ADDFILE_NO");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_ESTIMATION_DOCUMENT_LIST", "", param, 1000, 600);

          // this.fnSelectEPS("BA");
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

        this.fnAttachEtc = function(obj,e) {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_BID"))) return;

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC80";
        	fileManager.CD_DIR = [ this.dsSearch.getColumn(0, "NO_BID") ];
        	// CD_DIR 만 지정시 CD_DIR 배열 순대로 키1,키2,키3 까지 자동지정
        	// 저장되는 디렉토리와 키값이 다른경우 CD_REF 추가로 사용
        	//fileManager.CD_REF = [ "A1" ];
        	// 권한 및 상태에 따라 업로드,삭제 가능여부 지정 (기본: true)

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(this.dsList.rowcount < 1) return;

        	if(e.oldvalue != e.newvalue)
        	{
        		this.gfnSetFormStatus(this, "U");

        		// 데이터 변경시 확장버튼 비활성화 처리
        		//this.fnExBtnSetEnable(false);

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
        	this.dsCal.addColumn("NO_CONT", "string");

        	var nrow = this.dsCal.addRow();
        	this.dsCal.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_BID"));

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

        this.fnAPP = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.PARAM01 = this.dsSearch.getColumn(0,"CD_SITE");
        	param.PARAM02 = this.dsSearch.getColumn(0, "NO_BID");
        	param.ID_AP = this.dsList.getColumn(0, "NO_ELAPDOC");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_PRECONTRACT_APP", "fnAprvDialogCallback", param);
        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
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

        this.fnExBtnSetEnable = function(value)
        {
        	this.btnEstimation.set_enable(value);
        	this.btnAttach.set_enable(value);
        	this.btnGWReq.set_enable(value);
        	this.btnGWReqCancel.set_enable(value);
        	this.btnFinish.set_enable(value);
        	this.btnFinishCancel.set_enable(value);
        	this.btnContract.set_enable(value);

        }

        // 건설기계대여금요율
        this.divData_divData04_btnCfequip_rt_onclick = function(obj,e)
        {
        	this.ccfCFEQUIP_RT.form.BtnSearch_onclick();
        };
        //
        // // 그리드 데이터 변경시 확장버튼 비활성화 처리
        // this.dsList1_onvaluechanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
        // {
        // 	if(this.dsList1.rowcount < 1) return;
        //
        // 	if(e.oldvalue != e.newvalue)
        // 	{
        // 		// 데이터 변경시 확장버튼 비활성화 처리
        // 		this.fnExBtnSetEnable(false);
        // 	}
        // };
        //
        // // 그리드 데이터 변경시 확장버튼 비활성화 처리
        // this.dsList2_onvaluechanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
        // {
        // 	if(this.dsList2.rowcount < 1) return;
        //
        // 	if(e.oldvalue != e.newvalue)
        // 	{
        // 		// 데이터 변경시 확장버튼 비활성화 처리
        // 		this.fnExBtnSetEnable(false);
        // 	}
        // };
        //
        // // 그리드 데이터 변경시 확장버튼 비활성화 처리
        // this.dsList3_onvaluechanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
        // {
        // 	if(this.dsList3.rowcount < 1) return;
        //
        // 	if(e.oldvalue != e.newvalue)
        // 	{
        // 		// 데이터 변경시 확장버튼 비활성화 처리
        // 		this.fnExBtnSetEnable(false);
        // 	}
        // };
        //

        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btnEstimation, this.dsList);
        	this.gfnBtnCheck(this.btnAttach, this.dsList);
        	this.gfnBtnCheck(this.btnGWReq, this.dsList);
        	this.gfnBtnCheck(this.btnGWReqCancel, this.dsList);
        	this.gfnBtnCheck(this.btnFinish, this.dsList);
        	this.gfnBtnCheck(this.btnFinishCancel, this.dsList);
        	this.gfnBtnCheck(this.btnContract, this.dsList);
        	this.gfnBtnCheck(this.btnAttachEtc, this.dsList);
        	this.gfnBtnCheck(this.btnAPP, this.dsList);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divData04.form.btnCalculate.addEventHandler("onclick",this.divData_divData04_btnCalculate_onclick,this);
            this.divData.form.divData04.form.btnDelete.addEventHandler("onclick",this.divData_divData04_btnDelete_onclick,this);
            this.divData.form.divData04.form.btnSave.addEventHandler("onclick",this.divData_divData04_btnSave_onclick,this);
            this.divData.form.divData04.form.btnCfequip_rt.addEventHandler("onclick",this.divData_divData04_btnCfequip_rt_onclick,this);
            this.divData.form.divData03.form.btnDelete.addEventHandler("onclick",this.divData_divData03_btnDelete_onclick,this);
            this.divData.form.divData03.form.btnSave.addEventHandler("onclick",this.divData_divData03_btnSave_onclick,this);
            this.divData.form.divData03.form.btnInsert.addEventHandler("onclick",this.divData_divData03_btnInsert_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList1_onvaluechanged,this);
            this.dsList2.addEventHandler("onvaluechanged",this.dsList2_onvaluechanged,this);
            this.dsList3.addEventHandler("onvaluechanged",this.dsList3_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_PRECONTRACT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
