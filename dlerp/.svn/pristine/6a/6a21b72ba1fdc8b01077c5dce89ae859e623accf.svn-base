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
            this.set_titletext("귀속부서관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHBPR_ACNTUNIT_TREELVY_SELECT_STD</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHBPR_ACNTUNIT_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHBPR_ACNTUNIT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHBPR_ACNTUNIT_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_USE\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_CORP:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.getSetter("CDTextWidth").set("60");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_USE","ccfCD_DEPT_ACNT:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoYN_USE","staYN_USE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_columncount("4");
            obj.set_direction("horizontal");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_rdoYN_USE_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoYN_USE_innerdataset", obj);
            divSearch_form_rdoYN_USE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoYN_USE_innerdataset);
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
            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.rdoYN_USE","value","dsSearch","YN_USE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHB_ACNTUNIT_STD.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_CORP", 	 this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", 	 this.AuthClient.DS_CORP);
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
        	this.btnUser = this.gfnFormButtonAdd("btnUser", "fnUser");
        	this.btnUser = this.gfnFormButtonAdd("btnHistory", "fnHistorySelect");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.rdoYN_USE = this.divSearch.form.rdoYN_USE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHB_ACNTUNIT_STD", "CD_DEPT_ACNT", "LV_DEPT_ACNT");
        	this.dxGrid.set_selecttype("cell");

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dsList.addEventHandler("oncolumnchanged", this.fnGrid_ColumnChanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");	//회계단위코드
        	this.dsSelect.addColumn("TY_USE"      , "string");	//사용여부
        	this.dsSelect.addColumn("CD_CORP"      , "string");	//법인코드

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("DS_DEPT_ACNT", "string");
        	this.dsInsert.addColumn("LV_DEPT_ACNT", "string");
        	this.dsInsert.addColumn("GR_DEPT_ACNT", "string");
        	this.dsInsert.addColumn("CD_DEPT_UPPER", "string");
        	this.dsInsert.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsInsert.addColumn("CD_DEPT_BEFORE", "string");
        	this.dsInsert.addColumn("CD_COST", "string");
        	this.dsInsert.addColumn("DT_CHANGE", "string");
        	this.dsInsert.addColumn("SZ_UNDER", "bigdecimal");
        	this.dsInsert.addColumn("SZ_EXCESS", "bigdecimal");
        	this.dsInsert.addColumn("SZ_STORE", "bigdecimal");
        	this.dsInsert.addColumn("RT_TAXFREE", "bigdecimal");
        	this.dsInsert.addColumn("YN_SLIP", "string");
        	this.dsInsert.addColumn("YN_BUDGET", "string");
        	this.dsInsert.addColumn("YN_CASH", "string");
        	this.dsInsert.addColumn("YN_MONTH", "string");
        	this.dsInsert.addColumn("YN_VAT", "string");
        	this.dsInsert.addColumn("YN_ANBUN", "string");
        	this.dsInsert.addColumn("YN_FS", "string");
        	this.dsInsert.addColumn("YN_USE", "string");
        	this.dsInsert.addColumn("YN_PM", "string");
        	this.dsInsert.addColumn("YN_FIX", "string");
        	this.dsInsert.addColumn("CD_TB", "string");
        	this.dsInsert.addColumn("CD_BS", "string");
        	this.dsInsert.addColumn("CD_PL", "string");
        	this.dsInsert.addColumn("CD_DEPT_ACNT", "string");
        	this.dsInsert.addColumn("ID_SABUN", "string");
        	this.dsInsert.addColumn("ID_CHARGE", "string");
        	this.dsInsert.addColumn("ID_MANAGE", "string");
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("YN_BUDGET_CONTROL", "string");
        	this.dsInsert.addColumn("TY_STATUS", "string");
        	this.dsInsert.addColumn("YN_FUND", "string");
        	this.dsInsert.addColumn("YN_VIEW", "string");
        	this.dsInsert.addColumn("YN_ARREARS", "string");
        	this.dsInsert.addColumn("CD_BIZ_DEPT", "string");
        	this.dsInsert.addColumn("CD_BIZ_PART", "string");
        	this.dsInsert.addColumn("CD_BIZ_MNGDEPT", "string");
        	this.dsInsert.addColumn("CD_COSTTUJA_DEPT", "string");
        	this.dsInsert.addColumn("CD_BUDGETCTL_DEPT", "string");
        	this.dsInsert.addColumn("CD_UPJONG", "string");
        	this.dsInsert.addColumn("CD_GROUP", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("YN_UPJONGLVL", "string");
        	this.dsInsert.addColumn("YN_GROUPLVL", "string");
        	this.dsInsert.addColumn("YN_CORPLVL", "string");
        	this.dsInsert.addColumn("DS_MEMO", "string");
        	this.dsInsert.addColumn("CD_ETC1_DEPT", "string");
        	this.dsInsert.addColumn("YN_FIX_SUM", "string");
        	this.dsInsert.addColumn("YN_CORP_INSA", "string");
        	this.dsInsert.addColumn("CD_NRBS", "string");
        	this.dsInsert.addColumn("CD_NRPL", "string");
        	this.dsInsert.addColumn("TY_VENDOR", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("YN_SAUPBUD", "string");
        	this.dsInsert.addColumn("DS_ADDR", "string");
        	this.dsInsert.addColumn("YN_COST", "string");
        	this.dsInsert.addColumn("YN_ALLOWANCE", "string");
        	this.dsInsert.addColumn("YN_GENERAL", "string");
        	this.dsInsert.addColumn("YN_IMWON", "string");
        	this.dsInsert.addColumn("CHG_CD_COST", "string");
        	this.dsInsert.addColumn("DT_LASTCOST", "string");
        	this.dsInsert.addColumn("CD_MAINDEPT", "string");
        	this.dsInsert.addColumn("CD_WONGACOST", "string");
        	this.dsInsert.addColumn("CD_DEPT_ACNT_OUT", "string");
        	this.dsInsert.addColumn("YN_PROG", "string");
        	this.dsInsert.addColumn("CD_LOCAL_CURR", "string");
        	this.dsInsert.addColumn("CD_EXEC_CURR", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("DS_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("LV_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("GR_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("CD_DEPT_UPPER", "string");
        	this.dsUpdate.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsUpdate.addColumn("CD_DEPT_BEFORE", "string");
        	this.dsUpdate.addColumn("CD_COST", "string");
        	this.dsUpdate.addColumn("DT_CHANGE", "string");
        	this.dsUpdate.addColumn("SZ_UNDER", "bigdecimal");
        	this.dsUpdate.addColumn("SZ_EXCESS", "bigdecimal");
        	this.dsUpdate.addColumn("SZ_STORE", "bigdecimal");
        	this.dsUpdate.addColumn("RT_TAXFREE", "bigdecimal");
        	this.dsUpdate.addColumn("YN_SLIP", "string");
        	this.dsUpdate.addColumn("YN_BUDGET", "string");
        	this.dsUpdate.addColumn("YN_CASH", "string");
        	this.dsUpdate.addColumn("YN_MONTH", "string");
        	this.dsUpdate.addColumn("YN_VAT", "string");
        	this.dsUpdate.addColumn("YN_ANBUN", "string");
        	this.dsUpdate.addColumn("YN_FS", "string");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("YN_PM", "string");
        	this.dsUpdate.addColumn("YN_FIX", "string");
        	this.dsUpdate.addColumn("CD_TB", "string");
        	this.dsUpdate.addColumn("CD_BS", "string");
        	this.dsUpdate.addColumn("CD_PL", "string");
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("ID_CHARGE", "string");
        	this.dsUpdate.addColumn("ID_MANAGE", "string");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("YN_BUDGET_CONTROL", "string");
        	this.dsUpdate.addColumn("TY_STATUS", "string");
        	this.dsUpdate.addColumn("YN_FUND", "string");
        	this.dsUpdate.addColumn("YN_VIEW", "string");
        	this.dsUpdate.addColumn("YN_ARREARS", "string");
        	this.dsUpdate.addColumn("CD_BIZ_DEPT", "string");
        	this.dsUpdate.addColumn("CD_BIZ_PART", "string");
        	this.dsUpdate.addColumn("CD_BIZ_MNGDEPT", "string");
        	this.dsUpdate.addColumn("CD_COSTTUJA_DEPT", "string");
        	this.dsUpdate.addColumn("CD_BUDGETCTL_DEPT", "string");
        	this.dsUpdate.addColumn("CD_UPJONG", "string");
        	this.dsUpdate.addColumn("CD_GROUP", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("YN_UPJONGLVL", "string");
        	this.dsUpdate.addColumn("YN_GROUPLVL", "string");
        	this.dsUpdate.addColumn("YN_CORPLVL", "string");
        	this.dsUpdate.addColumn("DS_MEMO", "string");
        	this.dsUpdate.addColumn("CD_ETC1_DEPT", "string");
        	this.dsUpdate.addColumn("YN_FIX_SUM", "string");
        	this.dsUpdate.addColumn("YN_CORP_INSA", "string");
        	this.dsUpdate.addColumn("CD_NRBS", "string");
        	this.dsUpdate.addColumn("CD_NRPL", "string");
        	this.dsUpdate.addColumn("TY_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("YN_SAUPBUD", "string");
        	this.dsUpdate.addColumn("DS_ADDR", "string");
        	this.dsUpdate.addColumn("YN_COST", "string");
        	this.dsUpdate.addColumn("YN_ALLOWANCE", "string");
        	this.dsUpdate.addColumn("YN_GENERAL", "string");
        	this.dsUpdate.addColumn("YN_IMWON", "string");
        	this.dsUpdate.addColumn("CHG_CD_COST", "string");
        	this.dsUpdate.addColumn("DT_LASTCOST", "string");
        	this.dsUpdate.addColumn("CD_MAINDEPT", "string");
        	this.dsUpdate.addColumn("CD_WONGACOST", "string");
        	this.dsUpdate.addColumn("YN_PROG", "string");
        	this.dsUpdate.addColumn("CD_LOCAL_CURR", "string");
        	this.dsUpdate.addColumn("CD_EXEC_CURR", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_DEPT_ACNT", "string");
        	this.dsDelete.addColumn("ID_USER", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
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

        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	//this.dsSelect.setColumn(0, "TY_USE", (this.dsSearch.getColumn(0, "YN_USE") == "Y" ? "Y" : ""));
        	this.dsSelect.setColumn(0, "TY_USE", this.dsSearch.getColumn(0, "YN_USE"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	//법인코드

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
        // 	if(this.dsList.findRow(this.ucFlag, "I") > -1){
        // 		this.gfnAlert("신규 추가된 데이터가 이미 있습니다.");
        // 		return;
        // 	}

        	var nRow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nRow, "YN_USE", "Y");

        	this.dsList.set_rowposition(nRow);
        	this.dxGrid.setCellPos(this.dxGrid.getBindCellIndex("body", "CD_DEPT_ACNT"));

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
        				this.dsInsert.setColumn(nrow, "DS_DEPT_ACNT", this.dsList.getColumn(i, "DS_DEPT_ACNT"));
        				this.dsInsert.setColumn(nrow, "LV_DEPT_ACNT", this.dsList.getColumn(i, "LV_DEPT_ACNT"));
        				this.dsInsert.setColumn(nrow, "GR_DEPT_ACNT", this.dsList.getColumn(i, "GR_DEPT_ACNT"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT_UPPER", this.dsList.getColumn(i, "CD_DEPT_UPPER"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsList.getColumn(i, "CD_DEPT_SELFACNT"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT_BEFORE", "");
        				this.dsInsert.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsInsert.setColumn(nrow, "DT_CHANGE", "");
        				this.dsInsert.setColumn(nrow, "SZ_UNDER", 0);
        				this.dsInsert.setColumn(nrow, "SZ_EXCESS", 0);
        				this.dsInsert.setColumn(nrow, "SZ_STORE", 0);
        				this.dsInsert.setColumn(nrow, "RT_TAXFREE", 0);
        				this.dsInsert.setColumn(nrow, "YN_SLIP", this.dsList.getColumn(i, "YN_SLIPACCEPT"));
        				this.dsInsert.setColumn(nrow, "YN_BUDGET", this.dsList.getColumn(i, "YN_BUDGET"));
        				this.dsInsert.setColumn(nrow, "YN_CASH", "N");
        				this.dsInsert.setColumn(nrow, "YN_MONTH", this.dsList.getColumn(i, "YN_MONTH"));
        				this.dsInsert.setColumn(nrow, "YN_VAT", this.dsList.getColumn(i, "YN_VAT"));
        				this.dsInsert.setColumn(nrow, "YN_ANBUN", this.dsList.getColumn(i, "YN_ANBUN"));
        				this.dsInsert.setColumn(nrow, "YN_FS", this.dsList.getColumn(i, "YN_FS"));
        				this.dsInsert.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsInsert.setColumn(nrow, "YN_PM", "N");
        				this.dsInsert.setColumn(nrow, "YN_FIX", "Y");
        				this.dsInsert.setColumn(nrow, "CD_TB", "TB00000");
        				this.dsInsert.setColumn(nrow, "CD_BS", "BS00000");
        				this.dsInsert.setColumn(nrow, "CD_PL", "PL00000");
        				this.dsInsert.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsInsert.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "ID_CHARGE", "");
        				this.dsInsert.setColumn(nrow, "ID_MANAGE", "");
        				this.dsInsert.setColumn(nrow, "CD_SITE", "");
        				this.dsInsert.setColumn(nrow, "YN_BUDGET_CONTROL", this.dsList.getColumn(i, "YN_BUDGET_CONTROL"));
        				this.dsInsert.setColumn(nrow, "TY_STATUS", "");
        				this.dsInsert.setColumn(nrow, "YN_FUND", this.dsList.getColumn(i, "YN_FUND"));
        				this.dsInsert.setColumn(nrow, "YN_VIEW", "N");
        				this.dsInsert.setColumn(nrow, "YN_ARREARS", "N");
        				this.dsInsert.setColumn(nrow, "CD_BIZ_DEPT", "");
        				this.dsInsert.setColumn(nrow, "CD_BIZ_PART", "");
        				this.dsInsert.setColumn(nrow, "CD_BIZ_MNGDEPT", "");
        				this.dsInsert.setColumn(nrow, "CD_COSTTUJA_DEPT", "");
        				this.dsInsert.setColumn(nrow, "CD_BUDGETCTL_DEPT", "");
        				this.dsInsert.setColumn(nrow, "CD_UPJONG", "");
        				this.dsInsert.setColumn(nrow, "CD_GROUP", "");
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "YN_UPJONGLVL", "N");
        				this.dsInsert.setColumn(nrow, "YN_GROUPLVL", "N");
        				this.dsInsert.setColumn(nrow, "YN_CORPLVL", "N");
        				this.dsInsert.setColumn(nrow, "DS_MEMO", this.dsList.getColumn(i, "DS_MEMO"));
        				this.dsInsert.setColumn(nrow, "CD_ETC1_DEPT", "");
        				this.dsInsert.setColumn(nrow, "YN_FIX_SUM", "N");
        				this.dsInsert.setColumn(nrow, "YN_CORP_INSA", this.dsList.getColumn(i, "YN_CORP_INSA"));
        				this.dsInsert.setColumn(nrow, "CD_NRBS", "");
        				this.dsInsert.setColumn(nrow, "CD_NRPL", "");
        				this.dsInsert.setColumn(nrow, "TY_VENDOR", "");
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_JUMIN"));
        				this.dsInsert.setColumn(nrow, "YN_SAUPBUD", "N");
        				this.dsInsert.setColumn(nrow, "DS_ADDR", "");
        				this.dsInsert.setColumn(nrow, "YN_COST", "N");
        				this.dsInsert.setColumn(nrow, "YN_ALLOWANCE", "N");
        				this.dsInsert.setColumn(nrow, "YN_GENERAL", "N");
        				this.dsInsert.setColumn(nrow, "YN_IMWON", "N");
        				this.dsInsert.setColumn(nrow, "CHG_CD_COST", "");
        				this.dsInsert.setColumn(nrow, "DT_LASTCOST", "");
        				this.dsInsert.setColumn(nrow, "CD_MAINDEPT", "");
        				this.dsInsert.setColumn(nrow, "CD_WONGACOST", "");
        				this.dsInsert.setColumn(nrow, "CD_DEPT_ACNT_OUT", "");
        				this.dsInsert.setColumn(nrow, "YN_PROG", this.dsList.getColumn(i, "YN_PROG"));
        				this.dsInsert.setColumn(nrow, "CD_LOCAL_CURR", this.dsList.getColumn(i, "CD_LOCAL_CURR"));
        				this.dsInsert.setColumn(nrow, "CD_EXEC_CURR", this.dsList.getColumn(i, "CD_EXEC_CURR"));

        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "DS_DEPT_ACNT", this.dsList.getColumn(i, "DS_DEPT_ACNT"));
        				this.dsUpdate.setColumn(nrow, "LV_DEPT_ACNT", this.dsList.getColumn(i, "LV_DEPT_ACNT"));
        				this.dsUpdate.setColumn(nrow, "GR_DEPT_ACNT", this.dsList.getColumn(i, "GR_DEPT_ACNT"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_UPPER", this.dsList.getColumn(i, "CD_DEPT_UPPER"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsList.getColumn(i, "CD_DEPT_SELFACNT"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_BEFORE", "");
        				this.dsUpdate.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsUpdate.setColumn(nrow, "DT_CHANGE", "");
        				this.dsUpdate.setColumn(nrow, "SZ_UNDER", 0);
        				this.dsUpdate.setColumn(nrow, "SZ_EXCESS", 0);
        				this.dsUpdate.setColumn(nrow, "SZ_STORE", 0);
        				this.dsUpdate.setColumn(nrow, "RT_TAXFREE", 0);
        				this.dsUpdate.setColumn(nrow, "YN_SLIP", this.dsList.getColumn(i, "YN_SLIPACCEPT"));
        				this.dsUpdate.setColumn(nrow, "YN_BUDGET", this.dsList.getColumn(i, "YN_BUDGET"));
        				this.dsUpdate.setColumn(nrow, "YN_CASH", "N");
        				this.dsUpdate.setColumn(nrow, "YN_MONTH", this.dsList.getColumn(i, "YN_MONTH"));
        				this.dsUpdate.setColumn(nrow, "YN_VAT", this.dsList.getColumn(i, "YN_VAT"));
        				this.dsUpdate.setColumn(nrow, "YN_ANBUN", this.dsList.getColumn(i, "YN_ANBUN"));
        				this.dsUpdate.setColumn(nrow, "YN_FS", this.dsList.getColumn(i, "YN_FS"));
        				this.dsUpdate.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsUpdate.setColumn(nrow, "YN_PM", "N");
        				this.dsUpdate.setColumn(nrow, "YN_FIX", "Y");
        				this.dsUpdate.setColumn(nrow, "CD_TB", "TB00000");
        				this.dsUpdate.setColumn(nrow, "CD_BS", "BS00000");
        				this.dsUpdate.setColumn(nrow, "CD_PL", "PL00000");
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsUpdate.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "ID_CHARGE", "");
        				this.dsUpdate.setColumn(nrow, "ID_MANAGE", "");
        				this.dsUpdate.setColumn(nrow, "CD_SITE", "");
        				this.dsUpdate.setColumn(nrow, "YN_BUDGET_CONTROL", this.dsList.getColumn(i, "YN_BUDGET_CONTROL"));
        				this.dsUpdate.setColumn(nrow, "TY_STATUS", "");
        				this.dsUpdate.setColumn(nrow, "YN_FUND", this.dsList.getColumn(i, "YN_FUND"));
        				this.dsUpdate.setColumn(nrow, "YN_VIEW", "N");
        				this.dsUpdate.setColumn(nrow, "YN_ARREARS", "N");
        				this.dsUpdate.setColumn(nrow, "CD_BIZ_DEPT", "");
        				this.dsUpdate.setColumn(nrow, "CD_BIZ_PART", "");
        				this.dsUpdate.setColumn(nrow, "CD_BIZ_MNGDEPT", "");
        				this.dsUpdate.setColumn(nrow, "CD_COSTTUJA_DEPT", "");
        				this.dsUpdate.setColumn(nrow, "CD_BUDGETCTL_DEPT", "");
        				this.dsUpdate.setColumn(nrow, "CD_UPJONG", "");
        				this.dsUpdate.setColumn(nrow, "CD_GROUP", "");
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "YN_UPJONGLVL", "N");
        				this.dsUpdate.setColumn(nrow, "YN_GROUPLVL", "N");
        				this.dsUpdate.setColumn(nrow, "YN_CORPLVL", "N");
        				this.dsUpdate.setColumn(nrow, "DS_MEMO", this.dsList.getColumn(i, "DS_MEMO"));
        				this.dsUpdate.setColumn(nrow, "CD_ETC1_DEPT", "");
        				this.dsUpdate.setColumn(nrow, "YN_FIX_SUM", "N");
        				this.dsUpdate.setColumn(nrow, "YN_CORP_INSA", this.dsList.getColumn(i, "YN_CORP_INSA"));
        				this.dsUpdate.setColumn(nrow, "CD_NRBS", "");
        				this.dsUpdate.setColumn(nrow, "CD_NRPL", "");
        				this.dsUpdate.setColumn(nrow, "TY_VENDOR", "");
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_JUMIN"));
        				this.dsUpdate.setColumn(nrow, "YN_SAUPBUD", "N");
        				this.dsUpdate.setColumn(nrow, "DS_ADDR", "");
        				this.dsUpdate.setColumn(nrow, "YN_COST", "N");
        				this.dsUpdate.setColumn(nrow, "YN_ALLOWANCE", "N");
        				this.dsUpdate.setColumn(nrow, "YN_GENERAL", "N");
        				this.dsUpdate.setColumn(nrow, "YN_IMWON", "N");
        				this.dsUpdate.setColumn(nrow, "CHG_CD_COST", "");
        				this.dsUpdate.setColumn(nrow, "DT_LASTCOST", "");
        				this.dsUpdate.setColumn(nrow, "CD_MAINDEPT", "");
        				this.dsUpdate.setColumn(nrow, "CD_WONGACOST", "");
        				this.dsUpdate.setColumn(nrow, "YN_PROG", this.dsList.getColumn(i, "YN_PROG"));
        				this.dsUpdate.setColumn(nrow, "CD_LOCAL_CURR", this.dsList.getColumn(i, "CD_LOCAL_CURR"));
        				this.dsUpdate.setColumn(nrow, "CD_EXEC_CURR", this.dsList.getColumn(i, "CD_EXEC_CURR"));


        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
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
        	var validate = true;

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("법인코드를 입력하세요!");
        		return false;
        	}

        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("귀속부서코드는 필수입니다.", "fnVaidateCallback");
        // 	}

        	return validate;
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
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "ccfCD_DEPT_ACNT") {
        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}

        		var sYnUse = (this.dsSearch.getColumn(0, "YN_USE") == "Y") ? "Y":"%";
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, sYnUse);						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        	}
        	return true;

        /*
        	if (id == "ccfCD_DEPT_ACNT") {
        		var cd_dept = "0000000";

        		if (this.UserInfo.LEVCD_DEPT_ACNT == "2")
        		{
        			cd_dept = "0000000";
        		}
        		else
        		{
        			cd_dept = this.UserInfo.LEVCD_DEPT_ACNT;
        		}

        		dsUserParam.setColumn(nrow, "LV_DEPT"		, cd_dept);
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, cd_dept);
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");
        		dsUserParam.setColumn(nrow, "CD_CORP"		, "");
        		dsUserParam.setColumn(nrow, "YR_ACCOUNT"	, "");
        	}
        	return true;
        */
        };
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	switch(id) {
        		case "DHX_CFUPPER_DEPT":
         			dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		break;
        		case "DHX_LOCALTAXPLACE":
         			dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		break;

        		case "DHX_CFACNTUNIT_LEVELUPPER":
        			var cdDeptAcnt = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT");
        			var lvDeptAcnt = this.dsList.getColumn(this.dsList.rowposition, "LV_DEPT_ACNT");
        			//var grDeptAcnt = this.dsList.getColumn(this.dsList.rowposition, "GR_DEPT_ACNT");

        			if(this.gfnIsNull(cdDeptAcnt)) {
        				this.gfnAlert("귀속부서를 먼저 선택하세요.");
        				return false;
        			}
        			if(this.gfnIsNull(lvDeptAcnt)) {
        				this.gfnAlert("레벨을 먼저 선택하세요.");
        				return false;
        			}
        // 			if(this.gfnIsNull(grDeptAcnt)) {
        // 				this.gfnAlert("등급을 먼저 선택하세요.");
        // 				return false;
        // 			}
        			dsUserParam.setColumn(nrow, "LV_DEPT" , lvDeptAcnt);
        			//dsUserParam.setColumn(nrow, "CD_CORP" ,this.dsSearch.getColumn(0, "CD_CORP"));	//법인코드
        			dsUserParam.setColumn(nrow, "CD_CORP" ,this.dsSearch.getColumn(0, "CD_CORP"));	//법인코드
        			dsUserParam.setColumn(nrow, "CD_DEPT_ACNT", cdDeptAcnt);	//귀속부서코드

        		break;
        		case "DHX_CFSELFACNT":
        			dsUserParam.setColumn(nrow, "LV_DEPT", "");
        		break;
        		case "DHXPR_COMMON_CODEFIND_A03":
        			// 등급 DHX_CFACNTUNIT_GROUP
        			dsUserParam.setColumn(nrow, "CD_SYSTEM", "DH");
        			dsUserParam.setColumn(nrow, "CD_TYPE", "A03");
        		break;

        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged=function(id, codeFindData){
        	if(id == "DHX_CFUPPER_DEPT"){
        		var arr = codeFindData;
        		var cdCorp = "";
        		if(arr.length > 0){
        			cdCorp = arr[0]["CD_CORP"];
        		}
        		this.dsList.setColumn(this.dsList.rowposition, "CD_CORP", cdCorp);
        		this.dsList.setColumn(this.dsList.rowposition, "CD_DEPT_BUY", "");
        		this.dsList.setColumn(this.dsList.rowposition, "DS_DEPT_BUY", "");
        	}
        };

        //그리드 값변경 이벤트
        this.fnGrid_ColumnChanged = function(obj,e)
        {
        //  파인건설 기준으로는 뒷내용 지우지 않음.
        // 	if(e.columnid == 'LV_DEPT_ACNT'){	//레벨이 변경되었을 경우
        // 		if(!this.gfnIsNull(e.newvalue) && e.newvalue != e.oldvalue){
        // 			obj.setColumn(e.row, "CD_DEPT_UPPER", "");		//상위귀속부서코드
        // 			obj.setColumn(e.row, "DS_DEPT_ACNT_UPPER", "");	//상위귀속부서명
        // 			obj.setColumn(e.row, "CD_DEPT_SELFACNT", "");	//세무단위코드
        // 			obj.setColumn(e.row, "DS_DEPT_SELFACNT", "");	//세무단위명
        // 		}
        // 	}
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

        this.fnUser = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.CD_DEPT_ACNT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT");
        	param.DS_DEPT_ACNT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_ACNT");
        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
        	param.FlagMode = "U";

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHB_USER", "", param);
        }


        this.fnHistorySelect = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.CD_DEPT_ACNT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT");
        	param.DS_DEPT_ACNT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_ACNT");
        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHB_ACNTUNIT_HISTORY", "", param);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHB_ACNTUNIT_STD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
