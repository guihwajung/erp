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
            this.set_titletext("별도계약일괄수납");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRCPR_AUTORECEIPT_BATCH_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRCPR_AUTORECEIPT_BATCH_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DRCPR_AUTORECEIPT_DELETE</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRCPR_FBS_AUTORECEIPT_MIGRATION</Col></Row><Row><Col id=\"TARGET\">deleteFBS</Col><Col id=\"SP\">DRCPR_FBS_AUTORECEIPT_MIGRATION_ERR</Col></Row><Row><Col id=\"TARGET\">deleteFBSTrade</Col><Col id=\"SP\">DRCPR_FBS_TRADE_UPLOAD_SHINYOUNG</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CHKRECEIPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"DS_ACNTUNIT\"/></Row></Rows>");
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
            obj.getSetter("CodeFindName").set("DLX_CFACNTUNIT_OPT_BATCH");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_RECEIPT","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("입금기간");
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

            obj = new Static("staYN_CHKRECEIPT","ctclDT_END:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("수납여부");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_CHKRECEIPT","staYN_CHKRECEIPT:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var divSearch_form_ccboYN_CHKRECEIPT_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboYN_CHKRECEIPT_innerdataset", obj);
            divSearch_form_ccboYN_CHKRECEIPT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미수납건</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">수납건</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboYN_CHKRECEIPT_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
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

            obj = new BindItem("item4","divSearch.form.ctclDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclDT_END","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboYN_CHKRECEIPT","value","dsSearch","YN_CHKRECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLF_RECEIPTBATCH.xfdl", function() {
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

        	if(this.FormInfo.TY_AUTH == "R") {
        		this.FormBtns.Save.set_enable(false);
        	}
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
        	this.btnAutoSunap = this.gfnFormButtonAdd("AutoSunap", "fnButtonClick"); 	// 수납처리
        	this.btnReceiptMg = this.gfnFormButtonAdd("ReceiptMg", "fnButtonClick"); 	// 수납관리
        	this.btnExcelData = this.gfnFormButtonAdd("ExcelData", "fnButtonClick"); 	// 엑셀자료관리
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;	// 사업지코드

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLF_RECEIPTBATCH");

        	//조회기간
        	this.dsSearch.setColumn(0, "DT_START", this.gfnGetDate());
        	this.dsSearch.setColumn(0, "DT_END"  , this.gfnGetDate());

        	// 수납처
        	this.dsSearch.set_enableevent(false);
        	this.dsSearch.setColumn(0, "YN_CHKRECEIPT", "N");	// 미수납건
        	this.dsSearch.set_enableevent(true);

        	// 체크박스 일괄.
        	this.dxGrid.setEventHandler("onheadclick"   , this.fnGrid_onheadclick, this);
        	this.dxGrid.setEventHandler("oncelldblclick", this.fnGrid_oncelldblclick, this);

        	this.dxGrid.AfterEdit = "fnGridSub_AfterEdit";

        	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.UserInfo.DL_SPACE01);
        	this.dsSearch.setColumn(0, "DS_ACNTUNIT", this.UserInfo.DL_SPACE02);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT"  		, "string");
        	this.dsSelect.addColumn("TY_GUBUN"     		, "string");
        	this.dsSelect.addColumn("NO_CHASU"     		, "string");
        	this.dsSelect.addColumn("DT_START"     		, "string");
        	this.dsSelect.addColumn("DT_END"       		, "string");
        	this.dsSelect.addColumn("YN_OPTION"    		, "string");
        	this.dsSelect.addColumn("YN_CHKRECEIPT"		, "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT"  		, "string");
        	this.dsInsert.addColumn("TY_GUBUN"     		, "string");
        	this.dsInsert.addColumn("NO_CHASU"     		, "string");
        	this.dsInsert.addColumn("NO_DONG"      		, "string");
        	this.dsInsert.addColumn("NO_FLOOR"     		, "string");
        	this.dsInsert.addColumn("NO_HO"        		, "string");
        	this.dsInsert.addColumn("DT_RECEIPT"   		, "string");
        	this.dsInsert.addColumn("AM_RECEIPT"   		, "bigdecimal");
        	this.dsInsert.addColumn("NO_GUJA"      		, "string");
        	this.dsInsert.addColumn("CD_TRADE"     		, "string");
        	this.dsInsert.addColumn("ID_INSERT"    		, "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT"  		, "string");
        	this.dsUpdate.addColumn("TY_GUBUN"     		, "string");
        	this.dsUpdate.addColumn("NO_CHASU"     		, "string");
        	this.dsUpdate.addColumn("NO_DONG"      		, "string");
        	this.dsUpdate.addColumn("NO_FLOOR"     		, "string");
        	this.dsUpdate.addColumn("NO_HO"        		, "string");
        	this.dsUpdate.addColumn("DT_RECEIPT"   		, "string");
        	this.dsUpdate.addColumn("NO_SEQ"       		, "string");
        	this.dsUpdate.addColumn("DS_CONTRACTOR"		, "string");
        	this.dsUpdate.addColumn("ID_UPDATE"    		, "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT"  		, "string");
        	this.dsDelete.addColumn("TY_GUBUN"     		, "string");
        	this.dsDelete.addColumn("NO_CHASU"     		, "string");
        	this.dsDelete.addColumn("NO_SEQ"       		, "string");
        	this.dsDelete.addColumn("DT_RECEIPT"   		, "string");
        	this.dsDelete.addColumn("ID_INSERT"    		, "string");

        	// FBS
        	this.dsInsertFBS = new Dataset();
        	this.dsInsertFBS.addColumn("CD_ACNTUNIT"  	, "string");
        	this.dsInsertFBS.addColumn("TY_GUBUN"     	, "string");
        	this.dsInsertFBS.addColumn("NO_CHASU"     	, "string");
        	this.dsInsertFBS.addColumn("DT_RECEIVED"  	, "string");
        	this.dsInsertFBS.addColumn("NO_SEQ"       	, "string");
        	this.dsInsertFBS.addColumn("YN_OPTION"    	, "string");
        	this.dsInsertFBS.addColumn("ID_INSERT"    	, "string");
        	this.dsInsertFBS.addColumn("NO_CONTRACT"	, "string");

        	this.dsDeleteFBS = new Dataset();
        	this.dsDeleteFBS.addColumn("DT_RECEIVED"  	, "string");
        	this.dsDeleteFBS.addColumn("NO_SEQ"     	, "string");
        	this.dsDeleteFBS.addColumn("DS_REMARK"     	, "string");
        	this.dsDeleteFBS.addColumn("ID_UPDATE"  	, "string");

        	//
        	this.dsDeleteFBSTrade = new Dataset();
        	this.dsDeleteFBSTrade.addColumn("CD_ACNTUNIT", "string");
        	this.dsDeleteFBSTrade.addColumn("DT_START"   , "string");
        	this.dsDeleteFBSTrade.addColumn("DT_END"     , "string");
        	this.dsDeleteFBSTrade.addColumn("YN_OPTION"  , "string");
        	this.dsDeleteFBSTrade.addColumn("ID_INSERT"  , "string");
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

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT"  , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(1, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN"     , "");
        	this.dsSelect.setColumn(0, "NO_CHASU"     , "");
        	this.dsSelect.setColumn(0, "DT_START"     , this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSelect.setColumn(0, "DT_END"       , this.dsSearch.getColumn(0, "DT_END"));
        	this.dsSelect.setColumn(0, "YN_OPTION"    , "Y");
        	this.dsSelect.setColumn(0, "YN_CHKRECEIPT", this.dsSearch.getColumn(0, "YN_CHKRECEIPT"));

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
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {};

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {};

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	if(!this.gfnGridValidate(this.dxGrid)) return false;

        	this.dxGrid.updateToDataset();

        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag      = this.gfnGetFlag(this.dsListPayback, i);
        		switch(flag) {
        			case "D" :
        					var nRow = this.dsDelete.addRow();

        					this.dsDelete.setColumn(nRow, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(1, 6));
        					this.dsDelete.setColumn(nRow, "TY_GUBUN"      , this.dsList.getColumn(i, "TY_GUBUN"));
        					this.dsDelete.setColumn(nRow, "NO_CHASU"      , this.dsList.getColumn(i, "NO_CHASU"));
        					this.dsDelete.setColumn(nRow, "NO_SEQ"        , this.dsList.getColumn(i, "NO_SEQ"));
        					this.dsDelete.setColumn(nRow, "DT_RECEIVED"   , this.dsList.getColumn(i, "DT_RECEIVED"));
        					this.dsDelete.setColumn(nRow, "DS_REMARK"     , this.dsList.getColumn(i, "DS_REMARK"));
        					this.dsDelete.setColumn(nRow, "ID_INSERT"     , this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
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

        this.fnUpdate = function($flag) {

        	if(!this.gfnGridValidate(this.dxGrid)) return false;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsDeleteFBS.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {

        		switch($flag) {
        			case "AutoSunap" :	// 수납처리.

        					if(this.dsList.getColumn(i, "CHK") == "1") {
        						var nRow = this.dsInsert.addRow();

        						this.dsInsert.setColumn(nRow, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(1, 6));
        						this.dsInsert.setColumn(nRow, "TY_GUBUN"      , this.dsList.getColumn(i, "TY_GUBUN"));
        						this.dsInsert.setColumn(nRow, "NO_CHASU"      , this.dsList.getColumn(i, "NO_CHASU"));
        						this.dsInsert.setColumn(nRow, "DT_RECEIVED"   , this.dsList.getColumn(i, "DT_RECEIVED"));
        						this.dsInsert.setColumn(nRow, "NO_SEQ"        , this.dsList.getColumn(i, "NO_SEQ"));
        						this.dsInsert.setColumn(nRow, "YN_OPTION"     , "Y");
        						this.dsInsert.setColumn(nRow, "NO_CONTRACT"   , this.dsList.getColumn(i, "NO_CONTRACT"));
        						this.dsInsert.setColumn(nRow, "ID_INSERT"     , this.AuthClient.ID_USER);
        					}

        				break;

        			case "AutoSunapFail" :	// 수납실패처리.

        					if(this.dsList.getColumn(i, "CHK") == "1") {
        						var nRow = this.dsDeleteFBS.addRow();

        						this.dsDeleteFBS.setColumn(nRow, "DT_RECEIVED" , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        						this.dsDeleteFBS.setColumn(nRow, "NO_SEQ"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        						this.dsDeleteFBS.setColumn(nRow, "DS_REMARK"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        						this.dsDeleteFBS.setColumn(nRow, "ID_UPDATE"   , this.AuthClient.ID_USER);
        					}

        				break;

        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsDeleteFBS.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert updateFBS=dsUpdateFBS";
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지코드를 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_START")) || this.gfnIsNull(this.dsSearch.getColumn(0, "DT_END")))
        	{
        		this.gfnAlert("입금기간이 입력되지 않았습니다.");
        		return false;
        	}

        	if (this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_START"), this.dsSearch.getColumn(0, "DT_END")) < 0)
        	{
        		this.gfnAlert("완료입금일자는 시작입금일자보다 크거나 같아야 합니다.");
        		return false;
        	}

        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if (svcID == "select") {}
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

        /*
         * 코드파인드 변경후
         */
        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	if (id == "ccfCD_ACNTUNIT") {
        		if(arr.length > 0) {
        			this.UserInfo.DL_SPACE01 = arr[0];
        			this.UserInfo.DL_SPACE02 = arr[1];
        			this.UserInfo.DL_SPACE03 = arr[2];
        			this.UserInfo.DL_SPACE04 = arr[3];
        			this.UserInfo.DL_SPACE05 = arr[4];
        		}
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridSub_AfterEdit = function(obj, e)
        {
        	if(e.oldvalue != e.newvalue) {

        		if(e.columnid == "NO_DONG") {

        			if(e.newvalue != "" && e.newvalue.length != 4) {
        				this.dsList.setValue(this.dsList.rowposition, "NO_DONG", "000" + e.newvalue.substr(0, 4));
        			}
        		}

        		if(e.columnid == "NO_FLOOR") {

        			if(e.newvalue != "" && e.newvalue.length != 2) {
        				this.dsList.setValue(this.dsList.rowposition, "NO_FLOOR", "0" + e.newvalue.substr(0, 2));
        			}
        		}

        		if(e.columnid == "NO_HO") {

        			if(e.newvalue != "" && e.newvalue.length != 3) {
        				this.dsList.setValue(this.dsList.rowposition, "NO_HO", "00" + e.newvalue.substr(0, 2));
        			}
        		}
        	}
         };


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {

        		if(e.columnid == "YN_CHKRECEIPT") {
        			this.FormBtns.Select.click();

        			this.fnColorSetter(e.newvalue);
        		}

        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnColorSetter = function($value) {

        	var i = 0, len = this.dsList.colcount;

        	for(i = 0; i < len; ++i) {
        		this.dxGrid.setCellProperty("body", i, "cssclass", $value == "Y" ? "Blue" : "");
        	}

        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "CHK"), "edittype", "expr:YN_CHKRECEIPT == 'N' ? 'checkbox' : 'none'");
        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "CHK"), "cssclass", "expr:YN_CHKRECEIPT == 'N' ? '' : 'BACK_ReadOnly'");
        }

        this.fnButtonClick = function(obj,e) {

        	switch(obj.name) {
        		case "btnExt_AutoSunap":	// 수납처리

        				var i = 0, len = this.dsList.rowcount;

        				for(i = 0; i < len; ++i) {
        					if(this.dsList.getColumn(i, "CHK") == "1" && this.dsList.getColumn(i, "YN_CHKRECEIPT") == "N") {
        						try {
        							this.fnUpdate("AutoSunap");
        						} catch(exception) {
        							this.fnUpdate("AutoSunapFail");
        						}
        						return;
        					}
        				}
        				this.gfnAlert("수납처리할 대상을 선택하여 주십시오.");
        			break;

        		case "btnExt_ReceiptMg":	// 수납관리

        				this.fnMngSunap();

        			break;

        		case "btnExt_ExcelData":	// 엑셀자료관리

        				var param = {};

        				param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        				param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        				param.DT_FROM     = this.dsSearch.getColumn(0, "DT_START");
        				param.DT_TO       = this.dsSearch.getColumn(0, "DT_END");
        				param.YN_OPTION   = "Y";

        				this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRC_RECEIPTBATCHEXCEL_NEW", "", param);

        			break;
        	}
        }

        // 그리드 헤드 클릭 이벤트 재정의
        this.fnGrid_onheadclick = function(objGrid, e) {
        	var cell = this._gfnGridGetBodyCellIndex(objGrid, e.cell);
        	var colnm = this.gfnGridGetBindColumnNameByIndex(objGrid, cell);
        	// 체크박스 클릭한 경우.
        	if(colnm == "CHK" && this.dsSearch.getColumn(0, "YN_CHKRECEIPT") == "Y") {
        		var sVal = objGrid.getCellProperty("head", e.cell, "text");
        		var sChk;
        		if (sVal == "1") {
        			objGrid.setCellProperty("head", e.cell, "text", "0");
        			sChk="0";
        		} else {
        			objGrid.setCellProperty("head", e.cell, "text", "1");
        			sChk="1";
        		}

        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			if(this.dsList.getColumn(i, "YN_CHKVIEW") == "Y")
        			{
        				this.dsList.setColumn(i, "CHK", sChk);
        			}
        		}
        	}
        	// 체크박스를 클릭한게 아니라면 기존의 공통의 그리드 헤드 클릭 이벤트를 탄다.
        	else {
        		this.gfnGrid_onheadclick(objGrid, e);
        	}
        };

        /*
        *	그리드 셀 더블클릭 이벤트.
        */
        this.fnGrid_oncelldblclick = function(obj,e) {
        	this.fnMngSunap();
        }

        /*
        *	수납관리.
        */
        this.fnMngSunap = function() {

        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};

        	param.CD_ACNTUNIT    = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT    = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_DONG        = this.dsList.getColumn(this.dsList.rowposition, "NO_DONG");
        	param.NO_FLOOR       = this.dsList.getColumn(this.dsList.rowposition, "NO_FLOOR");
        	param.NO_HO          = this.dsList.getColumn(this.dsList.rowposition, "NO_HO");
        	param.DS_CONTRACTOR  = this.dsList.getColumn(this.dsList.rowposition, "DS_CONTRACTOR");
        	param.NO_UNIONMEMBER = this.dsList.getColumn(this.dsList.rowposition, "NO_UNIONMEMBER");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLF_RECEIPTDETAIL", "", param);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLF_RECEIPTBATCH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
