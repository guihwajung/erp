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
            this.set_titletext("미결잔액조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHCPR_CLMOB_BALANCE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("0");
            obj.set_text("법인코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0","10","259","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("AutoSet").set("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BE","ccfCD_CORP:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BE","staCD_DEPT_BE:0","10","260","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT_SELECT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","92","42","259","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFVENDOR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT","ccfCD_VENDOR:0","42","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("계정코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACCOUNT","staCD_ACCOUNT:0","42","259","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFACNT_AR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BH","1054","74","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("발행부서");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","42","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BH","staCD_DEPT_BH:0","74","259","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT_SELECT");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ACCOUNT","ccfCD_DEPT_BE:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT","staDT_ACCOUNT:0","10","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_ACCOUNT.form.CDTextBox","value","dsSearch","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_ACCOUNT.form.DSTextBox","value","dsSearch","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_VENDOR.form.DSTextBox","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_DEPT_BE.form.CDTextBox","value","dsSearch","CD_DEPT_BE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_DEPT_BE.form.DSTextBox","value","dsSearch","DS_DEPT_BE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ctclDT_ACCOUNT","value","dsSearch","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHC_CLMOB_BALANCE_SELECT.xfdl", function() {
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

        	this.dsSearch.set_enableevent(false);
        	this.dsSearch.setColumn(0, "CD_CORP"	 , this.AuthClient.CD_CORP);		//법인코드
        	this.dsSearch.setColumn(0, "DS_CORP"	 , this.AuthClient.DS_CORP);		//법인코드명
        	this.dsSearch.setColumn(0, "CD_DEPT_BE"	 , this.AuthClient.CD_DEPT_ACNT);	//귀속부서
        	this.dsSearch.setColumn(0, "DS_DEPT_BE"	 , this.AuthClient.DS_DEPT_ACNT);	//귀속부서명
        	this.dsSearch.setColumn(0, "DT_ACCOUNT"  , this.gfnGetDate());				//기준일 시작
        	this.dsSearch.set_enableevent(true);

        	this.ccfCD_CORP.form.CDTextBox.setFocus();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnMikyulSearch = this.gfnFormButtonAdd("MikyulSearch", "fnMikyulSearch");  	//미결현황조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.gfnSetElements();
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
         	this.ccfCD_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	//계정코드
         	this.ccfCD_DEPT_BE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	//귀속부서
         	this.ccfCD_VENDOR.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	//거래처

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHC_CLMOB_BALANCE_SELECT");

        	this.dxGrid.addEventHandler("oncelldblclick" , this.fnGrid_OnCelldblclick, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"	 , "string");
        	this.dsSelect.addColumn("DT_ACCOUNT" , "string");
        	this.dsSelect.addColumn("CD_ACCOUNT" , "string");
        	this.dsSelect.addColumn("CD_DEPT_BE" , "string");
        	this.dsSelect.addColumn("CD_VENDOR"	 , "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	var nRow = this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP"	 , this.dsSearch.getColumn(0, "CD_CORP"));          // 법인코드
        	this.dsSelect.setColumn(0, "DT_ACCOUNT"	 , this.dsSearch.getColumn(0, "DT_ACCOUNT"));       // 기준일자
        	this.dsSelect.setColumn(0, "CD_ACCOUNT"	 , this.dsSearch.getColumn(0, "CD_ACCOUNT"));       // 계정코드
        	this.dsSelect.setColumn(0, "CD_DEPT_BE"	 , this.dsSearch.getColumn(0, "CD_DEPT_BE"));  		// 귀속부서
        	this.dsSelect.setColumn(0, "CD_VENDOR"	 , this.dsSearch.getColumn(0, "CD_VENDOR"));    	// 거래처

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

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
        	if(!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

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
        	switch(svcID) {
        	case "select" :
        		this.gfnGridAfterSelect(this.dxGrid);

        		break;
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        		this.gfnAlert("법인코드를 먼저 선택하세요.", function (){
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		});
        		return false;
        	}
        	switch(id) {
        	case "ccfCD_DEPT_BE" :	//귀속부서
        		dsUserParam.setColumn(nrow, "CD_CORP"	  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "ID_USER"	  , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_DEPT_ACNT", this.AuthClient.CD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "CD_DIV"	  , "S");
        		dsUserParam.setColumn(nrow, "REF_01"	  , "");
        		dsUserParam.setColumn(nrow, "REF_02"	  , "");
        		dsUserParam.setColumn(nrow, "REF_03"	  , "");
        		dsUserParam.setColumn(nrow, "REF_04"	  , "");
        		dsUserParam.setColumn(nrow, "REF_05"	  , "");
        		break;
        	case "ccfCD_ACCOUNT" :	//계정코드
        		dsUserParam.setColumn(nrow, "CD_CORP"	  , this.dsSearch.getColumn(0, "CD_CORP"));
        		break;
        	case "ccfCD_VENDOR" :	//거래처
        		dsUserParam.setColumn(nrow, "CD_CORP"	  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "TY_VENDOR"   , "");
        		dsUserParam.setColumn(nrow, "YN_USE"  	  , "Y");
        		break;
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        //그리드 더블클릭 이벤트
        this.fnGrid_OnCelldblclick = function(obj,e){
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	this.btnMikyulSearch.click();
        };

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //검색조건 변경 이벤트
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnGridClear(this.dxGrid);

        		switch(e.columnid) {
        		case "CD_CORP" :	//법인코드
        			this.ccfCD_ACCOUNT.form.fnCodeFindClear(false);
        			this.ccfCD_VENDOR.form.fnCodeFindClear(false);
        			this.ccfCD_DEPT_BE.form.fnCodeFindClear(false);
        			break;
        		}
        	}
        };

        //미결현황조회
        this.fnMikyulSearch = function (obj,e){
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.CD_CORP    = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP    = this.dsSearch.getColumn(0, "DS_CORP");
        	param.CD_VENDOR  = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	param.DS_VENDOR  = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");
        	param.CD_DEPT_BE = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_BE");
        	param.DS_DEPT_BE = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_BE");
        	param.CD_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "CD_ACCOUNT");
        	param.DS_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "DS_ACCOUNT");
        	param.DT_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "DT_ACCOUNT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHC_BOND_SELECT", "", param, screen.availWidth, screen.availHeight-100);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHC_CLMOB_BALANCE_SELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
