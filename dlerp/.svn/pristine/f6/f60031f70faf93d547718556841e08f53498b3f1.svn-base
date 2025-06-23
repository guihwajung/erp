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
                this._setFormPosition(1000,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_LOAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REPAY_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REPAY_INT_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DELAY_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_OTHERS_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_COMMISSION_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_WITHHOLDING_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MISU_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REPAY_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REPAY_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"GB_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REPAY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REPAY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CASH\" type=\"STRING\" size=\"256\"/><Column id=\"NO_NOTE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_NOTE_ISSUE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_NOTE_EXPIRED\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LOAND\" type=\"STRING\" size=\"256\"/><Column id=\"AM_REPAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REPAY_INT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DELAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_OTHERS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_COMMISSION\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_WITHHOLDING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_WITHHOLDING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_IN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOEPR_LOAN_REPAY_SELECT</Col></Row><Row><Col id=\"TARGET\">select_new</Col><Col id=\"SP\">DOEPR_NEW_LOANREPAY_RECEIVABLE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DOEPR_LOAN_REPAY_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DOEPR_LOAN_REPAY_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DOEPR_LOAN_REPAY_DELETE</Col></Row><Row><Col id=\"TARGET\">slip</Col><Col id=\"SP\">DOEPR_LOAN_REPAY_AUTOSLIP_ISSUE</Col></Row><Row><Col id=\"TARGET\">slip_cancel</Col><Col id=\"SP\">DOEPR_LOAN_REPAY_AUTOSLIP_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CONSTRUCTION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REPAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_CASH", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">현금</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">어음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CONSTRUCTION","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_CONSTRUCTION","staCD_CONSTRUCTION:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CONSTRUCTION","ctxtCD_CONSTRUCTION:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_LOAN","ctxtDS_CONSTRUCTION:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("론번호");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_LOAN","staNO_LOAN:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TY_BUSINESS","ctxtNO_LOAN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사업분야");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_TY_BUSINESS","staCD_TY_BUSINESS:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData1","0","0",null,"80","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_SJC","5","4","90","30",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("1");
            obj.set_text("대여처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Static("staBgNO_SJC","staNO_SJC:-1","4","347","30",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Static("staCD_LOAN","staBgNO_SJC:-1","4","80","30",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("3");
            obj.set_text("론번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Static("staBgCD_LOAN","staCD_LOAN:-1","4","118","30",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Static("staDT_LOAN","staBgCD_LOAN:-1","4","80","30",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("5");
            obj.set_text("대여일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Static("staBgDT_LOAN","staDT_LOAN:-1","4","245","30",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Static("staCD_TRADE","5","staNO_SJC:-1","90","30",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("7");
            obj.set_text("대여전표");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Static("staBgCD_TRADE","staCD_TRADE:-1","staNO_SJC:-1","347","30",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Static("staDS_LOAN","staBgCD_TRADE:-1","staNO_SJC:-1","80","30",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("9");
            obj.set_text("대여구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Static("staBgDS_LOAN","staDS_LOAN:-1","staNO_SJC:-1","118","30",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Static("staDS_LOAND","staBgDS_LOAN:-1","staNO_SJC:-1","80","30",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("11");
            obj.set_text("대여항목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Static("staBgDS_LOAND","staDS_LOAND:-1","staNO_SJC:-1","245","30",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SJC","staNO_SJC:5","9","100","20",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR","ctxtNO_SJC:3","9","150","20",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_VENDOR","ctxtDS_VENDOR:3","9","78","20",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("15");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_LOAN","staCD_LOAN:5","9","107","20",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("16");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_LOAN","staDT_LOAN:5","9","105","20",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_value("");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_LOAN:5","9","10","20",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("18");
            obj.set_text("~");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REPAY_CONT","sta_range:5","9","105","20",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_TRADE","staCD_TRADE:5","ctxtNO_SJC:9","334","20",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("20");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LOAN","staDS_LOAN:5","ctxtNO_SJC:9","107","20",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("21");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LOAND","staDS_LOAND:5","ctxtNO_SJC:9","233","20",null,null,null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("22");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Div("divData2","0","divData1:10",null,"110","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","5","4",null,"22","5",null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("0");
            obj.set_text("상환내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staNO_REPAY","5","staTitle:5","90","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("2");
            obj.set_text("상환차수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staBgNO_REPAY","staNO_REPAY:-1","staTitle:5","90","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staDT_REPAY","staBgNO_REPAY:-1","staTitle:5","90","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("4");
            obj.set_text("상환일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staBgDT_REPAY","staDT_REPAY:-1","staTitle:5","129","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staNO_ACCOUNT","staBgDT_REPAY:-1","staTitle:5","90","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("6");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staBgNO_ACCOUNT","staNO_ACCOUNT:-1","staTitle:5","160","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staNO_SLIP","staBgNO_ACCOUNT:-1","staTitle:5","90","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("8");
            obj.set_text("상환전표");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staBgNO_SLIP","staNO_SLIP:-1","staTitle:5","223","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staYN_CASH","5","staNO_REPAY:-1","90","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("10");
            obj.set_text("현금/어음구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staBgYN_CASH","staYN_CASH:-1","staNO_REPAY:-1","215","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staNO_NOTE","staBgYN_CASH:-1","staNO_REPAY:-1","90","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("12");
            obj.set_text("어음번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staBgNO_NOTE","staNO_NOTE:-1","staNO_REPAY:-1","129","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staDT_NOTE_ISSUE","staBgNO_NOTE:-1","staNO_REPAY:-1","90","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("14");
            obj.set_text("발행일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staBgDT_NOTE_ISSUE","staDT_NOTE_ISSUE:-1","staNO_REPAY:-1","129","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staDT_NOTE_EXPIRED","staBgDT_NOTE_ISSUE:-1","staNO_REPAY:-1","90","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("16");
            obj.set_text("만기일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staBgDT_NOTE_EXPIRED","staDT_NOTE_EXPIRED:-1","staNO_REPAY:-1","129","30",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_REPAY","staNO_REPAY:5","staTitle:10","50","20",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("19");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Static("staNO_REPAY_NEXT","ctxtNO_REPAY:1","staTitle:9","20","20",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("20");
            obj.set_text("차");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REPAY","staDT_REPAY:5","staTitle:10","105","20",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_value("");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_ACCOUNT","staNO_ACCOUNT:5","staTitle:10","149","20",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("22");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SLIP","staNO_SLIP:5","staTitle:10","212","20",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("21");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Radio("crdoYN_CASH","staYN_CASH:5","ctxtNO_REPAY:9","185","20",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_CASH");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_NOTE","staNO_NOTE:5","ctxtNO_REPAY:9","117","20",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("21");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_NOTE_ISSUE","staDT_NOTE_ISSUE:5","ctxtNO_ACCOUNT:9","117","20",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("24");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_NOTE_EXPIRED","staDT_NOTE_EXPIRED:5","ctxtNO_SLIP:9","117","20",null,null,null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("25");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.form.divData2.addChild(obj.name, obj);

            obj = new Div("divData3","0","divData2:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle1","5","4","303","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("0");
            obj.set_text("대여설정금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staTitle2","staTitle1:0","4","272","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("1");
            obj.set_text("상환누계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staTitle3","staTitle2:0","4","220","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("2");
            obj.set_text("상환미수금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staTitle4","staTitle3:0","4","160","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("3");
            obj.set_text("상환금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_LOAN","5","staTitle1:-1","90","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("4");
            obj.set_text("대여설정금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgAM_LOAN","staAM_LOAN:-1","staTitle1:-1","214","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgSpace01","5","staAM_LOAN:-1","303","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgSpace02","5","staBgSpace01:-1","303","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgSpace03","5","staBgSpace02:-1","303","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgSpace04","5","staBgSpace03:-1","303","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staHIDDEN","5","staBgSpace04:-1","90","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("10");
            obj.set_text("실입금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgHIDDEN","5","staBgSpace04:-1","303","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_REPAY_SUM","staBgSpace01:0","staTitle1:-1","90","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("12");
            obj.set_text("원금상환");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgAM_REPAY_SUM","staAM_REPAY_SUM:-1","staTitle1:-1","183","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_REPAY_INT_SUM","staBgSpace02:0","staAM_REPAY_SUM:-1","90","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("14");
            obj.set_text("이자수익");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgAM_REPAY_INT_SUM","staAM_REPAY_INT_SUM:-1","staAM_REPAY_SUM:-1","183","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_DELAY_SUM","staBgSpace03:0","staAM_REPAY_INT_SUM:-1","90","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("16");
            obj.set_text("연체료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgAM_DELAY_SUM","staAM_REPAY_SUM:-1","staAM_REPAY_INT_SUM:-1","183","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_OTHERS_SUM","staBgSpace04:0","staAM_DELAY_SUM:-1","90","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("18");
            obj.set_text("잡이익(손실)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgAM_OTHERS_SUM","staAM_REPAY_SUM:-1","staAM_DELAY_SUM:-1","183","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_COMMISSION_SUM","staBgHIDDEN:0","staAM_OTHERS_SUM:-1","90","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("20");
            obj.set_text("제수수료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgAM_COMMISSION_SUM","staAM_REPAY_SUM:-1","staAM_OTHERS_SUM:-1","183","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staAM_WITHHOLDING_SUM","staBgHIDDEN:0","staAM_COMMISSION_SUM:-1","90","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("22");
            obj.set_text("원천징수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgAM_WITHHOLDING_SUM","staAM_WITHHOLDING_SUM:-1","staAM_COMMISSION_SUM:-1","183","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgSpace05","staBgAM_REPAY_INT_SUM:0","staTitle1:-1","220","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgSpace06","staBgAM_REPAY_INT_SUM:0","staBgSpace05:-1","220","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgSpace07","staBgAM_DELAY_SUM:0","staBgSpace06:-1","220","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgSpace08","staBgAM_OTHERS_SUM:0","staBgSpace07:-1","220","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgSpace09","staBgAM_COMMISSION_SUM:0","staBgSpace08:-1","220","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgSpace10","staBgAM_WITHHOLDING_SUM:0","staBgSpace09:-1","220","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgSpace11","staBgSpace05:0","staTitle1:-1","160","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgSpace12","staBgSpace06:0","staBgSpace11:-1","160","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgSpace13","staBgSpace07:0","staBgSpace12:-1","160","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgSpace14","staBgSpace08:0","staBgSpace13:-1","160","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgSpace15","staBgSpace09:0","staBgSpace14:-1","160","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgSpace16","staBgSpace10:0","staBgSpace15:-1","160","30",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staRM_BIGO","5","staHIDDEN:-1","90","180",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("36");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staBgRM_BIGO","staRM_BIGO:-1","staHIDDEN:-1","866","180",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LOAN","staAM_LOAN:5","staTitle1:4","203","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("26");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtHIDDEN","staHIDDEN:5","staBgSpace04:4","203","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("39");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_REPAY_SUM","staAM_REPAY_SUM:5","staTitle1:4","172","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("40");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_REPAY_INT_SUM","staAM_REPAY_INT_SUM:5","ctxtAM_REPAY_SUM:9","172","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("41");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DELAY_SUM","staAM_DELAY_SUM:5","ctxtAM_REPAY_INT_SUM:9","172","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("42");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_OTHERS_SUM","staAM_OTHERS_SUM:5","ctxtAM_DELAY_SUM:9","172","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("42");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_COMMISSION_SUM","staAM_COMMISSION_SUM:5","ctxtAM_OTHERS_SUM:9","172","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("42");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_WITHHOLDING_SUM","staAM_WITHHOLDING_SUM:5","ctxtAM_COMMISSION_SUM:9","172","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("42");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_MISU_TOT","ctxtAM_REPAY_SUM:10","staTitle1:4","210","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("46");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_REPAY","staBgSpace05:5","staTitle1:4","150","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("47");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_REPAY_INT","staBgSpace06:5","ctxtAM_REPAY:9","150","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("48");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DELAY","staBgSpace07:5","ctxtAM_REPAY_INT:9","150","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("49");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_OTHERS","staBgSpace08:5","ctxtAM_DELAY:9","150","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("50");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_COMMISSION","staBgSpace09:5","ctxtAM_OTHERS:9","150","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("51");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_WITHHOLDING","staBgSpace10:5","ctxtAM_COMMISSION:9","150","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("52");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new TextArea("ctxtRM_BIGO","staRM_BIGO:5","ctxtAM_WITHHOLDING:9","855","170",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("59");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Static("staRT_WITHHOLDING",null,"staBgSpace09:4","25","20","staBgSpace16:100",null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("20");
            obj.set_text("세율");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.form.divData3.addChild(obj.name, obj);

            obj = new Edit("ctxtRT_WITHHOLDING","staRT_WITHHOLDING:5","staBgSpace09:4","90","20",null,null,null,null,null,null,this.divData.form.divData3.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divData3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_CONSTRUCTION","value","dsSearch","CD_CONSTRUCTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtNO_LOAN","value","dsSearch","NO_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divData3.form.ctxtAM_LOAN","value","dsList","AM_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divData3.form.ctxtAM_REPAY_SUM","value","dsList","AM_REPAY_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divData3.form.ctxtAM_REPAY_INT_SUM","value","dsList","AM_REPAY_INT_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData3.form.ctxtAM_DELAY_SUM","value","dsList","AM_DELAY_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divData3.form.ctxtAM_OTHERS_SUM","value","dsList","AM_OTHERS_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divData3.form.ctxtAM_COMMISSION_SUM","value","dsList","AM_COMMISSION_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divData3.form.ctxtAM_WITHHOLDING_SUM","value","dsList","AM_WITHHOLDING_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divData3.form.ctxtAM_MISU_TOT","value","dsList","AM_MISU_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divData1.form.ctxtNO_SJC","value","dsList","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData1.form.ctxtDS_VENDOR","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divData1.form.ctxtCD_LOAN","value","dsList","CD_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divData1.form.ctclDT_LOAN","value","dsList","DT_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divData1.form.ctxtCD_TRADE","value","dsList","CD_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divData1.form.ctxtDS_LOAN","value","dsList","DS_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divData2.form.ctxtNO_REPAY","value","dsList","NO_REPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divData2.form.ctclDT_REPAY","value","dsList","DT_REPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divData2.form.ctxtNO_ACCOUNT","value","dsList","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divData2.form.ctxtNO_SLIP","value","dsList","NO_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divData2.form.crdoYN_CASH","value","dsList","YN_CASH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divData2.form.ctxtNO_NOTE","value","dsList","NO_NOTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divData2.form.ctxtDT_NOTE_ISSUE","value","dsList","DT_NOTE_ISSUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divData2.form.ctxtDT_NOTE_EXPIRED","value","dsList","DT_NOTE_EXPIRED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divData1.form.ctxtDS_LOAND","value","dsList","DS_LOAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divData3.form.ctxtAM_REPAY","value","dsList","AM_REPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divData3.form.ctxtAM_REPAY_INT","value","dsList","AM_REPAY_INT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divData3.form.ctxtAM_DELAY","value","dsList","AM_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divData3.form.ctxtAM_OTHERS","value","dsList","AM_OTHERS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divData3.form.ctxtAM_COMMISSION","value","dsList","AM_COMMISSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divData3.form.ctxtAM_WITHHOLDING","value","dsList","AM_WITHHOLDING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divData3.form.ctxtRT_WITHHOLDING","value","dsList","RT_WITHHOLDING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divData3.form.ctxtRM_BIGO","value","dsList","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divData1.form.ctxtCD_VENDOR","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divData1.form.ctclDT_REPAY_CONT","value","dsList","DT_REPAY_CONT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DOE_REG_LOAN_REPAY.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this._GUBUN = "";

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

        	this.fnSetLoadParam();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSlip = this.gfnFormButtonAdd("btnSlip", "fnSlip");
        	this.btnSlipCncl = this.gfnFormButtonAdd("btnSlipCncl", "fnSlipCncl");
        	this.btnSlipDetail = this.gfnFormButtonAdd("btnSlipDetail", "fnSlipDetail");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	/*this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZZ_SAMPLE0");*/
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CONSTRUCTION", "string");
        	this.dsSelect.addColumn("NO_LOAN", "string");
        	this.dsSelect.addColumn("NO_REPAY", "string");

        	this.dsSelectNew = new Dataset();
        	this.dsSelectNew.addColumn("CD_CONSTRUCTION", "string");
        	this.dsSelectNew.addColumn("NO_LOAN", "int");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CONSTRUCTION", "string");
        	this.dsInsert.addColumn("NO_LOAN", "string");
        	this.dsInsert.addColumn("NO_REPAY", "string");
        	this.dsInsert.addColumn("DT_REPAY", "string");
        	this.dsInsert.addColumn("YN_CASH", "string");
        	this.dsInsert.addColumn("NO_ACCOUNT", "string");
        	this.dsInsert.addColumn("NO_NOTE", "string");
        	this.dsInsert.addColumn("DT_NOTE_ISSUE", "string");
        	this.dsInsert.addColumn("DT_NOTE_EXPIRED", "string");
        	this.dsInsert.addColumn("AM_REPAY", "bigdecimal");
        	this.dsInsert.addColumn("AM_REPAY_INT", "bigdecimal");
        	this.dsInsert.addColumn("AM_DELAY", "bigdecimal");
        	this.dsInsert.addColumn("AM_OTHERS", "bigdecimal");
        	this.dsInsert.addColumn("AM_COMMISSION", "bigdecimal");
        	this.dsInsert.addColumn("AM_WITHHOLDING", "bigdecimal");
        	this.dsInsert.addColumn("RT_WITHHOLDING", "bigdecimal");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("NO_INCONFIRM", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CONSTRUCTION", "string");
        	this.dsUpdate.addColumn("NO_LOAN", "string");
        	this.dsUpdate.addColumn("NO_REPAY", "string");
        	this.dsUpdate.addColumn("DT_REPAY", "string");
        	this.dsUpdate.addColumn("YN_CASH", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT", "string");
        	this.dsUpdate.addColumn("NO_NOTE", "string");
        	this.dsUpdate.addColumn("DT_NOTE_ISSUE", "string");
        	this.dsUpdate.addColumn("DT_NOTE_EXPIRED", "string");
        	this.dsUpdate.addColumn("AM_REPAY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_REPAY_INT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_DELAY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_OTHERS", "bigdecimal");
        	this.dsUpdate.addColumn("AM_COMMISSION", "bigdecimal");
        	this.dsUpdate.addColumn("AM_WITHHOLDING", "bigdecimal");
        	this.dsUpdate.addColumn("RT_WITHHOLDING", "bigdecimal");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("NO_INCONFIRM", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CONSTRUCTION", "string");
        	this.dsDelete.addColumn("NO_LOAN", "int");
        	this.dsDelete.addColumn("NO_REPAY", "string");

        	this.dsSlip = new Dataset();
        	this.dsSlip.addColumn("CD_CONSTRUCTION", "string");
        	this.dsSlip.addColumn("NO_LOAN", "int");
        	this.dsSlip.addColumn("NO_REPAY", "string");
        	this.dsSlip.addColumn("CD_DEPT_BH", "string");
        	this.dsSlip.addColumn("ID_USER", "string");

        	this.dsSlipCancel = new Dataset();
        	this.dsSlipCancel.addColumn("CD_CONSTRUCTION", "string");
        	this.dsSlipCancel.addColumn("NO_LOAN", "string");
        	this.dsSlipCancel.addColumn("NO_REPAY", "string");
        	this.dsSlipCancel.addColumn("CD_TRADE", "string");
        	this.dsSlipCancel.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
         this.fnSelect = function()
         {
        	if (!this.fnSelectValidate()) return false;

        	if(this._GUBUN == "NEW") this.fnSelectNew();
        	else this.fnSelectBasic();
         }

        this.fnSelectBasic = function() {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CONSTRUCTION", this.dsSearch.getColumn(0, "CD_CONSTRUCTION"));
        	this.dsSelect.setColumn(0, "NO_LOAN", this.dsSearch.getColumn(0, "NO_LOAN"));
        	this.dsSelect.setColumn(0, "NO_REPAY", this.dsSearch.getColumn(0, "NO_REPAY"));

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

        this.fnSelectNew = function()
        {
        	this.dsSelectNew.clearData();
        	this.dsSelectNew.addRow();

        	this.dsSelectNew.setColumn(0, "CD_CONSTRUCTION", this.dsSearch.getColumn(0, "CD_CONSTRUCTION"));
        	this.dsSelectNew.setColumn(0, "NO_LOAN", this.dsSearch.getColumn(0, "NO_LOAN"));

        	var strSvcId    = "select_new";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_new=dsSelectNew";
        	var outData     = "dsList=select_new0";
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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        	this.gfnConfirm("삭제를 진행하시겠습니까?", "fnDelete");
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if(this._GUBUN == "NEW") this.fnInsert();
        	else this.fnUpdate();
        }

        this.fnInsert = function()
        {
        	this.dsInsert.clearData();
        	var nrow = this.dsInsert.addRow();

        	this.dsInsert.setColumn(nrow, "CD_CONSTRUCTION", this.dsSearch.getColumn(0, "CD_CONSTRUCTION"));
        	this.dsInsert.setColumn(nrow, "NO_LOAN", this.dsList.getColumn(0, "CD_LOAN"));
        	this.dsInsert.setColumn(nrow, "NO_REPAY", this.dsList.getColumn(0, "NO_REPAY"));
        	this.dsInsert.setColumn(nrow, "DT_REPAY", this.dsList.getColumn(0, "DT_REPAY"));
        	this.dsInsert.setColumn(nrow, "YN_CASH", "Y");
        	this.dsInsert.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(0, "NO_ACCOUNT"));
        	this.dsInsert.setColumn(nrow, "NO_NOTE", "");
        	this.dsInsert.setColumn(nrow, "DT_NOTE_ISSUE", "");
        	this.dsInsert.setColumn(nrow, "DT_NOTE_EXPIRED", "");
        	this.dsInsert.setColumn(nrow, "AM_REPAY", this.dsList.getColumn(0, "AM_REPAY"));
        	this.dsInsert.setColumn(nrow, "AM_REPAY_INT", this.dsList.getColumn(0, "AM_REPAY_INT"));
        	this.dsInsert.setColumn(nrow, "AM_DELAY", this.dsList.getColumn(0, "AM_DELAY"));
        	this.dsInsert.setColumn(nrow, "AM_OTHERS", this.dsList.getColumn(0, "AM_OTHERS"));
        	this.dsInsert.setColumn(nrow, "AM_COMMISSION", this.dsList.getColumn(0, "AM_COMMISSION"));
        	this.dsInsert.setColumn(nrow, "AM_WITHHOLDING", this.dsList.getColumn(0, "AM_WITHHOLDING"));
        	this.dsInsert.setColumn(nrow, "RT_WITHHOLDING", this.dsList.getColumn(0, "RT_WITHHOLDING"));
        	this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(0, "RM_BIGO"));
        	this.dsInsert.setColumn(nrow, "NO_INCONFIRM", "");
        	this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	if (this.dsInsert.rowcount == 0) return;

        	var strSvcId    = "insert";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
        	var outData     = "dsTemp=insert";
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

        this.fnUpdate = function()
        {
        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();

        	this.dsUpdate.setColumn(nrow, "CD_CONSTRUCTION", this.dsSearch.getColumn(0, "CD_CONSTRUCTION"));
        	this.dsUpdate.setColumn(nrow, "NO_LOAN", this.dsList.getColumn(0, "CD_LOAN"));
        	this.dsUpdate.setColumn(nrow, "NO_REPAY", this.dsList.getColumn(0, "NO_REPAY"));
        	this.dsUpdate.setColumn(nrow, "DT_REPAY", this.dsList.getColumn(0, "DT_REPAY"));
        	this.dsUpdate.setColumn(nrow, "YN_CASH", this.dsList.getColumn(0, "YN_CASH"));
        	this.dsUpdate.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(0, "NO_ACCOUNT"));
        	this.dsUpdate.setColumn(nrow, "NO_NOTE", this.dsList.getColumn(0, "NO_NOTE"));
        	this.dsUpdate.setColumn(nrow, "DT_NOTE_ISSUE", this.dsList.getColumn(0, "DT_NOTE_ISSUE"));
        	this.dsUpdate.setColumn(nrow, "DT_NOTE_EXPIRED", this.dsList.getColumn(0, "DT_NOTE_EXPIRED"));
        	this.dsUpdate.setColumn(nrow, "AM_REPAY", this.dsList.getColumn(0, "AM_REPAY"));
        	this.dsUpdate.setColumn(nrow, "AM_REPAY_INT", this.dsList.getColumn(0, "AM_REPAY_INT"));
        	this.dsUpdate.setColumn(nrow, "AM_DELAY", this.dsList.getColumn(0, "AM_DELAY"));
        	this.dsUpdate.setColumn(nrow, "AM_OTHERS", this.dsList.getColumn(0, "AM_OTHERS"));
        	this.dsUpdate.setColumn(nrow, "AM_COMMISSION", this.dsList.getColumn(0, "AM_COMMISSION"));
        	this.dsUpdate.setColumn(nrow, "AM_WITHHOLDING", this.dsList.getColumn(0, "AM_WITHHOLDING"));
        	this.dsUpdate.setColumn(nrow, "RT_WITHHOLDING", this.dsList.getColumn(0, "RT_WITHHOLDING"));
        	this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(0, "RM_BIGO"));
        	this.dsUpdate.setColumn(nrow, "NO_INCONFIRM", this.dsList.getColumn(0, "NO_INCONFIRM"));
        	this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "update";
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

        this.fnDelete = function(strID, val)
        {
        	if(val != true) return false;

        	if(!this.gfnIsNull(this.dsList.getColumn(0, "NO_SLIP")))
        	{
        		this.gfnAlert("상환전표가 존재할 경우 삭제하실 수 없습니다.");
        		return false;
        	}

        	this.dsDelete.clearData();
        	var nrow = this.dsDelete.addRow();

        	this.dsDelete.setColumn(nrow, "CD_CONSTRUCTION", this.dsSearch.getColumn(0, "CD_CONSTRUCTION"));
        	this.dsDelete.setColumn(nrow, "NO_LOAN", this.dsList.getColumn(0, "CD_LOAN"));
        	this.dsDelete.setColumn(nrow, "NO_REPAY", this.dsList.getColumn(0, "NO_REPAY"));

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "delete";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
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
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
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
        		//this.gfnGridAfterSelect(this.dxGrid);
        		if(this.gfnIsNull(this.dsList.getColumn(0, "NO_SLIP")))
        		{
        			this.fnSetReadOnly(false);
        		}
        		else
        		{
        			this.fnSetReadOnly(true);
        		}
        	}
        	else if(svcID == "insert") {
        		if (errorCode == 0) {
        			this._GUBUN = "";
        			this.dsSearch.setColumn(0, "NO_REPAY", this.dsTemp.getColumn(0, "NO_REPAY"));
        			//this.fnSetReadOnly(true);
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "update") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "delete") {
        		if (errorCode == 0) {
        			this._GUBUN = "NEW";
        			this.dsList.clearData();
        			this.dsList.addRow();
        			this.fnSetReadOnly(false);
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "slip") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("전표발행이 정상처리되었습니다.", "fnCallback_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "slip_cancel") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("전표취소가 정상처리되었습니다.", "fnCallback_callback");
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
        		/*this.gfnGridClear(this.dxGrid);	*/
        		this.dsList.clearData();
        	}
        };

        // 전표발행 버튼 이벤트.
        this.fnSlip = function(obj,e) {
        	this.gfnConfirm("전표발행을 진행하시겠습니까?","fnSlip_callback");
        }

        this.fnSlip_callback = function(strID, val)
        {
        	if(val != true) return false;

        	this.dsSlip.clearData();
        	var nrow = this.dsSlip.addRow();

        	this.dsSlip.setColumn(nrow, "CD_CONSTRUCTION", this.dsSearch.getColumn(0, "CD_CONSTRUCTION"));
        	this.dsSlip.setColumn(nrow, "NO_LOAN", this.dsList.getColumn(0, "CD_LOAN"));
        	this.dsSlip.setColumn(nrow, "NO_REPAY", this.dsList.getColumn(0, "NO_REPAY"));
        	this.dsSlip.setColumn(nrow, "CD_DEPT_BH", this.AuthClient.CD_DEPT);
        	this.dsSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsSlip.rowcount == 0) return;

        	var strSvcId    = "slip";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "slip=dsSlip";
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

        // 전표발행취소 버튼 이벤트.
        this.fnSlipCncl = function(obj,e) {
        	this.gfnConfirm("전표발행취소를 진행하시겠습니까?","fnSlipCncl_callback");
        }

        this.fnSlipCncl_callback = function(strID, val)
        {
        	if(val != true) return false;

        	this.dsSlipCancel.clearData();
        	var nrow = this.dsSlipCancel.addRow();

        	this.dsSlipCancel.setColumn(nrow, "CD_CONSTRUCTION", this.dsSearch.getColumn(0, "CD_CONSTRUCTION"));
        	this.dsSlipCancel.setColumn(nrow, "NO_LOAN", this.dsList.getColumn(0, "CD_LOAN"));
        	this.dsSlipCancel.setColumn(nrow, "NO_REPAY", this.dsList.getColumn(0, "NO_REPAY"));
        	this.dsSlipCancel.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(0, "NO_SLIP").replace(/-/g, ''));
        	this.dsSlipCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsSlipCancel.rowcount == 0) return;

        	var strSvcId    = "slip_cancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "slip_cancel=dsSlipCancel";
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

        this.fnSlipDetail = function(obj,e) {
        	var param = {};

        	//상환전표가 날아감.
        	param.CD_TRADE = this.dsList.getColumn(0, "NO_SLIP").replace(/-/g, '');

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "", param);
        }

        this.fnSetLoadParam = function()
        {
        	if(this.gfnIsNull(this.getOwnerFrame().CD_CONSTRUCTION)) return;

        	this.dsSearch.setColumn(0, "CD_CONSTRUCTION", this.getOwnerFrame().CD_CONSTRUCTION);
        	this.divSearch.form.ctxtDS_CONSTRUCTION.set_value(this.getOwnerFrame().DS_CONSTRUCTION);
        	this.dsSearch.setColumn(0, "NO_LOAN", this.getOwnerFrame().NO_LOAN);

        	this._GUBUN = this.getOwnerFrame().GUBUN;
        	this.dsSearch.setColumn(0, "NO_REPAY", this.getOwnerFrame().NO_REPAY);

        	if(this._GUBUN == "NEW")
        	{
        		this.fnSetReadOnly(false);
        	}
        	else
        	{
        		this.fnSetReadOnly(true);
        	}

        	this.FormBtns.Select.click();
        }

        this.fnSetReadOnly = function(val)
        {
        	this.divData.form.divData2.form.ctclDT_REPAY.set_readonly(val);
        	this.divData.form.divData2.form.ctxtNO_ACCOUNT.set_readonly(val);
        	this.divData.form.divData3.form.ctxtRT_WITHHOLDING.set_readonly(val);
        	this.divData.form.divData3.form.ctxtAM_REPAY.set_readonly(val);
        	this.divData.form.divData3.form.ctxtAM_REPAY_INT.set_readonly(val);
        	this.divData.form.divData3.form.ctxtAM_DELAY.set_readonly(val);
        	this.divData.form.divData3.form.ctxtAM_OTHERS.set_readonly(val);
        	this.divData.form.divData3.form.ctxtAM_COMMISSION.set_readonly(val);
        	this.divData.form.divData3.form.ctxtAM_WITHHOLDING.set_readonly(val);
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		this.gfnSetFormStatus(this, "U");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOE_REG_LOAN_REPAY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
