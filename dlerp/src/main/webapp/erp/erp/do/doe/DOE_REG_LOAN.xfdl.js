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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(960,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_LOAN\" type=\"INT\" size=\"256\"/><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"TY_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LOAN\" type=\"INT\" size=\"256\"/><Column id=\"DT_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"TY_LS\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_LOAN\" type=\"INT\" size=\"256\"/><Column id=\"RT_OVER\" type=\"INT\" size=\"256\"/><Column id=\"DT_FR_INT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO_INT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REPAY_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPIRE\" type=\"STRING\" size=\"256\"/><Column id=\"RM_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_LOAND\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOEPR_REG_LOAN_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DOEPR_REG_LOAN_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DOEPR_REG_LOAN_DELETE</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DOEPR_REG_LOAN_UPDATE</Col></Row><Row><Col id=\"TARGET\">slip</Col><Col id=\"SP\">DOEPR_AUTOSLIP_ISSUE</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DOEPR_AUTOSLIP_ISSUE_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_INT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">유이자</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">무이자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">현금</Col><Col id=\"CD_CODE\">C</Col></Row><Row><Col id=\"DS_CODE\">어음</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_LS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">L</Col><Col id=\"DS_CODE\">장기</Col></Row><Row><Col id=\"CD_CODE\">S</Col><Col id=\"DS_CODE\">단기</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_FIELD","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_FIELD","staCD_FIELD:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.getSetter("FitToContent").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_SLIP","ccfCD_FIELD:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SLIP","staNO_SLIP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_LOAN","0","0","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("대여금구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","staTY_LOAN:-1","0","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_LOAND","staBg01:-1","0","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("대여항목");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg02","staTY_LOAND:-1","0","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","staTY_LOAN:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("대여업체");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg03","staCD_VENDOR:-1","staBg01:-1","445","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_PAY_VENDOR","0","staCD_VENDOR:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("지급업체");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg04","staCD_PAY_VENDOR:-1","staBg03:-1","445","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_INT","0","staCD_PAY_VENDOR:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("이자구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg05","staTY_INT:-1","staBg04:-1","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_LOAN","staBg05:-1","staBg04:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("이자율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg06","staRT_LOAN:-1","staBg04:-1","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_CN","0","staTY_INT:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("현금/어음");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg07","staTY_CN:-1","staBg05:-1","445","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_INT","0","staTY_CN:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("이자가산일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg08","staDT_INT:-1","staBg07:-1","445","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_ETC","0","staDT_INT:-1","87","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg09","staRM_ETC:-1","staBg08:-1","830","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_LOAN","staBg02:-1","0","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("대여금액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg10","staAM_LOAN:-1","0","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_LOAN","staBg03:-1","staAM_LOAN:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("대여일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg11","staDT_LOAN:-1","staAM_LOAN:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_LS","staBg04:-1","staDT_LOAN:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("장단기구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg12","staTY_LS:-1","staBg11:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_OVER","staBg06:-1","staTY_LS:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("연체이자율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg13","staRT_OVER:-1","staBg12:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REPAY_CONT","staBg07:-1","staRT_OVER:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("상환일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg14","staDT_REPAY_CONT:-1","staBg13:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","staBg08:-1","staDT_REPAY_CONT:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("집행요청일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg15","staDT_REQUEST:-1","staBg14:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfTY_LOAN","staTY_LOAN:5","5","170","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DOX_CFTYLOAN");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("31");
            obj.getSetter("FitToContent").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfTY_LOAND","staTY_LOAND:5","5","170","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DOX_CFLOANITEM");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("32");
            obj.getSetter("FitToContent").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:5","ccfTY_LOAN:9","435","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFVENDOR_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("33");
            obj.getSetter("FitToContent").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_PAY_VENDOR","staCD_PAY_VENDOR:5","ccfCD_VENDOR:9","435","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFVENDOR_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("34");
            obj.getSetter("FitToContent").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoTY_INT","staTY_INT:5","ccfCD_PAY_VENDOR:9","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_innerdataset("dsTY_INT");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_LOAN","staRT_LOAN:5","ccfCD_PAY_VENDOR:9","153","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.##");
            obj.set_type("number");
            obj.set_maskchar(" ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staPERCENT","ctxtRT_LOAN:5","ccfCD_PAY_VENDOR:4","20","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("%");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoTY_CN","staTY_CN:5","ctxtRT_LOAN:9","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_innerdataset("dsTY_CN");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FR_INT","staDT_INT:5","crdoTY_CN:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_FR_INT:10","crdoTY_CN:9","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO_INT","sta_range:10","crdoTY_CN:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LOAN","staAM_LOAN:5","5","148","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,#");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staWON","ctxtAM_LOAN:5","0","20","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_LOAN","staDT_LOAN:5","ctxtAM_LOAN:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoTY_LS","staTY_LS:5","ctclDT_LOAN:9","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_innerdataset("dsTY_LS");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_OVER","staRT_OVER:5","crdoTY_LS:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0.##");
            obj.set_type("number");
            obj.set_maskchar(" ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staPERCENT0","ctxtRT_OVER:5","crdoTY_LS:4","20","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_text("%");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REPAY_CONT","staDT_REPAY_CONT:5","ctxtRT_OVER:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQUEST","staDT_REQUEST:5","ctclDT_REPAY_CONT:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtRM_ETC","staRM_ETC:5","ctclDT_FR_INT:9","820","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfTY_LOAN.form.CDTextBox","value","dsList","TY_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfTY_LOAN.form.DSTextBox","value","dsList","DS_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccfCD_VENDOR.form.CDTextBox","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfCD_VENDOR.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfCD_PAY_VENDOR.form.CDTextBox","value","dsList","CD_PAY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ccfCD_PAY_VENDOR.form.DSTextBox","value","dsList","DS_PAY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.crdoTY_INT","value","dsList","TY_INT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctxtRT_LOAN","value","dsList","RT_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.crdoTY_CN","value","dsList","TY_CN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ctclDT_FR_INT","value","dsList","DT_FR_INT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctclDT_TO_INT","value","dsList","DT_TO_INT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctxtRM_ETC","value","dsList","RM_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ctxtAM_LOAN","value","dsList","AM_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ctclDT_LOAN","value","dsList","DT_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.crdoTY_LS","value","dsList","TY_LS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ctxtRT_OVER","value","dsList","RT_OVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.ctclDT_REPAY_CONT","value","dsList","DT_REPAY_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.ctclDT_EXPIRE","value","dsList","DT_EXPIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.ctxtNO_SLIP","value","dsList","CD_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.ccfCD_FIELD.form.CDTextBox","value","dsList","CD_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.ccfCD_FIELD.form.DSTextBox","value","dsList","DS_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.ctclDT_REQUEST","value","dsList","DT_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.ccfTY_LOAND.form.CDTextBox","value","dsList","TY_LOAND");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOE_REG_LOAN.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_LOAN))
        	{
        		this.dsList.setColumn(0, "CD_LOAN", this.getOwnerFrame().CD_LOAN);
        		this.divSearch.form.ccfCD_FIELD.form.fnFitToContents();

        		this.FormBtns.Select.click();
        	}
        	else
        	{
        		this.gfnSetFormStatus(this);
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Add.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCancel = this.gfnFormButtonAdd("btnCancel", "fnCancel");
        	this.btnIssue = this.gfnFormButtonAdd("btnIssue", "fnIssue");
        	this.btnslipdetail = this.gfnFormButtonAdd("btnslipdetail", "fnSlipDetail");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.divData.form.ccfTY_LOAN.AfterCDTextChanged = "fnAfterCDTextChanged";
         	this.divData.form.ccfTY_LOAND.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_LOAN", "int");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_LOAN", "int");
        	this.dsInsert.addColumn("CD_FIELD", "string");
        	this.dsInsert.addColumn("TY_LOAN", "string");
        	this.dsInsert.addColumn("TY_LOAND", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("CD_PAY_VENDOR", "string");
        	this.dsInsert.addColumn("AM_LOAN", "bigdecimal");
        	this.dsInsert.addColumn("DT_LOAN", "string");
        	this.dsInsert.addColumn("TY_LS", "string");
        	this.dsInsert.addColumn("TY_CN", "string");
        	this.dsInsert.addColumn("TY_INT", "string");
        	this.dsInsert.addColumn("RT_LOAN", "bigdecimal");
        	this.dsInsert.addColumn("RT_OVER", "bigdecimal");
        	this.dsInsert.addColumn("DT_FR_INT", "string");
        	this.dsInsert.addColumn("DT_TO_INT", "string");
        	this.dsInsert.addColumn("DT_REPAY_CONT", "string");
        	this.dsInsert.addColumn("DT_REQUEST", "string");
        	this.dsInsert.addColumn("RM_ETC", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_LOAN", "int");
        	this.dsUpdate.addColumn("CD_FIELD", "string");
        	this.dsUpdate.addColumn("TY_LOAN", "string");
        	this.dsUpdate.addColumn("TY_LOAND", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_PAY_VENDOR", "string");
        	this.dsUpdate.addColumn("AM_LOAN", "bigdecimal");
        	this.dsUpdate.addColumn("DT_LOAN", "string");
        	this.dsUpdate.addColumn("TY_LS", "string");
        	this.dsUpdate.addColumn("TY_CN", "string");
        	this.dsUpdate.addColumn("TY_INT", "string");
        	this.dsUpdate.addColumn("RT_LOAN", "bigdecimal");
        	this.dsUpdate.addColumn("RT_OVER", "bigdecimal");
        	this.dsUpdate.addColumn("DT_FR_INT", "string");
        	this.dsUpdate.addColumn("DT_TO_INT", "string");
        	this.dsUpdate.addColumn("DT_REPAY_CONT", "string");
        	this.dsUpdate.addColumn("DT_REQUEST", "string");
        	this.dsUpdate.addColumn("RM_ETC", "string");
        	this.dsUpdate.addColumn("ID_INSERT", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_LOAN", "int");

        	this.dsSlip = new Dataset();
        	this.dsSlip.addColumn("CD_LOAN", "int");
        	this.dsSlip.addColumn("CD_DEPT_BH", "string");
        	this.dsSlip.addColumn("ID_USER", "string");

        	this.dsCancel = new Dataset();
        	this.dsCancel.addColumn("CD_LOAN", "int");
        	this.dsCancel.addColumn("ID_USER", "string");
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

        	this.dsSelect.setColumn(0, "CD_LOAN", this.dsList.getColumn(0, "CD_LOAN"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.dsList.clearData();
        	this.dsList.addRow();
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.fnDelCallback = function(strId, val)
        	{
        		if(val == true)
        		{
        			this.fnDelete();
        		}
        	}

        	this.gfnConfirm("삭제를 진행하시겠습니까?", "fnDelCallback");

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if(!this.fnSaveValidate()) return;

        	if(!this.gfnIsNull(this.dsList.getColumn(0, "CD_LOAN")) && this.dsList.getColumn(0, "CD_LOAN") != "")
        	{
        		this.fnUpdate();
        	}
        	else
        	{
        		this.fnInsert();
        	}
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

        this.fnInsert = function() {
        	this.dsInsert.clearData();

        	var nrow = this.dsInsert.addRow();
        	this.dsInsert.setColumn(nrow, "CD_FIELD", this.dsList.getColumn(0, "CD_FIELD"));
        	this.dsInsert.setColumn(nrow, "TY_LOAN", this.dsList.getColumn(0, "TY_LOAN"));
        	this.dsInsert.setColumn(nrow, "TY_LOAND", this.dsList.getColumn(0, "TY_LOAND"));
        	this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        	this.dsInsert.setColumn(nrow, "CD_PAY_VENDOR", this.dsList.getColumn(0, "CD_PAY_VENDOR"));
        	this.dsInsert.setColumn(nrow, "AM_LOAN", this.dsList.getColumn(0, "AM_LOAN"));
        	this.dsInsert.setColumn(nrow, "DT_LOAN", this.dsList.getColumn(0, "DT_LOAN"));
        	this.dsInsert.setColumn(nrow, "TY_LS", this.dsList.getColumn(0, "TY_LS"));
        	this.dsInsert.setColumn(nrow, "TY_CN", this.dsList.getColumn(0, "TY_CN"));
        	this.dsInsert.setColumn(nrow, "TY_INT", this.dsList.getColumn(0, "TY_INT"));
        	this.dsInsert.setColumn(nrow, "RT_LOAN", this.dsList.getColumn(0, "RT_LOAN"));
        	this.dsInsert.setColumn(nrow, "RT_OVER", this.dsList.getColumn(0, "RT_OVER"));
        	this.dsInsert.setColumn(nrow, "DT_FR_INT", this.dsList.getColumn(0, "DT_FR_INT"));
        	this.dsInsert.setColumn(nrow, "DT_TO_INT", this.dsList.getColumn(0, "DT_TO_INT"));
        	this.dsInsert.setColumn(nrow, "DT_REPAY_CONT", this.dsList.getColumn(0, "DT_REPAY_CONT"));
        	this.dsInsert.setColumn(nrow, "DT_REQUEST", this.dsList.getColumn(0, "DT_REQUEST"));
        	this.dsInsert.setColumn(nrow, "RM_ETC", this.dsList.getColumn(0, "RM_ETC"));
        	this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	if (this.dsInsert.rowcount == 0) return;

        	var strSvcId    = "insert";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
        	var outData     = "dsList=insert";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnUpdate = function() {
        	this.dsUpdate.clearData();

        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "CD_LOAN", this.dsList.getColumn(0, "CD_LOAN"));
        	this.dsUpdate.setColumn(nrow, "CD_FIELD", this.dsList.getColumn(0, "CD_FIELD"));
        	this.dsUpdate.setColumn(nrow, "TY_LOAN", this.dsList.getColumn(0, "TY_LOAN"));
        	this.dsUpdate.setColumn(nrow, "TY_LOAND", this.dsList.getColumn(0, "TY_LOAND"));
        	this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        	this.dsUpdate.setColumn(nrow, "CD_PAY_VENDOR", this.dsList.getColumn(0, "CD_PAY_VENDOR"));
        	this.dsUpdate.setColumn(nrow, "AM_LOAN", this.dsList.getColumn(0, "AM_LOAN"));
        	this.dsUpdate.setColumn(nrow, "DT_LOAN", this.dsList.getColumn(0, "DT_LOAN"));
        	this.dsUpdate.setColumn(nrow, "TY_LS", this.dsList.getColumn(0, "TY_LS"));
        	this.dsUpdate.setColumn(nrow, "TY_CN", this.dsList.getColumn(0, "TY_CN"));
        	this.dsUpdate.setColumn(nrow, "TY_INT", this.dsList.getColumn(0, "TY_INT"));
        	this.dsUpdate.setColumn(nrow, "RT_LOAN", this.dsList.getColumn(0, "RT_LOAN"));
        	this.dsUpdate.setColumn(nrow, "RT_OVER", this.dsList.getColumn(0, "RT_OVER"));
        	this.dsUpdate.setColumn(nrow, "DT_FR_INT", this.dsList.getColumn(0, "DT_FR_INT"));
        	this.dsUpdate.setColumn(nrow, "DT_TO_INT", this.dsList.getColumn(0, "DT_TO_INT"));
        	this.dsUpdate.setColumn(nrow, "DT_REPAY_CONT", this.dsList.getColumn(0, "DT_REPAY_CONT"));
        	this.dsUpdate.setColumn(nrow, "DT_REQUEST", this.dsList.getColumn(0, "DT_REQUEST"));
        	this.dsUpdate.setColumn(nrow, "RM_ETC", this.dsList.getColumn(0, "RM_ETC"));
        	this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "update";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnDelete = function()
        {
        	this.dsDelete.clearData();

        	var nrow = this.dsDelete.addRow();
        	this.dsDelete.setColumn(nrow, "CD_LOAN", this.dsList.getColumn(0, "CD_LOAN"));

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "delete";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
        	var outData     = "dsList=delete";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnIssue = function()
        {
        	this.dsSlip.clearData();
        	var nrow = this.dsSlip.addRow();

        	this.dsSlip.setColumn(nrow, "CD_LOAN", this.dsList.getColumn(0, "CD_LOAN"));
        	this.dsSlip.setColumn(nrow, "CD_DEPT_BH", this.AuthClient.CD_DEPT);
        	this.dsSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);


        	if (this.dsSlip.rowcount == 0) return;

        	var strSvcId    = "slip";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "slip=dsSlip";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnCancel = function()
        {
        	this.dsCancel.clearData();
        	var nrow = this.dsCancel.addRow();

        	this.dsCancel.setColumn(nrow, "CD_LOAN", this.dsList.getColumn(0, "CD_LOAN"));
        	this.dsCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsCancel.rowcount == 0) return;

        	var strSvcId    = "cancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cancel=dsCancel";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
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

        	return validate;
        }

        this.fnSaveValidate = function() {
        	var validate = true;

        	if(this.gfnIsNull(this.dsList.getColumn(0, "AM_LOAN"))
        	|| this.dsList.getColumn(0, "AM_LOAN") == "")
        	{
        		this.gfnAlert("대여금액을 입력해주십시오.");
        		return false;
        	}
        	else if(this.gfnIsNull(this.dsList.getColumn(0, "DT_LOAN"))
        	|| this.dsList.getColumn(0, "DT_LOAN") == "")
        	{
        		this.gfnAlert("대여일자를 입력해주십시오.");
        		return false;
        	}
        	else if(this.gfnIsNull(this.dsList.getColumn(0, "CD_FIELD"))
        	|| this.dsList.getColumn(0, "CD_FIELD") == "")
        	{
        		this.gfnAlert("현장코드를 입력해주십시오.");
        		return false;
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
        		if(!this.gfnIsNull(this.dsList.getColumn(0, "TY_LOAN")))
        		{
        			this.divData.form.ccfTY_LOAN.form.fnCodeFindLoad();
        			if(!this.gfnIsNull(this.dsList.getColumn(0, "TY_LOAND")))
        			{
        				this.divData.form.ccfTY_LOAND.form.fnCodeFindLoad();
        			}
        		}
        	}
        	else if(svcID == "insert" || svcID == "update" || svcID == "delete")
        	{
        		if(errorCode == 0)
        		{
        			this.fnCloseCallback = function()
        			{
        				this.getParentContext().close();
        			}

        			this.gfnAlert("정상적으로 처리되었습니다.", "fnCloseCallback");
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        			return false;
        		}
        	}
        	else if(svcID == "slip")
        	{
        		if(errorCode == 0)
        		{
        			this.fnSlipCallback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("전표발행이 정상 처리되었습니다.", "fnSlipCallback");
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        			return false;
        		}
        	}
        	else if(svcID == "cancel")
        	{
        		if(errorCode == 0)
        		{
        			this.fnSlipCallback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("전표취소가 정상 처리되었습니다.", "fnSlipCallback");
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        			return false;
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfTY_LOAND") {
        		var ty_loan = this.dsList.getColumn(0, "TY_LOAN");
        		if(this.gfnIsNull(ty_loan)) {
        			this.gfnAlert("대여금 구분을 먼저 입력해주십시오.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "TY_LOAN", this.dsList.getColumn(0, "TY_LOAN"));
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfTY_LOAN") {
        		// 변경시 초기화
        		this.divData.form.ccfTY_LOAND.form.fnCodeFindClear();
        	}
        }


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		this.gfnSetFormStatus(this, "U");
        	}
        };


        this.fnSlipDetail = function()
        {
        	var param = {};
        	param.CD_TRADE = this.dsList.getColumn(0, "CD_TRADE");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "", param);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DOE_REG_LOAN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
