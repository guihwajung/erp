(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWB_ETAX_LIST");
            this.set_titletext("전자세금계산서관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWBPR_HADO_PROTECT_SELECT</Col></Row><Row><Col id=\"TARGET\">issue</Col><Col id=\"SP\">DWBPR_HADO_PROTECT_AUTOSLIP_ISSUE</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DWBPR_HADO_PROTECT_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWBPR_HADO_PROTECT_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BANJE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCdVatproof", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ALL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SYSTEM\">DH</Col><Col id=\"CD_TYPE\">004</Col><Col id=\"YN_USE\">N</Col><Col id=\"YN_ALL\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","0.0","10.0","269","24.0",null,null,null,"353",null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("AutoSet").set("true");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("fittocontents").set("true");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("업체코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","staCD_VENDOR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","10.0","269","24.0",null,null,null,"353",null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFVENDOR_DH");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","ccfCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_SYSTEM","staCD_SYSTEM:0.0","ccfCD_SITE:10.0","136","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboCD_SYSTEM_innerdataset = new nexacro.NormalDataset("divSearch_form_cboCD_SYSTEM_innerdataset", obj);
            divSearch_form_cboCD_SYSTEM_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\"/></Row><Row><Col id=\"datacolumn\">자재</Col><Col id=\"codecolumn\">MM</Col></Row><Row><Col id=\"datacolumn\">외주</Col><Col id=\"codecolumn\">SU</Col></Row><Row><Col id=\"codecolumn\">DS</Col><Col id=\"datacolumn\">노무</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboCD_SYSTEM_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_BANJE","cboCD_SYSTEM:0.0","ccfCD_SITE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("반제여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_BANJE","staYN_BANJE:0.0","ccfCD_SITE:10.0","136","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboYN_BANJE_innerdataset = new nexacro.NormalDataset("divSearch_form_cboYN_BANJE_innerdataset", obj);
            divSearch_form_cboYN_BANJE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\"/></Row><Row><Col id=\"datacolumn\">반제</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미반제</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboYN_BANJE_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","90",null,null,"0","0",null,null,null,null,this);
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

            obj = new BindItem("item5","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboCD_SYSTEM","value","dsSearch","CD_SYSTEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboYN_BANJE","value","dsSearch","YN_BANJE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DWB_HADO_PROTECT.xfdl", function() {
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
        	this.fnComboSelect();

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YM_WORK", today.substring(0, 6));
        	this.dsSearch.setColumn(0, "CD_SYSTEM", "");
        	this.dsSearch.setColumn(0, "YN_BANJE", "");
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {


        	this.btn1 = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");	// 전표조회
        	this.btn2 = this.gfnFormButtonAdd("btnTraderepaySearch", "fnTraderepaySearch");	// 집행전표조회
        	this.btn3 = this.gfnFormButtonAdd("btnTradeBanjeIssu", "fnTradeBanjeIssu");	// 반제전표발행
        	this.btn4 = this.gfnFormButtonAdd("btnTradeBanjeCancel", "fnTradeBanjeCancel");	// 반제전표취소
        	this.btn5 = this.gfnFormButtonAdd("btnTradeBanjeSearch", "fnTradeBanjeSearch");	// 반제전표조회

        	this.fnBtnEnableEventAll(false);
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
         	this.divSearch.form.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_HADO_PROTECT");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsIssue = new Dataset();
        	this.dsIssue.addColumn("CD_SITE", "string");
        	this.dsIssue.addColumn("DT_ACCOUNT", "string");
        	this.dsIssue.addColumn("CD_TRADE", "string");
        	this.dsIssue.addColumn("CD_SLIP", "string");
        	this.dsIssue.addColumn("CD_ACCOUNT_MIBUL", "string");
        	this.dsIssue.addColumn("AM_ACCOUNT", "bigdecimal");
        	this.dsIssue.addColumn("CD_VENDOR", "string");
        	this.dsIssue.addColumn("ID_INSERT", "string");
        	this.dsIssue.addColumn("TY_WORK", "string");
        	this.dsIssue.addColumn("NO_ACCOUNT", "string");

        	this.dsCancel = new Dataset();
        	this.dsCancel.addColumn("CD_TRADE", "string");
        	this.dsCancel.addColumn("CD_TRADE_BANJE", "string");
        	this.dsCancel.addColumn("ID_INSERT", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("DT_ACCOUNT", "string");
        	this.dsSave.addColumn("NO_ACCOUNT", "string");
        	this.dsSave.addColumn("AM_EXEC", "string");
        	this.dsSave.addColumn("CD_TRADE", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return;

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSearch";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
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
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function()
        {
        	this.dsSave.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == "1")
        		{
        			var nRow = this.dsSave.addRow();
        			this.dsSave.setColumn(nRow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        			this.dsSave.setColumn(nRow, "DT_ACCOUNT", this.dsList.getColumn(i, "DT_ACCOUNT"));
        			this.dsSave.setColumn(nRow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        			this.dsSave.setColumn(nRow, "AM_EXEC", this.dsList.getColumn(i, "AM_EXEC"));
        			this.dsSave.setColumn(nRow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        			this.dsSave.setColumn(nRow, "ID_USER", this.objApp.gdsUserInfo.getColumn(this.objApp.gdsUserInfo.rowposition, "ID_USER"));
        		}
        	}

        	if (!this.dsSave.rowcount == 0)
        	{
        		this.gfnAlert('msg.save.nochange');
        		return;
        	}

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
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

         /*
          *	조회 버튼
          */
        this.fnComboSelect = function() {
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var cd_site = this.dsSearch.getColumn(0, "CD_SITE");

        	if(this.gfnIsNull(cd_site)){
        		this.gfnAlert("현장코드는 필수입력 입니다.");
        		this.divSearch.form.ccfCD_SITE.setFocus();
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
        		this.fnBtnEnableEventAll(false);
        		var COL_CHK = this.dxGrid.getBindCellIndex("body", "CHK");
        		this.dxGrid.setCellProperty("body", COL_CHK, "edittype", "expr:YN_TRADEREPAY == 'N' || CD_TRADE_BANJE != null ? 'none' : 'checkbox'");
        		//this.dxGrid.setCellProperty("body", COL_CHK, "edittype", "expr:CD_TRADE_BANJE == null ? 'none' : 'checkbox'");

        		var YN_BANJE = this.dsSearch.getColumn(0, "YN_BANJE");

        		if(0 < this.dsList.rowcount && !this.gfnIsNull(YN_BANJE)){
        			if(YN_BANJE == "Y"){
        				this.btn4.set_enable(true);	// 반제전표취소
        			}
        		}

        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if (svcID == "combo") {
        	}
        	else if (svcID == "save")
        	{
        		if (errorCode != 0)
        		{
        			this.gfnAlert(errorMsg);
        		}
        		else
        		{
        			this.FormBtns.Select.click();
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_VENDOR") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 먼저 입력해주세요.");
        			return;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "");
        	}
        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	if (id == "DWX_HADO_ACCOUNT") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        	}
        	return true;
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         this.fnBtnEnableEventAll = function(flag){
        	this.btn1.set_enable(flag);
        	this.btn2.set_enable(flag);
        	this.btn3.set_enable(flag);
        	this.btn4.set_enable(flag);
        	this.btn5.set_enable(flag);
         };

        this.fnBtnEnableEvent = function(row){

        	var cdSlip = this.dsList.getColumn(row, "CD_SLIP");				// 전표번호
        	var cdTraderepay = this.dsList.getColumn(row, "CD_TRADEREPAY");	// 집행전표번호
        	var cdTradeBanje = this.dsList.getColumn(row, "CD_TRADE_BANJE");	// 발행전표번호

        	if(this.gfnIsNull(cdSlip)){
        		this.btn1.set_enable(false);
        	}else{
        		this.btn1.set_enable(true);
        	}

        	if(this.gfnIsNull(cdTraderepay)){
        		this.btn2.set_enable(false);
        	}else{
        		this.btn2.set_enable(true);
        	}

        	if(this.gfnIsNull(cdTradeBanje)){
        		this.btn5.set_enable(false);
        	}else{
        		this.btn5.set_enable(true);
        	}
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.fnBtnEnableEventAll(false);
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	this.fnBtnEnableEventAll(false);
        	this.fnBtnEnableEvent(e.row);

        	var YN_BANJE = this.dsSearch.getColumn(0, "YN_BANJE");
        	if(e.columnid == "CHK" && !this.gfnIsNull(YN_BANJE)){

        		if(0 <= this.dsList.findRow(e.columnid, 1, 0)){

        			if(YN_BANJE == "Y"){
        				this.btn3.set_enable(false);	// 반제전표발행
        				this.btn4.set_enable(true);	// 반제전표취소
        			}else if(YN_BANJE == "N"){
        				this.btn3.set_enable(true);	// 반제전표발행
        				this.btn4.set_enable(false);	// 반제전표취소
        			}

        		}else{
        			this.btn3.set_enable(false);	// 반제전표발행
        			this.btn4.set_enable(false);	// 반제전표취소
        		}
        	}else if(e.columnid == "AM_EXEC"){

        		var AM_AMT = obj.getColumn(e.row, "AM_AMT");
        		var AM_EXEC = e.newvalue;
        		if(this.gfnIsNull(AM_AMT)){
        			this.gfnAlert("자금집행금액이 없습니다.");
        			obj.setColumn(e.row, e.columnid, 0);
        			return;
        		}else{
        			var AM_REMAIN = AM_AMT - AM_EXEC;

        			if(AM_REMAIN < 0){
        				this.gfnAlert("지킴이금액이 자금집행금액보다 높을 수 없습니다.");
        				obj.setColumn(e.row, e.columnid, 0);
        				return;
        			}
        			obj.setColumn(e.row, "AM_REMAIN", AM_REMAIN);
        		}
        	}
        };

        this.divData_objGrid_oncellclick = function(obj,e)
        {
        	this.fnBtnEnableEvent(e.row);
        };

        // 전표조회 클릭이벤트
        this.fnSlipSearch = function(obj,e) {
        	var cdSlip = this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP");
        	this.fnSlipSearchPopOpen(cdSlip);

        }

        // 집행전표조회 클릭이벤트
        this.fnTraderepaySearch = function(obj,e) {
        	var cdTraderepay = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADEREPAY");
        	this.fnSlipSearchPopOpen(cdTraderepay);
        }

        // 반제전표조회 클릭이벤트
        this.fnTradeBanjeSearch = function(obj,e) {
        	var cdTradeBanje = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE_BANJE");
        	this.fnSlipSearchPopOpen(cdTradeBanje);
        }

        this.fnSlipSearchPopOpen = function(cdValue) {

        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		this.gfnAlert("전표조회할 데이터를 선택하세요.");
        		return false;
        	}

        	var param = {};
        	param.CD_TRADE = cdValue;

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };

        // 반제전표발행 클릭이벤트
        this.fnTradeBanjeIssu = function(obj,e) {

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1"){

        			if(this.gfnIsNull(this.dsList.getColumn(i, "AM_EXEC"))){
        				this.gfnAlert("지킴이금액은 필수입력입니다.");
        				return;
        			}

        			var nrow = this.dsIssue.addRow();
        			this.dsIssue.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        			this.dsIssue.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(i, "DT_ACCOUNT"));
        			this.dsIssue.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        			this.dsIssue.setColumn(nrow, "CD_SLIP", this.dsList.getColumn(i, "CD_SLIP"));
        			this.dsIssue.setColumn(nrow, "CD_ACCOUNT_MIBUL", this.dsList.getColumn(i, "CD_ACCOUNT"));
        			this.dsIssue.setColumn(nrow, "AM_ACCOUNT", this.dsList.getColumn(i, "AM_EXEC"));
        			this.dsIssue.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        			this.dsIssue.setColumn(nrow, "ID_INSERT", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
        			this.dsIssue.setColumn(nrow, "TY_WORK", this.dsList.getColumn(i, "CD_SYSTEM"));
        			this.dsIssue.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));

        		}
        	}

        	if (this.dsIssue.rowcount == 0) return;

        	var strSvcId    = "issue";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "issue=dsIssue";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        // 반제전표취소 클릭이벤트
        this.fnTradeBanjeCancel = function(obj,e) {

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			var nrow = this.dsCancel.addRow();
        			this.dsCancel.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        			this.dsCancel.setColumn(nrow, "CD_TRADE_BANJE", this.dsList.getColumn(i, "CD_TRADE_BANJE"));
        			this.dscancel.setColumn(nrow, "ID_INSERT", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
        		}
        	}

        	if (this.dsCancel.rowcount == 0) return;

        	var strSvcId    = "cancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cancel=dscancel";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncellclick",this.divData_objGrid_oncellclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWB_HADO_PROTECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
