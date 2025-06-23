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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_USERMODULE_USER_SELECT</Col></Row><Row><Col id=\"SP\">DZZPR_USERMODULE_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DZZPR_USERMODULE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DZZPR_USERMODULE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_DEPT\"/><Col id=\"ID_USER\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("2");
            obj.set_text("법인코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCorp","sta00:0","10","230","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stabu","ccfCorp:0","10","66","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("1");
            obj.set_text("성명");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfUser","stabu:0","10","200","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stabu00","ccfUser:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("겸직부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfGyumDept","stabu00:0","10","300","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ccfCorp.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfUser.form.CDTextBox","value","dsSearch","ID_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfGyumDept.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZU_USERMODULE_USER.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWA_SILHENG_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
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
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCorp = this.divSearch.form.ccfCorp;
        	this.ccfUser = this.divSearch.form.ccfUser;
        	this.ccfGyumDept = this.divSearch.form.ccfGyumDept;
        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCorp.CodeFindName = "DZX_CFCORP";
        	this.ccfUser.CodeFindName = "DZX_CFUSERBYCORP";
        	this.ccfGyumDept.CodeFindName = "DZX_CFGYUMDEPT";

        	this.ccfCorp.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfUser.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfGyumDept.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZU_USERMODULE_USER");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_MODULE", "string");
        	this.dsInsert.addColumn("ID_GROUP", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_MODULE", "string");
        	this.dsUpdate.addColumn("ID_GROUP", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_MODULE", "string");
        	this.dsDelete.addColumn("ID_USER", "string");
        	this.dsDelete.addColumn("CD_DEPT", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");

        	if(!this.gfnIsNull(this.getOwnerFrame().ID_CORP) && !this.gfnIsNull(this.getOwnerFrame().ID_USER)){
        		this.ccfCorp.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        		this.ccfCorp.form.CDTextBox.set_value(this.getOwnerFrame().ID_CORP);
        		this.ccfUser.form.DSTextBox.set_value(this.getOwnerFrame().DS_HNAME);
        		this.ccfUser.form.CDTextBox.set_value(this.getOwnerFrame().ID_USER);

        		this.FormBtns.Select.click();
        	}else{
        		this.ccfCorp.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCorp.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

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
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCorp.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "ID_USER", this.ccfUser.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_DEPT", this.ccfGyumDept.form.CDTextBox.value);

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

        				this.dsInsert.setColumn(nrow, "CD_MODULE", this.dsList.getColumn(i, "CD_MODULE"));
        				this.dsInsert.setColumn(nrow, "ID_GROUP", this.dsList.getColumn(i, "ID_GROUP"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.ccfUser.form.CDTextBox.value);
        				this.dsInsert.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.ccfCorp.form.CDTextBox.value);

        			break;

        			case "U":

        				var nrow = this.dsUpdate.addRow();

        				this.dsUpdate.setColumn(nrow, "CD_MODULE", this.dsList.getColumn(i, "CD_MODULE"));
        				this.dsUpdate.setColumn(nrow, "ID_GROUP", this.dsList.getColumn(i, "ID_GROUP"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.ccfUser.form.CDTextBox.value);
        				this.dsUpdate.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.ccfCorp.form.CDTextBox.value);

        			break;

        			case "D":

        				var nrow = this.dsDelete.addRow();

        				this.dsDelete.setColumn(nrow, "CD_MODULE", this.dsList.getColumn(i, "CD_MODULE"));
        				this.dsDelete.setColumn(nrow, "ID_USER", this.ccfUser.form.CDTextBox.value);
        				this.dsDelete.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.ccfCorp.form.CDTextBox.value);

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
        	if (this.gfnIsNull(this.ccfCorp.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfCorp.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.");
        		return false;
        	}
        	if (this.gfnIsNull(this.ccfUser.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfUser.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("성명을 입력하세요.");
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
        	if (id == "ccfGyumDept") {
        		if(!this.gfnIsNull(this.ccfCorp.form.CDTextBox.value) && !this.gfnIsNull(this.ccfUser.form.CDTextBox.value)){
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorp.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "ID_USER", this.ccfUser.form.CDTextBox.value);
        		}else{
        			var alertMsg = "";
        			if(this.gfnIsNull(this.ccfUser.form.CDTextBox.value)){
        				alertMsg = "[0.사용자] \n";
        			}
        			if(this.gfnIsNull(this.ccfCorp.form.CDTextBox.value)){
        				alertMsg += "[1.법인코드] \n";

        			}
        			alertMsg += "항목이 입력되지 않았습니다.";
        			this.gfnAlert(alertMsg);
        			return false;
        		}
        	}else if(id == "ccfUser"){
        		if(this.gfnIsNull(this.ccfCorp.form.CDTextBox.value)){
        			this.gfnAlert("법인코드를 입력하십시요.");
        			return false;
        		}else{
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorp.form.CDTextBox.value);
        		}
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCorp") {
        		// 현장코드 변경시 초기화
        		this.ccfUser.form.fnCodeFindClear();
        	}
        }

        this.fnGrid_BeforuserDataSetParam=function(id, dsUserParam, nrow){
        	if(id == "DZX_CFGYUMDEPT"){
        		if(!this.gfnIsNull(this.ccfCorp.form.CDTextBox.value) && !this.gfnIsNull(this.ccfUser.form.CDTextBox.value)){
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorp.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "ID_USER", this.ccfUser.form.CDTextBox.value);
        		}else{
        			var alertMsg = "";
        			if(this.gfnIsNull(this.ccfUser.form.CDTextBox.value)){
        				alertMsg = "[0.사용자] \n";
        			}
        			if(this.gfnIsNull(this.ccfCorp.form.CDTextBox.value)){
        				alertMsg += "[1.법인코드] \n";

        			}
        			alertMsg += "항목이 입력되지 않았습니다.";
        			this.gfnAlert(alertMsg);
        			return false;
        		}
        	}else if(id == "DZX_CFUSERGROUP"){
        		if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_MODULE"))){
        			dsUserParam.setColumn(nrow, "CD_MODULE", this.dsList.getColumn(this.dsList.rowposition, "CD_MODULE"));
        		}else{
        			this.gfnAlert("모듈코드가 입력되지 않았습니다.");
        			return false;
        		}
        	}
        	return true;
        }
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
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZU_USERMODULE_USER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
