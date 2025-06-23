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
            this.set_titletext("법인카드청구대사");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_CARDSAAPP_MATCH</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHAPR_CARDSAAPP_MATCH_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHAPR_CARDSAAPP_MATCH_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">selectBudget</Col><Col id=\"SP\">DHAPR_AVAILABLEBUDGET_SELECT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_CARDSAAPP_MATCH_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_CONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DATE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DATE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPTOPER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPTOPER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListBudget", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_DEF\" type=\"STRING\" size=\"256\"/><Column id=\"AM_EXEC\" type=\"STRING\" size=\"256\"/><Column id=\"AM_YR_AVAIL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DEFMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"AM_EXEMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MM_AVAIL\" type=\"STRING\" size=\"256\"/><Column id=\"MM_PERIOD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("거래일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FR","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","ctclDT_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staCD_TILDE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPTOPER","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("귀속부서");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPTOPER","staCD_DEPTOPER:0","staCD_CORP:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_DEPTOPER:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("카드번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_NOCARD","sta01:0.0","staCD_CORP:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("130");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DFX_CFCARD_CODEFIND");
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

            obj = new BindItem("item1","divSearch.form.ctclDT_FR","value","dsSearch","DT_DATE_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_TO","value","dsSearch","DT_DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_NOCARD.form.CDTextBox","value","dsSearch","NO_CARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPTOPER.form.CDTextBox","value","dsSearch","CD_DEPTOPER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_DEPTOPER.form.DSTextBox","value","dsSearch","DS_DEPTOPER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_BUBINCARDSAAPP_MATCH.xfdl", function() {
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
        	//this.fnSetCombo();

        	//화면 로드시 자동조회
        	//this.FormBtns.Select.click();

        	this.ccfCD_DEPTOPER.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        	this.ccfCD_DEPTOPER.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);

        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        		//this.staCD_DEPTOPER.set_textDecoration("underline");
        		this.staCD_DEPTOPER.set_cssclass("sta_WF_SchLabelE");
        	}

        	// 법인코드 포커스추가
        	this.ccfCD_CORP.form.CDTextBox.setFocus();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.gfnSetEnable(this.FormBtns.Reset, true);


        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSearchSlip = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 	//전표조회 버튼
        	this.btnIssueSlip  = this.gfnFormButtonAdd("IssueSlip" , "fnIssueSlip"); 	//전표발행 버튼
        	this.btnCancelSlip = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 	//전표취소 버튼
        	this.btnCheckSelect = this.gfnFormButtonAdd("CheckSelect", "fnCheckSelect"); 	// 미발행건선택(500건)
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ctclDT_FR = this.divSearch.form.ctclDT_FR; 				//거래일자(from)
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO; 				//거래일자(To)
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP; 		    	//법인
        	this.ccfCD_DEPTOPER = this.divSearch.form.ccfCD_DEPTOPER;		//귀속부서
        	this.ccfCD_NOCARD = this.divSearch.form.ccfCD_NOCARD;			//카드번호

        	this.staCD_DEPTOPER = this.divSearch.form.staCD_DEPTOPER;

        	this.dxGrid = this.divData.form.objGrid;
        	//this.grSearch = this.FormInfo.GR_SEARCH;						// 권한?
        	this.cdGroup = this.AuthClient.CD_GROUP;						// 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_BUBINCARDSAAPP_MATCH");

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	// 날짜
        	this.ctclDT_FR.set_value(this.gfnGetFirstDate(this.gfnGetDate()));
        	this.ctclDT_TO.set_value(this.gfnGetDate());

         	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPTOPER.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_NOCARD.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPTOPER.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_NOCARD.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	//리스트 변경 이벤트
        	//this.dsList.addEventHandler("oncolumnchanged", this.dsList_Columnchanged, this);

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	//this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CHK"), "displaytype", "expr:CHK_FLAG =='Y' ? 'checkboxcontrol' : 'none'");
        	//this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CHK"), "edittype", "expr:CHK_FLAG =='Y' ? 'checkbox' : 'none'");
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_PROOF"), "edittype", "expr:YN_VAT =='Y' ? 'combo' : 'none'");
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "TY_VATBGJE"), "edittype", "expr:CD_PROOF =='19' ? 'combo' : 'none'");
        }

         /************************************************************************
         * 파라미터
         ************************************************************************/
        this.fnSetParameter = function() {

        	// sp의 input 파라미터
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_FROM", "string");    //거래일자(시작)
        	this.dsSelect.addColumn("DT_TO", "string");  	//거래일자(종료)
        	this.dsSelect.addColumn("CD_DEPT", "string");  	//귀속부서
        	this.dsSelect.addColumn("CD_CORP", "string");  		//법인코드
        	this.dsSelect.addColumn("NO_CARD", "string");		//카드번호

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_SEQ", "int");			//순번

        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");		//법인코드
        	this.dsIssueSlip.addColumn("NO_SEQ", "string");			//순번(배열)
        	this.dsIssueSlip.addColumn("ID_INSERT", "string");		//사용자 아이디
        	this.dsIssueSlip.addColumn("CD_DEPT_BH", "string");		//발행부서

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_TRADE", "string");		//전표번호

        	//예산조회
        	this.dsSelectBudget = new Dataset();
        	this.dsSelectBudget.addColumn("YM_ACCOUNT", "string");
        	this.dsSelectBudget.addColumn("DEPTOFFICER", "string");
        	this.dsSelectBudget.addColumn("BIMOK", "string");
        	this.dsSelectBudget.addColumn("SEMOK", "string");
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

        	this.dsSelect.setColumn(0, "DT_FROM", this.ctclDT_FR.value);			// 거래일자 (from)
        	this.dsSelect.setColumn(0, "DT_TO", this.ctclDT_TO.value);			// 거래일자 (to)
        	this.dsSelect.setColumn(0, "CD_DEPT", this.ccfCD_DEPTOPER.form.CDTextBox.value);	// 귀속부서
        	this.dsSelect.setColumn(0, "NO_CARD", nexacro.replaceAll(this.gfnNvl(this.ccfCD_NOCARD.form.CDTextBox.value,""),"-",""));		// 카드번호
         	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);		// 법인

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
        						strArg, 	    // 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        // 삭제 버튼
        this.fnDel = function() {
        	var nRow = this.dsList.rowposition;
        	if (this.gfnIsNull(this.dsList.getColumn(nRow, "CD_SLIP_PAYBACK"))) {
        		this.gfnGridDel(this.dxGrid);
        	}
        	//this.gfnAlert("전표발행된 데이터는 삭제할수 없습니다.");
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	this.gfnConfirm("삭제 하시겠습니까?", "fnDelete_callback");
        }

        // 삭제 처리
        this.fnDelete_callback = function(strId, val)
        {
        	if(val == false) return;

        	this.dxGrid.updateToDataset();

        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));

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

        // 예산조회
        this.selectBudget = function (){
        	this.dsSelectBudget.clearData();
        	var nRow = this.dsSelectBudget.addRow();

        	var sYrAcnt = this.dsSearch.getColumn(0, "DT_DATE_FR");
        	var cdAccount = this.dsList.getColumn(this.dsList.rowposition, "CD_ACCOUNT");
        	var nStart = cdAccount.length -4;
        	var cdBimok = cdAccount.substr( nStart, 4);

        	this.dsSelectBudget.setColumn(nRow, "YM_ACCOUNT", sYrAcnt.substring(0, 6));
        	this.dsSelectBudget.setColumn(nRow, "DEPTOFFICER", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"));
        	this.dsSelectBudget.setColumn(nRow, "BIMOK", cdBimok);
        	this.dsSelectBudget.setColumn(nRow, "SEMOK", this.dsList.getColumn(this.dsList.rowposition, "CD_SEMOK"));

        	var strSvcId    = "selectBudget";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectBudget=dsSelectBudget";
        	var outData     = "dsListBudget=selectBudget0";
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

        /*
         *	초기화 버튼
         */
        this.fnReset = function() {

        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCD_CORP.form.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclDT_FR.value)) {
        		this.gfnAlert("거래일자(FROM)을 입력 하세요.");
        		this.ctclDT_FR.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclDT_TO.value)) {
        		this.gfnAlert("거래일자(TO)을 입력 하세요.");
        		this.ctclDT_TO.setFocus();
        		return false;
        	}

        	if ( !this.gfnIsNull(this.ctclDT_FR.value) && !this.gfnIsNull(this.ctclDT_TO.value) ) {
        		if ( this.ctclDT_FR.value > this.ctclDT_TO.value ) {
        			this.gfnAlert("거래일자가 잘못 입력 되었습니다.");
        			this.ctclDT_FR.setFocus();
        			return false;
        		}
        	}

         	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
         		if (this.gfnIsNull(this.ccfCD_DEPTOPER.form.CDTextBox.value)) {
         			this.gfnAlert("귀속부서를 입력 하세요.");
         			this.ccfCD_DEPTOPER.form.CDTextBox.setFocus();
         			return false;
         		}
         	}

        	return true;
        };

        // this.fnAfterCDTextChanged = function(id, codeFindData) {
        // 	if(id == "ccfCD_CORP") {
        // 		this.ccfCD_DEPTOPER.form.fnCodeFindClear();
        // 		this.ccfCD_NOCARD.form.fnCodeFindClear();
        // 	}
        // 	this.fnSearchInit();
        // }

        this.fnDataValidate = function(){
        	var msg = "은(는) 필수입력 입니다.";

        	for (var i=0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "nx_flag") == "I" || this.dsList.getColumn(i, "nx_flag") == "U") {

        			var CD_PROOF = this.dsList.getColumn(i, "CD_PROOF");
        			var TY_VATBGJE = this.dsList.getColumn(i, "TY_VATBGJE");
        			var YN_BUDGET = this.dsList.getColumn(i, "YN_BUDGET");
        			var CD_SEMOK = this.dsList.getColumn(i, "CD_SEMOK");
        			var YN_BUDGET_CTRL_ACNT = this.dsList.getColumn(i, "YN_BUDGET_CTRL_ACNT");
        			var YN_VAT = this.dsList.getColumn(i, "YN_VAT");

        			if(CD_PROOF == '19' && this.gfnIsNull(TY_VATBGJE)){
        				this.gfnAlert("증빙구분이 불공제일 경우 불공제사유는 필수입니다.");
        				this.dsList.set_rowposition(i);
        				return false;
        			}

        			if(YN_BUDGET == 'Y' && YN_BUDGET_CTRL_ACNT == 'Y' && this.gfnIsNull(CD_SEMOK)){
        				this.gfnAlert("예산부서일 경우 세목코드는 필수입니다.");
        				this.dsList.set_rowposition(i);
        				return false;
        			}

        			if(YN_VAT == 'Y' && this.gfnIsNull(CD_PROOF)){
        				this.gfnAlert("부가세신고 대상인 경우 증빙구분은 필수입니다.");
        				this.dsList.set_rowposition(i);
        				return false;
        			}
        		}
        	}
        	return true;
        }

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
        	}else if(svcID == "save"){
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
        	}else if(svcID == "selectBudget"){
        		if (errorCode == 0) {
        			if(this.dsListBudget.rowcount > 0){
        				var AM_MM_AVAIL = nexacro.toNumber(this.dsListBudget.getColumn(0, "AM_AVAIL"),0);
        				this.dsList.setColumn(this.dsList.rowposition, "AM_MM_AVAIL", AM_MM_AVAIL);
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_DEPTOPER.form.fnCodeFindClear();
        			this.ccfCD_NOCARD.form.fnCodeFindClear();
        		break;
        		case "ccfCD_DEPTOPER":	//귀속부서
        			this.ccfCD_NOCARD.form.fnCodeFindClear();
        		break;
        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;

        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	if (id == "ccfCD_DEPTOPER") {
        		if (!this.gfnIsNull(cdCorp)) {
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
         			dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
         			dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
         			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		}else{
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
        	}

        	if (id == "ccfCD_NOCARD") {
        		if (!this.gfnIsNull(this.ccfCD_DEPTOPER.form.CDTextBox.value) && !this.gfnIsNull(cdCorp) ) {
        			dsUserParam.setColumn(nrow, "CD_CORP"  , cdCorp);
        			dsUserParam.setColumn(nrow, "CD_DEPT"  , this.ccfCD_DEPTOPER.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "CD_SUABUN", "");
        		}else{
        			if(this.gfnIsNull(cdCorp)){
        				this.gfnAlert("법인코드는 필수입력 값입니다.");
        				return false;
        			}
        			if(this.gfnIsNull(this.ccfCD_DEPTOPER.form.CDTextBox.value)){
        				this.gfnAlert("귀속부서는 필수입력 값입니다.");
        				return false;
        			}
        		}
        	}

        	return true;
        };

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DHX_CFACCOUNT") {	//계정
        		dsUserParam.setColumn(nrow, "YN_SLIP", "Y");
         	}
         	if (id == "DHX_CFACNTUNIT") {	//귀속부서
        		var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");			//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");			//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);		//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");			//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");			//현장/본사여부
         		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
         		dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
         		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        	}

         	if (id == "DHX_CFSEMOK_BY_MULTI") {	// 세목
        		var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        		var sYrAcnt = this.dsSearch.getColumn(0, "DT_DATE_FR");
        		var cdProject = "DD0001";
        		var cdDeptOfficer = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        		var cdAccount = this.dsList.getColumn(this.dsList.rowposition, "CD_ACCOUNT");

        		if (this.gfnIsNull(sYrAcnt)) {
        			this.gfnAlert("거래시작일자를 먼저 입력하세요.");
        			return false;
        		}

        		if (this.gfnIsNull(cdDeptOfficer)) {
        			this.gfnAlert("부서코드를 먼저 입력하세요.");
        			return false;
        		}

        		if (this.gfnIsNull(cdAccount)) {
        			this.gfnAlert("계정코드를 먼저 입력하세요.");
        			return false;
        		}

        		var nStart = cdAccount.length -4;
        		var cdBimok = cdAccount.substr( nStart, 4);

        		dsUserParam.setColumn(nrow, "YR_ACCOUNT", sYrAcnt.substring(0, 4));
        		dsUserParam.setColumn(nrow, "CD_DEPTOFFICER", cdDeptOfficer);
        		dsUserParam.setColumn(nrow, "CD_PROJECT", cdProject);
        		dsUserParam.setColumn(nrow, "CD_BIMOK", cdBimok);
         	}
         	if (id == "DWXPR_COST_TREE_01") {	// 공종코드
        		var cdDept = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        		if (this.gfnIsNull(cdDept)) {
        			this.gfnAlert("부서코드를 먼저 입력하세요.");
        			return false;
        		}
        		//var cdDept = this.dsSearch.getColumn(0, "CD_DEPTOPER");
        		dsUserParam.setColumn(nrow, "CD_SITE" , cdDept);
         	}

         	if (id == "DHX_CAR") {	// 차량코드
        		var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        		if (this.gfnIsNull(cdCorp)) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
         	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	var rowPos = this.dsList.rowposition;
        	switch(id) {
        		case "DHX_CFACNTUNIT":
        		case "DHX_CFACCOUNT":
        			if (arrData.length > 0) {
        				if(id == "DHX_CFACNTUNIT"){
        					var YN_ANBUN = arrData[0]["YN_ANBUN"];
        					var YN_VAT = this.dsList.getColumn(rowPos, "YN_VAT");
        					if(YN_VAT == "Y"){
        						// 16 신용카드(공통) 17 신용카드(과세)
        						var CD_PROOF = (YN_ANBUN == "Y")? "16" : "17";
        						this.dsList.setColumn(rowPos, "CD_PROOF", CD_PROOF);
        					}
        				}
        			}
        			this.dsList.setColumn(rowPos, "CD_SEMOK", "");		// 세목코드 초기화
        			this.dsList.setColumn(rowPos, "DS_SEMOK", "");		// 세목코드 초기화
        			this.dsList.setColumn(rowPos, "AM_MM_AVAIL", "");	// 추가예산 초기화
        		break;

        		case "DHX_CFSEMOK_BY_MULTI":
        			if (arrData.length > 0) {
        				// 예산조회
        				this.selectBudget();
        			}
        		break;
         	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // this.fnSearchInit = function(obj,e) {
        // 	if(e == null || (e.pretext != e.posttext)) {
        // 		this.gfnSetFormStatus(this);
        // 		this.gfnGridClear(this.dxGrid);
        // 	}
        // }

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	if(this.dsList.findRow("CHK", "1") == -1){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	if(this.dsList.findRowExpr("CHK == 1 && !dataset.parent.gfnIsNull(CD_SLIP_PAYBACK) && nx_flag != '#'") > -1){
        		this.gfnAlert("전표발행된 데이터가 선택 되었습니다.");
        		return;
        	}
        /*
        	var nChkRow = this.dsList.findRowExpr("CHK == 1 && TY_CONFIRM =='미확인' && nx_flag != '#'");
        	if(nChkRow > -1){
        		this.gfnAlert(nChkRow + "행 계정코드, 적요를 입력한 후 전표발행하세요");
        		return;
        	}

        	var chkNoCard = false, chkDtApproval = false, chkDsRem = false;
        	var chkCdProof = false, chkTyVatBgje = false;
        	var chkSave = false;
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			if(this.gfnGetFlag(this.dsList, i) == "U"){
        				chkSave = true;
        			}
        			if(this.gfnIsNull(this.dsList.getColumn(i, "DS_REM"))){
        				chkDsRem = true;
        			}

        			//증빙구분 체크
        			if(this.gfnIsNull(this.dsList.getColumn(i, "CD_PROOF"))){
        				chkCdProof = true;
        			}

        			if(this.dsList.getColumn(i, "CD_PROOF") == "19"){	//불공제일 경우
        				if(this.gfnIsNull(this.dsList.getColumn(i, "TY_VATBGJE"))){	//불공제사유 체크
        					chkTyVatBgje = true;
        				}
        			}

        			for(var c=0;c<this.dsList.rowcount;c++){

        			// 본사_전도금 카드는 카드번호가 달라도 발행

        				if(this.dsList.getColumn(c, "CHK") == "1"){
        					var nextNoCard = nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(c, "NO_CARD"),""),"-","");
        					//var nextRmBigo = this.gfnNvl(this.gfnTrim(this.dsList.getColumn(c, "RM_BIGO"),""));	// 카드비고
        					var nextTyKind = this.gfnNvl(this.gfnTrim(this.dsList.getColumn(c, "TY_KIND"),""));	// 카드비고
        					if(nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "NO_CARD"),""),"-","") != nextNoCard){
        						if(nextTyKind != "체크"){
        							chkNoCard = true;
        						}
        					}
        					var nextDtApproval = this.dsList.getColumn(c, "DT_APPROVAL").substr(0,6);
        					if(this.dsList.getColumn(i, "DT_APPROVAL").substr(0,6) != nextDtApproval){
        						chkDtApproval = true;
        					}
        				}
        			}
        		}
        	}

        	if(chkSave){	//데이터 수정 체크
        		this.gfnAlert("저장하지 않은 데이터가 존재합니다.저장 후 발행해 주세요.");
        		return;
        	}

        // 	if(chkNoCard){	//카드번호 체크
        // 		this.gfnAlert("카드번호가 같은 데이터만 선택 가능합니다.");
        // 		return;
        // 	}

        	if(chkDtApproval){	//승인일자 체크
        		this.gfnAlert("승인일자는 같은 월 데이터만 선택 가능합니다.");
        		return;
        	}

        	if(chkDsRem){	//적요 체크
        		this.gfnAlert("적요는 필수 입니다.데이터 저장 후 발행해 주세요.");
        		return;
        	}

        // 	if(chkCdProof){	//증빙구분 체크
        // 		this.gfnAlert("증빙구분은 필수 입니다.데이터 저장 후 발행해 주세요.");
        // 		return;
        // 	}

        	if(chkTyVatBgje){	//불공제사유 체크
        		this.gfnAlert("증빙구분이 불공제일 경우 불공제사유는 필수 입니다.\n데이터 저장 후 발행해 주세요.");
        		return;
        	}
        */
        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");

        };

        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();

        		var arrSeqNo = "";
        		for(var r = 0; r < this.dsList.rowcount; r++) {
        			if(this.dsList.getColumn(r, "CHK") == 1 && this.dsList.getColumn(r, this.ucFlag) != "#"){
        				arrSeqNo += this.dsList.getColumn(r, "NO_SEQ")+",";
        			}
        		}

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"	  , this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "NO_SEQ" 	  , arrSeqNo.substr(0,arrSeqNo.length-1));
        		this.dsIssueSlip.setColumn(nRow, "ID_INSERT"   , this.AuthClient.ID_USER);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_BH" , this.AuthClient.CD_DEPT);

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

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	if(this.dsList.findRowExpr("CHK == 1 && dataset.parent.gfnIsNull(CD_SLIP_PAYBACK) && nx_flag != '#'") > -1){
        		this.gfnAlert("전표번호가 없는 데이터가 선택 되었습니다.");
        		return;
        	}

        // 	if (this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP")))) {
        // 		this.gfnAlert("전표번호는 필수입니다.");
        // 		return;
        // 	}

        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");

        };

        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {

        		this.dsCancelSlip.clearData();

        // 		var nRow = this.dsCancelSlip.addRow();
        // 		var cdSlip = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP");
        //
        // 		//처리할 데이터 담기
        // 		this.dsCancelSlip.setColumn(nRow, "CD_SLIP"  , cdSlip);


        		for(var r = 0; r < this.dsList.rowcount; r++) {
        			if(this.dsList.getColumn(r, this.ucFlag) != "#" && this.dsList.getColumn(r, "CHK") == 1){
        				var cdSlip = nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(r, "CD_SLIP_PAYBACK"),"")));
        				if(!this.gfnIsNull(cdSlip)){
        					var nRow = this.dsCancelSlip.addRow();
        					this.dsCancelSlip.setColumn(nRow, "CD_TRADE"  , cdSlip);
        				}
        			}
        		}

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
        	if (this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP_PAYBACK")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP_PAYBACK"));
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        //그리드 데이터셋 변경 이벤트
        this.dsList_Columnchanged = function(obj,e)
        {
        	if(e.columnid == "YN_VAT"){	//부가세여부
        		obj.setColumn(e.row, "CD_PROOF", "");	//증빙구분 초기화
        		obj.setColumn(e.row, "TY_VATBGJE", "");	//불공제증빙 초기화
        	}
        	if(e.columnid == "CD_PROOF"){	//증빙구분
        		obj.setColumn(e.row, "TY_VATBGJE", "");	//불공제증빙 초기화
        	}
        	if(e.columnid == "CD_DEPT" || e.columnid == "CD_ACCOUNT"){
        		if(this.gfnIsNull(e.newvalue)){
        			obj.setColumn(e.row, "DS_SEMOK", "");	// 세목코드 초기화
        			obj.setColumn(e.row, "CD_SEMOK", "");	// 세목코드 초기화
        			obj.setColumn(e.row, "AM_MM_AVAIL", "");
        		}
        	}
        	if(e.columnid == "CD_SEMOK"){
        		if(this.gfnIsNull(e.newvalue)){
        			obj.setColumn(e.row, "AM_MM_AVAIL", "");
        		}
        	}
        };

        // 전표미발행 500건 선택
        this.fnCheckSelect = function (obj,e)
        {
        	var cnt = 0;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(cnt >= 500) break;

        		if(this.gfnIsNull(this.dsList.getColumn(i, "CD_SLIP_PAYBACK")) && this.dsList.getColumn(i, this.ucFlag) != "#"){
        			this.dsList.setColumn(i, "CHK", 1);
        			cnt++
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_FR.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_TO.addEventHandler("onchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DHA_BUBINCARDSAAPP_MATCH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
