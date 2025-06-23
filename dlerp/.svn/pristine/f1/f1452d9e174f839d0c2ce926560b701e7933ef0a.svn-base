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
            this.set_titletext("차입금 약정현황 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFCPR_CHAIPCOND_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_REPAY1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PERIOD","cfCD_CORP:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("기준년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("calYM_WORK","staCD_PERIOD:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("차입종류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CHAIP","sta00:0.0","staCD_CORP:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","cfCD_CHAIP:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfNO_CHAIP","sta01:0.0","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","cfNO_CHAIP:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("완료여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_REPAY","sta03:0.0","staCD_CORP:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
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
            obj._setContents("");
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
        this.registerScript("DFC_CHAIP_CONDITION.xfdl", function() {
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

        	// 기준일자 포커스추가
        	this.ScfCD_CORP.form.CDTextBox.setFocus();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 입력,저장,삭제 버튼 비활성화 처리
         	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Save.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
        };

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
        	this.ScfCD_CHAIP = this.divSearch.form.cfCD_CHAIP;				// 차입종류
        	this.ScfNO_CHAIP = this.divSearch.form.cfNO_CHAIP;				// 관리번호
        	this.ScboTY_REPAY = this.divSearch.form.cboTY_REPAY;			// 완료여부

        	this.dxGrid = this.divData.form.objGrid;						// 그리드
        	this.grSearch = this.FormInfo.GR_SEARCH;						// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;						// 그룹코드
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ScfCD_CORP.CodeFindName = "DZX_CFCORP";					// 법인코드(조회조건)
        	this.ScfCD_CHAIP.CodeFindName = "DFX_CFCHAIPKIND";				// 차입종류(조회조건)
        	this.ScfNO_CHAIP.CodeFindName = "DFX_CFNO_CHAIP";				// 관리번호(조회조건)

        	this.ScfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ScfCD_CHAIP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ScfNO_CHAIP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ScfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ScfCD_CHAIP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ScfNO_CHAIP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFC_CHAIPCOND");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";


        	// 법인코드 init
        	if (this.gfnIsNull(this.ScfCD_CORP.form.CDTextBox.value)) {
        		this.ScfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ScfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	var vToday = this.gfnGetDate().substr(0,6);
        	this.calYM_WORK.form.TextBox.set_value(vToday);

        	// 권한체크
        	if (nexacro.toNumber(this.grSearch) >= 2) {
        		this.ScfCD_CORP.set_enable(false);
        	}
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("CD_CHAIP", "string");
        	this.dsSelect.addColumn("NO_CHAIP", "string");
        	this.dsSelect.addColumn("TY_REPAY", "string");

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
        	this.dsSelect.setColumn(0, "CD_CORP", this.ScfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YM_WORK", this.calYM_WORK.form.TextBox.value);
        	this.dsSelect.setColumn(0, "CD_CHAIP", this.ScfCD_CHAIP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "NO_CHAIP", this.ScfNO_CHAIP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "TY_REPAY", this.ScboTY_REPAY.value);

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
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "combo") {

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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdCorp = this.ScfCD_CORP.form.CDTextBox.value;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "ScfCD_CORP":
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        		break;

        	// 차입종류(조회조건)
        	case "cfCD_CHAIP":
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		break;

        	// 관리번호(조회조건)
        	case "cfNO_CHAIP":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp) ? "" : cdCorp);
        		break;

        	default:
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "ScfCD_CORP":
        		this.fnSearchInit();
        		break;

        	// 차입종류(조회조건)
        	case "cfCD_CHAIP":
        		this.fnSearchInit();
        		break;

        	// 관리번호(조회조건)
        	case "cfNO_CHAIP":
        		this.fnSearchInit();
        		break;

        	default:
        	}
        	return true;
        }



        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
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
        this.fnAgrMntInf = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};

        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");		// 법인코드
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");		// 법인명
        	param.CD_CHAIP = this.dsList.getColumn(this.dsList.rowposition, "CD_CHAIP");	// 차입종류코드
        	param.DS_CHAIP = this.dsList.getColumn(this.dsList.rowposition,"DS_CHAIP");		// 차입종류명
        	param.NO_CHAIP = this.dsList.getColumn(this.dsList.rowposition,"NO_CHAIP");		// 관리번호
        	param.NM_CHAIP = this.dsList.getColumn(this.dsList.rowposition,"NM_CHAIP");		// 관리번호명
        	param.TY_REPAY = this.dsList.getColumn(this.dsList.rowposition,"TY_REPAY");		// 완료여부

        	this.gfnFormOpen("DFC", "DFC_CHAIP_REGISTRATION", "fnPopCallBack", param);
        }

        this.fnPopCallBack = function(svcID, val) {

        	if (svcID.indexOf("DFC_CHAIP_REGISTRATION") > -1) {
        		this.FormBtns.Select.click();
        	}
        }

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "C9");

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_REPAY.addEventHandler("onitemchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DFC_CHAIP_CONDITION.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
