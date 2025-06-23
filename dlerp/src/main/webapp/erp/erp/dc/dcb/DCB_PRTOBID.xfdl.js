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
            this.set_titletext("발주요청현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCOLUMN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">전체</Col><Col id=\"CODE\">A</Col></Row><Row><Col id=\"CODE\">D</Col><Col id=\"VALUE\">발주대기</Col></Row><Row><Col id=\"VALUE\">승인요청</Col><Col id=\"CODE\">B</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">승인완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_PRTOBIDLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">init</Col><Col id=\"SP\">DCBPR_PREORDERPLAN_APPROVE_INIT</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DCBPR_PREORDERPLAN_APPROVE_CANCEL</Col></Row><Row><Col id=\"SP\">DCBPR_PREORDERPLAN_APPROVE_OK</Col><Col id=\"TARGET\">exec</Col></Row><Row><Col id=\"TARGET\">cancel2</Col><Col id=\"SP\">DCBPR_PREORDERPLAN_APPROVE_CANCEL2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"TY_GUBUN\">B</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("crdoCOLUMN","0.0","10.0","230","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCOLUMN");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("입찰중");
            obj.set_value("B");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","crdoCOLUMN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("AutoSet").set("false");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE00","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("발주기간");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal_STYMD","staCD_SITE00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","cal_STYMD:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal_ENYMD","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.crdoCOLUMN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cal_STYMD","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cal_ENYMD","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_PRTOBID.xfdl", function() {
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

        	this.fnAllBtnSetEnable(false);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        	//this.btnOrderDetail = this.gfnFormButtonAdd("btnOrderDetail", "fnOrderDetail");
        	this.btnOrderSite = this.gfnFormButtonAdd("btnOrderSite", "fnOrderSite");
        	this.btnApprove = this.gfnFormButtonAdd("btnApprove", "fnApprove");
        	this.btnApproveCancel = this.gfnFormButtonAdd("btnApproveCancel", "fnApproveCancel");
        	this.btnApproveCancel2 = this.gfnFormButtonAdd("btnApproveCancel2", "fnApproveCancel2");
        	this.btnApproveInit = this.gfnFormButtonAdd("btnApproveInit", "fnApproveInit");
        	this.btnReqETC = this.gfnFormButtonAdd("btnReqETC", "fnReqETC");
        	this.btnRecommend = this.gfnFormButtonAdd("btnRecommend", "fnRecommend");
        	this.btnJoinExplain = this.gfnFormButtonAdd("btnJoinExplain", "fnJoinExplain");
        	this.btnOffBid = this.gfnFormButtonAdd("btnOffBid", "fnOffBid");
        	this.btnOnBid = this.gfnFormButtonAdd("btnOnBid", "fnOnBid");
        	this.btnAppCont = this.gfnFormButtonAdd("btnAppCont", "fnAppCont");
        	this.btnOrderDetailSearch = this.gfnFormButtonAdd("btnOrderDetailSearch", "fnOrderDetailSearch");
        	this.btnPritem = this.gfnFormButtonAdd("btnPritem", "fnPritem");
        	this.btnPrEdit = this.gfnFormButtonAdd("btnPrEdit", "fnPrEdit");
        	if(this.FormInfo.DS_PARAM == "MM") {
        		this.btnCreat = this.gfnFormButtonAdd("btnCreat", "fnCreat");
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	if(this.FormInfo.DS_PARAM == "SU") {
        		this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCB_PRTOBID");
        	} else {
        		this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DCB_PRTOBID_DM");
        	}
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("ID_DAM", "string");
        	this.dsSelect.addColumn("TY_SYS", "string");

        	this.dsCancel = new Dataset();
        	this.dsCancel.addColumn("CD_SITE", "string");
        	this.dsCancel.addColumn("NO_BID", "string");
        	this.dsCancel.addColumn("ID_USER", "string");
        	this.dsCancel.addColumn("TY_COSMI", "string");
        	this.dsCancel.addColumn("NO_PR", "string");

        	this.dsInit = new Dataset();
        	this.dsInit.addColumn("CD_SITE", "string");
        	this.dsInit.addColumn("NO_BID", "string");
        	this.dsInit.addColumn("NO_PR", "string");
        	this.dsInit.addColumn("ID_USER", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("NO_BID", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("TY_COSMI", "string");
        	this.dsExec.addColumn("TY_BID", "string");
        	this.dsExec.addColumn("CD_VENDOR", "string");
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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));	//발주기간
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "ID_DAM",  this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "TY_SYS", this.FormInfo.DS_PARAM);

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
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
        	var validate = true;

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
         /*
         콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		if (errorCode == 0) {
        			this.gfnGridAfterSelect(this.dxGrid);

        			this.fnBtnCheckAll();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "init") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "cancel") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	 if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.fnBtnCheckAll();
        		obj.oldrow = -1;
        	}
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         /*
        //발주내역
        this.fnOrderDetail = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {

        	var param = {};

        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        	param.NO_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT");
        	param.DS_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen("DWA", "DWA_SILHENGTOHADO", "fnOrderDetail_callback", param);
        }

        this.fnOrderDetail_callback = function(svcID, value)
        {
        	if(value == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }
        */

        //하도구매요청
        this.fnOrderSite = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        	param.NO_BID = this.dsList.getColumn(this.dsList.rowposition, "NO_PR");
        	param.DS_SUBCON = this.dsList.getColumn(this.dsList.rowposition, "DS_PR");
        	param.DS_PARAM = this.FormInfo.DS_PARAM;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_ORDERPLANSR_SITE", "fnOrderSite_callback", param);
        }

        //접수승인
        this.fnApprove = function(obj,e) {
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        //
        // 	var param = {};
        //
        // 	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        // 	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        // 	param.NO_BID = this.dsList.getColumn(this.dsList.rowposition, "NO_PR");
        // 	param.DS_SUBCON = this.dsList.getColumn(this.dsList.rowposition, "DS_PR");
        //
        // 	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DCB_PREORDERPLANHQAPPRDLG", "fnApprove_Select", param, 420, 220);


        	var chkRow = this.dsList.findRow("CHK","1");

        	if(this.gfnGetFlag(this.dsList, chkRow) == "#")
        	{
        		chkRow = this.dsList.findRow("CHK","1", chkRow+1);
        	}

        	if(chkRow < 0){
        		this.gfnAlert("선택된 행이 없습니다.");
        		return false;
        	}

        	var param = {};

        	var no_bid = "";
        	var count = 0;
        	for(var i =0;i < this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i , "CHK") == "1" && this.gfnGetFlag(this.dsList, i) != "#"){
        			if(count < 1)
        				{
        					param.CD_SITE = this.dsList.getColumn(i, "CD_SITE");
        					param.DS_SITE = this.dsList.getColumn(i, "DS_SITE");
        					no_bid += this.dsList.getColumn(i, "NO_PR");
        					param.DS_SUBCON = this.dsList.getColumn(i, "DS_PR");
        				}
        			else
        				{
        					no_bid += ";" + this.dsList.getColumn(i, "NO_PR");
        				}
        			count++;
        		}
        	}

        	param.NO_BID = no_bid;

        	if(count > 1) {
        		param.DS_SUBCON += " 외";
        		this.gfnConfirm("2개 이상의 의뢰 건이 선택되었습니다.\n통합입찰을 진행하시겠습니까?",
        						function(strId, val) {
        							if(val == true) {
        								this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DCB_PREORDERPLANHQAPPRDLG", "fnApprove_Select", param, 420, 220);
        							}
        						}
        		);
        	} else {
        		this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DCB_PREORDERPLANHQAPPRDLG", "fnApprove_Select", param, 420, 220);
        	}
        }

        this.fnApprove_Select = function(svcID, value)
        {
        	if(value == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }


        this.fnOrderDetail_callback = function(svcID, value)
        {
        	if(value == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }


        // 반려
        this.fnApproveInit = function(obj,e) {

        	this.gfnConfirm("반려를 진행하시겠습니까?", "fnApproveInit_callback");
        }

        this.fnApproveInit_callback = function(strId, val)
        {
        	if(val == true)
        	{


        		this.dsInit.clearData();

        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			if(this.dsList.getColumn(i, "CHK") == 1)
        			{
        				var nrow = this.dsInit.addRow();

        				this.dsInit.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsInit.setColumn(nrow, "NO_BID", this.dsList.getColumn(i, "NO_BID"));
        				this.dsInit.setColumn(nrow, "NO_PR", this.dsList.getColumn(i, "NO_PR"));
        				this.dsInit.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		if(this.dsInit.rowcount == 0) return;

        		var strSvcId    = "init";
        		var strSvcType  = "save";
        		var inProc      = "_dsProc";
        		var inData      = "init=dsInit";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
        					    strSvcType ,    // transaction을 요청할 구분
        					    inProc,         // Procedure 정보 Dataset 이름
        					    inData ,        // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        					    outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        					    strArg,         // 입력값으로 보낼 arguments, strFormData="20120607"
        					    callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }


        // 반려
        this.fnApproveCancel = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("반려하시겠습니까?", "fnApproveCancel_callback");
        }

        this.fnApproveCancel_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsCancel.clearData();

        		var nrow = this.dsCancel.addRow();

        		this.dsCancel.setColumn(nrow, "CD_SITE", this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        		this.dsCancel.setColumn(nrow, "NO_BID", this.dsList.getColumn(this.dsList.rowposition, "NO_BID"));
        		this.dsCancel.setColumn(nrow, "NO_PR", this.dsList.getColumn(this.dsList.rowposition, "NO_PR"));
        		this.dsCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsCancel.setColumn(nrow, "TY_COSMI", "");

        		/*
        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			if(this.dsList.getColumn(i, "CHK") == 1)
        			{
        				var nrow = this.dsCancel.addRow();

        				this.dsCancel.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsCancel.setColumn(nrow, "NO_BID", this.dsList.getColumn(i, "NO_BID"));
        				this.dsCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsCancel.setColumn(nrow, "TY_COSMI", "");
        			}
        		}
        		*/

        		if(this.dsCancel.rowcount == 0) return;

        		var strSvcId    = "cancel";
        		var strSvcType  = "save";
        		var inProc      = "_dsProc";
        		var inData      = "cancel=dsCancel";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
        					    strSvcType ,    // transaction을 요청할 구분
        					    inProc,         // Procedure 정보 Dataset 이름
        					    inData ,        // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        					    outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        					    strArg,         // 입력값으로 보낼 arguments, strFormData="20120607"
        					    callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        // 접수 취소
        this.fnApproveCancel2 = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("접수취소를 진행하시겠습니까?", "fnApproveCancel_callback2");
        }

        this.fnApproveCancel_callback2 = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsCancel.clearData();

        		var nrow = this.dsCancel.addRow();

        		this.dsCancel.setColumn(nrow, "CD_SITE", this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        		this.dsCancel.setColumn(nrow, "NO_BID", this.dsList.getColumn(this.dsList.rowposition, "NO_BID"));
        		this.dsCancel.setColumn(nrow, "NO_PR", this.dsList.getColumn(this.dsList.rowposition, "NO_PR"));
        		this.dsCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsCancel.setColumn(nrow, "TY_COSMI", "");

        		/*
        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			if(this.dsList.getColumn(i, "CHK") == 1)
        			{
        				var nrow = this.dsCancel.addRow();

        				this.dsCancel.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsCancel.setColumn(nrow, "NO_BID", this.dsList.getColumn(i, "NO_BID"));
        				this.dsCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsCancel.setColumn(nrow, "TY_COSMI", "");
        			}
        		}
        		*/

        		if(this.dsCancel.rowcount == 0) return;

        		var strSvcId    = "cancel";
        		var strSvcType  = "save";
        		var inProc      = "_dsProc";
        		var inData      = "cancel2=dsCancel";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
        					    strSvcType ,    // transaction을 요청할 구분
        					    inProc,         // Procedure 정보 Dataset 이름
        					    inData ,        // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        					    outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        					    strArg,         // 입력값으로 보낼 arguments, strFormData="20120607"
        					    callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

         //미등록사승인요청
         this.fnReqETC = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

         	var param = {};

         	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
         	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
         	param.NO_PR = this.dsList.getColumn(this.dsList.rowposition, "NO_PR");
         	param.DS_PR = this.dsList.getColumn(this.dsList.rowposition, "DS_PR");

         	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_RECOMMEND_ETC_REQ_LIST", "", param);
         }


        // //입찰사배정
        // this.fnRecommend = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	var param = {};
        //
        // 	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        // 	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        // 	param.NO_BID = this.dsList.getColumn(this.dsList.rowposition, "NO_BID");
        // 	param.DS_SUBCON = this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT");
        //
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_RECOMMENDCUSTREQSETTLE", "", param);
        // }
        //
        //
        // //현설입찰참여관리
        // this.fnJoinExplain = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        //
        // 	var param = {};
        //
        // 	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        // 	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        // 	param.NO_BID = this.dsList.getColumn(this.dsList.rowposition, "NO_BID");
        // 	param.DS_SUBCON = this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT");
        //
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_JOINEXPLAINBIDMR_HDC", "", param);
        // }
        //
        //
        // //서면입찰현황
        // this.fnOffBid = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        //
        // 	var param = {};
        //
        // 	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        // 	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        // 	param.NO_BID = this.dsList.getColumn(this.dsList.rowposition, "NO_BID");
        // 	param.DS_SUBCON = this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT");
        //
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_ESTIMATIONSAV", "", param);
        // }
        //
        //
        // //전자입찰현황
        // this.fnOnBid = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        //
        // 	var param = {};
        //
        // 	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        // 	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        // 	param.NO_BID = this.dsList.getColumn(this.dsList.rowposition, "NO_BID");
        // 	param.DS_SUBCON = this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT");
        //
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_FIRSTSELECT", "", param);
        // }
        //
        // this.fnAppCont = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	var param = {};
        //
        // 	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        // 	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        // 	param.NO_BID = this.dsList.getColumn(this.dsList.rowposition, "NO_BID");
        // 	param.DS_SUBCON = this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT");
        //
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_PRECONTRACT", "", param, 1150, 720);
        // }

        //발주의뢰내역조회
        this.fnOrderDetailSearch = function(obj,e) {
            if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};

        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        	param.NO_PR = this.dsList.getColumn(this.dsList.rowposition, "NO_PR");
        	param.DS_PR = this.dsList.getColumn(this.dsList.rowposition, "DS_PR");
        	param.DS_PARAM = this.FormInfo.DS_PARAM;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_PRITEM", "fnOrderDetailSearch_callback", param, 1150, 720);
        }

        this.fnOrderDetailSearch_callback = function(svcID, value)
        {
        	if(value == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        // 발주내역(본사수정)
        this.fnPritem = function(obj,e) {alert("17");
            if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};

        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        	param.NO_PR = this.dsList.getColumn(this.dsList.rowposition, "NO_PR");
        	param.DS_PR = this.dsList.getColumn(this.dsList.rowposition, "DS_PR");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_SILHENGTOPR_BONSA", "fnPritem_callback", param);
        }

        this.fnPritem_callback = function(svcID, value)
        {
        	if(value == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        // 발주요청서(본사수정)
        this.fnPrEdit = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        	param.NO_BID = this.dsList.getColumn(this.dsList.rowposition, "NO_PR");
        	param.DS_SUBCON = this.dsList.getColumn(this.dsList.rowposition, "DS_PR");
        	param.TY_OPENER = "DCB_PROTOBID";
        	param.DS_PARAM = this.FormInfo.DS_PARAM;

        	//this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_ORDERPLANSR_SITE_EDIT", "fnPrEdit_callback", param);
        	this.gfnFormOpen("DCB", "DCB_ORDERPLANSR_SITE", "fnOrderDetail_callback", param, 1000, 800);
        }

        this.fnPrEdit_callback = function(svcID, value)
        {
        	if(value == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }


        // 발주서작성
        this.fnCreat = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var chkRow = -1;
        	for(var i = 0; i < this.dsList.getRowCountNF(); i++) {
        		if(this.dsList.getColumnNF(i, "CHK") == "1") {
        			if(chkRow > 0) {
        				this.gfnAlert("1개 행만 선택해 주시기 바랍니다.");
        				return;
        			} else {
        				chkRow = i;
        			}
        		}
        	}
        	if(chkRow < 0) {
        		this.gfnAlert("선택된 행이 없습니다.");
        		return;
        	}

        	this.gfnConfirm("발주서를 작성하시겠습니까?", "fnCreat_callback");
        }

        this.fnCreat_callback = function(chkRow, val)
        {
        	if(val == true)
        	{
        		var chkRow = -1;
        		for(var i = 0; i < this.dsList.getRowCountNF(); i++) {
        			if(this.dsList.getColumnNF(i, "CHK") == "1") {
        				if(chkRow > 0) {
        					this.gfnAlert("1개 행만 선택해 주시기 바랍니다.");
        					return;
        				} else {
        					chkRow = i;
        				}
        			}
        		}

        		this.dsExec.clearData();
        		this.dsExec.addRow();

        		this.dsExec.setColumn(0, "CD_SITE", this.dsList.getColumnNF(chkRow, "CD_SITE"));
        		this.dsExec.setColumn(0, "NO_BID", this.dsList.getColumnNF(chkRow, "NO_PR"));
        		this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsExec.setColumn(0, "TY_COSMI", "");
        		this.dsExec.setColumn(0, "TY_BID", "03");
        		this.dsExec.setColumn(0, "CD_VENDOR", "");

        		if (this.dsExec.rowcount == 0) return;

        		var strSvcId    = "exec";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "exec=dsExec";
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
        }

        // 서면입찰현황/전자입찰현황 확장버튼의 활성화/비활성화를 위한 row changed 함수.
        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0)
        	{
        		this.fnAllBtnSetEnable(false);
        		return false;
        	}

        	this.fnAllBtnSetEnable(true);

        	var type = this.dsList.getColumn(e.newrow, "TY_BIDTYPE");
        	if(type == "OFF")
        	{
        		this.btnOffBid.set_enable(true);
        		this.btnOnBid.set_enable(false);
        	}
        	else if(type == "ON")
        	{
        		this.btnOffBid.set_enable(false);
        		this.btnOnBid.set_enable(true);
        	}

        	//임시
        	this.fnBtnCheckAll();
        };


        // 모든 버튼 enable 설정.
        this.fnAllBtnSetEnable = function(value)
        {
        	//this.btnOrderDetailSearch.set_enable(value);
        	//this.btnOrderDetail.set_enable(value);
        	this.btnOrderSite.set_enable(value);
        	this.btnApprove.set_enable(value);
        	this.btnApproveCancel.set_enable(value);
        	this.btnApproveCancel2.set_enable(value);
        	this.btnReqETC.set_enable(value);
        	this.btnRecommend.set_enable(value);
        	this.btnJoinExplain.set_enable(value);
        	this.btnOffBid.set_enable(value);
        	this.btnOnBid.set_enable(value);
        	this.btnAppCont.set_enable(value);
        }

        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btnOrderSite, this.dsList);
        	this.gfnBtnCheck(this.btnApprove, this.dsList);
        	this.gfnBtnCheck(this.btnApproveCancel, this.dsList);
        	this.gfnBtnCheck(this.btnApproveCancel2, this.dsList);
        	this.gfnBtnCheck(this.btnReqETC, this.dsList);
        	this.gfnBtnCheck(this.btnRecommend, this.dsList);
        	this.gfnBtnCheck(this.btnJoinExplain, this.dsList);
        	this.gfnBtnCheck(this.btnOffBid, this.dsList);
        	this.gfnBtnCheck(this.btnOnBid, this.dsList);
        	this.gfnBtnCheck(this.btnAppCont, this.dsList);
        	this.gfnBtnCheck(this.btnOrderDetailSearch, this.dsList);
        	this.gfnBtnCheck(this.btnPritem, this.dsList);
        	this.gfnBtnCheck(this.btnAppCont, this.dsList);

        	//진행상태에 따라 버튼 컨트롤
        	if(this.dsList.getColumn(this.dsList.rowposition, "DS_PR_STATUS") == "발주대기") {
        		this.btnApprove.set_enable(false);
        		this.btnApproveCancel.set_enable(false);
        		this.btnApproveCancel2.set_enable(false);
        		if(this.FormInfo.DS_PARAM == "MM") this.btnCreat.set_enable(false);
        	} else if(this.dsList.getColumn(this.dsList.rowposition, "DS_PR_STATUS") == "승인요청"){
        		this.btnApprove.set_enable(true);
        		this.btnApproveCancel.set_enable(true);
        		this.btnApproveCancel2.set_enable(false);
        		if(this.FormInfo.DS_PARAM == "MM") this.btnCreat.set_enable(true);
        	} else if(this.dsList.getColumn(this.dsList.rowposition, "DS_PR_STATUS") == "승인완료"){
        		this.btnApprove.set_enable(false);
        		this.btnApproveCancel.set_enable(true);
        		this.btnApproveCancel2.set_enable(true);
        		if(this.FormInfo.DS_PARAM == "MM") this.btnCreat.set_enable(false);
        	} else {
        		this.btnApprove.set_enable(false);
        		this.btnApproveCancel.set_enable(false);
        		this.btnApproveCancel2.set_enable(false);
        		if(this.FormInfo.DS_PARAM == "MM") this.btnCreat.set_enable(false);
        	}
        }

        this.dsList_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "CHK") {
        		if(e.newvalue == "1") {
        			if(!this.gfnIsNull(obj.getColumn(e.row, "DS_PR_STATUS")) && obj.getColumn(e.row, "DS_PR_STATUS") != "승인요청") {
        				return false;
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_PRTOBID.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
