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
            this.set_titletext("전표조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_SLIP_ALL_SELECT</Col></Row><Row><Col id=\"TARGET\">selectDt</Col><Col id=\"SP\">DHAPR_SLIP_ALL_SELECT_DT_TRADE</Col></Row><Row><Col id=\"TARGET\">dept</Col><Col id=\"SP\">DHXPR_BALANCE_ACNTUNIT_CODEFIND</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACNT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACNT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_COMBO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"TY_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ACCOUNT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ACCOUNT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PROOF\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REF_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REF_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DEPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">BE</Col><Col id=\"DS_CODE\">귀속부서</Col></Row><Row><Col id=\"CD_CODE\">BH</Col><Col id=\"DS_CODE\">발행부서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_APPR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">승인</Col></Row><Row><Col id=\"DS_CODE\">미승인</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DATE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">발행일자</Col></Row><Row><Col id=\"DS_CODE\">회계일자</Col><Col id=\"CD_CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_COMBO", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">거래처</Col></Row><Row><Col id=\"DS_CODE\">기타1</Col><Col id=\"CD_CODE\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_AUTOSLIP", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">DA</Col><Col id=\"DS_CODE\">인사</Col></Row><Row><Col id=\"CD_CODE\">DC</Col><Col id=\"DS_CODE\">외주</Col></Row><Row><Col id=\"CD_CODE\">DF</Col><Col id=\"DS_CODE\">자금</Col></Row><Row><Col id=\"CD_CODE\">DH</Col><Col id=\"DS_CODE\">회계</Col></Row><Row><Col id=\"CD_CODE\">DM</Col><Col id=\"DS_CODE\">자재</Col></Row><Row><Col id=\"CD_CODE\">DS</Col><Col id=\"DS_CODE\">노무</Col></Row><Row><Col id=\"CD_CODE\">DW</Col><Col id=\"DS_CODE\">공사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_PROOF", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">M</Col><Col id=\"VALUE\">일반</Col></Row><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">자동</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsObj5", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"145","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
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

            obj = new Static("staTY_DEPT","ccfCD_CORP:10","10.0","32","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_DEPT","staTY_DEPT:0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_DEPT");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("귀속부서");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","ccboTY_DEPT:8","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ccfCD_DEPT:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("전표구분");
            obj.set_textDecoration("none");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","staTY_GUBUN:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("전표구분");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_APPR","ccboTY_GUBUN:0.0","10.0","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("승인여부");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_APPR","staYN_APPR:0.0","10.0","82","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsYN_APPR");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("승인여부");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoTY_DATE","0","staCD_CORP:10.0","147","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_columncount("2");
            obj.set_innerdataset("dsTY_DATE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_DATE","crdoTY_DATE:0.0","staCD_CORP:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQ00","ctclFR_DATE:0.0","staCD_CORP:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_DATE","staDT_REQ00:0.0","staCD_CORP:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ctclTO_DATE:0.0","staCD_CORP:10.0","131","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("발행자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFIDSABUN");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_AUTOSLIP","ccfID_SABUN:0.0","staCD_CORP:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("자동전표코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_AUTOSLIP","staCD_AUTOSLIP:0.0","staCD_CORP:10.0","67","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsTY_AUTOSLIP");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_AUTOSLIP","ccboTY_AUTOSLIP:3","staCD_CORP:10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFAUTOSLIP");
            obj.getSetter("CDTextWidth").set("75");
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REF","0","crdoTY_DATE:10.0","147","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("집행요청일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REF_FR","staDT_REF:0.0","crdoTY_DATE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REF_TILDE","ctclDT_REF_FR:0.0","crdoTY_DATE:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REF_TO","staDT_REF_TILDE:0.0","crdoTY_DATE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACNT_FROM","ctclDT_REF_TO:0.0","crdoTY_DATE:10.0","131","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("계정코드FROM");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNT_FROM","staCD_ACNT_FROM:0.0","crdoTY_DATE:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNT_SLIP_AND_TRIAL");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("22");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACNT_TO","ccfCD_ACNT_FROM:0.0","crdoTY_DATE:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("계정코드TO");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNT_TO","staCD_ACNT_TO:0.0","crdoTY_DATE:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNT_SLIP_AND_TRIAL");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("24");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_COMBO","15","staDT_REF:10.0","73","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_innerdataset("dsTY_COMBO");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("거래처");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","ccboTY_COMBO:5","staDT_REF:10.0","295","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFALLVENDOR_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("26");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PROOF","ccfCD_VENDOR:0.0","staDT_REF:10.0","131","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("증빙구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_PROOF","staCD_PROOF:0.0","staDT_REF:10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_innerdataset("dsCD_PROOF");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTY_VENDOR","ccboCD_PROOF:8","staDT_REF:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TRADE","edtTY_VENDOR:0.0","staDT_REF:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("전표번호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE","staCD_TRADE:0.0","staDT_REF:10.0","130","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_REM","txtCD_TRADE:0.0","staDT_REF:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("적요");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_REM","staDS_REM:0.0","staDT_REF:10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboTY_DEPT","value","dsSearch","TY_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboYN_APPR","value","dsSearch","YN_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.crdoTY_DATE","value","dsSearch","TY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ctclFR_DATE","value","dsSearch","FR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ctclTO_DATE","value","dsSearch","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccboTY_COMBO","value","dsSearch","TY_COMBO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.txtDS_REM","value","dsSearch","DS_REM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.ccboTY_AUTOSLIP","value","dsSearch","TY_AUTOSLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.ccfCD_AUTOSLIP.form.CDTextBox","value","dsSearch","CD_AUTOSLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.ccfCD_AUTOSLIP.form.DSTextBox","value","dsSearch","DS_AUTOSLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.txtAM_ACCOUNT_FROM","value","dsSearch","AM_ACCOUNT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.txtAM_ACCOUNT_TO","value","dsSearch","AM_ACCOUNT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.ccboCD_PROOF","value","dsSearch","CD_PROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.txtCD_TRADE","value","dsSearch","CD_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSearch.form.ccboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divSearch.form.edtTY_VENDOR","value","dsSearch","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divSearch.form.ctclDT_REF_FR","value","dsSearch","DT_REF_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divSearch.form.ctclDT_REF_TO","value","dsSearch","DT_REF_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divSearch.form.ccfCD_ACNT_FROM.form.CDTextBox","value","dsSearch","CD_ACNT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divSearch.form.ccfCD_ACNT_FROM.form.DSTextBox","value","dsSearch","DS_ACNT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divSearch.form.ccfCD_ACNT_TO.form.CDTextBox","value","dsSearch","CD_ACNT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divSearch.form.ccfCD_ACNT_TO.form.DSTextBox","value","dsSearch","DS_ACNT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_SLIPALLSELECT.xfdl", function() {
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
        	this.fnSetParameter();
        	this.fnSetEvent();
        	this.fnSetCombo();

        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSlipDetail = this.gfnFormButtonAdd("SlipDetail", "fnSlipDetail");
        	this.btnSlipDetail.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccboTY_DEPT = this.divSearch.form.ccboTY_DEPT;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ccboYN_APPR = this.divSearch.form.ccboYN_APPR;
        	this.crdoTY_DATE = this.divSearch.form.crdoTY_DATE;
        	this.ctclFR_DATE = this.divSearch.form.ctclFR_DATE;
        	this.ctclTO_DATE = this.divSearch.form.ctclTO_DATE;
        	//this.ccfCD_ACCOUNT = this.divSearch.form.ccfCD_ACCOUNT;
        	this.ccfCD_ACNT_FROM = this.divSearch.form.ccfCD_ACNT_FROM;
        	this.ccfCD_ACNT_TO = this.divSearch.form.ccfCD_ACNT_TO;

        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.ccboTY_COMBO = this.divSearch.form.ccboTY_COMBO;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.txtDS_REM = this.divSearch.form.txtDS_REM;
        	this.ccboTY_AUTOSLIP = this.divSearch.form.ccboTY_AUTOSLIP;
        	this.ccfCD_AUTOSLIP = this.divSearch.form.ccfCD_AUTOSLIP;
        	this.txtAM_ACCOUNT_FROM = this.divSearch.form.txtAM_ACCOUNT_FROM;
        	this.txtAM_ACCOUNT_TO = this.divSearch.form.txtAM_ACCOUNT_TO;
        	this.ccboCD_PROOF = this.divSearch.form.ccboCD_PROOF;
        	this.txtCD_TRADE = this.divSearch.form.txtCD_TRADE;
        	this.edtTY_VENDOR	= this.divSearch.form.edtTY_VENDOR;		//거래처구분(거래처의 코드파인더)

        	this.ccrdTY_SLIP = this.divSearch.form.ccrdTY_SLIP;

        	this.dxGrid = this.divData.form.objGrid;

        	this.FileManager = {};
        	this.FileManager.CD_GUBUN = "DH03";
        	//this.FileManager.CD_DIR = [cdDir];
        	this.FileManager.IS_READONLY = false;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_SLIPALLSELECT");

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_oncelldblclick, this);

        	//this.ccfCD_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNT_FROM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNT_TO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_AUTOSLIP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// BUTTON, BUTTON-IN 처리
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        	this.dsSearch.set_enableevent(false);
        	this.dsSearch.setColumn(0, "TY_DEPT", "BE");
         	this.dsSearch.setColumn(0, "TY_COMBO", "Y");
         	this.dsSearch.setColumn(0, "TY_AUTOSLIP", "%");
         	this.dsSearch.setColumn(0, "CD_PROOF", "0");

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "FR_DATE", today.substr(0,6)+"01");
        	this.dsSearch.setColumn(0, "TO_DATE", today);

         	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
         	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);


        	//if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        		//this.dsSearch.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        		//this.dsSearch.setColumn(0, "DS_DEPT", this.AuthClient.DS_DEPT);
        		//this.ccfCD_CORP.set_enable(false);
        		//this.ccfCD_DEPT.set_enable(false);
        	//}

         	this.dsSearch.setColumn(0, "TY_DATE", "2");	// 회계일자
         	this.dsSearch.setColumn(0, "YN_APPR", "");
        	this.dsSearch.setColumn(0, "TY_GUBUN", "");

        	this.dsSearch.set_enableevent(true);

        	this.dsSearch.setColumn(0, "CD_DEPT", this.AuthClient.LEVCD_DEPT_UPPER);
        	this.ccfCD_DEPT.form.fnCodeFindLoad();
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("FR_DATE", "string");
        	this.dsSelect.addColumn("TO_DATE", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("TY_DEPT", "string");
        	this.dsSelect.addColumn("TY_DATE", "string");
        	this.dsSelect.addColumn("YN_APPR", "string");
        	//this.dsSelect.addColumn("YN_CLOSING", "string");
        	this.dsSelect.addColumn("CD_ACCOUNT", "string");
        	this.dsSelect.addColumn("CD_ACNT_FROM", "string");
        	this.dsSelect.addColumn("CD_ACNT_TO", "string");
        	this.dsSelect.addColumn("CD_SEMOK", "string");
        	this.dsSelect.addColumn("TY_VENDOR", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("TY_COMBO", "string");
        	this.dsSelect.addColumn("CD_AUTOSLIP", "string");
        	this.dsSelect.addColumn("AM_ACCOUNT_FROM", "string");
        	this.dsSelect.addColumn("AM_ACCOUNT_TO", "string");
        	this.dsSelect.addColumn("DS_REM", "string");
        	this.dsSelect.addColumn("CD_PROOF", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("CD_TRADE", "string");
        	this.dsSelect.addColumn("TY_AUTOSLIP", "string");
        	this.dsSelect.addColumn("DT_REF_FR", "string");
        	this.dsSelect.addColumn("DT_REF_TO", "string");

        	this.dsSelectDept = new Dataset();
        	this.dsSelectDept.addColumn("TY_GUBUN", "string");
        	this.dsSelectDept.addColumn("CN_ROW", "string");
        	this.dsSelectDept.addColumn("LEVEL", "string");
        	this.dsSelectDept.addColumn("ACNTUNIT", "string");
        	this.dsSelectDept.addColumn("VALUE", "string");
        	this.dsSelectDept.addColumn("MIN_VALUE", "string");
        	this.dsSelectDept.addColumn("CD_CORP", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
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

        	var autoslip = "";
        	if (this.dsSearch.getColumn(0, "TY_AUTOSLIP") == "%") {	// 자동전표코드 콤보
        		autoslip = "";
        	}
        	else {
        		if (this.dsSearch.getColumn(0, "CD_AUTOSLIP") == "") {
        			autoslip = this.dsSearch.getColumn(0, "TY_AUTOSLIP");
        		}
        		else {
        			autoslip = this.dsSearch.getColumn(0, "CD_AUTOSLIP");
        		}
        	}

        	var CD_ACNT_FROM = this.gfnTrim(this.dsSearch.getColumn(0, "CD_ACNT_FROM"));
        	var CD_ACNT_TO = this.gfnTrim(this.dsSearch.getColumn(0, "CD_ACNT_TO"));


        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "FR_DATE", this.dsSearch.getColumn(0, "FR_DATE"));
        	this.dsSelect.setColumn(0, "TO_DATE", this.dsSearch.getColumn(0, "TO_DATE"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "TY_DEPT", this.dsSearch.getColumn(0, "TY_DEPT"));
        	this.dsSelect.setColumn(0, "TY_DATE", this.dsSearch.getColumn(0, "TY_DATE"));
        	this.dsSelect.setColumn(0, "YN_APPR", this.dsSearch.getColumn(0, "YN_APPR"));
        	//this.dsSelect.setColumn(0, "YN_CLOSING", "N");
        	//this.dsSelect.setColumn(0, "CD_ACCOUNT", this.dsSearch.getColumn(0, "CD_ACCOUNT"));
        	this.dsSelect.setColumn(0, "CD_ACNT_FROM", this.gfnNvl(CD_ACNT_FROM, ""));
        	this.dsSelect.setColumn(0, "CD_ACNT_TO", this.gfnNvl(CD_ACNT_TO, ""));
        	this.dsSelect.setColumn(0, "CD_SEMOK", "");
        	this.dsSelect.setColumn(0, "TY_VENDOR", this.dsSearch.getColumn(0, "TY_VENDOR"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "GR_DEPT", "");
        	this.dsSelect.setColumn(0, "TY_COMBO", this.dsSearch.getColumn(0, "TY_COMBO"));
        	this.dsSelect.setColumn(0, "CD_AUTOSLIP", autoslip);
        	this.dsSelect.setColumn(0, "AM_ACCOUNT_FROM", this.dsSearch.getColumn(0, "AM_ACCOUNT_FROM"));
        	this.dsSelect.setColumn(0, "AM_ACCOUNT_TO", this.dsSearch.getColumn(0, "AM_ACCOUNT_TO"));
        	this.dsSelect.setColumn(0, "DS_REM", this.dsSearch.getColumn(0, "DS_REM"));
        	this.dsSelect.setColumn(0, "CD_PROOF", this.dsSearch.getColumn(0, "CD_PROOF"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "CD_TRADE", nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.txtCD_TRADE.value,"")), "-",""));
        	this.dsSelect.setColumn(0, "TY_AUTOSLIP", this.dsSearch.getColumn(0, "TY_GUBUN"));	// 전표구분
        	this.dsSelect.setColumn(0, "DT_REF_FR", this.dsSearch.getColumn(0, "DT_REF_FR"));
        	this.dsSelect.setColumn(0, "DT_REF_TO", this.dsSearch.getColumn(0, "DT_REF_TO"));

        	// 1	발행일자 / 2	회계일자
        	var spNm = (this.dsSearch.getColumn(0, "TY_DATE") == "2") ? "select" : "selectDt";

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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "FR_DATE")) || this.gfnIsNull(this.dsSearch.getColumn(0, "TO_DATE"))) {
        		this.gfnAlert("발의일자를 입력하세요!");
        		return false;
        	}

        	//if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))) {
        			var msg = "발행부서";
        			if(this.dsSearch.getColumn(0, "TY_DEPT") == "BE") msg = "귀속부서";
        			msg += "를 입력하세요.";

        			this.gfnAlert(msg);
        			return false;
        		}
        	//}

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

        		if (this.dsList.rowcount > 0){
        			this.btnSlipDetail.set_enable(true);
        			//this.fnSetBgColor();
        		}

        	}
        	else if(svcID == "dept") {
        		if (this.dsDept.rowcount == 0) {
        			this.dsSearch.setColumn(0, "CD_DEPT", "");
        			this.dsSearch.setColumn(0, "DS_DEPT", "");
        		}
        		else {
        			this.dsSearch.setColumn(0, "CD_DEPT", this.dsDept.getColumn(0, 0));
        			this.dsSearch.setColumn(0, "DS_DEPT", this.dsDept.getColumn(0, 1));
        			//this.dsDept.getColumn(0, 2)	//level
        			//this.dsDept.getColumn(0, 12)	//corp
        		}
        	}
        	else if (svcID == "combo") {
        		if(this.dsCD_PROOF.rowcount > 0){
        			var nRow = this.dsCD_PROOF.insertRow(0);
        			this.dsCD_PROOF.setColumn(nRow, "CD_CODE", "");
        			this.dsCD_PROOF.setColumn(nRow, "DS_CODE", "전체");
        			this.ccboCD_PROOF.set_index(0);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");

        	if (id == "ccfCD_ACCOUNT" || id == "ccfCD_ACNT_FROM" || id == "ccfCD_ACNT_TO") {
        		if(!this.gfnIsNull(cdCorp)){
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		}else{
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
                dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	}
        	else if (id == "ccfCD_CORP") {
        		//dsUserParam.setColumn(nrow, "LEVLV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "LEVCD_DEPT", this.UserInfo.LEVCD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	else if (id == "ccfCD_DEPT") {
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
        		dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", this.UserInfo.LEVCD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YR_ACCOUNT", "");
        		*/
        	}
        	else if (id == "ccfCD_AUTOSLIP") {
        		dsUserParam.setColumn(nrow, "TY_AUTOSLIP", this.dsSearch.getColumn(0, "TY_AUTOSLIP"));
        	}
        	else if (id == "ccfID_SABUN") {
        		dsUserParam.setColumn(nrow, "YN_OFFICER", "N");
        		//dsUserParam.setColumn(nrow, "CD_CORP", "01");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

        	}
        	else if (id == "ccfCD_VENDOR") {
        		if(!this.gfnIsNull(cdCorp)){
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		}else{
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
        // 		dsUserParam.setColumn(nrow, "TY_ACCOUNT", "");
        // 		dsUserParam.setColumn(nrow, "CD_ACCOUNT", "");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	if (id == "ccfCD_CORP") {
        		//this.dsSearch.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        		//this.dsSearch.setColumn(0, "DS_DEPT", this.AuthClient.DS_DEPT);
        		this.ccfCD_ACNT_FROM.form.fnCodeFindClear();
        		this.ccfCD_ACNT_TO.form.fnCodeFindClear();
        		this.ccfCD_DEPT.form.fnCodeFindClear();
        		//this.ccfID_SABUN.form.fnCodeFindClear();
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
         	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	if (this.dsList.getColumn(e.row, "CD_TRADE") == "")
        		this.btnSlipDetail.set_enable(false);
        // 	else if (this.dsList.getColumn(e.row, "CD_TRADE") != "" && this.dsList.getColumn(e.row, "YN_APPR") == "N")
        // 		this.btnSlipDetail.set_enable(true);
        // 	else if (this.dsList.getColumn(e.row, "CD_TRADE") != "" && this.dsList.getColumn(e.row, "YN_APPR") == "T")
        // 		this.btnSlipDetail.set_enable(true);
        // 	else if (this.dsList.getColumn(e.row, "CD_TRADE") != "" && this.dsList.getColumn(e.row, "YN_APPR") == "Y")
        // 		this.btnSlipDetail.set_enable(true);
        	else
        		this.btnSlipDetail.set_enable(true);
        };

        this.fnGrid_oncelldblclick = function(obj,e)
        {
         	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var colId = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colId == "FILE_ATTACH"){
        		return;
        	}

        	this.fnSlipDetail();
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		this.btnSlipDetail.set_enable(false);

        		if (e.columnid == "TY_AUTOSLIP") {
        			this.dsSearch.setColumn(0, "CD_AUTOSLIP", "");
        			this.dsSearch.setColumn(0, "DS_AUTOSLIP", "");

        			if (e.newvalue == "")
        				this.ccfCD_AUTOSLIP.set_enable(false);
        			else
        				this.ccfCD_AUTOSLIP.set_enable(true);
        		}
        		if(e.columnid == "TY_AUTOSLIP"){this.ccfCD_AUTOSLIP.form.fnCodeFindClear();}
        	}
        };

        this.fnDept = function() {
        	this.dsSelectDept.clearData();
        	this.dsSelectDept.addRow();
        	this.dsSelectDept.setColumn(0, "TY_GUBUN", "0");
        	this.dsSelectDept.setColumn(0, "CN_ROW", 100);
        	this.dsSelectDept.setColumn(0, "LEVEL", this.UserInfo.LEVLV_DEPT_ACNT);
        	this.dsSelectDept.setColumn(0, "ACNTUNIT", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        	this.dsSelectDept.setColumn(0, "VALUE", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        	this.dsSelectDept.setColumn(0, "MIN_VALUE", "");
        	this.dsSelectDept.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);

        	var strSvcId    = "dept";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "dept=dsSelectDept";
        	var outData     = "dsDept=dept0";
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

        this.fnSlipDetail = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};

        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE").replace(/-/gi, "");
        	param.IUD_FLAG = this.dsList.getColumn(this.dsList.rowposition, "YN_APPR")  == "미승인" ? "U" : "S";
        	param.strYN_JUNDO_START = "";
        	param.FORM = "ApprRever";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };


        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE"  , "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(0, "CD_TYPE"  , "V10");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_PROOF=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,
        						false); // 통신방법 정의 [생략가능]
        };

        this.fnSetBgColor = function(){

        	var nCellIdx = this.dxGrid.getBindCellIndex("body", "CD_TRADE");
        	var expr_cssclass = "";
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		expr_cssclass ="expr:nx_flag !=null && nx_flag.substr(0, 1) == '#' ? '#ebf5d6' : (CHK_SLIP=='1') ? '#EAEAEA' : '#FFFFFF'";
        		this.dxGrid.setCellProperty("body", nCellIdx, "background", expr_cssclass);
        	}
        }

        this.fnGrid_ExpandUp = function(obj, e) {
        	//삭제데이터, 결재완료 데이터일 경우 리턴
        	//if(this.gfnGetFlag(this.dsList, e.row) == "D" || this.dsList.getColumn(e.row, "CD_APP") == "2"){
        	if(this.gfnGetFlag(this.dsList, e.row) == "D"){
        		return;
        	}

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colnm == "FILE_ATTACH") {
        		var cdDir = "";
        		var sProofUrl = this.dsList.getColumn(e.row, "PROOF_URL");

        		if(!this.gfnIsNull(sProofUrl)){
        			var sCdgubun = this.dsList.getColumn(e.row, "CD_GUBUN");
        			var sCdRef1 = this.dsList.getColumn(e.row, "CD_REF1");
        			var sCdRef2 = this.dsList.getColumn(e.row, "CD_REF2");
        			var sCdRef3 = this.dsList.getColumn(e.row, "CD_REF3");
        			var sCdRef4 = this.dsList.getColumn(e.row, "CD_REF4");
        			var sCdRef5 = this.dsList.getColumn(e.row, "CD_REF5");

        			sCdRef2 = !this.gfnIsNull(sCdRef2) ? ("," + sCdRef2) : "";
        			sCdRef3 = !this.gfnIsNull(sCdRef3) ? ("," + sCdRef3) : "";
        			sCdRef4 = !this.gfnIsNull(sCdRef4) ? ("," + sCdRef4) : "";
        			sCdRef5 = !this.gfnIsNull(sCdRef5) ? ("," + sCdRef5) : "";

        			this.FileManager.CD_GUBUN = sCdgubun;
        			cdDir = sCdRef1+sCdRef2+sCdRef3+sCdRef4+sCdRef5;
        		}else{
        			this.FileManager.CD_GUBUN = "DH03";
        			cdDir = this.dsList.getColumn(e.row, "CD_SLIP");
        		}

        	}

        	this.FileManager.IS_READONLY = true;
        	this.FileManager.CD_DIR = [cdDir];
        	this.gfnFileManager(this.FileManager, "fnFileCallback");
        };

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	//trace("## val :: " + val);

        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);

        	if (val.Cnt == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_DIR", "");
        	} else {
        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"))){
        			this.dsList.setColumn(this.dsList.rowposition, "FILE_DIR", this.FileManager.CD_DIR);
        		}
        	}

        	//trace("## 첨부파일 건수 :: " + val.Cnt);
        	//trace("## FILE_DIR :: " + this.dsList.getColumn(this.dsList.rowposition, "FILE_DIR"));

        	if(val.IsChange){
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_ATTACH", "첨부(" + val.Cnt + ")");
        	}

        	this.dsList.set_enableevent(true);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_SLIPALLSELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
