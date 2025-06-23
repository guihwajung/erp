(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAW_RETIRE_REQUEST");
            this.set_titletext("사직서");
            this.getSetter("maxheight").set("960");
            this.getSetter("maxwidth").set("995");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFileList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_OCCUPATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OCCUPATION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RETIRE_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_IRP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PROVATION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOMEPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HANDPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OFFICEPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/><Column id=\"TTP_NO_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"TTP_DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TTP_DS_RETIRE_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TTP_NO_IRP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAWPR_RETIRE_REQUEST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAWPR_RETIRE_REQUEST_SAVE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DAWPR_RETIRE_REQUEST_DELETE</Col></Row><Row><Col id=\"TARGET\">fileSelect</Col><Col id=\"SP\">DAWPR_RETIRE_REQUEST_FILE_SELECT</Col></Row><Row><Col id=\"TARGET\">aprv</Col><Col id=\"SP\">DAWPR_RETIRE_REQUEST_APRV_UPDATE</Col></Row><Row><Col id=\"TARGET\">aprv_execute</Col><Col id=\"SP\">DAWPR_RETIRE_REQUEST_APRV_EXECUTE</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DAWPR_RETIRE_REQUEST_PRINT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RETIRE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnAprvConnect",null,"5","100","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("결재문서조회");
            obj.set_cssclass("btn_WF_function");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnAprv",null,"5","75","26","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_function");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"5","51","26","btnAprv:4",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_action");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnPrint",null,"5","51","26","btnAprv:4",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_function");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"5","75","26","btnPrint:4",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("임시저장");
            obj.set_enable("true");
            obj.set_cssclass("btn_WF_function");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnInit",null,"5","112","26","btnPrint:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("결재문서초기화");
            obj.set_cssclass("btn_WF_function");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","10","15","50%","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("사직서작성");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME","0","staTITLE:5","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME_bg","staDS_HNAME:-1","staDS_HNAME:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_HNAME","staDS_HNAME:5","staDS_HNAME:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0","staDS_HNAME:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_bg","staCD_DEPT:-1","staCD_DEPT:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_DEPT","staCD_DEPT:5","staCD_DEPT:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PROVATION","0","staCD_DEPT:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PROVATION_bg","staDT_PROVATION:-1","staDT_PROVATION:-30","836","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_PROVATION","staDT_PROVATION:5","staDT_PROVATION:-25","300","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ZIP","0","staDT_PROVATION:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ZIP_bg","staCD_ZIP:-1","staCD_ZIP:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_ZIP","staCD_ZIP:5","staCD_ZIP:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HOMEPHONE","0","staCD_ZIP:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("자택전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HOMEPHONE_bg","staDS_HOMEPHONE:-1","staDS_HOMEPHONE:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_HOMEPHONE","staDS_HOMEPHONE:5","staDS_HOMEPHONE:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRE","0","staDS_HOMEPHONE:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("퇴직예정일");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRE_bg","staDT_RETIRE:-1","staDT_RETIRE:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_RETIRE","staDT_RETIRE:5","staDT_RETIRE:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_RETIRE_DETAIL","0","staDT_RETIRE:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("비고(상세사유)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_RETIRE_DETAIL_bg","staDS_RETIRE_DETAIL:-1","staDS_RETIRE_DETAIL:-30","518","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_RETIRE_DETAIL","staDS_RETIRE_DETAIL:5","staDS_RETIRE_DETAIL:-25","507","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","staDS_HNAME_bg:-1","staDS_HNAME_bg:-30","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg","staID_SABUN:-1","staID_SABUN:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtID_SABUN","staID_SABUN:5","staID_SABUN:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_OCCUPATION","staCD_DEPT_bg:-1","staCD_DEPT_bg:-30","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_OCCUPATION_bg","staDS_OCCUPATION:-1","staDS_OCCUPATION:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_OCCUPATION","staDS_OCCUPATION:5","staDS_OCCUPATION:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ADDRESS","staCD_ZIP_bg:-1","staCD_ZIP_bg:-30","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ADDRESS_bg","staDS_ADDRESS:-1","staDS_ADDRESS:-30","518","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_ADDRESS","staDS_ADDRESS:5","staDS_ADDRESS:-25","508","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HANDPHONE","staDS_HOMEPHONE_bg:-1","staDS_HOMEPHONE_bg:-30","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HANDPHONE_bg","staDS_HANDPHONE:-1","staDS_HANDPHONE:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_HANDPHONE","staDS_HANDPHONE:5","staDS_HANDPHONE:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_RETIRE","staDT_RETIRE_bg:-1","staDT_RETIRE_bg:-30","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("퇴직사유");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_RETIRE_bg","staNO_RETIRE:-1","staNO_RETIRE:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfNO_RETIRE","staNO_RETIRE:5","staNO_RETIRE:-25","190","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("0");
            obj.set_taborder("36");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION","staID_SABUN_bg:-1","staID_SABUN_bg:-30","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION_bg","staCD_POSITION:-1","staCD_POSITION:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_POSITION","staCD_POSITION:5","staCD_POSITION:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_EMPTYPE","staDS_OCCUPATION_bg:-1","staDS_OCCUPATION_bg:-30","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("직원구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_EMPTYPE_bg","staCD_EMPTYPE:-1","staCD_EMPTYPE:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_EMPTYPE","staCD_EMPTYPE:5","staCD_EMPTYPE:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_OFFICEPHONE","staDS_HANDPHONE_bg:-1","staDS_HANDPHONE_bg:-30","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("구내전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_OFFICEPHONE_bg","staDS_OFFICEPHONE:-1","staDS_OFFICEPHONE:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_OFFICEPHONE","staDS_OFFICEPHONE:5","staDS_OFFICEPHONE:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL","staNO_RETIRE_bg:-1","staNO_RETIRE_bg:-30","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("사외이메일 [①]");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EMAILbg","staDS_EMAIL:-1","staDS_EMAIL:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMAIL","staDS_EMAIL:5","staDS_EMAIL:-25","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_FILES","staDS_RETIRE_DETAIL_bg:-1","staDS_RETIRE_DETAIL_bg:-30","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_FILES_bg","staDS_FILES:-1","staDS_FILES:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_FILES","staDS_FILES:5","staDS_FILES:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            obj.set_text("파일갯수:0개");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTile02_00_00","10","staDS_RETIRE_DETAIL:10","20.41%","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("IRP계좌정보 [②]");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_BANK","0","staTile02_00_00:5","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("은행명(코드)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_BANK_bg","staCD_BANK:-1","staCD_BANK:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_BANK","staCD_BANK:5","staCD_BANK:-25","190","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DFX_CFBANKCODE");
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("45");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_IRP","staCD_BANK_bg:-1","staCD_BANK_bg:-30","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("IRP계좌번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_IRP_bg","staNO_IRP:-1","staNO_IRP:-30","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_IRP","staNO_IRP:5","staNO_IRP:-25","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc08","35","staCD_BANK:0","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc09","190","staDesc08:4","170","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("상기 본인은 위 사유로 인하여( ");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRE_2","staDesc09:1","staDesc08:4","70","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("ta_WF_tablelabelY");
            obj.set_color("#2561ba");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc10","staDT_RETIRE_2:5","staDesc08:4","400","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text(") 부로 본직을 사직하고자 하오니 승인하여 주시기 바랍니다.");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc12","35","staDesc10:8","800","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("작성일 : ");
            obj.set_textAlign("right");
            obj.set_font("bold 12px/normal \"Dotum\"");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_DAY","staDesc12:5","staDesc10:8","70","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("ta_WF_tablelabelY");
            obj.set_color("#2561ba");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc13","35","staDesc12:4","800","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("생년월일 : ");
            obj.set_textAlign("right");
            obj.set_font("bold 12px/normal \"Dotum\"");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BIRTH","staDesc13:5","staDesc12:4","70","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("ta_WF_tablelabelY");
            obj.set_color("#2561ba");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc14","35","staDesc13:4","800","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("성명 : ");
            obj.set_textAlign("right");
            obj.set_font("bold 12px/normal \"Dotum\"");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME_2","staDesc14:5","staDesc13:4","70","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("ta_WF_tablelabelY");
            obj.set_color("#2561ba");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc15","0","staDesc14:4",null,"33","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("CARBONCO Pte. Ltd. 대표자 귀하");
            obj.set_textAlign("center");
            obj.set_font("bold 28px/normal \"Dotum\"");
            obj.set_cssclass("ta_WF_tablelabelY");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnFileDown","5","staDesc15:5","130","26",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("첨부파일 다운로드");
            obj.set_cssclass("btn_WF_action");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTile03_00_00","10","btnFileDown:2","20.41%","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("첨부파일 업로드 [③]");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTile03_00_00:0","955","244",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData_foot","0","objGrid:15",null,"80.0","0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta001","0","5","100","21",null,null,null,null,null,null,this.divData.form.divData_foot.form);
            obj.set_taborder("1");
            obj.set_text("○");
            obj.set_font("bold 18px/normal \"Dotum\"");
            obj.set_color("#ff0000");
            this.divData.form.divData_foot.addChild(obj.name, obj);

            obj = new Static("sta002","3","5","100","21",null,null,null,null,null,null,this.divData.form.divData_foot.form);
            obj.set_taborder("1");
            obj.set_text(" !");
            obj.set_font("bold 11px/normal \"Dotum\"");
            obj.set_color("#ff0000");
            this.divData.form.divData_foot.addChild(obj.name, obj);

            obj = new Static("sta00","0","5","100","21",null,null,null,null,null,null,this.divData.form.divData_foot.form);
            obj.set_taborder("1");
            obj.set_text("     [작성안내]");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divData_foot.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","5","800","21","5",null,null,null,null,null,this.divData.form.divData_foot.form);
            obj.set_taborder("1");
            obj.set_text(" ① 사외이메일 입력시 퇴직정산 서류 수신을 위한 사외 개인 e-mail을 입력 바랍니다.");
            obj.set_textAlign("left");
            this.divData.form.divData_foot.addChild(obj.name, obj);

            obj = new Static("sta02","sta00:-1","sta01:4","700","21",null,null,null,null,null,null,this.divData.form.divData_foot.form);
            obj.set_taborder("1");
            obj.set_text(" ② 퇴직(예정)자는 반드시 사직서 작성 전 IRP 계좌 개설 후 IRP계좌 정보를 입력 바랍니다.");
            this.divData.form.divData_foot.addChild(obj.name, obj);

            obj = new Static("sta03","sta00:-1","sta02:4","700","21",null,null,null,null,null,null,this.divData.form.divData_foot.form);
            obj.set_taborder("1");
            obj.set_text(" ③ 상기 첨부파일을 모두 업로드 한 후 결재 상신 바랍니다.");
            this.divData.form.divData_foot.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.txtDS_HNAME","value","dsList","DS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtID_SABUN","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.txtCD_POSITION","value","dsList","DS_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtCD_DEPT","value","dsList","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtDS_OCCUPATION","value","dsList","DS_OCCUPATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtCD_EMPTYPE","value","dsList","DS_EMPTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtDT_PROVATION","value","dsList","DT_PROVATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtCD_ZIP","value","dsList","CD_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtDS_ADDRESS","value","dsList","DS_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtDS_HOMEPHONE","value","dsList","DS_HOMEPHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtDS_HANDPHONE","value","dsList","DS_HANDPHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtDS_OFFICEPHONE","value","dsList","DS_OFFICEPHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tclDT_RETIRE","value","dsList","DT_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.cfNO_RETIRE.form.CDTextBox","value","dsList","NO_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.cfNO_RETIRE.form.DSTextBox","value","dsList","DS_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.txtDS_EMAIL","value","dsList","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.txtDS_RETIRE_DETAIL","value","dsList","DS_RETIRE_DETAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.cfCD_BANK.form.CDTextBox","value","dsList","CD_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.cfCD_BANK.form.DSTextBox","value","dsList","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.txtNO_IRP","value","dsList","NO_IRP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.staDT_RETIRE_2","text","dsList","DT_RETIRE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.staDT_DAY","text","dsList","DT_INSERT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.staDT_BIRTH","text","dsList","DT_BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.staDS_HNAME_2","text","dsList","DS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAW_RETIRE_REQUEST.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.fileConfig = {};

        //임금 및 퇴직금 지급 동의서 여부
        this.approve = false;

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetButton();			//버튼 공통 설정
        	this.fnSetExtendButton();	//화면별 버튼 id 설정
        	this.fnSetVariable();		//변수선언
        	this.fnSetEvent();			//이벤트 설정
        	this.fnSetParameter();		//파라미터 설정

        	this.fileConfig = this.gfnGetFileConfig();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        // 	// 권한설정
        // 	if (this.FormInfo.GR_SEARCH == "1") {
        // 		this.divData.form.btnInit.set_visible(true);
        // 	} else {
        // 		this.divData.form.btnInit.set_visible(false);
        // 	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.tclDT_RETIRE = this.divData.form.tclDT_RETIRE;
        	this.staDT_RETIRE_2 = this.divData.form.staDT_RETIRE_2;
        	//퇴사구분코드
        	this.staNO_RETIRE = this.divData.form.staNO_RETIRE;
        	this.cfNO_RETIRE = this.divData.form.cfNO_RETIRE;
        	this.txtDS_EMAIL = this.divData.form.txtDS_EMAIL;
        	//은행
        	this.staCD_BANK = this.divData.form.staCD_BANK;
        	this.cfCD_BANK = this.divData.form.cfCD_BANK;
        	this.staNO_IRP = this.divData.form.staNO_IRP;
        	this.txtNO_IRP = this.divData.form.txtNO_IRP;

        	this.staDS_EMAIL = this.divData.form.staDS_EMAIL;
        	this.txtDS_EMAIL = this.divData.form.txtDS_EMAIL;
        	this.staDS_RETIRE_DETAIL = this.divData.form.staDS_RETIRE_DETAIL;
        	this.txtDS_RETIRE_DETAIL = this.divData.form.txtDS_RETIRE_DETAIL;

        	/**********  그리드  **********/
        	this.dxGrid = this.divData.form.objGrid;
        	//그리드 멀티라인 나오게 설정
        	//this.dxGrid.set_autosizingtype("row");
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//퇴사구분코드
        	this.cfNO_RETIRE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//은행
        	this.cfCD_BANK.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_BANK.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsFileList, "DA", "DAW_RETIRE_FILELIST");
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	this.dxGrid.deleteContentsCol("head",0);

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();

        	/******** 초기셋팅 ****************/
        	this.dsSearch.setColumn(0,"CD_CORP",frame.CD_CORP);
        	this.dsSearch.setColumn(0,"DS_CORP", frame.DS_CORP);
        	this.dsSearch.setColumn(0,"ID_SABUN", frame.ID_SABUN);
        	this.dsSearch.setColumn(0,"DS_HNAME", frame.DS_HNAME);
        	this.dsSearch.setColumn(0,"NO_SEQ", frame.NO_SEQ);
        };

        // 셀 값 변경 후 이벤트
        this.fnGrid_AfterEdit = function(obj,e) {
        	trace("fnGrid_AfterEdit >>>>>>"+e.columnid);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회조건 Dataset
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("NO_SEQ", "bigdecimal");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("DS_CORP", "string");
        	this.dsInsert.addColumn("NO_SEQ", "bigdecimal");
        	this.dsInsert.addColumn("ID_PERSON", "bigdecimal");
        	this.dsInsert.addColumn("ID_SABUN", "string");
        	this.dsInsert.addColumn("DS_NAME", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("DS_DEPT", "string");
        	this.dsInsert.addColumn("CD_EMPTYPE", "string");
        	this.dsInsert.addColumn("DS_EMPTYPE", "string");
        	this.dsInsert.addColumn("CD_OCCUPATION", "string");
        	this.dsInsert.addColumn("DS_OCCUPATION", "string");
        	this.dsInsert.addColumn("CD_POSITION", "string");
        	this.dsInsert.addColumn("DS_POSITION", "string");
        	this.dsInsert.addColumn("NO_RETIRE", "string");
        	this.dsInsert.addColumn("DS_RETIRE", "string");
        	this.dsInsert.addColumn("DS_RETIRE_DETAIL", "string");
        	this.dsInsert.addColumn("DT_RETIRE", "string");
        	this.dsInsert.addColumn("DS_EMAIL", "string");
        	this.dsInsert.addColumn("CD_BANK", "string");
        	this.dsInsert.addColumn("DS_BANK", "string");
        	this.dsInsert.addColumn("NO_IRP", "string");
        	this.dsInsert.addColumn("NO_APRV", "bigdecimal");
        	this.dsInsert.addColumn("ST_APRV", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("NO_SEQ_RETURN", "int");

        	//전자결재 초기화
        	this.dsSlipReset = new Dataset();
        	this.dsSlipReset.addColumn("CD_CORP", "string");
        	this.dsSlipReset.addColumn("ID_AP_TYPE", "string");
        	this.dsSlipReset.addColumn("NO_APRV", "int");
        	this.dsSlipReset.addColumn("ID_USER", "string");

        	//삭제
        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("NO_SEQ", "bigdecimal");

        	// 결재
        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("TY_WRK", "string");
        	this.dsApproval.addColumn("CD_CORP", "string");
        	this.dsApproval.addColumn("ID_SABUN", "string");
        	this.dsApproval.addColumn("NO_SEQ", "bigdecimal");
        	this.dsApproval.addColumn("ID_APRV", "string");
        	this.dsApproval.addColumn("NO_APRV", "int");

        	// 사직서출력물
        	this.dsSelectRpt = new Dataset();
        	this.dsSelectRpt.addColumn("CD_CORP", "string");
        	this.dsSelectRpt.addColumn("ID_SABUN", "string");
        	this.dsSelectRpt.addColumn("NO_SEQ", "string");

        	//바로 조회
        	this.fnSelect();
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	//this.dsList.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect fileSelect=dsSelect";
        	var outData     = "dsList=select0 dsFileList=fileSelect0";
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

        /************************************************************************
         * Validate
         ************************************************************************/


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	//조회완료 후
        	if( svcID == "select" ){
        		if (this.dsFileList.rowcount == 0) {
        			this.gfnAlert("자료가 존재하지 않습니다.");
        		} else {
        			this.gfnGridAfterSelect(this.dxGrid);
        			// 폼상태 초기화
        			this.gfnSetFormStatus(this);
        		}
        		//사직서 작성 버튼 클릭 시
        		//결재문서 상신, 조회, 초기화 설정
        		this.divData.form.btnSave.set_enable(false);
        		//this.divData.form.btnDel.set_enable(false);
        		this.divData.form.btnPrint.set_enable(false);
        		this.divData.form.btnAprv.set_enable(false);
        		//this.divData.form.btnAprvConnect.set_enable(false);
        		//this.divData.form.btnInit.set_enable(false);

        		var btnSave = this.dsList.getColumn(0, "BTN_SAVE");
        		//var btnDel = this.dsList.getColumn(0, "BTN_DEL");
        		var btnAprv = this.dsList.getColumn(0, "BTN_APRV");
        		var btnDocQ = this.dsList.getColumn(0, "BTN_DOC_Q");
        		//var btnInit = this.dsList.getColumn(0, "BTN_INIT");

        		if(this.dsSearch.getColumn(0, "NO_SEQ" ) == 0) {	//this.getOwnerFrame().NO_SEQ == 0) {
        			var msg = this.dsList.getColumn(0, "MSG");
        			if( this.gfnIsNull(msg)){
        				/**************************************  버튼 컨트롤 (START)  **********************************/
        				this.divData.form.btnSave.set_enable(btnSave == "Y");		// 저장 버튼
        				//this.divData.form.btnDel.set_enable(btnDel == "Y");			// 삭제 버튼
        				this.divData.form.btnPrint.set_enable(false);				// 출력 버튼
        				this.divData.form.btnAprv.set_enable(btnAprv == "Y");		// 결재상신
        				//this.divData.form.btnAprvConnect.set_enable(btnDocQ == "Y");// 결재문서조회
        				//this.divData.form.btnInit.set_enable(btnInit == "Y");		// 결재초기화 버튼
        				/**************************************  버튼 컨트롤 (END)  **********************************/
        				this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DS_FILE_NAME"), "cssclass", "BACK_ReadOnly");
        				this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DS_FILE_NAME"), "edittype", "none");
        				this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DS_FILE_NAME"), "expandshow", "hide");	//"show" hide

        				//퇴직담당자 지정 팝업 호출
        				//this.fnPopup();
        			}else{
        				//a메세지 전송 후 종료
        				var param = {};
        				param.msg = msg;
        				this.getParentContext().close(JSON.stringify(param));
        			}
        		}else{
        			/**************************************  버튼 컨트롤 (START)  **********************************/
        			this.divData.form.btnSave.set_enable(btnSave == "Y");		// 저장 버튼
        			//this.divData.form.btnDel.set_enable(btnDel == "Y");			// 삭제 버튼
        			this.divData.form.btnPrint.set_enable(true);				// 출력 버튼
        			this.divData.form.btnAprv.set_enable(btnAprv == "Y");		// 결재상신
        			//this.divData.form.btnAprvConnect.set_enable(btnDocQ == "Y");// 결재문서조회
        			//this.divData.form.btnInit.set_enable(btnInit == "Y");		// 결재초기화 버튼
        			/**************************************  버튼 컨트롤 (END)  **********************************/
        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DS_FILE_NAME"), "cssclass", "");
        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DS_FILE_NAME"), "edittype", "text");
        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DS_FILE_NAME"), "expandshow", "show");	//"show" hide
        		}
        		/**************************************  그리드 컨트롤 (END)  **********************************/
        		//this.divData.form.resetScroll();

        		//스크롤 설정 초기화
        		//this.resetScroll();
        		//this.gfnGridAfterSelect(this.dxGrid);

        		//this.divData.form.staDT_RETIRE_2.set_text("20240101");

        		//tooltiptext
        		var TTP_NO_RETIRE = this.dsList.getColumn(0, "TTP_NO_RETIRE");
        		var TTP_DS_EMAIL = this.dsList.getColumn(0, "TTP_DS_EMAIL");
        		var TTP_DS_RETIRE_DETAIL = this.dsList.getColumn(0, "TTP_DS_RETIRE_DETAIL");
        		var TTP_NO_IRP = this.dsList.getColumn(0, "TTP_NO_IRP");
        		this.staNO_RETIRE.set_tooltiptext(TTP_NO_RETIRE);
        		this.cfNO_RETIRE.set_tooltiptext(TTP_NO_RETIRE);
        		this.staDS_EMAIL.set_tooltiptext(TTP_DS_EMAIL);
        		this.txtDS_EMAIL.set_tooltiptext(TTP_DS_EMAIL);
        		this.staDS_RETIRE_DETAIL.set_tooltiptext(TTP_DS_RETIRE_DETAIL);
        		this.txtDS_RETIRE_DETAIL.set_tooltiptext(TTP_DS_RETIRE_DETAIL);
        		this.staCD_BANK.set_tooltiptext(TTP_NO_IRP);
        		this.cfCD_BANK.set_tooltiptext(TTP_NO_IRP);
        		this.staNO_IRP.set_tooltiptext(TTP_NO_IRP);
        		this.txtNO_IRP.set_tooltiptext(TTP_NO_IRP);

        	// 	var colDS_FILE_NAME = this.dxGridSub.getBindCellIndex("body", "DS_FILE_NAME");
        	// 	this.dxGrid.setCellProperty("body",colDS_FILE_NAME,"tooltiptext","bind:TTP_DS_FILE_NAME");
        		if (btnSave != "Y")
        		{
        			this.tclDT_RETIRE.set_enable(false);
        			this.cfNO_RETIRE.set_enable(false);
        			this.txtDS_EMAIL.set_enable(false);
        			this.txtDS_RETIRE_DETAIL.set_enable(false);
        			this.cfCD_BANK.set_enable(false);
        			this.txtNO_IRP.set_enable(false);
        		}
        		else
        		{
        			this.tclDT_RETIRE.set_enable(true);
        			this.cfNO_RETIRE.set_enable(true);
        			this.txtDS_EMAIL.set_enable(true);
        			this.txtDS_RETIRE_DETAIL.set_enable(true);
        			this.cfCD_BANK.set_enable(true);
        			this.txtNO_IRP.set_enable(true);
        		}
        	}
        	//저장완료 후
        	else if( svcID == "save" ){
        		//처음 저장 시는 정상 처리 후 팝업창 close 아닌건 재조회
        		if( this.dsSearch.getColumn(0, "NO_SEQ" ) == 0 ){
        			this.gfnAlert('임시저장 되었습니다.');
        			if(this.dsOutput.rowcount > 0){
        				this.dsSearch.setColumn(0, "NO_SEQ", this.dsOutput.getColumn(0, "NO_SEQ_RETURN"));
        				this.fnSelect();
        			}
        // 			var param = {};
        // 			param.gubun = "Y";
        // 			this.getParentContext().close(JSON.stringify(param));
        		}else{
        			this.gfnAlert('임시저장 되었습니다.');
        			this.fnSelect();
        		}
        	}
        	//삭제 완료 후
        	else if( svcID == "delete" ){
        		this.gfnAlert('정상 처리 되었습니다.');
        		var param = {};
        		param.gubun = "Y";
        		this.getParentContext().close(JSON.stringify(param));
        	}
        	else if (svcID == "APRV" || svcID == "APRVCNC") {
        		this.gfnOpenAppr(function() {
        			//this.FormBtns.Select.click();
        			this.fnSelect();
        		});
        		this.fnSelect();
        		//this.getParentContext().close(JSON.stringify(param));
        	} else if (svcID == "selectRpt") {		// 사직서 출력물
        		if (this.dsRptList.rowcount > 0) {
        			var inProc     = "_dsProc";
        			var inParam    = "params=dsRptList";
        			var inData     = "report=dsSelectRpt";
        			var reportpath = "/da/daw/DAW_RETIRE_REGUEST.ozr";

        			gfnOpenReport(this, reportpath, inProc, inParam, inData, false, '사직서');
        		} else {
        			this.gfnAlert("출력할 자료가 없습니다.");
        			return;
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         /**************** 조회조건 *****************/
         //변경 전 이벤트
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	//퇴사구분코드
        	if( id == "cfNO_RETIRE" ) {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "W1");
        	}
        	//은행코드 파인더
        	else if( id == "cfCD_BANK" ) {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "W2");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	//은행선택 시
        	if( id == "cfCD_BANK" ) {
        		if(this.divData.form.cfCD_BANK.form.CDTextBox.value == "98"){
        				this.divData.form.txtNO_IRP.set_enable(false);
        		}else{
        				this.divData.form.txtNO_IRP.set_enable(true);
        		}
        	}
        };

        this.tclDT_RETIRE_onchanged = function(obj,e) {
        	var dtretire = this.divData.form.tclDT_RETIRE.value;
        	this.divData.form.staDT_RETIRE_2.set_text(dtretire.substr(0,4) + "-" + dtretire.substr(4,2) + "-" + dtretire.substr(6,2));
        	//this.divData.form.staDT_RETIRE_2.text = "";
         	//this.divData.form.staDT_RETIRE_2.text = dtretire.substr(0,4) + "-" + dtretire.substr(4,2) + "-" + dtretire.substr(6,2);
        	//staDT_RETIRE_2 = this.divData.form.tclDT_RETIRE.text;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         //그리드 파일 더블클릭 다운로드.
        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	this.fnDownload();
        };

        this.fnDownload = function() {
        	if (this.dsFileList.rowcount == 0) return false;
        	var sFilename = this.dsFileList.getColumn(this.dsFileList.rowposition, "NM_FILE_LIST");
        	var encodeFileName = encodeURIComponent(sFilename).replace(/[!'()*]/g, escape);

        	var svrPath = this.dsFileList.getColumn(this.dsFileList.rowposition, "DS_FILE_PATH").replace(/\//g, "\\") + "\\";
        	var filePath = svrPath.replace(/\\\\/g, "\\");// + this.FileManager.CD_DIR.join('\\');

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;
        	this.FileDownTransfer.set_url(surl);
        	this.FileDownTransfer.setPostData("path", filePath);
        	this.FileDownTransfer.setPostData("fileName", encodeFileName);

        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer.set_downloadfilename(sFilename);
        	}
        	this.FileDownTransfer.download();
        };
        //첨부파일 팝업
        this.fnGrid_ExpandUp = function(obj, e){
         	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colnm == "DS_FILE_NAME") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        // 		if(this.gfnGetFlag(dataset, e.row) == "I"){
        // 			this.gfnAlert("저장 후 파일첨부 진행.");
        // 			return false;
        // 		}

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DAW2";
        		fileManager.CD_DIR = [this.dsList.getColumn(0, "ID_PERSON"), this.dsList.getColumn(0, "NO_SEQ"), this.dsFileList.getColumn(e.row, "NO_SEQ")];
        		// 권한설정
        // 		if (this.FormInfo.GR_SEARCH == "1") {
        // 			fileManager.IS_READONLY = false;
        // 		} else {
        // 			fileManager.IS_READONLY = true;
        // 		}
        		if (this.dsList.getColumn(0, "ST_APRV") != "0") {
        			fileManager.IS_READONLY = true;
        		} else {
        			fileManager.IS_READONLY = false;
        		}

        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        }

        //첨부파일 콜백
        this.fnFileCallback = function(strID, val) {
        	// 변경시 조회를 다시 하거나
        	if(val.IsChange == true) {
        		this.FormBtns.Select.click();
        	}
        //
        // 	//파일첨부 갯수
        // 	this.fileCnt = val.Cnt;
        // 	this.fileNm = val.Cnt;
        // 	//셋팅 갯수 조절
        // 	this.dsFileList.setColumn(this.dsFileList.rowposition, "FILE_CNT", this.fileCnt);
        //
        // 	// 파일개수를 다시 셋팅
        // 	this.dsFileList.set_enableevent(false);
        // 	if(val.Cnt == 0) {
        // 		this.dsFileList.setColumn(this.dsFileList.rowposition, "DS_FILE_NAME", "   첨부(0)");
        // 	} else {
        // 		this.dsFileList.setColumn(this.dsFileList.rowposition, "DS_FILE_NAME", "   첨부(" + val.Cnt + ")");
        // 	}
        // 	this.dsFileList.set_enableevent(true);
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 셀 수정가능 여부
        this.fnGrid_EnterCell = function(obj, row, cell)
        {

        }

        //저장버튼 클릭
        this.divData_btn00_01_00_onclick = function(obj,e)
        {
        	if (!this.fnApplyValidaion()) return false;

        	var email = this.dsList.getColumn(0, "DS_EMAIL").toUpperCase();
        	var corpemail = this.gfnGetConfig("DZ" , "DS_EMAIL_CORP").toUpperCase();

        	if(!this.gfnIsNull(email)) {
        		if( email.indexOf(corpemail) != -1 ){
        			this.fnVaidateCallback = function() {
        				this.divData.form.txtDS_EMAIL.setFocus();
        			}
        			this.gfnAlert("회사 메일은 입력 불가능 합니다.", "fnVaidateCallback");
        			return false;
        		}
        	}

        	if (!this.gfnIsEmail(email)) {
        		this.fnVaidateCallback = function() {
        			this.divData.form.txtDS_EMAIL.setFocus();
        		}
        		this.gfnAlert("이메일 형식이 맞지 않습니다.", "fnVaidateCallback");
        		return false;
        	}

        	this.dsInsert.clearData();
        	var nrow = this.dsInsert.addRow();

        	this.dsInsert.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0,"CD_CORP"));
        	this.dsInsert.setColumn(nrow, "DS_CORP", this.dsSearch.getColumn(0,"DS_CORP"));
        	this.dsInsert.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0,"NO_SEQ"));
        	this.dsInsert.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsInsert.setColumn(nrow, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsInsert.setColumn(nrow, "DS_NAME", this.dsSearch.getColumn(0, "DS_HNAME"));
        	this.dsInsert.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(0, "CD_DEPT"));
        	this.dsInsert.setColumn(nrow, "DS_DEPT", this.dsList.getColumn(0, "DS_DEPT"));
        	this.dsInsert.setColumn(nrow, "CD_EMPTYPE", this.dsList.getColumn(0, "CD_EMPTYPE"));
        	this.dsInsert.setColumn(nrow, "DS_EMPTYPE", this.dsList.getColumn(0, "DS_EMPTYPE"));
        	this.dsInsert.setColumn(nrow, "CD_OCCUPATION", this.dsList.getColumn(0, "CD_OCCUPATION"));
        	this.dsInsert.setColumn(nrow, "DS_OCCUPATION", this.dsList.getColumn(0, "DS_OCCUPATION"));
        	this.dsInsert.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(0, "CD_POSITION"));
        	this.dsInsert.setColumn(nrow, "DS_POSITION", this.dsList.getColumn(0, "DS_POSITION"));
        	this.dsInsert.setColumn(nrow, "NO_RETIRE", this.dsList.getColumn(0, "NO_RETIRE"));
        	this.dsInsert.setColumn(nrow, "DS_RETIRE", this.dsList.getColumn(0, "DS_RETIRE"));
        	this.dsInsert.setColumn(nrow, "DS_RETIRE_DETAIL", this.dsList.getColumn(0, "DS_RETIRE_DETAIL"));
        	this.dsInsert.setColumn(nrow, "DT_RETIRE", this.dsList.getColumn(0, "DT_RETIRE").replace(/-/g,""));
        	this.dsInsert.setColumn(nrow, "DS_EMAIL", this.dsList.getColumn(0, "DS_EMAIL"));
        	this.dsInsert.setColumn(nrow, "CD_BANK", this.dsList.getColumn(0, "CD_BANK"));
        	this.dsInsert.setColumn(nrow, "DS_BANK", this.dsList.getColumn(0, "DS_BANK"));
        	this.dsInsert.setColumn(nrow, "NO_IRP", this.dsList.getColumn(0, "NO_IRP"));
        	this.dsInsert.setColumn(nrow, "NO_APRV", this.dsList.getColumn(0, "NO_APRV"));
        	this.dsInsert.setColumn(nrow, "ST_APRV", this.dsList.getColumn(0, "ST_APRV"));
        	this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsInsert.setColumn(nrow, "NO_SEQ_RETURN", "");

        	if (this.dsInsert.rowcount == 0 ) return;

        	var strSvcId    = "save";		//콜백
        	var strSvcType  = "save";		//
        	var inProc		= "_dsProc";
        	var inData      = "save=dsInsert";
        	var outData     = "dsOutput=save";
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

        // //퇴직담당자 지정 팝업 호출
        // this.fnPopup = function()
        // {
        // 	var param = {};
        // 	param.CD_CORP  = this.dsSearch.getColumn(0, "CD_CORP");
        // 	//this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAW_RETIRE_CHARGE_POP", "",  param , 972 ,610 );
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAW_RETIRE_CHARGE_POP", "",  param , 972 ,500 );
        // };

        //신청 시 벨리데이션
        this.fnApplyValidaion = function()
        {
        // 	var tyEmploymentEnd    				= this.dsList.getColumn(0, "TY_EMPLOYMENT_END");
        // 	var tyInformationSecurity           = this.dsList.getColumn(0, "TY_INFORMATION_SECURITY");
        // 	var tyPersonalInformation           = this.dsList.getColumn(0, "TY_PERSONAL_INFORMATION");
        // 	var tyPersonalInformationuserdata  = this.dsList.getColumn(0, "TY_PERSONAL_INFORMATION_USERDATA");
        // 	var tyPersonalInformationunique    = this.dsList.getColumn(0, "TY_PERSONAL_INFORMATION_UNIQUE");

        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_RETIRE"))) {
        		this.divData.form.tclDT_RETIRE.setFocus();
        		this.gfnAlert("퇴직일자를 입력하세요.");
        		return false;
        	}else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_RETIRE"))) {
        		this.divData.form.cfNO_RETIRE.form.CDTextBox.setFocus();
        		this.gfnAlert("퇴사구분 코드를 입력하세요.");
        		return false;
        	}else if (this.gfnIsNull(this.dsList.getColumn(0, "DS_EMAIL"))) {
        		this.divData.form.txtDS_EMAIL.setFocus();
        		this.gfnAlert("사외이메일을 입력하세요.");
        		return false;
        	}
        // 	}else if (this.gfnIsNull(this.dsList.getColumn(0, "DS_RETIRE_DETAIL"))) {
        // 		this.divData.form.txtDS_RETIRE_DETAIL.setFocus();
        // 		this.gfnAlert("퇴직사유를 입력하세요.");
        // 		return false;
        // 	}else if (this.gfnIsNull(this.dsList.getColumn(0, "CD_BANK"))) {
        // 		this.divData.form.cfCD_BANK.form.CDTextBox.setFocus();
        // 		this.gfnAlert("은행를 입력하세요.");
        // 		return false;
        // 	}else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_IRP"))) {
        // 		this.divData.form.txtNO_IRP.setFocus();
        // 		this.gfnAlert("계좌번호를 입력하세요.");
        // 		return false;
        // 	}
        	return true;
        };

        //결재상신
        this.divData_btnAprv_onclick = function(obj,e)
        {
        	//신청 시 벨리데이션
        	if (!this.fnApplyValidaion()) return false;

        	var status = this.gfnGetFormStatus(this);
        	if(status == "U"){
        		this.gfnAlert("변경 내용이 임시저장되지 않았습니다.\n저장 후 결재상신 하시기 바랍니다.");
        		return;
        	}

        	for (var i = 0; i < this.dsFileList.rowcount; i++) {
        		if(this.dsFileList.getColumn(i,"FILE_CNT") == 0 && this.dsFileList.getColumn(i,"DS_VIEW") != 1){
        			this.gfnAlert("첨부문서 [" + this.dsFileList.getColumn(i,"DS_ATTACH_FILE") + "] 파일이 첨부되지 않았습니다.");
        			return;
        		}
        	}

        	this.fnWorkAfter = function(){

        		this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        			if (isOk == false) {
        				return;
        			}
        			var title = this.dsList.getColumn(0, "DS_TITLE");

        			var initParam = {
        				CD_CORP: this.dsList.getColumn(0, "CD_CORP"),
        				ID_AP_TYPE: "DAW01",
        				TY_WRK: "APRV",
        				ID_APRV: this.AuthClient.ID_SABUN,
        				TT_DOC: title,
        				CD_CORP_SUFFIX: this.gfnGetConfig("DZ" , "CD_CORP_SUFFIX"),
        			}
        			this.gfnAprv(initParam, "fnAprvCallback", "APRV");
        		});
        	}
        	this.gfnAlert("만55세 이상이시거나 1년미만 재직자로\nIRP계좌로 퇴직금 수령이 법적으로 강제되지 않는 경우에는\n기재하지 않으셔도 됩니다.(기존 급여계좌에 입금)", "fnWorkAfter");

        };

        this.fnAprvMsg = function(obj) {
        	var title = this.dsList.getColumn(0, "DS_TITLE");
        	var msg = title + "에 대하여 상신하시겠습니까?";

        	return msg;
        }

        this.fnAprvDocQCallback = function() {
        	console.log('fnAprvDocQCallback');
        	alert('fnAprvDocQCallback');
        }


        // 결재상신 버튼 콜백
        // 취소결재상신 버튼 콜백
        // 결재상태초기화 버튼 콜백
        this.fnAprvCallback = function(strId, val) {
        	this.dsApproval.clearData();
        	this.dsApproval.addRow();

        	this.dsApproval.setColumn(0, "TY_WRK",  strId);
        	this.dsApproval.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsApproval.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsApproval.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        	this.dsApproval.setColumn(0, "ID_APRV", this.AuthClient.ID_SABUN);
        	if (strId == "APRV" || strId == "APRVCNC") {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsAprvOut.getColumn(0, "NO_APRV"));
        	} else {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsList.getColumn(0, "NO_APRV"));
        	}

        	var strSvcId    = strId;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "aprv_execute=dsApproval";
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

        //첨부문서 다운로드
        this.divData_btnFileDown_onclick = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DAW1";
        	fileManager.CD_DIR = ["0"];
        	// 권한설정
        	if (this.FormInfo.GR_SEARCH == "1") {
        		fileManager.IS_READONLY = false;
        	} else {
        		fileManager.IS_READONLY = true;
        	}
        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        // //결재문서조회 버튼
        // this.divData_btnAprvConnect_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var oParams = {
        // 		CD_CORP: this.dsList.getColumn(0, "CD_CORP"),
        // 		NO_APRV: this.dsList.getColumn(0, "NO_APRV"),
        // 	}
        // 	this.gfnAprvDoc(oParams, this.fnAprvDocQCallback);
        // };

        // //결재문서 초기화
        // this.divData_btnInit_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	if (!this.gfnGridIsRow(this.dxGrid)) return;
        //
        // 	var msg = "사직서에 대하여 " + obj.text + "하시겠습니까?\n";
        // 	this.gfnConfirm(msg, "fnAprvCallback", "APRVINIT");
        // };

        //삭제 버튼 클릭
        this.divData_btnDel_onclick = function(obj,e)
        {
        	this.gfnConfirm("삭제 하시겠습니까?", "canchange_callback");
        };

        //확인여부 콜백
        this.canchange_callback = function(strId, val)
        {
        	if(val) {
        		this.dsDelete.clearData();
        		var nrow = this.dsDelete.addRow();

        		this.dsDelete.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0,"CD_CORP"));
        		this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0,"NO_SEQ"));

        		if (this.dsDelete.rowcount == 0 ) return;

        		var strSvcId    = "delete";		//콜백
        		var strSvcType  = "save";		//
        		var inProc		= "_dsProc";
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

        //출력
        this.divData_btnPrint_onclick = function(obj,e)
        {
        	//신청 시 벨리데이션
        	if (!this.fnApplyValidaion()) return false;

        	var status = this.gfnGetFormStatus(this);
        	if(status == "U"){
        		this.gfnAlert("변경 내용이 임시저장되지 않았습니다.\n저장 후 출력 하시기 바랍니다.");
        		return;
        	}

        	this.dsSelectRpt.clearData();
        	this.dsSelectRpt.addRow();

        	this.dsRptList.clearData();

        	this.dsSelectRpt.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0,"CD_CORP"));
        	this.dsSelectRpt.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0,"ID_SABUN"));
        	this.dsSelectRpt.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0,"NO_SEQ"));

        	var strSvcId    = "selectRpt";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "report=dsSelectRpt";
        	var outData     = "dsRptList=report0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

            this.gfnTransaction(strSvcId,       // transaction을 구분하기 위한 svc id값
                                strSvcType,     // transaction을 요청할 구분
        						inProc,         // Procedure 정보 Dataset 이름
        						inData,         // 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData,        // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnAprvConnect.addEventHandler("onclick",this.divData_btnAprvConnect_onclick,this);
            this.divData.form.btnAprv.addEventHandler("onclick",this.divData_btnAprv_onclick,this);
            this.divData.form.btnDel.addEventHandler("onclick",this.divData_btnDel_onclick,this);
            this.divData.form.btnPrint.addEventHandler("onclick",this.divData_btnPrint_onclick,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.divData_btn00_01_00_onclick,this);
            this.divData.form.btnInit.addEventHandler("onclick",this.divData_btnInit_onclick,this);
            this.divData.form.tclDT_RETIRE.addEventHandler("onchanged",this.tclDT_RETIRE_onchanged,this);
            this.divData.form.btnFileDown.addEventHandler("onclick",this.divData_btnFileDown_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsFileList.addEventHandler("onvaluechanged",this.dsFileList_onvaluechanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAW_RETIRE_REQUEST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
