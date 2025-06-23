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
            this.set_titletext("엑셀");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFBPR_EXCEL_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFBPR_EXCEL_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFBPR_EXCEL_DELETE</Col></Row><Row><Col id=\"TARGET\">Assign</Col><Col id=\"SP\">DFBPR_EXECDTL_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAssignRtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("집행일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PLAN","staDT_FROM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_PLAN","value","dsSearch","DT_REQ");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFB_EXCEL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP)) {
        	    this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        	    this.ctclDT_PLAN.set_value(this.getOwnerFrame().DT_REQ);
        		this.ccfCD_CORP.form.fnCodeFindLoad();
        	}

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
             this.btnAllAssign = this.gfnFormButtonAdd("btnAllAssign", "fnBtnAssign_onclick");
        	 this.btnAssign = this.gfnFormButtonAdd("btnAssign", "fnBtnAssign_onclick");
        	 this.btnUPloadExecl = this.gfnFormButtonAdd("btnUPloadExecl", "fnUPloadExecl");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclDT_PLAN = this.divSearch.form.ctclDT_PLAN;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DZX_CFCORP";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFB_EXCEL");

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	this.ctclDT_PLAN.set_value(this.gfnGetDate());
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_REQ", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("DT_REQ", "int");
        	this.dsInsert.addColumn("NO_REQUEST", "string");
        	this.dsInsert.addColumn("SEQ_ALLOT", "int");
        	this.dsInsert.addColumn("AM_AMT", "bigdecimal");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("SEQ_EXCEL", "string");
        	this.dsDelete.addColumn("ID_USER", "string");

        	this.dsAssign = new Dataset();
        	this.dsAssign.addColumn("TM_EXEC", "string");
        	this.dsAssign.addColumn("YN_EXEC", "string");
        	this.dsAssign.addColumn("TY_EXEC", "string");
        	this.dsAssign.addColumn("NO_REQUEST", "bigdecimal");
        	this.dsAssign.addColumn("SEQ_ALLOT", "bigdecimal");
        	this.dsAssign.addColumn("DT_REQ", "string");
        	this.dsAssign.addColumn("AM_AMT", "bigdecimal");
        	this.dsAssign.addColumn("NO_ACCOUNT", "string");
        	this.dsAssign.addColumn("TY_ACCOUNT_GU", "string");
        	this.dsAssign.addColumn("CD_PAY_VENDOR", "string");
        	this.dsAssign.addColumn("TY_PAY_VENDOR", "string");
        	this.dsAssign.addColumn("NO_PAY_ACCOUNT", "string");
        	this.dsAssign.addColumn("TY_PAY_GU", "string");
        	this.dsAssign.addColumn("ID_USER", "string");
        }

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
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_REQ", this.dsSearch.getColumn(0, "DT_REQ"));

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
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	//if (!this.fnSaveCheck(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "DT_REQ", this.dsSearch.getColumn(0, "DT_REQ"));
        				this.dsInsert.setColumn(nrow, "NO_REQUEST", this.dsList.getColumn(i, "NO_REQUEST"));
        				this.dsInsert.setColumn(nrow, "SEQ_ALLOT", this.dsList.getColumn(i, "SEQ_ALLOT"));
        				this.dsInsert.setColumn(nrow, "AM_AMT", this.dsList.getColumn(i, "AM_AMT"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        // 			case "U":
        // 				var nrow = this.dsUpdate.addRow();
        //
        // 				this.dsUpdate.setColumn(nrow, "TY_SAVE", flag);
        // 				this.dsUpdate.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        // 				this.dsUpdate.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        // 				this.dsUpdate.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(i, "CD_POSITION"));
        // 				this.dsUpdate.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        // 				this.dsUpdate.setColumn(nrow, "CD_EDU_DEPT", this.dsList.getColumn(i, "CD_EDU_DEPT"));
        // 				this.dsUpdate.setColumn(nrow, "NO_MANAGE", this.dsList.getColumn(i, "NO_MANAGE"));
        // 				this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        // 				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        //
        // 				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "SEQ_EXCEL", this.dsList.getColumn(i, "SEQ_EXCEL"));
        				this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert delete=dsDelete";
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

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclDT_PLAN.value)) {
        		this.gfnAlert("집행일자를 입력 하세요.");
        		this.ctclDT_PLAN.setFocus();
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
        		if (this.dsList.rowcount == 0) {
        			this.gfnAlert("자료가 존재하지 않습니다.");
        		} else {
        			this.gfnGridAfterSelect(this.dxGrid);
        		}
        	}
        	else if (svcID == "save") {
        			this.FormBtns.Select.click();
        	}
        	else if (svcID == "BranchInsert") {
        		this.gfnAlert("정상적으로 처리되었습니다.", "", svcID, "fnMsgCallback");
        	}
        	else if (svcID == "AssignN") {
        		this.fnAssign("Y", dtReq);
        	}
        	// 배정내역 확정이 아닐경우에만 성공/실패건수 보여줘야함.
        	else if (svcID == "AssignY" && btnName != "배정내역확정") {

        		trace(this.dsAssignRtn.saveXML());

        		var successCnt = this.dsAssignRtn.getColumn(0, "CT_SUCCESS");
        		var failCnt = this.dsAssignRtn.getColumn(0, "CT_FAIL");
        		var msg = btnName + "작업을 완료하였습니다. \n성공:" + successCnt + "건, 실패:" + failCnt + "건";
        		this.gfnAlert(msg, "", svcID, "fnMsgCallback");

        	}
        }

        this.fnMsgCallback = function(strId, strVal) {
        	switch(strId) {
        		case "BranchInsert":
        			this.FormBtns.Select.click();
        		break;
        		case "AssignY":
        			this.FormBtns.Select.click();
        		break;
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //  this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        //
        // 	if (id == "ccfNO_MAINACCOUNT") {
        // 		if (!this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 			dsUserParam.setColumn(nrow, "GUBUN", "MAIN");
        // 			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 		}else{
        // 			this.gfnAlert("법인코드는 필수입력 값입니다.");
        // 			return false;
        // 		}
        // 	}
        //
        // 	if (id == "ccfCD_DEPTINVEST") {
        // 		if (!this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 			dsUserParam.setColumn(nrow, "CD_GROUP", "");
        // 			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 		}else{
        // 			this.gfnAlert("법인코드는 필수입력 값입니다.");
        // 			return false;
        // 		}
        // 	}
        // 	return true;
        //
        // };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_DEPTINVEST.form.fnCodeFindClear();
        		this.ccfNO_MAINACCOUNT.form.fnCodeFindClear();
        	}
        	this.fnSearchInit();
        }

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

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnBtnAssign_onclick = function(obj,e)
        {
        	// 2019.09.30 일괄배정내역확정 validation check 두개 및 성공 및 무시건수 보여주는 부분 일단 skip하고 진행하기로 함.
        	btnName = obj.text;
        	trace("btnName :: " + btnName);

        	if (this.dsList.findRow("CHK", 1) == -1) {
        		return false;
        	}

        	this.gfnConfirm(btnName + "처리 하시겠습니까?","fnSAssign_callback");
        };

        this.fnSAssign_callback = function(strId, val) {
        	if (val) {

        		var param = {};
        		param.SEQ_EXEC = this.dsList.getColumn(this.dsList.rowposition, "SEQ_EXEC");
        		param.DT_REQ = this.gfnGetDate();
        		param.GUBUN = "DFBPR_EXECDTL_INSERT";


        		this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DFB_MODIFY_DT_REQUEST_DLG", "fnPopCallBack", param, 330, 150);
        	}
        }

        this.fnPopCallBack = function(svcID, val) {
        	if (val != false) {
        	  var json = JSON.parse(val);
        		if (svcID.indexOf("DFB_MODIFY_DT_REQUEST_DLG") > -1) {
        			dtReq = json.DT_REQ;
        			this.fnAssign("N", dtReq);
        		}

        		if(svcID.indexOf("DFB_DLG_BRANCH_EXEC") > -1){
        		    this.dsBranchInsert = new Dataset();
        			this.dsBranchInsert.addColumn("SEQ_EXEC", "bigdecimal");
        			this.dsBranchInsert.addColumn("GB_SEND", "string");
        			this.dsBranchInsert.addColumn("ID_USER", "string");
        			this.dsBranchInsert.addColumn("TY_TRAN", "string");

        			this.dsBranchInsert.clearData();
        			for (var i=0; i < this.dsList.rowcount; i++) {
        				if (this.dsList.getColumn(i, "CHK") == 1) {
        					var nrow = this.dsBranchInsert.addRow();
        					this.dsBranchInsert.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "SEQ_EXEC"));
        					// 2019.10.07 일단 공란으로...추후 확인되면 처리...
        					this.dsBranchInsert.setColumn(nrow, "GB_SEND", "EXEC");
        					this.dsBranchInsert.setColumn(nrow, "TY_TRAN", json.TY_TRAN);
        					this.dsBranchInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				}
        			}
        			if (this.dsBranchInsert.rowcount == 0) return;

        			var strSvcId    = "BranchInsert";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "BranchInsert=dsBranchInsert";
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

        // 	if (svcID.indexOf("DHA_ISSUESLIP") > -1) {
        // 			this.FormBtns.Select.click();
        // 	}	20200318 주석추가
        }




        // 배정처리 (YN_EXEC:Y/N , DT_REQ)
        this.fnAssign = function(YN_EXEC, DT_REQ) {

        	var tyExec = "";
        	var chk = "";
        	if (btnName == "일괄개별배정") {
        		tyExec = "C";	// 일괄개별배정
        		chk = "CHK";
        	} else if (btnName == "일괄합산배정") {
        		tyExec = "B";	// 일괄합산배정
        		chk = "CHK";
        	} else if (btnName == "배정내역확정") {
        		tyExec = "A";	// 배정내역확정
        		chk = "CHK0";
        	}

        	this.dsAssign.clearData();

        	// 병합배정key update시
        	if (YN_EXEC == "N") {

        		tmSlip = this.AuthClient.ID_USER + this.gfnGetDate("milli");

        		for (var  i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, chk) == 1 && this.dsList.getColumn(i, this.ucFlag) != "#") {
        				var nrow = this.dsAssign.addRow();

        				this.dsAssign.setColumn(nrow, "TM_EXEC", tmSlip);
        				this.dsAssign.setColumn(nrow, "YN_EXEC", YN_EXEC);
        				this.dsAssign.setColumn(nrow, "TY_EXEC", tyExec);
        				this.dsAssign.setColumn(nrow, "NO_REQUEST", this.dsList.getColumn(i, "NO_REQUEST"));
        				this.dsAssign.setColumn(nrow, "SEQ_ALLOT", this.dsList.getColumn(i, "SEQ_ALLOT"));
        				this.dsAssign.setColumn(nrow, "DT_REQ", DT_REQ);
        				this.dsAssign.setColumn(nrow, "AM_AMT", this.dsList.getColumn(i, "AM_AMT"));
        				this.dsAssign.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        	// 후처리시 Y
        	} else {
        		var nrow = this.dsAssign.addRow();
        		this.dsAssign.setColumn(nrow, "TM_EXEC", tmSlip);
        		this.dsAssign.setColumn(nrow, "YN_EXEC", YN_EXEC);
        		this.dsAssign.setColumn(nrow, "TY_EXEC", tyExec);
        		this.dsAssign.setColumn(nrow, "DT_REQ", DT_REQ);
        		this.dsAssign.setColumn(nrow, "NO_REQUEST", this.dsList.getColumn(i, "NO_REQUEST"));
        		this.dsAssign.setColumn(nrow, "SEQ_ALLOT", this.dsList.getColumn(i, "SEQ_ALLOT"));
        		this.dsAssign.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if (this.dsAssign.rowcount == 0) return;

        	var strSvcId    = "Assign" + YN_EXEC;
        	//var strSvcType  = "save";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "Assign=dsAssign";
        	var outData     = "dsAssignRtn=Assign0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        // 엑셀 업로드 버튼 이벤트
        this.fnUPloadExecl = function(obj,e) {
        	this.dsList.clearData();
        	this.gfnExcelImport("dsList","sheet1","A2","fnExcelImportCallback","import",this);
        }

        /*
         *	엑셀업로드 Callback
         */
        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다.");
        		return false;
        	}

        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;

        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if(i==0) sColumnNm = "nx_flag";
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	dsOut.deleteRow(0);

        	this.dsList.copyData(dsOut);

        	for (var i=0; i< this.dsList.getRowCount(); i++)
        	{
        		this.dsList.setColumn(i, this.ucFlag, "I");
        	}
        	this.dsList.set_enableevent(true);
        	this.gfnSetFormStatus(this, "I");

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_PLAN.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsAssignRtn.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DFB_EXCEL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
