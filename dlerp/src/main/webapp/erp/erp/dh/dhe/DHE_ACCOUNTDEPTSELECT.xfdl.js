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
            this.set_titletext("계정별부서잔액관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHEPR_ACCOUNTDEPT_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","278","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("귀속부서");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","ccfCD_DEPT_ACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TO","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACNT","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("계정코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNT","staCD_ACNT:0.0","staCD_CORP:10.0","277","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNT_SLIP_AND_TRIAL");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHE_ACCOUNTDEPTSELECT.xfdl", function() {
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
         ************************************************************************/
        this.fnSetButton = function() {
         	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Save.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFormButtonGe = this.gfnFormButtonAdd("tbbHistory", "fnTbbHistory", "잔액원장총괄조회");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ccfCD_ACNT = this.divSearch.form.ccfCD_ACNT;

        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHE_ACCOUNTDEPTSELECT");

        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_Celldblclick, this);

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	this.ctclDT_FROM.set_value(this.gfnGetFirstDate(this.gfnGetDate()));
        	this.ctclDT_TO.set_value(this.gfnGetDate());

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT_ACNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_ACNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("DT_FR", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("CD_ACCOUNT", "string");

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

        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.ccfCD_DEPT_ACNT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "DT_FR", this.ctclDT_FROM.value);
        	this.dsSelect.setColumn(0, "DT_TO", this.ctclDT_TO.value);
        	this.dsSelect.setColumn(0, "CD_ACCOUNT", this.ccfCD_ACNT.form.CDTextBox.value);

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
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ccfCD_ACNT.form.CDTextBox.text)) {
        		this.gfnAlert("계정코드를 입력 하세요.");
        		this.ccfCD_ACNT.form.CDTextBox.setFocus();
        		return false;
        	}

        if (this.gfnIsNull(this.ctclDT_FROM.value)) {
        		this.gfnAlert("시작일자를 입력 하세요.");
        		this.ctclDT_FROM.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclDT_TO.value)) {
        		this.gfnAlert("종료일자를 입력 하세요.");
        		this.ctclDT_TO.setFocus();
        		return false;
        	}

        	if ( !this.gfnIsNull(this.ctclDT_FROM.value) && !this.gfnIsNull(this.ctclDT_TO.value) ) {
        		if ( this.ctclDT_FROM.value > this.ctclDT_TO.value ) {
        			this.gfnAlert("일자가 잘못 입력 되었습니다..");
        			this.ctclDT_FROM.setFocus();
        			return false;
        		}
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
        		this.fnSetButton();
        		this.gfnGridAfterSelect(this.dxGrid);
        		/*this.gfnGridAfterSelect(this.dxGridSub);	*/
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	if (id == "ccfCD_DEPT_ACNT") {
        		if (!this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "0000000");				//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, this.ccfCD_CORP.form.CDTextBox.value);	//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		}else{
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
        	}

        	if (id == "ccfCD_ACNT") {
        // 		if (!this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 		}else{
        // 			this.gfnAlert("법인코드는 필수입력 값입니다.");
        // 			return false;
        // 		}
        		dsUserParam.setColumn(nrow, "YN_SLIP", "");
        	}

        	return true;

        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();

        		this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        	}
        	this.fnSearchInit();
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
        //     if ((obj.oldrow > -1 && obj.oldrow == e.row)
        // 		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        // 		this.FormBtns.SubSelect.click();
        // 		obj.oldrow = -1;
        // 	}
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnTbbHistory = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	var cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
        	var cd_account = this.dsList.getColumn(this.dsList.rowposition, "CD_ACCOUNT");
        	var dt_magam = this.ctclDT_FROM.value;
        	var dt_magam2 = this.ctclDT_TO.value;

        	if(this.gfnIsNull(cd_corp) || this.gfnIsNull(cd_account) || this.gfnIsNull(dt_magam) || this.gfnIsNull(dt_magam2))
        	{
        		this.gfnAlert("이관자료는 조회할 수 없습니다.");
        		return false;
        	}

        	param.CD_CORP = cd_corp;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        	param.CD_DEPT_ACNT = this.ccfCD_DEPT_ACNT.form.CDTextBox.value;
        	param.DS_DEPT_ACNT = this.ccfCD_DEPT_ACNT.form.DSTextBox.value;
        	param.CD_ACCOUNT = cd_account;
        	param.DS_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "DS_ACCOUNT");
        	param.DT_MAGAM = dt_magam;
        	param.DT_MAGAM2 = dt_magam2;

        	this.gfnFormOpen("DHE", "DHE_ACCOUNTSELECT_PW", "", param);

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		/*this.gfnGridClear(this.dxGridSub);*/
        	}
        }

        this.divSearch_ctclDT_FROM_onchanged = function(obj,e)
        {
        	this.fnSearchInit();
        };

        this.divSearch_ctclDT_TO_onchanged = function(obj,e)
        {
        	this.fnSearchInit();
        };

        this.fnGrid_Celldblclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	var cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
        	var cd_account = this.dsList.getColumn(this.dsList.rowposition, "CD_ACCOUNT");
        	var dt_magam = this.ctclDT_FROM.value;
        	var dt_magam2 = this.ctclDT_TO.value;

        	param.CD_CORP = cd_corp;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        	param.CD_DEPT_ACNT = this.ccfCD_DEPT_ACNT.form.CDTextBox.value;
        	param.DS_DEPT_ACNT = this.ccfCD_DEPT_ACNT.form.DSTextBox.value;
        	param.CD_ACCOUNT = cd_account;
        	param.DS_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "DS_ACCOUNT");
        	param.DT_MAGAM = dt_magam;
        	param.DT_MAGAM2 = dt_magam2;

        	this.gfnFormOpen("DHE", "DHE_ACCOUNTSELECT_PW", "", param);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_FROM.addEventHandler("oninnerdatachanged",this.divSearch_ctclDT_FROM_oninnerdatachanged,this);
            this.divSearch.form.ctclDT_FROM.addEventHandler("onchanged",this.divSearch_ctclDT_FROM_onchanged,this);
            this.divSearch.form.ctclDT_TO.addEventHandler("onchanged",this.divSearch_ctclDT_TO_onchanged,this);
        };
        this.loadIncludeScript("DHE_ACCOUNTDEPTSELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
