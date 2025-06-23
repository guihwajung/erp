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
            this.set_titletext("개체관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">entity</Col><Col id=\"SP\">DZZPR_ALLENTITY_SELECT</Col></Row><Row><Col id=\"TARGET\">attribute</Col><Col id=\"SP\">DZZPR_ALLATTRIBUTE_SELECT</Col></Row><Row><Col id=\"TARGET\">entity_u</Col><Col id=\"SP\">DZZPR_ENTITY_UPDATE</Col></Row><Row><Col id=\"TARGET\">attribute_u</Col><Col id=\"SP\">DZZPR_ATTRIBUTE_UPDATE</Col></Row><Row><Col id=\"TARGET\">integration</Col><Col id=\"SP\">DZZPR_ENTITY_INTEGRATION</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ENTITY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEntity", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAttribute", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("1");
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

            obj = new Static("staNM_DAM","ccfCD_SYSTEM:30","10","70","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("개체구분");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboXTYPE","staNM_DAM:10","10","129","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var divSearch_form_ccboXTYPE_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboXTYPE_innerdataset", obj);
            divSearch_form_ccboXTYPE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row/><Row><Col id=\"codecolumn\">AF</Col><Col id=\"datacolumn\">집계 함수(CLR)</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">CHECK 제약 조건</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">기본값 또는 DEFAULT 제약 조건</Col></Row><Row><Col id=\"codecolumn\">F</Col><Col id=\"datacolumn\">FOREIGN KEY 제약 조건</Col></Row><Row><Col id=\"codecolumn\">FN</Col><Col id=\"datacolumn\">스칼라 함수</Col></Row><Row><Col id=\"codecolumn\">FS</Col><Col id=\"datacolumn\">어셈블리(CLR) 스칼라 함수</Col></Row><Row><Col id=\"codecolumn\">FT</Col><Col id=\"datacolumn\">어셈블리(CLR) 테이블 반환 함수</Col></Row><Row><Col id=\"codecolumn\">IF</Col><Col id=\"datacolumn\">인라인 테이블 함수</Col></Row><Row><Col id=\"codecolumn\">IT</Col><Col id=\"datacolumn\">내부 테이블</Col></Row><Row><Col id=\"codecolumn\">L</Col><Col id=\"datacolumn\">로그</Col></Row><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">저장 프로시저</Col></Row><Row><Col id=\"codecolumn\">PC</Col><Col id=\"datacolumn\">어셈블리(CLR) 저장 프로시저</Col></Row><Row><Col id=\"codecolumn\">PK</Col><Col id=\"datacolumn\">PRIMARY KEY 제약 조건(K 유형)</Col></Row><Row><Col id=\"codecolumn\">RF</Col><Col id=\"datacolumn\">복제 필터 저장 프로시저</Col></Row><Row><Col id=\"codecolumn\">S</Col><Col id=\"datacolumn\">시스템 테이블</Col></Row><Row><Col id=\"codecolumn\">SN</Col><Col id=\"datacolumn\">동의어</Col></Row><Row><Col id=\"codecolumn\">SQ</Col><Col id=\"datacolumn\">서비스 큐</Col></Row><Row><Col id=\"codecolumn\">TA</Col><Col id=\"datacolumn\">어셈블리(CLR) DML 트리거</Col></Row><Row><Col id=\"codecolumn\">TF</Col><Col id=\"datacolumn\">테이블 함수</Col></Row><Row><Col id=\"codecolumn\">TR</Col><Col id=\"datacolumn\">SQL DML 트리거</Col></Row><Row><Col id=\"codecolumn\">TT</Col><Col id=\"datacolumn\">테이블 유형</Col></Row><Row><Col id=\"codecolumn\">U</Col><Col id=\"datacolumn\">사용자 테이블</Col></Row><Row><Col id=\"codecolumn\">UQ</Col><Col id=\"datacolumn\">UNIQUE 제약 조건(K 유형)</Col></Row><Row><Col id=\"codecolumn\">V</Col><Col id=\"datacolumn\">뷰</Col></Row><Row><Col id=\"codecolumn\">X</Col><Col id=\"datacolumn\">확장 저장 프로시저</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboXTYPE_innerdataset);
            obj.set_text("사용자 테이블");
            obj.set_value("U");
            obj.set_index("22");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","40%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("개체");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("속성");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","50%",null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txt00","0","objGridSub:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZZ_ENTITYMNG.xfdl", function() {
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

        	// 서브 버튼 사용
        	this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;

        	this.dxGrid1 = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGrid2 = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid1, this.dsEntity, "DZ", "DZZ_ALLENTITY");
        	this.gfnGridInit(this.dxGrid2, this.dsAttribute, "DZ", "DZZ_ALLATTRIBUTE");

        	// 셀 수정가능 여부
        	this.dxGrid1.addEventHandler('oncellclick', this.dxGrid1_oncellclick, this);

        	this.ccfCD_SYSTEM.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ENTITY", "string");
        	this.dsSelect.addColumn("XTYPE", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_ENTITY", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         this.fnEntityIntegration = function()
         {
        	var strSvcId    = "integration";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "integration=dsSearch";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
         };

        /*
         *	조회 버튼
         */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid1);

        	this.dsSelect.clearData();

        	var cd_entity = this.ccfCD_SYSTEM.form.CDTextBox.value;
        	var xtype = this.divSearch.form.ccboXTYPE.value;
        	var nRow = this.dsSelect.addRow();
        	this.dsSelect.setColumn(nRow, "CD_ENTITY", cd_entity);
        	this.dsSelect.setColumn(nRow, "XTYPE", xtype);

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "entity=dsSelect";
        	var outData     = "dsEntity=entity0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	var strSvcId    = "update";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "entity_u=dsEntity:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

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
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {
        	var cd_entity = this.dsEntity.getColumn(this.dsEntity.rowposition, 'CD_ENTITY');
        	if (this.gfnIsNull(cd_entity))
        	{
        		return false;
        	}

        	this.gfnGridBeforeSelect(this.dxGrid2);

        	this.dsSelectSub.clearData();
        	var nRow = this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(nRow, "CD_ENTITY", cd_entity);

        	var strSvcId    = "selectSub";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "attribute=dsSelectSub";
        	var outData     = "dsAttribute=attribute0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnAddSub = function() {

        };

        this.fnDelSub = function() {

        };

        this.fnSaveSub = function() {
        	var strSvcId    = "updateSub";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "attribute_u=dsAttribute:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnExcelSub = function() {

        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var cd_entity = this.ccfCD_SYSTEM.form.CDTextBox.value;

        	if (this.gfnIsNull(cd_entity)) {
        		// Alert후 실행할 처리
        		this.gfnAlert("시스템코드는 반드시 입력 하셔야 합니다.", function() {
        			this.ccfCD_SYSTEM.setFocus();
        		});

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
        		this.gfnGridAfterSelect(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
        	}
        	else if (svcID == "selectSub")
        	{
        		this.gfnGridAfterSelect(this.dxGrid2);
        	}
        	else if (svcID == "update")
        	{
        		this.fnSelect();
        	}
        	else if (svcID == "updateSub")
        	{
        		this.fnSelectSub();
        	}
        	else if (svcID == "integration")
        	{
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
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
        	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dxGrid1_oncellclick = function(obj,e)
        {
        	this.fnSelectSub();

        	var dataset = obj.getBindDataset();
        	var ddl = dataset.getColumn(dataset.rowposition, "DEFINITION");
        	this.divData.form.divDataRight.form.txt00.set_value(ddl);
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e)
        {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
        	}
        };

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
            this.divSearch.form.ccboXTYPE.addEventHandler("onitemchanged",this.divSearch_ccboNM_DAM_onitemchanged,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsEntity.addEventHandler("canrowposchange",this.dsEntity_canrowposchange,this);
        };
        this.loadIncludeScript("DZZ_ENTITYMNG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
