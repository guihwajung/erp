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
            this.set_titletext("차량등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_CARINSURANCE_UPDATE</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_CAR_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_CAR_DELETE</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_CARINSURANCE_UPD</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAXPR_COMMONCODE_CODEFIND</Col></Row><Row><Col id=\"TARGET\">slipDelete</Col><Col id=\"SP\">DHAPR_CARINSUR_AUTOSLIP_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"TY_DEPT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DEPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MEMBERFEE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ALLOW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_DEPT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("부서구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_DEPT","staTY_DEPT:0.0","10.0","260","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_DEPT","ccfTY_DEPT:0.0","10.0","89","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_DEPT");
            obj.set_visible("false");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfTY_DEPT.form.CDTextBox","value","dsSearch","TY_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_CARINSURANCE_UPDATE.xfdl", function() {
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
        	//this.fnSetCombo();

        	// 타화면에서 호출 및 파라미터 존재시 자동 조회
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CAR)) {
        		this.pvCD_CAR = this.getOwnerFrame().CD_CAR;
        		this.dsSearch.set_enableevent(false);
        		this.dsSearch.setColumn(0, "CD_CAR", this.pvCD_CAR);
        		this.dsSearch.set_enableevent(true);

        		this.FormBtns.Select.click();
        	}

        	trace("zzzzz:"+this.pvCD_CAR);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        	// this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        	//	this.btnDtlInfo = this.gfnFormButtonAdd("btnDtlInfo", "fnDtlInfo", "상세내용");
        	this.btn1 = this.gfnFormButtonAdd("FormButton1", "fnFormButton","전표발행");
        	//this.btn2 = this.gfnFormButtonAdd("FormButton2", "fnFormButton","전표취소");
        	//this.btn3 = this.gfnFormButtonAdd("FormButton3", "fnFormButton","전표조회");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfTY_DEPT = this.divSearch.form.ccfTY_DEPT;
        	this.cboTY_DEPT = this.divSearch.form.cboTY_DEPT;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DZX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.ccfTY_DEPT.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfTY_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfTY_DEPT.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DG", "DHA_CARINSURANCE_UPDATE");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("TY_DEPT", "string");
        	this.dsSelect.addColumn("CD_CAR", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_CAR", "string");
        	this.dsInsert.addColumn("NO_CAR", "string");
        	this.dsInsert.addColumn("TY_CAR", "string");
        	this.dsInsert.addColumn("DT_CAR", "string");
        	this.dsInsert.addColumn("DT_CAR_END", "string");
        	this.dsInsert.addColumn("CD_CAR_FUEL", "string");
        	this.dsInsert.addColumn("DS_INSURANCE", "string");
        	this.dsInsert.addColumn("DT_FR_INSURANCE", "string");
        	this.dsInsert.addColumn("DT_TO_INSURANCE", "string");
        	this.dsInsert.addColumn("DT_DISPOSE", "string");
        	this.dsInsert.addColumn("YN_RENT", "string");
        	this.dsInsert.addColumn("DS_REM", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("TY_DEPT", "string");
        	this.dsInsert.addColumn("DS_LOCATION", "string");
        	this.dsInsert.addColumn("ASSET_NUMBER", "string");
        	this.dsInsert.addColumn("SALE_PRICE", "string");
        	this.dsInsert.addColumn("USER2", "string");
        	this.dsInsert.addColumn("DT_USER2", "string");
        	this.dsInsert.addColumn("NO_AUTOSLIP", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("DS_VENDOR", "string");
        	this.dsInsert.addColumn("INSURANCE_PAY", "string");


        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("TY_DEPT", "string");
        	this.dsUpdate.addColumn("CD_CAR", "string");
        	this.dsUpdate.addColumn("NO_CAR", "string");
        	this.dsUpdate.addColumn("TY_CAR", "string");
        	this.dsUpdate.addColumn("DT_CAR", "string");
        	this.dsUpdate.addColumn("DT_CAR_END", "string");
        	this.dsUpdate.addColumn("CD_CAR_FUEL", "string");
        	this.dsUpdate.addColumn("DS_INSURANCE", "string");
        	this.dsUpdate.addColumn("DT_FR_INSURANCE", "string");
        	this.dsUpdate.addColumn("DT_TO_INSURANCE", "string");
        	this.dsUpdate.addColumn("DT_DISPOSE", "string");
        	this.dsUpdate.addColumn("YN_RENT", "string");
        	this.dsUpdate.addColumn("DS_REM", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("TY_DEPT", "string");
        	this.dsUpdate.addColumn("DS_LOCATION", "string");
        	this.dsUpdate.addColumn("ASSET_NUMBER", "string");
        	this.dsUpdate.addColumn("SALE_PRICE", "string");
        	this.dsUpdate.addColumn("USER2", "string");
        	this.dsUpdate.addColumn("DT_USER2", "string");
        	this.dsUpdate.addColumn("NO_AUTOSLIP", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("DS_VENDOR", "string");
        	this.dsUpdate.addColumn("INSURANCE_PAY", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("CD_CAR", "string");

        	this.dsSlip = new Dataset();


        	this.dsSlip.addColumn("CD_CAR", "string");
        	this.dsSlip.addColumn("DT_ACCOUNT", "string");
        	this.dsSlip.addColumn("ID_USER", "string");           // 로그인ID
        	this.dsSlip.addColumn("CD_DEPT", "string");           // 로그인부서
        	this.dsSlip.addColumn("NO_AUTOSLIP", "string");       // 취소할 전표번호

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	var cd_corp = this.dsSearch.getColumn(0, "CD_CORP"); //this.divSearch.form.ccfCD_CORP.value;
        	var ty_dept = this.dsSearch.getColumn(0, "TY_DEPT"); //this.divSearch.form.ccfTY_DEPT.value;
        	var cd_car = this.dsSearch.getColumn(0, "CD_CAR"); //this.divSearch.form.ccfTY_DEPT.value;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", cd_corp);
        	this.dsSelect.setColumn(0, "TY_DEPT", ty_dept);
        	this.dsSelect.setColumn(0, "CD_CAR", this.pvCD_CAR);
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.pvCD_VENDOR);

        	 trace("dddddddddddd"+this.pvCD_CAR);

        	 trace("dddddddddddd"+this.pvCD_VENDOR);

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
        	// 그리드 필수항목 체크
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

        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "CD_CAR", this.dsList.getColumn(i, "CD_CAR"));
        				this.dsInsert.setColumn(nrow, "NO_CAR", this.gfnTrim(this.dsList.getColumn(i, "NO_CAR")));
        				this.dsInsert.setColumn(nrow, "TY_CAR", this.dsList.getColumn(i, "TY_CAR"));
        				this.dsInsert.setColumn(nrow, "DT_CAR", this.dsList.getColumn(i, "DT_CAR"));
        				this.dsInsert.setColumn(nrow, "DT_CAR_END", this.dsList.getColumn(i, "DT_CAR_END"));
        				this.dsInsert.setColumn(nrow, "CD_CAR_FUEL", this.dsList.getColumn(i, "CD_CAR_FUEL"));
        				this.dsInsert.setColumn(nrow, "DS_INSURANCE", this.dsList.getColumn(i, "DS_INSURANCE"));
        				this.dsInsert.setColumn(nrow, "DT_FR_INSURANCE", this.dsList.getColumn(i, "DT_FR_INSURANCE"));
        				this.dsInsert.setColumn(nrow, "DT_TO_INSURANCE", this.dsList.getColumn(i, "DT_TO_INSURANCE"));
        				this.dsInsert.setColumn(nrow, "DT_DISPOSE", this.dsList.getColumn(i, "DT_DISPOSE"));
        				this.dsInsert.setColumn(nrow, "YN_RENT", this.dsList.getColumn(i, "YN_RENT"));
        				this.dsInsert.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsInsert.setColumn(nrow, "TY_DEPT", this.dsList.getColumn(i, "TY_DEPT"));
        				this.dsInsert.setColumn(nrow, "DS_LOCATION", this.dsList.getColumn(i, "DS_LOCATION"));
        				this.dsInsert.setColumn(nrow, "ASSET_NUMBER", this.dsList.getColumn(i, "ASSET_NUMBER"));
        				this.dsInsert.setColumn(nrow, "SALE_PRICE", this.dsList.getColumn(i, "SALE_PRICE"));
        				this.dsInsert.setColumn(nrow, "USER2", this.dsList.getColumn(i, "USER2"));
        				this.dsInsert.setColumn(nrow, "DT_USER2", this.dsList.getColumn(i, "DT_USER2"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        		        this.dsInsert.setColumn(nrow, "INSURANCE_PAY", this.dsList.getColumn(i, "INSURANCE_PAY"));
        				this.dsInsert.setColumn(nrow,"NO_AUTOSLIP", this.dsList.getColumn(i, "NO_AUTOSLIP"));
        				this.dsInsert.setColumn(nrow,"CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsInsert.setColumn(nrow,"DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();

        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "TY_DEPT", this.dsList.getColumn(i, "TY_DEPT"));
        				this.dsUpdate.setColumn(nrow, "CD_CAR", this.dsList.getColumn(i, "CD_CAR"));
        				this.dsUpdate.setColumn(nrow, "NO_CAR", this.dsList.getColumn(i, "NO_CAR"));
        				this.dsUpdate.setColumn(nrow, "TY_CAR", this.dsList.getColumn(i, "TY_CAR"));
        				this.dsUpdate.setColumn(nrow, "DT_CAR", this.dsList.getColumn(i, "DT_CAR"));
        				this.dsUpdate.setColumn(nrow, "DT_CAR_END", this.dsList.getColumn(i, "DT_CAR_END"));
        				this.dsUpdate.setColumn(nrow, "CD_CAR_FUEL", this.dsList.getColumn(i, "CD_CAR_FUEL"));
        				this.dsUpdate.setColumn(nrow, "DS_INSURANCE", this.dsList.getColumn(i, "DS_INSURANCE"));
        				this.dsUpdate.setColumn(nrow, "DT_FR_INSURANCE", this.dsList.getColumn(i, "DT_FR_INSURANCE"));
        				this.dsUpdate.setColumn(nrow, "DT_TO_INSURANCE", this.dsList.getColumn(i, "DT_TO_INSURANCE"));
        				this.dsUpdate.setColumn(nrow, "DT_DISPOSE", this.dsList.getColumn(i, "DT_DISPOSE"));
        				this.dsUpdate.setColumn(nrow, "YN_RENT", this.dsList.getColumn(i, "YN_RENT"));
        				this.dsUpdate.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsUpdate.setColumn(nrow, "TY_DEPT", this.dsList.getColumn(i, "TY_DEPT"));
        				this.dsUpdate.setColumn(nrow, "DS_LOCATION", this.dsList.getColumn(i, "DS_LOCATION"));
        				this.dsUpdate.setColumn(nrow, "ASSET_NUMBER", this.dsList.getColumn(i, "ASSET_NUMBER"));
        				this.dsUpdate.setColumn(nrow, "SALE_PRICE", this.dsList.getColumn(i, "SALE_PRICE"));
        				this.dsUpdate.setColumn(nrow, "USER2", this.dsList.getColumn(i, "USER2"));
        				this.dsUpdate.setColumn(nrow, "DT_USER2", this.dsList.getColumn(i, "DT_USER2"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "INSURANCE_PAY", this.dsList.getColumn(i, "INSURANCE_PAY"));
        				this.dsUpdate.setColumn(nrow,"NO_AUTOSLIP", this.dsList.getColumn(i, "NO_AUTOSLIP"));
        				this.dsUpdate.setColumn(nrow,"CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow,"DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();

        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "CD_CAR", this.dsList.getColumn(i, "CD_CAR"));

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
         *	리셋 버튼
         */
        this.fnReset = function(){
        	this.ccfCD_CORP.form.CDTextBox.set_value("");
        	this.ccfCD_CORP.form.DSTextBox.set_value("");
        	this.ccfTY_DEPT.form.CDTextBox.set_value("");
        	this.ccfTY_DEPT.form.DSTextBox.set_value("");
        };

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("법인코드를 입력하세요.");
        // 		return false;
        // 	}
        //
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

        		for( var i = 2 ; i < this.dxGrid.getCellCount("body"); i++){
        			//this.dxGrid.setCellProperty( "body", i, "cssclass", "expr:nexacro.toNumber(dataset.getColumn(currow, 'AM_COST')) >= '7000' ? 'BACK_ChongKe': '' " );
        			this.dxGrid.setCellProperty( "body", 13, "cssclass", "expr:dataset.getColumn(currow, 'OVER_DT_GUBUN')=='OVERDT'?'red':'black'" );
        		}

        		this.fnSetButton();

        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "combo") {
        		if (errorCode == 0) {
        			if(this.dsTY_DEPT.getRowCount() > 0){
        				this.divSearch.form.cboTY_DEPT.set_index(0);
        			}
        		}else if(svcID == "slipDelete") {
        			this.gfnAlert( " 전표취소 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
        		}else {
        			this.gfnAlert(errorMsg);
        		}

        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.codefind_AfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        };

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	switch(id) {
        		case "ccfTY_DEPT":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "DA");
        			break;

        		default:
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow)
        {
        	var gridIdx = this.dxGrid.currentrow;

        	switch(id) {
        		case "DAX_CFCOMMONCODE":     // 부서구분
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "DA");
        		break;

        		case "CAR_FUEL":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "G8");
        			dsUserParam.setColumn(nrow, "CD_CODE1", "");
        			dsUserParam.setColumn(nrow, "CD_CODE2", "");
        		break;

        		default:
        	}

        	return true;
        };


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        /************************************************************************
         * 전표 이벤트
         ************************************************************************/
        this.fnFormButton = function(obj,e) {

        	//if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if( obj.id == "btnExt_FormButton1"){

        		this.dsList.filter("CHK == 1");
        		var nCnt = this.dsList.rowcount;

        		if( nCnt == 0) {
        			this.gfnAlert("전표발행할 행을 체크하세요.", "");
        			this.dsList.filter("");
        			return;
        		}

        		this.dsList.filter("");

        		//if(!this.fnCheckFlag(this.dxGrid)) return;
        		this.gfnConfirm("선택한 데이터의 전표발행 작업을 하시겠습니까?", "fnSlipIssue");
        	}

        	if( obj.id == "btnExt_FormButton2"){

        		this.dsList.filter("CHK == 1");
        		var nCnt = this.dsList.rowcount;

        		if( nCnt == 0) {
        			this.gfnAlert("전표취소할 행을 체크하세요.");
        			this.dsList.filter("");
        			return;
        		}

        		this.dsList.filter("");

        		//if(!this.fnCheckFlag(this.dxGrid)) return;
        		this.gfnConfirm("선택한 데이터의 전표취소 작업을 하시겠습니까?", "fnSlipCancel");
        	}

        	if( obj.id == "btnExt_FormButton3"){
        		if( !this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_AUTOSLIP")) ){
        			var param = {};

        			param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition,"NO_AUTOSLIP");
        			param.IUD_FLAG = "S";

        			this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        		} else {
        			this.gfnAlert("전표가 생성된 행만 전표조회 가능합니다.", "");
        		}
        	}
        };

        /*
          *	전표발행
          */
        this.fnSlipIssue = function(svcID, value){

        	if(value) {
        		this.gfnGridBeforeSelect(this.dxGrid);

        		var colIdx = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, "CHK");
        		var strSlipKey1 = "";
        		var strSlipKey2 = "";
        		var strSlipKey3 = "";
        		var nRow = 0;
        		for ( var i =0; i < this.dsList.rowcount; i++){
        			 var strDisplaytype = this.dxGrid.getCellPropertyValue( i, this.dxGrid.getBindCellIndex("body","CHK"), "displaytype");

        			if( this.dsList.getColumn(i, this.ucFlag) != "#" && strDisplaytype == "checkboxcontrol" && this.dsList.getColumn(i,"CHK") == 1) {
        			//trace(this.dsList.getOrgColumn(i,"YN_APPROVAL"));
        			 //   if(this.dsList.getOrgColumn(i,"YN_APPROVAL") != "Y"){
        			//	    this.gfnAlert("승인 상태가 아닙니다.");
        			 //       return;
        			//	}
        				if(!this.gfnIsNull(this.dsList.getOrgColumn(i,"NO_AUTOSLIP"))){
        				    this.gfnAlert("이미 전표발행된 데이터가 있습니다.");
        			        return;
        				}
        				strSlipKey1 += this.dsList.getColumn(i,"CD_VENDOR")+",";
        				strSlipKey2 += this.dsList.getColumn(i,"INSURANCE_PAY")+",";
        				strSlipKey3 += this.dsList.getColumn(i,"CD_CAR")+",";

        			}
        		}

        		var param = {};

        		param.CD_VENDOR = strSlipKey1.substr(0,strSlipKey1.length-1);
        		param.INSURANCE_PAY = strSlipKey2.substr(0,strSlipKey2.length-1);
        		param.CD_CAR = strSlipKey3.substr(0,strSlipKey3.length-1);
        		//param.TY_AUTOSLIP = tyAutoslip;					// ISSUE:전표발행 CANCEL:전표취소
        		//param.GR_SEARCH = this.FormInfo.GR_SEARCH;
        		//param.DT_BASE = this.dsSearch.getColumn(0, "DT_BASE");
        		param.CD_CORP = "9";
        		param.DS_CORP = "(주)부영주택";
        		trace("dddddd"+param.CD_VENDOR+param.INSURANCE_PAY +param.CD_CAR);
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_EXPENSE_REGISTRATION_CAR", "fnPopupCallback", param, 1300, 600);

        	}

        };

        /*
          *	전표취소
          */
        this.fnSlipCancel = function(svcID, value){

        	if(value) {
        		this.gfnGridBeforeSelect(this.dxGrid);

        		var colIdx = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, "CHK");
        		var strSlipKey1 = "";
        		var strSlipKey2 = "";

        		var nRow = 0;
        		for ( var i =0; i < this.dsList.rowcount; i++){
        			 var strDisplaytype = this.dxGrid.getCellPropertyValue( i, this.dxGrid.getBindCellIndex("body","CHK"), "displaytype");

        			if( this.dsList.getColumn(i, this.ucFlag) != "#" && strDisplaytype == "checkboxcontrol" && this.dsList.getColumn(i,"CHK") == 1) {
        				if(this.gfnIsNull(this.dsList.getColumn(i,"NO_AUTOSLIP"))){
        				    this.gfnAlert("전표가 생성된 행만 전표취소 가능합니다.");
        			        return;
        				}

        				strSlipKey1 += this.dsList.getColumn(i,"CD_CAR")+",";
        				strSlipKey2 += this.dsList.getColumn(i,"NO_AUTOSLIP")+",";
        			}
        		}

        		this.dsSlip.clearData();
        		this.dsSlip.addRow();
        		this.dsSlip.setColumn(0, "CD_CAR", "");
        		this.dsSlip.setColumn(0, "DT_ACCOUNT", "");
        		this.dsSlip.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsSlip.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        		this.dsSlip.setColumn(0, "NO_AUTOSLIP", strSlipKey2.substr(0,strSlipKey2.length-1));

        		var strSvcId    = "slipDelete";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "slipDelete=dsSlip";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnPopupCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// trabsaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}

        };
        //팝업 콜백
        this.fnPopupCallback = function(strID, val) {

        	// 전표발행 / 취소
        	if(strID.indexOf("DHA_CAR_DLG") > 0) {
        		if(val){
        			var msg = "전표발행"
        			var json = JSON.parse(val);
        			if(strID == "slipDelete") msg = msg + "취소";

        			this.gfnAlert( msg + " 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
        		}
        	}
        };
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

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        // 상세내용
        this.fnDtlInfo = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		return false;
        	}

        	var param = {};
        	param.NO_CAR = this.dsList.getColumn(this.dsList.rowposition, "NO_CAR");

        	trace("param.NO_CAR :: " + param.NO_CAR);

        	var nwidth = 870;
        	var nheight = 280;
        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_CARREG_DLG", "fnPopCallBack", param, nwidth, nheight);
        }


        this.fnUpate = function(svcID, value){

        	if(value) {
        		this.gfnGridBeforeSelect(this.dxGrid);

        		var colIdx = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, "CHK");
        		var strSlipKey1 = "";
        		var strSlipKey2 = "";
        		var strSlipKey3 = "";
        		var nRow = 0;
        		for ( var i =0; i < this.dsList.rowcount; i++){
        			 var strDisplaytype = this.dxGrid.getCellPropertyValue( i, this.dxGrid.getBindCellIndex("body","CHK"), "displaytype");

        			if( this.dsList.getColumn(i, this.ucFlag) != "#" && strDisplaytype == "checkboxcontrol" && this.dsList.getColumn(i,"CHK") == 1) {
        			//trace(this.dsList.getOrgColumn(i,"YN_APPROVAL"));
        			 //   if(this.dsList.getOrgColumn(i,"YN_APPROVAL") != "Y"){
        			//	    this.gfnAlert("승인 상태가 아닙니다.");
        			 //       return;
        			//	}
        				if(!this.gfnIsNull(this.dsList.getOrgColumn(i,"NO_AUTOSLIP"))){
        				    this.gfnAlert("이미 전표발행된 데이터가 있습니다.");
        			        return;
        				}
        				//strSlipKey1 += this.dsList.getColumn(i,"DT_REQUEST")+",";
        				//strSlipKey2 += this.dsList.getColumn(i,"ID_PERSON")+",";
        				strSlipKey1 += this.dsList.getColumn(i,"CD_CAR")+",";
        			}
        		}

        		var param = {};
        		//param.DT_REQUEST = strSlipKey1.substr(0,strSlipKey1.length-1);
        		//param.ID_PERSON = strSlipKey2.substr(0,strSlipKey2.length-1);
        		param.CD_CAR = strSlipKey1.substr(0,strSlipKey1.length-1);
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_CARINSURANCE_UPDATE", "fnPopupCallback", param, 330, 270);

        	}

        };


        //부서구분 콤보 조회
        this.fnSetCombo = function() {

           this.dsCombo = new Dataset();
           this.dsCombo.addColumn("CD_PREFIX", "string");

           this.dsCombo.addRow();
           this.dsCombo.setColumn(0, "CD_PREFIX", "DA");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_DEPT=combo0";
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

        this.dsList_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_DEPT.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_CARINSURANCE_UPDATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
