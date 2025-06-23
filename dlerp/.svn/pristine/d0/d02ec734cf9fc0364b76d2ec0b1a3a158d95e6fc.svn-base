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
            this.set_titletext("프로젝트관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHBPR_PROJECT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DHBPR_PROJECT_SAVE</Col></Row><Row><Col id=\"TARGET\">selectCurrExchange</Col><Col id=\"SP\">DHXPR_CURRENCY_EXCHAGE</Col></Row><Row><Col id=\"TARGET\">aprv_execute</Col><Col id=\"SP\">DFBPR_PROJECT_APRV_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCurrExchange", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_CORP:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","ccfCD_DEPT_ACNT:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TO","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
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
            obj = new BindItem("item3","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboTY_FLAG","value","dsSearch","TY_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_ACNT.form.CDTextBox","value","dsSearch","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.txtCD_CON","value","dsSearch","NO_REF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.edtTY_VENDOR","value","dsSearch","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccfCD_VENDOR.form.DSTextBox","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ccfCD_ACNT.form.DSTextBox","value","dsSearch","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_DEPT_ACNT.form.DSTextBox","value","dsSearch","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHB_PROJECT.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);


        	var sCurrentDate = this.gfnGetDate();
        	//this.ctclDT_FROM.set_value((sCurrentDate.substr(0,4)+"0101"));
        	//this.ctclDT_TO.set_value(sCurrentDate);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAddNew = this.gfnFormButtonAdd("btnAddNew", "fnAddNew"); 			//프로젝트 신규 추가
        	this.btnAddChange = this.gfnFormButtonAdd("btnAddChange", "fnAddChange"); 	//프로젝트 차수 추가
        	this.btnHistory = this.gfnFormButtonAdd("btnHistory", "fnHistory"); 		//차수 정보관리
        	this.btnAprv     = this.gfnFormButtonAdd("btnAprv"    , "fnAprv");			// 결재상신 버튼
        	this.btnDocQ     = this.gfnFormButtonAdd("btnDocQ"    , "fnAprvDocQ");		// 결재문서조회 버튼
        	this.btnInit     = this.gfnFormButtonAdd("btnInit"    , "fnAprvInit");		// 결재상태초기화 버튼
        };

        this.fnButtonCheck = function (){

        	this.gfnBtnCheck(this.btnAprv	 , this.dsList);	// 결재상신
        	this.gfnBtnCheck(this.btnDocQ    , this.dsList);	// 결재문서조회
        	this.gfnBtnCheck(this.btnInit    , this.dsList);	// 결재상태초기화
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHB_PROJECT");

        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_Celldblclick, this);

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);

        	this.dsList.addEventHandler("onvaluechanged", this.dsList_onvaluechanged, this);

        	this.ccfCD_DEPT_ACNT.CodeFindName = "DHX_CFACNTUNIT";	// DHX_CFBALANCE_ACNTUNIT


        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSave.addColumn("NO_SEQ", "string");
        	this.dsSave.addColumn("DT_CHANGE", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("YN_MAIN", "string");
        	this.dsSave.addColumn("YN_DOMESTIC", "string");
        	this.dsSave.addColumn("DT_CONTRACT", "string");
        	this.dsSave.addColumn("DT_START", "string");
        	this.dsSave.addColumn("DT_COMPLETION", "string");
        	this.dsSave.addColumn("CD_CURR", "string");
        	this.dsSave.addColumn("RT_KRW_EXCH", "string");
        	this.dsSave.addColumn("AM_CONTRACT", "bigdecimal");
        	this.dsSave.addColumn("AM_COST", "bigdecimal");
        	this.dsSave.addColumn("AM_CONTRACT_KRW", "bigdecimal");
        	this.dsSave.addColumn("AM_COST_KRW", "bigdecimal");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("DS_REM", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	// 환율조회
        	this.dsSelectCurrExchange = new Dataset();
        	this.dsSelectCurrExchange.addColumn("TY_GUBUN", "string");
        	this.dsSelectCurrExchange.addColumn("CN_ROW", "int");
        	this.dsSelectCurrExchange.addColumn("VALUE", "string");
        	this.dsSelectCurrExchange.addColumn("MIN_VALUE", "string");
        	this.dsSelectCurrExchange.addColumn("DT_BASE", "string");
        	this.dsSelectCurrExchange.addColumn("CD_LOCAL_CURR", "string");
        	this.dsSelectCurrExchange.addColumn("CD_EXEC_CURR", "string");

        	// 결재
        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("TY_WRK", "string");

        	this.dsApproval.addColumn("CD_DEPT_ACNT", "string");
        	this.dsApproval.addColumn("NO_SEQ", "int");
        	this.dsApproval.addColumn("CD_CORP", "int");

        	this.dsApproval.addColumn("ID_APRV", "string");
        	this.dsApproval.addColumn("NO_APRV", "int");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0,"CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0,"CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0,"DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0,"DT_TO", this.dsSearch.getColumn(0, "DT_TO"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	this.dsList.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsList.setColumn(nrow, "DS_DEPT_ACNT", this.dsSearch.getColumn(0, "DS_DEPT_ACNT"));
        	this.dsList.setColumn(nrow, "NO_SEQ", "최초");		// 차수 ( 최초, 1,2,3)
        	this.dsList.setColumn(nrow, "YN_MAIN", "Y");		// 주간/비주간
        	this.dsList.setColumn(nrow, "YN_DOMESTIC", "Y");	// 국내/해외
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
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	//if (!this.fnGridValidate(this.dxGrid)) return;
        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        		case "I":
        		case "U":
        		case "D":
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        			this.dsSave.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        			this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        			this.dsSave.setColumn(nrow, "YN_MAIN", this.dsList.getColumn(i, "YN_MAIN"));
        			this.dsSave.setColumn(nrow, "YN_DOMESTIC", this.dsList.getColumn(i, "YN_DOMESTIC"));
        			this.dsSave.setColumn(nrow, "DT_CONTRACT", this.dsList.getColumn(i, "DT_CONTRACT"));
        			this.dsSave.setColumn(nrow, "DT_START", this.dsList.getColumn(i, "DT_START"));
        			this.dsSave.setColumn(nrow, "DT_COMPLETION", this.dsList.getColumn(i, "DT_COMPLETION"));
        			this.dsSave.setColumn(nrow, "CD_CURR", this.dsList.getColumn(i, "CD_CURR"));
        			this.dsSave.setColumn(nrow, "RT_KRW_EXCH", this.dsList.getColumn(i, "RT_KRW_EXCH"));
        			this.dsSave.setColumn(nrow, "AM_CONTRACT", this.dsList.getColumn(i, "AM_CONTRACT"));
        			this.dsSave.setColumn(nrow, "AM_COST", this.dsList.getColumn(i, "AM_COST"));
        			this.dsSave.setColumn(nrow, "AM_CONTRACT_KRW", this.dsList.getColumn(i, "AM_CONTRACT_KRW"));
        			this.dsSave.setColumn(nrow, "AM_COST_KRW", this.dsList.getColumn(i, "AM_COST_KRW"));
        			this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        			this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ")=="최초" ? 0: this.dsList.getColumn(i, "NO_SEQ"));
        			this.dsSave.setColumn(nrow, "DT_CHANGE", this.dsList.getColumn(i, "DT_CHANGE"));
        			this.dsSave.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        			this.dsSave.setColumn(nrow, "DS_REASON", this.dsList.getColumn(i, "DS_REASON"));
        			this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        			break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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

        	return false;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value))
        	{
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
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
        	else if(svcID == "selectCurrExchange") {	// 환율조회
        		if (errorCode == 0) {
        			trace("환율조회->" + this.dsCurrExchange.saveXML());

        			this.dsList.setColumn(this.dsList.rowposition, "RT_KRW_EXCH", this.dsCurrExchange.getColumn(0, "RT_KRW_EXCH"));		// 원화환율

        			if(this.dsCurrExchange.rowcount > 0){
        				// 원화 계산
        				this.fnSetAmAccouont();
        			}else{
        				// 통화, 원화환율, 집행화, 원화 금액 초기화
        				this.fnSetInitAmAcntCurr()
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if (svcID == "APRVINIT" || svcID == "APRV")
        	{
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}else{
        				// 통화, 원화환율, 집행화, 원화 금액 초기화
        				this.fnSetInitAmAcntCurr()
        			}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	if (id == "ccfCD_CORP")
        	{
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	else if (id == "ccfCD_DEPT_ACNT") {
        		if (this.gfnIsNull(sCdCorp)) {
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "02");					//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);

        	}
        	return true;

        };

        this.fnAfterCDTextChanged = function(id, codeFindData)
        {
        	var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        			this.ccfCD_VENDOR.form.fnCodeFindClear();
        			//this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        			break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	switch(id) {
        		case "DHX_CFALLVENDOR_CODEFIND":	//거래처코드
        			dsUserParam.setColumn(nrow, "CD_CORP" , cdCorp);
        			dsUserParam.setColumn(nrow, "MIN_VALUE" , "Y");	// YN_USER
        		break;
        		case "DHX_CFACNTUNIT":	//귀속부서
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");			//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");			//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);		//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");			//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "02");			//현장/본사여부
        			dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "GR_SEARCH"	    , this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        		break;
        		case "DHX_CFCURRENCY_EXCHAGE":	//통화환율

        			var sDtBase = this.dsList.getColumn(this.dsList.rowposition, "DT_CONTRACT");
        			var sCdDept = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT");
        			var sCdLocalCurr = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_LOCAL_CURR"), "KRW");	// 로컬통화

        			if (this.gfnIsNull(sCdDept)) {
        				this.gfnAlert("프로젝트코드를 선택하세요.");
        				return false;
        			}

        			if (this.gfnIsNull(sDtBase)) {
        				this.gfnAlert("계약일자를 먼저 입력하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "DT_BASE", sDtBase);
        			dsUserParam.setColumn(nrow, "CD_LOCAL_CURR", sCdLocalCurr);	// 로컬화폐단위
        			//dsUserParam.setColumn(nrow, "CD_EXEC_CURR", "");
        		break;
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	var rowPos = this.dsList.rowposition;

        	switch(id) {
        		case "DHX_CFACNTUNIT":	//귀속부서
        			if (arrData.length > 0) {
        				// 통화, 로컬환율, 원화환율, 집행화, 로컬화, 원화 금액 초기화
        				//this.dsList.setColumn(this.dsList.rowposition, "CD_CURR"  , arrData[0]["CD_LOCAL_CURR"]);
        				// 로컬환율 조회
        				this.fnSelectCurrExchange(rowPos);
        			}
        		break;

        		case "DHX_CFCURRENCY_EXCHAGE":	// 통화
        			if (arrData.length > 0) {
        				// 원화 계산
        				this.fnSetAmAccouont();
        			}
        		break;
         	}
        }


        this.fnGrid_Celldblclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	var CD_DEPT_ACNT =this.gfnTrim(this.dsList.getColumn(e.row, "CD_DEPT_ACNT"));

        	if(this.gfnIsNull(CD_DEPT_ACNT))
        	{
        		this.gfnAlert("선택된 자료가 없습니다.");
        		return false;
        	}

        	this.fnHistory();
        };

        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	if(this.gfnGridIsRow(this.dxGrid) && e.row != e.oldrow) {
        		this.fnButtonCheck();
        	}

        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnHistory = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.TY_WRK = "Q";
        	param.CD_DEPT_ACNT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT");
        	param.DS_DEPT_ACNT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_ACNT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHB_PROJECT_CHANGE", "fnPopupCallback", param);

        }

        this.fnAddNew = function(obj,e) {

        	var param = {};
        	param.TY_WRK   = "I"
        	param.CD_DEPT_ACNT = "";
        	param.DS_DEPT_ACNT = "";
        	param.NO_SEQ = 0;
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHB_PROJECT_CHANGE", "fnPopupCallback", param);

        }

        this.fnAddChange = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var nChkRow = this.dsList.findRow( "CHK", 1 );
        	if( nChkRow == -1) {
        		this.gfnAlert("차수변경할 행을 선택하세요.");
        		return false;
        	}

        	if(this.dsList.getCaseCount("CHK == 1") > 1) {
        		this.gfnAlert("차수변경할 행을 1개만 선택하세요.");
        		return false;
        	}

        // 	if( this.dsList.getColumn(nChkRow,"ST_APRV") != "4" ) {
        // 		this.gfnAlert("결재상태가 '결재완료' 상태인 경우만 차수변경 가능합니다.");
        // 		this.dsList.setColumn(nChkRow, "CHK", 0);
        // 		return false;
        // 	}
        	var param = {};
        	param.TY_WRK   = "C"
        	param.CD_DEPT_ACNT = this.dsList.getColumn(nChkRow, "CD_DEPT_ACNT");
        	param.DS_DEPT_ACNT = this.dsList.getColumn(nChkRow, "DS_DEPT_ACNT");
        	param.NO_SEQ = this.dsList.getColumn(nChkRow, "NO_SEQ")=="최초" ? 0 : nexacro.toNumber(this.dsList.getColumn(nChkRow, "NO_SEQ"));

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHB_PROJECT_CHANGE", "fnPopupCallback", param);

        }

        this.fnPopupCallback = function (svcId, sRtn)
        {
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 전자결재
         ************************************************************************/
        // 결재상신 버튼
        this.fnAprv = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var DS_DEPT_ACNT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_ACNT");
        	var NO_SEQ = String(this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ"));

        	if (this.gfnIsNull(DS_DEPT_ACNT)) {
        		return false;
        	}

        	this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        		if(isOk == false) return;
        		// ID_APRV: this.AuthClient.ID_SABUN,
        		var initParam = {
        			CD_CORP: this.dsSearch.getColumn(0, "CD_CORP"),
        			ID_AP_TYPE: "DHA02",
        			TY_WRK: "APRV",
        			ID_APRV: this.AuthClient.ID_SABUN,
        			TT_DOC: "[" + DS_DEPT_ACNT + "] 실행예산 " + (NO_SEQ == "1")? "승인의 건" : NO_SEQ + "차 변경의 건",
        			CD_CORP_SUFFIX : this.gfnGetConfig("DZ" , "CD_CORP_SUFFIX"),
        		}
        		this.gfnAprv(initParam, "fnAprvCallback", "APRV");
        	});
        }

        // 결재문서조회 버튼
        this.fnAprvDocQ = function(obj, e) {
        	var cd_corp = this.dsSearch.getColumn(0, "CD_CORP");
        	var no_aprv = this.dsList.getColumn(this.dsList.rowposition, "NO_APRV");
        	var no_doc = this.dsList.getColumn(this.dsList.rowposition, "NO_DOC");

        	if(this.gfnIsNull(no_aprv) || this.gfnIsNull(no_doc)){
        		return;
        	}

        	var oParams = {
        		CD_CORP: cd_corp,
        		NO_APRV: no_aprv,
        	}

        	trace("CD_CORP->" + cd_corp);
        	trace("NO_APRV->" + no_aprv);

        	this.gfnAprvDoc(oParams, this.fnAprvDocQCallback);
        }

        this.fnAprvDocQCallback = function() {
        	console.log('fnAprvDocQCallback');
        	//alert('fnAprvDocQCallback');
        }


        // 결재상태초기화 버튼
        this.fnAprvInit = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	//this.gfnConfirm(this.fnAprvMsg(obj), "fnAprvCallback", "APRVINIT");
        	this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        		if (isOk == false) {
        			return;
        		}
        		this.fnAprvCallback("APRVINIT", isOk);
        	});

        }

        this.fnAprvMsg = function(obj) {
        	var CD_DEPT_ACNT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT");
        	var DS_DEPT_ACNT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_ACNT");
        	var CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	var DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	var msg =  DS_DEPT_ACNT +" 프로젝트 실행예산 품의\n";
        	msg += "" + obj.text + " 하시겠습니까?";

        	return msg;
        }

        // 결재상신 버튼 콜백
        // 취소결재상신 버튼 콜백
        // 결재상태초기화 버튼 콜백
        this.fnAprvCallback = function(strId, val) {

        	this.dsApproval.clearData();
        	this.dsApproval.addRow();

        	this.dsApproval.setColumn(0, "TY_WRK",  strId);
        	this.dsApproval.setColumn(0, "CD_DEPT_ACNT", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT"));
        	this.dsApproval.setColumn(0, "NO_SEQ", this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ"));
        	this.dsApproval.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsApproval.setColumn(0, "ID_APRV", this.AuthClient.ID_SABUN);

        	if (strId == "APRV") {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsAprvOut.getColumn(0, "NO_APRV"));
        	} else {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsList.getColumn(this.dsList.rowposition, "NO_APRV"));
        	}

        	trace("결재상신 버튼 콜백!!! ->" + this.dsApproval.saveXML());

        	var strSvcId    = strId;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "aprv_execute=dsApproval";
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

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        //검색조건 변경 이벤트
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	this.fnSearchInit();
        };

        this.dsList_onvaluechanged = function(obj,e){
        	//trace("dsList_onvaluechanged " + e.columnid + " / newvalue->" + e.newvalue);
        	if(e.oldvalue == e.newvalue) return;

        	switch(e.columnid) {

        		case "CD_DEPT_ACNT" :	// 부서
        		case "CD_CURR" :	// 통화
        			if(this.gfnIsNull(e.newvalue)){
        				// 통화, 원화환율, 집행화, 원화 금액 초기화
        				this.fnSetInitAmAcntCurr();
        			}
        		break;
        		case "DT_CONTRACT" :	// 계약일자
        			if(this.gfnIsNull(e.newvalue)){
        				// 통화, 원화환율, 집행화, 원화 금액 초기화
        				this.fnSetInitAmAcntCurr();
        			}else{
        				// 환율조회
        				this.fnSelectCurrExchange(e.row);
        			}
        		break;
        		break;
        		case "AM_CONTRACT" :	// 계약금액
        		case "AM_COST" :		// 총예정공사원가

        			// 원화 계산
        			this.fnSetAmAccouont();

        		break;
        		case "AM_CONTRACT_KRW" :	// 계약금액_원화
        		case "AM_COST_KRW" :		// 총예정공사원가_원화

        			var nAmContractKrw = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONTRACT_KRW"),0);
        			var nAmCostKrw = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_COST_KRW"),0);

        			// 예정공사이익 (계약금액 - 총예정공사원가)
        			var amProfitKrw = nAmContractKrw - nAmCostKrw;
        			obj.setColumn(e.row, "AM_PROFIT_KRW", amProfitKrw);

        			// 실행이익율 ( 예정공사이익 / 계약금액)
        			//var rtProfit = (amContract == 0) ? 0 : (amProfit / amContract) * 100;
        			//obj.setColumn(e.row, "RT_PROFIT_KRW", nexacro.round(rtProfit, 2));

        			// 원가_실행이익율 ( 예정공사이익 / 계약금액)
        			var rtProfitKrw = (nAmContractKrw == 0) ? 0 : (amProfitKrw / nAmContractKrw) * 100;
        			this.dsList.setColumn(this.dsList.rowposition, "RT_PROFIT_KRW", nexacro.round(rtProfitKrw, 2));

        		break;
        	}
        }

        // 로컬환율 조회
        this.fnSelectCurrExchange = function(nRow){

        	var DT_CONTRACT = this.dsList.getColumn(nRow, "DT_CONTRACT");
        	var CD_LOCAL_CURR = this.dsList.getColumn(nRow, "CD_LOCAL_CURR");
        	var CD_EXEC_CURR = this.dsList.getColumn(nRow, "CD_CURR");
        	if( this.gfnIsNull(DT_CONTRACT) || this.gfnIsNull(CD_LOCAL_CURR) || this.gfnIsNull(CD_EXEC_CURR)){
        		return;
        	}

        	this.dsSelectCurrExchange.clearData();
        	this.dsSelectCurrExchange.addRow();

        	this.dsSelectCurrExchange.setColumn(0, "TY_GUBUN", "1");
        	this.dsSelectCurrExchange.setColumn(0, "CN_ROW", 0);
        	this.dsSelectCurrExchange.setColumn(0, "VALUE", "");
        	this.dsSelectCurrExchange.setColumn(0, "MIN_VALUE", "");
        	this.dsSelectCurrExchange.setColumn(0, "DT_BASE", DT_CONTRACT);
        	this.dsSelectCurrExchange.setColumn(0, "CD_LOCAL_CURR", CD_LOCAL_CURR);
        	this.dsSelectCurrExchange.setColumn(0, "CD_EXEC_CURR", CD_EXEC_CURR);

        	var strSvcId    = "selectCurrExchange";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectCurrExchange=dsSelectCurrExchange";
        	var outData     = "dsCurrExchange=selectCurrExchange0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        // 원화 계산
        this.fnSetAmAccouont = function(){
        	var sCdExecCurr = this.dsList.getColumn(this.dsList.rowposition, "CD_CURR");	// 집행통화단위
        	var nAmContract = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_CONTRACT"),0);	// 집행화 계약금액
        	var nAmCost = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_COST"),0);			// 집행화 총예정공사원가
        	var rtKrwExch = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "RT_KRW_EXCH"));		// 원화환율

        	var nAmContractKrw = 0;
        	var nAmCostKrw = 0;

        	trace("원화 계산 시작!!!!  계약금액:" + nAmCost + " / 총예정공사원가:" + rtKrwExch);

        	// 원화 계산
        	if(!this.gfnIsNull(sCdExecCurr)){

        		// 계약금액 원화 : 집행화 계약금액 * 원화환율
        		 if(!this.gfnIsNull(nAmContract) && nAmContract > 0 ){
        			trace("원화 계약금액 = " + "집행화 계약금액(" +nAmContract+ ") * " + "원화환율(" +rtKrwExch+ ")" );
        			nAmContractKrw = nAmContract * rtKrwExch;
        		 }

        		 // 총예정공사원가 원화 = 집행화 총예정공사원가 * 원화환율
        		 if(!this.gfnIsNull(nAmCost) && nAmCost > 0 ){
        			trace("원화 총예정공사원가 = " + "집행화 총예정공사원가(" +nAmCost+ ") * " + "원화환율(" +rtKrwExch+ ")" );
        			nAmCostKrw = nAmCost * rtKrwExch;
        		 }
        	}

        	//nexacro.round(, 0) 소수점 첫째자리
        	this.dsList.set_enableevent(false);

        	// 예정공사이익 (계약금액 - 총예정공사원가)
        	var amProfit = nAmContract - nAmCost;
        	this.dsList.setColumn(this.dsList.rowposition, "AM_PROFIT", amProfit);

        	this.dsList.setColumn(this.dsList.rowposition, "AM_CONTRACT_KRW", nexacro.floor(nAmContractKrw));	// 원화 계약금액 (소수점절삭)
        	this.dsList.setColumn(this.dsList.rowposition, "AM_COST_KRW", nexacro.floor(nAmCostKrw));			// 원화 총예정공사원가 (소수점절삭)

        	// 예정공사이익 (계약금액 - 총예정공사원가)
        	var amProfitKrw = nAmContractKrw - nAmCostKrw;
        	this.dsList.setColumn(this.dsList.rowposition, "AM_PROFIT_KRW", amProfitKrw);

         	// 원가_실행이익율 ( 예정공사이익 / 계약금액)
        	var rtProfitKrw = (nAmContractKrw == 0) ? 0 : (amProfitKrw / nAmContractKrw) * 100;
         	this.dsList.setColumn(this.dsList.rowposition, "RT_PROFIT_KRW", nexacro.round(rtProfitKrw, 2));

        	this.dsList.set_enableevent(true);
        }

        // 통화, 원화환율, 집행화, 원화 금액 초기화
        this.fnSetInitAmAcntCurr = function(){
        	trace("통화, 원화환율, 집행화, 원화 금액 초기화");

        	var nRow = this.dsList.rowposition
        	this.dsList.setColumn(nRow, "RT_KRW_EXCH"  , 0);

         	this.dsList.setColumn(nRow, "AM_CONTRACT_KRW"  , 0);	// 계약금액
         	this.dsList.setColumn(nRow, "AM_COST_KRW"  , 0);		// 총예정공사원가
        	this.dsList.setColumn(nRow, "AM_PROFIT_KRW"  , 0);		// 예정공사이익
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHB_PROJECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
