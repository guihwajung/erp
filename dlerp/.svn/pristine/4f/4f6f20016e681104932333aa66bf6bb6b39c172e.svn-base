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
            this.set_titletext("브랜치거래내역조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFLPR_TRADEBRANCH_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"SP\">DFLPR_TRADEBRANCH_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"SP\">DFLPR_TRADEBRANCH_UPDATE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"SP\">DFLPR_TRADEBRANCH_DELETE</Col><Col id=\"TARGET\">delete</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REGIST_FROM","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("tclFR_SEARCH","staDT_REGIST_FROM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REGIST_TO","tclFR_SEARCH:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("tclTO_SEARCH","staDT_REGIST_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","tclTO_SEARCH:10","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
            obj.set_text("입금");
            obj.set_value("입금");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("은행코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfBANK","staCD_CORP00:0.0","staCD_CORP:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_ACCOUNT","cfBANK:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT","staNO_ACCOUNT:0.0","staCD_CORP:10.0","240","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFL_TRADEBRANCH.xfdl", function() {
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
        	this.fnSetCombo2();

        	// 법인코드 포커스추가
        	this.ccfCD_CORP.form.CDTextBox.setFocus();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Save.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnClassifyInput = this.gfnFormButtonAdd("btnClassifyInput", "fnClassifyInput", "거래내역 입력");
        	//this.btnClassifyDelete = this.gfnFormButtonAdd("btnClassifyDelete", "fnClassifyDelete", "거래내역 삭제");
        // 	this.btnUPloadExecl = this.gfnFormButtonAdd("btnUPloadExecl", "fnUPloadExecl", "엑셀업로드");
        // 	this.btnfnChangeTyCms = this.gfnFormButtonAdd("btnfnChangeTyCms", "fnChangeTyCms", "대체구분변경");
        	//this.btnAllClear = this.gfnFormButtonAdd("btnAllClear", "fnAllClear", "거래내역 일괄삭제");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;		// 법인코드
        	this.cfBANK = this.divSearch.form.cfBANK;				// 은행지점
        	this.cfNO_ACCOUNT = this.divSearch.form.cfNO_ACCOUNT;	// 은행지점
        	this.ccboTY_GUBUN = this.divSearch.form.ccboTY_GUBUN;	// 구분
        	this.tclFR_SEARCH = this.divSearch.form.tclFR_SEARCH;	// 수령일자(from)
        	this.tclTO_SEARCH = this.divSearch.form.tclTO_SEARCH;	// 수령일자(to)

        	this.dxGrid = this.divData.form.objGrid;
        	this.grSearch = this.FormInfo.GR_SEARCH;		// 권한?
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DZX_CFCORP";
        	this.cfBANK.CodeFindName = "DFX_CFBANKCODE";
        	this.cfNO_ACCOUNT.CodeFindName = "DFX_CFACCOUNTNO_SUJI";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfBANK.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfBANK.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfNO_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFL_TRADEBRANCH");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	var vToday = this.gfnGetDate();
        	this.tclFR_SEARCH.set_value(this.gfnAddDate(vToday, -1));
        	this.tclTO_SEARCH.set_value(vToday);

        	// 권한체크 - 해당부서내역만 조회가능
        // 	if (nexacro.toNumber(this.grSearch) >= 2) {
        // 		this.ccfCD_CORP.set_enable(false);
        // 	}

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	//this.dsSelect.addColumn("TY_INOUT", "string");
        	this.dsSelect.addColumn("DT_TRADE_FR", "string");
        	this.dsSelect.addColumn("DT_TRADE_TO", "string");
        	this.dsSelect.addColumn("CD_BANK", "string");
        	this.dsSelect.addColumn("NO_ACCOUNT", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("SITE_NO", "string");
        	this.dsInsert.addColumn("BANK_CD", "string");
        	this.dsInsert.addColumn("ACCT_NO", "string");
        	this.dsInsert.addColumn("ACCT_TXDAY", "string");
        	this.dsInsert.addColumn("REMARK1", "string");
        	this.dsInsert.addColumn("REMARK2", "string");
        	this.dsInsert.addColumn("INOUT_GUBUN", "string");
        	this.dsInsert.addColumn("TX_AMT", "bigdecimal");
        	this.dsInsert.addColumn("TX_CUR_BAL", "bigdecimal");
        	this.dsInsert.addColumn("BIGO", "string");
        	this.dsInsert.addColumn("BRANCH1", "string");
        	this.dsInsert.addColumn("BRANCH2", "string");
        	this.dsInsert.addColumn("ACCT_TXTIME", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("SITE_NO", "string");
        	this.dsUpdate.addColumn("BANK_CD", "string");
        	this.dsUpdate.addColumn("ACCT_NO", "string");
        	this.dsUpdate.addColumn("ACCT_TXDAY", "string");
        	this.dsUpdate.addColumn("ACCT_TXDAY_SEQ", "int");
        	this.dsUpdate.addColumn("REMARK1", "string");
        	this.dsUpdate.addColumn("REMARK2", "string");
        	this.dsUpdate.addColumn("INOUT_GUBUN", "string");
        	this.dsUpdate.addColumn("TX_AMT", "bigdecimal");
        	this.dsUpdate.addColumn("TX_CUR_BAL", "bigdecimal");
        	this.dsUpdate.addColumn("BIGO", "string");
        	this.dsUpdate.addColumn("BRANCH1", "string");
        	this.dsUpdate.addColumn("BRANCH2", "string");
        	this.dsUpdate.addColumn("ACCT_TXTIME", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("SITE_NO", "string");
        	this.dsDelete.addColumn("BANK_CD", "string");
        	this.dsDelete.addColumn("ACCT_NO", "string");
        	this.dsDelete.addColumn("ACCT_TXDAY", "string");
        	this.dsDelete.addColumn("ACCT_TXDAY_SEQ", "int");

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

        	//this.dsSelect.setColumn(0, "TY_INOUT", this.ccboTY_GUBUN.value);
        	this.dsSelect.setColumn(0, "DT_TRADE_FR", this.tclFR_SEARCH.value);
        	this.dsSelect.setColumn(0, "DT_TRADE_TO", this.tclTO_SEARCH.value);
        	this.dsSelect.setColumn(0, "CD_BANK", this.cfBANK.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "NO_ACCOUNT", this.cfNO_ACCOUNT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        // 	this.dsList.set_enableevent(false);
        //
        // 	this.dsList.setColumn(nrow, "CD_TRADE", this.ccboTY_GUBUN.value);	// 입출구분
        // 	this.dsList.setColumn(nrow, "YN_CANCEL", "N");					    // 취소거래여부
        //
        // 	this.dsList.set_enableevent(true);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "SITE_NO", this.dsList.getColumn(i, "SITE_NO"));
        				this.dsInsert.setColumn(nrow, "BANK_CD", this.dsList.getColumn(i, "BANK_CD"));
        				this.dsInsert.setColumn(nrow, "ACCT_NO", this.dsList.getColumn(i, "ACCT_NO"));
        				this.dsInsert.setColumn(nrow, "ACCT_TXDAY", this.dsList.getColumn(i, "ACCT_TXDAY"));
        				this.dsInsert.setColumn(nrow, "REMARK1", this.dsList.getColumn(i, "REMARK1"));
        				this.dsInsert.setColumn(nrow, "REMARK2", this.dsList.getColumn(i, "REMARK2"));
        				this.dsInsert.setColumn(nrow, "INOUT_GUBUN", this.dsList.getColumn(i, "INOUT_GUBUN"));
        				this.dsInsert.setColumn(nrow, "TX_AMT", this.dsList.getColumn(i, "TX_AMT"));
        				this.dsInsert.setColumn(nrow, "TX_CUR_BAL", this.dsList.getColumn(i, "TX_CUR_BAL"));
        				this.dsInsert.setColumn(nrow, "BIGO", this.dsList.getColumn(i, "BIGO"));
        				this.dsInsert.setColumn(nrow, "BRANCH1", this.dsList.getColumn(i, "BRANCH1"));
        				this.dsInsert.setColumn(nrow, "BRANCH2", this.dsList.getColumn(i, "BRANCH2"));
        				this.dsInsert.setColumn(nrow, "ACCT_TXTIME", this.dsList.getColumn(i, "ACCT_TXTIME"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "SITE_NO", this.dsList.getColumn(i, "SITE_NO"));
        				this.dsUpdate.setColumn(nrow, "BANK_CD", this.dsList.getColumn(i, "BANK_CD"));
        				this.dsUpdate.setColumn(nrow, "ACCT_NO", this.dsList.getColumn(i, "ACCT_NO"));
        				this.dsUpdate.setColumn(nrow, "ACCT_TXDAY", this.dsList.getColumn(i, "ACCT_TXDAY"));
        				this.dsUpdate.setColumn(nrow, "ACCT_TXDAY_SEQ", this.dsList.getColumn(i, "ACCT_TXDAY_SEQ"));
        				this.dsUpdate.setColumn(nrow, "REMARK1", this.dsList.getColumn(i, "REMARK1"));
        				this.dsUpdate.setColumn(nrow, "REMARK2", this.dsList.getColumn(i, "REMARK2"));
        				this.dsUpdate.setColumn(nrow, "INOUT_GUBUN", this.dsList.getColumn(i, "INOUT_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "TX_AMT", this.dsList.getColumn(i, "TX_AMT"));
        				this.dsUpdate.setColumn(nrow, "TX_CUR_BAL", this.dsList.getColumn(i, "TX_CUR_BAL"));
        				this.dsUpdate.setColumn(nrow, "BIGO", this.dsList.getColumn(i, "BIGO"));
        				this.dsUpdate.setColumn(nrow, "BRANCH1", this.dsList.getColumn(i, "BRANCH1"));
        				this.dsUpdate.setColumn(nrow, "BRANCH2", this.dsList.getColumn(i, "BRANCH2"));
        				this.dsUpdate.setColumn(nrow, "ACCT_TXTIME", this.dsList.getColumn(i, "ACCT_TXTIME"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "SITE_NO", this.dsList.getColumn(i, "SITE_NO"));
        				this.dsDelete.setColumn(nrow, "BANK_CD", this.dsList.getColumn(i, "BANK_CD"));
        				this.dsDelete.setColumn(nrow, "ACCT_NO", this.dsList.getColumn(i, "ACCT_NO"));
        				this.dsDelete.setColumn(nrow, "ACCT_TXDAY", this.dsList.getColumn(i, "ACCT_TXDAY"));
        				this.dsDelete.setColumn(nrow, "ACCT_TXDAY_SEQ", this.dsList.getColumn(i, "ACCT_TXDAY_SEQ"));

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
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if ( !this.gfnIsNull(this.tclFR_SEARCH.value) && !this.gfnIsNull(this.tclTO_SEARCH.value) ) {
        		if ( this.tclFR_SEARCH.value > this.tclTO_SEARCH.value ) {
        			this.gfnAlert("조회기간이 잘못 입력 되었습니다.");
        			this.tclFR_SEARCH.setFocus();
        			return false;
        		}
        	}

        	if ( this.gfnIsNull(this.tclFR_SEARCH.value) || this.gfnIsNull(this.tclTO_SEARCH.value) ) {
        		this.gfnAlert("조회기간을 입력하셔야 합니다.");
        		this.tclFR_SEARCH.setFocus();
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "combo") {
        		//  조회조건(완료여부)
        		var iRow = this.dsTY_GUBUN.insertRow(0);
        		this.dsTY_GUBUN.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_GUBUN.setColumn(iRow, "DS_CODE", "전체");
        		this.ccboTY_GUBUN.set_index(2);
        	}
        }

        this.fnPopCallBack = function(svcID, val) {
        // 	if (val != false) {
        // 		var json = JSON.parse(val);
        // 		var no_to = parseInt(json.NO_TO);
        // 		var note = parseInt(json.NO_FROM);
        //
        // 		//trace("no_to :: " + no_to);
        // 		//trace("note :: " + note);
        //
        // 		this.dsList.set_enableevent(false);
        //
        // 		for (var row = no_to - 1; row >= 0; row--) {
        // 			var nRow = this.dsList.addRow();
        // 			//trace("note.Length :: " + note.toString().length);
        // 			var newNoteNumber = (note + row).toString().padLeft(note.toString().length, "0");
        //
        // 			this.dsList.setColumn(nRow, this.ucFlag, "I");
        //
        // 			//this.dsList.setColumn(nRow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 			this.dsList.setColumn(nRow, "CD_SIDEBANK", json.CD_SIDEBANK);
        // 			this.dsList.setColumn(nRow, "CD_BANK", json.CD_BANK);
        // 			this.dsList.setColumn(nRow, "DS_BANK", json.DS_BANK);
        // 			this.dsList.setColumn(nRow, "NO_ACCOUNT", json.NO_ACCOUNT);
        // 			this.dsList.setColumn(nRow, "DS_VENDOR", json.DS_VENDOR);
        // 			this.dsList.setColumn(nRow, "DT_REGIST", json.DT_REGIST);
        // 			this.dsList.setColumn(nRow, "NO_NOTES", newNoteNumber);
        // 			this.dsList.setColumn(nRow, "TY_USE", "N");
        // 			this.dsList.setColumn(nRow, "TY_GUBUN", json.TY_GUBUN);
        // 		}
        //
        // 		this.gfnSetFormStatus(this, "I");
        // 		this.dsList.set_enableevent(true);
        //
        // 		//trace(this.dsList.saveXML());
        // 		this.fnSave();
        // 	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdCorp = this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value) ? "" : this.ccfCD_CORP.form.CDTextBox.value;

        	// 법인코드
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP);
        	}

        	// 은행코드
        	if (id == "cfBANK") {

        	}

        	if (id == "cfNO_ACCOUNT") {
        		if ( this.gfnIsNull(cdCorp) ) {
        			dsUserParam.setColumn(nrow, "CD_CORP", "");
        		} else {
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		}
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_CORP") {
        		this.fnSearchInit();
        	}

        	// 은행코드
        	if (id == "cfBANK") {
        		this.fnSearchInit();
        	}

        	if (id == "cfNO_ACCOUNT") {
        		this.fnSearchInit();
        	}
        }

        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        	//trace("id :: " + id);
        	if (id == "DFX_CFACCOUNTNO_SUJI") {
        		if ( this.gfnIsNull(cdCorp) ) {
        			dsUserParam.setColumn(nrow, "CD_CORP", "");
        		} else {
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		}
        		//trace("dsUserParam :: " + dsUserParam.saveXML());
        	}

        	if (id == "DZX_CFCOMPANYCORP") {
        		if ( this.gfnIsNull(cdCorp) ) {
        			dsUserParam.setColumn(nrow, "CD_CORP", "");
        		} else {
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		}
        		//trace("dsUserParam :: " + dsUserParam.saveXML());
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "11");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_GUBUN=combo0";
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

        this.fnSetCombo2 = function() {

        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_TYPE", "string");

        	this.dsCombo2.addRow();
        	this.dsCombo2.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo2.setColumn(0, "CD_TYPE", "10");

        	var strSvcId    = "combo2";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo2";
        	var outData     = "dsTY_GUBUN2=combo0";
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

        // 엑셀 업로드 버튼 이벤트
        this.fnUPloadExecl = function(obj,e) {
        	this.dsList.clearData();
        	this.gfnExcelImport("dsList","sheet1","A2","fnExcelImportCallback","import",this);
        }

        /*
         *	엑셀업로드 Callback
         */
        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {

        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        // 	if (dsSheet.rowcount > 1) {
        // 		trace(dsSheet.getColumn(1, "sheetname"));
        // 	}

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다.");
        		return false;
        	}

        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;

        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);

        	this.dsList.set_enableevent(false);
        	for (var i=0; i< dsOut.rowcount; i++) {
        		for (var j=0; j< dsOut.colcount; j++) {
        			if (!this.gfnIsNull(dsOut.getColumn(i,j)) ){
        				dsOut.setColumn(i,j,nexacro.trim(dsOut.getColumn(i,j)));
        				var strColID = dsOut.getColID( j );
        				if ( strColID == "DT_TRADE" || strColID == "DT_EXPIRY" ){
        					dsOut.setColumn(i,j,dsOut.getColumn(i,j).replace(/\-/g,''));
        				}
        				else if (strColID == "TY_CASH") {
        					var row = this.dsTY_GUBUN2.findRow("DS_CODE", dsOut.getColumn(i,j))
        					if (row >= 0)
        						dsOut.setColumn(i, j, this.dsTY_GUBUN2.getColumn(row, "CD_CODE"));
        				}
        				else if (strColID == "CD_TRADE") {
        					var row = this.dsTY_GUBUN.findRow("DS_CODE", dsOut.getColumn(i,j))
        					if (row >= 0)
        						dsOut.setColumn(i, j, this.dsTY_GUBUN.getColumn(row, "CD_CODE"));
        				}
        			}
        		}
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		// 양식이 일치하는 경우 copyRow
        		this.dsList.copyRow(nrow, dsOut, i);

        	}

        	this.dsList.set_enableevent(true);
        	this.gfnSetFormStatus(this, "I");
        };

        this.fnOnitemchanged = function(obj,e)
        {
        	this.gfnGridClear(this.dxGrid);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.tclFR_SEARCH.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.tclTO_SEARCH.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ccboTY_GUBUN.addEventHandler("onitemchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DFL_TRADEBRANCH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
