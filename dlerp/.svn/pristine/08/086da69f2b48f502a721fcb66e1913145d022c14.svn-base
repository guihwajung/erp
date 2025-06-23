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
                this._setFormPosition(920,1110);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_CONT_DISP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_E_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PARTNERSIGN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ORDER_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"FR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"TO_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTPRO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTVAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK_PREV\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"ID_EMAIL_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"YN_INJISE\" type=\"STRING\" size=\"1\"/><Column id=\"YN_E_INJISE\" type=\"STRING\" size=\"1\"/><Column id=\"AM_INJISE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INJISE_INIT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INJISE_TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INJISE_TARGET_MOD\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INJISE_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PAYGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PAYGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CONTGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"RT_CONTGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ASGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ASGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"RT_ASGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_LABORGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LABORGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LABORGUARANTEE_MAN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LABOR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PREPAY_GRNTY\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PREPAY_GRNTY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PREPAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PREPAY1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PREPAY2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DLVPLACE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GISUNG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GISUNGDAYS\" type=\"STRING\" size=\"256\"/><Column id=\"RT_CASH\" type=\"STRING\" size=\"256\"/><Column id=\"RT_BILL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MAT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"QN_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTPRO_PREV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTVAT_PREV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONT_PREV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTPRO_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTVAT_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONT_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"RM_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EDITABLE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONDITION_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CHANGEREASON\" type=\"STRING\" size=\"1000\"/><Column id=\"TY_CONTCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYPRO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PREPAYVAT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ETC_FILE_EDITABLE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PR\" type=\"STRING\" size=\"256\"/><Column id=\"GW_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GW_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BUYBACK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BUYBACK\" type=\"STRING\" size=\"256\"/><Column id=\"RM_CONTGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"RM_ASGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"RM_LABORGUARANTEE\" type=\"STRING\" size=\"256\"/><Column id=\"RM_PREPAY_GRNTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCCPR_HD_CONTRACT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCCPR_HD_CONTRACT_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_CODE_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DCCPR_CONTAGREE_UPDATE</Col></Row><Row><Col id=\"TARGET\">execcl</Col><Col id=\"SP\">DCCPR_CONTAGREE_UPDATE_CANCEL</Col></Row><Row><Col id=\"TARGET\">send</Col><Col id=\"SP\">DCCPR_CONTRACT_SEND</Col></Row><Row><Col id=\"TARGET\">remake</Col><Col id=\"SP\">DCCPR_CONTRACT_REMAKE</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCCPR_SIGN_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCCPR_SIGN_UPDATE</Col></Row><Row><Col id=\"SP\">DCBPR_APP_DC06_CHK</Col><Col id=\"TARGET\">appChk</Col></Row><Row><Col id=\"SP\">DCBPR_APP_DC06_SELECT</Col><Col id=\"TARGET\">appSelect</Col></Row><Row><Col id=\"TARGET\">execEquipInit</Col><Col id=\"SP\">DCCPR_CONT_EQUIP_FILE_INIT_INSERT</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">있음 (납부 : ￦                    , 미납부 : ￦                    ,업체 : ￦                    )</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHAJAIHANG", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">있음</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_E_CONT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">전자계약</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">서면계약</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_PARTNERSIGN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">공동사서명</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">공동사서명제외</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DANGA", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">T</Col><Col id=\"VALUE\">총액</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">단가</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSign", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_BUYBACK", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">가</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_E_INJISE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">예 </Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_CONT","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFCONTRACT_01");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfNO_CONT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfSN_SEQ","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFSNSEQ_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
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

            obj = new Div("divData01","0","sta01:10",null,null,"0","0",null,null,null,null,this.divData.form);
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

            obj = new Edit("txtNO_CONT_DISP","124","5","183","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa00.form);
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
            obj.set_text("공종/계약구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa00.addChild(obj.name, obj);

            obj = new Edit("txtDS_COST","567","5","183","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa00.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.form.divTaDa00.addChild(obj.name, obj);

            obj = new Combo("cboTY_CONTCATEGORY","752","5","123","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa00.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_innerdataset("dsTY_DANGA");
            this.divData.form.divData01.form.divTaDa00.addChild(obj.name, obj);

            obj = new Edit("txtDS_GW_STATUS","309","5","124","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa00.form);
            obj.set_taborder("7");
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

            obj = new Edit("txDS_SITE","194","5","238","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa01.form);
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
            obj.getSetter("CodeFindName").set("CF_CODE_DC_50");
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
            obj.set_text("계약방법/공동서명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa02.addChild(obj.name, obj);

            obj = new Static("sta35","119","0","320","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa02.addChild(obj.name, obj);

            obj = new Combo("cboYN_E_CONT","124","5","83","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa02.form);
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
            obj.getSetter("CodeFindName").set("DCX_CFCONTFORM");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData01.form.divTaDa02.addChild(obj.name, obj);

            obj = new Combo("cboYN_PARTNERSIGN","209","5","120","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa02.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_innerdataset("dsYN_PARTNERSIGN");
            this.divData.form.divData01.form.divTaDa02.addChild(obj.name, obj);

            obj = new Button("btnStamp01","cboYN_PARTNERSIGN:2","4","99","23",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa02.form);
            obj.set_taborder("7");
            obj.set_text("공동도급사관리");
            obj.set_cssclass("btnExt");
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

            obj = new Edit("txtDS_ORDER","124","5","308","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa03.form);
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

            obj = new Edit("txtDS_VENDOR","124","5","307","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONT","124","34","307","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
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

            obj = new MaskEdit("txtRT_VAT","810","5","64","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("24");
            obj.set_format("9,990.00");
            obj.set_readonly("true");
            this.divData.form.divData01.form.divTaDa04.addChild(obj.name, obj);

            obj = new Static("sta03","768","4","50","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa04.form);
            obj.set_taborder("25");
            obj.set_text("과세율");
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
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
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

            obj = new Radio("rdoYN_INJISE","staTaLe08:5","5","534","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa07.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsYN_INJISE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divData01.form.divTaDa07.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_INJISE","230","5","73","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa07.form);
            obj.set_taborder("3");
            obj.set_format("9,999");
            obj.set_readonly("true");
            this.divData.form.divData01.form.divTaDa07.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_INJISE_NOT","377","5","73","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa07.form);
            obj.set_taborder("4");
            obj.set_format("9,999");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa07.addChild(obj.name, obj);

            obj = new Button("btnINGI",null,"4","110","23","-101",null,null,null,null,null,this.divData.form.divData01.form.divTaDa07.form);
            obj.set_taborder("5");
            obj.set_text("인지세 납부기준");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_visible("false");
            this.divData.form.divData01.form.divTaDa07.addChild(obj.name, obj);

            obj = new Static("sta20","662","0","103","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa07.form);
            obj.set_taborder("6");
            obj.set_text("전자수입인지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa07.addChild(obj.name, obj);

            obj = new Radio("rdoYN_E_INJISE","776","5","99","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa07.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsYN_E_INJISE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divData01.form.divTaDa07.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_INJISE_TARGET","509","5","73","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa07.form);
            obj.set_taborder("8");
            obj.set_format("9,999");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.divData.form.divData01.form.divTaDa07.addChild(obj.name, obj);

            obj = new Div("divTaDa14","0","divTaDa07:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("20");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe08","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa14.form);
            obj.set_taborder("0");
            obj.set_text("하도대급 지급보증");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa14.addChild(obj.name, obj);

            obj = new Static("staTaRa08","119","0","763","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa14.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa14.addChild(obj.name, obj);

            obj = new Radio("rdoYN_PAYGUARANTEE","126","5","99","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa14.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsYN_PIL");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divData01.form.divTaDa14.addChild(obj.name, obj);

            obj = new Static("sta03","223","5","56","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa14.form);
            obj.set_taborder("3");
            obj.set_text("(보증율 : ");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa14.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_PAYGUARANTEE","277","5","48","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa14.form);
            obj.set_taborder("4");
            obj.set_format("9,990.00");
            this.divData.form.divData01.form.divTaDa14.addChild(obj.name, obj);

            obj = new Static("sta00","329","5","27","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa14.form);
            obj.set_taborder("5");
            obj.set_text("%)");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa14.addChild(obj.name, obj);

            obj = new Div("divTaDa08","0","divTaDa14:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
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
            obj.set_text("");
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

            obj = new Static("staRM_CONTGUARANTEE","sta00:5","5","35","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa08.form);
            obj.set_taborder("6");
            obj.set_text("사유 : ");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa08.addChild(obj.name, obj);

            obj = new Edit("ctxtRM_CONTGUARANTEE","staRM_CONTGUARANTEE:10","5","464","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa08.form);
            obj.set_taborder("7");
            obj.set_value("");
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

            obj = new Static("staRM_ASGUARANTEE","sta01:5","5","35","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa09.form);
            obj.set_taborder("8");
            obj.set_text("사유 : ");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa09.addChild(obj.name, obj);

            obj = new Edit("ctxtRM_ASGUARANTEE","staRM_ASGUARANTEE:10","5","373","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa09.form);
            obj.set_taborder("9");
            obj.set_value("");
            this.divData.form.divData01.form.divTaDa09.addChild(obj.name, obj);

            obj = new Button("btnHaja","sta01:5","3","120","23",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa09.form);
            obj.set_taborder("8");
            obj.set_text("하자이행보증증권");
            obj.set_visible("false");
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

            obj = new Static("staRM_LABORGUARANTEE","sta02:5","5","35","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa10.form);
            obj.set_taborder("8");
            obj.set_text("사유 : ");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa10.addChild(obj.name, obj);

            obj = new Edit("ctxtRM_LABORGUARANTEE","staRM_LABORGUARANTEE:10","5","166","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa10.form);
            obj.set_taborder("9");
            obj.set_value("");
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

            obj = new Static("staRM_PREPAY_GRNTY","sta00:5","5","35","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa11.form);
            obj.set_taborder("8");
            obj.set_text("사유 : ");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa11.addChild(obj.name, obj);

            obj = new Edit("ctxtRM_PREPAY_GRNTY","staRM_PREPAY_GRNTY:10","5","464","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa11.form);
            obj.set_taborder("9");
            obj.set_value("");
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
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa12.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_PREPAY2","432","5","113","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa12.form);
            obj.set_taborder("5");
            obj.set_format("9,999");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa12.addChild(obj.name, obj);

            obj = new Static("sta00","343","5","99","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa12.form);
            obj.set_taborder("6");
            obj.set_text("일 이내에 입금");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa12.addChild(obj.name, obj);

            obj = new Static("sta01","549","5","326","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa12.form);
            obj.set_taborder("7");
            obj.set_text("원:  공급가                      부가세                    )");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa12.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_PREPAY00","616","5","75","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa12.form);
            obj.set_taborder("8");
            obj.set_format("9,999");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa12.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_PREPAY01","736","5","73","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa12.form);
            obj.set_taborder("9");
            obj.set_format("9,999");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divData.form.divData01.form.divTaDa12.addChild(obj.name, obj);

            obj = new Div("divTaDa25","0","divTaDa12:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("24");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe08","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa25.form);
            obj.set_taborder("0");
            obj.set_text("BuyBack 조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa25.addChild(obj.name, obj);

            obj = new Static("staTaRa08","119","0","763","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa25.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa25.addChild(obj.name, obj);

            obj = new Radio("rdoYN_PREPAY","126","5","99","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa25.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsYN_BUYBACK");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.form.divData01.form.divTaDa25.addChild(obj.name, obj);

            obj = new Edit("txtDS_DLVPLACE","202","5","673","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa25.form);
            obj.set_taborder("3");
            this.divData.form.divData01.form.divTaDa25.addChild(obj.name, obj);

            obj = new Div("divTaDa13","0","divTaDa25:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe08","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa13.form);
            obj.set_taborder("0");
            obj.set_text("장소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.form.divTaDa13.addChild(obj.name, obj);

            obj = new Static("staTaRa08","119","0","763","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa13.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa13.addChild(obj.name, obj);

            obj = new Edit("txtDS_DLVPLACE","125","5","750","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa13.form);
            obj.set_taborder("2");
            this.divData.form.divData01.form.divTaDa13.addChild(obj.name, obj);

            obj = new Div("divTaDa21","0","divTaDa13:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("21");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe08","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa21.form);
            obj.set_taborder("0");
            obj.set_text("인도조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa21.addChild(obj.name, obj);

            obj = new Static("staTaRa08","119","0","763","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa21.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa21.addChild(obj.name, obj);

            obj = new Edit("txtDS_DLVPLACE","125","5","750","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa21.form);
            obj.set_taborder("2");
            this.divData.form.divData01.form.divTaDa21.addChild(obj.name, obj);

            obj = new Div("divTaDa22","0","divTaDa21:-1","892","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("22");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe08","0","0","120","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa22.form);
            obj.set_taborder("0");
            obj.set_text("대금지급조건");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.form.divTaDa22.addChild(obj.name, obj);

            obj = new Static("staTaRa08","119","0","763","30",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa22.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa22.addChild(obj.name, obj);

            obj = new Static("sta04","125","5","35","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa22.form);
            obj.set_taborder("2");
            obj.set_text("현금");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa22.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_CASH","154","5","48","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa22.form);
            obj.set_taborder("3");
            obj.set_format("9,990.00");
            this.divData.form.divData01.form.divTaDa22.addChild(obj.name, obj);

            obj = new Static("sta02","205","5","45","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa22.form);
            obj.set_taborder("4");
            obj.set_text("% 어음");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa22.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_BILL","247","5","48","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa22.form);
            obj.set_taborder("5");
            obj.set_format("9,990.00");
            this.divData.form.divData01.form.divTaDa22.addChild(obj.name, obj);

            obj = new Static("sta06","301","5","22","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa22.form);
            obj.set_taborder("6");
            obj.set_text("%");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa22.addChild(obj.name, obj);

            obj = new Div("divTaDa15","0","divTaDa22:-1","892","80",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaLe06","0","0","120","80",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa15.form);
            obj.set_taborder("0");
            obj.set_text("대금지급조건");
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

            obj = new Static("sta03","127","5","336","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa17.form);
            obj.set_taborder("3");
            obj.set_text("계약금액의                      %  / 1일");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa17.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_DELAY","191","5","78","20",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa17.form);
            obj.set_taborder("2");
            obj.set_format("9,990.00");
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

            obj = new Div("divTaDa23","0","divTaDa19:-1","892","60",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("23");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaRa09","119","0","763","60",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa23.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa23.addChild(obj.name, obj);

            obj = new Static("staTaLe09","0","0","120","60",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa23.form);
            obj.set_taborder("1");
            obj.set_text("변경사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa23.addChild(obj.name, obj);

            obj = new TextArea("txtRM_CONDITION","125","6","750","49",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa23.form);
            obj.set_taborder("2");
            this.divData.form.divData01.form.divTaDa23.addChild(obj.name, obj);

            obj = new Div("divTaDa20","0","divTaDa23:-1","892",null,null,"8",null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("19");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staTaRa09","119","0","763","60",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa20.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.form.divTaDa20.addChild(obj.name, obj);

            obj = new Static("staTaLe09","0","0","120","60",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa20.form);
            obj.set_taborder("1");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divData01.form.divTaDa20.addChild(obj.name, obj);

            obj = new TextArea("txtRM_CONDITION","125","6","750","49",null,null,null,null,null,null,this.divData.form.divData01.form.divTaDa20.form);
            obj.set_taborder("2");
            this.divData.form.divData01.form.divTaDa20.addChild(obj.name, obj);

            obj = new Button("btnStamp","548","4","73","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("인지세납부");
            obj.set_cssclass("btnExt");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnStampView","622","4","93","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("인지세납부조회");
            obj.set_cssclass("btnExt");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnStampPrint","716","4","83","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("수입인지발급");
            obj.set_cssclass("btnExt");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnStamp00","800","4","83","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("수입인지보기");
            obj.set_cssclass("btnExt");
            this.divData.addChild(obj.name, obj);
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

            obj = new BindItem("item18","divData.form.divData01.form.divTaDa12.form.txtDS_PREPAY2","value","dsList","AM_PREPAY");
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

            obj = new BindItem("item52","divData.form.divData01.form.divTaDa07.form.txtAM_INJISE_NOT","value","dsList","AM_INJISE_TARGET_MOD");
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

            obj = new BindItem("item60","divData.form.divData01.form.divTaDa02.form.cboYN_PARTNERSIGN","value","dsList","YN_PARTNERSIGN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.divData01.form.divTaDa14.form.rdoYN_PAYGUARANTEE","value","dsList","YN_PAYGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.divData01.form.divTaDa14.form.txtRT_PAYGUARANTEE","value","dsList","RT_PAYGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.divData01.form.divTaDa21.form.txtDS_DLVPLACE","value","dsList","DS_CONDITION_DELIVERY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divData.form.divData01.form.divTaDa22.form.txtRT_CASH","value","dsList","RT_CASH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.divData01.form.divTaDa22.form.txtRT_BILL","value","dsList","RT_BILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divData.form.divData01.form.divTaDa23.form.txtRM_CONDITION","value","dsList","DS_CHANGEREASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.divData01.form.divTaDa00.form.cboTY_CONTCATEGORY","value","dsList","TY_CONTCATEGORY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.divData01.form.divTaDa12.form.txtDS_PREPAY00","value","dsList","AM_PREPAYPRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divData.form.divData01.form.divTaDa12.form.txtDS_PREPAY01","value","dsList","AM_PREPAYVAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divData.form.divData01.form.divTaDa04.form.txtRT_VAT","value","dsList","RT_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divData.form.divData01.form.divTaDa00.form.txtDS_GW_STATUS","value","dsList","DS_GW_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divData.form.divData01.form.divTaDa25.form.rdoYN_PREPAY","value","dsList","YN_BUYBACK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divData.form.divData01.form.divTaDa25.form.txtDS_DLVPLACE","value","dsList","DS_BUYBACK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divData.form.divData01.form.divTaDa07.form.rdoYN_E_INJISE","value","dsList","YN_E_INJISE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divData.form.divData01.form.divTaDa07.form.txtAM_INJISE_TARGET","value","dsList","AM_INJISE_TARGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divData.form.divData01.form.divTaDa08.form.ctxtRM_CONTGUARANTEE","value","dsList","RM_CONTGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divData.form.divData01.form.divTaDa09.form.ctxtRM_ASGUARANTEE","value","dsList","RM_ASGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divData.form.divData01.form.divTaDa10.form.ctxtRM_LABORGUARANTEE","value","dsList","RM_LABORGUARANTEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divData.form.divData01.form.divTaDa11.form.ctxtRM_PREPAY_GRNTY","value","dsList","RM_PREPAY_GRNTY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.addIncludeScript("DCC_CONTRACT_SELECT.xfdl","lib::libCommon.xjs");
        this.registerScript("DCC_CONTRACT_SELECT.xfdl", function() {
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;

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
        	this.btnSend = this.gfnFormButtonAdd("btnSend", "fnSend");
        	this.btnSign = this.gfnFormButtonAdd("btnSign", "fnSign");
        	this.btnRemake = this.gfnFormButtonAdd("btnRemake", "fnRemake");
        	this.btnRentalObject = this.gfnFormButtonAdd("btnRentalObject", "fnRentalObject");
        	this.btnImdae = this.gfnFormButtonAdd("btnImdae", "fnImdae");
        	this.btnApp = this.gfnFormButtonAdd("btnApp","fnApp");
        	this.btnContFile = this.gfnFormButtonAdd("btnContFile", "fnContFile");
        	this.btnPRAttach = this.gfnFormButtonAdd("btnPRAttach", "fnPRAttach");
        	this.btnPRAttach1 = this.gfnFormButtonAdd("btnPRAttach1", "fnPRAttach1");
        	this.btnEquipFile = this.gfnFormButtonAdd("btnEquipFile", "fnEquipFile");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_CONT = this.divSearch.form.ccfNO_CONT;
        	this.ccfSN_SEQ = this.divSearch.form.ccfSN_SEQ;
        	this.editPrepay = true;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_CONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfSN_SEQ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

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
        // 	this.dsSave.addColumn("AM_INJISE", "bigdecimal");
         	this.dsSave.addColumn("AM_INJISE_TARGET", "bigdecimal");
        	this.dsSave.addColumn("YN_PAYGUARANTEE", "string");
        	this.dsSave.addColumn("RT_PAYGUARANTEE", "bigdecimal");
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
        	this.dsSave.addColumn("YN_PARTNERSIGN", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("DS_CONDITION_DELIVERY", "string");
        	this.dsSave.addColumn("DS_CHANGEREASON", "string");
        	this.dsSave.addColumn("TY_CONTCATEGORY", "string");
        	this.dsSave.addColumn("AM_PREPAYPRO", "string");
        	this.dsSave.addColumn("AM_PREPAYVAT", "string");
        	this.dsSave.addColumn("YN_BUYBACK", "string");
        	this.dsSave.addColumn("DS_BUYBACK", "string");
        	this.dsSave.addColumn("RM_CONTGUARANTEE", "string");
        	this.dsSave.addColumn("RM_ASGUARANTEE", "string");
        	this.dsSave.addColumn("RM_LABORGUARANTEE", "string");
        	this.dsSave.addColumn("RM_PREPAY_GRNTY", "string");

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

        	// 인지세 관련..
        	this.dsSelIn = new Dataset();
        	this.dsSelIn.addColumn("contractNo", "string");
        	this.dsSelIn.addColumn("issueBizNo", "string");
        	this.dsSelIn.addColumn("contractTitle", "string");
        	this.dsSelIn.addColumn("contractDate", "string");
        	this.dsSelIn.addColumn("contractNoSeq", "string");
        	this.dsSelIn.addColumn("contractParties", "string");
        	this.dsSelIn.addColumn("contractAmount", "string");
        	this.dsSelIn.addColumn("contractType", "string");
        	this.dsSelIn.addColumn("mobileNumber", "string");
        	this.dsSelIn.addColumn("email", "string");
        	this.dsSelIn.addColumn("issueAmount", "string");
        	this.dsSelIn.addColumn("inAmtDisabl", "string");
        	this.dsSelIn.addColumn("issueDivisionCode", "string");

        	this.dsInji = new Dataset();
        	this.dsInji.addColumn("contractNo", "string");

        	this.dsStamp = new Dataset();
        	this.dsStamp.addColumn("contractNo", "string");
        	this.dsStamp.addColumn("contractTitle", "string");
        	this.dsStamp.addColumn("contractDate", "string");
        	this.dsStamp.addColumn("contractAmount", "string");
        	this.dsStamp.addColumn("contractFilePath", "string");
        	this.dsStamp.addColumn("contractFileName", "string");

        	this.dsInjiChk = new Dataset();
        	this.dsInjiChk.addColumn("getAmountType", "string");
        	this.dsInjiChk.addColumn("contractNo", "string");
        	this.dsInjiChk.addColumn("contractNoSeq", "string");
        	this.dsInjiChk.addColumn("contractAmount", "string");
        	this.dsInjiChk.addColumn("issueBizNo", "string");

        	this.dsInjiChkSnd = new Dataset();

        	// 본사서명시 넘긴 dataset에 그대로 담아서 리턴.
        	// DS_HASHVAL, DS_SIGNVAL, DN_CERTORGNAME, DN_SIGNNAME 컬럼은 필수.
        	this.dsSign = new Dataset();
        	this.dsSign.addColumn("ADDFILE_NO", "int");
        	this.dsSign.addColumn("SEQNO", "int");
        	this.dsSign.addColumn("DS_HASHVAL", "string");
        	this.dsSign.addColumn("DS_SIGNVAL", "string");
        	this.dsSign.addColumn("DN_CERTORGNAME", "string");
        	this.dsSign.addColumn("DN_SIGNNAME", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("NO_CONT", "string");
        	this.dsInsert.addColumn("SN_SEQ", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("ADDFILE_NO", "int");
        	this.dsInsert.addColumn("SEQNO", "int");
        	this.dsInsert.addColumn("DS_SIGNVAL", "string");
        	this.dsInsert.addColumn("DN_CERTORGNAME", "string");
        	this.dsInsert.addColumn("DN_SIGNNAME", "string");
        	this.dsInsert.addColumn("DS_HASHVAL", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_CONT", "string");
        	this.dsUpdate.addColumn("SN_SEQ", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");

        	this.dsAppParam = new Dataset();
        	this.dsAppParam.addColumn("CD_SITE", "string");
        	this.dsAppParam.addColumn("NO_CONT", "string");
        	this.dsAppParam.addColumn("SN_SEQ", "string");
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
        	var outData     = "dsList=select0 dsListSign=select1";
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
        // 		this.dsSave.setColumn(nrow, "AM_INJISE", this.dsList.getColumn(0, "AM_INJISE"));
         		this.dsSave.setColumn(nrow, "AM_INJISE_TARGET", this.dsList.getColumn(0, "AM_INJISE_TARGET"));
        		this.dsSave.setColumn(nrow, "YN_PAYGUARANTEE", this.dsList.getColumn(0, "YN_PAYGUARANTEE"));
        		this.dsSave.setColumn(nrow, "RT_PAYGUARANTEE", this.dsList.getColumn(0, "RT_PAYGUARANTEE"));
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
        		this.dsSave.setColumn(nrow, "YN_PARTNERSIGN", this.dsList.getColumn(0, "YN_PARTNERSIGN"));
        		this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsSave.setColumn(nrow, "DS_CONDITION_DELIVERY", this.dsList.getColumn(0, "DS_CONDITION_DELIVERY"));
        		this.dsSave.setColumn(nrow, "DS_CHANGEREASON", this.dsList.getColumn(0, "DS_CHANGEREASON"));
        		this.dsSave.setColumn(nrow, "TY_CONTCATEGORY", this.dsList.getColumn(0, "TY_CONTCATEGORY"));
        		this.dsSave.setColumn(nrow, "AM_PREPAYPRO", this.dsList.getColumn(0, "AM_PREPAYPRO"));
        		this.dsSave.setColumn(nrow, "AM_PREPAYVAT", this.dsList.getColumn(0, "AM_PREPAYVAT"));

        		this.dsSave.setColumn(nrow, "YN_BUYBACK", this.dsList.getColumn(0, "YN_BUYBACK"));
        		this.dsSave.setColumn(nrow, "DS_BUYBACK", this.dsList.getColumn(0, "DS_BUYBACK"));

        		this.dsSave.setColumn(nrow, "RM_CONTGUARANTEE", this.dsList.getColumn(0, "RM_CONTGUARANTEE"));
        		this.dsSave.setColumn(nrow, "RM_ASGUARANTEE", this.dsList.getColumn(0, "RM_ASGUARANTEE"));
        		this.dsSave.setColumn(nrow, "RM_LABORGUARANTEE", this.dsList.getColumn(0, "RM_LABORGUARANTEE"));
        		this.dsSave.setColumn(nrow, "RM_PREPAY_GRNTY", this.dsList.getColumn(0, "RM_PREPAY_GRNTY"));
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
        		this.divData.form.divData01.form.divTaDa14.set_height(30);
        		this.divData.form.divData01.form.divTaDa08.set_height(30);
        		this.divData.form.divData01.form.divTaDa09.set_height(30);
        		this.divData.form.divData01.form.divTaDa10.set_height(30);
        		this.divData.form.divData01.form.divTaDa11.set_height(30);
        		this.divData.form.divData01.form.divTaDa12.set_height(30);
        		this.divData.form.divData01.form.divTaDa25.set_height(30);
        		this.divData.form.divData01.form.divTaDa13.set_height(30);
        		this.divData.form.divData01.form.divTaDa14.set_height(30);
        		this.divData.form.divData01.form.divTaDa15.set_height(80);
        		this.divData.form.divData01.form.divTaDa16.set_height(50);
        		this.divData.form.divData01.form.divTaDa17.set_height(30);
        		this.divData.form.divData01.form.divTaDa18.set_height(30);
        		this.divData.form.divData01.form.divTaDa19.set_height(130);
        		this.divData.form.divData01.form.divTaDa20.set_height(60);
        		this.divData.form.divData01.form.divTaDa23.set_height(60);
        		this.divData.form.divData01.form.divTaDa21.set_height(30);
        		this.divData.form.divData01.form.divTaDa22.set_height(30);


        		this.divData.form.divData01.form.resetScroll();

        		// 외주 기초 계약
        		if(this.dsList.getColumn(0, "TY_FORM") == "1")
        		{
        			this.divData.form.divData01.form.divTaDa05.set_height(1);
        			this.divData.form.divData01.form.divTaDa25.set_height(1);
        			this.divData.form.divData01.form.divTaDa13.set_height(1);
        			this.divData.form.divData01.form.divTaDa18.set_height(1);
        			this.divData.form.divData01.form.divTaDa19.set_height(1);
        			this.divData.form.divData01.form.divTaDa21.set_height(1);
        			this.divData.form.divData01.form.divTaDa22.set_height(1);
        			this.divData.form.divData01.form.divTaDa23.set_height(1);
        			this.divData.form.divData01.form.resetScroll();
        		}
        		// 자재 기초 계약
        		else if(this.dsList.getColumn(0, "TY_FORM") == "2")
        		{
        			this.divData.form.divData01.form.divTaDa03.set_height(1);
        			this.divData.form.divData01.form.divTaDa05.set_height(1);
        			this.divData.form.divData01.form.divTaDa11.set_height(1);
        			this.divData.form.divData01.form.divTaDa13.set_height(1);
        			this.divData.form.divData01.form.divTaDa14.set_height(1);
        			this.divData.form.divData01.form.divTaDa16.set_height(1);
        			this.divData.form.divData01.form.divTaDa18.set_height(1);
        			this.divData.form.divData01.form.divTaDa19.set_height(1);
        			this.divData.form.divData01.form.divTaDa22.set_height(1);
        			this.divData.form.divData01.form.divTaDa23.set_height(1);
        			this.divData.form.divData01.form.resetScroll();
        		}
        		// 발주서
        		else if(this.dsList.getColumn(0, "TY_FORM") == "3")
        		{
        			this.divData.form.divData01.form.divTaDa02.set_height(1);
        			this.divData.form.divData01.form.divTaDa03.set_height(1);
        			this.divData.form.divData01.form.divTaDa05.set_height(1);
        			this.divData.form.divData01.form.divTaDa07.set_height(1);
        			this.divData.form.divData01.form.divTaDa08.set_height(1);
        			this.divData.form.divData01.form.divTaDa09.set_height(1);
        			this.divData.form.divData01.form.divTaDa10.set_height(1);
        			this.divData.form.divData01.form.divTaDa11.set_height(1);
        			this.divData.form.divData01.form.divTaDa12.set_height(1);
        			this.divData.form.divData01.form.divTaDa25.set_height(1);
        			this.divData.form.divData01.form.divTaDa13.set_height(1);
        			this.divData.form.divData01.form.divTaDa14.set_height(1);
        			this.divData.form.divData01.form.divTaDa15.set_height(1);
        			this.divData.form.divData01.form.divTaDa16.set_height(1);
        			this.divData.form.divData01.form.divTaDa17.set_height(1);
        			this.divData.form.divData01.form.divTaDa19.set_height(1);
        			this.divData.form.divData01.form.divTaDa21.set_height(1);
        			this.divData.form.divData01.form.divTaDa22.set_height(1);
        			this.divData.form.divData01.form.divTaDa23.set_height(1);
        			this.divData.form.divData01.form.resetScroll();
        		}
        		// 외주 변경 계약
        		else if(this.dsList.getColumn(0, "TY_FORM") == "4")
        		{
        			this.divData.form.divData01.form.divTaDa13.set_height(1);
        			this.divData.form.divData01.form.divTaDa18.set_height(1);
        			this.divData.form.divData01.form.divTaDa21.set_height(1);
        			this.divData.form.divData01.form.divTaDa22.set_height(1);
        			this.divData.form.divData01.form.resetScroll();
        		}
        		// 자재 변경 계약
        		else if(this.dsList.getColumn(0, "TY_FORM") == "5")
        		{
        			this.divData.form.divData01.form.divTaDa03.set_height(1);
        			this.divData.form.divData01.form.divTaDa13.set_height(1);
        			this.divData.form.divData01.form.divTaDa14.set_height(1);
        			this.divData.form.divData01.form.divTaDa16.set_height(1);
        			this.divData.form.divData01.form.divTaDa18.set_height(1);
        			this.divData.form.divData01.form.divTaDa22.set_height(1);
        			this.divData.form.divData01.form.resetScroll();
        		}

        		if(this.dsList.getColumn(0, "YN_INJISE") == "Y")
        		{
        			this.divData.form.divData01.form.divTaDa07.form.txtAM_INJISE_TARGET.set_readonly(false);
        		} else {
        			this.divData.form.divData01.form.divTaDa07.form.txtAM_INJISE_TARGET.set_readonly(true);
        		};

        		// YN_EDITABLE 값에 따라 수정 가능 or 불가능
        		if(this.dsList.getColumn(0, "YN_EDITABLE") == "Y"){
        			this.fnSetDivData01Enable(true);
        		}else{
        			this.fnSetDivData01Enable(false);
        		}

        		this.fnSetDivData01Enable(false);

        		if(nexacro.toNumber(this.dsList.getColumn(0, "NO_FORM")) > 1011){
        			this.btnImdae.set_enable(true);
        		}else{
        			this.btnImdae.set_enable(false);
        		};
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
        		//this.fninjisechk("AMT");
        		// 사유 컨트롤
        		this.fnCheckRM("YN_CONTGUARANTEE", this.divData.form.divData01.form.divTaDa08.form.ctxtRM_CONTGUARANTEE);
        		this.fnCheckRM("YN_ASGUARANTEE", this.divData.form.divData01.form.divTaDa09.form.ctxtRM_ASGUARANTEE);
        		this.fnCheckRM("YN_LABORGUARANTEE", this.divData.form.divData01.form.divTaDa10.form.ctxtRM_LABORGUARANTEE);
        		this.fnCheckRM("YN_PREPAY_GRNTY", this.divData.form.divData01.form.divTaDa11.form.ctxtRM_PREPAY_GRNTY);
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
        	else if(svcID == "sign") {
        		if (errorCode == 0) {
        			this.fnSaveSign();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "signSave") {
        		if (errorCode == 0) {
        			this.fnSendProc();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "send") {
        		if (errorCode == 0) {
        // 			this.gfnAlert("협력업체송부 정상 처리되었습니다.");
        // 			this.FormBtns.Select.click();
        			this.fnEquipFileInit();
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
        	else if(svcID == "appChk")
        	{
        		if (errorCode == 0)
        		{
        			this.fnAppSelect();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "appSelect") {
        		if (errorCode == 0)
        		{
        			this.fnAppOpen();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "execEquip")
        	{
        		if (errorCode == 0)
        		{
        			this.gfnAlert("협력업체송부 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
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
        			if(this.editPrepay)
        			{
        				this.editPrepay = false;
        				this.dsList.setColumn(e.row, "AM_CONT", nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONTPRO"),0) + nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONTVAT"),0));
        				this.editPrepay = true;
        			}
        		}
        		else if(e.columnid == "AM_PREPAY")	// 선급금 변경 시
        		{
        			if(this.editPrepay)
        			{
        				this.editPrepay = false;
        				this.dsList.setColumn(e.row, "AM_PREPAYPRO", nexacro.toNumber(this.dsList.getColumn(e.row, "AM_PREPAY"),0) / 11 * 10 );
        				this.dsList.setColumn(e.row, "AM_PREPAYVAT", nexacro.toNumber(this.dsList.getColumn(e.row, "AM_PREPAY"),0) - nexacro.toNumber(this.dsList.getColumn(e.row, "AM_PREPAYPRO"),0) );
        				this.editPrepay = true;
        			}
        		}
        		else if(e.columnid == "AM_PREPAYPRO")	// 선급금 공급가 및 부가세 변경 시
        		{
        			if(this.editPrepay)
        			{
        				this.editPrepay = false;
        				this.dsList.setColumn(e.row, "AM_PREPAY", nexacro.toNumber(this.dsList.getColumn(e.row, "AM_PREPAYPRO"),0) + nexacro.toNumber(this.dsList.getColumn(e.row, "AM_PREPAYVAT"),0));
        				this.editPrepay = true;
        			}
        		}
        		else if(e.columnid == "AM_PREPAYVAT")	// 선급금 공급가 및 부가세 변경 시
        		{	if(this.editPrepay)
        			{
        				this.editPrepay = false;
        				this.dsList.setColumn(e.row, "AM_PREPAY", nexacro.toNumber(this.dsList.getColumn(e.row, "AM_PREPAYPRO"),0) + nexacro.toNumber(this.dsList.getColumn(e.row, "AM_PREPAYVAT"),0));
        				this.editPrepay = true;
        			}
        		}
        // 		else if(e.columnid == "NO_FORM") {
        // 			if(e.newvalue == "1013")
        // 				this.btnImdae.set_enable(true);
        // 			else
        // 				this.btnImdae.set_enable(false);
        // 		}
        // 		else if(e.columnid == "AM_INJISE"){	// 인지세
        // 			var amInjiTot = nexacro.toNumber(this.dsList.getColumn(e.row,"AM_INJISE_TOT"));
        // 			var amInjiTar = nexacro.toNumber(this.dsList.getColumn(e.row,"AM_INJISE_TARGET"));
        // 			var amInjiInt = nexacro.toNumber(this.dsList.getColumn(e.row,"AM_INJISE_INIT"));
        // 			var amInjiCon = nexacro.toNumber(e.newvalue);
        // 			var amInjiExe = (amInjiTot - amInjiTar - amInjiCon);
        //
        // 			if(amInjiExe < 0)
        // 			{
        // 				this.gfnAlert("납부할 금액보다 큽니다!!!");
        // 				this.dsList.setColumn(e.row, "AM_INJISE", e.oldvalue);
        // 				return;
        // 			};
        //
        // 			if(amInjiCon < amInjiInt)
        // 			{
        // 				this.gfnAlert("납부한 금액보다 작습니다!!!");
        // 				this.dsList.setColumn(e.row, "AM_INJISE", e.oldvalue);
        // 				return;
        // 			};
        //
        // 			this.dsList.setColumn(e.row,"AM_INJISE_TARGET_MOD",amInjiExe)
        //
        // 		}
        		else if(e.columnid == "YN_INJISE") {
        			if(e.newvalue == "Y")
        			{
        				this.divData.form.divData01.form.divTaDa07.form.txtAM_INJISE_TARGET.set_readonly(false);
        			} else {
        				this.divData.form.divData01.form.divTaDa07.form.txtAM_INJISE_TARGET.set_readonly(true);
        			};
        		}
        		else if(e.columnid == "YN_CONTGUARANTEE") {
        			if(e.newvalue == "Y")
        			{
        				this.divData.form.divData01.form.divTaDa08.form.ctxtRM_CONTGUARANTEE.set_readonly(true);
        				this.dsList.setColumn(0, "RM_CONTGUARANTEE", "");
        			} else {
        				this.divData.form.divData01.form.divTaDa08.form.ctxtRM_CONTGUARANTEE.set_readonly(false);
        			};
        		}
        		else if(e.columnid == "YN_ASGUARANTEE") {
        			if(e.newvalue == "Y")
        			{
        				this.divData.form.divData01.form.divTaDa09.form.ctxtRM_ASGUARANTEE.set_readonly(true);
        				this.dsList.setColumn(0, "RM_ASGUARANTEE", "");
        			} else {
        				this.divData.form.divData01.form.divTaDa09.form.ctxtRM_ASGUARANTEE.set_readonly(false);
        			};
        		}
        		else if(e.columnid == "YN_LABORGUARANTEE") {
        			if(e.newvalue == "Y")
        			{
        				this.divData.form.divData01.form.divTaDa10.form.ctxtRM_LABORGUARANTEE.set_readonly(true);
        				this.dsList.setColumn(0, "RM_LABORGUARANTEE", "");
        			} else {
        				this.divData.form.divData01.form.divTaDa10.form.ctxtRM_LABORGUARANTEE.set_readonly(false);
        			};
        		}
        		else if(e.columnid == "YN_PREPAY_GRNTY") {
        			if(e.newvalue == "Y")
        			{
        				this.divData.form.divData01.form.divTaDa11.form.ctxtRM_PREPAY_GRNTY.set_readonly(true);
        				this.dsList.setColumn(0, "RM_PREPAY_GRNTY", "");
        			} else {
        				this.divData.form.divData01.form.divTaDa11.form.ctxtRM_PREPAY_GRNTY.set_readonly(false);
        			};
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

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_RENTAL_OBJECT", "fnDialogCallback", param, 1130, 620);
        }

        // 임대정보관리
        this.fnImdae = function(obj,e) {
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.SN_SEQ = this.dsSearch.getColumn(0, "SN_SEQ");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_IMDAE", "fnDialogCallback", param, 670, 370);
        }

        // 공동도급사사인정보 관리
        this.fnSITEJOINTCOMP = function(obj,e)
        {
        	var ds_param = "";
        	if(this.dsList.getColumn(0, "DS_CONTMETHOD") == "10")
        	{
        		ds_param = "SU";
        	}
        	else
        	{
        		ds_param = "MM";
        	}

        	var param = {};
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.SN_SEQ = this.dsSearch.getColumn(0, "SN_SEQ");
        	param.TY_SYS = ds_param;

        	this.gfnFormOpen("DC", "DCC_SITEJOINTCOMP", "fnDialogCallback", param, 920, 370);
        };

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

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_STOCKMR", "fnDialogCallback", param);
        }

        // 업체추가 버튼 클릭시 팝업화면 호출
        this.fnAddVendor = function(obj,e) {
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.DS_SUBCON = this.ccfNO_CONT.form.DSTextBox.value;

        	this.gfnFormOpen("DMA", "DMA_POVENDORADD", "fnDialogCallback", param);
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

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_CONTRACTFILE", "fnDialogCallback", param);
        }

        // 업체송부 버튼 클릭 이벤트
        this.fnSend = function(obj,e) {
        	this.gfnConfirm("계약서를 협력업체에게 송부하시겠습니까?","fnSend_callback");
        }

        this.fnSend_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnBonsaSign();
        		// this.fnSendProc();
        		/*
        		if(!this.gfnIsNull(this.dsList.getColumn(0, "NO_SIGN_FILE"))) {
        			this.dsFileHash = new Dataset();
        			this.dsFileHash.addColumn("ADDFILE_NO", "int");

        			var nrow = this.dsFileHash.addRow();
        			this.dsFileHash.setColumn(nrow, "ADDFILE_NO", this.dsList.getColumn(0, "NO_SIGN_FILE"));

        			var strSvcId    = "hashfile";
        			var strSvcType  = "file/hashFile";
        			var inProc		= "";
        			var inData      = "input=dsFileHash";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnFileHashCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcType , 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc);   // 통신방법 정의 [생략가능]
        		}
        		else {
        			this.fnSendProc();
        		}
        		*/
        	}
        }

        this.fnBonsaSign = function()
        {
        	if (this.dsListSign.rowcount == 0)
        	{
        		this.gfnAlert("계약서 파일을 먼저 생성하시기 바랍니다.");
        		return;
        	}

        	console.log("계약서명할 파일 개수"+this.dsListSign.rowcount.toString());

        	this.dsSign.clearData();
        	for (var i = 0; i < this.dsListSign.rowcount; i++) {
        		var nrow = this.dsSign.addRow();
        		this.dsSign.setColumn(nrow, "ADDFILE_NO", this.dsListSign.getColumn(i, "ADDFILE_NO"));
        		this.dsSign.setColumn(nrow, "SEQNO", this.dsListSign.getColumn(i, "SEQNO"));
        		this.dsSign.setColumn(nrow, "DS_HASHVAL", this.dsListSign.getColumn(i, "FILE_HASH"));
        	}

        	var strSvcId    = "sign";
        	var strSvcType  = "pki/sign";
        	var inProc		= "";
        	var inData      = "input=dsSign";
        	var outData     = "dsSign=output0";
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

        this.fnSaveSign = function() {
        	this.dsInsert.clearData();
        	for (var i = 0; i < this.dsSign.rowcount; i++) {
        		var nrow = this.dsInsert.addRow();
        		this.dsInsert.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        		this.dsInsert.setColumn(nrow, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        		this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsListSign.getColumn(i, "CD_VENDOR"));
        		this.dsInsert.setColumn(nrow, "ADDFILE_NO", this.dsSign.getColumn(i, "ADDFILE_NO"));
        		this.dsInsert.setColumn(nrow, "SEQNO", this.dsSign.getColumn(i, "SEQNO"));
        		this.dsInsert.setColumn(nrow, "DS_SIGNVAL", this.dsSign.getColumn(i, "DS_SIGNVAL"));
        		this.dsInsert.setColumn(nrow, "DN_CERTORGNAME", this.dsSign.getColumn(i, "DN_CERTORGNAME"));
        		this.dsInsert.setColumn(nrow, "DN_SIGNNAME", this.dsSign.getColumn(i, "DN_SIGNNAME"));
        		this.dsInsert.setColumn(nrow, "DS_HASHVAL", this.dsSign.getColumn(i, "DS_HASHVAL"));
        	}

        	if (this.dsInsert.rowcount == 0) return;

        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsUpdate.setColumn(nrow, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        	this.dsUpdate.setColumn(nrow, "CD_VENDOR", "");

        	var strSvcId    = "signSave";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate";
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

        this.fnFileHashCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "hashfile") {
        		this.fnSendProc();
        	}
        }

        this.fnSendProc = function() {

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

        // 본사서명 버튼 클릭 이벤트
        this.fnSign = function(obj,e) {
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.SN_SEQ = this.dsSearch.getColumn(0, "SN_SEQ");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_CONTRACT_SIGN", "fnDialogCallback", param, 1100, 600);
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
        	this.gfnBtnCheck(this.btnApp, this.dsList);
        	this.gfnBtnCheck(this.btnComplete, this.dsList);
        	this.gfnBtnCheck(this.btnCompleteCancel, this.dsList);
        	this.gfnBtnCheck(this.btnContFile, this.dsList);
        	this.gfnBtnCheck(this.btnSend, this.dsList);
        	this.gfnBtnCheck(this.btnSign, this.dsList);
        	this.gfnBtnCheck(this.btnRemake, this.dsList);
        }

        // 인지세 납부기준.
        this.divData_divData01_divTaDa07_btnINGI_onclick = function(obj,e)
        {
        	var param = {};

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_INJISE_INFO", "fnDialogCallback", param, 800, 500);
        };

        // 하자이행보증증권
        this.divData_divData01_divTaDa09_btnHaja_onclick = function(obj,e)
        {
        	var param = {};

        	param.CD_SITE = this.dsList.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(0, "DS_SITE");
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.DS_CONT = this.divSearch.form.ccfNO_CONT.form.DSTextBox.text;
        	param.SN_SEQ = this.dsSearch.getColumn(0, "SN_SEQ");
        	param.DS_SEQ = this.divSearch.form.ccfSN_SEQ.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_HAJA_STOCK", "fnDialogCallback", param);
        };


        this.fnSetDivData01Enable = function(value)
        {
        	this.divData.form.divData01.form.divTaDa00.set_enable(value);
        	this.divData.form.divData01.form.divTaDa01.set_enable(value);
        	this.divData.form.divData01.form.divTaDa03.set_enable(value);
        	this.divData.form.divData01.form.divTaDa04.set_enable(value);
        	this.divData.form.divData01.form.divTaDa05.set_enable(value);
        	this.divData.form.divData01.form.divTaDa06.set_enable(value);
        	this.divData.form.divData01.form.divTaDa07.set_enable(value);
        	this.divData.form.divData01.form.divTaDa14.set_enable(value);
        	this.divData.form.divData01.form.divTaDa08.set_enable(value);
        	this.divData.form.divData01.form.divTaDa10.set_enable(value);
        	this.divData.form.divData01.form.divTaDa11.set_enable(value);
        	this.divData.form.divData01.form.divTaDa12.set_enable(value);
        	this.divData.form.divData01.form.divTaDa13.set_enable(value);
        	this.divData.form.divData01.form.divTaDa15.set_enable(value);
        	this.divData.form.divData01.form.divTaDa16.set_enable(value);
        	this.divData.form.divData01.form.divTaDa17.set_enable(value);
        	this.divData.form.divData01.form.divTaDa18.set_enable(value);
        	this.divData.form.divData01.form.divTaDa19.set_enable(value);
        	this.divData.form.divData01.form.divTaDa20.set_enable(value);
        	this.divData.form.divData01.form.divTaDa21.set_enable(value);
        	this.divData.form.divData01.form.divTaDa22.set_enable(value);
        	this.divData.form.divData01.form.divTaDa23.set_enable(value);
        	this.divData.form.divData01.form.divTaDa25.set_enable(value);

        	// divTaDa02의 공동도급사관리 버튼을 위해 별도 처리
        	this.divData.form.divData01.form.divTaDa02.form.cboYN_E_CONT.set_enable(value);
        	this.divData.form.divData01.form.divTaDa02.form.cboYN_PARTNERSIGN.set_enable(value);
        	this.divData.form.divData01.form.divTaDa02.form.cfNO_FORM.set_enable(value);
        	this.divData.form.divData01.form.divTaDa02.form.sta28.set_enable(value);
        	this.divData.form.divData01.form.divTaDa02.form.sta30.set_enable(value);

        	// divTaDa09의 하자이행보증증권 버튼을 위해 별도 처리.
        	this.divData.form.divData01.form.divTaDa09.form.rdoYN_ASGUARANTEE.set_enable(value);
        	this.divData.form.divData01.form.divTaDa09.form.txtRT_ASGUARANTEE.set_enable(value);
        	this.divData.form.divData01.form.divTaDa09.form.txtNO_ASGUARANTEE.set_enable(value);
        	this.divData.form.divData01.form.divTaDa09.form.sta00.set_enable(value);
        	this.divData.form.divData01.form.divTaDa09.form.sta01.set_enable(value);
        	this.divData.form.divData01.form.divTaDa09.form.sta02.set_enable(value);
        	this.divData.form.divData01.form.divTaDa09.form.ctxtRM_ASGUARANTEE.set_enable(value);

        	this.divData.form.divData01.form.divTaDa09.form.btnHaja.set_enable(true);
        }

        //--------------------------------------------------------- 인지세 -----------------------------------------------//
        this.fnStamp = function(obj,e)
        {
        	if(this.dsList.getColumn(0,"YN_INJISE") != "Y")
        	{
        		this.gfnAlert("인지세가 없습니다!");
        		return;
        	};

        	if(this.dsList.getColumn(0,"YN_E_INJISE") != "Y")
        	{
        		this.gfnAlert("전자수입인지 대상이 아닙니다!");
        		return;
        	};

        	var contractNo = [
        		this.dsSearch.getColumn(0, "NO_CONT")
        	];

        	this.dsSelIn.clearData();
        	this.dsSelIn.addRow();

        	this.dsSelIn.setColumn(0, "contractNo", contractNo.join(""));
        	this.dsSelIn.setColumn(0, "issueBizNo", this.dsList.getColumn(this.dsList.rowposition  , "NO_SJC"));
        	this.dsSelIn.setColumn(0, "contractTitle", this.dsList.getColumn(this.dsList.rowposition  , "DS_CONT"));
        	this.dsSelIn.setColumn(0, "contractDate", this.dsList.getColumn(this.dsList.rowposition  , "DT_CONT"));
        	this.dsSelIn.setColumn(0, "contractNoSeq", this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ"));
        	this.dsSelIn.setColumn(0, "contractParties", this.dsList.getColumn(this.dsList.rowposition  , "DS_DAM"));
        	this.dsSelIn.setColumn(0, "contractAmount", this.dsList.getColumn(this.dsList.rowposition  , "AM_CONT"));
        	this.dsSelIn.setColumn(0, "mobileNumber", this.dsList.getColumn(this.dsList.rowposition  , "NO_TEL_DAM"));
        	this.dsSelIn.setColumn(0, "email", this.dsList.getColumn(this.dsList.rowposition  , "ID_EMAIL_DAM"));
        	this.dsSelIn.setColumn(0, "issueAmount", this.dsList.getColumn(this.dsList.rowposition  , "AM_INJISE_TARGET_MOD"));
        	this.dsSelIn.setColumn(0, "inAmtDisabl", "N");
        	this.dsSelIn.setColumn(0, "issueDivisionCode", "01");

        	var strSvcId    = "injise";
        	var strSvcType  = "dcc_stamp_reqno";
        	var inProc      = "";
        	var inData      = "dsInji=dsSelIn";
        	var outData     = "dsInji=output";
        	var strArg      = "";
        	var callBackFnc = "fnStampCallback";

        	this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
        						strSvcType ,    // transaction을 요청할 구분
        						inProc,         // Procedure 정보 Dataset 이름
        						inData ,        // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg,         // 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fninjisuip = function(){
        	var contractNo = [
        		this.dsSearch.getColumn(0, "NO_CONT")
        	];

        	this.dsStamp.clearData();
        	this.dsStamp.addRow();

        	this.dsStamp.setColumn(0, "contractNo", contractNo.join(""));
        	this.dsStamp.setColumn(0, "contractTitle", this.divSearch.form.ccfNO_CONT.form.DSTextBox.text);
        	this.dsStamp.setColumn(0, "contractDate", this.dsList.getColumn(0, "DT_CONT"));
        	this.dsStamp.setColumn(0, "contractAmount", this.dsList.getColumn(0, "AM_CONT"));
        	this.dsStamp.setColumn(0, "contractFilePath", this.dsList.getColumn(0, "DS_CONT_PATH_NM"));
        	this.dsStamp.setColumn(0, "contractFileName", this.dsList.getColumn(0, "DS_CONT_FILE_NM"));

        	var strSvcId    = "injisesuip";
        	var strSvcType  = "dcc_stamp_suip";
        	var inProc      = "";
        	var inData      = "dsInji=dsStamp";
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

        this.fninjisechk = function(tp){
        	var contractNo = [
        		this.dsSearch.getColumn(0, "NO_CONT")
        	];

        	this.dsInjiChk.clearData();
        	this.dsInjiChk.addRow();

        	this.dsInjiChk.setColumn(0, "getAmountType", "");
        	this.dsInjiChk.setColumn(0, "contractNo", contractNo.join(""));
        	this.dsInjiChk.setColumn(0, "contractNoSeq", String(this.dsSearch.getColumn(0, "SN_SEQ")));
        	this.dsInjiChk.setColumn(0, "contractAmount", this.dsList.getColumn(0, "AM_CONT"));
        	this.dsInjiChk.setColumn(0, "issueBizNo", "");

        	var strSvcId    = "injisechk" + (tp == "AMT" ? "Amt" : "");
        	var strSvcType  = "dcc_stamp_check";
        	var inProc      = "";
        	var inData      = "dsInji=dsInjiChk";
        	var outData     = "dsInjiChkSnd=output";
        	var strArg      = "";
        	var callBackFnc = "fnStampCallback";

        	this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
        						strSvcType ,    // transaction을 요청할 구분
        						inProc,         // Procedure 정보 Dataset 이름
        						inData ,        // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg,         // 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnStampView = function(obj,e){

        	var contractNo = [
        		this.dsSearch.getColumn(0, "NO_CONT")
        	];

        	var param = {};
        	param.contractNo 		= contractNo.join("");
        	param.contractNoSeq 	= String(this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ"));
        	param.contractAmount	= String(this.dsList.getColumn(this.dsList.rowposition, "AM_CONT"));

        	this.gfnFormOpen("DCC", "DCC_STAMP_PAYLIST", "fnDialogCallback", param);
        };

        this.fnStampCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if(svcID == "injise"){
        		if(errorCode != 0) {
        			this.gfnAlert(errorMsg);
        			return;
        		}

        		window.open(this.dsInji.getColumn(0, "surl"));
        	}
        	else if(svcID == "injisechk"){
        		if (errorCode == 0) {
        			if(this.dsInjiChkSnd.getColumn(0, "injiflg") == "Y"){
        				this.fninjisuip();
        			}else{
        				this.gfnAlert(this.dsInjiChkSnd.getColumn(0, "injimsg"));
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "injisechkAmt"){
        		if (errorCode == 0) {
        			var payAmt = nexacro.toNumber(this.dsInjiChkSnd.getColumn(0, "paymentAmount"));
        			var totAmt = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition,"AM_INJISE_TOT"));
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(this.dsList.rowposition,"AM_INJISE", payAmt);
        			this.dsList.setColumn(this.dsList.rowposition,"AM_INJISE_TARGET_MOD",(totAmt - payAmt));
        			this.dsList.set_enableevent(true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        this.fnStampViewer = function(obj,e)
        {
        	var param_names = ["contractFilePath", "contractFileName"],
        		param_value = ["DS_CONT_PATH_NM",  "DS_CONT_FILE_NM"],
        		param_input,
        		myForm = document.createElement('form');

        	myForm.action 		= nexacro.getEnvironment().services["svcUrl"].url + "/dcc_stamp_viewer.do";
        	myForm.method 		= "post";
        	myForm.target 		= "_blank";

        	for(var i = 0; i < param_names.length; i++)
        	{
        		param_input 		= document.createElement('input');
        		param_input.type 	= 'hidden';
        		param_input.name 	= param_names[i];
        		param_input.value 	= this.dsList.getColumn(0, param_value[i]);
        		myForm.appendChild(param_input);
        	};

        	document.body.appendChild(myForm);
        	myForm.submit();
        };


        this.fnDialogCallback = function(svcID, value) {
        	this.FormBtns.Select.click();
        };


        this.fnAppBeforeInjise = function() {
        	if (!this.fnSelectValidate()) return false;

        	var strSvcId    = "selectBeforeApp";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSearch";
        	var outData     = "dsList=select0 dsListSign=select1";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackBeforeApp";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnCallbackBeforeApp = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "selectBeforeApp"){

        	};
        };

        this.fnApp = function(obj,e)
        {
        	var SnSeq = this.dsSearch.getColumn(0, "SN_SEQ");

        	this.dsAppParam.clearData();
        	var nrow = this.dsAppParam.addRow();
        	this.dsAppParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsAppParam.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsAppParam.setColumn(nrow, "SN_SEQ", SnSeq);

        	var msg = "";

        	if(SnSeq == "001")
        	{
        		msg = "계약의뢰를 진행하시겠습니까?";
        	}
        	else
        	{
        		msg = "(변경)계약의뢰를 진행하시겠습니까?";
        	}

        	this.gfnConfirm(msg, "fnApp_callback", "");
        }

        this.fnApp_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		if (this.dsAppParam.rowcount == 0) return;

        		var strSvcId    = "appChk";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "appChk=dsAppParam";
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

        this.fnAppSelect = function()
        {
        	var strSvcId    = "appSelect";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "appSelect=dsAppParam";
        	var outData     = "dsAppList=appSelect0";
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

        this.fnAppOpen = function()
        {
        	if(this.dsAppList.rowcount > 0)
        	{
        		console.info("================ appStart");

        		var sApType = "";
        		var sTitle  = "";
        		var sDsContMethod = this.dsList.getColumn(0, "DS_CONTMETHOD");
        		var sSnSeq = this.dsList.getColumn(0, "SN_SEQ");

        		var ds_site = this.dsList.getColumn(0, "DS_SITE");
        		var ds_cont = this.divSearch.form.ccfNO_CONT.form.DSTextBox.text;

        		if(sDsContMethod == "10" && sSnSeq == "001")
        		{
        			sApType = "DC06";
        			sTitle  = "[계약의뢰서/외주]"+ ds_site + "/" + ds_cont;
        		}
        		else if(sDsContMethod == "10")
        		{
        			sApType = "DC07";
        			sTitle  = "[변경계약의뢰서/외주]"+ ds_site + "/" + ds_cont;
        		}
        		else if(sDsContMethod == "40" && sSnSeq == "001")
        		{
        			sApType = "DM06";
        			sTitle  = "[계약의뢰서/자재]"+ ds_site + "/" + ds_cont;
        		}
        		else if(sDsContMethod == "40")
        		{
        			sApType = "DM07";
        			sTitle  = "[변경계약의뢰서/자재]"+ ds_site + "/" + ds_cont;
        		}

        		var sRef01  = this.dsSearch.getColumn(0, "CD_SITE");
        		var sRef02  = this.dsSearch.getColumn(0, "NO_CONT");
        		var sRef03  = this.dsSearch.getColumn(0, "SN_SEQ");
        		var sRef04  = "";
        		var oParam  = this.gfnDataSetToJson(this.dsAppList, this.dsAppList.rowposition)

        		console.info("================ oParam");
        		console.info(oParam);

        		this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, "", oParam, "fnAprvDialogCallback");
        	}
        }

        this.fnAprvDialogCallback = function()
        {
        	// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        	this.FormBtns.Select.click();
        };

        this.fnPRAttach = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC49";
        	fileManager.CD_DIR = [this.dsList.getColumn(0, "NO_PR"), this.dsSearch.getColumn(0, "SN_SEQ")];

        	var editYn = this.dsList.getColumn(0, "EQ_C90")
        	if(editYn == "Y")
        	{
        		fileManager.IS_READONLY = true;
        	}else
        	{
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        }

        this.fnPRAttach1 = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC50";
        	fileManager.CD_DIR = [this.dsList.getColumn(0, "NO_PR"), this.dsSearch.getColumn(0, "SN_SEQ")];

        	var editYn = this.dsList.getColumn(0, "EQ_C90")
        	if(editYn == "Y")
        	{
        		fileManager.IS_READONLY = true;
        	}else
        	{
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        }

        this.fnFileCallback = function() {
        };

        this.fnEquipFile = function(obj,e) {
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.NO_CONT = this.dsSearch.getColumn(0, "NO_CONT");
        	param.SN_SEQ = this.dsSearch.getColumn(0, "SN_SEQ");

        	var ds_param = "SU";
        	if(this.dsList.getColumn(0, "DS_CONTMETHOD") == "40")
        	{
        		ds_param = "MM";
        	}
        	param.DS_PARAM = ds_param;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_CONTRACT_EQUIP_FILE", "", param, 1130, 620);
        }

        this.fnEquipFileInit = function()
        {
        	this.dsExecEquip = new Dataset();
        	this.dsExecEquip.addColumn("NO_CONT", "string");
        	this.dsExecEquip.addColumn("SN_SEQ", "string");
        	this.dsExecEquip.addColumn("TY_GUBUN", "string");
        	this.dsExecEquip.addColumn("ID_USER", "string");
        	this.dsExecEquip.addColumn("TY_CHK", "string");

        	this.dsExecEquip.clearData();
        	var nrow = this.dsExecEquip.addRow();
        	this.dsExecEquip.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsExecEquip.setColumn(nrow, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));

        	var ty_gubun = "SU";
        	if(this.dsList.getColumn(0, "DS_CONTMETHOD") == "40")
        	{
        		ty_gubun = "MM";
        	}

        	this.dsExecEquip.setColumn(nrow, "TY_GUBUN", ty_gubun);
        	this.dsExecEquip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExecEquip.setColumn(nrow, "TY_CHK", "Y");

        	var strSvcId    = "execEquip";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execEquipInit=dsExecEquip";
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

        this.fnCheckRM = function(colnm, path)
        {
        	if(this.dsList.getColumn(0, colnm) == "Y")
        	{
        		path.set_readonly(true);
        	}
        	else
        	{
        		path.set_readonly(false);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divData01.form.divTaDa02.form.btnStamp01.addEventHandler("onclick",this.fnSITEJOINTCOMP,this);
            this.divData.form.divData01.form.divTaDa07.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.divData01.form.divTaDa07.form.btnINGI.addEventHandler("onclick",this.divData_divData01_divTaDa07_btnINGI_onclick,this);
            this.divData.form.divData01.form.divTaDa07.form.txtAM_INJISE_TARGET.addEventHandler("onchanged",this.divData_divData01_divTaDa07_txtAM_INJISE_TARGET_onchanged,this);
            this.divData.form.divData01.form.divTaDa14.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.divData01.form.divTaDa08.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.divData01.form.divTaDa09.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.divData01.form.divTaDa09.form.btnHaja.addEventHandler("onclick",this.divData_divData01_divTaDa09_btnHaja_onclick,this);
            this.divData.form.divData01.form.divTaDa10.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.divData01.form.divTaDa11.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.divData01.form.divTaDa12.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.divData01.form.divTaDa25.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.divData01.form.divTaDa13.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.divData01.form.divTaDa21.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.divData01.form.divTaDa22.form.staTaLe08.addEventHandler("onclick",this.divData_divData01_divTaDa05_staTaLe08_onclick,this);
            this.divData.form.btnStamp.addEventHandler("onclick",this.fnStamp,this);
            this.divData.form.btnStampView.addEventHandler("onclick",this.fnStampView,this);
            this.divData.form.btnStampPrint.addEventHandler("onclick",this.fninjisechk,this);
            this.divData.form.btnStamp00.addEventHandler("onclick",this.fnStampViewer,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsAppList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DCC_CONTRACT_SELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
