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
            this.set_titletext("발주서목록(철근)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMAPR_PO_LIST_ETC_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">req_ok</Col><Col id=\"SP\">DMAPR_PO_REQUEST</Col></Row><Row><Col id=\"TARGET\">req_cancel</Col><Col id=\"SP\">DMAPR_PO_REQUEST_CANCEL</Col></Row><Row><Col id=\"TARGET\">approve_ok</Col><Col id=\"SP\">DMAPR_PO_APPROVE</Col></Row><Row><Col id=\"TARGET\">approve_cancel</Col><Col id=\"SP\">DMAPR_PO_APPROVE_CANCEL</Col></Row><Row><Col id=\"TARGET\">contagree</Col><Col id=\"SP\">DMAPR_PO_APPROVE_CONTAGREE</Col></Row><Row><Col id=\"TARGET\">select_dam</Col><Col id=\"SP\">DMZPR_ID_DAMCODE_SELECT</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DCBPR_BIDTOPO_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SELECT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_SELECT\"/><Col id=\"YN_APPROVE\">N</Col><Col id=\"ID_DAM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SELECT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_APPROVE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미승인</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">승인</Col></Row><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsID_DAM", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDAM_CODE", this);
            obj._setContents("<ColumnInfo><Column id=\"DAM_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"110.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("AutoSet").set("false");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_CONT","ccfCD_SITE:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("계약(PO)번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_CONT","staNO_CONT:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFCONTRACT_01");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FR_TO","ccfNO_CONT:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("생성일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FR","staDT_FR_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta_range:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_DAM","0.0","staCD_SITE:10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("품목담당자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboID_DAM","staID_DAM:0.0","ccfCD_SITE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsID_DAM");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SELECT","ccboID_DAM:0.0","staCD_SITE:10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("구매구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_SELECT","staTY_SELECT:0.0","staCD_SITE:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsTY_SELECT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_APPROVE","ccboTY_SELECT:0.0","staCD_SITE:10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_APPROVE","staYN_APPROVE:0.0","staCD_SITE:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsYN_APPROVE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_value("0");
            obj.set_index("0");
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

            obj = new BindItem("item1","divSearch.form.ccfNO_CONT.form.CDTextBox","value","dsSearch","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboID_DAM","value","dsSearch","ID_DAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboTY_SELECT","value","dsSearch","TY_SELECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboYN_APPROVE","value","dsSearch","YN_APPROVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclDT_FR","value","dsSearch","DT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DMA_PO_LIST_ETC.xfdl", function() {
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

        	this.fnSetCombo();

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_FR", this.gfnAddMonth(today, -1));
        	this.dsSearch.setColumn(0, "DT_TO", today);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDetail = this.gfnFormButtonAdd("btnDetail", "fnDetail");
        	this.btnReq = this.gfnFormButtonAdd("btnReq", "fnReq");
        	this.btnReqCancel = this.gfnFormButtonAdd("btnReqCancel", "fnReqCancel");
        	this.btnApprove = this.gfnFormButtonAdd("btnApprove", "fnApprove");
        	this.btnApproveCancel = this.gfnFormButtonAdd("btnApproveCancel", "fnApproveCancel");
        	this.btnContract = this.gfnFormButtonAdd("btnContract", "fnContract");
        	this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP");
        	this.btnPoContAgree = this.gfnFormButtonAdd("btnPoContAgree", "fnPoContAgree");
        	this.btnCancel = this.gfnFormButtonAdd("btnCancel", "fnCancel");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_CONT = this.divSearch.form.ccfNO_CONT;
        	this.ccfID_DAM = this.divSearch.form.ccfID_DAM;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	//this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_CONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMA_PO_LIST_ETC");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);


        };
        this.fnGrid_EnterCell = function(obj, row, cell){
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        };
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_CONT", "string");
        	this.dsSelect.addColumn("ID_DAM", "string");
        	this.dsSelect.addColumn("TY_SELECT", "string");
        	this.dsSelect.addColumn("YN_APPROVE", "string");
        	this.dsSelect.addColumn("DT_FR", "string");
        	this.dsSelect.addColumn("DT_TO", "string");

        	this.dsReq = new Dataset();
        	this.dsReq.addColumn("NO_CONT", "string");
        	this.dsReq.addColumn("ID_USER", "string");

        	this.dsAppr = new Dataset();
        	this.dsAppr.addColumn("CD_SITE", "string");
        	this.dsAppr.addColumn("NO_BID", "string");
        	this.dsAppr.addColumn("NO_PO", "string");

        	this.dsApprCancel = new Dataset();
        	this.dsApprCancel.addColumn("NO_CONT", "string");
        	this.dsApprCancel.addColumn("SN_SEQ", "string");
        	this.dsApprCancel.addColumn("DS_CANCELREASON", "string");

        	this.dsCancel = new Dataset();
        	this.dsCancel.addColumn("CD_SITE", "string");
        	this.dsCancel.addColumn("NO_CONT", "string");
        	this.dsCancel.addColumn("ID_USER", "string");
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
        	this.dsSelect.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsSelect.setColumn(0, "ID_DAM", this.dsSearch.getColumn(0, "ID_DAM"));
        	this.dsSelect.setColumn(0, "TY_SELECT", this.dsSearch.getColumn(0, "TY_SELECT"));
        	this.dsSelect.setColumn(0, "YN_APPROVE", this.dsSearch.getColumn(0, "YN_APPROVE"));
        	this.dsSelect.setColumn(0, "DT_FR", this.dsSearch.getColumn(0, "DT_FR"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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

        		this.fnBtnCheckAll();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "req")
        	{
        		this.fnExecuteReq_callback = function()
        		{
        			this.FormBtns.Select.click();
        		}

        		if (errorCode == 0) {
        			var msg = "";
        			var json = this.gfnArgsToJson(strArg);

        			if(json.gubun == "Req") msg = "승인요청을";
        			else if(json.gubun == "ReqCancel") msg = "승인요청취소를";

        			msg += " 정상적으로 완료하였습니다.";

        			this.gfnAlert(msg,"fnExecuteReq_callback");
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "appr")
        	{
        		if (errorCode == 0) {
        			this.fnExecuteAppr_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("구매승인이 정상처리되었습니다.","fnExecuteAppr_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "appr_cancel")
        	{
        		if (errorCode == 0) {
        			this.fnExecuteAppr_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("구매승인취소가 정상처리되었습니다.","fnExecuteAppr_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "contagree")
        	{
        		if (errorCode == 0) {
        			this.fnExecuteAppr_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("발주대체가 정상처리되었습니다.","fnExecuteAppr_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "cancel")
        	{
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("반려가 정상처리되었습니다.","fnCallback_callback");
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

        // 	if (id == "ccfCD_SITE") {
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 	}
        // 	else
        	if(id == "ccfNO_CONT")
        	{
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.fnVaidateCallback = function() {
        				this.ccfCD_SITE.form.CDTextBox.setFocus();
        			}

        			this.gfnAlert("현장코드를 입력해주십시오.", "fnVaidateCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 초기화
        		this.ccfNO_CONT.form.fnCodeFindClear();
        	}
        }

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


        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(0, "CD_TYPE", "H08");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(1, "CD_TYPE", "H07");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_SELECT=combo0 dsID_DAM=combo1";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg, strArg)
        {
        	if(svcID == "combo")
        	{
        		//전체 추가.
        		this.dsTY_SELECT.insertRow(0);
        		this.dsTY_SELECT.setColumn(0, "CD_CODE", "");
        		this.dsTY_SELECT.setColumn(0, "DS_CODE", "전체");

        		//전체 추가.
        		this.dsID_DAM.insertRow(0);
        		this.dsID_DAM.setColumn(0, "CD_CODE", "");
        		this.dsID_DAM.setColumn(0, "DS_CODE", "전체");

        		this.fnSelectID_DAM();
        	}
        	else if(svcID == "select_dam")
        	{
        		if(this.dsDAM_CODE.rowcount > 0)
        		{
        			var dam = this.dsDAM_CODE.getColumn(0, "DAM_CODE");
        			this.dsSearch.setColumn(0, "ID_DAM", dam);
        		}
        	}
        }


        this.fnSelectID_DAM = function()
        {
        	this.dsDAM = new Dataset();
        	this.dsDAM.addColumn("ID_USER", "string");

        	this.dsDAM.addRow();
        	this.dsDAM.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select_dam";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_dam=dsDAM";
        	var outData     = "dsDAM_CODE=select_dam0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        // 아래부터는 확장버튼 이벤트.

        this.fnDetail = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	var nRow = this.dsList.rowposition;
        	param.CD_SITE = this.dsList.getColumn(nRow, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(nRow, "DS_SITE");
        	param.NO_CONT = this.dsList.getColumn(nRow, "NO_CONT");
        	param.DS_SUBCON = this.dsList.getColumn(nRow, "DS_SUBCON");
        	//param.ID_DAM = this.dsSearch.getColumn(0, "ID_DAM");
        	//param.DS_DAM = this.ccfID_DAM.form.DSTextBox.text;
        	//param.TY_SELECT = this.dsSearch.getColumn(0, "TY_SELECT");

        	/*
        	var nextPage = "";

        	// 10의 DS_CODE 값은 입찰.
        	if(this.dsSearch.getColumn(0, "TY_SELECT") == 10)
        	{
        		nextPage = "DMA_PO_DETAIL_BID";
        	}
        	else
        	{
        		nextPage = "DMA_PO_DETAIL_ETC";
        	}
        	*/

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	//this.gfnFormOpen(this.FormInfo.CD_MODULE, nextPage, "", param);
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMA_PO_DETAIL_VIEW", "fnDetail_callback", param,1250, 700);
        }

        this.fnDetail_callback = function(strID, val)
        {
        	this.FormBtns.Select.click();
        }


        this.fnReq = function(obj,e) {
        	if(this.dsList.rowposition < 0)
        	{
        		this.gfnAlert("데이터를 선택해주세요.");
        		return;
        	}

        	this.gfnConfirm("승인요청을 진행하시겠습니까?", "fnReq_callback", "Req");
        }

        this.fnReqCancel = function(obj,e) {
        	if(this.dsList.rowposition < 0)
        	{
        		this.gfnAlert("데이터를 선택해주세요.");
        		return;
        	}

        	this.gfnConfirm("승인요청취소를 진행하시겠습니까?", "fnReq_callback", "ReqCancel");
        }

        this.fnReq_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		var inData = "execute=dsExecute";

        		if(strId == "Req")
        		{
        			inData = "req_ok=dsReq";
        		}
        		else
        		{
        			inData = "req_cancel=dsReq";
        		}

        		this.dsReq.clearData();

        		var nrow = this.dsReq.addRow();

        		this.dsReq.setColumn(nrow, "NO_CONT", this.dsList.getColumn(this.dsList.rowposition, "NO_CONT"));
        		this.dsReq.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsReq.rowcount == 0) return;

        		var strSvcId    = "req";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var outData     = "";
        		var strArg      = "gubun="+ strId;
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        this.fnApprove = function(obj,e) {
        	//if(this.dsList.rowposition < 0)
        	if(this.dsList.findRow("CHK", 1) < 0)
        	{
        		this.gfnAlert("데이터를 선택해주세요.");
        		return;
        	}

        	var param = {};
        	var nRow = this.dsList.rowposition;
        	param.NO_CONT = this.dsList.getColumn(nRow, "NO_CONT");
        	param.DT_DELIVERY = this.dsList.getColumn(nRow, "DT_DELIVERY");
        	param.YN_E_CONT = this.dsList.getColumn(nRow, "YN_E_CONT");
        	param.CD_DELIVERY = this.dsList.getColumn(nRow, "CD_DELIVERY");
        	param.CD_INCREASE = this.dsList.getColumn(nRow, "CD_INCREASE");
        	param.RM_BIGO = this.dsList.getColumn(nRow, "RM_BIGO");

        	this.gfnFormOpen("DMA", "DMA_PO_DETAIL_OK", "fnApprove_callback", param, '500', '700');

        	//this.gfnConfirm("구매승인을 진행하시겠습니까?", "fnApprove_callback");
        }



        this.fnApprove_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsAppr.clearData();


        		for(var i = 0 ; i < this.dsList.rowcount; i++)
        		{

        			if(this.dsList.getColumn(i, "CHK") == 1 && !this.gfnIsNull(this.dsList.getColumn(i, "CD_SITE")))
        			{
        				var nrow = this.dsAppr.addRow();
        				this.dsAppr.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsAppr.setColumn(nrow, "NO_BID", this.dsList.getColumn(i, "NO_BID"));
        				this.dsAppr.setColumn(nrow, "NO_PO", this.dsList.getColumn(i, "NO_CONT"));
        			}
        		}

        		if (this.dsAppr.rowcount == 0) return;

        		var strSvcId    = "appr";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "approve_ok=dsAppr";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc);   // 통신방법 정의 [생략가능]
        	}
        }

        this.fnApproveCancel = function(obj,e) {
        	//if(this.dsList.rowposition < 0)

        	if(this.dsList.findRow("CHK", 1) < 0)
        	{
        		this.gfnAlert("데이터를 선택해주세요.");
        		return;
        	}

        	this.gfnConfirm("구매승인취소를 진행하시겠습니까?", "fnApproveCancel_callback");
        }

        this.fnApproveCancel_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsApprCancel.clearData();

        		for(var i = 0 ; i < this.dsList.rowcount; i++)
        		{
        			if(this.dsList.getColumn(i, "CHK") == 1 && !this.gfnIsNull(this.dsList.getColumn(i, "CD_SITE")))
        			{
        				var nrow = this.dsApprCancel.addRow();

        				this.dsApprCancel.setColumn(nrow, "NO_CONT", this.dsList.getColumn(i, "NO_CONT"));
        				this.dsApprCancel.setColumn(nrow, "SN_SEQ", "001");
        				this.dsApprCancel.setColumn(nrow, "DS_CANCELREASON", "");
        			}
        		}
        		if (this.dsApprCancel.rowcount == 0) return;

        		var strSvcId    = "appr_cancel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "approve_cancel=dsApprCancel";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc);   // 통신방법 정의 [생략가능]
        	}
        }

        // 계약(PO)조회 버튼 클릭 이벤트
        this.fnContract = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	var nRow = this.dsList.rowposition;
        	param.CD_SITE = this.dsList.getColumn(nRow, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(nRow, "DS_SITE");
        	param.NO_CONT = this.dsList.getColumn(nRow, "NO_CONT");
        	param.DS_SUBCON = this.dsList.getColumn(nRow, "DS_SUBCON");

        	this.gfnFormOpen("DCC", "DCC_CONTRACT", "", param, 950, 550);
        }

         // 계약(PO)조회 버튼 클릭 이벤트
         this.fnContract = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nRow = this.dsList.rowposition;
        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(nRow, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(nRow, "DS_SITE");
        	param.NO_CONT = this.dsList.getColumn(nRow, "NO_CONT");
        	param.DS_SUBCON = this.dsList.getColumn(nRow, "DS_SUBCON");
        	param.SN_SEQ = "001";
        	param.TY_CONT = "당초";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_CONTRACT", "", param, 950, 750);
        }


        this.fnAPP = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	var nRow = this.dsList.rowposition;

        	param.PARAM01 = this.dsList.getColumn(nRow,"CD_SITE");
        	param.PARAM02 = this.dsList.getColumn(nRow, "NO_CONT");
        	param.ID_AP = this.dsList.getColumn(nRow, "NO_ELAPDOC");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMA_PO_DETAIL_APPROVAL", "fnAprvDialogCallback", param, 1210, 610);

        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };

        this.fnPoContAgree = function(obj,e) {
        	if(this.dsList.rowposition < 0)
        	{
        		this.gfnAlert("데이터를 선택해주세요.");
        		return;
        	}

        	this.gfnConfirm("발주대체를 진행하시겠습니까?", "fnPoContAgree_callback");
        }

         this.fnPoContAgree_callback = function(svcID, value) {
        	if(value){
        		this.dsContagree = new Dataset();
        		this.dsContagree.addColumn("CD_SITE", "string");
        		this.dsContagree.addColumn("NO_BID", "string");
        		this.dsContagree.addColumn("NO_PO", "string");

        		this.dsContagree.clearData();
        		var nrow = this.dsContagree.addRow();
        		var row = this.dsList.rowposition;
        		this.dsContagree.setColumn(nrow, "CD_SITE", this.dsList.getColumn(row, "CD_SITE"));
        		this.dsContagree.setColumn(nrow, "NO_BID", this.dsList.getColumn(row, "NO_BID"));
        		this.dsContagree.setColumn(nrow, "NO_PO", this.dsList.getColumn(row, "NO_CONT"));

        		if (this.dsContagree.rowcount == 0) return;

        		var strSvcId    = "contagree";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "contagree=dsContagree";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc);   // 통신방법 정의 [생략가능]
        	}
        };


        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btnReq, this.dsList);
        	this.gfnBtnCheck(this.btnReqCancel, this.dsList);
        	this.gfnBtnCheck(this.btnApprove, this.dsList);
        	this.gfnBtnCheck(this.btnApproveCancel, this.dsList);
        	this.gfnBtnCheck(this.btnContract, this.dsList);
        	this.gfnBtnCheck(this.btnAPP, this.dsList);
        	this.gfnBtnCheck(this.btnPoContAgree, this.dsList);

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_CONT")))
        	{
        		this.btnDetail.set_enable(false);
        	}
        	else
        	{
        		// 현재 컬럼이 비어있어 다시 활성화 되지 않으므로 임시 조치.
        		this.btnDetail.set_enable(true);
        		this.gfnBtnCheck(this.btnDetail, this.dsList);
        	}
        }

        this.dsList_cancolumnchange = function(obj,e)
        {
         	var cnt = this.dsList.rowcount;
        	this.dsList.set_enableevent(false);

        	for(var i = 0; i < cnt;i++)
        	{
        		if(i == e.row && e.newvalue == 1)
        		{
        			this.dsList.setColumn(i, "CHK", 1);
        		}else{
        			this.dsList.setColumn(i, "CHK", 0);
        		}
        	}

        	this.dsList.set_enableevent(true);
        };

        // 반려
        this.fnCancel = function(obj,e)
        {
        	this.dsCancel.clearData();

        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == 1)
        		{
        			var nrow = this.dsCancel.addRow();
        			//var row = this.dsList.rowposition;
        			this.dsCancel.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        			this.dsCancel.setColumn(nrow, "NO_CONT", this.dsList.getColumn(i, "NO_CONT"));
        			this.dsCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsCancel.rowcount == 0) return;

        	var strSvcId    = "cancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cancel=dsCancel";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DMA_PO_LIST_ETC.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
