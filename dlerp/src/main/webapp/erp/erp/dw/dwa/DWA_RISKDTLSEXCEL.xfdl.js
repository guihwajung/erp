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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_RISKDTLSEXCEL_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWAPR_RISKDTLSEXCEL_SAVE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DWAPR_RISKDTLSEXCEL_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RISK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_RISK","ccfCD_SITE:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("리스크번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_RISK","staNO_RISK:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFRISK_01");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SILHENG",null,"10.0","200","24.0","5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_visible("false");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_RISK.form.CDTextBox","value","dsSearch","NO_RISK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtNO_SILHENG","value","dsSearch","NO_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWA_RISKDTLSEXCEL.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_RISK)
        	&& !this.gfnIsNull(this.getOwnerFrame().NO_SILHENG))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "NO_RISK", this.getOwnerFrame().NO_RISK);
        		this.ccfNO_RISK.form.DSTextBox.set_value(this.getOwnerFrame().NM_RISK);
        		this.dsSearch.setColumn(0, "NO_SILHENG", this.getOwnerFrame().NO_SILHENG);

        		this.fnExcelInsert();
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnExcelImport = this.gfnFormButtonAdd("btnExcelImport", "fnExcelImport");
        	this.btnRiskDtlsApl = this.gfnFormButtonAdd("btnRiskDtlsApl", "fnRiskDtlsApl");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_RISK = this.divSearch.form.ccfNO_RISK;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_RISK.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_RISK.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_RISKDTLSEXCEL");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_RISK", "string");
        	this.dsSelect.addColumn("NO_SILHENG", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_RISK", "string");
        	this.dsSave.addColumn("NO_SILHENG", "string");
        	this.dsSave.addColumn("CD_DKCOST", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("CD_COST1", "string");
        	this.dsSave.addColumn("CD_COST2", "string");
        	this.dsSave.addColumn("CD_COST3", "string");
        	this.dsSave.addColumn("CD_COST4", "string");
        	this.dsSave.addColumn("CD_COST5", "string");
        	this.dsSave.addColumn("CD_COST6", "string");
        	this.dsSave.addColumn("CD_COST7", "string");
        	this.dsSave.addColumn("CD_COST8", "string");
        	this.dsSave.addColumn("CD_COST9", "string");
        	this.dsSave.addColumn("CD_COST10", "string");
        	this.dsSave.addColumn("CD_COST11", "string");
        	this.dsSave.addColumn("CD_COST12", "string");
        	this.dsSave.addColumn("DS_ITEM", "string");
        	this.dsSave.addColumn("SZ_SIZE", "string");
        	this.dsSave.addColumn("DS_UNIT", "string");
        	this.dsSave.addColumn("QN_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("QN_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("CD_CBS", "string");
        	this.dsSave.addColumn("RM_BIGO", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_WRK", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("NO_RISK", "string");
        	this.dsExecute.addColumn("NO_SILHENG", "string");
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

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_RISK", this.dsSearch.getColumn(0, "NO_RISK"));
        	this.dsSelect.setColumn(0, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));

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
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_RISK", this.dsSearch.getColumn(0, "NO_RISK"));
        				this.dsSave.setColumn(nrow, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        				this.dsSave.setColumn(nrow, "CD_DKCOST", this.dsList.getColumn(i, "CD_DKCOST"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "CD_COST1", this.dsList.getColumn(i, "CD_COST1"));
        				this.dsSave.setColumn(nrow, "CD_COST2", this.dsList.getColumn(i, "CD_COST2"));
        				this.dsSave.setColumn(nrow, "CD_COST3", this.dsList.getColumn(i, "CD_COST3"));
        				this.dsSave.setColumn(nrow, "CD_COST4", this.dsList.getColumn(i, "CD_COST4"));
        				this.dsSave.setColumn(nrow, "CD_COST5", this.dsList.getColumn(i, "CD_COST5"));
        				this.dsSave.setColumn(nrow, "CD_COST6", this.dsList.getColumn(i, "CD_COST6"));
        				this.dsSave.setColumn(nrow, "CD_COST7", this.dsList.getColumn(i, "CD_COST7"));
        				this.dsSave.setColumn(nrow, "CD_COST8", this.dsList.getColumn(i, "CD_COST8"));
        				this.dsSave.setColumn(nrow, "CD_COST9", this.dsList.getColumn(i, "CD_COST9"));
        				this.dsSave.setColumn(nrow, "CD_COST10", this.dsList.getColumn(i, "CD_COST10"));
        				this.dsSave.setColumn(nrow, "CD_COST11", this.dsList.getColumn(i, "CD_COST11"));
        				this.dsSave.setColumn(nrow, "CD_COST12", this.dsList.getColumn(i, "CD_COST12"));
        				this.dsSave.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(i, "DS_ITEM"));
        				this.dsSave.setColumn(nrow, "SZ_SIZE", this.dsList.getColumn(i, "SZ_SIZE"));
        				this.dsSave.setColumn(nrow, "DS_UNIT", this.dsList.getColumn(i, "DS_UNIT"));
        				this.dsSave.setColumn(nrow, "QN_TT_DOKUB", this.dsList.getColumn(i, "QN_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "UP_TT_DOKUB", this.dsList.getColumn(i, "UP_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "AM_TT_DOKUB", this.dsList.getColumn(i, "AM_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "QN_TT_SILHENG", this.dsList.getColumn(i, "QN_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "UP_TT_SILHENG", this.dsList.getColumn(i, "UP_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "AM_TT_SILHENG", this.dsList.getColumn(i, "AM_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "CD_CBS", this.dsList.getColumn(i, "CD_CBS"));
        				this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	var fileName = this.dsSearch.getColumn(0, "CD_SITE") + "_" + this.dsSearch.getColumn(0, "NO_RISK") + "_" + this.ccfNO_RISK.form.DSTextBox.text;
        	this.gfnExcelExport(this.dxGrid, "", fileName);
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_RISK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_RISK.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("리스크 번호를 입력하세요.", "fnVaidateCallback");
        	}

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
        			// 해당 로직 이후 재조회 로직 포함되어있음.
        			this.fnExcelError();

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "execute") {
        		if(errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "executeAPL") {
        		if(errorCode == 0) {
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
        	if (id == "ccfNO_RISK") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE")
        	{
        		this.dsSearch.setColumn(0, "NO_RISK", "");
        		this.divSearch.form.ccfNO_RISK.form.DSTextBox.set_value("");
        		this.dsSearch.setColumn(0, "NO_SILHENG", "");

        	}
        	else if(id == "ccfNO_RISK")
        	{
        		// 코드,명칭 외 추가 컬럼 처리
        		var arr = codeFindData;

        		if(!this.gfnIsNull(arr))
        		{
        			this.ccfNO_RISK.form.DSTextBox.set_value(arr[0]["NM_RISK"]);
        			this.dsSearch.setColumn(0, "NO_SILHENG", arr[0]["NO_SILHENG"]);
        		}
        		else
        		{
        			this.ccfNO_RISK.form.DSTextBox.set_value("");
        			this.dsSearch.setColumn(0, "NO_SILHENG", "");
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if (id == "DWX_CFCBS_01") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 입력해주세요.");
        			return false;
        		}

         		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
         	}
        	return true;
        }
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

        this.fnExcelInsert = function()
        {
        	this.dsExecute.clearData();

        	var nrow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nrow, "TY_WRK", "INSERT");
        	this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExecute.setColumn(nrow, "NO_RISK", this.dsSearch.getColumn(0, "NO_RISK"));
        	this.dsExecute.setColumn(nrow, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExecute";
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

        this.fnExcelError = function()
        {
        	this.dsExecute.clearData();

        	var nrow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nrow, "TY_WRK", "ERROR");
        	this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExecute.setColumn(nrow, "NO_RISK", this.dsSearch.getColumn(0, "NO_RISK"));
        	this.dsExecute.setColumn(nrow, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExecute";
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

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.newvalue != e.oldvalue)
        	{
        		if(e.columnid == "QN_TT_DOKUB" || e.columnid == "UP_TT_DOKUB")
        		{
        			this.dsList.setColumn(e.row, "AM_TT_DOKUB", Math.floor(this.dsList.getColumn(e.row, "QN_TT_DOKUB") * this.dsList.getColumn(e.row, "UP_TT_DOKUB")));
        		}
        		else if(e.columnid == "QN_TT_SILHENG" || e.columnid == "UP_TT_SILHENG")
        		{
        			this.dsList.setColumn(e.row, "AM_TT_SILHENG", Math.floor(this.dsList.getColumn(e.row, "QN_TT_SILHENG") * this.dsList.getColumn(e.row, "UP_TT_SILHENG")));
        		}
        	}
        };

        // 아래부터는 확장버튼 기능

        this.fnExcelImport = function(obj,e) {


        	this.gfnExcelImport("dsList","","A3","fnExcelImportCallback","import",this);
        };

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        // 	if (dsSheet.rowcount > 1) {
        // 		trace(dsSheet.getColumn(1, "sheetname"));
        // 	}

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	for (var i = 0; i < this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column" + i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsListSub.copyData(dsOut);

        	this.dsList.set_enableevent(false);
        	for (var i = 0; i < dsOut.rowcount; i++) {
        		var srow = this.dsList.findRow("CD_COST", dsOut.getColumn(i, "CD_COST"));
        		if(this.gfnIsNull(dsOut.getColumn(i, "CD_COST"))){
        			srow = -1;
        		}
        		if(srow > -1){
        			this.dsList.setColumn(srow, this.ucFlag, "U");
        			this.dsList.copyRow(srow, dsOut, i);
        		}else{
        			var nrow = this.dsList.addRow();
        			this.dsList.setColumn(nrow, this.ucFlag, "I");

        			// 양식이 일치하는 경우 copyRow
        			this.dsList.copyRow(nrow, dsOut, i);
        		}

        		// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
        // 		this.dsListSub.setColumn(nrow, "CD_SYSTEM", dsOut.getColumn(i, "Column1"));
        // 		this.dsListSub.setColumn(nrow, "CD_TYPE", dsOut.getColumn(i, "Column2"));

        	}
        	this.dsList.set_enableevent(true);

        	this.gfnSetFormStatus(this, "I");
        };

        this.fnRiskDtlsApl = function(obj,e) {
        	this.dsExecute.clearData();

        	var nrow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nrow, "TY_WRK", "APL");
        	this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExecute.setColumn(nrow, "NO_RISK", this.dsSearch.getColumn(0, "NO_RISK"));
        	this.dsExecute.setColumn(nrow, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));

        	var strSvcId    = "executeAPL";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExecute";
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
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_RISKDTLSEXCEL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
