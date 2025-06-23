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
            this.set_titletext("스포츠공동운영안분(확정)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_DIV_SELECT</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_DIV_WRITE</Col></Row><Row><Col id=\"SP\">DHAPR_BUIDING_JOIN_DIV_HEADER_SELECT</Col><Col id=\"TARGET\">selectHeader</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_DIV_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_DIV_CANCELSLIP</Col></Row><Row><Col id=\"TARGET\">cdSlipSelect</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_DIV_CD_TRADE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_DEPT\"/><Col id=\"DT_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCdSlip", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCdSlip","837","0","433","245",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #6b6b6b");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","41","10",null,"17","42",null,null,null,null,null,this.pdvCdSlip.form);
            obj.set_taborder("0");
            obj.set_text("전표번호를 선택하세요.");
            obj.set_textAlign("center");
            this.pdvCdSlip.addChild(obj.name, obj);

            obj = new Grid("grd","10","40",null,null,"13","45",null,null,null,null,this.pdvCdSlip.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsCdSlip");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현장코드\"/><Cell col=\"1\" text=\"전표번호\"/><Cell col=\"2\" text=\"거래처\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_DEPT\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CD_TRADE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DS_VENDOR\"/></Band></Format></Formats>");
            this.pdvCdSlip.addChild(obj.name, obj);

            obj = new Button("btnConfirm","160","210","60","21",null,null,null,null,null,null,this.pdvCdSlip.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.pdvCdSlip.addChild(obj.name, obj);

            obj = new Button("btnCancel","230","210","60","21",null,null,null,null,null,null,this.pdvCdSlip.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.pdvCdSlip.addChild(obj.name, obj);
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
        this.registerScript("DHA_BUIDING_DIV_CONFIRM.xfdl", function() {
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
        	this.btnSearchSlip = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 	//전표조회 버튼
        	this.btnIssueSlip  = this.gfnFormButtonAdd("IssueSlip" , "fnIssueSlip"); 	//전표발행 버튼
        	this.btnCancelSlip = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 	//전표취소 버튼
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFormButton = this.gfnFormButtonAdd("DataCreate", "fnDataCreate"); 	//생성및배부 버튼
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
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_BUIDING_DIV_CONFIRM");
        	//this.dxGrid.set_selecttype("cell");

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	var colDS_DEPT = this.dxGrid.getBindCellIndex("body", "GUBUN1");
        	this.dxGrid.setCellProperty("body", colDS_DEPT, "expr", "expr:dataset.getRowLevel(currow)==1?'합계':GUBUN1");


        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("DT_WORK", "string");

        	this.dsCdSlipSelect = new Dataset();
        	this.dsCdSlipSelect.addColumn("CD_DEPT", "string");
        	this.dsCdSlipSelect.addColumn("DT_WORK", "string");

        	//생성및배부용 데이터셋
        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("CD_DEPT", "string");
        	this.dsCreate.addColumn("DT_WORK", "string");
        	this.dsCreate.addColumn("ID_USER", "string");

        	//전표발행용 데이터셋
        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP"   	, "string");	//법인코드
        	this.dsIssueSlip.addColumn("CD_DEPT_BH"	, "string");	//발행부서
        	this.dsIssueSlip.addColumn("CD_DEPT"	, "string");	//현장코드
        	this.dsIssueSlip.addColumn("DT_WORK"	, "string");	//작업년월
        	this.dsIssueSlip.addColumn("ID_TRANS"	, "string");	//사용자 아이디

        	//전표취소용 데이터셋
        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_DEPT"	, "string");	//현장코드
        	this.dsCancelSlip.addColumn("DT_WORK"	, "string");	//작업년월
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

        		//데이터 조회 처리
        		this.fnDataSelect();
        	} else if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.dsList.set_keystring("S:-nx_sort,G:CD_GUBUN");

        	} else if(svcID == "create") {
        		if (errorCode == 0) {
        			this.gfnAlert("생성되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "cdSlipSelect") {
        		this.fnCdSlipPopup();
        	}else if(svcID == "issueSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "cancelSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소 되었습니다.");
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

        //생성 및 배부 처리
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

        this.fnGridSubSum = function (currow, colId)
        {
        	var sum = 0;
        	if(this.dsList.getRowLevel(currow) == 1){
        		var gubun = this.dsList.getColumn(currow-1, "CD_GUBUN");
        		sum = this.dsList.getCaseSum("CD_GUBUN == '"+gubun+"' && DS_ACCOUNT == '계'", colId);
        	}else{
        		sum = nexacro.toNumber(this.dsList.getColumn(currow, colId));
        		//sum = "bind:SUM_AM_SUPPLY";
        	}

        	return sum;
        };

        /*
        //그리드 셋팅
        this.fnGridDataSetting = function ()
        {
        	var colSUM = this.dxGrid.getBindCellIndex("body", "SUM_AM_SUPPLY");	//안분대상금액 컬럼 인덱스

        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	//안분대상금액 합계 계산 처리
        	//this.dxGrid.setCellProperty("body", colSUM, "text", "expr:comp.parent.parent.parent.fnGridSubSum(rowidx, 'SUM_AM_SUPPLY')");
        	this.dxGrid.setCellProperty("body", colSUM, "expr", "expr:comp.parent.parent.parent.fnGridSubSum(rowidx, 'SUM_AM_SUPPLY')");

        	var tempCol = 5, hColIdx = 1;

        	trace("colSUM :: "+colSUM);

        	//컬럼 숨기기
        	for(var i=0;i<tempCol;i++){
        		var hideCol = (colSUM + i)+1;
         		this.dxGrid.setFormatColProperty(hideCol, "size", 0);

        		trace("hideCol :: "+hideCol);
        	}

        	this.dxGrid.setCellProperty( "head", (colSUM+1), "text", "안분금액");	//헤더 텍스트
        	this.dxGrid.setCellProperty( "head", (colSUM+2), "text", "");	//헤더 텍스트
        	this.dxGrid.setCellProperty( "head", (colSUM+3), "text", "");	//헤더 텍스트
        	this.dxGrid.setCellProperty( "head", (colSUM+4), "text", "");	//헤더 텍스트
        	this.dxGrid.setCellProperty( "head", (colSUM+5), "text", "");	//헤더 텍스트
        	this.dxGrid.setCellProperty( "head", (colSUM+6), "text", "");	//헤더 텍스트

        	//헤더 컬럼 데이터
        	for(var h=0;h<this.dsHeader.rowcount;h++){
        		var colIdx = (colSUM + hColIdx)+1;
        		var showCol = (colSUM + h)+1;
        		var hearderText = this.dsHeader.getColumn(h, "DS_VENDOR") + "(" + this.gfnNvl(this.dsHeader.getColumn(h, "RT_SHARE"),"0") + "%)";


        		this.dsList.updateColID(colIdx, this.dsHeader.getColumn(h, "CD_VENDOR"));	//데이터셋 컬럼명 변경

        		this.dxGrid.setCellProperty( "head", colIdx+1, "text", hearderText);	//헤더 텍스트
        		//this.dxGrid.setCellProperty( "body", (colIdx-1), "text", "bind:"+this.dsHeader.getColumn(h, "CD_VENDOR"));	//바인딩 처리

        		//안분대상금액 합계 계제외 계산 처리
        		this.dxGrid.setCellProperty("body", (colIdx-1), "expr", "expr:comp.parent.parent.parent.fnGridSubSum(rowidx, '"+this.dsHeader.getColumn(h, "CD_VENDOR")+"')");

        		this.dxGrid.setFormatColProperty(showCol, "size", 180); //컬럼 보이기
        		hColIdx++;
        	}

        	this.dsList.set_enableevent(true);
        	this.dxGrid.set_enableredraw(true);

        	//this.dxGrid.setCellProperty("body", colSUM, "expr", "expr:dataset.getRowLevel(currow)==1?comp.parent.fnGridSubSum(currow):SUM_AM_SUPPLY");
        };
        */

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
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

        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");

        };

        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"	  , this.ccfCORP.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_BH" , this.ccfDEPT.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT"	  , this.ccfDEPT.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "DT_WORK" 	  , this.ctclDT_WORK.form.TextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "ID_TRANS"   , this.AuthClient.ID_USER);

        		var strSvcId    = "issueSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "issueSlip=dsIssueSlip";
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

        //전표취소 처리
        this.fnCancelSlip = function (obj,e)
        {
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

        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");

        };

        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();

        		//처리할 데이터 담기
        		this.dsCancelSlip.setColumn(nRow, "CD_DEPT"	 , this.ccfDEPT.form.CDTextBox.value);
        		this.dsCancelSlip.setColumn(nRow, "DT_WORK"  , this.ctclDT_WORK.form.TextBox.value);

        		var strSvcId    = "cancelSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "cancelSlip=dsCancelSlip";
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

        //전표 조회
        this.fnSearchSlip = function (obj,e)
        {
        	this.dsCdSlipSelect.clearData();
        	this.dsCdSlipSelect.addRow();

        	this.dsCdSlipSelect.setColumn(0, "CD_DEPT", this.ccfDEPT.form.CDTextBox.value);
        	this.dsCdSlipSelect.setColumn(0, "DT_WORK", this.ctclDT_WORK.form.TextBox.value);

        	var strSvcId    = "cdSlipSelect";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "cdSlipSelect=dsCdSlipSelect";
        	var outData     = "dsCdSlip=cdSlipSelect0";
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

        //전표번호 팝업 호출
        this.fnCdSlipPopup = function() {
        	var nTop  = this.btnSearchSlip.getOffsetHeight()-30;
        	var nLeft = this.btnSearchSlip.getOffsetLeft();

        	//팝업 레이터 호출
        	this.pdvCdSlip.trackPopupByComponent(this, nLeft, nTop, null, null, "fnCdSlipPopupCallback");
        };

        //전표번호 팝업 호출
        this.fnCdSlipPopupCallback = function(strId, val) {

        };

        //전표번호 팝업 확인 버튼 클릭
        this.pdvCdSlip_btnConfirm_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsCdSlip.getColumn(this.dsCdSlip.rowposition, "CD_TRADE"))){
        		this.gfnAlert("전표번호는 필수입니다.");
        	}else{
        		//전표조회 팝업 호출
        		this.fnIssueSlipPopup(this.dsCdSlip.getColumn(this.dsCdSlip.rowposition,"CD_TRADE"));

        		this.pdvCdSlip.closePopup();
        	}
        };

        //전표번호 팝업 취소 버튼 클릭
        this.pdvCdSlip_btnCancel_onclick = function(obj,e)
        {
        	this.pdvCdSlip.closePopup();
        };

        //전표번호 팝업 그리드 더블클릭
        this.pdvCdSlip_grd_oncelldblclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsCdSlip.getColumn(e.row,"CD_TRADE"))){
        		this.gfnAlert("전표번호는 필수입니다.");
        	}else{
        		//전표조회 팝업 호출
        		this.fnIssueSlipPopup(this.dsCdSlip.getColumn(e.row,"CD_TRADE"));
        		this.pdvCdSlip.closePopup();
        	}
        };

        //전표조회 팝업 호출
        this.fnIssueSlipPopup = function (cdTerade)
        {
        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnTrim(cdTerade);
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        };

        //그리드 셋팅
        this.fnGridDataSetting = function ()
        {
        	var colSUM = this.dxGrid.getBindCellIndex("body", "SUM_AM_SUPPLY");	//안분대상금액 컬럼 인덱스

        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	//안분대상금액 합계 계산 처리
        	this.dxGrid.setCellProperty("body", colSUM, "expr", "expr:comp.parent.parent.parent.fnGridSubSum(rowidx, 'SUM_AM_SUPPLY')");

        	trace("colSUM :: "+colSUM);

        	var colCnt = this.dxGrid.getCellCount("body");

        	var delCnt = 0, delIdx = 0;
        	//컬럼 숨기기
        	for(var i=0;i<colCnt;i++){
        		if(i > colSUM){
        			delIdx = ((colCnt-1)-delCnt);

        			var colID = this.dxGrid.deleteContentsCol("body", delIdx, false);

        			trace("삭제 colID :: "+colID);
        			trace("delIdx :: "+delIdx);

        			delCnt++;
        		}
        	}

        	var cellIndex = colSUM + 1;
        	//헤더 컬럼 데이터
        	for(var h=0;h<this.dsHeader.rowcount;h++){

        		var hearderText = this.dsHeader.getColumn(h, "DS_VENDOR") + "(" + this.gfnNvl(this.dsHeader.getColumn(h, "RT_SHARE"),"0") + "%)";

        		// 컬럼 추가(데이터셋)
        		this.dsList.addColumn(this.dsHeader.getColumn(h, "CD_VENDOR"), "BIGDECIMAL");

        		//그리드 컬럼 추가
        		this.dxGrid.appendContentsCol("body");

        		trace("hearderText :: "+hearderText);
        		trace("cellIndex :: "+cellIndex);

        		//this.dsList.updateColID(colIdx, this.dsHeader.getColumn(h, "CD_VENDOR"));	//데이터셋 컬럼명 변경
        		this.dxGrid.setCellProperty("head", cellIndex, "text", "안분금액");
        		this.dxGrid.setCellProperty("head", (cellIndex+h)+1, "text", hearderText);	//헤더 텍스트
        		this.dxGrid.setCellProperty("body", cellIndex, "text", "bind:"+this.dsHeader.getColumn(h, "CD_VENDOR"));	//바인딩 처리
        		this.dxGrid.setCellProperty("body", cellIndex, "displaytype", "mask");
        		this.dxGrid.setCellProperty("body", cellIndex, "maskeditformat", "#,##0");
        		this.dxGrid.setCellProperty("body", cellIndex, "cssclass", "expr:dataset.getRowLevel(currow) == 1 ? 'subtotal': nx_flag == '#' ? 'filter' : ''");
        		this.dxGrid.setCellProperty("body", cellIndex, "edittype", "expr:nx_flag=='#'?'text':'none'");

        		//안분대상금액 합계 계제외 계산 처리
        		this.dxGrid.setCellProperty("body", cellIndex, "expr", "expr:comp.parent.parent.parent.fnGridSubSum(rowidx, '"+this.dsHeader.getColumn(h, "CD_VENDOR")+"')");

        		this.dxGrid.setFormatColProperty(cellIndex, "size", 180); //컬럼 보이기

        		cellIndex++;
        	}

        	this.dxGrid.mergeContentsCell("head", 0, (colSUM + 1), 0, (cellIndex-1), (cellIndex-1), false);	//안분금액 병합

        	this.dxGrid.set_enableredraw(true);
        	this.dsList.set_enableevent(true);

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.pdvCdSlip.form.grd.addEventHandler("oncelldblclick",this.pdvCdSlip_grd_oncelldblclick,this);
            this.pdvCdSlip.form.btnConfirm.addEventHandler("onclick",this.pdvCdSlip_btnConfirm_onclick,this);
            this.pdvCdSlip.form.btnCancel.addEventHandler("onclick",this.pdvCdSlip_btnCancel_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsHeader.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHA_BUIDING_DIV_CONFIRM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
