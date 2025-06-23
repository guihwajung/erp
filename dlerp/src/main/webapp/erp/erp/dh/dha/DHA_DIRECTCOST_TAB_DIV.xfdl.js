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
            this.set_titletext("직간접비배분");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHDPR_DIRECTCOST_DIV_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListDc01", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListDc02", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListDc03", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListIdc01", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListIdc02", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListIdc03", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListIdc04", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListIdc05", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","staCD_CORP:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACCOUNT","staYM:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
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
            obj.set_text("직접비");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staDirectCost1","4","0","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_text("1. 직접비 배부비율 산정");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGridDirectCost1","0","staDirectCost1:5",null,"200","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDirectCost2","4","objGridDirectCost1:10","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_text("2. 직접비 배부대상 집계");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGridDirectCost2","0","staDirectCost2:5",null,"200","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staDirectCost3","4","objGridDirectCost2:10","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_text("3. 직접비 배부");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGridDirectCost3","0","staDirectCost3:5",null,"200","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("간접비");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staInDirectCost1","4","0","50%","50",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("78");
            obj.set_text("1-1. 간접비(고용산재-현장) 배부비율 산정\r\n(고용산재-본사 의 경우 배분없이 바로 판관비)");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGridInDirectCost1","0","staInDirectCost1:5",null,"200","0","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staInDirectCost2","4","objGridInDirectCost1:5","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("78");
            obj.set_text("1-2. 간접비(감가상각) 배부비율 산정");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGridInDirectCost2","0","staInDirectCost2:5",null,"200","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staInDirectCost3","4","objGridInDirectCost2:5","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("78");
            obj.set_text("2. 간접비 배부대상 집계");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGridInDirectCost3","0","staInDirectCost3:5",null,"200","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("staInDirectCost4","4","objGridInDirectCost3:5","50%","25",null,null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("78");
            obj.set_text("3. 간접비 배부");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textDecoration("none");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGridInDirectCost4","0","staInDirectCost4:5",null,"200","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGridInDirectCost5","0","objGridInDirectCost4:5",null,"200","0",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.ctclYM_ACCOUNT.form.TextBox","value","dsSearch","YM_ACCOUNT");
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
        this.registerScript("DHA_DIRECTCOST_TAB_DIV.xfdl", function() {
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
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_CORP      = this.divSearch.form.ccfCD_CORP;
        	this.ctclYM_ACCOUNT       = this.divSearch.form.ctclYM_ACCOUNT;

        	this.tabData = this.divData.form.tabData;

        	//this.dxGrid = this.divData.form.objGrid;
        	this.dxGridDc1 = this.divData.form.tabData.tab1.form.objGridDirectCost1;
        	this.dxGridDc2 = this.divData.form.tabData.tab1.form.objGridDirectCost2;
        	this.dxGridDc3 = this.divData.form.tabData.tab1.form.objGridDirectCost3;

        	this.dxGridIdc1 = this.divData.form.tabData.tab2.form.objGridInDirectCost1;
        	this.dxGridIdc2 = this.divData.form.tabData.tab2.form.objGridInDirectCost2;
        	this.dxGridIdc3 = this.divData.form.tabData.tab2.form.objGridInDirectCost3;
        	this.dxGridIdc4 = this.divData.form.tabData.tab2.form.objGridInDirectCost4;
        	this.dxGridIdc5 = this.divData.form.tabData.tab2.form.objGridInDirectCost5;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//법인코드
        	this.ccfCD_CORP.BeforeUserDataSetParam      = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged          = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.fnSetGridInit(0);	// 로딩시 직접비 먼저

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        	this.dsSearch.setColumn(0, "YM_ACCOUNT", this.gfnGetDate().substring(0, 6));
        };

        // 그리드 세팅
        this.fnSetGridInit = function (nTabIdx){
        	trace("그리드 세팅->" + nTabIdx);
        	switch(nTabIdx){
        	case 0:	// 직접비
        		this.gfnGridInit(this.dxGridDc1, this.dsListDc01, "DH", "DHA_DIRECTCOST_RATE");		// 직접비배부비율
        		this.gfnGridInit(this.dxGridDc2, this.dsListDc02, "DH", "DHA_DIRECTCOST_TARGET");	// 직접비배부대상
        		this.gfnGridInit(this.dxGridDc3, this.dsListDc03, "DH", "DHA_DIRECTCOST_DIV");		// 직접비배부

        		break;
        	case 1:	// 간접비
        		this.gfnGridInit(this.dxGridIdc1, this.dsListIdc01, "DH", "DHA_INDIRECTCOST_EMP_IA_RATE");	// 간접비배부비율(고용산재-현장)
        		this.gfnGridInit(this.dxGridIdc2, this.dsListIdc02, "DH", "DHA_INDIRECTCOST_DEP_RATE");		// 간접비배부비율(감가상각)
        		this.gfnGridInit(this.dxGridIdc3, this.dsListIdc03, "DH", "DHA_INDIRECTCOST_TARGET");		// 간접비배부대상
        		this.gfnGridInit(this.dxGridIdc4, this.dsListIdc04, "DH", "DHA_INDIRECTCOST_EMP_IA_DIV");	// 간접비배부(고용산재)
        		this.gfnGridInit(this.dxGridIdc5, this.dsListIdc05, "DH", "DHA_INDIRECTCOST_DEP_DIV");		// 간접비배부(감가상각)

        		break;
        	}
        }

        // 그리드 초기화
        this.fnSetGridClear = function (nTabIdx){
        	trace("그리드 초기화->" + nTabIdx);
        	switch(nTabIdx){
        	case 0:	// 직접비
        		this.gfnGridClear(this.dxGridDc1);	// 직접비배부비율
        		this.gfnGridClear(this.dxGridDc2);	// 직접비배부대상
        		this.gfnGridClear(this.dxGridDc3);	// 직접비배부

        		break;
        	case 1:	// 간접비
        		this.gfnGridClear(this.dxGridIdc1);	// 간접비배부비율(고용산재-현장)
        		this.gfnGridClear(this.dxGridIdc2);		// 간접비배부비율(감가상각)
        		this.gfnGridClear(this.dxGridIdc3);		// 간접비배부대상
        		this.gfnGridClear(this.dxGridIdc4);	// 간접비배부(고용산재)
        		this.gfnGridClear(this.dxGridIdc5);		// 간접비배부(감가상각)

        		break;
        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	//법인코드
        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {
        		case "ccfCD_CORP" :
        			break;
        	}
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_ACCOUNT"  , "string");
        	this.dsSelect.addColumn("CD_CORP"     , "string");
        	this.dsSelect.addColumn("YN_DIRECT"     , "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	var nTabIdx = this.tabData.tabindex;
        	trace("텝인덱스->" + nTabIdx);

        	var YN_DIRECT = (nTabIdx == 0) ? "Y" : "N";	// Y직접 N간접

        	var outDataDc = "dsListDc01=select0 dsListDc02=select1 dsListDc03=select2";
        	var outDataIdc = "dsListIdc01=select0 dsListIdc02=select1 dsListIdc03=select2 dsListIdc04=select3 dsListIdc05=select4";

        	this.dsSelect.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YM_ACCOUNT"  , this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	this.dsSelect.setColumn(0, "YN_DIRECT"  , YN_DIRECT);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = (nTabIdx == 0) ? outDataDc : outDataIdc;
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
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

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("법인코드를 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_ACCOUNT")) ) {
        		this.gfnAlert("작업년월은 반드시 입력 하셔야 합니다.");
        		this.ctclYM_ACCOUNT.setFocus();
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
        	if (svcID == "select") {
        		//this.gfnGridAfterSelect(this.dxGrid);
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
         this.dsSearch_onvaluechanged = function(obj,e) {

        	if(e.oldvalue != e.newvalue) {
        		var nTabIdx = this.divData.form.tabData.tabindex;

        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		//this.gfnGridClear(this.dxGrid);
        		this.fnSetGridClear(nTabIdx);
           }
        }
        this.divData_tabData_onchanged = function(obj,e)
        {
        	var nTabIdx = this.divData.form.tabData.tabindex;

        	// 그리드 셋팅
        	this.fnSetGridInit(nTabIdx);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_DIRECTCOST_TAB_DIV.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
