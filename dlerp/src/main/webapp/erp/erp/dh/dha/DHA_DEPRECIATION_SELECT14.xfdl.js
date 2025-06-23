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
            this.set_titletext("현가(보증금)");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_LA_PVDEPOSIT_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_LA_PVDEPOSIT_CALC</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"STD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP\"/><Col id=\"DEPT\"/><Col id=\"STD\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","staDT_FROM:0.0","staDT_FROM:10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCorp","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCorp","staCorp:0.0","staCorp:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSite","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사업지");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfSite","staSite:0.0","staSite:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staStd","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclStd","staStd:0.0","staStd:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","40",null,null,"0","0",null,null,null,null,this.divData.form);
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

            obj = new Static("staIrt",null,"11","134","20","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("이자율");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskIrt","staIrt:-90","12","90","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_format("!##.##");
            obj.set_limitbymask("both");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCorp.form.CDTextBox","value","dsSearch","CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfSite.form.CDTextBox","value","dsSearch","DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclStd.form.TextBox","value","dsSearch","STD");
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
        this.registerScript("DHA_DEPRECIATION_SELECT14.xfdl", function() {
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
        	this.btnCalc = this.gfnFormButtonAdd("Calc", "fnCalc", "데이터 생성");

        	this.btnCalc.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//조회
        	this.ccfCorp = this.divSearch.form.ccfCorp;
        	this.ccfSite = this.divSearch.form.ccfSite;
        	this.ctclStd = this.divSearch.form.ctclStd;

        	this.mskIrt = this.divData.form.mskIrt;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetButton = function() {

        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_STD", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("DT_STD", "string");
        	this.dsInsert.addColumn("RT_IRT", "string");

        }

        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_DEPRECIATION_SELECT14");

        	this.ccfCorp.CodeFindName = "DHX_CFCORP";
        	this.ccfCorp.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCorp.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfSite.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfSite.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfSite.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCorp.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCorp.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        	var toDay = this.gfnGetDate().substring(0,6);
        	this.divSearch.form.ctclStd.form.TextBox.set_value(toDay);


        }

        this.fnSearchInit = function(id) {
        	this.gfnSetFormStatus(this);
        };

        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		if (this.dxGrid.rowcount > 0) {
        			this.btnCalc.set_enable(true);
        		}
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.FormBtns.Save.set_enable(false);

        		this.gfnGridAfterSelect(this.dxGrid);

        	} else if(svcID == "save") {
        		this.gfnAlert("데이터 생성작업이 완료되었습니다.");

         		if (errorCode == 0) {
         			this.FormBtns.Select.click();
         		} else {
         			this.gfnAlert(errorMsg);
         		}

        	}

        }

        this.fnSelectValidation = function() {

        	if(this.gfnIsNull(this.ccfCorp.form.CDTextBox.value)) {
        		this.ccfCorp.form.CDTextBox.setFocus();
        		this.gfnAlert("법인코드를 입력하세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.ctclStd.form.TextBox.value)) {
        		this.ctclStd.setFocus();
        		this.gfnAlert("회계년월을 입력하세요.");
        		return false;
        	}

        	return true;
        }

        this.fnSaveValidation = function() {
        	if(this.gfnIsNull(this.ccfCorp.form.CDTextBox.value)) {
        		this.ccfCorp.form.CDTextBox.setFocus();
        		this.gfnAlert("법인코드를 입력하세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.ctclStd.form.TextBox.value)) {
        		this.ctclStd.setFocus();
        		this.gfnAlert("회계년월을 입력하세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.mskIrt.value)) {
        		this.mskIrt.setFocus();
        		this.gfnAlert("이자율을 입력하세요.");
        		return false;
        	}

        	return true;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.gfnTrim(this.ccfCorp.form.CDTextBox.value));
        	this.dsSelect.setColumn(0, "DT_STD", this.ctclStd.form.TextBox.value);
        	this.dsSelect.setColumn(0, "CD_SITE", this.gfnTrim(this.ccfSite.form.CDTextBox.value));

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

        	if(id == "ccfCorp") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if(id == "ccfSite") {
        		var cdCorp = this.ccfCorp.form.CDTextBox.text;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			return false;
        		}
        		//dsUserParam.setColumn(nrow, "VALUE", this.ccfSite.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "0000000");
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "02");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	if(id == "ccfCorp") {
        		this.ccfSite.form.fnCodeFindClear();
        		//this.gfnSetFormStatus(this, "I");
        	}else if(id == "ccfSite") {
        		//this.gfnSetFormStatus(this, "I");
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {

        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);

        		//this.btnCalc.set_enable(false);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		//this.btnCalc.set_enable(false);
        	}
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnCalc = function(obj,e) {

        	if (!this.fnSaveValidation()) return;

        	this.dsInsert.clearData();
        	this.dsInsert.addRow();

        	this.dsInsert.setColumn(0, "CD_CORP", this.gfnTrim(this.ccfCorp.form.CDTextBox.value));
        	this.dsInsert.setColumn(0, "DT_STD", this.ctclStd.form.TextBox.value);
        	this.dsInsert.setColumn(0, "RT_IRT", this.mskIrt.value);

        	if (this.dsInsert.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
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



        this.divData_mskIrt_onchanged = function(obj,e){
        // 	this.FormBtns.Add.set_enable(false);
        //  	this.FormBtns.Del.set_enable(false);
        // 	this.FormBtns.Save.set_enable(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCorp.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfSite.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staStd.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.divData.form.mskIrt.addEventHandler("onchanged",this.divData_mskIrt_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_DEPRECIATION_SELECT14.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
