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
            this.set_titletext("전도금처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSBPR_JUNDO_SELECT</Col></Row><Row><Col id=\"TARGET\">slip_k</Col><Col id=\"SP\">DSBPR_AUTOSLIP_ISSUE_KOOKMIN_JUNDO</Col></Row><Row><Col id=\"TARGET\">slip_cancel_k</Col><Col id=\"SP\">DSBPR_AUTOSLIP_ISSUE_KOOKMIN_JUNDO_CANCEL</Col></Row><Row><Col id=\"TARGET\">slip_m</Col><Col id=\"SP\">DSBPR_AUTOSLIP_ISSUE_MEDICARE_JUNDO</Col></Row><Row><Col id=\"TARGET\">slip_cancel_m</Col><Col id=\"SP\">DSBPR_AUTOSLIP_ISSUE_MEDICARE_JUNDO_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_ERPKEY_JUNDO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SLIP_JUNDO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SLIP_JUNDO\" type=\"STRING\" size=\"256\"/><Column id=\"GJAHR\" type=\"STRING\" size=\"256\"/><Column id=\"BELNR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_ERPKEY_JUNDO\"/><Col id=\"NO_SLIP_JUNDO\"/><Col id=\"DT_SLIP_JUNDO\"/><Col id=\"GJAHR\"/><Col id=\"BELNR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/><Col id=\"TY_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("전도금 처리");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","0","40","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("전기일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG","0","staDS_SITE:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_SITE:-1","40",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staDS_SILHENG:-1","staBg1:-1",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_SLIP_JUNDO","104","74",null,"20","270",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_maxlength("6");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","99","98",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG00","0","98","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("SAP전표번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_SLIP_JUNDO","104","45","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtBELNR","104","103",null,"20","270",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_maxlength("6");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divData.form.edtNO_SLIP_JUNDO","value","dsData","NO_SLIP_JUNDO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.tclDT_SLIP_JUNDO","value","dsData","DT_SLIP_JUNDO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtBELNR","value","dsData","BELNR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DSB_JUNDO.xfdl", function() {
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

        	this.btnSlip.set_enable(false); //전표발행
        	this.btnSlipCancel.set_enable(false); //전표발행취소
        	this.btnShowSlip.set_enable(false); // 전표조회
        	this.btnSapslip.set_enable(false); // 전표발행(SAP)
        	this.btnSapslipCncl.set_enable(false); //전표취소(SAP)

        	// 이전 화면에서 데이터 받기.
        	this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        	this.dsSearch.setColumn(0, "TY_GUBUN", this.getOwnerFrame().TY_GUBUN);

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSlip = this.gfnFormButtonAdd("btnSlip", "fnSlip");
        	this.btnSlipCancel = this.gfnFormButtonAdd("btnSlipCancel", "fnSlipCancel");
        	this.btnShowSlip = this.gfnFormButtonAdd("btnShowSlip", "fnShowSlip");
        	this.btnSapslip= this.gfnFormButtonAdd("btnSapslip", "fnSapslip"); //전표발행(SAP)
        	this.btnSapslipCncl= this.gfnFormButtonAdd("btnSapslipCncl", "fnSapslipCncl"); //전표취소(SAP)
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.dxGrid = this.divData.form.objGrid;
        	this.tclDT_SLIP_JUNDO = this.divData.form.tclDT_SLIP_JUNDO;
        	this.edtNO_SLIP_JUNDO = this.divData.form.edtNO_SLIP_JUNDO;
        	this.edtBELNR = this.divData.form.edtBELNR;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");

        	this.dsSlip = new Dataset();
        	this.dsSlip.addColumn("CD_CORP", "string");
        	this.dsSlip.addColumn("CD_SITE", "string");
        	this.dsSlip.addColumn("YM_WORK", "string");
        	this.dsSlip.addColumn("CD_DEPT_BH", "string");
        	this.dsSlip.addColumn("DT_ACCOUNT", "string");
        	this.dsSlip.addColumn("DT_REQUEST", "string");
        	this.dsSlip.addColumn("NO_ERPKEY", "string");
        	this.dsSlip.addColumn("ID_USER", "string");

        	this.dsSlipCancel = new Dataset();
        	this.dsSlipCancel.addColumn("NO_ERPKEY", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
          /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsData=select0";
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
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	/*
        	if (this.gfnIsNull(this.dsData.getColumn(0,"DS_NAME"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtDS_NAME.setFocus();
        		}
        		this.gfnAlert("성명은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if(this.gfnIsNull(this.dsData.getColumn(0,"NO_JUMIN1"))){
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtNO_JUMIN1.setFocus();
        		}
        		this.gfnAlert("주민번호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if(this.gfnIsNull(this.dsData.getColumn(0,"NO_JUMIN2"))){
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtNO_JUMIN2.setFocus();
        		}
        		this.gfnAlert("주민번호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        		if(errorCode == 0)
        		{
        			if(this.dsData.rowcount < 1) return;

        			if(!this.gfnIsNull(this.dsData.getColumn(0, "DT_SLIP_JUNDO"))){
        				this.tclDT_SLIP_JUNDO.set_enable(false);
        			}else{
        				this.tclDT_SLIP_JUNDO.set_enable(true);
        				this.dsData.setColumn(0, "DT_SLIP_JUNDO",  this.gfnGetDate());
        			}

        			this.fnSetBtnEnable();

        			/*
        			var empYn = "N";
        			if(this.dsList.rowcount > 0){
        				empYn = "Y";
        			}

        			// 부모창 변수 값 셋팅
        			this.getParentContext().opener.popupVal = {dsName:this.dsData.getColumn(0,"DS_NAME"), noId1:this.dsData.getColumn(0,"NO_JUMIN1"), noId2:this.dsData.getColumn(0,"NO_JUMIN2")};

        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(empYn);
        			*/
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "slip") {
        		if (errorCode == 0) {
        			this.fnSlipCallback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("전표발행이 정상처리되었습니다.", "fnSlipCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "slip_cancel") {
        		if (errorCode == 0) {
        			this.fnSlipCallback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("전표발행취소가 정상처리되었습니다.", "fnSlipCallback");
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

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSlip = function(obj,e) {
        	this.gfnConfirm("전표발행을 진행하시겠습니까?", "fnSlip_callback");
        }

        this.fnSlip_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsSlip.clearData();
        		var nrow = this.dsSlip.addRow();

        		this.dsSlip.setColumn(nrow, "CD_CORP", "01");
        		this.dsSlip.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsSlip.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        		this.dsSlip.setColumn(nrow, "CD_DEPT_BH", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsSlip.setColumn(nrow, "DT_ACCOUNT", this.dsData.getColumn(0, "DT_SLIP_JUNDO"));
        		this.dsSlip.setColumn(nrow, "DT_REQUEST", "");
        		this.dsSlip.setColumn(nrow, "NO_ERPKEY", this.dsData.getColumn(0, "NO_ERPKEY_JUNDO"));
        		this.dsSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsSlip.rowcount == 0) return;

        		var strSvcId    = "slip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		if(this.dsSearch.getColumn(0, "TY_GUBUN") == "K"){
        			var inData      = "slip_k=dsSlip";
        		}else{
        			var inData      = "slip_m=dsSlip";
        		}
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
        }

        this.fnSlipCancel = function(obj,e) {

        	this.gfnConfirm("전표발행취소를 진행하시겠습니까?", "fnSlipCancel_callback");
        }

        this.fnSlipCancel_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsSlipCancel.clearData();
        		var nrow = this.dsSlipCancel.addRow();

        		this.dsSlipCancel.setColumn(nrow, "NO_ERPKEY", this.dsData.getColumn(0, "NO_ERPKEY_JUNDO"));

        		if (this.dsSlipCancel.rowcount == 0) return;

        		var strSvcId    = "slip_cancel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		if(this.dsSearch.getColumn(0, "TY_GUBUN") == "K"){
        			var inData      = "slip_cancel_k=dsSlipCancel";
        		}else{
        			var inData      = "slip_cancel_m=dsSlipCancel";
        		}
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

        }


        this.fnSapslip = function(obj,e) {
        	this.gfnConfirm("전표발행(SAP)을 진행하시겠습니까?", "fnSapslip_callback");
        }

        this.fnSapslip_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		var no_erpkey = this.dsData.getColumn(0, "NO_ERPKEY_JUNDO");
        		var cd_trade = this.dsData.getColumn(0, "NO_SLIP_JUNDO");
        		var id_user = this.AuthClient.ID_USER;
        		this.gfnSlipIssue(no_erpkey, cd_trade, id_user, "fnSapslipOk_callback");
        	}
        }

        // gfnSlipIssue 전표발행 성공시 실행할 callback
        this.fnSapslipOk_callback = function() {
        	this.FormBtns.Select.click();
        	/*
        	this.fnSlipMsgCallback = function()
        	{
        		this.FormBtns.Select.click();
        	}
        	this.gfnAlert("전표발행(SAP)이 정상처리되었습니다.", "fnSlipMsgCallback");
        	*/
        }


        this.fnSapslipCncl = function(obj,e) {

        	this.gfnConfirm("전표발행취소(SAP)를 진행하시겠습니까?", "fnSapslipCncl_callback");
        }

        this.fnSapslipCncl_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		var no_erpkey = this.dsData.getColumn(0, "NO_ERPKEY_JUNDO");
        		var cd_trade = this.dsData.getColumn(0, "NO_SLIP_JUNDO");
        		var id_user = this.AuthClient.ID_USER;
        		var sap_slip = this.dsData.getColumn(0, "BELNR");		// SAP 전표번호
        		var sap_slip_year = this.dsData.getColumn(0, "GJAHR");	// SAP 전표의 회계연도
        		var sap_comp = "HD00";

        		this.gfnSlipCancel(no_erpkey, cd_trade, id_user, sap_comp, sap_slip, sap_slip_year, "fnSlipCancelOk_callback");
        	}

        }


        // gfnSlipCancel 전표취소 성공시 실행할 callback
        this.fnSlipCancelOk_callback = function() {
        	this.FormBtns.Select.click();
        	/*
        	this.fnSlipMsgCallback = function()
        	{
        		this.FormBtns.Select.click();
        	}
        	this.gfnAlert("전표발행취소(SAP)가 정상처리되었습니다.", "fnSlipMsgCallback");
        	*/
        }

        // 전표 조회 버튼
        this.fnShowSlip = function(obj,e) {
        	var param = {};
        	param.CD_TRADE = this.dsData.getColumn(0, "NO_SLIP_JUNDO");

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        }


        this.fnSetBtnEnable = function() {
        	this.btnSlip.set_enable(false); //전표발행
        	this.btnSlipCancel.set_enable(false); //전표발행취소
        	this.btnShowSlip.set_enable(false); //전표조회
        	this.btnSapslip.set_enable(false); // 전표발행(SAP)
        	this.btnSapslipCncl.set_enable(false); //전표취소(SAP)

        	var dt_Slip = this.dsData.getColumn(0, "DT_SLIP_JUNDO"); //전기일자
        	var no_Slip = this.dsData.getColumn(0, "NO_SLIP_JUNDO"); //현장발생전표
        	var no_BELNR = this.dsData.getColumn(0, "BELNR"); // SAP전표번호

        	if(this.gfnIsNull(no_Slip))
        	{
        		this.btnSlip.set_enable(true);
        	}else{
        		if(!this.gfnIsNull(no_BELNR)){
        			this.btnSlipCancel.set_enable(false);
        			this.btnSapslip.set_enable(false);
        		}else{
        			this.btnSlipCancel.set_enable(true);
        			this.btnSapslip.set_enable(true);
        		}

        		this.btnShowSlip.set_enable(true);
        	}

        	if(!this.gfnIsNull(no_BELNR))
        	{
        		this.btnSapslipCncl.set_enable(true);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staDS_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
        };
        this.loadIncludeScript("DSB_JUNDO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
