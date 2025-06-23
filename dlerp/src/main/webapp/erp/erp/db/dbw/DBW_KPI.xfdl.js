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
            obj = new Dataset("dsTable", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBWPR_KPI_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBWPR_KPI_SAVE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DBWPR_KPI_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","staDT_FROM:0.0","staDT_FROM:10.0",null,"110.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staDT","0.0","10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta69","0.0","staDT:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","sta69:0.0","staDT:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","ctclDT_FROM:0.0","staDT:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("자료생성기준일");
            obj.set_textDecoration("none");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORK","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_visible("true");
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
            obj = new BindItem("item0","divSearch.form.ctclDT_WORK","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_TO_JOBEND","value","dsSearch","TO_JOBEND");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DBW_KPI.xfdl", function() {
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

        	//this.dsSearch.setColumn(0, "DT_WORK", this.gfnGetDate());

        	//this.FormBtns.Select.click();
        };

        this.fnSetButton = function() {
        }

        this.fnSetExtendButton = function() {
        	this.btnCreate = this.gfnFormButtonAdd("Create", "fnCreate");
        	//this.btnHadoState = this.gfnFormButtonAdd("HadoState", "fnHadoState");
        };

        this.fnSetVariable = function() {
        	this.ctclDT_WORK = this.divSearch.form.ctclDT_WORK;

        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBW_KPI");

         	this.gfnGridColumnColor(this.dxGrid, "", "Red", "DS_GUBUN=='KPI실적'", true);
        	this.dxGrid.addEventHandler("oncellclick", this.fnGrid_oncellclick, this);
        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("DT_WORK", "string");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("CT_JEOBSU", "bigdecimal");
        	this.dsUpdate.addColumn("CT_JANGI", "bigdecimal");
        	this.dsUpdate.addColumn("CT_JANGI_OLD", "bigdecimal");
        	this.dsUpdate.addColumn("CT_WEEK_JEOBSU", "bigdecimal");
        	this.dsUpdate.addColumn("CT_WEEK_END", "bigdecimal");
        	this.dsUpdate.addColumn("NO_SCORE", "bigdecimal");
        	this.dsUpdate.addColumn("NO_AVG", "bigdecimal");
        	this.dsUpdate.addColumn("CT_JEOBSU_DAY", "bigdecimal");
        	this.dsUpdate.addColumn("CT_JOBEND_DAY", "bigdecimal");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("DT_WORK", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnAdd = function() {
        }

        this.fnDel = function() {
        }

        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "DT_WORK", this.dsList.getColumn(i, "DT_WORK"));
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "CT_JEOBSU", this.dsList.getColumn(i, "CT_JEOBSU"));
        				this.dsUpdate.setColumn(nrow, "CT_JANGI", this.dsList.getColumn(i, "CT_JANGI"));
        				this.dsUpdate.setColumn(nrow, "CT_JANGI_OLD", this.dsList.getColumn(i, "CT_JANGI_OLD"));
        				this.dsUpdate.setColumn(nrow, "CT_WEEK_JEOBSU", this.dsList.getColumn(i, "CT_WEEK_JEOBSU"));
        				this.dsUpdate.setColumn(nrow, "CT_WEEK_END", this.dsList.getColumn(i, "CT_WEEK_END"));
        				this.dsUpdate.setColumn(nrow, "NO_SCORE", this.dsList.getColumn(i, "NO_SCORE"));
        				this.dsUpdate.setColumn(nrow, "NO_AVG", this.dsList.getColumn(i, "NO_AVG"));
        				this.dsUpdate.setColumn(nrow, "CT_JEOBSU_DAY", this.dsList.getColumn(i, "CT_JEOBSU_DAY"));
        				this.dsUpdate.setColumn(nrow, "CT_JOBEND_DAY", this.dsList.getColumn(i, "CT_JOBEND_DAY"));
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) && this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_FROM.setFocus();
        		}
        		this.gfnAlert("기간이 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if (this.dsList.rowcount > 0) {
        			this.btnHadoState.set_enable(true);
        		}
        		else {
        			this.btnHadoState.set_enable(false);
        		}
        	}
        	else if (svcID == "save") {
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		if(e.columnid == "DT_FROM" || e.columnid == "DT_TO"){
        			this.gfnSetFormStatus(this);	// 폼상태 초기화
        			this.gfnGridClear(this.dxGrid);
        		}
        	}

        // 	if (e.oldvalue != e.newvalue) {
        // 		this.gfnSetFormStatus(this);	// 폼상태 초기화
        // 		this.gfnGridClear(this.dxGrid);
        // 	}
        };

        this.fnCreate = function() {
        	this.gfnConfirm("기존 자료가 있는 경우 삭제하고 재생성합니다.\n생성하시겠습니까?", "fnCreate_callback");
        }

        this.fnCreate_callback = function(strID, val) {
        	if (!val) return;

        	this.dsCreate.clearData();

        	var nrow = this.dsCreate.addRow();
        	this.dsCreate.setColumn(nrow, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK"));

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
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

        this.fnHadoState = function() {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        	param.DT_TO = this.dsSearch.getColumn(0, "DT_WORK");

        	this.gfnFormOpen("DBT", "DBT_HADOSTATESITE", "", param);
        }

        this.fnGrid_oncellclick = function(obj,e)
        {

        	if(this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "DS_SITE"){
        	    this.fnHadoState();
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DBW_KPI.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
