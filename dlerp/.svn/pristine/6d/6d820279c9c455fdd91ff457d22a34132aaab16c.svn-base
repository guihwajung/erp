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
            this.set_titletext("도급기성-수금관리");
            this.set_scrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(665,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOFPR_CONST_COLLECT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOFPR_CONST_COLLECT_MERGE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DOFPR_CONST_COLLECT_DELETE</Col></Row><Row><Col id=\"TARGET\">slipSave</Col><Col id=\"SP\">DOZPR_CONST_COLLECT_AUTOSLIP_ISSUE</Col></Row><Row><Col id=\"TARGET\">slipCancel</Col><Col id=\"SP\">DOZPR_CONST_COLLECT_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">appChk</Col><Col id=\"SP\">DOFPR_APP_DOF02_CHECK</Col></Row><Row><Col id=\"TARGET\">appSelect</Col><Col id=\"SP\">DOFPR_APP_DOF02_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CASH", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_COLT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBase", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NO_DMD\" type=\"INT\" size=\"256\"/><Column id=\"NO_COLT\" type=\"INT\" size=\"256\"/><Column id=\"TY_COLT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_COLT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CASH\" type=\"STRING\" size=\"256\"/><Column id=\"NO_INCONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMITTER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TRANSACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TRUST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPIRATION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SLIP2\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DMD_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_COLT_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DIRECT_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_COLT_TOT_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_UNCOLT_TOT_B\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_COLT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DIRECT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_COLT_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_IN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_UNCOLT_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SLIP_HEAD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NO_DMD\" type=\"INT\" size=\"256\"/><Column id=\"NO_COLT\" type=\"INT\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TY_DMD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseRst", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"INT\" size=\"256\"/><Column id=\"NO_DMD\" type=\"INT\" size=\"256\"/><Column id=\"NO_COLT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_FIELD","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_FIELD","0.0","staCD_FIELD:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_FIELD","ctxtCD_FIELD:0.0","staCD_FIELD:10.0","452","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_CONT","ctxtDS_FIELD:0.0","staCD_FIELD:10.0","26","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","50",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta23_00_00_00","124","316","534","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19_00","450","229","208","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT","5","23","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("청구");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_PUB_NOTICE","5","81","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("수금액(A+B)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT","331","81","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("미수금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","124","258","208","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT00","5","229","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("청구회차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","124","229","208","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ00","331","229","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("수금회차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS00","5","287","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("수금(입금)일자");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","124","287","534","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BIZ_MHOD01","5","258","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("수금조건");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_DMD","staTY_PRDCT00:3","234","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","0",null,"22","7",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("전회누계");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00","124","23","534","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_01","124","81","208","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_02","450","81","208","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_01_00","128","28","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_01_00_00_00_00","128","86","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LAND09_00_01_00_00_00_00_00","454","86","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title01","5","115",null,"22","7",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("금회");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_CASH","staTY_BIZ_MHOD01:3","263","132","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_CASH");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_COLT","staDS_LAND_CLS00:3","292","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_PUB_NOTICE00","5","165","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("수금액(A+B)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ROAD_STAT00","331","165","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("미수금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_01_01_00","124","165","208","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06_01_02_00","450","165","208","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_COLT_TOT","128","170","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_UNCOLT_TOT","454","170","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS00_01","331","258","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("수금내역");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ACC00_00","5","316","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("입금번호");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22_01","450","258","208","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_COLT","staDS_LAND_CLS00_01:3","263","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_COLT");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS00_01_00","5","374","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ACC00_00_00","5","403","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_text("어음발행일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22_01_00","124","374","534","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfNO_INCONFIRM","staDS_ACC00_00:3","321","318","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("130");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DFXPR_NO_INCOMELIST_CODEFIND");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22_00_00_00","452","403","206","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS00_00_00_00","333","403","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("어음만료일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22_01_01","124","403","209","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TRUST","128","408","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_EXPIRATION","staDS_LAND_CLS00_00_00_00:3","408","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_VENDOR","128","379","97","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR","228","379","426","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS00_01_00_00","5","345","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22_01_00_00","124","345","534","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_VENDOR00","128","350","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR00","250","350","404","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_COLT","staDT_ACQ00:3","234","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS00_01_00_01","5","432","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_text("적요");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22_01_00_01","124","432","534","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_RM","128","437","526","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS00_01_00_01_00","5","461","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_text("전표번호(수금)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22_01_00_01_00","124","461","208","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_RM00","128","466","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_PUB_NOTICE00_00","5","136","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_text("실입금액(A)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_PUB_NOTICE00_00_00","331","136","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_text("하도직불액(B)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19_00_00","124","136","208","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19_00_01","450","136","208","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_INCONFIRM","128","141","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_INCONFIRM00","454","140","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_PUB_NOTICE00_00_01","5","52","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_text("실입금액(A)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_PUB_NOTICE00_00_00_00","331","52","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_text("하도직불액(B)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19_00_00_00","124","52","208","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19_00_01_00","450","52","208","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_INCONFIRM01","128","57","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_INCONFIRM00_00","454","57","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_INCONFIRM02","451","321","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_LAND_CLS00_01_00_01_00_00","331","461","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_text("전표번호(직불)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22_01_00_01_00_00","450","461","208","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_RM00_00","453","466","201","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00_01","394","2",null,"22","204",null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_text("결재 상태 :");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title01_00_01_00","456","2",null,"22","7",null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_text("");
            obj.set_textAlign("right");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_PRDCT00_00","5","194","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_text("(청구)원전표");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22_00","124","194","534","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DMD_SLIP","128","199","185","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("160");
            obj.set_taborder("75");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DOXPR_DEMAND_SLIP_CODEFIND");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ctxtCD_FIELD","value","dsBase","CD_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctxtDS_FIELD","value","dsBase","DS_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtNO_CONT","value","dsBase","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ctxtNO_DMD","value","dsBase","NO_DMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ccboTY_CASH","value","dsBase","TY_CASH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctclDT_COLT","value","dsBase","DT_COLT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ccboTY_COLT","value","dsBase","TY_COLT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ccfNO_INCONFIRM.form.CDTextBox","value","dsBase","NO_INCONFIRM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.ccfNO_INCONFIRM.form.DSTextBox","value","dsBase","DS_REMITTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.ctxtCD_VENDOR00","value","dsBase","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.ctxtDS_VENDOR00","value","dsBase","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.ctxtCD_VENDOR","value","dsBase","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.ctxtDS_VENDOR","value","dsBase","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.ctclDT_TRUST","value","dsBase","DT_TRUST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.ctclDT_EXPIRATION","value","dsBase","DT_EXPIRATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ctxtNO_INCONFIRM","value","dsBase","AM_COLT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtNO_COLT","value","dsBase","NO_COLT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctxtDS_RM","value","dsBase","DS_RM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctxtDS_RM00","value","dsBase","CD_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctxtAM_LAND09_00_01_00","value","dsBase","AM_DMD_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ctxtAM_LAND09_00_01_00_00_00_00","value","dsBase","AM_COLT_TOT_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.ctxtAM_LAND09_00_01_00_00_00_00_00","value","dsBase","AM_UNCOLT_TOT_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.ctxtNO_INCONFIRM00","value","dsBase","AM_DIRECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.ctxtNO_INCONFIRM01","value","dsBase","AM_COLT_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.ctxtNO_INCONFIRM00_00","value","dsBase","AM_DIRECT_B");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctxtNO_INCONFIRM02","value","dsBase","AM_IN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.ctxtAM_COLT_TOT","value","dsBase","AM_COLT_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.ctxtAM_UNCOLT_TOT","value","dsBase","AM_UNCOLT_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.ctxtDS_RM00_00","value","dsBase","CD_SLIP2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.staTab1Title01_00_01_00","text","dsBase","NM_ST_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.ccfCD_DMD_SLIP.form.CDTextBox","value","dsBase","CD_SLIP_HEAD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.addIncludeScript("DOF_CONST_COLLECT.xfdl","lib::libCommon.xjs");
        this.registerScript("DOF_CONST_COLLECT.xfdl", function() {
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetExtendButton();

        	this.fnSetVariable();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.fnSetCombo();
        	if(this.getOwnerFrame().TYPE == "Y"){
        		//생성
        		this.dsSearch.setColumn(0, "CD_FIELD", this.getOwnerFrame().CD_FIELD);
        		this.dsSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_CONT);
        		this.dsSearch.setColumn(0, "NO_DMD", this.getOwnerFrame().NO_DMD);
        		this.dsSearch.setColumn(0, "TYPE", this.getOwnerFrame().TYPE);
        		this.dsSearch.setColumn(0, "DS_TY_DMD", this.getOwnerFrame().DS_TY_DMD);
        		this.gfnSetFormStatus(this, "I");
        	} else {
        		//편집
        		this.dsSearch.setColumn(0, "CD_FIELD", this.getOwnerFrame().CD_FIELD);
        		this.dsSearch.setColumn(0, "NO_CONT", this.getOwnerFrame().NO_CONT);
        		this.dsSearch.setColumn(0, "NO_DMD", this.getOwnerFrame().NO_DMD);
        		this.dsSearch.setColumn(0, "NO_COLT", this.getOwnerFrame().NO_COLT);
        		this.gfnSetFormStatus(this, "");
        	}

        	this.fnSelect();
        	this.fnSetButton();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	//this.FormBtns.Excel.set_enable(false);
        	//this.FormBtns.Print.set_enable(false);

        	if(this.FormInfo.TY_AUTH == "R") {
        		this.FormBtns.Select.set_enable(true);
        		this.btnSlipSelect.set_enable( (!this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) || !this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP2"))? true:false) );
        		return;
        	}

        	var frmStatus = this.gfnGetFormStatus(this);
        	switch(frmStatus) {
        	case "I":
        		this.FormBtns.Select.set_enable(false);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(false);


        		this.btnSlipSelect.set_enable( false );
        		this.btnSlipSave.set_enable( false );
        		this.btnSlipCancle.set_enable( false );
        		this.btnHadoCreate.set_enable(false);
        		this.divData.form.ccboTY_CASH.set_enable(true);
        		break;
        	case "U":
        		this.FormBtns.Select.set_enable(true);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(true);

        		this.btnSlipSelect.set_enable( false );
        		this.btnSlipSave.set_enable( false );
        		this.btnSlipCancle.set_enable( false );
        		this.btnHadoCreate.set_enable(false);
        		break;
        	case "D":
        		break;
        	default: /*기본(조회완료)*/
        // 		this.btnSlipSelect.set_enable( (!this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) || !this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP2"))? true:false) );
        // 		this.btnSlipSave.set_enable( (this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) && (this.dsBase.getColumn(0, "ST_APPR") == '01' || this.dsBase.getColumn(0, "ST_APPR") == '04' || this.dsBase.getColumn(0, "ST_APPR") == '06' || this.dsBase.getColumn(0, "ST_APPR") == '99')? true:false) );
        //		this.btnSlipCancle.set_enable( (!this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) && this.dsBase.getColumn(0, "ST_APPR") == '05' ? true:false) );
        		this.btnSlipSelect.set_enable( (!this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) || !this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP2"))? true:false) );
        		this.btnSlipSave.set_enable( ((this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) && this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP2"))) && (this.dsBase.getColumn(0, "ST_APPR") == '01' || this.dsBase.getColumn(0, "ST_APPR") == '04' || this.dsBase.getColumn(0, "ST_APPR") == '06' || this.dsBase.getColumn(0, "ST_APPR") == '99')? true:false) );
        		this.btnSlipCancle.set_enable( (!this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) || !this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP2"))? true:false) );
        //		this.btnSlipCancle.set_enable( ((!this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) || !this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP2"))) && this.dsBase.getColumn(0, "ST_APPR") == '05'? true:false) );
        		this.FormBtns.Select.set_enable(true);
        		this.FormBtns.Save.set_enable(false);
        		this.FormBtns.Del.set_enable(true);
        		this.btnHadoCreate.set_enable(true);
        		this.divData.form.ccboTY_CASH.set_enable(false);
        	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
            this.btnSlipSave= this.gfnFormButtonAdd("btnSlipSave", "fnSlipSave"); //전표발행
            this.btnSlipSelect= this.gfnFormButtonAdd("btnSlipSelect", "fnSlipSelect"); //전표조회
        	this.btnSlipCancle = this.gfnFormButtonAdd("btnSlipCancle", "fnSlipCancle"); //전표취소
            this.btnHadoCreate = this.gfnFormButtonAdd("btnHadoCreate", "fnHadoCreate"); //하도급직불등록


        // 	this.btnSlipSave.set_enable(true);
        // 	this.btnSlipCancle.set_enable(true);
        	if(this.gfnIsNull(this.gfnGetFormStatus(this))){
        		this.btnHadoCreate.set_enable(true);
        	} else {
        		this.btnHadoCreate.set_enable(false);
        	}

        };

        this.fnApp = function(){
        	this.dsAppParam.clearData();
        	var nrow = this.dsAppParam.addRow();
        	this.dsAppParam.setColumn(nrow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));
        	this.dsAppParam.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsAppParam.setColumn(nrow, "NO_DMD", this.dsSearch.getColumn(0, "NO_DMD"));
        	this.dsAppParam.setColumn(nrow, "NO_COLT", this.dsSearch.getColumn(0, "NO_COLT"));
        	this.dsAppParam.setColumn(nrow, "DOC_APP", "DOF02"); //DOF02 : 결재상신 / DOF20 : 결재취소

        	var msg = "현장코드 : " + this.dsSearch.getColumn(0, "CD_FIELD") + " [" + this.divSearch.form.ctxtDS_FIELD.text + "]"
        	        + "\n계약차수 : " + this.dsSearch.getColumn(0, "NO_CONT")
        			+ "\n청구횟수 : " + this.dsSearch.getColumn(0, "NO_DMD")
        			+ "\n수금횟수 : " + this.dsSearch.getColumn(0, "NO_COLT")
        			+ "\n\n전표생성을 하시겠습니까?";
        	this.gfnConfirm(msg, "fnApp_callback", "");
        }

        this.fnAppCancle = function(){
        	this.dsAppParam.clearData();
        	var nrow = this.dsAppParam.addRow();
        	this.dsAppParam.setColumn(nrow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));
        	this.dsAppParam.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsAppParam.setColumn(nrow, "NO_DMD", this.dsSearch.getColumn(0, "NO_DMD"));
        	this.dsAppParam.setColumn(nrow, "NO_COLT", this.dsSearch.getColumn(0, "NO_COLT"));
        	this.dsAppParam.setColumn(nrow, "DOC_APP", "DOF20"); //DOF02 : 결재상신 / DOF20 : 결재취소

        	var msg = "현장코드 : " + this.dsSearch.getColumn(0, "CD_FIELD") + " [" + this.divSearch.form.ctxtDS_FIELD.text + "]"
        	        + "\n계약차수 : " + this.dsSearch.getColumn(0, "NO_CONT") + " [" + this.divSearch.form.ctxtNO_CONT.text + "]"
        			+ "\n청구횟수 : " + this.dsSearch.getColumn(0, "NO_DMD") + " [" + this.divData.form.ctxtNO_DMD.text + "]"
        			+ "\n수금횟수 : " + this.dsSearch.getColumn(0, "NO_COLT") + " [" + this.divData.form.ctxtNO_COLT.text + "]"
        			+ "\n\n전표취소 하시겠습니까?";
        	this.gfnConfirm(msg, "fnApp_callback", "");

        }

        this.fnApp_callback = function(strId, val){
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

        this.fnAppSelect = function(){
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
        		var sApType = "";
        		var sTitle  = "";
        		sApType = this.dsAppParam.getColumn(0, "DOC_APP");
        		sTitle = "수금처리";

        		var sRef01  = this.dsSearch.getColumn(0, "CD_FIELD");
        		var sRef02  = this.dsSearch.getColumn(0, "NO_CONT");
        		var sRef03  = this.dsSearch.getColumn(0, "NO_DMD");
        		var sRef04  = this.dsSearch.getColumn(0, "NO_COLT");
        		var oParam  = this.gfnDataSetToJson(this.dsAppList, this.dsAppList.rowposition)

        		this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, sRef04, oParam, "fnAprvDialogCallback");
        	}
        	else
        	{
        	   this.FormBtns.Select.click();
        	}
        }

        this.fnAprvDialogCallback = function(){
        	this.FormBtns.Select.click();
        }


        this.fnSlipSelect = function(){
           //전표조회 화면 연결
           var cd_trade = this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP")) && !this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP2")) ? this.dsBase.getColumn(0, "CD_SLIP2") : this.dsBase.getColumn(0, "CD_SLIP");
           var param = {
        		CD_TRADE : cd_trade.replace(/-/g, '') //this.dsBase.getColumn(0, "CD_SLIP").replace(/-/g, '')
           };
           this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        }

        this.fnSlipSave = function(){
        	this.gfnConfirm("전표생성을 하시겠습니까?", function(strId, val){
        		if(val == true) {
        			this.dsBase.set_enableevent(false);
        			this.dsBase.setColumn(0, "ID_ADD", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
        			this.dsBase.set_enableevent(true);
        			var strSvcId    = "slipSave";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "slipSave=dsBase";
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
        }

        this.fnSlipCancle = function(){
        	this.gfnConfirm("전표취소를 하시겠습니까?", function(strId, val){
        		if(val == true) {
        			this.dsBase.set_enableevent(false);
        			this.dsBase.setColumn(0, "CD_TRADE", this.dsBase.getColumn(0, "CD_SLIP"));
        			this.dsBase.setColumn(0, "ID_ADD", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
        			this.dsBase.set_enableevent(true);

        			var strSvcId    = "slipCancel";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "slipCancel=dsBase";
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
        }

        this.fnHadoCreate = function(){
        	var param = {
        		CD_FIELD : this.dsBase.getColumn(0, "CD_FIELD")
        	  , DS_FIELD : this.dsBase.getColumn(0, "DS_FIELD")
        	  , NO_CONT  : this.dsBase.getColumn(0, "NO_CONT")
        	  , NO_DMD   : this.dsBase.getColumn(0, "NO_DMD")
        	  , NO_COLT  : this.dsBase.getColumn(0, "NO_COLT")
        	  , AM_UNCOLT_TOT  : this.dsBase.getColumn(0, "AM_UNCOLT_TOT")
        	}

        	this.gfnFormOpen("DOF", "DOF_HADO_DIRECT", "fnDialogCallback", param, 1200, 800);
        }

        this.fnDialogCallback = function(svcID, value) {
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfNO_INCONFIRM = this.divData.form.ccfNO_INCONFIRM;
        	this.ccfNO_INCONFIRM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_INCONFIRM.AfterCDTextChanged = "ccfCD_AfterCDTextChanged";


        	this.ccfCD_DMD_SLIP = this.divData.form.ccfCD_DMD_SLIP;
        	this.ccfCD_DMD_SLIP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DMD_SLIP.AfterCDTextChanged = "ccfCD_AfterCDTextChanged";
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	var ynNote = "";

        	if(id == "ccfNO_INCONFIRM"){
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.dsBase.getColumn(0, "CD_FIELD"));
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));

        		if(this.dsBase.getColumn(0, "TY_CASH") == "B" || this.dsBase.getColumn(0, "TY_CASH") == "N" ){
        			//수금조건이 어음일때
        			ynNote = "어음";
        		} else if(this.dsBase.getColumn(0, "TY_CASH") == "C" ){
        			ynNote = "모계좌";
        		}
        		dsUserParam.setColumn(nrow, "TY_INLIST", ynNote);
        		dsUserParam.setColumn(nrow, "TY_NOTE", this.dsBase.getColumn(0, "TY_CASH") );
        		dsUserParam.setColumn(nrow, "YN_SLIP", "N");
        	}

        	if(id == "ccfCD_DMD_SLIP"){
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsBase.getColumn(0, "CD_FIELD"));
        		dsUserParam.setColumn(nrow, "NO_CONT", this.dsBase.getColumn(0, "NO_CONT"));
        		dsUserParam.setColumn(nrow, "NO_DMD", this.dsBase.getColumn(0, "NO_DMD"));
        	}
        	return true;
        }
        this.ccfCD_AfterCDTextChanged = function(id, codeFindData) {
        	var AM_COLT_TOT = 0,AM_UNCOLT_TOT=0;
        	if(id == "ccfNO_INCONFIRM"){
        		var data = codeFindData[0];
        		if(!this.gfnIsNull(data)){
        			//수금
        			this.dsBase.setColumn(0, "AM_COLT", data.AM_IN);
        			//수금(입금)일자
        			this.dsBase.setColumn(0, "DT_COLT", data.DT_TRADE);
        			//입금번호
        			this.dsBase.setColumn(0, "NO_INCONFIRM", data.NO_INCONFIRM);
        			//입금자
        			this.dsBase.setColumn(0, "DS_REMITTER", data.DS_REMITTER);
        			//입금액
        			this.dsBase.setColumn(0, "AM_IN", data.AM_IN);
        			//계좌번호
        			this.dsBase.setColumn(0, "NO_ACCOUNT", data.NO_TRANSACCOUNT);
        			//은행명
        			this.dsBase.setColumn(0, "DS_BANK", data.DS_BANK);
        			//어음발행일자
        			this.dsBase.setColumn(0, "DT_TRUST", data.DT_TRUST);
        			//어음만료일자
        			this.dsBase.setColumn(0, "DT_EXPIRATION", data.DT_EXPIRATION);
        			AM_COLT_TOT =  nexacro.toNumber(this.dsBase.getColumn(0, "AM_COLT")) +  this.dsBase.getColumn(0, "AM_DIRECT");
        			this.dsBase.setColumn(0, "AM_COLT_TOT", AM_COLT_TOT);
        			AM_UNCOLT_TOT = nexacro.toNumber(this.dsBase.getColumn(0, "AM_UNCOLT_TOT_B")) -  this.dsBase.getColumn(0, "AM_COLT_TOT");
        			this.dsBase.setColumn(0, "AM_UNCOLT_TOT", AM_UNCOLT_TOT);
        		} else {
        			//수금
        			this.dsBase.setColumn(0, "AM_COLT", 0);
        			//수금(입금)일자
        			this.dsBase.setColumn(0, "DT_COLT", "");
        			//입금번호
        			this.dsBase.setColumn(0, "NO_INCONFIRM", "");
        			//입금자
        			this.dsBase.setColumn(0, "DS_REMITTER", "");
        			//입금액
        			this.dsBase.setColumn(0, "AM_IN", 0);
        			//계좌번호
        			this.dsBase.setColumn(0, "NO_ACCOUNT", "");
        			//은행명
        			this.dsBase.setColumn(0, "DS_BANK", "");
        			//어음발행일자
        			this.dsBase.setColumn(0, "DT_TRUST", "");
        			//어음만료일자
        			this.dsBase.setColumn(0, "DT_EXPIRATION", "");
        			AM_COLT_TOT =  nexacro.toNumber(this.dsBase.getColumn(0, "AM_COLT")) +  this.dsBase.getColumn(0, "AM_DIRECT");
        			this.dsBase.setColumn(0, "AM_COLT_TOT", AM_COLT_TOT);
        			AM_UNCOLT_TOT = nexacro.toNumber(this.dsBase.getColumn(0, "AM_UNCOLT_TOT_B")) -  this.dsBase.getColumn(0, "AM_COLT_TOT");
        			this.dsBase.setColumn(0, "AM_UNCOLT_TOT", AM_UNCOLT_TOT);
        		}
        	}

        	if(id == "ccfCD_DMD_SLIP"){
        		var data = codeFindData[0];
        		if(!this.gfnIsNull(data)){
        			this.dsBase.setColumn(0, "CD_SLIP_HEAD", data.CD_SLIP);
        		}
        	}
        }
        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_FIELD", "string");
        	this.dsSelect.addColumn("NO_CONT", "int");
        	this.dsSelect.addColumn("NO_DMD", "int");
        	this.dsSelect.addColumn("NO_COLT", "int");
        	this.dsSelect.addColumn("TYPE", "string");

        	this.dsAppParam = new Dataset();
        	this.dsAppParam.addColumn("CD_FIELD", "string");
        	this.dsAppParam.addColumn("NO_CONT", "int");
        	this.dsAppParam.addColumn("NO_DMD", "int");
        	this.dsAppParam.addColumn("NO_COLT", "int");
        	this.dsAppParam.addColumn("DOC_APP", "string");
        };

        this.fnSetCombo = function(){
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	//수금 조건
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(0, "CD_TYPE", "23");

        	//수금 내역
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(1, "CD_TYPE", "22");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_CASH=combo0 dsTY_COLT=combo1";
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
         * 트렌젝션 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function(obj,e){

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));
        	this.dsSelect.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsSelect.setColumn(0, "NO_DMD", this.dsSearch.getColumn(0, "NO_DMD"));
        	this.dsSelect.setColumn(0, "NO_COLT", this.dsSearch.getColumn(0, "NO_COLT"));
        	this.dsSelect.setColumn(0, "TYPE", this.dsSearch.getColumn(0, "TYPE"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsBase=select0";
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

        this.fnSave = function(obj,e){
        	if(!this.fnSaveValidate()) return;

        	this.dsBase.setColumn(0, "ID_ADD", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsBase";
        	var outData     = "dsBaseRst=save";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        };

        this.fnAdd = function(obj,e){
        	this.dsBase.set_enableevent(false);
        	this.dsBase.setColumn(0, "TY_CASH", "C");//현금세팅
        	this.dsBase.setColumn(0, "TY_COLT", "1");
        	this.dsBase.setColumn(0, "TYPE",this.dsSearch.getColumn(0, "TYPE"));
        	this.dsBase.setColumn(0, "AM_COLT", 0);
        	this.dsBase.setColumn(0, "AM_DIRECT", 0);
        	this.dsBase.setColumn(0, "AM_COLT_TOT", 0);
        	this.dsBase.setColumn(0, "AM_IN", 0);
        	this.dsBase.set_enableevent(true);
        };

        this.fnDel = function(obj,e){
        	this.gfnConfirm("삭제 하시겠습니까?", function(strId, val){
        		if(val == true) {
        			var strSvcId    = "delete";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "delete=dsBase";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcType , 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc,false); // 통신방법 정의 [생략가능]
        		}
        	});
        };


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode == 0) {
        		if(svcID == "combo"){
        			this.divData.form.ccboTY_CASH.set_index(0);
        			this.divData.form.ccboTY_COLT.set_index(0);

        			if(this.getOwnerFrame().DS_TY_DMD == "선수금"){
        				var fRow = this.dsTY_CASH.findRowExpr("CD_CODE == 'X'");

        				//선수금일경우 수금조건-상계 삭제
        				this.dsTY_CASH.deleteRow(fRow);
        			}
        		} else if(svcID == "select"){
        			if(this.dsSearch.getColumn(0, "TYPE") == "Y"){
        				this.fnAdd();
        				this.gfnSetFormStatus(this, "I");
        			} else {
        				this.divData.form.ccboTY_COLT.set_readonly(true);
        				this.gfnSetFormStatus(this, "");
        			}
        			this.fnSetButton();
        			this.fnTyColtChg(this.dsBase.getColumn(0, "TY_CASH"));
        		} else if(svcID == "save"){
        			this.dsSearch.setColumn(0, "CD_FIELD", this.dsBaseRst.getColumn(0, "OUT_CD_FIELD"));
        			this.dsSearch.setColumn(0, "NO_CONT", this.dsBaseRst.getColumn(0, "OUT_NO_CONT"));
        			this.dsSearch.setColumn(0, "NO_DMD", this.dsBaseRst.getColumn(0, "OUT_NO_DMD"));
        			this.dsSearch.setColumn(0, "NO_COLT", this.dsBaseRst.getColumn(0, "OUT_NO_COLT"));
        			this.dsSearch.setColumn(0, "TYPE", "");

        			this.FormBtns.Select.click();
        		} else if(svcID == "delete"){
        			this.getParentContext().close();
        		} else if(svcID == "slipSave"){
        			this.gfnAlert("정상처리 되었습니다.",null, null, function(){
        				this.fnSelect();
        			});
        		} else if(svcID == "slipCancel"){
        			this.gfnAlert("정상처리 되었습니다.",null, null, function(){
        				this.fnSelect();
        			});
        		} else if(svcID == "appChk") {
        			this.fnAppSelect();
        		} else if(svcID == "appSelect") {
        			this.fnAppOpen();
        		}
        	} else {
        		this.gfnAlert(errorMsg);
        	}

        };


        this.fnTyColtChg = function(str){
        	if(str=="X"){
        		//수금합계
        		this.divData.form.ctxtAM_COLT_TOT.set_readonly(true);
        		//수금(입금)일자  ctclDT_COLT
        		this.divData.form.ctclDT_COLT.set_readonly(false);

        		this.divData.form.ccfNO_INCONFIRM.form.CDTextBox.set_readonly(true);
        		this.divData.form.ccfNO_INCONFIRM.form.BtnSearch.set_enable(false);
        	}else{
        		//수금합계
        		this.divData.form.ctxtAM_COLT_TOT.set_readonly(true);
        		//수금(입금)일자  ctclDT_COLT
        		this.divData.form.ctclDT_COLT.set_readonly(true);

        		this.divData.form.ccfNO_INCONFIRM.form.CDTextBox.set_readonly(false);
        		this.divData.form.ccfNO_INCONFIRM.form.BtnSearch.set_enable(true);
        	}

        	if(this.gfnIsNull(this.gfnGetFormStatus(this))){
        		this.btnHadoCreate.set_enable(true);
        	} else {
        		this.btnHadoCreate.set_enable(false);
        	}
        }

        this.fnSaveValidate = function(){

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "CD_SLIP_HEAD"))){
        		this.gfnAlert("(청구)원전표번호를 입력해주세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "DT_COLT"))){
        		this.gfnAlert("수금(입금)일자를 입력해주세요.");
        		return false;
        	}

         	if(this.dsBase.getColumn(0, "TY_CASH") != "X"){
        		if(this.gfnIsNull(this.dsBase.getColumn(0, "NO_INCONFIRM"))){
        			this.gfnAlert("입금번호를 입력해주세요.");
        			return false;
        		}
        	}

        // 	if(this.dsBase.getColumn(0, "TY_CASH") == "X"){
        // 		if(this.gfnIsNull(this.dsBase.getColumn(0, "AM_COLT"))){
        // 			this.gfnAlert("수금금액을 입력해주세요.");
        // 			return false;
        // 		}
        // 	} else {
        // 		if(this.gfnIsNull(this.dsBase.getColumn(0, "NO_INCONFIRM"))){
        // 			this.gfnAlert("입금번호를 입력해주세요.");
        // 			return false;
        // 		}
        // 	}

        	if(this.gfnIsNull(this.dsBase.getColumn(0, "DS_RM"))){
        		this.gfnAlert("적요를 입력해주세요.");
        		return false;
        	}

        	return true;
        }


        this.dsBase_onvaluechanged = function(obj,e)
        {
        	var AM_COLT_TOT = 0,AM_UNCOLT_TOT=0;
        	if(e.oldvalue != e.newvalue) {
        		obj.set_enableevent(false);

        		if(e.columnid=="AM_COLT"){
        			AM_COLT_TOT =  nexacro.toNumber(this.dsBase.getColumn(0, "AM_COLT")) +  this.dsBase.getColumn(0, "AM_DIRECT");
        			this.dsBase.setColumn(0, "AM_COLT_TOT", AM_COLT_TOT);
        			AM_UNCOLT_TOT = nexacro.toNumber(this.dsBase.getColumn(0, "AM_UNCOLT_TOT_B")) -  this.dsBase.getColumn(0, "AM_COLT_TOT");
        			this.dsBase.setColumn(0, "AM_UNCOLT_TOT", AM_UNCOLT_TOT);
        		}

        		obj.set_enableevent(true);

        		if(this.gfnGetFormStatus(this) == "I"){
        			this.gfnSetFormStatus(this, "I");
        		}else{
        			this.gfnSetFormStatus(this, "U");
        		}
        		this.fnSetButton();
        	}
        };


        this.divData_ccboTY_CASH_onitemchanged = function(obj,e)
        {
        	this.dsBase.setColumn(0, "AM_COLT", 0);
        	this.dsBase.setColumn(0, "DT_COLT", "");
        	this.dsBase.setColumn(0, "NO_INCONFIRM", "");
        	this.dsBase.setColumn(0, "DS_REMITTER", "");
        	this.dsBase.setColumn(0, "AM_IN", 0);
        	this.dsBase.setColumn(0, "NO_ACCOUNT", "");
        	this.dsBase.setColumn(0, "DS_BANK", "");
        	this.dsBase.setColumn(0, "DT_TRUST", "");
        	this.dsBase.setColumn(0, "DT_EXPIRATION", "");
        	this.fnTyColtChg(e.postvalue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.ccboTY_CASH.addEventHandler("onitemchanged",this.divData_ccboTY_CASH_onitemchanged,this);
            this.divData.form.ctclDT_COLT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.ctclDT_TRUST.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.ctclDT_EXPIRATION.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsBase.addEventHandler("onvaluechanged",this.dsBase_onvaluechanged,this);
        };
        this.loadIncludeScript("DOF_CONST_COLLECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
