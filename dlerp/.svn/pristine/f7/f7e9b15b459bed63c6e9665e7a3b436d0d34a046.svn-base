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
            this.set_titletext("시공품질관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_KONGSA\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DOGEUB_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_SOCOVOL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CLIENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GAMRI1\" type=\"STRING\" size=\"256\"/><Column id=\"CO_COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PRG\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PRE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CHECKER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"QM_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"CM_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZMPR_QM_LIST_ISO</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DZMPR_SITE_SELECT_ISO</Col></Row><Row><Col id=\"TARGET\">select_be</Col><Col id=\"SP\">DZMPR_QM_CODE_SELECT_ISO</Col></Row><Row><Col id=\"TARGET\">save1</Col><Col id=\"SP\">DZMPR_SITE_SAVE_ISO</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DZMPR_QM_LIST_INSERT_ISO</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DZMPR_QM_LIST_UPDATE_ISO</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DZMPR_QM_LIST_DELETE_ISO</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZMPR_CODEFIND_LIST</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CHASU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"DT_YYYY\"/><Col id=\"ID_USER\"/><Col id=\"CD_WORK\"/><Col id=\"CD_CHASU\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_WORK", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CHASU", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">DS_KONGSA</Col><Col id=\"DS_FIELD\">공사계약명</Col></Row><Row><Col id=\"CD_FIELD\">DT_TERM</Col><Col id=\"DS_FIELD\">실행공기</Col></Row><Row><Col id=\"CD_FIELD\">DS_REMARK</Col><Col id=\"DS_FIELD\">공사개요</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListMax", this);
            obj._setContents("<ColumnInfo><Column id=\"RT_MAX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE00","0","10","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE00:0","10","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_YYYY","ccfCD_SITE:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("점검년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_YYYY","staDT_YYYY:0","10","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_CHASU","ctclDT_YYYY:0","10","48","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_USER","ctxtCD_CHASU:0","10","79","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_USER","staID_USER:0","10","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DUZ_USERID_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","33",null,null,"0","33",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("33");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("현장개요");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTab1Title","0","0",null,"35","130",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("12");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg2");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_KONGSA","0","staTab1Title:0","115","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("14");
            obj.set_text("공사계약명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCO_COMPANY","701","162","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("13");
            obj.set_text("공사금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00","staDS_KONGSA:-1","35","588","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02","staCO_COMPANY:-1","162",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK","0","160","115","136",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("15");
            obj.set_text("공사개요");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta17","staDS_REMARK:-1","160","588","136",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_TERM","701","35","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("16");
            obj.set_text("실행공기");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta18","810","35",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebgT");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_DOGEUB_TOT","701","129","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("17");
            obj.set_text("공동도급사");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtAM_DOGEUB_TOT","staCO_COMPANY:4","167",null,"24","4",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("7");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","staDS_REMARK:4","165","578","126",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("5");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_TERM","815","40",null,"24","4",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staSpace2_00","0","129","115","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("22");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta09_00","114","129","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staSpace3_00","353","129","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("24");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta10_00","462","129","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CLIENT","0","128","115","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("26");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CLIENT","staDS_CLIENT:4","133","230","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("27");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_GAMRI1","ctxtDS_CLIENT:4","128","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("29");
            obj.set_text("감리사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_GAMRI1","staDS_GAMRI1:5","133","229","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("28");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staRT_PRG","701","229","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("30");
            obj.set_text("공정률(시행)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staRT_PRE","701","262","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("11");
            obj.set_text("공정률(계획)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staRT_SOCOVOL","701","196","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("31");
            obj.set_text("당사분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02_00","staRT_SOCOVOL:-1","196",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtRT_SOCOVOL","815","201",null,"24","4",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("8");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02_00_00","staRT_PRG:-1","229",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtRT_PRG","815","234",null,"24","4",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("9");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00","staRT_PRE:-1","263",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtRT_PRE","815","268",null,"24","4",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("10");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02_01","staAM_DOGEUB_TOT:-1","129",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtCO_COMPANY","815","133",null,"24","4",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_KONGSA","119","40","578","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staSpace2_00_00","0","65","115","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("36");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta09_00_00","113","65","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta10_00_00","461","65","240","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_CHECK","0","64","115","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("39");
            obj.set_text("점검일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_CHECK","staDT_CHECK:4","69","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM","ctclDT_CHECK:122","64","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("40");
            obj.set_text("보고일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_CONFIRM","staDT_CONFIRM:14","69","110","24",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_CHECKER","700","65","110","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("42");
            obj.set_text("점검자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02_01_00","staDS_CHECKER:0","65",null,"34","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CHECKER","814","70",null,"24","5",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("ISO점검리스트");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","20",null,null,"130","87",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGrid3","0","502",null,null,"130","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.ccfID_USER.form.CDTextBox","value","dsSearch","ID_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_USER.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.tabData.tab1.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.tabData.tab1.form.ctxtDS_CLIENT","value","dsList","DS_CLIENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tabData.tab1.form.ctxtDS_GAMRI1","value","dsList","DS_GAMRI1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tabData.tab1.form.ctxtDS_KONGSA","value","dsList","DS_KONGSA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab1.form.ctxtRT_SOCOVOL","value","dsList","RT_SOCOVOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab1.form.ctxtCO_COMPANY","value","dsList","CO_COMPANY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab1.form.ctxtRT_PRG","value","dsList","RT_PRG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab1.form.ctxtRT_PRE","value","dsList","RT_PRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab1.form.ctxtAM_DOGEUB_TOT","value","dsList","AM_DOGEUB_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab1.form.ctxtDS_TERM","value","dsList","DS_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tabData.tab1.form.ctclDT_CHECK","value","dsList","DT_CHECK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tabData.tab1.form.ctclDT_CONFIRM","value","dsList","DT_CONFIRM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab1.form.ctxtDS_CHECKER","value","dsList","DS_CHECKER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.ctclDT_YYYY.form.TextBox","value","dsSearch","DT_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.ctxtCD_CHASU","value","dsSearch","CD_CHASU");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DZM_QM_LIST_ISO.xfdl", function() {
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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_YYYY", today.substr(0,4));
        	this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_SITE);
        	this.dsSearch.setColumn(0, "ID_USER", this.AuthClient.USER_ID);


        	// 관리자 권한이 아니면 성명 코드파인드 수정 불가
        // 	if(this.AuthClient.CD_ROLE != "R99"){
        // 		this.ccfID_USER.set_enable(false);
        // 	}

        // 	this.fnSetCombo();
        // 	this.fnSetCheckCombo();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
         	this.btn1 = this.gfnFormButtonAdd("btnErpInform", "fnERPInform");
        // 	this.btn1 = this.gfnFormButtonAdd("EXEC_SET", "fnSet");
        // 	this.btn2 = this.gfnFormButtonAdd("EXEC_UNSET", "fnUnset");
        	//this.btn1 = this.gfnFormButtonAdd("btnRiskDtls", "fnRiskDtls");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfID_USER = this.divSearch.form.ccfID_USER;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_CHASU = this.divSearch.form.ccfCD_CHASU;
        	this.ccfCD_WORK = this.divSearch.form.ccfCD_WORK;
        	this.ctclDT_YYYY = this.divSearch.form.ctclDT_YYYY;

        	this.dxGrid1= this.divData.form.tabData.tab2.form.objGrid1;
        	this.dxGrid3= this.divData.form.tabData.tab2.form.objGrid3;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {


        	this.ccfID_USER.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_USER.AfterCDTextChanged = "ccfID_USER_AfterCDTextChanged";
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid1, this.dsList, "DZ", "DZM_QM_LIST_ISO");
        	this.gfnGridInit(this.dxGrid3, this.dsList2, "DZ", "DZM_QM_LIST_SB_ISO");
        	//this.gfnGridInit(this.dxGrid2, this.dsList, "DZ", "DZM_QM_LIST_QM");

        	// 그리드 코드파인드 설정
        	this.dxGrid1.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.dxGrid1.addEventHandler("oncellclick", this.dxGrid_oncellclick, this);

        	// 그리드 onkeyup 이벤트
        	//this.dxGrid.addEventHandler("onkeyup", this.fnGrid_OnKeyUp, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_YYYY", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_CHASU", "string");

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("CD_SITE", "string");
        	this.dsSelect1.addColumn("CD_GBN", "string");
        	this.dsSelect1.addColumn("CD_CHASU", "string");

        	this.dsSelectBe = new Dataset();
        	this.dsSelectBe.addColumn("CD_SITE", "string");
        	this.dsSelectBe.addColumn("DT_YYYY", "string");
        	this.dsSelectBe.addColumn("CD_GBN", "string");
        	this.dsSelectBe.addColumn("ID_USER", "string");
        	this.dsSelectBe.addColumn("DS_HNAME", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("CD_CHASU", "string");
        	this.dsSelectSub.addColumn("CD_GBN", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("CD_CHASU", "string");
        	this.dsInsert.addColumn("CD_LV1", "string");
        	this.dsInsert.addColumn("DS_LV1", "string");
        	this.dsInsert.addColumn("CD_LV2", "string");
        	this.dsInsert.addColumn("DS_LV2", "string");
        	this.dsInsert.addColumn("CD_USER", "string");
        	this.dsInsert.addColumn("DS_USER", "string");
        	this.dsInsert.addColumn("DS_COMMENT", "string");
        	this.dsInsert.addColumn("DS_REPORT", "string");
        	this.dsInsert.addColumn("SCORE", "string");
        	this.dsInsert.addColumn("WEIGHT", "string");
        	this.dsInsert.addColumn("ST_EXCEPTION", "string");
        	this.dsInsert.addColumn("ST_CONFIRM", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("DS_SITE", "string");
        	this.dsUpdate.addColumn("CD_CHASU", "string");
        	this.dsUpdate.addColumn("CD_LV1", "string");
        	this.dsUpdate.addColumn("DS_LV1", "string");
        	this.dsUpdate.addColumn("CD_LV2", "string");
        	this.dsUpdate.addColumn("DS_LV2", "string");
        	this.dsUpdate.addColumn("CD_USER", "string");
        	this.dsUpdate.addColumn("DS_USER", "string");
        	this.dsUpdate.addColumn("DS_COMMENT", "string");
        	this.dsUpdate.addColumn("SCORE", "string");
        	this.dsUpdate.addColumn("WEIGHT", "string");
        	this.dsUpdate.addColumn("ST_EXCEPTION", "string");
        	this.dsUpdate.addColumn("FILE_NM", "string");
        	this.dsUpdate.addColumn("ST_CONFIRM", "string");


        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("CD_CHASU", "int");
        	this.dsDelete.addColumn("CD_LV2", "int");

        	this.dsCombo = new Dataset();
            this.dsCombo.addColumn("CD_SITE", "string");
            this.dsCombo.addColumn("CD_TYPE", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//validation 정리 후 주석 해제
        	//if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid1);
        	this.gfnGridBeforeSelect(this.dxGrid3);

        	var strSvcId    = "";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	//var index = this.divData.form.tabData.tabindex;
        	var index = this.fnGetTapIndex();
        	switch(index) {
        		// 공사개요, 계약정보, 공사규모 탭.
        		case 0:
        			this.dsSelect1.clearData();
        			this.dsSelect1.addRow();
        			this.dsSelect1.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSelect1.setColumn(0, "CD_GBN", "0");
        			this.dsSelect1.setColumn(0, "CD_CHASU", this.divSearch.form.ctxtCD_CHASU.value);
        			strSvcId    = "select1";
        			inData      = "select1=dsSelect1" ;
        			outData     = "dsList=select10";
        			break;
        		case 1:
        			this.dsSelect.clearData();
        			this.dsSelect.addRow();
        			this.dsSelect.setColumn(0, "DT_YYYY", this.dsSearch.getColumn(0, "DT_YYYY"));
        			this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSelect.setColumn(0, "CD_CHASU", this.dsSearch.getColumn(0, "CD_CHASU"));

        			strSvcId    = "select";
        			inData      = "select=dsSelect";
        			outData     = "dsList=select0 dsList2=select1";
        			break;
        	}

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
        	var listRow = this.dsList.rowposition;

        	var nrow = this.gfnGridAdd(this.dxGrid1); // top (default), bottom, current

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid1);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsInsert update=dsUpdate delete=dsDelete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

         	this.dsInsert.clearData();
         	this.dsUpdate.clearData();
         	this.dsDelete.clearData();
        	//var index = this.divData.form.tabData.tabindex;
        	var index = this.fnGetTapIndex();

        	switch(index) {
        		// 현장개요 탭
        		case 0:
        			if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return false;
        			{

        				strSvcId = "save1";
        				this.fnSetParameter1();
        				this.fnSave1();
        				inData = "save1=dsSave";
        			}
        			break;
        		// 점검리스트 탭
        		case 1:
        			for (var i = 0; i < this.dsList.rowcount; i++) {
        					var flag = this.gfnGetFlag(this.dsList, i);
        					switch(flag) {
        						case "I":
        							var nrow = this.dsInsert.addRow();
        							this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        							this.dsInsert.setColumn(nrow, "CD_CHASU", this.divSearch.form.ctxtCD_CHASU.value);
        							this.dsInsert.setColumn(nrow, "CD_LV1", this.dsList.getColumn(i, "CD_LV1"));
        							this.dsInsert.setColumn(nrow, "DS_LV1", this.dsList.getColumn(i, "DS_LV1"));
        							this.dsInsert.setColumn(nrow, "CD_LV2", this.dsList.getColumn(i, "CD_LV2"));
        							this.dsInsert.setColumn(nrow, "DS_LV2", this.dsList.getColumn(i, "DS_LV2"));
        							this.dsInsert.setColumn(nrow, "CD_USER", this.dsList.getColumn(i, "CD_USER"));
        							this.dsInsert.setColumn(nrow, "DS_USER", this.dsList.getColumn(i, "DS_USER"));
        							this.dsInsert.setColumn(nrow, "DS_COMMENT", this.dsList.getColumn(i, "DS_COMMENT"));
        							this.dsInsert.setColumn(nrow, "DS_REPORT", this.dsList.getColumn(i, "DS_REPORT"));
        							this.dsInsert.setColumn(nrow, "SCORE", this.dsList.getColumn(i, "SCORE"));
        							this.dsInsert.setColumn(nrow, "WEIGHT", this.dsList.getColumn(i, "WEIGHT"));
        							this.dsInsert.setColumn(nrow, "ST_EXCEPTION", this.dsList.getColumn(i, "ST_EXCEPTION"));
        							this.dsInsert.setColumn(nrow, "ST_CONFIRM", this.dsList.getColumn(i, "ST_CONFIRM"));
        							break;

        						case "U":
        							var nrow = this.dsUpdate.addRow();
        							this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        							this.dsUpdate.setColumn(nrow, "DS_SITE", this.dsList.getColumn(i, "DS_SITE"));
        							this.dsUpdate.setColumn(nrow, "CD_CHASU", this.dsList.getColumn(i, "CD_CHASU"));
        							this.dsUpdate.setColumn(nrow, "CD_LV1", this.dsList.getColumn(i, "CD_LV1"));
        							this.dsUpdate.setColumn(nrow, "DS_LV1", this.dsList.getColumn(i, "DS_LV1"));
        							this.dsUpdate.setColumn(nrow, "CD_LV2", this.dsList.getColumn(i, "CD_LV2"));
        							this.dsUpdate.setColumn(nrow, "DS_LV2", this.dsList.getColumn(i, "DS_LV2"));
        							this.dsUpdate.setColumn(nrow, "CD_USER", this.dsList.getColumn(i, "CD_USER"));
        							this.dsUpdate.setColumn(nrow, "DS_USER", this.dsList.getColumn(i, "DS_USER"));
        							this.dsUpdate.setColumn(nrow, "DS_COMMENT", this.dsList.getColumn(i, "DS_COMMENT"));
        							this.dsUpdate.setColumn(nrow, "SCORE", this.dsList.getColumn(i, "SCORE"));
        							this.dsUpdate.setColumn(nrow, "WEIGHT", this.dsList.getColumn(i, "WEIGHT"));
        							this.dsUpdate.setColumn(nrow, "ST_EXCEPTION", this.dsList.getColumn(i, "ST_EXCEPTION"));
        							this.dsUpdate.setColumn(nrow, "DS_REPORT", this.dsList.getColumn(i, "DS_REPORT"));
        							this.dsUpdate.setColumn(nrow, "FILE_NM", this.dsList.getColumn(i, "FILE_NM"));
        							this.dsUpdate.setColumn(nrow, "ST_CONFIRM", this.dsList.getColumn(i, "ST_CONFIRM"));
        							break;

        						case "D":
        							var nrow = this.dsDelete.addRow();
        							this.dsDelete.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        							this.dsDelete.setColumn(nrow, "CD_CHASU", this.dsList.getColumn(i, "CD_CHASU"));
        							this.dsDelete.setColumn(nrow, "CD_LV2", this.dsList.getColumn(i, "CD_LV2"));
        							break;
        					}
        				}
        			break;
        	}



        	//if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;


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
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"DT_YYMM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclDT_YYMM.form.TextBox.setFocus();
        		}
        		this.gfnAlert("년월은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CHASU"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctxtCD_CHASU.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("회차를 입력하세요.", "fnVaidateCallback");
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
        		if(this.dsList.rowcount < 2){
        // 			if(this.divSearch.form.cboCD_WORK.value=="04"){
        // 				var param = {};
        // 				param.CD_SITE = this.dsSearch.getColumn(0,"CD_SITE");
        // 				param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        // 				this.gfnFormOpen("DSG", "DSG_HDC_JONGHAP", "", param, 700, 300);
        // 			}else{
        				this.gfnConfirm("작성한 내역이 없습니다. 최초작성 정보를 불러 오시겠습니까?", "fnSelBe_callback");
        //			}


        		}

        		this.gfnGridAfterSelect(this.dxGrid1);
        		this.gfnGridAfterSelect(this.dxGrid3);
        	}
        	else if (svcID == "selectBe") {
        		// 지난달 조회된 데이터는 입력 상태로 만들어서 저장가능한게 한다.
        		if(this.dsList.rowcount > 0){
        			for (var i = 0; i < this.dsList.rowcount; i++) {
        			this.dsList.setColumn(i, this.ucFlag, "I");
        			}
        			this.gfnSetFormStatus(this, "I");	// 폼상태 업데이트
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save1") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }
        // 최초작성 정보 조회
        this.fnSelBe_callback = function(strID, val) {
           if(val == true) {
              this.fnSelectBe();
           }
        }
        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelectBe = function() {
        	//validation 정리 후 주석 해제
        	//if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid1);

        	this.dsSelectBe.clearData();
        	this.dsSelectBe.addRow();

        	this.dsSelectBe.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectBe.setColumn(0, "DT_YYYY", this.dsSearch.getColumn(0, "DT_YYYY"));
        	this.dsSelectBe.setColumn(0, "CD_GBN", "06");
        	this.dsSelectBe.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelectBe.setColumn(0, "DS_HNAME", this.AuthClient.DS_HNAME);

        	var strSvcId    = "selectBe";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_be=dsSelectBe";
        	var outData     = "dsList=select_be0";
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
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfID_USER") {

         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "ID_USER"))) {
         			this.gfnAlert("성명을 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "ID_USER", this.dsSearch.getColumn(0, "ID_USER"));
        	}
        	return true;
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.ccfID_USER_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능

        	var ds_cdDept = "";
        	if (arr.length > 0) {
        		ds_cdDept = arr[0]["CD_DEPT"];
        	}

        	this.dsSearch.setColumn(0, "CD_DEPT", ds_cdDept);

        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DZMPR_CODEFIND_STD1") {
         		dsUserParam.setColumn(nrow, "CD_TYPE", "SUBWORK");
         	}
         	if (id == "DZMPR_CODEFIND_STD2") {
         		dsUserParam.setColumn(nrow, "CD_TYPE", "CLASS");
         	}
         	if (id == "DZMPR_CODEFIND_STD3") {
         		dsUserParam.setColumn(nrow, "CD_TYPE", "SUBCLASS");
         	}
         	if (id == "DZX_CFDEPTCORP" || id == "DZX_CFDEPTCORP2" ) {

         		dsUserParam.setColumn(nrow, "CD_CORP", "A101");
         	}else if (id == "DZMPR_STANDARD_CODE_TREE_CODEFIND") {
        		dsUserParam.setColumn(nrow, "DT_YYYY", "2021");
        		dsUserParam.setColumn(nrow, "CD_GBN", "04");
        	}

        	return true;
        }

        this.dxGrid_oncellclick = function(obj,e)
        {
        	if(this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "FILE_NM") {
        	FileManager = {};
        	FileManager.CD_GUBUN = "QM";
        	FileManager.IS_READONLY = false;
        	FileManager.CD_DIR   = [this.dsList.getColumn(this.dsList.rowposition, "KEY_SEQ"),
        							this.dsList.getColumn(this.dsList.rowposition, "CD_LV2")];

        	this.gfnFileQMManager(FileManager, "fnFileCallback");
        	}
        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수
        	if(val.IsChange){
        		this.dsList.set_enableevent(false);
        		for(var i=0;i<this.dsList.rowcount;i++){
        			if(this.gfnGetFlag(this.dsList, i) != "#"){
        				this.dsList.setColumn(i, "CN_FILE", val.Cnt);
        			}
        		}
        		this.dsList.set_enableevent(true);
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
         	if(e.oldvalue != e.newvalue) {
        		this.fnSetCombo();
         		this.gfnSetFormStatus(this);	// 폼상태 초기화
         	}
        };


        this.fnGetTapIndex = function()
        {
        	var index = -1;

        	var text = this.divData.form.tabData.tabpages[this.divData.form.tabData.tabindex].text;

        	switch(text)
        	{
        		case "현장개요" : index = 0;
        			break;
        		case "ISO점검리스트" : index = 1;
        			break;
        	}

        	return index;
        }
        // 관리부서 콤보 셋팅
        this.fnSetCombo = function() {

        	this.dsCombo.clearData();

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCombo.setColumn(0, "CD_TYPE", "WORK");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_WORK=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        // 관리부서 콤보 셋팅
        this.fnSetCheckCombo = function() {

        	this.dsCombo.clearData();

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCombo.setColumn(0, "CD_TYPE", "CHECK");

        	var strSvcId    = "combo1";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_CHASU=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };
        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		if (this.dsCD_WORK.rowcount < 1) {
        			this.FormBtns.Select.set_enable(false);
        			this.FormBtns.Add.set_enable(false);
        			this.FormBtns.Del.set_enable(false);
        			//this.FormBtns.Save.set_enable(false);
        		}else{
        			this.FormBtns.Select.set_enable(true);
        			this.FormBtns.Add.set_enable(true);
        			this.FormBtns.Del.set_enable(true);
        			//this.FormBtns.Save.set_enable(true);
        		}


        		/*
        		this.dsNO_DGR.insertRow(0);
        		this.dsNO_DGR.setColumn(0, "CD_DGR", "");
        		this.dsNO_DGR.setColumn(0, "DS_DGR", "전체");
         		*/
        		this.fnSetCheckCombo();

        	}
        	if(svcID == "combo1") {
        		if (this.dsCD_CHASU.rowcount < 1) {
        			this.FormBtns.Select.set_enable(false);
        			this.FormBtns.Add.set_enable(false);
        			this.FormBtns.Del.set_enable(false);
        			//this.FormBtns.Save.set_enable(false);
        		}else{
        			this.FormBtns.Select.set_enable(true);
        			this.FormBtns.Add.set_enable(true);
        			this.FormBtns.Del.set_enable(true);
        			//this.FormBtns.Save.set_enable(true);
        		}


        		/*
        		this.dsNO_DGR.insertRow(0);
        		this.dsNO_DGR.setColumn(0, "CD_DGR", "");
        		this.dsNO_DGR.setColumn(0, "DS_DGR", "전체");
         		*/

        	}
        };
        this.fnERPInform = function()
        {
        	//validation 정리 후 주석 해제
        	//if (!this.fnSelectValidate()) return false;

        	var strSvcId    = "";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	//var index = this.divData.form.tabData.tabindex;
        	var index = this.fnGetTapIndex();
        	switch(index) {
        		// 공사개요, 계약정보, 공사규모 탭.
        		case 0:
        			this.dsSelect1.clearData();
        			this.dsSelect1.addRow();
        			this.dsSelect1.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSelect1.setColumn(0, "CD_GBN", "ERP");
        			this.dsSelect1.setColumn(0, "CD_CHASU", this.divSearch.form.ctxtCD_CHASU.value);
        			strSvcId    = "select1";
        			inData      = "select1=dsSelect1" ;
        			outData     = "dsList=select10";
        			break;

        	}

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }


        // 탭 이동 전 이벤트.
        this.divData_tabData_canchange = function(obj,e)
        {
        	if(e.preindex != e.postindex) {
        		if(this.gfnGetFormStatus(this) != "" && this.gfnGetFormStatus(this) != "Q" && this.gfnGetFormStatus(this) != "X") {
        			this.TabChangeIndex = e.postindex;
        			this.gfnConfirm("변경된 데이터가 있습니다.\r\n저장 후 이동하시겠습니까?", "fnTabChangeCheck");
        			return false;
        		}
        	}
        };
        // 탭 이동 후 이벤트.
        this.divData_tabData_onchanged = function(obj,e)
        {

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        	{
        		this.FormBtns.Select.click();
        	}
        };

        // 탭 이동 전 저장확인 Confirm의 callback.
        this.fnTabChangeCheck = function(strId, val)
        {
        	if(val == true) {
        		if (!this.fnSave())
        		{
        			return false;
        		}
        		else
        		{
        			// set_tabindex 호출시 canchange가 또 호출되기 때문에 상태값을 초기화한 후 통과되도록 처리.
        			this.gfnSetFormStatus(this);
        			this.divData.form.tabData.set_tabindex(this.TabChangeIndex);
        		}
        	}
        	else
        	{
        		this.gfnSetFormStatus(this);
        		this.divData.form.tabData.set_tabindex(this.TabChangeIndex);
        	}
        }


        this.fnSetParameter1 = function()
        {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_CHASU", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("DS_SITE", "string");
        	this.dsSave.addColumn("DS_KONGSA", "string");
        	this.dsSave.addColumn("DS_TERM", "string");
        	this.dsSave.addColumn("DT_CHECK", "string");
        	this.dsSave.addColumn("DT_CONFIRM", "string");
        	this.dsSave.addColumn("DS_CHECKER", "string");
        	this.dsSave.addColumn("DS_CLIENT", "string");
        	this.dsSave.addColumn("DS_GAMRI1", "string");
        	this.dsSave.addColumn("CO_COMPANY", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("AM_DOGEUB_TOT", "string");
        	this.dsSave.addColumn("RT_SOCOVOL", "bigdecimal");
        	this.dsSave.addColumn("RT_PRG", "string");
        	this.dsSave.addColumn("RT_PRE", "string");
        	this.dsSave.addColumn("CD_GONGJONG", "string");
        }

        this.fnSave1 = function()
        {
        	this.dsSave.clearData();

        	var nrow = this.dsSave.addRow();
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(nrow, "CD_CHASU", this.divSearch.form.ctxtCD_CHASU.value);
        	this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        	this.dsSave.setColumn(nrow, "DS_SITE", this.dsList.getColumn(0, "DS_SITE"));
        	this.dsSave.setColumn(nrow, "DS_KONGSA", this.dsList.getColumn(0, "DS_KONGSA"));
        	this.dsSave.setColumn(nrow, "DS_TERM", this.dsList.getColumn(0, "DS_TERM"));
        	this.dsSave.setColumn(nrow, "DT_CHECK", this.dsList.getColumn(0, "DT_CHECK"));
        	this.dsSave.setColumn(nrow, "DS_CHECKER", this.dsList.getColumn(0, "DS_CHECKER"));
        	this.dsSave.setColumn(nrow, "DT_CONFIRM", this.dsList.getColumn(0, "DT_CONFIRM"));
        	this.dsSave.setColumn(nrow, "DS_CLIENT", this.dsList.getColumn(0, "DS_CLIENT"));
        	this.dsSave.setColumn(nrow, "DS_GAMRI1", this.dsList.getColumn(0, "DS_GAMRI1"));
        	this.dsSave.setColumn(nrow, "CO_COMPANY", this.dsList.getColumn(0, "CO_COMPANY"));
        	this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        	this.dsSave.setColumn(nrow, "AM_DOGEUB_TOT", this.dsList.getColumn(0, "AM_DOGEUB_TOT"));
        	this.dsSave.setColumn(nrow, "RT_SOCOVOL", this.dsList.getColumn(0, "RT_SOCOVOL"));
        	this.dsSave.setColumn(nrow, "RT_PRG", this.dsList.getColumn(0, "RT_PRG"));
        	this.dsSave.setColumn(nrow, "RT_PRE", this.dsList.getColumn(0, "RT_PRE"));
        	var code="";
        	for (var i = 0; i < this.dsList1.rowcount; i++) {
        		if(this.dsList1.getColumn(i, "SET_YN")=="Y"){
        			code += this.dsList1.getColumn(i, "CD_LV1")+",";
        		}
        	}
        	this.dsSave.setColumn(nrow, "CD_GONGJONG", code);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.addEventHandler("canchange",this.divData_tabData_canchange,this);
            this.divData.form.tabData.tab1.form.staDS_CLIENT.addEventHandler("onclick",this.divData_tabData_tab1_staNO_TEL00_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList1.addEventHandler("oncolumnchanged",this.dsList1_oncolumnchanged,this);
            this.dsList1.addEventHandler("onrowposchanged",this.dsList1_onrowposchanged,this);
            this.dsList2.addEventHandler("oncolumnchanged",this.dsList2_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZM_QM_LIST_ISO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
