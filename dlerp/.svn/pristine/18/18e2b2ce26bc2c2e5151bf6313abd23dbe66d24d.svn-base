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
            this.set_titletext("스포츠공동운영안분(대상조정)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_COST_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_COST_UPDATE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_COST_WRITE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_DEPT\"/><Col id=\"DT_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00","0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","rdo00:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCORP","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDEPT","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfDEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalMM.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ccfCORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfDEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_WORK.form.TextBox","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_BUIDING_DIV_COST.xfdl", function() {
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

        	this.ccfCORP.setFocus();
        	//작업년월(현재월)
        	this.ctclDT_WORK.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        	//법인코드 세션에 코드로 셋팅
        	this.ccfCORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

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
        	this.btnDataCreate = this.gfnFormButtonAdd("DataCreate", "fnDataCreate"); 	//자료생성 버튼
        	this.btnSearchSlip = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 	//전표조회 버튼
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCORP = this.divSearch.form.ccfCORP;
        	this.ccfDEPT = this.divSearch.form.ccfDEPT;
        	this.ctclDT_WORK = this.divSearch.form.ctclDT_WORK;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDEPT.CodeFindName = "DHX_BUIDING_JOIN";
        	this.ccfDEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_BUIDING_DIV_COST");
        	//this.dxGrid.set_selecttype("cell");

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("DT_WORK", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("DT_WORK", "string");
        	this.dsUpdate.addColumn("CD_SLIP", "string");
        	this.dsUpdate.addColumn("YN_DIV",  "int");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	//자료생성용 데이터셋
        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("CD_DEPT", "string");
        	this.dsCreate.addColumn("DT_WORK", "string");
        	this.dsCreate.addColumn("ID_USER", "string");

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

        	this.dsSelect.setColumn(0, "CD_CORP"	, this.ccfCORP.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "CD_DEPT"	, this.ccfDEPT.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "DT_WORK"	, this.ctclDT_WORK.form.TextBox.value);

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

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	//if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP"  , this.dsList.getColumn(i, "CD_CORP"));		//법인코드
        				this.dsUpdate.setColumn(nrow, "CD_DEPT"  , this.dsList.getColumn(i, "CD_DEPT"));		//부서코드
        				this.dsUpdate.setColumn(nrow, "DT_WORK"  , this.dsList.getColumn(i, "DT_WORK"));		//작업년월
        				this.dsUpdate.setColumn(nrow, "CD_SLIP"  , this.dsList.getColumn(i, "CD_SLIP"));		//전표번호
        				this.dsUpdate.setColumn(nrow, "YN_DIV"   , this.dsList.getColumn(i, "YN_DIV"));			//안분대상여부
        				this.dsUpdate.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);					//사용자 아이디
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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

        	if (this.gfnIsNull(this.ccfCORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCORP.form.CDTextBox.setFocus();
        		validate = false;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.ccfDEPT.form.CDTextBox.value))) {
        		this.gfnAlert("현장이 입력되지 않았습니다.");
        		this.ccfDEPT.form.CDTextBox.setFocus();
        		return;
        	}

        	if (this.gfnIsNull(this.ctclDT_WORK.form.TextBox.value)) {
        		this.gfnAlert("작업년월이 입력되지 않았습니다.");
        		this.ctclDT_WORK.form.TextBox.setFocus();
        		validate = false;
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

        		//발행된 전표가 있을경우 자료생성 버튼 비활성 처리
        // 		if(this.dsList.rowcount > 0){
        // 			if(this.dsList.findRowExpr("!dataset.parent.gfnIsNull(CD_SLIP) && nx_flag != '#'") == -1){
        // 				this.gfnSetEnable(this.btnDataCreate, true);
        // 			}else{
        // 				this.gfnSetEnable(this.btnDataCreate, false);
        // 			}
        // 		}

        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "create") {
        		if (errorCode == 0) {
        			this.gfnAlert("생성되었습니다.");
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
        	if (id == "ccfCORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "ccfDEPT") {	//현장
        		var cdCorp = this.ccfCORP.form.CDTextBox.text;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "TY_GUBUN"	, "01");			//구분
        		dsUserParam.setColumn(nrow, "CD_CORP"	, cdCorp);			//법인코드

        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	switch(id) {
        		case "ccfCORP":	//법인코드
        			this.ccfDEPT.form.fnCodeFindClear();
        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        //자료생성 처리
        this.fnDataCreate = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.ccfDEPT.form.CDTextBox.value))) {
        		this.gfnAlert("현장은 필수입니다.");
        		this.ccfDEPT.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclDT_WORK.form.TextBox.value)){
        		this.gfnAlert("작업년월은 필수입니다.");
        		this.ctclDT_WORK.form.TextBox.setFocus();
        		return;
        	}

        	this.gfnConfirm("생성 하시겠습니까?", "dataCreate_callback");

        };

        this.dataCreate_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCreate.clearData();
        		var nRow = this.dsCreate.addRow();

        		//처리할 데이터 담기
        		this.dsCreate.setColumn(nRow, "CD_CORP"  , this.ccfCORP.form.CDTextBox.value);
        		this.dsCreate.setColumn(nRow, "CD_DEPT"  , this.ccfDEPT.form.CDTextBox.value);
        		this.dsCreate.setColumn(nRow, "DT_WORK"	 , this.ctclDT_WORK.form.TextBox.value);
        		this.dsCreate.setColumn(nRow, "ID_USER"  , this.AuthClient.ID_USER);

        		var strSvcId    = "create";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "create=dsCreate";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        //전표 조회
        this.fnSearchSlip = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var cdSlip = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP")).substr(0,14);

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = cdSlip;
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHA_BUIDING_DIV_COST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
