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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFAPR_SUJICODE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFAPR_SUJICODE_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFAPR_SUJICODE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SUJIFIRST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SUJISECOND\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SUJITHIRD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SUJIFOURTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SUJIFIRST","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("대분류코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SUJIFIRST","staCD_SUJIFIRST:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SUJISECOND","ccfCD_SUJIFIRST:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("중분류코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SUJISECOND","staCD_SUJISECOND:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SUJITHIRD","ccfCD_SUJISECOND:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("소분류코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SUJITHIRD","staCD_SUJITHIRD:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SUJIFOURTH","ccfCD_SUJITHIRD:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SUJIFOURTH","staCD_SUJIFOURTH:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFA_SUJICODE_OLD.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	//this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
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
        	this.btnFormButton = this.gfnFormButtonAdd("SujiFirst", "fnSujiFirst", "대분류코드");
        	this.btnFormButton = this.gfnFormButtonAdd("SujiSecond", "fnSujiSecond", "중분류코드");
        	this.btnFormButton = this.gfnFormButtonAdd("SujuThird", "fnSujuThird", "소분류코드");
        	this.btnFormButton = this.gfnFormButtonAdd("SujiFourth", "fnSujiFourth", "품목코드");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
            this.ccfCD_SUJIFIRST = this.divSearch.form.ccfCD_SUJIFIRST;
        	this.ccfCD_SUJISECOND = this.divSearch.form.ccfCD_SUJISECOND;
        	this.ccfCD_SUJITHIRD = this.divSearch.form.ccfCD_SUJITHIRD;
        	this.ccfCD_SUJIFOURTH = this.divSearch.form.ccfCD_SUJIFOURTH;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SUJIFIRST.CodeFindName = "DFX_SUJIFIRST";
        	this.ccfCD_SUJISECOND.CodeFindName = "DFX_SUJISECOND";
        	this.ccfCD_SUJITHIRD.CodeFindName = "DFX_SUJITHIRD";
        	this.ccfCD_SUJIFOURTH.CodeFindName = "DFX_SUJIFOURTH";

        	this.ccfCD_SUJIFIRST.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_SUJISECOND.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_SUJITHIRD.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_SUJISECOND.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SUJITHIRD.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SUJIFOURTH.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFA_SUJICODE");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SUJIFIRST", "string");
        	this.dsSelect.addColumn("CD_SUJISECOND", "string");
        	this.dsSelect.addColumn("CD_SUJITHIRD", "string");
        	this.dsSelect.addColumn("CD_SUJIFOURTH", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SUJIFIRST", "string");
        	this.dsInsert.addColumn("CD_SUJISECOND", "string");
        	this.dsInsert.addColumn("CD_SUJITHIRD", "string");
        	this.dsInsert.addColumn("CD_SUJIFOURTH", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SUJIFIRST", "string");
        	this.dsDelete.addColumn("CD_SUJISECOND", "string");
        	this.dsDelete.addColumn("CD_SUJITHIRD", "string");
        	this.dsDelete.addColumn("CD_SUJIFOURTH", "string");
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

        	this.dsSelect.setColumn('', "CD_SUJIFIRST", this.ccfCD_SUJIFIRST.form.CDTextBox.value);
        	this.dsSelect.setColumn('', "CD_SUJISECOND", this.ccfCD_SUJISECOND.form.CDTextBox.value);
        	this.dsSelect.setColumn('', "CD_SUJITHIRD", this.ccfCD_SUJITHIRD.form.CDTextBox.value);
        	this.dsSelect.setColumn('', "CD_SUJIFOURTH", this.ccfCD_SUJIFOURTH.form.CDTextBox.value);
        	//this.dsSelect.setColumn(0, "CD_SYSTEM", this.dsSearch.getColumn(0, "CD_SYSTEM"));

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

        	this.dsInsert.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_SUJIFIRST", this.dsList.getColumn(i, "CD_SUJIFIRST"));
        				this.dsInsert.setColumn(nrow, "CD_SUJISECOND", this.dsList.getColumn(i, "CD_SUJISECOND"));
        				this.dsInsert.setColumn(nrow, "CD_SUJITHIRD", this.dsList.getColumn(i, "CD_SUJITHIRD"));
        				this.dsInsert.setColumn(nrow, "CD_SUJIFOURTH", this.dsList.getColumn(i, "CD_SUJIFOURTH"));
        // 				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        // 				this.dsInsert.setColumn(nrow, "NO_CORP", this.dsList.getColumn(i, "NO_CORP").replace(/-/g, ''));
        // 				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SUJIFIRST", this.dsList.getColumn(i, "CD_SUJIFIRST"));
        				this.dsDelete.setColumn(nrow, "CD_SUJISECOND", this.dsList.getColumn(i, "CD_SUJISECOND"));
        				this.dsDelete.setColumn(nrow, "CD_SUJITHIRD", this.dsList.getColumn(i, "CD_SUJITHIRD"));
        				this.dsDelete.setColumn(nrow, "CD_SUJIFOURTH", this.dsList.getColumn(i, "CD_SUJIFOURTH"));
        //				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	// save SP 한개로 사용하는 경우
        	/*
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_FLAG", flag);
        				this.dsSave.setColumn(nrow, "NO_IDX", this.dsList.getColumn(i, "NO_IDX"));
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;
        	*/

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert delete=dsDelete";
        	//var inData      = "save=dsSave";
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
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
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
        	if (id == "ccfCD_SUJISECOND") {
        		if (!this.gfnIsNull(this.ccfCD_SUJIFIRST.form.CDTextBox.value)) {
        			dsUserParam.setColumn(nrow, "CD_SUJIFIRST", this.ccfCD_SUJIFIRST.form.CDTextBox.value);
        		}else{
        			this.gfnAlert("대분류코드는 필수입력 값입니다.");
        			return false;
        		}
        	}

        	if (id == "ccfCD_SUJITHIRD") {
        		if (!this.gfnIsNull(this.ccfCD_SUJISECOND.form.CDTextBox.value)) {
        			dsUserParam.setColumn(nrow, "CD_SUJIFIRST", this.ccfCD_SUJIFIRST.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "CD_SUJISECOND", this.ccfCD_SUJISECOND.form.CDTextBox.value);
        		}else{
        			this.gfnAlert("중분류코드는 필수입력 값입니다.");
        			return false;
        		}
        	}

        	if (id == "ccfCD_SUJIFOURTH") {
        		if (!this.gfnIsNull(this.ccfCD_SUJITHIRD.form.CDTextBox.value)) {
        			dsUserParam.setColumn(nrow, "CD_SUJIFIRST", this.ccfCD_SUJIFIRST.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "CD_SUJISECOND", this.ccfCD_SUJISECOND.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "CD_SUJITHIRD", this.ccfCD_SUJITHIRD.form.CDTextBox.value);
        		}else{
        			this.gfnAlert("소분류코드는 필수입력 값입니다.");
        			return false;
        		}
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SUJIFIRST") {
        		this.ccfCD_SUJISECOND.form.fnCodeFindClear();
        		this.ccfCD_SUJITHIRD.form.fnCodeFindClear();
        		this.ccfCD_SUJIFOURTH.form.fnCodeFindClear();
        	}

        	if(id == "ccfCD_SUJISECOND") {
        		this.ccfCD_SUJITHIRD.form.fnCodeFindClear();
        		this.ccfCD_SUJIFOURTH.form.fnCodeFindClear();
        	}

        	if(id == "ccfCD_SUJITHIRD") {
        		this.ccfCD_SUJIFOURTH.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnSujiFirst = function(obj,e) {
        	var param = {};
        	this.gfnFormOpen("DZB", "DFA_SUJIFIRST", "", param);

        }

        this.fnSujiSecond = function(obj,e) {
        	var param = {};
        	this.gfnFormOpen("DZB", "DFA_SUJISECOND", "", param);

        }

        this.fnSujuThird = function(obj,e) {
        	var param = {};
        	this.gfnFormOpen("DZB", "DFA_SUJITHIRD", "", param);

        }

        this.fnSujiFourth = function(obj,e) {
        	var param = {};
        	this.gfnFormOpen("DZB", "DFA_SUJIFOURTH", "", param);

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
        this.loadIncludeScript("DFA_SUJICODE_OLD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
