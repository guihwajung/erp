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
            this.set_titletext("평가진행현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select_status</Col><Col id=\"SP\">DAJPR_RTNG_RSLT_STATUS_SELECT</Col></Row><Row><Col id=\"TARGET\">select_bgvdprsn</Col><Col id=\"SP\">DAJPR_RTNG_RSLT_STATUS_SUB_SELECT</Col></Row><Row><Col id=\"TARGET\">send_sms_email</Col><Col id=\"SP\">DZZPR_SMS_EMAIL_SEND</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YR_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_BEGN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_END\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_STD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PTCP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PTCP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListStatus", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_STATUS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">ALL</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">OPEN</Col><Col id=\"DS_CODE\">오픈</Col></Row><Row><Col id=\"CD_CODE\">RTNG</Col><Col id=\"DS_CODE\">진행</Col></Row><Row><Col id=\"CD_CODE\">CPLT</Col><Col id=\"DS_CODE\">완료</Col></Row></Rows>");
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

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
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
            obj.set_text("피평가자 관리");
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
            obj.set_text("평가자 관리");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnSms",null,"0","90","27","166",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("메시지 전송");
            obj.set_enable("false");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnEmail",null,"0","80","27","83",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("메일 발송");
            obj.set_enable("false");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnHistory",null,"0","80","27","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("전송 이력");
            obj.set_enable("false");
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
        this.registerScript("DAJ_RTNG_RSLT_STATUS.xfdl", function() {
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
         	this.btnSendSMS 	= this.gfnFormButtonAdd("btnSendSMS"	, "fnSendSMS");		// 메시지 버튼
         	this.btnSendEmail 	= this.gfnFormButtonAdd("btnSendEmail"	, "fnSendEmail");	// 메일 버튼
        	this.btnHistory 	= this.gfnFormButtonAdd("btnHistory"	, "fnSendHistory");	// 전송이력
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

         	this.btnSms    	= this.divData.form.divDataBottom.form.btnSms;			// 메시지 전송(평가자용)
         	this.btnEmail 	= this.divData.form.divDataBottom.form.btnEmail;		// 메일 발송(평가자용)
         	this.btnHistory = this.divData.form.divDataBottom.form.btnHistory;		// 전송 이력(평가자용)
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsListStatus, "DA", "DAJ_RTNG_RSLT_STATUS");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGridRowCellChanged, this);
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        	this.dxGrid.ExpandUp               = "fnGridExpandUp";
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAJ_RTNG_BGVDPRSN_ADMN_LIST");
        	this.dxGridSub.set_autofittype("col");
        	this.dxGridSub.ExpandUp            = "fnGridSubExpandUp";

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
        	this.dsSelectStatus.addColumn("TY_PTCP", "string");

        	// SMS/EMAIL 전송 및 내용 업데이트
        	this.dsSendSmsEmailUpdate = new Dataset();
        	this.dsSendSmsEmailUpdate.addColumn("CD_CORP", "string");
        	this.dsSendSmsEmailUpdate.addColumn("ID_SABUN", "string");
        	this.dsSendSmsEmailUpdate.addColumn("DS_TITLE", "string");
        	this.dsSendSmsEmailUpdate.addColumn("DS_BODY", "string");
        	this.dsSendSmsEmailUpdate.addColumn("ID_SENDER", "string");
        	this.dsSendSmsEmailUpdate.addColumn("TY_GUBUN", "string");
        	this.dsSendSmsEmailUpdate.addColumn("TY_TYPE", "string");
        	this.dsSendSmsEmailUpdate.addColumn("PARAM1", "string");
        	this.dsSendSmsEmailUpdate.addColumn("PARAM2", "string");
        	this.dsSendSmsEmailUpdate.addColumn("PARAM3", "string");
        	this.dsSendSmsEmailUpdate.addColumn("PARAM4", "string");
        	this.dsSendSmsEmailUpdate.addColumn("PARAM5", "string");

        	// SMS 전송
        	this.dsSendSMS = new Dataset();
        	this.dsSendSMS.addColumn("MOBILE", "string");
        	this.dsSendSMS.addColumn("TITLE", "string");
        	this.dsSendSMS.addColumn("MESSAGE", "string");

        	// SMS 전송내용 업데이트
        	this.dsRtngSmsUpdate = new Dataset();
        	this.dsRtngSmsUpdate.addColumn("TY_RTNG", "string");
        	this.dsRtngSmsUpdate.addColumn("CD_CORP", "string");
        	this.dsRtngSmsUpdate.addColumn("ID_RTNG", "string");
        	this.dsRtngSmsUpdate.addColumn("ID_SABUN_RTNG", "string");
        	this.dsRtngSmsUpdate.addColumn("DS_SMS_TITLE", "string");
        	this.dsRtngSmsUpdate.addColumn("DS_SMS_BODY", "string");
        	this.dsRtngSmsUpdate.addColumn("ID_SABUN_SMS", "string");
        	this.dsRtngSmsUpdate.addColumn("TY_PTCP", "string");

        	// 피평가자 조회
        	this.dsSelectBgvdprsn = new Dataset();
        	this.dsSelectBgvdprsn.addColumn("CD_CORP", "string");
        	this.dsSelectBgvdprsn.addColumn("ID_RTNG", "string");
        	this.dsSelectBgvdprsn.addColumn("ID_SABUN_PRSN", "string");
        	this.dsSelectBgvdprsn.addColumn("CD_RTNG_TYPE", "string");
        	this.dsSelectBgvdprsn.addColumn("TY_PTCP", "string");

        	// EMAIL 발송
        	this.dsSendEMAIL = new Dataset();
        	this.dsSendEMAIL.addColumn("Title", "string");
        	this.dsSendEMAIL.addColumn("Content", "string");
        	this.dsSendEMAIL.addColumn("ToMail", "string");
        	this.dsSendEMAIL.addColumn("ToRecipients", "string");

        	// EMAIL 발송내용 업데이트
        	this.dsRtngEmailUpdate = new Dataset();
        	this.dsRtngEmailUpdate.addColumn("TY_RTNG", "string");
        	this.dsRtngEmailUpdate.addColumn("CD_CORP", "string");
        	this.dsRtngEmailUpdate.addColumn("ID_RTNG", "string");
        	this.dsRtngEmailUpdate.addColumn("ID_SABUN_RTNG", "string");
        	this.dsRtngEmailUpdate.addColumn("DS_EMAIL_TITLE", "string");
        	this.dsRtngEmailUpdate.addColumn("DS_EMAIL_BODY", "string");
        	this.dsRtngEmailUpdate.addColumn("ID_SABUN_EMAIL", "string");
        	this.dsRtngEmailUpdate.addColumn("TY_PTCP", "string");

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
        	this.dsSelectStatus.setColumn(0, "TY_PTCP"	, this.dsSearch.getColumn(0, "TY_PTCP"));

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
        this.fnSelectBgvdprsn = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectBgvdprsn.clearData();
        	this.dsSelectBgvdprsn.addRow();
        	this.dsSelectBgvdprsn.setColumn(0, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectBgvdprsn.setColumn(0, "ID_RTNG"      , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSelectBgvdprsn.setColumn(0, "ID_SABUN_PRSN", this.dsListStatus.getColumn(this.dsListStatus.rowposition, "ID_SABUN"));
        	this.dsSelectBgvdprsn.setColumn(0, "CD_RTNG_TYPE" , this.dsSearch.getColumn(0, "CD_RTNG_TYPE"));
        	this.dsSelectBgvdprsn.setColumn(0, "TY_PTCP"	  , this.dsSearch.getColumn(0, "TY_PTCP"));

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
        		if (this.dsListSub.rowcount > 1) {
         			this.btnSms.set_enable(true);
         			this.btnEmail.set_enable(true);
         			this.btnHistory.set_enable(true);
        		}
        	} else if (svcID == "send_sms") {
        		this.FormBtns.Select.click();
        	} else if (svcID == "send_email") {
        		this.FormBtns.Select.click();
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
        		dsUserParam.setColumn(nrow, "ID_SCREEN"   , "DAJ_RTNG_RSLT_STATUS");
        		dsUserParam.setColumn(nrow, "CD_ROLE"     , this.AuthClient.CD_ROLE);
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (codeFindData[0] == undefined) {
        		return;
        	}

        	if (id == "ccfID_RTNG") {
        		this.dsSearch.setColumn(0, "CD_RTNG_TYPE"    , codeFindData[0]["CD_RTNG_TYPE"]);
        		this.dsSearch.setColumn(0, "DS_RTNG_TYPE"    , codeFindData[0]["DS_RTNG_TYPE"]);
        		this.dsSearch.setColumn(0, "DT_RTNG_BEGN"    , codeFindData[0]["DT_RTNG_BEGN"]);
        		this.dsSearch.setColumn(0, "DT_RTNG_END"     , codeFindData[0]["DT_RTNG_END"]);
        		this.dsSearch.setColumn(0, "DT_RTNG_STD"     , codeFindData[0]["DT_RTNG_STD"]);
        		this.dsSearch.setColumn(0, "CD_RTNG_ASBLNEXT", codeFindData[0]["CD_RTNG_ASBLNEXT"]);
        		this.dsSearch.setColumn(0, "DS_RTNG_ASBLNEXT", codeFindData[0]["DS_RTNG_ASBLNEXT"]);
        		this.dsSearch.setColumn(0, "TY_PTCP"		 , codeFindData[0]["TY_PTCP"]);
        		this.dsSearch.setColumn(0, "DS_PTCP"		 , codeFindData[0]["DS_PTCP"]);

        		this.dsTY_STATUS.clearData();
        		console.log('codeFindData[0]', codeFindData[0]);
        		// 동료다면평가
        		if (codeFindData[0]["CD_RTNG_TYPE"] == "JA01") {
        			this.dxGrid.set_enableredraw(false);

        			if (codeFindData[0]["TY_PTCP"] == "P") {
        				this.divData.form.divDataTop.form.sta01.set_text("평가자 관리");
        				this.divData.form.divDataBottom.form.sta02.set_text("피평가자 관리");
        				this.dxGrid.setCellProperty("head", 19, "text", "피평가자수");
        				this.dxGrid.setCellProperty("head", 21, "text", "검토전");
        				this.dxGrid.setCellProperty("head", 22, "text", "검토중");
        				this.dxGrid.setCellProperty("head", 24, "text", "검토완료");

        				this.dsTY_STATUS.addRow();
        				this.dsTY_STATUS.setColumn(0, "CD_CODE", "ALL");
        				this.dsTY_STATUS.setColumn(0, "DS_CODE", "전체");
        				this.dsTY_STATUS.addRow();
        				this.dsTY_STATUS.setColumn(1, "CD_CODE", "OPEN");
        				this.dsTY_STATUS.setColumn(1, "DS_CODE", "검토전");
        				this.dsTY_STATUS.addRow();
        				this.dsTY_STATUS.setColumn(2, "CD_CODE", "RTNG");
        				this.dsTY_STATUS.setColumn(2, "DS_CODE", "검토중");
        				this.dsTY_STATUS.addRow();
        				this.dsTY_STATUS.setColumn(3, "CD_CODE", "CPLT");
        				this.dsTY_STATUS.setColumn(3, "DS_CODE", "검토완료");
        			} else {
        				this.divData.form.divDataTop.form.sta01.set_text("피평가자 관리");
        				this.divData.form.divDataBottom.form.sta02.set_text("평가자 관리");
        				this.dxGrid.setCellProperty("head", 19, "text", "평가자수");
        				this.dxGrid.setCellProperty("head", 21, "text", "오픈");
        				this.dxGrid.setCellProperty("head", 22, "text", "진행");
        				this.dxGrid.setCellProperty("head", 24, "text", "완료");

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
        			}
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "CNT_APPL_YN"), "size", 0);
        			this.dxGrid.set_enableredraw(true);
        			this.cboTY_STATUS.set_index(0);
        		}
        		// 리더십평가
        		else if (codeFindData[0]["CD_RTNG_TYPE"] == "JA02") {
        			this.divData.form.divDataTop.form.sta01.set_text("피평가자 관리");
        			this.divData.form.divDataBottom.form.sta02.set_text("평가자 관리");
        			this.dxGrid.set_enableredraw(false);
        			this.dxGrid.setCellProperty("head", 21, "text", "오픈");
        			this.dxGrid.setCellProperty("head", 22, "text", "진행");
        			this.dxGrid.setCellProperty("head", 24, "text", "완료");

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

        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "CNT_APPL_YN"), "size", 0);
        			this.dxGrid.set_enableredraw(true);
        			this.cboTY_STATUS.set_index(0);
        		}
        		else {
        			//this.sta01.set_text("피평가자/대상자 관리");
        			//this.sta02.set_text("평가자/검토자/면답자 관리");
        			this.dxGrid.setCellProperty("head", 21, "text", "오픈");
        			this.dxGrid.setCellProperty("head", 22, "text", "진행");
        			this.dxGrid.setCellProperty("head", 24, "text", "완료");
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "CNT_APPL_YN"), "size", 0);
        		}
        		this.FormBtns.Select.click();
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

        this.fnGridExpandUp = function(obj, e) {
         	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if (colnm == "BTN_DS_SMS") {
        		var DS_SMS_TITLE = this.dsListStatus.getColumn(this.dsListStatus.rowposition, "DS_SMS_TITLE");
        		var DS_SMS_BODY = this.dsListStatus.getColumn(this.dsListStatus.rowposition, "DS_SMS_BODY");
        		if (DS_SMS_BODY != undefined && DS_SMS_BODY.length > 0) {
        			var param = {
        				DS_TITLE: DS_SMS_TITLE,
        				DS_CONTENT: DS_SMS_BODY,
        				READONLY: true,
        			}
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZZ_SMS_SENDER", "fnSendSMS_readonly", param);
        		}
        	} else if (colnm == "BTN_DS_EMAIL") {
        		var DS_EMAIL_TITLE = this.dsListStatus.getColumn(this.dsListStatus.rowposition, "DS_EMAIL_TITLE");
        		var DS_EMAIL_BODY = this.dsListStatus.getColumn(this.dsListStatus.rowposition, "DS_EMAIL_BODY");
        		if (DS_EMAIL_BODY != undefined && DS_EMAIL_BODY.length > 0) {
        			var param = {
        				DS_TITLE: DS_EMAIL_TITLE,
        				DS_CONTENT: DS_EMAIL_BODY,
        				READONLY: true,
        			}
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZZ_EMAIL_SENDER", "fnSendSMS_readonly", param);
        		}
        	}
        }

        this.fnGridSubExpandUp = function(obj, e) {
         	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if (colnm == "BTN_DS_SMS") {
        		var DS_SMS_TITLE = this.dsListSub.getColumn(this.dsListSub.rowposition, "DS_SMS_TITLE");
        		var DS_SMS_BODY = this.dsListSub.getColumn(this.dsListSub.rowposition, "DS_SMS_BODY");
        		if (DS_SMS_BODY != undefined && DS_SMS_BODY.length > 0) {
        			var param = {
        				DS_TITLE: DS_SMS_TITLE,
        				DS_CONTENT: DS_SMS_BODY,
        				READONLY: true,
        			}
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZZ_SMS_SENDER", "fnSendSMS_readonly", param);
        		}
        	} else if (colnm == "BTN_DS_EMAIL") {
        		var DS_EMAIL_TITLE = this.dsListSub.getColumn(this.dsListSub.rowposition, "DS_EMAIL_TITLE");
        		var DS_EMAIL_BODY = this.dsListSub.getColumn(this.dsListSub.rowposition, "DS_EMAIL_BODY");
        		if (DS_EMAIL_BODY != undefined && DS_EMAIL_BODY.length > 0) {
        			var param = {
        				DS_TITLE: DS_EMAIL_TITLE,
        				DS_CONTENT: DS_EMAIL_BODY,
        				READONLY: true,
        			}
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZZ_EMAIL_SENDER", "fnSendSMS_readonly", param);
        		}
        	}
        }

        this.fnSendSMS_readonly = function() {

        }

        // 대상자 그리드 클릭 이벤트
        this.fnGridCellPosChanged = function(obj, e) {
        	if (e.row != -1 && e.oldrow != e.row) {
        		this.fnSelectBgvdprsn();
        	}
        }
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

        // 메시지 전송 버튼
        this.fnSendSMS = function() {
        	this.dsListStatus.set_enableevent(false);
        	this.dsListStatus.filter("CHK == 1");
        	if (this.dsListStatus.rowcount == 0) {
        		this.gfnAlert("문자 발송 대상자를 선택하십시오.");
        		this.dsListStatus.filter("");
        		this.dsListStatus.set_enableevent(true);
        		return;
        	}
        	this.dsListStatus.filter("");
        	this.dsListStatus.set_enableevent(true);

        	var param = {
        		DS_TITLE: "",
        		DS_CONTENT: "",
        		READONLY: false,
        	}
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZZ_SMS_SENDER", "fnSendSMS_callback", param);
        }

        this.fnSendSMS_callback = function(svcID, value) {
        	if (value != undefined) {
        		var result = JSON.parse(value);
        		if (result.CONTINUE) {
        			this.dsSendSmsEmailUpdate.clearData();
        			this.dsListStatus.set_enableevent(false);
        			this.dsListStatus.filter("CHK == 1");
        			for (var i = 0; i < this.dsListStatus.rowcount; i++) {
        				var nrow = this.dsSendSmsEmailUpdate.addRow();
        				var DS_SMS_TITLE = result.DS_TITLE
        				var DS_SMS_BODY = "[" + this.AuthClient.DS_HNAME + ":" + this.UserInfo.DS_HANDPHONE + "]\n" + result.DS_CONTENT;

        				this.dsSendSmsEmailUpdate.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "ID_SABUN"	 , this.dsListStatus.getColumn(i, "ID_SABUN"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "DS_TITLE" 	 , DS_SMS_TITLE);
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "DS_BODY"  	 , DS_SMS_BODY);
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "ID_SENDER"	 , this.AuthClient.ID_SABUN);
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "TY_GUBUN"     , "S");	// S : SMS, M : MAIL
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "TY_TYPE"      , this.dsSearch.getColumn(0, "CD_RTNG_TYPE"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM1"       , this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM2"       , this.AuthClient.ID_SABUN);
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM3" 	 	 , this.dsListStatus.getColumn(i, "ID_RTNG"));	//this.dsSearch.getColumn(0, "TY_TARGET"));	// B : 피평가자, R : 평가자
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM4"     	 , this.dsListStatus.getColumn(i, "ID_SABUN"));	//
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM5"     	 , "03");	//
        			}
        			this.dsListStatus.filter("");
        			this.dsListStatus.set_enableevent(true);

        			if (this.dsSendSmsEmailUpdate.rowcount == 0) return;

        			var strSvcId    = "send_sms_email";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "send_sms_email=dsSendSmsEmailUpdate";
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
        	}
        }

        // 메일 발송 버튼
        this.fnSendEmail = function() {
        	this.dsListStatus.set_enableevent(false);
        	this.dsListStatus.filter("CHK == 1");
        	if (this.dsListStatus.rowcount == 0) {
        		this.gfnAlert("메일 발송 대상 평가자를 선택하십시오.");
        		this.dsListStatus.filter("");
        		this.dsListStatus.set_enableevent(true);
        		return;
        	}
        	this.dsListStatus.filter("");
        	this.dsListStatus.set_enableevent(true);

        	var param = {
        		DS_TITLE: "",
        		DS_CONTENT: "",
        		READONLY: false,
        	}
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZZ_EMAIL_SENDER", "fnSendEmail_callback", param);
        }

        this.fnSendEmail_callback = function(svcID, value) {
        	if (value != undefined) {
        		var result = JSON.parse(value);
        		if (result.CONTINUE) {
        			this.dsSendSmsEmailUpdate.clearData();
        			this.dsListStatus.set_enableevent(false);
        			this.dsListStatus.filter("CHK == 1");
        			for (var i = 0; i < this.dsListStatus.rowcount; i++) {
        				var nrow = this.dsSendSmsEmailUpdate.addRow();
        				var DS_EMAIL_TITLE = result.DS_TITLE
        				var DS_EMAIL_BODY = result.DS_CONTENT;

        				this.dsSendSmsEmailUpdate.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "ID_SABUN"	 , this.dsListStatus.getColumn(i, "ID_SABUN"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "DS_TITLE" 	 , DS_EMAIL_TITLE);
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "DS_BODY"  	 , DS_EMAIL_BODY);
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "ID_SENDER"	 , this.AuthClient.ID_SABUN);
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "TY_GUBUN"     , "M");	// S : SMS, M : MAIL
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "TY_TYPE"      , this.dsSearch.getColumn(0, "CD_RTNG_TYPE"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM1"       , this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM2"       , this.AuthClient.ID_SABUN);
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM3" 	 	 , this.dsListStatus.getColumn(i, "ID_RTNG"));	//this.dsSearch.getColumn(0, "TY_TARGET"));	// B : 피평가자, R : 평가자
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM4"     	 , this.dsListStatus.getColumn(i, "ID_SABUN"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM5"     	 , "03");
        			}
        			this.dsListStatus.filter("");
        			this.dsListStatus.set_enableevent(true);

        			if (this.dsSendSmsEmailUpdate.rowcount == 0) return;

        			var strSvcId    = "send_sms_email";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "send_sms_email=dsSendSmsEmailUpdate";
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
        	}

        // 	if (value != undefined) {
        // 		var result = JSON.parse(value);
        // 		if (result.CONTINUE) {
        // 			this.FormBtns.Select.click();
        // 		}
        // 	}
        }

        // 피평가자 메시지 전송 버튼
        this.btnSms_onclick = function() {
        	this.dsListSub.set_enableevent(false);
        	this.dsListSub.filter("CHK == 1");
        	if (this.dsListSub.rowcount == 0) {
        		this.gfnAlert("메시지 전송 대상자를 선택하십시오.");
        		this.dsListSub.filter("");
        		this.dsListSub.set_enableevent(true);
        		return;
        	}
        	this.dsListSub.filter("");
        	this.dsListSub.set_enableevent(true);

        	var param = {
        		DS_TITLE: "",
        		DS_CONTENT: "",
        		READONLY: false,
        	}
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZZ_SMS_SENDER", "fnSubSendSMS_callback", param);
        }

        this.fnSubSendSMS_callback = function(svcID, value) {
        	if (value != undefined) {
        		var result = JSON.parse(value);
        		if (result.CONTINUE) {
        			this.dsSendSmsEmailUpdate.clearData();
        			this.dsListSub.set_enableevent(false);
        			this.dsListSub.filter("CHK == 1");
        			for (var i = 0; i < this.dsListSub.rowcount; i++) {
        				var nrow = this.dsSendSmsEmailUpdate.addRow();
        				var DS_SMS_TITLE = result.DS_TITLE
        				var DS_SMS_BODY = "[" + this.AuthClient.DS_HNAME + ":" + this.UserInfo.DS_HANDPHONE + "]\n" + result.DS_CONTENT;

        				this.dsSendSmsEmailUpdate.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "ID_SABUN"	 , this.dsListSub.getColumn(i, "ID_CPNYDUTY"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "DS_TITLE" 	 , DS_SMS_TITLE);
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "DS_BODY"  	 , DS_SMS_BODY);
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "ID_SENDER"	 , this.AuthClient.ID_SABUN);
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "TY_GUBUN"     , "S");	// S : SMS, M : MAIL
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "TY_TYPE"      , this.dsSearch.getColumn(0, "CD_RTNG_TYPE"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM1"       , this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM2"       , this.AuthClient.ID_SABUN);
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM3" 	 	 , this.dsListSub.getColumn(i, "ID_RTNG"));	//this.dsSearch.getColumn(0, "TY_TARGET"));	// B : 피평가자, R : 평가자
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM4"     	 , this.dsListSub.getColumn(i, "ID_CPNYDUTY"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM5"     	 , "04");	//
        			}
        			this.dsListSub.filter("");
        			this.dsListSub.set_enableevent(true);

        			if (this.dsSendSmsEmailUpdate.rowcount == 0) return;

        			var strSvcId    = "send_sms_email";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "send_sms_email=dsSendSmsEmailUpdate";
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
        	}
        }

        // 피평가자 메일 발송 버튼
        this.btnEmail_onclick = function() {
        	this.dsListSub.set_enableevent(false);
        	this.dsListSub.filter("CHK == 1");
        	if (this.dsListSub.rowcount == 0) {
        		this.gfnAlert("메일 발송 대상자를 선택하십시오.");
        		this.dsListSub.filter("");
        		this.dsListSub.set_enableevent(true);
        		return;
        	}
        	this.dsListSub.filter("");
        	this.dsListSub.set_enableevent(true);

        	var param = {
        		DS_TITLE: "",
        		DS_CONTENT: "",
        		READONLY: false,
        	}
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZZ_EMAIL_SENDER", "fnSubSendEmail_callback", param);
        }

        this.fnSubSendEmail_callback = function(svcID, value) {
        	if (value != undefined) {
        		var result = JSON.parse(value);
        		if (result.CONTINUE) {
        			this.dsSendSmsEmailUpdate.clearData();
        			this.dsListSub.set_enableevent(false);
        			this.dsListSub.filter("CHK == 1");
        			for (var i = 0; i < this.dsListSub.rowcount; i++) {
        				var nrow = this.dsSendSmsEmailUpdate.addRow();
        				var DS_EMAIL_TITLE = result.DS_TITLE
        				var DS_EMAIL_BODY = result.DS_CONTENT;

        				this.dsSendSmsEmailUpdate.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "ID_SABUN"	 , this.dsListSub.getColumn(i, "ID_CPNYDUTY"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "DS_TITLE" 	 , DS_EMAIL_TITLE);
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "DS_BODY"  	 , DS_EMAIL_BODY);
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "ID_SENDER"	 , this.AuthClient.ID_SABUN);
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "TY_GUBUN"     , "M");	// S : SMS, M : MAIL
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "TY_TYPE"      , this.dsSearch.getColumn(0, "CD_RTNG_TYPE"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM1"       , this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM2"       , this.AuthClient.ID_SABUN);
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM3" 	 	 , this.dsListSub.getColumn(i, "ID_RTNG"));	//this.dsSearch.getColumn(0, "TY_TARGET"));	// B : 피평가자, R : 평가자
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM4"     	 , this.dsListSub.getColumn(i, "ID_CPNYDUTY"));
        				this.dsSendSmsEmailUpdate.setColumn(nrow, "PARAM5"     	 , "04");
        			}
        			this.dsListSub.filter("");
        			this.dsListSub.set_enableevent(true);

        			if (this.dsSendSmsEmailUpdate.rowcount == 0) return;

        			var strSvcId    = "send_sms_email";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "send_sms_email=dsSendSmsEmailUpdate";
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
        	}
        }

        // SMS/EMAIL 전송 이력 조회
        this.fnSendHistory = function(obj,e) {
        	var param = {};
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.ID_SABUN = this.dsListStatus.getColumn(this.dsListStatus.rowposition, "ID_SABUN");
        	param.DS_HNAME = this.dsListStatus.getColumn(this.dsListStatus.rowposition, "DS_HNAME");
        	param.TY_GUBUN = "";
        	param.TY_TYPE = this.dsSearch.getColumn(0, "CD_RTNG_TYPE");
        	param.PARAM1 = this.dsListStatus.getColumn(this.dsListStatus.rowposition, "ID_RTNG");
        	param.PARAM2 = "";
        	param.PARAM3 = "";
        	param.PARAM4 = "";
        	param.PARAM5 = "";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZZ_SMS_EMAIL_HISTORY", "", param);
        }

        // SMS/EMAIL 전송 이력 조회
        this.btnHistory_onclick = function(obj,e) {
        	var param = {};
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.ID_SABUN = this.dsListSub.getColumn(this.dsListSub.rowposition, "ID_CPNYDUTY");
        	param.DS_HNAME = this.dsListSub.getColumn(this.dsListSub.rowposition, "DS_HNAME");
        	param.TY_GUBUN = "";
        	param.TY_TYPE = this.dsSearch.getColumn(0, "CD_RTNG_TYPE");
        	param.PARAM1 = this.dsListSub.getColumn(this.dsListSub.rowposition, "ID_RTNG");
        	param.PARAM2 = "";
        	param.PARAM3 = "";
        	param.PARAM4 = "";
        	param.PARAM5 = "";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZZ_SMS_EMAIL_HISTORY", "", param);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataTop.form.objGrid.addEventHandler("oncellposchanged",this.fnGridCellPosChanged,this);
            this.divData.form.divDataBottom.form.btnSms.addEventHandler("onclick",this.btnSms_onclick,this);
            this.divData.form.divDataBottom.form.btnEmail.addEventHandler("onclick",this.btnEmail_onclick,this);
            this.divData.form.divDataBottom.form.btnHistory.addEventHandler("onclick",this.btnHistory_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsListStatus.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_RTNG_RSLT_STATUS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
