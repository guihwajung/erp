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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_GONGJI_VENDOR_SELECT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DZZPR_GONGJI_TOTAL_VENDOR_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SN_SEQ\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProcSap", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVendorList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staNO_BID","10","10","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("공지 명");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_GONGJI","staNO_BID:10","12",null,"20","683",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_enable("false");
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZU_GONGJI_VENDOR_LIST.xfdl", function() {
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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().SN_SEQ)) {
        		this.dsSearch.setColumn(0, "SN_SEQ", this.getOwnerFrame().SN_SEQ);
        		this.divSearch.form.edtDS_GONGJI.set_value(this.getOwnerFrame().NM_TITLE);
        		//this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);

        		this.FormBtns.Select.click();
        	}


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
        	//this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP");
        	//this.btnAssignment = this.gfnFormButtonAdd("btnAssignment", "fnAssignment");
        	//this.btnVendorCode = this.gfnFormButtonAdd("btnVendorCode", "fnVendorCode");
        	this.btnVendorSearch = this.gfnFormButtonAdd("btnVendorSearch", "fnVendorSearch");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	//this.ccfNO_BID = this.divSearch.form.ccfNO_BID;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfNO_BID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCB_GONGJI_VENDOR2");

        	// 셀 수정가능 여부
        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";

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
        	this.dsSelect.addColumn("SN_SEQ", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("TY_FLAG", "string");
        	this.dsDelete.addColumn("SN_SEQ", "string");
        	this.dsDelete.addColumn("CD_VENDOR", "string");
        	this.dsDelete.addColumn("DS_VENDOR", "string");
        	this.dsDelete.addColumn("ID_USER", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("SN_SEQ", "string");

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

        	this.dsSelect.setColumn(0, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));

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
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크``
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "TY_FLAG",        "D" );
        				this.dsDelete.setColumn(nrow, "SN_SEQ",         this.dsSearch.getColumn(0, "SN_SEQ"));
        				this.dsDelete.setColumn(nrow, "CD_VENDOR",      this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsDelete.setColumn(nrow, "DS_VENDOR",   	  this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsDelete.setColumn(nrow, "ID_USER",        this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsDelete.rowcount == 0 ) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete update=dsUpdate";
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"SN_SEQ"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.gfnAlert("공지순번은 반드시 입력 하셔야 합니다.");
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
        		//TODO
        		//this.dxGrid.setCell
        		//this.Grid00.setCellProperty( "head", 0, "color", "black");

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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfNO_PR") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE")); // CD_SITE
        	}
        	return true;
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 업체검색
        this.fnVendorSearch = function(obj,e) {

        	var param = {};
        	param.SN_SEQ = this.dsSearch.getColumn(0, "SN_SEQ");	//작성일

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZU_GONGJI_VENDOR_ADD_POP", "fnVendorSearch_callback", param, 1300, 600);

        };

        this.fnVendorSearch_callback = function()
        {
        	this.FormBtns.Select.click();
        };


        this.fnVendorCode = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var msg = "입찰번호 : " + this.dsList.getColumn(this.dsList.rowposition, "NO_BID")
        			+ "\n사업자번호 : " + this.dsList.getColumn(this.dsList.rowposition, "BIZNO")
        			+ "\n\n업체코드 생성을 진행하시겠습니까?";

        	this.gfnConfirm(msg,"fnSelectVendorcode");
        }



        // sap 처리
        this.fnSap = function() {
        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "ZVENDOR02_0012");

        	// 결재선 sap 처리
        	this.dsSelectSap = new Dataset();
        	this.dsSelectSap.addColumn("IN_AKONT", "string");
        	this.dsSelectSap.addColumn("IN_CJKTW", "string");
        	this.dsSelectSap.addColumn("IN_EKGRP", "string");
        	this.dsSelectSap.addColumn("IN_FDGRV", "string");
        	this.dsSelectSap.addColumn("IN_FITYP", "string");
        	this.dsSelectSap.addColumn("IN_INTAD", "string");
        	this.dsSelectSap.addColumn("IN_J_1KFREPRE", "string");
        	this.dsSelectSap.addColumn("IN_J_1KFTBUS", "string");
        	this.dsSelectSap.addColumn("IN_J_1KFTIND", "string");
        	this.dsSelectSap.addColumn("IN_KTOKK", "string");
        	this.dsSelectSap.addColumn("IN_LFURL", "string");
        	this.dsSelectSap.addColumn("IN_NAME1", "string");
        	this.dsSelectSap.addColumn("IN_ORT01", "string");
        	this.dsSelectSap.addColumn("IN_PSTLZ", "string");
        	this.dsSelectSap.addColumn("IN_REGIO", "string");
        	this.dsSelectSap.addColumn("IN_SORTL", "string");
        	this.dsSelectSap.addColumn("IN_STCD1", "string");
        	this.dsSelectSap.addColumn("IN_STCD2", "string");
        	this.dsSelectSap.addColumn("IN_STRAS", "string");
        	this.dsSelectSap.addColumn("IN_TELF1", "string");
        	this.dsSelectSap.addColumn("IN_TELF2", "string");
        	this.dsSelectSap.addColumn("IN_TLFNS", "string");
        	this.dsSelectSap.addColumn("IN_TLFXS", "string");
        	this.dsSelectSap.addColumn("IN_ZTERM", "string");
        	this.dsSelectSap.addColumn("IN_SORTL", "string");
        	this.dsSelectSap.addColumn("IN_TLFNS", "string");
        	this.dsSelectSap.addColumn("IN_TLFXS", "string");

        	nrow = this.dsSelectSap.addRow();

        	// IN 파라미터 셋팅
        	this.dsSelectSap.setColumn(nrow, "IN_AKONT", this.dsVendorList.getColumn(0, "AKONT"));
        	this.dsSelectSap.setColumn(nrow, "IN_CJKTW", this.dsVendorList.getColumn(0, "CJKTW"));
        	this.dsSelectSap.setColumn(nrow, "IN_EKGRP", this.dsVendorList.getColumn(0, "EKGRP"));
        	this.dsSelectSap.setColumn(nrow, "IN_FDGRV", this.dsVendorList.getColumn(0, "FDGRV"));
        	this.dsSelectSap.setColumn(nrow, "IN_FITYP", this.dsVendorList.getColumn(0, "FITYP"));
        	this.dsSelectSap.setColumn(nrow, "IN_INTAD", "");
        	this.dsSelectSap.setColumn(nrow, "IN_J_1KFREPRE", this.dsVendorList.getColumn(0, "DS_PRESIDENT"));
        	this.dsSelectSap.setColumn(nrow, "IN_J_1KFTBUS", this.dsVendorList.getColumn(0, "DS_UPJONG"));
        	this.dsSelectSap.setColumn(nrow, "IN_J_1KFTIND", this.dsVendorList.getColumn(0, "DS_UPTAE"));
        	//this.dsSelectSap.setColumn(nrow, "IN_KTOKK", this.dsVendorList.getColumn(0, "KTOKK"));
        	this.dsSelectSap.setColumn(nrow, "IN_KTOKK", "HD01");
        	this.dsSelectSap.setColumn(nrow, "IN_LFURL", this.dsVendorList.getColumn(0, "DS_EMAIL"));
        	this.dsSelectSap.setColumn(nrow, "IN_NAME1", this.dsVendorList.getColumn(0, "DS_VENDOR"));
        	this.dsSelectSap.setColumn(nrow, "IN_ORT01", this.dsVendorList.getColumn(0, "DS_REGION"));
        	this.dsSelectSap.setColumn(nrow, "IN_PSTLZ", this.dsVendorList.getColumn(0, "NO_ZIP"));
        	this.dsSelectSap.setColumn(nrow, "IN_REGIO", this.dsVendorList.getColumn(0, "DS_REGION"));
        	this.dsSelectSap.setColumn(nrow, "IN_STCD1", this.dsVendorList.getColumn(0, "CD_DAEPYO"));
        	this.dsSelectSap.setColumn(nrow, "IN_STCD2", this.dsVendorList.getColumn(0, "NO_SJC"));
        	this.dsSelectSap.setColumn(nrow, "IN_STRAS", this.dsVendorList.getColumn(0, "DS_ADDR"));
        	this.dsSelectSap.setColumn(nrow, "IN_TELF1", this.dsVendorList.getColumn(0, "TELF1"));
        	this.dsSelectSap.setColumn(nrow, "IN_TELF2", "");
        	this.dsSelectSap.setColumn(nrow, "IN_TLFNS", "");
        	this.dsSelectSap.setColumn(nrow, "IN_TLFXS", "");
        	this.dsSelectSap.setColumn(nrow, "IN_ZTERM", this.dsVendorList.getColumn(0, "ZTERM"));
        	this.dsSelectSap.setColumn(nrow, "IN_SORTL", this.dsVendorList.getColumn(0, "DS_VENDOR"));

        	// SAP 호출
        	var strSvcId    = "sap";
        	var strSvcType  = "sap";
        	var inProc		= "_dsProcSap";
        	var inData      = "select=dsSelectSap";
        	var outData     = "dsExport=export";
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

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "CD_SITE"){
        			this.ccfNO_BID.form.fnCodeFindClear();
        		}
        	}
        };

        this.fnSelectVendorcode = function(strID, val)
        {
        	if(val != true) return;

        	this.dsSelectVendor = new Dataset();
        	this.dsSelectVendor.addColumn("NO_BID", "string");
        	this.dsSelectVendor.addColumn("NO_SJC", "string");

        	this.dsSelectVendor.clearData();
        	this.dsSelectVendor.addRow();

        	this.dsSelectVendor.setColumn(0, "NO_BID", this.dsList.getColumn(this.dsList.rowposition, "NO_BID"));
        	this.dsSelectVendor.setColumn(0, "NO_SJC", this.dsList.getColumn(this.dsList.rowposition, "BIZNO"));

        	var strSvcId    = "select_vendor";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_vendor=dsSelectVendor";
        	var outData     = "dsVendorList=select_vendor0";
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

        // sap 보낸정보를 저장한다(로그 저장)
        this.fnExecLog = function() {
        	this.dsExecLog = new Dataset();
        	this.dsExecLog.addColumn("PARAM", "string");

        	this.dsExecLog.clearData();

        	this.dsExecLog.addRow();

        	var paramVal =
        	"<IN_AKONT:" + this.dsVendorList.getColumn(0, "AKONT") +
        	"><IN_CJKTW:" + this.dsVendorList.getColumn(0, "CJKTW") +
        	"><IN_EKGRP:" + this.dsVendorList.getColumn(0, "EKGRP") +
        	"><IN_FDGRV:" + this.dsVendorList.getColumn(0, "FDGRV") +
        	"><IN_FITYP:" + this.dsVendorList.getColumn(0, "FITYP") +
        	"><IN_INTAD:" + "" +
        	"><IN_J_1KFREPRE:" + this.dsVendorList.getColumn(0, "DS_PRESIDENT") +
        	"><IN_J_1KFTBUS:" + this.dsVendorList.getColumn(0, "DS_UPJONG") +
        	"><IN_J_1KFTIND:" + this.dsVendorList.getColumn(0, "DS_UPTAE") +
        	"><IN_KTOKK:" + "HD01" +
        	"><IN_LFURL:" + this.dsVendorList.getColumn(0, "DS_EMAIL") +
        	"><IN_NAME1:" + this.dsVendorList.getColumn(0, "DS_VENDOR") +
        	"><IN_ORT01:" + this.dsVendorList.getColumn(0, "DS_REGION") +
        	"><IN_PSTLZ:" + this.dsVendorList.getColumn(0, "NO_ZIP") +
        	"><IN_REGIO:" + this.dsVendorList.getColumn(0, "DS_REGION") +
        	"><IN_STCD1:" + this.dsVendorList.getColumn(0, "CD_DAEPYO") +
        	"><IN_STCD2:" + this.dsVendorList.getColumn(0, "NO_SJC") +
        	"><IN_STRAS:" + this.dsVendorList.getColumn(0, "DS_ADDR") +
        	"><IN_TELF1:" + this.dsVendorList.getColumn(0, "TELF1") +
        	"><IN_TELF2:" + "" +
        	"><IN_TLFNS:" + "" +
        	"><IN_TLFXS:" + "" +
        	"><IN_ZTERM:" + this.dsVendorList.getColumn(0, "ZTERM") +
        	"><IN_SORTL:" + this.dsVendorList.getColumn(0, "DS_VENDOR") + ">";

        	this.dsExecLog.setColumn(0, "PARAM", paramVal);

        	if (this.dsExecLog.rowcount == 0) return;

        	var strSvcId    = "sap_log";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "sap_log=dsExecLog";
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


        /*
         *	sap 호출 처리후 저장
         */
        this.fnSapUadate = function() {
        	this.dsSapUpdate = new Dataset();
        	this.dsSapUpdate.addColumn("NO_ID", "string");
        	this.dsSapUpdate.addColumn("CD_VENDOR", "string");

        	this.dsSapUpdate.clearData();

        	this.dsSapUpdate.addRow();

        	this.dsSapUpdate.setColumn(0, "NO_BID", this.dsList.getColumn(this.dsList.rowposition, "NO_BID"));
        	this.dsSapUpdate.setColumn(0, "NO_SJC", this.dsList.getColumn(this.dsList.rowposition, "BIZNO"));
        	// 거래처 등록(SAP)에서 돌아온 값을 update 해준다.
        	this.dsSapUpdate.setColumn(0, "CD_VENDOR", this.dsExport.getColumn(0, "RTNCD1"));
        	//this.dsSapUpdate.setColumn(0, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));

        	if (this.dsSapUpdate.rowcount == 0) return;

        	var strSvcId    = "apprSapUpdate";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "appr_sap_update=dsSapUpdate";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZU_GONGJI_VENDOR_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
