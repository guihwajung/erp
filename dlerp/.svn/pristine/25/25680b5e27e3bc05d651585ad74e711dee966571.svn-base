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
            this.set_titletext("평가 진행 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select_status</Col><Col id=\"SP\">DAJPR_RTNG_RSLT_STATUS_GOAL_SELECT</Col></Row><Row><Col id=\"TARGET\">select_bgvdprsn</Col><Col id=\"SP\">DAJPR_RTNG_RSLT_STATUS_GOAL_SUB_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YR_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_BEGN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_END\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_STD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListStatus", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_STATUS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_RTNG","ccfCD_CORP:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfYR_RTNG","staYR_RTNG:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_RTNG","ccfYR_RTNG:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("평가회차");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_RTNG","staID_RTNG:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFRTNG_STD");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_STATUS","ccfID_RTNG:0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("평가상태");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_STATUS","staTY_STATUS:0","10.0","94","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsTY_STATUS");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_autoselect("true");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","56%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("#c9c9c9");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("평가자 관리");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_readonly("true");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:6",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("피평가자 관리");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:6",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("3");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.ccfYR_RTNG.form.TextBox","value","dsSearch","YR_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_RTNG.form.CDTextBox","value","dsSearch","ID_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_RTNG.form.DSTextBox","value","dsSearch","DS_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboTY_STATUS","value","dsSearch","TY_STATUS");
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
        this.registerScript("DAJ_RTNG_RSLT_GOAL_STATUS.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e) {
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
        	this.fnInit();
        }

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
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid    = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;

        	// 검색영역
        	this.ccfCD_CORP   = this.divSearch.form.ccfCD_CORP;
        	this.ccfYR_RTNG   = this.divSearch.form.ccfYR_RTNG;
        	this.ccfID_RTNG   = this.divSearch.form.ccfID_RTNG;
        	this.cboTY_STATUS = this.divSearch.form.cboTY_STATUS;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsListStatus, "DA", "DAJ_RTNG_RSLT_GOAL_STATUS");
        	//this.dxGrid.addEventHandler("onselectchanged", this.fnGridRowCellChanged, this);
        	this.dxGrid.addEventHandler("oncellposchanged", this.dxGrid_oncellposchanged, this);
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAJ_RTNG_BGVDPRSN_GOAL_ADMN_LIST");
        	this.dxGridSub.set_autofittype("col");

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfID_RTNG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 평가기준
        	this.ccfID_RTNG.AfterCDTextChanged     = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회
        	this.dsSelectStatus = new Dataset();
        	this.dsSelectStatus.addColumn("TY_RTNG", "string");
        	this.dsSelectStatus.addColumn("CD_CORP", "string");
        	this.dsSelectStatus.addColumn("ID_RTNG", "string");
        	this.dsSelectStatus.addColumn("TY_STATUS", "string");

        	// 피평가자 조회
        	this.dsSelectBgvdprsn = new Dataset();
        	this.dsSelectBgvdprsn.addColumn("CD_CORP", "string");
        	this.dsSelectBgvdprsn.addColumn("ID_RTNG", "string");
        	this.dsSelectBgvdprsn.addColumn("ID_SABUN_PRSN", "string");
        	this.dsSelectBgvdprsn.addColumn("CD_RTNG_TYPE", "string");
        	this.dsSelectBgvdprsn.addColumn("TY_GUBUN", "string");
        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	// 법인
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YR_RTNG", today.substr(0, 4));

        	this.cboTY_STATUS.set_index(0);
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelectStatus.clearData();
        	this.dsSelectStatus.addRow();
        	this.dsSelectStatus.setColumn(0, "TY_RTNG"  , this.dsSearch.getColumn(0, "CD_RTNG_TYPE"));
        	this.dsSelectStatus.setColumn(0, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectStatus.setColumn(0, "ID_RTNG"  , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSelectStatus.setColumn(0, "TY_STATUS", this.dsSearch.getColumn(0, "TY_STATUS"));

        	var strSvcId    = "select_status";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_status=dsSelectStatus";
        	var outData     = "dsListStatus=select_status0";
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

        // 피평가자 조회
        this.fnSelectBgvdprsn = function(strTY_GUBUN) {
        	//if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectBgvdprsn.clearData();
        	this.dsSelectBgvdprsn.addRow();
        	this.dsSelectBgvdprsn.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectBgvdprsn.setColumn(0, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSelectBgvdprsn.setColumn(0, "ID_SABUN_PRSN", this.dsListStatus.getColumn(this.dsListStatus.rowposition, "ID_SABUN"));
        	this.dsSelectBgvdprsn.setColumn(0, "CD_RTNG_TYPE", this.dsSearch.getColumn(0, "CD_RTNG_TYPE"));
        	this.dsSelectBgvdprsn.setColumn(0, "TY_GUBUN", strTY_GUBUN);

        	var strSvcId    = "select_bgvdprsn";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_bgvdprsn=dsSelectBgvdprsn"
        	var outData     = "dsListSub=select_bgvdprsn0"
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
        /*
         * 입력 버튼
         */
        this.fnAdd = function() {

        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         * 저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         * 엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "select_status") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.dxGrid.selectRow(0, true);
        		this.gfnGridClear(this.dxGridSub);
        	} else if (svcID == "select_bgvdprsn") {

        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        	} else if (id == "ccfID_RTNG") {
        		dsUserParam.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YR_RTNG"     , this.dsSearch.getColumn(0, "YR_RTNG"));
        		dsUserParam.setColumn(nrow, "CD_RTNG_TYPE", "JA");
        		dsUserParam.setColumn(nrow, "ID_SCREEN"   , "DAJ_RTNG_RSLT_GOAL_STATUS");
        		dsUserParam.setColumn(nrow, "CD_ROLE"     , this.AuthClient.CD_ROLE);
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (codeFindData[0] == undefined) {
        		return;
        	}

        	this.dsTY_STATUS.clearData();
        	if (id == "ccfID_RTNG") {
        		this.dsSearch.setColumn(0, "CD_RTNG_TYPE"    , codeFindData[0]["CD_RTNG_TYPE"]);
        		this.dsSearch.setColumn(0, "DS_RTNG_TYPE"    , codeFindData[0]["DS_RTNG_TYPE"]);
        		this.dsSearch.setColumn(0, "DT_RTNG_BEGN"    , codeFindData[0]["DT_RTNG_BEGN"]);
        		this.dsSearch.setColumn(0, "DT_RTNG_END"     , codeFindData[0]["DT_RTNG_END"]);
        		this.dsSearch.setColumn(0, "DT_RTNG_STD"     , codeFindData[0]["DT_RTNG_STD"]);
        		this.dsSearch.setColumn(0, "CD_RTNG_ASBLNEXT", codeFindData[0]["CD_RTNG_ASBLNEXT"]);
        		this.dsSearch.setColumn(0, "DS_RTNG_ASBLNEXT", codeFindData[0]["DS_RTNG_ASBLNEXT"]);

        		console.log('codeFindData[0]', codeFindData[0]);
        		// 업무목표 수립
        		if (codeFindData[0]["CD_RTNG_TYPE"] == "JA10") {
        			//this.sta01.set_text("피평가자 관리");
        			//this.sta02.set_text("평가자 관리");
         			this.dxGrid.set_enableredraw(false);
        			this.dxGrid.setCellProperty("head", 6, "text", "목표수립 前");
        			this.dxGrid.setCellProperty("head", 7, "text", "목표수립 中");
        			this.dxGrid.setCellProperty("head", 8, "text", "목표수립 完");
        // 			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "CNT_NOOPN_YN"), "size", 110);
        // 			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "CNT_APPL_YN"), "size", 120);

        			this.dsTY_STATUS.addRow();
        			this.dsTY_STATUS.setColumn(0, "CD_CODE", "ALL");
        			this.dsTY_STATUS.setColumn(0, "DS_CODE", "전체");
        			this.dsTY_STATUS.addRow();
        			this.dsTY_STATUS.setColumn(1, "CD_CODE", "OPEN");
        			this.dsTY_STATUS.setColumn(1, "DS_CODE", "목표수립前");
        			this.dsTY_STATUS.addRow();
        			this.dsTY_STATUS.setColumn(2, "CD_CODE", "RTNG");
        			this.dsTY_STATUS.setColumn(2, "DS_CODE", "목표수립中");
        			this.dsTY_STATUS.addRow();
        			this.dsTY_STATUS.setColumn(3, "CD_CODE", "CPLT");
        			this.dsTY_STATUS.setColumn(3, "DS_CODE", "목표수립完");

         			this.dxGrid.set_enableredraw(true);
        			this.cboTY_STATUS.set_index(0);
        		}
        		// 중간점검
        		else if (codeFindData[0]["CD_RTNG_TYPE"] == "JA11") {
        			//this.sta01.set_text("피평가자 관리");
        			//this.sta02.set_text("평가자 관리");
         			this.dxGrid.set_enableredraw(false);
        			this.dxGrid.setCellProperty("head", 6, "text", "중간점검 前");
        			this.dxGrid.setCellProperty("head", 7, "text", "중간점검 中");
        			this.dxGrid.setCellProperty("head", 8, "text", "중간점검 完");
        // 			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "CNT_NOOPN_YN"), "size", 110);
        // 			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "CNT_APPL_YN"), "size", 120);

        			this.dsTY_STATUS.addRow();
        			this.dsTY_STATUS.setColumn(0, "CD_CODE", "ALL");
        			this.dsTY_STATUS.setColumn(0, "DS_CODE", "전체");
        			this.dsTY_STATUS.addRow();
        			this.dsTY_STATUS.setColumn(1, "CD_CODE", "OPEN");
        			this.dsTY_STATUS.setColumn(1, "DS_CODE", "중간점검前");
        			this.dsTY_STATUS.addRow();
        			this.dsTY_STATUS.setColumn(2, "CD_CODE", "RTNG");
        			this.dsTY_STATUS.setColumn(2, "DS_CODE", "중간점검中");
        			this.dsTY_STATUS.addRow();
        			this.dsTY_STATUS.setColumn(3, "CD_CODE", "CPLT");
        			this.dsTY_STATUS.setColumn(3, "DS_CODE", "중간점검完");

         			this.dxGrid.set_enableredraw(true);
        			this.cboTY_STATUS.set_index(0);
        		}
        		// 자기기술
        		else if (codeFindData[0]["CD_RTNG_TYPE"] == "JA12") {
        			//this.sta01.set_text("피평가자 관리");
        			//this.sta02.set_text("평가자 관리");
        			this.dxGrid.set_enableredraw(false);
        			this.dxGrid.setCellProperty("head", 6, "text", "자기기술 前");
        			this.dxGrid.setCellProperty("head", 7, "text", "자기기술 中");
        			this.dxGrid.setCellProperty("head", 8, "text", "자기기술 完");
        //			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "CNT_APPL_YN"), "size", 0);

        			this.dsTY_STATUS.addRow();
        			this.dsTY_STATUS.setColumn(0, "CD_CODE", "ALL");
        			this.dsTY_STATUS.setColumn(0, "DS_CODE", "전체");
        			this.dsTY_STATUS.addRow();
        			this.dsTY_STATUS.setColumn(1, "CD_CODE", "OPEN");
        			this.dsTY_STATUS.setColumn(1, "DS_CODE", "자기기술前");
        			this.dsTY_STATUS.addRow();
        			this.dsTY_STATUS.setColumn(2, "CD_CODE", "RTNG");
        			this.dsTY_STATUS.setColumn(2, "DS_CODE", "자기기술中");
        			this.dsTY_STATUS.addRow();
        			this.dsTY_STATUS.setColumn(3, "CD_CODE", "CPLT");
        			this.dsTY_STATUS.setColumn(3, "DS_CODE", "자기기술完");

        			this.dxGrid.set_enableredraw(true);
        			this.cboTY_STATUS.set_index(0);
        		}
        // 		// 보직자1차평가
        // 		else if (codeFindData[0]["CD_RTNG_TYPE"] == "JA13") {
        // 			//this.sta01.set_text("피평가자 관리");
        // 			//this.sta02.set_text("평가자 관리");
        // 			this.dxGrid.set_enableredraw(false);
        // 			this.dxGrid.setCellProperty("head", 6, "text", "보직자1차평가 前");
        // 			this.dxGrid.setCellProperty("head", 7, "text", "보직자1차평가 中");
        // 			this.dxGrid.setCellProperty("head", 8, "text", "보직자1차평가 完");
        // 			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "CNT_ID_SABUN_B"), "size", 0);
        // 			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "CNT_NOOPN_YN_B"), "size", 0);
        // 			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "CNT_RTNG_YN_B"), "size", 0);
        // 			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "CNT_CPLT_YN_B"), "size", 0);
        //
        // 			this.dsTY_STATUS.addRow();
        // 			this.dsTY_STATUS.setColumn(0, "CD_CODE", "ALL");
        // 			this.dsTY_STATUS.setColumn(0, "DS_CODE", "전체");
        // 			this.dsTY_STATUS.addRow();
        // 			this.dsTY_STATUS.setColumn(1, "CD_CODE", "OPEN");
        // 			this.dsTY_STATUS.setColumn(1, "DS_CODE", "보직자1차평가前");
        // 			this.dsTY_STATUS.addRow();
        // 			this.dsTY_STATUS.setColumn(2, "CD_CODE", "RTNG");
        // 			this.dsTY_STATUS.setColumn(2, "DS_CODE", "보직자1차평가中");
        // 			this.dsTY_STATUS.addRow();
        // 			this.dsTY_STATUS.setColumn(3, "CD_CODE", "CPLT");
        // 			this.dsTY_STATUS.setColumn(3, "DS_CODE", "보직자1차평가完");
        //
        // 			this.dxGrid.set_enableredraw(true);
        // 			this.cboTY_STATUS.set_index(0);
        // 		}
        		else {
        			//this.sta01.set_text("피평가자/대상자 관리");
        			//this.sta02.set_text("평가자/검토자/면답자 관리");
        			this.dxGrid.setCellProperty("head", 20, "text", "오픈");
        			this.dxGrid.setCellProperty("head", 21, "text", "진행");
        			this.dxGrid.setCellProperty("head", 22, "text", "완료");
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "CNT_APPL_YN"), "size", 0);

        			this.dsTY_STATUS.addRow();
        			this.dsTY_STATUS.setColumn(0, "CD_CODE", "ALL");
        			this.dsTY_STATUS.setColumn(0, "DS_CODE", "전체");
        			this.dsTY_STATUS.addRow();
        			this.dsTY_STATUS.setColumn(1, "CD_CODE", "OPEN");
        			this.dsTY_STATUS.setColumn(1, "DS_CODE", "오픈");
        			this.dsTY_STATUS.addRow();
        			this.dsTY_STATUS.setColumn(2, "CD_CODE", "RTNG");
        			this.dsTY_STATUS.setColumn(2, "DS_CODE", "진행");
        			this.dsTY_STATUS.addRow();
        			this.dsTY_STATUS.setColumn(3, "CD_CODE", "CPLT");
        			this.dsTY_STATUS.setColumn(3, "DS_CODE", "완료");

        			this.dxGrid.set_enableredraw(true);
        			this.cboTY_STATUS.set_index(0);
        		}
        		//this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        // // 대상자 그리드 클릭 이벤트
        // this.fnGridCellPosChanged = function(obj:nexacro.Grid, e:nexacro.GridSelectEventInfo) {
        // 	if (e.row != -1 && e.oldrow != e.row) {
        // 		this.fnSelectBgvdprsn();
        // 	}
        // }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		if (e.columnid == "YR_RTNG") {
        			this.dsSearch.setColumn(0,"ID_RTNG","");
        			this.dsSearch.setColumn(0,"DS_RTNG","");
        			this.dsSearch.setColumn(0,"CD_RTNG_TYPE","");
        			this.dsSearch.setColumn(0,"DS_RTNG_TYPE","");
        			this.dsSearch.setColumn(0,"DT_RTNG_BEGN","");
        			this.dsSearch.setColumn(0,"DT_RTNG_END","");
        			this.dsSearch.setColumn(0,"DT_RTNG_STD","");
        			this.dsSearch.setColumn(0,"CD_RTNG_ASBLNEXT","");
        			this.dsSearch.setColumn(0,"DS_RTNG_ASBLNEXT","");
        		}
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        }

        this.dxGrid_oncellposchanged = function(obj,e)
        {
        	if(e.oldcol != e.col || e.oldrow != e.row){
        		var strTY_GUBUN = "";
        		if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, e.col ) == "CNT_ID_SABUN_A") {
        			strTY_GUBUN = "01";
        		} else if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, e.col ) == "CNT_ID_SABUN_B") {
        			strTY_GUBUN = "02";
        		} else if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, e.col ) == "CNT_NOOPN_YN_A") {
        			strTY_GUBUN = "11";
        		} else if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, e.col ) == "CNT_NOOPN_YN_B") {
        			strTY_GUBUN = "12";
        		} else if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, e.col ) == "CNT_RTNG_YN_A") {
        			strTY_GUBUN = "21";
        		} else if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, e.col ) == "CNT_RTNG_YN_B") {
        			strTY_GUBUN = "22";
        		} else if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, e.col ) == "CNT_CPLT_YN_A") {
        			strTY_GUBUN = "31";
        		} else if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, e.col ) == "CNT_CPLT_YN_B") {
        			strTY_GUBUN = "32";
        		} else {
        			strTY_GUBUN = "%";
        		}
        		var strColid = this.gfnGridGetBindColumnNameByIndex( this.dxGrid, e.col );
        		if (this.dsListStatus.getColumn(this.dsListStatus.rowposition,strColid) != 0)
        		{
        			this.fnSelectBgvdprsn(strTY_GUBUN);
        		} else {
        			this.gfnGridClear(this.dxGridSub);
        		}
        //
        // 		if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, e.col ).indexOf("SUM") > -1 ){
        // 			if(this.dxGrid.getCellProperty( "head", e.col, "text" ) != "합계") {
        // 				strTY_GUBUN = this.dxGrid.getCellProperty( "head", e.col, "text" ).replace("월",""); // 년도 + 01~12
        // 			} else {
        // 				strTY_GUBUN = "%";
        // 			}
        // 			strID_SABUN_PRSN = this.dsList.getColumn(this.dsList.rowposition,"ID_SABUN");
        // 			var strColid = this.gfnGridGetBindColumnNameByIndex( this.dxGrid, e.col );
        // 			if (this.dsList.getColumn(this.dsList.rowposition,strColid) !="")
        // 			{
        // 				this.fnSelectSub(strID_SABUN_PRSN,strTY_GUBUN);
        // 			}
        // 		} else {
        // 			this.gfnGridClear(this.dxGridSub);
        // 		}
        	}
        };

        this.divData_ondragmove = function(obj,e) {
        	if (e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        }

        this.divData_divSplitter_ondrag = function(obj, e) {
        	e.set_userdata("splitter");
        	return true;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataTop.form.objGrid.addEventHandler("oncellposchanged",this.fnGridCellPosChanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsListStatus.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_RTNG_RSLT_GOAL_STATUS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
