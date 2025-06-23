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
            this.set_titletext("매입세액 공제내역 집계표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_VAT_ALL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDT_FROM", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1기예정</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">1기확정</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">2기예정</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">2기확정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_DEPT\"/><Col id=\"YM_MAGAM\"/><Col id=\"DT_FROM\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"142.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_SELFACNT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT_SELFACNT:0.0","staCD_DEPT_SELFACNT:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_MAGAM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("작성년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_MAGAM","staYM_MAGAM:0.0","staYM_MAGAM:10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("작성기수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM00","staDT_FROM:0.0","staDT_FROM:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDT_FROM","staDT_FROM:0.0","staDT_FROM:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_innerdataset("dsDT_FROM");
            obj.set_text("1기예정");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ccfDT_FROM","staDT_FROM:0.0","staDT_FROM:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_inputtype("digit");
            obj.set_enable("false");
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ccfDT_TO","staDT_FROM:0.0","staDT_FROM:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_inputtype("digit");
            obj.set_enable("false");
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta08","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta08:0.0","10.0","249","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","15",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DEP","415","-34","200","20",null,null,null,null,null,null,this.divData.form);
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
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_MAGAM.form.TextBox","value","dsSearch","YM_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfDT_TO","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_DIVDEPT_ALL.xfdl", function() {
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

        	var sysYear = this.gfnGetDate().substring(0,4);
        	this.ctclYM_MAGAM.form.TextBox.set_value(sysYear);

        	this.ccfCD_CORP.setFocus();

        	// 법인코드세션
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        		this.ccfCD_CORP.form.CDTextBox_onchanged();
        	}
        };

        this.fnSetExtendButton = function() {


        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드

        	//조회
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ctclYM_MAGAM = this.divSearch.form.ctclYM_MAGAM;
        	this.cboDT_FROM = this.divSearch.form.cboDT_FROM;
        	this.ccfDT_FROM = this.divSearch.form.ccfDT_FROM;
        	this.ccfDT_TO = this.divSearch.form.ccfDT_TO;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetButton = function() {

        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("SABUN", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsUserPrm = new Dataset();
        };

        this.fnSetEvent = function() {

        	// 법인코드
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_DIVDEPT_ALL");

        	this.ccfCD_DEPT.CodeFindName = "DHX_CFSELFACNT";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.cboDT_FROM.set_index(0);
        }

        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}

        }

        this.fnSelectValidation = function() {

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드를 입력하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        // 	if(this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.value)) {
        // 		this.gfnAlert("세무단위를 입력하세요.");
        // 		this.ccfCD_DEPT.form.CDTextBox.setFocus();
        // 		return false;
        // 	}

        	if (this.gfnIsNull(this.ctclYM_MAGAM.form.TextBox.value)) {
        		this.gfnAlert("작성년도를 입력하세요.");
        		this.ctclYM_MAGAM.form.TextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.cboDT_FROM.value)) {
        		this.gfnAlert("작성기수를 입력하세요.");
        		this.cboDT_FROM.setFocus();
        		return false;
        	}

        	return true;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT", this.gfnTrim(this.ccfCD_DEPT.form.CDTextBox.value));
        	this.dsSelect.setColumn(0, "YM_WORK", nexacro.replaceAll(this.gfnNvl(this.ccfDT_TO.value,""),"-",""));
        	this.dsSelect.setColumn(0, "SABUN"	, this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "CD_CORP", this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value));

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
        };

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

        	// 법인코드
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if(id == "ccfCD_DEPT") {
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	// 법인코드
        	if (id == "ccfCD_CORP") {
        		this.ccfCD_DEPT.form.fnCodeFindClear();
        		if (arrData.length > 0) {
        			this.ccfCD_DEPT.form.CDTextBox.set_value(arrData[0]["CD_DEPT_SELFACNT"]);
        			this.ccfCD_DEPT.form.DSTextBox.set_value(arrData[0]["DS_DEPT_SELFACNT"]);
        		}
        	}

        	// 세무단위
        	if(id == "ccfCD_DEPT") {
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsSearch_onvaluechanged = function(obj,e) {

        	switch(e.columnid) {
              case "YM_MAGAM" :
                 this.setDt(e.newvalue, this.cboDT_FROM.value);
                 break;
              case "DT_FROM" :
                 this.setDt(this.ctclYM_MAGAM.form.TextBox.value, e.newvalue);
                 break;
            }

            if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
            }
        }

        this.setDt = function(ymMagam, noTax) {

           if(this.gfnIsNull(ymMagam) || this.gfnIsNull(noTax)) {

              dtFrom = "";
              dtTo = "";

           } else {

              switch(noTax) {
                 case "1" :
                    dtFrom = ymMagam + "-01";
                    dtTo = ymMagam + "-03";
                    break;
                 case "2" :
                    dtFrom = ymMagam + "-04";
                    dtTo = ymMagam + "-06";
                    break;
                 case "3" :
                    dtFrom = ymMagam + "-07";
                    dtTo = ymMagam + "-09";
                    break;
                 case "4" :
                    dtFrom = ymMagam + "-10";
                    dtTo = ymMagam + "-12";
                    break;
                 default :
                    dtFrom = "";
                    dtTo = "";
                    break;
              }
           }

           this.ccfDT_FROM.set_value(dtFrom);
           this.ccfDT_TO.set_value(dtTo);

        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_DEPT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staYM_MAGAM.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staDT_FROM.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staDT_FROM00.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_DIVDEPT_ALL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
