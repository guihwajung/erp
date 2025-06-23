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
            this.set_titletext("작업허가서 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWGPR_RISKWORK_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWGPR_RISKWORK_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_WORK_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_WORK", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_START","ccfCD_SITE:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("시작일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_START","staDT_START:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_END","ctclDT_START:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("종료일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_END","staDT_END:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ctclDT_END:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("작업허가서 종류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_WORK","sta01:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_WORK");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_START","value","dsSearch","DT_WORK_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_END","value","dsSearch","DT_WORK_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboTY_WORK","value","dsSearch","TY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWG_RISKWORK_LIST.xfdl", function() {
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


        };

        this.fnSetButton = function() {
        }

        this.fnSetExtendButton = function() {
        	this.btnRiskWork = this.gfnFormButtonAdd("btn_RiskWork", "fnRiskWork");
        	//this.btnReceiptDetail = this.gfnFormButtonAdd("ReceiptDetail", "fnReceiptDetail");
        	//this.btnReceiptExcel = this.gfnFormButtonAdd("ReceiptExcel", "fnReceiptExcel");
        };

        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclDT_START = this.divSearch.form.ctclDT_START;
        	this.ctclDT_END = this.divSearch.form.ctclDT_END;
        	this.ccboTY_WORK = this.divSearch.form.ccboTY_WORK;

        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWG_RISKWORK_LIST");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	//var today = this.gfnGetDate();

        	//var sDate = today.substr(0,6);

        	//this.dsSearch.setColumn(0, "DT_WORK_FR", this.gfnGetFirstDate(sDate));
        	//this.dsSearch.setColumn(0, "DT_WORK_TO", this.gfnGetLastDate(sDate));
        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("TY_WORK", "string");
        	this.dsSelect.addColumn("DT_WORK_FR", "string");
        	this.dsSelect.addColumn("DT_WORK_TO", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("TY_WORK", "string");
        	this.dsSave.addColumn("DS_WRITER", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("DS_VENDOR", "string");
        	this.dsSave.addColumn("DS_GONGJONG", "string");
        	this.dsSave.addColumn("DS_WORKAREA", "string");
        	this.dsSave.addColumn("DT_WORKTIME_FR", "string");
        	this.dsSave.addColumn("DT_WORKTIME_TO", "string");
        	this.dsSave.addColumn("DT_WORKTIMEHHMM_FR", "string");
        	this.dsSave.addColumn("DT_WORKTIMEHHMM_TO", "string");
        	this.dsSave.addColumn("NO_WORKER", "int");
        	this.dsSave.addColumn("DS_MANAGER", "string");
        	this.dsSave.addColumn("DS_MANAGER_TEL", "string");
        	this.dsSave.addColumn("DS_WORKDEVICE", "string");
        	this.dsSave.addColumn("DS_WORKCONTENT", "string");
        	this.dsSave.addColumn("DS_WORKSAFE", "string");
        	this.dsSave.addColumn("DS_APPROVALGONGSA", "string");
        	this.dsSave.addColumn("DS_APPROVALSAFER", "string");
        	this.dsSave.addColumn("TY_APPROVAL", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	//if (!this.fnSelectValidation()) return;

        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "TY_WORK", this.dsSearch.getColumn(0, "TY_WORK"));
        	this.dsSelect.setColumn(0, "DT_WORK_FR", this.dsSearch.getColumn(0, "DT_WORK_FR"));
        	this.dsSelect.setColumn(0, "DT_WORK_TO", this.dsSearch.getColumn(0, "DT_WORK_TO"));

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
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	// save SP 한개로 사용하는 경우
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "TY_WORK", this.dsList.getColumn(i, "TY_WORK"));
        				this.dsSave.setColumn(nrow, "DS_WRITER", this.dsList.getColumn(i, "DS_WRITER"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsSave.setColumn(nrow, "DS_GONGJONG", this.dsList.getColumn(i, "DS_GONGJONG"));
        				this.dsSave.setColumn(nrow, "DS_WORKAREA", this.dsList.getColumn(i, "DS_WORKAREA"));
        				this.dsSave.setColumn(nrow, "DT_WORKTIME_FR", this.dsList.getColumn(i, "DT_WORKTIME_FR"));
        				this.dsSave.setColumn(nrow, "DT_WORKTIME_TO", this.dsList.getColumn(i, "DT_WORKTIME_TO"));
        				this.dsSave.setColumn(nrow, "DT_WORKTIMEHHMM_FR", this.dsList.getColumn(i, "DT_WORKTIMEHHMM_FR"));
        				this.dsSave.setColumn(nrow, "DT_WORKTIMEHHMM_TO", this.dsList.getColumn(i, "DT_WORKTIMEHHMM_TO"));
        				this.dsSave.setColumn(nrow, "NO_WORKER", this.dsList.getColumn(i, "NO_WORKER"));
        				this.dsSave.setColumn(nrow, "DS_MANAGER", this.dsList.getColumn(i, "DS_MANAGER"));
        				this.dsSave.setColumn(nrow, "DS_MANAGER_TEL", this.dsList.getColumn(i, "DS_MANAGER_TEL"));
        				this.dsSave.setColumn(nrow, "DS_WORKDEVICE", this.dsList.getColumn(i, "DS_WORKDEVICE"));
        				this.dsSave.setColumn(nrow, "DS_WORKCONTENT", this.dsList.getColumn(i, "DS_WORKCONTENT"));
        				this.dsSave.setColumn(nrow, "DS_WORKSAFE", this.dsList.getColumn(i, "DS_WORKSAFE"));
        				this.dsSave.setColumn(nrow, "DS_APPROVALGONGSA", this.dsList.getColumn(i, "DS_APPROVALGONGSA"));
        				this.dsSave.setColumn(nrow, "DS_APPROVALSAFER", this.dsList.getColumn(i, "DS_APPROVALSAFER"));
        				this.dsSave.setColumn(nrow, "TY_APPROVAL", this.dsList.getColumn(i, "TY_APPROVAL"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {

        }

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DW");
        	this.dsCombo.setColumn(0, "CD_TYPE", "R10");



        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_WORK=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        };


        /************************************************************************
         * Validate
         ************************************************************************/
         /*
        this.fnSelectValidation = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드가 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_WORK_FR"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_START.setFocus();
        		}
        		this.gfnAlert("시작일이 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_WORK_TO"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_END.setFocus();
        		}
        		this.gfnAlert("종료일이 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	if (this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_WORK_FR"), this.dsSearch.getColumn(0, "DT_WORK_TO")) < 0) {
        		this.gfnAlert("종료일은 시작일보다 크거나 같아야 합니다.");
        	}
        	return validate;
        }
        */
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select") {

        		this.gfnGridAfterSelect(this.dxGrid);

        		//this.FormBtns.Del.set_enable(this.dsSearch.getColumn(0, "YN_RECEIPT") == "N");
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo") {
        		if (errorCode == 0) {
        			var nrow = this.dsTY_WORK.addRow();
        			this.dsTY_WORK.setColumn(nrow, "CD_CODE", "");
        			this.dsTY_WORK.setColumn(nrow, "DS_CODE", "전체");
        		}
        		else {
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
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "DZX_CFSITE")
        	{
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
         		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT)
         		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
         		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

             var arr = codeFindData;
        	 if (id == "DZX_CFSITE") {
        	    if (arr.length > 0) {
        		    this.dsList.setColumn(this.dsList.rowposition, "CD_SITE", arr[0]["CD_SITE"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_SITE", arr[0]["DS_SITE"]);


        		}
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnRiskWork = function(obj,e){

            var param = {};
        	var nRow = this.dsList.rowposition;

        	param.CD_SITE = this.dsList.getColumn(nRow, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(nRow, "DS_SITE");
            param.NO_SEQ = this.dsList.getColumn(nRow, "NO_SEQ");
        	param.TY_WORK = this.dsSearch.getColumn(0, "TY_WORK");
        	//param.DS_WORK = this.dsSearch.getColumn(0, "DS_WORK");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWG_RISKWORK_1", "fnRiskWorkCallback", param);

        }

        this.fnRiskWorkCallback =  function(svcID, val) {

        	if(val != false) {
        		this.FormBtns.Select.click();
        	}
        };

        this.divSearch_staDT_START_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsTY_WORK.addEventHandler("onvaluechanged",this.dsTY_WORK_onvaluechanged,this);
        };
        this.loadIncludeScript("DWG_RISKWORK_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
