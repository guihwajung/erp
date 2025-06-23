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
            this.set_titletext("부가세검증(오류자료조회)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_VAT_ERROR_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"INCD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_SELFACNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALEBUY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">I</Col><Col id=\"DS_CODE\">매입</Col></Row><Row><Col id=\"CD_CODE\">O</Col><Col id=\"DS_CODE\">매출</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_SELFACNT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_SELFACNT","staCD_DEPT_SELFACNT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_DEPT_SELFACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT_BY_SELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM_TO","ccfCD_DEPT_ACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("증빙기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM_TO:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSPACE00","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staSPACE00:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SALEBUY","ctclDT_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoTY_SALEBUY","staTY_SALEBUY:0.0","10.0","130","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsTY_SALEBUY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_direction("vertical");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","60",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","INCD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.crdoTY_SALEBUY","value","dsSearch","TY_SALEBUY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPT_SELFACNT.form.CDTextBox","value","dsSearch","CD_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_VAT_ERROR.xfdl", function() {
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

        	var today = this.gfnGetDate();

        	this.dsSearch.setColumn(0, "DT_FROM", this.gfnGetFirstDate(today));
        	this.dsSearch.setColumn(0, "DT_TO", today);
        	this.crdoTY_SALEBUY.set_index(0);

        	this.dsSearch.setColumn(0, "CD_DEPT_SELFACNT", this.UserInfo.LEVCD_DEPT_SELFACNT);
        	this.divSearch.form.ccfCD_DEPT_SELFACNT.form.fnCodeFindLoad();

        	this.dsSearch.setColumn(0, "INCD_DEPT_ACNT", this.UserInfo.LEVCD_DEPT_ACNT_DOWN)
        	this.divSearch.form.ccfCD_DEPT_ACNT.form.fnCodeFindLoad();
        };

        this.fnSetExtendButton = function() {
        	this.btnDetailVat   = this.gfnFormButtonAdd("btnDetailVat", "fnDetailVat");
        	this.btnUpdVat		= this.gfnFormButtonAdd("btnUpdVat", "fnUpdVat");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//조회
        	this.ccfCD_DEPT_SELFACNT = this.divSearch.form.ccfCD_DEPT_SELFACNT;
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.crdoTY_SALEBUY = this.divSearch.form.crdoTY_SALEBUY;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetButton = function() {

        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("INCD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("LV_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("TY_SALEBUY", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
        }

        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_VAT_ERROR");

        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }


        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}

        }

        this.fnSelectValidation = function() {

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"))) {
        		this.ccfCD_DEPT_SELFACNT.form.CDTextBox.setFocus();
        		this.gfnAlert("세무단위를 입력하지 않았습니다.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "INCD_DEPT_ACNT"))) {
        		this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        		this.gfnAlert("귀속부서를 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM"))) {
        		this.ctclDT_FROM.setFocus();
        		this.gfnAlert("시작 기간이 입력되지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))) {
        		this.ctclDT_TO.setFocus();
        		this.gfnAlert("종료 기간이 입력되지 않았습니다.");
        		return false;
        	}

        	if (this.dsSearch.getColumn(0, "DT_FROM").substr(0,4) != this.dsSearch.getColumn(0, "DT_TO").substr(0,4)) {
        		this.gfnAlert("증빙 기간의 범위는 같은 회기 내에 해야 됩니다.");
        		return false;
        	}

        	return true;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "INCD_DEPT_ACNT", this.dsSearch.getColumn(0, "INCD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "LV_DEPT_ACNT", "");
        	this.dsSelect.setColumn(0, "TY_SALEBUY", this.dsSearch.getColumn(0, "TY_SALEBUY"));
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));

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
        	if(id == "ccfCD_DEPT_SELFACNT") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}
        	else if(id == "ccfCD_DEPT_ACNT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));
        	}

        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	return ;
        }

        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	if(this.dsList.rowposition < 0) return;

        	var cd_slip = this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP");
        	var no_vat = this.dsList.getColumn(this.dsList.rowposition, "NO_VAT");

        	this.fnVatOpen("S", cd_slip, no_vat, "");
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnVatOpen = function(iud_flag, cd_corp, no_slip, no_vat, yn_direct)
        {
        	var param = {};

        	param.IUD_FLAG = iud_flag;
        	param.NO_VAT = cd_corp;
        	param.CD_SLIP = no_slip;
        	param.TY_SALEBUY = "O";
        	param.YN_DIRECT = yn_direct;
        	param.VAT_MENU = "Y";
        	param.CD_DEPT = this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT");
        	param.DS_DEPT = this.ccfCD_DEPT_ACNT.form.DSTextBox.value;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_ISSUEVATDLG", "fnVatOpenCallback", param);
        }

        this.fnVatOpenCallback = function(strId, val)
        {
        	if(val == true)
        	 this.FormBtns.Select.click();
        }

        this.fnDetailVat = function()
        {
        	if(this.dsList.rowposition < 0) return;

        	var cd_slip = this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP");
        	var no_vat = this.dsList.getColumn(this.dsList.rowposition, "NO_VAT");

        	this.fnVatOpen("S", cd_slip, no_vat, "");
        }

        this.fnUpdVat = function()
        {
        	if(this.dsList.rowposition < 0) return;

        	var cd_slip = this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP");
        	var no_vat = this.dsList.getColumn(this.dsList.rowposition, "NO_VAT");

        	this.fnVatOpen("U", cd_slip, no_vat, "");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_DEPT_SELFACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staCD_DEPT_ACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_DEPT_ACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staDT_FROM_TO.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_VAT_ERROR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
