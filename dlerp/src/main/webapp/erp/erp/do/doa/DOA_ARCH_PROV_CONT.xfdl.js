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
            this.set_titletext("주택-약정관리");
            this.set_enable("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1120,690);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOAPR_ARCH_PROV_CONT_INFO</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOAPR_ARCH_PROV_CONT_MERGE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DOAPR_ARCH_PROV_CONT_DELETE</Col></Row><Row><Col id=\"TARGET\">selectCharge</Col><Col id=\"SP\">DOAPR_PROJ_YNCHARGE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LOC", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PROV_CONT\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBase", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PROV_CONT\" type=\"INT\" size=\"256\"/><Column id=\"TY_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"NM_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PROV_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"NM_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BUILD\" type=\"STRING\" size=\"1000\"/><Column id=\"SZ_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_AREA_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SZ_LAND_M\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_SC_ST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SC_ED\" type=\"STRING\" size=\"256\"/><Column id=\"DT_COST_ED\" type=\"STRING\" size=\"256\"/><Column id=\"AM_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONT_SUPPLY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONT_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SALE_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BIZ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_BIZ\" type=\"STRING\" size=\"1000\"/><Column id=\"ID_FILE_ATTCH\" type=\"STRING\" size=\"256\"/><Column id=\"ID_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_NO_PROV_CONT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseRst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRcvYNCharge", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"YN_EXISTS\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_PROJ","0.0","staCD_PROJ:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PROJ","ctxtCD_PROJ:0.0","staCD_PROJ:10.0","475","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","50","1120",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ","5","26","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("사업유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","124","26","119","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNM_ENF","853","26","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("약정일자");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","973","26","139","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","122","85","990","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_LOC","5","85","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta27","124","436","988","164",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_FILE_ATTCH","5","436","120","164",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR2","642","90","465","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","0",null,"22","1020",null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divFile","128","436","952","159",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title03","5","60",null,"22","1000",null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("공사개요");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_BIZ","132","31","99","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CLASS","243","26","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("약정구분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PROV_CONT","978","29","110","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","325","26","527","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CLASS","329","31","515","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DO_09");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT","5","172","120","51",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("기타사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","124","172","988","51",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT00","5","143","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("착공예정일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_LOC00","5","114","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("대지면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","124","114","434","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","677","114","435","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_LOC01","557","114","121","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("연면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_AREA","270","119","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staPercent05","363","121","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("평");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_AREA_M","132","119","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staPercent03","225","121","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("m²");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_LAND","830","119","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staPercent00","923","121","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("평");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtSZ_LAND_M","685","119","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.00");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staPercent01","778","121","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("m²");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","124","143","249","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","492","143","252","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_LOC02","372","143","121","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_text("준공예정일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SC_ST","132","146","110","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SC_ED","500","145","110","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","862","143","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT01","743","143","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_text("정산완료예정일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_COST_ED","871","147","110","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtDS_BUILD","132","177","974","41",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_value("");
            obj.set_maxlength("1000");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ00","5","261","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_text("평당공사금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","124","261","988","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title00","5","235",null,"22","212",null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_text("공사금액");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ01","5","290","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_text("공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","124","290","249","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONT_SUPPLY","131","295","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ02","372","290","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","490","290","254","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ03","743","290","122","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","864","290","248","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONT_VAT","497","295","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SALE_TOT","870","295","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ04","5","360","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_text("사업비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","124","360","988","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title01","5","334",null,"22","1020",null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_text("사업비");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BIZ","131","365","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_RM","5","389","120","48",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_text("사업비내역");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta26","124","389","988","48",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_BIZ","130","393","976","41",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_maxlength("1000");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_LOC","131","90","99","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_ZIP","241","90","99","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ADDR1","351","90","285","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_AREA","131","265","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_PROJ","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_PROJ","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtTY_BIZ","value","dsBase","NM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfCD_CLASS.form.CDTextBox","value","dsBase","CD_CLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfCD_CLASS.form.DSTextBox","value","dsBase","NM_CLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctclDT_PROV_CONT","value","dsBase","DT_PROV_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctxtCD_LOC","value","dsBase","NM_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctxtCD_ZIP","value","dsBase","CD_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ctxtDS_ADDR1","value","dsBase","DS_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ctxtDS_ADDR2","value","dsBase","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctxtDS_BUILD","value","dsBase","DS_BUILD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctxtSZ_AREA","value","dsBase","SZ_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ctxtSZ_AREA_M","value","dsBase","SZ_AREA_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ctxtSZ_LAND","value","dsBase","SZ_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.ctxtSZ_LAND_M","value","dsBase","SZ_LAND_M");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ctclDT_SC_ST","value","dsBase","DT_SC_ST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.ctclDT_COST_ED","value","dsBase","DT_COST_ED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.ctclDT_SC_ED","value","dsBase","DT_SC_ED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.ctxtAM_CONT_SUPPLY","value","dsBase","AM_CONT_SUPPLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.ctxtAM_CONT_VAT","value","dsBase","AM_CONT_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.ctxtAM_SALE_TOT","value","dsBase","AM_SALE_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.ctxtAM_BIZ","value","dsBase","AM_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.txtDS_BIZ","value","dsBase","DS_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.ctxtAM_AREA","value","dsBase","AM_AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmFileManager.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOA_ARCH_PROV_CONT.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.serverTime = "";

        this.form_onload = function(obj,e){
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetExtendButton();

        	this.fnSetVariable();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.divData.form.divFile.set_enable(false);

        	this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsSearch.setColumn(0, "DS_PROJ", this.getOwnerFrame().DS_PROJ);
        	this.dsSearch.setColumn(0, "NO_PROV_CONT", this.getOwnerFrame().NO_PROV_CONT);

        	if(this.getOwnerFrame().NO_PROV_CONT == 0)	{
        		/*폼상태는 입력 모드*/
        		this.gfnSetFormStatus(this, "I");
        	}else{
        		this.gfnSetFormStatus(this, "");
        	}

        	this.fnSetButton();
        	this.fnSelect();
        };

        /************************************************************************
         * 담당자 여부 검사
         ************************************************************************/
         this.fnGetYNCharge = function(){

        	this.dsReqYNCharge = new Dataset();
        	this.dsReqYNCharge.addColumn("CD_PROJ", "string");
        	this.dsReqYNCharge.addColumn("ID_USER", "string");

        	this.dsReqYNCharge.addRow();
        	this.dsReqYNCharge.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsReqYNCharge.setColumn(0, "ID_USER", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));

        	var strSvcId    = "selectCharge";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        		inData      = "selectCharge=dsReqYNCharge";
        		outData     = "dsRcvYNCharge=selectCharge0";
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
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/

        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Excel.set_enable(false);
        	this.FormBtns.Print.set_enable(false);

        	if(this.FormInfo.TY_AUTH == "R") {
        		this.FormBtns.Select.set_enable(true);
        		return;
        	}

        	var frmStatus = this.gfnGetFormStatus(this);

        	switch(frmStatus) {
        	case "I":
        		this.FormBtns.Select.set_enable(false);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(false);

        		this.divData.form.ccfCD_CLASS.set_enable(true);
        		break;
        	case "U":
        		this.FormBtns.Select.set_enable(true);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(true);
        		break;
        	case "D":
        		break;
        	default: /*기본(조회완료)*/
        		this.FormBtns.Select.set_enable(true);
        		this.FormBtns.Save.set_enable(false);
        		this.FormBtns.Del.set_enable(true);

        		this.divData.form.ccfCD_CLASS.set_enable(false);
        	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ARCH_TY_PROJ = "SA00102";
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "string");
        	this.dsSelect.addColumn("NO_PROV_CONT", "string");

        	this.dsSave = new Dataset();

        	this.dsSave.addColumn("CD_PROJ", "string");
        	this.dsSave.addColumn("NO_PROV_CONT", "bigdecimal");
        	this.dsSave.addColumn("CD_CLASS", "string");
        	this.dsSave.addColumn("DT_PROV_CONT", "string");
        	this.dsSave.addColumn("DS_BUILD", "string");
        	this.dsSave.addColumn("SZ_AREA", "bigdecimal");
        	this.dsSave.addColumn("SZ_AREA_M", "bigdecimal");
        	this.dsSave.addColumn("SZ_LAND", "bigdecimal");
        	this.dsSave.addColumn("SZ_LAND_M", "bigdecimal");
        	this.dsSave.addColumn("DT_SC_ST", "string");
        	this.dsSave.addColumn("DT_SC_ED", "string");
        	this.dsSave.addColumn("DT_COST_ED", "string");
        	this.dsSave.addColumn("AM_AREA", "bigdecimal");
        	this.dsSave.addColumn("AM_CONT_SUPPLY", "bigdecimal");
        	this.dsSave.addColumn("AM_CONT_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_SALE_TOT", "bigdecimal");
        	this.dsSave.addColumn("AM_BIZ", "bigdecimal");
        	this.dsSave.addColumn("DS_BIZ", "string");
        	this.dsSave.addColumn("ID_FILE_ATTCH", "string");
        	this.dsSave.addColumn("ID_ADD", "string");
        	this.dsSave.addColumn("OUT_CD_PROJ", "string");
        	this.dsSave.addColumn("OUT_NO_PROV_CONT", "bigdecimal");

        	this.dsSave.addRow();
        }


        /************************************************************************
         * 트렌젝션 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function(obj,e){
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSelect.setColumn(0, "NO_PROV_CONT", this.dsSearch.getColumn(0, "NO_PROV_CONT"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsBase=select0";
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

        this.fnSave = function(obj,e){
        	this.dsSave.copyRow(0, this.dsBase, 0);
        	this.dsSave.setColumn(0, "ID_ADD", this.AuthClient.ID_USER);

        	if(!this.fnSaveValidate()) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsBaseRst=save";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        }

        this.fnDel = function(obj,e){
        	this.gfnConfirm("삭제 하시겠습니까?", function(strId, val){
        		if(val == true) {
        			var strSvcId    = "delete";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "delete=dsBase";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcType , 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc,false); // 통신방법 정의 [생략가능]
        		}
        	});
        }


        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	this.gfnGetServerTime("serverTime");
        	this.dsBase.set_enableevent(false);
        	this.dsBase.setColumn(0, "DT_PROV_CONT", nexacro.replaceAll(this.serverTime.substr(0,10),"-",""));
        	this.dsBase.set_enableevent(true);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	if (errorCode == 0) {
        		if(svcID == "save") {
        			this.dsSearch.setColumn(0, "CD_PROJ", this.dsBaseRst.getColumn(0, "OUT_CD_PROJ"));
        			this.dsSearch.setColumn(0, "NO_PROV_CONT", this.dsBaseRst.getColumn(0, "OUT_NO_PROV_CONT"));
        			this.FormBtns.Select.click();
        		} else if(svcID == "select") {
        			if(this.gfnGetFormStatus(this) == "I"){
        				this.fnAdd();
        			} else {
        			    this.gfnSetFormStatus(this, "");
        				// 첨부파일
        				var fileManager = {};
        				fileManager.CD_GUBUN = "DOA2";
        				fileManager.CD_DIR = [ this.getOwnerFrame().CD_PROJ.toString() , this.getOwnerFrame().NO_PROV_CONT.toString()];
        				fileManager.CD_REF1 = this.getOwnerFrame().CD_PROJ.toString();
        				fileManager.CD_REF2 = this.getOwnerFrame().NO_PROV_CONT.toString();

        				if(this.FormInfo.TY_AUTH == "R") {
        					fileManager.IS_READONLY = true;
        				} else {
        					fileManager.IS_READONLY = false;
        				}
        				// div FileManager 셋팅
        				this.divData.form.divFile.form.setFileManager(fileManager);

        				this.divData.form.divFile.set_enable(true);

        			}
        			this.fnSetButton();
        		} else if(svcID == "delete"){
        			this.getParentContext().close();
        		} else if(svcID == "selectCharge"){

        		}
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        };

        this.fnSaveValidate = function(){
        	if(this.gfnIsNull(this.dsBase.getColumn(0, "CD_CLASS"))){
        		this.gfnAlert("약정구분은 필수 입력 입니다.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "DT_PROV_CONT"))){
        		this.gfnAlert("약정일자는 필수 입력 입니다.");
        		return false;
        	}
        	return true;
        }

        this.dsBase_onvaluechanged = function(obj,e){
        	var _tot=0,_vat=0;

        	if(e.oldvalue != e.newvalue) {
        		if(e.columnid == "SZ_AREA_M"){
        			_val = nexacro.round(e.newvalue / 3.3058,2);
        			this.dsBase.set_enableevent(false);
        			obj.setColumn(0, "SZ_AREA", _val);
        			this.dsBase.set_enableevent(true);
        		} else if(e.columnid == "SZ_LAND_M"){
        			_val = nexacro.round(e.newvalue / 3.3058,2);
        			this.dsBase.set_enableevent(false);
        			obj.setColumn(0, "SZ_LAND", _val);
        			this.dsBase.set_enableevent(true);
        		} else if(e.columnid == "AM_CONT_SUPPLY") {
        			//2020.02.26  한대운 숫자변환 수정
        			this.dsBase.set_enableevent(false);
        			_vat = nexacro.toNumber(obj.getColumn(0, "AM_CONT_SUPPLY"),0)*0.1;
        			_tot = nexacro.toNumber(obj.getColumn(0, "AM_CONT_SUPPLY"),0) + _vat;
        			obj.setColumn(0, "AM_CONT_VAT", _vat);
        			obj.setColumn(0, "AM_SALE_TOT", _tot);
        			this.dsBase.set_enableevent(true);
        		} else if(e.columnid == "AM_CONT_VAT"){
        			//2020.02.26  한대운 숫자변환 수정
        			_tot = nexacro.toNumber(obj.getColumn(0, "AM_CONT_SUPPLY"),0) + nexacro.toNumber(obj.getColumn(0, "AM_CONT_VAT"),0);
        			this.dsBase.set_enableevent(false);
        			obj.setColumn(0, "AM_SALE_TOT", _tot);
        			this.dsBase.set_enableevent(true);
        		}

        		if(this.gfnGetFormStatus(this) == "I"){
        			this.gfnSetFormStatus(this, "I");
        		}else{
        			this.gfnSetFormStatus(this, "U");
        		}
        		this.fnSetButton();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.ctclDT_PROV_CONT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.ctclDT_SC_ST.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.ctclDT_SC_ED.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.ctclDT_COST_ED.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsBase.addEventHandler("onvaluechanged",this.dsBase_onvaluechanged,this);
        };
        this.loadIncludeScript("DOA_ARCH_PROV_CONT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
