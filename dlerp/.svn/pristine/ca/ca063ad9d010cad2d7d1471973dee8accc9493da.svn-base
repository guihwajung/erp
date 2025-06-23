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
            this.set_titletext("미성(완성)주택관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHMPR_PROGAREA_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHMPR_PROGAREA_INSERT</Col></Row><Row><Col id=\"TARGET\">issueslip</Col><Col id=\"SP\">DHMPR_PROGAREA_AFTER_AUTOSLIP_INSERT</Col></Row><Row><Col id=\"SP\">DHMPR_PROGAREA_AUTOSLIP_INSERT</Col><Col id=\"TARGET\">issueslip2</Col></Row><Row><Col id=\"SP\">DHMPR_PROGAREA_AUTOSLIP_DELETE</Col><Col id=\"TARGET\">cancelslip</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DHMPR_PROGRATE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JUNGONG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_ACCOUNT\"/><Col id=\"CD_SITE\"/><Col id=\"DS_SITE\"/><Col id=\"TY_GUBUN\"/><Col id=\"DS_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACCOUNT","sta00:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta01:0.0","sta00:10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFDHM_SITE1");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ccfCD_SITE:0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("용지구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_GUBUN","sta02:0.0","sta00:10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFAREAGUBUN");
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("준공일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_JUNGONG","sta03:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","60%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("미성(완성)주택 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("분양율 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYM_ACCOUNT.form.TextBox","value","dsSearch","YM_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfTY_GUBUN.form.CDTextBox","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfTY_GUBUN.form.DSTextBox","value","dsSearch","DS_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclDT_JUNGONG","value","dsSearch","DT_JUNGONG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHM_PROGAREA.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "YM_ACCOUNT", this.gfnGetDate().substr(0, 6));
        	this.dsSearch.setColumn(0, "DT_JUNGONG", this.gfnGetDate());
        };

        this.fnSetButton = function() {
        }

        this.fnSetExtendButton = function() {
        	this.btnDataCreate = this.gfnFormButtonAdd("DataCreate", "fnDataCreate");
        	this.btnIssueSlip = this.gfnFormButtonAdd("IssueSlip", "fnIssueSlip");
        	this.btnCancelSlip = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip");
        	this.btnViewSlip = this.gfnFormButtonAdd("ViewSlip", "fnViewSlip");

        	this.btnDataCreate.set_enable(false);
        	this.btnIssueSlip.set_enable(false);
        	this.btnCancelSlip.set_enable(false);
        	this.btnViewSlip.set_enable(false);
        };

        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGrid1 = this.divData.form.divDataBottom.form.objGrid1;

        	this.ctclYM_ACCOUNT = this.divSearch.form.ctclYM_ACCOUNT;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfTY_GUBUN = this.divSearch.form.ccfTY_GUBUN;
        	this.ctclDT_JUNGONG = this.divSearch.form.ctclDT_JUNGONG;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHM_PROGAREA");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DH", "DHM_PROGRATE");

         	this.gfnGridColumnColor(this.dxGrid, "", "BACK_ChongKe", "TY_SEQ == '2'", true);

        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_CellDblclick, this);

        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("YM_ACCOUNT", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_DEPT_ACNT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("YM_ACCOUNT", "string");
        	this.dsInsert.addColumn("ID_TRANS", "string");


        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_DEPT_ACNT", "string");
        	this.dsIssueSlip.addColumn("TY_GUBUN", "string");
        	this.dsIssueSlip.addColumn("YM_ACCOUNT", "string");
        	this.dsIssueSlip.addColumn("ID_TRANS", "string");

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_DEPT_ACNT", "string");
        	this.dsCancelSlip.addColumn("TY_GUBUN", "string");
        	this.dsCancelSlip.addColumn("YM_ACCOUNT", "string");
        	this.dsCancelSlip.addColumn("CD_TRADE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));


        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select1=dsSelect";
        	var outData     = "dsList=select0 dsList1=select10";
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

        this.fnAdd = function() {
        }

        this.fnDel = function() {
        }

        this.fnSave = function() {
        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "TY_GUBUN"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfTY_GUBUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("용지구분은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_ACCOUNT"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_ACCOUNT.form.TextBox.setFocus();
        		}
        		this.gfnAlert("회계년월은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		validate = false;
        	}
        	return validate;
        }

        this.fnSaveValidate = function() {
        	var strMsg = "";

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		strMsg += "현장코드는 반드시 입력 하셔야 합니다.\n";
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_ACCOUNT"))) {
        		strMsg += "회계년월은 반드시 입력 하셔야 합니다.\n";
        	}

        	if (strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if (this.dsList.rowcount > 0) {
        			if (this.gfnIsNull(this.dsList.getColumn(0, "DT_JUNGONG"))) {
        				this.dsSearch.setColumn(0, "DT_JUNGONG", "");
        			}
        			else {
        				this.dsSearch.setColumn(0, "DT_JUNGONG", this.dsList.getColumn(0, "DT_JUNGONG"));
        			}
        		}

        		if (this.dsList.rowcount == 0) {
        			this.btnDataCreate.set_enable(true);
        			this.btnIssueSlip.set_enable(false);
        			this.btnCancelSlip.set_enable(false);
        			this.btnViewSlip.set_enable(false);
        		}
        		else {
        			if (this.gfnIsNull(this.dsList.getColumn(0, "CD_TRADE"))) {
        				this.btnDataCreate.set_enable(true);
        				this.btnIssueSlip.set_enable(true);
        				this.btnCancelSlip.set_enable(false);
        				this.btnViewSlip.set_enable(false);
        			}
        			else {
        				this.btnDataCreate.set_enable(false);
        				this.btnIssueSlip.set_enable(false);
        				this.btnCancelSlip.set_enable(true);
        				this.btnViewSlip.set_enable(true);
        			}
        		}
        	}
        	else if(svcID == "create") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "issueslip") {
        		if (errorCode == 0) {
        			this.fnIssueslipCallback = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("전표가 발행되었습니다.", "fnIssueslipCallback");
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "cancelslip") {
        		if (errorCode == 0) {
        			this.fnCancelslipCallback = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("전표가 취소되었습니다.", "fnCancelslipCallback");
        		}
        		else {
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
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_CellDblclick = function(obj,e){
        	this.fnViewSlip();
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid1);
        	}
        };

        this.fnDataCreate = function(obj,e) {
        	if (!this.fnSaveValidate()) return;

        	this.dsInsert.clearData();
        	var nrow = this.dsInsert.addRow();
        	this.dsInsert.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsInsert.setColumn(nrow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	this.dsInsert.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
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

        this.fnIssueSlip = function(obj,e) {
        	var bSlipInsert = false;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if (nexacro.toNumber(this.dsList.getColumn(i, "AM_MONTHCHANGE")) != 0 || nexacro.toNumber(this.dsList.getColumn(i, "AM_MONTHCOMP")) != 0) {
        			bSlipInsert = true;
        			break;
        		}
        	}

        	if (!bSlipInsert) {
        		if (!this.gfnIsNull(this.dsSearch.getColumn(0, "DT_JUNGONG"))) {
        			if (this.dsSearch.getColumn(0, "DT_JUNGONG").substr(0, 6) != this.dsSearch.getColumn(0, "YM_ACCOUNT")) {
        				this.gfnAlert("미성(완성)주택 대체 금액이 없습니다.");
        				return;
        			}
        		}
        	}

        	this.gfnConfirm("전표를 발행하시겠습니까?", "fnIssueSlip_callback");
        }

        this.fnIssueSlip_callback = function(strId, val)  {
        	if (!val) return;

        	this.dsIssueSlip.clearData();
        	var nrow = this.dsIssueSlip.addRow();
        	this.dsIssueSlip.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsIssueSlip.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsIssueSlip.setColumn(nrow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	this.dsIssueSlip.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);

        	var sp = "issueslip";
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "DT_JUNGONG"))) {
        		if (this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_JUNGONG").substr(0, 6)+"01", this.dsSearch.getColumn(0, "YM_ACCOUNT")+"01") >= 0) {
        			sp = "issueslip";
        		}
        		else {
        			sp = "issueslip2";
        		}
        	}
        	else {
        		sp = "issueslip2";
        	}

        	var strSvcId    = "issueslip";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = sp+"=dsIssueSlip";
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

        this.fnCancelSlip = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))) {
        		this.gfnAlert("발행된 전표가 존재하지 않습니다.");
        		return;
        	}

        // 	if (this.gfnGetDiffDate(this.dsSearch.getColumn(0, "YM_ACCOUNT").substr(0, 6)+"01", this.dsList.getColumn(0, "")+"01") > 0) {
        // 		this.gfnAlert("이미 해당월의 분양수입금관리 자료가 생성되었습니다. 자동전표를 취소할 수 없습니다.");
        // 		return;
        // 	}

        	this.gfnConfirm(" 전표를 취소하시겠습니까?", "fnCancelSlip_callback");
        }

        this.fnCancelSlip_callback = function(strId, val)  {
        	if (!val) return;

        	this.dsCancelSlip.clearData();
        	var nrow = this.dsCancelSlip.addRow();
        	this.dsCancelSlip.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCancelSlip.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsCancelSlip.setColumn(nrow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	this.dsCancelSlip.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));

        	var strSvcId    = "cancelslip";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cancelslip=dsCancelSlip";
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

        this.fnViewSlip = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))) return;

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");
        	param.strYN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHM_PROGAREA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
