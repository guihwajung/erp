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
            this.set_titletext("부서별 연차 사용현황");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DACPR_MGTVACATIONDEPT_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DACPR_MGTVACATION_SELECT_P</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RETIRE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">재직자</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"VALUE\">휴직자</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"VALUE\">퇴직자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_MONVACA\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RPTTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_MONVACA\"/><Col id=\"TY_RETIRE\"/><Col id=\"TY_RPTTYPE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RPTTYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">S</Col><Col id=\"VALUE\">집계</Col></Row><Row><Col id=\"CODE\">D</Col><Col id=\"VALUE\">상세</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"142.0","0",null,null,null,null,null,this);
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_MONVACA","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("기준년도");
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_MONVACA","staYM_MONVACA:0.0","staYM_MONVACA:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enableevent("true");
            obj.set_text("2019");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_RETIRE","ctclYM_MONVACA:0.0","staYM_MONVACA:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("재직상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccfTY_RETIRE","staTY_RETIRE:0.0","staTY_RETIRE:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_RETIRE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("재직자");
            obj.set_value("01");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_RPTTYPE","0.0","staYM_MONVACA:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_RPTTYPE","staTY_RPTTYPE:0.0","staTY_RPTTYPE:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_RPTTYPE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_DEPT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("조직분류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_DEPT","staTY_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REFERENCE","ccfTY_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("기준일자");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REFERENCE","staDT_REFERENCE:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
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
            obj = new BindItem("item0","divSearch.form.ctclYM_MONVACA.form.TextBox","value","dsSearch","YM_MONVACA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfTY_RETIRE","value","dsSearch","TY_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.rdoTY_RPTTYPE","value","dsSearch","TY_RPTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_USEVACATIONDEPT.xfdl", function() {
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

        	//조회
        	this.FormBtns.Select.click();
        };

        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//조회
        	this.ctclYM_MONVACA = this.divSearch.form.ctclYM_MONVACA;
        	this.ccfTY_RETIRE 	= this.divSearch.form.ccfTY_RETIRE;
        	this.rdoTY_RPTTYPE 	= this.divSearch.form.rdoTY_RPTTYPE;
        	this.ccfTY_DEPT 	= this.divSearch.form.ccfTY_DEPT;		// 조직분류
        	this.ctclDT_REFERENCE = this.divSearch.form.ctclDT_REFERENCE;	// 기준일자
        	//그리드
        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetButton = function() {
        	this.FormBtns.Reset.set_enable(true);
        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_MONVACA", "string");
        	this.dsSelect.addColumn("CD_ORG2", "string");
        	this.dsSelect.addColumn("TY_RETIRE", "string");
        	this.dsSelect.addColumn("TY_DEPT", "string");  	//조직분류
        	this.dsSelect.addColumn("DT_REFERENCE", "string"); //기준일자

        }

        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAC_USEVACATIONDEPT");

        // 	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";
        // 	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        // 	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	var nowYear = this.gfnGetDate().substring(0,4);
        	this.divSearch.form.ctclYM_MONVACA.form.TextBox.set_value(nowYear);

        	this.ccfTY_RETIRE.set_index(1);
        	this.rdoTY_RPTTYPE.set_index(0);

        // 	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        // 	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        }

        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	this.fnSetButton();

        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.FormBtns.Add.set_enable(false);
         		this.FormBtns.Del.set_enable(false);
        		this.FormBtns.Save.set_enable(false);

        		var TY_RPTTYPE = this.rdoTY_RPTTYPE.value;
        		if (TY_RPTTYPE == "S") {
        			this.dxGrid.setFormatColProperty(2, "size", 120);
        			this.dxGrid.setFormatColProperty(3, "size", 0);
        			this.dxGrid.setFormatColProperty(4, "size", 0);
        		} else {
        			this.dxGrid.setFormatColProperty(1, "size", 0);
        			this.dxGrid.setFormatColProperty(2, "size", 120);
        			this.dxGrid.setFormatColProperty(3, "size", 80);
        			this.dxGrid.setFormatColProperty(4, "size", 80);
        		}
        	}

        }

        this.fnSelectValidation = function() {

        	if(this.gfnIsNull(this.ctclYM_MONVACA.form.TextBox.value)) {
        		this.ctclYM_MONVACA.form.TextBox.setFocus();
        		this.gfnAlert("기준년도를 입력해주세요");
        		return false;
        	}

        // 	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		this.gfnAlert("법인코드를 선택해주세요.");
        // 		return false;
        // 	}

        	return true;
        }


        //조회
        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "YM_MONVACA", this.ctclYM_MONVACA.form.TextBox.value);
        	this.dsSelect.setColumn(0, "CD_ORG2", "");
        	this.dsSelect.setColumn(0, "TY_RETIRE", this.ccfTY_RETIRE.value);
        	this.dsSelect.setColumn(0, "TY_DEPT", this.ccfTY_DEPT.form.CDTextBox.value);  //조직분류
        	this.dsSelect.setColumn(0, "DT_REFERENCE", this.ctclDT_REFERENCE.value); //기준일자

        	var TY_RPTTYPE = this.rdoTY_RPTTYPE.value;

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	// S집계 D상세
        	if (TY_RPTTYPE == "S") {

        		var inData      = "select=dsSelect";
        		var outData     = "dsList=select0";
        	} else {
        		var inData      = "select1=dsSelect";
        		var outData     = "dsList=select10";
        	}
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

        /*
         *	초기화 버튼
         */
        this.fnReset = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	this.ccfTY_RETIRE.set_index(0);
        	this.rdoTY_RPTTYPE.set_index(0);
        	this.ccfTY_DEPT.form.CDTextBox.set_value("");
        	this.ctclDT_REFERENCE.set_value(this.gfnGetDate());  // 기준일자
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id) {
        		case "ccfTY_DEPT":	//조직분류
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "DA");
        		break;
        	}
        	return true;
        };


        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	if(id == "ccfCD_CORP") {
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
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e) {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	return true;
        }

        this.dsInsertMake = function(nrow, i) {

        }

        this.dsUpdateMake = function(nrow, i) {

        }

        this.dsDeleteMake = function(nrow, i) {

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staTY_RETIRE.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staTY_RPTTYPE.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ctclDT_REFERENCE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_USEVACATIONDEPT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
