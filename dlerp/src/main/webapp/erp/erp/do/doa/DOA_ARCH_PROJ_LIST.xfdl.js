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
            this.set_titletext("주택-프로젝트목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1580,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOAPR_ARCH_PROJ_LIST_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">계약</Col><Col id=\"VALUE\">계약</Col></Row><Row><Col id=\"CODE\">미계약</Col><Col id=\"VALUE\">미계약</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BIZ_MHOD\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PRDCT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BIZ_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACQ_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACQ_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_BIZ_STAT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROJ","staCD_PROJ:0.0","10.0","470","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CDTextWidth").set("65");
            obj.getSetter("CodeFindName").set("DOXPR_PROJ_CODEFIND");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ","0.0","staCD_PROJ:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("사업유형");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_BIZ","staCD_BIZ:0.0","staCD_PROJ:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("CF_CODE_DO_03");
            obj.set_text("");
            obj.getSetter("CDTextWidth").set("65");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ_MHOD","ccfCD_BIZ:0.0","staCD_PROJ:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("사업방식");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_BIZ_MHOD","staCD_BIZ_MHOD:0.0","staCD_PROJ:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("CF_CODE_DO_04");
            obj.getSetter("CDTextWidth").set("65");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CONT","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_BIZ_STAT","0.0","staCD_PROJ:10.0","86","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_BIZ_STAT");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CLS_CONST","ccboCD_BIZ_STAT:0.0","staCD_PROJ:10.0","259","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("CF_CODE_DO_41");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CLS_CONST","ccfCD_CLS_CONST:0.0","staCD_PROJ:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("상품분류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_BIZ_STAT","staCD_CLS_CONST:0.0","staCD_PROJ:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("검토상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("정보입수");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_ID02","staDT_ACQ:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_CONT","staNO_ID02:0.0","10.0","86","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_innerdataset("dsContCombo");
            obj.set_text("");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ_FR","ccboCD_CONT:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACQ_TO","ctclDT_ACQ_FR:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PRC_BID00_00","ctclDT_ACQ_TO:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("사업관리부서");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SAUP","staCD_PRC_BID00_00:0.0","10.0","298","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOS_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.ccboCD_CONT","value","dsSearch","TY_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboCD_BIZ_STAT","value","dsSearch","CD_BIZ_STAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctclDT_ACQ_TO","value","dsSearch","DT_ACQ_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_ACQ_FR","value","dsSearch","DT_ACQ_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_SAUP.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOA_ARCH_PROJ_LIST.xfdl", function() {
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
        	this.fnSetCombo();
        	this.fnSetParameter();

        	this.FormBtns.Select.click();
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
        	this.fnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate");
        	this.fnUpdate = this.gfnFormButtonAdd("btnUpdate", "fnUpdate");
        };

        /************************************************************************
         * 확장 버튼1 : 프로젝트등록 버튼
         ************************************************************************/
        this.fnCreate = function(obj,e){
        	// 화면 오픈.
            this.gfnFormOpen("DOA", "DOA_ARCH_PROJ", "fnDialogCallback", null, 1350, 780);
        };

        /************************************************************************
         * 확장 버튼2 : 프로젝트편집 버튼
         ************************************************************************/
        this.fnUpdate = function(obj,e){
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {
        		CD_PROJ : this.dsList.getColumn(this.dsList.rowposition, "CD_PROJ")
        	};

        	// 화면 오픈.
            this.gfnFormOpen("DOA", "DOA_ARCH_PROJ", "fnDialogCallback", param, 1350, 780);
        };

        this.fnDialogCallback = function(svcID, value) {
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
           this.ARCH_TY_PROJ = "SA00102";

           this.ccfCD_PROJ = this.divSearch.form.ccfCD_PROJ; //프로젝트 관리
           this.ccfCD_BIZ  = this.divSearch.form.ccfCD_BIZ;//사업유형
           this.ccfCD_BIZ_MHOD = this.divSearch.form.ccfCD_BIZ_MHOD;//사업방식
           this.ccfCD_CLS_CONST = this.divSearch.form.ccfCD_CLS_CONST;//상품분류
           this.dxGrid = this.divData.form.objGrid;

           this.ccfCD_SAUP =  this.divSearch.form.ccfCD_SAUP;
        };


        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_PROJ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	/*2020.02.27  한대운 추가
        	조회조건변경시 그리드 초기화*/
        	this.ccfCD_PROJ.AfterCDTextChanged = "ccfCD_AfterCDTextChanged";
        	this.ccfCD_BIZ.AfterCDTextChanged = "ccfCD_AfterCDTextChanged";
        	this.ccfCD_BIZ_MHOD.AfterCDTextChanged = "ccfCD_AfterCDTextChanged";
        	this.ccfCD_CLS_CONST.AfterCDTextChanged = "ccfCD_AfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOA_ARCH_PROJ_LIST");

        	this.ccfCD_SAUP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	if(id == "ccfCD_PROJ"){
        		dsUserParam.setColumn(nrow, "TY_PROJ", this.ARCH_TY_PROJ);
        	} else if(id == "ccfCD_SAUP"){
        	  dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	  dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	  dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	  dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	  dsUserParam.setColumn(nrow, "CD_PROJ", this.divSearch.form.ccfCD_PROJ.value);
        	}

        	return true;
         }

        this.ccfCD_AfterCDTextChanged = function(id, codeFindData) {
        	this.gfnSetFormStatus(this);	// 폼상태 초기화
        	this.gfnGridClear(this.dxGrid);
        }


        /*
            조회 조건 변경시 초기화
        	2020.02.27  한대운 추가
        	조회조건변경시 그리드 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(0, "CD_TYPE", "06");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_BIZ_STAT=combo0";
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

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        // 	var today = this.gfnGetDate();
        // 	var dt_from = this.gfnAddMonth(today, -3);
        //
        // 	this.dsSearch.setColumn(0, "DT_ACQ_FR", dt_from);
        // 	this.dsSearch.setColumn(0, "DT_ACQ_TO", today);

        	this.dsSearch.setColumn(0, "TY_CONT", "미계약");
        	this.dsSearch.setColumn(0, "CD_BIZ_STAT", "");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "string");
        	this.dsSelect.addColumn("TY_BIZ", "string");
        	this.dsSelect.addColumn("TY_CONT", "string");
        	this.dsSelect.addColumn("TY_BIZ_MHOD", "string");
        	this.dsSelect.addColumn("TY_PRDCT", "string");
        	this.dsSelect.addColumn("CD_BIZ_STAT", "string");
        	this.dsSelect.addColumn("DT_ACQ_FR", "string");
        	this.dsSelect.addColumn("DT_ACQ_TO", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        }

        this.fnSelect = function(){
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();

        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.ccfCD_PROJ.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "TY_BIZ", this.ccfCD_BIZ.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "TY_CONT", this.dsSearch.getColumn(0, "TY_CONT"));
        	this.dsSelect.setColumn(0, "TY_BIZ_MHOD", this.ccfCD_BIZ_MHOD.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "TY_PRDCT", this.ccfCD_CLS_CONST.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_BIZ_STAT", this.dsSearch.getColumn(0, "CD_BIZ_STAT"));
        	this.dsSelect.setColumn(0, "DT_ACQ_FR", this.dsSearch.getColumn(0, "DT_ACQ_FR"));
        	this.dsSelect.setColumn(0, "DT_ACQ_TO", this.dsSearch.getColumn(0, "DT_ACQ_TO"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));

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
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	if (svcID == "combo")
        	{
        		this.dsCD_BIZ_STAT.insertRow(0);
        		this.dsCD_BIZ_STAT.setColumn(0, "CD_CODE", "");
        		this.dsCD_BIZ_STAT.setColumn(0, "DS_CODE", "전체");
        	} else if(svcID == "select") {
        		return;
        	}

        };

        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        		// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {
        		CD_PROJ : this.dsList.getColumn(this.dsList.rowposition, "CD_PROJ")
        	};

        	// 화면 오픈.
            this.gfnFormOpen("DOA", "DOA_ARCH_PROJ", "fnDialogCallback", param, 1350, 780);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_ACQ_FR.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_ACQ_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOA_ARCH_PROJ_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
