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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_SCHOOLSTART_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_SCHOOLSTART_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_BASE\"/><Col id=\"CD_CORP\"/><Col id=\"ID_SABUN\"/><Col id=\"ID_PERSON\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_WORK","ccfCD_CORP:0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_BASE","staYR_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYR_BASE:0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ctclYR_BASE:0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfID_SABUN:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_visible("false");
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
            obj = new BindItem("item0","divSearch.form.ctclYR_BASE.form.TextBox","value","dsSearch","YR_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_SCHOOLSTART.xfdl", function() {
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

        	var toDay = this.gfnGetDate().substr(0,4);
        	this.dsSearch.setColumn(0, "YR_BASE", toDay);
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
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
        	this.btnExcelUpload = this.gfnFormButtonAdd("btnExcelUpload", "fnExcelUpload"); 	//엑셀업로드
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYR_BASE = this.divSearch.form.ctclYR_BASE;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.edtID_PERSON = this.divSearch.form.edtID_PERSON;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_SCHOOLSTART");

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	// row 수정가능 여부
        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YR_BASE", "string");
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("IP_ADDR", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("YR_BASE", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("CD_POSITION", "string");
        	this.dsSave.addColumn("DS_NAME", "string");
        	this.dsSave.addColumn("CD_FAMILY", "string");
        	this.dsSave.addColumn("ID_RESIDENT", "string");
        	this.dsSave.addColumn("NO_AGE", "int");
        	this.dsSave.addColumn("TY_SCHOOL", "string");
        	this.dsSave.addColumn("AM_SCHOOL", "bigdecimal");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("GR_CORP", "string");
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
        	this.dsSelect.setColumn(0, "YR_BASE", this.dsSearch.getColumn(0, "YR_BASE"));
        	this.dsSelect.setColumn(0, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "IP_ADDR", this.AuthClient.NO_IP);
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);

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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

        	this.dsList.setColumn(nrow, "YR_BASE", this.dsSearch.getColumn(0, "YR_BASE"));
        	this.dsList.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
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

        	// save SP 한개로 사용하는 경우
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "YR_BASE", this.dsList.getColumn(i, "YR_BASE"));
        				this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(i, "CD_POSITION"));
        				this.dsSave.setColumn(nrow, "DS_NAME", this.dsList.getColumn(i, "DS_NAME"));
        				this.dsSave.setColumn(nrow, "CD_FAMILY", this.dsList.getColumn(i, "CD_FAMILY"));
        				this.dsSave.setColumn(nrow, "ID_RESIDENT", this.dsList.getColumn(i, "ID_RESIDENT"));
        				this.dsSave.setColumn(nrow, "NO_AGE", this.dsList.getColumn(i, "NO_AGE"));
        				this.dsSave.setColumn(nrow, "TY_SCHOOL", this.dsList.getColumn(i, "TY_SCHOOL"));
        				this.dsSave.setColumn(nrow, "AM_SCHOOL", this.dsList.getColumn(i, "AM_SCHOOL"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSave.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YR_BASE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYR_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("년도를 입력하세요.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CORP"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
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
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}else if(id == "ccfID_SABUN") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        			this.gfnAlert("법인을 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        		this.ccfID_SABUN.form.CDTextBox.set_value("");
        		this.ccfID_SABUN.form.DSTextBox.set_value("");
        		this.edtID_PERSON.set_value("");
        	}else if(id == "ccfID_SABUN") {
        		if(arr.length > 0) {
        			this.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        		}else{
        			this.edtID_PERSON.set_value("");
        		}
        	}
        };


         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 사원번호
        	if(id == "DAX_CFBASEINFO_ALL") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}

        	// 자녀정보 이름
        	if(id == "DAX_CFFAMILY_CODEFIND") {
        		dsUserParam.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON"));
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"));
        	}

        	// 관계코드
        	if(id == "DAX_CFCOMMONCODE") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "FA");
        	}

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	if(id == "DAX_CFFAMILY_CODEFIND") {
        		var arr = codeFindData;
        		var nRow = this.dsList.rowposition;

        		if(arr.length > 0) {
        			this.dsList.setColumn(nRow, "CD_FAMILY", arr[0]["CD_FAMILY"]);
        			this.dsList.setColumn(nRow, "DS_FAMILY", arr[0]["DS_FAMILY"]);
        			// 나이 자동 설정
        			this.dsList.setColumn(nRow, "NO_AGE", this.dsList.getColumn(nRow,"YR_BASE") - this.dsList.getColumn(nRow,"ID_RESIDENT").substr(0,4) + 1);
        		} else {
        			this.dsList.setColumn(nRow, "CD_FAMILY", "");
        			this.dsList.setColumn(nRow, "DS_FAMILY", "");
        		}
        	}

        	return true;
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT 값이 Y일때만 수정가능상태
        	if(this.dsList.getColumn(row, "YN_EDIT") == "N") {
        		return false;
        	}

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.fnExcelUpload = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	this.dsList.clearData();

        	// this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	// sheet명 없으면 첫번째 sheet
        	this.gfnExcelImport("dsList","Sheet1","A3","fnExcelImportCallback","import",this);

        };

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
         	if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다.");
        		return false;
        	}

        	// 주석시작(양식 다운로드해서 업로드하는게 아니면 아래 부분 주석처리하고 값셋하는부분 더 아래부분 주석 풀어서 처리하면 됨, copyRow로 주석처리해야함)
        	trace(dsOut.saveXML());
        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;

        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}
        	trace("==============111===============");
        	trace(dsOut.saveXML());
        	// 주석종료

        	this.dsList.set_enableevent(false);
        	for (var i=0; i< dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();

        		//아래 copyRow가 컬럼변경 이벤트를 실행하지 않음. 코드파인더 실행때문에 이 위치로 이동
        		// 양식이 일치하는 경우 copyRow
        		this.dsList.copyRow(nrow, dsOut, i);

        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		// 일단 화면에서 보이는 컬럼과 키값이되는 컬럼만 받음(null값 처리된 컬럼은 따로 엑셀에서 입력을 받던지 SP에서 조회후 처리해야할듯)
        		this.dsList.setColumn(nrow, "YR_BASE"		, this.dsSearch.getColumn(0, "YR_BASE"));		// 년도
        		this.dsList.setColumn(nrow, "CD_CORP"		, this.dsSearch.getColumn(0, "CD_CORP"));		// 법인코드
        		this.dsList.setColumn(nrow, "DS_CORP"		, this.ccfCD_CORP.form.DSTextBox.value);		// 법인명
        		/*
        		this.dsList.setColumn(nrow, "ID_SABUN"		, dsOut.getColumn(i,"Column0"));
        		this.dsList.setColumn(nrow, "DS_HNAME"		, dsOut.getColumn(i,"Column1"));
        		this.dsList.setColumn(nrow, "DS_NAME"		, dsOut.getColumn(i,"Column2"));
        		this.dsList.setColumn(nrow, "CD_FAMILY"		, dsOut.getColumn(i,"Column3"));
        		this.dsList.setColumn(nrow, "DS_FAMILY"		, dsOut.getColumn(i,"Column4"));
        		this.dsList.setColumn(nrow, "ID_RESIDENT"	, dsOut.getColumn(i,"Column5"));
        		this.dsList.setColumn(nrow, "NO_AGE"		, dsOut.getColumn(i,"Column6"));
        		this.dsList.setColumn(nrow, "TY_SCHOOL"		, dsOut.getColumn(i,"Column7"));
        		this.dsList.setColumn(nrow, "AM_SCHOOL"		, dsOut.getColumn(i,"Column8"));
        		this.dsList.setColumn(nrow, "DS_REMARK"		, dsOut.getColumn(i,"Column9"));
        		*/

        	}
        	this.dsList.set_enableevent(true);

        	this.gfnSetFormStatus(this, "I");
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		// 생년월일 변경시 나이 셋팅
        		if(e.columnid == "ID_RESIDENT") {
        			this.dsList.setColumn(e.row, "NO_AGE", this.dsList.getColumn(e.row,"YR_BASE") - this.dsList.getColumn(e.row,"ID_RESIDENT").substr(0,4) + 1);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_SCHOOLSTART.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
