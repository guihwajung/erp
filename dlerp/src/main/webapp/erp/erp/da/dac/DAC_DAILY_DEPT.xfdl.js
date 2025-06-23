(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAC_DAILY_DEPT");
            this.set_titletext("일별인원근태 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ABSENCE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HOLIDAY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SPECIAL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICIAL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SERVICE_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SERVICE_HOLIDAY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SERVICE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_LABOR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CADDIE_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CADDIE_HOLIDAY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CADDIE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK_R\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DACPR_DAILYREPORT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DACPR_DAILYWORK_SAVE</Col></Row><Row><Col id=\"SP\">DACPR_DAILYWORK_SELECT</Col><Col id=\"TARGET\">select2nd</Col></Row><Row><Col id=\"SP\">DACPR_DAILYWORK_CREATE</Col><Col id=\"TARGET\">selectCreate</Col></Row><Row><Col id=\"TARGET\">report2</Col><Col id=\"SP\">DACPR_DAILY_REPORT2</Col></Row><Row><Col id=\"TARGET\">report3</Col><Col id=\"SP\">DACPR_DAILY_REPORT3</Col></Row><Row><Col id=\"TARGET\">report4</Col><Col id=\"SP\">DACPR_DAILY_REPORT4</Col></Row><Row><Col id=\"TARGET\">report5</Col><Col id=\"SP\">DACPR_DAILY_REPORT5</Col></Row><Row><Col id=\"TARGET\">report6</Col><Col id=\"SP\">DACPR_DAILY_REPORT7</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_REPORT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2nd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutPut", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListCreate", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReportParam", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VIEW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_REPORT","sta00:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","calDT_REPORT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData01","0","divSearch:10",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta32","0","0",null,"22","0",null,null,null,null,null,this.divData01.form);
            obj.set_taborder("0");
            obj.set_text("인원현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta04","5","31","70","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("1");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta14","sta04:-1","31","200","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta00","sta14:-1","31","70","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("3");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta01","5","60","70","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("4");
            obj.set_text("총인원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","60","468","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta03","5","89","70","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("6");
            obj.set_text("근무");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta05","sta03:-1","89","55","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","89","50","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("8");
            obj.set_text("결근");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","89","55","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","89","50","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("10");
            obj.set_text("연차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","89","55","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","89","50","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("12");
            obj.set_text("특별");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","89","55","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta12","sta11:-1","89","50","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("14");
            obj.set_text("휴무");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","89","55","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta15","sta13:-1","89","50","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("16");
            obj.set_text("공가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta16","sta15:-1","89","55","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","89","50","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("18");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta18","sta17:-1","89","57","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta19","sta00:-1","31","200","30",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta20","5","118","70","80",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("21");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData01.addChild(obj.name, obj);

            obj = new Static("sta21","sta20:-1","118","675","80",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData01.addChild(obj.name, obj);

            obj = new Edit("edtDT_REPORT","sta04:5","36","140","20",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.divData01.addChild(obj.name, obj);

            obj = new Edit("edtSUM_WORK","sta01:5","65","60","20",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData01.addChild(obj.name, obj);

            obj = new Edit("edtDS_STATUS","sta00:5","36","140","20",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.divData01.addChild(obj.name, obj);

            obj = new Edit("edtNO_WORK","sta03:5","94","45","20",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData01.addChild(obj.name, obj);

            obj = new Edit("edtNO_ABSENCE","sta06:5","94","45","20",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData01.addChild(obj.name, obj);

            obj = new Edit("edtNO_HOLIDAY","sta08:5","94","45","20",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData01.addChild(obj.name, obj);

            obj = new Edit("edtNO_SPECIAL","sta10:5","94","45","20",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData01.addChild(obj.name, obj);

            obj = new Edit("edtNO_CLOSE","sta12:4","94","45","20",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData01.addChild(obj.name, obj);

            obj = new Edit("edtNO_OFFICIAL","sta15:5","94","45","20",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData01.addChild(obj.name, obj);

            obj = new Edit("edtNO_ETC","sta17:5","94","45","20",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData01.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK_R","80","125","660","66",null,null,null,null,null,null,this.divData01.form);
            obj.set_taborder("33");
            this.divData01.addChild(obj.name, obj);

            obj = new Div("div00","630","143",null,"100","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","236","3","60","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_text("용역인원 : ");
            obj.set_textAlign("right");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta23","sta00:5","3","50","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("총원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta26","sta23:-1","3","55","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta24","sta26:-1","3","50","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("휴무");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta27","sta24:-1","3","55","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta25","sta27:-1","3","50","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("현원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta28","sta25:-1","3","55","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01","236","32","60","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("출역인원 : ");
            obj.set_textAlign("right");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta22","sta01:5","32","50","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("총원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta29","sta22:-1","32","261","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta02","236","61","60","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_text("캐디인원 : ");
            obj.set_textAlign("right");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta30","sta02:5","61","50","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("총원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta31","sta30:-1","61","55","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta33","sta31:-1","61","50","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("휴무");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta34","sta33:-1","61","55","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta35","sta34:-1","61","50","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("현원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta36","sta35:-1","61","55","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtNO_SERVICE_TOTAL","sta23:5","8","45","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtNO_SERVICE_HOLIDAY","sta24:5","8","45","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_inputfilter("none");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtNO_SERVICE_CNT","sta25:5","8","45","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_inputfilter("none");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtNO_LABOR_CNT","sta22:5","edtNO_SERVICE_TOTAL:9","45","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_inputtype("number");
            obj.set_inputfilter("none");
            obj.set_textAlign("right");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtNO_CADDIE_TOTAL","sta30:5","edtNO_LABOR_CNT:9","45","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_inputfilter("none");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtNO_CADDIE_HOLIDAY","sta33:5","edtNO_LABOR_CNT:9","45","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_inputfilter("none");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtNO_CADDIE_CNT","sta35:5","edtNO_LABOR_CNT:9","45","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_inputfilter("none");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta03","146","32","90","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_text("[현장만 입력]");
            obj.set_textAlign("right");
            obj.set_color("crimson");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta04","146","61","90","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_text("[골프장만 입력]");
            obj.set_textAlign("right");
            obj.set_color("crimson");
            this.div00.addChild(obj.name, obj);

            obj = new Div("divData02","0","260",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta32","0","0",null,"22","0",null,null,null,null,null,this.divData02.form);
            obj.set_taborder("1");
            obj.set_text("세부내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData02.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta32:5",null,null,"0","0",null,null,null,null,this.divData02.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList2nd");
            obj.getSetter("BeforeUserDataSetParam").set("fnGrid_BeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnGrid_AfterCDTextChanged");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item19","divData01.form.edtDT_REPORT","value","dsList","DT_REPORT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData01.form.edtDS_STATUS","value","dsList","DS_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData01.form.edtNO_WORK","value","dsList","NO_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData01.form.edtNO_ABSENCE","value","dsList","NO_ABSENCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData01.form.edtNO_HOLIDAY","value","dsList","NO_HOLIDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData01.form.edtNO_SPECIAL","value","dsList","NO_SPECIAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData01.form.edtNO_CLOSE","value","dsList","NO_CLOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData01.form.edtNO_OFFICIAL","value","dsList","NO_OFFICIAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData01.form.edtNO_ETC","value","dsList","NO_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div00.form.edtNO_SERVICE_TOTAL","value","dsList","NO_SERVICE_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div00.form.edtNO_SERVICE_HOLIDAY","value","dsList","NO_SERVICE_HOLIDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div00.form.edtNO_SERVICE_CNT","value","dsList","NO_SERVICE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div00.form.edtNO_LABOR_CNT","value","dsList","NO_LABOR_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div00.form.edtNO_CADDIE_TOTAL","value","dsList","NO_CADDIE_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div00.form.edtNO_CADDIE_HOLIDAY","value","dsList","NO_CADDIE_HOLIDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div00.form.edtNO_CADDIE_CNT","value","dsList","NO_CADDIE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.calDT_REPORT","value","dsSearch","DT_REPORT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData01.form.edtSUM_WORK","value","dsList","SUM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData01.form.txtDS_REMARK_R","value","dsList","DS_REMARK_R");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_DAILY_DEPT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e){
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.fnReset();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Save.set_enable(true);
        	// this.FormBtns.Add.set_enable(true);
        	// this.FormBtns.Del.set_enable(true);
        	//this.FormBtns.Print.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnBtnCreate");		// 당일근태생성
        	this.btnForm = this.gfnFormButtonAdd("btnForm", "fnBtnForm");			// 관리현장등록(일인원현황)
        	//this.btnItem5 = this.gfnFormButtonAdd("btnReport6", "fnSelectRpt6");	// 레저사업장
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.calDT_REPORT = this.divSearch.form.calDT_REPORT;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;

        	this.txtDS_REMARK_R = this.divData01.form.txtDS_REMARK_R;
        	this.edtNO_SERVICE_TOTAL = this.div00.form.edtNO_SERVICE_TOTAL;
        	this.edtNO_SERVICE_HOLIDAY = this.div00.form.edtNO_SERVICE_HOLIDAY;
        	this.edtNO_SERVICE_CNT = this.div00.form.edtNO_SERVICE_CNT;
        	this.edtNO_LABOR_CNT = this.div00.form.edtNO_LABOR_CNT;
        	this.edtNO_CADDIE_TOTAL = this.div00.form.edtNO_CADDIE_TOTAL;
        	this.edtNO_CADDIE_HOLIDAY = this.div00.form.edtNO_CADDIE_HOLIDAY;
        	this.edtNO_CADDIE_CNT = this.div00.form.edtNO_CADDIE_CNT;

        	this.dxGrid = this.divData02.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_DEPT.CodeFindName = "DAX_DAILYLIST_CODE";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//기준일자
        	this.dsSearch.setColumn(0, "DT_REPORT", this.gfnGetDate());

        	//부서
        	//this.dsSearch.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        	//this.dsSearch.setColumn(0, "DS_DEPT", this.AuthClient.DS_DEPT);

        	this.gfnGridInit(this.dxGrid, this.dsList2nd, "DA", "DAC_DAILY_DEPT");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_REPORT", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("GR_USER", "string");


        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("DT_REPORT", "string");
        	this.dsSave.addColumn("DS_REMARK_R", "string");
        	this.dsSave.addColumn("NO_SERVICE_TOTAL", "bigdecimal");
        	this.dsSave.addColumn("NO_SERVICE_HOLIDAY", "bigdecimal");
        	this.dsSave.addColumn("NO_SERVICE_CNT", "bigdecimal");
        	this.dsSave.addColumn("NO_LABOR_CNT", "bigdecimal");
        	this.dsSave.addColumn("NO_CADDIE_TOTAL", "bigdecimal");
        	this.dsSave.addColumn("NO_CADDIE_HOLIDAY", "bigdecimal");
        	this.dsSave.addColumn("NO_CADDIE_CNT", "bigdecimal");
        	this.dsSave.addColumn("ID_PERSON", "bigdecimal");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("YN_WORK", "string");
        	this.dsSave.addColumn("YN_ABSENCE", "string");
        	this.dsSave.addColumn("YN_HOLIDAY", "string");
        	this.dsSave.addColumn("YN_SPECIAL", "string");
        	this.dsSave.addColumn("YN_CLOSE", "string");
        	this.dsSave.addColumn("YN_OFFICIAL", "string");
        	this.dsSave.addColumn("YN_ETC", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSearchValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "DT_REPORT", this.dsSearch.getColumn(0, "DT_REPORT"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        //세부내역
        this.fnSelect2nd = function() {

        	this.dsList2nd.clearData();

        	var strSvcId    = "select2nd";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select2nd=dsSelect";
        	var outData     = "dsList2nd=select2nd0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	if(!this.fnSearchValidate()) return false;

        	//this.txtDS_REMARK_R.set_readonly(false);  		// 비고
        	this.txtDS_REMARK_R.set_enable(true);
        	this.edtNO_SERVICE_TOTAL.set_readonly(false);
        	this.edtNO_SERVICE_HOLIDAY.set_readonly(false);
        	this.edtNO_LABOR_CNT.set_readonly(false);
        	this.edtNO_CADDIE_TOTAL.set_readonly(false);
        	this.edtNO_CADDIE_HOLIDAY.set_readonly(false);

        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList2nd.setColumn(nrow, "YN_WORK", "Y");
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        	this.gfnSetFormStatus(this, "D");
        	this.FormBtns.Save.set_enable(true);
        	if(this.dsList2nd.rowposition < 0){

        		//this.txtDS_REMARK_R.set_readonly(true);  		// 비고
        		this.txtDS_REMARK_R.set_enable(false);
        		this.edtNO_SERVICE_TOTAL.set_readonly(true);
        		this.edtNO_SERVICE_HOLIDAY.set_readonly(true);
        		this.edtNO_LABOR_CNT.set_readonly(true);
        		this.edtNO_CADDIE_TOTAL.set_readonly(true);
        		this.edtNO_CADDIE_HOLIDAY.set_readonly(true);


        		this.divData01.form.edtDT_REPORT.set_value("");
        		this.divData01.form.edtDS_STATUS.set_value("");
        		this.divData01.form.edtSUM_WORK.set_value("");
        		this.divData01.form.edtNO_WORK.set_value("");
        		this.divData01.form.edtNO_ABSENCE.set_value("");
        		this.divData01.form.edtNO_HOLIDAY.set_value("");
        		this.divData01.form.edtNO_SPECIAL.set_value("");
        		this.divData01.form.edtNO_CLOSE.set_value("");
        		this.divData01.form.edtNO_OFFICIAL.set_value("");
        		this.divData01.form.edtNO_ETC.set_value("");
        		this.divData01.form.txtDS_REMARK_R.set_value("");

        		this.edtNO_SERVICE_TOTAL.set_value("");
        		this.edtNO_SERVICE_HOLIDAY.set_value("");
        		this.edtNO_SERVICE_CNT.set_value(""); //현원
        		this.edtNO_LABOR_CNT.set_value("");
        		this.edtNO_CADDIE_TOTAL.set_value("");
        		this.edtNO_CADDIE_HOLIDAY.set_value("");
        		this.edtNO_CADDIE_CNT.set_value(""); //현원


        		this.FormBtns.Select.click();
        	}
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	for(var i=0; i < this.dsList2nd.getRowCount(); i++){
        		var flag = this.gfnGetFlag(this.dsList2nd, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":

        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.gfnNvl(this.dsList.getColumn(0, "CD_DEPT"), this.dsSearch.getColumn(0, "CD_DEPT")));
        				this.dsSave.setColumn(nrow, "DT_REPORT", this.gfnNvl(this.dsList2nd.getColumn(i, "DT_REPORT"), this.dsSearch.getColumn(0, "DT_REPORT")));
        				this.dsSave.setColumn(nrow, "DS_REMARK_R", this.dsList.getColumn(0, "DS_REMARK_R"));
        				this.dsSave.setColumn(nrow, "NO_SERVICE_TOTAL", this.dsList.getColumn(0, "NO_SERVICE_TOTAL"));
        				this.dsSave.setColumn(nrow, "NO_SERVICE_HOLIDAY", this.dsList.getColumn(0, "NO_SERVICE_HOLIDAY"));
        				this.dsSave.setColumn(nrow, "NO_SERVICE_CNT", this.dsList.getColumn(0, "NO_SERVICE_CNT"));
        				this.dsSave.setColumn(nrow, "NO_LABOR_CNT", this.dsList.getColumn(0, "NO_LABOR_CNT"));
        				this.dsSave.setColumn(nrow, "NO_CADDIE_TOTAL", this.dsList.getColumn(0, "NO_CADDIE_TOTAL"));
        				this.dsSave.setColumn(nrow, "NO_CADDIE_HOLIDAY", this.dsList.getColumn(0, "NO_CADDIE_HOLIDAY"));
        				this.dsSave.setColumn(nrow, "NO_CADDIE_CNT", this.dsList.getColumn(0, "NO_CADDIE_CNT"));
        				this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList2nd.getColumn(i, "ID_PERSON"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList2nd.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "YN_WORK", this.dsList2nd.getColumn(i, "YN_WORK"));
        				this.dsSave.setColumn(nrow, "YN_ABSENCE", this.dsList2nd.getColumn(i, "YN_ABSENCE"));
        				this.dsSave.setColumn(nrow, "YN_HOLIDAY", this.dsList2nd.getColumn(i, "YN_HOLIDAY"));
        				this.dsSave.setColumn(nrow, "YN_SPECIAL", this.dsList2nd.getColumn(i, "YN_SPECIAL"));
        				this.dsSave.setColumn(nrow, "YN_CLOSE", this.dsList2nd.getColumn(i, "YN_CLOSE"));
        				this.dsSave.setColumn(nrow, "YN_OFFICIAL", this.dsList2nd.getColumn(i, "YN_OFFICIAL"));
        				this.dsSave.setColumn(nrow, "YN_ETC", this.dsList2nd.getColumn(i, "YN_ETC"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList2nd.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSave.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        				break;
        		}
        	}

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsOutPut=save0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        };


        this.SaveSingle = function() {

        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	// 상단 싱글폼 저장
        	this.dsSave.setColumn(0, "TY_SAVE", "U");
        	this.dsSave.setColumn(0, "CD_DEPT", this.gfnNvl(this.dsList.getColumn(0, "CD_DEPT"), this.dsSearch.getColumn(0, "CD_DEPT")));
        	this.dsSave.setColumn(0, "DT_REPORT", this.gfnNvl(this.dsList.getColumn(0, "DT_REPORT"), this.dsSearch.getColumn(0, "DT_REPORT")));
        	this.dsSave.setColumn(0, "DS_REMARK_R", this.dsList.getColumn(0, "DS_REMARK_R"));
        	this.dsSave.setColumn(0, "NO_SERVICE_TOTAL", this.dsList.getColumn(0, "NO_SERVICE_TOTAL"));
        	this.dsSave.setColumn(0, "NO_SERVICE_HOLIDAY", this.dsList.getColumn(0, "NO_SERVICE_HOLIDAY"));
        	this.dsSave.setColumn(0, "NO_SERVICE_CNT", this.dsList.getColumn(0, "NO_SERVICE_CNT"));
        	this.dsSave.setColumn(0, "NO_LABOR_CNT", this.dsList.getColumn(0, "NO_LABOR_CNT"));
        	this.dsSave.setColumn(0, "NO_CADDIE_TOTAL", this.dsList.getColumn(0, "NO_CADDIE_TOTAL"));
        	this.dsSave.setColumn(0, "NO_CADDIE_HOLIDAY", this.dsList.getColumn(0, "NO_CADDIE_HOLIDAY"));
        	this.dsSave.setColumn(0, "NO_CADDIE_CNT", this.dsList.getColumn(0, "NO_CADDIE_CNT"));
        	this.dsSave.setColumn(0, "ID_PERSON", this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsSave.setColumn(0, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(0, "YN_WORK", this.dsList.getColumn(0, "YN_WORK"));
        	this.dsSave.setColumn(0, "YN_ABSENCE", this.dsList.getColumn(0, "YN_ABSENCE"));
        	this.dsSave.setColumn(0, "YN_HOLIDAY", this.dsList.getColumn(0, "YN_HOLIDAY"));
        	this.dsSave.setColumn(0, "YN_SPECIAL", this.dsList.getColumn(0, "YN_SPECIAL"));
        	this.dsSave.setColumn(0, "YN_CLOSE", this.dsList.getColumn(0, "YN_CLOSE"));
        	this.dsSave.setColumn(0, "YN_OFFICIAL", this.dsList.getColumn(0, "YN_OFFICIAL"));
        	this.dsSave.setColumn(0, "YN_ETC", this.dsList.getColumn(0, "YN_ETC"));
        	this.dsSave.setColumn(0, "DS_REMARK_R", this.dsList.getColumn(0, "DS_REMARK_R"));
        	this.dsSave.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSave.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);


        	var strSvcId    = "savesingle";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);

        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        	this.fnSelectRpt("6");
        };
        /*
         *	리셋
         */
        this.fnReset = function() {

        	this.dsSearch.clearData();
        	var nrow = this.dsSearch.addRow();

        	var today = this.gfnGetDate();
        	this.calDT_REPORT.set_value(today);

        	//var CD_DEPT_MST = "11220";
        	//var DS_DEPT_MST = "전산실";

        	var CD_DEPT_MST;
        	var DS_DEPT_MST;

        	if (this.gfnIsNull(this.AuthClient.CD_DEPT_MST) == true) {
        		CD_DEPT_MST = (this.AuthClient.CD_DEPT).substring(1,5);
        		DS_DEPT_MST = this.AuthClient.DS_DEPT;
        	} else {
        		CD_DEPT_MST = this.AuthClient.CD_DEPT_MST;
        		DS_DEPT_MST = this.AuthClient.DS_DEPT_MST;
        	}

        	this.ccfCD_DEPT.form.CDTextBox.set_value(CD_DEPT_MST);
        	this.ccfCD_DEPT.form.DSTextBox.set_value(DS_DEPT_MST);
        	this.ccfCD_DEPT.form.CDTextBox_onchanged();


        	this.FormBtns.Select.click();
        };

        // 당일근태생성
        this.fnBtnCreate = function() {
        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DT_REPORT")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))){
        		var strSvcId    = "selectCreate";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "selectCreate=dsSearch";
        		var outData     = "dsListCreate=selectCreate0";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// trabsaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
         	} else {
         		this.gfnAlert("일별 인원 근태를 먼저 조회하세요.", "");
         	}
        };

        // 일인원현황
        this.fnBtnForm = function() {
        	if(this.dsList.getRowCount() > 0) {
        		var param = {};

        		param.CD_DEPT = this.ccfCD_DEPT.form.CDTextBox.value;
        		param.DS_DEPT = this.ccfCD_DEPT.form.DSTextBox.value;
        		param.DT_REPORT = this.calDT_REPORT.value;

        		this.gfnFormOpen("DAC", "DAC_DAILYMANAGE", "fnFormButton_callback", param);
        	}
        };

        this.fnFormButton_callback = function(svcID, val) {
        		this.FormBtns.Select.click();
        };

        /************************************************************************
         * Validate
         ************************************************************************/
         this.fnSearchValidate = function(){
        	if(this.gfnIsNull(this.calDT_REPORT.value)){
        		this.fnAlertCallback = function() {
        			this.ctclDT_REPORT.setFocus();
        		}
        		this.gfnAlert("일자를 입력하세요.", "fnAlertCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.value)){
        		this.fnAlertCallback = function() {
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("조회 부서를 입력하세요.", "fnAlertCallback");
        		return false;
        	}

        	return true;
         };

        /************************************************************************
         * 콜백 이벤트
         ***********************************************************************
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	if (errorCode == 0) {
        	} else {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	if (svcID == "select") {
        		var readOnly = true;
        		if(this.dsList.getRowCount() > 0){
        			this.FormBtns.Print.set_enable(true); // 출력버튼

        			if(this.dsList.getColumn(0, "TY_STATUS") == "2"){
        				readOnly = true;
        			}else{
        				readOnly = false;
        			}
        			this.fnSetButton();
        		}else{
        			this.dsList.set_enableevent(false);
        			this.dsList.addRow();
        			this.dsList.set_enableevent(true);
        			readOnly = true;
        		}

        		//this.txtDS_REMARK_R.set_readonly(readOnly);
        		this.txtDS_REMARK_R.set_enable(!readOnly);
        		this.edtNO_SERVICE_TOTAL.set_readonly(readOnly);
        		this.edtNO_SERVICE_HOLIDAY.set_readonly(readOnly);
        		//this.edtNO_SERVICE_CNT.set_readonly(readOnly); //현원
        		this.edtNO_LABOR_CNT.set_readonly(readOnly);
        		this.edtNO_CADDIE_TOTAL.set_readonly(readOnly);
        		this.edtNO_CADDIE_HOLIDAY.set_readonly(readOnly);
        		//this.edtNO_CADDIE_CNT.set_readonly(readOnly); //현원

        		this.fnSelect2nd();

        	} else if (svcID == "select2nd") {
        		if(this.dsList.getColumn(0, "TY_STATUS") == "2"){
        			this.FormBtns.Save.set_enable(false);
        			this.FormBtns.Add.set_enable(false);
        			this.FormBtns.Del.set_enable(false);
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_WORK"),"edittype","none");
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_ABSENCE"),"edittype","none");
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_HOLIDAY"),"edittype","none");
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_SPECIAL"),"edittype","none");
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_CLOSE"),"edittype","none");
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_OFFICIAL"),"edittype","none");
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_ETC"),"edittype","none");
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","DS_REMARK"),"edittype","none");
        		} else {
        			this.FormBtns.Save.set_enable(false);
        			this.FormBtns.Add.set_enable(true);
        			this.FormBtns.Del.set_enable(true);
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_WORK"),"edittype","checkbox");
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_ABSENCE"),"edittype","checkbox");
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_HOLIDAY"),"edittype","checkbox");
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_SPECIAL"),"edittype","checkbox");
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_CLOSE"),"edittype","checkbox");
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_OFFICIAL"),"edittype","checkbox");
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_ETC"),"edittype","checkbox");
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","DS_REMARK"),"edittype","text");
        		}
        		//this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CHK"), "edittype", "expr:TY_STATUS == 2?'none':'checkbox'");

        	} else if (svcID == "selectCreate") {

        		if(this.dsListCreate.getRowCount() > 0){
        			for(var i = 0; i < this.dsListCreate.getRowCount(); i++){
        				var nrow = this.dsList2nd.addRow();
        				this.dsList2nd.copyRow(nrow, this.dsListCreate, i);

        				this.dsList2nd.setColumn(nrow, this.ucFlag, "I");
        			}
        			//this.txtDS_REMARK_R.set_readonly(false);
        			this.txtDS_REMARK_R.set_enable(true);
        			this.edtNO_SERVICE_TOTAL.set_readonly(false);
        			this.edtNO_SERVICE_HOLIDAY.set_readonly(false);
        			this.edtNO_LABOR_CNT.set_readonly(false);
        			this.edtNO_CADDIE_TOTAL.set_readonly(false);
        			this.edtNO_CADDIE_HOLIDAY.set_readonly(false);
        		}
        	} else if (svcID == "save") { //그리드 저장
        		if(errorCode == 0 ){
        // 			if(this.dsOutput.getColumn(0, "YN_FLAG") == "Y") {
        // 				this.SaveSingle();
        // 			}
        			this.SaveSingle();

        		}else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "savesingle") { //상단 싱글폼 저장
        		if(errorCode == 0 ){
        			this.fnSelect();
        			this.fnSelect2nd();
        		}else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id) {
        		case "ccfCD_DEPT":
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);	// 로그인 권한
        			dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);	// 로그인 부서
        			dsUserParam.setColumn(nrow, "ID_LOGIN", this.AuthClient.ID_USER);	// 로그인 사번
        		break;

        		default:
        	}

        	return true;
        };

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	switch(id) {
        		case "DAX_CFBASEINFO":
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;

        		default:
        	}

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id){
        		case "ccfCD_DEPT" :
        			var YN_SITE = "N";
        			var YN_LEISURE = "N";

        			if(!this.gfnIsNull(arr)) {
        				YN_SITE = arr[0]["YN_SITE"];
        				YN_LEISURE = arr[0]["YN_LEISURE"];

        				this.FormBtns.Select.click();
        			}

        			var bEnable1 = (YN_SITE == "Y") ?  true : false;
        			var bEnable2 = (YN_LEISURE == "Y") ?  true : false;
        			trace("YN_SITE->" + YN_SITE + " / "  + bEnable1+ "\n YN_LEISURE->" + YN_LEISURE + " / "  + bEnable2);

        			// 관리현장 유무 확인 후 작업버튼(관리현장등록)ENABLE 처리
        			this.btnForm.set_enable(bEnable1);		// 관리현장등록(일인원현황)

        			//this.btnItem5.set_enable(bEnable2);		// 레저사업장
        			// this.btnForm.set_visible(true);

        		break;
        	}

        }

        /************************************************************************
         * 그리드 이벤트
         *************************************************************************/
         this.divData02_objGrid_oncellclick = function(obj,e)
        {
        	if(e.clickitem == "control") {
        		for(var i = 0; i < this.dxGrid.getCellCount("body"); i++) {
        			if(this.divData02.form.objGrid.getCellProperty("body", i , "edittype") == "checkbox") {
        				if(e.col != i) {
        					this.dsList2nd.setColumn(e.row, this.gfnGridGetBindColumnNameByIndex( this.dxGrid, i), "N");
        				}
        			}
        		}
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		this.dsList.clearData();
        	}
        };

        this.dsList2nd_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        };

        this.fnClose = function(){
        	this.close();
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        	if(!this.gfnIsNull(e) && e.oldvalue != e.newvalue){
        		if(e.columnid == "NO_SERVICE_TOTAL"){
        			if(!this.gfnIsNull(obj.getColumn(0, "NO_SERVICE_HOLIDAY"))){
        				this.dsList.setColumn(0, "NO_SERVICE_CNT", (e.newvalue - obj.getColumn(0, "NO_SERVICE_HOLIDAY")));
        			}
        		}else if(e.columnid == "NO_SERVICE_HOLIDAY"){
        			if(!this.gfnIsNull(obj.getColumn(0, "NO_SERVICE_TOTAL"))){
        				this.dsList.setColumn(0, "NO_SERVICE_CNT", (obj.getColumn(0, "NO_SERVICE_TOTAL") - e.newvalue));
        			}
        		}else if(e.columnid == "NO_CADDIE_TOTAL"){
        			if(!this.gfnIsNull(obj.getColumn(0, "NO_CADDIE_HOLIDAY"))){
        				this.dsList.setColumn(0, "NO_CADDIE_CNT", (e.newvalue - obj.getColumn(0, "NO_CADDIE_HOLIDAY")));
        			}
        		}else if(e.columnid == "NO_CADDIE_HOLIDAY"){
        			if(!this.gfnIsNull(obj.getColumn(0, "NO_CADDIE_TOTAL"))){
        				this.dsList.setColumn(0, "NO_CADDIE_CNT", (obj.getColumn(0, "NO_CADDIE_TOTAL") - e.newvalue));
        			}
        		}
        	}
        };

        this.div00_edit_onkeydown = function(obj,e)
        {
        	//trace("div00_edit_onkeydown >>"+obj.name+"   e.keycode :"+e.keycode );
        	if(e.keycode == "13"){
        		if(obj.name == "edtNO_SERVICE_TOTAL"){
        			this.edtNO_SERVICE_HOLIDAY.setFocus();
        		}else if(obj.name == "edtNO_SERVICE_HOLIDAY"){
        			this.edtNO_LABOR_CNT.setFocus();
        		}else if(obj.name == "edtNO_LABOR_CNT"){
        			this.edtNO_CADDIE_TOTAL.setFocus();
        		}else if(obj.name == "edtNO_CADDIE_TOTAL"){
        			this.edtNO_CADDIE_HOLIDAY.setFocus();
        		}
        	}
        };

        // 리포트 출력 전체
        this.fnSelectRpt = function(TY_REPORT) {

        	this.dsSelectRpt = new Dataset();
        	this.dsSelectRpt.addColumn("DT_REPORT", "string");	    // 일자
        	this.dsSelectRpt.addColumn("ID_LOGIN", "string"); 	    // 출력자
        	this.dsSelectRpt.addColumn("CD_DEPT", "string"); 	    // 부서
        	this.dsSelectRpt.addColumn("TY_VIEW", "string"); 	    // 레포트구분

        	var nrow = this.dsSelectRpt.addRow();

        	var DT_REPORT = this.dsSearch.getColumn(0,"DT_REPORT");
        	if(this.gfnIsNull(DT_REPORT)){
        		this.gfnAlert("기준일자는 반드시 입력 하셔야 합니다");
        		return false;
        	}

        	var CD_DEPT = this.dsSearch.getColumn(0,"CD_DEPT");
        	if(this.gfnIsNull(DT_REPORT)){
        		this.gfnAlert("부서는 반드시 입력 하셔야 합니다");
        		return false;
        	}

        	this.dsSelectRpt.setColumn(nrow, "DT_REPORT", DT_REPORT);
        	this.dsSelectRpt.setColumn(nrow, "ID_LOGIN", this.AuthClient.ID_USER);
        	this.dsSelectRpt.setColumn(nrow, "CD_DEPT", CD_DEPT);

        	this.dsReportParam.setColumn(0, "DT_REPORT", DT_REPORT);
        	this.dsReportParam.setColumn(0, "TY_VIEW", this.gfnNvl(TY_REPORT, "1"));
        	this.dsReportParam.setColumn(0, "CD_DEPT", CD_DEPT);

        	var inProc		= "_dsProc";
        	var inParam 	= "params=dsReportParam";
        	var inData      = "report2=dsSelectRpt report3=dsSelectRpt report4=dsSelectRpt report5=dsSelectRpt report6=dsSelectRpt";
        	//var inData      = "report6=dsSelectRpt";
        	var reportpath  = "/da/dac/DAC_DAILY_REPORT.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }

        /*
        // 레저사업장 인원현황 RPT (1. 요약보고)
        this.fnSelectRpt6 = function() {
        	this.fnSelectRpt("6");
        	// DACPR_DAILY_REPORT6
        }
        */

        var SingleFlag;
        // 비고
        this.divData01_txtDS_REMARK_R_oninput = function(obj,e)
        {
        	this.SingleFormButton();
        };
        // 용역 총원
        this.div00_edtNO_SERVICE_TOTAL_onchanged = function(obj,e)
        {
        	this.SingleFormButton();
        };

        // 용역 휴무
        this.div00_edtNO_SERVICE_HOLIDAY_onchanged = function(obj,e)
        {
        	SingleFlag == "Y";
        	this.SingleFormButton();
        }
        // 출역 총원
        this.div00_edtNO_LABOR_CNT_onchanged = function(obj,e)
        {
        	SingleFlag == "Y";
        	this.SingleFormButton();
        };
        // 캐디 총원
        this.div00_edtNO_CADDIE_TOTAL_onchanged = function(obj,e)
        {
        	SingleFlag == "Y";
        	this.SingleFormButton();
        };
        // 캐디 휴무
        this.div00_edtNO_CADDIE_HOLIDAY_onchanged = function(obj,e)
        {
        	SingleFlag == "Y";
        	this.SingleFormButton();
        };

        this.SingleFormButton = function ()
        {
        	this.FormBtns.Add.set_enable(true);
        	this.FormBtns.Del.set_enable(true);
        	this.FormBtns.Save.set_enable(true);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData01.form.sta32.addEventHandler("onclick",this.divData01_sta32_onclick,this);
            this.divData01.form.txtDS_REMARK_R.addEventHandler("oninput",this.divData01_txtDS_REMARK_R_oninput,this);
            this.div00.form.edtNO_SERVICE_TOTAL.addEventHandler("onkeydown",this.div00_edit_onkeydown,this);
            this.div00.form.edtNO_SERVICE_TOTAL.addEventHandler("onchanged",this.div00_edtNO_SERVICE_TOTAL_onchanged,this);
            this.div00.form.edtNO_SERVICE_HOLIDAY.addEventHandler("onkeydown",this.div00_edit_onkeydown,this);
            this.div00.form.edtNO_SERVICE_HOLIDAY.addEventHandler("onchanged",this.div00_edtNO_SERVICE_HOLIDAY_onchanged,this);
            this.div00.form.edtNO_LABOR_CNT.addEventHandler("onkeydown",this.div00_edit_onkeydown,this);
            this.div00.form.edtNO_LABOR_CNT.addEventHandler("onchanged",this.div00_edtNO_LABOR_CNT_onchanged,this);
            this.div00.form.edtNO_CADDIE_TOTAL.addEventHandler("onkeydown",this.div00_edit_onkeydown,this);
            this.div00.form.edtNO_CADDIE_TOTAL.addEventHandler("onchanged",this.div00_edtNO_CADDIE_TOTAL_onchanged,this);
            this.div00.form.edtNO_CADDIE_HOLIDAY.addEventHandler("onchanged",this.div00_edtNO_CADDIE_HOLIDAY_onchanged,this);
            this.divData02.form.objGrid.addEventHandler("oncellclick",this.divData02_objGrid_oncellclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList2nd.addEventHandler("onvaluechanged",this.dsList2nd_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_DAILY_DEPT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
