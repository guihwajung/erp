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
            this.set_titletext("AS 하자 접수입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SIL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SIL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PART\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PART\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DETAIL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DETAIL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CTM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CTM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SMALL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SMALL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectAdd</Col><Col id=\"SP\">DBSPR_IPJUSADE_SELECT_STD</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"SP\">DBSPR_AFTERASRECEIPT_SELECT_STD</Col><Col id=\"TARGET\">select</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DBSPR_AFTERASRECEIPT_INSERT_STD</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBSPR_AFTERASRECEIPT_UPDATE_STD</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DBSPR_AFTERASRECEIPT_DELETE_STD</Col></Row><Row><Col id=\"TARGET\">detail</Col><Col id=\"SP\">DBZPR_SIZEINFOBLUEPRINT_DETAIL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_HAJAJS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAdd", this);
            obj._setContents("<ColumnInfo><Column id=\"PN_SC\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SCTELHOME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SCTEL\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SPECBIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_KBCIL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJU\" type=\"STRING\" size=\"256\"/><Column id=\"TY_IPJU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SIL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SIL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PART\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PART\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DETAIL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DETAIL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CTM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CTM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SMALL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SMALL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_DONG","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("동");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_DONG","staDS_DONG:0.0","10.0","93","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFASDONGHO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_HO","ccfDS_DONG:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_HO","staDS_HO:0.0","10.0","93","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFASDONGHO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ccfDS_HO:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnFileDocu",null,"10.0","120","24.0","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("점검전사진업로드");
            obj.set_visible("false");
            obj.set_tabstop("10.0");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkTY_Prmry","btnFileDocu:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("중요하자");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataMain","0","0",null,"283","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar19","615","195","433","59",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar05","89","146","463","50",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem18","staBar05:-1","146","75","50",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("58");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar18","staItem18:-1","146","423","50",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("23");
            obj.set_text("접수내용");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem01","0","30","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("25");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar01","staItem01:-1","30","190","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem02","0","59","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("26");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar02","staItem02:-1","59","190","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem03","0","88","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("28");
            obj.set_text("위치");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar03","staItem03:-1","88","190","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem04","0","117","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("30");
            obj.set_visible("true");
            obj.set_text("공종");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar04","staItem04:-1","117","190","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem06","0","195","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("33");
            obj.set_text("방문예정일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar06","staItem06:-1","195","190","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem07","0","224","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("35");
            obj.set_text("완료일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar07","staItem07:-1","224","190","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem08","staBar01:-1","30","85","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("37");
            obj.set_text("동/호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar08","staItem08:-1","30","190","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem09","staBar02:-1","59","85","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("39");
            obj.set_text("휴대폰/자택");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar09","staItem09:-1","59","190","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem10","staBar03:-1","88","85","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("41");
            obj.set_text("부위");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar10","staItem10:-1","88","190","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar11","90","117","462","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem16","staBar10:-1","88","75","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("44");
            obj.set_text("공종유형");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar16","staItem16:-1","88","423","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem17","staBar11:-1","117","75","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("46");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar17","staItem17:-1","117","423","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem15","staBar09:-1","59","75","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("48");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar15","staItem15:-1","59","190","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem14","staBar08:-1","30","75","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("50");
            obj.set_text("면적Type");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar14","staItem14:-1","30","190","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem20","staBar14:-1","30","100","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("52");
            obj.set_text("키불출일");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar20","staItem20:-1","30","135","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem21","staBar15:-1","59","100","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("54");
            obj.set_text("입주일");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar21","staItem21:-1","59","135","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("ccfCD_DETAILPART","staItem16:5","93","179","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.getSetter("CodeFindName").set("DBX_CFACT_UH");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Calendar("calDT_IPJU","staItem21:5","64","121","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Calendar("calDT_KBCIL","staItem20:5","34","121","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem13","staBar07:-1","224","85","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("56");
            obj.set_text("작업자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar13","staItem13:-1","224","190","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem12","staBar06:-1","195","85","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("60");
            obj.set_text("방문예정시간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar12","staItem12:-1","195","190","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("ccfCD_PART","staItem10:5","93","179","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.getSetter("CodeFindName").set("DBX_CFSITESILPART");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("ccfCD_UH","staItem04:10","124","179","15",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.getSetter("CodeFindName").set("DBX_CFWI");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACT","95","123","452","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.getSetter("CodeFindName").set("DBX_CFACTBYHADO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("ccfCD_CTM","staItem17:5","123","339","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.getSetter("CodeFindName").set("DBX_CFSITECTM");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new CheckBox("chkTY_JBYB","ccfCD_CTM:10","123","60","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("69");
            obj.set_text("재접수");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("ccfCD_SIL","staItem03:5","93","147","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.getSetter("CodeFindName").set("DBX_CFSITESILCOMMON");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Calendar("calDT_JEOBSU","staItem01:5","35","120","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_innerdataset("dsList");
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Calendar("calDT_JOBEND","staItem07:5","229","120","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Calendar("calDT_VISITPLAN","staItem06:5","200","120","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtDS_DONG","staItem08:5","35","88","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtDS_HO","edtDS_DONG:3","35","88","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtNO_SCTELHOME","staItem09:96","64","88","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("6");
            obj.set_inputtype("number");
            obj.set_maxlength("50");
            obj.set_font("11px/normal \"Arial\"");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC","staItem02:5","63","179","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("5");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtSZ_TYPE","staItem14:5","35","179","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtDS_SPECBIGO","staItem15:5","64","179","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_JOBNAME","staItem13:5","229","178","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("20");
            obj.set_readonly("false");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new TextArea("taxRM_CUSTOMER","staItem18:5","152","408","38",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("17");
            obj.set_autoselect("false");
            obj.set_enableevent("true");
            obj.set_accessibilitydesclevel("all");
            obj.set_maxlength("500");
            obj.set_wordWrap("char");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem19","staBar12:-1","195","75","59",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("62");
            obj.set_text("처리내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new TextArea("taxRM_HAJA","95","152","450","38",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("16");
            obj.set_autoselect("false");
            obj.set_enableevent("true");
            obj.set_accessibilitydesclevel("all");
            obj.set_maxlength("500");
            obj.set_wordWrap("char");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtNO_SCTEL","368","64","88","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("7");
            obj.set_inputtype("number");
            obj.set_maxlength("50");
            obj.set_font("11px/normal \"Arial\"");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new TextArea("taxRM_JOBEND","staItem19:5","200","408","49",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("21");
            obj.set_autoselect("false");
            obj.set_enableevent("true");
            obj.set_accessibilitydesclevel("all");
            obj.set_maxlength("500");
            obj.set_wordWrap("char");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem24","0","253","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("64");
            obj.set_text("접수구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar24","staItem24:-1","253","959","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Combo("cboTY_HAJAJS","95","258","178","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("66");
            obj.set_innerdataset("dsTY_HAJAJS");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new ImageViewer("imgPic","staBar20:-1","30","233","253",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("22");
            obj.set_stretch("fixaspectratio");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Button("btnDom","ccfCD_SIL:4","93","28","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("67");
            obj.set_text("도면");
            obj.set_visible("false");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtDT_VISITTIME","staItem12:5","200","178","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("68");
            obj.set_readonly("false");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_SMS","ccfCD_DETAILPART:16","94","77","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("70");
            obj.set_text("SMS발송");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_visible("false");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("divDataSub","0","divDataMain:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","1",null,null,null,null,this.divData.form.divDataSub.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataSub.addChild(obj.name, obj);

            obj = new Button("btnRM_HAJA","0","146","90","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("하자내용");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_SCORE","631","259","86","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_inputtype("number");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNoScore","548","256","75","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            obj.set_text("콜점수");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("chkTY_Complete","848","260","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_text("임의완료");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnImg","1047","30","233","253",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_background("transparent");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ccfDS_DONG.form.CDTextBox","value","dsSearch","DS_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfDS_HO.form.CDTextBox","value","dsSearch","DS_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataMain.form.calDT_JEOBSU","value","dsList","DT_JEOBSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataMain.form.edtDS_DONG","value","dsList","DS_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataMain.form.edtDS_HO","value","dsList","DS_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataMain.form.ccfCD_SIL.form.CDTextBox","value","dsList","CD_SIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataMain.form.ccfCD_PART.form.CDTextBox","value","dsList","CD_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataMain.form.ccfCD_DETAILPART.form.CDTextBox","value","dsList","CD_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataMain.form.ccfCD_UH.form.CDTextBox","value","dsList","CD_UH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataMain.form.ccfCD_ACT.form.CDTextBox","value","dsList","CD_SMALL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataMain.form.ccfCD_CTM.form.CDTextBox","value","dsList","CD_CTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataMain.form.taxRM_HAJA","value","dsList","RM_NY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataMain.form.taxRM_CUSTOMER","value","dsList","RM_CUSTOMER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataMain.form.calDT_VISITPLAN","value","dsList","DT_VISITPLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataMain.form.calDT_JOBEND","value","dsList","DT_JOBEND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataMain.form.edtPN_JOBNAME","value","dsList","PN_JOBNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataMain.form.ccfCD_UH.form.DSTextBox","value","dsList","DS_UH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataMain.form.ccfCD_CTM.form.DSTextBox","value","dsList","DS_CTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataMain.form.ccfCD_DETAILPART.form.DSTextBox","value","dsList","DS_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataMain.form.ccfCD_PART.form.DSTextBox","value","dsList","DS_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divDataMain.form.ccfCD_SIL.form.DSTextBox","value","dsList","DS_SIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataMain.form.taxRM_JOBEND","value","dsList","RM_JOBEND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divDataMain.form.cboTY_HAJAJS","value","dsList","CD_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataMain.form.edtDT_VISITTIME","value","dsList","DT_VISITTIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataMain.form.chkYN_SMS","value","dsList","YN_SMS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataMain.form.edtPN_SC","value","dsList","PN_SC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataMain.form.edtNO_SCTELHOME","value","dsList","NO_SCTELHOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataMain.form.edtNO_SCTEL","value","dsList","NO_SCTEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataMain.form.edtDS_SPECBIGO","value","dsList","DS_SPECBIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataMain.form.edtSZ_TYPE","value","dsList","SZ_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataMain.form.calDT_IPJU","value","dsList","DT_IPJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataMain.form.calDT_KBCIL","value","dsList","DT_KBCIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.edtNO_SCORE","value","dsList","NO_SCORE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divSearch.form.chkTY_Prmry","value","dsList","TY_PRIMARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.divDataMain.form.chkTY_JBYB","value","dsList","TY_JBYB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.chkTY_Complete","value","dsList","TY_TEMP_COMPLETE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_AFTERASRECEIPTTO.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        //this.filepath = "/DB/DBZ/SIZEINFO/";
        this.NO_HADOCONT = "";
        this.DS_HADOCONT = "";

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

        	this.fnBtnSendSmsEnble();

        	this.fnSetCombo();

        	// 파일설정
        	this.fileConfig = this.gfnGetFileConfig();
        	this.fileConfig.allowTypes = ["jpg","jpeg","gif","png"]; // 넥사브라우저 전용, 웹은 적용불가
        	//this.FileUpTransfer00.clearFileList();
        	//this.filepath = "/DB/DBZ/SIZEINFO/" + this.dsSearch.getColumn(0, "CD_SITE") + "/" + this.dsList2.getColumn(0, "NO_SIZE");

        	if(this.FormInfo.GR_SEARCH >= 7){
        		this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_DEPT);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.ccfCD_SITE.set_enable(false);
        	}else{
        		// 타화면에서 오픈시 넘어오는 파라미터 처리
        		if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().CD_DONG) && !this.gfnIsNull(this.getOwnerFrame().CD_HO)) {
        			this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        			this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        			this.dsSearch.setColumn(0, "DS_DONG", this.getOwnerFrame().CD_DONG);
        			this.dsSearch.setColumn(0, "DS_HO", this.getOwnerFrame().CD_HO);

        			this.dsListSub.setColumn(0, "DT_JEOBSU", this.gfnGetDate());

        			this.FormBtns.Select.click();
        		}
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
        	//this.btnWorkBtn1 = this.gfnFormButtonAdd("WorkBtn1", "fnWorkBtn1");   // AS하자 작업지시
        	//this.btnWorkBtn2 = this.gfnFormButtonAdd("WorkBtn2", "fnWorkBtn2");   // AS작업처리결과 입력
        	//this.btnWorkBtn3 = this.gfnFormButtonAdd("WorkBtn3", "fnWorkBtn3");   // 평면도면
        	//this.btnWorkBtn4 = this.gfnFormButtonAdd("WorkBtn4", "fnWorkBtn4");   // 점검전 사진 업로드(SMS)

        	this.btnWorkDocu = this.gfnFormButtonAdd("btnWorkDocu", "fnWorkDocu");
        	this.btnJobEnd = this.gfnFormButtonAdd("btnJobEnd", "fnJobEnd");
        	this.btnImg = this.gfnFormButtonAdd("btnImg", "fnImg");
        	this.btnFile = this.gfnFormButtonAdd("btnFile", "fnFile");
        	this.btnSendSms = this.gfnFormButtonAdd("btnSendSms", "fnSendSms");
        };



        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;  // 단지코드
        	this.ccfDS_DONG = this.divSearch.form.ccfDS_DONG;  // 동코드
        	this.ccfDS_HO = this.divSearch.form.ccfDS_HO;      // 호코드

        	this.ccfCD_SIL = this.divData.form.divDataMain.form.ccfCD_SIL;            // 위치
        	this.ccfCD_PART = this.divData.form.divDataMain.form.ccfCD_PART;          // 부위
        	this.ccfCD_DETAILPART = this.divData.form.divDataMain.form.ccfCD_DETAILPART;     // 상세부위
        	this.ccfCD_UH = this.divData.form.divDataMain.form.ccfCD_UH;              // 유형
        	this.ccfCD_ACT = this.divData.form.divDataMain.form.ccfCD_ACT;            // 공종코드
        	this.ccfCD_CTM = this.divData.form.divDataMain.form.ccfCD_CTM;            // 협력업체

        	this.dxGrid = this.divData.form.divDataSub.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_DONG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_HO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_SIL.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_PART.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DETAILPART.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CTM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_SIL.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_PART.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DETAILPART.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_UH.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_ACT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CTM.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_AFTERASRECEIPTTO");

        	//this.dsList.addEventHandler("onrowposchanged", this.dsList_onrowposchanged, this);

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);

        	// 하단그리드 클릭시 팝업호출
        	//this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_CellDblclick, this);
        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);

        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경

        	this.dxGrid.addEventHandler("onclick", this.fnDtl, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("DS_DONG", "string");
        	this.dsSelect.addColumn("DS_CUNG", "string");
        	this.dsSelect.addColumn("DS_HO", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("DS_DONG", "string");
        	this.dsInsert.addColumn("DS_CUNG", "string");
        	this.dsInsert.addColumn("DS_HO", "string");
        	this.dsInsert.addColumn("DT_JEOBSU", "string");
        	this.dsInsert.addColumn("PN_SC", "string");
        	this.dsInsert.addColumn("NO_SCTELHOME", "string");
        	this.dsInsert.addColumn("NO_SCTEL", "string");
        	this.dsInsert.addColumn("CD_SIL", "string");
        	this.dsInsert.addColumn("CD_PART", "string");
        	this.dsInsert.addColumn("CD_DETAIL_TYPE", "string");
        	this.dsInsert.addColumn("CD_UH", "string");
        	this.dsInsert.addColumn("CD_ACT", "string");
        	this.dsInsert.addColumn("CD_CTM", "string");
        	this.dsInsert.addColumn("NO_HADOCONT", "string");
        	this.dsInsert.addColumn("RM_NY", "string");
        	this.dsInsert.addColumn("RM_CUSTOMER", "string");
        	this.dsInsert.addColumn("TY_HAJAJS", "string");
        	this.dsInsert.addColumn("YN_SMS", "string");
        	this.dsInsert.addColumn("TY_JBYB", "string");
        	this.dsInsert.addColumn("DT_VISITPLAN", "string");
        	this.dsInsert.addColumn("PN_JSNAME", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("DT_VISITTME", "string");
        	this.dsInsert.addColumn("PN_JOBNAME", "string");
        	this.dsInsert.addColumn("DT_JOBEND", "string");
        	this.dsInsert.addColumn("RM_JOBEND", "string");
        	this.dsInsert.addColumn("TY_TEMP_COMPLETE", "string");
        	this.dsInsert.addColumn("TY_PRIMARY", "string");
        	this.dsInsert.addColumn("NO_SCORE", "int");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_JOB", "string");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("DS_DONG", "string");
        	this.dsUpdate.addColumn("DS_CUNG", "string");
        	this.dsUpdate.addColumn("DS_HO", "string");
        	this.dsUpdate.addColumn("DT_JEOBSU", "string");
        	this.dsUpdate.addColumn("PN_SC", "string");
        	this.dsUpdate.addColumn("NO_SCTELHOME", "string");
        	this.dsUpdate.addColumn("NO_SCTEL", "string");
        	this.dsUpdate.addColumn("CD_SIL", "string");
        	this.dsUpdate.addColumn("CD_PART", "string");
        	this.dsUpdate.addColumn("CD_DETAIL_TYPE", "string");
        	this.dsUpdate.addColumn("CD_UH", "string");
        	this.dsUpdate.addColumn("CD_ACT", "string");
        	this.dsUpdate.addColumn("CD_CTM", "string");
        	this.dsUpdate.addColumn("NO_HADOCONT", "string");
        	this.dsUpdate.addColumn("RM_NY", "string");
        	this.dsUpdate.addColumn("RM_CUSTOMER", "string");
        	this.dsUpdate.addColumn("TY_HAJAJS", "string");
        	this.dsUpdate.addColumn("YN_SMS", "string");
        	this.dsUpdate.addColumn("TY_JBYB", "string");
        	this.dsUpdate.addColumn("DT_VISITPLAN", "string");
        	this.dsUpdate.addColumn("DS_UMGB", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("NO_SCORE", "int");
        	this.dsUpdate.addColumn("DT_VISITTIME", "string");
        	this.dsUpdate.addColumn("PN_JOBNAME", "string");
        	this.dsUpdate.addColumn("DT_JOBEND", "string");
        	this.dsUpdate.addColumn("RM_JOBEND", "string");
        	this.dsUpdate.addColumn("TY_TEMP_COMPLETE", "string");
        	this.dsUpdate.addColumn("TY_PRIMARY", "string");


        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("CD_JOB", "string");
        	this.dsDelete.addColumn("CD_DEPT", "string");
        	this.dsDelete.addColumn("ID_USER", "string");

        	this.dsSelectAdd = new Dataset();
        	this.dsSelectAdd.addColumn("CD_SITE", "string");
        	this.dsSelectAdd.addColumn("DS_DONG", "string");
        	this.dsSelectAdd.addColumn("DS_CUNG", "string");
        	this.dsSelectAdd.addColumn("DS_HO", "string");

        	this.dsSendMsg = new Dataset();
        	this.dsSendMsg.addColumn("PHONE_NUM", "string");        // Msg전송 전화번호
        	this.dsSendMsg.addColumn("DS_URL", "string");           // 전송 URL

        	this.dsDetail = new Dataset();
        	this.dsDetail.addColumn("CD_ACNTUNIT", "string");
        	this.dsDetail.addColumn("NO_SIZE", "bigdecimal");
        	this.dsDetail.addColumn("TY_TYPE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.NO_HADOCONT = "";
        	this.DS_HADOCONT = "";

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	var cdHo = "";
        	var cdCung = "";
        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DS_HO")) && this.dsSearch.getColumn(0, "DS_HO") != "공용"){
        		cdCung = this.dsSearch.getColumn(0, "DS_HO").substr(0, 2); //층을 넣어둔다.
                cdHo = "0" + this.dsSearch.getColumn(0, "DS_HO").substr(2, 2); //호를 넣어 둔다.
        	}else if(this.dsSearch.getColumn(0, "DS_HO") == "공용"){
        		cdCung = "00";
                cdHo = "000";
        	}

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        	this.dsSelect.setColumn(0, "DS_CUNG", cdCung);
        	this.dsSelect.setColumn(0, "DS_HO", cdHo);

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
          *	조회 버튼
          */
        this.fnSelectAdd = function() {
        	//if (!this.fnSelectValidate()) return false;

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return false;

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		var cdHo = "";
        		var cdCung = "";
        		if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DS_HO")) && this.dsSearch.getColumn(0, "DS_HO") != "공용"){
        			cdCung = this.dsSearch.getColumn(0, "DS_HO").substr(0, 2); //층을 넣어둔다.
        			cdHo = "0" + this.dsSearch.getColumn(0, "DS_HO").substr(2, 2); //호를 넣어 둔다.
        		}else if(this.dsSearch.getColumn(0, "DS_HO") == "공용"){
        			cdCung = "00";
        			cdHo = "000";
        		}

        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsInsert.setColumn(nrow, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        				this.dsInsert.setColumn(nrow, "DS_CUNG", cdCung);
        				this.dsInsert.setColumn(nrow, "DS_HO", cdHo);
        				this.dsInsert.setColumn(nrow, "DT_JEOBSU", this.dsList.getColumn(i, "DT_JEOBSU"));
        				this.dsInsert.setColumn(nrow, "PN_SC", this.dsList.getColumn(i, "PN_SC"));
        				this.dsInsert.setColumn(nrow, "NO_SCTELHOME", this.dsList.getColumn(i, "NO_SCTELHOME"));
        				this.dsInsert.setColumn(nrow, "NO_SCTEL", this.dsList.getColumn(i, "NO_SCTEL"));
        				this.dsInsert.setColumn(nrow, "CD_SIL", this.dsList.getColumn(i, "CD_SIL"));
        				this.dsInsert.setColumn(nrow, "CD_PART", this.dsList.getColumn(i, "CD_PART"));
        				this.dsInsert.setColumn(nrow, "CD_DETAIL_TYPE", this.dsList.getColumn(i, "CD_DETAIL_TYPE"));
        				this.dsInsert.setColumn(nrow, "CD_UH", this.dsList.getColumn(i, "CD_UH"));
        				this.dsInsert.setColumn(nrow, "CD_ACT", this.dsList.getColumn(i, "CD_ACT"));
        				//this.dsInsert.setColumn(nrow, "CD_ACT", this.dsList.getColumn(i, "CD_DETAIL_TYPE"));
        				this.dsInsert.setColumn(nrow, "CD_CTM", this.dsList.getColumn(i, "CD_CTM"));
        				this.dsInsert.setColumn(nrow, "NO_HADOCONT", this.NO_HADOCONT);
        				this.dsInsert.setColumn(nrow, "RM_NY", this.dsList.getColumn(i, "RM_NY"));
        				this.dsInsert.setColumn(nrow, "RM_CUSTOMER", this.dsList.getColumn(i, "RM_CUSTOMER"));
        				this.dsInsert.setColumn(nrow, "TY_HAJAJS", this.dsList.getColumn(i, "CD_CODE"));
        				this.dsInsert.setColumn(nrow, "YN_SMS", this.dsList.getColumn(i, "YN_SMS"));
        				this.dsInsert.setColumn(nrow, "TY_JBYB", this.dsList.getColumn(i, "TY_JBYB"));
        				this.dsInsert.setColumn(nrow, "DT_VISITPLAN", this.dsList.getColumn(i, "DT_VISITPLAN"));
        				this.dsInsert.setColumn(nrow, "PN_JSNAME", this.AuthClient.DS_HNAME);
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "DT_VISITTME", this.dsList.getColumn(i, "DT_VISITTIME"));
        				this.dsInsert.setColumn(nrow, "PN_JOBNAME", this.dsList.getColumn(i, "PN_JOBNAME"));
        				this.dsInsert.setColumn(nrow, "DT_JOBEND", this.dsList.getColumn(i, "DT_JOBEND"));
        				this.dsInsert.setColumn(nrow, "RM_JOBEND", this.dsList.getColumn(i, "RM_JOBEND"));
        				this.dsInsert.setColumn(nrow, "TY_TEMP_COMPLETE", this.dsList.getColumn(i, "TY_TEMP_COMPLETE"));
        				this.dsInsert.setColumn(nrow, "TY_PRIMARY", this.dsList.getColumn(i, "TY_PRIMARY"));
        				this.dsInsert.setColumn(nrow, "NO_SCORE", this.dsList.getColumn(i, "NO_SCORE"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_JOB", this.dsList.getColumn(i, "CD_PRIMARY"));
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        				this.dsUpdate.setColumn(nrow, "DS_CUNG", cdCung);
        				this.dsUpdate.setColumn(nrow, "DS_HO", cdHo);
        				this.dsUpdate.setColumn(nrow, "DT_JEOBSU", this.dsList.getColumn(i, "DT_JEOBSU"));
        				this.dsUpdate.setColumn(nrow, "PN_SC", this.dsList.getColumn(i, "PN_SC"));
        				this.dsUpdate.setColumn(nrow, "NO_SCTELHOME", this.dsList.getColumn(i, "NO_SCTELHOME"));
        				this.dsUpdate.setColumn(nrow, "NO_SCTEL", this.dsList.getColumn(i, "NO_SCTEL"));
        				this.dsUpdate.setColumn(nrow, "CD_SIL", this.dsList.getColumn(i, "CD_SIL"));
        				this.dsUpdate.setColumn(nrow, "CD_PART", this.dsList.getColumn(i, "CD_PART"));
        				this.dsUpdate.setColumn(nrow, "CD_DETAIL_TYPE", this.dsList.getColumn(i, "CD_DETAIL_TYPE"));
        				this.dsUpdate.setColumn(nrow, "CD_UH", this.dsList.getColumn(i, "CD_UH"));
        				this.dsUpdate.setColumn(nrow, "CD_ACT", this.dsList.getColumn(i, "CD_ACT"));
        				//this.dsUpdate.setColumn(nrow, "CD_ACT", this.dsList.getColumn(i, "CD_DETAIL_TYPE"));
        				this.dsUpdate.setColumn(nrow, "CD_CTM", this.dsList.getColumn(i, "CD_CTM"));
        				this.dsUpdate.setColumn(nrow, "NO_HADOCONT", this.NO_HADOCONT);
        				this.dsUpdate.setColumn(nrow, "RM_NY", this.dsList.getColumn(i, "RM_NY"));
        				this.dsUpdate.setColumn(nrow, "RM_CUSTOMER", this.dsList.getColumn(i, "RM_CUSTOMER"));
        				this.dsUpdate.setColumn(nrow, "TY_HAJAJS", this.dsList.getColumn(i, "CD_CODE"));
        				this.dsUpdate.setColumn(nrow, "YN_SMS", this.dsList.getColumn(i, "YN_SMS"));
        				this.dsUpdate.setColumn(nrow, "TY_JBYB", this.dsList.getColumn(i, "TY_JBYB"));
        				this.dsUpdate.setColumn(nrow, "DT_VISITPLAN", this.dsList.getColumn(i, "DT_VISITPLAN"));
        				this.dsUpdate.setColumn(nrow, "DS_UMGB", this.dsList.getColumn(i, "DS_UMGB"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "NO_SCORE", this.dsList.getColumn(i, "NO_SCORE"));
        				this.dsUpdate.setColumn(nrow, "DT_VISITTIME", this.dsList.getColumn(i, "DT_VISITTIME"));
        				this.dsUpdate.setColumn(nrow, "PN_JOBNAME", this.dsList.getColumn(i, "PN_JOBNAME"));
        				this.dsUpdate.setColumn(nrow, "DT_JOBEND", this.dsList.getColumn(i, "DT_JOBEND"));
        				this.dsUpdate.setColumn(nrow, "RM_JOBEND", this.dsList.getColumn(i, "RM_JOBEND"));
        				this.dsUpdate.setColumn(nrow, "TY_TEMP_COMPLETE", this.dsList.getColumn(i, "TY_TEMP_COMPLETE"));
        				this.dsUpdate.setColumn(nrow, "TY_PRIMARY", this.dsList.getColumn(i, "TY_PRIMARY"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsDelete.setColumn(nrow, "CD_JOB", this.dsList.getColumn(i, "CD_PRIMARY"));
        				this.dsDelete.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        				this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}
        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete insert=dsInsert update=dsUpdate";
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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.nAddrow = this.gfnGridAdd(this.dxGrid);

        	this.divData.form.divDataMain.set_enable(true);

        	this.divData.form.divDataMain.form.calDT_JEOBSU.set_value(this.gfnGetDate());
        	this.divData.form.divDataMain.form.cboTY_HAJAJS.set_value(this.dsTY_HAJAJS.getColumn(0, "CD_CODE"));

        	var cdHo = "";
        	var cdCung = "";
        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DS_HO")) && this.dsSearch.getColumn(0, "DS_HO") != "공용"){
        		cdCung = this.dsSearch.getColumn(0, "DS_HO").substr(0, 2); //층을 넣어둔다.
                cdHo = "0" + this.dsSearch.getColumn(0, "DS_HO").substr(2, 2); //호를 넣어 둔다.
        	}else if(this.dsSearch.getColumn(0, "DS_HO") == "공용"){
        		cdCung = "00";
                cdHo = "000";
        	}

        	this.dsSelectAdd.clearData();
        	this.dsSelectAdd.addRow();

        	this.dsSelectAdd.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectAdd.setColumn(0, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        	this.dsSelectAdd.setColumn(0, "DS_CUNG", cdCung);
        	this.dsSelectAdd.setColumn(0, "DS_HO", cdHo);

        	var strSvcId    = "selectAdd";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectAdd=dsSelectAdd";
        	var outData     = "dsListAdd=selectAdd0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        	this.divData.form.divDataMain.form.cboTY_HAJAJS.set_index(0);
        	this.fnSelectAdd();
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if( this.dsList.getColumn(this.dsList.rowposition, this.ucFlag) == "#") return;
        // 	if (!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"DT_JOBEND")) ){
        // 		this.gfnAlert("완료된 하자접수건은 삭제할 수 없습니다.");
        // 		return;
        	if ((this.dsList.getColumn(this.dsList.rowposition,"DT_JOBEND").length == 6) ){ //완료일자가 6자리(날짜210527)인 경우 메세지출력 -- 공백에 &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32; 가 들어옴
        	this.gfnAlert("완료된 하자접수건은 삭제할 수 없습니다.");
        	return;
        	} else {
        		this.gfnGridDel(this.dxGrid);
        	}
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGridSub);
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
        this.fnSelectValidate = function(strType) {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		this.fnCdSiteVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        			return false;
        		}
        		this.gfnAlert("현장코드를 입력하셔야 합니다.", "fnCdSiteVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DS_DONG"))) {
        		validate = false;
        		this.fnDongVaidateCallback = function() {
        			this.ccfDS_DONG.form.CDTextBox.setFocus();
        			return false;
        		}
        		this.gfnAlert("동을 입력하셔야 합니다.", "fnDongVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DS_HO"))) {
        		validate = false;
        		this.fnHoVaidateCallback = function() {
        			this.ccfDS_HO.form.CDTextBox.setFocus();
        			return false;
        		}
        		this.gfnAlert("호를 입력하셔야 합니다.", "fnHoVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}

        	return validate;
        }
        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var strMsg = "";
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var  flag = this.gfnGetFlag(this.dsList, i);
        		if( flag == "I" ||  flag == "U" ) {
        			if ( this.gfnIsNull(this.dsList.getColumn(i,"PN_SC")) ) {
        				strMsg += (i+1)+"행 : [신청자] 필수입력값입니다.\n";
        			}
        			if ( this.gfnIsNull(this.dsList.getColumn(i,"NO_SCTEL")) ) {
        				strMsg += (i+1)+"행 : [휴대전화] 필수입력값입니다.\n";
        			}
        			if ( this.gfnIsNull(this.dsList.getColumn(i,"CD_CTM")) ) {
        				strMsg += (i+1)+"행 : [협력업체] 필수입력값입니다.\n";
        			}
        			if ( this.gfnIsNull(this.dsList.getColumn(i,"CD_ACT")) ) {
        				strMsg += (i+1)+"행 : [공종] 필수입력값입니다.\n";
        			}
        			if ( this.gfnIsNull(this.dsList.getColumn(i,"CD_SIL")) ) {
        				strMsg += (i+1)+"행 : [위치] 필수입력값입니다.\n";
        			}
        			if ( this.gfnIsNull(this.dsList.getColumn(i,"CD_PART")) ) {
        				strMsg += (i+1)+"행 : [부위] 필수입력값입니다.\n";
        			}
        		}
        	}

        	if(strMsg.length > 0) {
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnBtnSendSmsEnble();
        	} else if (svcID == "combo") {
        		this.divData.form.divDataMain.form.cboTY_HAJAJS.set_index(0);
        	} else if(svcID == "selectAdd") {
        		this.dsList.set_rowposition(this.nAddrow);
        		this.dsList.setColumn(this.nAddrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsList.setColumn(this.nAddrow, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        		this.dsList.setColumn(this.nAddrow, "DS_HO", this.dsSearch.getColumn(0, "DS_HO"));
        		this.dsList.setColumn(this.nAddrow, "DT_JEOBSU", this.gfnGetDate());
        		this.dsList.setColumn(this.nAddrow,"PN_SC", this.dsListAdd.getColumn(0,"PN_SC"));
        		this.dsList.setColumn(this.nAddrow,"NO_SCTELHOME", this.dsListAdd.getColumn(0,"NO_SCTELHOME"));
        		this.dsList.setColumn(this.nAddrow,"NO_SCTEL", this.dsListAdd.getColumn(0,"NO_SCTEL"));
        		this.dsList.setColumn(this.nAddrow,"SZ_TYPE", this.dsListAdd.getColumn(0,"SZ_TYPE"));
        		this.dsList.setColumn(this.nAddrow,"DS_SPECBIGO", this.dsListAdd.getColumn(0,"DS_SPECBIGO"));
        		this.dsList.setColumn(this.nAddrow,"TY_IPJU", this.dsListAdd.getColumn(0,"TY_IPJU"));
        		this.dsList.setColumn(this.nAddrow,"DT_KBCIL", this.dsListAdd.getColumn(0,"DT_KBCIL"));
        		this.dsList.setColumn(this.nAddrow,"DT_IPJU", this.dsListAdd.getColumn(0,"DT_IPJU"));
        		//this.dsList.setColumn(this.nAddrow,"RM_JOBEND","");

        		this.fnBtnSendSmsEnble();
        	} else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "detial")
        	{
        		trace("dsList2>>>" + this.dsList2.saveXML());
        		this.filepath = "/DB/DBZ/SIZEINFO/" + this.dsSearch.getColumn(0, "CD_SITE") + "/" + this.dsSearch.getColumn(0, "NO_SIZE");
        		this.fnImageView();
        	}
        	else if (svcID == "imagefile")
        	{
        		if (errorCode == 0) {
        			trace("dsImagaFile>>>" + this.dsImageFile.saveXML());
        			trace("filefuckingpath>>>" + this.filepath);
        			this.divData.form.divDataMain.form.imgPic.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        		}
        		else {
        		this.gfnAlert(errorMsg);
        		return;
        		}
        	}
        };

        this.fnPopupCallback = function(strId, val) {
        	if( val.bSave ){
        		this.FormBtns.Select.click();
        	}
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", this.AuthClient.CD_DEPT);
        	}
        	else if (id == "ccfDS_DONG") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        			this.gfnAlert("현장코드를 입력하셔야 합니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "TY_TYPE", "DONG");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE1", "");
        		dsUserParam.setColumn(nrow, "VALUE2", "");
        	}
        	else if (id == "ccfDS_HO") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        			this.gfnAlert("현장코드를 입력하셔야 합니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "TY_TYPE", "HO");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE1", this.dsSearch.getColumn(0, "DS_DONG"));
        		dsUserParam.setColumn(nrow, "VALUE2", "");
        	}
        	else if (id == "ccfCD_SIL") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        	}
        	else if (id == "ccfCD_PART") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_SIL", this.dsList.getColumn(this.dsList.rowposition, "CD_SIL"));
        	}
        	else if (id == "ccfCD_DETAILPART") {
        // 		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 		dsUserParam.setColumn(nrow, "CD_SIL", this.dsList.getColumn(this.dsList.rowposition, "CD_SIL"));
        // 		dsUserParam.setColumn(nrow, "CD_PART", this.dsList.getColumn(this.dsList.rowposition, "CD_PART"));
        // 		dsUserParam.setColumn(nrow, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        		dsUserParam.setColumn(nrow, "CD_SMALL", this.ccfCD_ACT.form.CDTextBox.value);
        	}
        	else if (id == "ccfCD_ACT") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	else if (id == "ccfCD_CTM") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if (id == "ccfCD_UH" || id == "ccfCD_DETAILPART" || id == "ccfCD_PART" || id == "ccfCD_SIL") {
        		this.dsList.setColumn(this.dsList.rowposition, "RM_NY",
        			this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "DS_SIL"))
        			+ this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "DS_PART"))
        			+ this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "DS_DETAIL_TYPE"))
        			+ this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "DS_UH"))
        		);
        	}
        	else if (id == "ccfCD_ACT") {
        		this.ccfCD_DETAILPART.form.fnCodeFindClear();
        //		this.ccfCD_CTM.form.fnCodeFindClear();
        		this.dsList.setColumn(this.dsList.rowposition, "CD_CTM", arr[0]["CD_CTM"]);
        		this.dsList.setColumn(this.dsList.rowposition, "DS_CTM", arr[0]["DS_CTM"]);
        		this.NO_HADOCONT = arr[0]["NO_HADOCONT"];
        		this.DS_HADOCONT = arr[0]["DS_HADOCONT"];
        	}
        	else if (id == "ccfCD_CTM") {
        		this.NO_HADOCONT = arr[0]["NO_HADOCONT"];
        		this.DS_HADOCONT = arr[0]["DS_HADOCONT"];
        	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
          this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		//this.FormBtns.SubSelect.click();
        		this.fnBtnSendSmsEnble();
        		this.fnDivDataMainEnable();
        		this.fnDetial();
        		//this.fnSelectImage();

        		obj.oldrow = -1;
        	}
        };


        this.dsList_canrowposchange = function(obj,e) {
        	/*
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        	*/

        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);
        	if(flag == "I"){
        		this.gfnAlert("입력중인 데이터가 있습니다.");
        		return false;
        	}
        	return true;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }

        /*
         * 점검전사진 업로드 팝업 호출
         */
        this.fnPicView = function()
        {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

         	var param = {};

         	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
            param.CD_JOB = this.dsList.getColumn(this.dsList.rowposition, "CD_PRIMARY");
         	param.BeforeAfter = "BEFORE";

        // 	var param = {};
        // 		param.fileConfig = this.gfnGetFileConfig();
        // 		param.CF_CD_SITE = this.dsList.getColumn(this.dsList.rowposition,"CD_SITE");
        // 		param.CF_DT_JEOBSU = this.dsList.getColumn(this.dsList.rowposition,"DT_JEOBSU");
        // 		param.CF_CD_JOB = this.dsList.getColumn(this.dsList.rowposition,"CD_JOB");
        // 		param.CF_PIC_IMAGE = this.dsList.getColumn(this.dsList.rowposition,"PIC_BEFORE");
        // 		param.CF_PIC_IMAGE2 = this.dsList.getColumn(this.dsList.rowposition,"PIC_BEFORE2");
        // 		param.CF_TY_PIC = "BEFORE";
        // 		param.CF_TY_CODE = "AS";
        // 		param.ID_USER = this.AuthClient.ID_USER;
        // 		param.CF_DS_SITE = "";
        // 		param.CF_DS_DONG = "";
        // 		param.CF_DS_HO = "";
        // 		param.CF_RM_NY = this.dsList.getColumn(this.dsList.rowposition,"RM_NY");

        	var options = {
        		title: "점검전사진 업로드",
        		resizable: true
        	}
        	this.gfnOpenPopup("DBS_JUMGUM_BEFORE_UPPIC","dbs::DBS_JUMGUM_BEFORE_UPPIC.xfdl",param,"fnPopupCallback",options);
        	//this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_JUMGUM_BEFORE_UPPIC", "fnFileDocuCallback", param);
        };

        /*
         * 그리드 더블클릭 이벤트
         */
        this.dxGrid_oncelldblclick = function(obj,e)
        {
        	var strColumnName = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, this.dxGrid.currentcol);
        	if( strColumnName != "PIC_BEFORE") return;

        	this.fnPicView();
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 작업지시서출력 버튼 클릭시 팝업화면 호출
        this.fnWorkDocu = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
            param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.CD_CTM = "";
        	param.DS_CTM = "";
        	param.CD_ACT = "";
        	param.DS_ACT = "";
        	param.DT_FR = "";
        	param.DT_TO = "";
        	param.CD_JOB = "";
        	param.CD_DONG = this.dsList.getColumn(this.dsList.rowposition, "DS_DONG");
        	param.CD_HO = this.dsList.getColumn(this.dsList.rowposition, "DS_HO");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_WORKDOCU", "fnWorkDocuCallback", param);
        }

        // 작업완료입력 버튼 클릭시 팝업화면 호출
        this.fnJobEnd = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
            param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.CD_CTM = this.dsList.getColumn(this.dsList.rowposition, "CD_CTM");
        	param.DS_CTM = this.dsList.getColumn(this.dsList.rowposition, "DS_CTM");
        	param.CD_JOB = "";
        	param.CD_DONG = this.dsSearch.getColumn(0, "DS_DONG");
        	param.CD_HO = this.dsSearch.getColumn(0, "DS_HO");
        	param.cmbSearch = "0";
        	param.cmbGubun = "미완료";
        	param.cmbGr = "000";

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_WORKEND", "fnJobEndCallback", param);
        }

        this.fnJobEndCallback =  function(svcID, val) {
        	this.FormBtns.Select.click();
        };


        // 평면도면 버튼 클릭시 팝업화면 호출
        this.fnImg = function(obj,e) {

        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	//if(this.gfnIsNull(this.dsList.getColumn(0, "SZ_TYPE"))) { return false; }	//면적타입

        	var param = {};

        	var szType = this.dsList.getColumn(this.dsList.rowposition, "SZ_TYPE");
        	var noSize = szType.substr(0, szType.indexOf("("));
        	var tyType = szType.substr(szType.indexOf(")")+1, szType.length);

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.dsSearch.getColumn(0, "DS_SITE");
        	//param.NO_SIZE = this.dsList.getColumn(this.dsList.rowposition, "SZ_TYPE").substr(0, 8);
        	param.DS_SIZE = noSize;
        	param.DS_TYPE = tyType;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBZ_SIZEINFOBLUEPRINT", "fnPopCallBack", param);
        }

        // 첨부파일 버튼 클릭시 팝업화면 호출
        this.fnFile = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nRow = this.dsList.rowposition;
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DB99";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"CD_SITE"), this.dsList.getColumn(nRow, "CD_PRIMARY")];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        }

         this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수
        	/*
        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_ATTACH", "첨부");
        	} else {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_ATTACH", "첨부(" + val.Cnt + ")");
        	}
        	this.dsList.set_enableevent(true);
        	*/

        	// 첨부파일 추가 및 삭제했을경우 재조회
        	if(val.IsChange == true) {
        		this.FormBtns.Select.click();
        	}
        };


        // SMS전송 버튼 클릭시 팝업화면 호출
        this.fnSendSms = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	var msgVal = "[금성백조 예미지서비스]\n하자 접수처리가 완료 되었습니다.\n아래 경로로 하자 사진 올려주시면 참고하도록 하겠습니다.\n\n" +
        				 //"http://52.231.68.211/Customer/"+this.dsSearch.getColumn(0, "CD_SITE")+"/"+this.dsList.getColumn(this.dsList.rowposition, "CD_PRIMARY");
        				 "https://erp.ksbj.co.kr/?s=9F46D032-5343-4B33-A690-BAEA51131ECE&ID_FORM=DBS_BEFORE_UPPIC&CD_SITE="+this.dsSearch.getColumn(0, "CD_SITE")+"&CD_JOB="+this.dsList.getColumn(this.dsList.rowposition, "CD_PRIMARY");


        	//sb.AppendLine("http://" + $"52.231.68.211/Customer/{cfsite.CDTextValue}/{_DxGrid.GetFocusedRowCellValue(ucCD_PRIMARY)}");
        	//strMsg += "\n\n => 접속URL : " + window.location.hostname + ":8000/_web_/index.html?BF="+this.dsList.getColumn(this.dsList.rowposition,"CD_SITE")+ "_" +this.dsList.getColumn(this.dsList.rowposition,"DT_JEOBSU")+ "_" +this.dsList.getColumn(this.dsList.rowposition,"CD_JOB");
        	//bfUrl.push("https://as.booyoung.co.kr/_web_/index.html?BF=");

        	param.SEND_NUMBER = "";		// 송신자 번호 넣을곳 나중에 결정되면 추가하기
            param.RECV_NAME = this.dsList.getColumn(this.dsList.rowposition, "PN_SC");
        	param.RECV_NUMBER = this.dsList.getColumn(this.dsList.rowposition, "NO_SCTELHOME");
        	param.MESSAGE = msgVal;



        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_SMS_MG", "", param);
        }


        // 도면 버튼 클릭 이벤트(평면도면 확장버튼을 호출)
        this.divData_divDataMain_btnDom_onclick = function(obj,e)
        {
        	this.fnImg();
        };

        // 점검전사진업로드 버튼 클릭 이벤트
        // this.divSearch_btnFileDocu_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	// 선택된 row가 있을 경우에만 팝업을 띄움
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        //
        // 	var param = {};
        //
        // 	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        //     param.CD_JOB = this.dsList.getColumn(this.dsList.rowposition, "CD_PRIMARY");
        // 	param.BeforeAfter = "BEFORE";
        //
        // 	// 화면 오픈.
        // 	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        // 	// 타 모듈 화면 호출시 지정할것.
        //
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_JUMGUM_BEFORE_UPPIC", "fnFileDocuCallback", param);
        // };

        this.fnFileDocuCallback =  function(svcID, val) {
        	if(val == true){
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         /*
         *	조회 조건 변경시 초기화
         */
         this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.divData.form.divDataMain.form.imgPic.set_image("");
        	}

        	if( e.columnid == "CD_SITE" ){
        		this.ccfDS_DONG.form.fnCodeFindClear();
        		this.ccfDS_HO.form.fnCodeFindClear();
        	}

        };

        /*
         *	콤보박스 값 설정
         */
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DB");
        	this.dsCombo.setColumn(0, "CD_TYPE", "K1");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_HAJAJS=combo0";
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


        // 신청자, 자택/휴대폰 정보 수정시 이벤트 처리
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		if( e.columnid == "PN_SC" || e.columnid == "NO_SCTELHOME" || e.columnid == "NO_SCTEL" ){
        			this.fnBtnSendSmsEnble();
        		}
        	}
        };

        //SMS전송 확장버튼 활성화 or 비활성화 처리
        this.fnBtnSendSmsEnble = function() {
        	this.btnSendSms.set_enable(false);

        	if(this.dsList.rowcount > 0){
        		if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "PN_SC")) && (!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_SCTEL")) || !this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_SCTELHOME")))){
        			this.btnSendSms.set_enable(true);
        		}
        	}
        }

        // 싱글폼 활성화 or 비활성화 처리
        this.fnDivDataMainEnable = function() {
        	if(this.dsList.rowcount < 1) return;

        	// 완료일 있을경우 비활성화
        	//if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "DT_JOBEND"))){
        	if(this.dsList.getColumn(this.dsList.rowposition, "DT_JOBEND") == "        "){
        		this.divData.form.divDataMain.set_enable(true);
        	}else{
        		this.divData.form.divDataMain.set_enable(false);
        		//this.divData.form.divDataMain.form.chkTY_Complete.set_enable(true);
        	}
        }

        // 하자내용 버튼 클릭 이벤트
        this.divData_divDataTop_btnRM_HAJA_onclick = function(obj,e)
        {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.CD_JOB = "";
        	param.RM_NY = this.dsList.getColumn(this.dsList.rowposition, "RM_NY")

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_RMNY_POPUP_DLG", "fnContractCallBack", param);
        };

        //도면정보이미지조회
        // this.fnSelectImage = function(){
        //
        // 	//if (!this.fnSelectValidate()) return false;
        //
        // 	//this.gfnGridBeforeSelect(this.dxGrid);
        // 	cdCung = this.dsSearch.getColumn(0, "DS_HO").substr(0, 2); //층을 넣어둔다.
        // 	var noSize = this.dsList.getColumn(this.dsList.rowposition, "SZ_TYPE").substr(0, 7);
        // 	var tyType = this.dsList.getColumn(this.dsList.rowposition, "SZ_TYPE").substr(11, 3);
        //
        // 	this.dsDetail.clearData();
        // 	this.dsDetail.addRow();
        // 	this.dsDetail.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_SITE"));
        // 	this.dsDetail.setColumn(0, "NO_SIZE", noSize);
        // 	this.dsDetail.setColumn(0, "TY_TYPE", tyType);
        //
        // 	var strSvcId    = "imagefileView";
        // 	var strSvcType  = "grid";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "detail=dsDetail";
        // 	var outData     = "dsImageFile=detail0";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        // };

        this.fnDetial = function(){

        	var sFlag = this.dsList.getColumn(this.dsList.rowposition, this.ucFlag);
        	//if (!this.fnSelectValidate()) return false;
        	this.divData.form.divDataMain.form.imgPic.set_image("");

        	if (sFlag == "#") return;

        	var nRow = (this.dsList.rowposition < 0)? 1:this.dsList.rowposition;
        	var szType = this.dsList.getColumn(this.dsList.rowposition, "SZ_TYPE");
        	var noSize = szType.substr(0, szType.indexOf("("));
        	var tyType = szType.substr(szType.indexOf(")")+1, szType.length);

        	//this.gfnGridBeforeSelect(this.dxGrid);
        	var cdCung = this.dsSearch.getColumn(0, "DS_HO").substr(0, 2); //층을 넣어둔다.

        	this.dsDetail.clearData();
        	this.dsDetail.addRow();
        	this.dsDetail.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsDetail.setColumn(0, "NO_SIZE", noSize);
        	this.dsDetail.setColumn(0, "TY_TYPE", tyType);

        	var strSvcId    = "detial";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "detail=dsDetail";
        	var outData     = "dsList2=detail0";
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

        /*
         * 이미지 파일 조회
         */
        this.fnImageView = function() {
        	trace("ffffffff>>>" + this.filepath);
        	this.dsImageFile.clearData();
        	if (this.dsList2.rowcount > 0) {
        		var nrow = 0;
        		if (!this.gfnIsNull(this.dsList2.getColumn(0,"PIC_BLUEPRINTNM"))) {
        			nrow = this.dsImageFile.addRow();
        			//this.dsImageFile.setColumn(nrow, "filepath", this.filepath + this.dsSearch.getColumn(0, "CD_ACNTUNIT") + "/" + this.dsList2.getColumn(0, "NO_SIZE"));
        			this.dsImageFile.setColumn(nrow, "filepath", "/DB/DBZ/SIZEINFO/" + this.dsSearch.getColumn(0, "CD_SITE") + "/" + this.dsList2.getColumn(0, "NO_SIZE"));
        			//this.dsImageFile.setColumn(nrow, "filepath", this.filepath);
        			this.dsImageFile.setColumn(nrow, "filename", this.dsList2.getColumn(0, "PIC_BLUEPRINTNM"));
        		}
        	}

        	trace("sdfsdf>>>" + this.dsImageFile.saveXML());

        	// 서버 이미지파일 base64 로 받아오기
        	var strSvcId    = "imagefile";
        	var strSvcType  = "file/imageFile";
        	var inProc		= "";
        	var inData      = "input=dsImageFile";
        	var outData     = "dsImageFile=input";
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




        // this.divData_divDataMain_imgPic_onclick = function(obj:nexacro.ImageViewer,e:nexacro.ClickEventInfo)
        // {
        // 	// 선택된 row가 있을 경우에만 팝업을 띄움
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        //
        // 	if(this.gfnIsNull(this.dsList.getColumn(0, "SZ_TYPE"))) { return false; }
        //
        // 	var param = {};
        // 	var szType = this.dsList.getColumn(0, "SZ_TYPE");
        //
        // 	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        //     param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        // 	param.DS_SIZE = szType.substr(0, szType.indexOf("("));
        //
        // 	if(szType.substr(szType.length-1, 1) == ")"){
        // 		param.DS_TYPE = "";
        // 	}else{
        // 		param.DS_TYPE = szType.substr(szType.indexOf(")")+1);
        // 	}
        //
        // 	// 화면 오픈.
        // 	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        // 	// 타 모듈 화면 호출시 지정할것.
        //
        // 	this.gfnFormOpen("DBZ", "DBZ_SIZEINFOBLUEPRINT", "", param);
        // };

        this.divData_divDataMain_btn00_onclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	//if(this.gfnIsNull(this.dsList.getColumn(0, "SZ_TYPE"))) { return false; }

        	var sFlag = this.dsList.getColumn(this.dsList.rowposition, this.ucFlag);
        	//if (!this.fnSelectValidate()) return false;
        	if (sFlag == "#") return;

        	var szType = this.dsList.getColumn(this.dsList.rowposition, "SZ_TYPE");
        	var noSize = szType.substr(0, szType.indexOf("("));
        	var tyType = szType.substr(szType.indexOf(")")+1, szType.length);

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.dsSearch.getColumn(0, "DS_SITE");
        	param.DS_SIZE = noSize;
        	param.DS_TYPE = tyType;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBZ_SIZEINFOBLUEPRINT", "fnPopCallBack", param);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divSearch.form.btnFileDocu.addEventHandler("onclick",this.divSearch_btnFileDocu_onclick,this);
            this.divData.form.divDataMain.form.imgPic.addEventHandler("onclick",this.divData_divDataMain_imgPic_onclick,this);
            this.divData.form.divDataMain.form.btnDom.addEventHandler("onclick",this.divData_divDataMain_btnDom_onclick,this);
            this.divData.form.btnRM_HAJA.addEventHandler("onclick",this.divData_divDataTop_btnRM_HAJA_onclick,this);
            this.divData.form.btnImg.addEventHandler("onclick",this.divData_divDataMain_btn00_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList2.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DBS_AFTERASRECEIPTTO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
