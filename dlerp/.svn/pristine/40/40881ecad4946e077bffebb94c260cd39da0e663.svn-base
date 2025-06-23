(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWA_SILHENG");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCDPR_EVALUEJUDGER_BON_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCDPR_EVALUEJUDGER_BON_UPDATE</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCDPR_EVALUEJUDGER_BON_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCDPR_EVALUEJUDGER_BON_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_EVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_EVALUE\"/><Col id=\"NO_SEQ\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctcYY_WORK","sta00:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfMagam","ctcYY_WORK:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
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
            obj = new BindItem("item0","divSearch.form.ctcYY_WORK.form.TextBox","value","dsSearch","YR_EVALUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfMagam.form.CDTextBox","value","dsSearch","NO_SEQ");
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
        this.registerScript("DCD_EVALUEJUDGER_BON.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWA_SILHENG_onload = function(obj,e)
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

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
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
        	this.ccfMagam = this.divSearch.form.ccfMagam;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfMagam.CodeFindName = "DCX_CFEVALUE_MAGAM";
        	this.ccfMagam.form.DSTextBox.set_width("0");
        	this.ccfMagam.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCD_EVALUEJUDGER_BON");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_EVALUE", "string");
        	this.dsSelect.addColumn("NO_SEQ", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YR_EVALUE", "string");
        	this.dsInsert.addColumn("NO_SEQ", "string");
        	this.dsInsert.addColumn("CD_EVALUEKIND", "string");
        	this.dsInsert.addColumn("ID_EVALUE", "string");
        	this.dsInsert.addColumn("PN_BELONG", "string");
        	this.dsInsert.addColumn("DS_EVALUE", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("TY_DEPT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YR_EVALUE", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "string");
        	this.dsUpdate.addColumn("CD_EVALUEKIND", "string");
        	this.dsUpdate.addColumn("ID_EVALUE", "string");
        	this.dsUpdate.addColumn("PN_BELONG", "string");
        	this.dsUpdate.addColumn("DS_EVALUE", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("TY_DEPT", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YR_EVALUE", "string");
        	this.dsDelete.addColumn("ID_EVALUE", "string");
        	this.dsDelete.addColumn("NO_SEQ", "string");
        	this.dsDelete.addColumn("CD_EVALUEKIND", "string");

        	var dt = new Date();
        	this.divSearch.form.ctcYY_WORK.form.TextBox.set_value(dt.getFullYear());

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
        	this.dsSelect.setColumn(0, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));

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

        	this.dsList.setColumn(nrow, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        	this.dsList.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
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

        				this.dsInsert.setColumn(nrow, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        				this.dsInsert.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        				this.dsInsert.setColumn(nrow, "CD_EVALUEKIND", this.dsList.getColumn(i, "CD_EVALUEKIND"));
        				this.dsInsert.setColumn(nrow, "ID_EVALUE", this.dsList.getColumn(i, "ID_EVALUE"));
        				this.dsInsert.setColumn(nrow, "PN_BELONG", this.dsList.getColumn(i, "PN_BELONG"));
        				this.dsInsert.setColumn(nrow, "DS_EVALUE", this.dsList.getColumn(i, "DS_EVALUE"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "TY_DEPT", this.dsList.getColumn(i, "TY_DEPT"));

        			break;

        			case "U":

        				var nrow = this.dsUpdate.addRow();

        				this.dsUpdate.setColumn(nrow, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "CD_EVALUEKIND", this.dsList.getColumn(i, "CD_EVALUEKIND"));
        				this.dsUpdate.setColumn(nrow, "ID_EVALUE", this.dsList.getColumn(i, "ID_EVALUE"));
        				this.dsUpdate.setColumn(nrow, "PN_BELONG", this.dsList.getColumn(i, "PN_BELONG"));
        				this.dsUpdate.setColumn(nrow, "DS_EVALUE", this.dsList.getColumn(i, "DS_EVALUE"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "TY_DEPT", this.dsList.getColumn(i, "TY_DEPT"));

        			break;

        			case "D":

        				var nrow = this.dsDelete.addRow();

        				this.dsDelete.setColumn(nrow, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        				this.dsDelete.setColumn(nrow, "ID_EVALUE", this.dsList.getColumn(i, "ID_EVALUE"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        				this.dsDelete.setColumn(nrow, "CD_EVALUEKIND", this.dsList.getColumn(i, "CD_EVALUEKIND"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
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
        this.fnValidate = function() {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_EVALUE"))) {
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctcYY_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("평가년도를 입력하세요.");
        		return false;
        	}
        // 	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_SEQ"))) {
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfMagam.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("회차를 입력하세요.");
        // 		return false;
        // 	}
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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        	}else if(svcID == "save") {
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

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfMagam"){
        		dsUserParam.setColumn(nrow, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        		//dsUserParam.setColumn(nrow, "ID_EVALUE", "");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id){

        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
          this.fnGrid_BeforuserDataSetParam=function(id, dsUserParam, nrow){

        	if(id == "DCX_CFEVALUEKIND_BONSA"){
        		dsUserParam.setColumn(nrow, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        		dsUserParam.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        	}
        	return true;
        };
        this.fnGrid_AfterCDTextChanged=function(id, codeFindData){

        	if(id == "DCX_CFEVALUEKIND_BONSA"){
        		var arr = codeFindData;
        		var score = "";
        		if(arr.length > 0){
        			score = arr[0]["DS_EVALUEKIND"];
        		}
        		this.dsList.setColumn(this.dsList.rowposition, "DS_EVALUEKIND", score);
        	}else if(id == "DCX_CFSABUN_02"){
        		var arr = codeFindData;
        		var score = "";
        		if(arr.length > 0){
        			score = arr[0]["DS_HNAME"];
        		}
        		this.dsList.setColumn(this.dsList.rowposition, "DS_EVALUE", score);
        	}
        };
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
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCD_EVALUEJUDGER_BON.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
