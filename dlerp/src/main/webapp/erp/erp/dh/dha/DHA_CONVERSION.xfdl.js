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
            this.set_titletext("외화자산부채평가");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_CONVERSION_SELECT</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHAPR_CONVERSION_CREATE</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHAPR_CONVERSION_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHAPR_CONVERSION_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_CONVERSION_DELETE</Col></Row><Row><Col id=\"TARGET\">cancelIssueSlip</Col><Col id=\"SP\">DHAPR_CONVERSION_CACNCELAUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelCancelSlip</Col><Col id=\"SP\">DHAPR_CONVERSION_CANCELAUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">selectMax</Col><Col id=\"SP\">DHAPR_CONVERSION_MAXSEQ</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HEADOFFICE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"YM_ACCOUNT\"/><Col id=\"NO_SEQ\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_SEQ", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_SEQ\">1</Col></Row><Row><Col id=\"NO_SEQ\">2</Col></Row><Row><Col id=\"NO_SEQ\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaxSeq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMM_BASE","ccfCD_CORP:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("회계년월");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACCOUNT","staMM_BASE:0.0","10.0","95","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNO_SEQ","620","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsNO_SEQ");
            obj.set_datacolumn("NO_SEQ");
            obj.set_codecolumn("NO_SEQ");
            obj.set_enable("true");
            obj.set_color("royalblue");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00_00","528","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("결산차수");
            obj.set_cssclass("sta_WF_SchLabel");
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
            obj.set_text("본점");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","0",null,"100%","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("지점");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form);
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

            obj = new BindItem("item1","divSearch.form.ctclYM_ACCOUNT.form.TextBox","value","dsSearch","YM_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboNO_SEQ","value","dsSearch","NO_SEQ");
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
        this.registerScript("DHA_CONVERSION.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "YM_ACCOUNT", this.gfnAddMonth(this.gfnGetDate(), -1).substr(0,6));


        	//법인코드 세션에 코드로 셋팅
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.setFocus();

        		//this.dsSearch.setColumn(0, "NO_SEQ", 1);
        	this.fnSetMaxSeq();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreateData  = this.gfnFormButtonAdd("CreateData", "fnCreateData"); 		// 자료생성
        	this.btnIssueSlip   = this.gfnFormButtonAdd("IssueSlip", "fnIssueSlip"); 		// 전표발행
        	this.btnCancelSlip  = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 		// 전표취소
        	this.btnSearchSlip  = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 		// 전표조회
        	this.btnAccountSelect   = this.gfnFormButtonAdd("AccountSelect", "fnAccountSelect");
        	this.btnCancelIssueSlip   = this.gfnFormButtonAdd("CancelIssueSlip", "fnCancelIssueSlip"); 		// 전표발행
        	this.btnCancelCancelSlip  = this.gfnFormButtonAdd("CancelCancelSlip", "fnCancelCancelSlip"); 		// 전표취소
        	this.btnCancelSearchSlip  = this.gfnFormButtonAdd("CancelSearchSlip", "fnCancelSearchSlip"); 		// 전표조회

        	this.gfnSetEnable(this.btnCreateData, true);
        	this.gfnSetEnable(this.btnIssueSlip , false);
        	this.gfnSetEnable(this.btnCancelSlip, false);
        	this.gfnSetEnable(this.btnSearchSlip, false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclYM_ACCOUNT  = this.divSearch.form.ctclYM_ACCOUNT;
        	this.ccboNO_SEQ = this.divSearch.form.ccboNO_SEQ;

        	this.tabData = this.divData.form.tabData;

        	//this.dxGrid = this.divData.form.objGrid;

        	this.dxGrid1 = this.divData.form.tabData.tab1.form.objGrid1;
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DH", "DHA_CONVERSION");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DH", "DHA_CONVERSION");

        	this.dxGrid1.addEventHandler("oncelldblclick", this.fnGrid_Celldblclick, this);
        	this.dxGrid2.addEventHandler("oncelldblclick", this.fnGrid_Celldblclick, this);

        	this.dsList1.addEventHandler("onrowposchanged", this.dsList_Rowposchanged, this);
        	this.dsList2.addEventHandler("onrowposchanged", this.dsList_Rowposchanged, this);
        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_ACCOUNT", "string");
        	this.dsSelect.addColumn("YN_HEADOFFICE", "string");
        	this.dsSelect.addColumn("NO_SEQ", "BIGDECIMAL");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("YM_ACCOUNT", "string");
        	this.dsCreate.addColumn("ID_SABUN", "string");
        	this.dsCreate.addColumn("NO_SEQ", "BIGDECIMAL");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("YM_ACCOUNT", "string");
        	this.dsDelete.addColumn("CD_ACCOUNT", "string");
        	this.dsDelete.addColumn("CD_EXEC_CURR", "string");
        	this.dsDelete.addColumn("YN_HEADOFFICE", "string");
        	this.dsDelete.addColumn("NO_SEQ", "BIGDECIMAL");

        	//전표발행용 데이터셋
        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");
        	this.dsIssueSlip.addColumn("YM_ACCOUNT", "string");
        	this.dsIssueSlip.addColumn("YN_HEADOFFICE", "string");
        	this.dsIssueSlip.addColumn("CD_DEPT_BE", "string");
        	this.dsIssueSlip.addColumn("ID_INSERT", "string");
        	this.dsIssueSlip.addColumn("NO_SEQ", "BIGDECIMAL");

        	//전표취소용 데이터셋
        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_TRADE"  , "string");

        	this.dsSeq = new Dataset();
        	this.dsSeq.addColumn("CD_CORP", "string");
        	this.dsSeq.addColumn("YM_ACCOUNT", "string");
        	this.dsSeq.addColumn("YN_HEADOFFICE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? "dsList1" : "dsList2");

        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(objGrd);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	var ynHeadOffice = (tabIdx == 0 ? "Y" : "N");

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	this.dsSelect.setColumn(0, "YN_HEADOFFICE", ynHeadOffice);
        	this.dsSelect.setColumn(0, "NO_SEQ",  this.dsSearch.getColumn(0, "NO_SEQ"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	//var outData     = "dsList=select0";
        	var outData     = objDS + "=select0";
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

        /* 입력 버튼 */
        this.fnAdd = function() {
        	//var nRow = this.gfnGridAdd(this.dxGrid);
        }

        /* 삭제 버튼 */
        this.fnDel = function() {

        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	if(!this.gfnIsNull(objDS.getColumn(objDS.rowposition, "CD_TRADE"))){
        		return false;
        	}
        	this.gfnGridDel(objGrd);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        var tabIdx = this.tabData.tabindex;
        var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        if (!this.gfnGridValidate(objGrd)) return;

        	objGrd.updateToDataset();
        	this.dsDelete.clearData();
            var ynHeadOffice = (tabIdx == 0 ? "Y" : "N");

        	for (var i = 0; i < objDS.rowcount; i++) {
        		var flag = this.gfnGetFlag(objDS, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        				this.dsDelete.setColumn(nrow, "YN_HEADOFFICE", ynHeadOffice);
        				this.dsDelete.setColumn(nrow, "NO_SEQ",  this.dsSearch.getColumn(0, "NO_SEQ"));
        				this.dsDelete.setColumn(nrow, "CD_ACCOUNT", objDS.getColumn(i,"CD_ACCOUNT"));
        				this.dsDelete.setColumn(nrow, "CD_EXEC_CURR", objDS.getColumn(i,"CD_EXEC_CURR"));
        				break;
        		}
        	}
        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
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
        	//this.gfnExcelExport(this.dxGrid);
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? "dsList1" : "dsList2");

        	this.gfnExcelExport(objGrd);
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
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		validate = false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_ACCOUNT"))){
        		this.gfnAlert("회계년월은 필수입니다.");
        		this.ctclYM_ACCOUNT.form.TextBox.setFocus();
        		validate = false;
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
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	switch(svcID) {
        		case "select":
        			this.gfnGridAfterSelect(objGrd);
        			this.fnSetExtendButtonEnable();

        		break;
        		case "create":
        			if (errorCode == 0) {
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "save":
        			if (errorCode == 0) {
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "issueSlip" :
        			if (errorCode == 0) {
        				this.gfnAlert("전표가 발행 되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;

        		case  "cancelSlip" :
        			if (errorCode == 0) {
        				this.gfnAlert("전표가 취소 되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;

        		case "selectMax" :
        			if (errorCode == 0) {
        			   //	trace(" dsMaxSeq =>" + this.dsMaxSeq.saveXML());
        			    this.ccboNO_SEQ.set_value(this.dsMaxSeq.getColumn(0, "NO_SEQ"));

        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {	//법인코드
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	switch(id) {
        		case "ccfCD_CORP":	//법인코드

        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");

        	switch(id) {
        		case "DHX_CFACNTUNIT":	//귀속부서
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");				//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");				//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);			//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");				//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");				//현장/본사여부
        			dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        		break;
        	}

        	return true;
        }


        /************************************************************************
         * 확장버튼 이벤트
        ************************************************************************/
        //자료 생성 처리
        this.fnCreateData = function (obj,e)
        {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnConfirm("생성하시겠습니까?", function(strId, val) {
        		if(val == true){
        			this.dsCreate.clearData();
        			var nRow = this.dsCreate.addRow();

        			//처리할 데이터 담기
        			this.dsCreate.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsCreate.setColumn(nRow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        			this.dsCreate.setColumn(nRow, "ID_SABUN", this.AuthClient.ID_USER);
        			this.dsCreate.setColumn(nRow, "NO_SEQ",  this.dsSearch.getColumn(0, "NO_SEQ"));

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
        								strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc); 	// 통신방법 정의 [생략가능]

        		}
        	});
        };

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	var sCdTrade = this.gfnTrim(objDS.getColumn(objDS.rowposition, "CD_TRADE"));
        	if (!this.gfnIsNull(sCdTrade)) {
        		this.gfnAlert("이미 전표발행된 데이터입니다");
        		return false;
        	}

        	this.gfnConfirm("전표발행 하시겠습니까?", function(strId, val) {
        		if (!val) {
        			return;
        		}

        		var ynHeadOffice = (tabIdx == 0 ? "Y" : "N");

        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsIssueSlip.setColumn(nRow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        		this.dsIssueSlip.setColumn(nRow, "YN_HEADOFFICE", ynHeadOffice);
        		this.dsIssueSlip.setColumn(nRow, "ID_INSERT" 	, this.AuthClient.ID_USER);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_BE" 	, this.AuthClient.CD_DEPT);
        		this.dsIssueSlip.setColumn(nRow, "NO_SEQ",  this.dsSearch.getColumn(0, "NO_SEQ"));

        		var strSvcId    = "issueSlip";
        		var strSvcType  = "savesel";
        		var inProc		= "_dsProc";
        		var inData      = "issueSlip=dsIssueSlip";
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

        	});
        };

        //전표취소 처리
        this.fnCancelSlip = function (obj,e)
        {
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	if (!this.gfnGridIsRow(objGrd)) { return false; }

            var sCdTradeCancel = this.gfnTrim(objDS.getColumn(objDS.rowposition, "CD_TRADECANCEL"));
        	if (!this.gfnIsNull(sCdTradeCancel)) {
        		this.gfnAlert("[취소전표]가 발행되어 있습니다. [취소전표] 전표취소후 작업하세요.");
        		return false;
        	}

        	var sCdTrade = this.gfnTrim(objDS.getColumn(objDS.rowposition, "CD_TRADE"));
        	trace("sCdTrade->" + sCdTrade);
        	if (this.gfnIsNull(sCdTrade)) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return false;
        	}


        	this.gfnConfirm("전표를 취소하시겠습니까?", function(strId, val) {
        		if(val == false) return;

        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();
        		this.dsCancelSlip.setColumn(nRow, "CD_TRADE", sCdTrade);

        		var strSvcId    = "cancelSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "cancelSlip=dsCancelSlip";
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
        	});
        };

        //전표 조회
        this.fnSearchSlip = function (obj,e)
        {

        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	if (!this.gfnGridIsRow(objGrd)) { return false; }

        	var sCdTrade = this.gfnTrim(objDS.getColumn(objDS.rowposition, "CD_TRADE"));
        	trace("sCdTrade->" + sCdTrade);
        	if (this.gfnIsNull(sCdTrade)) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return false;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = sCdTrade;
        	//fnPopupCallBack
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "", param, this.getOffsetWidth(), this.getOffsetHeight());

        };
        this.fnPopupCallBack = function(svcID, val) {
         	//if(!this.gfnIsNull(val)) {	//정상처리 되었으면 재조회 처리
        		//this.FormBtns.Select.click();
        	//}
        };


        //취소 전표발행 처리
        this.fnCancelIssueSlip = function (obj,e)
        {
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

            //발생전표여부 체크
        	var sCdTrade = this.gfnTrim(objDS.getColumn(objDS.rowposition, "CD_TRADE"));
        	if (this.gfnIsNull(sCdTrade)) {
        		this.gfnAlert("결산전표가 발행되지 않았습니다. 전표발행작업후 작업하세요.");
        		return false;
        	}
        	//취소전표 체크
        	var sCdTradeCancel = this.gfnTrim(objDS.getColumn(objDS.rowposition, "CD_TRADECANCEL"));
        	if (!this.gfnIsNull(sCdTradeCancel)) {
        		this.gfnAlert("이미 전표발행된 데이터입니다");
        		return false;
        	}

        	this.gfnConfirm("[취소전표]를 발행 하시겠습니까?", function(strId, val) {
        		if (!val) {
        			return;
        		}

        		var ynHeadOffice = (tabIdx == 0 ? "Y" : "N");

        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsIssueSlip.setColumn(nRow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        		this.dsIssueSlip.setColumn(nRow, "YN_HEADOFFICE", ynHeadOffice);
        		this.dsIssueSlip.setColumn(nRow, "ID_INSERT" 	, this.AuthClient.ID_USER);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_BE" 	, this.AuthClient.CD_DEPT);
        		this.dsIssueSlip.setColumn(nRow, "NO_SEQ",  this.dsSearch.getColumn(0, "NO_SEQ"));

        		var strSvcId    = "issueSlip";
        		var strSvcType  = "savesel";
        		var inProc		= "_dsProc";
        		var inData      = "cancelIssueSlip=dsIssueSlip";
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

        	});
        };

        //전표취소 처리
        this.fnCancelCancelSlip = function (obj,e)
        {
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	if (!this.gfnGridIsRow(objGrd)) { return false; }

        	var sCdTrade = this.gfnTrim(objDS.getColumn(objDS.rowposition, "CD_TRADECANCEL"));
        	trace("sCdTrade->" + sCdTrade);
        	if (this.gfnIsNull(sCdTrade)) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return false;
        	}

        	this.gfnConfirm("[취소전표]를 취소하시겠습니까?", function(strId, val) {
        		if(val == false) return;

        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();
        		this.dsCancelSlip.setColumn(nRow, "CD_TRADE", sCdTrade);

        		var strSvcId    = "cancelSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "cancelCancelSlip=dsCancelSlip";
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
        	});
        };

        //전표 조회
        this.fnCancelSearchSlip = function (obj,e)
        {

        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	if (!this.gfnGridIsRow(objGrd)) { return false; }

        	var sCdTrade = this.gfnTrim(objDS.getColumn(objDS.rowposition, "CD_TRADECANCEL"));
        	trace("sCdTrade->" + sCdTrade);
        	if (this.gfnIsNull(sCdTrade)) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return false;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = sCdTrade;
        	//fnPopupCallBack
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_Celldblclick = function(obj,e)
        {
        	this.fnAccountSelect();
        }

        //그리드 로우변경 이벤트
        this.dsList_Rowposchanged = function(obj,e)
        {
        	this.fnSetExtendButtonEnable();
        };

        this.fnAccountSelect = function(obj,e) {
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	if (!this.gfnGridIsRow(objGrd)) { return false; }

        // 	if(this.dsList.getColumn(this.dsList.rowposition, "TY_COMP") == "" || this.dsList.getColumn(this.dsList.rowposition, "TY_COMP") == "G"){
        // 		this.gfnAlert("하위계정을 선택하세요.");
        // 		return;
        // 	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_ACCOUNT"))) {
        		this.gfnAlert("회계년월을 입력하세요.");
        	}

        	var param = {};
        	param.CD_CORP_REC = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP_REC = this.dsSearch.getColumn(0, "DS_CORP");
        	param.CD_ACCOUNT = objDS.getColumn(objDS.rowposition, "CD_ACCOUNT");
        	param.DS_ACCOUNT = objDS.getColumn(objDS.rowposition, "DS_ACCOUNT");

        	param.CD_DEPT_ACNT = (tabIdx == 0 ) ? "HQ0001" : "HQ0002";
        	param.DS_DEPT_ACNT = (tabIdx == 0) ? "싱가폴 본점" : "카본코 피티이엘티디(영업소)";

        	param.DT_MAGAM = this.dsSearch.getColumn(0, "YM_ACCOUNT").substr(0, 4) + "0101";
        	param.DT_MAGAM2 = this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_ACCOUNT") + "01");
        	param.TY_VENDOR = "";
        	param.CD_VENDOR = "";
        	param.DS_VENDOR = "";

        	this.gfnFormOpen("DHE", "DHE_ACCOUNTSELECT_PW", "", param);

        };

        /************************************************************************
         * 기타 이벤트
        ************************************************************************/
        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);

        		this.fnSetExtendButtonEnable();

        		if(e.columnid == "YM_ACCOUNT"){
        			this.fnSetHeadTitle();
        			this.fnSetMaxSeq();
        		} else if (e.columnid =="CD_CORP"){
        			this.fnSetMaxSeq();
        		}
        	}
        };

        this.fnSetHeadTitle = function(){
        	var tabIdx = this.tabData.tabindex;
        	var objGrd = (tabIdx == 0 ? this.dxGrid1 : this.dxGrid2);
        	var colIdx1 = objGrd.getBindCellIndex("body","AM_KRW");		// 원화금액
        	var colIdx2 = objGrd.getBindCellIndex("body","AM_KRW_END");	// 평가금액

        	var ymAccount = this.dsSearch.getColumn(0, "YM_ACCOUNT");

        	var headTitle1 = "원화금액";
        	var headTitle2 = "평가금액";

         	if(!this.gfnIsNull(ymAccount)){
         		var YY_ACOUNT = ymAccount.substr(2,2);
        		var MM_ACOUNT= ymAccount.substr(4,2);

        		headTitle1 = YY_ACOUNT+"년 " + MM_ACOUNT + "월 말 원화금액";
        		headTitle2 = YY_ACOUNT+"년 " + MM_ACOUNT + "월 말 평가금액";
         	}

         	objGrd.setCellProperty("head", colIdx1, "text", headTitle1);
        	objGrd.setCellProperty("head", colIdx2, "text", headTitle2);
        }

        this.divData_tabData_onchanged = function(obj,e)
        {
        	this.fnSetHeadTitle();
        	this.FormBtns.Select.click();
        };

        this.fnSetExtendButtonEnable = function(){

        	var tabIdx = this.tabData.tabindex;
        	var objDS = (tabIdx == 0 ? this.dsList1 : this.dsList2);

        	var CD_TRADECANCEL = objDS.getColumn(objDS.rowposition, "CD_TRADECANCEL");
        	var CD_TRADE = objDS.getColumn(objDS.rowposition, "CD_TRADE");

        	this.btnSearchSlip.set_enable(this.gfnNvl(CD_TRADE));
        	this.btnCancelSlip.set_enable(this.gfnNvl(CD_TRADE));
        	this.btnIssueSlip.set_enable(!this.gfnNvl(CD_TRADE));

        	this.btnCancelSearchSlip.set_enable(this.gfnNvl(CD_TRADECANCEL));
        	this.btnCancelCancelSlip.set_enable(this.gfnNvl(CD_TRADECANCEL));
        	this.btnCancelIssueSlip.set_enable(!this.gfnNvl(CD_TRADECANCEL) && this.gfnNvl(CD_TRADE));

        }

        // 최종차수 자료 가져오기
        this.fnSetMaxSeq = function() {

        	var tabIdx = this.tabData.tabindex;
        	var ynHeadOffice = (tabIdx == 0 ? "Y" : "N");

        	this.dsSeq.clearData();
        	this.dsSeq.addRow();
        	this.dsSeq.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSeq.setColumn(0, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	this.dsSeq.setColumn(0, "YN_HEADOFFICE", ynHeadOffice);

        	var strSvcId    = "selectMax";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectMax=dsSeq";
        	var outData     = "dsMaxSeq=selectMax0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboNO_SEQ.addEventHandler("onitemchanged",this.divSearch_ccboTY_SLIP_onitemchanged,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
        };
        this.loadIncludeScript("DHA_CONVERSION.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
