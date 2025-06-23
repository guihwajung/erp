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
            this.set_titletext("계좌제한정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFLPR_LIMIT_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFLPR_LIMIT_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFLPR_LIMIT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFLPR_LIMIT_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_CLEAR", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">N</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CLEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtNO_ACCOUNT","sta01:0.0","10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","txtNO_ACCOUNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("해제여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_CLEAR","sta02:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsYN_CLEAR");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
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
            obj = new BindItem("item1","divSearch.form.txtNO_ACCOUNT","value","dsSearch","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboYN_CLEAR","value","dsSearch","YN_CLEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DFL_LIMIT.xfdl", function() {
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


        	this.divSearch.form.cboYN_CLEAR.set_index(0);

        	// 타화면에서 호출 및 파라미터 존재시 자동 조회
        	if(!this.gfnIsNull(this.getOwnerFrame().NO_ACCOUNT)) {
        		this.divSearch.form.txtNO_ACCOUNT.set_value(this.getOwnerFrame().NO_ACCOUNT);
        		this.FormBtns.Select.click();
        	}

        	// 계좌번호에 포커스추가
        	this.divSearch.form.txtNO_ACCOUNT.set_enable(false);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
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

        	////this.ccfDeptCode = this.divSearch.form.ccfDeptCode;
        	this.dxGrid = this.divData.form.objGrid;
        	this.grSearch = this.FormInfo.GR_SEARCH;	//FormInfo : 화면 권한정보
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	////this.ccfDeptCode.CodeFindName = "DFX_CFVENDOR";
        	////this.ccfDeptCode.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	////this.ccfDeptCode.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFL_LIMIT");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";

        	// BUTTON, BUTTON-IN 처리
        	////this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        	// 권한체크는 없애기로 함 2019.08.07
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_ACCOUNT", "string");
        	this.dsSelect.addColumn("YN_CLEAR", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("NO_ACCOUNT", "string");
        	this.dsInsert.addColumn("DT_LIMIT", "string");
        	this.dsInsert.addColumn("TY_LIMIT", "string");
        	this.dsInsert.addColumn("AM_IN", "bigdecimal");
        	this.dsInsert.addColumn("AM_OUT", "bigdecimal");
        	this.dsInsert.addColumn("YN_CLEAR", "string");
        	this.dsInsert.addColumn("DT_CLEAR", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_ACCOUNT", "string");
        	this.dsUpdate.addColumn("DT_LIMIT", "string");
        	this.dsUpdate.addColumn("TY_LIMIT", "string");
        	this.dsUpdate.addColumn("AM_IN", "bigdecimal");
        	this.dsUpdate.addColumn("AM_OUT", "bigdecimal");
        	this.dsUpdate.addColumn("YN_CLEAR", "string");
        	this.dsUpdate.addColumn("DT_CLEAR", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("SN_LIMIT", "bigdecimal");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_ACCOUNT", "string");
        	this.dsDelete.addColumn("SN_LIMIT", "string");
        	this.dsDelete.addColumn("ID_USER", "string");

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
        	this.dsSelect.setColumn(0, "NO_ACCOUNT", this.divSearch.form.txtNO_ACCOUNT.value);
        	this.dsSelect.setColumn(0, "YN_CLEAR", this.divSearch.form.cboYN_CLEAR.value);

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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.set_enableevent(false);

        	this.dsList.setColumn(nrow, "NO_ACCOUNT", this.divSearch.form.txtNO_ACCOUNT.value);
        	this.dsList.setColumn(nrow, "YN_CLEAR", "N");

        	this.dsList.set_enableevent(true);
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

        	//trace("this.dsList :: " + this.dsList.saveXML());

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "NO_ACCOUNT", this.divSearch.form.txtNO_ACCOUNT.value);
        				this.dsInsert.setColumn(nrow, "DT_LIMIT", this.dsList.getColumn(i, "DT_LIMIT"));
        				this.dsInsert.setColumn(nrow, "TY_LIMIT", this.dsList.getColumn(i, "TY_LIMIT"));
        				this.dsInsert.setColumn(nrow, "AM_IN", this.dsList.getColumn(i, "AM_IN"));
        				this.dsInsert.setColumn(nrow, "AM_OUT", this.dsList.getColumn(i, "AM_OUT"));
        				this.dsInsert.setColumn(nrow, "YN_CLEAR", this.dsList.getColumn(i, "YN_CLEAR"));
        				this.dsInsert.setColumn(nrow, "DT_CLEAR", this.dsList.getColumn(i, "DT_CLEAR"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT", this.divSearch.form.txtNO_ACCOUNT.value);
        				this.dsUpdate.setColumn(nrow, "DT_LIMIT", this.dsList.getColumn(i, "DT_LIMIT"));
        				this.dsUpdate.setColumn(nrow, "TY_LIMIT", this.dsList.getColumn(i, "TY_LIMIT"));
        				this.dsUpdate.setColumn(nrow, "AM_IN", this.dsList.getColumn(i, "AM_IN"));
        				this.dsUpdate.setColumn(nrow, "AM_OUT", this.dsList.getColumn(i, "AM_OUT"));
        				this.dsUpdate.setColumn(nrow, "YN_CLEAR", this.dsList.getColumn(i, "YN_CLEAR"));
        				this.dsUpdate.setColumn(nrow, "DT_CLEAR", this.dsList.getColumn(i, "DT_CLEAR"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "SN_LIMIT", this.dsList.getColumn(i, "SN_LIMIT"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_ACCOUNT", this.divSearch.form.txtNO_ACCOUNT.value);
        				this.dsDelete.setColumn(nrow, "SN_LIMIT", this.dsList.getColumn(i, "SN_LIMIT"));
        				this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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
        // 	if (this.gfnIsNull(this.ccfDeptCode.form.CDTextBox.text)) {
        // 		this.gfnAlert("거래처코드가 입력되지 않았습니다.");
        // 		this.ccfDeptCode.form.CDTextBox.setFocus();
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

        	if (id == "ccfDeptCode") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "거래처");
        		dsUserParam.setColumn(nrow, "CD_CORP", "");
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        	case "ccfDeptCode":

        		if(arr.length > 0) {
        			this.dsSearch.setColumn(0, "DS_DAEPYO", arr[0]["DS_DAEPYO"]);
        		}
        		//trace(this.dsSearch.saveXML());
        		break;
        	default:
        	}
        	return true;

        }

        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id) {
        	case "DFX_CFVENDOR": // 거래처코드
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "거래처");
        		dsUserParam.setColumn(nrow, "CD_CORP", "");
        		break;
        	default:
        	}

        	return true;
        }

         this.fnGrid_ExpandUp = function(obj, e) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm == "URL_PROOF") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        		if(this.gfnGetFlag(this.dsList, e.row) == "I"){
        			this.gfnAlert("저장 후 파일첨부 진행.");
        			return false;
        		}

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DH01";
        		fileManager.CD_DIR = [this.dsList.getColumn(e.row, "CD_OWNER")];
        		fileManager.IS_READONLY = false;

        // 		trace("fileManager.CD_GUBUN :: " + fileManager.CD_GUBUN);
        // 		trace("fileManager.CD_DIR :: " + fileManager.CD_DIR);
        // 		trace("fileManager.IS_READONLY :: " + fileManager.IS_READONLY);

        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
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
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.ccfCorp_AfterCDTextChanged = function(id) {
        // 	var arr = this.ccfCorp.form.SelectedData;
        //
        // 	if (arr.length > 0) {
        // 		var cd_system = arr[0]["CD_SYSTEM"];
        // 		var ds_system = arr[0]["DS_SYSTEM"];
        // 		var cd_module = arr[0]["CD_MODULE"];
        // 		var ds_module = arr[0]["DS_MODULE"];
        // 	}
        };

        this.fnDetail = function(obj,e) {
        }

        this.fnDetailCallback = function(strId, val) {
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if ( e.oldvalue != e.newvalue ) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.txtNO_ACCOUNT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.cboYN_CLEAR.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFL_LIMIT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
