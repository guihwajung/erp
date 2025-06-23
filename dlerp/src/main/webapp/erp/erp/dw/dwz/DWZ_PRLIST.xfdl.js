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
            this.set_titletext("발주의뢰(외주)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWZPR_PRLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWZPR_PR_SAVE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DCBPR_PR2CONTRACT_INSERT</Col></Row><Row><Col id=\"TARGET\">confirm</Col><Col id=\"SP\">DCB_ORDERPLANSR_SITE_CALLBACK</Col></Row><Row><Col id=\"TARGET\">confirmGM</Col><Col id=\"SP\">DWZPR_PR_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SYSTEM","staCD_SYSTEM:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SYSTEM.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWZ_PRLIST.xfdl", function() {
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

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        // 	var id_group = this.FormInfo.ID_GROUP;
        // 	var gr_search = this.FormInfo.GR_SEARCH;
        // 	var cd_role = this.FormInfo.CD_ROLE;
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("Silhengtohado", "fnSilhengtohado");
        	this.btn2 = this.gfnFormButtonAdd("btnOrdePlan", "fnOrdePlan");
        	this.btn3 = this.gfnFormButtonAdd("btnApp", "fnApp");
        	this.btnContract = this.gfnFormButtonAdd("btnContract", "fnContract");
        	this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate");
        	this.btnDetail = this.gfnFormButtonAdd("btnDetail", "fnDetail");
        //	this.btn3 = this.gfnFormButtonAdd("btnHadoStatus", "fnHadoStatus");
        	this.btnConfirmReq = this.gfnFormButtonAdd("btnConfirmReq", "fnConfirmReq");
        	this.btnConfirm = this.gfnFormButtonAdd("btnConfirm", "fnConfirm");
        	this.btnConfirmCancel = this.gfnFormButtonAdd("btnConfirmCancel", "fnConfirmCancel");
        	this.btnRetrieve = this.gfnFormButtonAdd("btnRetrieve", "fnConfirmCancel");

        	if(this.FormInfo.DS_PARAM == "SU") { //외주
        		//공사승인, 공무승인은 자재만 있음
        		this.btnConfirmGS = this.gfnFormButtonAdd("btnConfirmGS", "fnConfirmGS");
        		this.btnConfirmGM = this.gfnFormButtonAdd("btnConfirmGM", "fnConfirmGM");
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SYSTEM.CodeFindName = "DZX_CFSITE"
        	if(this.FormInfo.DS_PARAM == "SU") { //외주
        		this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWZ_PRLIST");
        	} else { // DS_PARAM == "MM" 자재
        		this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWZ_PRLIST_DM");
        	}
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	var nIdx = -1;
        	for(var i = 0; i < this.dxGrid.getCellCount("head"); i++) {
        		if(this.dxGrid.getHeadValue(i) == "공사기간") {
        			nIdx = i;
        		}
        	}
        	if(this.FormInfo.DS_PARAM == "SU") { //외주
        		this.dxGrid.setCellProperty("head", nIdx, "text", "공사기간");
        	} else { // DS_PARAM == "MM" 자재
        		this.dxGrid.setCellProperty("head", nIdx, "text", "납품기간");
        	}
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_PR", "string");
        	this.dsSave.addColumn("DS_PR", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("DS_VENDOR", "string");
        	this.dsSave.addColumn("DS_PRESIDENT", "string");
        	this.dsSave.addColumn("TY_BUSINESS", "string");
        	this.dsSave.addColumn("NO_TEL", "string");
        	this.dsSave.addColumn("NO_FAX", "string");
        	this.dsSave.addColumn("AT_ADDR", "string");
        	this.dsSave.addColumn("YN_IMSINO", "string");
        	this.dsSave.addColumn("DT_HDCONT", "string");
        	this.dsSave.addColumn("AM_PL_HADO", "bigdecimal");
        	this.dsSave.addColumn("DT_KONGSA_FROM", "string");
        	this.dsSave.addColumn("DT_KONGSA_TO", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("DS_CONTMETHOD", "string");
        	this.dsSave.addColumn("DT_BAL", "string");
        	this.dsSave.addColumn("SN_SEQ", "string");
        	this.dsSave.addColumn("TY_SYS", "string");
        	this.dsSave.addColumn("CD_VENDOR_MIG", "string");
        	this.dsSave.addColumn("AM_CONTPRO_MIG", "bigdecimal");
        	this.dsSave.addColumn("AM_CONTVAT_MIG", "bigdecimal");
        	this.dsSave.addColumn("RT_TAX_MIG", "bigdecimal");
        	this.dsSave.addColumn("DT_CONT_MIG", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("NO_PR", "string");
        	this.dsExec.addColumn("ID_USER", "string");

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
        	this.dsSelect.setColumn(0, "TY_WRK", this.FormInfo.DS_PARAM);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);


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
        	this.gfnGridAdd(this.dxGrid);
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
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

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
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_PR", this.dsList.getColumn(i, "NO_PR"));
        				this.dsSave.setColumn(nrow, "DS_PR", this.dsList.getColumn(i, "DS_PR"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsSave.setColumn(nrow, "DS_PRESIDENT", this.dsList.getColumn(i, "DS_PRESIDENT"));
        				this.dsSave.setColumn(nrow, "TY_BUSINESS", this.dsList.getColumn(i, "TY_BUSINESS"));
        				this.dsSave.setColumn(nrow, "NO_TEL", this.dsList.getColumn(i, "NO_TEL"));
        				this.dsSave.setColumn(nrow, "NO_FAX", this.dsList.getColumn(i, "NO_FAX"));
        				this.dsSave.setColumn(nrow, "AT_ADDR", this.dsList.getColumn(i, "AT_ADDR"));
        				this.dsSave.setColumn(nrow, "YN_IMSINO", this.dsList.getColumn(i, "YN_IMSINO"));
        				this.dsSave.setColumn(nrow, "DT_HDCONT", this.dsList.getColumn(i, "DT_HDCONT"));
        				this.dsSave.setColumn(nrow, "AM_PL_HADO", this.dsList.getColumn(i, "AM_PL_HADO"));
        				this.dsSave.setColumn(nrow, "DT_KONGSA_FROM", this.dsList.getColumn(i, "DT_KONGSA_FROM"));
        				this.dsSave.setColumn(nrow, "DT_KONGSA_TO", this.dsList.getColumn(i, "DT_KONGSA_TO"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				//this.dsSave.setColumn(nrow, "DS_CONTMETHOD", this.dsList.getColumn(i, "TY_CONTH"));
        				//this.dsSave.setColumn(nrow, "DS_CONTMETHOD", "10");
        				this.dsSave.setColumn(nrow, "DS_CONTMETHOD", this.dsList.getColumn(i, "TY_CONTH"));
        				this.dsSave.setColumn(nrow, "DT_BAL", this.dsList.getColumn(i, "DT_BAL"));
        				this.dsSave.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));
        				this.dsSave.setColumn(nrow, "TY_SYS", this.FormInfo.DS_PARAM);
        				this.dsSave.setColumn(nrow, "CD_VENDOR_MIG", this.dsList.getColumn(i, "CD_VENDOR_MIG"));
        				this.dsSave.setColumn(nrow, "AM_CONTPRO_MIG", this.dsList.getColumn(i, "AM_CONTPRO_MIG"));
        				this.dsSave.setColumn(nrow, "AM_CONTVAT_MIG", this.dsList.getColumn(i, "AM_CONTVAT_MIG"));
        				this.dsSave.setColumn(nrow, "RT_TAX_MIG", this.dsList.getColumn(i, "RT_TAX_MIG"));
        				this.dsSave.setColumn(nrow, "DT_CONT_MIG", this.dsList.getColumn(i, "DT_CONT_MIG"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
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
        	if (this.gfnIsNull(this.ccfCD_SYSTEM.form.CDTextBox.text)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
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

        		this.fnBtnCheckAll();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "confirm") {
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
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // 외주내역작성 버튼 클릭 이벤트
        this.fnSilhengtohado = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("외주계약건을 선택하세요.");
        		return false;
        	}

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SYSTEM.form.DSTextBox.text;
        	param.NO_PR = this.dsList.getColumn(this.dsList.rowposition, "NO_PR");
        	param.DS_PR = this.dsList.getColumn(this.dsList.rowposition, "DS_PR");
        	param.DS_PARAM = this.FormInfo.DS_PARAM;

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_SILHENGTOPR", "fnSilhengtohado_callback", param);

        }

        this.fnSilhengtohado_callback = function()
        {
        	this.FormBtns.Select.click();
        }

        // 발주요청 버튼 클릭 이벤트
        this.fnOrdePlan = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("외주계약건을 선택하세요.");
        		return false;
        	}

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SYSTEM.form.DSTextBox.text;
        	param.NO_BID = this.dsList.getColumn(this.dsList.rowposition, "NO_PR");
        	param.DS_SUBCON = this.dsList.getColumn(this.dsList.rowposition, "DS_PR");
        	param.DS_PARAM = this.FormInfo.DS_PARAM;

        	if(this.dsList.getColumn(this.dsList.rowposition, "DS_STATUS") != "변경계약" && this.dsList.getColumn(this.dsList.rowposition, "DS_STATUS") != "완료")
        	{
        		//if((this.dsList.getColumn(this.dsList.rowposition, "TY_CONTH") == "40" || this.dsList.getColumn(this.dsList.rowposition, "TY_CONTH") == "50") )
        // 		if((this.dsList.getColumn(this.dsList.rowposition, "TY_CONTH") == "40") )
        // 		{
        // 			this.gfnFormOpen("DCB", "DCB_ORDERPLANSR_SITE_DM", "", param);
        // 		}
        // 		else
        // 		{
        // 			// 화면 오픈.
        // 			// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        // 			// 타 모듈 화면 호출시 지정할것.
        // 			this.gfnFormOpen("DCB", "DCB_ORDERPLANSR_SITE", "", param);
        // 		}
        		this.gfnFormOpen("DCB", "DCB_ORDERPLANSR_SITE", "fnOrderDetail_callback", param, 1000, 800);
        	}
        	else
        	{
        		this.gfnFormOpen("DCC", "DCC_REQCHGCONTRACT", "fnOrderDetail_callback", param, 1030, 640);
        	}
        }

        this.fnOrderDetail_callback = function()
        {
        	this.FormBtns.Select.click();
        }



        this.fnApp = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 처리하세요.", "");
        		return;
        	}

        	var param = {};
        	param.V1 = this.dsSearch.getColumn(0, "CD_SITE");			// CD_SITE
        	param.V2 = this.dsList.getColumn(this.dsList.rowposition, "NO_PR");			// NO_PR
        	param.V3 = "";
        	param.V4 = "";
        	param.ID_AP = this.dsList.getColumn(this.dsList.rowposition, "NO_ELAPDOC");	// 전자결재문서번호
        	param.DS_ETITLE = "발주요청서";

        	this.gfnFormOpen("DCB", "DCB_PR_APP", "fnAprvDialogCallback", param, 1200, 700);
        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값

        	// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        	this.FormBtns.Select.click();

        };


        this.fnContract = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("외주계약건을 선택하세요.");
        		return false;
        	}

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.NO_CONT = this.dsList.getColumn(this.dsList.rowposition, "NO_CONT");
        	//param.DS_SUBCON = this.dsList.getColumn(this.dsList.rowposition, "DS_SUBCON");
        	param.SN_SEQ = "001";

        	this.gfnFormOpen("DCC", "DCC_CONTRACT", "", param, 950, 750);
        }

        this.fnCreate = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("외주계약건을 선택하세요.");
        		return false;
        	}

        	this.dsExec.clearData();
        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(0, "NO_PR", this.dsList.getColumn(this.dsList.rowposition, "NO_PR"));
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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

        this.fnDetail = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("외주계약건을 선택하세요.");
        		return false;
        	}

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SYSTEM.form.DSTextBox.text;
        	param.NO_BID = this.dsList.getColumn(this.dsList.rowposition, "NO_BID");
        	param.DS_BID = this.dsList.getColumn(this.dsList.rowposition, "DS_PR");		// NO_BID 명칭이 없어서 DS_PR로 보냄
        	param.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR_MIG");
        	param.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR_MIG");

        	this.gfnFormOpen("DCB", "DCB_ESTIMATIONVENDORSAV_ENG", "fnDetail_callback", param);
        }

        this.fnDetail_callback = function(strId, val)
        {
        	this.FormBtns.Select.click();
        }


        /*
        this.fnAPP = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	if(!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("외주계약건을 선택하세요.");
        		return false;
        	}

        	var param = {};
        	var nRow = this.dsList.rowposition;

        	param.PARAM01 = this.dsSearch.getColumn(0,"CD_SITE");
        	param.PARAM02 = this.dsList.getColumn(nRow, "NO_PR");
        	param.ID_AP = this.dsList.getColumn(nRow, "NO_ELAPDOC");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen("DCB", "DCB_ORDERPLANSR_SITE_APPROVAL", "fnAprvDialogCallback", param);

        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };
        */


        //
        // // 계약이력조회 버튼 클릭 이벤트
        // this.fnHadoStatus = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	if(!this.gfnGridIsRow(this.dxGrid))
        // 	{
        // 		this.gfnAlert("외주계약건을 선택하세요.");
        // 		return false;
        // 	}
        //
        // 	var param = {};
        // 	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        // 	param.DS_SITE = this.ccfCD_SYSTEM.form.DSTextBox.text;
        // 	param.NO_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT");
        // 	param.DS_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT");
        //
        // 	// 화면 오픈.
        // 	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        // 	// 타 모듈 화면 호출시 지정할것.
        // 	this.gfnFormOpen("DWZ", "DWZ_HADOSTATUS", "", param);
        //
        //
        // }

        // row 변경 선택시 발생 이벤트
        /*
        this.dsList_onrowposchanged = function(obj:nexacro.NormalDataset,e:nexacro.DSRowPosChangeEventInfo)
        {
        	if(this.dsList.rowcount < 1) return;

        	if(this.dsList.getColumn(this.dsList.rowposition, "TY_CONTH") == "40" || this.dsList.getColumn(this.dsList.rowposition, "TY_CONTH") == "50" )
        	{
        		if(this.dsList.getColumn(this.dsList.rowposition, "DS_STATUS") == "변경계약")
        		{
        			this.btn2.set_text("변경구매요청");
        		}
        		else
        		{
        			this.btn2.set_text("자재구매요청");
        		}
        	}
        	else
        	{
        		// 해당 row의 컬럼값을 외주발주의뢰 버튼 텍스트로 변경한다
        		var btnOrderplan = this.dsList.getColumn(this.dsList.rowposition, "BTN_ORDERPLAN");
        		this.btn2.set_text(btnOrderplan);
        	}
        	//this.btn2.set_fittocontents("width");
        	this.btn2.parent.fnSetBtn();
        	//this.btn2.parent.parent;
        };
        */

        this.fnBtnCheckAll = function()
        {
        	if(this.FormInfo.DS_PARAM == "SU") { //외주
        		//일단 전부 disable한 다음 상태 및 권한에 따라 enable 21.10.29 권한체크는 버튼 눌렀을때 하는걸로 변경
        		this.btnConfirmReq.set_enable(false); //승인요청
        		this.btnConfirmGS.set_enable(false); //공사승인
        		this.btnConfirmGM.set_enable(false); //공무승인
        		this.btnConfirm.set_enable(false); //소장승인
        		this.btnConfirmCancel.set_enable(false); //반려
        		this.btnRetrieve.set_enable(false); //회수

        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "GW_STATUS1"))) { //승인요청 이전
        			this.btnConfirmReq.set_enable(true); //승인요청
        		} else { //승인요청 이후
        			//(이미 승인요청 했으니 이후 프로세스에선 승인요청 부분은 전부 false)
        			if(this.dsList.getColumn(this.dsList.rowposition, "GW_STATUS1") == "C") { //승인요청 진행중인 단계
        				if(this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "YN_GONGMU_ABS"), "N") == "N"
        				&& this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "YN_CONFIRM_GONGMU"), "N") == "N") {
        					this.btnConfirmGM.set_enable(true); //공무승인
        					this.btnConfirmCancel.set_enable(true); //반려
        				}
        				if(this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "YN_GONGSA_ABS"), "N") == "N"
        				&& this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "YN_CONFIRM_GONGSA"), "N") == "N") {
        					this.btnConfirmGS.set_enable(true); //공사승인
        					this.btnConfirmCancel.set_enable(true); //반려
        				}
        				if((this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "YN_GONGMU_ABS"), "N") == "Y"
        				|| this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "YN_CONFIRM_GONGMU"), "N") == "Y")
        				&& (this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "YN_GONGSA_ABS"), "N") == "Y"
        				|| this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "YN_CONFIRM_GONGSA"), "N") == "Y")) {
        					this.btnConfirm.set_enable(true); //소장승인
        					this.btnConfirmCancel.set_enable(true); //반려
        				}
        			} else if(this.dsList.getColumn(this.dsList.rowposition, "GW_STATUS1") == "A") { //소장승인까지 난 상태 (all disable)
        				this.btnRetrieve.set_enable(true); //회수
        			}
        		}
        	} else { // DS_PARAM == "MM" 자재
        		this.btnConfirmReq.set_enable(false); //승인요청
        		this.btnConfirm.set_enable(false); //소장승인
        		this.btnConfirmCancel.set_enable(false); //반려
        		this.btnRetrieve.set_enable(false); //회수

        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "GW_STATUS1"))) { //승인요청 이전
        			this.btnConfirmReq.set_enable(true); //승인요청
        		} else { //승인요청 이후
        			if(this.dsList.getColumn(this.dsList.rowposition, "GW_STATUS1") == "C") { //승인요청 진행중인 단계
        				this.btnConfirm.set_enable(true); //소장승인
        				this.btnConfirmCancel.set_enable(true); //반려
        			} else if(this.dsList.getColumn(this.dsList.rowposition, "GW_STATUS1") == "A") { //소장승인까지 난 상태 (all disable)
        				this.btnRetrieve.set_enable(true); //회수
        			}
        		}
        	}
        }

        this.fnConfirmReq = function(obj,e) {
            if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	this.gfnConfirm("승인요청 하시겠습니까?", "fnConfirmReq_callback");
        }

        this.fnConfirmReq_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		var nRowCont = this.dsList.rowposition;

        		this.dsConfirm = new Dataset();

        		this.dsConfirm.addColumn("ID_AP", "string");
        		this.dsConfirm.addColumn("V_PARAM01", "string");
        		this.dsConfirm.addColumn("V_PARAM02", "string");
        		this.dsConfirm.addColumn("V_PARAM03", "string");
        		this.dsConfirm.addColumn("V_PARAM04", "string");
        		this.dsConfirm.addColumn("ST_APPR", "string"); //01:결재상신,02:결재진행(결재화면로딩시),03:결재완료,04:반려,05:결재취소
        		this.dsConfirm.addColumn("ID_USER", "string");

        		var nrow = this.dsConfirm.addRow();
        		this.dsConfirm.setColumn(nrow, "ID_AP", "99999");
        		this.dsConfirm.setColumn(nrow, "V_PARAM01", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsConfirm.setColumn(nrow, "V_PARAM02", this.dsList.getColumn(nRowCont, "NO_PR"));
        		this.dsConfirm.setColumn(nrow, "V_PARAM03", "");
        		this.dsConfirm.setColumn(nrow, "V_PARAM04", "");
        		this.dsConfirm.setColumn(nrow, "ST_APPR", "01");
        		this.dsConfirm.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		var strSvcId    = "confirm";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "confirm=dsConfirm";
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

        this.fnConfirm = function(obj,e) {
            if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	if (this.dsList.getColumn(this.dsList.rowposition, "YN_SOJANG") == "N") {
        		this.gfnAlert("현장정보에 소장을 등록해 주시기 바랍니다.");
        		return;
        	}

        	this.gfnConfirm("소장승인 하시겠습니까?", "fnConfirm_callback");
        }

        this.fnConfirm_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		var nRowCont = this.dsList.rowposition;

        		this.dsConfirm = new Dataset();

        		this.dsConfirm.addColumn("ID_AP", "string");
        		this.dsConfirm.addColumn("V_PARAM01", "string");
        		this.dsConfirm.addColumn("V_PARAM02", "string");
        		this.dsConfirm.addColumn("V_PARAM03", "string");
        		this.dsConfirm.addColumn("V_PARAM04", "string");
        		this.dsConfirm.addColumn("ST_APPR", "string"); //01:결재상신,02:결재진행(결재화면로딩시),03:결재완료,04:반려,05:결재취소
        		this.dsConfirm.addColumn("ID_USER", "string");

        		var nrow = this.dsConfirm.addRow();
        		this.dsConfirm.setColumn(nrow, "ID_AP", "99999");
        		this.dsConfirm.setColumn(nrow, "V_PARAM01", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsConfirm.setColumn(nrow, "V_PARAM02", this.dsList.getColumn(nRowCont, "NO_PR"));
        		this.dsConfirm.setColumn(nrow, "V_PARAM03", "");
        		this.dsConfirm.setColumn(nrow, "V_PARAM04", "");
        		this.dsConfirm.setColumn(nrow, "ST_APPR", "03");
        		this.dsConfirm.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		var strSvcId    = "confirm";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "confirm=dsConfirm";
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

        this.fnConfirmCancel = function(obj,e) {
            if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	if (this.dsList.getColumn(this.dsList.rowposition, "YN_SOJANG") == "N") {
        		this.gfnAlert("현장정보에 소장을 등록해 주시기 바랍니다.");
        		return;
        	}

        	this.gfnConfirm(obj.text + " 하시겠습니까?", "fnConfirmCancel_callback");
        }

        this.fnConfirmCancel_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		var nRowCont = this.dsList.rowposition;

        		this.dsConfirm = new Dataset();

        		this.dsConfirm.addColumn("ID_AP", "string");
        		this.dsConfirm.addColumn("V_PARAM01", "string");
        		this.dsConfirm.addColumn("V_PARAM02", "string");
        		this.dsConfirm.addColumn("V_PARAM03", "string");
        		this.dsConfirm.addColumn("V_PARAM04", "string");
        		this.dsConfirm.addColumn("ST_APPR", "string"); //01:결재상신,02:결재진행(결재화면로딩시),03:결재완료,04:반려,05:결재취소
        		this.dsConfirm.addColumn("ID_USER", "string");

        		var nrow = this.dsConfirm.addRow();
        		this.dsConfirm.setColumn(nrow, "ID_AP", "99999");
        		this.dsConfirm.setColumn(nrow, "V_PARAM01", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsConfirm.setColumn(nrow, "V_PARAM02", this.dsList.getColumn(nRowCont, "NO_PR"));
        		this.dsConfirm.setColumn(nrow, "V_PARAM03", "");
        		this.dsConfirm.setColumn(nrow, "V_PARAM04", "");
        		this.dsConfirm.setColumn(nrow, "ST_APPR", "09");
        		this.dsConfirm.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		var strSvcId    = "confirm";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "confirm=dsConfirm";
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

        this.fnConfirmGS = function(obj,e) {
            if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	if (this.dsList.getColumn(this.dsList.rowposition, "YN_GONGSA") == "N") {
        		this.gfnAlert("현장정보에 공사담당을 등록해 주시기 바랍니다.");
        		return;
        	}

        	this.gfnConfirm("공사승인 하시겠습니까?", "fnConfirmGS_callback");
        }

        this.fnConfirmGS_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		var nRowCont = this.dsList.rowposition;

        		this.dsConfirm = new Dataset();

        		this.dsConfirm.addColumn("CD_SITE", "string");
        		this.dsConfirm.addColumn("NO_PR", "string");
        		this.dsConfirm.addColumn("TY_CONFIRM_STATUS", "string");
        		this.dsConfirm.addColumn("ID_USER", "string");

        		var nrow = this.dsConfirm.addRow();
        		this.dsConfirm.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsConfirm.setColumn(nrow, "NO_PR", this.dsList.getColumn(nRowCont, "NO_PR"));
        		this.dsConfirm.setColumn(nrow, "TY_CONFIRM_STATUS", "G");
        		this.dsConfirm.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		var strSvcId    = "confirm";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "confirmGM=dsConfirm";
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

        this.fnConfirmGM = function(obj,e) {
            if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	if (this.dsList.getColumn(this.dsList.rowposition, "YN_GONGMU") == "N") {
        		this.gfnAlert("현장정보에 공무담당을 등록해 주시기 바랍니다.");
        		return;
        	}

        	this.gfnConfirm("공무승인 하시겠습니까?", "fnConfirmGM_callback");
        }

        this.fnConfirmGM_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		var nRowCont = this.dsList.rowposition;

        		this.dsConfirm = new Dataset();

        		this.dsConfirm.addColumn("CD_SITE", "string");
        		this.dsConfirm.addColumn("NO_PR", "string");
        		this.dsConfirm.addColumn("TY_CONFIRM_STATUS", "string");
        		this.dsConfirm.addColumn("ID_USER", "string");

        		var nrow = this.dsConfirm.addRow();
        		this.dsConfirm.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsConfirm.setColumn(nrow, "NO_PR", this.dsList.getColumn(nRowCont, "NO_PR"));
        		this.dsConfirm.setColumn(nrow, "TY_CONFIRM_STATUS", "M");
        		this.dsConfirm.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		var strSvcId    = "confirm";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "confirmGM=dsConfirm";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWZ_PRLIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
