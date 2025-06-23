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
                this._setFormPosition(400,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DQAPR_CHGNAME_SELECT_SAP</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DQAPR_PRJ_NAME_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJECT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PROJECT_PROFIT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PROJECT_COST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PROJECT_PROJECT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJECT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PORJECT_BEFORE\" type=\"STRING\" size=\"256\"/><Column id=\"KOKRS\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_PROJECT_PROFIT\"/><Col id=\"KOKRS\">HD00</Col><Col id=\"DATE_TO\">99991231</Col><Col id=\"DATE_FROM\">19600101</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProcSap", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DQAPR_PRJ_NAME_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSap", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsET_RETURN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","45",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트 명칭변경");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_PROJECT_BEFORE","10","staTITLE:5","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현재 명칭");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_PROJECT_BEFORE","staDS_PROJECT_BEFORE:-1","staTITLE:5",null,"30","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_PROJECT","10","staDS_PROJECT_BEFORE:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("변경될 명칭");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_PROJECT","staDS_PROJECT:-1","staBgDS_PROJECT_BEFORE:-1",null,"30","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PROJECT_BEFORE","staDS_PROJECT_BEFORE:5","staTITLE:10",null,"20","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PROJECT","staDS_PROJECT:5","ctxtDS_PROJECT_BEFORE:9",null,"20","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","32.50%","staDS_PROJECT:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.50%","staDS_PROJECT:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ctxtDS_PROJECT_BEFORE","value","dsData","DS_PORJECT_BEFORE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctxtDS_PROJECT","value","dsData","DS_PROJECT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DQA_PRJ_NAME_UPDATE.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this._cnt = 0;
        this._chkcnt = 0;
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
        		this.dsData.setColumn(0, "CD_PROJECT", this.getOwnerFrame().CD_PROJECT);
        		this.dsData.setColumn(0, "DS_PORJECT_BEFORE", this.getOwnerFrame().DS_PROJECT);
        		this.fnSelect();
        	}

        // 	this.dsData.setColumn(0, "CD_PROJECT_PROFIT", this.getOwnerFrame().CD_PROJECT_PROFIT);
        // 	this.dsData.setColumn(0, "CD_PROJECT_COST", this.getOwnerFrame().CD_PROJECT_COST);
        // 	this.dsData.setColumn(0, "CD_PROJECT_PROJECT", this.getOwnerFrame().CD_PROJECT_PROJECT);
        // 	this.dsData.setColumn(0, "DS_PORJECT_BEFORE", this.getOwnerFrame().DS_PROJECT);
        //
        // 	if(!this.gfnIsNull(this.getOwnerFrame().KOKRS) && !this.gfnIsNull(this.getOwnerFrame().DATE_TO)
        // 	&& !this.gfnIsNull(this.getOwnerFrame().DATE_FROM))
        // 	{
        // 		this.dsData.setColumn(0, "KOKRS", this.getOwnerFrame().KOKRS);
        // 		this.dsData.setColumn(0, "DATE_FROM", this.getOwnerFrame().DATE_FROM);
        // 		this.dsData.setColumn(0, "DATE_TO", this.getOwnerFrame().DATE_TO);
        // 	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJECT", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_PROJECT", "string");
        	this.dsSave.addColumn("DS_PROJECT", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsSapSelect = new Dataset();
        	this.dsSapSelect.addColumn("PRCTR_NAME", "string");
        	this.dsSapSelect.addColumn("LONG_TEXT", "string");
        	this.dsSapSelect.addColumn("IN_CHARGE", "string");
        	this.dsSapSelect.addColumn("DEPARTMENT", "string");
        	this.dsSapSelect.addColumn("PRCTR_HIER_GRP", "string");
        	this.dsSapSelect.addColumn("LOGSYSTEM", "string");
        	this.dsSapSelect.addColumn("SEGMENT", "string");
        	this.dsSapSelect.addColumn("IN_CHARGE_USER", "string");

        	this.dsSapSelectX = new Dataset();
        	this.dsSapSelectX.addColumn("PRCTR_NAME", "string");
        	this.dsSapSelectX.addColumn("LONG_TEXT", "string");
        	this.dsSapSelectX.addColumn("IN_CHARGE", "string");
        	this.dsSapSelectX.addColumn("DEPARTMENT", "string");
        	this.dsSapSelectX.addColumn("PRCTR_HIER_GRP", "string");
        	this.dsSapSelectX.addColumn("LOGSYSTEM", "string");
        	this.dsSapSelectX.addColumn("SEGMENT", "string");
        	this.dsSapSelectX.addColumn("IN_CHARGE_USER", "string");

        	this.dsSapSelect1 = new Dataset();
        	this.dsSapSelect1.addColumn("KOKRS", "string");
        	this.dsSapSelect1.addColumn("PRCTR", "string");
        	this.dsSapSelect1.addColumn("DATETO", "string");
        	this.dsSapSelect1.addColumn("DATEFROM", "string");
        	this.dsSapSelect1.addColumn("VERAK", "string");
        	this.dsSapSelect1.addColumn("WAERS", "string");

        	this.dsSap1Select = new Dataset();
        	this.dsSap1Select.addColumn("COSTCENTER", "string");
        	this.dsSap1Select.addColumn("VALID_FROM", "string");
        	this.dsSap1Select.addColumn("VALID_TO", "string");
        	this.dsSap1Select.addColumn("PERSON_IN_CHARGE", "string");
        	this.dsSap1Select.addColumn("DEPARTMENT", "string");
        	this.dsSap1Select.addColumn("COSTCENTER_TYPE", "string");
        	this.dsSap1Select.addColumn("COSTCTR_HIER_GRP", "string");
        	this.dsSap1Select.addColumn("COMP_CODE", "string");
        	this.dsSap1Select.addColumn("BUS_AREA", "string");
        	this.dsSap1Select.addColumn("CURRENCY", "string");
        	this.dsSap1Select.addColumn("CURRENCY_ISO", "string");
        	this.dsSap1Select.addColumn("PROFIT_CTR", "string");
        	this.dsSap1Select.addColumn("RECORD_QUANTITY", "string");
        	this.dsSap1Select.addColumn("LOCK_IND_ACTUAL_PRIMARY_COSTS", "string");
        	this.dsSap1Select.addColumn("LOCK_IND_PLAN_PRIMARY_COSTS", "string");
        	this.dsSap1Select.addColumn("LOCK_IND_ACT_SECONDARY_COSTS", "string");
        	this.dsSap1Select.addColumn("LOCK_IND_PLAN_SECONDARY_COSTS", "string");
        	this.dsSap1Select.addColumn("LOCK_IND_ACTUAL_REVENUES", "string");
        	this.dsSap1Select.addColumn("LOCK_IND_PLAN_REVENUES", "string");
        	this.dsSap1Select.addColumn("LOCK_IND_COMMITMENT_UPDATE", "string");
        	this.dsSap1Select.addColumn("CONDITION_TABLE_USAGE", "string");
        	this.dsSap1Select.addColumn("COSTCENTER_TYPE", "string");
        	this.dsSap1Select.addColumn("COSTCTR_HIER_GRP", "string");
        	this.dsSap1Select.addColumn("COMP_CODE", "string");
        	this.dsSap1Select.addColumn("BUS_AREA", "string");
        	this.dsSap1Select.addColumn("CURRENCY", "string");
        	this.dsSap1Select.addColumn("CURRENCY_ISO", "string");
        	this.dsSap1Select.addColumn("PROFIT_CTR", "string");
        	this.dsSap1Select.addColumn("RECORD_QUANTITY", "string");
        	this.dsSap1Select.addColumn("LOCK_IND_ACTUAL_PRIMARY_COSTS", "string");
        	this.dsSap1Select.addColumn("LOCK_IND_PLAN_PRIMARY_COSTS", "string");
        	this.dsSap1Select.addColumn("LOCK_IND_ACT_SECONDARY_COSTS", "string");
        	this.dsSap1Select.addColumn("APPLICATION", "string");
        	this.dsSap1Select.addColumn("CSTG_SHEET", "string");
        	this.dsSap1Select.addColumn("ACTY_INDEP_TEMPLATE", "string");
        	this.dsSap1Select.addColumn("ACTY_DEP_TEMPLATE", "string");
        	this.dsSap1Select.addColumn("ADDR_TITLE", "string");
        	this.dsSap1Select.addColumn("ADDR_NAME1", "string");
        	this.dsSap1Select.addColumn("ADDR_NAME2", "string");
        	this.dsSap1Select.addColumn("ADDR_NAME3", "string");
        	this.dsSap1Select.addColumn("ADDR_NAME4", "string");
        	this.dsSap1Select.addColumn("ADDR_STREET", "string");
        	this.dsSap1Select.addColumn("ADDR_CITY", "string");
        	this.dsSap1Select.addColumn("ADDR_DISTRICT", "string");
        	this.dsSap1Select.addColumn("ADDR_COUNTRY", "string");
        	this.dsSap1Select.addColumn("ADDR_COUNTRY_ISO", "string");
        	this.dsSap1Select.addColumn("ADDR_TAXJURCODE", "string");
        	this.dsSap1Select.addColumn("ADDR_PO_BOX", "string");
        	this.dsSap1Select.addColumn("ADDR_POSTL_CODE", "string");
        	this.dsSap1Select.addColumn("ADDR_POBX_PCD", "string");
        	this.dsSap1Select.addColumn("ADDR_REGION", "string");
        	this.dsSap1Select.addColumn("TELCO_LANGU", "string");
        	this.dsSap1Select.addColumn("TELCO_LANGU_ISO", "string");
        	this.dsSap1Select.addColumn("TELCO_TELEPHONE", "string");
        	this.dsSap1Select.addColumn("TELCO_TELEPHONE2", "string");
        	this.dsSap1Select.addColumn("TELCO_TELEBOX", "string");
        	this.dsSap1Select.addColumn("TELCO_TELEX", "string");
        	this.dsSap1Select.addColumn("TELCO_FAX_NUMBER", "string");
        	this.dsSap1Select.addColumn("TELCO_TELETEX", "string");
        	this.dsSap1Select.addColumn("TELCO_PRINTER", "string");
        	this.dsSap1Select.addColumn("TELCO_DATA_LINE", "string");
        	this.dsSap1Select.addColumn("JV_VENTURE", "string");
        	this.dsSap1Select.addColumn("JV_REC_IND", "string");
        	this.dsSap1Select.addColumn("JV_EQUITY_TYP", "string");
        	this.dsSap1Select.addColumn("JV_OTYPE", "string");
        	this.dsSap1Select.addColumn("JV_JIBCL", "string");
        	this.dsSap1Select.addColumn("JV_JIBSA", "string");
        	this.dsSap1Select.addColumn("NAME", "string");
        	this.dsSap1Select.addColumn("DESCRIPT", "string");
        	this.dsSap1Select.addColumn("FUNC_AREA", "string");
        	this.dsSap1Select.addColumn("ACTY_DEP_TEMPLATE_ALLOC_CC", "string");
        	this.dsSap1Select.addColumn("ACTY_INDEP_TEMPLATE_ALLOC_CC", "string");
        	this.dsSap1Select.addColumn("FUNC_AREA_LONG", "string");
        	this.dsSap1Select.addColumn("PERSON_IN_CHARGE_USER", "string");


        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
          /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_PROJECT", this.dsData.getColumn(0, "CD_PROJECT"));

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
        						callBackFnc, false); // 통신방법 정의 [생략가능]

        }

        this.fnSave = function() {
        	this.dsSave.clearData();
         	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "CD_PROJECT", this.dsData.getColumn(0, "CD_PROJECT"));
        	this.dsSave.setColumn(nrow, "DS_PROJECT", this.dsData.getColumn(0, "DS_PROJECT"));
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	/*
        	if (this.gfnIsNull(this.dsData.getColumn(0,"DS_NAME"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtDS_NAME.setFocus();
        		}
        		this.gfnAlert("성명은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        			//this.FormBtns.Select.click();
        			this.getParentContext().close(true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "sap") {
        		if (errorCode == 0) {
        			this._chkcnt++;
        			if(this.dsExport.rowcount > 0) {
        				this.msg += this.dsExport.getColumn(0, "E_RTNMSG") + " " + this.dsExport.getColumn(0, "E_RTNCD") + "\n" + this.dsExport.getColumn(0, "MESSAGE") + "\n\n";
        			}

        			if(this._chkcnt == this._cnt)
        			{
        				this.fnCallback_callback = function()
        				{
        					this.fnSapSub();
        				}
        				this.gfnAlert(this.msg, "fnCallback_callback");
        			}

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "sap1") {
        		this._chkcnt++;
        		if(this.dsExport.rowcount > 0)
        		{
         			this.msg += this.dsExport.getColumn(0, "E_RTNMSG") + "\n";
        		}

        		if(this._chkcnt == this._cnt) {
        			this.fnCallback_callback = function()
        			{
        				this.fnPS();
        			}

        			this.gfnAlert(this.msg, "fnCallback_callback");
        		}
        	}
        	else if(svcID == "sap_ps") {
        		this._chkcnt++;
        		if(this.dsExport.rowcount > 0)
        		{
         			this.msg += this.dsExport.getColumn(0, "O_RTNMSG") + " " + this.dsExport.getColumn(0, "O_RTNCD") + "\n";
        		}

        		if(this._chkcnt == this._cnt) {
        			this.fnCallback_callback = function()
        			{
        				this.fnSave();
        			}

        			this.gfnAlert(this.msg,"fnCallback_callback");
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	this.fnSap();
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        // 손익센터
        this.fnSap = function() {
        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "ZERP_FI_0019");

        	this.dsSap = new Dataset();

        	/*
        	this.dsSapSelect.clearData();
        	nrow = this.dsSapSelect.addRow();
        	*/

        	this._cnt = 0;
        	this._chkcnt = 0;
        	this.msg = "";

        // 	var cd_project = this.dsData.getColumn(0, "CD_PROJECT_PROFIT").split(",");
        // 	var kokrs = this.dsData.getColumn(0, "KOKRS").split(",");
        // 	var date_to = this.dsData.getColumn(0, "DATE_TO").split(",");
        // 	var date_from = this.dsData.getColumn(0, "DATE_FROM").split(",");

        	//this._cnt = cd_project.length;

        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "TY_GUBUN") == "PROFIT")
        		{
        			this._cnt++;
        		}
        	}

        	/*
        	// IN 파라미터 셋팅
        	this.dsSapSelect.setColumn(nrow, "PRCTR_NAME", this.dsData.getColumn(0, "DS_PROJECT"));
        	this.dsSapSelect.setColumn(nrow, "LONG_TEXT", this.dsData.getColumn(0, "DS_PROJECT"));
        	this.dsSapSelect.setColumn(nrow, "IN_CHARGE", "");
        	this.dsSapSelect.setColumn(nrow, "DEPARTMENT", "");
        	this.dsSapSelect.setColumn(nrow, "PRCTR_HIER_GRP", "");
        	this.dsSapSelect.setColumn(nrow, "LOGSYSTEM", "");
        	this.dsSapSelect.setColumn(nrow, "SEGMENT", "");
        	this.dsSapSelect.setColumn(nrow, "IN_CHARGE_USER", "");
        	*/
        	this.dsSapSelectX.clearData();
        	nrow = this.dsSapSelectX.addRow();

        	this.dsSapSelectX.setColumn(nrow, "PRCTR_NAME", "X");
         	this.dsSapSelectX.setColumn(nrow, "LONG_TEXT", "X");
        	this.dsSapSelectX.setColumn(nrow, "IN_CHARGE", "");
        	this.dsSapSelectX.setColumn(nrow, "DEPARTMENT", "");
        	this.dsSapSelectX.setColumn(nrow, "PRCTR_HIER_GRP", "");
        	this.dsSapSelectX.setColumn(nrow, "LOGSYSTEM", "");
        	this.dsSapSelectX.setColumn(nrow, "SEGMENT", "");
        	this.dsSapSelectX.setColumn(nrow, "IN_CHARGE_USER", "");

        	this.dsSapSelect1.clearData();

        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "TY_GUBUN") == "PROFIT")
        		{
        			this.dsSapSelect.clearData();
        			nrow = this.dsSapSelect.addRow();
        			this.dsSapSelect.setColumn(nrow, "PRCTR_NAME", this.dsData.getColumn(0, "DS_PROJECT") + this.dsList.getColumn(i, "DS_CODE"));
        			this.dsSapSelect.setColumn(nrow, "LONG_TEXT", this.dsData.getColumn(0, "DS_PROJECT") + this.dsList.getColumn(i, "DS_CODE"));
        			this.dsSapSelect.setColumn(nrow, "IN_CHARGE", "");
        			this.dsSapSelect.setColumn(nrow, "DEPARTMENT", "");
        			this.dsSapSelect.setColumn(nrow, "PRCTR_HIER_GRP", "");
        			this.dsSapSelect.setColumn(nrow, "LOGSYSTEM", "");
        			this.dsSapSelect.setColumn(nrow, "SEGMENT", "");
        			this.dsSapSelect.setColumn(nrow, "IN_CHARGE_USER", "");


        			this.dsSapSelect1.clearData();
        			nrow = this.dsSapSelect1.addRow();

        			this.dsSapSelect1.setColumn(nrow, "KOKRS", this.dsList.getColumn(i, "KOKRS"));
        			this.dsSapSelect1.setColumn(nrow, "PRCTR",  this.dsList.getColumn(i,"CODE"));
        			this.dsSapSelect1.setColumn(nrow, "DATETO", this.dsList.getColumn(i,"DATBI"));
        			this.dsSapSelect1.setColumn(nrow, "DATEFROM", this.dsList.getColumn(i,"DATAB"));
        			this.dsSapSelect1.setColumn(nrow, "VERAK", "김혜진");
        			this.dsSapSelect1.setColumn(nrow, "WAERS", "KRW");

        			// SAP 호출
        			var strSvcId    = "sap";
        			var strSvcType  = "sap";
        			var inProc		= "_dsProcSap";
        			var inData      = "select=dsSap ST_IS_DATA=dsSapSelect ST_IS_DATAX=dsSapSelectX ST_IS_HEAD=dsSapSelect1";
        			var outData     = "dsExport=export";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcType , 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc, false); // 통신방법 정의 [생략가능]

        		}
        	}
        }



        // 코스트 센터.
        this.fnSapSub = function() {

        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "ZERP_FI_0018");

        	this.dsSap1Select.clearData();

        	this._cnt = 0;
        	this._chkcnt = 0;
        	this.msg = "";

        // 	var cd_project = this.dsData.getColumn(0, "CD_PROJECT_COST").split(",");
        // 	this._cnt = cd_project.length;

        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "TY_GUBUN") == "COST")
        		{
        			this._cnt++;
        		}
        	}

        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "TY_GUBUN") == "COST")
        		{
        			this.dsSap1Select.clearData();
        			var nrow = this.dsSap1Select.addRow();
        			// IN 파라미터 셋팅
        			this.dsSap1Select.setColumn(nrow, "COSTCENTER", this.dsList.getColumn(i, "CODE"));
        			this.dsSap1Select.setColumn(nrow, "VALID_FROM", "");
        			this.dsSap1Select.setColumn(nrow, "VALID_TO", "");
        			this.dsSap1Select.setColumn(nrow, "PERSON_IN_CHARGE", "");
        			this.dsSap1Select.setColumn(nrow, "DEPARTMENT", "");
        			this.dsSap1Select.setColumn(nrow, "COSTCENTER_TYPE", "");
        			this.dsSap1Select.setColumn(nrow, "COSTCTR_HIER_GRP", "");
        			this.dsSap1Select.setColumn(nrow, "COMP_CODE", "");
        			this.dsSap1Select.setColumn(nrow, "BUS_AREA", "");
        			this.dsSap1Select.setColumn(nrow, "CURRENCY", "");
        			this.dsSap1Select.setColumn(nrow, "CURRENCY_ISO", "");
        			this.dsSap1Select.setColumn(nrow, "PROFIT_CTR", "");
        			this.dsSap1Select.setColumn(nrow, "RECORD_QUANTITY", "");
        			this.dsSap1Select.setColumn(nrow, "LOCK_IND_ACTUAL_PRIMARY_COSTS", "");
        			this.dsSap1Select.setColumn(nrow, "LOCK_IND_PLAN_PRIMARY_COSTS", "");
        			this.dsSap1Select.setColumn(nrow, "LOCK_IND_ACT_SECONDARY_COSTS", "");
        			this.dsSap1Select.setColumn(nrow, "LOCK_IND_PLAN_SECONDARY_COSTS", "");
        			this.dsSap1Select.setColumn(nrow, "LOCK_IND_ACTUAL_REVENUES", "");
        			this.dsSap1Select.setColumn(nrow, "LOCK_IND_PLAN_REVENUES", "");
        			this.dsSap1Select.setColumn(nrow, "LOCK_IND_COMMITMENT_UPDATE", "");
        			this.dsSap1Select.setColumn(nrow, "CONDITION_TABLE_USAGE", "");
        			this.dsSap1Select.setColumn(nrow, "APPLICATION", "");
        			this.dsSap1Select.setColumn(nrow, "CSTG_SHEET", "");
        			this.dsSap1Select.setColumn(nrow, "ACTY_INDEP_TEMPLATE", "");
        			this.dsSap1Select.setColumn(nrow, "ACTY_DEP_TEMPLATE", "");
        			this.dsSap1Select.setColumn(nrow, "ADDR_TITLE", "");
        			this.dsSap1Select.setColumn(nrow, "ADDR_NAME1", "");
        			this.dsSap1Select.setColumn(nrow, "ADDR_NAME2", "");
        			this.dsSap1Select.setColumn(nrow, "ADDR_NAME3", "");
        			this.dsSap1Select.setColumn(nrow, "ADDR_NAME4", "");
        			this.dsSap1Select.setColumn(nrow, "ADDR_STREET", "");
        			this.dsSap1Select.setColumn(nrow, "ADDR_CITY", "");
        			this.dsSap1Select.setColumn(nrow, "ADDR_DISTRICT", "");
        			this.dsSap1Select.setColumn(nrow, "ADDR_COUNTRY", "");
        			this.dsSap1Select.setColumn(nrow, "ADDR_COUNTRY_ISO", "");
        			this.dsSap1Select.setColumn(nrow, "ADDR_TAXJURCODE", "");
        			this.dsSap1Select.setColumn(nrow, "ADDR_PO_BOX", "");
        			this.dsSap1Select.setColumn(nrow, "ADDR_POSTL_CODE", "");
        			this.dsSap1Select.setColumn(nrow, "ADDR_POBX_PCD", "");
        			this.dsSap1Select.setColumn(nrow, "ADDR_REGION", "");
        			this.dsSap1Select.setColumn(nrow, "TELCO_LANGU", "");
        			this.dsSap1Select.setColumn(nrow, "TELCO_LANGU_ISO", "");
        			this.dsSap1Select.setColumn(nrow, "TELCO_TELEPHONE", "");
        			this.dsSap1Select.setColumn(nrow, "TELCO_TELEPHONE2", "");
        			this.dsSap1Select.setColumn(nrow, "TELCO_TELEBOX", "");
        			this.dsSap1Select.setColumn(nrow, "TELCO_TELEX", "");
        			this.dsSap1Select.setColumn(nrow, "TELCO_FAX_NUMBER", "");
        			this.dsSap1Select.setColumn(nrow, "TELCO_TELETEX", "");
        			this.dsSap1Select.setColumn(nrow, "TELCO_PRINTER", "");
        			this.dsSap1Select.setColumn(nrow, "TELCO_DATA_LINE", "");
        			this.dsSap1Select.setColumn(nrow, "JV_VENTURE", "");
        			this.dsSap1Select.setColumn(nrow, "JV_REC_IND", "");
        			this.dsSap1Select.setColumn(nrow, "JV_EQUITY_TYP", "");
        			this.dsSap1Select.setColumn(nrow, "JV_OTYPE", "");
        			this.dsSap1Select.setColumn(nrow, "JV_JIBCL", "");
        			this.dsSap1Select.setColumn(nrow, "JV_JIBSA", "");
        			this.dsSap1Select.setColumn(nrow, "NAME", this.dsData.getColumn(0, "DS_PROJECT") + this.dsList.getColumn(i, "DS_CODE"));
        			this.dsSap1Select.setColumn(nrow, "DESCRIPT", this.dsData.getColumn(0, "DS_PROJECT")+ this.dsList.getColumn(i, "DS_CODE"));
        			this.dsSap1Select.setColumn(nrow, "FUNC_AREA", "");
        			this.dsSap1Select.setColumn(nrow, "ACTY_DEP_TEMPLATE_ALLOC_CC", "");
        			this.dsSap1Select.setColumn(nrow, "ACTY_INDEP_TEMPLATE_ALLOC_CC", "");
        			this.dsSap1Select.setColumn(nrow, "FUNC_AREA_LONG", "");
        			this.dsSap1Select.setColumn(nrow, "PERSON_IN_CHARGE_USER", "");

        			// SAP 호출
        			var strSvcId    = "sap1";
        			var strSvcType  = "sap";
        			var inProc		= "_dsProcSap";
        			var inData      = "select=dsSap ST_IS_DATA=dsSap1Select";
        			var outData     = "dsExport=export dsET_RETURN=ET_RETURN";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcType , 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        								callBackFnc, false); // 통신방법 정의 [생략가능]
        		}
        	}

        }


        this.fnPS = function()
        {
        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "ZERP_PS_0018");

        	this.dsSapPS = new Dataset();
        	//this.dsSap.addColumn("I_CBS", "string");
        	this.dsSapPS.addColumn("I_POST1", "string");
        	//this.dsSapPS.addColumn("I_PROFL", "string");
        	this.dsSapPS.addColumn("I_PSPID", "string");

        	this._cnt = 0;
        	this._chkcnt = 0;
        	this.msg = "";

        	this.dsSapPS.clearData();

        // 	var cd_project = this.dsData.getColumn(0, "CD_PROJECT_PROJECT").split(",");
        // 	this._cnt = cd_project.length;

        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "TY_GUBUN") == "PROJECT")
        		{
        			this._cnt++;
        		}
        	}

        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "TY_GUBUN") == "PROJECT")
        		{
        			var today = this.gfnGetDate();

        			this.dsSapPS.clearData();
        			var nrow = this.dsSapPS.addRow();
        			// IN 파라미터 셋팅
        			//this.dsSap.setColumn(nrow, "I_CBS", "");
        			this.dsSapPS.setColumn(nrow, "I_POST1", this.dsData.getColumn(0, "DS_PROJECT") + this.dsList.getColumn(i, "DS_CODE"));
        			this.dsSapPS.setColumn(nrow, "I_PSPID", this.dsList.getColumn(i, "CODE"));

        			// SAP 호출
        			var strSvcId    = "sap_ps";
        			var strSvcType  = "sap";
        			var inProc		= "_dsProcSap";
        			var inData      = "select=dsSapPS";
        			var outData     = "dsExport=export";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcType , 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc, false); // 통신방법 정의 [생략가능]
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DQA_PRJ_NAME_UPDATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
