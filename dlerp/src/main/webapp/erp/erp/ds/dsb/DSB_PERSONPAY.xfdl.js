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
            this.set_titletext("개인별출역조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSBPR_PERSONPAYLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DSBPR_PERSONPAY_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JIKJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TOIJIK\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CHAIYONG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SIGUB\" type=\"STRING\" size=\"256\"/><Column id=\"TM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"TM_SUM_CONVERT\" type=\"STRING\" size=\"256\"/><Column id=\"TT_RW\" type=\"STRING\" size=\"256\"/><Column id=\"TT_OT\" type=\"STRING\" size=\"256\"/><Column id=\"TT_NW\" type=\"STRING\" size=\"256\"/><Column id=\"TT_HW\" type=\"STRING\" size=\"256\"/><Column id=\"TT_WW\" type=\"STRING\" size=\"256\"/><Column id=\"TT_MW\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SODUK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GOYONGPER\" type=\"STRING\" size=\"256\"/><Column id=\"AM_KOOKMIN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MEDICARE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SILVER\" type=\"STRING\" size=\"256\"/><Column id=\"AM_WJIGUB\" type=\"STRING\" size=\"256\"/><Column id=\"TT_GONGJE\" type=\"STRING\" size=\"256\"/><Column id=\"TT_JIGUB\" type=\"STRING\" size=\"256\"/><Column id=\"AM_YEARSODUK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_YEARJUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_YEASUGUM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_JIGUB\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HADO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_JIGUB\"/><Col id=\"NO_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장/부서 코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta02:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DZX_CFDEPTCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_HADO","ccfCD_SITE:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("작업반");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfSEARCH_CD_HADO","staCD_HADO:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","cfSEARCH_CD_HADO:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("tclYM_YYMM","staYM_WORK:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","25%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","1","0","646","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("기본사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta11","119","190","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta12","119","219","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta13","119","248","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta14","119","277","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta15","119","306","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta16","119","335","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta17","119","364","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_NW","125","253","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta07","0","364","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_text("기타수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta06","0","335","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_text("년차수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta05","0","306","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_text("주차수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta04","0","277","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_text("휴일수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","0","248","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_text("야간수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00","0","219","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_text("연장수당");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta01","0","190","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_text("기본급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_fittocontents("none");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta08","-1","156","314","25",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_text("급여사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta09","119","30","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta10","452","30","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta20","118","87","196","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_NAME","125","35","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta29","0","30","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("21");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta30","333","30","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("22");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta40","0","87","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("23");
            obj.set_text("채용구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta43","452","87","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta47","119","59","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta49","333","87","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("26");
            obj.set_text("시급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta53","0","59","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("27");
            obj.set_text("직종명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_JIKJONG","125","64","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_OT","125","224","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("29");
            obj.set_format("9,999");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_WW","125","311","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_format("9,999");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta77","1","490","645","25",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("31");
            obj.set_text("합계내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta24","334","335","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("32");
            obj.set_text("요양보험");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta25","334","306","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("33");
            obj.set_text("건강보험");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta26","334","277","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("34");
            obj.set_text("국민연금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta27","334","248","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("35");
            obj.set_text("고용보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta28","334","219","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("36");
            obj.set_text("주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta31","334","190","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("37");
            obj.set_text("소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta32","453","190","193","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta33","452","307","193","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta34","453","248","193","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_GOYONGPER","458","253","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("41");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta36","453","217","193","31",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MEDICARE","458","312","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("43");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_format("9,999");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta35","453","277","193","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_KOOKMIN","458","282","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("45");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta38","453","335","193","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SILVER","459","341","182","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("47");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_HW","125","282","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("48");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ETC1","125","369","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("49");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_RW","125","195","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("50");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SODUK","458","194","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("51");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_JUMIN","458","223","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("52");
            obj.set_format("9,999");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta68","120","549","194","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta69","1","549","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("54");
            obj.set_text("차인지급액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta70","333","520","122","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("55");
            obj.set_text("공제계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta71","454","520","192","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta72","120","520","194","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta73","1","520","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("58");
            obj.set_text("총액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_fittocontents("none");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_WJIGUB","126","525","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("59");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_GONGJE","459","525","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("60");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_JIGUB","125","555","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("61");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_JUMIN","458","35","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("62");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtTY_CHAIYONG","125","92","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("63");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta18","0","116","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("64");
            obj.set_text("실근무시간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta19","118","116","196","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta21","333","116","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("66");
            obj.set_text("환산시간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta22","451","116","196","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta23","333","59","121","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("68");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta37","452","59","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDT_TOIJIK","458","64","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("70");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta39","333","156","314","25",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("71");
            obj.set_text("공제내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_MW","125","341","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("72");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SIGUB","458","92","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("73");
            obj.set_format("9,999");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtTM_SUM","125","121","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("74");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtTM_SUM_CONVERT","458","121","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("75");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataRight.form.txtDS_NAME","value","dsListSub","DS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataRight.form.txtNO_JUMIN","value","dsListSub","NO_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataRight.form.txtDS_JIKJONG","value","dsListSub","DS_JIKJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.txtTY_CHAIYONG","value","dsListSub","TY_CHAIYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.txtTT_RW","value","dsListSub","TT_RW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.txtTT_OT","value","dsListSub","TT_OT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.txtTT_NW","value","dsListSub","TT_NW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.txtTT_HW","value","dsListSub","TT_HW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.txtTT_WW","value","dsListSub","TT_WW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.txtAM_KOOKMIN","value","dsListSub","AM_KOOKMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.txtAM_MEDICARE","value","dsListSub","AM_MEDICARE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataRight.form.txtAM_GOYONGPER","value","dsListSub","AM_GOYONGPER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataRight.form.txtAM_JUMIN","value","dsListSub","AM_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataRight.form.txtAM_SODUK","value","dsListSub","AM_SODUK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataRight.form.txtAM_WJIGUB","value","dsListSub","AM_WJIGUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSearch.form.tclYM_YYMM.form.TextBox","value","dsSearch","YM_JIGUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataRight.form.txtTT_GONGJE","value","dsListSub","TT_GONGJE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.txtTT_JIGUB","value","dsListSub","TT_JIGUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.txtTT_ETC1","value","dsListSub","TT_ETC1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataRight.form.txtDT_TOIJIK","value","dsListSub","DT_TOIJIK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.txtTT_MW","value","dsListSub","TT_MW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.txtAM_SIGUB","value","dsListSub","AM_SIGUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataRight.form.txtAM_SILVER","value","dsListSub","AM_SILVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.txtTM_SUM","value","dsListSub","TM_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.txtTM_SUM_CONVERT","value","dsListSub","TM_SUM_CONVERT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divSearch.form.cfSEARCH_CD_HADO.form.CDTextBox","value","dsSearch","CD_HADO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divSearch.form.cfSEARCH_CD_HADO.form.DSTextBox","value","dsSearch","DS_HADO");
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
        this.registerScript("DSB_PERSONPAY.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "YM_JIGUB", this.gfnGetDate().substr(0,6));	// 년월 현재월로 셋팅

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Save.set_enable(true);
        	// 서브 버튼 사용(2개 그리드 중간에 있는 파란선) 상단에 공통 셋트가 하나더 생긴다
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.cfSEARCH_CD_HADO = this.divSearch.form.cfSEARCH_CD_HADO;
        	this.tclYM_YYMM = this.divSearch.form.tclYM_YYMM;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSB_PERSONPAY");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.cfSEARCH_CD_HADO.CodeFindName = "DWX_CFHADO_JIK";	// 계약번호
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfSEARCH_CD_HADO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_JIGUB", "string");
        	this.dsSelect.addColumn("NO_ID", "string");
        	this.dsSelect.addColumn("CD_HADO", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("YM_JIGUB", "string");
        	this.dsSelectSub.addColumn("NO_ID", "string");

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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_JIGUB", this.dsSearch.getColumn(0, "YM_JIGUB").substr(0,6));
        	this.dsSelect.setColumn(0, "NO_ID", "");
        	this.dsSelect.setColumn(0, "CD_HADO", this.dsSearch.getColumn(0, "CD_HADO"));

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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
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
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	// 디테일 데이터셋 데이터 삭제
        	this.dsListSub.clearData();

        	// 디테일 싱글폼 파마리터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub.setColumn(0, "YM_JIGUB", this.dsSearch.getColumn(0, "YM_JIGUB").substr(0,6));
        	this.dsSelectSub.setColumn(0, "NO_ID", this.dsList.getColumn(this.dsList.rowposition, "NO_ID_REAL"));

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


        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");

        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_JIGUB"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.tclYM_YYMM.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작업년월은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        	else if(svcID == "detail") {
        		if (errorCode == 0) {
        			//this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		}
        	}

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
         	} else if (id == "cfSEARCH_CD_HADO") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
         	}
        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {


        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;

        		}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.dsListSub.clearData();

        	}
        };

        this.divData_ondragmove = function(obj,e)
        {
           if(e.userdata == "splitter") {
              this.divData.form.divSplitter.set_left(e.clientx);
              this.divData.form.resetScroll();
           }
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
           e.set_userdata("splitter");
           return true;
        };


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divSearch.form.staYM_WORK.addEventHandler("onclick",this.divSearch_staYM_WORK_onclick,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.sta01.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.sta53.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.sta31.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.sta36.addEventHandler("onclick",this.divData_divDataRight_sta36_onclick,this);
            this.divData.form.divDataRight.form.sta69.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.sta70.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.sta73.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSB_PERSONPAY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
