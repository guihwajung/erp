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
            this.set_titletext("대출 신청");
            this.getSetter("maxwidth").set("1125");
            this.getSetter("maxheight").set("700");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLoanSeq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_LOANREQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GROUPJOIN\" type=\"STRING\" size=\"256\"/><Column id=\"YM_GROUPJOIN\" type=\"INT\" size=\"256\"/><Column id=\"DS_GROUPJOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LOANLIMIT\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_JAN\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_LOANPOSSIBLE\" type=\"FLOAT\" size=\"256\"/><Column id=\"ID_LOANSCH\" type=\"STRING\" size=\"256\"/><Column id=\"NO_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LOAN\" type=\"FLOAT\" size=\"256\"/><Column id=\"YM_REPAYMENT\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_MONTH\" type=\"FLOAT\" size=\"256\"/><Column id=\"RT_RATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"CD_REPAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REPAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MAXLOAN\" type=\"FLOAT\" size=\"256\"/><Column id=\"YM_MAX\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_MONTHRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"YY_BASEYEAR\" type=\"INT\" size=\"256\"/><Column id=\"CD_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"AM_REPAYMENT\" type=\"FLOAT\" size=\"256\"/><Column id=\"DT_REPAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BEFJAN\" type=\"FLOAT\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INTEREST\" type=\"FLOAT\" size=\"256\"/><Column id=\"YM_REMAIN\" type=\"FLOAT\" size=\"256\"/><Column id=\"YM_ALLOW\" type=\"FLOAT\" size=\"256\"/><Column id=\"YM_CHANGE\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_CHANGEMONTH\" type=\"FLOAT\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DOCUMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REQUESTDOC\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EXCUTE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"QN_POINT\" type=\"STRING\" size=\"256\"/><Column id=\"QN_GROUPJOIN\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">createSeq</Col><Col id=\"SP\">DABPR_LOANSEQ_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_LOANREQUEST_SAVE</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_LOANREQUEST_DETAILSELECT</Col></Row><Row><Col id=\"TARGET\">selectSch</Col><Col id=\"SP\">DABPR_LOANSCH_SELECT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DABPR_LOANREQUEST_DELETE</Col></Row><Row><Col id=\"TARGET\">print</Col><Col id=\"SP\">DABPR_LOANREQUEST_PRINT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인</Col></Row><Row><Col id=\"CD_FIELD\">CD_DEPT</Col><Col id=\"DS_FIELD\">부서</Col></Row><Row><Col id=\"CD_FIELD\">ID_SABUN</Col><Col id=\"DS_FIELD\">사번</Col></Row><Row><Col id=\"CD_FIELD\">CD_LOAN</Col><Col id=\"DS_FIELD\">대출유형</Col></Row><Row><Col id=\"CD_FIELD\">AM_REQUEST</Col><Col id=\"DS_FIELD\">대출금액</Col></Row><Row><Col id=\"CD_FIELD\">NO_LOANREQUEST</Col><Col id=\"DS_FIELD\">상환기간</Col></Row><Row><Col id=\"CD_FIELD\">DS_REMARK</Col><Col id=\"DS_FIELD\">대출사유</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsId_Loansch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_LOANSCH\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LOAN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle1","0","0","359","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","staTitle1:0",null,"133","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staBg2","79","29",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg","79","0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIdSabun","0","0","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("성명");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdDept","staIdSabun:210","0","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabelT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAmLoanLimit","0","29","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("개인대출한도");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN","103","5","200","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("AutoSet").set("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT","staCdDept:4","4","166","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdPosition","staCdDept:172","0","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_tablelabelT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDtIpsa","staCdPosition:130","0","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_tablelabelT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAmJan","staAmLoanLimit:210","staCdDept:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("현대출잔액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAmLimit","staAmJan:172","staCdPosition:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("대출가능금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDtGipsa","staAmLimit:130","29","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("그룹입사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_POSITION","staCdPosition:4","4","46","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtAM_HANDO","staAmLimit:4","33",null,"24","260",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LIMIT","staAmLimit:4","33","107","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc11","mskAM_LIMIT:4","33","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LOANJAN","staAmJan:4","33","135","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc12","mskAM_LOANJAN:4","32","20","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc13","242","32","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LOANLIMIT","103","33","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_JOIN","staDtIpsa:4","6","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_JOIN","tclDT_JOIN:4","4","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_GROUPJOIN","staDtGipsa:4","34","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_GROUPJOIN","tclDT_GROUPJOIN:4","33","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_PAYSTEP","737","4","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_APRV","1021","71",null,"20","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc3","963","70",null,"24","txtDS_APRV:-9",null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("승인상태 :");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_REQUEST","855","72",null,"20","staDesc3:9",null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","800","70",null,"24","tclDT_REQUEST:-62",null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("신청일자");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle2","0","divData:-73","359","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divDataDetail","0","staTitle2:0",null,"460","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REM","85","204",null,"72","10",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staBg10","79","418",null,"30","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staBg9","79","338",null,"81","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staBg8","79","154",null,"186","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staBg7","79","87",null,"30","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staBg6","90","29",null,"30","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staBg3","79","0",null,"30","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staCdLoan","0","0","100","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("대출종류");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Div("cfCD_LOAN","staCdLoan:4","5","199","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.getSetter("CodeFindName").set("DAX_LOANRATE");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staAmLoan","310","29","100","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("16");
            obj.set_text("대출신청금액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_REQUEST","staAmLoan:4","34","116","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("3");
            obj.set_format("###,###,###");
            obj.set_limitbymask("integer");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staYmLoan","582","29","100","34",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("7");
            obj.set_text("상환신청개월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDesc1","txtAM_REQUEST:6","34","20","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("9");
            obj.set_text("원");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtYM_REPAYMENT","staYmLoan:4","34","50","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("4");
            obj.set_limitbymask("integer");
            obj.set_format("#,###");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDesc2","txtYM_REPAYMENT:4","34","30","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("10");
            obj.set_text("개월");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staBg5","79","58",null,"30","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staTyRepayment","0","29","100","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("6");
            obj.set_text("상환방법");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDsBank","0","58","100","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("11");
            obj.set_text("은행명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staAmLoanMax","staCdLoan:210","0","100","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_text("대출한도금액");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staYmLoanMax","staAmLoanMax:172","0","100","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_text("최장상환개월");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staRtRate","staYmLoanMax:130","0","90","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_text("이자율");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staAmMonth","staYmLoan:130","29","90","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("17");
            obj.set_text("월상환액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDsRemark","0","87","100","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("18");
            obj.set_text("대출사유");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Edit("txtDS_REMARK","staDsRemark:4","92",null,"20","10",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staNoAccount","310","58","100","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("20");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staTitle2","0","118","359","35",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("21");
            obj.set_text("구비서류 및 첨부파일");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDsDocumnet","0","154","80","186",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_text("구비서류");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDs","580","154","76","186",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_text("신청자격 \r\n    및\r\n신청요건");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new TextArea("txtDS_DOCUMENT","84","161","492","176",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REQUESTDOC","660","161",null,"176","10",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDsEtc","0","339","80","81",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("기타");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Button("btnATTACH",null,"421","74","24","760",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("30");
            obj.set_text("파일첨부");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Edit("txtDS_REPAYMENT","staTyRepayment:6","35","204","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("32");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("sta00","staDsBank:8","62","51","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("43");
            obj.set_text("급여계좌:");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Edit("txtDS_BANK","sta00:6","62","105","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("33");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Edit("txtNO_ACCOUNT","staNoAccount:6","62","140","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("34");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TYPELIMIT","staAmLoanMax:5","5","115","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("35");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskRT_RATE","staRtRate:4","4","105","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("36");
            obj.set_format("#,##0.##%");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_MONTH","staAmMonth:4","34","105","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("37");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskYM_LIMIT","staYmLoanMax:4","4","49","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("38");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDesc3","mskYM_LIMIT:5","4","30","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("39");
            obj.set_text("개월");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDesc4","mskAM_TYPELIMIT:6","4","20","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("40");
            obj.set_text("원");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDesc5","mskAM_MONTH:4","33","20","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("41");
            obj.set_text("원");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staNoAccount00","582","58","100","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("42");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Edit("txtCD_BANK","238","69",null,"24","870",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("44");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Edit("txtDS_ACCOUNT","staNoAccount00:5","63","144","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("45");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDesc6","mskRT_RATE:5","3","20","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("46");
            obj.set_text("%");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staFileUpload","89","423","146","24",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("47");
            obj.set_text("파일수 :  0 개");
            obj.set_cssclass("sta_WF_notice");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDS_REM","87","341","750","21",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("48");
            obj.set_text("1. 원금 및 이자(사내 이자율 기준) 균등상환은 매월 급여일로 함.");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("sta01","87","staDS_REM:1","745","32",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("49");
            obj.set_text("2. 대출 실행 시 서울보증보험 이행증권 제출 必.\r\n   (개인 신용, 대출 금액/기간 등에 따라 보험료 30~60만원 발생)");
            obj.set_color("#db040b");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDS_REM00","87","sta01:1","963","21",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("50");
            obj.set_text("3. 대출자가 퇴직 시에는 대출금 전액을 퇴직 전 일시 상환하며, 미상환 시 회사로부터 지급받을 모든 채권에 대하여 원리금 상환에 충당하는 것에 동의함.");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Div("divBtns","394",null,"310","26",null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCEL",null,"0","73","26","11",null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnSAVE","60","0","79","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("임시저장");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","145","0","75","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("2");
            obj.set_text("신청완료");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staDsFile","0","548","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Button("btnAGTFILE",null,"7","115","24","125",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("약정서/보증서첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btnAGTPRINT",null,"7","115","24","btnAGTFILE:5",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("대출약정서출력");
            this.addChild(obj.name, obj);

            obj = new Button("btnSIMULATION",null,"7","115","24","btnAGTPRINT:5",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("대출시뮬레이션");
            this.addChild(obj.name, obj);

            obj = new Button("btnAfterFile",null,"7","115","24","5",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("사후제출서류첨부");
            this.addChild(obj.name, obj);

            obj = new Edit("txtNO_LOANREQUEST","469","4","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maxlength("25");
            obj.set_readonly("false");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staAlter","staTitle2:-271","103","466","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("※대출종류를 먼저 선택한 후 대출신청금액과 상환개월을 입력하시기 바랍니다.");
            obj.set_color("#1a1dc0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","divData.form.cfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDataDetail.form.cfCD_LOAN.form.CDTextBox","value","dsList","CD_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDataDetail.form.cfCD_LOAN.form.DSTextBox","value","dsList","DS_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDataDetail.form.txtAM_REQUEST","value","dsList","AM_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDataDetail.form.txtYM_REPAYMENT","value","dsList","YM_REPAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtDS_DEPT","value","dsList","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.txtDS_POSITION","value","dsList","DS_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divDataDetail.form.txtDS_REPAYMENT","value","dsList","DS_REPAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDataDetail.form.txtDS_BANK","value","dsList","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDataDetail.form.txtNO_ACCOUNT","value","dsList","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.txtDS_JOIN","value","dsList","DS_JOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.txtDS_GROUPJOIN","value","dsList","DS_GROUPJOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDataDetail.form.txtDS_DOCUMENT","value","dsList","DS_DOCUMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDataDetail.form.txtDS_REQUESTDOC","value","dsList","DS_REQUESTDOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divDataDetail.form.txtCD_BANK","value","dsList","CD_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divDataDetail.form.txtDS_ACCOUNT","value","dsList","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.txtDS_PAYSTEP","value","dsList","DS_PAYSTEP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.mskAM_LOANJAN","value","dsList","AM_JAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.mskAM_LIMIT","value","dsList","AM_LOANPOSSIBLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.mskAM_LOANLIMIT","value","dsList","AM_LOANLIMIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tclDT_JOIN","value","dsList","DT_JOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tclDT_GROUPJOIN","value","dsList","DT_GROUPJOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divDataDetail.form.mskAM_TYPELIMIT","value","dsList","AM_MAXLOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divDataDetail.form.mskYM_LIMIT","value","dsList","YM_MAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divDataDetail.form.mskAM_MONTH","value","dsList","AM_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divDataDetail.form.txtDS_REMARK","value","dsList","DS_REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divDataDetail.form.mskRT_RATE","value","dsList","RT_RATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","txtNO_LOANREQUEST","value","dsList","NO_LOANREQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtDS_APRV","value","dsList","DS_APRV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tclDT_REQUEST","value","dsList","DT_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_LOANREQUEST_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();


        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.fnSetInit();

        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        };

        //컨트롤 활성화 처리
        this.fnSetEnable = function ()
        {
        	this.cfID_SABUN.set_enable(false);
        	this.cfCD_LOAN.set_enable(false);
        	this.txtAM_REQUEST.set_enable(false);
        	this.txtYM_REPAYMENT.set_enable(false);
        	this.txtDS_REMARK.set_enable(false);

        	//this.fileManager.IS_READONLY = false;
        	this.btnSAVE.set_enable(false);
        	this.btnOK.set_enable(false);
        	//this.btnCANCEL.set_enable(false);
        	this.btnAGTPRINT.set_enable(false);
        	this.btnAGTFILE.set_enable(false);
        	this.btnAfterFile.set_enable(false);

        	this.tclDT_REQUEST.set_visible(false);
        	this.staDT_REQUEST.set_visible(false);

        	trace(" ST_APRV=>" + this.dsList.getColumn(0, "ST_APRV"));
        	switch(this.dsList.getColumn(0, "ST_APRV")) {
        	case "01":
        		this.cfID_SABUN.set_enable(true);
        		this.cfCD_LOAN.set_enable(true);
        		this.txtAM_REQUEST.set_enable(true);
        		this.txtYM_REPAYMENT.set_enable(true);
        		this.txtDS_REMARK.set_enable(true);

        		//this.fileManager.IS_READONLY = false;
        		this.btnSAVE.set_enable(true);
        		this.btnOK.set_enable(true);
        		this.btnCANCEL.set_enable(true);
        		this.btnCANCEL.set_text("신청취소");
        		//trace(" YM_MAX=>" + this.dsList.getColumn(0, "YM_MAX"));
        		if (this.dsList.getColumn(0, "YM_MAX")== 0 )
        		{
        			 this.txtYM_REPAYMENT.set_enable(false);
        		}
        		break;
        	case "02":
        		this.tclDT_REQUEST.set_visible(true);
        		this.staDT_REQUEST.set_visible(true);
        		break;
        	case "":
        		this.cfID_SABUN.set_enable(true);
        		this.cfCD_LOAN.set_enable(true);
        		this.txtAM_REQUEST.set_enable(true);
        		this.txtYM_REPAYMENT.set_enable(true);
        		this.txtDS_REMARK.set_enable(true);

        		//this.fileManager.IS_READONLY = false;
        		this.btnSAVE.set_enable(true);
        		this.btnOK.set_enable(true);
        		this.btnCANCEL.set_enable(true);

        		break;
        	case "03":  // 승인 상태
        		this.btnAGTPRINT.set_enable(true);
        		this.btnAGTFILE.set_enable(true);
        		this.btnAfterFile.set_enable(true);
        		this.tclDT_REQUEST.set_visible(true);
        		this.staDT_REQUEST.set_visible(true);
        		break;
        	case "04":
        		this.btnAGTPRINT.set_enable(false);
        		this.btnAGTFILE.set_enable(false);
        		this.btnAfterFile.set_enable(false);
        		this.tclDT_REQUEST.set_visible(true);
        		this.staDT_REQUEST.set_visible(true);
        		break;
        	case "05":
        		this.btnAGTPRINT.set_enable(true);
        		this.btnAGTFILE.set_enable(true);
        		this.btnAfterFile.set_enable(true);
        		this.tclDT_REQUEST.set_visible(true);
        		this.staDT_REQUEST.set_visible(true);
        		break;
        	case "06":
        		this.btnAGTPRINT.set_enable(true);
        		this.btnAGTFILE.set_enable(true);
        		this.btnAfterFile.set_enable(true);
        		this.tclDT_REQUEST.set_visible(true);
        		this.staDT_REQUEST.set_visible(true);
        		break;
        	default:

        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.cfID_SABUN    = this.divData.form.cfID_SABUN;
        	this.txtDS_DEPT		= this.divData.form.txtDS_DEPT;
        	this.txtDS_POSITION = this.divData.form.txtDS_POSITION;
        	this.tclDT_JOIN = this.divData.form.tclDT_JOIN;
        	this.tclDT_GROUPJOIN  = this.divData.form.tclDT_GROUPJOIN;
        	this.mskAM_LOANLIMIT = this.divData.form.mskAM_LOANLIMIT;
        	this.mskAM_LOANJAN = this.divData.form.mskAM_LOANJAN;
        	this.mskAM_LIMIT = this.divData.form.mskAM_LIMIT;

        	this.cfCD_LOAN     = this.divDataDetail.form.cfCD_LOAN;
        	this.mskAM_TYPELIMIT = this.divDataDetail.form.mskAM_TYPELIMIT;
        	this.mskYM_LIMIT = this.divDataDetail.form.mskYM_LIMIT;
        	this.mskRT_RATE = this.divDataDetail.form.mskRT_RATE;
        	this.txtDS_REPAYMENT = this.divDataDetail.form.txtDS_REPAYMENT;
        	this.txtAM_REQUEST = this.divDataDetail.form.txtAM_REQUEST;
        	this.txtYM_REPAYMENT = this.divDataDetail.form.txtYM_REPAYMENT;
        	this.mskAM_MONTH = this.divDataDetail.form.mskAM_MONTH;
        	this.txtDS_REM = this.divDataDetail.form.txtDS_REM;
        	this.txtDS_REMARK = this.divDataDetail.form.txtDS_REMARK;

        	this.staDT_REQUEST = this.divData.form.staDT_REQUEST;
        	this.tclDT_REQUEST = this.divData.form.tclDT_REQUEST;
        	this.staFileUpload = this.divDataDetail.form.staFileUpload;

        	this.btnAGTFILE     = this.btnAGTFILE;
        	this.btnAGTPRINT     = this.btnAGTPRINT;
        	this.btnSIMULATION     = this.btnSIMULATION;

        	this.btnATTACH     = this.divDataDetail.form.btnATTACH;
        	this.btnSAVE     = this.divBtns.form.btnSAVE;
        	this.btnOK     = this.divBtns.form.btnOK;
        	this.btnCANCEL     = this.divBtns.form.btnCANCEL;

        	this.FileManager = {};

        	this.FileManager.CD_GUBUN = "DAB1";
        	//this.FileManager.CD_DIR = [cdDir];
        	this.FileManager.IS_READONLY = false;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//코드파인드
        	this.cfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.cfCD_LOAN.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";
        	this.cfCD_LOAN.AfterCDTextChanged      = "fnAfterCDTextChanged";
        };

        // 부모창에서 받아온것 셋팅
        this.fnSetInit = function() {

        	this.cfID_SABUN.form.set_readonly(true);
        	var frame = this.getOwnerFrame();
        	if(frame.TY_WRK == "I" && frame.GR_SEARCH =="1"){
        		this.cfID_SABUN.form.set_readonly(false);
        	}

        	var dsRem = this.gfnNvl(this.gfnGetConfig("DA" , "DS_LOANREMARK"), "");
        	//trace(" dsRem=>" + dsRem);
        	this.txtDS_REM.set_value(dsRem);

        	if( frame.TY_WRK == "U" ){
        		this.dsList.clearData();
        		var nRow = this.dsList.addRow();
        		this.dsList.set_enableevent(false);
        		this.dsList.setColumn(0, "CD_CORP", frame.CD_CORP);
        		this.dsList.setColumn(0, "ID_SABUN", frame.ID_SABUN);
        		this.dsList.setColumn(0, "NO_LOANREQUEST", frame.NO_LOANREQUEST);
        		this.dsList.set_enableevent(true);
        		this.fnSelect();
        	} else {

        		if(this.dsList.findRow(this.ucFlag, "I") > -1){
        			this.gfnAlert("신규 추가된 데이터가 이미 있습니다.");
        			return;
        		}

        		this.dsList.clearData();
        		var nRow = this.dsList.addRow();
        		this.dsList.setColumn(nRow, this.ucFlag, "I");
        		this.dsList.set_enableevent(false);

        		this.fnSetSchadule();  // 신규일때 스케쥴 확인해서 신청기간 아니면 닫음.

        		this.dsList.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        		this.dsList.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        		this.dsList.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        		this.dsList.setColumn(0, "DS_DEPT", this.AuthClient.DS_DEPT);
        		this.dsList.setColumn(0, "DS_HNAME", this.AuthClient.DS_HNAME);
        		this.dsList.setColumn(0, "ID_SABUN", this.AuthClient.ID_SABUN);

        		this.dsList.setColumn(0, "AM_REQUEST", "");
        		this.dsList.setColumn(0, "NO_LOANREQUEST","");
        		this.dsList.setColumn(0, "DS_REMARK", "");
        		this.dsList.setColumn(0, "DS_REPAYMENT", "원금균등");
        		this.dsList.setColumn(0, "CD_REPAYMENT", "01");
        		this.dsList.set_enableevent(true);

        		this.gfnSetFormStatus(this, "I");
        	}

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "STRING");
        	this.dsSelect.addColumn("ID_SABUN", "STRING");
        	this.dsSelect.addColumn("NO_LOANREQUEST", "INT");

        	this.dsSeq = new Dataset();
        	this.dsSeq.addColumn("YY_BASE", "STRING");
        	this.dsSeq.addColumn("ID_SABUN", "STRING");
        	this.dsSeq.addColumn("ID_PERSON", "INT");
        	this.dsSeq.addColumn("CD_CORP", "STRING");
        	this.dsSeq.addColumn("ID_LOANSCH", "STRING");

        	this.dsSch = new Dataset();
        	this.dsSch.addColumn("CD_CORP", "STRING");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("NO_LOANREQUEST", "INT");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("CD_LOAN", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("CD_POSITION", "string");
        	this.dsSave.addColumn("CD_PAYSTEP", "string");
        	this.dsSave.addColumn("DS_JOIN", "string");
        	this.dsSave.addColumn("DS_GROUPJOIN", "string");
        	this.dsSave.addColumn("QN_GROUPJOIN",  "int");
        	this.dsSave.addColumn("QN_POINT", "int");
        	this.dsSave.addColumn("AM_LOANLIMIT", "bigdecimal");
        	this.dsSave.addColumn("AM_JAN", "bigdecimal");
        	this.dsSave.addColumn("ID_LOANSCH", "string");
        // 	this.dsSave.addColumn("NO_LOAN", "int");
        // 	this.dsSave.addColumn("DT_REQUEST", "string");
        	this.dsSave.addColumn("ST_APRV", "string");
        // 	this.dsSave.addColumn("DT_APRV", "string");
        // 	this.dsSave.addColumn("DT_LOAN", "string");
        	this.dsSave.addColumn("AM_LOAN", "bigdecimal");
        	this.dsSave.addColumn("YM_REPAYMENT", "int");
        	this.dsSave.addColumn("AM_MONTH", "bigdecimal");
        	this.dsSave.addColumn("RT_RATE", "bigdecimal");
        	this.dsSave.addColumn("CD_REPAYMENT", "string");
        	this.dsSave.addColumn("CD_BANK", "string");
        	this.dsSave.addColumn("NO_ACCOUNT", "string");
        	this.dsSave.addColumn("DS_ACCOUNT", "string");
        	this.dsSave.addColumn("DS_REASON", "string");
        // 	this.dsSave.addColumn("AM_REPAYMENT", "bigdecimal");
        // 	this.dsSave.addColumn("DT_REPAYMENT", "string");
        // 	this.dsSave.addColumn("AM_BEFJAN", "bigdecimal");
        // 	this.dsSave.addColumn("DT_FROM", "string");
        // 	this.dsSave.addColumn("DT_TO", "string");
        // 	this.dsSave.addColumn("AM_INTEREST", "bigdecimal");
        // 	this.dsSave.addColumn("YM_REMAIN", "int");
        // 	this.dsSave.addColumn("YM_ALLOW", "int");
        // 	this.dsSave.addColumn("YM_CHANGE", "int");
        // 	this.dsSave.addColumn("AM_CHANGEMONTH", "bigdecimal");
        // 	this.dsSave.addColumn("YN_EXCUTE", "string");
        // 	this.dsSave.addColumn("DS_RETURN", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("ID_SABUN", "string");
        	this.dsDelete.addColumn("NO_LOANREQUEST", "INT");
        };

        /************************************************************************
         *  이벤트
         ************************************************************************/

        //대출신청 일정 가져오기
        this.fnSetSchadule = function ()
        {
           this.dsSch.clearData();
           this.dsSch.addRow();
           this.dsSch.setColumn(0, "CD_CORP"     ,  this.AuthClient.CD_CORP);

            var strSvcId    = "selectSch";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectSch=dsSch";
        	var outData     = "dsId_Loansch=selectSch0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]

        };

        // 대출번호 생성
        this.fnSetNoRequest = function ()
        {
        	this.dsSeq.clearData();
        	this.dsSeq.addRow();
            this.dsSeq.setColumn(0, "YY_BASE"     ,  this.dsId_Loansch.getColumn(0,"YY_BASE"));
            this.dsSeq.setColumn(0, "ID_SABUN"    ,  this.gfnIsNull(this.dsList.getColumn(0, "ID_SABUN")) ? this.AuthClient.ID_SABUN : this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSeq.setColumn(0, "ID_PERSON"   ,  this.gfnIsNull(this.dsList.getColumn(0, "ID_PERSON")) ? this.AuthClient.ID_PERSON : this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsSeq.setColumn(0, "CD_CORP"     ,  this.AuthClient.CD_CORP);
        	this.dsSeq.setColumn(0, "ID_LOANSCH"  ,  this.dsId_Loansch.getColumn(0,"ID_LOANSCH"));

            var strSvcId    = "createSeq";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "createSeq=dsSeq";
        	var outData     = "dsLoanSeq=createSeq0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        };

        this.fnSelect = function()
        {
        	//if(!this.fnSelectValidate()) return;
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "NO_LOANREQUEST", this.dsList.getColumn(0, "NO_LOANREQUEST"));
        	//trace(" dsSelect=>" + this.dsSelect.saveXML());
        	var strSvcId    = "select";
        	var strSvcType  = "select";
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

        this.fnSave = function (vType)
        {
        	//if(!this.gfnDataValidate(this.dsList,this.dsRequired)) return;
        	if(!this.fnSaveValidate()) return;

        	var flag = this.gfnGetFormStatus(this);
        	trace("fnSave  flag=>" + flag);
        	this.dsSave.clearData();
        	if (flag=="I" || flag=="U" || flag =="Q")
        	{
        		var nrow = this.dsSave.addRow();
        		this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        		this.dsSave.setColumn(nrow, "NO_LOANREQUEST", this.dsList.getColumn(0, "NO_LOANREQUEST"));
        		this.dsSave.setColumn(nrow, "TY_GUBUN", "1");
        		this.dsSave.setColumn(nrow, "CD_LOAN", this.dsList.getColumn(0, "CD_LOAN"));
        		this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(0, "CD_DEPT"));
        		this.dsSave.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(0, "CD_POSITION"));
        		this.dsSave.setColumn(nrow, "CD_PAYSTEP", this.dsList.getColumn(0, "CD_PAYSTEP"));
        		this.dsSave.setColumn(nrow, "DS_JOIN", this.dsList.getColumn(0, "DS_JOIN"));
        		this.dsSave.setColumn(nrow, "DS_GROUPJOIN", this.dsList.getColumn(0, "DS_GROUPJOIN"));
        		this.dsSave.setColumn(nrow, "QN_GROUPJOIN", this.dsList.getColumn(0, "QN_GROUPJOIN"));
        		this.dsSave.setColumn(nrow, "QN_POINT", this.dsList.getColumn(0, "QN_POINT"));
        		this.dsSave.setColumn(nrow, "AM_LOANLIMIT", this.dsList.getColumn(0, "AM_LOANLIMIT"));
        		this.dsSave.setColumn(nrow, "AM_JAN", this.dsList.getColumn(0, "AM_JAN"));
        		this.dsSave.setColumn(nrow, "ID_LOANSCH", this.dsList.getColumn(0, "ID_LOANSCH"));
        		//this.dsSave.setColumn(nrow, "NO_LOAN", this.dsList.getColumn(0, "NO_LOAN"));
        		//this.dsSave.setColumn(nrow, "DT_REQUEST", this.dsList.getColumn(0, "DT_REQUEST"));
        		this.dsSave.setColumn(nrow, "ST_APRV", vType == "Ok" ? "02" : "01" );
        		//this.dsSave.setColumn(nrow, "DT_APRV", this.dsList.getColumn(0, "DT_APRV"));
        		//this.dsSave.setColumn(nrow, "DT_LOAN", this.dsList.getColumn(0, "DT_LOAN"));
        		this.dsSave.setColumn(nrow, "AM_LOAN", this.dsList.getColumn(0, "AM_LOAN"));
        		this.dsSave.setColumn(nrow, "YM_REPAYMENT", this.dsList.getColumn(0, "YM_REPAYMENT"));
        		this.dsSave.setColumn(nrow, "AM_MONTH", this.dsList.getColumn(0, "AM_MONTH"));
        		this.dsSave.setColumn(nrow, "RT_RATE", this.dsList.getColumn(0, "RT_RATE"));
        		this.dsSave.setColumn(nrow, "CD_REPAYMENT", this.dsList.getColumn(0, "CD_REPAYMENT"));
        		this.dsSave.setColumn(nrow, "CD_BANK", this.dsList.getColumn(0, "CD_BANK"));
        		this.dsSave.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(0, "NO_ACCOUNT"));
        		this.dsSave.setColumn(nrow, "DS_ACCOUNT", this.dsList.getColumn(0, "DS_ACCOUNT"));
        		this.dsSave.setColumn(nrow, "DS_REASON", this.dsList.getColumn(0, "DS_REASON"));
        // 		this.dsSave.setColumn(nrow, "AM_REPAYMENT", this.dsList.getColumn(0, "AM_REPAYMENT"));
        // 		this.dsSave.setColumn(nrow, "DT_REPAYMENT", this.dsList.getColumn(0, "DT_REPAYMENT"));
        // 		this.dsSave.setColumn(nrow, "AM_BEFJAN", this.dsList.getColumn(0, "AM_BEFJAN"));
        // 		this.dsSave.setColumn(nrow, "DT_FROM", this.dsList.getColumn(0, "DT_FROM"));
        // 		this.dsSave.setColumn(nrow, "DT_TO", this.dsList.getColumn(0, "DT_TO"));
        // 		this.dsSave.setColumn(nrow, "AM_INTEREST", this.dsList.getColumn(0, "AM_INTEREST"));
        // 		this.dsSave.setColumn(nrow, "YM_REMAIN", this.dsList.getColumn(0, "YM_REMAIN"));
        // 		this.dsSave.setColumn(nrow, "YM_ALLOW", this.dsList.getColumn(0, "YM_ALLOW"));
        // 		this.dsSave.setColumn(nrow, "YM_CHANGE", this.dsList.getColumn(0, "YM_CHANGE"));
        // 		this.dsSave.setColumn(nrow, "AM_CHANGEMONTH", this.dsList.getColumn(0, "AM_CHANGEMONTH"));
        		//this.dsSave.setColumn(nrow, "YN_EXCUTE", this.dsList.getColumn(0, "YN_EXCUTE"));
        		//this.dsSave.setColumn(nrow, "DS_RETURN", this.dsList.getColumn(0, "DS_RETURN"));
        		this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save"+vType ;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg,         // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };

        this.fnDelete = function ()
        {
        	//if(!this.fnDelValidate()) return;

        	var flag = this.gfnGetFormStatus(this);

        	this.dsDelete.clearData();

        	if (flag =="D")
        	{
        		var nrow = this.dsDelete.addRow();
        		this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsDelete.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        		this.dsDelete.setColumn(nrow, "NO_LOANREQUEST", this.dsList.getColumn(0, "NO_LOANREQUEST"));
        	}

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "delete" ;
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
        						strArg,         // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        };
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {

        	var strMsg = "";

        	if(this.gfnIsNull(this.dsList.getColumn(0, "ID_SABUN"))) {
        		strMsg += "※사번이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_LOAN"))) {
        		strMsg += "※대출구분이 입력되지 않았습니다.\n";
        	}

        	if(this.dsList.getColumn(0, "AM_LOAN")== 0 || this.gfnIsNull(this.dsList.getColumn(0,"AM_LOAN"))) {
        		strMsg += "※대출금액이 입력되지 않았습니다.\n";
        	}

        	if(this.dsList.getColumn(0, "YM_REPAYMENT")==0 && this.dsList.getColumn(0, "AM_MONTH")==0) {
        		strMsg += "※상환신청개월이 입력되지 않았습니다.\n";
        	}
        	trace(" ※상환신청개월이 YM_REPAYMENT=>" + this.dsList.getColumn(0, "YM_REPAYMENT"));
        	if((this.dsList.getColumn(0, "YM_REPAYMENT")==0 || this.gfnIsNull(this.dsList.getColumn(0, "YM_REPAYMENT"))) && this.dsList.getColumn(0, "AM_MAX") > 0) {
        		strMsg += "※상환신청개월이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "AM_MONTH")==0))  {
        		strMsg += "※월상환액이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DS_REASON")) ) {
        		strMsg += "※대출사유가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_ACCOUNT")) ) {
        		strMsg += "※계좌번호가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_BANK")) ) {
        		strMsg += "※은행코드가 입력되지 않았습니다.\n";
        	}

        	if(this.dsList.getColumn(0, "AM_LOAN") > this.dsList.getColumn(0, "AM_LOANPOSSIBLE")) {
        		strMsg += "※대출신청액은 개인대출한도보다 작아야 합니다. 대출신청금액을 확인하세요.\n";
        	}

        	if(this.dsList.getColumn(0, "AM_LOAN") > this.dsList.getColumn(0, "AM_MAXLOAN") ) {
        		strMsg += "※대출신청액은 대출한도금액보다 작아야 합니다. 대출신청금액을 확인하세요.\n";
        	}

        	if(this.dsList.getColumn(0, "YM_REPAYMENT") > this.dsList.getColumn(0, "YM_MAX") ) {
        		strMsg += "※대출신청기간은 최장상환개월보다 작아야 합니다. 대출신청기간을 확인하세요.\n";
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        }

        this.fnDelValidate = function ()
        {
        	var strMsg = "";

        	if(!this.gfnIsNull(this.dsList.getColumn(0, "ST_APRV")) && this.dsList.getColumn(0, "ST_APRV") == "01") {
        		strMsg += "※신청완료된 자료입니다. 삭제할 수 없습니다.\n";
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
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
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	trace(" svcID=>" + svcID);
        	switch(svcID) {
        		case "select" :
        			if(this.dsList.rowcount > 0) {
        				this.dsList.set_enableevent(false);
        				this.fnSetEnable(); //  활성화 처리
        				this.staFileUpload.set_text("파일수 : " + this.dsList.getColumn(0, "URL_PROOF") + " 개");
        				trace("URL_PROOF =>" + this.dsList.getColumn(0, "URL_PROOF"));
        				this.gfnSetFormStatus(this, "Q");
        				this.dsList.set_enableevent(true);
        				//trace(" dsList=>" + this.dsList.saveXML());
        			}
        			break;
        		case "createSeq" :
        			if (this.dsLoanSeq.rowcount != 0) {
        		        //trace(this.dsLoanSeq.saveXML());
        				this.dsList.set_enableevent(false);
        				this.dsList.setColumn(0,"NO_LOANREQUEST",this.dsLoanSeq.getColumn(0,"NO_LOANREQUEST"));
        				this.dsList.setColumn(0,"ID_SABUN",this.dsLoanSeq.getColumn(0,"ID_SABUN"));
        				this.dsList.setColumn(0,"DS_HNAME",this.dsLoanSeq.getColumn(0,"DS_HNAME"));
        				this.dsList.setColumn(0,"CD_DEPT",this.dsLoanSeq.getColumn(0,"CD_DEPT"));
        				this.dsList.setColumn(0,"DS_DEPT",this.dsLoanSeq.getColumn(0,"DS_DEPT"));
        				this.dsList.setColumn(0,"CD_EMPTYPE",this.dsLoanSeq.getColumn(0,"CD_EMPTYPE"));
        				this.dsList.setColumn(0,"CD_POSITION",this.dsLoanSeq.getColumn(0,"CD_POSITION"));
        				this.dsList.setColumn(0,"DS_POSITION",this.dsLoanSeq.getColumn(0,"DS_POSITION"));
        				this.dsList.setColumn(0,"CD_PAYSTEP",this.dsLoanSeq.getColumn(0,"CD_PAYSTEP"));
        				this.dsList.setColumn(0,"DS_PAYSTEP",this.dsLoanSeq.getColumn(0,"DS_PAYSTEP"));
        				this.dsList.setColumn(0,"DT_JOIN",this.dsLoanSeq.getColumn(0,"DT_JOIN"));
        				this.dsList.setColumn(0,"DT_GROUPJOIN",this.dsLoanSeq.getColumn(0,"DT_GROUPJOIN"));
        				this.dsList.setColumn(0,"DS_GROUPJOIN",this.dsLoanSeq.getColumn(0,"DS_GROUPJOIN"));
        				this.dsList.setColumn(0,"DS_JOIN",this.dsLoanSeq.getColumn(0,"DS_JOIN"));
        				this.dsList.setColumn(0,"AM_LOANLIMIT",this.dsLoanSeq.getColumn(0,"AM_LOANLIMIT"));
        				this.dsList.setColumn(0,"AM_JAN",this.dsLoanSeq.getColumn(0,"AM_JAN"));
        				this.dsList.setColumn(0,"AM_LOANPOSSIBLE",this.dsLoanSeq.getColumn(0,"AM_LOANPOSSIBLE"));
        				this.dsList.setColumn(0,"NO_ACCOUNT",this.dsLoanSeq.getColumn(0,"NO_ACCOUNT"));
        				this.dsList.setColumn(0,"CD_BANK",this.dsLoanSeq.getColumn(0,"CD_BANK"));
        				this.dsList.setColumn(0,"DS_BANK",this.dsLoanSeq.getColumn(0,"DS_BANK"));
        				this.dsList.setColumn(0,"DS_ACCOUNT",this.dsLoanSeq.getColumn(0,"DS_ACCOUNT"));
        				this.dsList.setColumn(0,"QN_GROUPJOIN",this.dsLoanSeq.getColumn(0,"QN_GROUPJOIN"));
        				this.dsList.setColumn(0,"QN_POINT",this.dsLoanSeq.getColumn(0,"QN_POINT"));
        				this.dsList.set_enableevent(true);
        				trace(this.dsLoanSeq.getColumn(0,"ID_SABUN") + "||" +this.dsLoanSeq.getColumn(0,"NO_LOANREQUEST"));
        				this.btnAfterFile.set_enable(false);
        				this.btnAGTFILE.set_enable(false);
        				this.btnAGTPRINT.set_enable(false);
        			}
        			break;
        		case "saveOk":		// 신청완료

        				this.fnVaidateCallback = function() {
        				    trace(" saveOk=>");
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert("사내대출 신청이 완료되었습니다.", "fnVaidateCallback");
        			break;
        		case "saveAnd":		// 임시저장

        				this.gfnSetFormStatus(this, "U");
        				this.dsList.setColumn(0, this.ucFlag , "U");
        				this.fnSelect();
        			break;
        		case "selectSch":
        				if(this.getOwnerFrame().TY_WRK =="I" || this.getOwnerFrame().TY_WRK =="U"){
        					if (this.dsId_Loansch.rowcount == 0) {
        						this.gfnAlert("사내대출 신청기간이 아닙니다. 신청기간을 확인하세요!", "fnVaidateCallback");
        						trace(" selectSch=>"+ this.getOwnerFrame().TY_WRK);

        						break;
        					}
        					trace(" selectSch TY_WRK=>" + this.getOwnerFrame().TY_WRK);
        					if (this.getOwnerFrame().TY_WRK =="I") {
        						this.dsList.setColumn(0,"ID_LOANSCH", this.dsId_Loansch.getColumn(0,"ID_LOANSCH"));
        						this.fnSetNoRequest();  //대출신청번호 만들기
        					}
        				}else{
        				  // 임시저장 상태일때 기간이 아니면 빠져나가기
        				}
        			break;
        		case "delete" :
        			trace(" delete=>");
        			this.getParentContext().close(true);
        			break;
        		default:
        	}
        };

        this.fnVaidateCallback =  function (svcId, sRtn)
        {
        	this.getParentContext().close(false);
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "cfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");
        	}
        	if (id == "cfCD_LOAN") {
        		dsUserParam.setColumn(nrow, "DT_BASE", this.dsId_Loansch.getColumn(0, "DT_BASE"));
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_EMPTYPE", this.dsList.getColumn(0, "CD_EMPTYPE"));
        		dsUserParam.setColumn(nrow, "QN_BASEYEAR", this.dsList.getColumn(0, "QN_GROUPJOIN"));
        		dsUserParam.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(0, "CD_POSITION"));
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id,codeFindData) {
           	var arr = codeFindData;
        	if(id == "cfID_SABUN") {
        		if(arr.length > 0) {
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(0,"CD_CORP",arr[0]["CD_CORP"]);
        			this.dsList.setColumn(0,"DS_CORP",arr[0]["DS_CORP"]);
        			this.dsList.setColumn(0,"CD_DEPT",arr[0]["CD_DEPT"]);
        			this.dsList.setColumn(0,"DS_DEPT",arr[0]["DS_DEPT"]);
        			this.dsList.setColumn(0,"ID_PERSON",arr[0]["ID_PERSON"]);
        			this.dsList.setColumn(0,"ID_SABUN",arr[0]["ID_SABUN"]);
        			this.dsList.setColumn(0,"ID_DSHNAME",arr[0]["ID_DSHNAME"]);
        			trace(" fnAfterCDTextChanged cfID_SABUN =>" + arr[0]["ID_SABUN"] );
        			if (this.getOwnerFrame().TY_WRK =="I")
        			{
        				this.fnSetNoRequest();
        			}
        			this.dsList.set_enableevent(true);
        		}else{
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(0,"CD_CORP","");
        			this.dsList.setColumn(0,"DS_CORP","");
        			this.dsList.setColumn(0,"CD_DEPT","");
        			this.dsList.setColumn(0,"DS_DEPT","");
        			this.dsList.setColumn(0,"ID_PERSON","");
        			this.dsList.set_enableevent(true);
        		}
        	}

        	if(id=="cfCD_LOAN"){
        		if(arr.length > 0) {
        		    //trace(arr[0]["AM_MAXLOAN"]);
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(0,"CD_LOAN",	arr[0]["CD_LOAN"]);
        			this.dsList.setColumn(0,"DS_LOAN",	arr[0]["DS_LOAN"]);
        			this.dsList.setColumn(0,"AM_MAXLOAN",arr[0]["AM_MAXLOAN"]);
        			this.dsList.setColumn(0,"RT_RATE",	arr[0]["RT_RATE"]);
        			this.dsList.setColumn(0,"YM_MAX",	arr[0]["YM_MAX"]);
        			this.dsList.setColumn(0,"AM_MONTHRATE",	arr[0]["AM_MONTH"]);
        			this.dsList.setColumn(0,"YY_BASEYEAR",arr[0]["YY_BASEYEAR"]);
        			//this.dsList.setColumn(0,"DS_REM",	arr[0]["DS_REM"]);
        			this.dsList.setColumn(0,"DS_DOCUMENT",arr[0]["DS_DOCUMENT"]);
        			this.dsList.setColumn(0,"DS_REQUESTDOC",arr[0]["DS_REQUESTDOC"]);
        			if (arr[0]["YM_MAX"] == 0) // 현장전세는 신청개월없음.
        			{
        				this.dsList.setColumn(0,"AM_MONTH",	arr[0]["AM_MONTH"]);
        				this.dsList.setColumn(0,"YM_REPAYMENT",	0);
        				this.txtYM_REPAYMENT.set_enable(false);
        			}else{
        				this.txtYM_REPAYMENT.set_enable(true);
        			}
        			this.dsList.set_enableevent(true);
        		}
        	}


        };
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        this.btnSIMULATION_onclick = function(obj,e)
        {
        	var param = {};
        	param.CD_CORP   = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.ID_SABUN  = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.DS_HNAME  = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        	param.DT_LOAN   = this.dsId_Loansch.getColumn(0, "DT_LOAN");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LOANSIMULATION_DLG", "fnPopupCallback", param);
        };

          // 임시저장 버튼
         this.divBtns_btnSAVE_onclick = function(obj,e)
        {
        	this.dsList.setColumn(0, "ST_APRV" , "01");
        	this.fnSave("And");
        };
         // 신청완료 버튼
        this.btnOk_onclick = function(obj,e)
        {

        	this.dsList.setColumn(0, "ST_APRV" , "02");
        	this.fnSave("Ok");

        };

        // 취소버튼
        this.btnCancel_onclick = function(obj,e)
        {
        	//this.gfnSetFormStatus(this, "D");

        	//if(!this.fnDelValidate()) return;
        	var flag = this.gfnGetFormStatus(this);
        	var StAprv = this.dsList.getColumn(0, "ST_APRV");
        	trace("StAprv =>" + StAprv);
        	if (StAprv =="01" && (flag == "U" || flag == "Q" ))
        	{
        		this.gfnConfirm("대출 신청내역이 삭제 됩니다. 삭제하시겠습니까?", "fnDelCallback");
        	}else{
        		this.getParentContext().close(false);
        	}
        };

        this.fnDelCallback = function (svcId, sRtn)
        {
        	if (sRtn)
        	{
        		this.gfnSetFormStatus(this, "D");
        		this.dsList.setColumn(0, this.ucFlag , "D");
        		this.fnDelete();
        		//this.getParentContext().close(true);
        	}

        };

        this.dsList_onvaluechanged = function(obj,e)
        {

        	trace(" dsList_onvaluechanged=>" + this.gfnDsIsUpdated(obj));

        	if(this.gfnDsIsUpdated(obj)){
        		var rowType = obj.getRowType(e.row);
        		this.gfnSetFormStatus(this, (rowType == 2 ? "I" : "U"));
        	}
        	if (e.oldvalue != e.newvalue)
        	{
        		if( e.columnid == "CD_LOAN"){
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(0,"AM_LOAN", 0);
        			this.dsList.setColumn(0,"YM_REPAYMENT", 0);
        			this.dsList.set_enableevent(true);
        		}
        		if( e.columnid == "AM_LOAN" || e.columnid == "YM_REPAYMENT" ) {
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(0,"AM_MONTH", this.dsList.getColumn(0, "AM_MONTHRATE"));
        // 			trace(" AM_LOAN=>" +this.dsList.getColumn(0, "AM_LOAN") );
        // 			trace(" YM_REPAYMENT=>" +this.dsList.getColumn(0, "YM_REPAYMENT") );
        			if (!this.gfnIsNull(this.dsList.getColumn(0, "AM_LOAN"))  && this.dsList.getColumn(0,"YM_REPAYMENT") !=0
        			 && !this.gfnIsNull(this.dsList.getColumn(0,"YM_REPAYMENT")) && this.dsList.getColumn(0, "YM_MAX") !=0 )
        			{
        				var am_month = this.fnGetTrunc(this.dsList.getColumn(0, "AM_LOAN") / this.dsList.getColumn(0,"YM_REPAYMENT"),10);
        				trace(" am_month=>" +am_month );
        				this.dsList.setColumn(0,"AM_MONTH", am_month);
        			}
        			this.dsList.set_enableevent(true);
        		}
        	}

        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 첨부파일
        this.fnFileUpload = function(obj,e) {
        	//trace("this.btnFileUpload.text :: " + this.btnFileUpload.text);
        	if (this.dsList.rowcount <= 0) {
        		return false;
        	}

        		var cdGubun = "";
        		var cdDir = "";

        		cdGubun = "DAB1";
        		var fileManager = {};
        		fileManager.CD_GUBUN = cdGubun;
        		fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, "NO_LOANREQUEST")];
        		if(this.dsList.getColumn(0, "ST_APRV")=="01" || this.gfnIsNull(this.dsList.getColumn(0, "ST_APRV"))) {
        			fileManager.IS_READONLY = false;
        		} else {
        			fileManager.IS_READONLY = true;
        		}


        		trace("fileManager.CD_GUBUN :: " + fileManager.CD_GUBUN);
        		trace("fileManager.CD_DIR :: " + fileManager.CD_DIR);
        		trace("fileManager.IS_READONLY :: " + fileManager.IS_READONLY);

        		this.gfnFileManager(fileManager, "fnFileCallback");

        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		this.staFileUpload.set_text("파일수 : 0 개");
        	} else {
        		this.staFileUpload.set_text("파일수 : " + val.Cnt + " 개");
        	}

        	//this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF", val.Cnt);
        	this.dsList.set_enableevent(true);
        };

        this.fnGetTrunc = function(amVal, vCnt){
        	var returnVal = this.gfnNvl(amVal, 0);
        	if(returnVal > 0){
        		returnVal = Math.floor(amVal/vCnt) * vCnt;
        	}
        	return returnVal;
        }

        //대출약정서/보증서 첨부
        this.btnAGTFILE_onclick = function(obj,e)
        {
        	if (this.dsList.rowcount <= 0) {
        		return false;
        	}
        	if (this.dsList.getColumn(0, "ST_APRV")=="04"){
        		return false;
        	}
        	var cdGubun = "";
        	var cdDir = "";

        	cdGubun = "DAB2";
        	var fileManager = {};
        	fileManager.CD_GUBUN = cdGubun;
        	fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, "NO_LOANREQUEST")];
        	trace(" btnAGTFILE_onclick=>" + this.dsList.getColumn(0, "ST_APRV"));
        	if(this.dsList.getColumn(0, "ST_APRV") >= "03" ) {
        		fileManager.IS_READONLY = false;
        	} else {
        		fileManager.IS_READONLY = true;
        	}
        	fileManager.TXT_MESSAGE = "※대출약정서 자필서명후 첨부 , 보증증권 첨부"
        	trace("fileManager.CD_GUBUN :: " + fileManager.CD_GUBUN);
        	trace("fileManager.CD_DIR :: " + fileManager.CD_DIR);
        	trace("fileManager.IS_READONLY :: " + fileManager.IS_READONLY);

        	this.gfnFileManager(fileManager, "fnFileCallback2");
        };

        //사후제출서류 첨부
        this.btnAfterFile_onclick = function(obj,e)
        {
        	if (this.dsList.rowcount <= 0) {
        		return false;
        	}
        	if (this.dsList.getColumn(0, "ST_APRV")=="04"){
        		return false;
        	}

        	var cdGubun = "";
        	var cdDir = "";

        	cdGubun = "DAB3";
        	var fileManager = {};
        	fileManager.CD_GUBUN = cdGubun;
        	fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, "NO_LOANREQUEST")];
        	trace(" btnAfterFile_onclick=>" + this.dsList.getColumn(0, "ST_APRV"));
        	if(this.dsList.getColumn(0, "ST_APRV") == "06" ) {
        		fileManager.IS_READONLY = false;
        	} else {
        		fileManager.IS_READONLY = true;
        	}

        	trace("fileManager.CD_GUBUN :: " + fileManager.CD_GUBUN);
        	trace("fileManager.CD_DIR :: " + fileManager.CD_DIR);
        	trace("fileManager.IS_READONLY :: " + fileManager.IS_READONLY);

        	this.gfnFileManager(fileManager, "fnFileCallback2");
        };

        this.fnFileCallback2 = function(strID, val) {
        };

        //대출약정서 출력
        this.btnAGTPRINT_onclick = function(obj,e)
        {
        	if (this.dsList.rowcount <= 0) {
        		return false;
        	}
        	if (this.dsList.getColumn(0, "ST_APRV")=="04"){
        		return false;
        	}

        	this.dsPrint = new Dataset();
        	this.dsPrint.addColumn("NO_LOANREQUEST" , "STRING");

        	this.dsPrint.clearData();
        	this.dsPrint.addRow();
        	this.dsPrint.setColumn(0, "NO_LOANREQUEST", this.dsList.getColumn(0, "NO_LOANREQUEST"));

        	trace(" btnAGTPRINT_onclick=>" + "dsPrint");

        	var inProc		= "_dsProc";
         	//var inParam 	= "params=dsList";						// 조회SP이외 사용할 정보
        	var inParam 	= "params=dsPrint";						// 조회SP이외 사용할 정보
        	var inData      = "print=dsPrint";
         	//var inData      = "line1=dsLine1 line2=dsLine2 selectmaster=dsMaster";	//   select=dsSelect
         	var reportpath  = "/da/dab/DAB_AGREEMENT.ozr";

         	gfnOpenReport(this, reportpath, inProc, inParam, inData);

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.divDataDetail.form.btnATTACH.addEventHandler("onclick",this.fnFileUpload,this);
            this.divDataDetail.form.staDS_REM.addEventHandler("onclick",this.divDataDetail_staDS_REM_onclick,this);
            this.divDataDetail.form.staDS_REM00.addEventHandler("onclick",this.divDataDetail_staDS_REM_onclick,this);
            this.divBtns.form.btnCANCEL.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.divBtns.form.btnSAVE.addEventHandler("onclick",this.divBtns_btnSAVE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnAGTFILE.addEventHandler("onclick",this.btnAGTFILE_onclick,this);
            this.btnAGTPRINT.addEventHandler("onclick",this.btnAGTPRINT_onclick,this);
            this.btnSIMULATION.addEventHandler("onclick",this.btnSIMULATION_onclick,this);
            this.btnAfterFile.addEventHandler("onclick",this.btnAfterFile_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_LOANREQUEST_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
