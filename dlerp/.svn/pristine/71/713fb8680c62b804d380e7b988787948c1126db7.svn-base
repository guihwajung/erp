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
            this.set_titletext("전표조회및수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_SLIPLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_SLIPHEADER_RM_CONTENT_UPDATE</Col></Row><Row><Col id=\"TARGET\">detail</Col><Col id=\"SP\">DHAPR_SLIP_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DHAPR_SLIP_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PAPER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DATE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DATE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SEMOK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TOACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TOSEMOK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_COMBO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_AUTOSLIP_COMBO\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_AUTOSLIP_COMBO\">%</Col><Col id=\"TY_DEPT\">BH</Col><Col id=\"TY_AUTOSLIP\"/><Col id=\"YN_APPR\"/><Col id=\"TY_COMBO\">Y</Col><Col id=\"TY_DATE\">BH</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_AUTOSLIP", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">전체</Col><Col id=\"CODE\">%</Col></Row><Row><Col id=\"VALUE\">인사</Col><Col id=\"CODE\">DA</Col></Row><Row><Col id=\"VALUE\">공사</Col><Col id=\"CODE\">DW</Col></Row><Row><Col id=\"CODE\">DC</Col><Col id=\"VALUE\">외주</Col></Row><Row><Col id=\"CODE\">DM</Col><Col id=\"VALUE\">자재</Col></Row><Row><Col id=\"CODE\">DS</Col><Col id=\"VALUE\">노무</Col></Row><Row><Col id=\"CODE\">DF</Col><Col id=\"VALUE\">자금</Col></Row><Row><Col id=\"CODE\">DH</Col><Col id=\"VALUE\">회계</Col></Row><Row><Col id=\"CODE\">DL</Col><Col id=\"VALUE\">영업</Col></Row><Row><Col id=\"CODE\">DB</Col><Col id=\"VALUE\">하자</Col></Row><Row><Col id=\"CODE\">DG</Col><Col id=\"VALUE\">총무</Col></Row></Rows>");
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
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"145","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Combo("ccboTY_GUBUN","ccfCD_CORP:0.0","10.0","83","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","ccboTY_GUBUN:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Radio("ccrdTY_DATE","0.0","ccfCD_CORP:10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("staID_SABUN","ctclDT_DATE_TO:0.0","ccboTY_GUBUN:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("staCD_ACCOUNT","0.0","ccrdTY_DATE:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("staCD_TOACCOUNT","ccfCD_ACCOUNT:0.0","staID_SABUN:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Combo("ccboTY_COMBO","0.0","ccfCD_ACCOUNT:10.0","73","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsTY_COMBO");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_AUTOSLIP","staCD_AUTOSLIP:0.0","ccrdYN_APPR:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsCD_AUTOSLIP");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_AUTOSLIP","ccboCD_AUTOSLIP:0.0","ccrdYN_APPR:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFAUTOSLIP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("20");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","ccboTY_COMBO:0.0","ccfCD_ACCOUNT:10.0","295","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("22");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TRADE","ccfCD_VENDOR:0.0","staCD_TOACCOUNT:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Edit("txtDS_REM","staDS_REM:0.0","ccboCD_AUTOSLIP:10.0","325","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new BindItem("item13","divSearch.form.ccfCD_VENDOR","value","dsSearch","CD_VENDOR");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_SLIPAPPRREVER.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.IsOWNER_SlipAppr = false;

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

        	var today = this.gfnGetDate();

        	this.dsSearch.setColumn(0, "DT_DATE_FR", this.gfnGetFirstDate(today));
        	this.dsSearch.setColumn(0, "DT_DATE_TO", today);

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP) && !this.gfnIsNull(this.getOwnerFrame().CD_DEPT))
        	{
        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "CD_DEPT", this.getOwnerFrame().CD_DEPT);
        		this.ccfCD_CORP.form.fnCodeFindLoad();
        		//this.ccfCD_DEPT.form.fnCodeFindLoad();
        	}
        	else
        	{
        		this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        		this.dsSearch.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        		this.ccfCD_CORP.form.fnCodeFindLoad();
        		//this.ccfCD_DEPT.form.fnCodeFindLoad();
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
        	this.btnCancelSlip 		 = this.gfnFormButtonAdd("btnCancelSlip", "fnCancelSlip"); 			   // 전표삭제
        	this.btnDetailSlip 		 = this.gfnFormButtonAdd("btnDetailSlip", "fnDetailSlip"); 			   // 전표상세조회
        	//this.btnApprove    		 = this.gfnFormButtonAdd("btnApprove", "fnApprove"); 			 	   // 승인결재
        	this.btnDocument   		 = this.gfnFormButtonAdd("btnDocument", "fnDocument"); 	 			   // 결재문서
        	//this.btnSlipPrintPreview = this.gfnFormButtonAdd("btnSlipPrintPreview", "fnSlipPrintPreview"); // 전표출력
        };

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
        	this.edtTY_VENDOR		= this.divSearch.form.edtTY_VENDOR;		//거래처구분(거래처의 코드파인더)
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_SLIPAPPRREVER");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHA_SLIPDETAIL");

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_TOACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_AUTOSLIP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";



        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_VENDOR.CodeFindName = "DHX_CFALLVENDOR_CODEFIND"; // DHX_CFNVENDOR_CODEFIND
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	// 셀 변경 후 이벤트
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        	// 전체체크박스 체크/해제 이벤트
        	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

        	this.gfnGridColumnColor(this.dxGrid, "YN_APPR","Blue", "YN_APPR == '이체'", false);
        	//this.gfnGridColumnColor(this.dxGrid, "CD_TRADE_APPR","Blue", "YN_APPR == '이체'", false);
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


        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_TRADE", "string");

        	this.dsCancel = new Dataset();
        	this.dsCancel.addColumn("CD_TRADE", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
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

        	this.dsSelect.setColumn(0,"CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0,"TY_DEPT", this.dsSearch.getColumn(0, "TY_DEPT"));	// 귀속부서(BE),발행부서(BH),발행자(ID) 구분
        	this.dsSelect.setColumn(0,"CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0,"YN_APPR", this.dsSearch.getColumn(0, "YN_APPR"));
        	this.dsSelect.setColumn(0,"TY_DATE", this.dsSearch.getColumn(0, "TY_DATE"));
        	this.dsSelect.setColumn(0,"DT_DATE_FR", this.dsSearch.getColumn(0, "DT_DATE_FR"));
        	this.dsSelect.setColumn(0,"DT_DATE_TO", this.dsSearch.getColumn(0, "DT_DATE_TO"));
        	this.dsSelect.setColumn(0,"CD_AUTOSLIP", this.dsSearch.getColumn(0, "TY_AUTOSLIP_COMBO") == "%" ? this.dsSearch.getColumn(0, "CD_AUTOSLIP") :  (this.dsSearch.getColumn(0, "CD_AUTOSLIP") == "" ? this.dsSearch.getColumn(0, "TY_AUTOSLIP_COMBO") : this.dsSearch.getColumn(0, "CD_AUTOSLIP")));
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
        	else if(svcID == "cancel") {
        		this.fnCallback_callback = function()
        		{
        			this.FormBtns.Select.click();
        		}

        		this.gfnAlert("전표삭제가 정상처리되었습니다.","fnCallback_callback");
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	if (id == "ccfCD_CORP") {
        		//dsUserParam.setColumn(nrow, "LEVLV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "LEVCD_DEPT", this.UserInfo.LEVCD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "ccfCD_DEPT") {
        		/*
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요!", "fnVaidateCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", this.UserInfo.LEVCD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YR_ACCOUNT", "");
        		*/
        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        		if (!this.gfnIsNull(cdCorp)) {
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");		//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");				//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);			//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");				//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");				//현장/본사여부
        			dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "GR_SEARCH"	    , this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		} else {
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
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

        		dsUserParam.setColumn(nrow, "YN_OFFICER", "N");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
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
        			this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}

        };

        // 더블클릭
        this.divData_divDataTop_objGrid_oncelldblclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};

        	param.IUD_FLAG = this.dsList.getColumn(this.dsList.rowposition, "YN_APPR")  == "미승인" ? "U" : "S";
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE").replace(/-/gi, "");

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
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

        // 전표삭제
        this.fnCancelSlip = function(obj,e)
        {
        	if(this.dsList.findRow("CHK", 1) < 0) return;

        	this.gfnConfirm("전표를 삭제하시겠습니까?", "fnCancelSlip_callback");
        }

        this.fnCancelSlip_callback = function(strID, val)
        {
        	if(val != true) return;

        	this.dsCancel.clearData();

        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == 1)
        		{
        			var nrow = this.dsCancel.addRow();
        			this.dsCancel.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE").replace(/-/gi, ""));
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
        	var findRow = this.dsList.findRow("CHK", 1);

        	if(findRow < 0)
        	{
        		this.gfnAlert("전표내역을 선택해주세요.");
        		return;
        	}

        	if(this.dsList.findRow("CHK", 1, findRow+1) > -1)
        	{
        		this.gfnAlert("전표상세조회는 건별로만 조회가 가능합니다.");
        		return;
        	}

        	var param = {};

        	param.IUD_FLAG = this.dsList.getColumn(findRow, "YN_APPR")  == "미승인" ? "U" : "S";
        	param.CD_TRADE = this.dsList.getColumn(findRow, "CD_TRADE").replace(/-/gi, "");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "", param);

        }

        // 승인결재
        this.fnApprove = function(obj,e)
        {
        	// 결재
        	this.gfnAlert("승인결재");
        }

        // 결재문서
        this.fnDocument = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 처리하세요.", "");
        		return;
        	}

        	var param = {};
        	var rem = this.dsList.getColumn(this.dsList.rowposition, "REM");
        	var cdTrade = nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"),"")), "-","");

        	param.V1 = cdTrade;		// 전표번호
        // 	param.V2 = "";
        // 	param.V3 = "";
        // 	param.V4 = "";
        	param.ID_AP = this.dsList.getColumn(this.dsList.rowposition, "NO_DOC");	// 전자결재문서번호
        	param.DS_ETITLE = rem;

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP_APP", "fnAprvDialogCallback", param, 1200, 700);

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
        this.loadIncludeScript("DHA_SLIPAPPRREVER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
