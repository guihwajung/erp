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
            this.set_titletext("주택-약정목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOAPR_ARCH_PROV_CONT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROJ","staCD_PROJ:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOXPR_PROJ_CODEFIND");
            obj.getSetter("CDTextWidth").set("65");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.ccfCD_PROJ.form.CDTextBox","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_PROJ.form.DSTextBox","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOA_ARCH_PROV_CONT_LIST.xfdl", function() {
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
         * 확장 버튼1 : 약정등록 버튼
         ************************************************************************/
        this.fnCreate = function(obj,e){
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_PROJ"))){
        		this.gfnAlert("프로젝트 코드를 선택하세요.");
        		return;
        	}

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , NO_PROV_CONT : 0
        	}

        	this.gfnFormOpen("DOA", "DOA_ARCH_PROV_CONT", "fnDialogCallback", param, 1180, 800);
        };

        /************************************************************************
         * 확장 버튼2 : 약정편집 버튼
         ************************************************************************/
        this.fnUpdate = function(obj,e){
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_PROJ"))){
        		this.gfnAlert("프로젝트 코드를 선택하세요.");
        		return;
        	}

        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {
        		CD_PROJ : this.dsSearch.getColumn(0, "CD_PROJ")
        	  , DS_PROJ : this.dsSearch.getColumn(0, "DS_PROJ")
        	  , NO_PROV_CONT : this.dsList.getColumn(this.dsList.rowposition, "NO_PROV_CONT")
        	}

        	this.gfnFormOpen("DOA", "DOA_ARCH_PROV_CONT", "fnDialogCallback", param, 1180, 800);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
           this.ARCH_TY_PROJ = "SA00102";

           this.ccfCD_PROJ = this.divSearch.form.ccfCD_PROJ; //프로젝트 관리
           this.dxGrid = this.divData.form.objGrid;
        };


        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_PROJ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOA_ARCH_PROV_CONT");
        	/*2020.02.27  한대운 추가
        	조회조건변경시 그리드 초기화*/
        	this.ccfCD_PROJ.AfterCDTextChanged = "ccfCD_AfterCDTextChanged";
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	if(id == "ccfCD_PROJ"){
        		dsUserParam.setColumn(nrow, "TY_PROJ", this.ARCH_TY_PROJ);
        	}

        	return true;
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

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "string");
        }

        this.ccfCD_AfterCDTextChanged = function(id, codeFindData) {
        	this.gfnSetFormStatus(this);	// 폼상태 초기화
        	this.gfnGridClear(this.dxGrid);
        }


        this.fnSelect = function(){
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_PROJ"))){
        		this.gfnAlert("프로젝트 코드를 선택하세요.");
        		return;
        	}
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();

        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.ccfCD_PROJ.form.CDTextBox.value);

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode == 0) {
        		if(svcID == "select") {
        			return;
        		}
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOA_ARCH_PROV_CONT_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
