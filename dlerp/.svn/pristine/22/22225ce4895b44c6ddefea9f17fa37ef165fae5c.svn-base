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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_RISK03_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DWAPR_RISK_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_FROM\"/><Col id=\"YM_TO\"/></Row></Rows>");
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
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("AutoSet").set("false");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회기간");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_FROM","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","ctclYM_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_TO","staCD_TILDE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
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

            obj = new BindItem("item1","divSearch.form.ctclYM_FROM.form.TextBox","value","dsSearch","YM_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_TO.form.TextBox","value","dsSearch","YM_TO");
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
        this.registerScript("DWA_RISK03.xfdl", function() {
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
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YM_FROM)
        	&& !this.gfnIsNull(this.getOwnerFrame().YM_TO))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "YM_FROM", this.getOwnerFrame().YM_FROM.substr(0,6));
        		this.dsSearch.setColumn(0, "YM_TO", this.getOwnerFrame().YM_TO.substr(0,6));

        		this.FormBtns.Select.click();
        	}
        	else
        	{
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0, "YM_FROM", this.gfnAddMonth(today, -1).substr(0,6));
        		this.dsSearch.setColumn(0, "YM_TO", today.substr(0,6));
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
        	this.btnRiskDtls = this.gfnFormButtonAdd("btnRiskDtls", "fnRiskDtls");
        	this.btnAprvCmpl = this.gfnFormButtonAdd("btnAprvCmpl", "fnAprvCmpl");
        	this.btnAprvCnc = this.gfnFormButtonAdd("btnAprvCnc", "fnAprvCnc");
        	this.btnAttachFile = this.gfnFormButtonAdd("btnAttachFile", "fnAttachFile");
        	this.btnRiskAtfl = this.gfnFormButtonAdd("btnRiskAtfl", "fnRiskAtfl");
        	this.btnAprv = this.gfnFormButtonAdd("btnAprv", "fnAprv");
        	this.btnOmgrAprvReq = this.gfnFormButtonAdd("btnOmgrAprvReq", "fnOmgrAprvReq");
        	this.btnAprvReqCnc = this.gfnFormButtonAdd("btnAprvReqCnc", "fnAprvReqCnc");
        	this.btnAdcnRuleRvw = this.gfnFormButtonAdd("btnAdcnRuleRvw", "fnAdcnRuleRvw");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclYM_FROM = this.divSearch.form.ctclYM_FROM;
        	this.ctclYM_TO = this.divSearch.form.ctclYM_TO;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_RISK03");


        	// 그리드 코드파인드 설정
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_FROM", "string");
        	this.dsSelect.addColumn("YM_TO", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("NO_RISK", "string");
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
        	this.dsSelect.setColumn(0, "YM_FROM", this.dsSearch.getColumn(0, "YM_FROM").substr(0,6));
        	this.dsSelect.setColumn(0, "YM_TO", this.dsSearch.getColumn(0, "YM_TO").substr(0,6));

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

        }

        /*
         *	결재완료 or 취소 처리
         */
        this.fnExec = function(strID) {

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "TY_WRK", strID);
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExec.setColumn(0, "CD_SITE", this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_FROM"))) {
        		validate = false;
        		//Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_FROM.form.TextBox.setFocus();
        		}
        		this.gfnAlert("조회기간을 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_TO"))) {
        		validate = false;
        		//Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_TO.form.TextBox.setFocus();
        		}
        		this.gfnAlert("조회기간을 입력하세요.", "fnVaidateCallback");
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

        	}
        	else if(svcID == "save") {

        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "OMGRREQ") {
        		if (errorCode == 0) {
        			this.gfnAlert("소장승인요청 정상처리되었습니다.");
         			this.FormBtns.Select.click();
         		} else {
         			this.gfnAlert(errorMsg);
         		}
         	}
         	else if(svcID == "REQCNC") {
         		if (errorCode == 0) {
         			this.gfnAlert("소장승인요청취소 정상처리되었습니다.");
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

         // 현장정보관리 버튼 클릭시 팝업화면 호출
         this.fnRiskDtls = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        	param.NO_RISK = this.dsList.getColumn(this.dsList.rowposition, "NO_RISK");
        	param.NM_RISK = this.dsList.getColumn(this.dsList.rowposition, "NM_RISK");
            param.NO_SILHENG = this.dsList.getColumn(this.dsList.rowposition, "NO_SILHENG");
        	param.NO_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT");
        	param.DS_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT");
        	param.NO_SEQCONT = this.dsList.getColumn(this.dsList.rowposition, "NO_SEQCONT");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_RISKDTLS", "", param);
        }

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
        	fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"), this.dsList.getColumn(this.dsList.rowposition, "NO_RISK")];
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

        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
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

        	var param = {};
        	param.PARAM01 = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.PARAM02 = this.dsList.getColumn(this.dsList.rowposition, "NO_RISK");
        	param.ID_AP = this.dsList.getColumn(this.dsList.rowposition, "NO_ELAPDOC");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다
        	//param.NO_SILHENG = this.dsList.getColumn(this.dsList.rowposition, "NO_SILHENG");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_RISK_APPROVAL", "fnAprvDialogCallback", param);
        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
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

        	var msg = "현장코드 : [" + this.dsList.getColumn(this.dsList.rowposition, "CD_SITE") + "] " + this.dsList.getColumn(this.dsList.rowposition, "DS_SITE")
        			+ "\n리  스 크 : [" +  this.dsList.getColumn(this.dsList.rowposition, "NO_RISK") + "] " + this.dsList.getColumn(this.dsList.rowposition, "NM_RISK")
        			+ "\n소장승인요청 이후 데이타수정이 불가능합니다. "
        			+ "\n\n소장승인요청 하시겠습니까?";

        	this.gfnConfirm(msg, "fnExec_callback", "OMGRREQ");

        }


        this.fnAprvReqCnc = function(obj,e) {

        	var msg = "현장코드 : [" + this.dsList.getColumn(this.dsList.rowposition, "CD_SITE") + "] " + this.dsList.getColumn(this.dsList.rowposition, "DS_SITE")
        			+ "\n리  스 크 : [" +  this.dsList.getColumn(this.dsList.rowposition, "NO_RISK") + "] " + this.dsList.getColumn(this.dsList.rowposition, "NM_RISK")
        			+ "\n소장승인요청취소 이후 데이타수정이 불가능합니다. "
        			+ "\n\n소장승인요청취소 하시겠습니까?";

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

        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        	param.NO_RISK = this.dsList.getColumn(this.dsList.rowposition, "NO_RISK");
        	param.NM_RISK = this.dsList.getColumn(this.dsList.rowposition, "NM_RISK");

        	this.gfnFormOpen("DWR", "DWA_RISKADCNRVW", "fnAdcnRuleRvw_callback", param, 780, 440);
         }

        this.fnAdcnRuleRvw_callback = function(strID, val)
        {
        	this.FormBtns.Select.click();
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_RISK03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
