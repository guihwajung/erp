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
            this.set_titletext("52시간대상자관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CREATE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAGPR_ADMINUSER_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAGPR_ADMINUSER_SAVE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DAGPR_ADMINUSER_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_SYSTEM:0.0","10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ORG","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT_ORG:0.0","10.0","260","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_UPDEPT","ccfCD_DEPT:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAG_ADMINUSER.xfdl", function() {
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

        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	this.ccfCD_DEPT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        	this.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);


        // 	// 타화면에서 오픈시 넘어오는 파라미터 처리
        // 	if(!this.gfnIsNull(this.getOwnerFrame().CD_SYSTEM) && !this.gfnIsNull(this.getOwnerFrame().DS_SYSTEM)) {
        // 		this.dsSearch.setColumn(0, "CD_SYSTEM", this.getOwnerFrame().CD_SYSTEM);
        // 		// 코드파인드의 명칭부분은 직접 접근해서 셋팅
        // 		this.ccfCD_SYSTEM.form.DSTextBox.set_value(this.getOwnerFrame().DS_SYSTEM);
        //
        // 		this.FormBtns.Select.click();
        // 	}

        	// 환경변수 사용
        	//var cd_payment = this.gfnGetConfig("DZ", "CD_PAYMENT");
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 화면버튼관리에서 관리하므로 사용안함.
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
        	this.adminuserCreate = this.gfnFormButtonAdd("ADMINUSER_CREATE", "fnAdminuserCreate");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAG_ADMINUSER");

        // 	// 셀 수정가능 여부
        // 	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        //
        // 	// 셀 변경 후 이벤트
        // 	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        //
        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 코드파인드 값 변경
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        //
        // 	// 전체체크박스 체크/해제 이벤트
        // 	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";
        //
        // 	// BUTTON, BUTTON-IN 처리
        // 	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        //
        // 	// background 처리
        // 	var col = this.dxGrid.getBindCellIndex("body", "KEYIN");
        // 	// 컬럼값으로 background
        // 	this.dxGrid.setCellProperty("body", col, "background", "expr:'#'+KEYIN");
        // 	// 조건문으로 background (조건문 처리시 공통의 css처리가 무시될수 있으므로 else 부분은 null처리)
        // 	var col2 = this.dxGrid.getBindCellIndex("body", "CODEFINDTXT");
        // 	this.dxGrid.setCellProperty("body", col2, "background", "expr:CODEFINDTXT=='DA'?'#BFFDC8':null");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("DT_CREATE", "string");
        	this.dsSave.addColumn("YN_USE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("DS_HNAME", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("YN_PLAN", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("GR_CORP", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("GR_SEARCH", "string");
        	this.dsCreate.addColumn("GR_CORP", "string");
        	this.dsCreate.addColumn("GR_DEPT", "string");
        	this.dsCreate.addColumn("ID_USER", "string");

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
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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
        // 	this.dsList.set_enableevent(false);
        // 	this.dsList.setColumn(nrow, "CODEFIND", this.ccfCD_SYSTEM.form.CDTextBox.value);
        // 	this.dsList.setColumn(nrow, "DS_CODEFIND", this.ccfCD_SYSTEM.form.DSTextBox.value);
        // 	this.dsList.set_enableevent(true);


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
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "NO_SEQ", flag == "I" ? "0" : this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        				this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsSave.setColumn(nrow, "DT_CREATE", this.dsList.getColumn(i, "DT_CREATE"));
        				this.dsSave.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "DS_HNAME", this.dsList.getColumn(i, "DS_HNAME"));
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "YN_PLAN", this.dsList.getColumn(i, "YN_PLAN"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.dsList.getColumn(i, "GR_SEARCH"));
        				this.dsSave.setColumn(nrow, "GR_CORP", this.dsList.getColumn(i, "GR_CORP"));
        				this.dsSave.setColumn(nrow, "GR_DEPT", this.dsList.getColumn(i, "GR_DEPT"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	//trace(this.dsSave.saveXML());
        	//return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	//var outData     = "dsOutput=save";
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


        this.fnAdminuserCreate = function(){
        	if (!this.fnSelectValidate()) return false;

        trace("fnAdminuserCreate");
        	this.gfnConfirm("신규 대상자를 생성하시겠습니까?", "fnConfirmCallback", "AdminuserCreate");

        }

        this.fnAdminuserCreateProc = function(){


        	this.dsCreate.clearData();
        	var nrow = this.dsCreate.addRow();

        	this.dsCreate.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsCreate.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsCreate.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        	this.dsCreate.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsCreate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);


        	if (this.dsCreate.rowcount == 0) return;

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
        	//var outData     = "dsOutput=save";
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

        this.fnConfirmCallback = function(id, val){
        	trace("id", id);
        	trace("val", val);

        	if(this.gfnIsNull(val)) return;
        	if(val == false) return;

        	if(id == "AdminuserCreate"){
        		this.fnAdminuserCreateProc();
        	}
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CORP"))) {
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

        		// 색상 지정후 로딩 테스트
        // 		this.dsSearch.setColumn(0, "NO_COLOR", "#2b8fc6");
        // 		this.divSearch.form.ctxtColor.form.fnColorPickerLoad();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        // 			// 보통 output 처리는 단일건이 될듯..
        // 			if(this.dsOutput.rowcount > 0) {
        // 				if(this.dsOutput.getColumn(0, "TY_FLAG") == "I") {
        // 					var no_idx = this.dsOutput.getColumn(0, "NO_IDX");
        // 					this.gfnAlert(no_idx.toString());
        // 				}
        // 			}

        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "create"){
        		this.fnSaveAfter = function() {
        			this.FormBtns.Select.click();
        		}
        		this.gfnAlert("대상자가 생성되었습니다.", "fnSaveAfter");
        	}
        // 	else if(svcID == "combo") {
        // 		if (errorCode == 0) {
        // 			// 초기 선택값은 아래 3가지 방법으로 가능
        //  			this.divSearch.form.ccboTY_REGIST.set_index(0);
        // //  		this.divSearch.form.ccboTY_REGIST.set_value("00");
        // // 			this.divSearch.form.ccboTY_REGIST.set_text("미등록");
        // 		}
        // 	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		;
        	}
        	if (id == "ccfCD_DEPT") {
        		// GR_SEARCH		조회권한
        		// CD_DEPT		로그인부서코드
        		// CD_CORP		조회조건 법인코드
        		// YN_CURRENT		='N'

        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "N");
        	}
        	return true;
        }


        this.fnAfterCDTextChanged = function(id, codeFindData) {
        // 	// 코드,명칭 외 추가 컬럼 처리
        // 	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
        //
        // 	var ds_updept = "";
        // 	if (arr.length > 0) {
        // 		ds_updept = arr[0]["DS_UPDEPT"];
        // 	}
        //
        // 	this.ctxtDS_UPDEPT.set_value(ds_updept);
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        // this.fnGrid_EnterCell = function(obj:nexacro.Grid, row, cell) {
        // 	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);
        // 	if(this.dsList.getColumn(row, colnm) == "TEST") {
        // 		return false;
        // 	}
        // }
        //
        // this.fnGrid_AfterEdit = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo) {
        // 	if(e.columnid == "CODEFIND") {
        // 		if(e.oldvalue != e.newvalue) {
        // 			this.dsList.setColumn(this.dsList.rowposition, "CODEFIND2" ,"");
        // 			this.dsList.setColumn(this.dsList.rowposition, "DS_CODEFIND2" ,"");
        // 		}
        // 	}
        // }
        //
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DAX_CFBASEINFO_ALL") {
        // 		var cd_system = this.dsList.getColumn(this.dsList.rowposition, "CODEFIND");
        // 		if(this.gfnIsNull(cd_system)) {
        // 			this.gfnAlert("시스템코드를 먼저 입력하세요.");
        // 			return false;
        // 		}

        		// CD_DEPT	부서
        		// CD_CORP	조회조건법인코드
        		// GR_SEARCH	권한
        		// YN_CORP	법인무관
        		// TY_RETIRE	재직여부

         		dsUserParam.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
         	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        // 	if(id == "DZX_CFSYSTEM") {
        // 		var arr = codeFindData;
        // 		if(arr.length > 0) {
        // 			var cd_test = arr[0]["CD_TEST"];
        // 		}
        // 	}
        };
        //
        // this.fnGrid_AfterAllCheck = function(obj:nexacro.Grid, cell, check) {
        // 	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        // 	if(colnm == "CHK") {
        // 		trace("fnGrid_AfterAllCheck] " + cell + "," + check);
        // 	}
        // }
        //
        // this.fnGrid_ExpandUp = function(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo) {
        // 	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        // 	if(colnm == "BUTTON") {
        // 		this.gfnAlert("BUTTON 처리");
        // 	}
        // 	else if (colnm == "BUTTON_IN") {
        // 		this.gfnAlert("BUTTON-IN 처리");
        // 	}
        // }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //this.fnSetCombo = function() {
        // 	this.dsCombo = new Dataset();
        // 	this.dsCombo.addColumn("CD_SYSTEM", "string");
        // 	this.dsCombo.addColumn("CD_TYPE", "string");
        // 	this.dsCombo.addColumn("YN_USE", "string");
        // 	this.dsCombo.addColumn("YN_MAND", "string");
        //
        // 	this.dsCombo.addRow();
        // 	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        // 	this.dsCombo.setColumn(0, "CD_TYPE", "17");
        // 	this.dsCombo.setColumn(0, "YN_USE", "Y");
        // 	this.dsCombo.setColumn(0, "YN_MAND", "Y");
        //
        // 	var strSvcId    = "combo";
        // 	var strSvcType  = "select";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "combo=dsCombo";
        // 	var outData     = "dsTY_REGIST=combo0";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        //};
        //
        // this.fnAutoFormCallback = function(svcID, errorCode, errorMsg, strArg) {
        // 	trace(svcID);
        // }
        //
        // this.fnDetail = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // // 	var json = {
        // // 		TY_WORK: "C-01",
        // // 		ATTR01: "4300026034",
        // // 		ATTR02: "001",
        // // 		ATTR03: "",
        // // 		ATTR04: "",
        // // 		ATTR05: "",
        // // 		ATTR06: "",
        // // 		ID_USER: this.AuthClient.ID_USER
        // // 	}
        // // 	this.gfnAutoForm(json, "fnAutoFormCallback");
        //
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        // 	var param = {};
        // 	param.CD_SYSTEM = this.dsList.getColumn(this.dsList.rowposition, "CODEFIND");
        // 	param.DS_SYSTEM = this.dsList.getColumn(this.dsList.rowposition, "DS_CODEFIND");
        //
        // 	var param = {};
        // 	param.TEST1 = {};
        // 	param.TEST1.CD_TEST = "테스트";
        // 	param.TEST1.AM_TEST = 1234;
        //
        // 	param.TEST2 = ["123","테스트"];
        //
        // 	// 화면 오픈.
        // 	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        // 	// 타 모듈 화면 호출시 지정할것.
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZZ_SAMPLE1", "", param);
        //
        // }
        //
        // this.fnCheck = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        //
        // 	var arrChk = [];
        // 	for(var i = 0; i < this.dsList.rowcount; i++) {
        // 		if(this.dsList.getColumn(i, "CHK") == 1) {
        // 			arrChk.push(i);
        // 		}
        // 	}
        //
        // 	if(arrChk.length > 0) {
        // 		// 체크행 처리
        // 		this.gfnAlert("체크행:" + arrChk.join(','));
        // 		for(var i = 0; i < arrChk.length; i++) {
        // 			var col1 = this.dsList.getColumn(arrChk[i], "KEYIN");
        // 		}
        // 	} else {
        // 		this.gfnAlert("체크된 행이 없습니다.");
        // 	}
        // }
        //
        // this.fnFile = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // // 	var param = {};
        // // 	param["${companyName}"] = "테스트 업체";
        // // 	this.FileDownTransfer00.set_url("/file/rtfFile.do");
        // // 	this.FileDownTransfer00.setPostData("ID_RTF", "RTF1");
        // // 	this.FileDownTransfer00.setPostData("PARAMS", JSON.stringify(param));
        // // 	this.FileDownTransfer00.download();
        // // 	return;
        //
        // 	var fileManager = {};
        // 	fileManager.CD_GUBUN = "DZ99";
        // 	fileManager.CD_DIR = [ "A", "2" ];
        // 	// CD_DIR 만 지정시 CD_DIR 배열 순대로 키1,키2,키3 까지 자동지정
        // 	// 저장되는 디렉토리와 키값이 다른경우 CD_REF 추가로 사용
        // 	//fileManager.CD_REF = [ "A1" ];
        // 	// 권한 및 상태에 따라 업로드,삭제 가능여부 지정 (기본: true)
        //
        // 	if(this.FormInfo.TY_AUTH == "R") {
        // 		fileManager.IS_READONLY = true;
        // 	} else {
        // 		fileManager.IS_READONLY = false;
        // 	}
        //
        // 	this.gfnFileManager(fileManager, "fnFileCallback");
        // };
        //
        // this.fnFileCallback = function() {
        // };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        // this.fnDialog = function() {
        //
        //
        // 	// 권한체크 필요없는 단순 Dialog 오픈
        // 	var param = {};
        // 	param.CD_TEST = "01";
        // 	this.gfnFormOpenNonAuth("DZZ", "DZZ_SAMPLE_DLG", "fnDialogCallback", param, 500, 400);
        // };
        //
        //
        // this.fnCopyFile = function() {
        // 	// 파일복사 테스트
        // 	this.dsCopy = new Dataset();
        // 	this.dsCopy.addColumn("CD_GUBUN", "string");
        // 	this.dsCopy.addColumn("CD_REF1", "string");
        // 	this.dsCopy.addColumn("CD_REF2", "string");
        // 	this.dsCopy.addColumn("CD_REF3", "string");
        // 	this.dsCopy.addColumn("CD_REF4", "string");
        // 	this.dsCopy.addColumn("CD_REF5", "string");
        // 	this.dsCopy.addColumn("NEW_CD_GUBUN", "string");
        // 	this.dsCopy.addColumn("NEW_CD_REF1", "string");
        // 	this.dsCopy.addColumn("NEW_CD_REF2", "string");
        // 	this.dsCopy.addColumn("NEW_CD_REF3", "string");
        // 	this.dsCopy.addColumn("NEW_CD_REF4", "string");
        // 	this.dsCopy.addColumn("NEW_CD_REF5", "string");
        //
        // 	var nrow = this.dsCopy.addRow();
        // 	this.dsCopy.setColumn(nrow, "CD_GUBUN", "DZ88");
        // 	this.dsCopy.setColumn(nrow, "CD_REF1", "A");
        // 	this.dsCopy.setColumn(nrow, "CD_REF2", "1");
        // 	this.dsCopy.setColumn(nrow, "CD_REF3", "");
        // 	this.dsCopy.setColumn(nrow, "CD_REF4", "");
        // 	this.dsCopy.setColumn(nrow, "CD_REF5", "");
        // 	this.dsCopy.setColumn(nrow, "NEW_CD_GUBUN", "DZ99");
        // 	this.dsCopy.setColumn(nrow, "NEW_CD_REF1", "A");
        // 	this.dsCopy.setColumn(nrow, "NEW_CD_REF2", "2");
        // 	this.dsCopy.setColumn(nrow, "NEW_CD_REF3", "");
        // 	this.dsCopy.setColumn(nrow, "NEW_CD_REF4", "");
        // 	this.dsCopy.setColumn(nrow, "NEW_CD_REF5", "");
        //
        // 	var strSvcId    = "copyfile";
        // 	var strSvcType  = "file/copyFile";
        // 	var inProc		= "";
        // 	var inData      = "input=dsCopy";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCopyFileCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        // };
        //
        // this.fnCopyFileCallback = function(svcID, errorCode, errorMsg) {
        // 	if(svcID == "copyfile") {
        // 		if(errorCode == 0) {
        // 			this.gfnAlert("파일복사가 완료되었습니다.");
        // 		} else {
        // 			this.gfnAlert(errorMsg);
        // 		}
        // 	}
        // }
        //
        // this.fnDialogCallback = function(svcID, value) {
        // 	// 리턴값
        // 	trace(value);
        // };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctxtDS_UPDEPT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAG_ADMINUSER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
