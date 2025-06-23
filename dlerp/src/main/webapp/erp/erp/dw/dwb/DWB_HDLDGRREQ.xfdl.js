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
            this.set_titletext("기성청구요청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWBPR_HDLDGRREQ_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWBPR_HDLDGRREQ_SAVE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DWBPR_HDLDGRREQ_EXECUTE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DWBPR_HDGISUNGMONTH_MAX_SELECT</Col></Row><Row><Col id=\"TARGET\">execute_send</Col><Col id=\"SP\">DWBPR_HDLDGRREQ_EXECUTE_SEND</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DGR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTMETHOD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"DS_SITE\"/><Col id=\"YM_WORK\"/><Col id=\"NO_DGR\"/></Row></Rows>");
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

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboNO_DGR","ccfCD_SITE:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsNO_DGR");
            obj.set_datacolumn("DS_DGR");
            obj.set_codecolumn("NO_DGR");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","cboNO_DGR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기성년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("[청구요청건]만 협력업체가 기성청구 가능하며 현장에서 기성작업 가능");
            obj.set_color("red");
            obj.set_cssclass("sta_WF_SchLabel");
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

            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboNO_DGR","value","dsSearch","NO_DGR");
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
        this.registerScript("DWB_HDLDGRREQ.xfdl", function() {
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


        	// 타화면의 데이터가 있을시.
        	this.fnSetLoadParam();

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
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnHdLdgrReq = this.gfnFormButtonAdd("btnHdLdgrReq", "fnHdLdgrReq");
        	this.btnHdLdgrReqCnc = this.gfnFormButtonAdd("btnHdLdgrReqCnc", "fnHdLdgrReqCnc");
        	this.btnHdLdgrReReq = this.gfnFormButtonAdd("btnHdLdgrReReq", "fnHdLdgrReReq");
        	this.btnHdLdgrReqB2b = this.gfnFormButtonAdd("btnHdLdgrReqB2b", "fnHdLdgrReqB2b");
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
        	//this.ccfNO_HADOCONT.CodeFindName = "DWX_CFHADO_01";
        	//this.ccfNO_HADOCONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_HDLDGRREQ");
        	this.dxGrid.setEventHandler("onheadclick", 	 this.fnGrid_onheadclick, 	 this);
        	// row 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	var colChk = this.dxGrid.getBindCellIndex("body", "CHK");
        // 	var displaytype = this.dxGrid.getCellProperty("body", colChk, "displaytype");
        // 	displaytype = "expr:" + displaytype.replace("expr:","").replace("'checkboxcontrol'", "YN_CHKVIEW=='Y'?'checkboxcontrol':'none'");
        // 	this.dxGrid.setCellProperty("body", colChk, "displaytype", displaytype);
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
        	this.dsSelect.addColumn("DS_CONTMETHOD", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("NO_DGR", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("YN_B2B", "string");
        	this.dsSave.addColumn("DT_REQ", "string");
        	this.dsSave.addColumn("DT_DEADLINE", "string");
        	this.dsSave.addColumn("DT_KONGSA_FR", "string");
        	this.dsSave.addColumn("DT_KONGSA_TO", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_WRK", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("YM_WORK", "string");
        	this.dsExecute.addColumn("NO_DGR", "string");
        	this.dsExecute.addColumn("DS_CONTMETHOD", "string");
        	this.dsExecute.addColumn("NO_HADOCONT", "string");
        	this.dsExecute.addColumn("CD_VENDOR", "string");

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
        	this.dsSelect.setColumn(0, "DS_CONTMETHOD", this.dsSearch.getColumn(0, "DS_CONTMETHOD"));

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
        						callBackFnc);   // 통신방법 정의 [생략가능]

        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current
        	/*
        	var today = this.gfnGetDate().substr(0,6);
        	var ACNT =  this.gfnGetLastDate(today);
        	var EXESCH = this.gfnAddDate(this.gfnGetLastDate(today),15);

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "YN_EDIT", "Y");
        	this.dsList.setColumn(nrow, "DT_ACNT", this.gfnGetLastDate(today));
        	this.dsList.setColumn(nrow, "DT_EXESCH", this.gfnAddDate(this.gfnGetLastDate(today),15));
        	this.dsList.setColumn(nrow, "YN_DDCT", "Y");
        	this.dsList.set_enableevent(true);
        	*/
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
        				this.dsSave.setColumn(nrow, "TY_WRK", "UD");
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        				this.dsSave.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "YN_B2B", this.dsList.getColumn(i, "YN_B2B"));
        				this.dsSave.setColumn(nrow, "DT_REQ", this.dsList.getColumn(i, "DT_REQ"));
        				this.dsSave.setColumn(nrow, "DT_DEADLINE", this.dsList.getColumn(i, "DT_DEADLINE"));
        				this.dsSave.setColumn(nrow, "DT_KONGSA_FR", this.dsList.getColumn(i, "DT_KONGSA_FROM"));
        				this.dsSave.setColumn(nrow, "DT_KONGSA_TO", this.dsList.getColumn(i, "DT_KONGSA_TO"));
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
        						callBackFnc);   // 통신방법 정의 [생략가능]
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}else if(this.gfnIsNull(this.dsSearch.getColumn(0,"YM_WORK"))){
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.form.TextBox.setFocus();
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
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if(errorCode != 0)
        	{
        		this.gfnAlert(errorMsg);

        		return;
        	}

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		//this.btnSlipIssue.set_enable(true);
        		//this.btnSlipSearch.set_enable(true);
        		//this.btnSlipCancel.set_enable(true);
        	}
        	else if(svcID == "save") {
        		this.FormBtns.Select.click();
        	}
        	else if(svcID == "execute") {
        		var json = this.gfnArgsToJson(strArg);
        		strArg = json.gubun;

        		var msg = "";
        		switch(strArg)
        		{
        			case "REQ" :
        			case "REREQ" :
        				//msg += "기성청구요청 ";
        				this.fnExecuteSend(strArg);
        				break;
        			case "REQCNC" :
        				msg += "청구요청취소 ";
        				break;
        			//case "REREQ" :
        				//msg += "기성재청구요청 ";
        			//	break;
        		}

        		if(strArg == "REQCNC")
        		{
        			msg += "정상 처리되었습니다.";

        			this.gfnAlert(msg);

        			this.FormBtns.Select.click();
        		}
        		else if(strArg == "REQB2B")
        		{
        			var url = "";
        			var param = "";

        			if(this.dsSearch.getColumn(0, "DS_CONTMETHOD") == "MM"){
        				url = "/buyer/earned/receiving/earned_mm_receiving_result_list_buyer.do";
        				param += "&stdDate=" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);
        				param += "&siteCd=" + this.dsSearch.getColumn(0, "CD_SITE");
        			}else if(this.dsSearch.getColumn(0, "DS_CONTMETHOD") == "SU"){
        				url = "/buyer/earned/earned_claim_request_notice_buyer_pop.do";
        				param += "&IN_LGORT=" + this.dsSearch.getColumn(0, "CD_SITE");
        				param += "&IN_MONTH=" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);
        			}

        			this.gfnOpenEPS(url, param);
        		}

        	}
        	else if(svcID == "execute_send") {

        		this.fnCallback_callback = function()
        		{
        			this.FormBtns.Select.click();
        		}

        		var msg = "";
        		switch(strArg)
        		{
        			case "REQ" : msg += "기성청구요청 ";
        				break;
        			case "REREQ" : msg += "기성재청구요청 ";
        				break;
        		}

        		msg += "정상 처리되었습니다.";

        		this.gfnAlert(msg, "fnCallback_callback");
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        // 그리드 헤드 클릭 이벤트 재정의
        this.fnGrid_onheadclick = function(objGrid, e) {
        	var cell = this._gfnGridGetBodyCellIndex(objGrid, e.cell);
        	var colnm = this.gfnGridGetBindColumnNameByIndex(objGrid, cell);
        	// 체크박스 클릭한 경우.
        	if(colnm == "CHK") {
        		var sVal = objGrid.getCellProperty("head", e.cell, "text");
        		var sChk;
        		if (sVal == "1") {
        			objGrid.setCellProperty("head", e.cell, "text", "0");
        			sChk="0";
        		} else {
        			objGrid.setCellProperty("head", e.cell, "text", "1");
        			sChk="1";
        		}

        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			if(this.dsList.getColumn(i, "YN_CHKVIEW") == "Y")
        			{
        				this.dsList.setColumn(i, "CHK", sChk);
        			}
        		}
        	}
        	// 체크박스를 클릭한게 아니라면 기존의 공통의 그리드 헤드 클릭 이벤트를 탄다.
        	else {
        		this.gfnGrid_onheadclick(objGrid, e);
        	}
        };


        this.fnGrid_EnterCell = function(obj, row, cell){
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        	switch(colnm){
        		case "DT_KONGSA_FROM" :
        			if(this.FormInfo.GR_SEARCH <= 3){
        				return true;
        			}else{
        				return false;
        			}
        		case "DT_KONGSA_TO" :
        			if(this.FormInfo.GR_SEARCH <= 3){
        				return true;
        			}else{
        				return false;
        			}
        		break;
        	}

        // 	if(colnm == "CHK"){
        // 		if(this.dsList.getColumn(row, "YN_B2B") != "Y"){
        // 			return false;
        // 		}
        // 	}
        //
        // 	// 전자기성을 체크해서 CHK에만 체크하고 다시 해제하려고 할때.
        // 	else if(colnm == "YN_B2B") {
        // 		if(this.dsList.getColumn(row, "CHK") == "Y") {
        // 			return false;
        // 		}
        // 	}
        //	return false;
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		//this.btnSlipIssue.set_enable(false);
        		//this.btnSlipSearch.set_enable(false);
        		//this.btnSlipCancel.set_enable(false);

        		if(e.columnid == "CD_SITE" || e.columnid == "YM_WORK"){
        		   this.fnSetCombo();
        	    }
        	}
        };

        // 넘어오는 값 체크.
        this.fnSetLoadParam = function()
        {
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().DS_SITE) &&
        	   !this.gfnIsNull(this.getOwnerFrame().YM_WORK)) {

        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);	// 현장코드
        		this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);	// 실행번호
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);	// 기성년월
        		this.dsSearch.setColumn(0, "NO_DGR", this.getOwnerFrame().NO_DGR);				// 차수
        		if(this.gfnIsNull(this.getOwnerFrame().DS_CONTMETHOD)){
        			this.dsSearch.setColumn(0, "DS_CONTMETHOD", this.FormInfo.DS_PARAM);
        		}else{
        			this.dsSearch.setColumn(0, "DS_CONTMETHOD", this.getOwnerFrame().DS_CONTMETHOD);
        		}
        		this.FormBtns.Select.click();
        	}else
        	{
        		// 10일까지는 전월로 표시한다
        		var today = this.gfnGetDate();
        		var day = today.substr(6,2);
        		var ymWork = "";
        		if(day < 11){
        			ymWork = this.gfnAddMonth(today,-1).substr(0,6);
        		}else{
        			ymWork = today.substr(0,6);
        		}

        		//this.dsSearch.setColumn(0, "YM_WORK", today.substr(0,6));
        		this.dsSearch.setColumn(0, "YM_WORK", ymWork);
        		this.dsSearch.setColumn(0, "DS_CONTMETHOD", this.FormInfo.DS_PARAM);
        	}
        }

        this.fnGrid_CHK_Validate = function()
        {
        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == "Y")
        			return true;
        	}

        	return false;
        }

        // 아래부터는 확장 버튼.
        // 기성청구요청
        this.fnHdLdgrReq = function(obj,e) {
        	if(!this.fnGrid_CHK_Validate())
        	{
        		this.gfnAlert("기성청구요청할 대상이 없습니다.");
        		return;
        	}

        	var msg  //"현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			//+ "\n기성년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			= "업체청구상태가 [미청구]이며 [청구요청일]이 없는 건 만 \n[기성청구요청] 처리 됩니다."
        			+ "\n\n[기성청구요청] 하시겠습니까?";

        	this.gfnConfirm(msg, "fnHdLdgrReq_callback", "REQ");
        }
        // 청구요청취소
        this.fnHdLdgrReqCnc = function(obj,e) {
        	if(!this.fnGrid_CHK_Validate())
        	{
        		this.gfnAlert("기성청구요청할 대상이 없습니다.");
        		return;
        	}

        	var msg  //"현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			//+ "\n기성년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			= "업체청구상태가 [미청구, 청구중, 반려]인 건 만 \n[청구요청취소] 처리 됩니다."
        			+ "\n\n[청구요청취소] 하시겠습니까?";

        	this.gfnConfirm(msg, "fnHdLdgrReq_callback", "REQCNC");
        }

        //기성재청구요청
        this.fnHdLdgrReReq = function(obj,e) {
        	if(!this.fnGrid_CHK_Validate())
        	{
        		this.gfnAlert("기성청구요청할 대상이 없습니다.");
        		return;
        	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n기성년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n계약업체 : [" + this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT") + "/" + this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT")+ "]"
        			+ "\n\n기성재청구요청 하시겠습니까?";

        	this.gfnConfirm(msg, "fnHdLdgrReq_callback", "REREQ");
        }

        // 기성청구요청(전자조달)
        this.fnHdLdgrReqB2b = function(obj,e) {
        	if(!this.fnGrid_CHK_Validate())
        	{
        		this.gfnAlert("기성청구요청할 대상이 없습니다.");
        		return;
        	}

        	/*
        	// 자재와 화면을 공유하는 이유로 인하여 MM이 아닌 경우엔 해당 버튼 사용 안함.
        	if(this.dsSearch.getColumn(0, "DS_CONTMETHOD") != "MM")
        	{
        		return;
        	}
        	*/

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n기성년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n전자기성대상 중 미요청 계약건 기준으로 처리됩니다."
        			+ "\n\n기성청구요청 하시겠습니까?";

        	this.gfnConfirm(msg, "fnHdLdgrReq_callback", "REQB2B");
        }

        // 확장버튼의 callback 함수.
        this.fnHdLdgrReq_callback = function(strId, val) {
        	if(val == true)
        	{
        		this.dsExecute.clearData();

        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, "CHK") == "Y")
        			{
        				var nrow = this.dsExecute.addRow();

        				this.dsExecute.setColumn(nrow, "TY_WRK", strId);
        				this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsExecute.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        				this.dsExecute.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        				this.dsExecute.setColumn(nrow, "DS_CONTMETHOD", this.dsSearch.getColumn(0, "DS_CONTMETHOD"));
        				this.dsExecute.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsExecute.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        			}
        		}

        		if (this.dsExecute.rowcount == 0) return;

        		var strSvcId    = "execute";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "execute=dsExecute";
        		var outData     = "";
        		var strArg      = "gubun=" + strId;
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        }

        // 기성차수 콤보 셋팅
        this.fnSetCombo = function() {

        	this.dsCombo.clearData();

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCombo.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsCombo.setColumn(0, "DS_CONTMETHOD", this.FormInfo.DS_PARAM);

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
        		//this.divSearch.form.cboNO_DGR.set_index(0);

        		if(this.gfnIsNull(this.getOwnerFrame().NO_DGR)){
        			this.divSearch.form.cboNO_DGR.set_index(0);
        		}
        	}
        };

        this.fnExecuteSend = function(strId)
        {
        	this.dsExecute.clearData();

        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, "CHK") == "Y")
        			{
        				var nrow = this.dsExecute.addRow();

        				this.dsExecute.setColumn(nrow, "TY_WRK", "SEND");
        				this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsExecute.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        				this.dsExecute.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        				this.dsExecute.setColumn(nrow, "DS_CONTMETHOD", this.dsSearch.getColumn(0, "DS_CONTMETHOD"));
        				this.dsExecute.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsExecute.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        			}
        		}

        		if (this.dsExecute.rowcount == 0) return;

        		var strSvcId    = "execute_send";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "execute_send=dsExecute";
        		var outData     = "";
        		var strArg      = strId;
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWB_HDLDGRREQ.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
