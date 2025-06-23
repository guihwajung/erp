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
            this.set_titletext("자산이동내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTable", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_ASSETMOVESEL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"FRDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TODATE\" type=\"STRING\" size=\"256\"/><Column id=\"TODEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TODEPT\" type=\"STRING\" size=\"256\"/><Column id=\"FRDEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FRDEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ASSETINFO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ASSETINFO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ASSEMOK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ASSEMOK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"FRDATE\"/><Col id=\"TODATE\"/><Col id=\"TODEPT\"/><Col id=\"FRDEPT\"/><Col id=\"CD_ASSETINFO\"/><Col id=\"CD_ASSEMOK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveCheck", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ASSET\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","staCD_CORP:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFRDATE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("이동일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ccfFRDATE","staFRDATE:0.0","staFRDATE:10.0","115","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ccfTODATE","staFRDATE:0.0","staFRDATE:10.0","115","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTODEPT","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("전출부서");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTODEPT","staTODEPT:0.0","staTODEPT:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFRDEPT","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("전입부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfFRDEPT","staFRDEPT:0.0","staFRDEPT:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ASSETINFO","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("자산코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ASSETINFO","staCD_ASSETINFO:0.0","staCD_ASSETINFO:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFASSETINFO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ASSEMOK","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("세목코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ASSEMOK","staCD_ASSEMOK:0.0","staCD_ASSEMOK:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFASSETSEMOK");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta05","0.0","staCD_CORP:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","102",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DEP","75","-34","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_DEP");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfFRDATE","value","dsSearch","FRDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfTODATE","value","dsSearch","TODATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfTODEPT.form.CDTextBox","value","dsSearch","TODEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfFRDEPT.form.CDTextBox","value","dsSearch","FRDEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_ASSETINFO.form.CDTextBox","value","dsSearch","CD_ASSETINFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_ASSEMOK.form.CDTextBox","value","dsSearch","CD_ASSEMOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_ASSETINFO.form.DSTextBox","value","dsSearch","DS_ASSETINFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_ASSEMOK.form.DSTextBox","value","dsSearch","DS_ASSEMOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfTODEPT.form.DSTextBox","value","dsSearch","DS_TODEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccfFRDEPT.form.DSTextBox","value","dsSearch","DS_FRDEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHN_ASSETMOVESELECT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	this.dsSearch.setColumn(0, "FRDATE", this.gfnGetDate().substring(0,6) + "01");
        	this.dsSearch.setColumn(0, "TODATE", this.gfnGetDate());
        };

        this.fnSetExtendButton = function() {
        	this.btnOutIssueSlip  = this.gfnFormButtonAdd("OutIssueSlip" , "fnIssueSlip"); 		// 전출전표조회
        	this.btnInIssueSlip   = this.gfnFormButtonAdd("InIssueSlip"  , "fnIssueSlip"); 		// 전입전표조회
        	this.btnAssetMove     = this.gfnFormButtonAdd("AssetMove"    , "fnAssetMove"); 		// 이동정보
        	this.btnViewAssetInfo = this.gfnFormButtonAdd("ViewAssetInfo", "fnViewAssetInfo"); 	// 자산정보
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//조회
        	this.ccfCD_CORP      = this.divSearch.form.ccfCD_CORP;
        	this.ccfFRDATE       = this.divSearch.form.ccfFRDATE;
        	this.ccfTODATE       = this.divSearch.form.ccfTODATE;
        	this.ccfTODEPT       = this.divSearch.form.ccfTODEPT;
        	this.ccfFRDEPT       = this.divSearch.form.ccfFRDEPT;
        	this.ccfCD_ASSETINFO = this.divSearch.form.ccfCD_ASSETINFO;
        	this.ccfCD_ASSEMOK   = this.divSearch.form.ccfCD_ASSEMOK;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetButton = function() {

        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("FRDATE"       , "string");
        	this.dsSelect.addColumn("TODATE"       , "string");
        	this.dsSelect.addColumn("TODEPT"       , "string");
        	this.dsSelect.addColumn("FRDEPT"       , "string");
        	this.dsSelect.addColumn("CD_ASSETINFO" , "string");
        	this.dsSelect.addColumn("CD_ASSEMOK"   , "string");
        	this.dsSelect.addColumn("CD_CORP"      , "string");

        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP"   , "string");
        	this.dsIssueSlip.addColumn("TXT_ASSET" , "string");
        	this.dsIssueSlip.addColumn("CD_SITE_BH", "string");
        	this.dsIssueSlip.addColumn("ID_TRANS"  , "string");

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_TRADE" , "string");

        	this.dsMoveCancel = new Dataset();
        	this.dsMoveCancel.addColumn("CD_CORP"  , "string");
        	this.dsMoveCancel.addColumn("TXT_ASSET", "string");
        }

        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHN_ASSETMOVESELECT");

        	this.dxGrid.set_selecttype("cell");

        	this.ccfCD_CORP.BeforeUserDataSetParam      = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged          = "fnAfterCDTextChanged";

        	this.ccfTODEPT.BeforeUserDataSetParam       = "fnBeforeUserDataSetParam";
        	this.ccfTODEPT.AfterCDTextChanged           = "fnAfterCDTextChanged";

        	this.ccfFRDEPT.BeforeUserDataSetParam       = "fnBeforeUserDataSetParam";
        	this.ccfFRDEPT.AfterCDTextChanged           = "fnAfterCDTextChanged";

        	this.ccfCD_ASSETINFO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ASSETINFO.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	this.ccfCD_ASSEMOK.BeforeUserDataSetParam   = "fnBeforeUserDataSetParam";
        	this.ccfCD_ASSEMOK.AfterCDTextChanged       = "fnAfterCDTextChanged";

        	this.btnOutIssueSlip.set_enable(false);
        	this.btnInIssueSlip.set_enable(false);
        	this.btnAssetMove.set_enable(false);
        	this.btnViewAssetInfo.set_enable(false);
        }

        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.dsSaveCheck.clearData();
        	}
        }

        this.fnSelectValidation = function() {

        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("법인코드를 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.ccfFRDATE.value)) {
        		this.ccfFRDATE.setFocus();
        		this.gfnAlert("시작 기간이 입력되지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.ccfTODATE.value)) {
        		this.ccfTODATE.setFocus();
        		this.gfnAlert("종료 기간이 입력되지 않았습니다.");
        		return false;
        	}

        	return true;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "FRDATE"      , this.dsSearch.getColumn(0, "FRDATE"));
        	this.dsSelect.setColumn(0, "TODATE"      , this.dsSearch.getColumn(0, "TODATE"));
        	this.dsSelect.setColumn(0, "TODEPT"      , this.dsSearch.getColumn(0, "TODEPT"));
        	this.dsSelect.setColumn(0, "FRDEPT"      , this.dsSearch.getColumn(0, "FRDEPT"));
        	this.dsSelect.setColumn(0, "CD_ASSETINFO", this.dsSearch.getColumn(0, "CD_ASSETINFO"));
        	this.dsSelect.setColumn(0, "CD_ASSEMOK"  , this.dsSearch.getColumn(0, "CD_ASSEMOK"));
        	this.dsSelect.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnAdd = function() {
        }

        this.fnDel = function() {
        }

        this.fnSave = function() {
        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	//법인코드
        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		//dsUserParam.setColumn(nrow, "LEVLV_DEPT_ACNT", this.UserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "LEVCD_DEPT_ACNT", this.UserInfo.LEVCD_DEPT_ACNT);
        	}

        	if(id == "ccfTODEPT" || id == "ccfFRDEPT") {
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        	}

        	if(id == "ccfCD_ASSETINFO") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        	}

        	if(id == "ccfCD_ASSEMOK") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ASSETINFO"))) {
        			this.gfnAlert("자산코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_ACASSET", this.dsSearch.getColumn(0, "CD_ASSETINFO"));
        		dsUserParam.setColumn(nrow, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfTODEPT.form.fnCodeFindClear();
        			this.ccfFRDEPT.form.fnCodeFindClear();
        		break;
        	}
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.fnSetCombo = function(obj,e) {
        };

        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        // 전표 조회
        this.fnIssueSlip = function (obj,e)
        {
        	var tradeDt;
        	(obj.name == "btnExt_OutIssueSlip") ? tradeDt = "TO" : tradeDt = "FR";	// 전출/전입

        	if(this.gfnIsNull(nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE_" + tradeDt), "")), "-", ""))){
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE_" + tradeDt));

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };

        /**
        	이동정보
        */
        this.fnAssetMove = function(obj,e) {
        	var param = {};

        	param.CD_CORP    = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP    = this.dsSearch.getColumn(0, "DS_CORP");
        	param.CD_ASSET   = this.dsList.getColumn(this.dsList.rowposition, "CD_ASSET");
        	param.DS_ASSET   = this.dsList.getColumn(this.dsList.rowposition, "DS_ASSET");
        	param.CD_ACASSET = this.dsList.getColumn(this.dsList.rowposition, "CD_ACASSET");
        	param.DS_ACASSET = this.dsList.getColumn(this.dsList.rowposition, "DS_ACASSET");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHN_ASSETMOVE", "fnPopupCallBack", param);
        }

        /**
        	자산정보
        */
        this.fnViewAssetInfo = function(obj,e) {

        	var param = {};

        	param.CD_CORP    = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP    = this.dsSearch.getColumn(0, "DS_CORP");
        	param.CD_ASSET   = this.dsList.getColumn(this.dsList.rowposition, "CD_ASSET");
        	param.DS_ASSET   = this.dsList.getColumn(this.dsList.rowposition, "DS_ASSET");
        	param.CD_ACASSET = this.dsList.getColumn(this.dsList.rowposition, "CD_ACASSET");
        	param.DS_ACASSET = this.dsList.getColumn(this.dsList.rowposition, "DS_ACASSET");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHN_ASSETREG", "fnPopupCallBack", param);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staFRDATE.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staFRDEPT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staCD_ASSEMOK.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHN_ASSETMOVESELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
