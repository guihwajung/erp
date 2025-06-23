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
            this.set_titletext("보직자 업무목표 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1800,950);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_ESTT_DLG_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_BGVDPRSN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_ITVWPRSN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PTCP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("row");
            obj.set_autofittype("none");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("row");
            obj.set_autofittype("none");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAJ_RTNG_GOAL_ESTT_DLG.xfdl", function() {
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
        	// 그리드영역
        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid2 = this.divData.form.objGrid2;
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_RTNG_GOAL_ESTT_DLG");
        	this.gfnGridInit(this.dxGrid2, this.dsList, "DA", "DAJ_RTNG_GOAL_CHCK_DLG");
        	this.dxGrid.EnterCell = "fnGridEnterCell";
        	this.dxGrid.setFormatRowProperty(0, "size", 30);
        	this.dxGrid.setFormatRowProperty(1, "size", 38);
        	this.dxGrid2.setFormatRowProperty(0, "size", 30);
        	this.dxGrid2.setFormatRowProperty(1, "size", 38);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	// 업무목표수립 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_RTNG", "string");
        	this.dsSelect.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSelect.addColumn("ID_ITVWPRSN", "string");
        	this.dsSelect.addColumn("TY_PTCP", "string");
        	this.dsSelect.addColumn("CD_RTNG_TYPE", "string");
        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();
        	this.dsSearch.setColumn(0, "CD_CORP"    	, frame.CD_CORP);		// 법인코드
        	this.dsSearch.setColumn(0, "ID_RTNG"    	, frame.ID_RTNG);		//
        	this.dsSearch.setColumn(0, "SEQ_BGVDPRSN"	, frame.SEQ_BGVDPRSN);	//
        	this.dsSearch.setColumn(0, "ID_ITVWPRSN"	, frame.ID_SABUN);		//
        	this.dsSearch.setColumn(0, "TY_PTCP"		, frame.TY_PTCP);		//
        	this.dsSearch.setColumn(0, "CD_RTNG_TYPE"	, frame.CD_RTNG_TYPE);	//

        	if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA10")
        	{
        		this.dxGrid.set_visible(true);
        		this.dxGrid2.set_visible(false);
        	}
        	else if (this.dsSearch.getColumn(0, "CD_RTNG_TYPE") == "JA11")
        	{
        		this.dxGrid.set_visible(false);
        		this.dxGrid2.set_visible(true);
        	}
        	this.fnSelect();
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {
        	// 업무목표수립 조회
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSelect.setColumn(0, "SEQ_BGVDPRSN", this.dsSearch.getColumn(0, "SEQ_BGVDPRSN"));
        	this.dsSelect.setColumn(0, "ID_ITVWPRSN", this.dsSearch.getColumn(0, "ID_ITVWPRSN"));
        	this.dsSelect.setColumn(0, "TY_PTCP", this.dsSearch.getColumn(0, "TY_PTCP"));
        	this.dsSelect.setColumn(0, "CD_RTNG_TYPE", this.dsSearch.getColumn(0, "CD_RTNG_TYPE"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
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
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 확인버튼
        this.btnOK_onclick = function(obj, e) {
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

        	// 업무목표수립 조회
        	if (svcID == "select_goal_estt") {

        		this.fnEnableButton();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        this.fnGridAfterEdit = function(obj,e) {

        }

        this.fnGridEnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        	this.fnEnableButton();
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.fnEnableButton = function() {
        	var list = ['NO_COL', 'DS_GOAL_WRK', 'DS_EXEC_PLN_HGHYR', 'DS_EXEC_PLN_LOWHYR', 'DS_GOAL_LVL_MIN', 'DS_GOAL_LVL_MAX', 'DS_MNPT_ADMN', 'NO_WGTV','DS_RMK', 'DS_FDBK'];	//'DS_FDBK','DS_FDBK_TOT_A','DS_FDBK_TOT_B'];

        	for (var i = 0; i < list.length; i++) {
        		//this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", list[i]), "cssclass", "BACK_ReadOnly");
        		this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", list[i]), "edittype", "none");
        		this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", list[i]), "expandshow", "show");	//"show"
        	}

        	this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "DS_FDBK"), "size", 0);

        	this.dsList.set_enableevent(false);
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		this.dsList.setColumn(i, "MULTILINE_READONLY", "Y");
        		this.dsList.setColumn(i, "MULTILINE_EXCLUDE_COLUMNS", "");
        	}
        	this.dsList.set_enableevent(true);
        }
        /************************************************************************
         * 기타 함수
         ************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DAJ_RTNG_GOAL_ESTT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
