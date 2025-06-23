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
            this.set_titletext("증명서 신청");
            this.set_scrolltype("none");
            this.getSetter("maxwidth").set("730");
            this.getSetter("maxheight").set("670");
            if (Form == this.constructor)
            {
                this._setFormPosition(688,595);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CD_CORP_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON_REQUEST\" type=\"INT\" size=\"256\"/><Column id=\"CD_DEPT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_INGAM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CERTIFICATE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CERTIFICATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SINCHUNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBMIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_USE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BUSU\" type=\"INT\" size=\"256\"/><Column id=\"YY_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"YY_RECEIPT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YY_RECEIPT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PRINT\" type=\"STRING\" size=\"256\"/><Column id=\"QN_PRINT\" type=\"INT\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"YM_INCOME\" type=\"STRING\" size=\"256\"/><Column id=\"YM_INCOME_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_INCOME_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BAL_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BAL_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BAL_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BAL_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BAL_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BAL_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BAL_TO\" type=\"STRING\" size=\"256\"/><Column id=\"YY_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_INCOME_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_INCOME_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BAL_GROUPJOIN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_CERTIFICATE_SELECT_DTL</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_CERTIFICATE_SAVE</Col></Row><Row><Col id=\"TARGET\">select_emp</Col><Col id=\"SP\">DAXPR_BASEINFO_CODEFIND_FULL</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_JOIN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">카본코 입사일</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">그룹 입사일</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_RESIDENT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">Y</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_INGAM", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">Y</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">I</Col><Col id=\"VALUE\">포함</Col></Row><Row><Col id=\"CODE\">O</Col><Col id=\"VALUE\">불포함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CERTIFICATE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_SUBMIT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE_REQUEST","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_REQUEST","0","staTITLE_REQUEST:0","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_REQUEST_bg","staCD_CORP_REQUEST:-1","staCD_CORP_REQUEST:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP_REQUEST","staCD_CORP_REQUEST:5","staCD_CORP_REQUEST:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("37");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_REQUEST","0","staCD_CORP_REQUEST:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_REQUEST_bg","staCD_DEPT_REQUEST:-1","staCD_DEPT_REQUEST:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_REQUEST","staCD_DEPT_REQUEST:5","staCD_DEPT_REQUEST:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("40");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_REQUEST","staCD_CORP_REQUEST_bg:-1","staCD_CORP_REQUEST_bg:-30","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_REQUEST_bg","staID_SABUN_REQUEST:-1","staID_SABUN_REQUEST:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN_REQUEST","staID_SABUN_REQUEST:5","staID_SABUN_REQUEST:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("41");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_FULL");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staEMPTY1","staCD_DEPT_REQUEST_bg:-1","staCD_DEPT_REQUEST_bg:-30","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staEMPTY1_bg","staEMPTY1:-1","staEMPTY1:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE_TARGET","0","staCD_DEPT_REQUEST:5","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("대상자정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","staTITLE_TARGET:0","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_bg","staCD_CORP:-1","staCD_CORP:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","staCD_CORP:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0","staCD_CORP:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_bg","staCD_DEPT:-1","staCD_DEPT:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:5","staCD_DEPT:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ADDRESS","0","staCD_DEPT:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("현주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ADDRESS_bg","staDS_ADDRESS:-1","staDS_ADDRESS:-30","609","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_ADDRESS","staDS_ADDRESS:5","staDS_ADDRESS:-25","597","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","staCD_CORP_bg:-1","staCD_CORP_bg:-30","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg","staID_SABUN:-1","staID_SABUN:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:5","staID_SABUN:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_FULL");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION","staCD_DEPT_bg:-1","staCD_DEPT_bg:-30","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION_bg","staCD_POSITION:-1","staCD_POSITION:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_POSITION","staCD_POSITION:5","staCD_POSITION:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("26");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            obj.set_enableevent("true");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE_DETAIL","0","staDS_ADDRESS:5",null,"30","441",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_CERTIFICATE","0","staTITLE_DETAIL:0","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_text("발급번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_CERTIFICATE_bg","staNO_CERTIFICATE:-1","staNO_CERTIFICATE:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_CERTIFICATE","staNO_CERTIFICATE:5","staNO_CERTIFICATE:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_CERTIFICATE","0","staNO_CERTIFICATE:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("발급구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_CERTIFICATE_bg","staTY_CERTIFICATE:-1","staTY_CERTIFICATE:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_CERTIFICATE","staTY_CERTIFICATE:5","staTY_CERTIFICATE:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_CERTIFICATE");
            obj.set_text("재직증명서(국문)");
            obj.set_value("AK");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SUBMIT","0","staTY_CERTIFICATE:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("발급용도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SUBMIT_bg","staDS_SUBMIT:-1","staDS_SUBMIT:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboDS_SUBMIT","staDS_SUBMIT:5","staDS_SUBMIT:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsDS_SUBMIT");
            obj.set_text("제출용 - 은행");
            obj.set_value("A");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staINCOME","0","staDS_SUBMIT:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("소득기간");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staINCOME_bg","staINCOME:-1","staINCOME:-30","609","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYY_TERM","staINCOME:5","staINCOME:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("calYM_INCOME_FROM","staINCOME:5","staINCOME:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_visible("false");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_INCOME_FROM_TO","calYM_INCOME_FROM:0","staINCOME_bg:-25","30","13",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_AC");
            this.divData.addChild(obj.name, obj);

            obj = new Div("calYM_INCOME_TO","staYM_INCOME_FROM_TO:5","staINCOME_bg:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_visible("false");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTERM","0","staINCOME:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("출력기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTERM_bg","staTERM:-1","staTERM:-30","609","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_TERM","staTERM:5","staTERM:-21","80","10",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_visible("false");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_JOIN","staTY_CERTIFICATE_bg:-1","staTY_CERTIFICATE_bg:-30","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("입사일구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_JOIN_bg","staYN_JOIN:-1","staYN_JOIN:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_JOIN","staYN_JOIN:5","staYN_JOIN:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_innerdataset("dsYN_JOIN");
            obj.set_text("카본코 입사일");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_RESIDENT","staDS_SUBMIT_bg:-1","staDS_SUBMIT_bg:-30","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("주민등록번호\r\n뒷자리 표기");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_RESIDENT_bg","staYN_RESIDENT:-1","staYN_RESIDENT:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_RESIDENT","staYN_RESIDENT:5","staYN_RESIDENT:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_innerdataset("dsYN_RESIDENT");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_SINCHUNG","staNO_CERTIFICATE_bg:-1","staNO_CERTIFICATE_bg:-30","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_text("발급일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_SINCHUNG_bg","staDT_SINCHUNG:-1","staDT_SINCHUNG:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_SINCHUNG","staDT_SINCHUNG:5","staDT_SINCHUNG:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE_CHANGE","0","staTERM:5",null,"30","441",null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_text("변경정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_BAL_DEPT","0","staTITLE_CHANGE:0","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_text("발급부서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_BAL_DEPT_bg","staCD_BAL_DEPT:-1","staCD_BAL_DEPT:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_BAL_DEPT","staCD_BAL_DEPT:5","staCD_BAL_DEPT:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("52");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BAL_JOIN","0","staCD_BAL_DEPT:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BAL_JOIN_bg","staDT_BAL_JOIN:-1","staDT_BAL_JOIN:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_BAL_JOIN","staDT_BAL_JOIN:5","staDT_BAL_JOIN:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK","0","staDT_BAL_JOIN:-1","80","70",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK_bg","staDS_REMARK:-1","staDS_REMARK:-70","609","70",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","staDS_REMARK:5","staDS_REMARK:-65","597","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_BAL_POSITION","staCD_BAL_DEPT_bg:-1","staCD_BAL_DEPT_bg:-30","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_text("발급직위");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_BAL_POSITION_bg","staCD_BAL_POSITION:-1","staCD_BAL_POSITION:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_BAL_POSITION","staCD_BAL_POSITION:5","staCD_BAL_POSITION:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("54");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            obj.set_enableevent("true");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BAL_FROM","staDT_BAL_JOIN_bg:-1","staDT_BAL_JOIN_bg:-30","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_text("재직기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BAL_FROM_bg","staDT_BAL_FROM:-1","staDT_BAL_FROM:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_BAL_FROM","staDT_BAL_FROM:5","staDT_BAL_JOIN_bg:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BAL_FROM_TO","calDT_BAL_FROM:0","staDT_BAL_JOIN_bg:-25","30","13",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_AC");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_BAL_TO","staDT_BAL_FROM_TO:0","staDT_BAL_JOIN_bg:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","279","565","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","30",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("16");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","30",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("17");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","553","61","103","19",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_visible("false");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("부서");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON_REQUEST","437","62","103","19",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_visible("false");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("부서");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtYM_TERM","staTERM:5","staTERM:-24","598","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_value("증명서는 승인 후 7일까지만 확인할 수 있습니다.");
            obj.set_enable("false");
            obj.set_text("증명서는 승인 후 7일까지만 확인할 수 있습니다.");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfCD_CORP_REQUEST.form.CDTextBox","value","dsList","CD_CORP_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfCD_CORP_REQUEST.form.DSTextBox","value","dsList","DS_CORP_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccfID_SABUN_REQUEST.form.CDTextBox","value","dsList","ID_SABUN_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfID_SABUN_REQUEST.form.DSTextBox","value","dsList","DS_HNAME_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtID_PERSON_REQUEST","value","dsList","ID_PERSON_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ccfCD_DEPT_REQUEST.form.CDTextBox","value","dsList","CD_DEPT_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccfCD_DEPT_REQUEST.form.DSTextBox","value","dsList","DS_DEPT_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ccfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ccfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.edtID_PERSON","value","dsList","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ccfCD_DEPT.form.CDTextBox","value","dsList","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ccfCD_DEPT.form.DSTextBox","value","dsList","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.ccfCD_POSITION.form.CDTextBox","value","dsList","CD_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ccfCD_POSITION.form.DSTextBox","value","dsList","DS_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.txtDS_ADDRESS","value","dsList","DS_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.edtNO_CERTIFICATE","value","dsList","NO_CERTIFICATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.calDT_SINCHUNG","value","dsList","DT_SINCHUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.cboTY_CERTIFICATE","value","dsList","TY_CERTIFICATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.cboDS_SUBMIT","value","dsList","DS_SUBMIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.ctclYM_TERM.form.TextBox","value","dsList","YM_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.ctclYY_TERM.form.TextBox","value","dsList","YY_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.ccfCD_BAL_DEPT.form.CDTextBox","value","dsList","CD_BAL_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.ccfCD_BAL_DEPT.form.DSTextBox","value","dsList","DS_BAL_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.ccfCD_BAL_POSITION.form.CDTextBox","value","dsList","CD_BAL_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.ccfCD_BAL_POSITION.form.DSTextBox","value","dsList","DS_BAL_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.calDT_BAL_JOIN","value","dsList","DT_BAL_JOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.calDT_BAL_FROM","value","dsList","DT_BAL_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.calDT_BAL_TO","value","dsList","DT_BAL_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.rdoYN_JOIN","value","dsList","YN_JOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.rdoYN_RESIDENT","value","dsList","YN_RESIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.calYM_INCOME_FROM.form.TextBox","value","dsList","YM_INCOME_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.calYM_INCOME_TO.form.TextBox","value","dsList","YM_INCOME_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_CERTIFICATE_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e) {
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
        	this.fnInit();

        	//default
        	this.rdoYN_JOIN.set_value("N");
        	this.rdoYN_RESIDENT.set_value("Y");
        	//this.rdoYN_JOIN.set_index(0);
        	//this.rdoYN_RESIDENT.set_index(1);
        }

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

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 신상자 정보
        	this.ccfCD_CORP_REQUEST  = this.divData.form.ccfCD_CORP_REQUEST;	// 법인코드
        	this.ccfID_SABUN_REQUEST = this.divData.form.ccfID_SABUN_REQUEST;	// 성명
        	this.ccfCD_DEPT_REQUEST  = this.divData.form.ccfCD_DEPT_REQUEST;	// 부서

        	// 대상자정보
        	this.ccfCD_CORP     = this.divData.form.ccfCD_CORP;		// 법인코드
        	this.ccfID_SABUN    = this.divData.form.ccfID_SABUN;	// 성명
        	this.ccfCD_DEPT     = this.divData.form.ccfCD_DEPT;		// 부서
        	this.ccfCD_POSITION = this.divData.form.ccfCD_POSITION;	// 직위
        	this.txtDS_ADDRESS  = this.divData.form.txtDS_ADDRESS;	// 현주소

        	// 상세정보
        	this.edtNO_CERTIFICATE = this.divData.form.edtNO_CERTIFICATE;	// 발급번호
        	this.calDT_SINCHUNG    = this.divData.form.calDT_SINCHUNG;		// 발급일자
        	this.cboTY_CERTIFICATE = this.divData.form.cboTY_CERTIFICATE;	// 발급구분
        	this.cboDS_SUBMIT      = this.divData.form.cboDS_SUBMIT;		// 발급용도

        	this.staTERM       	   = this.divData.form.staTERM;				// 기간
        	this.staTERM_bg        = this.divData.form.staTERM_bg;			// 기간
        	this.ctclYY_TERM       = this.divData.form.ctclYY_TERM;			// 기간
        	this.ctclYM_TERM       = this.divData.form.ctclYM_TERM;			// 기간
        	this.txtYM_TERM        = this.divData.form.txtYM_TERM;			// 기간

        	this.edtDS_USE         = this.divData.form.edtDS_USE;			// 용도
        	this.rdoYN_JOIN        = this.divData.form.rdoYN_JOIN;			// 입사일 구분
        	this.rdoYN_RESIDENT    = this.divData.form.rdoYN_RESIDENT;		// 주민등록번호 표기
        	this.staYN_RESIDENT    = this.divData.form.staYN_RESIDENT;
        	this.staYN_JOIN        = this.divData.form.staYN_JOIN;

        	this.staINCOME 		   = this.divData.form.staINCOME;
        	this.staINCOME_bg 	   = this.divData.form.staINCOME_bg;
        	this.calYM_INCOME_FROM = this.divData.form.calYM_INCOME_FROM;
        	this.staYM_INCOME_FROM_TO = this.divData.form.staYM_INCOME_FROM_TO;
        	this.calYM_INCOME_TO   = this.divData.form.calYM_INCOME_TO;

        	// 변경정보
        	this.ccfCD_BAL_DEPT     = this.divData.form.ccfCD_BAL_DEPT;		// 발급부서
        	this.ccfCD_BAL_POSITION = this.divData.form.ccfCD_BAL_POSITION;	// 발급직위
        	this.calDT_BAL_JOIN     = this.divData.form.calDT_BAL_JOIN;		// 일사일자
        	this.calDT_BAL_FROM     = this.divData.form.calDT_BAL_FROM;		// 재직기간
        	this.calDT_BAL_TO       = this.divData.form.calDT_BAL_TO;		// 재직기간
        	this.txtDS_REMARK       = this.divData.form.txtDS_REMARK;		// 비고

        	// 버튼
        	this.divBtns = this.divData.form.divBtns;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 신청자정보
        	this.ccfCD_CORP_REQUEST.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 법인코드
        	this.ccfCD_CORP_REQUEST.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_SABUN_REQUEST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 성명
        	this.ccfID_SABUN_REQUEST.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT_REQUEST.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 부서
        	this.ccfCD_DEPT_REQUEST.AfterCDTextChanged      = "fnAfterCDTextChanged";

        	// 대상자정보
        	this.ccfCD_CORP.BeforeUserDataSetParam     = "fnBeforeUserDataSetParam";	// 법인코드
        	this.ccfCD_CORP.AfterCDTextChanged         = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam    = "fnBeforeUserDataSetParam";	// 성명
        	this.ccfID_SABUN.AfterCDTextChanged        = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.BeforeUserDataSetParam     = "fnBeforeUserDataSetParam";	// 부서
        	this.ccfCD_DEPT.AfterCDTextChanged         = "fnAfterCDTextChanged";
        	this.ccfCD_POSITION.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 직위
        	this.ccfCD_POSITION.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	// 변경정보
        	this.ccfCD_BAL_DEPT.BeforeUserDataSetParam     = "fnBeforeUserDataSetParam";	// 발급부서
        	this.ccfCD_BAL_DEPT.AfterCDTextChanged         = "fnAfterCDTextChanged";
        	this.ccfCD_BAL_POSITION.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 직위
        	this.ccfCD_BAL_POSITION.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	this.dsList.setColumn(0, "YN_JOIN", "N");
        	this.dsList.setColumn(0, "YN_RESIDENT", "Y");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("NO_SEQ", "int");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_LOGIN", "string");

        	// 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_CORP_REQUEST", "string");
        	this.dsSave.addColumn("ID_SABUN_REQUEST", "string");
        	this.dsSave.addColumn("CD_DEPT_REQUEST", "string");
        	this.dsSave.addColumn("ID_PERSON_REQUEST", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("CD_POSITION", "string");
        	this.dsSave.addColumn("CD_DUTY", "string");
        	this.dsSave.addColumn("DS_ADDRESS", "string");
        	this.dsSave.addColumn("YN_RESIDENT", "string");
        	this.dsSave.addColumn("YN_INGAM", "string");
        	this.dsSave.addColumn("NO_CERTIFICATE", "string");
        	this.dsSave.addColumn("TY_CERTIFICATE", "string");
        	this.dsSave.addColumn("DT_SINCHUNG", "string");
        	this.dsSave.addColumn("DS_SUBMIT", "string");
        	this.dsSave.addColumn("DS_USE", "string");
        	this.dsSave.addColumn("YY_RECEIPT", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("YN_JOIN", "string");
        	this.dsSave.addColumn("YM_INCOME", "string");
        	this.dsSave.addColumn("YM_INCOME_FROM", "string");
        	this.dsSave.addColumn("YM_INCOME_TO", "string");
        	this.dsSave.addColumn("CD_BAL_DEPT", "string");
        	this.dsSave.addColumn("CD_BAL_POSITION", "string");
        	this.dsSave.addColumn("DT_BAL_JOIN", "string");
        	this.dsSave.addColumn("DT_BAL_FROM", "string");
        	this.dsSave.addColumn("DT_BAL_TO", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("YN_JOIN", "string");
        	this.dsSave.addColumn("YN_RESIDENT", "string");

        	// 직원조회
        	this.dsSelectEmp = new Dataset();
        	this.dsSelectEmp.addColumn("TY_GUBUN", "string");
        	this.dsSelectEmp.addColumn("CN_ROW", "int");
        	this.dsSelectEmp.addColumn("VALUE", "string");
        	this.dsSelectEmp.addColumn("MIN_VALUE", "string");
        	this.dsSelectEmp.addColumn("CD_CORP", "string");
        	this.dsSelectEmp.addColumn("GR_SEARCH", "string");
        	this.dsSelectEmp.addColumn("CD_DEPT", "string");
        	this.dsSelectEmp.addColumn("YN_CORP", "string");
        	this.dsSelectEmp.addColumn("TY_RETIRE", "string");
        }

        /************************************************************************
         * 콤보 설정
         ************************************************************************/
        this.fnSetCombo = function() {
           this.dsCombo = new Dataset();
           this.dsCombo.addColumn("TY_SEL"     , "string");
           this.dsCombo.addColumn("CD_PREFIX"  , "string");
           this.dsCombo.addColumn("CD_UPPREFIX", "string");

           this.dsCombo.addRow();
           this.dsCombo.setColumn(0, "TY_SEL"     , "P");	//A
           this.dsCombo.setColumn(0, "CD_PREFIX"  , "CE");

           	if (this.FormInfo.GR_SEARCH == "1" || this.gfnGetConfig("DZ", "CD_ROLE_SECRETARY") == this.FormInfo.CD_ROLE) {	// 성명
        		this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

        		if (this.gfnGetConfig("DZ", "CD_ROLE_SECRETARY") == this.FormInfo.CD_ROLE) {
        			this.dsCombo.setColumn(0, "CD_UPPREFIX", "N");
        		}
        	} else {
        		this.dsCombo.setColumn(0, "CD_UPPREFIX", "N");
        	}

           this.dsCombo.addRow();
           this.dsCombo.setColumn(1, "TY_SEL"     , "P");
           this.dsCombo.setColumn(1, "CD_PREFIX"  , "CS");
           this.dsCombo.setColumn(1, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	//var outData     = "dsTY_CERTIFICATE=combo0";
        	var outData     = "dsTY_CERTIFICATE=combo0 dsDS_SUBMIT=combo1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	this.calDT_BAL_TO.set_enable(false);
        	if (!this.gfnIsNull(this.getOwnerFrame().NO_SEQ) && this.getOwnerFrame().TY_FLAG == "U") {
        		// 수정모드
        		this.fnSelect();
        	} else {
         		// 신규등록모드
        		if (this.FormInfo.GR_SEARCH != 1) {
        			if (this.gfnIsNull(this.AuthClient.ID_PERSON)) {
        				this.gfnAlert("임직원이 아니므로 증명서 신청이 불가능합니다.");
        				return;
        			}
        		} else {
        			this.ccfCD_BAL_DEPT.set_enable(true);
        			this.ccfCD_BAL_POSITION.set_enable(true);
        			this.calDT_BAL_JOIN.set_enable(true);
        			this.calDT_BAL_FROM.set_enable(true);
        		}

        		this.dsSelectEmp.clearData();
        		this.dsSelectEmp.addRow();

        		this.dsSelectEmp.setColumn(0, "TY_GUBUN" , "1");
        		this.dsSelectEmp.setColumn(0, "CN_ROW"   , 50);
        		this.dsSelectEmp.setColumn(0, "VALUE"    , this.getOwnerFrame().ID_SABUN);
        		this.dsSelectEmp.setColumn(0, "MIN_VALUE", "");
        		this.dsSelectEmp.setColumn(0, "CD_CORP"  , this.getOwnerFrame().CD_CORP);
        		this.dsSelectEmp.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		this.dsSelectEmp.setColumn(0, "CD_DEPT"  , this.getOwnerFrame().CD_DEPT);
        		this.dsSelectEmp.setColumn(0, "YN_CORP"  , "N");
        		this.dsSelectEmp.setColumn(0, "TY_RETIRE", "");

        		var strSvcId    = "selectEmp";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "select_emp=dsSelectEmp";
        		var outData     = "dsEmp=select_emp0";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        							strSvcType, 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc);	// 통신방법 정의 [생략가능]
        	}

        	this.fnSetControl();
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {
        	if (this.gfnIsNull(this.getOwnerFrame().NO_SEQ) || this.getOwnerFrame().NO_SEQ == 0	||
        	    this.gfnIsNull(this.getOwnerFrame().ID_PERSON) || this.getOwnerFrame().ID_PERSON == 0) {
        		return;
        	}

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "ID_PERSON", this.getOwnerFrame().ID_PERSON);
        	this.dsSelect.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_LOGIN", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /*
         * 추가 버튼
         */
        this.fnAdd = function() {

        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         * 저장 버튼
         */
        this.fnSave = function() {
        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	var flag = "";
        	if (this.gfnIsNull(this.getOwnerFrame().NO_SEQ) || this.getOwnerFrame().NO_SEQ == 0) {
        		flag = "I";
        	} else {
        		flag = "U";
        	}

        	var sYY_RECEIPT = ""; 	//F 근로소득 원천징수영수증 년도
        	var sYM_INCOME = "";	//G : 갑종근로소득 원천징수확인서 년도, I 근로소득 원천징수부년도
        	if (this.cboTY_CERTIFICATE.value == "F") {
        		// 근로소득원천징수영수증(연말정산) yyyy
        		sYY_RECEIPT = this.ctclYY_TERM.form.TextBox.value;

        	} else if (this.cboTY_CERTIFICATE.value == "G" || this.cboTY_CERTIFICATE.value == "I"|| this.cboTY_CERTIFICATE.value == "GE" ) {
        		// G 갑종근로소득 원천징수확인서, I 근로소득 원천징수부 yyyyMM , GE 갑종근로소득 원천징수확인서(영문)
        		sYM_INCOME = this.ctclYM_TERM.form.TextBox.value;
        	}

        	this.dsSave.setColumn(nrow, "TY_SAVE"          , flag);
        	this.dsSave.setColumn(nrow, "NO_SEQ"           , (flag == "I") ? 0 : this.getOwnerFrame().NO_SEQ);
        	this.dsSave.setColumn(nrow, "CD_CORP_REQUEST"  , this.gfnNvl(this.dsList.getColumn(0, "CD_CORP_REQUEST"), ""));
        	this.dsSave.setColumn(nrow, "ID_SABUN_REQUEST" , this.gfnNvl(this.dsList.getColumn(0, "ID_SABUN_REQUEST"), ""));
        	this.dsSave.setColumn(nrow, "CD_DEPT_REQUEST"  , this.gfnNvl(this.dsList.getColumn(0, "CD_DEPT_REQUEST"), ""));
        	this.dsSave.setColumn(nrow, "ID_PERSON_REQUEST", this.gfnNvl(this.dsList.getColumn(0, "ID_PERSON_REQUEST"), 0));
        	this.dsSave.setColumn(nrow, "CD_CORP"          , this.gfnNvl(this.dsList.getColumn(0, "CD_CORP"), ""));
        	this.dsSave.setColumn(nrow, "ID_SABUN"         , this.gfnNvl(this.dsList.getColumn(0, "ID_SABUN"), ""));
        	this.dsSave.setColumn(nrow, "ID_PERSON"        , this.gfnNvl(this.dsList.getColumn(0, "ID_PERSON"), 0));
        	this.dsSave.setColumn(nrow, "CD_DEPT"          , this.gfnNvl(this.dsList.getColumn(0, "CD_DEPT"), ""));
        	this.dsSave.setColumn(nrow, "CD_POSITION"      , this.gfnNvl(this.dsList.getColumn(0, "CD_POSITION"), ""));
        	this.dsSave.setColumn(nrow, "CD_DUTY"          , this.gfnNvl(this.dsList.getColumn(0, "CD_DUTY"), ""));
        	this.dsSave.setColumn(nrow, "DS_ADDRESS"       , this.gfnNvl(this.dsList.getColumn(0, "DS_ADDRESS"), ""));
        	this.dsSave.setColumn(nrow, "YN_RESIDENT"      , this.gfnNvl(this.dsList.getColumn(0, "YN_RESIDENT"), ""));
        	this.dsSave.setColumn(nrow, "YN_INGAM"         , this.gfnNvl(this.dsList.getColumn(0, "YN_INGAM"), ""));
        	this.dsSave.setColumn(nrow, "NO_CERTIFICATE"   , this.gfnNvl(this.dsList.getColumn(0, "NO_CERTIFICATE"), ""));
        	this.dsSave.setColumn(nrow, "TY_CERTIFICATE"   , this.gfnNvl(this.dsList.getColumn(0, "TY_CERTIFICATE"), ""));
        	this.dsSave.setColumn(nrow, "DT_SINCHUNG"      , this.gfnNvl(this.dsList.getColumn(0, "DT_SINCHUNG"), ""));
        	this.dsSave.setColumn(nrow, "DS_SUBMIT"        , this.gfnNvl(this.dsList.getColumn(0, "DS_SUBMIT"), ""));
        	this.dsSave.setColumn(nrow, "DS_USE"           , this.gfnNvl(this.dsList.getColumn(0, "DS_USE"), ""));
        	this.dsSave.setColumn(nrow, "YY_RECEIPT"       , sYY_RECEIPT);
        	this.dsSave.setColumn(nrow, "DS_REMARK"        , this.gfnNvl(this.dsList.getColumn(0, "DS_REMARK"), ""));
        	this.dsSave.setColumn(nrow, "YN_JOIN"          , this.gfnNvl(this.dsList.getColumn(0, "YN_JOIN"), ""));
        	this.dsSave.setColumn(nrow, "YM_INCOME"        , sYM_INCOME);
        	this.dsSave.setColumn(nrow, "YM_INCOME_FROM"   , this.gfnNvl(this.dsList.getColumn(0, "YM_INCOME_FROM"), ""));
        	this.dsSave.setColumn(nrow, "YM_INCOME_TO"     , this.gfnNvl(this.dsList.getColumn(0, "YM_INCOME_TO"), ""));
        	this.dsSave.setColumn(nrow, "CD_BAL_DEPT"      , this.gfnNvl(this.dsList.getColumn(0, "CD_BAL_DEPT"), ""));
        	this.dsSave.setColumn(nrow, "CD_BAL_POSITION"  , this.gfnNvl(this.dsList.getColumn(0, "CD_BAL_POSITION"), ""));
        	this.dsSave.setColumn(nrow, "DT_BAL_JOIN"      , this.dsList.getColumn(0, "YN_JOIN") == "Y" ? this.gfnNvl(this.dsList.getColumn(0, "DT_BAL_GROUPJOIN"), "") : this.gfnNvl(this.dsList.getColumn(0, "DT_BAL_JOIN"), ""));
        	this.dsSave.setColumn(nrow, "DT_BAL_FROM"      , this.dsList.getColumn(0, "YN_JOIN") == "Y" ? this.gfnNvl(this.dsList.getColumn(0, "DT_BAL_GROUPJOIN"), "") : this.gfnNvl(this.dsList.getColumn(0, "DT_BAL_FROM"), ""));
        	this.dsSave.setColumn(nrow, "DT_BAL_TO"        , this.gfnNvl(this.dsList.getColumn(0, "DT_BAL_TO"), ""));
        	this.dsSave.setColumn(nrow, "GR_SEARCH"        , this.FormInfo.GR_SEARCH);
        	this.dsSave.setColumn(nrow, "TY_AUTH"          , this.FormInfo.TY_AUTH);
        	this.dsSave.setColumn(nrow, "GR_DEPT"          , this.AuthClient.CD_DEPT);
        	this.dsSave.setColumn(nrow, "ID_USER"          , this.AuthClient.ID_USER);
        	this.dsSave.setColumn(nrow, "YN_JOIN"		   , this.gfnNvl(this.dsList.getColumn(0, "YN_JOIN"), ""));
        	this.dsSave.setColumn(nrow, "YN_RESIDENT"	   , this.gfnNvl(this.dsList.getColumn(0, "YN_RESIDENT"), ""));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /*
         * 엑셀 버튼
         */
        this.fnExcel = function() {

        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {

        }

        // 신청내역 바인딩
        this.fnSetControl = function() {
        	/* 신청자정보 */
        	this.ccfCD_CORP_REQUEST.form.set_enable(false);		// 법인코드
        	this.ccfCD_DEPT_REQUEST.form.set_enable(false);		// 부서
        	if (this.FormInfo.GR_SEARCH == "1" || this.gfnGetConfig("DZ", "CD_ROLE_SECRETARY") == this.FormInfo.CD_ROLE) {	// 성명
        		this.ccfID_SABUN_REQUEST.form.set_enable(true);
        		this.ccfID_SABUN.form.set_enable(true);
        		//this.dsTY_CERTIFICATE.filter("");

        // 		if (this.gfnGetConfig("DZ", "CD_ROLE_SECRETARY") == this.FormInfo.CD_ROLE) {
        // 			this.dsTY_CERTIFICATE.filter("CD_CODE != 'EE' && CD_CODE != 'EK'");
        // 		}
        	} else {
        		this.ccfID_SABUN_REQUEST.form.set_enable(false);
        		this.ccfID_SABUN.form.set_enable(false);
        		//this.dsTY_CERTIFICATE.filter("CD_CODE != 'EE' && CD_CODE != 'EK'");
        	}

        	this.fnSetCalendarEnable(); // 발급일자: 발급구분에 따른 활성화처리

        	var sYN_APPROVE = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "YN_APPROVE"), "");
        	if (sYN_APPROVE != "") {	// 결재중, 결재완료인 경우
        		if (this.FormInfo.GR_SEARCH == 1) {
        			// 대상자정보
        			this.ccfCD_CORP.set_enable(false);		// 법인코드
        			this.ccfID_SABUN.set_enable(true);		// 성명
        			this.ccfCD_DEPT.set_enable(false);		// 부서
        			this.ccfCD_POSITION.set_enable(false);	// 직위
        			this.txtDS_ADDRESS.set_enable(false);	// 현주소

        			// 상세정보
        			this.cboTY_CERTIFICATE.set_enable(true);	// 발급구분
        			this.ctclYY_TERM.set_enable(false);			// 기간
        			this.ctclYM_TERM.set_enable(false);
        			this.cboDS_SUBMIT.set_enable(true);			// 발급용도
        			this.rdoYN_JOIN.set_enable(false);
        			this.rdoYN_RESIDENT.set_enable(false);
        			this.calYM_INCOME_FROM.set_enable(true);	// 소득기간
        			this.calYM_INCOME_TO.set_enable(true);		// 소득기간

        			// 발급정보
        			this.ccfCD_BAL_DEPT.set_enable(true);		// 발급부서
        			this.ccfCD_BAL_POSITION.set_enable(true);	// 발급직위
        			this.calDT_BAL_JOIN.set_enable(true);		// 입사일자
        			this.calDT_BAL_FROM.set_enable(true);		// 재직기간(FROM)
        			this.calDT_BAL_TO.set_enable(true);			// 재직기간(TO)
        			this.txtDS_REMARK.set_enable(true);			// 비고
        		} else {
        			// 대상자정보
        			this.ccfCD_CORP.set_enable(false);		// 법인코드
        			this.ccfID_SABUN.set_enable(false);		// 성명
        			this.ccfCD_DEPT.set_enable(false);		// 부서
        			this.ccfCD_POSITION.set_enable(false);	// 직위
        			this.txtDS_ADDRESS.set_enable(false);	// 현주소

        			// 상세정보
        			this.cboTY_CERTIFICATE.set_enable(false);	// 발급구분
        			this.ctclYY_TERM.set_enable(false);			// 기간
        			this.ctclYM_TERM.set_enable(false);
        			this.cboDS_SUBMIT.set_enable(false);		// 발급용도
        			this.calYM_INCOME_FROM.set_enable(true);	// 소득기간
        			this.calYM_INCOME_TO.set_enable(true);		// 소득기간

        			// 발급정보
        			this.ccfCD_BAL_DEPT.set_enable(false);		// 발급부서
        			this.ccfCD_BAL_POSITION.set_enable(false);	// 발급직위
        			this.calDT_BAL_JOIN.set_enable(false);		// 입사일자
        			this.calDT_BAL_FROM.set_enable(false);		// 재직기간(FROM)
        			this.calDT_BAL_TO.set_enable(false);		// 재직기간(TO)
        			this.txtDS_REMARK.set_enable(false);		// 비고
        		}

        		// 버튼
        		if (sYN_APPROVE == "Y") {
        			this.divBtns.form.btnOK.set_enable(false);
        		} else {
        			this.divBtns.form.btnOK.set_enable(true);
        		}
        	} else {
        		if (this.FormInfo.GR_SEARCH == "1") {
        			this.ccfCD_CORP.form.set_enable(true);
        		} else {
        			this.ccfCD_CORP.form.set_readonly(false);
        		}
        	}
        	//default
        // 	this.rdoYN_JOIN.set_value("N");
        // 	this.rdoYN_RESIDENT.set_value("Y");
         }

        this.fnSetCalendarEnable = function(){
        	var TY_CERTIFICATE = this.gfnNvl(this.dsList.getColumn(0, "TY_CERTIFICATE"), "");
        	// A	재직증명서
        	// C	경력증명서
        	// E	퇴직증명서
        	// F	근로소득원천징수영수증(연말정산)
        	// G	갑종근로소득 원천징수확인서
        	// I	근로소득 원천징수부
        	// --F   근로소득원천징수영수증(연말정산)  >> 기간 : YYYY
        	// --G   갑종근로소득 원천징수확인서 >> 기간 : YYYY-MM
        	// --I   근로소득 원천징수부 >> 기간 : YYYY-MM

        // 	this.ctclYY_TERM.form.TextBox.set_value("");
        // 	this.calYM_INCOME_FROM.form.TextBox.set_value("");
        // 	this.calYM_INCOME_TO.form.TextBox.set_value("");
        	// 기간
        	this.ctclYY_TERM.set_visible(false);
        	this.ctclYM_TERM.set_visible(false);
        	this.ctclYY_TERM.set_enable(false);
        	this.ctclYM_TERM.set_enable(false);

        	this.staINCOME.set_visible(false);
        	this.staINCOME_bg.set_visible(false);
        	this.calYM_INCOME_FROM.set_visible(false);
        	this.staYM_INCOME_FROM_TO.set_visible(false);
        	this.calYM_INCOME_TO.set_visible(false);

        	this.calYM_INCOME_FROM.set_enable(false);	// 소득기간
        	this.calYM_INCOME_TO.set_enable(false);		// 소득기간

        	this.staTERM.set_top("staDS_SUBMIT:-1");
         	this.staTERM_bg.set_top("staTERM:-30");
         	this.txtYM_TERM.set_top("staTERM:-24");

        	if (this.gfnIsNull(TY_CERTIFICATE) || TY_CERTIFICATE == "A" || TY_CERTIFICATE == "C" ||TY_CERTIFICATE == "E") {
        		this.ctclYY_TERM.set_visible(false);
        		this.ctclYY_TERM.set_enable(false);
        	} else if (TY_CERTIFICATE == "F" || TY_CERTIFICATE == "G" || TY_CERTIFICATE == "I" || TY_CERTIFICATE == "GE") {
        		if (TY_CERTIFICATE == "F") {
        			this.ctclYY_TERM.set_visible(true);
        			this.ctclYY_TERM.set_enable(true);

        			this.staINCOME.set_visible(true);
        			this.staINCOME_bg.set_visible(true);
        			this.staINCOME.set_text("귀속년도");
        			this.staTERM.set_top("staINCOME:-1");
         			this.staTERM_bg.set_top("staTERM:-30");
        			this.txtYM_TERM.set_top("staTERM:-24");
        		} else if (TY_CERTIFICATE == "G" || TY_CERTIFICATE == "I" || TY_CERTIFICATE == "GE"  ) {
        			this.ctclYM_TERM.set_visible(true);
        			this.ctclYM_TERM.set_enable(true);
        			this.ctclYY_TERM.set_visible(false);
        			this.ctclYY_TERM.set_enable(false);

        			this.staINCOME.set_visible(true);
        			this.staINCOME_bg.set_visible(true);
        			this.staINCOME.set_text("소득기간");
        			this.calYM_INCOME_FROM.set_visible(true);
        			this.staYM_INCOME_FROM_TO.set_visible(true);
        			this.calYM_INCOME_TO.set_visible(true);

        			this.calYM_INCOME_FROM.set_enable(true);	// 소득기간
        			this.calYM_INCOME_TO.set_enable(true);		// 소득기간

        			this.staTERM.set_top("staINCOME:-1");
         			this.staTERM_bg.set_top("staTERM:-30");
        			this.txtYM_TERM.set_top("staTERM:-24");
        		}
        	}
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValid = function() {
         	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
         		this.gfnAlert("법인코드를 입력하세요.", "fnValidCallback");
         		return false;
         	}
        	if (this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ccfID_SABUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("성명을 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.cboTY_CERTIFICATE.value)) {
        		this.fnValidCallback = function() {
        			this.cboTY_CERTIFICATE.setFocus();
        		}
        		this.gfnAlert("발급구분을 선택해주세요.", "fnValidCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.cboDS_SUBMIT.value)) {
        		this.fnValidCallback = function() {
        			this.cboDS_SUBMIT.setFocus();
        		}
        		this.gfnAlert("발급용도를 선택해주세요.", "fnValidCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.ccfCD_BAL_DEPT.form.CDTextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ccfCD_BAL_DEPT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("발급부서를 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.ccfCD_BAL_POSITION.form.CDTextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ccfCD_BAL_POSITION.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("발급직위를 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.calDT_BAL_TO.value) && (this.cboTY_CERTIFICATE.value === 'EK' || this.cboTY_CERTIFICATE.value === 'EE')) {
        		this.fnValidCallback = function() {
        			this.calDT_BAL_TO.setFocus();
        		}
        		this.gfnAlert("퇴사일자를 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.rdoYN_JOIN.value)) {
        		this.fnValidCallback = function() {
        			this.rdoYN_JOIN.setFocus();
        		}
        		this.gfnAlert("입사일구분을 입력해주세요.", "fnValidCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.rdoYN_RESIDENT.value)) {
        		this.fnValidCallback = function() {
        			this.rdoYN_RESIDENT.setFocus();
        		}
        		this.gfnAlert("주민등록번호뒷자리 표기 구분을 입력해주세요.", "fnValidCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.calYM_INCOME_FROM.form.TextBox.value) && (this.cboTY_CERTIFICATE.value === 'G' || this.cboTY_CERTIFICATE.value === 'GE')) {
        		this.fnValidCallback = function() {
        			this.calYM_INCOME_FROM.setFocus();
        		}
        		this.gfnAlert("소득기간 시작년월을 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.calYM_INCOME_TO.form.TextBox.value) && (this.cboTY_CERTIFICATE.value === 'G' || this.cboTY_CERTIFICATE.value === 'GE')) {
        		this.fnValidCallback = function() {
        			this.calYM_INCOME_TO.setFocus();
        		}
        		this.gfnAlert("소득기간 종료년월을 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.ctclYY_TERM.form.TextBox.value) && (this.cboTY_CERTIFICATE.value === 'F')) {
        		this.fnValidCallback = function() {
        			this.ctclYY_TERM.setFocus();
        		}
        		this.gfnAlert("귀속년도를 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 확인버튼
        this.btnOK_onclick = function(obj, e){
        	if (!this.fnSaveValid()) return;

        	this.gfnConfirm("저장하시겠습니까?", "fnOKCallback");
        }

        // 취소버튼
        this.btnCANCLE_onclick = function(obj, e) {
        	this.getParentContext().close(false);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "select") {
        		this.fnSetControl();
        	} else if (svcID == "selectEmp") {
        		this.dsList.clearData();
        		this.dsList.addRow();
        		// 신청자정보
        		this.dsList.setColumn(0, "CD_CORP_REQUEST"  , this.dsEmp.getColumn(0, "CD_CORP"));		// 법인
        		this.dsList.setColumn(0, "DS_CORP_REQUEST"  , this.dsEmp.getColumn(0, "DS_CORP"));
        		this.dsList.setColumn(0, "ID_SABUN_REQUEST" , this.dsEmp.getColumn(0, "ID_SABUN"));		// 성명
        		this.dsList.setColumn(0, "DS_HNAME_REQUEST" , this.dsEmp.getColumn(0, "DS_HNAME"));
        		this.dsList.setColumn(0, "ID_PERSON_REQUEST", this.dsEmp.getColumn(0, "ID_PERSON"));
        		this.dsList.setColumn(0, "CD_DEPT_REQUEST"  , this.dsEmp.getColumn(0, "CD_DEPT"));		// 부서
        		this.dsList.setColumn(0, "DS_DEPT_REQUEST"  , this.dsEmp.getColumn(0, "DS_DEPT"));
        		// 대상자정보
        		this.dsList.setColumn(0, "CD_CORP"    , this.dsEmp.getColumn(0, "CD_CORP"));		// 법인
        		this.dsList.setColumn(0, "DS_CORP"    , this.dsEmp.getColumn(0, "DS_CORP"));
        		this.dsList.setColumn(0, "ID_SABUN"   , this.dsEmp.getColumn(0, "ID_SABUN"));		// 성명
        		this.dsList.setColumn(0, "DS_HNAME"   , this.dsEmp.getColumn(0, "DS_HNAME"));
        		this.dsList.setColumn(0, "ID_PERSON"  , this.dsEmp.getColumn(0, "ID_PERSON"));
        		this.dsList.setColumn(0, "CD_DEPT"    , this.dsEmp.getColumn(0, "CD_DEPT"));		// 부서
        		this.dsList.setColumn(0, "DS_DEPT"    , this.dsEmp.getColumn(0, "DS_DEPT"));
        		this.dsList.setColumn(0, "CD_POSITION", this.dsEmp.getColumn(0, "CD_POSITION"));	// 직위
        		this.dsList.setColumn(0, "DS_POSITION", this.dsEmp.getColumn(0, "DS_POSITION"));
        		this.dsList.setColumn(0, "DS_POSITION", this.dsEmp.getColumn(0, "DS_POSITION"));
        		this.dsList.setColumn(0, "DS_ADDRESS" , this.dsEmp.getColumn(0, "DS_ADDRESS"));		// 현주소
        		// 변경정보
        		this.dsList.setColumn(0, "CD_BAL_DEPT"    , this.dsEmp.getColumn(0, "CD_DEPT"));		// 발급부서
        		this.dsList.setColumn(0, "DS_BAL_DEPT"    , this.dsEmp.getColumn(0, "DS_DEPT"));
        		this.dsList.setColumn(0, "CD_BAL_POSITION", this.dsEmp.getColumn(0, "CD_POSITION"));	// 발급직위
        		this.dsList.setColumn(0, "DS_BAL_POSITION", this.dsEmp.getColumn(0, "DS_POSITION"));
        		this.dsList.setColumn(0, "DT_BAL_JOIN"    , this.dsEmp.getColumn(0, "DT_JOIN"));	 	// 입사일자
        		this.dsList.setColumn(0, "DT_BAL_FROM"    , this.dsEmp.getColumn(0, "DT_JOIN"));		// 재직기간(FROM)
        		this.dsList.setColumn(0, "DT_BAL_TO"      , this.dsEmp.getColumn(0, "DT_RETIRE"));		// 재직기간(TO)

        		//default
        		this.rdoYN_JOIN.set_value("N");
        		this.rdoYN_RESIDENT.set_value("Y");
        		this.rdoYN_JOIN.set_enable(false);
        		this.rdoYN_RESIDENT.set_enable(false);
        	}  else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.fnWorkAfter = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("신청이 완료되었습니다.", "fnWorkAfter");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        // 확인버튼 콜백
        this.fnOKCallback = function(strId, val) {
        	if (val) {
        		this.fnSave();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 신청자정보
        	if (id == "ccfCD_CORP_REQUEST") {			// 법인코드
        		;
        	} else if (id == "ccfID_SABUN_REQUEST") {	// 성명
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsList.getColumn(0, "CD_CORP_REQUEST"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , "");
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	} else if (id == "ccfCD_DEPT_REQUEST") {	// 부서
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.gfnNvl(this.dsList.getColumn(0, "CD_DEPT_REQUEST"), ""));
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.gfnNvl(this.dsList.getColumn(0, "CD_CORP_REQUEST"), "%"));
        		dsUserParam.setColumn(nrow, "YN_DELETE", "N");
        	}

        	// 대상자정보
        	else if (id == "ccfID_SABUN") {		// 사번
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsList.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , "");
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	} else if (id == "ccfCD_DEPT") {	// 부서
        		dsUserParam.setColumn(nrow, "GR_SEARCH" , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"   , this.gfnNvl(this.dsList.getColumn(0, "CD_DEPT"), ""));
        		dsUserParam.setColumn(nrow, "CD_CORP"   , this.gfnNvl(this.dsList.getColumn(0, "CD_CORP"), ""));
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        	} else if (id == "ccfCD_POSITION") {	// 직위
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");
        	}

        	// 변경정보
        	else if (id == "ccfCD_BAL_DEPT") {	// 발급부서
        		dsUserParam.setColumn(nrow, "GR_SEARCH" , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"   , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP"   , this.gfnNvl(this.dsList.getColumn(0, "CD_CORP"), ""));
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        	} else if (id == "ccfCD_BAL_POSITION") {	// 발급직위
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	// 신청자정보
        	if (id == "ccfID_SABUN_REQUEST") {	// 성명
         		if (arr.length > 0) {
        			this.dsList.setColumn(0, "CD_DEPT_REQUEST", arr[0]["CD_DEPT"]);
        			this.dsList.setColumn(0, "DS_DEPT_REQUEST", arr[0]["DS_DEPT"]);
         		}
        	}

        	// 대상자정보
        	else if (id == "ccfID_SABUN") {	// 성명
        		if (arr.length > 0) {
        			// 대상자정보
        			this.dsList.setColumn(0, "ID_PERSON"  , arr[0]["ID_PERSON"]);	// 대상자 ID_PERSON
        			this.dsList.setColumn(0, "CD_DEPT"    , arr[0]["CD_DEPT"]);		// 부서
        			this.dsList.setColumn(0, "DS_DEPT"    , arr[0]["DS_DEPT"]);
        			this.dsList.setColumn(0, "CD_POSITION", arr[0]["CD_POSITION"]);	// 직위
        			this.dsList.setColumn(0, "DS_POSITION", arr[0]["DS_POSITION"]);
        			this.dsList.setColumn(0, "DS_ADDRESS" , arr[0]["DS_ADDRESS"]);	// 현주소

        			// 변경정보
        			this.dsList.setColumn(0, "CD_BAL_DEPT"    , arr[0]["CD_DEPT"]);		// 부서
        			this.dsList.setColumn(0, "DS_BAL_DEPT"    , arr[0]["DS_DEPT"]);
        			this.dsList.setColumn(0, "CD_BAL_POSITION", arr[0]["CD_POSITION"]);	// 직위
        			this.dsList.setColumn(0, "DS_BAL_POSITION", arr[0]["DS_POSITION"]);
        			this.dsList.setColumn(0, "DS_BAL_POSITION", arr[0]["DS_POSITION"]);
        			this.dsList.setColumn(0, "DT_BAL_JOIN"    , arr[0]["DT_JOIN"]);		// 입사일자
        			this.dsList.setColumn(0, "DT_BAL_FROM"    , arr[0]["DT_JOIN"]);		// 재직기간(FROM)
        			this.dsList.setColumn(0, "DT_BAL_TO"      , arr[0]["DT_RETIRE"]);	// 재직기간(TO)
        			this.dsList.setColumn(0, "DT_BAL_GROUPJOIN"      , arr[0]["DT_GROUPJOIN"]);	// 재직기간(TO)
        		} else {
        			// 대상자정보
        			this.dsList.setColumn(0, "CD_DEPT"    , "");	// 부서
        			this.dsList.setColumn(0, "DS_DEPT"    , "");
        			this.dsList.setColumn(0, "CD_POSITION", "");	// 직위
        			this.dsList.setColumn(0, "DS_POSITION", "");
        			this.dsList.setColumn(0, "DS_ADDRESS" , "");	// 현주소

        			// 변경정보
        			this.dsList.setColumn(0, "CD_BAL_DEPT"    , "");	// 부서
        			this.dsList.setColumn(0, "DS_BAL_DEPT"    , "");
        			this.dsList.setColumn(0, "CD_BAL_POSITION", "");	// 직위
        			this.dsList.setColumn(0, "DS_BAL_POSITION", "");
        			this.dsList.setColumn(0, "DS_BAL_POSITION", "");
        			this.dsList.setColumn(0, "DT_BAL_JOIN"    , "");	// 입사일자
        			this.dsList.setColumn(0, "DT_BAL_FROM"    , "");	// 재직기간(FROM)
        			this.dsList.setColumn(0, "DT_BAL_TO"      , "");	// 재직기간(TO)
        			this.dsList.setColumn(0, "DT_BAL_GROUPJOIN"      , "");	// 재직기간(TO)
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsList_onvaluechanged = function(obj, e) {
        	var strColid = e.columnid;
        	if (e.oldvalue != e.newvalue) {
        		if (strColid == "TY_CERTIFICATE") {
        			this.fnSetCalendarEnable();
        		}
        	}
        }

        this.fnResetCodeFinder = function(obj, dataset, columns) {
        	obj.form.fnCodeFindClear();
        	for (var i = 0; i < columns.length; i++) {
        		dataset.setColumn(0, columns[i], "");
        	}
        }

        this.fnSetCodeFinder = function(obj, value) {
        	obj.form.CDTextBox.set_value(value);
        	obj.form.fnCodeFindLoad();
        }

        this.fnResetObjectValue = function(obj, dataset, columns) {
        	obj.set_value("");
        	for (var i = 0; i < columns.length; i++) {
        		dataset.setColumn(0, columns[i], "");
        	}
        }

        this.fnSetObjectValue = function(obj, dataset, column, value) {
        	obj.set_value(value);
        	dataset.setColumn(0, column, value);
        }

        this.divData_cboTY_CERTIFICATE_onitemchanged = function(obj,e) {
        	// 퇴직증명서
        	if (e.postvalue === 'EK' || e.postvalue === 'EE') {
        		this.calDT_BAL_TO.set_enable(true);
        		this.rdoYN_JOIN.set_enable(false);
        		this.rdoYN_RESIDENT.set_enable(false);
        		this.rdoYN_JOIN.set_index(0);
        	} else if (e.postvalue === 'AK' || e.postvalue === 'AE') {
        		this.calDT_BAL_TO.set_enable(false);
        		this.rdoYN_JOIN.set_enable(true);
        		this.rdoYN_RESIDENT.set_enable(false);
        	} else if (e.postvalue === 'CK' || e.postvalue === 'CE') {
        		this.calDT_BAL_TO.set_enable(false);
        		this.rdoYN_JOIN.set_enable(true);
        		this.rdoYN_RESIDENT.set_enable(false);
        	} else if (e.postvalue === 'G'|| e.postvalue === 'GE') {
        		this.calDT_BAL_TO.set_enable(false);
        		this.rdoYN_JOIN.set_index(0);
        		this.rdoYN_JOIN.set_enable(false);
        		this.rdoYN_RESIDENT.set_enable(true);
        	} else {
        		this.calDT_BAL_TO.set_enable(false);
        		this.calDT_BAL_TO.set_value('');
        		this.rdoYN_JOIN.set_enable(false);
        		this.rdoYN_JOIN.set_index(0);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staCD_CORP_bg.addEventHandler("onclick",this.sta11_onclick,this);
            this.divData.form.txtDS_ADDRESS.addEventHandler("onchanged",this.divData_txtDS_ADDRESS_onchanged,this);
            this.divData.form.cboTY_CERTIFICATE.addEventHandler("onitemchanged",this.divData_cboTY_CERTIFICATE_onitemchanged,this);
            this.divData.form.staTITLE_CHANGE.addEventHandler("onclick",this.divData_staTITLE_CHANGE_onclick,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_CERTIFICATE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
