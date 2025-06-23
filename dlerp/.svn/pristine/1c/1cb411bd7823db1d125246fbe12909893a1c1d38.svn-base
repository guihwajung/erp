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
            this.set_titletext("입찰사배정(입찰참여업체등록)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ELAPDOC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ELAPPRGS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ELAPPRGS\" type=\"STRING\" size=\"256\"/><Column id=\"RM_VENDOR_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_ORDERPLAN_BONSA_SELECT</Col></Row><Row><Col id=\"TARGET\">detail</Col><Col id=\"SP\">DCBPR_RECVENDOR_CONFIRM_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_CODE_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DCBPR_RECOMMENDCUSTREQSETTLEFINISH_UPDATE</Col></Row><Row><Col id=\"TARGET\">appChk</Col><Col id=\"SP\">DCBPR_APP_DC02_CHK</Col></Row><Row><Col id=\"TARGET\">appSelect</Col><Col id=\"SP\">DCBPR_APP_DC02_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCBPR_RECOMMENDCUSTREQSETTLE_ETC_UPDATE</Col></Row><Row><Col id=\"TARGET\">update2</Col><Col id=\"SP\">DCBPR_RECOMMENDCUSTREQSETTLE_ETC2_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ACCOUNT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"DATA\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_CONTMETHOD", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_TAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"RT_JIBUN\" type=\"INT\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FROMTO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HQRECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HQAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REQUEST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_GONGSA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_PYEONG\" type=\"INT\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SPECCONST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RFQ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_SITE\" type=\"INT\" size=\"256\"/><Column id=\"AM_BASIC\" type=\"INT\" size=\"256\"/><Column id=\"YN_PUBLISH_BID\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ATTACH_ILSIK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HASU\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EXFILE_SEPARATE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNION_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNION_BID_CONNECT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_UNION_BID\" type=\"STRING\" size=\"256\"/><Column id=\"YN_UNION_BID_ING\" type=\"STRING\" size=\"256\"/><Column id=\"CT_GONGU\" type=\"INT\" size=\"256\"/><Column id=\"NUM_GONGU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITE4\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREA_SITEALL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ID_MANAGER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NM_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MANAGERTEL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SITESABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NM_SITESABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SITETEL\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIDREMARK\" type=\"STRING\" size=\"256\"/><Column id=\"RM_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"ONOFF_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"AT_SITEEXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN_GONGO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM_GONGO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID_SUCCESS\" type=\"STRING\" size=\"256\"/><Column id=\"ONOFF\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BIDCOORDI\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIDCOORDI\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BIDCOORDITEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_BIDCOORDI\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BIDDAM1TEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BIDDAM2\" type=\"STRING\" size=\"256\"/><Column id=\"NM_BIDDAM2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BIDDAM2TEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_BIDDAM2\" type=\"STRING\" size=\"256\"/><Column id=\"ID_QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"NM_QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_QUESTIONTEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"NM_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"NM_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"GW_STATUS1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS1\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIDSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BIDSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CT_HOUSEHOLDS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_CONTGUARANTEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_ASGUARANTEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_ASFROMTO\" type=\"STRING\" size=\"256\"/><Column id=\"CT_JICHAE\" type=\"INT\" size=\"256\"/><Column id=\"TY_RETIRE_BUGEUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_BID","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_BID","staNO_BID:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFORDERPLAN_01");
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"250","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_LICCOST00","99","28","652","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTopTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("입찰계획");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_COSTCLASS","0","staTopTitle:35","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("부문");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_FROM_TO","0","staCD_COSTCLASS:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("공사기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_TT_DOKUB","0","staDT_FROM_TO:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("도급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_COSTCLASS","staCD_COSTCLASS:-1","staTopTitle:35","252","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_FROM_TO","staDT_FROM_TO:-1","staBgCD_COSTCLASS:-1","252","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_TT_DOKUB","staAM_TT_DOKUB:-1","staBgDT_FROM_TO:-1","252","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_LICCOST","staBgCD_COSTCLASS:-1","staTopTitle:35","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_text("공종(품목)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_CONTMETHOD","staBgDT_FROM_TO:-1","staCD_LICCOST:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_text("계약방법");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_TT_SILHENG","staBgAM_TT_DOKUB:-1","staDS_CONTMETHOD:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_text("실행금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_LICCOST","staCD_LICCOST:-1","staTopTitle:35","302","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_CONTMETHOD","staDS_CONTMETHOD:-1","staBgCD_LICCOST:-1","302","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_TT_SILHENG","staAM_TT_SILHENG:-1","staBgDS_CONTMETHOD:-1","302","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_COSTCLASS","staCD_COSTCLASS:5","staTopTitle:40","110","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_COSTCLASS","ctxtCD_COSTCLASS:3","staTopTitle:40","127","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfCD_LICCOST","staCD_LICCOST:5","staTopTitle:40","290","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DCX_CFLICCOST_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM_TO:5","ctxtCD_COSTCLASS:9","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_FROM:10","ctxtCD_COSTCLASS:5","10","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_text("~");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta_range:10","ctxtCD_COSTCLASS:9","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Combo("cboDS_CONTMETHOD","staDS_CONTMETHOD:5","ccfCD_LICCOST:9","290","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsDS_CONTMETHOD");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TT_DOKUB","staAM_TT_DOKUB:5","ctclDT_FROM:9","240","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_value("");
            obj.set_format("#,#");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TT_SILHENG","staAM_TT_SILHENG:5","cboDS_CONTMETHOD:9","290","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("21");
            obj.set_value("");
            obj.set_format("#,#");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_ACCOUNT","0","staTopTitle:5","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("구매유형");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta00","staTY_ACCOUNT:-1","staTopTitle:5","250","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staSpace01","sta00:-1","staDS_CONTMETHOD:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta05","staSpace01:-1","sta04:-1","250","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Combo("cboTY_ACCOUNT","300","staTopTitle:40","240","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("62");
            obj.set_innerdataset("dsTY_ACCOUNT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_COSTCLASS00","0","28","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("23");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_APP01","105","33","240","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("24");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta07_00_01","0","144","100","100",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("26");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","99","144","652","100",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new TextArea("txt00","105","149","640","90",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("27");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBottomTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("입찰참여업체");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staBottomTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_BID.form.CDTextBox","value","dsSearch","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataTop.form.cboTY_ACCOUNT","value","dsList","TY_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataTop.form.cboDS_CONTMETHOD","value","dsList","DS_CONTMETHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.ctclDT_FROM","value","dsList","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataTop.form.ctclDT_TO","value","dsList","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.ctxtAM_TT_DOKUB","value","dsList","AM_TT_DOKUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.ctxtAM_TT_SILHENG","value","dsList","AM_TT_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.ctxtCD_COSTCLASS","value","dsList","CD_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.ctxtDS_COSTCLASS","value","dsList","DS_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.ccfCD_LICCOST.form.CDTextBox","value","dsList","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.ccfCD_LICCOST.form.DSTextBox","value","dsList","DS_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.ctxtCD_APP01","value","dsList","DS_ELAPPRGS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataTop.form.txt00","value","dsList","RM_VENDOR_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.addIncludeScript("DCB_RECOMMENDCUSTREQSETTLE_DM.xfdl","lib::libCommon.xjs");
        this.registerScript("DCB_RECOMMENDCUSTREQSETTLE_DM.xfdl", function() {
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

        	this.fnSetCombo();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_BID)) {

        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        		// 코드파인드의 명칭부분은 직접 접근해서 셋팅
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);

        		if(!this.gfnIsNull(this.getOwnerFrame().DS_SUBCON)) {
        			this.ccfNO_BID.form.DSTextBox.set_value(this.getOwnerFrame().DS_SUBCON);
        		}

        		this.ccfCD_SITE.form.fnFitToContents();
        		this.ccfNO_BID.form.fnFitToContents();

        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function()
        {
        	this.btnVenAdd = this.gfnFormButtonAdd("btnVenAdd", "fnVenAdd");
        	this.btnVenAddHub = this.gfnFormButtonAdd("btnVenAddHub", "fnVenAddHub");
        	this.btnVenCancel = this.gfnFormButtonAdd("btnVenCancel", "fnVenCancel");
        	this.btnComplete = this.gfnFormButtonAdd("btnComplete", "fnComplete");
        	this.btnCancel = this.gfnFormButtonAdd("btnCancel", "fnCancel");
        	this.btnApp = this.gfnFormButtonAdd("btnApp", "fnAPP");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_BID = this.divSearch.form.ccfNO_BID;
        	this.ccfCD_LICCOST = this.divData.form.divDataTop.form.ccfCD_LICCOST;
        	this.dxGrid = this.divData.form.divDataBottom.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_BID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_LICCOST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList2, "DC", "DCB_RECOMMENDVENDOR");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_BID", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsDetail = new Dataset();
        	this.dsDetail.addColumn("CD_SITE", "string");
        	this.dsDetail.addColumn("NO_BID", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("NO_BID", "string");
        	this.dsExec.addColumn("TY_GUBUN", "string");
        	this.dsExec.addColumn("TY_STATUS", "string");
        	this.dsExec.addColumn("ID_USER", "string");

        	this.dsAppParam = new Dataset();
        	this.dsAppParam.addColumn("CD_SITE", "string");
        	this.dsAppParam.addColumn("NO_BID", "string");
        	this.dsAppParam.addColumn("DOC_APP", "string");
        	this.dsAppParam.addColumn("PRITEM_URL", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_BID", "string");
        	this.dsUpdate.addColumn("RM_VENDOR_REMARK", "string");

        	this.dsUpdate2 = new Dataset();
        	this.dsUpdate2.addColumn("NO_BID", "string");
        	this.dsUpdate2.addColumn("CD_VENDOR", "string");
        	this.dsUpdate2.addColumn("CD_LICENSE", "string");
        	this.dsUpdate2.addColumn("AM_CONTLIMIT", "bigint");
        	this.dsUpdate2.addColumn("DS_REASON", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
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

        this.fnDetail = function() {
        	this.dsDetail.clearData();
        	this.dsDetail.addRow();

        	this.dsDetail.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsDetail.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));

        	var strSvcId    = "detail";
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function()
        {
        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsUpdate.setColumn(nrow, "RM_VENDOR_REMARK", this.dsList.getColumn(0, "RM_VENDOR_REMARK"));

        	this.dsUpdate2.clearData();
        	for (var i = 0; i < this.dsList2.rowcount; i++)
        	{
        		var flag = this.gfnGetFlag(this.dsList2, i);

        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate2.addRow();
        				this.dsUpdate2.setColumn(nrow, "NO_BID", this.dsList2.getColumn(i, "NO_BID"));
        				this.dsUpdate2.setColumn(nrow, "CD_VENDOR", this.dsList2.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate2.setColumn(nrow, "CD_LICENSE", this.dsList2.getColumn(i, "CD_LICENSE"));
        				this.dsUpdate2.setColumn(nrow, "AM_CONTLIMIT", this.dsList2.getColumn(i, "AM_CONTLIMIT"));
        				this.dsUpdate2.setColumn(nrow, "DS_REASON", this.dsList2.getColumn(i, "DS_REASON"));
        			break;
        		}
        	}

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate update2=dsUpdate2";
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

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		//this.gfnGridAfterSelect(this.dxGrid);
        		this.fnDetail();
        		this.fnBtnCheckAll();
        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnBtnCheckAll();
        	}
        	else if (svcID == "exec") {
                this.FormBtns.Select.click();
            }
        	else if (svcID == "exec1") {
                this.FormBtns.Select.click();
            }
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "appChk") {
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

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        // 	if (id == "ccfCD_SITE") {
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 	}

        	if (id == "ccfNO_BID") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 입력해주세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}

        	if (id == "ccfCD_LICCOST") {
        		dsUserParam.setColumn(nrow, "COSTCLASS", this.dsList.getColumn(0, "CD_COSTCLASS"));
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 입찰번호 초기화
        		this.ccfNO_BID.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "DCX_CFLICENSE_VENDOR")
        	{
        		dsUserParam.setColumn(nrow, "CD_VENDOR", this.dsList2.getColumn(this.dsList2.rowposition, "CD_VENDOR"));
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        // this.fnGrid_RowCellChanged = function(obj:nexacro.Grid,e:nexacro.GridSelectEventInfo)
        // {
        //     if ((obj.oldrow > -1 && obj.oldrow == e.row)
        // 		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        // 		this.FormBtns.SubSelect.click();
        // 		obj.oldrow = -1;
        // 	}
        // };
        //
        // this.dsList_canrowposchange = function(obj:nexacro.NormalDataset,e:nexacro.DSRowPosChangeEventInfo) {
        // 	var can_rowchange = true;
        // 	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsListSub, i);
        // 		if (flag == "I" || flag == "U" || flag == "D") {
        // 			can_rowchange = false;
        // 			break;
        // 		}
        // 	}
        // 	if(!can_rowchange) {
        // 		this._row = e.newrow;
        // 		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        // 	}
        // 	return can_rowchange;
        // }
        //
        // this.dsList_canrowposchange_callback = function(strId, val)
        // {
        // 	if(val == true) {
        // 		this.dsList.set_enableevent(false);
        // 		this.dsList.set_rowposition(this._row);
        // 		this.dsList.set_enableevent(true);
        // 	}
        // }
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		//this.fnSelect1();
        		this.fnBtnCheckAll();
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
        		this.gfnGridClear(this.dxGrid);

        		this.dsList.clearData();

        		if(e.columnid == "CD_SITE")
        		{
        			this.dsSearch.setColumn(0, "NO_BID", "");
        			this.divSearch.form.ccfNO_BID.form.DSTextBox.set_value("");
        		}
        	}
        }

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();	// 구매유형
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "53");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(1, "CD_TYPE", "50");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_ACCOUNT=combo0 dsDS_CONTMETHOD=combo1";
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



        this.fnVenAdd = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_SUBCON = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;
        	param.CD_COSTCLASS = this.dsList.getColumn(0, "CD_COSTCLASS");
        	param.CD_LICCOST = this.dsList.getColumn(0, "CD_LICCOST");
        	param.CD_MODULE = "DM";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_RECOMMEND_DLG", "fnVenAdd_callback", param, 1300, 730);

        	/*
        	if(this.dsList.getColumn(0, "TY_SYSTEM") == "DC")
        	{
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_RECOMMEND_HDC_DC", "fnVenAdd_callback", param, 1010, 730);
        	}
        	else
        	{
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_RECOMMEND_HDC_DM", "fnVenAdd_callback", param, 1010, 730);
        	}
        	*/
        }

        this.fnVenAddHub = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_SUBCON = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_RECOMMEND_ETC_REQ_LIST", "fnVenAdd_callback", param);
        }

        this.fnVenAdd_callback = function(strId, val) {
        	this.FormBtns.Select.click();
        };


        this.fnVenCancel = function(obj,e) {
        	if(this.dsList2.rowposition < 0)
        	{
        		this.gfnAlert("입찰참여업체를 선택해주십시오.");
        		return;
        	}

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_SUBCON = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;
        	param.CD_COSTCLASS = this.dsList.getColumn(0, "CD_COSTCLASS");
        	param.DS_COSTCLASS = this.dsList.getColumn(0, "DS_COSTCLASS");
        	param.CD_LICCOST = this.dsList.getColumn(0, "CD_LICCOST");
        	param.DS_LICCOST = this.dsList.getColumn(0, "DS_LICCOST");
        	param.CD_VENDOR = this.dsList2.getColumn(this.dsList2.rowposition, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList2.getColumn(this.dsList2.rowposition, "DS_VENDOR");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_RECOMMENDCANCELDLG", "fnVenCancel_callback", param, 390, 390);
        }

        this.fnVenCancel_callback = function(strId, val) {
        	this.FormBtns.Select.click();
        };

        //배정완료
        this.fnComplete = function(obj, e) {
            this.gfnConfirm("배정을 완료하시겠습니까?", "fnComplete_Callback");
        }


        this.fnComplete_Callback = function(strId, val) {
        		if (val == false) {
        			return false;
        		}
                this.dsExec.clearData();
                this.dsExec.addRow();

                this.dsExec.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
                this.dsExec.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
                this.dsExec.setColumn(0, "TY_GUBUN", "본사");
        		this.dsExec.setColumn(0, "TY_STATUS", "A");
                this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

                var strSvcId = "exec";
                var strSvcType = "save";
                var inProc = "_dsProc";
                var inData = "exec=dsExec";
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

        //배정취소
        this.fnCancel = function(obj, e) {
            this.gfnConfirm("배정완료한 내역을 취소하시겠습니까?", "fnCancel_Callback");
        }

        this.fnCancel_Callback =  function(strId, val)  {
        	if (val == false) {
        		return false;
        	}
        	this.dsExec.clearData();
        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsExec.setColumn(0, "TY_GUBUN", "본사");
        	this.dsExec.setColumn(0, "TY_STATUS", "R");
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId = "exec1";
        	var strSvcType = "save";
        	var inProc = "_dsProc";
        	var inData = "exec=dsExec";
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

        //임시처리
        this.fnBtnCheck2 = function(btn, ds)
        {
        	if(!this.gfnIsNull(btn.NM_COLUMN) && btn.IS_ENABLED == true)
        	{
        		if(ds.rowcount > 0)
        		{
        			if(ds.rowcount == 1 && this.gfnGetFlag(ds, 0) == "#")
        				return;

        			var row = ds.rowposition;

        			if(row == -1) row = 0;

        			if(ds.getColumn(row, btn.NM_COLUMN) != "Y")
        				btn.set_enable(true);
        			else
        				btn.set_enable(false);
        		}
        		else
        			return;
        	}
        	return;
        }

        this.fnBtnCheckAll = function()
        {
        	this.fnBtnCheck2(this.btnVenAdd, this.dsList2);
        	this.fnBtnCheck2(this.btnVenAddHub, this.dsList2);
        	this.fnBtnCheck2(this.btnVenCancel, this.dsList2);
        	this.gfnBtnCheck(this.btnComplete, this.dsList);
        	this.gfnBtnCheck(this.btnCancel, this.dsList);
        	this.gfnBtnCheck(this.btnAPP, this.dsList);

        	this.fnBtnCheckTemp();
        }

        // 임시조치
        this.fnBtnCheckTemp = function()
        {
        	if(this.dsList.getColumn(0, "TY_SYSTEM") == "DC")
        	{
        		this.btnVenAdd.set_enable(false);
        		this.btnVenAddHub.set_enable(true);
        	}
        	else
        	{
        		this.btnVenAdd.set_enable(true);
        		this.btnVenAddHub.set_enable(false);
        	}
        }
        /*
        this.fnAPP = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;

        	param.PARAM01 = this.dsSearch.getColumn(0,"CD_SITE");
        	param.PARAM02 = this.dsSearch.getColumn(0, "NO_BID");
        	param.ID_AP = this.dsList.getColumn(0, "NO_ELAPDOC");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_RECOMMENDCUSTREQSETTLE_APP", "fnAprvDialogCallback", param);

        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };
        */

        this.fnAPP = function(obj,e) {
        	if (this.dsList.rowcount = 0) return false;

        	var msg = "지명품의를 진행하시겠습니까?";
        	this.gfnConfirm(msg, "fnApp_callback", "");
        }

        this.fnApp_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsAppParam.clearData();
        		var nrow = this.dsAppParam.addRow();

        		this.dsAppParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsAppParam.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        		this.dsAppParam.setColumn(nrow, "DOC_APP", "DM02");

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
        	var url = this.gfnGetServerUrl();

        	if(url == "http://localhost:8080")
        	{
        		url += "/erp";
        	}

        	url += "/quickview.html?formname=dzz::DZZ_POPUP_TEST.xfdl&CD_MODULE=DCB&ID_FORM=DCB_PRITEM_LIST";
        	this.dsAppParam.setColumn(0, "PRITEM_URL", url);

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
        		var sDS_CONTMETHOD = this.dsList.getColumn(0, "DS_CONTMETHOD");

        		var sApType = "";
        		var sTitle = "";
        		var sRef03 = "";

        		var ds_site = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        		var ds_bid = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;
        		if(sDS_CONTMETHOD == "10")
        		{
        			sApType = "DC02";
        			sTitle = "[지명품의/외주]" + ds_site + "/" + ds_bid;
        			sRef03 = "DC";
        		}
        		else
        		{
        			sApType = "DM02";
        			sTitle = "[지명품의/자재]" + ds_site + "/" + ds_bid;
        			sRef03 = "DM";
        		}

        		console.log(sApType);

        		var sRef01  = this.dsSearch.getColumn(0, "CD_SITE");
        		var sRef02  = this.dsSearch.getColumn(0, "NO_BID");
        		var sRef04  = "";
        		var oParam  = this.gfnDataSetToJson(this.dsAppList, this.dsAppList.rowposition)

        		this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, sRef04, oParam, "fnAprvDialogCallback");
        	}
        }

        this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");	// 폼상태 초기화
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_onvaluechanged,this);
            this.dsAppList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_RECOMMENDCUSTREQSETTLE_DM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
