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
            this.set_titletext("최종평가등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_EVAL_FINAL_SELECT</Col></Row><Row><Col id=\"TARGET\">saveAdjust</Col><Col id=\"SP\">DAJPR_EVAL_ADJUST</Col></Row><Row><Col id=\"TARGET\">saveFinal</Col><Col id=\"SP\">DAJPR_EVAL_FINAL_CLOSE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAXPR_EVAL_TERMS_CODEFIND</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TERM_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"STEP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTERM_EVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TERM_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_STRUCTFINI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSTEP", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">0</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1차마감</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">2차마감</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">최종마감</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTERM_EVAL","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가기수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTERM_EVAL","staTERM_EVAL:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_datacolumn("TERM_EVAL");
            obj.set_codecolumn("TERM_EVAL");
            obj.set_innerdataset("dsTERM_EVAL");
            obj.set_text("");
            obj.set_value("%");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","cboTERM_EVAL:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_POSITION","staCD_POSITION:0.0","10.0","235","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DUTY","0.0","staTERM_EVAL:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("직무");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DUTY","staCD_DUTY:0.0","staTERM_EVAL:10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_DUTY:0.0","staTERM_EVAL:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staTERM_EVAL:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSTEP","ccfID_SABUN:0.0","staTERM_EVAL:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("진행상태");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSTEP","staSTEP:0.0","staTERM_EVAL:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsSTEP");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
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
            obj = new BindItem("item0","divSearch.form.cboTERM_EVAL","value","dsSearch","TERM_EVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_POSITION.form.CDTextBox","value","dsSearch","CD_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DUTY.form.CDTextBox","value","dsSearch","CD_DUTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSTEP","value","dsSearch","STEP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_POSITION.form.DSTextBox","value","dsSearch","DS_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_DUTY.form.DSTextBox","value","dsSearch","DS_DUTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAJ_EVALUATION_FINAL.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.gYN_STRUCTFINI = "";	// DAJT_EVALUATE_TERMS 평가기수 테이블 구조확정여부
        this.gTERM_EVAL = "";

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
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnItem1 = this.gfnFormButtonAdd("btnAdjust", "fnExtendButton");		// 조정 fnAdjust
        	this.btnItem2 = this.gfnFormButtonAdd("btnEvlCloseY", "fnExtendButton");	// 마감 fnEvlCloseY
        	this.btnItem3 = this.gfnFormButtonAdd("btnEvlCloseN", "fnExtendButton");	// 마감취소 fnEvlCloseN
        	//this.btnItem4 = this.gfnFormButtonAdd("btnSendSms", "fnExtendButton");		// SMS알림
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.cboTERM_EVAL = this.divSearch.form.cboTERM_EVAL;
        	this.ccfCD_DEPT =	this.divSearch.form.ccfCD_DEPT;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.ccfCD_POSITION = this.divSearch.form.ccfCD_POSITION;
        	this.ccfCD_DUTY =	this.divSearch.form.ccfCD_DUTY;
        	this.cboSTEP =	this.divSearch.form.cboSTEP;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_EVALUATION_FINAL");

        	//그리드 이벤트
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_CellDblclick, this);
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	// 부서
        	//this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT";
        	this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT_MST1";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 성명
        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 직위/직급(ED)
        	this.ccfCD_POSITION.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_POSITION.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 직무(EF)
        	this.ccfCD_DUTY.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_DUTY.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 진행상태
        	this.cboSTEP.set_index(0);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TERM_EVAL", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("DEPT", "string");
        	this.dsSelect.addColumn("POSITION", "string");
        	this.dsSelect.addColumn("DUTY", "string");
        	this.dsSelect.addColumn("STEP", "bigdecimal");
        	this.dsSelect.addColumn("SABUN", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TERM_EVAL", "string");
        	this.dsSave.addColumn("OPTION", "bigdecimal");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CLOSE", "string");
        	this.dsSave.addColumn("SABUN", "string");

        	this.dsSave.addColumn("STEP", "bigdecimal");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;
        	var ID_USER = this.AuthClient.ID_USER;

        	//ID_USER = "19041";	// for test

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TERM_EVAL", this.dsSearch.getColumn(0, "TERM_EVAL"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "POSITION", this.dsSearch.getColumn(0, "CD_POSITION"));
        	this.dsSelect.setColumn(0, "DUTY", this.dsSearch.getColumn(0, "CD_DUTY"));
        	this.dsSelect.setColumn(0, "STEP", this.dsSearch.getColumn(0, "STEP"));
        	this.dsSelect.setColumn(0, "SABUN", ID_USER);

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid);
        	//this.dsList.setColumn(nrow, "TERM_EVAL", TERM_EVAL);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 마감/마감취소 버튼
         */
        this.fnEvlClose = function(sCloseYn) {

        	if(!this.fnValidate()) return;

        	var TERM_EVAL = this.dsSearch.getColumn(0, "TERM_EVAL");
        	var ID_USER = this.AuthClient.ID_USER;

        	//ID_USER = "19041";	// for test

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();
        	this.dsSave.setColumn(nrow, "TERM_EVAL", TERM_EVAL);
        	this.dsSave.setColumn(nrow, "OPTION", 0);			// 0:전체마감, 1:개인별 마감
        	this.dsSave.setColumn(nrow, "ID_SABUN", "");		// p_OPTION이 0인 경우 무시
        	this.dsSave.setColumn(nrow, "CLOSE", sCloseYn);
        	this.dsSave.setColumn(nrow, "SABUN", ID_USER);

        	var strSvcId    = "saveFinal";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveFinal=dsSave";
        	var outData     = "dsOutput=save";
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

        /*
         *	저장 조정 버튼
         */
        this.fnAdjust = function() {

        	if(!this.fnValidate()) return;

        	var TERM_EVAL = this.dsSearch.getColumn(0, "TERM_EVAL");
        	var ID_USER =  this.AuthClient.ID_USER;

        		//ID_USER = "19041";	// for test


        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "TERM_EVAL", TERM_EVAL);
        	this.dsSave.setColumn(nrow, "STEP", 0);			// 0:1차 2차 및 최종서열까지 동시수행,  1:1차만수행  2:2차 조정과 최종등급및 서열평가
        	this.dsSave.setColumn(nrow, "SABUN", ID_USER);

        	var strSvcId    = "saveAdjust";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveAdjust=dsSave";
        	var outData     = "dsOutput=save";
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
         *	초기화 버튼
         */
        this.fnReset  = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	// 진행상태
        	this.cboSTEP.set_index(0);
        	this.cboTERM_EVAL.set_index(0);

        	// 평가기수 구조확정여부
        	//var nrow = this.dsTERM_EVAL.rowposition;
        	var nrow = this.cboTERM_EVAL.index;
        	this.gTERM_EVAL	= this.dsTERM_EVAL.getColumn(nrow, "TERM_EVAL");
        	this.gYN_STRUCTFINI = this.dsTERM_EVAL.getColumn(nrow, "YN_STRUCTFINI");

        	this.FormBtns.Select.click();
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "TERM_EVAL"))) {
        		this.cboTERM_EVAL.setFocus();
        		this.gfnAlert("평가기수를 입력하세요.");
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
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	//trace("fnCallback >>>>svcID :["+svcID+"] errorCode :["+errorCode+"] errorMsg :["+errorMsg+"]" );
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "saveFinal") {
        		if (errorCode == 0) {
        			this.gfnAlert("정상적으로 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "saveAdjust") {
        		if (errorCode == 0) {
        			this.gfnAlert("정상적으로 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if( svcID == "combo"){
        		if (!this.gfnIsNull(this.gTERM_EVAL)){
        			 this.cboTERM_EVAL.set_value( this.gTERM_EVAL);
        		}else{
        			this.cboTERM_EVAL.set_index(0);
        		}

        		// 평가기수 구조확정여부
        		//var nrow = this.dsTERM_EVAL.rowposition;
        		var nrow = this.cboTERM_EVAL.index;
        		this.gTERM_EVAL	= this.dsTERM_EVAL.getColumn(nrow, "TERM_EVAL");
        		this.gYN_STRUCTFINI = this.dsTERM_EVAL.getColumn(nrow, "YN_STRUCTFINI");

        		// 자동조회
        		if (this.dsTERM_EVAL.rowcount > 0) this.FormBtns.Select.click();
        	}
        	this.fnSetButton();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//trace("코드파인드_식별id:" + id);
        	switch(id) {
        		/*
        		case "ccfCD_DEPT":	// 부서
        			dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        			dsUserParam.setColumn(nrow, "CD_DEPT", "");
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        			break;
        		*/
        		case "ccfID_SABUN"://성명
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;

        		case "ccfCD_POSITION":	// 직위
        			dsUserParam.setColumn(nrow, "CD_PREFIX", 'ED');
        			break;

        		case "ccfCD_DUTY":	// 직무
        			dsUserParam.setColumn(nrow, "CD_PREFIX", 'EF');
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
        		case "DAX_CFBASEINFO":     // DAX_CFBASEINFO
        		case "DAX_CFBASEINFO_1ST":     // 사번 	ID_SABUN
        		case "DAX_CFBASEINFO_2ND":     // 사번 	ID_SABUN
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        		break;

        		case "EL":	// 평가구분
        			dsUserParam.setColumn(nrow, "CD_PREFIX", 'EL');
        		default:
        	}

        	return true;
        };

         this.fnGrid_CellDblclick = function(obj,e){
        	var colName = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colName == ""){
        	}

        	if(colName != "CHK"){
        		// 평가등록 팝업
        		this.fnFormOpenEvalResultDetail("S");
        	}
        };

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
         this.fnExtendButton = function(obj, e){
        	//trace("확장버튼 아이디->" + obj.id + " / 버튼명 ->" + obj.text + " / e ->" + e);
        	var TERM_EVAL = this.dsSearch.getColumn(0, "TERM_EVAL");
        	switch(obj.id){
        		case "btnExt_btnAdjust":	// 조정 (fnAdjust)
        			this.gfnConfirm("해당 \"" + TERM_EVAL + "\" 조정 처리 하시겠습니까?", "fnAdjust_Callback");
        			break;
        		case "btnExt_btnEvlCloseY":	// 마감 (fnEvlCloseY)
        			this.gfnConfirm("해당 \"" + TERM_EVAL + "\" 마감 하시겠습니까?", "fnEvlCloseY_Callback");
        			break;
        		case "btnExt_btnEvlCloseN":	// 마감취소 (fnEvlCloseN)
        			this.gfnConfirm("해당 \"" + TERM_EVAL + "\" 마감취소 하시겠습니까?", "fnEvlCloseN_Callback");
        			break;
        		case "btnExt_btnSendSms":	// SMS알림

        			if (this.dsList.rowcount == 0) return;

        			var fndRow = this.dsList.findRow("CHK", 1);
        			if (this.dsList.rowcount == 0 || fndRow <= -1) {
        				this.gfnAlert("대상자를 체크해주세요.");
        				return;
        			}

        			var sId1stSabuns = "";
        			var sId2ndSabuns = "";
        			var sIdSabuns = "";
        			for(var i = 0; i < this.dsList.rowcount; i++){
        				if(this.dsList.getColumn(i, "CHK") != 1 ) continue;

        				var sComma = (this.gfnIsNull(sIdSabuns)) ? "" : ",";
        				sId1stSabuns = sId1stSabuns + sComma + this.dsList.getColumn(i, "ID_1STSABUN");
        				sId2ndSabuns = sId2ndSabuns + sComma + this.dsList.getColumn(i, "ID_2NDSABUN");
        				sIdSabuns = sIdSabuns + sComma + this.dsList.getColumn(i, "ID_SABUN");
        			}

        			var param = {};
        			param.P_ID_SABUN = sIdSabuns;
        			param.P_ID_1STSABUN = sId1stSabuns;
        			param.P_ID_2NDSABUN = sId2ndSabuns;
        			param.P_TERM_EVAL = this.dsSearch.getColumn(0, "TERM_EVAL");

        			// 화면 오픈.
        			// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        			// 타 모듈 화면 호출시 지정할것.
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAJ_EVALUATION_SMS_DLG", "fnEvlSms_Callback", param, 500, 400);

        			break;

        		default:
        	}
         };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	var strEventid = e.eventid;
        	var objComp = e.fromobject;
        	var nPostIdx = e.postindex; // 새로 변경된 아이템의 인덱스값
        	//trace("obj->" + obj + " / eventid->" + strEventid  + " / fromobject->" + objComp  + " / nPostIdx->" + nPostIdx );

        	// 평가기수 구조확정여부
        	var nrow = this.dsTERM_EVAL.rowposition;
        	this.gYN_STRUCTFINI = this.dsTERM_EVAL.getColumn(nPostIdx, "YN_STRUCTFINI");
        	this.gTERM_EVAL	= this.dsTERM_EVAL.getColumn(nPostIdx, "TERM_EVAL");

        	//trace("조회 조건 변경시:" + nrow + " / TERM_EVAL:" + this.gTERM_EVAL + " / YN_STRUCTFINI:" + this.gYN_STRUCTFINI);

        	if(e.pretext != e.posttext) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        	}
        };

        //평가기수 콤보 조회
        this.fnSetCombo = function() {
        	var today = this.gfnGetDate().substring(0,8);

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
        	this.dsCombo.addColumn("YEAR_EVAL", "string");
        	this.dsCombo.addColumn("DT_EVAL", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "TY_SEL", "P");	// A: 전체 P: 필수
        	this.dsCombo.setColumn(0, "YEAR_EVAL", "");
        	//this.dsCombo.setColumn(0, "DT_EVAL", today);

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTERM_EVAL=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        // 조정 Callback
        this.fnAdjust_Callback = function(strId, val) {
        	if(val == false) return;
        	this.fnAdjust();
        }

        // 마감 Callback
        this.fnEvlCloseY_Callback = function(strId, val) {
        	if(val == false) return;
        	this.fnEvlClose("Y");
        }

        // 마감취소 Callback
        this.fnEvlCloseN_Callback = function(strId, val) {
        	if(val == false) return;
        	this.fnEvlClose("N");
        }


        // SMS알림 Callback
        this.fnEvlSms_Callback = function(strId, val) {
        	trace("fnEvlSms_Callback");
        	if(val == false) return;
        }

        this.fnFormOpenEvalResultDetail = function(sTySave) {
        	if(this.dsList.rowposition < 0) return;

        	var TERM_EVAL = this.dsList.getColumn(this.dsList.rowposition, "TERM_EVAL");
        	var param = {};

        	param.P_TY_SAVE  = sTySave;	// (I:등록 / U:수정 / S:조회)
        	if(this.dsList.rowposition > -1){
        		this.dsParam.assign( this.dsList);
        		this.dsParam.clearData();
        		this.dsParam.addRow();
        		this.dsParam.copyRow(0, this.dsList, this.dsList.rowposition);
        		param.P_DS_PARAM = this.dsParam.saveCSV();
        	}

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAJ_EVALUATION_RESULT_DLG", "fnEvalResultDetail_callback", param, 950, 850);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTERM_EVAL.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboSTEP.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_EVALUATION_FINAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
