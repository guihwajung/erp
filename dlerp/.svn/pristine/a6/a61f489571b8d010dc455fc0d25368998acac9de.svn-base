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
            this.set_titletext("입주종합현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FGETAREA\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHAKGONG\" type=\"STRING\" size=\"256\"/><Column id=\"YN_JUNGONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JUNGONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BUNYANG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJU\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_LAND_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTAL_BUILDING_AREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TOTCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BLDGPLAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_AREAPLAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TOTCONTRACT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BLDGCONTRACT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ARCONTRACT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YM_BYCOST\" type=\"STRING\" size=\"256\"/><Column id=\"YM_AREACOST\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BYINFO\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BYPROG\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BYMISUNG\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BYINCOME\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BYCOST2\" type=\"STRING\" size=\"256\"/><Column id=\"YM_AREACOST2\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BYINFO2\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BYPROG2\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BYMISUNG2\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BYINCOME2\" type=\"STRING\" size=\"256\"/><Column id=\"SQ_TBLDG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SQ_TAREA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_AREAORAM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHMPR_SITE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHMPR_SITE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHMPR_SITE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHMPR_SITE_DELETE</Col></Row><Row><Col id=\"SP\">DHMPR_SITEDATA_SELECT</Col><Col id=\"TARGET\">execute</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_JUNGONG", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">예</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_ACNTUNIT:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("현장정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","140","sta00:-20","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("용지코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","sta00:-20","458","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta01:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("착공일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","sta01:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta01:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("용지매입완료일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","sta01:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","0","sta03:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("준공여부");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta04:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta05:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("준공일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","sta06:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","0","sta07:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("분양일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","sta11:-1","sta08:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","sta09:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("입주예정일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","sta13:-1","sta10:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","0","sta11:10",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta16","0","sta15:10","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("총공사예정원가");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","sta15:10","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","sta17:-1","sta15:10","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("총계약금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","sta18:-1","sta15:10","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta20","sta19:-1","sta15:10","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("총면적");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21","sta20:-1","sta15:10","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","0","sta16:10",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23","0","sta22:10",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("아파트");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta24","0","sta23:5","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("분양정보작업년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta25","sta24:-1","sta23:5","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta26","sta25:-1","sta23:5","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("분양원가작업년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta27","sta26:-1","sta23:5","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta28","sta27:-1","sta23:5","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("진행율년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta29","sta28:-1","sta23:5","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta30","0","sta24:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("택지원가작업년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta31","sta30:-1","sta25:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta32","sta31:-1","sta26:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("분양미성(완성)년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta33","sta32:-1","sta27:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta34","sta33:-1","sta28:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("분양수입년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta35","sta34:-1","sta29:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta36","0","sta30:10",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("상가");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta37","0","sta36:3","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("분양정보작업년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta38","sta37:-1","sta36:3","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta39","sta38:-1","sta36:3","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("분양원가작업년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta40","sta39:-1","sta36:3","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta41","sta40:-1","sta36:3","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_text("진행율년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta42","sta41:-1","sta36:3","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta43","0","sta37:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_text("택지원가작업년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta44","sta43:-1","sta38:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta45","sta44:-1","sta39:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_text("분양미성(완성)년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta46","sta45:-1","sta40:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta47","sta46:-1","sta41:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_text("분양수입년월");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta48","sta47:-1","sta42:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_AREA","sta01:5","sta00:-15","445","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFAREACODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("49");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CHAKGONG","sta03:5","sta04:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_FGETAREA","sta05:5","sta06:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_JUNGONG","sta07:5","sta08:-25","145","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_JUNGONG");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_JUNGONG","sta09:5","sta10:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_BUNYANG","sta11:5","sta12:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_IPJU","sta13:5","sta14:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TPCCOST","sta16:5","sta17:-25","145","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_value("");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TPCCONTRACT","sta18:5","sta19:-25","145","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_value("");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtSZ_TOTAL_BUILDING_AREA","sta20:5","sta21:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_value("");
            obj.set_format("#,###.####");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta56","txtSZ_TOTAL_BUILDING_AREA:5","sta21:-25","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_text("㎡");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_BYINFO","sta24:5","sta25:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_BYCOST","sta26:5","sta27:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_BYPROG","sta28:5","sta29:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_AREACOST","sta30:5","sta31:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_BYMISUNG","sta32:5","sta33:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_BYINCOME","sta34:5","sta35:-24","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_BYINFO2","sta37:5","sta38:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_BYCOST2","sta39:5","sta40:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_BYPROG2","sta41:5","sta42:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_AREACOST2","sta43:5","sta44:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_BYMISUNG2","sta45:5","sta46:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_BYINCOME2","sta47:5","sta48:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.cfCD_AREA.form.CDTextBox","value","dsList","CD_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cfCD_AREA.form.DSTextBox","value","dsList","DS_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tclDT_CHAKGONG","value","dsList","DT_CHAKGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tclDT_FGETAREA","value","dsList","DT_FGETAREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.rdoYN_JUNGONG","value","dsList","YN_JUNGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tclDT_JUNGONG","value","dsList","DT_JUNGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tclDT_BUNYANG","value","dsList","DT_BUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tclDT_IPJU","value","dsList","DT_IPJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtAM_TPCCOST","value","dsList","AM_TOTCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtAM_TPCCONTRACT","value","dsList","AM_TOTCONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.txtSZ_TOTAL_BUILDING_AREA","value","dsList","TOTAL_BUILDING_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tclYM_BYINFO.form.TextBox","value","dsList","YM_BYINFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tclYM_BYCOST.form.TextBox","value","dsList","YM_BYCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tclYM_BYPROG.form.TextBox","value","dsList","YM_BYPROG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.tclYM_AREACOST.form.TextBox","value","dsList","YM_AREACOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tclYM_BYMISUNG.form.TextBox","value","dsList","YM_BYMISUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tclYM_BYINCOME.form.TextBox","value","dsList","YM_BYINCOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.tclYM_BYINFO2.form.TextBox","value","dsList","YM_BYINFO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.tclYM_BYCOST2.form.TextBox","value","dsList","YM_BYCOST2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.tclYM_BYPROG2.form.TextBox","value","dsList","YM_BYPROG2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.tclYM_AREACOST2.form.TextBox","value","dsList","YM_AREACOST2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.tclYM_BYMISUNG2.form.TextBox","value","dsList","YM_BYMISUNG2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.tclYM_BYINCOME2.form.TextBox","value","dsList","YM_BYINCOME2");
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
        this.registerScript("DHM_SITE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.bSiteNew = true;

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

        	this.jResult = {};
        	this.jResult.bIsSave = false;

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_DEPT_ACNT)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_DEPT_ACNT);
        		this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_DEPT_ACNT);
        		this.bSiteNew = this.getOwnerFrame().bSiteNew == "true";
        	}

        	if (!this.bSiteNew) {
        		this.FormBtns.Add.set_visible(false);
        		this.FormBtns.Select.click();
        	}
        	else {
        		this.FormBtns.Add.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnGetData = this.gfnFormButtonAdd("GetData", "fnGetData");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("CD_AREA", "string");
        	this.dsInsert.addColumn("DT_FGETAREA", "string");
        	this.dsInsert.addColumn("DT_CHAKGONG", "string");
        	this.dsInsert.addColumn("YN_JUNGONG", "string");
        	this.dsInsert.addColumn("DT_JUNGONG", "string");
        	this.dsInsert.addColumn("DT_BUNYANG", "string");
        	this.dsInsert.addColumn("DT_IPJU", "string");
        	this.dsInsert.addColumn("SZ_TOTAL_LAND_AREA", "bigdecimal");
        	this.dsInsert.addColumn("SZ_TOTAL_BUILDING_AREA", "bigdecimal");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("YM_BYINFO", "string");
        	this.dsInsert.addColumn("YM_BYCOST", "string");
        	this.dsInsert.addColumn("YM_AREACOST", "string");
        	this.dsInsert.addColumn("YM_BYPROG", "string");
        	this.dsInsert.addColumn("YM_BYMISUNG", "string");
        	this.dsInsert.addColumn("YM_BYINCOME", "string");
        	this.dsInsert.addColumn("YM_BYINFO2", "string");
        	this.dsInsert.addColumn("YM_BYCOST2", "string");
        	this.dsInsert.addColumn("YM_AREACOST2", "string");
        	this.dsInsert.addColumn("YM_BYPROG2", "string");
        	this.dsInsert.addColumn("YM_BYMISUNG2", "string");
        	this.dsInsert.addColumn("YM_BYINCOME2", "string");
        	this.dsInsert.addColumn("AM_TPCCOST", "bigdecimal");
        	this.dsInsert.addColumn("AM_ARCOST", "bigdecimal");
        	this.dsInsert.addColumn("AM_TPCCONTRACT", "bigdecimal");
        	this.dsInsert.addColumn("AM_ARCONTRACT", "bigdecimal");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("CD_AREA", "string");
        	this.dsUpdate.addColumn("DT_FGETAREA", "string");
        	this.dsUpdate.addColumn("DT_CHAKGONG", "string");
        	this.dsUpdate.addColumn("YN_JUNGONG", "string");
        	this.dsUpdate.addColumn("DT_JUNGONG", "string");
        	this.dsUpdate.addColumn("DT_BUNYANG", "string");
        	this.dsUpdate.addColumn("DT_IPJU", "string");
        	this.dsUpdate.addColumn("SZ_TOTAL_LAND_AREA", "bigdecimal");
        	this.dsUpdate.addColumn("SZ_TOTAL_BUILDING_AREA", "bigdecimal");
        	this.dsUpdate.addColumn("ID_INSERT", "string");
        	this.dsUpdate.addColumn("YM_BYINFO", "string");
        	this.dsUpdate.addColumn("YM_BYCOST", "string");
        	this.dsUpdate.addColumn("YM_AREACOST", "string");
        	this.dsUpdate.addColumn("YM_BYPROG", "string");
        	this.dsUpdate.addColumn("YM_BYMISUNG", "string");
        	this.dsUpdate.addColumn("YM_BYINCOME", "string");
        	this.dsUpdate.addColumn("YM_BYINFO2", "string");
        	this.dsUpdate.addColumn("YM_BYCOST2", "string");
        	this.dsUpdate.addColumn("YM_AREACOST2", "string");
        	this.dsUpdate.addColumn("YM_BYPROG2", "string");
        	this.dsUpdate.addColumn("YM_BYMISUNG2", "string");
        	this.dsUpdate.addColumn("YM_BYINCOME2", "string");
        	this.dsUpdate.addColumn("AM_TPCCOST", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ARCOST", "bigdecimal");
        	this.dsUpdate.addColumn("AM_TPCCONTRACT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ARCONTRACT", "bigdecimal");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("CD_SITE", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

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
        	this.dsSearch.setColumn(0, "CD_SITE", "");
        	this.dsSearch.setColumn(0, "DS_SITE", "");

        	this.dsList.clearData();
        	this.dsList.addRow();
        	this.gfnSetFormStatus(this, "I");
        	this.bSiteNew = true;
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if (!this.fnSelectValidate()) return;

        	this.gfnConfirm("현재 자료를 삭제하시겠습니까?", "fnDel_callback");
        }

        this.fnDel_callback = function(strID, val) {
        	if (!val) return;

        	this.gfnSetFormStatus(this, "D");

        	this.dsDelete.clearData();
        	var nrow = this.dsDelete.addRow();
        	this.dsDelete.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	var strSvcId    = "delete";
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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	var flag = this.gfnGetFormStatus(this);
        	switch(flag) {
        		case "I":
        			var nrow = this.dsInsert.addRow();
        			this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsInsert.setColumn(nrow, "CD_AREA", this.dsList.getColumn(0, "CD_AREA"));
        			this.dsInsert.setColumn(nrow, "DT_FGETAREA", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "DT_FGETAREA")), "-", ""));
        			this.dsInsert.setColumn(nrow, "DT_CHAKGONG", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "DT_CHAKGONG")), "-", ""));
        			this.dsInsert.setColumn(nrow, "YN_JUNGONG", this.dsList.getColumn(0, "YN_JUNGONG"));
        			this.dsInsert.setColumn(nrow, "DT_JUNGONG", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "DT_JUNGONG")), "-", ""));
        			this.dsInsert.setColumn(nrow, "DT_BUNYANG", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "DT_BUNYANG")), "-", ""));
        			this.dsInsert.setColumn(nrow, "DT_IPJU", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "DT_IPJU")), "-", ""));
        			this.dsInsert.setColumn(nrow, "SZ_TOTAL_LAND_AREA", 0);
        			this.dsInsert.setColumn(nrow, "SZ_TOTAL_BUILDING_AREA", this.dsList.getColumn(0, "TOTAL_BUILDING_AREA"));
        			this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        			this.dsInsert.setColumn(nrow, "YM_BYINFO", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYINFO")), "-", ""));
        			this.dsInsert.setColumn(nrow, "YM_BYCOST", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYCOST")), "-", ""));
        			this.dsInsert.setColumn(nrow, "YM_AREACOST", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_AREACOST")), "-", ""));
        			this.dsInsert.setColumn(nrow, "YM_BYPROG", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYPROG")), "-", ""));
        			this.dsInsert.setColumn(nrow, "YM_BYMISUNG", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYMISUNG")), "-", ""));
        			this.dsInsert.setColumn(nrow, "YM_BYINCOME", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYINCOME")), "-", ""));
        			this.dsInsert.setColumn(nrow, "YM_BYINFO2", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYINFO2")), "-", ""));
        			this.dsInsert.setColumn(nrow, "YM_BYCOST2", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYCOST2")), "-", ""));
        			this.dsInsert.setColumn(nrow, "YM_AREACOST2", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_AREACOST2")), "-", ""));
        			this.dsInsert.setColumn(nrow, "YM_BYPROG2", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYPROG2")), "-", ""));
        			this.dsInsert.setColumn(nrow, "YM_BYMISUNG2", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYMISUNG2")), "-", ""));
        			this.dsInsert.setColumn(nrow, "YM_BYINCOME2",nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYINCOME2")), "-", ""));
        			this.dsInsert.setColumn(nrow, "AM_TPCCOST", this.dsList.getColumn(0, "AM_TOTCOST"));
        			this.dsInsert.setColumn(nrow, "AM_ARCOST", 0);
        			this.dsInsert.setColumn(nrow, "AM_TPCCONTRACT", this.dsList.getColumn(0, "AM_TOTCONTRACT"));
        			this.dsInsert.setColumn(nrow, "AM_ARCONTRACT", 0);
        			break;

        		case "U":
        			var nrow = this.dsUpdate.addRow();
        			this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsUpdate.setColumn(nrow, "CD_AREA", this.dsList.getColumn(0, "CD_AREA"));
        			this.dsUpdate.setColumn(nrow, "DT_FGETAREA", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "DT_FGETAREA")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "DT_CHAKGONG", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "DT_CHAKGONG")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "YN_JUNGONG", this.dsList.getColumn(0, "YN_JUNGONG"));
        			this.dsUpdate.setColumn(nrow, "DT_JUNGONG", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "DT_JUNGONG")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "DT_BUNYANG", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "DT_BUNYANG")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "DT_IPJU", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "DT_IPJU")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "SZ_TOTAL_LAND_AREA", 0);
        			this.dsUpdate.setColumn(nrow, "SZ_TOTAL_BUILDING_AREA", this.dsList.getColumn(0, "TOTAL_BUILDING_AREA"));
        			this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        			this.dsUpdate.setColumn(nrow, "YM_BYINFO", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYINFO")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "YM_BYCOST", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYCOST")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "YM_AREACOST", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_AREACOST")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "YM_BYPROG", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYPROG")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "YM_BYMISUNG", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYMISUNG")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "YM_BYINCOME", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYINCOME")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "YM_BYINFO2", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYINFO2")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "YM_BYCOST2", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYCOST2")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "YM_AREACOST2", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_AREACOST2")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "YM_BYPROG2", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYPROG2")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "YM_BYMISUNG2", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYMISUNG2")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "YM_BYINCOME2", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "YM_BYINCOME2")), "-", ""));
        			this.dsUpdate.setColumn(nrow, "AM_TPCCOST", this.dsList.getColumn(0, "AM_TOTCOST"));
        			this.dsUpdate.setColumn(nrow, "AM_ARCOST", 0);
        			this.dsUpdate.setColumn(nrow, "AM_TPCCONTRACT", this.dsList.getColumn(0, "AM_TOTCONTRACT"));
        			this.dsUpdate.setColumn(nrow, "AM_ARCONTRACT", 0);
        			break;

        		case "D":
        			var nrow = this.dsDelete.addRow();
        			this.dsDelete.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			break;
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        	//this.gfnExcelExport(this.dxGrid);
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드가 입력되지 않았습니다.");
        		return false;
        	}
        	return true;
        };

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var strMsg = "";

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_CHAKGONG"))) {
        		strMsg += "착공일자는 반드시 입력 하셔야 합니다.\n";
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "DT_JUNGONG"))) {
        		strMsg += "준공일자는 반드시 입력 하셔야 합니다.\n";
        	}

        	if (strMsg.length > 0) {
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
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.jResult = {};
        			this.jResult.bIsSave = true;

        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "delete") {
        		if (errorCode == 0) {
        			this.jResult = {};
        			this.jResult.bIsSave = true;
        			this.getParentContext().close(JSON.stringify(this.jResult));
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "execute") {
        		if (this.dsResult.rowcount == 0) {
        			this.gfnAlert("자료가 없습니다.");
        		}
        		else {
        			this.dsList.setColumn(0, "DT_CHAKGONG", this.dsResult.getColumn(0, "DT_ST"));
        			this.dsList.setColumn(0, "DT_JUNGONG", this.dsResult.getColumn(0, "DT_COMPLETE"));

        			this.dsList.setColumn(0, "AM_TOTCOST", this.dsResult.getColumn(0, "AM_SUM"));
        			this.dsList.setColumn(0, "AM_TOTCONTRACT", this.dsResult.getColumn(0, "AM_BUNYANG"));
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.AuthClient.CD_CORP;
        	if (id == "ccfCD_SITE") {
        		//dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);

        		if(this.gfnIsNull(sCdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		//dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		//dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		//dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);

        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		if (!this.bSiteNew) {
        			this.gfnSetFormStatus(this);
        			this.dsList.clearData();
        		}
        	}
        }

        this.dsList_oncolumnchanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		if (this.bSiteNew)
        			this.gfnSetFormStatus(this, "I");
        		else
        			this.gfnSetFormStatus(this, "U");
        	}
        };

        /************************************************************************
         * 확장 버튼 실행
         ************************************************************************/
        this.fnGetData = function(obj,e) {
        	if (!this.fnSelectValidate()) return;

        	this.dsExecute.clearData();
        	this.dsExecute.addRow();
        	this.dsExecute.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	var strSvcId    = "execute";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
         	var inData      = "execute=dsExecute";
         	var outData     = "dsResult=execute0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnClose = function() {
        	this.getParentContext().close(JSON.stringify(this.jResult));
        	return false;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHM_SITE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
