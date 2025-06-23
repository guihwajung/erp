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
            this.set_titletext("전표조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_EXPENSE_SLIP_SEARCH</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ACCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FR","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","ctclDT_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staCD_TILDE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPTOPER","0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("귀속부서");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPTOPER","staCD_DEPTOPER:0.0","sta00:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfCD_DEPTOPER:0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","sta00:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DFX_CFCARD_CODEFIND");
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
            obj = new BindItem("item1","divSearch.form.ctclDT_FR","value","dsSearch","DT_ACCOUNT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_TO","value","dsSearch","DT_ACCOUNT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPTOPER.form.CDTextBox","value","dsSearch","CD_DEPT_BE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_DEPTOPER.form.DSTextBox","value","dsSearch","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_VENDOR.form.DSTextBox","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_EXPENSE_SLIP_SEARCH.xfdl", function() {
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
        	//this.fnSetCombo();

        // 	if (!this.gfnIsNull(this.getOwnerFrame().CD_DEPT_BH)) {
        // 		this.dsSearch.setColumn(0, "CD_DEPT_BE", this.getOwnerFrame().CD_DEPT_BH);
        // 		this.dsSearch.setColumn(0, "DS_DEPT_ACNT", this.getOwnerFrame().DS_DEPT_BH);
        // 	}else{
        // 		this.ccfCD_DEPTOPER.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        // 		this.ccfCD_DEPTOPER.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        // 		// 	this.ccfCD_DEPTOPER.form.fnCodeFindLoad();
        // 	}

        	this.dsSearch.setColumn(0, "DT_ACCOUNT_FR", this.gfnGetFirstDate(this.gfnGetDate()));
        	this.dsSearch.setColumn(0, "DT_ACCOUNT_TO", this.gfnGetDate());


        	//화면 로드시 자동조회
        	this.FormBtns.Select.click();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.gfnSetEnable(this.FormBtns.Reset, true);
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

        	this.ctclDT_FR = this.divSearch.form.ctclDT_FR; 				//거래일자(from)
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO; 				//거래일자(To)
        	this.ccfCD_DEPTOPER = this.divSearch.form.ccfCD_DEPTOPER;		//귀속부서
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;

        	this.dxGrid = this.divData.form.objGrid;
        	//this.grSearch = this.FormInfo.GR_SEARCH;						// 권한?
        	this.cdGroup = this.AuthClient.CD_GROUP;						// 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_EXPENSE_SLIP_SEARCH");

        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        // 		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        // 	}

        	this.ccfCD_VENDOR.CodeFindName = "DHX_CFALLVENDOR_CODEFIND";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        //  	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        // 	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPTOPER.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPTOPER.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	//리스트 변경 이벤트
        	//this.dsList.addEventHandler("oncolumnchanged", this.dsList_Columnchanged, this);

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);
        	var cd_role = this.FormInfo.CD_ROLE;
        }

         /************************************************************************
         * 파라미터
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_ACCOUNT_FR", "string");
        	this.dsSelect.addColumn("DT_ACCOUNT_TO", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("CD_DEPT_BE", "string");
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

        	this.dsSelect.setColumn(0, "DT_ACCOUNT_FR", this.dsSearch.getColumn(0, "DT_ACCOUNT_FR"));
        	this.dsSelect.setColumn(0, "DT_ACCOUNT_TO", this.dsSearch.getColumn(0, "DT_ACCOUNT_TO"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "CD_DEPT_BE", this.dsSearch.getColumn(0, "CD_DEPT_BE"));

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
        						strArg, 	    // 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var nRow = this.dsList.rowposition;
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	return;

        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));

        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));

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
         *	초기화 버튼
         */
        this.fnReset = function() {

        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.gfnAlert("법인코드를 입력 하세요.");
        // 		this.ccfCD_CORP.form.setFocus();
        // 		return false;
        // 	}

        	if (this.gfnIsNull(this.ctclDT_FR.value)) {
        		this.gfnAlert("회계일자(FROM)을 입력 하세요.");
        		this.ctclDT_FR.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclDT_TO.value)) {
        		this.gfnAlert("회계일자(TO)을 입력 하세요.");
        		this.ctclDT_TO.setFocus();
        		return false;
        	}

        	if ( !this.gfnIsNull(this.ctclDT_FR.value) && !this.gfnIsNull(this.ctclDT_TO.value) ) {
        		if ( this.ctclDT_FR.value > this.ctclDT_TO.value ) {
        			this.gfnAlert("회계일자가 잘못 입력 되었습니다.");
        			this.ctclDT_FR.setFocus();
        			return false;
        		}
        	}

        //  	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        //  		if (this.gfnIsNull(this.ccfCD_DEPTOPER.form.CDTextBox.value)) {
        //  			this.gfnAlert("귀속부서를 입력 하세요.");
        //  			this.ccfCD_DEPTOPER.form.CDTextBox.setFocus();
        //  			return false;
        //  		}
        //  	}

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
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_DEPTOPER.form.fnCodeFindClear();
        		break;
        		case "ccfCD_DEPTOPER":	//귀속부서

        		break;
        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        	var cdCorp = this.AuthClient.CD_CORP;

        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "ccfCD_DEPTOPER") {
        //		if (!this.gfnIsNull(cdCorp)) {
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
         			dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
         			dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
         			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        // 		}else{
        // 			this.gfnAlert("법인코드는 필수입력 값입니다.");
        // 			return false;
        // 		}
        	}

        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DHX_CFACCOUNT") {	//계정
        		var sMinValue = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        		dsUserParam.setColumn(nrow, "MIN_VALUE", sMinValue);
        		dsUserParam.setColumn(nrow, "YN_SLIP", "Y");
         	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	var rowPos = this.dsList.rowposition;
        	switch(id) {
        		case "DHX_CFACCOUNT":
        			if (arrData.length > 0) {
        			}
        			this.dsList.setColumn(rowPos, "CD_SEMOK", "");		// 세목코드 초기화
        			this.dsList.setColumn(rowPos, "DS_SEMOK", "");		// 세목코드 초기화
        			this.dsList.setColumn(rowPos, "AM_MM_AVAIL", "");	// 추가예산 초기화
        		break;
         	}
        };

        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	var json = {};
        	json.CD_SLIP = this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP");				//NO_SEQ
        	//json.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");			//법인
        	//json.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");			//법인
        	json.CD_DEPT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_BE");			//부서코드
        	json.DS_DEPT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_ACNT");
        	json.DT_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "DT_ACCOUNT");		// 회계일자
        	json.DS_REM = this.dsList.getColumn(this.dsList.rowposition, "DS_REM");				// 적요
        	json.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");		// 거래처
        	json.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");
        	json.TY_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "TY_VENDOR");
        	json.AM_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "AM_ACCOUNT")+"";	// 비용

        	//json.CD_PROOF = this.dsList.getColumn(this.dsList.rowposition, "CD_PROOF");			// 증빙구분
        	//json.DS_PROOF = this.dsList.getColumn(this.dsList.rowposition, "DS_PROOF");			// 증빙구분

        	this.getParentContext().close(JSON.stringify(json));
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // this.fnSearchInit = function(obj,e) {
        // 	if(e == null || (e.pretext != e.posttext)) {
        // 		this.gfnSetFormStatus(this);
        // 		this.gfnGridClear(this.dxGrid);
        // 	}
        // }

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_FR.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
        };
        this.loadIncludeScript("DHA_EXPENSE_SLIP_SEARCH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
