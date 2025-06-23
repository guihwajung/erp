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
            this.set_titletext("옵션예수금관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRFPR_APPROPRIATE_SELECT_SAMHO</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRFPR_APPROPRIATE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRFPR_APPROPRIATE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DRFPR_APPROPRIATE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PAYBACKSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"DS_ACNTUNIT\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_RECEIPT","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("회계일자");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_START","staDT_RECEIPT:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRANGE","ctclDT_START:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_END","staRANGE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_END","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRF_APPROPRIATE.xfdl", function() {
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
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAppRoBack = this.gfnFormButtonAdd("btnAppRoBack", "fnAppRoBack"); //반제
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;	// 사업지코드
        	this.ccboDS_STATE

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRF_APPROPRIATE");

        	this.gfnGridColumnColor(this.dxGrid, "", "BACK_ReadOnly", "TY_PROCESS=='3'", true);

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.ExpandUp  = "fnGrid_ExpandUp";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	//조회기간
        	this.dsSearch.setColumn(0, "DT_START", this.gfnAddMonth(this.gfnGetDate(), -3));	// 3개월 이전
        	this.dsSearch.setColumn(0, "DT_END"  , this.gfnGetDate());

        	// 반제유무
        	this.dsSearch.setColumn(0, "TY_PAYBACKSTATE", "");	// 전체
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT"     , "string");
        	this.dsSelect.addColumn("TY_GUBUN"        , "string");
        	this.dsSelect.addColumn("NO_CHASU"        , "string");
        	this.dsSelect.addColumn("DT_START"        , "string");
        	this.dsSelect.addColumn("DT_END"          , "string");
        	this.dsSelect.addColumn("DS_PAYBACKSTATE" , "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT"     , "string");
        	this.dsInsert.addColumn("TY_GUBUN"        , "string");
        	this.dsInsert.addColumn("NO_CHASU"        , "string");
        	this.dsInsert.addColumn("NO_DONG"         , "string");
        	this.dsInsert.addColumn("NO_FLOOR"        , "string");
        	this.dsInsert.addColumn("NO_HO"           , "string");
        	this.dsInsert.addColumn("NO_UNIONMEMBER"  , "string");
        	this.dsInsert.addColumn("TY_APPRO"        , "string");
        	this.dsInsert.addColumn("DT_APPRO"        , "string");
        	this.dsInsert.addColumn("AM_APPRO"        , "bigdecimal");
        	this.dsInsert.addColumn("TY_PROCESS"      , "string");
        	this.dsInsert.addColumn("DT_PAYBACK"      , "string");
        	this.dsInsert.addColumn("AM_PAYBACK"      , "bigdecimal");
        	this.dsInsert.addColumn("DS_REFUNDBANK"   , "string");
        	this.dsInsert.addColumn("NO_REFUNDBANK"   , "string");
        	this.dsInsert.addColumn("DS_OWNER"        , "string");
        	this.dsInsert.addColumn("DT_REFUND"       , "string");
        	this.dsInsert.addColumn("NO_CONTRACT"     , "string");
        	this.dsInsert.addColumn("TY_ACCGUBUN"     , "string");
        	this.dsInsert.addColumn("CD_BANK"         , "string");
        	this.dsInsert.addColumn("ID_INSERT"       , "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT"     , "string");
        	this.dsUpdate.addColumn("TY_GUBUN"        , "string");
        	this.dsUpdate.addColumn("NO_CHASU"        , "string");
        	this.dsUpdate.addColumn("NO_DONG"         , "string");
        	this.dsUpdate.addColumn("NO_FLOOR"        , "string");
        	this.dsUpdate.addColumn("NO_HO"           , "string");
        	this.dsUpdate.addColumn("NO_UNIONMEMBER"  , "string");
        	this.dsUpdate.addColumn("TY_APPRO"        , "string");
        	this.dsUpdate.addColumn("DT_APPRO"        , "string");
        	this.dsUpdate.addColumn("AM_APPRO"        , "bigdecimal");
        	this.dsUpdate.addColumn("TY_PROCESS"      , "string");
        	this.dsUpdate.addColumn("DT_PAYBACK"      , "string");
        	this.dsUpdate.addColumn("AM_PAYBACK"      , "bigdecimal");
        	this.dsUpdate.addColumn("DS_REFUNDBANK"   , "string");
        	this.dsUpdate.addColumn("NO_REFUNDBANK"   , "string");
        	this.dsUpdate.addColumn("DS_OWNER"        , "string");
        	this.dsUpdate.addColumn("DT_REFUND"       , "string");
        	this.dsUpdate.addColumn("NO_CONTRACT"     , "string");
        	this.dsUpdate.addColumn("TY_ACCGUBUN"     , "string");
        	this.dsUpdate.addColumn("CD_BANK"         , "string");
        	this.dsUpdate.addColumn("ID_UPDATE"       , "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT"     , "string");
        	this.dsDelete.addColumn("TY_GUBUN"        , "string");
        	this.dsDelete.addColumn("NO_CHASU"        , "string");
        	this.dsDelete.addColumn("NO_DONG"         , "string");
        	this.dsDelete.addColumn("NO_FLOOR"        , "string");
        	this.dsDelete.addColumn("NO_UNIONMEMBER"  , "string");
        	this.dsDelete.addColumn("NO_HO"           , "string");
        	this.dsDelete.addColumn("NO_APPRO"        , "string");
        	this.dsDelete.addColumn("NO_CONTRACT"     , "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT"    , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN"       , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU"       , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "DT_START"       , this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSelect.setColumn(0, "DT_END"         , this.dsSearch.getColumn(0, "DT_END"));
        	this.dsSelect.setColumn(0, "DS_PAYBACKSTATE", this.dsSearch.getColumn(0, "TY_PAYBACKSTATE"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
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

        	if(!this.gfnGridValidate(this.dxGrid)) return false; 	// 반제정보
        	if (!this.fnSaveValidation()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag      = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "I" :

        					var nRow = this.dsInsert.addRow();

        					this.dsInsert.setColumn(nRow, "CD_ACNTUNIT"    , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        					this.dsInsert.setColumn(nRow, "TY_GUBUN"       , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        					this.dsInsert.setColumn(nRow, "NO_CHASU"       , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        					this.dsInsert.setColumn(nRow, "NO_DONG"        , this.dsList.getColumn(i, "NO_DONG"));
        					this.dsInsert.setColumn(nRow, "NO_FLOOR"       , this.dsList.getColumn(i, "NO_FLOOR"));
        					this.dsInsert.setColumn(nRow, "NO_HO"          , this.dsList.getColumn(i, "NO_HO"));
        					this.dsInsert.setColumn(nRow, "NO_UNIONMEMBER" , this.dsList.getColumn(i, "NO_UNIONMEMBER"));
        					this.dsInsert.setColumn(nRow, "TY_APPRO"       , this.dsList.getColumn(i, "TY_APPRO"));
        					this.dsInsert.setColumn(nRow, "DT_APPRO"       , this.dsList.getColumn(i, "DT_APPRO"));
        					this.dsInsert.setColumn(nRow, "AM_APPRO"       , this.dsList.getColumn(i, "AM_APPRO"));
        					this.dsInsert.setColumn(nRow, "TY_PROCESS"     , this.dsList.getColumn(i, "TY_PROCESS"));
        					this.dsInsert.setColumn(nRow, "DT_PAYBACK"     , this.dsList.getColumn(i, "DT_PAYBACK"));
        					this.dsInsert.setColumn(nRow, "AM_PAYBACK"     , this.dsList.getColumn(i, "AM_PAYBACK"));
        					this.dsInsert.setColumn(nRow, "DS_REFUNDBANK"  , this.dsList.getColumn(i, "DS_REFUNDBANK"));
        					this.dsInsert.setColumn(nRow, "NO_REFUNDBANK"  , this.dsList.getColumn(i, "NO_REFUNDBANK"));
        					this.dsInsert.setColumn(nRow, "DS_OWNER"       , this.dsList.getColumn(i, "DS_OWNER"));
        					this.dsInsert.setColumn(nRow, "DT_REFUND"      , this.dsList.getColumn(i, "DT_REFUND"));
        					this.dsInsert.setColumn(nRow, "NO_CONTRACT"    , this.dsList.getColumn(i, "NO_CONTRACT"));
        					this.dsInsert.setColumn(nRow, "TY_ACCGUBUN"    , this.dsList.getColumn(i, "TY_ACCGUBUN"));
        					this.dsInsert.setColumn(nRow, "CD_BANK"        , this.dsList.getColumn(i, "CD_BANK"));
        					this.dsInsert.setColumn(nRow, "ID_INSERT"      , this.AuthClient.ID_USER);

        				break;
        			case "U" :
        					var nRow = this.dsUpdate.addRow();

        					this.dsUpdate.setColumn(nRow, "CD_ACNTUNIT"    , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        					this.dsUpdate.setColumn(nRow, "TY_GUBUN"       , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        					this.dsUpdate.setColumn(nRow, "NO_CHASU"       , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        					this.dsUpdate.setColumn(nRow, "NO_DONG"        , this.dsList.getColumn(i, "NO_DONG"));
        					this.dsUpdate.setColumn(nRow, "NO_FLOOR"       , this.dsList.getColumn(i, "NO_FLOOR"));
        					this.dsUpdate.setColumn(nRow, "NO_HO"          , this.dsList.getColumn(i, "NO_HO"));
        					this.dsUpdate.setColumn(nRow, "NO_UNIONMEMBER" , this.dsList.getColumn(i, "NO_UNIONMEMBER"));
        					this.dsUpdate.setColumn(nRow, "TY_APPRO"       , this.dsList.getColumn(i, "TY_APPRO"));
        					this.dsUpdate.setColumn(nRow, "DT_APPRO"       , this.dsList.getColumn(i, "DT_APPRO"));
        					this.dsUpdate.setColumn(nRow, "AM_APPRO"       , this.dsList.getColumn(i, "AM_APPRO"));
        					this.dsUpdate.setColumn(nRow, "TY_PROCESS"     , this.dsList.getColumn(i, "TY_PROCESS"));
        					this.dsUpdate.setColumn(nRow, "DT_PAYBACK"     , this.dsList.getColumn(i, "DT_PAYBACK"));
        					this.dsUpdate.setColumn(nRow, "AM_PAYBACK"     , this.dsList.getColumn(i, "AM_PAYBACK"));
        					this.dsUpdate.setColumn(nRow, "DS_REFUNDBANK"  , this.dsList.getColumn(i, "DS_REFUNDBANK"));
        					this.dsUpdate.setColumn(nRow, "NO_REFUNDBANK"  , this.dsList.getColumn(i, "NO_REFUNDBANK"));
        					this.dsUpdate.setColumn(nRow, "DS_OWNER"       , this.dsList.getColumn(i, "DS_OWNER"));
        					this.dsUpdate.setColumn(nRow, "DT_REFUND"      , this.dsList.getColumn(i, "DT_REFUND"));
        					this.dsUpdate.setColumn(nRow, "NO_CONTRACT"    , this.dsList.getColumn(i, "NO_CONTRACT"));
        					this.dsUpdate.setColumn(nRow, "TY_ACCGUBUN"    , this.dsList.getColumn(i, "TY_ACCGUBUN"));
        					this.dsUpdate.setColumn(nRow, "CD_BANK"        , this.dsList.getColumn(i, "CD_BANK"));
        					this.dsUpdate.setColumn(nRow, "ID_UPDATE"      , this.AuthClient.ID_USER);
        				break;
        			case "D" :
        					var nRow = this.dsDelete.addRow();

        					this.dsDelete.setColumn(nRow, "CD_ACNTUNIT"    , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        					this.dsDelete.setColumn(nRow, "TY_GUBUN"       , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        					this.dsDelete.setColumn(nRow, "NO_CHASU"       , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        					this.dsDelete.setColumn(nRow, "NO_DONG"        , this.dsList.getColumn(i, "NO_DONG"));
        					this.dsDelete.setColumn(nRow, "NO_FLOOR"       , this.dsList.getColumn(i, "NO_FLOOR"));
        					this.dsDelete.setColumn(nRow, "NO_HO"          , this.dsList.getColumn(i, "NO_HO"));
        					this.dsDelete.setColumn(nRow, "NO_UNIONMEMBER" , this.dsList.getColumn(i, "NO_UNIONMEMBER"));
        					this.dsDelete.setColumn(nRow, "NO_APPRO"       , this.dsList.getColumn(i, "NO_APPRO"));
        					this.dsDelete.setColumn(nRow, "NO_CONTRACT"    , this.dsList.getColumn(i, "NO_CONTRACT"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지코드를 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_START")) || this.gfnIsNull(this.dsSearch.getColumn(0, "DT_END"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_START.setFocus();
        		}
        		this.gfnAlert("기간시작일 또는 종료일을 입력하지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_START"), this.dsSearch.getColumn(0, "DT_END")) < 0) {
        		this.gfnAlert("기간종료일은 시작일 보다 커야합니다.");
        		return false;
        	}

        	return true;
        };

        this.fnSaveValidation = function() {
        	var msg = "";
        	var validate = true;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		if (this.gfnIsNull(flag) || flag == "D") continue;

        		if (this.gfnNvl(this.dsList.getColumn(i, "TY_PROCESS")) == "3") {
        			if (this.gfnIsNull(this.dsList.getColumn(i, "DT_REFUND"))) {
        				msg += "환불일자는 반드시 입력하셔야 합니다.\n";
        				validate = false;
        			}
        			if (this.gfnIsNull(this.dsList.getColumn(i, "DS_REFUNDBANK"))) {
        				msg += "환불은행은 반드시 입력하셔야 합니다.\n";
        				validate = false;
        			}
        			if (this.gfnIsNull(this.dsList.getColumn(i, "NO_REFUNDBANK"))) {
        				msg += "환불계좌는 반드시 입력하셔야 합니다.\n";
        				validate = false;
        			}
        			if (this.gfnIsNull(this.dsList.getColumn(i, "DS_OWNER"))) {
        				msg += "예금주는 반드시 입력하셔야 합니다.\n";
        				validate = false;
        			}
        		}
        		else {
        			if (!this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "DT_REFUND")))) {
        				msg += "환불처리가 아니므로 환불일자는 입력하지 않습니다.\n";
        				validate = false;
        			}
        			if (!this.gfnIsNull(this.dsList.getColumn(i, "DS_REFUNDBANK"))) {
        				msg += "환불처리가 아니므로 환불은행는 입력하지 않습니다.\n";
        				validate = false;
        			}
        			if (!this.gfnIsNull(this.dsList.getColumn(i, "NO_REFUNDBANK"))) {
        				msg += "환불처리가 아니므로 환불계좌는 입력하지 않습니다.\n";
        				validate = false;
        			}
        			if (!this.gfnIsNull(this.dsList.getColumn(i, "DS_OWNER"))) {
        				msg += "환불처리가 아니므로 예금주는 입력하지 않습니다.\n";
        				validate = false;
        			}
        		}

        		if (!validate) {
        			this.gfnAlert(msg);
        			return validate;
        		}
        	}

        	return validate;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
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

        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 사업지코드
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP" , this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}

        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_ExpandUp = function(obj,e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if (colnm == "NO_HO") {
        		this.fnGridDonghoCodeFind();
        	}
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	switch(id) {
        		case "DCZ_CFACCOUNT_BYCASH":
        			dsUserParam.setColumn(nrow, "TY_CASH", "20");
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			break;
        		default:
        			break;
        	}
        	return true;
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnGridDonghoCodeFind = function() {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG = "1";

        	this.gfnFormOpen("DRI", "DRI_DONGHOCONTRACT", "fnPopupCallback", param);
        }

        this.fnPopupCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	this.dsList.setColumn(this.dsList.rowposition, "NO_DONG"      , json.DONG);
        	this.dsList.setColumn(this.dsList.rowposition, "NO_FLOOR"     , json.FLOOR);
        	this.dsList.setColumn(this.dsList.rowposition, "NO_HO"        , json.HO);
        	this.dsList.setColumn(this.dsList.rowposition, "DS_CONTRACTOR", json.NAME);
        }

        // 반제
        this.fnAppRoBack = function(obj,e) {

        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var row = this.dsList.rowposition;

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_APPRO = this.dsList.getColumn(row, "NO_APPRO") //.toString().padLeft(4, "0"));
        	param.DT_APPRO = this.dsList.getColumn(row, "DT_APPRO");
        	param.AM_APPRO = nexacro.toNumber(this.dsList.getColumn(row, "AM_APPRO"));
        	param.CD_GUJA = this.dsList.getColumn(row, "CD_GUJA");
        	param.DS_BANK = this.dsList.getColumn(row, "DS_BANK");
        	param.DS_REMARK = this.dsList.getColumn(row, "DS_REMARK");
        	param.YN_BANJEA = this.dsList.getColumn(row, "TY_STATUS");
        	param.NO_DONG = this.dsList.getColumn(row, "NO_DONG");
        	param.NO_FLOOR = this.dsList.getColumn(row, "NO_FLOOR");
        	param.NO_HO = this.dsList.getColumn(row, "NO_HO");
        	param.DS_CONTRACTOR = this.dsList.getColumn(row, "DS_CONTRACTOR");
        	param.NO_CONTRACT = this.dsList.getColumn(row, "NO_CONTRACT");

        	this.gfnFormOpen("DRF", "DRF_APPROBACK", "fnPopCallBack", param);

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRF_APPROPRIATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
