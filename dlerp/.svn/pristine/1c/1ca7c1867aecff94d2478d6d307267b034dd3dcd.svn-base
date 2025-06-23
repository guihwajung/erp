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
            this.set_titletext("결재유형");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZRPR_APPTYPE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DZRPR_APPTYPE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DZRPR_APPTYPE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DZRPR_APPTYPE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM01\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PARAM01\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10","66","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("3");
            obj.set_text("법인");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0","10","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("FitToContents").set("false");
            obj.getSetter("AutoSet").set("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_AP_TYPE","ccfCD_CORP:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_taborder("0");
            obj.set_text("결재유형");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtID_AP_TYPE","staID_AP_TYPE:0","10","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtID_AP_TYPE","value","dsSearch","PARAM01");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZR_AP_TYPES.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj, e) {
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
        	this.fnInit();
        }

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid = this.divData.form.objGrid;

        	// 검색영역
        	this.ccfCD_CORP     = this.divSearch.form.ccfCD_CORP;		// 법인코드
        	this.ctxtID_AP_TYPE = this.divSearch.form.ctxtID_AP_TYPE;	// 결재유형
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드영역
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DRZ_AP_TYPE");
        	this.dxGrid.AfterEdit     = "fnGridAfterEdit";
        	this.dxGrid.AfterAllCheck = "fnGridAfterAllCheck";

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam     = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged         = "fnAfterCDTextChanged";
        	this.ctxtID_AP_TYPE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 결재유형
        	this.ctxtID_AP_TYPE.AfterCDTextChanged     = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("ID_AP_TYPE", "string");
        	this.dsInsert.addColumn("DS_AP_TYPE", "string");
        	this.dsInsert.addColumn("DS_URL", "string");
        	this.dsInsert.addColumn("SP_NAME", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("PARAM01", "string");
        	this.dsInsert.addColumn("PARAM02", "string");
        	this.dsInsert.addColumn("PARAM03", "string");
        	this.dsInsert.addColumn("PARAM04", "string");
        	this.dsInsert.addColumn("ID_FORM", "string");
        	this.dsInsert.addColumn("CD_MODULE", "string");
        	this.dsInsert.addColumn("ID_EMAIL", "string");
        	this.dsInsert.addColumn("DS_LINE", "string");
        	this.dsInsert.addColumn("YN_BONSA", "string");
        	this.dsInsert.addColumn("YN_CANCEL", "string");
        	this.dsInsert.addColumn("ID_DOORAY_TYPE", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("ID_AP_TYPE", "string");
        	this.dsUpdate.addColumn("DS_AP_TYPE", "string");
        	this.dsUpdate.addColumn("DS_URL", "string");
        	this.dsUpdate.addColumn("SP_NAME", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("PARAM01", "string");
        	this.dsUpdate.addColumn("PARAM02", "string");
        	this.dsUpdate.addColumn("PARAM03", "string");
        	this.dsUpdate.addColumn("PARAM04", "string");
        	this.dsUpdate.addColumn("ID_FORM", "string");
        	this.dsUpdate.addColumn("CD_MODULE", "string");
        	this.dsUpdate.addColumn("ID_EMAIL", "string");
        	this.dsUpdate.addColumn("DS_LINE", "string");
        	this.dsUpdate.addColumn("YN_BONSA", "string");
        	this.dsUpdate.addColumn("YN_CANCEL", "string");
        	this.dsUpdate.addColumn("ID_DOORAY_TYPE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("ID_AP_TYPE", "string");
        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
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

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSearch";
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
        	var CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	if (!this.gfnIsNull(CD_CORP))
        	{
        		var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        		this.dsList.setColumn(nrow, 'CD_CORP', CD_CORP);
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
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "ID_AP_TYPE", this.dsList.getColumn(i, "ID_AP_TYPE"));
        				this.dsInsert.setColumn(nrow, "DS_AP_TYPE", this.dsList.getColumn(i, "DS_AP_TYPE"));
        				this.dsInsert.setColumn(nrow, "DS_URL", this.dsList.getColumn(i, "DS_URL"));
        				this.dsInsert.setColumn(nrow, "SP_NAME", this.dsList.getColumn(i, "SP_NAME"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "PARAM01", this.dsList.getColumn(i, "PARAM01"));
        				this.dsInsert.setColumn(nrow, "PARAM02", this.dsList.getColumn(i, "PARAM02"));
        				this.dsInsert.setColumn(nrow, "PARAM03", this.dsList.getColumn(i, "PARAM03"));
        				this.dsInsert.setColumn(nrow, "PARAM04", this.dsList.getColumn(i, "PARAM04"));
        				this.dsInsert.setColumn(nrow, "ID_FORM", this.dsList.getColumn(i, "ID_FORM"));
        				this.dsInsert.setColumn(nrow, "CD_MODULE", this.dsList.getColumn(i, "CD_MODULE"));
        				this.dsInsert.setColumn(nrow, "ID_EMAIL", this.dsList.getColumn(i, "ID_EMAIL"));
        				this.dsInsert.setColumn(nrow, "DS_LINE", this.dsList.getColumn(i, "DS_LINE"));
        				this.dsInsert.setColumn(nrow, "YN_BONSA", this.dsList.getColumn(i, "YN_BONSA"));
        				this.dsInsert.setColumn(nrow, "YN_CANCEL", this.dsList.getColumn(i, "YN_CANCEL"));
        				this.dsInsert.setColumn(nrow, "ID_DOORAY_TYPE", this.dsList.getColumn(i, "ID_DOORAY_TYPE"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "ID_AP_TYPE", this.dsList.getColumn(i, "ID_AP_TYPE"));
        				this.dsUpdate.setColumn(nrow, "DS_AP_TYPE", this.dsList.getColumn(i, "DS_AP_TYPE"));
        				this.dsUpdate.setColumn(nrow, "DS_URL", this.dsList.getColumn(i, "DS_URL"));
        				this.dsUpdate.setColumn(nrow, "SP_NAME", this.dsList.getColumn(i, "SP_NAME"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "PARAM01", this.dsList.getColumn(i, "PARAM01"));
        				this.dsUpdate.setColumn(nrow, "PARAM02", this.dsList.getColumn(i, "PARAM02"));
        				this.dsUpdate.setColumn(nrow, "PARAM03", this.dsList.getColumn(i, "PARAM03"));
        				this.dsUpdate.setColumn(nrow, "PARAM04", this.dsList.getColumn(i, "PARAM04"));
        				this.dsUpdate.setColumn(nrow, "ID_FORM", this.dsList.getColumn(i, "ID_FORM"));
        				this.dsUpdate.setColumn(nrow, "CD_MODULE", this.dsList.getColumn(i, "CD_MODULE"));
        				this.dsUpdate.setColumn(nrow, "ID_EMAIL", this.dsList.getColumn(i, "ID_EMAIL"));
        				this.dsUpdate.setColumn(nrow, "DS_LINE", this.dsList.getColumn(i, "DS_LINE"));
        				this.dsUpdate.setColumn(nrow, "YN_BONSA", this.dsList.getColumn(i, "YN_BONSA"));
        				this.dsUpdate.setColumn(nrow, "YN_CANCEL", this.dsList.getColumn(i, "YN_CANCEL"));
        				this.dsUpdate.setColumn(nrow, "ID_DOORAY_TYPE", this.dsList.getColumn(i, "ID_DOORAY_TYPE"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "ID_AP_TYPE", this.dsList.getColumn(i, "ID_AP_TYPE"));
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

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
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

        	return validate;

        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {
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
        	if (id == "ccfCD_CORP") {
        		;
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if (id == "ccfCD_CORP") {

        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        this.fnGridAfterEdit = function(obj,e) {

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        /************************************************************************
         * 기타 함수
         ************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctxtID_AP_TYPE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZR_AP_TYPES.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
