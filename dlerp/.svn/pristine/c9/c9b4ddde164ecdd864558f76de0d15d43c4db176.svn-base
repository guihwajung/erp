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
            this.set_titletext("총괄현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_enableevent("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBTPR_TOTALSTATE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GBN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_UMGB\" type=\"STRING\" size=\"256\"/><Column id=\"FROMDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TODATE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_JOBEND\" type=\"STRING\" size=\"256\"/><Column id=\"TO_JOBEND\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_GBN\"/><Col id=\"TY_UMGB\"/><Col id=\"FROMDATE\"/><Col id=\"TODATE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GBN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">0</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">진행</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">종료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_UMGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">000</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">002</Col><Col id=\"DS_CODE\">합동점검</Col></Row><Row><Col id=\"CD_CODE\">003</Col><Col id=\"DS_CODE\">입주자사전점검</Col></Row><Row><Col id=\"CD_CODE\">004</Col><Col id=\"DS_CODE\">합동점검(공용)</Col></Row><Row><Col id=\"CD_CODE\">005</Col><Col id=\"DS_CODE\">입주</Col></Row><Row><Col id=\"CD_CODE\">006</Col><Col id=\"DS_CODE\">사후</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO_JOBEND","0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_UMGB","ctclDT_TO_JOBEND:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("진행구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GBN","staTY_UMGB:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsTY_GBN");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SITE","ccboTY_GBN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("관리");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_UMGB","staTY_SITE:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_UMGB");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT","ccboTY_UMGB:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("접수일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT00","ctclDT_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("완료일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00_00","staDT00:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FR_JOBEND","staDT00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","60",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new BindItem("item3","divSearch.form.ccboTY_GBN","value","dsSearch","TY_GBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccboTY_UMGB","value","dsSearch","TY_UMGB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","FROMDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_TO","value","dsSearch","TODATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclDT_FR_JOBEND","value","dsSearch","FR_JOBEND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclDT_TO_JOBEND","value","dsSearch","TO_JOBEND");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DBT_TOTALSTATE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	//this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        // 	var toDay = this.gfnGetDate();
        // 	this.dsSearch.setColumn(0, "FROMDATE", toDay);
        // 	this.dsSearch.setColumn(0, "TODATE", toDay);

        	this.ccboTY_GBN.set_index(0);
        	this.ccboTY_UMGB.set_index(0);

        	//this.fnSetCombo();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDetailState = this.gfnFormButtonAdd("btnDetailState", "fnDetailState");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccboTY_GBN = this.divSearch.form.ccboTY_GBN;
        	this.ccboTY_UMGB = this.divSearch.form.ccboTY_UMGB;
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBT_TOTALSTATE");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)
        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경

        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","AV_DAY"), "displaytype", "mask");
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","AV_DAY"), "maskedittype", "number" );
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","AV_DAY"), "maskeditformat","#,###,##0") ;
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","AV_DAY"), "text", "expr:nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_JOBEND'),0) == 0 ? 0 : nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','DAY_TOT'),0)/nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_JOBEND'),0)");

        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_HAPPY"), "displaytype", "mask");
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_HAPPY"), "maskedittype", "number" );
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_HAPPY"), "maskeditformat","#,###,##0.00") ;
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_HAPPY"), "text", "expr:nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_HCALL'),0) == 0 ? 0 : nexacro.round(nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_HAPPY'),0)/nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_HCALL'),0),2)");

        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CT_SDS"), "displaytype", "mask");
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CT_SDS"), "maskedittype", "number" );
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CT_SDS"), "maskeditformat","#,###,##0.00") ;
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CT_SDS"), "text", "expr:nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','AM_SDS'),0) == 0 ? 0 : nexacro.round(nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_JEOBSU'),0)/nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','AM_SDS'),0),2)");

        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_JOBEND"), "displaytype", "mask");
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_JOBEND"), "maskedittype", "number" );
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_JOBEND"), "maskeditformat","#,###,##0.00") ;
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_JOBEND"), "text", "expr:nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_JEOBSU'),0) == 0 ? 0 : nexacro.round(nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_JOBEND'),0)/nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_JEOBSU'),0),2)");

        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_GBN", "int");
        	this.dsSelect.addColumn("FROMDATE", "string");
        	this.dsSelect.addColumn("TODATE", "string");
        	this.dsSelect.addColumn("TY_UMGB", "string");
        	this.dsSelect.addColumn("FR_JOBEND", "string");
        	this.dsSelect.addColumn("TO_JOBEND", "string");
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

        	this.dsList.clearData();
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_GBN", this.dsSearch.getColumn(0, "TY_GBN"));
        	this.dsSelect.setColumn(0, "FROMDATE", this.dsSearch.getColumn(0, "FROMDATE"));
        	this.dsSelect.setColumn(0, "TODATE", this.dsSearch.getColumn(0, "TODATE"));
        	this.dsSelect.setColumn(0, "TY_UMGB", this.dsSearch.getColumn(0, "TY_UMGB"));
        	this.dsSelect.setColumn(0, "FR_JOBEND", this.dsSearch.getColumn(0, "FR_JOBEND"));
        	this.dsSelect.setColumn(0, "TO_JOBEND", this.dsSearch.getColumn(0, "TO_JOBEND"));

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
        	if(this.gfnGetDiffDate(this.dsSearch.getColumn(0, "FROMDATE"), this.dsSearch.getColumn(0, "TODATE")) <= -1){
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclDT_TO.setFocus();
        			return false;
        		}
        		this.gfnAlert("접수일의 범위가 올바르지 않습니다.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}
        	return validate;
        }
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
        	} else if (svcID == "combo") {

        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dxGrid_oncelldblclick = function(obj,e)
        {
        	 this.fnDetailState();
        };
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         * 커스텀 버튼 이벤트
         */
        this.fnDetailState = function(obj,e) {
        	if(this.dsList.rowcount == 0) return;

        	var param = {};
        	param.DT_FROM = this.dsSearch.getColumn(0, "FROMDATE");
        	param.DT_TO = this.dsSearch.getColumn(0, "TODATE");
        	param.TY_STATE = this.dsSearch.getColumn(0, "TY_GBN");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBT_DETAILSTATE", "", param);
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DBT_TOTALSTATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
