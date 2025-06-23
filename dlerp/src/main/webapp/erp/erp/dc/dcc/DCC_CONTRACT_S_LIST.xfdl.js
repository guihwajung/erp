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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCCPR_REQCONTRACT_SELECT_HD_S</Col></Row><Row><Col id=\"TARGET\">chgcont</Col><Col id=\"SP\">DCCPR_HD_CONTRACT_CHG_HD</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCCPR_G_CONTRACT_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChgContSeq", this);
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
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCC_CONTRACT_S_LIST.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.popupVal = "";

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
        	this.btn1 = this.gfnFormButtonAdd("btnContract", "fnContract");
        	this.btnCONTSELECT = this.gfnFormButtonAdd("btnCONTSELECT", "fnCONTSELECT");
        	this.btnCHGCONT = this.gfnFormButtonAdd("btnCHGCONT", "fnCHGCONT");
        	this.btnDetail = this.gfnFormButtonAdd("btnDetail", "fnDetail");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_SITE.CodeFindName = "DCX_CFSITE_02";

        	//this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCC_REQCONTRACTQRY_G");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

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
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_CONT", "string");
        	this.dsSelect.addColumn("TY_SYS", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_CONT", "string");
        	this.dsSave.addColumn("SN_SEQ", "string");
        	this.dsSave.addColumn("DS_CONT", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("FR_WORK", "string");
        	this.dsSave.addColumn("TO_WORK", "string");
        	this.dsSave.addColumn("AM_CONTPRO", "bigdecimal");
        	this.dsSave.addColumn("AM_CONTVAT", "bigdecimal");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("TY_CONT", "string");
        	this.dsSave.addColumn("DS_CONTMETHOD", "string");
        	this.dsSave.addColumn("TY_SYS", "string");


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

        	this.dsSelect.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_CONT", "");
        	this.dsSelect.setColumn(0, "TY_SYS", this.FormInfo.DS_PARAM);

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
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	// save SP 한개로 사용하는 경우
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_CONT", this.dsList.getColumn(i, "NO_CONT"));
        				this.dsSave.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));
        				this.dsSave.setColumn(nrow, "DS_CONT", this.dsList.getColumn(i, "DS_SUBCON"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "FR_WORK", this.dsList.getColumn(i, "FR_WORK"));
        				this.dsSave.setColumn(nrow, "TO_WORK", this.dsList.getColumn(i, "TO_WORK"));
        				this.dsSave.setColumn(nrow, "AM_CONTPRO", this.dsList.getColumn(i, "AM_CONTPRO"));
        				this.dsSave.setColumn(nrow, "AM_CONTVAT", this.dsList.getColumn(i, "AM_CONTVAT"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "TY_CONT", this.dsList.getColumn(i, "TY_CONT"));
        				this.dsSave.setColumn(nrow, "DS_CONTMETHOD", this.dsList.getColumn(i, "DS_CONTMETHOD"));
        				this.dsSave.setColumn(nrow, "TY_SYS", this.FormInfo.DS_PARAM);
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
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnBtnCheckAll();
        	}
        	else if(svcID == "chgCont") {
        		if(errorCode == 0)
        		{
        			if(this.dsChgContSeq.rowcount > 0)
        			{
        				var cd_site = this.dsChgContSeq.getColumn(0, "CD_SITE");
        				var no_cont = this.dsChgContSeq.getColumn(0, "NO_CONT");
        				var sn_seq = this.dsChgContSeq.getColumn(0, "SN_OUTPUT");

        				this.fnCHGCONT_AfterOpenContract(cd_site, no_cont, sn_seq);
        			}
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_SAUPCENTER", "");
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
        		this.fnBtnCheckAll();
        		obj.oldrow = -1;
        	}
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

         // 현장정보관리 버튼 클릭시 팝업화면 호출
         this.fnRiskDtls = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0,"CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.NO_RISK = this.dsList.getColumn(this.dsList.rowposition, "NO_RISK");
        	param.NM_RISK = this.dsList.getColumn(this.dsList.rowposition, "NM_RISK");
            param.NO_SILHENG = this.dsList.getColumn(this.dsList.rowposition, "NO_SILHENG");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_RISKDTLS", "", param);
        }

        this.fnContract = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};
        	/*
        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.NO_CONT = this.dsList.getColumn(this.dsList.rowposition, "NO_CONT");
        	param.DS_SUBCON = this.dsList.getColumn(this.dsList.rowposition, "DS_SUBCON");
        	param.SN_SEQ = "001";
        	*/
        	this.gfnFormOpen("DCC", "DCC_CONTRACT_S_DLG", "fnDialogCallback", param, 450, 230);
        }

        this.fnDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value == true){
        		var param = {};

        		//param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		param.DS_CONTMETHOD = this.popupVal.dsContmethod;
        		param.DS_CODE = this.popupVal.dsNmContmethod;
        		param.NO_FORM = this.popupVal.dsForm;
        		param.DS_FORM = this.popupVal.dsNmForm;
        		param.DS_FORM = this.popupVal.dsNmForm;
        		param.YN_PARTNERSIGN = this.popupVal.dsYN_PARTNERSIGN;
        		param.CD_PARTNERSIGN = this.popupVal.dsCD_PARTNERSIGN;
        		param.DS_PARTNERSIGN = this.popupVal.dsDS_PARTNERSIGN;
        		param.YN_E_CONT = this.popupVal.dsYN_E_CONT;
        		param.SCREEN_GB = "I";
        		//param.NO_CONT = this.dsList.getColumn(this.dsList.rowposition, "NO_CONT");
        		//param.DS_SUBCON = this.dsList.getColumn(this.dsList.rowposition, "DS_SUBCON");
        		//param.SN_SEQ = "001";

        		this.gfnFormOpen("DCC", "DCC_CONTRACT_S", "fnDialogConCallback", param);
        	}
        }


        this.fnDialogConCallback = function(svcID, value) {
        	this.FormBtns.Select.click();
        }


        this.fnCONTSELECT = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};

        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.NO_CONT = this.dsList.getColumn(this.dsList.rowposition, "NO_CONT");
        	param.SN_SEQ = this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ");

        	this.gfnFormOpen("DCC", "DCC_CONTRACT", "fnDialogConSelCallback", param, 950, 750);

        }

        this.fnDialogConSelCallback = function(svcID, value) {

        	this.FormBtns.Select.click();

        	/*
        	if(value == true){
        		var param = {};

        		//param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		param.DS_CONTMETHOD = this.popupVal.dsContmethod;
        // 		param.DS_CODE = this.popupVal.dsNmContmethod;
        // 		param.NO_FORM = this.popupVal.dsForm;
        // 		param.DS_FORM = this.popupVal.dsNmForm;
        // 		param.DS_FORM = this.popupVal.dsNmForm;
        // 		param.YN_PARTNERSIGN = this.popupVal.dsYN_PARTNERSIGN;
        // 		param.CD_PARTNERSIGN = this.popupVal.dsCD_PARTNERSIGN;
        // 		param.DS_PARTNERSIGN = this.popupVal.dsDS_PARTNERSIGN;
        // 		param.YN_E_CONT = this.popupVal.dsYN_E_CONT;
        		param.SCREEN_GB = "I";
        		//param.NO_CONT = this.dsList.getColumn(this.dsList.rowposition, "NO_CONT");
        		//param.DS_SUBCON = this.dsList.getColumn(this.dsList.rowposition, "DS_SUBCON");
        		//param.SN_SEQ = "001";

        		this.gfnFormOpen("DCC", "DCC_CONTRACT_S", "fnDialogConCallback", param);
        	}
        	*/
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        // 확장버튼 변경계약서작성 클릭 이벤트.
        this.fnCHGCONT = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nrow = this.dsList.rowposition;

        	var msg = "현장코드 : [" + this.dsList.getColumn(nrow,"CD_SITE") + "]" + this.dsList.getColumn(nrow,"DS_SITE")
        			+ "\n계약번호 : [" + this.dsList.getColumn(nrow, "NO_CONT") + "]"
        			+ "\n하도급공사명 : " + this.dsList.getColumn(nrow, "DS_SUBCON")
        			+ "\n\n변경계약을 진행하시겠습니까?"
        	;

        	this.gfnConfirm(msg, "fnCHGCONT_callback");
        }

        // 변경계약서 작성 Callback
        this.fnCHGCONT_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsChgCont = new Dataset();
        		this.dsChgCont.addColumn("CD_SITE", "string");
        		this.dsChgCont.addColumn("NO_CONT", "string");
        		this.dsChgCont.addColumn("SN_SEQ", "string");
        		this.dsChgCont.addColumn("SN_OUTPUT", "string");

        		this.dsChgCont.clearData();
        		var nrow = this.dsChgCont.addRow();

        		this.dsChgCont.setColumn(nrow, "CD_SITE", this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        		this.dsChgCont.setColumn(nrow, "NO_CONT", this.dsList.getColumn(this.dsList.rowposition, "NO_CONT"));
        		this.dsChgCont.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ"));
        		this.dsChgCont.setColumn(nrow, "SN_OUTPUT", "");

        		if (this.dsChgCont.rowcount == 0) return;

        		var strSvcId    = "chgCont";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "chgcont=dsChgCont";
        		var outData     = "dsChgContSeq=chgcont";
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

        // 변경계약서작성 후 계약관리 화면 오픈.
        this.fnCHGCONT_AfterOpenContract = function(cd_site, no_cont, sn_seq) {
        	var param = {};

        	param.CD_SITE = cd_site;
        	param.NO_CONT = no_cont;
        	param.SN_SEQ = sn_seq;
        	param.SCREEN_GB = "Q";

        	this.gfnFormOpen("DCC", "DCC_CONTRACT_S", "fnDialogCHGCONTCallback", param);
        }

        this.fnDialogCHGCONTCallback = function(svcID, value) {
        	this.FormBtns.Select.click();
        }


        // 계약내역 버튼 클릭시 팝업화면 호출
        this.fnDetail = function(obj,e) {
        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        	param.NO_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "NO_CONT");
        	param.DS_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "DS_SUBCON");
        	param.SN_SEQ = this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_G_CONTRACT_DETAIL", "", param);
        }

        this.fnBtnCheckAll = function()
        {
         	this.gfnBtnCheck(this.btn1,this.dsList);
         	this.gfnBtnCheck(this.btnCONTSELECT, this.dsList);
         	this.gfnBtnCheck(this.btnCHGCONT, this.dsList);
        }
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		if(e.columnid == "AM_CONTPRO"){	// 공급가
        			this.dsList.setColumn(e.row, "AM_CONTVAT", nexacro.floor(nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONTPRO"),0) * 0.1 ));
        			this.dsList.setColumn(e.row, "AM_CONT", nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONTPRO"),0) + nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONTVAT"),0) );
        		}else if(e.columnid == "AM_CONTVAT"){	// 부가세
        			this.dsList.setColumn(e.row, "AM_CONT", nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONTPRO"),0) + nexacro.toNumber(this.dsList.getColumn(e.row, "AM_CONTVAT"),0) );
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCC_CONTRACT_S_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
