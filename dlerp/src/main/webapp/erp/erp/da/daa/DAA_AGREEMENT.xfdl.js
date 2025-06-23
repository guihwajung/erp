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
            this.set_titletext("근로계약서관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_AGREEMENT_SELECT</Col></Row><Row><Col id=\"SP\">DAUPR_ANNUALINCOME_CONTRACT</Col><Col id=\"TARGET\">reportCont</Col></Row><Row><Col id=\"SP\">DAUPR_ANNUALINCOME_PRINT</Col><Col id=\"TARGET\">reportSalary</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DT_BASE\"/><Col id=\"ID_SABUN\"/><Col id=\"ID_PERSON\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgreementList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_BASE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BASE","staDT_BASE:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclDT_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfID_SABUN:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_visible("false");
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

            obj = new BindItem("item1","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_BASE","value","dsSearch","DT_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_AGREEMENT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.nRptAppend = 0;
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

        	// this.FormBtns.Select.click();
        	// 조회 속도가 느림 자동조회 안되게 수정 2020_02_18
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);

        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("FormButton1", "fnPintAgreement","근로계약서출력");
        	this.btn2 = this.gfnFormButtonAdd("FormButton2", "fnAgreementSalary","연봉통지서출력");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ctclDT_BASE = this.divSearch.form.ctclDT_BASE;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.edtID_PERSON = this.divSearch.form.edtID_PERSON;

        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_AGREEMENT");

        	//그리드 이벤트
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	//법인코드
          	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP_CODEFIND";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//성명 코드파인드
        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//일자
        	this.ctclDT_BASE.set_value(this.gfnGetDate());

        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        	/*
        	- 화면로드 시 gr_search = '9' 이면
        	  조회조건의 법인, 부서, 성명 코드파인드에 로그인 정보를 넣어주시고 수정불가능하게 변경해주세요.
        	*/
        	//trace ("법인1: " + this.AuthClient.CD_CORP + " /사번: " + this.AuthClient.ID_SABUN
            //+ " /아이디: " + this.AuthClient.ID_USER	+" /화면권한: "  +  this.FormInfo.GR_SEARCH);

        	if(this.FormInfo.GR_SEARCH == "9"){
        		// 법인
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.set_readonly(true);
        		// 성명
        		this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_USER);
        		this.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);
        		this.ccfID_SABUN.form.set_readonly(true);
        	}
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_BASE", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("ID_PERSON", "string");

        	this.dsSelectRptCont = new Dataset();
        	this.dsSelectRptCont.addColumn("ID_FORM", "string");
        	this.dsSelectRptCont.addColumn("CD_CORP", "string");
        	this.dsSelectRptCont.addColumn("DS_VALUES", "string");
        	this.dsSelectRptCont.addColumn("ID_USER", "string");
        	this.dsSelectRptCont.addColumn("GR_SEARCH", "string");
        	this.dsSelectRptCont.addColumn("GR_CORP", "string");

        	this.dsSelectRptSalary = new Dataset();
        	this.dsSelectRptSalary.addColumn("CD_CORP", "string");
        	this.dsSelectRptSalary.addColumn("DS_VALUES", "string");
        	this.dsSelectRptSalary.addColumn("ID_USER", "string");
        	this.dsSelectRptSalary.addColumn("GR_SEARCH", "string");
        	this.dsSelectRptSalary.addColumn("GR_CORP", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "DT_BASE", this.dsSearch.getColumn(0, "DT_BASE"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));

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
        	//var nrow = this.gfnGridAdd(this.dxGrid);
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
        /*
         *	리셋 버튼
         */
        this.fnReset = function() {

        	this.ctclDT_BASE.set_value(this.gfnGetDate());

        	if(this.FormInfo.GR_SEARCH == "9"){
        		// 법인
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.set_readonly(true);
        		// 성명
        		this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_USER);
        		this.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);
        		this.ccfID_SABUN.form.set_readonly(true);
        	}
        	/*
        	this.ctclDT_BASE.set_value("");
        	this.ccfID_SABUN.form.CDTextBox.set_value("");
        	this.ccfID_SABUN.form.DSTextBox.set_value("");
        	this.ccfCD_CORP.form.CDTextBox.set_value("");
        	this.ccfCD_CORP.form.DSTextBox.set_value("");
        	*/
        };
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {

        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		this.gfnAlert("법인코드를 입력하세요.");
        // 		return false;
        // 	}

        	if (this.gfnIsNull(this.ctclDT_BASE.value)) {
        		this.ctclDT_BASE.setFocus();
        		this.gfnAlert("기준일자를 입력하세요.");
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
        	trace("fnCallback >>>>svcID :["+svcID+"] errorCode :["+errorCode+"] errorMsg :["+errorMsg+"]" );

        	switch(svcID) {
        		case "select":
        			this.gfnGridAfterSelect(this.dxGrid);
        			this.fnSetButton();
        		break;

        		case "report":
        			trace(this.dsAgreementList.saveXML());

        			var inProc		= "_dsProc"; 								//이건 없으면 에러나서 그냥둠
        			var inParam 	= "params=dsAgreementList";						// 조회SP이외 사용할 정보
        			var inData      = "";//"selectReportList=dsSelect"; 		// target=파라미터 Ds
        			var reportpath  = "/da/daa/DAA_AGREEMENT.ozr";

        			gfnOpenReport(this, reportpath, inProc, inParam, inData);
        		break;

        		default:
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        		this.ccfID_SABUN.form.CDTextBox.set_value("");
        		this.ccfID_SABUN.form.DSTextBox.set_value("");
        		this.edtID_PERSON.set_value("");
        	}else if(id =="ccfID_SABUN"){
        		if(arr.length > 0 ){
        			//this.ccfCD_CORP.form.CDTextBox.set_value(arr[0]["CD_CORP"]);
        			//this.ccfCD_CORP.form.DSTextBox.set_value(arr[0]["DS_CORP"]);
        			this.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        		}else{
        			//this.ccfCD_CORP.form.CDTextBox.set_value("");
        			//this.ccfCD_CORP.form.DSTextBox.set_value("");
        			this.edtID_PERSON.set_value("");
        		}
        	}

        	this.fnSearchInit();
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//trace("코드파인드_식별id:" + id);
        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;
        		 case "ccfID_SABUN" :
        		 	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				this.gfnAlert("먼저 법인을 선택해주세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_CORP", this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value));
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "YN_CORP", "N");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분
        		 break;
        		default:
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	//trace('grid_코드파인드_식별id: ' + id);

        	switch(id) {
        		case "ID_SABUN":     // DAX_CFBASEINFO
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        		break;

        		default:
        	}

        	return true;
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        // 근로계약서출력
        this.fnPintAgreement = function(obj,e) {
        	var nChkRowCnt = this.dsList.getCaseCount( "CHK == 1" );
        	if (nChkRowCnt <= 0){
        		this.gfnAlert("선택한 자료가 없습니다. 출력할 자료를 선택하세요!");
        		return;
        	}

        	var tyContractUrl = "";
        	if(this.dsList.getColumn(0, "TY_CONTRACT") == "A01"){
        		tyContractUrl = "/da/daa/DAA_AGREEMENT_BONSA.ozr";
        	}else if(this.dsList.getColumn(0, "TY_CONTRACT") == "A02"){
        		tyContractUrl = "/da/daa/DAA_AGREEMENT_SITE.ozr";
        	}else if(this.dsList.getColumn(0, "TY_CONTRACT") == "A03"){
        		tyContractUrl = "/da/daa/DAA_AGREEMENT_CONT_BONSA.ozr";
        	}else if(this.dsList.getColumn(0, "TY_CONTRACT") == "A04"){
        		tyContractUrl = "/da/daa/DAA_AGREEMENT_CONT_SITE.ozr";
        	}else{
        		tyContractUrl = "/da/daa/DAA_AGREEMENT_BONSA.ozr";	// null값이면 본사계약서 보여줌
        		//return;
        	}

        	var arrDS_VALUES = [];

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == 1) {
        			arrDS_VALUES.push(this.dsList.getColumn(i, "DT_BASE") + ":" + this.dsList.getColumn(i, "ID_SABUN"));
        		}
        	}

        	this.dsSelectRptCont.clearData();
        	var nrow = this.dsSelectRptCont.addRow();

        	this.dsSelectRptCont.setColumn(0, "ID_FORM", "DAA_AGREEMENT");
        	this.dsSelectRptCont.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectRptCont.setColumn(0, "DS_VALUES", arrDS_VALUES.join(','));
        	this.dsSelectRptCont.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelectRptCont.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelectRptCont.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";
        	var inParam 	= "";
        	var inData      = "reportCont=dsSelectRptCont";
        	var reportpath  = tyContractUrl;

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);


        	/*
        	this.dsAgreementList.clearData();	// 전체 데이터

        	this.dsSelectRpt.clearData();
        	this.dsSelectRpt.addRow();

        	var sIdPersons = "";
        	var sCdCorps = "";
        	var sIdSabuns = "";
        	for(var i = 0; i < this.dsList.rowcount; i++){
        		if(this.dsList.getColumn(i, "CHK") != 1 ) continue;

        		var sComma = (this.gfnIsNull(sIdPersons)) ? "" : "_";
        		sIdPersons = sIdPersons + sComma + this.dsList.getColumn(i, "ID_PERSON");
        		sCdCorps = sCdCorps + sComma + this.dsList.getColumn(i, "CD_CORP");
        		sIdSabuns = sIdSabuns + sComma + this.dsList.getColumn(i, "ID_SABUN");
        	}


        	//테스트 데이터
        	//340_346
        	//01_03
        	//19040_19048


        	this.dsSelectRpt.setColumn(0, "ID_PERSONS", sIdPersons);
        	this.dsSelectRpt.setColumn(0, "CD_CORPS", sCdCorps);
        	this.dsSelectRpt.setColumn(0, "ID_SABUNS", sIdSabuns);
         	this.dsSelectRpt.setColumn(0, "YY_BASE", this.ctclDT_BASE.value.substring(0, 4));
         	this.dsSelectRpt.setColumn(0, "YM_BASE", this.ctclDT_BASE.value.substring(0, 6));
        	this.dsSelectRpt.setColumn(0, "DS_HNAME", this.AuthClient.DS_HNAME);
        	this.dsSelectRpt.setColumn(0, "DT_PRINT", this.gfnGetDate());

        	var strSvcId    = "report";
        	var strSvcType  = "select"; 					//url(select / grid / save)
        	var inProc		= "_dsProc";
        	var inData      = "report=dsSelectRpt"; 		//target=파라미터 Ds
        	var outData     = "dsAgreementList=report0"; 	//return Ds=target순번
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        	*/
        }

        // 연봉통지서 출력
        this.fnAgreementSalary = function(obj,e) {
        	var nChkRowCnt = this.dsList.getCaseCount( "CHK == 1" );
        	if (nChkRowCnt <= 0){
        		this.gfnAlert("선택한 자료가 없습니다. 출력할 자료를 선택하세요!");
        		return;
        	}

        	var arrDS_VALUES = [];

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == 1) {
        			arrDS_VALUES.push(this.dsList.getColumn(i, "DT_BASE") + ":" + this.dsList.getColumn(i, "ID_SABUN"));
        		}
        	}

        	this.dsSelectRptSalary.clearData();
        	var nrow = this.dsSelectRptSalary.addRow();

        	this.dsSelectRptSalary.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectRptSalary.setColumn(0, "DS_VALUES", arrDS_VALUES.join(','));
        	this.dsSelectRptSalary.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelectRptSalary.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelectRptSalary.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";
        	var inParam 	= "";
        	var inData      = "reportSalary=dsSelectRptSalary";
        	var reportpath  = "/da/dau/DAU_ANNUALSALARY.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }





        // 근로계약테이블
        this.fnAgreementBase = function(obj,e) {
        	// TODO 대상자생성 기능 추가
        	//if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};
        	//param.NO_ACCOUNT = this.dsList0.getColumn(this.dsList0.rowposition,"NO_ACCOUNT");
        	//this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAA_AGREEMENT_BASE", "", param, 330, 410);
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAA_AGREEMENT_BASE", "", param);
        }
        this.dsList_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_BASE.addEventHandler("onchanged",this.divSearch_ctclDT_BASE_onchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_AGREEMENT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
