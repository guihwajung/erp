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
            this.set_titletext("자산변동내역");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_ASSETCHANGESEL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_DEPT_ACNT\"/><Col id=\"DT_START\"/><Col id=\"DT_END\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("보유부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_START","ccfCD_DEPT_ACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ccfDT_START","staDT_START:0.0","10.0","115","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta05","ccfDT_START:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ccfDT_END","sta05:0.0","10.0","115","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
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

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfDT_END","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT_ACNT.form.DSTextBox","value","dsSearch","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHN_ASSETCHANGESELECT.xfdl", function() {
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

        };

        this.fnSetExtendButton = function() {
        	this.btnViewSlip   = this.gfnFormButtonAdd("ViewSlip"  , "fnViewSlip"); 	// 전표조회
        	this.btnViewChange = this.gfnFormButtonAdd("ViewChange", "fnViewChange"); 	// 변동정보
        	this.btnAssetInfo  = this.gfnFormButtonAdd("AssetInfo" , "fnAssetInfo");  	// 자산정보

        	this.btnViewSlip.set_enable(false);
        	this.btnViewChange.set_enable(false);
        	this.btnAssetInfo.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//조회
        	this.ccfCD_CORP      = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ccfDT_START     = this.divSearch.form.ccfDT_START;
        	this.ccfDT_END       = this.divSearch.form.ccfDT_END;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetButton = function() {

        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"     , "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("DT_START"    , "string");
        	this.dsSelect.addColumn("DT_END"      , "string");
        }

        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHN_ASSETCHANGESELECT");

        	// 법인코드
        	this.ccfCD_CORP.BeforeUserDataSetParam      = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged          = "fnAfterCDTextChanged";

        	// 보유부서
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_ACNT.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	this.dsSearch.setColumn(0, "CD_CORP" , this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP" , this.AuthClient.DS_CORP);

        	this.dsSearch.setColumn(0, "DT_START", this.gfnGetDate().substring(0,6) + "01");
        	this.dsSearch.setColumn(0, "DT_END"  , this.gfnGetDate());
        }

        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {

        		if(this.dsList.rowcount > 0) {
        			this.btnViewSlip.set_enable(true);
        			this.btnViewChange.set_enable(true);
        			this.btnAssetInfo.set_enable(true);
        		} else {
        			this.btnViewSlip.set_enable(false);
        			this.btnViewChange.set_enable(false);
        			this.btnAssetInfo.set_enable(false);
        		}

        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.FormBtns.Save.set_enable(false);
        	}
        }

        this.fnSelectValidation = function() {

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.gfnAlert("법인코드를 입력하지 않았습니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.dsSearch.getColumn(0, "DT_START") == "") {
        		this.gfnAlert("시작 기간이 입력되지 않았습니다.");
        		this.ccfDT_START.setFocus();
        		return false;
        	}

        	if(this.dsSearch.getColumn(0, "DT_END").value == "") {
        		this.gfnAlert("종료 기간이 입력되지 않았습니다.");
        		this.ccfDT_END.setFocus();
        		return false;
        	}

        	if(this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_START"), this.dsSearch.getColumn(0, "DT_END")) <= -1){
        		this.gfnAlert("기간이 올바르지 않습니다.");
        		this.ccfDT_START.setFocus();
        		return false;
        	}
        	return true;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "DT_START"    , this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSelect.setColumn(0, "DT_END"      , this.dsSearch.getColumn(0, "DT_END"));

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
        		//dsUserParam.setColumn(nrow, "LEVLV_DEPT_ACNT", this.UserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "LEVCD_DEPT_ACNT", this.UserInfo.LEVCD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	// 보유부서
        	if(id == "ccfCD_DEPT_ACNT") {
        		var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        		if (!this.gfnIsNull(cdCorp)) {
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");		//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");				//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);			//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");				//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");				//현장/본사여부
        			dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        			dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "GR_SEARCH"	    , this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		} else {
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
        	}

        	return true;
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

        	if(this.gfnIsNull(this.btnViewSlip)) return;

        	if(this.dsList.rowcount > 0) {
        		this.btnViewSlip.set_enable(true);
        		this.btnViewChange.set_enable(true);
        		this.btnAssetInfo.set_enable(true);
        	} else {
        		this.btnViewSlip.set_enable(false);
        		this.btnViewChange.set_enable(false);
        		this.btnAssetInfo.set_enable(false);
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	return true;
        }

        /**
        	전표조회 팝업.
        */
        this.fnViewSlip = function(obj,e) {

        	if(this.gfnIsNull(nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"),"")),"-",""))){
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};

        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"));

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        }

        /**
        	변동정보 팝업.
        */
        this.fnViewChange = function(obj,e) {

        	var param = {};

        	param.CD_CORP    = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP    = this.dsSearch.getColumn(0, "DS_CORP");
        	param.CD_ASSET   = this.dsList.getColumn(this.dsList.rowposition, "CD_ASSET");
        	param.DS_ASSET   = this.dsList.getColumn(this.dsList.rowposition, "DS_ASSET");
        	param.CD_ACASSET = this.dsList.getColumn(this.dsList.rowposition, "CD_ACASSET");
        	param.DS_ACASSET = this.dsList.getColumn(this.dsList.rowposition, "DS_ACASSET");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHN_ASSETCHG", "", param);
        }

        /**
        	자산정보 팝업.
        */
        this.fnAssetInfo = function(obj,e) {

        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};

        	param.CD_CORP    = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP    = this.dsSearch.getColumn(0, "DS_CORP");
        	param.CD_ASSET   = this.dsList.getColumn(this.dsList.rowposition, "CD_ASSET");
        	param.DS_ASSET   = this.dsList.getColumn(this.dsList.rowposition, "DS_ASSET");
        	param.CD_ACASSET = this.dsList.getColumn(this.dsList.rowposition, "CD_ACASSET");
        	param.DS_ACASSET = this.dsList.getColumn(this.dsList.rowposition, "DS_ACASSET");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHN_ASSETREG", "", param);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staCD_DEPT_ACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_DEPT_ACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staDT_START.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.fnViewChange,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHN_ASSETCHANGESELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
