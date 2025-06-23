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
            this.set_titletext("협력사상세정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_VENDOR_SAP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REGIST_SAP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUMUN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PLANT_DOCUMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST2\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FOUND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CON_SPECL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PART\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PRESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POSTHQ\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ADDRHQ1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TAX_EFFECT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"EM_REPRENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MAINBANK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MAINBANK_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MAINBANK_OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FIRST_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REGIST_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CANCEL_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CANCEL_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_UPDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMVPR_REGISTDETAIL_BASIC_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"YR_REGIST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_VENDOR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc1", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMVPR_REGIST_GENERAL_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DMVPR_REGIST_GENERAL_SAVE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DMVPR_REGIST_GENERAL_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc2", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMVPR_REGISTLICCOST_DM_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DMVPR_REGISTLICCOST_DM_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DMVPR_REGISTLICCOST_DM_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DMVPR_REGISTLICCOST_DM_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_VENDOR_SAP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"YR_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"TY_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUMUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PART\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FOUND\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BUDO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MANYFACTURE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_AGENCY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NM_BID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL_BID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HP_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EM_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NM_CON\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL_CON\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HP_CON\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EM_CON\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NM_REC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_REC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SPOT_REC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REASON_REC\" type=\"STRING\" size=\"256\"/><Column id=\"CT_EMPLOY1\" type=\"INT\" size=\"256\"/><Column id=\"CT_EMPLOY2\" type=\"INT\" size=\"256\"/><Column id=\"CT_EMPLOY3\" type=\"INT\" size=\"256\"/><Column id=\"CT_ENGNEER1\" type=\"INT\" size=\"256\"/><Column id=\"CT_ENGNEER2\" type=\"INT\" size=\"256\"/><Column id=\"CT_ENGNEER3\" type=\"INT\" size=\"256\"/><Column id=\"CT_ENGNEER4\" type=\"INT\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REGION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_BUMUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_REGIST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CORP", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_MANYFACTURE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_AGENCY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_REGION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFVENDOR_DM");
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_REGIST","ccfCD_VENDOR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("등록년도");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_REGIST","staYR_REGIST:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","939","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("일반정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData01","0","sta01:10","980","113",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj.set_text("협력업체코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta02","640","0","113","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_text("회사코드(SAP)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta03","288","29","161","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("2");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta04","289","0","160","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("3");
            obj.set_text("법인번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta05","287","59","162","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("4");
            obj.set_text("사업개시일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta06","0","59","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("5");
            obj.set_text("대표자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta11","sta01:-1","0","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta12","752","0","190","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta13","449","29","192","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta14","449","59","192","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta15","449","0","192","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta16","109","59","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta21","0","29","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("12");
            obj.set_text("협력업체명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta22","989","-1","160","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("13");
            obj.set_text("VENDOR등록일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta23","989","28","160","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("14");
            obj.set_text("부분(대공종)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta24","989","57","160","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("15");
            obj.set_text("공종코드1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta25","989","86","160","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("16");
            obj.set_text("특수공사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta26","640","29","160","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("17");
            obj.set_text("등록구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta31","109","29","181","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta32","sta22:-1","-1","192","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta33","sta23:-1","28","192","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta34","sta24:-1","57","192","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta35","sta25:-1","86","192","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta36","752","29","190","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta43","1009","118","111","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("24");
            obj.set_text("플랜트등록증");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta44","1009","147","111","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("25");
            obj.set_text("공종코드2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta45","1009","176","111","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("26");
            obj.set_text("소재지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta53","1119","118","190","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta54","1119","147","190","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta55","1119","176","190","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtCD_VENDOR","117","5","165","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("30");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtNO_VENDOR_SAP","760","4","176","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("31");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtNO_SJC","455","34","175","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("32");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtNO_REGIST","455","5","175","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("33");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDT_FOUND","455","64","175","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("34");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_PRESIDENT","117","64","165","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("35");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","117","34","165","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("36");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDT_REGIST_SAP","1154","4","176","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("37");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtCD_COSTCLASS","sta23:5","33","176","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("38");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtCD_LICCOST1","sta24:5","62","176","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("39");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_CON_SPECL","1154","91","176","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("40");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtTY_REGIST","759","34","176","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("41");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtYN_PLANT_DOCUMENT","1125","123","175","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("42");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtCD_LICCOST2","sta44:5","152","175","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("43");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("txtDS_PART","sta45:5","181","175","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("44");
            obj.set_visible("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("divData02","0","divData01:10","980","59",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta201","0","0","110","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta202","0","sta201:-1","110","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta211","sta201:-1","0","181","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta212","sta202:-1","sta211:-1","181","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta221","sta211:-1","0","160","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("사업장주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta222","sta212:-1","sta221:-1","160","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("FAX번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta231","sta221:-1","0","192","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta232","sta222:-1","sta231:-1","192","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta241","sta231:-1","0","111","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("납세완납유효기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta242","sta232:-1","sta241:-1","111","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta251","sta241:-1","0","190","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("sta252","sta242:-1","sta251:-1","190","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtNO_POSTHQ","sta201:5","5","165","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("12");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL","sta202:5","34","165","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("13");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtAT_ADDRHQ1","sta221:5","5","176","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("14");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtNO_FAX","sta222:5","34","176","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("15");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtDT_TAX_EFFECT","sta241:5","5","175","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("16");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("txtEM_REPRENTATIVE","sta242:5","34","175","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("17");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("divData03","0","divData02:10","980","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta301","0","0","110","30",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("1");
            obj.set_text("은행코드(주거래)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Static("sta311","sta301:-1","0","181","30",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Static("sta321","sta311:-1","0","160","30",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("1");
            obj.set_text("은행계정(주거래계좌번호)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Static("sta331","sta321:-1","0","192","30",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Static("sta341","sta331:-1","0","111","30",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("1");
            obj.set_text("계좌소유주");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Static("sta351","sta341:-1","0","190","30",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Edit("txtCD_MAINBANK","sta341:5","5","175","20",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("6");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Edit("txtNO_MAINBANK_ACCOUNT","sta321:5","5","176","20",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("7");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Edit("txtDS_MAINBANK_OWNER","sta301:5","5","165","20",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("8");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Div("divData04","0","divData03:10","990","16",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta401","996","-4","110","30",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("1");
            obj.set_text("최초등록일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta402","996","sta401:-1","110","30",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("1");
            obj.set_text("등록취소일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta411","sta401:-1","-4","181","30",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta412","sta402:-1","sta411:-5","181","30",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta421","sta411:-1","-4","160","30",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("1");
            obj.set_text("등록사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta422","sta412:-1","sta421:-1","160","30",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("1");
            obj.set_text("취소사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta431","sta421:-1","-4","192","30",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Static("sta432","sta422:-1","sta431:-1","192","30",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Edit("txtDT_FIRST_REGIST","sta401:5","1","165","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Edit("txtDT_CANCEL_REGIST","sta421:5","1","176","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("9");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Edit("txtDS_REGIST_REASON","sta402:5","30","165","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("10");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Edit("txtDS_CANCEL_REGIST","sta422:5","30","176","20",null,null,null,null,null,null,this.divData.form.divData04.form);
            obj.set_taborder("11");
            obj.set_visible("false");
            this.divData.form.divData04.addChild(obj.name, obj);

            obj = new Tab("tabData","0","divData04:10",null,null,"0","0",null,null,"100",null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("일반사항");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staCD_BUMUN","0","5","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_text("부문");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_REGIST","0","staCD_BUMUN:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("등록구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_CORP","0","staTY_REGIST:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("33");
            obj.set_text("기업형태");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_REGIST","0","staTY_CORP:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("34");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_FOUND","0","staDT_REGIST:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("35");
            obj.set_text("사업개시일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_BUDO","0","staDT_FOUND:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("36");
            obj.set_text("부도일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staYN_MANYFACTURE","0","staDT_BUDO:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("37");
            obj.set_text("제조사여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staYN_AGENCY","0","staYN_MANYFACTURE:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("38");
            obj.set_text("대리점여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_PART","0","staYN_AGENCY:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("39");
            obj.set_text("소재지");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_REGION","0","staDS_PART:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("40");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG01","staCD_BUMUN:-1","5","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG02","staTY_REGIST:-1","staBG01:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG03","staTY_CORP:-1","staBG02:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG04","staDT_REGIST:-1","staBG03:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG05","staDT_FOUND:-1","staBG04:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG06","staDT_BUDO:-1","staBG05:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG07","staYN_MANYFACTURE:-1","staBG06:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG08","staYN_AGENCY:-1","staBG07:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG09","staDS_PART:-1","staBG08:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBGDS_REGION","staDS_REGION:-1","staBG09:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCT_EMPLOY1","staBG01:-1","5","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("40");
            obj.set_text("관리직");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCT_EMPLOY2","staBG02:-1","staCT_EMPLOY1:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("41");
            obj.set_text("기술직");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCT_EMPLOY3","staBG03:-1","staCT_EMPLOY2:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("42");
            obj.set_text("상용기능직");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCT_ENGNEER1","staBG04:-1","staCT_EMPLOY3:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("43");
            obj.set_text("기술사");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCT_ENGNEER2","staBG05:-1","staCT_ENGNEER1:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("44");
            obj.set_text("기사1급");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCT_ENGNEER3","staBG06:-1","staCT_ENGNEER2:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("45");
            obj.set_text("기사2급");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCT_ENGNEER4","staBG07:-1","staCT_ENGNEER3:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("46");
            obj.set_text("기능사");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG10","staCT_EMPLOY1:-1","5","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG11","staCT_EMPLOY2:-1","staBG10:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG12","staCT_EMPLOY3:-1","staBG11:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG13","staCT_ENGNEER1:-1","staBG12:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG14","staCT_ENGNEER2:-1","staBG13:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG15","staCT_ENGNEER3:-1","staBG14:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG16","staCT_ENGNEER4:-1","staBG15:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_NM_REC","staBG10:-1","5","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("47");
            obj.set_text("추천인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT_REC","staBG11:-1","staDS_NM_REC:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("48");
            obj.set_text("추천부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_SPOT_REC","staBG12:-1","staDS_DEPT_REC:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("49");
            obj.set_text("추천인직위");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_REASON_REC","staBG13:-1","staDS_SPOT_REC:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("50");
            obj.set_text("추천사유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_NM_BID","staBG14:-1","staDS_REASON_REC:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("51");
            obj.set_text("입찰담당자명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_TEL_BID","staBG15:-1","staDS_NM_BID:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("52");
            obj.set_text("입찰담당전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_HP_BID","staBG16:-1","staNO_TEL_BID:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("53");
            obj.set_text("입찰담당휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_EM_BID","staBG16:-1","staNO_HP_BID:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("54");
            obj.set_text("입찰담당이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_NM_CON","staBG16:-1","staDS_EM_BID:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("55");
            obj.set_text("계약담당자명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_TEL_CON","staBG16:-1","staDS_NM_CON:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("56");
            obj.set_text("계약담당전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_HP_CON","staBG16:-1","staNO_TEL_CON:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("57");
            obj.set_text("계약담당휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_EM_CON","staBG16:-1","staNO_HP_CON:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("58");
            obj.set_text("계약담당이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG17","staDS_NM_REC:-1","5","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG18","staDS_DEPT_REC:-1","staBG17:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG19","staDS_SPOT_REC:-1","staBG18:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG20","staDS_REASON_REC:-1","staBG19:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG21","staDS_NM_BID:-1","staBG20:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG22","staNO_TEL_BID:-1","staBG21:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG23","staNO_HP_BID:-1","staBG22:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG24","staDS_EM_BID:-1","staBG23:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG25","staDS_NM_CON:-1","staBG24:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG26","staNO_TEL_CON:-1","staBG25:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG27","staNO_HP_CON:-1","staBG26:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBG28","staDS_EM_CON:-1","staBG27:-1","181","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboCD_BUMUN","staCD_BUMUN:5","10","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCD_BUMUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboTY_REGIST","staTY_REGIST:5","ccboCD_BUMUN:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_REGIST");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboTY_CORP","staTY_CORP:5","ccboTY_REGIST:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("32");
            obj.set_innerdataset("dsTY_CORP");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtDT_REGIST","staDT_REGIST:5","ccboTY_CORP:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("66");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FOUND","staDT_FOUND:5","txtDT_REGIST:9","105","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("69");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BUDO","staDT_BUDO:5","ctclDT_FOUND:9","105","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("72");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboYN_MANYFACTURE","staYN_MANYFACTURE:5","ctclDT_BUDO:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("74");
            obj.set_innerdataset("dsYN_MANYFACTURE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboYN_AGENCY","staYN_AGENCY:5","ccboYN_MANYFACTURE:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("78");
            obj.set_innerdataset("dsYN_AGENCY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtDS_PART","staDS_PART:5","ccboYN_AGENCY:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("77");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("ccboDS_REGION","staDS_REGION:5","txtDS_PART:9","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsDS_REGION");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtCT_EMPLOY1","staCT_EMPLOY1:5","10","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("59");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtCT_EMPLOY2","staCT_EMPLOY2:5","txtCT_EMPLOY1:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("62");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtCT_EMPLOY3","staCT_EMPLOY3:5","txtCT_EMPLOY2:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("63");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtCT_ENGNEER1","staCT_ENGNEER1:5","txtCT_EMPLOY3:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("67");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtCT_ENGNEER2","staCT_ENGNEER2:5","txtCT_ENGNEER1:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("68");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtCT_ENGNEER3","staCT_ENGNEER3:5","txtCT_ENGNEER2:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("71");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtCT_ENGNEER4","staCT_ENGNEER4:5","txtCT_ENGNEER3:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("75");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtDS_NM_REC","staDS_NM_REC:5","10","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("60");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT_REC","staDS_DEPT_REC:5","txtDS_NM_REC:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("61");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtDS_SPOT_REC","staDS_SPOT_REC:5","txtDS_DEPT_REC:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("64");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtDS_REASON_REC","staDS_REASON_REC:5","txtDS_SPOT_REC:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("65");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtDS_NM_BID","staDS_NM_BID:5","txtDS_REASON_REC:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("70");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL_BID","staNO_TEL_BID:5","txtDS_NM_BID:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtNO_HP_BID","staNO_HP_BID:5","txtNO_TEL_BID:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("76");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtDS_EM_BID","staDS_EM_BID:5","txtNO_HP_BID:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("79");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtDS_NM_CON","staDS_NM_CON:5","txtDS_EM_BID:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("80");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL_CON","staNO_TEL_CON:5","txtDS_NM_CON:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("81");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtNO_HP_CON","staNO_HP_CON:5","txtNO_TEL_CON:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("82");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("txtDS_EM_CON","staDS_EM_CON:5","txtNO_HP_CON:9","165","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("83");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("취급품목");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divData01.form.txtCD_VENDOR","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divData01.form.txtDS_VENDOR","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divData01.form.txtNO_VENDOR_SAP","value","dsList","NO_VENDOR_SAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divData01.form.txtDT_REGIST_SAP","value","dsList","DT_REGIST_SAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divData01.form.txtNO_SJC","value","dsList","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData01.form.txtNO_REGIST","value","dsList","NO_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divData01.form.txtDT_FOUND","value","dsList","DT_FOUND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divData01.form.txtDS_PRESIDENT","value","dsList","DS_PRESIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divData01.form.txtCD_LICCOST1","value","dsList","CD_LICCOST1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divData01.form.txtDS_CON_SPECL","value","dsList","DS_CON_SPECL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divData01.form.txtTY_REGIST","value","dsList","TY_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData01.form.txtYN_PLANT_DOCUMENT","value","dsList","YN_PLANT_DOCUMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divData01.form.txtCD_LICCOST2","value","dsList","CD_LICCOST2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divData01.form.txtDS_PART","value","dsList","DS_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divData02.form.txtNO_POSTHQ","value","dsList","NO_POSTHQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divData02.form.txtAT_ADDRHQ1","value","dsList","AT_ADDRHQ1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divData02.form.txtDT_TAX_EFFECT","value","dsList","DT_TAX_EFFECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divData02.form.txtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divData02.form.txtNO_FAX","value","dsList","NO_FAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divData02.form.txtEM_REPRENTATIVE","value","dsList","EM_REPRENTATIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divData03.form.txtDS_MAINBANK_OWNER","value","dsList","CD_MAINBANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divData03.form.txtNO_MAINBANK_ACCOUNT","value","dsList","NO_MAINBANK_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divData03.form.txtCD_MAINBANK","value","dsList","DS_MAINBANK_OWNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divData04.form.txtDT_FIRST_REGIST","value","dsList","DT_FIRST_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divData04.form.txtDT_CANCEL_REGIST","value","dsList","DS_REGIST_REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divData04.form.txtDS_REGIST_REASON","value","dsList","DT_CANCEL_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divData04.form.txtDS_CANCEL_REGIST","value","dsList","DS_CANCEL_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divData01.form.txtCD_COSTCLASS","value","dsList","CD_BUMUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.tabData.tab1.form.ccboCD_BUMUN","value","dsList1","CD_BUMUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.tabData.tab1.form.ccboTY_REGIST","value","dsList1","TY_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab1.form.ccboTY_CORP","value","dsList1","TY_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab1.form.txtDT_REGIST","value","dsList1","DT_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab1.form.ctclDT_FOUND","value","dsList1","DT_FOUND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab1.form.ctclDT_BUDO","value","dsList1","DT_BUDO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.tabData.tab1.form.ccboYN_MANYFACTURE","value","dsList1","YN_MANYFACTURE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.tabData.tab1.form.ccboYN_AGENCY","value","dsList1","YN_AGENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab1.form.txtDS_PART","value","dsList1","DS_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.tabData.tab1.form.txtCT_EMPLOY1","value","dsList1","CT_EMPLOY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.tabData.tab1.form.txtCT_EMPLOY2","value","dsList1","CT_EMPLOY2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.tabData.tab1.form.txtCT_EMPLOY3","value","dsList1","CT_EMPLOY3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.tabData.tab1.form.txtCT_ENGNEER1","value","dsList1","CT_ENGNEER1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.tabData.tab1.form.txtCT_ENGNEER2","value","dsList1","CT_ENGNEER2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.tabData.tab1.form.txtCT_ENGNEER3","value","dsList1","CT_ENGNEER3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.tabData.tab1.form.txtCT_ENGNEER4","value","dsList1","CT_ENGNEER4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.tabData.tab1.form.txtDS_NM_REC","value","dsList1","DS_NM_REC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.tabData.tab1.form.txtDS_DEPT_REC","value","dsList1","DS_DEPT_REC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.tabData.tab1.form.txtDS_SPOT_REC","value","dsList1","DS_SPOT_REC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.tabData.tab1.form.txtDS_REASON_REC","value","dsList1","DS_REASON_REC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.tabData.tab1.form.txtDS_NM_BID","value","dsList1","DS_NM_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.tabData.tab1.form.txtNO_TEL_BID","value","dsList1","NO_TEL_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.tabData.tab1.form.txtNO_HP_BID","value","dsList1","NO_HP_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.tabData.tab1.form.txtDS_EM_BID","value","dsList1","DS_EM_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.tabData.tab1.form.txtDS_NM_CON","value","dsList1","DS_NM_CON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.tabData.tab1.form.txtNO_TEL_CON","value","dsList1","NO_TEL_CON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.tabData.tab1.form.txtNO_HP_CON","value","dsList1","NO_HP_CON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab1.form.txtDS_EM_CON","value","dsList1","DS_EM_CON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divSearch.form.ctclYR_REGIST.form.TextBox","value","dsSearch","YR_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.tabData.tab1.form.ccboDS_REGION","value","dsList1","DS_REGION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DMV_REGISTDETAIL.xfdl", function() {
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

        	// 현재 일반정보쪽 insert, update, delete 없으므로 readonly 처리
        	this.gfnSetAllReadonly(this.divData.form.divData01.form, true);
        	this.gfnSetAllReadonly(this.divData.form.divData02.form, true);
        	this.gfnSetAllReadonly(this.divData.form.divData03.form, true);
        	this.gfnSetAllReadonly(this.divData.form.divData04.form, true);

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_VENDOR)) {
        		this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        		this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.set_value(this.getOwnerFrame().DS_VENDOR);
        		this.dsSearch.setColumn(0, "YR_REGIST", this.getOwnerFrame().YR_REGIST);

        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// gfnCallAuthBtn 호출시 화면의 fnSetButton 호출이 되므로
        	// 버튼들에 대한 권한 처리가 이뤄진후 fnSetButton에서는 false에 대한 처리만 해준다.
        // 	if(this.gfnGetFormStatus(this) != "") {
        // 		switch(this.divData.form.tabData.tabindex) {
        // 			case 0:
        // 			case 1:
        // 			case 2:
        // 			case 3:
        // 			case 6:
        // 				// 조치변경내용
        // 				// 인사정보
        // 				// 참고사항
        // 				// 면허정보
        // 				// 입찰제한조회
        // 				break;
        //
        // 			case 4:
        // 				// 조정이력관리
        // 				this.FormBtns.Add.set_enable(false);
        // 				this.FormBtns.Del.set_enable(false);
        // 				break
        // 			case 5:
        // 				// 등록이력관리
        // 				this.FormBtns.Add.set_enable(false);
        // 				this.FormBtns.Del.set_enable(false);
        // 				break;
        //
        // 		}
        // 	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid1 = this.divData.form.tabData.tab2.form.objGrid1;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid1, this.dsList2, "DM", "DMV_REGIST_LICCOST_DM");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("YR_REGIST", "string");
        }

        this.fnSetParameter1 = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("CD_BUMUN", "string");
        	this.dsSave.addColumn("TY_REGIST", "string");
        	this.dsSave.addColumn("TY_CORP", "string");
        	this.dsSave.addColumn("DT_REGIST", "string");
        	this.dsSave.addColumn("DS_PART", "string");
        	this.dsSave.addColumn("DT_FOUND", "string");
        	this.dsSave.addColumn("DT_BUDO", "string");
        	this.dsSave.addColumn("YN_MANYFACTURE", "string");
        	this.dsSave.addColumn("YN_AGENCY", "string");
        	this.dsSave.addColumn("DS_NM_BID", "string");
        	this.dsSave.addColumn("NO_TEL_BID", "string");
        	this.dsSave.addColumn("NO_HP_BID", "string");
        	this.dsSave.addColumn("DS_EM_BID", "string");
        	this.dsSave.addColumn("DS_NM_CON", "string");
        	this.dsSave.addColumn("NO_TEL_CON", "string");
        	this.dsSave.addColumn("NO_HP_CON", "string");
        	this.dsSave.addColumn("DS_EM_CON", "string");
        	this.dsSave.addColumn("DS_NM_REC", "string");
        	this.dsSave.addColumn("DS_DEPT_REC", "string");
        	this.dsSave.addColumn("DS_SPOT_REC", "string");
        	this.dsSave.addColumn("DS_REASON_REC", "string");
        	this.dsSave.addColumn("CT_EMPLOY1", "int");
        	this.dsSave.addColumn("CT_EMPLOY2", "int");
        	this.dsSave.addColumn("CT_EMPLOY3", "int");
        	this.dsSave.addColumn("CT_ENGNEER1", "int");
        	this.dsSave.addColumn("CT_ENGNEER2", "int");
        	this.dsSave.addColumn("CT_ENGNEER3", "int");
        	this.dsSave.addColumn("CT_ENGNEER4", "int");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("YR_REGIST", "string");
        	this.dsSave.addColumn("DS_REGION", "string");
        };

        this.fnSetParameter2 = function() {
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("NO_ID", "bigdecimal");
        	this.dsInsert.addColumn("YY_CONTLIMIT", "string");
        	this.dsInsert.addColumn("DS_LICENSE_TXT", "string");
        	this.dsInsert.addColumn("NO_LICENSE", "string");
        	this.dsInsert.addColumn("YN_LIC_MAIN", "string");
        	this.dsInsert.addColumn("AM_CONTLIMIT", "bigdecimal");
        	this.dsInsert.addColumn("RK_REGION", "int");
        	this.dsInsert.addColumn("RK_REGIONTOTAL", "int");
        	this.dsInsert.addColumn("RK_NATION", "int");
        	this.dsInsert.addColumn("RK_NATIONTOTAL", "int");
        	this.dsInsert.addColumn("CD_LICENSE", "string");
        	this.dsInsert.addColumn("CD_LICCOST", "string");
        	this.dsInsert.addColumn("YR_REGIST", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("NO_ID", "bigdecimal");
        	this.dsUpdate.addColumn("YY_CONTLIMIT", "string");
        	this.dsUpdate.addColumn("DS_LICENSE_TXT", "string");
        	this.dsUpdate.addColumn("NO_LICENSE", "string");
        	this.dsUpdate.addColumn("YN_LIC_MAIN", "string");
        	this.dsUpdate.addColumn("AM_CONTLIMIT", "bigdecimal");
        	this.dsUpdate.addColumn("RK_REGION", "int");
        	this.dsUpdate.addColumn("RK_REGIONTOTAL", "int");
        	this.dsUpdate.addColumn("RK_NATION", "int");
        	this.dsUpdate.addColumn("RK_NATIONTOTAL", "int");
        	this.dsUpdate.addColumn("CD_LICENSE", "string");
        	this.dsUpdate.addColumn("CD_LICCOST", "string");
        	this.dsUpdate.addColumn("YR_REGIST", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_VENDOR", "string");
        	this.dsDelete.addColumn("NO_ID", "bigdecimal");
        	this.dsDelete.addColumn("YR_REGIST", "string");

        };

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

        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "YR_REGIST", this.dsSearch.getColumn(0, "YR_REGIST"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
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

        	this.fnDetail();
        }

        this.fnDetail = function() {
        	// 현재탭 데이터 조회
        	var tab_index = this.divData.form.tabData.tabindex;
        	tab_index++;

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc"+tab_index;
        	var inData      = "select=dsSelect";
        	var outData     = "dsList"+tab_index+"=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]


        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {

        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			//var nrow = this.gfnGridAdd(this.dxGrid1);
        			break;
        		case 1:
        			var nrow = this.gfnGridAdd(this.dxGrid1);
        			break;
        	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			var msg = "거래처 : " + this.dsSearch.getColumn(0, "CD_VENDOR") + " [" + this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.text + "]"
        			+ "\n\n해당 일반사항 건을 삭제처리하시겠습니까?";
        			this.gfnConfirm(msg, "fnDel1_callback");
        			break;
        		case 1:
        			var nrow = this.gfnGridDel(this.dxGrid1);
        			break;

        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	var tabIndex = this.divData.form.tabData.tabindex;
        	switch(tabIndex) {
        		case 0:
        			// 일반사항
        			this.fnSetParameter1();
        			this.fnSaveData1();
        			break;

        		case 1:
        			// 취급품목
        			this.fnSetParameter2();
        			this.fnSaveData2();
        			break;
        	}
        // 	탭1과 탭2가 각각 dsSave / dsInsert,dsUpdate,dsDelete 로 삭제가 되어서 따로 진행.
        // 	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;
        //
        // 	var strSvcId    = "save";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc"+(tabIndex+1);
        // 	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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

        this.fnSaveData1 = function() {
        	var dslist = this.dsList1;
        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSave.setColumn(nrow, "CD_BUMUN", dslist.getColumn(0, "CD_BUMUN"));
        	this.dsSave.setColumn(nrow, "TY_REGIST", dslist.getColumn(0, "TY_REGIST"));
        	this.dsSave.setColumn(nrow, "TY_CORP", dslist.getColumn(0, "TY_CORP"));
        	this.dsSave.setColumn(nrow, "DT_REGIST", dslist.getColumn(0, "DT_REGIST"));
        	this.dsSave.setColumn(nrow, "DS_PART", dslist.getColumn(0, "DS_PART"));
        	this.dsSave.setColumn(nrow, "DT_FOUND", dslist.getColumn(0, "DT_FOUND"));
        	this.dsSave.setColumn(nrow, "DT_BUDO", dslist.getColumn(0, "DT_BUDO"));
        	this.dsSave.setColumn(nrow, "YN_MANYFACTURE", dslist.getColumn(0, "YN_MANYFACTURE"));
        	this.dsSave.setColumn(nrow, "YN_AGENCY", dslist.getColumn(0, "YN_AGENCY"));
        	this.dsSave.setColumn(nrow, "DS_NM_BID", dslist.getColumn(0, "DS_NM_BID"));
        	this.dsSave.setColumn(nrow, "NO_TEL_BID", dslist.getColumn(0, "NO_TEL_BID"));
        	this.dsSave.setColumn(nrow, "NO_HP_BID", dslist.getColumn(0, "NO_HP_BID"));
        	this.dsSave.setColumn(nrow, "DS_EM_BID", dslist.getColumn(0, "DS_EM_BID"));
        	this.dsSave.setColumn(nrow, "DS_NM_CON", dslist.getColumn(0, "DS_NM_CON"));
        	this.dsSave.setColumn(nrow, "NO_TEL_CON", dslist.getColumn(0, "NO_TEL_CON"));
        	this.dsSave.setColumn(nrow, "NO_HP_CON", dslist.getColumn(0, "NO_HP_CON"));
        	this.dsSave.setColumn(nrow, "DS_EM_CON", dslist.getColumn(0, "DS_EM_CON"));
        	this.dsSave.setColumn(nrow, "DS_NM_REC", dslist.getColumn(0, "DS_NM_REC"));
        	this.dsSave.setColumn(nrow, "DS_DEPT_REC", dslist.getColumn(0, "DS_DEPT_REC"));
        	this.dsSave.setColumn(nrow, "DS_SPOT_REC", dslist.getColumn(0, "DS_SPOT_REC"));
        	this.dsSave.setColumn(nrow, "DS_REASON_REC", dslist.getColumn(0, "DS_REASON_REC"));
        	this.dsSave.setColumn(nrow, "CT_EMPLOY1", dslist.getColumn(0, "CT_EMPLOY1"));
        	this.dsSave.setColumn(nrow, "CT_EMPLOY2", dslist.getColumn(0, "CT_EMPLOY2"));
        	this.dsSave.setColumn(nrow, "CT_EMPLOY3", dslist.getColumn(0, "CT_EMPLOY3"));
        	this.dsSave.setColumn(nrow, "CT_ENGNEER1", dslist.getColumn(0, "CT_ENGNEER1"));
        	this.dsSave.setColumn(nrow, "CT_ENGNEER2", dslist.getColumn(0, "CT_ENGNEER2"));
        	this.dsSave.setColumn(nrow, "CT_ENGNEER3", dslist.getColumn(0, "CT_ENGNEER3"));
        	this.dsSave.setColumn(nrow, "CT_ENGNEER4", dslist.getColumn(0, "CT_ENGNEER4"));
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(nrow, "YR_REGIST", this.dsSearch.getColumn(0, "YR_REGIST"));
        	this.dsSave.setColumn(nrow, "DS_REGION", dslist.getColumn(0, "DS_REGION"));

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc1";
        	var inData      = "save=dsSave";
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
        };

        this.fnSaveData2 = function() {
        	var dslist = this.dsList2;
        	for (var i = 0; i < dslist.rowcount; i++) {
        		var flag = this.gfnGetFlag(dslist, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsInsert.setColumn(nrow, "NO_ID", dslist.getColumn(i, "NO_ID"));
        				this.dsInsert.setColumn(nrow, "YY_CONTLIMIT", dslist.getColumn(i, "YY_CONTLIMIT"));
        				this.dsInsert.setColumn(nrow, "DS_LICENSE_TXT", dslist.getColumn(i, "DS_LICENSE_TXT"));
        				this.dsInsert.setColumn(nrow, "NO_LICENSE", dslist.getColumn(i, "NO_LICENSE"));
        				this.dsInsert.setColumn(nrow, "YN_LIC_MAIN", dslist.getColumn(i, "YN_LIC_MAIN"));
        				this.dsInsert.setColumn(nrow, "AM_CONTLIMIT", dslist.getColumn(i, "AM_CONTLIMIT"));
        				this.dsInsert.setColumn(nrow, "RK_REGION", dslist.getColumn(i, "RK_REGION"));
        				this.dsInsert.setColumn(nrow, "RK_REGIONTOTAL", dslist.getColumn(i, "RK_REGIONTOTAL"));
        				this.dsInsert.setColumn(nrow, "RK_NATION", dslist.getColumn(i, "RK_NATION"));
        				this.dsInsert.setColumn(nrow, "RK_NATIONTOTAL", dslist.getColumn(i, "RK_NATIONTOTAL"));
        				this.dsInsert.setColumn(nrow, "CD_LICENSE", dslist.getColumn(i, "CD_LICENSE"));
        				this.dsInsert.setColumn(nrow, "CD_LICCOST", dslist.getColumn(i, "CD_LICCOST"));
        				this.dsInsert.setColumn(nrow, "YR_REGIST", this.dsSearch.getColumn(0, "YR_REGIST"));

        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "NO_ID", dslist.getColumn(i, "NO_ID"));
        				this.dsUpdate.setColumn(nrow, "YY_CONTLIMIT", dslist.getColumn(i, "YY_CONTLIMIT"));
        				this.dsUpdate.setColumn(nrow, "DS_LICENSE_TXT", dslist.getColumn(i, "DS_LICENSE_TXT"));
        				this.dsUpdate.setColumn(nrow, "NO_LICENSE", dslist.getColumn(i, "NO_LICENSE"));
        				this.dsUpdate.setColumn(nrow, "YN_LIC_MAIN", dslist.getColumn(i, "YN_LIC_MAIN"));
        				this.dsUpdate.setColumn(nrow, "AM_CONTLIMIT", dslist.getColumn(i, "AM_CONTLIMIT"));
        				this.dsUpdate.setColumn(nrow, "RK_REGION", dslist.getColumn(i, "RK_REGION"));
        				this.dsUpdate.setColumn(nrow, "RK_REGIONTOTAL", dslist.getColumn(i, "RK_REGIONTOTAL"));
        				this.dsUpdate.setColumn(nrow, "RK_NATION", dslist.getColumn(i, "RK_NATION"));
        				this.dsUpdate.setColumn(nrow, "RK_NATIONTOTAL", dslist.getColumn(i, "RK_NATIONTOTAL"));
        				this.dsUpdate.setColumn(nrow, "CD_LICENSE", dslist.getColumn(i, "CD_LICENSE"));
        				this.dsUpdate.setColumn(nrow, "CD_LICCOST", dslist.getColumn(i, "CD_LICCOST"));
        				this.dsUpdate.setColumn(nrow, "YR_REGIST", this.dsSearch.getColumn(0, "YR_REGIST"));

        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsDelete.setColumn(nrow, "NO_ID", dslist.getColumn(i, "NO_ID"));
        				this.dsDelete.setColumn(nrow, "YR_REGIST", this.dsSearch.getColumn(0, "YR_REGIST"));

        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc2";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			//var nrow = this.gfnExcelExport(this.dxGrid1);
        			break;
        		case 1:
        			var nrow = this.gfnExcelExport(this.dxGrid1);
        			break;
        	}
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_VENDOR.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("거래처를 입력하세요.", "fnVaidateCallback");
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
        	}
        	else if (svcID == "detail") {
        		this.gfnSetFormStatus(this, "Q");
        		// 탭변경후 버튼권한처리 호출. 처리후 화면의 fnSetButton 호출됨.
        		this.gfnCallAuthBtn(this);

        		if(this.divData.form.tabData.tabindex == 0)
        		{
        			if(this.dsList1.rowcount == 0)
        			{
        				this.dsList1.addRow();
        			}
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			// 아래 그리드만 저장하므로 버튼 select 불필요. fnDetail 호출
        			this.fnDetail();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo")
        	{
        		if (errorCode == 0) {

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnDel1_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsDelete = new Dataset();
        		this.dsDelete.addColumn("CD_VENDOR", "string");
        		this.dsDelete.addColumn("YR_REGIST", "string");

        		this.dsDelete.clearData();
        		var nrow = this.dsDelete.addRow();
        		this.dsDelete.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        		this.dsDelete.setColumn(0, "YR_REGIST", this.dsSearch.getColumn(0, "YR_REGIST"));

        		if (this.dsDelete.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc1";
        		var inData      = "delete=dsDelete";
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
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

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
        		this.dsList1.clearData();
        		this.dsList2.clearData();
        	}
        };

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(0, "CD_TYPE", "H01");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(1, "CD_TYPE", "H05");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(2, "CD_TYPE", "H06");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(3, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(3, "CD_TYPE", "TYM");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(4, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(4, "CD_TYPE", "TYD");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(5, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(5, "CD_TYPE", "03");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_BUMUN=combo0 dsTY_REGIST=combo1 dsTY_CORP=combo2 dsYN_MANYFACTURE=combo3 dsYN_AGENCY=combo4 dsDS_REGION=combo5";
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

        this.divData_tabData_onchanged = function(obj,e)
        {
        	// 탭 변경시 조회처리
        	if(e.preindex != e.postindex) {
        		this.fnDetail();
        	}
        };

        this.divData_tabData_canchange = function(obj,e)
        {
        	if(e.preindex != e.postindex) {
        		if(this.gfnGetFormStatus(this) != "" && this.gfnGetFormStatus(this) != "Q") {
        			this.TabChangeIndex = e.postindex;
        			this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "fnTabChangeCheck");
        			return false;
        		}
        	}
        };

        this.fnTabChangeCheck = function(strId, val) {
        	if(val == true) {
        		// set_tabindex 호출시 canchange가 또 호출되기 때문에 상태값을 Q로 설정해서 통과되도록 처리.
        		this.gfnSetFormStatus(this, "Q");
        		this.divData.form.tabData.set_tabindex(this.TabChangeIndex);
        	}
        };


        this.dsList1_onvaluechanged = function(obj,e)
        {
        	if(e.newvalue != e.oldvalue)
        	{
        		this.gfnSetFormStatus(this, "U");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.addEventHandler("canchange",this.divData_tabData_canchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList1_onvaluechanged,this);
        };
        this.loadIncludeScript("DMV_REGISTDETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
