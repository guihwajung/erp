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
            this.set_titletext("직간접비배분");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_DIRECTCOST_DIV_SELECT</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHAPR_COST_CREATE</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHAPR_COST_CREATE_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHAPR_COST_CREATE_AUTOSLIP_CANCEL </Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListDc01", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListDc02", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListDc03", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACCOUNT","staYM:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TRADE","ctclYM_ACCOUNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE","staCD_TRADE:0.0","10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.getSetter("olor").set("royalblue");
            obj.set_font("bold 12px/normal \"Dotum\"");
            obj.set_readonly("true");
            obj.set_text("20210420010016");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("배부비율 산정");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staDirectCost1","4","0","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_text("1. 직접비 배부비율 산정");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGridDirectCost1","0","staDirectCost1:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("배부대상 집계");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staDirectCost2","4","0","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj.set_text("2. 직접비 배부대상 집계");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGridDirectCost2","0","staDirectCost2:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("배부");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staDirectCost3","4","0","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("2");
            obj.set_text("3. 직접비 배부");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Grid("objGridDirectCost3","0","staDirectCost3:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.ctclYM_ACCOUNT.form.TextBox","value","dsSearch","YM_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.txtCD_TRADE","value","dsList","CD_TRADE");
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
        this.registerScript("DHA_DIRECTCOST_DIV.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.gsYnDirect = "Y";	// Y직접 N간접
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
        	this.btnDataCreate = this.gfnFormButtonAdd("DataCreate", "fnDataCreate"); 	//계획생성 버튼
        	this.btnSearchSlip = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 	//전표조회 버튼
        	this.btnIssueSlip  = this.gfnFormButtonAdd("IssueSlip" , "fnIssueSlip"); 	//전표발행 버튼
        	this.btnCancelSlip = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 	//전표취소 버튼
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclYM_ACCOUNT = this.divSearch.form.ctclYM_ACCOUNT;

        	this.tabData = this.divData.form.tabData;

        	//this.dxGrid = this.divData.form.objGrid;
        	this.dxGridDc1 = this.divData.form.tabData.tab1.form.objGridDirectCost1;
        	this.dxGridDc2 = this.divData.form.tabData.tab2.form.objGridDirectCost2;
        	this.dxGridDc3 = this.divData.form.tabData.tab3.form.objGridDirectCost3;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//법인코드
        	this.ccfCD_CORP.BeforeUserDataSetParam      = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged          = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGridDc1, this.dsListDc01, "DH", "DHA_DIRECTCOST_RATE");		// 직접비배부비율
        	this.gfnGridInit(this.dxGridDc2, this.dsListDc02, "DH", "DHA_DIRECTCOST_TARGET");	// 직접비배부대상
        	this.gfnGridInit(this.dxGridDc3, this.dsListDc03, "DH", "DHA_DIRECTCOST_DIV");		// 직접비배부
        	this.fnSetGridSummText();

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        	this.dsSearch.setColumn(0, "YM_ACCOUNT", this.gfnGetDate().substring(0, 6));
        };


        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	//법인코드
        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {
        		case "ccfCD_CORP" :
        			break;
        	}
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"     , "string");
        	this.dsSelect.addColumn("YM_ACCOUNT"  , "string");
        	this.dsSelect.addColumn("YN_DIRECT"   , "string");

        	//데이터 생성용 데이터셋
        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP"     , "string");
        	this.dsCreate.addColumn("YM_ACCOUNT"  , "string");
        	this.dsCreate.addColumn("YN_DIRECT"   , "string");
        	this.dsCreate.addColumn("ID_SABUN", "string");

        	//전표발행용 데이터셋
        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");
        	this.dsIssueSlip.addColumn("YM_ACCOUNT", "string");
        	this.dsIssueSlip.addColumn("YN_DIRECT", "string");
        	this.dsIssueSlip.addColumn("CD_DEPT_BH", "string");
        	this.dsIssueSlip.addColumn("ID_TRANS", "string");

        	//전표취소용 데이터셋
        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_TRADE"  , "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YM_ACCOUNT"  , this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	this.dsSelect.setColumn(0, "YN_DIRECT"  , this.gsYnDirect);		// Y직접 N간접

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsListDc01=select1 dsListDc02=select2 dsListDc03=select3";
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

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("법인코드를 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_ACCOUNT")) ) {
        		this.gfnAlert("작업년월은 반드시 입력 하셔야 합니다.");
        		this.ctclYM_ACCOUNT.setFocus();
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
        	switch(svcID) {
        	case "select" :
        			//this.gfnGridAfterSelect(this.dxGrid);
        			//전표번호가 없을경우 버튼처리
        			if(this.gfnIsNull(this.dsList.getColumn(0, "CD_TRADE"))){
        				this.btnDataCreate.set_enable(true);
        				this.btnSearchSlip.set_enable(false);
        				this.btnIssueSlip.set_enable(true);
        				this.btnCancelSlip.set_enable(false);
        			}else{
        			// 전표번호 있음
        				this.btnDataCreate.set_enable(false);
        				this.btnSearchSlip.set_enable(true);
        				this.btnIssueSlip.set_enable(false);
        				this.btnCancelSlip.set_enable(true);
        			}

        			break;
        	case "create" :
        		if (errorCode == 0) {
        			this.gfnAlert("생성되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "issueSlip" :
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "cancelSlip" :
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
         //자료생성 처리
        this.fnDataCreate = function (obj,e)
        {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnConfirm("자료생성을 생성 하시겠습니까?", "dataCreate_callback");

        };

        this.dataCreate_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCreate.clearData();
        		var nRow = this.dsCreate.addRow();

        		//처리할 데이터 담기
        		this.dsCreate.setColumn(nRow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsCreate.setColumn(nRow, "YM_ACCOUNT"  , this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        		this.dsCreate.setColumn(nRow, "YN_DIRECT"  , this.gsYnDirect);
        		this.dsCreate.setColumn(nRow, "ID_SABUN"    , this.AuthClient.ID_USER);

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

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	if (!this.fnSelectValidate()) return false;
        	if(this.dsListDc03.rowcount == 0) return;

        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");

        };

        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsIssueSlip.setColumn(nRow, "YM_ACCOUNT"  , this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        		this.dsIssueSlip.setColumn(nRow, "YN_DIRECT"  , this.gsYnDirect);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_BH"   , this.AuthClient.CD_DEPT);
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

        	if (!this.fnSelectValidate()) return false;

        	var sCdTrade = this.gfnTrim(this.dsList.getColumn(0, "CD_TRADE"));
        	if (this.gfnIsNull(sCdTrade)) {
        		this.gfnAlert("전표번호는 필수입니다.");
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
        		this.dsCancelSlip.setColumn(nRow, "CD_TRADE", this.dsList.getColumn(0, "CD_TRADE"));

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
        	var sCdTrade = this.gfnTrim(this.dsList.getColumn(0, "CD_TRADE"));
        	if (this.gfnIsNull(sCdTrade)) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = sCdTrade;
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        this.fnPopupCallBack = function(strId, val) {
        	this.FormBtns.Select.click();
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         this.dsSearch_onvaluechanged = function(obj,e) {

        	if(e.oldvalue != e.newvalue) {
        		var nTabIdx = this.divData.form.tabData.tabindex;

        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnsetFormInit();
           }
        }

        this.gfnsetFormInit  = function(){

        	this.gfnGridClear(this.dxGridDc1);	// 직접비배부비율
        	this.gfnGridClear(this.dxGridDc2);	// 직접비배부대상
        	this.gfnGridClear(this.dxGridDc3);	// 직접비배부

        	this.fnSetGridSummText();

        	// 버튼 비활성화
        	this.btnDataCreate.set_enable(false);
        	this.btnSearchSlip.set_enable(false);
        	this.btnIssueSlip.set_enable(false);
        	this.btnCancelSlip.set_enable(false);
        }

        this.divData_tabData_onchanged = function(obj,e)
        {
        };

        this.fnSetGridSummText = function(){
        	var colDS_DEPT1 = this.dxGridDc1.getBindCellIndex("body", "DS_DEPT");
        	this.dxGridDc1.setCellProperty("summ", colDS_DEPT1, "text", "합계");

        	var colDS_DEPT3 = this.dxGridDc3.getBindCellIndex("body", "DS_DEPT");
        	this.dxGridDc3.setCellProperty("summ", colDS_DEPT3, "text", "합계");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_DIRECTCOST_DIV.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
