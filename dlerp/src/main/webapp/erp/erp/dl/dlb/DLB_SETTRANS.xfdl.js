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
            obj._setContents("<ColumnInfo><Column id=\"DT_LEASE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LEASE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TRANSCONT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FIXEDBUNYANG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SELLING\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BALANCE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HOUSINGFUND\" type=\"STRING\" size=\"256\"/><Column id=\"TY_FUND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TRANSBUNYANG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BUNYANGGET\" type=\"STRING\" size=\"256\"/><Column id=\"AM_KASU\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHANGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLBPR_TRANSSET_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLBPR_TRANSBUNYANG_SETTING</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLBPR_TRANSBUNYANG_SETTING_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DLBPR_TRANSBUNYANG_SETTING_DELETE</Col></Row><Row><Col id=\"SP\">DLBPR_AGREEMENT_SELECT</Col><Col id=\"TARGET\">selectEtc</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"NO_DONG\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_HO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TRANSBUNYANG", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">자체분양</Col><Col id=\"DS_CODE\">자체분양</Col></Row><Row><Col id=\"CD_CODE\">외부분양</Col><Col id=\"DS_CODE\">외부분양</Col></Row><Row><Col id=\"CD_CODE\">임대사업자분양</Col><Col id=\"DS_CODE\">임대사업자분양</Col></Row><Row><Col id=\"CD_CODE\">기타</Col><Col id=\"DS_CODE\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListEtc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ACNTUNIT","0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_ACNTUNIT","ctxtDS_ACNTUNIT:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctxtCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSearchDong","staCD_CORP:0.0","10.0","279","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("4");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staCD_CORP00:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("4");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","33","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("2");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("3");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Button("btnDong","ctxtNO_HO:0.0","10.0","25",null,null,"2",null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_CF_Search");
            obj.set_tabstop("10.0");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","30",null,"250","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","0","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_CORP","staCD_CORP:-1","0","528","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_TYPE","0","staCD_CORP:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("분양계약일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_TYPE","staTY_TYPE:-1","staBgCD_CORP:-1","200","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_OPTION","staBgTY_TYPE:-1","29","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_text("분양전환구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_OPTION","staYN_OPTION:-1","29","205","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_ADDRESS","0","staTY_TYPE:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_text("확정분양가");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_ADDRESS","staDS_ADDRESS:-1","staBgTY_TYPE:-1","200","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","staBgDS_ADDRESS:-1","staYN_OPTION:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_text("수납보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_TEL","staNO_TEL:-1","58","205","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_REFTEL","0","87","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_text("약정보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_REFTEL","staNO_REFTEL:-1","87","200","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staID_SUKUM","staBgNO_REFTEL:-1","87","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_text("보증금예수금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgID_SUKUM","staID_SUKUM:-1","87","205","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_END","0","staNO_REFTEL:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_text("차액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_END","119","staBgNO_REFTEL:-1","200","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_IPJU_START_END2","staBgDT_END:-1","116","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_text("대환일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_IPJU_START_END2","staDT_IPJU_START_END2:-1","staBgID_SUKUM:-1","205","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_JUNGONG","0","staDT_END:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_text("주택기금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_JUNGONG","staYN_JUNGONG:-1","staBgDT_END:-1","528","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_LEASE_FR","125","5","94","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_HOUSINGFUND","125","150","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("21");
            obj.set_format("#,##9");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CHANGE","448","121","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","221","3","9","25",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("23");
            obj.set_text("~");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_LEASE_TO","233","5","94","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("24");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("tclDT_TRANSCONT","125","34","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_FIXEDBUNYANG","125","63","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("26");
            obj.set_format("#,##9");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SELLING","125","92","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_format("#,##9");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BALANCE","125","121","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("28");
            obj.set_format("#,##9");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BUNYANGGET","448","63","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("29");
            obj.set_format("#,##9");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_KASU","448","92","160","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("30");
            obj.set_format("#,##9");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Combo("ccboTY_TRANSBUNYANG","448","34","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("31");
            obj.set_innerdataset("dsTY_TRANSBUNYANG");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new CheckBox("chkTY_FUND","300","150","80","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("32");
            obj.set_text("융자설정");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_JUNGONG00","119","174","528","71",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_JUNGONG00","0","174","120","71",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("34");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new TextArea("ctxtDS_REMARK","125","179","517","60",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("35");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:10",null,null,"0","0",null,null,"300",null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("분양전환 약정내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","29",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staINFO","0","2",null,"20","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("면적");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item23","divData.form.divDataTop.form.ctxtAM_HOUSINGFUND","value","dsList","AM_HOUSINGFUND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divSearch.form.ctxtCD_ACNTUNIT","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.divDataTop.form.tclDT_CHANGE","value","dsList","DT_CHANGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataTop.form.ctxtDT_LEASE_FR","value","dsList","DT_LEASE_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.divSearchDong.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.divSearchDong.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.divSearchDong.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.ctxtDT_LEASE_TO","value","dsList","DT_LEASE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataTop.form.tclDT_TRANSCONT","value","dsList","DT_TRANSCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.ctxtAM_FIXEDBUNYANG","value","dsList","AM_FIXEDBUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.ctxtAM_SELLING","value","dsList","AM_SELLING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataTop.form.ctxtAM_BUNYANGGET","value","dsList","AM_BUNYANGGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.ctxtAM_KASU","value","dsList","AM_KASU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataTop.form.ccboTY_TRANSBUNYANG","value","dsList","TY_TRANSBUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.chkTY_FUND","value","dsList","TY_FUND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataTop.form.ctxtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLB_SETTRANS.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.TY_STATUS = "";
        this.sAM_Land = 0;


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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_ACNTUNIT)) {
        		this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        		this.divSearch.form.ctxtDS_ACNTUNIT.set_value(this.getOwnerFrame().DS_ACNTUNIT);
        		this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", this.getOwnerFrame().FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", this.getOwnerFrame().HO);

        		this.FormBtns.Select.click();
        	}

        };

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
        	this.btnChange = this.gfnFormButtonAdd("btnChange", "fnChange");
        	this.btnJeongSan = this.gfnFormButtonAdd("btnJeongSan", "fnJeongSan");
        	//this.btnAgree = this.gfnFormButtonAdd("btnAgree", "fnAgree");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataBottom.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsListEtc, "DL", "DLB_CONTRACT_DETAIL");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_FLOOR", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("TY_TRANSBUNYANG", "string");
        	this.dsInsert.addColumn("AM_FIXEDBUNYANG", "bigdecimal");
        	this.dsInsert.addColumn("AM_REPAY", "bigdecimal");
        	this.dsInsert.addColumn("TY_REPAY", "string");
        	this.dsInsert.addColumn("DT_REPAY", "string");
        	this.dsInsert.addColumn("TY_FUND", "string");
        	this.dsInsert.addColumn("DT_FUND", "string");
        	this.dsInsert.addColumn("AM_FUND", "bigdecimal");
        	this.dsInsert.addColumn("DS_REMARK", "string");
        	this.dsInsert.addColumn("DT_TRANSCONT", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("TY_TRANSBUNYANG", "string");
        	this.dsUpdate.addColumn("AM_FIXEDBUNYANG", "bigdecimal");
        	this.dsUpdate.addColumn("AM_REPAY", "bigdecimal");
        	this.dsUpdate.addColumn("TY_REPAY", "string");
        	this.dsUpdate.addColumn("DT_REPAY", "string");
        	this.dsUpdate.addColumn("TY_FUND", "string");
        	this.dsUpdate.addColumn("DT_FUND", "string");
        	this.dsUpdate.addColumn("AM_FUND", "bigdecimal");
        	this.dsUpdate.addColumn("DS_REMARK", "string");
        	this.dsUpdate.addColumn("DT_TRANSCONT", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_DONG", "string");
        	this.dsDelete.addColumn("NO_FLOOR", "string");
        	this.dsDelete.addColumn("NO_HO", "string");
        	this.dsDelete.addColumn("ID_UPDATE", "string");


        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));

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

        this.fnSelectEtc = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));

        	var strSvcId    = "selectEtc";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectEtc=dsSelect";
        	var outData     = "dsListEtc=selectEtc0";
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
        	//var nrow = this.gfnGridAdd(this.dxGrid);
        	if(this.dsList.rowcount < 0) return;

        	if(this.dsList.getColumn(0, "AM_FIXEDBUNYANG") > 0){
        		this.gfnAlert("확정분양가가 이미 설정되어있습니다.");
        	}else{
        		this.TY_STATUS = "I";
        		this.gfnSetFormStatus(this, "I");	// 폼상태 업데이트

        		//this.dsList.setColumn(0, "AM_BALANCE", 0);
        		this.divData.form.divDataTop.form.ctxtAM_BALANCE.set_value(0);
        		this.dsList.setColumn(0, "DT_TRANSCONT", this.gfnGetDate());
        		this.divData.form.divDataTop.form.ccboTY_TRANSBUNYANG.set_index(0);
        		//this.divData.form.divDataTop.form.ctxtAM_FIXEDBUNYANG.setFocus();
        	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        	this.gfnConfirm("분양전환 설정을 삭제하시겠습니까" + "\r\n" + "\r\n" + "대체수납내역은 삭제되지 않습니다." + "\r\n" + "\r\n" + "분양전환잔금 내역이 삭제됩니다.", "fnDel_callback");
        }

        // 삭제 버튼 클릭 후 callback
        this.fnDel_callback = function(strId, val)
        {
        	if(val == true) {
        		this.TY_STATUS = "D";
        		this.gfnSetFormStatus(this, "D");	// 폼상태 업데이트

        		this.fnSave();
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	//if (!this.gfnGridValidate(this.dxGrid)) return;

        	if(this.gfnIsNull(this.dsList.getColumn(0, "AM_FIXEDBUNYANG"))){
        		this.gfnAlert("확정분양가가 존재하지 않습니다!");
        		return;
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "TY_TRANSBUNYANG"))){
        		this.gfnAlert("분양전환구분을 선택해주십시요!");
        		return;
        	}

        	if(this.divData.form.divDataTop.form.ctxtAM_BALANCE.value > 0){
        		this.sAM_Land = this.divData.form.divDataTop.form.ctxtAM_BALANCE.value;
        	}else if(this.divData.form.divDataTop.form.ctxtAM_BALANCE.value < 0){
        		this.sAM_Land = nexacro.toNumber(this.divData.form.divDataTop.form.ctxtAM_BALANCE.value,0) * 2;
        	}

        	if(this.TY_STATUS == "I"){
        		this.gfnConfirm("차액 " + this.sAM_Land + "원에 대한 약정을 생성하시겠습니까? " + "\r\n" + "\r\n" + "차후에 융자설정을 하실려면, [취소]를 선택하십시요!" , "fnSaveVal_callback");
        	}else{
        		this.fnSaveExec();
        	}
        }


        // 저장 버튼 클릭 후 callback
        this.fnSaveVal_callback = function(strId, val)
        {
        	if(val == true) {
        		this.fnSaveExec();
        	}
        }

        /*
         *	저장 처리
         */
        this.fnSaveExec = function() {

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();


        	if(this.TY_STATUS == "I"){
        		var nrow = this.dsInsert.addRow();
        		this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        		this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        		this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        		this.dsInsert.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        		this.dsInsert.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        		this.dsInsert.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        		this.dsInsert.setColumn(nrow, "TY_TRANSBUNYANG", this.divData.form.divDataTop.form.ccboTY_TRANSBUNYANG.index);
        		this.dsInsert.setColumn(nrow, "AM_FIXEDBUNYANG", this.dsList.getColumn(0, "AM_FIXEDBUNYANG"));
        		this.dsInsert.setColumn(nrow, "AM_REPAY", this.dsList.getColumn(0, "AM_REPAY"));
        		this.dsInsert.setColumn(nrow, "TY_REPAY", "N");
        		this.dsInsert.setColumn(nrow, "DT_REPAY", this.dsList.getColumn(0, "DT_REPAY"));
        		this.dsInsert.setColumn(nrow, "TY_FUND", this.dsList.getColumn(0, "TY_FUND"));
        		this.dsInsert.setColumn(nrow, "DT_FUND", this.dsList.getColumn(0, "DT_CHANGE"));
        		this.dsInsert.setColumn(nrow, "AM_FUND", this.dsList.getColumn(0, "AM_HOUSINGFUND"));
        		this.dsInsert.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        		this.dsInsert.setColumn(nrow, "DT_TRANSCONT", this.dsList.getColumn(0, "DT_TRANSCONT"));
        		this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        	}else if(this.TY_STATUS == "U"){
        		var nrow = this.dsUpdate.addRow();
        		this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        		this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        		this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        		this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        		this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        		this.dsUpdate.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        		this.dsUpdate.setColumn(nrow, "TY_TRANSBUNYANG", this.divData.form.divDataTop.form.ccboTY_TRANSBUNYANG.index);
        		this.dsUpdate.setColumn(nrow, "AM_FIXEDBUNYANG", this.dsList.getColumn(0, "AM_FIXEDBUNYANG"));
        		this.dsUpdate.setColumn(nrow, "AM_REPAY", this.dsList.getColumn(0, "AM_REPAY"));
        		this.dsUpdate.setColumn(nrow, "TY_REPAY", "N");
        		this.dsUpdate.setColumn(nrow, "DT_REPAY", this.dsList.getColumn(0, "DT_REPAY"));
        		this.dsUpdate.setColumn(nrow, "TY_FUND", this.dsList.getColumn(0, "TY_FUND"));
        		this.dsUpdate.setColumn(nrow, "DT_FUND", this.dsList.getColumn(0, "DT_CHANGE"));
        		this.dsUpdate.setColumn(nrow, "AM_FUND", this.dsList.getColumn(0, "AM_HOUSINGFUND"));
        		this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        		this.dsUpdate.setColumn(nrow, "DT_TRANSCONT", this.dsList.getColumn(0, "DT_TRANSCONT"));
        		this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        	}else if(this.TY_STATUS == "D"){
        		var nrow = this.dsDelete.addRow();
        		this.dsDelete.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        		this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        		this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        		this.dsDelete.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        		this.dsDelete.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        		this.dsDelete.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        		this.dsDelete.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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

        	// validate 선 체크 후 기능 살린뒤 조회되도록 설정.
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_ACNTUNIT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드를 입력하세요.", "fnVaidateCallback");
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
        		if(this.dsList.rowcount > 0){
        			var infoText = this.dsList.getColumn(0,"NO_SIZE") + "면적      " + this.dsList.getColumn(0,"NO_PSIZE") + "평      " + this.dsList.getColumn(0,"TY_TYPE") + "형     " + this.dsList.getColumn(0,"TY_DISTRICT") + "군구분     별도계약 " + this.dsList.getColumn(0,"YN_OPTION") + " ";
        			this.divData.form.staINFO.set_text(infoText);

        			if(!this.gfnIsNull(this.dsList.getColumn(0,"TY_TRANSBUNYANG"))){
        				this.divData.form.divDataTop.form.ccboTY_TRANSBUNYANG.set_index(nexacro.toNumber(this.dsList.getColumn(0,"TY_TRANSBUNYANG")))
        			}

        			if(this.dsList.getColumn(0,"AM_FIXEDBUNYANG") > 0){
        				//this.dsList.setColumn(0, "AM_BALANCE", nexacro.toNumber(this.dsList.getColumn(0,"AM_FIXEDBUNYANG"), 0) - nexacro.toNumber(this.dsList.getColumn(0,"AM_SELLING"), 0));
        				this.divData.form.divDataTop.form.ctxtAM_BALANCE.set_value(nexacro.toNumber(this.dsList.getColumn(0,"AM_FIXEDBUNYANG"), 0) - nexacro.toNumber(this.dsList.getColumn(0,"AM_SELLING"), 0));
        			}
        		}else{
        			this.gfnAlert("자료가 존재하지 않습니다.");
        			return;
        		}

        		this.TY_STATUS = "";

        		this.fnSelectEtc();
        	}
        	else if (svcID == "selectEtc") {
        		if(this.dsList.getColumn(0,"AM_FIXEDBUNYANG") > 0){
        			//Update
        		}else{
        			this.gfnAlert("확정분양가를 설정하십시요!");
        			//this.dsList.setColumn(0, "AM_BALANCE", "");
        			this.divData.form.divDataTop.form.ctxtAM_BALANCE.set_value("");
        			this.dsList.setColumn(0, "DT_TRANSCONT", this.gfnGetDate());
        			this.divData.form.divDataTop.form.ccboTY_TRANSBUNYANG.set_index(0);
        			//this.divData.form.divDataTop.form.ctxtAM_FIXEDBUNYANG.setFocus();

        			this.TY_STATUS = "I";
        			this.gfnSetFormStatus(this, "I");	// 폼상태 업데이트
        		}


        		//this.gfnSetFormStatus(this, "U");	// 폼상태 업데이트

        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnSetFormStatus(this);	// 폼상태 초기화

        			// 입력버튼을 클릭하고 저장을 했을경우에는 저장후 조회하고 보증금변경 팝업창을 오픈한다
        			if(this.TY_STATUS == "I"){
        				this.fnChange();
        			}

        			//this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.dsList.clearData(); this.dsListEtc.clearData();
        		this.TY_STATUS = "";
        	}
        };


        // 보증금변경 버튼 클릭시 팝업화면 호출
         this.fnChange = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsList.rowcount < 1) { return false; }

        	var param = {};
        	param.DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
            param.HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.AM_Land = this.sAM_Land.toString();

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLB_TRANSAGREEMENT", "fnChangeCallback", param);
        }

        this.fnChangeCallback =  function(svcID, val) {
        	this.FormBtns.Select.click();
        };


        // 정산관리 버튼 클릭시 팝업화면 호출
         this.fnJeongSan = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsList.rowcount < 1) { return false; }

        	var param = {};
        	param.DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
            param.HO = this.dsSearch.getColumn(0, "NO_HO");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLB_TRANSDETAIL", "fnJeongSanCallback", param);
        }

        this.fnJeongSanCallback =  function(svcID, val) {
        	this.FormBtns.Select.click();
        };




        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if(this.TY_STATUS != "I"){
        			this.TY_STATUS = "U";
        			this.gfnSetFormStatus(this, "U");	// 폼상태 업데이트
        		}
        	}
        };




        // 동층호 검색 버튼 클릭시 팝업화면 호출
        this.divSearch_divSearchDong_btnDong_onclick = function(obj,e)
        {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG = "1";

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen("DRI", "DRI_DONGHOBATCHRECEIPT", "fnDongCallback", param);
        };

        this.fnDongCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	if (json.DONG.length > 0) {
        		this.dsSearch.setColumn(0, "NO_DONG", json.DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", json.FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", json.HO);

        		this.FormBtns.Select.click();
        	}
        };


        this.divSearch_divSearchDong_ctxtNO_DONG_onkillfocus = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_DONG"))) return;
        	this.dsSearch.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG").padLeft(4, "0"));
        };

        this.divSearch_divSearchDong_ctxtNO_FLOOR_onkillfocus = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_FLOOR"))) return;
        	this.dsSearch.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR").padLeft(2, "0"));
        };

        this.divSearch_divSearchDong_ctxtNO_HO_onkillfocus = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HO"))) return;
        	this.dsSearch.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO").padLeft(3, "0"));
        };

        this.divSearch_ctxt_onkeyup = function(obj,e)
        {
        	if (obj.value.length == obj.maxlength) {
        		switch (obj.id) {
        			case "ctxtNO_DONG":
        				this.ctxtNO_FLOOR.setFocus();
        				break;
        			case "ctxtNO_FLOOR":
        				this.ctxtNO_HO.setFocus();
        				break;
        		}
        	}
        };


        this.divData_divDataTop_ctxtAM_HOUSINGFUND_onkillfocus = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsList.getColumn(0, "AM_HOUSINGFUND"))){
        		this.dsList.setColumn(0, "AM_HOUSINGFUND", 0);
        		return;
        	}
        };

        this.divData_divDataTop_ctxtAM_FIXEDBUNYANG_onkillfocus = function(obj,e)
        {

        	if(this.gfnIsNull(this.dsList.getColumn(0, "AM_FIXEDBUNYANG"))){
        		this.dsList.setColumn(0, "AM_FIXEDBUNYANG", 0);
        	}

        	if(this.dsList.getColumn(0, "AM_FIXEDBUNYANG") > 0){
        		//this.dsList.setColumn(0, "AM_BALANCE", nexacro.toNumber(this.dsList.getColumn(0, "AM_FIXEDBUNYANG"), 0) - nexacro.toNumber(this.dsList.getColumn(0, "AM_SELLING"), 0));
        		this.divData.form.divDataTop.form.ctxtAM_BALANCE.set_value(nexacro.toNumber(this.dsList.getColumn(0, "AM_FIXEDBUNYANG"), 0) - nexacro.toNumber(this.dsList.getColumn(0, "AM_SELLING"), 0));

        		if(this.divData.form.divDataTop.form.ctxtAM_BALANCE.value > 0){
        			this.divData.form.divDataTop.form.ctxtAM_BALANCE.set_color("red");
        			this.dsList.setColumn(0, "TY_FUND", "Y");
        		}else if(this.divData.form.divDataTop.form.ctxtAM_BALANCE.value < 0){
        			this.divData.form.divDataTop.form.ctxtAM_BALANCE.set_color("blue");
        			this.dsList.setColumn(0, "AM_REPAY", Math.abs(this.divData.form.divDataTop.form.ctxtAM_BALANCE.value));

        			this.gfnAlert("약정금 " + this.dsList.getColumn(0, "AM_REPAY") + " 원이 추가되어야 합니다.");
        		}else{
        			this.divData.form.divDataTop.form.ctxtAM_BALANCE.set_color("black");
        		}


        	}else{
        		this.gfnAlert("확정분양가정보를 입력하셔야 합니다!");
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_DONG.addEventHandler("onkillfocus",this.divSearch_divSearchDong_ctxtNO_DONG_onkillfocus,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_DONG.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_FLOOR.addEventHandler("onkillfocus",this.divSearch_divSearchDong_ctxtNO_FLOOR_onkillfocus,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_FLOOR.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_HO.addEventHandler("onkillfocus",this.divSearch_divSearchDong_ctxtNO_HO_onkillfocus,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_HO.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.divSearchDong.form.btnDong.addEventHandler("onclick",this.divSearch_divSearchDong_btnDong_onclick,this);
            this.divData.form.divDataTop.form.staNO_TEL.addEventHandler("onclick",this.divData_divDataTop_staNO_TEL_onclick,this);
            this.divData.form.divDataTop.form.ctxtAM_HOUSINGFUND.addEventHandler("onkillfocus",this.divData_divDataTop_ctxtAM_HOUSINGFUND_onkillfocus,this);
            this.divData.form.divDataTop.form.ctxtAM_FIXEDBUNYANG.addEventHandler("onkillfocus",this.divData_divDataTop_ctxtAM_FIXEDBUNYANG_onkillfocus,this);
            this.divData.form.divDataBottom.form.objGrid.addEventHandler("oncelldblclick",this.divData_divDataTop_objGrid_oncelldblclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLB_SETTRANS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
