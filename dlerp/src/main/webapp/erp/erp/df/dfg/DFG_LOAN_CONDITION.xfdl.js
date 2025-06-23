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
            this.set_titletext("대여금약정현황조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFGPR_LOANCOND_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_REPAY1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","sta04:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PERIOD","cfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("기준년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("calYM_WORK","staCD_PERIOD:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","sta04:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("대여종류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_LOAN","sta00:0.0","sta04:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_LOAN:0.0","sta04:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfNO_LOAN","sta01:0.0","sta04:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","cfNO_LOAN:0.0","sta04:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("완료여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_REPAY","sta03:0.0","sta04:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_REPAY1");
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
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.addChild(obj.name, obj);
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
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DFG_LOAN_CONDITION.xfdl", function() {
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
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	 this.btnAgrMntInf = this.gfnFormButtonAdd("btnAgrMntInf", "fnAgrMntInf", "약정정보");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	// 조회조건
        	this.ScfCD_CORP  = this.divSearch.form.cfCD_CORP;				// 법인코드
        	this.calYM_WORK  = this.divSearch.form.calYM_WORK;				// 기준년월
        	this.ScfCD_LOAN = this.divSearch.form.ccfCD_LOAN;				// 대여종류
        	this.ScfNO_LOAN = this.divSearch.form.cfNO_LOAN;				// 관리번호
        	this.ScboTY_REPAY = this.divSearch.form.cboTY_REPAY;			// 완료여부

        	this.dxGrid = this.divData.form.objGrid;		// 그리드
        	this.grSearch = this.FormInfo.GR_SEARCH;						// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;						// 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ScfCD_CORP.CodeFindName = "DZX_CFCORP";					// 법인코드(조회조건)
        	this.ScfCD_LOAN.CodeFindName = "DFX_CFLOANCODE";				// 대여종류(조회조건)
        	this.ScfNO_LOAN.CodeFindName = "DFX_CFNO_LOAN";					// 관리번호(조회조건)

        	this.ScfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ScfCD_LOAN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ScfNO_LOAN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ScfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ScfCD_LOAN.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ScfNO_LOAN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFG_LOANCOND");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	if (this.gfnIsNull(this.ScfCD_CORP.form.CDTextBox.value)) {
        		this.ScfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ScfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	var vToday = this.gfnGetDate().substr(0,6);
        	this.calYM_WORK.form.TextBox.set_value(vToday);

        	// 법인코드 포커스추가
        	this.ScfCD_CORP.form.CDTextBox.setFocus();

        	// 권한체크 - 해당부서내역만 조회가능
        	if (nexacro.toNumber(this.grSearch) >= 2) {
        		this.ScfCD_CORP.set_enable(false);
        	}
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	//검색조건 데이터셋
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("CD_LOAN", "string");
        	this.dsSelect.addColumn("NO_LOAN", "string");
        	this.dsSelect.addColumn("TY_REPAY", "string");
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
        	//this.fnSelectEnable();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.ScfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YM_WORK", this.calYM_WORK.form.TextBox.value);
        	this.dsSelect.setColumn(0, "CD_LOAN", this.ScfCD_LOAN.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "NO_LOAN", this.ScfNO_LOAN.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "TY_REPAY", this.ScboTY_REPAY.value);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	//trace(this.dsSelect.saveXML());

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
        	if (this.gfnIsNull(this.calYM_WORK.form.TextBox.value)) {
        		this.gfnAlert("기준년월은 필수입력 입니다.");
        		this.calYM_WORK.form.TextBox.setFocus();
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
        		this.gfnGridAfterSelect(this.dxGrid);

        		//trace("this.dsList.rowcount :: " + this.dsList.rowcount);
        		//trace("this.dsList.rowposition :: " + this.dsList.rowposition);

        		// 컴포넌트 enable/disable처리
        		this.fnSetComponent(false);
        	}else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "combo"){

        		//  조회조건(완료여부)
        		var iRow = this.dsTY_REPAY1.insertRow(0);
        		this.dsTY_REPAY1.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_REPAY1.setColumn(iRow, "DS_CODE", "전체");
        		this.ScboTY_REPAY.set_index(0);

        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		this.fnSearchInit();
        		break;

        	// 대여종류(조회조건)
        	case "ccfCD_LOAN":
        		this.fnSearchInit();
        		break;

        	// 관리번호(조회조건)
        	case "cfNO_LOAN":
        		this.fnSearchInit();
        		break;

        	default:
        	}
        	return true;
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdCorp = this.ScfCD_CORP.form.CDTextBox.value;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        		break;

        	// 대여종류(조회조건)
        	case "ccfCD_LOAN":
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		break;

        	// 관리번호(조회조건)
        	case "cfNO_LOAN":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp) ? "" : cdCorp);
        		break;

        	default:
        	}
        	return true;
        }

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
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        /*
         * 컴포넌트 enable/disable처리
         */
        this.fnSetComponent = function(flag) {

        //	this.txtNO_LOAN.set_enable(flag);		//  대여번호(관리번호)
        // 	this.StxtAccntNo.set_enable(flag);		//  계좌번호
        // 	this.ccfAccntOwner.set_enable(flag);	//  계좌소유주
        }


        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "G9");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_REPAY1=combo0";
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


        //검색어 키다운 이벤트
        this.divSearch_txtSEARCH_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnSelect();
        	}
        };


        // 약정정보
        this.fnAgrMntInf = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};

        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");	// 법인코드
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");	// 법인명
        	param.NO_LOAN = this.dsList.getColumn(this.dsList.rowposition, "NO_LOAN");	// 관리번호
        	param.NM_LOAN = this.dsList.getColumn(this.dsList.rowposition, "NM_LOAN");	// 대여명
        	param.CD_LOAN = this.dsList.getColumn(this.dsList.rowposition, "CD_LOAN");	// 대여종류코드
        	param.DS_LOAN = this.dsList.getColumn(this.dsList.rowposition, "DS_LOAN");	// 대여종류명

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFG_LOAN", "fnPopCallBack", param);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_REPAY.addEventHandler("onitemchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DFG_LOAN_CONDITION.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
