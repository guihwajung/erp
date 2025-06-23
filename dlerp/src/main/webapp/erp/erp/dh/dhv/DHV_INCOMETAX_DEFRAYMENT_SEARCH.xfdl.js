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
            obj._setContents("<ColumnInfo><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_NATION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_EARNERTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BANKACNT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REALNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TY_FINANCIALPRIZES\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FINANCIALPRIZES\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FUND\" type=\"STRING\" size=\"256\"/><Column id=\"TY_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CAPITALAMT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INTEREST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORDERTAXBASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ETC3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_INCOMETAX_DEFRAYMENT_MASTER</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DHVPR_INCOMETAX_DEFRAYMENT_DETAIL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_INCOMETYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\"/></Row><Row><Col id=\"CODE\">50</Col><Col id=\"VALUE\">이자소득</Col></Row><Row><Col id=\"CODE\">60</Col><Col id=\"VALUE\">배당소득</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPUTE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPUTE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INCOMETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_DEPT_SELFACNT\"/><Col id=\"YM_IMPUTE_FROM\"/><Col id=\"YM_IMPUTE_TO\"/><Col id=\"TY_INCOMETYPE\"/><Col id=\"CD_VENDOR\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_SELFACNT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("세무단위");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_SELFACNT","staCD_DEPT_SELFACNT:0.0","staCD_DEPT_SELFACNT:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_IMPUTE","ccfCD_DEPT_SELFACNT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("귀속년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPUTE_FROM","staYM_IMPUTE:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staWave","ctclYM_IMPUTE_FROM:0.0","ctclYM_IMPUTE_FROM:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0.0","staCD_DEPT_SELFACNT:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","staCD_VENDOR:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFVENDOR_INCOME");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPUTE_TO","staWave:0.0","staWave:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_INCOMETYPE","0.0","staCD_DEPT_SELFACNT:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("소득구분");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_INCOMETYPE","staTY_INCOMETYPE:0.0","staTY_INCOMETYPE:10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_INCOMETYPE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0","300",null,null,"10",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","32","300","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("1");
            obj.set_text("소득자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTITLE:5",null,"175","0",null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDT_PRINTDATE","0","0","110","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("2");
            obj.set_text("영수일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgDT_PRINTDATE","staDT_PRINTDATE:-1","staDT_PRINTDATE:-27","182","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PRINTDATE","staDT_PRINTDATE:5","staDT_PRINTDATE:-23","115","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","objGrid:5","300","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("4");
            obj.set_text("총 계");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staNO_TARGETUSERCNT","staTITLE00:-300","staTITLE00:5","110","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("7");
            obj.set_text("대상인원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgNO_TARGETUSERCNT","staNO_TARGETUSERCNT:-1","staNO_TARGETUSERCNT:-27","190","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staAM_PAYMENTAMT","staNO_TARGETUSERCNT:-110","staNO_TARGETUSERCNT:-1","110","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("9");
            obj.set_text("지급총액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgAM_PAYMENTAMT","staAM_PAYMENTAMT:-1","staAM_PAYMENTAMT:-27","190","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staAM_INCOMETAX","staAM_PAYMENTAMT:-110","staAM_PAYMENTAMT:-1","110","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("11");
            obj.set_text("소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgAM_INCOMETAX","staAM_INCOMETAX:-1","staAM_INCOMETAX:-27","190","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staAM_CORPTAX","staAM_INCOMETAX:-110","staAM_INCOMETAX:-1","110","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("22");
            obj.set_text("법인세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staAM_INHERBANTTAX","staAM_CORPTAX:-110","staAM_CORPTAX:-1","110","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("13");
            obj.set_text("주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgAM_INHERBANTTAX","staAM_INHERBANTTAX:-1","staAM_INHERBANTTAX:-27","190","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staAM_FARMTAX","staAM_INHERBANTTAX:-110","staAM_INHERBANTTAX:-1","110","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("25");
            obj.set_text("농특세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staAM_AMOUNTAMT","staAM_FARMTAX:-110","staAM_FARMTAX:-1","110","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("15");
            obj.set_text("차인지급액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgAM_AMOUNTAMT","staAM_AMOUNTAMT:-1","staAM_AMOUNTAMT:-27","190","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Edit("edtNO_TARGETUSERCNT","staNO_TARGETUSERCNT:5","staNO_TARGETUSERCNT:-23","110","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("sta","edtNO_TARGETUSERCNT:5","edtNO_TARGETUSERCNT:-20","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("16");
            obj.set_text("명");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("sta00","230","-20","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("17");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("sta01","230","-20","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("18");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("sta03","230","-20","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("19");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("sta05","230","-20","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("20");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgAM_CORPTAX","staAM_CORPTAX:-1","staAM_CORPTAX:-27","190","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("sta02","230","-20","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("24");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgAM_FARMTAX","staAM_FARMTAX:-1","staAM_FARMTAX:-27","190","27",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("sta04","230","-20","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("27");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_PAYMENTAMT","staAM_PAYMENTAMT:5","staAM_AMOUNTAMT:-153","110","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("28");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_INCOMETAX","staAM_INCOMETAX:5","staAM_INCOMETAX:-23","110","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("29");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_CORPTAX","staAM_CORPTAX:5","staAM_CORPTAX:-23","110","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("30");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_INHERBANTTAX","staAM_INHERBANTTAX:4","staAM_INHERBANTTAX:-24","110","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("31");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_FARMTAX","staAM_FARMTAX:5","staAM_FARMTAX:-23","110","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("32");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_AMOUNTAMT","staAM_AMOUNTAMT:5","staAM_AMOUNTAMT:-23","110","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("33");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDT_START01","edtAM_PAYMENTAMT:5","edtAM_PAYMENTAMT:-21","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("34");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDT_START02","edtAM_INCOMETAX:5","edtAM_INCOMETAX:-21","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("35");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDT_START03","edtAM_CORPTAX:5","edtAM_CORPTAX:-21","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("36");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDT_START04","edtAM_INHERBANTTAX:6","edtAM_INHERBANTTAX:-20","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("37");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDT_START05","edtAM_FARMTAX:5","edtAM_FARMTAX:-21","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("38");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staDT_START06","edtAM_AMOUNTAMT:5","edtAM_AMOUNTAMT:-19","20","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("39");
            obj.set_text("원");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divDataLeft:10","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE01","0","0","880","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("소득자정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTY_VENDOR","staTITLE01:-880","staTITLE01:5","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_text("개인법인구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staNO_ZIP_CODE","staTY_VENDOR:-110","staTY_VENDOR:25","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTITLE02","staNO_ZIP_CODE:-110","staNO_ZIP_CODE:4","880","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_text("소득지급정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","staTITLE02:-880","staTITLE02:5","900","200",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgTY_VENDOR","staTY_VENDOR:-1","staTY_VENDOR:-27","150","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staNO_JUMIN","staBgTY_VENDOR:-1","staBgTY_VENDOR:-27","140","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_text("주민(사업자)등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgNO_JUMIN","staNO_JUMIN:-1","staNO_JUMIN:-27","225","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDT_BIRTHDAY","staBgNO_JUMIN:-1","staBgNO_JUMIN:-27","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgDT_BIRTHDAY","staDT_BIRTHDAY:-1","staDT_BIRTHDAY:-27","170","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staYN_RESIDENT","staNO_JUMIN:-140","staNO_JUMIN:-1","140","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_text("거주여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgYN_RESIDENT","staYN_RESIDENT:-1","staYN_RESIDENT:-27","225","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staYN_NATION","staBgYN_RESIDENT:-1","staBgYN_RESIDENT:-27","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_text("외국인여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgYN_NATION","staYN_NATION:-1","staYN_NATION:-27","170","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgNO_ZIP_CODE","staNO_ZIP_CODE:-1","staNO_ZIP_CODE:-27","791","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTY_EARNERTYPE","staTITLE02:-880","staTITLE02:210","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_text("소득자구분코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgTY_EARNERTYPE","staTY_EARNERTYPE:-1","staTY_EARNERTYPE:-27","150","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staNO_BANKACNT","staBgTY_EARNERTYPE:-1","staBgTY_EARNERTYPE:-27","160","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("17");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgNO_BANKACNT","staNO_BANKACNT:-1","staNO_BANKACNT:-27","225","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staYN_REALNAME","staBgNO_BANKACNT:-1","staBgNO_BANKACNT:-27","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_text("실명구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgYN_REALNAME","staYN_REALNAME:-1","staYN_REALNAME:-27","150","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTY_FINANCIALPRIZES","staTY_EARNERTYPE:-110","staTY_EARNERTYPE:-1","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_text("금융상품종류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgTY_FINANCIALPRIZES","staTY_FINANCIALPRIZES:-1","staTY_FINANCIALPRIZES:-27","150","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staCD_FINANCIALPRIZES","staBgTY_FINANCIALPRIZES:-1","staBgTY_FINANCIALPRIZES:-27","160","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("22");
            obj.set_text("금융상품코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgCD_FINANCIALPRIZES","staCD_FINANCIALPRIZES:-1","staCD_FINANCIALPRIZES:-27","225","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staCD_FUND","staBgCD_FINANCIALPRIZES:-1","staBgCD_FINANCIALPRIZES:-27","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("24");
            obj.set_text("유가증권표준코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgCD_FUND","staCD_FUND:-1","staCD_FUND:-27","150","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTY_LOAN","staTY_FINANCIALPRIZES:-110","staTY_FINANCIALPRIZES:-1","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("26");
            obj.set_text("채권/이자구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgTY_LOAN","staTY_LOAN:-1","staTY_LOAN:-27","150","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staCD_TAX","staBgTY_LOAN:-1","staBgTY_LOAN:-27","160","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            obj.set_text("과세구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgCD_TAX","staCD_TAX:-1","staCD_TAX:-27","225","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_CAPITALAMT","staBgCD_TAX:-1","staBgCD_TAX:-27","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("30");
            obj.set_text("원금, 액면가액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgAM_CAPITALAMT","staAM_CAPITALAMT:-1","staAM_CAPITALAMT:-27","150","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDT_INTEREST","staTY_LOAN:-110","staTY_LOAN:-1","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("32");
            obj.set_text("이자지급대상기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgDT_INTEREST","staDT_INTEREST:-1","staDT_INTEREST:-27","150","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_ORDERTAXBASE","staBgDT_INTEREST:-1","staBgDT_INTEREST:-27","160","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("35");
            obj.set_text("새액감면 및 재한세율 근거");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgDS_ORDERTAXBASE","staDS_ORDERTAXBASE:-1","staDS_ORDERTAXBASE:-27","225","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staCD_ETC3","staBgDS_ORDERTAXBASE:-1","staBgDS_ORDERTAXBASE:-27","110","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("37");
            obj.set_text("소득의종류(코드)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgCD_ETC3","staCD_ETC3:-1","staCD_ETC3:-27","150","27",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtTY_VENDOR","staTY_VENDOR:5","staTY_VENDOR:-23","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtNO_ZIP_CODE","staNO_ZIP_CODE:5","staNO_ZIP_CODE:-23","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("40");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtDS_ADDR","edtNO_ZIP_CODE:5","edtNO_ZIP_CODE:-20","636","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtNO_JUMIN","staNO_JUMIN:5","staNO_JUMIN:-23","210","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("42");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtYN_RESIDENT","staYN_RESIDENT:5","staYN_RESIDENT:-23","210","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtDT_BIRTHDAY","staDT_BIRTHDAY:5","staDT_BIRTHDAY:-23","155","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("44");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtYN_NATION","staYN_NATION:5","staYN_NATION:-23","155","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtTY_EARNERTYPE","staTY_EARNERTYPE:5","staTY_EARNERTYPE:-23","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("46");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtTY_FINANCIALPRIZES","staTY_FINANCIALPRIZES:5","staTY_FINANCIALPRIZES:-23","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("47");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtTY_LOAN","staTY_LOAN:5","staTY_LOAN:-23","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtDT_INTEREST","staDT_INTEREST:5","staDT_INTEREST:-23","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtNO_BANKACNT","staNO_BANKACNT:5","staNO_BANKACNT:-23","210","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("50");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtCD_FINANCIALPRIZES","staCD_FINANCIALPRIZES:5","staCD_FINANCIALPRIZES:-23","210","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtCD_TAX","staCD_TAX:5","staCD_TAX:-23","210","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("52");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtDS_ORDERTAXBASE","staDS_ORDERTAXBASE:5","staDS_ORDERTAXBASE:-23","210","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("53");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtYN_REALNAME","staYN_REALNAME:5","staYN_REALNAME:-23","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("54");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtCD_FUND","staCD_FUND:5","staCD_FUND:-23","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("55");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtCD_ETC3","staCD_ETC3:5","staCD_ETC3:-23","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("56");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_CAPITALAMT","staAM_CAPITALAMT:5","staAM_CAPITALAMT:-23","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("57");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT_SELFACNT.form.CDTextBox","value","dsSearch","CD_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_IMPUTE_FROM.form.TextBox","value","dsSearch","YM_IMPUTE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_IMPUTE_TO.form.TextBox","value","dsSearch","YM_IMPUTE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboTY_INCOMETYPE","value","dsSearch","TY_INCOMETYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.edtTY_VENDOR","value","dsList","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.edtNO_ZIP_CODE","value","dsList","NO_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.edtDS_ADDR","value","dsList","DS_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.edtYN_RESIDENT","value","dsList","YN_RESIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.edtNO_JUMIN","value","dsList","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.edtYN_NATION","value","dsList","YN_NATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.edtDT_BIRTHDAY","value","dsList","DT_BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.edtTY_EARNERTYPE","value","dsListSub","TY_EARNERTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.edtTY_FINANCIALPRIZES","value","dsListSub","TY_FINANCIALPRIZES");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.edtTY_LOAN","value","dsListSub","TY_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.edtDT_INTEREST","value","dsListSub","DT_INTEREST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.edtNO_BANKACNT","value","dsListSub","NO_BANKACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataRight.form.edtCD_FINANCIALPRIZES","value","dsListSub","CD_FINANCIALPRIZES");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataRight.form.edtCD_TAX","value","dsListSub","CD_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataRight.form.edtDS_ORDERTAXBASE","value","dsListSub","DS_ORDERTAXBASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataRight.form.edtYN_REALNAME","value","dsListSub","YN_REALNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.edtCD_FUND","value","dsListSub","CD_FUND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.edtAM_CAPITALAMT","value","dsListSub","AM_CAPITALAMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.edtCD_ETC3","value","dsListSub","CD_ETC3");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_INCOMETAX_DEFRAYMENT_SEARCH.xfdl", function() {
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

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Save.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnIctDfrmt = this.gfnFormButtonAdd("btnIctDfrmt", "fnIctDfrmt");
        	this.btnReport = this.gfnFormButtonAdd("btnReport", "fnReport");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//조회
        	this.ccfCD_DEPT_SELFACNT = this.divSearch.form.ccfCD_DEPT_SELFACNT;
        	this.ctclYM_IMPUTE_FROM = this.divSearch.form.ctclYM_IMPUTE_FROM;
        	this.ctclYM_IMPUTE_TO = this.divSearch.form.ctclYM_IMPUTE_TO;
        	this.ccboTY_INCOMETYPE = this.divSearch.form.ccboTY_INCOMETYPE;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;

        	this.ctclDT_PRINTDATE = this.divData.form.divDataLeft.form.ctclDT_PRINTDATE;
        	this.edtNO_TARGETUSERCNT = this.divData.form.divDataLeft.form.edtNO_TARGETUSERCNT;
        	this.edtAM_PAYMENTAMT = this.divData.form.divDataLeft.form.edtAM_PAYMENTAMT;
        	this.edtAM_INCOMETAX = this.divData.form.divDataLeft.form.edtAM_INCOMETAX;
        	this.edtAM_CORPTAX = this.divData.form.divDataLeft.form.edtAM_CORPTAX;
        	this.edtAM_INHERBANTTAX = this.divData.form.divDataLeft.form.edtAM_INHERBANTTAX;
        	this.edtAM_FARMTAX = this.divData.form.divDataLeft.form.edtAM_FARMTAX;
        	this.edtAM_AMOUNTAMT = this.divData.form.divDataLeft.form.edtAM_AMOUNTAMT;

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;

        	this.edtTY_VENDOR = this.divData.form.divDataRight.form.edtTY_VENDOR;
        	this.edtNO_JUMIN = this.divData.form.divDataRight.form.edtNO_JUMIN;
        	this.edtDT_BIRTHDAY = this.divData.form.divDataRight.form.edtDT_BIRTHDAY;
        	this.edtYN_RESIDENT = this.divData.form.divDataRight.form.edtYN_RESIDENT;
        	this.edtYN_NATION = this.divData.form.divDataRight.form.edtYN_NATION;
        	this.edtNO_ZIP_CODE = this.divData.form.divDataRight.form.edtNO_ZIP_CODE;
        	this.edtDS_ADDR = this.divData.form.divDataRight.form.edtDS_ADDR;
        	this.edtTY_EARNERTYPE = this.divData.form.divDataRight.form.edtTY_EARNERTYPE;
        	this.edtNO_BANKACNT = this.divData.form.divDataRight.form.edtNO_BANKACNT;
        	this.edtYN_REALNAME = this.divData.form.divDataRight.form.edtYN_REALNAME;
        	this.edtTY_FINANCIALPRIZES = this.divData.form.divDataRight.form.edtTY_FINANCIALPRIZES;
        	this.edtCD_FINANCIALPRIZES = this.divData.form.divDataRight.form.edtCD_FINANCIALPRIZES;
        	this.edtCD_FUND = this.divData.form.divDataRight.form.edtCD_FUND;
        	this.edtTY_LOAN = this.divData.form.divDataRight.form.edtTY_LOAN;
        	this.edtCD_TAX = this.divData.form.divDataRight.form.edtCD_TAX;
        	this.edtAM_CAPITALAMT = this.divData.form.divDataRight.form.edtAM_CAPITALAMT;
        	this.edtDT_INTEREST = this.divData.form.divDataRight.form.edtDT_INTEREST;
        	this.edtDS_ORDERTAXBASE = this.divData.form.divDataRight.form.edtDS_ORDERTAXBASE;
        	this.edtCD_ETC3 = this.divData.form.divDataRight.form.edtCD_ETC3;

        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_DEPT_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_INCOMETAX_DEFRAYMENT_SEARCH_01");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHV_INCOMETAX_DEFRAYMENT_SEARCH_02");

        	this.ctclYM_IMPUTE_FROM.form.TextBox.set_value(this.gfnGetDate().substring(0,6));
        	this.ctclYM_IMPUTE_TO.form.TextBox.set_value(this.gfnGetDate().substring(0,6));
        	this.ctclDT_PRINTDATE.set_value(this.gfnGetDate());

        	// 세무단위 초기값 설정
        	this.dsSearch.setColumn(0, "CD_DEPT_SELFACNT", this.UserInfo.LEVCD_DEPT_SELFACNT);
        	this.divSearch.form.ccfCD_DEPT_SELFACNT.form.fnCodeFindLoad();

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("YM_IMPUTE_FROM", "string");
        	this.dsSelect.addColumn("YM_IMPUTE_TO", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("TY_INCOMETYPE", "string");

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

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));
        	this.dsSelect.setColumn(0, "YM_IMPUTE_FROM", this.dsSearch.getColumn(0, "YM_IMPUTE_FROM"));
        	this.dsSelect.setColumn(0, "YM_IMPUTE_TO", this.dsSearch.getColumn(0, "YM_IMPUTE_TO"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "TY_INCOMETYPE", this.dsSearch.getColumn(0, "TY_INCOMETYPE"));

        	//this.clearDivDataLeft();
        	//this.clearDivDataRightUp();
        	//this.clearDivDataRightDown();

        	var strSvcId = "select";
        	var strSvcType = "grid";
        	var inProc = "_dsProc";
        	var inData = "select=dsSelect";
        	var outData = "dsList=select0";
        	var strArg = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnSelectSub = function() {

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

         	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_SELFACNT"));
         	this.dsSelect.setColumn(0, "YM_IMPUTE_FROM", this.dsList.getColumn(this.dsList.rowposition, "YM_IMPUTE_FROM"));
         	this.dsSelect.setColumn(0, "YM_IMPUTE_TO", this.dsList.getColumn(this.dsList.rowposition, "YM_IMPUTE_TO"));
         	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "TY_INCOMETYPE", this.dsSearch.getColumn(0, "TY_INCOMETYPE"));

        	//this.clearDivDataLeft();
        	//this.clearDivDataRightUp();

        	var strSvcId = "detail";
        	var strSvcType = "grid";
        	var inProc = "_dsProc";
        	var inData = "d_select=dsSelect";
        	var outData = "dsListSub=d_select0";
        	var strArg = "";
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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	if(this.gfnIsNull(this.ccfCD_DEPT_SELFACNT.form.CDTextBox.value)) {
        		this.gfnAlert("세무단위를 입력하세요.");
        		this.ccfCD_DEPT_SELFACNT.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.ctclYM_IMPUTE_FROM.form.TextBox.value)) {
        		this.ctclYM_IMPUTE_FROM.setFocus();
        		this.gfnAlert("귀속년월을 입력하세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.ctclYM_IMPUTE_TO.form.TextBox.value)) {
        		this.ctclYM_IMPUTE_TO.setFocus();
        		this.gfnAlert("귀속년월을 입력하세요.");
        		return false;
        	}

        	return true;
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

        		if(this.dsList.rowcount > 0) {

        			var AM_PAYMENTAMT_SUM = 0;
        			var AM_INCOMETAX_SUM = 0;
        			var AM_CORPTAX_SUM = 0;
        			var AM_INHERBANTTAX_SUM = 0;
        			var AM_FARMTAX_SUM = 0;
        			var AM_AMOUNTAMT_SUM = 0;

        			// 그리드 총계 금액 싱글폼에 표시
        			for (var i = 0; i < this.dsList.rowcount; i++) {
        				AM_PAYMENTAMT_SUM = AM_PAYMENTAMT_SUM + this.dsList.getColumn(i, "AM_PAYMENTAMT");
        				AM_INCOMETAX_SUM = AM_INCOMETAX_SUM + this.dsList.getColumn(i, "AM_INCOMETAX");
        				AM_CORPTAX_SUM = AM_CORPTAX_SUM + this.dsList.getColumn(i, "AM_CORPTAX");
        				AM_INHERBANTTAX_SUM = AM_INHERBANTTAX_SUM + this.dsList.getColumn(i, "AM_INHERBANTTAX");
        				AM_FARMTAX_SUM = AM_FARMTAX_SUM + this.dsList.getColumn(i, "AM_FARMTAX");
        				AM_AMOUNTAMT_SUM = AM_AMOUNTAMT_SUM + this.dsList.getColumn(i, "AM_AMOUNTAMT");
        			}

        			this.edtNO_TARGETUSERCNT.set_value(this.dsList.rowcount);

        			this.edtAM_PAYMENTAMT.set_value(AM_PAYMENTAMT_SUM);
        			this.edtAM_INCOMETAX.set_value(AM_INCOMETAX_SUM);
        			this.edtAM_CORPTAX.set_value(AM_CORPTAX_SUM);
        			this.edtAM_INHERBANTTAX.set_value(AM_INHERBANTTAX_SUM);
        			this.edtAM_FARMTAX.set_value(AM_FARMTAX_SUM);
        			this.edtAM_AMOUNTAMT.set_value(AM_AMOUNTAMT_SUM);
        		}
        	}
        	else if (svcID == "detail") {
        		if (this.dsList.rowcount < 1) {
        			this.fnSetButton();
        			this.dsListSub.clearData();
        		}
        		if(this.dsListSub.rowcount > 0) {
         			this.fnSetButton();
        		}
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        // this.codefind_AfterCDTextChanged = function(id) {
        // 	this.fnSearchInit();
        // }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfSELFACNT") {
        		dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVCD_DEPT_SELFACNT);
        	}

        	if (id == "ccfVENDOR") {
        		var CD_DEPT_SELFACNT = this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT");
        		if(this.gfnIsNull(CD_DEPT_SELFACNT)){
        			this.gfnAlert("세무단위를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "YN_INCOMETARGET", "Y");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

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


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         this.dsSearch_onvaluechanged = function(obj,e) {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        		this.clearDivDataLeft();
        		this.clearDivDataRightUp();
        		this.clearDivDataRightDown();
           }
        }


        this.clearDivDataLeft = function() {
        	this.edtNO_TARGETUSERCNT.set_value("");
        	this.edtAM_PAYMENTAMT.set_value("");
        	this.edtAM_INCOMETAX.set_value("");
        	this.edtAM_CORPTAX.set_value("");
        	this.edtAM_INHERBANTTAX.set_value("");
        	this.edtAM_FARMTAX.set_value("");
        	this.edtAM_AMOUNTAMT.set_value("");
        }

        this.clearDivDataRightUp = function() {
        	this.edtTY_VENDOR.set_value("");
        	this.edtNO_JUMIN.set_value("");
        	this.edtDT_BIRTHDAY.set_value("");
        	this.edtYN_RESIDENT.set_value("");
        	this.edtYN_NATION.set_value("");
        	this.edtNO_ZIP_CODE.set_value("");
        	this.edtDS_ADDR.set_value("");
        }

        this.clearDivDataRightDown = function() {
        	this.edtTY_EARNERTYPE.set_value("");
        	this.edtNO_BANKACNT.set_value("");
        	this.edtYN_REALNAME.set_value("");
        	this.edtTY_FINANCIALPRIZES.set_value("");
        	this.edtCD_FINANCIALPRIZES.set_value("");
        	this.edtCD_FUND.set_value("");
        	this.edtTY_LOAN.set_value("");
        	this.edtCD_TAX.set_value("");
        	this.edtAM_CAPITALAMT.set_value("");
        	this.edtDT_INTEREST.set_value("");
        	this.edtDS_ORDERTAXBASE.set_value("");
        	this.edtCD_ETC3.set_value("");
        }


         // 소득정보조회 버튼 클릭시 팝업화면 호출
         this.fnIctDfrmt = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.CD_DEPT_SELFACNT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_SELFACNT");
        	param.DS_DEPT_SELFACNT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_SELFACNT");
            param.CD_DEPT_ACNT = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_DEPT_ACNT");
        	param.DS_DEPT_ACNT = this.dsListSub.getColumn(this.dsListSub.rowposition, "DS_DEPT_ACNT");
        	param.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");
        	param.YM_IMPUTE_FROM = nexacro.replaceAll(this.dsListSub.getColumn(this.dsListSub.rowposition, "YM_IMPUTE"), "-", "");
        	param.YM_IMPUTE_TO = nexacro.replaceAll(this.dsListSub.getColumn(this.dsListSub.rowposition, "YM_IMPUTE"), "-", "");
        	param.TY_INCOMETYPE = this.dsListSub.getColumn(this.dsListSub.rowposition, "TY_INCOMETYPE");
        	param.NO_IDX = this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_IDX");


        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_INCOMETAX_DEFRAYMENT", "fnIctDfrmtCallback", param);
        }

         this.fnIctDfrmtCallback = function(svcID, value) {
        	//this.FormBtns.Select.click();
        };

        // 월전체출력 버튼 클릭 이벤트
         this.fnReport = function(obj,e) {

        	this.gfnAlert("레포트 출력 준비중입니다.");

        	// 레포트가 만들어지면 주석풀고 연결하기
        	/*
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (this.dsList.rowposition > 1) { this.gfnAlert("출력하실 자료가 없습니다."); return false; }

        	if(this.gfnIsNull(this.ctclDT_CASH00.value)){
        		this.gfnAlert("영수일자가 입력되지 않았습니다.");
        		this.ctclDT_CASH00.setFocus();
        		return false;
        	}

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsReport.addColumn("CD_VENDOR", 		"string");
        	this.dsReport.addColumn("DT_PRINTDATE", 	"string");
        	this.dsReport.addColumn("CD_KEY_CODE", 		"string");
        	this.dsReport.addColumn("YM_IMPUTE", 		"string");

        	var cdKeyCode = "";
        	//소득자 지급정보
        	for(var i=0;i<this.dsListSub.rowcount;i++){

        		if(this.dsListSub.getColumn(i, "YN_SELECT") == 1){
        			var cdDeptAcnt = this.dsListSub.getColumn(i, "CD_DEPT_ACNT");	//귀속부서
        			var noIdx 	   = this.dsListSub.getColumn(i, "NO_IDX");			//순번
        			var ymImpute   = this.dsListSub.getColumn(i, "YM_IMPUTE");		//귀속년월

        			cdKeyCode += cdDeptAcnt + noIdx + ymImpute+"|";
        		}
        	}

        	if (this.gfnIsNull(cdKeyCode)) {
        		this.gfnAlert("출력 대상 자료를 선택하십시요.");
        		return;
        	}

        	this.dsReport.clearData();
        	var nRow = this.dsReport.addRow();
        	this.dsReport.setColumn(nRow, "CD_DEPT_SELFACNT" , this.ccfSELFACNT.form.CDTextBox.value);
        	this.dsReport.setColumn(nRow, "CD_VENDOR"		 , this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
        	this.dsReport.setColumn(nRow, "DT_PRINTDATE"	 , this.ctclDT_CASH00.value);
        	this.dsReport.setColumn(nRow, "CD_KEY_CODE"	 	 , cdKeyCode);
        	this.dsReport.setColumn(nRow, "YM_IMPUTE"	 	 , this.dsSearch.getColumn(0, "YM_IMPUTE_FROM"));

        	var inProc		= "_dsProc";
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report=dsReport";
        	var reportpath  = "/dh/dhv/DHV_ORDERTAX_DEFRAYMENT_RPT.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	*/
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_DEPT_SELFACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staYM_IMPUTE.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staWave.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staCD_VENDOR.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_VENDOR.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.sta.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.sta00.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.sta01.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.sta03.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.sta05.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.sta02.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.sta04.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.staDT_START01.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.staDT_START02.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.staDT_START03.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.staDT_START04.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.staDT_START05.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataLeft.form.staDT_START06.addEventHandler("onclick",this.Common_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_INCOMETAX_DEFRAYMENT_SEARCH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
