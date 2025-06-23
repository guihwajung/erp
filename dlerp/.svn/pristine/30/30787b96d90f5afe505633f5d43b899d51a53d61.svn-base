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
            this.set_titletext("발주서상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_PR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"STRING\" size=\"256\"/><Column id=\"YN_E_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTPRO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"ID_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAXFREE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTVAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAY_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_INCREASE\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_QUALITY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_H02\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PACKING\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SELECT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PURCHASE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMAPR_PO_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DMAPR_PO_DETAIL_UPDATE</Col></Row><Row><Col id=\"SP\">DMAPR_PO_DETAIL_DELETE</Col><Col id=\"TARGET\">delete</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_CODE_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">req</Col><Col id=\"SP\">DMAPR_PO_REQUEST</Col></Row><Row><Col id=\"TARGET\">req_cancel</Col><Col id=\"SP\">DMAPR_PO_REQUEST_CANCEL</Col></Row><Row><Col id=\"TARGET\">po_cancel</Col><Col id=\"SP\">DCBPR_BIDTOPO_CANCEL</Col></Row><Row><Col id=\"TARGET\">select_d</Col><Col id=\"SP\">DMAPR_PRECONTRACT_HADODETAIL_DX_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_CONT\"/><Col id=\"SN_SEQ\"/></Row></Rows>");
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


            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_PR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"STRING\" size=\"256\"/><Column id=\"YN_E_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTPRO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"ID_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAXFREE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTVAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAY_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_INCREASE\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_QUALITY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_H02\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PACKING\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SELECT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_PURCHASE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.getSetter("CodeFindName").set("DCX_CFPRECONTRACT");
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

            obj = new Static("sta02","0","0","1165","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("발주서상세정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData01","0","sta02:10","1170","180",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta201","0","0","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj.set_text("발주(PR)번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta202","0","sta201:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("부문");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta203","0","sta202:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("3");
            obj.set_text("(대표)거래처");
            obj.set_cssclass("sta_WF_tablelabelE");
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

            obj = new Static("staNO_BID","776","0","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("7");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta231","staNO_BID:-1","0","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtNO_PR","sta201:5","5","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta00","388","0","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_text("발주명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta01","497","0","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta02","388","29","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("14");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta03","497","29","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta04","776","29","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("16");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta05","885","29","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta06","388","58","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("18");
            obj.set_text("과세율");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta07","497","58","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta08","776","58","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("20");
            obj.set_text("면세율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta09","885","58","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta10","885","87","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta11","776","87","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("23");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta12","497","87","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta13","388","87","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("25");
            obj.set_text("공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta14","109","87","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta15","0","87","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("27");
            obj.set_text("계약금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta16","885","116","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta17","776","116","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("29");
            obj.set_text("승인요청금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta18","497","116","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta19","388","116","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("31");
            obj.set_text("예산금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta20","109","116","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta21","0","116","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("33");
            obj.set_text("도급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta22","885","145","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta23","776","145","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("35");
            obj.set_text("과세구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta24","497","145","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta25","388","145","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("37");
            obj.set_text("납기일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta26","109","145","280","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta27","0","145","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("39");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtNO_BID","staNO_BID:5","5","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_ORDER","503","5","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("40");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("cfCD_LICCOST","503","34","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("DMX_CFLICCOST");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR","115","63","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("DSX_CFSITETYPE_CODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("42");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("cfID_DAM","staNO_BID:5","34","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("DSX_CFSITETYPE_CODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONT","115","92","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("43");
            obj.set_format("9,999");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TT_DOKUB","115","121","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("44");
            obj.set_format("9,999");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_TAX","503","63","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("45");
            obj.set_format("#,0.00");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTPRO","503","92","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("46");
            obj.set_format("9,999");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TT_SILHENG","503","121","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("47");
            obj.set_format("9,999");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_DELIVERY","504","150","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("48");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_TAXFREE","891","63","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("49");
            obj.set_format("#,0.00");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTVAT","891","92","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("50");
            obj.set_format("9,999");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TT_APPROVE","891","121","268","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("51");
            obj.set_format("9,999");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Radio("crdoTY_TAX","sta23:5","txtAM_TT_APPROVE:9","200","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_TAX");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboYN_E_CONT","115","150","150","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("52");
            obj.set_innerdataset("dsYN_E_CONT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtCD_COSTCLASS","115","34","77","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("53");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_COSTCLASS","195","34","188","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("54");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("divData02","0","divData01:5","1170","300",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divData02.addChild(obj.name, obj);
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

            obj = new BindItem("item37","divData.form.divData01.form.txtNO_PR","value","dsList","NO_PR");
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

            obj = new BindItem("item31","divData.form.divData01.form.txtCD_COSTCLASS","value","dsList","CD_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divData01.form.txtDS_COSTCLASS","value","dsList","DS_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData01.form.crdoTY_TAX","value","dsList","TY_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divData01.form.txtNO_BID","value","dsList","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DMA_PO_DETAIL_VIEW.xfdl", function() {
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
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);

        		// 임시 조치.
        		if(!this.gfnIsNull(this.getOwnerFrame().NO_CONT))
        		{
        			this.dsSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_CONT);
        			this.divSearch.form.ccfNO_CONT.form.DSTextBox.set_value(this.getOwnerFrame().DS_SUBCON);
        			this.FormBtns.Select.click();
        		}
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
        	this.btnItem = this.gfnFormButtonAdd("btnItem", "fnItem");
        	this.btnAddVendor = this.gfnFormButtonAdd("btnAddVendor", "fnAddVendor");
        	this.btnAttach = this.gfnFormButtonAdd("btnAttach", "fnAttach");
        	this.btnEstimation = this.gfnFormButtonAdd("btnEstimation", "fnEstimation");
          	this.btnReq = this.gfnFormButtonAdd("btnReq", "fnReq");
        	this.btnReqCancel = this.gfnFormButtonAdd("btnReqCancel", "fnReqCancel");
        	this.btnPoCancel = this.gfnFormButtonAdd("btnPoCancel", "fnPoCancel");
        	this.btnAttachEtc = this.gfnFormButtonAdd("btnAttachEtc", "fnAttachEtc");
        	this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP");
        	this.btnAPPR = this.gfnFormButtonAdd("btnAPPR", "fnAPPR");
        	this.btnIndirect = this.gfnFormButtonAdd("btnIndirect", "fnIndirect");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_CONT = this.divSearch.form.ccfNO_CONT;

        	this.dxGrid = this.divData.form.divData02.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_CONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.divData.form.divData01.form.cfCD_VENDOR.CodeFindName = "DCX_CFVENDOR_DM";
        	this.divData.form.divData01.form.cfCD_LICCOST.CodeFindName = "DMX_CFLICCOST";
        	this.divData.form.divData01.form.cfID_DAM.CodeFindName = "CF_CODE_DM_H07";

        	this.divData.form.divData01.form.cfCD_LICCOST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divData.form.divData01.form.cfCD_LICCOST.AfterCDTextChanged = "cfCD_LICCOST_AfterCDTextChanged";

        	//this.divData.form.divData01.form.cfCD_LICCOST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.divData.form.divData01.form.cfCD_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList1, "DM", "DMA_PO_DETAIL_VIEW");

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
        	this.dsUpdate.addColumn("CD_PURCHASE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_CONT", "string");

        	this.dsReq = new Dataset();
        	this.dsReq.addColumn("NO_CONT", "string");
        	this.dsReq.addColumn("ID_USER", "string");

        	this.dsPoCancel = new Dataset();
        	this.dsPoCancel.addColumn("CD_SITE", "string");
        	this.dsPoCancel.addColumn("NO_CONT", "string");
        	this.dsPoCancel.addColumn("ID_USER", "string");

        	this.dsDetail = new Dataset();
        	this.dsDetail.addColumn("NO_CONT", "string");
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

        	this.dsDetail.clearData();
        	this.dsDetail.addRow();
        	this.dsDetail.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select_d=dsDetail";
        	var outData     = "dsList=select0 dsList1=select_d0";
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
        		this.dsUpdate.setColumn(nrow, "CD_PURCHASE", this.dsList.getColumn(0, "CD_PURCHASE"));
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
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		if(!this.gfnIsNull(this.dsList.getColumn(0, "TY_TAX")))
        		{
        			if(this.dsList.getColumn(0, "TY_TAX") != "공존"){
        				this.divData.form.divData01.form.txtRT_TAX.set_readonly(true);
        				this.divData.form.divData01.form.txtRT_TAXFREE.set_readonly(true);
        			}
        			this.fnBtnCheckAll();
        		}

        		this.fnSetEnableTySel();
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
        	else if(svcID == "req") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}
        			var msg = "";
        			if(strArg == "req")
        			{
        				msg = "승인요청이 정상처리되었습니다.";
        			}
        			else if(strArg == "cancel")
        			{
        				msg = "승인요청취소가 정상처리되었습니다.";
        			}

        			this.gfnAlert(msg, "fnCallback_callback");
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "po_cancel")
        	{
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.getParentContext().close(true);
        				//this.FormBtns.Select.click();
        			}

        			this.gfnAlert("발주서 삭제가 정상처리되었습니다.", "fnCallback_callback");
        		}
        		else
        		{
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
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "CD_SITE"){
        			this.divSearch.form.ccfNO_CONT.form.fnCodeFindClear();
        		}
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
        		else if(e.columnid == "TY_SELECT")
        		{
        			this.fnSetEnableTySel();
        		}

        	}
        };

        // 입찰일경우 공급가 입력 금지
        this.fnSetEnableTySel = function()
        {
        	if(this.dsList.getColumn(0, "TY_SELECT") == "10"){
        		//this.divData.form.divData01.form.txtAM_CONTPRO.set_readonly(true);
        	}else{
        		//this.divData.form.divData01.form.txtAM_CONTPRO.set_readonly(false);
        	}

        }

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

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(10, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(10, "CD_TYPE", "H03");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsYN_E_CONT=combo0 dsCD_PAYMENT=combo1 dsCD_DELIVERY=combo2 dsCD_ORDER=combo3 dsCD_PAY_CONDITION=combo4 dsCD_QUALITY=combo5 dsCD_PACKING=combo6 dsCD_INCREASE=combo7 dsCD_H02=combo8 dsTY_SELECT=combo9 dsCD_PURCHASE=combo10";
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



        // 낙찰사입찰내역 버튼 클릭시 팝업화면 호출
        this.fnEstimation = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.NO_BID = this.dsList.getColumn(0, "NO_BID");
        	param.DS_SUBCON = this.dsList.getColumn(0, "DS_BID");
        	param.NO_PR = this.dsList.getColumn(0, "NO_PR");
        	param.DS_PR = this.dsList.getColumn(0, "DS_PR");

        	this.gfnFormOpen("DCB", "DCB_ESTIMATIONVENDORSAV_RFQ", "", param);
        }


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

        this.fnAttach = function() {
        	//if (!this.fnSelectValidate()) return false;
        	var param = {};
        	param.NO_BID = this.dsList.getColumn(0, "NO_BID");
        	//param.DS_SUBCON = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;
        	param.CD_VENDOR = this.dsList.getColumn(0, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(0, "DS_VENDOR");
        	//param.NO_PR = this.dsList.getColumn(this.dsList.rowposition, "NO_PR");
        	//param.ADDFILE_NO = this.dsList.getColumn(this.dsList.rowposition, "ADDFILE_NO");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_ESTIMATION_DOCUMENT_LIST", "", param, 1000, 600);

        	//this.fnSelectEPS("B");	// B : 입찰참여회사 첨부파일조회
        }

        // 승인요청 버튼 클릭 이벤트
        this.fnReq = function(obj,e) {
        	if(!this.fnSelectValidate()) return;

        	this.gfnConfirm("승인요청을 진행하시겠습니까?", "fnReq_callback");
        }

        this.fnReq_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnExecuteReq("req");
        	}
        }

        // 승인요청취소 버튼 클릭 이벤트
        this.fnReqCancel = function(obj,e) {
        	if(!this.fnSelectValidate()) return;

        	this.gfnConfirm("승인요청취소를 진행하시겠습니까?", "fnReqCancel_callback");
        }

        this.fnReqCancel_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnExecuteReq("cancel");
        	}
        }

        this.fnExecuteReq = function(gubun)
        {
        	this.dsReq.clearData();
        	var nrow = this.dsReq.addRow();

        	this.dsReq.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsReq.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "req";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "";

        	if(gubun == "req") inData = "req=dsReq";
        	else if(gubun == "cancel") inData = "req_cancel=dsReq";

        	var outData     = "";
        	var strArg      = gubun;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        // 발주서삭제 버튼 클릭 이벤트
        this.fnPoCancel = function(obj,e) {
        	if(!this.fnSelectValidate()) return;

        	this.gfnConfirm("발주서 삭제를 진행하시겠습니까?", "fnPoCancel_callback");
        }

        this.fnPoCancel_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsPoCancel.clearData();
        		var nrow = this.dsPoCancel.addRow();

        		this.dsPoCancel.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsPoCancel.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        		this.dsPoCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		var strSvcId    = "po_cancel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "po_cancel=dsPoCancel";
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
        }

        this.fnAttachEtc = function(obj,e) {
        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_CONT"))) return;

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC80";
        	fileManager.CD_DIR = [ this.dsSearch.getColumn(0, "NO_CONT") ];
        	// CD_DIR 만 지정시 CD_DIR 배열 순대로 키1,키2,키3 까지 자동지정
        	// 저장되는 디렉토리와 키값이 다른경우 CD_REF 추가로 사용
        	//fileManager.CD_REF = [ "A1" ];
        	// 권한 및 상태에 따라 업로드,삭제 가능여부 지정 (기본: true)

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        }

        this.fnAPP = function(obj,e) {
        	var param = {};

        	param.PARAM01 = this.dsSearch.getColumn(0,"CD_SITE");
        	param.PARAM02 = this.dsSearch.getColumn(0, "NO_CONT");
        	param.ID_AP = this.dsList.getColumn(0, "NO_ELAPDOC");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMA_PO_DETAIL_APP", "fnAprvDialogCallback", param, 1210, 870);

        }


        this.fnAPPR = function(obj,e) {
        	var param = {};

        	param.PARAM01 = this.dsSearch.getColumn(0,"CD_SITE");
        	param.PARAM02 = this.dsSearch.getColumn(0, "NO_CONT");
        	param.ID_AP = this.dsList.getColumn(0, "NO_ELAPDOC");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMA_PO_DETAIL_R_APP", "fnAprvDialogCallback", param, 1210, 870);

        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };


        this.fnIndirect = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0,"CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.DS_SUBCON = this.divSearch.form.ccfNO_CONT.form.DSTextBox.text;

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMA_INDIRECT_APLLY", "fnIndirect_callback", param, 1200, 650);
        }

        this.fnIndirect_callback = function(strID, val)
        {
        	this.FormBtns.Select.click();
        }

        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btnItem, this.dsList);
        	this.gfnBtnCheck(this.btnAddVendor , this.dsList);
        	this.gfnBtnCheck(this.btnAttach, this.dsList);
        	this.gfnBtnCheck(this.btnEstimation, this.dsList);
        	this.gfnBtnCheck(this.btnReq, this.dsList);
        	this.gfnBtnCheck(this.btnReqCancel , this.dsList);
        	this.gfnBtnCheck(this.btnAttachEtc, this.dsList);
        	this.gfnBtnCheck(this.btnAPP, this.dsList);
        	this.gfnBtnCheck(this.btnIndirect, this.dsList);
        	this.gfnBtnCheck(this.btnPoCancel, this.dsList);
        }
        this.divData_divData01_tclDT_DELIVERY_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divData01.form.sta201.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.staNO_BID.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
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
            this.divData.form.divData01.form.tclDT_DELIVERY.addEventHandler("onchanged",this.divData_divData01_tclDT_DELIVERY_onchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DMA_PO_DETAIL_VIEW.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
