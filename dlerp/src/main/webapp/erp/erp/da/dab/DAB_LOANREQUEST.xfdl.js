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
            this.set_titletext("공조대출 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"TY_END\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"ID_SABUN\"/><Col id=\"DS_HNAME\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_LOANREQUEST_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DABPR_LOANREPAYMENT_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row><Row><Col id=\"TARGET\">print</Col><Col id=\"SP\">DABPR_LOANREQUEST_PRINT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsST_APRV", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","901","11","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_taborder("4");
            obj.set_text("신청기간");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0","11","115","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TO","ctclDT_FROM:0","11","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_TO:0","11","115","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","2","10.0","72","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0","10.0","230","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","306","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:-20","10.0","222","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staST_APRV","ccfID_SABUN:-2","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("승인상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboST_APRV","staST_APRV:-4","10","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsST_APRV");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_END","800","14","117","15",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("대출완료포함");
            obj.set_value("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("대출신청정보");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","49.92%",null,"5","0",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ns-resize");
            obj.set_text("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","5",null,null,"0","1",null,null,null,null,this.divData.form.tabData.tab1.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab1.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","313",null,null,null,null,null,this.divData.form.tabData.tab1.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("상환내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","23",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form.divDataBottom.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab1.form.divDataBottom.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("중도상환/상환기간변경 신청");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","0","5",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboST_APRV","value","dsSearch","ST_APRV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.chkYN_END","value","dsSearch","TY_END");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_LOANREQUEST.xfdl", function() {
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
        	this.fnSetParameter();
        	this.fnSetEvent();
        	this.fnSetCombo();
        	this.isDblClick = false;

        	// 그리드 생성 시점 차이때문에
        	// 화면 오픈 후 조회시 0건인 경우 필터로우가 생성되지 않아
        	// this.fnGrid_AfterInit()에서 this.fnSetInit() 호출

        	this.fnSetInit();

        	var colDsReturn = this.dxGrid.getBindCellIndex("body", "DS_RETURN");
        	this.dxGrid.setCellProperty("body",colDsReturn,"tooltiptext","bind:DS_RETURN");

        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {

        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnRequest        = this.gfnFormButtonAdd("btnRequest"    , "fnRequest"); 		// 대출신청
        	this.btnRepayment      = this.gfnFormButtonAdd("btnRepayment"  , "fnRepayment"); 	// 중도상환신청
            this.btnChange         = this.gfnFormButtonAdd("btnChange"     , "fnChange"); 	    // 상환기간변경신청
        	this.btnSimulation     = this.gfnFormButtonAdd("btnSimulation" , "fnSimulation");   // 대출시뮬레이션

        	this.btnAGTPRINT       = this.gfnFormButtonAdd("btnAGTPRINT"  , "fnAgreementPrint");  	 // 대출약정서출력
        	this.btnAGTFILE        = this.gfnFormButtonAdd("btnAGTFILE"  , "fnAGTFILE");
        	this.btnAfterFile      = this.gfnFormButtonAdd("btnAfterFile"  , "fnAfterFile");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP 	= this.divSearch.form.ccfCD_CORP;
        	this.ccfID_SABUN    = this.divSearch.form.ccfID_SABUN;
        	this.cboST_APRV     = this.divSearch.form.cboST_APRV;
        	this.chkYN_END      = this.divSearch.form.chkYN_END;

        	this.tabData		= this.divData.form.tabData;
        	this.tab1			= this.divData.form.tabData.tab1;
        	this.tab2			= this.divData.form.tabData.tab2;

        	this.dxGrid         = this.divData.form.tabData.tab1.form.divDataTop.form.objGrid;
        	this.dxGridSub      = this.divData.form.tabData.tab1.form.divDataBottom.form.objGrid2;
        	this.dxGrid3        = this.divData.form.tabData.tab2.form.objGrid3;

        	this.divSplitter    = this.divData.form.tabData.tab1.form.divSplitter;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	//this.dxGrid.AfterInit = "fnGrid_AfterInit";	// AfterInit 은 반드시 gfnGridInit 전에 선언.
        	this.gfnGridInitAsync(this.dxGrid, this.dsList, "DA", "DAB_LOANREQUEST");
        	this.gfnGridInitAsync(this.dxGridSub, this.dsList2, "DA", "DAB_LOANREPAYMENT");
        	this.gfnGridInitAsync(this.dxGrid3, this.dsList3, "DA", "DAB_LOANREQUEST2");

        	this.dxGrid.addEventHandler("oncelldblclick",this.dxGrid_oncelldblclick,this);
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.dxGrid3.addEventHandler("oncelldblclick",this.dxGrid3_oncelldblclick,this);

        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	this.dxGrid.EnterCell = "fnGridEnterCell";

        	this.dxGrid3.EnterCell = "fnGridEnterCell";

        	//코드파인드
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	this.bSelect= false;
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);


        };
        /*
         * 초기화
         */
        this.fnSetInit = function() {

        	this.dsSearch.setColumn(0,"CD_CORP",this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0,"DS_CORP",this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.fnFitToContents();

        	if( this.FormInfo.GR_SEARCH == "9" ) {

        		this.dsSearch.setColumn(0,"ID_SABUN",this.AuthClient.ID_SABUN);
        		this.dsSearch.setColumn(0,"DS_HNAME",this.AuthClient.DS_HNAME);
        		this.dsSearch.setColumn(0,"TY_END","N");
        		this.dsSearch.setColumn(0,"ST_APRV","%");

        		this.ccfCD_CORP.form.set_readonly(true);

        		this.ccfID_SABUN.form.set_readonly(true);
        		this.divSearch.form.staID_SABUN.set_cssclass("sta_WF_SchLabelE");
        	    this.FormBtns.Select.click();
        	}
        	 this.bSelect= true;
        	 this.chkYN_END.set_value(true);
         };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_GUBUN" , "STRING");
        	this.dsSelect.addColumn("CD_CORP"  , "STRING");
        	this.dsSelect.addColumn("ID_SABUN" , "STRING");
        	this.dsSelect.addColumn("ST_APRV"  , "STRING");
        	this.dsSelect.addColumn("TY_END"   , "STRING");
        	this.dsSelect.addColumn("GR_SEARCH", "STRING");
        	this.dsSelect.addColumn("ID_USER"  , "STRING");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("NO_LOAN" , "STRING");
        	this.dsSelectSub.addColumn("CD_CORP"  , "STRING");
        	this.dsSelectSub.addColumn("DT_BASE"  , "STRING");
        	this.dsSelectSub.addColumn("YN_SALARY"  , "STRING");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if(!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnGridBeforeSelect(this.dxGrid3);

            this.dsSelect.clearData();
            this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_GUBUN"  , "1");
        	this.dsSelect.setColumn(0, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_SABUN" , this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "ST_APRV" , this.dsSearch.getColumn(0, "ST_APRV"));
        	this.dsSelect.setColumn(0, "TY_END" , (this.chkYN_END.value) ? "" : "N" );
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "ID_USER" , this.AuthClient.ID_SABUN);

        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(1, "TY_GUBUN"  , "2");
        	this.dsSelect.setColumn(1, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(1, "ID_SABUN" , this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(1, "ST_APRV" , this.dsSearch.getColumn(0, "ST_APRV"));
        	this.dsSelect.setColumn(1, "TY_END" , (this.chkYN_END.value) ? "" : "N" );
        	this.dsSelect.setColumn(1, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(1, "ID_USER" , this.AuthClient.ID_SABUN);

            var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsList3=select1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        this.fnSelectSub = function (nRow)
        {
        	if(!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGridSub);

            this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "NO_LOAN"  , this.dsList.getColumn(nRow, "NO_LOAN"));
        	this.dsSelectSub.setColumn(0, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectSub.setColumn(0, "YN_SALARY"  , "Y");
        	this.dsSelectSub.setColumn(0, "DT_BASE"  , "");

            var strSvcId    = "selectSub";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub";
        	var outData     = "dsList2=selectSub0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {

        	// 멀티시트 샘플
        	var arrGrid = [this.dxGrid, this.dxGridSub, this.dxGrid3];
        	var arrSheetName = ["대출신청정보", "상환내역", "중도상환기간변경신청"];
        	var sFileName = "사내대출신청";

        	// 1 (시트명: sheet1,sheet2.. 사용, 파일명: 화면명_날짜)
        	this.gfnExcelExportMulti(arrGrid, arrSheetName, sFileName);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	// 공통에서 필수 빈값 체크 후 focus 이동. 필수CSS 선언.

        	var validate = true;
        	return validate;
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 대출 신청
        this.fnRequest = function(nrow) {


        	var fndRow = this.dsList.findRow("CHK", 1);

        	if (this.isDblClick == false)  // 신규
        	{
        		var param = {};
        		param.TY_WRK = "I";
        		param.TY_STATUS = "01";
        		param.GR_SEARCH = this.FormInfo.GR_SEARCH;
        	} else {           // 수정
        		var param = {};
        		param.TY_WRK     = "U";
        		param.CD_CORP    = this.dsSearch.getColumn(0, "CD_CORP");
        		param.ID_SABUN   = this.dsList.getColumn(nrow, "ID_SABUN");
        		param.NO_LOANREQUEST = this.dsList.getColumn(nrow, "NO_LOANREQUEST");
        	}

        	this.isDblClick = false;
        	trace('fnRequest > param', param);
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LOANREQUEST_DLG", "fnPopupCallback", param);
        };

        // 대출시뮬레이션
        this.fnSimulation = function(obj,e) {
        	var param = {};
        	param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        	param.ID_SABUN  = this.dsSearch.getColumn(0, "ID_SABUN");
        	param.DS_HNAME  = this.dsSearch.getColumn(0, "DS_HNAME");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LOANSIMULATION_DLG", "fnPopupCallback", param);
        };

        // 중도 상환 신청
        this.fnRepayment = function(nrow) {
        	//trace(" this.isDblClick=>" + this.isDblClick);
        	if(this.isDblClick) {

        		var param = {};
        		param.TY_WRK   = "U"
        		param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        		param.ID_SABUN  = this.dsList3.getColumn(nrow, "ID_SABUN");
        		param.NO_LOAN   = this.dsList3.getColumn(nrow, "NO_LOAN");
        		param.CD_LOAN    = this.dsList3.getColumn(nrow, "CD_LOAN");
        		param.NO_LOANREQUEST    = this.dsList3.getColumn(nrow, "NO_LOANREQUEST");
        		this.isDblClick = false;
        	} else {

        		var nChkRow = this.dsList.findRow( "CHK", 1 );
        		if( nChkRow == -1) {
        			this.gfnAlert("상환신청할 행을 선택하세요.");
        			return false;
        		}

        		if(this.dsList.getCaseCount("CHK == 1") > 1) {
        			this.gfnAlert("상환신청할 행을 1개만 선택하세요.");
        			return false;
        		}

        		if( this.dsList.getColumn(nChkRow,"ST_APRV") != "06" ) {
        			this.gfnAlert("승인상태가 '최종완료' 상태인 경우만 상환 신청 가능합니다.");
        			this.dsList.setColumn(nChkRow, "CHK", 0);
        			return false;
        		}
        		if( this.dsList.getColumn(nChkRow,"YN_END") == "Y" ) {
        			this.gfnAlert("상환완료된 대출입니다. 중도상환 신청 할 수 없습니다.");
        			this.dsList.setColumn(nChkRow, "CHK", 0);
        			return false;
        		}
        		var param = {};
        		param.TY_WRK   = "I"
        		param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        		param.ID_SABUN  = this.dsList.getColumn(nChkRow, "ID_SABUN");
        		param.NO_LOAN   = this.dsList.getColumn(nChkRow, "NO_LOAN");
        		param.CD_LOAN    = this.dsList.getColumn(nChkRow, "CD_LOAN");
        	}
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LOANREPAYMENT_DLG", "fnPopupCallback", param);
        	this.isDblClick = false;
        };
        //대출상환기간변경
        this.fnChange = function(nrow) {
        	//trace(" this.isDblClick=>" + this.isDblClick);
        	if(this.isDblClick) {

        		var param = {};
        		param.TY_WRK   = "U"
        		param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        		param.ID_SABUN  = this.dsList3.getColumn(nrow, "ID_SABUN");
        		param.NO_LOAN   = this.dsList3.getColumn(nrow, "NO_LOAN");
        		param.CD_LOAN    = this.dsList3.getColumn(nrow, "CD_LOAN");
        		param.NO_LOANREQUEST    = this.dsList3.getColumn(nrow, "NO_LOANREQUEST");
        		this.isDblClick = false;
        	} else {

        		var nChkRow = this.dsList.findRow( "CHK", 1 );
        		if( nChkRow == -1) {
        			this.gfnAlert("상환기간 변경 신청할 행을 선택하세요.");
        			return false;
        		}

        		if(this.dsList.getCaseCount("CHK == 1") > 1) {
        			this.gfnAlert("상환기간 변경 신청할 행을 1개만 선택하세요.");
        			return false;
        		}

        		if( this.dsList.getColumn(nChkRow,"ST_APRV") != "06" ) {
        			this.gfnAlert("승인상태가 '최종완료' 상태인 경우만 상환 기간 변경 신청 가능합니다.");
        			this.dsList.setColumn(nChkRow, "CHK", 0);
        			return false;
        		}
        		if( this.dsList.getColumn(nChkRow,"YN_END") == "Y" ) {
        			this.gfnAlert("상환완료된 대출입니다!. 상환기간 변경 신청 할 수 없습니다.");
        			this.dsList.setColumn(nChkRow, "CHK", 0);
        			return false;
        		}
        		var param = {};
        		param.TY_WRK   = "I"
        		param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        		param.ID_SABUN  = this.dsList.getColumn(nChkRow, "ID_SABUN");
        		param.NO_LOAN   = this.dsList.getColumn(nChkRow, "NO_LOAN");
        		param.CD_LOAN    = this.dsList.getColumn(nChkRow, "CD_LOAN");
        	}
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LOANCHANGE_DLG", "fnPopupCallback", param);
        	this.isDblClick = false;
        }
        this.fnPopupCallback = function (svcId, sRtn)
        {

        	this.FormBtns.Select.click();

        };
        // 악정서 출력
        this.fnAgreementPrint = function(obj,e)
        {

        	var nChkRow = this.dsList.findRow( "CHK", 1 );
        	if( nChkRow == -1) {
        		this.gfnAlert("대출약정서 출력 행을 선택하세요.");
        		return false;
        	}

        	var arrLoanRequest = [];
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i, "CHK") == 1){
        			if (this.dsList.getColumn(i, "ST_APRV")=="04" || this.dsList.getColumn(i, "ST_APRV")=="01"|| this.dsList.getColumn(i, "ST_APRV")=="02")
        			{
        				this.gfnAlert("대출 약정서를 출력할 수 없는 상태 입니다. 대출상태를 확인하세요");
        				return false;
        			}
        			arrLoanRequest.push(this.dsList.getColumn(i, "NO_LOANREQUEST"));

        		}
        	}

        	this.dsPrint = new Dataset();
        	this.dsPrint.addColumn("NO_LOANREQUEST" , "STRING");

        	this.dsPrint.clearData();

         	this.dsPrint.addRow();
         	this.dsPrint.setColumn(0, "NO_LOANREQUEST", arrLoanRequest.join(';'));

        	var inProc		= "_dsProc";
         	//var inParam 	= "params=dsList";						// 조회SP이외 사용할 정보
        	var inParam 	= "params=dsPrint";						// 조회SP이외 사용할 정보
        	var inData      = "print=dsPrint";

         	var reportpath  = "/da/dab/DAB_AGREEMENT.ozr";

         	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };

        this.fnAGTFILE = function(obj,e)
        {
        	if (this.dsList.rowcount <= 0) {
        		return false;
        	}

        	var nChkRow = this.dsList.findRow( "CHK", 1 );
        	if( nChkRow == -1) {
        		this.gfnAlert("대출약정서/보증서 첨부할 행을 선택하세요.");
        		return false;
        	}

        	if(this.dsList.getCaseCount("CHK == 1") > 1) {
        		this.gfnAlert("대출약정서/보증서 첨부 행을 1개만 선택하세요.");
        		return false;
        	}

        	if (this.dsList.getColumn(nChkRow, "ST_APRV") == "04" || this.dsList.getColumn(nChkRow, "ST_APRV")== "01" || this.dsList.getColumn(nChkRow, "ST_APRV")== "02" ) // 반려는 첨부안됨.
        	{
        		return false;
        	}

        	var cdGubun = "";
        	var cdDir = "";

        	cdGubun = "DAB2";
        	var fileManager = {};
        	fileManager.CD_GUBUN = cdGubun;
        	fileManager.CD_DIR = [this.dsList.getColumn(nChkRow, "NO_LOANREQUEST")];
        	//trace(" btnAGTFILE_onclick=>" + this.dsList.getColumn(nChkRow, "ST_APRV"));
        	if(this.dsList.getColumn(nChkRow, "ST_APRV") >= "03" ) {
        		fileManager.IS_READONLY = false;
        	} else {
        		fileManager.IS_READONLY = true;
        	}
        	fileManager.TXT_MESSAGE = "※대출약정서 자필서명후 첨부 , 보증증권 첨부"
        	trace("fileManager.CD_GUBUN :: " + fileManager.CD_GUBUN);
        	trace("fileManager.CD_DIR :: " + fileManager.CD_DIR);
        	trace("fileManager.IS_READONLY :: " + fileManager.IS_READONLY);

        	this.gfnFileManager(fileManager, "fnFileCallback2");
        }

        this.fnAfterFile = function(obj,e)
        {
            if (this.dsList.rowcount <= 0) {
        		return false;
        	}
        	var nChkRow = this.dsList.findRow( "CHK", 1 );
        	if( nChkRow == -1) {
        		this.gfnAlert("사후서류 첨부할 행을 선택하세요.");
        		return false;
        	}

        	if(this.dsList.getCaseCount("CHK == 1") > 1) {
        		this.gfnAlert("사후서류 첨부 행을 1개만 선택하세요.");
        		return false;
        	}

        	if (this.dsList.getColumn(nChkRow, "ST_APRV") == "04" || this.dsList.getColumn(nChkRow, "ST_APRV")== "01" || this.dsList.getColumn(nChkRow, "ST_APRV")== "02" )  // 반려는 첨부안됨.
        	{
        		return false;
        	}

        	var cdGubun = "";
        	var cdDir = "";

        	cdGubun = "DAB3";
        	var fileManager = {};
        	fileManager.CD_GUBUN = cdGubun;
        	fileManager.CD_DIR = [this.dsList.getColumn(nChkRow, "NO_LOANREQUEST")];
        	//trace(" btnAfterFile_onclick=>" + this.dsList.getColumn(0, "ST_APRV"));
        	if(this.dsList.getColumn(nChkRow, "ST_APRV") == "06" ) {
        		fileManager.IS_READONLY = false;
        	} else {
        		fileManager.IS_READONLY = true;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback2");
        }

        this.fnFileCallback2 = function(strID, val) {
        	this.FormBtns.Select.click();
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.gfnGridAfterSelect(this.dxGrid3);
        		this.fnSelectSub(0);
        		this.fnSetButtonEnable(this.tabData.tabindex);
        	} else if (svcID == "selectSub") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        	} else if(svcID == "save") {
        		this.FormBtns.Select.click();
        	} else if (svcID == "combo") {
        		this.cboST_APRV.set_index(0);

        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , "");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id,codeFindData) {
           	var arr = codeFindData;
        	if(id == "ccfID_SABUN") {
        		if(arr.length > 0) {
        			this.dsSearch.setColumn(0,"CD_CORP",arr[0]["CD_CORP"]);
        			this.dsSearch.setColumn(0,"DS_CORP",arr[0]["DS_CORP"]);
        			this.dsSearch.setColumn(0,"ID_SABUN",arr[0]["ID_SABUN"]);
        			this.dsSearch.setColumn(0,"DS_HNAME",arr[0]["DS_HNAME"]);

        		}
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridEnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	trace(" fnGridEnterCell=>" +colnm);
        	var objDs = obj.getBindDataset();
        	if (colnm == "CHK")
        	{
        		return true;
        	} else if (colnm == "DS_RETURN")
        	{
        		//trace(" fnGridEnterCell=>" +row);
        		this.fnSetMutilineReadonly(obj, row, cell);
        	}else if(objDs.getColumn(row, "ST_APRV")== "04"){
        		return false;
        	}else if(colnm == "URL_PROOF2" || colnm == "URL_PROOF3" ){
        		return true;
        	}else {
        		return false;
        	}
        }

        this.fnSetMutilineReadonly = function(obj, row, cell)
        {
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "DS_RETURN"), "edittype", "none");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "DS_RETURN"), "expandshow", "show");
        	var objDs = obj.getBindDataset();

        	objDs.set_enableevent(false);
        	for (var i = 0; i < objDs.rowcount; i++) {
        		objDs.setColumn(i, "MULTILINE_READONLY", "Y");
        		objDs.setColumn(i, "MULTILINE_EXCLUDE_COLUMNS", "");
        	}
        	objDs.set_enableevent(true);
        };

        this.dxGrid_oncelldblclick = function(obj,e)
        {
        	if (this.gfnGridIsRow(this.dxGrid)) {
        		this.isDblClick = true;
        		//trace(" dxGrid_oncelldblclick=>" + e.cell);

        		this.fnRequest(e.row);
        	}
        };

        this.dxGrid3_oncelldblclick = function(obj,e)
        {
        	if (this.gfnGridIsRow(this.dxGrid3)) {
        		this.isDblClick = true;

        		if(this.dsList3.getColumn(e.row, "TY_GUBUN")=="2")
        		{
        			this.fnRepayment(e.row);
        		} else
        		{
        			this.fnChange(e.row);
        		}
        	}
        };


        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	 if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		if (!this.gfnIsNull(this.dsList.getColumn(e.row, "NO_LOAN")))
        		{
        			this.fnSelectSub(e.row);
        		} else {
        			this.dsList2.clearData();
        		}
        		obj.oldrow = -1;
        		//this.fnButtonCheck();
        	}
        };



         this.fnGrid_ExpandUp = function(obj, e) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm == "URL_PROOF") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        		if(this.gfnGetFlag(this.dsList, e.row) == "I"){
        			this.gfnAlert("저장 후 파일첨부 진행하세요.");
        			return false;
        		}

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DAB1";
        		fileManager.CD_DIR = [this.dsList.getColumn(e.row, "NO_LOANREQUEST")];
        		fileManager.IS_READONLY = false;
        		this.gfnFileManager(fileManager, "fnGridFileCallback");
        	}else if (colnm == "URL_PROOF2")
        	{
        		var fileManager = {};
        		fileManager.CD_GUBUN = "DAB2";
        		fileManager.CD_DIR = [this.dsList.getColumn(e.row, "NO_LOANREQUEST")];
        		fileManager.IS_READONLY = false;
        		fileManager.TXT_MESSAGE = "※대출약정서 자필서명후 첨부 , 보증증권 첨부"
        		this.gfnFileManager(fileManager, "fnGridFileCallback2");
        	}
        	else if (colnm == "URL_PROOF3")
        	{
        		var fileManager = {};
        		fileManager.CD_GUBUN = "DAB3";
        		fileManager.CD_DIR = [this.dsList.getColumn(e.row, "NO_LOANREQUEST")];
        		fileManager.IS_READONLY = false;
        		this.gfnFileManager(fileManager, "fnGridFileCallback3");
        	}

        }
        this.fnGridFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 파일개수를 다시 셋팅
        	//trace("fnFileCallback strID =>" + strID);

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF", "첨부(" + val.Cnt + ")");
        	this.dsList.set_enableevent(true);
        };

        this.fnGridFileCallback2 = function(strID, val) {
            this.dsList.set_enableevent(false);
        	this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF2", "첨부(" + val.Cnt + ")");
        	this.dsList.set_enableevent(true);
        }
        this.fnGridFileCallback3 = function(strID, val) {
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF3", "첨부(" + val.Cnt + ")");
        	this.dsList.set_enableevent(true);
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	trace("this.bSelect = " + this.bSelect)
        	if(this.bSelect && e.oldvalue != e.newvalue) {
        		if( e.columnid == "CD_CORP" ) {
        			this.dsSearch.setColumn(0,"ID_SABUN","");
        			this.dsSearch.setColumn(0,"DS_HNAME","");
        		}

        		if(e.oldvalue != e.newvalue) {
        			this.gfnSetFormStatus(this);	// 폼상태 초기화
        			this.gfnGridClear(this.dxGrid);
        			this.gfnGridClear(this.dxGrid3);
        			this.gfnGridClear(this.dxGridSub);
        		}
        	}

        };

        this.divData_tabData_tab1_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divSplitter.set_top(e.clienty);
        		this.tab1.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.fnSetCombo = function ()
        {
           this.dsCombo = new Dataset();
           this.dsCombo.addColumn("TY_SEL"     , "string");
           this.dsCombo.addColumn("CD_PREFIX"  , "string");
           this.dsCombo.addColumn("CD_UPPREFIX", "string");

           this.dsCombo.addRow();
           this.dsCombo.setColumn(0, "TY_SEL"     , "A");
           this.dsCombo.setColumn(0, "CD_PREFIX"  , "LS");
           this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsST_APRV=combo0";
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

        this.divData_tabData_onchanged = function(obj,e)
        {
            trace(" e.postindex=>" + e.postindex );
        	this.fnSetButtonEnable(e.postindex);

        };

        this.fnSetButtonEnable = function (vTab)
        {
        	if(vTab == 1) {

        		this.btnRepayment.set_enable(false);
        		this.btnChange.set_enable(false);
        		this.btnAGTPRINT.set_enable(false);
        		this.btnAGTFILE.set_enable(false);
        		this.btnAfterFile.set_enable(false);
        	} else {
        		this.btnRepayment.set_enable(true);
        		this.btnChange.set_enable(true);
        		this.btnAGTPRINT.set_enable(true);
        		this.btnAGTFILE.set_enable(true);
        		this.btnAfterFile.set_enable(true);

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab1.addEventHandler("ondragmove",this.divData_tabData_tab1_ondragmove,this);
            this.divData.form.tabData.tab1.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
        };
        this.loadIncludeScript("DAB_LOANREQUEST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
