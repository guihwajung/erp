(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAB_MEDICAL_REPORT");
            this.set_titletext("의료비보고서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_MEDICAL_REPORT_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"FR_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"TO_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("신청년월");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclFR_REQUEST","staDT_REQUEST:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclFR_REQUEST:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclTO_REQUEST","sta00:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclTO_REQUEST:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclFR_REQUEST.form.TextBox","value","dsSearch","FR_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclTO_REQUEST.form.TextBox","value","dsSearch","TO_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_MEDICAL_REPORT.xfdl", function() {
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

        	this.fnReset();
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
        	this.FormBtns.Print.set_enable(false);
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

        	//신청년월
        	this.ctclFR_REQUEST = this.divSearch.form.ctclFR_REQUEST;
        	this.ctclTO_REQUEST = this.divSearch.form.ctclTO_REQUEST;

        	//법인
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP; 			// 법인코드

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					// 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					// 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_MEDICAL_REPORT");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("FR_REQUEST", "string");
        	this.dsSelect.addColumn("TO_REQUEST", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "FR_REQUEST", 	this.ctclFR_REQUEST.form.TextBox.value);
        	this.dsSelect.setColumn(0, "TO_REQUEST", 	this.ctclTO_REQUEST.form.TextBox.value);
        	this.dsSelect.setColumn(0, "CD_CORP", 		this.ccfCD_CORP.form.CDTextBox.value);

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
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//this.gfnGridAdd(this.dxGrid);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
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
         *	초기화 버튼
         */
        this.fnReset  = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	//신청년월
        	this.ctclFR_REQUEST.form.TextBox.set_value(this.gfnGetDate().substring(0,6));
        	this.ctclTO_REQUEST.form.TextBox.set_value(this.gfnGetDate().substring(0,6));

        	// 법인코드 및 법인명 기본세팅
        	//this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
            //this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value("");
            this.ccfCD_CORP.form.DSTextBox.set_value("");

        	this.FormBtns.Select.click();
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        // 		return false;
        // 	}

        	if(this.ctclFR_REQUEST.form.TextBox.value > this.ctclTO_REQUEST.form.TextBox.value)
        	{
        		this.fnVaidateCallback = function() {
        			this.ctclFR_REQUEST.form.TextBox.setFocus();
        		}
        		this.gfnAlert("조회 시작년월이 종료년월 보다 클 수 없습니다.", "fnVaidateCallback");
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
        	if (svcID == "select") {
        	var objDs = new Dataset();
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSetButton();
        	}
        	this.fnSetButton();
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        	case "ccfCD_CORP": // 법인코드
        // 		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        // 		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
         		break;

         	default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	this.fnSearchInit();
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /************************************************************************
         * 확장버튼 이벤트
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

        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncellclick",this.divData_objGrid_oncellclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_MEDICAL_REPORT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
