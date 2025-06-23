(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DCA_REGIST_EVALUELIST");
            this.set_titletext("협력업체 등록평가(외주)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1050);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCAPR_REGIST_EVALUELIST_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSeq</Col><Col id=\"SP\">DCAPR_REGISTPERIOD_SEQ_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCAPR_REGIST_EVALUELIST_SAVE</Col></Row><Row><Col id=\"TARGET\">magam</Col><Col id=\"SP\">DCAPR_REGIST_EVALUE_MAGAM</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DCAPR_REGIST_DATA_REPORT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PARAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMagam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctcYY_WORK","staYY_WORK:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SEQ","ctcYY_WORK:0.0","10.0","227","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFREGIST_NOSEQ");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter",null,"5","5",null,"873","5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divList","0","0",null,null,"divSplitter:3","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divList.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divList.addChild(obj.name, obj);

            obj = new Div("divForm","divSplitter:3","0",null,null,"0","0",null,"870",null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00_00_00_01_00_00","68","609","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_01_00_00_00_01","68","951","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_01_00_00_00_00","68","812","782","140",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_01_00_00","68","638","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_01_00_00_00","68","667","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_01_00","68","406","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00_00_00_01_00","68","580","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00_00_00_01","68","551","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00_00_01","68","522","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00_01","68","493","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_01","68","464","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_01","68","435","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02","68","29","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta13","68","0","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta06","572","29","100","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("13");
            obj.set_text("대표자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_PRESIDENT","675","34","170","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("14");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03","0","29","100","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("15");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtNO_SJC","103","34","185","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta01","572","0","100","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("17");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR","675","5","170","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("18");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta01_00","291","0","120","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("19");
            obj.set_text("등록공종(품목)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00","414","5","155","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("20");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","291","29","120","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("21");
            obj.set_text("지역순위");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00","414","34","155","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("22");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","0","0","100","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("23");
            obj.set_text("등록차수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00","103","5","65","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","58","100","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("25");
            obj.set_text("구  분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00","99","58","342","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("26");
            obj.set_text("평가내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_00","440","58","332","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("27");
            obj.set_text("평가점수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_00_00","771","58","79","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("28");
            obj.set_text("자료확인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00","68","87","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00","68","116","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00","68","145","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00","68","174","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00","68","203","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00","68","232","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00","68","261","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00_00","68","290","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00_00_00","68","319","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00_00_00_00","68","348","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00_00_00_00_00","68","377","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00_00_00_00_00_00","68","696","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00_00_00_00_00_00_00","68","725","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00_00_00_00_00_00_00_00","68","754","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","68","783","782","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_01","0","87","100","117",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("44");
            obj.set_text("Ⅰ. 시공능력\r\n   \r\n  (45점)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_01_00","0","203","100","146",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("45");
            obj.set_text("Ⅱ. 경영분석\r\n\r\n  (45점)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_01_00_00","0","348","100","59",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("46");
            obj.set_text("Ⅲ. 연혁 및 경력\r\n\r\n (10점)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_01_00_00_00","0","696","100","117",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("47");
            obj.set_text("기본 정보");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01","99","87","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("48");
            obj.set_text("1. 해당공종 시공실적");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00","99","116","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("49");
            obj.set_text("2. 해당공종 지역순위");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00","99","145","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("50");
            obj.set_text("3. 거래처 (상위 100위 거래비중)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00","99","174","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("51");
            obj.set_text("4. 신기술, 특허 등 보유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00","99","203","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("52");
            obj.set_text("1. 신용평가등급");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00","99","232","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("53");
            obj.set_text("2. 현금흐름등급");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00","99","261","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("54");
            obj.set_text("3. 매출액 증가율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00","99","290","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("55");
            obj.set_text("4. 부채 비율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00_00","99","319","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("56");
            obj.set_text("5. 직전년도 유동비율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00_00_00","99","348","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("57");
            obj.set_text("1. 회사 연혁 (영업기간)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00_00_00_00","99","377","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("58");
            obj.set_text("2. 상벌사항");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00_00_00_00_00","99","696","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("59");
            obj.set_text("1. 소지면허");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00","99","725","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("60");
            obj.set_text("2. 주요거래처");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","99","754","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("61");
            obj.set_text("3. 소재지역");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","783","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("62");
            obj.set_text("4. 기타");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_00","295","92","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("63");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_01_01","771","87","79","117",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("64");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_01_00_01","771","203","79","146",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("65");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_01_00_00_01","771","348","79","59",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("66");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_01_00_00_00_00","771","696","79","117",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("67");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_00_00","295","121","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("68");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_00_00_00","295","150","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("69");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_00_00_00_00","295","179","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("70");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_00_00_00_00_00","295","208","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("71");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_00_00_00_00_00_00","295","237","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("72");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_00_00_00_00_00_00_00","295","266","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("73");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00","295","295","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("74");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00","295","324","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("75");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00","295","353","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("76");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00","295","382","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("77");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","295","701","473","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("78");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","295","730","473","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("79");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","295","759","473","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("80");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","295","788","473","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("81");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Button("btnAttach1","783","133","55","22",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("82");
            obj.set_text("자료");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Button("btnAttach2","783","264","55","22",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("83");
            obj.set_text("자료");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Button("btnAttach3","783","365","55","22",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("84");
            obj.set_text("자료");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Button("btnAttach4","783","741","55","22",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("85");
            obj.set_text("자료");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00_00_00_00_01","0","406","292","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("86");
            obj.set_text("소   계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_01_00_02","0","435","100","204",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("87");
            obj.set_text("Ⅳ. 가감점");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_01","99","435","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("88");
            obj.set_text("1. 우수협력사 추천");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_01","99","464","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("89");
            obj.set_text("2. 당사 거래실적 또는\r\n    협력업체 등록여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_01","99","493","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("90");
            obj.set_text("3. 수주 및 대외업무 기여회사");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00_01","99","522","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("91");
            obj.set_text("4. 협력업체의 전략적 중요도");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00_00_01","99","551","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("92");
            obj.set_text("5. 미입찰,낙찰후 미이행\r\n    (부도, 타절 등)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00_00_01_00","99","580","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("93");
            obj.set_text("6. 재해율 (안전사고)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00_00_00_00_01_00","0","638","292","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("94");
            obj.set_text("소   계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00_00_00_00_01_00_00","0","667","292","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("95");
            obj.set_text("[ 최종 평가 점수 ]");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00_00_00_00_01_00_00_00","0","812","100","140",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("96");
            obj.set_text("의  견");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00_00_00_00_01_00_00_01","0","951","100","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("97");
            obj.set_text("추천인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_01","171","5","45","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("98");
            obj.set_readonly("true");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00","450","87","352","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("99");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_innerdataset", obj);
            divData_form_divForm_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">13</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00","450","116","352","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("100");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00","450","145","352","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("101");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_00_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00_00","450","174","352","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("102");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_00_00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_00_00_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_00_00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00_00_00","450","203","352","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("103");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_00_00_00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_00_00_00_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">17</Col><Col id=\"datacolumn\">17</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">14</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_00_00_00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00_00_00_00","450","232","352","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("104");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_00_00_00_00_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_00_00_00_00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00_00_00_00_00","450","261","352","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("105");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_00_00_00_00_00_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_00_00_00_00_00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00_00_00_00_00_00","450","290","352","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("106");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00_00_00_00_00_00_00","450","319","352","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("107");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00_00_00_00_00_00_00_00","450","348","352","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("108");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00_00_00_00_00_00_00_00_00","450","377","216","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("109");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_00_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("staSum1","295","406","51","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("110");
            obj.set_text("100");
            obj.set_textAlign("right");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("staSum1Jum","355","406","51","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("111");
            obj.set_text("점");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("staSum2","295","638","51","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("112");
            obj.set_text("100");
            obj.set_textAlign("right");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("staSum2Jum","355","638","51","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("113");
            obj.set_text("점");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("staSumResult","295","667","51","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("114");
            obj.set_text("100");
            obj.set_textAlign("right");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("staSumFinalJum","355","667","51","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("115");
            obj.set_text("점");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new TextArea("txt00","103","816","743","132",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("116");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00","103","956","112","21",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("117");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","295","440","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("118");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new MaskEdit("msk00_00","295","469","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("119");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new MaskEdit("msk00_00_00","295","498","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("120");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new MaskEdit("msk00_00_00_00","295","527","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("121");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new MaskEdit("msk00_00_00_00_00","295","556","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("122");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new MaskEdit("msk00_00_00_00_00_00","295","585","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("123");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00_00_00_00_00_00_00_00_01","450","435","288","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("124");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00_00_00_00_00_00_00_00_01_00","450","464","145","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("125");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00_00_00_00_00_00_00_00_01_00_00","450","493","145","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("126");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00","450","522","145","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("127");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00","450","551","145","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("128");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">-10</Col><Col id=\"datacolumn\">-10</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00","450","580","145","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("129");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">-5</Col><Col id=\"datacolumn\">-5</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta03_00_00_01_00_00_00_00_00_00_00_00_01_00_00","99","609","193","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("130");
            obj.set_text("7. 하자발생");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new MaskEdit("msk00_00_00_00_00_00_00","295","614","142","20",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("131");
            this.divData.form.divForm.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00","450","609","145","30",null,null,null,null,null,null,this.divData.form.divForm.form);
            obj.set_taborder("132");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00_innerdataset", obj);
            divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">-5</Col><Col id=\"datacolumn\">-5</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divForm_form_rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00_innerdataset);
            this.divData.form.divForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item39","divSearch.form.ctcYY_WORK.form.TextBox","value","dsSearch","YY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tabData.tab90.form.edtDS_VENDOR00","value","dsList","DS_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tabData.tab90.form.edtDS_VENDOR00_00","value","dsList","DS_AREARANKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tabData.tab90.form.edtDS_VENDOR00_00_00","value","dsList","TY_PERIOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab90.form.edtDS_VENDOR00_00_00_00","value","dsList","DS_PERFORMANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab90.form.edtDS_VENDOR00_00_00_00_00","value","dsList","DS_LICRANKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab90.form.edtDS_VENDOR00_00_00_00_00_00","value","dsList","DS_TRADEWEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab90.form.edtDS_VENDOR00_00_00_00_00_00_00","value","dsList","DS_TECH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab90.form.edtDS_VENDOR00_00_00_00_00_00_00_00","value","dsList","DS_CREDITGRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab90.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00","value","dsList","DS_CFGRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab90.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00","value","dsList","DS_GAINGROSS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tabData.tab90.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_DEBTRATIO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tabData.tab90.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_CURRRATIO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab90.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_HISTORY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.tabData.tab90.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_AWARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tabData.tab90.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_LICENSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tabData.tab90.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_CUSTOMER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.tabData.tab90.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.tabData.tab90.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divSearch.form.ccfNO_SEQ.form.CDTextBox","value","dsSearch","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.edtDS_VENDOR00","value","dsList","DS_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.edtDS_VENDOR00_00","value","dsList","DS_AREARANKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.edtDS_VENDOR00_00_00","value","dsList","TY_PERIOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.edtDS_VENDOR00_00_00_00","value","dsList","DS_PERFORMANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.edtDS_VENDOR00_00_00_00_00","value","dsList","DS_LICRANKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.edtDS_VENDOR00_00_00_00_00_00","value","dsList","DS_TRADEWEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.edtDS_VENDOR00_00_00_00_00_00_00","value","dsList","DS_TECH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.edtDS_VENDOR00_00_00_00_00_00_00_00","value","dsList","DS_CREDITGRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00","value","dsList","DS_CFGRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00","value","dsList","DS_GAINGROSS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_DEBTRATIO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_CURRRATIO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_HISTORY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_AWARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_LICENSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_CUSTOMER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.divForm.form.edtDS_PRESIDENT","value","dsList","DS_PRESIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divForm.form.edtNO_SJC","value","dsList","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divForm.form.edtDS_VENDOR","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.divForm.form.edtDS_VENDOR00","value","dsList","DS_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.divForm.form.edtDS_VENDOR00_00","value","dsList","DS_AREARANKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.divForm.form.edtDS_VENDOR00_00_00","value","dsList","YY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.divForm.form.edtDS_VENDOR00_00_00_00","value","dsList","DS_PERFORMANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.divForm.form.edtDS_VENDOR00_00_00_00_00","value","dsList","DS_LICRANKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.divForm.form.edtDS_VENDOR00_00_00_00_00_00","value","dsList","DS_TRADEWEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.divForm.form.edtDS_VENDOR00_00_00_00_00_00_00","value","dsList","DS_TECH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.divForm.form.edtDS_VENDOR00_00_00_00_00_00_00_00","value","dsList","DS_CREDITGRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.divForm.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00","value","dsList","DS_CFGRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.divForm.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00","value","dsList","DS_GAINGROSS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.divForm.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_DEBTRATIO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.divForm.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_CURRRATIO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.divForm.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_HISTORY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.divForm.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_AWARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.divForm.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_LICENSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.divForm.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_CUSTOMER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.divForm.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.divForm.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","dsList","DS_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.divForm.form.edtDS_VENDOR00_00_00_01","value","dsList","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.divForm.form.rdo00_00_00_00_00_00_00_00_00_00_01","value","dsList","AM_EXTRA1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.divForm.form.msk00","value","dsList","AM_EXTRA1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.divForm.form.rdo00_00_00_00_00_00_00_00_00_00_01_00","value","dsList","AM_EXTRA2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.divForm.form.msk00_00","value","dsList","AM_EXTRA2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divData.form.divForm.form.msk00_00_00","value","dsList","AM_EXTRA3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.divForm.form.rdo00_00_00_00_00_00_00_00_00_00_01_00_00","value","dsList","AM_EXTRA3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divData.form.divForm.form.msk00_00_00_00","value","dsList","AM_EXTRA4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.divForm.form.rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00","value","dsList","AM_EXTRA4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.divForm.form.msk00_00_00_00_00","value","dsList","AM_EXTRA5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divData.form.divForm.form.rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00","value","dsList","AM_EXTRA5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divData.form.divForm.form.msk00_00_00_00_00_00","value","dsList","AM_EXTRA6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divData.form.divForm.form.rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00","value","dsList","AM_EXTRA6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divData.form.divForm.form.staSum2","text","dsList","AM_SUBSUM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divData.form.divForm.form.staSumResult","text","dsList","AM_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divData.form.divForm.form.staSum1","text","dsList","AM_SUBSUM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divData.form.divForm.form.rdo00","value","dsList","AM_PERFORMANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divData.form.divForm.form.rdo00_00","value","dsList","AM_LICRANKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divData.form.divForm.form.rdo00_00_00","value","dsList","AM_TRADEWEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divData.form.divForm.form.rdo00_00_00_00","value","dsList","AM_TECH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divData.form.divForm.form.rdo00_00_00_00_00","value","dsList","AM_CREDITGRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divData.form.divForm.form.rdo00_00_00_00_00_00","value","dsList","AM_CFGRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divData.form.divForm.form.rdo00_00_00_00_00_00_00","value","dsList","AM_GAINGROSS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divData.form.divForm.form.rdo00_00_00_00_00_00_00_00","value","dsList","AM_DEBTRATIO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","divData.form.divForm.form.rdo00_00_00_00_00_00_00_00_00","value","dsList","AM_CURRRATIO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","divData.form.divForm.form.rdo00_00_00_00_00_00_00_00_00_00","value","dsList","AM_HISTORY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","divData.form.divForm.form.rdo00_00_00_00_00_00_00_00_00_00_00","value","dsList","AM_AWARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","divData.form.divForm.form.msk00_00_00_00_00_00_00","value","dsList","AM_EXTRA7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","divData.form.divForm.form.rdo00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00","value","dsList","AM_EXTRA7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","divData.form.divForm.form.txt00","value","dsList","RM_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","divData.form.divForm.form.edtDS_VENDOR00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00","value","dsList","DS_RECOMMEND");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCA_REGIST_EVALUELIST.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DCA_REGISTLIST_onload = function(obj,e)
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

        	this.fnGetSeq();

        	this.dsSearch.setColumn(0, "DS_PARAM", this.FormInfo.DS_PARAM);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.btnMagam = this.gfnFormButtonAdd("btnMagam", "fnMagam");
        	this.btnReport = this.gfnFormButtonAdd("btnReport", "fnReport");
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divList.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.divSearch.form.ccfNO_SEQ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCA_REGIST_EVALUELIST");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSearch";
        	var outData     = "dsList=select0 dsMagam=select1";
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
        	if(this.dsMagam.getColumn(0, "YN_MAGAM") == "Y") {
        		this.gfnAlert("이미 마감된 차수입니다.");
        		return;
        	}

        	this.dxGrid.updateToDataset();

        	var isChanged = false;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I" :
        			case "U" :
        			case "D" :
        				this.dsList.setColumn(i, "TY_WORK", flag);
        				isChanged = true;
        			break;
        		}
        	}

        	if (!isChanged) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsList";
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
        this.fnSelectValidate = function() {
           var validate = true;
           return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ***********************************************************************
         /
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode == 0) {
        		if (svcID == "select") {
        			this.gfnGridAfterSelect(this.dxGrid);
        		}
        		else if(svcID == "selectSeq") {
        			if(this.dsSeq.rowcount > 0) {
        				this.dsSearch.setColumn(0, "YY_WORK", this.dsSeq.getColumn(0, "YY_WORK"));
        				this.dsSearch.setColumn(0, "NO_SEQ", this.dsSeq.getColumn(0, "NO_SEQ"));

        				this.divSearch.form.ccfNO_SEQ.form.fnCodeFindLoad();
        			}
        		}
        		else if(svcID == "save") {
        			this.FormBtns.Select.click();
        		}
        		else if(svcID == "magam") {
        			this.gfnAlert("마감처리 되었습니다.");
        			this.FormBtns.Select.click();
        		}
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfNO_SEQ")
        	{
        		dsUserParam.setColumn(nrow, "YY_WORK",this.dsSearch.getColumn(0, "YY_WORK"));
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(this.dsList.rowcount != 0){
        		if(e.oldvalue != e.newvalue) {
        			this.gfnSetFormStatus(this);	// 폼상태 초기화
        			this.gfnGridClear(this.dxGrid);
        		}
        	}
        };

        this.fnGetSeq = function() {
        	this.dsDummy = new Dataset();

        	var strSvcId    = "selectSeq";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectSeq=dsDummy";
        	var outData     = "dsSeq=selectSeq0";
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

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		var AM_PERFORMANCE = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_PERFORMANCE"), 0);
        		var AM_LICRANKING = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_LICRANKING"), 0);
        		var AM_TRADEWEIGHT = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_TRADEWEIGHT"), 0);
        		var AM_TECH = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_TECH"), 0);
        		var AM_CREDITGRADE = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CREDITGRADE"), 0);
        		var AM_CFGRADE = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CFGRADE"), 0);
        		var AM_GAINGROSS = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_GAINGROSS"), 0);
        		var AM_DEBTRATIO = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_DEBTRATIO"), 0);
        		var AM_CURRRATIO = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CURRRATIO"), 0);
        		var AM_HISTORY = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_HISTORY"), 0);
        		var AM_AWARD = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_AWARD"), 0);

        		var AM_SUBSUM1 = AM_PERFORMANCE +
        						 AM_LICRANKING +
        						 AM_TRADEWEIGHT +
        						 AM_TECH +
        						 AM_CREDITGRADE +
        						 AM_CFGRADE +
        						 AM_GAINGROSS +
        						 AM_DEBTRATIO +
        						 AM_CURRRATIO +
        						 AM_HISTORY +
        						 AM_AWARD;
        		this.dsList.setColumn(e.row, "AM_SUBSUM1", AM_SUBSUM1);

        		var AM_EXTRA1 = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_EXTRA1"), 0);
        		var AM_EXTRA2 = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_EXTRA2"), 0);
        		var AM_EXTRA3 = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_EXTRA3"), 0);
        		var AM_EXTRA4 = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_EXTRA4"), 0);
        		var AM_EXTRA5 = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_EXTRA5"), 0);
        		var AM_EXTRA6 = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_EXTRA6"), 0);
        		var AM_EXTRA7 = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_EXTRA7"), 0);

        		var AM_SUBSUM2 = AM_EXTRA1 +
        						 AM_EXTRA2 +
        						 AM_EXTRA3 +
        						 AM_EXTRA4 +
        						 AM_EXTRA5 +
        						 AM_EXTRA6 +
        						 AM_EXTRA7;
        		this.dsList.setColumn(e.row, "AM_SUBSUM2", AM_SUBSUM2);
        		this.dsList.setColumn(e.row, "AM_RESULT", AM_SUBSUM1 + AM_SUBSUM2);
        	}
        };

        this.fnMagam = function() {
        	if(this.dsMagam.getColumn(0, "YN_MAGAM") == "Y") {
        		this.gfnAlert("이미 마감된 차수입니다.");
        		return;
        	}

        	this.gfnConfirm("이 작업은 절대 되돌릴 수 없습니다.\n등록마감처리 하시겠습니까?", "fnMagam_callback");
        }

        this.fnMagam_callback = function(strId, val)
        {
        	if(val == true) {
        		var strSvcId    = "magam";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "magam=dsSearch";
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
        }

        this.divData_btnAttach_onclick = function(obj,e)
        {
        // 	this.gfnAlert("첨부파일 등록");
        // 	return;
        //
        // 	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_VENDOR")))return;
        //
        // 	var fileManager = {};
        // 		fileManager.CD_GUBUN = "DC10";
        // 		fileManager.CD_DIR = [this.dsList.getColumn(0, "CD_VENDOR")];
        // 		fileManager.IS_READONLY = false;
        // 		this.gfnFileManager(fileManager, "fnFileCallback");
        	if(obj.id == "btnAttach1") {
        		var fileManager = {};
        			fileManager.CD_GUBUN = "DC15";
        			fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, "YY_WORK") + "/" + this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ") + "/" + this.dsList.getColumn(this.dsList.rowposition, "NO_SJC")];
        			fileManager.IS_READONLY = false;
        			this.gfnFileManager(fileManager, "fnFileCallback");
        	} else if(obj.id == "btnAttach2") {
        		var fileManager = {};
        			fileManager.CD_GUBUN = "DC16";
        			fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, "YY_WORK") + "/" + this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ") + "/" + this.dsList.getColumn(this.dsList.rowposition, "NO_SJC")];
        			fileManager.IS_READONLY = false;
        			this.gfnFileManager(fileManager, "fnFileCallback");
        	} else if(obj.id == "btnAttach3") {
        		var fileManager = {};
        			fileManager.CD_GUBUN = "DC17";
        			fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, "YY_WORK") + "/" + this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ") + "/" + this.dsList.getColumn(this.dsList.rowposition, "NO_SJC")];
        			fileManager.IS_READONLY = false;
        			this.gfnFileManager(fileManager, "fnFileCallback");
        	} else if(obj.id == "btnAttach4") {
        		var fileManager = {};
        			fileManager.CD_GUBUN = "DC18";
        			fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, "YY_WORK") + "/" + this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ") + "/" + this.dsList.getColumn(this.dsList.rowposition, "NO_SJC")];
        			fileManager.IS_READONLY = false;
        			this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        };

        this.fnReport = function() {
        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("YY_WORK", "string");
        	this.dsReport.addColumn("NO_SEQ", "string");
        	this.dsReport.addColumn("NO_SJC", "string");

        	this.dsReport.clearData();

        	this.dsReport.addRow();
        	this.dsReport.setColumn(0, "YY_WORK", this.dsList.getColumn(this.dsList.rowposition, "YY_WORK"));
        	this.dsReport.setColumn(0, "NO_SEQ", this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ"));
        	this.dsReport.setColumn(0, "NO_SJC", this.dsList.getColumn(this.dsList.rowposition, "NO_SJC"));

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report=dsReport";
        	var reportpath  = "/dc/dca/DCAPR_REGIST_DATA_REPORT.ozr";

        	// 일반: gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	// SAP : gfnOpenReport(this, reportpath, inProc, inParam, inData, true);
        	// SAP 호출시 마지막인자 추가 true 설정
        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DCA_REGISTLIST_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divForm.form.btnAttach1.addEventHandler("onclick",this.divData_btnAttach_onclick,this);
            this.divData.form.divForm.form.btnAttach2.addEventHandler("onclick",this.divData_btnAttach_onclick,this);
            this.divData.form.divForm.form.btnAttach3.addEventHandler("onclick",this.divData_btnAttach_onclick,this);
            this.divData.form.divForm.form.btnAttach4.addEventHandler("onclick",this.divData_btnAttach_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCA_REGIST_EVALUELIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
