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
            this.set_titletext("평가항목");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_EVAL_ITEMS_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAJPR_EVAL_ITEMS_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAXPR_EVAL_TERMS_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TERM_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"STD_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TY_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STD_EVAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTERM_EVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTERM_EVAL","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가기수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTERM_EVAL","staTERM_EVAL:0.0","10.0","89","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTERM_EVAL");
            obj.set_text("");
            obj.set_value("%");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_EVAL","cboTERM_EVAL:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("평가구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_EVAL","staTY_EVAL:0.0","10.0","235","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSTD_EVAL","ccfTY_EVAL:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("평가기준");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfSTD_EVAL","staSTD_EVAL:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
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
            obj = new BindItem("item0","divSearch.form.cboTERM_EVAL","value","dsSearch","TERM_EVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfTY_EVAL.form.CDTextBox","value","dsSearch","TY_EVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfSTD_EVAL.form.CDTextBox","value","dsSearch","STD_EVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfTY_EVAL.form.DSTextBox","value","dsSearch","DS_TY_EVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfSTD_EVAL.form.DSTextBox","value","dsSearch","DS_STD_EVAL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAJ_EVALUATION_ITEMS.xfdl", function() {
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
        	this.fnSetCombo();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SubSave, SubExcel
         	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnItem1 = this.gfnFormButtonAdd("btnCopyEvalItem", "fnCopyEvalItem");			// 평가항목복사
        	this.btnItem2 = this.gfnFormButtonAdd("btnEvalItemDetail", "fnEvalItemDetail");		// 상세내역
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.cboTERM_EVAL = this.divSearch.form.cboTERM_EVAL;
        	this.ccfTY_EVAL = this.divSearch.form.ccfTY_EVAL;
        	this.ccfSTD_EVAL =	this.divSearch.form.ccfSTD_EVAL;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_EVALUATION_ITEMS");
        	//this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_CellDblclick, this);

        	//그리드 이벤트
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.ccfTY_EVAL.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfTY_EVAL.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfSTD_EVAL.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfSTD_EVAL.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TERM_EVAL", "string");
        	this.dsSelect.addColumn("TY_EVAL", "string");
        	this.dsSelect.addColumn("STD_EVAL", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("TERM_EVAL", "string");
        	this.dsSave.addColumn("TY_EVAL", "string");
        	this.dsSave.addColumn("STD_EVAL", "string");
        	this.dsSave.addColumn("ITEM_EVAL", "string");
        	this.dsSave.addColumn("CD_EVALGROUP", "string");
        	this.dsSave.addColumn("SERV_EVAL", "string");
        	this.dsSave.addColumn("REF_ITEM", "string");
        	this.dsSave.addColumn("SABUN", "string");
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
        	this.dsSelect.setColumn(0, "TERM_EVAL", this.dsSearch.getColumn(0, "TERM_EVAL"));
        	this.dsSelect.setColumn(0, "TY_EVAL", this.dsSearch.getColumn(0, "TY_EVAL"));
        	this.dsSelect.setColumn(0, "STD_EVAL", this.dsSearch.getColumn(0, "STD_EVAL"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid);
        	this.fnFormOpenEvalItemDetail("I");
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var TERM_EVAL = this.dsList.getColumn(this.dsList.rowposition, "TERM_EVAL");
        	var YN_STRUCTFINI = this.dsList.getColumn(this.dsList.rowposition, "YN_STRUCTFINI");
        	if(YN_STRUCTFINI == "Y"){
        		this.gfnAlert( "해당 \"" + TERM_EVAL + "\" 평가기수의 구조가 확정되어 삭제가 불가능합니다.");
        		return;
        	}
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "TERM_EVAL", this.dsList.getColumn(i, "TERM_EVAL"));
        				this.dsSave.setColumn(nrow, "TY_EVAL", this.dsList.getColumn(i, "TY_EVAL"));
        				this.dsSave.setColumn(nrow, "STD_EVAL", this.dsList.getColumn(i, "STD_EVAL"));
        				this.dsSave.setColumn(nrow, "ITEM_EVAL", this.dsList.getColumn(i, "ITEM_EVAL"));
        				this.dsSave.setColumn(nrow, "CD_EVALGROUP", this.dsList.getColumn(i, "CD_EVALGROUP"));
        				this.dsSave.setColumn(nrow, "SERV_EVAL", this.dsList.getColumn(i, "SERV_EVAL"));
        				this.dsSave.setColumn(nrow, "REF_ITEM", this.dsList.getColumn(i, "REF_ITEM"));
        				this.dsSave.setColumn(nrow, "SABUN", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsOutput=save";
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

        /*
         *	초기화 버튼
         */
        this.fnReset  = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	var P_TERM_EVAL = this.getOwnerFrame().TERM_EVAL;
        	if(!this.gfnIsNull(P_TERM_EVAL)) {
        		this.cboTERM_EVAL.set_value(P_TERM_EVAL);
        	}else{
        		this.cboTERM_EVAL.set_index(0);
        	}

        	this.FormBtns.Select.click();
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "TERM_EVAL"))) {
        		this.cboTERM_EVAL.setFocus();
        		this.gfnAlert("평가기수를 입력하세요.");
        		return false;
        	}
        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	//trace("fnCallback >>>>svcID :["+svcID+"] errorCode :["+errorCode+"] errorMsg :["+errorMsg+"]" );
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if( svcID == "combo"){
        		var P_TERM_EVAL = this.getOwnerFrame().TERM_EVAL;
        		if(!this.gfnIsNull(P_TERM_EVAL)) {
        			this.cboTERM_EVAL.set_value(P_TERM_EVAL);
        		}else{
        			this.cboTERM_EVAL.set_index(0);
        		}

        		if (this.dsTERM_EVAL.rowcount > 0) this.FormBtns.Select.click();
        	}
        	this.fnSetButton();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//trace("코드파인드_식별id:" + id);
        	switch(id) {
        		case "ccfCD_CORP":	//법인
        			//(this.ccfCD_CORP.CodeFindName = "DAX_CFCORP2" 일경우) 아래 파라미터 사용
        			//dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			//dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;
        		case "ccfTY_EVAL":	// 평가구분
        			dsUserParam.setColumn(nrow, "CD_PREFIX", 'EL');
        			break;
        		case "ccfSTD_EVAL":	// 평가기준
        			dsUserParam.setColumn(nrow, "CD_PREFIX", 'EM');
        			break;
        		default:
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	//trace('grid_코드파인드_식별id: ' + id);

        	switch(id) {
        		case "ID_SABUN":     // DAX_CFBASEINFO
        			//dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			//dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			//dsUserParam.setColumn(nrow, "TY_RETIRE", "%");

        		break;

        		default:
        	}

        	return true;
        };

         this.fnGrid_CellDblclick = function(obj,e){
        	var colName = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colName == ""){}
        	this.fnFormOpenEvalItemDetail("U");
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e.pretext != e.posttext) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        	}
        };


        //평가기수 콤보 조회
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
        	this.dsCombo.addColumn("YEAR_EVAL", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "TY_SEL", "P");	// A: 전체 P: 필수
        	this.dsCombo.setColumn(0, "YEAR_EVAL", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTERM_EVAL=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        // 평가항목복사
        this.fnCopyEvalItem = function(obj, e){
        	//if(this.dsList.rowposition < 0)return;
        	var param = {};
        	param.P_GUBUN  = "ITEM";	// ITEM(항목) / WEIGH(가중치)
        	param.P_TERM_EVAL = this.dsSearch.getColumn(0, "TERM_EVAL");
        	this.gfnFormOpen("DAJ", "DAJ_EVALUATION_CRITERIA_DLG", "fnCopyEvalItem_callback", param, 430, 250);
        };

        this.fnCopyEvalItem_callback = function(svcID, val) {
        	if(val){
        		this.gfnAlert("작업이 완료되었습니다.");
        		this.FormBtns.Select.click();
        	}
        }

        // 평가추가
        this.fnEvalItemDetail = function(obj, e){
        	this.fnFormOpenEvalItemDetail("I");
        };

        this.fnFormOpenEvalItemDetail = function(sTySave) {
        	//if(this.dsList.rowposition < 0) return;

        	if(sTySave == "I"){
        		var TERM_EVAL = this.dsList.getColumn(this.dsList.rowposition, "TERM_EVAL");
        		var YN_STRUCTFINI = this.dsList.getColumn(this.dsList.rowposition, "YN_STRUCTFINI");
        		if(YN_STRUCTFINI == "Y"){
        			this.gfnAlert( "해당 \"" + TERM_EVAL + "\" 평가기수의 구조가 확정되어 입력이 불가능합니다.");
        			return;
        		}
        	}

        	var param = {};
        	param.P_TY_SAVE  = sTySave;	// (I:등록 / U:수정,조회)
        	param.P_TERM_EVAL = this.dsSearch.getColumn(0, "TERM_EVAL");
        	param.P_TY_EVAL = this.dsSearch.getColumn(0, "TY_EVAL");
        	param.P_STD_EVAL = this.dsSearch.getColumn(0, "STD_EVAL");
        	if(this.dsList.rowposition > -1){
        		this.dsParam.assign( this.dsList);
        		this.dsParam.clearData();
        		this.dsParam.addRow();
        		this.dsParam.copyRow(0, this.dsList, this.dsList.rowposition);
        		param.P_DS_PARAM = this.dsParam.saveCSV();
        	}

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAJ_EVALUATION_ITEMS_DLG", "fnEvalItemDetail_callback", param, 650, 500);
        }

        this.fnEvalItemDetail_callback = function(svcID, val) {
        	if(val){
        		this.gfnAlert("작업이 완료되었습니다.");
        		this.FormBtns.Select.click();
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTERM_EVAL.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_EVALUATION_ITEMS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
