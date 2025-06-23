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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_FORMNOTICE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DZZPR_FORMNOTICE_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_MODULE\"/></Row></Rows>");
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

            obj = new Div("ccfCD_MODULE","staMODULE:0","10","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_MODULE.form.CDTextBox","value","dsSearch","CD_MODULE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZZ_FORMNOTICE.xfdl", function() {
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
        	/*
        	this.btnOpen = this.gfnFormButtonAdd("btnOpen", "fnFormOpen", "화면실행");
        	this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail", "화면권한설정");
        	this.btnFormButton = this.gfnFormButtonAdd("FormButton", "fnFormButton", "화면버튼설정");
        	this.btnFormButton = this.gfnFormButtonAdd("FormInfo", "fnFormInfo", "화면개발정보");
        	*/
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_MODULE = this.divSearch.form.ccfCD_MODULE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_MODULE.CodeFindName = "DZX_CFMODULE";
        	this.ccfCD_MODULE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_MODULE.AfterCDTextChanged = "fnSearchInit";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZZ_FORMNOTICE");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_MODULE", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("NO_ID", "int");
        	this.dsSave.addColumn("DS_NOTICE", "string");
        	this.dsSave.addColumn("DT_END", "string");
        	this.dsSave.addColumn("DS_HELP", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_MODULE", "string");

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

        	this.dsSelect.setColumn(0, "CD_MODULE", this.dsSearch.getColumn(0, "CD_MODULE"));

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
        				this.dsSave.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsSave.setColumn(nrow, "DS_NOTICE", this.dsList.getColumn(i, "DS_NOTICE"));
        				this.dsSave.setColumn(nrow, "DT_END", this.dsList.getColumn(i, "DT_END"));
        				this.dsSave.setColumn(nrow, "DS_HELP", this.dsList.getColumn(i, "DS_HELP"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_MODULE", this.dsSearch.getColumn(0, "CD_MODULE"));

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
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.ccfCD_MODULE.form.CDTextBox.text)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_MODULE.form.CDTextBox.setFocus();
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
        	param.CD_MODULE = this.ccfCD_MODULE.form.CDTextBox.text;
        	param.DS_MODULE = this.ccfCD_MODULE.form.DSTextBox.text;
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
        		param.CD_MODULE = this.ccfCD_MODULE.form.CDTextBox.text;
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
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZZ_FORMNOTICE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
