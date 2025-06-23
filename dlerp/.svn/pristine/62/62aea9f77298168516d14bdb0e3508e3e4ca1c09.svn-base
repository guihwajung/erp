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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_RISK_V2_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWAPR_RISK_V2_SAVE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DWAPR_RISK_V2_EXECUTE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DWAPR_RISKDTLS_V2_SELECT</Col></Row><Row><Col id=\"SP\">DWAPR_RISK_V2_CREATE</Col><Col id=\"TARGET\">RiskCre</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
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
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","60%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWA_RISK_V2.xfdl", function() {
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
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().DS_SITE)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);

        		this.FormBtns.Select.click();
        	}

        	/* hjy
        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SYSTEM) && !this.gfnIsNull(this.getOwnerFrame().DS_SYSTEM)) {
        		this.dsSearch.setColumn(0, "CD_SYSTEM", this.getOwnerFrame().CD_SYSTEM);
        		this.dsSearch.setColumn(0, "DS_SYSTEM", this.getOwnerFrame().DS_SYSTEM);

        		this.FormBtns.Select.click();
        	}
        	*/
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
        	this.btnRiskDtls = this.gfnFormButtonAdd("btnRiskDtls", "fnRiskDtls");
        	this.btnAprvCmpl = this.gfnFormButtonAdd("btnAprvCmpl", "fnAprvCmpl");
        	this.btnAprvCnc = this.gfnFormButtonAdd("btnAprvCnc", "fnAprvCnc");
        	this.btnAttachFile = this.gfnFormButtonAdd("btnAttachFile", "fnAttachFile");
        	this.btnRiskAtfl = this.gfnFormButtonAdd("btnRiskAtfl", "fnRiskAtfl");
        	this.btnAprv = this.gfnFormButtonAdd("btnAprv", "fnAprv");
        	this.btnOmgrAprvReq = this.gfnFormButtonAdd("btnOmgrAprvReq", "fnOmgrAprvReq");
        	this.btnAprvReqCnc = this.gfnFormButtonAdd("btnAprvReqCnc", "fnAprvReqCnc");
        	this.btnAdcnRuleRvw = this.gfnFormButtonAdd("btnAdcnRuleRvw", "fnAdcnRuleRvw");
        	this.btnRiskCre = this.gfnFormButtonAdd("btnRiskCre", "fnRiskCre");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_RISK_V2");

        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	// 셀 변경 후 이벤트
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 전체체크박스 체크/해제 이벤트
        	//this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

        	// BUTTON, BUTTON-IN 처리
        	//this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DW", "DWA_RISKDTLS_APP_V2");
        	this.dxGridSub.EnterCell = "fnGridSub_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("TY_WRK", "string");
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("NO_RISK", "string");
        	this.dsSelectSub.addColumn("NO_HADOCONT", "string");
        	this.dsSelectSub.addColumn("NO_SEQCONT", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_RISK", "string");
        	this.dsSave.addColumn("NM_RISK", "string");
        	this.dsSave.addColumn("CD_RBS_LV1", "string");
        	this.dsSave.addColumn("CD_RBS_LV2", "string");
        	this.dsSave.addColumn("CD_RBS_LV3", "string");
        	this.dsSave.addColumn("CD_RBS_LV4", "string");
        	this.dsSave.addColumn("CD_RBS_LV5", "string");
        	this.dsSave.addColumn("CD_SPECS", "string");
        	this.dsSave.addColumn("DS_MASHM", "string");
        	this.dsSave.addColumn("AM_UNTK", "bigdecimal");
        	this.dsSave.addColumn("AM_EBGT", "bigdecimal");
        	this.dsSave.addColumn("AM_EXEC", "bigdecimal");
        	this.dsSave.addColumn("DS_RMKS", "string");
        	this.dsSave.addColumn("NO_SILHENG", "string");
        	this.dsSave.addColumn("CD_PRGSSTATS", "string");
        	this.dsSave.addColumn("NO_ELAPDOC", "string");
        	this.dsSave.addColumn("CD_ELAPPRGS", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("NO_SEQCONT", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("NO_RISK", "string");

        	this.dsRiskCre = new Dataset();
        	this.dsRiskCre.addColumn("ID_USER", "string");
        	this.dsRiskCre.addColumn("CD_SITE", "string");
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
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "YN_EDIT", "Y");
        	this.dsList.setColumn(nrow, "YN_DTLS", "N");
        	this.dsList.set_enableevent(true);

        	//this.fnGrid_EnterCell(this.dxGrid, nrow, 1);
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
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_RISK", this.dsList.getColumn(i, "NO_RISK"));
        				this.dsSave.setColumn(nrow, "NM_RISK", this.dsList.getColumn(i, "NM_RISK"));
        				this.dsSave.setColumn(nrow, "CD_RBS_LV1", this.dsList.getColumn(i, "CD_RBS_LV1"));
        				this.dsSave.setColumn(nrow, "CD_RBS_LV2", this.dsList.getColumn(i, "CD_RBS_LV2"));
        				this.dsSave.setColumn(nrow, "CD_RBS_LV3", this.dsList.getColumn(i, "CD_RBS_LV3"));
        				this.dsSave.setColumn(nrow, "CD_RBS_LV4", this.dsList.getColumn(i, "CD_RBS_LV4"));
        				this.dsSave.setColumn(nrow, "CD_RBS_LV5", this.dsList.getColumn(i, "CD_RBS_LV5"));
        				this.dsSave.setColumn(nrow, "CD_SPECS", this.dsList.getColumn(i, "CD_SPECS"));
        				this.dsSave.setColumn(nrow, "DS_MASHM", this.dsList.getColumn(i, "DS_MASHM"));
        				this.dsSave.setColumn(nrow, "AM_UNTK", this.dsList.getColumn(i, "AM_UNTK"));
        				this.dsSave.setColumn(nrow, "AM_EBGT", this.dsList.getColumn(i, "AM_EBGT"));
        				this.dsSave.setColumn(nrow, "AM_EXEC", this.dsList.getColumn(i, "AM_EXEC"));
        				this.dsSave.setColumn(nrow, "DS_RMKS", this.dsList.getColumn(i, "DS_RMKS"));
        				this.dsSave.setColumn(nrow, "NO_SILHENG", this.dsList.getColumn(i, "NO_SILHENG"));
        				this.dsSave.setColumn(nrow, "CD_PRGSSTATS", this.dsList.getColumn(i, "CD_PRGSSTATS"));
        				this.dsSave.setColumn(nrow, "NO_ELAPDOC", this.dsList.getColumn(i, "NO_ELAPDOC"));
        				this.dsSave.setColumn(nrow, "CD_ELAPPRGS", this.dsList.getColumn(i, "CD_ELAPPRGS"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsSave.setColumn(nrow, "NO_SEQCONT", this.dsList.getColumn(i, "NO_SEQCONT"));
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

        this.fnDetail = function()
        {
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "TY_WRK", "Q");
        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub.setColumn(0, "NO_RISK", this.dsList.getColumn(this.dsList.rowposition, "NO_RISK"));
        	this.dsSelectSub.setColumn(0, "NO_HADOCONT", this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT"));
        	this.dsSelectSub.setColumn(0, "NO_SEQCONT", this.dsList.getColumn(this.dsList.rowposition, "NO_SEQCONT"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
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
         *	결재완료 or 취소 처리
         */
        this.fnExec = function(strID) {

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "TY_WRK", strID);
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExec.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(0, "NO_RISK", this.dsList.getColumn(this.dsList.rowposition, "NO_RISK"));

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = strID;
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
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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

        		//if(this.dsList.rowposition < 0) this.dsList.set_rowposition(0);

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
        	}else if(svcID == "OMGRREQ") {
        		if (errorCode == 0) {
        			this.gfnAlert("승인요청 정상처리되었습니다.");
         			this.FormBtns.Select.click();
         		} else {
         			this.gfnAlert(errorMsg);
         		}
         	}
         	else if(svcID == "REQCNC") {
         		if (errorCode == 0) {
         			this.gfnAlert("승인요청취소 정상처리되었습니다.");
         			this.FormBtns.Select.click();
         		} else {
         			this.gfnAlert(errorMsg);
         		}
         	}
        	else if(svcID == "RiskCre") {
         		if (errorCode == 0) {
         			this.gfnAlert("생성이 정상처리되었습니다.");
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
          this.fnGrid_BeforeUserDataSetParam=function(id, dsUserParam, nrow){
        	if(id == "DWX_CFHADO_01"){
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "YM_WORK", "");
        		dsUserParam.setColumn(nrow, "TY_DIV", "RISK");
        		dsUserParam.setColumn(nrow, "DS_CONTMETHOD", "");
        		dsUserParam.setColumn(nrow, "CD_VENDOR", "");
        	}
        	return true;
        };

        // cell 클릭했을때 이벤트(해당 cell에 대한 이벤트를 건다)
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT 값이 Y일때만 수정가능상태
        	if(this.dsList.getColumn(row, "YN_EDIT") == "N") {
        		return false;
        	}else{
        		// YN_DTLS 값이 Y일때만 도급/실행/집행금액 수정가능 상태로 만든다
        		if(colnm == "AM_UNTK" || colnm == "AM_EBGT" || colnm == "AM_EXEC"){
        			if(this.dsList.getColumn(row, "YN_DTLS") == "N") {
        				return false;
        			}else{
        				return true;
        			}
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if (!this.gfnGridIsRow(this.dxGrid)) return;

        	this.fnDetail();

        };

        this.fnGridSub_EnterCell = function(obj, row, cell) {
        	return false;
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

         // 현장정보관리 버튼 클릭시 팝업화면 호출
         this.fnRiskDtls = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0,"CD_SITE");
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.NO_RISK = this.dsList.getColumn(this.dsList.rowposition, "NO_RISK");
        	param.NM_RISK = this.dsList.getColumn(this.dsList.rowposition, "NM_RISK");
            param.NO_SILHENG = this.dsList.getColumn(this.dsList.rowposition, "NO_SILHENG");
        	param.NO_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT");
        	param.DS_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT");
        	param.NO_SEQCONT = this.dsList.getColumn(this.dsList.rowposition, "NO_SEQCONT");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_RISKDTLS_V2", "fnRiskDtlsCallback", param);
        }

         this.fnRiskDtlsCallback = function(svcID, value) {
        	// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        	this.FormBtns.Select.click();
        };

         // 결재완료 버튼 클릭 이벤트
         this.fnAprvCmpl = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var strID = "APRVCMPL";
        	this.fnExec(strID);
        }

         // 결재취소 버튼 클릭 이벤트
         this.fnAprvCnc = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var strID = "APRVCNC";
        	this.fnExec(strID);
        }

         // 첨부파일 버튼
         this.fnAttachFile = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DWR1";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"CD_SITE"), this.dsList.getColumn(this.dsList.rowposition, "NO_RISK")];
        	//fileManager.IS_READONLY = true;

        	if(this.dsList.getColumn(this.dsList.rowposition, "BTN_ATTACHFILE_AUTH") == "R") {
        			fileManager.IS_READONLY = true;
        	} else {
        			fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

         this.fnRiskAtfl = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_RISK = this.dsList.getColumn(this.dsList.rowposition, "NO_RISK");
        	param.NM_RISK = this.dsList.getColumn(this.dsList.rowposition, "NM_RISK");
        	param.NO_SILHENG = this.dsList.getColumn(this.dsList.rowposition, "NO_SILHENG");

        	this.gfnFormOpen("DWR", "DWA_RISKATFL", "", param);
         }

         // Risk품의서 버튼 클릭시 팝업화면 호출
         this.fnAprv = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        // 	var param = {};
        // 	param.PARAM01 = this.dsSearch.getColumn(0,"CD_SITE");
        // 	param.PARAM02 = this.dsList.getColumn(this.dsList.rowposition, "NO_RISK");
        // 	param.ID_AP = this.dsList.getColumn(this.dsList.rowposition, "NO_ELAPDOC");	// 전자결재문서번호
        // 	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다
        // 	//param.NO_SILHENG = this.dsList.getColumn(this.dsList.rowposition, "NO_SILHENG");
        //
        // 	// 화면 오픈.
        // 	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        // 	// 타 모듈 화면 호출시 지정할것.
        //
        // 	if(this.dsList.getColumn(this.dsList.rowposition, "TY_APPROVAL") == "현장"){
        // 		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_RISK_APPROVAL_SITE", "fnAprvDialogCallback", param);
        // 	}else{
        // 		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_RISK_APPROVAL", "fnAprvDialogCallback", param);
        // 	}

        	var param = {};
        	param.V1 = this.dsSearch.getColumn(0,"CD_SITE");
        	param.V2 = this.dsList.getColumn(this.dsList.rowposition, "NO_RISK");
        	param.ID_AP = this.dsList.getColumn(this.dsList.rowposition, "NO_ELAPDOC");	// 전자결재문서번호
        	param.DS_ETITLE = "결재문서 제목은 업무성격에 맞춰 설정";

        	this.gfnFormOpen("DZR", "DZR_AP_SAMPLE", "fnAprvDialogCallback", param, 1200, 700);
        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	//if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	//}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

        this.fnGrid_FlagCheck = function()
        {
        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);

        	if(flag == "I")
        		return false;

        	return true;
        }


        this.fnOmgrAprvReq = function(obj,e) {

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.value
        			+ "\n리  스 크 : [" +  this.dsList.getColumn(this.dsList.rowposition, "NO_RISK") + "] " + this.dsList.getColumn(this.dsList.rowposition, "NM_RISK")
        			+ "\n승인요청 이후 데이타수정이 불가능합니다. "
        			+ "\n\n승인요청 하시겠습니까?";

        	this.gfnConfirm(msg, "fnExec_callback", "OMGRREQ");

        }


        this.fnAprvReqCnc = function(obj,e) {

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.value
        			+ "\n리  스 크 : [" +  this.dsList.getColumn(this.dsList.rowposition, "NO_RISK") + "] " + this.dsList.getColumn(this.dsList.rowposition, "NM_RISK")
        			+ "\n승인요청취소 이후 데이타수정이 불가능합니다. "
        			+ "\n\n승인요청취소 하시겠습니까?";

        	this.gfnConfirm(msg, "fnExec_callback", "REQCNC");

        }

        this.fnExec_callback = function(strID, val) {
           if(val == true) {
              this.fnExec(strID);
           }
        }

         this.fnAdcnRuleRvw = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_RISK = this.dsList.getColumn(this.dsList.rowposition, "NO_RISK");
        	param.NM_RISK = this.dsList.getColumn(this.dsList.rowposition, "NM_RISK");

        	this.gfnFormOpen("DWR", "DWA_RISKADCNRVW", "fnAdcnRuleRvw_callback", param, 780, 440);
        }

        this.fnRiskCre = function() {
        	this.gfnConfirm("실정보고생성 하시겠습니까?", "riskCre");
        }

        this.riskCre = function(strId, val)
        {

        	if(val == false) return;

            this.dsRiskCre.clearData();

        	this.dsRiskCre.addRow();

        	this.dsRiskCre.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsRiskCre.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	if (this.dsRiskCre.rowcount == 0) return;

        	var strSvcId    = "RiskCre";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "RiskCre=dsRiskCre";
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

        this.fnAdcnRuleRvw_callback = function(strID, val)
        {
        	this.FormBtns.Select.click();
        }

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };


        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btnRiskDtls, this.dsList);
        	this.gfnBtnCheck(this.btnAprvCmpl, this.dsList);
        	this.gfnBtnCheck(this.btnAprvCnc, this.dsList);
        	this.gfnBtnCheck(this.btnAttachFile, this.dsList);
        	this.gfnBtnCheck(this.btnRiskAtfl, this.dsList);
        	this.gfnBtnCheck(this.btnAprv, this.dsList);
        	this.gfnBtnCheck(this.btnOmgrAprvReq, this.dsList);
        	this.gfnBtnCheck(this.btnAprvReqCnc, this.dsList);
        	this.gfnBtnCheck(this.btnAdcnRuleRvw, this.dsList);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_RISK_V2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
