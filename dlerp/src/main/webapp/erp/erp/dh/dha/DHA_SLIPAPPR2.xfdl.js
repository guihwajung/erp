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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_SLIPLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DHAPR_SLIP_DETAIL</Col></Row><Row><Col id=\"SP\">DHAPR_SLIP_TRANSFER</Col><Col id=\"TARGET\">appr</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DHAPR_SLIP_REVERSE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_SLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">selectDtReq</Col><Col id=\"SP\">DHAPR_SLIP_DT_MIBUL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PAPER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DATE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DATE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SEMOK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TOACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TOSEMOK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_COMBO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PAY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">전체</Col><Col id=\"CODE\">%</Col></Row><Row><Col id=\"VALUE\">인사</Col><Col id=\"CODE\">DA</Col></Row><Row><Col id=\"VALUE\">공사</Col><Col id=\"CODE\">DW</Col></Row><Row><Col id=\"CODE\">DC</Col><Col id=\"VALUE\">외주</Col></Row><Row><Col id=\"CODE\">DM</Col><Col id=\"VALUE\">자재</Col></Row><Row><Col id=\"CODE\">DS</Col><Col id=\"VALUE\">노무</Col></Row><Row><Col id=\"CODE\">DF</Col><Col id=\"VALUE\">자금</Col></Row><Row><Col id=\"CODE\">DH</Col><Col id=\"VALUE\">회계</Col></Row><Row><Col id=\"CODE\">DL</Col><Col id=\"VALUE\">영업</Col></Row><Row><Col id=\"CODE\">DB</Col><Col id=\"VALUE\">하자</Col></Row><Row><Col id=\"CODE\">DG</Col><Col id=\"VALUE\">총무</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_SYSTEM", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">발행부서</Col><Col id=\"CODE\">BH</Col></Row><Row><Col id=\"VALUE\">귀속부서</Col><Col id=\"CODE\">BE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">M</Col><Col id=\"VALUE\">일반</Col></Row><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">자동</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN1", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">승인</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">미승인</Col></Row><Row><Col id=\"CODE\">X</Col><Col id=\"VALUE\">취소요청</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN2", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">BH</Col><Col id=\"VALUE\">발행일자</Col></Row><Row><Col id=\"CODE\">BE</Col><Col id=\"VALUE\">회계일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsObj2", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">거래처</Col></Row><Row><Col id=\"CODE\">E</Col><Col id=\"VALUE\">기타1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtReq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCdApp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","130",null,null,"0","0",null,null,null,null,this);
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

            obj = new Grid("objGrid","0","28",null,null,"0","5",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","3",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divTotal","0",null,null,"32","0","8",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta03","0","2",null,"30","0",null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new MaskEdit("mskSUM_CRDR01","297","7","75","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            obj.set_format("#,###");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new Static("sta01","mskSUM_CRDR01:21","7","60","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("10");
            obj.set_text("승인합계");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new MaskEdit("mskSUM_CRDR00","sta01:-6","7","145","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.set_format("#,###");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new Static("sta04","mskSUM_CRDR00:21","7","60","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("6");
            obj.set_text("미승인건수");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_DR","sta04:14","7","75","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("5");
            obj.set_limitbymask("both");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new Static("sta05","mskAM_DR:21","7","60","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("4");
            obj.set_text("미승인합계");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CR","sta05:14","7","115","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_limitbymask("both");
            obj.set_format("#,###");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new Static("sta06","mskAM_CR:21","7","60","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("2");
            obj.set_text("차대변합계");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new MaskEdit("mskCOUNT","sta06:14","7","115","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("1");
            obj.set_format("#,###");
            obj.set_limitbymask("both");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new Static("sta00","233","7","60","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("9");
            obj.set_text("승인건수");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new Div("divSearch","divData:0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQ","0.0","staCD_CORP:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("자동전표코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQ_FROM","staDT_REQ:0.0","staCD_CORP:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQ00","ctclDT_REQ_FROM:0.0","staCD_CORP:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQ_TO","staDT_REQ00:0.0","staCD_CORP:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","ctclDT_REQ_TO:0.0","staCD_CORP:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("전표구분");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BH","0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT2");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0.0","staCD_CORP:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("발행자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFIDSABUN");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staACC_CD","ccfCD_VENDOR:0.0","staCD_CORP:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("계정코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfACC_CD","staACC_CD:0.0","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNT_SLIP_AND_TRIAL");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR01","ccfACC_CD:0.0","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFAUTOSLIP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_SYSTEM","ccfCD_VENDOR01:0.0","staCD_CORP:10.0","83","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_innerdataset("dsCD_SYSTEM");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_visible("false");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_SYSTEM01","ccboCD_SYSTEM:0.0","staCD_CORP:10.0","73","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsObj2");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfACC_CD00","ccboCD_SYSTEM01:0.0","staCD_CORP:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFALLVENDOR_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM00","ccfACC_CD00:0.0","staCD_CORP:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("승인여부");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("ccrdTY_GUBUN","staCD_SYSTEM00:0.0","staCD_CORP:10.0","230","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_columncount("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staACC_CD00","ccrdTY_GUBUN:0.0","staCD_CORP:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("전표번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_PAY","staACC_CD00:0.0","staCD_CORP:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsTY_PAY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("ccrdTY_GUBUN01","ccboTY_PAY:0.0","staCD_CORP:10.0","304","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_columncount("4");
            obj.set_direction("horizontal");
            obj.set_innerdataset("dsTY_GUBUN1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staACC_CD01","ccrdTY_GUBUN01:0.0","staCD_CORP:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("적요");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("ccrdTY_GUBUN02","staACC_CD01:0.0","staCD_CORP:10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_GUBUN2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_columncount("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE","staACC_CD00:0.0","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_REM","staACC_CD01:0.0","staCD_CORP:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staACC_CD02","txtDS_REM:0.0","staCD_CORP:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("계정코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfACC_CD01","staACC_CD02:0.0","staCD_CORP:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNT_SLIP_AND_TRIAL");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BE","0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BH","ccfCD_DEPT_BE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("발행부서");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BE","staCD_DEPT_BH:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("귀속부서");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccboCD_SYSTEM","text","dsSearch","TY_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboCD_SYSTEM01","value","dsSearch","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboTY_PAY","value","dsSearch","TY_AUTOSLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboCD_SYSTEM","value","dsSearch","TY_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccrdTY_GUBUN","value","dsSearch","YN_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccrdTY_GUBUN01","value","dsSearch","YN_PAPER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccrdTY_GUBUN02","value","dsSearch","TY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.txtDS_REM","value","dsSearch","DS_REM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.txtCD_TRADE","value","dsSearch","CD_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT_BE.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT_BH.form.CDTextBox","value","dsSearch","CD_DEPT2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_SLIPAPPR2.xfdl", function() {
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

        	this.ccfCD_VENDOR01.form.set_readonly(true);

        	this.ccfCD_CORP.form.CDTextBox.setFocus();

        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        		this.ccfCD_DEPT_BH.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        		this.ccfCD_DEPT_BH.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.staCD_DEPT_BH.set_textDecoration("underline");
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
        	this.btnApprove     = this.gfnFormButtonAdd("Approve"   , "fnApprove");			//전표결제
        	this.btnSchApprove  = this.gfnFormButtonAdd("SchApprove", "fnSchApprove");		//결제조회
        	this.btnSlipDelete  = this.gfnFormButtonAdd("SlipDelete", "fnSlipDelete");		//전표삭제
        	this.btnSlipDetail  = this.gfnFormButtonAdd("SlipDetail", "fnSlipDetail");		//전표상세조회

        	this.btnApprove.set_enable(false);
        	this.btnSchApprove.set_enable(false);
        	this.btnSlipDelete.set_enable(false);
        	this.btnSlipDetail.set_enable(false);

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_BH = this.divSearch.form.ccfCD_DEPT_BH;
        	this.ccfCD_DEPT_BE = this.divSearch.form.ccfCD_DEPT_BE;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.ccfCD_VENDOR01 = this.divSearch.form.ccfCD_VENDOR01;
        	this.ccfACC_CD = this.divSearch.form.ccfACC_CD;
        	this.ccfACC_CD00 = this.divSearch.form.ccfACC_CD00;
        	this.ccfACC_CD01 = this.divSearch.form.ccfACC_CD01;

        	this.ccboTY_PAY = this.divSearch.form.ccboTY_PAY;
        	this.ccboCD_SYSTEM = this.divSearch.form.ccboCD_SYSTEM;
        	this.ccboCD_SYSTEM01 = this.divSearch.form.ccboCD_SYSTEM01;

        	this.ccrdTY_GUBUN = this.divSearch.form.ccrdTY_GUBUN;
        	this.ccrdTY_GUBUN01 = this.divSearch.form.ccrdTY_GUBUN01;
        	this.ccrdTY_GUBUN02 = this.divSearch.form.ccrdTY_GUBUN02;

        	this.ctclDT_REQ_FROM = this.divSearch.form.ctclDT_REQ_FROM;
        	this.ctclDT_REQ_TO = this.divSearch.form.ctclDT_REQ_TO;

        	this.txtCD_TRADE = this.divSearch.form.txtCD_TRADE;
        	this.txtDS_REM = this.divSearch.form.txtDS_REM;

        	this.staCD_DEPT_BH = this.divSearch.form.staCD_DEPT_BH;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_SLIPAPPRREVER");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHA_SLIPDETAIL");

        	this.ccboTY_PAY.set_index(0);
        	//this.ccboCD_SYSTEM.set_index(0);
        	this.ccboCD_SYSTEM01.set_index(0);

        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ctclDT_REQ_FROM.set_value(this.gfnGetFirstDate(this.gfnGetDate()));
        	this.ctclDT_REQ_TO.set_value(this.gfnGetDate());
        	this.ccfCD_DEPT_BH.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        	this.ccfCD_DEPT_BH.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);

        	this.ccrdTY_GUBUN.set_index(0);
        	this.ccrdTY_GUBUN01.set_index(0);
        	this.ccrdTY_GUBUN02.set_index(0);

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_BH.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_BE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfACC_CD.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfACC_CD00.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfACC_CD01.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR01.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged"
        	this.ccfCD_DEPT_BH.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT_BE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfACC_CD.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfACC_CD00.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfACC_CD01.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_VENDOR01.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	// 셀 변경 후 이벤트
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        	// 전체체크박스 체크/해제 이벤트
        	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";
        	/*this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);*/
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("TY_DEPT", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("CD_DEPT2", "string");
        	this.dsSelect.addColumn("YN_APPR", "string");
        	this.dsSelect.addColumn("YN_PAPER", "string");
        	this.dsSelect.addColumn("TY_DATE", "string");
        	this.dsSelect.addColumn("DT_DATE_FR", "string");
        	this.dsSelect.addColumn("DT_DATE_TO", "string");
        	this.dsSelect.addColumn("CD_AUTOSLIP", "string");
        	this.dsSelect.addColumn("TY_AUTOSLIP", "string");
        	this.dsSelect.addColumn("CD_TRADE", "string");
        	this.dsSelect.addColumn("CD_TRADE_APPR", "string");
        	this.dsSelect.addColumn("CD_ACCOUNT", "string");
        	this.dsSelect.addColumn("CD_SEMOK", "string");
        	this.dsSelect.addColumn("CD_TOACCOUNT", "string");
        	this.dsSelect.addColumn("CD_TOSEMOK", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("TY_VENDOR", "string");
        	this.dsSelect.addColumn("TY_COMBO", "string");
        	this.dsSelect.addColumn("DS_REM", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_TRADE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("IN_CD_TRADE", "string");
        	this.dsInsert.addColumn("IN_TY_SLIP", "string");
        	this.dsInsert.addColumn("ID_APPR", "string");
        	this.dsInsert.addColumn("ID_TRANS", "string");
        	this.dsInsert.addColumn("CD_TRADE", "string");

        	this.dsSelectDtReq = new Dataset();
        	this.dsSelectDtReq.addColumn("CD_TRADE", "string");
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

        	this.dsSelect.setColumn(0,"CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	//this.dsSelect.setColumn(0,"TY_DEPT", this.ccboCD_SYSTEM.value);
        	this.dsSelect.setColumn(0,"CD_DEPT", this.ccfCD_DEPT_BE.form.CDTextBox.text);
        	this.dsSelect.setColumn(0,"CD_DEPT2", this.ccfCD_DEPT_BH.form.CDTextBox.text);
        	this.dsSelect.setColumn(0,"YN_APPR", this.ccrdTY_GUBUN01.value);
        	/*this.dsSelect.setColumn(0,"YN_PAPER", this.ccrdTY_GUBUN.value);*/
        	this.dsSelect.setColumn(0,"TY_DATE", this.ccrdTY_GUBUN02.value);
        	this.dsSelect.setColumn(0,"DT_DATE_FR", this.ctclDT_REQ_FROM.value);
        	this.dsSelect.setColumn(0,"DT_DATE_TO", this.ctclDT_REQ_TO.value);
        	this.dsSelect.setColumn(0,"CD_AUTOSLIP", this.ccboTY_PAY.value == "%" ? this.ccfCD_VENDOR01.form.CDTextBox.text :  (this.ccfCD_VENDOR01.form.CDTextBox.text == "" ? this.ccboTY_PAY.value : this.ccfCD_VENDOR01.form.CDTextBox.text));
        	this.dsSelect.setColumn(0,"TY_AUTOSLIP", this.ccrdTY_GUBUN.value);
        	this.dsSelect.setColumn(0,"CD_TRADE", nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.txtCD_TRADE.value,"")), "-",""));
        	/*this.dsSelect.setColumn(0,"CD_TRADE_APPR",this.txtCD_TRADE.value);*/
        	this.dsSelect.setColumn(0,"CD_ACCOUNT", this.ccfACC_CD01.form.CDTextBox.text);
        	/*this.dsSelect.setColumn(0,"CD_SEMOK", "");*/
        	this.dsSelect.setColumn(0,"CD_TOACCOUNT", this.ccfACC_CD.form.CDTextBox.text);
        	/*this.dsSelect.setColumn(0,"CD_TOSEMOK", "");*/
        	this.dsSelect.setColumn(0,"CD_VENDOR", this.ccfACC_CD00.form.CDTextBox.text);
        	/*this.dsSelect.setColumn(0,"TY_VENDOR", this.ccboCD_SYSTEM01.value);	*/
        	this.dsSelect.setColumn(0,"TY_COMBO", this.dsSearch.getColumn(0, "TY_COMBO"));
        	this.dsSelect.setColumn(0,"DS_REM", this.txtDS_REM.value);
        	this.dsSelect.setColumn(0,"ID_SABUN", this.ccfCD_VENDOR.form.CDTextBox.text);

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
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
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
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.ctclDT_REQ_FROM.value)||this.gfnIsNull(this.ctclDT_REQ_TO.value)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			if(this.gfnIsNull(this.ctclDT_REQ_FROM.value)){
        			this.ctclDT_REQ_FROM.setFocus();
        			} else if(this.gfnIsNull(this.ctclDT_REQ_FROM.value)) {
        			this.ctclDT_REQ_TO.setFocus();
        			}
        		}
        		this.gfnAlert("발의 일자를 입력하세요!", "fnVaidateCallback");
        	}

        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        		if (this.gfnIsNull(this.ccfCD_DEPT_BH.form.CDTextBox.value)) {
        			validate = false;
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.ccfCD_DEPT_BH.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("발행부서를 입력하세요!", "fnVaidateCallback");
        		}
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
        		/*this.gfnGridAfterSelect(this.dxGridSub);*/
        		if (this.dsList.rowcount > 0) {
        			this.btnSlipDetail.set_enable(true);
        		}

        		this.btnApprove.set_enable(false);
        		this.btnSchApprove.set_enable(false);
        	}
        	else if (svcID == "detail") {
        		var cdApp = this.dsList.getColumn(this.dsList.rowposition, "CD_APP");

        		trace("### cdApp :: "+cdApp);

        		if(!this.gfnIsNull(cdApp) && (cdApp == "1" || cdApp == "2")){
        			this.btnApprove.set_enable(false);
        			this.btnSchApprove.set_enable(true);
        		} else {
        			this.btnApprove.set_enable(true);
        			this.btnSchApprove.set_enable(false);
        		}


        		if (this.dsList.rowcount < 1) {
        			this.dsListSub.clearData();
        		}
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        	else if (svcID == "appr") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "cancel") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "delete") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "selectDtReq") {
        		if (errorCode == 0) {

        			var dtReq = "";
        			if(this.dsDtReq.rowcount > 0){
        				dtReq = this.dsDtReq.getColumn(0, "DT_REQ");
        			}

        			var cdApp = "";
        			if(this.dsCdApp.rowcount > 0){
        				cdApp = this.dsCdApp.getColumn(0, "CD_APP");
        			}

        			if(cdApp == "1" || cdApp == "2"){
        				this.gfnAlert("이미 결재상신 중 입니다.");
        				return;
        			}

        			var rowPos = this.dsList.rowposition;
        			var dtAccount = this.dsList.getColumn(rowPos, "DT_ACCOUNT");
        			dtAccount = dtAccount.substr(0,4)+"-" + dtAccount.substr(4,2) + "-" + dtAccount.substr(6,2);

        			var txtSubject = this.gfnNvl(this.dsList.getColumn(rowPos, "DS_CORP"),"");										//법인명
        			txtSubject += " / "+ (this.gfnIsNull(this.dsList.getColumn(rowPos, "CD_AUTOSLIP")) ? "일반전표" : this.dsList.getColumn(rowPos, "CD_AUTOSLIP"));
        			txtSubject += " / "+ this.gfnNvl(this.dsList.getColumn(rowPos, "DS_HNAME"),"");									//작성자
        			txtSubject += " / "+ nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(rowPos, "DS_DEPT_BH"),""),"&","");	//발행부서
        			txtSubject += " / "+ this.gfnNvl(dtAccount,"");		                                    						//회계일자
        			txtSubject += " / 자금 : "+ this.gfnNvl(dtReq,"");																//자금요청일
        			txtSubject += " / "+ nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(rowPos, "REM"),""),"&","");			//대표적요
        			txtSubject += " / "+ this.gfnAppendComma(nexacro.toNumber(this.dsList.getColumn(rowPos, "AM_DRSUM"),0));		//금액

        			var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        			url = url+"approval/legacy/goFormLink.do?mode=DRAFT&legacyFormID=WF_FORM_ERP_SLIP";
        			url += "&subject="+encodeURI(txtSubject);
        			url += "&dataType=proc";
        			url += "&empno="+this.AuthClient.ID_USER;
        			url += "&P_DS_KEY1="+nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(rowPos , "CD_TRADE"),""),"-","");  // 전표번호
        			url += "&P_DS_KEY2=&P_DS_KEY3=&P_DS_KEY4=&P_DS_KEY5=";

        			trace("### 전표결재 url :: "+url);

        			window.open(url, "_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {

        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "ccfCD_DEPT_BH") {
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요!", "fnVaidateCallback");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "0000000");
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "");
        		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"	    , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        	}
        	if (id == "ccfCD_DEPT_BE") {
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요!", "fnVaidateCallback");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "0000000");
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "");
        	}
        	if (id == "ccfACC_CD") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR" , "X");		//X   CD_VENDOR
        		dsUserParam.setColumn(nrow, "YN_RELATED", "");		//X   CD_VENDOR
        	}
        	if (id == "ccfACC_CD00") {
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요!", "fnVaidateCallback");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);
        	}
        	if (id == "ccfACC_CD01") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR" , "X");		//X   CD_VENDOR
        		dsUserParam.setColumn(nrow, "YN_RELATED", "");		//X   CD_VENDOR
        	}
        	if (id == "ccfCD_VENDOR01") {
        		dsUserParam.setColumn(nrow, "TY_AUTOSLIP", this.ccboTY_PAY.value);
        	}
        	if (id == "ccfCD_VENDOR") {
        // 		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 			// Alert후 실행할 처리
        // 			this.fnVaidateCallback = function() {
        // 				this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 			}
        // 			this.gfnAlert("법인코드를 입력하세요!", "fnVaidateCallback");
        // 			return false;
        // 		}

        		dsUserParam.setColumn(nrow, "YN_OFFICER", "01");
        		//dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);
        	}
        	return true;
        }


        this.fnAfterCDTextChanged = function(id, codeFindData) {
        // 	if(!this.gfnIsNull(this.ccfSite.form.CDTextBox.value)) {
        // 		this.objApp.DW_SPACE01 = this.ccfSite.form.CDTextBox.value;
        // 		this.objApp.DW_SPACE02 = this.ccfSite.form.DSTextBox.value;
        // 	}
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_DEPT_BH.form.fnCodeFindClear();
        		this.ccfCD_DEPT_BE.form.fnCodeFindClear();
        		this.ccfACC_CD00.form.fnCodeFindClear();
        		this.ccfCD_VENDOR.form.fnCodeFindClear();
        	}
        	this.fnSearchInit();

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

        this.fnGrid_AfterEdit = function(obj,e) {
        	/*if (!this.gfnGridIsRow(this.dxGrid)) return;*/
        	var appr = this.ccrdTY_GUBUN01.value;

        	var arrChk = [];
        	var grdYNAPPRsY = [];
        	var grdYNAPPRsN = [];
        	var grdYNAPPRs = [];
        	var grdYNCANCEL = [];

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "chk") == 1) {
        			arrChk.push(i);
        			var YN_APPR = this.dsList.getColumn(i,"YN_APPR");
        			if(YN_APPR == "승인") {
        				grdYNAPPRsY.push(YN_APPR);
        			} else if(YN_APPR == "미승인") {
        				grdYNAPPRsN.push(YN_APPR);
        			}

        			var YN_CANCEL = this.dsList.getColumn(i,"YN_CANCEL");
        			if(YN_CANCEL == "Y"){
        				grdYNCANCEL.push(YN_CANCEL);
        			}
        		}
        	}

        	if(e.columnid == "chk") {
        	   if(e.oldvalue != e.newvalue) {
        		trace("$$$ arrChk.length :: "+arrChk.length);
        		trace("$$$ grdYNAPPRsY.length :: "+grdYNAPPRsY.length);
        		trace("$$$ grdYNAPPRsN.length :: "+grdYNAPPRsN.length);
        		trace("$$$ grdYNCANCEL.length :: "+grdYNCANCEL.length);

        		if(arrChk.length < 1 || (grdYNAPPRsY.length > 0 && grdYNAPPRsN.length > 0)) {
        // 				this.btnSlipAppr.set_enable(false);
        // 				this.btnSlipCancel.set_enable(false);
        				this.btnSlipDelete.set_enable(false);
        		} else if(grdYNAPPRsN.length > 0 && grdYNAPPRsY.length < 1) {
        // 				this.btnSlipAppr.set_enable(true);
        // 				this.btnSlipCancel.set_enable(false);
        				this.btnSlipDelete.set_enable(true);
        		} else if(grdYNAPPRsY.length > 0 &&  grdYNAPPRsN.length < 1) {
        			trace("$$$ 들어옴 ");

        			if(grdYNCANCEL.length > 0){
        // 				this.btnSlipAppr.set_enable(false);
        // 				this.btnSlipCancel.set_enable(false);
        				this.btnSlipDelete.set_enable(true);
        			}else{
        // 				this.btnSlipAppr.set_enable(false);
        // 				this.btnSlipCancel.set_enable(true);
        				this.btnSlipDelete.set_enable(false);
        			}
        		}

        		if(e.oldvalue == 1) return false;
        		if(grdYNAPPRsN.length >= 1 && grdYNAPPRsY.length < 1) {

        // 			this.btnSlipAppr.set_enable(true);
        // 			this.btnSlipCancel.set_enable(false);
        			this.btnSlipDelete.set_enable(true);
        		}
        		else if(grdYNAPPRsY.length >= 1 && grdYNAPPRsN.length < 1) {
        			if(grdYNCANCEL.length > 0){
        // 				this.btnSlipAppr.set_enable(false);
        // 				this.btnSlipCancel.set_enable(false);
        				this.btnSlipDelete.set_enable(true);
        			}else{
        // 				this.btnSlipAppr.set_enable(false);
        // 				this.btnSlipCancel.set_enable(true);
        				this.btnSlipDelete.set_enable(false);
        			}
        		}
        		else {
        // 			if(arrChk.length > 1 && this.dsList.getColumn(e.row, "chk") == 1 && this.dsList.getColumn(e.row,"YN_APPR")=="미승인" && grdYNAPPRsN.length == 1) {
        // 				this.gfnAlert("동일한 승인구분으로 선택하셔야 합니다.");
        // 				this.dsList.setColumn(e.row, "chk", 0);
        // 				this.btnSlipAppr.set_enable(false);
        // 				this.btnSlipCancel.set_enable(true);
        // 				this.btnSlipDelete.set_enable(false);
        // 			}
        // 			else if(arrChk.length > 1 && this.dsList.getColumn(e.row, "chk") == 1 && this.dsList.getColumn(e.row,"YN_APPR")=="승인" && grdYNAPPRsY.length == 1) {
        // 				this.gfnAlert("동일한 승인구분으로 선택하셔야 합니다.");
        // 				this.dsList.setColumn(e.row, "chk", 0);
        // 				this.btnSlipAppr.set_enable(true);
        // 				this.btnSlipCancel.set_enable(false);
        // 				this.btnSlipDelete.set_enable(true);
        // 			}
        		}
        	  }
        	}
        }

        this.fnGrid_AfterAllCheck = function(obj, cell, check) {
        	var appr = this.ccrdTY_GUBUN01.value;
        	var arrChk = [];
        	var grdYNAPPRsY = [];
        	var grdYNAPPRsN = [];

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "chk") == 1) {
        			var YN_APPR = this.dsList.getColumn(i,"YN_APPR");
        			arrChk.push(i);
        			if(YN_APPR == "승인") {
        				grdYNAPPRsY.push(YN_APPR);
        			} else if(YN_APPR == "미승인") {
        				grdYNAPPRsN.push(YN_APPR);
        			}
        		}
        	}

        	trace("### appr :: "+appr);
        	trace("### grdYNAPPRsY.length :: "+grdYNAPPRsY.length);
        	trace("### grdYNAPPRsN.length :: "+grdYNAPPRsN.length);

        	if(appr == "") {
        		if(grdYNAPPRsY.length>0 && grdYNAPPRsN.length<1) {
        // 			this.btnSlipAppr.set_enable(false);
        // 			this.btnSlipCancel.set_enable(true);
        			this.btnSlipDelete.set_enable(false);
        		} else if(grdYNAPPRsY.length<1 && grdYNAPPRsN.length>0) {
        // 			this.btnSlipAppr.set_enable(true);
        // 			this.btnSlipCancel.set_enable(false);
        			this.btnSlipDelete.set_enable(true);
        		} else {
        // 			this.btnSlipAppr.set_enable(false);
        // 			this.btnSlipCancel.set_enable(false);
        			this.btnSlipDelete.set_enable(false);
        		}
        	}
        	else if(appr == "Y") {
        		if(grdYNAPPRsY.length>0) {
        // 			this.btnSlipAppr.set_enable(false);
        // 			this.btnSlipCancel.set_enable(true);
        			this.btnSlipDelete.set_enable(false);
        		} else {
        // 			this.btnSlipAppr.set_enable(false);
        // 			this.btnSlipCancel.set_enable(false);
        			this.btnSlipDelete.set_enable(false);
        		}
        	}

        	else if(appr == "N") {
        		if(grdYNAPPRsN.length>0) {
        // 			this.btnSlipAppr.set_enable(true);
        // 			this.btnSlipCancel.set_enable(false);
        			this.btnSlipDelete.set_enable(true);
        		} else {
        // 			this.btnSlipAppr.set_enable(false);
        // 			this.btnSlipCancel.set_enable(false);
        			this.btnSlipDelete.set_enable(false);
        		}
        	} else if(appr == "X") {
        		if(grdYNAPPRsY.length>0) {
        // 			this.btnSlipAppr.set_enable(false);
        // 			this.btnSlipCancel.set_enable(false);
        			this.btnSlipDelete.set_enable(true);
        		} else {
        // 			this.btnSlipAppr.set_enable(false);
        // 			this.btnSlipCancel.set_enable(false);
        			this.btnSlipDelete.set_enable(false);
        		}
        	}

        // 	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        // 	if(colnm == "CHK") {
        // 		trace("fnGrid_AfterAllCheck] " + cell + "," + check);
        // 	}
        }


        // this.dsList_canrowposchange = function(obj:nexacro.NormalDataset,e:nexacro.DSRowPosChangeEventInfo) {
        // 	var can_rowchange = true;
        // 	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsListSub, i);
        // 		if (flag == "I" || flag == "U" || flag == "D") {
        // 			can_rowchange = false;
        // 			break;
        // 		}
        // 	}
        // 	if(!can_rowchange) {
        // 		this._row = e.newrow;
        // 		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        // 	}
        // 	return can_rowchange;
        // }
        //
        // this.dsList_canrowposchange_callback = function(strId, val)
        // {
        // 	if(val == true) {
        // 		this.dsList.set_enableevent(false);
        // 		this.dsList.set_rowposition(this._row);
        // 		this.dsList.set_enableevent(true);
        // 	}
        // }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
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


        //
        // this.fnValidUser = function(r) {
        // 	var msg = "";
        // 	var blnEmpty = true;
        // 	if ((this.dsList.getColumn(r, "CD_SYSTEM") == "DSB" || this.dsList.getColumn(r, "CD_SYSTEM") == "DSC") && this.dsList.getColumn(r, "AM_NOTES") > 0) {
        // 		msg += "노무비는 [어음(전자)지급]을 할 수가 없습니다!!!\r\n";
        // 		blnEmpty = false;
        // 	}
        // 	if (this.dsList.getColumn(r, "CD_SYSTEM") == "DAU" && this.dsList.getColumn(r, "AM_NOTES") > 0) {
        // 		msg += "급여는 [어음(전자)지급]을 할 수가 없습니다!!!\r\n";
        // 		blnEmpty = false;
        // 	}
        // 	if (this.dsList.getColumn(r, "AM_REMAIN") + this.dsList.getColumn(r, "AM_REQUEST") < this.dsList.getColumn(r, "AM_CASH") + this.dsList.getColumn(r, "AM_NOTES")) {
        // 		msg += "청구금액이 청구가능금액을 초과하였습니다.\r\n";
        // 		blnEmpty = false;
        // 	}
        // 	if (this.dsList.getColumn(r, "AM_CASH") == 0 && this.dsList.getColumn(r, "AM_NOTES") == 0) {
        // 		msg += "청구할 금액(현금+어음)이 입력되지 않았습니다.\r\n";
        // 		blnEmpty = false;
        // 	}
        // 	if (this.dsList.getColumn(r, "AM_REMAIN") < this.dsList.getColumn(r, "AM_REQUEST") + this.dsList.getColumn(r, "AM_CASH") + this.dsList.getColumn(r, "AM_NOTES")) {
        // 		msg += "청구금액(현금+어음)은 (잔액-청구중)금액을 초과할수 없습니다.\r\n";
        // 		blnEmpty = false;
        // 	}
        // 	if (this.dsList.getColumn(r, "AM_NOTES") != 0) {
        // 		if (this.gfnIsNull(this.dsList.getColumn(r, "DT_REQ_N"))) {
        // 			msg += "청구금액(어음)이 존재하므로 집행요청일(어음)은 필수입력 항목입니다.\r\n";
        // 			blnEmpty = false;
        // 		}
        // 		if (this.gfnIsNull(this.dsList.getColumn(r, "DT_EXPIRY"))) {
        // 			msg += "청구금액(어음)이 존재하므로 만기일자는 필수입력 항목입니다.\r\n";
        // 			blnEmpty = false;
        // 		}
        // 		if (!this.gfnIsNull(this.dsList.getColumn(r, "DT_EFDTE")) && !this.gfnIsNull(this.dsList.getColumn(r, "DT_EXPIRY"))) {
        // 			if (this.dsList.getColumn(r, "DT_EFDTE") > this.dsList.getColumn(r, "DT_EXPIRY")) {
        // 				msg += "어음 만기일자는 계상일자보다 이전일 수 없습니다.\r\n";
        // 				blnEmpty = false;
        // 			}
        // 		}
        // 	}
        //
        // 	if (!blnEmpty) {
        // 		this.gfnAlert(msg);
        // 		return false;
        // 	}
        //
        // 	return true;
        // }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);

        		this.btnApprove.set_enable(false);
        		this.btnSchApprove.set_enable(false);
        // 		this.btnSlipAppr.set_enable(false);
        // 		this.btnSlipCancel.set_enable(false);
        		this.btnSlipDelete.set_enable(false);
        		this.btnSlipDetail.set_enable(false);
        	}

        };
        //전표 상세조회
        this.fnSlipDetail = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};

        	param.IUD_FLAG = this.dsList.getColumn(this.dsList.rowposition, "YN_APPR")  == "미승인" ? "U" : "S";
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE").replace(/-/gi, "");

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };

        this.divData_divDataTop_objGrid_oncelldblclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};

        	param.IUD_FLAG = this.dsList.getColumn(this.dsList.rowposition, "YN_APPR")  == "미승인" ? "U" : "S";
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE").replace(/-/gi, "");

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };

        //승인
        this.fnSlipAppr = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        		var arrChk = [], arrYNAPPR = [];;
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "chk") == 1) {
        			arrChk.push(i);

        			if(this.dsList.getColumn(i, "YN_APPR") == "승인"){
        				arrYNAPPR.push(i);
        			}
        		}
        	}
        	if(arrChk.length < 1){
        		this.gfnAlert("작업할 내역이 없습니다.");
        		return;
        	}
        	if(arrYNAPPR.length > 0){
        		this.gfnAlert("미승인 데이터만 처리 할수있습니다.");
        		return;
        	}
        	if(arrChk.length ==1) this.gfnConfirm("선택한 자료를 미승인전표에서 승인전표로 만듭니다.","fnSlipAppr_callback");
        	if(arrChk.length > 1) this.gfnConfirm("선택한" + arrChk.length + "건의 자료를 미승인전표에서 승인전표로 만듭니다.", "fnSlipAppr_callback");
        };

        this.fnSlipAppr_callback = function(strId, val)
        {
        	if(val == true) {
        		var arrChk = [];
        		for(var i = 0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, "chk") == 1) {
        				arrChk.push(i);
        			}
        		}

        		if(arrChk.length > 0) {
        			this.dsInsert.clearData();

        			// 체크행 처리
        			/*this.gfnAlert("체크행:" + arrChk.join(','));*/
        			for(var i = 0; i < arrChk.length; i++) {
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "IN_CD_TRADE", this.dsList.getColumn(arrChk[i], "CD_TRADE").replace(/-/gi, ""));
        				this.dsInsert.setColumn(nrow, "IN_TY_SLIP", this.gfnIsNull(this.dsList.getColumn(arrChk[i], "CD_AUTOSLIP"))==true ? "M" : "A");
        				this.dsInsert.setColumn(nrow, "ID_APPR", this.AuthClient.ID_USER);
        			}

        			if (this.dsInsert.rowcount == 0) return;

        			var strSvcId    = "appr";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "appr=dsInsert";
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

        		} else {
        			this.gfnAlert("체크된 행이 없습니다.");
        		}
        	}
        };

        //취소요청
        this.fnSlipCancel = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var arrChk = [], arrYNAPPR = [];
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "chk") == 1) {
        			arrChk.push(i);

        			if(this.dsList.getColumn(i, "YN_APPR") == "미승인" || this.dsList.getColumn(i, "YN_CANCEL") == "Y"){
        				arrYNAPPR.push(i);
        			}
        		}
        	}
        	if(arrChk.length < 1){
        		this.gfnAlert("작업할 내역이 없습니다.");
        		return;
        	}
        	if(arrYNAPPR.length > 0){
        		this.gfnAlert("취소요청이 안된 승인 데이터만 처리할수 있습니다.");
        		return;
        	}
        	if(arrChk.length ==1) this.gfnConfirm("선택한 자료를 승인전표에서 취소요청전표로 만듭니다.","fnSlipCancel_callback");
        	if(arrChk.length > 1) this.gfnConfirm("선택한" + arrChk.length + "건의 자료를 승인전표에서 취소요청전표로 만듭니다.", "fnSlipCancel_callback");
        };

        this.fnSlipCancel_callback = function(strId, val)
        {
        	if(val == true) {
        		var arrChk = [];
        		for(var i = 0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, "chk") == 1) {
        				arrChk.push(i);
        			}
        		}

        		if(arrChk.length > 0) {
        			this.dsInsert.clearData();

        			// 체크행 처리
        			for(var i = 0; i < arrChk.length; i++) {
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "IN_CD_TRADE", this.dsList.getColumn(arrChk[i], "CD_TRADE").replace(/-/gi, ""));
        				this.dsInsert.setColumn(nrow, "IN_TY_SLIP", this.gfnIsNull(this.dsList.getColumn(arrChk[i], "CD_AUTOSLIP"))==true ? "M" : "A");
        				//this.dsInsert.setColumn(nrow, "IN_TY_SLIP", this.dsList.getColumn(arrChk[i], "CD_AUTOSLIP") == null ? "M" : "A");
        				this.dsInsert.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        			}

        			if (this.dsInsert.rowcount == 0) return;

        			var strSvcId    = "cancel";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "cancel=dsInsert";
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

        		} else {
        			this.gfnAlert("체크된 행이 없습니다.");
        		}
        	}
        }

        //전표 취소
        this.fnSlipDelete = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var arrChk = [], arrYNAPPR = [], arrYN_CANCEL = [];
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "chk") == 1) {
        			arrChk.push(i);

        			if(this.dsList.getColumn(i, "YN_APPR") == "승인" && this.dsList.getColumn(i, "YN_CANCEL") == "N"){
        				arrYNAPPR.push(i);
        			}
        			if(this.dsList.getColumn(i, "YN_CANCEL") == "Y"){
        				arrYN_CANCEL.push(i);
        			}
        		}
        	}
        	if(arrChk.length < 1){
        		this.gfnAlert("작업할 내역이 없습니다.");
        		return;
        	}

        	if(arrYNAPPR.length > 0){
        		this.gfnAlert("미승인/취소요청 데이터만 처리 가능합니다.");
        		return;
        	}

        	var msg = "전표를 삭제하시겠습니까?";
        	if(arrYN_CANCEL.length > 0){
        		msg = "전표 마이너스 전표 발행하시겠습니까?";
        	}

        	if(arrChk.length ==1) this.gfnConfirm("선택한 "+msg,"fnSlipDelete_callback");
        	if(arrChk.length > 1) this.gfnConfirm("선택한 " + arrChk.length + "건의 "+msg, "fnSlipDelete_callback");
        };

        this.fnSlipDelete_callback = function(strId, val)
        {
        	if(val == true) {
        		var arrChk = [];
        		for(var i = 0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, "chk") == 1) {
        				arrChk.push(i);
        			}
        		}

        		if(arrChk.length > 0) {
        			this.dsInsert.clearData();

        			// 체크행 처리
        			for(var i = 0; i < arrChk.length; i++) {
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(arrChk[i], "CD_TRADE").replace(/-/gi, ""));
        			}

        			if (this.dsInsert.rowcount == 0) return;

        			var strSvcId    = "delete";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "delete=dsInsert";
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

        		} else {
        			this.gfnAlert("체크된 행이 없습니다.");
        		}
        	}
        }


        this.divSearch_ccboTY_PAY_onitemchanged = function(obj,e)
        {
        	this.ccfCD_VENDOR01.form.fnCodeFindClear();
        	this.fnSearchInit();

        	if(e.postvalue == "%"){
        		this.ccfCD_VENDOR01.form.set_readonly(true);
        	}else{
        		this.ccfCD_VENDOR01.form.set_readonly(false);
        	}
        };

        // 전표결제 버튼 클릭
        this.fnApprove = function (obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var cdTrade  = nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition , "CD_TRADE"),""),"-","");
        	if(this.gfnIsNull(cdTrade)){
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	this.dsSelectDtReq.clearData();
        	var nRow = this.dsSelectDtReq.addRow();

        	this.dsSelectDtReq.setColumn(nRow, "CD_TRADE", cdTrade);

        	var strSvcId    = "selectDtReq";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectDtReq=dsSelectDtReq";
        	var outData     = "dsDtReq=selectDtReq0 dsCdApp=selectDtReq1";
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

        // 결제조회 버튼 클릭
        this.fnSchApprove = function (obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition , "NO_DOC"))){
        		this.gfnAlert("결재 정보가 존재하지 않습니다.");
        		return;
        	}

        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url = url+"approval/approval_Form.do?";
        	url +="forminstanceID="+this.dsList.getColumn(this.dsList.rowposition , "NO_DOC");
        	url +="&processID="+this.dsList.getColumn(this.dsList.rowposition , "DS_DOC");

        	trace("### 결재조회 url :: "+url);

        	window.open(url, "_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataTop.form.objGrid.addEventHandler("oncelldblclick",this.divData_divDataTop_objGrid_oncelldblclick,this);
            this.divSearch.form.ccboCD_SYSTEM.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ccboCD_SYSTEM01.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ccboTY_PAY.addEventHandler("onitemchanged",this.divSearch_ccboTY_PAY_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_SLIPAPPR2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
