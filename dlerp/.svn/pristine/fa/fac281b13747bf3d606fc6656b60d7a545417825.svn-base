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
            this.set_titletext("SMS송신결과");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select_1</Col><Col id=\"SP\">DRCPR_APPROPRIATE_SELECT_1</Col></Row><Row><Col id=\"TARGET\">select_2</Col><Col id=\"SP\">DRCPR_APPROPRIATE_SELECT_2</Col></Row><Row><Col id=\"TARGET\">select_3</Col><Col id=\"SP\">DRCPR_APPROPRIATE_SELECT_3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SELECT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"DS_ACNTUNIT\"/><Col id=\"YN_OPTION\"/><Col id=\"YN_SELECT\"/><Col id=\"DT_FROM\"/><Col id=\"DT_TO\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_OPTION","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoYN_OPTION","staTY_OPTION:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divSearch_form_rdoYN_OPTION_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoYN_OPTION_innerdataset", obj);
            divSearch_form_rdoYN_OPTION_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">분양</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">옵션</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoYN_OPTION_innerdataset);
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SELECT","0.0","staCD_ACNTUNIT:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SELECT","staTY_SELECT:0.0","staCD_ACNTUNIT:10.0","320","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divSearch_form_rdoYN_SELECT_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoYN_SELECT_innerdataset", obj);
            divSearch_form_rdoYN_SELECT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">초과납부현황</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">환불자현황</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미환불자현황</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoYN_SELECT_innerdataset);
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_KIJUN","rdoYN_SELECT:0.0","staCD_ACNTUNIT:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_KIJUN:0.0","staCD_ACNTUNIT:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_PERIOD_TIL","ctclDT_FROM:0.0","staCD_ACNTUNIT:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_PERIOD_TIL:0.0","staCD_ACNTUNIT:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.rdoYN_OPTION","value","dsSearch","YN_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.rdoYN_SELECT","value","dsSearch","YN_SELECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRC_APPROPRIATE_STATUS.xfdl", function() {
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
        };

        /************************************************************************
        * 버튼 설정 : 화면(Tab) 전환시 마다 호출
        * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
        ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
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
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.rdoYN_OPTION = this.divSearch.form.rdoYN_OPTION;
        	this.rdoYN_SELECT = this.divSearch.form.rdoYN_SELECT;
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
        * 이벤트 설정
        ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRC_APPROPRIATE_STATUS_1");
        	this.dsSearch.setColumn(0, "DT_FROM", this.gfnGetDate());
        	this.dsSearch.setColumn(0, "DT_TO", this.gfnGetDate());
        	this.rdoYN_OPTION.set_value("N");
        	this.rdoYN_SELECT.set_value("1");
        	this.divSearch.form.staDT_KIJUN.set_visible(false);
        	this.divSearch.form.ctclDT_FROM.set_visible(false);
        	this.divSearch.form.ctclDT_TO.set_visible(false);
        	this.divSearch.form.staDT_PERIOD_TIL.set_visible(false);

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.setFocus();
        };

        /************************************************************************
        * 파라미터 설정
        ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("YN_OPTION", "string");

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect2.addColumn("TY_GUBUN", "string");
        	this.dsSelect2.addColumn("NO_CHASU", "string");
        	this.dsSelect2.addColumn("DT_FROM", "string");
        	this.dsSelect2.addColumn("DT_TO", "string");
        	this.dsSelect2.addColumn("YN_OPTION", "string");

        	this.dsSelect3 = new Dataset();
        	this.dsSelect3.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect3.addColumn("TY_GUBUN", "string");
        	this.dsSelect3.addColumn("NO_CHASU", "string");
        	this.dsSelect3.addColumn("DT_KIJUN", "string");
        	this.dsSelect3.addColumn("YN_OPTION", "string");
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

        	if(this.dsSearch.getColumn(0, "YN_SELECT")=="1"){
        		this.dsSelect.clearData();
        		this.dsSelect.addRow();
        		this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));  //사업자코드
        		this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));		//종류
        		this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));		//차수
        		this.dsSelect.setColumn(0, "YN_OPTION", this.dsSearch.getColumn(0, "YN_OPTION"));
        		var inData      = "select_1=dsSelect";
        		var outData     = "dsList=select_10";
        	}else if(this.dsSearch.getColumn(0, "YN_SELECT")=="2"){
        		this.dsSelect2.clearData();
        		this.dsSelect2.addRow();
        		this.dsSelect2.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6)); //사업자코드
        		this.dsSelect2.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));	//종류
        		this.dsSelect2.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));	//차수
        		this.dsSelect2.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        		this.dsSelect2.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        		this.dsSelect2.setColumn(0, "YN_OPTION", this.dsSearch.getColumn(0, "YN_OPTION"));
        		var inData      = "select_2=dsSelect2";
        		var outData     = "dsList=select_20";
        	}else if(this.dsSearch.getColumn(0, "YN_SELECT")=="3"){
        		this.dsSelect3.clearData();
        		this.dsSelect3.addRow();
        		this.dsSelect3.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));  //사업자코드
        		this.dsSelect3.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));	 //종류
        		this.dsSelect3.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));	 //차수
        		this.dsSelect3.setColumn(0, "DT_KIJUN", this.dsSearch.getColumn(0, "DT_FROM"));
        		this.dsSelect3.setColumn(0, "YN_OPTION", this.dsSearch.getColumn(0, "YN_OPTION"));
        		var inData      = "select_3=dsSelect3";
        		var outData     = "dsList=select_30";
        	}
        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        		strSvcType, 	// transaction을 요청할 구분
        		inProc,			// Procedure 정보 Dataset 이름
        		inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        		callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
        *	입력 버튼
        */
        this.fnAdd = function() {
        };

        /*
        *	삭제 버튼
        */
        this.fnDel = function() {
        };

        /*
        *	저장 버튼
        */
        this.fnSave = function() {
        };

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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지코드를 입력해주세요.");
        		return false;
        	}
        	if ((this.dsSearch.getColumn(0, "YN_SELECT")=="2" ||this.dsSearch.getColumn(0, "YN_SELECT")=="3") && this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM"))) {
        		this.gfnAlert("기준일자를 입력해주세요.");
        		return false;
        	}
        	return true;
        };

        /************************************************************************
        * 콜백 이벤트
        ************************************************************************/
        /*
        *	콜백 처리
        */
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        }

        /************************************************************************
        * 코드파인드 이벤트
        ************************************************************************/

        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
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

        this.rdoYN_SELECT_onitemchanged = function(obj,e)
        {
        	if(this.dsSearch.getColumn(0, "YN_SELECT")=="1"){
        		this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRC_APPROPRIATE_STATUS_1");
        		this.divSearch.form.staDT_KIJUN.set_visible(false);
        		this.divSearch.form.ctclDT_FROM.set_visible(false);
        		this.divSearch.form.ctclDT_TO.set_visible(false);
        		this.divSearch.form.staDT_PERIOD_TIL.set_visible(false);
        	}else if(this.dsSearch.getColumn(0, "YN_SELECT")=="2"){
        		this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRC_APPROPRIATE_STATUS_2");
        		this.divSearch.form.staDT_KIJUN.set_visible(true);
        		this.divSearch.form.ctclDT_FROM.set_visible(true);
        		this.divSearch.form.ctclDT_TO.set_visible(true);
        		this.divSearch.form.staDT_PERIOD_TIL.set_visible(true);
        	}else if(this.dsSearch.getColumn(0, "YN_SELECT")=="3"){
        		this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRC_APPROPRIATE_STATUS_3");
        		this.divSearch.form.staDT_KIJUN.set_visible(true);
        		this.divSearch.form.ctclDT_FROM.set_visible(true);
        		this.divSearch.form.ctclDT_TO.set_visible(false);
        		this.divSearch.form.staDT_PERIOD_TIL.set_visible(false);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.rdoYN_OPTION.addEventHandler("onitemchanged",this.rdoYN_OPTION_onitemchanged,this);
            this.divSearch.form.rdoYN_SELECT.addEventHandler("onitemchanged",this.rdoYN_SELECT_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRC_APPROPRIATE_STATUS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
