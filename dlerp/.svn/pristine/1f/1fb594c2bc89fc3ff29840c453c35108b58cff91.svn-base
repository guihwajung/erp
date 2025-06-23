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
            this.set_titletext("현장공통매입세액관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_DIVDEPT_BONSA_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_DIVDEPT_SITE_UPDATE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHVPR_DIVDEPT_MAGAM_BONSA</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHVPR_DIVDEPT_SITE_DHV0096</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHVPR_DIVDEPT_SITE_ISSUECANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1기예정</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">1기확정</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">2기예정</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">2기확정</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","240","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta00:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("회계년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_WORK","staYY_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK00","ctclYY_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("회계기수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNO_TAX","staYY_WORK00:0.0","10.0","98","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsNO_TAX");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_FROM","ccboNO_TAX:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","ctxtDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_TO","staDT_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","15",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYY_WORK.form.TextBox","value","dsSearch","YY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboNO_TAX","value","dsSearch","NO_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
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
        this.registerScript("DHV_DIVDEPT_BONSA.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_DEPT_SELFACNT)) {
        		this.dsSearch.setColumn(0, "YY_WORK", this.getOwnerFrame().YM_MAGAM);
        		this.dsSearch.setColumn(0, "CD_DEPT", this.getOwnerFrame().CD_DEPT_SELFACNT);
        		this.dsSearch.setColumn(0, "NO_TAX", this.getOwnerFrame().SS_MAGAM);
        	}
        	else {
        		this.dsSearch.setColumn(0, "YY_WORK", this.gfnGetDate().substring(0, 4));
        		this.dsSearch.setColumn(0, "CD_DEPT", this.UserInfo.CD_DEPT_SELFACNT);

        		var month = nexacro.toNumber(this.gfnGetDate().substr(4,2),0);
        		var selectedIndex = 0;
        		if(month >= 4 && month <= 6){
        			selectedIndex = 1;
        		}else if(month >= 7 && month <= 9){
        			selectedIndex = 2;
        		}else if(month >= 10 && month <= 12){
        			selectedIndex = 3;
        		}
        		this.ccboNO_TAX.set_index(selectedIndex);
        		//this.dsSearch.setColumn(0, "NO_TAX", "1");
        	}



        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))) {
        		this.ccfCD_DEPT.form.fnCodeFindLoad();

        		this.FormBtns.Select.click();
        	}
        };

        this.fnSetButton = function() {
        }

        this.fnSetExtendButton = function() {
        	this.btnCreate = this.gfnFormButtonAdd("Create", "fnCreate");				//자료생성
         	this.btnIssueSlip = this.gfnFormButtonAdd("IssueSlip", "fnIssueSlip"); 		//전표발행
         	this.btnDetailSlip = this.gfnFormButtonAdd("DetailSlip", "fnDetailSlip"); 	//전표조회
         	this.btnCancelSlip = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 	//전표취소
         	this.btnDetail = this.gfnFormButtonAdd("Detail", "fnDetail");				//상세조회

        	this.btnCreate.set_enable(false);
        	this.btnIssueSlip.set_enable(false);
        	this.btnDetailSlip.set_enable(false);
        	this.btnCancelSlip.set_enable(false);
        	this.btnDetail.set_enable(false);

        	this.btnIssueSlip.set_visible(false);
        	this.btnDetailSlip.set_visible(false);
        	this.btnCancelSlip.set_visible(false);
        	this.btnDetail.set_visible(false);


        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ctclYY_WORK = this.divSearch.form.ctclYY_WORK;
        	this.ccboNO_TAX = this.divSearch.form.ccboNO_TAX;
        	this.ctxtDT_FROM = this.divSearch.form.ctxtDT_FROM;
        	this.ctxtDT_TO = this.divSearch.form.ctxtDT_TO;

        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_DIVDEPT_BONSA");

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("YM_MAGAM", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("YM_ACCOUNT", "string");
        	this.dsUpdate.addColumn("AM_COMMBILLADJ", "decimal");
        	this.dsUpdate.addColumn("AM_BGJ_SANBILL", "decimal");
        	this.dsUpdate.addColumn("AM_BGJ_BILL", "decimal");
        	this.dsUpdate.addColumn("AM_BGJ_GITOT", "decimal");
        	this.dsUpdate.addColumn("AM_BGJ_CHATOT", "decimal");
        	this.dsUpdate.addColumn("YN_BONSA", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsCreate.addColumn("YM_MAGAM", "string");
        	this.dsCreate.addColumn("ID_INSERT", "string");

        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("FLAG", "string");
        	this.dsIssueSlip.addColumn("YM_ACCOUNT", "string");
        	this.dsIssueSlip.addColumn("CD_DEPT_ACNT", "string");
        	this.dsIssueSlip.addColumn("CD_DEPT_BH", "string");
        	this.dsIssueSlip.addColumn("ID_INSERT", "string");
        	this.dsIssueSlip.addColumn("DT_FROM", "string");
        	this.dsIssueSlip.addColumn("DT_TO", "string");

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_DEPT_ACNT", "string");
        	this.dsCancelSlip.addColumn("YM_MAGAM", "string");
        	this.dsCancelSlip.addColumn("CD_TRADE", "string");
        	this.dsCancelSlip.addColumn("ID_INSERT", "string");
        	this.dsCancelSlip.addColumn("FLAG", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.gfnTrim(this.dsSearch.getColumn(0, "CD_DEPT")));
        	this.dsSelect.setColumn(0, "YM_MAGAM", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));

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
        };

        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsUpdate.setColumn(nrow, "YM_ACCOUNT", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));
        				this.dsUpdate.setColumn(nrow, "AM_COMMBILLADJ", 0);
        				this.dsUpdate.setColumn(nrow, "AM_BGJ_SANBILL", 0);
        				this.dsUpdate.setColumn(nrow, "AM_BGJ_BILL", 0);
        				this.dsUpdate.setColumn(nrow, "AM_BGJ_GITOT", this.dsList.getColumn(i, "AM_BGJ_GITOT"));
        				this.dsUpdate.setColumn(nrow, "AM_BGJ_CHATOT", this.dsList.getColumn(i, "AM_BGJ_CHATOT"));
        				this.dsUpdate.setColumn(nrow, "YN_BONSA", "Y");
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
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

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YY_WORK"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYY_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("회계년도를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_TAX"))) {
        		this.fnVaidateCallback = function() {
        			this.ccboNO_TAX.setFocus();
        		}
        		this.gfnAlert("회기가 선택되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if (svcID == "select") {
        		if (this.dsList.rowcount > 0) {
        			this.btnDetail.set_enable(true);
        		}
        		else {
        			this.btnDetail.set_enable(false);
        		}

        		this.gfnGridAfterSelect(this.dxGrid);

        		this.btnCreate.set_enable(true);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "create") {
        		if (errorCode == 0) {
        			this.fnExecute_callback = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("자료생성 작업이 완료되었습니다.", "fnExecute_callback");
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "issueSlip"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "cancelSlip"){
        		if (errorCode == 0) {
        			this.fnExecute_callback = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("전표가 취소 되었습니다.", "fnExecute_callback");
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        			break;

        		case "ccfCD_DEPT": // 세무단위
        			if (this.gfnIsNull(cdCorp)) {
        				this.gfnAlert("법인코드를 먼저 선택하세요.");
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        			//dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        			break;
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.ccfCD_DEPT.form.fnCodeFindClear();
        			break;
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_RowCellChanged = function(obj,e)
        {
        	if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        			if (this.gfnIsNull(this.dsList.getColumn(e.row, "CD_SLIP"))) {
        				this.btnIssueSlip.set_enable(true);
        				this.btnCancelSlip.set_enable(false);
        				this.btnDetailSlip.set_enable(false);
        			}
        			else {
        				this.btnIssueSlip.set_enable(false);
        				this.btnCancelSlip.set_enable(true);
        				this.btnDetailSlip.set_enable(true);
        			}
        		obj.oldrow = -1;
        	}
        };

        this.fnGrid_AfterEdit = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		if (e.columnid == "AM_BGJ_GITOT") {
        			var dTT1 = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_BGJ_BILL") + this.dsList.getColumn(e.row, "AM_BGJ_CARD") - this.dsList.getColumn(e.row, "AM_BGJ_GITOT"), 0);
        			this.dsList.setColumn(e.row, "AM_BGJ_CHATOT", dTT1);
        		}
        	}
        };

        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);
        	if (colnm == "AM_BGJ_GITOT") {
        		if(this.gfnIsNull(this.dsList.getColumn(row, "CD_SLIP")))
        			return true;
        		else
        			return false;
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
            if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);

        		this.btnCreate.set_enable(false);

        		switch(e.columnid) {
        			case "YY_WORK" :
        			case "NO_TAX" :
        				this.fnMagamSetting();
        				break;
        		}
            }
        }

        this.fnMagamSetting = function() {
        	var dtFrom;
        	var dtTo;

        	var ymMagam = this.dsSearch.getColumn(0, "YY_WORK");
        	var noTax = this.dsSearch.getColumn(0, "NO_TAX");

        	if (this.gfnIsNull(ymMagam) || this.gfnIsNull(noTax)) {
        		dtFrom = "";
        		dtTo = "";
        	}
        	else {
        		switch(noTax) {
        			case "1" :
        				dtFrom = ymMagam + "-01";
        				dtTo = ymMagam + "-03";
        				break;
        			case "2" :
        				dtFrom = ymMagam + "-04";
        				dtTo = ymMagam + "-06";
        				break;
        			case "3" :
        				dtFrom = ymMagam + "-07";
        				dtTo = ymMagam + "-09";
        				break;
        			case "4" :
        				dtFrom = ymMagam + "-10";
        				dtTo = ymMagam + "-12";
        				break;
        			default :
        				dtFrom = "";
        				dtTo = "";
        				break;
        		}
        	}

        	this.dsSearch.setColumn(0, "DT_FROM", dtFrom);
        	this.dsSearch.setColumn(0, "DT_TO", dtTo);
        }

        //자료생성
        this.fnCreate = function(obj,e) {
        	this.gfnConfirm("자료생성을 하시겠습니까?", "fnCreate_callBack");
        }

        this.fnCreate_callBack = function(strId, val) {
        	if (val == false) return;

        	this.dsCreate.clearData();
        	this.dsCreate.addRow();

        	this.dsCreate.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsCreate.setColumn(0, "YM_MAGAM", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));
        	this.dsCreate.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsCreate.setColumn(0, "DT_FROM", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_FROM"), "-", ""));
        	this.dsCreate.setColumn(0, "DT_TO", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        //전표발행
        this.fnIssueSlip = function (obj,e) {
        	this.gfnConfirm("전표발행 작업을 수행하시겠습니까?", "fnIssueSlip_callback");
        };

        this.fnIssueSlip_callback = function(strId, val) {
        	if (val == true) {
        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();
        		this.dsIssueSlip.setColumn(nRow, "FALG", "본사");
        		this.dsIssueSlip.setColumn(nRow, "YM_ACCOUNT", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_BH", this.AuthClient.CD_DEPT);
        		this.dsIssueSlip.setColumn(nRow, "ID_INSERT", this.AuthClient.ID_USER);
        		this.dsIssueSlip.setColumn(nRow, "DT_FROM", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_FROM"), "-", ""));
        		this.dsIssueSlip.setColumn(nRow, "DT_TO", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));

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

        //전표 조회
        this.fnDetailSlip = function (obj,e) {
        	if (this.gfnIsNull(nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"),"")),"-",""))) {
        		return;
        	}

        	var param = {};
        	param.CD_TRADE = this.gfnTrim(nexacro.replaceAll(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"), "-", ""));
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param);
        };

        this.fnPopupCallback = function(strId, val) {
        	if (strId.indexOf("DHA_ISSUESLIP") > 0) {
        		this.FormBtns.Select.click();
        	}
        };

        //전표취소
        this.fnCancelSlip = function (obj,e) {
        	var chkcnt = 0;
        	var chkslip = 0;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "YN_SLIP") == 1) {
        			chkcnt++;

        			if (!this.gfnIsNull(this.dsList.getColumn(i, "CD_SLIP")))
        				chkslip++;
        		}
        	}

        	if (chkcnt == 0) {
        		this.gfnAlert("전표삭제 대상을 선택 하세요.");
        		return;
        	}

        	if (chkslip > 0) {
        		this.gfnAlert("전표삭제 대상만 선택하세요.");
        		return;
        	}

        	this.gfnConfirm("전표삭제 작업을 수행하시겠습니까?", "fnCancelSlip_callback");
        };

        this.fnCancelSlip_callback = function(strId, val) {
        	if (val == true) {
        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();
        		this.dsCancelSlip.setColumn(nRow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        		this.dsCancelSlip.setColumn(nRow, "YM_MAGAM", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));
        		this.dsCancelSlip.setColumn(nRow, "CD_TRADE", nexacro.replaceAll(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"), "-", ""));
        		this.dsCancelSlip.setColumn(nRow, "ID_INSERT", this.AuthClient.ID_USER);
        		this.dsCancelSlip.setColumn(nRow, "FLAG", "본사");

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

        //상세조회
        this.fnDetail = function (obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return false;

        	var param = {};
        	param.CD_SELFACNT = this.dsSearch.getColumn(0, "CD_DEPT");
        	param.DS_SELFACNT = this.dsSearch.getColumn(0, "DS_DEPT");
        	param.CD_ACNTUNIT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT");
        	param.DS_ACNTUNIT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_ACNT");
        	param.DT_FROM = this.dsSearch.getColumn(0, "DT_FROM");
        	param.DT_TO = this.dsSearch.getColumn(0, "DT_TO");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_DIVDEPT_SLIP", "", param);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_DIVDEPT_BONSA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
