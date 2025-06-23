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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCAPR_REGIS_BASIC_CHANGE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCAPR_REGIS_BASIC_CHANGE_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_VENDOR\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","79.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("거래처");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
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
            obj = new BindItem("item2","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCA_REGIST_BASIC_CHANGE.xfdl", function() {
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
        	//this.btn1 = this.gfnFormButtonAdd("btnRiskDtls", "fnRiskDtls");
        	//this.btn2 = this.gfnFormButtonAdd("btnAprvCmpl", "fnAprvCmpl");
        	//this.btn3 = this.gfnFormButtonAdd("btnAprvCnc", "fnAprvCnc");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_VENDOR.CodeFindName = "DCX_CFVENDOR_DC";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCA_REGIST_BASIC_CHANGE");

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 셀 수정가능 여부
        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	// 셀 변경 후 이벤트
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

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
        	this.dsSelect.addColumn("CD_VENDOR", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("NO_SJC", "string");
        	this.dsSave.addColumn("NO_REGIST", "string");
        	this.dsSave.addColumn("CD_BUMUN", "string");
        	this.dsSave.addColumn("YN_PLANT_DOCUMENT", "string");
        	this.dsSave.addColumn("CD_LICCOST1", "string");
        	this.dsSave.addColumn("CD_LICCOST2", "string");
        	this.dsSave.addColumn("DT_FOUND", "string");
        	this.dsSave.addColumn("DS_CON_SPECL", "string");
        	this.dsSave.addColumn("DS_PART", "string");
        	this.dsSave.addColumn("DS_PRESIDENT", "string");
        	this.dsSave.addColumn("TY_REGIST", "string");
        	this.dsSave.addColumn("NO_POSTHQ", "string");
        	this.dsSave.addColumn("AT_ADDRHQ1", "string");
        	this.dsSave.addColumn("AT_ADDRHQ2", "string");
        	this.dsSave.addColumn("DT_TAX_EFFECT", "string");
        	this.dsSave.addColumn("NO_TEL", "string");
        	this.dsSave.addColumn("NO_FAX", "string");
        	this.dsSave.addColumn("EM_REPRENTATIVE", "string");
        	this.dsSave.addColumn("CD_MAINBANK", "string");
        	this.dsSave.addColumn("NO_MAINBANK_ACCOUNT", "string");
        	this.dsSave.addColumn("DS_MAINBANK_OWNER", "string");
        	this.dsSave.addColumn("DT_FIRST_REGIST", "string");
        	this.dsSave.addColumn("DS_REGIST_REASON", "string");
        	this.dsSave.addColumn("DT_CANCEL_REGIST", "string");
        	this.dsSave.addColumn("DS_CANCEL_REGIST", "string");
        	this.dsSave.addColumn("ID_USER", "string");
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

        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

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

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "NO_SJC", this.dsList.getColumn(i, "NO_SJC"));
        				this.dsSave.setColumn(nrow, "NO_REGIST", this.dsList.getColumn(i, "NO_REGIST"));
        				this.dsSave.setColumn(nrow, "CD_BUMUN", this.dsList.getColumn(i, "CD_BUMUN"));
        				this.dsSave.setColumn(nrow, "YN_PLANT_DOCUMENT", this.dsList.getColumn(i, "YN_PLANT_DOCUMENT"));
        				this.dsSave.setColumn(nrow, "CD_LICCOST1", this.dsList.getColumn(i, "CD_LICCOST1"));
        				this.dsSave.setColumn(nrow, "CD_LICCOST2", this.dsList.getColumn(i, "CD_LICCOST2"));
        				this.dsSave.setColumn(nrow, "DT_FOUND", this.dsList.getColumn(i, "DT_FOUND"));
        				this.dsSave.setColumn(nrow, "DS_CON_SPECL", this.dsList.getColumn(i, "DS_CON_SPECL"));
        				this.dsSave.setColumn(nrow, "DS_PART", this.dsList.getColumn(i, "DS_PART"));
        				this.dsSave.setColumn(nrow, "DS_PRESIDENT", this.dsList.getColumn(i, "DS_PRESIDENT"));
        				this.dsSave.setColumn(nrow, "TY_REGIST", this.dsList.getColumn(i, "TY_REGIST"));
        				this.dsSave.setColumn(nrow, "NO_POSTHQ", this.dsList.getColumn(i, "NO_POSTHQ"));
        				this.dsSave.setColumn(nrow, "AT_ADDRHQ1", this.dsList.getColumn(i, "AT_ADDRHQ1"));
        				this.dsSave.setColumn(nrow, "AT_ADDRHQ2", this.dsList.getColumn(i, "AT_ADDRHQ2"));
        				this.dsSave.setColumn(nrow, "DT_TAX_EFFECT", this.dsList.getColumn(i, "DT_TAX_EFFECT"));
        				this.dsSave.setColumn(nrow, "NO_TEL", this.dsList.getColumn(i, "NO_TEL"));
        				this.dsSave.setColumn(nrow, "NO_FAX", this.dsList.getColumn(i, "NO_FAX"));
        				this.dsSave.setColumn(nrow, "EM_REPRENTATIVE", this.dsList.getColumn(i, "EM_REPRENTATIVE"));
        				this.dsSave.setColumn(nrow, "CD_MAINBANK", this.dsList.getColumn(i, "CD_MAINBANK"));
        				this.dsSave.setColumn(nrow, "NO_MAINBANK_ACCOUNT", this.dsList.getColumn(i, "NO_MAINBANK_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "DS_MAINBANK_OWNER", this.dsList.getColumn(i, "DS_MAINBANK_OWNER"));
        				this.dsSave.setColumn(nrow, "DT_FIRST_REGIST", this.dsList.getColumn(i, "DT_FIRST_REGIST"));
        				this.dsSave.setColumn(nrow, "DS_REGIST_REASON", this.dsList.getColumn(i, "DS_REGIST_REASON"));
        				this.dsSave.setColumn(nrow, "DT_CANCEL_REGIST", this.dsList.getColumn(i, "DT_CANCEL_REGIST"));
        				this.dsSave.setColumn(nrow, "DS_CANCEL_REGIST", this.dsList.getColumn(i, "DS_CANCEL_REGIST"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
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
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DCX_CFLICCOST_01_A") {
         		dsUserParam.setColumn(nrow, "COSTCLASS", "");
         	}else if (id == "DCX_CFLICCOST_01_B") {
         		dsUserParam.setColumn(nrow, "COSTCLASS", "");
         	}
        	return true;
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
        this.loadIncludeScript("DCA_REGIST_BASIC_CHANGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
