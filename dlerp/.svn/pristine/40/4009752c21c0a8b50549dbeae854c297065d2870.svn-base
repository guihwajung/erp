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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BUSINESS_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BUSINESS_TO\" type=\"STRING\" size=\"256\"/><Column id=\"FR_BUSINESS_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_BUSINESS_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STOPOVER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TRAFFIC_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TRAFFIC_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TOTAL_TRAVEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PERSONAL_CAR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CAR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PURPOSE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GROUPWARE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_DOCUMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"NM_TRAFFIC_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"NM_TRAFFIC_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_BUSINESS_TRIP_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DABPR_BUSINESS_TRIP_COST</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_BUSINESS_TRIP_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YR_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_BASE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("대상년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfYR_BASE","staYR_BASE:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfYR_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBUSINESS_PLACE","ccfID_SABUN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("출장지");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBUSINESS_PLACE","staBUSINESS_PLACE:0.0","10.0","137","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","edtBUSINESS_PLACE:0.0","10.0","84","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_formscrolltype("both");
            obj.set_formscrollbartype("auto auto");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDEL_SUB",null,"413","59","24","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnADD_SUB",null,"413","59","24","btnDEL_SUB:2",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK_bg","124","348",null,"60","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","staDS_REMARK_bg:30",null,"241","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("false");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK","0","348","125","60",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staGridSub_TITLE","4","staDS_REMARK:1","106","23",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("출장경비");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staID_SABUN2","0","0","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staID_SABUN2_bg","staID_SABUN2:-1","0",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta_DT_BUSINESS","0","29","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_text("출장기한");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staFR_BUSINESS_PLACE","0","58","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_text("출발지");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_STOPOVER","0","87","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_text("경유지");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_TRAFFIC","0","116","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_text("교통수단");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_TOTAL_TRAVEL","0","145","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_text("차량이용시 총거리");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_PERSONAL_CAR","0","174","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_text("개인차량 이용사유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_PURPOSE","0","203","125","60",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_text("출장목적");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_RESULT","0","261","125","90",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_text("출장결과");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDT_BUSINESS_bg","sta_DT_BUSINESS:-1","29",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTO_BUSINESS_PLACE","55.87%","58","67","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("17");
            obj.set_text("출장지");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staFR_BUSINESS_PLACE_bg","staFR_BUSINESS_PLACE:-1","58",null,"30","staTO_BUSINESS_PLACE:-1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_STOPOVER_bg","staDS_STOPOVER:-1","87",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_TRAFFIC_TO","55.87%","116","67","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("21");
            obj.set_text("오는편");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_TRAFFIC_FROM","staDS_TRAFFIC:-1","116","68","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_text("가는편");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_TRAFFIC_FROM_bg","staDS_TRAFFIC_FROM:-1","116",null,"30","staDS_TRAFFIC_TO:-1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_TRAFFIC_TO_bg","staDS_TRAFFIC_TO:-1","116",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_TOTAL_TRAVEL_bg","staDS_TOTAL_TRAVEL:-1","145",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staNO_CAR","55.87%","174","67","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("25");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_PERSONAL_CAR_bg","staDS_PERSONAL_CAR:-1","174",null,"30","staNO_CAR:-1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staNO_CAR_bg","staNO_CAR:-1","174",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_PURPOSE_bg","staDS_PURPOSE:-1","203",null,"60","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_RESULT_bg","staDS_RESULT:-1","261",null,"90","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTO_BUSINESS_PLACE_bg","staTO_BUSINESS_PLACE:-1","58",null,"30","1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN_D","staID_SABUN2:5","4","250","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("31");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("calDT_BUSINESS_FROM","sta_DT_BUSINESS:5","34","121","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("32");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDT_BUSINESS_TERM","calDT_BUSINESS_FROM:5","35","25","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("33");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("calDT_BUSINESS_TO","staDT_BUSINESS_TERM:5","34","121","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("34");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtFR_BUSINESS_PLACE","staFR_BUSINESS_PLACE:5","63",null,"20","staTO_BUSINESS_PLACE:5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("35");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtTO_BUSINESS_PLACE","staTO_BUSINESS_PLACE:5","63",null,"20","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("36");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtDS_STOPOVER","staDS_STOPOVER:5","91",null,"20","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("37");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtDS_TOTAL_TRAVEL","staDS_TOTAL_TRAVEL:5","150",null,"20","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("38");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtDS_PERSONAL_CAR","staDS_PERSONAL_CAR:5","179",null,"20","staNO_CAR:5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("39");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtNO_CAR","staNO_CAR:5","179",null,"20","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("40");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_PURPOSE","staDS_PURPOSE:5","210",null,"46","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("41");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RESULT","staDS_RESULT:5","268",null,"76","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("42");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","staDS_REMARK:5","356",null,"46","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("43");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnSUB_DOCUMENT",null,"413","99","24","btnADD_SUB:2",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("44");
            obj.set_text("출장경비전자결재");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("ccfDS_TRAFFIC_FROM","staDS_TRAFFIC_FROM:2","121",null,"20","staDS_TRAFFIC_TO:2",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("0");
            obj.set_taborder("45");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("ccfDS_TRAFFIC_TO","staDS_TRAFFIC_TO:2","121",null,"20","5",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("0");
            obj.set_taborder("46");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfYR_BASE.form.TextBox","value","dsSearch","YR_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtBUSINESS_PLACE","value","dsSearch","BUSINESS_PLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.ccfID_SABUN_D.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.ccfID_SABUN_D.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.calDT_BUSINESS_FROM","value","dsList","DT_BUSINESS_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.calDT_BUSINESS_TO","value","dsList","DT_BUSINESS_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.edtFR_BUSINESS_PLACE","value","dsList","FR_BUSINESS_PLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.edtTO_BUSINESS_PLACE","value","dsList","TO_BUSINESS_PLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.edtDS_STOPOVER","value","dsList","DS_STOPOVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.edtDS_TOTAL_TRAVEL","value","dsList","DS_TOTAL_TRAVEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataRight.form.edtDS_PERSONAL_CAR","value","dsList","DS_PERSONAL_CAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataRight.form.edtNO_CAR","value","dsList","NO_CAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataRight.form.txtDS_PURPOSE","value","dsList","DS_PURPOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataRight.form.txtDS_RESULT","value","dsList","DS_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.ccfDS_TRAFFIC_FROM.form.CDTextBox","value","dsList","DS_TRAFFIC_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.ccfDS_TRAFFIC_FROM.form.DSTextBox","value","dsList","NM_TRAFFIC_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.ccfDS_TRAFFIC_TO.form.CDTextBox","value","dsList","DS_TRAFFIC_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.ccfDS_TRAFFIC_TO.form.DSTextBox","value","dsList","NM_TRAFFIC_TO");
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
        this.registerScript("DAB_BUSINESS_TRIP.xfdl", function() {
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

        	var today = this.gfnGetDate();

        	//법인 셋팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfYR_BASE.form.TextBox.set_value(today.substring(0,4));
        	this.fnExtBtnEnable(false);
        	this.btnSUB_DOCUMENT.set_enable(false);

        	if(this.FormInfo.GR_SEARCH == "9"){
        		this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_SABUN);
        	}
        	if(!this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)){
        		this.ccfID_SABUN.form.fnCodeFindLoad();
        	}

        	if(this.FormInfo.GR_SEARCH == "9"){
        		this.ccfCD_CORP.set_enable(false);
        		this.ccfID_SABUN.set_enable(false);
        	}

        	//주의 ) sub 그리드 수정시 메인버튼활성화위해
        	//objGridSub.sub = fasle 로 세팅함

         	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync

        	if(this.dsList.rowcount >0){
        		this.divData.form.divDataRight.form.btnADD_SUB.set_enable(true);
        		this.divData.form.divDataRight.form.btnDEL_SUB.set_enable(true);
        	}else{
        		this.divData.form.divDataRight.form.btnADD_SUB.set_enable(false);
        		this.divData.form.divDataRight.form.btnDEL_SUB.set_enable(false);
        	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDocument = this.gfnFormButtonAdd("Document", "fnDocument");
        };

        this.fnExtBtnEnable = function(bFlag) {
        	this.btnDocument.set_enable(bFlag);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;

        	//상단조회조건
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfYR_BASE = this.divSearch.form.ccfYR_BASE;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.edtID_PERSON = this.divSearch.form.edtID_PERSON;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;

        	//Sub detail
        	this.ccfID_SABUN_D	= this.divData.form.divDataRight.form.ccfID_SABUN_D;
        	this.btnADD_SUB = this.divData.form.divDataRight.form.btnADD_SUB;
        	this.btnDEL_SUB = this.divData.form.divDataRight.form.btnDEL_SUB;
        	this.btnSUB_DOCUMENT = this.divData.form.divDataRight.form.btnSUB_DOCUMENT;

        	this.ccfDS_TRAFFIC_FROM = this.divData.form.divDataRight.form.ccfDS_TRAFFIC_FROM;
        	this.ccfDS_TRAFFIC_TO = this.divData.form.divDataRight.form.ccfDS_TRAFFIC_TO;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//Main
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_BUSINESS_TRIP");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	//this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	//Sub
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAB_BUSINESS_COST");
        	this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";
        	this.dxGridSub.AfterEdit = "fnGridSub_AfterEdit";	// 셀 변경 후 이벤트
        	this.dxGridSub.addEventHandler("onselectchanged", this.fnGridSub_RowCellChanged, this);


        	//상단조회조건
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";


        	//우측 detail
        	this.ccfID_SABUN_D.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN_D.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_TRAFFIC_FROM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_TRAFFIC_FROM.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_TRAFFIC_TO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_TRAFFIC_TO.AfterCDTextChanged = "fnAfterCDTextChanged";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YR_BASE", "string");
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("BUSINESS_PLACE", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("ID_PERSON", "int");
        	this.dsSelectSub.addColumn("NO_SEQ", "int");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("CD_POSITION", "string");
        	this.dsSave.addColumn("DT_BUSINESS_FROM", "string");
        	this.dsSave.addColumn("DT_BUSINESS_TO", "string");
        	this.dsSave.addColumn("FR_BUSINESS_PLACE", "string");
        	this.dsSave.addColumn("TO_BUSINESS_PLACE", "string");
        	this.dsSave.addColumn("DS_STOPOVER", "string");
        	this.dsSave.addColumn("DS_TRAFFIC_FROM", "string");
        	this.dsSave.addColumn("DS_TRAFFIC_TO", "string");
        	this.dsSave.addColumn("DS_TOTAL_TRAVEL", "string");
        	this.dsSave.addColumn("DS_PERSONAL_CAR", "string");
        	this.dsSave.addColumn("NO_CAR", "string");
        	this.dsSave.addColumn("DS_PURPOSE", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("DS_RESULT", "string");
        	this.dsSave.addColumn("DS_BUSINESS_COST", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsList.clearData();
        	this.dsListSub.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.gfnNvl(this.dsSearch.getColumn(0, "CD_CORP"),""));
        	this.dsSelect.setColumn(0, "YR_BASE", this.gfnNvl(this.dsSearch.getColumn(0, "YR_BASE"),""));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.gfnNvl(this.dsSearch.getColumn(0, "CD_DEPT"),""));
        	this.dsSelect.setColumn(0, "ID_PERSON", this.gfnNvl(this.dsSearch.getColumn(0, "ID_PERSON"),""));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.gfnNvl(this.dsSearch.getColumn(0, "ID_SABUN"),""));
        	this.dsSelect.setColumn(0, "BUSINESS_PLACE", this.gfnNvl(this.dsSearch.getColumn(0, "BUSINESS_PLACE"),""));
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);

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
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnValidCallback");
        		return false;
        	}

        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsList.setColumn(nrow, "DS_CORP", this.ccfCD_CORP.form.DSTextBox.value);


        	if(!this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)){
        		this.dsList.setColumn(nrow, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);
        		this.ccfID_SABUN_D.form.fnCodeFindLoad();
        	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var bFlag = this.fnIsModPossible();
        	if(!bFlag){
        		this.gfnAlert("수정할 수 없습니다.");
        		return;
        	}

        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();


        	//출장경비 정보 만들기
        	var strData = "";
        	var COL_SPLIT = "|";
        	var ROW_SPLIT = ";";
        	//지출일	구분	항목	금액	증빙구분	비고	주행거리

        	for (var dIdx = 0; dIdx < this.dsListSub.rowcount; dIdx++) {
        		var flag = this.gfnGetFlag(this.dsListSub, dIdx);
        		if(flag == "D") continue;
        		if(flag == "#") continue;

        		var DT_BUSINESS = this.gfnNvl(this.dsListSub.getColumn(dIdx, "DT_BUSINESS"), ""); //지출일
        		var CD_GUBUN = this.gfnNvl(this.dsListSub.getColumn(dIdx, "CD_GUBUN"), ""); //구분
        		var CD_GUBUN_INFO = this.gfnNvl(this.dsListSub.getColumn(dIdx, "CD_GUBUN_INFO"), "0"); //항목
        		var AM_BUSINESS = this.gfnNvl(this.dsListSub.getColumn(dIdx, "AM_BUSINESS"), 0); //금액
        		var CD_PROOF = this.gfnNvl(this.dsListSub.getColumn(dIdx, "CD_PROOF"), ""); //증빙구분
        		var DS_REMARK = this.gfnNvl(this.dsListSub.getColumn(dIdx, "DS_REMARK"), ""); //비고
        		var DS_MILEAGE = this.gfnNvl(this.dsListSub.getColumn(dIdx, "DS_MILEAGE"), ""); //주행거리

        		var sRowData = DT_BUSINESS + COL_SPLIT
        				+ CD_GUBUN + COL_SPLIT
        				+ CD_GUBUN_INFO + COL_SPLIT
        				+ AM_BUSINESS + COL_SPLIT
        				+ CD_PROOF + COL_SPLIT
        				+ DS_REMARK + COL_SPLIT
        				+ DS_MILEAGE
        				;
        		strData += sRowData + ROW_SPLIT;

        	}
        	strData = strData.substr(0, strData.length - 1);

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", (flag == "I" ? 0 : this.dsList.getColumn(i, "NO_SEQ")));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(i, "CD_POSITION"));
        				this.dsSave.setColumn(nrow, "DT_BUSINESS_FROM", this.dsList.getColumn(i, "DT_BUSINESS_FROM"));
        				this.dsSave.setColumn(nrow, "DT_BUSINESS_TO", this.dsList.getColumn(i, "DT_BUSINESS_TO"));
        				this.dsSave.setColumn(nrow, "FR_BUSINESS_PLACE", this.dsList.getColumn(i, "FR_BUSINESS_PLACE"));
        				this.dsSave.setColumn(nrow, "TO_BUSINESS_PLACE", this.dsList.getColumn(i, "TO_BUSINESS_PLACE"));
        				this.dsSave.setColumn(nrow, "DS_STOPOVER", this.dsList.getColumn(i, "DS_STOPOVER"));
        				this.dsSave.setColumn(nrow, "DS_TRAFFIC_FROM", this.dsList.getColumn(i, "DS_TRAFFIC_FROM"));
        				this.dsSave.setColumn(nrow, "DS_TRAFFIC_TO", this.dsList.getColumn(i, "DS_TRAFFIC_TO"));
        				this.dsSave.setColumn(nrow, "DS_TOTAL_TRAVEL", this.dsList.getColumn(i, "DS_TOTAL_TRAVEL"));
        				this.dsSave.setColumn(nrow, "DS_PERSONAL_CAR", this.dsList.getColumn(i, "DS_PERSONAL_CAR"));
        				this.dsSave.setColumn(nrow, "NO_CAR", this.dsList.getColumn(i, "NO_CAR"));
        				this.dsSave.setColumn(nrow, "DS_PURPOSE", this.dsList.getColumn(i, "DS_PURPOSE"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "DS_RESULT", this.dsList.getColumn(i, "DS_RESULT"));
        				this.dsSave.setColumn(nrow, "DS_BUSINESS_COST", (flag == "D" ? "" : strData));
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        				this.dsSave.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
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
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.dsListSub.clearData();
        	var sID_PERSON = this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON");
        	var sNO_SEQ = this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ");

        	if (this.gfnIsNull(sID_PERSON) || this.gfnIsNull(sNO_SEQ)) {
        		return false;
        	}

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "ID_PERSON", this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON"));
        	this.dsSelectSub.setColumn(0, "NO_SEQ", this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
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

        this.fnAddSub = function() {
        	var bFlag = this.fnIsModPossible();
        	if(!bFlag){
        		this.gfnAlert("수정할 수 없습니다.");
        		return;
        	}

        	this.gfnGridAdd(this.dxGridSub);

        	this.fnSetMainStatus();
        }

        this.fnDelSub = function() {
        	var bFlag = this.fnIsModPossible();
        	if(!bFlag){
        		this.gfnAlert("수정할 수 없습니다.");
        		return;
        	}

        	this.gfnGridDel(this.dxGridSub);

        	this.fnSetMainStatus();
        }
        this.fnSaveSub = function() {
        	//
        }
        this.fnExcelSub = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.ccfYR_BASE.form.TextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ccfYR_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("대상년도를 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.fnSetButton();
        		this.fnExtBtnEnable(false);
        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	if(id == "ccfCD_CORP") {
        		// 법인코드
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	else if(id == "ccfCD_DEPT") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        			this.gfnAlert("법인을 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "N");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
        	else if(id == "ccfID_SABUN") {
        		//사번
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.fnValidCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요.", "fnValidCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N"); //법인무관(Y: 법인에 관계없이 직원검색 N:조건의 법인의 임직원만 검색)
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 01 재직 02 휴직 04 퇴직 % :전체
         	}
        	else if(id == "ccfID_SABUN_D") {
        		//사번
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.fnValidCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요.", "fnValidCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N"); //법인무관(Y: 법인에 관계없이 직원검색 N:조건의 법인의 임직원만 검색)
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 01 재직 02 휴직 04 퇴직 % :전체
         	}
        	else if(id == "ccfDS_TRAFFIC_FROM") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "B2");
         	}
        	else if(id == "ccfDS_TRAFFIC_TO") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "B2");
         	}

         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능

        	if(id == "ccfCD_CORP") {
        		this.ccfID_SABUN.form.fnCodeFindClear();
        		this.edtID_PERSON.set_value("");
        	}
        	else if(id == "ccfID_SABUN") {
        		if(arr.length > 0){
        			this.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        		}else{
        			this.edtID_PERSON.set_value("");
        		}
         	}
        	else if(id == "ccfID_SABUN_D") {
        		if(arr.length > 0){
        			this.dsList.setColumn(this.dsList.rowposition, "ID_PERSON", arr[0]["ID_PERSON"]);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_DEPT", arr[0]["CD_DEPT"]);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_POSITION", arr[0]["CD_POSITION"]);
        		}else{
        			this.dsList.setColumn(this.dsList.rowposition, "ID_PERSON", "");
        			this.dsList.setColumn(this.dsList.rowposition, "CD_DEPT", "");
        			this.dsList.setColumn(this.dsList.rowposition, "CD_POSITION", "");
        		}
        	}


        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /*
         *	Main 그리드 코드파인드
         */
        this.fnGrid_RowCellChanged = function(obj,e){
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;

        		this.fnSetButton();


        		if(this.gfnIsNull(this.dsList.getColumn(e.row, "NO_GROUPWARE"))){
        			this.fnExtBtnEnable(false);
        		}else{
        			this.fnExtBtnEnable(true);
        		}
        	}
        };

        this.dsList_cancolumnchange = function(obj,e){
        	var bFlag = this.fnIsModPossible();
        	if(!bFlag){
        		this.gfnAlert("수정할 수 없습니다.");
        		return false;
        	}
        };

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val) {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }


        /*
         *	Sub 그리드 코드파인드
         */
        this.fnGridSub_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if (id == "CD_GUBUN_INFO") {
        		//항목
        		var sCD_GUBUN = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_GUBUN");
        		if(this.gfnIsNull(sCD_GUBUN)) {
        			this.gfnAlert("구분을 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "B2");
         		dsUserParam.setColumn(nrow, "CD_UPPREFIX", sCD_GUBUN); //구분
         	}
        	return true;
        }

        this.fnGridSub_AfterEdit = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		//if(e.columnid == "CODEFIND") {
        		this.fnSetMainStatus();
        		//}
        	}
        }

        this.fnGridSub_RowCellChanged = function(obj,e){
        	if(this.gfnIsNull(this.dsListSub.getColumn(e.row, "NO_GROUPWARE"))){
        		this.btnSUB_DOCUMENT.set_enable(false);
        	}else{
        		this.btnSUB_DOCUMENT.set_enable(true);
        	}
        };

        this.dsListSub_cancolumnchange = function(obj,e){
        	var bFlag = this.fnIsModPossible();
        	if(!bFlag){
        		this.gfnAlert("수정할 수 없습니다.");
        		return false;
        	}
        };


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // this.fnSearchInit = function(obj,e) {
        // 	if(e == null || (e.pretext != e.posttext)) {
        // 		this.gfnSetFormStatus(this);
        // 		this.gfnGridClear(this.dxGrid);
        // 		this.gfnGridClear(this.dxGridSub);
        // 	}
        // }
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue){
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

        this.divData_ondragmove = function(obj,e){
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e){
        	e.set_userdata("splitter");
        	return true;
        };


        this.fnSetMainStatus = function(){
        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);

        	if(flag == "I" || flag == "U" || flag == "D"){
        		; //ok
        	}else{
        		this.dsList.set_updatecontrol(false);
        		var bSuss = this.dsList.setRowType(this.dsList.rowposition, Dataset.ROWTYPE_UPDATE);
        		this.dsList.set_updatecontrol(true);
        		this.dsList.setColumn(this.dsList.rowposition, this.ucFlag, "U"); //강제 마스터수정처리
        	}
        }

        this.fnIsModPossible = function(){
        	if(this.dsList.rowcount == 0 || this.dsList.rowposition < 0) return true;

        	//출장 신청 그룹웨어값  [ DAB_BUSINESS_TRIP.NO_GROUPWARE ] 에 값이 있는 경우 우측의 경비신청& 출장경비(DAB_BUSINESS_COST)  수정 삭제 불가.
        	var sNO_GROUPWARE = this.dsList.getColumn(this.dsList.rowposition, "NO_GROUPWARE");
        	if(!this.gfnIsNull(sNO_GROUPWARE)){
        		return false;
        	}
        	return true;
        }

        this.fnDocument = function(){
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var NO_GROUPWARE = this.dsList.getColumn(this.dsList.rowposition, "NO_GROUPWARE"); //그룹웨어번호
        	var ID_SABUN = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	if(this.gfnIsNull(NO_GROUPWARE)){
        		return;
        	}

        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 처리하세요.", "");
        		return;
        	}

        	// 그룹웨어전자결재URL
        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url += "approval/legacy/goFormLink.do?mode=complete";
        	url += "&ID_USER="+ ID_SABUN; //this.AuthClient.ID_USER;
        	url += "&fiid="+NO_GROUPWARE;
        	trace("url>>", url);
        	//http://dev.gw.dsmec.co.kr/approval/legacy/goFormLink.do?mode=complete&ID_USER=ERP1&fiid=


        	window.open(url, "_blank", "width=1386,height=600,menubar=no,scrollbars=no,resizable=no,status=no");
        }

        this.fnDocument2 = function(){
        	if(!this.gfnGridIsRow(this.dxGridSub)) return;

        	var NO_GROUPWARE = this.dsList.getColumn(this.dsListSub.rowposition, "NO_GROUPWARE"); //그룹웨어번호
        	var ID_SABUN = this.dsList.getColumn(this.dsListSub.rowposition, "ID_SABUN");
        	if(this.gfnIsNull(NO_GROUPWARE)){
        		return;
        	}

        	var nICnt = this.dsListSub.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsListSub.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsListSub.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 처리하세요.", "");
        		return;
        	}

        	// 그룹웨어전자결재URL
        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url += "approval/legacy/goFormLink.do?mode=complete";
        	url += "&ID_USER="+ID_SABUN;//this.AuthClient.ID_USER;
        	url += "&fiid="+NO_GROUPWARE;
        	trace("url>>", url);
        	//http://dev.gw.dsmec.co.kr/approval/legacy/goFormLink.do?mode=complete&ID_USER=ERP1&fiid=


        	window.open(url, "_blank", "width=1386,height=600,menubar=no,scrollbars=no,resizable=no,status=no");
        }

        this.divSearch_btn00_onclick = function(obj,e)
        {
        	this.dsList.setColumn(this.dsList.rowposition, "NO_GROUPWARE", "11111");

        	//this.dsListSub.setColumn(this.dsListSub.rowposition, "NO_GROUPWARE", "11111");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.btnDEL_SUB.addEventHandler("onclick",this.fnDelSub,this);
            this.divData.form.divDataRight.form.btnADD_SUB.addEventHandler("onclick",this.fnAddSub,this);
            this.divData.form.divDataRight.form.staDS_REMARK.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.staID_SABUN2.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.sta_DT_BUSINESS.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.staFR_BUSINESS_PLACE.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.staDS_STOPOVER.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.staDS_TRAFFIC.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.staDS_TOTAL_TRAVEL.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.staDS_PERSONAL_CAR.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.staDS_PURPOSE.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.staDS_RESULT.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.staTO_BUSINESS_PLACE.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.staDS_TRAFFIC_TO.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.staDS_TRAFFIC_FROM.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.staNO_CAR.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.btnSUB_DOCUMENT.addEventHandler("onclick",this.fnDocument2,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsListSub.addEventHandler("cancolumnchange",this.dsListSub_cancolumnchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_BUSINESS_TRIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
