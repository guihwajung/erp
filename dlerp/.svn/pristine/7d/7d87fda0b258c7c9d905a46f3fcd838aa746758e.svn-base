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
            this.set_titletext("투자현황관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_INVERSTMENT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DHAPR_INVERSTMENT_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_INVESTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_INVESTMENT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CODE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">일상투자</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">전략적투자</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_INVESTMENT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기준년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_INVESTMENT","staYM_INVESTMENT:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CODE","ctclYM_INVESTMENT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("투자구분");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CODE","staTY_CODE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTY_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("-1");
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
            obj = new BindItem("item1","divSearch.form.ctclYM_INVESTMENT.form.TextBox","value","dsSearch","YM_INVESTMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.rdoTY_CODE","value","dsSearch","TY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_INVERSTMENT.xfdl", function() {
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

        	//기준년도 셋팅
        	var today = this.gfnGetDate();
        	this.divSearch.form.ctclYM_INVESTMENT.form.TextBox.set_value(today.substring(0,6));

        	//this.FormBtns.Select.click();
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
        	this.btnAccountPW   = this.gfnFormButtonAdd("btnAccountPW", "fnAccountPW");	// 계정코드별명세서
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYM_INVESTMENT = this.divSearch.form.ctclYM_INVESTMENT;
        	this.rdoTY_CODE = this.divSearch.form.rdoTY_CODE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_INVERSTMENT");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";	// 셀 변경 후 이벤트
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_INVESTMENT", "string");
        	this.dsSelect.addColumn("TY_CODE", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("YM_INVESTMENT", "string");
        	this.dsSave.addColumn("CD_PROJ", "string");
        	this.dsSave.addColumn("TY_CODE", "string");
        	this.dsSave.addColumn("AM_INVESTMENT", "bigdecimal");
        	this.dsSave.addColumn("DS_NOTE", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	/*
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("GR_CORP", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	*/

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValid()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "YM_INVESTMENT", this.dsSearch.getColumn(0, "YM_INVESTMENT"));
        	//this.dsSelect.setColumn(0, "TY_CODE", this.dsSearch.getColumn(0, "TY_CODE"));
        	//this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	//this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	//this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow, "YM_INVESTMENT", this.dsSearch.getColumn(0, "YM_INVESTMENT"));
        	this.dsList.setColumn(nrow, "TY_CODE", this.dsSearch.getColumn(0, "TY_CODE"));
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "YM_INVESTMENT", this.dsList.getColumn(i, "YM_INVESTMENT"));
        				this.dsSave.setColumn(nrow, "CD_PROJ", this.dsList.getColumn(i, "CD_PROJ"));
        				this.dsSave.setColumn(nrow, "TY_CODE", this.dsList.getColumn(i, "TY_CODE"));
        				this.dsSave.setColumn(nrow, "AM_INVESTMENT", this.dsList.getColumn(i, "AM_INVESTMENT"));
        				this.dsSave.setColumn(nrow, "DS_NOTE", this.dsList.getColumn(i, "DS_NOTE"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        // 				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        // 				this.dsSave.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        // 				this.dsSave.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        // 				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
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

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_INVESTMENT"))) {
        		this.fnValidCallback = function() {
        			this.ctclYM_INVESTMENT.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년월을 입력하세요.");
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
        	}
        	else if(svcID == "combo") {
        		if (errorCode == 0) {
        			this.rdoTY_CODE.set_index(0);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        // 	if(id == "ccfCD_CODE"){ //항목
        // 		dsUserParam.setColumn(nrow, "CD_GB", this.rdoTY_CODE.value);
        // 	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id) {

        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	if(id == "DZX_CFCODE_COM"){ // 투자구분
        		//|01:일상 투자|02:전략적 투자
        		dsUserParam.setColumn(nrow, "CD_SYSTEM" , "DH");
        		dsUserParam.setColumn(nrow, "CD_TYPE" , "A40");
        	}
        	else if(id == "DOXPR_PROJ_CODEFIND"){
        		dsUserParam.setColumn(nrow, "TY_PROJ", "ALL");
        	}
        	else if(id == "DHX_CFACNTUNIT"){
        		var cdCorp = this.AuthClient.CD_CORP;
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");			//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");			//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);		//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");			//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");			//현장/본사여부
        		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"	    , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        	}
        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        	/*
        	if(e.columnid == "TY_CODE") {
        		if(e.oldvalue != e.newvalue) {
        			this.dsList.setColumn(this.dsList.rowposition, "CD_CODE" ,"");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_CODE" ,"");
        			this.dsList.setColumn(this.dsList.rowposition, "AM_INCOME" ,0);
        		}
        	}
        	*/
        }

        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 계정코드별명세서
        this.fnAccountPW = function (obj,e)
        {

        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var cd_proj = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_PROJ"));
        	var ds_proj = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "DS_PROJ"));
        	if(this.gfnIsNull(cd_proj)){
        		this.gfnAlert("프로젝트 코드를 먼저 선택하세요.");
        		return false;
        	}

        	var param = {};
        	param.CD_DEPT_ACNT = cd_proj;
        	param.DS_DEPT_ACNT = ds_proj;
        	param.CD_CORP_REC = this.AuthClient.CD_CORP;
        	param.DS_CORP_REC = this.AuthClient.DS_CORP;
        	param.CD_ACCOUNT = "1108011";
        	param.DT_MAGAM = this.dsSearch.getColumn(0, "YM_INVESTMENT") + "01";
        	param.DT_MAGAM2 = this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_INVESTMENT") + "01");

        	this.gfnFormOpen("DHE", "DHE_ACCOUNTSELECT_PW", "fnAccountPWPopupCallback", param);
        }

        // 계정코드별명세서 콜백
        this.fnAccountPWPopupCallback = function(svcID, value) {
        	if(!this.gfnIsNull(value)) {
        		var json = JSON.parse(value);
        		var flag = this.dsList.getColumn(0, this.ucFlag);
        		var nRow = this.dsList.rowposition;
        		var amInvestment = json.AM_INVESTMENT;
        		amInvestment = (amInvestment == 0) ? 0 : (amInvestment / 100000000).toFixed(0);
        		this.dsList.setColumn(nRow, "AM_INVESTMENT"	, amInvestment);
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //콤보박스 코드 조회
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(0, "CD_TYPE",  "A40");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_CODE=combo0";
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
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_INVERSTMENT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
