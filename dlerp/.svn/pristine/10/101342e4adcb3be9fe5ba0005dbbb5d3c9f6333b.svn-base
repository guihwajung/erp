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
                this._setFormPosition(1010,865);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_CONT_DISP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_E_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ORDER_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"FR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"TO_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTPRO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTVAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK_PREV\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"YN_INJISE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INJISE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INJISE_TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CONTGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"RT_CONTGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ASGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ASGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"RT_ASGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_LABORGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LABORGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LABORGUARANTEE_MAN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LABOR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PREPAY_GRNTY\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PREPAY_GRNTY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PREPAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PREPAY1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PREPAY2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DLVPLACE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GISUNG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GISUNGDAYS\" type=\"STRING\" size=\"256\"/><Column id=\"RT_CASH\" type=\"STRING\" size=\"256\"/><Column id=\"RT_BILL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MAT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"QN_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTPRO_PREV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTVAT_PREV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONT_PREV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTPRO_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTVAT_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONT_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"RM_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EDITABLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCCPR_HD_CONTRACT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCCPR_HD_CONTRACT_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_CODE_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DCCPR_CONTAGREE_UPDATE</Col></Row><Row><Col id=\"TARGET\">execcl</Col><Col id=\"SP\">DCCPR_CONTAGREE_UPDATE_CANCEL</Col></Row><Row><Col id=\"TARGET\">send</Col><Col id=\"SP\">DCCPR_CONTRACT_SEND</Col></Row><Row><Col id=\"TARGET\">remake</Col><Col id=\"SP\">DCCPR_CONTRACT_REMAKE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_CONT\"/><Col id=\"SN_SEQ\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_PIL", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">필요</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">DS_CONTMETHOD</Col><Col id=\"DS_FIELD\">계약방법</Col></Row><Row><Col id=\"CD_FIELD\">CD_ACCOUNT</Col><Col id=\"DS_FIELD\">계정코드</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_INJISE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">있음 (현산 : ￦                    , 협력회사 : ￦                    )</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHAJAIHANG", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">있음</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_E_CONT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">전자계약</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">서면계약</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_CONT","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfNO_CONT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfSN_SEQ","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","880","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("계약정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData01","0","sta01:10","990","853",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divTaDa00","0","0","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("14");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta30","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa00.form);
            obj.set_taborder("0");
            obj.set_text("계약번호·차수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa00.addChild(obj.name, obj);

            obj = new Static("sta35","119","0","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa00.addChild(obj.name, obj);

            obj = new Edit("txtNO_CONT_DISP","124","5","251","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa00.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.form.divTaDa00.addChild(obj.name, obj);

            obj = new Static("sta29","562","0","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa00.addChild(obj.name, obj);

            obj = new Static("sta28","438","0","125","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa00.form);
            obj.set_taborder("4");
            obj.set_text("공종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa00.addChild(obj.name, obj);

            obj = new Edit("txtDS_COST","567","5","251","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa00.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.form.divTaDa00.addChild(obj.name, obj);

            obj = new Div("divTaDa01","0","divTaDa00:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("13");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta30","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa01.form);
            obj.set_taborder("0");
            obj.set_text("현장");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.form.divTaDa01.addChild(obj.name, obj);

            obj = new Static("sta35","119","0","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa01.addChild(obj.name, obj);

            obj = new Edit("txDS_SITE","194","5","181","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa01.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.form.divTaDa01.addChild(obj.name, obj);

            obj = new Edit("txtCD_SITE","124","5","65","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa01.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.form.divTaDa01.addChild(obj.name, obj);

            obj = new Static("sta29","562","0","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa01.addChild(obj.name, obj);

            obj = new Div("cfDS_CONTMETHOD","567","5","308","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa01.form);
            obj.getSetter("CodeFindName").set("DSX_CFSITETYPE_CODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData01.form.divTaDa01.addChild(obj.name, obj);

            obj = new Static("sta28","438","0","125","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa01.form);
            obj.set_taborder("6");
            obj.set_text("계약종류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa01.addChild(obj.name, obj);

            obj = new Div("divTaDa02","0","divTaDa01:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("12");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta30","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa02.form);
            obj.set_taborder("0");
            obj.set_text("전자계약 여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa02.addChild(obj.name, obj);

            obj = new Static("sta35","119","0","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa02.addChild(obj.name, obj);

            obj = new Combo("cboYN_E_CONT","124","5","123","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa02.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_innerdataset("dsYN_E_CONT");
            this.divData.form.divData01.form.divTaDa02.addChild(obj.name, obj);

            obj = new Static("sta28","438","0","125","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa02.form);
            obj.set_taborder("3");
            obj.set_text("계약서식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa02.addChild(obj.name, obj);

            obj = new Static("sta29","562","0","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa02.addChild(obj.name, obj);

            obj = new Div("cfNO_FORM","567","5","308","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa02.form);
            obj.getSetter("CodeFindName").set("DSX_CFSITETYPE_CODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData01.form.divTaDa02.addChild(obj.name, obj);

            obj = new Div("divTaDa03","0","divTaDa02:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta30","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa03.form);
            obj.set_taborder("0");
            obj.set_text("발주자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.form.divTaDa03.addChild(obj.name, obj);

            obj = new Static("sta35","119","0","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa03.addChild(obj.name, obj);

            obj = new Static("sta28","438","0","125","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa03.form);
            obj.set_taborder("2");
            obj.set_text("원도급공사명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.form.divTaDa03.addChild(obj.name, obj);

            obj = new Static("sta29","562","0","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa03.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa03.addChild(obj.name, obj);

            obj = new Edit("txtDS_ORDER","124","5","251","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa03.form);
            obj.set_taborder("4");
            this.divData.form.divData01.form.divTaDa03.addChild(obj.name, obj);

            obj = new Edit("txtNM_ORDER_CONT","567","5","251","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa03.form);
            obj.set_taborder("5");
            this.divData.form.divData01.form.divTaDa03.addChild(obj.name, obj);

            obj = new Div("divTaDa04","0","divTaDa03:-1","892","90",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("10");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta36","562","0","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("sta37","562","29","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("sta25","562","58","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("sta20","470","58","93","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("3");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("sta27","470","29","93","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("4");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("sta26","470","0","93","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("5");
            obj.set_text("공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("sta09","438","0","33","88",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("6");
            obj.set_text("계\r\n약\r\n금\r\n액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("sta17","119","58","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("sta16","119","29","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("sta15","119","0","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("sta07","0","58","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("10");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("sta06","0","29","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("11");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("sta05","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("12");
            obj.set_text("수급사업자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","124","5","251","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONT","124","34","251","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("14");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("staDT_GONGSA_range00","234","63","10","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("15");
            obj.set_text("~");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Calendar("tclFR_WORK","124","63","105","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Calendar("tclTO_WORK","249","63","105","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONT","582","63","165","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("18");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTVAT","582","34","165","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("19");
            obj.set_format("9,999");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTPRO","582","5","165","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("20");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("sta00","568","5","17","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("21");
            obj.set_text("￦");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("sta01","568","35","17","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("22");
            obj.set_text("￦");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("sta02","568","65","17","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("23");
            obj.set_text("￦");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Div("divTaDa05","0","divTaDa04:-3","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("18");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta30","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa05.form);
            obj.set_taborder("0");
            obj.set_text("당초계약기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa05.addChild(obj.name, obj);

            obj = new Static("sta35","119","0","763","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa05.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa05.addChild(obj.name, obj);

            obj = new Edit("txtDT_WORK_PREV","124","5","251","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa05.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa05.addChild(obj.name, obj);

            obj = new Div("divTaDa06","0","divTaDa05:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("9");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta30","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa06.form);
            obj.set_taborder("0");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.form.divTaDa06.addChild(obj.name, obj);

            obj = new Static("sta35","119","0","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa06.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa06.addChild(obj.name, obj);

            obj = new Static("sta28","438","0","125","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa06.form);
            obj.set_taborder("2");
            obj.set_text("계약담당자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.form.divTaDa06.addChild(obj.name, obj);

            obj = new Static("sta29","562","0","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa06.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa06.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CONT","125","5","105","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa06.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa06.addChild(obj.name, obj);

            obj = new Div("cfID_DAM","567","5","308","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa06.form);
            obj.getSetter("CodeFindName").set("DSX_CFSITETYPE_CODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData01.form.divTaDa06.addChild(obj.name, obj);

            obj = new Div("divTaDa07","0","divTaDa06:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("8");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe08","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa07.form);
            obj.set_taborder("0");
            obj.set_text("인지세");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.form.divTaDa07.addChild(obj.name, obj);

            obj = new Static("staTaRa08","119","0","763","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa07.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa07.addChild(obj.name, obj);

            obj = new Radio("rdoYN_INJISE","236","5","454","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa07.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsYN_INJISE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divData01.form.divTaDa07.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_INJISE_TARGET","498","5","73","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa07.form);
            obj.set_taborder("3");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa07.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_INJISE","337","5","73","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa07.form);
            obj.set_taborder("4");
            obj.set_format("9,999");
            this.divData.form.divData01.form.divTaDa07.addChild(obj.name, obj);

            obj = new Button("btnINGI",null,"3","100","23","667",null,null,null,null,null,this.divData.form.divData01.form.divTaDa07.form);
            obj.set_taborder("5");
            obj.set_text("인지세 납부기준");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            this.divData.form.divData01.form.divTaDa07.addChild(obj.name, obj);

            obj = new Div("divTaDa08","0","divTaDa07:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("7");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe08","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa08.form);
            obj.set_taborder("0");
            obj.set_text("계약이행보증");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa08.addChild(obj.name, obj);

            obj = new Static("staTaRa08","119","0","763","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa08.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa08.addChild(obj.name, obj);

            obj = new Radio("rdoYN_CONTGUARANTEE","126","5","99","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa08.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsYN_PIL");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divData01.form.divTaDa08.addChild(obj.name, obj);

            obj = new Static("sta03","223","5","56","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa08.form);
            obj.set_taborder("3");
            obj.set_text("(보증율 : ");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa08.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_CONTGUARANTEE","277","5","48","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa08.form);
            obj.set_taborder("4");
            obj.set_format("9,990.00");
            this.divData.form.divData01.form.divTaDa08.addChild(obj.name, obj);

            obj = new Static("sta00","329","5","27","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa08.form);
            obj.set_taborder("5");
            obj.set_text("%)");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa08.addChild(obj.name, obj);

            obj = new Div("divTaDa09","0","divTaDa08:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe08","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa09.form);
            obj.set_taborder("0");
            obj.set_text("하자이행보증");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa09.addChild(obj.name, obj);

            obj = new Static("staTaRa08","119","0","763","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa09.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa09.addChild(obj.name, obj);

            obj = new Radio("rdoYN_ASGUARANTEE","126","5","99","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa09.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsYN_PIL");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divData01.form.divTaDa09.addChild(obj.name, obj);

            obj = new Static("sta00","225","5","39","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa09.form);
            obj.set_taborder("3");
            obj.set_text("(기간 : ");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa09.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_ASGUARANTEE","375","5","48","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa09.form);
            obj.set_taborder("4");
            obj.set_format("9,990.00");
            this.divData.form.divData01.form.divTaDa09.addChild(obj.name, obj);

            obj = new Static("sta01","427","5","20","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa09.form);
            obj.set_taborder("5");
            obj.set_text("%)");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa09.addChild(obj.name, obj);

            obj = new MaskEdit("txtNO_ASGUARANTEE","266","5","48","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa09.form);
            obj.set_taborder("6");
            obj.set_format("9,999");
            this.divData.form.divData01.form.divTaDa09.addChild(obj.name, obj);

            obj = new Static("sta02","319","5","54","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa09.form);
            obj.set_taborder("7");
            obj.set_text("년, 요율 :");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa09.addChild(obj.name, obj);

            obj = new Div("divTaDa10","0","divTaDa09:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe08","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa10.form);
            obj.set_taborder("0");
            obj.set_text("사배책(근재)보험");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa10.addChild(obj.name, obj);

            obj = new Static("staTaRa08","119","0","763","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa10.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa10.addChild(obj.name, obj);

            obj = new Radio("rdoYN_LABORGUARANTEE","126","5","99","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa10.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsYN_PIL");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divData01.form.divTaDa10.addChild(obj.name, obj);

            obj = new Static("sta03","223","5","52","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa10.form);
            obj.set_taborder("3");
            obj.set_text("(1사고당");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa10.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LABORGUARANTEE","274","5","48","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa10.form);
            obj.set_taborder("4");
            obj.set_format("9,999");
            this.divData.form.divData01.form.divTaDa10.addChild(obj.name, obj);

            obj = new Static("sta00","327","5","67","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa10.form);
            obj.set_taborder("5");
            obj.set_text("억원, 1인당");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa10.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LABORGUARANTEE_MAN","394","5","48","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa10.form);
            obj.set_taborder("6");
            obj.set_format("9,999");
            this.divData.form.divData01.form.divTaDa10.addChild(obj.name, obj);

            obj = new Static("sta01","447","5","87","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa10.form);
            obj.set_taborder("7");
            obj.set_text("억원) (노무비 : ");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa10.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LABOR","534","5","93","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa10.form);
            obj.set_taborder("8");
            obj.set_format("9,999");
            this.divData.form.divData01.form.divTaDa10.addChild(obj.name, obj);

            obj = new Static("sta02","631","5","23","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa10.form);
            obj.set_taborder("9");
            obj.set_text("원)");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa10.addChild(obj.name, obj);

            obj = new Div("divTaDa11","0","divTaDa10:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("15");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe08","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa11.form);
            obj.set_taborder("0");
            obj.set_text("선급이행보증");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa11.addChild(obj.name, obj);

            obj = new Static("staTaRa08","119","0","763","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa11.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa11.addChild(obj.name, obj);

            obj = new Radio("rdoYN_PREPAY_GRNTY","126","5","99","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa11.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsYN_PIL");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divData01.form.divTaDa11.addChild(obj.name, obj);

            obj = new Static("sta03","223","5","56","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa11.form);
            obj.set_taborder("3");
            obj.set_text("(보증율 : ");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa11.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_PREPAY_GRNTY","277","5","48","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa11.form);
            obj.set_taborder("4");
            obj.set_format("9,990.0");
            this.divData.form.divData01.form.divTaDa11.addChild(obj.name, obj);

            obj = new Static("sta00","329","5","27","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa11.form);
            obj.set_taborder("5");
            obj.set_text("%)");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa11.addChild(obj.name, obj);

            obj = new Div("divTaDa12","0","divTaDa11:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("16");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe08","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa12.form);
            obj.set_taborder("0");
            obj.set_text("선급금지급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa12.addChild(obj.name, obj);

            obj = new Static("staTaRa08","119","0","763","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa12.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa12.addChild(obj.name, obj);

            obj = new Static("sta03","223","5","67","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa12.form);
            obj.set_taborder("2");
            obj.set_text("(계약체결후");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa12.addChild(obj.name, obj);

            obj = new Radio("rdoYN_PREPAY","126","5","99","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa12.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsHAJAIHANG");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divData01.form.divTaDa12.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_PREPAY1","291","5","48","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa12.form);
            obj.set_taborder("4");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa12.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_PREPAY2","439","5","113","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa12.form);
            obj.set_taborder("5");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa12.addChild(obj.name, obj);

            obj = new Static("sta00","343","5","99","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa12.form);
            obj.set_taborder("6");
            obj.set_text("일 이내에 입금 ￦");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa12.addChild(obj.name, obj);

            obj = new Static("sta01","556","5","34","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa12.form);
            obj.set_taborder("7");
            obj.set_text("원정)");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa12.addChild(obj.name, obj);

            obj = new Div("divTaDa13","0","divTaDa12:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe08","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa13.form);
            obj.set_taborder("0");
            obj.set_text("장소");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.form.divTaDa13.addChild(obj.name, obj);

            obj = new Static("staTaRa08","119","0","763","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa13.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa13.addChild(obj.name, obj);

            obj = new Edit("txtDS_DLVPLACE","125","5","750","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa13.form);
            obj.set_taborder("2");
            this.divData.form.divData01.form.divTaDa13.addChild(obj.name, obj);

            obj = new Div("divTaDa15","0","divTaDa13:-1","892","80",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe06","0","0","120","80",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa15.form);
            obj.set_taborder("0");
            obj.set_text("기성부분금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa15.addChild(obj.name, obj);

            obj = new Static("staTaRa06","119","0","763","80",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa15.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData01.form.divTaDa15.addChild(obj.name, obj);

            obj = new Static("sta05","125","5","63","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa15.form);
            obj.set_taborder("2");
            obj.set_text("(1) 월 기본");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa15.addChild(obj.name, obj);

            obj = new MaskEdit("txtNO_GISUNG","189","5","48","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa15.form);
            obj.set_taborder("3");
            obj.set_format("9,999");
            this.divData.form.divData01.form.divTaDa15.addChild(obj.name, obj);

            obj = new Static("sta01","245","5","20","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa15.form);
            obj.set_taborder("4");
            obj.set_text("회");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa15.addChild(obj.name, obj);

            obj = new Static("sta03","125","28","136","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa15.form);
            obj.set_taborder("5");
            obj.set_text("(2) 목적물 수령일로부터");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa15.addChild(obj.name, obj);

            obj = new MaskEdit("txtNO_GISUNGDAYS","261","28","48","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa15.form);
            obj.set_taborder("6");
            obj.set_format("9,999");
            this.divData.form.divData01.form.divTaDa15.addChild(obj.name, obj);

            obj = new Static("sta00","315","28","45","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa15.form);
            obj.set_taborder("7");
            obj.set_text("일 이내");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa15.addChild(obj.name, obj);

            obj = new Static("sta04","125","50","106","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa15.form);
            obj.set_taborder("8");
            obj.set_text("(3) 지급방법 : 현금");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa15.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_CASH","234","50","48","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa15.form);
            obj.set_taborder("9");
            obj.set_format("9,990.00");
            this.divData.form.divData01.form.divTaDa15.addChild(obj.name, obj);

            obj = new Static("sta02","285","50","45","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa15.form);
            obj.set_taborder("10");
            obj.set_text("% 어음");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa15.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_BILL","327","50","48","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa15.form);
            obj.set_taborder("11");
            obj.set_format("9,990.00");
            this.divData.form.divData01.form.divTaDa15.addChild(obj.name, obj);

            obj = new Static("sta06","381","50","22","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa15.form);
            obj.set_taborder("12");
            obj.set_text("%");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa15.addChild(obj.name, obj);

            obj = new Div("divTaDa16","0","divTaDa15:-1","892","50",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe07","0","0","120","50",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa16.form);
            obj.set_taborder("0");
            obj.set_text("지급자제의\r\n품목 및 수량");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa16.addChild(obj.name, obj);

            obj = new Static("staTaRa07","119","0","763","50",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa16.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa16.addChild(obj.name, obj);

            obj = new Edit("txtDS_MAT","125","15","750","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa16.form);
            obj.set_taborder("2");
            this.divData.form.divData01.form.divTaDa16.addChild(obj.name, obj);

            obj = new Div("divTaDa17","0","divTaDa16:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe08","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa17.form);
            obj.set_taborder("0");
            obj.set_text("지체상금율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa17.addChild(obj.name, obj);

            obj = new Static("staTaRa08","119","0","763","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa17.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa17.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_DELAY","125","5","78","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa17.form);
            obj.set_taborder("2");
            obj.set_format("9,990.00");
            this.divData.form.divData01.form.divTaDa17.addChild(obj.name, obj);

            obj = new Static("sta00","207","5","63","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa17.form);
            obj.set_taborder("3");
            obj.set_text("% / 1일");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa17.addChild(obj.name, obj);

            obj = new Div("divTaDa18","0","divTaDa17:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("17");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe08","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa18.form);
            obj.set_taborder("0");
            obj.set_text("배정물량");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa18.addChild(obj.name, obj);

            obj = new Static("staTaRa08","119","0","763","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa18.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa18.addChild(obj.name, obj);

            obj = new MaskEdit("txtQN_CONT","125","5","251","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa18.form);
            obj.set_taborder("2");
            obj.set_format("9,999");
            this.divData.form.divData01.form.divTaDa18.addChild(obj.name, obj);

            obj = new Div("divTaDa19","0","divTaDa18:-1","892","130",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaRa09","119","0","763","130",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("staTaLe09","0","0","120","130",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("1");
            obj.set_text("계약금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("sta30","126","6","197","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("sta35","126","35","197","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("공급가액");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("sta00","322","6","185","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("4");
            obj.set_text("당초");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("sta01","506","6","185","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("5");
            obj.set_text("변경");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("sta02","690","6","185","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("6");
            obj.set_text("증감");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("sta03","322","35","185","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("sta04","506","35","185","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("sta05","690","35","185","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("sta06","126","64","197","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("부가가치세");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("sta07","322","64","185","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("sta08","506","64","185","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("sta09","690","64","185","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("sta10","126","93","197","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("합계");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("sta11","322","93","185","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("sta12","506","93","185","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Static("sta13","690","93","185","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTPRO_PREV","327","40","175","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("18");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTPRO_TA","511","40","175","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("19");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTPRO_CHG","695","40","175","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("20");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTVAT_PREV","327","69","175","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("21");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTVAT_TA","511","69","175","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("22");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONTVAT_CHG","695","69","175","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("23");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONT_PREV","327","98","175","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("24");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONT_TA","511","98","175","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("25");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CONT_CHG","695","98","175","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa19.form);
            obj.set_taborder("26");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa19.addChild(obj.name, obj);

            obj = new Div("divTaDa20","0","divTaDa19:-1","892","60",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("19");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaRa09","119","0","763","60",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa20.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa20.addChild(obj.name, obj);

            obj = new Static("staTaLe09","0","0","120","60",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa20.form);
            obj.set_taborder("1");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa20.addChild(obj.name, obj);

            obj = new TextArea("txtRM_CONDITION","125","6","750","49",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa20.form);
            obj.set_taborder("2");
            this.divData.form.divData01.form.divTaDa20.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.ccfSN_SEQ.form.CDTextBox","value","dsSearch","SN_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divData01.form.divTaDa15.form.txtNO_GISUNG","value","dsList","NO_GISUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divData01.form.divTaDa15.form.txtNO_GISUNGDAYS","value","dsList","NO_GISUNGDAYS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divData01.form.divTaDa15.form.txtRT_CASH","value","dsList","RT_CASH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divData01.form.divTaDa15.form.txtRT_BILL","value","dsList","RT_BILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.divData01.form.divTaDa17.form.txtRT_DELAY","value","dsList","RT_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divData01.form.divTaDa10.form.rdoYN_LABORGUARANTEE","value","dsList","YN_LABORGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divData01.form.divTaDa10.form.txtAM_LABORGUARANTEE","value","dsList","AM_LABORGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divData01.form.divTaDa10.form.txtAM_LABORGUARANTEE_MAN","value","dsList","AM_LABORGUARANTEE_MAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.divData01.form.divTaDa10.form.txtAM_LABOR","value","dsList","AM_LABOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divData01.form.divTaDa09.form.rdoYN_ASGUARANTEE","value","dsList","YN_ASGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divData01.form.divTaDa09.form.txtRT_ASGUARANTEE","value","dsList","RT_ASGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divData01.form.divTaDa08.form.rdoYN_CONTGUARANTEE","value","dsList","YN_CONTGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divData01.form.divTaDa08.form.txtRT_CONTGUARANTEE","value","dsList","RT_CONTGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divData01.form.divTaDa06.form.tclDT_CONT","value","dsList","DT_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divData01.form.divTaDa04.form.txtDS_VENDOR","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divData01.form.divTaDa04.form.tclFR_WORK","value","dsList","FR_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divData01.form.divTaDa04.form.tclTO_WORK","value","dsList","TO_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divData01.form.divTaDa04.form.txtAM_CONT","value","dsList","AM_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.divData01.form.divTaDa04.form.txtAM_CONTVAT","value","dsList","AM_CONTVAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.divData01.form.divTaDa04.form.txtAM_CONTPRO","value","dsList","AM_CONTPRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divData01.form.divTaDa01.form.txDS_SITE","value","dsList","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData01.form.divTaDa01.form.txtCD_SITE","value","dsList","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divData01.form.divTaDa00.form.txtNO_CONT_DISP","value","dsList","NO_CONT_DISP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divData01.form.divTaDa11.form.rdoYN_PREPAY_GRNTY","value","dsList","YN_PREPAY_GRNTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divData01.form.divTaDa11.form.txtRT_PREPAY_GRNTY","value","dsList","RT_PREPAY_GRNTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divData01.form.divTaDa12.form.txtDS_PREPAY1","value","dsList","DS_PREPAY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divData01.form.divTaDa12.form.txtDS_PREPAY2","value","dsList","DS_PREPAY2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divData01.form.divTaDa20.form.txtRM_CONDITION","value","dsList","RM_CONDITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divData01.form.divTaDa06.form.cfID_DAM.form.CDTextBox","value","dsList","ID_DAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divData01.form.divTaDa06.form.cfID_DAM.form.DSTextBox","value","dsList","DS_DAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divData01.form.divTaDa19.form.txtAM_CONTPRO_PREV","value","dsList","AM_CONTPRO_PREV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divData01.form.divTaDa19.form.txtAM_CONTPRO_TA","value","dsList","AM_CONTPRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divData01.form.divTaDa19.form.txtAM_CONTPRO_CHG","value","dsList","AM_CONTPRO_CHG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divData01.form.divTaDa19.form.txtAM_CONTVAT_PREV","value","dsList","AM_CONTVAT_PREV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divData01.form.divTaDa19.form.txtAM_CONTVAT_TA","value","dsList","AM_CONTVAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divData01.form.divTaDa19.form.txtAM_CONTVAT_CHG","value","dsList","AM_CONTVAT_CHG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.divData01.form.divTaDa19.form.txtAM_CONT_PREV","value","dsList","AM_CONT_PREV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.divData01.form.divTaDa19.form.txtAM_CONT_TA","value","dsList","AM_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.divData01.form.divTaDa19.form.txtAM_CONT_CHG","value","dsList","AM_CONT_CHG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.divData01.form.divTaDa02.form.cboYN_E_CONT","value","dsList","YN_E_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.divData01.form.divTaDa03.form.txtDS_ORDER","value","dsList","DS_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.divData01.form.divTaDa03.form.txtNM_ORDER_CONT","value","dsList","NM_ORDER_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.divData01.form.divTaDa04.form.txtDS_CONT","value","dsList","DS_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.divData01.form.divTaDa05.form.txtDT_WORK_PREV","value","dsList","DT_WORK_PREV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.divData01.form.divTaDa07.form.rdoYN_INJISE","value","dsList","YN_INJISE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.divData01.form.divTaDa07.form.txtAM_INJISE","value","dsList","AM_INJISE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.divData01.form.divTaDa07.form.txtAM_INJISE_TARGET","value","dsList","AM_INJISE_TARGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.divData01.form.divTaDa12.form.rdoYN_PREPAY","value","dsList","YN_PREPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.divData01.form.divTaDa13.form.txtDS_DLVPLACE","value","dsList","DS_DLVPLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.divData01.form.divTaDa16.form.txtDS_MAT","value","dsList","DS_MAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.divData01.form.divTaDa18.form.txtQN_CONT","value","dsList","QN_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divData01.form.divTaDa00.form.txtDS_COST","value","dsList","DS_COST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData01.form.divTaDa01.form.cfDS_CONTMETHOD.form.CDTextBox","value","dsList","DS_CONTMETHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divData01.form.divTaDa01.form.cfDS_CONTMETHOD.form.DSTextBox","value","dsList","DS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.divData01.form.divTaDa02.form.cfNO_FORM.form.CDTextBox","value","dsList","NO_FORM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.divData01.form.divTaDa02.form.cfNO_FORM.form.DSTextBox","value","dsList","DS_FORM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.divData01.form.divTaDa09.form.txtNO_ASGUARANTEE","value","dsList","NO_ASGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCC_CONTRACT_OLD.xfdl", function() {
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

        	//this.fnSetCombo();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_CONT) && !this.gfnIsNull(this.getOwnerFrame().SN_SEQ)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		//this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_CONT);
        		//this.divSearch.form.ccfNO_CONT.form.DSTextBox.set_value(this.getOwnerFrame().DS_SUBCON);
        		this.dsSearch.setColumn(0, "SN_SEQ", this.getOwnerFrame().SN_SEQ);
        		//this.divSearch.form.ccfSN_SEQ.form.DSTextBox.set_value(this.getOwnerFrame().TY_CONT);

        		this.ccfCD_SITE.form.fnCodeFindLoad();
        		this.ccfNO_CONT.form.fnCodeFindLoad();
        		this.ccfSN_SEQ.form.fnCodeFindLoad();

        		this.FormBtns.Select.click();
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
        	this.btnDetail = this.gfnFormButtonAdd("btnDetail", "fnDetail");
        	this.btnStock = this.gfnFormButtonAdd("btnStock", "fnStock");
        	this.btnAddVendor = this.gfnFormButtonAdd("btnAddVendor", "fnAddVendor");
        	this.btnComplete = this.gfnFormButtonAdd("btnComplete", "fnComplete");
        	this.btnCompleteCancel = this.gfnFormButtonAdd("btnCompleteCancel", "fnCompleteCancel");
        	this.btnContFile = this.gfnFormButtonAdd("btnContFile", "fnContFile");
        	this.btnSend = this.gfnFormButtonAdd("btnSend", "fnSend");
        	this.btnSign = this.gfnFormButtonAdd("btnSign", "fnSign");
        	this.btnRemake = this.gfnFormButtonAdd("btnRemake", "fnRemake");
        	this.btnRentalObject = this.gfnFormButtonAdd("btnRentalObject", "fnRentalObject");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_CONT = this.divSearch.form.ccfNO_CONT;
        	this.ccfSN_SEQ = this.divSearch.form.ccfSN_SEQ;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_CONT.CodeFindName = "DCX_CFCONTRACT_01";
        	this.ccfSN_SEQ.CodeFindName = "DCX_CFSNSEQ_01";

        	this.ccfNO_CONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfSN_SEQ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.divData.form.divData01.form.divTaDa01.form.cfDS_CONTMETHOD.CodeFindName = "CF_CODE_DC_50";
        	this.divData.form.divData01.form.divTaDa06.form.cfID_DAM.CodeFindName = "DZX_CFUSER";
        	this.divData.form.divData01.form.divTaDa02.form.cfNO_FORM.CodeFindName = "DCX_CFCONTFORM";

        	this.divData.form.divData01.form.divTaDa02.form.cfNO_FORM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	/*
        	this.divData.form.divData01.form.cfCD_LICCOST.CodeFindName = "DCX_CFLICCOST_01";
        	this.divData.form.divData01.form.cfCD_ACCOUNT.CodeFindName = "DCX_CFCD_ACCOUNT";
        	this.divData.form.divData02.form.cfCD_PAYMENT.CodeFindName = "DMX_CFPAYMENT";
        	this.divData.form.divData02.form.cfCD_CONDITION_DELIVERY.CodeFindName = "DCX_CFDELIVERY";
        	this.divData.form.divData00.form.cfID_SABUN.CodeFindName = "DZX_CFUSER";

        	this.divData.form.divData01.form.cfCD_LICCOST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divData.form.divData01.form.cfCD_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	*/

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_CONT", "string");
        	this.dsSelect.addColumn("SN_SEQ", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("NO_CONT", "string");
        	this.dsSave.addColumn("SN_SEQ", "string");
        	this.dsSave.addColumn("DS_CONT", "string");
        	this.dsSave.addColumn("NO_FORM", "string");
        	this.dsSave.addColumn("YN_E_CONT", "string");
        	this.dsSave.addColumn("FR_WORK", "string");
        	this.dsSave.addColumn("TO_WORK", "string");
        	this.dsSave.addColumn("DT_CONT", "string");
        	this.dsSave.addColumn("AM_CONTPRO", "bigdecimal");
        	this.dsSave.addColumn("AM_CONTVAT", "bigdecimal");
        	this.dsSave.addColumn("AM_CONT", "bigdecimal");
        	this.dsSave.addColumn("ID_DAM", "string");
        	this.dsSave.addColumn("YN_INJISE", "string");
        	this.dsSave.addColumn("AM_INJISE", "bigdecimal");
        	this.dsSave.addColumn("AM_INJISE_TARGET", "bigdecimal");
        	this.dsSave.addColumn("YN_CONTGUARANTEE", "string");
        	this.dsSave.addColumn("RT_CONTGUARANTEE", "bigdecimal");
        	this.dsSave.addColumn("YN_ASGUARANTEE", "string");
        	this.dsSave.addColumn("NO_ASGUARANTEE", "bigdecimal");
        	this.dsSave.addColumn("RT_ASGUARANTEE", "bigdecimal");
        	this.dsSave.addColumn("YN_LABORGUARANTEE", "string");
        	this.dsSave.addColumn("AM_LABORGUARANTEE", "bigdecimal");
        	this.dsSave.addColumn("AM_LABORGUARANTEE_MAN", "bigdecimal");
        	this.dsSave.addColumn("AM_LABOR", "bigdecimal");
        	this.dsSave.addColumn("YN_PREPAY_GRNTY", "string");
        	this.dsSave.addColumn("RT_PREPAY_GRNTY", "bigdecimal");
        	this.dsSave.addColumn("YN_PREPAY", "string");
        	this.dsSave.addColumn("DS_PREPAY1", "string");
        	this.dsSave.addColumn("AM_PREPAY", "string");
        	this.dsSave.addColumn("NO_GISUNG", "string");
        	this.dsSave.addColumn("NO_GISUNGDAYS", "string");
        	this.dsSave.addColumn("RT_CASH", "int");
        	this.dsSave.addColumn("RT_BILL", "int");
        	this.dsSave.addColumn("DS_DLVPLACE", "string");
        	this.dsSave.addColumn("DS_MAT", "string");
        	this.dsSave.addColumn("RT_DELAY", "bigdecimal");
        	this.dsSave.addColumn("RM_CONDITION", "string");
        	this.dsSave.addColumn("DS_ORDER", "string");
        	this.dsSave.addColumn("NM_ORDER_CONT", "string");
        	this.dsSave.addColumn("QN_CONT", "bigdecimal");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("NO_CONT", "string");
        	this.dsExec.addColumn("SN_SEQ", "string");
        	this.dsExec.addColumn("DT_AGREE", "string");
        	this.dsExec.addColumn("YN_FORCE", "string");
        	this.dsExec.addColumn("YN_MSG", "string");
        	this.dsExec.addColumn("ID_USER", "string");

        	this.dsExeccl = new Dataset();
        	this.dsExeccl.addColumn("NO_CONT", "string");
        	this.dsExeccl.addColumn("SN_SEQ", "string");
        	this.dsExeccl.addColumn("DS_CANCELREASON", "string");

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

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 싱글폼(Dataset) 필수입력 체크
        	//if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return;
        	//if (!this.gfnDataValidate(this.dsList)) return;

        	this.dsSave.clearData();

        	var flag = this.gfnGetFormStatus(this);

        	if(flag == "U") {
        		var nrow = this.dsSave.addRow();

        		this.dsSave.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        		this.dsSave.setColumn(nrow, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        		this.dsSave.setColumn(nrow, "DS_CONT", this.dsList.getColumn(0, "DS_CONT"));
        		this.dsSave.setColumn(nrow, "NO_FORM", this.dsList.getColumn(0, "NO_FORM"));
        		this.dsSave.setColumn(nrow, "YN_E_CONT", this.dsList.getColumn(0, "YN_E_CONT"));
        		this.dsSave.setColumn(nrow, "FR_WORK", this.dsList.getColumn(0, "FR_WORK"));
        		this.dsSave.setColumn(nrow, "TO_WORK", this.dsList.getColumn(0, "TO_WORK"));
        		this.dsSave.setColumn(nrow, "DT_CONT", this.dsList.getColumn(0, "DT_CONT"));
        		this.dsSave.setColumn(nrow, "AM_CONTPRO", this.dsList.getColumn(0, "AM_CONTPRO"));
        		this.dsSave.setColumn(nrow, "AM_CONTVAT", this.dsList.getColumn(0, "AM_CONTVAT"));
        		this.dsSave.setColumn(nrow, "AM_CONT", this.dsList.getColumn(0, "AM_CONT"));
        		this.dsSave.setColumn(nrow, "ID_DAM", this.dsList.getColumn(0, "ID_DAM"));
        		this.dsSave.setColumn(nrow, "YN_INJISE", this.dsList.getColumn(0, "YN_INJISE"));
        		this.dsSave.setColumn(nrow, "AM_INJISE", this.dsList.getColumn(0, "AM_INJISE"));
        		this.dsSave.setColumn(nrow, "AM_INJISE_TARGET", this.dsList.getColumn(0, "AM_INJISE_TARGET"));
        		this.dsSave.setColumn(nrow, "YN_CONTGUARANTEE", this.dsList.getColumn(0, "YN_CONTGUARANTEE"));
        		this.dsSave.setColumn(nrow, "RT_CONTGUARANTEE", this.dsList.getColumn(0, "RT_CONTGUARANTEE"));
        		this.dsSave.setColumn(nrow, "YN_ASGUARANTEE", this.dsList.getColumn(0, "YN_ASGUARANTEE"));
        		this.dsSave.setColumn(nrow, "NO_ASGUARANTEE", this.dsList.getColumn(0, "NO_ASGUARANTEE"));
        		this.dsSave.setColumn(nrow, "RT_ASGUARANTEE", this.dsList.getColumn(0, "RT_ASGUARANTEE"));
        		this.dsSave.setColumn(nrow, "YN_LABORGUARANTEE", this.dsList.getColumn(0, "YN_LABORGUARANTEE"));
        		this.dsSave.setColumn(nrow, "AM_LABORGUARANTEE", this.dsList.getColumn(0, "AM_LABORGUARANTEE"));
        		this.dsSave.setColumn(nrow, "AM_LABORGUARANTEE_MAN", this.dsList.getColumn(0, "AM_LABORGUARANTEE_MAN"));
        		this.dsSave.setColumn(nrow, "AM_LABOR", this.dsList.getColumn(0, "AM_LABOR"));
        		this.dsSave.setColumn(nrow, "YN_PREPAY_GRNTY", this.dsList.getColumn(0, "YN_PREPAY_GRNTY"));
        		this.dsSave.setColumn(nrow, "RT_PREPAY_GRNTY", this.dsList.getColumn(0, "RT_PREPAY_GRNTY"));
        		this.dsSave.setColumn(nrow, "YN_PREPAY", this.dsList.getColumn(0, "YN_PREPAY"));
        		this.dsSave.setColumn(nrow, "DS_PREPAY1", this.dsList.getColumn(0, "DS_PREPAY1"));
        		this.dsSave.setColumn(nrow, "AM_PREPAY", this.dsList.getColumn(0, "AM_PREPAY"));
        		this.dsSave.setColumn(nrow, "NO_GISUNG", this.dsList.getColumn(0, "NO_GISUNG"));
        		this.dsSave.setColumn(nrow, "NO_GISUNGDAYS", this.dsList.getColumn(0, "NO_GISUNGDAYS"));
        		this.dsSave.setColumn(nrow, "RT_CASH", this.dsList.getColumn(0, "RT_CASH"));
        		this.dsSave.setColumn(nrow, "RT_BILL", this.dsList.getColumn(0, "RT_BILL"));
        		this.dsSave.setColumn(nrow, "DS_DLVPLACE", this.dsList.getColumn(0, "DS_DLVPLACE"));
        		this.dsSave.setColumn(nrow, "DS_MAT", this.dsList.getColumn(0, "DS_MAT"));
        		this.dsSave.setColumn(nrow, "RT_DELAY", this.dsList.getColumn(0, "RT_DELAY"));
        		this.dsSave.setColumn(nrow, "RM_CONDITION", this.dsList.getColumn(0, "RM_CONDITION"));
        		this.dsSave.setColumn(nrow, "DS_ORDER", this.dsList.getColumn(0, "DS_ORDER"));
        		this.dsSave.setColumn(nrow, "NM_ORDER_CONT", this.dsList.getColumn(0, "NM_ORDER_CONT"));
        		this.dsSave.setColumn(nrow, "QN_CONT", this.dsList.getColumn(0, "QN_CONT"));
        		this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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
        		this.gfnAlert("계약번호를 입력하세요.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0, "SN_SEQ"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfSN_SEQ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("차수를 입력하세요.", "fnVaidateCallback");
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
        		if(this.dsList.rowcount < 1) return;

        		// TY_FORM 값에 따라 화면 특정 데이터 보이거나 보이지 않게 하기(먼저 기본값으로 초기화하고 해당조건에 맞춰 숨긴다)
        		this.divData.form.divData01.form.divTaDa00.set_height(30);
        		this.divData.form.divData01.form.divTaDa01.set_height(30);
        		this.divData.form.divData01.form.divTaDa02.set_height(30);
        		this.divData.form.divData01.form.divTaDa03.set_height(30);
        		this.divData.form.divData01.form.divTaDa04.set_height(90);
        		this.divData.form.divData01.form.divTaDa05.set_height(30);
        		this.divData.form.divData01.form.divTaDa06.set_height(30);
        		this.divData.form.divData01.form.divTaDa07.set_height(30);
        		this.divData.form.divData01.form.divTaDa08.set_height(30);
        		this.divData.form.divData01.form.divTaDa09.set_height(30);
        		this.divData.form.divData01.form.divTaDa10.set_height(30);
        		this.divData.form.divData01.form.divTaDa11.set_height(30);
        		this.divData.form.divData01.form.divTaDa12.set_height(30);
        		this.divData.form.divData01.form.divTaDa13.set_height(30);
        		this.divData.form.divData01.form.divTaDa15.set_height(80);
        		this.divData.form.divData01.form.divTaDa16.set_height(50);
        		this.divData.form.divData01.form.divTaDa17.set_height(30);
        		this.divData.form.divData01.form.divTaDa18.set_height(30);
        		this.divData.form.divData01.form.divTaDa19.set_height(130);
        		this.divData.form.divData01.form.divTaDa20.set_height(60);

        		this.divData.form.divData01.form.resetScroll();

        		if(this.dsList.getColumn(0, "TY_FORM") == "1"){
        			this.divData.form.divData01.form.divTaDa05.set_height(1);
        			this.divData.form.divData01.form.divTaDa16.set_height(1);
        			this.divData.form.divData01.form.divTaDa18.set_height(1);
        			this.divData.form.divData01.form.divTaDa19.set_height(1);

        			this.divData.form.divData01.form.resetScroll();
        		}else if(this.dsList.getColumn(0, "TY_FORM") == "2"){
        			this.divData.form.divData01.form.divTaDa05.set_height(1);
        			this.divData.form.divData01.form.divTaDa11.set_height(1);
        			this.divData.form.divData01.form.divTaDa18.set_height(1);
        			this.divData.form.divData01.form.divTaDa19.set_height(1);

        			this.divData.form.divData01.form.resetScroll();
        		}else if(this.dsList.getColumn(0, "TY_FORM") == "3"){
        			this.divData.form.divData01.form.divTaDa03.set_height(1);
        			this.divData.form.divData01.form.divTaDa05.set_height(1);
        			this.divData.form.divData01.form.divTaDa07.set_height(1);
        			this.divData.form.divData01.form.divTaDa08.set_height(1);
        			this.divData.form.divData01.form.divTaDa09.set_height(1);
        			this.divData.form.divData01.form.divTaDa10.set_height(1);
        			this.divData.form.divData01.form.divTaDa11.set_height(1);
        			this.divData.form.divData01.form.divTaDa12.set_height(1);
        			this.divData.form.divData01.form.divTaDa15.set_height(1);
        			this.divData.form.divData01.form.divTaDa16.set_height(1);
        			this.divData.form.divData01.form.divTaDa17.set_height(1);
        			this.divData.form.divData01.form.divTaDa19.set_height(1);

        			this.divData.form.divData01.form.resetScroll();
        		}else if(this.dsList.getColumn(0, "TY_FORM") == "4"){
        			this.divData.form.divData01.form.divTaDa11.set_height(1);
        			this.divData.form.divData01.form.divTaDa12.set_height(1);
        			this.divData.form.divData01.form.divTaDa13.set_height(1);
        			this.divData.form.divData01.form.divTaDa15.set_height(1);
        			this.divData.form.divData01.form.divTaDa16.set_height(1);
        			this.divData.form.divData01.form.divTaDa17.set_height(1);
        			this.divData.form.divData01.form.divTaDa18.set_height(1);

        			this.divData.form.divData01.form.resetScroll();
        		}


        		// YN_EDITABLE 값에 따라 수정 가능 or 불가능
        		if(this.dsList.getColumn(0, "YN_EDITABLE") == "Y"){
        			this.divData.form.divData01.set_enable(true);
        		}else{
        			this.divData.form.divData01.set_enable(false);
        		}



        		/*
        		// 상태가 C20 이상이면 모든 컬럼 입력 불가
        		var ty_status_fnm = this.dsList.getColumn(0, "TY_STATUS").substr(0,1);
        		var ty_status = this.dsList.getColumn(0, "TY_STATUS").substr(1,2);
        		if(ty_status_fnm == "C" && ty_status >= 20){
        			this.divData.form.divData01.set_enable(false);
        			this.divData.form.divData02.set_enable(false);
        			this.divData.form.divData00.set_enable(false);
        		}else{
        			this.divData.form.divData01.set_enable(true);
        			this.divData.form.divData02.set_enable(true);
        			this.divData.form.divData00.set_enable(true);
        		}

        		//
        		if(this.dsList.getColumn(0, "TY_TAX") == "10"){	// 과세
        			this.dsList.setColumn(0, "RT_VAT", 100);
        			this.divData.form.divData01.form.txtRT_VAT.set_enable(false);
        		}else if(this.dsList.getColumn(0, "TY_TAX") == "20"){	// 면세
        			this.dsList.setColumn(0, "RT_VAT", 0);
        			this.divData.form.divData01.form.txtRT_VAT.set_enable(false);
        		}else if(this.dsList.getColumn(0, "TY_TAX") == "30"){	// 공존
        			this.divData.form.divData01.form.txtRT_VAT.set_enable(true);
        		}
        		*/

        		this.fnBtnCheckAll();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
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
        	else if(svcID == "execcl") {
        		if (errorCode == 0) {
        			this.gfnAlert("계약취소 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "send") {
        		if (errorCode == 0) {
        			this.gfnAlert("협력업체송부 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "remake") {
        		if (errorCode == 0) {
        			this.gfnAlert("재작성 정상 처리되었습니다.");
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
        	else if (id == "ccfSN_SEQ"){
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_CONT"))) {
         			this.gfnAlert("계약번호를 먼저 입력하세요.");
         			return false;
         		}

        		dsUserParam.setColumn(nrow, "VALUE1", this.dsSearch.getColumn(0, "NO_CONT"));
        	}
        	else if (id == "cfNO_FORM"){
         		if (this.gfnIsNull(this.dsList.getColumn(0, "DS_CONTMETHOD"))) {
         			this.gfnAlert("계약종류를 먼저 입력하세요.");
         			return false;
         		}

        		dsUserParam.setColumn(nrow, "TY_CONT", this.dsList.getColumn(0, "DS_CONTMETHOD"));
        		dsUserParam.setColumn(nrow, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        	}
        	/*
        	else if (id == "cfCD_LICCOST"){
        		dsUserParam.setColumn(nrow, "COSTCLASS", "");
        	}
        	else if (id == "cfCD_ACCOUNT"){
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}

        		dsUserParam.setColumn(nrow, "TY_CONTH", this.dsList.getColumn(0, "DS_CONTMETHOD"));
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	*/
        	return true;
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

        		if(e.columnid == "CD_SITE"){
        			this.divSearch.form.ccfNO_CONT.form.fnCodeFindClear();
        		}else if(e.columnid == "NO_CONT"){
        			this.divSearch.form.ccfSN_SEQ.form.fnCodeFindClear();
        		}
        	}
        };


        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");	// 폼상태 업데이트

        		if(e.columnid == "AM_CONTVAT"){	// 부가세
        			this.dsList.setColumn(e.row, "AM_CONT", nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONTPRO"),0) + nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONTVAT"),0));
        		}else if(e.columnid == "AM_INJISE"){	// 인지세
        			this.dsList.setColumn(e.row, "AM_INJISE_TARGET", nexacro.toNumber(this.dsList.getColumn(e.row, "AM_INJISE"),0));
        		}



        		/*
        		if(this.gfnGetFormStatus(this) != "I") {
        			this.gfnSetFormStatus(this, "U");	// 폼상태 업데이트
        		}
        		*/

        		/*
        		// 컬럼 값 변경시 자동 계산처리
        		if(e.columnid == "AM_CONTVAT"){	// 부가세
        			this.dsList.setColumn(e.row, "AM_CONT", nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONTPRO"),0) + nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONTVAT"),0));
        		}else if(e.columnid == "AM_CONT"){	// 합계
        			this.dsList.setColumn(e.row, "AM_CONTGUARANTEE", nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONT"),0) * (nexacro.toNumber(this.dsList.getColumn(e.row, "RT_CONTGUARANTEE"),0) * 0.01));
        			this.dsList.setColumn(e.row, "AM_ASGUARANTEE", nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONT"),0) * (nexacro.toNumber(this.dsList.getColumn(e.row, "RT_ASGUARANTEE"),0) * 0.01));
        		}else if(e.columnid == "RT_VAT"){	// 과세율
        			this.dsList.setColumn(e.row, "AM_CONTVAT", nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONTPRO"),0) * (nexacro.toNumber(this.dsList.getColumn(e.row, "RT_VAT"),0) * 0.001));
        		}else if(e.columnid == "RT_CONTGUARANTEE"){	// 계약보증금율
        			this.dsList.setColumn(e.row, "AM_CONTGUARANTEE", nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONT"),0) * (nexacro.toNumber(this.dsList.getColumn(e.row, "RT_CONTGUARANTEE"),0) * 0.01));
        		}else if(e.columnid == "RT_ASGUARANTEE"){	// 하자보증금율
        			this.dsList.setColumn(e.row, "AM_ASGUARANTEE", nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONT"),0) * (nexacro.toNumber(this.dsList.getColumn(e.row, "RT_ASGUARANTEE"),0) * 0.01));
        		}else if(e.columnid == "TY_TAX"){	// 계약구분/과세구분
        			if(this.dsList.getColumn(e.row, "TY_TAX") == "10"){	// 과세
        				this.dsList.setColumn(e.row, "RT_VAT", 100);
        				this.divData.form.divData01.form.txtRT_VAT.set_enable(false);
        			}else if(this.dsList.getColumn(e.row, "TY_TAX") == "20"){	// 면세
        				this.dsList.setColumn(e.row, "RT_VAT", 0);
        				this.divData.form.divData01.form.txtRT_VAT.set_enable(false);
        			}else if(this.dsList.getColumn(e.row, "TY_TAX") == "30"){	// 공존
        				this.divData.form.divData01.form.txtRT_VAT.set_enable(true);
        			}
        		}
        		*/
        	}
        };

        /*
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "13");

        	// 같은 SP 다중건 조회는 row 추가해서
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(1, "CD_TYPE", "50");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsDS_CONTMETHOD=combo0 dsTY_TAX=combo1";
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


        // 계약방법 콤보 값 변경시 계정코드 코드파인드 null로 초기화
        this.divData_divData01_cboDS_CONTMETHOD_onitemchanged = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
        {
        	this.dsList.setColumn(0, "CD_ACCOUNT", "");
        	this.dsList.setColumn(0, "DS_ACCOUNT2", "");
        };
        */


        // 임대차목적물 버튼 클릭시 팝업화면 호출
        this.fnRentalObject = function(obj,e) {
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.SN_SEQ = this.dsSearch.getColumn(0, "SN_SEQ");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_RENTAL_OBJECT", "", param, 1130, 620);
        }

        // 계약내역 버튼 클릭시 팝업화면 호출
        this.fnDetail = function(obj,e) {
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.NO_HADOCONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.DS_HADOCONT = this.ccfNO_CONT.form.DSTextBox.value;
        	param.SN_SEQ = this.dsSearch.getColumn(0, "SN_SEQ");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_REQDETAILSAV", "", param);
        }

        // 증권관리 버튼 클릭시 팝업화면 호출
        this.fnStock = function(obj,e) {
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.DS_CONT = this.ccfNO_CONT.form.DSTextBox.value;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_STOCKMR", "", param);
        }

        // 업체추가 버튼 클릭시 팝업화면 호출
        this.fnAddVendor = function(obj,e) {
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
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


        // 계약완료처리
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

        //계약취소 버튼
        this.fnCompleteCancel = function(obj, e) {
            this.gfnConfirm("계약취소처리 하시겠습니까?", "fnCompleteCancel_Callback");
        }

        this.fnCompleteCancel_Callback = function(strId, val) {
        	if (val == false) {
        		return false;
        	}
        	this.dsExeccl.clearData();
        	this.dsExeccl.addRow();

        	this.dsExeccl.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsExeccl.setColumn(0, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        	this.dsExeccl.setColumn(0, "DS_CANCELREASON", "");

        	var strSvcId = "execcl";
        	var strSvcType = "save";
        	var inProc = "_dsProc";
        	var inData  = "execcl=dsExeccl";
        	var outData = "";
        	var strArg = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
        		strSvcType, // transaction을 요청할 구분
        		inProc, // Procedure 정보 Dataset 이름
        		inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
        		callBackFnc); // 통신방법 정의 [생략가능]

        }

        // 계약내역 버튼 클릭시 팝업화면 호출
        this.fnContFile = function(obj,e) {
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.SN_SEQ = this.dsSearch.getColumn(0, "SN_SEQ");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_CONTRACTFILE", "", param);
        }

        // 업체송부 버튼 클릭 이벤트
        this.fnSend = function(obj,e) {
        	this.gfnConfirm("계약서를 협력업체에게 송부하시겠습니까?","fnSend_callback");
        }

        this.fnSend_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsSend = new Dataset();
        		this.dsSend.addColumn("NO_CONT", "string");
        		this.dsSend.addColumn("SN_SEQ", "string");
        		this.dsSend.addColumn("TY_GUBUN", "string");

        		this.dsSend.clearData();
        		var nrow = this.dsSend.addRow();

        		this.dsSend.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        		this.dsSend.setColumn(nrow, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        		this.dsSend.setColumn(nrow, "TY_GUBUN", "1");

        		var strSvcId = "send";
        		var strSvcType = "save";
        		var inProc = "_dsProc";
        		var inData  = "send=dsSend";
        		var outData = "";
        		var strArg = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
        			strSvcType, // transaction을 요청할 구분
        			inProc, // Procedure 정보 Dataset 이름
        			inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        			outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        			strArg, // 입력값으로 보낼 arguments, strFormData="20120607"
        			callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        // 본사서명 버튼 클릭 이벤트
        this.fnSign = function(obj,e) {
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.SN_SEQ = this.dsSearch.getColumn(0, "SN_SEQ");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_CONTRACT_SIGN", "", param, 1100, 600);
        }

        // 재작성 버튼 클릭 이벤트
        this.fnRemake = function(obj,e) {
        	this.gfnConfirm("재작성을 진행하시겠습니까?","fnRemake_callback");
        }

        this.fnRemake_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsRemake = new Dataset();
        		this.dsRemake.addColumn("NO_CONT", "string");
        		this.dsRemake.addColumn("SN_SEQ", "string");
        		this.dsRemake.addColumn("TY_GUBUN", "string");

        		this.dsRemake.clearData();
        		var nrow = this.dsRemake.addRow();

        		this.dsRemake.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        		this.dsRemake.setColumn(nrow, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        		this.dsRemake.setColumn(nrow, "TY_GUBUN", "1");

        		var strSvcId = "remake";
        		var strSvcType = "save";
        		var inProc = "_dsProc";
        		var inData  = "remake=dsRemake";
        		var outData = "";
        		var strArg = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
        			strSvcType, // transaction을 요청할 구분
        			inProc, // Procedure 정보 Dataset 이름
        			inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        			outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        			strArg, // 입력값으로 보낼 arguments, strFormData="20120607"
        			callBackFnc); // 통신방법 정의 [생략가능]

        	}
        }

        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btnDetail, this.dsList);
        	this.gfnBtnCheck(this.btnStock, this.dsList);
        	this.gfnBtnCheck(this.btnAddVendor, this.dsList);
        	this.gfnBtnCheck(this.btnComplete, this.dsList);
        	this.gfnBtnCheck(this.btnCompleteCancel, this.dsList);
        	this.gfnBtnCheck(this.btnContFile, this.dsList);
        	this.gfnBtnCheck(this.btnSend, this.dsList);
        	this.gfnBtnCheck(this.btnSign, this.dsList);
        	this.gfnBtnCheck(this.btnRemake, this.dsList);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divData01.form.divTaDa07.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.divData01.form.divTaDa07.form.btnINGI.addEventHandler("onclick",this.divData_btn00_onclick,this);
            this.divData.form.divData01.form.divTaDa08.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.divData01.form.divTaDa09.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.divData01.form.divTaDa10.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.divData01.form.divTaDa11.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.divData01.form.divTaDa12.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.divData01.form.divTaDa13.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCC_CONTRACT_OLD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
