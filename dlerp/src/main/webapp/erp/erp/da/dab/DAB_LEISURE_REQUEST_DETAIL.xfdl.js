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
            this.set_titletext("레저시설이용 신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(930,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_PERSON\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LEISURE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"DS_R_DAYS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_R_RELATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_R_RESERVE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_R_RESERVE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_R_ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_R_ROOM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_R_ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_G_RELATION1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_G_USER1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_G_USE1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_G_TEE_OFF1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_G_INSERT1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_G_RELATION2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_G_USER2\" type=\"STRING\" size=\"256\"/><Column id=\"DT_G_USE2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_G_TEE_OFF2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_G_INSERT2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_A_SALE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_A_RESERVE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_A_USER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_A_ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_A_ROOM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_A_ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_A_DAYS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_A_RELATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_A_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_B_NUMBER1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_B_NUMBER2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_B_NUMBER3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_B_NUMBER4\" type=\"STRING\" size=\"256\"/><Column id=\"NO_B_RESERVE1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_B_RESERVE2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_B_RESERVE3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_B_RESERVE4\" type=\"STRING\" size=\"256\"/><Column id=\"TY_B_ROOM1\" type=\"STRING\" size=\"256\"/><Column id=\"TY_B_ROOM2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_B_ROOM3\" type=\"STRING\" size=\"256\"/><Column id=\"TY_B_ROOM4\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_TEAMLEADER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OFFICER\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_TEAMLEADER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TEAMLEADER\" type=\"STRING\" size=\"256\"/><Column id=\"ID_OFFICER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_OFFICER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"CT_RR_POINT\" type=\"STRING\" size=\"256\"/><Column id=\"CT_GR_POINT\" type=\"STRING\" size=\"256\"/><Column id=\"CT_GU_POINT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_COUPON1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_COUPON2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_COUPON3\" type=\"STRING\" size=\"256\"/><Column id=\"AM_COUPON4\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK4\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectPoint</Col><Col id=\"SP\">DABPR_LEISURE_POINT_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_LEISURE_REQUEST_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">comboRelation</Col><Col id=\"SP\">DAXPR_FAMILY_RELATION_COMBO</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_LEISURE_REQUEST_SAVE</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DABPR_LEISURE_REQUEST_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_LEISURE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LEISURE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DS_R_DAYS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LEISURE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_LEISURE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">휴가지원</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">직원(추천)할인</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">무주쿠폰</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_R_DAYS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">골프</Col><Col id=\"DS_CODE\">R</Col></Row><Row><Col id=\"CD_CODE\">1박</Col><Col id=\"DS_CODE\">R</Col></Row><Row><Col id=\"CD_CODE\">2박</Col><Col id=\"DS_CODE\">R</Col></Row><Row><Col id=\"CD_CODE\">3박</Col><Col id=\"DS_CODE\">R</Col></Row><Row><Col id=\"CD_CODE\">4박</Col><Col id=\"DS_CODE\">R</Col></Row><Row><Col id=\"CD_CODE\">5박</Col><Col id=\"DS_CODE\">R</Col></Row><Row><Col id=\"CD_CODE\">6박</Col><Col id=\"DS_CODE\">R</Col></Row><Row><Col id=\"CD_CODE\">7박</Col><Col id=\"DS_CODE\">R</Col></Row><Row><Col id=\"CD_CODE\">6개월</Col><Col id=\"DS_CODE\">B</Col></Row><Row><Col id=\"CD_CODE\">1년</Col><Col id=\"DS_CODE\">B</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"RESULT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListPoint", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"RESORT_ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"RESORT_ROOM_USE\" type=\"STRING\" size=\"256\"/><Column id=\"RESORT_ROOM_REST\" type=\"STRING\" size=\"256\"/><Column id=\"GOLF_ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"GOLF_ROOM_USE\" type=\"STRING\" size=\"256\"/><Column id=\"GOLF_ROOM_REST\" type=\"STRING\" size=\"256\"/><Column id=\"GOLF\" type=\"STRING\" size=\"256\"/><Column id=\"GOLF_USE\" type=\"STRING\" size=\"256\"/><Column id=\"GOLF_REST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_B_ROOM", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_RELATION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_LEISURE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("이용구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_LEISURE","staTY_LEISURE:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_LEISURE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_LEISURE","ccboTY_LEISURE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_LEISURE","staCD_LEISURE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_START_END","0.0","staTY_LEISURE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("이용시작일");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_START","staDT_START_END:0.0","staTY_LEISURE:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboDS_R_DAYS","calDT_START:0.0","staTY_LEISURE:10.0","95","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsDS_R_DAYS");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("CD_CODE");
            obj.set_readonly("true");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnLeisureRoomType","ccfCD_LEISURE:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("객실별 정보 안내");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_END","ccboDS_R_DAYS:0.0","staTY_LEISURE:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divPoint","0","divSearch:10",null,"140","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE0","0","0","610","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("0");
            obj.set_text("포인트");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staYEAR","10","staTITLE0:10","90","59",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staBg00","10","staYEAR:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("center");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staRESORT_ROOM","staYEAR:-1","staTITLE0:10","268","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("3");
            obj.set_text("리조트숙박");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staBg01","staBg00:-1","staYEAR:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staBg02","staBg01:-1","staYEAR:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staBg03","staBg02:-1","staYEAR:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staBg04","staBg03:-1","staYEAR:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staBg05","staBg04:-1","staYEAR:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staBg06","staBg05:-1","staYEAR:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staBg07","staBg06:-1","staYEAR:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staBg08","staBg07:-1","staYEAR:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staBg09","staBg08:-1","staYEAR:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staRESORT00","staYEAR:-1","staRESORT_ROOM:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("5");
            obj.set_text("생성");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staRESORT01","staRESORT00:-1","staRESORT_ROOM:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("6");
            obj.set_text("사용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staRESORT02","staRESORT01:-1","staRESORT_ROOM:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("7");
            obj.set_text("잔여");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staGOLF00","staRESORT02:-1","staRESORT_ROOM:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("8");
            obj.set_text("생성");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staGOLF_ROOM","staRESORT_ROOM:-1","staTITLE0:10","268","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("9");
            obj.set_text("골프숙박");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staGOLF","staGOLF_ROOM:-1","staTITLE0:10","268","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("10");
            obj.set_text("골프");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staGOLF01","staGOLF00:-1","staGOLF_ROOM:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("11");
            obj.set_text("사용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staGOLF02","staGOLF01:-1","staGOLF_ROOM:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("12");
            obj.set_text("잔여");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staGOLF03","staGOLF02:-1","staGOLF_ROOM:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("13");
            obj.set_text("생성");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staGOLF04","staGOLF03:-1","staGOLF_ROOM:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("14");
            obj.set_text("사용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divPoint.addChild(obj.name, obj);

            obj = new Static("staGOLF05","staGOLF04:-1","staGOLF_ROOM:-1","90","30",null,null,null,null,null,null,this.divPoint.form);
            obj.set_taborder("15");
            obj.set_text("잔여");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.divPoint.addChild(obj.name, obj);

            obj = new Div("divData","0","divPoint:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_enableevent("true");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("휴가지원");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTITLE10","5","5","80%","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_text("객실");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_enableevent("true");
            obj.set_enable("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_R_RELATION","10","staTITLE10:10","90","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("관계");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_R_RESERVE","staDS_R_RELATION:-1","staTITLE10:10","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_text("예약자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_R_RESERVE","staDS_R_RESERVE:-1","staTITLE10:10","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_text("예약번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTY_R_ROOM","staNO_R_RESERVE:-1","staTITLE10:10","300","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj.set_text("객실타입");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staCT_R_ROOM","staTY_R_ROOM:-1","staTITLE10:10","90","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("10");
            obj.set_text("객실수");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg00","10","staDS_R_RELATION:-1","90","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg01","staBg00:-1","staDS_R_RESERVE:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg02","staBg01:-1","staNO_R_RESERVE:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg03","staBg02:-1","staTY_R_ROOM:-1","300","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg04","staBg03:-1","staTY_R_ROOM:-1","90","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staTITLE11","5","staBg00:20","90%","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("9");
            obj.set_text("골프  (예약자가 본인 or 배우자가 아닐 경우 반드시 실제 예약자 이름 입력)");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_enable("true");
            obj.set_enableevent("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staNO_G","10","staTITLE11:10","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("12");
            obj.set_text("번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_G_RELATION","staNO_G:-1","staTITLE11:10","90","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("13");
            obj.set_text("관계");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_G_USER","staDS_G_RELATION:-1","staTITLE11:10","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("14");
            obj.set_text("사용자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_G_TEE_OFF","staDS_G_USER:-1","staTITLE11:10","90","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("16");
            obj.set_text("티오프시간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDS_G_INSERT","staDS_G_TEE_OFF:-1","staTITLE11:10","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("17");
            obj.set_text("예약자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_enableevent("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDT_G_USE","staDS_G_INSERT:-1","staTITLE11:10","106","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("15");
            obj.set_text("이용일자");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg05","10","staNO_G:-1","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg06","staBg05:-1","staDS_G_RELATION:-1","90","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg07","staBg06:-1","staDS_G_USER:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg08","staBg07:-1","staDS_G_TEE_OFF:-1","90","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg09","staBg08:-1","staDS_G_INSERT:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg10","staBg09:-1","staDT_G_USE:-1","106","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg11","10","staBg05:-1","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("2");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg12","staBg11:-1","staBg06:-1","90","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg13","staBg12:-1","staBg07:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg14","staBg13:-1","staBg08:-1","90","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg15","staBg14:-1","staBg09:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBg16","staBg15:-1","staBg10:-1","106","30",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("cboDS_G_RELATION1","staBg05:4","staDS_G_RELATION:4","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("34");
            obj.set_innerdataset("dsDS_RELATION");
            obj.set_datacolumn("CD_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("cboDS_G_RELATION2","staBg11:4","staBg06:4","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("35");
            obj.set_innerdataset("dsDS_RELATION");
            obj.set_datacolumn("CD_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("edtDS_G_USER1","staBg06:4","staDS_G_USER:4","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("edtDS_G_USER2","staBg12:4","staBg07:4","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("edtDS_G_TEE_OFF1","staBg07:4","staDS_G_TEE_OFF:4","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("41");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("edtDS_G_TEE_OFF2","staBg13:4","staBg08:4","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("43");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("edtDS_G_INSERT1","staBg08:4","staDS_G_INSERT:4","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("42");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("edtDS_G_INSERT2","staBg14:4","staBg09:4","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("44");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_G_USE1","staBg09:4","staDT_G_USE:4","95","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_G_USE2","staBg15:4","staBg10:4","95","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("31");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("ccfTY_R_ROOM","staBg02:4","staTY_R_ROOM:4","290","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.getSetter("CodeFindName").set("DAX_LEISURE_ROOMTYPE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("36");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("cboDS_R_RELATION","15","staDS_R_RELATION:4","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("37");
            obj.set_innerdataset("dsDS_RELATION");
            obj.set_datacolumn("CD_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("edtDS_R_RESERVE","staBg00:4","staDS_R_RESERVE:4","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_text("일이삼사오육");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Edit("edtNO_R_RESERVE","staBg01:4","staNO_R_RESERVE:4","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("39");
            obj.set_text("일이삼사오육");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Combo("cboCT_R_ROOM","staBg03:4","staCT_R_ROOM:4","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_tabData_tab1_form_cboCT_R_ROOM_innerdataset = new nexacro.NormalDataset("divData_form_tabData_tab1_form_cboCT_R_ROOM_innerdataset", obj);
            divData_form_tabData_tab1_form_cboCT_R_ROOM_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_tabData_tab1_form_cboCT_R_ROOM_innerdataset);
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("직원(추천)할인");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_A_SALE","10","10","230","25",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_tabData_tab2_form_rdoTY_A_SALE_innerdataset = new nexacro.NormalDataset("divData_form_tabData_tab2_form_rdoTY_A_SALE_innerdataset", obj);
            divData_form_tabData_tab2_form_rdoTY_A_SALE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">임직원본인할인</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">임직원추천할인</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_tabData_tab2_form_rdoTY_A_SALE_innerdataset);
            obj.set_text("임직원본인할인");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staNO_A_RESERVE","10","rdoTY_A_SALE:10","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("예약번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDS_A_USER","staNO_A_RESERVE:-1","rdoTY_A_SALE:10","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj.set_text("실사용자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDS_A_PHONE","staDS_A_USER:-1","rdoTY_A_SALE:10","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("3");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staDS_A_RELATION","staDS_A_PHONE:-1","rdoTY_A_SALE:10","90","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("4");
            obj.set_text("관계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staTY_A_ROOM","staDS_A_RELATION:-1","rdoTY_A_SALE:10","300","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("5");
            obj.set_text("객실타입");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staCT_A_ROOM","staTY_A_ROOM:-1","rdoTY_A_SALE:10","90","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("6");
            obj.set_text("객실수");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staBg16","10","staNO_A_RESERVE:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staBg17","staBg16:-1","staNO_A_RESERVE:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staBg18","staBg17:-1","staNO_A_RESERVE:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staBg19","staBg18:-1","staNO_A_RESERVE:-1","90","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staBg20","staBg19:-1","staNO_A_RESERVE:-1","300","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staBg21","staBg20:-1","staNO_A_RESERVE:-1","90","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("edtNO_A_RESERVE","15","staNO_A_RESERVE:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("12");
            obj.set_text("일이삼사오육");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("edtDS_A_USER","staBg16:5","staDS_A_USER:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("14");
            obj.set_text("일이삼사오육");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("edtDS_A_PHONE","staBg17:5","staDS_A_PHONE:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("15");
            obj.set_text("일이삼사오육");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Div("ccfTY_A_ROOM","staBg19:5","staTY_A_ROOM:5","290","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.getSetter("CodeFindName").set("DAX_LEISURE_ROOMTYPE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Combo("cboCT_A_ROOM","staBg20:5","staCT_A_ROOM:5","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_tabData_tab2_form_cboCT_A_ROOM_innerdataset = new nexacro.NormalDataset("divData_form_tabData_tab2_form_cboCT_A_ROOM_innerdataset", obj);
            divData_form_tabData_tab2_form_cboCT_A_ROOM_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_tabData_tab2_form_cboCT_A_ROOM_innerdataset);
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Edit("edtDS_A_RELATION","staDS_A_PHONE:5","staDS_A_RELATION:5","80","20",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("18");
            obj.set_text("일이삼사오육");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta00","rdoTY_A_SALE:0","10","563","30",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("19");
            obj.set_text("(제주부영호텔&리조트, 오투리조트, 마에스트로CC에 한함) ");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("무주쿠폰");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staNO_B","10","10","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj.set_text("번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staNO_B_RESERVE","staNO_B:-1","10","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("예약번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staTY_B_ROOM","staNO_B_RESERVE:-1","10","130","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("2");
            obj.set_text("객실타입");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staAM_COUPON","staTY_B_ROOM:-1","10","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("3");
            obj.set_text("판매금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staNO_B_NUMBER","staAM_COUPON:-1","10","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("4");
            obj.set_text("일련번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staDS_BANK","staNO_B_NUMBER:-1","10","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("5");
            obj.set_text("은행");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staNO_ACCOUNT","staDS_BANK:-1","10","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("6");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg22","10","staNO_B:-1","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg23","staBg22:-1","staNO_B:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg24","staBg23:-1","staNO_B:-1","130","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg25","staBg24:-1","staNO_B:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg26","staBg25:-1","staNO_B:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg27","staBg26:-1","staNO_B:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg28","staBg27:-1","staNO_B:-1","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg29","10","staBg22:-1","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("2");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg30","staBg29:-1","staBg22:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg31","staBg30:-1","staBg22:-1","130","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg32","staBg31:-1","staBg22:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg33","staBg32:-1","staBg22:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg34","staBg33:-1","staBg22:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg35","staBg34:-1","staBg22:-1","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg36","10","staBg29:-1","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("3");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg37","staBg36:-1","staBg29:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg38","staBg37:-1","staBg29:-1","130","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg39","staBg38:-1","staBg29:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg40","staBg39:-1","staBg29:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg41","staBg40:-1","staBg29:-1","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg42","staBg41:-1","staBg29:-1","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg00","10","126","60","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("4");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg01","69","126","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg02","staBg01:-1","126","130","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg03","staBg02:-1","126","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg04","staBg03:-1","126","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg05","staBg04:-1","126","110","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staBg06","staBg05:-1","126","140","30",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtNO_B_RESERVE1","staNO_B:5","staNO_B_RESERVE:4","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("35");
            obj.set_text("3198237");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Combo("cboTY_B_ROOM1","staNO_B_RESERVE:5","staTY_B_ROOM:5","120","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("36");
            obj.set_innerdataset("dsTY_B_ROOM");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Combo("cboTY_B_ROOM2","staNO_B_RESERVE:5","staBg24:5","120","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("37");
            obj.set_innerdataset("dsTY_B_ROOM");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Combo("cboTY_B_ROOM3","staNO_B_RESERVE:5","staBg31:5","120","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("38");
            obj.set_innerdataset("dsTY_B_ROOM");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Combo("cboTY_B_ROOM4","staNO_B_RESERVE:5","staBg38:5","120","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("39");
            obj.set_innerdataset("dsTY_B_ROOM");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtNO_B_RESERVE2","staNO_B:5","staBg23:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("40");
            obj.set_text("3198237");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtNO_B_RESERVE3","staNO_B:5","staBg30:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("41");
            obj.set_text("3198237");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtNO_B_RESERVE4","staNO_B:5","staBg37:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("42");
            obj.set_text("3198237");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtNO_ACCOUNT1","staDS_BANK:5","staNO_ACCOUNT:5","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_text("3198237");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtNO_ACCOUNT2","staDS_BANK:5","staBg28:5","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_text("3198237");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtNO_ACCOUNT3","staDS_BANK:5","staBg35:5","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.set_text("3198237");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtNO_ACCOUNT4","staDS_BANK:5","staBg42:5","130","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("46");
            obj.set_readonly("true");
            obj.set_text("3198237");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtNO_B_NUMBER1","staAM_COUPON:5","staNO_B_NUMBER:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("47");
            obj.set_readonly("true");
            obj.set_text("3198237");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtNO_B_NUMBER2","staAM_COUPON:5","staBg26:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.set_text("3198237");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtNO_B_NUMBER3","staAM_COUPON:5","staBg33:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.set_text("3198237");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtNO_B_NUMBER4","staAM_COUPON:5","staBg40:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("50");
            obj.set_readonly("true");
            obj.set_text("3198237");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtDS_BANK1","staNO_B_NUMBER:5","staDS_BANK:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            obj.set_text("3198237");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_COUPON1","staTY_B_ROOM:5","staAM_COUPON:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("52");
            obj.set_readonly("true");
            obj.getSetter("inputtype").set("number");
            obj.set_textAlign("right");
            obj.set_format("#,##");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtDS_BANK2","staNO_B_NUMBER:5","staBg27:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("53");
            obj.set_readonly("true");
            obj.set_text("3198237");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtDS_BANK3","staNO_B_NUMBER:5","staBg34:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_text("3198237");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Edit("edtDS_BANK4","staNO_B_NUMBER:5","staBg41:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("55");
            obj.set_readonly("true");
            obj.set_text("3198237");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_COUPON2","staTY_B_ROOM:5","staBg25:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("56");
            obj.set_readonly("true");
            obj.getSetter("inputtype").set("number");
            obj.set_textAlign("right");
            obj.set_format("#,##");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_COUPON3","staTY_B_ROOM:5","staBg32:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("57");
            obj.set_readonly("true");
            obj.getSetter("inputtype").set("number");
            obj.set_textAlign("right");
            obj.set_format("#,##");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_COUPON4","staTY_B_ROOM:5","staBg39:5","100","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.getSetter("inputtype").set("number");
            obj.set_textAlign("right");
            obj.set_format("#,##");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta01","10","edtAM_COUPON4:15","445","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("59");
            obj.set_text("■ 무주쿠폰 등록안내");
            obj.set_font("bold 12px/normal \"Dotum\"");
            obj.set_verticalAlign("middle");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta02","10","sta01:2","445","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("60");
            obj.set_text("* 부영주택/동광주택/남광/광영토건 소속자만 신청 가능합니다.");
            obj.set_font("bold 12px/normal \"Dotum\"");
            obj.set_verticalAlign("middle");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("sta03","10","sta02:2","445","20",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("61");
            obj.set_text("* 동하계골드/춘추계로얄 부영주택 소속자는 신청이 불가합니다.");
            obj.set_font("bold 12px/normal \"Dotum\"");
            obj.set_verticalAlign("middle");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccboTY_LEISURE","value","dsSearch","TY_LEISURE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_LEISURE.form.CDTextBox","value","dsSearch","CD_LEISURE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboDS_R_DAYS","value","dsSearch","DS_R_DAYS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_LEISURE.form.DSTextBox","value","dsSearch","DS_LEISURE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divPoint.form.staBg00","text","dsListPoint","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divPoint.form.staBg01","text","dsListPoint","RESORT_ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divPoint.form.staBg02","text","dsListPoint","RESORT_ROOM_USE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divPoint.form.staBg03","text","dsListPoint","RESORT_ROOM_REST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divPoint.form.staBg04","text","dsListPoint","GOLF_ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divPoint.form.staBg05","text","dsListPoint","GOLF_ROOM_USE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divPoint.form.staBg06","text","dsListPoint","GOLF_ROOM_REST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divPoint.form.staBg07","text","dsListPoint","GOLF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divPoint.form.staBg08","text","dsListPoint","GOLF_USE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divPoint.form.staBg09","text","dsListPoint","GOLF_REST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab1.form.cboDS_R_RELATION","value","dsList","DS_R_RELATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.tabData.tab1.form.edtDS_R_RESERVE","value","dsList","DS_R_RESERVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tabData.tab1.form.edtNO_R_RESERVE","value","dsList","NO_R_RESERVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tabData.tab1.form.ccfTY_R_ROOM.form.CDTextBox","value","dsList","NO_R_ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.tabData.tab1.form.ccfTY_R_ROOM.form.DSTextBox","value","dsList","TY_R_ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.tabData.tab1.form.cboCT_R_ROOM","value","dsList","CT_R_ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.tabData.tab1.form.cboDS_G_RELATION1","value","dsList","DS_G_RELATION1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.tabData.tab1.form.cboDS_G_RELATION2","value","dsList","DS_G_RELATION2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.tabData.tab1.form.ctclDT_G_USE1","value","dsList","DT_G_USE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.tabData.tab1.form.ctclDT_G_USE2","value","dsList","DT_G_USE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.tabData.tab1.form.edtDS_G_USER1","value","dsList","DS_G_USER1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tabData.tab1.form.edtDS_G_USER2","value","dsList","DS_G_USER2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tabData.tab1.form.edtDS_G_TEE_OFF1","value","dsList","DS_G_TEE_OFF1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tabData.tab1.form.edtDS_G_TEE_OFF2","value","dsList","DS_G_TEE_OFF2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.tabData.tab1.form.edtDS_G_INSERT1","value","dsList","DS_G_INSERT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.tabData.tab1.form.edtDS_G_INSERT2","value","dsList","DS_G_INSERT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.tabData.tab2.form.rdoTY_A_SALE","value","dsList","TY_A_SALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.tabData.tab2.form.edtNO_A_RESERVE","value","dsList","NO_A_RESERVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tabData.tab2.form.edtDS_A_USER","value","dsList","DS_A_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.tabData.tab2.form.ccfTY_A_ROOM.form.CDTextBox","value","dsList","NO_A_ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.tabData.tab2.form.ccfTY_A_ROOM.form.DSTextBox","value","dsList","TY_A_ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.tabData.tab2.form.cboCT_A_ROOM","value","dsList","CT_A_ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.tabData.tab2.form.edtDS_A_RELATION","value","dsList","DS_A_RELATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.tabData.tab2.form.edtDS_A_PHONE","value","dsList","DS_A_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.tabData.tab3.form.edtNO_B_RESERVE1","value","dsList","NO_B_RESERVE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.tabData.tab3.form.edtNO_B_RESERVE2","value","dsList","NO_B_RESERVE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.tabData.tab3.form.edtNO_B_RESERVE3","value","dsList","NO_B_RESERVE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.tabData.tab3.form.edtNO_B_RESERVE4","value","dsList","NO_B_RESERVE4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.tabData.tab3.form.edtNO_B_NUMBER1","value","dsList","NO_B_NUMBER1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.tabData.tab3.form.edtNO_B_NUMBER2","value","dsList","NO_B_NUMBER2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.tabData.tab3.form.edtNO_B_NUMBER3","value","dsList","NO_B_NUMBER3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.tabData.tab3.form.edtNO_B_NUMBER4","value","dsList","NO_B_NUMBER4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.tabData.tab3.form.cboTY_B_ROOM1","value","dsList","TY_B_ROOM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.tabData.tab3.form.cboTY_B_ROOM2","value","dsList","TY_B_ROOM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.tabData.tab3.form.cboTY_B_ROOM3","value","dsList","TY_B_ROOM3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.tabData.tab3.form.cboTY_B_ROOM4","value","dsList","TY_B_ROOM4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.tabData.tab3.form.edtNO_ACCOUNT1","value","dsList","NO_ACCOUNT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.tabData.tab3.form.edtNO_ACCOUNT2","value","dsList","NO_ACCOUNT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.tabData.tab3.form.edtNO_ACCOUNT3","value","dsList","NO_ACCOUNT3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.tabData.tab3.form.edtNO_ACCOUNT4","value","dsList","NO_ACCOUNT4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.tabData.tab3.form.edtDS_BANK1","value","dsList","DS_BANK1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.tabData.tab3.form.edtDS_BANK2","value","dsList","DS_BANK2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.tabData.tab3.form.edtDS_BANK3","value","dsList","DS_BANK3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.tabData.tab3.form.edtDS_BANK4","value","dsList","DS_BANK4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.tabData.tab3.form.edtAM_COUPON1","value","dsList","AM_COUPON1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.tabData.tab3.form.edtAM_COUPON2","value","dsList","AM_COUPON2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.tabData.tab3.form.edtAM_COUPON3","value","dsList","AM_COUPON3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.tabData.tab3.form.edtAM_COUPON4","value","dsList","AM_COUPON4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divSearch.form.calDT_END","value","dsList","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_LEISURE_REQUEST_DETAIL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var gIdPerson;
        var gNoSeq;
        var gTySave = "I";

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

        	this.fnSetCombo();	// 콜백에서 fnReset 호출(조회)
        	this.fnSelectPoint();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);

        	this.FormBtns.Select.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("btnPeriodSetting", "fnPeriodSetting");	// 기간설정
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_LEISURE    =	this.divSearch.form.ccfCD_LEISURE;		// 사업장
        	this.ccboTY_LEISURE	  =	this.divSearch.form.ccboTY_LEISURE;		// 레저구분(휴가지원/직원할인/무주쿠폰)
        	this.calDT_START   =	this.divSearch.form.calDT_START; 		// 이용시작일(FROM)
        	this.calDT_END   	  =	this.divSearch.form.calDT_END;			// 이용시작일(TO)
        	this.ccboDS_R_DAYS =	this.divSearch.form.ccboDS_R_DAYS;		// 박수

        	this.dxTab = this.divData.form.tabData;

        	// Tab1 휴가지원

        	this.staTITLE10 = this.dxTab.tab1.form.staTITLE10;

        	this.cboDS_R_RELATION = this.dxTab.tab1.form.cboDS_R_RELATION;
        	this.edtDS_R_RESERVE = this.dxTab.tab1.form.edtDS_R_RESERVE;
        	this.edtNO_R_RESERVE = this.dxTab.tab1.form.edtNO_R_RESERVE;
        	this.ccfTY_R_ROOM = this.dxTab.tab1.form.ccfTY_R_ROOM;
        	this.cboCT_R_ROOM = this.dxTab.tab1.form.cboCT_R_ROOM;

        	this.cboDS_G_RELATION1 = this.dxTab.tab1.form.cboDS_G_RELATION1;
        	this.cboDS_G_RELATION2 = this.dxTab.tab1.form.cboDS_G_RELATION2;
        	this.edtDS_G_USER1 = this.dxTab.tab1.form.edtDS_G_USER1;
        	this.edtDS_G_USER2 = this.dxTab.tab1.form.edtDS_G_USER2;
        	//this.ctclDT_G_USE1 = this.dxTab.tab1.form.ctclDT_G_USE1;
        	//this.ctclDT_G_USE2 = this.dxTab.tab1.form.ctclDT_G_USE2;
        	this.edtDS_G_TEE_OFF1 = this.dxTab.tab1.form.edtDS_G_TEE_OFF1;
        	this.edtDS_G_TEE_OFF2 = this.dxTab.tab1.form.edtDS_G_TEE_OFF2;
        	this.edtDS_G_INSERT1 = this.dxTab.tab1.form.edtDS_G_INSERT1;
        	this.edtDS_G_INSERT2 = this.dxTab.tab1.form.edtDS_G_INSERT2;

        	// Tab2 직원(추천)할인
        	this.rdoTY_A_SALE = this.dxTab.tab2.form.rdoTY_A_SALE;
        	this.edtNO_A_RESERVE = this.dxTab.tab2.form.edtNO_A_RESERVE;
        	this.edtDS_A_USER = this.dxTab.tab2.form.edtDS_A_USER;
        	this.edtDS_A_PHONE = this.dxTab.tab2.form.edtDS_A_PHONE;
        	this.edtDS_A_RELATION = this.dxTab.tab2.form.edtDS_A_RELATION;
        	this.ccfTY_A_ROOM = this.dxTab.tab2.form.ccfTY_A_ROOM;
        	this.cboCT_A_ROOM = this.dxTab.tab2.form.cboCT_A_ROOM;

        	// Tab3 무주쿠폰
        	this.edtNO_B_RESERVE1 = this.dxTab.tab3.form.edtNO_B_RESERVE1;
        	this.edtNO_B_RESERVE2 = this.dxTab.tab3.form.edtNO_B_RESERVE2;
        	this.edtNO_B_RESERVE3 = this.dxTab.tab3.form.edtNO_B_RESERVE3;
        	this.edtNO_B_RESERVE4 = this.dxTab.tab3.form.edtNO_B_RESERVE4;
        	this.cboTY_B_ROOM1 = this.dxTab.tab3.form.cboTY_B_ROOM1;
        	this.cboTY_B_ROOM2 = this.dxTab.tab3.form.cboTY_B_ROOM2;
        	this.cboTY_B_ROOM3 = this.dxTab.tab3.form.cboTY_B_ROOM3;
        	this.cboTY_B_ROOM4 = this.dxTab.tab3.form.cboTY_B_ROOM4;

        	//this.dxGrid = this.divData.form.tabData.tab1.form.objGrid;
        	//this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;

        	this.grSearch = this.FormInfo.GR_SEARCH;		// 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;		// 그룹코드
        	//this.dxGrid2.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_LEISURE.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_LEISURE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_LEISURE.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelectPoint = new Dataset();
        	this.dsSelectPoint.addColumn("ID_PERSON", "bigdecimal");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSelect.addColumn("ID_PERSON", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("ID_PERSON", "string");
        	this.dsSave.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave.addColumn("DT_REQUEST", "string");
        	this.dsSave.addColumn("CD_LEISURE", "string");
        	this.dsSave.addColumn("DT_START", "string");
        	this.dsSave.addColumn("DT_END", "string");
        	this.dsSave.addColumn("DS_R_DAYS", "string");
        	this.dsSave.addColumn("DS_R_RELATION", "string");
        	this.dsSave.addColumn("DS_R_RESERVE", "string");
        	this.dsSave.addColumn("NO_R_RESERVE", "string");
        	this.dsSave.addColumn("TY_R_ROOM", "string");
        	this.dsSave.addColumn("NO_R_ROOM", "bigdecimal");
        	this.dsSave.addColumn("CT_R_ROOM", "bigdecimal");
        	this.dsSave.addColumn("DS_G_RELATION1", "string");
        	this.dsSave.addColumn("DS_G_USER1", "string");
        	this.dsSave.addColumn("DT_G_USE1", "string");
        	this.dsSave.addColumn("DS_G_TEE_OFF1", "string");
        	this.dsSave.addColumn("DS_G_INSERT1", "string");
        	this.dsSave.addColumn("DS_G_RELATION2", "string");
        	this.dsSave.addColumn("DS_G_USER2", "string");
        	this.dsSave.addColumn("DT_G_USE2", "string");
        	this.dsSave.addColumn("DS_G_TEE_OFF2", "string");
        	this.dsSave.addColumn("DS_G_INSERT2", "string");
        	this.dsSave.addColumn("TY_A_SALE", "string");
        	this.dsSave.addColumn("NO_A_RESERVE", "string");
        	this.dsSave.addColumn("DS_A_USER", "string");
        	this.dsSave.addColumn("TY_A_ROOM", "string");
        	this.dsSave.addColumn("NO_A_ROOM", "bigdecimal");
        	this.dsSave.addColumn("CT_A_ROOM", "bigdecimal");
        	this.dsSave.addColumn("DS_A_DAYS", "string");
        	this.dsSave.addColumn("DS_A_RELATION", "string");
        	this.dsSave.addColumn("DS_A_PHONE", "string");
        	this.dsSave.addColumn("NO_B_NUMBER1", "string");
        	this.dsSave.addColumn("NO_B_NUMBER2", "string");
        	this.dsSave.addColumn("NO_B_NUMBER3", "string");
        	this.dsSave.addColumn("NO_B_NUMBER4", "string");
        	this.dsSave.addColumn("NO_B_RESERVE1", "string");
        	this.dsSave.addColumn("NO_B_RESERVE2", "string");
        	this.dsSave.addColumn("NO_B_RESERVE3", "string");
        	this.dsSave.addColumn("NO_B_RESERVE4", "string");
        	this.dsSave.addColumn("TY_B_ROOM1", "string");
        	this.dsSave.addColumn("TY_B_ROOM2", "string");
        	this.dsSave.addColumn("TY_B_ROOM3", "string");
        	this.dsSave.addColumn("TY_B_ROOM4", "string");
        	this.dsSave.addColumn("TY_LEISURE", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        	this.dsSave.addColumn("DT_INSERT", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("TY_SAVE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;
        	var tidx = this.divData.form.tabData.tabindex;

        	var P_ID_PERSON = this.gfnNvl(this.gIdPerson, this.getOwnerFrame().P_ID_PERSON);
        	var P_NO_SEQ = this.gfnNvl(this.gNoSeq, this.getOwnerFrame().P_NO_SEQ);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "ID_PERSON", P_ID_PERSON);
        	this.dsSelect.setColumn(0, "NO_SEQ", P_NO_SEQ);

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
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        // 포인트 조회
        this.fnSelectPoint = function() {

        	if(this.FormInfo.GR_SEARCH != "1" && this.gfnIsNull(this.AuthClient.ID_PERSON)){
        		this.gfnAlert("레저 신청 대상자가 아닙니다.");

        		this.FormBtns.Select.set_enable(false);
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.FormBtns.Reset.set_enable(false);

        		return;
        	}

        	//if (!this.fnSelectValidate()) return false;

        	//var ID_USER = this.AuthClient.ID_USER;
        	var TY_SAVE = this.gfnNvl(this.gTySave, this.getOwnerFrame().P_TY_SAVE);
        	var ID_PERSON = this.gfnNvl(this.gIdPerson, this.getOwnerFrame().P_ID_PERSON);

        	if(TY_SAVE == "I"){
        		ID_PERSON = this.AuthClient.ID_PERSON;
        	}

        	this.dsSelectPoint.clearData();
        	this.dsSelectPoint.addRow();

        	//ID_USER = "1008";	// for test
        	this.dsSelectPoint.setColumn(0, "ID_PERSON", ID_PERSON);

        	var strSvcId    = "selectPoint";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectPoint=dsSelectPoint";
        	var outData     = "dsListPoint=selectPoint0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid);
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
        this.fnSave = function() {

        	// 유효성 검사
        	if (!this.fnSaveValidate()) return false;


        	var sToday = this.gfnGetDate();
        	var TY_SAVE = this.gfnNvl(this.gTySave, this.getOwnerFrame().P_TY_SAVE);
        	var ID_PERSON = this.gfnNvl(this.gIdPerson, this.getOwnerFrame().P_ID_PERSON);
        	var NO_SEQ = this.gfnNvl(this.gNoSeq, this.getOwnerFrame().P_NO_SEQ);

        	var ID_USER = this.AuthClient.ID_USER;
        	var DT_END = this.fnGetDtEnd();	// 시작일로 1박~~~ 계산해서 받아옴
        	var DS_R_DAYS = this.dsSearch.getColumn(0, "DS_R_DAYS");	// 박수
        	var TY_LEISURE = this.dsSearch.getColumn(0, "TY_LEISURE");	// 레저구분(1휴가지원/2직원할인/3무주쿠폰)
        	var DT_START = this.dsSearch.getColumn(0, "DT_START");

        	var DT_G_USE1 = (!this.gfnIsNull(this.dsList.getColumn(0, "DS_G_USER1"))) ? DT_START : "";
        	var DT_G_USE2 = (!this.gfnIsNull(this.dsList.getColumn(0, "DS_G_USER2"))) ? DT_START : "";

        	if(TY_SAVE == "I"){
        		ID_PERSON = this.AuthClient.ID_PERSON;
        	}
        	//ID_USER = "1008";	// for test

        	this.dsResult.clearData();
        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn( nrow, "ID_PERSON", ID_PERSON);
        	this.dsSave.setColumn( nrow, "NO_SEQ", NO_SEQ);
        	this.dsSave.setColumn( nrow, "TY_SAVE", TY_SAVE);

        	this.dsSave.setColumn( nrow, "DT_REQUEST", sToday);

        	this.dsSave.setColumn( nrow, "TY_LEISURE", this.dsSearch.getColumn(0, "TY_LEISURE"));
        	this.dsSave.setColumn( nrow, "CD_LEISURE", this.dsSearch.getColumn(0, "CD_LEISURE"));
        	this.dsSave.setColumn( nrow, "DT_START", this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSave.setColumn( nrow, "DT_END", DT_END);
        	this.dsSave.setColumn( nrow, "DS_R_DAYS", DS_R_DAYS);	// 객실_박수
        	//====================================================================================
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			this.dsSave.setColumn( nrow, "DS_R_RELATION", this.dsList.getColumn(0, "DS_R_RELATION"));
        			this.dsSave.setColumn( nrow, "DS_R_RESERVE", this.dsList.getColumn(0, "DS_R_RESERVE"));
        			this.dsSave.setColumn( nrow, "NO_R_RESERVE", this.dsList.getColumn(0, "NO_R_RESERVE"));
        			this.dsSave.setColumn( nrow, "TY_R_ROOM", this.dsList.getColumn(0, "TY_R_ROOM"));
        			this.dsSave.setColumn( nrow, "NO_R_ROOM", this.dsList.getColumn(0, "NO_R_ROOM"));	// 객실_객실타입(SEQ)
        			this.dsSave.setColumn( nrow, "CT_R_ROOM", this.dsList.getColumn(0, "CT_R_ROOM"));
        			//====================================================================================
        			this.dsSave.setColumn( nrow, "DS_G_RELATION1", this.dsList.getColumn(0, "DS_G_RELATION1"));
        			this.dsSave.setColumn( nrow, "DS_G_USER1", this.dsList.getColumn(0, "DS_G_USER1"));
        			this.dsSave.setColumn( nrow, "DT_G_USE1", DT_G_USE1);
        			this.dsSave.setColumn( nrow, "DS_G_TEE_OFF1", this.dsList.getColumn(0, "DS_G_TEE_OFF1"));
        			this.dsSave.setColumn( nrow, "DS_G_INSERT1", this.dsList.getColumn(0, "DS_G_INSERT1"));
        			this.dsSave.setColumn( nrow, "DS_G_RELATION2", this.dsList.getColumn(0, "DS_G_RELATION2"));
        			this.dsSave.setColumn( nrow, "DS_G_USER2", this.dsList.getColumn(0, "DS_G_USER2"));
        			this.dsSave.setColumn( nrow, "DT_G_USE2", DT_G_USE2);
        			this.dsSave.setColumn( nrow, "DS_G_TEE_OFF2", this.dsList.getColumn(0, "DS_G_TEE_OFF2"));
        			this.dsSave.setColumn( nrow, "DS_G_INSERT2", this.dsList.getColumn(0, "DS_G_INSERT2"));

        			break;
        		case 1:
        			//====================================================================================
        			this.dsSave.setColumn( nrow, "TY_A_SALE", this.dsList.getColumn(0, "TY_A_SALE"));
        			this.dsSave.setColumn( nrow, "NO_A_RESERVE", this.dsList.getColumn(0, "NO_A_RESERVE"));
        			this.dsSave.setColumn( nrow, "DS_A_USER", this.dsList.getColumn(0, "DS_A_USER"));
        			this.dsSave.setColumn( nrow, "TY_A_ROOM", this.dsList.getColumn(0, "TY_A_ROOM"));
        			this.dsSave.setColumn( nrow, "NO_A_ROOM", this.dsList.getColumn(0, "NO_A_ROOM"));	// 객실_객실타입(SEQ)
        			this.dsSave.setColumn( nrow, "CT_A_ROOM", this.dsList.getColumn(0, "CT_A_ROOM"));
        			this.dsSave.setColumn( nrow, "DS_A_DAYS", DS_R_DAYS);
        			this.dsSave.setColumn( nrow, "DS_A_RELATION", this.dsList.getColumn(0, "DS_A_RELATION"));
        			this.dsSave.setColumn( nrow, "DS_A_PHONE", this.dsList.getColumn(0, "DS_A_PHONE"));

        			break;
        		case 2:
        			//====================================================================================
        			this.dsSave.setColumn( nrow, "NO_B_NUMBER1", this.dsList.getColumn(0, "NO_B_NUMBER1"));
        			this.dsSave.setColumn( nrow, "NO_B_NUMBER2", this.dsList.getColumn(0, "NO_B_NUMBER2"));
        			this.dsSave.setColumn( nrow, "NO_B_NUMBER3", this.dsList.getColumn(0, "NO_B_NUMBER3"));
        			this.dsSave.setColumn( nrow, "NO_B_NUMBER4", this.dsList.getColumn(0, "NO_B_NUMBER4"));
        			this.dsSave.setColumn( nrow, "NO_B_RESERVE1", this.dsList.getColumn(0, "NO_B_RESERVE1"));
        			this.dsSave.setColumn( nrow, "NO_B_RESERVE2", this.dsList.getColumn(0, "NO_B_RESERVE2"));
        			this.dsSave.setColumn( nrow, "NO_B_RESERVE3", this.dsList.getColumn(0, "NO_B_RESERVE3"));
        			this.dsSave.setColumn( nrow, "NO_B_RESERVE4", this.dsList.getColumn(0, "NO_B_RESERVE4"));
        			this.dsSave.setColumn( nrow, "TY_B_ROOM1", this.dsList.getColumn(0, "TY_B_ROOM1"));
        			this.dsSave.setColumn( nrow, "TY_B_ROOM2", this.dsList.getColumn(0, "TY_B_ROOM2"));
        			this.dsSave.setColumn( nrow, "TY_B_ROOM3", this.dsList.getColumn(0, "TY_B_ROOM3"));
        			this.dsSave.setColumn( nrow, "TY_B_ROOM4", this.dsList.getColumn(0, "TY_B_ROOM4"));

        			break;
        	}

        	this.dsSave.setColumn( nrow, "DT_INSERT", this.dsList.getColumn(0, "DT_INSERT"));
        	this.dsSave.setColumn( nrow, "ID_INSERT", this.dsList.getColumn(0, "ID_INSERT"));
        	this.dsSave.setColumn( nrow, "ID_USER", ID_USER);
        	this.dsSave.setColumn( nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);	 // 권한

        	if (this.dsSave.rowcount == 0) return;

        	trace(this.dsSave.saveXML());

        	// DABPR_LEISURE_REQUEST_SAVE
        	// DABPR_LEISURE_REQUEST_INSERT


        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave"; // "insert=dsSave";
        	var outData     = "dsResult=save0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /*
         *	초기화 버튼
         */
        this.fnReset  = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	this.dsList.clearData();
        	var nRow = this.dsList.addRow();
        	this.dsList.updatecontrol = false;
        	var bSucc = this.dsList.setRowType(0, Dataset.ROWTYPE_NORMAL);	// 1 초기 행의 상태 2추가 4수정 8삭제
        	this.dsList.setColumn(nRow, "TY_A_SALE", "1");	// RADIO 1:임직원본인할인 / 2:임직원추천할인
        	this.dsList.updatecontrol = true;

        	//지급년월(현재월)
        	//this.divSearch.form.ctclYY_TUITION.form.TextBox.set_value(this.gfnGetDate().substr(0,6));

        	var P_TY_SAVE = this.getOwnerFrame().P_TY_SAVE;
        	var P_ID_PERSON = this.getOwnerFrame().P_ID_PERSON;
        	var P_NO_SEQ = this.getOwnerFrame().P_NO_SEQ;
        	var P_TY_LEISURE = this.getOwnerFrame().P_TY_LEISURE;
        	// TY_LEISURE 레저구분(휴가지원/직원할인/무주쿠폰)

        	// 상태값 (I:등록 / U:수정,조회)
        	this.gTySave = P_TY_SAVE;
        	//this.gfnNvl(this.getOwnerFrame().arguments.Args.P_TY_LEISURE, "01");


        	this.gIdPerson = "";
        	this.gNoSeq = "";

        	// 부모창에서 받아오는 값 있으면
        	if(!this.gfnIsNull(P_NO_SEQ) && !this.gfnIsNull(P_ID_PERSON)) {
        		this.gIdPerson = P_ID_PERSON;
        		this.gNoSeq = P_NO_SEQ;

        		this.FormBtns.Select.click(true);

        	}else{
        		// 이용구분
        		this.dxTab.set_tabindex(0);
        		this.ccboTY_LEISURE.set_index(0);
        		//this.rdoTY_A_SALE.set_index(0);
        		this.fnSetReadonlyByTab(true);
        	}
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	/*
        	if(this.gfnIsNull(this.ctclYY_TUITION.form.TextBox.value)){
        		validate = false;
        		this.gfnAlert("지급년월을 입력하세요");
        		this.ctclYY_TUITION.form.TextBox.setFocus();
        	}
        	*/
        	return validate;
        };

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var strMsg = "";
        	var ID_USER = this.AuthClient.ID_USER;

        	var YN_APPROVE = this.gfnNvl(this.dsList.getColumn(0, "YN_APPROVE"), "N");			// 담당자_승인값
        	var YN_TEAMLEADER = this.gfnNvl(this.dsList.getColumn(0, "YN_TEAMLEADER"), "N");	// 부서장_승인값
        	var YN_OFFICER = this.gfnNvl(this.dsList.getColumn(0, "YN_OFFICER"), "N");			// 임원_승인값

        	if ( YN_APPROVE == "Y" || YN_TEAMLEADER == "Y" || YN_OFFICER == "Y"){
        		this.gfnAlert("승인중이거나 승인 완료된 자료는 삭제 할 수 없습니다.");
        		return;
        	}

        	var TY_LEISURE = this.dsSearch.getColumn(0, "TY_LEISURE");	// 레저구분(1휴가지원/2직원할인/3무주쿠폰)
        	var CD_LEISURE = this.dsSearch.getColumn(0, "CD_LEISURE");	// 이용사업장
        	var DS_R_DAYS = this.dsSearch.getColumn(0, "DS_R_DAYS");	// 박수
        	var DT_START = this.dsSearch.getColumn(0, "DT_START");		// 이용시작일

        	if(this.gfnIsNull(CD_LEISURE)) {
        		this.gfnAlert("이용 사업장은 반드시 입력 하셔야 합니다");
        		return false;
        	}

        	if(this.gfnIsNull(DT_START)) {
        		this.gfnAlert("이용 시작일은 반드시 입력 하셔야 합니다");
        		return false;
        	}

        	if(DT_START.substring(0,4)  < this.gfnGetDate().substring(0,4) ){
        		this.gfnAlert("이용 시작일은 당해년도(" + this.gfnGetDate().substring(0,4) + ") 이전 일자로 입력이 불가합니다");
        		return false;
        	}

        	/*
        	if(DT_START < this.gfnGetDate()){
        		this.gfnAlert("이용 시작일은 오늘 이전 일자로 입력이 불가합니다");
        		return false;
        	}
        	*/

        	var DT_END = this.fnGetDtEnd();								// 이용종료일 (시작일로 1박~~~ 계산해서 받아옴)
        	var nDateRange = this.gfnGetDiffDate(DT_START, DT_END);		// 두 일자간의 차이 일수 계산
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			// 휴가지원----------------------------------------------------------------------------------------------------------------
        			var DS_R_RELATION = this.dsList.getColumn(0, "DS_R_RELATION");	// 휴가지원_관계
        			var DS_R_RESERVE = this.dsList.getColumn(0, "DS_R_RESERVE");	// 휴가지원_예약자
        			var NO_R_RESERVE = this.dsList.getColumn(0, "NO_R_RESERVE");	// 휴가지원_예약번호
        			var TY_R_ROOM = this.dsList.getColumn(0, "TY_R_ROOM");			// 휴가지원_객실타입
        			var CT_R_ROOM = this.dsList.getColumn(0, "CT_R_ROOM");			// 휴가지원_객실수

        			/*
        			if( (!this.gfnIsNull(NO_R_RESERVE) && this.gfnIsNull(TY_R_ROOM)) || (this.gfnIsNull(NO_R_RESERVE) && !this.gfnIsNull(TY_R_ROOM)) ||
        				(this.gfnIsNull(NO_R_RESERVE) && !this.gfnIsNull(DS_R_RESERVE)) || (!this.gfnIsNull(NO_R_RESERVE) && this.gfnIsNull(DS_R_RESERVE))	){
        				strMsg += "객실이용내역 입력이 완료되지 않았습니다.\n";
        			}
        			*/

        			if( (!this.gfnIsNull(DS_R_RELATION) || !this.gfnIsNull(DS_R_RESERVE) || !this.gfnIsNull(NO_R_RESERVE) || !this.gfnIsNull(TY_R_ROOM) || !this.gfnIsNull(CT_R_ROOM)) &&
        				(this.gfnIsNull(DS_R_RELATION) || this.gfnIsNull(DS_R_RESERVE) || this.gfnIsNull(NO_R_RESERVE) || this.gfnIsNull(TY_R_ROOM) || this.gfnIsNull(CT_R_ROOM)) ) {
        				strMsg += "객실이용내역 입력이 완료되지 않았습니다.\n";
        			}


        			/*  [OO]레저사업장구분
        					10:제주부영호텔리조트 / 20:무주덕유산리조트 / 30:오투리조트 /40:제주부영CC
        					50:순천부영CC / 60:나주부영CC / 70:더클래식CC / 80:마에스트로CC / 90:바디스타
        			*/
        			if ( (CD_LEISURE == "40" || CD_LEISURE == "50" || CD_LEISURE == "60" || CD_LEISURE == "80") && nDateRange > 5 && !this.gfnIsNull(TY_R_ROOM)){
        				strMsg += "골프사업장 객실이용은 최대 5일을 초과할 수 없습니다.\n";
        			}

        			if ( CD_LEISURE == "20" && nDateRange > 4 && !this.gfnIsNull(TY_R_ROOM)){
        				strMsg += "무주덕유산리조트 휴가할인지원은 한번에 최대 4박(성수기2박)까지 신청 가능합니다.\n";
        			}

        			var DS_G_RELATION1 = this.dsList.getColumn(0, "DS_G_RELATION1");// 골프_관계1
        			var DS_G_USER1 = this.dsList.getColumn(0, "DS_G_USER1");		// 골프_사용자1
        			//var DT_G_USE1 = this.dsList.getColumn(0, "DT_G_USE1");			// 골프_이용일자1
        			var DT_G_USE1 = (!this.gfnIsNull(this.dsList.getColumn(0, "DS_G_USER1"))) ? DT_START : "";
        			var DS_G_TEE_OFF1 = this.dsList.getColumn(0, "DS_G_TEE_OFF1");	// 골프_티오프시간1
        			var DS_G_INSERT1 = this.dsList.getColumn(0, "DS_G_INSERT1");	// 골프_예약자1

        			var DS_G_RELATION2 = this.dsList.getColumn(0, "DS_G_RELATION2");// 골프_관계2
        			var DS_G_USER2 = this.dsList.getColumn(0, "DS_G_USER2");		// 골프_사용자2
        			//var DT_G_USE2 = this.dsList.getColumn(0, "DT_G_USE2");			// 골프_이용일자2
        			var DT_G_USE2 = (!this.gfnIsNull(this.dsList.getColumn(0, "DS_G_USER2"))) ? DT_START : "";
        			var DS_G_TEE_OFF2 = this.dsList.getColumn(0, "DS_G_TEE_OFF2");	// 골프_티오프시간2
        			var DS_G_INSERT2 = this.dsList.getColumn(0, "DS_G_INSERT2");	// 골프_예약자2

        			if( (!this.gfnIsNull(DS_G_RELATION1) || !this.gfnIsNull(DS_G_USER1) || !this.gfnIsNull(DT_G_USE1) || !this.gfnIsNull(DS_G_INSERT1) || !this.gfnIsNull(DS_G_TEE_OFF1)) &&
        				(this.gfnIsNull(DS_G_RELATION1) || this.gfnIsNull(DS_G_USER1) || this.gfnIsNull(DT_G_USE1) || this.gfnIsNull(DS_G_INSERT1) || this.gfnIsNull(DS_G_TEE_OFF1)) ) {
        				strMsg += "골프이용내역 1번 라인의 입력이 완료되지 않았습니다.\n";
        			}

        			if( (!this.gfnIsNull(DS_G_RELATION2) || !this.gfnIsNull(DS_G_USER2) || !this.gfnIsNull(DT_G_USE2) || !this.gfnIsNull(DS_G_INSERT2) || !this.gfnIsNull(DS_G_TEE_OFF2)) &&
        				(this.gfnIsNull(DS_G_RELATION2) || this.gfnIsNull(DS_G_USER2) || this.gfnIsNull(DT_G_USE2) || this.gfnIsNull(DS_G_INSERT2) || this.gfnIsNull(DS_G_TEE_OFF2)) ) {
        				strMsg += "골프이용내역 2번 라인의 입력이 완료되지 않았습니다.\n";
        			}

        			/*
        			if( (!this.gfnIsNull(DT_G_USE1) && DT_G_USE1 != DT_START) || ( !this.gfnIsNull(DT_G_USE2) && DT_G_USE2 != DT_START) ){
        				strMsg += "골프 이용일자는 상단 입력한 이용기간 내에만 가능합니다.\n";
        			}

        			if( !this.gfnIsNull(DT_G_USE1) && !this.gfnIsNull(DT_G_USE2) && DT_G_USE1 != DT_G_USE2 ){
        				strMsg += "2건의 골프 이용시 이용일자는 2건이 동일하여야 합니다.\n";
        			}
        			*/

        			if( CD_LEISURE == "10" && ( !this.gfnIsNull(DS_G_USER1) || !this.gfnIsNull(DT_G_USE1) || !this.gfnIsNull(DS_G_USER2) || !this.gfnIsNull(DT_G_USE2)) ){
        				strMsg += "제주부영호텔리조트는 골프이용이 불가합니다.\n";
        			}

        			break;

        		case 1:
        			// 추천할인 ----------------------------------------------------------------------------------------------------------------

        			var TY_A_SALE = this.dsList.getColumn(0, "TY_A_SALE");	// 1:임직원본인할인 / 2:임직원추천할인
        			var NO_A_RESERVE = this.dsList.getColumn(0, "NO_A_RESERVE");	// 추천_예약번호
        			var DS_A_USER = this.dsList.getColumn(0, "DS_A_USER");			// 추천_실사용자
        			var DS_A_PHONE = this.dsList.getColumn(0, "DS_A_PHONE");		// 추천_연락처
        			var DS_A_RELATION = this.dsList.getColumn(0, "DS_A_RELATION");	// 추천_관계
        			var TY_A_ROOM = this.dsList.getColumn(0, "TY_A_ROOM");			// 추천_객실타입
        			var CT_A_ROOM = this.dsList.getColumn(0, "CT_A_ROOM");			// 추천_객실수
        			/*  [OO]레저사업장구분
        					10:제주부영호텔리조트 / 20:무주덕유산리조트 / 30:오투리조트 /40:제주부영CC
        					50:순천부영CC / 60:나주부영CC / 70:더클래식CC / 80:마에스트로CC / 90:바디스타
        			*/
        			if ( TY_A_SALE == "2" && (CD_LEISURE == "20" || CD_LEISURE == "40" || CD_LEISURE == "50" || CD_LEISURE == "60" )){
        				strMsg += "[임직원 추천 할인]은 제주부영호텔리조트, 오투리조트, 마에스트로CC만 가능합니다.\n";
        			}

        			if ( TY_A_SALE == "2" && this.gfnIsNull(DS_A_USER)){
        				strMsg += "[임직원 추천 할인]은 실사용자 입력이 필수 사항입니다.\n";
        			}

        			if ( (!this.gfnIsNull(TY_A_SALE) || !this.gfnIsNull(NO_A_RESERVE) || !this.gfnIsNull(DS_A_PHONE) || !this.gfnIsNull(DS_A_RELATION) || !this.gfnIsNull(TY_A_ROOM) || !this.gfnIsNull(CT_A_ROOM)) &&
        				 (this.gfnIsNull(TY_A_SALE) || this.gfnIsNull(NO_A_RESERVE) || this.gfnIsNull(DS_A_PHONE) || this.gfnIsNull(DS_A_RELATION) || this.gfnIsNull(TY_A_ROOM) || this.gfnIsNull(CT_A_ROOM)) ){
        				strMsg += "직원(추천)할인 입력이 완료되지 않았습니다.\n";
        			}

        			break;
        		case 2:

        			// 무주쿠폰 ----------------------------------------------------------------------------------------------------------------
        			var nReserveCnt = 0;
        			var NO_B_RESERVE1 = this.dsList.getColumn(0, "NO_B_RESERVE1");	// 무주_예약번호1
        			var NO_B_RESERVE2 = this.dsList.getColumn(0, "NO_B_RESERVE2");	// 무주_예약번호2
        			var NO_B_RESERVE3 = this.dsList.getColumn(0, "NO_B_RESERVE3");	// 무주_예약번호3
        			var NO_B_RESERVE4 = this.dsList.getColumn(0, "NO_B_RESERVE4");	// 무주_예약번호4
        			var TY_B_ROOM1 = this.dsList.getColumn(0, "TY_B_ROOM1");	// 무주_객실타입1
        			var TY_B_ROOM2 = this.dsList.getColumn(0, "TY_B_ROOM2");	// 무주_객실타입2
        			var TY_B_ROOM3 = this.dsList.getColumn(0, "TY_B_ROOM3");	// 무주_객실타입3
        			var TY_B_ROOM4 = this.dsList.getColumn(0, "TY_B_ROOM4");	// 무주_객실타입4

        			if( (!this.gfnIsNull(NO_B_RESERVE1) || !this.gfnIsNull(TY_B_ROOM1)) && (this.gfnIsNull(NO_B_RESERVE1) || this.gfnIsNull(TY_B_ROOM1)) ) {
        				strMsg += "무주쿠폰 1번 라인의 입력이 완료되지 않았습니다.\n";
        			}

        			if( (!this.gfnIsNull(NO_B_RESERVE2) || !this.gfnIsNull(TY_B_ROOM2)) && (this.gfnIsNull(NO_B_RESERVE2) || this.gfnIsNull(TY_B_ROOM2)) ) {
        				strMsg += "무주쿠폰 2번 라인의 입력이 완료되지 않았습니다.\n";
        			}

        			if( (!this.gfnIsNull(NO_B_RESERVE3) || !this.gfnIsNull(TY_B_ROOM3)) && (this.gfnIsNull(NO_B_RESERVE3) || this.gfnIsNull(TY_B_ROOM3)) ) {
        				strMsg += "무주쿠폰 3번 라인의 입력이 완료되지 않았습니다.\n";
        			}

        			if( (!this.gfnIsNull(NO_B_RESERVE4) || !this.gfnIsNull(TY_B_ROOM4)) && (this.gfnIsNull(NO_B_RESERVE4) || this.gfnIsNull(TY_B_ROOM4)) ) {
        				strMsg += "무주쿠폰 4번 라인의 입력이 완료되지 않았습니다.\n";
        			}

        			if( !this.gfnIsNull(NO_B_RESERVE1) || !this.gfnIsNull(TY_B_ROOM1)) nReserveCnt++;
        			if( !this.gfnIsNull(NO_B_RESERVE2) || !this.gfnIsNull(TY_B_ROOM2)) nReserveCnt++;
        			if( !this.gfnIsNull(NO_B_RESERVE3) || !this.gfnIsNull(TY_B_ROOM3)) nReserveCnt++;
        			if( !this.gfnIsNull(NO_B_RESERVE4) || !this.gfnIsNull(TY_B_ROOM4)) nReserveCnt++;

        			//예약번호 1개만 입력시 1박으로 수정되어 저장됨 -> 박수와 예약번호 수량 불일치시 저장 안되도
        			if(DS_R_DAYS == "5박" || DS_R_DAYS == "6박" || DS_R_DAYS == "7박" || DS_R_DAYS == "골프"){
        				strMsg += "무주쿠폰 이용 박수는 1박~4박 입력 가능합니다..\n";
        			}

        			if(nReserveCnt != DS_R_DAYS.substr(0,1)){
        				strMsg += "무주쿠폰 이용 박수와 예약번호 수량이 일치하지 않습니다.\n";
        			}

        			break;
        		case 3:
        			break;
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "selectPoint") {
        	}

        	if (svcID == "select") {
        		var TY_LEISURE = this.dsList.getColumn(0, "TY_LEISURE");
        		var CD_LEISURE = this.dsList.getColumn(0, "CD_LEISURE");
        		var DS_G_USER1 = this.dsList.getColumn(0, "DS_G_USER1");
        		var DS_G_USER2 = this.dsList.getColumn(0, "DS_G_USER2");
        		var DS_R_DAYS = this.dsList.getColumn(0, "DS_R_DAYS");
        		var DS_A_DAYS = this.dsList.getColumn(0, "DS_A_DAYS");

        		var DS_LEISURE = this.dsList.getColumn(0, "DS_LEISURE");
        		var DT_START = this.dsList.getColumn(0, "DT_START");
        		var NO_A_RESERVE = this.dsList.getColumn(0, "NO_A_RESERVE");

        		var NO_B_RESERVE1 = this.dsList.getColumn(0, "NO_B_RESERVE1");	// 무주_예약번호1
        		var NO_B_RESERVE2 = this.dsList.getColumn(0, "NO_B_RESERVE2");	// 무주_예약번호2
        		var NO_B_RESERVE3 = this.dsList.getColumn(0, "NO_B_RESERVE3");	// 무주_예약번호3
        		var NO_B_RESERVE4 = this.dsList.getColumn(0, "NO_B_RESERVE4");	// 무주_예약번호4

        		if(TY_LEISURE == "1"){	// 휴가지원
        			if(!this.gfnIsNull(DS_G_USER1) || !this.gfnIsNull(DS_G_USER1)){
        				DS_R_DAYS = "골프";
        			}
        		}

        		if(TY_LEISURE == "2" && !this.gfnIsNull(NO_A_RESERVE)){	// 직원(추천)할인
        			DS_R_DAYS = DS_A_DAYS;
        		}

        		if(TY_LEISURE == "3"){	// 무주쿠폰
        			var CT_DAYS = 0;
        			 if(!this.gfnIsNull(NO_B_RESERVE1))	CT_DAYS++;
        			 if(!this.gfnIsNull(NO_B_RESERVE2))	CT_DAYS++;
        			 if(!this.gfnIsNull(NO_B_RESERVE3))	CT_DAYS++;
        			 if(!this.gfnIsNull(NO_B_RESERVE4))	CT_DAYS++;
        			if(CT_DAYS > 0){
        				DS_R_DAYS = CT_DAYS + "박";
        			}
        		}

        		this.dsSearch.setColumn( 0, "CD_LEISURE", CD_LEISURE);
        		this.dsSearch.setColumn( 0, "DS_LEISURE", DS_LEISURE);
        		this.dsSearch.setColumn( 0, "TY_LEISURE", TY_LEISURE);
        		this.dsSearch.setColumn( 0, "DS_R_DAYS", DS_R_DAYS);

        		// DataSet 에서 이벤트가 발생하지 않도록 설정합니다.
        		this.dsSearch.set_enableevent(false);

        		this.dsSearch.setColumn( 0, "DT_START", DT_START);	// 검색조건 변경하면 dsList에 자동셋팅

        		// DataSet 에서 이벤트가 발생하도록 설정합니다.
        		this.dsSearch.set_enableevent(true);

        		if(DS_LEISURE == "바디스타")	this.dxTab.set_visible(false);	// 텝숨기기
        		// this.dxTab.set_tabindex(0);

        		// 검색조건 비활성화
        		var TY_APPROVE = this.gfnNvl(this.dsList.getColumn(0, "TY_APPROVE"), "N");	// 승인상태(N:결재중 , Y:승인완료)
        		var benable = (TY_APPROVE == "Y") ?  true : false;
        		this.fnSetReadonlySearch(benable);
        		//this.dxTab.set_enable(!benable);
        	}

        	if (svcID == "combo") {
        		// 초기 셋팅 ID_PERSON, NO_SEQ 값있으면 조회
        		this.fnReset();
        	}

        	if(svcID == "insert" || svcID == "save"){
        		if (errorCode == 0) {
        			var RESULT_MSG = this.dsResult.getColumn( 0, "RESULT_MSG");
        			var NO_SEQ = this.dsResult.getColumn( 0, "NO_SEQ");
        			var ID_PERSON = this.dsResult.getColumn( 0, "ID_PERSON");

        			if(!this.gfnIsNull(RESULT_MSG)){
        				this.gfnAlert(RESULT_MSG);
        			}else{
        				this.getParentContext().close(true);
        			}
        			/*
        			else{
        				this.gfnAlert("작업이 완료되었습니다.");
        			}
        			*/

        			/*
        			// 작업완료 재조회
        			this.gIdPerson = ID_PERSON;
        			this.gNoSeq = NO_SEQ;
        			this.gTySave = "U";

        			this.FormBtns.Select.click();
        			this.fnSelectPoint();
        			*/



        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        	this.fnSetButton();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//trace("코드파인드 id:"+id);
        	switch(id) {
        		case "ccfCD_LEISURE":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "OO");

        			var CD_LEISURE = this.dsSearch.getColumn(0, "CD_LEISURE");
        			var DS_LEISURE = this.dsSearch.getColumn(0, "DS_LEISURE");
        			if((!this.gfnIsNull(CD_LEISURE) && this.gfnIsUpdatedRow(this.dsList, 0)) || this.gTySave == "U" ){
        				   var rtnConfirm = confirm("저장되지 않은 정보가 있습니다.\n 계속하시겠습니까?");
        				   return this.fnBeforeCDTextChanged(rtnConfirm);
        			}else{
        				return true;
        			}

        			break;

        		case "ccfTY_R_ROOM":
        		case "ccfTY_A_ROOM":
        			var CD_LEISURE = this.dsSearch.getColumn(0, "CD_LEISURE");
        			if (this.gfnIsNull(this.gfnTrim(CD_LEISURE))) {
        				this.gfnAlert("이용사업장을 먼저 선택하세요");
        				return;
        			}
        			var TY_GUBUN = "A";	// 휴가지원
        			if(id == "ccfTY_A_ROOM"){
        				TY_GUBUN = "B";	// 직원추천
        			}
        			// DAXPR_LEISURE_ROOMTYPE_CODEFIND
        			dsUserParam.setColumn(nrow, "TY_GUBUN", TY_GUBUN);	// 객실구분(A:본인할인, B:직원소개추천)
        			dsUserParam.setColumn(nrow, "CD_LEISURE", CD_LEISURE);

        			return true;

        			break;

        		default:
        	}

        	//return true;
        };

        this.fnBeforeCDTextChanged = function(val) {
        	var CD_LEISURE = this.dsSearch.getColumn(0, "CD_LEISURE");
        	var DS_LEISURE = this.dsSearch.getColumn(0, "DS_LEISURE");
        	if(val){
        		this.dsList.clearData();
        		var nRow = this.dsList.addRow();
        		this.dsList.updatecontrol = false;
        		this.dsList.setColumn(nRow, "TY_A_SALE", "1");	// RADIO 1:임직원본인할인 / 2:임직원추천할인
        		var bSucc = this.dsList.setRowType(0, Dataset.ROWTYPE_NORMAL);	// 1 초기 행의 상태 2추가 4수정 8삭제
        		this.dsList.updatecontrol = true;
        		return true;

        	}else{
        		if(DS_LEISURE == "바디스타"){
        			this.dxTab.set_visible(true);
        		}

        		if(this.gTySave == "U"  && !this.gfnIsNull(this.gNoSeq) && !this.gfnIsNull(this.gIdPerson)) {
        			this.FormBtns.Select.click(true);
        		}

        		return false;
        		//this.divData.form.tabData.set_enableevent(false);
        		//this.divData.form.tabData.set_tabindex(e.preindex);
        		//this.divData.form.tabData.set_enableevent(true);
        	}
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	switch(id){
        		case "ccfCD_LEISURE" :
        			var CD_LEISURE = this.dsSearch.getColumn(0, "CD_LEISURE");
        			var DS_LEISURE = this.dsSearch.getColumn(0, "DS_LEISURE");
        			var TY_LEISURE = this.dsSearch.getColumn(0, "TY_LEISURE");

        			// 객실_박수 셋팅 (골프, 1박, 2박, 3박, 4박, 5박, 6박, 7박,6개월, 1년 /  - 6개월, 1년 )
        			this.fnSetCboDsDays();

        			var bVisible = true;
        			if(DS_LEISURE == "바디스타"){
        				bVisible = false;
        				this.FormBtns.Save.set_enable(true);
        			}else{
        				this.FormBtns.Save.set_enable(false);
        			}

        			this.dxTab.set_visible(bVisible);

        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	//trace('grid_코드파인드_식별id: ' + id);

        	switch(id) {
        		case "ID_SABUN":     // 사번,부서,법인	ID_SABUN	DAX_CFBASEINFO
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        		break;

        		case "CD_CONTACT":	//관계코드(FA)	CD_CONTACT	DAX_CFCOMMONCODE_FA
        			 dsUserParam.setColumn(nrow, "CD_PREFIX", 'FA'); // 관계코드
        		break;

        		default:
        	}
        	return true;

        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		//this.gfnSetFormStatus(this);
        		//this.gfnGridClear(this.dxGrid2);
        	}
        };

        this.fnSetCombo = function() {

        	// 관계
        	this.dsCombo1 = new Dataset();
        	this.dsCombo1.addColumn("TY_SEL", "string");
        	//this.dsCombo1.addColumn("ID_USER", "string");
        	this.dsCombo1.addColumn("ID_PERSON", "bigdecimal");
        	this.dsCombo1.addColumn("DS_HNAME", "string");
        	var ID_USER = this.AuthClient.ID_USER;
        	var ID_PERSON = this.AuthClient.ID_PERSON;

        	//ID_USER = "1008";	// for test

        	this.dsCombo1.clearData();
        	this.dsCombo1.addRow();

        	this.dsCombo1.setColumn(0, "TY_SEL", "A");
        	this.dsCombo1.setColumn(0, "ID_PERSON", ID_PERSON);
        	this.dsCombo1.setColumn(0, "DS_HNAME", this.AuthClient.DS_HNAME);

        	// [OC]무주쿠폰구분
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
        	this.dsCombo.addColumn("CD_PREFIX", "string");
        	this.dsCombo.addColumn("CD_UPPREFIX", "string");

        	this.dsCombo.clearData();
        	this.dsCombo.addRow();

        	this.dsCombo.setColumn(0, "TY_SEL", "P");
        	this.dsCombo.setColumn(0, "CD_PREFIX", "OC");
        	this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "comboRelation=dsCombo1 combo=dsCombo";
        	var outData     = "dsDS_RELATION=comboRelation0 dsTY_B_ROOM=combo0";

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

        // 이용시작 종료일
        this.fnGetDtEnd = function(){
        	var DT_END = this.dsSearch.getColumn(0, "DT_START");		// 이용종료일
        	var DT_START = this.dsSearch.getColumn(0, "DT_START");		// 이용시작일
        	var DS_R_DAYS = this.dsSearch.getColumn(0, "DS_R_DAYS");	// 객실_박수
        	var TY_LEISURE = this.dsSearch.getColumn(0, "TY_LEISURE");	// 레저구분(1휴가지원/2직원할인/3무주쿠폰)
        	var CD_LEISURE = this.dsSearch.getColumn(0, "CD_LEISURE");
        	var DS_LEISURE = this.dsSearch.getColumn(0, "DS_LEISURE");

        	/*  [OO]레저사업장구분
        		10:제주부영호텔리조트 / 20:무주덕유산리조트 / 30:오투리조트 /40:제주부영CC
        		50:순천부영CC / 60:나주부영CC / 70:더클래식CC / 80:마에스트로CC / 90:바디스타
        	*/

        	if(this.gfnIsNull(CD_LEISURE)) {
        		this.gfnAlert("이용 사업장은 반드시 입력 하셔야 합니다");
        		return;
        	}

        	if(this.gfnIsNull(DT_START)) {
        		this.gfnAlert("이용 시작일은 반드시 입력 하셔야 합니다");
        		return;
        	}

        	if(!this.gfnIsNull(DS_R_DAYS) && !this.gfnIsNull(DT_START)) {
        		if(DS_LEISURE == "바디스타"){
        			// 입력된 월에 OffSet 으로 지정된 만큼의 월을 더함
        			var nOffSet = (DS_R_DAYS == "6개월") ? 6 : 12;
        			DT_END = this.gfnAddMonth(DT_START, nOffSet);
        			return DT_END;
        		}

        		if(DS_R_DAYS != "골프"){

        			var nOffSet = 0;
        			var pattern = /[^(0-9)]/gi;   // 숫자이외는 제거
        			if(pattern.test(DS_R_DAYS)){
        				nOffSet = DS_R_DAYS.replace(pattern,"");
        			}
        			// 입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 더함
        			DT_END = this.gfnAddDate(DT_START, nOffSet);
        		}
        	}

        	return DT_END;
        }

        // 기간설정
        this.fnPeriodSetting = function(obj,e) {
        	// TODO 기간설정 기능 추가
        	//if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};
        	//param.NO_ACCOUNT = this.dsList0.getColumn(this.dsList0.rowposition,"NO_ACCOUNT");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_TUITION_PERIOD", "", param, this.getOffsetWidth(), this.getOffsetHeight());
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {

        	//trace("dsSearch_onvaluechanged" + "   e.columnid->" + e.columnid
        	//+ "   e.oldvalue->" + e.oldvalue 	+ "   e.newvalue->" + e.newvalue);

        		var tidx = this.divData.form.tabData.tabindex;
        		if( e.columnid == "TY_LEISURE" ){
        			// 이용구분- 1:휴가지원 / 2:직원(추천)할인 / 3:무주쿠폰
        			var CD_LEISURE = this.dsSearch.getColumn(0, "CD_LEISURE");
        			var TY_APPROVE = this.gfnNvl(this.dsList.getColumn(0, "TY_APPROVE"), "N");	// 승인상태(N:결재중 , Y:승인완료)
        			var nIndex = (e.newvalue == "1") ? 0 :  ((e.newvalue == "2") ? 1 : 2);
        			this.dxTab.set_tabindex(nIndex);
        			if(e.newvalue == "3"){	// 무주쿠폰
        				 // [OO]레저사업장구분 20:무주덕유산리조트
        				if(CD_LEISURE != "20" && TY_APPROVE != "Y"){
        					if( this.gfnIsUpdatedRow(this.dsList, 0) == false){
        						this.ccfCD_LEISURE.form.CDTextBox.set_value("20");
        						this.ccfCD_LEISURE.form.CDTextBox_onchanged();
        					}
        				}
        				// 사업장 변경불가
        				this.ccfCD_LEISURE.set_enable(false);
        			}else{
        				// 사업장 변경불가
        				bReadOnly = (TY_APPROVE == "Y") ?  false : true;
        				this.ccfCD_LEISURE.set_enable(bReadOnly);
        			}

        			// 객실_박수 셋팅 (골프, 1박, 2박, 3박, 4박, 5박, 6박, 7박,6개월, 1년 /  - 6개월, 1년 )
        			this.fnSetCboDsDays();
        		}

        		if( e.columnid == "DT_START" ){
        			if(this.gTySave == "U" ){
        				this.dsList.setColumn( 0, "DT_START",  e.newvalue);	// 검색조건 변경하면 dsList에 자동셋팅
        			}
        		}

        		if( e.columnid == "DS_R_DAYS" ){
        			var DS_LEISURE = this.dsSearch.getColumn(0, "DS_LEISURE");
        			var CD_LEISURE = this.dsSearch.getColumn(0, "CD_LEISURE");
        			if(DS_LEISURE == "바디스타" ) return;

        			this.fnSetReadonlyByTab(true);
        		}
        		//this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.fnSetButton();
        	}
        };

        this.fnSetReadonlyByTab = function(bReadOnly){
        	var nTabIdx = this.divData.form.tabData.tabindex;

        	var TY_APPROVE = this.gfnNvl(this.dsList.getColumn(0, "TY_APPROVE"), "N");	// 승인상태(N:결재중 , Y:승인완료)
        	bReadOnly = (TY_APPROVE == "Y") ?  true : false;

        	//trace("[fnSetReadonlyByTab] " + "nTabIdx->" + nTabIdx + " \n bReadOnly->" + bReadOnly);

        	if(nTabIdx == 0){
        		this.fnSetReadonlyResort(bReadOnly);
        		this.fnSetReadonlyGolf(bReadOnly);
        	}

        	if(nTabIdx == 1){
        		this.rdoTY_A_SALE.set_readonly(bReadOnly);
        		this.edtNO_A_RESERVE.set_readonly(bReadOnly);
        		this.edtDS_A_USER.set_readonly(bReadOnly);
        		this.edtDS_A_PHONE.set_readonly(bReadOnly);
        		this.edtDS_A_RELATION.set_readonly(bReadOnly);
        		this.ccfTY_A_ROOM.set_enable(!bReadOnly);
        		this.cboCT_A_ROOM.set_readonly(bReadOnly);
        	}

        	if(nTabIdx == 2){
        		// 무주쿠폰은 수정안됨
        		var NO_B_RESERVE1 = this.dsList.getColumn(0, "NO_B_RESERVE1");	// 무주_예약번호1
        		var NO_B_RESERVE2 = this.dsList.getColumn(0, "NO_B_RESERVE2");	// 무주_예약번호2
        		var NO_B_RESERVE3 = this.dsList.getColumn(0, "NO_B_RESERVE3");	// 무주_예약번호3
        		var NO_B_RESERVE4 = this.dsList.getColumn(0, "NO_B_RESERVE4");	// 무주_예약번호4
        		var bExist = (!this.gfnIsNull(NO_B_RESERVE1) || !this.gfnIsNull(NO_B_RESERVE2) || !this.gfnIsNull(NO_B_RESERVE3) || !this.gfnIsNull(NO_B_RESERVE4));
        		bReadOnly = (TY_APPROVE == "Y" || (this.gTySave == "U" && bExist) ) ? true : false;

        		this.edtNO_B_RESERVE1.set_readonly(bReadOnly);
        		this.edtNO_B_RESERVE2.set_readonly(bReadOnly);
        		this.edtNO_B_RESERVE3.set_readonly(bReadOnly);
        		this.edtNO_B_RESERVE4.set_readonly(bReadOnly);
        		this.cboTY_B_ROOM1.set_readonly(bReadOnly);
        		this.cboTY_B_ROOM2.set_readonly(bReadOnly);
        		this.cboTY_B_ROOM3.set_readonly(bReadOnly);
        		this.cboTY_B_ROOM4.set_readonly(bReadOnly);
        	}
        }

        // Tab 1 휴가지원 비/활성화 (객실이용내역)
        this.fnSetReadonlyResort = function(bReadOnly){
        	var TY_APPROVE = this.gfnNvl(this.dsList.getColumn(0, "TY_APPROVE"), "N");	// 승인상태(N:결재중 , Y:승인완료)
        	var DS_R_DAYS = this.dsSearch.getColumn(0, "DS_R_DAYS");
        	if(TY_APPROVE == "N" && !this.gfnIsNull(DS_R_DAYS)) {
        		bReadOnly = (DS_R_DAYS == "골프") ? true : false;
        	}

        	this.cboDS_R_RELATION.set_readonly(bReadOnly);
        	//this.edtDS_R_RESERVE.set_readonly(bReadOnly);	// 관계 콤보에서 선택해서 입력
        	this.edtNO_R_RESERVE.set_readonly(bReadOnly);
        	this.ccfTY_R_ROOM.set_enable(!bReadOnly);
        	this.cboCT_R_ROOM.set_readonly(bReadOnly);
        }

        // Tab 1  휴가지원 비/활성화 (골프이용내역)
        this.fnSetReadonlyGolf = function(bReadOnly){
        	var TY_APPROVE = this.gfnNvl(this.dsList.getColumn(0, "TY_APPROVE"), "N");	// 승인상태(N:결재중 , Y:승인완료)
        	var DS_R_DAYS = this.dsSearch.getColumn(0, "DS_R_DAYS");
        	if(TY_APPROVE == "N" && !this.gfnIsNull(DS_R_DAYS)) {
        		bReadOnly = (DS_R_DAYS == "골프") ? false : true;
        	}

        	this.cboDS_G_RELATION1.set_readonly(bReadOnly);
        	this.cboDS_G_RELATION2.set_readonly(bReadOnly);
        	//this.edtDS_G_USER1.set_readonly(bReadOnly);	// 관계 콤보에서 선택해서 입력
        	//this.edtDS_G_USER2.set_readonly(bReadOnly);	// 관계 콤보에서 선택해서 입력
        	//this.ctclDT_G_USE1.set_readonly(bReadOnly);	// 검색조건 이용시작일 사용함
        	//this.ctclDT_G_USE2.set_readonly(bReadOnly);
        	this.edtDS_G_TEE_OFF1.set_readonly(bReadOnly);
        	this.edtDS_G_TEE_OFF2.set_readonly(bReadOnly);
        	this.edtDS_G_INSERT1.set_readonly(bReadOnly);
        	this.edtDS_G_INSERT2.set_readonly(bReadOnly);
        }

        // 검색조건 비활성화
        this.fnSetReadonlySearch = function(bReadOnly){
        	this.ccfCD_LEISURE.set_enable(!bReadOnly);
        	this.ccboTY_LEISURE.set_readonly(bReadOnly);
        	this.calDT_START.set_readonly(bReadOnly);
        	this.calDT_END.set_readonly(bReadOnly);
        	this.ccboDS_R_DAYS.set_readonly(bReadOnly);

        	var TY_LEISURE = this.dsSearch.getColumn(0, "TY_LEISURE");
        	if(TY_LEISURE == "3"){	//무주쿠폰
        		this.ccfCD_LEISURE.set_enable(false);
        	}
        }

        // 객실_박수 셋팅 (골프, 1박, 2박, 3박, 4박, 5박, 6박, 7박,6개월, 1년 /  - 6개월, 1년 )
        this.fnSetCboDsDays = function(){
        	var CD_LEISURE = this.dsSearch.getColumn(0, "CD_LEISURE");
        	var DS_LEISURE = this.dsSearch.getColumn(0, "DS_LEISURE");
        	var TY_LEISURE = this.dsSearch.getColumn(0, "TY_LEISURE");

        	//trace("객실_박수 셋팅 TY_LEISURE->" + TY_LEISURE+ "   CD_LEISURE->" + CD_LEISURE);

        	this.ccboDS_R_DAYS.set_readonly(true);
        	this.ccboDS_R_DAYS.set_index(-1);

        	var bVisible = true;
        	if (!this.gfnIsNull(this.gfnTrim(CD_LEISURE))) {

        		var strFilterExpr = (DS_LEISURE == "바디스타") ? "B" : "R";	// (R:리조트 G골프 B바디스타)
        		//trace("CD_LEISURE->" + CD_LEISURE+ " \n DS_LEISURE->" + DS_LEISURE+ " \n strFilterExpr->" + strFilterExpr);
        		this.dsDS_R_DAYS.filter("");
        		this.dsDS_R_DAYS.filter("DS_CODE == '" + strFilterExpr + "'");

        		// 객실_박수 (골프, 1박, 2박, 3박, 4박, 5박, 6박, 7박,6개월, 1년 /  - 6개월, 1년 )
        		var TY_APPROVE = this.gfnNvl(this.dsList.getColumn(0, "TY_APPROVE"), "N");	// 승인상태(N:결재중 , Y:승인완료)
        		var bReadOnly = (TY_APPROVE == "Y") ?  true : false;
        		this.ccboDS_R_DAYS.set_readonly(bReadOnly);
        		/*
        		if(TY_LEISURE != "1" && CD_LEISURE != "90"){	// 20:무주덕유산리조트 1무주쿠폰
        			this.ccboDS_R_DAYS.set_index(1);	// 1박
        		}else{
        			this.ccboDS_R_DAYS.set_index(0);
        		}
        		*/
        		if(CD_LEISURE == "90"){	// 바디스타
        			this.ccboDS_R_DAYS.set_index(0);
        		}else{
        			this.ccboDS_R_DAYS.set_index(1);
        		}
        	}
        }

        this.divData_tabData_onchanged = function(obj,e)
        {
        	//trace("텝 변경 divData_tabData_onchanged->" + e.postindex);
        	// 탭 변경시 조회처리시
         	if(e.preindex != e.postindex) {

        		this.dxTab = this.divData.form.tabData;
        		var tabIdx = this.dxTab.tabindex;
        		if(this.gfnIsUpdatedRow(this.dsList, 0)){
        			this.fnDsUpdateCallback = function(id, val){
        				if(val){
        					this.dsList.clearData();
        					var nRow = this.dsList.addRow();
        					this.dsList.updatecontrol = false;
        					this.dsList.setColumn(nRow, "TY_A_SALE", "1");	// RADIO 1:임직원본인할인 / 2:임직원추천할인
        					var bSucc = this.dsList.setRowType(0, Dataset.ROWTYPE_NORMAL);	// 1 초기 행의 상태 2추가 4수정 8삭제
        					this.dsList.updatecontrol = true;
        				}else{
        					this.divData.form.tabData.set_enableevent(false);
        					this.divData.form.tabData.set_tabindex(e.preindex);
        					this.divData.form.tabData.set_enableevent(true);

        					var TY_LEISURE = (e.preindex == 0) ? "1" : (e.preindex == 1) ? "2" : "3";
        					this.dsSearch.setColumn(0, "TY_LEISURE", TY_LEISURE );
        					this.fnSetReadonlyByTab(true);
        				}
        			}
        			this.gfnConfirm("저장되지 않은 정보가 있습니다.\n 계속하시겠습니까?","fnDsUpdateCallback");
        		}

        		// 이용구분- 1:휴가지원 / 2:직원(추천)할인 / 3:무주쿠폰
        		var TY_LEISURE = (e.postindex == 0) ? "1" : (e.postindex == 1) ? "2" : "3";
        		this.dsSearch.setColumn(0, "TY_LEISURE", TY_LEISURE );

        		this.fnSetReadonlyByTab(true);
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {

        		var nRowType = obj.getRowType(e.row);
        		var status = this.gfnGetFormStatus(this);
        		if( nRowType == Dataset.ROWTYPE_INSERT || nRowType == Dataset.ROWTYPE_UPDATE || nRowType == Dataset.ROWTYPE_DELETE ){
        			this.FormBtns.Save.set_enable(true);
        		} else if( nRowType == Dataset.ROWTYPE_NORMAL ){
        			this.FormBtns.Save.set_enable(false);
        		}

        		// 텝1 - 관계
        		if (e.columnid == "DS_R_RELATION" || e.columnid == "DS_G_RELATION1" || e.columnid == "DS_G_RELATION2") {
        			var DS_R_RESERVE = this.dsDS_RELATION.lookup( "CD_CODE", e.newvalue, "DS_CODE" );
        			var sColNm = "DS_R_RESERVE";
        			if(e.columnid == "DS_G_RELATION1"){
        				sColNm = "DS_G_USER1";
        			}
        			if(e.columnid == "DS_G_RELATION2"){
        				sColNm = "DS_G_USER2";
        			}

        			if (!this.gfnIsNull(this.gfnTrim(DS_R_RESERVE))) {
        				this.dsList.setColumn(0, sColNm, DS_R_RESERVE);
        			}else{
        				this.gfnAlert("가족관계 배우자 정보가 등록된 경우에만 이용 가능합니다.");
        				this.dsList.setColumn(0, sColNm, "");
        			}
        		}
        	}
        	this.fnSetButton();
        };

        // 객실별 정보 안내 팝업
        this.divSearch_btnLeisureRoomType_onclick = function(obj,e)
        {
        	param={};
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LEISURE_ROOMTYPE_DLG", "", param);
        };

        // 조회조건 골프로 변경 시 데이터 초기화
        this.divSearch_ccboDS_R_DAYS_canitemchange = function(obj,e)
        {
        	if(e.prevalue != e.postvalue){

        	//trace( " prevalue->" + e.prevalue	+ "\n postvalue->" + e.postvalue);

        		if(!this.gfnIsNull(e.prevalue) && !this.gfnIsNull(e.postvalue)){
        			var CD_LEISURE = this.dsSearch.getColumn(0, "CD_LEISURE");
        			var DS_LEISURE = this.dsSearch.getColumn(0, "DS_LEISURE");

        			if(this.gTySave == "U"){
        				this.dsList.setColumn( 0, "DS_R_DAYS",  e.postvalue);	// 검색조건 변경하면 dsList에 자동셋팅
        			}

        			if(e.prevalue == "골프" || e.postvalue == "골프"){

        				var tidx = this.divData.form.tabData.tabindex;
        				if(tidx != 0 && e.postvalue == "골프"){	// 휴가지원
        					return false;
        				}


        				if( (!this.gfnIsNull(CD_LEISURE) && (this.gfnIsUpdatedRow(this.dsList, 0)) || this.gTySave == "U") ){	//
        					var rtnConfirm = confirm("저장되지 않은 정보가 있습니다.\n 계속하시겠습니까?");
        					return this.fnBeforeCDTextChanged(rtnConfirm);
        				}
        			}
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboTY_LEISURE.addEventHandler("onitemchanged",this.divSearch_ccboTY_LEISURE_onitemchanged,this);
            this.divSearch.form.staCD_LEISURE.addEventHandler("onclick",this.divSearch_staCD_POSITION_onclick,this);
            this.divSearch.form.ccboDS_R_DAYS.addEventHandler("canitemchange",this.divSearch_ccboDS_R_DAYS_canitemchange,this);
            this.divSearch.form.btnLeisureRoomType.addEventHandler("onclick",this.divSearch_btnLeisureRoomType_onclick,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.addEventHandler("canchange",this.divData_tabData_canchange,this);
            this.divData.form.tabData.tab2.form.rdoTY_A_SALE.addEventHandler("onitemchanged",this.divData_tabData_tab2_rdo00_onitemchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_LEISURE_REQUEST_DETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
