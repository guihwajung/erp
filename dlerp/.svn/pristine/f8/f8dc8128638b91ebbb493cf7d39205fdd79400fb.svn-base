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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCDPR_EVALUEMAGAM_SELECT</Col></Row><Row><Col id=\"SP\">DCDPR_EVALUEMAGAM_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCDPR_EVALUEMAGAM_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCDPR_EVALUEMAGAM_DELETE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DCDPR_EVALUEMAGAM_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_MAGAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_MAGAM\"/></Row></Rows>");
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
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctcYR_MAGAM","sta00:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
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
            obj = new BindItem("item0","divSearch.form.ctcYR_MAGAM.form.TextBox","value","dsSearch","YR_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DCD_EVALUEMAGAM.xfdl", function() {
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

        	var year = this.gfnGetDate().substr(0,4);
        	this.dsSearch.setColumn(0, "YR_MAGAM", year);


        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnMAGAMCREATE");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCD_EVALUEMAGAM");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_MAGAM", "string");
        	this.dsSelect.addColumn("TY_SYSTEM", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YR_MAGAM", "string");
        	this.dsInsert.addColumn("NO_SEQ", "string");
        	this.dsInsert.addColumn("FR_SELECTION", "string");
        	this.dsInsert.addColumn("TO_SELECTION", "string");
        	this.dsInsert.addColumn("FR_EVALUE", "string");
        	this.dsInsert.addColumn("TO_EVALUE", "string");
        	this.dsInsert.addColumn("DS_BIGO", "string");
        	this.dsInsert.addColumn("DS_EVALUE", "string");
        	this.dsInsert.addColumn("TY_SYSTEM", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YR_MAGAM", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "string");
        	this.dsUpdate.addColumn("FR_SELECTION", "string");
        	this.dsUpdate.addColumn("TO_SELECTION", "string");
        	this.dsUpdate.addColumn("FR_EVALUE", "string");
        	this.dsUpdate.addColumn("TO_EVALUE", "string");
        	this.dsUpdate.addColumn("DS_BIGO", "string");
        	this.dsUpdate.addColumn("DS_EVALUE", "string");
        	this.dsUpdate.addColumn("TY_SYSTEM", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YR_MAGAM", "string");
        	this.dsDelete.addColumn("NO_SEQ", "string");
        	this.dsDelete.addColumn("TY_SYSTEM", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("YR_MAGAM", "string");
        	this.dsExec.addColumn("NO_SEQ", "string");
        	this.dsExec.addColumn("TY_SYSTEM", "string");
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
        	this.dsSelect.setColumn(0, "YR_MAGAM", this.dsSearch.getColumn(0, "YR_MAGAM"));
        	this.dsSelect.setColumn(0, "TY_SYSTEM", this.FormInfo.DS_PARAM);

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
        	var nRow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nRow, "YR_MAGAM", this.dsSearch.getColumn(0, "YR_MAGAM"));
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

        				this.dsInsert.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(i, "YR_MAGAM"));
        				this.dsInsert.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsInsert.setColumn(nrow, "FR_SELECTION", this.dsList.getColumn(i, "FR_SELECTION"));
        				this.dsInsert.setColumn(nrow, "TO_SELECTION", this.dsList.getColumn(i, "TO_SELECTION"));
        				this.dsInsert.setColumn(nrow, "FR_EVALUE", this.dsList.getColumn(i, "FR_EVALUE"));
        				this.dsInsert.setColumn(nrow, "TO_EVALUE", this.dsList.getColumn(i, "TO_EVALUE"));
        				this.dsInsert.setColumn(nrow, "DS_BIGO", this.dsList.getColumn(i, "DS_BIGO"));
        				this.dsInsert.setColumn(nrow, "DS_EVALUE", this.dsList.getColumn(i, "DS_EVALUE"));
        				this.dsInsert.setColumn(nrow, "TY_SYSTEM", this.FormInfo.DS_PARAM);

        			break;

        			case "U":

        				var nrow = this.dsUpdate.addRow();

        				this.dsUpdate.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(i, "YR_MAGAM"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "FR_SELECTION", this.dsList.getColumn(i, "FR_SELECTION"));
        				this.dsUpdate.setColumn(nrow, "TO_SELECTION", this.dsList.getColumn(i, "TO_SELECTION"));
        				this.dsUpdate.setColumn(nrow, "FR_EVALUE", this.dsList.getColumn(i, "FR_EVALUE"));
        				this.dsUpdate.setColumn(nrow, "TO_EVALUE", this.dsList.getColumn(i, "TO_EVALUE"));
        				this.dsUpdate.setColumn(nrow, "DS_BIGO", this.dsList.getColumn(i, "DS_BIGO"));
        				this.dsUpdate.setColumn(nrow, "DS_EVALUE", this.dsList.getColumn(i, "DS_EVALUE"));
        				this.dsUpdate.setColumn(nrow, "TY_SYSTEM", this.FormInfo.DS_PARAM);

        			break;

        			case "D":

        				var nrow = this.dsDelete.addRow();

        				this.dsDelete.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(i, "YR_MAGAM"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsDelete.setColumn(nrow, "YN_MAGAM", this.dsList.getColumn(i, "YN_MAGAM"));
        				this.dsDelete.setColumn(nrow, "TY_SYSTEM", this.FormInfo.DS_PARAM);

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
        	}else if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("평가정보 생성이 완료 되었습니다.", "fnCallback_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {


        	return true;
        };

        this.fnAfterCDTextChanged = function(id){

        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "DCX_CFEVALUE_NOSEQ")
        	{
        		dsUserParam.setColumn(nrow, "CD_SYSTEM", "DC");
        		dsUserParam.setColumn(nrow, "CD_TYPE", "D01");
        		dsUserParam.setColumn(nrow, "TY_SYSTEM", this.FormInfo.DS_PARAM);
        	}
        	return true;
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

        this.fnMAGAMCREATE = function(obj, e){

        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("평가정보를 생성하시겠습니까?", "fnMAGAMCREATE_Callback", "Create");
        };

        this.fnMAGAMCREATE_Callback = function(strId, val) {
        	if(val == true) {
        		this.fnExec(strId);
        	}
        }

        /*
         *	마감 or 마감취소 처리
         */
        this.fnExec = function(tyWrk) {

        	this.dsExec.clearData();
        	this.dsExec.addRow();

        	var nRow = this.dsList.rowposition;

        	this.dsExec.setColumn(0, "YR_MAGAM", this.dsList.getColumn(nRow, "YR_MAGAM"));
        	this.dsExec.setColumn(0, "NO_SEQ", this.dsList.getColumn(nRow, "NO_SEQ"));
        	this.dsExec.setColumn(0, "TY_SYSTEM", this.FormInfo.DS_PARAM);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsExec";

        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCD_EVALUEMAGAM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
