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
                this._setFormPosition(1050,1010);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SOJANG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SOJANG_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPTAE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ABORT_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ABORT_REASON_1ST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ABORT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CONT_MAIN_SEC\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SUGGESTION\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GUARANTEE_TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SUPPLEMENT_TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GUARANTEE_ADVP_TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUARANTEE_COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUPPLEMENT_COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUARANTEE_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GUARANTEE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GUARANTEE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUPPLEMENT_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SUPPLEMENT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SUPPLEMENT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUARANTEE_PROG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUPPLEMENT_PROG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GUARANTEE_COLLECT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SUPPLEMENT_COLLECT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTSTATUS_LIMIT_CONT_INT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTSTATUS_LIMIT_GISUNG\" type=\"STRING\" size=\"256\"/><Column id=\"RT_BID_GISUNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTSTATUS_LIMIT_CONT_EXT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_BID_WIN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID_REMAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RES_UNPAID_INT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RES_UNPAID_EXT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RES_UNPAID_SUBTOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RES_DEPOSIT_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RES_SUPPLEMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RES_DEPOSIT_BALANCE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RES_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_INVESTMENT_BACKPAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_INVESTMENT_ARREARS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_INVESTMENT_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FUNDS_OS\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OWN_SHARE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UNPAID_PROGSTATUS_DIRECT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UNPAID_PROGSTATUS_SK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UNPAID_PROGSTATUS_GAB\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UNPAID_PROGSTATUS_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UNPAID_PROGSTATUS_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BOND_FLUCT_EXT1\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BOND_FLUCT_EXT2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCCPR_CONTRACT_ABORT_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCCPR_CONTRACT_ABORT_INFO_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_CODE_LIST_SELECT</Col></Row><Row><Col id=\"SP\">DCCPR_CONTRACT_ABORT_VENDOR_PROG_INFO</Col><Col id=\"TARGET\">select1</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DCCPR_CONTRACT_ABORT_MBJS_INFO</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DCCPR_CONTRACT_ABORT_SITE_PROG_INFO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_CONT\"/><Col id=\"SN_SEQ\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">DS_CONTMETHOD</Col><Col id=\"DS_FIELD\">계약방법</Col></Row><Row><Col id=\"CD_FIELD\">CD_ACCOUNT</Col><Col id=\"DS_FIELD\">계정코드</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_ABORT_REASON", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_GUARANTEE_PROG", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_GUARANTEE_COMPANY", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_BOND_FLUCT_EXT1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
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
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData01","0","sta01:8","1040","327",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta201","0","0","150","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj.set_text("협력회사");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta211","sta201:-1","0","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta231","835","0","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta00","348","0","150","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("4");
            obj.set_text("관리책임자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta01","497","0","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta221","696","0","140","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_text("관리자메일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta02","835","29","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta03","696","29","140","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("8");
            obj.set_text("등록구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta04","497","29","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta05","348","29","150","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("10");
            obj.set_text("부문");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta06","149","29","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta07","0","29","150","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("12");
            obj.set_text("등록공종");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta08","835","58","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta09","696","58","140","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("14");
            obj.set_text("계약해지일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta10","497","58","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta11","348","58","150","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("16");
            obj.set_text("계약해지사유발생일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta12","149","58","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta13","0","58","150","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("18");
            obj.set_text("계약해지사유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta14","835","87","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta15","696","87","140","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("20");
            obj.set_text("결과보고");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta16","497","87","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta17","348","87","150","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("22");
            obj.set_text("처리안");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta18","149","87","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta19","0","87","150","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("24");
            obj.set_text("주계약담보(최소3%이상)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_UPTAE","sta201:5","34","188","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("3");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboDS_ABORT_REASON","155","63","188","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("25");
            obj.set_innerdataset("dsDS_ABORT_REASON");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboYN_CONT_MAIN_SEC","155","92","130","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("26");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_SOJANG","503","5","188","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("27");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_UPJONG","503","34","188","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("28");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_ABORT_REASON_1ST","503","63","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboYN_SUGGESTION","503","92","130","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("30");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_SOJANG_EMAIL","841","5","188","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("31");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboYN_E_CONT03","841","34","77","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("32");
            obj.set_innerdataset("dsYN_E_CONT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboYN_E_CONT04","922","34","77","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("33");
            obj.set_innerdataset("dsYN_E_CONT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_ABORT","841","63","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboYN_REPORT","841","92","130","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("35");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta20","0","126","260","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("36");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta21","259","126","260","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("37");
            obj.set_text("계약이행보증");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta22","518","126","260","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("38");
            obj.set_text("보증보완");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta23","777","126","258","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("39");
            obj.set_text("선급금이행보증");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta24","0","155","260","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("40");
            obj.set_text("청구대상여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta25","0","184","260","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("41");
            obj.set_text("보증사");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta26","0","213","260","56",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("42");
            obj.set_text("보증기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta27","0","268","260","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("43");
            obj.set_text("진행경과");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta28","0","297","260","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("44");
            obj.set_text("회수기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta29","259","155","260","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta30","518","155","260","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta31","777","155","258","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta32","259","184","260","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta33","518","184","260","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta34","777","184","258","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta35","259","213","260","56",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta36","518","213","260","56",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta37","777","213","258","56",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta38","259","268","260","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta39","518","268","260","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta40","777","268","258","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta41","259","297","260","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta42","518","297","260","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta43","777","297","258","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboYN_GUARANTEE_TARGET","265","160","130","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("60");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboDS_GUARANTEE_COMPANY","265","189","130","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("61");
            obj.set_innerdataset("dsDS_GUARANTEE_COMPANY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_GUARANTEE_DESC","265","218","188","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("62");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_GONGSA_range01","375","244","10","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("63");
            obj.set_text("~");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_GUARANTEE_TO","390","244","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("64");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_GUARANTEE_FROM","265","244","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("65");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_GONGSA_range00","633","244","10","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("66");
            obj.set_text("~");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_SUPPLEMENT_TO","648","244","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("67");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclDT_SUPPLEMENT_FROM","523","244","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("68");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_SUPPLEMENT_DESC","523","218","188","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("69");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_GONGSA_range02","892","244","10","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("70");
            obj.set_text("~");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclTO_WORK01","907","244","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("71");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("tclFR_WORK01","782","244","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("72");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_ORDER05","782","218","188","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("73");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboDS_GUARANTEE_PROG","265","273","130","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("74");
            obj.set_innerdataset("dsDS_GUARANTEE_PROG");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDT_GUARANTEE_COLLECT","265","302","248","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("75");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDT_SUPPLEMENT_COLLECT","524","302","248","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("76");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_ORDER08","783","302","246","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("77");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboDS_SUPPLEMENT_PROG","524","273","130","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("78");
            obj.set_innerdataset("dsDS_GUARANTEE_PROG");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboYN_E_CONT10","783","273","130","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("79");
            obj.set_innerdataset("dsYN_E_CONT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboYN_SUPPLEMENT_TARGET","523","160","130","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("80");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboDS_SUPPLEMENT_COMPANY","523","189","130","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("81");
            obj.set_innerdataset("dsDS_GUARANTEE_COMPANY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboYN_GUARANTEE_ADVP_TARGET","782","160","130","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("82");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboYN_E_CONT14","782","189","130","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("83");
            obj.set_innerdataset("dsYN_E_CONT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","155","5","188","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("84");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta02","0","divData01:15","882","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("계약금액정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Tab("tabData","0","sta02:10","1035",null,null,"0",null,null,"300",null,this.divData.form);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("계약및투입현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("div00","10","5",null,"89","10",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_formscrolltype("none");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("계약현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta001","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("현장실시여부");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("2");
            obj.set_text("계약고(내)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta02","sta00:-1","30","225","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta00:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("계약고(외)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","sta02:-1","225","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta06","sta02:-1","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("6");
            obj.set_text("기성고");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta07","sta04:-1","sta06:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("낙찰율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta05","sta06:-1","30","225","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta05:-1","225","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta09","666","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("10");
            obj.set_text("기성율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta10","775","30","220","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta11","666","59","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("잔공사");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta12","775","59","220","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_CONTSTATUS_LIMIT_CONT_INT","115","35","155","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("14");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_CONTSTATUS_LIMIT_CONT_EXT","115","64","155","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("15");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Button("btnDS_CONTSTATUS_LIMIT_CONT_EXT_ATTCH","275","64","50","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("16");
            obj.set_text("첨부");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_CONTSTATUS_LIMIT_GISUNG","448","35","155","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("17");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_BID_WIN","448","64","155","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("18");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta19","608","65","20","19",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("19");
            obj.set_text("%");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_BID_GISUNG","780","35","153","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("20");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta13","938","36","20","19",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("21");
            obj.set_text("%");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_BID_REMAIN","780","64","153","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div00.form);
            obj.set_taborder("22");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div00.addChild(obj.name, obj);

            obj = new Div("div01","10","div00:10",null,"120","10",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_formscrolltype("none");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("재원");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta001","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("현장실시여부");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta00","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("2");
            obj.set_text("미불(계약내)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta02","sta00:-1","30","225","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta00:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("4");
            obj.set_text("보증금(계약)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","sta02:-1","225","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta06","sta02:-1","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("6");
            obj.set_text("미불(계약외)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta07","sta04:-1","sta06:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("7");
            obj.set_text("보증보완");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta05","sta06:-1","30","225","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta05:-1","225","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta09","666","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("10");
            obj.set_text("미불(소계)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta10","775","30","220","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta11","666","59","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("12");
            obj.set_text("보증금(예치금)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta12","775","59","220","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta13","666","88","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("14");
            obj.set_text("계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Static("sta14","775","88","220","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_RES_UNPAID_INT","115","35","155","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("16");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_RES_DEPOSIT_CONT","115","64","155","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("17");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Button("btnDS_RES_DEPOSIT_CONT_ATTCH","275","64","50","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("18");
            obj.set_text("첨부");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_RES_UNPAID_EXT","448","35","155","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("19");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_RES_SUPPLEMENT","448","64","155","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("20");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Button("btnDS_RES_SUPPLEMENT_ATTCH","608","64","50","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("21");
            obj.set_text("첨부");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_RES_UNPAID_SUBTOTAL","781","35","153","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("22");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_RES_DEPOSIT_BALANCE","781","64","153","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("23");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Button("btnDS_RES_DEPOSIT_BALANCE_ATTCH","938","64","50","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("24");
            obj.set_text("첨부");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_RES_TOTAL","781","93","153","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div01.form);
            obj.set_taborder("25");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div01.addChild(obj.name, obj);

            obj = new Div("div02","10","div01:10",null,"111","10",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_formscrolltype("none");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("0");
            obj.set_text("투입예정");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new Static("sta001","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("1");
            obj.set_text("현장실시여부");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new Static("sta00","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("2");
            obj.set_text("체불(노임)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new Static("sta02","sta00:-1","30","225","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta00:9","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("4");
            obj.set_text("자금과부족");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","sta02:9","225","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new Static("sta06","sta02:-1","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("6");
            obj.set_text("체불(자재비외)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new Static("sta07","sta04:-1","sta06:9","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("7");
            obj.set_text("당사지분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new Static("sta05","sta06:-1","30","225","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta05:9","552","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new Static("sta09","666","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("10");
            obj.set_text("계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new Static("sta10","775","30","220","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_INVESTMENT_BACKPAY","115","35","155","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("12");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_FUNDS_OS","115","74","155","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("13");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_INVESTMENT_ARREARS","448","35","155","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("14");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new MaskEdit("txtRT_OWN_SHARE","448","74","155","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("15");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new Static("sta19","608","75","20","19",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("16");
            obj.set_text("%");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_INVESTMENT_TOTAL","781","35","153","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form.div02.form);
            obj.set_taborder("17");
            obj.set_format("9,999");
            this.divData.form.tabData.tab1.form.div02.addChild(obj.name, obj);

            obj = new Div("div03","10","div02:10",null,"161","10",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_formscrolltype("none");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab1.form.div03.form);
            obj.set_taborder("0");
            obj.set_text("진행 중 현장 현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.div03.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","30","994",null,null,"0",null,null,null,null,this.divData.form.tabData.tab1.form.div03.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab1.form.div03.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("처리현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("div00","10","5",null,"89","10",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj.set_formscrolltype("none");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("미불 처리 현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta001","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("현장실시여부");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("2");
            obj.set_text("직불");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta02","sta00:-1","30","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta00:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("차이");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","sta02:-1","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta06","sta02:-1","30","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("6");
            obj.set_text("상계(선급금상계,\r\n하자보증금, 공제분 등)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta07","sta04:-1","sta06:-1","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta05","sta06:-1","30","225","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta05:-1","225","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta09","671","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("10");
            obj.set_text("공탁");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta10","780","30","215","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta11","671","59","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta12","780","59","215","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_UNPAID_PROGSTATUS_DIRECT","115","35","133","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("14");
            obj.set_format("9,999");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Button("btnDS_UNPAID_PROGSTATUS_DIRECT_ATTCH","253","35","50","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("15");
            obj.set_text("첨부");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_UNPAID_PROGSTATUS_GAB","115","64","133","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("16");
            obj.set_format("9,999");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_UNPAID_PROGSTATUS_SK","453","35","180","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("17");
            obj.set_format("9,999");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_UNPAID_PROGSTATUS_TOTAL","453","64","180","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("18");
            obj.set_format("9,999");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("txtDS_UNPAID_PROGSTATUS_DESC","786","64","175","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("19");
            obj.set_format("9,999");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Button("btnGONG_TAK_ATTCH","786","35","50","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div00.form);
            obj.set_taborder("20");
            obj.set_text("첨부");
            this.divData.form.tabData.tab2.form.div00.addChild(obj.name, obj);

            obj = new Div("div01","10","div00:10",null,"161","10",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_formscrolltype("none");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab2.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("진행 중 현장 현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab2.form.div01.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","30","995",null,null,"0",null,null,null,null,this.divData.form.tabData.tab2.form.div01.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.form.div01.addChild(obj.name, obj);

            obj = new Div("div02","10","div01:10",null,"60","10",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj.set_formscrolltype("none");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab2.form.div02.form);
            obj.set_taborder("0");
            obj.set_text("채권 변동");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab2.form.div02.addChild(obj.name, obj);

            obj = new Static("sta001","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div02.form);
            obj.set_taborder("1");
            obj.set_text("현장실시여부");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab2.form.div02.addChild(obj.name, obj);

            obj = new Static("sta00","0","30","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div02.form);
            obj.set_taborder("2");
            obj.set_text("채권보전조치");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.form.div02.addChild(obj.name, obj);

            obj = new Static("sta02","sta00:-1","30","200","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.form.div02.addChild(obj.name, obj);

            obj = new Static("sta06","sta02:-1","30","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div02.form);
            obj.set_taborder("4");
            obj.set_text("채권양도통지");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab2.form.div02.addChild(obj.name, obj);

            obj = new Static("sta05","sta06:-1","30","548","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.form.div02.addChild(obj.name, obj);

            obj = new Combo("cboTY_BOND_FLUCT_EXT1","sta00:5","35","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div02.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsTY_BOND_FLUCT_EXT1");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab2.form.div02.addChild(obj.name, obj);

            obj = new Combo("cboTY_BOND_FLUCT_EXT2","453","35","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form.div02.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab2.form.div02.addChild(obj.name, obj);

            obj = new Div("div03","10","div02:10",null,"161","10",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("3");
            obj.set_formscrolltype("none");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"22","0",null,null,null,null,null,this.divData.form.tabData.tab2.form.div03.form);
            obj.set_taborder("0");
            obj.set_text("현장 진행 현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab2.form.div03.addChild(obj.name, obj);

            obj = new Grid("objGrid3","0","30","995",null,null,"0",null,null,null,null,this.divData.form.tabData.tab2.form.div03.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.form.div03.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("이행사항점검현황");
            this.divData.form.tabData.addChild(obj.name, obj);
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

            obj = new BindItem("item13","divData.form.divData01.form.txtDS_UPTAE","value","dsList","DS_UPTAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divData01.form.cboDS_ABORT_REASON","value","dsList","DS_ABORT_REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divData01.form.cboYN_CONT_MAIN_SEC","value","dsList","YN_CONT_MAIN_SEC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData01.form.txtDS_SOJANG","value","dsList","DS_SOJANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divData01.form.txtDS_UPJONG","value","dsList","DS_UPJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData01.form.tclDT_ABORT_REASON_1ST","value","dsList","DT_ABORT_REASON_1ST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divData01.form.txtDS_SOJANG_EMAIL","value","dsList","DS_SOJANG_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divData01.form.tclDT_ABORT","value","dsList","DT_ABORT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divData01.form.txtDS_GUARANTEE_DESC","value","dsList","DS_GUARANTEE_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divData01.form.tclDT_GUARANTEE_TO","value","dsList","DT_GUARANTEE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divData01.form.tclDT_GUARANTEE_FROM","value","dsList","DT_GUARANTEE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divData01.form.tclDT_SUPPLEMENT_TO","value","dsList","DT_SUPPLEMENT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divData01.form.tclDT_SUPPLEMENT_FROM","value","dsList","DT_SUPPLEMENT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divData01.form.txtDS_SUPPLEMENT_DESC","value","dsList","DS_SUPPLEMENT_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divData01.form.txtDT_GUARANTEE_COLLECT","value","dsList","DT_GUARANTEE_COLLECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divData01.form.txtDT_SUPPLEMENT_COLLECT","value","dsList","DT_SUPPLEMENT_COLLECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","divData.form.tabData.tab2.form.div02.form.cboTY_BOND_FLUCT_EXT1","value","dsList","TY_BOND_FLUCT_EXT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","divData.form.tabData.tab1.form.div00.form.txtDS_CONTSTATUS_LIMIT_CONT_INT","value","dsList","DS_CONTSTATUS_LIMIT_CONT_INT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab1.form.div00.form.txtDS_CONTSTATUS_LIMIT_CONT_EXT","value","dsList","DS_CONTSTATUS_LIMIT_CONT_EXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab1.form.div00.form.txtDS_CONTSTATUS_LIMIT_GISUNG","value","dsList","DS_CONTSTATUS_LIMIT_GISUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab1.form.div00.form.txtRT_BID_WIN","value","dsList","RT_BID_WIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab1.form.div00.form.txtRT_BID_GISUNG","value","dsList","RT_BID_GISUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab1.form.div00.form.txtDS_BID_REMAIN","value","dsList","DS_BID_REMAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","divData.form.tabData.tab1.form.div01.form.txtDS_RES_UNPAID_INT","value","dsList","DS_RES_UNPAID_INT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","divData.form.tabData.tab1.form.div01.form.txtDS_RES_DEPOSIT_CONT","value","dsList","DS_RES_DEPOSIT_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divData.form.tabData.tab1.form.div01.form.txtDS_RES_UNPAID_EXT","value","dsList","DS_RES_UNPAID_EXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divData.form.tabData.tab1.form.div01.form.txtDS_RES_SUPPLEMENT","value","dsList","DS_RES_SUPPLEMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","divData.form.tabData.tab1.form.div01.form.txtDS_RES_UNPAID_SUBTOTAL","value","dsList","DS_RES_UNPAID_SUBTOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","divData.form.tabData.tab1.form.div01.form.txtDS_RES_DEPOSIT_BALANCE","value","dsList","DS_RES_DEPOSIT_BALANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","divData.form.tabData.tab1.form.div01.form.txtDS_RES_TOTAL","value","dsList","DS_RES_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","divData.form.tabData.tab1.form.div02.form.txtDS_INVESTMENT_BACKPAY","value","dsList","DS_INVESTMENT_BACKPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.tabData.tab1.form.div02.form.txtDS_FUNDS_OS","value","dsList","DS_FUNDS_OS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.tabData.tab1.form.div02.form.txtDS_INVESTMENT_ARREARS","value","dsList","DS_INVESTMENT_ARREARS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.tabData.tab1.form.div02.form.txtRT_OWN_SHARE","value","dsList","RT_OWN_SHARE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.tabData.tab1.form.div02.form.txtDS_INVESTMENT_TOTAL","value","dsList","DS_INVESTMENT_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.tabData.tab2.form.div00.form.txtDS_UNPAID_PROGSTATUS_DIRECT","value","dsList","DS_UNPAID_PROGSTATUS_DIRECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.tabData.tab2.form.div00.form.txtDS_UNPAID_PROGSTATUS_GAB","value","dsList","DS_UNPAID_PROGSTATUS_GAB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.tabData.tab2.form.div00.form.txtDS_UNPAID_PROGSTATUS_SK","value","dsList","DS_UNPAID_PROGSTATUS_SK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.tabData.tab2.form.div00.form.txtDS_UNPAID_PROGSTATUS_TOTAL","value","dsList","DS_UNPAID_PROGSTATUS_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.tabData.tab2.form.div00.form.txtDS_UNPAID_PROGSTATUS_DESC","value","dsList","DS_UNPAID_PROGSTATUS_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.tabData.tab2.form.div02.form.cboTY_BOND_FLUCT_EXT2","value","dsList","TY_BOND_FLUCT_EXT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.divData01.form.txtDS_VENDOR","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divData01.form.cboYN_SUGGESTION","value","dsList","YN_SUGGESTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divData01.form.cboYN_REPORT","value","dsList","YN_REPORT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divData01.form.cboYN_GUARANTEE_TARGET","value","dsList","YN_GUARANTEE_TARGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divData01.form.cboYN_SUPPLEMENT_TARGET","value","dsList","YN_SUPPLEMENT_TARGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divData01.form.cboYN_GUARANTEE_ADVP_TARGET","value","dsList","YN_GUARANTEE_ADVP_TARGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divData01.form.cboDS_SUPPLEMENT_COMPANY","value","dsList","DS_SUPPLEMENT_COMPANY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divData01.form.cboDS_GUARANTEE_COMPANY","value","dsList","DS_GUARANTEE_COMPANY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divData01.form.cboDS_GUARANTEE_PROG","value","dsList","DS_GUARANTEE_PROG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divData01.form.cboDS_SUPPLEMENT_PROG","value","dsList","DS_SUPPLEMENT_PROG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCC_CONTRACT_ABORT.xfdl", function() {
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
        	/*
        	this.btnDetail = this.gfnFormButtonAdd("btnDetail", "fnDetail");
        	this.btnStock = this.gfnFormButtonAdd("btnStock", "fnStock");
        	this.btnAddVendor = this.gfnFormButtonAdd("btnAddVendor", "fnAddVendor");
        	this.btnComplete = this.gfnFormButtonAdd("btnComplete", "fnComplete");
        	this.btnCompleteCancel = this.gfnFormButtonAdd("btnCompleteCancel", "fnCompleteCancel");
        	*/
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_CONT = this.divSearch.form.ccfNO_CONT;
        	this.ccfSN_SEQ = this.divSearch.form.ccfSN_SEQ;

        	this.dxGrid1 = this.divData.form.tabData.tab1.form.div03.form.objGrid1;
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.div01.form.objGrid2;
        	this.dxGrid3 = this.divData.form.tabData.tab2.form.div03.form.objGrid3;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_CONT.CodeFindName = "DCX_CFCONTRACT_03";
        	this.ccfSN_SEQ.CodeFindName = "DCX_CFSNSEQ_01";

        	this.ccfNO_CONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfSN_SEQ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DC", "DCC_CONTRACT_ABORT_VENDOR_PROG");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DC", "DCC_CONTRACT_ABORT_MBJS_INFO");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DC", "DCC_CONTRACT_ABORT_SITE_PROG");

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
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_CONT", "string");
        	this.dsSelect.addColumn("SN_SEQ", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_CONT", "string");
        	this.dsSave.addColumn("SN_SEQ", "string");
        	this.dsSave.addColumn("TY_REGIST1", "string");
        	this.dsSave.addColumn("TY_REGIST2", "string");
        	this.dsSave.addColumn("DT_ABORT_REASON", "string");
        	this.dsSave.addColumn("DT_ABORT_REASON_1ST", "string");
        	this.dsSave.addColumn("DT_ABORT", "string");
        	this.dsSave.addColumn("DS_ABORT_REASON", "string");
        	this.dsSave.addColumn("YN_CONT_MAIN_SEC", "string");
        	this.dsSave.addColumn("YN_SUGGESTION", "string");
        	this.dsSave.addColumn("YN_REPORT", "string");
        	this.dsSave.addColumn("YN_GUARANTEE_TARGET", "string");
        	this.dsSave.addColumn("DS_GUARANTEE_COMPANY", "string");
        	this.dsSave.addColumn("DT_GUARANTEE_FROM", "string");
        	this.dsSave.addColumn("DT_GUARANTEE_TO", "string");
        	this.dsSave.addColumn("DS_GUARANTEE_DESC", "string");
        	this.dsSave.addColumn("DS_GUARANTEE_PROG", "string");
        	this.dsSave.addColumn("DT_GUARANTEE_COLLECT", "string");
        	this.dsSave.addColumn("YN_SUPPLEMENT_TARGET", "string");
        	this.dsSave.addColumn("DS_SUPPLEMENT_COMPANY", "string");
        	this.dsSave.addColumn("DT_SUPPLEMENT_FROM", "string");
        	this.dsSave.addColumn("DT_SUPPLEMENT_TO", "string");
        	this.dsSave.addColumn("DS_SUPPLEMENT_DESC", "string");
        	this.dsSave.addColumn("DS_SUPPLEMENT_PROG", "string");
        	this.dsSave.addColumn("DT_SUPPLEMENT_COLLECT", "string");
        	this.dsSave.addColumn("YN_GUARANTEE_ADVP_TARGET", "string");
        	this.dsSave.addColumn("DS_CONTSTATUS_LIMIT_CONT_EXT", "string");
        	this.dsSave.addColumn("DS_RES_UNPAID_INT", "string");
        	this.dsSave.addColumn("DS_RES_UNPAID_EXT", "string");
        	this.dsSave.addColumn("DS_RES_DEPOSIT_CONT", "string");
        	this.dsSave.addColumn("DS_RES_SUPPLEMENT", "string");
        	this.dsSave.addColumn("DS_RES_DEPOSIT_BALANCE", "string");
        	this.dsSave.addColumn("DS_INVESTMENT_BACKPAY", "string");
        	this.dsSave.addColumn("DS_INVESTMENT_ARREARS", "string");
        	this.dsSave.addColumn("DS_FUNDS_OS", "string");
        	this.dsSave.addColumn("RT_OWN_SHARE", "string");
        	this.dsSave.addColumn("DS_UNPAID_PROGSTATUS_DIRECT", "string");
        	this.dsSave.addColumn("DS_UNPAID_PROGSTATUS_SK", "string");
        	this.dsSave.addColumn("DS_UNPAID_PROGSTATUS_DEPOSIT", "string");
        	this.dsSave.addColumn("DS_UNPAID_PROGSTATUS_DESC", "string");
        	this.dsSave.addColumn("DS_MBJS_STATUS_DEPOSIT", "string");
        	this.dsSave.addColumn("DS_MBJS_STATUS_DEPOSIT_TOTAL", "string");
        	this.dsSave.addColumn("DS_MBJS_STATUS_EXT1", "string");
        	this.dsSave.addColumn("DS_MBJS_STATUS_EXT2", "string");
        	this.dsSave.addColumn("TY_BOND_FLUCT_EXT1", "string");
        	this.dsSave.addColumn("TY_BOND_FLUCT_EXT2", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_VENDOR", "string");


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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
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
          *	그리드 조회
          */
        this.fnSelectSub = function() {
        	//if (!this.fnSelectValidate()) return false;

        	if (this.dsList.rowcount < 1) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsSelect.setColumn(0, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));

        	var strSvcId    = "selectSub";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select1=dsSelectSub select2=dsSelectSub select3=dsSelect";
        	var outData     = "dsList1=select10 dsList2=select20 dsList3=select30";
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
        	if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return;

        	this.dsSave.clearData();

        	var flag = this.gfnGetFormStatus(this);

        	if(flag == "U") {
        		var nrow = this.dsSave.addRow();

        		this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsSave.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        		this.dsSave.setColumn(nrow, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        		this.dsSave.setColumn(nrow, "TY_REGIST1", this.dsList.getColumn(0, "TY_REGIST1"));
        		this.dsSave.setColumn(nrow, "TY_REGIST2", this.dsList.getColumn(0, "TY_REGIST2"));
        		this.dsSave.setColumn(nrow, "DT_ABORT_REASON", this.dsList.getColumn(0, "DT_ABORT_REASON"));
        		this.dsSave.setColumn(nrow, "DT_ABORT_REASON_1ST", this.dsList.getColumn(0, "DT_ABORT_REASON_1ST"));
        		this.dsSave.setColumn(nrow, "DT_ABORT", this.dsList.getColumn(0, "DT_ABORT"));
        		this.dsSave.setColumn(nrow, "DS_ABORT_REASON", this.dsList.getColumn(0, "DS_ABORT_REASON"));
        		this.dsSave.setColumn(nrow, "YN_CONT_MAIN_SEC", this.dsList.getColumn(0, "YN_CONT_MAIN_SEC"));
        		this.dsSave.setColumn(nrow, "YN_SUGGESTION", this.dsList.getColumn(0, "YN_SUGGESTION"));
        		this.dsSave.setColumn(nrow, "YN_REPORT", this.dsList.getColumn(0, "YN_REPORT"));
        		this.dsSave.setColumn(nrow, "YN_GUARANTEE_TARGET", this.dsList.getColumn(0, "YN_GUARANTEE_TARGET"));
        		this.dsSave.setColumn(nrow, "DS_GUARANTEE_COMPANY", this.dsList.getColumn(0, "DS_GUARANTEE_COMPANY"));
        		this.dsSave.setColumn(nrow, "DT_GUARANTEE_FROM", this.dsList.getColumn(0, "DT_GUARANTEE_FROM"));
        		this.dsSave.setColumn(nrow, "DT_GUARANTEE_TO", this.dsList.getColumn(0, "DT_GUARANTEE_TO"));
        		this.dsSave.setColumn(nrow, "DS_GUARANTEE_DESC", this.dsList.getColumn(0, "DS_GUARANTEE_DESC"));
        		this.dsSave.setColumn(nrow, "DS_GUARANTEE_PROG", this.dsList.getColumn(0, "DS_GUARANTEE_PROG"));
        		this.dsSave.setColumn(nrow, "DT_GUARANTEE_COLLECT", this.dsList.getColumn(0, "DT_GUARANTEE_COLLECT"));
        		this.dsSave.setColumn(nrow, "YN_SUPPLEMENT_TARGET", this.dsList.getColumn(0, "YN_SUPPLEMENT_TARGET"));
        		this.dsSave.setColumn(nrow, "DS_SUPPLEMENT_COMPANY", this.dsList.getColumn(0, "DS_SUPPLEMENT_COMPANY"));
        		this.dsSave.setColumn(nrow, "DT_SUPPLEMENT_FROM", this.dsList.getColumn(0, "DT_SUPPLEMENT_FROM"));
        		this.dsSave.setColumn(nrow, "DT_SUPPLEMENT_TO", this.dsList.getColumn(0, "DT_SUPPLEMENT_TO"));
        		this.dsSave.setColumn(nrow, "DS_SUPPLEMENT_DESC", this.dsList.getColumn(0, "DS_SUPPLEMENT_DESC"));
        		this.dsSave.setColumn(nrow, "DS_SUPPLEMENT_PROG", this.dsList.getColumn(0, "DS_SUPPLEMENT_PROG"));
        		this.dsSave.setColumn(nrow, "DT_SUPPLEMENT_COLLECT", this.dsList.getColumn(0, "DT_SUPPLEMENT_COLLECT"));
        		this.dsSave.setColumn(nrow, "YN_GUARANTEE_ADVP_TARGET", this.dsList.getColumn(0, "YN_GUARANTEE_ADVP_TARGET"));
        		this.dsSave.setColumn(nrow, "DS_CONTSTATUS_LIMIT_CONT_EXT", this.dsList.getColumn(0, "DS_CONTSTATUS_LIMIT_CONT_EXT"));
        		this.dsSave.setColumn(nrow, "DS_RES_UNPAID_INT", this.dsList.getColumn(0, "DS_RES_UNPAID_INT"));
        		this.dsSave.setColumn(nrow, "DS_RES_UNPAID_EXT", this.dsList.getColumn(0, "DS_RES_UNPAID_EXT"));
        		this.dsSave.setColumn(nrow, "DS_RES_DEPOSIT_CONT", this.dsList.getColumn(0, "DS_RES_DEPOSIT_CONT"));
        		this.dsSave.setColumn(nrow, "DS_RES_SUPPLEMENT", this.dsList.getColumn(0, "DS_RES_SUPPLEMENT"));
        		this.dsSave.setColumn(nrow, "DS_RES_DEPOSIT_BALANCE", this.dsList.getColumn(0, "DS_RES_DEPOSIT_BALANCE"));
        		this.dsSave.setColumn(nrow, "DS_INVESTMENT_BACKPAY", this.dsList.getColumn(0, "DS_INVESTMENT_BACKPAY"));
        		this.dsSave.setColumn(nrow, "DS_INVESTMENT_ARREARS", this.dsList.getColumn(0, "DS_INVESTMENT_ARREARS"));
        		this.dsSave.setColumn(nrow, "DS_FUNDS_OS", this.dsList.getColumn(0, "DS_FUNDS_OS"));
        		this.dsSave.setColumn(nrow, "RT_OWN_SHARE", this.dsList.getColumn(0, "RT_OWN_SHARE"));
        		this.dsSave.setColumn(nrow, "DS_UNPAID_PROGSTATUS_DIRECT", this.dsList.getColumn(0, "DS_UNPAID_PROGSTATUS_DIRECT"));
        		this.dsSave.setColumn(nrow, "DS_UNPAID_PROGSTATUS_SK", this.dsList.getColumn(0, "DS_UNPAID_PROGSTATUS_SK"));
        		this.dsSave.setColumn(nrow, "DS_UNPAID_PROGSTATUS_DEPOSIT", this.dsList.getColumn(0, "DS_UNPAID_PROGSTATUS_DEPOSIT"));
        		this.dsSave.setColumn(nrow, "DS_UNPAID_PROGSTATUS_DESC", this.dsList.getColumn(0, "DS_UNPAID_PROGSTATUS_DESC"));
        		this.dsSave.setColumn(nrow, "DS_MBJS_STATUS_DEPOSIT", this.dsList.getColumn(0, "DS_MBJS_STATUS_DEPOSIT"));
        		this.dsSave.setColumn(nrow, "DS_MBJS_STATUS_DEPOSIT_TOTAL", this.dsList.getColumn(0, "DS_MBJS_STATUS_DEPOSIT_TOTAL"));
        		this.dsSave.setColumn(nrow, "DS_MBJS_STATUS_EXT1", this.dsList.getColumn(0, "DS_MBJS_STATUS_EXT1"));
        		this.dsSave.setColumn(nrow, "DS_MBJS_STATUS_EXT2", this.dsList.getColumn(0, "DS_MBJS_STATUS_EXT2"));
        		this.dsSave.setColumn(nrow, "TY_BOND_FLUCT_EXT1", this.dsList.getColumn(0, "TY_BOND_FLUCT_EXT1"));
        		this.dsSave.setColumn(nrow, "TY_BOND_FLUCT_EXT2", this.dsList.getColumn(0, "TY_BOND_FLUCT_EXT2"));
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
        		this.fnSelectSub();
        	}
        	else if (svcID == "selectSub") {

        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
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


        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "A10");

        	// 같은 SP 다중건 조회는 row 추가해서
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(1, "CD_TYPE", "A30");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(2, "CD_TYPE", "C13");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(3, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(3, "CD_TYPE", "A20");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsDS_ABORT_REASON=combo0 dsDS_GUARANTEE_PROG=combo1 dsDS_GUARANTEE_COMPANY=combo2 dsTY_BOND_FLUCT_EXT1=combo3";
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


        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");	// 폼상태 업데이트
        	}
        };

        // 계약고(외) 첨부 버튼
        this.divData_tabData_tab1_div00_btnDS_CONTSTATUS_LIMIT_CONT_EXT_ATTCH_onclick = function(obj,e)
        {
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC90";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"NO_CONT")+"-"+this.dsSearch.getColumn(0, "SN_SEQ"), "계약고"];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}
        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        // 보증금(계약) 첨부 버튼
        this.divData_tabData_tab1_div01_btnDS_RES_DEPOSIT_CONT_ATTCH_onclick = function(obj,e)
        {
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC90";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"NO_CONT")+"-"+this.dsSearch.getColumn(0, "SN_SEQ"), "보증금계약"];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}
        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        // 보증보완 첨부 버튼
        this.divData_tabData_tab1_div01_btnDS_RES_SUPPLEMENT_ATTCH_onclick = function(obj,e)
        {
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC90";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"NO_CONT")+"-"+this.dsSearch.getColumn(0, "SN_SEQ"), "보증보완"];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}
        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        // 보증금(예치금) 첨부 버튼
        this.divData_tabData_tab1_div01_btnDS_RES_DEPOSIT_BALANCE_ATTCH_onclick = function(obj,e)
        {
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC90";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"NO_CONT")+"-"+this.dsSearch.getColumn(0, "SN_SEQ"), "보증금예치"];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}
        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        // 직불 첨부 버튼
        this.divData_tabData_tab2_div00_btnDS_UNPAID_PROGSTATUS_DIRECT_ATTCH_onclick = function(obj,e)
        {
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC90";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"NO_CONT")+"-"+this.dsSearch.getColumn(0, "SN_SEQ"), "미불_직불"];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}
        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        // 공탁 첨부 버튼
        this.divData_tabData_tab2_div00_btnGONG_TAK_ATTCH_onclick = function(obj,e)
        {
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC90";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"NO_CONT")+"-"+this.dsSearch.getColumn(0, "SN_SEQ"), "미불_공탁서"];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}
        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        this.fnFileCallback = function() {
        	//this.fnSelect();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divData01.form.sta201.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta00.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta221.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta03.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta05.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta07.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta09.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta11.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta13.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta15.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta17.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta19.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta20.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta21.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta22.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta23.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta24.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta25.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta26.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta27.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divData01.form.sta28.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab1.form.div00.form.btnDS_CONTSTATUS_LIMIT_CONT_EXT_ATTCH.addEventHandler("onclick",this.divData_tabData_tab1_div00_btnDS_CONTSTATUS_LIMIT_CONT_EXT_ATTCH_onclick,this);
            this.divData.form.tabData.tab1.form.div01.form.btnDS_RES_DEPOSIT_CONT_ATTCH.addEventHandler("onclick",this.divData_tabData_tab1_div01_btnDS_RES_DEPOSIT_CONT_ATTCH_onclick,this);
            this.divData.form.tabData.tab1.form.div01.form.btnDS_RES_SUPPLEMENT_ATTCH.addEventHandler("onclick",this.divData_tabData_tab1_div01_btnDS_RES_SUPPLEMENT_ATTCH_onclick,this);
            this.divData.form.tabData.tab1.form.div01.form.btnDS_RES_DEPOSIT_BALANCE_ATTCH.addEventHandler("onclick",this.divData_tabData_tab1_div01_btnDS_RES_DEPOSIT_BALANCE_ATTCH_onclick,this);
            this.divData.form.tabData.tab2.form.div00.form.btnDS_UNPAID_PROGSTATUS_DIRECT_ATTCH.addEventHandler("onclick",this.divData_tabData_tab2_div00_btnDS_UNPAID_PROGSTATUS_DIRECT_ATTCH_onclick,this);
            this.divData.form.tabData.tab2.form.div00.form.btnGONG_TAK_ATTCH.addEventHandler("onclick",this.divData_tabData_tab2_div00_btnGONG_TAK_ATTCH_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCC_CONTRACT_ABORT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
