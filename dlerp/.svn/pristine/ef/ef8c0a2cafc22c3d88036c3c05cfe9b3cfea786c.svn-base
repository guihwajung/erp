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
            this.set_titletext("사업수지항목");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOSPR_CASH_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DOSPR_CASH_UPDATE</Col></Row><Row><Col id=\"SP\">DOSPR_CASH_CREATEX</Col><Col id=\"TARGET\">createX</Col></Row><Row><Col id=\"SP\">DOSPR_CASH_APPR</Col><Col id=\"TARGET\">appr</Col></Row><Row><Col id=\"SP\">DOSPR_CASH_APPRX</Col><Col id=\"TARGET\">apprX</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_PROJ\"/><Col id=\"DS_PROJ\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROJ","staCD_PROJ:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOS_CFPROJ");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_ACCOUNT","ccfCD_PROJ:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("tclYM_MAGAM","staYR_ACCOUNT:0.0","10.0","84","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","13",null,null,"0","2",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_PROJ.form.CDTextBox","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_PROJ.form.DSTextBox","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.tclYM_MAGAM.form.TextBox","value","dsSearch","YM_MAGAM");
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
        this.registerScript("DOS_CASH.xfdl", function() {
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

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_PROJ)) {
        		this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        		this.dsSearch.setColumn(0, "DS_PROJ", this.getOwnerFrame().DS_PROJ);
        	}

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_PROJ")))
        		this.FormBtns.Select.click();

        	this.dsSearch.setColumn(0, "YM_MAGAM", this.gfnGetDate().substr(0,6));
        };

        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnRate = this.gfnFormButtonAdd("btnRate", "fnRate"); //기준율관리
        	this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate"); //자료생성
        	this.btnCreateX = this.gfnFormButtonAdd("btnCreateX", "fnCreateX"); //생성취소
        	this.btnAppr = this.gfnFormButtonAdd("btnAppr", "fnAppr"); //계획확정
        	this.btnApprX = this.gfnFormButtonAdd("btnApprX", "fnApprX"); //확정취소
        	this.btnCash = this.gfnFormButtonAdd("btnCash", "fnCash"); //현금흐름조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
         	this.ccfCD_PROJ = this.divSearch.form.ccfCD_PROJ;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.tclYM_WORK = this.divSearch.form.tclYM_WORK;

         	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
         	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOS_CASH");
        	//this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOS_CASH", "DS_ITEM", "NO_LEVEL"); //TREE 형태 그리드

         	//this.dxGrid.addEventHandler("oncelldblclick", this.fnDtl, this);

         	this.ccfCD_PROJ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_PROJ.AfterCDTextChanged = "fnAfterCDTextChanged";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "string");
        	this.dsSelect.addColumn("YM_MAGAM", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_PROJ", "string");
        	this.dsUpdate.addColumn("YM_MAGAM", "string");
        	this.dsUpdate.addColumn("CD_ITEM", "string");
        	this.dsUpdate.addColumn("YY_YEAR", "string");
        	this.dsUpdate.addColumn("AM_01", "bigdecimal");
        	this.dsUpdate.addColumn("AM_02", "bigdecimal");
        	this.dsUpdate.addColumn("AM_03", "bigdecimal");
        	this.dsUpdate.addColumn("AM_04", "bigdecimal");
        	this.dsUpdate.addColumn("AM_05", "bigdecimal");
        	this.dsUpdate.addColumn("AM_06", "bigdecimal");
        	this.dsUpdate.addColumn("AM_07", "bigdecimal");
        	this.dsUpdate.addColumn("AM_08", "bigdecimal");
        	this.dsUpdate.addColumn("AM_09", "bigdecimal");
        	this.dsUpdate.addColumn("AM_10", "bigdecimal");
        	this.dsUpdate.addColumn("AM_11", "bigdecimal");
        	this.dsUpdate.addColumn("AM_12", "bigdecimal");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsCreateX = new Dataset();
        	this.dsCreateX.addColumn("CD_PROJ", "string");
        	this.dsCreateX.addColumn("YM_MAGAM", "string");
        	this.dsCreateX.addColumn("ID_USER", "string");

        	this.dsAppr = new Dataset();
        	this.dsAppr.addColumn("CD_PROJ", "string");
        	this.dsAppr.addColumn("YM_MAGAM", "string");
        	this.dsAppr.addColumn("ID_USER", "string");

        	this.dsApprX = new Dataset();
        	this.dsApprX.addColumn("CD_PROJ", "string");
        	this.dsApprX.addColumn("YM_MAGAM", "string");
        	this.dsApprX.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSelect.setColumn(0, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM"));

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

        this.fnAdd = function() {

        }

        this.fnDel = function() {

        }

        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        				this.dsUpdate.setColumn(nrow, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM"));
        				this.dsUpdate.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(i, "CD_ITEM"));
        				this.dsUpdate.setColumn(nrow, "YY_YEAR", this.dsList.getColumn(i, "YY_YEAR"));
        				this.dsUpdate.setColumn(nrow, "AM_01", this.dsList.getColumn(i, "AM_01"));
        				this.dsUpdate.setColumn(nrow, "AM_02", this.dsList.getColumn(i, "AM_02"));
        				this.dsUpdate.setColumn(nrow, "AM_03", this.dsList.getColumn(i, "AM_03"));
        				this.dsUpdate.setColumn(nrow, "AM_04", this.dsList.getColumn(i, "AM_04"));
        				this.dsUpdate.setColumn(nrow, "AM_05", this.dsList.getColumn(i, "AM_05"));
        				this.dsUpdate.setColumn(nrow, "AM_06", this.dsList.getColumn(i, "AM_06"));
        				this.dsUpdate.setColumn(nrow, "AM_07", this.dsList.getColumn(i, "AM_07"));
        				this.dsUpdate.setColumn(nrow, "AM_08", this.dsList.getColumn(i, "AM_08"));
        				this.dsUpdate.setColumn(nrow, "AM_09", this.dsList.getColumn(i, "AM_09"));
        				this.dsUpdate.setColumn(nrow, "AM_10", this.dsList.getColumn(i, "AM_10"));
        				this.dsUpdate.setColumn(nrow, "AM_11", this.dsList.getColumn(i, "AM_11"));
        				this.dsUpdate.setColumn(nrow, "AM_12", this.dsList.getColumn(i, "AM_12"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnExcel = function() {

        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_PROJ"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_PROJ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("프로젝트 코드를 입력하지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_MAGAM"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_PROJ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("회계년월을 입력하지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

          	return validate;
         }


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "createX" || svcID == "appr" || svcID == "apprX") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnPopCallBack = function(svcID, val) {
        	if(val != false) {
        		this.FormBtns.Select.click();
        	}
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_PROJ") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}

        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
         // 기준율관리
        this.fnRate = function(obj,e) {

        	var param = {};
        	param.CD_PROJ = this.dsSearch.getColumn(0, "CD_PROJ");	// 프로젝트 코드
        	param.DS_PROJ = this.dsSearch.getColumn(0, "DS_PROJ");	// 프로젝트명
        	param.YM_MAGAM = this.dsSearch.getColumn(0, "YM_MAGAM");	// 회계년월
        	param.TY_PLAN = this.dsList.getColumn(this.dsList.rowposition, "TY_PLAN");	// 사업수지항목 - 계획구분

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOS_RATE", "", param);
        }

        //자료생성
        this.fnCreate = function(obj,e) {

        	var param = {};
        	param.CD_PROJ = this.dsSearch.getColumn(0, "CD_PROJ");	// 프로젝트
        	param.YM_MAGAM = this.dsSearch.getColumn(0, "YM_MAGAM");	// 회계년월

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOS_CASH_DLG", "fnPopCallBack", param);
        }

        // 생성취소
        this.fnCreateX = function(obj,e) {

        	this.dsCreateX.clearData();
        	var nrow = this.dsCreateX.addRow();

        	this.dsCreateX.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsCreateX.setColumn(nrow, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM"));
        	this.dsCreateX.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "createX";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "createX=dsCreateX";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        }

        // 계획확정
        this.fnAppr = function(obj,e) {

        	this.dsAppr.clearData();
        	var nrow = this.dsAppr.addRow();

        	this.dsAppr.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsAppr.setColumn(nrow, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM"));
        	this.dsAppr.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "appr";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "appr=dsAppr";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        }

        // 확정취소
        this.fnApprX = function(obj,e) {

        	this.dsApprX.clearData();
        	var nrow = this.dsApprX.addRow();

        	this.dsApprX.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsApprX.setColumn(nrow, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM"));
        	this.dsApprX.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "apprX";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "apprX=dsApprX";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        }

        //현금흐름조회
        this.fnCash = function(obj,e) {

        	var param = {};
        	param.CD_PROJ = this.dsSearch.getColumn(0, "CD_PROJ");	// 프로젝트
        	param.DS_PROJ = this.dsSearch.getColumn(0, "DS_PROJ");	// 프로젝트
        	param.YM_MAGAM = this.dsSearch.getColumn(0, "YM_MAGAM");	// 회계년월

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOS_CASHFLOW", "fnPopCallBack", param);
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
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
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOS_CASH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
