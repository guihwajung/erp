(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAC_DAILY_TOTAL");
            this.set_titletext("근태현황 조회(세부사항)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DACPR_DAILYTOTAL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_REPORT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회기간");
            obj.set_textDecoration("none underline");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_REPORT","staDT_REPORT:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclFR_REPORT:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0.0","staDT_REPORT:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staDT_REPORT:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_REPORT","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_DEPT","ctclTO_REPORT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("조직분류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_DEPT","staTY_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfTY_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFDEPT_MST1");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_WORK","0.0","staDT_REPORT:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("근태유형");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_WORK","staCD_WORK:0.0","staDT_REPORT:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_WORK_TYPE");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclTO_REPORT","value","dsSearch","DT_WORKDAY_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_DAILY_TOTAL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	//조회일자
        	this.ctclFR_REPORT.set_value(this.gfnGetDate());
        	this.ctclTO_REPORT.set_value(this.gfnGetDate());

        	//조회
        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//조회일자
        	this.ctclFR_REPORT = this.divSearch.form.ctclFR_REPORT;
        	this.ctclTO_REPORT = this.divSearch.form.ctclTO_REPORT;
        	//조직분류
        	this.ccfTY_DEPT = this.divSearch.form.ccfTY_DEPT;
        	//부서
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	//성명
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	//근태유형
        	this.ccfCD_WORK = this.divSearch.form.ccfCD_WORK;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAC_DAILY_TOTAL");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("FR_REPORT", "string"); //일자
        	this.dsSelect.addColumn("TO_REPORT", "string"); //일자
        	this.dsSelect.addColumn("TY_DEPT", "string");  	//조직분류
        	this.dsSelect.addColumn("CD_DEPT", "string");  	//부서
        	this.dsSelect.addColumn("ID_SABUN", "string");  //사번
        	this.dsSelect.addColumn("CD_WORK", "string");  //근태유형
        	this.dsSelect.addColumn("GR_SEARCH", "string"); //로그인 권한
        	this.dsSelect.addColumn("GR_DEPT", "string");  	//로그인 부서
        	this.dsSelect.addColumn("ID_LOGIN", "string");  	//로그인 ID

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
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "FR_REPORT", this.ctclFR_REPORT.value); //일자
        	this.dsSelect.setColumn(0, "TO_REPORT", this.ctclTO_REPORT.value); //일자
        	this.dsSelect.setColumn(0, "TY_DEPT", this.ccfTY_DEPT.form.CDTextBox.value);  //조직분류
        	this.dsSelect.setColumn(0, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);  //부서
        	this.dsSelect.setColumn(0, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);  //성명
        	this.dsSelect.setColumn(0, "CD_WORK", this.ccfCD_WORK.form.CDTextBox.value);  //근태유형
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH); //로그인 권한
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);  	//로그인 부서
        	this.dsSelect.setColumn(0, "ID_LOGIN", this.AuthClient.ID_USER);  	//로그인 ID


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
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
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
         *	리셋 버튼
         */
        this.fnReset = function() {
        	this.ctclFR_REPORT.set_value("");
        	this.ctclTO_REPORT.set_value("");
        	this.ccfTY_DEPT.form.CDTextBox.set_value("");
        	this.ccfTY_DEPT.form.DSTextBox.set_value("");
        	this.ccfCD_DEPT.form.CDTextBox.set_value("");
        	this.ccfCD_DEPT.form.DSTextBox.set_value("");
        	this.ccfID_SABUN.form.CDTextBox.set_value("");
        	this.ccfID_SABUN.form.DSTextBox.set_value("");
        	this.ccfCD_WORK.form.CDTextBox.set_value("");
        	this.ccfCD_WORK.form.DSTextBox.set_value("");

        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.ctclFR_REPORT.value)) {
        		validate = false;
        		this.ctclFR_REPORT.setFocus();
        		this.gfnAlert("조회 시작일자를 입력하세요.");
        		return validate;
        	}

        	if (this.gfnIsNull(this.ctclTO_REPORT.value)) {
        		validate = false;
        		this.ctclTO_REPORT.setFocus();
        		this.gfnAlert("조회 종료일자를 입력하세요.");
        		return validate;
        	}

        	if(this.ctclFR_REPORT.value > this.ctclTO_REPORT.value) {
        		validate = false;
        		this.ctclFR_REPORT.setFocus();
        		this.gfnAlert("조회 시작일자가 종료일 보다 클 수 없습니다.");
        		return validate;
        	}

        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, args) {
        	this.fnSetButton();
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSetButton();
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id) {
        		case "ccfTY_DEPT":	//조직분류
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "DA");
        			break;

        		case "ccfCD_DEPT":	//부서
        			break;

        		case "ccfID_SABUN":	//성명
         			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
         			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
         			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;


        			//dsUserParam.setColumn(nrow, "CD_PREFIX", "GT");
        			dsUserParam.setColumn(nrow, "TY_GUBUN", 'CODE');
        			dsUserParam.setColumn(nrow, "CD_PREFIX", 'GM');
        			dsUserParam.setColumn(nrow, "CD_UPPREFIX", '01');
        			break;

        		default:
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
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
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclFR_REPORT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclTO_REPORT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
        };
        this.loadIncludeScript("DAC_DAILY_TOTAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
