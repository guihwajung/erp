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
            this.set_titletext("미수미결관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHEPR_MIGYULMNG_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHEPR_MIGYULMNG_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"142.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BE","sta01:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("귀속부서");
            obj.set_usedecorate("false");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BE","staCD_DEPT_BE:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","ccfCD_DEPT_BE:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","0.0","sta01:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta01:0.0","10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_DATE","sta03:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ctclFR_DATE:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_DATE","sta02:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","0.0","sta01:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("계정코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACCOUNT","0.0","sta04:10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta05","ccfCD_ACCOUNT:0.0","ccfCD_CORP:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","sta01:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_SLIP","sta00:0.0","sta01:10.0","238","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_BE.form.CDTextBox","value","dsSearch","CD_DEPT_BE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclFR_DATE","value","dsSearch","FR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclTO_DATE","value","dsSearch","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_ACCOUNT.form.CDTextBox","value","dsSearch","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.txtCD_SLIP","value","dsSearch","CD_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHE_MIGYULMNG.xfdl", function() {
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

        	this.ccfCD_CORP.form.CDTextBox.setFocus();

        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        		this.ccfCD_DEPT_BE.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        		this.ccfCD_DEPT_BE.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		//this.staCD_DEPT_BE.set_textDecoration("underline");
        		this.staCD_DEPT_BE.set_cssclass("sta_WF_SchLabelE");
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
         	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
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
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_BE = this.divSearch.form.ccfCD_DEPT_BE;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.ccfCD_ACCOUNT = this.divSearch.form.ccfCD_ACCOUNT;
        	this.ctclFR_DATE = this.divSearch.form.ctclFR_DATE;
        	this.ctclTO_DATE = this.divSearch.form.ctclTO_DATE;
        	this.txtCD_SLIP = this.divSearch.form.txtCD_SLIP;
        	this.staCD_DEPT_BE = this.divSearch.form.staCD_DEPT_BE;

        	this.dxGrid = this.divData.form.objGrid;		// 그리드

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	this.ctclFR_DATE.set_value(this.gfnGetFirstDate(this.gfnGetDate()));
        	this.ctclTO_DATE.set_value(this.gfnGetDate());

        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT_BE.CodeFindName = "DHX_CFACNTUNIT2";
        	this.ccfCD_DEPT_BE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_ACCOUNT.CodeFindName = "DHX_CFACNT_SLIP_AND_TRIAL";
        	this.ccfCD_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_VENDOR.CodeFindName = "DHX_CFALLVENDOR_CODEFIND";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHE_MIGYULMNG");


        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT_BE", "string");
        	this.dsSelect.addColumn("FR_DATE", "string");
        	this.dsSelect.addColumn("TO_DATE", "string");
        	this.dsSelect.addColumn("CD_ACCOUNT", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("CD_SLIP", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SLIP", "string");
        	this.dsUpdate.addColumn("CD_SLIP_MI", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

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
        	this.dsSelect.setColumn(0, "CD_DEPT_BE", this.dsSearch.getColumn(0, "CD_DEPT_BE"));
        	this.dsSelect.setColumn(0, "FR_DATE", this.dsSearch.getColumn(0, "FR_DATE"));
        	this.dsSelect.setColumn(0, "TO_DATE", this.dsSearch.getColumn(0, "TO_DATE"));
        	this.dsSelect.setColumn(0, "CD_ACCOUNT", this.dsSearch.getColumn(0, "CD_ACCOUNT"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "CD_SLIP", this.dsSearch.getColumn(0, "CD_SLIP"));


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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SLIP", this.dsList.getColumn(i, "CD_SLIP"));
        				this.dsUpdate.setColumn(nrow, "CD_SLIP_MI", this.dsList.getColumn(i, "CD_SLIP_MI"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "update";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
        	var outData     = "";
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

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		validate = false;
        	}

        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        		if (this.gfnIsNull(this.ccfCD_DEPT_BE.form.CDTextBox.value)) {
        			this.gfnAlert("귀속부서는 필수입니다");
        			this.ccfCD_DEPT_BE.form.CDTextBox.setFocus();
        			validate = false;
        		}
        	}

        	if (this.gfnIsNull(this.ctclFR_DATE.value)) {
        		this.gfnAlert("시작일자를 입력 하세요.");
        		this.ctclDT_FROM.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclTO_DATE.value)) {
        		this.gfnAlert("종료일자를 입력 하세요.");
        		this.ctclDT_TO.setFocus();
        		return false;
        	}

        	if ( !this.gfnIsNull(this.ctclFR_DATE.value) && !this.gfnIsNull(this.ctclTO_DATE.value) ) {
        		if ( this.ctclFR_DATE.value > this.ctclTO_DATE.value ) {
        			this.gfnAlert("일자가 잘못 입력 되었습니다.");
        			this.ctclTO_DATE.setFocus();
        			return false;
        		}
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
        		this.fnSetButton();
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if (svcID == "update") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	} else if (id == "ccfCD_DEPT_BE") {
        		if (!this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "0000000");				//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, this.ccfCD_CORP.form.CDTextBox.value);	//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        			dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		}else{
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
        	} else if (id == "ccfCD_VENDOR") {
        		if (!this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			dsUserParam.setColumn(nrow, "CD_CORP"		, this.ccfCD_CORP.form.CDTextBox.value);	//법인코드
        		}else{
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
        	} else if(id == "ccfCD_ACCOUNT") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR" , "X");		//X   CD_VENDOR
        		dsUserParam.setColumn(nrow, "YN_RELATED", "");		//X   CD_VENDOR
        	}


        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_DEPT_BE.form.fnCodeFindClear();
        		this.ccfCD_VENDOR.form.fnCodeFindClear();
        	}

        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {

        	// CD_SLIP_MI
        	if (id == "DHX_NO_MIGYUL") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "CD_ACNT", this.dsList.getColumn(this.dsList.rowposition, "CD_ACCOUNT"));
        		dsUserParam.setColumn(nrow, "DT_SLIP", this.dsList.getColumn(this.dsList.rowposition, "DT_ACCOUNT"));
        	}
        	return true;
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
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
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("DHE_MIGYULMNG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
