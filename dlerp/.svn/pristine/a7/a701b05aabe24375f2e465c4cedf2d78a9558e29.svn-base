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
            this.set_titletext("자금신청품의서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFBPR_REQUESTDTL_APRV_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">aprv_execute</Col><Col id=\"SP\">DFBPR_REQUEST_APRV_EXECUTE</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DFBPR_REQUESTDTL_APRV_UPDATE</Col></Row><Row><Col id=\"TARGET\">checkDate</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPTOPER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CASH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CASH", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">현금</Col></Row><Row><Col id=\"CD_CODE\">F</Col><Col id=\"DS_CODE\">외화</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">어음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_REQUEST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"DS_CODE\">신청</Col><Col id=\"CD_CODE\">Y</Col></Row><Row><Col id=\"DS_CODE\">미신청</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckAprv", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_REQUEST\" type=\"FLOAT\" size=\"256\"/><Column id=\"DT_REQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CURR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_REQUEST\"/></Row><Row><Col id=\"NO_REQUEST\">C</Col></Row><Row><Col id=\"NO_REQUEST\">F</Col></Row><Row><Col id=\"NO_REQUEST\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnCheckDate", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"110.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQ","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQ_FR","staDT_REQ:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQ00","ctclDT_REQ_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQ_TO","staDT_REQ00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_PAY","ctclDT_REQ_TO:40","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("현금구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_CASH","staTY_PAY:0","10.0","84","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTY_CASH");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","372","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","staCD_VENDOR:280","44","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_REQUEST","staCD_SYSTEM:0","44","85","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCD_REQUEST");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPTOPER","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("발행부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPTOPER","staCD_DEPTOPER:0.0","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DFX_CFACNTUNIT_GROUP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DFX_CFVENDOR");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BE","0","staCD_DEPTOPER:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BE","staCD_DEPT_BE:0.0","staCD_DEPTOPER:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DFX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staACC_CD00","372","staCD_DEPTOPER:10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCD_TRADE","staACC_CD00:0","staCD_DEPTOPER:10","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclDT_REQ_FR","value","dsSearch","DT_REQ_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_REQ_TO","value","dsSearch","DT_REQ_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboTY_CASH","value","dsSearch","TY_CASH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboYN_REQUEST","value","dsSearch","YN_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPTOPER.form.CDTextBox","value","dsSearch","CD_DEPTOPER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_DEPT_BE.form.CDTextBox","value","dsSearch","CD_DEPT_BE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.edtCD_TRADE","value","dsSearch","CD_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFB_REQUESTLIST_APRV.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.ynCheckDate = "Y" ; // 당일청구가능

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
        	this.fnSetCheckDate();

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_TRADE)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.dsSearch.setColumn(0, "CD_TRADE", this.getOwnerFrame().CD_TRADE);// this.edtCD_TRADE.set_value(this.getOwnerFrame().CD_TRADE);
        		this.dsSearch.setColumn(0, "DT_REQ_FR", this.getOwnerFrame().DT_REQ);
        	    this.dsSearch.setColumn(0, "DT_REQ_TO", this.getOwnerFrame().DT_REQ);
        		this.ccboYN_REQUEST.set_index(0);
        		this.FormBtns.Select.click();
        		if (nexacro.toNumber(this.grSearch) >= 7) {
        		   this.ccfCD_DEPTOPER.set_enable(false);
        		   this.ccfCD_DEPT_BE.set_enable(false);
        		   this.edtCD_TRADE.set_enable(false);
        		}
        	}else{
        	  if (nexacro.toNumber(this.grSearch) >= 7) {
        		this.ccfCD_DEPTOPER.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        		this.ccfCD_DEPTOPER.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.ccfCD_DEPTOPER.set_enable(false);
        	  }
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
           	this.FormBtns.Add.set_enable(false);
           	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {

        	//this.btnAccount = this.gfnFormButtonAdd("btnAccount", "fnAccount", "계좌관리"); // 거래처 계좌조회
        	this.btnSlipQ     = this.gfnFormButtonAdd("btnSlipQ"    , "fnSlipQ");		// 전표조회 버튼
        	this.btnAprv     = this.gfnFormButtonAdd("btnAprv"    , "fnAprv");			// 결재상신 버튼
        	this.btnDocQ     = this.gfnFormButtonAdd("btnDocQ"    , "fnAprvDocQ");		// 결재문서조회 버튼
        	this.btnInit     = this.gfnFormButtonAdd("btnInit"    , "fnAprvInit");		// 결재상태초기화 버튼
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;

        	this.ctclDT_REQ_FR = this.divSearch.form.ctclDT_REQ_FR;
        	this.ctclDT_REQ_TO = this.divSearch.form.ctclDT_REQ_TO;

        	this.ccfCD_DEPTOPER = this.divSearch.form.ccfCD_DEPTOPER;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.ccfCD_DEPT_BE = this.divSearch.form.ccfCD_DEPT_BE;

        	this.ccboTY_CASH = this.divSearch.form.ccboTY_CASH;
        	this.ccboYN_REQUEST = this.divSearch.form.ccboYN_REQUEST;

        	this.edtCD_TRADE = this.divSearch.form.edtCD_TRADE;

        	this.grSearch = this.FormInfo.GR_SEARCH;				// 권한
        	this.idGroup = this.FormInfo.ID_GROUP;					// 그룹코드(그룹ID)
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFB_REQUESTLIST_APRV");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	this.ccboYN_REQUEST.set_index(2);
        	this.ccboTY_CASH.set_index(0);

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_REQ_FR", this.gfnAddMonth(this.gfnGetDate(), -1));
        	this.dsSearch.setColumn(0, "DT_REQ_TO", today);

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPTOPER.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_BE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPTOPER.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT_BE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);


        	// 법인코드 init
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	// 권한체크
        	// 법인코드(1)/발의부서필수(7)
        	if (nexacro.toNumber(this.grSearch) >= 1) {
        		this.divSearch.form.staCD_CORP.set_textDecoration("underline");
        	}
        // 	if (nexacro.toNumber(this.grSearch) >= 7) {
        // 		this.ccfCD_DEPTOPER.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        // 		this.ccfCD_DEPTOPER.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        // 		this.ccfCD_DEPTOPER.set_enable(false);
        // 	}
        }


        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");		// 법인코드
        	this.dsSelect.addColumn("DT_REQ_FR", "string");	    // 회계일자
        	this.dsSelect.addColumn("DT_REQ_TO", "string");		// 회계일자
        	this.dsSelect.addColumn("CD_DEPTOPER", "string");	// 발의부서
        	this.dsSelect.addColumn("CD_DEPT_BE", "string");	// 귀속부서
        	this.dsSelect.addColumn("CD_VENDOR", "string");		// 거래처
        	this.dsSelect.addColumn("TY_CASH", "string");		// 현금구분
        	this.dsSelect.addColumn("CD_TRADE", "string");		// 전표번호
        	this.dsSelect.addColumn("YN_REQUEST", "string");    // 작성구분
            this.dsSelect.addColumn("GR_SEARCH", "string");		// 조회수준
        	this.dsSelect.addColumn("ID_USER", "string");		// 로그인사용자
        	this.dsSelect.addColumn("CD_DEPT", "string");		// 로그인부서

        	// 자금신청일 수정
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("NO_REQUEST", "bigdecimal");
        	this.dsSave.addColumn("DT_REQ", "string");
        	this.dsSave.addColumn("YN_CASH", "string");
        	this.dsSave.addColumn("NO_ACCOUNT", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("CD_BANK", "string");
        	this.dsSave.addColumn("ID_USER", "string");		// 로그인사용자


        	// 결재
        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("TY_WRK", "string");
        	this.dsApproval.addColumn("NO_REQUEST", "string");
        	this.dsApproval.addColumn("ID_APRV", "string");
        	this.dsApproval.addColumn("NO_APRV", "int");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_REQ_FR", this.dsSearch.getColumn(0, "DT_REQ_FR"));
        	this.dsSelect.setColumn(0, "DT_REQ_TO", this.dsSearch.getColumn(0, "DT_REQ_TO"));
        	this.dsSelect.setColumn(0, "CD_DEPTOPER", this.dsSearch.getColumn(0, "CD_DEPTOPER"));
        	this.dsSelect.setColumn(0, "CD_DEPT_BE", this.dsSearch.getColumn(0, "CD_DEPT_BE"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "TY_CASH", this.dsSearch.getColumn(0, "TY_CASH"));
        	this.dsSelect.setColumn(0, "YN_REQUEST", this.dsSearch.getColumn(0, "YN_REQUEST"));
        	this.dsSelect.setColumn(0, "CD_TRADE", this.dsSearch.getColumn(0, "CD_TRADE"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);


        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	trace("select");

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
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
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() { //20200313 추가
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "NO_REQUEST", this.dsList.getColumn(i, "NO_REQUEST"));
        				this.dsSave.setColumn(nrow, "DT_REQ", this.dsList.getColumn(i, "DT_REQ"));
        				this.dsSave.setColumn(nrow, "YN_CASH", this.dsList.getColumn(i, "YN_CASH"));
        				this.dsSave.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_ACCOUNT_GU"));
        				this.dsSave.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsOutput=save";
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

        	if (nexacro.toNumber(this.grSearch) >= 1) {
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        			this.gfnAlert("법인코드가 입력되지 않았습니다.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        	}

        	if (this.gfnIsNull(this.ctclDT_REQ_FR.value)) {
        		this.gfnAlert("회계일자(FROM)을 입력 하세요.");
        		this.ctclDT_REQ_FR.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclDT_REQ_TO.value)) {
        		this.gfnAlert("회계일자(TO)을 입력 하세요.");
        		this.ctclDT_REQ_TO.setFocus();
        		return false;
        	}

        	if ( !this.gfnIsNull(this.ctclDT_REQ_FR.value) && !this.gfnIsNull(this.ctclDT_REQ_TO.value) ) {
        		if ( this.ctclDT_REQ_FR.value > this.ctclDT_REQ_TO.value ) {
        			this.gfnAlert("회계일자가 잘못 입력 되었습니다..");
        			this.ctclDT_REQ_FR.setFocus();
        			return false;
        		}
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
        	if (svcID == "select") {

        		this.gfnGridAfterSelect(this.dxGrid);
        		this.dsCheckAprv.clearData();

        		//this.fnSetButton();
        	}
        	else if (svcID == "update" || svcID == "update2") {
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
        	}
        	else if(svcID == "insert") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "updateH") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "delete") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "savesub") {
        		if (errorCode == 0) {
        			this.FormBtns.SubSelect.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "combo") {
        		//  조회조건(완료여부)
        		var iRow = this.dsTY_CASH.insertRow(0);
        		this.dsTY_CASH.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_CASH.setColumn(iRow, "DS_CODE", "전체");

        		//this.ccboTY_PAY.set_index(0);
        		this.ccboTY_CASH.set_index(1);	// 현금

        	} else if (svcID =="checkDate") {
        		this.ynCheckDate = this.dsYnCheckDate.getColumn(0,"DS_CODE");
        		trace("ynCheckDate : " + this.ynCheckDate);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", "");
        	}
        	else if (id == "ccfCD_DEPTOPER") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	}
        	else if (id == "ccfCD_DEPT_BE") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	}
        	else if (id == "ccfCD_VENDOR") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "전체");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        }

        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");

        	// 계좌(현금)
        	if (id == "DFX_CFACCOUNTMATCH") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "TY_VENDOR"));
        		dsUserParam.setColumn(nrow, "CD_PAY", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
        		dsUserParam.setColumn(nrow, "TY_CASH", this.dsList.getColumn(this.dsList.rowposition, "YN_CASH"));
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	// 계좌(현금)
        	if (id == "DFX_CFACCOUNTMATCH") {
        	}


        	return true;
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnUpdateStatusExtendButton = function() {
        	var nrow = this.dsList.rowposition;
        	var bEnable = (nrow > 0) ? true : false;

        	this.btnAprv.set_enable(bEnable && this.dsList.getColumn(nrow, "BTN_APRV") == "Y");
        	this.btnDocQ.set_enable(bEnable && this.dsList.getColumn(nrow, "BTN_DOC_Q") == "Y");
        	this.btnInit.set_enable(bEnable && this.dsList.getColumn(nrow, "BTN_INIT") == "Y");
        }

         this.fnGrid_RowCellChanged = function(obj,e)
        {

        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var noslip = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP1");
        	if(noslip == "") {
        		this.btnSlipQ.set_enable(false);
        	}
        	else {
        		this.btnSlipQ.set_enable(true);
        	}
        	this.fnUpdateStatusExtendButton();
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);

        	}
        }
        // 당일청구가능 체크 여부
        this.fnSetCheckDate = function() {
            this.dsCheckDate = new Dataset();
        	this.dsCheckDate.addColumn("CD_SYSTEM", "string");
        	this.dsCheckDate.addColumn("CD_TYPE", "string");

        	this.dsCheckDate.addRow();
        	this.dsCheckDate.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCheckDate.setColumn(0, "CD_TYPE", "ZQ");

        	var strSvcId    = "checkDate";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "checkDate=dsCheckDate";
        	var outData     = "dsYnCheckDate=checkDate0";
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

        // 공통코드콤보
        this.fnSetCombo = function() {


        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "B7");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_CASH=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };



        this.fnValidUser = function(r) {
        	var msg = "";
        	var blnEmpty = true;

        	if (this.dsList.getColumn(r, "AM_REMAIN") + this.dsList.getColumn(r, "AM_REQUEST") < this.dsList.getColumn(r, "AM_CASH") + this.dsList.getColumn(r, "AM_NOTES")) {
        		msg += "청구금액이 청구가능금액을 초과하였습니다.\r\n";
        		blnEmpty = false;
        	}
        	if (this.dsList.getColumn(r, "AM_CASH") == 0 && this.dsList.getColumn(r, "AM_NOTES") == 0) {
        		msg += "청구할 금액(현금+어음)이 입력되지 않았습니다.\r\n";
        		blnEmpty = false;
        	}
        	if (this.dsList.getColumn(r, "AM_REMAIN") < this.dsList.getColumn(r, "AM_REQUEST") + this.dsList.getColumn(r, "AM_CASH") + this.dsList.getColumn(r, "AM_NOTES")) {
        		msg += "청구금액(현금+어음)은 (잔액-청구중)금액을 초과할수 없습니다.\r\n";
        		blnEmpty = false;
        	}


        	if (!blnEmpty) {
        		this.gfnAlert(msg);
        		return false;
        	}

        	return true;
        }

        this.fnSlipQ = function(obj,e)
        {
        	var param = {};

        	var no_slip = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP1");

        	if(no_slip == "" || this.gfnIsNull(no_slip))
        	{
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	param.CD_TRADE = no_slip;
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopCallBack", param);
        };

        this.fnPopCallBack = function(svcID, val) {

        }

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if( this.dsList.getColumn(this.dsList.rowposition, this.ucFlag) == "#" ) {
        		return;
        	}


        	this.fnSetButton();
        };

        // 계좌관리 popup
        this.fnAccount = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};
        	param.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition,"CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition,"DS_VENDOR");

        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFB_ACCOUNT", "", param);
        }

        /*
         *현금구분 : 전체
         *   AFTER_EDIT : AM_CASH   -> 어음 = 잔액 - 청구중금액 - AM_CASH
         *           AM_NOTES -> 현금 = 잔액 - 청구중금액 - AM_NOTES
         *현금구분 : 현금
         *   AFTER_EDIT : AM_CASH   -> 어음 = 0
         *현금구분 : 어음
         *   AFTER_EDIT : AM_NOTES   -> 현금 = 0
         */
        this.fnGrid_AfterEdit = function(obj,e) {
            if(e.columnid == "CHK") {
        	    var row = this.dsList.rowposition;
        		if (this.dsList.getColumn(row, this.ucFlag) == "U") {
        				this.gfnAlert("수정자료입니다. 저장 후 선택하세요.!!!");
        				this.dsList.setColumn(row, "CHK", 0);
        				return false;
        			}
        	    if (this.dsList.getColumn(row, "YN_APPR") == "N") {
        				this.gfnAlert("전표 미승인 자료입니다. 선택할 수 없습니다.!!!");
        				this.dsList.setColumn(row, "CHK", 0);
        				return false;
        			}

        // 		if (this.dsList.getColumn(row, "AM_BAEJUNG") <= 0 ) {
        // 				this.gfnAlert(" 자금청구할 금액이 없습니다. \n [신청금액]을 확인하세요.!!!");
        // 				return false;
        // 	    }

        		if (this.ynCheckDate == "N" && this.dsList.getColumn(this.dsList.rowposition, "DT_REQ") <= this.gfnGetDate()) {
        				this.gfnAlert("자금신청일은 당일 청구가 불가능합니다. 오늘 이후 날짜만 가능합니다.!!!");
        				this.dsList.setColumn(row, "CHK", 0);
        				return false;
        		}

        		if (this.dsList.getColumn(row, "CHK") == 1) {
        			if (!this.fnCheck_Aprv(row)) {
        				this.dsList.setColumn(row, "CHK", 0);
        				return false;
        			}
        		}
        		else {
        			this.fnCancel(row);
        		}
        	}
        }
        this.dsList_cancolumnchange = function(obj,e)
        {
        	if( this.dsList.getColumn(this.dsList.rowposition, this.ucFlag) == "#" ) {
        		return;
        	}

        	this.fnSetButton();
        	return true;
        };


        this.fnCancel = function(row) {
        	if (this.dsCheckAprv.rowcount == 0) {
        		return false;
        	}

        	for(var i = 0; i < this.dsCheckAprv.rowcount; i++) {
        		if (this.dsCheckAprv.getColumn(i, "NO_REQUEST") == this.dsList.getColumn(row, "NO_REQUEST"))
        		{
        			this.dsCheckAprv.deleteRow(i);
        			break;
        		}
        	}

        	return true;
        }

        this.fnCheck_Aprv = function(row) {

        	var arrChk = [];
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == 1) {
        			arrChk.push(i);
        		}
        	}

        	if (this.dsCheckAprv.rowcount > 0) {
        		var rcnt = this.dsCheckAprv.rowcount;
        		if (this.dsCheckAprv.getColumn(rcnt-1, "CD_CURR") != this.dsList.getColumn(row, "CD_CURR")) {
        			this.gfnAlert("이전에 선택하신 내역의 [신청화폐]와\n현재 선택하신 내역의 [신청화폐]가 동일하지 않습니다.\n[신청화폐]가 동일한 내역만 함께 선택이 가능합니다.!!!");
        			return false;
        		}
        		if (this.dsCheckAprv.getColumn(rcnt-1, "DT_REQ") != this.dsList.getColumn(row, "DT_REQ")) {
        			this.gfnAlert("이전에 선택하신 내역의 [자금신청일자]와\n현재 선택하신 내역의 [자금신청일자]가 동일하지 않습니다.\n[신청일자]가 동일한 내역만 함께 선택이 가능합니다!!!");
        			return false;
        		}
        	}

        	var r = this.dsCheckAprv.addRow();
        	this.dsCheckAprv.setColumn(r, "NO_REQUEST", this.dsList.getColumn(row, "NO_REQUEST"));
        	this.dsCheckAprv.setColumn(r, "DT_REQ", this.dsList.getColumn(row, "DT_REQ"));
        	this.dsCheckAprv.setColumn(r, "CD_CURR", this.dsList.getColumn(row, "CD_CURR"));

        	return true;
        }


         /************************************************************************
         * 전자결재
         ************************************************************************/
         // 결재상신 버튼
        this.fnAprv = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+ this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("자금신청 품의 " + obj.text + " 대상을 체크하십시오.");
        		return;
        	}

        // 	if (this.dsList.getColumn(row, "ST_APRV") >= "1" && this.dsList.getColumn(row, "ST_APRV") <= "4") {
        // 		this.gfnAlert("자금신청품의서 결재 진행중 자료입니다. 선택할 수 없습니다.!!!");
        // 		this.dsList.setColumn(row, "CHK", 0);
        // 		return false;
        // 	}

        	this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        		if(isOk == false) return;
        		// ID_APRV: this.AuthClient.ID_SABUN,
        		var initParam = {
        			CD_CORP: this.ccfCD_CORP.form.CDTextBox.value,
        			ID_AP_TYPE: "DFB02",
        			TY_WRK: "APRV",
        			ID_APRV: this.AuthClient.ID_SABUN,
        			TT_DOC: "자금 신청 품의서",
        			CD_CORP_SUFFIX : this.gfnGetConfig("DZ" , "CD_CORP_SUFFIX"),
        		}
        		this.gfnAprv(initParam, "fnAprvCallback", "APRV");
        	});
        }

        // 결재문서조회 버튼
        this.fnAprvDocQ = function(obj, e) {
        	var cd_corp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	var no_aprv = this.dsList.getColumn(this.dsList.rowposition, "NO_APRV");
        	var no_doc = this.dsList.getColumn(this.dsList.rowposition, "NO_DOC");

        	if(this.gfnIsNull(no_aprv) || this.gfnIsNull(no_doc)){
        		return;
        	}

        	var oParams = {
        		CD_CORP: cd_corp,
        		NO_APRV: no_aprv,
        	}

        	trace("CD_CORP->" + cd_corp);
        	trace("NO_APRV->" + no_aprv);

        	this.gfnAprvDoc(oParams, this.fnAprvDocQCallback);
        }

        this.fnAprvDocQCallback = function() {
        	console.log('fnAprvDocQCallback');
        }

        // 결재상태초기화 버튼
        this.fnAprvInit = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        		if (isOk == false) {
        			return;
        		}
        		this.fnAprvCallback("APRVINIT", isOk);
        	});

        }

        this.fnAprvMsg = function(obj) {
        	var nCnt = this.dsList.getCaseCount("CHK == '1' && "+ this.ucFlag+" != '#'");
        	var msg = "자금신청 품의 "+nCnt+"건에 대하여\n";
        	msg += "" + obj.text + " 하시겠습니까?";

        	return msg;
        }

        // 결재상신 버튼 콜백
        // 결재상태초기화 버튼 콜백
        this.fnAprvCallback = function(strId, val) {

        	this.dsApproval.clearData();
        	this.dsApproval.addRow();

        	var arrNoRequest = [];
        	//var arrSeqAllot = [];

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) != '#' && this.dsList.getColumn(i, "CHK") == 1){
        			arrNoRequest.push(this.dsList.getColumn(i, "NO_REQUEST"));
        		}
        	}

        	this.dsApproval.setColumn(0, "TY_WRK",  strId);
        	this.dsApproval.setColumn(0, "NO_REQUEST", arrNoRequest.join(';'));
        	this.dsApproval.setColumn(0, "ID_APRV", this.AuthClient.ID_SABUN);
        	if (strId == "APRV") {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsAprvOut.getColumn(0, "NO_APRV"));
        	} else {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsList.getColumn(this.dsList.rowposition, "NO_APRV"));
        	}

        	trace("결재상신 버튼 콜백!!! ->" + this.dsApproval.saveXML());

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_REQ_FR.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_REQ_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ccboTY_CASH.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ccboYN_REQUEST.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.edtCD_TRADE.addEventHandler("onchanged",this.fnAfterCDTextChanged,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("DFB_REQUESTLIST_APRV.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
