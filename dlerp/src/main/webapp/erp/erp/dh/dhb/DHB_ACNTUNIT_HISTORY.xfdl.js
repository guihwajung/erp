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
            this.set_titletext("귀속부서관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHBPR_ACNTUNIT_HISTORY_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHBPR_ACNTUNIT_HISTORY_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHBPR_ACNTUNIT_HISTORY_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_USE\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_CORP:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.getSetter("CDTextWidth").set("65");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
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
            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHB_ACNTUNIT_HISTORY.xfdl", function() {
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

        	if (this.gfnIsNull(this.getOwnerFrame().CD_DEPT_ACNT)) {
        		this.dsSearch.setColumn(0, "CD_CORP", 	 this.AuthClient.CD_CORP);
        	    this.dsSearch.setColumn(0, "DS_CORP", 	 this.AuthClient.DS_CORP);
        	} else {
        		this.dsSearch.setColumn(0, "CD_CORP", 	 this.getOwnerFrame().CD_CORP);
        	    this.dsSearch.setColumn(0, "DS_CORP", 	 this.getOwnerFrame().DS_CORP);
        		this.dsSearch.setColumn(0, "CD_DEPT_ACNT", 	 this.getOwnerFrame().CD_DEPT_ACNT);
        		this.ccfCD_DEPT_ACNT.form.fnCodeFindLoad();
        		this.fnSelect();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnUser = this.gfnFormButtonAdd("btnUser", "fnUser");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	//this.rdoYN_USE = this.divSearch.form.rdoYN_USE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHB_ACNTUNIT_HISTORY");
        	this.dxGrid.set_selecttype("area");

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dsList.addEventHandler("oncolumnchanged", this.fnGrid_ColumnChanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");	//회계단위코드
        	//this.dsSelect.addColumn("TY_USE"      , "string");	//사용여부
        	this.dsSelect.addColumn("CD_CORP"      , "string");	//법인코드

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ID" , "string");
        	this.dsUpdate.addColumn("DT_CHANGE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ID" , "string");
        	this.dsDelete.addColumn("ID_TYPE" , "string");
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

        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	//this.dsSelect.setColumn(0, "TY_USE", (this.dsSearch.getColumn(0, "YN_USE") == "Y" ? "Y" : ""));
        	//this.dsSelect.setColumn(0, "TY_USE", this.dsSearch.getColumn(0, "YN_USE"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	//법인코드

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

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        this.fnSave = function()
        {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ID", this.dsList.getColumn(i, "CD_ID"));
        				this.dsUpdate.setColumn(nrow, "DT_CHANGE", this.dsList.getColumn(i, "DT_CHANGE"));
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ID", this.dsList.getColumn(i, "CD_ID"));
        				this.dsDelete.setColumn(nrow, "ID_TYPE", this.dsList.getColumn(i, "ID_TYPE"));
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0 ) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate delete=dsDelete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };

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

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("법인코드를 입력하세요!");
        		return false;
        	}

        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("귀속부서코드는 필수입니다.", "fnVaidateCallback");
        // 	}

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
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "ccfCD_DEPT_ACNT") {
        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}

        		var sYnUse = (this.dsSearch.getColumn(0, "YN_USE") == "Y") ? "Y":"%";
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        	}
        	return true;

        };
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	switch(id) {
        		case "DHX_CFUPPER_DEPT":
         			dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		break;

        		case "DHX_CFACNTUNIT_LEVELUPPER":
        			var cdDeptAcnt = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT");
        			var lvDeptAcnt = this.dsList.getColumn(this.dsList.rowposition, "LV_DEPT_ACNT");
        			//var grDeptAcnt = this.dsList.getColumn(this.dsList.rowposition, "GR_DEPT_ACNT");

        			if(this.gfnIsNull(cdDeptAcnt)) {
        				this.gfnAlert("귀속부서를 먼저 선택하세요.");
        				return false;
        			}
        			if(this.gfnIsNull(lvDeptAcnt)) {
        				this.gfnAlert("레벨을 먼저 선택하세요.");
        				return false;
        			}
        // 			if(this.gfnIsNull(grDeptAcnt)) {
        // 				this.gfnAlert("등급을 먼저 선택하세요.");
        // 				return false;
        // 			}
        			dsUserParam.setColumn(nrow, "LV_DEPT" , lvDeptAcnt);
        			//dsUserParam.setColumn(nrow, "CD_CORP" ,this.dsSearch.getColumn(0, "CD_CORP"));	//법인코드
        			dsUserParam.setColumn(nrow, "CD_CORP" ,this.dsSearch.getColumn(0, "CD_CORP"));	//법인코드
        			dsUserParam.setColumn(nrow, "CD_DEPT_ACNT", cdDeptAcnt);	//귀속부서코드

        		break;
        		case "DHX_CFSELFACNT":
        			dsUserParam.setColumn(nrow, "LV_DEPT", "");
        		break;
        		case "DHXPR_COMMON_CODEFIND_A03":
        			// 등급 DHX_CFACNTUNIT_GROUP
        			dsUserParam.setColumn(nrow, "CD_SYSTEM", "DH");
        			dsUserParam.setColumn(nrow, "CD_TYPE", "A03");
        		break;

        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged=function(id, codeFindData){
        	if(id == "DHX_CFUPPER_DEPT"){
        		var arr = codeFindData;
        		var cdCorp = "";
        		if(arr.length > 0){
        			cdCorp = arr[0]["CD_CORP"];
        		}
        		this.dsList.setColumn(this.dsList.rowposition, "CD_CORP", cdCorp);
        		this.dsList.setColumn(this.dsList.rowposition, "CD_DEPT_BUY", "");
        		this.dsList.setColumn(this.dsList.rowposition, "DS_DEPT_BUY", "");
        	}
        };

        //그리드 값변경 이벤트
        this.fnGrid_ColumnChanged = function(obj,e)
        {
        };

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
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHB_ACNTUNIT_HISTORY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
