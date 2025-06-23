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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWBPR_WOINTLNDEVALCURST_SELECT</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DWBPR_WOINTLNDEVAL_EXECUTE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SELECT_01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PRGSSTATS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_PRGSSTATS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기준년도");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_WORK","staYR_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_SEQ","ctclYR_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("대여차수");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SEQ","staNO_SEQ:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFWOINTLND_01");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfNO_SEQ:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기성년월");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PRGSSTATS","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("진행상태");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_PRGSSTATS","staCD_PRGSSTATS:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCD_PRGSSTATS");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
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
            obj = new BindItem("item0","divSearch.form.ctclYR_WORK.form.TextBox","value","dsSearch","YR_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_SEQ.form.CDTextBox","value","dsSearch","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboCD_PRGSSTATS","value","dsSearch","CD_PRGSSTATS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DWB_WOINTLNDEVALCURST.xfdl", function() {
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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YR_WORK", today.substr(0,4));

        	this.btnHqCnf.set_enable(false);
        	this.btnHqCnfCnc.set_enable(false);
        	this.btnWointLndEval.set_enable(false);

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
        	this.btnHqCnf = this.gfnFormButtonAdd("btnHqCnf", "fnHqCnf");
        	this.btnHqCnfCnc = this.gfnFormButtonAdd("btnHqCnfCnc", "fnHqCnfCnc");

        	this.btnWointLndEval = this.gfnFormButtonAdd("btnWointLndEval", "fnWointLndEval");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYR_WORK = this.divSearch.form.ctclYR_WORK;
        	this.ccfNO_SEQ = this.divSearch.form.ccfNO_SEQ;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        	this.ccboCD_PRGSSTATS = this.divSearch.form.ccboCD_PRGSSTATS;

        	this.ccfNO_SEQ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_SEQ.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.dxGrid = this.divData.form.objGrid;

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_onselectchanged, this);
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_WOINTLNDEVALCURST", "DS_SITE", "GR_TREE");
        //	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_WOINTLNDEVALCURST");

        	var colChk = this.dxGrid.getBindCellIndex("body", "CHK");
        	var displaytype = this.dxGrid.getCellProperty("body", colChk, "displaytype");
        	displaytype = "expr:" + displaytype.replace("expr:","").replace("'checkboxcontrol'", "YN_CHKVIEW=='Y'?'checkboxcontrol':'none'");
        	this.dxGrid.setCellProperty("body", colChk, "displaytype", displaytype);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("YR_WORK", "string");
        	this.dsSelect.addColumn("NO_SEQ", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("CD_PRGSSTATS", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_WRK", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("YR_WORK", "string");
        	this.dsExecute.addColumn("NO_SEQ", "string");
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("YM_WORK", "string");
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

        	var yr_work = this.dsSearch.getColumn(0, "YR_WORK");
        	var ym_work = this.dsSearch.getColumn(0, "YM_WORK");

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "YR_WORK", yr_work.substr(0,4));
        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        	this.dsSelect.setColumn(0, "YM_WORK", ym_work.substr(0,6));
        	this.dsSelect.setColumn(0, "CD_PRGSSTATS", this.dsSearch.getColumn(0, "CD_PRGSSTATS"));

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

        // 확장 버튼 진행
        this.fnExecute = function(ty_wrk){

        	var yr_work = this.dsSearch.getColumn(0, "YR_WORK");
        	var ym_work = this.dsSearch.getColumn(0, "YM_WORK");

        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == "Y")
        		{
        			var nrow = this.dsExecute.addRow();
        			this.dsExecute.setColumn(nrow, "TY_WRK", ty_wrk);
        			this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsExecute.setColumn(nrow, "YR_WORK", yr_work.substr(0,4));
        			this.dsExecute.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        			this.dsExecute.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        			this.dsExecute.setColumn(nrow, "YM_WORK", ym_work.substr(0,6));
        		}
        	}

        	if (this.dsExecute.rowcount == 0) return;

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExecute";
        	var outData     = "";
        	var strArg      = ty_wrk;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYR_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년도를 입력하세요.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_SEQ"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_SEQ.form.TextBox.setFocus();
        		}
        		this.gfnAlert("대여차수를 입력하세요.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기성년월를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	if (svcID == "select")
        	{
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.btnHqCnf.set_enable(false);
        		this.btnHqCnfCnc.set_enable(false);
        	}
        	else if(svcID == "combo")
        	{
        		if(errorCode == 0)
        		{
        			this.divSearch.form.ccboCD_PRGSSTATS.set_index(0);
        		}
        	}
        	else if(svcID == "execute")
        	{
        		if (errorCode == 0) {
        			if(args == "HQCNF")
        			{
        				this.gfnAlert("본사확인 정상 처리되었습니다.");
        				this.FormBtns.Select.click();
        			}
        			else if(args == "HQCNFCNC")
        			{
        				this.gfnAlert("본사확인취소 정상 처리되었습니다.");
        				this.FormBtns.Select.click();
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfNO_SEQ") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0,"YR_WORK")))
        		{
        			this.gfnAlert("기준년도를 입력해주십시오.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        	}
        	return true;
        }

        this.codefind_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfNO_SEQ")
        	{
        		this.dsSearch.setColumn(0, "YM_WORK","");

        		if(arr.length > 0)
        		{
        			this.dsSearch.setColumn(0, "YM_WORK", arr[0]["YM_WORK"]);
        		}
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_onselectchanged = function(obj, e)
        {
        	if(this.dsList.getColumn(e.row, "BTN_HQCNF") == "Y")
        	{
        		this.btnHqCnf.set_enable(true);
        	}
        	else
        	{
        		this.btnHqCnf.set_enable(false);
        	}

        	if(this.dsList.getColumn(e.row, "BTN_HQCNFCNC") == "Y")
        	{
        		this.btnHqCnfCnc.set_enable(true);
        	}
        	else
        	{
        		this.btnHqCnfCnc.set_enable(false);
        	}

        	if(this.dsList.getColumn(e.row, "BTN_WOINTLNDEVAL") == "Y")
        	{
        		this.btnWointLndEval.set_enable(true);
        	}
        	else
        	{
        		this.btnWointLndEval.set_enable(false);
        	}
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

        // 조회값이 변경되었을 때. (기준년도 변경 관련되어 만든 함수)
        this.dsSearch_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "YR_WORK")
        	{
        		if(e.oldvalue != e.newvalue)
        		{
        			this.dsSearch.setColumn(0, "NO_SEQ","");
        			this.divSearch.form.ccfNO_SEQ.form.DSTextBox.set_value("");
        			this.dsSearch.setColumn(0, "YM_WORK","");
        		}
        	}
        };

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_ALL", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DW");
        	this.dsCombo.setColumn(0, "CD_TYPE", "35");
        	this.dsCombo.setColumn(0, "YN_USE", "Y");
        	this.dsCombo.setColumn(0, "YN_ALL", "Y");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_PRGSSTATS=combo0";
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

        // 아래부터 확장버튼.
        this.fnHqCnf = function(obj,e) {
        	this.fnExecute("HQCNF");
        }

        this.fnHqCnfCnc = function(obj,e) {
        	this.fnExecute("HQCNFCNC");
        }

        this.fnWointLndEval = function(obj,e) {
        	if(this.dsList.rowcount < 1 || this.dsList.rowposition < 0) return;

        	var row = this.dsList.rowposition;

        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(row, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(row, "DS_SITE");
        	param.YR_WORK = this.dsSearch.getColumn(0, "YR_WORK");
        	param.NO_SEQ = this.dsSearch.getColumn(0, "NO_SEQ");
        	param.DT_REQPERD = this.divSearch.form.ccfNO_SEQ.form.DSTextBox.text;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        	param.YN_WOINTLNDEVAL = "Y";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWB_WOINTLNDEVAL", "", param);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
        };
        this.loadIncludeScript("DWB_WOINTLNDEVALCURST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
