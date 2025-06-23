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
            this.set_titletext("하도급승인원목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_PRECONTRACT_LIST_SELECT</Col></Row><Row><Col id=\"SP\">DZXPR_COMBO_SELECT</Col><Col id=\"TARGET\">combo</Col></Row><Row><Col id=\"TARGET\">confirm</Col><Col id=\"SP\">DCBPR_PRECONTRACT_CALLBACK</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DCBPR_PRECONTRACT_REPORT</Col></Row><Row><Col id=\"SP\">DCBPR_PRECONTRACT_DM_REPORT</Col><Col id=\"TARGET\">report2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"DAM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_APPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YN_APPROVE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDAM_CODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_APPROVE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미승인</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">승인</Col></Row><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.getSetter("AutoSet").set("false");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_DAM","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("담당자");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_DAM","staID_DAM:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDAM_CODE","ccfID_DAM:25","10","70","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("담당자코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDAM_CODE","staDAM_CODE:10","10","100","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsDAM_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FR_TO","ccfID_DAM:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("생성일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FR","staDT_FR_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta_range:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_APPROVE","ctclDT_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_APPROVE","staYN_APPROVE:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsYN_APPROVE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
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

            obj = new BindItem("item1","divSearch.form.ccfID_DAM.form.CDTextBox","value","dsSearch","ID_DAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboYN_APPROVE","value","dsSearch","YN_APPROVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_FR","value","dsSearch","DT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_PRECONTRACT_LIST.xfdl", function() {
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
        	this.fnSetCombo();

        	var today = this.gfnGetDate();

        	this.dsSearch.setColumn(0, "DT_FR", this.gfnAddMonth(today,-1));
        	this.dsSearch.setColumn(0, "DT_TO", today);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnAppCont", "fnAppCont");
        	this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP");
        	this.btnConfirm = this.gfnFormButtonAdd("btnConfirm", "fnConfirm");
        	this.btnConfirmCancel = this.gfnFormButtonAdd("btnConfirmCancel", "fnConfirmCancel");

        	this.btnBid = this.gfnFormButtonAdd("btnBid", "fnBid");
        	this.btnPrecontractReport = this.gfnFormButtonAdd("btnPrecontractReport", "fnPrecontractReport");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.cboDAM_CODE = this.divSearch.form.cboDAM_CODE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	if(this.FormInfo.DS_PARAM == "MM") {
        		this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DCB_PRECONTRACT_LIST_DM");
        		this.btnConfirm.set_text("구매결의확정");
        	} else {
        		this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCB_PRECONTRACT_LIST");
        		this.btnConfirm.set_text("시행결의확정");
        	}
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("ID_DAM", "string");
        	this.dsSelect.addColumn("DAM_CODE", "string");
        	this.dsSelect.addColumn("YN_APPROVE", "string");
        	this.dsSelect.addColumn("DT_FR", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("TY_SYS", "string");

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "ID_DAM", this.dsSearch.getColumn(0, "ID_DAM"));
        	this.dsSelect.setColumn(0, "DAM_CODE", this.dsSearch.getColumn(0, "DAM_CODE"));
        	this.dsSelect.setColumn(0, "YN_APPROVE", this.dsSearch.getColumn(0, "YN_APPROVE"));
        	this.dsSelect.setColumn(0, "DT_FR", this.dsSearch.getColumn(0, "DT_FR"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
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
        	} else if (svcID == "confirm") {
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
         this.fnSetCombo = function() {

        // 	this.dsCombo.clearData();
        //
        // 	var nrow = this.dsCombo.addRow();
        // 	this.dsCombo.setColumn(nrow, "CD_SYSTEM", "DM");
        // 	this.dsCombo.setColumn(nrow, "CD_TYPE", "H07");
        //
        // 	var strSvcId    = "combo";
        // 	var strSvcType  = "select";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "combo=dsCombo";
        // 	var outData     = "dsDAM_CODE=combo0";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallbackCombo";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		/*
        		this.dsNO_DGR.insertRow(0);
        		this.dsNO_DGR.setColumn(0, "CD_DGR", "");
        		this.dsNO_DGR.setColumn(0, "DS_DGR", "전체");
         		*/
        		//this.divSearch.form.cboDAM_CODE.set_index(0);

        	}
        };

        this.fnAppCont = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 처리하세요.", "");
        		return;
        	}

        	var param = {};
        	param.V1 = this.dsList.getColumn(this.dsList.rowposition, "NO_CONT");			// NO_CONT
        	param.V2 = "";
        	param.V3 = "";
        	param.V4 = "";
        	param.ID_AP = this.dsList.getColumn(this.dsList.rowposition, "NO_ELAPDOC");	// 전자결재문서번호
        	param.DS_ETITLE = "시행품의서";

        	this.gfnFormOpen("DCB", "DCB_PRECONTRACT_APP", "fnAprvDialogCallback", param, 1200, 700);
        }

        this.fnAPP = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	var nRow = this.dsList.rowposition;

        	param.PARAM01 = this.dsList.getColumn(nRow,"CD_SITE");
        	param.PARAM02 = this.dsList.getColumn(nRow, "NO_CONT");
        	param.ID_AP = this.dsList.getColumn(nRow, "NO_ELAPDOC");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_PRECONTRACT_APPROVAL", "fnAprvDialogCallback", param);

        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값

        	// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        	this.FormBtns.Select.click();

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
        	this.fnBtnCheck(this.btn1, this.dsList);
        	this.fnBtnCheck(this.btnAPP, this.dsList);

        	if(this.dsList.getColumn(this.dsList.rowposition, "YN_APPROVE") == "Y") {
        		this.btnConfirm.set_enable(false);
        		this.btnConfirmCancel.set_enable(true);
        	} else {
        		this.btnConfirm.set_enable(true);
        		this.btnConfirmCancel.set_enable(false);
        	}
        }

        this.fnConfirm = function(obj,e) {
            if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var msg = "";

        	if(this.FormInfo.DS_PARAM == "SU")
        	{
        		msg = "시행결의를 확정하시겠습니까?";
        	}
        	else
        	{
        		msg = "구매결의를 확정하시겠습니까?";
        	}

        	this.gfnConfirm(msg, "fnConfirm_callback");
        }

        this.fnConfirm_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		var nRowCont = this.dsList.rowposition;

        		this.dsConfirm = new Dataset();

        		this.dsConfirm.addColumn("ID_AP", "string");
        		this.dsConfirm.addColumn("V_PARAM01", "string");
        		this.dsConfirm.addColumn("V_PARAM02", "string");
        		this.dsConfirm.addColumn("V_PARAM03", "string");
        		this.dsConfirm.addColumn("V_PARAM04", "string");
        		this.dsConfirm.addColumn("ST_APPR", "string"); //01:결재상신,02:결재진행(결재화면로딩시),03:결재완료,04:반려,05:결재취소
        		this.dsConfirm.addColumn("ID_USER", "string");

        		var nrow = this.dsConfirm.addRow();
        		this.dsConfirm.setColumn(nrow, "ID_AP", "99999");
        		this.dsConfirm.setColumn(nrow, "V_PARAM01", this.dsList.getColumn(nRowCont, "NO_CONT"));
        		this.dsConfirm.setColumn(nrow, "V_PARAM02", "");
        		this.dsConfirm.setColumn(nrow, "V_PARAM03", "");
        		this.dsConfirm.setColumn(nrow, "V_PARAM04", "");
        		this.dsConfirm.setColumn(nrow, "ST_APPR", "03");
        		this.dsConfirm.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		var strSvcId    = "confirm";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "confirm=dsConfirm";
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

        this.fnConfirmCancel = function(obj,e) {
            if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var msg = "";

        	if(this.FormInfo.DS_PARAM == "SU")
        	{
        		msg = "시행결의를 확정취소 하시겠습니까?";
        	}
        	else
        	{
        		msg = "구매결의를 확정취소 하시겠습니까?";
        	}

        	this.gfnConfirm(msg, "fnConfirmCancel_callback");
        }

        this.fnConfirmCancel_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		var nRowCont = this.dsList.rowposition;

        		this.dsConfirm = new Dataset();

        		this.dsConfirm.addColumn("ID_AP", "string");
        		this.dsConfirm.addColumn("V_PARAM01", "string");
        		this.dsConfirm.addColumn("V_PARAM02", "string");
        		this.dsConfirm.addColumn("V_PARAM03", "string");
        		this.dsConfirm.addColumn("V_PARAM04", "string");
        		this.dsConfirm.addColumn("ST_APPR", "string"); //01:결재상신,02:결재진행(결재화면로딩시),03:결재완료,04:반려,05:결재취소
        		this.dsConfirm.addColumn("ID_USER", "string");

        		var nrow = this.dsConfirm.addRow();
        		this.dsConfirm.setColumn(nrow, "ID_AP", "99999");
        		this.dsConfirm.setColumn(nrow, "V_PARAM01", this.dsList.getColumn(nRowCont, "NO_CONT"));
        		this.dsConfirm.setColumn(nrow, "V_PARAM02", "");
        		this.dsConfirm.setColumn(nrow, "V_PARAM03", "");
        		this.dsConfirm.setColumn(nrow, "V_PARAM04", "");
        		this.dsConfirm.setColumn(nrow, "ST_APPR", "09");
        		this.dsConfirm.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		var strSvcId    = "confirm";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "confirm=dsConfirm";
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

        //입찰현황
        this.fnBid = function(obj,e) {

        	var param = {};

        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        	param.NO_BID = this.dsList.getColumn(this.dsList.rowposition, "NO_BID");
        	param.DS_SUBCON = this.dsList.getColumn(this.dsList.rowposition, "DS_SUBCON");
        	param.DS_OPENER = "DCB_PRECONTRACT_LIST";

        	var view = "DCB_ESTIMATIONSAV"; //서면입찰현황
        	if(this.dsList.getColumn(this.dsList.rowposition, "YN_ON") == "Y") view = "DCB_FIRSTSELECT"; //전자입찰현황

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, view, "fnOffBid_callback", param);
        }

        this.fnPrecontractReport = function() {
            if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("NO_CONT", "string");

        	this.dsReport.clearData();

        	this.dsReport.addRow();
        	this.dsReport.setColumn(0, "NO_CONT", this.dsList.getColumn(this.dsList.rowposition, "NO_CONT"));

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report=dsReport";
        	var reportpath  = "/dc/dcb/DCBPR_PRECONTRACT_REPORT.ozr";
        	if(this.FormInfo.DS_PARAM == "MM") {
        		inData      = "report2=dsReport";
        		reportpath  = "/dc/dcb/DCBPR_PRECONTRACT_DM_REPORT.ozr";
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
        this.loadIncludeScript("DCB_PRECONTRACT_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
