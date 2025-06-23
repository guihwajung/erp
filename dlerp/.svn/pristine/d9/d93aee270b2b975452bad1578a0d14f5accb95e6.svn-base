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
            this.set_titletext("입금내역 수기 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFLPR_TRADEDETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFLPR_CASHINLIST_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFLPR_CASHINLIST_DELETE</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFLPR_CASHINLIST_UPDATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"SP\">DFLPR_CASHINLIST_CMS</Col><Col id=\"TARGET\">changeTyCms</Col></Row><Row><Col id=\"TARGET\">selectCurrExchange</Col><Col id=\"SP\">DHXPR_CURRENCY_EXCHAGE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCurrExchange", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CMS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_CONFIRM", this);
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

            obj = new Div("cfDEPT","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","cfDEPT:5","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("입금");
            obj.set_value("입금");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REGIST_FROM","ccboTY_GUBUN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("staCD_CORP01","ccboTY_GUBUN:0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT","staCD_CORP01:0.0","staCD_CORP:10.0","240","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","cfNO_ACCOUNT:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("처리부서");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta00:0.0","staCD_CORP:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("4");
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
        this.registerScript("DFL_TRADEDETAIL.xfdl", function() {
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

        	// 법인코드 포커스추가
        	this.cfDEPT.form.CDTextBox.setFocus();
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
        	this.btnUPloadExecl = this.gfnFormButtonAdd("btnUPloadExecl", "fnUPloadExecl", "엑셀업로드");
        	this.btnfnChangeTyCms = this.gfnFormButtonAdd("btnfnChangeTyCms", "fnChangeTyCms", "대체구분변경");
        	//this.btnAllClear = this.gfnFormButtonAdd("btnAllClear", "fnAllClear", "거래내역 일괄삭제");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.cfDEPT = this.divSearch.form.cfDEPT;				// 법인코드
        	this.cfBANK = this.divSearch.form.cfBANK;				// 은행지점
        	this.cfNO_ACCOUNT = this.divSearch.form.cfNO_ACCOUNT;	// 은행지점

        	this.ccboTY_GUBUN = this.divSearch.form.ccboTY_GUBUN;	// 구분

        	this.tclFR_SEARCH = this.divSearch.form.tclFR_SEARCH;	// 수령일자(from)
        	this.tclTO_SEARCH = this.divSearch.form.tclTO_SEARCH;	// 수령일자(to)

        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;

        	this.dxGrid = this.divData.form.objGrid;
        	this.grSearch = this.FormInfo.GR_SEARCH;		// 권한?
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfDEPT.CodeFindName = "DZX_CFCORP";
        	this.cfBANK.CodeFindName = "DFX_CFBANKCODE";
        	this.ccfCD_DEPT.CodeFindName = "DFX_CFACNTUNIT_GROUP";	// 처리부서
        	this.cfNO_ACCOUNT.CodeFindName = "DFX_CFACCOUNTNO_SUJI";

        	this.cfDEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfBANK.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.cfDEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfBANK.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfNO_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFL_TRADEDETAIL");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);

        	var vToday = this.gfnGetDate();
        	this.tclFR_SEARCH.set_value(this.gfnAddDate(vToday, -1));
        	this.tclTO_SEARCH.set_value(vToday);

        	// 권한체크 - 해당부서내역만 조회가능
        // 	if (nexacro.toNumber(this.grSearch) >= 2) {
        // 		this.cfDEPT.set_enable(false);
        // 	}

        	if (this.gfnIsNull(this.cfDEPT.form.CDTextBox.value)) {
        		this.cfDEPT.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.cfDEPT.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	if (nexacro.toNumber(this.grSearch) >= 7) {
        		this.divSearch.form.sta00.set_textDecoration("underline");
        	}
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_INOUT", "string");
        	this.dsSelect.addColumn("DT_TRADE_FR", "string");
        	this.dsSelect.addColumn("DT_TRADE_TO", "string");

        	this.dsSelect.addColumn("CD_DEPT", "string");

        	this.dsSelect.addColumn("CD_BANK", "string");
        	this.dsSelect.addColumn("NO_ACCOUNT", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("DT_TRADE", "string");
        	this.dsInsert.addColumn("NO_ACCOUNT", "string");
        	this.dsInsert.addColumn("CD_BANK", "string");
        	this.dsInsert.addColumn("TY_CASH", "string");
        	this.dsInsert.addColumn("CD_TRADE", "string");
        	this.dsInsert.addColumn("CD_CURR", "string");
        	this.dsInsert.addColumn("AM_TRADE", "bigdecimal");
        	this.dsInsert.addColumn("AM_BALANCE", "bigdecimal");
        	this.dsInsert.addColumn("DS_REMITTER", "string");
        	this.dsInsert.addColumn("CD_CMS", "string");
        	this.dsInsert.addColumn("NO_NOTES", "string");
        	this.dsInsert.addColumn("DT_EXPIRY", "string");
        	this.dsInsert.addColumn("YN_CANCEL", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("DT_TRADE", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT", "string");
        	this.dsUpdate.addColumn("CD_BANK", "string");
        	this.dsUpdate.addColumn("TY_CASH", "string");
        	this.dsUpdate.addColumn("CD_TRADE", "string");
        	this.dsUpdate.addColumn("CD_CURR", "string");
        	this.dsUpdate.addColumn("AM_TRADE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_BALANCE", "bigdecimal");
        	this.dsUpdate.addColumn("DS_REMITTER", "string");
        	this.dsUpdate.addColumn("CD_CMS", "string");
        	this.dsUpdate.addColumn("NO_NOTES", "string");
        	this.dsUpdate.addColumn("DT_EXPIRY", "string");
        	this.dsUpdate.addColumn("YN_CANCEL", "string");
        	this.dsUpdate.addColumn("NO_TRADE", "bigdecimal");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("DT_TRADE", "string");
        	this.dsDelete.addColumn("NO_ACCOUNT", "string");
        	this.dsDelete.addColumn("CD_BANK", "string");
        	this.dsDelete.addColumn("TY_CASH", "string");
        	this.dsDelete.addColumn("NO_TRADE", "bigdecimal");

        	this.dsTyCms = new Dataset();
        	this.dsTyCms.addColumn("CD_CORP", "string");      // 법인코드
        	this.dsTyCms.addColumn("DT_TRADE", "string");     // 거래일자
        	this.dsTyCms.addColumn("NO_ACCOUNT", "string");   // 계좌번호
        	this.dsTyCms.addColumn("CD_BANK", "string");      // 은행코드
        	this.dsTyCms.addColumn("TY_CASH", "string");      // 거래구분
        	this.dsTyCms.addColumn("NO_TRADE", "string");     // 거래번호
        	this.dsTyCms.addColumn("TY_CMS", "string");       // CMS종류
        	this.dsTyCms.addColumn("ID_USER", "string");      // 사용자

        	// 환율조회
        	this.dsSelectCurrExchange = new Dataset();
        	this.dsSelectCurrExchange.addColumn("TY_GUBUN", "string");
        	this.dsSelectCurrExchange.addColumn("CN_ROW", "int");
        	this.dsSelectCurrExchange.addColumn("VALUE", "string");
        	this.dsSelectCurrExchange.addColumn("MIN_VALUE", "string");
        	this.dsSelectCurrExchange.addColumn("DT_BASE", "string");
        	this.dsSelectCurrExchange.addColumn("CD_LOCAL_CURR", "string");
        	this.dsSelectCurrExchange.addColumn("CD_EXEC_CURR", "string");
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

        	this.dsSelect.setColumn(0, "TY_INOUT", this.ccboTY_GUBUN.value);
        	this.dsSelect.setColumn(0, "DT_TRADE_FR", this.tclFR_SEARCH.value);
        	this.dsSelect.setColumn(0, "DT_TRADE_TO", this.tclTO_SEARCH.value);

        	this.dsSelect.setColumn(0, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);

        	this.dsSelect.setColumn(0, "CD_BANK", this.cfBANK.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "NO_ACCOUNT", this.cfNO_ACCOUNT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_CORP", this.cfDEPT.form.CDTextBox.value);

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
        	this.dsList.set_enableevent(false);

        	this.dsList.setColumn(nrow, "CD_TRADE", this.ccboTY_GUBUN.value);	// 입출구분
        	this.dsList.setColumn(nrow, "YN_CANCEL", "N");					    // 취소거래여부

        	this.dsList.set_enableevent(true);
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
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.cfDEPT.form.CDTextBox.value);
        				this.dsInsert.setColumn(nrow, "DT_TRADE", this.dsList.getColumn(i, "DT_TRADE"));
        				this.dsInsert.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsInsert.setColumn(nrow, "TY_CASH", this.dsList.getColumn(i, "TY_CASH"));
        				this.dsInsert.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        				this.dsInsert.setColumn(nrow, "CD_CURR", this.dsList.getColumn(i, "CD_CURR"));
        				this.dsInsert.setColumn(nrow, "AM_TRADE", this.dsList.getColumn(i, "AM_TRADE"));
        				this.dsInsert.setColumn(nrow, "AM_BALANCE", this.dsList.getColumn(i, "AM_BALANCE"));
        				this.dsInsert.setColumn(nrow, "DS_REMITTER", this.dsList.getColumn(i, "DS_REMITTER"));
        				this.dsInsert.setColumn(nrow, "CD_CMS", this.dsList.getColumn(i, "CD_CMS"));
        				this.dsInsert.setColumn(nrow, "NO_NOTES", this.dsList.getColumn(i, "NO_NOTES"));
        				this.dsInsert.setColumn(nrow, "DT_EXPIRY", this.dsList.getColumn(i, "DT_EXPIRY"));
        				this.dsInsert.setColumn(nrow, "YN_CANCEL", this.dsList.getColumn(i, "YN_CANCEL"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.cfDEPT.form.CDTextBox.value);
        				this.dsUpdate.setColumn(nrow, "DT_TRADE", this.dsList.getColumn(i, "DT_TRADE"));
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsUpdate.setColumn(nrow, "TY_CASH", this.dsList.getColumn(i, "TY_CASH"));
        				this.dsUpdate.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        				this.dsUpdate.setColumn(nrow, "CD_CURR", this.dsList.getColumn(i, "CD_CURR"));
        				this.dsUpdate.setColumn(nrow, "AM_TRADE", this.dsList.getColumn(i, "AM_TRADE"));
        				this.dsUpdate.setColumn(nrow, "AM_BALANCE", this.dsList.getColumn(i, "AM_BALANCE"));
        				this.dsUpdate.setColumn(nrow, "DS_REMITTER", this.dsList.getColumn(i, "DS_REMITTER"));
        				this.dsUpdate.setColumn(nrow, "CD_CMS", this.dsList.getColumn(i, "CD_CMS"));
        				this.dsUpdate.setColumn(nrow, "NO_NOTES", this.dsList.getColumn(i, "NO_NOTES"));
        				this.dsUpdate.setColumn(nrow, "DT_EXPIRY", this.dsList.getColumn(i, "DT_EXPIRY"));
        				this.dsUpdate.setColumn(nrow, "YN_CANCEL", this.dsList.getColumn(i, "YN_CANCEL"));
        				this.dsUpdate.setColumn(nrow, "NO_TRADE", this.dsList.getColumn(i, "NO_TRADE"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.cfDEPT.form.CDTextBox.value);
        				this.dsDelete.setColumn(nrow, "DT_TRADE", this.dsList.getColumn(i, "DT_TRADE"));
        				this.dsDelete.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsDelete.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsDelete.setColumn(nrow, "TY_CASH", this.dsList.getColumn(i, "TY_CASH"));
        				this.dsDelete.setColumn(nrow, "NO_TRADE", this.dsList.getColumn(i, "NO_TRADE"));

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
        	if (this.gfnIsNull(this.cfDEPT.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.cfDEPT.form.CDTextBox.setFocus();
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

        	if (nexacro.toNumber(this.grSearch) >= 7) {
        		if (this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.text)) {
        			this.gfnAlert("처리부서가 입력되지 않았습니다.");
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
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
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {

        	switch(svcID) {
        		case "select" :
        			this.gfnGridAfterSelect(this.dxGrid);
        		break;

        		case "save" :
        		case "changeTyCms" :
        			if (errorCode == 0) {
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}

        		break;

        		case "combo" :
        			//  조회조건(완료여부)
        			var iRow = this.dsTY_GUBUN.insertRow(0);
        			this.dsTY_GUBUN.setColumn(iRow, "CD_CODE", "");
        			this.dsTY_GUBUN.setColumn(iRow, "DS_CODE", "전체");
        			this.ccboTY_GUBUN.set_index(2);
        		break;

        		case "selectCurrExchange" :	// 환율조회
        			var json = this.gfnArgsToJson(strArg);
        			var currentRow = json.crow;

        			trace(currentRow + " 환율조회->" + this.dsCurrExchange.saveXML());

        			this.dsList.setColumn(currentRow, "RT_EXCH", this.dsCurrExchange.getColumn(0, "RT_LOCAL_EXCH"));	// 로컬환율

        			if(this.dsCurrExchange.rowcount > 0){
        				// 원화계산
        				this.fnSetAmKrw(currentRow);
        			}else{
        				// 통화, 환율, 원화 금액 초기화
        				this.fnSetInitCurr(currentRow)
        			}

        		break;
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

        	var cdCorp = this.gfnIsNull(this.cfDEPT.form.CDTextBox.value) ? "" : this.cfDEPT.form.CDTextBox.value;

        	// 법인코드
        	if (id == "cfDEPT") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP);
        	}

        	if (id == "ccfCD_DEPT") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", "");	//this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP);
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
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
        	var arrData = codeFindData;
        	switch(id) {
        		case "cfDEPT":
        		case "ccfCD_DEPT":
        		case "cfBANK":	// 은행코드
        		case "cfNO_ACCOUNT":
        			this.fnSearchInit();
        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdCorp = this.cfDEPT.form.CDTextBox.value;
        	//trace("id :: " + id);
        	if (id == "DFX_CFACCOUNTNO_SUJI") {
        		if ( this.gfnIsNull(cdCorp) ) {
        			dsUserParam.setColumn(nrow, "CD_CORP", "");
        		} else {
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		}
        		//trace("dsUserParam :: " + dsUserParam.saveXML());
        	}

        	//통화환율
        	if (id == "DHX_CFCURRENCY_EXCHAGE") {
        		var sDtBase = this.dsList.getColumn(this.dsList.rowposition, "DT_TRADE");
        		if (this.gfnIsNull(sDtBase)) {
        			this.gfnAlert("거래일자를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "DT_BASE", sDtBase);
        		dsUserParam.setColumn(nrow, "CD_LOCAL_CURR", "KRW");	// 로컬화폐단위
        		dsUserParam.setColumn(nrow, "CD_EXEC_CURR", "");
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	var rowPos = this.dsList.rowposition;

        	switch(id) {
        		case "DHX_CFCURRENCY_EXCHAGE":	// 통화
        			if (arrData.length > 0) {
        				// 원화계산
        				this.fnSetAmKrw(rowPos);

        // 				this.dsList.set_enableevent(false);
        // 				this.dsList.set_enableevent(true);
        			}

        		break;
        	}
        };

        //그리드 값변경 이벤트
        this.dsList_ColumnChanged = function(obj, e)
        {
        	trace("그리드 값변경 이벤트 " + e.columnid + "/" + e.newvalue)
        	switch(e.columnid) {
        		case "CD_CURR":	// 통화
        			if(this.gfnIsNull(e.newvalue)){

        				// 통화, 환율, 원화 금액 초기화
        				this.fnSetInitCurr(e.row)

        				var colCD_EXEC_CURR = this.dxGrid.getBindCellIndex("body", "CD_CURR");
        				this.dxGrid.setCellPos(colCD_EXEC_CURR);
        				this.dxGrid.showEditor(true);
        			}
        		break;

        		case "AM_TRADE":	// 거래금액(발생통화)
        			// 원화 계산
        			this.fnSetAmKrw(e.row);
        		break;

        		case "DT_TRADE":	// 거래일자
        			var dtToday = this.gfnGetDate().substr(0,8);
        			trace("e.newvalue->" + e.newvalue + " / dtToday->" + dtToday);
        			if(this.gfnIsNull(e.newvalue) || (e.newvalue > this.gfnGetDate().substr(0,8))){
        				// 통화, 환율, 원화 금액 초기화
        				this.fnSetInitCurr(e.row)
        			}else{
        				// 환율조회
        				this.fnSelectCurrExchange(e.row);
        			}

        		break;
        	}
        }

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

        	// 거래구분(TY_CASH)
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "11");

        	// 입출구분(CD_TRADE)
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(1, "CD_TYPE", "10");

        	// 입금분류(YN_CONFIRM)
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(2, "CD_TYPE", "Z2");

        	// CMS종류(TY_CMS)
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(3, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(3, "CD_TYPE", "L4");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_GUBUN=combo0 dsTY_GUBUN2=combo1 dsYN_CONFIRM=combo2 dsTY_CMS=combo3";
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



        this.fnExcelImport = function(){
        // this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	this.gfnExcelImport("dsListSub","sheet1","A2","fnExcelImportCallback","import",this);
        }

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {

        	if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다.");
        		return false;
        	}

        	dsOut.updateColID("Column1",  "DT_TRADE");			// 거래일자
        	dsOut.updateColID("Column2",  "NO_ACCOUNT");        // 계좌번호
        	dsOut.updateColID("Column3",  "CD_BANK");           // 은행코드
        	dsOut.updateColID("Column4",  "DS_BANK");           // 은행명
        	dsOut.updateColID("Column5",  "TY_CASH");           // 거래구분
        	dsOut.updateColID("Column6",  "NO_TRADE");          // 거래번호
        	dsOut.updateColID("Column7",  "CD_TRADE");          // 입출구분
        	dsOut.updateColID("Column8",  "CD_CURR");           // 통화
        	dsOut.updateColID("Column9",  "RT_EXCH");           // 환율
        	dsOut.updateColID("Column10", "AM_TRADE");          // 거래금액(발생통화)
        	dsOut.updateColID("Column11", "AM_KRW");            // 거래금액(원화)
        	dsOut.updateColID("Column12", "DS_REMITTER");       // 비고
        	dsOut.updateColID("Column13", "CD_CMS");            // CMS코드
        	dsOut.updateColID("Column14", "NO_NOTES");          // 어음번호
        	dsOut.updateColID("Column15", "DT_EXPIRY");         // 어음만기일
        	dsOut.updateColID("Column16", "YN_CANCEL");         // 취소거래여부
        	dsOut.updateColID("Column17", "YN_INPUT");          // 입력여부
        	dsOut.updateColID("Column18", "YN_MERGE");          // 병합여부
        	dsOut.updateColID("Column19", "YN_CONFIRM");        // 입금분류
        	dsOut.updateColID("Column20", "TY_CMS");            // CMS종류
        	dsOut.updateColID("Column21", "TM_TRADE");          // 거래시간

        	trace(dsOut.saveXML());

        	/*
        	this.dsList.set_enableevent(false);
        	for (var i=0; i<dsOut.rowcount; i++) {
        		//var nrow = this.dsList.addRow();
        		//var nrow = this.gfnGridAdd(this.dxGrid);
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
        	   //this.dsList.setColumn(nrow, "CD_SYSTEM", dsOut.getColumn(i, "Column1"));
        	   //this.dsList.setColumn(nrow, "CD_TYPE", dsOut.getColumn(i, "Column2"));
        	}
        	this.dsList.set_enableevent(true);
        	*/

        	this.dsList.set_enableevent(false);
        	for (var i=0; i< dsOut.rowcount; i++) {
        		for (var j=0; j< dsOut.colcount; j++) {
        			if (!this.gfnIsNull(dsOut.getColumn(i,j)) ){
        				dsOut.setColumn(i,j,nexacro.trim(dsOut.getColumn(i,j)));
        				var strColID = dsOut.getColID( j );
        				if ( strColID == "DT_TRADE" || strColID == "DT_EXPIRY" ){
        					dsOut.setColumn(i,j,dsOut.getColumn(i,j).replace(/\-/g,''));
        				}
        				// 거래구분
        				else if (strColID == "TY_CASH") {
        					var row = this.dsTY_GUBUN2.findRow("DS_CODE", dsOut.getColumn(i,j))
        					if (row >= 0)
        						dsOut.setColumn(i, j, this.dsTY_GUBUN2.getColumn(row, "CD_CODE"));
        				}
        				// 입출구분
        				else if (strColID == "CD_TRADE") {
        					var row = this.dsTY_GUBUN.findRow("DS_CODE", dsOut.getColumn(i,j))
        					if (row >= 0)
        						dsOut.setColumn(i, j, this.dsTY_GUBUN.getColumn(row, "CD_CODE"));
        				}
        				// 입금분류(YN_CONFIRM)
        				else if (strColID == "YN_CONFIRM") {
        					var row = this.dsYN_CONFIRM.findRow("DS_CODE", dsOut.getColumn(i,j))
        					if (row >= 0)
        						dsOut.setColumn(i, j, this.dsYN_CONFIRM.getColumn(row, "CD_CODE"));
        				}
        				// CMS종류(TY_CMS)
        				else if (strColID == "TY_CMS") {
        					var row = this.dsTY_CMS.findRow("DS_CODE", dsOut.getColumn(i,j))
        					if (row >= 0)
        						dsOut.setColumn(i, j, this.dsTY_CMS.getColumn(row, "CD_CODE"));
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
        	this.dxGrid.setFocus();
        };

        /*
         *	엑셀업로드 Callback
         */
        this.fnExcelImportCallback2 = function(sImportId, dsOut, dsSheet) {

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


        // 사용여부변경
        this.fnChangeTyCms = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var options = {
        		resizable: true
        	}

        	var nCnt = this.dsList.findRow("CHK",1);
        	if( nCnt == -1) {
        		this.gfnAlert("대체구분 변경할 행을 체크하세요.", "");
        		return;
        	}

        	var param = {};
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFL_INPUT_CMS", "fnfnChangeTyCmsCallback", param);
        	//this.gfnOpenPopup("DFL_INPUT_CMS","dfl::DFL_INPUT_CMS.xfdl",{},"fnfnChangeTyCmsCallback",options);
        }

        // 사용여부변경  Callback
        this.fnfnChangeTyCmsCallback = function(strId, val) {
        	if(this.gfnIsNull(val)) {
        		return false;
        	}
        	//if (new String(val).valueOf() == "undefined" || val == "close") return true;

        	this.dsTyCms.clearData();

        	for ( var i =0; i < this.dsList.rowcount; i++){
        		if( this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i,"CHK") == 1) {
        			var nrow = this.dsTyCms.addRow();

        			this.dsTyCms.setColumn(nrow, "CD_CORP", this.cfDEPT.form.CDTextBox.value);
        			this.dsTyCms.setColumn(nrow, "DT_TRADE", this.dsList.getColumn(i, "DT_TRADE"));
        			this.dsTyCms.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        			this.dsTyCms.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        			this.dsTyCms.setColumn(nrow, "TY_CASH", this.dsList.getColumn(i, "TY_CASH"));
        			this.dsTyCms.setColumn(nrow, "NO_TRADE", this.dsList.getColumn(i, "NO_TRADE"));
        			this.dsTyCms.setColumn(nrow, "TY_CMS", val);
        			this.dsTyCms.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsTyCms.rowcount == 0) return;

        	var strSvcId    = "changeTyCms";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "changeTyCms=dsTyCms";
        	var outData     = "";
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

        // 원화계산
        this.fnSetAmKrw = function(nRow){
        	var nRow = this.gfnNvl(nRow, this.dsList.rowposition);

        	var sCdLocalCurr = "KRW";	// 로컬통화단위
        	var sCdExecCurr = this.dsList.getColumn(nRow, "CD_CURR");						// 통화단위
        	var nAmTrade = nexacro.toNumber(this.dsList.getColumn(nRow, "AM_TRADE"),0);		// 집행화
        	var rtLocalExch = nexacro.toNumber(this.dsList.getColumn(nRow, "RT_EXCH"));		// 환율

        	var nAmLocal = 0;

        	trace(sCdExecCurr + " : fnSetAmkrw " + "원화 계산 시작!!!! : " + nAmTrade);

        	// 집행화 금액이 0보다 크면
        	if(!this.gfnIsNull(sCdExecCurr) && !this.gfnIsNull(nAmTrade) && nAmTrade > 0 ){
        		var bKrw = (sCdExecCurr == "KRW") ? true : false;

        		// 원화 : 집행화 * 원화환율
        		nAmLocal = (bKrw == false) ? nAmTrade * rtLocalExch : nAmTrade / rtLocalExch;
        		trace("원화("+nAmLocal+") = " + "집행화(" +nAmTrade+ ") * " + "원화환율(" +rtLocalExch+ ")" );
        	}

        	//nexacro.round(, 0) 소수점 첫째자리
        	this.dsList.set_enableevent(false);

        	this.dsList.setColumn(nRow, "AM_KRW" , nexacro.floor(nAmLocal));	// 원화(소수점절삭)

        	this.dsList.set_enableevent(true);
        }

        // 통화, 로컬환율, 원화환율, 집행화, 로컬화, 원화 금액 초기화
        this.fnSetInitCurr = function(nRow){
        	trace("통화, 환율, 원화 금액 초기화");

        	var nRow = this.gfnNvl(nRow, this.dsList.rowposition);

        	this.dsList.setColumn(nRow, "CD_CURR"  , "");
        	this.dsList.setColumn(nRow, "RT_EXCH"  , 0);
        	this.dsList.setColumn(nRow, "AM_KRW"  , 0);
        }


        // 로컬환율 조회
        this.fnSelectCurrExchange = function(nRow){
        	var DT_BASE = this.dsList.getColumn(nRow, "DT_TRADE");
        	var CD_LOCAL_CURR = "KRW";
        	var CD_EXEC_CURR = this.dsList.getColumn(nRow, "CD_CURR");

        	if( this.gfnIsNull(DT_BASE) || this.gfnIsNull(CD_LOCAL_CURR) || this.gfnIsNull(CD_EXEC_CURR)){
        		return;
        	}

        	this.dsSelectCurrExchange.clearData();
        	this.dsSelectCurrExchange.addRow();

        	this.dsSelectCurrExchange.setColumn(0, "TY_GUBUN", "1");
        	this.dsSelectCurrExchange.setColumn(0, "CN_ROW", 0);
        	this.dsSelectCurrExchange.setColumn(0, "VALUE", "");
        	this.dsSelectCurrExchange.setColumn(0, "MIN_VALUE", "");
        	this.dsSelectCurrExchange.setColumn(0, "DT_BASE", DT_BASE);
        	this.dsSelectCurrExchange.setColumn(0, "CD_LOCAL_CURR", CD_LOCAL_CURR);
        	this.dsSelectCurrExchange.setColumn(0, "CD_EXEC_CURR", CD_EXEC_CURR);

        	var strSvcId    = "selectCurrExchange";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectCurrExchange=dsSelectCurrExchange";
        	var outData     = "dsCurrExchange=selectCurrExchange0";
        	//var strArg      = "";
        	var strArg      = "crow=" + nRow;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboTY_GUBUN.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.tclFR_SEARCH.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.tclTO_SEARCH.addEventHandler("onchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DFL_TRADEDETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
