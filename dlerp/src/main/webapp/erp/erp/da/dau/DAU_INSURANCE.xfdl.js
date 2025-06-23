(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_INSURANCE");
            this.set_titletext("사회보험고지정보(NEW)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"YM_DEDUCTION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MONAVG_HEALTH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MONAVG_ANNUITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ANNUITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_HEALTH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_HEALTH_OLD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"INT\" size=\"256\"/><Column id=\"YN_SALARY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_INSURANCE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAUPR_INSURANCE_SAVE</Col></Row><Row><Col id=\"TARGET\">saveExcel</Col><Col id=\"SP\">DAUPR_INSURANCE_EXCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_DEDUCTION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_DEDUCTION","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("공제년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_DEDUCTION","staYM_DEDUCTION:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ctclYM_DEDUCTION:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.getSetter("BeforeUserDataSetParam").set("fnGrid_BeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnGrid_AfterCDTextChanged");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridExcel","790","140","219","297",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_visible("false");
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

            obj = new BindItem("item1","divSearch.form.ctclYM_DEDUCTION.form.TextBox","value","dsSearch","YM_DEDUCTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_SABUN");
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
        this.registerScript("DAU_INSURANCE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetExtendButton();
        	this.fnSetButton();
        	this.fnSetParameter();

        	if( this.FormInfo.GR_SEARCH >= "1") {
        		//법인 셋팅
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	}

        	//공제월 셋팅
        	var today = this.gfnGetDate().substring(0,6);
        	this.ctclYM_DEDUCTION.form.TextBox.set_value(today);

        // 	this.FormBtns.Select.click();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnExcelForm = this.gfnFormButtonAdd("ExcelForm", "fnExcelForm","고지정보 업로드양식");
        	this.btnExcelUpload = this.gfnFormButtonAdd("ExcelUpload", "fnExcelUpload","고지정보 업로드");
        	this.btnSalaryApply = this.gfnFormButtonAdd("SalaryApply", "fnSalaryApply","급여적용");
        };



        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclYM_DEDUCTION = this.divSearch.form.ctclYM_DEDUCTION;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGridExcel = this.divData.form.objGridExcel;


        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_INSURANCE");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)
        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경

        	this.gfnGridInit(this.dxGridExcel, this.dsExcel, "DA", "DAU_INSURANCE_EXCEL_FORM");


        	// 셀 수정가능 여부
        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	// 셀 변경 후 이벤트
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 코드파인드 값 변경
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	// 전체체크박스 체크/해제 이벤트
        	//this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

        	// BUTTON, BUTTON-IN 처리
        	//this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_DEDUCTION", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("YM_DEDUCTION", "string");
        	this.dsSave.addColumn("ID_RESIDENT", "string");
        	this.dsSave.addColumn("AM_MONAVG_HEALTH", "bigdecimal");
        	this.dsSave.addColumn("AM_MONAVG_ANNUITY", "bigdecimal");
        	this.dsSave.addColumn("AM_ANNUITY", "bigdecimal");
        	this.dsSave.addColumn("AM_HEALTH", "bigdecimal");
        	this.dsSave.addColumn("AM_HEALTH_OLD", "bigdecimal");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("GR_CORP", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsSaveExcel = new Dataset();
        	this.dsSaveExcel.addColumn("CD_CORP", "string");
        	this.dsSaveExcel.addColumn("ID_SABUN", "string");
        	this.dsSaveExcel.addColumn("YM_DEDUCTION", "string");
        	this.dsSaveExcel.addColumn("ID_RESIDENT", "string");
        	this.dsSaveExcel.addColumn("DS_HNAME", "string");
        	this.dsSaveExcel.addColumn("AM_MONAVG_HEALTH", "bigdecimal");
        	this.dsSaveExcel.addColumn("AM_MONAVG_ANNUITY", "bigdecimal");
        	this.dsSaveExcel.addColumn("AM_ANNUITY", "bigdecimal");
        	this.dsSaveExcel.addColumn("AM_HEALTH", "bigdecimal");
        	this.dsSaveExcel.addColumn("AM_HEALTH_OLD", "bigdecimal");
        	this.dsSaveExcel.addColumn("DS_REMARK", "string");
        	this.dsSaveExcel.addColumn("GR_SEARCH", "string");
        	this.dsSaveExcel.addColumn("GR_CORP", "string");
        	this.dsSaveExcel.addColumn("ID_USER", "string");
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
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YM_DEDUCTION", this.ctclYM_DEDUCTION.form.TextBox.value);
        	this.dsSelect.setColumn(0, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsList.setColumn(nrow, "DS_CORP", this.ccfCD_CORP.form.DSTextBox.value);
        	this.dsList.setColumn(nrow, "YM_DEDUCTION", this.ctclYM_DEDUCTION.form.TextBox.value);
        	this.dsList.set_enableevent(true);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "YM_DEDUCTION", this.dsList.getColumn(i, "YM_DEDUCTION"));
        				this.dsSave.setColumn(nrow, "ID_RESIDENT", this.dsList.getColumn(i, "ID_RESIDENT"));
        				this.dsSave.setColumn(nrow, "AM_MONAVG_HEALTH", this.dsList.getColumn(i, "AM_MONAVG_HEALTH"));
        				this.dsSave.setColumn(nrow, "AM_MONAVG_ANNUITY", this.dsList.getColumn(i, "AM_MONAVG_ANNUITY"));
        				this.dsSave.setColumn(nrow, "AM_ANNUITY", this.dsList.getColumn(i, "AM_ANNUITY"));
        				this.dsSave.setColumn(nrow, "AM_HEALTH", this.dsList.getColumn(i, "AM_HEALTH"));
        				this.dsSave.setColumn(nrow, "AM_HEALTH_OLD", this.dsList.getColumn(i, "AM_HEALTH_OLD"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSave.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

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

        this.fnSaveExcel = function() {

        	//trace(this.dsSaveExcel.rowcount);
        	//trace(this.dsSaveExcel.saveXML());

        	if (this.dsSaveExcel.rowcount == 0) return;

        	var strSvcId    = "saveExcel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveExcel=dsSaveExcel";
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
         	var validate = true;
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
         		this.fnVaidateCallback = function() {
         			this.ccfCD_CORP.form.CDTextBox.setFocus();
         		}
         		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
         		return false;
         	}

        	if (this.gfnIsNull(this.ctclYM_DEDUCTION.form.TextBox.value)) {
         		this.fnVaidateCallback = function() {
         			this.ctclYM_DEDUCTION.form.TextBox.setFocus();
         		}
         		this.gfnAlert("공제월을 입력하세요.", "fnVaidateCallback");
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
        		this.gfnGridBeforeSelect(this.dxGrid);
        	}
        	else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "saveExcel") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	if(id == "ccfCD_CORP"){
        		;
        	}

        	if(id == "ccfID_SABUN"){
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        			this.gfnAlert("법인을 입력하세요!");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N"); //법인무관 : 법인무관(Y: 법인에 관계없이 직원검색 N:조건의 법인의 임직원만 검색)
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분 : 01 재직 02 휴직 04 퇴직 % :전체
        	}
        	return true;
         };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if (id == "DAX_CFBASEINFO_ALL") {
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        			this.gfnAlert("법인을 입력하세요!");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N"); //법인무관 : 법인무관(Y: 법인에 관계없이 직원검색 N:조건의 법인의 임직원만 검색)
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분 : 01 재직 02 휴직 04 퇴직 % :전체
         	}
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        //급여적용
         this.fnSalaryApply = function(obj,e) {
        	//if(!this.gfnGridIsRow(this.dxGrid)) {return false;}
        	var param = {};
        	param.YM_SALARY = this.ctclYM_DEDUCTION.form.TextBox.value;
        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_INSURANCE_DLG", "fnSalaryApply_callback", param);
        };

        this.fnSalaryApply_callback = function(id, val){
        	//trace("id", id);
        	//trace("val", val);

        	if(this.gfnIsNull(val)) return;
        	if(val == false) return;

        	this.FormBtns.Select.click();
        }

        //엑셀업로드 양식
        this.fnExcelForm = function(){
        	this.gfnExcelExport(this.dxGridExcel);
        }

        //고지정보 업로드
        this.fnExcelUpload = function(obj,e) {
        	// this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	// sheet명 없으면 첫번째 sheet
        	this.gfnExcelImport("dsExcel","","A2","fnExcelImportCallback","import",this);

        };

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
           // 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        //    if (dsSheet.rowcount > 1) {
        //       trace(dsSheet.getColumn(1, "sheetname"));
        //    }

           // 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
           // 아닌경우는 이부분 주석처리
        //    for (var i=0; i< this.dsList.getColCount(); i++)
        //    {
        //       sColumnId = "Column"+i;
        //       var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        //       if (sColumnNm != "" && sColumnId != sColumnNm)
        //       {
        //          dsOut.updateColID(sColumnId, sColumnNm);
        //       }
        //    }



        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);

        	if(dsOut.rowcount == 0){
        		this.gfnAlert("업로된 데이타가 없습니다.");
        		return;
        	}

        	this.dsSaveExcel.clearData();

        	this.dsSaveExcel.set_enableevent(false);			//업로드시 코드파인드 사용하려면 주석처리 할것
        	for (var i=0; i<dsOut.rowcount; i++) {
        		var nrow = this.dsSaveExcel.addRow();
        		this.dsSaveExcel.setColumn(nrow, this.ucFlag, "I");

        // 		for (var j=0; j< dsOut.colcount; j++) {
        // 			if (!this.gfnIsNull(dsOut.getColumn(i,j)) ){
        // 				dsOut.setColumn(i,j,nexacro.trim(dsOut.getColumn(i,j)));
        // 				var strColID = dsOut.getColID( j );
        // 				//날짜 형식 수정
        // 				if ( strColID == "Column1" ){
        // 					dsOut.setColumn(i,j,dsOut.getColumn(i,j).replace(/[^0-9]/g,''));
        // 				}
        // 			}
        // 		}
        		// 양식이 일치하는 경우 copyRow
        		//this.dsList.copyRow(nrow, dsOut, i);

        		this.dsSaveExcel.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsSaveExcel.setColumn(nrow, "ID_SABUN",  dsOut.getColumn(i, "Column1")); //사원번호
        		this.dsSaveExcel.setColumn(nrow, "YM_DEDUCTION", this.ctclYM_DEDUCTION.form.TextBox.value); //공제년월
        		this.dsSaveExcel.setColumn(nrow, "ID_RESIDENT", dsOut.getColumn(i, "Column3")); //주민번호
        		this.dsSaveExcel.setColumn(nrow, "DS_HNAME", dsOut.getColumn(i, "Column2")); //성명
        		this.dsSaveExcel.setColumn(nrow, "AM_MONAVG_HEALTH", dsOut.getColumn(i, "Column4")); //건강보험월보수액
        		this.dsSaveExcel.setColumn(nrow, "AM_MONAVG_ANNUITY",  dsOut.getColumn(i, "Column5")); //국민연금월보수액
        		this.dsSaveExcel.setColumn(nrow, "AM_ANNUITY",  dsOut.getColumn(i, "Column6")); //국민연금
        		this.dsSaveExcel.setColumn(nrow, "AM_HEALTH", dsOut.getColumn(i, "Column7")); //건강보험
        		this.dsSaveExcel.setColumn(nrow, "AM_HEALTH_OLD", dsOut.getColumn(i, "Column8")); //장기요양보험
        		this.dsSaveExcel.setColumn(nrow, "DS_REMARK", dsOut.getColumn(i, "Column9")); //비고
        		this.dsSaveExcel.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		this.dsSaveExcel.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        		this.dsSaveExcel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		//
        	}
        	this.dsSaveExcel.set_enableevent(true);	//업로드시 코드파인드 사용하려면 주석처리 할것



        	this.gfnSetFormStatus(this, "I");

        	this.fnSaveExcel();
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
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
        };
        this.loadIncludeScript("DAU_INSURANCE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
