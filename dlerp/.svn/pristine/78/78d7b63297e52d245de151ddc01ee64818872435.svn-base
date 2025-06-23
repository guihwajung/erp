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
            this.set_titletext("[전자]입찰현황 품의서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_ESTIMATIONRANKING_SELECT</Col></Row><Row><Col id=\"TARGET\">copy</Col><Col id=\"SP\">DCBPR_BID_EPS_TO_ERP_COPY</Col></Row><Row><Col id=\"SP\">DZZPR_DBMAIL_SMS_SEND</Col><Col id=\"TARGET\">succal</Col></Row><Row><Col id=\"TARGET\">appr_select</Col><Col id=\"SP\">DZRPR_AP_STATE_SELECT</Col></Row><Row><Col id=\"TARGET\">aplines</Col><Col id=\"SP\">DZRPR_APPLINES_SELECT</Col></Row><Row><Col id=\"TARGET\">execAppr</Col><Col id=\"SP\">DZZPR_APPROVAL_CALLBACK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"YN_LINK\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_BID\"/><Col id=\"YN_LINK\"/><Col id=\"ID_AP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAppr", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAplines", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_BID","sta01:0.0","10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataApprLeft","0","0","700","79",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_background("");
            obj.set_border("1px solid #c9c6c3");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staApprNm","0","4",null,null,"0","0",null,null,null,null,this.divData.form.divDataApprLeft.form);
            obj.set_taborder("0");
            obj.set_text("전자입찰 결과보고 품의서");
            obj.set_textDecoration("none");
            obj.set_background("");
            obj.set_font("normal 20pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.divData.form.divDataApprLeft.addChild(obj.name, obj);

            obj = new Div("divDataAppr","divDataApprLeft:10","0",null,"80","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridAppr","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataAppr.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataAppr.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","divDataAppr:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfNO_BID.form.CDTextBox","value","dsSearch","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_FIRSTSELECT_APP.xfdl", function() {
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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().PARAM01) && !this.gfnIsNull(this.getOwnerFrame().PARAM02)) {

        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().PARAM01);
        		this.divSearch.form.ccfCD_SITE.form.fnCodeFindLoad();
        		this.dsSearch.setColumn(0, "NO_BID", this.getOwnerFrame().PARAM02);
        		this.divSearch.form.ccfNO_BID.form.fnCodeFindLoad();

        		this.dsSearch.setColumn(0, "YN_LINK", this.getOwnerFrame().YN_LINK);	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다
        		this.dsSearch.setColumn(0, "ID_AP", this.getOwnerFrame().ID_AP);		// 전자결재문서번호

        		this.ccfCD_SITE.form.fnFitToContents();
        		this.ccfNO_BID.form.fnFitToContents();

        		// 결재상태값 조회 후 그리드 조회한다
        		this.fnApprSel();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAprvCmpl = this.gfnFormButtonAdd("btnAprvCmpl", "fnAprvCmpl");
        	this.btnAprvCnc = this.gfnFormButtonAdd("btnAprvCnc", "fnAprvCnc");
        	this.btnAprvInf = this.gfnFormButtonAdd("btnAprvInf", "fnAprvInf");
        	this.btnAprvSang = this.gfnFormButtonAdd("btnAprvSang", "fnAprvSang");
        	this.btnApCnl = this.gfnFormButtonAdd("btnApCnl", "fnApCnl");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_BID = this.divSearch.form.ccfNO_BID;
        	this.dxGrid = this.divData.form.objGrid;

        	// 결재관련
        	this.dxGridAppr = this.divData.form.divDataAppr.form.objGridAppr;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_SITE.CodeFindName = "DZX_CFSITE";
        	this.ccfNO_BID.CodeFindName = "DCX_CFORDERPLAN_01";

        	//this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_BID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCB_FIRSTSELECT");

        	// 결재관련
        	this.gfnGridInit(this.dxGridAppr, this.dsListAplines, "DZ", "DZR_APLINES_01");
        	this.dxGridAppr.set_extendsizetype("none");
        	this.dxGridAppr.set_scrollbartype("none default");	// 가로 스크롤이 생기지 않게 셋팅
        	var colDS_NOTE = this.dxGridAppr.getBindCellIndex("body", "DS_NOTE");
        	this.dxGridAppr.setCellProperty("body", colDS_NOTE, "tooltiptext", "expr:DS_NOTE==''?'':DS_NOTE" );	// 의견컬럼 툴팁추가

        	// 셀 변경 후 이벤트
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	// 그리드 코드파인드 설정
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 전체체크박스 체크/해제 이벤트
        	//this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

        	// BUTTON, BUTTON-IN 처리
        	//this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_BID", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsCopy = new Dataset();
        	this.dsCopy.addColumn("CD_SITE", "string");
        	this.dsCopy.addColumn("NO_BID", "string");

        	this.dsSuccal = new Dataset();
        	this.dsSuccal.addColumn("TY_SYSTEM", "string");
        	this.dsSuccal.addColumn("TY_GUBUN", "string");
        	this.dsSuccal.addColumn("REF_KEY1", "string");
        	this.dsSuccal.addColumn("REF_KEY2", "string");
        	this.dsSuccal.addColumn("REF_KEY3", "string");
        	this.dsSuccal.addColumn("YN_MAIL", "string");
        	this.dsSuccal.addColumn("YN_SMS", "string");

        	// 결재관련
        	this.dsExecAppr = new Dataset();
        	this.dsExecAppr.addColumn("ID_AP", "string");
        	this.dsExecAppr.addColumn("V_PARAM01", "string");
        	this.dsExecAppr.addColumn("V_PARAM02", "string");
        	this.dsExecAppr.addColumn("V_PARAM03", "string");
        	this.dsExecAppr.addColumn("V_PARAM04", "string");
        	this.dsExecAppr.addColumn("ST_APPR", "string");
        	this.dsExecAppr.addColumn("ID_USER", "string");

        	// 결재관련 상태
        	this.dsSelectAppr = new Dataset();
        	this.dsSelectAppr.addColumn("ID_AP", "string");
        	this.dsSelectAppr.addColumn("ID_USER", "string");

        	// 결재선 그리드
        	this.dsAplines = new Dataset();
        	this.dsAplines.addColumn("ID_AP", "string");
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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);

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
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_BID"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_BID.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("입찰번호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        		this.gfnGridAfterSelect(this.dxGrid);

        		// 확장버튼 활성화 or 비활성화 처리
        		this.fnBtnEnable();	// 결재관련

        		// 결재선 조회
        		this.fnSelectAppr();
        	}
        	else if(svcID == "copy") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "succal") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "aplines") {
        		if(this.dsListAplines.rowcount > 0) {
        			this.dxGridAppr.setRealRowSize(0, 24);
        		}
        	}
        	else if (svcID == "apprsel") {	// 결재관련
        		// 링크 통해서 화면이 오픈되었을 경우에 this.fnExec() 실행한다
        		if(this.dsSearch.getColumn(0, "YN_LINK") != "N"){
        			if(this.dsListAppr.rowcount < 1){
        				this.fnApprselnullCallback = function() {
        					this.getParentContext().close(true);
        					return;
        				}
        				this.gfnAlert("품의서를 열수없습니다.", "fnApprselnullCallback");
        			}

        			if(this.dsListAppr.getColumn(0,"ST_APPR") == "05"){
        				this.fnApprselCallback = function() {
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert("결재가 취소되었습니다.", "fnApprselCallback");
        			}else{
        				this.fnExecAppr();
        			}
        		}else{
        			this.FormBtns.Select.click();
        		}
        	}
        	else if(svcID == "execAppr") {	// 결재관련
        		if (errorCode == 0) {
        			// 화면 로드시에 링크 통해서 화면이 오픈되었을경우에만 처리후에 조회한다
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        // 	if (id == "ccfCD_SITE"){
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 	}else
        	if (id == "ccfNO_BID"){
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 입찰번호 초기화
        		//this.ccfNO_BID.form.fnCodeFindClear();
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        /*
         *	EPS 파라미터 공통 조회
         */
        // DZZPR_EPS_BID_SAP_MIDDLE_POPUP_SELECT
        this.fnSelectEPS = function(lv_app) {

        	this.dsEPS = new Dataset();

        	this._dsProcEPS = new Dataset();
        	this._dsProcEPS.addColumn("TARGET", "string");
        	this._dsProcEPS.addColumn("SP", "string");

        	this._dsProcEPS.addRow();
        	this._dsProcEPS.setColumn(0, "TARGET", "eps");
        	this._dsProcEPS.setColumn(0, "SP", "DZZPR_EPS_BID_SAP_MIDDLE_POPUP_SELECT");

        	this.dsSelectEPS = new Dataset();
        	this.dsSelectEPS.addColumn("NO_BID", "string");		// ERP발주(입찰)번호
        	this.dsSelectEPS.addColumn("YN_UNION", "string");	// 통합입찰여부
        	this.dsSelectEPS.addColumn("ID_USER", "string");

        	this.dsSelectEPS.addRow();

        	this.dsSelectEPS.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSelectEPS.setColumn(0, "YN_UNION", "N");
        	this.dsSelectEPS.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "eps";
        	var strSvcType  = "select";
        	var inProc		= "_dsProcEPS";
        	var inData      = "eps=dsSelectEPS";
        	var outData     = "dsEPS=eps0";
        	var strArg      = "P_APP=" + lv_app;
        	var callBackFnc = "fnCallbackEPS";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        // DZZPR_EPS_OPEN_SU_NOSAVE_SELECT
        this.fnSelectEPS2 = function(lv_app) {

        	this.dsEPS = new Dataset();

        	this._dsProcEPS = new Dataset();
        	this._dsProcEPS.addColumn("TARGET", "string");
        	this._dsProcEPS.addColumn("SP", "string");

        	this._dsProcEPS.addRow();
        	this._dsProcEPS.setColumn(0, "TARGET", "eps");
        	this._dsProcEPS.setColumn(0, "SP", "DZZPR_EPS_OPEN_SU_NOSAVE_SELECT");

        	this.dsSelectEPS = new Dataset();
        	this.dsSelectEPS.addColumn("NO_BID", "string");		// ERP발주(입찰)번호
        	this.dsSelectEPS.addColumn("YN_UNION", "string");	// 통합입찰여부
        	this.dsSelectEPS.addColumn("ID_USER", "string");

        	this.dsSelectEPS.addRow();

        	this.dsSelectEPS.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSelectEPS.setColumn(0, "YN_UNION", "N");
        	this.dsSelectEPS.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "eps2";
        	var strSvcType  = "select";
        	var inProc		= "_dsProcEPS";
        	var inData      = "eps=dsSelectEPS";
        	var outData     = "dsEPS=eps0";
        	var strArg      = "workGbn=" + lv_app;
        	var callBackFnc = "fnCallbackEPS";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        this.fnCallbackEPS = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (errorCode!=0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	var url = "";
        	if (svcID == "eps") {
        		url = "/buyer/bid/pop/bid_sap_middle_pop.do";
        	}
        	else if (svcID == "eps2") {
        		url = "/buyer/bid/open_su_nosave.do";
        	}

        	if(this.dsEPS.rowcount > 0) {
        		var arr_param = [];

        		arr_param.push(strArg);
        		for(var c = 0; c < this.dsEPS.colinfos.length; c++) {
        			var colid = this.dsEPS.colinfos[c].name;
        			var val = this.dsEPS.getColumn(0, colid);
        			if(val==null) val="";
        			arr_param.push(colid + "=" + val);
        		}

        		this.gfnOpenEPS(url, arr_param.join('&'));
        	}
        };

        this.fnAttach = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.fnSelectEPS("B");	// B : 입찰참여회사 첨부파일조회
        }

        // 입찰개봉(조달링크) 버튼 클릭시 팝업화면 호출
        this.fnOpen = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	this.fnSelectEPS2("BO");	// BO : 입찰개봉
        }

        // 블라인드해제
        this.fnBlind = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.fnSelectEPS2("BR");	// BR : 블라인드해제
        }

        // 투찰가복사 버튼 클릭 이벤트
        this.fnCopy = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if(this.dsList.rowcount < 1) { return false; }

        	this.fnCopyExec();
        }

        // 상세투찰내역 버튼 클릭시 팝업화면 호출
        this.fnDtlBid = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		this.gfnAlert("목록에서 해당건을 선택해주세요.");
        		return false;
        	}

        	var nRow = this.dsList.rowposition;
        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(nRow, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(nRow, "DS_SITE");
        	param.NO_BID = this.dsList.getColumn(nRow, "NO_BID");
        	param.DS_BID = this.dsList.getColumn(nRow, "DS_SUBCON");
        	param.CD_VENDOR = this.dsList.getColumn(nRow, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(nRow, "DS_VENDOR");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_NEGODETAILQRY_ENG", "", param);
        }

        // 견적대비표 버튼 클릭시 팝업화면 호출
        this.fnDaebiBid = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if(this.dsList.rowcount < 1) { return false; }

        	var nRow = this.dsList.rowposition;
        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(nRow, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(nRow, "DS_SITE");
        	param.NO_BID = this.dsList.getColumn(nRow, "NO_BID");
        	param.DS_BID = this.dsList.getColumn(nRow, "DS_SUBCON");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_HADOESTIMATIONDAEBIQRY_ENG", "", param);
        }

        // 유찰(조달링크) 버튼 클릭시 팝업화면 호출
        this.fnPassBid = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnSelectValidate()) return false;

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_SUBCON = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_YOUCHALDLG_EPS", "", param, 400, 380);
        	//this.gfnAlert("조달 링크");
        }

        // 재입찰통보
        this.fnRebidAlert = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.fnSelectEPS("RB");	// RB : 재입찰공고/재입찰안내메일발송/문자전송
        }

        // 낙찰사선정 버튼 클릭시 팝업화면 호출
        this.fnSuccBid = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		this.gfnAlert("목록에서 해당건을 선택해주세요.");
        		return false;
        	}

        	var nRow = this.dsList.rowposition;
        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(nRow, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(nRow, "DS_SITE");
        	param.NO_BID = this.dsList.getColumn(nRow, "NO_BID");
        	param.DS_BID = this.dsList.getColumn(nRow, "DS_SUBCON");
        	param.CD_VENDOR = this.dsList.getColumn(nRow, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(nRow, "DS_VENDOR");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_SUCCESSBIDDLG", "fnSuccBidCallback", param, 430, 310);
        }

        this.fnSuccBidCallback = function(svcID, value) {
        	// 리턴값
        	if(value == true){
        		this.FormBtns.Select.click();
        	}

        };

        // 낙찰통보 버튼 클릭 이벤트
        this.fnSuccAlert = function(obj,e) {
        	if(this.dsList.rowcount < 1) { return false; }

        	this.fnSuccAlertExec();
        }

        // 예가관리 버튼 클릭 이벤트
        this.fnYega = function(obj,e) {
        	//if(!this.fnSelectValidate()) return;

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_SUBCON = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_ORDERPLANSR_YEGA", "", param);
        }

        /*
         *	투찰가복사 처리
         */
        this.fnCopyExec = function() {

        	this.dsCopy.clearData();

        	this.dsCopy.addRow();

        	this.dsCopy.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCopy.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));

        	if (this.dsCopy.rowcount == 0) return;

        	var strSvcId    = "copy";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "copy=dsCopy";
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
         *	낙찰통보 처리
         */
        this.fnSuccAlertExec = function() {

        	this.dsSuccal.clearData();

        	this.dsSuccal.addRow();

        	this.dsSuccal.setColumn(0, "TY_SYSTEM", "DC");
        	this.dsSuccal.setColumn(0, "TY_GUBUN", "낙찰통보");
        	this.dsSuccal.setColumn(0, "REF_KEY1", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSuccal.setColumn(0, "REF_KEY2", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSuccal.setColumn(0, "REF_KEY3", "");
        	this.dsSuccal.setColumn(0, "YN_MAIL", "");
        	this.dsSuccal.setColumn(0, "YN_SMS", "");

        	if (this.dsSuccal.rowcount == 0) return;

        	var strSvcId    = "succal";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "succal=dsSuccal";
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


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "CD_SITE"){
        			this.dsSearch.setColumn(0, "NO_BID", "");
        			this.divSearch.form.ccfNO_BID.form.DSTextBox.set_value("");
        		}
        	}
        };




        // 아래부터는 확장버튼
        this.fnDtlBid = function(obj,e) {
        	if(this.dsList.rowcount < 1 || this.dsList.rowposition < 0)
        	{
        		this.gfnFormOpen("DCB", "DCB_ESTIMATIONVENDORSAV_ENG", "");
        		return;
        	}

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_BID = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;
        	param.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");

        	this.gfnFormOpen("DCB", "DCB_ESTIMATIONVENDORSAV_ENG", "fnDtlBid_callback", param);
        }

        this.fnDtlBid_callback = function(strId, val)
        {
        	this.FormBtns.Select.click();
        }

        this.fnDaebiBid = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_BID = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;

        	this.gfnFormOpen("DCB", "DCB_HADOESTIMATIONDAEBIQRY_ENG", "", param);
        }

        //입찰마감 버튼
        this.fnMagamBid = function(obj,e) {
        	var param = {};

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n입찰번호 : [" + this.dsSearch.getColumn(0, "NO_BID") + "]"
        			+ "\n\n입찰마감 처리 하시겠습니까?";

        	this.gfnConfirm(msg, "fnMagamBid_callback", "");
        }

        this.fnMagamBid_callback = function(strId, val) {
        	if(val == true)
        	{
        		this.dsUpdate = new Dataset();
        		this.dsUpdate.addColumn("CD_SITE", "string");
        		this.dsUpdate.addColumn("NO_BID", "string");
        		this.dsUpdate.addColumn("ST_APPROVAL", "string");
        		this.dsUpdate.addColumn("DS_EKPKEY", "string");
        		this.dsUpdate.addColumn("DS_VIEW_URL", "string");

        		this.dsUpdate.clearData();
        		var nrow = this.dsUpdate.addRow();

        		this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsUpdate.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        		this.dsUpdate.setColumn(nrow, "ST_APPROVAL", "");
        		this.dsUpdate.setColumn(nrow, "DS_EKPKEY", "");
        		this.dsUpdate.setColumn(nrow, "DS_VIEW_URL", "");

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
        }

        this.fnPassBid = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_SUBCON = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;

        	this.gfnFormOpen("DCB", "DCB_YOUCHALDLG", "fnSuccBid_callback", param);
        }

        this.fnSuccBid = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_BID = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;
        	param.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");
        	param.YN_SUCCESS = "Y";

        	this.gfnFormOpen("DCB", "DCB_SUCCESSBIDDLG", "fnSuccBid_callback", param);
        }

        this.fnSuccBidCancel = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_BID = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;
        	param.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");
        	param.YN_SUCCESS = "N";

        	this.gfnFormOpen("DCB", "DCB_SUCCESSBIDDLG", "fnSuccBid_callback", param);
        }

        this.fnSuccBid_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }



        //*** 아래는 결재관련 소스 ***//

         // 승인 버튼 클릭 이벤트
         this.fnAprvCmpl = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_BID");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.ST_APPR = "03";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 430, 210);
        }

         // 반려 버튼 클릭 이벤트
         this.fnAprvCnc = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_BID");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.ST_APPR = "04";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 430, 210);
        }

         // 결재취소 버튼 클릭 이벤트
         this.fnApCnl = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_BID");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.ST_APPR = "05";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_NOTE", "fnAprvDialogCallback", param, 430, 210);
        }


        this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		this.getParentContext().close(true);
        	}
        };

         // 결재정보 버튼 클릭 이벤트
         this.fnAprvInf = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsListAppr.getColumn(0, "ID_AP");

        	this.gfnFormOpenNonAuth("DZR", "DZR_APLINES", "", param, 830, 400);
        }


        // 결제상신
         this.fnAprvSang = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	var nRow = this.dsList.rowposition;

        	param.ID_AP_TYPE = "DC07";
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V_PARAM02 = this.dsSearch.getColumn(0,"NO_BID");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.DS_TITLE =  "전자입찰 결과보고 품의서";

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_REQUEST", "fnDialogCallback", param, 900, 650);
         }

         this.fnDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value == true){
        		this.getParentContext().close(true);
        	}
        };

        // 결재상태값 조회
        this.fnApprSel = function() {
        	this.dsSelectAppr.clearData();
        	this.dsSelectAppr.addRow();

        	this.dsSelectAppr.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsSelectAppr.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "apprsel";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "appr_select=dsSelectAppr";
        	var outData     = "dsListAppr=appr_select0";
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

        // 확장버튼 활성화 or 비활성화처리
        this.fnBtnEnable = function() {
        	if(this.gfnIsNull(this.dsListAppr.getColumn(0, "ID_AP"))){	// 결재번호
        		this.btnAprvCmpl.set_enable(false);		// 승인(03)
        		this.btnAprvCnc.set_enable(false);		// 반려(04)
        		this.btnApCnl.set_enable(false);		// 결제취소(05)
        		this.btnAprvInf.set_enable(false);		// 결제정보
        		this.btnAprvSang.set_enable(true);		// 결제상신
        	}else{
        		if(this.dsListAppr.getColumn(0, "ST_APPR") == "01"){	// 결재상태
        			if(this.dsListAppr.getColumn(0, "YN_USER") == "Y"){
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        				}

        				this.btnAprvCnc.set_enable(false);
        				this.btnApCnl.set_enable(true);
        			}else{
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        					this.btnAprvCnc.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        					this.btnAprvCnc.set_enable(false);
        				}

        				this.btnApCnl.set_enable(false);
        			}

        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(false);
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "02"){
        			if(this.dsListAppr.getColumn(0, "YN_USER") == "Y"){
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        				}

        				this.btnAprvCnc.set_enable(false);
        				this.btnApCnl.set_enable(false);
        			}else{
        				if(this.dsListAppr.getColumn(0, "YN_APP") == "Y"){
        					this.btnAprvCmpl.set_enable(true);
        					this.btnAprvCnc.set_enable(true);
        				}else{
        					this.btnAprvCmpl.set_enable(false);
        					this.btnAprvCnc.set_enable(false);
        				}

        				this.btnApCnl.set_enable(false);
        			}

        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(false);
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "03"){
        			this.btnAprvCmpl.set_enable(false);
        			this.btnAprvCnc.set_enable(false);
        			this.btnApCnl.set_enable(false);
        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(false);
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "04"){
        			this.btnAprvCmpl.set_enable(false);
        			this.btnAprvCnc.set_enable(false);
        			this.btnApCnl.set_enable(false);
        			this.btnAprvInf.set_enable(true);
        			this.btnAprvSang.set_enable(true);
        			this.btnAprvSang.set_text("재상신");	// 반려 상태일때는 결재상신 버튼이 재상신으로 셋팅한다
        		}else if(this.dsListAppr.getColumn(0, "ST_APPR") == "05"){
        			this.btnAprvCmpl.set_enable(false);
        			this.btnAprvCnc.set_enable(false);
        			this.btnApCnl.set_enable(false);
        			this.btnAprvInf.set_enable(false);
        			this.btnAprvSang.set_enable(true);
        		}
        	}
        }


        /*
         *	결재완료 or 취소 처리
         */
        this.fnExecAppr = function() {

        	this.dsExecAppr.clearData();

        	this.dsExecAppr.addRow();

        	this.dsExecAppr.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));
        	this.dsExecAppr.setColumn(0, "V_PARAM01", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExecAppr.setColumn(0, "V_PARAM02", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsExecAppr.setColumn(0, "V_PARAM03", "");
        	this.dsExecAppr.setColumn(0, "V_PARAM04", "");
        	this.dsExecAppr.setColumn(0, "ST_APPR", "02");
        	this.dsExecAppr.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsExecAppr.rowcount == 0) return;

        	var strSvcId    = "execAppr";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execAppr=dsExecAppr";
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
          *	결재선그리드 조회
          */
        this.fnSelectAppr = function() {
        	this.dsAplines.clearData();
        	this.dsAplines.addRow();

        	this.dsAplines.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));

        	var strSvcId    = "aplines";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "aplines=dsAplines";
        	var outData     = "dsListAplines=aplines0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_FIRSTSELECT_APP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
