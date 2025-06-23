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
            obj._setContents("<ColumnInfo><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_FROM\"/><Col id=\"DT_TO\"/><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"CD_DEPT\"/><Col id=\"DS_DEPT\"/><Col id=\"ID_SABUN\"/><Col id=\"DS_HNAME\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_LOAN_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_LOAN_SAVE</Col></Row><Row><Col id=\"TARGET\">approve</Col><Col id=\"SP\">DABPR_LOAN_APPROVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("5");
            obj.set_text("신청기간");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0.0","10.0","115","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TO","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_TO:0.0","10.0","115","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclDT_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","230","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_LOAN.xfdl", function() {
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
        	this.isDblClick = false;

        	// 그리드 생성 시점 차이때문에
        	// 화면 오픈 후 조회시 0건인 경우 필터로우가 생성되지 않아
        	// this.fnGrid_AfterInit()에서 this.fnSetInit() 호출
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
        	this.btnRequest        = this.gfnFormButtonAdd("Request"       , "fnRequest"); 		// 신청
        	this.btnApprove        = this.gfnFormButtonAdd("Approve"       , "fnApprove");    	// 승인
        	this.btnContrary       = this.gfnFormButtonAdd("Contrary"      , "fnContrary"); 	// 반려
        	this.btnRepay          = this.gfnFormButtonAdd("Repay"         , "fnRepay"); 	    // 상환
        	this.btnAprv  	       = this.gfnFormButtonAdd("Aprv"	       , "fnAprv"); 		// 결재상신 버튼
        	this.btnSlipQ          = this.gfnFormButtonAdd("SlipQ"         , "fnSlipQ"); 		// 대여전표조회 버튼
        	this.btnDocQ 	       = this.gfnFormButtonAdd("DocQ"          , "fnDocQ"); 		// 대여결재문서조회 버튼
        	this.btnSlipQ_REPAY    = this.gfnFormButtonAdd("SlipQ_REPAY"   , "fnSlipQ"); 		// 상환전표조회 버튼
        	this.btnDocQ_REPAY     = this.gfnFormButtonAdd("DocQ_REPAY"    , "fnDocQ"); 		// 상환결재문서조회 버튼

        	this.btnAprvCnc        = this.gfnFormButtonAdd("AprvCnc"       , "fnAprv"); 		// 취소결재상신 버튼
        	this.btnSlipCncQ       = this.gfnFormButtonAdd("SlipCncQ"      , "fnSlipQ"); 		// 취소전표조회 버튼
        	this.btnDocCncQ        = this.gfnFormButtonAdd("DocCncQ"       , "fnDocQ"); 		// 취소결재문서조회 버튼
        	this.btnSlipCncQ_REPAY = this.gfnFormButtonAdd("SlipCncQ_REPAY", "fnSlipQ"); 		// 취소전표조회 버튼
        	this.btnDocCncQ_REPAY  = this.gfnFormButtonAdd("DocCncQ_REPAY" , "fnDocQ"); 		// 취소결재문서조회 버튼
        	this.btnInit           = this.gfnFormButtonAdd("Init"          , "fnAprv"); 		// 결재상태초기화 버튼

        };

        // 버튼 활성/비활성 공통 처리
        this.fnButtonCheck = function (){
        	this.gfnBtnCheck(this.btnSlipQ	        , this.dsList);	// 대여전표조회
        	this.gfnBtnCheck(this.btnDocQ           , this.dsList);	// 대여결재문서조회
        	this.gfnBtnCheck(this.btnSlipQ_REPAY    , this.dsList);	// 상환전표조회
        	this.gfnBtnCheck(this.btnDocQ_REPAY     , this.dsList);	// 상환결재문서조회
        	this.gfnBtnCheck(this.btnSlipCncQ       , this.dsList);	// 대여취소전표조회
        	this.gfnBtnCheck(this.btnDocCncQ        , this.dsList);	// 대여취소결재문서조회
        	this.gfnBtnCheck(this.btnDocCncQ_REPAY  , this.dsList);	// 상환취소전표조회
        	this.gfnBtnCheck(this.btnSlipCncQ_REPAY , this.dsList);	// 상환취소결재문서조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP 	= this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT 	= this.divSearch.form.ccfCD_DEPT;
        	this.ccfID_SABUN    = this.divSearch.form.ccfID_SABUN;
        	this.ctclDT_FROM    = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO      = this.divSearch.form.ctclDT_TO;

        	this.dxGrid         = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.dxGrid.AfterInit = "fnGrid_AfterInit";	// AfterInit 은 반드시 gfnGridInit 전에 선언.
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_LOAN");
        	this.dxGrid.addEventHandler("oncelldblclick",this.dxGrid_oncelldblclick,this);
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	//코드파인드
        	this.ccfCD_DEPT.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";


        	this.bSelect= false;
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        };

        /*
         *	그리드 초기화
         */
        this.fnGrid_AfterInit = function(obj, e) {
        	if( this.FormInfo.GR_SEARCH == "9" ) {
        		this.dxGrid.setFormatColProperty( this.dxGrid.getBindCellIndex("body","ST_APRV"), "size", "0");
        		this.dxGrid.setFormatColProperty( this.dxGrid.getBindCellIndex("body","CD_TRADE"), "size", "0");
        		this.dxGrid.setFormatColProperty( this.dxGrid.getBindCellIndex("body","ST_APRV_CNC"), "size", "0");
        		this.dxGrid.setFormatColProperty( this.dxGrid.getBindCellIndex("body","CD_TRADE_CNC"), "size", "0");
        		this.dxGrid.setFormatColProperty( this.dxGrid.getBindCellIndex("body","ST_APRV_REPAY"), "size", "0");
        		this.dxGrid.setFormatColProperty( this.dxGrid.getBindCellIndex("body","CD_TRADE_REPAY"), "size", "0");
        		this.dxGrid.setFormatColProperty( this.dxGrid.getBindCellIndex("body","ST_APRV_CNC_REPAY"), "size", "0");
        		this.dxGrid.setFormatColProperty( this.dxGrid.getBindCellIndex("body","CD_TRADE_CNC_REPAY"), "size", "0");
        		this.dxGrid.set_autofittype("col");
        	}
        	// 그리드 생성 시점 차이때문에
        	// 화면 오픈 후 조회시 조회건수 0건인 경우 필터로우가 생성되지 않아 여기서 처리
        	this.fnSetInit();
        };

        /*
         * 초기화
         */
        this.fnSetInit = function() {
         	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0,"DT_FROM",this.gfnAddMonth(today,-1).substr(0,6)+"01");
        	this.dsSearch.setColumn(0,"DT_TO",today);
        	this.dsSearch.setColumn(0,"CD_CORP",this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0,"DS_CORP",this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.fnFitToContents();

        	if( this.FormInfo.GR_SEARCH == "9" ) {

        		this.dsSearch.setColumn(0,"ID_SABUN",this.AuthClient.ID_SABUN);
        		this.dsSearch.setColumn(0,"DS_HNAME",this.AuthClient.DS_HNAME);
        		//부서를 사번에 맞게 셋팅
        		this.ccfID_SABUN.form.fnCodeFindLoad();

        		this.ccfCD_CORP.form.set_readonly(true);
        		this.ccfCD_DEPT.form.fnFitToContents();
        		this.ccfCD_DEPT.form.set_readonly(true);
        		this.ccfID_SABUN.form.fnFitToContents();
        		this.ccfID_SABUN.form.set_readonly(true);
        	}
        	this.FormBtns.Select.click();
        	this.bSelect= true;
         };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
            this.dsSelect.addColumn("DT_FROM"  , "STRING");
        	this.dsSelect.addColumn("DT_TO"    , "STRING");
        	this.dsSelect.addColumn("CD_CORP"  , "STRING");
        	this.dsSelect.addColumn("CD_DEPT"  , "STRING");
        	this.dsSelect.addColumn("ID_SABUN" , "STRING");
        	this.dsSelect.addColumn("GR_SEARCH", "STRING");
        	this.dsSelect.addColumn("GR_DEPT"  , "STRING");
        	this.dsSelect.addColumn("ID_LOGIN" , "STRING");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK"    , "STRING");
        	this.dsSave.addColumn("ID_PERSON" , "INT");
        	this.dsSave.addColumn("CD_CORP"   , "STRING");
        	this.dsSave.addColumn("ID_SABUN"  , "STRING");
        	this.dsSave.addColumn("CD_LOAN"   , "STRING");
        	this.dsSave.addColumn("NO_SEQ"    , "INT");
        	this.dsSave.addColumn("AM_REQUEST", "BIGDECIMAL");
        	this.dsSave.addColumn("NO_REQUEST", "INT");
        	this.dsSave.addColumn("DS_REMARK" , "string");
        	this.dsSave.addColumn("ID_USER"   , "string");
        	this.dsSave.addColumn("GR_SEARCH" , "string");

        	this.dsApprove = new Dataset();
        	this.dsApprove.addColumn("ID_PERSON", "INT");
        	this.dsApprove.addColumn("CD_CORP"  , "STRING");
        	this.dsApprove.addColumn("ID_SABUN" , "STRING");
        	this.dsApprove.addColumn("CD_LOAN"  , "STRING");
        	this.dsApprove.addColumn("NO_SEQ"   , "INT");
        	this.dsApprove.addColumn("TY_STATUS", "STRING");
        	this.dsApprove.addColumn("DS_RETURN", "STRING");
        	this.dsApprove.addColumn("ID_USER"  , "STRING");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

            this.dsSelect.clearData();
            this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "DT_FROM"  , this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO"    , this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_DEPT"  , this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "ID_SABUN" , this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_DEPT"  , this.AuthClient.DS_DEPT);
        	this.dsSelect.setColumn(0, "ID_LOGIN" , this.AuthClient.ID_SABUN);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	//if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if( flag == "D" ) {
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "TY_WRK"   , "D");
        			this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        			this.dsSave.setColumn(nrow, "CD_CORP"  , this.dsList.getColumn(i, "CD_CORP"));
        			this.dsSave.setColumn(nrow, "ID_SABUN" , this.dsList.getColumn(i, "ID_SABUN"));
        			this.dsSave.setColumn(nrow, "CD_LOAN"  , this.dsList.getColumn(i, "CD_LOAN"));
        			this.dsSave.setColumn(nrow, "NO_SEQ"   , this.dsList.getColumn(i, "NO_SEQ"));
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

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclDT_FROM.setFocus();
        		}
        		this.gfnAlert("신청기간을 입력하세요.", "fnVaidateCallback");
        	}

        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclDT_TO.setFocus();
        		}
        		this.gfnAlert("신청기간을 입력하세요.", "fnVaidateCallback");
        	}

        	if (validate && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))) {
        		if (this.dsSearch.getColumn(0, "DT_FROM") >  this.dsSearch.getColumn(0, "DT_TO") ) {
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.ctclDT_FROM.setFocus();
        			}
        			this.gfnAlert("신청기간 종료일을 시작일보다 뒤의 날짜로 입력하세요.", "fnVaidateCallback");
        		}
        	}
        	return validate;
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 공조대출 신청 callback
        this.fnRequest_callback = function(svcID, val) {
        	if (val) {
        		this.FormBtns.Select.click();
        	}
        };
        // 공조대출 신청
        this.fnRequest = function(obj,e) {
        	console.log('fnRequest > ', obj);
        	console.log('fnRequest > ', e);
        	if (!this.gfnGridIsRow(this.dxGrid) && this.isDblClick) return false;

        	var param = {};
        	param.TY_WRK = "I";
        	param.TY_STATUS = "1";

        	if (this.isDblClick && !this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"ID_SABUN"))) {
        		param.TY_WRK     = "U";
        		param.CD_CORP    = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        		param.DS_CORP    = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
        		param.CD_DEPT    = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        		param.DS_DEPT    = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT");
        		param.ID_SABUN   = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        		param.DS_HNAME   = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        		param.ID_PERSON  = this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON");
        		param.CD_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "CD_ACCOUNT");
        		param.CD_LOAN    = this.dsList.getColumn(this.dsList.rowposition, "CD_LOAN");
        		param.DS_LOAN    = this.dsList.getColumn(this.dsList.rowposition, "DS_LOAN");
        		param.NO_SEQ     = this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ");
        		param.AM_REQUEST = this.dsList.getColumn(this.dsList.rowposition, "AM_REQUEST");
        		param.NO_REQUEST = this.dsList.getColumn(this.dsList.rowposition, "NO_REQUEST");
        		param.DS_REMARK  = this.dsList.getColumn(this.dsList.rowposition, "DS_REMARK");
        		param.NM_FILE    = this.dsList.getColumn(this.dsList.rowposition, "NM_FILE");
        		param.CNT_FILE   = this.dsList.getColumn(this.dsList.rowposition, "CNT_FILE");
        		param.TY_STATUS  = this.dsList.getColumn(this.dsList.rowposition, "TY_STATUS");
        	}
        	this.isDblClick = false;
        	console.log('fnRequest > param', param);
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LOAN_DLG", "fnRequest_callback", param);
        };

        // 공조대출 승인
        this.fnApprove = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nChkRow = this.dsList.findRow( "CHK", 1 );
        	if( nChkRow == -1 ) {
        		this.gfnAlert("승인할 행을 선택하세요.");
        		return false;
        	}
        	/*var cnt = this.dsList.getCaseCount("CHK == 1 && (TY_STATUS == '2' || TY_STATUS == '3')");
        	if( cnt > 0 ) {
        		this.gfnAlert("결재상태가 '승인','반려' 상태인 경우는 반려 불가능합니다.");
        		return false;
        	}*/
        	this.gfnConfirm("선택한 행을 승인 하시겠습니까?",  function (id, val){
        		if( val ){
        			this.dsApprove.clearData();

        			for (var i = 0; i < this.dsList.rowcount; i++) {
        				if( this.dsList.getColumn(i,"CHK") == 1 ) {
        					var nrow = this.dsApprove.addRow();
        					this.dsApprove.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        					this.dsApprove.setColumn(nrow, "CD_CORP"  , this.dsList.getColumn(i, "CD_CORP"));
        					this.dsApprove.setColumn(nrow, "ID_SABUN" , this.dsList.getColumn(i, "ID_SABUN"));
        					this.dsApprove.setColumn(nrow, "CD_LOAN"  , this.dsList.getColumn(i, "CD_LOAN"));
        					this.dsApprove.setColumn(nrow, "NO_SEQ"   , this.dsList.getColumn(i, "NO_SEQ"));
        					this.dsApprove.setColumn(nrow, "TY_STATUS", "2"); // 승인:2, 반려: 3
        					this.dsApprove.setColumn(nrow, "DS_RETURN", "");
        					this.dsApprove.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        				}
        			}
        			if (this.dsApprove.rowcount == 0) return;

        			var strSvcId    = "approve";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "approve=dsApprove";
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
        	});
        };


        // 공조대출 반려 callback
        this.fnContrary_callback = function(svcID, val) {
        	if(val) {
        		this.FormBtns.Select.click();
        	}
        };

        // 공조대출 반려
        this.fnContrary = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nChkRow = this.dsList.findRow( "CHK", 1 );
        	if( nChkRow == -1 ) {
        		this.gfnAlert("반려할 행을 선택하세요.");
        		return false;
        	}

        	/*var cnt = this.dsList.getCaseCount("CHK == 1 && (TY_STATUS == '2' || TY_STATUS == '3')");
        	if( cnt > 0 ) {
        		this.gfnAlert("결재상태가 '승인','반려' 상태인 경우는 반려 불가능합니다.");
        		return false;
        	}*/

        	this.dsParam.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if( this.dsList.getColumn(i,"CHK") == 1 ) {
        			var nrow = this.dsParam.addRow();
        			this.dsParam.copyRow(nrow,this.dsList,i);
        		}
        	}

        	var param = {};
        	param.targetId = "approveLoan";
        	param.dsList = this.dsParam.saveXML();
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_CONTRARY_DLG", "fnContrary_callback", param);
        };

        // 공조대출 상환 callback
        this.fnRepay_callback = function(svcID, val) {
        	if(val) {
        		this.FormBtns.Select.click();
        	}
        };

        // 공조대출 상환
        this.fnRepay = function(obj,e) {
        	var nChkRow = this.dsList.findRow( "CHK", 1 );
        	if( nChkRow == -1 ) {
        		this.gfnAlert("상환할 행을 선택하세요.");
        		return false;
        	}

        	if(this.dsList.getCaseCount("CHK == 1") > 1) {
        		this.gfnAlert("상환할 행을 1개만 선택하세요.");
        		return false;
        	}

        	if( this.dsList.getColumn(nChkRow,"TY_STATUS") != "2" ) {
        		this.gfnAlert("결재상태가 '승인' 상태인 경우만 상환 가능합니다.");
        		return false;
        	}

        	var param = {};
        	param.ID_PERSON = this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON");
        	param.CD_CORP   = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.ID_SABUN  = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.CD_LOAN   = this.dsList.getColumn(this.dsList.rowposition, "CD_LOAN");
        	param.NO_SEQ    = this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_REPAY_DLG", "fnRepay_callback", param);
        };

        /*
         * 결재상신 버튼
         */
        this.fnAprv= function(obj,e) {
        	if( this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"DT_START")) ){
        		this.gfnAlert("대출기간 시작일자가 존재하는 행을 선택하세요.");
        		return;
        	}

        	var param = {};
        	param.GUBUN = "01";
        	if( obj.id == "btnExt_AprvCnc" ) {
        		param.GUBUN = "02";
        	} else if ( obj.id == "btnExt_Init"){
        		param.GUBUN = "03" ;
        	}
        	param.YM_LOAN = this.dsList.getColumn(this.dsList.rowposition,"DT_START").substr(0,6);
        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition,"CD_CORP");
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition,"DS_CORP");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LOAN_AUTOSLIP_DLG", "fnPopupCallback", param);
        };

        //전표/취소전표 조회
        this.fnSlipQ = function (obj,e){
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var colName = "CD_TRADE";
        	if(obj.id == "btnExt_SlipCncQ"){
        		colName = "CD_TRADE_CNC";
        	}

        	if(obj.id == "btnExt_SlipQ_REPAY"){
        		colName = "CD_TRADE_REPAY";
        	}

        	if(obj.id == "btnExt_SlipCncQ_REPAY"){
        		colName = "CD_TRADE_CNC_REPAY";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, colName))){
        		return;
        	}

        	var param = {};
        	param.CD_CORP  = this.dsSearch.getColumn(0, "CD_CORP");
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, colName);

        	this.gfnPopIssueSlip(param);
        };

        //결재문서/취소결재문서 조회
        this.fnDocQ = function (obj,e){
           if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var colName = "NO_APRV";
        	if(obj.id == "btnExt_DocCncQ"){
        	  colName = "NO_APRV_CNC";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, colName))){
        	  return;
        	}

        	var param = {};
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.NO_APRV = this.dsList.getColumn(this.dsList.rowposition, colName);
        	this.FormBtns.Select.click();
        	this.gfnOpenDoorayAppr("AP_DOC_URL", param, "fnPopupCallback");
        };

        this.fnPopupCallback = function (svcId, sRtn)
        {
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
        		//this.dxGrid.set_treeinitstatus( "collapse,null" );

        	} else if(svcID == "save") {
        		this.FormBtns.Select.click();
        	} else if( svcID == "approve" ){
        		this.gfnAlert("승인이 완료되었습니다.");
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_DEPT") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			this.gfnAlert("법인을 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH); // 프로시저에서 실제 사용 안함
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0,"CD_DEPT")); // 프로시저에서 실제 사용 안함
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0,"CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "");	// 프로시저에서 실제 사용 안함
        	}

        	if (id == "ccfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.dsSearch.getColumn(0, "CD_DEPT"));
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
        			this.dsSearch.setColumn(0,"CD_DEPT",arr[0]["CD_DEPT"]);
        			this.dsSearch.setColumn(0,"DS_DEPT",arr[0]["DS_DEPT"]);
        			this.dsSearch.setColumn(0,"ID_SABUN",arr[0]["ID_SABUN"]);
        			this.dsSearch.setColumn(0,"DS_HNAME",arr[0]["DS_HNAME"]);

        		}
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dxGrid_oncelldblclick = function(obj,e)
        {
        	this.isDblClick = true;
        	this.fnRequest();
        };

        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	if(this.gfnGridIsRow(this.dxGrid) && e.row != e.oldrow) {
        		this.fnButtonCheck();
        	}
        };
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
        			this.dsSearch.setColumn(0,"CD_DEPT","");
        			this.dsSearch.setColumn(0,"DS_DEPT","");
        			this.dsSearch.setColumn(0,"ID_SABUN","");
        			this.dsSearch.setColumn(0,"DS_HNAME","");
        		}

        		if( e.columnid == "CD_DEPT" ) {
        			this.dsSearch.setColumn(0,"ID_SABUN","");
        			this.dsSearch.setColumn(0,"DS_HNAME","");
        		}

        		if(e.oldvalue != e.newvalue) {
        			this.gfnSetFormStatus(this);	// 폼상태 초기화
        			this.gfnGridClear(this.dxGrid);
        		}
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DAB_LOAN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
