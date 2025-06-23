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
            this.set_titletext("대출 시뮬레이션");
            this.getSetter("maxwidth").set("850");
            this.getSetter("maxheight").set("850");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,820);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"YM_REPAYMENT\" type=\"INT\" size=\"256\"/><Column id=\"AM_MONTH\" type=\"FLOAT\" size=\"256\"/><Column id=\"RT_RATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"CD_REPAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REPAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MAXLOAN\" type=\"FLOAT\" size=\"256\"/><Column id=\"YM_MAX\" type=\"FLOAT\" size=\"256\"/><Column id=\"YY_BASEYEAR\" type=\"INT\" size=\"256\"/><Column id=\"AM_REPAYMENT\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_LOAN\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_MONTHBASE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DABPR_LOANSIMULATION_SELECT</Col></Row><Row><Col id=\"SP\">DABPR_LOANSTATE_SELECT</Col><Col id=\"TARGET\">select</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LOAN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLoan", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GROUPJOIN\" type=\"STRING\" size=\"256\"/><Column id=\"QN_GROUPJOIN\" type=\"INT\" size=\"256\"/><Column id=\"DS_GROUPJOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"QN_POINT\" type=\"INT\" size=\"256\"/><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REPAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LOANLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_JAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_A01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_A02\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_B01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_C01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_D01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LOANPOSSIBLE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_REPAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAX\" type=\"INT\" size=\"256\"/><Column id=\"YY_BASEYEAR\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LOAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YM_LOAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MONTH\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","63",null,"282","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","79","0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","89","staBg:-2",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg02","0","100",null,"67","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta1","0","0","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_text("부서");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta3","sta1:297","0","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_tablelabelT");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT","sta1:4","5","286","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta2","sta1:-100","sta1:-2","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_POSITION","sta3:4","4","46","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_JOIN","sta2:5","33","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_JOIN","tclDT_JOIN:4","31","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta4","sta2:297","sta3:-2","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("그룹입사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_GROUPJOIN","sta4:4","33","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_GROUPJOIN","tclDT_GROUPJOIN:4","32","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_PAYSTEP","txtDS_POSITION:5","4","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle1","0","65","389","35",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("개인대출현황");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta5","0","100","100","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_text("총대출한도");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta6","99","100","601","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("현대출잔액");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","99","129","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("주택구입");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","198","129","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("주택임차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","297","129","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("현장전세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","396","129","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("사원결혼/\r\n학자금대출");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","495","129","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("생활자금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","594","129","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("대출잔액 계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta20","693","100",null,"60","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_text("대출가능금액");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg03","0","158","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg04","99","158","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg05","198","158","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg06","297","158","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg07","396","158","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg08","495","158","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg09","594","158","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg10","693","158",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle2","0","195","389","35",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("시뮬레이션");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDownload",null,"205","79","24","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("다운로드");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnExcute",null,"205","57","24","btnDownload:4",null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("실행");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LIMIT","2","sta5:2","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_format("#,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_A01","102","sta10:3","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_format("#,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_D01","299","sta12:3","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_format("#,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_C01","399","sta13:3","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_format("#,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_A02","200","sta11:3","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_format("#,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_B01","497","sta14:3","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_format("#,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SUM","597","sta15:3","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_format("#,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_POSSIBLE","698","sta20:1","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_format("#,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAlter","95","203","466","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_text("※대출종류를 먼저 선택한 후 대출신청금액과 상환개월을 입력하시기 바랍니다.");
            obj.set_color("#1a1dc0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataDetail","0","297",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg12","79","0",null,"30","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staBg11","90","staBg12:-1",null,"30","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("sta11","0","0","100","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("대출종류");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("sta7","sta11:210","0","100","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("대출한도금액");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Div("cfCD_LOAN","sta11:4","5","199","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.getSetter("CodeFindName").set("DAX_LOANRATE");
            obj.getSetter("CDTextWidth").set("40");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("sta8","310","29","100","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("9");
            obj.set_text("대출금액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LOAN","sta8:4","34","116","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("3");
            obj.set_format("###,###,###");
            obj.set_limitbymask("integer");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("sta9","txtAM_LOAN:6","36","20","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("7");
            obj.set_text("원");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("sta10","0","sta7:-1","100","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("5");
            obj.set_text("상환방법");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Edit("txtDS_REPAYMENT","sta10:4","34","73","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("10");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Edit("txtNO_ACCOUNT","416","71","140","24",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("11");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TYPELIMIT","sta11:314","6","115","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("12");
            obj.set_format("#,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("sta12","mskAM_TYPELIMIT:6","5","20","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("13");
            obj.set_text("원");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Edit("txtCD_BANK","238","69",null,"24","870",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("14");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("sta13","570","0","100","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_text("최장상환개월");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskYM_MAX","sta13:5","6","55","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("16");
            obj.set_format("#,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("sta14","mskYM_MAX:6","5","34","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("17");
            obj.set_text("개월");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("sta22","570","29","100","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("대출상환개월");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskYM_REPAYMENT","sta22:5","34","55","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("4");
            obj.set_format("#,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("sta15","mskYM_REPAYMENT:6","34","34","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("19");
            obj.set_text("개월");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staBg11:10",null,null,"0","3",null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("20");
            obj._setContents("");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("sta10_00","sta10:80","29","72","30",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("21");
            obj.set_text("이자율");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskRT_RATE","255","34","35","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("22");
            obj.set_format("#,##0.#");
            obj.set_limitbymask("integer");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("sta25","sta10_00:40","34","20","20",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("23");
            obj.set_text("%");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MONTH","522","-28","116","24",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("24");
            obj.set_format("###,###,###");
            obj.set_limitbymask("integer");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Grid("objGridExcel","-3","staBg11:65",null,"60","3",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("25");
            obj.set_visible("false");
            obj.set_binddataset("dsListExcel");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"대출금\"/><Cell col=\"4\" text=\"상환개월\"/><Cell col=\"5\" text=\"월상환액\"/></Band><Band id=\"body\"><Cell text=\"bind:ID_SABUN\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DS_HNAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:AM_LOAN\" textAlign=\"right\" edittype=\"mask\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,###\"/><Cell col=\"4\" text=\"bind:YM_LOAN\" textAlign=\"right\" maskeditformat=\"###,###,###,###,###\" displaytype=\"mask\" edittype=\"mask\"/><Cell col=\"5\" text=\"bind:AM_MONTH\" textAlign=\"right\" maskeditformat=\"###,###,###,###,###\" displaytype=\"mask\" edittype=\"mask\"/></Band></Format></Formats>");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Grid("objGridTitle","-5","192",null,"69","15",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("26");
            obj.set_visible("false");
            obj.set_binddataset("dsListExcel");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"회차\"/><Cell col=\"2\" text=\"납부일자\"/><Cell col=\"3\" text=\"원금\"/><Cell col=\"4\" text=\"월상환액\"/><Cell col=\"5\" text=\"시작일자\"/><Cell col=\"6\" text=\"종료일자\"/><Cell col=\"7\" text=\"이자율\"/><Cell col=\"8\" text=\"일수\"/><Cell col=\"9\" text=\"이자\"/><Cell col=\"10\" text=\"상환원금누계\"/><Cell col=\"11\" text=\"대출잔액\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"회차\" textAlign=\"center\"/><Cell col=\"2\" text=\"납부일자\" textAlign=\"center\"/><Cell col=\"3\" text=\"원금\" textAlign=\"center\"/><Cell col=\"4\" text=\"월상환액\" textAlign=\"center\"/><Cell col=\"5\" text=\"시작일자\" textAlign=\"center\"/><Cell col=\"6\" text=\"종료일자\" textAlign=\"center\"/><Cell col=\"7\" text=\"이자율\" textAlign=\"center\"/><Cell col=\"8\" text=\"일수\" textAlign=\"center\"/><Cell col=\"9\" text=\"이자\" textAlign=\"center\"/><Cell col=\"10\" text=\"상환원금누계\" textAlign=\"center\"/><Cell col=\"11\" text=\"대출잔액\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Div("divSearch","0","5",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","4","9","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN","staID_SABUN:-24","9","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"9","57","24","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.cfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDataDetail.form.cfCD_LOAN.form.CDTextBox","value","dsList","CD_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDataDetail.form.cfCD_LOAN.form.DSTextBox","value","dsList","DS_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDataDetail.form.txtAM_LOAN","value","dsList","AM_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divDataDetail.form.txtDS_REPAYMENT","value","dsLoan","DS_REPAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDataDetail.form.mskYM_MAX","value","dsList","YM_MAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.mskAM_LIMIT","value","dsLoan","AM_LOANLIMIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.mskAM_A01","value","dsLoan","AM_A01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.mskAM_D01","value","dsLoan","AM_D01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.mskAM_C01","value","dsLoan","AM_C01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.mskAM_A02","value","dsLoan","AM_A02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.mskAM_B01","value","dsLoan","AM_B01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.mskAM_SUM","value","dsLoan","AM_JAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.mskAM_POSSIBLE","value","dsLoan","AM_LOANPOSSIBLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.txtDS_DEPT","value","dsLoan","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.txtDS_POSITION","value","dsLoan","DS_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtDS_PAYSTEP","value","dsLoan","DS_PAYSTEP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tclDT_JOIN","value","dsLoan","DT_JOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.txtDS_JOIN","value","dsLoan","DS_JOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tclDT_GROUPJOIN","value","dsLoan","DT_GROUPJOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.txtDS_GROUPJOIN","value","dsLoan","DS_GROUPJOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divDataDetail.form.mskAM_TYPELIMIT","value","dsList","AM_MAXLOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divDataDetail.form.mskRT_RATE","value","dsList","RT_RATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divDataDetail.form.txtAM_MONTH","value","dsList","AM_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divDataDetail.form.mskYM_REPAYMENT","value","dsList","YM_REPAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_LOANSIMULATION_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();


        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetVariable();
        	this.fnSetParameter();
        	this.fnSetEvent();

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
        	this.cfID_SABUN    = this.divSearch.form.cfID_SABUN;

        	this.cfCD_LOAN     = this.divDataDetail.form.cfCD_LOAN;

        	this.mskYM_REPAYMENT = this.divDataDetail.form.mskYM_REPAYMENT;

        	this.btnSearch     = this.divSearch.form.btnSearch;
        	this.btnExcute     = this.divData.form.btnExcute;
        	this.btnDownload     = this.divData.form.btnDownload;

        	this.dxGrid = this.divDataDetail.form.objGrid;
        	this.dxGridExcel = this.divDataDetail.form.objGridExcel;
        	this.objGridTitle = this.divDataDetail.form.objGridTitle;
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

        	this.gfnGridInitAsync(this.dxGrid, this.dsListSub, "DA", "DAB_LOANSIMULATION");

        	this.dsList.addEventHandler("onvaluechanged", this.dsList_onvaluechanged, this);
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        };

        // 부모창에서 받아온것 셋팅
        this.fnSetInit = function() {

        	var frame = this.getOwnerFrame();

        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	this.dsSearch.set_enableevent(false);

        	if(this.FormInfo.GR_SEARCH == "9" ) {
        		this.cfID_SABUN.form.set_readonly(true);
        		this.dsSearch.setColumn(0, "ID_SABUN", this.AuthClient.ID_SABUN);
        		this.dsSearch.setColumn(0, "DS_HNAME", this.AuthClient.DS_HNAME);
        		this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);

        	} else {
        		this.dsSearch.setColumn(0, "ID_SABUN", frame.ID_SABUN);
        		this.dsSearch.setColumn(0, "DS_HNAME", frame.DS_HNAME);
        		this.dsSearch.setColumn(0, "CD_CORP", frame.CD_CORP);
        		this.dsSearch.setColumn(0, "DT_LOAN", frame.DT_LOAN);
        	}
        	this.dsSearch.set_enableevent(true);
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "ID_SABUN")))
        	{
        		this.fnSelect();
        	}
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "STRING");
        	this.dsSelect.addColumn("ID_SABUN", "STRING");
        	this.dsSelect.addColumn("DT_BASE", "STRING");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_CORP", "STRING");
        	this.dsSelectSub.addColumn("ID_SABUN", "STRING");
        	this.dsSelectSub.addColumn("CD_LOAN", "STRING");
        	this.dsSelectSub.addColumn("AM_LOAN", "BIGINT");
        	this.dsSelectSub.addColumn("YM_REPAYMENT", "INT");
        	this.dsSelectSub.addColumn("AM_MONTH", "BIGINT");
        	this.dsSelectSub.addColumn("RT_RATE", "BIGINT");
        	this.dsSelectSub.addColumn("DT_LOAN", "STRING");
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
        	this.dsSelect.setColumn(0, "DT_BASE", this.dsSearch.getColumn(0, "DT_LOAN"));

        	//trace(" dsSelect=>" + this.dsSelect.saveXML());
        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsLoan=select0";
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

        this.fnExcel = function() {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;
        	this.fnExcelExport(this.dxGrid);

        };

        this.fnExcelExport = function(objGridExcel, sSheetName, sFileName)
        {

        	var objDs = objGridExcel.getBindDataset();
        	if(objGridExcel.yn_filter == "Y") {
        		objDs.set_enableevent(false);
        		objDs.deleteRow(0);
        		objDs.set_enableevent(true);
        	}

        	this.setWaitCursor(true);

        	var objGrid_excel = objGridExcel;

        	var regExp = /[?*:\/\[\]]/g;  				//(엑셀에서 지원하지않는 모든 문자)

        	//fileName nullcheck
        	sFileName = this.gfnIsNull(sFileName) ? this.gfnGetArgument("NM_FORM")+"_"+this.gfnGetDate() : sFileName;
        	//sheetName nullcheck
        	sSheetName = this.gfnIsNull(sSheetName) ? "sheet1" : sSheetName;

        	sFileName = sFileName.replace(regExp,"");	//파일명에 특수문자 제거
        	sSheetName = sSheetName.replace(regExp,""); //시트명에 특수문자 제거

        	//sheetName 30이상일경우 기본시트명
        	if( String(sSheetName).length > 30 ){
        		sSheetName =  "sheet1";
        	}

        	var _contextPath = nexacro.getEnvironmentVariable("evContextPath");
        	var svcUrl = "svcUrl::XExportImport.do";
        	if (!this.gfnIsNull(_contextPath)) {
        		_contextPath = _contextPath.substr(1, _contextPath.length - 1);
        		svcUrl = "svcUrl::" + _contextPath + "XExportImport.do";
        	}

        	this.dsListExcel.set_enableevent(false);
        	this.dsListExcel.clearData();
        	var nrow = this.dsListExcel.addRow();
        	this.dsListExcel.setColumn(nrow, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsListExcel.setColumn(nrow, "DS_HNAME", this.dsSearch.getColumn(0, "DS_HNAME"));
        	this.dsListExcel.setColumn(nrow, "AM_LOAN", this.dsList.getColumn(0, "AM_LOAN"));
        	this.dsListExcel.setColumn(nrow, "YM_LOAN", this.dsList.getColumn(0, "YM_REPAYMENT"));
        	this.dsListExcel.setColumn(nrow, "AM_MONTH", this.dsList.getColumn(0, "AM_MONTH"));
        	this.dsListExcel.set_enableevent(true);

        	this.objGrid

        	this.objExport = null;
        	this.objExport = new ExcelExportObject();

        	this.objExport.objgrid = objGrid_excel;
        	this.objExport.set_exporturl(svcUrl);

         	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.dxGridExcel, sSheetName+"!C1", "allband","allrecord","nosuppress","selectstyle","none","","both");
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.objGridTitle, sSheetName+"!A4", "nohead","allrecord","nosuppress","selectstyle","none","","both");
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGridExcel, sSheetName+"!A"+5,"allband","allrecord","suppress","allstyle","none","","both");

        	this.objExport.set_exportfilename(sFileName);

         	this.objExport.set_exporteventtype("itemrecord");
         	this.objExport.set_exportuitype("none");
         	this.objExport.set_exportmessageprocess("");
        	this.objExport.addEventHandler("onsuccess", this.gfnExportOnsuccess, this);
        	this.objExport.addEventHandler("onerror", this.gfnExportOnerror, this);

        	var result = this.objExport.exportData();

        	if (this.gfnGetConfig("DZ", "LOG_TYPE").indexOf("download") != -1)
        	{
        		this.gfnExcelLog(objGridExcel); //excel log 저장
        	}
        }
        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	var strMsg = "";

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "ID_SABUN"))) {
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

        	if(this.dsList.getColumn(0, "AM_LOAN") > this.dsLoan.getColumn(0, "AM_LOANPOSSIBLE")) {
        		strMsg += "※대출신청액은 대출가능금액보다 작아야 합니다. 대출신청금액을 확인하세요.\n";
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

        	if (svcID =="select")
        	{
        		if(this.dsLoan.rowcount > 0) {
        			this.dsList.clearData();
        			this.dsList.addRow();
        			this.dsList.set_enableevent(false);

        			this.dsList.setColumn(0, "DS_REPAYMENT", "원금균등");
        			this.dsList.setColumn(0, "CD_REPAYMENT", "01");

        			this.gfnSetFormStatus(this, "Q");
        			this.dsList.set_enableevent(true);
        			//trace(" dsList=>" + this.dsLoan.saveXML());
        		}
        	} else if ( svcID =="selectSub")
        	{
        		this.gfnGridAfterSelect(this.dxGrid);
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
        		dsUserParam.setColumn(nrow, "DT_BASE", this.dsLoan.getColumn(0, "DT_BASE"));
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_EMPTYPE", this.dsLoan.getColumn(0, "CD_EMPTYPE"));
        		dsUserParam.setColumn(nrow, "QN_BASEYEAR", this.dsLoan.getColumn(0, "QN_GROUPJOIN"));
        		dsUserParam.setColumn(nrow, "CD_POSITION", this.dsLoan.getColumn(0, "CD_POSITION"));
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id,codeFindData) {
           	var arr = codeFindData;

        	if(id=="cfCD_LOAN"){
        		if(arr.length > 0) {
        		    //trace(arr[0]["AM_MAXLOAN"]);
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(0,"CD_LOAN",	arr[0]["CD_LOAN"]);
        			this.dsList.setColumn(0,"DS_LOAN",	arr[0]["DS_LOAN"]);
        			this.dsList.setColumn(0,"AM_MAXLOAN",arr[0]["AM_MAXLOAN"]);
        			this.dsList.setColumn(0,"RT_RATE",	arr[0]["RT_RATE"]);
        			this.dsList.setColumn(0,"YM_MAX",	arr[0]["YM_MAX"]);
        			this.dsList.setColumn(0,"AM_MONTH",	arr[0]["AM_MONTH"]);
        			this.dsList.setColumn(0,"AM_MONTHBASE",	arr[0]["AM_MONTH"]);
        			this.dsList.setColumn(0,"YY_BASEYEAR",arr[0]["YY_BASEYEAR"]);

        			if( arr[0]["YM_MAX"] == 0 ){
        				this.mskYM_REPAYMENT.set_enable(false);
        			}
        			else {
        				this.mskYM_REPAYMENT.set_enable(true);
        			}

        			this.dsList.set_enableevent(true);
        		}
        	}

        };
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        //실행 버튼
        this.divData_btnExcute_onclick = function(obj,e)
        {
           if(!this.fnSelectValidate()) return;

           this.dsSelectSub.clearData();
           this.dsSelectSub.addRow();
           this.dsSelectSub.setColumn(0, "CD_CORP"     ,  this.dsSearch.getColumn(0,"CD_CORP"));
           this.dsSelectSub.setColumn(0, "ID_SABUN"    ,  this.dsSearch.getColumn(0,"ID_SABUN"));
           this.dsSelectSub.setColumn(0, "CD_LOAN"     ,  this.dsList.getColumn(0,"CD_LOAN"));
           this.dsSelectSub.setColumn(0, "AM_LOAN"     ,  this.dsList.getColumn(0,"AM_LOAN"));
           this.dsSelectSub.setColumn(0, "YM_REPAYMENT",  this.dsList.getColumn(0,"YM_REPAYMENT"));
           this.dsSelectSub.setColumn(0, "AM_MONTH"    ,  this.dsList.getColumn(0,"AM_MONTH"));
           this.dsSelectSub.setColumn(0, "RT_RATE"     ,  this.dsList.getColumn(0,"RT_RATE"));
           this.dsSelectSub.setColumn(0, "DT_LOAN"     ,  this.dsSearch.getColumn(0,"DT_LOAN"));

            var strSvcId    = "selectSub";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub";
        	var outData     = "dsListSub=selectSub0";
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

        // 엑셀 다운로드
        this.divData_btnDownload_onclick = function(obj,e)
        {
        	this.fnExcel();
        };


        this.dsList_onvaluechanged = function(obj,e)
        {

        	trace(" dsList_onvaluechanged=>" + this.gfnDsIsUpdated(obj));

        	if (e.oldvalue != e.newvalue)
        	{
        		this.gfnGridClear(this.dxGrid);

        		if( e.columnid == "CD_LOAN"){
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(0,"AM_LOAN", 0);
        			this.dsList.setColumn(0,"YM_REPAYMENT", 0);
        			this.dsList.set_enableevent(true);
        		}
        		if( e.columnid == "AM_LOAN" || e.columnid == "YM_REPAYMENT" ) {
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(0,"AM_MONTH", this.dsList.getColumn(0, "AM_MONTHBASE"));
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


        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	trace(" dsSearch_onvaluechanged=>" + this.gfnDsIsUpdated(obj));

        	if (e.oldvalue != e.newvalue)
        	{
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.dsList.clearData();
        		this.dsLoan.clearData();
        		this.gfnGridClear(this.dxGrid);
        		if( e.columnid == "ID_SABUN"){
        			if (this.gfnNvl(e.newvalue,"") != "")
        			{
        				this.fnSelect();
        			}
        		}
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //조회 버튼 클릭시
        this.btnSearch_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "ID_SABUN"))) return;

        	this.fnSelect();
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
            this.divData.form.btnDownload.addEventHandler("onclick",this.divData_btnDownload_onclick,this);
            this.divData.form.btnExcute.addEventHandler("onclick",this.divData_btnExcute_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsLoan.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsListExcel.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_LOANSIMULATION_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
