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
            this.set_titletext("하도대장");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWBPR_HADODJ_KIEYAK</Col></Row><Row><Col id=\"TARGET\">firstGridSelect</Col><Col id=\"SP\">DWBPR_HADODJ_SELECT</Col></Row><Row><Col id=\"TARGET\">secondGridSelect</Col><Col id=\"SP\">DWBPR_STOCK_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKieyak", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_KIEYAK_PROV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_KIEYAK_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_KIEYAK_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GISUNG_PROV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GISUNG_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GISUNG_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GSJAN_PROV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GSJAN_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GSJAN_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAY_PROV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAY_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAY_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GSPREPAY_PROV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GSPREPAY_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GSPREPAY_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYJAN_PROV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYJAN_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYJAN_TOT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"110.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRT_PREPAY","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("공제비율(선급금)");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_PREPAY","staRT_PREPAY:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","ctxtRT_PREPAY:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("%");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRT_TAX","sta001:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("과세비율");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_TAX","staRT_TAX:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0.######0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta004","ctxtRT_TAX:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("%");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_HASUGOYONG","ctxtRT_TAX:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("고용보험승인");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_HASUGOYONG","staTY_HASUGOYONG:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_HADOCONT","0.0","ccfCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("외주계약번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_HADOCONT","staNO_HADOCONT:0.0","ccfCD_SITE:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFHADO_01");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfNO_HADOCONT:0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("업체코드");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","staCD_SITE:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFHADOVENDOR_01");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_CONTHMETHOD","ccfCD_VENDOR:0.0","staCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("계약방식");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CONTHMETHOD","staDS_CONTHMETHOD:0.0","staCD_SITE:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"180","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTopLeft","0","0","550",null,null,"0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTopLeftTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("0");
            obj.set_text("계약사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Static("staStart","0","40","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Static("staAM_KIEYAK","0","staStart:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("0");
            obj.set_text("계약");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVAL","0","staAM_KIEYAK:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("0");
            obj.set_text("기성");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM","0","staTY_APPROVAL:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("0");
            obj.set_text("잔액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Static("staPROV","staStart:-1","40","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("1");
            obj.set_text("공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Static("staVAT","staPROV:-1","40","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("2");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Static("staTOT","staVAT:-1","40","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("3");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Static("staBg1","staAM_KIEYAK:-1","staStart:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Static("staBg2","staTY_APPROVAL:-1","staBg1:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Static("staBg3","staDT_CONFIRM:-1","staBg2:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Static("staBg4","staBg1:-1","staStart:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Static("staBg5","staBg2:-1","staBg1:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Static("staBg6","staBg3:-1","staBg2:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Static("staBg7","staBg4:-1","staStart:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Static("staBg8","staBg5:-1","staBg1:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Static("staBg9","staBg6:-1","staBg2:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_KIEYAK_PROV","staAM_KIEYAK:5","staStart:5","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_GISUNG_PROV","staAM_KIEYAK:5","ctxtAM_KIEYAK_PROV:9","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_GSJAN_PROV","staAM_KIEYAK:5","ctxtAM_GISUNG_PROV:9","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_KIEYAK_VAT","staPROV:5","staStart:5","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_GISUNG_VAT","staPROV:5","ctxtAM_KIEYAK_VAT:9","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_GSJAN_VAT","staPROV:5","ctxtAM_GISUNG_VAT:9","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_KIEYAK_TOT","staVAT:5","staStart:5","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_GISUNG_TOT","staVAT:5","ctxtAM_KIEYAK_TOT:9","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_GSJAN_TOT","staVAT:5","ctxtAM_GISUNG_TOT:9","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopLeft.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Div("divDataTopRight","divDataTopLeft:10","0","550",null,null,"0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTopRightTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("0");
            obj.set_text("선급금공제내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Static("staStart","0","40","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Static("staAM_PREPAY","0","staStart:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("0");
            obj.set_text("선급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Static("staAM_GSPREPAY","0","staAM_PREPAY:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("0");
            obj.set_text("기성");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Static("staAM_PREPAYJAN","0","staAM_GSPREPAY:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("0");
            obj.set_text("잔액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Static("staPROV","staStart:-1","40","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("1");
            obj.set_text("공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Static("staVAT","staPROV:-1","40","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("2");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Static("staTOT","staVAT:-1","40","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("3");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Static("staBg1","staAM_PREPAY:-1","staStart:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Static("staBg2","staAM_GSPREPAY:-1","staBg1:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Static("staBg3","staAM_PREPAYJAN:-1","staBg2:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Static("staBg4","staBg1:-1","staStart:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Static("staBg5","staBg2:-1","staBg1:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Static("staBg6","staBg3:-1","staBg2:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Static("staBg7","staBg4:-1","staStart:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Static("staBg8","staBg5:-1","staBg1:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Static("staBg9","staBg6:-1","staBg2:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_PREPAY_PROV","staAM_PREPAY:5","staStart:5","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_GSPREPAY_PROV","staAM_PREPAY:5","ctxtAM_PREPAY_PROV:9","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_PREPAYJAN_PROV","staAM_PREPAY:5","ctxtAM_GSPREPAY_PROV:9","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_PREPAY_VAT","staPROV:5","staStart:5","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_GSPREPAY_VAT","staPROV:5","ctxtAM_PREPAY_VAT:9","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_PREPAYJAN_VAT","staPROV:5","ctxtAM_GSPREPAY_VAT:9","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_PREPAY_TOT","staVAT:5","staStart:5","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_GSPREPAY_TOT","staVAT:5","ctxtAM_PREPAY_TOT:9","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_PREPAYJAN_TOT","staVAT:5","ctxtAM_GSPREPAY_TOT:9","140","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopRight.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            this.divData.form.divDataTop.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("기성청구현황");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid","10","10",null,null,"10","10",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("보증보험현황");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","10","10",null,null,"10","10",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_HADOCONT.form.CDTextBox","value","dsSearch","NO_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataTop.form.divDataTopLeft.form.ctxtAM_KIEYAK_PROV","value","dsKieyak","AM_KIEYAK_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataTop.form.divDataTopLeft.form.ctxtAM_KIEYAK_VAT","value","dsKieyak","AM_KIEYAK_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.divDataTopLeft.form.ctxtAM_KIEYAK_TOT","value","dsKieyak","AM_KIEYAK_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataTop.form.divDataTopLeft.form.ctxtAM_GISUNG_PROV","value","dsKieyak","AM_GISUNG_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.divDataTopLeft.form.ctxtAM_GISUNG_VAT","value","dsKieyak","AM_GISUNG_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.divDataTopLeft.form.ctxtAM_GISUNG_TOT","value","dsKieyak","AM_GISUNG_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.divDataTopLeft.form.ctxtAM_GSJAN_PROV","value","dsKieyak","AM_GSJAN_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.divDataTopLeft.form.ctxtAM_GSJAN_VAT","value","dsKieyak","AM_GSJAN_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.divDataTopLeft.form.ctxtAM_GSJAN_TOT","value","dsKieyak","AM_GSJAN_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.divDataTopRight.form.ctxtAM_PREPAY_PROV","value","dsKieyak","AM_PREPAY_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.divDataTopRight.form.ctxtAM_PREPAY_VAT","value","dsKieyak","AM_PREPAY_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataTop.form.divDataTopRight.form.ctxtAM_PREPAY_TOT","value","dsKieyak","AM_PREPAY_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataTop.form.divDataTopRight.form.ctxtAM_GSPREPAY_PROV","value","dsKieyak","AM_GSPREPAY_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataTop.form.divDataTopRight.form.ctxtAM_GSPREPAY_VAT","value","dsKieyak","AM_GSPREPAY_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataTop.form.divDataTopRight.form.ctxtAM_GSPREPAY_TOT","value","dsKieyak","AM_GSPREPAY_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataTop.form.divDataTopRight.form.ctxtAM_PREPAYJAN_PROV","value","dsKieyak","AM_PREPAYJAN_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataTop.form.divDataTopRight.form.ctxtAM_PREPAYJAN_VAT","value","dsKieyak","AM_PREPAYJAN_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataTop.form.divDataTopRight.form.ctxtAM_PREPAYJAN_TOT","value","dsKieyak","AM_PREPAYJAN_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWB_HADODJ.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.cdVenderPram = "";

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();



        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_HADOCONT))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "NO_HADOCONT", this.getOwnerFrame().NO_HADOCONT);
        		this.divSearch.form.ccfNO_HADOCONT.form.DSTextBox.set_value(this.getOwnerFrame().DS_HADOCONT);

        		if(!this.gfnIsNull(this.getOwnerFrame().CD_VENDOR)){
        			this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        			this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.set_value(this.getOwnerFrame().DS_VENDOR);
        			this.cdVenderPram = this.getOwnerFrame().CD_VENDOR;
        		}

        		this.divSearch.form.ccfNO_HADOCONT.form.fnCodeFindLoad();
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_HADOCONT = this.divSearch.form.ccfNO_HADOCONT;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;

        	this.dxGrid = this.divData.form.divDataBottom.form.tabData.tab1.form.objGrid;
        	this.dxGrid2 = this.divData.form.divDataBottom.form.tabData.tab2.form.objGrid2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "ccfCD_SITE_AfterCDTextChanged";

        	this.ccfNO_HADOCONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_HADOCONT.AfterCDTextChanged = "ccfNO_HADOCONT_AfterCDTextChanged";

        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_HADODJ");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DW", "DWB_HADODJ2");

        	// 전역변수 YN_DGR 값이 Y 가 아니면 차수 컬럼을 숨긴다
        	if(this.gfnGetConfig("DW", "YN_DGR") != "Y"){
        		var colNO_DGRT = this.dxGrid.getBindCellIndex("body", "NO_DGR");
        		this.dxGrid.setFormatColProperty(colNO_DGRT,"size",0);
        	}
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
            this.dsSelect.addColumn("CD_SITE", "string");
            this.dsSelect.addColumn("NO_HADOCONT", "string");
        	this.dsSelect.addColumn("TY_CONTH", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");

        	this.dsFirstGridSelect = new Dataset();
            this.dsFirstGridSelect.addColumn("CD_SITE", "string");
            this.dsFirstGridSelect.addColumn("NO_HADOCONT", "string");
        	this.dsFirstGridSelect.addColumn("TY_CONTH", "string");
        	this.dsFirstGridSelect.addColumn("CD_VENDOR", "string");

        	this.dsSecondGridSelect = new Dataset();
            this.dsSecondGridSelect.addColumn("CD_SITE", "string");
            this.dsSecondGridSelect.addColumn("NO_CONT", "string");
        	this.dsSecondGridSelect.addColumn("SN_SEQ", "string");
        	this.dsSecondGridSelect.addColumn("CD_VENDOR", "string");


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
            this.dsSelect.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	this.dsSelect.setColumn(0, "TY_CONTH", "S");
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsKieyak=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        	// 기성청구현황 Grid 조회
        	this.fnFirstGridSelect();

        	// 보험증권현황 Grid 조회
        	this.fnSecondGridSelect();

        	this.ccfNO_HADOCONT_AfterCDTextChanged();
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_ROLE", this.dsList.getColumn(i, "CD_ROLE"));
        				this.dsInsert.setColumn(nrow, "NM_ROLE", this.dsList.getColumn(i, "NM_ROLE"));
        				this.dsInsert.setColumn(nrow, "DS_DESC", this.dsList.getColumn(i, "DS_DESC"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "DS_MAINFORM", this.dsList.getColumn(i, "DS_MAINFORM"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ROLE", this.dsList.getColumn(i, "CD_ROLE"));
        				this.dsUpdate.setColumn(nrow, "NM_ROLE", this.dsList.getColumn(i, "NM_ROLE"));
        				this.dsUpdate.setColumn(nrow, "DS_DESC", this.dsList.getColumn(i, "DS_DESC"));
        				this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "DS_MAINFORM", this.dsList.getColumn(i, "DS_MAINFORM"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ROLE", this.dsList.getColumn(i, "CD_ROLE"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
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
         * 조회 기능 별도관리
         ************************************************************************/
        this.fnFirstGridSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsFirstGridSelect.clearData();
        	this.dsFirstGridSelect.addRow();

        	this.dsFirstGridSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
            this.dsFirstGridSelect.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	this.dsFirstGridSelect.setColumn(0, "TY_CONTH", "S");
        	this.dsFirstGridSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

        	var strSvcId    = "firstGridSelect";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "firstGridSelect=dsFirstGridSelect";
        	var outData     = "dsList=firstGridSelect0";
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
        this.fnSecondGridSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid2);

        	this.dsSecondGridSelect.clearData();
        	this.dsSecondGridSelect.addRow();

        	this.dsSecondGridSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
            this.dsSecondGridSelect.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	this.dsSecondGridSelect.setColumn(0, "SN_SEQ", "");
        	this.dsSecondGridSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

        	var strSvcId    = "secondGridSelect";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "secondGridSelect=dsSecondGridSelect";
        	var outData     = "dsList2=secondGridSelect0";
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

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}else if(this.gfnIsNull(this.dsSearch.getColumn(0,"NO_HADOCONT"))){
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.ccfNO_HADOCONT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("외주계약번호를 입력하세요.", "fnVaidateCallback");
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
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "savesub") {
        		if (errorCode == 0) {
        			this.FormBtns.SubSelect.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfNO_HADOCONT") {
        		if(!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			dsUserParam.setColumn(nrow, "YM_WORK", this.gfnGetDate().substr(0,6));
        			dsUserParam.setColumn(nrow, "TY_DIV", "CONT");
        			if(!this.gfnIsNull(this.getOwnerFrame().DS_CONTMETHOD)){
        				dsUserParam.setColumn(nrow, "DS_CONTMETHOD", this.getOwnerFrame().DS_CONTMETHOD);
        			}else{
        				dsUserParam.setColumn(nrow, "DS_CONTMETHOD", "");
        			}
        			dsUserParam.setColumn(nrow, "CD_VENDOR", this.cdVenderPram);

        			// 처음 화면 오픈되었을때만 업체코드를 사용하고 그 뒤로는 null로 쓴다.
        			this.cdVenderPram = "";
        		}
        	}else if (id == "ccfCD_VENDOR") {
        		if(!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HADOCONT"))){
        				this.gfnAlert("외주계약번호를 입력해주세요.");
        				return;
        			}

        			dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			dsUserParam.setColumn(nrow, "YM_WORK", "");
        			dsUserParam.setColumn(nrow, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        		}
        	}
        	return true;
        }

        this.ccfCD_SITE_AfterCDTextChanged = function(id, codeFindData) {

        	this.dsSearch.setColumn(0, "NO_HADOCONT", "");
        	this.divSearch.form.ccfNO_HADOCONT.form.DSTextBox.set_value("");
        	this.divSearch.form.ctxtRT_PREPAY.set_value("0.00");
        	this.divSearch.form.ctxtRT_TAX.set_value("0.0000000");
        	this.divSearch.form.ctxtDS_CONTHMETHOD.set_value("");
        	this.divSearch.form.ctxtTY_HASUGOYONG.set_value("");
        }

        this.ccfNO_HADOCONT_AfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	if(arr.length > 0)
        	{
        		this.divSearch.form.ctxtRT_PREPAY.set_value(arr[0]["RT_PREPAY"]);
        		this.divSearch.form.ctxtRT_TAX.set_value(arr[0]["RT_TAX"]);
        		this.divSearch.form.ctxtDS_CONTHMETHOD.set_value(arr[0]["NM_CONTMETHOD"]);
        		this.divSearch.form.ctxtTY_HASUGOYONG.set_value(arr[0]["YN_HASUGOYONG"]);
        	}
        	else {
        		this.divSearch.form.ctxtRT_PREPAY.set_value("0.00");
        		this.divSearch.form.ctxtRT_TAX.set_value("0.0000000");
        		this.divSearch.form.ctxtDS_CONTHMETHOD.set_value("");
        		this.divSearch.form.ctxtTY_HASUGOYONG.set_value("");

        		this.fnSearchInit();
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }

        /*
         *	서브 그리드 코드파인드
         */
        this.fnGridSub_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if (id == "DZX_CFUSERGROUP") {
        		var cd_system = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SYSTEM");
        		if(this.gfnIsNull(cd_system)) {
        			this.gfnAlert("시스템코드를 먼저 입력하세요.");
        			return false;
        		}
         		dsUserParam.setColumn(nrow, "CD_MODULE", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SYSTEM"));
         	}
        	return true;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);

        		this.dsKieyak.clearData();

        	}
        }

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);

        		this.dsKieyak.clearData();

        		if(e.columnid == "CD_SITE"){
        			this.dsSearch.setColumn(0, "NO_HADOCONT","");
        			this.divSearch.form.ccfNO_HADOCONT.form.DSTextBox.set_value("");
        			this.dsSearch.setColumn(0, "CD_VENDOR","");
        			this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.set_value("");
        		}else if(e.columnid == "NO_HADOCONT"){
        			this.dsSearch.setColumn(0, "CD_VENDOR","");
        			this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.set_value("");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divDataBottom.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWB_HADODJ.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
