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
            this.set_titletext("대출일정관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_LOANSCHEDULE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DABPR_LOANSCHEDULE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DABPR_LOANSCHEDULE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DABPR_LOANSCHEDULE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_BASE","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("신청년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfYY_BASE","92","11","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","172","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("2");
            obj.set_text("법인");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","244","10.0","230","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","4",null,null,"0","-4",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ccfYY_BASE.form.TextBox","value","dsSearch","YY_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_LOANSCHEDULE.xfdl", function() {
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

        	var sCurrentDate = this.gfnGetDate();
        	this.ccfYY_BASE.form.TextBox.set_value(sCurrentDate.substr(0,4));
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfYY_BASE = this.divSearch.form.ccfYY_BASE;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_LOANSCHEDULE");
        	this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YY_BASE", "string");
        	this.dsInsert.addColumn("ID_LOANSCH", "string");
        	this.dsInsert.addColumn("DS_LOANSCH", "string");
        	this.dsInsert.addColumn("DT_FROM", "string");
        	this.dsInsert.addColumn("DT_TO", "string");
        	this.dsInsert.addColumn("DT_BASE", "string");
        	this.dsInsert.addColumn("DT_LOAN", "string");
        	this.dsInsert.addColumn("YN_MAGAM", "string");
        	this.dsInsert.addColumn("DS_REM", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YY_BASE", "string");
        	this.dsUpdate.addColumn("ID_LOANSCH", "string");
        	this.dsUpdate.addColumn("DS_LOANSCH", "string");
        	this.dsUpdate.addColumn("DT_FROM", "string");
        	this.dsUpdate.addColumn("DT_TO", "string");
        	this.dsUpdate.addColumn("DT_BASE", "string");
        	this.dsUpdate.addColumn("DT_LOAN", "string");
        	this.dsUpdate.addColumn("YN_MAGAM", "string");
        	this.dsUpdate.addColumn("DS_REM", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YY_BASE", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("ID_LOANSCH", "string");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if(!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "YY_BASE", this.ccfYY_BASE.form.TextBox.value);
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

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
        	var maxID = 0
        	if(this.gfnIsNull(this.dsList.getMax("ID_LOANSCH"))) {
        		maxID = 1;
        	} else { maxID = nexacro.toNumber(this.dsList.getMax("ID_LOANSCH").substr(5,2)) + 1; }

        	// 회차 코드 자동채번
        	var newIdLoanSch =  this.ccfYY_BASE.form.TextBox.value + "-" + ( maxID > 9 ? maxID : "0" + maxID );

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "ID_LOANSCH" , newIdLoanSch);
        	this.dsList.setColumn(nrow, "YY_BASE" , this.ccfYY_BASE.form.TextBox.value);
        	this.dsList.setColumn(nrow, "YN_MAGAM" , "N");

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
        	if (!this.fnGridValidate(this.dxGrid)) return;
        	this.dxGrid.updateToDataset();
        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        		case "I":
        			var nrow = this.dsInsert.addRow();
        			this.dsInsert.setColumn(nrow, "YY_BASE", this.dsList.getColumn(i, "YY_BASE"));
        			this.dsInsert.setColumn(nrow, "ID_LOANSCH", this.dsList.getColumn(i, "ID_LOANSCH"));
        			this.dsInsert.setColumn(nrow, "DS_LOANSCH", this.dsList.getColumn(i, "DS_LOANSCH"));
        			this.dsInsert.setColumn(nrow, "DT_FROM", this.dsList.getColumn(i, "DT_FROM"));
        			this.dsInsert.setColumn(nrow, "DT_TO", this.dsList.getColumn(i, "DT_TO"));
        			this.dsInsert.setColumn(nrow, "DT_BASE", this.dsList.getColumn(i, "DT_BASE"));
        			this.dsInsert.setColumn(nrow, "DT_LOAN", this.dsList.getColumn(i, "DT_LOAN"));
        			this.dsInsert.setColumn(nrow, "YN_MAGAM", this.dsList.getColumn(i, "YN_MAGAM"));
        			this.dsInsert.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        			this.dsInsert.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;
        		case "U":
        			var nrow = this.dsUpdate.addRow();
        			this.dsUpdate.setColumn(nrow, "YY_BASE", this.dsList.getColumn(i, "YY_BASE"));
        			this.dsUpdate.setColumn(nrow, "ID_LOANSCH", this.dsList.getColumn(i, "ID_LOANSCH"));
        			this.dsUpdate.setColumn(nrow, "DS_LOANSCH", this.dsList.getColumn(i, "DS_LOANSCH"));
        			this.dsUpdate.setColumn(nrow, "DT_FROM", this.dsList.getColumn(i, "DT_FROM"));
        			this.dsUpdate.setColumn(nrow, "DT_TO", this.dsList.getColumn(i, "DT_TO"));
        			this.dsUpdate.setColumn(nrow, "DT_BASE", this.dsList.getColumn(i, "DT_BASE"));
        			this.dsUpdate.setColumn(nrow, "DT_LOAN", this.dsList.getColumn(i, "DT_LOAN"));
        			this.dsUpdate.setColumn(nrow, "YN_MAGAM", this.dsList.getColumn(i, "YN_MAGAM"));
        			this.dsUpdate.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        			this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        			this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;
        		case "D":
        			var nrow = this.dsDelete.addRow();
        			this.dsDelete.setColumn(nrow, "YY_BASE", this.dsList.getColumn(i, "YY_BASE"));
        			this.dsDelete.setColumn(nrow, "ID_LOANSCH", this.dsList.getColumn(i, "ID_LOANSCH"));
        			this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        			break;
        		}

        	}

        	if (this.dsDelete.rowcount == 0 && this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0) return;

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
        	return false;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	if (this.gfnIsNull(this.ccfYY_BASE.form.TextBox.value) )
        	{
         		this.gfnAlert("신청년도를 입력 하세요.");
         		this.ccfYY_BASE.setFocus();
         		return false;
        	}

        	return true;
        };


        this.fnGridValidate = function(objGrid) {
        	var objDs = objGrid.getBindDataset();

        	var msg = "";
        	for (var i = 0; i < objDs.rowcount; i++) {
        		var flag = this.gfnGetFlag(objDs, i);
        		if(flag =="U" || flag =="I") {
        			var DT_FROM = objDs.getColumn(i,"DT_FROM")	// 시작일
        			var DT_TO = objDs.getColumn(i,"DT_TO")	// 종료일
        			if (DT_FROM > DT_TO){
        				msg += (i + 1) + "행: [신청종료일]은 [신청시작일] 이후로 입력하셔야 합니다.\n";
        			}
        		}
        	}// for


        	if(this.gfnIsNull(msg)) {
        		return true;
        	}
        	else {
        		var arrError = [msg];
        		this.gfnAlert("msg.err.validator", arrError);
        		return false;
        	}
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


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        //검색조건 변경 이벤트
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
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
        this.loadIncludeScript("DAB_LOANSCHEDULE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
