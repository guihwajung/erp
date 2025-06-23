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
            this.getSetter("maxheight").set("700");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM01\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM02\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM03\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM04\" type=\"STRING\" size=\"256\"/><Column id=\"BTNAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"BTNREJECT\" type=\"STRING\" size=\"256\"/><Column id=\"BTNLINES\" type=\"STRING\" size=\"256\"/><Column id=\"BTNISSUE\" type=\"STRING\" size=\"256\"/><Column id=\"BTNCANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTNFILE\" type=\"STRING\" size=\"256\"/><Column id=\"BTNDE\" type=\"STRING\" size=\"256\"/><Column id=\"BTNRE\" type=\"STRING\" size=\"256\"/><Column id=\"BTNAC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">init</Col><Col id=\"SP\">DZRPR_APPROVAL_INIT</Col></Row><Row><Col id=\"TARGET\">selectmaster</Col><Col id=\"SP\">DZRPR_APPROVAL_MASTER_SELECT</Col></Row><Row><Col id=\"TARGET\">savemaster</Col><Col id=\"SP\">DZRPR_APPROVAL_MASTER_SAVE</Col></Row><Row><Col id=\"TARGET\">line1</Col><Col id=\"SP\">DZRPR_APPROVAL_LINE_SELECT</Col></Row><Row><Col id=\"TARGET\">line2</Col><Col id=\"SP\">DZRPR_APPROVAL_LINE_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DZRPR_APPROVAL_EXECUTE</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_FAMILYEVENT_APP_SELECT</Col></Row><Row><Col id=\"TARGET\">saveBas</Col><Col id=\"SP\">DABPR_FAMILYEVENT_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DABPR_FAMILYEVENT_COMBO</Col></Row></Rows>");
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


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HANDPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GROUPJOIN\" type=\"STRING\" size=\"256\"/><Column id=\"YM_GROUPJOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EVENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EVENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FAMILY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FAM_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TY_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WREATH\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FAMILYEVENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"FR_VACATION\" type=\"STRING\" size=\"256\"/><Column id=\"TO_VACATION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_EVENT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_FAMILY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_AMOUNT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\"/></Row><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">없음</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">현금</Col></Row><Row><Col id=\"CD_CODE\">G</Col><Col id=\"DS_CODE\">상품권</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_WREATH", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\"/></Row><Row><Col id=\"DS_CODE\">화환</Col><Col id=\"CD_CODE\">화환</Col></Row><Row><Col id=\"DS_CODE\">조화</Col><Col id=\"CD_CODE\">조화</Col></Row><Row><Col id=\"DS_CODE\">꽃다발</Col><Col id=\"CD_CODE\">꽃다발</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData1","0","0",null,"700","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

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
            obj.set_readonly("true");
            obj.set_border("0px none");
            obj.set_background("#ffffff");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta01:-1","150","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Div("divDataInfo","0","divDataMaster:10",null,"490","0",null,null,null,null,null,this.divData1.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divData1.addChild(obj.name, obj);

            obj = new Static("sta04","149","29","455","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta05","0","29","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("1");
            obj.set_text("소속부서 ");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta06","603","29","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("2");
            obj.set_text("직      급 ");
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
            obj.set_text("성      명 ");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta03","149","87","455","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta08","0","87","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("7");
            obj.set_text("입사일자 ");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","44.50%","22",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("9");
            obj.set_text("신청자");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtDS_ORG","154","34","445","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtDS_POSITION","757","34",null,"20","5",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta01","752","58",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtDS_HANDPHONE","757","63",null,"20","5",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta13","603","58","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("14");
            obj.set_text("연 락 처 ");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta14","752","87",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtYM_GROUPJOIN","757","92",null,"20","5",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta15","603","87","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("17");
            obj.set_text("근속기간 ");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta09","149","159",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta10","0","159","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("19");
            obj.set_text("경 조 일 자 ");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","130","44.50%","22",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("20");
            obj.set_text("경조신청");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta11","752","188",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta12","603","188","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("22");
            obj.set_text("경               조");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta16","149","188","455","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta17","0","188","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("24");
            obj.set_text("구         분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Calendar("tclDT_EVENT","154","164","105","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_visible("true");
            obj.set_readonly("false");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Calendar("tclDT_GROUPJOIN","154","92","105","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtDS_HNAME","154","63","445","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Combo("cboCD_GUBUN","154","193","200","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("27");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_GUBUN");
            obj.set_readonly("false");
            obj.set_text("00");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Combo("cboCD_EVENT","757","193","200","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("28");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_EVENT");
            obj.set_readonly("false");
            obj.set_text("00");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta18","752","217",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta19","603","217","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("30");
            obj.set_text("대   상   자   명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta20","149","217","455","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Combo("cboCD_FAMILY","154","222","200","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("32");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_FAMILY");
            obj.set_readonly("false");
            obj.set_text("00");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta21","0","217","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("33");
            obj.set_text("대상자와의 관계");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta22","752","246",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Combo("cboDS_WREATH","757","251","200","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("35");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsDS_WREATH");
            obj.set_readonly("false");
            obj.set_text("00");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta23","603","246","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("36");
            obj.set_text("화   환   여   부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta24","149","246","455","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Combo("cboTY_AMOUNT","154","251","200","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("38");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_AMOUNT");
            obj.set_readonly("false");
            obj.set_text("00");
            obj.set_value("");
            obj.set_index("0");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta25","0","246","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("39");
            obj.set_text("경 조 금  구 분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta26","149","275",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta27","0","275","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("41");
            obj.set_text("경     조     금  ");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_FAMILYEVENT","154","280","200","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("42");
            obj.set_format("#,###");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta28","149","304",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta29","0","304","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("44");
            obj.set_text("경   조   장   소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtDS_PLACE","154","309",null,"20","5",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("45");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta30","149","333",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtDS_REASON","154","338",null,"20","5",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("47");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta31","0","333","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("48");
            obj.set_text("경   조   사   유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta32","149","362",null,"30","0",null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta33","0","362","150","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("50");
            obj.set_text("경   조   휴   가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staDT_GONGSA_range00","264","367","10","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("51");
            obj.set_text("~");
            obj.set_textDecoration("none");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Calendar("tclTO_VACATION","279","367","105","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Calendar("tclFR_VACATION","154","367","105","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("53");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("txtDS_FAM_HNAME","757","222","200","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("54");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta34","440","400","321","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("55");
            obj.set_text("위 신청자는 상기 경조사유로 인하여 경조금을 신청합니다.");
            obj.set_textDecoration("none");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta35","362","430","477","40",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("56");
            obj.set_text("※ 회갑 / 고희/ 자녀돌 등 준비서류 : 관계를 확인할 수 있는 증빙서류(가족관계증명서)\r\n   출산 등 제출서류 : 출산확인서 혹은 출산증빙서류(주민등록등본)");
            obj.set_textDecoration("none");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);
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

            obj = new BindItem("item13","divData1.form.divDataInfo.form.tclDT_EVENT","value","dsList","DT_EVENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData1.form.divDataMaster.form.txtDS_ETITLE","value","dsListMaster","DS_ETITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData1.form.divDataInfo.form.txtDS_ORG","value","dsList","DS_ORG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData1.form.divDataInfo.form.txtDS_POSITION","value","dsList","DS_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData1.form.divDataInfo.form.txtDS_HANDPHONE","value","dsList","DS_HANDPHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData1.form.divDataInfo.form.txtYM_GROUPJOIN","value","dsList","YM_GROUPJOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData1.form.divDataInfo.form.tclDT_GROUPJOIN","value","dsList","DT_GROUPJOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData1.form.divDataInfo.form.txtDS_HNAME","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData1.form.divDataInfo.form.cboCD_GUBUN","value","dsList","CD_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData1.form.divDataInfo.form.cboCD_EVENT","value","dsList","CD_EVENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData1.form.divDataInfo.form.cboCD_FAMILY","value","dsList","CD_FAMILY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData1.form.divDataInfo.form.cboDS_WREATH","value","dsList","DS_WREATH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData1.form.divDataInfo.form.cboTY_AMOUNT","value","dsList","TY_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData1.form.divDataInfo.form.txtAM_FAMILYEVENT","value","dsList","AM_FAMILYEVENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData1.form.divDataInfo.form.txtDS_PLACE","value","dsList","DS_PLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData1.form.divDataInfo.form.txtDS_REASON","value","dsList","DS_REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData1.form.divDataInfo.form.tclTO_VACATION","value","dsList","TO_VACATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData1.form.divDataInfo.form.tclFR_VACATION","value","dsList","FR_VACATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData1.form.divDataInfo.form.txtDS_FAM_HNAME","value","dsList","DS_FAM_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAB_FAMILYEVENT_APP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.ID_AP_TYPE = "DA05";	//	경조금신청
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
        	this.fnSetComboGubun();

        	// 기본 버튼(입력,저장 등..) 숨김처리
        	this.divTopBtn.form.fnSetVisibleButton(false);

        	this.dsSearch.setColumn(0, "V1", this.gfnIsNull(this.getOwnerFrame().V1) ? "" : this.getOwnerFrame().V1); // ID_PERSON
        	this.dsSearch.setColumn(0, "V2", this.gfnIsNull(this.getOwnerFrame().V2) ? "" : this.getOwnerFrame().V2); // NO_SEQ
        	this.dsSearch.setColumn(0, "V3", this.gfnIsNull(this.getOwnerFrame().V3) ? "" : this.getOwnerFrame().V3); // CD_CORP
        	this.dsSearch.setColumn(0, "V4", this.gfnIsNull(this.getOwnerFrame().V4) ? "" : this.getOwnerFrame().V4); // ID_SABUN
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
        	this.btn12 = this.gfnFormButtonAdd("btn12", "fnPnt");	//출력

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

        	//this.dxGrid = this.divData1.form.objGrid;
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
        	//this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAG_WORKDAY_PLAN_APP");

        	//가로 스크롤이 생기지 않게 세팅
        	//this.dxGrid.set_scrollbartype("none default");

        	//그리드 헤더 색상 변경
        	/*
        	this.dxGrid.set_enableredraw(false);
        	for(var i = 0; i < this.dxGrid.getCellCount("head"); i++) {
         		this.dxGrid.setCellProperty("head",i,"background","#EDECEF");
         		this.dxGrid.setCellProperty("head",i,"color","#4b5055");
        		this.dxGrid.setCellProperty("head",i,"border","none, 1px solid #C4C2CD, 1px solid #C4C2CD, none");
        	}
        	this.dxGrid.set_enableredraw(true);
        	*/

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
        	this.dsExec.addColumn("DS_NOTE", "string");
        	this.dsExec.addColumn("ID_USER", "string");

        	this.dsSaveMaster = new Dataset();
        	this.dsSaveMaster.addColumn("ID_AP", "string");
        	this.dsSaveMaster.addColumn("DS_ETITLE", "string");
        	this.dsSaveMaster.addColumn("ID_USER", "string");

        	/*************************************************************************************************
        	* 결재본분 관련 Parameter
        	**************************************************************************************************/
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("NO_SEQ", "int");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("GW_IP", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSaveBas = new Dataset();
        	this.dsSaveBas.addColumn("TY_SAVE", "string");
        	this.dsSaveBas.addColumn("ID_PERSON", "int");
        	this.dsSaveBas.addColumn("NO_SEQ", "int");
        	this.dsSaveBas.addColumn("CD_CORP", "string");
        	this.dsSaveBas.addColumn("ID_SABUN", "string");
        	this.dsSaveBas.addColumn("DT_EVENT", "string");
        	this.dsSaveBas.addColumn("CD_GUBUN", "string");
        	this.dsSaveBas.addColumn("CD_EVENT", "string");
        	this.dsSaveBas.addColumn("CD_FAMILY", "string");
        	this.dsSaveBas.addColumn("DS_FAM_HNAME", "string");
        	this.dsSaveBas.addColumn("YN_WREATH", "string");
        	this.dsSaveBas.addColumn("DS_WREATH", "string");
        	this.dsSaveBas.addColumn("TY_AMOUNT", "string");
        	this.dsSaveBas.addColumn("AM_FAMILYEVENT", "bigdecimal");
        	this.dsSaveBas.addColumn("FR_VACATION", "string");
        	this.dsSaveBas.addColumn("TO_VACATION", "string");
        	this.dsSaveBas.addColumn("DS_REASON", "string");
        	this.dsSaveBas.addColumn("DS_PLACE", "string");
        	this.dsSaveBas.addColumn("DS_FILE", "string");
        	this.dsSaveBas.addColumn("DS_FILE_PATH", "string");
        	this.dsSaveBas.addColumn("DS_REMARK", "string");
        	this.dsSaveBas.addColumn("ID_USER", "string");
        	this.dsSaveBas.addColumn("GR_SEARCH", "string");
        	this.dsSaveBas.addColumn("GR_CORP", "string");
        	this.dsSaveBas.addColumn("GW_IP", "string");

        	this.dsCombo = new Dataset();
            this.dsCombo.addColumn("CD_PREFIX", "string");
            this.dsCombo.addColumn("CD_GUBUN", "string");
            this.dsCombo.addColumn("CD_EVENT", "string");
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

        	this.dsSelect.setColumn(0, "ID_PERSON", this.dsListMaster.getColumn(0, "V_PARAM01"));
        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsListMaster.getColumn(0, "V_PARAM02"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsListMaster.getColumn(0, "V_PARAM03"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsListMaster.getColumn(0, "V_PARAM04"));
        	this.dsSelect.setColumn(0, "GW_IP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "select=dsSelect";	// select1=dsSelect1
         	var outData     = "dsList=select0";		// dsList1=select10
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
        this.fnSave = function() {
        	this.fnExec("01");	//상신

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
        			//this.btn6.set_enable(this.dsListMaster.getColumn(0, "BTNFILE") == "Y");
        			this.btn7.set_enable(this.dsListMaster.getColumn(0, "BTNRE") == "Y");
        			this.btn8.set_enable(this.dsListMaster.getColumn(0, "BTNAC") == "Y");
        			this.btn9.set_enable(this.dsListMaster.getColumn(0, "BTNDE") == "Y");
        			this.btn10.set_enable(this.dsListMaster.getColumn(0, "BTNLINES") == "Y");
        			this.btn11.set_enable(this.dsListMaster.getColumn(0, "BTNSAVE") == "Y");

        			// 상태값이 00 이면 제목 활성화
        			//if (this.dsListMaster.getColumn(0, "ST_APPR") == "00")
        			//	this.txtDS_ETITLE.set_readonly(false);
        			//else
        			//	this.txtDS_ETITLE.set_readonly(true);


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
        			this.FlagGb = "";	// 저장 플래그값 초기화

        			if(status == "00"){			// 임시저장
        				this.fnExec(status);
        			}else if(status == "01"){	// 상신
        				this.fnSaveMaster(status);	// 마스터저장
        			}

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
        			else if (status == "00") {
        				// 임시저장후에는 fnExe() 실행 후에 아무것도 않한다(재조회 하지않는다)
         			}
        			else {
        				this.fnSelectMaster();
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "select") {

        		if (errorCode == 0) {
        			//if(this.dsList.rowcount < 1){
        			// 등록된 사용자라면 무조건 1건 조회된다
        			if(this.gfnIsNull(this.dsList.getColumn(0, "CD_GUBUN"))){	// 구분은 필수값이기때문에 구분값이 null이면 insert다
        				this.FlagGb = "I";
        				//this.dsList.addRow();
        			}else{
        				this.FlagGb = "";

        				// 싱금폼 입력 가능 처리
        				var cdApproval = this.dsList.getColumn(0, "CD_APPROVAL");
        				if (cdApproval == "01" || cdApproval == "02" || cdApproval == "03"){
        				//if (cdApproval == "01" || cdApproval == "02"){
        					this.divData1.form.divDataInfo.set_enable(false);
        					//this.txtDS_ETITLE.set_readonly(true);
        				}else{
        					this.divData1.form.divDataInfo.set_enable(true);
        					//this.txtDS_ETITLE.set_readonly(false);

        					//this.fnSetEnable();
        				}
        				// 경조 콤보 조회 후 조회된 값을 선택하기위함
        				this.fnSetComboEventSel();	// 경조콤보(조회후 호출용) 조회


        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "comboG") {	// 구분콤보
        		this.dsCD_GUBUN.insertRow(0);
        		this.dsCD_GUBUN.setColumn(0, "CD_CODE", "");
        		this.dsCD_GUBUN.setColumn(0, "DS_CODE", "");
        		this.divData1.form.divDataInfo.form.cboCD_GUBUN.set_index(0);	// 빈값 선택

        		this.fnSetEnable();
        	}
        	else if(svcID == "comboE") {	// 경조콤보
        		this.dsCD_EVENT.insertRow(0);
        		this.dsCD_EVENT.setColumn(0, "CD_CODE", "");
        		this.dsCD_EVENT.setColumn(0, "DS_CODE", "");
        		this.divData1.form.divDataInfo.form.cboCD_EVENT.set_index(0);	// 빈값 선택

        		this.fnSetEnable();
        	}
        	else if(svcID == "comboF") {	// 대상자와의 관계 콤보
        		this.dsCD_FAMILY.insertRow(0);
        		this.dsCD_FAMILY.setColumn(0, "CD_CODE", "");
        		this.dsCD_FAMILY.setColumn(0, "DS_CODE", "");
        		this.divData1.form.divDataInfo.form.cboCD_FAMILY.set_index(0);	// 빈값 선택

        		this.fnSetEnable();
        	}
        	else if(svcID == "comboEsel") {	// 경조콤보(조회후 호출용)
        		this.dsCD_EVENT.insertRow(0);
        		this.dsCD_EVENT.setColumn(0, "CD_CODE", "");
        		this.dsCD_EVENT.setColumn(0, "DS_CODE", "");

        		this.dsList.setColumn(0, "CD_EVENT", this.dsList.getColumn(0, "CD_EVENT"));	// 조회해온값 선택

        		this.fnSetComboFamilySel();		// 대상자와의 관계 콤보(조회후 호출용) 조회

        		this.fnSetEnable();
        	}
        	else if(svcID == "comboFsel") {	// 대상자와의 관계 콤보(조회후 호출용)
        		this.dsCD_FAMILY.insertRow(0);
        		this.dsCD_FAMILY.setColumn(0, "CD_CODE", "");
        		this.dsCD_FAMILY.setColumn(0, "DS_CODE", "");

        		this.dsList.setColumn(0, "CD_FAMILY", this.dsList.getColumn(0, "CD_FAMILY"));	// 조회해온값 선택

        		this.fnSetEnable();
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

        	if (!this.fnSaveVali()) return false;

        	this.dsSaveBas.clearData();
        	this.dsSaveBas.addRow();

        	this.dsSaveBas.setColumn(0, "TY_SAVE", this.FlagGb);
        	this.dsSaveBas.setColumn(0, "ID_PERSON", (this.FlagGb == "I" ? this.dsListMaster.getColumn(0, "V_PARAM01") : this.dsList.getColumn(0, "ID_PERSON")));
        	this.dsSaveBas.setColumn(0, "NO_SEQ", (this.FlagGb == "I" ? this.dsListMaster.getColumn(0, "V_PARAM02") : this.dsList.getColumn(0, "NO_SEQ")));
        	this.dsSaveBas.setColumn(0, "CD_CORP", (this.FlagGb == "I" ? this.dsListMaster.getColumn(0, "V_PARAM03") : this.dsList.getColumn(0, "CD_CORP")));
        	this.dsSaveBas.setColumn(0, "ID_SABUN", (this.FlagGb == "I" ? this.dsListMaster.getColumn(0, "V_PARAM04") : this.dsList.getColumn(0, "ID_SABUN")));
        	this.dsSaveBas.setColumn(0, "DT_EVENT", this.dsList.getColumn(0, "DT_EVENT"));
        	this.dsSaveBas.setColumn(0, "CD_GUBUN", this.dsList.getColumn(0, "CD_GUBUN"));
        	this.dsSaveBas.setColumn(0, "CD_EVENT", this.dsList.getColumn(0, "CD_EVENT"));
        	this.dsSaveBas.setColumn(0, "CD_FAMILY", this.dsList.getColumn(0, "CD_FAMILY"));
        	this.dsSaveBas.setColumn(0, "DS_FAM_HNAME", this.dsList.getColumn(0, "DS_FAM_HNAME"));
        	this.dsSaveBas.setColumn(0, "YN_WREATH", this.dsList.getColumn(0, "YN_WREATH"));
        	this.dsSaveBas.setColumn(0, "DS_WREATH", this.dsList.getColumn(0, "DS_WREATH"));
        	this.dsSaveBas.setColumn(0, "TY_AMOUNT", this.dsList.getColumn(0, "TY_AMOUNT"));
        	this.dsSaveBas.setColumn(0, "AM_FAMILYEVENT", this.dsList.getColumn(0, "AM_FAMILYEVENT"));
        	this.dsSaveBas.setColumn(0, "FR_VACATION", this.dsList.getColumn(0, "FR_VACATION"));
        	this.dsSaveBas.setColumn(0, "TO_VACATION", this.dsList.getColumn(0, "TO_VACATION"));
        	this.dsSaveBas.setColumn(0, "DS_REASON", this.dsList.getColumn(0, "DS_REASON"));
        	this.dsSaveBas.setColumn(0, "DS_PLACE", this.dsList.getColumn(0, "DS_PLACE"));
        	this.dsSaveBas.setColumn(0, "DS_FILE", this.dsList.getColumn(0, "DS_FILE"));
        	this.dsSaveBas.setColumn(0, "DS_FILE_PATH", this.dsList.getColumn(0, "DS_FILE_PATH"));
        	this.dsSaveBas.setColumn(0, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        	this.dsSaveBas.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSaveBas.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSaveBas.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);
        	this.dsSaveBas.setColumn(0, "GW_IP", (this.FlagGb == "I" ? this.dsSearch.getColumn(0, "ID_AP") : this.dsList.getColumn(0, "NO_APPROVAL")));

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

        // // 확장버튼 sp 호출 (DZRPR_APPROVAL_EXECUTE)
        // this.fnExec = function(status) {
        //
        // trace("fnExec 실행됨");
        //
        // 	this.dsExec.clearData();
        // 	this.dsExec.addRow();
        //
        // 	this.dsExec.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        // 	this.dsExec.setColumn(0, "ST_APPR", status);
        // 	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        //
        // 	var strSvcId    = "exec";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "exec=dsExec";
        // 	var outData     = "";
        // 	var strArg      = "status=" + status;
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        // }

        this.fnExec = function(status) {
        	// 의견 등록 - 상신(01), 승인(03), 반려(04)
        	if(status == "01" || status == "03" || status == "04"){
        		var param = {};

        		param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        		param.V_PARAM01 = this.dsListMaster.getColumn(0, "V_PARAM01");
        		param.V_PARAM02 = this.dsListMaster.getColumn(0, "V_PARAM02");
        		param.V_PARAM03 = this.dsListMaster.getColumn(0, "V_PARAM03");
        		param.V_PARAM04 = this.dsListMaster.getColumn(0, "V_PARAM04");
        		param.ST_APPR = status;

        		this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 550, 300);
        	}else{
        		var dsNote = "";
        		this.fnApprovalExec(status, dsNote);
        	}
        }

        this.fnAprvDialogCallback = function(svcID, value) {
        	if(value){	// 리턴값
        		var json = JSON.parse(value);
        		this.fnApprovalExec(json.ST_APPR, json.DS_NOTE);
        	}
        };

        // 확장버튼 sp 호출 (DZRPR_APPROVAL_EXECUTE)
        this.fnApprovalExec = function(status, dsNote) {
        	this.dsExec.clearData();
        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsExec.setColumn(0, "ST_APPR", status);
        	this.dsExec.setColumn(0, "DS_NOTE", dsNote);
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
        	//this.dsSaveMaster.setColumn(0, "DS_ETITLE", this.dsSearch.setColumn(0, "DS_ETITLE"));
        	this.dsSaveMaster.setColumn(0, "ID_USER", this.AuthClient.ID_USER);



        trace("fnSaveMaster", this.dsSaveMaster.saveXML());

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

           //fileManager.IS_READONLY = (this.dsListMaster.getColumn(0, "BTNFILE") == "Y");
           //false가 수정가능상태 Y가 수정가능
           var bReadOnly = (this.dsListMaster.getColumn(0, "BTNFILE") == "Y")?false:true;
           fileManager.IS_READONLY = bReadOnly;

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

        //출력
        this.fnPnt = function(obj,e) {
        	this.gfnEcoPrint(this.divData1);
        };


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
        		if(this.FlagGb != "I"){
        			this.FlagGb = "U";
        		}

        		if(e.columnid == "CD_GUBUN") {
        			this.fnSetComboEvent();
        		}else if(e.columnid == "CD_EVENT") {
        			this.fnSetComboFamily();
        		}

        		//this.fnSetEnable();
        	}
        };

        // 싱글폼 활성화 or 비활성화 처리
        this.fnSetEnable = function() {
        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_GUBUN"))){
        		this.divData1.form.divDataInfo.form.cboCD_EVENT.set_enable(false);

        		this.divData1.form.divDataInfo.form.cboCD_EVENT.set_index(0);	// null 선택
        	}else{
        		this.divData1.form.divDataInfo.form.cboCD_EVENT.set_enable(true);
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_EVENT"))){
        		this.divData1.form.divDataInfo.form.cboCD_FAMILY.set_enable(false);	// 대상자와의 관계
        		this.divData1.form.divDataInfo.form.cboTY_AMOUNT.set_enable(false);	// 경 조 금  구 분
        		this.divData1.form.divDataInfo.form.cboDS_WREATH.set_enable(false);	// 화   환   여   부

        		this.divData1.form.divDataInfo.form.cboCD_FAMILY.set_index(0);	// null 선택
        		this.divData1.form.divDataInfo.form.cboTY_AMOUNT.set_index(0);	// null 선택
        		this.divData1.form.divDataInfo.form.cboDS_WREATH.set_index(0);	// null 선택

        		this.dsList.setColumn(0, "AM_FAMILYEVENT", "");	// 경조금 빈값
        		this.dsList.setColumn(0, "FR_VACATION", "");	// 경조휴가 빈값
        		this.dsList.setColumn(0, "TO_VACATION", "");	// 경조휴가 빈값

        		this.divData1.form.divDataInfo.form.txtAM_FAMILYEVENT.set_enable(false);	// 경조금
        		this.divData1.form.divDataInfo.form.tclFR_VACATION.set_enable(false);		// 경조휴가
        		this.divData1.form.divDataInfo.form.tclTO_VACATION.set_enable(false);		// 경조휴가
        	}else{
        		this.divData1.form.divDataInfo.form.cboCD_FAMILY.set_enable(true);	// 대상자와의 관계
        		this.divData1.form.divDataInfo.form.cboTY_AMOUNT.set_enable(true);	// 경 조 금  구 분
        		this.divData1.form.divDataInfo.form.cboDS_WREATH.set_enable(true);	// 화   환   여   부

        		this.dsList.setColumn(0, "TY_AMOUNT", this.dsCD_EVENT.getColumn(this.divData1.form.divDataInfo.form.cboCD_EVENT.index, "TY_AMOUNT"));	// 경조금구분 디폴트값
        		this.dsList.setColumn(0, "DS_WREATH", this.dsCD_EVENT.getColumn(this.divData1.form.divDataInfo.form.cboCD_EVENT.index, "DS_WREATH"));	// 화환여부 디폴트값
        		this.dsList.setColumn(0, "AM_FAMILYEVENT", this.dsCD_EVENT.getColumn(this.divData1.form.divDataInfo.form.cboCD_EVENT.index, "AM_FAMILYEVENT"));	// 경조금 디폴트값

        		if(this.dsCD_EVENT.getColumn(this.divData1.form.divDataInfo.form.cboCD_EVENT.index, "YN_FAMILYEVENT") == "Y"){
        			this.divData1.form.divDataInfo.form.txtAM_FAMILYEVENT.set_enable(true);		// 경     조     금
        		}else{
        			this.divData1.form.divDataInfo.form.txtAM_FAMILYEVENT.set_enable(false);
        		}

        		if(this.dsCD_EVENT.getColumn(this.divData1.form.divDataInfo.form.cboCD_EVENT.index, "YN_VACATION") == "Y"){
        			this.divData1.form.divDataInfo.form.tclFR_VACATION.set_enable(true);		// 경   조   휴   가
        			this.divData1.form.divDataInfo.form.tclTO_VACATION.set_enable(true);		// 경   조   휴   가
        		}else{
        			this.divData1.form.divDataInfo.form.tclFR_VACATION.set_enable(false);
        			this.divData1.form.divDataInfo.form.tclTO_VACATION.set_enable(false);
        		}
        	}



        }



        // 구분 콤보
        this.fnSetComboGubun = function() {
        	this.dsCombo.clearData();
            this.dsCombo.addRow();

            this.dsCombo.setColumn(0, "CD_PREFIX", "VB");
            this.dsCombo.setColumn(0, "CD_GUBUN", "");
            this.dsCombo.setColumn(0, "CD_EVENT", "");

        	var strSvcId    = "comboG";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_GUBUN=combo0";
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

        // 경조 콤보
        this.fnSetComboEvent = function() {
            this.dsCombo.clearData();
            this.dsCombo.addRow();

            this.dsCombo.setColumn(0, "CD_PREFIX", "VC");
            this.dsCombo.setColumn(0, "CD_GUBUN", this.dsList.getColumn(0, "CD_GUBUN"));	// 구분코드값
            this.dsCombo.setColumn(0, "CD_EVENT", "");

        	var strSvcId    = "comboE";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_EVENT=combo0";
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

        // 대상자와의 관계 콤보
        this.fnSetComboFamily = function() {
            this.dsCombo.clearData();
            this.dsCombo.addRow();

            this.dsCombo.setColumn(0, "CD_PREFIX", "FA");
            this.dsCombo.setColumn(0, "CD_GUBUN", this.dsList.getColumn(0, "CD_GUBUN"));	// 구분코드값
            this.dsCombo.setColumn(0, "CD_EVENT", this.dsList.getColumn(0, "CD_EVENT"));	// 경조코드값

        	var strSvcId    = "comboF";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_FAMILY=combo0";
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



        // 경조콤보(조회후 호출용)
        this.fnSetComboEventSel = function() {
            this.dsCombo.clearData();
            this.dsCombo.addRow();

            this.dsCombo.setColumn(0, "CD_PREFIX", "VC");
            this.dsCombo.setColumn(0, "CD_GUBUN", this.dsList.getColumn(0, "CD_GUBUN"));	// 구분코드값
            this.dsCombo.setColumn(0, "CD_EVENT", "");

        	var strSvcId    = "comboEsel";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_EVENT=combo0";
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

        // 대상자와의 관계 콤보(조회후 호출용)
        this.fnSetComboFamilySel = function() {
            this.dsCombo.clearData();
            this.dsCombo.addRow();

            this.dsCombo.setColumn(0, "CD_PREFIX", "FA");
            this.dsCombo.setColumn(0, "CD_GUBUN", this.dsList.getColumn(0, "CD_GUBUN"));	// 구분코드값
            this.dsCombo.setColumn(0, "CD_EVENT", this.dsList.getColumn(0, "CD_EVENT"));	// 경조코드값

        	var strSvcId    = "comboFsel";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_FAMILY=combo0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divData1.form.divDataInfo.form.txtDS_ORG.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtDS_ORG.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtDS_POSITION.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtDS_POSITION.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtDS_HANDPHONE.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtDS_HANDPHONE.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtYM_GROUPJOIN.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtYM_GROUPJOIN.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtDS_HNAME.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtDS_HNAME.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtDS_PLACE.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtDS_PLACE.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtDS_REASON.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtDS_REASON.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.divData1.form.divDataInfo.form.txtDS_FAM_HNAME.addEventHandler("onkeyup",this.divData_divDataRight_onkeyup,this);
            this.divData1.form.divDataInfo.form.txtDS_FAM_HNAME.addEventHandler("onkillfocus",this.divData_divDataRight_onkillfocus,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_FAMILYEVENT_APP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
