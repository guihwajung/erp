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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_enableevent("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMFPR_BILLING_SLIP_SELECT</Col></Row><Row><Col id=\"SP\">DMFPR_BILLING_SLIP_SAVE</Col><Col id=\"TARGET\">save</Col></Row><Row><Col id=\"TARGET\">execslip</Col><Col id=\"SP\">DMFPR_BILLING_AUTOSLIP_ISSUE</Col></Row><Row><Col id=\"TARGET\">execcancel</Col><Col id=\"SP\">DMFPR_BILLING_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">exec_etax</Col><Col id=\"SP\">DWBPR_ETAX_EXECUTE</Col></Row><Row><Col id=\"TARGET\">appSelect</Col><Col id=\"SP\">DMFPR_APP_DMF01_SELECT</Col></Row><Row><Col id=\"TARGET\">appChk</Col><Col id=\"SP\">DMFPR_APP_DMF01_CHK</Col></Row><Row><Col id=\"TARGET\">appSlipChk</Col><Col id=\"SP\">DMBPR_SLIP_CHK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("FitToContents").set("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("기성년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ctclYM_WORK:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("전표발행여부");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_SLIP","sta02:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var divSearch_form_ccboYN_SLIP_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboYN_SLIP_innerdataset", obj);
            divSearch_form_ccboYN_SLIP_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">%</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">전표발행</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미발행</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboYN_SLIP_innerdataset);
            obj.set_text("국산");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","4","0",null,null,"6","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboYN_SLIP","value","dsSearch","YN_SLIP");
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
        this.addIncludeScript("DMF_BILLING_SLIP.xfdl",'lib::libCommon.xjs');
        this.registerScript("DMF_BILLING_SLIP.xfdl", function() {
        this.executeIncludeScript('lib::libCommon.xjs'); /*include 'lib::libCommon.xjs'*/
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YM_WORK))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        	}
        	else
        	{
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0, "YM_WORK", today.substr(0,6));
        	}
            this.dsSearch.setColumn(0, "YN_SLIP", '%');
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
         	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
         	this.FormBtns.Save.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
         	this.btnSlipIssue = this.gfnFormButtonAdd("btnSlipIssue", "fnSlipIssue");
         	this.btnSlipSearch = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");
         	this.btnSlipCancel = this.gfnFormButtonAdd("btnSlipCancel", "fnSlipCancel");
        	this.btnBill = this.gfnFormButtonAdd("btnBill", "fnBill");
        	this.btnApp = this.gfnFormButtonAdd("btnApp", "fnApp");
        	this.btnAppCancel = this.gfnFormButtonAdd("btnAppCancel", "fnAppCancel");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        // 	this.ccfVendor = this.divSearch.form.ccfVendor;
        // 	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        // 	this.ccboTY_APPLY = this.divSearch.form.ccboTY_APPLY;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMF_BILLING_SLIP");
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("YN_SLIP", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("NO_BILLING", "string");
        	this.dsSave.addColumn("AM_SUPPLY", "bigdecimal");
        	this.dsSave.addColumn("AM_SUPPLYVAT", "bigdecimal");
        	this.dsSave.addColumn("AM_BAN", "bigdecimal");
        	this.dsSave.addColumn("AM_BANVAT", "bigdecimal");
        	this.dsSave.addColumn("DT_ISSUE", "string");
        	this.dsSave.addColumn("CD_VATPROOF", "string");
        	this.dsSave.addColumn("DT_TAX", "string");
        	this.dsSave.addColumn("CD_PAYMENT", "string");
        	this.dsSave.addColumn("DT_PAYMENT", "string");
        	this.dsSave.addColumn("YN_JIKBUL", "string");
        	this.dsSave.addColumn("TY_TAXGUBUN", "string");
        	this.dsSave.addColumn("RM_REM", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("NO_BILLING", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("CD_SITE", "string");

        	this.dsExecEtax = new Dataset();
        	this.dsExecEtax.addColumn("TY_WORK", "string");
        	this.dsExecEtax.addColumn("CD_SYSTEM", "string");
        	this.dsExecEtax.addColumn("CD_TRADE", "string");
        	this.dsExecEtax.addColumn("ID_INSERT", "string");

        	this.dsAppParam = new Dataset();
        	this.dsAppParam.addColumn("ID_USER", "string");
        	this.dsAppParam.addColumn("CD_SITE", "string");
        	this.dsAppParam.addColumn("YM_WORK", "string");
        	this.dsAppParam.addColumn("NO_BILLINGS", "string");
        	this.dsAppParam.addColumn("ID_AP_TYPE", "string");

        	this.dsAppCheck = new Dataset();
        	this.dsAppCheck.addColumn("CD_SITE", "string");
        	this.dsAppCheck.addColumn("YM_ACT", "string");
        	this.dsAppCheck.addColumn("DS_MODULE", "string");
        }

        /************************************************************************
         * 버튼 이벤트
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
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsSelect.setColumn(0, "YN_SLIP", this.dsSearch.getColumn(0, "YN_SLIP"));

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

        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				if(!this.fnValidate_CD_VATPROOF(i)) return false;
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "NO_BILLING", this.dsList.getColumn(i, "NO_BILLING"));
        				this.dsSave.setColumn(nrow, "AM_SUPPLY", this.dsList.getColumn(i, "AM_SUPPLY"));
        				this.dsSave.setColumn(nrow, "AM_SUPPLYVAT", this.dsList.getColumn(i, "AM_SUPPLYVAT"));
        				this.dsSave.setColumn(nrow, "AM_BAN", this.dsList.getColumn(i, "AM_BAN"));
        				this.dsSave.setColumn(nrow, "AM_BANVAT", this.dsList.getColumn(i, "AM_BANVAT"));
        				this.dsSave.setColumn(nrow, "DT_ISSUE", this.dsList.getColumn(i, "DT_ISSUE"));
        				this.dsSave.setColumn(nrow, "CD_VATPROOF", this.dsList.getColumn(i, "CD_VATPROOF"));
        				this.dsSave.setColumn(nrow, "DT_TAX", this.dsList.getColumn(i, "DT_TAX"));
        				this.dsSave.setColumn(nrow, "CD_PAYMENT", this.dsList.getColumn(i, "CD_PAYMENT"));
        				this.dsSave.setColumn(nrow, "DT_PAYMENT", this.dsList.getColumn(i, "DT_PAYMENT"));
        				this.dsSave.setColumn(nrow, "YN_JIKBUL", this.dsList.getColumn(i, "YN_JIKBUL"));
        				this.dsSave.setColumn(nrow, "TY_TAXGUBUN", this.dsList.getColumn(i, "TY_TAXGUBUN"));
        				this.dsSave.setColumn(nrow, "RM_REM", this.dsList.getColumn(i, "RM_REM"));
        				break;
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
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

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하십시오.");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기성년월을 입력하십시오.");
        		return false;
        	}

        	return true;
        };

        /*
         *	저장시 증빙구분에 따른 Validate
         */
        this.fnValidate_CD_VATPROOF = function(row)
        {
        // 	if(this.dsList.getColumn(row, "CD_VATPROOF") == "A")
        // 	{
        // 		if(this.dsList.getColumn(row, "AM_SUPPLYVAT") == 0 || this.gfnIsNull(this.dsList.getColumn(row, "AM_SUPPLYVAT")))
        // 		{
        // 			this.gfnAlert("[" + (row + 1) + "열] " + "증빙구분이 세금계산서인 경우 기성금 부가세를 반드시 입력하여야합니다.");
        // 			return false;
        // 		}
        //
        // 		if(this.dsList.getColumn(row, "AM_BAN") != 0
        // 		&& (this.dsList.getColumn(row, "AM_BANVAT") == 0 || this.gfnIsNull(this.dsList.getColumn(row, "AM_BANVAT")))
        // 		)
        // 		{
        // 			this.gfnAlert("[" + (row + 1) + "열] " + "증빙구분이 세금계산서인 경우 선급금 공급가가 존재한다면 선급금 부가세를 반드시 입력하여야합니다.");
        // 			return false;
        // 		}
        // 	}
        // 	else if(this.dsList.getColumn(row, "CD_VATPROOF") == "B")
        // 	{
        // 		if(this.dsList.getColumn(row, "AM_SUPPLYVAT") != 0 || this.dsList.getColumn(row, "AM_BANVAT") != 0)
        // 		{
        // 			this.gfnAlert("[" + (row + 1) + "열] " + "증빙구분이 계산서인 경우 부가세를 반드시 제외하여야합니다.");
        // 			return false;
        // 		}
        // 	}

        	var type = "";

        	switch(this.dsList.getColumn(row, "CD_VATPROOF"))
        	{
        		case "A" : type = "세금계산서"; break;
        		case "B" : type = "계산서"; break;
        		case "C" : type = "매입불공제"; break;
        		case "D" : type = "현금영수증"; break;
        		case "E" : type = "현금영수증(세금없음)"; break;
        		case "F" : type = "영세율매입"; break;
        		case "G" : type = "세금없음"; break;
        	}

        	switch(this.dsList.getColumn(row, "CD_VATPROOF"))
        	{
        		case "A" :
        			if(this.dsList.getColumn(row, "AM_SUPPLYVAT") == 0 || this.gfnIsNull(this.dsList.getColumn(row, "AM_SUPPLYVAT")))
        			{
        				this.gfnAlert("[" + (row + 1) + "열] " + "증빙구분이 "+ type + "인 경우 기성금 부가세를 반드시 입력하여야합니다.");
        				return false;
        			}

        			if(this.dsList.getColumn(row, "AM_BAN") != 0
        			&& (this.dsList.getColumn(row, "AM_BANVAT") == 0 || this.gfnIsNull(this.dsList.getColumn(row, "AM_BANVAT")))
        			)
        			{
        				this.gfnAlert("[" + (row + 1) + "열] " + "증빙구분이 "+ type + "인 경우 선급금 공급가가 존재한다면 선급금 부가세를 반드시 입력하여야합니다.");
        				return false;
        			}
        		break;

        		case "C" : case "D" :
        			if(this.dsList.getColumn(row, "AM_SUPPLYVAT") == 0 || this.gfnIsNull(this.dsList.getColumn(row, "AM_SUPPLYVAT")))
        			{
        				this.gfnAlert("[" + (row + 1) + "열] " + "증빙구분이 "+ type + "인 경우 기성금 부가세를 반드시 입력하여야합니다.");
        				return false;
        			}
        		break;

        		case "B" : case "E" : case "F" : case "G" :
        			if(this.dsList.getColumn(row, "AM_SUPPLYVAT") != 0 || this.dsList.getColumn(row, "AM_BANVAT") != 0)
        			{
        				this.gfnAlert("[" + (row + 1) + "열] " + "증빙구분이 " + type + "인 경우 부가세를 반드시 제외하여야합니다.");
        				return false;
        			}
        		break;
        	}

        	return true;
        }

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
        	}
        	else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "SLPPUB"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표발행이 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "SLPCNC"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표취소가 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "appChk")
        	{
        		if (errorCode == 0)
        		{
        			this.fnAppSelect();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "appSelect") {
        		if (errorCode == 0)
        		{
        			this.fnAppOpen();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "exec_etax") {
        		if (errorCode == 0)
        		{
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("세금계산서 발행 정상처리되었습니다.", "fnCallback_callback");
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "appSlipChk")
        	{
        		if (errorCode == 0)
        		{
        			if(strArg == "REQ")
        				this.fnAppChk();
        			else if(strArg == "CANCEL")
        			{
        				this.fnAppCancelChk();
        			}
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT 값이 Y일때만 수정가능상태
        // 	if(this.dsList.getColumn(row, "YN_EDIT") == "N") {
        // 		return false;
        // 	}

        	if(colnm == "CHK") return;

        	if(this.dsList.getColumn(row, "YN_EDIT_SLIP_INFO") == "N") {
        		return false;
        // 		switch(colnm)
        // 		{
        // 			case "DT_ISSUE" : 	case "CD_VATPROOF" :
        // 			case "DT_TAX" :   	case "CD_PAYMENT" :
        // 			case "DT_PAYMENT" : case "TY_TAXGUBUN" :
        // 			case "RM_REM" :
        // 			return false;
        // 		}
        	}
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         // 전표발행 버튼 클릭 이벤트
        this.fnSlipIssue = function(obj,e) {

        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("전표발행 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	var chkCnt = 0;

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1" && this.dsList.getColumn(i, "NO_SLIP") != ""){
        			this.dsList.setColumn(i, "CHK", 0);
        		}
        	}

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			chkCnt = chkCnt + 1;
        		}
        	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n발행건수 : [" + chkCnt + "] "
        			+ "\n\n전표발행 하시겠습니까?";

        	this.gfnConfirm(msg, "fnSlip_callback", "SLPPUB");

        }

        // 전표취소 버튼 클릭 이벤트
        this.fnSlipCancel = function(obj,e) {

        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("전표취소 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	var chkCnt = 0;

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1" && this.dsList.getColumn(i, "NO_SLIP") == ""){
        			this.dsList.setColumn(i, "CHK", 0);
        		}
        	}

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			chkCnt = chkCnt + 1;
        		}
        	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n취소건수 : [" + chkCnt + "] "
        			+ "\n\n전표취소 하시겠습니까?";

        	this.gfnConfirm(msg, "fnSlip_callback", "SLPCNC");
        }

        // 전표발행 or 취소 처리
        this.fnSlip_callback = function(strId, val) {
        	if(val == true)
        	{
        		var dsGubun = "";
        		if(strId == "SLPPUB"){
        			this.dsExecute.clearData();

        			for(var i=0;i < this.dsList.rowcount;i++){
        				if(this.dsList.getColumn(i, "CHK") == "1"){
        					var nrow = this.dsExecute.addRow();

        					this.dsExecute.setColumn(nrow, "NO_BILLING", this.dsList.getColumn(i, "NO_BILLING"));
        					this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        					this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				}
        			}

        			if (this.dsExecute.rowcount == 0) return;

        			dsGubun = "execslip=dsExecute";
        		}else{
        			this.dsExecute.clearData();


        			for(var i=0;i < this.dsList.rowcount;i++){
        				if(this.dsList.getColumn(i, "CHK") == "1"){
        					var nrow = this.dsExecute.addRow();

        					this.dsExecute.setColumn(nrow, "NO_BILLING", this.dsList.getColumn(i, "NO_BILLING"));
        					this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        					this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				}
        			}

        			if (this.dsExecute.rowcount == 0) return;

        			dsGubun = "execcancel=dsExecute";
        		}

        		var strSvcId    = strId;
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = dsGubun;
        		var outData     = "";
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
        }
        // 전표조회 버튼 클릭
        this.fnSlipSearch = function(obj, e) {

            if (this.dsList.rowcount > 0) {
                if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP"))) {

                    this.gfnAlert("발행된 전표가 없습니다.");
                } else {

                    this.gfnConfirm("전표를 조회하시겠습니까?", "fnSlipSearch_callback");
                }
            }
        }

        //전표조회 콜백
        this.fnSlipSearch_callback = function(strId, val) {
         if (val == true) {
                var param = {};
                //
                param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP");

                //전표발행시 팝업창 띄움
                this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnDialogCallback", param);
            }
        };

        // 세금계산서 발행 버튼.
        this.fnBill = function(obj,e) {
        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("세금계산서 발행 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	var chkCnt = 0;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			chkCnt = chkCnt + 1;
        		}
        	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n발행건수 : [" + chkCnt + "] "
        			+ "\n\n세금계산서 발행 하시겠습니까?";

        	this.gfnConfirm(msg, "fnBill_callback");
        }

        this.fnBill_callback = function(strId, val) {
        	if(val == true)
        	{
        		this.dsExecEtax.clearData();

        		for(var i= 0 ; i < this.dsList.rowcount ; i++){
        			if(this.dsList.getColumn(i, "CHK") == "1"){
        				if(!this.gfnIsNull(this.dsList.getColumn(i, "NO_SLIP")))
        				{
        					var nrow = this.dsExecEtax.addRow();
        					this.dsExecEtax.setColumn(nrow, "TY_WORK", "1");
        					this.dsExecEtax.setColumn(nrow, "CD_SYSTEM", "MM2");
        					this.dsExecEtax.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "NO_SLIP"));
        					this.dsExecEtax.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				}
        			}
        		}

        		if (this.dsExecEtax.rowcount == 0)
        		{
        			this.gfnAlert("대상 전표가 없습니다.");
        			return;
        		}

        		var strSvcId    = "exec_etax";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "exec_etax=dsExecEtax";
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


        //전자결재
        this.fnApp = function(obj,e)
        {
        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("전표결재 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n\n정산전표 전자결재를 하시겠습니까?";
        	this.gfnConfirm(msg, "fnApp_callback", "");
        }

        //전자결재취소
        this.fnAppCancel = function(obj,e)
        {
        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("전표결재 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n\n정산전표 취소전자결재를 하시겠습니까?";
        	this.gfnConfirm(msg, "fnAppCancel_callback", "");
        }


        //전자결재 체크로직
        this.fnApp_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.fnAppSlipStartChk("REQ");
        	}
        }

        //전자결재취소 체크로직
        this.fnAppCancel_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.fnAppSlipStartChk("CANCEL");
        	}
        }

        // 전자결재 최초 체크로직
        this.fnAppSlipStartChk = function(status) {
        	//if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsAppCheck.clearData();
        	this.dsAppCheck.addRow();
        	this.dsAppCheck.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsAppCheck.setColumn(0, "YM_ACT", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsAppCheck.setColumn(0, "DS_MODULE", "DM");

        	var strSvcId    = "appSlipChk";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "appSlipChk=dsAppCheck";
        	var outData     = "";
        	var strArg      = status;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        // 전자결재 체크로직
        this.fnAppChk = function()
        {
        	var noBillConts ="";
        	for(var i=0;i < this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			if(noBillConts != ""){
        				noBillConts += ",";
        			}
        			noBillConts += this.dsList.getColumn(i, "NO_BILLING");
        		}
        	}
        	this.dsAppParam.clearData();

        	var nrow = this.dsAppParam.addRow();

        	this.dsAppParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsAppParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsAppParam.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsAppParam.setColumn(nrow, "NO_BILLINGS", noBillConts);
        	this.dsAppParam.setColumn(nrow, "ID_AP_TYPE", "DMF01");

        	if (this.dsAppParam.rowcount == 0) return;

        	var strSvcId    = "appChk";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "appChk=dsAppParam";
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

        // 전자결재취소 체크로직
        this.fnAppCancelChk = function()
        {
        	var noBillConts ="";
        	for(var i=0;i < this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			if(noBillConts != ""){
        				noBillConts += ",";
        			}
        			noBillConts += this.dsList.getColumn(i, "NO_BILLING");
        		}
        	}
        	this.dsAppParam.clearData();

        	var nrow = this.dsAppParam.addRow();

        	//this.dsAppParam.setColumn(nrow, "TY_WRK", flg);

        	this.dsAppParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsAppParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsAppParam.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsAppParam.setColumn(nrow, "NO_BILLINGS", noBillConts);
        	this.dsAppParam.setColumn(nrow, "ID_AP_TYPE", "DMF02");

        	if (this.dsAppParam.rowcount == 0) return;

        	var strSvcId    = "appChk";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "appChk=dsAppParam";
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
        //전자결재 대상조회
        this.fnAppSelect = function()
        {
        	var strSvcId    = "appSelect";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "appSelect=dsAppParam";
        	var outData     = "dsAppList=appSelect0";
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

        //그룹웨어 팝업 호출
        this.fnAppOpen = function()
        {
        	if(this.dsAppList.rowcount > 0)
        	{
        		var sApType = "";
        		var sTitle  = "";
        		sApType = this.dsAppParam.getColumn(0,"ID_AP_TYPE");

        		if(sApType == "DMF01"){
        			sTitle = this.dsSearch.getColumn(0, "YM_WORK").substr(0,4)+'년 '+this.dsSearch.getColumn(0, "YM_WORK").substr(4,6)+'월 정산 전표['+ this.divSearch.form.ccfCD_SITE.form.DSTextBox.text+']'
        		}else if(sApType == "DMF02"){
        			sTitle = this.dsSearch.getColumn(0, "YM_WORK").substr(0,4)+'년 '+this.dsSearch.getColumn(0, "YM_WORK").substr(4,6)+'월 정산 전표 취소 ['+ this.divSearch.form.ccfCD_SITE.form.DSTextBox.text+']'
        		}

        		var sRef01  = this.dsSearch.getColumn(0, "CD_SITE");
        		var sRef02  = this.dsSearch.getColumn(0, "YM_WORK");
        		var sRef03  = this.dsAppParam.getColumn(0,"NO_BILLINGS");	//대장번호 ,로 구분하여 n건 발송
        		var sRef04  = "";
        		var oParam  = this.gfnDataSetToJson(this.dsAppList, this.dsAppList.rowposition)

        		console.info("================ oParam");
        		console.info(oParam);

        		this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, "", oParam, "fnAprvDialogCallback");
        	}
        }

        this.fnAprvDialogCallback = function()
        {
        	// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        	this.FormBtns.Select.click();
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        // 		if(e.columnid == "CD_VATPROOF")
        // 		{
        // 			if(e.newvalue == "A")
        // 			{
        // 				if(this.dsList.getColumn(e.row, "AM_SUPPLYVAT") == 0)
        // 				{
        // 					this.dsList.setColumn(e.row, "AM_SUPPLYVAT", nexacro.floor(nexacro.toNumber(this.dsList.getColumn(e.row, "AM_SUPPLY")) / 10, 0));
        // 				}
        //
        // 				if(this.dsList.getColumn(e.row, "AM_BANVAT") == 0)
        // 				{
        // 					this.dsList.setColumn(e.row, "AM_BANVAT", nexacro.floor(nexacro.toNumber(this.dsList.getColumn(e.row, "AM_BAN")) / 10, 0));
        // 				}
        // 			}
        // 			else if(e.newvalue == "B")
        // 			{
        // 				this.dsList.setColumn(e.row, "AM_SUPPLYVAT", 0);
        // 				this.dsList.setColumn(e.row, "AM_BANVAT", 0);
        // 			}
        //
        // 		}
        		if(e.columnid == "CD_VATPROOF")
        		{
        			// 세금계산서, 매입불공제, 현금영수증
        			if(e.newvalue == "A" || e.newvalue == "C" || e.newvalue == "D")
        			{
        				this.dsList.setColumn(e.row, "AM_SUPPLYVAT", nexacro.floor(nexacro.toNumber(this.dsList.getColumn(e.row, "AM_SUPPLY")) / 10, 0));
        				this.dsList.setColumn(e.row, "AM_BANVAT", nexacro.floor(nexacro.toNumber(this.dsList.getColumn(e.row, "AM_BAN")) / 10, 0));
        			}
        			// 계산서, 현금영수증(세금없음), 영세율매입, 세금없음
        			else if(e.newvalue == "B" || e.newvalue == "D" || e.newvalue == "E" || e.newvalue == "F" || e.newvalue == "G")
        			{
        				this.dsList.setColumn(e.row, "AM_SUPPLYVAT", 0);
        				this.dsList.setColumn(e.row, "AM_BANVAT", 0);
        			}
        		}
        		else if(e.columnid == "DT_ISSUE")
        		{
        			this.dsList.setColumn(e.row, "DT_TAX", e.newvalue);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsAppList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DMF_BILLING_SLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
