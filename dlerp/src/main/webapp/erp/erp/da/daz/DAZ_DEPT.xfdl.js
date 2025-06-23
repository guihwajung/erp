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
            this.set_titletext("부서코드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAZPR_DEPT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAZPR_DEPT_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_DELETE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">사용</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DELETE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_DELETE","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_DELETE","staYN_DELETE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsYN_DELETE");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_value("N");
            obj.set_index("1");
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

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboYN_DELETE","value","dsSearch","YN_DELETE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAZ_DEPT.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.insertRow = "";

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

        	//법인 코드파인드 초기값 셋팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.divSearch.form.ccboYN_DELETE.set_value("N");

        	this.FormBtns.Select.click();
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
        	this.btn1 = this.gfnFormButtonAdd("DeptHeadAdd"	, "fnDeptHeadAdd");	//본사부서추가
        	this.btn2 = this.gfnFormButtonAdd("DeptNmChg"	, "fnDeptNmChg");	//부서명칭변경
        	this.btn3 = this.gfnFormButtonAdd("FormButton"	, "fnFormButton");	//이력정보
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ccboYN_DELETE = this.divSearch.form.ccboYN_DELETE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//코드파인드
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP_CODEFIND";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAZ_DEPT", "CD_DEPT", "NO_LEVEL");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.set_selecttype("cell");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("YN_DELETE", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("DS_DEPT", "string");
        	this.dsSave.addColumn("CD_CODE", "string");
        	this.dsSave.addColumn("NO_LEVEL", "string");
        	this.dsSave.addColumn("CD_UPDEPT", "string");
        	this.dsSave.addColumn("CD_ORG1", "string");
        	this.dsSave.addColumn("CD_ORG2", "string");
        	this.dsSave.addColumn("CD_ORG3", "string");
        	this.dsSave.addColumn("CD_ORG4", "string");
        	this.dsSave.addColumn("CD_ORG5", "string");
        	this.dsSave.addColumn("TY_DEPT", "string");
        	this.dsSave.addColumn("CD_AREA", "string");
        	this.dsSave.addColumn("NO_INWON", "bigdecimal");
        	this.dsSave.addColumn("ID_DIRECTOR", "string");
        	this.dsSave.addColumn("ID_CHIEF", "string");
        	this.dsSave.addColumn("DT_EST", "string");
        	this.dsSave.addColumn("DT_CLOSE", "string");
        	this.dsSave.addColumn("YN_CURRENT", "string");
        	this.dsSave.addColumn("YN_DELETE", "string");
        	this.dsSave.addColumn("YN_DISPLAY", "string");	// [1] 2024-08-27 조직도 적용
        	this.dsSave.addColumn("SN_PRINT", "bigdecimal");
        	this.dsSave.addColumn("DS_DEPT_ENG", "string");
        	this.dsSave.addColumn("CD_ZIP", "string");
        	this.dsSave.addColumn("DS_ADDR", "string");
        	this.dsSave.addColumn("CD_ZIP_ENG", "string");
        	this.dsSave.addColumn("DS_ADDR_ENG", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("CD_ROLE", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValid()) return;

            this.dsSelect.clearData();
            this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YN_DELETE", this.ccboYN_DELETE.value);

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
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
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

        		if(flag == "I"){
        			this.insertRow = i;
        		}
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "DS_DEPT", this.dsList.getColumn(i, "DS_DEPT"));
        				this.dsSave.setColumn(nrow, "CD_CODE", this.dsList.getColumn(i, "CD_DEPT_ACNT")); //귀속부서코드
        				this.dsSave.setColumn(nrow, "NO_LEVEL", this.dsList.getColumn(i, "NO_LEVEL"));
        				this.dsSave.setColumn(nrow, "CD_UPDEPT", this.dsList.getColumn(i, "CD_UPDEPT"));
        				this.dsSave.setColumn(nrow, "CD_ORG1", this.dsList.getColumn(i, "CD_ORG1"));
        				this.dsSave.setColumn(nrow, "CD_ORG2", this.dsList.getColumn(i, "CD_ORG2"));
        				this.dsSave.setColumn(nrow, "CD_ORG3", this.dsList.getColumn(i, "CD_ORG3"));
        				this.dsSave.setColumn(nrow, "CD_ORG4", this.dsList.getColumn(i, "CD_ORG4"));
        				this.dsSave.setColumn(nrow, "CD_ORG5", this.dsList.getColumn(i, "CD_ORG5"));
        				this.dsSave.setColumn(nrow, "TY_DEPT", this.dsList.getColumn(i, "TY_DEPT"));
        				this.dsSave.setColumn(nrow, "CD_AREA", this.dsList.getColumn(i, "CD_AREA"));
        				this.dsSave.setColumn(nrow, "NO_INWON", this.dsList.getColumn(i, "NO_INWON"));
        				this.dsSave.setColumn(nrow, "ID_DIRECTOR", this.dsList.getColumn(i, "ID_DIRECTOR"));
        				this.dsSave.setColumn(nrow, "ID_CHIEF", this.dsList.getColumn(i, "ID_CHIEF"));
        				this.dsSave.setColumn(nrow, "DT_EST", this.dsList.getColumn(i, "DT_EST"));
        				this.dsSave.setColumn(nrow, "DT_CLOSE", this.dsList.getColumn(i, "DT_CLOSE"));
        				this.dsSave.setColumn(nrow, "YN_CURRENT", this.dsList.getColumn(i, "YN_CURRENT"));
        				this.dsSave.setColumn(nrow, "YN_DELETE", this.dsList.getColumn(i, "YN_DELETE"));
        				this.dsSave.setColumn(nrow, "YN_DISPLAY", this.dsList.getColumn(i, "YN_DISPLAY"));	// [1] 2024-08-27 조직도 적용
        				this.dsSave.setColumn(nrow, "SN_PRINT", this.dsList.getColumn(i, "SN_PRINT"));
        				this.dsSave.setColumn(nrow, "DS_DEPT_ENG", this.dsList.getColumn(i, "DS_DEPT_ENG"));
        				this.dsSave.setColumn(nrow, "CD_ZIP", this.dsList.getColumn(i, "CD_ZIP"));
        				this.dsSave.setColumn(nrow, "DS_ADDR", this.dsList.getColumn(i, "DS_ADDR"));
        				this.dsSave.setColumn(nrow, "CD_ZIP_ENG", this.dsList.getColumn(i, "CD_ZIP_ENG"));
        				this.dsSave.setColumn(nrow, "DS_ADDR_ENG", this.dsList.getColumn(i, "DS_ADDR_ENG"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsSave.setColumn(nrow, "CD_ROLE", this.dsList.getColumn(i, "CD_ROLE"));
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        				this.dsSave.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
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
        this.fnSelectValid = function() {
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	return true;
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 본사부서 추가
        this.fnDeptHeadAdd = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nRow = this.dsList.rowposition;
        	var nRowType =this.dsList.getRowType(nRow);

        	if(nRowType == Dataset.ROWTYPE_INSERT){
        		this.gfnAlert("행추가없이 [본사부서추가]클릭하세요!");
        		return;
        	}

        	var param = {};

        	//trace("ccfCD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.CD_UPDEPT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        	param.DS_UPDEPT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT");
        	param.NO_LEVEL = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL"),"0");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAZ_DEPT_HEAD_ADD", "fnDeptHeadAddCallback", param);
        }

        // 부서명칭 변경 callback
        this.fnDeptNmChg_callback = function(svcID, val) {
        	if(val) {
        		this.FormBtns.Select.click();
        	}
        };

        // 부서명칭변경
        this.fnDeptNmChg = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};
        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.CD_DEPT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        	param.DS_DEPT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT");
        	param.DS_DEPT_ENG = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_ENG");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAZ_DEPTDLG", "fnDeptNmChg_callback", param);
        }

        this.fnDeptHeadAddCallback = function(svcID, val) {
        	if(this.gfnIsNull(val)) return;

        	if(val != false) {
        		var json = JSON.parse(val);

        		//this.dsList.clearData();
        		this.dsList.set_enableevent(false);
        		//var nrow = this.dsList.addRow();
        		//var nrow = this.gfnGridAdd(this.dxGrid,"top");
        		var nrow = 0;
        		if(this.dsList.rowcount > 0 && this.dsList.getColumn(0, this.ucFlag) == "#") {
        			nrow = this.dsList.insertRow(1);
        		} else {
        			nrow = this.dsList.insertRow(0);
        		}

        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		this.dsList.setColumn(nrow, "CD_UPDEPT", json.CD_UPDEPT);
        		this.dsList.setColumn(nrow, "DS_UPDEPT", json.DS_UPDEPT);
        		this.dsList.setColumn(nrow, "DT_EST", json.DT_EST);
        		this.dsList.setColumn(nrow, "TY_DEPT", json.TY_DEPT);
        		this.dsList.setColumn(nrow, "NO_LEVEL", json.NO_LEVEL);
        		this.dsList.setColumn(nrow, "CD_DEPT_ACNT", json.CD_DEPT_ACNT);
        		this.dsList.setColumn(nrow, "DS_DEPT_ACNT", json.DS_DEPT_ACNT);
        		this.dsList.setColumn(nrow, "CD_DEPT", json.CD_DEPT);
        		this.dsList.setColumn(nrow, "DS_DEPT", json.DS_DEPT);
        		this.dsList.setColumn(nrow, "TY_GUBUN", json.TY_GUBUN);
        		this.dsList.setColumn(nrow, "YN_DELETE", "N");
        		this.dsList.setColumn(nrow, "YN_CURRENT", "Y");
        		this.dsList.setColumn(nrow, "YN_DISPLAY", "Y");
        		this.dsList.setColumn(nrow, "CD_ROLE", "R00");

        		this.gfnSetFormStatus(this, "I");
        	    this.dsList.set_enableevent(true);

        	}
        };

        // 이력정보
        this.fnFormButton = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};
        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        	param.CD_DEPT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        	param.DS_DEPT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAZ_DEPT_HISTORY", "", param);
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		if(!this.gfnIsNull(this.insertRow)){	// 신규 입력건이면 해당 row로 포커스 이동
        			this.dsList.set_rowposition(this.insertRow);
        			this.insertRow = ""; //초기화
        		}else{	// 수정건이면 선택된 row로 포커스이동
        			this.gfnGridAfterSelect(this.dxGrid);
        		}
        	}else if(svcID == "save") {
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
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	else if (id == "ccfCD_DEPT") {
        		var cd_corp = this.ccfCD_CORP.form.CDTextBox.text;
        		if(this.gfnIsNull(cd_corp)) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "Y");
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id) {
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_DEPT.form.fnCodeFindClear();
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
          this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow){
        	  switch(id) {
        		case "DAX_CFDEPT_COMMON": //코드
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);
        			break;
        	    case "DAX_CFUPDEPT_CODE": //상위부서
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"));
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);
        			break;
        		case "DHX_CFACNTUNIT": //귀속부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, this.ccfCD_CORP.form.CDTextBox.text);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "%");						//현장/본사여부
        			dsUserParam.setColumn(nrow, "ID_USER"	, this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "GR_SEARCH"	, this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT"	, this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER"	, this.ccfCD_CORP.form.CDTextBox.text);
        			break;
        		case "AB": //지역
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "AB");
        			break;
        		case "DAX_CFBASEINFO_ALL": //조직장 / 담당임원
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);
        			dsUserParam.setColumn(nrow, "YN_CORP" , "N");
        			dsUserParam.setColumn(nrow, "TY_RETIRE" , "%");
        			break;
        	  default:
        	}
        	return true;
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAZ_DEPT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
