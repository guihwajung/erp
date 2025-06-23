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
            this.set_titletext("전자결재상신");
            this.getSetter("maxwidth").set("1200");
            this.getSetter("maxheight").set("1000");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM01\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM02\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM03\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM04\" type=\"STRING\" size=\"256\"/><Column id=\"BTNAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"BTNREJECT\" type=\"STRING\" size=\"256\"/><Column id=\"BTNLINES\" type=\"STRING\" size=\"256\"/><Column id=\"BTNISSUE\" type=\"STRING\" size=\"256\"/><Column id=\"BTNCANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTNFILE\" type=\"STRING\" size=\"256\"/><Column id=\"BTNDE\" type=\"STRING\" size=\"256\"/><Column id=\"BTNRE\" type=\"STRING\" size=\"256\"/><Column id=\"BTNAC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">init</Col><Col id=\"SP\">DZRPR_APPROVAL_INIT</Col></Row><Row><Col id=\"TARGET\">selectmaster</Col><Col id=\"SP\">DZRPR_APPROVAL_MASTER_SELECT</Col></Row><Row><Col id=\"TARGET\">savemaster</Col><Col id=\"SP\">DZRPR_APPROVAL_MASTER_SAVE</Col></Row><Row><Col id=\"TARGET\">line1</Col><Col id=\"SP\">DZRPR_APPROVAL_LINE_SELECT</Col></Row><Row><Col id=\"TARGET\">line2</Col><Col id=\"SP\">DZRPR_APPROVAL_LINE_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DZRPR_APPROVAL_EXECUTE</Col></Row><Row><Col id=\"TARGET\">selectEtc</Col><Col id=\"SP\">DMAPR_PO_APP_SELECT</Col></Row><Row><Col id=\"SP\">DMAPR_PO_APP2_SELECT</Col><Col id=\"TARGET\">select</Col></Row><Row><Col id=\"TARGET\">saveBas</Col><Col id=\"SP\">DCBPR_PRECONTRACT_APP_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"V1\" type=\"STRING\" size=\"256\"/><Column id=\"V2\" type=\"STRING\" size=\"256\"/><Column id=\"V3\" type=\"STRING\" size=\"256\"/><Column id=\"V4\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID_AP\"/><Col id=\"ID_AP_TYPE\"/><Col id=\"V1\"/><Col id=\"V2\"/><Col id=\"V3\"/><Col id=\"V4\"/><Col id=\"DS_ETITLE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprLines1", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprLines2", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInit", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListEtc", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_PR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONT_PR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PREPAY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DOKUB\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DOKUB_CHA\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SILHENG_CHA\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListHd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HANDPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GROUPJOIN\" type=\"STRING\" size=\"256\"/><Column id=\"YM_GROUPJOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EVENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EVENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FAMILY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FAM_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TY_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WREATH\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FAMILYEVENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"FR_VACATION\" type=\"STRING\" size=\"256\"/><Column id=\"TO_VACATION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData1","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataInfo","0","180",null,null,"0","0",null,null,null,null,this.divData1.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divData1.addChild(obj.name, obj);

            obj = new Static("sta04","149","29","455","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta05","0","29","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("1");
            obj.set_text("현장명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta06","603","29","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("2");
            obj.set_text("현장공사기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta07","752","29",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta00","149","58","455","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta02","0","58","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("5");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtDS_SITE","154","34","445","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            obj.set_textAlign("center");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta01","752","58",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONT_PR","757","63",null,"20","5",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            obj.set_textAlign("center");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta13","603","58","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("9");
            obj.set_text("납품기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","280","44.50%","22",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("10");
            obj.set_text("실행예산 집행현황");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtDS_SUBCON","154","63","445","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            obj.set_textAlign("center");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta21","752","87",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta22","603","87","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("13");
            obj.set_text("완성예측");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta23","149","87","455","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta24","0","87","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("15");
            obj.set_text("(총괄)실행금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta25","752","116",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta26","603","116","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("17");
            obj.set_text("(누적)실행차인액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta27","149","116","455","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta28","0","116","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("19");
            obj.set_text("(누적)실행금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta29","149","232",null,"41","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta30","0","232","150","41",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("21");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new TextArea("txtRM_BIGO","154","237",null,"31","5",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("22");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtDS_SITE_PR","757","34",null,"20","5",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            obj.set_textAlign("center");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtRT_ESTM","1094","92",null,"20","5",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("47");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_textAlign("left");
            obj.set_border("0px none");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtAM_ESTM","757","92",null,"20","txtRT_ESTM:4",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_textAlign("right");
            obj.set_border("0px none");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtRT_SILHENG_TOT_CHA","1094","121",null,"20","5",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("48");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_textAlign("left");
            obj.set_border("0px none");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtAM_SILHENG_TOT_CHA","757","121",null,"20","txtRT_SILHENG_TOT_CHA:4",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_textAlign("right");
            obj.set_border("0px none");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtAM_TT_SILHENG","154","92","445","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            obj.set_textAlign("right");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtAM_SILHENG_TOT","154","121","445","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            obj.set_textAlign("right");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","309",null,null,"0","0",null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("28");
            obj._setContents("");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta03","752","145",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta08","149","145","455","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtRT_SILHENG_CHA","1094","150",null,"20","5",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("49");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_textAlign("left");
            obj.set_border("0px none");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtAM_SILHENG_CHA","757","150",null,"20","txtRT_SILHENG_CHA:4",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("31");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_textAlign("right");
            obj.set_border("0px none");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtAM_HADO_TOT","154","150","445","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            obj.set_textAlign("right");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta09","603","145","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("33");
            obj.set_text("(금회)실행차인액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta10","0","145","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("34");
            obj.set_text("(누적)발주금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta11","752","174",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta12","149","174","455","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtDS_ETC1","757","179",null,"20","5",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("37");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            obj.set_textAlign("center");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtAM_SILHENG","154","179","445","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            obj.set_textAlign("right");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta14","603","174","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("39");
            obj.set_text("잔여/누계 수량");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta15","0","174","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("40");
            obj.set_text("(금회)실행금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta16","752","203",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta17","149","203","455","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","757","208",null,"20","5",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("43");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            obj.set_textAlign("center");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtAM_HADO","154","208","445","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            obj.set_textAlign("right");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta18","603","203","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("45");
            obj.set_text("발주업체");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta19","0","203","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("46");
            obj.set_text("(금회)발주금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Div("divDataApprTitle","0","0",null,"40","0",null,null,null,null,null,this.divData1.form);
            obj.set_taborder("0");
            obj.set_background("");
            this.divData1.addChild(obj.name, obj);

            obj = new Static("staApprNm","0","0",null,null,"0","0",null,null,null,null,this.divData1.form.divDataApprTitle.form);
            obj.set_taborder("0");
            obj.set_text("전자결재 SAMPLE");
            obj.set_font("normal 20pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData1.form.divDataApprTitle.addChild(obj.name, obj);

            obj = new Div("divDataApprLine","0","divDataApprTitle:10",null,"80","0",null,null,null,null,null,this.divData1.form);
            obj.set_taborder("1");
            this.divData1.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","50",null,null,"0",null,null,null,null,this.divData1.form.divDataApprLine.form);
            obj.set_taborder("0");
            obj.set_text("결재");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataApprLine.addChild(obj.name, obj);

            obj = new Grid("objGridAppr1","sta01:-1","0",null,null,"50.5%","0",null,null,null,null,this.divData1.form.divDataApprLine.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData1.form.divDataApprLine.addChild(obj.name, obj);

            obj = new Static("sta02","objGridAppr1:10","0","50",null,null,"0",null,null,null,null,this.divData1.form.divDataApprLine.form);
            obj.set_taborder("2");
            obj.set_text("합의");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataApprLine.addChild(obj.name, obj);

            obj = new Grid("objGridAppr2","sta02:-1","0",null,null,"0","0",null,null,null,null,this.divData1.form.divDataApprLine.form);
            obj.set_taborder("3");
            obj._setContents("");
            this.divData1.form.divDataApprLine.addChild(obj.name, obj);

            obj = new Div("divDataMaster","0","divDataApprLine:10",null,"60","0",null,null,null,null,null,this.divData1.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divData1.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","150","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("0");
            obj.set_text("기안자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","0","270","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta00","sta02:-1","0","150","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("2");
            obj.set_text("기안부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta03","sta00:-1","0","270","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","0","150","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("4");
            obj.set_text("기안일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","0",null,"30","0",null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta07","149","sta02:-1","688","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta04:-1","150","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("8");
            obj.set_text("문서번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta05:-1",null,"30","0",null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Edit("txtDS_ETITLE","147","sta07:-25","671","20",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("10");
            obj.set_readonly("false");
            obj.set_border("0px none");
            obj.set_background("#ffffff");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta01:-1","150","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData1.form.divDataMaster.form.sta02","text","dsListMaster","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData1.form.divDataMaster.form.sta03","text","dsListMaster","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData1.form.divDataMaster.form.sta05","text","dsListMaster","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData1.form.divDataMaster.form.sta09","text","dsListMaster","NO_DOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData1.form.divDataApprTitle.form.staApprNm","text","dsListMaster","DS_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData1.form.divDataMaster.form.txtDS_ETITLE","value","dsListMaster","DS_ETITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData1.form.divDataInfo.form.txtDS_SITE","value","dsListEtc","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData1.form.divDataInfo.form.txtDS_CONT_PR","value","dsListEtc","DS_CONT_PR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData1.form.divDataInfo.form.txtDS_SUBCON","value","dsListEtc","DS_SUBCON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData1.form.divDataInfo.form.txtRM_BIGO","value","dsListEtc","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData1.form.divDataInfo.form.txtDS_SITE_PR","value","dsListEtc","DS_SITE_PR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData1.form.divDataInfo.form.txtAM_ESTM","value","dsListEtc","AM_ESTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData1.form.divDataInfo.form.txtAM_SILHENG_TOT_CHA","value","dsListEtc","AM_SILHENG_TOT_CHA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData1.form.divDataInfo.form.txtAM_TT_SILHENG","value","dsListEtc","AM_TT_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData1.form.divDataInfo.form.txtAM_SILHENG_TOT","value","dsListEtc","AM_SILHENG_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData1.form.divDataInfo.form.txtAM_SILHENG_CHA","value","dsListEtc","AM_SILHENG_CHA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData1.form.divDataInfo.form.txtAM_HADO_TOT","value","dsListEtc","AM_HADO_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData1.form.divDataInfo.form.txtDS_ETC1","value","dsListEtc","DS_ETC1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData1.form.divDataInfo.form.txtAM_SILHENG","value","dsListEtc","AM_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData1.form.divDataInfo.form.txtDS_VENDOR","value","dsListEtc","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData1.form.divDataInfo.form.txtAM_HADO","value","dsListEtc","AM_HADO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData1.form.divDataInfo.form.txtRT_ESTM","value","dsListEtc","RT_ESTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData1.form.divDataInfo.form.txtRT_SILHENG_TOT_CHA","value","dsListEtc","RT_SILHENG_TOT_CHA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData1.form.divDataInfo.form.txtRT_SILHENG_CHA","value","dsListEtc","RT_SILHENG_CHA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DMA_PO_APP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.ID_AP_TYPE = "DM01";	//	발주품의서
        this.FlagGb = "";	// 저장 플래그값

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

        	// 기본 버튼(입력,저장 등..) 숨김처리
        	this.divTopBtn.form.fnSetVisibleButton(false);

        	this.dsSearch.setColumn(0, "V1", this.gfnIsNull(this.getOwnerFrame().V1) ? "" : this.getOwnerFrame().V1);
        	this.dsSearch.setColumn(0, "V2", this.gfnIsNull(this.getOwnerFrame().V2) ? "" : this.getOwnerFrame().V2);
        	this.dsSearch.setColumn(0, "V3", this.gfnIsNull(this.getOwnerFrame().V3) ? "" : this.getOwnerFrame().V3);
        	this.dsSearch.setColumn(0, "V4", this.gfnIsNull(this.getOwnerFrame().V4) ? "" : this.getOwnerFrame().V4);
        	this.dsSearch.setColumn(0, "DS_ETITLE", this.getOwnerFrame().DS_ETITLE);

        	if(this.gfnIsNull(this.getOwnerFrame().ID_AP)) {
        		//채번 후 조회
        		this.fnInit();
        	}
        	else {
        		//조회
        		this.dsSearch.setColumn(0, "ID_AP", this.getOwnerFrame().ID_AP);
        		this.fnSelectMaster();
        	}
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
        	this.btn1 = this.gfnFormButtonAdd("btn1", "fnAppr");	//승인
        	this.btn2 = this.gfnFormButtonAdd("btn2", "fnAppr");	//반려
        	this.btn3 = this.gfnFormButtonAdd("btn3", "fnBtn3");	//결재정보
        	this.btn4 = this.gfnFormButtonAdd("btn4", "fnAppr");	//상신
        	this.btn5 = this.gfnFormButtonAdd("btn5", "fnAppr");	//상신취소
        	this.btn6 = this.gfnFormButtonAdd("btn6", "fnBtn6");	//파일첨부
        	this.btn7 = this.gfnFormButtonAdd("btn7", "fnAppr");	//재기안
        	this.btn8 = this.gfnFormButtonAdd("btn8", "fnAppr");	//수신접수
        	this.btn9 = this.gfnFormButtonAdd("btn9", "fnAppr");	//삭제
        	this.btn10 = this.gfnFormButtonAdd("btn10", "fnBtn10");	//결재선
        	this.btn11 = this.gfnFormButtonAdd("btn11", "fnAppr");	//임시저장

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//Title
        	this.staApprNm = this.divData1.form.divDataApprTitle.form.staApprNm;
        	//제목
        	this.txtDS_ETITLE = this.divData1.form.divDataMaster.form.txtDS_ETITLE;

        	// 결재선
        	this.dxGridAppr1 = this.divData1.form.divDataApprLine.form.objGridAppr1;
        	this.dxGridAppr2 = this.divData1.form.divDataApprLine.form.objGridAppr2;

        	this.dxGrid = this.divData1.form.divDataInfo.form.objGrid;
        	//this.dxGrid1 = this.divData1.form.objGrid1;

        	// BUTTON, BUTTON-IN 처리
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//결재선 그리드 세팅
        	this.gfnGridInit(this.dxGridAppr1, this.dsApprLines1, "DZ", "DZR_APLINES_01");
        	this.gfnGridInit(this.dxGridAppr2, this.dsApprLines2, "DZ", "DZR_APLINES_01");

        	this.dxGridAppr1.set_extendsizetype("none");
        	this.dxGridAppr1.set_scrollbartype("none none");	// 가로 스크롤이 생기지 않게 세팅
        	this.dxGridAppr2.set_extendsizetype("none");
        	this.dxGridAppr2.set_scrollbartype("none none");	// 가로 스크롤이 생기지 않게 세팅

        	//결재본문 그리드 세팅
        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMA_PO_APP");

        	//가로 스크롤이 생기지 않게 세팅
        	//this.dxGrid.set_scrollbartype("none default");

        	//그리드 헤더 색상 변경

        	this.dxGrid.set_enableredraw(false);
        	for(var i = 0; i < this.dxGrid.getCellCount("head"); i++) {
         		this.dxGrid.setCellProperty("head",i,"background","#EDECEF");
         		this.dxGrid.setCellProperty("head",i,"color","#4b5055");
        		this.dxGrid.setCellProperty("head",i,"border","none, 1px solid #C4C2CD, 1px solid #C4C2CD, none");
        	}
        	this.dxGrid.set_enableredraw(true);


        // 	this.dxGrid1.set_enableredraw(false);
        // 	for(var i = 0; i < this.dxGrid1.getCellCount("head"); i++) {
        // 		this.dxGrid1.setCellProperty("head",i,"background","#EDECEF");
        // 		this.dxGrid1.setCellProperty("head",i,"color","#4b5055");
        // 		this.dxGrid1.setCellProperty("head",i,"border","none, 1px solid #C4C2CD, 1px solid #C4C2CD, none");
        // 	}
        // 	this.dxGrid1.set_enableredraw(true);


        	//var colDT_WORK = this.dxGrid.getBindCellIndex("body", "DT_WORK");		// 근무일자
        	//this.dxGrid.setCellProperty("body",colDT_WORK,"displaytype","expr:dataset.getColumn(currow, 'TY_GUBUN')=='S'?'text':'date'");

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsApprInit = new Dataset();
        	this.dsApprInit.addColumn("ID_AP_OUT", "string");
        	this.dsApprInit.addColumn("ID_AP_TYPE", "string");
        	this.dsApprInit.addColumn("PARAM01", "string");
        	this.dsApprInit.addColumn("PARAM02", "string");
        	this.dsApprInit.addColumn("PARAM03", "string");
        	this.dsApprInit.addColumn("PARAM04", "string");
        	this.dsApprInit.addColumn("DS_TITLE", "string");
        	this.dsApprInit.addColumn("ID_USER", "string");

        	this.dsLine1 = new Dataset();
        	this.dsLine1.addColumn("ID_AP", "string");
        	this.dsLine1.addColumn("TY_GUBUN", "string");

        	this.dsLine2 = new Dataset();
        	this.dsLine2.addColumn("ID_AP", "string");
        	this.dsLine2.addColumn("TY_GUBUN", "string");

        	this.dsMaster = new Dataset();
        	this.dsMaster.addColumn("ID_AP", "string");
        	this.dsMaster.addColumn("ID_USER", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("ID_AP", "string");
        	this.dsExec.addColumn("ST_APPR", "string");
        	this.dsExec.addColumn("ID_USER", "string");

        	this.dsSaveMaster = new Dataset();
        	this.dsSaveMaster.addColumn("ID_AP", "string");
        	this.dsSaveMaster.addColumn("DS_ETITLE", "string");
        	this.dsSaveMaster.addColumn("ID_USER", "string");

        	/*************************************************************************************************
        	* 결재본분 관련 Parameter
        	**************************************************************************************************/
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_CONT", "string");

        	this.dsSaveBas = new Dataset();
        	this.dsSaveBas.addColumn("NO_CONT", "string");
        	this.dsSaveBas.addColumn("DS_PAYMENT", "string");
        	this.dsSaveBas.addColumn("DS_PREPAY", "string");
        	this.dsSaveBas.addColumn("RM_BIGO", "string");
        	this.dsSaveBas.addColumn("ID_USER", "string");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        //결재정보 / 결재선 조회
        this.fnSelectMaster = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.dsLine1.clearData();
        	this.dsLine1.addRow();
        	this.dsLine1.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsLine1.setColumn(0, "TY_GUBUN", "결재");

        	this.dsLine2.clearData();
        	this.dsLine2.addRow();
        	this.dsLine2.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsLine2.setColumn(0, "TY_GUBUN", "합의");

        	this.dsMaster.clearData();
        	this.dsMaster.addRow();
        	this.dsMaster.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsMaster.setColumn(0, "ID_USER", this.AuthClient.ID_USER);


        	var strSvcId    = "master";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "line1=dsLine1 line2=dsLine2 selectmaster=dsMaster";
         	var outData     = "dsApprLines1=line10 dsApprLines2=line20 dsListMaster=selectmaster0";
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

        // 결재선 조회
        this.fnSelectLines = function() {
        	this.dsLine1.clearData();
        	this.dsLine1.addRow();
        	this.dsLine1.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsLine1.setColumn(0, "TY_GUBUN", "결재");

        	this.dsLine2.clearData();
        	this.dsLine2.addRow();
        	this.dsLine2.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsLine2.setColumn(0, "TY_GUBUN", "합의");

        	var strSvcId    = "lines";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "line1=dsLine1 line2=dsLine2";
         	var outData     = "dsApprLines1=line10 dsApprLines2=line20";
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


        /*************************************************************************************************
        * 결재본분 조회
        * ------------------------------------------------------------------------------------------------
        * 결재본분 문서 내용 조회시 필요한 sp 호출
        **************************************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	//결재본문 그리드 세팅
        	//this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFA_PLANS_APP");

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_CONT", this.dsListMaster.getColumn(0, "V_PARAM01"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "selectEtc=dsSelect select=dsSelect";	// select1=dsSelect1
        	var outData     = "dsListEtc=selectEtc0 dsList=select0";		// dsList1=select10
         	//var outData     = "dsListEtc=selectEtc0 dsListHd=select0 dsList=select1";		// dsList1=select10
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

        /*************************************************************************************************
        * 결재본분 문서 저장 / 상신 호출
        * ------------------------------------------------------------------------------------------------
        * 결재본분 문서 저장이 필요할 경우
        * this.fnExec("01"); 부분 주석 처리 후 아래 저장 부분 주석 풀고 내용 입력
        *  - strSvcId = "save" 그대로 사용 (fnCallback 함수에서 상신 처리)
        * 결재본분 문서 저장이 필요없는 경우 그대로 상신 처리 사용
        **************************************************************************************************/
        this.fnSave = function(status) {
        	//this.fnExec("01");	//상신
        	this.fnExec(status);	//상신

        // 	this.dsSave.clearData();
        // 	this.dsSave.addRow();
        //
        // 	this.dsSave.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        // 	this.dsSave.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        //
        // 	var strSvcId    = "save";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "save=dsSave";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        }


        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg) {
        	if (svcID == "init") {
        		if (this.dsInit.rowcount > 0) {

        			//채번 후 결재선/결재정보 조회
        			this.dsSearch.setColumn(0, "ID_AP", this.dsInit.getColumn(0, "ID_AP_OUT"));

        			this.fnSelectMaster();
        		}
        	}
        	else if (svcID == "master" || svcID == "lines") {
        		//결재선 Height 설정
        		if(this.dsApprLines1.rowcount > 0) {
        			this.dxGridAppr1.setRealRowSize(0, 24);
        			this.dxGridAppr1.setRealRowSize(1, 26);
        		}
        		if(this.dsApprLines2.rowcount > 0) {
        			this.dxGridAppr2.setRealRowSize(0, 24);
        			this.dxGridAppr2.setRealRowSize(1, 26);
        		}

        		if (this.dsListMaster.rowcount > 0) {
        			this.btn1.set_visible(this.dsListMaster.getColumn(0, "BTNAPPR") != "H");
        			this.btn2.set_visible(this.dsListMaster.getColumn(0, "BTNREJECT") != "H");
        			this.btn3.set_visible(this.dsListMaster.getColumn(0, "BTNINFO") != "H");
        			this.btn4.set_visible(this.dsListMaster.getColumn(0, "BTNISSUE") != "H");
        			this.btn5.set_visible(this.dsListMaster.getColumn(0, "BTNCANCEL") != "H");
        			this.btn6.set_visible(this.dsListMaster.getColumn(0, "BTNFILE") != "H");
        			this.btn7.set_visible(this.dsListMaster.getColumn(0, "BTNRE") != "H");
        			this.btn8.set_visible(this.dsListMaster.getColumn(0, "BTNAC") != "H");
        			this.btn9.set_visible(this.dsListMaster.getColumn(0, "BTNDE") != "H");
        			this.btn10.set_visible(this.dsListMaster.getColumn(0, "BTNLINES") != "H");
        			this.btn11.set_visible(this.dsListMaster.getColumn(0, "BTNSAVE") != "H");

        			// 확장버튼 숨김 처리 후 위치조정
        			var arrBtns = [];
        			for (var i = this.BtnsInfo.length - 1; i >= 0; i--) {
        				if (this.BtnsInfo[i].COMP_BUTTON.visible)
        					arrBtns.push(this.BtnsInfo[i].COMP_BUTTON);
        			}

        			var r = 0;
        			for(var i = 0; i <= arrBtns.length - 1; i++) {
        				var btn = arrBtns[i];
        				if (i == 0)
        					btn.set_right(0);
        				else {
        					btn.set_right(r + 2);
        				}

        				r = btn.right + btn.width;
        			}

        			this.btn1.set_enable(this.dsListMaster.getColumn(0, "BTNAPPR") == "Y");
        			this.btn2.set_enable(this.dsListMaster.getColumn(0, "BTNREJECT") == "Y");
        			this.btn3.set_enable(this.dsListMaster.getColumn(0, "BTNINFO") == "Y");
        			this.btn4.set_enable(this.dsListMaster.getColumn(0, "BTNISSUE") == "Y");
        			this.btn5.set_enable(this.dsListMaster.getColumn(0, "BTNCANCEL") == "Y");
        			this.btn6.set_enable(this.dsListMaster.getColumn(0, "BTNFILE") == "Y");
        			this.btn7.set_enable(this.dsListMaster.getColumn(0, "BTNRE") == "Y");
        			this.btn8.set_enable(this.dsListMaster.getColumn(0, "BTNAC") == "Y");
        			this.btn9.set_enable(this.dsListMaster.getColumn(0, "BTNDE") == "Y");
        			this.btn10.set_enable(this.dsListMaster.getColumn(0, "BTNLINES") == "Y");
        			this.btn11.set_enable(this.dsListMaster.getColumn(0, "BTNSAVE") == "Y");

        			// 상태값이 00 이면 제목 활성화
        			if (this.dsListMaster.getColumn(0, "ST_APPR") == "00")
        				this.txtDS_ETITLE.set_readonly(false);
        			else
        				this.txtDS_ETITLE.set_readonly(true);


        			// 결재정보 조회후 결재본문 내역 조회
        			this.fnSelect();
        		}
        	}
        	else if(svcID == "savemaster") {
        		if (errorCode == 0) {
        			var json = this.gfnArgsToJson(strArg);
        			var status = json.status;
        			//this.fnExec("01");
        			this.fnSave(status);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "saveBas") {
        		if (errorCode == 0) {
        			var json = this.gfnArgsToJson(strArg);
        			var status = json.status;
        			//this.FlagGb = "";	// 저장 플래그값 초기화

        			if(status == "00" || status == "01"){			// 임시저장, 상신
        				//this.fnExec(status);
        				this.fnSaveMaster(status);	// 마스터저장
        			}
        			/*
        			else if(status == "01"){	// 상신

        			}
        			*/
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnExec("01");	//상신
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			var json = this.gfnArgsToJson(strArg);
        			var status = json.status;
        			if (status == "DE") {
        				this.getParentContext().close(true);
        			}
        			/*
        			else if (status == "00") {
        				// 임시저장후에는 fnExe() 실행 후에 아무것도 않한다(재조회 하지않는다)
         			}
        			*/
        			else {
        				this.fnSelectMaster();
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "select") {
        		if (errorCode == 0) {

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }



        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
         // 승인/반려/상신/상신취소/재기안/수신접수/삭제 처리
        this.fnAppr = function(obj,e) {
        	var status = "";
        	switch (obj.name) {
        		case "btnExt_btn1":	//승인
        			status = "03";
        			break;
        		case "btnExt_btn2":	//반려
        			status = "04";
        			break;
        		case "btnExt_btn4":	//상신
        			status = "01";
        			break;
        		case "btnExt_btn5":	//상신취소
        			status = "05";
        			break;
        		case "btnExt_btn7":	//재기안
        			status = "RE";
        			break;
        		case "btnExt_btn8":	//수신접수
        			status = "AC";
        			break;
        		case "btnExt_btn9":	//삭제
        			status = "DE";
        			break;
        		case "btnExt_btn11"://임시저장
        			status = "00";
        			break;
        	}

        	//if (status == "01" || status == "00") {
        	if (status == "01" || status == "00") {			// 상신 or 임시저장
        		this.fnSaveBas(status);
        		//this.fnSaveMaster(status);
        	}else {
        		this.fnExec(status);
        	}
        	/*
        	else if (status == "00" || status == "DE") {	// 임시저장 or 삭제
        		if(status == "DE"){
        			this.FlagGb = "D";
        		}
        		this.fnSaveBas(status);
        	}
        	*/

        }

        // 화면 내용 저장
        this.fnSaveBas = function(status) {
        	//if(this.gfnIsNull(this.FlagGb)) return;

        	//if (!this.fnSaveVali()) return false;

        	this.dsSaveBas.clearData();
        	this.dsSaveBas.addRow();

        	this.dsSaveBas.setColumn(0, "NO_CONT", this.dsListMaster.getColumn(0, "V_PARAM01"));
        	this.dsSaveBas.setColumn(0, "DS_PAYMENT", this.dsListEtc.getColumn(0, "DS_PAYMENT"));
        	this.dsSaveBas.setColumn(0, "DS_PREPAY", this.dsListEtc.getColumn(0, "DS_PREPAY"));
        	this.dsSaveBas.setColumn(0, "RM_BIGO", this.dsListEtc.getColumn(0, "RM_BIGO"));
        	this.dsSaveBas.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "saveBas";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveBas=dsSaveBas";
        	var outData     = "";
        	var strArg      = "status=" + status;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnSaveVali = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsList.getColumn(0,"CD_GUBUN"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData1.form.divDataInfo.form.cboCD_GUBUN.setFocus();
        		}
        		this.gfnAlert("구분을 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0,"CD_EVENT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData1.form.divDataInfo.form.cboCD_EVENT.setFocus();
        		}
        		this.gfnAlert("경조를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0,"CD_FAMILY"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData1.form.divDataInfo.form.cboCD_FAMILY.setFocus();
        		}
        		this.gfnAlert("대상자와의 관계를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        // 확장버튼 sp 호출 (DZRPR_APPROVAL_EXECUTE)
        this.fnExec = function(status) {
        	this.dsExec.clearData();
        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsExec.setColumn(0, "ST_APPR", status);
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
        	var outData     = "";
        	var strArg      = "status=" + status;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        // 상신전에 저장 sp 호출 (DZRPR_APPROVAL_MASTER_SAVE)
        this.fnSaveMaster = function(status) {
        	this.dsSaveMaster.clearData();
        	this.dsSaveMaster.addRow();

        	this.dsSaveMaster.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsSaveMaster.setColumn(0, "DS_ETITLE", this.dsListMaster.getColumn(0, "DS_ETITLE"));
        	this.dsSaveMaster.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "savemaster";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "savemaster=dsSaveMaster";
        	var outData     = "";
        	var strArg      = "status=" + status;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        //결재정보
        this.fnBtn3 = function(obj,e) {
        	var param = {};
        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");

        	this.gfnFormOpenNonAuth("DZR", "DZR_APLINES", "", param, 1000, 420);
        };

        //파일첨부
        this.fnBtn6 = function(obj,e) {
           var fileManager = {};
           fileManager.CD_GUBUN = "DZAP";
           fileManager.CD_DIR = [ this.dsSearch.getColumn(0, "ID_AP") ];

        	// IS_READONLY = false가 수정가능상태 BTNFILE Y는 수정가능
        	var bReadOnly = (this.dsListMaster.getColumn(0, "BTNFILE") == "Y")?false:true;
        	fileManager.IS_READONLY = bReadOnly;
        	//fileManager.IS_READONLY = (this.dsListMaster.getColumn(0, "BTNFILE") == "Y");

           this.gfnFileManager(fileManager, "");
        };
        /*
        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수
        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		//this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF", "첨부");
        	}
        	this.dsList.setColumn(this.dsList.rowposition, "CT_PROOF", "첨부(" + val.Cnt + ")");
        	this.dsList.set_enableevent(true);
        };
        */
        //결재선
        this.fnBtn10 = function(obj,e) {
        	var param = {};
        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        // 	param.ID_AP_TYPE = this.ID_AP_TYPE;
        // 	param.PARAM01 = this.dsSearch.getColumn(0, "V1");
        // 	param.PARAM02 = this.dsSearch.getColumn(0, "V2");
        // 	param.PARAM03 = this.dsSearch.getColumn(0, "V3");
        // 	param.PARAM04 = this.dsSearch.getColumn(0, "V4");
        // 	param.DS_TITLE = this.dsSearch.getColumn(0, "DS_ETITLE");

        	this.gfnFormOpen("DZR", "DZR_AP_REQUEST", "fnBtn10_callback", param, 930, 680);
        };

        this.fnBtn10_callback = function(svcID, val) {
        	this.fnSelectLines();
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //결재번호 채번
        this.fnInit = function() {
        	this.dsApprInit.clearData();
        	this.dsApprInit.addRow();

        	this.dsApprInit.setColumn(0, "ID_AP_OUT", "");
        	this.dsApprInit.setColumn(0, "ID_AP_TYPE", this.ID_AP_TYPE);
        	this.dsApprInit.setColumn(0, "PARAM01", this.dsSearch.getColumn(0, "V1"));
        	this.dsApprInit.setColumn(0, "PARAM02", this.dsSearch.getColumn(0, "V2"));
        	this.dsApprInit.setColumn(0, "PARAM03", this.dsSearch.getColumn(0, "V3"));
        	this.dsApprInit.setColumn(0, "PARAM04", this.dsSearch.getColumn(0, "V4"));
        	this.dsApprInit.setColumn(0, "DS_TITLE", this.dsSearch.getColumn(0, "DS_ETITLE"));
        	this.dsApprInit.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "init";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "init=dsApprInit";
        	var outData     = "dsInit=init";
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



        this.dsList_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue)
        	{
        		//if(this.FlagGb != "I"){
        		//	this.FlagGb = "U";
        		//}


        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divData1.form.divDataInfo.form.txtDS_SITE.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtDS_SITE.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtDS_CONT_PR.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtDS_CONT_PR.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtDS_SUBCON.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtDS_SUBCON.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtDS_SITE_PR.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtDS_SITE_PR.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtRT_ESTM.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtRT_ESTM.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtAM_ESTM.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtAM_ESTM.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtRT_SILHENG_TOT_CHA.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtRT_SILHENG_TOT_CHA.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtAM_SILHENG_TOT_CHA.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtAM_SILHENG_TOT_CHA.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtAM_TT_SILHENG.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtAM_TT_SILHENG.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtAM_SILHENG_TOT.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtAM_SILHENG_TOT.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtRT_SILHENG_CHA.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtRT_SILHENG_CHA.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtAM_SILHENG_CHA.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtAM_SILHENG_CHA.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtAM_HADO_TOT.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtAM_HADO_TOT.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtDS_ETC1.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtDS_ETC1.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtAM_SILHENG.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtAM_SILHENG.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtDS_VENDOR.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtDS_VENDOR.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtAM_HADO.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtAM_HADO.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.dsListEtc.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsListHd.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DMA_PO_APP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
