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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHZPR_AUTOSLIP_SYSTEM_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHZPR_AUTOSLIP_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHZPR_AUTOSLIP_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHZPR_AUTOSLIP_DELETE</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DHZPR_JOURNAL_SELECT</Col></Row><Row><Col id=\"TARGET\">insertSub</Col><Col id=\"SP\">DHZPR_JOURNAL_INSERT</Col></Row><Row><Col id=\"TARGET\">updateSub</Col><Col id=\"SP\">DHZPR_JOURNAL_UPDATE</Col></Row><Row><Col id=\"TARGET\">deleteSub</Col><Col id=\"SP\">DHZPR_JOURNAL_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SUB_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUB_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SYSTEM\"/><Col id=\"CD_SUB_SYSTEM\"/><Col id=\"DS_SUB_SYSTEM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","9","10","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("시스템코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SYSTEM","staCD_SYSTEM:0","10","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SUB_SYSTEM","ccfCD_SYSTEM:0","10","131","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("서브시스템코드");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SUB_SYSTEM","staCD_SUB_SYSTEM:0","10","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_USE","784","10.0","134","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","35%","-20","5","100.00%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj.getSetter("BeforeUserDataSetParam").set("fnGrid_BeforeUserDataSetParam");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SYSTEM.form.CDTextBox","value","dsSearch","CD_SYSTEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SUB_SYSTEM.form.CDTextBox","value","dsSearch","CD_SUB_SYSTEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_SUB_SYSTEM.form.DSTextBox","value","dsSearch","DS_SUB_SYSTEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.chkYN_USE","value","dsSearch","YN_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHZ_AUTOSLIP.xfdl", function() {
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

        	//this.dsSearch.setColumn(0, "YN_USE", "Y");
        	this.chkYN_USE.set_value("Y");
        	this.FormBtns.Select.click();
        };

        this.fnSetButton = function() {

        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// 서브 버튼 사용
        	this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter);
        }

        this.fnSetExtendButton = function() {

        	//this.btnDetail = this.gfnFormButtonAdd("Detail", "fnDetail");	//, "자동전표분개등록");

        	//this.btnDetail.set_enable(false);
        };

        this.fnSetVariable = function() {
        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;
        	this.ccfCD_SUB_SYSTEM = this.divSearch.form.ccfCD_SUB_SYSTEM;
        	this.chkYN_USE = this.divSearch.form.chkYN_USE;

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHZ_AUTOSLIP");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_CellDblclick, this);
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHZ_JOURNAL");
        	this.dxGridSub.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGridSub.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGridSub.AfterEdit = "fnGridSub_AfterEdit";
        	this.dxGridSub.EnterCell = "fnGridSub_EnterCell";

        	this.ccfCD_SYSTEM.CodeFindName = "DHX_CFSYSTEM";
        	this.ccfCD_SYSTEM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SYSTEM.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_SUB_SYSTEM.CodeFindName = "DHX_CFSUBSYSTEM";
        	this.ccfCD_SUB_SYSTEM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SUB_SYSTEM.AfterCDTextChanged = "fnAfterCDTextChanged";

        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SYSTEM", "string");
        	this.dsSelect.addColumn("YN_USE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_AUTOSLIP", "string");
        	this.dsInsert.addColumn("DS_AUTOSLIP", "string");
        	this.dsInsert.addColumn("YN_AUTOAPPR", "string");
        	this.dsInsert.addColumn("YN_CLOSING", "string");
        	this.dsInsert.addColumn("YN_CHARGE", "string");
        	this.dsInsert.addColumn("YN_BUDGET", "string");
        	this.dsInsert.addColumn("TY_SLIP", "string");
        	this.dsInsert.addColumn("ID_SABUN", "string");
        	this.dsInsert.addColumn("YN_USE", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_AUTOSLIP", "string");
        	this.dsUpdate.addColumn("DS_AUTOSLIP", "string");
        	this.dsUpdate.addColumn("YN_AUTOAPPR", "string");
        	this.dsUpdate.addColumn("YN_CLOSING", "string");
        	this.dsUpdate.addColumn("YN_CHARGE", "string");
        	this.dsUpdate.addColumn("YN_BUDGET", "string");
        	this.dsUpdate.addColumn("TY_SLIP", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("YN_USE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_AUTOSLIP", "string");

            //서브
        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_AUTOSLIP", "string");

        	this.dsInsertSub = new Dataset();
        	this.dsInsertSub.addColumn("CD_AUTOSLIP", "string");
        	this.dsInsertSub.addColumn("NO_TRADE", "string");
        	this.dsInsertSub.addColumn("NO_SLIP", "string");
        	this.dsInsertSub.addColumn("TY_TRADE_IO", "string");
        	this.dsInsertSub.addColumn("YN_COST", "string");
        	this.dsInsertSub.addColumn("CD_ACCOUNT", "string");
        	this.dsInsertSub.addColumn("TY_CRDR", "string");
        	this.dsInsertSub.addColumn("DS_AMOUNT", "string");
        	this.dsInsertSub.addColumn("ID_SABUN", "string");

        	this.dsUpdateSub = new Dataset();
        	this.dsUpdateSub.addColumn("CD_AUTOSLIP", "string");
        	this.dsUpdateSub.addColumn("NO_TRADE", "string");
        	this.dsUpdateSub.addColumn("NO_SLIP_KEY", "string");
        	this.dsUpdateSub.addColumn("NO_SLIP", "string");
        	this.dsUpdateSub.addColumn("TY_TRADE_IO", "string");
        	this.dsUpdateSub.addColumn("YN_COST", "string");
        	this.dsUpdateSub.addColumn("CD_ACCOUNT", "string");
        	this.dsUpdateSub.addColumn("TY_CRDR", "string");
        	this.dsUpdateSub.addColumn("DS_AMOUNT", "string");
        	this.dsUpdateSub.addColumn("ID_SABUN", "string");

        	this.dsDeleteSub = new Dataset();
        	this.dsDeleteSub.addColumn("CD_AUTOSLIP", "string");
        	this.dsDeleteSub.addColumn("NO_TRADE", "string");
        	this.dsDeleteSub.addColumn("NO_SLIP", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	var cd_system = "";
        	if (this.gfnTrim(this.dsSearch.getColumn(0, "CD_SUB_SYSTEM")) != "") {
        		cd_system = this.gfnTrim(this.dsSearch.getColumn(0, "CD_SUB_SYSTEM"));
        	} else {
        		cd_system = this.gfnTrim(this.dsSearch.getColumn(0, "CD_SYSTEM"));
        	}

        	this.dsSelect.setColumn(0, "CD_SYSTEM", cd_system);
        	this.dsSelect.setColumn(0, "YN_USE",  (this.chkYN_USE.value == "Y" ? "Y" : ""));

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
        	if (!this.fnSaveValidation()) return;
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_AUTOSLIP", this.dsList.getColumn(i, "CD_AUTOSLIP"));
        				this.dsInsert.setColumn(nrow, "DS_AUTOSLIP", this.dsList.getColumn(i, "DS_AUTOSLIP"));
        				this.dsInsert.setColumn(nrow, "YN_AUTOAPPR", this.dsList.getColumn(i, "YN_AUTOAPPR"));
        				this.dsInsert.setColumn(nrow, "YN_CLOSING", this.dsList.getColumn(i, "YN_CLOSING"));
        				this.dsInsert.setColumn(nrow, "YN_CHARGE", this.dsList.getColumn(i, "YN_CHARGE"));
        				this.dsInsert.setColumn(nrow, "YN_BUDGET", this.dsList.getColumn(i, "YN_BUDGET"));
        				this.dsInsert.setColumn(nrow, "TY_SLIP", "");
        				this.dsInsert.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_AUTOSLIP", this.dsList.getColumn(i, "CD_AUTOSLIP"));
        				this.dsUpdate.setColumn(nrow, "DS_AUTOSLIP", this.dsList.getColumn(i, "DS_AUTOSLIP"));
        				this.dsUpdate.setColumn(nrow, "YN_AUTOAPPR", this.dsList.getColumn(i, "YN_AUTOAPPR"));
        				this.dsUpdate.setColumn(nrow, "YN_CLOSING", this.dsList.getColumn(i, "YN_CLOSING"));
        				this.dsUpdate.setColumn(nrow, "YN_CHARGE", this.dsList.getColumn(i, "YN_CHARGE"));
        				this.dsUpdate.setColumn(nrow, "YN_BUDGET", this.dsList.getColumn(i, "YN_BUDGET"));
        				this.dsUpdate.setColumn(nrow, "TY_SLIP", "");
        				this.dsUpdate.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_AUTOSLIP", this.dsList.getColumn(i, "CD_AUTOSLIP"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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

        /*
         *	초기화 버튼
         */
        this.fnReset  = function() {
        }

        /************************************************************************
         * 서브 버튼 이벤트 (조회, 입력, 수정, 삭제)
         ************************************************************************/
         this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	//마스터 그리드값  가져오기
        	this.dsListSub.clearData();

        	var CD_AUTOSLIP = this.dsList.getColumn(this.dsList.rowposition, "CD_AUTOSLIP");

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_AUTOSLIP", CD_AUTOSLIP);

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub";
        	var outData     = "dsListSub=selectSub0";
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

        this.fnAddSub = function() {
        	var CD_AUTOSLIP = this.dsList.getColumn(this.dsList.rowposition, "CD_AUTOSLIP");
        	if(this.gfnIsNull(CD_AUTOSLIP)) {
        		this.gfnAlert("자동전표코드를 선택하세요.");
        		return false;
        	}

        	var nrow = this.gfnGridAdd(this.dxGridSub, "bottom", true);

        	var nTradeMax = 1;
        	var nSlipMax = 0;
        	var temp = 0;

        	if (this.dsListSub.rowcount > 0) {
        		for (i = 0; i < this.dsListSub.rowcount; i++) {
        			temp = this.dsListSub.getColumn(i, "NO_TRADE");
        			if (Number(temp) > Number(nTradeMax)) {
        				nTradeMax = temp;
        			}
        		}

        		for (i = 0; i < this.dsListSub.rowcount; i++) {
        			temp = this.dsListSub.getColumn(i, "NO_SLIP");
        			if (nTradeMax == this.dsListSub.getColumn(i, "NO_TRADE") && Number(temp) > Number(nSlipMax)) {
        				nSlipMax = temp;
        			}
        		}
        	}

        	this.dsListSub.setColumn(nrow, "CD_AUTOSLIP", CD_AUTOSLIP);
        	this.dsListSub.setColumn(nrow, "NO_TRADE"	 , nTradeMax);
        	this.dsListSub.setColumn(nrow, "NO_SLIP"	 , Number(nSlipMax)+1);
        	this.dsListSub.setColumn(nrow, "TY_TRADE_IO", "C");	//대체거래
        	this.dsListSub.setColumn(nrow, "YN_COST"    , "N");
        }

        this.fnDelSub = function() {
        	this.gfnGridDel(this.dxGridSub);
        }

        /*
         *	저장 버튼
         */
        this.fnSaveSub = function() {

        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsInsertSub.clearData();
        	this.dsUpdateSub.clearData();
        	this.dsDeleteSub.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);

        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsertSub.addRow();
        				this.dsInsertSub.setColumn(nrow, "CD_AUTOSLIP", this.dsListSub.getColumn(i, "CD_AUTOSLIP"));
        				this.dsInsertSub.setColumn(nrow, "NO_TRADE"   , this.dsListSub.getColumn(i, "NO_TRADE"));
        				this.dsInsertSub.setColumn(nrow, "NO_SLIP"    , this.dsListSub.getColumn(i, "NO_SLIP"));
        				this.dsInsertSub.setColumn(nrow, "TY_TRADE_IO", this.dsListSub.getColumn(i, "TY_TRADE_IO"));
        				this.dsInsertSub.setColumn(nrow, "YN_COST"    , this.dsListSub.getColumn(i, "YN_COST"));
        				this.dsInsertSub.setColumn(nrow, "CD_ACCOUNT" , this.dsListSub.getColumn(i, "CD_ACCOUNT"));
        				this.dsInsertSub.setColumn(nrow, "TY_CRDR"    , this.dsListSub.getColumn(i, "TY_CRDR"));
        				this.dsInsertSub.setColumn(nrow, "DS_AMOUNT"  , this.dsListSub.getColumn(i, "DS_AMOUNT"));
        				this.dsInsertSub.setColumn(nrow, "ID_SABUN"   , this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdateSub.addRow();
        				this.dsUpdateSub.setColumn(nrow, "CD_AUTOSLIP"	, this.dsListSub.getColumn(i, "CD_AUTOSLIP"));
        				this.dsUpdateSub.setColumn(nrow, "NO_TRADE"	, this.dsListSub.getColumn(i, "NO_TRADE"));
        				this.dsUpdateSub.setColumn(nrow, "NO_SLIP_KEY"	, this.dsListSub.getColumn(i, "NO_SLIP_KEY"));
        				this.dsUpdateSub.setColumn(nrow, "NO_SLIP"		, this.dsListSub.getColumn(i, "NO_SLIP"));
        				this.dsUpdateSub.setColumn(nrow, "TY_TRADE_IO" , this.dsListSub.getColumn(i, "TY_TRADE_IO"));
        				this.dsUpdateSub.setColumn(nrow, "YN_COST"		, this.dsListSub.getColumn(i, "YN_COST"));
        				this.dsUpdateSub.setColumn(nrow, "CD_ACCOUNT"	, this.dsListSub.getColumn(i, "CD_ACCOUNT"));
        				this.dsUpdateSub.setColumn(nrow, "TY_CRDR"		, this.dsListSub.getColumn(i, "TY_CRDR"));
        				this.dsUpdateSub.setColumn(nrow, "DS_AMOUNT"	, this.dsListSub.getColumn(i, "DS_AMOUNT"));
        				this.dsUpdateSub.setColumn(nrow, "ID_SABUN"	, this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDeleteSub.addRow();
        				this.dsDeleteSub.setColumn(nrow, "CD_AUTOSLIP", this.dsListSub.getColumn(i, "CD_AUTOSLIP"));
        				this.dsDeleteSub.setColumn(nrow, "NO_TRADE"   , this.dsListSub.getColumn(i, "NO_TRADE"));
        				this.dsDeleteSub.setColumn(nrow, "NO_SLIP"    , this.dsListSub.getColumn(i, "NO_SLIP"));
        				break;
        		}
        	}

        	if (this.dsInsertSub.rowcount == 0 && this.dsUpdateSub.rowcount == 0 && this.dsDeleteSub.rowcount == 0) return;

        	var strSvcId    = "savesub";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insertSub=dsInsertSub updateSub=dsUpdateSub deleteSub=dsDeleteSub";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        /*


        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();
        	this.dsSaveSub.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveSub.addRow();
        				this.dsSaveSub.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSaveSub.setColumn(nrow, "CD_CORP", this.dsListSub.getColumn(i, "CD_CORP"));
        				this.dsSaveSub.setColumn(nrow, "NO_GISU", this.dsListSub.getColumn(i, "NO_GISU"));
        				this.dsSaveSub.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	if (this.dsSaveSub.rowcount == 0) return;

        	var strSvcId    = "savesub";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_save=dsSaveSub";
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
        */
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcelSub = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {

        	return true;
        }

        this.fnSaveValidation = function() {

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		if (this.gfnIsNull(flag) || flag == "D") continue;

        		if (flag == "I" || flag == "U") {
        			for (var j = 0; j < this.dsList.rowcount; j++) {
        				if (j == i) continue;
        				if (this.dsList.getColumn(i, "CD_AUTOSLIP") == this.dsList.getColumn(j, "CD_AUTOSLIP")) {
        					this.gfnAlert("자동전표코드는 중복될수 없습니다.");
        					return false;
        				}
        			}

        			if (this.gfnTrim(this.ccfCD_SYSTEM.form.CDTextBox.value) != "") {
        				if (this.dsList.getColumn(i, "CD_AUTOSLIP").length < 2
        					|| this.dsList.getColumn(i, "CD_AUTOSLIP").substring(0, 2) != this.gfnTrim(this.ccfCD_SYSTEM.form.CDTextBox.value)) {
        					this.gfnAlert("자동전표코드의 시스템코드가 일치하지 않습니다.");
        					return false;
        				}
        			}
        		}
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
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}else if(svcID == "save") {
        		if (errorCode == 0) {
        			if (this.dxGrid.rowcount > 0) {
        				//this.btnDetail.set_enable(true);
        			} else {
        				//this.btnDetail.set_enable(false);
        			}
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}

        	} else if(svcID == "savesub") {
        		if (errorCode == 0) {
        			this.FormBtns.SubSelect.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SUB_SYSTEM") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SYSTEM"))) {
        			this.gfnAlert("시스템코드를 먼저 선택하세요");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SYSTEM", this.ccfCD_SYSTEM.form.CDTextBox.value);
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SYSTEM") {
        		this.dsSearch.setColumn(0, "CD_SUB_SYSTEM", "");
        		this.dsSearch.setColumn(0, "DS_SUB_SYSTEM", "");
        	}
        }

         this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	var rowPos = this.dsList.rowposition;
        //
        // 	switch(id) {
        // 		case "DHX_CFACCOUNT":	//계정코드
        // 			//계정선택시 회계금액명칭 계정명으로 셋팅
        // 			this.dsListSub.setColumn(rowPos, "DS_AMOUNT", arr[0]["DS_ACCOUNT"]);
        // 		break;
        //
        //  	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DHX_CFACCOUNT") {
        		dsUserParam.setColumn(nrow, "YN_SLIP", "");
         	}
        	return true;
        }

        //그리드 더블클릭 이벤트
        this.fnGrid_CellDblclick = function(obj,e) {
        	//this.fnDelail();
        };

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		var flag = this.gfnGetFlag(this.dsList, e.row);
        		if (flag == "I") {
        			this.dsListSub.clearData();
        		}else{
        			this.FormBtns.SubSelect.click();
        		}

        		obj.oldrow = -1;
        	}
        };

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }

        this.fnGridSub_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	if (colnm == "CD_ACCOUNT") {
        		// YN_COST(원가코드여부) : Y:비목|N:계정
        		var YN_COST = this.dsListSub.getColumn(row, "YN_COST");
        		var CD_CODEFIND = (YN_COST == "Y") ? "DHX_CFBIMOK" : "DHX_CFACNT_YNSLIP";
        		var NM_CODEFIND = (YN_COST == "Y") ? "DHX_CFBIMOK" : "DHX_CFACCOUNT";
        		var CD_RESULTALIAS = (YN_COST == "Y") ? "CD_BIMOK" : "CD_ACCOUNT";
        		var DS_RESULTALIAS = (YN_COST == "Y") ? "DS_BIMOK" : "DS_ACCOUNT";

        		this.dxGridSub.usCodefindInfo["CD_ACCOUNT"].CD_CODEFIND = CD_CODEFIND;			// CODEFIND 관리ID
        		this.dxGridSub.usCodefindInfo["CD_ACCOUNT"].NM_CODEFIND = NM_CODEFIND;			// CODEFIND 식별ID
        		this.dxGridSub.usCodefindInfo["CD_ACCOUNT"].DS_RESULTALIAS = CD_RESULTALIAS;	// CODEFIND 결과ALIAS

        		this.dxGridSub.usCodefindInfo["DS_ACCOUNT"].CD_CODEFIND = CD_CODEFIND;
        		this.dxGridSub.usCodefindInfo["DS_ACCOUNT"].NM_CODEFIND = NM_CODEFIND;
        		this.dxGridSub.usCodefindInfo["DS_ACCOUNT"].DS_RESULTALIAS = DS_RESULTALIAS;
        	}
        }

        this.fnGridSub_AfterEdit = function(obj,e) {
        	if(e.columnid == "YN_COST") {
        		// 원가코드여부 변경시 계정코드 초기화
        		if(e.oldvalue != e.newvalue) {
        			obj.setColumn(obj.rowposition, "CD_ACCOUNT", "");
        			obj.setColumn(obj.rowposition, "DS_ACCOUNT", "");
        		}
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);

        		//this.btnDetail.set_enable(false);
        	}
        };

        this.fnDetail = function() {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};
        	param.CD_AUTOSLIP = this.dsList.getColumn(this.dsList.rowposition, "CD_AUTOSLIP");
        	param.DS_AUTOSLIP = this.dsList.getColumn(this.dsList.rowposition, "DS_AUTOSLIP");

        	this.gfnFormOpen("DHZ", "DHZ_JOURNAL", "", param);
        }

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_SYSTEM.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_SUB_SYSTEM.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.objGridSub.addEventHandler("oncellclick",this.divData_divDataRight_objGridSub_oncellclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHZ_AUTOSLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
