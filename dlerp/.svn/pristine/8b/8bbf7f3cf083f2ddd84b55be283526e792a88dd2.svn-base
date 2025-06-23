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
            this.set_titletext("리스자산/부채결산");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_LSECLSNG_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DHNPR_LSECLSNG_SAVE</Col></Row><Row><Col id=\"TARGET\">select_m</Col><Col id=\"SP\">DHZPR_SRNMSG_SELECT</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DHNPR_LSECLSNG_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj.set_taborder("3");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("FitToContents").set("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_ACNT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACNT","staYM_ACNT:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ctclYM_ACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("FitToContents").set("true");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DHN_LSECLSNG.xfdl", function() {
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

        	//화면메세지
        	this.fnSetMsg();

        	//타화면에서 호출되었을 경우
        	this.dsSearch.set_enableevent(false);

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP)){
        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);
        	}else{
        		this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        	}

        	if(!this.gfnIsNull(this.getOwnerFrame().YM_ACCOUNT)){
        		this.dsSearch.setColumn(0, "YM_ACNT", this.getOwnerFrame().YM_ACCOUNT);
        	}else{
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0,"YM_ACNT",today.substr(0,6));
        	}

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_DEPT)){
        		this.dsSearch.setColumn(0, "CD_DEPT", this.getOwnerFrame().CD_DEPT);
        		this.dsSearch.setColumn(0, "DS_DEPT", this.getOwnerFrame().DS_CORP);
        	}
        	this.dsSearch.set_enableevent(true);

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP)) {
        		this.FormBtns.Select.click();
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
        	this.btnLseAsst			= this.gfnFormButtonAdd("btnLseAsst", "fnLseAsst"); 			//리스계약정보 버튼
            this.btnLseClsngDtls	= this.gfnFormButtonAdd("btnLseClsngDtls", "fnLseClsngDtls"); 	//결산내역관리 버튼
        	this.btnLseClsngDtlsSet	= this.gfnFormButtonAdd("btnLseClsngDtlsSet", "fnLseClsngDtlsSet"); 	//결산내역관리(이관) 버튼
        	this.btnSlipIssue  		= this.gfnFormButtonAdd("btnSlipIssue", "fnSlipIssue"); 		//전표발행 버튼
        	this.btnSlipSearch  	= this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch"); 		//전표조회 버튼
        	this.btnSlipCancel  	= this.gfnFormButtonAdd("btnSlipCancel", "fnSlipCancel"); 		//전표취소 버튼
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
            this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclYM_ACNT = this.divSearch.form.ctclYM_ACNT;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHN_LSECLSNG");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	// row 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        	//this.dxGrid.ExpandUp = "fnGridSub_ExpandUp";		// 그리드버튼

        	// 조회조건 코드파인드 관련
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
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

        	// 화면메세지 조회
        	this.dsSrcMsg = new Dataset();
        	this.dsSrcMsg.addColumn("TY_WRK", "string");
        	this.dsSrcMsg.addColumn("CD_SYSTEM", "string");
        	this.dsSrcMsg.addColumn("CD_TYPE", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("NO_LSEASST", "string");
        	this.dsSave.addColumn("NO_CHNG", "string");
        	this.dsSave.addColumn("NO_CLSNG", "string");
        	this.dsSave.addColumn("DT_ACNT", "string");
        	this.dsSave.addColumn("DS_OLN", "string");
        	this.dsSave.addColumn("DS_RMKS", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_CORP", "string");
        	this.dsExec.addColumn("YM_ACNT", "string");
        	this.dsExec.addColumn("NO_LSEASST", "string");
        	this.dsExec.addColumn("NO_CHNG", "string");
        	this.dsExec.addColumn("NO_CLSNG", "string");
        	this.dsExec.addColumn("CD_DEPT", "string");
        	this.dsExec.addColumn("CD_TRADE", "string");
        }


        /*
        * 화면 메세지 처리
        */
        this.fnSetMsg = function() {

        	this.dsSrcMsg.clearData();
        	this.dsSrcMsg.addRow();

        	this.dsSrcMsg.setColumn(0, "TY_WRK" 		, "N015,N016");
        	this.dsSrcMsg.setColumn(0, "CD_SYSTEM"		, "DH");
        	this.dsSrcMsg.setColumn(0, "CD_TYPE" 		, "Z99");

        	var strSvcId    = "select_m";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_m=dsSrcMsg";
        	var outData     = "dsMsgList=select_m0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
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
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "NO_LSEASST", this.dsList.getColumn(i, "NO_LSEASST"));
        				this.dsSave.setColumn(nrow, "NO_CHNG", this.dsList.getColumn(i, "NO_CHNG"));
        				this.dsSave.setColumn(nrow, "NO_CLSNG", this.dsList.getColumn(i, "NO_CLSNG"));
        				this.dsSave.setColumn(nrow, "DT_ACNT", this.dsList.getColumn(i, "DT_ACNT"));
        				this.dsSave.setColumn(nrow, "DS_OLN", this.dsList.getColumn(i, "DS_OLN"));
        				this.dsSave.setColumn(nrow, "DS_RMKS", this.dsList.getColumn(i, "DS_RMKS"));
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
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "SLPPUB") {
        		if (errorCode == 0) {
        			this.gfnAlert(this.dsMsgList.getColumn(this.dsMsgList.findRow("MSG_CODE", "N015"), "MSG_CMPL"), "fnCallback_Callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "SLPCNC"){
        		if (errorCode == 0) {
        			this.gfnAlert(this.dsMsgList.getColumn(this.dsMsgList.findRow("MSG_CODE", "N016"), "MSG_CMPL"), "fnCallback_Callback");
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
        		if(this.gfnIsNull(cdCorp)){
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
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_DEPT.form.fnCodeFindClear();
        	} else if(id == "ccfCD_DEPT") {
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        };

        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명
        	return;
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        	//if(e.columnid == "DT_ACNT"){
        	//}
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
        //	리스계약관리
        this.fnLseAsst = function(obj,e) {

        	var objDs = this.dxGrid.getBindDataset();
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP")
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP")
        	param.CD_DEPT = objDs.getColumn(objDs.rowposition, "CD_DEPT");
        	param.DS_DEPT = objDs.getColumn(objDs.rowposition, "DS_DEPT");
        	param.NO_LSEASST = objDs.getColumn(objDs.rowposition, "NO_LSEASST");
        	param.DS_LSEASST = objDs.getColumn(objDs.rowposition, "DS_LSEASST");

        	this.gfnFormOpen("DHN", "DHN_LSEASST", "", param);
        }


        // 결산내역관리
        this.fnLseClsngDtls = function(strId, val) {

        	var objDs = this.dxGrid.getBindDataset();
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP")
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP")
        	param.YM_ACNT = this.dsSearch.getColumn(0, "YM_ACNT")
        	param.CD_DEPT = objDs.getColumn(objDs.rowposition, "CD_DEPT");
        	param.DS_DEPT = objDs.getColumn(objDs.rowposition, "DS_DEPT");
        	param.NO_LSEASST = objDs.getColumn(objDs.rowposition, "NO_LSEASST");
        	param.NO_CHNG = objDs.getColumn(objDs.rowposition, "NO_CHNG");
        	param.DS_LSEASST = objDs.getColumn(objDs.rowposition, "DS_LSEASST");

        	this.gfnFormOpen("DHN", "DHN_LSECLSNGDTLS", "", param);
        }

        // 결산내역관리(이관)
        this.fnLseClsngDtlsSet = function(strId, val) {

        	var objDs = this.dxGrid.getBindDataset();
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP")
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP")
        	param.YM_ACNT = this.dsSearch.getColumn(0, "YM_ACNT")
        	param.CD_DEPT = objDs.getColumn(objDs.rowposition, "CD_DEPT");
        	param.DS_DEPT = objDs.getColumn(objDs.rowposition, "DS_DEPT");
        	param.NO_LSEASST = objDs.getColumn(objDs.rowposition, "NO_LSEASST");
        	param.NO_CHNG = "000";
        	param.DS_LSEASST = objDs.getColumn(objDs.rowposition, "DS_LSEASST");

        	this.gfnFormOpen("DHN", "DHN_LSECLSNGDTLS_SET", "", param);
        }

        // 전표발행
        this.fnSlipIssue = function(obj,e) {

        	var strMsg = this.dsMsgList.getColumn(this.dsMsgList.findRow("MSG_CODE", "N015"), "MSG_CNFR");

        	if(this.dsList.findRow("CHK", "Y") < 0){
        		this.gfnAlert("전표발행 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	var chkCnt = 0;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "Y"){
        			chkCnt = chkCnt + 1;
        		}
        	}

        	strMsg = strMsg.replace("@YM_ACNT", this.dsSearch.getColumn(0, "YM_ACNT"));
        	strMsg = strMsg.replace("@NO_CNT", chkCnt);

        	this.gfnConfirm(strMsg, "fnSlip_callback", "SLPPUB");

        };

        // 전표조회
        this.fnSlipSearch = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;
        	if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))) {
        		this.gfnAlert("전표번호가 존재하지 않습니다.");
        		return;
        	}

        	var param = {};
        	param.CD_CORP  = this.dsSearch.getColumn(0, "CD_CORP");
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");

        	this.gfnPopIssueSlip(param);
        };

        // 전표쥐소
        this.fnSlipCancel = function(obj,e) {

        	var strMsg = this.dsMsgList.getColumn(this.dsMsgList.findRow("MSG_CODE", "N016"), "MSG_CNFR");

        	if(this.dsList.findRow("CHK", "Y") < 0){
        		this.gfnAlert("전표취소 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	var chkCnt = 0;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "Y"){
        			chkCnt = chkCnt + 1;
        		}
        	}

        	strMsg = strMsg.replace("@YM_ACNT", this.dsSearch.getColumn(0, "YM_ACNT"));
        	strMsg = strMsg.replace("@NO_CNT", chkCnt);

        	this.gfnConfirm(strMsg, "fnSlip_callback", "SLPCNC");

        };

        // 전표 발행 or 취소 처리
        this.fnSlip_callback = function(strId, val) {
        	if(val == true)
        	{
        		this.fnHdExec(strId);
        	}
        }

        this.fnHdExec = function(flg){
        	this.dxGrid.updateToDataset();
        	this.dsExec.clearData();

        	for(var i=0;i < this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK") == "Y"){
        			var nrow = this.dsExec.addRow();
        			this.dsExec.setColumn(nrow, "TY_WRK", flg);
        			this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsExec.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsExec.setColumn(nrow, "YM_ACNT", this.dsSearch.getColumn(0, "YM_ACNT").substr(0,6));
        			this.dsExec.setColumn(nrow, "NO_LSEASST", this.dsList.getColumn(i, "NO_LSEASST"));
        			this.dsExec.setColumn(nrow, "NO_CHNG", this.dsList.getColumn(i, "NO_CHNG"));
        			this.dsExec.setColumn(nrow, "NO_CLSNG", this.dsList.getColumn(i, "NO_CLSNG"));
        			this.dsExec.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT_ACNT);
        			this.dsExec.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        		}
        	}

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "execute";
        	strSvcId = flg;
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
        	this.gfnBtnCheck(this.btnLseAsst, this.dsList);
        	this.gfnBtnCheck(this.btnLseClsngDtls, this.dsList);
        	this.gfnBtnCheck(this.btnLseClsngDtlsSet, this.dsList);
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
        this.loadIncludeScript("DHN_LSECLSNG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
