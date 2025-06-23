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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DQBPR_CBSMENU_SELECT</Col></Row><Row><Col id=\"SP\">DQBPR_CBSMENU_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"SP\">DQBPR_CBSMENU_UPDATE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"SP\">DQBPR_CBSMENU_DELETE</Col><Col id=\"TARGET\">delete</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_LV0\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LV1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_LV1\"/><Col id=\"CD_LV0\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_LV0","0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_LV0:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("CBS 코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CBS","sta00:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_CBS:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("대분류");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_CBS.form.CDTextBox","value","dsSearch","CD_LV1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_LV0.form.CDTextBox","value","dsSearch","CD_LV0");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DQB_CBSMENU.xfdl", function() {
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

        	// 화면 오픈시 조회함
        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("btnSAP", "fnSap");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_LV0 = this.divSearch.form.ccfCD_LV0;
        	this.ccfCD_CBS = this.divSearch.form.ccfCD_CBS;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_LV0.CodeFindName = "CF_CODE_DQ_C01";
        	this.ccfCD_CBS.CodeFindName = "DQX_CBSMENU3";

        	this.ccfCD_LV0.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CBS.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	//this.gfnGridInit(this.dxGrid, this.dsList, "DQ", "DQB_CBSMENU");
        	this.gfnGridInit(this.dxGrid, this.dsList, "DQ", "DQB_CBSMENU", "DS_CBS", "TREE_LEVEL");

        	// 셀 수정가능 여부
        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	// 셀 변경 후 이벤트
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	// 그리드 코드파인드 설정
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 전체체크박스 체크/해제 이벤트
        	//this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

        	// BUTTON, BUTTON-IN 처리
        	//this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_LV0", "string");
        	this.dsSelect.addColumn("CD_LV1", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_LV0", "string");
        	this.dsInsert.addColumn("CD_LV1", "string");
        	this.dsInsert.addColumn("DS_LV1", "string");
        	this.dsInsert.addColumn("CD_LV2", "string");
        	this.dsInsert.addColumn("DS_LV2", "string");
        	this.dsInsert.addColumn("CD_LV3", "string");
        	this.dsInsert.addColumn("DS_LV3", "string");
        	this.dsInsert.addColumn("CD_LV4", "string");
        	this.dsInsert.addColumn("DS_LV4", "string");
        	this.dsInsert.addColumn("CD_LV5", "string");
        	this.dsInsert.addColumn("DS_LV5", "string");
        	this.dsInsert.addColumn("CD_LV6", "string");
        	this.dsInsert.addColumn("DS_LV6", "string");
        	this.dsInsert.addColumn("CD_LV7", "string");
        	this.dsInsert.addColumn("DS_LV7", "string");
        	this.dsInsert.addColumn("CD_REG", "string");
        	this.dsInsert.addColumn("YN_ITEM", "string");
        	this.dsInsert.addColumn("YN_NONST", "string");
        	this.dsInsert.addColumn("YN_DM", "int");
        	this.dsInsert.addColumn("ID_UPDATE", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("SN_NO", "string");
        	this.dsUpdate.addColumn("CD_LV0", "string");
        	this.dsUpdate.addColumn("CD_LV1", "string");
        	this.dsUpdate.addColumn("DS_LV1", "string");
        	this.dsUpdate.addColumn("CD_LV2", "string");
        	this.dsUpdate.addColumn("DS_LV2", "string");
        	this.dsUpdate.addColumn("CD_LV3", "string");
        	this.dsUpdate.addColumn("DS_LV3", "string");
        	this.dsUpdate.addColumn("CD_LV4", "string");
        	this.dsUpdate.addColumn("DS_LV4", "string");
        	this.dsUpdate.addColumn("CD_LV5", "string");
        	this.dsUpdate.addColumn("DS_LV5", "string");
        	this.dsUpdate.addColumn("CD_LV6", "string");
        	this.dsUpdate.addColumn("DS_LV6", "string");
        	this.dsUpdate.addColumn("CD_LV7", "string");
        	this.dsUpdate.addColumn("DS_LV7", "string");
        	this.dsUpdate.addColumn("CD_REG", "string");
        	this.dsUpdate.addColumn("YN_ITEM", "string");
        	this.dsUpdate.addColumn("YN_NONST", "string");
        	this.dsUpdate.addColumn("YN_DM", "int");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("SN_NO", "string");
        	this.dsDelete.addColumn("ID_UPDATE", "string");
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

        	this.dsSelect.setColumn(0, "CD_LV0", this.dsSearch.getColumn(0, "CD_LV0"));
        	this.dsSelect.setColumn(0, "CD_LV1", this.dsSearch.getColumn(0, "CD_LV1"));

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

        	if(this.dsList.rowcount < 1){
        		var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	}else{
        		// 선택된 row의 바로밑에 row를 추가한다
        		var nrow = this.gfnGridAdd(this.dxGrid, "current_bottom");

        		//this.dsList.copyRow(nrow,this.dsList,nrow-1);
        		//this.dsList.setColumn(nrow, this.ucFlag, "I");	// copyRow()를 사용하면 flag가 업데이트로 되기때문에 인서트로 변경해준다

        		this.dsList.set_enableevent(false);
        		this.dsList.setColumn(nrow, "CD_LV0", this.dsList.getColumn(nrow-1, "CD_LV0"));
        		this.dsList.setColumn(nrow, "CD_LV1", this.dsList.getColumn(nrow-1, "CD_LV1"));
        		this.dsList.setColumn(nrow, "DS_LV1", this.dsList.getColumn(nrow-1, "DS_LV1"));
        		this.dsList.setColumn(nrow, "CD_LV2", this.dsList.getColumn(nrow-1, "CD_LV2"));
        		this.dsList.setColumn(nrow, "DS_LV2", this.dsList.getColumn(nrow-1, "DS_LV2"));
        		this.dsList.setColumn(nrow, "CD_LV3", this.dsList.getColumn(nrow-1, "CD_LV3"));
        		this.dsList.setColumn(nrow, "DS_LV3", this.dsList.getColumn(nrow-1, "DS_LV3"));
        		this.dsList.setColumn(nrow, "CD_LV4", this.dsList.getColumn(nrow-1, "CD_LV4"));
        		this.dsList.setColumn(nrow, "DS_LV4", this.dsList.getColumn(nrow-1, "DS_LV4"));
        		this.dsList.setColumn(nrow, "CD_LV5", this.dsList.getColumn(nrow-1, "CD_LV5"));
        		this.dsList.setColumn(nrow, "DS_LV5", this.dsList.getColumn(nrow-1, "DS_LV5"));
        		this.dsList.setColumn(nrow, "CD_LV6", this.dsList.getColumn(nrow-1, "CD_LV6"));
        		this.dsList.setColumn(nrow, "DS_LV6", this.dsList.getColumn(nrow-1, "DS_LV6"));
        		this.dsList.setColumn(nrow, "CD_LV7", this.dsList.getColumn(nrow-1, "CD_LV7"));
        		this.dsList.setColumn(nrow, "DS_LV7", this.dsList.getColumn(nrow-1, "DS_LV7"));
        		this.dsList.setColumn(nrow, "YN_ITEM", this.dsList.getColumn(nrow-1, "YN_ITEM"));
        		this.dsList.set_enableevent(true);
        	}
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
        	// 그리드 필수항목 체크``
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
        				this.dsInsert.setColumn(nrow, "CD_LV0", this.dsList.getColumn(i, "CD_LV0"));
        				this.dsInsert.setColumn(nrow, "CD_LV1", this.dsList.getColumn(i, "CD_LV1"));
        				this.dsInsert.setColumn(nrow, "DS_LV1", this.dsList.getColumn(i, "DS_LV1"));
        				this.dsInsert.setColumn(nrow, "CD_LV2", this.dsList.getColumn(i, "CD_LV2"));
        				this.dsInsert.setColumn(nrow, "DS_LV2", this.dsList.getColumn(i, "DS_LV2"));
        				this.dsInsert.setColumn(nrow, "CD_LV3", this.dsList.getColumn(i, "CD_LV3"));
        				this.dsInsert.setColumn(nrow, "DS_LV3", this.dsList.getColumn(i, "DS_LV3"));
        				this.dsInsert.setColumn(nrow, "CD_LV4", this.dsList.getColumn(i, "CD_LV4"));
        				this.dsInsert.setColumn(nrow, "DS_LV4", this.dsList.getColumn(i, "DS_LV4"));
        				this.dsInsert.setColumn(nrow, "CD_LV5", this.dsList.getColumn(i, "CD_LV5"));
        				this.dsInsert.setColumn(nrow, "DS_LV5", this.dsList.getColumn(i, "DS_LV5"));
        				this.dsInsert.setColumn(nrow, "CD_LV6", this.dsList.getColumn(i, "CD_LV6"));
        				this.dsInsert.setColumn(nrow, "DS_LV6", this.dsList.getColumn(i, "DS_LV6"));
        				this.dsInsert.setColumn(nrow, "CD_LV7", this.dsList.getColumn(i, "CD_LV7"));
        				this.dsInsert.setColumn(nrow, "DS_LV7", this.dsList.getColumn(i, "DS_LV7"));
        				this.dsInsert.setColumn(nrow, "CD_REG", this.dsList.getColumn(i, "CD_REG"));
        				this.dsInsert.setColumn(nrow, "YN_ITEM", this.dsList.getColumn(i, "YN_ITEM"));
        				this.dsInsert.setColumn(nrow, "YN_NONST", this.dsList.getColumn(i, "YN_NONST"));
        				this.dsInsert.setColumn(nrow, "YN_DM", this.dsList.getColumn(i, "YN_DM"));
        				this.dsInsert.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "SN_NO", this.dsList.getColumn(i, "SN_NO"));
        				this.dsUpdate.setColumn(nrow, "CD_LV0", this.dsList.getColumn(i, "CD_LV0"));
        				this.dsUpdate.setColumn(nrow, "CD_LV1", this.dsList.getColumn(i, "CD_LV1"));
        				this.dsUpdate.setColumn(nrow, "DS_LV1", this.dsList.getColumn(i, "DS_LV1"));
        				this.dsUpdate.setColumn(nrow, "CD_LV2", this.dsList.getColumn(i, "CD_LV2"));
        				this.dsUpdate.setColumn(nrow, "DS_LV2", this.dsList.getColumn(i, "DS_LV2"));
        				this.dsUpdate.setColumn(nrow, "CD_LV3", this.dsList.getColumn(i, "CD_LV3"));
        				this.dsUpdate.setColumn(nrow, "DS_LV3", this.dsList.getColumn(i, "DS_LV3"));
        				this.dsUpdate.setColumn(nrow, "CD_LV4", this.dsList.getColumn(i, "CD_LV4"));
        				this.dsUpdate.setColumn(nrow, "DS_LV4", this.dsList.getColumn(i, "DS_LV4"));
        				this.dsUpdate.setColumn(nrow, "CD_LV5", this.dsList.getColumn(i, "CD_LV5"));
        				this.dsUpdate.setColumn(nrow, "DS_LV5", this.dsList.getColumn(i, "DS_LV5"));
        				this.dsUpdate.setColumn(nrow, "CD_LV6", this.dsList.getColumn(i, "CD_LV6"));
        				this.dsUpdate.setColumn(nrow, "DS_LV6", this.dsList.getColumn(i, "DS_LV6"));
        				this.dsUpdate.setColumn(nrow, "CD_LV7", this.dsList.getColumn(i, "CD_LV7"));
        				this.dsUpdate.setColumn(nrow, "DS_LV7", this.dsList.getColumn(i, "DS_LV7"));
        				this.dsUpdate.setColumn(nrow, "CD_REG", this.dsList.getColumn(i, "CD_REG"));
        				this.dsUpdate.setColumn(nrow, "YN_ITEM", this.dsList.getColumn(i, "YN_ITEM"));
        				this.dsUpdate.setColumn(nrow, "YN_NONST", this.dsList.getColumn(i, "YN_NONST"));
        				this.dsUpdate.setColumn(nrow, "YN_DM", this.dsList.getColumn(i, "YN_DM"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "SN_NO", this.dsList.getColumn(i, "SN_NO"));
        				this.dsDelete.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_CBS"){
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_LV0"))) {
         			this.gfnAlert("대분류를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_LV0", this.dsSearch.getColumn(0, "CD_LV0"));
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_LV0") {
        		// 대분류 변경시 초기화
        		this.ccfCD_CBS.form.fnCodeFindClear();
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

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
        this.loadIncludeScript("DQB_CBSMENU.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
