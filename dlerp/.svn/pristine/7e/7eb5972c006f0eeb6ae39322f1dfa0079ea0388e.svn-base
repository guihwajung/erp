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
            this.set_titletext("초과근무 승인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DACPR_OVERTIME_SELECT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DACPR_OVERTIME_DELETE</Col></Row><Row><Col id=\"TARGET\">approval</Col><Col id=\"SP\">DACPR_OVERTIME_APPROVAL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_WORKDAY_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORKDAY_TO\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_WORKDAY_FR\"/><Col id=\"DT_WORKDAY_TO\"/><Col id=\"ID_SABUN\"/><Col id=\"DS_HNAME\"/><Col id=\"CD_DEPT\"/><Col id=\"DS_DEPT\"/><Col id=\"CD_GUBUN\"/><Col id=\"DS_GUBUN\"/><Col id=\"CD_STATUS\"/><Col id=\"DS_STATUS\"/><Col id=\"TY_DEPT\"/><Col id=\"TY_DEPT_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","22",null,null,"0","6",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("근무일자");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORKDAY_FR","staDT_REQUEST:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORKDAY_TO","ctclDT_WORKDAY_FR:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO","ctclDT_WORKDAY_TO:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","staDT_ORD_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사원");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfID_SABUN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_GUBUN","0.0","staDT_REQUEST:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("근무유형");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_GUBUN","staCD_GUBUN:0.0","staDT_REQUEST:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_STATUS","ccfCD_GUBUN:0.0","staDT_REQUEST:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_STATUS","staCD_STATUS:0.0","staDT_REQUEST:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_DEPT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("조직분류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_DEPT","staTY_DEPT:0.0","10.0","170","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclDT_WORKDAY_FR","value","dsSearch","DT_WORKDAY_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_WORKDAY_TO","value","dsSearch","DT_WORKDAY_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_GUBUN.form.CDTextBox","value","dsSearch","CD_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_GUBUN.form.DSTextBox","value","dsSearch","DS_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_STATUS.form.CDTextBox","value","dsSearch","CD_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_STATUS.form.DSTextBox","value","dsSearch","DS_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfTY_DEPT.form.CDTextBox","value","dsSearch","TY_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccfTY_DEPT.form.DSTextBox","value","dsSearch","TY_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_OVERTIME_INFO.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var gfTyFlag;

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

        	this.fnSetExtendButtonEnable(false);
        	// ---------------------------//

        	//근무기간 셋팅
        	var today = this.gfnGetDate();
        	this.divSearch.form.ctclDT_WORKDAY_FR.set_value(today);
        	this.divSearch.form.ctclDT_WORKDAY_TO.set_value(today);


        	//화면 로드시 자동조회
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("FormButton1", "fnFormButton1","승인");
        	this.btn2 = this.gfnFormButtonAdd("FormButton2", "fnFormButton2","반려/취소");
        };

        // 승인
        this.fnFormButton1 = function(obj,e) {
        	this.fnApproval("2");
        }

        // 반려/취소
        this.fnFormButton2 = function(obj,e) {
        	this.fnApproval("3");
        }

        this.fnSetExtendButtonEnable = function(bEnable){
        	this.btn1.set_enable(bEnable);
        	this.btn2.set_enable(bEnable);
        };
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        	this.ctclDT_WORKDAY_FR = this.divSearch.form.ctclDT_WORKDAY_FR;
        	this.ctclDT_WORKDAY_TO = this.divSearch.form.ctclDT_WORKDAY_TO;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ccfCD_GUBUN = this.divSearch.form.ccfCD_GUBUN;
        	this.ccfCD_STATUS =	this.divSearch.form.ccfCD_STATUS;
        	this.ccfTY_DEPT = this.divSearch.form.ccfTY_DEPT;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAC_OVERTIME_INFO");
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO"; // DAX_CFBASEINFO_ALL -> DAX_CFBASEINFO 변경
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT_MST1"; //DAX_CFDEPT -> DAX_CFDEPT_MST1 변경
        	this.ccfCD_GUBUN.CodeFindName = "DAX_CFCOMMONCODEUP";	//DAX_CFCOMMONCODE -> DAX_CFCOMMONCODEUP 변경
        	this.ccfCD_GUBUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_STATUS.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_STATUS.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_WORKDAY_FR", "string");
        	this.dsSelect.addColumn("DT_WORKDAY_TO", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("TY_STATUS", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("GR_SABUN", "string");
        	this.dsSelect.addColumn("TY_DEPT", "string");

        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("TY_STATUS", "string");
        	this.dsApproval.addColumn("ID_PERSON", "bigdecimal");
        	this.dsApproval.addColumn("DT_REQUEST", "string");
        	this.dsApproval.addColumn("NO_SEQ", "bigdecimal");
        	this.dsApproval.addColumn("ID_SABUN", "string");
        	this.dsApproval.addColumn("GR_SEARCH", "string");
        	this.dsApproval.addColumn("GR_DEPT", "string");
        	this.dsApproval.addColumn("ID_LOGIN", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("ID_PERSON", "bigdecimal");
        	this.dsDelete.addColumn("DT_REQUEST", "string");
        	this.dsDelete.addColumn("NO_SEQ", "bigdecimal");
        	this.dsDelete.addColumn("ID_SABUN", "string");
        	this.dsDelete.addColumn("GR_SEARCH", "string");
        	this.dsDelete.addColumn("GR_DEPT", "string");
        	this.dsDelete.addColumn("ID_DELETE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnSetFormStatus(this);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "DT_WORKDAY_FR", this.ctclDT_WORKDAY_FR.value);
        	this.dsSelect.setColumn(0, "DT_WORKDAY_TO", this.ctclDT_WORKDAY_TO.value);
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.ccfCD_GUBUN.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "TY_STATUS", this.ccfCD_STATUS.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "GR_SABUN", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "TY_DEPT", this.ccfTY_DEPT.form.CDTextBox.value);

         	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);

        }

        this.fnAdd = function() {
        	//this.gfnGridAdd(this.dxGrid);
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

        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        				this.dsDelete.setColumn(nrow, "DT_REQUEST", this.dsList.getColumn(i, "DT_REQUEST"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsDelete.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsDelete.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsDelete.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT_MST);
        				this.dsDelete.setColumn(nrow, "ID_DELETE", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "delete";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
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


        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {
        }

        /*
         *	초기화 버튼
         */
        this.fnReset = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	//this.fnSearchInit();
        }

        this.fnApproval = function(paramTyFlag) {
        	gfTyFlag = paramTyFlag;
        	if (gfTyFlag == "2") {
        	this.gfnConfirm("해당 초과근무건을 승인/하시겠습니까?", "fnApprovalCallback");
        	}
        	else{
        	this.gfnConfirm("해당 초과근무건을 반려/취소 하시겠습니까?", "fnApprovalCallback");
        	}
        }

        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	this.fnSetButton();

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "approval") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "delete") {
        		this.gfnAlert("삭제되었습니다.");
        		this.FormBtns.Select.click();
        	}
        }
        //승인/반려,취소
        this.fnApprovalCallback = function(strId, val)  {
        	if(val == false) return;

        	this.dsApproval.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		//if (this.dsList.getColumn(i, "CHK") == 1) {
        		if (this.dsList.getColumn(i, "CHK") == 1 && this.dsList.getColumn(i, this.ucFlag) != "#" ) {

        			var nrow = this.dsApproval.addRow();

        			this.dsApproval.setColumn(nrow, "TY_STATUS", gfTyFlag); //2:승인, 3:반려/취소
        			this.dsApproval.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        			this.dsApproval.setColumn(nrow, "DT_REQUEST", this.dsList.getColumn(i, "DT_REQUEST"));
        			this.dsApproval.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        			this.dsApproval.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        			this.dsApproval.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			this.dsApproval.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        			this.dsApproval.setColumn(nrow, "ID_LOGIN", this.AuthClient.ID_USER);
        		}
        	}

        	var strSvcId    = "approval";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "approval=dsApproval";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	if (this.dsApproval.rowcount == 0) return;

        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
        }


        this.fnDialogCallback = function(svcID, value){
        	this.FormBtns.Select.click();
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfID_SABUN") {
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "");
        	}
        	else if  (id == "ccfCD_GUBUN") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'GT');
        		dsUserParam.setColumn(nrow, "CD_UPPREFIX", '01');
        	}
        	else if  (id == "ccfCD_STATUS") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'GW');
        	}
        	else if  (id == "ccfTY_DEPT") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'DA');
        	}
        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_AfterEdit = function(obj,e) {
        	if(e.columnid == "CHK") {
        		var chkCnt = 0;
        		var onlyRowIdx = 0;

        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if (i == 0) continue;

        			if (this.dsList.getColumn(i, "CHK") == 1 ) {
        				onlyRowIdx = i;
        				chkCnt++;
        			} else {
        				this.dsList.setColumn(i, this.ucFlag, "");
        			}
        		}
        		if (chkCnt == 0) {
        			this.fnSetExtendButtonEnable(false);

        		} else if (chkCnt == 1) {
        			this.btn1.set_enable(true);
        			this.btn2.set_enable(true);

        // 			var ynStatus = this.dsList.getColumn(onlyRowIdx, "TY_STATUS");
        // 			if (!this.gfnIsNull(ynStatus)) {
        // 				if (ynStatus == "2" || ynStatus == "3") {
        // 					this.btn1.set_enable(false);
        // 					this.btn2.set_enable(false);
        // 				}
        // 			}
        	}
        }
        }
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
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
        	if (e.columnid == "DT_WORKDAY_FR" || e.columnid == "DT_WORKDAY_TO") {
        		if (!this.gfnIsNull(this.dsSearch.getColumn(0, "DT_WORKDAY_FR")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_WORKDAY_TO"))) {
        			if (this.dsSearch.getColumn(0, "DT_WORKDAY_FR") > this.dsSearch.getColumn(0, "DT_WORKDAY_TO")) {
        				this.fnAlertCallback = function() {
        					this.dsSearch.setColumn(0, e.columnid, e.oldvalue);
        				}
        				this.gfnAlert("신청기간이 올바르지 않습니다. 다시 입력해주세요.", "fnAlertCallback");
        			}
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_OVERTIME_INFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
