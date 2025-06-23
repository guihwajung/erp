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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_EXPENSE_RECEIPT_SELECT</Col></Row><Row><Col id=\"SP\">DHAPR_EXPENSE_RECEIPT_UPDATE</Col><Col id=\"TARGET\">update</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_CONS\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CLOSE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_CONS\"/><Col id=\"TY_CLOSE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_REGIST", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">T</Col><Col id=\"VALUE\">합계잔액시산표</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"VALUE\">대차대조표</Col></Row><Row><Col id=\"CODE\">P</Col><Col id=\"VALUE\">손익계산서</Col></Row><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">이익잉여금처분표</Col></Row><Row><Col id=\"CODE\">S</Col><Col id=\"VALUE\">원가명세서</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("회계년도");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ORG","staCD_SYSTEM:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ORG","staCD_DEPT_ORG:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_WORK","ccfCD_DEPT_ORG:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalYY.xfdl");
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
            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_ORG.form.CDTextBox","value","dsSearch","TY_CLOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctclYY_WORK.form.TextBox","value","dsSearch","YY_WORK");
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
        this.registerScript("DHAT_EXPENSE_RECEIPT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	/*this.fnSetExtendButton();*/
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
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
        // 	this.btnSlipAppr = this.gfnFormButtonAdd("SlipAppr", "fnSlipAppr", "대상현장/부서생성");	//대상현장/부서생성
        // 	this.btnSlipCancel = this.gfnFormButtonAdd("SlipCancel", "fnSlipCancel", "지방소득세 종업원분 납부서");	//지방소득세 종업원분 납부서
        // 	this.btnSlipDelete = this.gfnFormButtonAdd("SlipDelete", "fnSlipDelete", "지방소득세 종업원분 신고서");	//지방소득세 종업원분 신고서

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYY_WORK = this.divSearch.form.ctclYY_WORK;
        	this.ccfCD_DEPT_ORG = this.divSearch.form.ccfCD_DEPT_ORG;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_DEPT_ORG.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_DEPT_ORG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_ORG.AfterCDTextChanged = "fnAfterCDTextChanged"

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "Dhat_Expense_Receipt");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.ctclYY_WORK.form.TextBox.set_value(this.gfnGetDate().substring(0,4));
        	this.ccfCD_DEPT_ORG.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_DEPT_ORG.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	//그리드 CELL 이동시
        	/*this.dxGrid.addEventHandler("oncellposchanged", this.dxGrid_oncellposchanged, this);*/

        	// 셀 변경 후 이벤트
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	// 셀 변경 전 이벤트
        	/*this.dxGrid.StartEdit = "fnGrid_StartEdit";*/


        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_YYYY", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("DT_YYYY", "string");
        	this.dsUpdate.addColumn("CD_ORDER", "string");
        	this.dsUpdate.addColumn("CD_ACCOUNT", "string");
        	this.dsUpdate.addColumn("AM_PROOF", "string");
        	this.dsUpdate.addColumn("AM_CARD", "string");
        	this.dsUpdate.addColumn("AM_CASH", "string");
        	this.dsUpdate.addColumn("AM_TAXBILL", "string");
        	this.dsUpdate.addColumn("AM_BILL", "string");
        	this.dsUpdate.addColumn("AM_EXCEPT", "string");
        	this.dsUpdate.addColumn("AM_BAL", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "int");


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

        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_DEPT_ORG.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "DT_YYYY", this.ctclYY_WORK.value);

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
        	/*var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current*/
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	/*this.gfnGridDel(this.dxGrid);*/
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

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.ccfCD_DEPT_ORG.form.CDTextBox.value);
        				this.dsUpdate.setColumn(nrow, "CD_CODE", this.dsList.getColumn(i, "CD_CODE"));
        				this.dsUpdate.setColumn(nrow, "YM_SALARY", this.ctclYM_WORK.value);
        				this.dsUpdate.setColumn(nrow, "DT_SALARY", this.dsList.getColumn(i, "DT_SALARY"));
        				this.dsUpdate.setColumn(nrow, "DT_TAX", this.dsList.getColumn(i, "DT_TAX"));
        				this.dsUpdate.setColumn(nrow, "CNT_TARGET", this.dsList.getColumn(i, "CNT_TARGET"));
        				this.dsUpdate.setColumn(nrow, "AM_TOTSALARY", this.dsList.getColumn(i, "AM_TOTSALARY"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
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
        	if (this.gfnIsNull(this.ccfCD_DEPT_ORG.form.CDTextBox.value)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT_ORG.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 입력하세요.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.ctclYY_WORK.form.TextBox.value)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYY_WORK.setFocus();
        		}
        		this.gfnAlert("회계년월 을(를) 입력하세요.", "fnVaidateCallback");
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
        	if (id == "ccfCD_DEPT_ORG") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        // 	if(!this.gfnIsNull(this.ccfSite.form.CDTextBox.value)) {
        // 		this.objApp.DW_SPACE01 = this.ccfSite.form.CDTextBox.value;
        // 		this.objApp.DW_SPACE02 = this.ccfSite.form.DSTextBox.value;
        // 	}
        	this.fnSearchInit();

        }


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
        // 	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        // // 	if(colnm == "KEYIN") {
        // // 		return false;
        // // 	}
        // 	return true;
        }

        this.fnGrid_AfterEdit = function(obj,e) {


        }

        this.dxGrid_oncellposchanged = function(obj,e)
        {
        // 	if(e.oldcol != e.col ){
        // 		var strMM = "";
        // 		if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, e.col ).indexOf("SUM") > -1 ){
        // 			if(this.dxGrid.getCellProperty( "head", e.col, "text" ) != "합계") {
        // 				strMM =this.dxGrid.getCellProperty( "head", e.col, "text" ).replace("월","");
        // 			}
        // 			this.fnSelectSub(strMM);
        // 		} else {
        // 			this.gfnGridClear(this.dxGridSub);
        // 		}
        // 	}
        };

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	return true;
        };

        //그리드 버튼 클릭 이벤트
        this.divData_objGrid_onclick = function(obj,e)
        {

        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staCD_SYSTEM.addEventHandler("onclick",this.divSearch_staCD_SYSTEM_onclick,this);
            this.divData.form.objGrid.addEventHandler("onclick",this.divData_objGrid_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHAT_EXPENSE_RECEIPT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
