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
            this.set_titletext("예적금거래현황조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFFPR_YEJUKUMSCDL_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BANKITEM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EXPIRY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EXPIRY", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","sta04:0.0","10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","sta04:477","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("거래기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calFR_TRADE","sta00:0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","calFR_TRADE:0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calTO_TRADE","staCD_TILDE:0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_BANKITEM","93","sta04:10","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","cfCD_BANKITEM:-364","sta04:10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("금융상품");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","359","sta04:10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("금융기관");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","451","44","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","sta04:267","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("완료여부");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_EXPIRY","sta03:0","sta04:-24","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_EXPIRY");
            obj.set_text("진행중");
            obj.set_value("N");
            obj.set_index("-1");
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
            obj = new BindItem("item0","divSearch.form.cfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cfCD_BANKITEM.form.CDTextBox","value","dsSearch","CD_BANKITEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calFR_TRADE","value","dsSearch","FR_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calTO_TRADE","value","dsSearch","TO_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboTY_EXPIRY","value","dsSearch","TY_EXPIRY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFF_DEPOSIT_SCHEDULE.xfdl", function() {
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

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 입력,저장,삭제 버튼 비활성화 처리
        //  	this.FormBtns.Add.set_enable(false);
        //  	this.FormBtns.Save.set_enable(false);
        //  	this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAgreementInf = this.gfnFormButtonAdd("btnAgreementInf", "fnAgreementInf");//, "약정정보");
        	this.btnSlipSelect = this.gfnFormButtonAdd("btnSlipSelect", "fnSlipSelect"); //전표조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	// 조회조건
        	this.cfCD_CORP  = this.divSearch.form.cfCD_CORP;			// 법인코드
        	this.calFR_TRADE = this.divSearch.form.calFR_TRADE;			// 거래일자(from)
        	this.calTO_TRADE = this.divSearch.form.calTO_TRADE;			// 거래일자(to)
        	this.cfCD_BANKITEM = this.divSearch.form.cfCD_BANKITEM;		// 예적금종류
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;		// 금융기관
        	this.cboTY_EXPIRY = this.divSearch.form.cboTY_EXPIRY;			// 완료여부

        	this.dxGrid = this.divData.form.objGrid;				// 그리드
        	this.grSearch = this.FormInfo.GR_SEARCH;				// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;				// 그룹코드
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.cfCD_CORP.CodeFindName = "DZX_CFCORP";					// 법인코드(조회조건)
        	this.cfCD_BANKITEM.CodeFindName = "DFX_CFBANKITEM";			// 금융상품(조회조건)
        	this.ccfCD_VENDOR.CodeFindName = "DFX_CFVENDOR";		// 관리번호(조회조건)

        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_BANKITEM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.cfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_BANKITEM.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFF_DEPOSIT_SCHEDULE");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	// 법인코드 init
        	if (this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)) {
        		this.cfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.cfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "FR_TRADE", this.gfnGetFirstDate(today));
        	this.dsSearch.setColumn(0, "TO_TRADE", today);


        	// 권한체크
        	if (nexacro.toNumber(this.grSearch) >= 2) {
        		this.cfCD_CORP.set_enable(false);
        	}

        	this.cfCD_CORP.form.CDTextBox.setFocus();
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("FR_TRADE", "string");
        	this.dsSelect.addColumn("TO_TRADE", "string");
        	this.dsSelect.addColumn("CD_BANKITEM", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("TY_EXPIRY", "string");
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
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "FR_TRADE", this.dsSearch.getColumn(0, "FR_TRADE"));
        	this.dsSelect.setColumn(0, "TO_TRADE", this.dsSearch.getColumn(0, "TO_TRADE"));
        	this.dsSelect.setColumn(0, "CD_BANKITEM", this.dsSearch.getColumn(0, "CD_BANKITEM"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "TY_EXPIRY", this.dsSearch.getColumn(0, "TY_EXPIRY"));

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
        this.fnSave = function(svcId) {

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
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	 else if(svcID == "combo") {

        		//  조회조건(완료여부)
        		var iRow = this.dsTY_EXPIRY.insertRow(0);
        		this.dsTY_EXPIRY.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_EXPIRY.setColumn(iRow, "DS_CODE", "전체");
        		this.cboTY_EXPIRY.set_index(0);
        	}
        }


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdCorp = this.cfCD_CORP.form.CDTextBox.value;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        		break;

        	// 예적금종류(조회조건)
        	case "cfCD_BANKITEM":
        		dsUserParam.setColumn(nrow, "YN_USE", "");
        		break;

        	// 관리번호(조회조건)
        	case "ccfCD_VENDOR":
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "전체");
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		break;

        	default:
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		break;

        	// 관리번호(조회조건)
        	case "ccfCD_VENDOR":
        		break;

        	// 예적금종류(조회조건)
        	case "cfCD_BANKITEM":
        		break;

        	default:
        	}
        	return true;
        }



        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // 약정정보
        this.fnAgreementInf = function(obj,e) {

        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};

        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");			// 법인코드
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");			// 법인명
        	param.NO_YEJUKUM = this.dsList.getColumn(this.dsList.rowposition,"NO_YEJUKUM");		// 관리번호
        	param.NM_YEJUKUM = this.dsList.getColumn(this.dsList.rowposition,"NM_YEJUKUM");		// 예적금명
        	param.CD_BANKITEM = this.dsList.getColumn(this.dsList.rowposition,"CD_BANKITEM");	// 금융상품코드
        	param.DS_BANKITEM = this.dsList.getColumn(this.dsList.rowposition,"DS_BANKITEM");	// 금융상품명

        	this.gfnFormOpen("DFF", "DFF_DEPOSIT_REG", "fnPopCallBack", param);
        }




        // 공통코드콤보
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "F9");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_EXPIRY=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };


        // 전표조회
        this.fnSlipSelect = function(obj,e) {


        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if ( this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP") )) {
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}
        	//var chkRow = this.dsList.findRow("CHK", 1);
        	var param = {};
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP");
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	//trace("this.FormInfo.CD_MODULE :: " + this.FormInfo.CD_MODULE);
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopCallBack", param);

        }

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
            this.divSearch.form.calFR_TRADE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.calTO_TRADE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.cboTY_EXPIRY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.objGrid.addEventHandler("oncellclick",this.divData_objGrid_oncellclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFF_DEPOSIT_SCHEDULE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
