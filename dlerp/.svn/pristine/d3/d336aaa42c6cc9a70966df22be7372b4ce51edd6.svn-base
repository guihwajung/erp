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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCDPR_EVALUEMAGAM_SELECT</Col></Row><Row><Col id=\"SP\">DCDPR_EVALUEMAGAM_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCDPR_EVALUEMAGAM_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCDPR_EVALUEMAGAM_DELETE</Col></Row><Row><Col id=\"TARGET\">magam</Col><Col id=\"SP\">DCDPR_EVALUE_MAGAM</Col></Row><Row><Col id=\"TARGET\">magamCancel</Col><Col id=\"SP\">DCDPR_EVALUE_MAGAM</Col></Row></Rows>");
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
        this.registerScript("DCD_EVALUEMAGAM_MG.xfdl", function() {
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
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnItem = this.gfnFormButtonAdd("btnMagam", "fnMAGAM");
        	this.btnCreate = this.gfnFormButtonAdd("btnMagamCancel", "fnMAGAMCANCEL");
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
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCD_EVALUEMAGAM_MG");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_MAGAM", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YR_MAGAM", "string");
        	this.dsInsert.addColumn("NO_SEQ", "string");
        	this.dsInsert.addColumn("DS_MAGAM", "string");
        	this.dsInsert.addColumn("FR_SELECTION", "string");
        	this.dsInsert.addColumn("TO_SELECTION", "string");
        	this.dsInsert.addColumn("FR_EVALUE", "string");
        	this.dsInsert.addColumn("TO_EVALUE", "string");
        	this.dsInsert.addColumn("ID_MAGAM", "string");
        	this.dsInsert.addColumn("DS_BIGO", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YR_MAGAM", "string");
        	this.dsInsert.addColumn("NO_SEQ", "string");
        	this.dsInsert.addColumn("DS_MAGAM", "string");
        	this.dsUpdate.addColumn("FR_SELECTION", "string");
        	this.dsUpdate.addColumn("TO_SELECTION", "string");
        	this.dsUpdate.addColumn("FR_EVALUE", "string");
        	this.dsUpdate.addColumn("TO_EVALUE", "string");
        	this.dsUpdate.addColumn("ID_MAGAM", "string");
        	this.dsUpdate.addColumn("YN_MAGAM", "string");
        	this.dsUpdate.addColumn("DS_BIGO", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YR_MAGAM", "string");
        	this.dsDelete.addColumn("NO_SEQ", "string");
        	this.dsUpdate.addColumn("YN_MAGAM", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("YR_EVALUE", "string");
        	this.dsExec.addColumn("NO_SEQ", "string");
        	this.dsExec.addColumn("YN_MAGAM", "string");

        	var dt = new Date();
        	this.dsSearch.setColumn(0, "YR_MAGAM", dt.getFullYear());

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
        	this.gfnGridAdd(this.dxGrid);
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
        				this.dsInsert.setColumn(nrow, "DS_MAGAM", this.dsList.getColumn(i, "DS_MAGAM"));
        				this.dsInsert.setColumn(nrow, "FR_SELECTION", this.dsList.getColumn(i, "FR_SELECTION"));
        				this.dsInsert.setColumn(nrow, "TO_SELECTION", this.dsList.getColumn(i, "TO_SELECTION"));
        				this.dsInsert.setColumn(nrow, "FR_EVALUE", this.dsList.getColumn(i, "FR_EVALUE"));
        				this.dsInsert.setColumn(nrow, "TO_EVALUE", this.dsList.getColumn(i, "TO_EVALUE"));
        				this.dsInsert.setColumn(nrow, "ID_MAGAM", this.dsList.getColumn(i, "ID_MAGAM"));
        				this.dsInsert.setColumn(nrow, "DS_BIGO", this.dsList.getColumn(i, "DS_BIGO"));

        			break;

        			case "U":

        				var nrow = this.dsUpdate.addRow();

        				this.dsUpdate.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(i, "YR_MAGAM"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "DS_MAGAM", this.dsList.getColumn(i, "DS_MAGAM"));
        				this.dsUpdate.setColumn(nrow, "FR_SELECTION", this.dsList.getColumn(i, "FR_SELECTION"));
        				this.dsUpdate.setColumn(nrow, "TO_SELECTION", this.dsList.getColumn(i, "TO_SELECTION"));
        				this.dsUpdate.setColumn(nrow, "FR_EVALUE", this.dsList.getColumn(i, "FR_EVALUE"));
        				this.dsUpdate.setColumn(nrow, "TO_EVALUE", this.dsList.getColumn(i, "TO_EVALUE"));
        				this.dsUpdate.setColumn(nrow, "ID_MAGAM", this.dsList.getColumn(i, "ID_MAGAM"));
        				this.dsUpdate.setColumn(nrow, "YN_MAGAM", this.dsList.getColumn(i, "YN_MAGAM"));
        				this.dsUpdate.setColumn(nrow, "DS_BIGO", this.dsList.getColumn(i, "DS_BIGO"));

        			break;

        			case "D":

        				var nrow = this.dsDelete.addRow();

        				this.dsDelete.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(i, "YR_MAGAM"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsDelete.setColumn(nrow, "YN_MAGAM", this.dsList.getColumn(i, "YN_MAGAM"));

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

        	}else if(svcID == "magam") {
        		if (errorCode == 0) {
        			this.gfnAlert("마감이 완료 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "magamCancel") {
        		if (errorCode == 0) {
        			this.gfnAlert("마감이 취소 되었습니다.");
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
        	return true;
        };

        this.fnAfterCDTextChanged = function(id){

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

        this.fnMAGAM = function(obj, e){

        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("평가마감을 진행하시겠습니까?", "fnMAGAM_Callback", "magam");
        };

        this.fnMAGAMCANCEL = function(obj, e){

        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("평가마감을 취소 하시겠습니까?", "fnMAGAM_Callback", "magamCancel");
        };

        this.fnMAGAM_Callback = function(strId, val) {
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

        	this.dsExec.setColumn(0, "YR_EVALUE", this.dsList.getColumn(nRow, "YR_MAGAM"));
        	this.dsExec.setColumn(0, "NO_SEQ", this.dsList.getColumn(nRow, "NO_SEQ"));

        	if(tyWrk == "magam")
        	{
        		this.dsExec.setColumn(0, "YN_MAGAM", "Y");
        	}else if(tyWrk == "magamCancel")
        	{
        		this.dsExec.setColumn(0, "YN_MAGAM", "N");
        	}

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = tyWrk;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";

        	var inData      = tyWrk + "=dsExec";

        	var outData     = "";
        	var strArg      = ""; // "gubun=" + tyWrk;
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
        this.loadIncludeScript("DCD_EVALUEMAGAM_MG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
