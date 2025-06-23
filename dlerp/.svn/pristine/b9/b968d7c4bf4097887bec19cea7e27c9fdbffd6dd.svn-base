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
            this.set_titletext("해약자정보");
            this.getSetter("maxwidth").set("1200");
            this.getSetter("maxheight").set("900");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTY_CONTRACTOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">P</Col><Col id=\"DS_CODE\">개인</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">법인</Col></Row><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">개인사업자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EBILL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">전자</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">종이</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RETURN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">지급</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미지급</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRBPR_CANCEL_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">selectReceived</Col><Col id=\"SP\">DRBPR_CANCEL_RECEIVED_SELECT</Col></Row><Row><Col id=\"TARGET\">selectLaw</Col><Col id=\"SP\">DRBPR_CANCEL_LAWSUIT_SELECT</Col></Row><Row><Col id=\"TARGET\">selectLoan</Col><Col id=\"SP\">DRBPR_CANCEL_RECEIVEDSIMPLE_SELECT</Col></Row><Row><Col id=\"TARGET\">selectAppro</Col><Col id=\"SP\">DRBPR_CANCEL_APPROPRIATE_SELECT</Col></Row><Row><Col id=\"TARGET\">selectPayback</Col><Col id=\"SP\">DRFPR_PAYBACK_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRFPR_IND_RTDELAY_INSERT</Col></Row><Row><Col id=\"TARGET\">cancelRestore</Col><Col id=\"SP\">DRBPR_CANCEL_RESTORE_SHINYOUNG</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CANCEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"DS_ACNTUNIT\"/><Col id=\"NO_DONG\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_HO\"/><Col id=\"NO_UNIONMEMBER\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListReceived", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListLaw", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListLoan", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAppro", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListPayback", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staContent","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("동층호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staContent:0.0","10.0","50","24.0","15",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","30","24.0","15",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","50","24.0","15",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_CANCEL","ctxtNO_HO:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("해약번호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_CANCEL","staNO_CANCEL:0.0","10.0","50","24.0","15",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCancelInfo","0","10",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("해약정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","staCancelInfo:10","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("평형");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_SIZE","sta01:-1","staCancelInfo:10","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtNO_SIZE","sta01:4","staCancelInfo:14","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxt_SIZE1","edttxtNO_SIZE:2","staCancelInfo:10","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("면적");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtTY_TYPE","statxt_SIZE1:4","staCancelInfo:14","30","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxt_SIZE2","edttxtTY_TYPE:2","staCancelInfo:10","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("형");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","statxtNO_SIZE:-1","staCancelInfo:10","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("군/OPTION");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtTY_DISTRICT","sta02:-1","staCancelInfo:10","468","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtTY_DISTRICT","sta02:4","staCancelInfo:14","40","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfTY_DISTRICT","edttxtTY_DISTRICT:5","staCancelInfo:14","413","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFDISTRICT_CODEFIND");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("20");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("별도계약");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtYN_OPTION","sta03:-1","sta01:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtYN_OPTION","sta03:4","sta01:4","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","statxtYN_OPTION:-1","sta01:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("분양구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtTY_BUNYANG","sta04:-1","sta01:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtTY_BUNYANG","sta04:4","sta01:4","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","statxtTY_BUNYANG:-1","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtTY_CONTRACTOR","sta05:-1","sta01:-1","190","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CONTRACTOR","sta05:4","sta01:5","228","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_CONTRACTOR");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtDT_CONTRACT","sta06:-1","sta03:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtDT_CONTRACT","sta06:4","sta03:4","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","statxtDT_CONTRACT:-1","sta03:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("해약자명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtDS_CONTRACTOR","sta07:-1","sta03:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtDS_CONTRACTOR","sta07:4","sta03:4","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","statxtDS_CONTRACTOR:-1","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN","sta08:-1","sta03:-1","190","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtNO_JUMIN","sta08:4","sta03:4","179","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","0","sta06:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("☎(자택)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_TEL","sta09:-1","sta06:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtNO_TEL","sta09:4","sta06:4","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","statxtNO_TEL:-1","sta06:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_OFFICETEL","sta10:-1","sta06:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtNO_OFFICETEL","sta10:4","sta06:4","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","statxtNO_OFFICETEL:-1","sta06:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_MOBILE","sta11:-1","sta06:-1","190","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtNO_MOBILE","sta11:4","sta06:4","179","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta09:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtDS_VENDOR","sta12:-1","sta09:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtDS_VENDOR","sta12:4","sta09:4","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","statxtDS_VENDOR:-1","sta09:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_text("세금계산서발급구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtTY_EBILL","sta13:-1","sta09:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_EBILL","sta13:4","sta09:5","228","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_EBILL");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","statxtTY_EBILL:-1","sta09:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_text("E-MAIL");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtDS_EMAIL","sta14:-1","sta09:-1","190","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtDS_EMAIL","sta14:4","sta09:4","179","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","0","sta14:-1","120","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtDS_REMARK","sta15:-1","sta14:-1","766","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("edttxtDS_REMARK","sta15:5","sta12:4","754","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta16","0","sta15:9","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_text("약정분양금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_BUNYANGPLAN","sta16:-1","sta15:9","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_BUNYANGPLAN","sta16:4","sta15:13","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","statxtAM_BUNYANGPLAN:-1","sta15:9","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_text("수납분양금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_BUNYANGGET","sta17:-1","sta15:9","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_BUNYANGGET","sta17:4","sta15:13","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","statxtAM_BUNYANGGET:-1","sta15:9","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_text("예수금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_KASU","sta18:-1","sta15:9","190","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_KASU","sta18:4","sta15:13","179","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","0","sta16:9","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_text("해약일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtDT_CANCEL","sta19:-1","sta16:9","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtDT_CANCEL","sta19:4","sta16:13","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta20","statxtAM_BUNYANGPLAN:-1","sta16:9","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_text("해약사유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtDS_CANCEL","sta20:-1","sta16:9","468","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtDS_CANCEL","sta20:4","sta16:13","457","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21","0","sta19:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("75");
            obj.set_text("지급여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtTY_RETURN","sta21:-1","sta19:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_RETURN","sta21:4","sta19:5","228","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("77");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_RETURN");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","statxtAM_BUNYANGPLAN:-1","sta19:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("78");
            obj.set_text("지급일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtDT_RETURN","sta22:-1","sta19:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtDT_RETURN","sta22:4","sta19:4","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("80");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23","statxtAM_BUNYANGGET:-1","sta19:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("81");
            obj.set_text("위약금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_FORFEIT","sta23:-1","sta19:-1","190","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_FORFEIT","sta23:4","sta19:4","166","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("83");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxt_WON","edttxtAM_FORFEIT:2","sta19:-1","15","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("84");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta24","0","sta21:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("85");
            obj.set_text("지급이자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_INTEREST","sta24:-1","sta21:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_INTEREST","sta24:4","sta21:4","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("87");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxt_WON2","edttxtAM_INTEREST:2","sta21:-1","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("88");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta25","statxtAM_BUNYANGPLAN:-1","sta21:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("89");
            obj.set_text("대위변제원금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_OUTBREAKDELAY","sta25:-1","sta21:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_OUTBREAKDELAY","sta25:4","sta21:4","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("91");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxt_WON3","edttxtAM_OUTBREAKDELAY:2","sta21:-1","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("92");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta26","statxtAM_BUNYANGGET:-1","sta21:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("93");
            obj.set_text("대위변제상환/이자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_LOANINTEREST","sta26:-1","sta21:-1","190","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_LOANINTEREST","sta26:4","sta21:4","166","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("95");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxt_WON4","edttxtAM_LOANINTEREST:2","sta21:-1","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("96");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta27","0","sta24:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("97");
            obj.set_text("환불금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_PAYMENT","sta27:-1","sta24:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_PAYMENT","sta27:4","sta24:4","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("99");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_format("###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxt_WON5","edttxtAM_PAYMENT:2","sta24:-1","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("100");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta28","statxtAM_BUNYANGPLAN:-1","sta24:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("101");
            obj.set_text("환불은행/계좌(개인)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtBANK_CANCEL","sta28:-1","sta24:-1","468","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtCD_BANK_CANCEL","sta28:4","sta24:4","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("103");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtBANK","edttxtCD_BANK_CANCEL:5","sta24:-1","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("104");
            obj.set_text("은행");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtDS_BANK_CANCEL","statxtBANK:10","sta24:4","243","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("105");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtBLANK","0","sta27:-1","279","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta29","statxtBLANK:-1","sta27:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("107");
            obj.set_text("환불은행(은행)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtGUJA_CANCEL","sta29:-1","sta27:-1","468","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtCD_GUJA_CANCEL","sta29:4","sta27:4","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("109");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtDS_GUJA_CANCEL","edttxtCD_GUJA_CANCEL:10","sta27:4","278","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("110");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Tab("tabData","0","statxtBLANK:15",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("111");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("page1",this.divData.form.tabData);
            obj.set_text("약정/수납내역");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGridReceived","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.page1.form);
            obj.set_taborder("6");
            obj._setContents("");
            this.divData.form.tabData.page1.addChild(obj.name, obj);

            obj = new Tabpage("page2",this.divData.form.tabData);
            obj.set_text("소송내역");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGridLaw","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.page2.form);
            obj.set_taborder("6");
            obj._setContents("");
            this.divData.form.tabData.page2.addChild(obj.name, obj);

            obj = new Tabpage("page3",this.divData.form.tabData);
            obj.set_text("융자내역");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGridLoan","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.page3.form);
            obj.set_taborder("6");
            obj._setContents("");
            this.divData.form.tabData.page3.addChild(obj.name, obj);

            obj = new Tabpage("page4",this.divData.form.tabData);
            obj.set_text("예수금");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGridAppro","0","0","30%",null,null,"0",null,null,null,null,this.divData.form.tabData.page4.form);
            obj.set_taborder("6");
            obj._setContents("");
            this.divData.form.tabData.page4.addChild(obj.name, obj);

            obj = new Grid("objGridPayback","objGridAppro:15","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.page4.form);
            obj.set_taborder("6");
            obj._setContents("");
            this.divData.form.tabData.page4.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtNO_CANCEL","value","dsSearch","NO_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edttxtNO_SIZE","value","dsList","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edttxtTY_TYPE","value","dsList","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edttxtTY_DISTRICT","value","dsList","TY_DISTRICT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.edttxtYN_OPTION","value","dsList","YN_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.edttxtTY_BUNYANG","value","dsList","TY_BUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.edttxtDT_CONTRACT","value","dsList","DT_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.edttxtDS_CONTRACTOR","value","dsList","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.edttxtNO_JUMIN","value","dsList","NO_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.edttxtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.edttxtNO_OFFICETEL","value","dsList","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.edttxtNO_MOBILE","value","dsList","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.edttxtDS_VENDOR","value","dsList","DS_VENDOR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.edttxtDS_EMAIL","value","dsList","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.edttxtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.edttxtAM_BUNYANGPLAN","value","dsList","AM_BUNYANGPLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.edttxtAM_BUNYANGGET","value","dsList","AM_BUNYANGGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.edttxtAM_KASU","value","dsList","AM_KASU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.edttxtDT_CANCEL","value","dsList","DT_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.edttxtDS_CANCEL","value","dsList","DS_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.edttxtDT_RETURN","value","dsList","DT_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.edttxtAM_FORFEIT","value","dsList","AM_FORFEIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.edttxtAM_INTEREST","value","dsList","AM_INTEREST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.edttxtAM_OUTBREAKDELAY","value","dsList","AM_OUTBREAKDELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.edttxtAM_LOANINTEREST","value","dsList","AM_LOANINTEREST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.edttxtAM_PAYMENT","value","dsList","AM_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.edttxtCD_BANK_CANCEL","value","dsList","CD_BANK_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.edttxtDS_BANK_CANCEL","value","dsList","DS_BANK_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.edttxtCD_GUJA_CANCEL","value","dsList","CD_GUJA_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.edttxtDS_GUJA_CANCEL","value","dsList","DS_GUJA_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.rdoTY_CONTRACTOR","value","dsList","TY_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.rdoTY_EBILL","value","dsList","YN_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.rdoTY_RETURN","value","dsList","YN_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.ccfTY_DISTRICT.form.CDTextBox","value","dsList","RT_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.ccfTY_DISTRICT.form.DSTextBox","value","dsList","DS_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRB_CANCELDETAIL.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_ACNTUNIT"   , this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsSearch.setColumn(0, "DS_ACNTUNIT"   , this.getOwnerFrame().DS_ACNTUNIT);
        	this.dsSearch.setColumn(0, "NO_DONG"       , this.getOwnerFrame().DONG);
        	this.dsSearch.setColumn(0, "NO_FLOOR"      , this.getOwnerFrame().FLOOR);
        	this.dsSearch.setColumn(0, "NO_HO"         , this.getOwnerFrame().HO);
        	this.dsSearch.setColumn(0, "NO_UNIONMEMBER", this.getOwnerFrame().NO_UNIONMEMBER);
        	this.dsSearch.setColumn(0, "NO_CANCEL"     , this.getOwnerFrame().CANCEL);

        	this.ccfCD_ACNTUNIT.set_enable(false);
        	this.ctxtNO_DONG.set_readonly(true);
        	this.ctxtNO_FLOOR.set_readonly(true);
        	this.ctxtNO_HO.set_readonly(true);
        	this.ctxtNO_DONG.set_readonly(true);
        	this.ctxtNO_CANCEL.set_readonly(true);
        	this.ccfTY_DISTRICT.set_enable(false);
        	this.rdoTY_CONTRACTOR.set_enable(false);
        	this.rdoTY_EBILL.set_enable(false);
        	this.rdoTY_RETURN.set_enable(false);

        	this.fnSelect();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnRestore       = this.gfnFormButtonAdd("Restore"      , "fnButtonClick");	// 해약자복원
        	this.btnCancelCounsel = this.gfnFormButtonAdd("CancelCounsel", "fnButtonClick"); 	// 상담일지
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_ACNTUNIT 	 = this.divSearch.form.ccfCD_ACNTUNIT;	// 사업지코드
        	this.ctxtNO_DONG         = this.divSearch.form.ctxtNO_DONG;
        	this.ctxtNO_FLOOR        = this.divSearch.form.ctxtNO_FLOOR;
        	this.ctxtNO_HO           = this.divSearch.form.ctxtNO_HO;
        	this.ctxtNO_DONG         = this.divSearch.form.ctxtNO_DONG;
        	this.ctxtNO_CANCEL       = this.divSearch.form.ctxtNO_CANCEL;

        	this.ccfTY_DISTRICT      = this.divData.form.ccfTY_DISTRICT;
        	this.rdoTY_CONTRACTOR    = this.divData.form.rdoTY_CONTRACTOR;
        	this.rdoTY_EBILL         = this.divData.form.rdoTY_EBILL;
        	this.rdoTY_RETURN        = this.divData.form.rdoTY_RETURN;

        	this.dxGridReceived      = this.divData.form.tabData.page1.form.objGridReceived;
        	this.dxGridLaw           = this.divData.form.tabData.page2.form.objGridLaw;
        	this.dxGridLoan          = this.divData.form.tabData.page3.form.objGridLoan;
        	this.dxGridAppro         = this.divData.form.tabData.page4.form.objGridAppro;
        	this.dxGridPayback       = this.divData.form.tabData.page4.form.objGridPayback;

        	this.dxGridAppro.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGridReceived, this.dsListReceived, "DR", "DRB_CANCELDETAIL_RECEIVED");
        	this.gfnGridInit(this.dxGridLaw     , this.dsListLaw     , "DR", "DRB_CANCELDETAIL_LAW");
        	this.gfnGridInit(this.dxGridLoan    , this.dsListLoan    , "DR", "DRB_CANCELDETAIL_LOAN");
        	this.gfnGridInit(this.dxGridAppro   , this.dsListAppro   , "DR", "DRB_CANCELDETAIL_APPRO");
        	this.gfnGridInit(this.dxGridPayback , this.dsListPayback , "DR", "DRB_CANCELDETAIL_PAYBACK");

        	this.dxGridAppro.set_selecttype("cell");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT"     		, "string");
        	this.dsSelect.addColumn("TY_GUBUN"        		, "string");
        	this.dsSelect.addColumn("NO_CHASU"        		, "string");
        	this.dsSelect.addColumn("NO_DONG"         		, "string");
        	this.dsSelect.addColumn("NO_FLOOR"        		, "string");
        	this.dsSelect.addColumn("NO_HO"           		, "string");
        	this.dsSelect.addColumn("NO_UNIONMEMBER"		, "string");
        	this.dsSelect.addColumn("NO_CANCEL"				, "string");

        	this.dsSelectReceived = new Dataset();
        	this.dsSelectReceived.addColumn("CD_ACNTUNIT"     , "string");
        	this.dsSelectReceived.addColumn("TY_GUBUN"        , "string");
        	this.dsSelectReceived.addColumn("NO_CHASU"        , "string");
        	this.dsSelectReceived.addColumn("NO_DONG"         , "string");
        	this.dsSelectReceived.addColumn("NO_FLOOR"        , "string");
        	this.dsSelectReceived.addColumn("NO_HO"           , "string");
        	this.dsSelectReceived.addColumn("NO_UNIONMEMBER"  , "string");
        	this.dsSelectReceived.addColumn("NO_CANCEL"       , "string");

        	this.dsSelectLaw = new Dataset();
        	this.dsSelectLaw.addColumn("CD_ACNTUNIT"     , "string");
        	this.dsSelectLaw.addColumn("TY_GUBUN"        , "string");
        	this.dsSelectLaw.addColumn("NO_CHASU"        , "string");
        	this.dsSelectLaw.addColumn("NO_DONG"         , "string");
        	this.dsSelectLaw.addColumn("NO_FLOOR"        , "string");
        	this.dsSelectLaw.addColumn("NO_HO"           , "string");
        	this.dsSelectLaw.addColumn("NO_UNIONMEMBER"  , "string");
        	this.dsSelectLaw.addColumn("NO_CANCEL"       , "string");

        	this.dsSelectLoan = new Dataset();
        	this.dsSelectLoan.addColumn("CD_ACNTUNIT"     , "string");
        	this.dsSelectLoan.addColumn("TY_GUBUN"        , "string");
        	this.dsSelectLoan.addColumn("NO_CHASU"        , "string");
        	this.dsSelectLoan.addColumn("NO_DONG"         , "string");
        	this.dsSelectLoan.addColumn("NO_FLOOR"        , "string");
        	this.dsSelectLoan.addColumn("NO_HO"           , "string");
        	this.dsSelectLoan.addColumn("NO_UNIONMEMBER"  , "string");
        	this.dsSelectLoan.addColumn("NO_CANCEL"       , "string");

        	this.dsSelectAppro = new Dataset();
        	this.dsSelectAppro.addColumn("CD_ACNTUNIT"     , "string");
        	this.dsSelectAppro.addColumn("TY_GUBUN"        , "string");
        	this.dsSelectAppro.addColumn("NO_CHASU"        , "string");
        	this.dsSelectAppro.addColumn("NO_DONG"         , "string");
        	this.dsSelectAppro.addColumn("NO_FLOOR"        , "string");
        	this.dsSelectAppro.addColumn("NO_HO"           , "string");
        	this.dsSelectAppro.addColumn("NO_UNIONMEMBER"  , "string");
        	this.dsSelectAppro.addColumn("NO_CANCEL"       , "string");

        	this.dsSelectPayback = new Dataset();
        	this.dsSelectPayback.addColumn("CD_ACNTUNIT"    , "string");
        	this.dsSelectPayback.addColumn("TY_GUBUN"       , "string");
        	this.dsSelectPayback.addColumn("NO_CHASU"       , "string");
        	this.dsSelectPayback.addColumn("NO_DONG"        , "string");
        	this.dsSelectPayback.addColumn("NO_FLOOR"       , "string");
        	this.dsSelectPayback.addColumn("NO_HO"          , "string");
        	this.dsSelectPayback.addColumn("NO_UNIONMEMBER" , "string");
        	this.dsSelectPayback.addColumn("NO_APPRO"       , "string");
        	this.dsSelectPayback.addColumn("NO_CONTRACT"    , "string");

        	this.dsCancelRestore = new Dataset();
        	this.dsCancelRestore.addColumn("CD_ACNTUNIT"    , "string");
        	this.dsCancelRestore.addColumn("TY_GUBUN"       , "string");
        	this.dsCancelRestore.addColumn("NO_CHASU"       , "string");
        	this.dsCancelRestore.addColumn("NO_DONG"        , "string");
        	this.dsCancelRestore.addColumn("NO_FLOOR"       , "string");
        	this.dsCancelRestore.addColumn("NO_HO"          , "string");
        	this.dsCancelRestore.addColumn("NO_UNIONMEMBER" , "string");
        	this.dsCancelRestore.addColumn("NO_CANCEL"      , "string");
        	this.dsCancelRestore.addColumn("CD_SLIP"        , "string");
        	this.dsCancelRestore.addColumn("ID_INSERT"      , "string");

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

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG"       , this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR"      , this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO"         , this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelect.setColumn(0, "NO_CANCEL"     , this.dsSearch.getColumn(0, "NO_CANCEL"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnSelectReceived = function() {

        	this.dsSelectReceived.clearData();
        	this.dsSelectReceived.addRow();

        	this.dsSelectReceived.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectReceived.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectReceived.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectReceived.setColumn(0, "NO_DONG"       , this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelectReceived.setColumn(0, "NO_FLOOR"      , this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelectReceived.setColumn(0, "NO_HO"         , this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelectReceived.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelectReceived.setColumn(0, "NO_CANCEL"     , this.dsSearch.getColumn(0, "NO_CANCEL"));

        	var strSvcId    = "selectReceived";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectReceived=dsSelectReceived";
        	var outData     = "dsListReceived=selectReceived0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnSelectLaw = function() {

        	this.dsSelectLaw.clearData();
        	this.dsSelectLaw.addRow();

        	this.dsSelectLaw.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectLaw.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectLaw.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectLaw.setColumn(0, "NO_DONG"       , this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelectLaw.setColumn(0, "NO_FLOOR"      , this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelectLaw.setColumn(0, "NO_HO"         , this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelectLaw.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelectLaw.setColumn(0, "NO_CANCEL"     , this.dsSearch.getColumn(0, "NO_CANCEL"));

        	var strSvcId    = "selectLaw";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectLaw=dsSelectLaw";
        	var outData     = "dsListLaw=selectLaw0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnSelectLoan = function() {

        	this.dsSelectLoan.clearData();
        	this.dsSelectLoan.addRow();

        	this.dsSelectLoan.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectLoan.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectLoan.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectLoan.setColumn(0, "NO_DONG"       , this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelectLoan.setColumn(0, "NO_FLOOR"      , this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelectLoan.setColumn(0, "NO_HO"         , this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelectLoan.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelectLaw.setColumn(0, "NO_CANCEL"     , this.dsSearch.getColumn(0, "NO_CANCEL"));

        	var strSvcId    = "selectLoan";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectLoan=dsSelectLoan";
        	var outData     = "dsListLoan=selectLoan0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnSelectAppro = function() {

        	this.dsSelectAppro.clearData();
        	this.dsSelectAppro.addRow();

        	this.dsSelectAppro.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectAppro.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectAppro.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectAppro.setColumn(0, "NO_DONG"       , this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelectAppro.setColumn(0, "NO_FLOOR"      , this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelectAppro.setColumn(0, "NO_HO"         , this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelectAppro.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelectAppro.setColumn(0, "NO_CANCEL"     , this.dsSearch.getColumn(0, "NO_CANCEL"));

        	var strSvcId    = "selectAppro";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectAppro=dsSelectAppro";
        	var outData     = "dsListAppro=selectAppro0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }


        this.fnSelectPayback = function() {

        	this.dsSelectPayback.clearData();
        	this.dsSelectPayback.addRow();

        	this.dsSelectPayback.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectPayback.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectPayback.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectPayback.setColumn(0, "NO_DONG"       , this.dsList.getColumn(this.dsList.rowposition, "NO_DONG"));
        	this.dsSelectPayback.setColumn(0, "NO_FLOOR"      , this.dsList.getColumn(this.dsList.rowposition, "NO_FLOOR"));
        	this.dsSelectPayback.setColumn(0, "NO_HO"         , this.dsList.getColumn(this.dsList.rowposition, "NO_HO"));
        	this.dsSelectPayback.setColumn(0, "NO_UNIONMEMBER", this.dsList.getColumn(this.dsList.rowposition, "NO_UNIONMEMBER"));
        	this.dsSelectPayback.setColumn(0, "NO_APPRO"      , this.dsListAppropriate.getColumn(this.dsListAppropriate.rowposition, "NO_APPRO"));
        	this.dsSelectPayback.setColumn(0, "NO_CONTRACT"   , this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_CONTRACT"));

        	var strSvcId    = "selectPayback";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectPayback=dsSelectPayback";
        	var outData     = "dsListPayback=selectPayback0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {};

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {};

        /*
         *	저장 버튼
         */
        this.fnSave = function() {};


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {};

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {};

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnCancelRestore = function() {

        	this.dsCancelRestore.clearData();
        	this.dsCancelRestore.addRow();

        	this.dsCancelRestore.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsCancelRestore.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsCancelRestore.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsCancelRestore.setColumn(0, "NO_DONG"       , this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsCancelRestore.setColumn(0, "NO_FLOOR"      , this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsCancelRestore.setColumn(0, "NO_HO"         , this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsCancelRestore.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsCancelRestore.setColumn(0, "NO_CANCEL"     , this.dsSearch.getColumn(0, "NO_CANCEL"));
        	this.dsCancelRestore.setColumn(0, "CD_SLIP"       , this.dsList.getColumn(0, "CD_SLIP"));
        	this.dsCancelRestore.setColumn(0, "ID_INSERT"     , this.AuthClient.ID_USER);

        	var strSvcId    = "cancelRestore";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "cancelRestore=dsCancelRestore";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지코드를 입력하지 않았습니다.");
        		return false;
        	}

        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		trace(this.dsList.saveXML());

        		if(this.dsList.rowcount > 0) {
        			this.fnSelectReceived();	// 약정/수납내역
        			this.fnSelectLaw();			// 소송내역
        			this.fnSelectLoan();		// 융자내역
        			this.fnSelectAppro();		// 예수금
        		}
        	}
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 사업지코드
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP" , this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}

        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		if(obj.name == "objGridAppro") this.fnSelectPayback();

        		obj.oldrow = -1;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        	}
        };

        this.fnButtonClick = function(obj,e) {

        	switch(obj.name) {
        		case "btnExt_Restore":										// 해약자 복원.

        				var strConfirmMsg = "";

        				if(!this.gfnIsNull(this.dsList.getColumn(0, "CD_SLIP"))) {
        					strConfirmMsg = "전표번호:" + this.dsList.getColumn(0, "CD_SLIP") + "를 취소한 후 해약자를 복원합니다." + "\r\n" + "계속 진행하시겠습니까";
        				} else {
        					strConfirmMsg = "해약자를 복원하시겠습니까";
        				}

        				this.gfnConfirm(strConfirmMsg, function(strID, val) {
        					if (val) this.fnCancelRestore();
        				});

        			break;

        		case "btnExt_CancelCounsel":										// 상담일지.

        				var param = {};

        				param.CD_ACNTUNIT    = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        				param.DS_ACNTUNIT    = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        				param.NO_DONG        = this.dsSearch.getColumn(0, "NO_DONG");
        				param.NO_FLOOR       = this.dsSearch.getColumn(0, "NO_FLOOR");
        				param.NO_HO          = this.dsSearch.getColumn(0, "NO_HO");
        				param.NO_UNIONMEMBER = "";

        				this.gfnFormOpen("DRB", "DRB_CANCELCOUNSEL", "", param);

        			break;
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRB_CANCELDETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
