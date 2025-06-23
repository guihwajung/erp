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
            this.set_titletext("할부매출");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList1", this);
            obj.set_enableevent("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj.set_enableevent("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_INSTALLMENT_SALES_SELECT</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHAPR_INSTALLMENT_SALES_CREATE</Col></Row><Row><Col id=\"SP\">DHAPR_INSTALLMENT_SALES_AUTOSLIP</Col><Col id=\"TARGET\">issueSlip</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHAPR_INSTALLMENT_SALES_AUTOSLIP_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staItem01","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCORP","staItem01:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItem02","ccfCORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사업지");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staItem02:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItem03","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staItem03:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("아파트");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList1");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("상가");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
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
        this.registerScript("DHA_INSTALLMENT_SALES.xfdl", function() {
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

        	if (this.gfnIsNull(this.ccfCORP.form.CDTextBox.value)) {
        		this.ccfCORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	if (this.gfnIsNull(this.ctclYM_WORK.form.TextBox.value)) {
        		this.ctclYM_WORK.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        	}

        	this.ccfCORP.setFocus();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDataCreate= this.gfnFormButtonAdd("DataCreate", "fnDataCreate"); 	//자료생성 버튼
        	this.btnSearchSlip = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 	//전표조회 버튼
        	this.btnIssueSlip  = this.gfnFormButtonAdd("IssueSlip" , "fnIssueSlip"); 	//전표발행 버튼
        	this.btnCancelSlip = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 	//전표취소 버튼
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCORP = this.divSearch.form.ccfCORP;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        	this.tabData = this.divData.form.tabData;
        	this.dxGrid1 = this.divData.form.tabData.tab1.form.objGrid1;
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;

        	// 권한체크 - 해당부서내역만 조회가능
        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 2) {
        		this.ccfCorp.set_enable(false);
        	}
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_SITE.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 아파트 그리드 초기화
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DH", "DHA_INSTALLMENT_SALES");

        	var colDS_DEPT_ACNT = this.dxGrid1.getBindCellIndex("body", "DS_DEPT_ACNT");
        	this.dxGrid1.setCellProperty("body", colDS_DEPT_ACNT, "subsumtext", "소계");
        	this.dxGrid1.setCellProperty("summ", colDS_DEPT_ACNT, "textAlign", "center");
        	this.dxGrid1.setCellProperty("summ", colDS_DEPT_ACNT, "text", "총계");

        	// 상가 그리드 초기화
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DH", "DHA_INSTALLMENT_SALES");

        	var colDS_DEPT_ACNT = this.dxGrid2.getBindCellIndex("body", "DS_DEPT_ACNT");
        	this.dxGrid2.setCellProperty("body", colDS_DEPT_ACNT, "subsumtext", "소계");
        	this.dxGrid2.setCellProperty("summ", colDS_DEPT_ACNT, "textAlign", "center");
        	this.dxGrid2.setCellProperty("summ", colDS_DEPT_ACNT, "text", "총계");

        	this.dxGrid1.setFormatRowProperty( 1,"size", this.dxGrid1.getFormatRowProperty(0,"size")*2);
        	this.dxGrid2.setFormatRowProperty( 1,"size", this.dxGrid2.getFormatRowProperty(0,"size")*2);

        	// 이벤트 추가
        	this.dxGrid1.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        	this.dxGrid2.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("TY_APT", "string");
        	this.dsSelect.addColumn("ID_TRANS", "string");

        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");			//법인코드
        	this.dsIssueSlip.addColumn("CD_SITE", "string");			//사업지코드
        	this.dsIssueSlip.addColumn("YM_WORK", "string");			//작업년월
        	this.dsIssueSlip.addColumn("ID_TRANS", "string");			//사용자 아이디

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_CORP", "string");			//법인코드
        	this.dsCancelSlip.addColumn("CD_SITE", "string");			//사업지코드
        	this.dsCancelSlip.addColumn("YM_WORK", "string");			//작업년월
        	this.dsCancelSlip.addColumn("ID_TRANS", "string");			//사용자 아이디

        	this.dsDataCreate = new Dataset();
        	this.dsDataCreate.addColumn("CD_CORP", "string");			//법인코드
        	this.dsDataCreate.addColumn("CD_SITE", "string");			//사업지코드
        	this.dsDataCreate.addColumn("YM_WORK", "string");			//작업년월
        	this.dsDataCreate.addColumn("ID_INS", "string");			//사용자 아이디
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	switch(this.tabData.tabindex) {
        		case 0:
        			this.gfnGridBeforeSelect(this.dxGrid1);
        			this.dsList1.clearData();
        			break;
        		case 1:
        			this.gfnGridBeforeSelect(this.dxGrid2);
        			this.dsList2.clearData();
        			break;
        	}

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP"	, this.dsSearch.getColumn(0,"CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_SITE"	, this.dsSearch.getColumn(0,"CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK"	, this.dsSearch.getColumn(0,"YM_WORK"));
        	this.dsSelect.setColumn(0, "TY_APT"	, (this.tabData.tabindex+1));
        	this.dsSelect.setColumn(0, "ID_TRANS"	, this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList"+(this.tabData.tabindex+1)+"=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	trace("outData="+outData);
        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
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
        	var arrGrid = [], arrSheetName = [];
        	arrGrid[0] = this.dxGrid1;
        	arrGrid[1] = this.dxGrid2;

        	arrSheetName[0] = this.tabData.tab1.text;
        	arrSheetName[1] = this.tabData.tab2.text;
        	this.gfnExcelExportMulti(arrGrid,  arrSheetName, this.titletext);
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
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCORP.form.CDTextBox.setFocus();
        		validate = false;
        	}

        	if (this.gfnIsNull(this.ctclYM_WORK.form.TextBox.value)) {
        		this.gfnAlert("작업년월은 필수입니다.");
        		this.ctclYM_WORK.form.TextBox.setFocus();
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
        		var objDs, objGrid;
        		switch(this.tabData.tabindex) {
        			case 0:
        				objDs = this.dsList1;
        				objGrid = this.dxGrid1;
        				break;
        			case 1:
        				objDs = this.dsList2;
        				objGrid = this.dxGrid2;
        				break;
        		}

        		this.fnBtnEnable(objDs);

        		this.gfnGridAfterSelect(objGrid);
        	} else if(svcID == "create") {
        		if (errorCode == 0) {
        			this.gfnAlert("생성되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "issueSlip") {
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "cancelSlip" ) {
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
        	if (id == "ccfCD_SITE") {
        		var cdCorp = this.ccfCORP.form.CDTextBox.text;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "02");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	switch(id) {
        		case "ccfCORP":	//법인코드
        			this.ccfCD_SITE.form.fnCodeFindClear();
        		break;
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        /*
         *	그리드 더블클릭 이벤트
         */
        this.dxGrid_oncelldblclick = function(obj,e)
        {
        	 if(!this.gfnGridIsRow(obj)) return;
        	 var strColumnName = this.gfnGridGetBindColumnNameByIndex(obj, obj.currentcol);
        	if (strColumnName != "CD_TRADE" ) return 0;
        	this.fnSearchSlip(this.btnSearchSlip);

        };
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        //자료생성 처리
        this.fnDataCreate = function (obj,e)
        {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnConfirm("작업년월 데이터는 초기화됩니다. 생성 하시겠습니까?", "fnDataCreate_callback");
        };

         //자료생성 처리  callback
        this.fnDataCreate_callback = function(strId, val)
        {
        	if(val == true) {

        		this.dsDataCreate.clearData();
        		var nRow = this.dsDataCreate.addRow();

        		//처리할 데이터 담기
        		//처리할 데이터 담기
        		this.dsDataCreate.setColumn(nRow, "CD_CORP"		, this.dsSearch.getColumn(0,"CD_CORP"));
        		this.dsDataCreate.setColumn(nRow, "CD_SITE"		, this.gfnNvl(this.dsSearch.getColumn(0,"CD_SITE"),""));
        		this.dsDataCreate.setColumn(nRow, "YM_WORK"		, this.dsSearch.getColumn(0,"YM_WORK"));
        		this.dsDataCreate.setColumn(nRow, "ID_INS" 	    , this.AuthClient.ID_USER);

        		var strSvcId    = "create";
        		var inData      = "create=dsDataCreate";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
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
        	var objDs;
        	switch(this.tabData.tabindex) {
        		case 0:
        			objDs = this.dsList1;
        			break;
        		case 1:
        			objDs = this.dsList2;
        			break;
        	}

        	if (this.gfnIsNull(this.gfnTrim(objDs.getColumn(objDs.rowposition, "CD_TRADE")))) {
        		this.gfnAlert("생성된 전표가 없습니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnTrim(objDs.getColumn(objDs.rowposition, "CD_TRADE"));
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");
        };

        //전표발행 처리 callback
        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"		, this.dsSearch.getColumn(0,"CD_CORP"));
        		this.dsIssueSlip.setColumn(nRow, "CD_SITE"		, this.gfnNvl(this.dsSearch.getColumn(0,"CD_SITE"),""));
        		this.dsIssueSlip.setColumn(nRow, "YM_WORK"		, this.dsSearch.getColumn(0,"YM_WORK"));
        		this.dsIssueSlip.setColumn(nRow, "ID_TRANS" 	, this.AuthClient.ID_USER);

        		var strSvcId    = "issueSlip";
        		var inData      = "issueSlip=dsIssueSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
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
        	if (!this.fnSelectValidate()) return false;

        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");

        };

        //전표취소 처리 callback
        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();
        		this.dsCancelSlip.setColumn(nRow, "CD_CORP"		, this.dsSearch.getColumn(0,"CD_CORP"));
        		this.dsCancelSlip.setColumn(nRow, "CD_SITE"		, this.gfnNvl(this.dsSearch.getColumn(0,"CD_SITE"),""));
        		this.dsCancelSlip.setColumn(nRow, "YM_WORK"		, this.dsSearch.getColumn(0,"YM_WORK"));
        		this.dsCancelSlip.setColumn(nRow, "ID_TRANS" 	, this.AuthClient.ID_USER);

        		var strSvcId    = "cancelSlip";
        		var inData      = "cancelSlip=dsCancelSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
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
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화

        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
        	}
        };

        /*
         *	탭 변경시 조회
         */
        this.divData_tabData_onchanged = function(obj,e)
        {
        	this.FormBtns.Select.click();
        };

        //버튼 처리
        this.fnBtnEnable = function (objDs)
        {
        	var totCnt = 0, totSlipCnt = 0;
        	for(var i=0;i<objDs.rowcount;i++){
        		if(objDs.getColumn(i, this.ucFlag) != "#"){	//필터로우 제외
        			if(objDs.getRowLevel(i) == 0){	//소계 제외
        				if(!this.gfnIsNull(objDs.getColumn(i, "CD_TRADE"))){
        					totSlipCnt++;		//전체 전표 발행건수
        				}
        				totCnt++;	//데이터 전체 건수
        			}
        		}
        	}

        	trace("## totCnt :: "+totCnt);
        	trace("## totSlipCnt :: "+totSlipCnt);

        	if(totSlipCnt > 0){	//전표가 발행 되었을 경우
        		//그리드 비활성
        		this.dxGrid1.info = "Y";
        		this.dxGrid2.info = "Y";

        		this.gfnSetEnable(this.btnDataCreate, false);		//자료생성

        		if(totCnt == totSlipCnt){	//전표가 전부 발행되었을경우
        			this.gfnSetEnable(this.btnSearchSlip, true);	//전표조회
        			this.gfnSetEnable(this.btnIssueSlip, false);	//매출전표발행
        			this.gfnSetEnable(this.btnCancelSlip, true);	//매출전표취소
        		}
        	} else{
        		//그리드 활성
        		this.dxGrid1.info = "N";
        		this.dxGrid2.info = "N";

        		this.gfnSetEnable(this.btnDataCreate, true);
        		this.gfnSetEnable(this.btnIssueSlip, true);
        		this.gfnSetEnable(this.btnCancelSlip, false);
        		this.gfnSetEnable(this.btnSearchSlip, false);

        		if(totCnt == 0) {
        			this.gfnSetEnable(this.btnSearchSale, false);
        			this.gfnSetEnable(this.btnIssueSlip, false);
        			this.gfnSetEnable(this.btnIssueSlip, false);
        		}else{
        			this.gfnSetEnable(this.btnSearchSale, true);
        			this.gfnSetEnable(this.btnIssueSlip, true);
        			this.gfnSetEnable(this.btnIssueSlip, true);
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
        };
        this.loadIncludeScript("DHA_INSTALLMENT_SALES.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
