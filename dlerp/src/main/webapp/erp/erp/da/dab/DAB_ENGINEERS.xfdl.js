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
            this.set_titletext("증명서 발급");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_ENGINEERS_SELECT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DABPR_ENGINEERS_DELETE</Col></Row><Row><Col id=\"TARGET\">approval</Col><Col id=\"SP\">DABPR_ENGINEERS_APPROVE</Col></Row><Row><Col id=\"TARGET\">print</Col><Col id=\"SP\">DABPR_ENGINEERS_PRINT</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DABPR_ENGINEERS_PRINT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_STATUS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">승인</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미승인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRptList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_STATUS","638","45","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("승인상태");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_APPROVE","staTY_STATUS:0","45","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_STATUS");
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_PERSON","cboYN_APPROVE:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("ID_PERSON");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","staID_PERSON:0.0","10.0","157","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_visible("false");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("부서");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","staCD_CORP:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staCD_CORP:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","ccfID_SABUN:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_REQUEST_FR","staDT_REQUEST:0.0","staCD_CORP:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO","calDT_REQUEST_FR:0.0","staCD_CORP:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_REQUEST_TO","staDT_ORD_TO:0.0","staCD_CORP:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","calDT_REQUEST_TO:-320","staCD_CORP:-20","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("부서");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:-2","staCD_CORP:-20","262","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
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

            obj = new BindItem("item3","divSearch.form.cboYN_APPROVE","value","dsSearch","YN_APPROVE");
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

            obj = new BindItem("item7","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.calDT_REQUEST_FR","value","dsSearch","DT_REQUEST_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.calDT_REQUEST_TO","value","dsSearch","DT_REQUEST_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_ENGINEERS.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.fv_tyFlag = "";
        this.COL_SPLIT = "|";
        this.ROW_SPLIT = ";";

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
        	//this.fnSetCombo();
        	this.fnInit();
        };

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
        	//var division = this.gfnGetConfig("DA" , "ID_ENG_DIVISION")

        	if (this.FormInfo.GR_SEARCH == 1) {
        		this.btnApproval     = this.gfnFormButtonAdd("btnApproval"    , "fnApproval");			// 승인
        		this.btnApprovalDivision     = this.gfnFormButtonAdd("btnApprovalDivision"    , "fnApprovalDivision");			// 승인
        		this.btnReturn       = this.gfnFormButtonAdd("btnReturn"    , "fnReturn");			// 반려
        	} else if( this.FormInfo.GR_SEARCH == 2) { //this.gfnGetConfig("DA", "ID_ENG_DIVISION").indexOf(this.AuthClient.ID_USER) !=-1) { // 부문 사업부담당자 이면
        		this.btnApprovalDivision     = this.gfnFormButtonAdd("btnApprovalDivision"    , "fnApprovalDivision");			// 승인
        		this.btnReturn       = this.gfnFormButtonAdd("btnReturn"    , "fnReturn");			// 반려
        	}
        	this.btnCertiRequest 	 = this.gfnFormButtonAdd("btnCertiRequest", "fnCertiRequest");			// 증명서 발급신청

        	//trace(" ID_ENG_DIVISION=>" + division);
        }
        // 버튼 활성/비활성 공통 처리
        this.fnButtonCheck = function (){
            var nrow = this.dsList.rowposition;
        	var bEnable = (nrow > 0) ? true : false;
        	var bAprv = this.dsList.getColumn(nrow, "NO_APRV");

        	if (this.FormInfo.GR_SEARCH == 1) {
        		this.btnApproval.set_enable(bEnable && bAprv == "2");
        		this.btnApprovalDivision.set_enable(false);
        		this.btnReturn.set_enable(bEnable && (bAprv == "1" || bAprv == "2"));
        	} else if( this.FormInfo.GR_SEARCH == 2) { //this.gfnGetConfig("DA", "ID_ENG_DIVISION").indexOf(this.AuthClient.ID_USER) != -1) {  // 부문 사업부담당자 이면
        		this.btnApprovalDivision.set_enable(bEnable && bAprv == "1");
        		this.btnReturn.set_enable(bEnable && bAprv == "1" );
        	}



        };
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;

        	this.ccfCD_CORP        = this.divSearch.form.ccfCD_CORP;			// 법인코드
        	this.cboYN_APPROVE     = this.divSearch.form.cboYN_APPROVE;			// 승인상태
        	this.ccfID_SABUN       = this.divSearch.form.ccfID_SABUN;			// 성명
        	this.edtID_PERSON      = this.divSearch.form.edtID_PERSON;			// ID_PERSON(숨김)
        	this.calDT_REQUEST_FR = this.divSearch.form.calDT_REQUEST_FR; 	// 신청일자(FROM)
        	this.calDT_REQUEST_TO = this.divSearch.form.calDT_REQUEST_TO;		// 신청일자(TO)
        	this.ccfCD_DEPT        = this.divSearch.form.ccfCD_DEPT;			// 부서(숨김)

        	this.grSearch = this.FormInfo.GR_SEARCH;	// 권한
        	this.cdGroup  = this.AuthClient.CD_GROUP;	// 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드영역
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_ENGINEERS");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";
        	//this.dxGrid.EnterCell              = "fnGrid_EnterCell";
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

            // BUTTON, BUTTON-IN 처리
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 법인코드
        	this.ccfCD_CORP.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 성명
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 부서(숨김)
        	this.ccfCD_DEPT.AfterCDTextChanged      = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("YN_APPROVE", "string");
        	this.dsSelect.addColumn("DT_REQUEST_FR", "string");
        	this.dsSelect.addColumn("DT_REQUEST_TO", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_LOGIN", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP_REQUEST", "string");
        	this.dsInsert.addColumn("ID_SABUN_REQUEST", "string");
        	this.dsInsert.addColumn("ID_PERSON_REQUEST", "int");
        	this.dsInsert.addColumn("CD_DEPT_REQUEST", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("ID_SABUN", "string");
        	this.dsInsert.addColumn("ID_PERSON", "int");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("CD_POSITION", "string");
        	this.dsInsert.addColumn("DT_BIRTH", "string");
        	this.dsInsert.addColumn("NO_BUSU_REQUEST", "int");
        	this.dsInsert.addColumn("DS_REASON", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsApprove = new Dataset();
        	this.dsApprove.addColumn("CD_CORP", "string");
        	this.dsApprove.addColumn("ID_PERSON", "int");
        	this.dsApprove.addColumn("NO_ID", "int");
        	this.dsApprove.addColumn("NO_BUSU", "int");
        	this.dsApprove.addColumn("TY_GUBUN", "string");
        	this.dsApprove.addColumn("GR_SEARCH", "string");
        	this.dsApprove.addColumn("GR_DEPT", "string");
        	this.dsApprove.addColumn("ID_LOGIN", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("ID_PERSON", "int");
        	this.dsDelete.addColumn("NO_ID", "int");

        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("DT_PRINT", "STRING");
        	this.dsReportParam.addColumn("IMG", "STRING");

        	this.dsSelectRpt = new Dataset();
        	this.dsSelectRpt.addColumn("CD_CORP", "string");
        	//this.dsSelectRpt.addColumn("YN_APPROVE", "string");
        	this.dsSelectRpt.addColumn("DT_REQUEST_FR", "string");
        	this.dsSelectRpt.addColumn("DT_REQUEST_TO", "string");
        }


        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	// 법인
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	// 승인상태
        	this.dsSearch.setColumn(0, "YN_APPROVE", "%");

        	// 신청일자
        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_REQUEST_FR", today.substr(0, 6) + "01");
        	this.dsSearch.setColumn(0, "DT_REQUEST_TO", today);

        	// 권한별 설정
            // GR_SEARCH = 1: 전체, 2: 법인, 3: 본부, 5: 부문, 7: 부서, 9: 개인
            // TY_AUTH = F: 전체, U: 쓰기, R: 읽기
        	if (this.FormInfo.GR_SEARCH > 5) {
        		console.log('this', this);
        		// 성명
        		this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_SABUN);
        		this.dsSearch.setColumn(0, "ID_SABUN", this.AuthClient.ID_SABUN);
        		this.dsSearch.setColumn(0, "DS_HNAME", this.AuthClient.DS_HNAME);
        		this.dsSearch.setColumn(0, "ID_PERSON", this.AuthClient.ID_PERSON);

        		// 부서
        		this.dsSearch.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        		this.dsSearch.setColumn(0, "DS_DEPT", this.AuthClient.DS_DEPT);

        		this.ccfCD_CORP.set_enable(false);	// 법인
        		this.ccfID_SABUN.set_enable(false);	// 성명
        		this.ccfCD_DEPT.set_enable(false);	// 부서
        	}

        	this.fnResizeHeader(this.dxGrid, 2, 3);

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
        	this.dsSelect.setColumn(0, "CD_CORP"       , this.gfnNvl(this.dsSearch.getColumn(0, "CD_CORP"), ""));
        	this.dsSelect.setColumn(0, "CD_DEPT"       , this.gfnNvl(this.dsSearch.getColumn(0, "CD_DEPT"), ""));
        	this.dsSelect.setColumn(0, "ID_SABUN"      , this.gfnNvl(this.dsSearch.getColumn(0, "ID_SABUN"), ""));
        	// 상태조회 %:전체, Y: 승인, N:미승인
        	this.dsSelect.setColumn(0, "YN_APPROVE"    , this.gfnNvl(this.dsSearch.getColumn(0, "YN_APPROVE"), ""));
        	this.dsSelect.setColumn(0, "DT_REQUEST_FR", this.gfnNvl(this.dsSearch.getColumn(0, "DT_REQUEST_FR"), ""));
        	this.dsSelect.setColumn(0, "DT_REQUEST_TO", this.gfnNvl(this.dsSearch.getColumn(0, "DT_REQUEST_TO"), ""));
        	this.dsSelect.setColumn(0, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_DEPT"       , this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_LOGIN"      , this.AuthClient.ID_USER);

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
        };

        /*
         * 추가 버튼
         */
        this.fnAdd = function() {

        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {
        	var yn_approve = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "NO_APRV"));
        	if (yn_approve != "1" ) {
        		this.gfnAlert("승인처리중인 내역은 삭제가 불가능합니다. 확인해주세요.");
        		return;
        	}
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         * 저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsDelete.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        				this.dsDelete.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));

        				break;
        		}
        	}

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "delete";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

            this.gfnTransaction(strSvcId,       // transaction을 구분하기 위한 svc id값
        						strSvcType,     // transaction을 요청할 구분
        						inProc,         // Procedure 정보 Dataset 이름
        						inData,         // 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData,        // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg,         // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
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
        	if (this.dsList.rowcount == 0) {
        		this.gfnAlert("조회후 작업하세요!");
        		return false;
        	}
        	if(this.FormInfo.GR_SEARCH == 1 || this.FormInfo.GR_SEARCH == 2) {
        		// 건설 기술인 경력 확인 발급대장
        		this.dsReport = new Dataset();
        		this.dsReport.addColumn("CD_CORP", "string");
        		this.dsReport.addColumn("DT_REQUEST_FR", "string");
        		this.dsReport.addColumn("DT_REQUEST_TO", "string");

        		var CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        		var DT_FROM = this.dsSearch.getColumn(0, "DT_REQUEST_FR");
        		var DT_TO = this.dsSearch.getColumn(0, "DT_REQUEST_TO");

        		this.dsReport.clearData();
        		var nrow = this.dsReport.addRow();
        		this.dsReport.setColumn(nrow, "CD_CORP"      , CD_CORP);
        		this.dsReport.setColumn(nrow, "DT_REQUEST_FR", DT_FROM);
        		this.dsReport.setColumn(nrow, "DT_REQUEST_TO", DT_TO);

        		var inProc		= "_dsProc";
        		var inParam 	= "";										// 조회SP이외 사용할 정보
        		//var inParam 	= "params=dsRptList";						// 조회SP이외 사용할 정보
        		var inData      = "report=dsReport";
        		//var inData      = "";
        		var reportpath = "/da/dab/DAB_ENGINEERS_LIST.ozr";

        		gfnOpenReport(this, reportpath, inProc, inParam, inData);
        		return false;
        	}

        }


        this.fnReturnSave = function(vRow) {

        	this.dsApprove.clearData();
        	var nrow = this.dsApprove.addRow();
        	this.dsApprove.setColumn(nrow, "CD_CORP", this.dsList.getColumn(vRow, "CD_CORP"));
        	this.dsApprove.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(vRow, "ID_PERSON"));
        	this.dsApprove.setColumn(nrow, "NO_ID", this.dsList.getColumn(vRow, "NO_ID"));
        	this.dsApprove.setColumn(nrow, "NO_BUSU", 0);
        	this.dsApprove.setColumn(nrow, "TY_GUBUN", "RETURN");
        	this.dsApprove.setColumn(nrow, "GR_SEARCH", this.AuthClient.GR_SEARCH );
        	this.dsApprove.setColumn(nrow, "GR_DEPT", this.AuthClient.GR_DEPT);
        	this.dsApprove.setColumn(nrow, "ID_LOGIN",  this.AuthClient.ID_USER);

        	var strSvcId = "approval";
        	var inData   = "approval=dsApprove";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	if (this.dsApprove.rowcount == 0) return;

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function() {
        	return false;
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 발급신청
        this.fnCertiRequest = function(obj,e) {
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnValidCallback");
        		return false;
        	}
        //
        // 	if (this.FormInfo.GR_SEARCH > "2") {
        // 		if (this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)) {
        // 			this.gfnAlert("사번을 입력하세요.");
        // 			this.ccfID_SABUN.form.CDTextBox.setFocus();
        // 			return false;
        // 		}
        // 	}

        	var param = {};
        	param.CD_CORP = this.AuthClient.CD_CORP;		// 법인코드
        	param.DS_CORP = this.AuthClient.DS_CORP;
        	param.ID_SABUN = this.AuthClient.ID_USER;		// 성명
        	param.DS_HNAME = this.AuthClient.DS_HNAME;
        	param.ID_PERSON = this.AuthClient.ID_PERSON;
        	param.CD_DEPT = this.AuthClient.CD_DEPT;		// 부서
        	param.DS_DEPT = this.AuthClient.DS_DEPT;
        	param.NO_ID = "";
        	param.NO_APRV = "";
        	param.TY_FLAG = "I";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_ENGINEERS_DLG", "fnCertiRequestCallback", param);
        }

        this.fnCertiRequestCallback = function (strId, val) {
        	if (val == true) {
        		this.FormBtns.Select.click();
        	}
        };

        // 사업부담당자 승인
        this.fnApprovalDivision = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("승인처리할 행을 선택하세요.");
        		return false;
        	}

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") > 1){
        		this.gfnAlert("승인처리할 행을 하나씩 선택하세요.");
        		return false;
        	}

        	var nChkRow = this.dsList.findRow( "CHK", 1 );
        	var param = {};
        	param.CD_CORP = this.dsList.getColumn(nChkRow, "CD_CORP");
        	param.DS_CORP = this.dsList.getColumn(nChkRow, "DS_CORP");
        	param.ID_SABUN = this.dsList.getColumn(nChkRow, "ID_SABUN");
        	param.DS_HNAME = this.dsList.getColumn(nChkRow, "DS_HNAME");
        	param.ID_PERSON = this.dsList.getColumn(nChkRow, "ID_PERSON");
        	param.CD_DEPT = this.dsList.getColumn(nChkRow, "CD_DEPT");
        	param.DS_DEPT = this.dsList.getColumn(nChkRow, "DS_DEPT");
        	param.NO_ID = this.dsList.getColumn(nChkRow, "NO_ID");
        	param.NO_APRV = this.dsList.getColumn(nChkRow, "NO_APRV");
        	param.NO_BUSU = this.dsList.getColumn(nChkRow, "NO_BUSU_REQUEST");
        	param.FILE_CNT = this.dsList.getColumn(nChkRow, "FILE_CNT");
        	param.TY_GUBUN = "DIVISION";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_ENGINEERS_APPROVE_DLG", "fnApproveCallback", param);
        }
        // 인사부 담당자 승인
        this.fnApproval = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("승인처리할 행을 선택하세요.");
        		return false;
        	}

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") > 1){
        		this.gfnAlert("승인처리할 행을 하나씩 선택하세요.");
        		return false;
        	}

        	var nChkRow = this.dsList.findRow( "CHK", 1 );
        	var param = {};
        	param.CD_CORP = this.dsList.getColumn(nChkRow, "CD_CORP");
        	param.DS_CORP = this.dsList.getColumn(nChkRow, "DS_CORP");
        	param.ID_SABUN = this.dsList.getColumn(nChkRow, "ID_SABUN");
        	param.DS_HNAME = this.dsList.getColumn(nChkRow, "DS_HNAME");
        	param.ID_PERSON = this.dsList.getColumn(nChkRow, "ID_PERSON");
        	param.CD_DEPT = this.dsList.getColumn(nChkRow, "CD_DEPT");
        	param.DS_DEPT = this.dsList.getColumn(nChkRow, "DS_DEPT");
        	param.NO_ID = this.dsList.getColumn(nChkRow, "NO_ID");
        	param.NO_APRV = this.dsList.getColumn(nChkRow, "NO_APRV");
        	param.NO_BUSU = this.dsList.getColumn(nChkRow, "NO_BUSU_REQUEST");
        	param.FILE_CNT = this.dsList.getColumn(nChkRow, "FILE_CNT");
        	param.TY_GUBUN = "HR";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_ENGINEERS_APPROVE_DLG", "fnApproveCallback", param);
        }


        this.fnApproveCallback = function (strId, val) {
        	if (val == true) {
        		this.FormBtns.Select.click();
        	}
        };

        //반려
        this.fnReturn = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("승인처리할 행을 선택하세요.");
        		return false;
        	}
        	var nChkRow = this.dsList.findRow( "CHK", 1 );

        	if (!(this.dsList.getColumn(nChkRow, "NO_APRV") == '1' || this.dsList.getColumn(nChkRow, "NO_APRV") == '2'))
        	{
        		this.gfnAlert("승인완료 건은 반려할 수 없습니다.");
        		return false;
        	}

            this.gfnConfirm("반려 처리 하시겠습니까?", "fnAppr_callback" );

        }

        this.fnAppr_callback = function (strId, val) {
        	if (val == true) {
        		//trace("strId =>" + strId);
        		var nChkRow = this.dsList.findRow( "CHK", 1 );
        		this.fnReturnSave(nChkRow);
        	}
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if (svcID == "delete") {
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "approval") {
        		if (errorCode == 0) {
        			this.gfnAlert("처리 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "selectRpt") {		// 건설 기술인 경력확인 발급대장
        		if (this.dsRptList.rowcount > 0) {

        			this.fnPrintEng();
        		} else {
        			this.gfnAlert("출력할 자료가 없습니다.");
        			return;
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_DEPT") {
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.gfnNvl(this.AuthClient.CD_DEPT, ""));
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value, "%"));
        		dsUserParam.setColumn(nrow, "YN_DELETE", "N");
        	} else if (id == "ccfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , "");
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value, "%"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if (id == "ccfCD_CORP") {
        		this.ccfID_SABUN.form.fnCodeFindClear();
        		this.ccfCD_DEPT.form.fnCodeFindClear();
        	} else if (id == "ccfID_SABUN") {
        		this.ccfCD_DEPT.form.fnCodeFindClear();
        		this.divSearch.form.edtID_PERSON.set_value("");
        		if (arr.length > 0) {
        			this.dsSearch.setColumn(0, "ID_PERSON", arr[0]["ID_PERSON"] );
        			this.dsSearch.setColumn(0, "CD_DEPT"  , arr[0]["CD_DEPT"] );
        			this.dsSearch.setColumn(0, "DS_DEPT"  , arr[0]["DS_DEPT"] );
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	var gridIdx = this.dxGrid.currentrow;
        	switch (id) {
        	case "CD_BAL_POSITION":	// 발급정보_직급	DAX_CFCOMMONCODE
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");
        		break;
        	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	switch (id) {
        	case "CD_BAL_POSITION":     // 발급정보_직급	DAX_CFCOMMONCODE
        		this.dsList.setColumn(this.dsList.rowposition, "CD_BAL_POSITION", arr[0]["CD_CODE"]);
        		this.dsList.setColumn(this.dsList.rowposition, "DS_BAL_POSITION", arr[0]["DS_CODE"]);
        		break;
        	}
        	return true;
        };


        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		obj.oldrow = -1;
        		this.fnButtonCheck();
        	}
        };

        this.divData_objGrid_oncelldblclick = function(obj,e){
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var nIndex0 = this.divData.form.objGrid.getBindCellIndex( "body", "CHK"); //선택
        	if(e.cell == nIndex0) return;
        	if (this.gfnIsNull(this.dsList.getColumn(e.row, "ID_PERSON"))) return;

        	var param = {};
        	param.ID_PERSON = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON"), "");
        	param.NO_ID = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "NO_ID"), "");
        	param.CD_CORP = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"), "");
        	param.CD_DEPT = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"), "");
        	param.ID_SABUN = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"), "");
        	param.TY_FLAG = "U";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_ENGINEERS_DLG", "fnCertiRequestCallback", param);
        }


         this.fnGrid_ExpandUp = function(obj, e) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	//trace(" URL_PROOF=>" + colnm);
        	if(colnm == "URL_PROOF") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!

        		if(this.gfnGetFlag(this.dsList, e.row) == "I"){
        			this.gfnAlert("저장 후 파일첨부 진행.");
        			return false;
        		}
        		//trace(" this.FormInfo.GR_SEARCH=>" + this.FormInfo.GR_SEARCH);
        		var fileManager = {};
        		var cdGubun = "";
        		cdGubun = "DA90";
        		fileManager.CD_GUBUN = cdGubun;
        		fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, "NO_ID")];
        		var vreadonly = false;
        		if (this.FormInfo.GR_SEARCH == 1)
        		{
        			vreadonly = false;
        		} else {
        			vreadonly = true;
        		}
        		fileManager.IS_READONLY = vreadonly;
        		//trace(" vreadonly=>" + vreadonly);
        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		//this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF", "첨부");
        	}
        	this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF", "첨부(" + val.Cnt + ")");
        	this.dsList.set_enableevent(true);
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 조회 조건 변경시 초기화
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        /************************************************************************
         * 기타 함수
         ************************************************************************/
        this.fnReplace = function(orgText, fromSplit, toSplit){
        	if (this.gfnIsNull(orgText)) return "";

        	var newSplit = "";
        	if (!this.gfnIsNull(toSplit)) {
        		newSplit = toSplit;
        	}

        	return orgText.split(fromSplit).join(newSplit);
        }

        // 헤더의 높이를 변경한다.
        this.fnResizeHeader = function(grid, row, line) {
        // 	console.log('row: ', row);
        // 	console.log('line: ', line);
        	grid.setFormatRowProperty(row - 1, "size", this.dxGrid.getFormatRowProperty(0, "size") * line - (line * 8));
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboYN_APPROVE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.calDT_REQUEST_FR.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.calDT_REQUEST_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_ENGINEERS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
