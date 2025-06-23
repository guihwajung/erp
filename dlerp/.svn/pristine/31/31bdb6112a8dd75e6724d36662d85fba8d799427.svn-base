(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAC_DAILYMANAGE");
            this.set_titletext("일인원현황(인사)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DACPR_DAILYMANAGE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DACPR_DAILYMANAGE_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_REPORT\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_REPORT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REPORT","staDT_REPORT:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ctclDT_REPORT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("부서");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFDEPT_MST1");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_REPORT","value","dsSearch","DT_REPORT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_DAILYMANAGE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	//부서코드 셋팅
        	this.dsSearch.setColumn(0, "CD_DEPT", this.getOwnerFrame().CD_DEPT);
        	this.dsSearch.setColumn(0, "DS_DEPT", this.getOwnerFrame().DS_DEPT);

        	this.ccfCD_DEPT.set_enable(false);


        	//일자 셋팅
        	this.dsSearch.setColumn(0, "DT_REPORT", this.getOwnerFrame().DT_REPORT);

        	this.FormBtns.Select.click();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//일자
        	this.ctclDT_REPORT = this.divSearch.form.ctclDT_REPORT;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAC_DAILYMANAGE");

        	this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT_MST1";

        	//그리드 이벤트
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_REPORT", "string"); //일자
        	this.dsSelect.addColumn("CD_DEPT", "string"); //일자
        	this.dsSelect.addColumn("GR_SEARCH", "string"); //로그인 권한
        	this.dsSelect.addColumn("GR_DEPT", "string");  	//로그인 부서
        	this.dsSelect.addColumn("ID_LOGIN", "string");  //로그인 ID

        	//저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("DT_REPORT", "string");
        	this.dsSave.addColumn("CD_DEPT_REGISTER", "string");
        	this.dsSave.addColumn("NO_OFFICER", "bigdecimal");
        	this.dsSave.addColumn("NO_REGULAR", "bigdecimal");
        	this.dsSave.addColumn("NO_CONTRACT", "bigdecimal");
        	this.dsSave.addColumn("NO_ABSENCE", "bigdecimal");
        	this.dsSave.addColumn("NO_HOLIDAY", "bigdecimal");
        	this.dsSave.addColumn("NO_SPECIAL", "bigdecimal");
        	this.dsSave.addColumn("NO_CLOSE", "bigdecimal");
        	this.dsSave.addColumn("NO_OFFICIAL", "bigdecimal");
        	this.dsSave.addColumn("NO_ETC", "bigdecimal");
        	this.dsSave.addColumn("NO_SERVICE_TOTAL", "bigdecimal");
        	this.dsSave.addColumn("NO_SERVICE_HOLIDAY", "bigdecimal");
        	this.dsSave.addColumn("NO_CADDIE_TOTAL", "bigdecimal");
        	this.dsSave.addColumn("NO_CADDIE_HOLIDAY", "bigdecimal");
        	this.dsSave.addColumn("NO_LABOR_CNT", "bigdecimal");  // 20200302 컬럼추가
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if(!this.fnValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	//this.dsSelect.setColumn(0, "DT_REPORT", this.divSearch.form.ctclDT_REPORT.value); 	//일자
        	//this.dsSelect.setColumn(0, "CD_DEPT", this.divSearch.form.ccfCD_DEPT.form.CDTextBox.value); 	//부서
        	this.dsSelect.setColumn(0, "DT_REPORT", this.dsSearch.getColumn(0, "DT_REPORT")); 	//일자
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT")); 	//부서
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH); 	//로그인 권한
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);  	//로그인 부서
        	this.dsSelect.setColumn(0, "ID_LOGIN", this.AuthClient.ID_USER);  	//로그인 ID

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
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        };

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
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "DT_REPORT", this.dsList.getColumn(i, "DT_REPORT"));
        				this.dsSave.setColumn(nrow, "CD_DEPT_REGISTER", this.dsList.getColumn(i, "CD_DEPT_REGISTER"));
        				this.dsSave.setColumn(nrow, "NO_OFFICER", this.dsList.getColumn(i, "NO_OFFICER"));
        				this.dsSave.setColumn(nrow, "NO_REGULAR", this.dsList.getColumn(i, "NO_REGULAR"));
        				this.dsSave.setColumn(nrow, "NO_CONTRACT", this.dsList.getColumn(i, "NO_CONTRACT"));
        				this.dsSave.setColumn(nrow, "NO_ABSENCE", this.dsList.getColumn(i, "NO_ABSENCE"));
        				this.dsSave.setColumn(nrow, "NO_HOLIDAY", this.dsList.getColumn(i, "NO_HOLIDAY"));
        				this.dsSave.setColumn(nrow, "NO_SPECIAL", this.dsList.getColumn(i, "NO_SPECIAL"));
        				this.dsSave.setColumn(nrow, "NO_CLOSE", this.dsList.getColumn(i, "NO_CLOSE"));
        				this.dsSave.setColumn(nrow, "NO_OFFICIAL", this.dsList.getColumn(i, "NO_OFFICIAL"));
        				this.dsSave.setColumn(nrow, "NO_ETC", this.dsList.getColumn(i, "NO_ETC"));
        				this.dsSave.setColumn(nrow, "NO_SERVICE_TOTAL", this.dsList.getColumn(i, "NO_SERVICE_TOTAL"));
        				this.dsSave.setColumn(nrow, "NO_SERVICE_HOLIDAY", this.dsList.getColumn(i, "NO_SERVICE_HOLIDAY"));
        				this.dsSave.setColumn(nrow, "NO_CADDIE_TOTAL", this.dsList.getColumn(i, "NO_CADDIE_TOTAL"));
        				this.dsSave.setColumn(nrow, "NO_CADDIE_HOLIDAY", this.dsList.getColumn(i, "NO_CADDIE_HOLIDAY"));
        				this.dsSave.setColumn(nrow, "NO_LABOR_CNT", this.dsList.getColumn(i, "NO_LABOR_CNT"));  //20200302 컬럼추가
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSave.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
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
        this.fnValidate = function() {
        	var validate = true;

        	//if (this.gfnIsNull(this.ctclDT_REPORT.value)) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_REPORT"))) {
        		validate = false;
        		this.ctclDT_REPORT.setFocus();
        		this.gfnAlert("일자를 입력하세요.");
        		return validate;
        	}

        	//if(this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.value)){
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))){
        		this.fnAlertCallback = function() {
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("조회 부서를 입력하세요.", "fnAlertCallback");
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
        this.fnCallback = function(svcID, errorCode, errorMsg, args) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSetButton();
        	} else if ( svcID == "save") {
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
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

         	var arr = codeFindData;
        	if(this.gfnIsNull(arr)) return false;

        	switch(id) {
        		case "ccfCD_DEPT":
        			if(arr.length > 0) {
        				this.ccfCD_DEPT.form.CDTextBox.set_value(arr[0]["CD_DEPT_MST"]);
        				this.ccfCD_DEPT.form.DSTextBox.set_value(arr[0]["DS_DEPT_MST"]);
        				if(!this.gfnIsNull(arr) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_REPORT")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))){
        					this.FormBtns.Select.click();
        				}
        			}
        			break;

        		default:
        	}

        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         // 셀 수정가능 여부 (반드시 EnterCell에서 처리할것)
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	var rowFlag = this.gfnGetFlag(this.dsList, row);
        	if(rowFlag != "#" && rowFlag != "I" ) {
        // 		if(colnm == "DT_REQUEST" || colnm == "DS_HNAME"){
        // 			return false;
        // 		}
        	}

        	// 공통 > Setting > 그리드정보 에서 셋팅한 내용대로
        	nGrdSpcRow = this.dsGridSpec.findRow( "DS_FIELD", colnm);
        	if(this.dsGridSpec.getColumn(nGrdSpcRow, "YN_READONLY") == "Y"){
        		return false;
        	}

        	return true;
        }

        // 셀 값 변경 후 이벤트
        this.fnGrid_AfterEdit = function(obj,e) {
        	if(e.columnid == "NO_SERVICE_TOTAL" || e.columnid == "NO_SERVICE_HOLIDAY") {
        		//if(e.newvalue >= 0){
        			var tot = this.dsList.getColumn(e.row, "NO_SERVICE_TOTAL");
        			var hol = this.dsList.getColumn(e.row, "NO_SERVICE_HOLIDAY");
        			    tot = this.gfnIsNull(tot) ? 0 : tot;
        				hol = this.gfnIsNull(hol) ? 0 : hol;
        			var cnt = nexacro.toNumber(tot) - nexacro.toNumber(hol);
        			if (cnt < 0){
        				this.dsList.setColumn(e.row, "NO_SERVICE_CNT", "");
        			}else{
        				this.dsList.setColumn(e.row, "NO_SERVICE_CNT", cnt);
        			}
        		//}
        	}
        	if(e.columnid == "NO_CADDIE_TOTAL" || e.columnid == "NO_CADDIE_HOLIDAY") {
        		//if(e.newvalue >= 0){
        			var tot = this.dsList.getColumn(e.row, "NO_CADDIE_TOTAL");
        			var hol = this.dsList.getColumn(e.row, "NO_CADDIE_HOLIDAY");
        			    tot = this.gfnIsNull(tot) ? 0 : tot;
        				hol = this.gfnIsNull(hol) ? 0 : hol;
        			var cnt = nexacro.toNumber(tot) - nexacro.toNumber(hol);
        			if (cnt < 0){
        				this.dsList.setColumn(e.row, "NO_CADDIE_CNT", "");
        			}else{
        				this.dsList.setColumn(e.row, "NO_CADDIE_CNT", cnt);
        			}
        		//}
        	}

        }

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

        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		this.dsList.clearData();

        	}
        };

        this.divSearch_ctclDT_REPORT_onchanged = function(obj,e)
        {
        	//this.fnSearchInit();

        	if(!this.gfnIsNull(e.postvalue) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_REPORT")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))){
        		this.FormBtns.Select.click();
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_REPORT.addEventHandler("onchanged",this.divSearch_ctclDT_REPORT_onchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_DAILYMANAGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
