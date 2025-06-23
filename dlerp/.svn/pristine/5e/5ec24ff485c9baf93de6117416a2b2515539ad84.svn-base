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
            this.set_titletext("판관비집계표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_SUMMARY_SELECT</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_SUMMARY_WRITE</Col></Row><Row><Col id=\"SP\">DHAPR_BUIDING_JOIN_SUMMARY_SELECT_HEAD</Col><Col id=\"TARGET\">selectHeader</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_DEPT\"/><Col id=\"DT_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSORT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">계정명</Col></Row><Row><Col id=\"DS_CODE\">금액 오름차순</Col><Col id=\"CD_CODE\">1</Col></Row><Row><Col id=\"DS_CODE\">금액 내림차순</Col><Col id=\"CD_CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCORP","sta01:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ccfCORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("현장");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDEPT","sta02:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","ccfDEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_WORK","sta03:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","ctclDT_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSORT","sta04:0.0","10.0","9.31%","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsSORT");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("계정명");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
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

            obj = new BindItem("item3","divSearch.form.cboSORT","value","dsSearch","SORT");
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
        this.registerScript("DHA_BUIDING_JOIN_SUMMARY.xfdl", function() {
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
        	// 그리드 헤더 조회
        	this.fnHeaderSelect();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDataCreate= this.gfnFormButtonAdd("DataCreate", "fnDataCreate"); 	//집계표생성 버튼
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
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_BUIDING_JOIN_SUMMARY");
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","DS_ACCOUNT"), "cssclass", "expr:DS_ACCOUNT==' 합  계 ' || DS_ACCOUNT==' 총 합 계 '? 'update':''");
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","AM_SPLIT"), "cssclass", "expr:DS_ACCOUNT==' 합  계 ' || DS_ACCOUNT==' 총 합 계 '? 'update':''");

        	// 이벤트 추가
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("DT_WORK", "string");
        	this.dsSelect.addColumn("SORT", "string");


        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("CD_DEPT", "string");
        	this.dsCreate.addColumn("DT_WORK", "string");
        	this.dsCreate.addColumn("SABUN", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         //데이터 조회 처리
        this.fnSelect = function()
        {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP"	, this.dsSearch.getColumn(0,"CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_DEPT"	, this.dsSearch.getColumn(0,"CD_DEPT"));
        	this.dsSelect.setColumn(0, "DT_WORK"	, this.dsSearch.getColumn(0,"DT_WORK"));
        	this.dsSelect.setColumn(0, "SORT"	    , this.dsSearch.getColumn(0,"SORT"));

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
        };


        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

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

        	if (this.gfnIsNull(this.ccfDEPT.form.CDTextBox.text)) {
        		this.gfnAlert("현장코드가 입력되지 않았습니다.");
        		this.ccfDEPT.form.CDTextBox.setFocus();
        		validate = false;
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

        	if(svcID == "header"){
        		//그리드 데이터 셋팅 작업
        		this.fnGridDataSetting();
        	} else if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "create") {
        		if (errorCode == 0) {
        			this.gfnAlert("생성 되었습니다.");
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
         /*
          *	헤더 조회 버튼
          */
        this.fnHeaderSelect = function() {

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

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
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 집계표 생성 처리
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
        		this.dsCreate.setColumn(nRow, "CD_CORP"  , this.dsSearch.getColumn(0,"CD_CORP"));
        		this.dsCreate.setColumn(nRow, "CD_DEPT"  , this.dsSearch.getColumn(0,"CD_DEPT"));
        		this.dsCreate.setColumn(nRow, "DT_WORK"	 , this.dsSearch.getColumn(0,"DT_WORK"));
        		this.dsCreate.setColumn(nRow, "SABUN"  , this.AuthClient.ID_USER);

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


        //그리드 셋팅
        this.fnGridDataSetting = function ()
        {

        	var ncol = 0;

        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	// 동적으로 생성한 그리드 컬럼 삭제
        	for ( var i =this.dxGrid.getCellCount("body")-1; -1 < i ; i--){
        		if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, i) != "AM_SPLIT" && this.gfnGridGetBindColumnNameByIndex( this.dxGrid, i).search("AM_SPLIT") > -1){
        			this.dxGrid.deleteContentsCol("body",i);
        		}
        	}

        	// 동적으로 생성한 데이터셋 컬럼 삭제
        	for ( var i =this.dsList.colcount-1; -1 < i ; i--){
        		if( this.dsList.getColID(i) != "AM_SPLIT" && this.dsList.getColID(i).search("AM_SPLIT") > -1 ){
        			this.dsList.deleteColumn(i);
        		}
        	}


        	// 그리드,데이터셋에 동적컬럼 생성
        	for( var i = 0; i < this.dsHeader.rowcount; i++ ){
        		var objColinfo = new ColumnInfo() ;
        		objColinfo.set_type( "BIGDECIMAL" );
        		objColinfo.set_size( 256 );

        		this.dsList.addColumnInfo("AM_SPLIT"+this.dsHeader.getColumn(i,"NO"),objColinfo);

        		ncol = this.dxGrid.appendContentsCol();
        		this.dxGrid.setFormatColProperty(ncol, "size", 170);
        		this.dxGrid.setCellProperty("head", ncol, "text", this.dsHeader.getColumn(i,"DS_DEPT_ACNT"));
        		this.dxGrid.setCellProperty("body", ncol, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol, "text", "bind:" + "AM_SPLIT"+this.dsHeader.getColumn(i,"NO"));
        		this.dxGrid.setCellProperty("summ", ncol, "displaytype", "number");
        		this.dxGrid.setCellProperty("summ", ncol , "text", "expr:dataset.getSum('AM_SPLIT" + this.dsHeader.getColumn(i,"NO"));
        		this.dxGrid.setCellProperty( "body", ncol, "cssclass", "expr:DS_ACCOUNT==' 합  계 ' || DS_ACCOUNT==' 총 합 계 '? 'update':''");
        	}

        	this.dxGrid.set_enableredraw(true);
        	this.dsList.set_enableevent(true);
        };

        //검색조건 변경 이벤트
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
        };
        this.loadIncludeScript("DHA_BUIDING_JOIN_SUMMARY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
