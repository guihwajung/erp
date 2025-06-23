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
            this.set_titletext("변경발주승인(본사)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCCPR_REQCHGCONTRACTLIST_PRE_SELECT</Col></Row><Row><Col id=\"TARGET\">appr</Col><Col id=\"SP\">DCCPR_REQCHGCONTRACT_PRE_APPROVE</Col></Row><Row><Col id=\"TARGET\">appr_cancel</Col><Col id=\"SP\">DCCPR_REQCHGCONTRACT_PRE_APPROVE_CANCEL</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DCCPR_CHGPRECONTRACT_REPORT</Col></Row><Row><Col id=\"TARGET\">report2</Col><Col id=\"SP\">DCCPR_CHGPRECONTRACT_DM_REPORT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_CONT\"/><Col id=\"YN_APPROVE\">N</Col><Col id=\"TY_GUBUN\">B</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_APPROVE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">승인</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미승인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">S</Col><Col id=\"DS_CODE\">담당전결</Col></Row><Row><Col id=\"CD_CODE\">B</Col><Col id=\"DS_CODE\">본사품의</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.getSetter("AutoSet").set("false");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SITE:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("계약번호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_CONT","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ccfNO_CONT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_APPROVE","sta02:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsYN_APPROVE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","ccboYN_APPROVE:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("승인요청일");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQUEST_FR","sta03:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_REQUEST_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQUEST_TO","sta_range:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ctclDT_REQUEST_TO:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("품의구분");
            obj.set_textDecoration("none");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","staTY_GUBUN:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
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
            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfNO_CONT.form.CDTextBox","value","dsSearch","NO_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboYN_APPROVE","value","dsSearch","YN_APPROVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_REQUEST_FR","value","dsSearch","DT_REQUEST_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclDT_REQUEST_TO","value","dsSearch","DT_REQUEST_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCC_REQCHGCONTRACTQRY_PRE.xfdl", function() {
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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_REQUEST_FR", this.gfnAddMonth(today, -1));
        	this.dsSearch.setColumn(0, "DT_REQUEST_TO", today);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnREQCHGCONTRACT = this.gfnFormButtonAdd("btnREQCHGCONTRACT", "fnREQCHGCONTRACT");
        	this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP");
        	this.btnApprove = this.gfnFormButtonAdd("btnApprove", "fnApprove");
        	this.btnApproveCancel = this.gfnFormButtonAdd("btnApproveCancel", "fnApproveCancel");

        	this.btnPrecontractReport = this.gfnFormButtonAdd("btnPrecontractReport", "fnPrecontractReport");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_CONT = this.divSearch.form.ccfNO_CONT;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfNO_CONT.CodeFindName = "DCX_CFCONTRACT_03";
        	this.ccfNO_CONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCC_REQCHGCONTRACTQRY_APP");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	// 셀 변경 후 이벤트
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	// 그리드 코드파인드 설정
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 전체체크박스 체크/해제 이벤트
        	//this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

        	// BUTTON, BUTTON-IN 처리
        	//this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_CONT", "string");
        	this.dsSelect.addColumn("YN_APPROVE", "string");
        	this.dsSelect.addColumn("DT_REQUEST_FR", "string");
        	this.dsSelect.addColumn("DT_REQUEST_TO", "string");
        	this.dsSelect.addColumn("TY_SYS", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");

        	this.dsAppr = new Dataset();
        	this.dsAppr.addColumn("NO_CONT", "string");
        	this.dsAppr.addColumn("SN_SEQ", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_CONT", this.dsSearch.getColumn(0, "NO_CONT"));
        	this.dsSelect.setColumn(0, "YN_APPROVE", this.dsSearch.getColumn(0, "YN_APPROVE"));
        	this.dsSelect.setColumn(0, "DT_REQUEST_FR", this.dsSearch.getColumn(0, "DT_REQUEST_FR"));
        	this.dsSelect.setColumn(0, "DT_REQUEST_TO", this.dsSearch.getColumn(0, "DT_REQUEST_TO"));
        	this.dsSelect.setColumn(0, "TY_SYS", this.FormInfo.DS_PARAM);
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));

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
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
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

        // 승인,취소
        this.fnAppr = function(gubun) {
        	this.dsAppr.clearData();

        	var nrow = this.dsAppr.addRow();

        	this.dsAppr.setColumn(nrow, "NO_CONT", this.dsList.getColumn(this.dsList.rowposition, "NO_CONT"));
        	this.dsAppr.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ"));

        	var strSvcId    = "appr";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "appr=dsAppr";
        	if(gubun == "cancel")
        	{
        		inData = "appr_cancel=dsAppr"
        	}
        	var outData     = "";
        	var strArg      = "gubun=" + gubun;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        // 다건 승인
        this.fnApprSelected = function() {
        	var rows = this.dxGrid.getSelectedDatasetRows();
        	this.dsAppr.clearData();

        	for(var i = 0; i < rows.length; i++)
        	{
        		if(this.dsList.getColumn(rows[i], "YN_APPROVE") != "Y")
        		{
        			var nrow = this.dsAppr.addRow();
        			this.dsAppr.setColumn(nrow, "NO_CONT", this.dsList.getColumn(rows[i], "NO_CONT"));
        			this.dsAppr.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(rows[i], "SN_SEQ"));
        		}
        	}

        	var strSvcId    = "appr";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "appr=dsAppr";
        	var outData     = "";
        	var strArg      = "gubun=appr";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, false); // 통신방법 정의 [생략가능]
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	*/
        	return validate;

        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.fnBtnCheckAll();
        	}else if(svcID == "appr") {
        		if(errorCode == 0)
        		{
        			this.fn_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			var json = this.gfnArgsToJson(strArg);
        			strArg = json.gubun;

        			var msg = "";

        			if(strArg == "appr") msg = "승인이 정상 처리되었습니다.";
        			else if(strArg == "cancel") msg = "취소가 정상 처리되었습니다.";

        			this.gfnAlert(msg, "fn_callback");

        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfNO_CONT") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 초기화
        		this.ccfNO_CONT.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
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

         // 증권현황 버튼 클릭시 팝업화면 호출
         this.fnDetail = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nRow = this.dsList.rowposition;
        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(nRow, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(nRow, "DS_SITE");
        	param.NO_CONT = this.dsList.getColumn(nRow, "NO_CONT");
        	param.DS_CONT = this.dsList.getColumn(nRow, "DS_SUBCON");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_STOCKMR", "", param);
        }

        this.fnREQCHGCONTRACT = function(obj,e)
        {
        	var nRow = this.dsList.rowposition;
        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(nRow, "CD_SITE");
         	param.DS_SITE = this.dsList.getColumn(nRow, "DS_SITE");
         	param.NO_BID = this.dsList.getColumn(nRow, "NO_CONT");
         	param.DS_SUBCON = this.dsList.getColumn(nRow, "DS_SUBCON");
        	param.SN_SEQ = this.dsList.getColumn(nRow, "SN_SEQ");

         	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	//this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_REQCHGCONTRACT", "fnREQCHGCONTRACT_Callback", param, 1100, 650);
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_REQCHGCONTRACT_BONSA", "fnREQCHGCONTRACT_Callback", param, 1100, 560);
        }

        this.fnREQCHGCONTRACT_Callback = function(svcID, value) {
        	// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        	this.FormBtns.Select.click();
        };


        this.fnAPP = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	var nRow = this.dsList.rowposition;

        	param.PARAM01 = this.dsList.getColumn(nRow,"CD_SITE");
        	param.PARAM02 = this.dsList.getColumn(nRow, "NO_CONT");
        	param.PARAM03 = this.dsList.getColumn(nRow, "SN_SEQ");
        	param.ID_AP = this.dsList.getColumn(nRow, "NO_ELAPDOC");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_REQCHGCONTRACT_BONSA_APPROVAL", "fnAprvDialogCallback", param);

        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };


        // // 승인 버튼 이벤트
        // this.fnApprove = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        //
        // 	var msg = "계약번호 : " + this.dsList.getColumn(this.dsList.rowposition, "NO_CONT") + "\n"
        // 	        + "차수 : " + this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ") + "\n\n"
        // 			+ "해당 건에 대해서 승인 처리를 진행하시겠습니까?"
        // 	;
        //
        // 	this.gfnConfirm(msg, "fnApprove_callback", "appr");
        // }

        this.fnApprove =function()
        {
        	var rows = this.dxGrid.getSelectedDatasetRows();
        	var count = 0;

        	for(var i = 0; i < rows.length; i++)
        	{
        		if(this.dsList.getColumn(rows[i], "YN_APPROVE") != "Y")
        		{
        			count++;
        		}
        	}

        	var msg = "미승인건 " + count + "건에 대해서 승인 처리를 진행하시겠습니까?";

        	this.gfnConfirm(msg, "fnApproveSelected_callback");
        }

        // 취소 버튼 이벤트
        this.fnApproveCancel = function(obj,e) {
        	var msg = "계약번호 : " + this.dsList.getColumn(this.dsList.rowposition, "NO_CONT") + "\n"
        	        + "차수 : " + this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ") + "\n\n"
        			+ "해당 건에 대해서 취소 처리를 진행하시겠습니까?"
        	;

        	this.gfnConfirm(msg, "fnApprove_callback", "cancel");
        }

        // 승인/취소 버튼에 대한 콜백함수.
        this.fnApprove_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnAppr(strID);
        	}
        }

        this.fnApproveSelected_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnApprSelected();
        	}
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "CD_SITE"){
        			this.dsSearch.setColumn(0,"NO_CONT", "");
        			this.divSearch.form.ccfNO_CONT.form.DSTextBox.set_value("");
        		}
        	}
        };



        // 임시로 생성.
        this.fnBtnCheck = function(btn, ds)
        {
        	if(!this.gfnIsNull(btn.NM_COLUMN) && btn.IS_ENABLED == true)
        	{
        		if(ds.rowcount > 0)
        		{
        			if(ds.rowcount == 1 && this.gfnGetFlag(ds, 0) == "#")
        				return;

        			var row = ds.rowposition;

        			if(row == -1) row = 0;

        			if(ds.getColumn(row, btn.NM_COLUMN) == "Y")
        				btn.set_enable(true);
        			else
        				btn.set_enable(false);
        		}
        		else
        			return;
        	}
        	return;
        }

        this.fnBtnCheckAll = function()
        {
        	this.fnBtnCheck(this.btnREQCHGCONTRACT, this.dsList);
        	this.fnBtnCheck(this.btnAPP, this.dsList);
        	this.fnBtnCheck(this.btnApprove, this.dsList);
        	this.fnBtnCheck(this.btnApproveCancel, this.dsList);
        }

        this.fnPrecontractReport = function() {
            if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("NO_CONT", "string");
        	this.dsReport.addColumn("SN_SEQ", "string");

        	this.dsReport.clearData();

        	this.dsReport.addRow();
        	this.dsReport.setColumn(0, "NO_CONT", this.dsList.getColumn(this.dsList.rowposition, "NO_CONT"));
        	this.dsReport.setColumn(0, "SN_SEQ", this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ"));

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report=dsReport";
        	var reportpath  = "/dc/dcc/DCCPR_CHGPRECONTRACT_REPORT.ozr";
        	if(this.FormInfo.DS_PARAM == "MM") {
        		inData      = "report2=dsReport";
        		reportpath  = "/dc/dcc/DCCPR_CHGPRECONTRACT_DM_REPORT.ozr";
        	}

        	// 일반: gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	// SAP : gfnOpenReport(this, reportpath, inProc, inParam, inData, true);
        	// SAP 호출시 마지막인자 추가 true 설정
        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCC_REQCHGCONTRACTQRY_PRE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
