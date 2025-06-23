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
            this.set_titletext("공동도급관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOZPR_CONST_CO_CONTRCT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOZPR_CONST_CO_CONTRCT_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONTRCT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POLY_CONST_CONTRCT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_FIELD","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_FIELD","staCD_FIELD:0.0","10.0","139","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_POLY_CONST_CONTRCT","ccfCD_FIELD:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_DEPT","ctxtNO_POLY_CONST_CONTRCT:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_FIELD.form.CDTextBox","value","dsSearch","CD_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_FIELD.DSTextBox","value","dsSearch","NO_CONTRCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtNO_POLY_CONST_CONTRCT","value","dsSearch","NO_POLY_CONST_CONTRCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtDS_DEPT","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWU_CLBCOMNG.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE))
        	{
        		this.dsSearch.setColumn(0, "CD_FIELD", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "NO_CONTRCT", this.getOwnerFrame().NO_CONTRCT);
        		this.divSearch.form.ccfCD_FIELD.form.DSTextBox.set_value(this.getOwnerFrame().NO_CONTRCT);
        		this.dsSearch.setColumn(0, "NO_POLY_CONST_CONTRCT", this.getOwnerFrame().NO_POLY_CONST_CONTRCT);
        		this.dsSearch.setColumn(0, "DS_DEPT", this.getOwnerFrame().DS_SITE);

        		this.FormBtns.Select.click();
        	}

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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_FIELD = this.divSearch.form.ccfCD_FIELD;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_FIELD.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_FIELD.AfterCDTextChanged = "ccfCD_FIELDAfterCDTextChanged";

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWU_CLBCOMNG");
        	// row 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_FIELD", "string");
        	this.dsSelect.addColumn("NO_CONTRCT", "string");
        	this.dsSelect.addColumn("NO_POLY_CONST_CONTRCT", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_FIELD", "string");
        	this.dsSave.addColumn("NO_CONTRCT", "string");
        	this.dsSave.addColumn("NO_POLY_CONST_CONTRCT", "string");
        	this.dsSave.addColumn("CD_CO_CONTRCT", "string");
        	this.dsSave.addColumn("YN_JUGAN", "string");
        	this.dsSave.addColumn("TY_DOKUB", "string");
        	this.dsSave.addColumn("RT_PORTION", "bigdecimal");
        	this.dsSave.addColumn("AM_CONTRCT", "bigdecimal");
        	this.dsSave.addColumn("AM_SUPPLY", "bigdecimal");
        	this.dsSave.addColumn("AM_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_TXFR_SUPPLY", "bigdecimal");
        	this.dsSave.addColumn("RT_PROFIT", "bigdecimal");
        	this.dsSave.addColumn("YN_JOINT", "string");
        	this.dsSave.addColumn("DS_RM", "string");

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

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));
        	this.dsSelect.setColumn(0, "NO_CONTRCT", this.dsSearch.getColumn(0, "NO_CONTRCT"));
        	this.dsSelect.setColumn(0, "NO_POLY_CONST_CONTRCT", this.dsSearch.getColumn(0, "NO_POLY_CONST_CONTRCT"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current
        	this.dsList.setColumn(nrow, "YN_EDIT", "Y");
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
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));
        				this.dsSave.setColumn(nrow, "NO_CONTRCT", this.dsSearch.getColumn(0, "NO_CONTRCT"));
        				this.dsSave.setColumn(nrow, "NO_POLY_CONST_CONTRCT", this.dsSearch.getColumn(0, "NO_POLY_CONST_CONTRCT"));
        				this.dsSave.setColumn(nrow, "CD_CO_CONTRCT", this.dsList.getColumn(i, "CD_CO_CONTRCT"));
        				this.dsSave.setColumn(nrow, "YN_JUGAN", this.dsList.getColumn(i, "YN_JUGAN"));
        				this.dsSave.setColumn(nrow, "TY_DOKUB", this.dsList.getColumn(i, "TY_DOKUB"));
        				this.dsSave.setColumn(nrow, "RT_PORTION", this.dsList.getColumn(i, "RT_PORTION"));
        				this.dsSave.setColumn(nrow, "AM_CONTRCT", this.dsList.getColumn(i, "AM_CONTRCT"));
        				this.dsSave.setColumn(nrow, "AM_SUPPLY", this.dsList.getColumn(i, "AM_SUPPLY"));
        				this.dsSave.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				this.dsSave.setColumn(nrow, "AM_TXFR_SUPPLY", this.dsList.getColumn(i, "AM_TXFR_SUPPLY"));
        				this.dsSave.setColumn(nrow, "RT_PROFIT", this.dsList.getColumn(i, "RT_PROFIT"));
        				this.dsSave.setColumn(nrow, "YN_JOINT", this.dsList.getColumn(i, "YN_JOINT"));
        				this.dsSave.setColumn(nrow, "DS_RM", this.dsList.getColumn(i, "DS_RM"));
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
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_FIELD"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_FIELD.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
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

        	if (id == "ccfCD_FIELD") {
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}
        	return true;
        }

        this.ccfCD_FIELDAfterCDTextChanged = function(id, codeFindData)
        {
        	var arr = codeFindData;

        	this.dsSearch.setColumn(0, "NO_CONTRCT", "");
        	this.dsSearch.setColumn(0, "NO_POLY_CONST_CONTRCT", "");
        	this.dsSearch.setColumn(0, "DS_DEPT", "");

        	if(arr.length > 0)
        	{
        		this.dsSearch.setColumn(0, "NO_CONTRCT", arr[0]["NO_CONTRCT"]);
        		this.dsSearch.setColumn(0, "NO_POLY_CONST_CONTRCT", arr[0]["NO_POLY_CONST_CONTRCT"]);
        		this.dsSearch.setColumn(0, "DS_DEPT", arr[0]["DS_DEPT"]);
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "DOX_CFARDMD_FIRM")
        	{
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}
        	return true;
         }

         this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT 값이 Y일때만 수정가능상태
        	if(this.dsList.getColumn(row, "YN_EDIT") == "N") {
        		return false;
        	}

        }

          this.fnGrid_AfterEdit = function(obj, e)
         {
        	// 자동산식 너무 길다...
        	// nexacro.toNumber(value, 0) -> null로 넘어오면 0으로 변환해주는 함수.
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "AM_SUPPLY")
        		{
        			var AM_SUPPLY = nexacro.toNumber(e.newvalue, 0);
        			var AM_VAT = AM_SUPPLY * 0.1;
        			var AM_TXFR_SUPPLY = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_TXFR_SUPPLY"), 0);

        			this.dsList.setColumn(this.dsList.rowposition, "AM_VAT", AM_VAT);
        			this.dsList.setColumn(this.dsList.rowposition, "AM_CONTRCT", AM_SUPPLY + AM_VAT + AM_TXFR_SUPPLY);
        		}
        		else if(e.columnid == "AM_VAT")
        		{
        			var AM_SUPPLY = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_SUPPLY"), 0);
        			var AM_VAT = nexacro.toNumber(e.newvalue, 0);
        			var AM_TXFR_SUPPLY = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_TXFR_SUPPLY"), 0);

        			this.dsList.setColumn(this.dsList.rowposition, "AM_CONTRCT", AM_SUPPLY + AM_VAT + AM_TXFR_SUPPLY);
        		}
        		else if(e.columnid == "AM_TXFR_SUPPLY")
        		{
        			var AM_SUPPLY = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_SUPPLY"), 0);
        			var AM_VAT = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_VAT"), 0);
        			var AM_TXFR_SUPPLY = nexacro.toNumber(e.newvalue, 0);

        			this.dsList.setColumn(this.dsList.rowposition, "AM_CONTRCT", AM_SUPPLY + AM_VAT + AM_TXFR_SUPPLY);
        		}
        	}
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
        this.loadIncludeScript("DWU_CLBCOMNG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
