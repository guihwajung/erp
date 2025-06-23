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
            this.set_titletext("전표승인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_SLIPLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">selectDt</Col><Col id=\"SP\">DHAPR_SLIPLIST_SELECT_DT_TRADE</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_SLIPHEADER_RM_CONTENT_UPDATE</Col></Row><Row><Col id=\"TARGET\">detail</Col><Col id=\"SP\">DHAPR_SLIP_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">transfer</Col><Col id=\"SP\">DHAPR_SLIP_TRANSFER</Col></Row><Row><Col id=\"TARGET\">reverse</Col><Col id=\"SP\">DHAPR_SLIP_REVERSE</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DHAPR_SLIP_CANCEL</Col></Row><Row><Col id=\"SP\">DHAPR_SLIP_GW_APPR</Col><Col id=\"TARGET\">gwSlipAppr</Col></Row><Row><Col id=\"TARGET\">slipPirnt</Col><Col id=\"SP\">DHAPR_SLIP_DETAIL_CVS_SELECT</Col></Row><Row><Col id=\"TARGET\">slipEAppr</Col><Col id=\"SP\">DHAPR_SLIP_EAPPROVAL_SELECT</Col></Row><Row><Col id=\"SP\">DHAPR_REVERSE_AUTOSLIP</Col><Col id=\"TARGET\">reverseSlip</Col></Row><Row><Col id=\"SP\">DHAPR_SLIP_DETAIL_CVS_CHECK</Col><Col id=\"TARGET\">selectAuthGwAppr</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">aprv_execute</Col><Col id=\"SP\">DHAPR_SLIP_DETAIL_APRV_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PAPER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DATE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DATE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SEMOK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TOACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TOSEMOK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_COMBO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_AUTOSLIP_COMBO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_AUTOSLIP_COMBO\">%</Col><Col id=\"TY_DEPT\">BE</Col><Col id=\"TY_AUTOSLIP\"/><Col id=\"YN_APPR\"/><Col id=\"TY_COMBO\">Y</Col><Col id=\"TY_DATE\">BE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_AUTOSLIP", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">전체</Col><Col id=\"CODE\">%</Col></Row><Row><Col id=\"VALUE\">인사</Col><Col id=\"CODE\">DA</Col></Row><Row><Col id=\"CODE\">DF</Col><Col id=\"VALUE\">자금</Col></Row><Row><Col id=\"CODE\">DH</Col><Col id=\"VALUE\">회계</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">발행부서</Col><Col id=\"CODE\">BH</Col></Row><Row><Col id=\"VALUE\">귀속부서</Col><Col id=\"CODE\">BE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_AUTOSLIP", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">M</Col><Col id=\"VALUE\">일반</Col></Row><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">자동</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_APPR", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">승인</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">미승인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DATE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">BH</Col><Col id=\"VALUE\">발행일자</Col></Row><Row><Col id=\"CODE\">BE</Col><Col id=\"VALUE\">회계일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_COMBO", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">거래처</Col></Row><Row><Col id=\"CODE\">E</Col><Col id=\"VALUE\">기타1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtReq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCdApp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListPrint", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSlipEAppr", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthGwApprList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_A30", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_A21", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"145","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","295","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ccfCD_CORP:0","10.0","30","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","staTY_GUBUN:0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("귀속부서");
            obj.set_value("BE");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","ccboTY_GUBUN:8","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_AUTOSLIP","ccfCD_DEPT:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("전표구분");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("ccrdTY_AUTOSLIP","staTY_AUTOSLIP:0.0","10.0","230","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_AUTOSLIP");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_columncount("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("ccrdTY_DATE","0","ccfCD_CORP:10.0","146","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsTY_DATE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_columncount("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_DATE_FR","ccrdTY_DATE:0.0","ccfCD_CORP:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_DATE","ctclDT_DATE_FR:0.0","ccfCD_CORP:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_DATE_TO","staDT_DATE:0.0","ccfCD_CORP:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ctclDT_DATE_TO:0.0","ccboTY_GUBUN:10.0","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("발행자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","ccfCD_DEPT:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFIDSABUN");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_APPR","ccfID_SABUN:0.0","staTY_AUTOSLIP:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("승인여부");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("ccrdYN_APPR","staYN_APPR:0.0","staCD_CORP:10.0","230","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_columncount("4");
            obj.set_direction("horizontal");
            obj.set_innerdataset("dsYN_APPR");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT","0","ccrdTY_DATE:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("계정코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACCOUNT","staCD_ACCOUNT:0.0","ctclDT_DATE_FR:10.0","295","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNT_SLIP_AND_TRIAL");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TOACCOUNT","ccfCD_ACCOUNT:0.0","staID_SABUN:10.0","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("계정코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_TOACCOUNT","staCD_TOACCOUNT:0.0","ccfID_SABUN:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNT_SLIP_AND_TRIAL");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_AUTOSLIP","ccfCD_TOACCOUNT:0.0","staYN_APPR:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("자동전표코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_COMBO","15","ccfCD_ACCOUNT:10.0","73","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsTY_COMBO");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_AUTOSLIP","staCD_AUTOSLIP:0.0","ccrdYN_APPR:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsCD_AUTOSLIP");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_AUTOSLIP","ccboCD_AUTOSLIP:3","ccrdYN_APPR:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFAUTOSLIP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("20");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","ccboTY_COMBO:5","ccfCD_ACCOUNT:10.0","295","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFALLVENDOR_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("22");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TRADE","ccfCD_VENDOR:0.0","staCD_TOACCOUNT:10.0","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("전표번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE","staCD_TRADE:0.0","ccfCD_TOACCOUNT:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_REM","txtCD_TRADE:0.0","staCD_AUTOSLIP:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("적요");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_REM","staDS_REM:0.0","ccboCD_AUTOSLIP:10.0","323","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTY_VENDOR","0.0","staCD_CORP:10.0","20","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","50%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","13",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divTotal","0",null,null,"12","0","278",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new MaskEdit("mskSUM_CRDR01","297","757","75","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_format("#,###");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","393","757","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("승인합계");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSUM_CRDR00","447","757","145","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.set_format("#,###");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","613","757","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("미승인건수");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_DR","687","757","75","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_limitbymask("both");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","783","757","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("미승인합계");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CR","857","757","115","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_limitbymask("both");
            obj.set_format("#,###");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","993","757","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("차대변합계");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCOUNT","1067","757","115","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_format("#,###");
            obj.set_limitbymask("both");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","233","757","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("승인건수");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","0","722",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccboTY_GUBUN","value","dsSearch","TY_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccrdTY_AUTOSLIP","value","dsSearch","TY_AUTOSLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccrdTY_DATE","value","dsSearch","TY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclDT_DATE_FR","value","dsSearch","DT_DATE_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclDT_DATE_TO","value","dsSearch","DT_DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccrdYN_APPR","value","dsSearch","YN_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_ACCOUNT.form.CDTextBox","value","dsSearch","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_TOACCOUNT.form.CDTextBox","value","dsSearch","CD_TOACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccfCD_AUTOSLIP.form.CDTextBox","value","dsSearch","CD_AUTOSLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ccboTY_COMBO","value","dsSearch","TY_COMBO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.txtCD_TRADE","value","dsSearch","CD_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.txtDS_REM","value","dsSearch","DS_REM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.ccboCD_AUTOSLIP","value","dsSearch","TY_AUTOSLIP_COMBO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.edtTY_VENDOR","value","dsSearch","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_SLIPAPPR.xfdl", function() {
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

        	var today = this.gfnGetDate();

        	this.dsSearch.setColumn(0, "DT_DATE_FR", this.gfnGetFirstDate(today));
        	this.dsSearch.setColumn(0, "DT_DATE_TO", today);

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP) && !this.gfnIsNull(this.getOwnerFrame().CD_DEPT))
        	{
        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		//this.ccfCD_CORP.form.fnCodeFindLoad();
        		this.ccfCD_DEPT.form.fnCodeFindLoad();

        		this.dsSearch.setColumn(0, "CD_DEPT", this.getOwnerFrame().CD_DEPT);
        	}else{
        		this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        // 		if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        // 			this.dsSearch.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        // 			this.dsSearch.setColumn(0, "DS_DEPT", this.AuthClient.DS_DEPT);
        // 		}

        		this.dsSearch.setColumn(0, "CD_DEPT", this.AuthClient.LEVCD_DEPT_UPPER);
        		this.ccfCD_DEPT.form.fnCodeFindLoad();

        		//this.ccfCD_CORP.form.fnCodeFindLoad();
        		//this.ccfCD_DEPT.form.fnCodeFindLoad();
        	}

        	// J20003 재무회계팀 J20004 복합금융팀
        	//btnReverseSlip	역분개
        	//btnApprSlip	전표승인
        	//btnReserSlip	승인취소
        	trace("CD_DEPT->" + this.AuthClient.CD_DEPT +" \nYN_SLIP_OK->" + this.UserInfo.YN_SLIP_OK);
        	if (this.UserInfo.YN_SLIP_OK == "Y") {
        		this.btnApprSlip.set_visible(true);
        		this.btnReserSlip.set_visible(true);
        	}else {
        		this.btnApprSlip.set_visible(false);
        		this.btnReserSlip.set_visible(false);
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
        	this.btnApprSlip 		 = this.gfnFormButtonAdd("btnApprSlip", "fnApprSlip"); 				   // 전표승인
        	this.btnReserSlip 		 = this.gfnFormButtonAdd("btnReserSlip", "fnReserSlip"); 			   // 전표승인취소
        	this.btnCancelSlip 		 = this.gfnFormButtonAdd("btnCancelSlip", "fnCancelSlip"); 			   // 전표삭제
        	this.btnDetailSlip 		 = this.gfnFormButtonAdd("btnDetailSlip", "fnDetailSlip"); 			   // 전표상세조회
        	//this.btnApprove    		 = this.gfnFormButtonAdd("btnApprove", "fnApprove"); 			   // 승인결재
        	//this.btnDocument   		 = this.gfnFormButtonAdd("btnDocument", "fnCheckAuthApproval"); 	 	// 결재문서 "fnDocument"

        	this.btnReverseSlip   	 = this.gfnFormButtonAdd("btnReverseSlip", "fnReverseSlip"); 	 		// 역분개(취소전표발행)


        	//this.btnRemUpdate 		 = this.gfnFormButtonAdd("btnRemUpdate", "fnRemUpdate"); 			   // 적요수정
        	//this.btnSlipPrintPreview = this.gfnFormButtonAdd("btnSlipPrintPreview", "fnSlipPrintPreview"); // 전표출력

        	this.btnAprv     = this.gfnFormButtonAdd("btnAprv"    , "fnAprv");			// 결재상신 버튼
        	this.btnDocQ     = this.gfnFormButtonAdd("btnDocQ"    , "fnAprvDocQ");		// 결재문서조회 버튼
        	this.btnInit     = this.gfnFormButtonAdd("btnInit"    , "fnAprvInit");		// 결재상태초기화 버튼
        	this.btnRequest     = this.gfnFormButtonAdd("btnRequest"    , "fnRequest");		// 자금신청품의서 버튼
        };

        this.fnUpdateStatusExtendButton = function() {
        	var nrow = this.dsList.rowposition;
        	var bEnable = (nrow > 0) ? true : false;

        	this.btnAprv.set_enable(bEnable && this.dsList.getColumn(nrow, "BTN_APRV") == "Y");
        	this.btnDocQ.set_enable(bEnable && this.dsList.getColumn(nrow, "BTN_DOC_Q") == "Y");
        	this.btnInit.set_enable(bEnable && this.dsList.getColumn(nrow, "BTN_INIT") == "Y");
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;

        	this.ccfCD_CORP 		= this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT 		= this.divSearch.form.ccfCD_DEPT;
        	this.ccfID_SABUN 		= this.divSearch.form.ccfID_SABUN;
        	this.ccfCD_ACCOUNT 		= this.divSearch.form.ccfCD_ACCOUNT;
        	this.ccfCD_TOACCOUNT 	= this.divSearch.form.ccfCD_TOACCOUNT;
        	this.ccfCD_AUTOSLIP 	= this.divSearch.form.ccfCD_AUTOSLIP;
        	this.ccfCD_VENDOR 		= this.divSearch.form.ccfCD_VENDOR;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_SLIPAPPR");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHA_SLIPDETAIL");

         	//this.gfnGridColumnColor(this.dxGrid, "YN_APPR", "Blue", "YN_APPR == '이체'");
         	//this.gfnGridColumnColor(this.dxGrid, "CD_TRADE_APPR", "Blue", "YN_APPR == '이체'");

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_TOACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_AUTOSLIP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("TY_DEPT", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("YN_APPR", "string");
        	//this.dsSelect.addColumn("YN_PAPER", "string");
        	this.dsSelect.addColumn("TY_DATE", "string");
        	this.dsSelect.addColumn("DT_DATE_FR", "string");
        	this.dsSelect.addColumn("DT_DATE_TO", "string");
        	this.dsSelect.addColumn("CD_AUTOSLIP", "string");
        	this.dsSelect.addColumn("TY_AUTOSLIP", "string");
        	this.dsSelect.addColumn("CD_TRADE", "string");
        	//this.dsSelect.addColumn("CD_TRADE_APPR", "string");
        	this.dsSelect.addColumn("CD_ACCOUNT", "string");
        	this.dsSelect.addColumn("CD_SEMOK", "string");
        	this.dsSelect.addColumn("CD_TOACCOUNT", "string");
        	this.dsSelect.addColumn("CD_TOSEMOK", "string");
        	this.dsSelect.addColumn("TY_VENDOR", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("TY_COMBO", "string");
        	this.dsSelect.addColumn("DS_REM", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("CD_DEPTUSER", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_TRADE", "string");

        	this.dsTransfer = new Dataset();
        	this.dsTransfer.addColumn("IN_CD_TRADE", "string");
        	this.dsTransfer.addColumn("IN_TY_SLIP", "string");
        	this.dsTransfer.addColumn("ID_APPR", "string");

        	this.dsReverse = new Dataset();
        	this.dsReverse.addColumn("IN_CD_TRADE", "string");
        	this.dsReverse.addColumn("IN_TY_SLIP", "string");
        	this.dsReverse.addColumn("ID_TRANS", "string");

        	this.dsGwSlipAppr = new Dataset();
        	this.dsGwSlipAppr.addColumn("GW_NO_KEY", "string");
        	this.dsGwSlipAppr.addColumn("GW_CD_TRADE", "string");
        	this.dsGwSlipAppr.addColumn("GW_COMPL_DATE", "string");
        	this.dsGwSlipAppr.addColumn("ID_TRANS", "string");

        	this.dsCancel = new Dataset();
        	this.dsCancel.addColumn("CD_TRADE", "string");
        	this.dsCancel.addColumn("ID_TRANS", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_TRADE", "string");
        	this.dsUpdate.addColumn("RM_CONTENT", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");

        	this.dsSlipPirnt = new Dataset();
        	this.dsSlipPirnt.addColumn("DS_KEY1", "string");
        	this.dsSlipPirnt.addColumn("DS_KEY2", "string");
        	this.dsSlipPirnt.addColumn("DS_KEY3", "string");
        	this.dsSlipPirnt.addColumn("DS_KEY4", "string");
        	this.dsSlipPirnt.addColumn("DS_KEY5", "string");
        	this.dsSlipPirnt.addColumn("ID_USER", "string");
        	this.dsSlipPirnt.addColumn("RTN_TITLE", "string");
        	this.dsSlipPirnt.addColumn("RTN_HTML", "string");

        	this.dsSlipEAppr = new Dataset();
        	this.dsSlipEAppr.addColumn("NO_KEY", "string");

        	// 취소전표발행
        	this.dsReverseSlip = new Dataset();
        	this.dsReverseSlip.addColumn("CD_CORP", "string");
        	this.dsReverseSlip.addColumn("CD_TRADE", "string");
        	this.dsReverseSlip.addColumn("CD_DEPT_BH", "string");
        	this.dsReverseSlip.addColumn("ID_TRANS", "string");
        	this.dsReverseSlip.addColumn("DT_ACCOUNT", "string");

        	//자금 계정이 포함한 전표확인
        	this.dsAuthGwAppr = new Dataset();
        	this.dsAuthGwAppr.addColumn("CD_DEPT_BE", "string");
        	this.dsAuthGwAppr.addColumn("CD_TRADE", "string");


        	// 결재
        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("TY_WRK", "string");
        	this.dsApproval.addColumn("CD_CORP", "string");
        	this.dsApproval.addColumn("CD_TRADE", "string");
        	this.dsApproval.addColumn("ID_APRV", "string");
        	this.dsApproval.addColumn("NO_APRV", "int");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();


        	trace( "CD_AUTOSLIP /" + this.dsSearch.getColumn(0, "CD_AUTOSLIP") + "/");

        	this.dsSelect.setColumn(0,"CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0,"TY_DEPT", this.dsSearch.getColumn(0, "TY_DEPT"));
        	this.dsSelect.setColumn(0,"CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0,"YN_APPR", this.dsSearch.getColumn(0, "YN_APPR"));
        	this.dsSelect.setColumn(0,"TY_DATE", this.dsSearch.getColumn(0, "TY_DATE"));
        	this.dsSelect.setColumn(0,"DT_DATE_FR", this.dsSearch.getColumn(0, "DT_DATE_FR"));
        	this.dsSelect.setColumn(0,"DT_DATE_TO", this.dsSearch.getColumn(0, "DT_DATE_TO"));
        	this.dsSelect.setColumn(0,"CD_AUTOSLIP", this.dsSearch.getColumn(0, "TY_AUTOSLIP_COMBO") == "%" ? this.dsSearch.getColumn(0, "CD_AUTOSLIP") :  (this.gfnNvl(this.dsSearch.getColumn(0, "CD_AUTOSLIP"),"") == "" ? this.dsSearch.getColumn(0, "TY_AUTOSLIP_COMBO") : this.dsSearch.getColumn(0, "CD_AUTOSLIP")));
        	this.dsSelect.setColumn(0,"TY_AUTOSLIP", this.dsSearch.getColumn(0, "TY_AUTOSLIP"));
        	this.dsSelect.setColumn(0,"CD_TRADE", nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsSearch.getColumn(0, "CD_TRADE"),"")), "-",""));
        	this.dsSelect.setColumn(0,"CD_ACCOUNT", this.dsSearch.getColumn(0, "CD_ACCOUNT"));
        	this.dsSelect.setColumn(0,"CD_SEMOK", "");
        	this.dsSelect.setColumn(0,"CD_TOACCOUNT", this.dsSearch.getColumn(0, "CD_TOACCOUNT"));
        	this.dsSelect.setColumn(0,"CD_TOSEMOK", "");
        	this.dsSelect.setColumn(0,"TY_VENDOR", this.dsSearch.getColumn(0, "TY_VENDOR"));
        	this.dsSelect.setColumn(0,"CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0,"TY_COMBO", this.dsSearch.getColumn(0, "TY_COMBO"));
        	this.dsSelect.setColumn(0,"DS_REM", this.dsSearch.getColumn(0, "DS_REM"));
        	this.dsSelect.setColumn(0,"ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0,"GR_SEARCH", this.FormInfo.GR_SEARCH);			// 로그인사용자 권한
        	this.dsSelect.setColumn(0,"ID_USER", this.AuthClient.ID_USER);				// 로그인사용자
        	this.dsSelect.setColumn(0,"CD_DEPTUSER", this.AuthClient.CD_DEPT);			// 로그인사용자 부서

        	trace("GR_SEARCH->" + this.FormInfo.GR_SEARCH);
        	// BH	발행일자 / BE	회계일자
        	var spNm = (this.dsSearch.getColumn(0, "TY_DATE") == "BH") ? "selectDt" : "select";

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	//var inData      = "select=dsSelect";
        	var inData      = spNm+"=dsSelect";
        	//var outData     = "dsList=select0";
        	var outData     = "dsList=" + spNm + "0";
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

        this.fnSelectSub = function() {
        	this.dsListSub.clearData();

        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var cd_trade = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE").replace(/-/gi, "");
        	if (this.gfnIsNull(cd_trade)) {
        		return false;
        	}

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_TRADE", cd_trade);

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "detail=dsSelectSub";
        	var outData     = "dsListSub=detail0";
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
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_TRADE", nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsSearch.getColumn(0, "CD_TRADE"),"")), "-",""));
        				this.dsUpdate.setColumn(nrow, "RM_CONTENT", this.dsList.getColumn(i, "RM_CONTENT"));
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsOutput=save";
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
           if (!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+ this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("전표출력 " + obj.text + " 대상을 체크하십시오.");
        		return;
        	}

            var arrCdTrade = [];

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) != '#' && this.dsList.getColumn(i, "CHK") == 1){
        			arrCdTrade.push(nexacro.replaceAll(this.dsList.getColumn(i, "CD_TRADE"), "-",""));
        		}
        	}
        	//var sCdTrade = nexacro.replaceAll(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"), "-","");	// 전자결재문서번호
        // 	if (this.gfnIsNull(arrCdTrade)) {
        // 		this.gfnAlert("전표번호가 없습니다.");
        // 		return false;
        // 	}

        	this.dsSlipPirnt.clearData();
        	this.dsSlipPirnt.addRow();

        	var sNoDoc = this.dsList.getColumn(this.dsList.rowposition, "NO_DOC");	// 전자결재문서번호
        	//var sCdTrade = nexacro.replaceAll(this.gfnTrim(this.txtCD_TRADE.value), "-","");
        	//this.dsSlipPirnt.setColumn(0, "DS_KEY1", sCdTrade);
        	this.dsSlipPirnt.setColumn(0, "DS_KEY1",  arrCdTrade.join(';'));
        	this.dsSlipPirnt.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	this.dsSlipEAppr.clearData();
        	this.dsSlipEAppr.addRow();
        	this.dsSlipEAppr.setColumn(0, "NO_KEY", sNoDoc);

        	var strSvcId    = "slipPirnt";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "slipPirnt=dsSlipPirnt slipEAppr=dsSlipEAppr";
        	var outData     = "dsListPrint=slipPirnt0 dsListSlipEAppr=slipEAppr0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        	return false;
        }

        // 전표출력
        this.fnSlipPrint = function(obj,e)
        {

        	for(var i = 0;i<this.dsListPrint.rowcount;i++){
        		this.dsListPrint.setColumn(i, "PROOF_URL", "");
        		this.dsListPrint.setColumn(i, "TAX_URL", "");
        		this.dsListPrint.setColumn(i, "CD_VATDEPT_ACNT", "");
        		this.dsListPrint.setColumn(i, "CD_VATACCOUNT", "");

        		this.dsListPrint.setColumn(i, "DT_EAPPROVAL1", this.dsListSlipEAppr.getColumn(0, "DT_APPR"));
        		this.dsListPrint.setColumn(i, "ID_EAPPROVAL1", this.dsListSlipEAppr.getColumn(0, "ID_APPR"));
        		this.dsListPrint.setColumn(i, "DS_HNAME_EAPPROVAL1", this.dsListSlipEAppr.getColumn(0, "DS_HNAME"));
        		this.dsListPrint.setColumn(i, "DS_POSITION1", this.dsListSlipEAppr.getColumn(0, "DS_POSITION"));
        		this.dsListPrint.setColumn(i, "DT_EAPPROVAL2", this.dsListSlipEAppr.getColumn(1, "DT_APPR"));
        		this.dsListPrint.setColumn(i, "ID_EAPPROVAL2", this.dsListSlipEAppr.getColumn(1, "ID_APPR"));
        		this.dsListPrint.setColumn(i, "DS_HNAME_EAPPROVAL2", this.dsListSlipEAppr.getColumn(1, "DS_HNAME"));
        		this.dsListPrint.setColumn(i, "DS_POSITION2", this.dsListSlipEAppr.getColumn(1, "DS_POSITION"));
        		this.dsListPrint.setColumn(i, "DT_EAPPROVAL3", this.dsListSlipEAppr.getColumn(2, "DT_APPR"));
        		this.dsListPrint.setColumn(i, "ID_EAPPROVAL3", this.dsListSlipEAppr.getColumn(2, "ID_APPR"));
        		this.dsListPrint.setColumn(i, "DS_HNAME_EAPPROVAL3", this.dsListSlipEAppr.getColumn(2, "DS_HNAME"));
        		this.dsListPrint.setColumn(i, "DS_POSITION3", this.dsListSlipEAppr.getColumn(2, "DS_POSITION"));
        		this.dsListPrint.setColumn(i, "DT_EAPPROVAL4", this.dsListSlipEAppr.getColumn(3, "DT_APPR"));
        		this.dsListPrint.setColumn(i, "ID_EAPPROVAL4", this.dsListSlipEAppr.getColumn(3, "ID_APPR"));
        		this.dsListPrint.setColumn(i, "DS_HNAME_EAPPROVAL4", this.dsListSlipEAppr.getColumn(3, "DS_HNAME"));
        		this.dsListPrint.setColumn(i, "DS_POSITION4", this.dsListSlipEAppr.getColumn(3, "DS_POSITION"));
        	}

         	var inProc		= "_dsProc";
         	//var inParam 	= "params=dsList";						// 조회SP이외 사용할 정보
        	var inParam 	= "params=dsListPrint";						// 조회SP이외 사용할 정보
        	var inData      = "slipPirnt=dsSlipPirnt";
         	//var inData      = "line1=dsLine1 line2=dsLine2 selectmaster=dsMaster";	//   select=dsSelect
         	var reportpath  = "/dh/dha/DHA_ISSUESLIP_RPT.ozr";

         	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_DATE_FR"))||this.gfnIsNull(this.dsSearch.getColumn(0, "DT_DATE_TO"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_DATE_FR"))){
        				this.ctclDT_DATE_FROM.setFocus();
        			} else if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_DATE_TO"))) {
        				this.ctclDT_DATE_TO.setFocus();
        			}
        		}

        		var msg = "회계일자";
        		if(this.dsSearch.getColumn(0, "TY_DEPT") == "BH") msg = "발행일자";

        		msg += "를 입력하세요.";
        		this.gfnAlert(msg, "fnVaidateCallback");
        	}

        	//if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))) {
        			validate = false;
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.ccfCD_DEPT.form.CDTextBox.setFocus();
        			}

        			var msg = "발행부서";
        			if(this.dsSearch.getColumn(0, "TY_DEPT") == "BE") msg = "귀속부서";
        			msg += "를 입력하세요.";

        			this.gfnAlert(msg, "fnVaidateCallback");
        		}
        	//}

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

        	trace("콜백->"  + svcID + " / errorCode->"  + errorCode);

        	this.fnUpdateStatusExtendButton();

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        	else if (svcID == "combo") {
        		if (errorCode == 0) {
        // 			var A21 = this.dsCD_A21.findRowExpr("CD_CODE == '"+this.AuthClient.CD_DEPT+"'");
        // 			var bVisible = (A21 > -1) ? true : false ;
        // 			this.btnReverseSlip.set_visible(bVisible);

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "transfer") {
         		this.fnCallback_callback = function(){
         			this.FormBtns.Select.click();
         		}
        		var sNoDoc = this.dsList.getColumn(this.dsList.rowposition, "NO_DOC");	// 전자결재문서번호
        		if (!this.gfnIsNull(sNoDoc)) {
        			// 그룹웨어 전자결재 승인/미승인처리
        			this.fnGwSlipAppr(svcID);
        		}else{
        			this.gfnAlert("전표승인 처리 완료되었습니다.","fnCallback_callback");
        		}
        	}
        	else if(svcID == "reverse") {
        		this.fnCallback_callback = function(){
        			this.FormBtns.Select.click();
        		}
        		var sNoDoc = this.dsList.getColumn(this.dsList.rowposition, "NO_DOC");	// 전자결재문서번호
        		if (!this.gfnIsNull(sNoDoc)) {
        			// 그룹웨어 전자결재 승인/미승인처리
        			this.fnGwSlipAppr(svcID);
        		}else{
        			this.gfnAlert("전표미승인 처리 완료되었습니다.","fnCallback_callback");
        		}
        	}
        	else if(svcID == "gwSlipTransfer" || svcID == "gwSlipReverse") {
        		var sAlrtMsg = (svcID == "gwSlipTransfer") ? "전표승인" : "전표미승인";
        		this.fnCallback_callback = function()
        		{
        			this.FormBtns.Select.click();
        		}
        		this.gfnAlert(sAlrtMsg + " (그룹웨어 전자결재) 처리 완료되었습니다.","fnCallback_callback");
        	}
        	else if(svcID == "cancel") {
        		this.fnCallback_callback = function()
        		{
        			this.FormBtns.Select.click();
        		}

        		this.gfnAlert("전표삭제 처리 완료되었습니다.","fnCallback_callback");
        	}
        	else if(svcID == "slipPirnt") {	// 출력
        		if (errorCode == 0) {
        			if(this.dsListPrint.rowcount > 0){
        				this.fnSlipPrint();
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "reverseSlip") {	// 취소전표발행
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("취소전표발행 처리 완료되었습니다.","fnCallback_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "selectAuthGwAppr") {
        		if (errorCode == 0) {
        			var ynGw = this.dsAuthGwApprList.getColumn(0,"YN_GW");
        			if(ynGw == "Y"){
        				this.fnDocument();
        			}else{
        				this.gfnAlert("자금 계정이 포함한 전표는 현장에서 전자결재 불가합니다.");
        				return;
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "APRV" || svcID == "APRVCNC") {
        		this.gfnOpenAppr(function() {
        			this.FormBtns.Select.click();
        		});
        	} else if (svcID == "APRVINIT") {
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "ccfCD_DEPT") {
        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        		if (!this.gfnIsNull(cdCorp)) {
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");		//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");				//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);			//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");				//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");				//현장/본사여부
        			dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "GR_SEARCH"	    , this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        		} else {
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
        		/*
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요!", "fnVaidateCallback");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "0000000");
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "");
        		*/
        	}
        	if (id == "ccfCD_ACCOUNT") {
        		dsUserParam.setColumn(nrow, "CD_CORP", "01");
        	}
        	if (id == "ccfCD_TOACCOUNT" || id == "ccfCD_VENDOR")
        	{
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요!", "fnVaidateCallback");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	}
        	if (id == "ccfCD_AUTOSLIP") {
        		dsUserParam.setColumn(nrow, "TY_AUTOSLIP", this.dsSearch.getColumn(0, "TY_AUTOSLIP_COMBO"));
        	}
        	if (id == "ccfID_SABUN") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요!", "fnVaidateCallback");
        			return false;
        		}

        		//dsUserParam.setColumn(nrow, "YN_OFFICER", "01");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	}
        	if (id == "ccfISSUE_ID") {	// 전자세금계산서번호
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요!", "fnVaidateCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "TY_SALEBUY", "I");	//매입매출구분

        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_TOACCOUNT.form.fnCodeFindClear();
        		this.ccfCD_DEPT.form.fnCodeFindClear();
        		this.ccfID_SABUN.form.fnCodeFindClear();
        		this.ccfCD_VENDOR.form.fnCodeFindClear();
        	}
        	if(id == "ccfCD_VENDOR") {
        		var tyVendor = (arrData.length > 0) ? arrData[0]["TY_VENDOR"] : "";
        		this.dsSearch.setColumn(0, "TY_VENDOR"	, tyVendor);
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_RowCellChanged = function(obj,e)
        {
        	if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        			if (e.col != 1)
        				this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;

        		this.fnUpdateStatusExtendButton();
        	}
        };

        // 더블클릭
        this.divData_divDataTop_objGrid_oncelldblclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};

        	param.IUD_FLAG = this.dsList.getColumn(this.dsList.rowposition, "YN_APPR")  == "미승인" ? "U" : "S";
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE").replace(/-/gi, "");

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param);
        };

        this.fnGrid_AfterEdit = function(obj,e) {
        	if (e.columnid == "CHK") {
        		if (e.oldvalue != e.newvalue) {
        			var chk = e.newvalue;
        			var appr = this.dsSearch.getColumn(0, "YN_APPR");
        			var YN_APPR = this.dsList.getColumn(e.row, "YN_APPR");

        			this.btnApprSlip.set_enable(false);
        			this.btnReserSlip.set_enable(false);

        			var grdYNAPPRs = "";
        			for (var i = 0; i < this.dsList.rowcount; i++) {
        				if (this.dsList.getColumn(i, "CHK") == 1) {
        					grdYNAPPRs = this.dsList.getColumn(i, "YN_APPR");
        					break;
        				}
        			}
        			trace("grdYNAPPRs->" + grdYNAPPRs);

        			if (grdYNAPPRs == "") {
        				this.btnApprSlip.set_enable(YN_APPR == "미승인" && chk);
        				this.btnReserSlip.set_enable(YN_APPR == "승인" && chk);
        			}
        			else if (grdYNAPPRs != "" && grdYNAPPRs != YN_APPR) {
        				if (chk) {
        					this.dsList.setColumn(e.row, "CHK", false);
        					this.gfnAlert("동일한 승인구분으로 선택하셔야 합니다.");
        				}
        				this.btnApprSlip.set_enable(grdYNAPPRs == "미승인");
        				this.btnReserSlip.set_enable(grdYNAPPRs == "승인");
        			}
        			else if (grdYNAPPRs != "" && grdYNAPPRs == YN_APPR) {
        				this.btnApprSlip.set_enable(YN_APPR == "미승인");
        				this.btnReserSlip.set_enable(YN_APPR == "승인");
        			}

        			//this.btnRemUpdate.set_enable(this.GetGridRemUpdateEnable());
        		}
        	}
        }

        this.fnGrid_AfterAllCheck = function(obj, cell, check) {
        	if (this.dsSearch.getColumn(0, "YN_APPR") != "") {
        		var nACnt = this.dsList.findRow("YN_APPR", "승인");
        		var nNCnt = this.dsList.findRow("YN_APPR", "미승인");
        		var aappr = nACnt > 0;
        		var nappr = nNCnt > 0;

        		this.btnApprSlip.set_enable(nappr && check);
        		this.btnReserSlip.set_enable(aappr && check);
        		//this.btnRemUpdate.set_enable(this.GetGridRemUpdateEnable());
        	}
        }

        this.GetGridRemUpdateEnable = function() {
        	var isEnable = false;
        	for (var i=0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			var ynAppr = this.dsList.getColumn(i, "YN_APPR");
        			if (ynAppr == "승인")
        				isEnable = true;
        			else {
        				isEnable = false;
        				break;
        			}
        		}
        	}

        	return isEnable;
        }

        /************************************************************************
         * 전표 전자결재
         ************************************************************************/
         // 결재상신 버튼
        this.fnAprv = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE").replace(/-/gi, "");
        	if (this.gfnIsNull(CD_TRADE)) {
        		return false;
        	}

        	this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        		if(isOk == false) return;
        		// ID_APRV: this.AuthClient.ID_SABUN,
        		var initParam = {
        			CD_CORP: this.dsSearch.getColumn(0, "CD_CORP"),
        			ID_AP_TYPE: "DHA01",
        			TY_WRK: "APRV",
        			ID_APRV: this.AuthClient.ID_SABUN,
        			TT_DOC: "전표발행 결재 (" + CD_TRADE + ")",
        			CD_CORP_SUFFIX : this.gfnGetConfig("DZ" , "CD_CORP_SUFFIX"),
        		}
        		this.gfnAprv(initParam, "fnAprvCallback", "APRV");
        	});
        }

        // 결재문서조회 버튼
        this.fnAprvDocQ = function(obj, e) {
        	var cd_corp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	var no_aprv = this.dsList.getColumn(this.dsList.rowposition, "NO_APRV");
        	var no_doc = this.dsList.getColumn(this.dsList.rowposition, "NO_DOC");

        	if(this.gfnIsNull(no_aprv) || this.gfnIsNull(no_doc)){
        		return;
        	}

        	var oParams = {
        		CD_CORP: cd_corp,
        		NO_APRV: no_aprv,
        	}

        	trace("CD_CORP->" + cd_corp);
        	trace("NO_APRV->" + no_aprv);

        	this.gfnAprvDoc(oParams, this.fnAprvDocQCallback);
        }

        this.fnAprvDocQCallback = function() {
        	console.log('fnAprvDocQCallback');
        	//alert('fnAprvDocQCallback');
        }

        // 결재상태초기화 버튼
        this.fnAprvInit = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	//this.gfnConfirm(this.fnAprvMsg(obj), "fnAprvCallback", "APRVINIT");
        	this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        		if (isOk == false) {
        			return;
        		}
        		this.fnAprvCallback("APRVINIT", isOk);
        	});

        }

        this.fnAprvMsg = function(obj) {
        	var CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE").replace(/-/gi, "");
        	var CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	var DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	var msg =  CD_TRADE +" 전표의\n";
        	msg += "" + obj.text + " 하시겠습니까?";

        	return msg;
        }

        // 결재상신 버튼 콜백
        // 취소결재상신 버튼 콜백
        // 결재상태초기화 버튼 콜백
        this.fnAprvCallback = function(strId, val) {

        	this.dsApproval.clearData();
        	this.dsApproval.addRow();

        	var CD_TRADE = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE").replace(/-/gi, ""));

        	this.dsApproval.setColumn(0, "TY_WRK",  strId);
        	this.dsApproval.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsApproval.setColumn(0, "CD_TRADE", CD_TRADE);
        	this.dsApproval.setColumn(0, "ID_APRV", this.AuthClient.ID_SABUN);
        	if (strId == "APRV") {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsAprvOut.getColumn(0, "NO_APRV"));
        	} else {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsList.getColumn(this.dsList.rowposition, "NO_APRV"));
        	}

        	trace("결재상신 버튼 콜백!!! ->" + this.dsApproval.saveXML());

        	var strSvcId    = strId;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "aprv_execute=dsApproval";
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


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);

        		if(e.columnid == "TY_AUTOSLIP_COMBO"){this.ccfCD_AUTOSLIP.form.fnCodeFindClear();}

        	}
        };

        //콤보박스 코드 조회
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(0, "CD_TYPE",  "A30");	// 결재문서 자동전표코드(LegacyFormID)

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(1, "CD_TYPE",  "A21");	// 거래처승인부서

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_A30=combo0 dsCD_A21=combo1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

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

        //전표승인
        this.fnApprSlip = function(obj,e)
        {
        	if (this.dsList.rowcount == 0) return;

        	var arrChk = [];
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == 1) {
        			arrChk.push(i);
        		}
        	}

        	if(arrChk.length == 0) {
        		this.gfnAlert("작업할 내역이 없습니다.");
        		return;
        	}

        	if (arrChk.length == 1) {
        		this.gfnConfirm("선택한 자료를 미승인전표에서 승인전표로 만듭니다.", "fnApprSlip_callback", "A");
        	}
        	else if (arrChk.length > 1) {
        		this.gfnConfirm("선택한" + arrChk.length + "건의 자료를 미승인전표에서 승인전표로 만듭니다.", "fnApprSlip_callback", "A");
        	}
        }

        //승인취소
        this.fnReserSlip = function(obj,e)  {
        	if (this.dsList.rowcount == 0) return;

        	var arrChk = [];
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == 1) {
        			arrChk.push(i);
        		}
        	}

        	if(arrChk.length == 0) {
        		this.gfnAlert("작업할 내역이 없습니다.");
        		return;
        	}

        	if (arrChk.length == 1) {
        		this.gfnConfirm("선택한 자료를 승인전표에서 미승인전표로 만듭니다.", "fnApprSlip_callback", "R");
        	}
        	else if (arrChk.length > 1) {
        		this.gfnConfirm("선택한" + arrChk.length + "건의 자료를 승인전표에서 미승인전표로 만듭니다.", "fnApprSlip_callback", "R");
        	}
        }

        // 전표삭제
        this.fnCancelSlip = function(obj,e)
        {
        	if(this.dsList.findRow("CHK", 1) < 0) return;
        	var DS_CLOSING = this.dsList.getColumn(this.dsList.rowposition, "DS_CLOSING");
        	if(DS_CLOSING == "입금전표"){
        		this.gfnAlert("입금전표는 자금 시스템 입금내역 전표 발행에서 취소하세요.");
        		return;
        	}

        	this.gfnConfirm("전표를 삭제하시겠습니까?", "fnApprSlip_callback", "D");
        }

        this.fnGwSlipAppr = function(sTyAppr) {

        	// 승인일자
        	var sGwApprDate = (sTyAppr == "transfer") ? this.gfnGetDate().substr(0,8) : "";
        	var sCdTrade = nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"),"")), "-","");
        	var sNoDoc = this.dsList.getColumn(this.dsList.rowposition, "NO_DOC");	// 전자결재문서번호

        	this.dsGwSlipAppr.clearData();
        	var nrow = this.dsGwSlipAppr.addRow();
        	this.dsGwSlipAppr.setColumn(nrow, "GW_NO_KEY", sNoDoc);
        	this.dsGwSlipAppr.setColumn(nrow, "GW_CD_TRADE", sCdTrade);
        	this.dsGwSlipAppr.setColumn(nrow, "GW_COMPL_DATE", sGwApprDate);
        	this.dsGwSlipAppr.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);

        	if (this.dsGwSlipAppr.rowcount == 0) return;

        	trace("전자결재->" + this.dsGwSlipAppr.saveXML());

        	//var strSvcId    = "gwSlipAppr";
        	var strSvcId    = (sTyAppr == "transfer") ? "gwSlipTransfer" : "gwSlipReverse";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "gwSlipAppr=dsGwSlipAppr";
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

        this.fnApprSlip_callback = function(strID, val) {
        	if (val != true) return;

        	trace("전표처리->" + strID);

        	if (strID == "A") {
        		this.dsTransfer.clearData();
        		for(var i = 0 ; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsTransfer.addRow();
        				this.dsTransfer.setColumn(nrow, "IN_CD_TRADE", this.dsList.getColumn(i, "CD_TRADE").replace(/-/gi, ""));
        				this.dsTransfer.setColumn(nrow, "IN_TY_SLIP", this.dsList.getColumn(i, "CD_AUTOSLIP"));
        				this.dsTransfer.setColumn(nrow, "ID_APPR", this.AuthClient.ID_USER);
        			}
        		}

        		if (this.dsTransfer.rowcount == 0) return;

        		var strSvcId    = "transfer";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "transfer=dsTransfer";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        	}
        	else if (strID == "R") {
        		this.dsReverse.clearData();
        		for(var i = 0 ; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsReverse.addRow();
        				this.dsReverse.setColumn(nrow, "IN_CD_TRADE", this.dsList.getColumn(i, "CD_TRADE").replace(/-/gi, ""));
        				this.dsReverse.setColumn(nrow, "IN_TY_SLIP", this.dsList.getColumn(i, "CD_AUTOSLIP"));
        				this.dsReverse.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        			}
        		}

        		if (this.dsReverse.rowcount == 0) return;

        		var strSvcId    = "reverse";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "reverse=dsReverse";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        	}
        	else if (strID == "D") {
        		this.dsCancel.clearData();
        		for(var i = 0 ; i < this.dsList.rowcount; i++)
        		{
        			if(this.dsList.getColumn(i, "CHK") == 1)
        			{
        				var nrow = this.dsCancel.addRow();
        				this.dsCancel.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE").replace(/-/gi, ""));
        				this.dsCancel.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        			}
        		}

        		if (this.dsCancel.rowcount == 0) return;

        		var strSvcId    = "cancel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "cancel=dsCancel";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        	}
        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        // 전표상세조회
        this.fnDetailSlip = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var nRow = this.dsList.rowposition
        	var CD_TRADE = this.dsList.getColumn(nRow, "CD_TRADE");
        	if(!this.gfnIsNull(CD_TRADE)){
        		var param = {};
        		param.IUD_FLAG = this.dsList.getColumn(nRow, "YN_APPR")  == "미승인" ? "U" : "S";
        		param.CD_TRADE = CD_TRADE.replace(/-/gi, "");

        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "fnPopupCallBack", param);
        	}
        }

        this.fnPopupCallBack = function(svcID, val) {
         	//if(!this.gfnIsNull(val)) {	//정상처리 되었으면 재조회 처리
        		this.FormBtns.Select.click();
        	//}
        };

        // 자금신청품의서 조회
        this.fnRequest = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var nRow = this.dsList.rowposition
        	var CD_TRADE = this.dsList.getColumn(nRow, "CD_TRADE");
        	var DT_REQ = this.dsList.getColumn(nRow, "DT_ACCOUNT");

        	if(!this.gfnIsNull(CD_TRADE)){
        		var param = {};

        		param.CD_TRADE = CD_TRADE.replace(/-/gi, "");
        		param.DT_REQ = DT_REQ.replace(/-/gi, "");

        		this.gfnFormOpen("DFB", "DFB_REQUESTLIST_APRV", "fnPopupReqCallBack", param);
        	}

        }

        this.fnPopupReqCallBack = function(svcID, val) {
         	//if(!this.gfnIsNull(val)) {	//정상처리 되었으면 재조회 처리
        		//this.FormBtns.Select.click();
        	//}
        };

        // 승인결재
        this.fnApprove = function(obj,e)
        {
        	// 결재
        	this.gfnAlert("승인결재");
        }

        // 취소전표발행
        this.fnReverseSlip = function(obj,e)
        {

        	var CD_AUTOSLIP = this.dsList.getColumn(this.dsList.rowposition, "CD_AUTOSLIP");	// 자동전표
        	if(!this.gfnIsNull(CD_AUTOSLIP)){
        		//this.gfnAlert("자동전표는 역분개 전표를 발행할 수 없습니다.");
        		this.gfnConfirm("자동전표는 역분개 전표를 발행할 수 없습니다. 그래도 발행하시겠습니까?", "fnReverseSlip_callback");
        		return;
        	}else{
        		this.fnReverseSlipPopup();
        	}
        }

        this.fnReverseSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.fnReverseSlipPopup();
        	}
        }

        this.fnReverseSlipPopup = function() {
        	var param = {};
         	param.CD_SLIP = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE").replace(/-/gi, ""));
        	param.DS_TITLE = "취소전표발행";
         	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DHA_REVERSESLIPDLG", "fnReverseSlipPopupCallback", param, 320, 170);

        }
        /*
        this.fnReverseSlip = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {

        	var CD_AUTOSLIP = this.dsList.getColumn(this.dsList.rowposition, "CD_AUTOSLIP");	// 자동전표
        	if(!this.gfnIsNull(CD_AUTOSLIP)){
        		this.gfnAlert("자동전표는 역분개 전표를 발행할 수 없습니다.");
        		return;
        	}

        	var param = {};

         	param.CD_SLIP = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE").replace(/-/gi, ""));
        	param.DS_TITLE = "취소전표발행";
         	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DHA_REVERSESLIPDLG", "fnReverseSlipPopupCallback", param, 320, 170);
        }
        */

        //취소전표발행 팝업 콜백
        this.fnReverseSlipPopupCallback = function(svcID, val) {

         	if(!this.gfnIsNull(val)) {
        		var CD_SLIP = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE").replace(/-/gi, ""));

        		this.dsReverseSlip.clearData();
        		var nrow = this.dsReverseSlip.addRow();
        		this.dsReverseSlip.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsReverseSlip.setColumn(nrow, "CD_TRADE", CD_SLIP);
        		this.dsReverseSlip.setColumn(nrow, "CD_DEPT_BH", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_BH"));	// 발행부서코드
        		this.dsReverseSlip.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        		this.dsReverseSlip.setColumn(nrow, "DT_ACCOUNT", val);

        		var strSvcId    = "reverseSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "reverseSlip=dsReverseSlip";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        			strSvcType , 	// transaction을 요청할 구분
        			inProc,			// Procedure 정보 Dataset 이름
        			inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        			outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        			strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        			callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        // 결재문서
        //this.fnDocument = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        this.fnDocument = function()
        {

        	var param = {};
        	var rem = this.dsList.getColumn(this.dsList.rowposition, "REM");
        	var cdTrade = nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"),"")), "-","");
        /*
        	param.V1 = cdTrade;		// 전표번호
        // 	param.V2 = "";
        // 	param.V3 = "";
        // 	param.V4 = "";
        	param.ID_AP = this.dsList.getColumn(this.dsList.rowposition, "NO_DOC");	// 전자결재문서번호
        	param.DS_ETITLE = rem;

        	//this.gfnFormOpen("DHA", "DHA_ISSUESLIP_APP", "fnAprvDialogCallback", param, 1200, 700);
        */
        	var NO_DOC = this.dsList.getColumn(this.dsList.rowposition, "NO_DOC");	// 전자결재문서번호
        	var CD_AUTOSLIP = this.dsList.getColumn(this.dsList.rowposition, "CD_AUTOSLIP");	// 자동전표
        	var YN_CD_AUTOSLIP = (this.gfnIsNull(CD_AUTOSLIP)) ? "Y" : "N";
        	var YN_RELATED = this.gfnNvl(this.dsListSub.getColumn(0, "YN_RELATED"),"N");
        	var CD_DEPT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_BH");	// 귀속부서가 재무회계팀(J20003)
        	var Pyn = (CD_DEPT == "J20003") ? "N" : YN_RELATED;
        	var isView = (this.AuthClient.CD_DEPT == "J20003" || this.AuthClient.CD_DEPT == "J20004") ? "Y" : "N";	// 재무회계팀(J20003), 복합금융팀(J20004)
        	var ID_USER = (this.AuthClient.ID_USER == "ERP1") ? "8300103" : this.AuthClient.ID_USER;
        	var TY_CLOSING = this.dsList.getColumn(this.dsList.rowposition, "TY_CLOSING");	// 전표유형
        	//var sLegacyFormID = (CD_AUTOSLIP == "DFB0001" || CD_AUTOSLIP == "DFL0001" || (TY_CLOSING == "03" && this.AuthClient.CD_DEPT == "J20004")) ? "DSMEC_SLIP_DETAIL_DEPOSITS" : "DSMEC_SLIP_DETAIL";
        	// DFB0001 미지급반제 OR DFL0001 예금간대체
        	// J20004 복합금융팀 AND 03 입금전표
        	var sLegacyFormID = "DSMEC_SLIP_DETAIL";

        	// 공통코드 A30 결재문서 동전표코드(LegacyFormID)
        	this.dsCD_A30.filter("CD_CODE == '"+CD_AUTOSLIP+"'");
        	var nAutoSlipCnt = this.dsCD_A30.rowcount;
        	this.dsCD_A30.filter("");

        	if((TY_CLOSING == "03" && this.AuthClient.CD_DEPT == "J20004") || nAutoSlipCnt > 0)
        	{
        		sLegacyFormID = "DSMEC_SLIP_DETAIL_DEPOSITS";
        	}
        	/*
        	if((TY_CLOSING == "03" && this.AuthClient.CD_DEPT == "J20004") || CD_AUTOSLIP =='DFL0003'
        			|| CD_AUTOSLIP == "DFB0001" || CD_AUTOSLIP == "DFL0001" || CD_AUTOSLIP == "DFL0002"
        			|| CD_AUTOSLIP == "DFG0002" || CD_AUTOSLIP == "DFG0003" || CD_AUTOSLIP == "DFG0004"
        			|| CD_AUTOSLIP == "DFG0005" || CD_AUTOSLIP == "DFC0001" || CD_AUTOSLIP == "DFC0002"
        			|| CD_AUTOSLIP == "DFC0004" || CD_AUTOSLIP == "DFC0005" || CD_AUTOSLIP == "DFC0006"
        			|| CD_AUTOSLIP == "DFE0001" || CD_AUTOSLIP == "DFE0002" || CD_AUTOSLIP == "DFE0003"
        			|| CD_AUTOSLIP == "DFE0004" || CD_AUTOSLIP == "DFE0005" || CD_AUTOSLIP == "DFE0006"
        			|| CD_AUTOSLIP == "DFD0001" || CD_AUTOSLIP == "DFD0002" || CD_AUTOSLIP == "DFF0001"
        			|| CD_AUTOSLIP == "DFF0002" || CD_AUTOSLIP == "DFF0003" || CD_AUTOSLIP == "DFF0004"
        			|| CD_AUTOSLIP == "DFF0005" || CD_AUTOSLIP == "DFF0006" || CD_AUTOSLIP == "DHA0010"
        	)
        	{
        		sLegacyFormID = "DSMEC_SLIP_DETAIL_DEPOSITS";
        	}
        	*/

        	// J20004 복합금융팀 03 입금전표

        	//sLegacyFormID= "DSMEC_SLIP_DETAIL";

        	// 그룹웨어전자결재URL
        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	if(this.gfnIsNull(NO_DOC)){
        		// 전자결재문서 상신
        		url = url+"approval/legacy/goFormLink.do?legacyFormID=" + sLegacyFormID;
        		url += "&mode=DRAFT";
        		url += "&ID_USER=" + ID_USER;
        		url += "&pYn="+ "Y";
        		url += "&DS_KEY1=" + cdTrade;  // 전표번호
        		url += "&DS_KEY2=&DS_KEY3=&DS_KEY4=&DS_KEY5=";

        	}else{
        		// 전자결재문서 조회
        		url = url+"approval/legacy/goFormLink.do?";
        		url +="mode=complete";
        		//url += "&isView="+ isView;
        		url += "&isView="+ "Y";
        		url +="&ID_USER=" + ID_USER;
        		url +="&fiid=" + NO_DOC;
        	}

        	trace("전자결재->" + url);

        	var new_window = window.open(url,"_blank", "width=1386,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        	//new_window.onbeforeunload = this.fnAprvDialogCallback();

        	/*
        	http://dev.gw.dsmec.co.kr/approval/legacy/goFormLink.do?legacyFormID=DSMEC_SLIP_DETAIL&mode=DRAFT&ID_USER=9200295&DS_KEY1=20211005010009&DS_KEY2=&DS_KEY3=&DS_KEY4=&DS_KEY5=
        	*/
        }

        // 전자결재 - 자금 계정이 포함한 전표확인
        this.fnCheckAuthApproval = function(obj,e){

        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 처리하세요.", "");
        		return;
        	}

        	this.dsAuthGwAppr.clearData();
        	var nrow = this.dsAuthGwAppr.addRow();

        	var cdTrade = nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"),"")), "-","");
        	this.dsAuthGwAppr.setColumn(nrow, "CD_DEPT_BE", this.AuthClient.CD_DEPT);
        	this.dsAuthGwAppr.setColumn(nrow,"CD_TRADE", cdTrade);

        	var strSvcId    = "selectAuthGwAppr";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectAuthGwAppr=dsAuthGwAppr";
        	var outData     = "dsAuthGwApprList=selectAuthGwAppr0";
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

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	//if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	//}
        };

        //적요/순번
        this.fnRemUpdate = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE").replace(/-/gi, "");

        	this.gfnFormOpen("DHA", "DHA_SLIPMODIFY", "", param);
        }

        // 전표출력(미리보기)
        this.fnSlipPrintPreview = function(obj,e)
        {
        	var param = {};
        	var trades = [];

        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == 1)
        		{
        			// 이게 될지 모르겠음.
        			trades.push(this.dsList.getColumn(i, "CD_TRADE"));
        		}
        	}

        	param.DIRECT_PRINT = false;
        	param.CD_TRADE = trades;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUEPRINTCOVERDLG", "", param);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboTY_GUBUN.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ccboTY_COMBO.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ccboCD_AUTOSLIP.addEventHandler("onitemchanged",this.divSearch_ccboTY_PAY_onitemchanged,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataTop.form.objGrid.addEventHandler("oncelldblclick",this.divData_divDataTop_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_SLIPAPPR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
