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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZRPR_APPMANAGE_SELECT_01</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DZRPR_APPMANAGE_SELECT_03</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DZRPR_APPMANAGE_SELECT_02</Col></Row><Row><Col id=\"SP\">DZRPR_APPMANAGE_SELECT_04</Col><Col id=\"TARGET\">select3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID_USER\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","10","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_SearchY");
            obj.set_taborder("0");
            obj.set_text("사용자");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_USER","60","10","250","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("미결");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("기안상신");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("결재완료");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("반려");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.ccfID_USER.form.CDTextBox","value","dsSearch","ID_USER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZR_AP_MANAGE_P.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.divSearch.form.ccfID_USER.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);

        	this.FormBtns.Select.click();

        // 	if(this.FormInfo.GR_SEARCH >= 7)
        // 	{
        // 		this.divSearch.form.ccfID_USER.set_enable(false);
        // 	}
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
        	this.btnOPENAP = this.gfnFormButtonAdd("btnOPENAP", "fnOPENAP");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfID_USER = this.divSearch.form.ccfID_USER;
        	this.dxGrid = this.divData.form.tabData.tab1.form.objGrid;
        	this.dxGrid1 = this.divData.form.tabData.tab2.form.objGrid1;
        	this.dxGrid2 = this.divData.form.tabData.tab3.form.objGrid2;
        	this.dxGrid3 = this.divData.form.tabData.tab4.form.objGrid3;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZR_AP_MANAGE_P1");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DZ", "DZR_AP_MANAGE_P3");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DZ", "DZR_AP_MANAGE_P2");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DZ", "DZR_AP_MANAGE_P5");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_USER", "string");
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

        	this.dsSelect.setColumn(0, "ID_USER", this.dsSearch.getColumn(0, "ID_USER"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select1=dsSelect select2=dsSelect select3=dsSelect";
        	var outData     = "dsList=select0 dsList1=select10 dsList2=select20 dsList3=select30";
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
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"ID_USER"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfID_USER.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사용자는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

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
        		//this.gfnGridAfterSelect(this.dxGrid);
        		if(this.dsList.rowcount > 0 || this.dsList1.rowcount > 0 || this.dsList2.rowcount > 0){
        			this.btnOPENAP.set_enable(true);
        		}else{
        			this.btnOPENAP.set_enable(false);
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
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
        	}
        };


         // 품의서조회 버튼 클릭시 팝업화면 호출
         this.fnOPENAP = function(obj,e) {
        	var param = {};

        	if(this.divData.form.tabData.tabindex == 0){
        		// 선택된 row가 있을 경우에만 팝업을 띄움
        		if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        		var nRow = this.dsList.rowposition;
        		var idForm = this.dsList.getColumn(nRow, "ID_FORM");		// 화면ID
        		var cdModule = this.dsList.getColumn(nRow, "CD_MODULE");	// 업무모듈코드

        		param.PARAM01 = this.dsList.getColumn(nRow, "V_PARAM01");
        		param.PARAM02 = this.dsList.getColumn(nRow, "V_PARAM02");
        		param.PARAM03 = this.dsList.getColumn(nRow, "V_PARAM03");
        		param.PARAM04 = this.dsList.getColumn(nRow, "V_PARAM04");
        		param.ID_AP = this.dsList.getColumn(nRow, "ID_AP");	// 전자결재문서번호
        	}else if(this.divData.form.tabData.tabindex == 1){
        		// 선택된 row가 있을 경우에만 팝업을 띄움
        		if (!this.gfnGridIsRow(this.dxGrid1)) { return false; }

        		var nRow = this.dsList1.rowposition;
        		var idForm = this.dsList1.getColumn(nRow, "ID_FORM");		// 화면ID
        		var cdModule = this.dsList1.getColumn(nRow, "CD_MODULE");	// 업무모듈코드

        		param.PARAM01 = this.dsList1.getColumn(nRow, "V_PARAM01");
        		param.PARAM02 = this.dsList1.getColumn(nRow, "V_PARAM02");
        		param.PARAM03 = this.dsList1.getColumn(nRow, "V_PARAM03");
        		param.PARAM04 = this.dsList1.getColumn(nRow, "V_PARAM04");
        		param.ID_AP = this.dsList1.getColumn(nRow, "ID_AP");	// 전자결재문서번호
        	}else if(this.divData.form.tabData.tabindex == 2){
        		// 선택된 row가 있을 경우에만 팝업을 띄움
        		if (!this.gfnGridIsRow(this.dxGrid2)) { return false; }

        		var nRow = this.dsList2.rowposition;
        		var idForm = this.dsList2.getColumn(nRow, "ID_FORM");		// 화면ID
        		var cdModule = this.dsList2.getColumn(nRow, "CD_MODULE");	// 업무모듈코드

        		param.PARAM01 = this.dsList2.getColumn(nRow, "V_PARAM01");
        		param.PARAM02 = this.dsList2.getColumn(nRow, "V_PARAM02");
        		param.PARAM03 = this.dsList2.getColumn(nRow, "V_PARAM03");
        		param.PARAM04 = this.dsList2.getColumn(nRow, "V_PARAM04");
        		param.ID_AP = this.dsList2.getColumn(nRow, "ID_AP");	// 전자결재문서번호
        	}
        	else if(this.divData.form.tabData.tabindex == 3){
        		// 선택된 row가 있을 경우에만 팝업을 띄움
        		if (!this.gfnGridIsRow(this.dxGrid3)) { return false; }

        		var nRow = this.dsList3.rowposition;
        		var idForm = this.dsList3.getColumn(nRow, "ID_FORM");		// 화면ID
        		var cdModule = this.dsList3.getColumn(nRow, "CD_MODULE");	// 업무모듈코드

        		param.PARAM01 = this.dsList3.getColumn(nRow, "V_PARAM01");
        		param.PARAM02 = this.dsList3.getColumn(nRow, "V_PARAM02");
        		param.PARAM03 = this.dsList3.getColumn(nRow, "V_PARAM03");
        		param.PARAM04 = this.dsList3.getColumn(nRow, "V_PARAM04");
        		param.ID_AP = this.dsList3.getColumn(nRow, "ID_AP");	// 전자결재문서번호
        	}

        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다

        	this.gfnFormOpen(cdModule, idForm, "fnOPENAP_callback", param);
        }

        // 팝업 닫으면 재조회
        this.fnOPENAP_callback = function(svcID, value)
        {
        	this.FormBtns.Select.click();
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZR_AP_MANAGE_P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
