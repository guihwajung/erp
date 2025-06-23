(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWA_SILHENG");
            this.set_titletext("출역 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSKPR_VENDOR_USER_MONTH_WORK_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DSKPR_VENDOR_USER_MONTH_WORK_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"CD_VENDOR\"/><Col id=\"YM_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장/부서 코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("CodeFindName").set("DZX_CFDEPTCORP");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","ccfCD_SITE:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staYY_WORK:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("CodeFindName").set("DSX_CFVENDOR");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","ccfCD_VENDOR:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("출역일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("tclYM_WORK","staDT_WORK:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_LICCOST","tclYM_WORK:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("공종코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_LICCOST","staCD_LICCOST:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFLICCOST_ALL");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("7");
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
            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.tclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_LICCOST.form.CDTextBox","value","dsSearch","CD_COST");
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
        this.registerScript("DSK_VENDOR_USER_MONTH_WORK.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWA_SILHENG_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YM_WORK", today.substring(0, 6));

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.ccfCD_LICCOST = this.divSearch.form.ccfCD_LICCOST;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSK_VENDOR_USER_MONTH_WORK");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("DS_SITE", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("DS_VENDOR", "string");
        	this.dsSave.addColumn("NO_PO", "string");
        	this.dsSave.addColumn("NO_ID", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("DT_01", "bigdecimal");
        	this.dsSave.addColumn("DT_02", "bigdecimal");
        	this.dsSave.addColumn("DT_03", "bigdecimal");
        	this.dsSave.addColumn("DT_04", "bigdecimal");
        	this.dsSave.addColumn("DT_05", "bigdecimal");
        	this.dsSave.addColumn("DT_06", "bigdecimal");
        	this.dsSave.addColumn("DT_07", "bigdecimal");
        	this.dsSave.addColumn("DT_08", "bigdecimal");
        	this.dsSave.addColumn("DT_09", "bigdecimal");
        	this.dsSave.addColumn("DT_10", "bigdecimal");
        	this.dsSave.addColumn("DT_11", "bigdecimal");
        	this.dsSave.addColumn("DT_12", "bigdecimal");
        	this.dsSave.addColumn("DT_13", "bigdecimal");
        	this.dsSave.addColumn("DT_14", "bigdecimal");
        	this.dsSave.addColumn("DT_15", "bigdecimal");
        	this.dsSave.addColumn("DT_16", "bigdecimal");
        	this.dsSave.addColumn("DT_17", "bigdecimal");
        	this.dsSave.addColumn("DT_18", "bigdecimal");
        	this.dsSave.addColumn("DT_19", "bigdecimal");
        	this.dsSave.addColumn("DT_20", "bigdecimal");
        	this.dsSave.addColumn("DT_21", "bigdecimal");
        	this.dsSave.addColumn("DT_22", "bigdecimal");
        	this.dsSave.addColumn("DT_23", "bigdecimal");
        	this.dsSave.addColumn("DT_24", "bigdecimal");
        	this.dsSave.addColumn("DT_25", "bigdecimal");
        	this.dsSave.addColumn("DT_26", "bigdecimal");
        	this.dsSave.addColumn("DT_27", "bigdecimal");
        	this.dsSave.addColumn("DT_28", "bigdecimal");
        	this.dsSave.addColumn("DT_29", "bigdecimal");
        	this.dsSave.addColumn("DT_30", "bigdecimal");
        	this.dsSave.addColumn("DT_31", "bigdecimal");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();

        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
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
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))){
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctlYM_WORK.setFocus();
        		}
        		this.gfnAlert("출역일자는 필수입력 값입니다.", "fnVaidateCallback");
        		return false;
        	}

        	this.dsSave.clearData();
        	for(var i = 0;i<this.dsList.rowcount;i++){
        		var nrow = this.dsSave.addRow();
        		this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        		this.dsSave.setColumn(nrow, "DS_SITE", this.dsList.getColumn(i, "DS_SITE"));
        		this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        		this.dsSave.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        		this.dsSave.setColumn(nrow, "NO_PO", this.dsList.getColumn(i, "NO_PO"));
        		this.dsSave.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        		this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));

        		this.dsSave.setColumn(nrow, "DT_01", this.dsList.getColumn(i, "DT_01"));
        		this.dsSave.setColumn(nrow, "DT_02", this.dsList.getColumn(i, "DT_02"));
        		this.dsSave.setColumn(nrow, "DT_03", this.dsList.getColumn(i, "DT_03"));
        		this.dsSave.setColumn(nrow, "DT_04", this.dsList.getColumn(i, "DT_04"));
        		this.dsSave.setColumn(nrow, "DT_05", this.dsList.getColumn(i, "DT_05"));
        		this.dsSave.setColumn(nrow, "DT_06", this.dsList.getColumn(i, "DT_06"));
        		this.dsSave.setColumn(nrow, "DT_07", this.dsList.getColumn(i, "DT_07"));
        		this.dsSave.setColumn(nrow, "DT_08", this.dsList.getColumn(i, "DT_08"));
        		this.dsSave.setColumn(nrow, "DT_09", this.dsList.getColumn(i, "DT_09"));
        		this.dsSave.setColumn(nrow, "DT_10", this.dsList.getColumn(i, "DT_10"));
        		this.dsSave.setColumn(nrow, "DT_11", this.dsList.getColumn(i, "DT_11"));
        		this.dsSave.setColumn(nrow, "DT_12", this.dsList.getColumn(i, "DT_12"));
        		this.dsSave.setColumn(nrow, "DT_13", this.dsList.getColumn(i, "DT_13"));
        		this.dsSave.setColumn(nrow, "DT_14", this.dsList.getColumn(i, "DT_14"));
        		this.dsSave.setColumn(nrow, "DT_15", this.dsList.getColumn(i, "DT_15"));
        		this.dsSave.setColumn(nrow, "DT_16", this.dsList.getColumn(i, "DT_16"));
        		this.dsSave.setColumn(nrow, "DT_17", this.dsList.getColumn(i, "DT_17"));
        		this.dsSave.setColumn(nrow, "DT_18", this.dsList.getColumn(i, "DT_18"));
        		this.dsSave.setColumn(nrow, "DT_19", this.dsList.getColumn(i, "DT_19"));
        		this.dsSave.setColumn(nrow, "DT_20", this.dsList.getColumn(i, "DT_20"));
        		this.dsSave.setColumn(nrow, "DT_21", this.dsList.getColumn(i, "DT_21"));
        		this.dsSave.setColumn(nrow, "DT_22", this.dsList.getColumn(i, "DT_22"));
        		this.dsSave.setColumn(nrow, "DT_23", this.dsList.getColumn(i, "DT_23"));
        		this.dsSave.setColumn(nrow, "DT_24", this.dsList.getColumn(i, "DT_24"));
        		this.dsSave.setColumn(nrow, "DT_25", this.dsList.getColumn(i, "DT_25"));
        		this.dsSave.setColumn(nrow, "DT_26", this.dsList.getColumn(i, "DT_26"));
        		this.dsSave.setColumn(nrow, "DT_27", this.dsList.getColumn(i, "DT_27"));
        		this.dsSave.setColumn(nrow, "DT_28", this.dsList.getColumn(i, "DT_28"));
        		this.dsSave.setColumn(nrow, "DT_29", this.dsList.getColumn(i, "DT_29"));
        		this.dsSave.setColumn(nrow, "DT_30", this.dsList.getColumn(i, "DT_30"));
        		this.dsSave.setColumn(nrow, "DT_31", this.dsList.getColumn(i, "DT_31"));
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
        };

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
        this.fnValidate = function() {
        	if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 필수입력 값입니다.", "fnVaidateCallback");
        		return false;
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))){
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctlYM_WORK.setFocus();
        		}
        		this.gfnAlert("출역일자는 필수입력 값입니다.", "fnVaidateCallback");
        		return false;
        	}

        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "select") {

        		if(this.dsList.rowcount > 0){
        			var DT_MAX_DAY = this.dsList.getColumn(0, "DT_MAX_DAY");

        			// 31일 까지 cell크기 원상태로.
        			for(var i = 0; i < 3; i++){
        				var idx = this.dxGrid.getBindCellIndex("body", "DT_" + (31 - i));
        				this.dxGrid.setFormatColProperty(idx, "size", 40);
        			}

        			// DT_MAX_DAY 기준 cell 크기 계산.
        			if(DT_MAX_DAY < 31){
        				var DT_DAY = 31 - DT_MAX_DAY;
        				for(var i = 0; i < DT_DAY; i++){
        					var idx = this.dxGrid.getBindCellIndex("body", "DT_" + (31 - i));
        					this.dxGrid.setFormatColProperty(idx, "size", 0);
        				}
        			}
        		}

        		this.gfnGridAfterSelect(this.dxGrid);
        	}else if(svcID == "save") {
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

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
        	}else if(id == "ccfCD_VENDOR"){
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))){
        			this.gfnAlert("현장코드를 입력해 주십시요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 초기화
        		this.ccfCD_VENDOR.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if(e.columnid == "CN_WORK"){
        			if(e.newvalue != "0"){
        				this.dsList.setColumn(e.row, "TY_WORK", "1");
        			}else{
        				this.dsList.setColumn(e.row, "TY_WORK", "0");
        			}
        		}else if(e.columnid == "TY_WORK"){
        			if(e.newvalue == "1"){
        				this.dsList.setColumn(e.row, "CN_WORK", 1);
        			}else{
        				this.dsList.setColumn(e.row, "CN_WORK", 0);
        			}
        		}

        		if(e.columnid == "CN_WORK" || e.columnid == "TY_WORK" || e.columnid == "AM_DANGA"){
        			this.dsList.setColumn(e.row, "AM_TOTAL", this.dsList.getColumn(e.row, "CN_WORK") * this.dsList.getColumn(e.row, "AM_DANGA"));
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSK_VENDOR_USER_MONTH_WORK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
