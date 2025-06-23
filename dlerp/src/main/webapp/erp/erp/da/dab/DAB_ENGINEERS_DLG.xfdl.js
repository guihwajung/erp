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
            this.getSetter("maxheight").set("455");
            if (Form == this.constructor)
            {
                this._setFormPosition(688,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_ID\" type=\"INT\" size=\"256\"/><Column id=\"CD_CORP_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON_REQUEST\" type=\"INT\" size=\"256\"/><Column id=\"CD_DEPT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CERTIFICATE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BUSU_REQUEST\" type=\"INT\" size=\"256\"/><Column id=\"DS_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIRTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_ENGINEERS_DEAILSELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_ENGINEERS_SAVE</Col></Row><Row><Col id=\"TARGET\">select_emp</Col><Col id=\"SP\">DAXPR_BASEINFO_CODEFIND_FULL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE_REQUEST","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_REQUEST","0","staTITLE_REQUEST:0","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_REQUEST_bg","staCD_CORP_REQUEST:-1","staCD_CORP_REQUEST:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP_REQUEST","staCD_CORP_REQUEST:5","staCD_CORP_REQUEST:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("26");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_REQUEST","0","staCD_CORP_REQUEST:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_REQUEST_bg","staCD_DEPT_REQUEST:-1","staCD_DEPT_REQUEST:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_REQUEST","staCD_DEPT_REQUEST:5","staCD_DEPT_REQUEST:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("29");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_REQUEST","staCD_CORP_REQUEST_bg:-1","staCD_CORP_REQUEST_bg:-30","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_REQUEST_bg","staID_SABUN_REQUEST:-1","staID_SABUN_REQUEST:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN_REQUEST","staID_SABUN_REQUEST:5","staID_SABUN_REQUEST:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("30");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_FULL");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staEMPTY1","staCD_DEPT_REQUEST_bg:-1","staCD_DEPT_REQUEST_bg:-30","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staEMPTY1_bg","staEMPTY1:-1","staEMPTY1:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
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
            obj.set_taborder("1");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_bg","staCD_CORP:-1","staCD_CORP:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","staCD_CORP:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0","staCD_CORP:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_bg","staCD_DEPT:-1","staCD_DEPT:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:5","staCD_DEPT:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","staCD_CORP_bg:-1","staCD_CORP_bg:-30","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg","staID_SABUN:-1","staID_SABUN:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:5","staID_SABUN:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_FULL");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION","staCD_DEPT_bg:-1","staCD_DEPT_bg:-30","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION_bg","staCD_POSITION:-1","staCD_POSITION:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_POSITION","staCD_POSITION:5","staCD_POSITION:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("18");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            obj.set_enableevent("true");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE_DETAIL","0","187",null,"30","441",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_BUSU_REQUEST","0","217","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("신청부수");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_CERTIFICATE_bg","staNO_BUSU_REQUEST:-1","staNO_BUSU_REQUEST:-30","609","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","340","217","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_SINCHUNG_bg","staDT_REQUEST:-1","staDT_REQUEST:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_REQUEST","staDT_REQUEST:5","staDT_REQUEST:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_RESON","0","246","80","70",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("발급사유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK_bg","staDS_RESON:-1","staDS_RESON:-70","609","70",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RESON","staDS_RESON:5","staDS_RESON:-65","597","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","279","329","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
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
            obj.set_taborder("20");
            obj.set_visible("false");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("부서");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON_REQUEST","437","62","103","19",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_visible("false");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("부서");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_BUSU_REQUEST","86","222","112","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
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

            obj = new BindItem("item18","divData.form.calDT_REQUEST","value","dsList","DT_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.txtDS_RESON","value","dsList","DS_REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.edtNO_BUSU_REQUEST","value","dsList","NO_BUSU_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_ENGINEERS_DLG.xfdl", function() {
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
        	//this.fnSetCombo();
        	this.fnInit();

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

        	// 상세정보

        	this.calDT_REQUEST    = this.divData.form.calDT_REQUEST;		// 발급일자
        	this.edtNO_BUSU_REQUEST = this.divData.form.edtNO_BUSU_REQUEST; // 신청부수
        	this.txtDS_RESON       = this.divData.form.txtDS_RESON;		// 비고

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

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("NO_ID", "int");
        	this.dsSelect.addColumn("ID_SABUN", "string");

        	// 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("NO_ID", "int");
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("CD_CORP_REQUEST", "string");
        	this.dsSave.addColumn("ID_SABUN_REQUEST", "string");
        	this.dsSave.addColumn("ID_PERSON_REQUEST", "int");
        	this.dsSave.addColumn("CD_DEPT_REQUEST", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("CD_POSITION", "string");
        	this.dsSave.addColumn("DT_BIRTH", "string");
        	this.dsSave.addColumn("NO_BUSU_REQUEST", "int");
        	this.dsSave.addColumn("DS_REASON", "string");
        	this.dsSave.addColumn("ID_USER", "string");


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
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {

        	if (!this.gfnIsNull(this.getOwnerFrame().NO_ID) && this.getOwnerFrame().TY_FLAG == "U") {
        		// 수정모드
        		this.fnSelect();

        	} else {
         		// 신규등록모드
        		if (this.FormInfo.GR_SEARCH != 1) {
        			if (this.gfnIsNull(this.AuthClient.ID_PERSON)) {
        				this.gfnAlert("임직원이 아니므로 신청이 불가능합니다.");
        				return;
        			}
        		}

        		this.fnSelectEmp("init");
        	}

        	this.fnSetControl();
        }

        this.fnSelectEmp = function(vSvcId) {
        	this.dsSelectEmp.clearData();
        	this.dsSelectEmp.addRow();

        	this.dsSelectEmp.setColumn(0, "TY_GUBUN" , "1");
        	this.dsSelectEmp.setColumn(0, "CN_ROW"   , 50);
        	this.dsSelectEmp.setColumn(0, "VALUE"    , vSvcId == "init" ? this.AuthClient.ID_USER : this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSelectEmp.setColumn(0, "MIN_VALUE", "");
        	this.dsSelectEmp.setColumn(0, "CD_CORP"  , this.getOwnerFrame().CD_CORP);
        	this.dsSelectEmp.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelectEmp.setColumn(0, "CD_DEPT"  , vSvcId == "init" ? "" : this.dsList.getColumn(0, "CD_DEPT"));
        	this.dsSelectEmp.setColumn(0, "YN_CORP"  , "N");
        	this.dsSelectEmp.setColumn(0, "TY_RETIRE", "");

        	var strSvcId    = vSvcId == "init" ? "selectInitEmp" : "selectEmp";
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

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {
        	if (this.gfnIsNull(this.getOwnerFrame().NO_ID) || this.getOwnerFrame().NO_ID == 0	||
        	    this.gfnIsNull(this.getOwnerFrame().ID_PERSON) || this.getOwnerFrame().ID_PERSON == 0) {
        		return;
        	}

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsSelect.setColumn(0, "CD_DEPT", this.getOwnerFrame().CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_PERSON", this.getOwnerFrame().ID_PERSON);
        	this.dsSelect.setColumn(0, "NO_ID", this.getOwnerFrame().NO_ID);
        	this.dsSelect.setColumn(0, "ID_SABUN", this.getOwnerFrame().ID_SABUN);

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
        	if (this.gfnIsNull(this.getOwnerFrame().NO_ID) || this.getOwnerFrame().NO_ID == 0) {
        		flag = "I";
        	} else {
        		flag = "U";
        	}

        	this.dsSave.setColumn(nrow, "NO_ID", this.dsList.getColumn(0, "NO_ID"));
        	this.dsSave.setColumn(nrow, "TY_WRK", flag);
        	this.dsSave.setColumn(nrow, "CD_CORP_REQUEST", this.dsList.getColumn(0, "CD_CORP_REQUEST"));
        	this.dsSave.setColumn(nrow, "ID_SABUN_REQUEST", this.dsList.getColumn(0, "ID_SABUN_REQUEST"));
        	this.dsSave.setColumn(nrow, "ID_PERSON_REQUEST", this.dsList.getColumn(0, "ID_PERSON_REQUEST"));
        	this.dsSave.setColumn(nrow, "CD_DEPT_REQUEST", this.dsList.getColumn(0, "CD_DEPT_REQUEST"));
        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(0, "CD_DEPT"));
        	this.dsSave.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(0, "CD_POSITION"));
        	this.dsSave.setColumn(nrow, "DT_BIRTH", this.dsList.getColumn(0, "DT_BIRTH"));
        	this.dsSave.setColumn(nrow, "NO_BUSU_REQUEST", this.dsList.getColumn(0, "NO_BUSU_REQUEST"));
        	this.dsSave.setColumn(nrow, "DS_REASON", this.dsList.getColumn(0, "DS_REASON"));
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);


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

        	} else {
        		this.ccfID_SABUN_REQUEST.form.set_enable(false);
        		this.ccfID_SABUN.form.set_enable(false);
        	}

        	this.divBtns.form.btnOK.set_enable(true);

        	var sNO_APRV = this.gfnNvl(this.dsList.getColumn(0, "NO_APRV"), "0");

        	trace(" sNO_APRV2=>" + sNO_APRV);
        	if (sNO_APRV > "1") {	// 결재중, 결재완료인 경우

        		// 대상자정보
        		this.ccfID_SABUN.set_enable(false);		// 성명
        		this.ccfID_SABUN_REQUEST.set_enable(false);
        		// 발급정보
        		this.edtNO_BUSU_REQUEST.set_enable(false);		// 발급부수
        		this.txtDS_RESON.set_enable(false);			// 발급사유

        		this.divBtns.form.btnOK.set_enable(false);
        	} else {
        		if (this.FormInfo.GR_SEARCH == "1") {
        			this.ccfCD_CORP.form.set_enable(true);
        		} else {
        			this.ccfCD_CORP.form.set_readonly(false);
        		}
        		this.divBtns.form.btnOK.set_enable(true);
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

        	if (this.gfnIsNull(this.edtNO_BUSU_REQUEST.value) || this.edtNO_BUSU_REQUEST.value==0) {
        		this.fnValidCallback = function() {
        			this.edtNO_BUSU_REQUEST.setFocus();
        		}
        		this.gfnAlert("신청부수를 입력해주세요.", "fnValidCallback");
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

        	this.gfnConfirm("신청하시겠습니까?", "fnOKCallback");
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
        	} else if (svcID == "selectInitEmp") {
        		this.dsList.clearData();
        		this.dsList.addRow();

        		if (this.dsEmp.getColumn(0, "ID_RESIDENT").substr(6,1) == "1" || this.dsEmp.getColumn(0, "ID_RESIDENT").substr(6,1)  == "2"
        		   || this.dsEmp.getColumn(0, "ID_RESIDENT").substr(6,1)  == "5" || this.dsEmp.getColumn(0, "ID_RESIDENT").substr(6,1)  == "6")
        		{
        			var vBirth = '19'+ this.dsEmp.getColumn(0, "ID_RESIDENT").substr(0,6) ;
        		}
        		else
        		{
        			var vBirth = '20'+ this.dsEmp.getColumn(0, "ID_RESIDENT").substr(0,6) ;
        		}
        // 		trace(" ID_RESIDENT=>" + this.dsEmp.getColumn(0, "ID_RESIDENT"));
        // 		trace(" vBirth=>" + vBirth);
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
        		this.dsList.setColumn(0, "DT_BIRTH", vBirth);
        		this.dsList.setColumn(0, "NO_BUSU_REQUEST", 1);
        		this.dsList.setColumn(0, "DT_REQUEST", this.gfnGetDate());

        	}  else if (svcID == "selectEmp") {

        		if (this.dsEmp.getColumn(0, "ID_RESIDENT").substr(6,1) == "1" || this.dsEmp.getColumn(0, "ID_RESIDENT").substr(6,1)  == "2"
        		   || this.dsEmp.getColumn(0, "ID_RESIDENT").substr(6,1)  == "5" || this.dsEmp.getColumn(0, "ID_RESIDENT").substr(6,1)  == "6")
        		{
        			var vBirth = '19'+ this.dsEmp.getColumn(0, "ID_RESIDENT").substr(0,6) ;
        		}
        		else
        		{
        			var vBirth = '20'+ this.dsEmp.getColumn(0, "ID_RESIDENT").substr(0,6) ;
        		}
        // 		trace(" ID_RESIDENT=>" + this.dsEmp.getColumn(0, "ID_RESIDENT"));
        // 		trace(" vBirth=>" + vBirth);
        		// 대상자정보
        		this.dsList.setColumn(0, "CD_CORP"    , this.dsEmp.getColumn(0, "CD_CORP"));		// 법인
        		this.dsList.setColumn(0, "DS_CORP"    , this.dsEmp.getColumn(0, "DS_CORP"));
        		this.dsList.setColumn(0, "ID_SABUN"   , this.dsEmp.getColumn(0, "ID_SABUN"));		// 성명
        		this.dsList.setColumn(0, "DS_HNAME"   , this.dsEmp.getColumn(0, "DS_HNAME"));
        		this.dsList.setColumn(0, "ID_PERSON"  , this.dsEmp.getColumn(0, "ID_PERSON"));
        // 		this.dsList.setColumn(0, "CD_DEPT"    , this.dsEmp.getColumn(0, "CD_DEPT"));		// 부서
        // 		this.dsList.setColumn(0, "DS_DEPT"    , this.dsEmp.getColumn(0, "DS_DEPT"));
        // 		this.dsList.setColumn(0, "CD_POSITION", this.dsEmp.getColumn(0, "CD_POSITION"));	// 직위
        // 		this.dsList.setColumn(0, "DS_POSITION", this.dsEmp.getColumn(0, "DS_POSITION"));
        // 		this.dsList.setColumn(0, "DS_POSITION", this.dsEmp.getColumn(0, "DS_POSITION"));
        		this.dsList.setColumn(0, "DT_BIRTH", vBirth);
        		this.dsList.setColumn(0, "NO_BUSU_REQUEST", 1);
        		this.dsList.setColumn(0, "DT_REQUEST", this.gfnGetDate());
        	} else if (svcID == "save") {
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
        			this.fnSelectEmp();
        		} else {
        			// 대상자정보
        			this.dsList.setColumn(0, "CD_DEPT"    , "");	// 부서
        			this.dsList.setColumn(0, "DS_DEPT"    , "");
        			this.dsList.setColumn(0, "CD_POSITION", "");	// 직위
        			this.dsList.setColumn(0, "DS_POSITION", "");
        			this.dsList.setColumn(0, "ID_PERSON"  , 0 );	// 대상자 ID_PERSON

        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staCD_CORP_bg.addEventHandler("onclick",this.sta11_onclick,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_ENGINEERS_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
