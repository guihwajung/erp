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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_MODULEFORMREGISTRATION_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DZZPR_MODULEFORMREGISTRATION_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DZZPR_MODULEFORMREGISTRATION_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DZZPR_MODULEFORMREGISTRATION_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staMODULE","0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("1");
            obj.set_text("서브모듈");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfMODULE","staMODULE:0","10","220","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
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
        this.registerScript("DZU_MODULEFORMREGISTRATION.xfdl", function() {
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
         * 버튼 설정
         ************************************************************************/
        this.fnSetButton = function() {
        // 	var id_group = this.FormInfo.ID_GROUP;
        // 	var gr_search = this.FormInfo.GR_SEARCH;
        // 	var cd_role = this.FormInfo.CD_ROLE;
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnOpen = this.gfnFormButtonAdd("btnOpen", "fnFormOpen", "화면실행");
        	this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail", "화면권한설정");
        	this.btnFormButton = this.gfnFormButtonAdd("FormButton", "fnFormButton", "화면버튼설정");
        	this.btnFormButton = this.gfnFormButtonAdd("FormInfo", "fnFormInfo", "화면개발정보");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfMODULE = this.divSearch.form.ccfMODULE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfMODULE.CodeFindName = "DZX_CFMODULE";
        	this.ccfMODULE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfMODULE.AfterCDTextChanged = "fnSearchInit";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZZ_MODULEFROMREGISTRATION");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_MODULE", "string");
        	this.dsSelect.addColumn("NO_OVER", "string");
        	this.dsSelect.addColumn("CK_MENUTREE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_MODULE", "string");
        	this.dsInsert.addColumn("ASM_NAME", "string");
        	this.dsInsert.addColumn("ID_FORM", "string");
        	this.dsInsert.addColumn("NM_FORM", "string");
        	this.dsInsert.addColumn("ID_UPFORM", "string");
        	this.dsInsert.addColumn("TY_MENU", "string");
        	this.dsInsert.addColumn("NO_ORDER", "int");
        	this.dsInsert.addColumn("NO_IDENT", "string");
        	this.dsInsert.addColumn("DS_PARAM", "string");
        	this.dsInsert.addColumn("YN_USE", "string");
        	this.dsInsert.addColumn("YN_EXPAND", "string");
        	this.dsInsert.addColumn("RM_FORM", "string");
        	this.dsInsert.addColumn("RM_AUTH", "string");
        	this.dsInsert.addColumn("YN_OLD", "string");
        	this.dsInsert.addColumn("YN_SECU", "string");
        	this.dsInsert.addColumn("YN_EXCEPTION", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_ID", "int");
        	this.dsUpdate.addColumn("CD_MODULE", "string");
        	this.dsUpdate.addColumn("ASM_NAME", "string");
        	this.dsUpdate.addColumn("ID_FORM", "string");
        	this.dsUpdate.addColumn("NM_FORM", "string");
        	this.dsUpdate.addColumn("ID_UPFORM", "string");
        	this.dsUpdate.addColumn("TY_MENU", "string");
        	this.dsUpdate.addColumn("NO_ORDER", "int");
        	this.dsUpdate.addColumn("NO_IDENT", "string");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("YN_EXPAND", "string");
        	this.dsUpdate.addColumn("RM_FORM", "string");
        	this.dsUpdate.addColumn("YN_OLD", "string");
        	this.dsUpdate.addColumn("YN_SECU", "string");
        	this.dsUpdate.addColumn("YN_EXCEPTION", "string");
        	this.dsUpdate.addColumn("RM_AUTH", "string");
        	this.dsUpdate.addColumn("DS_PARAM", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_ID", "int");
        	this.dsDelete.addColumn("CD_MODULE", "string");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_MODULE", this.ccfMODULE.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "NO_OVER", "0");
        	this.dsSelect.setColumn(0, "CK_MENUTREE", "N");

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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	var cd_module = this.ccfMODULE.form.CDTextBox.text;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_MODULE", cd_module);
        				this.dsInsert.setColumn(nrow, "ASM_NAME", this.dsList.getColumn(i, "ASM_NAME"));
        				this.dsInsert.setColumn(nrow, "ID_FORM", this.dsList.getColumn(i, "ID_FORM"));
        				this.dsInsert.setColumn(nrow, "NM_FORM", this.dsList.getColumn(i, "NM_FORM"));
        				this.dsInsert.setColumn(nrow, "ID_UPFORM", this.dsList.getColumn(i, "ID_UPFORM"));
        				this.dsInsert.setColumn(nrow, "TY_MENU", this.dsList.getColumn(i, "TY_MENU"));
        				this.dsInsert.setColumn(nrow, "NO_ORDER", this.dsList.getColumn(i, "NO_ORDER"));
        				this.dsInsert.setColumn(nrow, "NO_IDENT", this.dsList.getColumn(i, "NO_IDENT"));
        				this.dsInsert.setColumn(nrow, "DS_PARAM", this.dsList.getColumn(i, "DS_PARAM"));
        				this.dsInsert.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsInsert.setColumn(nrow, "YN_EXPAND", this.dsList.getColumn(i, "YN_EXPAND"));
        				this.dsInsert.setColumn(nrow, "RM_FORM", this.dsList.getColumn(i, "RM_FORM"));
        				this.dsInsert.setColumn(nrow, "RM_AUTH", this.dsList.getColumn(i, "RM_AUTH"));
        				this.dsInsert.setColumn(nrow, "YN_OLD", this.dsList.getColumn(i, "YN_OLD"));
        				this.dsInsert.setColumn(nrow, "YN_SECU", this.dsList.getColumn(i, "YN_SECU"));
        				this.dsInsert.setColumn(nrow, "YN_EXCEPTION", this.dsList.getColumn(i, "YN_EXCEPTION"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsUpdate.setColumn(nrow, "CD_MODULE", cd_module);
        				this.dsUpdate.setColumn(nrow, "ASM_NAME", this.dsList.getColumn(i, "ASM_NAME"));
        				this.dsUpdate.setColumn(nrow, "ID_FORM", this.dsList.getColumn(i, "ID_FORM"));
        				this.dsUpdate.setColumn(nrow, "NM_FORM", this.dsList.getColumn(i, "NM_FORM"));
        				this.dsUpdate.setColumn(nrow, "ID_UPFORM", this.dsList.getColumn(i, "ID_UPFORM"));
        				this.dsUpdate.setColumn(nrow, "TY_MENU", this.dsList.getColumn(i, "TY_MENU"));
        				this.dsUpdate.setColumn(nrow, "NO_ORDER", this.dsList.getColumn(i, "NO_ORDER"));
        				this.dsUpdate.setColumn(nrow, "NO_IDENT", this.dsList.getColumn(i, "NO_IDENT"));
        				this.dsUpdate.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsUpdate.setColumn(nrow, "YN_EXPAND", this.dsList.getColumn(i, "YN_EXPAND"));
        				this.dsUpdate.setColumn(nrow, "RM_FORM", this.dsList.getColumn(i, "RM_FORM"));
        				this.dsUpdate.setColumn(nrow, "YN_OLD", this.dsList.getColumn(i, "YN_OLD"));
        				this.dsUpdate.setColumn(nrow, "YN_SECU", this.dsList.getColumn(i, "YN_SECU"));
        				this.dsUpdate.setColumn(nrow, "YN_EXCEPTION", this.dsList.getColumn(i, "YN_EXCEPTION"));
        				this.dsUpdate.setColumn(nrow, "RM_AUTH", this.dsList.getColumn(i, "RM_AUTH"));
        				this.dsUpdate.setColumn(nrow, "DS_PARAM", this.dsList.getColumn(i, "DS_PARAM"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsDelete.setColumn(nrow, "CD_MODULE", cd_module);

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
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.ccfMODULE.form.CDTextBox.text)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfMODULE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("서브모듈을 입력하세요.");
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
        	if (id == "cfDept") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if (e.oldrow != e.row) {
        		if(this.dsList.getColumn(e.row, "TY_MENU") == "화면" && !this.gfnIsNull(this.dsList.getColumn(e.row, "ID_FORM"))) {
        			this.btnFormButton.set_enable(true);
        		} else {
        			this.btnFormButton.set_enable(false);
        		}
        	}
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnDetail = function(obj,e) {
        	if (!this.fnSelectValidate()) { return false; }
        	var param = {};
        	param.CD_MODULE = this.ccfMODULE.form.CDTextBox.text;
        	param.DS_MODULE = this.ccfMODULE.form.DSTextBox.text;
        	this.gfnFormOpen("DZB", "DZU_USERAUTHORITY", "fnDetailCallback", param);

        }

        this.fnDetailCallback = function(strId, val) {
        	this.FormBtns.Select.click();
        };

        this.fnFormButton = function(obj,e) {
        	var row = this.dsList.rowposition;
        	if((this.dsList.getColumn(row, "TY_MENU") == "화면" || this.dsList.getColumn(row, "TY_MENU") == "Dialog")
        		&& !this.gfnIsNull(this.dsList.getColumn(row, "ID_FORM"))) {
        		var param = {};
        		param.CD_MODULE = this.ccfMODULE.form.CDTextBox.text;
        		param.ID_FORM = this.dsList.getColumn(row, "ID_FORM");
        		param.NM_FORM = this.dsList.getColumn(row, "NM_FORM");
        		this.gfnFormOpen("DZB", "DZU_FORMBUTTON", "", param);
        	}
        }

        this.fnFormInfo = function(obj,e) {
        	var row = this.dsList.rowposition;
        	if(this.dsList.getColumn(row, "TY_MENU") == "화면" && !this.gfnIsNull(this.dsList.getColumn(row, "ID_FORM"))) {
        		var param = {};
        		param.ID_FORM = this.dsList.getColumn(row, "ID_FORM");
        		param.GR_SEARCH = this.FormInfo.GR_SEARCH;
        		param.TY_AUTH = this.FormInfo.TY_AUTH;
        		this.gfnFormOpen("DZO", "DZU_FORMINFO", "", param);
        	}
        }

        this.fnFormOpen = function(obj,e) {
        	var row = this.dsList.rowposition;
        // 	if((this.dsList.getColumn(row, "TY_MENU") == "화면" || this.dsList.getColumn(row, "TY_MENU") == "Dialog")
        // 		&& !this.gfnIsNull(this.dsList.getColumn(row, "ID_FORM")))
        	{
        		var param = {};

        		this.gfnFormOpen(this.dsList.getColumn(row, "ASM_NAME").substr(0,3) , this.dsList.getColumn(row, "ID_FORM"), "", param);
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(id) {
        	this.gfnSetFormStatus(this);
        	this.gfnGridClear(this.dxGrid);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DZU_MODULEFORMREGISTRATION.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
