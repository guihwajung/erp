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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_TUITION_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_TUITION_SAVE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DABPR_TUITION_TARGET_INSERT</Col></Row><Row><Col id=\"TARGET\">permit</Col><Col id=\"SP\">DABPR_TUITION_APP_UPDATE</Col></Row><Row><Col id=\"TARGET\">aprv_execute</Col><Col id=\"SP\">DABPR_TUITION_APRV_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_TUITION\">01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_TUITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">1분기</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">2분기</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">3분기</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">4분기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_REQUEST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">일괄신청</Col></Row><Row><Col id=\"CD_CODE\">M</Col><Col id=\"DS_CODE\">직접신청</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_TUITION","ccfCD_CORP:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_TUITION","staYY_TUITION:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TUITION","ctclYY_TUITION:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("분기");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_TUITION","staCD_TUITION:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsCD_TUITION");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_value("01");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_REQUEST","cboCD_TUITION:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_REQUEST","staTY_REQUEST:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsTY_REQUEST");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","cboTY_REQUEST:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfID_SABUN:5","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_enable("false");
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

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYY_TUITION.form.TextBox","value","dsSearch","YY_TUITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboCD_TUITION","value","dsSearch","CD_TUITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboTY_REQUEST","value","dsSearch","TY_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_TUITION.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e) {
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
        	this.fnInit();
        }

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
        	this.btnPeriod   = this.gfnFormButtonAdd("btnPeriod"  , "fnPeriod");		// 기한설정 버튼
        	this.btnCreate   = this.gfnFormButtonAdd("btnCreate"  , "fnCreate");		// 생성 버튼
        	this.btnPermit   = this.gfnFormButtonAdd("btnPermit"  , "fnPermit");		// 승인 버튼
        	this.btnReject   = this.gfnFormButtonAdd("btnReject"  , "fnReject");		// 반려 버튼
        	this.btnAprv     = this.gfnFormButtonAdd("btnAprv"    , "fnAprv");			// 결재상신 버튼
        	this.btnDocQ     = this.gfnFormButtonAdd("btnDocQ"    , "fnAprvDocQ");		// 결재문서조회 버튼
        	this.btnInit     = this.gfnFormButtonAdd("btnInit"    , "fnAprvInit");		// 결재상태초기화 버튼
        }

        this.fnUpdateStatusExtendButton = function() {
        	var nrow = this.dsList.rowposition;

         	this.btnReject.set_enable(this.dsList.getColumn(nrow, "CHK") == "1" && this.dsList.getColumn(nrow, "TY_REQUEST") == "M");
         	this.btnPermit.set_enable(this.dsList.getColumn(nrow, "CHK") == "1" && this.dsList.getColumn(nrow, "TY_REQUEST") == "M");

         	this.btnAprv.set_enable(this.dsList.getColumn(nrow, "BTN_APRV") == "Y");
         	this.btnDocQ.set_enable(this.dsList.getColumn(nrow, "BTN_DOC_Q") == "Y");
         	this.btnInit.set_enable(this.dsList.getColumn(nrow, "BTN_INIT") == "Y");
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid = this.divData.form.objGrid;

        	// 검색영역
        	this.ccfCD_CORP     = this.divSearch.form.ccfCD_CORP;		// 법인코드
        	this.ctclYY_TUITION = this.divSearch.form.ctclYY_TUITION;	// 년도
        	this.cboCD_TUITION  = this.divSearch.form.cboCD_TUITION;	// 구분
        	this.ccfID_SABUN    = this.divSearch.form.ccfID_SABUN;		// 성명
        	this.edtID_PERSON   = this.divSearch.form.edtID_PERSON;		// ID_PERSON(숨김)
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_TUITION");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        	this.dxGrid.AfterEdit              = "fnGridAfterEdit";
        	this.dxGrid.AfterAllCheck          = "fnGridAfterAllCheck";
        	this.dxGrid.ExpandUp               = "fnGridExpandUp";

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 성명
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YY_TUITION", "string");
        	this.dsSelect.addColumn("CD_TUITION", "string");
        	this.dsSelect.addColumn("TY_REQUEST", "string");
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");

        	// 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("YY_TUITION", "string");
        	this.dsSave.addColumn("CD_TUITION", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("DT_REQUEST", "string");
        	this.dsSave.addColumn("TY_REQUEST", "string");
        	this.dsSave.addColumn("ID_RESIDENT", "string");
        	this.dsSave.addColumn("CD_FAMILY", "string");
        	this.dsSave.addColumn("DT_BIRTH", "string");
        	this.dsSave.addColumn("DS_FAM_HNAME", "string");
        	this.dsSave.addColumn("CD_SCHOLARSHIP", "string");
        	this.dsSave.addColumn("DS_SCHOOL", "string");
        	this.dsSave.addColumn("DS_SCHOOL_GRADE", "string");
        	this.dsSave.addColumn("DS_SCHOOL_SEMESTER", "string");
        	this.dsSave.addColumn("DS_MAJOR", "string");
        	this.dsSave.addColumn("AM_TUITION", "bigdecimal");
        	this.dsSave.addColumn("AM_PAYMENT", "bigdecimal");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("GR_CORP", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	// 일괄생성
        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("YY_TUITION", "string");
        	this.dsCreate.addColumn("CD_TUITION", "string");
        	this.dsCreate.addColumn("ID_USER", "string");

        	// 승인/반려
        	this.dsPermit = new Dataset();
        	this.dsPermit.addColumn("TY_WORK", "string");
        	//this.dsPermit.addColumn("ID_PERSON", "int");
        	this.dsPermit.addColumn("ID_SABUN", "string");
        	this.dsPermit.addColumn("YY_TUITION", "string");
        	this.dsPermit.addColumn("CD_TUITION", "string");
        	this.dsPermit.addColumn("CD_CORP", "string");
        	this.dsPermit.addColumn("NO_SEQ", "int");
        	this.dsPermit.addColumn("DS_RETURN", "string");
        	this.dsPermit.addColumn("ID_USER", "string");

        	// 결재
        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("TY_WRK", "string");
        	this.dsApproval.addColumn("CD_CORP", "string");
        	this.dsApproval.addColumn("YY_TUITION", "string");
        	this.dsApproval.addColumn("CD_TUITION", "string");
        	this.dsApproval.addColumn("ID_APRV", "string");
        	this.dsApproval.addColumn("NO_APRV", "int");
        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	var toDay = this.gfnGetDate().substr(0, 4);
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);		// 법인
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        	this.dsSearch.setColumn(0, "YY_TUITION", toDay);					// 년도
        	var nQuarter = this.fnGetQuarter(this.gfnGetDate());				// 분기
        	this.dsSearch.setColumn(0, "CD_TUITION", nQuarter);
        	this.dsSearch.setColumn(0, "TY_REQUEST", "%");						// 유형

        	// 권한 설정
        	if (this.FormInfo.GR_SEARCH == "1") {
        		this.ccfCD_CORP.set_enable(true);
        		this.ccfID_SABUN.set_enable(true);
        	} else {
        		this.dsSearch.setColumn(0, "ID_SABUN", this.AuthClient.ID_USER);	// 성명
        		this.dsSearch.setColumn(0, "DS_HNAME", this.AuthClient.DS_HNAME);
        		this.ccfCD_CORP.set_enable(false);
        		this.ccfID_SABUN.set_enable(false);
        	}

        	// 확장버튼 상태 변경
        	this.fnUpdateStatusExtendButton();
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YY_TUITION", this.dsSearch.getColumn(0, "YY_TUITION"));
        	this.dsSelect.setColumn(0, "CD_TUITION", this.dsSearch.getColumn(0, "CD_TUITION"));
        	this.dsSelect.setColumn(0, "TY_REQUEST", this.dsSearch.getColumn(0, "TY_REQUEST"));
        	this.dsSelect.setColumn(0, "ID_PERSON" , this.dsSearch.getColumn(0, "ID_PERSON"));
        	this.dsSelect.setColumn(0, "ID_SABUN"  , this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "ID_USER"   , this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "GR_SEARCH" , this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP"   , this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "GR_DEPT"   , '');

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /*
         * 입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         * 저장 버튼
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
        			this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        			this.dsSave.setColumn(nrow, "YY_TUITION", this.dsList.getColumn(i, "YY_TUITION"));
        			this.dsSave.setColumn(nrow, "CD_TUITION", this.dsList.getColumn(i, "CD_TUITION"));
        			this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        			this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        			this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        			this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        			this.dsSave.setColumn(nrow, "DT_REQUEST", this.dsList.getColumn(i, "DT_REQUEST"));
        			this.dsSave.setColumn(nrow, "TY_REQUEST", this.dsList.getColumn(i, "TY_REQUEST"));
        			this.dsSave.setColumn(nrow, "ID_RESIDENT", this.dsList.getColumn(i, "ID_RESIDENT"));
        			this.dsSave.setColumn(nrow, "CD_FAMILY", this.dsList.getColumn(i, "CD_FAMILY"));
        			this.dsSave.setColumn(nrow, "DT_BIRTH", this.dsList.getColumn(i, "DT_BIRTH"));
        			this.dsSave.setColumn(nrow, "DS_FAM_HNAME", this.dsList.getColumn(i, "DS_FAM_HNAME"));
        			this.dsSave.setColumn(nrow, "CD_SCHOLARSHIP", this.dsList.getColumn(i, "CD_SCHOLARSHIP"));
        			this.dsSave.setColumn(nrow, "DS_SCHOOL", this.dsList.getColumn(i, "DS_SCHOOL"));
        			this.dsSave.setColumn(nrow, "DS_SCHOOL_GRADE", this.dsList.getColumn(i, "DS_SCHOOL_GRADE"));
        			this.dsSave.setColumn(nrow, "DS_SCHOOL_SEMESTER", this.dsList.getColumn(i, "DS_SCHOOL_SEMESTER"));
        			this.dsSave.setColumn(nrow, "DS_MAJOR", this.dsList.getColumn(i, "DS_MAJOR"));
        			this.dsSave.setColumn(nrow, "AM_TUITION", this.dsList.getColumn(i, "AM_TUITION"));
        			this.dsSave.setColumn(nrow, "AM_PAYMENT", this.dsList.getColumn(i, "AM_PAYMENT"));
        			this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        			this.dsSave.setColumn(nrow, "ID_USER"       , this.AuthClient.ID_USER);
        			this.dsSave.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        			this.dsSave.setColumn(nrow, "GR_CORP"       , this.AuthClient.CD_CORP);
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

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /*
         * 엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 기한설정 버튼
        this.fnPeriod = function(obj,e) {
        	this.gfnFormOpen("DAB", "DAB_TUITION_PERIOD");
        }

        // 일괄생성 버튼
        this.fnCreate = function(obj, e) {
        	var CD_CORP    = this.dsSearch.getColumn(0, "CD_CORP");
        	var DS_CORP    = this.dsSearch.getColumn(0, "DS_CORP");
        	var YY_TUITION = this.dsSearch.getColumn(0, "YY_TUITION");
        	var CD_TUITION = this.dsSearch.getColumn(0, "CD_TUITION").replace("0", "");

        	var msg = "${DS_CORP} [${CD_CORP}]의 ${YY_TUITION}년도 ${CD_TUITION}분기의\n";
        	msg += "학자금신청 정보를 생성하시겠습니까?\n\n";
        	msg += "기존의 학자금신청 정보는 삭제됩니다.";
        	msg = msg.replace("${DS_CORP}", DS_CORP);
        	msg = msg.replace("${CD_CORP}", CD_CORP);
        	msg = msg.replace("${YY_TUITION}", YY_TUITION);
        	msg = msg.replace("${CD_TUITION}", CD_TUITION);

         	this.gfnConfirm(msg, "fnCreateCallback");
        }

        // 승인 버튼
        this.fnPermit = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;
        	var nChkRow = this.dsList.findRow("CHK", 1);
        	if (nChkRow == -1) {
        		this.gfnAlert(obj.text + "할 행을 선택하세요.");
        		return false;
        	}

        	this.gfnConfirm("선택한 행을 " + obj.text + " 하시겠습니까?", function(strId, isOk) {
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK")== 1)
        			{
        				//trace(" fnPermit=>" + this.dsList.getColumn(i, "TY_REQUEST"));
        				if (this.dsList.getColumn(i, "TY_REQUEST") == "A") {
        				this.gfnAlert("일괄생성된 학자금신청은 승인할 수 없습니다.");
        				return false;
        				}
        			}
        		}
        		this.fnPermitCallback();
        	});
        }

        // 반려 버튼
        this.fnReject = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;
        	var nChkRow = this.dsList.findRow("CHK", 1);
        	if (nChkRow == -1) {
        		this.gfnAlert(obj.text + "할 행을 선택하세요.");
        		return false;
        	}

        	this.gfnConfirm("선택한 행을 " + obj.text + " 하시겠습니까?\n\n일괄생성된 학자금신청은 제외됩니다.", function(strId, isOk) {
        		var ID_SABUNs = [];
        		var NO_SEQs = [];
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				if (this.dsList.getColumn(i, "TY_REQUEST") == "A") {
        					//this.gfnAlert("일괄생성된 학자금신청은 반려할 수 없습니다.");
        					this.dsList.setColumn(i, "CHK", 0);
        					continue;
        				}
        				ID_SABUNs.push(this.dsList.getColumn(i, "ID_SABUN"));
        				NO_SEQs.push(this.dsList.getColumn(i, "NO_SEQ"));
        			}
        		}

        		var param = {
        			ID_SABUN  : ID_SABUNs.join(","),
        			YY_TUITION: this.dsSearch.getColumn(0, "YY_TUITION"),
        			CD_TUITION: this.dsSearch.getColumn(0, "CD_TUITION"),
        			CD_CORP   : this.dsSearch.getColumn(0, "CD_CORP"),
        			NO_SEQ    : NO_SEQs.join(","),
        			ID_USER   : this.AuthClient.ID_SABUN,
        		};

        		this.gfnFormOpen("DAB", "DAB_TUITION_REQUEST_REJECT_DLG", "fnRejectCallback", param);
        	});
        }

        // 결재상신 버튼
        this.fnAprv = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	this.dsList.filter("CHK == 1");
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "TY_REQUEST") == "M" && this.dsList.getColumn(i, "CD_APPROVAL") != "02") {
        			this.gfnAlert("직접신청 유형의 학자금신청은 승인 후\n전자결재가 가능합니다.");
        			this.dsList.filter("");
        			return;
        		}
        	}

        	this.dsList.filter("CD_APPROVAL == '00' || CD_APPROVAL == '01' || CD_APPROVAL == '03'");
        	if (this.dsList.rowcount > 0) {
        		this.gfnAlert("직접신청 유형의 학자금신청은 반려 혹은 승인된 상태이어야 합니다.");
        		this.dsList.filter("");
        		return;
        	}

        	this.dsList.filter("");

        	this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        		if (isOk == false) {
        			return;
        		}

        		var initParam = {
        			CD_CORP: this.dsSearch.getColumn(0, "CD_CORP"),
        			ID_AP_TYPE: "DAB01",
        			TY_WRK: "APRV",
        			ID_APRV: this.AuthClient.ID_SABUN,
        			TT_DOC: "학자금 지원 결재 (" + this.dsSearch.getColumn(0, "YY_TUITION") + "년도 " + this.dsSearch.getColumn(0, "CD_TUITION").replace("0", "") + "분기)",
        			CD_CORP_SUFFIX : this.gfnGetConfig("DZ" , "CD_CORP_SUFFIX"),
        		}
        		this.gfnAprv(initParam, "fnAprvCallback", "APRV");
        	});
        }

        // 결재문서조회 버튼
        this.fnAprvDocQ = function(obj, e) {
        	var oParams = {
        		CD_CORP: this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"),
        		NO_APRV: this.dsList.getColumn(this.dsList.rowposition, "NO_APRV"),
        	}
        	this.gfnAprvDoc(oParams, this.fnAprvDocQCallback);
        }

        // 결재상태초기화 버튼
        this.fnAprvInit = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	this.gfnConfirm(this.fnAprvMsg(obj), "fnAprvCallback", "APRVINIT");
        }

        this.fnAprvMsg = function(obj) {
        	var YY_TUITION = this.dsSearch.getColumn(0, "YY_TUITION");
        	var CD_TUITION = this.dsSearch.getColumn(0, "CD_TUITION").replace("0", "");
        	var CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	var DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	var msg = DS_CORP + "[" + CD_CORP + "]의 " + YY_TUITION + "년도 " + CD_TUITION + "분기의\n";
        	msg += "학자금신청에 대하여 " + obj.text + " 하시겠습니까?";

        	return msg;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnUpdateStatusExtendButton();
        	} else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "create" || svcID == "permit" || svcID == "reject") {
        		this.FormBtns.Select.click();
        	} else if (svcID == "APRV") {
        		this.gfnOpenAppr();
        	} else if (svcID == "APRVINIT") {
        		this.FormBtns.Select.click();
        	}
        }

        this.fnAprvRefreshCallback = function() {
        	this.FormBtns.Select.click();
        }

        // 일괄생성 버튼 콜백
        this.fnCreateCallback = function(strId, val) {
        	if (val == false) {
        		return;
        	}

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsCreate.clearData();
        	this.dsCreate.addRow();
        	this.dsCreate.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsCreate.setColumn(0, "YY_TUITION", this.dsSearch.getColumn(0, "YY_TUITION"));
        	this.dsCreate.setColumn(0, "CD_TUITION", this.dsSearch.getColumn(0, "CD_TUITION"));
        	this.dsCreate.setColumn(0, "ID_USER"   , this.dsSearch.getColumn(0, this.AuthClient.ID_USER));

        	var strSvcId    = "create";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        // 승인 버튼 콜백
        this.fnPermitCallback = function(strId, val) {
        	if (val == false) {
        		return;
        	}

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsPermit.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK")== 1){
        			var nrow = this.dsPermit.addRow();
        			this.dsPermit.setColumn(nrow, "TY_WORK"   , "P");
        			//this.dsPermit.setColumn(nrow, "ID_PERSON" , this.dsSearch.getColumn(0, "ID_PERSON"));
        			this.dsPermit.setColumn(nrow, "ID_SABUN"  , this.dsList.getColumn(i, "ID_SABUN"));
        			this.dsPermit.setColumn(nrow, "YY_TUITION", this.dsSearch.getColumn(0, "YY_TUITION"));
        			this.dsPermit.setColumn(nrow, "CD_TUITION", this.dsSearch.getColumn(0, "CD_TUITION"));
        			this.dsPermit.setColumn(nrow, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsPermit.setColumn(nrow, "NO_SEQ"    , this.dsList.getColumn(i, "NO_SEQ"));
        			this.dsPermit.setColumn(nrow, "DS_RETURN" , this.dsList.getColumn(i, "DS_RETURN"));
        			this.dsPermit.setColumn(nrow, "ID_USER"   , this.AuthClient.ID_SABUN);
        		}
        	}

        	var strSvcId    = "permit";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "permit=dsPermit";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        // 결재상신 버튼 콜백
        // 결재상태초기화 버튼 콜백
        this.fnAprvCallback = function(strId, val) {
        	this.dsApproval.clearData();
        	this.dsApproval.addRow();

        	this.dsApproval.setColumn(0, "TY_WRK",  strId);
        	this.dsApproval.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsApproval.setColumn(0, "YY_TUITION", this.dsSearch.getColumn(0, "YY_TUITION"));
        	this.dsApproval.setColumn(0, "CD_TUITION", this.dsSearch.getColumn(0, "CD_TUITION"));
        	this.dsApproval.setColumn(0, "ID_APRV", this.AuthClient.ID_SABUN);
        	if (strId == "APRV") {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsAprvOut.getColumn(0, "NO_APRV"));
        	} else {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsList.getColumn(0, "NO_APRV"));
        	}

        	var strSvcId    = strId;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "aprv_execute=dsApproval";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        // 반려 콜백
        this.fnRejectCallback = function() {
        	this.FormBtns.Select.click();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        	} else if (id == "ccfID_SABUN") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			this.gfnAlert("법인을 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if (id == "ccfCD_CORP") {
        		this.ccfID_SABUN.form.CDTextBox.set_value("");
        		this.ccfID_SABUN.form.DSTextBox.set_value("");
        		this.edtID_PERSON.set_value("");
        	} else if (id == "ccfID_SABUN") {
        		if (arr.length > 0) {
        			this.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        		} else {
        			this.edtID_PERSON.set_value("");
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        this.fnGridAfterEdit = function(obj,e) {
        	if( e.newvalue != e.oldvalue) {
        		if (e.columnid == "CHK") {
        			this.fnUpdateStatusExtendButton();
        		}
        	}
        }

        this.fnGridAfterAllCheck = function(obj, cell, check) {
        	this.fnUpdateStatusExtendButton();
        }

        this.fnGridExpandUp = function(obj, e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if (colnm == "CNT_FILE") {
        		var fileManager = {};
        		fileManager.CD_GUBUN = "DA08";
        		fileManager.CD_DIR = [this.dsList.getColumn(e.row, "YY_TUITION"), this.dsList.getColumn(e.row, "CD_TUITION"), this.dsList.getColumn(e.row, "ID_PERSON")];
        		fileManager.CD_REF = [this.dsList.getColumn(e.row, "ID_PERSON"), this.dsList.getColumn(e.row, "NO_SEQ")];
        		fileManager.IS_READONLY = true;

        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        }

        this.fnGridCellPosChanged = function(obj, e) {
        	this.fnUpdateStatusExtendButton();
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        /************************************************************************
         * 기타 함수
         ************************************************************************/
        // 분기
        this.fnGetQuarter = function(today){
        	var nMonth = parseInt(today.substr(4, 2));
        	if (nMonth >= 1 && nMonth <= 3) {
        		return "01";
        	} else if (nMonth >= 4 && nMonth <= 6) {
        		return "02";
        	} else if (nMonth >= 7 && nMonth <= 9) {
        		return "03";
        	} else if (nMonth >= 10 && nMonth <= 12){
        		return "04";
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staCD_TUITION.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staTY_REQUEST.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncellposchanged",this.fnGridCellPosChanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_TUITION.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
