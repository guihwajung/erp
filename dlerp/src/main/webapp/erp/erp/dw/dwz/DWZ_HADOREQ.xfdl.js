(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWZ_HADOREQ");
            this.set_titletext("변경발주의뢰");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWZPR_HADOREQ_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWZPR_HADOREQ_SAVE</Col></Row><Row><Col id=\"TARGET\">confirm</Col><Col id=\"SP\">DCCPR_REQCHANGE_CALLBACK</Col></Row><Row><Col id=\"TARGET\">confirmGM</Col><Col id=\"SP\">DWZPR_HADOREQ_UPDATE</Col></Row></Rows>");
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
        this.registerScript("DWZ_HADOREQ.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWZ_HADOREQ_onload = function(obj,e)
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
        	this.btn2 = this.gfnFormButtonAdd("btnOrderPlan", "fnOrderPlan");
        	this.btn3 = this.gfnFormButtonAdd("btnHadoStatus", "fnHadoStatus");
        	this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP");
        	this.btnAPP.set_enable(false);	// 품의서 버튼 로딩시 비활성화
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
        	this.ccfCD_SYSTEM.CodeFindName = "DZX_CFSITE";
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWZ_HADOREQ");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_MODULE", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("DS_HADOCONT", "string");
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
        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_MODULE", this.FormInfo.DS_PARAM);


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
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsSave.setColumn(nrow, "DS_HADOCONT", this.dsList.getColumn(i, "DS_HADOCONT"));
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
        				this.dsSave.setColumn(nrow, "DS_CONTMETHOD", this.dsList.getColumn(i, "TY_CONTH"));
        				this.dsSave.setColumn(nrow, "DT_BAL", this.dsList.getColumn(i, "DT_BAL"));
        				this.dsSave.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));
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
        	param.NO_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT");
        	param.DS_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_SILHENGTOHADO", "", param);

        }

        // 외주발주의뢰 버튼 클릭 이벤트
        this.fnOrderPlan = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("외주계약건을 선택하세요.");
        		return false;
        	}

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SYSTEM.form.DSTextBox.text;
        	param.NO_BID = this.dsList.getColumn(this.dsList.rowposition, "NO_BID");
        	param.DS_SUBCON = this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT");
        	param.DS_PARAM = this.FormInfo.DS_PARAM;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_REQCHGCONTRACT", "fnOrderPlan_Callback", param, 1030, 640);

        /*
        	if(this.dsList.getColumn(this.dsList.rowposition, "DS_STATUS") != "변경계약" && this.dsList.getColumn(this.dsList.rowposition, "DS_STATUS") != "완료")
        	{
        		if((this.dsList.getColumn(this.dsList.rowposition, "TY_CONTH") == "40" || this.dsList.getColumn(this.dsList.rowposition, "TY_CONTH") == "50") )
        		{
        			this.gfnFormOpen("DCB", "DCB_ORDERPLANSR_SITE_DM", "", param, 1100, 400);
        		}
        		else
        		{
        			// 화면 오픈.
        			// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        			// 타 모듈 화면 호출시 지정할것.
        			this.gfnFormOpen("DCB", "DCB_ORDERPLANSR_SITE", "", param);
        		}
        	}
        	else
        	{
        		this.gfnFormOpen("DCC", "DCC_REQCHGCONTRACT", "", param);
        	}
        */

        }

        this.fnOrderPlan_Callback = function(svcID, value) {
        	// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        	this.FormBtns.Select.click();
        };

        // 계약이력조회 버튼 클릭 이벤트
        this.fnHadoStatus = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("외주계약건을 선택하세요.");
        		return false;
        	}

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfCD_SYSTEM.form.DSTextBox.text;
        	param.NO_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT");
        	param.DS_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen("DWZ", "DWZ_HADOSTATUS", "", param);


        }

        this.fnAPP = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("외주계약건을 선택하세요.");
        		return false;
        	}

        	var param = {};
        	param.V1 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V2 = this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT");
        	param.V3 = this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ");
        	param.V4 = "";
        	param.ID_AP = this.dsList.getColumn(this.dsList.rowposition, "NO_ELAPDOC");	// 전자결재문서번호
        	param.DS_ETITLE = this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT");	// 계약명

        	this.gfnFormOpen("DCC", "DCC_REQCHANGE_APP", "fnAprvDialogCallback", param, 1200, 700);

        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	//if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	//}
        };



        /*
        // row 변경 선택시 발생 이벤트
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
           else if(this.dsList.getColumn(this.dsList.rowposition, "TY_CONTH") == "10")   // 외주
           {   // 외주의 변경계약건이면 품의서 버튼 활성화
              if(this.dsList.getColumn(this.dsList.rowposition, "DS_STATUS") == "변경계약")
              {
                 this.btnAPP.set_enable(true);
              }
              else
              {
                 this.btnAPP.set_enable(false);
              }
              // 해당 row의 컬럼값을 외주발주의뢰 버튼 텍스트로 변경한다
        //       var btnOrderplan = this.dsList.getColumn(this.dsList.rowposition, "BTN_ORDERPLAN");
        //       this.btn2.set_text(btnOrderplan);

              if(this.dsList.getColumn(this.dsList.rowposition, "DS_STATUS") == "변경계약" || this.dsList.getColumn(this.dsList.rowposition, "DS_STATUS") == "계약요청")
              {
                 this.btn2.set_text("변경발주의뢰");
              }
              else
              {
                 this.btn2.set_text("외주발주의뢰");
              }
           }

        //    else
        //    {
        //
        //    }
           //this.btn2.set_fittocontents("width");
           this.btn2.parent.fnSetBtn();
           //this.btn2.parent.parent;
        };
        */

        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btn1, this.dsList);
        	this.gfnBtnCheck(this.btn2, this.dsList);
        	this.gfnBtnCheck(this.btnAPP, this.dsList);
        	this.gfnBtnCheck(this.btn3, this.dsList);

        // 	if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_ELAPPRGS"))) {
        // 		if(this.dsList.getColumn(this.dsList.rowposition, "CD_ELAPPRGS") == "03") {
        // 			this.btnConfirm.set_enable(false); //21.10.13 확정버튼(결재 skip)
        // 			this.btnConfirmCancel.set_enable(true); //21.10.15 확정취소버튼(결재 skip)
        // 		} else {
        // 			this.btnConfirm.set_enable(true); //21.10.13 확정버튼(결재 skip)
        // 			this.btnConfirmCancel.set_enable(false); //21.10.15 확정취소버튼(결재 skip)
        // 		}
        // 	} else {
        // 		this.btnConfirm.set_enable(true); //21.10.13 확정버튼(결재 skip) //결재가 없으면 undefined 였음
        // 		this.btnConfirmCancel.set_enable(false); //21.10.15 확정취소버튼(결재 skip)
        // 	}

        	if(this.FormInfo.DS_PARAM == "SU") { //외주
        		//일단 전부 disable한 다음 상태 및 권한에 따라 enable 21.10.29 권한체크는 버튼 눌렀을때 하는걸로 변경
        		this.btnConfirmReq.set_enable(false); //승인요청
        		this.btnConfirmGS.set_enable(false); //공사승인
        		this.btnConfirmGM.set_enable(false); //공무승인
        		this.btnConfirm.set_enable(false); //소장승인
        		this.btnConfirmCancel.set_enable(false); //반려
        		this.btnRetrieve.set_enable(false); //회수

        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_ELAPPRGS"))) { //승인요청 이전
        			this.btnConfirmReq.set_enable(true); //승인요청
        		} else { //승인요청 이후
        			//(이미 승인요청 했으니 이후 프로세스에선 승인요청 부분은 전부 false)
        			if(this.dsList.getColumn(this.dsList.rowposition, "CD_ELAPPRGS") != "03") { //승인요청 진행중인 단계
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
        			} else if(this.dsList.getColumn(this.dsList.rowposition, "CD_ELAPPRGS") == "03") { //소장승인까지 난 상태 (all disable)
        				this.btnRetrieve.set_enable(true); //회수
        			}
        		}
        	} else { // DS_PARAM == "MM" 자재
        		this.btnConfirmReq.set_enable(false); //승인요청
        		this.btnConfirm.set_enable(false); //소장승인
        		this.btnConfirmCancel.set_enable(false); //반려
        		this.btnRetrieve.set_enable(false); //회수

        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_ELAPPRGS"))) { //승인요청 이전
        			this.btnConfirmReq.set_enable(true); //승인요청
        		} else { //승인요청 이후
        			if(this.dsList.getColumn(this.dsList.rowposition, "CD_ELAPPRGS") != "03") { //승인요청 진행중인 단계
        				this.btnConfirm.set_enable(true); //소장승인
        				this.btnConfirmCancel.set_enable(true); //반려
        			} else if(this.dsList.getColumn(this.dsList.rowposition, "CD_ELAPPRGS") == "03") { //소장승인까지 난 상태 (all disable)
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
        		this.dsConfirm.setColumn(nrow, "V_PARAM01", this.dsList.getColumn(nRowCont, "CD_SITE"));
        		this.dsConfirm.setColumn(nrow, "V_PARAM02", this.dsList.getColumn(nRowCont, "NO_HADOCONT"));
        		this.dsConfirm.setColumn(nrow, "V_PARAM03", this.dsList.getColumn(nRowCont, "SN_SEQ"));
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
        		this.dsConfirm.setColumn(nrow, "V_PARAM01", this.dsList.getColumn(nRowCont, "CD_SITE"));
        		this.dsConfirm.setColumn(nrow, "V_PARAM02", this.dsList.getColumn(nRowCont, "NO_HADOCONT"));
        		this.dsConfirm.setColumn(nrow, "V_PARAM03", this.dsList.getColumn(nRowCont, "SN_SEQ"));
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
        		this.dsConfirm.setColumn(nrow, "V_PARAM01", this.dsList.getColumn(nRowCont, "CD_SITE"));
        		this.dsConfirm.setColumn(nrow, "V_PARAM02", this.dsList.getColumn(nRowCont, "NO_HADOCONT"));
        		this.dsConfirm.setColumn(nrow, "V_PARAM03", this.dsList.getColumn(nRowCont, "SN_SEQ"));
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
        		this.dsConfirm.addColumn("NO_HADOCONT", "string");
        		this.dsConfirm.addColumn("SN_SEQ", "string");
        		this.dsConfirm.addColumn("TY_CONFIRM_STATUS", "string");
        		this.dsConfirm.addColumn("ID_USER", "string");

        		var nrow = this.dsConfirm.addRow();
        		this.dsConfirm.setColumn(nrow, "CD_SITE", this.dsList.getColumn(nRowCont, "CD_SITE"));
        		this.dsConfirm.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(nRowCont, "NO_HADOCONT"));
        		this.dsConfirm.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(nRowCont, "SN_SEQ"));
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
        		this.dsConfirm.addColumn("NO_HADOCONT", "string");
        		this.dsConfirm.addColumn("SN_SEQ", "string");
        		this.dsConfirm.addColumn("TY_CONFIRM_STATUS", "string");
        		this.dsConfirm.addColumn("ID_USER", "string");

        		var nrow = this.dsConfirm.addRow();
        		this.dsConfirm.setColumn(nrow, "CD_SITE", this.dsList.getColumn(nRowCont, "CD_SITE"));
        		this.dsConfirm.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(nRowCont, "NO_HADOCONT"));
        		this.dsConfirm.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(nRowCont, "SN_SEQ"));
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
            this.addEventHandler("onload",this.DWZ_HADOREQ_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWZ_HADOREQ.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
