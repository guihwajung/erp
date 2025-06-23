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
            this.set_titletext("주상복합(모델하우스안분)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_SPLIT_SELECT</Col></Row><Row><Col id=\"TARGET\">selectHeader</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_SPLIT_SELECT_HEAD</Col></Row><Row><Col id=\"TARGET\">write</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_SPLIT_WRITE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_DEPT\"/><Col id=\"DT_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj._setContents("");
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
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCORP","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
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
        this.registerScript("DHA_BUIDING_JOIN_SPLIT.xfdl", function() {
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
        	this.btnDataCreate = this.gfnFormButtonAdd("DataCreate", "fnDataCreate"); 	//모델하우스 판관비 안분 버튼
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
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_BUIDING_JOIN_SPLIT");
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

        	this.dsWrite = new Dataset();
        	this.dsWrite.addColumn("CD_CORP", "string");
        	this.dsWrite.addColumn("CD_DEPT", "string");
        	this.dsWrite.addColumn("DT_WORK", "string");
        	this.dsWrite.addColumn("SABUN", "string");

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

        	var strSvcId    = "header";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectHeader=dsSelect";
        	var outData     = "dsHeader=selectHeader0";
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
        		if(this.dsList.getColumn(i, "YN_DIV") == "Y"){
        			var nrow = this.dsUpdate.addRow();
        			this.dsUpdate.setColumn(nrow, "CD_CORP"  , this.ccfCORP.form.CDTextBox.text);
        			this.dsUpdate.setColumn(nrow, "CD_DEPT"  , this.ccfDEPT.form.CDTextBox.text);
        			this.dsUpdate.setColumn(nrow, "DT_WORK"  , this.ctclDT_WORK.form.TextBox.value);
        			this.dsUpdate.setColumn(nrow, "CD_SLIP"  , this.dsList.getColumn(i, "CD_SLIP"));
        			this.dsUpdate.setColumn(nrow, "CD_ACCOUNT"   , this.dsList.getColumn(i, "CD_ACCOUNT"));
        			this.dsUpdate.setColumn(nrow, "YN_DIV"   , this.dsList.getColumn(i, "YN_DIV"));
        			this.dsUpdate.setColumn(nrow, "SABUN"  , this.AuthClient.ID_USER);
        		}

        	}

        	trace(this.dsUpdate.saveXML());

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "update";
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
        	if (svcID == "header") {
        		//그리드 데이터 셋팅 작업
        		this.fnGridDataSetting();

        		//데이터 조회 처리
        		this.fnDataSelect();
        	} else if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "write") {
        		if (errorCode == 0) {
        			this.gfnAlert("처리되었습니다.");
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
        		dsUserParam.setColumn(nrow, "TY_GUBUN"	, "02");			//구분
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

        	this.gfnConfirm("처리 하시겠습니까?", "dataCreate_callback");

        };

        this.dataCreate_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsWrite.clearData();
        		var nRow = this.dsWrite.addRow();

        		//처리할 데이터 담기
        		this.dsWrite.setColumn(nRow, "CD_CORP"  , this.ccfCORP.form.CDTextBox.value);
        		this.dsWrite.setColumn(nRow, "CD_DEPT"  , this.ccfDEPT.form.CDTextBox.value);
        		this.dsWrite.setColumn(nRow, "DT_WORK"	 , this.ctclDT_WORK.form.TextBox.value);
        		this.dsWrite.setColumn(nRow, "SABUN"  , this.AuthClient.ID_USER);

        		trace(this.dsWrite.saveXML());

        		var strSvcId    = "write";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "write=dsWrite";
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

        //데이터 조회 처리
        this.fnDataSelect = function()
        {
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

        //그리드 셋팅
        this.fnGridDataSetting = function ()
        {
        	var colAM_ACCOUNT = this.dxGrid.getBindCellIndex("body", "AM_ACCOUNT");	//금액 컬럼 인덱스

        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	var mjCnt = 0, taxNCnt = 0, taxYCnt = 0;
        	//컬럼 셋팅
         	for(var i=0;i<this.dsHeader.rowcount;i++){
        		//면적
        		if(this.dsHeader.getColumn(i, "SEQ") == "1") mjCnt++;
        		//면세
        		if(this.dsHeader.getColumn(i, "SEQ") == "2") taxNCnt++;
        		//과세
        		if(this.dsHeader.getColumn(i, "SEQ") == "4") taxYCnt++;
         	}

        	var colCnt = this.dxGrid.getCellCount("body");

        	//그리드 컬럼 삭제 처리(초기화용)
        	var delCnt = 0, delIdx = 0;
        	for(var i=0;i<colCnt;i++){
        		if(i > colAM_ACCOUNT){
        			delIdx = ((colCnt-1)-delCnt);
        			this.dxGrid.deleteContentsCol("body", delIdx, false);
        			delCnt++;
        		}
        	}

        	var arrCol = [];
        	//면적
        	for(var h=1;h<=mjCnt;h++){
        		arrCol[arrCol.length] = "AREA"+h;
        	}
        	//면세
        	for(var h=1;h<=taxNCnt;h++){
        		arrCol[arrCol.length] = "AM0"+h;
        		if(h == taxNCnt){
        			arrCol[arrCol.length] = "AM_TAXFREE";
        		}
        	}
        	//과세
        	for(var h=1;h<=taxYCnt;h++){
        		arrCol[arrCol.length] = "AM0"+(taxNCnt+h);
        		if(h == taxYCnt){
        			arrCol[arrCol.length] = "AM_TAX";
        		}
        	}

        	var colIdx = (colAM_ACCOUNT)+1;
        	var cols = 0;
        	var startIdx = colIdx-1;
        	var headerIdx = 0;
        	//헤더 컬럼 데이터
        	for(var h=0;h<arrCol.length;h++){

        		// 컬럼 추가(데이터셋)
        		this.dsList.addColumn(arrCol[h], "BIGDECIMAL");

        		this.dxGrid.appendContentsCol("body");

        		this.dxGrid.setCellProperty("head", colIdx, "text", this.dsHeader.getColumn(h, "H1"));
        		this.dxGrid.setCellProperty("head", (colIdx+headerIdx)+1, "text", this.dsHeader.getColumn(h, "DS_CODE"));

        		this.dxGrid.setCellProperty("body", colIdx, "text", "bind:"+arrCol[h]);	//바인딩 처리

        		this.dxGrid.setFormatColProperty(colIdx, "size", 110); 		//컬럼 사이즈

         		colIdx ++;
        		headerIdx++;
        	}

        	var mjStart = (colAM_ACCOUNT)+1;
        	var mjEnd = (mjCnt+colAM_ACCOUNT);
        	var taxNStart = mjEnd+1;
        	var taxNEnd = (taxNCnt+taxNStart);
        	var taxYStart = taxNEnd+1;
        	var taxYEnd = (taxYCnt+taxYStart);

        	// 헤더 머지 처리
        	var idx1 = this.dxGrid.mergeContentsCell("head", 0, mjStart, 0, mjEnd, 5, false);
        	var idx2 = this.dxGrid.mergeContentsCell("head", 0, taxNStart, 0, taxNEnd, (idx1+1), false);
        	var idx3 = this.dxGrid.mergeContentsCell("head", 0, taxYStart, 0, taxYEnd, (idx2+1), false);

        	this.dsList.set_enableevent(true);
        	this.dxGrid.set_enableredraw(true);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsHeader.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHA_BUIDING_JOIN_SPLIT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
