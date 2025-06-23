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
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_AFTERASRECEIPT_MANAGEMENT_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo3</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"SP\">DBSPR_AFTERWORKSADE_SELECT_STD</Col><Col id=\"TARGET\">addSelect</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DBSPR_AFTERASRECEIPT_MANAGEMENT_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBSPR_AFTERASRECEIPT_MANAGEMENT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DBSPR_AFTERASRECEIPT_MANAGEMENT_DELETE</Col></Row><Row><Col id=\"SP\">DBSPR_PICUPLOAD_MSG_INSERT</Col><Col id=\"TARGET\">sendMsg</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_APPLY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAddData", this);
            obj._setContents("<ColumnInfo><Column id=\"PN_SC\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SCTELHOME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SCTEL\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SPECBIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_KBCIL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_COMPLETE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("단지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_DONG","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("동");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_DONG","staDS_DONG:0.0","10.0","93","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFASDONGHO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_HO","ccfDS_DONG:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_HO","staDS_HO:0.0","10.0","93","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFASDONGHO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataMain","0","0",null,"283","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar19","615","195","33.91%","59",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar18","614","146","33.91%","50",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("25");
            obj.set_text("접수내용");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem01","0","30","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("27");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar01","staItem01:-1","30","14.92%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem02","0","59","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("28");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar02","staItem02:-1","59","14.92%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem03","0","88","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("30");
            obj.set_text("위치");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar03","staItem03:-1","88","14.92%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem04","0","117","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("32");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar04","staItem04:-1","117","14.92%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem05","0","146","90","50",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("34");
            obj.set_text("하자내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar05","staItem05:-1","146",null,"50","728",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem06","0","195","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("36");
            obj.set_text("방문예정일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar06","staItem06:-1","195","14.92%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem07","0","224","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("38");
            obj.set_text("완료일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar07","staItem07:-1","224","14.92%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem08","staBar01:-1","30","85","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("40");
            obj.set_text("동/호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar08","staItem08:-1","30","14.92%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem09","staBar02:-1","59","85","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("42");
            obj.set_text("자택/휴대폰");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar09","staItem09:-1","59","14.92%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem10","staBar03:-1","88","85","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("44");
            obj.set_text("하자형태");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar10","staItem10:-1","88","14.92%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem11","staBar04:-1","117","85","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("46");
            obj.set_text("공종");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar11","staItem11:-1","117","14.92%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem16","staBar10:-1","88","75","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("48");
            obj.set_text("보수유형");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar16","staItem16:-1","88","14.92%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem17","staBar11:-1","117","75","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("50");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar17","staItem17:-1","117","14.92%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem15","staBar09:-1","59","75","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("52");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar15","staItem15:-1","59","14.92%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem14","staBar08:-1","30","75","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("54");
            obj.set_text("면적Type");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar14","staItem14:-1","30","14.92%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem20","staBar14:-1","30","100","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("56");
            obj.set_text("키불출일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar20","staItem20:-1","30","10.60%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem21","staBar15:-1","59","100","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("58");
            obj.set_text("입주일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar21","staItem21:-1","59","10.6%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem22","staBar16:-1","88","100","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("60");
            obj.set_text("하자신고유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar22","staItem22:-1","88","10.6%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Combo("cboCD_APPLY","staItem22:5","93","9.50%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsCD_APPLY");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("ccfCD_FIX","staItem16:5","93","14.06%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DB_B2");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Calendar("calDT_IPJU","staItem21:5","64","9.50%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Calendar("calDT_KBCIL","staItem20:5","34","9.50%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem13","staBar07:-1","224","85","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("62");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar13","staItem13:-1","224","14.91%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem18","staBar05:-1","146","75","50",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("64");
            obj.set_text(" 추가\r\n하자내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem12","staBar06:-1","195","85","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("66");
            obj.set_text("처리일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar12","staItem12:-1","195","14.91%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("ccfCD_TYPE","staItem10:5","93","14.06%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DB_B1");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("ccfCD_UH","staItem04:5","123","14.06%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DB_S1");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACT","staItem11:5","123","14.06%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.getSetter("CodeFindName").set("DBX_CFACT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("ccfCD_CTM","staItem17:5","123","14.06%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.getSetter("CodeFindName").set("DBX_CFHADO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("ccfCD_SIL","staItem03:5","93","14.06%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DB_S3");
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
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Calendar("calDT_APPROVE","staItem07:5","229","120","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Calendar("calDT_VISIT","staItem06:5","200","120","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Calendar("calDT_JOBEND","staItem12:5","200","120","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtDS_DONG","staItem08:5","35","6.88%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtDS_HO","edtDS_DONG:5","35","6.72%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtNO_SCTELHOME","staItem09:5","64","6.88%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("6");
            obj.set_inputtype("number");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC","staItem02:5","63","14.06%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("5");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtSZ_TYPE","staItem14:5","35","14.06%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtDS_SPECBIGO","staItem15:5","64","14.06%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtTY_JOBSTATE","staItem13:5","229","13.98%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new TextArea("taxRM_CUSTOMER","staItem18:5","152","31.09%","38",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("18");
            obj.set_autoselect("false");
            obj.set_enableevent("true");
            obj.set_accessibilitydesclevel("all");
            obj.set_maxlength("500");
            obj.set_wordWrap("char");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem19","staBar12:-1","195","75","59",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("68");
            obj.set_text("처리내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new TextArea("taxRM_NY","staItem05:5","152",null,"38","761",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("17");
            obj.set_autoselect("false");
            obj.set_enableevent("true");
            obj.set_accessibilitydesclevel("all");
            obj.set_maxlength("500");
            obj.set_wordWrap("char");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtNO_SCTEL","edtNO_SCTELHOME:5","64","6.72%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("7");
            obj.set_inputtype("number");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new TextArea("taxRM_JOBEND","staItem19:5","200","31.09%","49",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("23");
            obj.set_autoselect("false");
            obj.set_enableevent("true");
            obj.set_accessibilitydesclevel("all");
            obj.set_maxlength("500");
            obj.set_wordWrap("char");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem24","0","253","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("70");
            obj.set_text("불만족여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem23","staBar17:-1","117","100","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("71");
            obj.set_text("콜센터접수일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar23","staItem23:-1","117","10.60%","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Calendar("calDT_CALL","staItem23:5","123","9.50%","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("73");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar24","staItem24:-1","89.40%",null,"30","232",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new CheckBox("chkTY_DISSATIS","staItem24:5","258","90","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("75");
            obj.set_text("불만족");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_enable("false");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtNO_HADOCONT","483","258","54","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("76");
            obj.set_visible("false");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new ImageViewer("imgPic","staBar20:-1","30",null,"253","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("24");
            obj.set_stretch("fixaspectratio");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("divDataSub","0","divDataMain:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","1",null,null,null,null,this.divData.form.divDataSub.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataSub.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

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

            obj = new BindItem("item6","divData.form.divDataMain.form.edtSZ_TYPE","value","dsList","SZ_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataMain.form.calDT_KBCIL","value","dsList","DT_KBCIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataMain.form.edtPN_SC","value","dsList","PN_SC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataMain.form.edtNO_SCTELHOME","value","dsList","NO_SCTELHOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataMain.form.edtNO_SCTEL","value","dsList","NO_SCTEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataMain.form.edtDS_SPECBIGO","value","dsList","DS_SPECBIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataMain.form.calDT_IPJU","value","dsList","DT_IPJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataMain.form.ccfCD_SIL.form.CDTextBox","value","dsList","CD_SIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataMain.form.ccfCD_TYPE.form.CDTextBox","value","dsList","CD_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataMain.form.ccfCD_FIX.form.CDTextBox","value","dsList","CD_FIX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataMain.form.cboCD_APPLY","value","dsList","CD_APPLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataMain.form.ccfCD_UH.form.CDTextBox","value","dsList","CD_UH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataMain.form.ccfCD_ACT.form.CDTextBox","value","dsList","CD_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataMain.form.ccfCD_CTM.form.CDTextBox","value","dsList","CD_CTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataMain.form.taxRM_NY","value","dsList","RM_NY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataMain.form.taxRM_CUSTOMER","value","dsList","RM_CUSTOMER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataMain.form.calDT_VISIT","value","dsList","DT_VISIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataMain.form.calDT_JOBEND","value","dsList","DT_JOBEND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataMain.form.calDT_APPROVE","value","dsList","DT_APPROVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataMain.form.edtTY_JOBSTATE","value","dsList","TY_JOBSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataMain.form.ccfCD_UH.form.DSTextBox","value","dsList","DS_UH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataMain.form.ccfCD_ACT.form.DSTextBox","value","dsList","DS_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataMain.form.ccfCD_CTM.form.DSTextBox","value","dsList","DS_CTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataMain.form.ccfCD_FIX.form.DSTextBox","value","dsList","DS_FIX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataMain.form.ccfCD_TYPE.form.DSTextBox","value","dsList","DS_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divDataMain.form.ccfCD_SIL.form.DSTextBox","value","dsList","DS_SIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataMain.form.taxRM_JOBEND","value","dsList","RM_JOBEND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divDataMain.form.calDT_CALL","value","dsList","DT_CALL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataMain.form.chkTY_DISSATIS","value","dsList","TY_DISSATIS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divDataMain.form.edtNO_HADOCONT","value","dsList","NO_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_AFTERASRECEIPTTO_MANAGEMENT.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.filepath = "/DB/SIZEINFO/";

        this.form_onload = function(obj,e)
        {

        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	//this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSetCombo();
        	this.form_onsize();

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
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;  // 단지코드
        	this.ccfDS_DONG = this.divSearch.form.ccfDS_DONG;  // 동코드
        	this.ccfDS_HO = this.divSearch.form.ccfDS_HO;      // 호코드

        	this.ccfCD_SIL = this.divData.form.divDataMain.form.ccfCD_SIL;            // 위치
        	this.ccfCD_TYPE = this.divData.form.divDataMain.form.ccfCD_TYPE;          // 하자형태
        	this.ccfCD_FIX = this.divData.form.divDataMain.form.ccfCD_FIX;            // 보수유형
        	this.ccfCD_UH = this.divData.form.divDataMain.form.ccfCD_UH;              // 유형
        	this.ccfCD_ACT = this.divData.form.divDataMain.form.ccfCD_ACT;            // 공종코드
        	this.ccfCD_CTM = this.divData.form.divDataMain.form.ccfCD_CTM;            // 협력업체

        	this.dxGrid = this.divData.form.divDataSub.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_SITE.CodeFindName = "DBX_CFMAINSITE";
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_DONG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";     // 동코드 파라미터
        	this.ccfDS_DONG.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_HO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";       // 호코드 파라미터
        	this.ccfDS_HO.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_SIL.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_TYPE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_FIX.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_UH.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_ACT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CTM.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CTM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";      // 협력업체코드 파라미터
        	this.ccfCD_CTM.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_AFTERASRECEIPTTO_MANAGEMENT");
        	//this.dxGrid.set_autosizingtype("row");
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_NY"), "tooltiptext", "bind:RM_NY" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_JOBEND"), "tooltiptext", "bind:RM_JOBEND" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_CUSTOMER"), "tooltiptext", "bind:RM_CUSTOMER" );

        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_NY"), "wordWrap", "char" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_JOBEND"), "wordWrap", "char" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_CUSTOMER"), "wordWrap", "char" );
        	this.dxGrid.setFormatRowProperty( 1,"size",this.dxGrid.getFormatRowProperty(0,"size")*2 );

        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경
        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        	this.dsList.addEventHandler("onrowposchanged", this.dsList_onrowposchanged, this);

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("DS_DONG", "string");
        	this.dsSelect.addColumn("DS_HO", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");           // 단지코드
        	this.dsInsert.addColumn("DS_DONG", "string");           // 동
        	this.dsInsert.addColumn("DS_HO", "string");             // 호
        	this.dsInsert.addColumn("DT_JEOBSU", "string");         // 접수일자
        	this.dsInsert.addColumn("PN_SC", "string");             // 신청자명
        	this.dsInsert.addColumn("NO_SCTELHOME", "string");      // 집전화
        	this.dsInsert.addColumn("NO_SCTEL", "string");          // 신청자핸드폰
        	this.dsInsert.addColumn("CD_SIL", "string");            // 실(위치)
        	this.dsInsert.addColumn("CD_APPLY", "string");          // 신고유형
        	this.dsInsert.addColumn("RM_NY", "string");             // 하자내용
        	this.dsInsert.addColumn("RM_CUSTOMER", "string");       // 추가 하자내용
        	this.dsInsert.addColumn("DT_VISIT", "string");          // 방문예정일
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("SEQ", "int");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");           // 단지코드
        	this.dsUpdate.addColumn("DT_JEOBSU", "string");         // 접수일자
        	this.dsUpdate.addColumn("CD_JOB", "string");            // 순번
        	this.dsUpdate.addColumn("PN_SC", "string");             // 신청자명
        	this.dsUpdate.addColumn("NO_SCTELHOME", "string");      // 집전화
        	this.dsUpdate.addColumn("NO_SCTEL", "string");          // 신청자핸드폰
        	this.dsUpdate.addColumn("CD_SIL", "string");            // 실(위치)
        	this.dsUpdate.addColumn("RM_NY", "string");             // 하자내용
        	this.dsUpdate.addColumn("RM_CUSTOMER", "string");       // 비고(고객의 소리)
        	this.dsUpdate.addColumn("DT_VISIT", "string");          // 방문예정일
        	this.dsUpdate.addColumn("ID_UPDATE", "string");         // 수정자 사번

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");           // 단지코드
        	this.dsDelete.addColumn("DT_JEOBSU", "string");         // 접수일자
        	this.dsDelete.addColumn("CD_JOB", "string");            // 순번
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate("ALL")) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsList.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        	var strHo = this.dsSearch.getColumn(0, "DS_HO");
        	if( strHo == "공용" ){
        		 strHo = "0000";
        	}
        	this.dsSelect.setColumn(0, "DS_HO", strHo);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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
          *	조회 버튼
          */
        this.fnSelectAddData = function() {

        	if (!this.fnSelectValidate("ALL")) return false;

        	this.dsListAddData.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        	this.dsSelect.setColumn(0, "DS_HO", this.dsSearch.getColumn(0, "DS_HO"));

        	var strSvcId    = "selectAddData";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "addSelect=dsSelect";
        	var outData     = "dsListAddData=addSelect0";
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
        	if (!this.fnSaveValidate()) return false;


        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				if (this.ccfDS_HO.form.CDTextBox.value == "공용"){
        					this.dsInsert.setColumn(nrow, "DS_HO", "0000");
        				} else {
        					this.dsInsert.setColumn(nrow, "DS_HO", this.dsList.getColumn(i,"DS_HO"));
        				}
        				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsInsert.setColumn(nrow, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        				this.dsInsert.setColumn(nrow, "DT_JEOBSU", this.gfnGetDate());
        				this.dsInsert.setColumn(nrow, "PN_SC", this.dsList.getColumn(i,"PN_SC"));
        				this.dsInsert.setColumn(nrow, "NO_SCTELHOME", this.dsList.getColumn(i,"NO_SCTELHOME"));
        				this.dsInsert.setColumn(nrow, "NO_SCTEL", this.dsList.getColumn(i,"NO_SCTEL"));
        				this.dsInsert.setColumn(nrow, "CD_SIL", this.dsList.getColumn(i,"CD_SIL"));
        				this.dsInsert.setColumn(nrow, "CD_APPLY", this.dsList.getColumn(i,"CD_APPLY"));
        				this.dsInsert.setColumn(nrow, "RM_NY", this.dsList.getColumn(i,"RM_NY"));
        				this.dsInsert.setColumn(nrow, "RM_CUSTOMER", this.dsList.getColumn(i,"RM_CUSTOMER"));
        				this.dsInsert.setColumn(nrow, "DT_VISIT", this.dsList.getColumn(i,"DT_VISIT"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "SEQ", i);

        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i,"CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "DT_JEOBSU", this.dsList.getColumn(i, "DT_JEOBSU"));
        				this.dsUpdate.setColumn(nrow, "CD_JOB", this.dsList.getColumn(i, "CD_JOB"));
        				this.dsUpdate.setColumn(nrow, "PN_SC", this.dsList.getColumn(i,"PN_SC"));
        				this.dsUpdate.setColumn(nrow, "NO_SCTELHOME", this.dsList.getColumn(i,"NO_SCTELHOME"));
        				this.dsUpdate.setColumn(nrow, "NO_SCTEL", this.dsList.getColumn(i,"NO_SCTEL"));
        				this.dsUpdate.setColumn(nrow, "CD_SIL", this.dsList.getColumn(i,"CD_SIL"));
        				this.dsUpdate.setColumn(nrow, "RM_NY", this.dsList.getColumn(i,"RM_NY"));
        				this.dsUpdate.setColumn(nrow, "RM_CUSTOMER", this.dsList.getColumn(i,"RM_CUSTOMER"));
        				this.dsUpdate.setColumn(nrow, "DT_VISIT", this.dsList.getColumn(i,"DT_VISIT"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i,"CD_SITE"));
        				this.dsDelete.setColumn(nrow, "DT_JEOBSU", this.dsList.getColumn(i,"DT_JEOBSU"));
        				this.dsDelete.setColumn(nrow, "CD_JOB", this.dsList.getColumn(i,"CD_JOB"));

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
        	this.nAddrow = this.gfnGridAdd(this.dxGrid,"");

        	this.fnSelectAddData();
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if( this.dsList.getColumn(this.dsList.rowposition, this.ucFlag) == "#") return;
        	if ( !this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"DT_APPROVE")) ){
        		this.gfnAlert("완료된 하자접수건은 삭제할 수 없습니다.", "");
        	} else {
        		this.gfnGridDel(this.dxGrid);
        	}
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGridSub);
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
        		this.gfnAlert("단지코드를 입력하셔야 합니다.", "fnCdSiteVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}
        	if ( validate && strType == "ALL" || strType == "HO"){
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "DS_DONG"))) {
        			validate = false;
        			this.fnDongVaidateCallback = function() {
        				this.ccfDS_DONG.form.CDTextBox.setFocus();
        				return false;
        			}
        			this.gfnAlert("동을 입력하셔야 합니다.", "fnDongVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        		}
        	}
        	if ( validate && strType == "ALL"){
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "DS_HO"))) {
        			validate = false;
        			this.fnHoVaidateCallback = function() {
        				this.ccfDS_HO.form.CDTextBox.setFocus();
        				return false;
        			}
        			this.gfnAlert("호를 입력하셔야 합니다.", "fnHoVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        		}
        	}

        	return validate;
        }
        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var strMsg = "";
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if( flag == "I" ||  flag == "U" ) {
        			if( this.gfnIsNull(this.dsList.getColumn(i,"NO_SCTEL")) ) {
        				strMsg += (i+1)+"행 : [휴대전화] 필수입력값입니다.\n";
        			}

        			if ( this.gfnIsNull(this.dsList.getColumn(i,"CD_SIL")) ) {
        				strMsg += (i+1)+"행 : [위치] 필수입력값입니다.\n";
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
        		if( this.dsList.rowcount > 0){
        			this.gfnGridAfterSelect(this.dxGrid);
        		}

        		this.fnEnable();

        	} else if (svcID == "combo") {
        		if( this.FormInfo.ID_GROUP == "6" && this.AuthClient.CD_DEPT != "Z99999") {
        			this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_DEPT);
        			this.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);

        			this.ccfCD_SITE.form.set_readonly(true);
        		}
        	} else if(svcID == "selectAddData") {
        		this.dsList.set_rowposition(this.nAddrow);
        		this.dsList.setColumn(this.nAddrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsList.setColumn(this.nAddrow, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));
        		this.dsList.setColumn(this.nAddrow, "DS_HO", this.dsSearch.getColumn(0, "DS_HO"));
        		this.dsList.setColumn(this.nAddrow, "DT_JEOBSU", this.gfnGetDate());
        		this.dsList.setColumn(this.nAddrow,"PN_SC",this.dsListAddData.getColumn(0,"PN_SC"));
        		this.dsList.setColumn(this.nAddrow,"NO_SCTELHOME",this.dsListAddData.getColumn(0,"NO_SCTELHOME"));
        		this.dsList.setColumn(this.nAddrow,"NO_SCTEL",this.dsListAddData.getColumn(0,"NO_SCTEL"));
        		this.dsList.setColumn(this.nAddrow,"SZ_TYPE",this.dsListAddData.getColumn(0,"SZ_TYPE"));
        		this.dsList.setColumn(this.nAddrow,"DS_SPECBIGO",this.dsListAddData.getColumn(0,"DS_SPECBIGO"));
        		this.dsList.setColumn(this.nAddrow,"DT_KBCIL",this.dsListAddData.getColumn(0,"DT_KBCIL"));
        		this.dsList.setColumn(this.nAddrow,"DT_IPJU",this.dsListAddData.getColumn(0,"DT_IPJU"));
        		this.dsList.setColumn(this.nAddrow,"RM_JOBEND","");
        		this.dsList.setColumn(this.nAddrow,"CD_APPLY","169");

        		this.fnEnable();
        	} else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "imagefile") {
        		//trace(this.dsImageFile.saveXML());
        		this.divData.form.divDataMain.form.imgPic.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        	} else if(svcID == "sendMsg" ){
        		this.gfnAlert("알림톡 전송이 완료 합니다.");
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
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", "");
        		dsUserParam.setColumn(nrow, "CD_BUNSO", "");

        		if( this.FormInfo.ID_GROUP == "2" ){
        			dsUserParam.setColumn(nrow, "CD_BUNSO", this.AuthClient.CD_DEPT.substr(1));
        		}
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	} else if (id == "ccfDS_DONG") {
        		if (!this.fnSelectValidate("DONG")) return false;

        		dsUserParam.setColumn(nrow, "TY_TYPE", "DONG");
        		dsUserParam.setColumn(nrow, "CD_SITE",this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE1", "");
        		dsUserParam.setColumn(nrow, "VALUE2", "");
        	} else if (id == "ccfDS_HO") {
        		if (!this.fnSelectValidate("HO")) return false;

        		dsUserParam.setColumn(nrow, "TY_TYPE", "HO");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE1", this.gfnNvl(this.dsSearch.getColumn(0, "DS_DONG"),""));
        		dsUserParam.setColumn(nrow, "VALUE2", this.gfnNvl(this.dsSearch.getColumn(0, "DS_HO"),""));
        	} else if(id == "ccfCD_CTM" ){
        		if (!this.fnSelectValidate("CD_CTM")) return false;
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_ACT",  this.gfnNvl(this.ccfCD_ACT.form.CDTextBox.value,""));
        	}

        	return true;
        }

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
        			this.dsSearch.setColumn(0, "DS_DONG", strCdDong.substr(0,strCdDong.length-1));
        			//this.ccfDS_DONG.form.CDTextBox.set_value(strCdDong.substr(0,strCdDong.length-1));
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
        			this.dsSearch.setColumn(0, "DS_HO", strCdDong.substr(0,strCdDong.length-1));
        			//this.ccfDS_HO.form.CDTextBox.set_value(strCdDong.substr(0,strCdDong.length-1));
        			this.ccfDS_HO.form.DSTextBox.set_value(strDsDong.substr(0,strDsDong.length-1));
        		}
        	}

        	if( id =="ccfCD_CTM" ) {
        		var strCdCtm = "";
        		var strDsCtm = "";
        		var strNoHadocont = "";
        		if (arr.length > 0) {
        			for(var r = 0; r < arr.length; r++) {

        				strCdCtm += arr[r]["CD_CTM"]+",";
        				strDsCtm += arr[r]["DS_CTM"]+",";
        				strNoHadocont += arr[r]["NO_HADOCONT"]+",";
        			}
        			this.ccfCD_CTM.form.CDTextBox.set_value(strCdCtm.substr(0,strCdCtm.length-1));
        			this.ccfCD_CTM.form.DSTextBox.set_value(strDsCtm.substr(0,strDsCtm.length-1));
        			this.divData.form.divDataMain.form.edtNO_HADOCONT.set_value(strNoHadocont.substr(0,strNoHadocont.length-1));
        		}
        	}

        	if( id =="ccfCD_SIL" || id =="ccfCD_UH" ) {
        		if( this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "DT_CALL")) ){
        			var strVal = "";
        			if( !this.gfnIsNull(this.ccfCD_SIL.form.DSTextBox.text) ) strVal += this.ccfCD_SIL.form.DSTextBox.text;
        			if( !this.gfnIsNull(this.ccfCD_SIL.form.DSTextBox.text) && !this.gfnIsNull(this.ccfCD_UH.form.DSTextBox.text) ) strVal += "-";
        			if( !this.gfnIsNull(this.ccfCD_UH.form.DSTextBox.text) ) strVal += this.ccfCD_UH.form.DSTextBox.text;
        			this.divData.form.divDataMain.form.taxRM_NY.set_value(strVal);
        		}
        	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        /*
         * 점검전사진 업로드 팝업 호출
         */
        this.fnPicView = function()
        {
        	var param = {};
        		param.fileConfig = this.gfnGetFileConfig();
        		param.CF_CD_SITE = this.dsList.getColumn(this.dsList.rowposition,"CD_SITE");
        		param.CF_DT_JEOBSU = this.dsList.getColumn(this.dsList.rowposition,"DT_JEOBSU");
        		param.CF_CD_JOB = this.dsList.getColumn(this.dsList.rowposition,"CD_JOB");
        		param.CF_PIC_IMAGE = this.dsList.getColumn(this.dsList.rowposition,"PIC_BEFORE");
        		param.CF_PIC_IMAGE2 = this.dsList.getColumn(this.dsList.rowposition,"PIC_BEFORE2");
        		param.CF_TY_PIC = "BEFORE";
        		param.CF_TY_CODE = "AS";
        		param.ID_USER = this.AuthClient.ID_USER;
        		param.CF_DS_SITE = "";
        		param.CF_DS_DONG = "";
        		param.CF_DS_HO = "";
        		param.CF_RM_NY = this.dsList.getColumn(this.dsList.rowposition,"RM_NY");

        	var options = {
        		title: "점검전사진 업로드",
        		resizable: true
        	}
        	this.gfnOpenPopup("DBS_JUMGUM_BEFORE_UPPIC","dbs::DBS_JUMGUM_BEFORE_UPPIC.xfdl",param,"fnPopupCallback",options);
        };

        /*
         * 그리드 더블클릭 이벤트
         */
        this.dxGrid_oncelldblclick = function(obj,e)
        {
        	var strColumnName = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, this.dxGrid.currentcol);
        	if( strColumnName != "PIC_BEFORE" && strColumnName != "PIC_BEFORE2" ) return;

        	this.fnPicView();
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

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
        	}

        	if( e.columnid == "CD_SITE" ){
        		this.ccfDS_DONG.form.CDTextBox.set_value("");
        		this.ccfDS_HO.form.CDTextBox.set_value("");
        	}
        	if( e.columnid == "DS_DONG" ){
        		this.ccfDS_HO.form.CDTextBox.set_value("");
        		if( e.newvalue == "공용" || e.newvalue == "상가" ){
        			this.ccfCD_SIL.CodeFindName = "CF_CODE_DB_C2";
        		} else {
        			this.ccfCD_SIL.CodeFindName = "CF_CODE_DB_S3";
        		}
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
        	this.dsCombo.setColumn(0, "CD_TYPE", "B3");

        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_TYPE", "string");

        	this.dsCombo2.addRow();
        	this.dsCombo2.setColumn(0, "CD_SYSTEM", "DB");
        	this.dsCombo2.setColumn(0, "CD_TYPE", "S4");    // 진행현황

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo combo2=dsCombo2";
        	var outData     = "dsCD_APPLY=combo0 dsTY_COMPLETE=combo20";
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
         *	항목 활성화 설정
         */
        this.fnEnable = function () {
        	var bReadOnly = true;
        	if( this.dsList.getColumn(this.dsList.rowposition, this.ucFlag) == "#"){
        		bReadOnly = false;
        		this.gfnSetAllReadonly(this.divData.form.divDataMain.form, true );
        	} else if( this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"DT_APPROVE")) ){
        		bReadOnly = true;
        		this.gfnSetAllReadonly(this.divData.form.divDataMain.form, false );
        	} else {
        		bReadOnly = false;
        		this.gfnSetAllReadonly(this.divData.form.divDataMain.form, true );
        	}

        	this.divData.form.divDataMain.form.calDT_JEOBSU.set_readonly(true);
        	this.divData.form.divDataMain.form.edtDS_DONG.set_readonly(true);
        	this.divData.form.divDataMain.form.edtDS_HO.set_readonly(true);
        	this.divData.form.divDataMain.form.edtSZ_TYPE.set_readonly(true);
        	this.divData.form.divDataMain.form.calDT_KBCIL.set_readonly(true);
        	this.divData.form.divDataMain.form.edtDS_SPECBIGO.set_readonly(true);
        	this.divData.form.divDataMain.form.calDT_IPJU.set_readonly(true);
        	this.divData.form.divDataMain.form.calDT_JOBEND.set_readonly(true);
        	this.divData.form.divDataMain.form.calDT_APPROVE.set_readonly(true);
        	this.divData.form.divDataMain.form.edtTY_JOBSTATE.set_readonly(true);
        	this.divData.form.divDataMain.form.taxRM_JOBEND.set_readonly(true);
        	this.ccfCD_SIL.form.DSTextBox.set_readonly(true);
        	this.ccfCD_TYPE.form.set_readonly(true);
        	this.ccfCD_FIX.form.set_readonly(true);
        	this.ccfCD_UH.form.set_readonly(true);
        	this.ccfCD_ACT.form.set_readonly(true);
        	this.ccfCD_CTM.form.set_readonly(true);
        	this.divData.form.divDataMain.form.calDT_CALL.set_readonly(true);
        	this.divData.form.divDataMain.form.cboCD_APPLY.set_readonly(true);
        	this.divData.form.divDataMain.form.imgPic.set_image(null);

        	if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_ACT")) ){
        		this.divData.form.divDataMain.form.edtPN_SC.set_readonly(true);
        		this.divData.form.divDataMain.form.edtNO_SCTELHOME.set_readonly(true);
        		this.divData.form.divDataMain.form.edtNO_SCTEL.set_readonly(true);
        		this.ccfCD_SIL.form.set_readonly(true);
        		this.divData.form.divDataMain.form.taxRM_NY.set_readonly(true);
        		this.divData.form.divDataMain.form.cboCD_APPLY.set_readonly(true);
        	} else {
        		this.divData.form.divDataMain.form.edtPN_SC.set_readonly(false);
        		this.divData.form.divDataMain.form.edtNO_SCTELHOME.set_readonly(false);
        		this.divData.form.divDataMain.form.edtNO_SCTEL.set_readonly(false);
        		this.ccfCD_SIL.form.set_readonly(false);
        	}

        	if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "PIC_BLUEPRINT")) ){
        		this.fnImageView(); // 이미지 조회
        	}

        };

        /*
         *	그리드 행 이동시 항목 활성화 설정
         */
        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(e.oldrow > -1 && e.oldrow != e.newrow ){
        		this.fnEnable();
        	}
        };

        /*
         *	폼 크기 변경시 하자내용, 비고 항목 사이즈 조정
         */
        this.form_onsize = function(obj,e)
        {
        	this.divData.form.divDataMain.form.staBar05.setOffsetRight(this.divData.form.divDataMain.form.staBar11.getOffsetRight());
        	this.divData.form.divDataMain.form.taxRM_NY.setOffsetRight(this.divData.form.divDataMain.form.ccfCD_ACT.getOffsetRight());
        	this.divData.form.divDataMain.form.staItem18.setOffsetLeft(this.divData.form.divDataMain.form.staItem17.getOffsetLeft());
        	this.divData.form.divDataMain.form.staBar18.setOffsetLeft(this.divData.form.divDataMain.form.staBar17.getOffsetLeft());
        	this.divData.form.divDataMain.form.taxRM_CUSTOMER.setOffsetLeft(this.divData.form.divDataMain.form.ccfCD_CTM.getOffsetLeft());
        	this.divData.form.divDataMain.form.staBar20.setOffsetRight(this.divData.form.divDataMain.form.staBar18.getOffsetRight());
        	this.divData.form.divDataMain.form.staBar21.setOffsetRight(this.divData.form.divDataMain.form.staBar18.getOffsetRight());
        	this.divData.form.divDataMain.form.staBar22.setOffsetRight(this.divData.form.divDataMain.form.staBar18.getOffsetRight());
        	this.divData.form.divDataMain.form.staBar23.setOffsetRight(this.divData.form.divDataMain.form.staBar18.getOffsetRight());
        	this.divData.form.divDataMain.form.staBar24.setOffsetRight(this.divData.form.divDataMain.form.staBar18.getOffsetRight());
        	this.divData.form.divDataMain.form.staBar19.setOffsetRight(this.divData.form.divDataMain.form.staBar20.getOffsetRight());
        	this.divData.form.divDataMain.form.imgPic.setOffsetLeft(this.divData.form.divDataMain.form.staBar20.getOffsetRight());
        };


        /*
         * 파일 업로드 서버 저장
         */
        this.fnImageView = function() {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.dsImageFile.clearData();
        	this.dsImageFile.addRow();
        	var strSzType = this.dsList.getColumn(this.dsList.rowposition, "SZ_TYPE");
        	var strSize = strSzType.substr(0, strSzType.indexOf("-"));
        	var strType = strSzType.substr(strSzType.indexOf("-")+1);

        	var key = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE") + "/" + strSize;
        	if (!this.gfnIsNull(this.gfnTrim(strType))) {
        		key += "/" + this.gfnTrim(strType);
        	}

        	if( this.dsList.getColumn(this.dsList.rowposition, "YN_IMG_CHANGE") == "N"){
        		this.dsImageFile.setColumn(0, "filepath", "/DL/SIZEINFO/" + key);

        	} else {
        		this.dsImageFile.setColumn(0, "filepath", this.filepath + key);
        	}

        	this.dsImageFile.setColumn(0, "filename", this.dsList.getColumn(this.dsList.rowposition, "PIC_BLUEPRINT"));

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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
        };
        this.loadIncludeScript("DBS_AFTERASRECEIPTTO_MANAGEMENT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
