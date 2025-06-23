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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_RECOMMEND_ETC_REQ_SELECT</Col></Row><Row><Col id=\"TARGET\">req</Col><Col id=\"SP\">DCBPR_RECOMMEND_ETC_REQ_REQUEST</Col></Row><Row><Col id=\"TARGET\">combo1</Col><Col id=\"SP\">DCXPR_LICCOST_01</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo3</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo4</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo5</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">reqcancel</Col><Col id=\"SP\">DCBPR_RECOMMEND_ETC_REQ_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"string\" size=\"256\"/><Column id=\"NO_BID\" type=\"string\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"string\" size=\"256\"/><Column id=\"DS_PREGIDENT\" type=\"string\" size=\"256\"/><Column id=\"CD_BUMUN\" type=\"string\" size=\"256\"/><Column id=\"DS_MLICCOST\" type=\"string\" size=\"256\"/><Column id=\"NO_SJC\" type=\"string\" size=\"256\"/><Column id=\"CD_LICCCOST\" type=\"string\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"string\" size=\"256\"/><Column id=\"CD_LICENSE1\" type=\"string\" size=\"256\"/><Column id=\"CD_LICENSE2\" type=\"string\" size=\"256\"/><Column id=\"CD_LICENSE3\" type=\"string\" size=\"256\"/><Column id=\"CD_LICENSE_STD\" type=\"string\" size=\"256\"/><Column id=\"YN_NOLICENCE\" type=\"string\" size=\"256\"/><Column id=\"YN_PART_ALL\" type=\"string\" size=\"256\"/><Column id=\"YN_PART01\" type=\"string\" size=\"256\"/><Column id=\"YN_PART02\" type=\"string\" size=\"256\"/><Column id=\"YN_PART03\" type=\"string\" size=\"256\"/><Column id=\"YN_PART04\" type=\"string\" size=\"256\"/><Column id=\"YN_PART05\" type=\"string\" size=\"256\"/><Column id=\"YN_PART06\" type=\"string\" size=\"256\"/><Column id=\"YN_PART07\" type=\"string\" size=\"256\"/><Column id=\"YN_PART08\" type=\"string\" size=\"256\"/><Column id=\"YN_PART09\" type=\"string\" size=\"256\"/><Column id=\"YN_PART10\" type=\"string\" size=\"256\"/><Column id=\"YN_PART11\" type=\"string\" size=\"256\"/><Column id=\"YN_PART12\" type=\"string\" size=\"256\"/><Column id=\"YN_PART13\" type=\"string\" size=\"256\"/><Column id=\"YN_PART14\" type=\"string\" size=\"256\"/><Column id=\"YN_PART15\" type=\"string\" size=\"256\"/><Column id=\"YN_PART16\" type=\"string\" size=\"256\"/><Column id=\"YN_PART17\" type=\"string\" size=\"256\"/><Column id=\"GR_CREDIT\" type=\"string\" size=\"256\"/><Column id=\"GR_CASH\" type=\"string\" size=\"256\"/><Column id=\"YN_EXCPT\" type=\"string\" size=\"256\"/><Column id=\"AM_CON_ABILITY\" type=\"bigdecimal\" size=\"256\"/><Column id=\"RK_CON_ABILITY\" type=\"bigdecimal\" size=\"256\"/><Column id=\"YN_REG_EXCPT\" type=\"string\" size=\"256\"/><Column id=\"YN_REG_ONLY\" type=\"string\" size=\"256\"/><Column id=\"SC_EVAL\" type=\"bigdecimal\" size=\"256\"/><Column id=\"YN_CODE_O\" type=\"string\" size=\"256\"/><Column id=\"YN_CODE_X\" type=\"string\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LICCOST", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_BUMUN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LICENSE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGR_CREDIT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGR_CASH", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSTD_LICENSE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">선택</Col><Col id=\"CD_CODE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SYSTEM:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM00","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_BID","staCD_SYSTEM00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFORDERPLAN_01");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM01","0.0","staCD_SYSTEM:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","staCD_SYSTEM01:0.0","ccfCD_SITE:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM02","txtDS_VENDOR:0.0","ccfCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_PREGIDENT","staCD_SYSTEM02:0.0","staCD_SYSTEM00:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM03","txtDS_PREGIDENT:0.0","ccfNO_BID:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("부문");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_BUMUN","staCD_SYSTEM03:0.0","ccfNO_BID:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsCD_BUMUN");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM04","cboCD_BUMUN:0.0","ccfNO_BID:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("주력공종(신평사)");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_MLICCOST","staCD_SYSTEM04:0.0","ccfNO_BID:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM05","0.0","staCD_SYSTEM01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtNO_SJC","staCD_SYSTEM05:0.0","txtDS_VENDOR:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM06","txtNO_SJC:0.0","staCD_SYSTEM03:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("공증(당사)");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cfLICCOST","staCD_SYSTEM06:0.0","txtDS_PREGIDENT:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsCD_LICCOST");
            obj.set_datacolumn("DS_LICCOST");
            obj.set_codecolumn("CD_LICCOST");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM07","cfLICCOST:0.0","staCD_SYSTEM03:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("공증(신평사)");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_LICCOST","staCD_SYSTEM07:0.0","cboCD_BUMUN:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM08","0.0","staCD_SYSTEM05:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("보유면허");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM09","staCD_SYSTEM08:0.0","txtNO_SJC:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("1.");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_LICENSE1","staCD_SYSTEM09:0.0","txtNO_SJC:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsCD_LICENSE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM10","cboCD_LICENSE1:0.0","staCD_SYSTEM06:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("2.");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_LICENSE2","staCD_SYSTEM10:0.0","cfLICCOST:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsCD_LICENSE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM11","cboCD_LICENSE2:0.0","cfLICCOST:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("3.");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_LICENSE3","staCD_SYSTEM11:0.0","staCD_SYSTEM07:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_innerdataset("dsCD_LICENSE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM12","cboCD_LICENSE3:0.0","txtDS_LICCOST:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("평가기준면허");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_STDLICENSE","staCD_SYSTEM12:0.0","txtDS_LICCOST:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_innerdataset("dsSTD_LICENSE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkNOLICENSE","cboCD_STDLICENSE:0.0","txtDS_LICCOST:10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("미면허");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM13","0.0","staCD_SYSTEM08:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("실적위치");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART_ALL","staCD_SYSTEM13:0.0","cboCD_LICENSE1:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("전체");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART01","chkPART_ALL:0.0","cboCD_LICENSE2:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("서울");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART2","chkPART01:0.0","cboCD_LICENSE2:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("경기");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART4","0.0","cboCD_STDLICENSE:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("충북");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART5","chkPART4:0.0","cboCD_STDLICENSE:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("인천");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART3","chkPART2:0.0","cboCD_LICENSE3:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("충남");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART6","chkPART5:0.0","cboCD_STDLICENSE:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("대전");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART7","chkPART6:0.0","cboCD_STDLICENSE:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("광주");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART8","chkPART7:0.0","cboCD_STDLICENSE:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("전남");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART9","staCD_SYSTEM13:0.0","chkPART_ALL:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("전북");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART10","chkPART9:0.0","chkPART01:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("대구");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART11","chkPART10:0.0","chkPART2:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("경북");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART12","chkPART11:0.0","chkPART3:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("부산");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART13","chkPART12:0.0","chkPART4:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_text("울산");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART14","chkPART13:0.0","chkPART5:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_text("경남");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART15","chkPART14:0.0","chkPART6:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_text("강원");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART16","chkPART15:0.0","chkPART7:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_text("제주");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkPART17","chkPART16:0.0","chkPART8:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("46");
            obj.set_text("세종");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM14","0.0","chkPART9:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("47");
            obj.set_text("신용등급");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGR_CREDIT","staCD_SYSTEM14:0.0","chkPART9:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("48");
            obj.set_innerdataset("dsGR_CREDIT");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM15","cboGR_CREDIT:0.0","chkPART10:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("49");
            obj.set_text("이상");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM16","staCD_SYSTEM15:0.0","staCD_SYSTEM:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("50");
            obj.set_text("현금흐름등급");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGR_CASH","staCD_SYSTEM16:0.0","chkPART11:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("51");
            obj.set_innerdataset("dsGR_CASH");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM17","cboGR_CASH:0.0","chkPART11:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("52");
            obj.set_text("이상");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_EXCPT","staCD_SYSTEM17:0.0","chkPART12:10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("53");
            obj.set_text("신평사 RM 6.7등급 제외");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM18","0.0","staCD_SYSTEM14:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("54");
            obj.set_text("시공능력평가액");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CON_ABILITY","staCD_SYSTEM18:0.0","cboGR_CREDIT:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("55");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM19","txtAM_CON_ABILITY:0.0","staCD_SYSTEM15:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("56");
            obj.set_text("이상(백만원)");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM20","staCD_SYSTEM19:0.0","staCD_SYSTEM16:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("57");
            obj.set_text("시공능력순위");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("txtRK_CON_ABILITY","staCD_SYSTEM20:0.0","cboGR_CASH:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("58");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM21","txtRK_CON_ABILITY:0.0","cboGR_CASH:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("59");
            obj.set_text("이내");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("rboYN_REG_EXCPT","staCD_SYSTEM17:0.0","chkYN_EXCPT:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("60");
            obj.set_text("등록회사 제외");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("rboYN_REG_ONLY","rboYN_REG_EXCPT:0.0","chkYN_EXCPT:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("61");
            obj.set_text("등록회사만 조회");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_CODE_O","staCD_SYSTEM17:0.0","rboYN_REG_EXCPT:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("62");
            obj.set_text("거래처코드 유");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_CODE_X","chkYN_CODE_O:0.0","rboYN_REG_ONLY:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("63");
            obj.set_text("거래처코드 무");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM22","0.0","staCD_SYSTEM18:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("64");
            obj.set_text("평가점수");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("txtSC_EVAL","staCD_SYSTEM22:0.0","txtAM_CON_ABILITY:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("65");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM23","txtSC_EVAL:0.0","staCD_SYSTEM19:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("66");
            obj.set_text("점이상 [가산점(최대10점)제외 점수]");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_BID.form.CDTextBox","value","dsSearch","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.txtDS_VENDOR","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.txtDS_PREGIDENT","value","dsSearch","DS_PREGIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboCD_BUMUN","value","dsSearch","CD_BUMUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.txtDS_MLICCOST","value","dsSearch","DS_MLICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.txtNO_SJC","value","dsSearch","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cfLICCOST","value","dsSearch","CD_LICCCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.txtDS_LICCOST","value","dsSearch","DS_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.cboCD_LICENSE1","value","dsSearch","CD_LICENSE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.cboCD_LICENSE2","value","dsSearch","CD_LICENSE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.cboCD_LICENSE3","value","dsSearch","CD_LICENSE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.cboCD_STDLICENSE","value","dsSearch","CD_LICENSE_STD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.chkNOLICENSE","value","dsSearch","YN_NOLICENCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.chkPART_ALL","value","dsSearch","YN_PART_ALL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.chkPART01","value","dsSearch","YN_PART01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.chkPART2","value","dsSearch","YN_PART02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.chkPART3","value","dsSearch","YN_PART03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.chkPART4","value","dsSearch","YN_PART04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.chkPART5","value","dsSearch","YN_PART05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.chkPART6","value","dsSearch","YN_PART06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSearch.form.chkPART7","value","dsSearch","YN_PART07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divSearch.form.chkPART8","value","dsSearch","YN_PART08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divSearch.form.chkPART9","value","dsSearch","YN_PART09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divSearch.form.chkPART10","value","dsSearch","YN_PART10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divSearch.form.chkPART11","value","dsSearch","YN_PART11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divSearch.form.chkPART12","value","dsSearch","YN_PART12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divSearch.form.chkPART13","value","dsSearch","YN_PART13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divSearch.form.chkPART14","value","dsSearch","YN_PART14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divSearch.form.chkPART15","value","dsSearch","YN_PART15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divSearch.form.chkPART16","value","dsSearch","YN_PART16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divSearch.form.chkPART17","value","dsSearch","YN_PART17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divSearch.form.cboGR_CREDIT","value","dsSearch","GR_CREDIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divSearch.form.cboGR_CASH","value","dsSearch","GR_CASH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divSearch.form.chkYN_EXCPT","value","dsSearch","YN_EXCPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divSearch.form.txtAM_CON_ABILITY","value","dsSearch","AM_CON_ABILITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divSearch.form.rboYN_REG_EXCPT","value","dsSearch","YN_REG_EXCPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divSearch.form.txtRK_CON_ABILITY","value","dsSearch","RK_CON_ABILITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divSearch.form.rboYN_REG_ONLY","value","dsSearch","YN_REG_ONLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divSearch.form.txtSC_EVAL","value","dsSearch","SC_EVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divSearch.form.chkYN_CODE_O","value","dsSearch","YN_CODE_O");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divSearch.form.chkYN_CODE_X","value","dsSearch","YN_CODE_X");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_RECOMMEND_ETC_REQ.xfdl", function() {
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

        	this.fnSetCombo();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_BID)) {

        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        		// 코드파인드의 명칭부분은 직접 접근해서 셋팅
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		if(!this.gfnIsNull(this.getOwnerFrame().DS_SUBCON)) {
        			this.ccfNO_BID.form.DSTextBox.set_value(this.getOwnerFrame().DS_SUBCON);
        		}

        		this.ccfCD_SITE.form.fnFitToContents();
        		this.ccfNO_BID.form.fnFitToContents();

        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnHUBlLink", "fnHUBlLink");
        	this.btn2 = this.gfnFormButtonAdd("btnReq", "fnReq");
        	this.btn3 = this.gfnFormButtonAdd("btnReqCancel", "fnReqCancel");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_BID = this.divSearch.form.ccfNO_BID;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_BID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCB_RECOMMEND_ETC_REQ");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_BID", "string");
        	this.dsSelect.addColumn("DS_VENDOR", "string");
        	this.dsSelect.addColumn("DS_PREGIDENT", "string");
        	this.dsSelect.addColumn("CD_BUMUN", "string");
        	this.dsSelect.addColumn("DS_MLICCOST", "string");
        	this.dsSelect.addColumn("NO_SJC", "string");
        	this.dsSelect.addColumn("CD_LICCCOST", "string");
        	this.dsSelect.addColumn("DS_LICCOST", "string");
        	this.dsSelect.addColumn("CD_LICENSE1", "string");
        	this.dsSelect.addColumn("CD_LICENSE2", "string");
        	this.dsSelect.addColumn("CD_LICENSE3", "string");
        	this.dsSelect.addColumn("CD_LICENSE_STD", "string");
        	this.dsSelect.addColumn("YN_NOLICENCE", "string");
        	this.dsSelect.addColumn("YN_PART_ALL", "string");
        	this.dsSelect.addColumn("YN_PART01", "string");
        	this.dsSelect.addColumn("YN_PART02", "string");
        	this.dsSelect.addColumn("YN_PART03", "string");
        	this.dsSelect.addColumn("YN_PART04", "string");
        	this.dsSelect.addColumn("YN_PART05", "string");
        	this.dsSelect.addColumn("YN_PART06", "string");
        	this.dsSelect.addColumn("YN_PART07", "string");
        	this.dsSelect.addColumn("YN_PART08", "string");
        	this.dsSelect.addColumn("YN_PART09", "string");
        	this.dsSelect.addColumn("YN_PART10", "string");
        	this.dsSelect.addColumn("YN_PART11", "string");
        	this.dsSelect.addColumn("YN_PART12", "string");
        	this.dsSelect.addColumn("YN_PART13", "string");
        	this.dsSelect.addColumn("YN_PART14", "string");
        	this.dsSelect.addColumn("YN_PART15", "string");
        	this.dsSelect.addColumn("YN_PART16", "string");
        	this.dsSelect.addColumn("YN_PART17", "string");
        	this.dsSelect.addColumn("GR_CREDIT", "string");
        	this.dsSelect.addColumn("GR_CASH", "string");
        	this.dsSelect.addColumn("YN_EXCPT", "string");
        	this.dsSelect.addColumn("AM_CON_ABILITY", "bigdecimal");
        	this.dsSelect.addColumn("RK_CON_ABILITY", "bigdecimal");
        	this.dsSelect.addColumn("YN_REG_EXCPT", "string");
        	this.dsSelect.addColumn("YN_REG_ONLY", "string");
        	this.dsSelect.addColumn("SC_EVAL", "bigdecimal");
        	this.dsSelect.addColumn("YN_CODE_O", "string");
        	this.dsSelect.addColumn("YN_CODE_X", "string");

        	this.dsReq = new Dataset();
        	this.dsReq.addColumn("CD_SITE", "string");
        	this.dsReq.addColumn("NO_BID", "string");
        	this.dsReq.addColumn("CD_VENDOR", "string");

        	this.dsReqc = new Dataset();
        	this.dsReqc.addColumn("CD_SITE", "string");
        	this.dsReqc.addColumn("NO_BID", "string");
        	this.dsReqc.addColumn("CD_VENDOR", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSelect.setColumn(0, "DS_VENDOR", this.dsSearch.getColumn(0, "DS_VENDOR"));
        	this.dsSelect.setColumn(0, "DS_PREGIDENT", this.dsSearch.getColumn(0, "DS_PREGIDENT"));
        	this.dsSelect.setColumn(0, "CD_BUMUN", this.dsSearch.getColumn(0, "CD_BUMUN"));
        	this.dsSelect.setColumn(0, "DS_MLICCOST", this.dsSearch.getColumn(0, "DS_MLICCOST"));
        	this.dsSelect.setColumn(0, "NO_SJC", this.dsSearch.getColumn(0, "NO_SJC"));
        	this.dsSelect.setColumn(0, "CD_LICCCOST", this.dsSearch.getColumn(0, "CD_LICCCOST"));
        	this.dsSelect.setColumn(0, "DS_LICCOST", this.dsSearch.getColumn(0, "DS_LICCOST"));
        	this.dsSelect.setColumn(0, "CD_LICENSE1", this.dsSearch.getColumn(0, "CD_LICENSE1"));
        	this.dsSelect.setColumn(0, "CD_LICENSE2", this.dsSearch.getColumn(0, "CD_LICENSE2"));
        	this.dsSelect.setColumn(0, "CD_LICENSE3", this.dsSearch.getColumn(0, "CD_LICENSE3"));
        	this.dsSelect.setColumn(0, "CD_LICENSE_STD", this.dsSearch.getColumn(0, "CD_LICENSE_STD"));
        	this.dsSelect.setColumn(0, "YN_NOLICENCE", this.dsSearch.getColumn(0, "YN_NOLICENCE"));
        	this.dsSelect.setColumn(0, "YN_PART_ALL", this.dsSearch.getColumn(0, "YN_PART_ALL"));
        	this.dsSelect.setColumn(0, "YN_PART01", this.dsSearch.getColumn(0, "YN_PART01"));
        	this.dsSelect.setColumn(0, "YN_PART02", this.dsSearch.getColumn(0, "YN_PART02"));
        	this.dsSelect.setColumn(0, "YN_PART03", this.dsSearch.getColumn(0, "YN_PART03"));
        	this.dsSelect.setColumn(0, "YN_PART04", this.dsSearch.getColumn(0, "YN_PART04"));
        	this.dsSelect.setColumn(0, "YN_PART05", this.dsSearch.getColumn(0, "YN_PART05"));
        	this.dsSelect.setColumn(0, "YN_PART06", this.dsSearch.getColumn(0, "YN_PART06"));
        	this.dsSelect.setColumn(0, "YN_PART07", this.dsSearch.getColumn(0, "YN_PART07"));
        	this.dsSelect.setColumn(0, "YN_PART08", this.dsSearch.getColumn(0, "YN_PART08"));
        	this.dsSelect.setColumn(0, "YN_PART09", this.dsSearch.getColumn(0, "YN_PART09"));
        	this.dsSelect.setColumn(0, "YN_PART10", this.dsSearch.getColumn(0, "YN_PART10"));
        	this.dsSelect.setColumn(0, "YN_PART11", this.dsSearch.getColumn(0, "YN_PART11"));
        	this.dsSelect.setColumn(0, "YN_PART12", this.dsSearch.getColumn(0, "YN_PART12"));
        	this.dsSelect.setColumn(0, "YN_PART13", this.dsSearch.getColumn(0, "YN_PART13"));
        	this.dsSelect.setColumn(0, "YN_PART14", this.dsSearch.getColumn(0, "YN_PART14"));
        	this.dsSelect.setColumn(0, "YN_PART15", this.dsSearch.getColumn(0, "YN_PART15"));
        	this.dsSelect.setColumn(0, "YN_PART16", this.dsSearch.getColumn(0, "YN_PART16"));
        	this.dsSelect.setColumn(0, "YN_PART17", this.dsSearch.getColumn(0, "YN_PART17"));
        	this.dsSelect.setColumn(0, "GR_CREDIT", this.dsSearch.getColumn(0, "GR_CREDIT"));
        	this.dsSelect.setColumn(0, "GR_CASH", this.dsSearch.getColumn(0, "GR_CASH"));
        	this.dsSelect.setColumn(0, "YN_EXCPT", this.dsSearch.getColumn(0, "YN_EXCPT"));
        	this.dsSelect.setColumn(0, "AM_CON_ABILITY", this.dsSearch.getColumn(0, "AM_CON_ABILITY"));
        	this.dsSelect.setColumn(0, "RK_CON_ABILITY", this.dsSearch.getColumn(0, "RK_CON_ABILITY"));
        	this.dsSelect.setColumn(0, "YN_REG_EXCPT", this.dsSearch.getColumn(0, "YN_REG_EXCPT"));
        	this.dsSelect.setColumn(0, "YN_REG_ONLY", this.dsSearch.getColumn(0, "YN_REG_ONLY"));
        	this.dsSelect.setColumn(0, "SC_EVAL", this.dsSearch.getColumn(0, "SC_EVAL"));
        	this.dsSelect.setColumn(0, "YN_CODE_O", this.dsSearch.getColumn(0, "YN_CODE_O"));
        	this.dsSelect.setColumn(0, "YN_CODE_X", this.dsSearch.getColumn(0, "YN_CODE_X"));

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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
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
        	else if(svcID == "req") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "reqcancel") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo") {
        		if (errorCode == 0) {
        			// 초기 선택값은 아래 3가지 방법으로 가능
        			this.dsCD_BUMUN.insertRow(0);
        			this.dsCD_BUMUN.setColumn(0, "CD_CODE", "");
        			this.dsCD_BUMUN.setColumn(0, "DS_CODE", "선택");
         			this.divSearch.form.cboCD_BUMUN.set_index(0);

        			this.dsCD_LICCOST.insertRow(0);
        			this.dsCD_LICCOST.setColumn(0, "CD_LICCOST", "");
        			this.dsCD_LICCOST.setColumn(0, "DS_LICCOST", "선택");
         			this.divSearch.form.cfLICCOST.set_index(0);

        			this.dsCD_LICENSE.insertRow(0);
        			this.dsCD_LICENSE.setColumn(0, "CD_CODE", "");
        			this.dsCD_LICENSE.setColumn(0, "DS_CODE", "선택");
         			this.divSearch.form.cboCD_LICENSE1.set_index(0);
        			this.divSearch.form.cboCD_LICENSE2.set_index(0);
        			this.divSearch.form.cboCD_LICENSE3.set_index(0);

        			this.dsGR_CREDIT.insertRow(0);
        			this.dsGR_CREDIT.setColumn(0, "CD_CODE", "");
        			this.dsGR_CREDIT.setColumn(0, "DS_CODE", "선택");
         			this.divSearch.form.cboGR_CREDIT.set_index(0);

        			this.dsGR_CASH.insertRow(0);
        			this.dsGR_CASH.setColumn(0, "CD_CODE", "");
        			this.dsGR_CASH.setColumn(0, "DS_CODE", "선택");
         			this.divSearch.form.cboGR_CASH.set_index(0);

        			this.divSearch.form.cboCD_STDLICENSE.set_index(0);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        // 	if (id == "ccfCD_SITE") {
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 	}else
        	if(id == "ccfNO_BID"){
        		if(this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.value)){
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}else{
        			dsUserParam.setColumn(nrow, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.value);
        		}
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 입찰번호 초기화
        		this.ccfNO_BID.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSetCombo = function() {

        	this.dsCombo1 = new Dataset();
        	this.dsCombo1.addColumn("TY_GUBUN", "string");
        	this.dsCombo1.addColumn("CN_ROW", "int");
        	this.dsCombo1.addColumn("VALUE", "string");
        	this.dsCombo1.addColumn("MIN_VALUE", "string");
        	this.dsCombo1.addColumn("COSTCLASS", "string");


        	this.dsCombo1.addRow();
        	this.dsCombo1.setColumn(0, "TY_GUBUN", "0");
        	this.dsCombo1.setColumn(0, "CN_ROW", "0");
        	this.dsCombo1.setColumn(0, "VALUE", "");
        	this.dsCombo1.setColumn(0, "MIN_VALUE", "");
        	this.dsCombo1.setColumn(0, "COSTCLASS", "");

        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_TYPE", "string");

        	this.dsCombo2.addRow();
        	this.dsCombo2.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo2.setColumn(0, "CD_TYPE", "C01");

        	this.dsCombo3 = new Dataset();
        	this.dsCombo3.addColumn("CD_SYSTEM", "string");
        	this.dsCombo3.addColumn("CD_TYPE", "string");

        	this.dsCombo3.addRow();
        	this.dsCombo3.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo3.setColumn(0, "CD_TYPE", "C02");

        	this.dsCombo4 = new Dataset();
        	this.dsCombo4.addColumn("CD_SYSTEM", "string");
        	this.dsCombo4.addColumn("CD_TYPE", "string");

        	this.dsCombo4.addRow();
        	this.dsCombo4.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo4.setColumn(0, "CD_TYPE", "11");

        	this.dsCombo5 = new Dataset();
        	this.dsCombo5.addColumn("CD_SYSTEM", "string");
        	this.dsCombo5.addColumn("CD_TYPE", "string");

        	this.dsCombo5.addRow();
        	this.dsCombo5.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo5.setColumn(0, "CD_TYPE", "12");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo1=dsCombo1 combo2=dsCombo2 combo3=dsCombo3 combo4=dsCombo4 combo5=dsCombo5";
        	var outData     = "dsCD_LICCOST=combo10 dsCD_BUMUN=combo20 dsCD_LICENSE=combo30 dsGR_CREDIT=combo40 dsGR_CASH=combo50";
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

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "CD_LICENSE1" || e.columnid == "CD_LICENSE2"|| e.columnid == "CD_LICENSE3"){
        			if(e.newvalue != ""){
        				var delrow = this.dsSTD_LICENSE.findRow("CD_CODE", e.oldvalue);

        				if(delrow > 0){
        					this.dsSTD_LICENSE.deleteRow(delrow);
        				}
        				var dsrow = this.dsCD_LICENSE.findRow("CD_CODE", e.newvalue);
        				var dsname = this.dsCD_LICENSE.getColumn(dsrow, "DS_CODE");
        				var nrow = this.dsSTD_LICENSE.addRow();
        				this.dsSTD_LICENSE.setColumn(nrow, "CD_CODE", e.newvalue);
        				this.dsSTD_LICENSE.setColumn(nrow, "DS_CODE", dsname);
        			}
        		}
        	}
        };

        this.fnHUBlLink = function(obj,e) {
        	this.gfnAlert("추후 구현예정");
        };

        this.fnReq = function(obj,e) {

        		if(this.dsList.findRow("chk", "Y") < 0){
        			this.gfnAlert("선택된 행이 없습니다.");
        			return false;
        		}

        		this.dsReq.clearData();

        		for(var i=0;i<this.dsList.rowcount;i++){
        			if(this.dsList.getColumn(i, "chk") == "Y"){
        				var nrow = this.dsReq.addRow();
        				this.dsReq.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsReq.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        				this.dsReq.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(nrow, "CD_VENDOR"));
        			}
        		}


        		var strSvcId    = "req";
        		var strSvcType  = "save";
        		var inProc      = "_dsProc";
        		var inData      = "req=dsReq";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
        					    strSvcType ,    // transaction을 요청할 구분
        					    inProc,         // Procedure 정보 Dataset 이름
        					    inData ,        // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        					    outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        					    strArg,         // 입력값으로 보낼 arguments, strFormData="20120607"
        					    callBackFnc); // 통신방법 정의 [생략가능]

        };

        this.fnReqCancel = function(obj,e) {
        	if(this.dsList.findRow("chk", "Y") < 0){
        			this.gfnAlert("선택된 행이 없습니다.");
        			return false;
        		}

        		this.dsReqc.clearData();
        		this.dsReqc.addRow();

        		for(var i=0;i<this.dsList.rowcount;i++){
        			if(this.dsList.getColumn(i, "chk") == "Y"){
        				var nrow = this.dsReqc.addRow();
        				this.dsReqc.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsReqc.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        				this.dsReqc.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(nrow, "CD_VENDOR"));
        			}
        		}

        		var strSvcId    = "reqcancel";
        		var strSvcType  = "save";
        		var inProc      = "_dsProc";
        		var inData      = "reqcancel=dsReqc";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
        					    strSvcType ,    // transaction을 요청할 구분
        					    inProc,         // Procedure 정보 Dataset 이름
        					    inData ,        // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        					    outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        					    strArg,         // 입력값으로 보낼 arguments, strFormData="20120607"
        					    callBackFnc); // 통신방법 정의 [생략가능]
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_RECOMMEND_ETC_REQ.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
