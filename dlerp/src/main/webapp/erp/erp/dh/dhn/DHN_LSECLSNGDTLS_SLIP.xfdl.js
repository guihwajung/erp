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
            this.set_titletext("결산내역 전표발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_LSECLSNGDTLS_SLIP_SELECT</Col></Row><Row><Col id=\"TARGET\">select_m</Col><Col id=\"SP\">DHZPR_SRNMSG_SELECT</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHNPR_LSECLSNGDTLS_MAGAM_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHNPR_LSECLSNGDTLS_MAGAM_AUTOSLIP_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_LSEASST\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LSEASST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsgList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("FitToContents").set("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_ACNT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACNT","staYM_ACNT:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ctclYM_ACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("귀속부서");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("FitToContents").set("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_LSEASST","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("자산번호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_LSEASST","staNO_LSEASST:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFLSEASST_01");
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("FitToContents").set("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LSEASST","ccfNO_LSEASST:3","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
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
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclYM_ACNT.form.TextBox","value","dsSearch","YM_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfNO_LSEASST.form.CDTextBox","value","dsSearch","NO_LSEASST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfNO_LSEASST.form.DSTextBox","value","dsSearch","NO_CHNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ctxtDS_LSEASST","value","dsSearch","DS_LSEASST");
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
        this.registerScript("DHN_LSECLSNGDTLS_SLIP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.dsSearch.set_enableevent(false);

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0,"YM_ACNT",today.substr(0,6));

        	this.dsSearch.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT_ACNT);
        	this.dsSearch.setColumn(0, "DS_DEPT", this.AuthClient.DS_DEPT_ACNT);


        	this.dsSearch.set_enableevent(true);

        	//this.FormBtns.Select.click();

        	this.ccfCD_CORP.setFocus();
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
        	this.btnDtlsCrt		= this.gfnFormButtonAdd("btnDtlsCrt", "fnDtlsCrt"); 		//결산내역생성 버튼
            this.btnSlipIssue	= this.gfnFormButtonAdd("btnSlipIssue", "fnSlipIssue"); 	//전표발행 버튼
        	this.btnSlipSearch  = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch"); 	//전표조회 버튼
        	this.btnSlipCancel  = this.gfnFormButtonAdd("btnSlipCancel", "fnSlipCancel"); 	//전표취소 버튼
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
            this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclYM_ACNT = this.divSearch.form.ctclYM_ACNT;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ccfNO_LSEASST = this.divSearch.form.ccfNO_LSEASST;
        	this.ctxtDS_LSEASST = this.divSearch.form.ctxtDS_LSEASST;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHN_LSECLSNGDTLS_SLIP");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_LSEASST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_LSEASST.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_ACNT", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("NO_LSEASST", "string");
        	this.dsSelect.addColumn("NO_CHNG", "string");

        	//전표발행
        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");
        	this.dsIssueSlip.addColumn("YM_MAGAM", "string");
        	this.dsIssueSlip.addColumn("NO_LSEASST", "string");
        	this.dsIssueSlip.addColumn("CD_DEPT_BH", "string");
        	this.dsIssueSlip.addColumn("ID_SABUN", "string");

        	//전표취소
        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_TRADE","string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	//if (!this.fnSelectValidate()) return false;
        	if(!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_WRK" , "Q");
        	this.dsSelect.setColumn(0, "CD_CORP"	, this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YM_ACNT" , this.dsSearch.getColumn(0, "YM_ACNT"));
        	this.dsSelect.setColumn(0, "CD_DEPT" , this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "NO_LSEASST" , this.dsSearch.getColumn(0, "NO_LSEASST"));
        	this.dsSelect.setColumn(0, "NO_CHNG" , this.dsSearch.getColumn(0, "NO_CHNG"));

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
        	//var nrow = 	this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	// 공통 체크 외 필수 체크
        	//if (!this.fnSaveValidation()) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
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
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        // 		return false;
        // 	}

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
        		this.fnBtnCheckAll();
        	} else if(svcID == "issueSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "cancelSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnCallback_Callback = function(svcID, errorCode, errorMsg) {
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	if (id == "ccfCD_CORP") {
        		//dsUserParam.setColumn(nrow, "LEVLV_DEPT", this.FormInfo.TY_AUTH);
        		//dsUserParam.setColumn(nrow, "LEVCD_DEPT", this.FormInfo.TY_AUTH);
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	} else if (id == "ccfCD_DEPT") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);

        	} else if (id == "ccfNO_LSEASST") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))){
        			this.gfnAlert("귀속부서를 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        		dsUserParam.setColumn(nrow, "CD_LSECLS", "");
        		dsUserParam.setColumn(nrow, "NO_LSEASST", this.dsSearch.getColumn(0, "NO_LSEASST"));
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_DEPT.form.fnCodeFindClear();
        		this.ccfNO_LSEASST.form.fnCodeFindClear();
        		this.dsSearch.setColumn(0, "DS_LSEASST", "");
        	} else if(id == "ccfCD_DEPT") {
        		this.ccfNO_LSEASST.form.fnCodeFindClear();
        		this.dsSearch.setColumn(0, "DS_LSEASST", "");
        	} else if(id == "ccfNO_LSEASST") {
        		this.dsSearch.setColumn(0, "DS_LSEASST", codeFindData[0].DS_LSEASST);
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        // 	if(id == "DHX_CFACNT_ASSET" || "DHX_CFACNT_ASSET_DEP" || "DHX_CFACNT_SLIP_AND_TRIAL") {
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        // 	}

        	return true;
        };

        this.fnGrid_EnterCell = function(obj, row, cell) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	// 증권파일(첨부파일)의 경우에는 수정여부와 관계없이 호출 가능하게 처리.

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT 값이 Y일때만 수정가능상태
        // 	if(this.dsListSub.getColumn(row, "YN_EDIT") == "N") {
        // 		return false;
        // 	}else{

        	return;
        }


        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		//this.fnSelectSub();
        		this.fnBtnCheckAll();
        		obj.oldrow = -1;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        /************************************************************************
        * 기타 버튼 이벤트
        ************************************************************************/
        //	납부내역생성
        this.fnDtlsCrt = function(obj,e) {
        	var strMsg = this.dsMsgList.getColumn(this.dsMsgList.findRow("MSG_CODE", "N012"), "MSG_CNFR");
        	strMsg = strMsg.replace("@NO_LSEASST", this.dsSearch.getColumn(0, "NO_LSEASST"));
        	strMsg = strMsg.replace("@DS_LSEASST", this.dsSearch.getColumn(0, "DS_LSEASST"));

        	this.gfnConfirm(strMsg, "fnDtlsCrt_callback", "DTLSCRT");
        }

        // 결산내역생성 Callback
        this.fnDtlsCrt_callback = function(strId, val) {
        	if(val == true)
        	{
        		this.dsExec.clearData();

        		var nrow = this.dsExec.addRow();
        		this.dsExec.setColumn(nrow, "TY_WRK", strId);
        		this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsExec.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsExec.setColumn(nrow, "YM_ACNT", this.dsSearch.getColumn(0, "YM_ACNT"));
        		this.dsExec.setColumn(nrow, "NO_LSEASST", this.dsSearch.getColumn(0, "NO_LSEASST"));
        		this.dsExec.setColumn(nrow, "NO_CHNG", this.dsSearch.getColumn(0, "NO_CHNG"));
        		this.dsExec.setColumn(nrow, "NO_PAY", "000");
        		this.dsExec.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        		this.dsExec.setColumn(nrow, "CD_TRADE", "");

        		if (this.dsExec.rowcount == 0) return;

        		var strSvcId    = "execute";
        		strSvcId = strId;
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "execute=dsExec";
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

        // 전표발행
        this.fnSlipIssue = function(obj,e) {

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	if(this.dsList.findRowExpr("CHK == 1 && !dataset.parent.gfnIsNull(CD_TRADE) && nx_flag != '#'") > -1){
        		this.gfnAlert("이미 발행한 데이터가 선택 되었습니다.");
        		return;
        	}

        	this.dsList.filter("");
        	for(var i = 0 ; i < this.dsList.rowcount; i++){
        		if(this.dsList.getColumn(i, "CHK") == "Y"){
        			if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_TRADE"))){
        				this.gfnAlert("자산번호:"+this.dsList.getColumn(i, "NO_LSEASST")+"\n이미 전표가 발행되어있습니다.")
        				this.dsList.filter("");
        				return false;
        			}
        		}
        	}
        	this.dsList.filter("");
        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");
        };


        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsIssueSlip.clearData();

        		var searchKey = "";
        		var arrDir = [];
        		for(var r = 0; r < this.dsList.rowcount; r++) {
        			if(this.dsList.getColumn(r, this.ucFlag) != '#' && this.dsList.getColumn(r, "CHK") == 1){
        				arrDir.push(this.dsList.getColumn(r, "NO_LSEASST") + this.dsList.getColumn(r, "NO_CLSNG"));
        			}
        		}
        		trace(arrDir.join(','));

        		//처리할 데이터 담기
        		var nRow = this.dsIssueSlip.addRow();
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"    , this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "YM_MAGAM" , this.dsSearch.getColumn(0, "YM_ACNT"));
        		this.dsIssueSlip.setColumn(nRow, "NO_LSEASST" , arrDir.join(','));
        		this.dsIssueSlip.setColumn(nRow, "ID_SABUN"   , this.AuthClient.ID_USER);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_BH" , this.AuthClient.CD_DEPT);

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

        // 전표조회
        this.fnSlipSearch = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		this.gfnAlert("전표조회할 데이터를 선택하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        this.fnPopupCallBack = function(strId, val) {
        	this.FormBtns.Select.click();
        }

        // 전표취소
        this.fnSlipCancel = function(obj,e) {

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	if(this.dsList.findRowExpr("CHK == 1 && dataset.parent.gfnIsNull(CD_TRADE) && nx_flag != '#'") > -1){
        		this.gfnAlert("전표번호가 없는 데이터가 선택 되었습니다.");
        		return;
        	}
        /*
        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		this.gfnAlert("전표조회할 데이터를 선택하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}
        */

        // 	this.dsList.filter("");
        // 	for(var i = 0 ; i < this.dsList.rowcount; i++){
        // 		if(this.dsList.getColumn(i, "CHK") == "Y"){
        // 			if(this.gfnIsNull(this.dsList.getColumn(i, "CD_TRADE"))){
        // 				this.gfnAlert("선급비용번호:"+this.dsList.getColumn(i, "NO_EXPENSE")+"\n발행된 전표가 업습니다.")
        // 				this.dsList.filter("");
        // 				return false;
        // 			}
        // 		}
        // 	}
        // 	this.dsList.filter("");
        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");
        };


        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCancelSlip.clearData();

        		var arrDir = [];
        		for(var r = 0; r < this.dsList.rowcount; r++) {
        			if(this.dsList.getColumn(r, this.ucFlag) != '#' && this.dsList.getColumn(r, "CHK") == 1){
        				if(!this.gfnIsNull(nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(r, "CD_TRADE"),""))))){
        					arrDir.push(this.dsList.getColumn(r, "CD_TRADE"));
        				}
        			}
        		}

        		//처리할 데이터 담기
        		var nRow = this.dsCancelSlip.addRow();
        		this.dsCancelSlip.setColumn(nRow, "CD_TRADE", arrDir.join(','));
        		//this.dsCancelSlip.setColumn(nRow, "CD_TRADE", this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE")));

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

        //필수체크
        this.fnSaveValidation = function ()
        {
        // 	for(var i=0;i<this.dsList.rowcount;i++){
        // 		if(this.dsList.getCaseCount("CD_ACASSET == '" + this.dsList.getColumn(i, "CD_ACASSET") + "'") > 1){
        // 			this.gfnAlert("자산코드(은)는 중복될수 없습니다.");
        // 			return false;
        // 		}
        // 	}
        //
        // 	return true;
        };

        /************************************************************************
        * 확장버튼 그리드컬럼 설정관련
        ************************************************************************/
        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btnDtlsCrt, this.dsList);
        	this.gfnBtnCheck(this.btnSlipIssue, this.dsList);
        	this.gfnBtnCheck(this.btnSlipSearch, this.dsList);
        	this.gfnBtnCheck(this.btnSlipCancel, this.dsList);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHN_LSECLSNGDTLS_SLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
