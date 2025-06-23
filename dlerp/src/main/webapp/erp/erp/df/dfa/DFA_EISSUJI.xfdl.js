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
            this.set_titletext("경영수지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFAPR_EISSUJI_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PERIOD","ccfCD_CORP:0.0","10.0",null,"24.0","859",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("calYM_WORK","staCD_PERIOD:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01",null,"5","78","20","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("단위 : 백만원");
            obj.set_textDecoration("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.calYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
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
        this.registerScript("DFA_EISSUJI.xfdl", function() {
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
        	this.fnSetCombo();

        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.fnCodeFindLoad();
        	//당월
        	var today = this.gfnGetDate().substring(0,6);
        	this.calYM_WORK.form.TextBox.set_value(today);

        	this.FormBtns.Select.click();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnCreateData = this.gfnFormButtonAdd("btnCreateData", "fnCreateData", "자료생성");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드
        	this.calYM_WORK = this.divSearch.form.calYM_WORK;	// 계획년월

        	this.dxGrid = this.divData.form.objGrid;		// 그리드
        	this.grSearch = this.FormInfo.GR_SEARCH;		// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;			// 그룹코드
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DZX_CFCORP";	// 법인코드

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFA_EISSUJI");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	// 법인코드세션
        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        // 		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        // 	}

        	// 법인코드 포커스추가
        	this.ccfCD_CORP.form.CDTextBox.setFocus();
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");

        // 	this.dsCreate = new Dataset();
        // 	this.dsCreate.addColumn("YM_PLAN", "string");
        // 	this.dsCreate.addColumn("CD_CORP", "string");
        //
        // 	this.dsUpdate = new Dataset();
        // 	this.dsUpdate.addColumn("YM_PLAN", "string");
        // 	this.dsUpdate.addColumn("CD_CORP", "string");
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
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));

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
        // 	if (!this.gfnGridValidate(this.dxGrid)) return;
        //
        // 	this.dxGrid.updateToDataset();
        //
        // 	this.dsUpdate.clearData();
        //
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList, i);
        // 		switch(flag) {
        //
        // 			case "U":
        // 				var nrow = this.dsUpdate.addRow();
        // 				this.dsUpdate.setColumn(nrow, "YM_PLAN", this.dsSearch.getColumn(0, "YM_PLAN"));
        // 				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        // 				this.dsUpdate.setColumn(nrow, "YM_MONTH", this.dsList.getColumn(i, "YM_MONTH"));
        // 				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        // 				this.dsUpdate.setColumn(nrow, "CD_SUJI", this.dsList.getColumn(i, "CD_SUJI"));
        // 				this.dsUpdate.setColumn(nrow, "YN_FINAL", this.dsList.getColumn(i, "YN_FINAL"));
        // 				this.dsUpdate.setColumn(nrow, "AM_01", this.dsList.getColumn(i, "AM_01"));
        // 				this.dsUpdate.setColumn(nrow, "AM_02", this.dsList.getColumn(i, "AM_02"));
        // 				this.dsUpdate.setColumn(nrow, "AM_03", this.dsList.getColumn(i, "AM_03"));
        // 				this.dsUpdate.setColumn(nrow, "AM_04", this.dsList.getColumn(i, "AM_04"));
        // 				this.dsUpdate.setColumn(nrow, "AM_05", this.dsList.getColumn(i, "AM_05"));
        // 				this.dsUpdate.setColumn(nrow, "AM_06", this.dsList.getColumn(i, "AM_06"));
        // 				this.dsUpdate.setColumn(nrow, "AM_07", this.dsList.getColumn(i, "AM_07"));
        // 				this.dsUpdate.setColumn(nrow, "AM_08", this.dsList.getColumn(i, "AM_08"));
        // 				this.dsUpdate.setColumn(nrow, "AM_09", this.dsList.getColumn(i, "AM_09"));
        // 				this.dsUpdate.setColumn(nrow, "AM_10", this.dsList.getColumn(i, "AM_10"));
        // 				this.dsUpdate.setColumn(nrow, "AM_11", this.dsList.getColumn(i, "AM_11"));
        // 				this.dsUpdate.setColumn(nrow, "AM_12", this.dsList.getColumn(i, "AM_12"));
        // 				this.dsUpdate.setColumn(nrow, "AM_13", this.dsList.getColumn(i, "AM_13"));
        // 				this.dsUpdate.setColumn(nrow, "AM_14", this.dsList.getColumn(i, "AM_14"));
        // 				this.dsUpdate.setColumn(nrow, "AM_15", this.dsList.getColumn(i, "AM_15"));
        // 				this.dsUpdate.setColumn(nrow, "AM_16", this.dsList.getColumn(i, "AM_16"));
        // 				this.dsUpdate.setColumn(nrow, "AM_17", this.dsList.getColumn(i, "AM_17"));
        // 				this.dsUpdate.setColumn(nrow, "AM_18", this.dsList.getColumn(i, "AM_18"));
        // 				this.dsUpdate.setColumn(nrow, "AM_19", this.dsList.getColumn(i, "AM_19"));
        // 				this.dsUpdate.setColumn(nrow, "AM_20", this.dsList.getColumn(i, "AM_20"));
        // 				this.dsUpdate.setColumn(nrow, "AM_21", this.dsList.getColumn(i, "AM_21"));
        // 				this.dsUpdate.setColumn(nrow, "AM_22", this.dsList.getColumn(i, "AM_22"));
        // 				this.dsUpdate.setColumn(nrow, "AM_23", this.dsList.getColumn(i, "AM_23"));
        // 				this.dsUpdate.setColumn(nrow, "AM_24", this.dsList.getColumn(i, "AM_24"));
        // 				this.dsUpdate.setColumn(nrow, "AM_25", this.dsList.getColumn(i, "AM_25"));
        // 				this.dsUpdate.setColumn(nrow, "AM_26", this.dsList.getColumn(i, "AM_26"));
        // 				this.dsUpdate.setColumn(nrow, "AM_27", this.dsList.getColumn(i, "AM_27"));
        // 				this.dsUpdate.setColumn(nrow, "AM_28", this.dsList.getColumn(i, "AM_28"));
        // 				this.dsUpdate.setColumn(nrow, "AM_29", this.dsList.getColumn(i, "AM_29"));
        // 				this.dsUpdate.setColumn(nrow, "AM_30", this.dsList.getColumn(i, "AM_30"));
        // 				this.dsUpdate.setColumn(nrow, "AM_31", this.dsList.getColumn(i, "AM_31"));
        // 				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        // 				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        // 				break;
        // 		}
        // 	}
        //
        // 	if (this.dsUpdate.rowcount == 0) return;
        //
        // 	var strSvcId    = "save";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "update=dsUpdate";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); 	// 통신방법 정의 [생략가능]
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
        		this.gfnAlert("법인코드 입력 하세요.");
        		this.ccfCD_CORP.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
        		this.gfnAlert("조회년월 입력 하세요.");
        		this.calYM_WORK.setFocus();
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
        	} else if (svcID == "combo") {

        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;

        	switch(id) {
        	case "ccfCD_CORP": // 법인코드
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.grSearch);
        		break;

        	default:
        	}
        	return true;

        }

        this.fnAfterCDTextChanged = function(id) {
        	switch(id) {

        	case "ccfCD_CORP": // 법인코드
        		break;

        	case "ccfCD_SITE": // 품의부서코드
        		break;

        	case "ccfCD_SUJI": // 수지코드
        		break;
        	default:
        	}
        	return true;
        }


        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "A7");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsYN_FINAL=combo0";
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

        // 자료생성
        this.fnCreateData = function(obj,e) {
        	this.fnPopupOpen("DFA_DLG_PLANS_CREATE");
        }

        // 자료삭제(초기화)
        this.fnDeleteData = function(obj,e) {
        	this.fnPopupOpen("DFA_DLG_PLANS_DELETE");
        }

        this.fnPopupOpen = function(popId) {

        	if (!this.fnPopupValidate(popId)) {
        		return false;
        	}

        	var param = {};
        	param.YM_PLAN = this.gfnTrim(this.dsSearch.getColumn(0, "YM_PLAN"));						// 작성년월
        	param.CD_CORP = this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value);							// 법인코드
        	param.DS_CORP = this.gfnTrim(this.ccfCD_CORP.form.DSTextBox.value);							// 법인명
        	param.CD_SITE = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));	// 작성부서
        	param.DS_SITE = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "DS_SITE"));	// 작성부서명
        	param.CD_SITE_CD = this.gfnTrim(this.ccfCD_SITE.form.CDTextBox.value);	// 작성부서 (자료생성,자료생성취소 버튼에서 사용)
        	param.DS_SITE_CD = this.gfnTrim(this.ccfCD_SITE.form.DSTextBox.value);	// 작성부서명 (자료생성,자료생성취소 버튼에서 사용)
        	param.YN_FINAL = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "YN_FINAL"));	// 구분

        	var width = 425;
        	var height = 330;

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, popId, "fnPopCallBack", param, width, height);
        }

        // 전자결재상신
            this.fnElctrncPmnt = function(obj,e) {
        // 	if(!this.gfnGridIsRow(this.dxGrid)) return;
        //
        // 	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        // 	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        // 	var nDCnt = this.dsList.findRow(this.ucFlag,"D");
        //
        // 	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        // 		this.gfnAlert("저장 후 처리하세요.", "");
        // 		return;
        // 	}

        	// 결재상태 1,2 : 결재중,결재완료 시 return;
        // 	var tyAppr = this.dsList.getColumn(this.dsList.rowposition, "TY_APPR");
        // 	if ( tyAppr == "1" || tyAppr == "2" ) {
        // 		this.gfnAlert("결재상태를 확인 바랍니다.");
        // 		return;
        // 	}
        //
        // 	var param = {};
        // 	param.V1 = this.dsSearch.getColumn(0, "YM_PLAN");							// 작성년월
        // 	param.V2 = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");		// 법인코드
        // 	param.V3 = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");		// 작성부서
        // 	param.V4 = this.dsList.getColumn(this.dsList.rowposition, "YN_FINAL");		// 구분
        // 	param.ID_AP = this.dsList.getColumn(this.dsList.rowposition, "NO_APPR");	// 전자결재문서번호
        // 	param.DS_ETITLE = "";

        //	this.gfnFormOpen("DFA", "DFA_PLANS_APP", "fnAprvDialogCallback", param, 1200, 700);*/

            var strFormId = "DSMEC_SHORT_PLAN";
        	var strSubject = "단기자금계획 상신";
        	strSubject = encodeURI(strSubject);
        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url = url + "approval/legacy/goFormLink.do?legacyFormID=" + strFormId;
        	url += "&mode=DRAFT";
        	url += "&ID_USER=" + this.AuthClient.ID_USER;
        	url += "&DS_KEY1=" + this.dsSearch.getColumn(0, "YM_PLAN");	// 작성년월
        	url += "&DS_KEY2=" + this.dsSearch.getColumn(0, "CD_CORP");	// 법인코드
        	url += "&DS_KEY3=" + this.dsSearch.getColumn(0, "CD_SITE"); // 작성부서
        	url += "&DS_KEY4=" + this.dsSearch.getColumn(0, "YN_FINAL"); // 구분
        	url += "&DS_KEY5="
        	url += "&RTN_TITLE=" + strSubject;

        	var new_window = window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        	new_window.onbeforeunload = this.fnAprvDialogCallback();
        }
         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	//if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	//}
        };

        // 전자결재문서조회
        this.fnElctrncPmntDoc = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 처리하세요.", "");
        		return;
        	}

        	var nRow = this.dsList.rowposition;
        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition , "NO_APPR"))){
        		this.gfnAlert("결재번호 정보가 존재하지 않습니다.");
        		return;
        	}

            var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url = url+"approval/legacy/goFormLink.do?";
        	url +="mode=complete";
        	url +="&ID_USER=" + this.AuthClient.ID_USER;
        	url +="&fiid=" + this.dsList.getColumn(nRow, "NO_APPR");
        	var new_window = window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        	new_window.onbeforeunload = this.fnAprvDialogCallback();
        }

        // 전자결재(초기화)
        this.fnElctrncPmntDelte = function(obj,e) {
        	this.fnPopupOpen("DFA_DLG_APPRS_DELETE");
        }


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.divData_objGrid_onselectchanged = function(obj,e)
        {
        	// 일선택시 비고에 해당일의 비고 셋팅해서 보여주기
        // 	var ds = obj.getBindDataset();
        // 	ds.set_enableevent(false);
        //
        // 	var colnm = "RM_BIGO_" + this.gfnGridGetBindColumnNameByIndex(obj, e.cell).substring(3);
        // 	ds.setColumn(e.row, "RM_BIGO", ds.getColumn(e.row, colnm));
        //
        // 	ds.set_enableevent(true);
        };

        this.divSearch_cboYN_FINAL_onitemchanged = function(obj,e)
        {
        	if (e.posttext == "전체") {
        		this.btnElctrncPmnt.set_enable(false);
        	} else {
        		this.btnElctrncPmnt.set_enable(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("onselectchanged",this.divData_objGrid_onselectchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFA_EISSUJI.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
