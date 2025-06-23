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
            this.set_titletext("중도상환 신청");
            this.set_visible("true");
            this.getSetter("maxwidth").set("1120");
            this.getSetter("maxheight").set("550");
            if (Form == this.constructor)
            {
                this._setFormPosition(1090,460);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLoanNow", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GROUPJOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GROUPJOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_LOAN\" type=\"INT\" size=\"256\"/><Column id=\"YM_REPAYMENT\" type=\"INT\" size=\"256\"/><Column id=\"RT_RATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_LOAN\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_SUMREPAYMENT\" type=\"FLOAT\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"AM_JAN\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_MONTH\" type=\"FLOAT\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_JAN\" type=\"INT\" size=\"256\"/><Column id=\"YM_MAX\" type=\"INT\" size=\"256\"/><Column id=\"YM_ALLOW\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_LOANREQUEST\" type=\"INT\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GROUPJOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GROUPJOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_LOAN\" type=\"INT\" size=\"256\"/><Column id=\"YM_REPAYMENT\" type=\"INT\" size=\"256\"/><Column id=\"RT_RATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_LOAN\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_SUMREPAYMENT\" type=\"FLOAT\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"AM_JAN\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_MONTH\" type=\"FLOAT\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_JAN\" type=\"INT\" size=\"256\"/><Column id=\"YM_MAX\" type=\"INT\" size=\"256\"/><Column id=\"YM_ALLOW\" type=\"FLOAT\" size=\"256\"/><Column id=\"ST_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_REPAYMENT\" type=\"FLOAT\" size=\"256\"/><Column id=\"DT_REPAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"QN_ILSU\" type=\"INT\" size=\"256\"/><Column id=\"AM_SUM\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_SUMJAN\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_INTEREST\" type=\"FLOAT\" size=\"256\"/><Column id=\"YM_REMAIN\" type=\"FLOAT\" size=\"256\"/><Column id=\"YM_CHANGE\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_CHANGEMONTH\" type=\"FLOAT\" size=\"256\"/><Column id=\"DT_LOST\" type=\"STRING\" size=\"256\"/><Column id=\"RT_LOSTRATE\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_LOANREPAYMENT_SAVE</Col></Row><Row><Col id=\"TARGET\">request</Col><Col id=\"SP\">DABPR_LOANREPAYMENT_REQUEST</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DABPR_LOANREQUEST_DELETE</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_LOANREPAYMENT_REQUESTSELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인</Col></Row><Row><Col id=\"CD_FIELD\">CD_DEPT</Col><Col id=\"DS_FIELD\">부서</Col></Row><Row><Col id=\"CD_FIELD\">ID_SABUN</Col><Col id=\"DS_FIELD\">사번</Col></Row><Row><Col id=\"CD_FIELD\">CD_LOAN</Col><Col id=\"DS_FIELD\">대출유형</Col></Row><Row><Col id=\"CD_FIELD\">AM_REQUEST</Col><Col id=\"DS_FIELD\">대출금액</Col></Row><Row><Col id=\"CD_FIELD\">NO_LOANREQUEST</Col><Col id=\"DS_FIELD\">상환기간</Col></Row><Row><Col id=\"CD_FIELD\">DS_REMARK</Col><Col id=\"DS_FIELD\">대출사유</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_LOANREQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_LOAN\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNoRequest", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle1","0","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("대출정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","staTitle1:-2",null,"153","-10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","79","0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","79","58",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","79","29",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIdSabun","0","0","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("성명");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdLoan","0","staIdSabun:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("대출종류");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN","staIdSabun:4","5","200","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("AutoSet").set("false");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdPosition","staIdSabun:210","0","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_tablelabelT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDtIpsa","staCdPosition:115","0","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_tablelabelT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDtLoan","staCdLoan:210","staCdPosition:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("대출일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYmRepayment","staDtLoan:115","staDtIpsa:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("상환개월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDtGipsa","staDtIpsa:182","0","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("그룹입사일자");
            obj.set_cssclass("sta_WF_tablelabelT");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_POSITION","staCdPosition:4","5","46","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staQnRepayment","310","58","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("상환횟수");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskQN_REPAYMENT","staQnRepayment:4","63","56","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAmRepayment","525","58","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("상환금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CURREPAYMENT","staAmRepayment:5","63","125","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc12","mskAM_CURREPAYMENT:5","62","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LOAN","104","63","126","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc13","mskAM_LOAN:5","62","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAmLoan","0","staCdLoan:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("대출금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_JOIN","staDtIpsa:4","6","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_JOIN","tclDT_JOIN:4","5","84","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_GROUPJOIN","staDtGipsa:4","5","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_GROUPJOIN","tclDT_GROUPJOIN:4","5","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_PAYSTEP","465","5","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_APRV",null,"98","74","20","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc3",null,"98","65","20","txtDS_APRV:0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("승인상태 :");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_LOAN","staCdLoan:4","34","199","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_LOANRATE");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("25");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_LOAN","staDtLoan:4","34","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtYM_REPAYMENT","staYmRepayment:5","34","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_limitbymask("integer");
            obj.set_format("#,###");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc2","txtYM_REPAYMENT:3","34","30","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("개월");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRtRate","staYmRepayment:182","staDtGipsa:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("이자율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskRT_RATE","staRtRate:4","34","47","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_format("#,##0.##%");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc6","mskRT_RATE:4","33","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("% ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAmJan","staAmRepayment:182","58","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("대출잔액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_JAN","staAmJan:4","63","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc123","mskAM_JAN:5","62","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskRT_LOSTRATE","1015","33","17","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_format("#,###.##%");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRtLostRate","960","33","56","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_text("(연체이율:");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRtLostRate2","1039","33","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("% )");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataDetail","0","divData:-30",null,"200","-10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg10_00","79","122",null,"30","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staTitle2","0","59",null,"35","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("12");
            obj.set_text("상환기간변경신청");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staBg1","79","staTitle2:-1",null,"30","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staBg6","90","29",null,"30","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_enable("false");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staBg3","79","0",null,"30","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staAmCurPayment","0","0","120","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("중도상환금액");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staAmSum","0","staAmCurPayment:-1","120","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("5");
            obj.set_text("총상환금액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staAmSumjan","staAmSum:190","29","120","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("11");
            obj.set_text("상환후대출잔액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_REPAYMENT","staAmCurPayment:4","5","116","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("2");
            obj.set_format("###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDesc1","txtAM_REPAYMENT:6","6","20","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("7");
            obj.set_text("원");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDtPayment","staAmCurPayment:190","0","120","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_text("중도상환일자");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staQnIlsu","staDtPayment:110","0","90","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_text("이자일수");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staAmInterest","staQnIlsu:182","0","90","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_text("이자금액");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskQN_ILSU","staQnIlsu:4","5","49","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("14");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Edit("txtCD_BANK","238","69",null,"24","870",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("15");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Calendar("tclDT_REPAYMENT","staDtPayment:4","5","100","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("false");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INTEREST","staAmInterest:4","5","105","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("16");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDesc5","mskAM_INTEREST:5","4","20","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("17");
            obj.set_text("원");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SUM","staAmSum:4","34","116","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("18");
            obj.set_format("###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_textAlign("right");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDesc13","mskAM_SUM:6","34","20","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("19");
            obj.set_text("원");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SUMJAN","staAmSumjan:4","34","116","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("20");
            obj.set_format("###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_textAlign("right");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDesc10","mskAM_SUMJAN:5","34","20","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("21");
            obj.set_text("원");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staYmMax","0","staTitle2:-1","120","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_text("최장상환개월");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staYmJan","staYmMax:190","93","120","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_text("잔여상환개월");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staAmMonth","staYmJan:200","93","120","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_text("기존월상환액");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staYmPoss","0","staYmMax:-1","120","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("변경가능상환개월");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staYmChange","staYmPoss:190","staYmJan:-1","120","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("변경상환개월");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staAmMonthChange","staYmChange:200","staAmMonth:-1","120","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("변경월상환액");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskYM_MAX","staYmMax:4","97","116","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("29");
            obj.set_format("###,###,###");
            obj.set_limitbymask("integer");
            obj.set_textAlign("right");
            obj.set_enable("false");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("makYM_ALLOW","staYmPoss:4","127","116","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("30");
            obj.set_format("###,###,###");
            obj.set_limitbymask("integer");
            obj.set_textAlign("right");
            obj.set_enable("false");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskYM_CHANGE","staYmChange:4","127","116","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("4");
            obj.set_format("###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_textAlign("right");
            obj.set_enable("true");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtYM_JAN","staYmJan:4","98","116","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("31");
            obj.set_format("###,###,###");
            obj.set_limitbymask("integer");
            obj.set_textAlign("right");
            obj.set_enable("false");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_MONTH","staAmMonth:4","98","116","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("32");
            obj.set_format("###,###,###");
            obj.set_limitbymask("integer");
            obj.set_textAlign("right");
            obj.set_enable("false");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CHANGEMONTH","staAmMonthChange:4","128","116","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("33");
            obj.set_format("###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_textAlign("right");
            obj.set_enable("false");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDesc6","876","96","20","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("34");
            obj.set_text("원");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDesc7","875","127","20","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("35");
            obj.set_text("원");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDesc12","689","5","20","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("36");
            obj.set_text("일");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Div("divDatafooter","0","divDataDetail:-30",null,"100","-10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","2",null,"79","0",null,null,null,null,null,this.divDatafooter.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divDatafooter.addChild(obj.name, obj);

            obj = new Static("sta10","9","8",null,null,"300","22",null,null,null,null,this.divDatafooter.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_notice");
            obj.set_text("입금계좌안내 :  \r\n(원금) 우리은행 1005104409567  카본코사내복지기금(원금) \r\n(이자) 우리은행 1005204398511 카본코사내복지기금(이자)");
            this.divDatafooter.addChild(obj.name, obj);

            obj = new Static("sta11","400","49","181","24",null,null,null,null,null,null,this.divDatafooter.form);
            obj.set_taborder("1");
            obj.set_text("※ 중도상환수수료없음");
            this.divDatafooter.addChild(obj.name, obj);

            obj = new Div("divBtns","394",null,"310","35",null,"-10",null,null,null,null,this);
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

            obj = new Edit("txtNO_LOANREQUEST","920","8","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maxlength("25");
            obj.set_readonly("false");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle2","0","122",null,"35","250",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("중도상환신청");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_enable("true");
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

            obj = new BindItem("item9","divDataDetail.form.txtAM_REPAYMENT","value","dsList","AM_REPAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.txtDS_POSITION","value","dsList","DS_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.txtDS_JOIN","value","dsList","DS_JOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.txtDS_GROUPJOIN","value","dsList","DS_GROUPJOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.txtDS_PAYSTEP","value","dsList","DS_PAYSTEP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.mskAM_CURREPAYMENT","value","dsList","AM_SUMREPAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.mskQN_REPAYMENT","value","dsList","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.mskAM_LOAN","value","dsList","AM_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tclDT_JOIN","value","dsList","DT_JOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tclDT_GROUPJOIN","value","dsList","DT_GROUPJOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divDataDetail.form.mskQN_ILSU","value","dsList","QN_ILSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","txtNO_LOANREQUEST","value","dsSearch","NO_LOANREQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtDS_APRV","value","dsList","DS_APRV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cfCD_LOAN.form.CDTextBox","value","dsList","CD_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.cfCD_LOAN.form.DSTextBox","value","dsList","DS_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tclDT_LOAN","value","dsList","DT_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.txtYM_REPAYMENT","value","dsList","YM_REPAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.mskRT_RATE","value","dsList","RT_RATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.mskAM_JAN","value","dsList","AM_JAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divDataDetail.form.tclDT_REPAYMENT","value","dsList","DT_REPAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divDataDetail.form.mskAM_SUM","value","dsList","AM_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divDataDetail.form.mskAM_SUMJAN","value","dsList","AM_SUMJAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDataDetail.form.mskYM_MAX","value","dsList","YM_MAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDataDetail.form.makYM_ALLOW","value","dsList","YM_ALLOW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDataDetail.form.mskYM_CHANGE","value","dsList","YM_CHANGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divDataDetail.form.txtYM_JAN","value","dsList","YM_JAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divDataDetail.form.mskAM_MONTH","value","dsList","AM_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divDataDetail.form.mskAM_CHANGEMONTH","value","dsList","AM_CHANGEMONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDataDetail.form.mskAM_INTEREST","value","dsList","AM_INTEREST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.mskRT_LOSTRATE","value","dsList","RT_LOSTRATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_LOANREPAYMENT_DLG.xfdl", function() {
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

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.cfID_SABUN    = this.divData.form.cfID_SABUN;
        	this.cfCD_LOAN     = this.divData.form.cfCD_LOAN;
        	this.txtAM_REPAYMENT		= this.divDataDetail.form.txtAM_REPAYMENT;
        	this.tclDT_REPAYMENT = this.divDataDetail.form.tclDT_REPAYMENT;
        	this.mskYM_CHANGE = this.divDataDetail.form.mskYM_CHANGE;

        	this.staRtLostRate = this.divData.form.staRtLostRate;
        	this.mskRT_LOSTRATE = this.divData.form.mskRT_LOSTRATE;
        	this.staRtLostRate2 = this.divData.form.staRtLostRate2;

        	this.btnSAVE     = this.divBtns.form.btnSAVE;
        	this.btnOK     = this.divBtns.form.btnOK;
        	this.btnCANCEL     = this.divBtns.form.btnCANCEL;

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

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        };

        // 부모창에서 받아온것 셋팅
        this.fnSetInit = function() {

        	var frame = this.getOwnerFrame();

        	this.cfID_SABUN.form.set_readonly(true);
        	this.cfCD_LOAN.form.set_readonly(true);

        	if (frame.TY_WRK == "I")
        	{
        		this.dsSearch.clearData();
        		var nRow = this.dsSearch.addRow();
        		this.dsSearch.setColumn(0, "CD_CORP", frame.CD_CORP);
        		this.dsSearch.setColumn(0, "ID_SABUN", frame.ID_SABUN);
        		this.dsSearch.setColumn(0, "NO_LOAN", frame.NO_LOAN);
        		this.dsSearch.setColumn(0, "CD_LOAN", frame.CD_LOAN);

        // 		if( this.FormInfo.GR_SEARCH == "9" ) {
        //
        // 			this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        // 			this.dsSearch.setColumn(0, "DS_HNAME", this.AuthClient.DS_HNAME);
        // 			this.dsSearch.setColumn(0, "ID_SABUN", this.AuthClient.ID_SABUN);
        // 		}
        		this.fnSelect();
        	} else {

        		this.dsSearch.clearData();
        		var nRow = this.dsSearch.addRow();
        		this.dsSearch.setColumn(0, "CD_CORP", frame.CD_CORP);
        		this.dsSearch.setColumn(0, "ID_SABUN", frame.ID_SABUN);
        		this.dsSearch.setColumn(0, "NO_LOAN", frame.NO_LOAN);
        		this.dsSearch.setColumn(0, "CD_LOAN", frame.CD_LOAN);
        		this.dsSearch.setColumn(0, "NO_LOANREQUEST", frame.NO_LOANREQUEST);
        		//this.gfnSetFormStatus(this, "U");
        		this.fnSelectList();
        	}

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "STRING");
        	this.dsSelect.addColumn("ID_SABUN", "STRING");
        	this.dsSelect.addColumn("CD_LOAN", "STRING");
        	this.dsSelect.addColumn("NO_LOAN", "STRING");
        	this.dsSelect.addColumn("NO_LOANREQUEST", "INT");

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
        	//this.dsSave.addColumn("QN_POINT", "int");
        	this.dsSave.addColumn("AM_LOANLIMIT", "bigdecimal");
        	this.dsSave.addColumn("AM_JAN", "bigdecimal");
        //	this.dsSave.addColumn("ID_LOANSCH", "string");
         	this.dsSave.addColumn("NO_LOAN", "int");
        // 	this.dsSave.addColumn("DT_REQUEST", "string");
        	this.dsSave.addColumn("ST_APRV", "string");
        //  this.dsSave.addColumn("DT_APRV", "string");
        	this.dsSave.addColumn("DT_LOAN", "string");
        	this.dsSave.addColumn("AM_LOAN", "bigdecimal");
        	this.dsSave.addColumn("YM_REPAYMENT", "int");
        	this.dsSave.addColumn("AM_MONTH", "bigdecimal");
        	this.dsSave.addColumn("RT_RATE", "bigdecimal");
        //	this.dsSave.addColumn("CD_REPAYMENT", "string");
        // 	this.dsSave.addColumn("CD_BANK", "string");
        // 	this.dsSave.addColumn("NO_ACCOUNT", "string");
        // 	this.dsSave.addColumn("DS_ACCOUNT", "string");
        // 	this.dsSave.addColumn("DS_REASON", "string");
        	this.dsSave.addColumn("AM_REPAYMENT", "bigdecimal");
        	this.dsSave.addColumn("DT_REPAYMENT", "string");
        	this.dsSave.addColumn("AM_BEFJAN", "bigdecimal");
        	this.dsSave.addColumn("DT_FROM", "string");
        	this.dsSave.addColumn("DT_TO", "string");
        	this.dsSave.addColumn("AM_INTEREST", "bigdecimal");
        	this.dsSave.addColumn("YM_REMAIN", "int");
        	this.dsSave.addColumn("YM_ALLOW", "int");
        	this.dsSave.addColumn("YM_CHANGE", "int");
        	this.dsSave.addColumn("AM_CHANGEMONTH", "bigdecimal");
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

        this.fnSelect = function()
        {
        	//if(!this.fnSelectValidate()) return;
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "CD_LOAN", this.dsSearch.getColumn(0, "CD_LOAN"));
        	this.dsSelect.setColumn(0, "NO_LOAN", this.dsSearch.getColumn(0, "NO_LOAN"));

        	//trace(" dsSelect=>" + this.dsSelect.saveXML());
        	var strSvcId    = "request";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "request=dsSelect";
        	var outData     = "dsLoanNow=request0";
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


        this.fnSelectList = function()
        {
        	//if(!this.fnSelectValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "CD_LOAN", this.dsSearch.getColumn(0, "CD_LOAN"));
        	this.dsSelect.setColumn(0, "NO_LOAN", this.dsSearch.getColumn(0, "NO_LOAN"));
        	this.dsSelect.setColumn(0, "NO_LOANREQUEST", this.dsSearch.getColumn(0, "NO_LOANREQUEST"));

        	//trace(" selectList=>" + this.dsSelect.saveXML());
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

        	this.dsSave.clearData();
        	if (flag=="I" || flag=="U")
        	{
        		var nrow = this.dsSave.addRow();
        		this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        		this.dsSave.setColumn(nrow, "NO_LOANREQUEST", this.dsList.getColumn(0, "NO_LOANREQUEST"));
        		this.dsSave.setColumn(nrow, "TY_GUBUN", "2");
        		this.dsSave.setColumn(nrow, "CD_LOAN", this.dsList.getColumn(0, "CD_LOAN"));
        		this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(0, "CD_DEPT"));
        		this.dsSave.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(0, "CD_POSITION"));
        		this.dsSave.setColumn(nrow, "CD_PAYSTEP", this.dsList.getColumn(0, "CD_PAYSTEP"));
        		this.dsSave.setColumn(nrow, "DS_JOIN", this.dsList.getColumn(0, "DS_JOIN"));
        		this.dsSave.setColumn(nrow, "DS_GROUPJOIN", this.dsList.getColumn(0, "DS_GROUPJOIN"));
        		this.dsSave.setColumn(nrow, "QN_GROUPJOIN", this.dsList.getColumn(0, "QN_GROUPJOIN"));
        		//this.dsSave.setColumn(nrow, "QN_POINT", this.dsList.getColumn(0, "QN_POINT"));
        		this.dsSave.setColumn(nrow, "AM_LOANLIMIT", this.dsList.getColumn(0, "AM_LOANLIMIT"));
        		this.dsSave.setColumn(nrow, "AM_JAN", this.dsList.getColumn(0, "AM_JAN"));
        		//this.dsSave.setColumn(nrow, "ID_LOANSCH", this.dsList.getColumn(0, "ID_LOANSCH"));
        		this.dsSave.setColumn(nrow, "NO_LOAN", this.dsList.getColumn(0, "NO_LOAN"));
        		//this.dsSave.setColumn(nrow, "DT_REQUEST", this.dsList.getColumn(0, "DT_REQUEST"));
        		this.dsSave.setColumn(nrow, "ST_APRV", vType == "Ok" ? "02" : "01" );
        		//this.dsSave.setColumn(nrow, "DT_APRV", this.dsList.getColumn(0, "DT_APRV"));
        		this.dsSave.setColumn(nrow, "DT_LOAN", this.dsList.getColumn(0, "DT_LOAN"));
        		this.dsSave.setColumn(nrow, "AM_LOAN", this.dsList.getColumn(0, "AM_LOAN"));
        		this.dsSave.setColumn(nrow, "YM_REPAYMENT", this.dsList.getColumn(0, "YM_REPAYMENT"));
        		this.dsSave.setColumn(nrow, "AM_MONTH", this.dsList.getColumn(0, "AM_MONTH"));
        		this.dsSave.setColumn(nrow, "RT_RATE", (this.gfnNvl(this.dsList.getColumn(0, "DT_LOST"), "") =="") ? this.dsList.getColumn(0, "RT_RATE") : this.dsList.getColumn(0, "RT_LOSTRATE"));
        // 		this.dsSave.setColumn(nrow, "CD_REPAYMENT", this.dsList.getColumn(0, "CD_REPAYMENT"));
        // 		this.dsSave.setColumn(nrow, "CD_BANK", this.dsList.getColumn(0, "CD_BANK"));
        // 		this.dsSave.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(0, "NO_ACCOUNT"));
        // 		this.dsSave.setColumn(nrow, "DS_ACCOUNT", this.dsList.getColumn(0, "DS_ACCOUNT"));
        // 		this.dsSave.setColumn(nrow, "DS_REASON", this.dsList.getColumn(0, "DS_REASON"));
        		this.dsSave.setColumn(nrow, "AM_REPAYMENT", this.dsList.getColumn(0, "AM_REPAYMENT"));
        		this.dsSave.setColumn(nrow, "DT_REPAYMENT", this.dsList.getColumn(0, "DT_REPAYMENT"));
        		this.dsSave.setColumn(nrow, "AM_BEFJAN", this.dsList.getColumn(0, "AM_JAN"));
        		this.dsSave.setColumn(nrow, "DT_FROM", this.dsList.getColumn(0, "DT_FROM"));
        		this.dsSave.setColumn(nrow, "DT_TO", this.dsList.getColumn(0, "DT_TO"));
        		this.dsSave.setColumn(nrow, "AM_INTEREST", this.dsList.getColumn(0, "AM_INTEREST"));
        		this.dsSave.setColumn(nrow, "YM_REMAIN", this.dsList.getColumn(0, "YM_JAN"));
        		this.dsSave.setColumn(nrow, "YM_ALLOW", this.dsList.getColumn(0, "YM_ALLOW"));
        		this.dsSave.setColumn(nrow, "YM_CHANGE", this.dsList.getColumn(0, "YM_CHANGE"));
        		this.dsSave.setColumn(nrow, "AM_CHANGEMONTH", this.dsList.getColumn(0, "AM_CHANGEMONTH"));
        		//this.dsSave.setColumn(nrow, "YN_EXCUTE", this.dsList.getColumn(0, "YN_EXCUTE"));
        		//this.dsSave.setColumn(nrow, "DS_RETURN", this.dsList.getColumn(0, "DS_RETURN"));
        		this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save"+vType ;
        	var strSvcType  = "savesel";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsNoRequest=save0";
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

        	if(this.gfnIsNull(this.dsList.getColumn(0, "AM_REPAYMENT"))) {
        		strMsg += "※대출금액이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DT_REPAYMENT")) ) {
        		strMsg += "※상환일자가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "AM_MONTH"))) {
        		strMsg += "※월상환액이 입력되지 않았습니다.\n";
        	}

        	if(this.dsList.getColumn(0, "AM_REPAYMENT") > this.dsList.getColumn(0, "AM_JAN")) {
        		strMsg += "※대출상환액은 대출잔액보다 작아야 합니다. 대출상환금액을 확인하세요.\n";
        	}

        	if(this.dsList.getColumn(0, "AM_SUMJAN") > 0 && this.gfnNvl(this.dsList.getColumn(0, "YM_CHANGE"),0)==0) {
        		strMsg += "※변경 상환개월이 입력되지 않았습니다.\n";
        	}

        	if(this.dsList.getColumn(0, "YM_CHANGE") > this.dsList.getColumn(0, "YM_ALLOW") ) {
        		strMsg += "※변경상환개월은 변경가능상환개월보다 작아야 합니다. 변경상환개월을 확인하세요.\n";
        	}
        	if (this.gfnNvl(this.dsList.getColumn(0, "DT_REPAYMENT"),"") !="" && this.gfnGetDiffDate(this.dsList.getColumn(0, "DT_FROM") ,  this.dsList.getColumn(0, "DT_REPAYMENT"))+1 <0  )
        	{
        		strMsg += "※상환일자가 최종이자상환일 보다 작습니다. 최종이자상환일("+ this.dsList.getColumn(0, "DT_FROM")+")  이후 일자를 지정하세요.\n";
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

        	if(!this.gfnIsNull(this.dsList.getColumn(0, "ST_APRV")) && this.dsList.getColumn(0, "ST_APRV") != "01") {
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

        	//trace(" svcID=>" + svcID);
        	switch(svcID) {
        		case "request" :
        			if (this.dsLoanNow.rowcount != 0) {
        		        trace(this.dsLoanNow.saveXML());
        				this.dsList.set_enableevent(false);
        				this.dsList.clearData();
        				this.dsList.addRow();
        				this.dsList.setColumn(0,"CD_CORP",this.dsLoanNow.getColumn(0,"CD_CORP"));
        				this.dsList.setColumn(0,"ID_SABUN",this.dsLoanNow.getColumn(0,"ID_SABUN"));
        				this.dsList.setColumn(0,"DS_HNAME",this.dsLoanNow.getColumn(0,"DS_HNAME"));
        				this.dsList.setColumn(0,"CD_DEPT",this.dsLoanNow.getColumn(0,"CD_DEPT"));
        				this.dsList.setColumn(0,"DS_DEPT",this.dsLoanNow.getColumn(0,"DS_DEPT"));
        				this.dsList.setColumn(0,"CD_EMPTYPE",this.dsLoanNow.getColumn(0,"CD_EMPTYPE"));
        				this.dsList.setColumn(0,"CD_POSITION",this.dsLoanNow.getColumn(0,"CD_POSITION"));
        				this.dsList.setColumn(0,"DS_POSITION",this.dsLoanNow.getColumn(0,"DS_POSITION"));
        				this.dsList.setColumn(0,"CD_PAYSTEP",this.dsLoanNow.getColumn(0,"CD_PAYSTEP"));
        				this.dsList.setColumn(0,"DS_PAYSTEP",this.dsLoanNow.getColumn(0,"DS_PAYSTEP"));
        				this.dsList.setColumn(0,"DT_JOIN",this.dsLoanNow.getColumn(0,"DT_JOIN"));
        				this.dsList.setColumn(0,"DT_GROUPJOIN",this.dsLoanNow.getColumn(0,"DT_GROUPJOIN"));
        				this.dsList.setColumn(0,"DS_GROUPJOIN",this.dsLoanNow.getColumn(0,"DS_GROUPJOIN"));
        				this.dsList.setColumn(0,"DS_JOIN",this.dsLoanNow.getColumn(0,"DS_JOIN"));
        				this.dsList.setColumn(0,"CD_LOAN",this.dsLoanNow.getColumn(0,"CD_LOAN"));
        				this.dsList.setColumn(0,"DS_LOAN",this.dsLoanNow.getColumn(0,"DS_LOAN"));
        				this.dsList.setColumn(0,"DT_LOAN",this.dsLoanNow.getColumn(0,"DT_LOAN"));
        				this.dsList.setColumn(0,"NO_LOAN",this.dsLoanNow.getColumn(0,"NO_LOAN"));
        				this.dsList.setColumn(0,"YM_REPAYMENT",this.dsLoanNow.getColumn(0,"YM_REPAYMENT"));
        				this.dsList.setColumn(0,"RT_RATE",this.dsLoanNow.getColumn(0,"RT_RATE"));
        				this.dsList.setColumn(0,"AM_LOAN",this.dsLoanNow.getColumn(0,"AM_LOAN"));
        				this.dsList.setColumn(0,"AM_SUMREPAYMENT",this.dsLoanNow.getColumn(0,"AM_SUMREPAYMENT"));
        				this.dsList.setColumn(0,"NO_SEQ",this.dsLoanNow.getColumn(0,"NO_SEQ"));
        				this.dsList.setColumn(0,"AM_JAN",this.dsLoanNow.getColumn(0,"AM_JAN"));
        				this.dsList.setColumn(0,"AM_MONTH",this.dsLoanNow.getColumn(0,"AM_MONTH"));
        				this.dsList.setColumn(0,"DT_FROM",this.dsLoanNow.getColumn(0,"DT_FROM"));
        				this.dsList.setColumn(0,"YM_JAN",this.dsLoanNow.getColumn(0,"YM_JAN"));
        				this.dsList.setColumn(0,"YM_MAX",this.dsLoanNow.getColumn(0,"YM_MAX"));
        				this.dsList.setColumn(0,"YM_ALLOW",this.dsLoanNow.getColumn(0,"YM_ALLOW"));
        				this.dsList.setColumn(0,"DT_LOST",this.dsLoanNow.getColumn(0,"DT_LOST"));
        				this.dsList.setColumn(0,"RT_LOSTRATE",this.dsLoanNow.getColumn(0,"RT_LOSTRATE"));
        				this.dsList.setColumn(0, "ST_APRV" , "01");
        				this.dsList.set_enableevent(true);
        				trace(this.dsLoanNow.getColumn(0,"ID_SABUN") + "||" +this.dsLoanNow.getColumn(0,"NO_LOAN"));
        				//trace(this.dsList.saveXML());
        				if (this.gfnNvl(this.dsList.getColumn(0, "DT_LOST"), "") !="")
        				{
        					this.staRtLostRate.set_visible(true);
        					this.mskRT_LOSTRATE.set_visible(true);
        					this.staRtLostRate2.set_visible(true);
        				}
        				this.fnSetEnable();
        			}
        			break;
        		case "select" :
        			if (this.gfnNvl(this.dsList.getColumn(0, "DT_LOST"), "") !="")
        			{
        				this.staRtLostRate.set_visible(true);
        				this.mskRT_LOSTRATE.set_visible(true);
        				this.staRtLostRate2.set_visible(true);
        			}
        			this.fnSetEnable();
        			this.gfnSetFormStatus(this, "Q");
        			break;
        		case "saveOk":		// 신청완료
        				this.fnVaidateCallback = function() {
        				    trace(" saveOk=>");
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert("중도상환 신청이 완료되었습니다.", "fnVaidateCallback");
        			break;
        		case "saveAnd":		// 임시저장
        				if (this.dsNoRequest.rowcount != 0 )
        				{
        					trace("NO_LOANREQUEST =>" + this.dsNoRequest.getColumn(0,"NO_LOANREQUEST"));
        					this.dsSearch.set_enableevent(false);
        					this.dsList.set_enableevent(false);
        					this.dsSearch.setColumn(0, "NO_LOANREQUEST" , this.dsNoRequest.getColumn(0,"NO_LOANREQUEST"));

        					this.fnSelectList();
        					this.dsSearch.set_enableevent(true);
        					this.dsList.set_enableevent(true);
        				}

        			break;
        		case "delete" :
        			trace(" delete=>");
        			this.getParentContext().close(true);
        			break;
        		default:
        	}
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
        		dsUserParam.setColumn(nrow, "DT_BASE", this.dsLoanNow.getColumn(0, "DT_FROM"));
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_EMPTYPE", this.dsList.getColumn(0, "CD_EMPTYPE"));
        		dsUserParam.setColumn(nrow, "QN_BASEYEAR", this.dsList.getColumn(0, "QN_GROUPJOIN"));
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
        		}else if (id == "cfCD_LOAN") {
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(0,"CD_CORP","");
        			this.dsList.setColumn(0,"DS_CORP","");
        			this.dsList.setColumn(0,"CD_DEPT","");
        			this.dsList.setColumn(0,"DS_DEPT","");
        			this.dsList.setColumn(0,"ID_PERSON","");
        			this.dsList.set_enableevent(true);
        		}
        	}

        };
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

          // 임시저장 버튼
         this.divBtns_btnSAVE_onclick = function(obj,e)
        {
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
        	//trace("btnCancle_onclick =>" + flag);
        	if (StAprv =="01" && (flag == "U" || flag == "Q" ))
        	{
        		this.gfnConfirm("중도상환내역이 삭제 됩니다. 삭제하시겠습니까?", "fnDelCallback");
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

        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	trace(" dsSearch_onvaluechanged=>" + this.gfnDsIsUpdated(obj));

        	if (e.oldvalue != e.newvalue)
        	{
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.dsList.clearData();
        		this.dsLoanNow.clearData();
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
        		if(e.columnid == "AM_REPAYMENT"){
        			this.fnSetMonth();
        		}
        		if (e.columnid == "DT_REPAYMENT"){
        			if (!this.gfnIsNull(this.dsList.getColumn(0, "AM_REPAYMENT")) && this.dsList.getColumn(0, "AM_REPAYMENT")!=0
        				&& this.gfnNvl(this.dsList.getColumn(0, "DT_REPAYMENT"), "") !="")
        			{
        				if (this.gfnGetDiffDate(this.dsList.getColumn(0, "DT_FROM") ,  this.dsList.getColumn(0, "DT_REPAYMENT"))+1 <0  )
        				 {
        					this.gfnAlert('최종이자상환일 보다 작습니다. 최종이자상환일('+this.dsList.getColumn(0, "DT_FROM")+')  이후 일자를 지정하세요');
        					return;
        				 }
        				 this.fnInterest();   // 이자계산
        			} else {
        				 this.dsList.setColumn(0, "QN_ILSU", 0);
        				 this.dsList.setColumn(0, "AM_INTEREST", 0);
        			}
        		}
        		if( e.columnid == "YM_CHANGE" ) {
        			this.fnSetMonth();
        		}
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         // 월상환금 재계산 처리
        this.fnSetMonth = function ()
        {
        	if (this.gfnNvl(this.dsList.getColumn(0, "AM_REPAYMENT"),0)==0) return;
        	if (this.gfnNvl(this.dsList.getColumn(0, "AM_JAN"),0)==0) return;

        	var AmRepayment = this.dsList.getColumn(0, "AM_REPAYMENT");
        	var AmJan = this.dsList.getColumn(0, "AM_JAN");
        	var AmSumRepayment = this.gfnNvl(this.dsList.getColumn(0, "AM_SUMREPAYMENT"),0);

        	var AmSum = AmSumRepayment + AmRepayment ;
        	var AmSumJan = AmJan - AmRepayment;

        	trace(" AmSum=>" + AmSum);
        	trace(" AmSumJan=>" + AmSumJan);

        	if (this.gfnNvl(AmSumJan,0) == 0)
        	{
        		this.dsList.setColumn(0,"AM_SUM", AmSum);
        		this.dsList.setColumn(0,"AM_SUMJAN", AmSumJan);
        		this.dsList.setColumn(0,"AM_CHANGEMONTH", 0);
        		this.dsList.setColumn(0,"YM_CHANGE", 0);

        		if (!this.gfnIsNull(this.dsList.getColumn(0, "DT_REPAYMENT")))
        		{
        			this.fnInterest();
        		}
        		return;
        	}

        	this.dsList.setColumn(0,"AM_SUM", AmSum);
        	this.dsList.setColumn(0,"AM_SUMJAN", AmSumJan);

        	var YmJan = this.dsList.getColumn(0, "YM_JAN");
        	var YmChange = this.dsList.getColumn(0, "YM_CHANGE")

        	if (this.gfnNvl(YmChange,0) == 0) {
        		YmChange = YmJan;
        	}
        	var AmChangeMonth = this.fnGetTrunc(AmSumJan / (YmChange == 0 ? 1 : YmChange), 10);

        	this.dsList.setColumn(0,"AM_CHANGEMONTH", AmChangeMonth);
        	this.dsList.setColumn(0,"YM_CHANGE", YmChange);
        	if (!this.gfnIsNull(this.dsList.getColumn(0, "DT_REPAYMENT")))
        	{
        		this.fnInterest();
        	}

        };

        //이자 계산 처리
        this.fnInterest = function ()
        {
        	trace(" 이자계산 fnInterest =>"  );
        	var AmLoan = this.gfnNvl(this.dsList.getColumn(0,"AM_SUMJAN"),0);
        	var AmJan = this.gfnNvl(this.dsList.getColumn(0,"AM_JAN"),0);
        	var RtRate = this.gfnNvl(this.dsList.getColumn(0,"RT_RATE"),0);
        	var DtFrom = this.dsList.getColumn(0, "DT_FROM");
        	var DtTo = this.dsList.getColumn(0, "DT_REPAYMENT"); // 상환일자
        	var QnIlsu = this.gfnGetDiffDate(DtFrom , DtTo) + 1;
        	var DtLost = this.gfnNvl(this.dsList.getColumn(0,"DT_LOST"),"");
        	var AmInterest = 0;
        	var AmInterest2 = 0;
        	var QnIlsu = 0;
        	var QnIlsu2 = 0;

        	if( DtLost != "") {
        		var RtLostRate = this.gfnNvl(this.dsList.getColumn(0,"RT_LOSTRATE"),0);
        		if (DtFrom <= DtLost)
        		{
        			var QnIlsu = this.gfnGetDiffDate(DtFrom , DtLost) + 1;
        			var QnIlsu2 = this.gfnGetDiffDate(DtLost , DtTo) ;
        			AmInterest = this.fnGetTrunc( AmJan * RtRate/100 * QnIlsu / 365 , 10);
        			AmInterest2 = this.fnGetTrunc( AmJan * RtLostRate/100 * QnIlsu2 / 365 , 10);
        		} else {
        			AmInterest2 = this.fnGetTrunc( AmJan * RtLostRate/100 * QnIlsu / 365 , 10);
        		}

        	} else {
        		var QnIlsu = this.gfnGetDiffDate(DtFrom , DtTo) + 1;
        		var AmInterest = this.fnGetTrunc( AmJan * RtRate/100 * QnIlsu / 365 , 10);
        	}
        	trace(" AmJan=>" + AmJan+" QnIlsu=>" + QnIlsu+ ",  AmInterest=>" + AmInterest);
        	trace(" AmJan=>" + AmJan+" QnIlsu2=>" + QnIlsu2 + ", AmInterest2=>" + AmInterest2);
        	this.dsList.setColumn(0, "QN_ILSU", QnIlsu + QnIlsu2);
        	this.dsList.setColumn(0, "DT_TO", DtTo);
        	this.dsList.setColumn(0, "AM_INTEREST", 0);
        	if (AmLoan != 0) {
        		AmInterest = 0 ;  // 최종상환시에만 이자계산 처리
        		AmInterest2 = 0 ;
        	}
        	this.dsList.setColumn(0, "AM_INTEREST", AmInterest + AmInterest2);

        };

        //컨트롤 활성화 처리
        this.fnSetEnable = function ()
        {
        	this.cfID_SABUN.set_enable(false);
        	this.cfCD_LOAN.set_enable(false);
        	this.txtAM_REPAYMENT.set_enable(false);
        	this.tclDT_REPAYMENT.set_enable(false);
        	this.mskYM_CHANGE.set_enable(false);

        	this.btnSAVE.set_enable(false);
        	this.btnOK.set_enable(false);
        	//this.btnCANCEL.set_enable(false);

        	switch(this.dsList.getColumn(0, "ST_APRV")) {
        	case "01":
        		this.cfID_SABUN.set_enable(true);
        		this.cfCD_LOAN.set_enable(true);
        		this.txtAM_REPAYMENT.set_enable(true);
        		this.tclDT_REPAYMENT.set_enable(true);
        		this.mskYM_CHANGE.set_enable(true);

        		//this.fileManager.IS_READONLY = false;
        		this.btnSAVE.set_enable(true);
        		this.btnOK.set_enable(true);
        		//this.btnCANCEL.set_enable(true);
        		this.btnCANCEL.set_text("신청취소");
        		break;
        	case "":
        		this.cfID_SABUN.set_enable(true);
        		this.cfCD_LOAN.set_enable(true);
        		this.txtAM_REPAYMENT.set_enable(true);
        		this.tclDT_REPAYMENT.set_enable(true);
        		this.mskYM_CHANGE.set_enable(true);

        		//this.fileManager.IS_READONLY = false;
        		this.btnSAVE.set_enable(true);
        		this.btnOK.set_enable(true);
        		//this.btnCANCEL.set_enable(true);
        		break;
        	default:
        	}
        };

        this.fnGetTrunc = function(amVal, vCnt){
        	var returnVal = this.gfnNvl(amVal, 0);
        	if(returnVal > 0){
        		returnVal = Math.floor(amVal/vCnt) * vCnt;
        	}
        	return returnVal;
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.divDatafooter.form.sta10.addEventHandler("onclick",this.divDataDetail_sta10_onclick,this);
            this.divBtns.form.btnCANCEL.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.divBtns.form.btnSAVE.addEventHandler("onclick",this.divBtns_btnSAVE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOk_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_LOANREPAYMENT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
