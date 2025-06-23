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
            this.set_titletext("감가상각 조정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTable", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_LA_SKCALC_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_LA_SKCALC_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_LA_SKCALC_DELETE</Col></Row><Row><Col id=\"TARGET\">calc</Col><Col id=\"SP\">DHAPR_LA_SKCALC_CALC</Col></Row><Row><Col id=\"TARGET\">selectCdSlip</Col><Col id=\"SP\">DHAPR_LA_SKCALC_CDTRADE</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHAPR_LA_SKAUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHAPR_LA_SKAUTOSLIP_DELETE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHAPR_LA_SKCALC_INIT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"STD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP\"/><Col id=\"DEPT\"/><Col id=\"STD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCdSlip", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","staDT_FROM:0.0","staDT_FROM:10.0",null,"110.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCorp","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCorp","staCorp:0.0",null,"250","24.0",null,"4",null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSite","ccfCorp:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사업지");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfSite","staSite:0.0",null,"250","24.0",null,"4",null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staStd","ccfSite:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclStd","staStd:0.0","staStd:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCDSLIP","ctclStd:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCD_SLIP","staCDSLIP:0.0","10.0","152","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","15",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DEP","75","-34","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_DEP");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCorp.form.CDTextBox","value","dsSearch","CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfSite.form.CDTextBox","value","dsSearch","DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclStd.form.TextBox","value","dsSearch","STD");
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
        this.registerScript("DHA_DEPRECIATION_SELECT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();
        };

        this.fnSetExtendButton = function() {
        	this.btnCreateData 	  = this.gfnFormButtonAdd("CreateData", "fnCreateData"); 		//자료생성
        	this.btnCalc 		  = this.gfnFormButtonAdd("Calc", "fnCalc"); 					//감가상각 조정 계산
        	this.btnSearchSlip    = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 		//전표조회 버튼
        	this.btnIssueSlip     = this.gfnFormButtonAdd("IssueSlip" , "fnIssueSlip"); 		//전표발행 버튼
        	this.btnCancelSlip    = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 		//전표취소 버튼
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//조회
        	this.ccfCorp = this.divSearch.form.ccfCorp;
        	this.ccfSite = this.divSearch.form.ccfSite;
        	this.ctclStd = this.divSearch.form.ctclStd;

        	this.edtCD_SLIP = this.divSearch.form.edtCD_SLIP;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;

        };

        this.fnSetButton = function() {

        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("DT_STD", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("DT_STD", "string");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("TY_LEA", "string");
        	this.dsUpdate.addColumn("RT_LEA", "string");
        	this.dsUpdate.addColumn("NB_HM", "string");
        	this.dsUpdate.addColumn("NB_LEHM", "string");
        	this.dsUpdate.addColumn("NB_NLEHM", "string");
        	this.dsUpdate.addColumn("CGL_SUBT", "string");
        	this.dsUpdate.addColumn("CGL_LEA", "bigdecimal");
        	this.dsUpdate.addColumn("CGL_NLEA", "bigdecimal");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("DT_STD", "string");

        	this.dsCalc = new Dataset();
        	this.dsCalc.addColumn("CD_CORP", "string");
        	this.dsCalc.addColumn("DT_STD", "string");

        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");			//법인코드
        	this.dsIssueSlip.addColumn("DT_STD", "string");				//회계년월
        	this.dsIssueSlip.addColumn("CD_DEPT_BH", "string");			//발행부서
        	this.dsIssueSlip.addColumn("ID_TRANS", "string");			//사용자 아이디

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_CORP", "string");		//법인코드
        	this.dsCancelSlip.addColumn("DT_STD", "string");		//회계년월
        	this.dsCancelSlip.addColumn("CD_TRADE", "string");		//전표번호

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");		//법인코드
        	this.dsCreate.addColumn("DT_STD", "string");		//회계년월

        }

        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_DEPRECIATION_SELECT");

        	this.ccfCorp.CodeFindName = "DHX_CFCORP";
        	this.ccfCorp.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCorp.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfSite.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfSite.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfSite.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCorp.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCorp.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        	var toDay = this.gfnGetDate().substring(0,6);
        	this.divSearch.form.ctclStd.form.TextBox.set_value(toDay);

        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);

        }

        this.fnSearchInit = function(id) {
        	this.gfnSetFormStatus(this);
        };

        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        // 		if (this.dxGrid.rowcount > 0) {
        // 			this.btnCalc.set_enable(true);
        // 		}

        		this.FormBtns.Add.set_enable(false);

        		this.gfnGridAfterSelect(this.dxGrid);

        		//전표번호가 있을경우
        		if(!this.gfnIsNull(this.dsCdSlip.getColumn(0, "CD_SLIP"))){
        			this.gfnSetEnable(this.btnCalc, false);
        			this.gfnSetEnable(this.btnSearchSlip, true);
        			this.gfnSetEnable(this.btnIssueSlip, false);
        			this.gfnSetEnable(this.btnCancelSlip, true);
        			this.gfnSetEnable(this.btnCreateData, false);

        			this.dxGrid.info = "Y";
        		}else{
        			this.gfnSetEnable(this.btnCalc, true);
        			this.gfnSetEnable(this.btnSearchSlip, false);
        			this.gfnSetEnable(this.btnIssueSlip, true);
        			this.gfnSetEnable(this.btnCancelSlip, false);
        			this.gfnSetEnable(this.btnCreateData, true);

        			this.dxGrid.info = "N";
        		}
        		this.edtCD_SLIP.set_value(this.dsCdSlip.getColumn(0, "CD_SLIP"));

        	} else if(svcID == "calc") {
        		this.gfnAlert("감가상각 조정 계산작업이 완료되었습니다.");

         		if (errorCode == 0) {
         			this.FormBtns.Select.click();
         		} else {
         			this.gfnAlert(errorMsg);
         		}

        	} else if(svcID == "delete") {
        		this.gfnAlert("삭제되었습니다.");

         		if (errorCode == 0) {
         			this.FormBtns.Select.click();
         		} else {
         			this.gfnAlert(errorMsg);
         		}

        	} else if(svcID == "save") {

         		if (errorCode == 0) {
         			this.FormBtns.Select.click();
         		} else {
         			this.gfnAlert(errorMsg);
         		}
        	}else if(svcID == "issueSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "cancelSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "create"){
        		if (errorCode == 0) {
        			this.gfnAlert("생성 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnSelectValidation = function() {

        	if(this.gfnIsNull(this.ccfCorp.form.CDTextBox.value)) {
        		this.ccfCorp.form.CDTextBox.setFocus();
        		this.gfnAlert("법인코드를 입력하세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.ctclStd.form.TextBox.value)) {
        		this.ctclStd.setFocus();
        		this.gfnAlert("회계년월을 입력하세요.");
        		return false;
        	}

        	return true;
        }

        this.fnSaveValidation = function() {

        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.gfnAllTrim(this.ccfCorp.form.CDTextBox.value));
        	this.dsSelect.setColumn(0, "CD_SITE", this.gfnAllTrim(this.ccfSite.form.CDTextBox.value));
        	this.dsSelect.setColumn(0, "DT_STD", this.ctclStd.form.TextBox.value);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect selectCdSlip=dsSelect";
        	var outData     = "dsList=select0 dsCdSlip=selectCdSlip0";
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
        	//전표번호가 있을경우 리턴
        	if(!this.gfnIsNull(this.dsCdSlip.getColumn(0,"CD_SLIP"))) return;

        	this.dsDelete.clearData();
        	this.dsDelete.addRow();

        	this.dsDelete.setColumn(0, "CD_CORP", this.gfnAllTrim(this.ccfCorp.form.CDTextBox.value));
        	this.dsDelete.setColumn(0, "DT_STD", this.ctclStd.form.TextBox.value);

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "delete";
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

        this.fnSave = function() {

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        // 			case "I":
        // 				var nrow = this.dsInsert.addRow();
        // 				this.dsInsertMake(nrow, i);
        // 				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.gfnAllTrim(this.ccfCorp.form.CDTextBox.value));
        				this.dsUpdate.setColumn(nrow, "DT_STD", this.ctclStd.form.TextBox.value);
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "EC"));
        				this.dsUpdate.setColumn(nrow, "TY_LEA", this.dsList.getColumn(i, "EL"));
        				this.dsUpdate.setColumn(nrow, "RT_LEA", this.dsList.getColumn(i, "EM"));
        				this.dsUpdate.setColumn(nrow, "NB_HM", this.dsList.getColumn(i, "EN"));
        				this.dsUpdate.setColumn(nrow, "NB_LEHM", this.dsList.getColumn(i, "EO"));
        				this.dsUpdate.setColumn(nrow, "NB_NLEHM", this.dsList.getColumn(i, "EP"));
        				this.dsUpdate.setColumn(nrow, "CGL_SUBT", this.dsList.getColumn(i, "EBK"));
        				this.dsUpdate.setColumn(nrow, "CGL_LEA", this.dsList.getColumn(i, "EBL")); //유동성장기부채_임대
        				this.dsUpdate.setColumn(nrow, "CGL_NLEA", this.dsList.getColumn(i, "EBM")); //유동성장기부채_미임대
        				break;

        // 			case "D":
        // 				var nrow = this.dsDelete.addRow();
        // 				this.dsDeleteMake(nrow, i);
        // 				break;
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
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "ccfCorp") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if(id == "ccfSite") {
        		var cdCorp = this.ccfCorp.form.CDTextBox.text;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			return false;
        		}
        		//dsUserParam.setColumn(nrow, "VALUE", this.ccfSite.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "0000000");
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "02");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	if(id == "ccfCorp") {
        		this.ccfSite.form.fnCodeFindClear();
        		//this.gfnSetFormStatus(this, "I");
        	}else if(id == "ccfSite") {
        		//this.gfnSetFormStatus(this, "I");
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {

        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);

        		/*this.btnCalc.set_enable(false);*/
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		/*this.btnCalc.set_enable(false);*/
        	}
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.dsList_ColumnChanged = function(obj, e){

        	 if(e.columnid == "EBK") { //유동성 장기부채_계
        		var ebk = (e.columnid == "EBK" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "EBK"),0));
        		var em = (e.columnid == "EM" ? nexacro.toNumber(e.newvalue,0) : nexacro.toNumber(obj.getColumn(e.row, "EM"),0));

        		var ebl = nexacro.Decimal(nexacro.toNumber((ebk * (nexacro.toNumber(em / 100))),0)).trunc();
        		var ebm = nexacro.toNumber((ebk - ebl),0);

        		this.dsList.setColumn(this.dsList.rowposition,"EBL", ebl); //유동성 장기부채_임대
        		this.dsList.setColumn(this.dsList.rowposition,"EBM", ebm); //유동성 장기부채_미임대
        	}
         }

        this.fnCalc = function(obj,e) {

        	this.dsCalc.clearData();
        	this.dsCalc.addRow();

        	this.dsCalc.setColumn(0, "CD_CORP", this.gfnAllTrim(this.ccfCorp.form.CDTextBox.value));
        	this.dsCalc.setColumn(0, "DT_STD", this.ctclStd.form.TextBox.value);

        	if (this.dsCalc.rowcount == 0) return;

        	var strSvcId    = "calc";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "calc=dsCalc";
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
        };

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnAllTrim(this.ccfCorp.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCorp.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclStd.form.TextBox.value)){
        		this.gfnAlert("회계년월은 필수입니다.");
        		this.ctclStd.form.TextBox.setFocus();
        		return;
        	}

        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");

        };

        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"		, this.ccfCorp.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_BH" 	, this.AuthClient.CD_DEPT);
        		this.dsIssueSlip.setColumn(nRow, "DT_STD" 		, this.ctclStd.form.TextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "ID_TRANS" 	, this.AuthClient.ID_USER);

        		var strSvcId    = "issueSlip";
        		var strSvcType  = "save";
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
        	}
        };

        //전표취소 처리
        this.fnCancelSlip = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnAllTrim(this.dsCdSlip.getColumn(0, "CD_SLIP")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");

        };

        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();

        		var cdSlip = this.dsCdSlip.getColumn(0, "CD_SLIP");

        		//처리할 데이터 담기
        		this.dsCancelSlip.setColumn(nRow, "CD_CORP"   , this.ccfCorp.form.CDTextBox.value);
        		this.dsCancelSlip.setColumn(nRow, "DT_STD"    , this.ctclStd.form.TextBox.value);
        		this.dsCancelSlip.setColumn(nRow, "CD_TRADE"  , cdSlip);

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
        	}
        };

        //전표 조회
        this.fnSearchSlip = function (obj,e)
        {
        	if (this.gfnIsNull(this.dsCdSlip.getColumn(0, "CD_SLIP"))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.dsCdSlip.getColumn(0, "CD_SLIP");
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        //지료생성 처리
        this.fnCreateData = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnAllTrim(this.ccfCorp.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCorp.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclStd.form.TextBox.value)){
        		this.gfnAlert("회계년월은 필수입니다.");
        		this.ctclStd.form.TextBox.setFocus();
        		return;
        	}

        	this.gfnConfirm("생성 하시겠습니까?", "fnCreateData_callback");

        };

        this.fnCreateData_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCreate.clearData();
        		var nRow = this.dsCreate.addRow();

        		//처리할 데이터 담기
        		this.dsCreate.setColumn(nRow, "CD_CORP"  , this.ccfCorp.form.CDTextBox.value);
        		this.dsCreate.setColumn(nRow, "DT_STD"   , this.ctclStd.form.TextBox.value);

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
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCorp.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfSite.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staStd.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_DEPRECIATION_SELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
