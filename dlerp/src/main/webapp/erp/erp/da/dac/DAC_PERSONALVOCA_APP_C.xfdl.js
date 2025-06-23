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
            this.set_titletext("전자결재상신_연차변경");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">init</Col><Col id=\"SP\">DZRPR_APPROVAL_INIT</Col></Row><Row><Col id=\"TARGET\">selectmaster</Col><Col id=\"SP\">DZRPR_APPROVAL_MASTER_SELECT</Col></Row><Row><Col id=\"TARGET\">savemaster</Col><Col id=\"SP\">DZRPR_APPROVAL_MASTER_SAVE</Col></Row><Row><Col id=\"TARGET\">line1</Col><Col id=\"SP\">DZRPR_APPROVAL_LINE_SELECT</Col></Row><Row><Col id=\"TARGET\">line2</Col><Col id=\"SP\">DZRPR_APPROVAL_LINE_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DZRPR_APPROVAL_EXECUTE</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DACPR_PERSONALVOCA_APP_SELECT</Col></Row><Row><Col id=\"TARGET\">saveVoca</Col><Col id=\"SP\">DACPR_PERSONALVOCA_APP_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"V1\" type=\"STRING\" size=\"256\"/><Column id=\"V2\" type=\"STRING\" size=\"256\"/><Column id=\"V3\" type=\"STRING\" size=\"256\"/><Column id=\"V4\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"YR_VACATION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID_AP\"/><Col id=\"ID_AP_TYPE\"/><Col id=\"V1\"/><Col id=\"V2\"/><Col id=\"V3\"/><Col id=\"V4\"/><Col id=\"DS_ETITLE\"/></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"YR_VACATION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_VACAFROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_VACATO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VACATION\" type=\"STRING\" size=\"256\"/><Column id=\"QN_VACATION\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HALF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_AMPM\" type=\"STRING\" size=\"256\"/><Column id=\"NM_TRANSFER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ID_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPOINT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_UPLOAD\" type=\"STRING\" size=\"256\"/><Column id=\"QN_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"QN_USEVACA\" type=\"STRING\" size=\"256\"/><Column id=\"QN_REMAIN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNoSeq", this);
            obj._setContents("");
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

            obj = new Static("sta06","0","sta01:-1","150","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta02:-1","688","30",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
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

            obj = new Edit("txtDS_ETITLE","sta06:0","sta07:-25","671","20",null,null,null,null,null,null,this.divData1.form.divDataMaster.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_border("0px none");
            obj.set_background("#ffffff");
            this.divData1.form.divDataMaster.addChild(obj.name, obj);

            obj = new Div("divDataInfo","0","212",null,"428","5",null,null,null,null,null,this.divData1.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divData1.addChild(obj.name, obj);

            obj = new Static("staTITLE2","0","10","480","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("24");
            obj.set_text("휴가정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staCD_VACATION","0","staTITLE2:5","120","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("4");
            obj.set_text("휴가구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("stabgCD_VACATION","staCD_VACATION:-1","staTITLE2:5","350","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Radio("rdoCD_VACATION","staCD_VACATION:5","staCD_VACATION:-25","160","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("30");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData1_form_divDataInfo_form_rdoCD_VACATION_innerdataset = new nexacro.NormalDataset("divData1_form_divDataInfo_form_rdoCD_VACATION_innerdataset", obj);
            divData1_form_divDataInfo_form_rdoCD_VACATION_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A1</Col><Col id=\"datacolumn\">연차</Col></Row><Row><Col id=\"codecolumn\">A2</Col><Col id=\"datacolumn\">반차</Col></Row><Row><Col id=\"codecolumn\">C1</Col><Col id=\"datacolumn\">공가</Col></Row></Rows>");
            obj.set_innerdataset(divData1_form_divDataInfo_form_rdoCD_VACATION_innerdataset);
            obj.set_text("연차");
            obj.set_value("A1");
            obj.set_index("0");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staDT_VACA","0","staCD_VACATION:-1","120","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("2");
            obj.set_text("휴가기간");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("stabgDT_VACA","staDT_VACA:-1","staDT_VACA:-30","350","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_VACAFROM","staDT_VACA:5","staDT_VACA:-25","105","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO","ctclDT_VACAFROM:5","staCD_VACATION:4","10","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("22");
            obj.set_text("~");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_VACATO","staDT_ORD_TO:5","staCD_VACATION:4","105","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staTY_AMPM","0","staDT_VACA:-1","120","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("8");
            obj.set_text("반차구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("stabgTY_AMPM","staTY_AMPM:-1","staDT_VACA:-1","350","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Radio("rdoTY_AMPM","staTY_AMPM:5","staTY_AMPM:-24","160","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("31");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData1_form_divDataInfo_form_rdoTY_AMPM_innerdataset = new nexacro.NormalDataset("divData1_form_divDataInfo_form_rdoTY_AMPM_innerdataset", obj);
            divData1_form_divDataInfo_form_rdoTY_AMPM_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">종일</Col></Row><Row><Col id=\"codecolumn\">AM</Col><Col id=\"datacolumn\">오전</Col></Row><Row><Col id=\"codecolumn\">PM</Col><Col id=\"datacolumn\">오후</Col></Row></Rows>");
            obj.set_innerdataset(divData1_form_divDataInfo_form_rdoTY_AMPM_innerdataset);
            obj.set_text("연차");
            obj.set_index("0");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staQN_VACATION","0","staTY_AMPM:-1","120","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("5");
            obj.set_text("휴가일수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("stabgQN_VACATION","staQN_VACATION:-1","staTY_AMPM:-1","350","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("edtQN_VACATION","staQN_VACATION:5","staQN_VACATION:-25","160","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staNM_TRANSFER","0","staQN_VACATION:-1","120","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("3");
            obj.set_text("대직자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("stabgNM_TRANSFER","staNM_TRANSFER:-1","staQN_VACATION:-1","350","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("edtNM_TRANSFER","staNM_TRANSFER:5","staNM_TRANSFER:-25","160","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("35");
            obj.set_readonly("false");
            obj.set_password("false");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","0","staNM_TRANSFER:-1","120","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("6");
            obj.set_text("비상연락처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("stabgNO_TEL","staNO_TEL:-1","staNM_TRANSFER:-1","350","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("edtNO_TEL","staNO_TEL:5","staNO_TEL:-25","160","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("34");
            obj.set_inputtype("normal");
            obj.set_maxlength("20");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK","0","staNO_TEL:-1","120","60",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("0");
            obj.set_text("사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("stabgDS_REMARK","staDS_REMARK:-1","staNO_TEL:-1","350","60",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","staDS_REMARK:4","staDS_REMARK:-55","287","49",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("33");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staDT_RETURN","0","staDS_REMARK:-1","120","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("7");
            obj.set_text("변경일자");
            obj.set_textAlign("center");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("stabgDT_RETURN","staDT_RETURN:-1","staDS_REMARK:-1","350","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_RETURN","staDT_RETURN:5","staDT_RETURN:-25","105","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("32");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staTY_SAVE","550","205","54","29",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("37");
            obj.set_text("TY_SAVE");
            obj.set_visible("false");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staTITLE1","staTITLE2:20","10","379","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("9");
            obj.set_text("연차정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staQN_TOTAL","staTITLE2:20","staTITLE1:5","80","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("1");
            obj.set_text("총연차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta06","staTITLE2:20","staQN_TOTAL:-1","80","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staQN_YEARLYVACATION","staQN_TOTAL:-1","staTITLE1:5","80","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("20");
            obj.set_text("사용연차");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("staQN_REMAIN","staQN_YEARLYVACATION:-1","staTITLE1:5","80","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("21");
            obj.set_text("잔여연차");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("edtQN_TOTAL","staQN_TOTAL:-70","staQN_TOTAL:4","60","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta08","staQN_TOTAL:-1","staQN_YEARLYVACATION:-1","80","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("edtQN_USEVACA","staQN_YEARLYVACATION:-70","staQN_YEARLYVACATION:4","60","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta12","staQN_YEARLYVACATION:-1","staQN_REMAIN:-1","80","30",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Edit("edtQN_REMAIN","staQN_REMAIN:-70","staQN_REMAIN:4","60","20",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta00","544","162","120","33",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("38");
            obj.set_text("ST_APPR");
            obj.set_visible("false");
            this.divData1.form.divDataInfo.addChild(obj.name, obj);

            obj = new Static("sta01","555","249","44","32",null,null,null,null,null,null,this.divData1.form.divDataInfo.form);
            obj.set_taborder("39");
            obj.set_text("sta01");
            obj.set_visible("false");
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

            obj = new BindItem("item6","divData1.form.divDataMaster.form.txtDS_ETITLE","value","dsListMaster","DS_ETITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData1.form.divDataInfo.form.rdoCD_VACATION","value","dsList","CD_VACATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData1.form.divDataInfo.form.ctclDT_VACAFROM","value","dsList","DT_VACAFROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData1.form.divDataInfo.form.ctclDT_VACATO","value","dsList","DT_VACATO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData1.form.divDataInfo.form.rdoTY_AMPM","value","dsList","TY_AMPM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData1.form.divDataInfo.form.edtQN_VACATION","value","dsList","QN_VACATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData1.form.divDataInfo.form.edtNM_TRANSFER","value","dsList","NM_TRANSFER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData1.form.divDataInfo.form.edtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData1.form.divDataInfo.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData1.form.divDataInfo.form.ctclDT_RETURN","value","dsList","DT_RETURN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData1.form.divDataInfo.form.edtQN_TOTAL","value","dsList","QN_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData1.form.divDataInfo.form.edtQN_USEVACA","value","dsList","QN_USEVACA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData1.form.divDataInfo.form.edtQN_REMAIN","value","dsList","QN_REMAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData1.form.divDataInfo.form.staTY_SAVE","text","dsSearch","TY_SAVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData1.form.divDataInfo.form.sta00","text","dsListMaster","ST_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData1.form.divDataInfo.form.sta01","text","dsListMaster","V_PARAM03");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAC_PERSONALVOCA_APP_C.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.ID_AP_TYPE = "DA10";	//	연차변경
        /*
        ====================================
        팝업호출시
        ====================================
        	DZRPR_APPROVAL_INIT
        		전자결재문서번호 ID_AP 채번 : DZRT_AP_MANAGE 테이블에 파라메터 1, 2 저장
        -- 결재라인 상신자 추가
        EXEC DZRPR_APPROVAL_LINE_SAVE

        -- 상태변경 SP 실행 및 CALLBACK
        EXEC DZRPR_APPROVAL_EXECUTE

        ====================================
        	임시저장00 OR 상신01 버튼 누르면
        ====================================
        1	DZRPR_APPROVAL_MASTER_SAVE
        		-> DZRT_AP_MANAGE 테이블에 DS_ETITLE 업데이트
        			// 2	DACPR_PERSONALVOCA_APP_SAVE
        			// 		-> DACT_USEDVACATION 테이블 입력 or 수정 여기서 NO_SEQ값 생성
        			//
        3	DZRPR_APPROVAL_EXECUTE
        		DZRPR_APPROVAL_LINE_EXECUTE
        4		->DZRT_AP_MANAGE 결재문서 상태값 변경
        		->DZRT_AP_MANAGE 테이블에 ID_AP 키값으로 정보 SELECT
        5		DACPR_PERSONALVOCA_APP_CALLBACK

        */
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
        	this.dsSearch.setColumn(0, "V3", this.gfnIsNull(this.getOwnerFrame().V3) ? "" : this.getOwnerFrame().V3);	// 구분 C:변경[변경신청서]
        	this.dsSearch.setColumn(0, "V4", this.gfnIsNull(this.getOwnerFrame().V4) ? "" : this.getOwnerFrame().V4);
        	this.dsSearch.setColumn(0, "DS_ETITLE", this.getOwnerFrame().DS_ETITLE);

        	// 저장구분 : U:수정
        	this.dsSearch.setColumn(0, "TY_SAVE", this.gfnIsNull(this.getOwnerFrame().TY_SAVE) ? "I" : this.getOwnerFrame().TY_SAVE);
        	this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsSearch.setColumn(0, "ID_SABUN", this.getOwnerFrame().ID_SABUN);
        	this.dsSearch.setColumn(0, "YR_VACATION", this.getOwnerFrame().YR_VACATION);

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
        	// BUTTON, BUTTON-IN 처리

        	this.rdoCD_VACATION = this.divData1.form.divDataInfo.form.rdoCD_VACATION;
        	this.ctclDT_VACAFROM = this.divData1.form.divDataInfo.form.ctclDT_VACAFROM;
        	this.ctclDT_VACATO = this.divData1.form.divDataInfo.form.ctclDT_VACATO;
        	this.rdoTY_AMPM = this.divData1.form.divDataInfo.form.rdoTY_AMPM;
        	this.edtQN_VACATION = this.divData1.form.divDataInfo.form.edtQN_VACATION;
        	this.edtNM_TRANSFER = this.divData1.form.divDataInfo.form.edtNM_TRANSFER;
        	this.edtNO_TEL = this.divData1.form.divDataInfo.form.edtNO_TEL;
        	this.txtDS_REMARK = this.divData1.form.divDataInfo.form.txtDS_REMARK;
        	this.ctclDT_RETURN = this.divData1.form.divDataInfo.form.ctclDT_RETURN;
        	this.staDT_RETURN = this.divData1.form.divDataInfo.form.staDT_RETURN;
        	this.stabgDT_RETURN = this.divData1.form.divDataInfo.form.stabgDT_RETURN;
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

        	//this.dsList.addEventHandler("onvaluechanged", this.dsList_onvaluechanged, this);

        	//결재본문 그리드 세팅
        	//this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFA_PLANL_APP");

        // 	//가로 스크롤이 생기지 않게 세팅
        // 	this.dxGrid.set_scrollbartype("none default");

        // 	//그리드 헤더 색상 변경
        // 	this.dxGrid.set_enableredraw(false);
        // 	for(var i = 0; i < this.dxGrid.getCellCount("head"); i++) {
        //  		this.dxGrid.setCellProperty("head",i,"background","#EDECEF");
        //  		this.dxGrid.setCellProperty("head",i,"color","#4b5055");
        // 		this.dxGrid.setCellProperty("head",i,"border","none, 1px solid #C4C2CD, 1px solid #C4C2CD, none");
        // 	}
        // 	this.dxGrid.set_enableredraw(true);
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
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("NO_SEQ", "int");
        	this.dsSelect.addColumn("YR_VACATION", "string");
        	this.dsSelect.addColumn("NO_APPROVAL", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_VACATION", "string");
        	this.dsSave.addColumn("DT_VACAFROM", "string");
        	this.dsSave.addColumn("DT_VACATO", "string");
        	this.dsSave.addColumn("TY_AMPM", "string");
        	this.dsSave.addColumn("QN_VACATION", "bigdecimal");
        	this.dsSave.addColumn("NM_TRANSFER", "string");
        	this.dsSave.addColumn("NO_TEL", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("DT_RETURN", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("GR_CORP", "string");
        	this.dsSave.addColumn("GW_IP", "string");
        	this.dsSave.addColumn("NO_SEQ_OUT", "string");
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
        	var nrow = this.dsSelect.addRow();

        	//this.dsSelect.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_SAVE"));
        	this.dsSelect.setColumn(nrow, "TY_GUBUN", this.dsListMaster.getColumn(0, "V_PARAM03"));
        	this.dsSelect.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(nrow, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(nrow, "ID_PERSON", this.dsListMaster.getColumn(0, "V_PARAM01"));
        	this.dsSelect.setColumn(nrow, "NO_SEQ", this.dsListMaster.getColumn(0, "V_PARAM02"));
        	this.dsSelect.setColumn(nrow, "YR_VACATION", this.dsSearch.getColumn(0, "YR_VACATION"));
        	this.dsSelect.setColumn(nrow, "NO_APPROVAL", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsSelect.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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

        /*************************************************************************************************
        * 결재본분 문서 저장 / 상신 호출
        * ------------------------------------------------------------------------------------------------
        * 결재본분 문서 저장이 필요할 경우
        * this.fnExec(status); 부분 주석 처리 후 아래 저장 부분 주석 풀고 내용 입력
        *  - strSvcId = "save" 그대로 사용 (fnCallback 함수에서 상신 처리)
        * 결재본분 문서 저장이 필요없는 경우 그대로 상신 처리 사용
        **************************************************************************************************/
        this.fnSave = function(status) {
        	//this.fnExec(status);	//상신 or 임시저장

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	var i = this.dsList.rowposition;

        	this.dsSave.setColumn(nrow, "TY_SAVE",  this.dsSearch.getColumn(0, "TY_SAVE"));
        	this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        	this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "CD_VACATION", this.dsList.getColumn(i, "CD_VACATION"));
        	this.dsSave.setColumn(nrow, "DT_VACAFROM", this.dsList.getColumn(i, "DT_VACAFROM"));
        	this.dsSave.setColumn(nrow, "DT_VACATO", this.dsList.getColumn(i, "DT_VACATO"));
        	this.dsSave.setColumn(nrow, "TY_AMPM", this.dsList.getColumn(i, "TY_AMPM"));
        	this.dsSave.setColumn(nrow, "QN_VACATION", this.dsList.getColumn(i, "QN_VACATION"));
        	this.dsSave.setColumn(nrow, "NM_TRANSFER", this.dsList.getColumn(i, "NM_TRANSFER"));
        	this.dsSave.setColumn(nrow, "NO_TEL", this.dsList.getColumn(i, "NO_TEL"));
        	this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        	this.dsSave.setColumn(nrow, "DT_RETURN", this.dsList.getColumn(i, "DT_RETURN"));
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSave.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        	this.dsSave.setColumn(nrow, "GW_IP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsSave.setColumn(nrow, "NO_SEQ_OUT", "");

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveVoca=dsSave";
        	var outData     = "dsNoSeq=saveVoca";
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

        /*
         *	저장 Validate
         */
        this.fnSaveValidation = function() {
        	var objDs = this.dsList;

         	var msg = "";
        // 	var flag = this.gfnGetFlag(objDs, i);

        // 	switch(flag) {
        // 		case "I":
        // 		case "U":
        // 		break;
        // 	}

        	var nRow = this.dsList.rowposition;
        	var CD_VACATION = this.dsList.getColumn(nRow, "CD_VACATION");	// 휴가구분
        	var DT_VACAFROM = this.dsList.getColumn(nRow, "DT_VACAFROM");	// 휴가시작기간
        	var DT_VACATO = this.dsList.getColumn(nRow, "DT_VACATO");		// 휴가종료기간
        	var TY_AMPM = this.dsList.getColumn(nRow, "TY_AMPM");			// 반차구분

        	var DT_RETURN = this.dsList.getColumn(nRow, "DT_RETURN");	// 변경일자


        // 			var toDay = this.gfnGetDate();
        // 			// 과거 날짜로 수정불가 (관리자 가능 )
        // 			if(this.FormInfo.GR_SEARCH != 1){
        // 				if(toDay >= DT_VACAFROM){
        // 					this.gfnAlert("시작일은 오늘이전 일자로 입력할 수 없습니다.");
        // 					return false;
        // 				}
        // 			}

        // 	if(this.gfnIsNull(DT_VACAFROM) || this.gfnIsNull(DT_VACATO)){
        // 		msg += "[휴가기간] 필수입력값입니다. \n";
        // 	}
        //
        // 	if(CD_VACATION == "A2" && TY_AMPM == ""){	// 공가
        // 		msg += "[반차구분] 오전과 오후만 선택 가능합니다. \n";
        // 	}
        //
        // 	//  반차구분이 오전 오후일경우 FROM~TO가 다를 수 없음
        // 	if(CD_VACATION == "C1" && (TY_AMPM == "AM" || TY_AMPM == "PM")){	// 공가
        // 		if(DT_VACAFROM != DT_VACATO){
        // 			msg += "[반차구분] 오전 오후일경우 [휴가기간]이 동일해야합니다. \n";
        // 		}
        // 	}

         	if(this.gfnIsNull(DT_RETURN)){
         		msg += "[변경일자] 필수입력값입니다. \n";
         	}

        	if(this.gfnIsNull(msg)) {
        		return true;
        	}
        	else {
        		var arrError = [msg];
        		this.gfnAlert("msg.err.validator", arrError);
        		return false;
        	}

        	return true;
        }

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
        			//this.btn9.set_visible(this.dsListMaster.getColumn(0, "BTNDE") != "H");
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
        			//this.btn9.set_enable(this.dsListMaster.getColumn(0, "BTNDE") == "Y");
        			this.btn10.set_enable(this.dsListMaster.getColumn(0, "BTNLINES") == "Y");
        			this.btn11.set_enable(this.dsListMaster.getColumn(0, "BTNSAVE") == "Y");

        			// 상태값이 00 이면 제목 활성화
        			if (this.dsListMaster.getColumn(0, "ST_APPR") == "00")
        				this.txtDS_ETITLE.set_readonly(false);
        			else
        				this.txtDS_ETITLE.set_readonly(true);

        			this.fnSelect();
        		}
        	}
        	else if(svcID == "savemaster") {
        		if (errorCode == 0) {
        			var json = this.gfnArgsToJson(strArg);
        			var status = json.status;

        			//this.fnExec("01");
        			//this.fnExec(status);	//상신 or 임시저장
        			this.fnSave(status);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	// DACPR_PERSONALVOCA_APP_SAVE 연차 저장
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			var json = this.gfnArgsToJson(strArg);
        			var status = json.status;
        			//this.dsSearch.setColumn(0, "TY_SAVE", "U");

        			if (this.dsNoSeq.rowcount > 0) {
        				this.dsNoSeq.getColumn(0, "NO_SEQ_OUT");

        				this.fnExec(status);	//상신 or 임시저장
        				//this.fnExec("01");	//상신

        			}
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
        			else {

        			// 결재정보 조회후 결재본문 내역 조회
        			//if (this.dsListMaster.getColumn(0, "ST_APPR") == "00"){

        				/*
        				GW	00		작성중
        				GW	01		상신
        				GW	02		결재중
        				GW	03		결재완료
        				GW	04		반려
        				GW	05		결재취소
        				*/
        				this.fnSelectMaster();
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "select") {
        		if (errorCode == 0) {
        			if(this.dsList.rowcount > 0) {

        				// 상태값이 00 이면 제목 활성화
        				var sTyStatus = this.dsListMaster.getColumn(0, "ST_APPR");
        				var sCdVacation = this.dsList.getColumn(0, "CD_VACATION");
        				var sYnAppoint = this.dsList.getColumn(0, "YN_APPOINT");
        				var sTySave = this.dsSearch.getColumn(0, "TY_SAVE");

        				this.gfnSetAllEnable(this.divData1.form.divDataInfo.form, false);
        				this.ctclDT_VACAFROM.set_enable(false);
        				this.ctclDT_VACATO.set_enable(false);
        				this.ctclDT_RETURN.set_enable(false);	// 변경일자

        				// 01 상신 / 02 결재중 / 03 결재완료
        				// 00 작성중 / 04 반려 / 05 결재취소
        				if(sTyStatus == "00" || sTyStatus == "04" || sTyStatus == "05"){
        					this.ctclDT_RETURN.set_enable(true);	// 변경일자
        				}
        			}

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
         this.dsList_onvaluechanged = function(obj,e)
        {
        }

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

        	// 상신 or 임시저장
        	if (status == "01" || status == "00") {
        		this.fnSaveMaster(status);
        	}
        	else {
        		this.fnExec(status);
        	}
        }

        // // 확장버튼 sp 호출 (DZRPR_APPROVAL_EXECUTE)
        // this.fnExec = function(status) {
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
        // DZRT_AP_MANAGE 테이블에 DS_ETITLE 업데이트
        this.fnSaveMaster = function(status) {

        	// 유효성검사
        	if (!this.fnSaveValidation()) return;

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

           //fileManager.IS_READONLY = (this.dsListMaster.getColumn(0, "BTNFILE") == "Y");
           //false가 수정가능상태 Y가 수정가능
           var bReadOnly = (this.dsListMaster.getColumn(0, "BTNFILE") == "Y")?false:true;
           fileManager.IS_READONLY = bReadOnly;

           this.gfnFileManager(fileManager, "");
        };

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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
        };
        this.loadIncludeScript("DAC_PERSONALVOCA_APP_C.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
