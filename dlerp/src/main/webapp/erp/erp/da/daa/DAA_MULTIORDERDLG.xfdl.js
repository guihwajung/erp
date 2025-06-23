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
            this.set_titletext("일괄발령입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(346,265);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ORDER1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORDER1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ORDER2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORDER2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ED\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ED\" type=\"STRING\" size=\"256\"/><Column id=\"CD_OCCUPATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OCCUPATION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JOBTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ORDER1\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","-6","95.50%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("일괄발령입력");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ORDER1","0","staTITLE:0","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("대분류코드");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ORDER1_bg","staCD_ORDER1:-1","staCD_ORDER1:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_ORDER1","staCD_ORDER1:5","staCD_ORDER1:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("25");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ORDER2","0","staCD_ORDER1:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("소분류코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ORDER2_bg","staCD_ORDER2:-1","staCD_ORDER2:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_ORDER2","staCD_ORDER2:5","staCD_ORDER2:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFORDER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0","staCD_ORDER2:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_bg","staCD_DEPT:-1","staCD_DEPT:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:5","staCD_DEPT:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("25");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ED","0","staCD_DEPT:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ED_bg","staCD_ED:-1","staCD_ED:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_ED","staCD_ED:5","staCD_ED:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_OCCUPATION","0","staCD_ED:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_OCCUPATION_bg","staCD_OCCUPATION:-1","staCD_OCCUPATION:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_OCCUPATION","staCD_OCCUPATION:5","staCD_OCCUPATION:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DUTY","0","staCD_OCCUPATION:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("직무");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DUTY_bg","staCD_DUTY:-1","staCD_DUTY:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DUTY","staCD_DUTY:5","staCD_DUTY:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("29");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_JOBTYPE","0","staCD_DUTY:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_JOBTYPE_bg","staCD_JOBTYPE:-1","staCD_JOBTYPE:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_JOBTYPE","staCD_JOBTYPE:5","staCD_JOBTYPE:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("32");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","448","43","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_bg","staCD_CORP:-1","staCD_CORP:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","staCD_CORP:-25","240","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSN_YEAR","448","159","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("년차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSN_YEAR_bg","staSN_YEAR:-1","staSN_YEAR:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtSN_YEAR","staSN_YEAR:5","staSN_YEAR:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PROVATION_FROM","448","188","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("발령기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PROVATION_FROM_bg","staDT_PROVATION_FROM:-1","staDT_PROVATION_FROM:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_PROVATION_FROM","staDT_PROVATION_FROM:5","staDT_PROVATION_FROM:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_PROVATION_TO","tclDT_PROVATION_FROM:30","staDT_PROVATION_FROM:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","117","staCD_JOBTYPE:10","130","27",null,null,null,null,null,null,this.divData.form);
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("15");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfCD_ORDER1.form.CDTextBox","value","dsData","CD_ORDER1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfCD_ORDER1.form.DSTextBox","value","dsData","DS_ORDER1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccfCD_ORDER2.form.CDTextBox","value","dsData","CD_ORDER2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfCD_ORDER2.form.DSTextBox","value","dsData","DS_ORDER2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfCD_DEPT.form.CDTextBox","value","dsData","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ccfCD_DEPT.form.DSTextBox","value","dsData","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccfCD_ED.form.CDTextBox","value","dsData","CD_ED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ccfCD_ED.form.DSTextBox","value","dsData","DS_ED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ccfCD_OCCUPATION.form.CDTextBox","value","dsData","CD_OCCUPATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ccfCD_OCCUPATION.form.DSTextBox","value","dsData","DS_OCCUPATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ccfCD_DUTY.form.CDTextBox","value","dsData","CD_DUTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ccfCD_DUTY.form.DSTextBox","value","dsData","DS_DUTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ccfCD_JOBTYPE.form.CDTextBox","value","dsData","CD_JOBTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ccfCD_JOBTYPE.form.DSTextBox","value","dsData","DS_JOBTYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_MULTIORDERDLG.xfdl", function() {
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
        	this.ccfCD_ORDER1     = this.divData.form.ccfCD_ORDER1;			// 대분류코드
        	this.ccfCD_ORDER2     = this.divData.form.ccfCD_ORDER2;			// 소분류코드
        	this.ccfCD_DEPT       = this.divData.form.ccfCD_DEPT;			// 부서
        	this.ccfCD_ED         = this.divData.form.ccfCD_ED;				// 직위
        	this.ccfCD_OCCUPATION = this.divData.form.ccfCD_OCCUPATION;		// 직책
        	this.ccfCD_DUTY       = this.divData.form.ccfCD_DUTY;			// 직무
        	this.ccfCD_JOBTYPE    = this.divData.form.ccfCD_JOBTYPE;		// 직종
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_ORDER1.BeforeUserDataSetParam     = "fnBeforeUserDataSetParam";		// 대분류코드
        	this.ccfCD_ORDER1.AfterCDTextChanged         = "codefind_AfterCDTextChanged";
        	this.ccfCD_ORDER2.BeforeUserDataSetParam     = "fnBeforeUserDataSetParam";		// 소분류코드
        	this.ccfCD_DEPT.BeforeUserDataSetParam       = "fnBeforeUserDataSetParam";		// 부서
        	this.ccfCD_ED.BeforeUserDataSetParam         = "fnBeforeUserDataSetParam";		// 직위
        	this.ccfCD_OCCUPATION.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";		// 직책
        	this.ccfCD_DUTY.BeforeUserDataSetParam       = "fnBeforeUserDataSetParam";		// 직무
        	this.ccfCD_JOBTYPE.BeforeUserDataSetParam    = "fnBeforeUserDataSetParam";		// 직종
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {

        }

        /*
         * 입력 버튼
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

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function() {
        	var cd_order1 = this.dsData.getColumn(0, "CD_ORDER1");
        	var cd_order2 = this.dsData.getColumn(0, "CD_ORDER2");

        	if (this.gfnIsNull(cd_order1)) {
        		validate = false;
        		this.gfnAlert("대분류코드를 입력하세요.");
        		return false;
        	}
        	else if (this.gfnIsNull(cd_order2)) {
        		validate = false;
        		this.gfnAlert("소분류코드를 입력하세요.");
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.btnOK_onclick = function(obj, e) {
        	if (!this.fnSelectValid()) return;

        	var json = {};
        	json.CD_ORDER1     = this.dsData.getColumn(0, "CD_ORDER1");
        	json.DS_ORDER1     = this.dsData.getColumn(0, "DS_ORDER1");
        	json.CD_ORDER2     = this.dsData.getColumn(0, "CD_ORDER2");
        	json.DS_ORDER2     = this.dsData.getColumn(0, "DS_ORDER2");
        	json.CD_DEPT       = this.dsData.getColumn(0, "CD_DEPT");
        	json.DS_DEPT       = this.dsData.getColumn(0, "DS_DEPT");
        	json.CD_POSITION   = this.dsData.getColumn(0, "CD_ED");
        	json.DS_POSITION   = this.dsData.getColumn(0, "DS_ED");
        	json.CD_OCCUPATION = this.dsData.getColumn(0, "CD_OCCUPATION");
        	json.DS_OCCUPATION = this.dsData.getColumn(0, "DS_OCCUPATION");
        	json.CD_DUTY       = this.dsData.getColumn(0, "CD_DUTY");
        	json.DS_DUTY       = this.dsData.getColumn(0, "DS_DUTY");
        	json.CD_JOBTYPE    = this.dsData.getColumn(0, "CD_JOBTYPE");
        	json.DS_JOBTYPE    = this.dsData.getColumn(0, "DS_JOBTYPE");

        	this.getParentContext().close(JSON.stringify(json));
        }

        this.btnCANCLE_onclick = function(obj, e) {
        	this.getParentContext().close(false);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}
        }

        // 대분류 값에 따라 확성화 or 비활성화처리
        this.dsData_onvaluechanged = function(obj, e) {
        	if (e.oldvalue != e.newvalue) {
        		if (e.columnid == "CD_ORDER1") {
        			var cdOrder1 = this.dsData.getColumn(e.row,"CD_ORDER1");	// 대분류

        			if (cdOrder1 == "01" || cdOrder1 == "03" || cdOrder1 == "14") {
        				this.ccfCD_DEPT.set_enable(true);			// 부서
        				this.ccfCD_ED.set_enable(true);				// 직위
        				this.ccfCD_OCCUPATION.set_enable(true);		// 직책
        				this.ccfCD_DUTY.set_enable(true);			// 직무
        				this.ccfCD_JOBTYPE.set_enable(true);		// 직종
        			} else if(cdOrder1 == "02" || cdOrder1 == "04" || cdOrder1 == "11") {
        				this.ccfCD_DEPT.set_enable(false);
        				this.ccfCD_ED.set_enable(false);
        				this.ccfCD_OCCUPATION.set_enable(false);
        				this.ccfCD_DUTY.set_enable(false);
        				this.ccfCD_JOBTYPE.set_enable(false);

        				this.ccfCD_DEPT.form.CDTextBox.set_value("");
        				this.ccfCD_DEPT.form.DSTextBox.set_value("");
        				this.ccfCD_ED.form.CDTextBox.set_value("");
        				this.ccfCD_ED.form.DSTextBox.set_value("");
        				this.ccfCD_OCCUPATION.form.CDTextBox.set_value("");
        				this.ccfCD_OCCUPATION.form.DSTextBox.set_value("");
        				this.ccfCD_DUTY.form.CDTextBox.set_value("");
        				this.ccfCD_DUTY.form.DSTextBox.set_value("");
        				this.ccfCD_JOBTYPE.form.CDTextBox.set_value("");
        				this.ccfCD_JOBTYPE.form.DSTextBox.set_value("");
        			} else if(cdOrder1 == "05" || dOrder1 == "13") {
        				this.ccfCD_DEPT.set_enable(true);
        				this.ccfCD_ED.set_enable(false);
        				this.ccfCD_OCCUPATION.set_enable(false);
        				this.ccfCD_DUTY.set_enable(false);
        				this.ccfCD_JOBTYPE.set_enable(false);

        				this.ccfCD_ED.form.CDTextBox.set_value("");
        				this.ccfCD_ED.form.DSTextBox.set_value("");
        				this.ccfCD_OCCUPATION.form.CDTextBox.set_value("");
        				this.ccfCD_OCCUPATION.form.DSTextBox.set_value("");
        				this.ccfCD_DUTY.form.CDTextBox.set_value("");
        				this.ccfCD_DUTY.form.DSTextBox.set_value("");
        				this.ccfCD_JOBTYPE.form.CDTextBox.set_value("");
        				this.ccfCD_JOBTYPE.form.DSTextBox.set_value("");
        			} else if(cdOrder1 == "06" || cdOrder1 == "07" || cdOrder1 == "08" || cdOrder1 == "09") {
        				this.ccfCD_DEPT.set_enable(true);
        				this.ccfCD_ED.set_enable(true);
        				this.ccfCD_OCCUPATION.set_enable(true);
        				this.ccfCD_DUTY.set_enable(false);
        				this.ccfCD_JOBTYPE.set_enable(false);

        				this.ccfCD_DUTY.form.CDTextBox.set_value("");
        				this.ccfCD_DUTY.form.DSTextBox.set_value("");
        				this.ccfCD_JOBTYPE.form.CDTextBox.set_value("");
        				this.ccfCD_JOBTYPE.form.DSTextBox.set_value("");
        			} else if(cdOrder1 == "10" || cdOrder1 == "15" || cdOrder1 == "16") {
        				this.ccfCD_DEPT.set_enable(false);
        				this.ccfCD_ED.set_enable(false);
        				this.ccfCD_OCCUPATION.set_enable(false);
        				this.ccfCD_DUTY.set_enable(true);
        				this.ccfCD_JOBTYPE.set_enable(false);

        				this.ccfCD_DEPT.form.CDTextBox.set_value("");
        				this.ccfCD_DEPT.form.DSTextBox.set_value("");
        				this.ccfCD_ED.form.CDTextBox.set_value("");
        				this.ccfCD_ED.form.DSTextBox.set_value("");
        				this.ccfCD_OCCUPATION.form.CDTextBox.set_value("");
        				this.ccfCD_OCCUPATION.form.DSTextBox.set_value("");
        				this.ccfCD_JOBTYPE.form.CDTextBox.set_value("");
        				this.ccfCD_JOBTYPE.form.DSTextBox.set_value("");
        			} else if(cdOrder1 == "12" || cdOrder1 == "17" || cdOrder1 == "18") {
        				this.ccfCD_DEPT.set_enable(false);
        				this.ccfCD_ED.set_enable(true);
        				this.ccfCD_OCCUPATION.set_enable(false);
        				this.ccfCD_DUTY.set_enable(false);
        				this.ccfCD_JOBTYPE.set_enable(false);

        				this.ccfCD_DEPT.form.CDTextBox.set_value("");
        				this.ccfCD_DEPT.form.DSTextBox.set_value("");
        				this.ccfCD_OCCUPATION.form.CDTextBox.set_value("");
        				this.ccfCD_OCCUPATION.form.DSTextBox.set_value("");
        				this.ccfCD_DUTY.form.CDTextBox.set_value("");
        				this.ccfCD_DUTY.form.DSTextBox.set_value("");
        				this.ccfCD_JOBTYPE.form.CDTextBox.set_value("");
        				this.ccfCD_JOBTYPE.form.DSTextBox.set_value("");
        			}
        		}

        		if (e.columnid == "CD_ORDER2") {
        			var cdOrder1 = this.dsData.getColumn(e.row,"CD_ORDER1");	// 대분류
        			var cdOrder2 = this.dsData.getColumn(e.row,"CD_ORDER2");	// 소분류

        			if (cdOrder1 == "05" && cdOrder2 == "01") {
        				this.ccfCD_DEPT.set_enable(true);			// 부서
        				this.ccfCD_ED.set_enable(false);			// 직위
        				this.ccfCD_OCCUPATION.set_enable(false);	// 직책
        				this.ccfCD_DUTY.set_enable(false);			// 직무
        				this.ccfCD_JOBTYPE.set_enable(false);		// 직종

        				this.ccfCD_ED.form.CDTextBox.set_value("");
        				this.ccfCD_ED.form.DSTextBox.set_value("");
        				this.ccfCD_OCCUPATION.form.CDTextBox.set_value("");
        				this.ccfCD_OCCUPATION.form.DSTextBox.set_value("");
        				this.ccfCD_DUTY.form.CDTextBox.set_value("");
        				this.ccfCD_DUTY.form.DSTextBox.set_value("");
        				this.ccfCD_JOBTYPE.form.CDTextBox.set_value("");
        				this.ccfCD_JOBTYPE.form.DSTextBox.set_value("");
        			} else if (cdOrder1 == "05" && cdOrder2 == "02") {
        				this.ccfCD_DEPT.set_enable(true);			// 부서
        				this.ccfCD_ED.set_enable(false);			// 직위
        				this.ccfCD_OCCUPATION.set_enable(true);		// 직책
        				this.ccfCD_DUTY.set_enable(true);			// 직무
        				this.ccfCD_JOBTYPE.set_enable(true);		// 직종

        				this.ccfCD_ED.form.CDTextBox.set_value("");
        				this.ccfCD_ED.form.DSTextBox.set_value("");
        				this.ccfCD_JOBTYPE.form.CDTextBox.set_value("");
        				this.ccfCD_JOBTYPE.form.DSTextBox.set_value("");
        			}
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ORDER1") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "OA");
        	} else if (id == "ccfCD_ORDER2") {
        		var cd_order1 = this.dsData.getColumn(0, "CD_ORDER1");
        		if (this.gfnIsNull(cd_order1)) {
        			this.gfnAlert("대분류코드를 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_ORDER1", cd_order1);
        	}
        	else if (id == "ccfCD_DEPT") {
        		dsUserParam.setColumn(nrow, "GR_SEARCH" , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"   , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP"   , this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "Y");
        	}
        	else if (id == "ccfCD_ED") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");
        	}
        	else if (id == "ccfCD_OCCUPATION") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "EC");
        	}
        	else if (id == "ccfCD_DUTY") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "EF");
        	}
        	else if (id == "ccfCD_JOBTYPE") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "EB");
        	}
        	return true;
        }

        this.codefind_AfterCDTextChanged = function(id, codeFindData) {
        	if (id == "ccfCD_ORDER1") {
        		var arr = codeFindData;
        		if (arr.length > 0 ) {
        			this.dsData.setColumn(0,"CD_ORDER2", "");
        			this.dsData.setColumn(0,"DS_ORDER2", "");
        		}
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj) {

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_MULTIORDERDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
