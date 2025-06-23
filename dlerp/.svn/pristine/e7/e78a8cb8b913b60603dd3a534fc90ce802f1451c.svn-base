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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_SAMPLE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DZZPR_SAMPLE_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SAVE_01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_REGIST", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","10","10","40","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_SearchY");
            obj.set_taborder("6");
            obj.set_text("시스템");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SYSTEM","staCD_SYSTEM:10","10","150","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ORG","ccfCD_SYSTEM:10","10","50","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("추가정보");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ORG","staCD_DEPT_ORG:10","10","200","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_UPDEPT","ccfCD_DEPT_ORG:5","10","120","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_REGIST","ctxtDS_UPDEPT:10","10","30","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("콤보");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_REGIST","staTY_REGIST:10","10","80","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_REGIST");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SYSTEM.form.CDTextBox","value","dsSearch","CD_SYSTEM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZZ_SAMPLE1.xfdl", function() {
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

        	this.fnSetCombo();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SYSTEM) && !this.gfnIsNull(this.getOwnerFrame().DS_SYSTEM)) {
        		this.dsSearch.setColumn(0, "CD_SYSTEM", this.getOwnerFrame().CD_SYSTEM);
        		// 코드파인드의 명칭부분은 직접 접근해서 셋팅
        		this.ccfCD_SYSTEM.form.DSTextBox.set_value(this.getOwnerFrame().DS_SYSTEM);

        		this.FormBtns.Select.click();
        	}

        	this.btn7.set_enable(false);
        	this.btn8.set_enable(false);
        	// 환경변수 사용
        	//var cd_payment = this.gfnGetConfig("DZ", "CD_PAYMENT");
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail");
        	this.btn2 = this.gfnFormButtonAdd("Check", "fnCheck");
        	this.btn3 = this.gfnFormButtonAdd("File", "fnFile");
        	this.btn4 = this.gfnFormButtonAdd("Dialog", "fnDialog");

        	// 버튼 그룹 테스트
        	this.btn11 = this.gfnFormButtonAdd("btnTest1", "fnTest1");
        	this.btn12 = this.gfnFormButtonAdd("btnTest2", "fnTest2");
        	this.btn13 = this.gfnFormButtonAdd("btnTest3", "fnTest3");
        	this.btn14 = this.gfnFormButtonAdd("btnTest4", "fnTest4");
        	this.btn15 = this.gfnFormButtonAdd("btnTest5", "fnTest5");
        	this.btn16 = this.gfnFormButtonAdd("btnTest6", "fnTest6");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;
        	this.ccfCD_DEPT_ORG = this.divSearch.form.ccfCD_DEPT_ORG;
        	this.ctxtDS_UPDEPT = this.divSearch.form.ctxtDS_UPDEPT;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SYSTEM.CodeFindName = "DZX_CFSYSTEM";

        	this.ccfCD_DEPT_ORG.CodeFindName = "DZX_CFDEPT_ORG";
        	this.ccfCD_DEPT_ORG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_ORG.AfterCDTextChanged = "ccfCD_DEPT_ORG_AfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZZ_SAMPLE1");


        	// 헤더 스타일 변경
        	/*
        	this.dxGrid.set_enableredraw(false);
        	for(var i = 0; i < this.dxGrid.getFormatColCount(); i++) {
        		this.dxGrid.setCellProperty("head",i,"color","black");
        		this.dxGrid.setCellProperty("head",i,"background","#7DA2A9");
        	}
        	this.dxGrid.set_enableredraw(true);
        	*/

        	// 각 셀 스타일 변경
        	/*
        	this.dxGrid._getCurrentBodyCell(1,3).set_border("1px solid #000")
        	*/

        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	// 셀 변경 후 이벤트
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 코드파인드 값 변경
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	// 전체체크박스 체크/해제 이벤트
        	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

        	// BUTTON, BUTTON-IN 처리
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SYSTEM", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_FLAG", "string");
        	this.dsSave.addColumn("NO_IDX", "int");
        	this.dsSave.addColumn("KEYIN", "string");
        	this.dsSave.addColumn("MULTILINE", "string");
        	this.dsSave.addColumn("LIST", "string");
        	this.dsSave.addColumn("CODEFIND", "string");
        	this.dsSave.addColumn("CODEFIND2", "string");
        	this.dsSave.addColumn("CODEFINDTXT", "string");
        	this.dsSave.addColumn("CALENDAR_Y", "string");
        	this.dsSave.addColumn("CALENDAR_YM", "string");
        	this.dsSave.addColumn("CALENDAR_YMD", "string");
        	this.dsSave.addColumn("BUTTON", "string");
        	this.dsSave.addColumn("BUTTON_IN", "string");
        	this.dsSave.addColumn("CHECKBOX", "int");
        	this.dsSave.addColumn("ID_USER", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SYSTEM", this.dsSearch.getColumn(0, "CD_SYSTEM"));

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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "CODEFIND", this.ccfCD_SYSTEM.form.CDTextBox.value);
        	this.dsList.setColumn(nrow, "DS_CODEFIND", this.ccfCD_SYSTEM.form.DSTextBox.value);
        	this.dsList.set_enableevent(true);
        }

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
        				this.dsSave.setColumn(nrow, "TY_FLAG", flag);
        				this.dsSave.setColumn(nrow, "NO_IDX", this.dsList.getColumn(i, "NO_IDX"));
        				this.dsSave.setColumn(nrow, "KEYIN", this.dsList.getColumn(i, "KEYIN"));
        				this.dsSave.setColumn(nrow, "MULTILINE", this.dsList.getColumn(i, "MULTILINE"));
        				this.dsSave.setColumn(nrow, "LIST", this.dsList.getColumn(i, "LIST"));
        				this.dsSave.setColumn(nrow, "CODEFIND", this.dsList.getColumn(i, "CODEFIND"));
        				this.dsSave.setColumn(nrow, "CODEFINDTXT", this.dsList.getColumn(i, "CODEFINDTXT"));
        				this.dsSave.setColumn(nrow, "CALENDAR_Y", this.dsList.getColumn(i, "CALENDAR_Y"));
        				this.dsSave.setColumn(nrow, "CALENDAR_YM", this.dsList.getColumn(i, "CALENDAR_YM"));
        				this.dsSave.setColumn(nrow, "CALENDAR_YMD", this.dsList.getColumn(i, "CALENDAR_YMD"));
        				this.dsSave.setColumn(nrow, "BUTTON", this.dsList.getColumn(i, "BUTTON"));
        				this.dsSave.setColumn(nrow, "BUTTON_IN", this.dsList.getColumn(i, "BUTTON_IN"));
        				this.dsSave.setColumn(nrow, "CHECKBOX", this.dsList.getColumn(i, "CHECKBOX"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsOutput=save";
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			// 보통 output 처리는 단일건이 될듯..
        			if(this.dsOutput.rowcount > 0) {
        				if(this.dsOutput.getColumn(0, "TY_FLAG") == "I") {
        					var no_idx = this.dsOutput.getColumn(0, "NO_IDX");
        					this.gfnAlert(no_idx.toString());
        				}
        			}

        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo") {
        		if (errorCode == 0) {
        			// 초기 선택값은 아래 3가지 방법으로 가능
         			this.divSearch.form.ccboTY_REGIST.set_index(0);
        //  		this.divSearch.form.ccboTY_REGIST.set_value("00");
        // 			this.divSearch.form.ccboTY_REGIST.set_text("미등록");
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_DEPT_ORG") {
        // 		if (this.gfnIsNull(this.ccfCD_DEPT_ORG.form.CDTextBox.value)) {
        // 			this.gfnAlert("서브모듈을 먼저 입력하세요.");
        // 			return false;
        // 		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}
        	return true;
        }

        this.ccfCD_DEPT_ORG_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능

        	var ds_updept = "";
        	if (arr.length > 0) {
        		ds_updept = arr[0]["DS_UPDEPT"];
        	}

        	this.ctxtDS_UPDEPT.set_value(ds_updept);
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);
        	if(this.dsList.getColumn(row, colnm) == "TEST") {
        		return false;
        	}
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        	if(e.columnid == "CODEFIND") {
        		if(e.oldvalue != e.newvalue) {
        			this.dsList.setColumn(this.dsList.rowposition, "CODEFIND2" ,"");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_CODEFIND2" ,"");
        		}
        	}
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DZX_CFMODULE") {
        		var cd_system = this.dsList.getColumn(this.dsList.rowposition, "CODEFIND");
        		if(this.gfnIsNull(cd_system)) {
        			this.gfnAlert("시스템코드를 먼저 입력하세요.");
        			return false;
        		}
         		dsUserParam.setColumn(nrow, "CD_MODULE", this.dsList.getColumn(this.dsList.rowposition, "CODEFIND"));
         	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	if(id == "DZX_CFSYSTEM") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			var cd_test = arr[0]["CD_TEST"];
        		}
        	}
        };

        this.fnGrid_AfterAllCheck = function(obj, cell, check) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	if(colnm == "CHK") {
        		trace("fnGrid_AfterAllCheck] " + cell + "," + check);
        	}
        }

        this.fnGrid_ExpandUp = function(obj,e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colnm == "BUTTON") {
        		this.gfnAlert("BUTTON 처리");
        	}
        	else if (colnm == "BUTTON_IN") {
        		this.gfnAlert("BUTTON-IN 처리");
        	}
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_MAND", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "17");
        	this.dsCombo.setColumn(0, "YN_USE", "Y");
        	this.dsCombo.setColumn(0, "YN_MAND", "Y");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_REGIST=combo0";
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

        this.fnAutoFormCallback = function(svcID, errorCode, errorMsg, strArg) {
        	trace(svcID);
        }

        this.fnDetail = function(obj,e) {
        	var json = {
        		TY_WORK: "C-01",
        		ATTR01: "4300026034",
        		ATTR02: "001",
        		ATTR03: "",
        		ATTR04: "",
        		ATTR05: "",
        		ATTR06: "",
        		ID_USER: this.AuthClient.ID_USER
        	}
        	this.gfnAutoForm(json, "fnAutoFormCallback");

        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};
        	param.CD_SYSTEM = this.dsList.getColumn(this.dsList.rowposition, "CODEFIND");
        	param.DS_SYSTEM = this.dsList.getColumn(this.dsList.rowposition, "DS_CODEFIND");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZZ_SAMPLE1", "", param);

        }

        this.fnCheck = function(obj,e) {

        	var arrChk = [];
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == 1) {
        			arrChk.push(i);
        		}
        	}

        	if(arrChk.length > 0) {
        		// 체크행 처리
        		this.gfnAlert("체크행:" + arrChk.join(','));
        		for(var i = 0; i < arrChk.length; i++) {
        			var col1 = this.dsList.getColumn(arrChk[i], "KEYIN");
        		}
        	} else {
        		this.gfnAlert("체크된 행이 없습니다.");
        	}
        }

        this.fnFile = function(obj,e) {
        // 	var param = {};
        // 	param["${companyName}"] = "테스트 업체";
        // 	this.FileDownTransfer00.set_url("/file/rtfFile.do");
        // 	this.FileDownTransfer00.setPostData("ID_RTF", "RTF1");
        // 	this.FileDownTransfer00.setPostData("PARAMS", JSON.stringify(param));
        // 	this.FileDownTransfer00.download();
        // 	return;

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DZ99";
        	fileManager.CD_DIR = [ "A", "2" ];
        	// CD_DIR 만 지정시 CD_DIR 배열 순대로 키1,키2,키3 까지 자동지정
        	// 저장되는 디렉토리와 키값이 다른경우 CD_REF 추가로 사용
        	//fileManager.CD_REF = [ "A1" ];
        	// 권한 및 상태에 따라 업로드,삭제 가능여부 지정 (기본: true)

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        this.fnFileCallback = function() {
        };
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.fnDialog = function() {


        	// 권한체크 필요없는 단순 Dialog 오픈
        	var param = {};
        	param.CD_TEST = "01";
        	this.gfnFormOpenNonAuth("DZZ", "DZZ_SAMPLE_DLG", "fnDialogCallback", param, 500, 400);
        };


        this.fnCopyFile = function() {
        	// 파일복사 테스트
        	this.dsCopy = new Dataset();
        	this.dsCopy.addColumn("CD_GUBUN", "string");
        	this.dsCopy.addColumn("CD_REF1", "string");
        	this.dsCopy.addColumn("CD_REF2", "string");
        	this.dsCopy.addColumn("CD_REF3", "string");
        	this.dsCopy.addColumn("CD_REF4", "string");
        	this.dsCopy.addColumn("CD_REF5", "string");
        	this.dsCopy.addColumn("NEW_CD_GUBUN", "string");
        	this.dsCopy.addColumn("NEW_CD_REF1", "string");
        	this.dsCopy.addColumn("NEW_CD_REF2", "string");
        	this.dsCopy.addColumn("NEW_CD_REF3", "string");
        	this.dsCopy.addColumn("NEW_CD_REF4", "string");
        	this.dsCopy.addColumn("NEW_CD_REF5", "string");

        	var nrow = this.dsCopy.addRow();
        	this.dsCopy.setColumn(nrow, "CD_GUBUN", "DZ88");
        	this.dsCopy.setColumn(nrow, "CD_REF1", "A");
        	this.dsCopy.setColumn(nrow, "CD_REF2", "1");
        	this.dsCopy.setColumn(nrow, "CD_REF3", "");
        	this.dsCopy.setColumn(nrow, "CD_REF4", "");
        	this.dsCopy.setColumn(nrow, "CD_REF5", "");
        	this.dsCopy.setColumn(nrow, "NEW_CD_GUBUN", "DZ99");
        	this.dsCopy.setColumn(nrow, "NEW_CD_REF1", "A");
        	this.dsCopy.setColumn(nrow, "NEW_CD_REF2", "2");
        	this.dsCopy.setColumn(nrow, "NEW_CD_REF3", "");
        	this.dsCopy.setColumn(nrow, "NEW_CD_REF4", "");
        	this.dsCopy.setColumn(nrow, "NEW_CD_REF5", "");

        	var strSvcId    = "copyfile";
        	var strSvcType  = "file/copyFile";
        	var inProc		= "";
        	var inData      = "input=dsCopy";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCopyFileCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnCopyFileCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "copyfile") {
        		if(errorCode == 0) {
        			this.gfnAlert("파일복사가 완료되었습니다.");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnDialogCallback = function(svcID, value) {
        	// 리턴값
        	trace(value);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctxtDS_UPDEPT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZZ_SAMPLE1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
