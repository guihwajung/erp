(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAB_FAMILYEVENT");
            this.set_titletext("경조금신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_FAMILYEVENT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_FAMILYEVENT_SAVE</Col></Row><Row><Col id=\"TARGET\">aprv_execute</Col><Col id=\"SP\">DABPR_FAMILYEVENT_APRV_EXECUTE</Col></Row><Row><Col id=\"TARGET\">select_emp</Col><Col id=\"SP\">DAXPR_BASEINFO_CODEFIND_ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EVENT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EVENT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EVENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EVENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_EVENT_FR","ccfCD_CORP:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("경조일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_EVENT_FR","staDT_EVENT_FR:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO","calDT_EVENT_FR:0","10","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_EVENT_TO","staDT_ORD_TO:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","calDT_EVENT_TO:0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_EVENT","ccfID_SABUN:0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("경조");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_EVENT","staCD_EVENT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfCD_EVENT:10","10.0",null,"24.0","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_readonly("true");
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

            obj = new BindItem("item2","divSearch.form.calDT_EVENT_FR","value","dsSearch","DT_EVENT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calDT_EVENT_TO","value","dsSearch","DT_EVENT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_EVENT.form.CDTextBox","value","dsSearch","CD_EVENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_EVENT.form.DSTextBox","value","dsSearch","DS_EVENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_FAMILYEVENT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj, e) {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
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
        	this.btnFile 	  = this.gfnFormButtonAdd("btnFile"	    , "fnFile");		// 증빙파일(관리자권한)
        	this.btnFamilyRef = this.gfnFormButtonAdd("btnFamilyRef", "fnFamilyRef");	// 경조관계
        	this.btnRule      = this.gfnFormButtonAdd("btnRule"     , "fnRule");		// 경조규정
        	this.btnAprv      = this.gfnFormButtonAdd("btnAprv"     , "fnAprv");		// 결재상신 버튼
        	this.btnDocQ      = this.gfnFormButtonAdd("btnDocQ"     , "fnAprvDocQ");	// 결재문서조회 버튼
        	this.btnInit      = this.gfnFormButtonAdd("btnInit"     , "fnAprvInit");	// 결재상태초기화 버튼
        }

        this.fnUpdateStatusExtendButton = function() {
        	var nrow = this.dsList.rowposition;

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
        	this.ccfCD_CORP   = this.divSearch.form.ccfCD_CORP;
        	this.ctclYR_BASE  = this.divSearch.form.ctclYR_BASE;
        	this.ccfID_SABUN  = this.divSearch.form.ccfID_SABUN;
        	this.edtID_PERSON = this.divSearch.form.edtID_PERSON;
        	this.ccfCD_EVENT  = this.divSearch.form.ccfCD_EVENT;
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드영역
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_FAMILYEVENT");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        	this.dxGrid.AfterEdit              = "fnGridAfterEdit";
        	this.dxGrid.ExpandUp               = "fnGridExpandUp";
        	this.dxGrid.EnterCell              = "fnGridEnterCell";

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfCD_EVENT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_EVENT.AfterCDTextChanged     = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_EVENT_FR", "string");
        	this.dsSelect.addColumn("DT_EVENT_TO", "string");
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("CD_EVENT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");

        	// 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("CD_POSITION", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_EVENT", "string");
        	this.dsSave.addColumn("CD_FAMILY", "string");
        	this.dsSave.addColumn("DS_FAM_HNAME", "string");
        	this.dsSave.addColumn("DT_EVENT_BIRTH", "string");
        	this.dsSave.addColumn("DT_EVENT", "string");
        	this.dsSave.addColumn("HH_EVENT", "string");
        	this.dsSave.addColumn("MM_EVENT", "string");
        	this.dsSave.addColumn("DS_EVENT_PLACE", "string");
        	this.dsSave.addColumn("DS_BRIDE", "string");
        	this.dsSave.addColumn("DS_BRIDEGROOM", "string");
        	this.dsSave.addColumn("DS_EVENT_HALL_TEL", "string");
        	this.dsSave.addColumn("DS_BRIDE_TEL", "string");
        	this.dsSave.addColumn("DS_BRIDEGROOM_TEL", "string");
        	this.dsSave.addColumn("DS_EVENT_TEL", "string");
        	this.dsSave.addColumn("DS_ADDR_BEFORE", "string");
        	this.dsSave.addColumn("DS_ADDR_AFTER", "string");
        	this.dsSave.addColumn("AM_FAMILYEVENT", "bigdecimal");
        	this.dsSave.addColumn("CD_CONGRATULATION", "string");
        	this.dsSave.addColumn("YN_CONDOLENCE", "string");
        	this.dsSave.addColumn("FR_VACATION", "string");
        	this.dsSave.addColumn("TO_VACATION", "string");
        	this.dsSave.addColumn("QN_EVENT", "bigdecimal");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	// 결재
        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("TY_WRK", "string");
        	this.dsApproval.addColumn("CD_CORP", "string");
        	this.dsApproval.addColumn("ID_PERSON", "int");
        	this.dsApproval.addColumn("NO_SEQ", "int");
        	this.dsApproval.addColumn("ID_APRV", "string");
        	this.dsApproval.addColumn("NO_APRV", "int");

        	// 직원정보
        	this.dsSelectEmp = new Dataset();
        	this.dsSelectEmp.addColumn("TY_GUBUN", "string");
        	this.dsSelectEmp.addColumn("CN_ROW", "int");
        	this.dsSelectEmp.addColumn("VALUE", "string");
        	this.dsSelectEmp.addColumn("MIN_VALUE", "string");
        	this.dsSelectEmp.addColumn("CD_CORP", "string");
        	this.dsSelectEmp.addColumn("GR_SEARCH", "string");
        	this.dsSelectEmp.addColumn("CD_DEPT", "string");
        	this.dsSelectEmp.addColumn("YN_CORP", "string");
        	this.dsSelectEmp.addColumn("TY_RETIRE", "string");
        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	// 법인
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	// 년도
        	var DT_EVENT_TO = this.gfnAddDate(this.gfnGetDate(), 30);
        	var DT_EVENT_FR = this.gfnAddDate(this.gfnGetDate(), -30);
        	this.dsSearch.setColumn(0, "DT_EVENT_FR", DT_EVENT_FR);
        	this.dsSearch.setColumn(0, "DT_EVENT_TO", DT_EVENT_TO);

        	// 권한별 설정
            // GR_SEARCH = 1: 전체, 2: 법인, 3: 본부, 5: 부문, 7: 부서, 9: 개인
            // TY_AUTH = F: 전체, U: 쓰기, R: 읽기
        	if (this.FormInfo.GR_SEARCH == "9") {

        		this.dsSearch.setColumn(0, "ID_SABUN", this.AuthClient.ID_USER);	// 성명
        		this.dsSearch.setColumn(0, "DS_HNAME", this.AuthClient.DS_HNAME);

        		this.ccfCD_CORP.form.set_enable(false);
        		this.ccfID_SABUN.form.set_readonly(false);
        		this.ccfID_SABUN.form.set_enable(false);

        		this.divTopBtn.form.btnExt_btnFamilyRef.set_visible(false);
        		this.fnSelectEmp();
        	}

        	this.fnUpdateStatusExtendButton();
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP"    , this.gfnNvl(this.dsSearch.getColumn(0, "CD_CORP"), ""));
        	this.dsSelect.setColumn(0, "DT_EVENT_FR", this.gfnNvl(this.dsSearch.getColumn(0, "DT_EVENT_FR"), ""));
        	this.dsSelect.setColumn(0, "DT_EVENT_TO", this.gfnNvl(this.dsSearch.getColumn(0, "DT_EVENT_TO"), ""));
        	this.dsSelect.setColumn(0, "ID_PERSON"  , this.gfnNvl(this.dsSearch.getColumn(0, "ID_PERSON"), ""));
        	this.dsSelect.setColumn(0, "ID_SABUN"   , this.gfnNvl(this.dsSearch.getColumn(0, "ID_SABUN"), ""));
        	this.dsSelect.setColumn(0, "CD_EVENT"   , this.gfnNvl(this.dsSearch.getColumn(0, "CD_EVENT"), ""));
        	this.dsSelect.setColumn(0, "ID_USER"    , this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "GR_SEARCH"  , this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP"    , this.AuthClient.CD_CORP);

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

        this.fnSelectEmp = function() {
        	this.dsSelectEmp.clearData();
        	this.dsSelectEmp.addRow();
        	this.dsSelectEmp.setColumn(0, "TY_GUBUN" , "1");
        	this.dsSelectEmp.setColumn(0, "CN_ROW"   , 50);
        	this.dsSelectEmp.setColumn(0, "VALUE"    , this.AuthClient.ID_SABUN);
        	this.dsSelectEmp.setColumn(0, "MIN_VALUE", "");
        	this.dsSelectEmp.setColumn(0, "CD_CORP"  , this.AuthClient.CD_CORP);
        	this.dsSelectEmp.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelectEmp.setColumn(0, "CD_DEPT"  , "");
        	this.dsSelectEmp.setColumn(0, "YN_CORP"  , "N");
        	this.dsSelectEmp.setColumn(0, "TY_RETIRE", "%");

        	var strSvcId    = "selectEmp";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_emp=dsSelectEmp";
        	var outData     = "dsEmp=select_emp0";
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
         * 추가 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	if (this.FormInfo.GR_SEARCH == 9) {
        		this.dsList.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		this.dsList.setColumn(nrow, "DS_CORP", this.AuthClient.DS_CORP);
        		this.dsList.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_SABUN);
        		this.dsList.setColumn(nrow, "DS_HNAME", this.AuthClient.DS_HNAME);
        		this.dsList.setColumn(nrow, "ID_PERSON", this.dsEmp.getColumn(0, "ID_PERSON"));
        		this.dsList.setColumn(nrow, "CD_DEPT", this.UserInfo.CD_DEPT_ACNT);
        		this.dsList.setColumn(nrow, "DS_DEPT", this.UserInfo.DS_DEPT_ACNT);
        		this.dsList.setColumn(nrow, "CD_POSITION", this.dsEmp.getColumn(0, "CD_POSITION"));
        		this.dsList.setColumn(nrow, "DS_POSITION", this.dsEmp.getColumn(0, "DS_POSITION"));
        	}

        	this.dsList.setColumn(nrow, "YN_WREATH", "Y");
        	this.dsList.setColumn(nrow, "YN_BOUQUET", "N");
        	this.dsList.setColumn(nrow, "YN_AID", "N");
        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {
        	if (this.dsList.getColumn(this.dsList.rowposition, "NO_APRV") == undefined) {
        		this.gfnGridDel(this.dxGrid);
        	} else {
        		this.gfnAlert("전자결재가 진행 중인 경우 삭제할 수 없습니다.");
        	}
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
        			this.dsSave.setColumn(nrow, "TY_SAVE"          , flag);
        			this.dsSave.setColumn(nrow, "ID_PERSON"        , this.gfnNvl(this.dsList.getColumn(i, "ID_PERSON"), ""));
        			this.dsSave.setColumn(nrow, "NO_SEQ"           , (flag == "I" ? 0 : this.dsList.getColumn(i, "NO_SEQ")));
        			this.dsSave.setColumn(nrow, "CD_CORP"          , this.gfnNvl(this.dsList.getColumn(i, "CD_CORP"), ""));
        			this.dsSave.setColumn(nrow, "CD_DEPT"          , this.gfnNvl(this.dsList.getColumn(i, "CD_DEPT"), ""));
        			this.dsSave.setColumn(nrow, "CD_POSITION"      , this.gfnNvl(this.dsList.getColumn(i, "CD_POSITION"), ""));
        			this.dsSave.setColumn(nrow, "ID_SABUN"         , this.gfnNvl(this.dsList.getColumn(i, "ID_SABUN"), ""));
        			this.dsSave.setColumn(nrow, "CD_EVENT"         , this.gfnNvl(this.dsList.getColumn(i, "CD_EVENT"), ""));
        			this.dsSave.setColumn(nrow, "CD_FAMILY"        , this.gfnNvl(this.dsList.getColumn(i, "CD_FAMILY"), ""));
        			this.dsSave.setColumn(nrow, "DS_FAM_HNAME"     , this.gfnNvl(this.dsList.getColumn(i, "DS_FAM_HNAME"), ""));
        			this.dsSave.setColumn(nrow, "DT_EVENT_BIRTH"   , this.gfnNvl(this.dsList.getColumn(i, "DT_EVENT_BIRTH"), ""));
        			this.dsSave.setColumn(nrow, "DT_EVENT"         , this.gfnNvl(this.dsList.getColumn(i, "DT_EVENT"), ""));
        			this.dsSave.setColumn(nrow, "HH_EVENT"         , this.gfnNvl(this.dsList.getColumn(i, "HH_EVENT"), ""));
        			this.dsSave.setColumn(nrow, "MM_EVENT"         , this.gfnNvl(this.dsList.getColumn(i, "MM_EVENT"), ""));
        			this.dsSave.setColumn(nrow, "DS_EVENT_PLACE"   , this.gfnNvl(this.dsList.getColumn(i, "DS_EVENT_PLACE"), ""));
        			this.dsSave.setColumn(nrow, "DS_BRIDE"         , this.gfnNvl(this.dsList.getColumn(i, "DS_BRIDE"), ""));
        			this.dsSave.setColumn(nrow, "DS_BRIDEGROOM"    , this.gfnNvl(this.dsList.getColumn(i, "DS_BRIDEGROOM"), ""));
        			this.dsSave.setColumn(nrow, "DS_EVENT_HALL_TEL", this.gfnNvl(this.dsList.getColumn(i, "DS_EVENT_HALL_TEL"), ""));
        			this.dsSave.setColumn(nrow, "DS_BRIDE_TEL"     , this.gfnNvl(this.dsList.getColumn(i, "DS_BRIDE_TEL"), ""));
        			this.dsSave.setColumn(nrow, "DS_BRIDEGROOM_TEL", this.gfnNvl(this.dsList.getColumn(i, "DS_BRIDEGROOM_TEL"), ""));
        			this.dsSave.setColumn(nrow, "DS_EVENT_TEL"     , this.gfnNvl(this.dsList.getColumn(i, "DS_EVENT_TEL"), ""));
        			this.dsSave.setColumn(nrow, "DS_ADDR_BEFORE"   , this.gfnNvl(this.dsList.getColumn(i, "DS_ADDR_BEFORE"), ""));
        			this.dsSave.setColumn(nrow, "DS_ADDR_AFTER"    , this.gfnNvl(this.dsList.getColumn(i, "DS_ADDR_AFTER"), ""));
        			this.dsSave.setColumn(nrow, "AM_FAMILYEVENT"   , this.gfnNvl(this.dsList.getColumn(i, "AM_FAMILYEVENT"), 0));
        			this.dsSave.setColumn(nrow, "CD_CONGRATULATION", this.gfnNvl(this.dsList.getColumn(i, "CD_CONGRATULATION"), ""));
        			this.dsSave.setColumn(nrow, "YN_CONDOLENCE"    , this.gfnNvl(this.dsList.getColumn(i, "YN_CONDOLENCE"), ""));
        			this.dsSave.setColumn(nrow, "FR_VACATION"      , this.gfnNvl(this.dsList.getColumn(i, "FR_VACATION"), ""));
        			this.dsSave.setColumn(nrow, "TO_VACATION"      , this.gfnNvl(this.dsList.getColumn(i, "TO_VACATION"), ""));
        			this.dsSave.setColumn(nrow, "QN_EVENT"         , this.gfnNvl(this.dsList.getColumn(i, "QN_EVENT"), 0));
        			this.dsSave.setColumn(nrow, "DS_REMARK"        , this.gfnNvl(this.dsList.getColumn(i, "DS_REMARK"), ""));
        			this.dsSave.setColumn(nrow, "GR_SEARCH"        , this.FormInfo.GR_SEARCH);
        			this.dsSave.setColumn(nrow, "TY_AUTH"          , this.FormInfo.TY_AUTH);
        			this.dsSave.setColumn(nrow, "GR_DEPT"          , this.AuthClient.CD_DEPT);
        			this.dsSave.setColumn(nrow, "ID_USER"          , this.AuthClient.ID_USER);
        			break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	for (var i = 0; i < this.dsSave.rowcount; i++) {
        		var FR_VACATION = this.dsSave.getColumn(i, "FR_VACATION");
        		var TO_VACATION = this.dsSave.getColumn(i, "TO_VACATION");
        		if (TO_VACATION < FR_VACATION) {
        			this.gfnAlert("휴가종료일은 휴가시작일보다 반드시 늦어야 합니다.");
        			return;
        		}

        		var diff = parseInt(this.gfnGetDiffDate(FR_VACATION, TO_VACATION));

        // 		if (parseInt(this.dsSave.getColumn(i, "QN_EVENT")) != diff + 1) {
        // 			this.gfnAlert("휴가시작일과 휴가종료일을 확인해주세요.\n휴가일수는 총 " + this.dsSave.getColumn(i, "QN_EVENT") + "입니다.");
        // 			return;
        // 		}
        	}

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
        	return true;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function() {
        	return true;
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 증빙파일 버튼(관리자)
        this.fnFile = function() {
        	var fileManager = {};
        		fileManager.CD_GUBUN = "DA11";
        		fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON"), this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ")];
        		fileManager.CD_REF = [this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON"), this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ")];

        		// 권한설정
        		if (this.FormInfo.GR_SEARCH == "1") {
        			fileManager.IS_READONLY = false;
        		} else {
        			fileManager.IS_READONLY = true;
        		}
        		this.gfnFileManager(fileManager, "fnFileCallback");
        }

        // 경조규정 버튼
        this.fnRule = function() {
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_FAMILYEVENT_RULE_DLG");
        }

        // 경조관계 버튼
        this.fnFamilyRef = function(obj, e) {
        	var param = {};

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_FAMILYEVENTINFO", "", param);
        }

        // 결재상신 버튼
        this.fnAprv = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	this.dsList.filter("CHK == 1");
        	if (this.dsList.rowcount == 0) {
        		this.gfnAlert("경조금신청 " + obj.text + " 대상을 선택하십시오.");
        		this.dsList.filter("");
        		return;
        	}

        	if (this.dsList.rowcount > 1) {
        		this.gfnAlert("경조금신청은 한 건만 " + obj.text + " 할 수 있습니다.");
        		this.dsList.filter("");
        		return;
        	}

        	if (this.dsList.getColumn(this.dsList.rowposition, "CNT_FILE") == "첨부(0)") {
        		this.gfnAlert("증빙이 첨부된 건만 " + obj.text + " 할 수 있습니다.");
        		this.dsList.filter("");
        		return;
        	}

        	var title = this.dsList.getColumn(0, "DS_EVENT") + " - " + this.dsList.getColumn(0, "DS_FAMILY");
        	var msg = "경조금신청에 대하여 " + obj.text + "하시겠습니까?\n";
        	mag = msg + "    " + title;
        	this.dsList.filter("");

        	this.gfnConfirm(msg, function(strId, isOk) {
        		if (isOk == false) {
        			return;
        		}

        		var initParam = {
        			CD_CORP: this.dsSearch.getColumn(0, "CD_CORP"),
        			ID_AP_TYPE: "DAB04",
        			TY_WRK: "APRV",
        			ID_APRV: this.AuthClient.ID_SABUN,
        			TT_DOC: "경조금신청 (" + title + " )",
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
        	this.dsList.filter("CHK == 1");
        	if (this.dsList.rowcount == 0) {
        		this.gfnAlert("경조금신청 " + obj.text + " 대상을 선택하십시오.");
        		this.dsList.filter("");
        	}
        	this.dsList.filter("");

        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var msg = "경조금신청에 대하여 " + obj.text + "하시겠습니까?\n";
        	this.gfnConfirm(msg, "fnAprvCallback", "APRVINIT");
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "APRV") {
        		this.gfnOpenAppr(function() {
        			this.FormBtns.Select.click();
        		});
        	} else if (svcID == "APRVINIT") {
        		this.FormBtns.Select.click();
        	} else if (svcID == "selectEmp") {
        		if (this.dsEmp.rowcount == 0 )
        		{
        			this.gfnAlert("경조금을 신청할 수 없습니다. 인사담당자에게 확인하세요",
        			function() {
        				this.getParentContext().close();
        			});
        		}
        	}
        }

        // 결재상신 버튼 콜백
        // 결재상태초기화 버튼 콜백
        this.fnAprvCallback = function(strId, val) {
        	this.dsApproval.clearData();

        	this.dsList.filter("CHK == 1");
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var nrow = this.dsApproval.addRow();
        		this.dsApproval.setColumn(nrow, "TY_WRK",  strId);
        		this.dsApproval.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsApproval.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        		this.dsApproval.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        		this.dsApproval.setColumn(nrow, "ID_APRV", this.AuthClient.ID_SABUN);
        		if (strId == "APRV") {
        			this.dsApproval.setColumn(nrow, "NO_APRV", this.dsAprvOut.getColumn(0, "NO_APRV"));
        		} else {
        			this.dsApproval.setColumn(nrow, "NO_APRV", this.dsList.getColumn(this.dsList.rowposition, "NO_APRV"));
        		}
        	}
        	this.dsList.filter("");

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

        // 첨부파일
        this.fnFileCallback = function(strID, val) {
        	this.dsList.set_enableevent(false);
        	if (val.Cnt == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, "CNT_FILE", "첨부(0)");
        	} else {
        		this.dsList.setColumn(this.dsList.rowposition, "CNT_FILE", "첨부(" + val.Cnt + ")");
        	}
        	this.dsList.set_enableevent(true);
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		;
        	}
        	else if(id == "ccfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value, this.AuthClient.CD_CORP));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	else if(id == "ccfCD_EVENT") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "VC");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if (id == "ccfCD_CORP") {
        		this.dsSearch.setColumn(0, "ID_SABUN", "");
        		this.dsSearch.setColumn(0, "DS_HNAME", "");
        		this.dsSearch.setColumn(0, "ID_PERSON", "");
        	} else if (id == "ccfID_SABUN") {
        		console.log('arr', arr);
        		if (arr.length > 0) {
        			this.dsSearch.setColumn(0, "ID_PERSON", arr[0]["ID_PERSON"]);
        		} else {
        			this.dsSearch.setColumn(0, "ID_PERSON", "");
        		}
        	} else if (id == "ccfCD_EVENT") {
        		;
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 사번
         	if (id == "DAX_CFBASEINFO_ALL") {
        		var sCD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        		if (this.gfnIsNull(sCD_CORP)) {
        			this.gfnAlert("법인을 먼저 입력하세요.");
        			return false;
        		}
         		dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP);
         		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);	//"1");
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
         	}
        	// 경조
        	else if (id == "VC") {
         		dsUserParam.setColumn(nrow, "CD_PREFIX", "VC");
         	}
        	// 경조대상자
        	else if (id == "DAX_CFFAMILYEVENT") {
        		var sCD_EVENT = this.dsList.getColumn(this.dsList.rowposition, "CD_EVENT");
        		if (this.gfnIsNull(sCD_EVENT)) {
        			this.gfnAlert("경조구분을 먼저 입력하세요.");
        			return false;
        		}
         		dsUserParam.setColumn(nrow, "CD_GUBUN", sCD_EVENT);
        		dsUserParam.setColumn(nrow, "DT_BASE",  this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "DT_EVENT"), this.gfnGetDate()));
         	}

        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {
        	// 경조
         	if (id == "VC") {
         		this.dsList.setColumn(this.dsList.rowposition, "CD_FAMILY", "");
         		this.dsList.setColumn(this.dsList.rowposition, "DS_FAMILY", "");
         		this.dsList.setColumn(this.dsList.rowposition, "DS_FAM_HNAME", "");
         		this.dsList.setColumn(this.dsList.rowposition, "DT_EVENT_BIRTH", "");
        		this.dsList.setColumn(this.dsList.rowposition, "DT_EVENT", "");
        		this.dsList.setColumn(this.dsList.rowposition, "AM_FAMILYEVENT", "");
        		this.dsList.setColumn(this.dsList.rowposition, "QN_EVENT", "");
        		this.dsList.setColumn(this.dsList.rowposition, "FR_VACATION", "");
        		this.dsList.setColumn(this.dsList.rowposition, "TO_VACATION", "");
         	}
        	// 경조대상자 관계
        	else if (id == "DAX_CFFAMILYEVENT") {
        		this.dsList.setColumn(this.dsList.rowposition, "AM_FAMILYEVENT", codeFindData[0]["AM_EVENTBASE"]);	// 경조금액
        		this.dsList.setColumn(this.dsList.rowposition, "QN_EVENT"      , codeFindData[0]["QN_EVENTBASE"]);	// 휴가일수
        	}
        }

        this.fnGridAfterEdit = function(obj, e) {
        	// 경조
        	if (e.columnid == "DS_EVENT" && this.gfnIsNull(e.newvalue)) {
         		this.dsList.setColumn(this.dsList.rowposition, "CD_FAMILY", "");
         		this.dsList.setColumn(this.dsList.rowposition, "DS_FAMILY", "");
         		this.dsList.setColumn(this.dsList.rowposition, "DS_FAM_HNAME", "");
         		this.dsList.setColumn(this.dsList.rowposition, "DT_EVENT_BIRTH", "");
        		this.dsList.setColumn(this.dsList.rowposition, "DT_EVENT", "");
        		this.dsList.setColumn(this.dsList.rowposition, "AM_FAMILYEVENT", "");
        		this.dsList.setColumn(this.dsList.rowposition, "QN_EVENT", "");
        		this.dsList.setColumn(this.dsList.rowposition, "FR_VACATION", "");
        		this.dsList.setColumn(this.dsList.rowposition, "TO_VACATION", "");
        	}
        	// 경조대상자 관계
        	else if (e.columnid == "DS_FAMILY" && this.gfnIsNull(e.newvalue)) {
         		this.dsList.setColumn(this.dsList.rowposition, "DS_FAM_HNAME", "");
         		this.dsList.setColumn(this.dsList.rowposition, "DT_EVENT_BIRTH", "");
        		this.dsList.setColumn(this.dsList.rowposition, "DT_EVENT", "");
        		this.dsList.setColumn(this.dsList.rowposition, "AM_FAMILYEVENT", "");
        		this.dsList.setColumn(this.dsList.rowposition, "QN_EVENT", "");
        		this.dsList.setColumn(this.dsList.rowposition, "FR_VACATION", "");
        		this.dsList.setColumn(this.dsList.rowposition, "TO_VACATION", "");
        	}
        	// 경조일자
        	else if (e.columnid == "DT_EVENT" && !this.gfnIsNull(e.newvalue)) {
        		var QN_EVENT = parseInt(this.dsList.getColumn(this.dsList.rowposition, "QN_EVENT"));
        		if (QN_EVENT > 0) {
        			QN_EVENT = QN_EVENT - 1;

        			var FR_VACATION = this.dsList.getColumn(this.dsList.rowposition, "DT_EVENT")
        			var TO_VACATION = this.gfnAddDate(FR_VACATION, QN_EVENT);

        			this.dsList.setColumn(this.dsList.rowposition, "FR_VACATION", FR_VACATION);
        			this.dsList.setColumn(this.dsList.rowposition, "TO_VACATION", TO_VACATION);
        		}
        	}
        	// 화환
        	else if (e.columnid == "YN_WREATH" && !this.gfnIsNull(e.newvalue)) {
        		this.dsList.setColumn(this.dsList.rowposition, "YN_BOUQUET", e.newvalue == "Y" ? "N" : "Y");
        	}
        	// 꽃다발
        	else if (e.columnid == "YN_BOUQUET" && !this.gfnIsNull(e.newvalue)) {
        		this.dsList.setColumn(this.dsList.rowposition, "YN_WREATH", e.newvalue == "Y" ? "N" : "Y");
        	}
        }

        this.fnGridCellPosChanged = function(obj, e) {
        	this.fnUpdateStatusExtendButton();
        }

        this.fnGridExpandUp = function(obj, e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if (colnm == "CNT_FILE") {
        		var fileManager = {};
        		fileManager.CD_GUBUN = "DA11";
        		fileManager.CD_DIR = [this.dsList.getColumn(e.row, "ID_PERSON"), this.dsList.getColumn(e.row, "NO_SEQ")];
        		fileManager.CD_REF = [this.dsList.getColumn(e.row, "ID_PERSON"), this.dsList.getColumn(e.row, "NO_SEQ")];
        		fileManager.IS_READONLY = false;

        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        }

        this.fnGridEnterCell = function(obj, row, cell) {
        	if (cell == obj.getBindCellIndex("body", "ID_SABUN")) {
        		if (this.FormInfo.GR_SEARCH == "9") return false;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        // 코드파인더 초기화
        this.fnResetCodeFinder = function(obj, dataset, columns) {
        	obj.form.fnCodeFindClear();
        	for (var i = 0; i < columns.length; i++) {
        		dataset.setColumn(0, columns[i], "");
        	}
        }

        // 코드파인더 설정
        this.fnSetCodeFinder = function(obj, value) {
        	obj.form.CDTextBox.set_value(value);
        	obj.form.fnCodeFindLoad();
        }

        // 객체 초기화
        this.fnResetObjectValue = function(obj, dataset, columns) {
        	obj.set_value("");
        	for (var i = 0; i < columns.length; i++) {
        		dataset.setColumn(0, columns[i], "");
        	}
        }

        // 객체 설정
        this.fnSetObjectValue = function(obj, dataset, column, value) {
        	obj.set_value(value);
        	dataset.setColumn(0, column, value);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncellposchanged",this.fnGridCellPosChanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_FAMILYEVENT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
