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
            this.set_titletext("자동전표 코드등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRCPR_AUTORECEIPT_BATCH_SELECT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DRCPR_AUTORECEIPT_DELETE</Col></Row><Row><Col id=\"TARGET\">batch</Col><Col id=\"SP\">DRCPR_FBS_AUTORECEIPT_MIGRATION</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RECEIPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"DS_ACNTUNIT\"/><Col id=\"DT_START\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_RECEIPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미수납건</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">수납건</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PERIOD","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("입금기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_START","staCD_PERIOD:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_PERIOD_TIL","ctclDT_START:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_END","staDT_PERIOD_TIL:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_RECEIPT","ctclDT_END:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsYN_RECEIPT");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","15",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_END","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboYN_RECEIPT","value","dsSearch","YN_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRC_RECEIPTBATCH.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "DT_START", this.gfnGetDate());
        	this.dsSearch.setColumn(0, "DT_END", this.gfnGetDate());
        	this.dsSearch.setColumn(0, "YN_RECEIPT", "N");
        };

        this.fnSetButton = function() {
        }

        this.fnSetExtendButton = function() {
        	this.btnBatchReceipt = this.gfnFormButtonAdd("BatchReceipt", "fnBatchReceipt");
        	this.btnReceiptDetail = this.gfnFormButtonAdd("ReceiptDetail", "fnReceiptDetail");
        	this.btnReceiptExcel = this.gfnFormButtonAdd("ReceiptExcel", "fnReceiptExcel");
        };

        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.ctclDT_START = this.divSearch.form.ctclDT_START;
        	this.ctclDT_END = this.divSearch.form.ctclDT_END;
        	this.ccboYN_RECEIPT = this.divSearch.form.ccboYN_RECEIPT;

        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRC_RECEIPTBATCH");

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("DT_START", "string");
        	this.dsSelect.addColumn("DT_END", "string");
        	this.dsSelect.addColumn("YN_OPTION", "string");
        	this.dsSelect.addColumn("YN_CHKRECEIPT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "string");
        	this.dsUpdate.addColumn("DT_RECEIPT", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("DS_CONTRACTOR", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_SEQ", "string");
        	this.dsDelete.addColumn("DT_RECEIPT", "string");
        	this.dsDelete.addColumn("ID_INSERT", "string");

        	this.dsBatch = new Dataset();
        	this.dsBatch.addColumn("CD_ACNTUNIT", "string");
        	this.dsBatch.addColumn("TY_GUBUN", "string");
        	this.dsBatch.addColumn("NO_CHASU", "string");
        	this.dsBatch.addColumn("DT_RECEIVED", "string");
        	this.dsBatch.addColumn("NO_SEQ", "string");
        	this.dsBatch.addColumn("YN_OPTION", "string");
        	this.dsBatch.addColumn("ID_INSERT", "string");
        	this.dsBatch.addColumn("NO_CONTRACT", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "DT_START", this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSelect.setColumn(0, "DT_END", this.dsSearch.getColumn(0, "DT_END"));
        	this.dsSelect.setColumn(0, "YN_OPTION", "N");
        	this.dsSelect.setColumn(0, "YN_CHKRECEIPT", this.dsSearch.getColumn(0, "YN_RECEIPT"));

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

        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid, "top");
        }

        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(i, "NO_CHASU"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsDelete.setColumn(nrow, "DT_RECEIPT", nexacro.replaceAll(this.dsList.getColumn(i, "DT_RECEIPT"), "-", ""));
        				this.dsDelete.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드가 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_START"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_START.setFocus();
        		}
        		this.gfnAlert("입금기간(FROM)이 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_END"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_END.setFocus();
        		}
        		this.gfnAlert("입금기간(TO)이 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	if (this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_START"), this.dsSearch.getColumn(0, "DT_END")) < 0) {
        		this.gfnAlert("입금기간(TO)은 입금기간(FROM)보다 크거나 같아야 합니다.");
        	}
        	return validate;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.FormBtns.Del.set_enable(this.dsSearch.getColumn(0, "YN_RECEIPT") == "N");
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "batch") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
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
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}

        	return true;
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnBatchReceipt = function() {
        	if (!this.fnSelectValidation()) return;

        	if (this.dsList.findRow("CHK", 1) < 0){
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return;
        	}

        	var arrChk = [];
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			arrChk.push(i);
        		}
        	}

        	for (var i = 0; i < arrChk.length; i++) {
        		if (!this.gfnIsNull(this.gfnGetFlag(this.dsList, arrChk[i]))) {
        			this.gfnAlert("편집작업을 완료하고 난 후 진행하여 주십시오!");
        			return;
        		}
        	}

        	this.dsBatch.clearData();
        	for (var i = 0; i < arrChk.length; i++) {
        		var r = arrChk[i];

        		var nrow = this.dsBatch.addRow();
        		this.dsBatch.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        		this.dsBatch.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        		this.dsBatch.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        		this.dsBatch.setColumn(nrow, "DT_RECEIVED", nexacro.replaceAll(this.dsList.getColumn(r, "DT_RECEIPT"), "-", ""));
        		this.dsBatch.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(r, "NO_SEQ"));
        		this.dsBatch.setColumn(nrow, "YN_OPTION", "N");
        		this.dsBatch.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        		this.dsBatch.setColumn(nrow, "NO_CONTRACT", "");
        	}

        	if (this.dsBatch.rowcount == 0) return;

        	var strSvcId    = "batch";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "batch=dsBatch";
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

        this.fnReceiptDetail = function() {
        	if (!this.fnSelectValidation()) return;

        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return;
        	}

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if (!this.gfnIsNull(this.gfnGetFlag(this.dsList, i))) {
        			this.gfnAlert("편집작업을 완료하고 난 후 진행하여 주십시오!");
        			return;
        		}
        	}

        	var hosu = this.dsList.getColumn(this.dsList.rowposition, "HOSU");
        	if (!(hosu.length == 3 || hosu.length == 4)) {
        		return;
        	}

        	var floor = hosu.substr(0, hosu.length - 2).padLeft(2, "0");
        	var ho = hosu.substr(hosu.length - 2, 2).padLeft(3, "0");

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_DONG = this.dsList.getColumn(this.dsList.rowposition, "NO_DONG");
        	param.NO_FLOOR = floor;
        	param.NO_HO = ho;
        	param.NO_UNIONMEMBER = this.dsList.getColumn(this.dsList.rowposition, "NO_UNIONMEMBER");
        	param.DS_CONTRACTOR = this.dsList.getColumn(this.dsList.rowposition, "DS_CONTRACTOR");

        	this.gfnFormOpen("DRC", "DRC_RECEIPTDETAIL", "fnPopupCallback", param);
        }

        this.fnReceiptExcel = function() {
        	if (!this.fnSelectValidation()) return;

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if (!this.gfnIsNull(this.gfnGetFlag(this.dsList, i))) {
        			this.gfnAlert("편집작업을 완료하고 난 후 진행하여 주십시오!");
        			return;
        		}
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.DT_FROM = this.dsSearch.getColumn(0, "DT_START");
        	param.DT_TO = this.dsSearch.getColumn(0, "DT_END");
        	param.YN_OPTION = "N";

        	this.gfnFormOpen("DRC", "DRC_RECEIPTBATCHEXCEL_NEW", "fnPopupCallback", param);
        }

        this.fnPopupCallback = function(svcID, val) {
        	this.FormBtns.Select.click();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRC_RECEIPTBATCH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
