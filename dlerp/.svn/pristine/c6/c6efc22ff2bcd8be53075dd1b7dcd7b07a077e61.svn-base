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
            this.set_titletext("하자 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select0</Col><Col id=\"SP\">DBMPR_BUNSO_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DBMPR_SITE_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DBMPR_AFTERWORKSTATE_SELECT</Col></Row><Row><Col id=\"SP\">DBMPR_WORKEND_UPDATE</Col><Col id=\"TARGET\">update</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CTM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">AS</Col><Col id=\"DS_CODE\">AS</Col></Row><Row><Col id=\"CD_CODE\">BS</Col><Col id=\"DS_CODE\">BS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_tabbuttonwidth("1");
            obj.set_tabbuttonheight("1");
            obj.set_border("none,none,none,none");
            obj.set_tabposition("bottom");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.tabData);
            obj.set_border("none,none,none,none");
            this.tabData.addChild(obj.name, obj);

            obj = new Div("divCommon","0","0",null,"30","0",null,null,null,null,null,this.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_background("#bdd7ee");
            this.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTitle","0","4",null,"20","0",null,null,null,null,null,this.tabData.tab1.form.divCommon.form);
            obj.set_taborder("0");
            obj.set_text("AS 사무소 목록");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            this.tabData.tab1.form.divCommon.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","40",null,null,"0","39",null,null,null,null,this.tabData.tab1.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.tabData);
            obj.set_tabbuttonheight("0");
            obj.set_border("none,none,none,none");
            this.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","40",null,null,"0","0",null,null,null,null,this.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.tabData.tab2.addChild(obj.name, obj);

            obj = new Div("divCommon","0","0",null,"30","0",null,null,null,null,null,this.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_background("#bdd7ee");
            this.tabData.tab2.addChild(obj.name, obj);

            obj = new Button("btnPrevious","10","4","58","20",null,null,null,null,null,null,this.tabData.tab2.form.divCommon.form);
            obj.set_taborder("0");
            obj.set_text("이전");
            this.tabData.tab2.form.divCommon.addChild(obj.name, obj);

            obj = new Static("staTitle","btnPrevious:10","4",null,"20","0",null,null,null,null,null,this.tabData.tab2.form.divCommon.form);
            obj.set_taborder("1");
            obj.set_text("단지 목록");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            this.tabData.tab2.form.divCommon.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.tabData);
            this.tabData.addChild(obj.name, obj);

            obj = new Div("divCommon","0","0",null,"30","0",null,null,null,null,null,this.tabData.tab3.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_background("#bdd7ee");
            this.tabData.tab3.addChild(obj.name, obj);

            obj = new Button("btnPrevious","10","4","58","20",null,null,null,null,null,null,this.tabData.tab3.form.divCommon.form);
            obj.set_taborder("0");
            obj.set_text("이전");
            this.tabData.tab3.form.divCommon.addChild(obj.name, obj);

            obj = new Div("divSearch","0.0","divCommon:10.0",null,"110.0","0",null,null,null,null,null,this.tabData.tab3.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_DONG","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.tabData.tab3.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("동/호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.tabData.tab3.form.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_DONG","staDS_DONG:0.0","staDS_DONG:10.0","91","24.0",null,null,null,null,null,null,this.tabData.tab3.form.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.tabData.tab3.form.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_HO","ccfDS_DONG:0.0","staDS_DONG:10.0","93","24.0",null,null,null,null,null,null,this.tabData.tab3.form.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.tabData.tab3.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_JEOBSU","ccfDS_HO:0.0","staDS_DONG:10.0","92.0","24.0",null,null,null,null,null,null,this.tabData.tab3.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.tabData.tab3.form.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_FROM","staDT_JEOBSU:0.0","staDS_DONG:10.0","105","24.0",null,null,null,null,null,null,this.tabData.tab3.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.tabData.tab3.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","calDT_FROM:0.0","staDS_DONG:10.0","30.0","24.0",null,null,null,null,null,null,this.tabData.tab3.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.tabData.tab3.form.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_TO","sta01:0.0","staDS_DONG:10.0","105","24.0",null,null,null,null,null,null,this.tabData.tab3.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.tabData.tab3.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSelect","calDT_TO:0.0","staDS_DONG:10.0","58","24.0",null,null,null,null,null,null,this.tabData.tab3.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            this.tabData.tab3.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CTM","btnSelect:0.0","staDS_DONG:10.0","92.0","24.0",null,null,null,null,null,null,this.tabData.tab3.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_SchLabel");
            this.tabData.tab3.form.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CTM","staCD_CTM:0.0","staDS_DONG:10.0","250","24.0",null,null,null,null,null,null,this.tabData.tab3.form.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.tabData.tab3.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.tabData.tab3.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.tabData.tab3.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_GUBUN","staTY_GUBUN:0.0","10.0","119","24.0",null,null,null,null,null,null,this.tabData.tab3.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("AS");
            obj.set_value("AS");
            obj.set_index("0");
            this.tabData.tab3.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("objGrid3","0","divSearch:10",null,null,"0","0",null,null,null,null,this.tabData.tab3.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.tabData.tab3.addChild(obj.name, obj);

            obj = new Div("divTitle","0","30",null,"69","0",null,null,null,null,null,this.tabData.tab3.form);
            obj.set_taborder("3");
            this.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staItem01","10","4","70","30",null,null,null,null,null,null,this.tabData.tab3.form.divTitle.form);
            obj.set_taborder("2");
            obj.set_text("권역");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab3.form.divTitle.addChild(obj.name, obj);

            obj = new Static("staItem02","10","33","70","30",null,null,null,null,null,null,this.tabData.tab3.form.divTitle.form);
            obj.set_taborder("3");
            obj.set_text("단지코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab3.form.divTitle.addChild(obj.name, obj);

            obj = new Static("staDS_BUNSO","staItem01:-1","4","386","30",null,null,null,null,null,null,this.tabData.tab3.form.divTitle.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab3.form.divTitle.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","staItem02:-1","33","100","30",null,null,null,null,null,null,this.tabData.tab3.form.divTitle.form);
            obj.set_taborder("1");
            obj.set_text("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab3.form.divTitle.addChild(obj.name, obj);

            obj = new Static("staItem03","staCD_SITE:-1","33","70","30",null,null,null,null,null,null,this.tabData.tab3.form.divTitle.form);
            obj.set_taborder("5");
            obj.set_text("단지명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab3.form.divTitle.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","staItem03:-1","33","218","30",null,null,null,null,null,null,this.tabData.tab3.form.divTitle.form);
            obj.set_taborder("4");
            obj.set_text("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab3.form.divTitle.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.tabData);
            obj.set_text("tab4");
            this.tabData.addChild(obj.name, obj);

            obj = new Div("divCommon","0","0",null,"30","0",null,null,null,null,null,this.tabData.tab4.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_background("#bdd7ee");
            this.tabData.tab4.addChild(obj.name, obj);

            obj = new Button("btnPrevious","10","4","58","20",null,null,null,null,null,null,this.tabData.tab4.form.divCommon.form);
            obj.set_taborder("0");
            obj.set_text("이전");
            this.tabData.tab4.form.divCommon.addChild(obj.name, obj);

            obj = new Static("staTitle","136","4",null,"20","0",null,null,null,null,null,this.tabData.tab4.form.divCommon.form);
            obj.set_taborder("2");
            obj.set_text("하자 처리 완료");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            this.tabData.tab4.form.divCommon.addChild(obj.name, obj);

            obj = new Button("btnSave","btnPrevious:5","4","58","20",null,null,null,null,null,null,this.tabData.tab4.form.divCommon.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.tabData.tab4.form.divCommon.addChild(obj.name, obj);

            obj = new Div("divDetail","0","40",null,null,"0","0",null,null,null,null,this.tabData.tab4.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.tabData.tab4.addChild(obj.name, obj);

            obj = new Static("staItem01","10","0","70","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("권역");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem02","10","29","70","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("단지코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar01","staItem01:-1","0","386","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar02","staItem02:-1","29","130","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem04","10","58","70","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("27");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar04","staItem04:-1","58","130","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem06","10","87","70","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("31");
            obj.set_text("동/호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar06","staItem06:-1","87","130","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem08","10","116","70","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("35");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar08","staItem08:-1","116","130","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem09","10","145","70","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("39");
            obj.set_text("공종분류");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar10","79","145","386","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem11","10","174","70","50",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("41");
            obj.set_text("하자내용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem10","208","116","70","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("37");
            obj.set_text("AS위치");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar09","277","116","188","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem12","10","223","455","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("43");
            obj.set_text("점검전이미지1");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDS_BUNSO","staItem01:5","5","374","20",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new ImageViewer("imgPIC_BEFORE","10","252","455","253",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("16");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px solid #c4c2cd");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staItem02:5","35","118","20",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem03","staBar02:-1","29","70","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("단지명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calDT_JEOBSU","staItem04:5","64","105","20",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar03","staItem03:-1","29","188","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","staItem03:5","34","176","20",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem05","staBar04:-1","58","70","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("29");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar05","staItem05:-1","58","188","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtCD_JOB","staItem05:5","63","176","20",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDS_DONG_HO","staItem06:5","92","118","20",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem07","staBar06:-1","87","70","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("33");
            obj.set_text("접수자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar07","staItem07:-1","87","188","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC","283","92","176","20",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtPN_SCTEL","staItem08:5","121","118","20",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDS_SIL","283","121","176","20",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDS_ACT","staItem09:5","151","374","20",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar11","staItem11:-1","174","386","50",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new TextArea("texRM_NY","staItem11:5","179","374","40",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("15");
            obj.set_wordWrap("char");
            obj.set_maxlength("4000");
            obj.set_border("1px solid #999899");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem13","10","504","455","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("44");
            obj.set_text("점검전이미지2");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new ImageViewer("imgPIC_BEFORE2","10","533","455","253",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("17");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px solid #c4c2cd");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar14","79","785","386","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar15","79","814","386","60",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new ImageViewer("imgPIC_AFTER","10","902","455","253",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("18");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px solid #c4c2cd");
            obj.set_image("url(\'C:/Booyoung/FileRoot/DB/WORKEND/AS/AFTER/020100201909252/aa (5) (2).jpg\')");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem17","10","1154","455","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("50");
            obj.set_text("점검후이미지2");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new ImageViewer("imgPIC_AFTER2","10","1183","455","253",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("19");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px solid #c4c2cd");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Button("btnUpload2","389","1159","70","20",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("업로드");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new TextArea("texRM_JOBEND","85","819","374","50",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("1");
            obj.set_wordWrap("char");
            obj.set_maxlength("4000");
            obj.set_border("1px solid #c4c2cd");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calDT_JOBEND","85","790","105","20",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem14","10","785","70","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("45");
            obj.set_text("완료일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem15","10","814","70","60",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("47");
            obj.set_text("처리내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem16","10","873","455","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("49");
            obj.set_text("점검후이미지1");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Button("btnUpload1","389","878","70","20",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("업로드");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem00","10","1435","455","30",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("51");
            obj.set_text("고객서명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Sketch("skcPIC_SIGN","10","1464","455","253",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("20");
            obj.set_text(" ");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Button("btnClear","389","1440","70","20",null,null,null,null,null,null,this.tabData.tab4.form.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("초기화");
            this.tabData.tab4.form.divDetail.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.tabData);
            this.tabData.addChild(obj.name, obj);

            obj = new Div("divCommon","0","0",null,"30","0",null,null,null,null,null,this.tabData.tab5.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_background("#bdd7ee");
            this.tabData.tab5.addChild(obj.name, obj);

            obj = new Button("btnPrevious","10","4","58","20",null,null,null,null,null,null,this.tabData.tab5.form.divCommon.form);
            obj.set_taborder("0");
            obj.set_text("이전");
            this.tabData.tab5.form.divCommon.addChild(obj.name, obj);

            obj = new Static("staTitle","136","4",null,"20","0",null,null,null,null,null,this.tabData.tab5.form.divCommon.form);
            obj.set_taborder("2");
            obj.set_text("하자 처리 완료");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            this.tabData.tab5.form.divCommon.addChild(obj.name, obj);

            obj = new Button("btnSave","btnPrevious:5","4","58","20",null,null,null,null,null,null,this.tabData.tab5.form.divCommon.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.tabData.tab5.form.divCommon.addChild(obj.name, obj);

            obj = new Div("divDetail","0","40",null,null,"0","0",null,null,null,null,this.tabData.tab5.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.tabData.tab5.addChild(obj.name, obj);

            obj = new Static("staItem01","10","0","70","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("권역");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem02","10","29","70","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("단지코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar01","staItem01:-1","0","386","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar02","staItem02:-1","29","130","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem04","10","58","70","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar04","staItem04:-1","58","130","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem06","10","87","70","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("28");
            obj.set_text("동/호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar06","staItem06:-1","87","130","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem08","10","116","70","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("32");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar08","staItem08:-1","116","130","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem09","10","145","70","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("36");
            obj.set_text("공종분류");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar10","79","145","386","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem11","10","174","70","50",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("38");
            obj.set_text("하자내용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem10","208","116","70","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("34");
            obj.set_text("AS위치");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar09","277","116","188","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem12","10","223","455","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("40");
            obj.set_text("점검전이미지");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDS_BUNSO","staItem01:5","5","374","20",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new ImageViewer("imgPIC_BEFORE","10","252","455","253",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("15");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px solid #c4c2cd");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staItem02:5","35","118","20",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem03","staBar02:-1","29","70","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("단지명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calDT_JEOBSU","staItem04:5","64","105","20",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar03","staItem03:-1","29","188","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","staItem03:5","34","176","20",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem05","staBar04:-1","58","70","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar05","staItem05:-1","58","188","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtCD_JOB","staItem05:5","63","176","20",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDS_DONG_HO","staItem06:5","92","118","20",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem07","staBar06:-1","87","70","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("접수자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar07","staItem07:-1","87","188","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC","283","92","176","20",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtPN_SCTEL","staItem08:5","121","118","20",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDS_SIL","283","121","176","20",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDS_ACT","staItem09:5","151","374","20",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar11","staItem11:-1","174","386","50",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new TextArea("texRM_NY","staItem11:5","179","374","40",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("14");
            obj.set_wordWrap("char");
            obj.set_maxlength("4000");
            obj.set_border("1px solid #999899");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar14","79","504","386","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBar15","79","533","386","60",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new ImageViewer("imgPIC_AFTER","10","621","455","253",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("16");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px solid #c4c2cd");
            obj.set_image("url(\'C:/Booyoung/FileRoot/DB/WORKEND/AS/AFTER/020100201909252/aa (5) (2).jpg\')");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new TextArea("texRM_JOBEND","85","538","374","50",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("1");
            obj.set_wordWrap("char");
            obj.set_maxlength("4000");
            obj.set_border("1px solid #c4c2cd");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calDT_JOBEND","85","509","105","20",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem14","10","504","70","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("41");
            obj.set_text("완료일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem15","10","533","70","60",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("43");
            obj.set_text("처리내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("underline");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem16","10","592","455","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("45");
            obj.set_text("점검후이미지");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Button("btnUpload3","389","597","70","20",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("업로드");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staItem00","10","873","455","30",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("46");
            obj.set_text("고객서명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Sketch("skcPIC_SIGN","10","902","455","253",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("17");
            obj.set_text(" ");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);

            obj = new Button("btnClear2","389","878","70","20",null,null,null,null,null,null,this.tabData.tab5.form.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            this.tabData.tab5.form.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tabData.tab3.form.divSearch.form.ccfDS_DONG.form.CDTextBox","value","dsSearch","DS_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tabData.tab3.form.divSearch.form.ccfDS_HO.form.CDTextBox","value","dsSearch","DS_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tabData.tab3.form.divSearch.form.calDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tabData.tab3.form.divSearch.form.calDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tabData.tab3.form.divSearch.form.ccfCD_CTM.form.CDTextBox","value","dsSearch","CD_CTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tabData.tab3.form.divSearch.form.cboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tabData.tab3.form.divSearch.form.cboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBM_WORKSTATE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {

        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.fileConfig = this.gfnGetFileConfig();
        	this.fileConfig.allowTypes = ["jpg","jpeg","gif","png"]; // 넥사브라우저 전용, 웹은 적용불가
        	this.fileConfig.uploadUrl = this.fileConfig.uploadUrl.replace("path=", "path=");

        	this.strSaveImgPicAfter1 = "";
        	this.strSaveImgPicAfter2 = "";

        	this.fileid = "fileup_0";
        	this.fileup = new FileUpload();
        	this.fileup.init(this.fileid, 0,0,0,0);
        // 	if(this.lookup(this.fileid)) {
        // 		delete this.fileuploads[this.fileid];
        // 		this.removeChild(this.fileid);
        // 	}
        	this.addChild(this.fileid, this.fileup);
        	this.fileup.show();
        	this.fileup.row = 0;
        	this.fileup.addEventHandler("onitemchanged", this.fileup_onitemchanged, this);
        	this.fileup.addEventHandler("onsuccess", this.fileup_onsuccess, this);
        	this.fileup.addEventHandler("onerror", this.fileup_onerror, this);

        	this.fnSelect();
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
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid1 = this.tabData.tab1.form.objGrid1;
        	this.dxGrid2 = this.tabData.tab2.form.objGrid2;
        	this.dxGrid3 = this.tabData.tab3.form.objGrid3;

        	// tab3 아이템
        	this.staDS_BUNSO = this.tabData.tab3.form.divTitle.form.staDS_BUNSO;
        	this.staCD_SITE = this.tabData.tab3.form.divTitle.form.staCD_SITE;
        	this.staDS_SITE = this.tabData.tab3.form.divTitle.form.staDS_SITE;
        	this.cboTY_GUBUN = this.tabData.tab3.form.divSearch.form.cboTY_GUBUN;
        	this.ccfDS_DONG = this.tabData.tab3.form.divSearch.form.ccfDS_DONG;
        	this.ccfDS_HO = this.tabData.tab3.form.divSearch.form.ccfDS_HO;
        	this.ccfCD_CTM = this.tabData.tab3.form.divSearch.form.ccfCD_CTM;
        	this.cboTY_GUBUN.set_index(0);

        	// tab4 아이템
        	this.edtDS_BUNSO_AS = this.tabData.tab4.form.divDetail.form.edtDS_BUNSO;
        	this.edtCD_SITE_AS = this.tabData.tab4.form.divDetail.form.edtCD_SITE;
        	this.edtDS_SITE_AS = this.tabData.tab4.form.divDetail.form.edtDS_SITE;
        	this.calDT_JEOBSU_AS = this.tabData.tab4.form.divDetail.form.calDT_JEOBSU;
        	this.edtCD_JOB_AS = this.tabData.tab4.form.divDetail.form.edtCD_JOB;
        	this.edtDS_DONG_HO_AS = this.tabData.tab4.form.divDetail.form.edtDS_DONG_HO;
        	this.edtPN_SC_AS = this.tabData.tab4.form.divDetail.form.edtPN_SC;
        	this.edtPN_SCTEL_AS = this.tabData.tab4.form.divDetail.form.edtPN_SCTEL;
        	this.edtDS_ACT_AS = this.tabData.tab4.form.divDetail.form.edtDS_ACT;
        	this.edtDS_SIL_AS = this.tabData.tab4.form.divDetail.form.edtDS_SIL;
        	this.texRM_NY_AS = this.tabData.tab4.form.divDetail.form.texRM_NY;
        	this.imgPIC_BEFORE_AS = this.tabData.tab4.form.divDetail.form.imgPIC_BEFORE;
        	this.imgPIC_BEFORE2_AS = this.tabData.tab4.form.divDetail.form.imgPIC_BEFORE2;
        	this.calDT_JOBEND_AS = this.tabData.tab4.form.divDetail.form.calDT_JOBEND;
        	this.texRM_JOBEND_AS = this.tabData.tab4.form.divDetail.form.texRM_JOBEND;
        	this.imgPIC_AFTER_AS = this.tabData.tab4.form.divDetail.form.imgPIC_AFTER;
        	this.imgPIC_AFTER2_AS = this.tabData.tab4.form.divDetail.form.imgPIC_AFTER2;
        	this.skcPIC_SIGN_AS = this.tabData.tab4.form.divDetail.form.skcPIC_SIGN;

        	// tab5 아이템
        	this.edtDS_BUNSO_BS = this.tabData.tab5.form.divDetail.form.edtDS_BUNSO;
        	this.edtCD_SITE_BS = this.tabData.tab5.form.divDetail.form.edtCD_SITE;
        	this.edtDS_SITE_BS = this.tabData.tab5.form.divDetail.form.edtDS_SITE;
        	this.calDT_JEOBSU_BS = this.tabData.tab5.form.divDetail.form.calDT_JEOBSU;
        	this.edtCD_JOB_BS = this.tabData.tab5.form.divDetail.form.edtCD_JOB;
        	this.edtDS_DONG_HO_BS = this.tabData.tab5.form.divDetail.form.edtDS_DONG_HO;
        	this.edtPN_SC_BS = this.tabData.tab5.form.divDetail.form.edtPN_SC;
        	this.edtPN_SCTEL_BS = this.tabData.tab5.form.divDetail.form.edtPN_SCTEL;
        	this.edtDS_ACT_BS = this.tabData.tab5.form.divDetail.form.edtDS_ACT;
        	this.edtDS_SIL_BS = this.tabData.tab5.form.divDetail.form.edtDS_SIL;
        	this.texRM_NY_BS = this.tabData.tab5.form.divDetail.form.texRM_NY;
        	this.imgPIC_BEFORE_BS = this.tabData.tab5.form.divDetail.form.imgPIC_BEFORE;
        	this.calDT_JOBEND_BS = this.tabData.tab5.form.divDetail.form.calDT_JOBEND;
        	this.texRM_JOBEND_BS = this.tabData.tab5.form.divDetail.form.texRM_JOBEND;
        	this.imgPIC_AFTER_BS = this.tabData.tab5.form.divDetail.form.imgPIC_AFTER;
        	this.skcPIC_SIGN_BS = this.tabData.tab5.form.divDetail.form.skcPIC_SIGN;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfDS_DONG.CodeFindName = "DBX_CFASDONGHO_B2B";                         // 동코드
        	this.ccfDS_DONG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";     // 동코드 파라미터
        	this.ccfDS_DONG.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_HO.CodeFindName = "DBX_CFASDONGHO_B2B";                           // 호코드
        	this.ccfDS_HO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";       // 호코드 파라미터
        	this.ccfDS_HO.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CTM.CodeFindName = "DBX_CFHADO";                              // 협력업체코드
        	this.ccfCD_CTM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";      // 협력업체코드 파라미터
        	this.ccfCD_CTM.AfterCDTextChanged = "fnAfterCDTextChanged";


        	this.gfnGridInit(this.dxGrid1 , this.dsList1, "DB", "DBM_BUNSO");
        	this.dxGrid1.setCellProperty( "body", this.dxGrid1.getBindCellIndex("body","DS_BUNSO"), "textDecoration", "underline" );

        	this.gfnGridInit(this.dxGrid2 , this.dsList2, "DB", "DBM_SITE");
        	this.dxGrid2.setCellProperty( "body", this.dxGrid2.getBindCellIndex("body","DS_SITE"), "textDecoration", "underline" );

        	this.gfnGridInit(this.dxGrid3 , this.dsList3, "DB", "DBM_AFTERWORKSTATE");
        	this.dxGrid3.set_autosizingtype("row");
        	this.dxGrid3.set_selecttype("row");

        	this.dxGrid1.addEventHandler("oncellclick", this.dxGrid_oncellclick, this);
        	this.dxGrid2.addEventHandler("oncellclick", this.dxGrid_oncellclick, this);
        	this.dxGrid3.addEventHandler("oncellclick", this.dxGrid_oncellclick, this);
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("CD_BUNSO", "string");
        	this.dsSelect.addColumn("ID_GROUP", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("DS_DONG", "string");
        	this.dsSelect.addColumn("DS_HO", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("CD_JOB", "int");
        	this.dsSelect.addColumn("TY_GUBUN", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("TY_GUBUN", "string");           // AS,BS 구분
        	this.dsUpdate.addColumn("CD_SITE", "string");            // 단지코드
        	this.dsUpdate.addColumn("DT_JEOBSU", "string");          // 접수일자
        	this.dsUpdate.addColumn("CD_JOB", "string");             // 작업코드
        	this.dsUpdate.addColumn("DT_JOBEND", "string");          // 작업처리일자
        	this.dsUpdate.addColumn("RM_JOBEND", "string");          // 작업내용
        	this.dsUpdate.addColumn("ID_UPDATE", "string");          // 로그인 사번(사번 OR CD_VENDOR)
        	this.dsUpdate.addColumn("DS_UPDATE", "string");          // 로그인 이름
        	this.dsUpdate.addColumn("TY_UPDATE", "string");          // 로그인 부서
        	this.dsUpdate.addColumn("PIC_AFTER", "string");
        	this.dsUpdate.addColumn("PIC_AFTER2", "string");
        	this.dsUpdate.addColumn("PIC_SIGN", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function(obj,e) {
        	var nTabIdx = this.tabData.tabindex;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0,"TY_GUBUN"));
        	if( this.FormInfo.ID_GROUP == "7"){
        		this.dsSelect.setColumn(0, "ID_SABUN", this.AuthClient.CD_VENDOR);
        	} else {
        		this.dsSelect.setColumn(0, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0,"CD_CTM"));
        	this.dsSelect.setColumn(0, "ID_GROUP", this.FormInfo.ID_GROUP);
        	this.dsSelect.setColumn(0, "CD_JOB" , 0);

        	if( this.tabData.tabindex == 0 ){
        		this.gfnGridBeforeSelect(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid1);
        	}

        	if( this.tabData.tabindex == 1 ){
        		this.dsSelect.setColumn(0, "CD_BUNSO", this.dsList1.getColumn(this.dsList1.rowposition,"CD_BUNSO"));
        		this.gfnGridBeforeSelect(this.dxGrid2);
        		this.gfnGridClear(this.dxGrid2);
        	}

        	if( this.tabData.tabindex == 2 ){
        		this.dsSelect.setColumn(0, "CD_SITE", this.dsList2.getColumn(this.dsList2.rowposition,"CD_SITE"));
        		this.dsSelect.setColumn(0, "DS_DONG", this.dsSearch.getColumn(0,"DS_DONG"));
        		this.dsSelect.setColumn(0, "DS_HO", this.dsSearch.getColumn(0,"DS_HO"));
        		this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0,"DT_FROM"));
        		this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0,"DT_TO"));
        		this.gfnGridBeforeSelect(this.dxGrid3);
        		this.gfnGridClear(this.dxGrid3);
        	}

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select"+nTabIdx+"=dsSelect";
        	var outData     = "dsList"+(nTabIdx+1)+"=select"+nTabIdx+"0"
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
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
        	if( this.tabData.tabindex != 3 && this.tabData.tabindex != 4) return;

        	if (!this.fnSaveValidate()) return false;

        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.cboTY_GUBUN.value);
        	this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        	this.dsUpdate.setColumn(nrow, "DS_UPDATE", this.AuthClient.DS_HNAME);
        	this.dsUpdate.setColumn(nrow, "TY_UPDATE", this.AuthClient.DS_DEPT);
        	if( this.FormInfo.ID_GROUP == "7" ){
        		this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.CD_VENDOR);
        		this.dsUpdate.setColumn(nrow, "TY_UPDATE", "업체");
        	}
        	this.dsUpdate.setColumn(nrow, "PIC_AFTER", this.strSaveImgPicAfter1);
        	this.dsUpdate.setColumn(nrow, "PIC_AFTER2", this.strSaveImgPicAfter2);

        	if( this.tabData.tabindex == 3 ){
        		this.dsUpdate.setColumn(nrow, "CD_SITE", this.edtCD_SITE_AS.value);
        		this.dsUpdate.setColumn(nrow, "DT_JEOBSU", this.calDT_JEOBSU_AS.value);
        		this.dsUpdate.setColumn(nrow, "CD_JOB", this.edtCD_JOB_AS.value);
        		this.dsUpdate.setColumn(nrow, "DT_JOBEND", this.calDT_JOBEND_AS.value);
        		this.dsUpdate.setColumn(nrow, "RM_JOBEND", this.texRM_JOBEND_AS.value);
        		this.dsUpdate.setColumn(nrow, "PIC_SIGN","");
        		var result = this.skcPIC_SIGN_AS.saveSketch();
        		if( result ) {
        			var a = this.skcPIC_SIGN_AS.value;
        			//Base64 경로로 변경하기
        			this.dsUpdate.setColumn(nrow, "PIC_SIGN",a.getBase64String());
        		}
        	} else if ( this.tabData.tabindex == 4 ){
        		this.dsUpdate.setColumn(nrow, "CD_SITE", this.edtCD_SITE_BS.value);
        		this.dsUpdate.setColumn(nrow, "DT_JEOBSU", this.calDT_JEOBSU_BS.value);
        		this.dsUpdate.setColumn(nrow, "CD_JOB", this.edtCD_JOB_BS.value);
        		this.dsUpdate.setColumn(nrow, "DT_JOBEND", this.calDT_JOBEND_BS.value);
        		this.dsUpdate.setColumn(nrow, "RM_JOBEND", this.texRM_JOBEND_BS.value);
        		this.dsUpdate.setColumn(nrow, "PIC_SIGN","");
        		var result = this.skcPIC_SIGN_BS.saveSketch();
        		if( result ) {
        			var a = this.skcPIC_SIGN_BS.value;
        			//Base64 경로로 변경하기
        			this.dsUpdate.setColumn(nrow, "PIC_SIGN",a.getBase64String());
        		}
        	}


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
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var validate = true;
        	if( this.tabData.tabindex == 3 ){
        		if( validate &&  this.gfnIsNull(this.calDT_JOBEND_AS.value) ){
        			validate = false;
        			this.fnDtJobEndAsVaidateCallback = function() {
        				this.calDT_JOBEND_AS.setFocus();
        				return false;
        			}
        			this.gfnAlert("완료일자를 입력하셔야 합니다.", "fnDtJobEndAsVaidateCallback");
        		}

        		if( validate &&  this.gfnIsNull(this.texRM_JOBEND_AS.value) ){
        			validate = false;
        			this.fnRmJobEndAsVaidateCallback = function() {
        				this.texRM_JOBEND_AS.setFocus();
        				return false;
        			}
        			this.gfnAlert("처리내용을 입력하셔야 합니다.", "fnRmJobEndAsVaidateCallback");
        		}
        	}

        	if( this.tabData.tabindex == 4 ){
        		if( validate &&  this.gfnIsNull(this.calDT_JOBEND_BS.value) ){
        			validate = false;
        			this.fnDtJobEndBsVaidateCallback = function() {
        				this.calDT_JOBEND_BS.setFocus();
        				return false;
        			}
        			this.gfnAlert("완료일자를 입력하셔야 합니다.", "fnDtJobEndBsVaidateCallback");
        		}

        		if( validate &&  this.gfnIsNull(this.texRM_JOBEND_BS.value) ){
        			validate = false;
        			this.fnRmJobEndBsVaidateCallback = function() {
        				this.texRM_JOBEND_BS.setFocus();
        				return false;
        			}
        			this.gfnAlert("처리내용을 입력하셔야 합니다.", "fnRmJobEndBsVaidateCallback");
        		}
        	}

        	return validate;
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
        		if(this.tabData.tabindex == 2) {
        			this.gfnGridAfterSelect(this.dxGrid3);
        		}
        	} else if (svcID == "imagefile") {
        		trace(this.dsImageFile.saveXML());
        		if( !this.gfnIsNull(this.dsList3.getColumn(this.dsList3.rowposition, "PIC_BEFORE")) ){
        			var strImgData = this.dsImageFile.lookup("filename",this.dsList3.getColumn(this.dsList3.rowposition, "PIC_BEFORE"),"filereturn");
        			if( this.tabData.tabindex == 3){
        				this.imgPIC_BEFORE_AS.set_image(strImgData);
        			} else if( this.tabData.tabindex == 4){
        				this.imgPIC_BEFORE_BS.set_image(strImgData);
        			}
        		}

        		if( !this.gfnIsNull(this.dsList3.getColumn(this.dsList3.rowposition, "PIC_BEFORE2")) ){
        			var strImgData = this.dsImageFile.lookup("filename",this.dsList3.getColumn(this.dsList3.rowposition, "PIC_BEFORE2"),"filereturn");
        			this.imgPIC_BEFORE2_AS.set_image(strImgData);
        		}
        	} else if( svcID == "imagefileAfter" ){
        		if( this.btnUploadNm == "btnUpload1" ){
        			this.imgPIC_AFTER_AS.set_image(this.dsImageFile.getColumn(0,"filereturn"));
        			this.strSaveImgPicAfter1 = this.dsImageFile.getColumn(0,"filename");
        		} else if( this.btnUploadNm == "btnUpload2" ){
        			this.imgPIC_AFTER2_AS.set_image(this.dsImageFile.getColumn(0,"filereturn"));
        			this.strSaveImgPicAfter2 = this.dsImageFile.getColumn(0,"filename");
        		} else if( this.btnUploadNm == "btnUpload3" ){
        			this.imgPIC_AFTER_BS.set_image(this.dsImageFile.getColumn(0,"filereturn"));
        			this.strSaveImgPicAfter1 = this.dsImageFile.getColumn(0,"filename");
        		}
        		this.fnUpdateFile();
        	} else if ( svcID == "update" ){
        		this.tabData.set_tabindex(2);
        		this.fnSelect();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfDS_DONG") {
        		dsUserParam.setColumn(nrow, "TY_TYPE", "DONG");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsList2.getColumn(this.dsList2.rowposition,"CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE1", "");
        		dsUserParam.setColumn(nrow, "VALUE2", "");
        		dsUserParam.setColumn(nrow, "CD_VENDOR", this.AuthClient.CD_VENDOR);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        	} else if (id == "ccfDS_HO") {
        		dsUserParam.setColumn(nrow, "TY_TYPE", "HO");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsList2.getColumn(this.dsList2.rowposition,"CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE1", this.gfnNvl(this.ccfDS_DONG.form.CDTextBox.value,""));
        		dsUserParam.setColumn(nrow, "VALUE2", "");
        		dsUserParam.setColumn(nrow, "CD_VENDOR", this.AuthClient.CD_VENDOR);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        	} else if(id == "ccfCD_CTM" ){

        		if( this.FormInfo.ID_GROUP == "7" ){
        			this.dsSearch.set_enableevent(false);
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsList2.getColumn(this.dsList2.rowposition,"CD_SITE"));
        	}

        	return true;
        };

        /*
         *	코드파인드 후처리
         */
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
        	if(id == "ccfDS_DONG") {

        		var strCdDong = "";
        		var strDsDong = "";
        		if (arr.length > 0) {
        			for(var r = 0; r < arr.length; r++) {

        				strCdDong += arr[r]["DS_DONG"]+",";
        				strDsDong += arr[r]["DS_BIGO"]+",";
        			}
        			this.ccfDS_DONG.form.CDTextBox.set_value(strCdDong.substr(0,strCdDong.length-1));
        			this.ccfDS_DONG.form.DSTextBox.set_value(strDsDong.substr(0,strDsDong.length-1));
        		}
        	}

        	if(id == "ccfDS_HO") {
        		var strCdDong = "";
        		var strDsDong = "";
        		if (arr.length > 0) {
        			for(var r = 0; r < arr.length; r++) {

        				strCdDong += arr[r]["DS_DONG"]+",";
        				strDsDong += arr[r]["DS_BIGO"]+",";
        			}
        			this.ccfDS_HO.form.CDTextBox.set_value(strCdDong.substr(0,strCdDong.length-1));
        			this.ccfDS_HO.form.DSTextBox.set_value(strDsDong.substr(0,strDsDong.length-1));
        		}
        	}

        	if( id =="ccfCD_CTM" ) {
        		var strCdCtm = "";
        		var strDsCtm = "";
        		if (arr.length > 0) {
        			for(var r = 0; r < arr.length; r++) {

        				strCdCtm += arr[r]["CD_CTM"]+",";
        				strDsCtm += arr[r]["DS_CTM"]+",";
        			}
        			this.ccfCD_CTM.form.CDTextBox.set_value(strCdCtm.substr(0,strCdCtm.length-1));
        			this.ccfCD_CTM.form.DSTextBox.set_value(strDsCtm.substr(0,strDsCtm.length-1));
        			if( this.FormInfo.ID_GROUP == "7" ){
        				this.dsSearch.set_enableevent(true);
        			}
        		}
        	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.dxGrid_oncellclick = function(obj,e)
        {
        	var strColumnName = this.gfnGridGetBindColumnNameByIndex(obj, e.col);
        	if( this.tabData.tabindex == 0 && strColumnName == "DS_BUNSO" ){
        		this.tabData.set_tabindex(1);
        		this.FormBtns.Select.click();
        	} else if( this.tabData.tabindex == 1 && strColumnName == "DS_SITE" ){
        		this.staDS_BUNSO.set_text(this.dsList1.getColumn(this.dsList1.rowposition,"DS_BUNSO"));
        		this.staCD_SITE.set_text(this.dsList2.getColumn(this.dsList2.rowposition,"CD_SITE"));
        		this.staDS_SITE.set_text(this.dsList2.getColumn(this.dsList2.rowposition,"DS_SITE"));

        		if( this.FormInfo.ID_GROUP == "7" ){
        			this.ccfCD_CTM.form.CDTextBox.set_value(this.AuthClient.CD_VENDOR);
        			this.ccfCD_CTM.form.set_readonly(true);
        			this.ccfCD_CTM.form.CDTextBox_onchanged();
        		} else {
        			this.ccfCD_CTM.form.set_readonly(false);
        		}
        		this.dsSearch.setColumn(0, "DS_DONG", "");
        		this.dsSearch.setColumn(0, "DS_HO", "");
        		this.dsSearch.setColumn(0, "DT_FROM", "");
        		this.dsSearch.setColumn(0, "DT_TO", "");
        		this.tabData.set_tabindex(2);
        		this.FormBtns.Select.click();
        	} else if( this.tabData.tabindex == 2){
        		this.strSaveImgPicAfter1 = "";
        		this.strSaveImgPicAfter2 = "";
        		this.key = this.dsList3.getColumn(this.dsList3.rowposition, "CD_SITE") + this.dsList3.getColumn(this.dsList3.rowposition, "DT_JEOBSU")+ this.dsList3.getColumn(this.dsList3.rowposition, "CD_JOB");

        		if( this.cboTY_GUBUN.value == "AS" ) {
        			this.edtDS_BUNSO_AS.set_value(this.dsList1.getColumn(this.dsList1.rowposition,"DS_BUNSO"));
        			this.edtCD_SITE_AS.set_value(this.dsList2.getColumn(this.dsList2.rowposition,"CD_SITE"));
        			this.edtDS_SITE_AS.set_value(this.dsList2.getColumn(this.dsList2.rowposition,"DS_SITE"));
        			this.calDT_JEOBSU_AS.set_value(this.dsList3.getColumn(this.dsList3.rowposition,"DT_JEOBSU"));
        			this.edtCD_JOB_AS.set_value(this.dsList3.getColumn(this.dsList3.rowposition,"CD_JOB"));
        			this.edtDS_DONG_HO_AS.set_value(this.dsList3.getColumn(this.dsList3.rowposition,"DS_DONG_HO"));
        			this.edtPN_SC_AS.set_value(this.dsList3.getColumn(this.dsList3.rowposition,"PN_SC"));
        			this.edtPN_SCTEL_AS.set_value(this.dsList3.getColumn(this.dsList3.rowposition,"PN_SCTEL"));
        			this.edtDS_ACT_AS.set_value(this.dsList3.getColumn(this.dsList3.rowposition,"DS_ACT"));
        			this.edtDS_SIL_AS.set_value(this.dsList3.getColumn(this.dsList3.rowposition,"DS_SIL"));
        			this.texRM_NY_AS.set_value(this.dsList3.getColumn(this.dsList3.rowposition,"RM_NY"));

        			this.imgPIC_BEFORE_AS.set_image(null);
        			this.imgPIC_BEFORE2_AS.set_image(null);
        			this.imgPIC_AFTER_AS.set_image(null);
        			this.imgPIC_AFTER2_AS.set_image(null);
        			this.calDT_JOBEND_AS.set_value(null);
        			this.texRM_JOBEND_AS.set_value(null);
        			this.skcPIC_SIGN_AS.set_text(" ");
        			this.skcPIC_SIGN_AS.clear();

        			if(!this.gfnIsNull(this.dsList3.getColumn(this.dsList3.rowposition, "PIC_BEFORE")) || !this.gfnIsNull(this.dsList3.getColumn(this.dsList3.rowposition, "PIC_BEFORE2"))){
        				this.fnImageView("BEFORE",""); // 이미지 조회
        			}

        			this.tabData.set_tabindex(3);
        		} else if( this.cboTY_GUBUN.value == "BS" ) {
        			this.edtDS_BUNSO_BS.set_value(this.dsList1.getColumn(this.dsList1.rowposition,"DS_BUNSO"));
        			this.edtCD_SITE_BS.set_value(this.dsList2.getColumn(this.dsList2.rowposition,"CD_SITE"));
        			this.edtDS_SITE_BS.set_value(this.dsList2.getColumn(this.dsList2.rowposition,"DS_SITE"));
        			this.calDT_JEOBSU_BS.set_value(this.dsList3.getColumn(this.dsList3.rowposition,"DT_JEOBSU"));
        			this.edtCD_JOB_BS.set_value(this.dsList3.getColumn(this.dsList3.rowposition,"CD_JOB"));
        			this.edtDS_DONG_HO_BS.set_value(this.dsList3.getColumn(this.dsList3.rowposition,"DS_DONG_HO"));
        			this.edtPN_SC_BS.set_value(this.dsList3.getColumn(this.dsList3.rowposition,"PN_SC"));
        			this.edtPN_SCTEL_BS.set_value(this.dsList3.getColumn(this.dsList3.rowposition,"PN_SCTEL"));
        			this.edtDS_ACT_BS.set_value(this.dsList3.getColumn(this.dsList3.rowposition,"DS_ACT"));
        			this.edtDS_SIL_BS.set_value(this.dsList3.getColumn(this.dsList3.rowposition,"DS_SIL"));
        			this.texRM_NY_BS.set_value(this.dsList3.getColumn(this.dsList3.rowposition,"RM_NY"));

        			this.imgPIC_BEFORE_BS.set_image(null);
        			this.imgPIC_AFTER_BS.set_image(null);
        			this.calDT_JOBEND_BS.set_value(null);
        			this.texRM_JOBEND_BS.set_value(null);
        			this.skcPIC_SIGN_BS.set_text(" ");
        			this.skcPIC_SIGN_BS.clear();

        			if(!this.gfnIsNull(this.dsList3.getColumn(this.dsList3.rowposition, "PIC_BEFORE")) ){
        				this.fnImageView("BEFORE",""); // 이미지 조회
        			}

        			this.tabData.set_tabindex(4);
        		}
        	}

        };

        /*
         * 점검전 이미지 표시
         */
        this.fnImageView = function(strTyGubun, strImgFile) {
        	if (!this.gfnGridIsRow(this.dxGrid3)) { return false; }

        	this.dsImageFile.clearData();

        	var nrow = 0;

        	if( strTyGubun  == "BEFORE" ) {
        		if( !this.gfnIsNull(this.dsList3.getColumn(this.dsList3.rowposition, "PIC_BEFORE")) ){
        			nrow = this.dsImageFile.addRow();

        			this.dsImageFile.setColumn(nrow, "filepath", "/DB/WORKEND/"+ this.cboTY_GUBUN.value+"/"+strTyGubun+"/" + this.key);
        			this.dsImageFile.setColumn(nrow, "filename", this.dsList3.getColumn(this.dsList3.rowposition, "PIC_BEFORE"));
        		}

        		if( !this.gfnIsNull(this.dsList3.getColumn(this.dsList3.rowposition, "PIC_BEFORE2")) ) {
        			nrow = this.dsImageFile.addRow();

        			this.dsImageFile.setColumn(nrow, "filepath", "/DB/WORKEND/"+ this.cboTY_GUBUN.value+"/"+strTyGubun+"/" + this.key);
        			this.dsImageFile.setColumn(nrow, "filename", this.dsList3.getColumn(this.dsList3.rowposition, "PIC_BEFORE2"));
        		}
        	}

        	if( strTyGubun  == "AFTER" ) {
        		nrow = this.dsImageFile.addRow();
        		this.dsImageFile.setColumn(nrow, "filepath", "/DB/WORKEND/"+ this.cboTY_GUBUN.value+"/"+strTyGubun+"/" + this.key);
        		this.dsImageFile.setColumn(nrow, "filename", strImgFile);
        	}
        	// 서버 이미지파일 base64 로 받아오기
        	var strSvcId    = "imagefile";
        	if( strTyGubun  == "AFTER" ) {
        		strSvcId    = "imagefileAfter";
        	}
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
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.btnPrevious_onclick = function(obj,e)
        {
        	if( this.tabData.tabindex == 4 ) {
        		this.tabData.set_tabindex(this.tabData.tabindex-2);
        	} else {
        		this.tabData.set_tabindex(this.tabData.tabindex-1);
        	}
        };

        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(this.tabData.tabindex == 2 && e.row > -1 && e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid3);
        	}

        	if( e.columnid == "TY_GUBUN" ){
        		this.fnSelect();
        	}
        };

        /*
         * 파일 업로드
         */
        this.fileup_onitemchanged = function(obj,e) {


        	if(obj.filelist.length > 0) {
        		var filename = obj.filelist[0].filename;
        		var fileext = filename.toLocaleLowerCase().substring(filename.lastIndexOf('.')+1);
        		if(!this.gfnIsExistInArray(this.fileConfig.allowTypes, fileext)) {
        			this.gfnAlert("이미지 파일(" + this.fileConfig.allowTypes.join(',') + ")을 선택하세요.");
        			return;
        		}

        		var sFilePath = obj.value;
        		var dirExpt = sFilePath.lastIndexOf("\\")+1;
        		var sFileName = sFilePath.substr(dirExpt);

        		if( this.tabData.tabindex == 3 && this.btnUploadNm == "btnUpload1" ){
        			if( sFileName == this.strSaveImgPicAfter2 ){
        				this.gfnAlert("점검후 이미지2에 등록된 파일명("+sFileName+")과 동일한 파일명으로 등록할 수 없습니다.");
        				return;
        			}
        		}

        		if( this.tabData.tabindex == 3 && this.btnUploadNm == "btnUpload2" ){
        			if( sFileName == this.strSaveImgPicAfter1 ){
        				this.gfnAlert("점검후 이미지1에 등록된 파일명("+sFileName+")과 동일한 파일명으로 등록할 수 없습니다.");
        				return;
        			}
        		}

        		this.filepath = "/DB/WORKEND/" + this.cboTY_GUBUN.value+"/AFTER/";

        		var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl + this.filepath +this.key;
        		this.fileup.upload(sUploadUrl);
        	}
        };

        /*
         * 파일 업로드 성공
         */
        this.fileup_onsuccess = function(obj,e) {

        	this.fnImageView("AFTER", obj.filelist[0].filename);
        };

        /*
         * 파일 업로드 실패
         */
        this.fileup_onerror = function(obj,e) {
        	this.gfnAlert("이미지 파일(" + obj.filelist[0].filename + ")을 업로드에 실패하였습니다.\n다시 업로드해주세요.");
        };

        /*
         * 업로드 버튼 클릭
         */
        this.btnUpload_onclick = function(obj,e)
        {
        	this.btnUploadNm = obj.id;
        	this.fileup.filefindbuttons.upfile0.click();
        };

        /*
         * 저장
         */
        this.btnSave_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        /*
         * 서명 초기화
         */
        this.btnClear_onclick = function(obj,e)
        {
        	if( this.tabData.tabindex == 3 ){
        		this.skcPIC_SIGN_AS.clear();
        	} else if( this.tabData.tabindex == 4 ){
        		this.skcPIC_SIGN_BS.clear();
        	}
        };
        this.tabData_tab5_divDetail_edtDS_SITE_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.tabData.tab2.form.divCommon.form.btnPrevious.addEventHandler("onclick",this.btnPrevious_onclick,this);
            this.tabData.tab3.form.divCommon.form.btnPrevious.addEventHandler("onclick",this.btnPrevious_onclick,this);
            this.tabData.tab3.form.divSearch.form.btnSelect.addEventHandler("onclick",this.fnSelect,this);
            this.tabData.tab4.form.divCommon.form.btnPrevious.addEventHandler("onclick",this.btnPrevious_onclick,this);
            this.tabData.tab4.form.divCommon.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.tabData.tab4.form.divDetail.form.btnUpload2.addEventHandler("onclick",this.btnUpload_onclick,this);
            this.tabData.tab4.form.divDetail.form.btnUpload1.addEventHandler("onclick",this.btnUpload_onclick,this);
            this.tabData.tab4.form.divDetail.form.btnClear.addEventHandler("onclick",this.btnClear_onclick,this);
            this.tabData.tab5.form.divCommon.form.btnPrevious.addEventHandler("onclick",this.btnPrevious_onclick,this);
            this.tabData.tab5.form.divCommon.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.tabData.tab5.form.divDetail.form.edtDS_SITE.addEventHandler("onchanged",this.tabData_tab5_divDetail_edtDS_SITE_onchanged,this);
            this.tabData.tab5.form.divDetail.form.btnUpload3.addEventHandler("onclick",this.btnUpload_onclick,this);
            this.tabData.tab5.form.divDetail.form.btnClear2.addEventHandler("onclick",this.btnClear_onclick,this);
            this.dsTY_GUBUN.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DBM_WORKSTATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
