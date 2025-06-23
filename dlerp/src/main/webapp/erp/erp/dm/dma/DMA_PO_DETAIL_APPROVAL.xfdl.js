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
            this.set_titletext("구매품의서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1180,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_BID_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"STRING\" size=\"256\"/><Column id=\"YN_E_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTPRO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"ID_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAXFREE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTVAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAY_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_INCREASE\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_QUALITY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_H02\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PACKING\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SELECT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TAX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMAPR_PO_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DMAPR_PO_DETAIL_UPDATE</Col></Row><Row><Col id=\"SP\">DMAPR_PO_DETAIL_DELETE</Col><Col id=\"TARGET\">delete</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_CODE_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">appr_select</Col><Col id=\"SP\">DZRPR_AP_STATE_SELECT</Col></Row><Row><Col id=\"TARGET\">aplines</Col><Col id=\"SP\">DZRPR_APPLINES_SELECT</Col></Row><Row><Col id=\"TARGET\">execAppr</Col><Col id=\"SP\">DZZPR_APPROVAL_CALLBACK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YN_LINK\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_CONT\"/><Col id=\"SN_SEQ\"/><Col id=\"YN_LINK\"/><Col id=\"ID_AP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">DS_CONTMETHOD</Col><Col id=\"DS_FIELD\">계약방법</Col></Row><Row><Col id=\"CD_FIELD\">CD_ACCOUNT</Col><Col id=\"DS_FIELD\">계정코드</Col></Row><Row><Col id=\"CD_FIELD\">CD_LICCOST</Col><Col id=\"DS_FIELD\">품목</Col></Row><Row><Col id=\"CD_FIELD\">CD_VENDOR</Col><Col id=\"DS_FIELD\">(대표)거래처</Col></Row><Row><Col id=\"CD_FIELD\">RT_TAX</Col><Col id=\"DS_FIELD\">과세율</Col></Row><Row><Col id=\"CD_FIELD\">ID_DAM</Col><Col id=\"DS_FIELD\">담당자</Col></Row><Row><Col id=\"DS_FIELD\">납기일자</Col><Col id=\"CD_FIELD\">DT_DELIVERY</Col></Row><Row><Col id=\"CD_FIELD\">DS_ORDER</Col><Col id=\"DS_FIELD\">발주명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_E_CONT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_PAYMENT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_PAY_CONDITION", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_INCREASE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_DELIVERY", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_QUALITY", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_H02", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_ORDER", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_PACKING", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SELECT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">과세</Col><Col id=\"DS_CODE\">과세</Col></Row><Row><Col id=\"CD_CODE\">면세</Col><Col id=\"DS_CODE\">면세</Col></Row><Row><Col id=\"CD_CODE\">공존</Col><Col id=\"DS_CODE\">공존</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAppr", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAplines", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SITE:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("계약(PO)번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_CONT","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataApprLeft","0","0","550","79",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_background("");
            obj.set_border("1px solid #c9c6c3");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staApprNm","0","4",null,null,"0","0",null,null,null,null,this.divData.form.divDataApprLeft.form);
            obj.set_taborder("0");
            obj.set_text("구매 품의서");
            obj.set_textDecoration("none");
            obj.set_background("");
            obj.set_font("normal 20pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.divData.form.divDataApprLeft.addChild(obj.name, obj);

            obj = new Div("divDataAppr","divDataApprLeft:10","0",null,"80","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridAppr","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataAppr.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataAppr.addChild(obj.name, obj);

            obj = new Static("sta02","0","divDataAppr:0","1165","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("발주서상세정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData01","0","sta02:10","1170","348",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta201","0","0","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj.set_text("발주(PR)번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta202","0","sta201:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("부문");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta203","0","sta202:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("2");
            obj.set_text("(대표)거래처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta204","0","281","110","59",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("3");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta211","sta201:-1","0","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta212","sta202:-1","sta211:-1","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta213","sta203:-1","sta212:-1","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta214","sta204:-1","281","1056","59",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta221","776","0","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta231","sta221:-1","0","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtNO_BID_ORG","sta201:5","5","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("10");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta00","388","0","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("12");
            obj.set_text("발주명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta01","497","0","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta02","388","29","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("15");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta03","497","29","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta04","776","29","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("17");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta05","885","29","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta06","388","58","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("19");
            obj.set_text("과세율");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta07","497","58","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta08","776","58","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("21");
            obj.set_text("면세율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta09","885","58","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta10","885","87","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta11","776","87","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("24");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta12","497","87","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta13","388","87","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("26");
            obj.set_text("공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta14","109","87","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta15","0","87","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("28");
            obj.set_text("계약금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta16","885","116","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta17","776","116","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("30");
            obj.set_text("승인요청금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta18","497","116","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta19","388","116","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("32");
            obj.set_text("예산금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta20","109","116","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta21","0","116","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("34");
            obj.set_text("도급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta22","885","145","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta23","776","145","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("36");
            obj.set_text("과세구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta24","497","145","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta25","388","145","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("38");
            obj.set_text("납기일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta26","109","145","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta27","0","145","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("40");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta28","885","194","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta29","776","194","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("42");
            obj.set_text("오더유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta30","497","194","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta31","388","194","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("44");
            obj.set_text("인도조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta32","109","194","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta33","0","194","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("46");
            obj.set_text("지급조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta34","885","223","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta35","776","223","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("48");
            obj.set_text("포장형태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta36","497","223","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta37","388","223","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("50");
            obj.set_text("품질조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta38","109","223","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta39","0","223","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("52");
            obj.set_text("지불조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta40","885","252","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta41","776","252","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("54");
            obj.set_text("구매구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta42","497","252","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta43","388","252","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("56");
            obj.set_text("구매그룹");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta44","109","252","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta45","0","252","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("58");
            obj.set_text("증감요인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new TextArea("txtRM_BIGO","115","286","1045","49",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("59");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_ORDER","503","5","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("60");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("cfCD_LICCOST","503","34","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("DMX_CFLICCOST");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR","115","63","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("DSX_CFSITETYPE_CODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("61");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("cfID_DAM","sta221:5","34","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("DSX_CFSITETYPE_CODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONT","115","92","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("62");
            obj.set_format("9,999");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TT_DOKUB","115","121","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("63");
            obj.set_format("9,999");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_TAX","503","63","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("64");
            obj.set_format("#,0.00");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTPRO","503","92","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("65");
            obj.set_format("9,999");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TT_SILHENG","503","121","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("66");
            obj.set_format("9,999");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_DELIVERY","504","150","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("67");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_TAXFREE","891","63","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("68");
            obj.set_format("#,0.00");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTVAT","891","92","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("69");
            obj.set_format("9,999");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TT_APPROVE","891","121","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("70");
            obj.set_format("9,999");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Radio("crdoTY_TAX","sta23:5","txtAM_TT_APPROVE:9","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_TAX");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboYN_E_CONT","115","150","150","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("71");
            obj.set_innerdataset("dsYN_E_CONT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboCD_PAYMENT","115","199","150","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("72");
            obj.set_innerdataset("dsCD_PAYMENT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboCD_PAY_CONDITION","115","228","150","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("73");
            obj.set_innerdataset("dsCD_PAY_CONDITION");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboCD_INCREASE","115","257","150","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("74");
            obj.set_innerdataset("dsCD_INCREASE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboCD_DELIVERY","504","199","150","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("75");
            obj.set_innerdataset("dsCD_DELIVERY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboCD_QUALITY","504","228","150","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("76");
            obj.set_innerdataset("dsCD_QUALITY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboCD_H02","504","257","150","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("77");
            obj.set_innerdataset("dsCD_H02");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboCD_ORDER","891","199","150","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("78");
            obj.set_innerdataset("dsCD_ORDER");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboCD_PACKING","891","228","150","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("79");
            obj.set_innerdataset("dsCD_PACKING");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboTY_SELECT","891","257","150","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("80");
            obj.set_innerdataset("dsTY_SELECT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtCD_COSTCLASS","115","34","77","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("81");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_COSTCLASS","195","34","188","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("82");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_CONT.form.CDTextBox","value","dsSearch","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divData01.form.cfCD_LICCOST.form.CDTextBox","value","dsList","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divData01.form.cfCD_LICCOST.form.DSTextBox","value","dsList","DS_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divData01.form.cfID_DAM.form.CDTextBox","value","dsList","ID_DAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divData01.form.cfID_DAM.form.DSTextBox","value","dsList","DS_DAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.divData01.form.txtNO_BID_ORG","value","dsList","NO_BID_ORG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divData01.form.txtRM_BIGO","value","dsList","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divData01.form.txtDS_ORDER","value","dsList","DS_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divData01.form.cfCD_VENDOR.form.CDTextBox","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData01.form.cfCD_VENDOR.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divData01.form.txtAM_CONT","value","dsList","AM_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divData01.form.txtAM_TT_DOKUB","value","dsList","AM_TT_DOKUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divData01.form.txtRT_TAX","value","dsList","RT_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divData01.form.txtAM_CONTPRO","value","dsList","AM_CONTPRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divData01.form.txtAM_TT_SILHENG","value","dsList","AM_TT_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divData01.form.tclDT_DELIVERY","value","dsList","DT_DELIVERY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divData01.form.txtRT_TAXFREE","value","dsList","RT_TAXFREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divData01.form.txtAM_CONTVAT","value","dsList","AM_CONTVAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divData01.form.txtAM_TT_APPROVE","value","dsList","AM_TT_APPROVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divData01.form.cboYN_E_CONT","value","dsList","YN_E_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divData01.form.cboCD_PAYMENT","value","dsList","CD_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divData01.form.cboCD_PAY_CONDITION","value","dsList","CD_PAY_CONDITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divData01.form.cboCD_INCREASE","value","dsList","CD_INCREASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divData01.form.cboCD_DELIVERY","value","dsList","CD_DELIVERY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divData01.form.cboCD_QUALITY","value","dsList","CD_QUALITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divData01.form.cboCD_H02","value","dsList","CD_H02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divData01.form.cboCD_ORDER","value","dsList","CD_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divData01.form.cboCD_PACKING","value","dsList","CD_PACKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divData01.form.cboTY_SELECT","value","dsList","TY_SELECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divData01.form.txtCD_COSTCLASS","value","dsList","CD_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divData01.form.txtDS_COSTCLASS","value","dsList","DS_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData01.form.crdoTY_TAX","value","dsList","TY_TAX");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DMA_PO_DETAIL_APPROVAL.xfdl", function() {
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
        	if(!this.gfnIsNull(this.getOwnerFrame().PARAM01) && !this.gfnIsNull(this.getOwnerFrame().PARAM02)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().PARAM01);
        		this.divSearch.form.ccfCD_SITE.form.fnCodeFindLoad();
        		this.dsSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().PARAM02);
        		this.divSearch.form.ccfNO_CONT.form.fnCodeFindLoad();
        		this.dsSearch.setColumn(0, "YN_LINK", this.getOwnerFrame().YN_LINK);	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다
        		this.dsSearch.setColumn(0, "ID_AP", this.getOwnerFrame().ID_AP);		// 전자결재문서번호

        		// 결재상태값 조회 후 그리드 조회한다
        		this.fnApprSel();
        	}
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
        	this.btnAprvCmpl = this.gfnFormButtonAdd("btnAprvCmpl", "fnAprvCmpl");
        	this.btnAprvCnc = this.gfnFormButtonAdd("btnAprvCnc", "fnAprvCnc");
        	this.btnAprvInf = this.gfnFormButtonAdd("btnAprvInf", "fnAprvInf");
        	this.btnAprvSang = this.gfnFormButtonAdd("btnAprvSang", "fnAprvSang");
        	this.btnApCnl = this.gfnFormButtonAdd("btnApCnl", "fnApCnl");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_CONT = this.divSearch.form.ccfNO_CONT;

        	// 결재관련
        	this.dxGridAppr = this.divData.form.divDataAppr.form.objGridAppr;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_CONT.CodeFindName = "DCX_CFCONTRACT_01";

        	this.ccfNO_CONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.divData.form.divData01.form.cfCD_VENDOR.CodeFindName = "DCX_CFVENDOR_DM";
        	this.divData.form.divData01.form.cfCD_LICCOST.CodeFindName = "DMX_CFLICCOST";
        	this.divData.form.divData01.form.cfID_DAM.CodeFindName = "CF_CODE_DM_H07";

        	this.divData.form.divData01.form.cfCD_LICCOST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divData.form.divData01.form.cfCD_LICCOST.AfterCDTextChanged = "cfCD_LICCOST_AfterCDTextChanged";

        	// 결재관련
        	this.gfnGridInit(this.dxGridAppr, this.dsListAplines, "DZ", "DZR_APLINES_01");
        	this.dxGridAppr.set_extendsizetype("none");
        	this.dxGridAppr.set_scrollbartype("none default");	// 가로 스크롤이 생기지 않게 셋팅
        	var colDS_NOTE = this.dxGridAppr.getBindCellIndex("body", "DS_NOTE");
        	this.dxGridAppr.setCellProperty("body", colDS_NOTE, "tooltiptext", "expr:DS_NOTE==''?'':DS_NOTE" );	// 의견컬럼 툴팁추가

        	//this.divData.form.divData01.form.cfCD_LICCOST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.divData.form.divData01.form.cfCD_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_CONT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_CONT", "string");
        	this.dsUpdate.addColumn("DS_ORDER", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_LICCOST", "string");
        	this.dsUpdate.addColumn("DT_DELIVERY", "string");
        	this.dsUpdate.addColumn("RT_TAX", "bigdecimal");
        	this.dsUpdate.addColumn("RT_TAXFREE", "bigdecimal");
        	this.dsUpdate.addColumn("YN_E_CONT", "string");
        	this.dsUpdate.addColumn("AM_CONTPRO", "bigdecimal");
        	this.dsUpdate.addColumn("AM_CONTVAT", "bigdecimal");
        	this.dsUpdate.addColumn("TY_TAX", "string");
        	this.dsUpdate.addColumn("CD_PAYMENT", "string");
        	this.dsUpdate.addColumn("CD_DELIVERY", "string");
        	this.dsUpdate.addColumn("CD_ORDER", "string");
        	this.dsUpdate.addColumn("CD_PAY_CONDITION", "string");
        	this.dsUpdate.addColumn("CD_QUALITY", "string");
        	this.dsUpdate.addColumn("CD_PACKING", "string");
        	this.dsUpdate.addColumn("CD_INCREASE", "string");
        	this.dsUpdate.addColumn("CD_H02", "string");
        	this.dsUpdate.addColumn("TY_SELECT", "string");
        	this.dsUpdate.addColumn("ID_DAM", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_CONT", "string");

        	// 결재관련
        	this.dsExecAppr = new Dataset();
        	this.dsExecAppr.addColumn("ID_AP", "string");
        	this.dsExecAppr.addColumn("V_PARAM01", "string");
        	this.dsExecAppr.addColumn("V_PARAM02", "string");
        	this.dsExecAppr.addColumn("V_PARAM03", "string");
        	this.dsExecAppr.addColumn("V_PARAM04", "string");
        	this.dsExecAppr.addColumn("ST_APPR", "string");
        	this.dsExecAppr.addColumn("ID_USER", "string");

        	// 결재관련 상태
        	this.dsSelectAppr = new Dataset();
        	this.dsSelectAppr.addColumn("ID_AP", "string");
        	this.dsSelectAppr.addColumn("ID_USER", "string");

        	// 결재선 그리드
        	this.dsAplines = new Dataset();
        	this.dsAplines.addColumn("ID_AP", "string");

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
        	// 싱글폼(Dataset) 필수입력 체크
        	//if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return;

        	this.dsDelete.clearData();

        	//var flag = this.gfnGetFormStatus(this);

        	if(this.dsList.rowcount > 0) {
        		var nrow = this.dsDelete.addRow();
        		this.dsDelete.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	}

        	if (this.dsDelete.rowcount == 0) return;

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
        	// 싱글폼(Dataset) 필수입력 체크
        	if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return;

        	this.dsUpdate.clearData();

        	var flag = this.gfnGetFormStatus(this);

        	if(flag == "U") {
        		var nrow = this.dsUpdate.addRow();

        		this.dsUpdate.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        		this.dsUpdate.setColumn(nrow, "DS_ORDER", this.dsList.getColumn(0, "DS_ORDER"));
        		this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        		this.dsUpdate.setColumn(nrow, "CD_LICCOST", this.dsList.getColumn(0, "CD_LICCOST"));
        		this.dsUpdate.setColumn(nrow, "DT_DELIVERY", this.dsList.getColumn(0, "DT_DELIVERY"));
        		this.dsUpdate.setColumn(nrow, "RT_TAX", this.dsList.getColumn(0, "RT_TAX"));
        		this.dsUpdate.setColumn(nrow, "RT_TAXFREE", this.dsList.getColumn(0, "RT_TAXFREE"));
        		this.dsUpdate.setColumn(nrow, "YN_E_CONT", this.dsList.getColumn(0, "YN_E_CONT"));
        		this.dsUpdate.setColumn(nrow, "AM_CONTPRO", this.dsList.getColumn(0, "AM_CONTPRO"));
        		this.dsUpdate.setColumn(nrow, "AM_CONTVAT", this.dsList.getColumn(0, "AM_CONTVAT"));
        		this.dsUpdate.setColumn(nrow, "TY_TAX", this.dsList.getColumn(0, "TY_TAX"));
        		this.dsUpdate.setColumn(nrow, "CD_PAYMENT", this.dsList.getColumn(0, "CD_PAYMENT"));
        		this.dsUpdate.setColumn(nrow, "CD_DELIVERY", this.dsList.getColumn(0, "CD_DELIVERY"));
        		this.dsUpdate.setColumn(nrow, "CD_ORDER", this.dsList.getColumn(0, "CD_ORDER"));
        		this.dsUpdate.setColumn(nrow, "CD_PAY_CONDITION", this.dsList.getColumn(0, "CD_PAY_CONDITION"));
        		this.dsUpdate.setColumn(nrow, "CD_QUALITY", this.dsList.getColumn(0, "CD_QUALITY"));
        		this.dsUpdate.setColumn(nrow, "CD_PACKING", this.dsList.getColumn(0, "CD_PACKING"));
        		this.dsUpdate.setColumn(nrow, "CD_INCREASE", this.dsList.getColumn(0, "CD_INCREASE"));
        		this.dsUpdate.setColumn(nrow, "CD_H02", this.dsList.getColumn(0, "CD_H02"));
        		this.dsUpdate.setColumn(nrow, "TY_SELECT", this.dsList.getColumn(0, "TY_SELECT"));
        		this.dsUpdate.setColumn(nrow, "ID_DAM", this.dsList.getColumn(0, "ID_DAM"));
        		this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(0, "RM_BIGO"));
        		this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_CONT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfNO_CONT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("계약(PO)번호를 입력하세요.", "fnVaidateCallback");
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
        		if(!this.gfnIsNull(this.dsList.getColumn(0, "TY_TAX")))
        		{
        			if(this.dsList.getColumn(0, "TY_TAX") != "공존"){
        				this.divData.form.divData01.form.txtRT_TAX.set_readonly(true);
        				this.divData.form.divData01.form.txtRT_TAXFREE.set_readonly(true);
        			}
        		}

        		// 확장버튼 활성화 or 비활성화 처리
        		this.fnBtnEnable();	// 결재관련

        		// 결재선 조회
        		this.fnSelectAppr();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "delete") {
        		if (errorCode == 0) {
        			//this.FormBtns.Select.click();
        			this.getParentContext().close(false);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "aplines") {
        		if(this.dsListAplines.rowcount > 0) {
        			this.dxGridAppr.setRealRowSize(0, 24);
        		}
        	}
        	else if (svcID == "apprsel") {	// 결재관련
        		// 링크 통해서 화면이 오픈되었을 경우에 this.fnExec() 실행한다
        		if(this.dsSearch.getColumn(0, "YN_LINK") != "N"){
        			if(this.dsListAppr.rowcount < 1){
        				this.fnApprselnullCallback = function() {
        					this.getParentContext().close(true);
        					return;
        				}
        				this.gfnAlert("품의서를 열수없습니다.", "fnApprselnullCallback");
        			}

        			if(this.dsListAppr.getColumn(0,"ST_APPR") == "05"){
        				this.fnApprselCallback = function() {
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert("결재가 취소되었습니다.", "fnApprselCallback");
        			}else{
        				this.fnExecAppr();
        			}
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}
        	else if(svcID == "execAppr") {	// 결재관련
        		if (errorCode == 0) {
        			// 화면 로드시에 링크 통해서 화면이 오픈되었을경우에만 처리후에 조회한다
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfNO_CONT") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	else if (id == "cfCD_LICCOST"){
        		dsUserParam.setColumn(nrow, "COSTCLASS", "");
        	}

        	return true;
        }

        this.cfCD_LICCOST_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능

        	var cd_costclass = "";
        	var ds_costclass = "";

        	if (arr.length > 0) {
        		cd_costclass = arr[0]["CD_COSTCLASS"];
        		ds_costclass = arr[0]["DS_COSTCLASS"];
        	}

        	this.divData.form.divData01.form.txtCD_COSTCLASS.set_value(cd_costclass);
        	this.divData.form.divData01.form.txtDS_COSTCLASS.set_value(ds_costclass);

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
        		this.dsList.clearData();	// 싱글폼데이터 초기화
        		/*
        		if(e.columnid == "CD_SITE"){
        			this.divSearch.form.ccfNO_CONT.form.fnCodeFindClear();
        		}
        		*/
        	}
        };


        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");	// 폼상태 업데이트


        		if(e.columnid == "TY_TAX")
        		{
        			switch(e.newvalue)
        			{
        				case "과세" :
        					this.dsList.setColumn(0, "RT_TAX", 100);
        					//this.dsList.setColumn(0, "RT_TAXFREE", 0);
        					this.divData.form.divData01.form.txtRT_TAX.set_readonly(true);
        					this.divData.form.divData01.form.txtRT_TAXFREE.set_readonly(true);
        					break;
        				case "면세" :
        					this.dsList.setColumn(0, "RT_TAX", 0);
        					//this.dsList.setColumn(0, "RT_TAXFREE", 100);
        					this.divData.form.divData01.form.txtRT_TAX.set_readonly(true);
        					this.divData.form.divData01.form.txtRT_TAXFREE.set_readonly(true);
        					break;
        				case "공존" :
        					this.divData.form.divData01.form.txtRT_TAX.set_readonly(false);
        					this.divData.form.divData01.form.txtRT_TAXFREE.set_readonly(false);
        					break;
        			}
        		}
        		else if(e.columnid == "RT_TAX")
        		{
        			if(e.newvalue > 100)
        			{
        				this.gfnAlert("100 이하의 숫자로 입력해주십시오.");
        				this.dsList.setColumn(0, "RT_TAX", e.oldvalue);
        				return;
        			}
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(0, "RT_TAXFREE", 100 - e.newvalue);
        			this.dsList.setColumn(0, "AM_CONTVAT", this.dsList.getColumn(0, "AM_CONTPRO") * e.newvalue / 1000);
        			this.dsList.set_enableevent(true);
        		}
        		else if(e.columnid == "RT_TAXFREE")
        		{
        			if(e.newvalue > 100)
        			{
        				this.gfnAlert("100 이하의 숫자로 입력해주십시오.");
        				this.dsList.setColumn(0, "RT_TAXFREE", e.oldvalue);
        				return;
        			}

        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(0, "RT_TAX", 100 - e.newvalue);
        			this.dsList.setColumn(0, "AM_CONTVAT", this.dsList.getColumn(0, "AM_CONTPRO") * (100 - e.newvalue) / 1000);

        			this.dsList.set_enableevent(true);
        		}
        	}
        };


        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "13");

        	// 같은 SP 다중건 조회는 row 추가해서
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(1, "CD_TYPE", "AB");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(2, "CD_TYPE", "AG");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(3, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(3, "CD_TYPE", "53");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(4, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(4, "CD_TYPE", "12");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(5, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(5, "CD_TYPE", "H09");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(6, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(6, "CD_TYPE", "H10");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(7, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(7, "CD_TYPE", "H11");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(8, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(8, "CD_TYPE", "H02");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(9, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(9, "CD_TYPE", "H08");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsYN_E_CONT=combo0 dsCD_PAYMENT=combo1 dsCD_DELIVERY=combo2 dsCD_ORDER=combo3 dsCD_PAY_CONDITION=combo4 dsCD_QUALITY=combo5 dsCD_PACKING=combo6 dsCD_INCREASE=combo7 dsCD_H02=combo8 dsTY_SELECT=combo9";
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
         		//this.divData.form.divData01.form.cboTY_HAJA.set_index(0);
        	}
        };


        // 계약Item내역 버튼 클릭시 팝업화면 호출
        this.fnItem = function(obj,e) {
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.DS_SUBCON = this.ccfNO_CONT.form.DSTextBox.value;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMA_PO_ITEM_DETAIL", "", param);
        }

        // 계약업체관리 버튼 클릭시 팝업화면 호출
        this.fnAddVendor = function(obj,e) {
        	var param = {};
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.DS_SUBCON = this.ccfNO_CONT.form.DSTextBox.value;
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMA_POVENDORADD", "", param);
        }




        //*** 아래는 결재관련 소스 ***//

         // 승인 버튼 클릭 이벤트
         this.fnAprvCmpl = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_CONT");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.ST_APPR = "03";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 430, 210);
        }

         // 반려 버튼 클릭 이벤트
         this.fnAprvCnc = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_CONT");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.ST_APPR = "04";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 430, 210);
        }

         // 결재취소 버튼 클릭 이벤트
         this.fnApCnl = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_CONT");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.ST_APPR = "05";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 430, 210);
        }


        this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		this.getParentContext().close(true);
        	}
        };

         // 결재정보 버튼 클릭 이벤트
         this.fnAprvInf = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsListAppr.getColumn(0, "ID_AP");

        	this.gfnFormOpenNonAuth("DZR", "DZR_APLINES", "", param, 830, 400);
        }


        // 결제상신
         this.fnAprvSang = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;

        	param.ID_AP_TYPE = "DM01";
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_CONT");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.DS_TITLE =  "구매 품의서";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_REQUEST", "fnDialogCallback", param, 900, 650);
         }

         this.fnDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value == true){
        		this.getParentContext().close(true);
        	}
        };

        // 결재상태값 조회
        this.fnApprSel = function() {
        	this.dsSelectAppr.clearData();
        	this.dsSelectAppr.addRow();

        	this.dsSelectAppr.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsSelectAppr.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "apprsel";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "appr_select=dsSelectAppr";
        	var outData     = "dsListAppr=appr_select0";
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

        // 확장버튼 활성화 or 비활성화처리
        this.fnBtnEnable = function() {
        	if(this.gfnIsNull(this.dsListAppr.getColumn(0, "ID_AP"))){	// 결재번호
        		this.btnAprvCmpl.set_enable(false);		// 승인(03)
        		this.btnAprvCnc.set_enable(false);		// 반려(04)
        		this.btnApCnl.set_enable(false);		// 결제취소(05)
        		this.btnAprvInf.set_enable(false);		// 결제정보
        		this.btnAprvSang.set_enable(true);		// 결제상신
        	}else{
        		if(this.dsListAppr.getColumn(0, "ST_APPR") == "01"){	// 결재상태
        			if(this.dsListAppr.getColumn(0, "YN_USER") == "Y"){
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        				}

        				this.btnAprvCnc.set_enable(false);
        				this.btnApCnl.set_enable(true);
        			}else{
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        					this.btnAprvCnc.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        					this.btnAprvCnc.set_enable(false);
        				}

        				this.btnApCnl.set_enable(false);
        			}

        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(false);
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "02"){
        			if(this.dsListAppr.getColumn(0, "YN_USER") == "Y"){
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        				}

        				this.btnAprvCnc.set_enable(false);
        				this.btnApCnl.set_enable(false);
        			}else{
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        					this.btnAprvCnc.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        					this.btnAprvCnc.set_enable(false);
        				}

        				this.btnApCnl.set_enable(false);
        			}

        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(false);
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "03"){
        			this.btnAprvCmpl.set_enable(false);
        			this.btnAprvCnc.set_enable(false);
        			this.btnApCnl.set_enable(false);
        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(false);
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "04"){
        			this.btnAprvCmpl.set_enable(false);
        			this.btnAprvCnc.set_enable(false);
        			this.btnApCnl.set_enable(false);
        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(true);
        			this.btnAprvSang.set_text("재상신");	// 반려 상태일때는 결재상신 버튼이 재상신으로 셋팅한다
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "05"){
        			this.btnAprvCmpl.set_enable(false);
        			this.btnAprvCnc.set_enable(false);
        			this.btnApCnl.set_enable(false);
        			this.btnAprvInf.set_enable(false);
        			this.btnAprvSang.set_enable(true);
        		}
        	}
        }


        /*
         *	결재완료 or 취소 처리
         */
        this.fnExecAppr = function() {

        	this.dsExecAppr.clearData();

        	this.dsExecAppr.addRow();

        	this.dsExecAppr.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsExecAppr.setColumn(0, "V_PARAM01", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExecAppr.setColumn(0, "V_PARAM02", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsExecAppr.setColumn(0, "V_PARAM03", "");
        	this.dsExecAppr.setColumn(0, "V_PARAM04", "");
        	this.dsExecAppr.setColumn(0, "ST_APPR", "02");
        	this.dsExecAppr.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsExecAppr.rowcount == 0) return;

        	var strSvcId    = "execAppr";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execAppr=dsExecAppr";
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
          *	결재선그리드 조회
          */
        this.fnSelectAppr = function() {
        	this.dsAplines.clearData();
        	this.dsAplines.addRow();

        	this.dsAplines.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));

        	var strSvcId    = "aplines";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "aplines=dsAplines";
        	var outData     = "dsListAplines=aplines0";
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
            this.divData.form.divData01.form.sta201.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta221.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta00.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta02.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta04.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta06.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta08.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta11.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta13.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta17.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta19.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta23.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta25.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta29.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta31.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta35.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta37.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta41.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta43.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DMA_PO_DETAIL_APPROVAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
