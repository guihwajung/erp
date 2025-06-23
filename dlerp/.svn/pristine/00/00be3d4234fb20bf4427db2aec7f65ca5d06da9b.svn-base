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
            this.set_titletext("평가진행현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select_sp</Col><Col id=\"SP\">DZYPR_SP_SELECT</Col></Row><Row><Col id=\"TARGET\">select_splog</Col><Col id=\"SP\">DZZPR_SPLOG_SELECT</Col></Row><Row><Col id=\"TARGET\">deploy_sp</Col><Col id=\"SP\">DZYPR_SP_DEPLOY</Col></Row><Row><Col id=\"TARGET\">select_combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"NM_DB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_BASE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSPLog", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNmDatabase", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_BASE","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BASE","staDT_BASE:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNM_DB",null,"10.0","95","24.0","cboNM_DB:150",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("배포DB");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboNM_DB",null,"10","150","24","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsNmDatabase");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("에코원에너지 개발");
            obj.set_value("DLECO_DEV");
            obj.set_index("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter1","30%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("#c9c9c9");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter1:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("변경된 SP 목록");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter1:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSplitter2","50%","0","5","100%",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_background("#c9c9c9");
            obj.set_cursor("ew-resize");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataRightLeft","0","0",null,null,"divSplitter2:5","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRightLeft.form);
            obj.set_taborder("0");
            obj.set_text("변경된 SP 로그");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataRightLeft.addChild(obj.name, obj);

            obj = new Grid("objGridSPLog","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataRightLeft.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataRightLeft.addChild(obj.name, obj);

            obj = new Div("divDataRightRight","divSplitter2:5","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRightRight.form);
            obj.set_taborder("0");
            obj.set_text("변경된 SP");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataRightRight.addChild(obj.name, obj);

            obj = new TextArea("txtSP","0","sta03:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataRightRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.form.divDataRightRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclDT_BASE","value","dsSearch","DT_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboNM_DB","value","dsSearch","NM_DB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZY_DEPLOY_SP.xfdl", function() {
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
        	this.btnDeploy = this.gfnFormButtonAdd("btnDeploy", "fnDeploy");	// 배포 버튼
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid      = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSPLog = this.divData.form.divDataRight.form.divDataRightLeft.form.objGridSPLog;

        	// 검색영역
        	this.ctclDT_BASE = this.divSearch.form.ctclDT_BASE;

        	// 데이터영역
        	this.txtSP = this.divData.form.divDataRight.form.divDataRightRight.form.txtSP;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZY_DEPLOY_SP");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        	this.dxGrid.EnterCell              = "fnGridEnterCell";

        	this.gfnGridInit(this.dxGridSPLog, this.dsListSPLog, "DZ", "DZY_DEPLOY_SPLOG");
        	this.dxGridSPLog.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGridSPLog.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        	this.dxGridSPLog.selecttype = 'row';
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// SP 목록 조회
        	this.dsSpSelect = new Dataset();
        	this.dsSpSelect.addColumn("DAYS", "int");

        	// SP 로그 목록 조회
        	this.dsSpLogSelect = new Dataset();
        	this.dsSpLogSelect.addColumn("ID_FORM", "string");

        	// SP 배포
        	this.dsDeploy = new Dataset();
        	this.dsDeploy.addColumn("NM_SP", "string");
        	this.dsDeploy.addColumn("NM_DB", "string");

        	// 콤보 조회
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {
        	this.dsCombo.clearData();
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DZ");
        	this.dsCombo.setColumn(0, "CD_TYPE"  , "E1");

        	var strSvcId    = "select_combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_combo=dsCombo";
        	var outData     = "dsNmDatabase=select_combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,	// 통신방법 정의 [생략가능]
        						false);
        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	var theDay = this.gfnAddDate(this.gfnGetDate(), -60);
        	this.dsSearch.setColumn(0, "DT_BASE", theDay);
        	this.dsSearch.setColumn(0, "NM_DB", "DLECO_DEV");

        	this.gfnGridColumnColor(this.dxGrid, "NM_SP", "BACK_GangJo,Red", "YN_RAILNOT_BDGT == 'Y'");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.dsSpSelect.clearData();
        	this.dsSpSelect.addRow();
        	this.dsSpSelect.setColumn(0, "DAYS", parseInt(this.gfnGetDiffDate(this.gfnGetDate(), this.dsSearch.getColumn(0, "DT_BASE"))) * -1);

        	var strSvcId    = "select_sp";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_sp=dsSpSelect";
        	var outData     = "dsList=select_sp0";
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

        this.fnSelectSPLog = function() {
        	this.gfnGridBeforeSelect(this.dxGridSPLog);

        	this.dsSpLogSelect.clearData();
        	this.dsSpLogSelect.addRow();
        	this.dsSpLogSelect.setColumn(0, "ID_FORM", this.dsList.getColumn(this.dsList.rowposition, "NM_SP"));

        	var strSvcId    = "select_splog";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_splog=dsSpLogSelect";
        	var outData     = "dsListSPLog=select_splog0";
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
        this.fnSelectValidate = function() {
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "select_sp") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if (svcID == "select_splog") {
        		this.gfnGridAfterSelect(this.dxGridSPLog);
        		this.dxGridSPLog.selectRow(0);
        	} else if (svcID == "deploy_sp") {

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

        this.fnGridEnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명
        	if (colnm == "CHK" && this.dsList.getColumn(this.dsList.rowposition, "YN_TABLE") == "Y") {
        		return false;
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj, e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSPLog);
        		this.txtSP.set_value('');
        	}
        }

        this.dsListSPLog_onvaluechanged = function(obj, e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGridSPLog);
        		this.txtSP.set_value('');
        	}
        }

        this.divData_ondragmove1 = function(obj, e) {
        	if (e.userdata == "splitter1") {
        		this.divData.form.divSplitter1.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        }

        this.divData_divSplitter1_ondrag = function(obj, e) {
        	e.set_userdata("splitter1");
        	return true;
        }

        this.divData_ondragmove2 = function(obj, e) {
        	if (e.userdata == "splitter2") {
        		this.divData.form.divDataRight.form.divSplitter2.set_left(e.clientx);
        		this.divData.form.divDataRight.form.resetScroll();
        	}
        }

        this.divData_divSplitter2_ondrag = function(obj, e) {
        	e.set_userdata("splitter2");
        	return true;
        }

        // 변경된 SP 목록 그리드 클릭 이벤트
        this.fnGridCellPosChanged = function(obj, e) {
        	if (e.row != -1 && e.oldrow != e.row) {
        		this.fnSelectSPLog();
        	}
        }

        // 변경된 SP 로그 목록 그리드 클릭 이벤트
        this.fnGridSPLogCellPosChanged = function(obj, e) {
        	if (e.row != -1 && e.oldrow != e.row) {
        		this.txtSP.set_value(this.dsListSPLog.getColumn(this.dsListSPLog.rowposition, "SQLCMD"));
        	}
        }

        this.fnDeploy = function(obj, e) {
        	this.dsList.set_enableevent(false);
        	this.dsList.filter("CHK == 1");

        	if (this.dsList.rowcount == 0) {
        		this.gfnAlert("배포 대상 SP가 선택되지 않았습니다.");
        		this.dsList.filter("");
        		this.dsList.set_enableevent(true);
        		return
        	}

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		this.dsDeploy.clearData();
        		var nrow = this.dsDeploy.addRow();

        		this.dsDeploy.setColumn(nrow, "NM_SP", this.dsList.getColumn(i, "NM_SP"));
        		this.dsDeploy.setColumn(nrow, "NM_DB", this.dsSearch.getColumn(0, "NM_DB"));

        		var strSvcId    = "deploy_sp";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "deploy_sp=dsDeploy";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        							strSvcType, 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc,	// 통신방법 정의 [생략가능]
        							false);
        	}

        	this.dsList.filter("");
        	this.dsList.set_enableevent(true);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove1,this);
            this.divData.form.divSplitter1.addEventHandler("ondrag",this.divData_divSplitter1_ondrag,this);
            this.divData.form.divDataLeft.form.objGrid.addEventHandler("oncellposchanged",this.fnGridCellPosChanged,this);
            this.divData.form.divDataRight.addEventHandler("ondragmove",this.divData_ondragmove2,this);
            this.divData.form.divDataRight.form.divSplitter2.addEventHandler("ondrag",this.divData_divSplitter2_ondrag,this);
            this.divData.form.divDataRight.form.divDataRightLeft.form.objGridSPLog.addEventHandler("oncellposchanged",this.fnGridSPLogCellPosChanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsListSPLog.addEventHandler("onvaluechanged",this.dsListSPLog_onvaluechanged,this);
        };
        this.loadIncludeScript("DZY_DEPLOY_SP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
