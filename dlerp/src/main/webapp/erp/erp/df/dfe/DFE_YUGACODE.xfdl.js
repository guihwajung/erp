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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFEPR_YUGAKIND_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFEPR_YUGAKIND_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFEPR_YUGAKIND_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFEPR_YUGAKIND_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_YUGA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_YUGA","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("유가증권코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_YUGA","staCD_YUGA:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
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
        this.registerScript("DFE_YUGACODE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	//this.fnSetButton();
        	//this.fnSetExtendButton();
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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_YUGA = this.divSearch.form.ccfCD_YUGA;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_YUGA.CodeFindName = "DFX_CFYUGAKIND";

        	this.ccfCD_YUGA.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_YUGA.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFE_YUGACODE");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_YUGA", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_YUGA", "string");
        	this.dsInsert.addColumn("DS_YUGA", "string");
        	this.dsInsert.addColumn("NO_LEVEL", "bigdecimal");
        	this.dsInsert.addColumn("CD_YUGAUP", "string");
        	this.dsInsert.addColumn("YN_USE", "string");
        	this.dsInsert.addColumn("YN_FOREIGN", "string");
        	this.dsInsert.addColumn("CD_DAN", "string");
        	this.dsInsert.addColumn("CD_JANG", "string");
        	this.dsInsert.addColumn("CD_YUDONG", "string");
        	this.dsInsert.addColumn("CD_SEZA", "string");
        	this.dsInsert.addColumn("CD_BEZA", "string");
        	this.dsInsert.addColumn("CD_SLOSS", "string");
        	this.dsInsert.addColumn("CD_SGAIN", "string");
        	this.dsInsert.addColumn("CD_PLOSS", "string");
        	this.dsInsert.addColumn("CD_PGAIN", "string");
        	this.dsInsert.addColumn("CD_MISU", "string");
        	this.dsInsert.addColumn("CD_SUNSU", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_BEZA", "string");
        	this.dsUpdate.addColumn("CD_SLOSS", "string");
        	this.dsUpdate.addColumn("CD_SGAIN", "string");
        	this.dsUpdate.addColumn("CD_PLOSS", "string");
        	this.dsUpdate.addColumn("CD_PGAIN", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("CD_YUGA", "string");
        	this.dsUpdate.addColumn("DS_YUGA", "string");
        	this.dsUpdate.addColumn("NO_LEVEL", "bigdecimal");
        	this.dsUpdate.addColumn("CD_YUGAUP", "string");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("YN_FOREIGN", "string");
        	this.dsUpdate.addColumn("CD_DAN", "string");
        	this.dsUpdate.addColumn("CD_JANG", "string");
        	this.dsUpdate.addColumn("CD_YUDONG", "string");
        	this.dsUpdate.addColumn("CD_SEZA", "string");
        	this.dsUpdate.addColumn("CD_MISU", "string");
        	this.dsUpdate.addColumn("CD_SUNSU", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_YUGA", "string");
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

        	this.dsSelect.setColumn('', "CD_YUGA", this.ccfCD_YUGA.form.CDTextBox.value);

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
        	this.dsList.setColumn(nrow, "YN_USE", "Y");
        	this.dsList.setColumn(nrow, "YN_FOREIGN", "N");
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
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_YUGA", this.dsList.getColumn(i, "CD_YUGA"));
        				this.dsInsert.setColumn(nrow, "DS_YUGA", this.dsList.getColumn(i, "DS_YUGA"));
        				this.dsInsert.setColumn(nrow, "NO_LEVEL", this.dsList.getColumn(i, "NO_LEVEL"));
        				this.dsInsert.setColumn(nrow, "CD_YUGAUP", this.dsList.getColumn(i, "CD_YUGAUP"));
        				this.dsInsert.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsInsert.setColumn(nrow, "YN_FOREIGN", this.dsList.getColumn(i, "YN_FOREIGN"));
        				this.dsInsert.setColumn(nrow, "CD_DAN", this.dsList.getColumn(i, "CD_DAN"));
        				this.dsInsert.setColumn(nrow, "CD_JANG", this.dsList.getColumn(i, "CD_JANG"));
        				this.dsInsert.setColumn(nrow, "CD_YUDONG", this.dsList.getColumn(i, "CD_YUDONG"));
        				this.dsInsert.setColumn(nrow, "CD_SEZA", this.dsList.getColumn(i, "CD_SEZA"));
        				this.dsInsert.setColumn(nrow, "CD_BEZA", this.dsList.getColumn(i, "CD_BEZA"));
        				this.dsInsert.setColumn(nrow, "CD_SLOSS", this.dsList.getColumn(i, "CD_SLOSS"));
        				this.dsInsert.setColumn(nrow, "CD_SGAIN", this.dsList.getColumn(i, "CD_SGAIN"));
        				this.dsInsert.setColumn(nrow, "CD_PLOSS", this.dsList.getColumn(i, "CD_PLOSS"));
        				this.dsInsert.setColumn(nrow, "CD_PGAIN", this.dsList.getColumn(i, "CD_PGAIN"));
        				this.dsInsert.setColumn(nrow, "CD_MISU", this.dsList.getColumn(i, "CD_MISU"));
        				this.dsInsert.setColumn(nrow, "CD_SUNSU", this.dsList.getColumn(i, "CD_SUNSU"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_BEZA", this.dsList.getColumn(i, "CD_BEZA"));
        				this.dsUpdate.setColumn(nrow, "CD_SLOSS", this.dsList.getColumn(i, "CD_SLOSS"));
        				this.dsUpdate.setColumn(nrow, "CD_SGAIN", this.dsList.getColumn(i, "CD_SGAIN"));
        				this.dsUpdate.setColumn(nrow, "CD_PLOSS", this.dsList.getColumn(i, "CD_PLOSS"));
        				this.dsUpdate.setColumn(nrow, "CD_PGAIN", this.dsList.getColumn(i, "CD_PGAIN"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.dsList.getColumn(i, "ID_USER"));
        				this.dsUpdate.setColumn(nrow, "CD_YUGA", this.dsList.getColumn(i, "CD_YUGA"));
        				this.dsUpdate.setColumn(nrow, "DS_YUGA", this.dsList.getColumn(i, "DS_YUGA"));
        				this.dsUpdate.setColumn(nrow, "NO_LEVEL", this.dsList.getColumn(i, "NO_LEVEL"));
        				this.dsUpdate.setColumn(nrow, "CD_YUGAUP", this.dsList.getColumn(i, "CD_YUGAUP"));
        				this.dsUpdate.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsUpdate.setColumn(nrow, "YN_FOREIGN", this.dsList.getColumn(i, "YN_FOREIGN"));
        				this.dsUpdate.setColumn(nrow, "CD_DAN", this.dsList.getColumn(i, "CD_DAN"));
        				this.dsUpdate.setColumn(nrow, "CD_JANG", this.dsList.getColumn(i, "CD_JANG"));
        				this.dsUpdate.setColumn(nrow, "CD_YUDONG", this.dsList.getColumn(i, "CD_YUDONG"));
        				this.dsUpdate.setColumn(nrow, "CD_SEZA", this.dsList.getColumn(i, "CD_SEZA"));
        				this.dsUpdate.setColumn(nrow, "CD_MISU", this.dsList.getColumn(i, "CD_MISU"));
        				this.dsUpdate.setColumn(nrow, "CD_SUNSU", this.dsList.getColumn(i, "CD_SUNSU"));
         				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_YUGA", this.dsList.getColumn(i, "CD_YUGA"));
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
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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

        	if (id == "ccfCD_YUGA") {
        		dsUserParam.setColumn(nrow, "YN_USE", '');
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	this.fnSearchInit();

        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	if(id = "DFX_CFYUGAKIND"){
        		dsUserParam.setColumn(nrow, "YN_USE", "N");
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

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
        this.loadIncludeScript("DFE_YUGACODE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
