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
            this.set_titletext("기성반제");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWBPR_HDLDGRDDCTPMNT_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DWBPR_HDLDGRDDCTPMNT_EXECUTE</Col></Row><Row><Col id=\"TARGET\">sapauto</Col><Col id=\"SP\">DWZPR_SAP_AUTOSLIP_ISSUE_SELECT</Col></Row><Row><Col id=\"TARGET\">sapcancel</Col><Col id=\"SP\">DWZPR_SAP_AUTOSLIP_CANCEL_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DWBPR_HDGISUNGMONTH_MAX_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DGR\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_DGR\"/><Col id=\"YM_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSap", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_DGR", this);
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
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboNO_DGR","ccfCD_SITE:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsNO_DGR");
            obj.set_datacolumn("DS_DGR");
            obj.set_codecolumn("NO_DGR");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","cboNO_DGR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("기성년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalMM.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboNO_DGR","value","dsSearch","NO_DGR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
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
        this.registerScript("DWB_HDLDGRDDCTPMNT.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YM_WORK))
        	{
        		this.dsSearch.setColumn(0,"CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0,"YM_WORK", this.getOwnerFrame().YM_WORK);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        	}else{
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0,"YM_WORK",today.substr(0,6));
        	}

        	// 기성차수 조회조건 보이기/숨기기
        	this.YN_DGR = this.gfnGetConfig("DW" , "YN_DGR");
        	if(this.YN_DGR != "Y")
        	{
        		this.divSearch.form.cboNO_DGR.set_width(0);
        		this.divSearch.form.cboNO_DGR.set_readonly(true);
        		this.divSearch.form.resetScroll();
        	}
        	else if(this.YN_DGR == "Y")
        	{
        		this.divSearch.form.cboNO_DGR.set_width(100);
        		this.divSearch.form.cboNO_DGR.set_readonly(false);
        		this.divSearch.form.resetScroll();
        	}



        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Add.set_enable(false);
        	//this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSlipIssue = this.gfnFormButtonAdd("btnSlipIssue", "fnSlipIssue");
        	this.btnSlipSearch = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");
        	this.btnSlipCancel = this.gfnFormButtonAdd("btnSlipCancel", "fnSlipCancel");
        	this.btnSlipIssueSap = this.gfnFormButtonAdd("btnSlipIssueSap", "fnSlipIssueSap");
        	this.btnSlipCancelSap = this.gfnFormButtonAdd("btnSlipCancelSap", "fnSlipCancelSap");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.cboNO_DGR = this.divSearch.form.cboNO_DGR;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfNO_SEQ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.ccfNO_SEQ.AfterCDTextChanged = "ccfNO_SEQ_AfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_HDLDGRDDCTPMNT");

        	// row 수정가능 여부
        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("NO_DGR", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("YM_WORK", "string");
        	this.dsExec.addColumn("NO_DGR", "string");
        	this.dsExec.addColumn("NO_HADOCONT", "string");
        	this.dsExec.addColumn("CD_VENDOR", "string");
        	this.dsExec.addColumn("NO_SEQ", "string");
        	this.dsExec.addColumn("CD_DEPT", "string");
        	this.dsExec.addColumn("NO_SLIP", "string");

        	this.dsSapAuto = new Dataset();
        	this.dsSapAuto.addColumn("TY_WRK", "string");
        	this.dsSapAuto.addColumn("CD_AUTOSLIP", "string");
        	this.dsSapAuto.addColumn("NO_ERPKEY", "string");

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SITE", "string");
        	this.dsCombo.addColumn("YM_WORK", "string");
        	this.dsCombo.addColumn("DS_CONTMETHOD", "string");
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

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsSelect.setColumn(0, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));

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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기성년월을 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "exec")
        	{
        		if (errorCode == 0) {
        			if(args == "SLPPUB")
        			{
        				this.fnCMPL_callback = function()
        				{
        					this.FormBtns.Select.click();
        				}
        				this.gfnAlert("기성반제 전표발행 정상 처리되었습니다.", "fnCMPL_callback");
        			}
        			else if(args == "SLPCNC")
        			{
        				this.fnCNC_callback = function()
        				{
        					this.FormBtns.Select.click();
        				}
        				this.gfnAlert("기성반제 전표취소 정상 처리되었습니다.", "fnCNC_callback");
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfNO_SEQ") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "YR_WORK")))
        		{
        			this.gfnAlert("기준년도를 입력하세요.", "fnVaidateCallback");

        			return false;
        		}

        		dsUserParam.setColumn(nrow, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        	}

        	return true;
        }


        this.ccfNO_SEQ_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	this.divSearch.form.ccfNO_SEQ.form.DSTextBox.set_value("");
        	this.dsSearch.setColumn(0, "YM_WORK", "");

        	if(arr.length > 0)
        	{
        		//this.divSearch.form.ccfNO_SEQ.form.DSTextBox.set_value(arr[0]["DT_REQPERD"]);
        		this.divSearch.form.ccfNO_SEQ.form.DSTextBox.set_value(arr[0]["DS_RMKS"]);
        		this.dsSearch.setColumn(0, "YM_WORK", arr[0]["YM_WORK"]);
        	}

        }
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

        		if(e.columnid == "CD_SITE" || e.columnid == "YM_WORK"){
        		  this.fnSetCombo();
        	   }
        	}
        };



         // 전표발행 버튼 클릭
         this.fnSlipIssue = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

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

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.ccfCD_SITE.form.DSTextBox.value
        			+ "\n기성년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n발행건수 : [" + chkCnt + "]건"
        			+ "\n\n기성반제 전표발행을 하시겠습니까?";

        	this.gfnConfirm(msg, "dsList_slipIssue_callback");
        }

        // 전표발행 버튼 클릭 후 callback
        this.dsList_slipIssue_callback = function(strId, val)
        {
        	if(val == true) {
        		var tyWrk = "SLPPUB";

        		this.fnExecSlip(tyWrk);
        	}
        }

         // 전표조회 버튼 클릭시 팝업화면 호출
         this.fnSlipSearch = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.NO_ERPKEY = this.dsList.getColumn(this.dsList.rowposition, "NO_ERPKEY");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen("DHA", "DHA_ERPKEY_SLIP", "", param);
        }

         // 전표취소 버튼 클릭
         this.fnSlipCancel = function(obj,e) {

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

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.ccfCD_SITE.form.DSTextBox.value
        			+ "\n기성년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n취소건수 : [" + chkCnt + "]건"
        			+ "\n\n기성반제 전표취소 하시겠습니까?";

        	this.gfnConfirm(msg, "dsList_slipCancel_callback");

        }

        // 전표취소 버튼 클릭 후 callback
        this.dsList_slipCancel_callback = function(strId, val)
        {
        	if(val == true) {
        		var tyWrk = "SLPCNC";

        		this.fnExecSlip(tyWrk);
        	}
        }


        // 전표발행, 전표취소가 다건으로 변경되어 새로 만듬.
        this.fnExecSlip = function(tyWrk) {
        	this.dsExec.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "Y"){
        			var nrow = this.dsExec.addRow();

        			this.dsExec.setColumn(nrow, "TY_WRK", tyWrk);
        			this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsExec.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsExec.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        			this.dsExec.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        			this.dsExec.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        			this.dsExec.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        			this.dsExec.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        			this.dsExec.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			this.dsExec.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(i, "NO_SLIP"));
        		}
        	}

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
        	var outData     = "";
        	var strArg      = tyWrk;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnSlipIssueSap = function(obj,e) {
        	if(this.dsList.findRow("CHK", "Y") < 0){
        		this.gfnAlert("전표발행(SAP) 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	var chkCnt = 0;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "Y"){
        			chkCnt = chkCnt + 1;
        		}
        	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.ccfCD_SITE.form.DSTextBox.value
        			+ "\n기성년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n발행건수 : [" + chkCnt + "]건"
        			+ "\n\n전표발행(SAP) 진행하시겠습니까?";

        	this.gfnConfirm(msg, "fnSlipIssueSap_callback");
        }

        this.fnSlipIssueSap_callback = function(strID, val)
        {
        	if(val == true) {
        		this.dsSapAuto.clearData();

        		var arrOut = [];
        		this._cntChk = 0;
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, "CHK") == "Y"){
        				var nrow = this.dsSapAuto.addRow();

        				this.dsSapAuto.setColumn(nrow, "TY_WRK", "Q");
        				this.dsSapAuto.setColumn(nrow, "CD_AUTOSLIP", "DWB0006");
        				this.dsSapAuto.setColumn(nrow, "NO_ERPKEY", this.dsList.getColumn(i, "NO_ERPKEY"));

        				// 체크박스 다중건 조회 건수에 맞게 리턴 dataset 추가
        				arrOut.push("dsListSap" + this._cntChk + "=sapauto" + this._cntChk);
        				this["dsListSap"+this._cntChk] = new Dataset();
        				this._cntChk++;
        			}
        		}

        		var strSvcId    = "sapauto";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "sapauto=dsSapAuto";
        		var outData     = arrOut.join(' ');
        		var strArg      = "";
        		var callBackFnc = "fnSlipIssueSap_Callback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }


        this.fnSlipCancelSap = function(obj,e) {
        	if(this.dsList.findRow("CHK", "Y") < 0){
        		this.gfnAlert("전표취소(ERP) 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	var chkCnt = 0;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "Y"){
        			chkCnt = chkCnt + 1;
        		}
        	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.ccfCD_SITE.form.DSTextBox.value
        			+ "\n기성년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n취소건수 : [" + chkCnt + "]건"
        			+ "\n\n전표취소(SAP) 진행하시겠습니까?";

        	this.gfnConfirm(msg, "fnSlipCancelSap_callback");
        }

        this.fnSlipCancelSap_callback = function(strID, val)
        {
        	if(val == true) {
        		this.dsSapAuto.clearData();

        		var arrOut = [];
        		this._cntChk = 0;
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, "CHK") == "Y"){
        				var nrow = this.dsSapAuto.addRow();

        				this.dsSapAuto.setColumn(nrow, "TY_WRK", "Q");
        				this.dsSapAuto.setColumn(nrow, "CD_AUTOSLIP", "DWB0006");
        				this.dsSapAuto.setColumn(nrow, "NO_ERPKEY", this.dsList.getColumn(i, "NO_ERPKEY"));

        				// 체크박스 다중건 조회 건수에 맞게 리턴 dataset 추가
        				arrOut.push("dsListSap" + this._cntChk + "=sapcancel" + this._cntChk);
        				this["dsListSap"+this._cntChk] = new Dataset();
        				this._cntChk++;
        			}
        		}

        		var strSvcId    = "sapcancel";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "sapcancel=dsSapAuto";
                var outData     = arrOut.join(' ');
        		var strArg      = "";
        		var callBackFnc = "fnSlipIssueSap_Callback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }


        this.fnSlipIssueSap_Callback = function(svcID, errorCode, errorMsg) {
        	if(errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	if(svcID == "sapauto") {
        		// 전표발행 다중건 처리용 Dataset 생성
        		var ds = new Dataset();
        		ds.addColumn("NO_ERPKEY", "string");
        		ds.addColumn("CD_TRADE", "string");
        		ds.addColumn("ID_USER", "string");

        		// 다중조회된 데이터셋에서 가져오기
        		for(var c = 0; c < this._cntChk; c++) {
        			for(var i = 0; i < this["dsListSap"+c].rowcount; i++) {
        				var nrow = ds.addRow();
        				ds.setColumn(nrow, "NO_ERPKEY", this["dsListSap"+c].getColumn(i, "NO_ERPKEY"));
        				ds.setColumn(nrow, "CD_TRADE", this["dsListSap"+c].getColumn(i, "CD_TRADE"));
        				ds.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		// 전표발행 다중건 처리
        		this.gfnSlipIssueDs(ds, "fnSlipIssueSap_Complete");

        	}
        	else if(svcID == "sapcancel") {
        		// 전표취소(SAP) 다중건 처리용 Dataset 생성
        		var ds = new Dataset();
        		ds.addColumn("NO_ERPKEY", "string");
        		ds.addColumn("CD_TRADE", "string");
        		ds.addColumn("ID_USER", "string");
        		ds.addColumn("BUKRS", "string");
        		ds.addColumn("BELNR", "string");
        		ds.addColumn("GJAHR", "string");

        		// 다중조회된 데이터셋에서 가져오기
        		for(var c = 0; c < this._cntChk; c++) {
        			for(var i = 0; i < this["dsListSap"+c].rowcount; i++) {
        				var nrow = ds.addRow();
        				ds.setColumn(nrow, "NO_ERPKEY", this["dsListSap"+c].getColumn(i, "NO_ERPKEY"));
        				ds.setColumn(nrow, "CD_TRADE", this["dsListSap"+c].getColumn(i, "CD_TRADE"));
        				ds.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				ds.setColumn(nrow, "BUKRS", this["dsListSap"+c].getColumn(i, "BUKRS"));
        				ds.setColumn(nrow, "BELNR", this["dsListSap"+c].getColumn(i, "BELNR"));
        				ds.setColumn(nrow, "GJAHR", this["dsListSap"+c].getColumn(i, "GJAHR"));
        			}
        		}

        		// 전표취소(SAP) 다중건 처리
        		this.gfnSlipCancelDs(ds, "fnSlipCancelSap_Complete");
        	}
        }

        this.fnSlipIssueSap_Complete = function(svcID, errorCode, errorMsg) {
        // 	if(errorCode != 0) {
        // 		this.gfnAlert(errorMsg);
        // 		return false;
        // 	}

        	this.fnSlipIssueSap_Complete_callback = function()
        	{
        		this.fnSelect();
        	}

        	this.gfnAlert("전표발행(SAP)가 정상처리되었습니다.", "fnSlipIssueSap_Complete_callback");
        }

        this.fnSlipCancelSap_Complete = function(svcID, errorCode, errorMsg) {
        // 	if(errorCode != 0) {
        // 		this.gfnAlert(errorMsg);
        // 		return false;
        // 	}

        	this.fnSlipCancelSap_Complete_callback = function()
        	{
        		this.fnSelect();
        	}
        	this.gfnAlert("전표취소(SAP)가 정상처리되었습니다.", "fnSlipCancelSap_Complete_callback");
        }


        this.fnSetCombo = function() {

        	this.dsCombo.clearData();

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCombo.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	if(!this.gfnIsNull(this.getOwnerFrame().DS_CONTMETHOD)){
        		this.dsCombo.setColumn(0, "DS_CONTMETHOD", this.getOwnerFrame().DS_CONTMETHOD);
        	}else{
        		this.dsCombo.setColumn(0, "DS_CONTMETHOD", this.FormInfo.DS_PARAM);
        	}

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsNO_DGR=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		/*
        		this.dsNO_DGR.insertRow(0);
        		this.dsNO_DGR.setColumn(0, "CD_DGR", "");
        		this.dsNO_DGR.setColumn(0, "DS_DGR", "전체");
         		*/
        		this.divSearch.form.cboNO_DGR.set_index(0);

        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWB_HDLDGRDDCTPMNT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
