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
            this.set_titletext("Data 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">entity</Col><Col id=\"SP\">DZZPR_ENTITY_SELECT</Col></Row><Row><Col id=\"TARGET\">attribute</Col><Col id=\"SP\">DZZPR_ATTRIBUTE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEntity", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAttribute", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColumn", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_ENTITY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ATTRIBUTE\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ATTRIBUTE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DUPLICATION\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SUMMARY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">선택</Col><Col id=\"CD_SYSTEM\">D</Col></Row><Row><Col id=\"CODE\">DAAT_BASEINFO</Col><Col id=\"NAME\">사원정보</Col><Col id=\"CD_SYSTEM\">DA</Col></Row><Row><Col id=\"CD_SYSTEM\">DH</Col><Col id=\"CODE\">DHAT_SLIPHEADER</Col><Col id=\"NAME\">전표테이블</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondition", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_ENTITY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ATTRIBUTE\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ATTRIBUTE\" type=\"STRING\" size=\"256\"/><Column id=\"VAL_ATTRIBUTE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","10","10","40","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("시스템");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SYSTEM","60","10","150","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DZX_CFSYSTEM");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNM_DAM","ccfCD_SYSTEM:20","10","70","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회기준");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_BAS","staNM_DAM:20","10","80","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0","230",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Tab("tabData","objGrid:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.divData.form.tabData);
            obj.set_text("검색조건");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divGrid1","20","20","450",null,null,"20",null,null,null,null,this.divData.form.tabData.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("divGrid1");
            this.divData.form.tabData.Tabpage1.addChild(obj.name, obj);

            obj = new GroupBox("grb00","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.Tabpage1.form.divGrid1.form);
            obj.set_taborder("0");
            obj.set_text("선택가능항목");
            this.divData.form.tabData.Tabpage1.form.divGrid1.addChild(obj.name, obj);

            obj = new Grid("objGrid01","10","20",null,null,"230","10",null,null,null,null,this.divData.form.tabData.Tabpage1.form.divGrid1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.Tabpage1.form.divGrid1.addChild(obj.name, obj);

            obj = new Grid("objGrid02","objGrid01:10","20",null,null,"10","10",null,null,null,null,this.divData.form.tabData.Tabpage1.form.divGrid1.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.tabData.Tabpage1.form.divGrid1.addChild(obj.name, obj);

            obj = new Div("divButton","divGrid1:10","20","50",null,null,"20",null,null,null,null,this.divData.form.tabData.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("divButton");
            this.divData.form.tabData.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnAddR01","11","107","28","27",null,null,null,null,null,null,this.divData.form.tabData.Tabpage1.form.divButton.form);
            obj.set_taborder("0");
            obj.set_text(">>");
            this.divData.form.tabData.Tabpage1.form.divButton.addChild(obj.name, obj);

            obj = new Button("btnAddL01","11","btnAddR01:10","28","27",null,null,null,null,null,null,this.divData.form.tabData.Tabpage1.form.divButton.form);
            obj.set_taborder("1");
            obj.set_text("<<");
            this.divData.form.tabData.Tabpage1.form.divButton.addChild(obj.name, obj);

            obj = new Button("btnAddR02","11","396","28","27",null,null,null,null,null,null,this.divData.form.tabData.Tabpage1.form.divButton.form);
            obj.set_taborder("2");
            obj.set_text(">>");
            this.divData.form.tabData.Tabpage1.form.divButton.addChild(obj.name, obj);

            obj = new Button("btnAddL02","11","btnAddR02:10","28","27",null,null,null,null,null,null,this.divData.form.tabData.Tabpage1.form.divButton.form);
            obj.set_taborder("3");
            obj.set_text("<<");
            this.divData.form.tabData.Tabpage1.form.divButton.addChild(obj.name, obj);

            obj = new Div("divGrid2","divButton:10","20",null,null,"20","20",null,null,null,null,this.divData.form.tabData.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("divGrid2");
            this.divData.form.tabData.Tabpage1.addChild(obj.name, obj);

            obj = new GroupBox("grb00","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.Tabpage1.form.divGrid2.form);
            obj.set_taborder("0");
            obj.set_text("조회항목");
            this.divData.form.tabData.Tabpage1.form.divGrid2.addChild(obj.name, obj);

            obj = new Grid("objGrid03","10","20",null,"270","10",null,null,null,null,null,this.divData.form.tabData.Tabpage1.form.divGrid2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.Tabpage1.form.divGrid2.addChild(obj.name, obj);

            obj = new Grid("objGrid04","10","objGrid03:10",null,null,"10","10",null,null,null,null,this.divData.form.tabData.Tabpage1.form.divGrid2.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.tabData.Tabpage1.form.divGrid2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.divData.form.tabData);
            obj.set_text("검색결과");
            this.divData.form.tabData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccboTY_BAS","value","dsSearch","NM_DAM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZZ_DATA_SEARCH.xfdl", function() {
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
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
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
        	//this.btnInit = this.gfnFormButtonAdd("btnInit", "fnInit");
        	//this.btnMig = this.gfnFormButtonAdd("btnMig", "fnMig");
        	//this.btnNGDATA = this.gfnFormButtonAdd("btnNGDATA", "fnNGDATA");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;

        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid1 = this.divData.form.tabData.Tabpage1.form.divGrid1.form.objGrid01;
        	this.dxGrid2 = this.divData.form.tabData.Tabpage1.form.divGrid1.form.objGrid02;
        	this.dxGrid3 = this.divData.form.tabData.Tabpage1.form.divGrid2.form.objGrid03;
        	this.dxGrid4 = this.divData.form.tabData.Tabpage1.form.divGrid2.form.objGrid04;

        	this.btnAddR01 = this.divData.form.tabData.Tabpage1.form.divButton.form.btnAddR01;
        	this.btnAddL01 = this.divData.form.tabData.Tabpage1.form.divButton.form.btnAddL01;
        	this.btnAddR02 = this.divData.form.tabData.Tabpage1.form.divButton.form.btnAddR02;
        	this.btnAddL02 = this.divData.form.tabData.Tabpage1.form.divButton.form.btnAddL02;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZZ_MYQUERY");
        	this.gfnGridInit(this.dxGrid1, this.dsEntity, "DZ", "DZZ_ENTITY");
        	this.gfnGridInit(this.dxGrid2, this.dsAttribute, "DZ", "DZZ_ATTRIBUTE");
        	this.gfnGridInit(this.dxGrid3, this.dsColumn, "DZ", "DZZ_MYCOLUMN01");
        	this.gfnGridInit(this.dxGrid4, this.dsCondition, "DZ", "DZZ_MYCOLUMN02");

        	// 셀 수정가능 여부
        	this.dxGrid1.addEventHandler('oncellclick', this.objGrid01_oncellclick, this);

        	this.btnAddR01.addEventHandler('onclick', this.btnAddR01_onclick, this);
        	this.btnAddL01.addEventHandler('onclick', this.btnAddL01_onclick, this);
        	this.btnAddR02.addEventHandler('onclick', this.btnAddR02_onclick, this);
        	this.btnAddL02.addEventHandler('onclick', this.btnAddL02_onclick, this);

        	this.ccfCD_SYSTEM.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.fnCodeInit('');

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

        	this.dsSelectE = new Dataset();
        	this.dsSelectE.addColumn("CD_ENTITY", "string");

        	this.dsSelectA = new Dataset();
        	this.dsSelectA.addColumn("CD_ENTITY", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         *	조회 버튼
         */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.fnSetGrid();

        	var strSvcId    = "select";
        	var strSvcType  = "db/executeQuery";
        	var inProc		= "";
        	var inData      = "dsColumn=dsColumn dsCondition=dsCondition";
        	var outData     = "dsListSub=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        }

        this.fnSelectEntity = function() {
        	this.gfnGridBeforeSelect(this.dxGrid1);

        	var cd_entity = this.divSearch.form.ccboTY_BAS.value;
        	if (this.gfnIsNull(cd_entity)) return false;

        	this.dsSelectE.clearData();
        	var nRow = this.dsSelectE.addRow();
        	this.dsSelectE.setColumn(nRow, "CD_ENTITY", cd_entity);
        	console.log(this.dsSelectE.saveXML())
        	var strSvcId    = "selectTable";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "entity=dsSelectE";
        	var outData     = "dsEntity=entity0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        }

        this.fnSelectAttribute = function(cd_entity) {
        	this.gfnGridBeforeSelect(this.dxGrid2);

        	this.dsSelectA.clearData();
        	var nRow = this.dsSelectA.addRow();
        	this.dsSelectA.setColumn(nRow, "CD_ENTITY", cd_entity);

        	var strSvcId    = "selectColumn";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "attribute=dsSelectA";
        	var outData     = "dsAttribute=attribute0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        }

        /*
         *	입력 버튼
         */
        this.fnSave = function() {

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
        	if (this.dsColumn.rowcount == 0)
        	{
        		this.gfnAlert("조회 항목이 없습니다.");
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
        	if (svcID == "select")
        	{
        		//this.gfnGridAfterSelect(this.dxGrid);

        		this.divData.form.tabData.set_tabindex(1);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function (id, codeFindData)
        {
        	if (id == "ccfCD_SYSTEM")
        	{
        		this.fnSearchInit();
        		var cd_system = this.ccfCD_SYSTEM.form.CDTextBox.value;
        		this.fnCodeInit(cd_system);
        	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.objGrid01_oncellclick = function(obj,e)
        {
        	var dataset = obj.getBindDataset();
        	var tableName = dataset.getColumn(dataset.rowposition, "CD_ENTITY")
        	this.fnSelectAttribute(tableName);
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         this.fnCodeInit = function(cd_system)
         {
        	this.dsCode.filter("CD_SYSTEM == 'D' ||CD_SYSTEM == '" + cd_system + "'");
        	this.divSearch.form.ccboTY_BAS.set_index(0);
         };

        this.fnSearchInit = function(obj,e)
        {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
        		this.gfnGridClear(this.dxGrid3);
        		this.gfnGridClear(this.dxGrid4);
        		//this.gfnGridClear(this.dxGrid5);
        	}
        };

        this.btnAddR01_onclick = function(obj,e)
        {
        	var cd_entity = this.dsAttribute.getColumn(this.dsAttribute.rowposition, "CD_ENTITY");
        	var cd_attribute = this.dsAttribute.getColumn(this.dsAttribute.rowposition, "CD_ATTRIBUTE");

        	if (this.dsColumn.getCaseCountNF( "CD_ENTITY == $0 && CD_ATTRIBUTE == $1", 0, -1, [cd_entity, cd_attribute] ) > 0)
        	{
        			return false;
        	}

        	var nm_attribute = this.dsAttribute.getColumn(this.dsAttribute.rowposition, "NM_ATTRIBUTE");
        	var nRow = this.dsColumn.addRow();

        	if (this.dsColumn.getCaseCountNF( "CD_ATTRIBUTE == $0", 0, -1, [cd_attribute] ) > 0)
        	{
        		this.dsColumn.setColumn(nRow, 'YN_DUPLICATION', 'Y');
        	}
        	else
        	{
        		this.dsColumn.setColumn(nRow, 'YN_DUPLICATION', 'N');
        	}

        	this.dsColumn.setColumn(nRow, 'CD_ENTITY', cd_entity);
        	this.dsColumn.setColumn(nRow, 'CD_ATTRIBUTE', cd_attribute);
        	this.dsColumn.setColumn(nRow, 'NM_ATTRIBUTE', nm_attribute);
        	this.dsColumn.setColumn(nRow, 'NO_ORDER', this.dsColumn.rowcount);
        };

        this.btnAddL01_onclick = function(obj,e)
        {
        	this.dsColumn.deleteRow(this.dsColumn.rowposition);
        	for (var i=0; i<this.dsColumn.rowcount; i++) {
         		this.dsColumn.setColumn(i, 'NO_ORDER', i+1);
         	}
        };

        this.btnAddR02_onclick = function(obj,e)
        {
        	var cd_entity = this.dsAttribute.getColumn(this.dsAttribute.rowposition, "CD_ENTITY");
        	var cd_attribute = this.dsAttribute.getColumn(this.dsAttribute.rowposition, "CD_ATTRIBUTE");

        	if (this.dsCondition.getCaseCountNF( "CD_ENTITY == $0 && CD_ATTRIBUTE == $1", 0, -1, [cd_entity, cd_attribute] ) > 0)
        	{
        			return false;
        	}

        	var nm_attribute = this.dsAttribute.getColumn(this.dsAttribute.rowposition, "NM_ATTRIBUTE");
        	var nRow = this.dsCondition.addRow();
        	this.dsCondition.setColumn(nRow, 'CD_ENTITY', cd_entity);
        	this.dsCondition.setColumn(nRow, 'CD_ATTRIBUTE', cd_attribute);
        	this.dsCondition.setColumn(nRow, 'NM_ATTRIBUTE', nm_attribute);
        	this.dsCondition.setColumn(nRow, 'TY_CONDITION', nm_attribute);
        	this.dsCondition.setColumn(nRow, 'TY_GUBUN', nm_attribute);
        };

        this.btnAddL02_onclick = function(obj,e)
        {
        	this.dsCondition.deleteRow(this.dsCondition.rowposition);
        };

        this.fnSetGrid = function()
        {
        	var gridName = 'objGrid05';
        	var tabPage2 = this.divData.form.tabData.Tabpage2.form;
        	if (this.dxGrid5 != null)
        	{
        		tabPage2.removeChild(gridName);
        		this.dxGrid5.destroy();
        	}

        	this.dxGrid5 = new Grid(gridName, 20, 20, null, null, 20, 20);

        	this.dxGrid5.set_cellsizingtype("col");
        	this.dxGrid5.set_cellmovingtype("none"); //col
        	this.dxGrid5.set_treeusecheckbox(false);
        	this.dxGrid5.set_binddataset(this.dsListSub);

        	var nRow = this.dxGrid5.appendContentsRow("head");
        	this.dxGrid5.appendContentsRow("body");

        	// 컬럼
        	var start_col = 0;
        	for (var i = 0; i < this.dsColumn.rowcount; i++) {
        		var cd_field = this.dsColumn.getColumn(i, "CD_ATTRIBUTE");
        		var ds_field = this.dsColumn.getColumn(i, "NM_ATTRIBUTE");
        		var yn_duplication = this.dsColumn.getColumn(i, "YN_DUPLICATION");
        		var yn_summary = this.dsColumn.getColumn(i, "YN_SUMMARY");
        		var no_order = this.dsColumn.getColumn(i, "NO_ORDER");

        		if ('Y' == yn_duplication)
        		{
        			continue;
        		}

        		var sz_width = 100;
        		var ty_align = "left"

        		var nCol = 0;
        		if (i > 0) {
        			nCol = this.dxGrid5.appendContentsCol();
        		}

        		var displaytype = "text";
        		var edittype = "none";
        		this.dxGrid5.setCellProperty("head", nCol, "displaytype", displaytype);
        		this.dxGrid5.setCellProperty("head", nCol, "edittype", edittype);

        		this.dxGrid5.setCellProperty("head", nCol, "text", ds_field);
        		this.dxGrid5.setFormatColProperty(nCol, "size", sz_width);
        		this.dxGrid5.setCellProperty("body", nCol, "text", "bind:" + cd_field);
        		this.dxGrid5.setCellProperty("body", nCol, "textAlign", ty_align);

        		this.dxGrid5.setCellProperty("body", nCol, "displaytype", displaytype);
        		this.dxGrid5.setCellProperty("body", nCol, "edittype", edittype);
        	}

        	tabPage2.addChild(gridName, this.dxGrid5);

        	this.dxGrid5.show();
        };


        this.divSearch_ccboTY_BAS_onitemchanged = function(obj,e)
        {
        	this.fnSearchInit();
        	this.fnSelectEntity();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboTY_BAS.addEventHandler("onitemchanged",this.divSearch_ccboTY_BAS_onitemchanged,this);
        };
        this.loadIncludeScript("DZZ_DATA_SEARCH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
