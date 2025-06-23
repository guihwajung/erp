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
            this.set_titletext("사업소득 간이지급명세서 신고");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_ETCTAX_SELECT</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHVPR_ETCTAX_CREATE</Col></Row><Row><Col id=\"TARGET\">ganTaxSingo</Col><Col id=\"SP\">DHVPR_GANTAXSINGO_PAYYM_CREATE</Col></Row><Row><Col id=\"TARGET\">ganTaxSingo2</Col><Col id=\"SP\">DHVPR_GANTAXSINGO_CREATE2</Col></Row><Row><Col id=\"SP\">DZXPR_COMPANYCORP_CODEFIND</Col><Col id=\"TARGET\">nosaup</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_IMPUTE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPUTE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_IMPUTE_TO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGanTaxSingoResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNoSaup", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_INCOMECLASS", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta06","358","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("귀속기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPUTE_FR","sta06:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","ctclYM_IMPUTE_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPUTE_TO","sta04:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ctclYM_IMPUTE_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("거주구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_RESIDENT","sta02:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_visible("false");
            var divSearch_form_ccboYN_RESIDENT_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboYN_RESIDENT_innerdataset", obj);
            divSearch_form_ccboYN_RESIDENT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">거주</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">비거주</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboYN_RESIDENT_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04_00","825","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("소득구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_INCOMECLASS","917","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","1","0",null,null,"4","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtCont","1290","295","120","95",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclYM_IMPUTE_TO.form.TextBox","value","dsSearch","YM_IMPUTE_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclYM_IMPUTE_FR.form.TextBox","value","dsSearch","YM_IMPUTE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboYN_RESIDENT","value","dsSearch","YN_RESIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_INCOMECLASS","accessibilityaction","dsSearch","CD_INCOMECLASS");
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
        this.registerScript("DHV_GANTAXSINGO_ETC.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var context = "/";
        if (nexacro.getEnvironmentVariable("evContextPath") != undefined) {
        	context = nexacro.getEnvironmentVariable("evContextPath");
        }

        this.fileConfig = {
        	host : this.gfnGetServerUrl(),
        	downloadUrl : context + "file/downloadText.do",
        	allowTypes : ["txt"],
        	maxCount : 1,
        	maxSize : "200MB",
        	maxTotalSize : "200MB"
        };

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
        	this.ccboYN_RESIDENT.set_index(0);	 // 거주 선택 처리
        	//법인코드 세션에 코드로 셋팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	//귀속기간
        	//var nowYear = this.gfnGetDate().substr(0,4);
        	//this.ctclYY_TUITION.form.TextBox.set_value(this.gfnGetDate().substr(0,4));
        	//this.ctclYM_IMPUTE_FR.form.TextBox.set_value(nowYear + "01");
        	//this.ctclYM_IMPUTE_TO.form.TextBox.set_value(nowYear + "06");
        	this.ctclYM_IMPUTE_FR.form.TextBox.set_value(this.gfnAddMonth(this.gfnGetDate(),-1).substring(0,6));
        	this.ctclYM_IMPUTE_TO.form.TextBox.set_value(this.gfnAddMonth(this.gfnGetDate(),-1).substring(0,6));
        	//this.fnGetNoSaup();
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
        	this.btnGanTaxSingo = this.gfnFormButtonAdd("GanTaxSingo", "fnGanTaxSingo");	//전산매체파일생성
        	this.btnDataCreate = this.gfnFormButtonAdd("DataCreate", "fnDataCreate");	//자료생성
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP 	    = this.divSearch.form.ccfCD_CORP;
        	this.ctclYM_IMPUTE_FR 	= this.divSearch.form.ctclYM_IMPUTE_FR;
        	this.ctclYM_IMPUTE_TO  	= this.divSearch.form.ctclYM_IMPUTE_TO;
        	this.ccboYN_RESIDENT 	= this.divSearch.form.ccboYN_RESIDENT;
        	//this.ccfCD_INCOMECLASS = this.divSearch.form.ccfCD_INCOMECLASS;
        	this.dxGrid 		    = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_GANTAXSINGO_ETC");

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_IMPUTE_FR", "string");
        	this.dsSelect.addColumn("YM_IMPUTE_TO", "string");
        	this.dsSelect.addColumn("YN_RESIDENT", "string");


        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("YM_IMPUTE_FR", "string");
        	this.dsCreate.addColumn("YM_IMPUTE_TO", "string");
        	this.dsCreate.addColumn("ID_USER", "string");
        	this.dsCreate.addColumn("YN_RESIDENT", "string");
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

        	this.dsSelect.setColumn(0, "CD_CORP"			, this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YM_IMPUTE_FR"		, this.ctclYM_IMPUTE_FR.form.TextBox.value);
        	this.dsSelect.setColumn(0, "YM_IMPUTE_TO"		, this.ctclYM_IMPUTE_TO.form.TextBox.value);
        	this.dsSelect.setColumn(0, "YN_RESIDENT"		, this.ccboYN_RESIDENT.value);

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
        						callBackFnc);   // 통신방법 정의 [생략가능]
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

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	var ymImputeFr = this.ctclYM_IMPUTE_FR.form.TextBox.value;
        	var ymImputeTo = this.ctclYM_IMPUTE_TO.form.TextBox.value;
        	if(this.gfnIsNull(ymImputeFr)){
        		this.gfnAlert("귀속기간(시작월)은 필수입니다.");
        		this.ctclYM_IMPUTE_FR.form.TextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(ymImputeTo)){
        		this.gfnAlert("귀속기간(종료월)은 필수입니다.");
        		this.ctclYM_IMPUTE_TO.form.TextBox.setFocus();
        		return false;
        	}


        	if(this.gfnGetDiffDate(ymImputeFr + "01", ymImputeTo +"01") <= -1){
        		this.gfnAlert("귀속기간의 시작월은 종료월보다 작아야 합니다.");
        		this.ctclYM_IMPUTE_FR.form.TextBox.setFocus();
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
        	switch(svcID) {
        		case "select":
        			this.gfnGridAfterSelect(this.dxGrid);
        			this.fnSetBtnGanTaxSingo(this.dsSearch.getColumn(0, "YN_RESIDENT")); //전산매체생성 버튼 활성화 관련

        		break;
        		case "create":
        			if (errorCode == 0) {
        				this.gfnAlert("생성되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "ganTaxSingo":
        			var strCont= "";
        			for(var i = 0; i < this.dsGanTaxSingoResult.rowcount; i++) {
        				strCont += this.gfnNvl(this.dsGanTaxSingoResult.getColumn(i, "LIST"),"");
        				if(i != this.dsGanTaxSingoResult.rowcount-1 ){
        					strCont += "\n";
        				}
        			}
        			this.txtCont.set_value(strCont);

        			//파일 다운
        			this.fnFileDown();
        		break;
        		case "nosaup":
        		  var nRow = this.dsNoSaup.findRow("CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		  this.strSaupNo = this.dsNoSaup.getColumn(nRow, "NO_SAUP");
        		  trace("nosaup 콜백=>" + this.strSaupNo);
        		  break;
        		default:
        	}
        };

        //전산매체생성 버튼 활성화 관련
        this.fnSetBtnGanTaxSingo = function(sYN_RESIDENT){
        	if(this.gfnIsNull(sYN_RESIDENT)){
        		//전체일때 전산매체 생성 비활성화
        		this.btnGanTaxSingo.set_enable(false);
        	}else{
        		if(this.dsList.rowcount >0){
        			this.btnGanTaxSingo.set_enable(true);
        		}else{
        			this.btnGanTaxSingo.set_enable(false);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.fnGetNoSaup = function() {
        	this.dsGetNoSaup = new Dataset();

        	this.dsGetNoSaup.addColumn("TY_GUBUN", "string");
        	this.dsGetNoSaup.addColumn("CN_ROW", "string");
        	this.dsGetNoSaup.addColumn("VALUE", "string");
        	this.dsGetNoSaup.addColumn("MIN_VALUE", "string");
        	this.dsGetNoSaup.addColumn("CD_CORP", "string");

        	this.dsGetNoSaup.clearData();
        	this.dsGetNoSaup.addRow();
        	this.dsGetNoSaup.setColumn(0, "TY_GUBUN", "");
        	this.dsGetNoSaup.setColumn(0, "CN_ROW", "");
        	this.dsGetNoSaup.setColumn(0, "VALUE", "");
        	this.dsGetNoSaup.setColumn(0, "MIN_VALUE", "");
        	this.dsGetNoSaup.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

        	var strSvcId    = "nosaup";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "nosaup=dsGetNoSaup";
        	var outData     = "dsNoSaup=nosaup0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        }

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		//this.fnGetNoSaup();

        		if(e.columnid == "YN_RESIDENT"){
        			this.fnSetBtnGanTaxSingo(e.newvalue); //전산매체생성 버튼 활성화 관련
        		}
        		if(e.columnid == "CD_CORP"){
        			this.fnGetNoSaup();  //전산매체생성 버튼 활성화 관련
        		}
        	}
        // 	this.ctclYM_IMPUTE_FR.form.TextBox.set_value(this.ctclYY_TUITION.form.TextBox.value + "01");
        // 	this.ctclYM_IMPUTE_TO.form.TextBox.set_value(this.ctclYY_TUITION.form.TextBox.value + "06");
        };


        //자료신고 - 전산매체 생성
        this.fnGanTaxSingo = function(){
        	if(!this.fnSelectValidate()) return;

        	this.gfnConfirm("전산매체를 생성 하시겠습니까?", "fnGanTaxSingo_callback");
        };

        this.fnGanTaxSingo_callback = function(strId, val){
        	if(val) {

        		this.dsGanTaxSingo = new Dataset();

        		this.dsGanTaxSingo.addColumn("CD_CORP", "string");
        		this.dsGanTaxSingo.addColumn("YR_TAX", "string");			// 귀속년도
        		this.dsGanTaxSingo.addColumn("DT_ACCOUNT", "string");		//제출년월일
        		this.dsGanTaxSingo.addColumn("TY_INCOME_TYPE", "string");	//사업소득 (30)
        		this.dsGanTaxSingo.addColumn("PAY_YM", "string");			//지급년도
        		//this.dsGanTaxSingo.addColumn("TY_GUBUN", "string");			//구분 Y:상반기, N:하반기

        		this.dsGanTaxSingo.clearData();
        		var nRow = this.dsGanTaxSingo.addRow();

        		//처리할 데이터 담기
        		this.dsGanTaxSingo.setColumn(nRow, "CD_CORP"		, this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsGanTaxSingo.setColumn(nRow, "YR_TAX"			, this.ctclYM_IMPUTE_TO.form.TextBox.value.substring(0,4));
        		this.dsGanTaxSingo.setColumn(nRow, "DT_ACCOUNT"		, this.gfnGetDate());
        		this.dsGanTaxSingo.setColumn(nRow, "TY_INCOME_TYPE"	, "42");  // 기타소득
        		this.dsGanTaxSingo.setColumn(nRow, "PAY_YM"			, this.ctclYM_IMPUTE_TO.form.TextBox.value);
        		//this.dsGanTaxSingo.setColumn(nRow, "YN_GUBUN"		, this.ccboTY_YM.value);

        		var strSvcId    = "ganTaxSingo";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData 		= "";
        		var outData 	= "";

        		// if(this.ccboYN_RESIDENT.value == "Y"){
        		inData      = "ganTaxSingo=dsGanTaxSingo";
        		outData     = "dsGanTaxSingoResult=ganTaxSingo0";
        // 		}else if(this.ccboYN_RESIDENT.value == "N"){
        // 			inData      = "ganTaxSingo2=dsGanTaxSingo";
        // 			outData     = "dsGanTaxSingoResult=ganTaxSingo20";
        // 		}
        //
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

        //자료생성 처리
        this.fnDataCreate = function (obj,e)
        {
        	if(!this.fnSelectValidate()) return;

        	this.gfnConfirm("생성 하시겠습니까?", "fnDataCreate_callback");

        };

        this.fnDataCreate_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCreate.clearData();
        		var nRow = this.dsCreate.addRow();

        		//처리할 데이터 담기
        		this.dsCreate.setColumn(nRow, "CD_CORP"				, this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsCreate.setColumn(nRow, "YM_IMPUTE_FR"		, this.ctclYM_IMPUTE_FR.form.TextBox.value);
        		this.dsCreate.setColumn(nRow, "YM_IMPUTE_TO"		, this.ctclYM_IMPUTE_TO.form.TextBox.value);
        		this.dsCreate.setColumn(nRow, "ID_USER"  			, this.AuthClient.ID_USER);
        		this.dsCreate.setColumn(0, "YN_RESIDENT"			, this.ccboYN_RESIDENT.value);

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



        //전산매체 생성 - TXT 파일 다운
        //※ 예 시 : 사 업 자 등 록 번 호 가 ‘123-45-67890’ 인간이지급명세서 ( 거주자의 기타소득 ) 의
        //파일명은 ‘SE1234567.890 ’
        this.fnFileDown = function() {

        	var cFileName="";
        	var sFilename = "SE"+ this.strSaupNo.substr(0, this.strSaupNo.length-3) + "." + this.strSaupNo.substr(this.strSaupNo.length-3, 3);
        	var sFilecont = this.txtCont.value;
        	var encodeFileName = encodeURIComponent(sFilename);

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;
        	this.FileDownTransfer00.set_url(surl);
        	this.FileDownTransfer00.setPostData("fileCont", sFilecont);
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	this.FileDownTransfer00.setPostData("fileEncoding", "EUC-KR"); //UTF-8, EUC-KR
        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer00.set_downloadfilename(sFilename);
        	}
        	this.FileDownTransfer00.download();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboYN_RESIDENT.addEventHandler("onitemchanged",this.divSearch_ccboYN_RESIDENT_onitemchanged,this);
            this.divData.form.objGrid.addEventHandler("oncellclick",this.divData_objGrid_oncellclick,this);
        };
        this.loadIncludeScript("DHV_GANTAXSINGO_ETC.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
