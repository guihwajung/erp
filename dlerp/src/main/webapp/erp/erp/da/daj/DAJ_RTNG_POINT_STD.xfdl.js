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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_RTNG_POINT_STD_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAJPR_RTNG_POINT_STD_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_STD","ccfCD_CORP:0.0","10.0","79","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("기준일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_STD:10","10","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TERM","ctclDT_FROM:10","10","10","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("~");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_TERM:10","10","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
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

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAJ_RTNG_POINT_STD.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e) {
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
        	this.fnInit();
        }

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        }

        this.fnUpdateStatusExtendButton = function() {
        	var nrow = this.dsList.rowposition;
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid.AfterEdit = "fnGridAfterEdit";
        	this.dxGrid.EnterCell = "fnGridEnterCell";

        	// 검색영역
        	this.ccfCD_CORP		= this.divSearch.form.ccfCD_CORP;	// 법인
        	this.ctclDT_FROM 	= this.divSearch.form.ctclDT_FROM;	// 시작일(FROM)
        	this.ctclDT_TO   	= this.divSearch.form.ctclDT_TO;	// 종료일(TO)
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드영역
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_RTNG_POINT_STD");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGridAfterCDTextChanged";

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam      = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged          = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 출장계획서 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");

        	// 출장계획서 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("NO_ID", "bigdecimal");
        	this.dsSave.addColumn("CD_PAYSTEP", "string");
        	this.dsSave.addColumn("DT_FROM", "string");
        	this.dsSave.addColumn("DT_TO", "string");
        	this.dsSave.addColumn("DS_GRADE", "string");
        	this.dsSave.addColumn("QN_POINT", "bigdecimal");
        	this.dsSave.addColumn("DS_REM", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	this.dsSearch.setColumn(0, "CD_CORP",      this.AuthClient.CD_CORP);	// 법인
        	this.dsSearch.setColumn(0, "DS_CORP",      this.AuthClient.DS_CORP);

        	// 조회기간
        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_FROM", "20220101");
        	this.dsSearch.setColumn(0, "DT_TO", today);
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValidate()) return;
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP",	this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_FROM", 	this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO",   	this.dsSearch.getColumn(0, "DT_TO"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.fnValidCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnValidCallback");
        		return false;
        	}

        	var TODAY = this.gfnGetDate().substr(0, 8);
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow, "CD_CORP",      this.AuthClient.CD_CORP);	// 법인
        	this.dsList.setColumn(nrow, "DS_CORP",      this.AuthClient.DS_CORP);
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
        	if (!this.fnSaveValidation()) return;

        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        		case "I":
        		case "U":
        		case "D":
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "TY_WRK"          , flag);
        			this.dsSave.setColumn(nrow, "CD_CORP"         , this.dsList.getColumn(i, "CD_CORP"));
        			this.dsSave.setColumn(nrow, "NO_ID"			, this.dsList.getColumn(i, "NO_ID"));
        			this.dsSave.setColumn(nrow, "CD_PAYSTEP"	, this.dsList.getColumn(i, "CD_PAYSTEP"));
        			this.dsSave.setColumn(nrow, "DT_FROM"		, this.fnReplace(this.dsList.getColumn(i, "DT_FROM"), "-", ""));
        			this.dsSave.setColumn(nrow, "DT_TO"			, this.fnReplace(this.dsList.getColumn(i, "DT_TO"), "-", ""));
        			this.dsSave.setColumn(nrow, "DS_GRADE"		, this.dsList.getColumn(i, "DS_GRADE"));
        			this.dsSave.setColumn(nrow, "QN_POINT"		, this.dsList.getColumn(i, "QN_POINT"));
        			this.dsSave.setColumn(nrow, "DS_REM"		, this.dsList.getColumn(i, "DS_REM"));
        			this.dsSave.setColumn(nrow, "ID_USER"		, this.AuthClient.ID_USER);
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

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
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
        	return true;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclDT_FROM.setFocus();
        		}
        		this.gfnAlert("기준일을 입력하세요.", "fnVaidateCallback");
        	}

        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclDT_TO.setFocus();
        		}
        		this.gfnAlert("기준일을 입력하세요.", "fnVaidateCallback");
        	}

        	if (validate && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))) {
        		if (this.dsSearch.getColumn(0, "DT_FROM") >  this.dsSearch.getColumn(0, "DT_TO") ) {
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.ctclDT_FROM.setFocus();
        			}
        			this.gfnAlert("기준 종료일을 시작일보다 뒤의 날짜로 입력하세요.", "fnVaidateCallback");
        		}
        	}
        	return validate;
        }

        this.fnSaveValidation = function() {
        	var objDs = this.dsList;
        	var objGrid = this.dxGrid;

        	var msg = "";
        	for (var i = 0; i < objDs.rowcount; i++) {
        		var flag = this.gfnGetFlag(objDs, i);
        		switch(flag) {
        			case "I":
        			case "U":
        				var arrRequired = objGrid.usRequired;
        				for(var j = 0; j < arrRequired.length; j++) {
        					var spl_req = arrRequired[j].split(';');
        					var colnm = spl_req[0];
        					var header = spl_req[1];
        					if (this.gfnIsNull(objDs.getColumn(i, colnm))) {
        						msg += (i + 1) + "열: [" + header + "] 필수입력값입니다.\n";
        					}
        				}
        				break;
        		}

        		var DT_FROM = this.dsList.getColumn(i, "DT_FROM");		// 시작일
        		var DT_TO = this.dsList.getColumn(i, "DT_TO");			// 종료일
        		if (DT_FROM > DT_TO){
        			msg += (i + 1) + "열 [종료일]은 [시작일] 이후로 입력하셔야합니다. \n";
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

        	return true;
        }
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {
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
        		// 법인코드
        		dsUserParam.setColumn(nrow, "CD_CORP",   this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER",   this.AuthClient.ID_USER);
        	}

         	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch (id) {

        	// 급호/직급
        	case "DAX_CFCOMMONCODE_EP":
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "EP");
        		break;
         	}

        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {
        }

        this.fnGridAfterEdit = function(obj, e) {
        // 	if (e.columnid == "DT_FROM" || e.columnid == "DT_TO") {
        // 		if (this.dsList.getColumn(this.dsList.rowposition, "DT_FROM") > this.dsList.getColumn(this.dsList.rowposition, "DT_TO")) {
        // 			this.dsList.setColumn(this.dsList.rowposition, e.columnid, e.oldvalue);
        // 			this.gfnAlert("종료일을 시작일보다 뒤의 날짜로 입력하세요.");
        // 		}
        // 	}
        }

        this.fnGridEnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명
        	var objDs = obj.getBindDataset();

        	if (colnm == "DT_FROM" || colnm == "DT_TO") {
        		var DT_START = objDs.getColumn(row, "DT_FROM");
        		var DT_END = objDs.getColumn(row, "DT_TO");
        		if (DT_START > DT_END) {
        			this.gfnAlert('종료일은 시작일과 같거나\n시작일보다 늦어야 합니다.');
        			//objDs.setColumn(row, "DT_TO", "");
        		}
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue){
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        this.fnReplace = function(orgText, fromSplit, toSplit){
        	if(this.gfnIsNull(orgText)) return "";

        	var newSplit = "";
        	if(!this.gfnIsNull(toSplit)) newSplit = toSplit;

        	var arrResult = orgText.split(fromSplit);
        	var sResult = arrResult.join(newSplit);
        	return sResult;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_RTNG_POINT_STD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
