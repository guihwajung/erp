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
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWDPR_MAINTAIN_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWDPR_MAINTAIN_SAVE</Col></Row><Row><Col id=\"TARGET\">issue</Col><Col id=\"SP\">DWDPR_MAINTAIN_AUTOSLIP_ISSUE</Col></Row><Row><Col id=\"SP\">DWDPR_MAINTAIN_AUTOSLIP_ISSUE</Col><Col id=\"TARGET\">delete</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
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
            obj.getSetter("AutoSet").set("true");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("작업년월");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","sta01:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData01","0","divSearch:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","0","0",null,null,"0","0",null,null,null,null,this.divData01.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
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
        this.registerScript("DWD_MAINTAINCOST.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e){
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	//this.FormBtns.Select.click();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnWork1 = this.gfnFormButtonAdd("btnWork1", "fnBtnWork1");
        	this.btnWork2 = this.gfnFormButtonAdd("btnWork2", "fnBtnWork2");
        	this.btnWork3 = this.gfnFormButtonAdd("btnWork3", "fnBtnWork3");
        	this.btnApproval = this.gfnFormButtonAdd("btnApproval", "fnBtnApproval");
        	this.btnLineCopy = this.gfnFormButtonAdd("btnLineCopy", "fnBtnLineCopy");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;

        	this.dxGrid01 = this.divData01.form.grd01;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.CodeFindName = "DZX_CFSITE";

        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid01, this.dsList, "DW", "DWD_MAINTAINCOST");

        	this.dxGrid01.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid01.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";

        	this.dxGrid01.EnterCell = "fnGrid_EnterCell";

        	var today = this.gfnGetDate();
        	var dt = today.substring(0, 6);
        	if(Number(today.substring(6, 8)) <= 15){
        		dt = this.gfnAddMonth(today, -1).substring(0, 6);
        	}

        	this.dsSearch.setColumn(0, "YM_WORK", dt);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_BE", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	//this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("NO_SLIPKEY", "bigdecimal");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("DT_ACCOUNT", "string");
        	this.dsSave.addColumn("CD_ACCOUNT", "string");
         	this.dsSave.addColumn("ISSUE_ID", "string");
        	this.dsSave.addColumn("AM_SUPPLY", "string");
        	this.dsSave.addColumn("AM_SUPPLY2", "string");
        	this.dsSave.addColumn("AM_SUPPLY3", "string");
        	this.dsSave.addColumn("AM_VAT", "string");
        	this.dsSave.addColumn("AM_ACCOUNT", "string");
         	this.dsSave.addColumn("TY_ISSUE", "string");
         	this.dsSave.addColumn("CD_VATPROOF", "string");
         	this.dsSave.addColumn("CD_VENDOR", "string");
         	this.dsSave.addColumn("DS_VENDOR", "string");
         	this.dsSave.addColumn("TY_VENDOR", "string");
         	this.dsSave.addColumn("CD_VENDOR_MI", "string");
         	this.dsSave.addColumn("DS_VENDOR_MI", "string");
         	this.dsSave.addColumn("TY_VENDOR_MI", "string");
         	this.dsSave.addColumn("DS_REM", "string");
         	this.dsSave.addColumn("TY_GUBUN", "string");
         	this.dsSave.addColumn("ID_USER", "string");
         	this.dsSave.addColumn("CD_AUTOSLIP", "string");
        	this.dsSave.addColumn("PER_VATPROOF", "string");
        	this.dsSave.addColumn("TY_VATBGJE", "string");
        	this.dsSave.addColumn("TY_APPROVE", "string");

        	/*
        	this.dsIssue = new Dataset();
        	this.dsIssue.addColumn("NO_SLIPKEY", "string");
        	this.dsIssue.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_TRADE", "string");
        	this.dsDelete.addColumn("ID_USER", "string");
        	this.dsDelete.addColumn("CD_SITE", "string");
        	*/

        	this.dsSave1 = new Dataset();
        	this.dsSave1.addColumn("TY_WRK", "string");
        	this.dsSave1.addColumn("NO_SLIPKEY", "string");
        	this.dsSave1.addColumn("CD_CORP", "string");
        	this.dsSave1.addColumn("CD_AUTOSLIP", "string");
        	this.dsSave1.addColumn("ID_USER", "string");



        	this.dsCheck = new Dataset();
        	this.dsCheck.addColumn("DS_KEY1", "string");
        	this.dsCheck.addColumn("DS_KEY2", "string");
        	this.dsCheck.addColumn("DS_KEY3", "string");
        	this.dsCheck.addColumn("DS_KEY4", "string");
        	this.dsCheck.addColumn("DS_KEY5", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */

        this.fnSelect = function() {
        	this.fnSelectTy();

        }

        this.fnSelectTy = function(ty) {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid01);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT_BE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	//this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

        	trace(this.dsSelect.saveXML());

        	var strSvcId    = "select";
        	if(ty){
        		strSvcId    = ty;
        	}
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid01);

        	this.dsList.setColumn(nrow, "CD_SITE", this.dsSelect.getColumn(0, "CD_DEPT_BE"));
        	this.dsList.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0,"CD_CORP"));
        	//this.dsList.setColumn(nrow, "DS_SITE", this.dsSelect.getColumn(0, "DS_SITE"));
        	//this.dsList.setColumn(nrow, "TY_ISSUE", "E");
        	this.dsList.setColumn(nrow, "TY_ISSUE", "");
        	this.dsList.setColumn(nrow, "NO_SLIPKEY", 0);

        	this.dsList.setColumn(nrow,  this.ucFlag, "I");
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid01);

        };

        this.fnSave = function() {
        	this.fnSaveTy();
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid01);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {

        };

        this.fnBtnWork1 = function(obj,e) {
        	var b = false;
        	for(var i = 0; i < this.dsList.rowcount; i++){

        		var chk = this.dsList.getColumn(i, "CHK");
        		if(chk == "1"){
        			b = true;
        			break;
        		}

        	}

        	if(!b)	{
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return false;
        	}

        	this.gfnConfirm("선택한 항목의 전표발행을 하시겠습니까?", "fnBtnWork1Callback");

        };

        this.fnBtnWork1Callback = function (id, val){
        	if(val){
        		this.fnSaveTy("save2");

        	}
        };

        this.fnBtnWork2 = function(obj,e) {
        	var b = false;
        	for(var i = 0; i < this.dsList.rowcount; i++){

        		var chk = this.dsList.getColumn(i, "CHK");
        		if(chk == "1"){
        			b = true;
        			break;
        		}

        	}

        	if(!b)	{
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return false;
        	}

        	var no = this.dsList.getColumn(this.dsList.rowposition,"CD_SLIP");
        	if (this.gfnIsNull(no)) {
        		this.gfnAlert("전표번호가 존재하지 않습니다.");
        		return false;
        	}

        	this.gfnConfirm("선택한 항목의 전표발행을 취소하시겠습니까?", "fnBtnWork2Callback");

        };

        this.fnBtnWork2Callback = function (id, val){
        	if(val){
        		this.dsSave1.clearData();
        		var nrow = this.dsSave1.addRow();

        		this.dsSave1.setColumn(nrow, "TY_WRK", "D");
        		this.dsSave1.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsSave1.setColumn(nrow, "NO_SLIPKEY", this.dsList.getColumn(this.dsList.rowposition, "NO_SLIPKEY"));
        	    this.dsSave1.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	    this.dsSave1.setColumn(nrow, "CD_AUTOSLIP", "DWB0001");



        		trace(this.dsSave1.saveXML());

        		var strSvcId    = "delete";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "delete=dsSave1";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// trabsaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        };

        this.fnBtnWork3 = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid01))	{
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return false;
        	}
        	var no = this.dsList.getColumn(this.dsList.rowposition,"CD_SLIP");
        	if (this.gfnIsNull(no)) {
        		this.gfnAlert("전표번호가 존재하지 않습니다.");
        		return false;
        	}

        	var param = {};

        	param.CD_TRADE = no;
        	param.IUD_FLAG = "S";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);

        };

        this.fnBtnApproval = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid01))	{
        		this.gfnAlert("전자결재 할 행을 선택하세요.");
        		return false;
        	}

        	this.dsCheck.clearData();
        	var nrow = this.dsCheck.addRow();

        	this.dsCheck.setColumn(nrow, "DS_KEY1", "A");
        	this.dsCheck.setColumn(nrow, "DS_KEY2", this.dsSelect.getColumn(0, "CD_DEPT_BE"));
        	this.dsCheck.setColumn(nrow, "DS_KEY3", this.dsSelect.getColumn(0, "YM_WORK"));
        	this.dsCheck.setColumn(nrow, "DS_KEY4", "");
        	this.dsCheck.setColumn(nrow, "DS_KEY5", "");

        	trace(this.dsCheck.saveXML());

        	var strSvcId    = "check";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "check=dsSelect";
        	var outData     = "dsCheck=check0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnBtnApproval_callback = function(strId, val) {
        	if(val == true) {
        		var cd_site = this.dsSelect.getColumn(0, "CD_DEPT_BE");
        		var ds_site = this.dsSearch.getColumn(0, "DS_SITE");
        		var ym_work = this.dsList.getColumn(this.dsList.rowposition, "DT_ACCOUNT");
        		var empno = this.AuthClient.ID_USER;

        		var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        		if( this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"ID_PROCESS")) ) {
        			url += "approval/legacy/goFormLink.do?mode=DRAFT";
        			url += "&legacyFormID=WF_FORM_ERP_MAINTAINCOST";
        			url += "&subject=" + encodeURI( ds_site + " / " + ym_work.substring(0, 4) + ym_work.substring(4, 6) + " 일반관리비 지급");
        			url += "&dataType=proc";
        			url += "&empno=" + empno;
        			url += "&P_DS_KEY1=B";
        			url += "&P_DS_KEY2=" + cd_site;
        			url += "&P_DS_KEY3=" + ym_work.substring(0, 6);
        			url += "&P_DS_KEY4=&P_DS_KEY5=";
        		} else {
        			url = url+"approval/approval_Form.do?";
        			url +="forminstanceID="+this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition , "NO_DOC"),"");
        			url +="&processID="+this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition , "ID_PROCESS"),"");
        		}


        		trace(url);

        		//window.open(url);

        		var w = 800;
        		var h = 800;
        		var xPos = (document.body.offsetWidth/2) - (w/2); // 가운데 정렬
        		xPos += window.screenLeft; // 듀얼 모니터일 때
        		var yPos = (document.body.offsetHeight/2) - (h/2);

        		var option = "width = " + w + ", height = " + h + ", top = " + yPos + ", left = " + xPos + ", location = no, status = no, toolbars = no"
        		window.open(url, "_blank", option );

        	}
        };


        this.fnBtnLineCopy = function (){
        	var fromRow = this.dsList.rowposition;
        	var toRow = this.gfnGridAdd(this.dxGrid01, "current_bottom");
        	this.dsList.set_enableevent(false);
        	this.dsList.copyRow(toRow, this.dsList, fromRow);
        	this.dsList.setColumn(toRow, this.ucFlag, "I");
        	this.dsList.setColumn(toRow, "CHK", 0);
        	this.dsList.setColumn(toRow, "NO_SLIPKEY", "");
        	this.dsList.setColumn(toRow, "ISSUE_ID", "");
        	this.dsList.setColumn(toRow, "YN_APPROVE", "");
        	this.dsList.setColumn(toRow, "CD_SLIP", "");
        	this.dsList.setColumn(toRow, "NO_CONSULTDTL", "");
        	this.dsList.setColumn(toRow, "GW_STATUS", "");
        	this.dsList.setColumn(toRow, "NO_DOC", "");
        	this.dsList.setColumn(toRow, "ID_PROCESS", "");
        	this.dsList.set_enableevent(true);
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
        		return validate;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작업년월는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		return validate;
        	}

        	return validate;

        };

        /************************************************************************
         * 콜백 이벤트
         ***********************************************************************
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	if (errorCode == 0) {
        	} else {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid01);

        	}else if (svcID == "select2") {
        		this.gfnGridAfterSelect(this.dxGrid01);

        		this.fnIssue();

        	}else if (svcID == "select3") {
        		this.gfnGridAfterSelect(this.dxGrid01);

        		var no = this.dsList.getColumn(this.dsList.rowposition,"CD_SLIP");
        		if (this.gfnIsNull(no)) {
        			return false;
        		}

        		var param = {};

        		param.CD_TRADE = no;
        		param.IUD_FLAG = "S";

        		this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);

        	}else if (svcID == "save") {

        		this.FormBtns.Select.click();

        	}else if (svcID == "save2") {
        		this.fnSelectTy("select2");

        	}else if (svcID == "issue") {
        		this.fnSelectTy("select3");

        	}else if (svcID == "delete") {
        		this.FormBtns.Select.click();

        	} else if (svcID == "check") {
        		this.gfnConfirm("전자결재를 하시겠습니까?", "fnBtnApproval_callback");

        	}

        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function (id, dsUserParam, nrow){
        	if(id == "ccfCD_SITE"){
        	    dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "S");
        	}


        	return true;
        };
        /************************************************************************
         * 그리드 이벤트
         *************************************************************************/
        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	var rowPos = this.dsList.rowposition;

        	switch(id) {
        		case "DHX_CFEBILLBUY_ESERO":	//전자세금계산서번호
        			if (arrData.length > 0) {
        				this.dsList.set_enableevent(false);
        				this.dsList.setColumn(rowPos, "DT_ACCOUNT"	, nexacro.replaceAll(this.gfnNvl(arrData[0]["ISSUE_DATE"],""),"-",""));	//회계일자
        				this.dsList.setColumn(rowPos, "CD_VENDOR" 	, arrData[0]["CD_VENDOR"]);		//거래처코드
        				this.dsList.setColumn(rowPos, "DS_VENDOR" 	, arrData[0]["DS_VENDOR"]);		//거래처명
        				this.dsList.setColumn(rowPos, "TY_VENDOR" 	, arrData[0]["TY_VENDOR"]);		//거래처구분

        				this.dsList.setColumn(rowPos, "CD_VENDOR_MI" 	, arrData[0]["CD_VENDOR"]);
        				this.dsList.setColumn(rowPos, "DS_VENDOR_MI" 	, arrData[0]["DS_VENDOR"]);
        				this.dsList.setColumn(rowPos, "TY_VENDOR_MI" 	, arrData[0]["TY_VENDOR"]);

        				this.dsList.setColumn(rowPos, "AM_SUPPLY"	, arrData[0]["CHARGETOTAL"]);	//공급가액

        				this.dsList.setColumn(rowPos, "AM_VAT"		, arrData[0]["TAXTOTAL"]);		//부가세
        				this.dsList.setColumn(rowPos, "TY_ISSUE"	, "E");		//전자증빙(전자발행)
        				this.dsList.setColumn(rowPos, "AM_ACCOUNT"	, arrData[0]["AM_TOTAL"]);

        				this.dsList.setColumn(rowPos, "AM_SUPPLY2"	, 0);
        				this.dsList.setColumn(rowPos, "AM_SUPPLY3"	, 0);

        				var am = this.dsList.getColumn(rowPos, "AM_SUPPLY");
        				am = !am ? 0 : am;
        				var per = this.dsList.getColumn(rowPos, "PER_VATPROOF");
        				per = !per ? 0 : per;

        				var vat = am * per / 100;

        				if(vat != arrData[0]["TAXTOTAL"]){
        					this.dsList.setColumn(rowPos, "CD_VATPROOF"	, null);
        					this.dsList.setColumn(rowPos, "DS_VATPROOF"	, null);
        					this.dsList.setColumn(rowPos, "PER_VATPROOF"	, null);
        				}

        				this.dsList.set_enableevent(true);

        			}
        		break;
        		case "DHX_COMMON_CODEFIND_SELECT":

        			this.dsList.set_enableevent(false);

        			var id = this.dsList.getColumn(rowPos, "ISSUE_ID");

        			if (this.gfnIsNull(id)){

        				var am = nexacro.toNumber(this.dsList.getColumn(rowPos, "AM_SUPPLY"));
        				am = !am ? 0 : am;
        				var am2 = nexacro.toNumber(this.dsList.getColumn(rowPos, "AM_SUPPLY2"));
        				am2 = !am2 ? 0 : am2;
        				var am3 = nexacro.toNumber(this.dsList.getColumn(rowPos, "AM_SUPPLY3"));
        				am3 = !am3 ? 0 : am3;
        				var per = nexacro.toNumber(this.dsList.getColumn(rowPos, "PER_VATPROOF"));
        				per = !per ? 0 : per;

        				var vat = am * per / 100;
        				this.dsList.setColumn(rowPos, "AM_VAT", vat);
        				this.dsList.setColumn(rowPos, "AM_ACCOUNT", am + am2 + am3 + vat);

        			}else {
        			}

        			this.dsList.set_enableevent(true);

        			if(arrData[0]["CD_CODE"] == "12"){
        				this.dsList.setColumn(rowPos, "TY_VATBGJE", "03");
        				this.dsList.setColumn(rowPos, "DS_VATBGJE", "⑤면세사업 관련");

        			}else{
        				this.dsList.setColumn(rowPos, "TY_VATBGJE", null);
        				this.dsList.setColumn(rowPos, "DS_VATBGJE", null);
        			}

        		break;
        		case "DHX_CFALLVENDOR_CODEFIND":

        			this.dsList.setColumn(rowPos, "CD_VENDOR_MI" 	, arrData[0]["CD_VENDOR"]);
        			this.dsList.setColumn(rowPos, "DS_VENDOR_MI" 	, arrData[0]["DS_VENDOR"]);
        			this.dsList.setColumn(rowPos, "TY_VENDOR_MI" 	, arrData[0]["TY_VENDOR"]);

        		break;

         	}
        };

         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	trace(id);
         	if (id == "DZX_CFSITE") {
         		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);

         	}else if (id == "DBX_CFMAINSITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_BUNSO", "");
        	}else if (id == "DHX_CFALLVENDOR_CODEFIND") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "TY_SALEBUY", "I");

        	}else if (id == "DHX_CFVENDOR") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "");
        		dsUserParam.setColumn(nrow, "YN_RELATED", "");
        	}else if (id == "DHX_COMMON_CODEFIND_SELECT") {
        		dsUserParam.setColumn(nrow, "CD_SYSTEM", "DH");
        		dsUserParam.setColumn(nrow, "CD_TYPE", "V10");

        		var rowPos = this.dsList.rowposition;
        		var id = this.dsList.getColumn(rowPos, "ISSUE_ID");
        		if (!this.gfnIsNull(id)){

        			var vat = this.dsList.getColumn(rowPos, "AM_VAT");
        			vat = !vat ? 0 : vat;
        			if (vat == 0){
        				dsUserParam.setColumn(nrow, "DS_ETC2", "0");
        			}else{
        				dsUserParam.setColumn(nrow, "DS_ETC2", "10");
        			}
        		}
        	}

        	trace(dsUserParam.saveXML());

        	return true;
        }

        this.fnGrid_EnterCell = function(obj, row, cell){
        	var column = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	var arr = ["AM_SUPPLY", "AM_VAT", "AM_ACCOUNT", "CD_VENDOR", "TY_VENDOR", "TY_ISSUE", "DT_ACCOUNT"];
        	if(arr.indexOf(column) >= 0){

        		var id = this.dsList.getColumn(row, "ISSUE_ID");

        		if (this.gfnIsNull(id)){

        			if( column == "AM_ACCOUNT"){
        				return false;
        			}

        			return true;
        		}else {
        			if(column == "DT_ACCOUNT" ){
        				return false;
        			}

        			if(column == "AM_VAT" ){
        				var per = nexacro.toNumber(this.dsList.getColumn(row, "PER_VATPROOF"));
        				per = !per ? 0 : per;
        				if(per == 0){
        					return false;
        				}

        				var am = nexacro.toNumber(this.dsList.getColumn(row, "AM_SUPPLY"));
        				am = !am ? 0 : am;
        				var am2 = nexacro.toNumber(this.dsList.getColumn(row, "AM_SUPPLY2"));
        				am2 = !am2 ? 0 : am2;
        				var am3 = nexacro.toNumber(this.dsList.getColumn(row, "AM_SUPPLY3"));
        				am3 = !am3 ? 0 : am3;
        				var per = nexacro.toNumber(this.dsList.getColumn(row, "PER_VATPROOF"));
        				per = !per ? 0 : per;
        				var vat = nexacro.toNumber(this.dsList.getColumn(rowPos, "AM_VAT"));
        				vat = !vat ? 0 : vat;

        				//var vat = am * per / 100;
        				this.dsList.setColumn(row, "AM_VAT", vat);
        				this.dsList.setColumn(row, "AM_ACCOUNT", am + am2 + am3 + vat);

        				return false;

        			}
        		}

        		return false;
        	}

        	if(column == "TY_VATBGJE"){
        		var cd = this.dsList.getColumn(row, "CD_VATPROOF");
        		var ty = this.dsList.getColumn(row, "TY_VATBGJE");

        		if(this.gfnIsNull(cd)){
        			return false;
        		}

        		if((cd == "12" && ty == "03") || cd != "13"){
        			return false;
        		}
        	}

        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsList_onvaluechanged = function(obj,e){

        	var arr = ["AM_SUPPLY", "AM_SUPPLY2", "AM_SUPPLY3", "AM_VAT"];
        	if(arr.indexOf(e.columnid) >= 0){
        		var am = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_SUPPLY"));
        		am = !am ? 0 : am;
        		var am2 = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_SUPPLY2"));
        		am2 = !am2 ? 0 : am2;
        		var am3 = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_SUPPLY3"));
        		am3 = !am3 ? 0 : am3;
        		var vat = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_VAT"));
        		vat = !vat ? 0 : vat;
        		obj.setColumn(e.row,"AM_ACCOUNT" , am + am2 + am3 + vat);

        		if(e.columnid == "AM_SUPPLY"){
        			var per = nexacro.toNumber(obj.getColumn(e.row,"PER_VATPROOF"));
        			per = !per ? 0 : per;

        			obj.setColumn(e.row,"AM_VAT" , nexacro.toNumber(obj.getColumn(e.row,"AM_SUPPLY")) * per / 100);
        		}
        	}

        	if(e.columnid == "ISSUE_ID"){

        		if (this.gfnIsNull(e.newvalue)){
        			obj.setColumn(e.row,"TY_ISSUE" , "P");
        			obj.setColumn(e.row,"AM_SUPPLY" , 0);
        			obj.setColumn(e.row,"AM_SUPPLY2" , 0);
        			obj.setColumn(e.row,"AM_SUPPLY3" , 0);
        			obj.setColumn(e.row,"AM_VAT" , 0);
        			obj.setColumn(e.row,"AM_ACCOUNT" , 0);
        		}

        	}

        		 if(e.columnid == "TY_ISSUE"){
                  if (e.newvalue == 'P'){
                 obj.setColumn(e.row,"AM_SUPPLY" , 0);
                 obj.setColumn(e.row,"AM_SUPPLY2" , 0);
                 obj.setColumn(e.row,"AM_SUPPLY3" , 0);
                 obj.setColumn(e.row,"AM_VAT" , 0);
                 obj.setColumn(e.row,"AM_ACCOUNT" , 0);

        	  }

        	  }

        };

        this.fnSaveTy = function(ty) {
        	if (!this.gfnGridValidate(this.dxGrid01)) return;

        	this.dxGrid01.updateToDataset();

        	this.dsSave.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();

        				this.dsSave.setColumn(nrow, "TY_WRK", flag);

        				this.dsSave.setColumn(nrow, "NO_SLIPKEY", this.dsList.getColumn(i, "NO_SLIPKEY"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(i, "DT_ACCOUNT").replace(/-/gi, ""));
        				this.dsSave.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "ISSUE_ID", this.dsList.getColumn(i, "ISSUE_ID"));
        				this.dsSave.setColumn(nrow, "AM_SUPPLY", this.dsList.getColumn(i, "AM_SUPPLY"));
        				this.dsSave.setColumn(nrow, "AM_SUPPLY2", this.dsList.getColumn(i, "AM_SUPPLY2"));
        				this.dsSave.setColumn(nrow, "AM_SUPPLY3", this.dsList.getColumn(i, "AM_SUPPLY3"));
        				this.dsSave.setColumn(nrow, "AM_ACCOUNT", this.dsList.getColumn(i, "AM_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				this.dsSave.setColumn(nrow, "TY_ISSUE", this.dsList.getColumn(i, "TY_ISSUE"));

        				var cd_vatproof = this.dsList.getColumn(i, "CD_VATPROOF");
        				var ty_vatbgje = this.dsList.getColumn(i, "TY_VATBGJE");
        				if(cd_vatproof == "13"){
        					if (this.gfnIsNull(ty_vatbgje)){
        						this.gfnAlert("매입세액불공제는 반드시 입력 하셔야 합니다.", "");
        						return;
        					}
        				}
        				this.dsSave.setColumn(nrow, "CD_VATPROOF", cd_vatproof);
        				this.dsSave.setColumn(nrow, "TY_VATBGJE", ty_vatbgje);

        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsSave.setColumn(nrow, "TY_VENDOR", this.dsList.getColumn(i, "TY_VENDOR"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR_MI", this.dsList.getColumn(i, "CD_VENDOR_MI"));
        				this.dsSave.setColumn(nrow, "DS_VENDOR_MI", this.dsList.getColumn(i, "DS_VENDOR_MI"));
        				this.dsSave.setColumn(nrow, "TY_VENDOR_MI", this.dsList.getColumn(i, "TY_VENDOR_MI"));
        				this.dsSave.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_AUTOSLIP", "DWB0001");
        				this.dsSave.setColumn(nrow, "PER_VATPROOF", this.dsList.getColumn(i, "PER_VATPROOF"));
        				this.dsSave.setColumn(nrow, "TY_APPROVE", this.dsList.getColumn(i, "TY_APPROVE"));

        				break;
        		}
        	}

        	trace(this.dsSave.saveXML());

        	if (this.dsSave.rowcount == 0){
        		this.fnIssue();

        		return;
        	}

        	var strSvcId    = "save";
        	if(ty){
        		strSvcId    = "save2";
        	}
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };


        this.fnIssue = function (){
        	this.dsSave1.clearData();
        	var nrow = this.dsSave1.addRow();

        	this.dsSave1.setColumn(nrow, "ID_USER",  this.AuthClient.ID_USER);

        	var str = "";
        	for(var i = 0; i < this.dsList.rowcount; i++){

        		var chk = this.dsList.getColumn(i, "CHK");
        		if(chk != "1"){
        			continue;
        		}

        		var no = this.dsList.getColumn(i, "NO_SLIPKEY");
        		str += no + ",";

        	}

        	this.dsSave1.setColumn(nrow, "TY_WRK", "I");
        	this.dsSave1.setColumn(nrow, "NO_SLIPKEY", str.substring(0, str.length-1));
        	this.dsSave1.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsSave1.setColumn(nrow, "CD_AUTOSLIP", "DWB0001");

        	trace(this.dsSave1.saveXML());

        	var strSvcId    = "issue";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "issue=dsSave1";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_MAINTAINCOST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
