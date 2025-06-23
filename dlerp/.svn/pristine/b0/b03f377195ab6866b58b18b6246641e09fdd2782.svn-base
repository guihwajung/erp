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
            this.set_titletext("★등록결과공지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_REGIS_YEAR_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DZZPR_REGIS_YEAR_LIST_SAVE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DZZPR_REGIS_YEAR_LIST_CREATE</Col></Row><Row><Col id=\"TARGET\">update_info</Col><Col id=\"SP\">DZZPR_REGIS_YEAR_LIST_INFO_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_JUDGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_JUDGE","0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("1");
            obj.set_text("평가년도");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_JUDGE","staYR_JUDGE:0","10","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalYY.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ctclYR_JUDGE.form.TextBox","value","dsSearch","YR_JUDGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DZZ_REGIS_YEAR_LIST.xfdl", function() {
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

        	var today = this.gfnGetDate();

        	this.dsSearch.setColumn(0, "YR_JUDGE", today.substr(0,4));

        	this.DS_CONTMETHOD = "";
        	if(this.FormInfo.DS_PARAM == "SU") this.DS_CONTMETHOD = "DC";
        	else this.DS_CONTMETHOD = "DM";
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
        	this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate");
        	this.btnUpdateInfo = this.gfnFormButtonAdd("btnUpdateInfo", "fnUpdateInfo");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DZZ_REGIS_YEAR_LIST");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_JUDGE", "string");
        	this.dsSelect.addColumn("TY_SYSTEM", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("YR_JUDGE", "string");
        	this.dsSave.addColumn("YR_REGIST", "string");
        	this.dsSave.addColumn("NO_SJC", "string");
        	this.dsSave.addColumn("TY_SYSTEM", "string");
        	this.dsSave.addColumn("DS_VENDOR", "string");
        	this.dsSave.addColumn("DS_PRESIDENT", "string");
        	this.dsSave.addColumn("CD_LICCOST", "string");
        	this.dsSave.addColumn("DS_LICCOST", "string");
        	this.dsSave.addColumn("TY_RESULT_DOCU", "string");
        	this.dsSave.addColumn("DS_BIGO", "string");
        	this.dsSave.addColumn("DS_PRESIDENT_HP", "string");
        	this.dsSave.addColumn("DS_PRESIDENT_EM", "string");
        	this.dsSave.addColumn("DS_NM_BID", "string");
        	this.dsSave.addColumn("NO_TEL_BID", "string");
        	this.dsSave.addColumn("NO_HP_BID", "string");
        	this.dsSave.addColumn("DS_EM_BID", "string");
        	this.dsSave.addColumn("F_LCNS_CD", "string");
        	this.dsSave.addColumn("TY_REGIST", "string");
        	this.dsSave.addColumn("DS_REGIST", "string");
        	this.dsSave.addColumn("TY_JUDGE", "string");
        	this.dsSave.addColumn("NO_TEL1", "string");
        	this.dsSave.addColumn("CD_REGION", "string");
        	this.dsSave.addColumn("DS_REGION", "string");
        	this.dsSave.addColumn("CD_POST", "string");
        	this.dsSave.addColumn("ADDR1", "string");
        	this.dsSave.addColumn("ADDR2", "string");
        	this.dsSave.addColumn("CD_AP_ACCOUNT", "string");
        	this.dsSave.addColumn("DS_EMAIL", "string");
        	this.dsSave.addColumn("DS_UPTAE", "string");
        	this.dsSave.addColumn("DS_UPJONG", "string");
        	this.dsSave.addColumn("CD_BUMUN", "string");
        	this.dsSave.addColumn("TY_TAX", "string");
        	this.dsSave.addColumn("CD_ACCOUNT", "string");
        	this.dsSave.addColumn("CD_GROUP", "string");
        	this.dsSave.addColumn("CD_PAYMENT", "string");
        	this.dsSave.addColumn("DS_PAYMENT", "string");
        	this.dsSave.addColumn("TY_PAYMENT", "string");
        	this.dsSave.addColumn("DS_TY_PAYMENT", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("YR_JUDGE", "string");
        	this.dsCreate.addColumn("TY_SYSTEM", "string");

        	this.dsUpdateInfo = new Dataset();
        	this.dsUpdateInfo.addColumn("YR_JUDGE", "string");
        	this.dsUpdateInfo.addColumn("TY_SYSTEM", "string");
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

        	this.dsSelect.setColumn(0, "YR_JUDGE", this.dsSearch.getColumn(0, "YR_JUDGE"));
        	this.dsSelect.setColumn(0, "TY_SYSTEM", this.FormInfo.DS_PARAM);

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

        	var ty_system = "";
        	if(this.FormInfo.DS_PARAM == "SU") ty_system = "DC";
        	else ty_system = "DM";
        	this.dsList.setColumn(nrow, "TY_SYSTEM", ty_system);
        	this.dsList.setColumn(nrow, "YR_JUDGE",this.dsSearch.getColumn(0, "YR_JUDGE"));
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
        				this.dsSave.setColumn(nrow, "YR_JUDGE", this.dsList.getColumn(i, "YR_JUDGE"));
        				this.dsSave.setColumn(nrow, "YR_REGIST", this.dsList.getColumn(i, "YR_REGIST"));
        				this.dsSave.setColumn(nrow, "NO_SJC", this.dsList.getColumn(i, "NO_SJC"));
        				this.dsSave.setColumn(nrow, "TY_SYSTEM", this.dsList.getColumn(i, "TY_SYSTEM"));
        				this.dsSave.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsSave.setColumn(nrow, "DS_PRESIDENT", this.dsList.getColumn(i, "DS_PRESIDENT"));
        				this.dsSave.setColumn(nrow, "CD_LICCOST", this.dsList.getColumn(i, "CD_LICCOST"));
        				this.dsSave.setColumn(nrow, "DS_LICCOST", this.dsList.getColumn(i, "DS_LICCOST"));
        				this.dsSave.setColumn(nrow, "TY_RESULT_DOCU", this.dsList.getColumn(i, "TY_RESULT_DOCU"));
        				this.dsSave.setColumn(nrow, "DS_BIGO", this.dsList.getColumn(i, "DS_BIGO"));
        				this.dsSave.setColumn(nrow, "DS_PRESIDENT_HP", this.dsList.getColumn(i, "DS_PRESIDENT_HP"));
        				this.dsSave.setColumn(nrow, "DS_PRESIDENT_EM", this.dsList.getColumn(i, "DS_PRESIDENT_EM"));
        				this.dsSave.setColumn(nrow, "DS_NM_BID", this.dsList.getColumn(i, "DS_NM_BID"));
        				this.dsSave.setColumn(nrow, "NO_TEL_BID", this.dsList.getColumn(i, "NO_TEL_BID"));
        				this.dsSave.setColumn(nrow, "NO_HP_BID", this.dsList.getColumn(i, "NO_HP_BID"));
        				this.dsSave.setColumn(nrow, "DS_EM_BID", this.dsList.getColumn(i, "DS_EM_BID"));
        				this.dsSave.setColumn(nrow, "F_LCNS_CD", this.dsList.getColumn(i, "F_LCNS_CD"));
        				this.dsSave.setColumn(nrow, "TY_REGIST", this.dsList.getColumn(i, "TY_REGIST"));
        				this.dsSave.setColumn(nrow, "DS_REGIST", this.dsList.getColumn(i, "DS_REGIST"));
        				this.dsSave.setColumn(nrow, "TY_JUDGE", this.dsList.getColumn(i, "TY_JUDGE"));
        				this.dsSave.setColumn(nrow, "NO_TEL1", this.dsList.getColumn(i, "NO_TEL1"));
        				this.dsSave.setColumn(nrow, "CD_REGION", this.dsList.getColumn(i, "CD_REGION"));
        				this.dsSave.setColumn(nrow, "DS_REGION", this.dsList.getColumn(i, "DS_REGION"));
        				this.dsSave.setColumn(nrow, "CD_POST", this.dsList.getColumn(i, "CD_POST"));
        				this.dsSave.setColumn(nrow, "ADDR1", this.dsList.getColumn(i, "ADDR1"));
        				this.dsSave.setColumn(nrow, "ADDR2", this.dsList.getColumn(i, "ADDR2"));
        				this.dsSave.setColumn(nrow, "CD_AP_ACCOUNT", this.dsList.getColumn(i, "CD_AP_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "DS_EMAIL", this.dsList.getColumn(i, "DS_EMAIL"));
        				this.dsSave.setColumn(nrow, "DS_UPTAE", this.dsList.getColumn(i, "DS_UPTAE"));
        				this.dsSave.setColumn(nrow, "DS_UPJONG", this.dsList.getColumn(i, "DS_UPJONG"));
        				this.dsSave.setColumn(nrow, "CD_BUMUN", this.dsList.getColumn(i, "CD_BUMUN"));
        				this.dsSave.setColumn(nrow, "TY_TAX", this.dsList.getColumn(i, "TY_TAX"));
        				this.dsSave.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "CD_GROUP", this.dsList.getColumn(i, "CD_GROUP"));
        				this.dsSave.setColumn(nrow, "CD_PAYMENT", this.dsList.getColumn(i, "CD_PAYMENT"));
        				this.dsSave.setColumn(nrow, "DS_PAYMENT", this.dsList.getColumn(i, "DS_PAYMENT"));
        				this.dsSave.setColumn(nrow, "TY_PAYMENT", this.dsList.getColumn(i, "TY_PAYMENT"));
        				this.dsSave.setColumn(nrow, "DS_TY_PAYMENT", this.dsList.getColumn(i, "DS_TY_PAYMENT"));
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
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
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
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "create") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("자료생성 정상처리되었습니다.","fnCallback_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "update_info") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("등급정보업데이트 정상처리되었습니다.","fnCallback_callback");
        		} else {
        			this.gfnAlert(errorMsg);
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
        	}
        };

        this.fnCreate = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnConfirm("자료생성을 진행하시겠습니까?","fnCreate_callback");
        }

        this.fnCreate_callback = function(strID, val)
        {
        	if(val != true) return;

        	this.dsCreate.clearData();
        	this.dsCreate.addRow();
        	this.dsCreate.setColumn(0, "YR_JUDGE", this.dsSearch.getColumn(0, "YR_JUDGE"));
        	this.dsCreate.setColumn(0, "TY_SYSTEM", this.DS_CONTMETHOD);

        	if (this.dsCreate.rowcount == 0) return;

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
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

        this.fnUpdateInfo = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnConfirm("등급정보업데이트를 진행하시겠습니까?","fnUpdateInfo_callback");
        }

        this.fnUpdateInfo_callback = function(strID, val)
        {
        	if(val != true) return;

        	this.dsUpdateInfo.clearData();
        	this.dsUpdateInfo.addRow();
        	this.dsUpdateInfo.setColumn(0, "YR_JUDGE", this.dsSearch.getColumn(0, "YR_JUDGE"));
        	this.dsUpdateInfo.setColumn(0, "TY_SYSTEM", this.DS_CONTMETHOD);

        	if (this.dsUpdateInfo.rowcount == 0) return;

        	var strSvcId    = "update_info";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update_info=dsUpdateInfo";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZZ_REGIS_YEAR_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
