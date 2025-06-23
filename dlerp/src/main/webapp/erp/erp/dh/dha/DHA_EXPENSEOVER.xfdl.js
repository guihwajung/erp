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
            this.set_titletext("선급비용 전표발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_EXPENSEOVER_SELECT</Col></Row><Row><Col id=\"SP\">DHAPR_EXPENSEREV_AUTOSLIP</Col><Col id=\"TARGET\">issueSlip</Col></Row><Row><Col id=\"SP\">DHAPR_EXPENSEREV_CANCELSLIP</Col><Col id=\"TARGET\">cancelSlip</Col></Row><Row><Col id=\"TARGET\">adjust</Col><Col id=\"SP\">DHAPR_EXPENSEOVER_CREATE</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DHAPR_EXPENSEOVER_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_EXPENSE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"STD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","6","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta01:0","10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ccfCD_CORP:0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","sta02:0","10.0","274","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM","ccfCD_DEPT_ACNT:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_WORK","staYM:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.getSetter("sub").set("true");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item18","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_WORK.form.TextBox","value","dsSearch","STD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_EXPENSEOVER.xfdl", function() {
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

        	this.ccfCD_CORP.setFocus();

        	//법인코드 세션에 코드로 셋팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	//this.ccfCD_DEPT_ACNT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        	//this.ccfCD_DEPT_ACNT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);

        	//회계년월 초기값
        	this.ctclDT_WORK.form.TextBox.set_value(this.gfnGetDate().substring(0,6));

        	// 스케쥴 조정여부 버튼처리
        	//this.fnSetSlipButton();
        };

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
        	this.btnIssueSlip  = this.gfnFormButtonAdd("IssueSlip" , "fnIssueSlip"); 	//전표발행 버튼
        	this.btnSearchSlip = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 	//전표조회 버튼
        	this.btnCancelSlip = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 	//전표취소 버튼
        	this.btnAdjust = this.gfnFormButtonAdd("Adjust", "fnAdjust"); 		// 스케쥴조정
        	this.btnInfo = this.gfnFormButtonAdd("btnInfo", "fnInfoSelect"); 		// 선급비용관리 조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP 	 = this.divSearch.form.ccfCD_CORP;					//법인코드
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;				//귀속부서
        	//this.ccfNO_EXPENSE = this.divSearch.form.ccfNO_EXPENSE;					//선급비용번호

        	this.ctclDT_WORK = this.divSearch.form.ctclDT_WORK;						//회계년월

        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_EXPENSEOVER");
        	//this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_oncelldblclick, this);
        	this.dsList.addEventHandler("onvaluechanged", this.dsList_onvaluechanged, this);
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_EXPENSE", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("DT_WORK", "string");

        	//전표발행
        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");
        	this.dsIssueSlip.addColumn("TXT_EXPENSE", "string");
        	this.dsIssueSlip.addColumn("CD_DEPT_BH", "string");
        	this.dsIssueSlip.addColumn("ID_TRANS", "string");

        	//전표취소
        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_TRADE","string");

        	// 스케쥴 조정
        	this.dsAdjust = new Dataset();
        	this.dsAdjust.addColumn("YM_MAGAM","string");

        	// 적요 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP","string");
        	this.dsSave.addColumn("NO_EXPENSE","string");
        	this.dsSave.addColumn("DT_FROMPR","string");
        	this.dsSave.addColumn("RM_BIGO","string");
        	this.dsSave.addColumn("ID_USER","string");
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

        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);			//법인
        	this.dsSelect.setColumn(0, "CD_DEPT", this.ccfCD_DEPT_ACNT.form.CDTextBox.value);		//귀속부서
        	this.dsSelect.setColumn(0, "NO_EXPENSE", "");	//선급비용번호
        	this.dsSelect.setColumn(0, "DT_WORK", this.ctclDT_WORK.form.TextBox.value);			//시작년월

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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for(var i = 0 ; i < this.dsList.rowcount ; i ++) {

        		if(this.gfnGetFlag(this.dsList, i) == "U") {

        			nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSave.setColumn(nrow, "NO_EXPENSE", this.dsList.getColumn(i, "NO_EXPENSE"));
        			this.dsSave.setColumn(nrow, "DT_FROMPR", this.dsList.getColumn(i, "DT_FROMPR"));
        			this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        			this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}
        	if(this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
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

        //스케쥴 조정
        this.fnAdjust = function() {
        	this.gfnConfirm("스케쥴 조정하시겠습니까?", "fnAdjust_callback");
        };

        this.fnAdjust_callback = function(strId, val)
        {
        	if(val == true) {

        		if (!this.fnSelectValidate()) return false;

        		this.gfnGridBeforeSelect(this.dxGrid);

        		this.dsAdjust.clearData();
        		this.dsAdjust.addRow();

        		this.dsAdjust.setColumn(0, "YM_MAGAM", this.ctclDT_WORK.form.TextBox.value);			//시작년월

        		var strSvcId    = "adjust";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "adjust=dsAdjust";
        		var outData     = "";
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

        }
        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.ctclDT_WORK.form.TextBox.value)) {
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclDT_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("회계년월을 입력하세요.", "fnVaidateCallback");
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
        	switch(svcID) {
        	case "select" :
        		this.gfnGridAfterSelect(this.dxGrid);
        		break;
        	case "create" :
        		if (errorCode == 0) {
        			this.gfnAlert("생성되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "issueSlip" :
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "cancelSlip" :
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;

        	case "adjust" :
        		if (errorCode == 0) {
        			this.gfnAlert("정상적으로 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "save" :
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        			//this.ccfNO_EXPENSE.form.fnCodeFindClear();
        		break;
        		case "ccfCD_DEPT_ACNT":	//귀속부서
        			//this.ccfNO_EXPENSE.form.fnCodeFindClear();
        		break;

        		default:
        	}

        	//this.fnSearchInit();
        	//this.FormBtns.Select.click();
        };

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		break;
        		case "ccfCD_DEPT_ACNT":	//귀속부서
        			if(this.gfnIsNull(cdCorp)){
        				this.gfnAlert("법인코드를 선택하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        			dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "GR_SEARCH"	    , this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);

        		break;
        		case "ccfCD_DEPT":		//귀속부서
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");			//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");			//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);		//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");			//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");			//현장/본사여부
        			dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "GR_SEARCH"	    , this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);

        		break;
        		case "ccfNO_EXPENSE":	//선급비용번호
        			if(this.gfnIsNull(cdCorp)){
        				this.gfnAlert("법인코드를 선택하세요.");
        				return false;
        			}
        			var cdDept = this.gfnNvl(this.ccfCD_DEPT_ACNT.form.CDTextBox.value,"");
        			dsUserParam.setColumn(nrow, "CD_CORP" , cdCorp);
        			dsUserParam.setColumn(nrow, "CD_DEPT" , cdDept);
        			dsUserParam.setColumn(nrow, "YN_END"  , "");
        			dsUserParam.setColumn(nrow, "TY_DEPT" , "BJ");
        		break;

        		default:
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_oncelldblclick = function(obj,e)
        {
        	var nRow = this.dsList.rowposition;
        	var flag = this.gfnGetFlag(this.dsList, nRow);
        	if(this.gfnGetFlag(this.dsList, nRow) == "#"){
        	//if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_EXPENSE"))) {
        		return;
        	}

        	var param = {};
        	param.NO_EXPENSE = this.dsList.getColumn(this.dsList.rowposition, "NO_EXPENSE");
        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        // 	param.CD_DEPT = this.ccfCD_DEPT_ACNT.form.CDTextBox.value;
        // 	param.DS_DEPT = this.ccfCD_DEPT_ACNT.form.DSTextBox.value;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_EXPENSE_REGISTRATION", "fnPopupCallback", param);
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
         // 선급비용 관리 조회
         this.fnInfoSelect = function (obj,e){
        	var nRow = this.dsList.rowposition;
        	var flag = this.gfnGetFlag(this.dsList, nRow);
        	if(this.gfnGetFlag(this.dsList, nRow) == "#"){
        	//if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_EXPENSE"))) {
        		return;
        	}

        	var param = {};
        	param.NO_EXPENSE = this.dsList.getColumn(this.dsList.rowposition, "NO_EXPENSE");
        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        // 	param.CD_DEPT = this.ccfCD_DEPT_ACNT.form.CDTextBox.value;
        // 	param.DS_DEPT = this.ccfCD_DEPT_ACNT.form.DSTextBox.value;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_EXPENSE_REGISTRATION", "fnPopupCallback", param);

         }

         this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){

        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);

        	}
        };

        // this.fnSearchInit = function(obj,e) {
        // 	if(e == null || (e.pretext != e.posttext)) {
        // 		// 폼상태 초기화
        // 		this.gfnSetFormStatus(this);
        // 		this.gfnGridClear(this.dxGrid);
        // 		// 스케쥴 조정여부
        // 		//this.fnSetSlipButton();
        // 	}
        // };

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	if(this.dsList.findRowExpr("CHK == 1 && !dataset.parent.gfnIsNull(CD_TRADE) && nx_flag != '#'") > -1){
        		this.gfnAlert("이미 발행한 데이터가 선택 되었습니다.");
        		return;
        	}

        	this.dsList.filter("");
        	for(var i = 0 ; i < this.dsList.rowcount; i++){
        		if(this.dsList.getColumn(i, "CHK") == "Y"){
        			if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_TRADE"))){
        				this.gfnAlert("선급비용번호:"+this.dsList.getColumn(i, "NO_EXPENSE")+"\n이미 전표가 발행되어있습니다.")
        				this.dsList.filter("");
        				return false;
        			}
        		}
        	}
        	this.dsList.filter("");
        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");
        };

        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsIssueSlip.clearData();

        		var searchKey = "";
        // 		this.dsList.filter("CHK=='Y'");
        // 		//체크 여부와 전표번호 체크
        // 		for(var i = 0 ; i < this.dsList.rowcount; i++){
        // 			if(this.dsList.getColumn(i, "CHK") == "Y"){
        // 				searchKey += this.dsList.getColumn(i,"NO_EXPENSE")+"|"+this.dsList.getColumn(i,"DT_FROM");
        // 				if(i < this.dsList.rowcount-1) searchKey +=",";
        // 			}
        // 		}
        // 		this.dsList.filter("");

        		var nRow = this.dsIssueSlip.addRow();

        		for(var r = 0; r < this.dsList.rowcount; r++) {
        			if(this.dsList.getColumn(r, this.ucFlag) != '#' && this.dsList.getColumn(r, "CHK") == 1){
        				//searchKey += this.dsList.getColumn(r, "NO_EXPENSE") + "|" + this.dsList.getColumn(r, "DT_FROM") +",";
        				searchKey += this.dsList.getColumn(r, "NO_EXPENSE") + this.dsList.getColumn(r, "DT_FROMPR") +";";
        			}
        		}

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"    , this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "TXT_EXPENSE" , searchKey);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_BH" , this.AuthClient.CD_DEPT);
        		this.dsIssueSlip.setColumn(nRow, "ID_TRANS"   , this.AuthClient.ID_USER);

        		var strSvcId    = "issueSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "issueSlip=dsIssueSlip";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]

         	}
        };

        //전표 조회
        this.fnSearchSlip = function (obj,e)
        {
        	if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        this.fnPopupCallBack = function(strId, val) {
        	if (val)
        	{
        		this.FormBtns.Select.click();
        	}

        };

        //전표취소 처리
        this.fnCancelSlip = function (obj,e)
        {
        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	if(this.dsList.findRowExpr("CHK == 1 && dataset.parent.gfnIsNull(CD_TRADE) && nx_flag != '#'") > -1){
        		this.gfnAlert("전표번호가 없는 데이터가 선택 되었습니다.");
        		return;
        	}

        	this.dsList.filter("");
        	for(var i = 0 ; i < this.dsList.rowcount; i++){
        		if(this.dsList.getColumn(i, "CHK") == "Y"){
        			if(this.gfnIsNull(this.dsList.getColumn(i, "CD_TRADE"))){
        				this.gfnAlert("선급비용번호:"+this.dsList.getColumn(i, "NO_EXPENSE")+"\n발행된 전표가 업습니다.")
        				this.dsList.filter("");
        				return false;
        			}
        		}
        	}
        	this.dsList.filter("");
        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");

        };

        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();

        // 		var searchKey = "";
        // 		this.dsList.filter("CHK=='Y'");
        // 		//체크 여부와 전표번호 체크
        // 		for(var i = 0 ; i < this.dsList.rowcount; i++){
        // 			if(this.dsList.getColumn(i, "CHK") == "Y"){
        // 				searchKey += this.dsList.getColumn(i,"CD_TRADE");
        // 				if(i < this.dsList.rowcount-1) searchKey +=",";
        // 			}
        // 		}
        // 		this.dsList.filter("");

        		var arrCdTrade = "";
        		for(var r = 0; r < this.dsList.rowcount; r++) {
        			if(this.dsList.getColumn(r, this.ucFlag) != "#" && this.dsList.getColumn(r, "CHK") == 1){
        				if(!this.gfnIsNull(nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(r, "CD_TRADE"),""))))){
        					arrCdTrade += this.dsList.getColumn(r, "CD_TRADE") +";";
        				}
        			}
        		}

        		//처리할 데이터 담기
        		this.dsCancelSlip.setColumn(nRow, "CD_TRADE", arrCdTrade);

        		var strSvcId    = "cancelSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "cancelSlip=dsCancelSlip";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if (e.oldvalue != e.newvalue) {
        		this.FormBtns.Save.set_enable(true);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_EXPENSEOVER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
