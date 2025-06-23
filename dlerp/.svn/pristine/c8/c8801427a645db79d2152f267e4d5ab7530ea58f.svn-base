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
            this.set_titletext("리스계약관리(현장)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_LSEASSTSITE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DHNPR_LSEASSTSITE_SAVE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DHNPR_LSEASSTSITE_EXECUTE</Col></Row><Row><Col id=\"TARGET\">select_message</Col><Col id=\"SP\">DHZPR_SRNMSG_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrcMsg", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_CODE\" type=\"STRING\" size=\"512\"/><Column id=\"MSG_CNFR\" type=\"STRING\" size=\"512\"/><Column id=\"MSG_CMPL\" type=\"STRING\" size=\"512\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrcMsgTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_CODE\" type=\"STRING\" size=\"512\"/><Column id=\"MSG_CNFR\" type=\"STRING\" size=\"512\"/><Column id=\"MSG_CMPL\" type=\"STRING\" size=\"512\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("0");
            obj.set_text("법인코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("FitToContents").set("true");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("2");
            obj.set_text("귀속부서");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("FitToContents").set("true");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_ACNT","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("4");
            obj.set_text("기준년월");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACNT","staYM_ACNT:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
            obj.getSetter("autoselect").set("true");
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
        this.registerScript("DHN_LSEASSTSITE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj, e) {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetParameter();
        	this.fnSetCombo();
        	this.fnSetEvent();
        	this.fnSetMessage(["N035", "N050", "N051", "N052", "N053"]);
        	this.fnFormLoad();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDataCrt 	= this.gfnFormButtonAdd("btnDataCrt", "fnDataCrt");		// 자료생성 버튼
        	this.btnAttachFile 	= this.gfnFormButtonAdd("btnAttachFile"	 , "fnAttachFile"); 	// 첨부파일관리
        	this.btnLseChng 	= this.gfnFormButtonAdd("btnLseChng", "fnLseChng");		// 변경생성 버튼
        	this.btnMidTrmn 	= this.gfnFormButtonAdd("btnMidTrmn", "fnMidTrmn");		// 중도해지 버튼
        	this.btnVldtReq 	= this.gfnFormButtonAdd("btnVldtReq", "fnVldtReq");		// 검증요청 버튼
        	this.btnReqCnc  	= this.gfnFormButtonAdd("btnReqCnc", "fnReqCnc");		// 검증요청취소 버튼
        };

        /************************************************************************
        * 확장버튼 그리드컬럼 설정관련
        ************************************************************************/
        this.fnBtnCheckAll = function() {
        	this.gfnBtnCheck(this.btnDataCrt, this.dsList);	 // 자료생성 버튼
        	this.gfnBtnCheck(this.btnAttachFile, this.dsList);	 // 첨부파일관리 버튼
        	this.gfnBtnCheck(this.btnLseChng, this.dsList);	 // 변경생성 버튼
        	this.gfnBtnCheck(this.btnMidTrmn, this.dsList);	 // 중도해지 버튼
        	this.gfnBtnCheck(this.btnVldtReq, this.dsList);	 // 검증요청 버튼
        	this.gfnBtnCheck(this.btnReqCnc, this.dsList);	 //	검증요청취소 버튼
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
            this.dxGrid = this.divData.form.objGrid;

        	this.ccfCD_CORP  = this.divSearch.form.ccfCD_CORP;	// 법인코드
        	this.ccfCD_DEPT  = this.divSearch.form.ccfCD_DEPT;	// 귀속부서
        	this.ctclYM_ACNT = this.divSearch.form.ctclYM_ACNT;	// 기준년월
        };

        /************************************************************************
         * 콤보 설정
         ************************************************************************/
        this.fnSetCombo = function() {
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
            // 검색
         	this.dsSearch.addEventHandler("onvaluechanged" , this.fnSearch_onvaluechanged, this);
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 법인코드
        	this.ccfCD_CORP.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 취득부서
            this.ccfCD_DEPT.AfterCDTextChanged     = "fnAfterCDTextChanged";

            // 그리드
            this.dxGrid.AfterInit              = "fnGrid_AfterInit";
            this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHN_LSEASSTSITE");
            this.dxGrid.EnterCell              = "fnGrid_EnterCell";
            this.dxGrid.AfterEdit              = "fnGrid_AfterEdit";
            this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
            this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("YM_ACNT", "string");

        	// 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("YM_ACNT", "string");
        	this.dsSave.addColumn("NO_LSEASST", "string");
        	this.dsSave.addColumn("NO_CHNG", "string");
        	this.dsSave.addColumn("DS_LSEASST", "string");
        	this.dsSave.addColumn("CD_LSECLS", "string");
        	this.dsSave.addColumn("CD_LSECLSDTLS", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("DT_LSECNTRC", "string");
        	this.dsSave.addColumn("DT_LSEFR", "string");
        	this.dsSave.addColumn("DT_LSETO", "string");
        	this.dsSave.addColumn("NO_MCNT", "int");
        	this.dsSave.addColumn("AM_LSETOT", "bigdecimal");
        	this.dsSave.addColumn("AM_LSEYLY", "bigdecimal");
        	this.dsSave.addColumn("AM_LSEMLY", "bigdecimal");
        	this.dsSave.addColumn("NO_CNTRC", "string");
        	this.dsSave.addColumn("DS_CNTRC", "string");
        	this.dsSave.addColumn("DS_RMKS", "string");
        	this.dsSave.addColumn("TY_STATS", "string");

        	// 실행
        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_WRK", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("CD_CORP", "string");
        	this.dsExecute.addColumn("CD_DEPT", "string");
        	this.dsExecute.addColumn("YM_ACNT", "string");
        	this.dsExecute.addColumn("NO_LSEASST", "string");
        	this.dsExecute.addColumn("NO_CHNG", "string");

        	// 메시지
        	this.dsMessage = new Dataset();
        	this.dsMessage.addColumn("TY_WRK",    "string");
        	this.dsMessage.addColumn("CD_SYSTEM", "string");
        	this.dsMessage.addColumn("CD_TYPE",   "string");
        };

        /************************************************************************
         * 메시지 설정
         ************************************************************************/
        this.fnSetMessage = function(TY_WRK) {
        	for (var i = 0; i < TY_WRK.length; i++) {
        		this.dsMessage.clearData();
        		this.dsMessage.addRow();
        		this.dsMessage.setColumn(0, "TY_WRK"   , TY_WRK[i]);
        		this.dsMessage.setColumn(0, "CD_SYSTEM", "DH");
        		this.dsMessage.setColumn(0, "CD_TYPE"  , "Z99");

        		var strSvcId    = "select_message";
        		var strSvcType  = "select";
        		var inProc      = "_dsProc";
        		var inData      = "select_message=dsMessage";
        		var outData     = "dsSrcMsgTemp=select_message0";
        		var strArg      = "";
        		var callBackFnc = "";

        		this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc, false);

        		var nrow = this.dsSrcMsg.addRow();
        		this.dsSrcMsg.setColumn(nrow, "MSG_CODE", this.dsSrcMsgTemp.getColumn(0, "MSG_CODE"));
        		this.dsSrcMsg.setColumn(nrow, "MSG_CNFR", this.dsSrcMsgTemp.getColumn(0, "MSG_CNFR"));
        		this.dsSrcMsg.setColumn(nrow, "MSG_CMPL", this.dsSrcMsgTemp.getColumn(0, "MSG_CMPL"));
        	}
        };

        /************************************************************************
         * 폼로드 설정
         ************************************************************************/
        this.fnFormLoad = function() {
        	if (!this.gfnIsNull(this.getOwnerFrame().CD_CORP) &&
        	    !this.gfnIsNull(this.getOwnerFrame().DS_CORP) &&
        		!this.gfnIsNull(this.getOwnerFrame().CD_DEPT) &&
        		!this.gfnIsNull(this.getOwnerFrame().DS_DEPT)) {
        		this.dsSearch.setColumn(0, "CD_CORP" , this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);
        		this.dsSearch.setColumn(0, "CD_GETDEPT", this.getOwnerFrame().CD_DEPT);
        		this.dsSearch.setColumn(0, "DS_GETDEPT", this.getOwnerFrame().DS_DEPT);
        		this.FormBtns.Select.click();
        	} else {
        		this.dsSearch.setColumn(0, "CD_CORP" , this.AuthClient.CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        		this.dsSearch.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT_ACNT);
        		this.dsSearch.setColumn(0, "DS_DEPT", this.AuthClient.DS_DEPT_ACNT);
        		this.dsSearch.setColumn(0, "YM_ACNT", this.gfnGetDate().substring(0, 6));
        	}
        	this.ccfCD_CORP.setFocus();
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
            if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "YM_ACNT", this.dsSearch.getColumn(0, "YM_ACNT"));
        	this.fnInitEmptyColumn(this.dsSelect);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc, true);
        };

        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom");
        	this.dsList.setColumn(nrow, "YN_EDIT", "Y");
        	this.dsList.setColumn(nrow, "YN_DEL", "Y");
        	this.dsList.setColumn(nrow, "NO_CHNG", "000");
        };

        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch (flag) {
        		case "I":
        		case "U":
        		case "D":
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "TY_WRK", flag);
        			this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsSave.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSave.setColumn(nrow, "YM_ACNT", this.dsSearch.getColumn(0, "YM_ACNT"));
        			this.dsSave.setColumn(nrow, "NO_LSEASST", this.dsList.getColumn(i, "NO_LSEASST"));
        			this.dsSave.setColumn(nrow, "NO_CHNG", this.dsList.getColumn(i, "NO_CHNG"));
        			this.dsSave.setColumn(nrow, "DS_LSEASST", this.dsList.getColumn(i, "DS_LSEASST"));
        			this.dsSave.setColumn(nrow, "CD_LSECLS", this.dsList.getColumn(i, "CD_LSECLS"));
        			this.dsSave.setColumn(nrow, "CD_LSECLSDTLS", this.dsList.getColumn(i, "CD_LSECLSDTLS"));
        			this.dsSave.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        			this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        			this.dsSave.setColumn(nrow, "DT_LSECNTRC", this.dsList.getColumn(i, "DT_LSECNTRC"));
        			this.dsSave.setColumn(nrow, "DT_LSEFR", this.dsList.getColumn(i, "DT_LSEFR"));
        			this.dsSave.setColumn(nrow, "DT_LSETO", this.dsList.getColumn(i, "DT_LSETO"));
        			this.dsSave.setColumn(nrow, "NO_MCNT", this.dsList.getColumn(i, "NO_MCNT"));
        			this.dsSave.setColumn(nrow, "AM_LSETOT", this.dsList.getColumn(i, "AM_LSETOT"));
        			this.dsSave.setColumn(nrow, "AM_LSEYLY", this.dsList.getColumn(i, "AM_LSEYLY"));
        			this.dsSave.setColumn(nrow, "AM_LSEMLY", this.dsList.getColumn(i, "AM_LSEMLY"));
        			this.dsSave.setColumn(nrow, "NO_CNTRC", this.dsList.getColumn(i, "NO_CNTRC"));
        			this.dsSave.setColumn(nrow, "DS_CNTRC", this.dsList.getColumn(i, "DS_CNTRC"));
        			this.dsSave.setColumn(nrow, "DS_RMKS", this.dsList.getColumn(i, "DS_RMKS"));
        			this.dsSave.setColumn(nrow, "TY_STATS", this.dsList.getColumn(i, "TY_STATS"));
        			break;
        		}
        	}
        	if (this.dsSave.rowcount == 0) return;
        	this.fnInitEmptyColumn(this.dsSave);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc, true);
        };

        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			return;
        		}
        	}
        	this.FormBtns.Save.set_enable(false);
        };

        this.fnExcel = function() {
            this.gfnExcelExport(this.dxGrid);
        };

        this.fnPrint = function() {
        };

        /************************************************************************
         * 데이터 검증
         ************************************************************************/
        /*
         *	조회 Validate : gfnSearchValidate 로 처리하고 특이 케이스의 경우 별도 처리
         */
        this.fnSearchValidate = function() {
            return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

            if (svcID == "select") {
                this.gfnGridAfterSelect(this.dxGrid);
        		this.fnBtnCheckAll();
            } else if (svcID == "save") {
        		this.FormBtns.Select.click();
        	} else if (svcID == "fnDataCrt") {
        		this.gfnAlert(this.fnGetCompleteMessage("N053"), "fnCallback_Callback", "fnDataCrt");
        	} else if (svcID == "fnLseChng") {
        		this.gfnAlert(this.fnGetCompleteMessage("N035"), "fnCallback_Callback", "fnLseChng");
        	} else if (svcID == "fnMidTrmn") {
        		this.gfnAlert(this.fnGetCompleteMessage("N050"), "fnCallback_Callback", "fnMidTrmn");
        	} else if (svcID == "fnVldtReq") {
        		this.gfnAlert(this.fnGetCompleteMessage("N051"), "fnCallback_Callback", "fnVldtReq");
        	} else if (svcID == "fnReqCnc") {
        		this.gfnAlert(this.fnGetCompleteMessage("N052"), "fnCallback_Callback", "fnReqCnc");
        	}
        };

        this.fnCallback_Callback = function(svcID, errorCode, errorMsg) {
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        // 검색 영역(divSearch)에 속한 코드파인드 파라미터 설정
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	switch (id) {
        	// 법인코드
        	case "ccfCD_CORP":
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		break;

        	// 귀속부서
        	case "ccfCD_DEPT":
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
        		break;
            }

        	return true;
        };

        // 검색 영역(divSearch)에 속한 코드파인드의 text 속성이 변경될 때 처리해야할 업무를 정의
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	switch (id) {
        	default:
        		break;
            }
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        // 그리드가 초기화된 이후 실행되어야할 업무를 정의
        this.fnGrid_AfterInit = function(obj) {
        	this.dxGrid.setFormatRowProperty(1, "size", 45);
        };

        // 그리드의 특정 로우/셀에 진입하였을 때 실행되어야할 업무를 정의
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	//return;
        };

        // 그리드의 특정 셀의 값이 변경된 후 실행되어야할 업무 정의
        this.fnGrid_AfterEdit = function(obj, e) {
            if (e.oldvalue != e.newvalue) {
        		switch (e.columnid) {
        		case "DT_LSEFR":	// 임차시작일자
        		case "DT_LSETO":	// 임차종료일자
        			var DT_LSEFR = this.dsList.getColumn(this.dsList.rowposition, "DT_LSEFR");
        			var DT_LSETO = this.dsList.getColumn(this.dsList.rowposition, "DT_LSETO");

        			if (!this.gfnIsNull(DT_LSEFR) && !this.gfnIsNull(DT_LSETO)){
        				var dateDT_LSEFR = new Date(DT_LSEFR.substr(0, 4), DT_LSEFR.substr(4, 2) - 1, DT_LSEFR.substr(6, 2));
        				var dateDT_LSETO = new Date(DT_LSETO.substr(0, 4), DT_LSETO.substr(4, 2) - 1, DT_LSETO.substr(6, 2));

        				// 리스기간
        				var NO_MCNT = parseInt((dateDT_LSETO.getFullYear() * 12 + dateDT_LSETO.getMonth()) - (dateDT_LSEFR.getFullYear() * 12 + dateDT_LSEFR.getMonth())) + 1;
        				this.dsList.setColumn(this.dsList.rowposition, "NO_MCNT", NO_MCNT);
        			}

        		case "AM_LSETOT":	// 임대료(총액)
        			var AM_LSETOT = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_LSETOT"));
        			var NO_MCNT = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "NO_MCNT"));

        			// 임대료(년간)
        			var AM_LSEYLY = Math.round((AM_LSETOT * 12) / NO_MCNT);
        			this.dsList.setColumn(this.dsList.rowposition, "AM_LSEYLY", AM_LSEYLY);

        			// 임대료(월간)
        			var AM_LSEMLY = Math.round(AM_LSETOT / NO_MCNT);
        			this.dsList.setColumn(this.dsList.rowposition, "AM_LSEMLY", AM_LSEMLY);
        			break;
        		}
        	}
        };

        // 그리드에 위치한 코드파인드의 파라미터 설정
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch (id) {
        	// 계약번호
        	case "DHX_CFLSECONT":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        		break;

        	// 거래처
        	case "DHX_CFVENDOR":
        		dsUserParam.setColumn(nrow, "CD_CORP",   this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "F");
        		dsUserParam.setColumn(nrow, "YN_USE",    "Y");
        		break;

        	// 분류코드
        	case "DHX_CFLSECLS_1":
        		dsUserParam.setColumn(nrow, "CD_CORP",   this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "TY_LSECLS", "C");
        		dsUserParam.setColumn(nrow, "CD_LSECLS", "");
        		break;

        	// 세부분류코드
        	case "DHX_CFLSECLS_2":
        		dsUserParam.setColumn(nrow, "CD_CORP",   this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "TY_LSECLS", "D");
        		dsUserParam.setColumn(nrow, "CD_LSECLS", this.dsList.getColumn(this.dsList.rowposition, "CD_LSECLS"));
        		break;
        	}
        	return true
        };

        // 그리드에 위치한 코드파인드의 text 속성이 변경될 때 처리해야할 업무를 정의
        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	switch (id) {
        	case "DHX_CFLSECONT":
        		var nrow = this.dsList.rowposition;
        		this.dsList.setColumn(nrow, "NO_CNTRC", codeFindData[0].NO_CNTRC);			// 계약번호
        		this.dsList.setColumn(nrow, "DS_CNTRC", codeFindData[0].DS_CNTRC);			// 계약명

        		if (this.dsList.getColumn(nrow, "nx_flag") == "I") {
        			this.dsList.setColumn(nrow, "CD_VENDOR", codeFindData[0].CD_VENDOR);		// 거래처코드
        			this.dsList.setColumn(nrow, "DS_VENDOR", codeFindData[0].DS_VENDOR);		// 거래처명
        			this.dsList.setColumn(nrow, "DT_LSECNTRC", codeFindData[0].DT_LSECNTRC);	// 계약일자
        			this.dsList.setColumn(nrow, "DT_LSEFR", codeFindData[0].DT_LSEFR);			// 임차시작일자
        			this.dsList.setColumn(nrow, "DT_LSETO", codeFindData[0].DT_LSETO);			// 임차종료일자
        			this.dsList.setColumn(nrow, "NO_MCNT", codeFindData[0].NO_MCNT);			// 개월(기간)
        			this.dsList.setColumn(nrow, "AM_LSETOT", codeFindData[0].AM_LSETOT);		// 계약금액
        			this.dsList.setColumn(nrow, "AM_LSEYLY", codeFindData[0].AM_LSEYLY);		// 년간금액
        			this.dsList.setColumn(nrow, "AM_LSEMLYT", codeFindData[0].AM_LSEMLYT);		// 월간금액

        			var DT_LSEFR = this.dsList.getColumn(this.dsList.rowposition, "DT_LSEFR");
        			var DT_LSETO = this.dsList.getColumn(this.dsList.rowposition, "DT_LSETO");
        			var dateDT_LSEFR = new Date(DT_LSEFR.substr(0, 4), DT_LSEFR.substr(4, 2) - 1, DT_LSEFR.substr(6, 2));
        			var dateDT_LSETO = new Date(DT_LSETO.substr(0, 4), DT_LSETO.substr(4, 2) - 1, DT_LSETO.substr(6, 2));

        			// 리스기간
        			var NO_MCNT = parseInt((dateDT_LSETO.getFullYear() * 12 + dateDT_LSETO.getMonth()) - (dateDT_LSEFR.getFullYear() * 12 + dateDT_LSEFR.getMonth())) + 1;
        			this.dsList.setColumn(this.dsList.rowposition, "NO_MCNT", NO_MCNT);

        			// 임대료(총액)
        			var AM_LSETOT = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_LSETOT"));

        			// 임대료(년간)
        			var AM_LSEYLY = Math.round((AM_LSETOT * 12) / NO_MCNT);
        			this.dsList.setColumn(this.dsList.rowposition, "AM_LSEYLY", AM_LSEYLY);

        			// 임대료(월간)
        			var AM_LSEMLY = Math.round(AM_LSETOT / NO_MCNT);
        			this.dsList.setColumn(this.dsList.rowposition, "AM_LSEMLY", AM_LSEMLY);
        		}
        		break;

        	case "DHX_CFLSECLS_1":
        		var nrow = this.dsList.rowposition;
        		var CD_LSECLSDTLS = this.dsList.getColumn(nrow, "CD_LSECLSDTLS");
        		if (CD_LSECLSDTLS != null && !CD_LSECLSDTLS.startsWith(codeFindData[0].CD_LSECLS)) {
        			this.dsList.setColumn(nrow, "CD_LSECLSDTLS", "");	// 세부분류코드
        			this.dsList.setColumn(nrow, "DS_LSECLSDTLS", "");	// 세부분류명
        		}
        		break;
        	}
        };

        this.fnGrid_RowCellChanged = function(obj,e) {
            if ((obj.oldrow > -1 && obj.oldrow == e.row) || (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.fnBtnCheckAll();
        		obj.oldrow = -1;
           }
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearch_onvaluechanged = function(obj, e) {
            if (e.oldvalue != e.newvalue) {
                this.gfnSetFormStatus(this);	// 폼상태 초기화
                this.gfnGridClear(this.dxGrid);
            }
        };

        // 자료생성 버튼 이벤트
        this.fnDataCrt = function(obj, e) {
        	var confirmMsg = this.fnGetConfirmMessage("N053");
        	confirmMsg = confirmMsg.replace("@YM_ACNT", this.dsSearch.getColumn(0, "YM_ACNT"));

         	this.gfnConfirm(confirmMsg, "fnDataCrt_Callback");
        };

        // 자료생성 실행 콜백
        this.fnDataCrt_Callback = function(strId, val) {
        	if (val) {
        		this.dsExecute.clearData();
        		this.dsExecute.addRow();
        		this.dsExecute.setColumn(0, "TY_WRK", "DATACRT");
        		this.dsExecute.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsExecute.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	// 법인코드(조회조건)
        		this.dsExecute.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));	// 귀속부서(조회조건)
        		this.dsExecute.setColumn(0, "YM_ACNT", this.dsSearch.getColumn(0, "YM_ACNT"));	// 기준년월(조회조건)
        		this.fnInitEmptyColumn(this.dsExecute);

        		var strSvcId    = "fnDataCrt";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "execute=dsExecute";
        		var outData     = "dsExecute=execute";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc, true);
        	}
        };

        // 첨부파일관리
        this.fnAttachFile = function (obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DHN1";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"CD_CORP"),
        					this.dsList.getColumn(this.dsList.rowposition, "NO_LSEASST"), this.dsList.getColumn(this.dsList.rowposition, "NO_CHNG")];

        	if(this.dsList.getColumn(this.dsList.rowposition, "YN_EDIT") == "Y") {
        		fileManager.IS_READONLY = false;
        	} else {
        		fileManager.IS_READONLY = true;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        // 변경생성 버튼 이벤트
        this.fnLseChng = function(obj, e) {
        	var confirmMsg = this.fnGetConfirmMessage("N035");
        	confirmMsg = confirmMsg.replace("@NO_LSEASST", this.dsList.getColumn(this.dsList.rowposition, "NO_LSEASST"));
        	confirmMsg = confirmMsg.replace("@DS_LSEASST", this.dsList.getColumn(this.dsList.rowposition, "DS_LSEASST"));
        	confirmMsg = confirmMsg.replace("@NO_CHNG", this.dsList.getColumn(this.dsList.rowposition, "NO_CHNG"));

         	this.gfnConfirm(confirmMsg, "fnLseChng_Callback");
        };

        // 변경생성 실행 콜백
        this.fnLseChng_Callback = function(strId, val) {
        	if (val) {
        		this.dsExecute.clearData();
        		this.dsExecute.addRow();
        		this.dsExecute.setColumn(0, "TY_WRK", "LSECHNG");
        		this.dsExecute.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsExecute.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));								// 법인코드(조회조건)
        		this.dsExecute.setColumn(0, "YM_ACNT", this.dsSearch.getColumn(0, "YM_ACNT"));								// 기준년월(조회조건)
        		this.dsExecute.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));								// 귀속부서(조회조건)
        		this.dsExecute.setColumn(0, "NO_LSEASST", this.dsList.getColumn(this.dsList.rowposition, "NO_LSEASST"));	// 그리드 선택 ROW 자산번호(NO_LSEASST)
        		this.dsExecute.setColumn(0, "NO_CHNG", this.dsList.getColumn(this.dsList.rowposition, "NO_CHNG"));			// 그리드 선택 ROW 변경차수(NO_CHNG)
        		this.fnInitEmptyColumn(this.dsExecute);

        		var strSvcId    = "fnLseChng";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "execute=dsExecute";
        		var outData     = "dsExecute=execute";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc, true);
        	}
        };

        // 중도해지 버튼 이벤트
        this.fnMidTrmn = function(obj, e) {
        	var confirmMsg = this.fnGetConfirmMessage("N050");
        	confirmMsg = confirmMsg.replace("@NO_LSEASST", this.dsList.getColumn(this.dsList.rowposition, "NO_LSEASST"));
        	confirmMsg = confirmMsg.replace("@DS_LSEASST", this.dsList.getColumn(this.dsList.rowposition, "DS_LSEASST"));
        	confirmMsg = confirmMsg.replace("@NO_CHNG", this.dsList.getColumn(this.dsList.rowposition, "NO_CHNG"));

         	this.gfnConfirm(confirmMsg, "fnMidTrmn_Callback");
        };

        // 중도해지 실행 콜백
        this.fnMidTrmn_Callback = function(strId, val) {
        	if (val) {
        		this.dsExecute.clearData();
        		this.dsExecute.addRow();
        		this.dsExecute.setColumn(0, "TY_WRK", "MIDTRMN");
        		this.dsExecute.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsExecute.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));								// 법인코드(조회조건)
        		this.dsExecute.setColumn(0, "YM_ACNT", this.dsSearch.getColumn(0, "YM_ACNT"));								// 기준년월(조회조건)
        		this.dsExecute.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));								// 귀속부서(조회조건)
        		this.dsExecute.setColumn(0, "NO_LSEASST", this.dsList.getColumn(this.dsList.rowposition, "NO_LSEASST"));	// 그리드 선택 ROW 자산번호(NO_LSEASST)
        		this.dsExecute.setColumn(0, "NO_CHNG", this.dsList.getColumn(this.dsList.rowposition, "NO_CHNG"));			// 그리드 선택 ROW 변경차수(NO_CHNG)
        		this.fnInitEmptyColumn(this.dsExecute);

        		var strSvcId    = "fnMidTrmn";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "execute=dsExecute";
        		var outData     = "dsExecute=execute";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc, true);
        	}
        };

        // 검증요청 버튼 이벤트
        this.fnVldtReq = function(obj, e) {
        	var checkedRows = this.fnGetCheckRows();
        	if (checkedRows.length == 0) {
        		this.gfnAlert("선택된 검증요청 대상이 없습니다.");
        		return;
        	}

        	var confirmMsg = this.fnGetConfirmMessage("N051");
        	confirmMsg = confirmMsg.replace("@CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	confirmMsg = confirmMsg.replace("@DS_DEPT", this.dsSearch.getColumn(0, "DS_DEPT"));
        	confirmMsg = confirmMsg.replace("@NO_CNT", checkedRows.length);

         	this.gfnConfirm(confirmMsg, "fnVldtReq_Callback");
        };

        // 검증요청 실행 콜백
        this.fnVldtReq_Callback = function(strId, val) {
        	if (val) {
        		this.dsExecute.clearData();

        		var checkedRows = this.fnGetCheckRows();
        		for (var i = 0; i < checkedRows.length; i++) {
        			var nrow = this.dsExecute.addRow();
        			this.dsExecute.setColumn(nrow, "TY_WRK", "VLDTREQ");
        			this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsExecute.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));					// 법인코드(조회조건)
        			this.dsExecute.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));					// 귀속부서(조회조건)
        			this.dsExecute.setColumn(nrow, "YM_ACNT", this.dsSearch.getColumn(0, "YM_ACNT"));					// 기준년월(조회조건)
        			this.dsExecute.setColumn(nrow, "NO_LSEASST", this.dsList.getColumn(checkedRows[i], "NO_LSEASST"));	// 그리드 선택 ROW 자산번호(NO_LSEASST)
        			this.dsExecute.setColumn(nrow, "NO_CHNG", this.dsList.getColumn(checkedRows[i], "NO_CHNG"));		// 그리드 선택 ROW 변경차수(NO_CHNG)
        		}
        		this.fnInitEmptyColumn(this.dsExecute);

        		var strSvcId    = "fnVldtReq";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "execute=dsExecute";
        		var outData     = "dsExecute=execute";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc, true);
        	}
        };

        // 검증요청취소 버튼 이벤트
        this.fnReqCnc = function(obj, e) {
        	var checkedRows = this.fnGetCheckRows();
        	if (checkedRows.length == 0) {
        		this.gfnAlert("선택된 검증요청취소 대상이 없습니다.");
        		return;
        	}

        	var confirmMsg = this.fnGetConfirmMessage("N052");
        	confirmMsg = confirmMsg.replace("@CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	confirmMsg = confirmMsg.replace("@DS_DEPT", this.dsSearch.getColumn(0, "DS_DEPT"));
        	confirmMsg = confirmMsg.replace("@NO_CNT", checkedRows.length);

         	this.gfnConfirm(confirmMsg, "fnReqCnc_Callback");
        };

        // 검증요청취소 실행 콜백
        this.fnReqCnc_Callback = function(strId, val) {
        	if (val) {
        		this.dsExecute.clearData();

        		var checkedRows = this.fnGetCheckRows();
        		for (var i = 0; i < checkedRows.length; i++) {
        			var nrow = this.dsExecute.addRow();
        			this.dsExecute.setColumn(nrow, "TY_WRK", "REQCNC");
        			this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsExecute.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));					// 법인코드(조회조건)
        			this.dsExecute.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));					// 귀속부서(조회조건)
        			this.dsExecute.setColumn(nrow, "YM_ACNT", this.dsSearch.getColumn(0, "YM_ACNT"));					// 기준년월(조회조건)
        			this.dsExecute.setColumn(nrow, "NO_LSEASST", this.dsList.getColumn(checkedRows[i], "NO_LSEASST"));	// 그리드 선택 ROW 자산번호(NO_LSEASST)
        			this.dsExecute.setColumn(nrow, "NO_CHNG", this.dsList.getColumn(checkedRows[i], "NO_CHNG"));		// 그리드 선택 ROW 변경차수(NO_CHNG)
        		}
        		this.fnInitEmptyColumn(this.dsExecute);

        		var strSvcId    = "fnReqCnc";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "execute=dsExecute";
        		var outData     = "dsExecute=execute";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc, true);
        	}
        };

        /************************************************************************
         * 사용자 정의 함수
         ************************************************************************/
        // 확인 메시지 반환
        this.fnGetConfirmMessage = function(code) {
        	for (var i = 0; i < this.dsSrcMsg.rowcount; i++) {
        		if (this.dsSrcMsg.getColumn(i, "MSG_CODE") == code) {
        			return this.dsSrcMsg.getColumn(i, "MSG_CNFR");
        		}
        	}
        	return "";
        };

        // 완료 메시지 반환
        this.fnGetCompleteMessage = function(code) {
        	for (var i = 0; i < this.dsSrcMsg.rowcount; i++) {
        		if (this.dsSrcMsg.getColumn(i, "MSG_CODE") == code) {
        			return this.dsSrcMsg.getColumn(i, "MSG_CMPL");
        		}
        	}
        	return "";
        };

        // Dataset의 값이 초기화되지 않은 컬럼의 값을 초기값으로 설정
        this.fnInitEmptyColumn = function(dataset) {
        	for (var i = 0; i < dataset.rowcount; i++) {
        		for (var j = 0; j < dataset.getColCount(); j++) {
        			var col = dataset.getColumnInfo(j);
        			if (dataset.getColumn(i, col.name) == null) {
        				if (col.type == "string") {
        					dataset.setColumn(i, col.name, "");
        				} else if (col.type == "bigdecimal") {
        					dataset.setColumn(i, col.name, 0);
        				} else if (col.type == "int") {
        					dataset.setColumn(i, col.name, 0);
        				}
        			}
        		}
        	}
        };

        // 체크된 ROW 건수 반환
        this.fnGetCheckRows = function() {
        	var check = [];
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == "Y") {
        			check.push(i);
        		}
        	}
        	return check;
        };

        this.fnGrid_FlagCheck = function()
        {
        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);

        	if(flag == "I")
        		return false;

        	return true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DHN_LSEASSTSITE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
