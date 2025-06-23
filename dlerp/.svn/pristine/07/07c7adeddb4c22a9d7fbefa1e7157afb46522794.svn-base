(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DHV_LOCALTAXPLACE");
            this.set_titletext("신고사업장관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_LOCALTAXPLACE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHVPR_LOCALTAXPLACE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_LOCALTAXPLACE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHVPR_LOCALTAXPLACE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
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
            obj = new BindItem("item6","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_LOCALTAXPLACE.xfdl", function() {
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

        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        };

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
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_LOCALTAXPLACE");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_PLACE", "string");
        	this.dsInsert.addColumn("DS_PLACE", "string");
        	this.dsInsert.addColumn("NO_CORP", "string");
        	this.dsInsert.addColumn("DS_ADDRESS", "string");
        	this.dsInsert.addColumn("DS_ADDRESS2", "string");
        	this.dsInsert.addColumn("CD_ZIP", "string");
        	this.dsInsert.addColumn("NO_PHONE", "string");
        	this.dsInsert.addColumn("NO_SPHONE", "string");
        	this.dsInsert.addColumn("CD_REGION", "string");
        	this.dsInsert.addColumn("CD_STREET", "string");
        	this.dsInsert.addColumn("YN_USE", "string");
        	this.dsInsert.addColumn("DS_STREET", "string");
        	this.dsInsert.addColumn("CD_DONG", "string");
        	this.dsInsert.addColumn("DS_DONG", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_PLACE", "string");
        	this.dsUpdate.addColumn("DS_PLACE", "string");
        	this.dsUpdate.addColumn("NO_CORP", "string");
        	this.dsUpdate.addColumn("DS_ADDRESS", "string");
        	this.dsUpdate.addColumn("DS_ADDRESS2", "string");
        	this.dsUpdate.addColumn("CD_ZIP", "string");
        	this.dsUpdate.addColumn("NO_PHONE", "string");
        	this.dsUpdate.addColumn("NO_SPHONE", "string");
        	this.dsUpdate.addColumn("CD_REGION", "string");
        	this.dsUpdate.addColumn("CD_STREET", "string");
        	this.dsUpdate.addColumn("DS_STREET", "string");
        	this.dsUpdate.addColumn("CD_DONG", "string");
        	this.dsUpdate.addColumn("DS_DONG", "string");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("CD_PLACE", "string");
        	this.dsDelete.addColumn("ID_USER", "string");


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

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

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
        	this.dsList.setColumn(0, "CD_CORP" , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsList.setColumn(0, "YN_USE" , "Y");
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

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "CD_PLACE", this.dsList.getColumn(i, "CD_PLACE"));
        				this.dsInsert.setColumn(nrow, "DS_PLACE", this.dsList.getColumn(i, "DS_PLACE"));
        				this.dsInsert.setColumn(nrow, "NO_CORP", this.dsList.getColumn(i, "NO_CORP"));
        				this.dsInsert.setColumn(nrow, "DS_ADDRESS", this.dsList.getColumn(i, "DS_ADDRESS"));
        				this.dsInsert.setColumn(nrow, "DS_ADDRESS2", this.dsList.getColumn(i, "DS_ADDRESS2"));
        				this.dsInsert.setColumn(nrow, "CD_ZIP", this.dsList.getColumn(i, "CD_ZIP"));
        				this.dsInsert.setColumn(nrow, "NO_PHONE", this.dsList.getColumn(i, "NO_PHONE"));
        				this.dsInsert.setColumn(nrow, "NO_SPHONE", this.dsList.getColumn(i, "NO_SPHONE"));
        				this.dsInsert.setColumn(nrow, "CD_REGION", this.dsList.getColumn(i, "CD_REGION"));
        				this.dsInsert.setColumn(nrow, "CD_STREET", this.dsList.getColumn(i, "CD_STREET"));
        				this.dsInsert.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsInsert.setColumn(nrow, "DS_STREET", this.dsList.getColumn(i, "DS_STREET"));
        				this.dsInsert.setColumn(nrow, "CD_DONG", this.dsList.getColumn(i, "CD_DONG"));
        				this.dsInsert.setColumn(nrow, "DS_DONG", this.dsList.getColumn(i, "DS_DONG"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "CD_PLACE", this.dsList.getColumn(i, "CD_PLACE"));
        				this.dsUpdate.setColumn(nrow, "DS_PLACE", this.dsList.getColumn(i, "DS_PLACE"));
        				this.dsUpdate.setColumn(nrow, "NO_CORP", this.dsList.getColumn(i, "NO_CORP"));
        				this.dsUpdate.setColumn(nrow, "DS_ADDRESS", this.dsList.getColumn(i, "DS_ADDRESS"));
        				this.dsUpdate.setColumn(nrow, "DS_ADDRESS2", this.dsList.getColumn(i, "DS_ADDRESS2"));
        				this.dsUpdate.setColumn(nrow, "CD_ZIP", this.dsList.getColumn(i, "CD_ZIP"));
        				this.dsUpdate.setColumn(nrow, "NO_PHONE", this.dsList.getColumn(i, "NO_PHONE"));
        				this.dsUpdate.setColumn(nrow, "NO_SPHONE", this.dsList.getColumn(i, "NO_SPHONE"));
        				this.dsUpdate.setColumn(nrow, "CD_REGION", this.dsList.getColumn(i, "CD_REGION"));
        				this.dsUpdate.setColumn(nrow, "CD_STREET", this.dsList.getColumn(i, "CD_STREET"));
        				this.dsUpdate.setColumn(nrow, "DS_STREET", this.dsList.getColumn(i, "DS_STREET"));
        				this.dsUpdate.setColumn(nrow, "CD_DONG", this.dsList.getColumn(i, "CD_DONG"));
        				this.dsUpdate.setColumn(nrow, "DS_DONG", this.dsList.getColumn(i, "DS_DONG"));
        				this.dsUpdate.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "CD_PLACE", this.dsList.getColumn(i, "CD_PLACE"));
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
        this.fnValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
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

        	switch(id) {

        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        			break;
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	switch(id) {

        	case "ccfCD_CORP": // 법인코드
        		this.ccfCD_DEPT.form.fnCodeFindClear();
        		break;
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdRegion = this.dsList.getColumn(this.dsList.rowposition, "CD_REGION");
        	trace(" cdRegion=>" + cdRegion);
        	switch(id) {
        		case "DHX_CFCORP" :
        			dsUserParam.setColumn(nrow, "ID_SABUN"	, this.AuthClient.ID_USER);
        			break;
        		case "DHX_COMMON_CODEFIND_SELECT":
        			dsUserParam.setColumn(nrow, "CD_SYSTEM"	, "DH");
        			dsUserParam.setColumn(nrow, "CD_TYPE"	, "V32");
        			break;
        			//법정동
        		case "DHX_COMMON_CODEFIND_SELECT2":
        			dsUserParam.setColumn(nrow, "CD_SYSTEM"	, "DH");
        			dsUserParam.setColumn(nrow, "CD_TYPE"	, "V33");
        			dsUserParam.setColumn(nrow, "DS_ETC1"	, cdRegion);
        			break;
        			//행정동
        		case "DHX_COMMON_CODEFIND_SELECT3":
        			dsUserParam.setColumn(nrow, "CD_SYSTEM"	, "DH");
        			dsUserParam.setColumn(nrow, "CD_TYPE"	, "V38");
        			dsUserParam.setColumn(nrow, "DS_ETC1"	, cdRegion);
        			break;
        		case "DZX_CFZIP_STREET" :	//귀속부서
        			break;
        	}

        	return true;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
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
        this.loadIncludeScript("DHV_LOCALTAXPLACE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
