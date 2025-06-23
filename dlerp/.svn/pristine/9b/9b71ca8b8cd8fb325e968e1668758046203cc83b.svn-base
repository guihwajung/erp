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
            this.set_titletext("보험관리 종함");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EBGT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EBGT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DOGEUB_PROV\" type=\"STRING\" size=\"256\"/><Column id=\"RT_JIBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GONGSA\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DOGEUB_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SOJANG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CHONGMU\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JUNGSAN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSGPR_JONGHAP</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"YN_E_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GONGDONG\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RMGONGDONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GONGHASU\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM_DOKUB\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO_DOKUB\" type=\"STRING\" size=\"256\"/><Column id=\"FR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"TO_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"RT_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CLEARING\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INSURANCE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CONDITION_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONDITION_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTPRO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTVAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LABOR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INJISE_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INJISE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PREPAY1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYPRO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYVAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PREPAY2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"RT_CONTGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUARANTEEGIGAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GISUNGBUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GISUNGMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GISUNGETC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAY_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GISUNG5\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ASGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"RT_ASGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ASGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ASFROMTO_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ASFROMTO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"RT_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RM_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROFIT_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"RM_REMARK_GW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"YN_E_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GONGDONG\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RMGONGDONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GONGHASU\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM_DOKUB\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO_DOKUB\" type=\"STRING\" size=\"256\"/><Column id=\"FR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"TO_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"RT_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CLEARING\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INSURANCE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CONDITION_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONDITION_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTPRO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTVAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LABOR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INJISE_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INJISE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PREPAY1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYPRO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYVAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PREPAY2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"RT_CONTGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUARANTEEGIGAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GISUNGBUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GISUNGMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GISUNGETC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAY_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GISUNG5\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ASGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"RT_ASGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ASGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ASFROMTO_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ASFROMTO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"RT_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RM_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROFIT_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"RM_REMARK_GW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","880","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("일반사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData01","0","sta01:10","980","117",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("공사금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta02:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("2");
            obj.set_text("부가가치세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("3");
            obj.set_text("소장");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta11","sta01:-1","0","240","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta12","sta02:-1","sta11:-1","240","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta13","sta03:-1","sta12:-1","240","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta14","sta04:-1","sta13:-1","240","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta21","358","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("8");
            obj.set_text("실행공기");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta31","sta21:-1","0","478","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_EBGT_FROM","482","5","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_GONGSA_range00","tclDT_EBGT_FROM:5","5","10","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("10");
            obj.set_text("~");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_EBGT_TO","staDT_GONGSA_range00:5","5","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DOGEUB_PROV","125","34","229","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("13");
            obj.set_format("9,999");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DOGEUB_VAT","125","63","229","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("14");
            obj.set_format("9,999");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_SOJANG","125","92","229","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta22","358","29","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("16");
            obj.set_text("지분율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta23","477","29","180","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta24","656","29","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("18");
            obj.set_text("공사구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta32","775","29","180","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta33","358","58","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("20");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta34","358","87","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("21");
            obj.set_text("관리책임자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta38","477","58","478","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta39","477","87","180","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta41","656","87","120","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("24");
            obj.set_text("정산일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta43","775","87","180","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_JIBUN","482","34","169","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("26");
            obj.set_format("9,999");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_GONGSA","780","34","170","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_JUNGSAN","780","92","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","482","62","468","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_CHONGMU","482","92","170","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtCD_SITE","124","5","56","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_SITE","184","5","170","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta02","0","divData01:10","882","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("보험기호");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData02","0","sta02:10","955","182",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta03","0","divData02:10","882","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("보험원가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData03","0","sta03:10","955","293",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divData03.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item24","divData.form.divData01.form.tclDT_EBGT_FROM","value","dsList","DT_EBGT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divData01.form.tclDT_EBGT_TO","value","dsList","DT_EBGT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.divData01.form.txtAM_DOGEUB_PROV","value","dsList","AM_DOGEUB_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divData01.form.txtAM_DOGEUB_VAT","value","dsList","AM_DOGEUB_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divData01.form.txtRT_JIBUN","value","dsList","RT_JIBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divData01.form.tclDT_JUNGSAN","value","dsList","DT_JUNGSAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divData01.form.txtCD_SITE","value","dsList","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divData01.form.txtDS_SITE","value","dsList","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData01.form.txtDS_SOJANG","value","dsList","DS_SOJANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divData01.form.txtDS_CHONGMU","value","dsList","DS_CHONGMU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divData01.form.txtDS_VENDOR","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divData01.form.txtDS_GONGSA","value","dsList","DS_GONGSA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DSG_JONGHAP.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.FormBtns.Select.click();
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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divData02.form.objGrid;
        	this.dxGrid1 = this.divData.form.divData03.form.objGrid1;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList1, "DS", "DSG_JONGHAP1");
        	this.gfnGridInit(this.dxGrid1, this.dsList2, "DS", "DSG_JONGHAP2");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsList1=select1 dsList2=select2";
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
         *	엑셀 버튼
         */
        this.fnExcel = function() {

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
        	var validate = true;
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	*/
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

        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.dsList.clearData();	// 싱글폼데이터 초기화
        		this.dsList1.clearData();	// 싱글폼데이터 초기화
        		this.dsList2.clearData();	// 싱글폼데이터 초기화
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divData01.form.sta01.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta21.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta22.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta24.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta33.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta34.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta41.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSG_JONGHAP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
