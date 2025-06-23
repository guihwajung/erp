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
            this.set_titletext("미지급출금현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1720,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"ISSUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SU_REPRES\" type=\"STRING\" size=\"256\"/><Column id=\"SU_BUSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SU_INDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SU_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUPPLY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"SU_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_HOMETAX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_BH\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONSULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_APP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"ID_APPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DIRECT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EFDTE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ_N\" type=\"STRING\" size=\"256\"/><Column id=\"AM_REQ\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CASH\" type=\"STRING\" size=\"256\"/><Column id=\"AM_NOTES\" type=\"STRING\" size=\"256\"/><Column id=\"QN_ILSU\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_ALLOT \" type=\"STRING\" size=\"256\"/><Column id=\"YN_CASH\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BAEJUNG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FIT\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_REF\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_EXEC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ_EXEC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_ACCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MAINACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList5", this);
            obj._setContents("<ColumnInfo><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectleft</Col><Col id=\"SP\">DFBPR_APTRANS_SLT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DFBPR_APTRANS_MASTER1_SLT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DFBPR_APTRANS_MASTER2_SLT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DFBPR_APTRANS_MASTER3_SLT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DFBPR_APTRANS_MASTER4_SLT</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DFBPR_APTRANS_MASTER5_SLT</Col></Row><Row><Col id=\"TARGET\">selectAPTabHeader1</Col><Col id=\"SP\">DFBPR_APTRANS_TABHEADER1_SLT</Col></Row><Row><Col id=\"TARGET\">selectAPTab1</Col><Col id=\"SP\">DFBPR_APTRANS_TAB1_SLT</Col></Row><Row><Col id=\"TARGET\">selectAPTab2</Col><Col id=\"SP\">DFBPR_APTRANS_TAB2_SLT</Col></Row><Row><Col id=\"TARGET\">selectAPTab3</Col><Col id=\"SP\">DFBPR_APTRANS_TAB3_SLT</Col></Row><Row><Col id=\"TARGET\">selectTax</Col><Col id=\"SP\">DHXPR_TAX_INFO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_BH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAPTabHeader1", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_CONSULT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONSULT\" type=\"STRING\" size=\"256\"/><Column id=\"SN_CONSULT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONSULT\" type=\"STRING\" size=\"256\"/><Column id=\"RM_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONSULT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_REQ\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INSERT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLeft", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAP1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAP2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAP3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTax", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"142.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta04:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_FROM","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","calDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_TO","calDT_FROM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0.0","sta04:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BE","staCD_DEPT:0.0","staCD_DEPT:10.0","249","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT2");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","staDS_VENDOR:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_maxlength("50");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT00","0.0","sta04:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("발행부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BH","staCD_DEPT00:0.0","staCD_DEPT00:10.0","249","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT2");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("매입");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter","36.90%","0","5","100.00%",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGridAPLeft","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab1.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("divSplitter2","0","67.81%","100.00%","5",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.form.tabData.tab1.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter2:5",null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta01","0","25","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("발급ID");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta00","sta01:-1","25","891","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta01:-2","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("거래처명");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta00:-2","891","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta02:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("대표자");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta07","79","sta03:-1","891","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta06:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("종목");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta09","79","sta07:-1","891","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta10","0","sta08:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("공급가");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta11","79","sta09:-1","891","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta10:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("이메일");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta13","79","sta11:-1","891","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_CORP","87","30","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_maxlength("256");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","87","58","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtAM_MIBUL","87","87","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_ACCOUNT","87","145","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("15");
            obj.getSetter("maxlength").set("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT","87","175","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta14","0","sta12:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("체크");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta15","79","sta13:-1","891","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta16","0","0","300","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("19");
            obj.set_text("세금계산서정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta17","490","0","300","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_text("미지급상세 및 결재정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta18","482","25","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("전표번호");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta21","482","82","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("귀속부서");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta22","482","111","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("회계승인");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta23","482","140","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("자동전표");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_CORP00","571","30","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("25");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta24","79","256","891","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta25","0","256","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("요청번호");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta26","79","sta24:-1","891","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta27","240","256","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("요청일자");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta28","79","sta26:-1","891","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta30","79","sta28:-1","891","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta31","0","285","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("예정금액");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("txtDS_CORP01","327","30","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("33");
            obj.getSetter("maxlength").set("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR00","327","58","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("34");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtAM_MIBUL00","327","87","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("35");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta32","240","25","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("발급일자");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta33","240","53","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("사업자번호");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta34","240","82","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("업태");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta35","240","111","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("주소");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta36","240","140","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("세금");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta37","240","169","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("개수");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta38","726","25","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("비고");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_CORP02","815","30","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta39","482","53","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("거래처");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR01","571","58","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("45");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta40","726","53","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("계정과목");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtAM_MIBUL01","815","58","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("47");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta41","726","82","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("생성자");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta43","726","111","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("품의번호");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtAM_MIBUL02","87","116","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("50");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtAM_MIBUL03","327","116","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("51");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_ACCOUNT00","327","145","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("52");
            obj.getSetter("maxlength").set("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT00","327","175","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("53");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtAM_MIBUL05","571","87","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("54");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_ACCOUNT01","571","116","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("55");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT01","571","145","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("56");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtAM_MIBUL06","815","87","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("57");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT02","815","116","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("58");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT04","815","145","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("59");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT05","571","175","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("60");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("txtDS_DEPT06","815","175","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("61");
            obj.getSetter("maxlength").set("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta44","0","230","300","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("62");
            obj.set_text("출금요청");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta45","490","230","300","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("63");
            obj.set_text("집행내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta46","482","256","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("집행번호");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta47","482","285","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("전표번호");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta48","482","314","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("집행계좌");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta49","482","343","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("금액");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE00","87","260","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("68");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("txtCD_TRADE01","329","260","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("69");
            obj.getSetter("maxlength").set("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtCD_TRADE03","87","290","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("70");
            obj.getSetter("maxlength").set("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta53","0","314","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("현금");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta54","726","256","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("거래처 은행");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta55","726","285","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("거래처계좌");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta56","726","314","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("거래처계좌명");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta57","726","343","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("집행시간");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtCD_TRADE07","87","319","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("76");
            obj.getSetter("maxlength").set("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE08","571","260","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("77");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE09","571","290","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("78");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE10","571","319","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("79");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtCD_TRADE11","571","348","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("80");
            obj.getSetter("maxlength").set("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE12","815","260","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("81");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE13","815","290","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("82");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE14","815","319","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("83");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE15","815","348","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("84");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta61","726","sta43:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("전자결재");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta58","726","sta61:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("승인일시");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta59","482","sta61:-1","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("승인자 이름");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta62","240","314","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("어음");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE16","85","378","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("89");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta63","79","sta30:-1","891","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtCD_TRADE20","329","319","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("91");
            obj.getSetter("maxlength").set("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_format("#,##0");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtCHECKPOINT","84","409","394","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("92");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta04","240","343","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("거래처계좌");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE22","329","348","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("94");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta19","0","343","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("은행");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE23","87","348","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("96");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta20","0","406","300","22",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("97");
            obj.set_text("확인사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta29","0","372","80","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT03","87","203","143","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("99");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter2:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.tabData.tab1.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divButton","0","0",null,"30","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("106");
            obj.set_visible("true");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Tab("tabDataAP","0","divButton:-20",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Tabpage("tabAP1",this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP);
            obj.set_text("원안품의 헤더");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.addChild(obj.name, obj);

            obj = new Grid("objGridAP1","9","71",null,null,"1","5",null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Static("sta33","10","8","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("헤더번호");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Static("sta32","69","8","891","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE03","74","13","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("3");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Static("sta00","168","8","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("라인번호");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE00","232","13","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("5");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Static("sta07","69","sta32:-1","891","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Static("sta03","10","37","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("결재");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Calendar("txtCD_TRADE04","864","14","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("7");
            obj.getSetter("maxlength").set("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE05","74","41","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("8");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Static("sta06","168","37","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("사용여부");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE07","232","41","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("10");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Static("sta08","638","8","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("기간From");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Calendar("txtCD_TRADE08","704","13","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("13");
            obj.getSetter("maxlength").set("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Static("sta09","638","37","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("거래처");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE09","704","41","90","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("15");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE10","390","41","245","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("16");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Static("sta10","326","8","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("품의제목");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE11","390","13","245","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("17");
            obj.set_maxlength("256");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Static("sta11","326","37","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("비고");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Static("sta01","800","8","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("기간To");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.addChild(obj.name, obj);

            obj = new Div("divButton2","0","0",null,"30","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("107");
            obj.set_text("");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnAPWonanDtl",null,"10","100","20","18",null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.divButton2.form);
            obj.set_taborder("104");
            obj.set_text("전자결재문서조회");
            obj.set_enable("false");
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.divButton2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT_BE.form.CDTextBox","value","dsSearch","CD_DEPT_BE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT_BH.form.CDTextBox","value","dsSearch","CD_DEPT_BH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.txtDS_VENDOR","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_CORP","value","dsList1","ISSUE_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_VENDOR","value","dsList1","SU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtAM_MIBUL","value","dsList1","SU_REPRES");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_ACCOUNT","value","dsList1","AM_SUPPLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_DEPT","value","dsList1","SU_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_CORP00","value","dsList2","CD_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_CORP01","value","dsList1","ISSUE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_VENDOR00","value","dsList1","SU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtAM_MIBUL00","value","dsList1","SU_BUSTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_CORP02","value","dsList2","RM_BIGO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_VENDOR01","value","dsList2","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtAM_MIBUL01","value","dsList2","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtAM_MIBUL02","value","dsList1","SU_INDTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtAM_MIBUL03","value","dsList1","SU_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_ACCOUNT00","value","dsList1","AM_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_DEPT00","value","dsList1","ISSUE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtAM_MIBUL05","value","dsList2","DS_DEPT_BH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_ACCOUNT01","value","dsList2","YN_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_DEPT01","value","dsList2","DS_AUTOSLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtAM_MIBUL06","value","dsList2","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_DEPT02","value","dsList2","NO_CONSULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_DEPT04","value","dsList2","CD_APP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_DEPT05","value","dsList2","ID_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_DEPT06","value","dsList2","DT_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form.txtCD_TRADE03","value","dsListAPTabHeader1","ID_CONSULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form.txtCD_TRADE00","value","dsListAPTabHeader1","NO_CONSULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form.txtCD_TRADE04","value","dsListAPTabHeader1","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form.txtCD_TRADE05","value","dsListAPTabHeader1","TY_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form.txtCD_TRADE07","value","dsListAPTabHeader1","YN_USE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form.txtCD_TRADE08","value","dsListAPTabHeader1","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form.txtCD_TRADE09","value","dsListAPTabHeader1","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form.txtCD_TRADE10","value","dsListAPTabHeader1","DS_CONSULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form.txtCD_TRADE11","value","dsListAPTabHeader1","RM_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCHECKPOINT","value","dsList5","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCD_TRADE08","value","dsList4","SEQ_EXEC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCD_TRADE12","value","dsList4","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCD_TRADE09","value","dsList4","CHECK_CD_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCD_TRADE13","value","dsList4","IN_ACCT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCD_TRADE10","value","dsList4","NO_MAINACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCD_TRADE14","value","dsList4","CLIENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCD_TRADE11","value","dsList4","TRAN_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCD_TRADE15","value","dsList4","CREATED_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCD_TRADE00","value","dsList3","NO_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCD_TRADE01","value","dsList3","DT_REQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCD_TRADE03","value","dsList3","AM_REQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCD_TRADE07","value","dsList3","AM_CASH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCD_TRADE20","value","dsList3","AM_NOTES");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCD_TRADE23","value","dsList3","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCD_TRADE22","value","dsList3","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtDS_DEPT03","value","dsList1","CHK_HOMETAX");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFB_APTRANS.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.fDebugMod = false;
        this.own = false;
        this.isDlg = false;

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

        	this.dsSearch.set_enableevent(false);
        	this.dsSearch.setColumn(0, "DT_FROM", this.gfnGetFirstDate(this.gfnGetLastDate()));
        	this.dsSearch.setColumn(0, "DT_TO", this.gfnGetLastDate(this.gfnGetLastDate()));
        	this.dsSearch.set_enableevent(true);
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
        	this.btn1 = this.gfnFormButtonAdd("Wrk1", "fnWrk1"); 	//미지급전표조회
        	this.btn2 = this.gfnFormButtonAdd("Wrk2", "fnWrk2"); 	//지급전표조회
        	this.btn3 = this.gfnFormButtonAdd("Wrk3", "fnWrk3"); 	//전자세금계산서조회
        };

        /************************************************************************
        * 변수 선언
        ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_BE = this.divSearch.form.ccfCD_DEPT_BE;
        	this.ccfCD_DEPT_BH = this.divSearch.form.ccfCD_DEPT_BH;


        	this.dxGridAPLeft = this.divData.form.tabData.tab1.form.divDataLeft.form.objGridAPLeft;
        	this.dxGridAP1 = this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP1.form.objGridAP1;
        	//this.dxGridAP2 = this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP2.form.objGridAP2;
        	//this.dxGridAP3 = this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabAP3.form.objGridAP3;

        //	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.btnAPWonanDtl = this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.divButton2.form.btnAPWonanDtl ;
        	this.txtStatus = "";
        };

        /************************************************************************
        * 이벤트 설정
        ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT_BE.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfCD_DEPT_BE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_BE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT_BH.CodeFindName = "DHX_CFACNTUNIT2";
        	this.ccfCD_DEPT_BH.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_BH.AfterCDTextChanged = "fnAfterCDTextChanged";


        	// 그리드 초기화
        	this.gfnGridInit(this.dxGridAPLeft, this.dsLeft, "DF", "DFB_APTRANS");
         	this.gfnGridInit(this.dxGridAP1, this.dsListAP1, "DF", "DFB_APTRANS_GRID1");
        // 	this.gfnGridInit(this.dxGridAP2, this.dsListAP2, "DF", "DFB_APTRANS_GRID2");
        // 	this.gfnGridInit(this.dxGridAP3, this.dsListAP3, "DF", "DFB_APTRANS_GRID3");

        	this.dxGridAPLeft.set_selecttype("row");
        	this.dxGridAPLeft.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        };

        /************************************************************************
        * 파라미터 설정
        ************************************************************************/
        this.fnSetParameter = function() {
        	//Left Grid
        	this.dsSelectleft = new Dataset();
        	this.dsSelectleft.addColumn("CD_CORP", "string");
        	this.dsSelectleft.addColumn("DT_FROM", "string");
        	this.dsSelectleft.addColumn("DT_TO", "string");
        	this.dsSelectleft.addColumn("DS_VENDOR", "string");
        	this.dsSelectleft.addColumn("CD_DEPT_BE", "string");
        	this.dsSelectleft.addColumn("CD_DEPT_BH", "string");

        	//Single
        	this.dsSelectMaster = new Dataset();
        	this.dsSelectMaster.addColumn("NO_MIBUL", "string");
        	this.dsSelectMaster.addColumn("CD_TRADE", "string");
        	this.dsSelectMaster.addColumn("CD_VENDOR", "string");
        	this.dsSelectMaster.addColumn("DT_ACCOUNT", "string");
        	this.dsSelectMaster.addColumn("AM_MIBUL", "string");
        	this.dsSelectMaster.addColumn("ID_CONSULT", "string");

        	//
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_HO", "string");
        	this.dsSelect.addColumn("CONT_DEG", "bigdecimal");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("IP_ADDR", "string");

        }

        /************************************************************************
        * 컨트롤 이벤트
        ************************************************************************/
        /*
        *	조회 버튼
        */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGridAPLeft );
        	this.drow = this.dxGridAPLeft.currentrow;

        	this.dsSelectleft.clearData();
        	this.dsSelectleft.addRow();
        	this.dsSelectleft.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectleft.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelectleft.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelectleft.setColumn(0, "DS_VENDOR", this.dsSearch.getColumn(0, "DS_VENDOR"));
        	this.dsSelectleft.setColumn(0, "CD_DEPT_BE", this.dsSearch.getColumn(0, "CD_DEPT_BE"));
        	this.dsSelectleft.setColumn(0, "CD_DEPT_BH", this.dsSearch.getColumn(0, "CD_DEPT_BH"));

        	var strSvcId    = "selectleft";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectleft=dsSelectleft";
        	var outData     = "dsLeft=selectleft0";
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

        this.fnSelectMaster = function(row) {

        	trace("row", row);
        	if (row <= 0) return false;

        	if (row == 0 && this.dsLeft.rowcount > 0) {
        		row = 1;
        		this.dsList.set_enableevent(false);
        		this.dxGridAPLeft.setCellPos(1, 1);
        		this.dsList.set_enableevent(true);
        	}

        	this.dsSelectMaster.clearData();
        	this.dsSelectMaster.addRow();
        	this.dsSelectMaster.setColumn(0, "NO_MIBUL", this.dsLeft.getColumn(row, "NO_MIBUL"));
        	this.dsSelectMaster.setColumn(0, "CD_TRADE", this.dsLeft.getColumn(row, "CD_TRADE"));
        	this.dsSelectMaster.setColumn(0, "CD_VENDOR", this.dsLeft.getColumn(row, "CD_VENDOR"));
        	this.dsSelectMaster.setColumn(0, "DT_ACCOUNT", this.dsLeft.getColumn(row, "DT_ACCOUNT"));
        	this.dsSelectMaster.setColumn(0, "AM_MIBUL", this.dsLeft.getColumn(row, "AM_MIBUL"));

        	//trace(this.dsSelectMaster.saveXML());

        	var strSvcId    = "selectMaster";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        //  	var inData      = "select=dsSelectMaster";
          	var inData      = "select1=dsSelectMaster select2=dsSelectMaster select3=dsSelectMaster select4=dsSelectMaster select5=dsSelectMaster" ;
          	var outData     = "dsList1=select10 dsList2=select20 dsList3=select30 dsList4=select40 dsList5=select50";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        		strSvcType , 	// transaction을 요청할 구분
        		inProc,			// Procedure 정보 Dataset 이름
        		inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        		callBackFnc); // 통신방법 정의 [생략가능
        }


        this.fnSelectDetail = function(row) {
        	if (row <= 0) return false;

        	if (row == 0 && this.dsLeft.rowcount > 0) {
        		row = 1;
        		this.dsList.set_enableevent(false);
        		this.dxGridAPLeft.setCellPos(1, 1);
        		this.dsList.set_enableevent(true);
        	}

        	this.dsSelectMaster.clearData();
        	this.dsSelectMaster.addRow();
        	this.dsSelectMaster.setColumn(0, "ID_CONSULT", this.dsLeft.getColumn(row, "ID_CONSULT"));
        	this.dsSelectMaster.setColumn(0, "NO_MIBUL", this.dsLeft.getColumn(row, "NO_MIBUL"));

        	var tabIdx = this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabindex;

         	switch(tabIdx) {
        	case 0:
        		this.gfnGridClear(this.dxGridAP1);
        		break;
        	case 1:
        		this.gfnGridClear(this.dxGridAP2);
        		break;
        	case 2:
        		this.gfnGridClear(this.dxGridAP3);
        		break;
        	}


        	var strSvcId    = "selectDetail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectAPTab"+(tabIdx+1)+"=dsSelectMaster"
        						+ (tabIdx==0? " selectAPTabHeader1=dsSelectMaster":""); //탭1 해더
          	var outData     = "dsListAP"+(tabIdx+1)+"=selectAPTab"+(tabIdx+1)+"0"
        						+ (tabIdx==0? " dsListAPTabHeader1=selectAPTabHeader10":""); //탭1 해더
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        		strSvcType , 	// transaction을 요청할 구분
        		inProc,			// Procedure 정보 Dataset 이름
        		inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        		callBackFnc); // 통신방법 정의 [생략가능
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

        this.fnDataValidate = function(aDiv){
        	return true;
        }

        this.fnSetTextDecoration = function(aTY_CONTRACTOR){
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

        /************************************************************************
        * 콜백 이벤트
        ************************************************************************/
        /*
        *	콜백 처리
        */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	trace("svcID", svcID);
        	if (svcID == "selectDetail") {
        		var tabIdx = this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.tabindex;
        		if(tabIdx == 0){
        			if(!this.gfnIsNull(this.dsListAPTabHeader1.getColumn(0 , "NO_APPR"))){
        				this.btnAPWonanDtl.set_enable(true)
        			}
        			else{
        				this.btnAPWonanDtl.set_enable(false)
        			}
        		}
        	}
        	else if (svcID == "selectMaster") {
        		if(this.dsList5.getColumn(0 , "GUBUN") == "X"){
        			this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCHECKPOINT.set_background("#F9E79F");
        // 			this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.sta16.set_text("세금계산서정보 \uD83D\uDEA8");
        // 			this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.sta17.set_text("미지급상세 및 결재정보 \uD83D\uDEA8");
        // 			this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.sta44.set_text("출금요청 \uD83D\uDEA8");
        // 			this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.sta45.set_text("집행내역 \uD83D\uDEA8");
        		}
        		else{
        			this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.txtCHECKPOINT.set_background("");
        // 			this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.sta16.set_text("세금계산서정보");
        // 			this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.sta17.set_text("미지급상세 및 결재정보");
        // 			this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.sta44.set_text("출금요청");
        // 			this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.sta45.set_text("집행내역");
        		}
        		if(this.dsList1.getColumn(0 , "ISSUE_CNT") > "1" ) {
        			this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.sta16.set_text("세금계산서정보 \uD83D\uDEA8");
        		}
        		else{
        			this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.sta16.set_text("세금계산서정보");
        		}

        	}
        	else if (svcID == "selectTax") {
        		if (errorCode == 0) {
        			if(this.dsTax.rowcount > 0){
        				var url = this.gfnGetConfig("DH" , "TAX_URL");
        				url = url+"Tax/TaxView.jsp?";
        				url += "invseq="+this.dsTax.getColumn(0, "INV_SEQ");
        				url += "&status="+this.dsTax.getColumn(0, "STATUS");
        				url += "&burks=" +this.dsTax.getColumn(0, "BUKRS");

        				window.open(url, "_blank", "width=790,height=600,menubar=no,scrollbars=no,resizable=no,status=no");
        			}else{
        				this.gfnAlert("세금계산서 정보가 없습니다.");
        			}
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        	}



        }

        /************************************************************************
        * 코드파인드 이벤트
        ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
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
        	return true;
        }

        /************************************************************************
        * 그리드 이벤트
        ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	this.fnSelectMaster(e.row);
        	this.fnSelectDetail(e.row);
        };

        /************************************************************************
        * 기타 이벤트
        ************************************************************************/
        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.tabData.tab1.form.divSplitter.set_left(e.clientx);
        		this.divData.form.tabData.tab1.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divDataRight_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter2") {
        		this.divData.form.tabData.tab1.form.divDataRight.form.divSplitter2.set_top(e.clienty);
        		this.divData.form.tabData.tab1.form.divDataRight.form.resetScroll();
        	}
        };

        this.divData_divSplitter2_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter2");
        	return true;
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        };


        this.divData_tabData1_onchanged = function(obj,e)
        {
        	if (e.preindex == e.postindex) return;

        	switch (e.postindex) {
        	case 0:
        		this.gfnGridInit(this.dxGridAP1, this.dsListAP1, "DF", "DFB_APTRANS_GRID1");
        		break;
        	case 1:
        		this.gfnGridInit(this.dxGridAP2, this.dsListAP2, "DF", "DFB_APTRANS_GRID2");
        		break;
        	case 2:
        		this.gfnGridInit(this.dxGridAP3, this.dsListAP3, "DF", "DFB_APTRANS_GRID3");
        		break;
        	default:
        		break;
        	}

        	this.fnSelectDetail(this.dsLeft.rowposition);
        };


        /************************************************************************
        * 툴바 버튼 이벤트
        ************************************************************************/
        this.fnDialogCallback = function(svcID, value) {
        	trace("svcID", svcID);
        	// 리턴값
        	trace("value", value);

        };

        //출력버튼(fnPrint) > 계좌선택
        this.fnPrint = function() {

        };


        /************************************************************************
        * 기타 function
        ************************************************************************/
        this.fnTrace = function(arg1, arg2){
        	if(this.fDebugMod){
        		trace(arg1,arg2);
        	}
        }

        this.fnReplace = function(orgText, fromSplit, toSplit){
        	if(this.gfnIsNull(orgText)) return "";

        	var newSplit = "";
        	if(!this.gfnIsNull(toSplit)) newSplit = toSplit;

        	var arrResult = orgText.split(fromSplit);
        	var sResult = arrResult.join(newSplit);
        	return sResult;
        }

        this.fnSaveValidate = function() {
        	var validate = true;
        	var msg = "";

        	return validate;
        }

        this.fnSelectValidate = function(){
        	return true;
        }

        this.fnWrk1 = function(){
        	trace("fnWrk1");
        	if( this.gfnIsNull(this.dsList2.getColumn(0, "CD_TRADE"))) {
        		this.gfnAlert("전표를 조회할수 없습니다.");
        		return false;
        	}
        	var param = {};

        	param.IUD_FLAG = this.dsList2.getColumn(0, "YN_APPR")  == "N" ? "U" : "S";
        	param.CD_TRADE = this.dsList2.getColumn(0, "CD_TRADE").replace(/-/gi, "");

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        }

        this.fnWrk2 = function(){
        	trace("fnWrk2");
        	if( this.gfnIsNull(this.dsList4.getColumn(0, "CHECK_CD_TRADE"))) {
        		this.gfnAlert("전표를 조회할수 없습니다.");
        		return false;
        	}
        	var param = {};

        	param.IUD_FLAG = this.dsList4.getColumn(0, "YN_APPR")  == "N" ? "U" : "S";
        	param.CD_TRADE = this.dsList4.getColumn(0, "CHECK_CD_TRADE").replace(/-/gi, "");

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        }

        this.fnWrk3 = function(){
        	trace("fnWrk3");

        	//세금계산서 조회용 데이터셋
        	this.dsSelectTax = new Dataset();
        	this.dsSelectTax.addColumn("ISSUE_ID"  , "string");
        	this.dsSelectTax.addColumn("TY_SALEBUY", "string");

        	this.dsSelectTax.clearData();
        	var nRow = this.dsSelectTax.addRow();

        	var issueId = this.dsList1.getColumn(0, "ISSUE_ID");
        	var tySalebuy = "I" //this.dsLeft.getColumn(this.dsLeft.rowposition, "TY_SALEBUY");
        	if(this.gfnIsNull(issueId)){
        		this.gfnAlert("전자세금계산서번호는 필수입니다.");
        		return;
        	}
        	this.dsSelectTax.setColumn(nRow, "ISSUE_ID"  , issueId);		//세금계산서번호
        	this.dsSelectTax.setColumn(nRow, "TY_SALEBUY", tySalebuy);		//매입/매출구분

        	//trace(this.dsSelectTax.saveXML());
        	var strSvcId    = "selectTax";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectTax=dsSelectTax";
        	var outData     = "dsTax=selectTax0";
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

        this.btnAPWonanDtl_onclick = function(){
        	trace("btnAPWonanDtl_onclick");

        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url += "approval/approval_Form.do?";
        	url +="forminstanceID="+this.dsListAPTabHeader1.getColumn(0 , "NO_APPR");
        	url +="&processID="+this.dsListAPTabHeader1.getColumn(0, "NM_APPR");

        	trace("url :: " + url);
        	window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.calDT_FROM.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.calDT_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.txtDS_VENDOR.addEventHandler("onchanged",this.divSearch_txtDS_CONTEXT_onchanged,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.tabData.addEventHandler("canchange",this.divData_tabData_canchange,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab1.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.tabData.tab1.form.divDataRight.addEventHandler("ondragmove",this.divDataRight_ondragmove,this);
            this.divData.form.tabData.tab1.form.divDataRight.form.divSplitter2.addEventHandler("ondrag",this.divData_divSplitter2_ondrag,this);
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataTop.form.sta32.addEventHandler("onclick",this.divData_tabData_tab1_divDataRight_divDataTop_sta32_onclick,this);
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.tabDataAP.addEventHandler("onchanged",this.divData_tabData1_onchanged,this);
            this.divData.form.tabData.tab1.form.divDataRight.form.divDataBottom.form.divButton2.form.btnAPWonanDtl.addEventHandler("onclick",this.btnAPWonanDtl_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFB_APTRANS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
