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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCZPR_REGIST_CHANGE_APPV_LIST</Col></Row><Row><Col id=\"TARGET\">appr</Col><Col id=\"SP\">DCZPR_REGIST_CHANGE_APPV</Col></Row><Row><Col id=\"TARGET\">appr_select</Col><Col id=\"SP\">DZRPR_AP_STATE_SELECT</Col></Row><Row><Col id=\"TARGET\">aplines</Col><Col id=\"SP\">DZRPR_APPLINES_SELECT</Col></Row><Row><Col id=\"TARGET\">execAppr</Col><Col id=\"SP\">DZZPR_APPROVAL_CALLBACK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"YN_LINK\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_STATUS\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_STATUS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">접수</Col><Col id=\"DS_CODE\">접수</Col></Row><Row><Col id=\"CD_CODE\">처리완료</Col><Col id=\"DS_CODE\">처리완료</Col></Row><Row><Col id=\"CD_CODE\">반려</Col><Col id=\"DS_CODE\">반려</Col></Row></Rows>");
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

            obj = new Static("staCD_VENDOR","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("업체코드");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_VENDOR","staCD_VENDOR:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM_TO","ctxtCD_VENDOR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("요청일자");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta_range:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_STATUS","ctclDT_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("상태");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboDS_STATUS","staDS_STATUS:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsDS_STATUS");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
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
            obj.set_text("협력사정보변경요청 품의서");
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
            obj = new BindItem("item0","divSearch.form.ctxtCD_VENDOR","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboDS_STATUS","value","dsSearch","DS_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCA_RESIST_CHANGE_APPV_APP.xfdl", function() {
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

        		this.dsSearch.setColumn(0, "NO_SEQ", this.getOwnerFrame().PARAM01);
        		this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().PARAM02);

        		this.dsSearch.setColumn(0, "YN_LINK", this.getOwnerFrame().YN_LINK);	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다
        		this.dsSearch.setColumn(0, "ID_AP", this.getOwnerFrame().ID_AP);		// 전자결재문서번호

        		// 결재상태값 조회 후 그리드 조회한다
        		this.fnApprSel();
        	}
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
        	this.dxGrid = this.divData.form.objGrid;

        	// 결재관련
        	this.dxGridAppr = this.divData.form.divDataAppr.form.objGridAppr;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCA_RESIST_CHANGE_APPV");

        	this.dxGrid.set_enableredraw(false);
        	this.gfnGridColumnColor(this.dxGrid, "DS_STATUS", "Red", "DS_STATUS == '반려'");
        	this.gfnGridColumnColor(this.dxGrid, "DS_STATUS", "Yellow", "DS_STATUS == '처리완료'");
        	this.dxGrid.set_enableredraw(true);

        	// 결재관련
        	this.gfnGridInit(this.dxGridAppr, this.dsListAplines, "DZ", "DZR_APLINES_01");
        	this.dxGridAppr.set_extendsizetype("none");
        	this.dxGridAppr.set_scrollbartype("none default");	// 가로 스크롤이 생기지 않게 셋팅
        	var colDS_NOTE = this.dxGridAppr.getBindCellIndex("body", "DS_NOTE");
        	this.dxGridAppr.setCellProperty("body", colDS_NOTE, "tooltiptext", "expr:DS_NOTE==''?'':DS_NOTE" );	// 의견컬럼 툴팁추가
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("DS_STATUS", "string");

        	this.dsAppr = new Dataset();
        	this.dsAppr.addColumn("CD_VENDOR", "string");
        	this.dsAppr.addColumn("NO_SEQ", "int");
        	this.dsAppr.addColumn("YN_APPROVE", "string");

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

        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "DS_STATUS", "");

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
         *	저장 버튼
         */
        this.fnSave = function() {
        // 	// 그리드 필수항목 체크
        // 	if (!this.gfnGridValidate(this.dxGrid)) return;
        //
        // 	this.dxGrid.updateToDataset();
        //
        // 	this.dsInsert.clearData();
        // 	this.dsUpdate.clearData();
        // 	this.dsDelete.clearData();
        //
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList, i);
        // 		switch(flag) {
        // 			case "I":
        // 				var nrow = this.dsInsert.addRow();
        // // 				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        // // 				this.dsInsert.setColumn(nrow, "NO_CORP", this.dsList.getColumn(i, "NO_CORP").replace(/-/g, ''));
        // // 				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        // 				break;
        //
        // 			case "U":
        // 				var nrow = this.dsUpdate.addRow();
        // // 				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        // // 				this.dsUpdate.setColumn(nrow, "NO_CORP", this.dsList.getColumn(i, "NO_CORP").replace(/-/g, ''));
        // // 				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        // 				break;
        //
        // 			case "D":
        // 				var nrow = this.dsDelete.addRow();
        // //				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        // 				break;
        // 		}
        // 	}
        //
        // 	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;
        //
        // 	// save SP 한개로 사용하는 경우
        // 	/*
        // 	this.dsSave.clearData();
        //
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList, i);
        // 		switch(flag) {
        // 			case "I":
        // 			case "U":
        // 			case "D":
        // 				var nrow = this.dsSave.addRow();
        // 				this.dsSave.setColumn(nrow, "TY_FLAG", flag);
        // 				this.dsSave.setColumn(nrow, "NO_IDX", this.dsList.getColumn(i, "NO_IDX"));
        // 				break;
        // 		}
        // 	}
        //
        // 	if (this.dsSave.rowcount == 0) return;
        // 	*/
        //
        // 	var strSvcId    = "save";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        // 	//var inData      = "save=dsSave";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
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
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		// 확장버튼 활성화 or 비활성화 처리
        		this.fnBtnEnable();	// 결재관련

        		// 결재선 조회
        		this.fnSelectAppr();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "appr") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			var json = this.gfnArgsToJson(strArg);
        			strArg = json.gubun;

        			var msg = "";

        			if(strArg == "Y") msg = "승인이 정상 처리되었습니다.";
        			else if(strArg == "N") msg = "반려가 정상 처리되었습니다.";

        			this.gfnAlert(msg, "fnCallback_callback");

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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

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

        this.fnApprove = function()
        {
        	if(this.dsList.rowposition < 0)
        	{
        		this.gfnAlert("선택된 건이 없습니다.");
        		return false;
        	}

        	this.gfnConfirm("해당건을 승인처리 하시겠습니까?", "fnApprove_callback");
        }

        this.fnReject = function()
        {
        	if(this.dsList.rowposition < 0)
        	{
        		this.gfnAlert("선택된 건이 없습니다.");
        		return false;
        	}

        	this.gfnConfirm("해당건을 반려처리 하시겠습니까?", "fnReject_callback");
        }

        this.fnApprove_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnAppr("Y");
        	}
        }

        this.fnReject_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnAppr("N");
        	}
        }

        this.fnAppr = function(gubun)
        {
        	this.dsAppr.clearData();

        	var nrow = this.dsAppr.addRow();
        	var row = this.dsList.rowposition;
        	this.dsAppr.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(row, "CD_VENDOR"));
        	this.dsAppr.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(row, "NO_SEQ"));
        	this.dsAppr.setColumn(nrow, "YN_APPROVE", gubun);

        	if (this.dsAppr.rowcount == 0) return;

        	var strSvcId    = "appr";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "appr=dsAppr";
        	var outData     = "";
        	var strArg      = "gubun="+ gubun;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(e.oldrow != e.newrow)
        	{
        		if(this.dsList.getColumn(e.newrow, "DS_STATUS") == "접수")
        		{
        			this.btnApprove.set_enable(true);
        			this.btnReject.set_enable(true);
        		}
        		else
        		{
        			this.btnApprove.set_enable(false);
        			this.btnReject.set_enable(false);
        		}
        	}
        };


        //*** 아래는 결재관련 소스 ***//

         // 승인 버튼 클릭 이벤트
         this.fnAprvCmpl = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.ID_AP = this.dsSearch.getColumn(0, "ID_AP");
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "NO_SEQ");
        	param.V_PARAM02 = this.dsSearch.getColumn(0, "CD_VENDOR");
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
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "NO_SEQ");
        	param.V_PARAM02 = this.dsSearch.getColumn(0, "CD_VENDOR");
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
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "NO_SEQ");
        	param.V_PARAM02 = this.dsSearch.getColumn(0, "CD_VENDOR");
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

        	param.ID_AP_TYPE = "DC10";
        	param.V_PARAM01 = this.dsSearch.getColumn(0, "NO_SEQ");
        	param.V_PARAM02 = this.dsSearch.getColumn(0, "CD_VENDOR");
        	param.V_PARAM03 = "";
        	param.V_PARAM04 = "";
        	param.DS_TITLE =  "협력사정보변경요청 품의서";

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
        	this.dsExecAppr.setColumn(0, "V_PARAM01", this.dsSearch.getColumn(0, "NO_SEQ"));
        	this.dsExecAppr.setColumn(0, "V_PARAM02", this.dsSearch.getColumn(0, "CD_VENDOR"));
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
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCA_RESIST_CHANGE_APPV_APP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
