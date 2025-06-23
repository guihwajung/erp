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
            this.set_titletext("근로계약서 기준");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_AGREEMENT_BASE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_AGREEMENT_BASE_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"YM_BASE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"VALUE\">정규직</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"VALUE\">촉탁직</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_BASE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("기준년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_BASE","staYM_BASE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ctclYM_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("직원구분");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_GUBUN","staTY_GUBUN:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTY_GUBUN");
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
            obj.set_autosizingtype("row");
            obj.set_autosizebandtype("body");
            obj.set_cellsizingtype("none");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ctclYM_BASE.form.TextBox","value","dsSearch","YM_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_AGREEMENT_BASE.xfdl", function() {
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

        	//기준년월 셋팅
        	var today = this.gfnGetDate().substring(0,6);
        	this.divSearch.form.ctclYM_BASE.form.TextBox.set_value(today);

        	//직원구분
        	this.divSearch.form.cboTY_GUBUN.set_value('%');

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        // 	this.FormBtns.Add.set_enable(true);
        // 	this.FormBtns.Del.set_enable(true);
        // 	this.FormBtns.Save.set_enable(true);
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYM_BASE = this.divSearch.form.ctclYM_BASE;
        	this.cboTY_GUBUN = this.divSearch.form.cboTY_GUBUN;

        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_AGREEMENT_BASE");

        	//그리드 이벤트
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.dxGrid.set_autosizingtype( "row" );

        //	var today = this.gfnGetDate().substring(0,6);
        // 	this.divSearch.form.ctclYY_BASE.form.TextBox.set_value(today);
        // 	this.dsSearch.setColumn(0, "YY_BASE", today);

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_BASE", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("YM_BASE", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("CD_GUBUN", "string");
        	this.dsSave.addColumn("DS_GUBUN", "string");
        	this.dsSave.addColumn("DS_TERM", "string");
        	this.dsSave.addColumn("DS_TIME", "string");
        	this.dsSave.addColumn("DS_SALARY", "string");
        	this.dsSave.addColumn("DS_BASE_PAY", "string");
        	this.dsSave.addColumn("DS_OVERTIME", "string");
        	this.dsSave.addColumn("DS_FOOD_TRAN", "string");
        	this.dsSave.addColumn("DS_POSITION", "string");
        	this.dsSave.addColumn("DS_HOLIDAY_PAY", "string");
        	this.dsSave.addColumn("DS_NIGHT_PAY", "string");
        	this.dsSave.addColumn("DS_MANAGE", "string");
        	this.dsSave.addColumn("DS_DUTY_PAY", "string");
        	this.dsSave.addColumn("DS_HOLIDAY", "string");
        	this.dsSave.addColumn("YN_DELETE", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YM_BASE", this.dsSearch.getColumn(0, "YM_BASE"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	var tyGubun = this.cboTY_GUBUN.value;
        	if(tyGubun != '%' && tyGubun != ''){
        		this.dsList.setColumn(nrow, "TY_GUBUN", this.cboTY_GUBUN.value);
        	}
        	this.dsList.setColumn(nrow, "YM_BASE", this.ctclYM_BASE.form.TextBox.value);
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
        				this.dsSave.setColumn(nrow, "YM_BASE", this.dsList.getColumn(i, "YM_BASE"));
        				this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsSave.setColumn(nrow, "CD_GUBUN", this.dsList.getColumn(i, "CD_GUBUN"));
        				this.dsSave.setColumn(nrow, "DS_GUBUN", this.dsList.getColumn(i, "DS_GUBUN"));
        				this.dsSave.setColumn(nrow, "DS_TERM", this.dsList.getColumn(i, "DS_TERM"));
        				this.dsSave.setColumn(nrow, "DS_TIME", this.dsList.getColumn(i, "DS_TIME"));
        				this.dsSave.setColumn(nrow, "DS_SALARY", this.dsList.getColumn(i, "DS_SALARY"));
        				this.dsSave.setColumn(nrow, "DS_BASE_PAY", this.dsList.getColumn(i, "DS_BASE_PAY"));
        				this.dsSave.setColumn(nrow, "DS_OVERTIME", this.dsList.getColumn(i, "DS_OVERTIME"));
        				this.dsSave.setColumn(nrow, "DS_FOOD_TRAN", this.dsList.getColumn(i, "DS_FOOD_TRAN"));
        				this.dsSave.setColumn(nrow, "DS_POSITION", this.dsList.getColumn(i, "DS_POSITION"));
        				this.dsSave.setColumn(nrow, "DS_HOLIDAY_PAY", this.dsList.getColumn(i, "DS_HOLIDAY_PAY"));
        				this.dsSave.setColumn(nrow, "DS_NIGHT_PAY", this.dsList.getColumn(i, "DS_NIGHT_PAY"));
        				this.dsSave.setColumn(nrow, "DS_MANAGE", this.dsList.getColumn(i, "DS_MANAGE"));
        				this.dsSave.setColumn(nrow, "DS_DUTY_PAY", this.dsList.getColumn(i, "DS_DUTY_PAY"));
        				this.dsSave.setColumn(nrow, "DS_HOLIDAY", this.dsList.getColumn(i, "DS_HOLIDAY"));
        				this.dsSave.setColumn(nrow, "YN_DELETE", this.dsList.getColumn(i, "YN_DELETE"));
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

        /*
         *	리셋 버튼
         */
        this.fnReset = function() {
        	this.divSearch.form.ctclYM_BASE.form.TextBox.set_value("");
        	this.divSearch.form.cboTY_GUBUN.set_value("%");

        	this.fnSearchInit();
        };


        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {

        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		this.gfnAlert("법인코드를 입력하세요.");
        // 		return false;
        // 	}

        	if (this.gfnIsNull(this.ctclYM_BASE.form.TextBox.value)) {
        		this.ctclYM_BASE.form.TextBox.setFocus();
        		this.gfnAlert("기준년월을 입력하세요.");
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
        	//trace("fnCallback >>>>svcID :["+svcID+"] errorCode :["+errorCode+"] errorMsg :["+errorMsg+"]" );
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSetButton();
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
        this.fnAfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//trace("코드파인드_식별id:" + id);
        	switch(id) {
        		case "ccfCD_CORP":	//법인
        			//(this.ccfCD_CORP.CodeFindName = "DAX_CFCORP2" 일경우) 아래 파라미터 사용
        			//dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			//dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;

        		case "ccfID_SABUN":
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;

        		default:
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	//trace('grid_코드파인드_식별id: ' + id);

        	switch(id) {
        		case "ID_SABUN":     // DAX_CFBASEINFO
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");

        		break;

        		default:
        	}

        	return true;
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	// 폼상태 초기화
        	this.gfnSetFormStatus(this);
        	this.gfnGridClear(this.dxGrid);
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
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
            this.divSearch.form.cboTY_GUBUN.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_AGREEMENT_BASE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
