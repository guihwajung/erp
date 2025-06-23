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
            this.set_titletext("출금승인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAssign", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPnl1", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_CASH\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CASH_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ\" type=\"STRING\" size=\"256\"/><Column id=\"AM_REQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_SUJI\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUJI\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPIRE\" type=\"STRING\" size=\"256\"/><Column id=\"QN_ILSU\" type=\"INT\" size=\"256\"/><Column id=\"CD_REAL_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REAL_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REAL_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REAL_ACCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFBPR_REQUESTDTL_ASSIGN_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DFBPR_EXECDTL_TRAN_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFBPR_REQUEST_UPDATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_MDMCODE_CODEFIND_SELECT</Col></Row><Row><Col id=\"TARGET\">AssignConfirm</Col><Col id=\"SP\">DFBPR_REQUESTDTL_ASSIGN</Col></Row><Row><Col id=\"TARGET\">SeqUpdate</Col><Col id=\"SP\">DFBPR_REQUESTDTL_UPDATE</Col></Row><Row><Col id=\"SP\">DFBPR_EXECDTL_TRAN_ASSIGNX</Col><Col id=\"TARGET\">AssignCancel</Col></Row><Row><Col id=\"TARGET\">trans</Col><Col id=\"SP\">DFBPR_EXEC_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DFBPR_EXEC_SLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">connect</Col><Col id=\"SP\">DFBPR_EXEC_SLIP_UPDATE</Col></Row><Row><Col id=\"TARGET\">BranchInsert</Col><Col id=\"SP\">DFBPR_BRANCH_INSERT</Col></Row><Row><Col id=\"TARGET\">BranchDelete</Col><Col id=\"SP\">DFBPR_BRANCH_DELETE</Col></Row><Row><Col id=\"TARGET\">Assign</Col><Col id=\"SP\">DFBPR_EXECDTL_INSERT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">accntUpdate</Col><Col id=\"SP\">DFBPR_EXECDTL_TRAN_MAINACCOUNT</Col></Row><Row><Col id=\"TARGET\">reqDtUpdate</Col><Col id=\"SP\">DFBPR_DT_REQUEST_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPTOPER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EXEC\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SEND_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SEND_TO\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DEFER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PAYMENT2\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_DT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">집행요청일자</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">회계일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_EXEC", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미배정</Col></Row><Row><Col id=\"DS_CODE\">배정</Col><Col id=\"CD_CODE\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_SLIP", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">현금</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">어음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_DEFER", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Y</Col></Row><Row><Col id=\"DS_CODE\">N</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PAYMENT2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CASH", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">현금</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">어음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExec", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_ALLOT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DIRECT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CASH\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CASH_EXEC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_REQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_EXPIRY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT_EXEC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT_EXEC\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"QN_ILSU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_CASH_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CASH_VALUE_EXEC\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EFDTE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"NM_OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CLAIM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SUJI\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUJI\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DEFER\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEFER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RM_DEFER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAssignConfirmRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTrans", this);
            obj._setContents("<ColumnInfo><Column id=\"TM_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_EXEC\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAssignRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_APPR", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"78","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_DT","ccfCD_CORP:10","10.0","103","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_DT");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQ_FR","ccboYN_DT:5","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclDT_REQ_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQ_TO","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPTOPER","ctclDT_REQ_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPTOPER","staCD_DEPTOPER:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DFX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_EXEC","ccfCD_DEPTOPER:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("배정구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_EXEC","staYN_EXEC:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsYN_EXEC");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CASH","ccboYN_EXEC:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("현금구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","staTY_CASH:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CASH00","ccboTY_GUBUN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("전표승인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_APPR","staTY_CASH00:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_innerdataset("dsYN_APPR");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","staCD_CORP:10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DFX_CFVENDOR");
            obj.getSetter("CDTextWidth").set("65");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_SEND_FR","ccfCD_VENDOR:0.0","staCD_CORP:10.0","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("집행일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SEND_FR","staDT_SEND_FR:0.0","staCD_CORP:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ctclDT_SEND_FR:0.0","staCD_CORP:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SEND_TO","sta01:0.0","staCD_CORP:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_PAYMENT2","ctclDT_SEND_TO:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("출금구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_PAYMENT2","staTY_PAYMENT2:0.0","staCD_CORP:10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_PAYMENT2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_DEFER","ccboTY_PAYMENT2:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("보류여부");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_DEFER","staYN_DEFER:0.0","staCD_CORP:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsYN_DEFER");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_CONFIRM","ccboYN_EXEC:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("집행전표");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_SLIP","staYN_CONFIRM:0.0","staCD_CORP:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsYN_SLIP");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","35%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cursor("ns-resize");
            obj.set_cssclass("div_Splitter");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("■ 자금청구내역");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGridAssign","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnMibulSlip",null,"0","100","22","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("미지급전표조회");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnChangeAccount",null,"0","100","22","btnMibulSlip:5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_text("계좌번호변경");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnDocQ",null,"0","120","22","btnChangeAccount:5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_text("자금신청품의서조회");
            obj.set_visible("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAMTSUM_Chage","sta01:5","0","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCNTSUM_Charge","txtAMTSUM_Chage:5","0","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("원 0건");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR",null,"0","86","20","490",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_text("선택합계");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtDragSUM",null,"0","100","20","btnDocQ:62",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_format("#,###");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.set_textAlign("right");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDragCnt",null,"0","60","20","btnDocQ:0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_text("원 0건");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnAssign",null,"0","100","22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("일괄개별배정");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnAllAssign",null,"0","100","22","btnAssign:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("일괄합산배정");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnAssignConfirm",null,"0","100","22","btnAllAssign:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("배정내역확정");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("9");
            obj.set_text("■ 자금배정내역");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divSearchBottom","0","sta02:5",null,"31","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("10");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta00","10","4","105","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divSearchBottom.form);
            obj.set_taborder("9");
            obj.set_text("현금/어음");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divData.form.divDataBottom.form.divSearchBottom.addChild(obj.name, obj);

            obj = new Combo("cboTY_CASH","sta00:0","4","80","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divSearchBottom.form);
            obj.set_taborder("0");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_CASH");
            obj.set_readonly("false");
            this.divData.form.divDataBottom.form.divSearchBottom.addChild(obj.name, obj);

            obj = new Static("sta01","cboTY_CASH:0","4","92","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divSearchBottom.form);
            obj.set_taborder("8");
            obj.set_text("집행일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divData.form.divDataBottom.form.divSearchBottom.addChild(obj.name, obj);

            obj = new Calendar("tclDT_REQ","sta01:0","4","105","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divSearchBottom.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.divDataBottom.form.divSearchBottom.addChild(obj.name, obj);

            obj = new Static("sta02","tclDT_REQ:10","4","92","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divSearchBottom.form);
            obj.set_taborder("10");
            obj.set_text("집행금액");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divData.form.divDataBottom.form.divSearchBottom.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_REQ","sta02:0","4","120","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divSearchBottom.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataBottom.form.divSearchBottom.addChild(obj.name, obj);

            obj = new Static("sta03","txtAM_REQ:0","4","20","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divSearchBottom.form);
            obj.set_taborder("11");
            obj.set_text("원");
            this.divData.form.divDataBottom.form.divSearchBottom.addChild(obj.name, obj);

            obj = new Static("sta05","10","sta00:7","80","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divSearchBottom.form);
            obj.set_taborder("12");
            obj.set_text("증빙거래처");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataBottom.form.divSearchBottom.addChild(obj.name, obj);

            obj = new Edit("txtCD_PAY","sta05:-15","cboTY_CASH:7","80","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divSearchBottom.form);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divSearchBottom.addChild(obj.name, obj);

            obj = new Edit("txtDS_PAY","txtCD_PAY:5","31","200","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divSearchBottom.form);
            obj.set_taborder("4");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divSearchBottom.addChild(obj.name, obj);

            obj = new Static("sta06","txtDS_PAY:10","sta01:7","100","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divSearchBottom.form);
            obj.set_taborder("13");
            obj.set_text("증빙거래처계좌");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divSearchBottom.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT","sta06:-5","tclDT_REQ:7","285","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divSearchBottom.form);
            obj.getSetter("CodeFindName").set("DFX_CFACCOUNTMATCH");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divSearchBottom.addChild(obj.name, obj);

            obj = new Static("sta10","780","sta05:-23","80","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divSearchBottom.form);
            obj.set_taborder("14");
            obj.set_text("실지급거래처");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataBottom.form.divSearchBottom.addChild(obj.name, obj);

            obj = new Div("cfCD_REAL_PAY","sta10:0","txtDS_PAY:-23","285","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divSearchBottom.form);
            obj.getSetter("CodeFindName").set("DHX_CFVENDOR_BY_TYVENDOR");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divSearchBottom.addChild(obj.name, obj);

            obj = new Static("sta11","cfCD_REAL_PAY:10","sta06:-23","100","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divSearchBottom.form);
            obj.set_taborder("15");
            obj.set_text("실지급거래처계좌");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divSearchBottom.addChild(obj.name, obj);

            obj = new Div("cfNO_REAL_ACCOUNT","sta11:5","cfNO_ACCOUNT:-23","285","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divSearchBottom.form);
            obj.getSetter("CodeFindName").set("DFX_CFACCOUNTMATCH");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divSearchBottom.addChild(obj.name, obj);

            obj = new Static("sta03","0","divSearchBottom:5","100","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("11");
            obj.set_text("■ 자금집행내역");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta03:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("12");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"63","70","22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("7");
            obj.set_text("전표취소");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnSlip",null,"63","70","22","btnCancel:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("6");
            obj.set_text("전표조회");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnTrans",null,"63","70","22","btnSlip:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_text("전표발행");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new MaskEdit("txtAMTSUM","sta03:5","divSearchBottom:5","100","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("3");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staCNTSUM","txtAMTSUM:5","divSearchBottom:5","100","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("13");
            obj.set_text("원 0건");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnOfflineInsert",null,"63","80","22","btnTrans:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("14");
            obj.set_text("오프라인처리");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnBranchInsert",null,"63","90","22","btnOfflineInsert:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("16");
            obj.set_text("집행내역전송");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnDT_REQUESTModify",null,"63","90","22","btnBranchInsert:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("17");
            obj.set_text("집행일자수정");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnSetNO_ACCOUNT",null,"63","90","22","btnDT_REQUESTModify:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("18");
            obj.set_text("출금계좌변경");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnExecEdit",null,"63","140","22","btnSetNO_ACCOUNT:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("18");
            obj.set_text("출금구분및입금계좌변경");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("tbbAssignCncl",null,"63","70","22","btnExecEdit:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("19");
            obj.set_text("배정취소");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnExecDetail",null,"63","100","22","tbbAssignCncl:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("20");
            obj.set_text("배정내역상세");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnCheckSelect",null,"63","90","22","btnExecDetail:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("21");
            obj.set_text("200건 선택");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnSlipView2",null,"divSearchBottom:5","100","22","btnCheckSelect:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("8");
            obj.set_text("전자결재조회");
            obj.set_visible("false");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboYN_DT","value","dsSearch","YN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_REQ_FR","value","dsSearch","DT_REQ_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_REQ_TO","value","dsSearch","DT_REQ_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPTOPER.form.CDTextBox","value","dsSearch","CD_DEPTOPER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboYN_EXEC","value","dsSearch","YN_EXEC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboYN_SLIP","value","dsSearch","YN_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ctclDT_SEND_FR","value","dsSearch","DT_SEND_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ctclDT_SEND_TO","value","dsSearch","DT_SEND_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ccboYN_DEFER","value","dsSearch","YN_DEFER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.ccboTY_PAYMENT2","value","dsSearch","TY_PAYMENT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataBottom.form.divSearchBottom.form.cboTY_CASH","value","dsPnl1","TY_CASH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataBottom.form.divSearchBottom.form.tclDT_REQ","value","dsPnl1","DT_REQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataBottom.form.divSearchBottom.form.txtAM_REQ","value","dsPnl1","AM_REQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataBottom.form.divSearchBottom.form.txtCD_PAY","value","dsPnl1","CD_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataBottom.form.divSearchBottom.form.txtDS_PAY","value","dsPnl1","DS_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataBottom.form.divSearchBottom.form.cfNO_ACCOUNT.form.CDTextBox","value","dsPnl1","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataBottom.form.divSearchBottom.form.cfNO_ACCOUNT.form.DSTextBox","value","dsPnl1","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataBottom.form.divSearchBottom.form.cfCD_REAL_PAY.form.CDTextBox","value","dsPnl1","CD_REAL_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataBottom.form.divSearchBottom.form.cfCD_REAL_PAY.form.DSTextBox","value","dsPnl1","DS_REAL_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataBottom.form.divSearchBottom.form.cfNO_REAL_ACCOUNT.form.CDTextBox","value","dsPnl1","NO_REAL_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataBottom.form.divSearchBottom.form.cfNO_REAL_ACCOUNT.form.DSTextBox","value","dsPnl1","DS_REAL_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccboYN_APPR","value","dsSearch","YN_APPR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFB_REQUESTASSIGN_EXECTRAN.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var tmSlip = "";	// 병합전표발행KEY
        var btnName = "";	// 버튼명
        var dtReq = "";		// 집행요청일자
        var cdCorp = "";	// 법인코드
        var amDragTotal = 0;
        this.nShift = 0;

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

        	// 환경변수 사용
        	//var cd_payment = this.gfnGetConfig("DZ", "CD_PAYMENT");

        	if(!this.gfnIsNull(this.getOwnerFrame().DT_REQ_FR)) {
        		this.dsSearch.setColumn(0, "DT_REQ_FR", this.getOwnerFrame().DT_REQ_FR);
        		this.dsSearch.setColumn(0, "DT_SEND_FR", this.getOwnerFrame().DT_REQ_FR);
        		this.divSearch.form.ccboYN_EXEC.set_index(0);
        		this.divSearch.form.ccboYN_SLIP.set_index(0);
        		this.divSearch.form.ccboYN_APPR.set_index(0);
        // 		this.dsSearch.setColumn(0, "YN_EXEC", '');
        // 		this.dsSearch.setColumn(0, "YN_CONFIRM", '');
        // 		this.dsSearch.setColumn(0, "YN_APPR", '');
        	}

        };


        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
            this.btn1 = this.gfnFormButtonAdd("ExcelAssign", "fnExcelAssign"); // 액셀배정 2021.12.28
            this.btn2 = this.gfnFormButtonAdd("NoteFile", "fnNoteFile");
        	//this.btn2 = this.gfnFormButtonAdd("ExecNoteMng", "fnExecNoteMng");
        	this.btn3 = this.gfnFormButtonAdd("ExecTranGW", "fnExecTranGW");
        	this.btn3 = this.gfnFormButtonAdd("AdvncInsrt", "fnAdvncInsrt");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGridAssign = this.divData.form.divDataTop.form.objGridAssign;
        	this.dxGrid = this.divData.form.divDataBottom.form.objGrid;

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPTOPER = this.divSearch.form.ccfCD_DEPTOPER;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.ccboYN_DT = this.divSearch.form.ccboYN_DT;
        	this.ccboYN_EXEC = this.divSearch.form.ccboYN_EXEC;
        	this.ccboYN_SLIP = this.divSearch.form.ccboYN_SLIP;
        	this.ccboYN_DEFER = this.divSearch.form.ccboYN_DEFER;
        	//this.ccboYN_SLIP = this.divSearch.form.ccboYN_SLIP;


        	this.cfCD_SUJI = this.divData.form.divDataBottom.form.divSearchBottom.form.cfCD_SUJI;
        	this.cfNO_ACCOUNT = this.divData.form.divDataBottom.form.divSearchBottom.form.cfNO_ACCOUNT;
        	this.cfCD_REAL_PAY = this.divData.form.divDataBottom.form.divSearchBottom.form.cfCD_REAL_PAY;
        	this.cfNO_REAL_ACCOUNT = this.divData.form.divDataBottom.form.divSearchBottom.form.cfNO_REAL_ACCOUNT;
        	this.cboTY_CASH = this.divData.form.divDataBottom.form.divSearchBottom.form.cboTY_CASH;
        	//this.tclDT_EXPIRE = this.divData.form.divDataBottom.form.divSearchBottom.form.tclDT_EXPIRE;
        	this.txtAM_REQ = this.divData.form.divDataBottom.form.divSearchBottom.form.txtAM_REQ;

        	this.btnMibulSlip = this.divData.form.divDataTop.form.btnMibulSlip;
        	this.btnSlip = this.divData.form.divDataBottom.form.btnSlip;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGridAssign, this.dsListAssign, "DF", "DFB_REQUESTASSIGN_EXECTRAN");
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFB_REQUESTASSIGN_EXECTRAN2");

        	this.dxGridAssign.addEventHandler("onselectchanged", this.fnGridAssign_RowCellChanged, this);
        	//this.dxGridAssign.addEventHandler("onkeydown", this.fnGridAssign_onkeydown, this);
        // 	this.dxGridAssign.addEventHandler("onlbuttonup", this.fnGridAssign_onlbuttonup, this);
        // 	this.dxGridAssign.addEventHandler("ondrag", this.fnGridAssign_ondrag, this);
        // 	this.dxGridAssign.addEventHandler("ondragleave", this.fnGridAssign_ondragleave, this);

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.dxGridAssign.AfterEdit = "fnGridAssign_AfterEdit";
        	this.dxGridAssign.AfterAllCheck = "fnGrid_AfterAllCheck";

        	this.dxGrid.AfterEdit = "fnGridAssign_AfterEdit";
        	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	this.dxGridAssign.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPTOPER.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//this.cfCD_SUJI.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_REAL_PAY.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_REAL_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//this.fnCombo("B2", "dsTY_PAYMENT2");

        // 	this.dsSearch.setColumn(0, "YN_DT", "Y");
        // 	this.dsSearch.setColumn(0, "YN_EXEC", "N");
        // 	this.dsSearch.setColumn(0, "YN_CONFIRM", "N");
        // 	this.dsSearch.setColumn(0, "TY_GUBUN", "");
        // 	this.dsSearch.setColumn(0, "YN_DEFER", "");
        // 	//this.dsSearch.setColumn(0, "YN_SLIP", "");

        	this.dsSearch.setColumn(0, "DT_REQ_FR", this.gfnGetDate());
        	this.dsSearch.setColumn(0, "DT_REQ_TO", this.gfnAddMonth(this.gfnGetDate(), 1));
        	this.dsSearch.setColumn(0, "DT_SEND_FR", this.gfnGetDate());
        	this.dsSearch.setColumn(0, "DT_SEND_TO", this.gfnAddMonth(this.gfnGetDate(), 1));

        	this.dsPnl1.setColumn(0, "TY_CASH", "C");

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_REQ_FR", "string");
        	this.dsSelect.addColumn("DT_REQ_TO", "string");
        	this.dsSelect.addColumn("YN_EXEC", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("YN_DEFER", "string");
        	this.dsSelect.addColumn("YN_SLIP", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YN_DT", "string");
        	this.dsSelect.addColumn("CD_DEPTOPER", "string");
        	this.dsSelect.addColumn("TY_PAYMENT2", "string");
        	this.dsSelect.addColumn("YN_APPR", "string");

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("DT_SEND_FR", "string");
        	this.dsSelect2.addColumn("DT_SEND_TO", "string");
        	this.dsSelect2.addColumn("YN_SLIP", "string");
        	this.dsSelect2.addColumn("TY_CASH", "string");
        	this.dsSelect2.addColumn("CD_VENDOR", "string");
        	this.dsSelect2.addColumn("CD_CORP", "string");
        	this.dsSelect2.addColumn("TY_PAYMENT2", "string");
        	this.dsSelect2.addColumn("CD_DEPTOPER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_REQUEST", "bigdecimal");
        	this.dsUpdate.addColumn("SEQ_ALLOT", "bigdecimal");
        	this.dsUpdate.addColumn("YN_DEFER", "string");
        	this.dsUpdate.addColumn("AM_DEFER", "bigdecimal");
        	this.dsUpdate.addColumn("RM_DEFER", "string");
        	this.dsUpdate.addColumn("CD_SUJI", "string");
        	this.dsUpdate.addColumn("TY_PAYMENT2", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("YN_CASH", "string");
        	this.dsUpdate.addColumn("DT_EXPIRY", "string");

        	this.dsSeqUpdate = new Dataset();
        	this.dsSeqUpdate.addColumn("SEQ_EXEC", "bigdecimal");
        	this.dsSeqUpdate.addColumn("NO_REQUEST", "bigdecimal");
        	this.dsSeqUpdate.addColumn("SEQ_ALLOT", "bigdecimal");
        	this.dsSeqUpdate.addColumn("YN_CASH", "string");
        	this.dsSeqUpdate.addColumn("AM_BAEJUNG", "bigdecimal");
        	this.dsSeqUpdate.addColumn("DT_EXPIRY", "string");

        	this.dsAssignConfirm = new Dataset();
        	this.dsAssignConfirm.addColumn("TY_PAYMENT", "string");
        	this.dsAssignConfirm.addColumn("TY_GUBUN", "string");
        	this.dsAssignConfirm.addColumn("CD_VENDOR", "string");
        	this.dsAssignConfirm.addColumn("CD_PAY", "string");
        	this.dsAssignConfirm.addColumn("TY_CASH", "string");
        	this.dsAssignConfirm.addColumn("DT_REQ", "string");
        	this.dsAssignConfirm.addColumn("DT_EXPIRY", "string");
        	this.dsAssignConfirm.addColumn("AM_AMT", "bigdecimal");
        	this.dsAssignConfirm.addColumn("NO_REQUEST", "bigdecimal");
        	this.dsAssignConfirm.addColumn("TY_VENDOR", "string");
        	this.dsAssignConfirm.addColumn("OUT_SEQ_EXEC", "bigdecimal");
        	this.dsAssignConfirm.addColumn("NO_ACCOUNT", "string");
        	this.dsAssignConfirm.addColumn("TY_ACCOUNT_GU", "string");
        	this.dsAssignConfirm.addColumn("CD_CORP", "string");
        	this.dsAssignConfirm.addColumn("CD_TEMPSUJI", "string");
        	this.dsAssignConfirm.addColumn("CD_PAY_VENDOR", "string");
        	this.dsAssignConfirm.addColumn("NO_PAY_ACCOUNT", "string");
        	this.dsAssignConfirm.addColumn("NO_MAIN_ACCOUNT", "string");

        	this.dsAssign = new Dataset();
        	this.dsAssign.addColumn("TM_EXEC", "string");
        	this.dsAssign.addColumn("YN_EXEC", "string");
        	this.dsAssign.addColumn("TY_EXEC", "string");
        	this.dsAssign.addColumn("NO_REQUEST", "bigdecimal");
        	this.dsAssign.addColumn("SEQ_ALLOT", "bigdecimal");
        	this.dsAssign.addColumn("DT_REQ", "string");
        	this.dsAssign.addColumn("AM_AMT", "bigdecimal");
        	this.dsAssign.addColumn("NO_ACCOUNT", "string");
        	this.dsAssign.addColumn("TY_ACCOUNT_GU", "string");
        	this.dsAssign.addColumn("CD_PAY_VENDOR", "string");
        	this.dsAssign.addColumn("TY_PAY_VENDOR", "string");
        	this.dsAssign.addColumn("NO_PAY_ACCOUNT", "string");
        	this.dsAssign.addColumn("TY_PAY_GU", "string");
        	this.dsAssign.addColumn("ID_USER", "string");

        	//this.dsDragAssign = new Dataset();

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGridAssign);
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dxGridAssign.setCellProperty("head", 2, "text", 0);
        	this.dxGrid.setCellProperty("head", 1, "text", 0);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "DT_REQ_FR", this.dsSearch.getColumn(0, "DT_REQ_FR"));
        	this.dsSelect.setColumn(0, "DT_REQ_TO", this.dsSearch.getColumn(0, "DT_REQ_TO"));
        	this.dsSelect.setColumn(0, "YN_EXEC", this.dsSearch.getColumn(0, "YN_EXEC"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "YN_DEFER", this.dsSearch.getColumn(0, "YN_DEFER"));
        	this.dsSelect.setColumn(0, "YN_SLIP", this.dsSearch.getColumn(0, "YN_SLIP"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YN_DT", this.dsSearch.getColumn(0, "YN_DT"));
        	this.dsSelect.setColumn(0, "CD_DEPTOPER", this.dsSearch.getColumn(0, "CD_DEPTOPER"));
        	this.dsSelect.setColumn(0, "TY_PAYMENT2", this.dsSearch.getColumn(0, "TY_PAYMENT2"));
        	this.dsSelect.setColumn(0, "YN_APPR", this.dsSearch.getColumn(0, "YN_APPR"));

        	this.dsSelect2.clearData();
        	this.dsSelect2.addRow();
        	this.dsSelect2.setColumn(0, "DT_SEND_FR", this.dsSearch.getColumn(0, "DT_SEND_FR"));
        	this.dsSelect2.setColumn(0, "DT_SEND_TO", this.dsSearch.getColumn(0, "DT_SEND_TO"));
        	this.dsSelect2.setColumn(0, "YN_SLIP", this.dsSearch.getColumn(0, "YN_SLIP"));
        	this.dsSelect2.setColumn(0, "TY_CASH", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect2.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect2.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect2.setColumn(0, "TY_PAYMENT2", this.dsSearch.getColumn(0, "TY_PAYMENT2"));
        	this.dsSelect2.setColumn(0, "CD_DEPTOPER", this.dsSearch.getColumn(0, "CD_DEPTOPER"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select2=dsSelect2";
        	var outData     = "dsListAssign=select0 dsList=select20";
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
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridAssign)) return;

        	this.dxGridAssign.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsListAssign.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListAssign, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_REQUEST", this.dsListAssign.getColumn(i, "NO_REQUEST"));
        				this.dsUpdate.setColumn(nrow, "SEQ_ALLOT", this.dsListAssign.getColumn(i, "SEQ_ALLOT"));
        				this.dsUpdate.setColumn(nrow, "YN_DEFER", this.dsListAssign.getColumn(i, "YN_DEFER"));
        				this.dsUpdate.setColumn(nrow, "AM_DEFER", this.dsListAssign.getColumn(i, "AM_DEFER"));
        				this.dsUpdate.setColumn(nrow, "RM_DEFER", this.dsListAssign.getColumn(i, "RM_DEFER"));
        				this.dsUpdate.setColumn(nrow, "DT_EXPIRY", this.dsListAssign.getColumn(i, "DT_EXPIRY"));
        				this.dsUpdate.setColumn(nrow, "CD_SUJI", this.dsListAssign.getColumn(i, "CD_SUJI"));
        				this.dsUpdate.setColumn(nrow, "TY_PAYMENT2", this.dsListAssign.getColumn(i, "TY_PAYMENT2"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "YN_CASH", this.dsListAssign.getColumn(i, "YN_CASH"));

        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

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
        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_AREA"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("영업소를 입력하세요.", "fnVaidateCallback");
        // 	}
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
        		this.gfnGridAfterSelect(this.dxGridAssign);
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.dsExec.clearData();
        		this.dsPnl1.clearData();
        		this.dsPnl1.addRow();

        		this.divData.form.divDataTop.form.txtAMTSUM_Chage.set_value(0);
        		this.divData.form.divDataTop.form.staCNTSUM_Charge.set_text("원 " + 0 + "건");

        		this.divData.form.divDataBottom.form.txtAMTSUM.set_value(0);
        		this.divData.form.divDataBottom.form.staCNTSUM.set_text("원 " + 0 + "건");

        		this.dxGrid.updateToDataset();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			//this.FormBtns.Select.click();
        			this.gfnAlert("정상적으로 처리되었습니다.", "",svcID, "fnMsgCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo") {
        		//  조회조건(발행여부)
        		var iRow = this.dsYN_SLIP.insertRow(0);
        		this.dsYN_SLIP.setColumn(iRow, "CD_CODE", "");
        		this.dsYN_SLIP.setColumn(iRow, "DS_CODE", "전체");
        		this.ccboYN_SLIP.set_index(2);

        		var iRow = this.dsTY_PAYMENT2.insertRow(0);
        		this.dsTY_PAYMENT2.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_PAYMENT2.setColumn(iRow, "DS_CODE", "전체");
        		this.divSearch.form.ccboTY_PAYMENT2.set_index(0);

         		var iRow = this.dsYN_APPR.insertRow(0);
         		this.dsYN_APPR.setColumn(iRow, "CD_CODE", "");
         		this.dsYN_APPR.setColumn(iRow, "DS_CODE", "전체");
        		var iRow = this.dsYN_APPR.insertRow(1);
         		this.dsYN_APPR.setColumn(iRow, "CD_CODE", "X");
         		this.dsYN_APPR.setColumn(iRow, "DS_CODE", "집행대상");
         		this.divSearch.form.ccboYN_APPR.set_index(3);

        		this.dsTY_GUBUN.insertRow(0);
        		this.dsTY_GUBUN.setColumn(0, "CD_CODE", "");
        		this.dsTY_GUBUN.setColumn(0, "DS_CODE", "전체");
        		this.divSearch.form.ccboTY_GUBUN.set_index(0);

        		this.divSearch.form.ccboYN_EXEC.set_index(1);
        		this.divSearch.form.ccboYN_DEFER.set_index(0);
        		this.divSearch.form.ccboYN_DT.set_index(0);
        		if(!this.gfnIsNull(this.getOwnerFrame().DT_REQ_FR)) {
        			this.dsSearch.setColumn(0, "DT_REQ_FR", this.getOwnerFrame().DT_REQ_FR);
        			this.dsSearch.setColumn(0, "DT_SEND_FR", this.getOwnerFrame().DT_REQ_FR);
        			this.divSearch.form.ccboYN_EXEC.set_index(0);
        			this.divSearch.form.ccboYN_SLIP.set_index(0);
        			this.divSearch.form.ccboYN_APPR.set_index(0);
        	// 		this.dsSearch.setColumn(0, "YN_EXEC", '');
        	// 		this.dsSearch.setColumn(0, "YN_CONFIRM", '');
        	// 		this.dsSearch.setColumn(0, "YN_APPR", '');
        		}

        	}
        	else if(svcID == "AssignConfirm") {
        		if (errorCode == 0) {
        			//trace("this._rtnVar :: " + this.dsAssignConfirmRtn.saveXML());

        			//this.gfnAlert("배정내역확정!");
        			this.fnSeqUpdate();
        		}
        	} else if (svcID == "SeqUpdate") {
        		this.gfnAlert("정상적으로 처리되었습니다.", "",svcID, "fnMsgCallback");
        	}
        	else if(svcID == "AssignCancel") {
        		if (errorCode == 0) {
        			this.gfnAlert("정상적으로 처리되었습니다.", "",svcID, "fnMsgCallback");
        		}
        	}
        	else if (svcID == "connect") {
        		if (errorCode == 0) {
        			this.gfnAlert("정상적으로 처리되었습니다.", "",svcID, "fnMsgCallback");
        		}
        	} else if (svcID == "transN") {
        		if (errorCode == 0) {
        			this.fnTrans("Y");
        		}
        	} else if (svcID == "transY") {
        		if (errorCode == 0) {
        			this.gfnAlert("정상적으로 처리되었습니다.", "", svcID, "fnMsgCallback");
        		}

        	} else if (svcID == "AssignN") {
        		this.fnAssign("Y", dtReq);

        	// 배정내역 확정이 아닐경우에만 성공/실패건수 보여줘야함.
        	} else if (svcID == "AssignY" && btnName != "배정내역확정") {

        		trace(this.dsAssignRtn.saveXML());

        		var successCnt = this.dsAssignRtn.getColumn(0, "CT_SUCCESS");
        		var failCnt = this.dsAssignRtn.getColumn(0, "CT_FAIL");
        		var msg = btnName + "작업을 완료하였습니다. \n성공:" + successCnt + "건, 실패:" + failCnt + "건";
        		this.gfnAlert(msg, "", svcID, "fnMsgCallback");

        	} else if (svcID == "BranchInsert" || svcID == "BranchDelete") {

        		this.gfnAlert("정상적으로 처리되었습니다.", "", svcID, "fnMsgCallback");

        	} else if (svcID == "AssignY" && btnName == "배정내역확정") {
        		this.gfnAlert("정상적으로 처리되었습니다.", "", svcID, "fnMsgCallback");
        	}
        }

        this.fnMsgCallback = function(strId, strVal) {
        	switch(strId) {
        		case "SeqUpdate":
        		case "AssignCancel":
        		case "connect":
        		case "transY":
        		case "AssignY":
        		case "BranchInsert":
        		case "BranchDelete":
        		case "save":
        			this.dxGridAssign.setCellProperty("head", 2, "text", 0);
        			this.dxGrid.setCellProperty("head", 1, "text", 0);
        			this.FormBtns.Select.click();
        		break;
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP);
        	}
        	else if (id == "ccfCD_DEPTOPER") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	}
        	else if (id == "ccfCD_VENDOR") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "전체");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	}
        	else if (id == "cfCD_SUJI") {
        		dsUserParam.setColumn(nrow, "", "");
        		dsUserParam.setColumn(nrow, "", "");
        		dsUserParam.setColumn(nrow, "", "");
        		dsUserParam.setColumn(nrow, "", "");
        	}
        	else if (id == "cfNO_ACCOUNT") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "");
        		dsUserParam.setColumn(nrow, "CD_PAY", this.dsPnl1.getColumn(0, "CD_PAY"));
        		dsUserParam.setColumn(nrow, "TY_CASH", this.dsPnl1.getColumn(0, "TY_CASH"));
        		dsUserParam.setColumn(nrow, "CD_CORP", "");
        	}
        	else if (id == "cfCD_REAL_PAY") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT_REF", "");
        		dsUserParam.setColumn(nrow, "ORIGENTTAX", "");
        	}
        	else if (id == "cfNO_REAL_ACCOUNT") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "");
        		dsUserParam.setColumn(nrow, "CD_PAY", this.dsPnl1.getColumn(0, "CD_PAY"));
        		dsUserParam.setColumn(nrow, "TY_CASH", this.dsPnl1.getColumn(0, "TY_CASH"));
        		dsUserParam.setColumn(nrow, "CD_CORP", "");
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGridAssign_RowCellChanged = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGridAssign)) return;

        	if (this.gfnIsNull(this.dsListAssign.getColumn(this.dsListAssign.rowposition, "NO_SLIP1"))) {
        		this.btnMibulSlip.set_enable(false);
        	}
        	else {
        		this.btnMibulSlip.set_enable(true);
        	}
        	this.fnUpdateStatusExtendButton();


        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	var objDs = obj.getBindDataset();
        	var rows = obj.getSelectedDatasetRows();
        	var sum = 0;
        	var bRet = true;
        	var nRow = 0;

        	if(colnm =="AM_BAEJUNG"){
        		for(var i = 0; i < rows.length; i++) {
        			var am = objDs.getColumn(rows[i], colnm);

        			bRet = isNaN(am); // 문자:true, 숫자:false

        			if(bRet == true){
        				break;
        			}

        			if(!this.gfnIsNull(am) && am > 0 ) {
        				sum += nexacro.toNumber(am, 0);
        				nRow += 1;
        			}
        		}
        		//trace("nRow: "+ nRow);
                this.divData.form.divDataTop.form.txtDragSUM.set_value(sum);
        		this.divData.form.divDataTop.form.staDragCnt.set_text("원 " + nRow + " 건" );
        	} else {
        	    this.divData.form.divDataTop.form.txtDragSUM.set_value(0);
        		this.divData.form.divDataTop.form.staDragCnt.set_text("원 0 건" );
        	}
        };

         this.fnGrid_RowCellChanged = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP"))) {
        		this.btnSlip.set_enable(false);
        	}
        	else {
        		this.btnSlip.set_enable(true);
        	}

        };

        this.fnGridAssign_AfterEdit = function(obj,e) {
        trace("fnGridAssign_AfterEdit");
        	if(e.columnid == "CHK0") {
        		if(e.oldvalue != e.newvalue) {
        			var row = this.dsListAssign.rowposition;
        			if (this.dsListAssign.getColumn(row, "SEQ_EXECDESC") == "배정") {
        				this.gfnAlert("해당 자료는 이미 자금이 배정된 상태입니다.!!!");
        				this.dsListAssign.setColumn(row, "CHK0", 0);
        				return false;
        			}
        			if (this.dsListAssign.getColumn(row, "YN_UNFIT") == "Y") {
        				this.gfnAlert("해당 청구번호는 적합성실패자료입니다.!!!\n해당 청구번호을 자금청구화면에서 삭제하세요.!!!");
        				this.dsListAssign.setColumn(row, "CHK0", 0);
        				return false;
        			}
        			if (this.dsListAssign.getColumn(row, "YN_JIGUEB") == "N") {
        				this.gfnAlert("해당 청구의 거래처는 채권채무 지급불가 입니다.!!!");
        				this.dsListAssign.setColumn(row, "CHK0", 0);
        				return false;
        			}
        // 			if (this.dsListAssign.getColumn(row, "YN_DEFER") == "Y") {
        // 				this.gfnAlert("보류 상태의 자료입니다. 선택할 수 없습니다.!!!");
        // 				this.dsListAssign.setColumn(row, "CHK0", 0);
        // 				return false;
        // 			}

        			if (this.dsListAssign.getColumn(row, "YN_APPR") == "N") {
        				this.gfnAlert("전표 미승인 자료입니다. 선택할 수 없습니다.!!!");
        				this.dsListAssign.setColumn(row, "CHK0", 0);
        				return false;
        			}


        			if (this.dsListAssign.getColumn(row, "CHK0") == 1) {
        				if (!this.fnAssign_asgn(row)) {
        					this.dsListAssign.setColumn(row, "CHK0", 0);
        					return false;
        				}
        			}
        			else {
        				this.fnCancel(row);
        			}

        				this.fnDataDisplay_asgn();
        		}
        	}

        	trace("obj ::: " + obj.name);

        	if (e.columnid == "CHK") {
        		if (e.newvalue == 1 && obj.name == "dsListAssign") {
        			var row = this.dsListAssign.rowposition;
        // 			if (this.dsListAssign.getColumn(row, "YN_DEFER") == "Y") {
        // 				this.gfnAlert("보류 상태의 자료입니다. 선택할 수 없습니다.!!!");
        // 				this.dsListAssign.setColumn(row, "CHK", 0);
        // 				return false;
        // 			}

        			if (this.dsListAssign.getColumn(row, "YN_APPR") == "N") {
        				this.gfnAlert("전표 미승인 자료입니다. 선택할 수 없습니다.!!!");
        				this.dsListAssign.setColumn(row, "CHK", 0);
        				return false;
        			}
        		}
        		var chkCnt = obj.getCaseCount("CHK == 1");
        		//trace("chkCnt ::: " + chkCnt);
        		var cdCorp1 = "";
        		var cdCorp2 = "";
        		if (chkCnt > 1) {
        			var row = obj.rowposition;
        			var arrRows = obj.extractRows("CHK == 1");
        			for (var i=0; i < arrRows.length; i++) {
        				//trace("[" + i + "] :: " + arrRows[i]);
        				cdCorp1 = obj.getColumn(arrRows[i], "CD_CORP");
        				for (var j=0; j < arrRows.length; j++) {
        					if (i != j) {
        						cdCorp2 = obj.getColumn(arrRows[j], "CD_CORP");
        						if ( cdCorp1 != cdCorp2 ) {
        							this.gfnAlert("이전에 선택하신 [법인코드]와 \n현재 선택하신 [법인코드]가 동일하지 않습니다.!!!");
        							obj.setColumn(row, "CHK", 0);
        							return false;
        						}
        					}
        				}
        			}
        		}
        	}

        	if (e.columnid == "CHK0" || e.columnid == "CHK") {
        		if (e.columnid == "CHK0") {
        			//this.divData.form.divDataTop.form.txtAMTSUM_Chage.set_value(this.dsListAssign.getCaseSum("CHK0==1", "AM_MI_BAEJUNG"));
        			this.divData.form.divDataTop.form.txtAMTSUM_Chage.set_value(this.dsListAssign.getCaseSum("CHK0==1", "AM_BAEJUNG"));
        			this.divData.form.divDataTop.form.staCNTSUM_Charge.set_text("원 " + this.dsListAssign.getCaseCount("CHK0==1") + "건");
        		}

        		if (e.columnid == "CHK") {
        			//this.divData.form.divDataTop.form.txtAMTSUM_Chage.set_value(this.dsListAssign.getCaseSum("CHK==1", "AM_MI_BAEJUNG"));
        			this.divData.form.divDataTop.form.txtAMTSUM_Chage.set_value(this.dsListAssign.getCaseSum("CHK==1", "AM_BAEJUNG"));
        			this.divData.form.divDataTop.form.staCNTSUM_Charge.set_text("원 " + this.dsListAssign.getCaseCount("CHK==1") + "건");
        		}
        	}
        }


        this.fnCancel = function(row) {
        	if (this.dsExec.rowcount == 0) {
        		return false;
        	}

        	for(var i = 0; i < this.dsExec.rowcount; i++) {
        		if (this.dsExec.getColumn(i, "NO_REQUEST") == this.dsListAssign.getColumn(row, "NO_REQUEST")
        		&& this.dsExec.getColumn(i, "NO_REQUEST") == this.dsListAssign.getColumn(row, "NO_REQUEST")) {
        			this.dsExec.deleteRow(i);
        			break;
        		}
        	}

        	return true;
        }

        this.fnAssign_asgn = function(row) {
        	if (this.dsListAssign.getColumn(row, "YN_DIRECT") == "현장지급" && this.dsListAssign.getColumn(row, "YN_CASH") == "현금") {
        		this.gfnAlert("현금어음구분이 [현금]인 청구내역은 \n지급구분을 [현장지급]로 신청할 수 없습니다.!!!");
        		return false;
        	}

        	var arrChk = [];
        	for(var i = 0; i < this.dsListAssign.rowcount; i++) {
        		if(this.dsListAssign.getColumn(i, "CHK0") == 1) {
        			arrChk.push(i);
        		}
        	}

        	if (this.dsExec.rowcount > 0) {
        		var rcnt = this.dsExec.rowcount;
        		if (this.dsExec.getColumn(rcnt-1, "CD_CORP") != this.dsListAssign.getColumn(row, "CD_CORP")) {
        			this.gfnAlert("이전에 선택하신 분할내역의 [법인코드]와 \n현재 선택하신 분할내역의 [법인코드]가 동일하지 않습니다.!!!");
        			return false;
        		}
        		if (this.dsExec.getColumn(rcnt-1, "CD_PAY") != this.dsListAssign.getColumn(row, "CD_PAY")) {
        			this.gfnAlert("이전에 선택하신 분할내역의 [지급처]와 \n현재 선택하신 분할내역의 [지급처]가 동일하지 않습니다.!!!");
        			return false;
        		}
        		if (this.dsExec.getColumn(rcnt-1, "TY_CASH") != this.dsListAssign.getColumn(row, "YN_CASH")) {
        			this.gfnAlert("이전에 선택하신 분할내역의 [현금/어음]와 \n현재 선택하신 분할내역의 [현금/어음]가 동일하지 않습니다.!!!");
        			return false;
        		}
        		if (this.dsExec.getColumn(rcnt-1, "DT_REQUEST") != this.dsListAssign.getColumn(row, "DT_REQ")) {
        			this.gfnAlert("이전에 선택하신 분할내역의 [집행일자]와 \n현재 선택하신 분할내역의 [집행일자]가 동일하지 않습니다.!!!");
        			return false;
        		}
        	}

        	var r = this.dsExec.addRow();
        	this.dsExec.setColumn(r, "NO_REQUEST", this.dsListAssign.getColumn(row, "NO_REQUEST"));
        	this.dsExec.setColumn(r, "SEQ_ALLOT", this.dsListAssign.getColumn(row, "SEQ_ALLOT"));
        	this.dsExec.setColumn(r, "TY_PAYMENT", this.dsListAssign.getColumn(row, "TY_PAYMENT"));
        	this.dsExec.setColumn(r, "CD_CORP", this.dsListAssign.getColumn(row, "CD_CORP"));
        	this.dsExec.setColumn(r, "DS_CORP", this.dsListAssign.getColumn(row, "DS_CORP"));
        	this.dsExec.setColumn(r, "CD_VENDOR", this.dsListAssign.getColumn(row, "CD_VENDOR"));
        	this.dsExec.setColumn(r, "YN_DIRECT", this.dsListAssign.getColumn(row, "YN_DIRECT"));
        	this.dsExec.setColumn(r, "CD_PAY", this.dsListAssign.getColumn(row, "CD_PAY"));
        	this.dsExec.setColumn(r, "DS_PAY", this.dsListAssign.getColumn(row, "DS_PAY"));
        	this.dsExec.setColumn(r, "TY_CASH", this.dsListAssign.getColumn(row, "YN_CASH"));
        	this.dsExec.setColumn(r, "TY_CASH_EXEC", this.dsListAssign.getColumn(row, "YN_CASH"));
        	this.dsExec.setColumn(r, "CD_ACNT", this.dsListAssign.getColumn(row, "CD_ACNT"));
        	this.dsExec.setColumn(r, "DS_ACNT", this.dsListAssign.getColumn(row, "DS_ACNT"));
        	this.dsExec.setColumn(r, "DT_REQUEST", this.dsListAssign.getColumn(row, "DT_REQ"));
        	//this.dsExec.setColumn(r, "AM_REQ", this.dsListAssign.getColumn(row, "AM_MI_BAEJUNG"));
        	this.dsExec.setColumn(r, "AM_REQ", this.dsListAssign.getColumn(row, "AM_BAEJUNG"));
        	this.dsExec.setColumn(r, "DT_EXPIRY", this.dsListAssign.getColumn(row, "DT_EXPIRY"));
        	this.dsExec.setColumn(r, "NO_ACCOUNT", this.dsListAssign.getColumn(row, "NO_ACCOUNT"));
        	this.dsExec.setColumn(r, "DS_ACCOUNT", this.dsListAssign.getColumn(row, "DS_ACCOUNT"));
        	this.dsExec.setColumn(r, "NO_ACCOUNT_EXEC", this.dsListAssign.getColumn(row, "NO_ACCOUNT"));
        	this.dsExec.setColumn(r, "DS_ACCOUNT_EXEC", this.dsListAssign.getColumn(row, "DS_ACCOUNT"));
        	this.dsExec.setColumn(r, "TY_VENDOR", this.dsListAssign.getColumn(row, "TY_VENDOR"));
        	this.dsExec.setColumn(r, "QN_ILSU", this.dsListAssign.getColumn(row, "QN_ILSU"));
        	this.dsExec.setColumn(r, "YN_CASH_VALUE", this.dsListAssign.getColumn(row, "YN_CASH_VALUE"));
        	this.dsExec.setColumn(r, "YN_CASH_VALUE_EXEC", this.dsListAssign.getColumn(row, "YN_CASH_VALUE"));
        	this.dsExec.setColumn(r, "DT_EFDTE", this.dsListAssign.getColumn(row, "DT_EFDTE"));
        	this.dsExec.setColumn(r, "DS_PAYMENT", this.dsListAssign.getColumn(row, "DS_PAYMENT"));
        	this.dsExec.setColumn(r, "NM_OWNER", this.dsListAssign.getColumn(row, "NM_OWNER"));
        	this.dsExec.setColumn(r, "AM_CLAIM", this.dsListAssign.getColumn(row, "AM_CLAIM"));
        	this.dsExec.setColumn(r, "TY_GUBUN", this.dsListAssign.getColumn(row, "TY_GUBUN"));
        	this.dsExec.setColumn(r, "CD_SUJI", this.dsListAssign.getColumn(row, "CD_SUJI"));
        	this.dsExec.setColumn(r, "DS_SUJI", this.dsListAssign.getColumn(row, "DS_SUJI"));
        	this.dsExec.setColumn(r, "CD_VENDOR2", this.dsListAssign.getColumn(row, "CD_PAY"));
        	this.dsExec.setColumn(r, "DS_VENDOR2", this.dsListAssign.getColumn(row, "DS_VENDOR2"));
        	this.dsExec.setColumn(r, "NO_ACCOUNT2", this.dsListAssign.getColumn(row, "NO_ACCOUNT"));
        	this.dsExec.setColumn(r, "DS_ACCOUNT2", this.dsListAssign.getColumn(row, "DS_ACCOUNT"));
        	this.dsExec.setColumn(r, "YN_DEFER", this.dsListAssign.getColumn(row, "YN_DEFER"));
        	this.dsExec.setColumn(r, "AM_DEFER", this.dsListAssign.getColumn(row, "AM_DEFER"));
        	this.dsExec.setColumn(r, "RM_DEFER", this.dsListAssign.getColumn(row, "RM_DEFER"));

        	return true;
        }

        this.fnDataDisplay_asgn = function() {
        	//var row = this.dsListAssign.rowposition;

        	this.dsPnl1.setColumn(0, "NO_ACCOUNT", "");
        	this.dsPnl1.setColumn(0, "DS_ACCOUNT", "");
        	this.dsPnl1.setColumn(0, "CD_SUJI", "");
        	this.dsPnl1.setColumn(0, "DS_SUJI", "");

        	var arrChk = [];
        	for(var i = 0; i < this.dsListAssign.rowcount; i++) {
        		if(this.dsListAssign.getColumn(i, "CHK0") == 1) {
        			arrChk.push(i);
        		}
        	}

        	var row = this.dsExec.rowposition;

        	if (this.dsExec.rowcount > 0) {
        		//this.dsPnl1.setColumn(0, "YN_DIRECT", "");
        		this.dsPnl1.setColumn(0, "CD_PAY", this.dsExec.getColumn(row, "CD_PAY"));
        		this.dsPnl1.setColumn(0, "DS_PAY", this.dsExec.getColumn(row, "DS_PAY"));
        		this.dsPnl1.setColumn(0, "TY_CASH", this.dsExec.getColumn(row, "YN_CASH_VALUE_EXEC"));

        		this.dsPnl1.setColumn(0, "DT_REQ", this.dsExec.getColumn(row, "DT_REQUEST"));
        		//this.dsPnl1.setColumn(0, "DT_EFDTE", this.dsListAssign.getColumn(row, "DT_EFDTE"));

        		var strTY_CASH = this.dsExec.getColumn(row, "YN_CASH_VALUE_EXEC");
        		if (strTY_CASH == "B" || strTY_CASH == "F") {
        			strTY_CASH = "X";	//B2B
        		}

        		this.dsPnl1.setColumn(0, "TY_CASH", strTY_CASH);

         		this.dsPnl1.setColumn(0, "TY_PAYMENT2", this.dsListAssign.getColumn(row, "TY_PAYMENT"));
         		this.dsPnl1.setColumn(0, "DS_PAYMENT2", this.dsListAssign.getColumn(row, "DS_PAYMENT"));
        		this.dsPnl1.setColumn(0, "CD_SUJI", this.dsListAssign.getColumn(row, "CD_SUJI"));
        		this.dsPnl1.setColumn(0, "DS_SUJI", this.dsListAssign.getColumn(row, "DS_SUJI"));

        		if (this.dsPnl1.getColumn(0, "TY_CASH") != "C") {
        			//this.tclDT_EXPIRE.set_enable(true);
        			this.dsPnl1.setColumn(0, "QN_ILSU", this.dsListAssign.getColumn(row, "QN_ILSU"));
        			this.dsPnl1.setColumn(0, "DT_EXPIRE", this.dsListAssign.getColumn(row, "DT_EXPIRY"));
        		}
        		else {
        			//this.tclDT_EXPIRE.set_enable(false);
        			this.dsPnl1.setColumn(0, "QN_ILSU", "0");
        			this.dsPnl1.setColumn(0, "DT_EXPIRE", "");
        		}

        		var amDefer = 0;
        		var req_tot = 0;
        		var req_defer_tot = 0;
        		for(var i = 0; i < this.dsExec.rowcount; i++) {
        			req_tot += this.dsExec.getColumn(i, "AM_REQ");
        			req_defer_tot = req_tot;

        			if (this.dsExec.getColumn(i, "YN_DEFER") == "Y") {
        				amDefer += this.dsExec.getColumn(i, "AM_DEFER");
        			}
        		}

        		req_defer_tot -= amDefer;


        // 		if(arrChk.length == 1) {
        // 			this.txtAM_REQ.set_readonly(false);
        // 		}
        // 		else {
        // 			this.txtAM_REQ.set_readonly(false);
        // 		}

        		this.dsPnl1.setColumn(0, "NO_ACCOUNT", this.dsExec.getColumn(row, "NO_ACCOUNT"));
        		this.dsPnl1.setColumn(0, "DS_ACCOUNT", this.dsExec.getColumn(row, "DS_ACCOUNT"));

        		this.dsPnl1.setColumn(0, "AM_REQ", req_defer_tot);
        		this.dsPnl1.setColumn(0, "CD_REAL_PAY", this.dsExec.getColumn(row, "CD_PAY"));
        		this.dsPnl1.setColumn(0, "DS_REAL_PAY", this.dsExec.getColumn(row, "DS_PAY"));
        		this.dsPnl1.setColumn(0, "NO_REAL_ACCOUNT", this.dsExec.getColumn(row, "NO_ACCOUNT"));
        		this.dsPnl1.setColumn(0, "NO_REAL_ACCOUNT", this.dsExec.getColumn(row, "DS_ACCOUNT"));

        	}
        	else {
        		this.dsPnl1.clearData();
        		var nrow = this.dsPnl1.addRow();
        	}
        }


        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {

        	// 집행전표번호
        	if (id == "DFX_NO_SLIP_EXEC") {
        		dsUserParam.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(this.dsList.rowposition, "SEQ_EXEC"));
        	}

        	// 수지
        	if (id == "DFX_CFSUJICODE") {
        		dsUserParam.setColumn(nrow, "TY_INOUT", "O");
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	// 집행전표번호
        	if (id == "DFX_NO_SLIP_EXEC") {
        	}
        };
        //
        // this.fnGridAssign_ondrag = function(obj:nexacro.Grid,e:nexacro.DragEventInfo)
        // {
        //     this.nShift = 1;
        // 	//trace("fnGridAssign_ondrag: "+ this.nShift);
        // };
        //
        // this.fnGridAssign_ondragleave = function(obj:nexacro.Grid,e:nexacro.DragEventInfo)
        // {
        // 	this.nShift = 0;
        // 	//trace("fnGridAssign_ondragleave: "+ this.nShift);
        // }
        //
        // this.fnGridAssign_onlbuttonup = function(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo)
        // {
        //     var colnm = this._gfnGridGetBindColumnNameByIndex(obj, e.cell);
        //     if(this.nShift == 1 && colnm =="AM_BAEJUNG") {
        //
        // 	   // trace("fnGridAssign_onlbuttonup: "+ this.nShift);
        // 		var nTot = this.dsListAssign.getSum(colnm, obj.selectstartrow, Number(obj.selectendrow)+1);
        //        // var nTot = this.dsListAssign.getSum("AM_BAEJUNG", obj.selectstartrow, Number(obj.selectendrow)+1);
        // 	    var nRow = obj.selectendrow - obj.selectstartrow + 1;
        // 		trace("nRow: "+ nRow);
        //         this.divData.form.divDataTop.form.txtDragSUM.set_value(nTot);
        // 		this.divData.form.divDataTop.form.staDragCnt.set_text("원 " + nRow + " 건" );
        // 		} else {
        // 	    this.divData.form.divDataTop.form.txtDragSUM.set_value(0);
        // 		this.divData.form.divDataTop.form.staDragCnt.set_text("원 0 건" );
        // 		this.nShift = 0;
        // 	}
        //
        // };


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         //어음이체파일생성
        this.fnNoteFile = function(obj,e) {

        	var param = {};

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFB_NOTESFILE", "fnPopCallBack", param);
        }

         //엑셀배정 2021.12.28
        this.fnExcelAssign = function(obj,e) {

        	var param = {};

        	param.CD_CORP = this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value, "");
        	param.DT_REQ = this.gfnNvl(this.divSearch.form.ctclDT_SEND_FR.value, "");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFB_EXCEL", "fnPopCallBack", param);
        }

        //어음번호등록
        this.fnExecNoteMng = function(obj,e) {

        	var param = {};

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFB_EXECNOTESMNG", "fnPopCallBack", param);
        }

        // 선지급등록
        this.fnAdvncInsrt = function(obj,e) {
        	var param = {};

        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        	param.DT_REQ_FR = this.dsSearch.getColumn(0, "DT_REQ_FR");
        	param.DT_REQ_TO = this.dsSearch.getColumn(0, "DT_REQ_TO");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFB_ADVANCE", "fnPopCallBack", param);
        }


        //예금대체계획
        this.fnExecTranGW = function(obj,e) {

        	var param = {};

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFB_EXECTRAN_GW", "fnPopCallBack", param);
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGridAssign);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnCombo = function(cdType, dsName) {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_GUBUN", "string");
        	this.dsCombo.addColumn("CN_ROW", "int");
        	this.dsCombo.addColumn("VALUE", "string");
        	this.dsCombo.addColumn("MIN_VALUE", "string");
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "TY_GUBUN", "");
        	this.dsCombo.setColumn(0, "CN_ROW", "0");
        	this.dsCombo.setColumn(0, "VALUE", "");
        	this.dsCombo.setColumn(0, "MIN_VALUE", "");
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", cdType);

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = dsName+"=combo0";
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

        this.fnDialogCallback = function(svcID, value) {
        	trace(value + " / svcID->"+svcID);
        	if (value) {
        		//this.FormBtns.Select.click();

        		if (svcID.indexOf("DFB_REQUESTASSIGN_EXECTRANCHGACCOUNT_DLG") > -1) {
        			this.FormBtns.Select.click();
        		}

        		if (svcID.indexOf("DFB_DLG_EXECEDIT") > -1) {
        			this.FormBtns.Select.click();
        		}

        		// 집행일자수정
        		if (svcID.indexOf("DFB_MODIFY_DT_REQUEST_DLG") > -1) {
        			var json = JSON.parse(value);

        			this.dsReqDtUpdate = new Dataset();
        			this.dsReqDtUpdate.addColumn("SEQ_EXEC", "bigdecimal");
        			this.dsReqDtUpdate.addColumn("DT_REQ", "string");

        			this.dsReqDtUpdate.clearData();

        			for (var i=0; i < this.dsList.rowcount; i++) {
        				if (this.dsList.getColumn(i, "CHK") == 1) {
        					var nrow = this.dsReqDtUpdate.addRow();
        					this.dsReqDtUpdate.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "SEQ_EXEC"));
        					this.dsReqDtUpdate.setColumn(nrow, "DT_REQ", json.DT_REQ);
        				}
        			}

        			if (this.dsReqDtUpdate.rowcount == 0) return;

        			var strSvcId    = "save";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "reqDtUpdate=dsReqDtUpdate";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							   strSvcType , 	// transaction을 요청할 구분
        							   inProc,			// Procedure 정보 Dataset 이름
        							   inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							   outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							   strArg, 			// 입력값으로 보낼 arguments, strFormData="20120607"
        							   callBackFnc); 	// 통신방법 정의 [생략가능]


        		}

        		// 출금계좌선택
        		if (svcID.indexOf("DFB_NOACCOUNT_DLG") > -1) {
        		var json = JSON.parse(value);

        		this.dsAccntUpdate = new Dataset();
        		this.dsAccntUpdate.addColumn("SEQ_EXEC", "bigdecimal");
        		this.dsAccntUpdate.addColumn("CD_MAINBANK", "string");
        		this.dsAccntUpdate.addColumn("NO_MAINACCOUNT", "string");
        		this.dsAccntUpdate.addColumn("TY_MAINACCOUNT_GU", "string");
        		this.dsAccntUpdate.addColumn("CD_MAINSIDEBANK", "string");
        		this.dsAccntUpdate.addColumn("ID_USER", "string");

        		this.dsAccntUpdate.clearData();

        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsAccntUpdate.addRow();
        				this.dsAccntUpdate.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "SEQ_EXEC"));
        				this.dsAccntUpdate.setColumn(nrow, "CD_MAINBANK", json.CD_MAINBANK);
        				this.dsAccntUpdate.setColumn(nrow, "NO_MAINACCOUNT", json.NO_MAINACCOUNT);
        				this.dsAccntUpdate.setColumn(nrow, "TY_MAINACCOUNT_GU", json.TY_GUBUN);
        				this.dsAccntUpdate.setColumn(nrow, "CD_MAINSIDEBANK", json.CD_MAINSIDEBANK);
        				this.dsAccntUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		if (this.dsAccntUpdate.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "accntUpdate=dsAccntUpdate";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , // transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        		}
        	}
        };

        //계좌번호변경
        this.btnChangeAccount_onclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGridAssign)) { return false; }

        	var param = {};
        	param.NO_REQUEST = this.dsListAssign.getColumn(this.dsListAssign.rowposition, "NO_REQUEST");
        	param.SEQ_ALLOT = this.dsListAssign.getColumn(this.dsListAssign.rowposition, "SEQ_ALLOT");
        	param.NO_ACCOUNT = this.dsListAssign.getColumn(this.dsListAssign.rowposition, "NO_ACCOUNT");
        	param.DS_ACCOUNT = this.dsListAssign.getColumn(this.dsListAssign.rowposition, "DS_ACCOUNT");
        	param.TY_GUBUN = this.dsListAssign.getColumn(this.dsListAssign.rowposition, "TY_GUBUN");

        	param.TY_VENDOR = this.dsListAssign.getColumn(this.dsListAssign.rowposition, "TY_VENDOR");
        	param.CD_PAY = this.dsListAssign.getColumn(this.dsListAssign.rowposition, "CD_PAY");
        	param.TY_CASH = this.dsListAssign.getColumn(this.dsListAssign.rowposition, "YN_CASH_VALUE");
        	param.CD_CORP = this.dsListAssign.getColumn(this.dsListAssign.rowposition, "CD_CORP");


        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DFB_REQUESTASSIGN_EXECTRANCHGACCOUNT_DLG", "fnDialogCallback", param, 500, 300);
        };

        // 자금신청품의서 조회
        // 결재문서조회 버튼
        this.divData_divDataTop_btnDocQ_onclick = function(obj, e) {

        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGridAssign)) { return false; }

        	var cd_corp = this.dsListAssign.getColumn(this.dsListAssign.rowposition, "CD_CORP");
        	var no_aprv = this.dsListAssign.getColumn(this.dsListAssign.rowposition, "NO_APRV");
        	var no_doc = this.dsListAssign.getColumn(this.dsListAssign.rowposition, "NO_DOC");

            trace("CD_CORP->" + cd_corp + "  NO_APRV->" + no_aprv );

        	if(this.gfnIsNull(no_aprv) || this.gfnIsNull(no_doc)){
        		return;
        	}

        	var oParams = {
        		CD_CORP: cd_corp,
        		NO_APRV: no_aprv,
        	}

        	this.gfnAprvDoc(oParams, this.fnAprvDocQCallback);
        }

        this.fnAprvDocQCallback = function() {
        	console.log('fnAprvDocQCallback');
        	//alert('fnAprvDocQCallback');
        }

        this.fnUpdateStatusExtendButton = function() {
        	var nrow = this.dsListAssign.rowposition;
        	var bEnable = (nrow > 0) ? true : false;

        	this.divData.form.divDataTop.form.btnDocQ.set_enable(bEnable && this.dsListAssign.getColumn(nrow, "BTN_DOC_Q") == "Y");

        }

        //배정내역확정
        this.btnAssignConfirm_onclick = function(obj,e)
        {

        	btnName = obj.text;
        	trace("btnName :: " + btnName);

        	if (this.dsListAssign.findRow("CHK0", 1) <= -1) {
        		return false;
        	}

        	this.gfnConfirm(btnName + "처리 하시겠습니까?","fnSAssign_callback");
        };


        // 배정내역확정 후처리
        this.fnSeqUpdate = function() {

        	this.dsSeqUpdate.clearData();

        	for (var i=0; i < this.dsListAssign.rowcount; i++) {
        		if (this.dsListAssign.getColumn(i, "CHK0") == 1) {
        			var nrow = this.dsSeqUpdate.addRow();
        			this.dsSeqUpdate.setColumn(nrow, "SEQ_EXEC", this.dsAssignConfirmRtn.getColumn(0, "SEQ_EXEC"));	// 배정내역확정 후의 집행순번
        			this.dsSeqUpdate.setColumn(nrow, "NO_REQUEST", this.dsListAssign.getColumn(i, "NO_REQUEST"));
        			this.dsSeqUpdate.setColumn(nrow, "SEQ_ALLOT", this.dsListAssign.getColumn(i, "SEQ_ALLOT"));
        			this.dsSeqUpdate.setColumn(nrow, "YN_CASH", this.dsListAssign.getColumn(i, "TY_CASH"));
        			//this.dsSeqUpdate.setColumn(nrow, "AM_BAEJUNG", this.dsListAssign.getColumn(i, "AM_MI_BAEJUNG"));
        			this.dsSeqUpdate.setColumn(nrow, "AM_BAEJUNG", this.dsListAssign.getColumn(i, "AM_BAEJUNG"));
        			this.dsSeqUpdate.setColumn(nrow, "DT_EXPIRY", this.gfnTrim(this.dsListAssign.getColumn(i, "DT_EXPIRY")));
        		}
        	}

        	if (this.dsSeqUpdate.rowcount == 0) return;

        	var strSvcId    = "SeqUpdate";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "SeqUpdate=dsSeqUpdate";
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


        //배정내역취소
        this.tbbAssignCncl_onclick = function(obj,e)
        {
        	this.dsAssignCancel = new Dataset();
        	this.dsAssignCancel.addColumn("SEQ_EXEC", "bigdecimal");
        	this.dsAssignCancel.addColumn("ID_USER", "string");

        	this.dsAssignCancel.clearData();
        	for (var i=0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			var nrow = this.dsAssignCancel.addRow();

        			this.dsAssignCancel.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "SEQ_EXEC"));
        			this.dsAssignCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	trace("dsAssignCancel :: " + this.dsAssignCancel.saveXML());

        	if (this.dsAssignCancel.rowcount == 0) return;

        	var strSvcId    = "AssignCancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "AssignCancel=dsAssignCancel";
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
        };

        //출금계좌선택
        this.btnSetNO_ACCOUNT_onclick = function(obj,e)
        {
        	if (this.dsList.findRow("CHK", 1) == -1) {
        		return false;
        	}

        	var param = {};
        	param.SEQ_EXEC = this.dsList.getColumn(this.dsList.rowposition, "SEQ_EXEC");	// 집행순번
        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");		// 법인코드
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");		// 법인명

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DFB_NOACCOUNT_DLG", "fnDialogCallback", param, 500, 350);
        };


        // 출금구분및입금계좌변경
        this.divData_divDataBottom_btnExecEdit_onclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGridAssign)) { return false; }
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }


        	var param = {};

        	param.SEQ_EXEC = this.dsList.getColumn(this.dsList.rowposition, "SEQ_EXEC");
        	param.DS_PAY = this.dsList.getColumn(this.dsList.rowposition, "DS_PAY");
        	param.CD_PAY = this.dsList.getColumn(this.dsList.rowposition, "CD_PAY");
        	param.TY_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "TY_VENDOR");
        	param.TY_CASH = this.dsList.getColumn(this.dsList.rowposition, "TY_CASH");
        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.TY_ACCOUNT_GU = this.dsList.getColumn(this.dsList.rowposition, "TY_ACCOUNT_GU");
        	param.CD_BANK = this.dsList.getColumn(this.dsList.rowposition, "CD_BANK");
        	param.TY_PAYMENT2 = this.dsList.getColumn(this.dsList.rowposition, "TY_PAYMENT2");

        	param.DS_PAY_NO_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "DS_PAY_NO_ACCOUNT");
        	param.DS_PAY_NM_BANK = this.dsList.getColumn(this.dsList.rowposition, "DS_PAY_NM_BANK");

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DFB_DLG_EXECEDIT", "fnDialogCallback", param, 500, 350);
        };

        //집행일자수정
        this.btnDT_REQUESTModify_onclick = function(obj,e)
        {
        	if (this.dsList.findRow("CHK", 1) == -1) {
        		return false;
        	}

        	var param = {};
        	param.SEQ_EXEC = this.dsList.getColumn(this.dsList.rowposition, "SEQ_EXEC");

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DFB_MODIFY_DT_REQUEST_DLG", "fnDialogCallback", param, 400, 300);
        };

        //전표발행
        this.btnTrans_onclick = function(obj,e)
        {
        	this.fnTrans("N");
        };

        // 전표발행 (slipYn:Y/N)
        this.fnTrans = function(slipYn) {

        	this.dsTrans.clearData();

        	// 전표발행
        	if (slipYn == "N") {

        		tmSlip = this.AuthClient.ID_USER + this.gfnGetDate("milli");

        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsTrans.addRow();
        				this.dsTrans.setColumn(nrow, "TM_SLIP", tmSlip);
        				this.dsTrans.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "SEQ_EXEC"));
        				this.dsTrans.setColumn(nrow, "YN_SLIP", slipYn);
        				this.dsTrans.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsTrans.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				cdCorp = this.dsList.getColumn(i, "CD_CORP");
        			}
        		}

        	// 전표발행후처리
        	} else {
        		var nrow = this.dsTrans.addRow();
        		this.dsTrans.setColumn(nrow, "TM_SLIP", tmSlip);
        		this.dsTrans.setColumn(nrow, "SEQ_EXEC", -1);
        		this.dsTrans.setColumn(nrow, "YN_SLIP", slipYn);
        		this.dsTrans.setColumn(nrow, "CD_CORP", cdCorp);
        		this.dsTrans.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if (this.dsTrans.rowcount == 0) return;

        	var strSvcId    = "trans" + slipYn;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "trans=dsTrans";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        //전표취소
        this.btnCancel_onclick = function(obj,e)
        {
        	this.dsCancel = new Dataset();
        	this.dsCancel.addColumn("NO_SLIP", "string");
        	this.dsCancel.addColumn("ID_USER", "string");

        	this.dsCancel.clearData();
        	for (var i=0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			var nrow = this.dsCancel.addRow();
        			this.dsCancel.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(i, "NO_SLIP"));
        			this.dsCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsCancel.rowcount == 0) return;

        	var strSvcId    = "save";
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        //전표연결
        this.btnSlipConnect_onclick = function(obj,e)
        {
        // 일단 주석요청 2019.12.17
        // 	this.dsConnect = new Dataset();
        // 	this.dsConnect.addColumn("SEQ_EXEC", "bigdecimal");
        // 	this.dsConnect.addColumn("NO_SLIP", "string");
        // 	this.dsConnect.addColumn("ID_USER", "string");
        //
        // 	this.dsConnect.clearData();
        // 	for (var  i=0; i < this.dsList.rowcount; i++) {
        // 		// rowstatus가 수정이고, 발의번호(전표번호)가 존재하는 대상만 전표연결
        // 		trace("[" + i + "] :: " + this.dsList.getColumn(i, this.ucFlag));
        // 		if ( this.dsList.getColumn(i, this.ucFlag) == "U" && !this.gfnIsNull(this.dsList.getColumn(i, "NO_SLIP")) ) {
        // 			var nrow = this.dsConnect.addRow();
        //
        // 			this.dsConnect.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "SEQ_EXEC"));	// 집행순번
        // 			this.dsConnect.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(i, "NO_SLIP"));		// 전표번호
        // 			this.dsConnect.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);					// 로그인ID
        // 		}
        // 	}
        //
        //
        //
        // 	if (this.dsConnect.rowcount == 0) return;
        //
        // 	var strSvcId    = "connect";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "connect=dsConnect";
        // 	var outData     = "";
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
        };

        //미지급전표조회
        this.btnMibulSlip_onclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGridAssign)) return;

        	var noSlip = this.dsListAssign.getColumn(this.dsListAssign.rowposition, "NO_SLIP1");

        	if ( this.gfnIsNull(noSlip) ) {
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	var param = {};
        	param.CD_TRADE = noSlip;
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopCallBack", param);
        };

        //배정내역상세
        this.btnExecDetail_onclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};
        	param.SEQ_EXEC = this.dsList.getColumn(this.dsList.rowposition, "SEQ_EXEC");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFB_EXECQUERY", "", param);
        };

        //집행내역전송
        this.btnBranchInsert_onclick = function(obj,e)
        {
            if( obj.id == "btnBranchInsert") {
        	   var param = {};
        	   param.CD_CORP = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));	// 법인코드
        	   this.gfnFormOpen("DFB", "DFB_DLG_BRANCH_EXEC", "fnPopCallBack", param);
        	}else if(obj.id == "btnOfflineInsert" ){
        		this.dsBranchInsert = new Dataset();
        		this.dsBranchInsert.addColumn("SEQ_EXEC", "bigdecimal");
        		this.dsBranchInsert.addColumn("GB_SEND", "string");
        		this.dsBranchInsert.addColumn("ID_USER", "string");
        		this.dsBranchInsert.addColumn("TY_TRAN", "string");

        		this.dsBranchInsert.clearData();
        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsBranchInsert.addRow();

        				this.dsBranchInsert.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "SEQ_EXEC"));
        				// 2019.10.07 일단 공란으로...추후 확인되면 처리...
        				this.dsBranchInsert.setColumn(nrow, "GB_SEND", "OFFLINE");
        				this.dsBranchInsert.setColumn(nrow, "TY_TRAN", "");
        				this.dsBranchInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        			}
        		}
        		if (this.dsBranchInsert.rowcount == 0) return;

        		var strSvcId    = "BranchInsert";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "BranchInsert=dsBranchInsert";
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
        }

        //전송전삭제
        this.btnBranchDelete_onclick = function(obj,e)
        {
        	this.dsBranchDelete = new Dataset();
        	this.dsBranchDelete.addColumn("SEQ_EXEC", "bigdecimal");
        	this.dsBranchDelete.addColumn("ID_USER", "string");
        	this.dsBranchDelete.addColumn("GB_SEND", "string");

        	this.dsBranchDelete.clearData();

        	for (var i=0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			var nrow = this.dsBranchDelete.addRow();
        			this.dsBranchDelete.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "SEQ_EXEC"));
        			this.dsBranchDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsBranchDelete.setColumn(nrow, "GB_SEND", "EXEC");
        		}
        	}

        	if (this.dsBranchDelete.rowcount == 0) return;

        	var strSvcId    = "BranchDelete";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "BranchDelete=dsBranchDelete";
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
        };

        //전표조회
        this.btnSlip_onclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var NO_SLIP = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP");

        	if ( this.gfnIsNull(NO_SLIP) ) {
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	var param = {};
        	param.CD_TRADE = NO_SLIP;
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopCallBack", param);
        }

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "CHK") {
        		this.divData.form.divDataBottom.form.txtAMTSUM.set_value(this.dsList.getCaseSum("CHK==1", "AM_AMT"));
        		this.divData.form.divDataBottom.form.staCNTSUM.set_text("원 " + this.dsList.getCaseCount("CHK==1") + "건");
        	}
        };

        this.fnGrid_AfterAllCheck = function(obj, cell, check)
        {
        	var ds = obj.getBindDataset();
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	trace("obj.name :: " + obj.name);
        	trace("cell :: " + cell);

        	// 헤더체크박스 클릭시 필터로우는 제외시킴
        	if (check) {

        		ds.set_enableevent(false);
        		//ds.setColumn(0, colnm, 0);

        		var cdCorp = ds.getColumn(1, "CD_CORP");
        		var cdCorpCnt = ds.getCaseCount(this.ucFlag+" != '#' && CHK == 1 && CD_CORP == '" + cdCorp+"'");
        		trace("cdCorp :::: " + cdCorp);
        		trace("cdCorpCnt :::: " + cdCorpCnt);
        		trace("ds.rowcount :::: " + ds.rowcount);
        		if ((ds.rowcount-1) != cdCorpCnt) {
        			this.gfnAlert("같은 법인코드만 선택 가능합니다.");
        			for (var i=0; i < ds.rowcount; i++) {
        				ds.setColumn(i, "CHK", 0);
        			}
        			obj.setCellProperty("head", cell, "text", 0);
        			ds.set_enableevent(true);
        			return false;
        		}

        		// 위의그리드에만 적용
        		if (obj.name = "objGridAssign") {
        			// YN_APPR = 'N' 은 체크 해제
        			var arrAppr = ds.extractRows("YN_APPR == 'N'");

        			// YN_DEFER = 'Y' 은 체크 해제
        			var arrDefer = ds.extractRows("YN_DEFER == 'Y'");

        			for(var i in arrAppr){
        				ds.setColumn(arrAppr[i], "CHK", 0);
        			}

        			for(var i in arrDefer){
        				ds.setColumn(arrDefer[i], "CHK", 0);
        			}
        		}
        	}

        	if (cell == 2) {
        		//this.divData.form.divDataTop.form.txtAMTSUM_Chage.set_value(this.dsListAssign.getCaseSum("CHK==1", "AM_MI_BAEJUNG"));
        		this.divData.form.divDataTop.form.txtAMTSUM_Chage.set_value(this.dsListAssign.getCaseSum("CHK==1", "AM_BAEJUNG"));
        		this.divData.form.divDataTop.form.staCNTSUM_Charge.set_text("원 " + this.dsListAssign.getCaseCount("CHK==1") + "건");
        	}

        	if (cell == 1) {
        		this.divData.form.divDataBottom.form.txtAMTSUM.set_value(this.dsList.getCaseSum("CHK==1", "AM_AMT"));
        		this.divData.form.divDataBottom.form.staCNTSUM.set_text("원 " + this.dsList.getCaseCount("CHK==1") + "건");
        	}
        	ds.set_enableevent(true);
        }


        this.fnBtnAssign_onclick = function(obj,e)
        {
        	// 2019.09.30 일괄배정내역확정 validation check 두개 및 성공 및 무시건수 보여주는 부분 일단 skip하고 진행하기로 함.

        	//trace("this.dsExec :: " + this.dsExec.saveXML());

        	btnName = obj.text;
        	trace("btnName :: " + btnName);

        	if (this.dsListAssign.findRow("CHK", 1) == -1) {
        		return false;
        	}

        	this.gfnConfirm(btnName + "처리 하시겠습니까?","fnSAssign_callback");
        };

        this.fnSAssign_callback = function(strId, val) {
        	if (val) {

        		var param = {};
        		param.SEQ_EXEC = this.dsList.getColumn(this.dsList.rowposition, "SEQ_EXEC");
        		param.DT_REQ = this.gfnGetDate();
        		param.GUBUN = "DFBPR_EXECDTL_INSERT";

        		this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DFB_MODIFY_DT_REQUEST_DLG", "fnPopCallBack", param, 330, 150);
        	}
        }

        this.fnPopCallBack = function(svcID, val) {
        	if (val != false) {
        	  var json = JSON.parse(val);
        		if (svcID.indexOf("DFB_MODIFY_DT_REQUEST_DLG") > -1) {
        			dtReq = json.DT_REQ;
        			this.fnAssign("N", dtReq);
        		}

        		if(svcID.indexOf("DFB_DLG_BRANCH_EXEC") > -1){
        		    this.dsBranchInsert = new Dataset();
        			this.dsBranchInsert.addColumn("SEQ_EXEC", "bigdecimal");
        			this.dsBranchInsert.addColumn("GB_SEND", "string");
        			this.dsBranchInsert.addColumn("ID_USER", "string");
        			this.dsBranchInsert.addColumn("TY_TRAN", "string");

        			this.dsBranchInsert.clearData();
        			for (var i=0; i < this.dsList.rowcount; i++) {
        				if (this.dsList.getColumn(i, "CHK") == 1) {
        					var nrow = this.dsBranchInsert.addRow();
        					this.dsBranchInsert.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "SEQ_EXEC"));
        					// 2019.10.07 일단 공란으로...추후 확인되면 처리...
        					this.dsBranchInsert.setColumn(nrow, "GB_SEND", "EXEC");
        					this.dsBranchInsert.setColumn(nrow, "TY_TRAN", json.TY_TRAN);
        					this.dsBranchInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				}
        			}
        			if (this.dsBranchInsert.rowcount == 0) return;

        			var strSvcId    = "BranchInsert";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "BranchInsert=dsBranchInsert";
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
        	}

        // 	if (svcID.indexOf("DHA_ISSUESLIP") > -1) {
        // 			this.FormBtns.Select.click();
        // 	}	20200318 주석추가
        }




        // 배정처리 (YN_EXEC:Y/N , DT_REQ)
        this.fnAssign = function(YN_EXEC, DT_REQ) {

        	var tyExec = "";
        	var chk = "";
        	if (btnName == "일괄개별배정") {
        		tyExec = "C";	// 일괄개별배정
        		chk = "CHK";
        	} else if (btnName == "일괄합산배정") {
        		tyExec = "B";	// 일괄합산배정
        		chk = "CHK";
        	} else if (btnName == "배정내역확정") {
        		tyExec = "A";	// 배정내역확정
        		chk = "CHK0";
        	}

        	this.dsAssign.clearData();

        	// 병합배정key update시
        	if (YN_EXEC == "N") {

        		tmSlip = this.AuthClient.ID_USER + this.gfnGetDate("milli");

        		for (var  i=0; i < this.dsListAssign.rowcount; i++) {
        			if (this.dsListAssign.getColumn(i, chk) == 1 && this.dsListAssign.getColumn(i, this.ucFlag) != "#") {
        				var nrow = this.dsAssign.addRow();

        				this.dsAssign.setColumn(nrow, "TM_EXEC", tmSlip);
        				this.dsAssign.setColumn(nrow, "YN_EXEC", YN_EXEC);
        				this.dsAssign.setColumn(nrow, "TY_EXEC", tyExec);
        				this.dsAssign.setColumn(nrow, "NO_REQUEST", this.dsListAssign.getColumn(i, "NO_REQUEST"));
        				this.dsAssign.setColumn(nrow, "SEQ_ALLOT", this.dsListAssign.getColumn(i, "SEQ_ALLOT"));
        				this.dsAssign.setColumn(nrow, "DT_REQ", DT_REQ);
        				//this.dsAssign.setColumn(nrow, "AM_AMT", this.dsListAssign.getColumn(i, "AM_MI_BAEJUNG"));
        				this.dsAssign.setColumn(nrow, "AM_AMT", this.dsListAssign.getColumn(i, "AM_BAEJUNG"));
        				this.dsAssign.setColumn(nrow, "NO_ACCOUNT", this.dsListAssign.getColumn(i, "NO_ACCOUNT"));
        				this.dsAssign.setColumn(nrow, "TY_ACCOUNT_GU", this.dsListAssign.getColumn(i, "TY_ACCOUNT_GU"));
        				this.dsAssign.setColumn(nrow, "CD_PAY_VENDOR", this.dsListAssign.getColumn(i, "CD_VENDOR"));
        				this.dsAssign.setColumn(nrow, "TY_PAY_VENDOR", this.dsListAssign.getColumn(i, "TY_VENDOR"));
        				this.dsAssign.setColumn(nrow, "NO_PAY_ACCOUNT", this.dsListAssign.getColumn(i, "NO_ACCOUNT"));
        				this.dsAssign.setColumn(nrow, "TY_PAY_GU", this.dsListAssign.getColumn(i, "TY_ACCOUNT_GU"));
        				this.dsAssign.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        	// 후처리시 Y
        	} else {
        		var nrow = this.dsAssign.addRow();

        		this.dsAssign.setColumn(nrow, "TM_EXEC", tmSlip);
        		this.dsAssign.setColumn(nrow, "YN_EXEC", YN_EXEC);
        		this.dsAssign.setColumn(nrow, "TY_EXEC", tyExec);
        		this.dsAssign.setColumn(nrow, "DT_REQ", DT_REQ);
        		this.dsAssign.setColumn(nrow, "NO_REQUEST", this.dsListAssign.getColumn(i, "NO_REQUEST"));
        		this.dsAssign.setColumn(nrow, "SEQ_ALLOT", this.dsListAssign.getColumn(i, "SEQ_ALLOT"));
        		this.dsAssign.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if (this.dsAssign.rowcount == 0) return;

        	var strSvcId    = "Assign" + YN_EXEC;
        	//var strSvcType  = "save";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "Assign=dsAssign";
        	var outData     = "dsAssignRtn=Assign0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }


        // 공통코드콤보
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "Z1");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(1, "CD_TYPE", "B2");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(2, "CD_TYPE", "Z3");

        // 	this.dsCombo.addRow();
        // 	this.dsCombo.setColumn(3, "CD_SYSTEM", "DF");
        // 	this.dsCombo.setColumn(3, "CD_TYPE", "B7");

        // 	this.dsCombo.addRow();
        // 	this.dsCombo.setColumn(3, "CD_SYSTEM", "DF");
        // 	this.dsCombo.setColumn(3, "CD_TYPE", "B7");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsYN_SLIP=combo0 dsTY_PAYMENT2=combo1 dsYN_APPR=combo2";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };


        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        }

        this.divData_divDataBottom_btnCheckSelect_onclick = function(obj,e)
        {
        	var cnt = 0;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(cnt >= 200) break;

        		if(this.gfnIsNull(this.dsList.getColumn(i, "CD_SLIP_PAYBACK")) && this.dsList.getColumn(i, this.ucFlag) != "#"){
        			this.dsList.setColumn(i, "CHK", 1);
        			cnt++
        		}
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboYN_DT.addEventHandler("onitemchanged",this.divSearch_ccboYN_DT_onitemchanged,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataTop.form.btnMibulSlip.addEventHandler("onclick",this.btnMibulSlip_onclick,this);
            this.divData.form.divDataTop.form.btnChangeAccount.addEventHandler("onclick",this.btnChangeAccount_onclick,this);
            this.divData.form.divDataTop.form.btnDocQ.addEventHandler("onclick",this.divData_divDataTop_btnDocQ_onclick,this);
            this.divData.form.divDataBottom.form.btnAssign.addEventHandler("onclick",this.fnBtnAssign_onclick,this);
            this.divData.form.divDataBottom.form.btnAllAssign.addEventHandler("onclick",this.fnBtnAssign_onclick,this);
            this.divData.form.divDataBottom.form.btnAssignConfirm.addEventHandler("onclick",this.btnAssignConfirm_onclick,this);
            this.divData.form.divDataBottom.form.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.divData.form.divDataBottom.form.btnSlip.addEventHandler("onclick",this.btnSlip_onclick,this);
            this.divData.form.divDataBottom.form.btnTrans.addEventHandler("onclick",this.btnTrans_onclick,this);
            this.divData.form.divDataBottom.form.btnOfflineInsert.addEventHandler("onclick",this.btnBranchInsert_onclick,this);
            this.divData.form.divDataBottom.form.btnBranchInsert.addEventHandler("onclick",this.btnBranchInsert_onclick,this);
            this.divData.form.divDataBottom.form.btnDT_REQUESTModify.addEventHandler("onclick",this.btnDT_REQUESTModify_onclick,this);
            this.divData.form.divDataBottom.form.btnSetNO_ACCOUNT.addEventHandler("onclick",this.btnSetNO_ACCOUNT_onclick,this);
            this.divData.form.divDataBottom.form.btnExecEdit.addEventHandler("onclick",this.divData_divDataBottom_btnExecEdit_onclick,this);
            this.divData.form.divDataBottom.form.tbbAssignCncl.addEventHandler("onclick",this.tbbAssignCncl_onclick,this);
            this.divData.form.divDataBottom.form.btnExecDetail.addEventHandler("onclick",this.btnExecDetail_onclick,this);
            this.divData.form.divDataBottom.form.btnCheckSelect.addEventHandler("onclick",this.divData_divDataBottom_btnCheckSelect_onclick,this);
            this.divData.form.divDataBottom.form.btnSlipView2.addEventHandler("onclick",this.divData_divDataBottom_btnSlipView2_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsAssignConfirmRtn.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsAssignRtn.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DFB_REQUESTASSIGN_EXECTRAN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
