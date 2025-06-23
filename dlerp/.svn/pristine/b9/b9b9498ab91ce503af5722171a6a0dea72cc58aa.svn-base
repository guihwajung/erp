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
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DQAPR_PROJECTLIST_SELECT_SAP</Col></Row><Row><Col id=\"SP\">DQAPR_PROJECTLIST_SAVE_M</Col><Col id=\"TARGET\">save</Col></Row><Row><Col id=\"TARGET\">erp</Col><Col id=\"SP\">DQAPR_PROJECTCODE_DEPLOYTOERP</Col></Row><Row><Col id=\"TARGET\">deploySap</Col><Col id=\"SP\">DQAPR_PROJECTCODE_DEPLOYTOSAP</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PROJECT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_SAUP\"/><Col id=\"TY_CONST\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCostCenter", this);
            obj._setContents("<ColumnInfo><Column id=\"COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"PROFIT\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COLUMN\">CD_BCONTRACT</Col><Col id=\"PROFIT\">YN_BCONTRACT_PR</Col><Col id=\"COST\">YN_BCONTRACT</Col><Col id=\"PROJECT\">YN_BCONTRACT_PJ</Col></Row><Row><Col id=\"COLUMN\">CD_SAUP</Col><Col id=\"PROFIT\">YN_SAUP_PR</Col><Col id=\"COST\">YN_SAUP</Col><Col id=\"PROJECT\">YN_SAUP_PJ</Col></Row><Row><Col id=\"COLUMN\">CD_BUNYANG</Col><Col id=\"PROFIT\">YN_BUNYANG_PR</Col><Col id=\"COST\">YN_BUNYANG</Col><Col id=\"PROJECT\">YN_BUNYANG_PJ</Col></Row><Row><Col id=\"COLUMN\">CD_CONST</Col><Col id=\"PROFIT\">YN_CONST_PR</Col><Col id=\"COST\">YN_CONST</Col><Col id=\"PROJECT\">YN_CONST_PJ</Col></Row><Row><Col id=\"COLUMN\">CD_OPTION</Col><Col id=\"PROFIT\">YN_OPTION_PR</Col><Col id=\"COST\">YN_OPTION</Col><Col id=\"PROJECT\">YN_OPTION_PJ</Col></Row><Row><Col id=\"COLUMN\">CD_CS</Col><Col id=\"PROFIT\">YN_CS_PR</Col><Col id=\"COST\">YN_CS</Col><Col id=\"PROJECT\">YN_CS_PJ</Col></Row><Row><Col id=\"COLUMN\">CD_COMMECIAL</Col><Col id=\"PROFIT\">YN_COMMECIAL_PR</Col><Col id=\"COST\">YN_COMMECIAL</Col><Col id=\"PROJECT\">YN_COMMECIAL_PJ</Col></Row><Row><Col id=\"COLUMN\">CD_ADMIN1</Col><Col id=\"PROFIT\">YN_ADMIN1_PR</Col><Col id=\"COST\">YN_ADMIN1</Col><Col id=\"PROJECT\">YN_ADMIN1_PJ</Col></Row><Row><Col id=\"COLUMN\">CD_ADMIN2</Col><Col id=\"PROFIT\">YN_ADMIN2_PR</Col><Col id=\"COST\">YN_ADMIN2</Col><Col id=\"PROJECT\">YN_ADMIN2_PJ</Col></Row><Row><Col id=\"COLUMN\">CD_OFFICETEL</Col><Col id=\"PROFIT\">YN_OFFICETEL_PR</Col><Col id=\"COST\">YN_OFFICETEL</Col><Col id=\"PROJECT\">YN_OFFICETEL_PJ</Col></Row><Row><Col id=\"COLUMN\">CD_REFUND</Col><Col id=\"PROFIT\">YN_REFUND_PR</Col><Col id=\"COST\">YN_REFUND</Col><Col id=\"PROJECT\">YN_REFUND_PJ</Col></Row><Row><Col id=\"COLUMN\">CD_SAUPLOAN</Col><Col id=\"PROFIT\">YN_SAUPLOAN_PR</Col><Col id=\"COST\">YN_SAUPLOAN</Col><Col id=\"PROJECT\">YN_SAUPLOAN_PJ</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSapCostCenter", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelectSap", this);
            obj._setContents("<ColumnInfo><Column id=\"COSTCENTER\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_TO\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_IN_CHARGE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"COSTCENTER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COSTCTR_HIER_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUS_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_ISO\" type=\"STRING\" size=\"256\"/><Column id=\"PROFIT_CTR\" type=\"STRING\" size=\"256\"/><Column id=\"RECORD_QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"LOCK_IND_ACTUAL_PRIMARY_COSTS\" type=\"STRING\" size=\"256\"/><Column id=\"LOCK_IND_PLAN_PRIMARY_COSTS\" type=\"STRING\" size=\"256\"/><Column id=\"LOCK_IND_ACT_SECONDARY_COSTS\" type=\"STRING\" size=\"256\"/><Column id=\"LOCK_IND_PLAN_SECONDARY_COSTS\" type=\"STRING\" size=\"256\"/><Column id=\"LOCK_IND_ACTUAL_REVENUES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCK_IND_PLAN_REVENUES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCK_IND_COMMITMENT_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONDITION_TABLE_USAGE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION\" type=\"STRING\" size=\"256\"/><Column id=\"CSTG_SHEET\" type=\"STRING\" size=\"256\"/><Column id=\"ACTY_INDEP_TEMPLATE\" type=\"STRING\" size=\"256\"/><Column id=\"ACTY_DEP_TEMPLATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_NAME1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_NAME2\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_NAME3\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_NAME4\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_STREET\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_CITY\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DISTRICT\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_COUNTRY_ISO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_TAXJURCODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_PO_BOX\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_POSTL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_POBX_PCD\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_REGION\" type=\"STRING\" size=\"256\"/><Column id=\"TELCO_LANGU\" type=\"STRING\" size=\"256\"/><Column id=\"TELCO_LANGU_ISO\" type=\"STRING\" size=\"256\"/><Column id=\"TELCO_TELEPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"TELCO_TELEPHONE2\" type=\"STRING\" size=\"256\"/><Column id=\"TELCO_TELEBOX\" type=\"STRING\" size=\"256\"/><Column id=\"TELCO_TELEX\" type=\"STRING\" size=\"256\"/><Column id=\"TELCO_FAX_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"TELCO_TELETEX\" type=\"STRING\" size=\"256\"/><Column id=\"TELCO_PRINTER\" type=\"STRING\" size=\"256\"/><Column id=\"TELCO_DATA_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"JV_VENTURE\" type=\"STRING\" size=\"256\"/><Column id=\"JV_REC_IND\" type=\"STRING\" size=\"256\"/><Column id=\"JV_EQUITY_TYP\" type=\"STRING\" size=\"256\"/><Column id=\"JV_OTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JV_JIBCL\" type=\"STRING\" size=\"256\"/><Column id=\"JV_JIBSA\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPT\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"ACTY_DEP_TEMPLATE_ALLOC_CC\" type=\"STRING\" size=\"256\"/><Column id=\"ACTY_INDEP_TEMPLATE_ALLOC_CC\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC_AREA_LONG\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_IN_CHARGE_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProcSap", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProfit", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_FBTYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROJECT","0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ccfCD_PROJECT:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업유형");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_SAUP","sta02:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfTY_SAUP:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("상품유형");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PROJECT","sta00:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("프로젝트코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_CONST","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
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
            obj = new BindItem("item3","divSearch.form.ccfCD_PROJECT.form.CDTextBox","value","dsSearch","CD_PROJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfTY_SAUP.form.CDTextBox","value","dsSearch","TY_SAUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfTY_CONST.form.CDTextBox","value","dsSearch","TY_CONST");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DQA_PROJECTLIST_SAPLIST.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.msg = "";

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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_PROJECT))
        	{
        		this.dsSearch.setColumn(0, "CD_PROJECT", this.getOwnerFrame().CD_PROJECT);
        		this.divSearch.form.ccfCD_PROJECT.form.fnCodeFindLoad();

        		this.FormBtns.Select.click();
        	}
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
        	this.btnPROFIT = this.gfnFormButtonAdd("btnPROFIT", "fnPROFIT");
        	this.btnCOST = this.gfnFormButtonAdd("btnCOST", "fnCOST");
        	this.btnPROJ = this.gfnFormButtonAdd("btnPROJ", "fnPROJ");
        	this.btnCHG_NAME = this.gfnFormButtonAdd("btnCHG_NAME", "fnCHG_NAME");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfTY_SAUP = this.divSearch.form.ccfTY_SAUP;
        	this.ccfTY_CONST = this.divSearch.form.ccfTY_CONST;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.divSearch.form.ccfTY_SAUP.CodeFindName = "CF_CODE_DQ_01";		// 사업유형
        	this.divSearch.form.ccfTY_CONST.CodeFindName = "CF_CODE_DQ_02";	// 상품유형
        	this.divSearch.form.ccfCD_PROJECT.CodeFindName = "DQX_PROJECT";	// 프로젝트코드

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DQ", "DQA_PROJECTLIST_SAP");

        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJECT", "string");
        	this.dsSelect.addColumn("TY_SAUP", "string");
        	this.dsSelect.addColumn("TY_CONST", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_PROJECT", "string");
        	this.dsSave.addColumn("DS_PROJECT", "string");
        	this.dsSave.addColumn("TY_SAUP", "string");
        	this.dsSave.addColumn("TY_CONST", "string");
        	this.dsSave.addColumn("TY_PROJECT", "string");
        	this.dsSave.addColumn("CD_BCONTRACT", "string");
        	this.dsSave.addColumn("CD_SAUP", "string");
        	this.dsSave.addColumn("CD_BUNYANG", "string");
        	this.dsSave.addColumn("CD_CONST", "string");
        	this.dsSave.addColumn("CD_OPTION", "string");
        	this.dsSave.addColumn("CD_CS", "string");
        	this.dsSave.addColumn("CD_COMMECIAL", "string");
        	this.dsSave.addColumn("CD_ADMIN1", "string");
        	this.dsSave.addColumn("CD_ADMIN2", "string");
        	this.dsSave.addColumn("CD_OFFICETEL", "string");
        	this.dsSave.addColumn("CD_REFUND", "string");
        	this.dsSave.addColumn("ID_UPDATE", "string");

        	this.dsErp = new Dataset();
        	this.dsErp.addColumn("CD_PROJECT", "string");
        	this.dsErp.addColumn("ID_UPDATE", "string");
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

        	this.dsSelect.setColumn(0, "CD_PROJECT", this.dsSearch.getColumn(0, "CD_PROJECT"));
        	this.dsSelect.setColumn(0, "TY_SAUP", this.dsSearch.getColumn(0, "TY_SAUP"));
        	this.dsSelect.setColumn(0, "TY_CONST", this.dsSearch.getColumn(0, "TY_CONST"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

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

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "CD_PROJECT", this.dsList.getColumn(i, "CD_PROJECT"));
        				this.dsSave.setColumn(nrow, "DS_PROJECT", this.dsList.getColumn(i, "DS_PROJECT"));
        				this.dsSave.setColumn(nrow, "TY_SAUP", this.dsList.getColumn(i, "TY_SAUP"));
        				this.dsSave.setColumn(nrow, "TY_CONST", this.dsList.getColumn(i, "TY_CONST"));
        				this.dsSave.setColumn(nrow, "TY_PROJECT", this.dsList.getColumn(i, "TY_PROJECT"));
        				this.dsSave.setColumn(nrow, "CD_BCONTRACT", this.dsList.getColumn(i, "CD_BCONTRACT"));
        				this.dsSave.setColumn(nrow, "CD_SAUP", this.dsList.getColumn(i, "CD_SAUP"));
        				this.dsSave.setColumn(nrow, "CD_BUNYANG", this.dsList.getColumn(i, "CD_BUNYANG"));
        				this.dsSave.setColumn(nrow, "CD_CONST", this.dsList.getColumn(i, "CD_CONST"));
        				this.dsSave.setColumn(nrow, "CD_OPTION", this.dsList.getColumn(i, "CD_OPTION"));
        				this.dsSave.setColumn(nrow, "CD_CS", this.dsList.getColumn(i, "CD_CS"));
        				this.dsSave.setColumn(nrow, "CD_COMMECIAL", this.dsList.getColumn(i, "CD_COMMECIAL"));
        				this.dsSave.setColumn(nrow, "CD_ADMIN1", this.dsList.getColumn(i, "CD_ADMIN1"));
        				this.dsSave.setColumn(nrow, "CD_ADMIN2", this.dsList.getColumn(i, "CD_ADMIN2"));
        				this.dsSave.setColumn(nrow, "CD_OFFICETEL", this.dsList.getColumn(i, "CD_OFFICETEL"));
        				this.dsSave.setColumn(nrow, "CD_REFUND", this.dsList.getColumn(i, "CD_REFUND"));
        				this.dsSave.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
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
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "erp") {
        		if (errorCode == 0) {
        			this.fnErpCallback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("코드배포(ERP)가 완료되었습니다.", "fnErpCallback");

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "sap_costcenter") {
        		this._chkcnt++;
        		if(this.dsExport.rowcount > 0)
        		{
         			this.msg += this.dsExport.getColumn(0, "E_RTNMSG") + "\n";
        		}

        		if(this._chkcnt == this._cnt) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert(this.msg,"fnCallback_callback");
        		}
        	}
        	else if(svcID == "sap_profit") {
        		this.fnCallback_callback = function()
        		{
        			this.FormBtns.Select.click();
        		}

        		this._chkcnt++;
        		if(this.dsExport.rowcount > 0)
        		{
        //			if(this.dsExport.getColumn(0, "E_RTNCD") == "E")
        //			{
        // 			this.fnProfit_callback = function()
        // 			{
        // 				this.fnSapCostCenter();
        // 			}
        // 			// 임시로 에러여부와 관계없이 CostCenter 실행되도록 조치.
         			this.msg += this.dsExport.getColumn(0, "E_RTNMSG") + " " + this.dsExport.getColumn(0, "E_RTNCD") + "\n" + this.dsExport.getColumn(0, "MESSAGE") + "\n\n";

        // 			msg += "\n" + this.dsExport.getColumn(0, "MESSAGE");
        //
        // 			this.gfnAlert(msg,"","","fnProfit_callback");
        //
        				//return;
        //			}
        		}
        		if(this._chkcnt == this._cnt) {
        			this.gfnAlert(this.msg, "fnCallback_callback");
        		}
        	}
        	else if(svcID == "sap_ps") {
        		this._chkcnt++;
        		if(this.dsExport.rowcount > 0)
        		{
         			// 임시로 에러여부와 관계없이 CostCenter 실행되도록 조치.
         			this.msg += this.dsExport.getColumn(0, "O_RTNMSG") + " " + this.dsExport.getColumn(0, "O_RTNCD") + "\n";

        		}

        		if(this._chkcnt == this._cnt) {
        			this.fnCallback_callback = function()
        			{
        				//this.fnDeploySap();
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert(this.msg,"fnCallback_callback");
        		}
        	}
        	else if(svcID == "deploySap")
        	{
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        // cell 클릭했을때 이벤트(해당 cell에 대한 이벤트를 건다)
        this.fnGrid_EnterCell = function(obj, row, cell) {
           // 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
           var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);   // 클릭한 cell의 컬럼명

        //    if(colnm == "DS_PROJECT" && (this.dsList.getColumn(row, "YN_SAPSYNC") == "Y" || this.dsList.getColumn(row, "YN_SAPSENT") == "Y")){
        // 		return false;
        //    }
        	return;
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnPROFIT = function(obj,e) {
        	if(this.dsList.findRow("CHK", "1", 0) < 0)
        	{
        		this.gfnAlert("데이터를 선택해주세요.");
        		return;
        	}

        	this.fnZERP_FI_0014();
        }


        // 손익센터 생성 (코드배포(SAP) 첫번째 처리)
        this.fnZERP_FI_0014 = function()
        {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "ZERP_FI_0014");

        	this.dsSap = new Dataset();

        	this.dsHead = new Dataset();
        	this.dsHead.addColumn("KOKRS","string");
        	this.dsHead.addColumn("PRCTR","string");
        	this.dsHead.addColumn("DATETO","string");
        	this.dsHead.addColumn("DATEFROM","string");
        	this.dsHead.addColumn("VERAK","string");
        	this.dsHead.addColumn("WAERS","string");

        	this.dsData = new Dataset();
        	this.dsData.addColumn("PRCTR_NAME","string");
        	this.dsData.addColumn("LONG_TEXT","string");
        	this.dsData.addColumn("IN_CHARGE","string");
        	this.dsData.addColumn("DEPARTMENT","string");
        	this.dsData.addColumn("PRCTR_HIER_GRP","string");
        	this.dsData.addColumn("LOGSYSTEM","string");
        	this.dsData.addColumn("SEGMENT","string");
        	this.dsData.addColumn("IN_CHARGE_USER","string");

        	this._cnt = 0;
        	this._chkcnt = 0;
        	this.msg = "";
        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == "1")
        		{
        			var today = this.gfnGetDate();
        			for(var col = 0; col < this.dsCostCenter.rowcount; col++)
        			{
        				if(!this.gfnIsNull(this.dsList.getColumn(i, this.dsCostCenter.getColumn(col, "COLUMN")))
        				&& this.dsList.getColumn(i, this.dsCostCenter.getColumn(col, "PROFIT")) == "N")
        				{
        					this._cnt++;
        				}
        			}
        		}
        	}

        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == "1")
        		{
        			var today = this.gfnGetDate();
        			for(var col = 0; col < this.dsCostCenter.rowcount; col++)
        			{
        				if(!this.gfnIsNull(this.dsList.getColumn(i, this.dsCostCenter.getColumn(col, "COLUMN")))
        				&& this.dsList.getColumn(i, this.dsCostCenter.getColumn(col, "PROFIT")) == "N")
        				{
        					this.dsHead.clearData();
        					this.dsData.clearData();

        					var nrow = this.dsHead.addRow();
        					this.dsHead.setColumn(nrow, "KOKRS", "HD00");
        					this.dsHead.setColumn(nrow, "PRCTR", this.dsList.getColumn(i, this.dsCostCenter.getColumn(col, "COLUMN")));
        					this.dsHead.setColumn(nrow, "DATEFROM", "19600101");
        					this.dsHead.setColumn(nrow, "DATETO", "99991231");
        					this.dsHead.setColumn(nrow, "VERAK", "김혜진");
        					this.dsHead.setColumn(nrow, "WAERS", "KRW");

        					var ds_code = this.fnGetCostCenterDS_CODE(this.dsCostCenter.getColumn(col, "COLUMN"));

        					nrow = this.dsData.addRow();
        					this.dsData.setColumn(nrow, "PRCTR_NAME", this.dsList.getColumn(i, "DS_PROJECT") + ds_code);
        					this.dsData.setColumn(nrow, "LONG_TEXT", this.dsList.getColumn(i, "DS_PROJECT") + ds_code);
        					this.dsData.setColumn(nrow, "IN_CHARGE","김혜진");
        					this.dsData.setColumn(nrow, "DEPARTMENT","");
        					this.dsData.setColumn(nrow, "PRCTR_HIER_GRP", "4500");
        					this.dsData.setColumn(nrow, "LOGSYSTEM","");
        					this.dsData.setColumn(nrow, "SEGMENT","");
        					this.dsData.setColumn(nrow, "IN_CHARGE_USER","");

        					// SAP 호출
        					var strSvcId    = "sap_profit";
        					var strSvcType  = "sap";
        					var inProc		= "_dsProcSap";
        					var inData      = "select=dsSap ST_IS_HEAD=dsHead ST_IS_DATA=dsData";
        					var outData     = "dsExport=export" /*+ " dsProfit=ST_ES_RETURN" */;
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
        		}
        	}
        }

        this.fnCOST = function(obj,e)
        {
        	if(this.dsList.findRow("CHK", "1", 0) < 0)
        	{
        		this.gfnAlert("데이터를 선택해주세요.");
        		return;
        	}

        	this.fnSapCostCenter();
        }

        // CostCenter 생성. (코드배포(SAP) 두번째 처리)
        this.fnSapCostCenter = function()
        {
        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "ZERP_FI_0011");

        	this.dsSap = new Dataset();
        	this.dsSap.addColumn("I_KOKRS", "string");

        	this.dsSap.addRow();

        	this._cnt = 0;
        	this._chkcnt = 0;
        	this.msg = "";

        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == "1")
        		{
        			var today = this.gfnGetDate();
        			for(var col = 0; col < this.dsCostCenter.rowcount; col++)
        			{
        				if(!this.gfnIsNull(this.dsList.getColumn(i, this.dsCostCenter.getColumn(col, "COLUMN")))
        				&& this.dsList.getColumn(i, this.dsCostCenter.getColumn(col, "COST")) == "N")
        				{
        					if(!this.gfnIsNull(this.dsList.getColumn(i, this.dsCostCenter.getColumn(col, "COLUMN"))))
        					{
        						this._cnt++;
        					}
        				}
        			}
        		}
        	}

        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == "1")
        		{
        			var today = this.gfnGetDate();

        			for(var col = 0; col < this.dsCostCenter.rowcount; col++)
        			{
        				if(!this.gfnIsNull(this.dsList.getColumn(i, this.dsCostCenter.getColumn(col, "COLUMN")))
        				&& this.dsList.getColumn(i, this.dsCostCenter.getColumn(col, "COST")) == "N")
        				{
        					this.dsSelectSap.clearData();
        					var nrow = this.dsSelectSap.addRow();
        					// IN 파라미터 셋팅
        					this.dsSelectSap.setColumn(nrow, "COSTCENTER", this.dsList.getColumn(i, this.dsCostCenter.getColumn(col, "COLUMN")));
        					this.dsSelectSap.setColumn(nrow, "PROFIT_CTR", this.dsList.getColumn(i, this.dsCostCenter.getColumn(col, "COLUMN")));
        					this.dsSelectSap.setColumn(nrow, "PERSON_IN_CHARGE", "관리자");

        					var type = this.dsList.getColumn(i, this.dsCostCenter.getColumn(col, "COLUMN")).substr(0,1);
        					var costcenter_type = "";

        					if(type == "B")
        					{
        						costcenter_type = "F";
        					}
        					else
        					{
        						costcenter_type = "G";
        					}

        					var ds_code = this.fnGetCostCenterDS_CODE(this.dsCostCenter.getColumn(col, "COLUMN"));

        					this.dsSelectSap.setColumn(nrow, "COSTCENTER_TYPE", costcenter_type);
        					this.dsSelectSap.setColumn(nrow, "COSTCTR_HIER_GRP", 4520);
        					this.dsSelectSap.setColumn(nrow, "CURRENCY", "KRW");
        					this.dsSelectSap.setColumn(nrow, "NAME", this.dsList.getColumn(i, "DS_PROJECT") + ds_code);
        					this.dsSelectSap.setColumn(nrow, "DESCRIPT", this.dsList.getColumn(i, "DS_PROJECT") + ds_code);
        					//this.dsSelectSap.setColumn(nrow, "VALID_FROM", this.gfnGetFirstDate(today));
        					//this.dsSelectSap.setColumn(nrow, "VALID_TO", this.gfnAddMonth(this.gfnGetLastDate(today), 1200));
        					this.dsSelectSap.setColumn(nrow, "VALID_FROM", "19600101");
        					this.dsSelectSap.setColumn(nrow, "VALID_TO", "99991231");
        					this.dsSelectSap.setColumn(nrow, "COMP_CODE", "HD00");

        					// SAP 호출
        					var strSvcId    = "sap_costcenter";
        					var strSvcType  = "sap";
        					var inProc		= "_dsProcSap";
        					var inData      = "select=dsSap IN_IT_DATA=dsSelectSap";
        					var outData     = "dsExport=export dsSapCostCenter=ET_RETURN";
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
        		}
        	}
        }

        this.fnPROJ = function(obj,e)
        {
        	if(this.dsList.findRow("CHK", "1", 0) < 0)
        	{
        		this.gfnAlert("데이터를 선택해주세요.");
        		return;
        	}

        	this.fnPS();
        }


        this.fnPS = function()
        {
        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "ZERP_PS_0000");

        	this.dsSap = new Dataset();
        	//this.dsSap.addColumn("I_CBS", "string");
        	this.dsSap.addColumn("I_POST1", "string");
        	this.dsSap.addColumn("I_PROFL", "string");
        	this.dsSap.addColumn("I_PSPID", "string");

        	this._cnt = 0;
        	this._chkcnt = 0;
        	this.msg = "";

        	this.dsSap.clearData();

        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == "1")
        		{
        			var today = this.gfnGetDate();
        			for(var col = 0; col < this.dsCostCenter.rowcount; col++)
        			{
        				if(!this.gfnIsNull(this.dsList.getColumn(i, this.dsCostCenter.getColumn(col, "COLUMN")))
        				&& this.dsList.getColumn(i,this.dsCostCenter.getColumn(col, "PROJECT")) == "N") {
        					this._cnt++;
        				}
        			}
        		}
        	}

        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == "1")
        		{
        			var today = this.gfnGetDate();
        			for(var col = 0; col < this.dsCostCenter.rowcount; col++)
        			{
        				if(!this.gfnIsNull(this.dsList.getColumn(i, this.dsCostCenter.getColumn(col, "COLUMN")))
        				&& this.dsList.getColumn(i,this.dsCostCenter.getColumn(col, "PROJECT")) == "N")
        				{
        					this.dsSap.clearData();
        					var nrow = this.dsSap.addRow();

        					var ds_code = this.fnGetCostCenterDS_CODE(this.dsCostCenter.getColumn(col, "COLUMN"));

        					// IN 파라미터 셋팅
        					//this.dsSap.setColumn(nrow, "I_CBS", "");
        					this.dsSap.setColumn(nrow, "I_POST1", this.dsList.getColumn(i, "DS_PROJECT") + ds_code);
        					this.dsSap.setColumn(nrow, "I_PSPID", this.dsList.getColumn(i, this.dsCostCenter.getColumn(col, "COLUMN")));

        					var i_profl = "0000001";

        // 					if(columnIds[col] == "CD_BCONTRACT") i_profl = "0000004";
        // 					else if(columnIds[col] == "CD_OPTION") i_profl = "0000005";
        // 					else if(columnIds[col] == "CD_SAUP")  i_profl = "0000006";
        // 					else
        // 					{
        // 						if(this.dsList.getColumn(i, "TY_SAUP") == "B")
        // 						{
        // 							i_profl = "0000001";
        // 						}
        // 						else
        // 						{
        // 							i_profl = "0000002";
        // 						}
        // 					}

        					this.dsSap.setColumn(nrow, "I_PROFL", i_profl);

        					// SAP 호출
        					var strSvcId    = "sap_ps";
        					var strSvcType  = "sap";
        					var inProc		= "_dsProcSap";
        					var inData      = "select=dsSap";
        					var outData     = "dsExport=export";
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
        		}
        	}
        }

        this.fnCHG_NAME = function(obj,e)
        {
        	var param = {};
        	param.CD_PROJECT = this.dsList.getColumn(this.dsList.rowposition, "CD_PROJECT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DQA_SAPNAME_LIST", "fnCHG_NAME_callback", param);
        }

        this.fnCHG_NAME_callback = function(strID, val)
        {
        	this.FormBtns.Select.click();
        }


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // 코스트센터별 프로젝트 명칭.
        this.fnGetCostCenterDS_CODE = function(val)
        {
        	switch(val)
        	{
        		case "CD_SAUP"       : return "(착공전)";
        		case "CD_SAUPLOAN"   : return "(사업비대여)";
        		case "CD_CONST"      : return "";
        		case "CD_OPTION"     : return "(옵션)";
        		case "CD_CS"         : return "(하자)";
        		case "CD_BUNYANG"    : return "(분양)";
        		case "CD_BCONTRACT"  : return "(수주전)";
        		case "CD_COMMECIAL"  : return "(상가)";
        		case "CD_ADMIN1"     : return "(관리자1)";
        		case "CD_ADMIN2"     : return "(관리자2)";
        		case "CD_REFUND"     : return "(환불)";
        		case "CD_OFFICETEL"  : return "(오피스텔)";
        	}

        	return "";
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DQA_PROJECTLIST_SAPLIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
