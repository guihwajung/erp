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
                this._setFormPosition(1280,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"YN_E_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SEMOK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GONGDONG\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RMGONGDONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GONGHASU\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_AGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM_DOKUB\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO_DOKUB\" type=\"STRING\" size=\"256\"/><Column id=\"FR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"TO_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"RT_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INSURANCE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CONDITION_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONDITION_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTPRO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTVAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LABOR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INJISE_ORG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INJISE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_PREPAY1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYPRO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PREPAYVAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PREPAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_PREPAY2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"RT_CONTGUARANTEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTGUARANTEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_GUARANTEEGIGAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GISUNGBUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GISUNGMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GISUNGETC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAY_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GISUNG5\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ASGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"RT_ASGUARANTEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ASGUARANTEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ASFROMTO_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ASFROMTO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"RT_DELAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RM_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROFIT_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"RM_REMARK_GW\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CLEARING\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PARTNERSIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCCPR_CONTRACT_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCCPR_CONTRACT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCCPR_CONTRACT_DELETE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_CODE_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DCCPR_CONTAGREE_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_GONGHASU", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">공동</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">단일</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_CONT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTPRO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CONTVAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LABOR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"TO_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_PREPAY1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYPRO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PREPAYVAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PREPAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_PREPAY2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_E_CONT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">전자계약</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">서면계약</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_PARTNERSIGN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">예</Col><Col id=\"CD_CODE\">Y</Col></Row><Row><Col id=\"DS_CODE\">아니오</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_CONTMETHOD", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_INSURANCE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_ASFROMTO_COMMENT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">과세</Col><Col id=\"DS_CODE\">과세</Col></Row><Row><Col id=\"CD_CODE\">면세</Col><Col id=\"DS_CODE\">면세</Col></Row><Row><Col id=\"CD_CODE\">공존</Col><Col id=\"DS_CODE\">공존</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staNO_CONT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_CONT","staNO_CONT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFCONTRACT_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfSN_SEQ","ccfNO_CONT:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFSNSEQ_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle1","5","0",null,"22","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("계약정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_STATUS","5","staTitle1:5","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTMETHOD","5","staTY_STATUS:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("계약방법");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","5","staDS_CONTMETHOD:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("현장코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_CONT","5","staCD_SITE:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("계약차수구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_VAT","5","staTY_CONT:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("과세율");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ORDER","5","staRT_VAT:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("발주자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_STATUS","staTY_STATUS:-1","staTitle1:5","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_CONTMETHOD","staDS_CONTMETHOD:-1","staBgTY_STATUS:-1","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_SITE","staCD_SITE:-1","staBgDS_CONTMETHOD:-1","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_CONT","staTY_CONT:-1","staBgCD_SITE:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgRT_VAT","staRT_VAT:-1","staBgTY_CONT:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_COSTCLASS","staBgTY_CONT:-1","staBgCD_SITE:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_text("공사종류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_COSTCLASS","staCD_COSTCLASS:-1","staBgCD_SITE:-1","222","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_INSURANCE","staBgRT_VAT:-1","staTY_CONT:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_text("납부주체");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_INSURANCE","staTY_INSURANCE:-1","staTY_CONT:-1","222","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_ORDER","staDS_ORDER:-1","staBgTY_INSURANCE:-1","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_E_CONT","staBgTY_STATUS:-1","staTitle1:5","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_text("계약구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgYN_E_CONT","staYN_E_CONT:-1","staTitle1:5","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_GONGDONG","staBgTY_STATUS:-1","staYN_E_CONT:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_text("공동도급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_GONGDONG","staYN_E_CONT:-1","staBgYN_E_CONT:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_GONGHASU","staBgDS_GONGDONG:-1","staYN_E_CONT:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_text("공동하수급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgYN_GONGHASU","staYN_GONGHASU:-1","staBgYN_E_CONT:-1","142","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","staBgTY_STATUS:-1","staYN_GONGHASU:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_text("업체명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_VENDOR","staDS_VENDOR:-1","staBgYN_GONGHASU:-1","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_AGREE","staBgTY_STATUS:-1","staDS_VENDOR:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_text("계약일자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_AGREE","staDT_AGREE:-1","staBgDS_VENDOR:-1","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_TAX","staBgTY_STATUS:-1","staDT_AGREE:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_text("과세구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_TAX","staTY_TAX:-1","staBgDT_AGREE:-1","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_PARTNERSIGN","staBgTY_STATUS:-1","staTY_TAX:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_text("공동도급사서명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgYN_PARTNERSIGN","staYN_PARTNERSIGN:-1","staBgTY_TAX:-1","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSpace00","5","staDS_ORDER:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBEFORE","staSpace00:0","staDS_ORDER:-1","460","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            obj.set_text("변경전");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAFTER","staBEFORE:0","staDS_ORDER:-1","457","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("75");
            obj.set_text("변경후");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSpace01","5","staSpace00:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("76");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PRO_BEFORE","staSpace01:0","staBEFORE:-1","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("77");
            obj.set_text("공급가액(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_VAT_BEFORE","staAM_PRO_BEFORE:0","staBEFORE:-1","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("78");
            obj.set_text("부가세액(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_BEFORE","staAM_VAT_BEFORE:0","staBEFORE:-1","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("79");
            obj.set_text("합계금액(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PRO_AFTER","staAM_BEFORE:0","staAFTER:-1","153","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("80");
            obj.set_text("공급가액(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_VAT_AFTER","staAM_PRO_AFTER:0","staAFTER:-1","153","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("81");
            obj.set_text("부가세액(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_AFTER","staAM_VAT_AFTER:0","staAFTER:-1","151","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("82");
            obj.set_text("합계금액(원)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SILHENG","5","staSpace01:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("83");
            obj.set_text("실행금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_SILHENG","staAM_SILHENG:-1","staAM_PRO_BEFORE:-1","918","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTPRO","5","staAM_SILHENG:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("85");
            obj.set_text("계약금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_CONTPRO","staAM_CONTPRO:-1","staBgAM_SILHENG:-1","918","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_LABOR","5","staAM_CONTPRO:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("87");
            obj.set_text("노무비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_LABOR","staAM_LABOR:-1","staBgAM_CONTPRO:-1","918","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PREPAY","5","staAM_LABOR:-1","120","88",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("89");
            obj.set_text("선급금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_PREPAY00","staAM_PREPAY:-1","staBgAM_LABOR:-1","918","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_PREPAY01","staAM_PREPAY:-1","staBgAM_PREPAY00:-1","918","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_PREPAY02","staAM_PREPAY:-1","staBgAM_PREPAY01:-1","918","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_WORK_BEFORE","5","staAM_PREPAY:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("93");
            obj.set_text("공사기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_WORK_BEFORE","staDT_WORK_BEFORE:-1","staBgAM_PREPAY02:-1","461","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_WORK_AFTER","staBgDT_WORK_BEFORE:-1","staBgAM_PREPAY02:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("95");
            obj.set_text("(변경)공사기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_WORK_AFTER","staDT_WORK_AFTER:-1","staBgAM_PREPAY02:-1","339","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_PAYMENT","5","staDT_WORK_BEFORE:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("97");
            obj.set_text("지급방법");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgRM_PAYMENT","staRM_PAYMENT:-1","staBgDT_WORK_BEFORE:-1","461","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PREPAY","staBgRM_PAYMENT:-1","staDT_WORK_AFTER:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("99");
            obj.set_text("선급보증기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_PREPAY","staDT_PREPAY:-1","staBgDT_WORK_AFTER:-1","339","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_GISUNGBUBUN","5","staRM_PAYMENT:-1","120","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("101");
            obj.set_text("기성부분금");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_GISUNGBUBUN","staDS_GISUNGBUBUN:-1","staBgRM_PAYMENT:-1","918","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_DOKUB","5","staDS_GISUNGBUBUN:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("103");
            obj.set_text("도급기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_DOKUB","staDT_DOKUB:-1","staBgDS_GISUNGBUBUN:-1","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CONDITION_DELIVERY","staBgDT_DOKUB:-1","staDS_GISUNGBUBUN:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("105");
            obj.set_text("인도조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_CONDITION_DELIVERY","staCD_CONDITION_DELIVERY:-1","staBgDS_GISUNGBUBUN:-1","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_CONTGUARANTEE","5","staDT_DOKUB:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("107");
            obj.set_text("계약보증금율");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgRT_CONTGUARANTEE","staRT_CONTGUARANTEE:-1","staBgDT_DOKUB:-1","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_PAYMENT","staBgRT_CONTGUARANTEE:-1","staCD_CONDITION_DELIVERY:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("109");
            obj.set_text("대금지불조건");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_PAYMENT","staCD_PAYMENT:-1","staBgCD_CONDITION_DELIVERY:-1","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_ASGUARANTEE","5","staRT_CONTGUARANTEE:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("111");
            obj.set_text("하자보증금율");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgRT_ASGUARANTEE","staRT_ASGUARANTEE:-1","staBgRT_CONTGUARANTEE:-1","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_GUARANTEEGIGAN","staBgRT_ASGUARANTEE:-1","staRT_CONTGUARANTEE:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("113");
            obj.set_text("계약보증기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_GUARANTEEGIGAN","staDS_GUARANTEEGIGAN:-1","staBgRT_CONTGUARANTEE:-1","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_DELAY","5","staRT_ASGUARANTEE:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("115");
            obj.set_text("지체상금율");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgRT_DELAY","staRT_DELAY:-1","staBgRT_ASGUARANTEE:-1","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_ASFROMTO","staBgRT_DELAY:-1","staDS_GUARANTEEGIGAN:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("117");
            obj.set_text("하자보증기간");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_ASFROMTO","staDT_ASFROMTO:-1","staBgDS_GUARANTEEGIGAN:-1","400","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME","5","staRT_DELAY:-1","120","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("119");
            obj.set_text("계약담당자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_HNAME","staDS_HNAME:-1","staBgRT_DELAY:-1","400","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CHANGEREASON","staBgDS_HNAME:-1","staDT_ASFROMTO:-1","120","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("121");
            obj.set_text("변경사유");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_CHANGEREASON","staDS_CHANGEREASON:-1","staBgDT_ASFROMTO:-1","400","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_STATUS","staTY_STATUS:5","staTitle1:10","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("123");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_STATUS","ctxtTY_STATUS:3","staTitle1:10","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("126");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboDS_CONTMETHOD","staDS_CONTMETHOD:5","ctxtTY_STATUS:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_innerdataset("dsDS_CONTMETHOD");
            obj.set_readonly("true");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACCOUNT","ccboDS_CONTMETHOD:5","ctxtTY_STATUS:9","240","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DSX_CFSITETYPE_CODE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("27");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_GOODS","ccfCD_ACCOUNT:5","ctxtTY_STATUS:9","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("물품계약서");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_SITE","staCD_SITE:5","ccboDS_CONTMETHOD:9","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_SITE","ctxtCD_SITE:5","ccboDS_CONTMETHOD:9","283","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfTY_CONT","staTY_CONT:5","ctxtCD_SITE:9","90","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("");
            obj.getSetter("CDTextWidth").set("65");
            obj.set_taborder("23");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_COSTCLASS","staCD_COSTCLASS:5","ctxtCD_SITE:9","25","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("125");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_COSTCLASS","ctxtCD_COSTCLASS:3","ctxtCD_SITE:9","40","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("127");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_LICCOST","ctxtDS_COSTCLASS:3","ctxtCD_SITE:9","140","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("");
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("22");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_VAT","staRT_VAT:5","ccfTY_CONT:9","66","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("124");
            obj.set_value("");
            obj.set_format("#,0.0000");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_VAT_PERCENT","ctxtRT_VAT:5","staTY_CONT:5","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("%");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_INSURANCE","staTY_INSURANCE:5","ccfTY_CONT:9","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsTY_INSURANCE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_INSURANCE","ccboTY_INSURANCE:5","staTY_CONT:5","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_text("(고용보험)");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ORDER","staDS_ORDER:5","ctxtRT_VAT:8","388","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("128");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboYN_E_CONT","staYN_E_CONT:5","staTitle1:10","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsYN_E_CONT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btn00","ccboYN_E_CONT:3","staTitle1:10","166","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("133");
            obj.set_text("전자계약가능여부");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_RMGONGDONG","btn00:5","staTitle1:10","138","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("공동사서명 제외여부");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_GONGDONG","staDS_GONGDONG:5","ccboYN_E_CONT:9","128","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("129");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoYN_GONGHASU","staYN_GONGHASU:5","ccboYN_E_CONT:9","124","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_innerdataset("dsYN_GONGHASU");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_VENDOR","staDS_VENDOR:5","ctxtDS_GONGDONG:9","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("134");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR","ctxtCD_VENDOR:5","ctxtDS_GONGDONG:9","304","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("135");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_AGREE","staDT_AGREE:5","ctxtCD_VENDOR:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoTY_TAX","staTY_TAX:5","ctclDT_AGREE:9","389","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsTY_TAX");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoYN_PARTNERSIGN","staYN_PARTNERSIGN:5","crdoTY_TAX:9","194","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("136");
            obj.set_innerdataset("dsYN_PARTNERSIGN");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btn01","crdoYN_PARTNERSIGN:5","crdoTY_TAX:9","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("137");
            obj.set_text("공동전자서명불가");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SILHENG_BEFORE","staAM_SILHENG:5","staAM_PRO_BEFORE:4","145","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("138");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONTPRO_BEFORE","staAM_CONTPRO:5","ctxtAM_SILHENG_BEFORE:9","145","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("140");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LABOR_BEFORE","staAM_LABOR:5","ctxtAM_CONTPRO_BEFORE:9","145","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("141");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONTVAT_BEFORE","ctxtAM_CONTPRO_BEFORE:10","ctxtAM_SILHENG_BEFORE:9","145","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("139");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONT_BEFORE","ctxtAM_CONTVAT_BEFORE:10","ctxtAM_SILHENG_BEFORE:9","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("142");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SILHENG_AFTER","staAM_BEFORE:5","staAM_PRO_AFTER:4","145","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("143");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONTPRO_AFTER","staAM_BEFORE:5","ctxtAM_SILHENG_AFTER:9","145","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("144");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LABOR_AFTER","staAM_BEFORE:5","ctxtAM_CONTPRO_AFTER:9","145","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("145");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONTVAT_AFTER","ctxtAM_CONTPRO_AFTER:7","ctxtAM_SILHENG_AFTER:9","145","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("146");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONT_AFTER","ctxtAM_CONTVAT_AFTER:7","ctxtAM_SILHENG_AFTER:9","143","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("154");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PREPAY00_BEFORE","staAM_PREPAY:2","staAM_LABOR:5","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_text("(1) 계약체결 후");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_PREPAY1_BEFORE","staAM_PREPAY00_BEFORE:5","ctxtAM_LABOR_BEFORE:9","143","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("153");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PREPAY01_BEFORE","ctxtDS_PREPAY1_BEFORE:5","staAM_LABOR:5","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_text("일 이내에 선급금");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PREPAY00_AFTER","staBEFORE:2","staAM_LABOR:5","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_text("(1) 계약체결 후");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_PREPAY1_AFTER","staAM_PREPAY00_AFTER:5","ctxtAM_LABOR_BEFORE:9","143","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("152");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PREPAY01_AFTER","ctxtDS_PREPAY1_AFTER:5","staAM_LABOR:5","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_text("일 이내에 선급금");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_PREPAYPRO_BEFORE","staAM_PREPAY:5","ctxtDS_PREPAY1_BEFORE:9","145","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("151");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_PREPAYVAT_BEFORE","ctxtAM_PREPAYPRO_BEFORE:10","ctxtDS_PREPAY1_BEFORE:9","145","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("155");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_PREPAY_BEFORE","ctxtAM_PREPAYVAT_BEFORE:10","ctxtDS_PREPAY1_BEFORE:9","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("149");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_PREPAYPRO_AFTER","staAM_BEFORE:5","ctxtDS_PREPAY1_AFTER:9","145","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("157");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_PREPAYVAT_AFTER","ctxtAM_PREPAYPRO_AFTER:7","ctxtDS_PREPAY1_AFTER:9","145","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("160");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_PREPAY_AFTER","ctxtAM_PREPAYVAT_AFTER:7","ctxtDS_PREPAY1_AFTER:9","143","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("164");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PREPAY02_BEFORE","staAM_PREPAY:2","ctxtAM_PREPAYPRO_BEFORE:5","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_text("(1)");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_PREPAY2_BEFORE","staAM_PREPAY02_BEFORE:5","ctxtAM_PREPAYPRO_BEFORE:9","123","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("150");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PREPAY03_BEFORE","ctxtDS_PREPAY2_BEFORE:2","ctxtAM_PREPAYPRO_BEFORE:9","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_text("일 이내에 그 내용과 비율을 따름");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PREPAY02_AFTER","staBEFORE:2","ctxtAM_PREPAYPRO_AFTER:5","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_text("(2)");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_PREPAY2_AFTER","staAM_PREPAY02_AFTER:5","ctxtAM_PREPAYPRO_AFTER:9","123","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("156");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PREPAY03_AFTER","ctxtDS_PREPAY2_AFTER:2","ctxtAM_PREPAYPRO_AFTER:9","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_text("일 이내에 그 내용과 비율을 따름");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_WORK_BEFORE","staDT_WORK_BEFORE:5","ctxtDS_PREPAY2_BEFORE:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_WORK_BEFORE_RANGE","ctclFR_WORK_BEFORE:10","ctxtDS_PREPAY2_BEFORE:9","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_WORK_BEFORE","staDT_WORK_BEFORE_RANGE:10","ctxtDS_PREPAY2_BEFORE:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_WORK_AFTER","staDT_WORK_AFTER:5","ctxtDS_PREPAY2_AFTER:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_WORK_AFTER_RANGE","ctclFR_WORK_AFTER:10","ctxtDS_PREPAY2_AFTER:9","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_WORK_AFTER","staDT_WORK_AFTER_RANGE:10","ctxtDS_PREPAY2_AFTER:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtRM_PAYMENT","staRM_PAYMENT:5","ctclFR_WORK_BEFORE:9","128","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("132");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_PREPAY","staDT_PREPAY:5","ctclFR_WORK_AFTER:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PREPAY_RANGE","ctclFR_PREPAY:10","ctclFR_WORK_AFTER:9","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_PREPAY","staDT_PREPAY_RANGE:10","ctclFR_WORK_AFTER:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_GISUNGBUBUN00","staDS_GISUNGBUBUN:2","staRM_PAYMENT:5","40","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("(1) 월");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_GISUNGBUBUN","staDS_GISUNGBUBUN00:5","ctxtRM_PAYMENT:9","86","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("163");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_GISUNGBUBUN01","ctxtDS_GISUNGBUBUN:5","staRM_PAYMENT:5","157","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("165");
            obj.set_text("회 (2) 목적물 수령일로부터 ");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_GISUNGMETHOD","staDS_GISUNGBUBUN01:5","ctxtRM_PAYMENT:9","86","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("161");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_GISUNGBUBUN02","ctxtDS_GISUNGMETHOD:5","staRM_PAYMENT:5","157","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("166");
            obj.set_text("일 이내   (3) 기타(지급조건)");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_GISUNGETC","staDS_GISUNGBUBUN02:5","ctxtRM_PAYMENT:9","272","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("131");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_GISUNGBUBUN03","staDS_GISUNGBUBUN:2","staDS_GISUNGBUBUN00:5","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_text("(4) 대금지급조건");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PAY_CONDITION","staDS_GISUNGBUBUN03:5","ctxtDS_GISUNGBUBUN:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("130");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_GISUNGBUBUN04","ctxtDS_PAY_CONDITION:2","staDS_GISUNGBUBUN00:5","130","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("(5) 준공금(잔여기성금)");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDS_GISUNG5","staDS_GISUNGBUBUN04:5","ctxtDS_GISUNGBUBUN:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("162");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_DOKUB","staDT_DOKUB:5","ctxtDS_PAY_CONDITION:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_DOKUB_RANGE","ctclFR_DOKUB:10","ctxtDS_PAY_CONDITION:9","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_DOKUB","staDT_DOKUB_RANGE:10","ctxtDS_PAY_CONDITION:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CONDITION_DELIVERY","staCD_CONDITION_DELIVERY:5","ctxtDS_PAY_CONDITION:9","389","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DCX_CFDELIVERY");
            obj.getSetter("CDTextWidth").set("65");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CONTGUARANTEE","staRT_CONTGUARANTEE:5","ctclFR_DOKUB:9","128","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("167");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_CONTGUARANTEE","ctxtDS_CONTGUARANTEE:5","ctclFR_DOKUB:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("158");
            obj.set_value("");
            obj.set_format("#,#.##");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_CONTGUARANTEE_PERCENT","ctxtRT_CONTGUARANTEE:5","ctclFR_DOKUB:9","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("%");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_CONTGUARANTEE","staRT_CONTGUARANTEE_PERCENT:5","ctclFR_DOKUB:9","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("147");
            obj.set_value("");
            obj.set_format("#,#");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CONTGUARANTEE_WON","ctxtAM_CONTGUARANTEE:5","ctclFR_DOKUB:9","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("171");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_PAYMENT","staCD_PAYMENT:5","ccfCD_CONDITION_DELIVERY:9","389","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DMX_CFPAYMENT");
            obj.getSetter("CDTextWidth").set("65");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ASGUARANTEE","staRT_ASGUARANTEE:5","ctxtDS_CONTGUARANTEE:9","128","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("168");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_ASGUARANTEE","ctxtDS_ASGUARANTEE:5","ctxtDS_CONTGUARANTEE:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("159");
            obj.set_value("");
            obj.set_format("#,#.##");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_ASGUARANTEE_PERCENT","ctxtRT_ASGUARANTEE:5","ctxtDS_CONTGUARANTEE:9","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("%");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ASGUARANTEE","staRT_ASGUARANTEE_PERCENT:5","ctxtDS_CONTGUARANTEE:9","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("148");
            obj.set_value("");
            obj.set_format("#,#");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ASGUARANTEE_WON","ctxtAM_ASGUARANTEE:5","ctxtDS_CONTGUARANTEE:9","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("170");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_GUARANTEEGIGAN","staDS_GUARANTEEGIGAN:5","ccfCD_PAYMENT:10","389","19",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("169");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_DELAY","staRT_DELAY:5","ctxtDS_ASGUARANTEE:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("172");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_DELAY","ctxtDS_DELAY:5","ctxtDS_ASGUARANTEE:9","58","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("148");
            obj.set_value("");
            obj.set_format("#,#.00");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_DELAY_DIV","ctxtRT_DELAY:5","ctxtDS_ASGUARANTEE:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("174");
            obj.set_text("/1000");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboDS_ASFROMTO_COMMENT","staDT_ASFROMTO:5","ctxtDS_GUARANTEEGIGAN:9","301","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsDS_ASFROMTO_COMMENT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtDT_ASFROMTO","ccboDS_ASFROMTO_COMMENT:5","ctxtDS_GUARANTEEGIGAN:9","58","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("148");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_ASFROMTO_YEAR","ctxtDT_ASFROMTO:5","ctxtDS_GUARANTEEGIGAN:9","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("177");
            obj.set_text("년");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfDS_HNAME","staDS_HNAME:5","ctxtDS_DELAY:9","389","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DCX_CFSABUN_02");
            obj.getSetter("CDTextWidth").set("65");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtDS_CHANGEREASON","staDS_CHANGEREASON:5","ccboDS_ASFROMTO_COMMENT:9","389","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfNO_CONT.form.CDTextBox","value","dsSearch","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfSN_SEQ.form.CDTextBox","value","dsSearch","SN_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtTY_STATUS","value","dsList","TY_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtDS_STATUS","value","dsList","DS_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccboDS_CONTMETHOD","value","dsList","DS_CONTMETHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ccfCD_ACCOUNT.form.CDTextBox","value","dsList","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divData.form.ccfCD_ACCOUNT.form.DSTextBox","value","dsList","DS_ACCOUNT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctxtCD_SITE","value","dsList","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctxtDS_SITE","value","dsList","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ccfTY_CONT.form.CDTextBox","value","dsList","TY_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ctxtCD_COSTCLASS","value","dsList","CD_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctxtDS_COSTCLASS","value","dsList","DS_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ccfCD_LICCOST.form.CDTextBox","value","dsList","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ccfCD_LICCOST.form.DSTextBox","value","dsList","DS_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ctxtRT_VAT","value","dsList","RT_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.ccboTY_INSURANCE","value","dsList","TY_INSURANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ctxtDS_ORDER","value","dsList","DS_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.ccboYN_E_CONT","value","dsList","YN_E_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.ctxtDS_GONGDONG","value","dsList","DS_GONGDONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.crdoYN_GONGHASU","value","dsList","YN_GONGHASU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.ctxtCD_VENDOR","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.ctxtDS_VENDOR","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.ctclDT_AGREE","value","dsList","DT_AGREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.crdoTY_TAX","value","dsList","TY_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.ctxtAM_SILHENG_AFTER","value","dsList","AM_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.ctxtAM_CONTPRO_AFTER","value","dsList","AM_CONTPRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.ctxtAM_LABOR_AFTER","value","dsList","AM_LABOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.ctxtAM_CONTVAT_AFTER","value","dsList","AM_CONTVAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.ctxtAM_CONT_AFTER","value","dsList","AM_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.ctxtDS_PREPAY1_AFTER","value","dsList","DS_PREPAY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.ctxtAM_PREPAYPRO_AFTER","value","dsList","AM_PREPAYPRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.ctxtAM_PREPAYVAT_AFTER","value","dsList","AM_PREPAYVAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.ctxtAM_PREPAY_AFTER","value","dsList","AM_PREPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.ctxtDS_PREPAY2_AFTER","value","dsList","DS_PREPAY2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.ctclFR_WORK_AFTER","value","dsList","FR_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.ctclTO_WORK_AFTER","value","dsList","TO_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.ctxtRM_PAYMENT","value","dsList","RM_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.ctxtDS_GISUNGBUBUN","value","dsList","DS_GISUNGBUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.ctxtDS_GISUNGMETHOD","value","dsList","DS_GISUNGMETHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.ctxtDS_GISUNGETC","value","dsList","DS_GISUNGETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.ctxtDS_PAY_CONDITION","value","dsList","DS_PAY_CONDITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.ctxtDS_GISUNG5","value","dsList","DS_GISUNG5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.ctclFR_DOKUB","value","dsList","DT_FROM_DOKUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.ctclTO_DOKUB","value","dsList","DT_TO_DOKUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.ccfCD_CONDITION_DELIVERY.form.CDTextBox","value","dsList","CD_CONDITION_DELIVERY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.ctxtDS_CONTGUARANTEE","value","dsList","DS_CONTGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.ctxtRT_CONTGUARANTEE","value","dsList","RT_CONTGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.ctxtAM_CONTGUARANTEE","value","dsList","AM_CONTGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.ccfCD_PAYMENT.form.CDTextBox","value","dsList","CD_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divData.form.ccfCD_PAYMENT.form.DSTextBox","value","dsList","DS_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.ctxtDS_ASGUARANTEE","value","dsList","DS_ASGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.ctxtRT_ASGUARANTEE","value","dsList","RT_ASGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.ctxtAM_ASGUARANTEE","value","dsList","AM_ASGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.ctxtDS_GUARANTEEGIGAN","value","dsList","DS_GUARANTEEGIGAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.ctxtDS_DELAY","value","dsList","DS_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.ctxtRT_DELAY","value","dsList","RT_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.ccboDS_ASFROMTO_COMMENT","value","dsList","DS_ASFROMTO_COMMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.ctxtDT_ASFROMTO","value","dsList","DT_ASFROMTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.ccfDS_HNAME.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divData.form.ccfDS_HNAME.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.ctxtAM_SILHENG_BEFORE","value","dsList1","AM_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.ctxtAM_CONTPRO_BEFORE","value","dsList1","AM_CONTPRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.ctxtAM_CONTVAT_BEFORE","value","dsList1","AM_CONTVAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.ctxtAM_CONT_BEFORE","value","dsList1","AM_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.ctxtAM_LABOR_BEFORE","value","dsList1","AM_LABOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.ctclFR_WORK_BEFORE","value","dsList1","FR_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.ctclTO_WORK_BEFORE","value","dsList1","TO_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divData.form.ctxtDS_PREPAY1_BEFORE","value","dsList1","DS_PREPAY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.ctxtAM_PREPAYPRO_BEFORE","value","dsList1","AM_PREPAYPRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divData.form.ctxtAM_PREPAYVAT_BEFORE","value","dsList1","AM_PREPAYVAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.ctxtAM_PREPAY_BEFORE","value","dsList1","AM_PREPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.ctxtDS_PREPAY2_BEFORE","value","dsList1","DS_PREPAY2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divData.form.crdoYN_PARTNERSIGN","value","dsList","YN_PARTNERSIGN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCC_CHGCONTRACT.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_CONT))
        	{
        		this.divData.form.ctxtCD_SITE.set_value(this.getOwnerFrame().CD_SITE);
        		this.divData.form.ctxtDS_SITE.set_value(this.getOwnerFrame().DS_SITE);

        		this.dsSearch.setColumn(0, "NO_CONT",this.getOwnerFrame().NO_CONT);
        		this.divSearch.form.ccfNO_CONT.form.DSTextBox.set_value(this.getOwnerFrame().DS_SUBCON);
        		this.dsSearch.setColumn(0, "SN_SEQ", this.getOwnerFrame().SN_SEQ);

        		//this.divSearch.form.ccfNO_CONT.form.fnCodeFindLoad();
        		this.divSearch.form.ccfSN_SEQ.form.fnCodeFindLoad();
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDetail = this.gfnFormButtonAdd("btnDetail", "fnExtendDetail");
        	this.btnStock = this.gfnFormButtonAdd("btnStock", "fnStock");
        	this.btnAddVendor = this.gfnFormButtonAdd("btnAddVendor", "fnAddVendor");
        	this.btnComplete = this.gfnFormButtonAdd("btnComplete", "fnComplete");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfNO_CONT = this.divSearch.form.ccfNO_CONT;
        	this.ccfSN_SEQ = this.divSearch.form.ccfSN_SEQ;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_CONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfSN_SEQ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_CONT", "string");
        	this.dsSelect.addColumn("SN_SEQ", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_CONT", "string");
        	this.dsUpdate.addColumn("SN_SEQ", "string");
        	this.dsUpdate.addColumn("TY_CONT", "string");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("NO_BID", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("DT_CONT", "string");
        	this.dsUpdate.addColumn("DT_AGREE", "string");
        	this.dsUpdate.addColumn("DT_CLEARING", "string");
        	this.dsUpdate.addColumn("AM_CONT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_CONTPRO", "bigdecimal");
        	this.dsUpdate.addColumn("AM_CONTVAT", "bigdecimal");
        	this.dsUpdate.addColumn("DS_PREPAY1", "string");
        	this.dsUpdate.addColumn("DS_PREPAY2", "string");
        	this.dsUpdate.addColumn("AM_PREPAYPRO", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PREPAYVAT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_PREPAY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SILHENG", "bigdecimal");
        	this.dsUpdate.addColumn("AM_CONTGUARANTEE", "bigdecimal");
        	this.dsUpdate.addColumn("FR_WORK", "string");
        	this.dsUpdate.addColumn("TO_WORK", "string");
        	this.dsUpdate.addColumn("DS_CONTGUARANTEE", "string");
        	this.dsUpdate.addColumn("RT_CONTGUARANTEE", "bigdecimal");
        	this.dsUpdate.addColumn("DS_GUARANTEEGIGAN", "string");
        	this.dsUpdate.addColumn("DS_GISUNGMETHOD", "string");
        	this.dsUpdate.addColumn("DS_GISUNGBUBUN", "string");
        	this.dsUpdate.addColumn("DT_ASFROMTO", "string");
        	this.dsUpdate.addColumn("FR_ASPERIOD", "string");
        	this.dsUpdate.addColumn("TO_ASPERIOD", "string");
        	this.dsUpdate.addColumn("DS_ASGUARANTEE", "string");
        	this.dsUpdate.addColumn("RT_ASGUARANTEE", "bigdecimal");
        	this.dsUpdate.addColumn("DS_CHANGEREASON", "string");
        	this.dsUpdate.addColumn("DS_DELAY", "string");
        	this.dsUpdate.addColumn("RT_DELAY", "bigdecimal");
        	this.dsUpdate.addColumn("DS_CONTMETHOD", "string");
        	this.dsUpdate.addColumn("TY_TAX", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("RT_VAT", "bigdecimal");
        	this.dsUpdate.addColumn("CD_COSTCLASS", "string");
        	this.dsUpdate.addColumn("CD_LICCOST", "string");
        	this.dsUpdate.addColumn("DS_SUBCON", "string");
        	this.dsUpdate.addColumn("YN_E_CONT", "string");
        	this.dsUpdate.addColumn("YN_GONGHASU", "string");
        	this.dsUpdate.addColumn("AM_LABOR", "bigdecimal");
        	this.dsUpdate.addColumn("DS_COMMENT", "string");
        	this.dsUpdate.addColumn("DS_ORDER", "string");
        	this.dsUpdate.addColumn("DS_GISUNGETC", "string");
        	this.dsUpdate.addColumn("TY_INSURANCE", "string");
        	this.dsUpdate.addColumn("CD_PAYMENT", "string");
        	this.dsUpdate.addColumn("RM_PAYMENT", "string");
        	this.dsUpdate.addColumn("YN_RMGONGDONG", "string");
        	this.dsUpdate.addColumn("RM_CONDITION", "string");
        	this.dsUpdate.addColumn("CD_ACCOUNT", "string");
        	this.dsUpdate.addColumn("CD_SEMOK", "string");
        	this.dsUpdate.addColumn("RM_PAY_CONDITION", "string");
        	this.dsUpdate.addColumn("ETC_CONDITION", "string");
        	this.dsUpdate.addColumn("CD_CONDITION_DELIVERY", "string");
        	this.dsUpdate.addColumn("DS_PROFIT_REASON", "string");
        	this.dsUpdate.addColumn("DS_ASFROMTO_COMMENT", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("DS_PAY_CONDITION", "string");
        	this.dsUpdate.addColumn("DS_GISUNG5", "string");
        	this.dsUpdate.addColumn("RM_REMARK_GW", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_CONT", "string");
        	this.dsDelete.addColumn("SN_SEQ", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("NO_CONT", "string");
        	this.dsExec.addColumn("SN_SEQ", "string");
        	this.dsExec.addColumn("DT_AGREE", "string");
        	this.dsExec.addColumn("YN_FORCE", "string");
        	this.dsExec.addColumn("YN_MSG", "string");
        	this.dsExec.addColumn("ID_USER", "string");
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

        	this.dsSelect.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsSelect.setColumn(0, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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

        this.fnDetail = function()
        {
        	var sn_seq = this.dsSearch.getColumn(0, "SN_SEQ");

        	if(this.dsSearch.getColumn(0, "SN_SEQ") != "001")
        	{
        		sn_seq = (nexacro.toNumber(sn_seq,0) - 1).toString().padLeft(3,"0");
        	}

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsSelect.setColumn(0, "SN_SEQ", sn_seq);
        	this.dsSelect.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList1=select0";
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
        	this.gfnConfirm("삭제를 진행하시겠습니까?", "fnDel_callback");
        }

        this.fnDel_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		var nrow = this.dsDelete.addRow();
        		this.dsDelete.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        		this.dsDelete.setColumn(nrow, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));

        		if (this.dsDelete.rowcount == 0) return;

        		var strSvcId    = "save";
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
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 싱글폼(Dataset) 필수입력 체크
        	//if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return;

        	this.dsUpdate.clearData();

        	var flag = this.gfnGetFormStatus(this);

        	if(flag == "U") {
        		var nrow = this.dsUpdate.addRow();
        		this.dsUpdate.setColumn(nrow, "NO_CONT", this.dsList.getColumn(0, "NO_CONT"));
        		this.dsUpdate.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(0, "SN_SEQ"));
        		this.dsUpdate.setColumn(nrow, "TY_CONT", this.dsList.getColumn(0, "TY_CONT"));
        		this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        		this.dsUpdate.setColumn(nrow, "NO_BID", this.dsList.getColumn(0, "NO_BID"));
        		this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        		this.dsUpdate.setColumn(nrow, "DT_CONT", this.dsList.getColumn(0, "DT_CONT"));
        		this.dsUpdate.setColumn(nrow, "DT_AGREE", this.dsList.getColumn(0, "DT_AGREE"));
        		this.dsUpdate.setColumn(nrow, "DT_CLEARING", this.dsList.getColumn(0, "DT_CLEARING"));
        		this.dsUpdate.setColumn(nrow, "AM_CONT", this.dsList.getColumn(0, "AM_CONT"));
        		this.dsUpdate.setColumn(nrow, "AM_CONTPRO", this.dsList.getColumn(0, "AM_CONTPRO"));
        		this.dsUpdate.setColumn(nrow, "AM_CONTVAT", this.dsList.getColumn(0, "AM_CONTVAT"));
        		this.dsUpdate.setColumn(nrow, "DS_PREPAY1", this.dsList.getColumn(0, "DS_PREPAY1"));
        		this.dsUpdate.setColumn(nrow, "DS_PREPAY2", this.dsList.getColumn(0, "DS_PREPAY2"));
        		this.dsUpdate.setColumn(nrow, "AM_PREPAYPRO", this.dsList.getColumn(0, "AM_PREPAYPRO"));
        		this.dsUpdate.setColumn(nrow, "AM_PREPAYVAT", this.dsList.getColumn(0, "AM_PREPAYVAT"));
        		this.dsUpdate.setColumn(nrow, "AM_PREPAY", this.dsList.getColumn(0, "AM_PREPAY"));
        		this.dsUpdate.setColumn(nrow, "AM_SILHENG", this.dsList.getColumn(0, "AM_SILHENG"));
        		this.dsUpdate.setColumn(nrow, "AM_CONTGUARANTEE", this.dsList.getColumn(0, "AM_CONTGUARANTEE"));
        		this.dsUpdate.setColumn(nrow, "FR_WORK", this.dsList.getColumn(0, "FR_WORK"));
        		this.dsUpdate.setColumn(nrow, "TO_WORK", this.dsList.getColumn(0, "TO_WORK"));
        		this.dsUpdate.setColumn(nrow, "DS_CONTGUARANTEE", this.dsList.getColumn(0, "DS_CONTGUARANTEE"));
        		this.dsUpdate.setColumn(nrow, "RT_CONTGUARANTEE", this.dsList.getColumn(0, "RT_CONTGUARANTEE"));
        		this.dsUpdate.setColumn(nrow, "DS_GUARANTEEGIGAN", this.dsList.getColumn(0, "DS_GUARANTEEGIGAN"));
        		this.dsUpdate.setColumn(nrow, "DS_GISUNGMETHOD", this.dsList.getColumn(0, "DS_GISUNGMETHOD"));
        		this.dsUpdate.setColumn(nrow, "DS_GISUNGBUBUN", this.dsList.getColumn(0, "DS_GISUNGBUBUN"));
        		this.dsUpdate.setColumn(nrow, "DT_ASFROMTO", this.dsList.getColumn(0, "DT_ASFROMTO"));
        		this.dsUpdate.setColumn(nrow, "FR_ASPERIOD", this.dsList.getColumn(0, "FR_ASPERIOD"));
        		this.dsUpdate.setColumn(nrow, "TO_ASPERIOD", this.dsList.getColumn(0, "TO_ASPERIOD"));
        		this.dsUpdate.setColumn(nrow, "DS_ASGUARANTEE", this.dsList.getColumn(0, "DS_ASGUARANTEE"));
        		this.dsUpdate.setColumn(nrow, "RT_ASGUARANTEE", this.dsList.getColumn(0, "RT_ASGUARANTEE"));
        		this.dsUpdate.setColumn(nrow, "DS_CHANGEREASON", this.dsList.getColumn(0, "DS_CHANGEREASON"));
        		this.dsUpdate.setColumn(nrow, "DS_DELAY", this.dsList.getColumn(0, "DS_DELAY"));
        		this.dsUpdate.setColumn(nrow, "RT_DELAY", this.dsList.getColumn(0, "RT_DELAY"));
        		this.dsUpdate.setColumn(nrow, "DS_CONTMETHOD", this.dsList.getColumn(0, "DS_CONTMETHOD"));
        		this.dsUpdate.setColumn(nrow, "TY_TAX", this.dsList.getColumn(0, "TY_TAX"));
        		this.dsUpdate.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        		this.dsUpdate.setColumn(nrow, "RT_VAT", this.dsList.getColumn(0, "RT_VAT"));
        		this.dsUpdate.setColumn(nrow, "CD_COSTCLASS", this.dsList.getColumn(0, "CD_COSTCLASS"));
        		this.dsUpdate.setColumn(nrow, "CD_LICCOST", this.dsList.getColumn(0, "CD_LICCOST"));
        		this.dsUpdate.setColumn(nrow, "DS_SUBCON", this.dsList.getColumn(0, "DS_SUBCON"));
        		this.dsUpdate.setColumn(nrow, "YN_E_CONT", this.dsList.getColumn(0, "YN_E_CONT"));
        		this.dsUpdate.setColumn(nrow, "YN_GONGHASU", this.dsList.getColumn(0, "YN_GONGHASU"));
        		this.dsUpdate.setColumn(nrow, "AM_LABOR", this.dsList.getColumn(0, "AM_LABOR"));
        		this.dsUpdate.setColumn(nrow, "DS_COMMENT", this.dsList.getColumn(0, "DS_COMMENT"));
        		this.dsUpdate.setColumn(nrow, "DS_ORDER", this.dsList.getColumn(0, "DS_ORDER"));
        		this.dsUpdate.setColumn(nrow, "DS_GISUNGETC", this.dsList.getColumn(0, "DS_GISUNGETC"));
        		this.dsUpdate.setColumn(nrow, "TY_INSURANCE", this.dsList.getColumn(0, "TY_INSURANCE"));
        		this.dsUpdate.setColumn(nrow, "CD_PAYMENT", this.dsList.getColumn(0, "CD_PAYMENT"));
        		this.dsUpdate.setColumn(nrow, "RM_PAYMENT", this.dsList.getColumn(0, "RM_PAYMENT"));
        		this.dsUpdate.setColumn(nrow, "YN_RMGONGDONG", this.dsList.getColumn(0, "YN_RMGONGDONG"));
        		this.dsUpdate.setColumn(nrow, "RM_CONDITION", this.dsList.getColumn(0, "RM_CONDITION"));
        		this.dsUpdate.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(0, "CD_ACCOUNT"));
        		this.dsUpdate.setColumn(nrow, "CD_SEMOK", this.dsList.getColumn(0, "CD_SEMOK"));
        		this.dsUpdate.setColumn(nrow, "RM_PAY_CONDITION", this.dsList.getColumn(0, "RM_PAY_CONDITION"));
        		this.dsUpdate.setColumn(nrow, "ETC_CONDITION", this.dsList.getColumn(0, "ETC_CONDITION"));
        		this.dsUpdate.setColumn(nrow, "CD_CONDITION_DELIVERY", this.dsList.getColumn(0, "CD_CONDITION_DELIVERY"));
        		this.dsUpdate.setColumn(nrow, "DS_PROFIT_REASON", this.dsList.getColumn(0, "DS_PROFIT_REASON"));
        		this.dsUpdate.setColumn(nrow, "DS_ASFROMTO_COMMENT", this.dsList.getColumn(0, "DS_ASFROMTO_COMMENT"));
        		this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsUpdate.setColumn(nrow, "DS_PAY_CONDITION", this.dsList.getColumn(0, "DS_PAY_CONDITION"));
        		this.dsUpdate.setColumn(nrow, "DS_GISUNG5", this.dsList.getColumn(0, "DS_GISUNG5"));
        		this.dsUpdate.setColumn(nrow, "RM_REMARK_GW", this.dsList.getColumn(0, "RM_REMARK_GW"));

        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
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
         * 콤보 이벤트 설정
         ************************************************************************/
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "50");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(1, "CD_TYPE", "62");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(2, "CD_TYPE", "C10");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsDS_CONTMETHOD=combo0 dsTY_INSURANCE=combo1 dsDS_ASFROMTO_COMMENT=combo2";
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
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_CONT")))
        	{
        		this.gfnAlert("계약번호를 입력해주십시오.");
        		return false;
        	}else if(this.gfnIsNull(this.dsSearch.getColumn(0, "SN_SEQ")))
        	{
        		this.gfnAlert("계약차수를 입력해주십시오.");
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
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	if (svcID == "select") {
        		this.gfnSetFormStatus(this, "Q");
        		this.fnDetail();
        	}
        	else if (svcID == "detail") {
        		this.gfnSetFormStatus(this, "Q");
        	}
        	else if(svcID == "update") {
        		if (errorCode == 0) {
        			this.getParentContext().close(true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "delete") {
        		if (errorCode == 0) {
        			this.getParentContext().close(true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.gfnAlert("계약완료 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfNO_CONT"){
        		dsUserParam.setColumn(nrow, "CD_SITE", this.divData.form.ctxtCD_SITE.text);
        	}else if (id == "ccfSN_SEQ"){
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_CONT"))) {
         			this.gfnAlert("계약번호를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "VALUE1", this.dsSearch.getColumn(0, "NO_CONT"));
        	}

        	return true;
        }

        this.fnCodeFinder_AfterCDTextChanged = function(id, codeFindData) {

        }
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
        		//this.dsList.clearData();
        		//this.dsList1.clearData();

        		if(e.columnid == "NO_CONT")
        		{
        			this.dsSearch.setColumn(0, "SN_SEQ", "");
        		}
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		this.gfnSetFormStatus(this, "U");

        		if(e.columnid == "TY_TAX")
        		{
        			switch(e.newvalue)
        			{
        				case "과세" :
        					this.divData.form.ctxtRT_VAT.set_readonly(true);
        					this.dsList.setColumn(0, "RT_VAT", 100);
        					break;
        				case "면세" :
        					this.divData.form.ctxtRT_VAT.set_readonly(true);
        					this.dsList.setColumn(0, "RT_VAT", 0);
        					break;
        				case "공존" :
        					this.divData.form.ctxtRT_VAT.set_readonly(false);
        					break;
        			}
        		}
        		else if(e.columnid == "RT_VAT")
        		{
        			if(e.newvalue > 100)
        			{
        				this.gfnAlert("과세율을 100이하로 입력하세요.");
        				this.dsList.setColumn(0, "RT_VAT", e.oldvalue);
        				return;
        			}

        			this.dsList.setColumn(0, "AM_CONTVAT", this.dsList.getColumn(0, "AM_CONTPRO") * e.newvalue / 1000);
        			this.dsList.setColumn(0, "AM_PREPAYVAT", this.dsList.getColumn(0, "AM_PREPAYPRO") * e.newvalue / 1000);
        		}
        		else if(e.columnid == "AM_PREPAYPRO")
        		{
        			this.dsList.setColumn(0, "AM_PREPAYVAT", e.newvalue * this.dsList.getColumn(0, "RT_VAT") / 1000);
        		}
        	}
        };


        // 계약내역 버튼 클릭시 팝업화면 호출
        this.fnExtendDetail = function(obj,e) {
        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(0, "DS_SITE");
        	param.NO_HADOCONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.DS_HADOCONT = this.ccfNO_CONT.form.DSTextBox.value;
        	param.SN_SEQ = this.dsSearch.getColumn(0, "SN_SEQ");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_REQDETAILSAV", "", param);
        }

        // 증권관리 버튼 클릭시 팝업화면 호출
        this.fnStock = function(obj,e) {
        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(0, "DS_SITE");
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.DS_CONT = this.ccfNO_CONT.form.DSTextBox.value;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_STOCKMR", "", param);
        }

        // 업체추가 버튼 클릭시 팝업화면 호출
        this.fnAddVendor = function(obj,e) {
        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(0, "DS_SITE");
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.DS_SUBCON = this.ccfNO_CONT.form.DSTextBox.value;

        	this.gfnFormOpen("DMA", "DMA_POVENDORADD", "", param);
        }

        // 계약완료처리 버튼 클릭시 이벤트
        this.fnComplete = function(obj,e) {
        	this.gfnConfirm("계약완료처리 하시겠습니까?", "fnComplete_callback");
        }

        this.fnComplete_callback = function(strId, val)
        {
        	if(val == true) {
        		this.fnExec();
        	}
        }

        /*
         *	계약완료처리
         */
        this.fnExec = function() {

        	this.dsExec.clearData();
        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsExec.setColumn(0, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        	this.dsExec.setColumn(0, "DT_AGREE", this.dsList.getColumn(0, "DT_CONT"));
        	this.dsExec.setColumn(0, "YN_FORCE", "");
        	this.dsExec.setColumn(0, "YN_MSG", "");
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCC_CHGCONTRACT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
