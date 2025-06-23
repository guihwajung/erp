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
            this.set_titletext("공사계약현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOZPR_CONSTCONTRCTCURST_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SELECT_01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CONST_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CONST_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_CONTRCT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CONST_FIELD\"/><Col id=\"CD_CONST_TYPE\"/><Col id=\"DIV_CONTRCT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CONST_FIELD", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CONST_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDIV_CONTRCT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("AutoSet").set("false");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CONST_FIELD","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("공사부문");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_CONST_FIELD","staCD_CONST_FIELD:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCD_CONST_FIELD");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CONST_TYPE","ccboCD_CONST_FIELD:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("공사종류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_CONST_TYPE","staCD_CONST_TYPE:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCD_CONST_TYPE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDIV_CONTRCT","ccboCD_CONST_TYPE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("수주구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboDIV_CONTRCT","staDIV_CONTRCT:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsDIV_CONTRCT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkALL","ccboDIV_CONTRCT:0.0","10.0","64","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("전체분");
            obj.set_value("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkOUR","cchkALL:0.0","10.0","64","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("당사분");
            obj.set_value("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkOTH","cchkOUR:0.0","10.0","64","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("타사분");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboCD_CONST_FIELD","value","dsSearch","CD_CONST_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboCD_CONST_TYPE","value","dsSearch","CD_CONST_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboDIV_CONTRCT","value","dsSearch","DIV_CONTRCT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWU_CONSTCONTRCTCURST.xfdl", function() {
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

        	this.divSearch_cchkALL_onchanged(this.divSearch.form.cchkALL, {postvalue:this.divSearch.form.cchkALL.value});
        	this.divSearch_cchkOUR_onchanged(this.divSearch.form.cchkOUR, {postvalue:this.divSearch.form.cchkOUR.value});
        	this.divSearch_cchkOTH_onchanged(this.divSearch.form.cchkOTH, {postvalue:this.divSearch.form.cchkOTH.value});
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnConstContrct = this.gfnFormButtonAdd("btnConstContrct", "fnConstContrct");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWU_CONSTCONTRCTCURST");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_FIELD", "string");
        	this.dsSelect.addColumn("NO_CONTRCT", "string");
        	this.dsSelect.addColumn("NO_POLY_CONST_CONTRCT", "string");
        	this.dsSelect.addColumn("CD_CONST_FIELD", "string");
        	this.dsSelect.addColumn("CD_CONST_TYPE", "string");
        	this.dsSelect.addColumn("DIV_CONTRCT", "string");

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_ALL", "string");

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

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_FIELD", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_CONTRCT", "");
        	this.dsSelect.setColumn(0, "NO_POLY_CONST_CONTRCT", "");
        	this.dsSelect.setColumn(0, "CD_CONST_FIELD", this.dsSearch.getColumn(0, "CD_CONST_FIELD"));
        	this.dsSelect.setColumn(0, "CD_CONST_TYPE", this.dsSearch.getColumn(0, "CD_CONST_TYPE"));
        	this.dsSelect.setColumn(0, "DIV_CONTRCT", this.dsSearch.getColumn(0, "DIV_CONTRCT"));

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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

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

        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        // 	}

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

        this.fnSetCombo = function()
        {
        	this.dsCombo.clearData();

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(0, "CD_TYPE", "31");
        	this.dsCombo.setColumn(0, "YN_USE", "Y");
        	this.dsCombo.setColumn(0, "YN_ALL", "Y");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(1, "CD_TYPE", "32");
        	this.dsCombo.setColumn(1, "YN_USE", "Y");
        	this.dsCombo.setColumn(1, "YN_ALL", "Y");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(2, "CD_TYPE", "82");
        	this.dsCombo.setColumn(2, "YN_USE", "Y");
        	this.dsCombo.setColumn(2, "YN_ALL", "Y");

        	var strSvcId    = "combo";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_CONST_FIELD=combo0 dsCD_CONST_TYPE=combo1 dsDIV_CONTRCT=combo2";
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

        this.divSearch_cchkALL_onchanged = function(obj,e)
        {
        	var AM_INIT_SUPPLY_index = this.dxGrid.getBindCellIndex("body", "AM_INIT_SUPPLY");
        	var AM_INIT_VAT_index = this.dxGrid.getBindCellIndex("body", "AM_INIT_VAT");
        	var AM_INIT_TXFR_SUPPLY_index = this.dxGrid.getBindCellIndex("body", "AM_INIT_TXFR_SUPPLY");
        	var AM_INIT_CONTRCT_index = this.dxGrid.getBindCellIndex("body", "AM_INIT_CONTRCT");
        	var AM_CHNGE_SUPPLY_index = this.dxGrid.getBindCellIndex("body", "AM_CHNGE_SUPPLY");
        	var AM_CHNGE_VAT_index = this.dxGrid.getBindCellIndex("body", "AM_CHNGE_VAT");
        	var AM_CHNGE_TXFR_SUPPLY_index = this.dxGrid.getBindCellIndex("body", "AM_CHNGE_TXFR_SUPPLY");
        	var AM_CHNGE_CONTRCT_index = this.dxGrid.getBindCellIndex("body", "AM_CHNGE_CONTRCT");
        	var AM_SUPPLY_index = this.dxGrid.getBindCellIndex("body", "AM_SUPPLY");
        	var AM_VAT_index = this.dxGrid.getBindCellIndex("body", "AM_VAT");
        	var AM_TXFR_SUPPLY_index = this.dxGrid.getBindCellIndex("body", "AM_TXFR_SUPPLY");
        	var AM_CONTRCT_index = this.dxGrid.getBindCellIndex("body", "AM_CONTRCT");

        	var size = 0;
        	if(obj.isChecked())
        	{
        		size = 100;
        	}

        	this.dxGrid.setRealColSize("body", AM_INIT_SUPPLY_index, size);
        	this.dxGrid.setRealColSize("body", AM_INIT_VAT_index, size);
        	this.dxGrid.setRealColSize("body", AM_INIT_TXFR_SUPPLY_index, size);
        	this.dxGrid.setRealColSize("body", AM_INIT_CONTRCT_index, size);
        	this.dxGrid.setRealColSize("body", AM_CHNGE_SUPPLY_index, size);
        	this.dxGrid.setRealColSize("body", AM_CHNGE_VAT_index, size);
        	this.dxGrid.setRealColSize("body", AM_CHNGE_TXFR_SUPPLY_index, size);
        	this.dxGrid.setRealColSize("body", AM_CHNGE_CONTRCT_index, size);
        	this.dxGrid.setRealColSize("body", AM_SUPPLY_index, size);
        	this.dxGrid.setRealColSize("body", AM_VAT_index, size);
        	this.dxGrid.setRealColSize("body", AM_TXFR_SUPPLY_index, size);
        	this.dxGrid.setRealColSize("body", AM_CONTRCT_index, size);
        };

        this.divSearch_cchkOUR_onchanged = function(obj,e)
        {
        	var AM_INIT_SUPPLY_OUR_index = this.dxGrid.getBindCellIndex("body", "AM_INIT_SUPPLY_OUR");
        	var AM_INIT_VAT_OUR_index = this.dxGrid.getBindCellIndex("body", "AM_INIT_VAT_OUR");
        	var AM_INIT_TXFR_SUPPLY_OUR_index = this.dxGrid.getBindCellIndex("body", "AM_INIT_TXFR_SUPPLY_OUR");
        	var AM_INIT_CONTRCT_OUR_index = this.dxGrid.getBindCellIndex("body", "AM_INIT_CONTRCT_OUR");
        	var AM_CHNGE_SUPPLY_OUR_index = this.dxGrid.getBindCellIndex("body", "AM_CHNGE_SUPPLY_OUR");
        	var AM_CHNGE_VAT_OUR_index = this.dxGrid.getBindCellIndex("body", "AM_CHNGE_VAT_OUR");
        	var AM_CHNGE_TXFR_SUPPLY_OUR_index = this.dxGrid.getBindCellIndex("body", "AM_CHNGE_TXFR_SUPPLY_OUR");
        	var AM_CHNGE_CONTRCT_OUR_index = this.dxGrid.getBindCellIndex("body", "AM_CHNGE_CONTRCT_OUR");
        	var AM_SUPPLY_OUR_index = this.dxGrid.getBindCellIndex("body", "AM_SUPPLY_OUR");
        	var AM_VAT_OUR_index = this.dxGrid.getBindCellIndex("body", "AM_VAT_OUR");
        	var AM_TXFR_SUPPLY_OUR_index = this.dxGrid.getBindCellIndex("body", "AM_TXFR_SUPPLY_OUR");
        	var AM_CONTRCT_OUR_index = this.dxGrid.getBindCellIndex("body", "AM_CONTRCT_OUR");

        	var size = 0;
        	if(obj.isChecked())
        	{
        		size = 100;
        	}

        	this.dxGrid.setRealColSize("body", AM_INIT_SUPPLY_OUR_index, size);
        	this.dxGrid.setRealColSize("body", AM_INIT_VAT_OUR_index, size);
        	this.dxGrid.setRealColSize("body", AM_INIT_TXFR_SUPPLY_OUR_index, size);
        	this.dxGrid.setRealColSize("body", AM_INIT_CONTRCT_OUR_index, size);
        	this.dxGrid.setRealColSize("body", AM_CHNGE_SUPPLY_OUR_index, size);
        	this.dxGrid.setRealColSize("body", AM_CHNGE_VAT_OUR_index, size);
        	this.dxGrid.setRealColSize("body", AM_CHNGE_TXFR_SUPPLY_OUR_index, size);
        	this.dxGrid.setRealColSize("body", AM_CHNGE_CONTRCT_OUR_index, size);
        	this.dxGrid.setRealColSize("body", AM_SUPPLY_OUR_index, size);
        	this.dxGrid.setRealColSize("body", AM_VAT_OUR_index, size);
        	this.dxGrid.setRealColSize("body", AM_TXFR_SUPPLY_OUR_index, size);
        	this.dxGrid.setRealColSize("body", AM_CONTRCT_OUR_index, size);
        };

        this.divSearch_cchkOTH_onchanged = function(obj,e)
        {
        	var AM_INIT_SUPPLY_OTH_index = this.dxGrid.getBindCellIndex("body", "AM_INIT_SUPPLY_OTH");
        	var AM_INIT_VAT_OTH_index = this.dxGrid.getBindCellIndex("body", "AM_INIT_VAT_OTH");
        	var AM_INIT_TXFR_SUPPLY_OTH_index = this.dxGrid.getBindCellIndex("body", "AM_INIT_TXFR_SUPPLY_OTH");
        	var AM_INIT_CONTRCT_OTH_index = this.dxGrid.getBindCellIndex("body", "AM_INIT_CONTRCT_OTH");
        	var AM_CHNGE_SUPPLY_OTH_index = this.dxGrid.getBindCellIndex("body", "AM_CHNGE_SUPPLY_OTH");
        	var AM_CHNGE_VAT_OTH_index = this.dxGrid.getBindCellIndex("body", "AM_CHNGE_VAT_OTH");
        	var AM_CHNGE_TXFR_SUPPLY_OTH_index = this.dxGrid.getBindCellIndex("body", "AM_CHNGE_TXFR_SUPPLY_OTH");
        	var AM_CHNGE_CONTRCT_OTH_index = this.dxGrid.getBindCellIndex("body", "AM_CHNGE_CONTRCT_OTH");
        	var AM_SUPPLY_OTH_index = this.dxGrid.getBindCellIndex("body", "AM_SUPPLY_OTH");
        	var AM_VAT_OTH_index = this.dxGrid.getBindCellIndex("body", "AM_VAT_OTH");
        	var AM_TXFR_SUPPLY_OTH_index = this.dxGrid.getBindCellIndex("body", "AM_TXFR_SUPPLY_OTH");
        	var AM_CONTRCT_OTH_index = this.dxGrid.getBindCellIndex("body", "AM_CONTRCT_OTH");

        	var size = 0;
        	if(obj.isChecked())
        	{
        		size = 100;
        	}

        	this.dxGrid.setRealColSize("body", AM_INIT_SUPPLY_OTH_index, size);
        	this.dxGrid.setRealColSize("body", AM_INIT_VAT_OTH_index, size);
        	this.dxGrid.setRealColSize("body", AM_INIT_TXFR_SUPPLY_OTH_index, size);
        	this.dxGrid.setRealColSize("body", AM_INIT_CONTRCT_OTH_index, size);
        	this.dxGrid.setRealColSize("body", AM_CHNGE_SUPPLY_OTH_index, size);
        	this.dxGrid.setRealColSize("body", AM_CHNGE_VAT_OTH_index, size);
        	this.dxGrid.setRealColSize("body", AM_CHNGE_TXFR_SUPPLY_OTH_index, size);
        	this.dxGrid.setRealColSize("body", AM_CHNGE_CONTRCT_OTH_index, size);
        	this.dxGrid.setRealColSize("body", AM_SUPPLY_OTH_index, size);
        	this.dxGrid.setRealColSize("body", AM_VAT_OTH_index, size);
        	this.dxGrid.setRealColSize("body", AM_TXFR_SUPPLY_OTH_index, size);
        	this.dxGrid.setRealColSize("body", AM_CONTRCT_OTH_index, size);
        };


        this.fnConstContrct = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};

        	if(this.dsList.rowposition > -1){
        		param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_FIELD");
        		param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_FIELD");

        	}

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWU_CONSTCONTRCT", "", param);

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cchkALL.addEventHandler("onchanged",this.divSearch_cchkALL_onchanged,this);
            this.divSearch.form.cchkOUR.addEventHandler("onchanged",this.divSearch_cchkOUR_onchanged,this);
            this.divSearch.form.cchkOTH.addEventHandler("onchanged",this.divSearch_cchkOTH_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWU_CONSTCONTRCTCURST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
