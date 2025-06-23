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
            this.set_titletext("리스자산(신규/변경)현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1350,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_LSEASSTTRGT_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("0");
            obj.set_text("법인코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("FitToContents").set("true");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_ACNT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("2");
            obj.set_text("기준년월");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACNT","staYM_ACNT:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
            obj.getSetter("autoselect").set("true");
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
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_ACNT.form.TextBox","value","dsSearch","YM_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DHN_LSEASSTTRGT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj, e) {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

         	this.fnSetButton();
         	this.fnSetExtendButton();
         	this.fnSetVariable();
         	this.fnSetParameter();
         	this.fnSetCombo();
        	this.fnSetEvent();
        	this.fnFormLoad();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
        * 확장버튼 그리드컬럼 설정관련
        ************************************************************************/
        this.fnBtnCheckAll = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
            this.dxGrid = this.divData.form.objGrid;

        	this.ccfCD_CORP  = this.divSearch.form.ccfCD_CORP;	// 법인코드
        	this.ctclYM_ACNT = this.divSearch.form.ctclYM_ACNT;	// 기준년월
        };

        /************************************************************************
         * 콤보 설정
         ************************************************************************/
        this.fnSetCombo = function() {
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
            // 검색
         	this.dsSearch.addEventHandler("onvaluechanged" , this.fnSearch_onvaluechanged, this);
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 법인코드
        	this.ccfCD_CORP.AfterCDTextChanged     = "fnAfterCDTextChanged";

            // 그리드
            this.dxGrid.AfterInit              = "fnGrid_AfterInit";
            this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHN_LSEASSTTRGT");
            this.dxGrid.EnterCell              = "fnGrid_EnterCell";
            this.dxGrid.AfterEdit              = "fnGrid_AfterEdit";
            this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
            this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
            // 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_ACNT", "string");
        };

        /************************************************************************
         * 폼로드 설정
         ************************************************************************/
        this.fnFormLoad = function() {
        	if (!this.gfnIsNull(this.getOwnerFrame().CD_CORP) &&
        		!this.gfnIsNull(this.getOwnerFrame().YM_ACNT)) {
        		this.dsSearch.setColumn(0, "CD_CORP" , this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);
        		this.dsSearch.setColumn(0, "YM_ACNT", this.getOwnerFrame().YM_ACNT);
        		this.FormBtns.Select.click();
        	} else {
        		this.dsSearch.setColumn(0, "CD_CORP" , this.AuthClient.CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        		this.dsSearch.setColumn(0, "YM_ACNT", this.gfnGetDate().substring(0, 6));
        	}
        	this.ccfCD_CORP.setFocus();
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YM_ACNT", this.dsSearch.getColumn(0, "YM_ACNT"));
        	this.fnInitEmptyColumn(this.dsSelect);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc, true);
        };

        this.fnExcel = function() {
            this.gfnExcelExport(this.dxGrid);
        };

        this.fnPrint = function() {
        };

        /************************************************************************
         * 데이터 검증
         ************************************************************************/
        /*
         *	조회 Validate : gfnSearchValidate 로 처리하고 특이 케이스의 경우 별도 처리
         */
        this.fnSearchValidate = function() {
            return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

            if (svcID == "select") {
                this.gfnGridAfterSelect(this.dxGrid);
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        // 검색 영역(divSearch)에 속한 코드파인드 파라미터 설정
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch (id) {
        	// 법인코드
        	case "ccfCD_CORP":
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		break;
            }

        	return true;
        };

        // 검색 영역(divSearch)에 속한 코드파인드의 text 속성이 변경될 때 처리해야할 업무를 정의
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	switch (id) {
        	default:
        		break;
            }
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        // 그리드가 초기화된 이후 실행되어야할 업무를 정의
        this.fnGrid_AfterInit = function(obj) {
        };

        // 그리드의 특정 로우/셀에 진입하였을 때 실행되어야할 업무를 정의
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	return;
        };

        // 그리드의 특정 셀의 값이 변경된 후 실행되어야할 업무 정의
        this.fnGrid_AfterEdit = function(obj, e) {
        	if (e.oldvalue != e.newvalue) {
        		switch (e.columnid) {
        		default:
        			break;
        		}
        	}
        };

        // 그리드에 위치한 코드파인드의 파라미터 설정
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch (id) {
        	default:
        		break;
        	}

        	return true;
        };

        // 그리드에 위치한 코드파인드의 text 속성이 변경될 때 처리해야할 업무를 정의
        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	switch (id) {
        	default:
        		break;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearch_onvaluechanged = function(obj, e) {
            if (e.oldvalue != e.newvalue) {
                this.gfnSetFormStatus(this);	// 폼상태 초기화
                this.gfnGridClear(this.dxGrid);
            }
        };

        /************************************************************************
         * 사용자 정의 함수
         ************************************************************************/
        // Dataset의 값이 초기화되지 않은 컬럼의 값을 초기값으로 설정
        this.fnInitEmptyColumn = function(dataset) {
        	for (var i = 0; i < dataset.rowcount; i++) {
        		for (var j = 0; j < dataset.getColCount(); j++) {
        			var col = dataset.getColumnInfo(j);
        			if (dataset.getColumn(i, col.name) == null) {
        				if (col.type == "string") {
        					dataset.setColumn(i, col.name, "");
        				} else if (col.type == "bigdecimal") {
        					dataset.setColumn(i, col.name, 0);
        				} else if (col.type == "int") {
        					dataset.setColumn(i, col.name, 0);
        				}
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncellposchanged",this.divData_objGrid_oncellposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHN_LSEASSTTRGT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
