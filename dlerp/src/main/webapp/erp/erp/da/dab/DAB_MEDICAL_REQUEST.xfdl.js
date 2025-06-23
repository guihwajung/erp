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
            this.set_titletext("의료비 신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_MEDICAL_MASTER</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DABPR_MEDICAL_REQUEST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_MEDICAL_REQUEST_SAVE</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DABPR_MEDICAL_PRINT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MEDICAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"GR_SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"GR_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_LOGIN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_MEDICAL\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","179","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("65");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfID_SABUN:0.0","10.0","55","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","ccfID_SABUN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("요청일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQUEST","staDT_REQUEST:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNO_MEDICAL","ctclDT_REQUEST:0.0","10.0","55","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","252",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.getSetter("BeforeUserDataSetParam").set("fnGrid_BeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnGrid_AfterCDTextChanged");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","0","222","564","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta16","394","185","160","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","124","185","160","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","124","81","160","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","394","100","160","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","394","119","160","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","124","100","160","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","124","119","160","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","394","25","160","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","124","25","160","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","25","100","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("상반기 누계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtAM_FIRSTYEAR","129","100","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","285","100","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("상반기 잔여한도");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtAM_FIRSTYEAR_REST","399","100","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtAM_SECONDYEAR_REST","399","119","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","285","119","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("하반기 잔여한도");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtAM_SECONDYEAR","129","119","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","25","119","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("하반기 누계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","57","564","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("지급금액정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","25","25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME","285","25","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("신청인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","0","0","564","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("신청자 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYY_BASE","25","81","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYY_BASEV","130","80","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","0","157","564","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("금회지급 금액정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_STATUS","25","185","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_STATUS","129","185","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PROVIDE","285","185","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("금회 지급액");
            obj.set_color("red");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtAM_PROVIDE","399","185","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAMEV","396","25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REQUESTV","126","25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ctclDT_REQUEST","value","dsSearch","DT_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.edtNO_MEDICAL","value","dsSearch","NO_MEDICAL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_MEDICAL_REQUEST.xfdl", function() {
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

        	this.fnReset();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Reset.set_enable(true);

        	var P_TY_STATUS = this.gfnNvl(this.getOwnerFrame().TY_STATUS, "");
        	var bEnable = (P_TY_STATUS == "2" || P_TY_STATUS == "4" || P_TY_STATUS == "5") ?  false : true;

        	this.FormBtns.Save.set_enable(bEnable);
        	this.FormBtns.Del.set_enable(bEnable);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//의료비출력
        	this.btnRequest = this.gfnFormButtonAdd("MedicalRequestRpt", "fnMedicalRequestRpt", "의료비출력");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;			// 법인
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;			// 부서
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;			// 성명
        	this.ctclDT_REQUEST = this.divSearch.form.ctclDT_REQUEST;	// 요청일자
        //	this.cboTY_STATUS = this.divSearch.form.cboTY_STATUS;		// 승인상태
        	this.edtNO_MEDICAL = this.divSearch.form.edtNO_MEDICAL;

        	this.gfnGridInit(this.dxGrid, this.dsListSub, "DA", "DAB_MEDICAL_REQUEST");
        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YY_REQUEST", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("ID_PERSON", "bigdecimal");
        	this.dsSelect.addColumn("NO_MEDICAL", "bigdecimal");
        	this.dsSelect.addColumn("DT_REQUEST", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_LOGIN", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_PERSON", "bigdecimal");
        	this.dsSave.addColumn("NO_MEDICAL", "bigdecimal");
        	this.dsSave.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave.addColumn("DT_REQUEST", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("TY_INPUT", "string");
        	this.dsSave.addColumn("CD_TREAT", "string");
        	this.dsSave.addColumn("NM_REQUEST", "string");
        	this.dsSave.addColumn("CD_CONTRACT", "string");
        	this.dsSave.addColumn("DT_BIRTH", "string");
        	this.dsSave.addColumn("DS_MEDICAL", "string");
        	this.dsSave.addColumn("DS_DISEASE", "string");
        	this.dsSave.addColumn("FR_MEDICAL", "string");
        	this.dsSave.addColumn("TO_MEDICAL", "string");
        	this.dsSave.addColumn("AM_SELF", "bigdecimal");
        	this.dsSave.addColumn("AM_PUBLIC", "bigdecimal");
        	this.dsSave.addColumn("AM_TOTAL_SELF", "bigdecimal");
        	this.dsSave.addColumn("AM_CHOICE", "bigdecimal");
        	this.dsSave.addColumn("AM_OTHER_CHOICE", "bigdecimal");
        	this.dsSave.addColumn("DT_RECEIPT", "string");
        	this.dsSave.addColumn("AM_PREPAY", "bigdecimal");
        	this.dsSave.addColumn("AM_DISCOUNT", "bigdecimal");
        	this.dsSave.addColumn("AM_CERTIFICATE", "bigdecimal");
        	this.dsSave.addColumn("AM_TREAT_TOTAL", "bigdecimal");
        	this.dsSave.addColumn("AM_REQUEST_TOTAL", "bigdecimal");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	var nrow = this.dsSelect.addRow();
        	this.dsSelect.setColumn(nrow, "YY_REQUEST", this.dsSearch.getColumn(0, "DT_REQUEST").substr(0,4));
        	this.dsSelect.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(nrow, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(nrow, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));
        	this.dsSelect.setColumn(nrow, "NO_MEDICAL", this.dsSearch.getColumn(0, "NO_MEDICAL"));
        	this.dsSelect.setColumn(nrow, "DT_REQUEST", this.dsSearch.getColumn(0, "DT_REQUEST"));
        	this.dsSelect.setColumn(nrow, "GR_SEARCH", 	this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(nrow, "GR_DEPT", 	this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(nrow, "ID_LOGIN", 	this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        	strSvcId    = "selectSub";
        	strSvcType  = "grid";
        	inProc		= "_dsProc";
        	inData      = "selectSub=dsSelect";
        	outData     = "dsListSub=selectSub0";
        	strArg      = "";
        	callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {

        	// 필수항목 체크
        	if(!this.fnSaveValidate()) return;

        	var nrow = this.gfnGridAdd(this.dxGrid);

        	this.dsListSub.setColumn(nrow, "CHK", 1);
        	//this.dsListSub.setColumn(nrow, "ID_PERSON", 	this.divSearch.form.edtID_PERSON.value);
        	//this.dsListSub.setColumn(nrow, "NO_MEDICAL", 	this.getOwnerFrame().arguments.Args["NO_MEDICAL"]);
        	this.dsListSub.setColumn(nrow, "ID_PERSON", 	this.dsSearch.getColumn(0, "ID_PERSON"));
        	this.dsListSub.setColumn(nrow, "NO_MEDICAL", 	this.dsSearch.getColumn(0, "NO_MEDICAL"));
        	this.dsListSub.setColumn(nrow, "ID_SABUN", 		this.dsSearch.getColumn(0, "ID_SABUN"));
         	this.dsListSub.setColumn(nrow, "DS_HNAME", 		this.dsSearch.getColumn(0, "DS_HNAME"));
         	this.dsListSub.setColumn(nrow, "CD_CORP", 		this.dsSearch.getColumn(0, "CD_CORP"));
         	this.dsListSub.setColumn(nrow, "DS_CORP", 		this.dsSearch.getColumn(0, "DS_CORP"));
         	this.dsListSub.setColumn(nrow, "CD_DEPT", 		this.dsSearch.getColumn(0, "CD_DEPT"));
         	this.dsListSub.setColumn(nrow, "DS_DEPT", 		this.dsSearch.getColumn(0, "DS_DEPT"));
        	this.dsListSub.setColumn(nrow, "DT_REQUEST", 	this.dsSearch.getColumn(0, "DT_REQUEST"));
        	//this.dsListSub.setColumn(nrow, "DT_REQUEST", 	this.gfnGetDate());

        	this.dsListSub.setColumn(nrow, "AM_SELF", 0);			// 일부본인부담(급여)
        	this.dsListSub.setColumn(nrow, "AM_PUBLIC", 0);			// 공단부담(급여)
        	this.dsListSub.setColumn(nrow, "AM_TOTAL_SELF",	0);		// 전액본인부담(급여)
        	this.dsListSub.setColumn(nrow, "AM_CHOICE",	0);			// 선택진료료(비급여)
        	this.dsListSub.setColumn(nrow, "AM_OTHER_CHOICE", 0);	// 선택진료외(비급여)

        	//this.dsListSub.setColumn(nrow, "TY_INPUT", this.FormInfo.GR_SEARCH==9?"S":"M"); //M: 관리자, S: 신청자

        	this.dsListSub.setColumn(nrow, "TY_INPUT", "S"); //M: 관리자, S: 신청자
        	this.dsListSub.setColumn(nrow, "CD_TREAT", "M");
        	this.dsListSub.setColumn(nrow, "CD_CONTRACT", "00");
        	this.dsListSub.setColumn(nrow, "TY_STATUS", "0");
        	this.dsListSub.setColumn(nrow, "YN_UPDATE", "Y");

        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var TY_STATUS = this.dsListSub.getColumn(this.dsListSub.rowposition, "TY_STATUS");
        	var YN_UPDATE = this.dsListSub.getColumn(this.dsListSub.rowposition, "YN_UPDATE");

        	if(YN_UPDATE == "N") return false;
        	//if(TY_STATUS == "2") return false;

        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	// 그리드 필수항목 체크
        	//if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "ID_PERSON", 		this.dsListSub.getColumn(i, "ID_PERSON"));
        				this.dsSave.setColumn(nrow, "NO_MEDICAL", 		this.dsListSub.getColumn(i, "NO_MEDICAL"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", 			this.dsListSub.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "DT_REQUEST", 		this.dsListSub.getColumn(i, "DT_REQUEST"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", 		this.dsListSub.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "CD_CORP", 			this.dsListSub.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "CD_DEPT", 			this.dsListSub.getColumn(i, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "TY_INPUT", 		this.dsListSub.getColumn(i, "TY_INPUT"));
        				this.dsSave.setColumn(nrow, "CD_TREAT", 		this.dsListSub.getColumn(i, "CD_TREAT"));
        				this.dsSave.setColumn(nrow, "NM_REQUEST", 		this.dsListSub.getColumn(i, "NM_REQUEST"));
        				this.dsSave.setColumn(nrow, "CD_CONTRACT",		this.dsListSub.getColumn(i, "CD_CONTRACT"));
        				this.dsSave.setColumn(nrow, "DT_BIRTH", 		this.dsListSub.getColumn(i, "DT_BIRTH"));
        				this.dsSave.setColumn(nrow, "DS_MEDICAL", 		this.dsListSub.getColumn(i, "DS_MEDICAL"));
        				this.dsSave.setColumn(nrow, "DS_DISEASE", 		this.dsListSub.getColumn(i, "DS_DISEASE"));
        				this.dsSave.setColumn(nrow, "FR_MEDICAL", 		this.dsListSub.getColumn(i, "FR_MEDICAL"));
        				this.dsSave.setColumn(nrow, "TO_MEDICAL", 		this.dsListSub.getColumn(i, "TO_MEDICAL"));
        				this.dsSave.setColumn(nrow, "AM_SELF", 			this.dsListSub.getColumn(i, "AM_SELF"));
        				this.dsSave.setColumn(nrow, "AM_PUBLIC", 		this.dsListSub.getColumn(i, "AM_PUBLIC"));
        				this.dsSave.setColumn(nrow, "AM_TOTAL_SELF", 	this.dsListSub.getColumn(i, "AM_TOTAL_SELF"));
        				this.dsSave.setColumn(nrow, "AM_CHOICE", 		this.dsListSub.getColumn(i, "AM_CHOICE"));
        				this.dsSave.setColumn(nrow, "AM_OTHER_CHOICE", 	this.dsListSub.getColumn(i, "AM_OTHER_CHOICE"));
        				this.dsSave.setColumn(nrow, "DT_RECEIPT", 		this.dsListSub.getColumn(i, "DT_RECEIPT"));
        				this.dsSave.setColumn(nrow, "AM_PREPAY", 		this.dsListSub.getColumn(i, "AM_PREPAY"));
        				this.dsSave.setColumn(nrow, "AM_DISCOUNT", 		this.dsListSub.getColumn(i, "AM_DISCOUNT"));
        				this.dsSave.setColumn(nrow, "AM_CERTIFICATE", 	this.dsListSub.getColumn(i, "AM_CERTIFICATE"));
        				this.dsSave.setColumn(nrow, "AM_TREAT_TOTAL", 	this.dsListSub.getColumn(i, "AM_TREAT_TOTAL"));
        				this.dsSave.setColumn(nrow, "AM_REQUEST_TOTAL", this.dsListSub.getColumn(i, "AM_REQUEST_TOTAL"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", 		this.dsListSub.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "ID_INSERT", 		this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsResult=save0";
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
        	this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

        /*
         *	초기화 버튼
         */
        this.fnReset  = function() {

        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	// 부모창(DAB_MEDICAL)에서 받아온 값 세팅
        	var P_NO_MEDICAL = this.getOwnerFrame().NO_MEDICAL;
        	//var P_NO_MEDICAL =  this.gfnNvl(P_NO_MEDICAL, this.dsResult.getColumn(0, "NO_MEDICAL"));
        	var P_ID_PERSON = this.getOwnerFrame().ID_PERSON;
        	var P_ID_SABUN = this.getOwnerFrame().ID_SABUN;
        	var P_DS_HNAME = this.getOwnerFrame().DS_HNAME;
        	var P_DT_REQUEST = this.getOwnerFrame().DT_REQUEST;
        	var P_CD_CORP = this.getOwnerFrame().CD_CORP;
        	var P_DS_CORP = this.getOwnerFrame().DS_CORP;
        	var P_CD_DEPT = this.getOwnerFrame().CD_DEPT;
        	var P_DS_DEPT = this.getOwnerFrame().DS_DEPT;
        	var P_TY_STATUS = this.gfnNvl(this.getOwnerFrame().TY_STATUS, "");

        	//요청일자
        	this.dsSearch.setColumn(0, "YY_REQUEST" , P_DT_REQUEST.substr(0,4));
        	this.dsSearch.setColumn(0, "DT_REQUEST" , P_DT_REQUEST);

        	//법인
        	this.dsSearch.setColumn(0, "CD_CORP" , P_CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP" , P_DS_CORP);

        	//부서
        	this.dsSearch.setColumn(0, "CD_DEPT" , P_CD_DEPT);
        	this.dsSearch.setColumn(0, "DS_DEPT" , P_DS_DEPT);

        	//사번
        	this.dsSearch.setColumn(0, "ID_PERSON" , P_ID_PERSON);
        	this.dsSearch.setColumn(0, "ID_SABUN" , P_ID_SABUN);
        	this.dsSearch.setColumn(0, "DS_HNAME" , P_DS_HNAME);

        	this.dsSearch.setColumn(0, "NO_MEDICAL" , P_NO_MEDICAL);
        	this.dsSearch.setColumn(0, "TY_STATUS" , P_TY_STATUS);

        	//trace("GR_SEARCH->" + this.FormInfo.GR_SEARCH);

        	if(this.FormInfo.GR_SEARCH != 1) { //개인이면
        		this.divSearch.form.ccfCD_CORP.set_enable(false);	// 법인
        		this.divSearch.form.ccfCD_DEPT.set_enable(false);	// 부서
        		this.divSearch.form.ccfID_SABUN.set_enable(false);	// 성명

        		//this.fnSelect();
        	}

        	if(this.FormInfo.GR_SEARCH != "1" && this.gfnIsNull(this.AuthClient.ID_PERSON)){
        		this.gfnAlert("의료비 신청 대상자가 아닙니다.");

        		this.FormBtns.Select.set_enable(false);
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.FormBtns.Reset.set_enable(false);

        		return;
        	}

        	trace(this.dsSearch.saveXML());

        	this.fnBtnMng();

        	this.FormBtns.Select.click();

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        	var validate = true;

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_MEDICAL"))){
        		//return false;
        	}

        	return validate;
        };

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))){
        		this.gfnAlert("부서를 입력하세요.", "fnVaidateCallback");
        		this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "ID_PERSON"))){
        		this.gfnAlert("성명을 입력하세요.", "fnVaidateCallback");
        		this.ccfID_SABUN.form.CDTextBox.setFocus();
        		return false;
        	}

        	return true;
        };

        /*
         *	그리드 필수입력 컬럼 검사
         */
        this.fnGridValidate = function(objGrid) {
        	var objDs = objGrid.getBindDataset();

        	var msg = "";
        	for (var i = 0; i < objDs.rowcount; i++) {
        		var flag = this.gfnGetFlag(objDs, i);
        		switch(flag) {
        			case "I":
        			case "U":
        				var arrRequired = objGrid.usRequired;
        				for(var j = 0; j < arrRequired.length; j++) {
        					var spl_req = arrRequired[j].split(';');
        					var colnm = spl_req[0];
        					var header = spl_req[1];
        					if (this.gfnIsNull(objDs.getColumn(i, colnm))) {
        						msg += (i + 1) + "열: [" + header + "] 필수입력값입니다.\n";
        					}
        				}
        				break;
        		}

        		var FR_MEDICAL = this.dsListSub.getColumn(i,"FR_MEDICAL")	// 진료시작일
        		var TO_MEDICAL = this.dsListSub.getColumn(i,"TO_MEDICAL")	// 진료종료일
        		var DT_RECEIPT = this.dsListSub.getColumn(i,"DT_RECEIPT")	// 영수증 발행일
        		var DT_REQUEST = this.dsListSub.getColumn(i,"DT_REQUEST")	// 신청일
        		if(!this.gfnIsNull(DT_RECEIPT)){
        			// 입력된 월에 OffSet 으로 지정된 만큼의 월을 더함
        			var DT_RECEIPT_3MON = this.gfnAddMonth(DT_RECEIPT,3);

        			// - 영수증 발행일이 신청일 이전으로 되게 해주세요
        			if (DT_RECEIPT > DT_REQUEST && !this.gfnIsNull(DT_REQUEST)){
        				msg += (i + 1) + "열 [영수증 발행일]은 [신청일] 이전으로 입력하셔야합니다. \n";
        			}

        			// - 영수증 발행일로 부터 신청일은 3개월 이내로만 가능
        			if (DT_RECEIPT_3MON < DT_REQUEST && !this.gfnIsNull(DT_REQUEST)){
        				msg += (i + 1) + "열 [영수증 발행일]로 부터 [신청일]은 3개월 이내로만 가능합니다. \n";
        			}

        			// - 영수증 발행일이 진료 시작일 보다 먼저 될 수 없게 해주세요
        			if (DT_RECEIPT < FR_MEDICAL && !this.gfnIsNull(FR_MEDICAL)){
        				msg += (i + 1) + "열 [영수증 발행일]은 [진료 시작일] 이후로 입력하셔야합니다. \n";
        			}
        		}

        		if(!this.gfnIsNull(DT_RECEIPT)){
        			// - 영수증 발행일이 진료 시작일 보다 먼저 될 수 없게 해주세요
        			if (FR_MEDICAL > DT_RECEIPT) {
        				msg += (i + 1) + "열 [진료 시작일]은 [영수증 발행일] 이전으로 입력하셔야합니다. \n";
        			}
        			if (FR_MEDICAL > TO_MEDICAL) {
        				msg += (i + 1) + "열 [진료 시작일]은 [진료 종료일] 이전으로 입력하셔야합니다. \n";
        			}

        		}

        		if(!this.gfnIsNull(DT_REQUEST)){
        			// - 진료 종료일이 신청일 이전으로 되게 해주세요
        			if (TO_MEDICAL > DT_REQUEST) {
        				msg += (i + 1) + "열 [진료 종료일]은 [신청일] 이전으로 입력하셔야합니다. \n";
        			}
        			if (TO_MEDICAL < FR_MEDICAL) {
        				msg += (i + 1) + "열 [진료 종료일]은 [진료 시작일] 이후로 입력하셔야합니다. \n";
        			}
        		}

        	}// for


        	if(this.gfnIsNull(msg)) {
        		return true;
        	}
        	else {
        		var arrError = [msg];
        		this.gfnAlert("msg.err.validator", arrError);
        		return false;
        	}
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "select") {
        			//신청일

        			var DT_REQUESTV = this.gfnIsNull(this.dsList.getColumn(0, "DT_REQUEST"))==true?"":this.dsList.getColumn(0, "DT_REQUEST").substr(0,4)+"."+this.dsList.getColumn(0, "DT_REQUEST").substr(4,2)+"."+this.dsList.getColumn(0, "DT_REQUEST").substr(6,2);

        			this.divData.form.staDT_REQUESTV.set_text(DT_REQUESTV);
        			//신청자
        			this.divData.form.staDS_HNAMEV.set_text(this.dsList.getColumn(0, "DS_HNAME"));
        			//신청일
        			this.divData.form.staYY_BASEV.set_text(this.gfnIsNull(this.dsList.getColumn(0, "DT_REQUEST"))==true?"":this.dsList.getColumn(0, "DT_REQUEST").substr(0,4));
        			//상반기 누계
        			this.divData.form.edtAM_FIRSTYEAR.set_value(this.gfnAppendComma(this.dsList.getColumn(0, "AM_FIRSTYEAR")));
        			//상반기 잔여한도
        			this.divData.form.edtAM_FIRSTYEAR_REST.set_value(this.gfnAppendComma(this.dsList.getColumn(0, "AM_FIRSTYEAR_REST")));
        			//하반기 누계
        			this.divData.form.edtAM_SECONDYEAR.set_value(this.gfnAppendComma(this.dsList.getColumn(0, "AM_SECONDYEAR")));
        			//하반기 잔여한도
        			this.divData.form.edtAM_SECONDYEAR_REST.set_value(this.gfnAppendComma(this.dsList.getColumn(0, "AM_SECONDYEAR_REST")));
        			//진행상태
        			this.divData.form.edtDS_STATUS.set_value(this.dsList.getColumn(0, "DS_STATUS"));
        			//금회 지급액
        			this.divData.form.edtAM_PROVIDE.set_value(this.gfnAppendComma(this.dsList.getColumn(0, "AM_PROVIDE")));
        	} else if (svcID == "selectSub") {

        		this.gfnGridAfterSelect(this.dxGrid);

        		//this.dsList.rowcount

        		//수정여부
        //		var exprStr = "expr: nx_flag !='#' && dataset.getColumn(currow,'TY_STATUS') == '2'?'none': nx_flag !='#' && dataset.getColumn(currow,'TY_INPUT')!='S'?'none':";
        		var exprStr = "expr: nx_flag !='#' && dataset.getColumn(currow,'YN_UPDATE') == 'N'?'none': nx_flag !='#' && dataset.getColumn(currow,'TY_INPUT')!='S'?'none':";
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","CHK"),"displaytype",exprStr+"'checkboxcontrol'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","CHK"),"edittype",exprStr+"'checkbox'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","CD_TREAT"),"edittype",exprStr+"'combo'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","NM_REQUEST"),"edittype",exprStr+"'text'");
        		//this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","CD_CONTRACT"),"edittype",exprStr+"'combo'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","DS_CONTRACT"),"edittype",exprStr+"'text'");
        		//this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","DS_CONTRACT"),"expandshow","expr:dataset.getColumn(currow,'TY_STATUS') == '2'?'hide':dataset.getColumn(currow,'TY_INPUT')!='S'?'hide':'show'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","DS_CONTRACT"),"expandshow","expr:dataset.getColumn(currow,'YN_UPDATE') == 'N'?'hide':dataset.getColumn(currow,'TY_INPUT')!='S'?'hide':'show'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","DT_BIRTH"),"edittype",exprStr+"'date'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","DS_MEDICAL"),"edittype",exprStr+"'text'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","DS_DISEASE"),"edittype",exprStr+"'text'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","FR_MEDICAL"),"edittype",exprStr+"'date'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","TO_MEDICAL"),"edittype",exprStr+"'date'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_SELF"),"edittype",exprStr+"'text'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_PUBLIC"),"edittype",exprStr+"'text'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_TOTAL_SELF"),"edittype",exprStr+"'text'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_CHOICE"),"edittype",exprStr+"'text'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_OTHER_CHOICE"),"edittype",exprStr+"'text'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","DT_RECEIPT"),"edittype",exprStr+"'date'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_PREPAY"),"edittype",exprStr+"'text'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_DISCOUNT"),"edittype",exprStr+"'text'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_CERTIFICATE"),"edittype",exprStr+"'text'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_TREAT_TOTAL"),"edittype",exprStr+"'text'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_REQUEST_TOTAL"),"edittype",exprStr+"'text'");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","DS_REMARK"),"edittype",exprStr+"'text'");

        		this.fnBtnMng();
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.dsSearch.setColumn(0, "NO_MEDICAL", this.dsResult.getColumn(0, "NO_MEDICAL"));
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	this.fnSetButton();
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         //코드 파인드
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        			break;

        		case "ccfCD_DEPT"://부서코드
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        					}
        					this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        					return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			break;

        		case "ccfID_SABUN": //사번
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;
        		default:
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(!this.gfnIsNull(arr)) {

        		switch(id) {
        			case "ccfCD_CORP": // 법인코드
        				this.ccfCD_DEPT.form.CDTextBox.set_value("");
        				this.ccfCD_DEPT.form.DSTextBox.set_value("");
        				this.ccfID_SABUN.form.CDTextBox.set_value("");
        				this.ccfID_SABUN.form.DSTextBox.set_value("");
        			break;

        			case "ccfCD_DEPT"://부서
        				this.ccfID_SABUN.form.CDTextBox.set_value("");
        				this.ccfID_SABUN.form.DSTextBox.set_value("");
        				break;

        			case "ccfID_SABUN"://사번
        				this.ccfCD_CORP.form.CDTextBox.set_value(arr[0]["CD_CORP"]);
        				this.ccfCD_CORP.form.DSTextBox.set_value(arr[0]["DS_CORP"]);
        				this.ccfCD_DEPT.form.CDTextBox.set_value(arr[0]["CD_DEPT"]);
        				this.ccfCD_DEPT.form.DSTextBox.set_value(arr[0]["DS_DEPT"]);
        				this.divSearch.form.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        				//조회
        				//this.FormBtns.Select.click();
        				break;

        			default:
        		}
        	}
        };

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	switch(id) {
        		case "DAX_CFBASEINFO":
        			/*
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "YN_CORP", "%");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			*/
        			dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        			dsUserParam.setColumn(nrow, "YN_CORP", "%");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분

        			break;

        		case "DAX_CFCOMMONCODE":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "FA");	//관계코드
        			break;

        		default:
        	}

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(!this.gfnIsNull(arr)) {
        		switch(id) {
        			case "DAX_CFBASEINFO":
        				this.dsListSub.setColumn(arr[0]["rowInfo"], "CD_CORP", arr[0]["CD_CORP"]);
        				this.dsListSub.setColumn(arr[0]["rowInfo"], "DS_CORP", arr[0]["DS_CORP"]);
        				this.dsListSub.setColumn(arr[0]["rowInfo"], "CD_DEPT", arr[0]["CD_DEPT"]);
        				this.dsListSub.setColumn(arr[0]["rowInfo"], "DS_DEPT", arr[0]["DS_DEPT"]);
        				this.dsListSub.setColumn(arr[0]["rowInfo"], "ID_SABUN", arr[0]["ID_SABUN"]);
        				this.dsListSub.setColumn(arr[0]["rowInfo"], "DS_HNAME", arr[0]["DS_HNAME"]);
        				this.dsListSub.setColumn(arr[0]["rowInfo"], "ID_PERSON", arr[0]["ID_PERSON"]);

        				break;

        			case "DAX_CFCOMMONCODE":
        				this.dsListSub.setColumn(arr[0]["rowInfo"], "CD_CONTRACT", arr[0]["CD_CODE"]);
        				this.dsListSub.setColumn(arr[0]["rowInfo"], "DS_CONTRACT", arr[0]["DS_CODE"]);
        				break;

        			default:
        		}
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         // 셀 수정가능 여부 (반드시 EnterCell에서 처리할것)
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var rowFlag = this.gfnGetFlag(this.dsListSub, row);

        	//trace("rowFlag->" + rowFlag + " / " +  this.dsListSub.getColumn(row, "ID_PERSON") +  "/ " +  this.AuthClient.ID_PERSON);

        	var TY_STATUS = this.dsListSub.getColumn(row, "TY_STATUS");

        	if(rowFlag != "I") {
        		//if( this.FormInfo.GR_SEARCH != "1")	return false;
        		//if( this.FormInfo.GR_SEARCH == "1" &&  this.dsListSub.getColumn(row, "ID_PERSON") != this.AuthClient.ID_PERSON){
        			return false;
        		//}
        	}

        	// 공통 > Setting > 그리드정보 에서 셋팅한 내용대로
        	var nGrdSpcRow = this.dsGridSpec.findRow( "DS_FIELD", colnm);
        	var YN_READONLY = this.dsGridSpec.getColumn(nGrdSpcRow, "YN_READONLY");
        	if(YN_READONLY == "Y") return false;
        	if(YN_READONLY =="U" && (this.gfnIsNull(rowFlag) || rowFlag == "U")){	// flag 가 U 이거나 빈값
        		return false;
        	}

        	return true;
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        	}
        };

        //확장버튼 관리
        this.fnBtnMng = function() {
        	//DAB_MEDICAL 그리드의 요청일자와 오늘일자가 같으면 입력버튼 활성화
        	//if(this.gfnGetDate() != this.getOwnerFrame().arguments.Args["DT_REQUEST"]) {


        	var P_TY_STATUS = this.gfnNvl(this.getOwnerFrame().TY_STATUS, "");
        	var bEnable = (P_TY_STATUS == "2" || P_TY_STATUS == "4" || P_TY_STATUS == "5") ?  false : true;

        	this.FormBtns.Add.set_enable(bEnable);
        	this.FormBtns.Del.set_enable(bEnable);
        	this.FormBtns.Save.set_enable(bEnable);

        /*
        	if(this.gfnGetDate() != this.dsSearch.getColumn(0, "DT_REQUEST")) {
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.FormBtns.Save.set_enable(false);
        	}else{
        		this.FormBtns.Add.set_enable(true);
        		this.FormBtns.Del.set_enable(true);
        		this.FormBtns.Save.set_enable(true);
        	}
        */

        	//의료비 출력버튼
        	if(this.dsListSub.rowcount == 0) {
        		this.btnRequest.set_enable(false);
        	}else{
        		if(this.dsListSub.rowcount==1 && this.dsListSub.getColumn(0,1) == "#"){
        			this.btnRequest.set_enable(false);
        		}else{
        			this.btnRequest.set_enable(true);
        		}
        	}
        };

        //의료비 출력
        this.fnMedicalRequestRpt = function() {
        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("TY_FORM", 	"string");
        	this.dsReport.addColumn("CD_CORP", 	"string");
        	this.dsReport.addColumn("CD_DEPT", 	"string");
        	this.dsReport.addColumn("ID_SABUN", "string");
        	this.dsReport.addColumn("ID_PERSON", "string");
        	this.dsReport.addColumn("NO_MEDICAL", "string");
        	this.dsReport.addColumn("DT_REQUEST", "string");
        	this.dsReport.addColumn("GR_SEARCH", "string");
        	this.dsReport.addColumn("GR_DEPT", "string");
        	this.dsReport.addColumn("ID_LOGIN", "string");

        	var nrow = this.dsReport.addRow();
        	var TY_FORM = "신청자용";
        	this.dsReport.setColumn(nrow, "TY_FORM", 	TY_FORM);
        	this.dsReport.setColumn(nrow, "CD_CORP", 	this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsReport.setColumn(nrow, "CD_DEPT", 	this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsReport.setColumn(nrow, "ID_SABUN", 	this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsReport.setColumn(nrow, "ID_PERSON", 	this.dsSearch.getColumn(0, "ID_PERSON"));
        	this.dsReport.setColumn(nrow, "NO_MEDICAL", this.dsSearch.getColumn(0, "NO_MEDICAL"));
        	this.dsReport.setColumn(nrow, "DT_REQUEST", this.dsSearch.getColumn(0, "DT_REQUEST"));
        	this.dsReport.setColumn(nrow, "GR_SEARCH", 	this.FormInfo.GR_SEARCH);
        	this.dsReport.setColumn(nrow, "GR_DEPT", 	this.AuthClient.CD_DEPT);
        	this.dsReport.setColumn(nrow, "ID_LOGIN", 	this.AuthClient.ID_USER);

        	trace(this.dsReport.saveXML());

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report=dsReport";
        	var reportpath  = "/da/dab/DAB_MEDICAL_REQUEST.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };

        //this.dsList_onvaluechanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
        this.dsListSub_oncolumnchanged = function(obj,e)
        {
        	var msg = "";

        	if(e.oldvalue == e.newvalue) return;
        /*
        	AM_SELF	일부본인부담(급여)
        	AM_PUBLIC	공단부담(급여)
        	AM_TOTAL_SELF	전액본인부담(급여)
        	AM_CHOICE	선택진료료(비급여)
        	AM_OTHER_CHOICE	선택진료외(비급여)
        	AM_PREPAY	기납부액
        	AM_DISCOUNT	할인액
        	AM_CERTIFICATE	기타및제증명
        */
        	switch(e.columnid) {
        		case "AM_SELF":
        		case "AM_PUBLIC":
        		case "AM_TOTAL_SELF":
        		case "AM_CHOICE":
        		case "AM_OTHER_CHOICE":
        		case "AM_PREPAY":
        		case "AM_DISCOUNT":
        		case "AM_CERTIFICATE":
        			var amSelf = isNaN(parseFloat(this.dsListSub.getColumn(e.row,"AM_SELF")))==true?0:parseFloat(this.dsListSub.getColumn(e.row,"AM_SELF"));
        			var amPublic = isNaN(parseFloat(this.dsListSub.getColumn(e.row,"AM_PUBLIC")))==true?0:parseFloat(this.dsListSub.getColumn(e.row,"AM_PUBLIC"));
        			var amTotalSelf = isNaN(parseFloat(this.dsListSub.getColumn(e.row,"AM_TOTAL_SELF")))==true?0:parseFloat(this.dsListSub.getColumn(e.row,"AM_TOTAL_SELF"));
        			var amChoice = isNaN(parseFloat(this.dsListSub.getColumn(e.row,"AM_CHOICE")))==true?0:parseFloat(this.dsListSub.getColumn(e.row,"AM_CHOICE"));
        			var amOtherChoice = isNaN(parseFloat(this.dsListSub.getColumn(e.row,"AM_OTHER_CHOICE")))==true?0:parseFloat(this.dsListSub.getColumn(e.row,"AM_OTHER_CHOICE"));
        			var amPrepay = isNaN(parseFloat(this.dsListSub.getColumn(e.row,"AM_PREPAY")))==true?0:parseFloat(this.dsListSub.getColumn(e.row,"AM_PREPAY"));
        			var amDiscount = isNaN(parseFloat(this.dsListSub.getColumn(e.row,"AM_DISCOUNT")))==true?0:parseFloat(this.dsListSub.getColumn(e.row,"AM_DISCOUNT"));
        			var amCertificate = isNaN(parseFloat(this.dsListSub.getColumn(e.row,"AM_CERTIFICATE")))==true?0:parseFloat(this.dsListSub.getColumn(e.row,"AM_CERTIFICATE"));

        			var amTreatTotal = amSelf + amPublic + amTotalSelf + amChoice + amOtherChoice - amPrepay - amDiscount;
        			var amRequestTotal =  amSelf + amTotalSelf + amChoice + amOtherChoice - amPrepay - amDiscount;

        			this.dsListSub.setColumn(e.row,"AM_TREAT_TOTAL", amTreatTotal);
        			this.dsListSub.setColumn(e.row,"AM_REQUEST_TOTAL", amRequestTotal);
        			/***************************************************************************************
        			■ 진료비총액          : 일부본인부담(급여) + 공단부담(급여) + 전액본인부담(급여) + 선택진료료(비급여) + 선택진료외(비급여) - 기납부액 - 할인액
        			■ 신청금액(본인부담) : 일부본인부담(급여)                    + 전액본인부담(급여) + 선택진료료(비급여) + 선택진료외(비급여) - 기납부액 - 할인액
        			***************************************************************************************/

        			break;


        		case "DT_RECEIPT":	// 영수증발행일
        			if(!this.gfnIsNull(e.newvalue)){
        				var DT_REQUEST = this.dsListSub.getColumn(e.row,"DT_REQUEST")	// 신청일
        				var FR_MEDICAL = this.dsListSub.getColumn(e.row,"FR_MEDICAL")	// 진료시작일
        				var TO_MEDICAL = this.dsListSub.getColumn(e.row,"TO_MEDICAL")	// 진료종료일
        				// 입력된 월에 OffSet 으로 지정된 만큼의 월을 더함
        				var DT_RECEIPT_3MON = this.gfnAddMonth(e.newvalue,3);
        				//trace(" 영수증발행일->" + e.newvalue + " 영수증발행일 3개월->" + DT_RECEIPT_3MON
        				//+ "\n   신청일->" + DT_REQUEST +
        				//+ "  진료시작일->" + FR_MEDICAL + "  진료종료일->" + TO_MEDICAL
        				//);


        				// - 영수증 발행일이 신청일 이전으로 되게 해주세요
        				if (e.newvalue > DT_REQUEST && !this.gfnIsNull(DT_REQUEST)){
        					msg += (e.row + 1) + "열 [영수증 발행일]은 [신청일] 이전으로 입력하셔야합니다. \n";
        					this.dsListSub.setColumn(e.row,"DT_RECEIPT","");
        				}

        				// - 영수증 발행일로 부터 신청일은 3개월 이내로만 가능
        				if (DT_RECEIPT_3MON < DT_REQUEST && !this.gfnIsNull(DT_REQUEST)){
        					msg += (e.row + 1) + "열 [영수증 발행일]로 부터 [신청일]은 3개월 이내로만 가능합니다. \n";
        					this.dsListSub.setColumn(e.row,"DT_RECEIPT","");
        				}

        				// - 영수증 발행일이 진료 시작일 보다 먼저 될 수 없게 해주세요
        				if (e.newvalue < FR_MEDICAL && !this.gfnIsNull(FR_MEDICAL)){
        					msg += (e.row + 1) + "열 [영수증 발행일]은 [진료 시작일] 이후로 입력하셔야합니다. \n";
        					this.dsListSub.setColumn(e.row,"DT_RECEIPT","");
        				}
        			}

        		break;
        		case "FR_MEDICAL":	// 진료시작일
        			var DT_RECEIPT = this.dsListSub.getColumn(e.row,"DT_RECEIPT")	// 영수증 발행일
        			var TO_MEDICAL = this.dsListSub.getColumn(e.row,"TO_MEDICAL")	// 진료종료일
        			if(!this.gfnIsNull(DT_RECEIPT)){
        				// - 영수증 발행일이 진료 시작일 보다 먼저 될 수 없게 해주세요
        				if (e.newvalue > DT_RECEIPT) {
        					msg += (e.row + 1) + "열 [진료 시작일]은 [영수증 발행일] 이전으로 입력하셔야합니다. \n";
        					this.dsListSub.setColumn(e.row,"FR_MEDICAL","");
        				}
        				if (e.newvalue > TO_MEDICAL) {
        					msg += (e.row + 1) + "열 [진료 시작일]은 [진료 종료일] 이전으로 입력하셔야합니다. \n";
        					this.dsListSub.setColumn(e.row,"FR_MEDICAL","");
        				}
        			}
        		break;
        		case "TO_MEDICAL":	// 진료종료일
        			var DT_REQUEST = this.dsListSub.getColumn(e.row,"DT_REQUEST")	// 신청일
        			var FR_MEDICAL = this.dsListSub.getColumn(e.row,"FR_MEDICAL")	// 진료시작일
        			if(!this.gfnIsNull(DT_REQUEST)){
        				// - 진료 종료일이 신청일 이전으로 되게 해주세요
        				if (e.newvalue > DT_REQUEST) {
        					msg += (e.row + 1) + "열 [진료 종료일]은 [신청일] 이전으로 입력하셔야합니다. \n";
        					this.dsListSub.setColumn(e.row,"TO_MEDICAL","");
        				}
        				if (e.newvalue < FR_MEDICAL) {
        					msg += (e.row + 1) + "열 [진료 종료일]은 [진료 시작일] 이후로 입력하셔야합니다. \n";
        					this.dsListSub.setColumn(e.row,"TO_MEDICAL","");
        				}
        			}
        		break;
        		default:
        		break;
        	}

        	if(!this.gfnIsNull(msg)){
        		var arrError = [msg];
        		this.gfnAlert("msg.err.validator", arrError);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_REQUEST.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.sta16.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.sta15.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.sta08.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.sta13.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.sta14.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.sta11.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.sta12.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.sta07.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.sta06.addEventHandler("onclick",this.sta04_onclick,this);
            this.dsListSub.addEventHandler("oncolumnchanged",this.dsListSub_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_MEDICAL_REQUEST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
