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
            this.set_titletext("귀속부서관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DYAPR_SUJU_DEPT_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DYAPR_SUJU_DEPT_UPDATE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DYAPR_SUJU_DEPT_CREATE</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DYAPR_SUJU_DEPT_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DYAPR_SUJU_DEPT_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_USE\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROJ","staCD_DEPT:0.0","10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("CodeFindName").set("DYX_SUJU_DEPT");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_USE","ccfCD_PROJ:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용여부");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
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
            obj = new BindItem("item1","divSearch.form.ccfCD_PROJ.form.CDTextBox","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.chkYN_USE","value","dsSearch","YN_USE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DYA_SUJU_DEPT.xfdl", function() {
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

        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate");
        	this.btnAcc = this.gfnFormButtonAdd("btnAcc", "fnAcc");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_PROJ = this.divSearch.form.ccfCD_PROJ; //프로젝트코드
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.chkYN_USE = this.divSearch.form.chkYN_USE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_PROJ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DY", "DYA_SUJU_DEPT");

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	//this.dsList.addEventHandler("oncolumnchanged", this.fnGrid_ColumnChanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"      , "string");	//법인코드
        	this.dsSelect.addColumn("CD_PROJ", "string");	//회계단위코드
        	this.dsSelect.addColumn("YN_USE"      , "string");	//사용여부

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("ID_USER", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_PROJ", "string");
        	this.dsInsert.addColumn("DS_PROJ", "string");
        	this.dsInsert.addColumn("CD_SAUP_DEPT", "string");
        	this.dsInsert.addColumn("DS_SAUP_DEPT", "string");
        	this.dsInsert.addColumn("YN_SILJUK", "string");
        	this.dsInsert.addColumn("DS_REMARK", "string");
        	this.dsInsert.addColumn("YN_USE", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_PROJ", "string");
        	this.dsUpdate.addColumn("DS_PROJ", "string");
        	this.dsUpdate.addColumn("CD_SAUP_DEPT", "string");
        	this.dsUpdate.addColumn("DS_SAUP_DEPT", "string");
        	this.dsUpdate.addColumn("YN_SILJUK", "string");
        	this.dsUpdate.addColumn("DS_REMARK", "string");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("CD_PROJ", "string");

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

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	//법인코드
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSelect.setColumn(0, "YN_USE", this.chkYN_USE.value);


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
        	var nRow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.set_rowposition(nRow);
        	this.dxGrid.setCellPos(this.dxGrid.getBindCellIndex("body", "CD_PROJ"));
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

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CORP", "01");
        				this.dsInsert.setColumn(nrow, "CD_PROJ", this.dsList.getColumn(i, "CD_PROJ"));
        				this.dsInsert.setColumn(nrow, "DS_PROJ", this.dsList.getColumn(i, "DS_PROJ"));
        				this.dsInsert.setColumn(nrow, "CD_SAUP_DEPT", this.dsList.getColumn(i, "CD_SAUP_DEPT"));
        				this.dsInsert.setColumn(nrow, "DS_SAUP_DEPT", this.dsList.getColumn(i, "DS_SAUP_DEPT"));
        				this.dsInsert.setColumn(nrow, "YN_SILJUK", this.dsList.getColumn(i, "YN_SILJUK"));
        				this.dsInsert.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsInsert.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "CD_PROJ", this.dsList.getColumn(i, "CD_PROJ"));
        				this.dsUpdate.setColumn(nrow, "DS_PROJ", this.dsList.getColumn(i, "DS_PROJ"));
        				this.dsUpdate.setColumn(nrow, "CD_SAUP_DEPT", this.dsList.getColumn(i, "CD_SAUP_DEPT"));
        				this.dsUpdate.setColumn(nrow, "DS_SAUP_DEPT", this.dsList.getColumn(i, "DS_SAUP_DEPT"));
        				this.dsUpdate.setColumn(nrow, "YN_SILJUK", this.dsList.getColumn(i, "YN_SILJUK"));
        				this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsUpdate.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "CD_PROJ", this.dsList.getColumn(i, "CD_PROJ"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("귀속부서코드는 필수입니다.", "fnVaidateCallback");
        // 	}

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
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
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

        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "DYX_SUJU_DEPT") {
        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "TY_PROJ", cdCorp);
        	}
        	return true;

        };
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_DEPT.form.fnCodeFindClear();
        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	switch(id) {
        		case "DOXPR_PROJ_CODEFIND":
         			dsUserParam.setColumn(nrow, "TY_PROJ", "%");
        		break;


        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged=function(id, codeFindData){
        	if(id == "DOXPR_PROJ_CODEFIND"){
        		var arr = codeFindData;
        		var cdCorp = "";
        		if(arr.length > 0){
        			cdCorp = arr[0]["CD_CORP"];
        		}
        		this.dsList.setColumn(this.dsList.rowposition, "CD_CORP", cdCorp);
        		this.dsList.setColumn(this.dsList.rowposition, "CD_DEPT_BUY", "");
        		this.dsList.setColumn(this.dsList.rowposition, "DS_DEPT_BUY", "");
        	}
        };

        //그리드 값변경 이벤트
        this.fnGrid_ColumnChanged = function(obj,e)
        {
        //  파인건설 기준으로는 뒷내용 지우지 않음.
        // 	if(e.columnid == 'LV_DEPT_ACNT'){	//레벨이 변경되었을 경우
        // 		if(!this.gfnIsNull(e.newvalue) && e.newvalue != e.oldvalue){
        // 			obj.setColumn(e.row, "CD_DEPT_UPPER", "");		//상위귀속부서코드
        // 			obj.setColumn(e.row, "DS_DEPT_ACNT_UPPER", "");	//상위귀속부서명
        // 			obj.setColumn(e.row, "CD_DEPT_SELFACNT", "");	//세무단위코드
        // 			obj.setColumn(e.row, "DS_DEPT_SELFACNT", "");	//세무단위명
        // 		}
        // 	}
        };

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

        this.fnAcc = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DYA_SAUP_ACNT", "", param, 1130, 620);
        }

        this.fnCreate = function(obj, e){

        	this.gfnConfirm("수주 프로젝트를 생성하시겠습니까?", "fnCreate_callback");

        };

        this.fnCreate_callback = function(strId, val)
        {
        	if(val == true) {
        		this.fnExec();
        	}
        }

        /*
         *	생성
         */
        this.fnExec = function() {

        	this.dsCreate.clearData();
        	this.dsCreate.addRow();

        	this.dsCreate.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsCreate.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsCreate.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsCreate";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DYA_SUJU_DEPT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
