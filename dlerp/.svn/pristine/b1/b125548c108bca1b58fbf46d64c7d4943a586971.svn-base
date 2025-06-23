(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAC_DAILY_LISTDETAIL");
            this.set_titletext("인원현황관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList1", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ABSENCE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HOLIDAY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SPECIAL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICIAL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SERVICE_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SERVICE_HOLIDAY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SERVICE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_LABOR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CADDIE_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CADDIE_HOLIDAY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CADDIE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK_R\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DACPR_DAILYLIST_SELECT_D01</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DACPR_DAILYLIST_SELECT_D02</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DACPR_DAILYLIST_SELECT_D03</Col></Row><Row><Col id=\"TARGET\">save1</Col><Col id=\"SP\">DACPR_DAILYLIST_SAVE_D01</Col></Row><Row><Col id=\"TARGET\">save2</Col><Col id=\"SP\">DACPR_DAILYLIST_SAVE_D02</Col></Row><Row><Col id=\"TARGET\">save3</Col><Col id=\"SP\">DACPR_DAILYLIST_SAVE_D03</Col></Row><Row><Col id=\"TARGET\">saveApproval</Col><Col id=\"SP\">DACPR_DAILYLIST_APPROVAL</Col></Row><Row><Col id=\"TARGET\">report2</Col><Col id=\"SP\">DACPR_DAILY_REPORT2</Col></Row><Row><Col id=\"TARGET\">report3</Col><Col id=\"SP\">DACPR_DAILY_REPORT3</Col></Row><Row><Col id=\"TARGET\">report4</Col><Col id=\"SP\">DACPR_DAILY_REPORT4</Col></Row><Row><Col id=\"TARGET\">report5</Col><Col id=\"SP\">DACPR_DAILY_REPORT5</Col></Row><Row><Col id=\"TARGET\">report6</Col><Col id=\"SP\">DACPR_DAILY_REPORT7</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_REPORT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApproval", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReportParam", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VIEW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_REPORT","0","61","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","99","61","207","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","sta14:-1","61","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","0","90","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("총인원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","99","90","484","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","0","119","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("근무");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","99","119","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","168","119","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("결근");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","237","119","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","306","119","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("연차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","375","119","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta16","444","119","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("특별");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","513","119","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","0","148","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("휴무");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","99","148","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta20","168","148","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("공가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21","237","148","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta30","306","148","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta31","375","148","208","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta33","sta06:-1","61","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta34","582","32","100","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta35","679","32","484","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDT_REPORT","105","66","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtSUM_WORK","105","95","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_STATUS","378","66","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_WORK","105","124","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_ABSENCE","243","124","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_HOLIDAY","381","124","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_SPECIAL","519","124","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_CLOSE","105","154","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_OFFICIAL","243","154","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_ETC","381","153","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK_R","685","40","472","45",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT","0","32","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta37","99","32","484","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_DEPT","106","37","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave1",null,"9","47","20","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_text("저장");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta32","0","0",null,"22","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("인원현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta43","586","151","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_text("[골프장만 입력]");
            obj.set_textAlign("right");
            obj.set_color("crimson");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","663","122","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("출역인원 : ");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","sta43:-13","149","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_text("캐디인원 : ");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23","748","91","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("총원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta26","sta23:-1","91","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta24","sta26:-1","91","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("휴무");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta27","sta24:-1","91","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta25","sta27:-1","91","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("현원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta28","sta25:-1","91","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","sta01:5","120","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("총원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta29","sta22:-1","120","346","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_SERVICE_TOTAL","sta23:5","96","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_readonly("false");
            obj.set_inputfilter("none");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_SERVICE_HOLIDAY","sta24:5","96","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_inputfilter("none");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_SERVICE_CNT","sta25:5","96","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_inputfilter("none");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_LABOR_CNT","sta22:5","125","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","sta02:5","149","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_text("총원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta38","sta04:-1","149","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta39","sta38:-1","149","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_text("휴무");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta40","sta39:-1","149","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta41","sta40:-1","149","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_text("현원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta42","sta41:-1","149","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_CADDIE_TOTAL","sta04:5","154","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_readonly("false");
            obj.set_inputfilter("none");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_CADDIE_HOLIDAY","sta39:5","154","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_readonly("false");
            obj.set_inputfilter("none");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_CADDIE_CNT","sta41:5","154","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_readonly("true");
            obj.set_inputfilter("none");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","0","sta18:20",null,"22","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_text("세부내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","sta05:10",null,"310","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_binddataset("dsList2");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta36","0","objGrid2:10",null,"22","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_text("인원현황등록(관리현장)");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave2",null,"205","47","20","50",null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_text("저장");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDel2",null,"205","47","20","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_text("삭제");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","586","121","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_text("[현장만 입력]");
            obj.set_textAlign("right");
            obj.set_color("crimson");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","660","93","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_text("용역인원 :");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","0","sta36:10",null,"130","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_binddataset("dsList3");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel3",null,"objGrid2:18","47","20","50",null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_text("삭제");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave3",null,"objGrid2:18","47","20","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_text("저장");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtNO_SERVICE_TOTAL","value","dsList1","NO_SERVICE_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtNO_SERVICE_HOLIDAY","value","dsList1","NO_SERVICE_HOLIDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtNO_SERVICE_CNT","value","dsList1","NO_SERVICE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtNO_LABOR_CNT","value","dsList1","NO_LABOR_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtSUM_WORK","value","dsList1","NO_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtDS_STATUS","value","dsList1","DS_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtNO_WORK","value","dsList1","NO_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtNO_ABSENCE","value","dsList1","NO_ABSENCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtNO_HOLIDAY","value","dsList1","NO_HOLIDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.edtNO_SPECIAL","value","dsList1","NO_SPECIAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.edtNO_CLOSE","value","dsList1","NO_CLOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.edtNO_OFFICIAL","value","dsList1","NO_OFFICIAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.edtNO_ETC","value","dsList1","NO_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.txtDS_REMARK_R","value","dsList1","DS_REMARK_R");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.edtDS_DEPT","value","dsList1","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.edtNO_CADDIE_TOTAL","value","dsList1","NO_CADDIE_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.edtNO_CADDIE_HOLIDAY","value","dsList1","NO_CADDIE_HOLIDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.edtNO_CADDIE_CNT","value","dsList1","NO_CADDIE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAC_DAILY_LISTDETAIL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DAC_DAILY_DEPT_onload = function(obj,e){
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.fnSelect1();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);

        	if (this.dsList2.getRowCount() <= 0){
        		this.divData.form.btnSave2.set_enable(false);
        		this.divData.form.btnDel2.set_enable(false);
        	} else {
        		if(this.dsList1.getColumn(0, "TY_STATUS") == "2") {
        			this.divData.form.btnSave2.set_enable(false);
        			this.divData.form.btnDel2.set_enable(false);
        		} else {
        			this.divData.form.btnSave2.set_enable(true);
        			this.divData.form.btnDel2.set_enable(true);
        		}
        	}

        	if (this.dsList3.getRowCount() <= 0){
        		this.divData.form.btnSave3.set_enable(false);
        	} else {
        		if(this.dsList1.getColumn(0, "TY_STATUS") == "2") {
        			this.divData.form.btnSave3.set_enable(false);
        		} else {
        			this.divData.form.btnSave3.set_enable(true);
        		}
        	}
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnApproval = this.gfnFormButtonAdd("Approval", "fnApprovalChk", "승인");
        	this.btnApprovalCancel = this.gfnFormButtonAdd("ApprovalCancel", "fnApprovalCancelChk", "승인취소");

        	this.btnApproval.set_enable(false);
        	this.btnApprovalCancel.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.dxGrid2 = this.divData.form.objGrid2;
        	this.dxGrid3 = this.divData.form.objGrid3;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DA", "DAC_DAILY_LISTDETAIL");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DA", "DAC_DAILY_LISTMNG");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_REPORT", "string"); //일자
        	this.dsSelect.addColumn("TY_DEPT", "string");  	//조직분류
        	this.dsSelect.addColumn("CD_DEPT", "string");  	//부서
        	this.dsSelect.addColumn("GR_SEARCH", "string"); //로그인 권한
        	this.dsSelect.addColumn("GR_DEPT", "string");  	//로그인 부서
        	this.dsSelect.addColumn("GR_USER", "string");  	//로그인 ID

        	//세부내역 저장
        	this.dsSave2 = new Dataset();
        	this.dsSave2.addColumn("TY_SAVE", "string");
        	this.dsSave2.addColumn("CD_DEPT", "string");
        	this.dsSave2.addColumn("DT_REPORT", "string");
        	this.dsSave2.addColumn("ID_PERSON", "bigdecimal");
        	this.dsSave2.addColumn("ID_SABUN", "string");
        	this.dsSave2.addColumn("YN_WORK", "string");
        	this.dsSave2.addColumn("YN_ABSENCE", "string");
        	this.dsSave2.addColumn("YN_HOLIDAY", "string");
        	this.dsSave2.addColumn("YN_SPECIAL", "string");
        	this.dsSave2.addColumn("YN_CLOSE", "string");
        	this.dsSave2.addColumn("YN_OFFICIAL", "string");
        	this.dsSave2.addColumn("YN_ETC", "string");
        	this.dsSave2.addColumn("DS_REMARK", "string");
        	this.dsSave2.addColumn("ID_INSERT", "string");
        	this.dsSave2.addColumn("GR_SEARCH", "string");
        	this.dsSave2.addColumn("GR_DEPT", "string");

        	//인원현황 등록(인사)
        	this.dsSave3 = new Dataset();
        	this.dsSave3.addColumn("TY_SAVE", "string");
        	this.dsSave3.addColumn("CD_DEPT", "string");
        	this.dsSave3.addColumn("DT_REPORT", "string");
        	this.dsSave3.addColumn("CD_DEPT_REGISTER", "string");
        	this.dsSave3.addColumn("NO_OFFICER", "bigdecimal");
        	this.dsSave3.addColumn("NO_REGULAR", "bigdecimal");
        	this.dsSave3.addColumn("NO_CONTRACT", "bigdecimal");
        	this.dsSave3.addColumn("NO_WORK", "bigdecimal");
        	this.dsSave3.addColumn("NO_ABSENCE", "bigdecimal");
        	this.dsSave3.addColumn("NO_HOLIDAY", "bigdecimal");
        	this.dsSave3.addColumn("NO_SPECIAL", "bigdecimal");
        	this.dsSave3.addColumn("NO_CLOSE", "bigdecimal");
        	this.dsSave3.addColumn("NO_OFFICIAL", "bigdecimal");
        	this.dsSave3.addColumn("NO_ETC", "bigdecimal");
        	this.dsSave3.addColumn("NO_SERVICE_TOTAL", "bigdecimal");
        	this.dsSave3.addColumn("NO_SERVICE_HOLIDAY", "bigdecimal");
        	this.dsSave3.addColumn("NO_SERVICE_CNT", "bigdecimal"); // 20200302 컬럼추가
        	this.dsSave3.addColumn("NO_LABOR_CNT", "bigdecimal"); // 20200302 컬럼추가
        	this.dsSave3.addColumn("NO_CADDIE_TOTAL", "bigdecimal");
        	this.dsSave3.addColumn("NO_CADDIE_HOLIDAY", "bigdecimal");
        	this.dsSave3.addColumn("NO_CADDIE_CNT", "bigdecimal"); // 20200302 컬럼추가
        	this.dsSave3.addColumn("DS_REMARK", "string");
        	this.dsSave3.addColumn("ID_INSERT", "string");
        	this.dsSave3.addColumn("GR_SEARCH", "string");
        	this.dsSave3.addColumn("GR_DEPT", "string");

        	//승인
        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("TY_APPROVAL", "string");
        	this.dsApproval.addColumn("CD_DEPT", "string");
        	this.dsApproval.addColumn("DT_REPORT", "string");
        	this.dsApproval.addColumn("TY_DEPT", "string");
        	this.dsApproval.addColumn("GR_SEARCH", "string");
        	this.dsApproval.addColumn("GR_DEPT", "string");
        	this.dsApproval.addColumn("GR_USER", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
         this.fnSelect = function() {
        	this.fnSelect1();
        	this.fnSelect2();
        	this.fnSelect3();
         };

        //인원현황
        this.fnSelect1 = function() {

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "DT_REPORT", this.getOwnerFrame().DT_REPORT);	// 일자
        	this.dsSelect.setColumn(0, "TY_DEPT", 	this.getOwnerFrame().TY_DEPT);		// 조직분류
        	this.dsSelect.setColumn(0, "CD_DEPT", 	this.getOwnerFrame().CD_DEPT);  	// 부서
        	this.dsSelect.setColumn(0, "GR_SEARCH",	this.getOwnerFrame().GR_SEARCH); //로그인 권한
        	this.dsSelect.setColumn(0, "GR_DEPT", 	this.getOwnerFrame().GR_DEPT);  	//로그인 부서
        	this.dsSelect.setColumn(0, "GR_USER", 	this.getOwnerFrame().GR_USER);  	//로그인 ID

        	var strSvcId    = "select1";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select1=dsSelect";
        	var outData     = "dsList1=select10";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //세부내역
        this.fnSelect2 = function() {

        	var strSvcId    = "select2";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select2=dsSelect";
        	var outData     = "dsList2=select20";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //인원현황등록(인사)
        this.fnSelect3 = function() {

        	var strSvcId    = "select3";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select3=dsSelect";
        	var outData     = "dsList3=select30";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        //인원현황 저장
        this.fnSave1 = function() {

        	if(this.dsList1.getColumn(0, "TY_SAVE") != "U") {
        		this.gfnAlert("변경된 내역이 없습니다.");
        		return;
        	}

        	trace("저장 : "+this.dsList1.saveXML());
        	var strSvcId    = "save1";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "save1=dsList1";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //세부내역 저장
        this.fnSave2 = function() {

        	this.dxGrid2.updateToDataset();

        	this.dsSave2.clearData();

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		if(this.dsList2.getColumn(i, "CHK") == "Y"){
        			var flag = this.gfnGetFlag(this.dsList2, i);
        			switch(flag) {
        				case "I":
        				case "U":
        				case "D":
        					var nrow = this.dsSave2.addRow();
        					this.dsSave2.setColumn(nrow, "TY_SAVE", flag);
        					this.dsSave2.setColumn(nrow, "CD_DEPT", this.dsList2.getColumn(i, "CD_DEPT"));
        					this.dsSave2.setColumn(nrow, "DT_REPORT", this.dsList2.getColumn(i, "DT_REPORT"));
        					this.dsSave2.setColumn(nrow, "ID_PERSON", this.dsList2.getColumn(i, "ID_PERSON"));
        					this.dsSave2.setColumn(nrow, "ID_SABUN", this.dsList2.getColumn(i, "ID_SABUN"));
        					this.dsSave2.setColumn(nrow, "YN_WORK", this.dsList2.getColumn(i, "YN_WORK"));
        					this.dsSave2.setColumn(nrow, "YN_ABSENCE", this.dsList2.getColumn(i, "YN_ABSENCE"));
        					this.dsSave2.setColumn(nrow, "YN_HOLIDAY", this.dsList2.getColumn(i, "YN_HOLIDAY"));
        					this.dsSave2.setColumn(nrow, "YN_SPECIAL", this.dsList2.getColumn(i, "YN_SPECIAL"));
        					this.dsSave2.setColumn(nrow, "YN_CLOSE", this.dsList2.getColumn(i, "YN_CLOSE"));
        					this.dsSave2.setColumn(nrow, "YN_OFFICIAL", this.dsList2.getColumn(i, "YN_OFFICIAL"));
        					this.dsSave2.setColumn(nrow, "YN_ETC", this.dsList2.getColumn(i, "YN_ETC"));
        					this.dsSave2.setColumn(nrow, "DS_REMARK", this.dsList2.getColumn(i, "DS_REMARK"));
        					this.dsSave2.setColumn(nrow, "ID_INSERT", this.getOwnerFrame().GR_USER);
        					this.dsSave2.setColumn(nrow, "GR_SEARCH", this.getOwnerFrame().GR_SEARCH);
        					this.dsSave2.setColumn(nrow, "GR_DEPT", this.getOwnerFrame().GR_DEPT);
        					this.dsSave2.setColumn(nrow, "ID_USER", this.getOwnerFrame().GR_USER);

        					break;
        			}
        		}
        	}

        	var strSvcId    = "save2";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "save2=dsSave2";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //인원현황등록(인사) 저장
        this.fnSave3 = function() {
        	this.dxGrid3.updateToDataset();

        	this.dsSave3.clearData();

        	for (var i = 0; i < this.dsList3.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList3, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave3.addRow();
        				this.dsSave3.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave3.setColumn(nrow, "CD_DEPT", this.dsList3.getColumn(i, "CD_DEPT"));
        				this.dsSave3.setColumn(nrow, "DT_REPORT", this.dsList3.getColumn(i, "DT_REPORT"));
        				this.dsSave3.setColumn(nrow, "CD_DEPT_REGISTER", this.dsList3.getColumn(i, "CD_DEPT_REGISTER"));
        				this.dsSave3.setColumn(nrow, "NO_OFFICER", this.dsList3.getColumn(i, "NO_OFFICER"));
        				this.dsSave3.setColumn(nrow, "NO_REGULAR", this.dsList3.getColumn(i, "NO_REGULAR"));
        				this.dsSave3.setColumn(nrow, "NO_CONTRACT", this.dsList3.getColumn(i, "NO_CONTRACT"));
        				this.dsSave3.setColumn(nrow, "NO_WORK", this.dsList3.getColumn(i, "NO_WORK"));
        				this.dsSave3.setColumn(nrow, "NO_ABSENCE", this.dsList3.getColumn(i, "NO_ABSENCE"));
        				this.dsSave3.setColumn(nrow, "NO_HOLIDAY", this.dsList3.getColumn(i, "NO_HOLIDAY"));
        				this.dsSave3.setColumn(nrow, "NO_SPECIAL", this.dsList3.getColumn(i, "NO_SPECIAL"));
        				this.dsSave3.setColumn(nrow, "NO_CLOSE", this.dsList3.getColumn(i, "NO_CLOSE"));
        				this.dsSave3.setColumn(nrow, "NO_OFFICIAL", this.dsList3.getColumn(i, "NO_OFFICIAL"));
        				this.dsSave3.setColumn(nrow, "NO_ETC", this.dsList3.getColumn(i, "NO_ETC"));
        				this.dsSave3.setColumn(nrow, "NO_SERVICE_TOTAL", this.dsList3.getColumn(i, "NO_SERVICE_TOTAL"));
        				this.dsSave3.setColumn(nrow, "NO_SERVICE_HOLIDAY", this.dsList3.getColumn(i, "NO_SERVICE_HOLIDAY"));
        				this.dsSave3.setColumn(nrow, "NO_SERVICE_CNT", this.dsList3.getColumn(i, "NO_SERVICE_CNT"));
        				this.dsSave3.setColumn(nrow, "NO_LABOR_CNT", this.dsList3.getColumn(i, "NO_LABOR_CNT"));
        				this.dsSave3.setColumn(nrow, "NO_CADDIE_TOTAL", this.dsList3.getColumn(i, "NO_CADDIE_TOTAL"));
        				this.dsSave3.setColumn(nrow, "NO_CADDIE_HOLIDAY", this.dsList3.getColumn(i, "NO_CADDIE_HOLIDAY"));
        				this.dsSave3.setColumn(nrow, "NO_CADDIE_CNT", this.dsList3.getColumn(i, "NO_CADDIE_HOLIDAY"));
        				this.dsSave3.setColumn(nrow, "DS_REMARK", this.dsList3.getColumn(i, "DS_REMARK"));
        				this.dsSave3.setColumn(nrow, "ID_INSERT", this.getOwnerFrame().GR_USER);
        				this.dsSave3.setColumn(nrow, "GR_SEARCH", this.getOwnerFrame().GR_SEARCH);
        				this.dsSave3.setColumn(nrow, "GR_DEPT", this.getOwnerFrame().GR_DEPT);
        				//this.dsSave3.setColumn(nrow, "ID_USER", this.getOwnerFrame().GR_USER);  20200302 주석

        				break;
        		}
        	}
        	var strSvcId    = "save3";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save3=dsSave3";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //승인
        this.fnApproval = function(approval) {

        	var nrow = this.dsApproval.addRow();

        	this.dsApproval.setColumn(nrow, "TY_APPROVAL", approval);
        	this.dsApproval.setColumn(nrow, "CD_DEPT", 	this.dsList1.getColumn(0, "CD_DEPT"));
        	this.dsApproval.setColumn(nrow, "DT_REPORT",this.dsList1.getColumn(0, "DT_REPORT"));
        	this.dsApproval.setColumn(nrow, "TY_DEPT", 	this.getOwnerFrame().TY_DEPT);
        	this.dsApproval.setColumn(nrow, "GR_SEARCH",this.getOwnerFrame().GR_SEARCH);
        	this.dsApproval.setColumn(nrow, "GR_DEPT", 	this.getOwnerFrame().GR_DEPT);
        	this.dsApproval.setColumn(nrow, "GR_USER", 	this.getOwnerFrame().GR_USER);


        	var strSvcId    = "saveApproval";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "saveApproval=dsApproval";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,
        						false); 	// 통신방법 정의 [생략가능]

        	if(approval == 2){
        		this.gfnAlert("승인 되었습니다.");
        	}else{
        		this.gfnAlert("승인취소 되었습니다.");
        	}
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        };

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

        /************************************************************************
         * Validate
         ************************************************************************/

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

        	if (svcID == "select1") {
        		if(this.dsList1.getRowCount() > 0){
        			//YN_APPROVAL(승인권자) 값이 Y 일 경우 - TY_STATUS 가 2인경우에는 승인취소 활성화 / 2가 아닌경우에는 승인버튼 활성화
        			//YN_APPROVAL 값이 N 일 경우 승인 / 승인취소 버튼 비활성화
        			if(this.dsList1.getColumn(0, "YN_APPROVAL") == "Y" || this.getOwnerFrame().GR_SEARCH == '1' ){
        				if(this.dsList1.getColumn(0, "TY_STATUS") == "2"){
        					this.fnSetReadOnly(true);	//승인상태 - 수정불가
        				}else{
        					this.fnSetReadOnly(false);	//수정가능
        				}
        			}else{
        				this.fnSetReadOnly(true);	//수정불가
        			}

        			var dtReport = this.dsList1.getColumn(0, "DT_REPORT");
        			this.divData.form.edtDT_REPORT.set_value(dtReport.substring(0,4)+"-"+dtReport.substring(4,6)+"-"+dtReport.substring(6,8));
        		}

        		this.dsList1.addColumn("TY_SAVE","string");
        		this.dsList1.addColumn("ID_INSERT","string");
        		this.dsList1.addColumn("GR_SEARCH","string");
        		this.dsList1.addColumn("GR_DEPT","string");

        		this.fnSelect2();
        	} else if (svcID == "select2") {
        		this.fnSelect3();
        	} else if (svcID == "select3") {
        		this.gfnSetFormStatus(this, "Q");
        	} else if (svcID == "save1") {
        		this.gfnAlert("저장되었습니다.");
        		this.fnSelect1();
        	} else if (svcID == "save2") {
        		this.gfnAlert("저장되었습니다.");
        		this.fnSelect1();
        		this.fnSelect2();
        		this.fnSelect3();
        	} else if (svcID == "save3") {
        		this.gfnAlert("저장되었습니다.");
        		this.gfnSetFormStatus(this, "Q");
        		this.fnSelect3();
        	} else if (svcID == "saveApproval") {
        		this.fnSelect1();
        	}
        	this.fnSetButton();
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         *************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //저장
        //승인
        this.fnApprovalChk = function() {

        	if(this.dsList1.getColumn(0, "TY_SAVE") == "U"){
        		this.gfnAlert("인원현황을 먼저 저장하세요.");
        		return false;
        	}
        	if(this.gfnDsIsUpdated(this.dsList2)) {
        		this.gfnAlert("세부내역을 먼저 저장하세요.");
        		return false;
        	}
        	if(this.gfnDsIsUpdated(this.dsList3)) {
        		this.gfnAlert("인원현황등록(인사)를 먼저 저장하세요.");
        		return false;
        	}


        };

        //승인취소
        this.fnApprovalCancelChk = function() {
        	if(this.dsList1.getColumn(0, "TY_SAVE") == "U"){
        		this.gfnAlert("인원현황을 먼저 저장하세요.");
        		return false;
        	}


        };

        //인원현황
        this.btnSave1_onclick = function(obj,e)
        {
        	this.fnSave1();
        };

        //세부내역
        this.btnSave2_onclick = function(obj,e)
        {
        	this.fnSave2();
        };
        // //세부내역 행추가
        // this.btnAdd2_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	this.gfnGridAdd(this.dxGrid2);
        // 	var nrow = this.dsList2.rowposition;
        // 	this.dsList2.setColumn(nrow, "DT_REPORT", this.dsList1.getColumn(0, "DT_REPORT"));
        // 	this.dsList2.setColumn(nrow, "CD_DEPT", this.dsList1.getColumn(0, "CD_DEPT"));
        // };
        //세부내역 삭제
        this.btnDel2_onclick = function(obj,e)
        {
        	this.dsList2.setColumn(this.dsList2.rowposition,"CHK","Y");
        	this.gfnGridDel(this.dxGrid2);
        };

        //인원현황등록(인사) - 저장
        this.btnSave3_onclick = function(obj,e)
        {
        	this.fnSave3();
        };

        //인원현황등록(인사) - 삭제
        this.btnCancel3_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGrid3);
        };

        //인원현황 변경시
        this.dsList1_onvaluechanged = function(obj,e)
        {
        	if(e.newvalue != undefined) {
        		this.dsList1.set_enableevent(false);

        		this.dsList1.setColumn(0, "TY_SAVE", "U" );
        		this.dsList1.setColumn(0, "ID_INSERT",	this.getOwnerFrame().GR_USER);
        		this.dsList1.setColumn(0, "GR_SEARCH",	this.getOwnerFrame().GR_SEARCH);
        		this.dsList1.setColumn(0, "GR_DEPT",	this.getOwnerFrame().GR_DEPT);

        		this.dsList1.set_enableevent(true);
        	}

        	this.fnSetButton();
        };

        this.fnSetReadOnly = function (bReadOnly){
        	//승인
        	this.btnApproval.set_enable(!bReadOnly);
        	this.btnApprovalCancel.set_enable(bReadOnly);

        	this.divData.form.edtNO_SERVICE_TOTAL.set_readonly(bReadOnly);
        	this.divData.form.edtNO_SERVICE_HOLIDAY.set_readonly(bReadOnly);
        	this.divData.form.edtNO_LABOR_CNT.set_readonly(bReadOnly);
        	this.divData.form.edtNO_CADDIE_TOTAL.set_readonly(bReadOnly);
        	this.divData.form.edtNO_CADDIE_HOLIDAY.set_readonly(bReadOnly);
        	this.divData.form.txtDS_REMARK_R.set_enable(!bReadOnly);

        	//인원현황
        	this.divData.form.btnSave1.set_enable(!bReadOnly);

        	//세부내역, 인원현황등록(인사)
        	//this.dxGrid2.set_enable(!bReadOnly);
        	if (bReadOnly)
        	{
        		this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","CHK"),"edittype","none");
        		this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","YN_WORK"),"edittype","none");
        		this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","YN_ABSENCE"),"edittype","none");
        		this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","YN_HOLIDAY"),"edittype","none");
        		this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","YN_SPECIAL"),"edittype","none");
        		this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","YN_CLOSE"),"edittype","none");
        		this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","YN_OFFICIAL"),"edittype","none");
        		this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","YN_ETC"),"edittype","none");
        		this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","DS_REMARK"),"edittype","none");
        	}

        	this.divData.form.btnDel2.set_enable(!bReadOnly);
        	this.divData.form.btnSave2.set_enable(!bReadOnly);


        	this.dxGrid3.set_enable(!bReadOnly);
        	this.divData.form.btnSave3.set_enable(!bReadOnly);
        	//this.divData.form.btnCancel3.set_enable(!bReadOnly);
        };
        this.divData_objGrid2_oncellclick = function(obj,e)
        {
        	this.fnSetButton();
        	if(e.clickitem == "control" && e.col != 1) {  // 첫번째 column 제외
        		for(var i = 5; i < this.dxGrid2.getCellCount("body"); i++) {
        			if(this.divData.form.objGrid2.getCellProperty("body", i , "edittype") == "checkbox") {
        				this.dsList2.setColumn(e.row, "CHK","Y");
        				if(e.col != i) {
        					this.dsList2.setColumn(e.row, this.gfnGridGetBindColumnNameByIndex( this.dxGrid2, i), "N");
        				}
        			}
        		}
        	}
        };
        this.dsList3_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        	switch(e.columnid){
        		case "NO_SERVICE_HOLIDAY"://휴무
        			var serviceTotal = this.dsList3.getColumn(e.row, "NO_SERVICE_TOTAL");
        			this.dsList3.setColumn(e.row, "NO_SERVICE_CNT", serviceTotal-e.newvalue);
        		break;

        		case "NO_SERVICE_CNT":	//현원
        			var serviceTotal = this.dsList3.getColumn(e.row, "NO_SERVICE_TOTAL");
        			this.dsList3.setColumn(e.row, "NO_SERVICE_HOLIDAY", serviceTotal-e.newvalue);
        		break;

        		case "NO_CADDIE_HOLIDAY"://휴무
        			var caddieTotal = this.dsList3.getColumn(e.row, "NO_CADDIE_TOTAL");
        			this.dsList3.setColumn(e.row, "NO_CADDIE_CNT", caddieTotal-e.newvalue);
        		break;

        		case "NO_CADDIE_CNT":	//현원
        			var caddieTotal = this.dsList3.getColumn(e.row, "NO_CADDIE_TOTAL");
        			this.dsList3.setColumn(e.row, "NO_CADDIE_HOLIDAY", caddieTotal-e.newvalue);
        		break;

        		default:
        	}
        };

        this.divData_txtDS_REMARK_R_oninput = function(obj,e)
        {
        	this.fnSetButton();
        };

        this.divData_edtNO_SERVICE_TOTAL_oninput = function(obj,e)
        {
        	this.fnSetButton();
        };

        this.divData_edtNO_SERVICE_HOLIDAY_oninput = function(obj,e)
        {
        	this.fnSetButton();
        };

        this.divData_edtNO_LABOR_CNT_oninput = function(obj,e)
        {
        	this.fnSetButton();
        };

        this.divData_edtNO_CADDIE_TOTAL_oninput = function(obj,e)
        {
        	this.fnSetButton();
        };

        this.divData_edtNO_CADDIE_HOLIDAY_oninput = function(obj,e)
        {

        };

        // 리포트 출력 전체
        this.fnSelectRpt = function(TY_REPORT) {

        	this.dsSelectRpt = new Dataset();
        	this.dsSelectRpt.addColumn("DT_REPORT", "string");	    // 일자
        	this.dsSelectRpt.addColumn("ID_LOGIN", "string"); 	    // 출력자
        	this.dsSelectRpt.addColumn("CD_DEPT", "string"); 	    // 부서
        	this.dsSelectRpt.addColumn("TY_VIEW", "string"); 	    // 레포트구분

        	var nrow = this.dsSelectRpt.addRow();
        	trace(this.getOwnerFrame().DT_REPORT);
        	var DT_REPORT = this.getOwnerFrame().DT_REPORT;
        	if(this.gfnIsNull(DT_REPORT)){
        		this.gfnAlert("기준일자는 반드시 입력 하셔야 합니다");
        		return false;
        	}

        	var CD_DEPT = this.getOwnerFrame().CD_DEPT;
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DAC_DAILY_DEPT_onload,this);
            this.divData.form.txtDS_REMARK_R.addEventHandler("oninput",this.divData_txtDS_REMARK_R_oninput,this);
            this.divData.form.btnSave1.addEventHandler("onclick",this.btnSave1_onclick,this);
            this.divData.form.edtNO_SERVICE_TOTAL.addEventHandler("oninput",this.divData_edtNO_SERVICE_TOTAL_oninput,this);
            this.divData.form.edtNO_SERVICE_HOLIDAY.addEventHandler("oninput",this.divData_edtNO_SERVICE_HOLIDAY_oninput,this);
            this.divData.form.edtNO_LABOR_CNT.addEventHandler("oninput",this.divData_edtNO_LABOR_CNT_oninput,this);
            this.divData.form.edtNO_CADDIE_TOTAL.addEventHandler("oninput",this.divData_edtNO_CADDIE_TOTAL_oninput,this);
            this.divData.form.edtNO_CADDIE_HOLIDAY.addEventHandler("oninput",this.divData_edtNO_CADDIE_HOLIDAY_oninput,this);
            this.divData.form.objGrid2.addEventHandler("oncellclick",this.divData_objGrid2_oncellclick,this);
            this.divData.form.btnSave2.addEventHandler("onclick",this.btnSave2_onclick,this);
            this.divData.form.btnDel2.addEventHandler("onclick",this.btnDel2_onclick,this);
            this.divData.form.btnCancel3.addEventHandler("onclick",this.btnCancel3_onclick,this);
            this.divData.form.btnSave3.addEventHandler("onclick",this.btnSave3_onclick,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList1_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList3.addEventHandler("onvaluechanged",this.dsList3_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_DAILY_LISTDETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
