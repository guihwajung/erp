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
            this.set_titletext("수주/사업계획");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DYAPR_SUJU_SAUP_SILJUK_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YR_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">1개년</Col></Row><Col id=\"CODE\">기타2</Col><Col id=\"VALUE\">VENDOR</Col><Row><Col id=\"CODE\">02</Col><Col id=\"VALUE\">2개년</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"VALUE\">3개년</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_MAGAM","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("계획년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_PLAN","staYR_MAGAM:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfSN_SEQ","ctclYR_PLAN:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DYX_SUJU_PLAN");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_FLAG00","ccfSN_SEQ:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("(단위 : 백만원)");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
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
            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctclYR_PLAN.form.TextBox","value","dsSearch","YR_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfSN_SEQ.form.CDTextBox","value","dsSearch","SN_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DYA_SUJU_SAUP_SILJUK.xfdl", function() {
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

        	var year1 = this.gfnGetDate().substr(0,4);
        	var year2 = this.gfnAddMonth(this.gfnGetDate(), 12).substr(0,4);
        	var year3 = this.gfnAddMonth(this.gfnGetDate(), 24).substr(0,4);

        	this.dsSearch.setColumn(0, "YR_PLAN", year1);
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
        	this.btnUpload = this.gfnFormButtonAdd("btnUpload", "fnUpload");
        	this.btnAcc = this.gfnFormButtonAdd("btnAcc", "fnAcc");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfSN_SEQ = this.divSearch.form.ccfSN_SEQ;

        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfSN_SEQ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DY", "DYA_SUJU_SAUP_SILJUK");

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	//this.dsList.addEventHandler("oncolumnchanged", this.fnGrid_ColumnChanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"      , "string");	//법인코드
        	this.dsSelect.addColumn("YR_PLAN"      , "string");
        	this.dsSelect.addColumn("SN_SEQ"      , "string");

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

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	//법인코드
        	this.dsSelect.setColumn(0, "YR_PLAN", this.dsSearch.getColumn(0, "YR_PLAN"));
        	this.dsSelect.setColumn(0, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));


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
        // 	if(this.dsList.findRow(this.ucFlag, "I") > -1){
        // 		this.gfnAlert("신규 추가된 데이터가 이미 있습니다.");
        // 		return;
        // 	}


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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.gfnAlert("소속법인을 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_PLAN"))) {
        		this.gfnAlert("계획년도를 입력 하세요.");
        		this.YR_PLAN.form.CDTextBox.setFocus();
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
        		this.fnColor();

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

        	if (id == "ccfSN_SEQ") {
        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YR_PLAN"		, this.dsSearch.getColumn(0, "YR_PLAN"));

        	}

        	return true;

        };
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfSN_SEQ.form.fnCodeFindClear();
        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	switch(id) {
        		case "DYX_SUJU_PLAN":
         			dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "YR_PLAN", this.dsSearch.getColumn(0, "YR_PLAN"));
        		break;


        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged=function(id, codeFindData){
        	if(id == "DYX_ACC_DEPT"){
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
        //  파인건설 기준으로는 뒷내용 지우지 않음.
        // 	if(e.columnid == 'LV_DEPT_ACNT'){	//레벨이 변경되었을 경우
        // 		if(!this.gfnIsNull(e.newvalue) && e.newvalue != e.oldvalue){
        // 			obj.setColumn(e.row, "CD_DEPT_UPPER", "");		//상위귀속부서코드
        // 			obj.setColumn(e.row, "DS_DEPT_ACNT_UPPER", "");	//상위귀속부서명
        // 			obj.setColumn(e.row, "CD_DEPT_SELFACNT", "");	//세무단위코드
        // 			obj.setColumn(e.row, "DS_DEPT_SELFACNT", "");	//세무단위명
        // 		}
        // 	}
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


        this.fnColor = function()
        {
        	this.dxGrid.set_enableredraw(false);

        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_1", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_2", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_3", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_A", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_4", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_5", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_6", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_B", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_7", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_8", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_9", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_C", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_10", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_11", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_12", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_D", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_SUM", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월'");

        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_1", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_2", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_3", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_A", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_4", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_5", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_6", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_B", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_7", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_8", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_9", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_C", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_10", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_11", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_12", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_D", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_SUM", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규'");



        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_1", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_2", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_3", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_A", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_4", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_5", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_6", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_B", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_7", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_8", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_9", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_C", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_10", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_11", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_12", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_D", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_SUM", "BACK,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타'");

        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_1", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_2", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_3", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_A", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_4", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_5", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_6", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_B", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_7", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_8", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_9", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_C", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_10", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_11", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_12", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_D", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_SUM", "Back_SoKe,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '소계'");

        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_1", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_2", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_3", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_A", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_4", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_5", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_6", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_B", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_7", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_8", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_9", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_C", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_10", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_11", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_12", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_D", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_SUM", "Back_KuBun,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '이월소계'");

        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_1", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_2", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_3", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_A", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_4", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_5", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_6", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_B", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_7", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_8", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_9", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_C", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_10", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_11", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_12", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_D", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_SUM", "Back_Sum,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '신규소계'");

        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_1", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_2", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_3", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_A", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_4", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_5", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_6", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_B", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_7", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_8", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_9", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_C", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_10", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_11", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_12", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_D", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_SUM", "Back_ReadOnly,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '기타소계'");

        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_1", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_2", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_3", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_A", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_4", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_5", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_6", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_B", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_7", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_8", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_9", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_C", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_10", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_11", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_12", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_D", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_SUM", "Back_Line,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '계'");

        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_1", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_2", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_3", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_A", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_4", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_5", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_6", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_B", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_7", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_8", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_9", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_C", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_10", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_11", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_12", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_D", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_MONTH01_SUM", "Back_Title,Green", "GUBUN1 == '원가율(%)'&&GUBUN4 == '누계'");


        	this.gfnGridColumnColor(this.dxGrid, "ST_PROGRESS", "Back_SoKe", "GUBUN4 == '소계'", true);
        	this.gfnGridColumnColor(this.dxGrid, "ST_PROGRESS", "Back_KuBun", "GUBUN4 == '이월소계'", true);
        	this.gfnGridColumnColor(this.dxGrid, "ST_PROGRESS", "Back_Sum", "GUBUN4 == '신규소계'", true);
        	this.gfnGridColumnColor(this.dxGrid, "ST_PROGRESS", "Back_ReadOnly", "GUBUN4 == '기타소계'", true);
        	this.gfnGridColumnColor(this.dxGrid, "ST_PROGRESS", "Back_Line", "GUBUN4 == '계'", true);
        	this.gfnGridColumnColor(this.dxGrid, "ST_PROGRESS", "Back_Title", "GUBUN4 == '누계'", true);
        	this.gfnGridColumnColor(this.dxGrid, "ST_PROGRESS", "Back_SoKe", "GUBUN4 == '영업이익(누계)'", true);
        	this.dxGrid.set_enableredraw(true);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DYA_SUJU_SAUP_SILJUK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
