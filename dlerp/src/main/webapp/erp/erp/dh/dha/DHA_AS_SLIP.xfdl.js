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
            this.set_titletext("하자보수비결산대체");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_AS_SLIP_SELECT</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHAPR_AS_SLIP_CREATE</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHAPR_AS_SLIP_AUTOSLIP</Col></Row><Row><Col id=\"SP\">DHAPR_AS_SLIP_AUTOSLIP_CANCEL</Col><Col id=\"TARGET\">cancelSlip</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_BASE","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("작업년월");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACCOUNT","staYM_BASE:0.0","10.0","95","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
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

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclYM_ACCOUNT.form.TextBox","value","dsSearch","YM_ACCOUNT");
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
        this.registerScript("DHA_AS_SLIP.xfdl", function() {
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

        	var toDay = this.gfnGetDate();
        	this.ctclYM_ACCOUNT.form.TextBox.set_value(toDay.substr(0,6));	// 현재월

        	//법인코드 세션에 코드로 셋팅
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.setFocus();

        	//this.ccfCD_SITE.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        	//this.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Add.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreateData  = this.gfnFormButtonAdd("CreateData", "fnCreateData"); 		// 자료생성
        	this.btnIssueSlip   = this.gfnFormButtonAdd("IssueSlip", "fnIssueSlip"); 		// 전표발행
        	this.btnCancelSlip  = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 		// 전표취소
        	this.btnSearchSlip  = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 		// 전표조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclYM_ACCOUNT  = this.divSearch.form.ctclYM_ACCOUNT;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

         	this.ccfCD_SITE.CodeFindName = "DHX_CFACNTUNIT";
         	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_AS_SLIP");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	//this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);
        	//this.dxGrid.set_selecttype("cell");

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_ACCOUNT", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("CD_SITE", "string");
        	this.dsCreate.addColumn("YM_ACCOUNT", "string");
        	this.dsCreate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("SEQ", "BIGDECIMAL");

        	//전표발행용 데이터셋
        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");
        	this.dsIssueSlip.addColumn("YM_ACCOUNT", "string");
        	this.dsIssueSlip.addColumn("NO_SEQ"		, "string");
        	this.dsIssueSlip.addColumn("ID_INSERT"    , "string");
        	this.dsIssueSlip.addColumn("CD_DEPT_BH", "string");

        	//전표취소용 데이터셋
        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_SLIP"  , "string");
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
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));

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
        }

        /* 입력 버튼 */
        this.fnAdd = function() {
        	//var nRow = this.gfnGridAdd(this.dxGrid);
        	//this.dsList.setColumn(nRow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);
        	//this.dsList.setColumn(nRow, "DT_WORK", this.ctclDT_WORK.form.TextBox.value);
        }

        /* 삭제 버튼 */
        this.fnDel = function() {
        	/*
        	var arrDel = [];
         	for(var i =0;i<this.dsList.getRowCountNF();i++){
        		if(this.gfnIsNull(this.dsList.getColumnNF(i, "CD_TRADE"))){
        		//if(this.dsList.getColumnNF(i, "CHK") == "1" && this.gfnIsNull(this.dsList.getColumnNF(i, "CD_TRADE"))){

        			var flag = this.dsList.getColumnNF(i, this.ucFlag);


        		}
         	}
        	*/

        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();

        				this.dsUpdate.setColumn(nrow, "RT_REF2"			, this.dsList.getColumn(i, "RT_REF2"));
        				this.dsUpdate.setColumn(nrow, "ID_USER"  		, this.AuthClient.ID_USER);						//사용자 아이디
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "SEQ"  , this.dsList.getColumn(i, "SEQ"));		//순번
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate delete=dsDelete";
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
        	var validate = true;

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		validate = false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_ACCOUNT"))){
        		this.gfnAlert("작업년월은 필수입니다.");
        		this.ctclYM_ACCOUNT.form.TextBox.setFocus();
        		validate = false;
        	}

        	return validate;
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
        		case "select":
        			this.gfnGridAfterSelect(this.dxGrid);
        		break;
        		case "create":
        			if (errorCode == 0) {
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "issueSlip":
        			if (errorCode == 0) {
        				this.gfnAlert("전표가 발행 되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "cancelSlip":
        			if (errorCode == 0) {
        				this.gfnAlert("전표가 취소 되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id){
        		case "ccfCD_CORP":
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        			break;
        		case "ccfCD_SITE":
        			var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        			if (!this.gfnIsNull(cdCorp)) {
        				dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        				dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        				dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        				dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        				dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");					//현장/본사여부
        				dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        // 				dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");		//상위부서
        // 				dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");		//전표발행여부
        // 				dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);	//법인코드
        // 				dsUserParam.setColumn(nrow, "YN_USE"		, "Y");		//사용여부
        // 				dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");		//현장/본사여부
        // 				dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        // 				dsUserParam.setColumn(nrow, "GR_SEARCH"	    , this.FormInfo.GR_SEARCH);
        // 				dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        			} else {
        				this.gfnAlert("법인코드는 필수입력 값입니다.");
        				return false;
        			}
        			break;
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_SITE.form.fnCodeFindClear();
        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");

        	switch(id) {
        		case "DHX_CFACNTUNIT":	//귀속부서
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");				//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");				//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);			//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");				//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");				//현장/본사여부
        		break;
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	switch(id) {
        		case "DHX_CFACNTUNIT":	//귀속부서
        		break;
        	}
        };

        //그리드 값변경 이벤트
        this.dsList_ColumnChanged = function(obj, e)
        {

        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        //자료 생성 처리
        this.fnCreateData = function (obj,e)
        {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnConfirm("생성하시겠습니까?", "fnCreateData_callback");

        };

        //자료 생성 Confirm 콜백
        this.fnCreateData_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCreate.clearData();
        		var nRow = this.dsCreate.addRow();

        		//처리할 데이터 담기
        		this.dsCreate.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsCreate.setColumn(nRow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsCreate.setColumn(nRow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        		this.dsCreate.setColumn(nRow, "ID_USER", this.AuthClient.ID_USER);

        		var strSvcId    = "create";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "create=dsCreate";
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

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {

        	if(this.dsList.getCaseCount("CHK == '1' && "+ this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("체크된 항목이 없습니다.");
        		return;
        	}

        	if(this.dsList.findRowExpr("CHK == 1 && !dataset.parent.gfnIsNull(CD_TRADE) && nx_flag != '#'") > -1){
        		this.gfnAlert("전표발행된 항목이 체크되어 있습니다.");
        		return;
        	}

        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");
        };

        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		var arrDir = [];
        		for(var i = 0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, this.ucFlag) != '#' && this.dsList.getColumn(i, "CHK") == 1){
        				arrDir.push(this.dsList.getColumn(i, "NO_SEQ"));
        			}
        		}

        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsIssueSlip.setColumn(nRow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        		this.dsIssueSlip.setColumn(nRow, "NO_SEQ"	, arrDir.join(','));
        		this.dsIssueSlip.setColumn(nRow, "ID_INSERT" 	, this.AuthClient.ID_USER);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_BH" 	, this.AuthClient.CD_DEPT);

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

        //전표취소 처리
        this.fnCancelSlip = function (obj,e)
        {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("체크된 항목이 없습니다.");
        		return;
        	}

        	if(this.dsList.findRowExpr("CHK == 1 && dataset.parent.gfnIsNull(CD_TRADE) && nx_flag != '#'") > -1){
        		this.gfnAlert("전표발행되지않은 항목이 체크되어 있습니다.");
        		return;
        	}

        	this.gfnConfirm("전표를 취소하시겠습니까 ?", "fnCancelSlip_callback");
        };

        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {

        		var arrDir = [];
        		for(var i = 0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, this.ucFlag) != '#' && this.dsList.getColumn(i, "CHK") == 1){
        				arrDir.push(this.dsList.getColumn(i, "CD_TRADE"));
        			}
        		}

        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();
        		this.dsCancelSlip.setColumn(nRow, "CD_SLIP"	, arrDir.join(','));

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

        //전표 조회
        this.fnSearchSlip = function (obj,e)
        {
        	var sCdTrade = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));
        	trace("sCdTrade->" + sCdTrade);
        	if (this.gfnIsNull(sCdTrade)) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return false;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = sCdTrade;
        	//fnPopupCallBack
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "", param, this.getOffsetWidth(), this.getOffsetHeight());

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
        };
        this.loadIncludeScript("DHA_AS_SLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
